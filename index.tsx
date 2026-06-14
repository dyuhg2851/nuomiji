import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ActiveMsgRuntime } from './utils/activeMsgRuntime';
import { KeepAlive } from './utils/keepAlive';
import { ProactiveChat } from './utils/proactiveChat';
import { VRScheduler } from './utils/vrWorld/scheduler';
import { installIOSStandaloneWorkaround } from './utils/iosStandalone';
import { installWakeListener } from './utils/proactivePushConfig';

// #region debug-point global-error-capture
// 全局错误捕获 - 用于诊断移动端黑屏问题
const showErrorOnPage = (error: Error | string, source?: string, extraInfo?: string) => {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 20px; background: #1a1a2e; color: #fff; font-family: monospace; min-height: 100vh;">
        <h2 style="color: #ff6b6b;">🚨 Error Detected</h2>
        <p style="color: #ffd93d;"><strong>Source:</strong> ${source || 'Unknown'}</p>
        <pre style="background: #16213e; padding: 10px; border-radius: 8px; overflow: auto; white-space: pre-wrap;">${error instanceof Error ? error.message + '\n\n' + (error.stack || '') : error}</pre>
        ${extraInfo ? `<p style="color: #ff9f43;"><strong>Extra Info:</strong></p><pre style="background: #16213e; padding: 10px; border-radius: 8px;">${extraInfo}</pre>` : ''}
        <hr style="border-color: #0f3460;">
        <p style="color: #4ecca3;">Debug Info:</p>
        <pre style="background: #16213e; padding: 10px; border-radius: 8px;">
UserAgent: ${navigator.userAgent}
Platform: ${navigator.platform}
Online: ${navigator.onLine}
Viewport: ${window.innerWidth}x${window.innerHeight}
CSS supports 100lvh: ${CSS?.supports?.('height', '100lvh') ?? 'N/A'}
ServiceWorker: ${'serviceWorker' in navigator ? 'supported' : 'not supported'}
IndexedDB: ${'indexedDB' in window ? 'supported' : 'not supported'}
        </pre>
      </div>
    `;
  }
  // 也发送到 localStorage 便于后续查看
  try {
    localStorage.setItem('debug_error_log', JSON.stringify({
      timestamp: new Date().toISOString(),
      source,
      message: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      extraInfo,
      userAgent: navigator.userAgent,
    }));
  } catch {}
};

// 捕获同步错误
window.addEventListener('error', (event) => {
  const errorInfo = `Error: ${event.error?.message || event.message}\nFilename: ${event.filename}\nLine: ${event.lineno}\nColumn: ${event.colno}`;
  showErrorOnPage(event.error || event.message, 'window.onerror', errorInfo);
  event.preventDefault();
});

// 捕获 Promise rejection
window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  const errorInfo = reason instanceof Error ? `Stack: ${reason.stack}` : `Reason: ${JSON.stringify(reason)}`;
  showErrorOnPage(reason instanceof Error ? reason : String(reason), 'unhandledrejection', errorInfo);
  event.preventDefault();
});

// 捕获网络请求错误
window.addEventListener('load', () => {
  const scripts = document.querySelectorAll('script');
  scripts.forEach((script, index) => {
    script.onerror = (event) => {
      const target = event.target as HTMLScriptElement;
      const errorInfo = `Script src: ${target.src}\nScript type: ${target.type}\nIndex: ${index}`;
      showErrorOnPage('Script load failed', 'script.onerror', errorInfo);
    };
  });
});

// 捕获资源加载错误
document.addEventListener('error', (event) => {
  const target = event.target as HTMLElement;
  if (target.tagName === 'SCRIPT') {
    const script = target as HTMLScriptElement;
    const errorInfo = `Failed to load script: ${script.src}\nType: ${script.type}`;
    showErrorOnPage('Resource load failed', 'document.error', errorInfo);
  }
}, true);

// 捕获 React 渲染错误
const originalConsoleError = console.error;
console.error = (...args) => {
  const message = args.map(a => a instanceof Error ? a.message + '\n' + a.stack : String(a)).join('\n');
  if (message.includes('Error') || message.includes('failed') || message.includes('exception')) {
    showErrorOnPage(message, 'console.error');
  }
  originalConsoleError.apply(console, args);
};
// #endregion debug-point global-error-capture

// Register the keep-alive Service Worker early so it's ready before any AI calls
KeepAlive.init().then(() => {
  // Resume any active proactive schedule after SW is ready
  ProactiveChat.resume();
  // Resume 「彼方」 autonomous-login schedules
  VRScheduler.resume();
  void ActiveMsgRuntime.init();
  // Record every wake the SW reports so the diagnostic panel can show "last received".
  installWakeListener();
}).catch((err) => {
  showErrorOnPage(err, 'KeepAlive.init');
});

installIOSStandaloneWorkaround();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
