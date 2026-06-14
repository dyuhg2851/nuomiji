# Debug Session: mobile-black-screen

## 症状描述
- 移动端浏览器打开项目后显示黑屏
- 桌面端可能正常显示
- 已修复的问题：vite.config.ts 配置冲突、importmap 版本不匹配、资源路径问题

## 假设列表

### H1: React 渲染错误
- 观察点：React 组件初始化时抛出异常
- 验证方式：捕获 React 渲染错误

### H2: IndexedDB 初始化失败
- 观察点：DB.openDB() 在移动端环境失败
- 验证方式：检查 IndexedDB 连接状态

### H3: Capacitor 模块加载失败
- 观察点：Capacitor.isNativePlatform() 在非原生环境抛出异常
- 验证方式：检查 Capacitor 模块加载状态

### H4: Service Worker 注册失败
- 观察点：KeepAlive.init() 失败导致阻塞
- 验证方式：检查 SW 注册状态

### H5: CSS 视口高度问题
- 观察点：100lvh 在移动端不被支持
- 验证方式：检查 --app-height CSS 变量值

## 状态
[OPEN] - 正在收集证据

## 下一步
添加 instrumentation 日志收集运行时错误