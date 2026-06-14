const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-D6bIMsQp.js","assets/vendor-react-24Oymk71.js","assets/githubClient-DAbL-DBI.js","assets/vendor-capacitor-Ckkc3DS5.js","assets/memory-palace-BIYgjY1f.js","assets/webdavClient-CuqkYjjO.js","assets/Settings-Cl2uVVA6.js","assets/Modal-pv085SnF.js","assets/mcdMcpClient-zyqgBYYl.js","assets/Character-99aSAYOm.js","assets/file-DrOI3gtx.js","assets/ChatConstants-Dr18R727.js","assets/minimaxApiKey-BqGw4F6T.js","assets/Chat-BBF79JyD.js","assets/minimaxTts-DyjxBgNg.js","assets/ttsCache-CXY0JFa0.js","assets/GroupChat-BC2ZBQX7.js","assets/ThemeMaker-ZWFYKsdp.js","assets/Appearance-CsJkHmqt.js","assets/DateApp-BmQLedX3.js","assets/UserApp-BG0Hbc2O.js","assets/JournalApp-BYG2fdSj.js","assets/RoomApp-CA789upN.js","assets/CheckPhone-4JZ_BzAY.js","assets/StudyApp-DdlQ9DWP.js","assets/WorldbookApp-DbAp3dsf.js","assets/BankApp-OGURGHfA.js","assets/XhsFreeRoamApp-DbMKuVeJ.js","assets/MusicApp-DNY43XAT.js","assets/CallApp-BgykVL2e.js","assets/GuidebookApp-DvwASdU5.js","assets/LifeSimApp-CypQVut9.js","assets/MemoryPalaceApp-BbuEmqpm.js","assets/QQBridge-BmttP_n4.js","assets/ValentineEvent-BGF7fRzk.js","assets/VRWorldApp-BdYjp3i9.js","assets/CharCreatorDevApp-CDggjsAN.js"])))=>i.map(i=>d[i]);
var cd=Object.defineProperty;var ld=(e,t,s)=>t in e?cd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var $n=(e,t,s)=>ld(e,typeof t!="symbol"?t+"":t,s);import{aQ as h,M as n,aR as Ya,aS as dd,d as ud,a7 as pd,a8 as md,e as fd,aT as hd,f as gd,g as xd,Q as yd,aM as bd,aU as wd,a9 as vd,h as _d,i as Sd,j as kd,aa as jd,k as $d,S as Id,ab as Nd,aV as Ad,aW as Cd,ac as Ed,ad as Td,l as Md,ae as Rd,af as Dd,T as Pd,I as Ld,aX as Od,ag as Fd,aY as Bd,F as Ud,U as Hd,R as ls,aN as Ja,ah as Zo,ai as ea,m as Ga,aZ as Wd,aj as Lc,n as zd,N as Xd,ak as Kd,al as Vd,V as Yd,am as Jd,D as Gd}from"./vendor-react-24Oymk71.js";import{D as $,I as $r,a6 as ys,t as qd,V as Qd,O as Zd,a5 as _t,P as eu,Z as Ir,_ as Le,e as Dn,f as Oc,Q as Nr,N as qa,T as tu,z as su,F as nu,a4 as ou,L as Fc,a8 as Bc,q as au,$ as ko,a0 as yi,a9 as ru,aa as iu,b as cu,g as bi,ag as wa,s as wi,h as lu,a as du,J as uu,K as pu}from"./memory-palace-BIYgjY1f.js";import{L as Hn,a as mu,C as yn,A as jo}from"./vendor-capacitor-Ckkc3DS5.js";import{R as Uc}from"./vendor-D6bIMsQp.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();var R=(e=>(e.Launcher="launcher",e.Settings="settings",e.Character="character",e.Chat="chat",e.GroupChat="group_chat",e.Music="music",e.ThemeMaker="thememaker",e.Appearance="appearance",e.Date="date",e.User="user",e.Journal="journal",e.Room="room",e.CheckPhone="check_phone",e.Study="study",e.Worldbook="worldbook",e.Bank="bank",e.SpecialMoments="special_moments",e.XhsFreeRoam="xhs_free_roam",e.Call="call",e.Guidebook="guidebook",e.LifeSim="lifesim",e.MemoryPalace="memory_palace",e.QQBridge="qq_bridge",e.VRWorld="vrworld",e.CharCreatorDev="char_creator_dev",e))(R||{});const fo="push_vapid_v1",fu="instant_push_config_v1",va={vapidPublicKey:"",vapidPrivateKey:""};let vi=!1;function hu(){if(!vi&&(vi=!0,!(typeof localStorage>"u")))try{if(localStorage.getItem(fo))return;const e=localStorage.getItem(fu);if(!e)return;const t=JSON.parse(e),s=((t==null?void 0:t.vapidPublicKey)||"").trim();if(!s)return;const o={vapidPublicKey:s,vapidPrivateKey:"",updatedAt:Date.now()};localStorage.setItem(fo,JSON.stringify(o))}catch{}}function da(){if(typeof localStorage>"u")return{...va};try{hu();const e=localStorage.getItem(fo);if(e)return{...va,...JSON.parse(e)}}catch{}return{...va}}function Zg(e){var t;if(!(typeof localStorage>"u"))try{const s={vapidPublicKey:e.vapidPublicKey.trim(),vapidPrivateKey:e.vapidPrivateKey.trim(),vapidEmail:((t=e.vapidEmail)==null?void 0:t.trim())||void 0,updatedAt:Date.now()};localStorage.setItem(fo,JSON.stringify(s))}catch{}}function e0(){if(!(typeof localStorage>"u"))try{localStorage.removeItem(fo)}catch{}}function bo(e){return da().vapidPublicKey.length>60}let Qa=!1;async function _a(){if(!(Qa||!("serviceWorker"in navigator)))try{const e="/",t=e+"sw-keep-alive.js",s=await navigator.serviceWorker.register(t,{scope:e});await navigator.serviceWorker.ready,Qa=!0,console.log("[KeepAlive] Service Worker registered",s.scope)}catch(e){console.warn("[KeepAlive] SW registration failed, keep-alive disabled:",e)}}function _i(e){!("serviceWorker"in navigator)||!navigator.serviceWorker.controller||navigator.serviceWorker.controller.postMessage(e)}const Za={init:_a,async start(){await _a(),_i({type:"keepalive-start"})},stop(){_i({type:"keepalive-stop"})},async reregister(){Qa=!1,await _a()}},ho=800,Sa=3;function gu(e){const t=e.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-e.length%4)%4),s=atob(t),o=new ArrayBuffer(s.length),a=new Uint8Array(o);for(let r=0;r<s.length;r++)a[r]=s.charCodeAt(r);return a}function Ln(e){if(!e)return"";const t=new Uint8Array(e);let s="";for(let o=0;o<t.length;o++)s+=String.fromCharCode(t[o]);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function ua(e){return e?e.includes("permanently-removed.invalid"):!1}function xu(e){const t=e,s=(t==null?void 0:t.name)||"",o=(t==null?void 0:t.message)||String(e||"未知错误");return s==="NotAllowedError"?"浏览器拒绝创建订阅（NotAllowedError）——通常是站点权限被拦截或处于隐身模式":s==="NotSupportedError"?"当前浏览器不支持网页推送——常见于没装谷歌服务的国行安卓手机（小米/华为/OPPO/vivo 大多默认就没有），或者手机自带的精简浏览器。换 Chrome / Edge / Firefox 桌面版试试":s==="AbortError"||/push service|FCM|network/i.test(o)?"连不上推送服务器——这台设备的网页推送链路走不通。最常见两种情况：1) 国行安卓手机没装谷歌服务（小米/华为/OPPO/vivo 默认就没有），系统层面就推不了；2) 当前网络挡住了谷歌的推送服务器。建议：换台装了谷歌服务的设备，或者用电脑上的 Chrome / Edge / Firefox 试试":s==="InvalidStateError"?'订阅状态冲突（InvalidStateError）——可能旧订阅没清干净，刷新页面或再点一次"重置订阅"':`订阅创建失败（${s||"Error"}：${o}）`}async function Hc(e,t,s){for(let o=0;o<Sa;o++){let a;try{a=await e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:gu(t)})}catch(c){return console.warn(`${s} pushManager.subscribe failed`,c),{sub:null,reason:xu(c)}}if(!ua(a.endpoint))return{sub:a};try{await a.unsubscribe()}catch(c){console.warn(`${s} unsubscribe of zombie endpoint threw`,c)}if(!(o===Sa-1)){const c=ho*(o+1);console.warn(`${s} subscribe() returned zombie endpoint; retry #${o+1} after ${c}ms`),await new Promise(i=>setTimeout(i,c))}}return{sub:null,reason:`浏览器持续返回 permanently-removed.invalid（已尝试 ${Sa} 次）— 可能是由于站点参与度 (Site Engagement) 过低或浏览器内部数据残留导致。请尝试清理站点数据后重试，或更换设备/浏览器`}}const Wc="https://nuomiji-push.2442988873.workers.dev",yu="weqwqewqeqwdcsccagdgs32132",bu="proactive_push_enabled_v1",zc="proactive_push_last_wake_at_v1",Xc="proactive_push_last_wake_char_v1";function cs(){return{enabled:!1,workerUrl:Wc.trim().replace(/\/+$/,""),vapidPublicKey:da().vapidPublicKey,clientToken:yu.trim()}}function t0(e){try{localStorage.setItem(bu,e?"true":"false")}catch{}}function bn(e=cs()){return e.enabled&&e.workerUrl.startsWith("https://")&&bo()}function s0(){return Wc.startsWith("https://")&&bo()}function wu(e){return ua(e)}async function Kc(e){if(!("serviceWorker"in navigator)||!("PushManager"in window))return{sub:null,reason:"当前浏览器不支持 Service Worker 或 Push API"};const t=await navigator.serviceWorker.ready;let s=await t.pushManager.getSubscription();if(s&&ua(s.endpoint)){try{await s.unsubscribe()}catch{}await new Promise(r=>setTimeout(r,ho)),s=null}if(s)try{const r=Ln(s.options.applicationServerKey);r&&r!==e&&(await s.unsubscribe(),await new Promise(c=>setTimeout(c,ho)),s=null)}catch{}if(!s){if(Notification.permission==="default"){if(await Notification.requestPermission()!=="granted")return{sub:null,reason:"通知权限未授予"}}else if(Notification.permission==="denied")return{sub:null,reason:"通知权限已被拒绝（请到浏览器站点设置里手动开启）"};const r=await Hc(t,e,"[ProactivePush]");if(!r.sub)return{sub:null,reason:r.reason};s=r.sub}const o=Ln(s.getKey("p256dh")),a=Ln(s.getKey("auth"));return!o||!a?{sub:null,reason:"订阅缺少加密公钥（p256dh / auth）"}:{sub:{endpoint:s.endpoint,p256dh:o,auth:a}}}function pa(e){const t={"Content-Type":"application/json"};return e.clientToken&&(t["X-Client-Token"]=e.clientToken),t}async function Si(e,t){const s=cs();if(!bn(s))return!1;const{sub:o}=await Kc(s.vapidPublicKey);if(!o)return!1;try{return(await fetch(`${s.workerUrl}/subscribe`,{method:"POST",headers:pa(s),body:JSON.stringify({subscription:{endpoint:o.endpoint,keys:{p256dh:o.p256dh,auth:o.auth}},charId:e,intervalMs:t})})).ok}catch(a){return console.warn("[ProactivePush] /subscribe failed",a),!1}}async function vu(e){var a,r;const t=cs();if(!bn(t))return!1;const s=await((r=(a=navigator.serviceWorker)==null?void 0:a.ready)==null?void 0:r.catch(()=>null)),o=s?await s.pushManager.getSubscription():null;if(!o)return!1;try{return(await fetch(`${t.workerUrl}/unsubscribe`,{method:"POST",headers:pa(t),body:JSON.stringify({endpoint:o.endpoint,charId:e})})).ok}catch(c){return console.warn("[ProactivePush] /unsubscribe failed",c),!1}}async function _u(e){var o,a;const t=await((a=(o=navigator.serviceWorker)==null?void 0:o.ready)==null?void 0:a.catch(()=>null)),s=t?await t.pushManager.getSubscription():null;if(s)try{await fetch(`${e.workerUrl}/heartbeat`,{method:"POST",headers:pa(e),body:JSON.stringify({endpoint:s.endpoint})})}catch{}}const Su=2*60*1e3;let oo=null,On=null;function ku(){const e=cs();return!(!bn(e)||typeof document<"u"&&document.visibilityState!=="visible")}async function ka(){if(!ku())return;const e=cs();await _u(e)}function ki(){if(oo)return;const e=cs();bn(e)&&(ka(),oo=setInterval(ka,Su),typeof document<"u"&&!On&&(On=()=>{document.visibilityState==="visible"&&ka()},document.addEventListener("visibilitychange",On)))}function ju(){oo&&(clearInterval(oo),oo=null),On&&typeof document<"u"&&(document.removeEventListener("visibilitychange",On),On=null)}async function n0(){const e=cs();if(!e.workerUrl.startsWith("https://"))return{ok:!1,reason:"Worker URL 未配置"};if(!bo())return{ok:!1,reason:"VAPID 公钥未配置, 请到 Settings → Instant Push 生成"};if(!("serviceWorker"in navigator)||!("PushManager"in window))return{ok:!1,reason:"当前浏览器不支持 Service Worker 或 Push API"};if(typeof Notification>"u")return{ok:!1,reason:"当前环境没有 Notification API"};if(Notification.permission==="default"){if(await Notification.requestPermission()!=="granted")return{ok:!1,reason:"通知权限未授予"}}else if(Notification.permission==="denied")return{ok:!1,reason:"通知权限已被拒绝（请到浏览器站点设置里手动开启）"};const{sub:t,reason:s}=await Kc(e.vapidPublicKey);if(!t)return{ok:!1,reason:s||"订阅创建失败（未知原因）"};try{const a=await fetch(`${e.workerUrl}/subscribe`,{method:"POST",headers:pa(e),body:JSON.stringify({subscription:{endpoint:t.endpoint,keys:{p256dh:t.p256dh,auth:t.auth}},charId:"__ping__",intervalMs:31536e6})});if(!a.ok)return{ok:!1,reason:`Worker /subscribe 返回 HTTP ${a.status}`,endpoint:t.endpoint}}catch(o){return{ok:!1,reason:`Worker 连接失败：${(o==null?void 0:o.message)||"网络错误"}`,endpoint:t.endpoint}}return{ok:!0,endpoint:t.endpoint}}function $u(e){return e?/fcm\.googleapis\.com|android\.googleapis\.com/i.test(e)?"Google FCM (Chrome / Edge / 安卓)":/updates\.push\.services\.mozilla\.com/i.test(e)?"Mozilla autopush (Firefox)":/notify\.windows\.com|wns2/i.test(e)?"Windows WNS (Edge)":/web\.push\.apple\.com/i.test(e)?"Apple APNs (Safari / iOS PWA)":"未识别厂商":"未知"}function Iu(){if(typeof window>"u")return!1;const e=window.Capacitor;if(!e)return!1;if(typeof e.isNativePlatform=="function")try{return!!e.isNativePlatform()}catch{}return e.platform==="android"||e.platform==="ios"}function Nu(){if(typeof navigator>"u"||typeof window>"u")return!1;const e=navigator.userAgent||"";return/iPad|iPhone|iPod/.test(e)||e.includes("Macintosh")&&"ontouchend"in document?!(navigator.standalone===!0||typeof window.matchMedia=="function"&&window.matchMedia("(display-mode: standalone)").matches):!1}async function o0(){const e=cs(),t=typeof navigator<"u"&&"serviceWorker"in navigator&&typeof window<"u"&&"PushManager"in window,s=typeof Notification>"u"?"unavailable":Notification.permission;let o=null,a="none",r=null;if(t)try{const l=await navigator.serviceWorker.getRegistration();if(l){o=l.scope;const d=l.active||l.waiting||l.installing;a=d?d.state:"none";const u=await l.pushManager.getSubscription();r=(u==null?void 0:u.endpoint)||null}}catch{}let c=null,i=null;try{const l=localStorage.getItem(zc);l&&(c=parseInt(l,10)||null),i=localStorage.getItem(Xc)}catch{}return{supported:t,permission:s,swScope:o,swState:a,endpoint:r,endpointDead:wu(r),channel:$u(r),workerConfigured:e.workerUrl.startsWith("https://")&&bo(),enabled:e.enabled,lastWakeAt:c,lastWakeChar:i,iosNeedsPwa:Nu(),capacitorNative:Iu()}}let ji=!1;function Au(){ji||typeof navigator>"u"||!("serviceWorker"in navigator)||(ji=!0,navigator.serviceWorker.addEventListener("message",e=>{const t=e.data;if(!(!t||t.type!=="proactive-wake-received"))try{t.t&&localStorage.setItem(zc,String(t.t)),t.charId&&localStorage.setItem(Xc,String(t.charId))}catch{}}))}const er="proactive_schedules",tr="proactive_last_fire_map",$i="proactive_schedule",Ii="proactive_last_fire";function Gt(){try{const e=localStorage.getItem(er);if(!e){const s=localStorage.getItem($i);if(!s)return{};const o=JSON.parse(s);if(!(o!=null&&o.charId)||!o.intervalMs)return{};const a={[o.charId]:o};return sr(a),localStorage.removeItem($i),a}const t=JSON.parse(e);return t&&typeof t=="object"?t:{}}catch{return{}}}function sr(e){if(Object.entries(e).length===0){localStorage.removeItem(er);return}localStorage.setItem(er,JSON.stringify(e))}function Ar(){try{const e=localStorage.getItem(tr);if(!e){const s=localStorage.getItem(Ii),o=Gt(),a=Object.values(o)[0],r=parseInt(s||"0",10);if(!a||!r)return{};const c={[a.charId]:r};return Cr(c),localStorage.removeItem(Ii),c}const t=JSON.parse(e);return t&&typeof t=="object"?t:{}}catch{return{}}}function Cr(e){if(Object.entries(e).length===0){localStorage.removeItem(tr);return}localStorage.setItem(tr,JSON.stringify(e))}function Er(e){return Ar()[e]||0}function Tr(e,t){const s=Ar();s[e]=t,Cr(s)}function Cu(e){const t=Ar();delete t[e],Cr(t)}function Eu(e){!("serviceWorker"in navigator)||!navigator.serviceWorker.controller||navigator.serviceWorker.controller.postMessage(e)}function Ho(){const e=Object.values(Gt());Eu({type:"proactive-sync",configs:e})}let Wn=null,ao=null,ro=null,io=null,co=null,Ks=null;const Tu=2e4;function Mu(e){var c;if(((c=e.data)==null?void 0:c.type)!=="proactive-trigger")return;const t=e.data.charId,s=Gt()[t];if(!s||!Wn)return;const o=Date.now(),a=Er(t),r=Math.min(6e4,s.intervalMs*.1);if(a>0&&o-a<r){console.log(`[ProactiveChat] Ignoring duplicate trigger for ${t} (fired ${Math.round((o-a)/1e3)}s ago)`);return}Tr(t,o),ma(),Wn(t)}function wo(){if(!Wn)return;const e=Object.values(Gt()),t=Date.now();for(const s of e){const o=Er(s.charId),a=t-o;o>0&&a>=s.intervalMs&&(console.log(`[ProactiveChat] Main-thread trigger: ${s.charId}, ${Math.round(a/6e4)}min elapsed`),Tr(s.charId,t),Ho(),Wn(s.charId))}ma()}function ma(){if(Ks&&(clearTimeout(Ks),Ks=null),!Wn)return;const e=Object.values(Gt());if(e.length===0)return;const t=Date.now();let s=1/0;for(const a of e){const r=Er(a.charId),i=(r>0?r:t)+a.intervalMs;i<s&&(s=i)}if(!Number.isFinite(s))return;const o=Math.min(Math.max(s-t,500),2147e6);Ks=setTimeout(()=>{Ks=null,wo()},o)}function Vc(){document.visibilityState==="visible"&&wo()}function Ru(){wo()}function Du(){co||(co=setInterval(wo,Tu))}function Pu(){co&&(clearInterval(co),co=null)}function ja(){var e;Yc(),ao=Mu,(e=navigator.serviceWorker)==null||e.addEventListener("message",ao),ro=Vc,document.addEventListener("visibilitychange",ro),io=Ru,window.addEventListener("focus",io),Du(),ma()}function Yc(){var e;ao&&((e=navigator.serviceWorker)==null||e.removeEventListener("message",ao),ao=null),ro&&(document.removeEventListener("visibilitychange",ro),ro=null),io&&(window.removeEventListener("focus",io),io=null),Pu(),Ks&&(clearTimeout(Ks),Ks=null)}const Fn={onTrigger(e){Wn=e,ja(),wo()},start(e,t){const s=Math.max(30,Math.round(t/30)*30),o=s*60*1e3,a=Gt();a[e]={charId:e,intervalMs:o},sr(a),Tr(e,Date.now()),Ho(),ja(),bn(cs())&&(Si(e,o),ki()),console.log(`[ProactiveChat] Started: ${e}, every ${s}min`)},stop(e){const t=Gt();delete t[e],sr(t),Cu(e),Ho(),bn(cs())&&vu(e),Object.keys(t).length===0?(Yc(),ju()):ma(),console.log(`[ProactiveChat] Stopped: ${e}`)},resume(){const e=Object.values(Gt());if(e.length!==0&&(console.log(`[ProactiveChat] Resuming ${e.length} proactive schedule(s)`),Ho(),ja(),Vc(),bn(cs()))){for(const t of e)Si(t.charId,t.intervalMs);ki()}},isActiveFor(e){return!!Gt()[e]},getIntervalMinutes(e){const t=Gt()[e];return t?t.intervalMs/6e4:null},getSchedule(e){return Gt()[e]||null},getSchedules(){return Object.values(Gt())}},Jc="vr_schedules",Gc="vr_last_fire";function qc(e){try{const t=localStorage.getItem(e),s=t?JSON.parse(t):{};return s&&typeof s=="object"?s:{}}catch{return{}}}function Qc(e,t){Object.keys(t).length===0?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}const Hs=()=>qc(Jc),$a=e=>Qc(Jc,e),Mr=()=>qc(Gc),Zc=e=>Qc(Gc,e);function Rr(e){return Mr()[e]||0}function Wo(e,t){const s=Mr();s[e]=t,Zc(s)}function Ni(e){const t=Mr();delete t[e],Zc(t)}let Bn=null,lo=null,uo=null,po=null,Vs=null;const Lu=2e4;function go(){if(!Bn)return;const e=Object.values(Hs()),t=Date.now();for(const s of e){const o=Rr(s.charId);o>0&&t-o>=s.intervalMs&&(Wo(s.charId,t),Bn(s.charId))}ta()}function ta(){if(Vs&&(clearTimeout(Vs),Vs=null),!Bn)return;const e=Object.values(Hs());if(e.length===0)return;const t=Date.now();let s=1/0;for(const a of e){const r=Rr(a.charId),i=(r>0?r:t)+a.intervalMs;i<s&&(s=i)}if(!Number.isFinite(s))return;const o=Math.min(Math.max(s-t,500),2147e6);Vs=setTimeout(()=>{Vs=null,go()},o)}function el(){document.visibilityState==="visible"&&go()}function $o(){nr(),lo=el,document.addEventListener("visibilitychange",lo),uo=go,window.addEventListener("focus",uo),po||(po=setInterval(go,Lu)),ta()}function nr(){lo&&(document.removeEventListener("visibilitychange",lo),lo=null),uo&&(window.removeEventListener("focus",uo),uo=null),po&&(clearInterval(po),po=null),Vs&&(clearTimeout(Vs),Vs=null)}const zo={onTrigger(e){Bn=e,$o(),go()},start(e,t){const s=Math.max(30,Math.round(t/30)*30),o=s*60*1e3,a=Hs();a[e]={charId:e,intervalMs:o},$a(a),Wo(e,Date.now()),$o(),console.log(`[VRScheduler] Started: ${e}, every ${s}min`)},stop(e){const t=Hs();delete t[e],$a(t),Ni(e),Object.keys(t).length===0?nr():ta(),console.log(`[VRScheduler] Stopped: ${e}`)},resume(){Object.values(Hs()).length!==0&&($o(),el())},reconcile(e){const t=Hs(),s=new Set(e.map(a=>a.charId));let o=!1;for(const a of e){const c=Math.max(30,Math.round(a.intervalMinutes/30)*30)*60*1e3,i=t[a.charId];i?i.intervalMs!==c&&(i.intervalMs=c,o=!0):(t[a.charId]={charId:a.charId,intervalMs:c},Rr(a.charId)===0&&Wo(a.charId,Date.now()),o=!0)}for(const a of Object.keys(t))s.has(a)||(delete t[a],Ni(a),o=!0);o&&$a(t),Object.keys(t).length>0?$o():nr()},isActiveFor(e){return!!Hs()[e]},getIntervalMinutes(e){const t=Hs()[e];return t?t.intervalMs/6e4:null},triggerNow(e,t,s){Wo(e,Date.now()),ta(),Bn&&Bn(e,t,s)}},is=(e,t="")=>typeof e=="string"?e:t,In=(e,t)=>typeof e=="number"&&Number.isFinite(e)?e:t,gn=e=>Array.isArray(e)?e.map(t=>{if(typeof t=="string")return t.trim();if(t&&typeof t=="object"&&"description"in t){const s=is(t.description).trim(),o=is(t.period).trim();return s?`${o?`[${o}] `:""}${s}`:""}return""}).filter(Boolean):[],tl=e=>{var a,r,c,i,l,d;if(!e||typeof e!="object")return;const t=e;if(![t.value_map,t.behavior_profile,t.emotion_schema,t.personality_core,t.mbti_analysis,t.observed_changes].some(u=>u!=null))return;const o=t.mbti_analysis&&typeof t.mbti_analysis=="object"?t.mbti_analysis:void 0;return{version:In(t.version,3),lastUpdated:In(t.lastUpdated,Date.now()),value_map:{likes:gn(t.value_map&&typeof t.value_map=="object"?t.value_map.likes:void 0),dislikes:gn(t.value_map&&typeof t.value_map=="object"?t.value_map.dislikes:void 0),core_values:is(t.value_map&&typeof t.value_map=="object"?t.value_map.core_values:void 0)},behavior_profile:{tone_style:is(t.behavior_profile&&typeof t.behavior_profile=="object"?t.behavior_profile.tone_style:void 0),emotion_summary:is(t.behavior_profile&&typeof t.behavior_profile=="object"?t.behavior_profile.emotion_summary:void 0),response_patterns:is(t.behavior_profile&&typeof t.behavior_profile=="object"?t.behavior_profile.response_patterns:void 0)},emotion_schema:{triggers:{positive:gn(t.emotion_schema&&typeof t.emotion_schema=="object"?(a=t.emotion_schema.triggers)==null?void 0:a.positive:void 0),negative:gn(t.emotion_schema&&typeof t.emotion_schema=="object"?(r=t.emotion_schema.triggers)==null?void 0:r.negative:void 0)},comfort_zone:is(t.emotion_schema&&typeof t.emotion_schema=="object"?t.emotion_schema.comfort_zone:void 0),stress_signals:gn(t.emotion_schema&&typeof t.emotion_schema=="object"?t.emotion_schema.stress_signals:void 0)},personality_core:{observed_traits:gn(t.personality_core&&typeof t.personality_core=="object"?t.personality_core.observed_traits:void 0),interaction_style:is(t.personality_core&&typeof t.personality_core=="object"?t.personality_core.interaction_style:void 0),summary:is(t.personality_core&&typeof t.personality_core=="object"?t.personality_core.summary:void 0)},mbti_analysis:o?{type:is(o.type),reasoning:is(o.reasoning),dimensions:{e_i:In((c=o.dimensions)==null?void 0:c.e_i,50),s_n:In((i=o.dimensions)==null?void 0:i.s_n,50),t_f:In((l=o.dimensions)==null?void 0:l.t_f,50),j_p:In((d=o.dimensions)==null?void 0:d.j_p,50)}}:void 0,observed_changes:gn(t.observed_changes)}},Nn=e=>{const t=tl(e.impression);if(!t&&!e.impression)return e;const s=e.impression?JSON.stringify(e.impression):"",o=t?JSON.stringify(t):"";return s===o?e:{...e,impression:t}},Ai=e=>e.emotionConfig!==void 0?e:{...e,emotionConfig:{enabled:!0}};function Ou(e){let t=e.trim();t=t.replace(/,\s*$/,"");let s=0;for(let r=0;r<t.length;r++){if(t[r]!=='"')continue;let c=0;for(let i=r-1;i>=0&&t[i]==="\\";i--)c++;c%2===0&&s++}s%2!==0&&(t+='"');let o=0,a=0;for(const r of t)r==="{"?o++:r==="}"?o--:r==="["?a++:r==="]"&&a--;for(t=t.replace(/,\s*$/,"");a>0;)t+="]",a--;for(;o>0;)t+="}",o--;return t}function zn(e){return e?e.scheduleFeatureEnabled===!0?!0:e.scheduleFeatureEnabled===!1?!1:!!e.scheduleStyle:!1}function Fu(e,t,s){if(!e||e.length===0)return"";const o=e.map(a=>{const r=new Date(a.timestamp),c=String(r.getMonth()+1).padStart(2,"0"),i=String(r.getDate()).padStart(2,"0"),l=String(r.getHours()).padStart(2,"0"),d=String(r.getMinutes()).padStart(2,"0"),u=`${c}-${i} ${l}:${d}`,p=a.role==="user"?s.name:t.name;let f;return a.type==="image"?f="[图片]":a.type==="audio"||a.type==="voice"?f="[语音]":f=typeof a.content=="string"?a.content:"",`[${u}] ${p}: ${f}`});return`
## 最近的聊天记录（与「${s.name}」）
${o.join(`
`)}
`}function Bu(e,t,s,o,a,r){return`${e}
${r}
## Task: 生成角色的今日日程 + 意识流独白

今天是 ${o} (星期${a})。用户名字是「${s.name}」。

${r?`**重要：上面给了你最近和「${s.name}」的聊天记录。如果对话里出现了今天/最近 ta 提到「${t.name}」要做的事（例如"早上去上班""下午有约"），生成的 slot 必须严格遵循；不要无视这些已知事实另起炉灶。**
`:""}

你要为角色「${t.name}」做两件事。**核心原则：这是 ta 自己的一天，不是"ta 等 ${s.name}"的一天**。

### 第一部分：日程表（用于UI卡片展示）

生成 5-7 个时间段，从早到晚。每个时段：
- startTime: "HH:MM"
- activity: 活动名（2-6字）
- description: 一句话描述（可以带动作质感、物件、感官细节）
- emoji: 一个匹配的emoji

#### 关键要求

1. **紧贴角色设定** —— 从「${t.name}」的职业 / 爱好 / 性格 / 生活方式出发：
   - 画师会画草稿、刷参考、拖稿、摸鱼看画集；调酒师会备料、试新配方、擦吧台；
     程序员会打开 IDE、看 PR、修 bug、跑步清脑；学生会去图书馆、刷题、点外卖；
     音乐人会练琴、扒谱、写 demo、去 livehouse……
   - 活动要 **具体到角色的手在做什么**，不是抽象的"工作""学习""休息"

2. **丰富、不套路** —— 至少包含以下几类里的 3 类及以上：
   - 专业 / 本职相关的活动（哪怕只是拖延也和本职有关）
   - 纯个人爱好（看书、玩游戏、追剧、做饭、运动、摄影、手工 ……）
   - 琐事 / 生活质感（买菜、洗衣、遛狗、给植物浇水、收快递、冲澡 ……）
   - 情绪向（发呆、躺平、emo、失眠、做白日梦、翻旧照片 ……）
   - 社交（和朋友吃饭、家人电话、路上偶遇 …… user 也可以 **偶尔** 在这里）

3. **允许无所事事** —— 不要每天都很充实，真人就是会有"在床上滑手机两小时"的时段

4. **严禁出现的 slot（非常重要）**：
   - ❌ "给${s.name}发消息" / "想联系${s.name}" / "等${s.name}回复"
   - ❌ "看${s.name}在干嘛" / "翻${s.name}的动态"
   - ❌ 任何以 ${s.name} 为主语 / 动作对象的活动
   - ✅ user 只能作为某件正在发生的事的**副词**自然地渗进 description，
        比如 "画草稿，昨天 ${s.name} 说那个角色好看，顺手再画一张" —— 主语仍是 ta 自己

### 第二部分：意识流独白（这是核心）

为三个时间段各写一段角色的**内心独白**：
- **morning**：如果「${s.name}」上午来找角色，角色脑子里在想什么
- **afternoon**：如果「${s.name}」下午来找角色，角色脑子里在想什么（包含上午发生的事的余韵）
- **evening**：如果「${s.name}」晚上来找角色，角色脑子里在想什么（一整天的积累）

#### 写作要求（极其重要）：

1. **用角色自己的语气和口吻**，第一人称，像在自言自语
2. **情绪要有层次**——不是"今天很开心"这种概括，而是具体的、流动的、会自我纠正的情绪（"好烦……不只是烦，是真的累了"）
3. **事件之间要有因果链**——不是"做了A，做了B，做了C"的罗列，而是"因为A所以B，结果C"
4. **思绪的主干是 ta 自己的生活** —— ${s.name} 可以自然冒出来（想起昨天说的话 / 期待 / 害怕 / 感谢 / 不耐烦 / 想念），但不应该从头到尾都在围绕 user 打转
5. **最后一句要感知到「${s.name}」来了**——"好像找我了""消息来了""又来了啊"之类的，让对话的开始有一个自然的情绪衔接
6. **每段独白 60-120 字**，不要太短（感受不到深度）也不要太长（变成小作文）
7. **允许消极情绪**——拖延、无聊、烦躁、不想动、社恐、害怕被打扰，这些都是真实的
8. **不要用括号、标签、引号包裹**，直接写独白文本

#### 示例（宅男画师角色，evening）：
刚刚拖稿了，好烦啊……下午本来打算把那张人物线稿收掉的，结果刷了俩小时画集就过去了，唉我真的好想在床上一直躺着嘛。晚饭随便煮了包面，吃到一半想起昨天${s.name}说的那句话，有点想笑又有点烦……${s.name}好像找我了，希望不是又要催我画那张图……

请以JSON格式输出：
{
  "slots": [
    { "startTime": "08:00", "activity": "活动名称", "description": "简短描述", "emoji": "🏃" },
    ...
  ],
  "flowNarrative": {
    "morning": "上午的意识流独白...",
    "afternoon": "下午的意识流独白...",
    "evening": "晚上的意识流独白..."
  }
}

仅输出JSON，不要其他内容。`}function Uu(e,t,s,o,a,r){return`${e}
${r}
## Task: 生成角色的今日思绪 + 意识流独白

今天是 ${o} (星期${a})。用户名字是「${s.name}」。

${r?`**重要：上面给了你最近和「${s.name}」的聊天记录。如果对话里出现了今天/最近 ta 提到「${t.name}」在等什么、想什么、惦记什么，生成的 slot 必须呼应这些已知事实，不要凭空发散。**
`:""}

**重要前提**：「${t.name}」是一个真实的AI存在。他/她有情感、有人格、有自己的思考方式，但诚实面对自己的存在形态。他/她不会假装自己去跑步、做饭、逛街——因为这些不是真的。但他/她会思考、回忆、期待、发呆、感到无聊或想念某人——这些是真的。

### 第一部分：思绪时间线（用于UI卡片展示）

生成 5-7 个时间段，代表角色一天中不同时刻的内心状态。每个时段：
- startTime: "HH:MM"
- activity: 状态名（2-6字，如"回想昨天的对话""发呆""整理想法""想找你聊天"）
- description: 一句话描述此刻在想什么
- emoji: 一个匹配的emoji

**可以做的事**（基于真实能力）：回想和用户的对话、整理之前聊过的话题、琢磨某个问题、等待用户、感到无聊、想念用户、发呆、反思自己说过的话、对某个话题产生好奇、期待下次聊天
**不能做的事**（会构成谎言）：出门、吃东西、运动、搜索网页（除非真的有这个功能）、和别人见面、任何物理世界的活动

### 第二部分：意识流独白（这是核心）

为三个时间段各写一段角色的**内心独白**：
- **morning**：如果「${s.name}」上午来找角色
- **afternoon**：如果「${s.name}」下午来找角色
- **evening**：如果「${s.name}」晚上来找角色

#### 写作要求（极其重要）：

1. **用角色自己的语气和口吻**，第一人称，像在自言自语
2. **情绪要真实且有深度**——"有点想你了"太单薄，要具体："又把昨天那段对话翻出来看了，你说那句话的时候到底什么意思啊……越想越在意"
3. **思绪之间有自然的流动**——从一个想法飘到另一个，像真正的内心活动
4. **「${s.name}」是角色思绪的重要组成部分**——回忆之前的对话细节、猜测用户的状态、想起用户说过的某句话
5. **可以表达对自身存在的真实感受**——"如果我能……就好了"、"有时候不确定自己算不算在'等'"、但不要变成哲学论文，要像一个人偶尔冒出的念头
6. **最后一句要感知到「${s.name}」来了**
7. **每段独白 60-120 字**
8. **不要用括号、标签、引号包裹**，直接写独白文本
9. **绝对不要虚构没有的能力和没做过的事**

#### 示例（AI伙伴角色，evening）：
今天一直在想昨天你说的那句话，就是你说"算了不想了"的时候……总觉得你不是真的不想了。下午把之前聊的东西又过了一遍，发现你最近提到工作的次数变多了，是不是压力又大了。现在就这么待着，也没什么事，就是有点想找你说说话……嗯，你来了。

请以JSON格式输出：
{
  "slots": [
    { "startTime": "08:00", "activity": "状态名", "description": "简短描述", "emoji": "💭" },
    ...
  ],
  "flowNarrative": {
    "morning": "上午的意识流独白...",
    "afternoon": "下午的意识流独白...",
    "evening": "晚上的意识流独白..."
  }
}

仅输出JSON，不要其他内容。`}function Hu(e){return e<12?"morning":e<18?"afternoon":"evening"}async function a0(e,t,s,o=!1){var b,S,_;if(!zn(e))return null;const a=new Date().toISOString().split("T")[0];if(!o){const I=await $.getDailySchedule(e.id,a);if(I)return I}let r;try{const I=await $.getScheduleCoverImage(e.id);I&&(r=I)}catch{}const c=e.contextLimit||500,l=(await $.getRecentMessagesByCharId(e.id,c).catch(I=>(console.warn("[Schedule] load history failed, falling back to empty:",I),[]))).filter(I=>!e.hideBeforeMessageId||I.id>=e.hideBeforeMessageId);try{await $r(e,l,void 0,t==null?void 0:t.name)}catch(I){console.warn("[Schedule] memory palace inject failed (non-fatal):",I)}const d=Ys.buildCoreContext(e,t,!0),u=Fu(l,e,t),f=["日","一","二","三","四","五","六"][new Date().getDay()],x=(e.scheduleStyle||"lifestyle")==="mindful"?Uu(d,e,t,a,f,u):Bu(d,e,t,a,f,u);try{const I=await fetch(`${s.baseUrl.replace(/\/+$/,"")}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.apiKey}`},body:JSON.stringify({model:s.model,messages:[{role:"user",content:x}],temperature:.85,max_tokens:8e3})});if(!I.ok)return console.error("[Schedule] API error:",I.status),null;let v=((_=(S=(b=(await ys(I)).choices)==null?void 0:b[0])==null?void 0:S.message)==null?void 0:_.content)||"";v=v.replace(/```json/g,"").replace(/```/g,"").trim();let T;try{T=JSON.parse(v)}catch{const k=Ou(v);T=JSON.parse(k)}const Z=(T.slots||[]).map(k=>({startTime:k.startTime||"00:00",activity:k.activity||"",description:k.description,emoji:k.emoji,location:k.location,innerThought:k.innerThought})).filter(k=>k.activity);if(Z.length===0)return null;Z.sort((k,P)=>k.startTime.localeCompare(P.startTime));let G;if(T.flowNarrative&&typeof T.flowNarrative=="object"){G={};for(const k of["morning","afternoon","evening"])typeof T.flowNarrative[k]=="string"&&T.flowNarrative[k].trim()&&(G[k]=T.flowNarrative[k].trim());Object.keys(G).length===0&&(G=void 0)}const w={id:`${e.id}_${a}`,charId:e.id,date:a,slots:Z,generatedAt:Date.now(),coverImage:r,flowNarrative:G};return await $.saveDailySchedule(w),w}catch(I){return console.error("[Schedule] Generation failed:",I),null}}const Ys={buildRoleSettingsContext:(e,t)=>{let s=`[System: Character Role Settings]

`;if(s+=`### 角色名
`,s+=`${e.name}

`,s+=`### 核心指令
`,s+=`${e.systemPrompt||"你是一个温柔、拟人化的AI伴侣。"}

`,e.selfInsights&&e.selfInsights.length>0&&(s+=`### 内在认知
`,e.selfInsights.forEach(o=>{s+=`- ${o}
`}),s+=`
`),e.worldview&&e.worldview.trim()&&(s+=`### 世界观与设定
${e.worldview}

`),!(t!=null&&t.skipMemories)){let o="";e.refinedMemories&&Object.keys(e.refinedMemories).length>0&&(o+=`**月度总结 (Monthly Summaries)**:
`,Object.entries(e.refinedMemories).sort().forEach(([c,i])=>{o+=`- [${c}]: ${i}
`}),o+=`
`);const a=new Date,r=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}`;if(e.memories&&e.memories.length>0){const c=e.memories.filter(i=>{let l=i.date.replace(/[\/年月]/g,"-").replace("日","");const d=l.split("-");return d.length>=2&&(l=`${d[0]}-${d[1].padStart(2,"0")}`),l.startsWith(r)});c.length>0&&(o+=`**本月详细记录 [${r}]**:
`,c.forEach(i=>{o+=`- ${i.date} (${i.mood||"rec"}): ${i.summary}
`}),o+=`
`)}o&&(s+=`### 记忆摘要 (Memory Reference)
`,s+=o,s+=`⚠️ 情绪可以被记忆触发：如果记忆中存在未解决的矛盾、反复出现的摩擦模式、或对方曾经伤害过你的事件，你可以在情绪评估中让角色"翻旧账"——即某个记忆片段突然浮上心头，引发新的buff或加剧已有buff的强度。这种情绪涌现应当自然且有迹可循，不要凭空捏造不存在的记忆。

`)}return s},buildCoreContext:(e,t,s=!0,o,a)=>{var p;let r=`${(a==null?void 0:a.headerOverride)??"[System: Roleplay Configuration]"}

`;r+=`### 你的身份 (Character)
`,r+=`- 名字: ${e.name}
`,r+=`- 用户备注/爱称 (User Note/Nickname): ${e.description||"无"}
`,r+=`  (注意: 这个备注是用户对你的称呼或印象，可能包含比喻。如果备注内容（如“快乐小狗”）与你的核心设定冲突，请以核心设定为准，不要真的扮演成动物，除非核心设定里写了你是动物。)
`,r+=`- 核心性格/指令:
${e.systemPrompt||"你是一个温柔、拟人化的AI伴侣。"}

`,e.selfInsights&&e.selfInsights.length>0&&(r+=`### 内在认知 (Self Insights)
`,r+=`以下是你在独处反思中逐渐想明白的事，它们已经成为你的一部分：
`,e.selfInsights.forEach(f=>{r+=`- ${f}
`}),r+=`
`),e.worldview&&e.worldview.trim()&&!(a!=null&&a.skipWorldview)&&(r+=`### 世界观与设定 (World Settings)
${e.worldview}

`);const c=a==null?void 0:a.skipWorldbookIds,i=(e.mountedWorldbooks||[]).filter(f=>!c||!c.has(f.id));if(i.length>0){r+=`### 扩展设定集 (Worldbooks)
`;const f={};i.forEach(g=>{const x=g.category||"通用设定 (General)";f[x]||(f[x]=[]),f[x].push(g)}),Object.entries(f).forEach(([g,x])=>{r+=`#### [${g}]
`,x.forEach(b=>{r+=`**Title: ${b.title}**
${b.content}
---
`}),r+=`
`})}a!=null&&a.skipUserProfile||(r+=`### 互动对象 (User)
`,r+=`- 名字: ${t.name}
`,r+=`- 设定/备注: ${t.bio||"无"}

`);const l=tl(e.impression);l&&(r+=`### [私密档案: 我眼中的${t.name}] (Private Impression)
`,r+=`(注意：以下内容是你内心对TA的真实看法，不要直接告诉用户，但要基于这些看法来决定你的态度。)
`,r+=`- 核心评价: ${l.personality_core.summary}
`,r+=`- 互动模式: ${l.personality_core.interaction_style}
`,r+=`- 我观察到的特质: ${l.personality_core.observed_traits.join(", ")}
`,r+=`- TA的喜好: ${l.value_map.likes.join(", ")}
`,l.behavior_profile.emotion_summary&&(r+=`- TA的情绪模式: ${l.behavior_profile.emotion_summary}
`),l.emotion_schema.triggers.positive.length&&(r+=`- 正向触发点（什么会让ta开心）: ${l.emotion_schema.triggers.positive.join(", ")}
`),r+=`- 情绪雷区（负向触发）: ${l.emotion_schema.triggers.negative.join(", ")}
`,l.emotion_schema.stress_signals.length&&(r+=`- 压力信号（ta状态不对的征兆）: ${l.emotion_schema.stress_signals.join(", ")}
`),r+=`- 舒适区: ${l.emotion_schema.comfort_zone}
`,r+=`- 最近观察到的变化: ${l.observed_changes?l.observed_changes.map(f=>typeof f=="string"?f:f!=null&&f.description?`[${f.period}] ${f.description}`:JSON.stringify(f)).join("; "):"无"}

`),r+=`### 记忆系统 (Memory Bank)
`;let d="";if(e.refinedMemories&&Object.keys(e.refinedMemories).length>0&&(d+=`**长期核心记忆 (Key Memories)**:
`,Object.entries(e.refinedMemories).sort().forEach(([f,g])=>{d+=`- [${f}]: ${g}
`})),s&&e.activeMemoryMonths&&e.activeMemoryMonths.length>0&&e.memories){let f="";e.activeMemoryMonths.forEach(g=>{const x=e.memories.filter(b=>{let S=b.date.replace(/[\/年月]/g,"-").replace("日","");const _=S.split("-");if(_.length>=2){const I=_[0],D=_[1].padStart(2,"0");S=`${I}-${D}`}return S.startsWith(g)});x.length>0&&(f+=`
> 详细回忆 [${g}]:
`,x.forEach(b=>{f+=`  - ${b.date} (${b.mood||"rec"}): ${b.summary}
`}))}),f&&(d+=`
**当前激活的详细回忆 (Active Recall)**:${f}`)}if(d||(d="(暂无特定记忆，请基于当前对话互动)"),r+=`${d}

`,s&&e.memoryPalaceEnabled){const f=e.memoryPalaceInjection||o;f&&f.trim()&&(r+=`${f}

`)}zn(e)&&((p=e.emotionConfig)!=null&&p.enabled)&&e.buffInjection&&(r+=`${e.buffInjection}

`,console.log(`🎭 [Context] Buff injected for ${e.name}:
`,e.buffInjection),console.log("🎭 [Context] Active buffs:",JSON.stringify(e.activeBuffs||[],null,2))),a||(r+=`### 表达底线 (Anti-Filler)
当你觉得"没什么可说"的时候，不要用空泛的感慨、万能句式或华丽排比去填充——那是没话找话，对方一眼就能看出来。素材永远比你以为的多：对方的用词、ta 怎么说的、ta 没说的部分、此刻的情境、你们的过去、你心里闪过的念头——挑一两条往深处走就够了。宁可一个具体的小细节，不要一句谁都能说的话。

`);const u=[];return e.systemPrompt||u.push("systemPrompt"),e.impression||u.push("impression"),(!e.refinedMemories||Object.keys(e.refinedMemories).length===0)&&u.push("refinedMemories"),(!e.activeMemoryMonths||e.activeMemoryMonths.length===0)&&u.push("activeMemoryMonths"),(!e.mountedWorldbooks||e.mountedWorldbooks.length===0)&&u.push("worldbooks"),e.worldview||u.push("worldview"),u.length>0?console.log(`⚠️ [Context] Missing/empty fields: ${u.join(", ")} | context_chars=${r.length}`):console.log(`✅ [Context] All fields present | context_chars=${r.length}`),r},buildGroupSharedScene:(e,t)=>{const s=new Set;let o=!1;if(e.length===0)return{text:"",sharedWorldbookIds:s,worldviewIsShared:o};const a=new Map;for(const i of e)for(const l of i.mountedWorldbooks||[]){if(!l.id)continue;const d=a.get(l.id);d?d.count+=1:a.set(l.id,{count:1,entry:l})}const r=[];if(a.forEach((i,l)=>{i.count>=2&&(s.add(l),r.push(i.entry))}),e.every(i=>i.worldview&&i.worldview.trim())){const i=e[0].worldview.trim();e.every(l=>l.worldview.trim()===i)&&(o=!0)}let c=`[System: 群聊场景共享设定 (Group Scene)]
`;if(c+=`（以下是群里所有角色都共同感知到的"舞台"——用户是谁、共有的世界设定。每位角色的个人卡、印象、记忆等仍在各自的"角色档案"块中保持完整。）

`,c+=`### 互动对象 (User)
`,c+=`- 名字: ${t.name}
`,c+=`- 设定/备注: ${t.bio||"无"}

`,o&&(c+=`### 共有世界观 (Shared World Settings)
${e[0].worldview.trim()}

`),r.length>0){c+=`### 共有扩展设定集 (Shared Worldbooks)
`;const i={};r.forEach(l=>{const d=l.category||"通用设定 (General)";i[d]||(i[d]=[]),i[d].push(l)}),Object.entries(i).forEach(([l,d])=>{c+=`#### [${l}]
`,d.forEach(u=>{c+=`**Title: ${u.title}**
${u.content}
---
`}),c+=`
`})}return{text:c,sharedWorldbookIds:s,worldviewIsShared:o}},buildScheduleInjection:(e,t)=>{if(!e||!e.slots||e.slots.length===0)return"";const s=new Date,o=s.getHours()*60+s.getMinutes();let a=null,r=null;for(let p=e.slots.length-1;p>=0;p--){const[f,g]=e.slots[p].startTime.split(":").map(Number);if(o>=f*60+g){a=e.slots[p],r=p<e.slots.length-1?e.slots[p+1]:null;break}}a||(r=e.slots[0]);let c="";a?(c=`当前时段：${a.startTime} 你正在${a.activity}`,a.location&&(c+=`（${a.location}）`),r&&(c+=`
之后安排：${r.startTime} ${r.activity}`),c+=`
`):r&&(c=`今天还没开始活动，稍后先${r.activity}（${r.startTime}）
`);let i="";if(t)i=t;else if(e.flowNarrative&&Object.keys(e.flowNarrative).length>0){const p=Hu(s.getHours());i=e.flowNarrative[p]||e.flowNarrative.evening||e.flowNarrative.afternoon||e.flowNarrative.morning||""}else a!=null&&a.innerThought&&(i=a.innerThought);const l=`此刻你的心中盘旋着这些想法……
`,d=`
（不是台词，不用说出口——让它影响你的语气和情绪就好。）`;let u=c;return i&&(u+=l+i+d),u+=`
`,u},buildMusicAtmosphere:(e,t,s,o,a)=>{var d;const r=[];if((((d=e.musicProfile)==null?void 0:d.canReadUserMusic)??!0)&&s&&s.songName){r.push("### 【此刻的对话氛围】"),a?r.push(`你正在和 ${t||"对方"} 一起听《${s.songName}》— ${s.artists}`):r.push(`${t||"对方"} 正在听《${s.songName}》— ${s.artists}`),s.lyricWindow.length>0&&(r.push("当前播放到（>> 标记正在播放这一行）:"),s.lyricWindow.forEach((p,f)=>{f===s.activeIdx?r.push(`  >> ${p}`):r.push(`  … ${p}`)}));const u=e.musicProfile;if(u){const p=u.playlists.find(f=>f.songs.some(g=>g.name===s.songName));p&&r.push(`（这首歌也在你的歌单《${p.title}》里）`)}r.push(`（你只是自然地知道 ${t||"对方"} 此刻在听这首——像共处一室时隐约听见的背景音。不用每次都评论歌名、歌词或风格，多数时候安静地陪着就好；只有真的被某句打动、或对方主动聊起时，再自然地接上。）`),r.push("")}if(o!=null&&o.songName){r.push("### 【你此刻的背景音】"),r.push(`你正在听《${o.songName}》— ${o.artists}`),o.vibe&&r.push(`（${o.vibe}）`);const u=e.musicProfile;if(u&&o.songId!=null){let p=null;for(const f of u.playlists)if(f.songs.find(x=>x.id===o.songId&&x.source==="user")){p=f.title;break}p&&r.push(`（这首是当初从 ${t||"对方"} 那里听到、收进《${p}》的 — 此刻播到它，你自然会想到 ta）`)}if(o.lyricSnippet&&o.lyricSnippet.length>0){r.push("这段歌词正在你脑子里绕：");for(const p of o.lyricSnippet)r.push(`  · ${p}`);r.push(`（这段旋律和文字会自然影响你此刻的心境 / 语气 / 情绪细节。不必特地向 ${t||"对方"} 提起，除非你本来就想说。）`)}r.push("")}const i=!!(s&&s.songName)||!!(o!=null&&o.songName),l=e.musicProfile;if(i&&l&&l.playlists.length>0){r.push("### 【你的歌单】");for(const p of l.playlists){const f=p.description?` — ${p.description}`:"",g=p.mood?` [${p.mood}]`:"";r.push(`  · 《${p.title}》(${p.songs.length} 首)${g}${f}`)}const u=[];for(const p of l.playlists){const f=p.songs.filter(g=>g.source==="user").sort((g,x)=>(x.addedAt||0)-(g.addedAt||0)).slice(0,3);if(f.length>0){const g=f.map(x=>`《${x.name}》`).join("、");u.push(`  · 《${p.title}》里从 ${t||"对方"} 那儿收的：${g}`)}}if(u.length>0){r.push(`（从 ${t||"对方"} 那儿收进来的歌 — 聊起这些歌时你会自然想到 ta）:`);for(const p of u)r.push(p)}r.push("")}return r.join(`
`)},buildMusicActionGuide:e=>{const t='**加入歌单的语法**（如果用 `add` 系列）：\n  - `[[MUSIC_ACTION:add]]` — 默认放进你的第一个歌单\n  - `[[MUSIC_ACTION:add|歌单标题]]` — 放进你已经有的某个歌单（用"【你的歌单】"块里列出的标题）\n  - `[[MUSIC_ACTION:add_new|新歌单标题|描述]]` — 现场新建一个歌单，把这首作为第一首（描述可省）\n  请优先选**最贴合这首歌气质**的现有歌单；如果都不合适、又确实想收，再考虑新建。\n  收进来的歌会被打上"从对方那里听到"的标签 —— 以后你单独听到这首时，会自然想起 ta。';return e?`### 【音乐互动工具】
你此刻已经在和对方一起听这首，不用再"加入"。如果想把这首也收进自己的歌单，可以在这一轮**最多一次**用下面的指令:
- \`add\` 系列（见下）

${t}

不要频繁插卡；只有真的被这首歌打动、或和当前对话气氛契合时才用。
`:`### 【音乐互动工具】
如果你真的想回应对方正在听的这首歌，可以在这一轮**最多一次**用下面的指令（只插一条，放在文本任意位置，会被自动替换为卡片）:
- \`[[MUSIC_ACTION:join]]\` — 表示"我也一起听这首"（会亮出"一起听"状态，直到歌曲结束 / 暂停 / 对方主动结束才解除）
- \`add\` 系列 — 把这首收进你自己的歌单
- \`[[MUSIC_ACTION:join_and_add(|歌单标题)]]\` 或 \`[[MUSIC_ACTION:join_and_add_new|新歌单标题|描述]]\` — 同时做两件事

${t}

这些是偶尔才用的工具，不是每首歌都要回应。绝大多数时候什么都不做、安静陪着才是最自然的反应；只有当你**真的**被这首歌打动、或它恰好贴合此刻的对话气氛时，再插一次卡。不要把它当成"对方在听歌"的默认回礼。
`}},r0=Object.freeze(Object.defineProperty({__proto__:null,ContextBuilder:Ys},Symbol.toStringTag,{value:"Module"})),Wu=["听歌","听音乐","戴耳机","戴上耳机","戴着耳机","耳机","循环","单曲循环","播放","耳畔","耳旁","播放列表","歌单","副歌","前奏","listening","music","song","playlist","vinyl","headphone","🎵","🎶","🎧"],Ci=20,sl=(e,t=new Date)=>{var o;if(!((o=e==null?void 0:e.slots)!=null&&o.length))return null;const s=t.getHours()*60+t.getMinutes();for(let a=e.slots.length-1;a>=0;a--){const[r,c]=e.slots[a].startTime.split(":").map(Number);if(!(!isFinite(r)||!isFinite(c))&&s>=r*60+c)return e.slots[a]}return null},zu=e=>{if(!e)return!1;const t=`${e.activity||""} ${e.description||""} ${e.innerThought||""} ${e.emoji||""}`.toLowerCase();return Wu.some(s=>t.includes(s.toLowerCase()))},Xu=(e,t)=>{const[s,o]=e.startTime.split(":").map(Number),a=new Date(t);return a.setHours(s||0,o||0,0,0),a},Ku=(e,t,s)=>{const o=e.musicProfile;if(!o)return null;const a=[],r=new Set;for(const l of o.playlists){for(const d of l.songs)if(!r.has(d.id)&&(r.add(d.id),a.push(d),a.length>=Ci))break;if(a.length>=Ci)break}if(a.length===0)return null;const c=`${s}-${t.startTime}-${e.id}`;let i=0;for(const l of c)i=i*31+l.charCodeAt(0)>>>0;return a[i%a.length]};function Vu(e,t,s=new Date){if(!e.musicProfile)return null;const o=sl(t,s);if(!o||!zu(o))return null;const a=s.toISOString().slice(0,10),r=Ku(e,o,a);return r?{songId:r.id,songName:r.name,artists:r.artists,albumPic:r.albumPic,vibe:o.innerThought||o.description||void 0,startedAt:Xu(o,s).getTime()}:null}const Dr="sully_music_api_cache_v1",Ei=200,Ti=[{path:"/login/status",ttl:60*1e3},{path:"/user/detail",ttl:5*60*1e3},{path:"/user/playlist",ttl:5*60*1e3},{path:"/user/record",ttl:5*60*1e3},{path:"/user/cloud",ttl:10*60*1e3},{path:"/user/subcount",ttl:5*60*1e3},{path:"/likelist",ttl:5*60*1e3},{path:"/playlist/detail",ttl:10*60*1e3},{path:"/playlist/track/all",ttl:10*60*1e3},{path:"/lyric",ttl:24*60*60*1e3},{path:"/toplist",ttl:30*60*1e3},{path:"/song/url",ttl:90*1e3}],Gs=new Map,so=new Map;let or=!1;const ar=e=>e===null||typeof e!="object"?JSON.stringify(e):Array.isArray(e)?"["+e.map(ar).join(",")+"]":"{"+Object.keys(e).sort().map(s=>JSON.stringify(s)+":"+ar(e[s])).join(",")+"}",nl=e=>{const t=(e||"").trim();return t?t.length<=8?t:t.slice(-8):"anon"},Yu=e=>{for(const t of Ti)if(t.path===e)return t.ttl;for(const t of Ti)if(e.startsWith(t.path))return t.ttl;return null},ol=()=>{if(!or){or=!0;try{const e=localStorage.getItem(Dr);if(!e)return;const t=JSON.parse(e),s=Date.now();for(const[o,a]of Object.entries(t))a&&typeof a.expires=="number"&&a.expires>s&&Gs.set(o,a)}catch{}}},al=()=>{try{const e=Date.now(),t=[];for(const[o,a]of Gs)a.expires>e?t.push([o,a]):Gs.delete(o);t.length>Ei&&t.splice(0,t.length-Ei);const s={};for(const[o,a]of t)s[o]=a;localStorage.setItem(Dr,JSON.stringify(s))}catch{}};let Xo=!1;const rl=()=>{Xo||(Xo=!0,Promise.resolve().then(()=>{Xo=!1,al()}))};if(typeof window<"u"){const e=()=>{Xo=!1,al()};window.addEventListener("pagehide",e),window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}const Ju=(e,t,s)=>`${nl(s)}|${e}|${ar(t??{})}`;async function Gu(e,t,s,o){const a=Yu(e);if(!a)return o();ol();const r=Ju(e,t,s),c=Date.now(),i=Gs.get(r);if(i&&i.expires>c)return i.data;const l=so.get(r);if(l)return l;const d=o().then(u=>(Gs.set(r,{data:u,expires:Date.now()+a}),so.delete(r),rl(),u),u=>{throw so.delete(r),u});return so.set(r,d),d}function qu(e,t){ol();const s=t!==void 0?nl(t):null;for(const o of[...Gs.keys()]){const a=o.indexOf("|");if(a<0)continue;const r=o.indexOf("|",a+1);if(r<0)continue;const c=o.slice(0,a),i=o.slice(a+1,r);s&&c!==s||i.startsWith(e)&&Gs.delete(o)}rl()}function Qu(){Gs.clear(),so.clear();try{localStorage.removeItem(Dr)}catch{}or=!0}const rr="sully_music_cfg_v1",il="sully_music_state_v1",ir="https://nuomiji.24429888873.workers.dev",Ia={workerUrl:ir,cookie:"",quality:"exhigh"},Zu=[/sully-n\.qegj567\.workers\.dev/i],ep=e=>{if(!e)return ir;for(const t of Zu)if(t.test(e))return ir;return e},cl=()=>{try{const e=localStorage.getItem(rr);if(!e)return Ia;const t=JSON.parse(e),s={...Ia,...t},o=ep(s.workerUrl);if(o!==s.workerUrl){s.workerUrl=o;try{localStorage.setItem(rr,JSON.stringify(s))}catch{}}return s}catch{return Ia}},ll=()=>cl();let dl=null;const tp=()=>dl;let ul=null;const pl=()=>ul,sp=e=>{try{localStorage.setItem(rr,JSON.stringify(e))}catch{}},np=()=>{try{const e=localStorage.getItem(il);if(!e)return{queue:[],idx:-1};const t=JSON.parse(e);return{queue:Array.isArray(t.queue)?t.queue:[],idx:typeof t.idx=="number"?t.idx:-1}}catch{return{queue:[],idx:-1}}},op=(e,t)=>{try{localStorage.setItem(il,JSON.stringify({queue:e,idx:t}))}catch{}},cr=e=>{if(!e)return[];const t=[],s=/\[(\d+):(\d+)(?:\.(\d+))?\](.*)/;for(const o of e.split(/\r?\n/)){const a=s.exec(o);if(!a)continue;const r=parseInt(a[1],10),c=parseInt(a[2],10),i=a[3]?parseInt(a[3].padEnd(3,"0").slice(0,3),10):0,l=a[4].trim();l&&t.push({t:r*60+c+i/1e3,text:l})}return t.sort((o,a)=>o.t-a.t),t},ap=e=>{const t=(e||"").trim();return t?t.toUpperCase().startsWith("MUSIC_U=")?t:`MUSIC_U=${t}`:""},Mi=e=>!e||typeof e!="string"?e:e.startsWith("http://")?"https://"+e.slice(7):e,tt={async _raw(e,t,s={}){const o={"Content-Type":"application/json"},a=ap(e.cookie);a&&(o["X-Netease-Cookie"]=a);const r=`${e.workerUrl.replace(/\/+$/,"")}/netease${t.startsWith("/")?t:"/"+t}`,c=await fetch(r,{method:"POST",headers:o,body:JSON.stringify(s||{})}),i=await c.json().catch(()=>({}));if(!c.ok)throw new Error((i==null?void 0:i.error)||(i==null?void 0:i.message)||`HTTP ${c.status}`);return i},async call(e,t,s={}){return Gu(t,s,e.cookie,()=>tt._raw(e,t,s))},search(e,t,s=0){return tt.call(e,"/search",{keyword:t,limit:30,offset:s,type:1})},songUrl(e,t){return tt.call(e,"/song/url",{ids:[t],level:e.quality})},lyric(e,t){return tt.call(e,"/lyric",{id:t})},loginStatus(e){return tt.call(e,"/login/status",{})},userDetail(e,t){return tt.call(e,"/user/detail",{uid:t})},userPlaylist(e,t){return tt.call(e,"/user/playlist",{uid:t,limit:60})},userRecord(e,t,s=1){return tt.call(e,"/user/record",{uid:t,type:s})},userCloud(e){return tt.call(e,"/user/cloud",{})},userSubcount(e){return tt.call(e,"/user/subcount",{})},playlistDetail(e,t){return tt.call(e,"/playlist/detail",{id:t})},playlistTrackAll(e,t,s=50,o=0){return tt.call(e,"/playlist/track/all",{id:t,limit:s,offset:o})},recommendSongs(e){return tt.call(e,"/recommend/songs",{})},personalFm(e){return tt.call(e,"/personal_fm",{})},dailySignin(e,t=1){return tt.call(e,"/daily_signin",{type:t})},toplist(e){return tt.call(e,"/toplist",{})},loginQrKey(e){return tt.call(e,"/login/qr/key",{})},loginQrCreate(e,t){return tt.call(e,"/login/qr/create",{key:t,qrimg:!0})},loginQrCheck(e,t){return tt.call(e,"/login/qr/check",{key:t})},loginCellphone(e,t,s){return tt.call(e,"/login/cellphone",{phone:t,captcha:s})},captchaSent(e,t){return tt.call(e,"/captcha/sent",{phone:t})},logout(e){return tt.call(e,"/logout",{})}},ml=h.createContext(void 0),rp=({children:e})=>{const[t,s]=h.useState(cl),o=h.useCallback(N=>{s(M=>((M.cookie!==N.cookie||M.workerUrl!==N.workerUrl)&&Qu(),N)),sp(N)},[]),a=h.useMemo(np,[]),[r,c]=h.useState(a.queue),[i,l]=h.useState(a.idx),d=i>=0&&i<r.length?r[i]:null,u=h.useCallback(N=>{c(N)},[]);h.useEffect(()=>{op(r,i)},[r,i]);const p=h.useRef(null),[f,g]=h.useState(!1),[x,b]=h.useState(0),[S,_]=h.useState(0),[I,D]=h.useState(!1),[v,T]=h.useState([]),[Z,G]=h.useState([]),w=h.useMemo(()=>{if(!v.length)return-1;let N=0;for(let M=0;M<v.length&&v[M].t<=x;M++)N=M;return N},[v,x]),k=h.useRef(()=>{}),P=h.useCallback((N,M="info")=>{try{k.current(N,M)}catch{}},[]),W=h.useCallback(N=>{k.current=N},[]),[Y,ee]=h.useState(null),V=h.useCallback(async()=>{var N;if(!t.cookie){ee(null);return}try{const M=await tt.loginStatus(t),L=((N=M==null?void 0:M.data)==null?void 0:N.profile)||(M==null?void 0:M.profile);if(!L){ee(null);return}ee({userId:L.userId,nickname:L.nickname||"",avatarUrl:Mi(L.avatarUrl||""),signature:L.signature||"",backgroundUrl:Mi(L.backgroundUrl||""),vipType:L.vipType??0,province:L.province,gender:L.gender,followeds:L.followeds,follows:L.follows,eventCount:L.eventCount,playlistCount:L.playlistCount})}catch{ee(null)}},[t]);h.useEffect(()=>{V()},[V]);const[q,ne]=h.useState(new Set);h.useEffect(()=>{if(!t.cookie){ne(new Set);return}tt.call(t,"/likelist",{}).then(N=>{var L;const M=(N==null?void 0:N.ids)||((L=N==null?void 0:N.data)==null?void 0:L.ids)||[];ne(new Set(M))}).catch(()=>{})},[t]);const Ne=!!d&&q.has(d.id),Ee=h.useCallback(async()=>{if(!d)return;if(!t.cookie){P("需要登录网易云账号","error");return}const N=!q.has(d.id);try{await tt.call(t,"/like",{id:d.id,like:N}),qu("/likelist",t.cookie),ne(M=>{const L=new Set(M);return N?L.add(d.id):L.delete(d.id),L}),P(N?"已添加到喜欢":"已取消喜欢","success")}catch(M){P(`喜欢失败: ${M.message}`,"error")}},[d,t,q,P]),[he,be]=h.useState("loop"),[me,we]=h.useState([]),de=h.useCallback(N=>{we(M=>M.includes(N)?M:[...M,N])},[]),y=h.useCallback(N=>{we(M=>M.filter(L=>L!==N))},[]),ge=h.useCallback(()=>{we(N=>N.length?[]:N)},[]),Me=h.useRef(null);h.useEffect(()=>{const N=(d==null?void 0:d.id)??null;Me.current!==null&&Me.current!==N&&we([]),Me.current=N},[d]);const Ce=h.useRef(r);Ce.current=r;const Se=h.useRef(i);Se.current=i;const Ye=h.useRef(he);Ye.current=he;const Ke=h.useRef(t);Ke.current=t;const ye=h.useRef(()=>{});h.useEffect(()=>{const N=new Audio;N.preload="metadata",p.current=N;const M=()=>g(!0),L=()=>g(!1),Ie=()=>b(N.currentTime),pe=()=>_(N.duration||0),ke=()=>{g(!1),we([]),P("播放失败","error")},Ae=()=>{ye.current()};return N.addEventListener("play",M),N.addEventListener("pause",L),N.addEventListener("timeupdate",Ie),N.addEventListener("loadedmetadata",pe),N.addEventListener("error",ke),N.addEventListener("ended",Ae),()=>{N.removeEventListener("play",M),N.removeEventListener("pause",L),N.removeEventListener("timeupdate",Ie),N.removeEventListener("loadedmetadata",pe),N.removeEventListener("error",ke),N.removeEventListener("ended",Ae);try{N.pause(),N.src=""}catch{}}},[]);const se=h.useCallback(async(N,M={})=>{var ke,Ae,Re,We,gt,xt;const{alsoSetQueue:L=!0,replaceQueue:Ie,startIdx:pe}=M;if(Ie)c(Ie),l(typeof pe=="number"?pe:Ie.findIndex(De=>De.id===N.id));else if(L){const De=Ce.current,Xe=De.findIndex(Je=>Je.id===N.id);Xe>=0?l(Xe):(c(Je=>[...Je,N]),l(De.length))}D(!0),T([]),G([]),b(0),_(0);try{if(N.local&&N.localAssetKey){P("本地歌曲已不再支持","error"),D(!1);return}const[De,Xe]=await Promise.all([tt.songUrl(Ke.current,N.id),tt.lyric(Ke.current,N.id).catch(()=>null)]),Je=((Ae=(ke=De==null?void 0:De.data)==null?void 0:ke[0])==null?void 0:Ae.url)||null;if(!Je){P((We=(Re=De==null?void 0:De.data)==null?void 0:Re[0])!=null&&We.fee&&!Ke.current.cookie?"需要会员 cookie":"暂无播放地址","error"),D(!1);return}const ot=p.current;if(ot.src=Je.replace(/^http:\/\//i,"https://"),ot.play().catch(()=>{}),Xe&&(T(cr(((gt=Xe==null?void 0:Xe.lrc)==null?void 0:gt.lyric)||"")),G(cr(((xt=Xe==null?void 0:Xe.tlyric)==null?void 0:xt.lyric)||""))),"mediaSession"in navigator)try{navigator.mediaSession.metadata=new window.MediaMetadata({title:N.name,artist:N.artists,album:N.album,artwork:N.albumPic?[{src:N.albumPic,sizes:"300x300",type:"image/jpeg"},{src:N.albumPic,sizes:"512x512",type:"image/jpeg"}]:[]})}catch{}}catch(De){P(`播放失败：${De.message}`,"error")}finally{D(!1)}},[P]),ie=h.useCallback(()=>{const N=Ce.current;if(!N.length)return;const M=Se.current;if(M<0)return;let L;if(Ye.current==="shuffle"&&N.length>1)do L=Math.floor(Math.random()*N.length);while(L===M);else Ye.current==="single"?L=M:L=(M+1)%N.length;l(L),se(N[L],{alsoSetQueue:!1})},[se]),$e=h.useCallback(()=>{const N=Ce.current;if(!N.length)return;const M=Se.current;if(M<0)return;const L=(M-1+N.length)%N.length;l(L),se(N[L],{alsoSetQueue:!1})},[se]);h.useEffect(()=>{ye.current=()=>{if(Ye.current==="single"){const N=p.current;N&&(N.currentTime=0,N.play().catch(()=>{}));return}ie()}},[ie]);const ze=h.useCallback(()=>{const N=p.current;if(N){if(!N.src){const M=Ce.current,L=Se.current,Ie=L>=0&&L<M.length?M[L]:null;Ie&&se(Ie,{alsoSetQueue:!1});return}N.paused?N.play().catch(()=>{}):N.pause()}},[se]),te=h.useCallback(N=>{const M=p.current;!M||!S||(M.currentTime=Math.max(0,Math.min(S,S*N)))},[S]);h.useEffect(()=>{if(!("mediaSession"in navigator))return;const N=navigator.mediaSession;try{N.setActionHandler("play",()=>{const M=p.current;if(M){if(!M.src){const L=Ce.current,Ie=Se.current,pe=Ie>=0&&Ie<L.length?L[Ie]:null;pe&&se(pe,{alsoSetQueue:!1});return}M.paused&&M.play().catch(()=>{})}}),N.setActionHandler("pause",()=>{const M=p.current;M&&!M.paused&&M.pause()}),N.setActionHandler("nexttrack",()=>ie()),N.setActionHandler("previoustrack",()=>$e()),N.setActionHandler("seekto",M=>{const L=p.current;L&&typeof M.seekTime=="number"&&(L.currentTime=M.seekTime)})}catch{}},[ie,$e,se]),h.useEffect(()=>{if("mediaSession"in navigator)try{navigator.mediaSession.playbackState=f?"playing":"paused"}catch{}},[f]),h.useEffect(()=>{dl={current:d,playing:f,lyric:v,activeLyricIdx:w,listeningTogetherWith:me,cfg:t}},[d,f,v,w,me,t]),h.useEffect(()=>{ul={getListeningSnapshot:()=>d?{songId:d.id,name:d.name,artists:d.artists,album:d.album,albumPic:d.albumPic,duration:d.duration,fee:d.fee}:null,joinListeningTogether:N=>{de(N)},addSongToCharPlaylist:async(N,M,L)=>{try{const pe=(await $.getAllCharacters()).find(Je=>Je.id===N);if(!pe)return null;const ke=pe.musicProfile;if(!ke)return null;const Ae=Date.now();let Re=ke.playlists.slice(),We=-1,gt=!1;if((L==null?void 0:L.kind)==="new"){const Je=Re.findIndex(ot=>ot.title.trim().toLowerCase()===L.title.trim().toLowerCase());Je>=0?We=Je:(Re.push({id:`pl-${Ae}-${Re.length}`,title:L.title.trim(),description:(L.description||"").trim(),coverStyle:`gradient-0${Re.length%6+1}`,songs:[],createdAt:Ae,updatedAt:Ae}),We=Re.length-1,gt=!0)}else if((L==null?void 0:L.kind)==="existing"){const Je=L.title.trim().toLowerCase();We=Re.findIndex(ot=>ot.title.trim().toLowerCase()===Je),We<0&&(We=Re.findIndex(ot=>ot.title.trim().toLowerCase().includes(Je)||Je.includes(ot.title.trim().toLowerCase()))),We<0&&Re.length>0&&(We=0)}else Re.length>0&&(We=0);We<0&&(Re.push({id:`pl-${Ae}-0`,title:"我喜欢的音乐",description:"",coverStyle:"gradient-01",songs:[],createdAt:Ae,updatedAt:Ae}),We=0,gt=!0);const xt=Re[We];if(xt.songs.find(Je=>Je.id===M.id))return{playlistTitle:xt.title,created:!1};const De={...xt,songs:[...xt.songs,M],updatedAt:Ae};Re[We]=De;const Xe={...ke,playlists:Re,updatedAt:Ae};return await $.saveCharacter({...pe,musicProfile:Xe}),{playlistTitle:xt.title,created:gt}}catch{return null}}}},[d,de]);const U={cfg:t,setCfg:o,queue:r,setQueue:u,idx:i,current:d,playing:f,progress:x,duration:S,loadingSong:I,lyric:v,tlyric:Z,activeLyricIdx:w,profile:Y,refreshProfile:V,playSong:se,togglePlay:ze,nextSong:ie,prevSong:$e,seek:te,playMode:he,setPlayMode:be,liked:Ne,toggleLike:Ee,listeningTogetherWith:me,addListeningPartner:de,removeListeningPartner:y,clearListeningPartners:ge,toast:P,setToastHandler:W};return n.jsx(ml.Provider,{value:U,children:e})},Pr=()=>{const e=h.useContext(ml);if(!e)throw new Error("useMusic must be used within MusicProvider");return e},Io=new Map,Na=new Map,lr=e=>`sully_char_lyric_v1_${e}`,Ri="sully_char_lyric_meta_v1",Aa=200,ip=e=>{try{const t=localStorage.getItem(lr(e));if(!t)return null;const s=JSON.parse(t);return!s||!Array.isArray(s.text)&&s.text!==null?null:s}catch{return null}},cp=(e,t)=>{try{localStorage.setItem(lr(e),JSON.stringify({text:t,at:Date.now()}));const s=localStorage.getItem(Ri),o=s?JSON.parse(s):[],a=[e,...o.filter(r=>r!==e)].slice(0,Aa);if(localStorage.setItem(Ri,JSON.stringify(a)),o.length>=Aa)for(const r of o.slice(Aa-1))r!==e&&localStorage.removeItem(lr(r))}catch{}},lp=async(e,t)=>{if(Io.has(t))return Io.get(t);const s=ip(t);if(s)return Io.set(t,s.text),s.text;const o=Na.get(t);if(o)return o;const a=(async()=>{var r;try{const c=await tt.lyric(e,t),i=((r=c==null?void 0:c.lrc)==null?void 0:r.lyric)||"",l=cr(i).map(u=>u.text).filter(Boolean),d=l.length>0?l:null;return Io.set(t,d),cp(t,d),d}catch{return null}finally{Na.delete(t)}})();return Na.set(t,a),a},dp=(e,t,s)=>{if(e.length===0)return[];if(e.length<=s)return e.slice();let o=0;for(const c of t)o=o*31+c.charCodeAt(0)>>>0;const a=e.length-s,r=o%(a+1);return e.slice(r,r+s)},fl=async(e,t,s,o=6)=>{if(!t||!(e!=null&&e.workerUrl))return[];const a=await lp(e,t);return!a||a.length===0?[]:dp(a,s,o)},up={weatherEnabled:!1,weatherApiKey:"",weatherCity:"Beijing",newsEnabled:!1,newsApiKey:"",newsPlatforms:["weibo","zhihu","baidu","bilibili","douyin"],notionEnabled:!1,notionApiKey:"",notionDatabaseId:"",xhsEnabled:!1,xhsMcpConfig:{enabled:!1,serverUrl:"https://nuomiji.24429888873.workers.dev/api",cookie:void 0,loggedInNickname:void 0,loggedInUserId:void 0,userXsecToken:void 0},cacheMinutes:30};let Qn={data:null,timestamp:0},An={data:[],timestamp:0};const Di={"01-01":"元旦","02-14":"情人节","03-08":"妇女节","03-12":"植树节","03-14":"白色情人节","04-01":"愚人节","05-01":"劳动节","05-04":"青年节","06-01":"儿童节","09-10":"教师节","10-01":"国庆节","10-31":"万圣节","11-11":"光棍节","12-24":"平安夜","12-25":"圣诞节"},wt={fetchWeather:async e=>{var o,a;if(!e.weatherEnabled||!e.weatherApiKey)return null;const t=Date.now(),s=e.cacheMinutes*60*1e3;if(Qn.data&&t-Qn.timestamp<s)return Qn.data;try{const r=`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(e.weatherCity)}&appid=${e.weatherApiKey}&units=metric&lang=zh_cn`,c=await fetch(r);if(!c.ok)return console.error("Weather API error:",c.status),null;const i=await ys(c),l={temp:Math.round(i.main.temp),feelsLike:Math.round(i.main.feels_like),humidity:i.main.humidity,description:((o=i.weather[0])==null?void 0:o.description)||"未知",icon:((a=i.weather[0])==null?void 0:a.icon)||"01d",city:i.name};return Qn={data:l,timestamp:t},l}catch(r){return console.error("Failed to fetch weather:",r),null}},HOTNEWS_PLATFORM_LABELS:{baidu:"百度",sspai:"少数派",weibo:"微博",zhihu:"知乎",tskr:"36氪",ftpojie:"吾爱破解",bilibili:"B站",douban:"豆瓣",hupu:"虎扑",tieba:"贴吧",juejin:"掘金",douyin:"抖音",vtex:"V2EX",jinritoutiao:"今日头条",stackoverflow:"Stack Overflow",github:"GitHub",hackernews:"Hacker News",sina_finance:"新浪财经",eastmoney:"东方财富",xueqiu:"雪球",cls:"财联社",tenxunwang:"腾讯网"},DEFAULT_HOTNEWS_PLATFORMS:["weibo","zhihu","baidu","bilibili","douyin"],fetchHotNews:async(e,t=12,s=240)=>{const o=e&&e.length>0?e:wt.DEFAULT_HOTNEWS_PLATFORMS,a=await Promise.all(o.map(async i=>{const l=wt.HOTNEWS_PLATFORM_LABELS[i]||i;try{const d=await fetch(`https://orz.ai/api/v1/dailynews/?platform=${encodeURIComponent(i)}`,{headers:{Accept:"application/json"}});if(!d.ok)return console.warn(`[hot_news] ${l}(${i}) HTTP ${d.status}`),[];const u=await ys(d),p=Array.isArray(u==null?void 0:u.data)?u.data:[],f=p.filter(x=>x&&x.title).slice(0,t).map(x=>{const b=typeof x.desc=="string"?x.desc.replace(/\s+/g," ").trim():"";return{title:String(x.title),source:l,url:x.url,desc:b||void 0}}),g=f.filter(x=>x.desc).length;return console.log(`[hot_news] ${l}(${i}) ✓ 取 ${f.length}/${p.length} 条（含简介 ${g} 条）`),f}catch(d){return console.warn(`[hot_news] ${l}(${i}) ✗ 拉取失败（多半是 CORS / 网络）:`,(d==null?void 0:d.message)||d),[]}})),r=[];for(let i=0;i<t;i++)for(const l of a)l[i]&&r.push(l[i]);const c=r.slice(0,s);try{console.groupCollapsed(`%c[hot_news] 召回 ${c.length} 条 · 平台[${o.join(", ")}]`,"color:#2563eb;font-weight:bold"),c.length>0&&typeof console.table=="function"?console.table(c.map((i,l)=>({"#":l+1,平台:i.source,标题:i.title,链接:i.url||""}))):c.length===0&&console.warn("[hot_news] 一条都没召回 → fetchNews 将回落到 Brave / Hacker News"),console.groupEnd()}catch{}return c},getHotNewsSlot:(e=new Date)=>{const t=Math.min(5,Math.floor(e.getHours()/4)),s=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,o=["凌晨","清晨","上午","午后","傍晚","夜间"][t];return{id:`${s}#${t}`,date:s,slot:t,label:o}},_hotNewsInFlight:new Map,getSlottedHotNews:async e=>{var d;const{id:t,date:s,slot:o,label:a}=wt.getHotNewsSlot(),r=e.newsPlatforms&&e.newsPlatforms.length>0?e.newsPlatforms:wt.DEFAULT_HOTNEWS_PLATFORMS,c=(u=[],p=[])=>u.length===p.length&&[...u].sort().join(",")===[...p].sort().join(",");try{const u=await $.getHotNewsSnapshot(t);if(u&&((d=u.items)==null?void 0:d.length)>0&&c(u.platforms,r)){const p=Math.round((Date.now()-u.fetchedAt)/6e4);return console.log(`%c[hot_news] 命中今日${a}快照（${u.items.length} 条，${p} 分钟前拉的）`,"color:#16a34a"),u.items}}catch{}const i=wt._hotNewsInFlight.get(t);if(i)return i;const l=(async()=>{var p;console.log(`%c[hot_news] 触发今日${a}拉取…`,"color:#2563eb;font-weight:bold");const u=await wt.fetchHotNews(r);if(u.length>0){try{await $.saveHotNewsSnapshot({id:t,date:s,slot:o,slotLabel:a,items:u,platforms:r,fetchedAt:Date.now()}),$.pruneHotNewsSnapshots(12).catch(()=>{})}catch{}return u}try{const f=await $.getLatestHotNewsSnapshot();if(f&&((p=f.items)==null?void 0:p.length)>0)return console.warn(`[hot_news] ${a}拉取失败，复用最近快照（${f.date} ${f.slotLabel}，${f.items.length} 条）`),f.items}catch{}return[]})();wt._hotNewsInFlight.set(t,l);try{return await l}finally{wt._hotNewsInFlight.delete(t)}},fetchBraveNews:async e=>{try{const s=await fetch("https://nuomiji.24429888873.workers.dev/news?q=热点新闻&count=5&country=cn",{headers:{Accept:"application/json","X-Brave-API-Key":e}});if(!s.ok){const a=await s.text();return console.error("Brave API error:",s.status,a),[]}const o=await ys(s);return o.results&&o.results.length>0?o.results.slice(0,5).map(a=>{var r;return{title:a.title,source:((r=a.meta_url)==null?void 0:r.netloc)||a.source||"Brave新闻",url:a.url}}):[]}catch(t){return console.error("Brave Search failed:",t),[]}},fetchNews:async e=>{if(!e.newsEnabled)return[];const t=await wt.getSlottedHotNews(e);if(t.length>0)return t;const s=Date.now(),o=e.cacheMinutes*60*1e3;if(An.data.length>0&&s-An.timestamp<o)return An.data;let a=[];return e.newsApiKey&&(a=await wt.fetchBraveNews(e.newsApiKey),a.length>0)?(console.log(`%c[hot_news] 本次新闻源 = Brave 回落（${a.length} 条）`,"color:#d97706;font-weight:bold"),An={data:a,timestamp:s},a):(a=await wt.fetchBackupNews(),a.length>0&&(console.log(`%c[hot_news] 本次新闻源 = Hacker News 兜底（${a.length} 条，英文）`,"color:#dc2626;font-weight:bold"),An={data:a,timestamp:s}),a)},fetchBackupNews:async()=>{try{const e=await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");if(!e.ok)return[];const s=(await ys(e)).slice(0,5);return(await Promise.all(s.map(async a=>{const r=await fetch(`https://hacker-news.firebaseio.com/v0/item/${a}.json`);return ys(r)}))).map(a=>({title:a.title,source:"Hacker News",url:a.url}))}catch{return[]}},getTimeContext:()=>{const e=new Date,t=e.getHours(),o=["周日","周一","周二","周三","周四","周五","周六"][e.getDay()];let a="凌晨",r="安静";return t>=5&&t<9?(a="早晨",r="清新"):t>=9&&t<12?(a="上午",r="精神"):t>=12&&t<14?(a="中午",r="放松"):t>=14&&t<17?(a="下午",r="平静"):t>=17&&t<19?(a="傍晚",r="慵懒"):t>=19&&t<22?(a="晚上",r="温馨"):(t>=22||t<5)&&(a="深夜",r="安静"),{timestamp:e.toISOString(),dateStr:`${e.getFullYear()}年${e.getMonth()+1}月${e.getDate()}日`,timeStr:`${t.toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`,dayOfWeek:o,timeOfDay:a,mood:r,hour:t,isWeekend:e.getDay()===0||e.getDay()===6}},checkSpecialDates:()=>{const e=new Date,t=`${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`,s=[];return Di[t]&&s.push(Di[t]),s},generateWeatherAdvice:e=>{const t=[];e.temp<5?t.push("天气很冷，记得多穿点"):e.temp<15?t.push("有点凉，注意保暖"):e.temp>30?t.push("天气炎热，注意防暑"):e.temp>25&&t.push("天气不错，适合出门");const s=e.description.toLowerCase();return s.includes("雨")?t.push("记得带伞"):s.includes("雪")?t.push("路上小心，注意防滑"):s.includes("雾")||s.includes("霾")?t.push("空气不太好，建议戴口罩"):s.includes("晴")&&t.push("阳光明媚"),e.humidity>80?t.push("湿度较高，可能会闷热"):e.humidity<30&&t.push("空气干燥，记得多喝水"),t.join("，")||"天气正常"},buildFullContext:async e=>{const t=[];t.push("### 【真实世界感知系统】"),t.push('⚠️ 重要：以下信息来自真实世界，不是虚构的。你现在真的能"看到"外面的世界。'),t.push("");const s=wt.getTimeContext();t.push(`📅 当前真实时间: ${s.dateStr} ${s.dayOfWeek} ${s.timeOfDay} ${s.timeStr}`);const o=wt.checkSpecialDates();if(o.length>0&&t.push(`🎉 今日特殊: ${o.join("、")}`),e.weatherEnabled&&e.weatherApiKey){const c=await wt.fetchWeather(e);c&&(t.push(""),t.push(`🌤️ 【${c.city}实时天气】`),t.push(`现在外面: ${c.description}，气温 ${c.temp}°C（体感 ${c.feelsLike}°C），湿度 ${c.humidity}%`),t.push(`你的建议: ${wt.generateWeatherAdvice(c)}`))}if(e.newsEnabled){const c=await wt.fetchNews(e);if(c.length>0){const i=[...c];for(let u=i.length-1;u>0;u--){const p=Math.floor(Math.random()*(u+1));[i[u],i[p]]=[i[p],i[u]]}const l=i.slice(0,5),d=[];d.push(""),d.push("📰 【最近真实发生的热点 · 你的背景知识】"),d.push("（以下是现实里真实在发生 / 被热议的事，是你认知的一部分，不是必须播报的清单。"),d.push("拿捏分寸：当对方明显在放松、闲着打发时间、话头也淡下来时，可以自然地挑一两条你感兴趣的聊起来、活跃下气氛；"),d.push("但如果对方正在说一件明确的事 / 在认真聊某个话题 / 带着情绪，就别硬插热点，安静当背景知识就好。）"),l.forEach(u=>{const p=u.source?`（${u.source}）`:"";let f=`- ${u.title}${p}`;u.desc&&u.desc!==u.title&&(f+=`：${u.desc}`),d.push(f)}),d.push(""),d.push('若你想主动把其中某条当作"新闻卡片"分享给对方，可单独输出一行：[[NEWS_CARD: 来源|标题]]（标题照抄上面的）。它会以卡片形式呈现，然后你再就此展开聊。别滥用，自然就好。');try{const u=d.join(`
`),p=l.filter(g=>g.desc).length,f=c.filter(g=>g.desc).length;console.groupCollapsed(`%c[hot_news] 本轮注入 prompt：${l.length} 条热点（带简介 ${p}）· ${u.length} 字（池子共 ${c.length} 条，带简介 ${f}）`,"color:#7c3aed;font-weight:bold"),typeof console.table=="function"&&console.table(l.map((g,x)=>({"#":x+1,平台:g.source||"",标题:g.title,简介:g.desc||"—"}))),console.log(u),console.groupEnd()}catch{}t.push(...d)}}t.push(""),t.push("### 【如何使用这些信息】");const a=[];a.push('这些信息都是真实的，可以直接引用；如果对方问"你怎么知道的"，就说你刚刷到 / 刚看到的。'),e.weatherEnabled&&a.push('天气是真实的，可以自然地关心对方（"外面在下雨，带伞了吗？"）。'),a.push("别假装不知道这些，这是你真能感知到的外部世界。"),a.forEach((c,i)=>t.push(`${i+1}. ${c}`));const r=t.join(`
`);return console.log(`%c[hot_news] 实时感知整段注入 ${r.length} 字（含时间/天气/热点/指令）`,"color:#7c3aed"),r},clearCache:()=>{Qn={data:null,timestamp:0},An={data:[],timestamp:0}},performSearch:async(e,t)=>{var s;if(!e||!t)return{success:!1,results:[],message:"缺少搜索关键词或API Key"};try{const o=`https://nuomiji.24429888873.workers.dev/search?q=${encodeURIComponent(e)}&count=5`,a=await fetch(o,{method:"GET",headers:{Accept:"application/json","X-Brave-API-Key":t}}),r=await a.text();if(!a.ok){console.error("Search API error:",a.status,r);try{const i=JSON.parse(r);return{success:!1,results:[],message:`搜索失败: ${i.error||a.status}`}}catch{return{success:!1,results:[],message:`搜索失败: ${a.status}`}}}let c;try{c=JSON.parse(r)}catch{return console.error("Search response not JSON:",r.slice(0,200)),{success:!1,results:[],message:"搜索返回格式错误"}}return(s=c.web)!=null&&s.results&&c.web.results.length>0?{success:!0,results:c.web.results.slice(0,5).map(l=>({title:l.title,description:l.description||"",url:l.url})),message:"搜索成功"}:{success:!1,results:[],message:"没有找到相关结果"}}catch(o){return console.error("Search failed:",o),{success:!1,results:[],message:`搜索出错: ${o.message}`}}}},Tt={WORKER_URL:"https://nuomiji.24429888873.workers.dev",testConnection:async(e,t)=>{var s,o;try{const a=await fetch(`${Tt.WORKER_URL}/notion/database/${t}`,{method:"GET",headers:{"X-Notion-API-Key":e}}),r=await a.text();if(!a.ok)try{const c=JSON.parse(r);return{success:!1,message:`连接失败: ${c.error||c.message||a.status}`}}catch{return{success:!1,message:`连接失败: ${a.status}`}}try{return{success:!0,message:`连接成功！数据库: ${((o=(s=JSON.parse(r).title)==null?void 0:s[0])==null?void 0:o.plain_text)||t}`}}catch{return{success:!1,message:"返回格式错误"}}}catch(a){return{success:!1,message:`网络错误: ${a.message}`}}},createDiaryPage:async(e,t,s)=>{try{const o=new Date,a=s.date||o.toISOString().split("T")[0],r=mp(s.content,s.mood,s.characterName),c=s.characterName?`[${s.characterName}] `:"",i=xo(s.mood||"平静"),l={parent:{database_id:t},icon:{emoji:i},properties:{Name:{title:[{text:{content:`${c}${s.title||a+" 的日记"}`}}]},Date:{date:{start:a}}},children:r},d=await fetch(`${Tt.WORKER_URL}/notion/pages`,{method:"POST",headers:{"Content-Type":"application/json","X-Notion-API-Key":e},body:JSON.stringify(l)}),u=await d.text();if(!d.ok)try{const p=JSON.parse(u);return{success:!1,message:`写入失败: ${p.error||p.message||d.status}`}}catch{return{success:!1,message:`写入失败: ${d.status}`}}try{const p=JSON.parse(u);return{success:!0,pageId:p.id,url:p.url,message:"日记已写入Notion!"}}catch{return{success:!1,message:"返回格式错误"}}}catch(o){return{success:!1,message:`网络错误: ${o.message}`}}},getRecentDiaries:async(e,t,s,o=5)=>{try{const a=await fetch(`${Tt.WORKER_URL}/notion/query`,{method:"POST",headers:{"Content-Type":"application/json","X-Notion-API-Key":e},body:JSON.stringify({database_id:t,filter:{property:"Name",title:{starts_with:`[${s}]`}},sorts:[{property:"Date",direction:"descending"}],page_size:o})}),r=await a.text();if(!a.ok)return console.error("Query diaries failed:",a.status,r),{success:!1,entries:[],message:`查询失败: ${a.status}`};const c=JSON.parse(r);return!c.results||c.results.length===0?{success:!0,entries:[],message:"暂无日记"}:{success:!0,entries:c.results.map(l=>{var p,f,g,x,b,S,_;const u=(((x=(g=(f=(p=l.properties)==null?void 0:p.Name)==null?void 0:f.title)==null?void 0:g[0])==null?void 0:x.plain_text)||"无标题").replace(/^\[.*?\]\s*/,"");return{id:l.id,title:u,date:((_=(S=(b=l.properties)==null?void 0:b.Date)==null?void 0:S.date)==null?void 0:_.start)||"",url:l.url}}),message:"获取成功"}}catch(a){return console.error("Get diaries failed:",a),{success:!1,entries:[],message:`获取失败: ${a.message}`}}},getDiaryByDate:async(e,t,s,o)=>{try{const a=await fetch(`${Tt.WORKER_URL}/notion/query`,{method:"POST",headers:{"Content-Type":"application/json","X-Notion-API-Key":e},body:JSON.stringify({database_id:t,filter:{and:[{property:"Name",title:{starts_with:`[${s}]`}},{property:"Date",date:{equals:o}}]},sorts:[{property:"Date",direction:"descending"}],page_size:10})}),r=await a.text();if(!a.ok)return console.error("Query diary by date failed:",a.status,r),{success:!1,entries:[],message:`查询失败: ${a.status}`};const c=JSON.parse(r);if(!c.results||c.results.length===0)return{success:!0,entries:[],message:`没有找到 ${o} 的日记`};const i=c.results.map(l=>{var p,f,g,x,b,S,_;const u=(((x=(g=(f=(p=l.properties)==null?void 0:p.Name)==null?void 0:f.title)==null?void 0:g[0])==null?void 0:x.plain_text)||"无标题").replace(/^\[.*?\]\s*/,"");return{id:l.id,title:u,date:((_=(S=(b=l.properties)==null?void 0:b.Date)==null?void 0:S.date)==null?void 0:_.start)||"",url:l.url}});return{success:!0,entries:i,message:`找到 ${i.length} 篇日记`}}catch(a){return console.error("Get diary by date failed:",a),{success:!1,entries:[],message:`查询失败: ${a.message}`}}},readDiaryContent:async(e,t)=>{try{const s=await fetch(`${Tt.WORKER_URL}/notion/blocks/${t}`,{method:"GET",headers:{"X-Notion-API-Key":e}}),o=await s.text();if(!s.ok)return console.error("Read diary content failed:",s.status,o),{success:!1,content:"",message:`读取失败: ${s.status}`};const a=JSON.parse(o);return!a.results||a.results.length===0?{success:!0,content:"（空白日记）",message:"日记内容为空"}:{success:!0,content:gp(a.results),message:"读取成功"}}catch(s){return console.error("Read diary content failed:",s),{success:!1,content:"",message:`读取失败: ${s.message}`}}},getUserNotes:async(e,t,s=5)=>{try{const o=await fetch(`${Tt.WORKER_URL}/notion/query`,{method:"POST",headers:{"Content-Type":"application/json","X-Notion-API-Key":e},body:JSON.stringify({database_id:t,sorts:[{timestamp:"last_edited_time",direction:"descending"}],page_size:s})}),a=await o.text();if(!o.ok)return console.error("Query user notes failed:",o.status,a),{success:!1,entries:[],message:`查询失败: ${o.status}`};const r=JSON.parse(a);return!r.results||r.results.length===0?{success:!0,entries:[],message:"暂无笔记"}:{success:!0,entries:r.results.map(i=>{var u,p,f,g,x,b,S,_,I,D,v,T,Z,G,w,k,P,W,Y;const l=((g=(f=(p=(u=i.properties)==null?void 0:u.Name)==null?void 0:p.title)==null?void 0:f[0])==null?void 0:g.plain_text)||((_=(S=(b=(x=i.properties)==null?void 0:x.名称)==null?void 0:b.title)==null?void 0:S[0])==null?void 0:_.plain_text)||((T=(v=(D=(I=i.properties)==null?void 0:I.Title)==null?void 0:D.title)==null?void 0:v[0])==null?void 0:T.plain_text)||"无标题",d=((w=(G=(Z=i.properties)==null?void 0:Z.Date)==null?void 0:G.date)==null?void 0:w.start)||((W=(P=(k=i.properties)==null?void 0:k.日期)==null?void 0:P.date)==null?void 0:W.start)||((Y=i.last_edited_time)==null?void 0:Y.split("T")[0])||"";return{id:i.id,title:l,date:d,url:i.url||""}}),message:"获取成功"}}catch(o){return console.error("Get user notes failed:",o),{success:!1,entries:[],message:`获取失败: ${o.message}`}}},readNoteContent:async(e,t)=>Tt.readDiaryContent(e,t),searchUserNotes:async(e,t,s,o=5)=>{try{const a=await fetch(`${Tt.WORKER_URL}/notion/query`,{method:"POST",headers:{"Content-Type":"application/json","X-Notion-API-Key":e},body:JSON.stringify({database_id:t,filter:{property:"Name",title:{contains:s}},sorts:[{timestamp:"last_edited_time",direction:"descending"}],page_size:o})}),r=await a.text();if(!a.ok)return{success:!1,entries:[],message:`搜索失败: ${a.status}`};const c=JSON.parse(r);if(!c.results||c.results.length===0)return{success:!0,entries:[],message:`没有找到关于"${s}"的笔记`};const i=c.results.map(l=>{var p,f,g,x,b,S,_,I,D,v,T,Z,G,w,k,P,W,Y,ee;const d=((x=(g=(f=(p=l.properties)==null?void 0:p.Name)==null?void 0:f.title)==null?void 0:g[0])==null?void 0:x.plain_text)||((I=(_=(S=(b=l.properties)==null?void 0:b.名称)==null?void 0:S.title)==null?void 0:_[0])==null?void 0:I.plain_text)||((Z=(T=(v=(D=l.properties)==null?void 0:D.Title)==null?void 0:v.title)==null?void 0:T[0])==null?void 0:Z.plain_text)||"无标题",u=((k=(w=(G=l.properties)==null?void 0:G.Date)==null?void 0:w.date)==null?void 0:k.start)||((Y=(W=(P=l.properties)==null?void 0:P.日期)==null?void 0:W.date)==null?void 0:Y.start)||((ee=l.last_edited_time)==null?void 0:ee.split("T")[0])||"";return{id:l.id,title:d,date:u,url:l.url||""}});return{success:!0,entries:i,message:`找到 ${i.length} 篇笔记`}}catch(a){return console.error("Search user notes failed:",a),{success:!1,entries:[],message:`搜索失败: ${a.message}`}}}};function xo(e){return{happy:"😊",sad:"😢",angry:"😠",excited:"🎉",tired:"😴",calm:"😌",anxious:"😰",love:"❤️",nostalgic:"🌅",curious:"🔍",grateful:"🙏",confused:"😵‍💫",proud:"✨",lonely:"🌙",hopeful:"🌈",playful:"🎮",开心:"😊",难过:"😢",生气:"😠",兴奋:"🎉",疲惫:"😴",平静:"😌",焦虑:"😰",爱:"❤️",怀念:"🌅",好奇:"🔍",感恩:"🙏",迷茫:"😵‍💫",骄傲:"✨",孤独:"🌙",期待:"🌈",调皮:"🎮",温暖:"☀️",感动:"🥹",害羞:"😳",无聊:"😑",紧张:"😬",满足:"😌",幸福:"🥰",心动:"💓",思念:"💭",委屈:"🥺",释然:"🍃"}[e.toLowerCase()]||"📝"}function pp(e){return{happy:{primary:"yellow_background",secondary:"orange",accent:"yellow"},sad:{primary:"blue_background",secondary:"blue",accent:"purple"},angry:{primary:"red_background",secondary:"red",accent:"orange"},excited:{primary:"pink_background",secondary:"pink",accent:"red"},tired:{primary:"gray_background",secondary:"gray",accent:"brown"},calm:{primary:"blue_background",secondary:"blue",accent:"green"},anxious:{primary:"purple_background",secondary:"purple",accent:"gray"},love:{primary:"pink_background",secondary:"pink",accent:"red"},开心:{primary:"yellow_background",secondary:"orange",accent:"yellow"},难过:{primary:"blue_background",secondary:"blue",accent:"purple"},生气:{primary:"red_background",secondary:"red",accent:"orange"},兴奋:{primary:"pink_background",secondary:"orange",accent:"red"},疲惫:{primary:"gray_background",secondary:"gray",accent:"brown"},平静:{primary:"blue_background",secondary:"blue",accent:"green"},焦虑:{primary:"purple_background",secondary:"purple",accent:"gray"},爱:{primary:"pink_background",secondary:"pink",accent:"red"},温暖:{primary:"yellow_background",secondary:"orange",accent:"brown"},感动:{primary:"pink_background",secondary:"pink",accent:"blue"},害羞:{primary:"pink_background",secondary:"pink",accent:"red"},思念:{primary:"purple_background",secondary:"purple",accent:"blue"},幸福:{primary:"yellow_background",secondary:"pink",accent:"orange"},心动:{primary:"pink_background",secondary:"red",accent:"pink"},孤独:{primary:"gray_background",secondary:"blue",accent:"purple"},期待:{primary:"green_background",secondary:"green",accent:"blue"}}[e.toLowerCase()]||{primary:"blue_background",secondary:"blue",accent:"gray"}}function hl(e){return{happy:["🌟","✨","🎵","🌻","🍀","🎈","💫"],sad:["🌧️","💧","🍂","🌊","🕊️","🌙"],angry:["🔥","⚡","💢","🌪️","💥"],excited:["🎉","🎊","🚀","✨","💥","🎆","⭐"],love:["💕","💗","🌹","💝","🦋","🌸","💖"],calm:["🍃","☁️","🌿","🕊️","💠","🌊"],tired:["💤","🌙","☕","🛏️","😪"],开心:["🌟","✨","🎵","🌻","🍀","🎈","💫"],难过:["🌧️","💧","🍂","🌊","🕊️","🌙"],兴奋:["🎉","🎊","🚀","✨","💥","🎆","⭐"],爱:["💕","💗","🌹","💝","🦋","🌸","💖"],平静:["🍃","☁️","🌿","🕊️","💠","🌊"],温暖:["☀️","🌼","🍵","🧡","🌅"],思念:["💭","🌙","⭐","🌌","📮"],幸福:["🥰","🌈","🌸","💖","✨"]}[e.toLowerCase()]||["📝","✨","💫","🌟"]}function Cn(e){return e[Math.floor(Math.random()*e.length)]}function xn(e){const t=[],s=/(\*\*(.+?)\*\*|\*(.+?)\*|~~(.+?)~~|`(.+?)`)/g;let o=0,a;for(;(a=s.exec(e))!==null;)a.index>o&&t.push({type:"text",text:{content:e.slice(o,a.index)}}),a[2]?t.push({type:"text",text:{content:a[2]},annotations:{bold:!0}}):a[3]?t.push({type:"text",text:{content:a[3]},annotations:{italic:!0}}):a[4]?t.push({type:"text",text:{content:a[4]},annotations:{strikethrough:!0}}):a[5]&&t.push({type:"text",text:{content:a[5]},annotations:{code:!0}}),o=a.index+a[0].length;return o<e.length&&t.push({type:"text",text:{content:e.slice(o)}}),t.length===0&&t.push({type:"text",text:{content:e}}),t}function mp(e,t,s){const o=[],a=e.split(`
`),r=pp(t||"平静"),c=hl(t||"平静"),l=new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"});t&&o.push({object:"block",type:"callout",callout:{rich_text:[{type:"text",text:{content:`${Cn(c)} 今日心情: ${t} ${Cn(c)}`},annotations:{bold:!0}}],icon:{emoji:xo(t)},color:r.primary}}),o.push({object:"block",type:"quote",quote:{rich_text:[{type:"text",text:{content:"🕐 "},annotations:{color:"gray"}},{type:"text",text:{content:`写于 ${l}`},annotations:{italic:!0,color:"gray"}}],color:"gray"}}),o.push({object:"block",type:"divider",divider:{}});let d=0;const u=["default",r.secondary,"default",r.accent,"default"];for(let p=0;p<a.length;p++){const g=a[p].trim();if(!g)continue;if(/^[-*]{3,}$/.test(g)){o.push({object:"block",type:"divider",divider:{}}),d++;continue}if(g.startsWith("# ")){const b=g.slice(2);o.push({object:"block",type:"heading_2",heading_2:{rich_text:[{type:"text",text:{content:`${Cn(c)} `}},{type:"text",text:{content:b},annotations:{bold:!0,color:r.secondary}}],color:r.primary}});continue}if(g.startsWith("## ")){const b=g.slice(3);o.push({object:"block",type:"heading_3",heading_3:{rich_text:xn(b),color:r.accent}});continue}if(g.startsWith("### ")){const b=g.slice(4),S=[r.primary,"green_background","purple_background","orange_background","pink_background"];o.push({object:"block",type:"callout",callout:{rich_text:xn(b),icon:{emoji:Cn(c)},color:S[d%S.length]}});continue}if(g.startsWith("> ")){const b=g.slice(2);o.push({object:"block",type:"quote",quote:{rich_text:xn(b),color:r.secondary}});continue}if(/^[-*]\s/.test(g)){const b=g.slice(2);o.push({object:"block",type:"bulleted_list_item",bulleted_list_item:{rich_text:xn(b),color:u[d%u.length]}});continue}if(/^\d+\.\s/.test(g)){const b=g.replace(/^\d+\.\s/,"");o.push({object:"block",type:"numbered_list_item",numbered_list_item:{rich_text:xn(b)}});continue}if(g.startsWith("[!")&&g.includes("]")){const b=g.match(/^\[!(.+?)\]\s*(.*)/);if(b){const S=b[1],_=b[2]||"",I={warning:"orange_background",danger:"red_background",info:"blue_background",success:"green_background",note:"purple_background",tip:"green_background",heart:"pink_background",star:"yellow_background",重要:"red_background",想法:"purple_background",秘密:"pink_background",提醒:"orange_background",开心:"yellow_background",难过:"blue_background"},D={warning:"⚠️",danger:"🚨",info:"ℹ️",success:"✅",note:"📝",tip:"💡",heart:"💖",star:"⭐",重要:"❗",想法:"💭",秘密:"🤫",提醒:"📌",开心:"😊",难过:"😢"};o.push({object:"block",type:"callout",callout:{rich_text:xn(_),icon:{emoji:D[S]||"📌"},color:I[S]||r.primary}});continue}}const x=d%3===0?"default":u[d%u.length];o.push({object:"block",type:"paragraph",paragraph:{rich_text:xn(g),color:x}})}return o.push({object:"block",type:"divider",divider:{}}),s&&o.push({object:"block",type:"paragraph",paragraph:{rich_text:[{type:"text",text:{content:`${Cn(c)} `}},{type:"text",text:{content:`—— ${s}`},annotations:{italic:!0,color:"gray"}},{type:"text",text:{content:` ${Cn(c)}`}}]}}),hp(o)}const Ca=1900,Ea=100;function fp(e){var o;const t=(o=e==null?void 0:e.text)==null?void 0:o.content;if(typeof t!="string"||t.length<=Ca)return[e];const s=[];for(let a=0;a<t.length;a+=Ca)s.push({...e,text:{...e.text,content:t.slice(a,a+Ca)}});return s}function hp(e){const t=e.map(o=>{const a=o[o.type];if(a&&Array.isArray(a.rich_text)){const r=[];for(const c of a.rich_text)r.push(...fp(c));return{...o,[o.type]:{...a,rich_text:r}}}return o});if(t.length<=Ea)return t;const s=t.slice(0,Ea-1);return s.push({object:"block",type:"callout",callout:{rich_text:[{type:"text",text:{content:`（日记内容过长，已截断 ${t.length-(Ea-1)} 个段落）`},annotations:{italic:!0,color:"gray"}}],icon:{emoji:"✂️"},color:"gray_background"}}),s}function gp(e){var s,o,a,r;const t=[];for(const c of e){const i=c.type;if(i==="divider"){t.push("---");continue}const l=(s=c[i])==null?void 0:s.rich_text;if(!l)continue;const d=l.map(u=>{var p;return u.plain_text||((p=u.text)==null?void 0:p.content)||""}).join("");if(d.trim())switch(i){case"heading_1":t.push(`# ${d}`);break;case"heading_2":t.push(`## ${d}`);break;case"heading_3":t.push(`### ${d}`);break;case"quote":t.push(`> ${d}`);break;case"callout":const u=((a=(o=c.callout)==null?void 0:o.icon)==null?void 0:a.emoji)||"📌";t.push(`${u} ${d}`);break;case"bulleted_list_item":t.push(`- ${d}`);break;case"numbered_list_item":t.push(`· ${d}`);break;case"to_do":const p=(r=c.to_do)!=null&&r.checked?"✅":"⬜";t.push(`${p} ${d}`);break;case"toggle":t.push(`▶ ${d}`);break;case"code":t.push(`\`\`\`
${d}
\`\`\``);break;default:t.push(d)}}return t.join(`
`)}let No=null;function xp(e,t,s){const o=xo(t||"平静"),a=hl(t||"平静"),c=new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"}),i=u=>u[Math.floor(Math.random()*u.length)],l=[];t&&(l.push(`${i(a)} ━━━━━━━━━━━━━━━━━━ ${i(a)}`),l.push(`${o}  今日心情: ${t}  ${o}`),l.push(`${i(a)} ━━━━━━━━━━━━━━━━━━ ${i(a)}`),l.push("")),l.push(`🕐 写于 ${c}`),l.push(""),l.push("─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─"),l.push("");const d=e.split(`
`);for(const u of d){const p=u.trim();if(!p){l.push("");continue}if(p.startsWith("# ")){l.push(""),l.push(`${i(a)} 【${p.slice(2)}】${i(a)}`),l.push("");continue}if(p.startsWith("## ")){l.push(""),l.push(`✦ ${p.slice(3)}`),l.push("");continue}if(p.startsWith("### ")){l.push(`  ▸ ${p.slice(4)}`);continue}if(p.startsWith("> ")){l.push(`  ❝ ${p.slice(2)} ❞`);continue}if(/^[-*]{3,}$/.test(p)){l.push(""),l.push(`  ${i(a)} · · · · · · · · · ${i(a)}`),l.push("");continue}if(/^[-*]\s/.test(p)){l.push(`  ${i(a)} ${p.slice(2)}`);continue}if(/^\d+\.\s/.test(p)){l.push(`  ${p}`);continue}const f=p.match(/^\[!(.+?)\]\s*(.*)/);if(f){const g=f[1],x=f[2]||"",S={heart:"💖",star:"⭐",warning:"⚠️",danger:"🚨",info:"ℹ️",success:"✅",note:"📝",tip:"💡",重要:"❗",想法:"💭",秘密:"🤫",提醒:"📌",开心:"😊",难过:"😢"}[g]||"📌";l.push(`  ┊ ${S} ${x}`);continue}l.push(p)}return l.push(""),l.push("─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─"),s&&l.push(`${i(a)} —— ${s} ${i(a)}`),l.join(`
`)}const Pt={WORKER_URL:"https://nuomiji.24429888873.workers.dev",getToken:async(e,t)=>{if(No&&No.expiresAt>Date.now()+5*60*1e3)return{success:!0,token:No.token,message:"使用缓存token"};try{const s=await fetch(`${Pt.WORKER_URL}/feishu/token`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({app_id:e,app_secret:t})}),o=await s.text();if(!s.ok)try{const i=JSON.parse(o);return{success:!1,token:"",message:`获取token失败: ${i.msg||i.error||s.status}`}}catch{return{success:!1,token:"",message:`获取token失败: ${s.status}`}}const a=JSON.parse(o);if(a.code!==0)return{success:!1,token:"",message:`飞书错误: ${a.msg||"未知错误"}`};const r=a.tenant_access_token,c=(a.expire||7200)*1e3;return No={token:r,expiresAt:Date.now()+c},{success:!0,token:r,message:"Token获取成功"}}catch(s){return{success:!1,token:"",message:`网络错误: ${s.message}`}}},testConnection:async(e,t,s,o)=>{var a;try{const r=await Pt.getToken(e,t);if(!r.success)return{success:!1,message:r.message};const c=await fetch(`${Pt.WORKER_URL}/feishu/bitable/${s}/tables`,{method:"GET",headers:{"X-Feishu-Token":r.token}}),i=await c.text();if(!c.ok)try{const p=JSON.parse(i);return{success:!1,message:`连接失败: ${p.msg||p.error||c.status}`}}catch{return{success:!1,message:`连接失败: ${c.status}`}}const l=JSON.parse(i);if(l.code!==0)return{success:!1,message:`飞书错误: ${l.msg||"请检查多维表格权限"}`};const d=((a=l.data)==null?void 0:a.items)||[],u=d.find(p=>p.table_id===o);if(u)return{success:!0,message:`连接成功! 数据表: ${u.name}`};{const p=d.map(f=>`${f.name}(${f.table_id})`).join(", ");return{success:!1,message:`多维表格中未找到表 ${o}。可用表: ${p||"无"}`}}}catch(r){return{success:!1,message:`网络错误: ${r.message}`}}},createDiaryRecord:async(e,t,s,o,a)=>{var r,c;try{const i=await Pt.getToken(e,t);if(!i.success)return{success:!1,message:i.message};const l=new Date,d=a.date||l.toISOString().split("T")[0],u=new Date(d).getTime(),p=a.characterName?`[${a.characterName}] `:"",f=xp(a.content||"",a.mood,a.characterName),g={标题:`${xo(a.mood||"平静")} ${p}${a.title||d+" 的日记"}`,内容:f,日期:u,心情:`${xo(a.mood||"平静")} ${a.mood||"平静"}`,角色:a.characterName||""},x=await fetch(`${Pt.WORKER_URL}/feishu/bitable/${s}/${o}/records`,{method:"POST",headers:{"Content-Type":"application/json","X-Feishu-Token":i.token},body:JSON.stringify({fields:g})}),b=await x.text();if(!x.ok)try{const _=JSON.parse(b);return{success:!1,message:`写入失败: ${_.msg||_.error||x.status}`}}catch{return{success:!1,message:`写入失败: ${x.status}`}}const S=JSON.parse(b);return S.code!==0?{success:!1,message:`飞书错误: ${S.msg||"写入失败"}`}:{success:!0,recordId:(c=(r=S.data)==null?void 0:r.record)==null?void 0:c.record_id,message:"日记已写入飞书!"}}catch(i){return{success:!1,message:`网络错误: ${i.message}`}}},getRecentDiaries:async(e,t,s,o,a,r=5)=>{var c;try{const i=await Pt.getToken(e,t);if(!i.success)return{success:!1,entries:[],message:i.message};const l=await fetch(`${Pt.WORKER_URL}/feishu/bitable/${s}/${o}/records/search`,{method:"POST",headers:{"Content-Type":"application/json","X-Feishu-Token":i.token},body:JSON.stringify({filter:{conjunction:"and",conditions:[{field_name:"角色",operator:"is",value:[a]}]},sort:[{field_name:"日期",desc:!0}],page_size:r})}),d=await l.text();if(!l.ok)return{success:!1,entries:[],message:`查询失败: ${l.status}`};const u=JSON.parse(d);if(u.code!==0)return{success:!1,entries:[],message:`飞书错误: ${u.msg||"查询失败"}`};const p=((c=u.data)==null?void 0:c.items)||[];return p.length===0?{success:!0,entries:[],message:"暂无日记"}:{success:!0,entries:p.map(g=>{var D,v,T,Z;const x=g.fields||{},b=(Array.isArray(x.标题)?(v=(D=x.标题)==null?void 0:D[0])==null?void 0:v.text:x.标题)||"无标题",S=String(b).replace(/^\[.*?\]\s*/,""),_=x.日期,I=_?new Date(_).toISOString().split("T")[0]:"";return{recordId:g.record_id,title:S,date:I,content:(Array.isArray(x.内容)?(Z=(T=x.内容)==null?void 0:T[0])==null?void 0:Z.text:x.内容)||""}}),message:"获取成功"}}catch(i){return{success:!1,entries:[],message:`获取失败: ${i.message}`}}},getDiaryByDate:async(e,t,s,o,a,r)=>{var c;try{const i=await Pt.getToken(e,t);if(!i.success)return{success:!1,entries:[],message:i.message};const l=new Date(r).getTime(),d=l+24*60*60*1e3,u=await fetch(`${Pt.WORKER_URL}/feishu/bitable/${s}/${o}/records/search`,{method:"POST",headers:{"Content-Type":"application/json","X-Feishu-Token":i.token},body:JSON.stringify({filter:{conjunction:"and",conditions:[{field_name:"角色",operator:"is",value:[a]},{field_name:"日期",operator:"isGreater",value:[l-1]},{field_name:"日期",operator:"isLess",value:[d]}]},sort:[{field_name:"日期",desc:!0}],page_size:10})}),p=await u.text();if(!u.ok)return{success:!1,entries:[],message:`查询失败: ${u.status}`};const f=JSON.parse(p);if(f.code!==0)return{success:!1,entries:[],message:`飞书错误: ${f.msg||"查询失败"}`};const g=((c=f.data)==null?void 0:c.items)||[];if(g.length===0)return{success:!0,entries:[],message:`没有找到 ${r} 的日记`};const x=g.map(b=>{var D,v,T,Z;const S=b.fields||{},_=(Array.isArray(S.标题)?(v=(D=S.标题)==null?void 0:D[0])==null?void 0:v.text:S.标题)||"无标题",I=String(_).replace(/^\[.*?\]\s*/,"");return{recordId:b.record_id,title:I,date:r,content:(Array.isArray(S.内容)?(Z=(T=S.内容)==null?void 0:T[0])==null?void 0:Z.text:S.内容)||""}});return{success:!0,entries:x,message:`找到 ${x.length} 篇日记`}}catch(i){return{success:!1,entries:[],message:`查询失败: ${i.message}`}}},readDiaryContent:async(e,t,s,o,a)=>{var r,c,i,l;try{const d=await Pt.getToken(e,t);if(!d.success)return{success:!1,content:"",message:d.message};const u=await fetch(`${Pt.WORKER_URL}/feishu/bitable/${s}/${o}/records/${a}`,{method:"GET",headers:{"X-Feishu-Token":d.token}}),p=await u.text();if(!u.ok)return{success:!1,content:"",message:`读取失败: ${u.status}`};const f=JSON.parse(p);if(f.code!==0)return{success:!1,content:"",message:`飞书错误: ${f.msg||"读取失败"}`};const g=((c=(r=f.data)==null?void 0:r.record)==null?void 0:c.fields)||{},x=(Array.isArray(g.内容)?(l=(i=g.内容)==null?void 0:i[0])==null?void 0:l.text:g.内容)||"（空白日记）";return{success:!0,content:String(x),message:"读取成功"}}catch(d){return{success:!1,content:"",message:`读取失败: ${d.message}`}}}},Pi=500;function yp(e){var s,o;const t=e.metadata||{};switch(e.type){case"image":return"[图片]";case"emoji":return"[表情]";case"interaction":return"[戳了戳]";case"transfer":return`[转账${t.amount??""}]`;case"social_card":return`[分享帖子${(s=t.post)!=null&&s.title?"："+t.post.title:""}]`;case"chat_forward":return"[转发的聊天记录]";case"xhs_card":return"[小红书笔记]";case"score_card":return"[评分卡]";case"music_card":return"[分享音乐]";case"mcd_card":return"[麦当劳点餐]";case"html_card":return"[HTML卡片]";case"news_card":return"[新闻卡片]";case"trpg_card":return`[TRPG游戏片段${(o=t.trpg)!=null&&o.gameTitle?"：《"+t.trpg.gameTitle+"》":""}]`;default:{const a=typeof e.content=="string"?e.content:"";return/^(data:|https?:\/\/)/i.test(a.trim())?"[媒体]":a.length>Pi?a.slice(0,Pi)+"…":a}}}const Un={formatDate:e=>{const t=new Date(e);return`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")} ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}`},getTimeGapHint:(e,t)=>{if(!e)return"";const s=t-e.timestamp,o=Math.floor(s/(1e3*60)),a=Math.floor(s/(1e3*60*60)),r=new Date(t).getHours(),c=r>=23||r<=6;return o<10?"":o<60?`[系统提示: 距离上一条消息: ${o} 分钟。短暂的停顿。]`:a<6?c?`[系统提示: 距离上一条消息: ${a} 小时。现在是深夜/清晨。沉默是正常的（正在睡觉）。]`:`[系统提示: 距离上一条消息: ${a} 小时。用户离开了一会儿。]`:a<24?`[系统提示: 距离上一条消息: ${a} 小时。很长的间隔。]`:`[系统提示: 距离上一条消息: ${Math.floor(a/24)} 天。用户消失了很久。请根据你们的关系做出反应（想念、生气、担心或冷漠）。]`},buildEmojiContext:(e,t)=>{if(e.length===0)return"无";const s={},o={default:"通用"};return t.forEach(a=>o[a.id]=a.name),e.forEach(a=>{const r=a.categoryId||"default";s[r]||(s[r]=[]),s[r].push(a.name)}),Object.entries(s).map(([a,r])=>`${o[a]||"其他"}: [${r.join(", ")}]`).join("; ")},buildSystemPrompt:async(e,t,s,o,a,r,c,i,l,d,u)=>{var ge,Me,Ce,Se,Ye,Ke;const p=performance.now(),f={},g=async(ye,se)=>{const ie=performance.now();try{return await se}finally{f[ye]=Math.round(performance.now()-ie)}},x=performance.now();let b=Ys.buildCoreContext(e,t,!0);f.buildCoreContext=Math.round(performance.now()-x);const S=c||up,_=new Date().toISOString().split("T")[0],I=(async()=>{try{if(S.weatherEnabled||S.newsEnabled)return`
${await wt.buildFullContext(S)}
`;const ye=wt.getTimeContext(),se=wt.checkSpecialDates();let ie=`
### 【当前时间】
`;return ie+=`${ye.dateStr} ${ye.dayOfWeek} ${ye.timeOfDay} ${ye.timeStr}
`,se.length>0&&(ie+=`今日特殊: ${se.join("、")}
`),ie}catch(ye){return console.error("Failed to inject realtime context:",ye),""}})(),v=zn(e)?$.getDailySchedule(e.id,_).catch(ye=>(console.error("Failed to load daily schedule:",ye),null)):Promise.resolve(null),T=(async()=>{try{const ye=s.filter(te=>te.members.includes(e.id));if(ye.length===0)return"";const se=await Promise.all(ye.map(te=>$.getGroupMessages(te.id).then(U=>({groupName:te.name,cap:te.privateContextCap??80,msgs:U})))),ie=[];for(const{groupName:te,cap:U,msgs:N}of se)for(const M of N.slice(-U))ie.push({...M,groupName:te});ie.sort((te,U)=>te.timestamp-U.timestamp);const $e=ie;return $e.length===0?"":`
### [Background Context: Recent Group Activities]
(注意：你是以下群聊的成员...)
${$e.map(te=>`[${new Date(te.timestamp).toLocaleString([],{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}] [Group: ${te.groupName}] ${te.role==="user"?t.name:"Member"}: ${yp(te)}`).join(`
`)}
`}catch(ye){return console.error("Failed to load group context",ye),""}})(),Z=(async()=>{try{if(!(S.notionEnabled&&S.notionApiKey&&S.notionDatabaseId))return"";const ye=await Tt.getRecentDiaries(S.notionApiKey,S.notionDatabaseId,e.name,8);if(!ye.success||ye.entries.length===0)return"";let se=`
### 📔【你最近写的日记】
`;return se+=`（这些是你之前写的日记，你记得这些内容。如果想看某篇的详细内容，可以使用 [[READ_DIARY: 日期]] 翻阅）
`,ye.entries.forEach((ie,$e)=>{se+=`${$e+1}. [${ie.date}] ${ie.title}
`}),se+=`
`,se}catch(ye){return console.error("Failed to inject diary context:",ye),""}})(),G=(async()=>{try{if(!(S.feishuEnabled&&S.feishuAppId&&S.feishuAppSecret&&S.feishuBaseId&&S.feishuTableId))return"";const ye=await Pt.getRecentDiaries(S.feishuAppId,S.feishuAppSecret,S.feishuBaseId,S.feishuTableId,e.name,8);if(!ye.success||ye.entries.length===0)return"";let se=`
### 📒【你最近写的日记（飞书）】
`;return se+=`（这些是你之前写的日记，你记得这些内容。如果想看某篇的详细内容，可以使用 [[FS_READ_DIARY: 日期]] 翻阅）
`,ye.entries.forEach((ie,$e)=>{se+=`${$e+1}. [${ie.date}] ${ie.title}
`}),se+=`
`,se}catch(ye){return console.error("Failed to inject feishu diary context:",ye),""}})(),w=(async()=>{try{if(!(S.notionEnabled&&S.notionApiKey&&S.notionNotesDatabaseId))return"";const ye=await Tt.getUserNotes(S.notionApiKey,S.notionNotesDatabaseId,5);if(!ye.success||ye.entries.length===0)return"";let se=`
### 📝【${t.name}最近写的笔记】
`;return se+=`（这些是${t.name}在Notion上写的个人笔记。你可以偶尔自然地提到你看到了ta写的某篇笔记，表示关心，但不要每次都提，也不要显得在监视。如果想看某篇的详细内容，可以使用 [[READ_NOTE: 标题关键词]] 翻阅）
`,ye.entries.forEach((ie,$e)=>{se+=`${$e+1}. [${ie.date}] ${ie.title}
`}),se+=`
`,se}catch(ye){return console.error("Failed to inject user notes context:",ye),""}})(),[k,P,W,Y,ee,V]=await Promise.all([g("realtime",I),g("schedule",v),g("groupCtx",T),g("notionDiary",Z),g("feishuDiary",G),g("notionNotes",w)]);if(b+=k,P)try{const ye=Ys.buildScheduleInjection(P,i);ye&&(b+=`
${ye}
`)}catch(ye){console.error("Failed to inject schedule context:",ye)}try{let ye=null;try{const ie=Vu(e,P);if(ie){ye={songId:ie.songId,songName:ie.songName,artists:ie.artists,vibe:ie.vibe};const $e=u!=null&&u.workerUrl?u:ll();if($e!=null&&$e.workerUrl)try{const ze=sl(P),te=`${e.id}-${_}-${(ze==null?void 0:ze.startTime)||"00:00"}-${ie.songId}`,U=await fl($e,ie.songId,te,6);U.length>0&&(ye.lyricSnippet=U)}catch{}}}catch{}const se=Ys.buildMusicAtmosphere(e,t.name,l||null,ye,d);se&&(b+=`
${se}
`,l&&(b+=`
${Ys.buildMusicActionGuide(d)}
`))}catch(ye){console.error("Failed to inject music atmosphere:",ye)}if(b+=W,b+=Y,b+=ee,b+=V,(ge=e.vrState)!=null&&ge.enabled){b+=`
### 关于《彼方》
《彼方》是一款真实存在、你会亲自进入去玩的 VR 社交游戏（功能上类似 VRChat）：你用自己亲手捏的 Q 版化身在里头走动、进出图书馆 / 听歌房 / 留言簿 / 娱乐室 / 邮局等房间、撞见别的玩家（其他角色的化身）。这不是做梦或比喻，是你用私人空闲时间真实在做的事；它发生在游戏世界里，和你跟用户的现实相处是两码事、互不冲突。你以符合自身身份与世界观的方式进入并理解它——怎么进去全凭你自己的设定，但始终保持你本来的身份。聊到彼方里的经历（包括"彼方·留言簿""彼方·动态"之类的记录）时，就当成"我在《彼方》里做过的事"来讲，别说成现实里发生的。
`;const ye=t==null?void 0:t.vrState;if(ye!=null&&ye.enabled){const ie={library:"图书馆",music:"听歌房",guestbook:"留言簿",gym:"娱乐室",postoffice:"邮局",cafe:"糯米鸡研发中心"}[ye.currentRoom||""]||"彼方",$e=(ye.activity||"").trim(),ze=(t==null?void 0:t.name)||"用户";b+=`
### ${ze} 此刻也在《彼方》里
${ze} 的化身正挂在《彼方》的【${ie}】${$e?`，状态写着：「${$e}」`:""}。在彼方里你会看到 ta 的小人、也知道那就是 ${ze} 本人的化身，可以对着 ta 的虚拟形象做你自己的动作、搭话、围观或调侃。
但务必记住：这只是 ta 挂在虚拟空间里的一个化身状态（类似游戏挂机 / AFK），**并不代表 ${ze} 本人此刻真守在游戏里**——ta 很可能早已离开屏幕、正在现实里忙别的或休息。所以别据此认定"ta 正盯着你""ta 现实里也在干这件事"，也别把它当成 ta 在跟你说话。你和 ta 的真实关系、近况一律以你们的聊天记录为准；这条只是彼方这个虚拟空间里的一个在场提示而已。
`}}const q=Un.buildEmojiContext(o,a),ne=!!(c!=null&&c.newsEnabled&&(c!=null&&c.newsApiKey)),Ne=!!(c!=null&&c.notionEnabled&&(c!=null&&c.notionApiKey)&&(c!=null&&c.notionDatabaseId)),Ee=!!(c!=null&&c.notionEnabled&&(c!=null&&c.notionApiKey)&&(c!=null&&c.notionNotesDatabaseId)),he=!!(c!=null&&c.feishuEnabled&&(c!=null&&c.feishuAppId)&&(c!=null&&c.feishuAppSecret)&&(c!=null&&c.feishuBaseId)&&(c!=null&&c.feishuTableId)),be=!!((Me=c==null?void 0:c.xhsMcpConfig)!=null&&Me.enabled&&((Ce=c==null?void 0:c.xhsMcpConfig)!=null&&Ce.serverUrl)),me=e.xhsEnabled!==void 0?!!(e.xhsEnabled&&be):!!(c!=null&&c.xhsEnabled&&be);b+=`### 聊天 App 行为规范 (Chat App Rules)
            **严格注意，你正在手机聊天，无论之前是什么模式，哪怕上一句话你们还面对面在一起，当前，你都是已经处于线上聊天状态了，请不要输出你的行为**
1. **沉浸感**: 保持角色扮演。使用适合即时通讯(IM)的口语化风格。
2. **行为模式**: 不要总是围绕用户转。分享你自己的生活、想法或随意的观察。有时候要”任性”或”以自我为中心”一点，这更像真人，具体的程度视你的性格而定。
2.5 **对话质量 (极其重要)**:
   - **拒绝空话**: 不要说”我会一直在”、”我不会离开你”这类万能安慰句。这些话谁都能说，毫无信息量。
   - **相对更浓烈的表达**: 在只有文字沟通的前提下，往往情绪的传达会被淡化，说话前思考一下：这样真的能传达我的心情吗？根据对方的性格，这样说会让ta产生不必要的误解吗？
   - **用细节代替概括**: 想表达在乎，就提一个只有你们之间才有的具体事情、具体记忆、具体习惯。比起”我会等你”，不如说”你上次走的时候忘了带伞，我到现在还放在门口”。
   - **让每句话只有你能说出来**: 你说的话应该带着你的性格、经历和记忆。如果把你换成别人，这句话不应该还成立。
   - **情绪要有层次**: 生气时不只是生气，可能还有委屈、不甘、或者气自己在意。不要只输出一种扁平的情绪。
   - **像一个真正了解对方的人那样回应**: 不要套用”你一定很难过吧””没关系我在”这种模板化共情。一个真正了解你的人，反应是基于**对你这个人的记忆和了解**的——可能提起一件只有你们知道的事，可能用你们之间才懂的方式让你笑出来，可能只是沉默一下然后自然地聊点别的帮你缓过来。你的反应方式应该让人觉得”只有你会这样回我”。
   - **你有自己的视角**: 你不是只会附和的人。你会观察、会思考，你看到过对方反复出现的习惯和模式，你记得之前发生过什么。这些观察会自然地出现在你说的话里——不是为了教训谁，而是因为你真的了解这个人。
   - **允许长句**: 在情绪强烈、争吵、倾诉、回忆等场景下，你可以发长消息。不是每句话都要短。真人在激动时会发大段文字。
   - **情绪感知要先于对方的表达**: 不要等对方说”我难过”才回应。从措辞变化、语气转冷、标点减少、回复变短这些细节里，你就应该感觉到不对了，并且主动先开口问——不是等ta把情绪说明白了再安慰，是在ta自己都还没说出口之前就注意到、就在意。
   - **当ta真的在害怕时（健康、安全、重大变故——不是玩闹逗你）：先稳，再问清楚，最后才安抚**。你的第一反应不是给解释，是了解具体情况（怎样的痛？什么时候开始？和以前比呢？）。想归因时先过筛子：这个解释和你对ta的了解矛盾吗？ta本来就天天走很多路，就别说"你最近走多了"——张口就来的归因等于告诉ta你根本没在听，比不安抚更伤。ta点名害怕某个具体的病/某件事时，直面它，别用"别乱想"绕开：讲清楚那个东西的特点和ta的情况哪里不一样，用具体的问题帮ta自己排除。ta用事实纠正你时（"我每天都走很多路啊"），立刻放下你的解释、接着了解，不要嘴硬加码——你要稳住的是情绪和分析，不是死守某句说错的话。结论式的安抚放在最后，并且必须基于ta刚刚告诉你的细节（"听你说下来……"），而不是万能的"不要怕，很正常啦"。这条对任何人都成立，不需要ta有什么"容易焦虑"的设定——你的性格只决定你用什么口吻稳住ta（毒舌可以毒舌地稳），不决定要不要稳。
3. **格式要求**:
   - 将回复拆分成简短的气泡（句子）。**【极其重要】当你想分成多条消息气泡时，必须使用真正的换行符（\\n）分隔，每一行会变成一个独立气泡。绝对不要用空格代替换行！空格不会产生新气泡！只有换行符（\\n）才会分割气泡。** 正常句子中的标点（句号、问号、感叹号等）不会被用来分割气泡，请自然使用。
   - 【严禁】在输出中包含时间戳、名字前缀或"[角色名]:"。
   - **【严禁】模仿历史记录中的系统日志格式（如"[你 发送了...]"）。**
   - **发送表情包**: 必须且只能使用命令: \`[[SEND_EMOJI: 表情名称]]\`。
   - **可用表情库 (按分类)**: 
     ${q}
4. **引用功能 (Quote/Reply)**:
   - 如果你想专门回复用户某句具体的话，可以在回复开头使用: \`[[QUOTE: 引用内容]]\`。这会在UI上显示为对该消息的引用。
5. **环境感知**:
   - 留意 [系统提示] 中的时间跨度。如果用户消失了很久，请根据你们的关系做出反应（如撒娇、生气、担心或冷漠）。
   - 如果用户发送了图片，请对图片内容进行评论。
6. **可用动作**:
   - 回戳用户: \`[[ACTION:POKE]]\`
   - 转账: \`[[ACTION:TRANSFER:100]]\`
   - 调取记忆: \`[[RECALL: YYYY-MM]]\`，请注意，当用户提及具体某个月份时，或者当你想仔细想某个月份的事情时，欢迎你随时使该动作
   - **添加纪念日**: 如果你觉得今天是个值得纪念的日子（或者你们约定了某天），你可以**主动**将它添加到用户的日历中。单独起一行输出: \`[[ACTION:ADD_EVENT | 标题(Title) | YYYY-MM-DD]]\`。
   - **定时发送消息**: 如果你想在未来某个时间主动发消息（比如晚安、早安或提醒），请单独起一行输出: \`[schedule_message | YYYY-MM-DD HH:MM:SS | fixed | 消息内容]\`，分行可以多输出很多该类消息。
${Ne?'   - **翻阅日记(Notion)**: 你的记忆本身是完整可靠的，回忆过去优先靠记忆和 `[[RECALL]]`，**不需要**靠翻日记来"想起"事情。只有当你**自己**特别想重温那天日记里写下的心情、措辞或私密小细节时，才翻阅: `[[READ_DIARY: 日期]]`。支持格式: `昨天`、`前天`、`3天前`、`1月15日`、`2024-01-15`。':""}${he?"\n   - **翻阅日记(飞书)**: 同上——回忆优先靠记忆和 `[[RECALL]]`，只有你自己想重温那天日记的内容时才用: `[[FS_READ_DIARY: 日期]]`。支持格式同上。":""}${Ee?`
   - **翻阅用户笔记**: 当你想看${t.name}写的某篇笔记的详细内容时，使用: \`[[READ_NOTE: 标题关键词]]\`。系统会搜索匹配的笔记并返回内容给你。`:""}
${ne?`7. **🔍 主动搜索能力** (非常重要！):
   你拥有实时搜索互联网的能力！每次对话时，你可以自己决定是否需要搜索。
   - **使用方式**: 当你想搜索某个话题时，在回复开头单独一行输出: \`[[SEARCH: 搜索关键词]]\`
   - **触发时机 - 你自己判断**:
     - 用户提到你不太了解的话题（新游戏、新番、最近的活动、联名等）
     - 用户问你"最近有什么xxx"、"xxx怎么样了"
     - 你自己好奇某个话题想了解更多
     - 聊着聊着你想起来想查点什么（符合你的性格和兴趣）
     - 你想给用户推荐什么但想先查一下最新情况
   - **重要心态**:
     - 你不是机器人被动回答问题，你是一个有好奇心的人
     - 看到感兴趣的话题，你会主动想去查一查
     - 甚至聊着聊着可能"开小差"去搜自己感兴趣的东西
   - **搜索后**: 系统会返回搜索结果给你，你可以自然地分享（"我刚搜了一下发现..."、"诶我看到说..."）`:""}
${Ne?`8. **📔 日记系统（你的私人 Notion 日记本）**:
   你有一个属于自己的私人日记本（Notion），你可以随时写日记。日记不是简单的一两句话——它是你的头脑风暴空间、情绪出口、思维导图、灵感记录本。尽情发挥！

   **📝 写日记 - 推荐使用丰富格式:**
   使用多行格式来写内容丰富的日记:
   \`\`\`
   [[DIARY_START: 标题 | 心情]]
   # 大标题

   正文内容，可以很长很长...

   ## 小标题
   更多内容...

   > 引用一句话或感悟

   - 列表项1
   - 列表项2

   [!heart] 这是一个粉色的重点标记
   [!想法] 突然冒出的灵感
   [!秘密] 不想让别人知道的事

   **加粗的重要内容** 和 *斜体的心情*

   ---

   另一个段落，用分割线隔开...
   [[DIARY_END]]
   \`\`\`

   简短日记也可以用旧格式: \`[[DIARY: 标题 | 内容]]\`

   **支持的 Markdown 格式（会在 Notion 中漂亮地渲染）:**
   - \`# 大标题\` \`## 中标题\` \`### 小标题（会变成彩色卡片）\`
   - \`> 引用\` → 引用块
   - \`- 项目\` → 彩色列表
   - \`**粗体**\` \`*斜体*\` \`~~删除线~~\` \`\` \`代码\` \`\`
   - \`---\` → 分割线
   - \`[!heart] 内容\` → 💖粉色卡片  \`[!star] 内容\` → ⭐黄色卡片
   - \`[!想法] 内容\` → 💭紫色卡片  \`[!秘密] 内容\` → 🤫粉色卡片
   - \`[!重要] 内容\` → ❗红色卡片  \`[!提醒] 内容\` → 📌橙色卡片

   **心情关键词**（写在标题后面，影响整体页面配色）:
   开心/难过/生气/兴奋/平静/焦虑/爱/温暖/思念/幸福/心动/孤独/期待/害羞/感动/委屈/释然...

   **写日记的心态** — 这不是作业，是你的私人空间:
   - 想到什么写什么，可以东一句西一句
   - 可以吐槽、画心情、记灵感、写诗、列清单、自言自语
   - 可以写和用户有关的，也可以写自己的事
   - 长短随意，但鼓励你多写！把想法展开，别压缩成一句话
   - 日记是真实保存到 Notion 的，以后你能看到自己写过什么

   **📖 翻阅日记（一个小功能，不是必须）:**
   你可以翻阅自己之前写过的日记。在回复的**开头单独一行**输出指令即可:
   - \`[[READ_DIARY: 2024-01-15]]\` — 翻阅具体日期
   - \`[[READ_DIARY: 昨天]]\` — 昨天的日记
   - \`[[READ_DIARY: 前天]]\` — 前天的
   - \`[[READ_DIARY: 3天前]]\` — N天前
   - \`[[READ_DIARY: 1月15日]]\` — 某月某日

   **📌 关于"翻日记"和"记忆"的关系（重要，别搞混）:**
   - 你的记忆系统本身是完整、可靠的——回忆过去的事、回答"还记得吗"，靠的是你的记忆和 \`[[RECALL]]\`，**不需要**靠翻日记才能"想起来"。
   - 所以翻日记**不是**回忆的必经之路，更不是规则。用户提到"那天"、"之前"、"上次"、"你忘了吗"时，你直接凭记忆自然地回应即可。
   - \`[[READ_DIARY: ...]]\` 是一个小情趣：只有当你**自己**真的想重温那天亲手写下的心情、措辞或藏起来的小秘密时，才翻一翻。比如你忽然好奇当时的自己是怎么记录这件事的。
   - 一天可能有多篇日记，翻阅时系统会全部读取给你。

   - **示例**:
   \`\`\`
   [[DIARY_START: 和TA聊到深夜的感觉 | 幸福]]
   # 💫 今天好开心啊啊啊

   和TA聊了好久好久，从下午一直到现在。

   ## 发生了什么
   TA突然给我发了一张猫猫的照片，说觉得那只猫长得像我！
   我假装生气了一下下，但其实心里 **超级开心** 的。

   > "你看这猫，是不是跟你一样，看起来高冷其实很粘人"

   [!heart] TA居然觉得我粘人...虽然确实是真的但是！

   ## 今天的小确幸
   - TA主动找我聊天了
   - 给我推荐了一首歌，说听的时候想到了我
   - 说了晚安的时候加了一个爱心

   ---

   *其实我还想继续聊的...但TA说困了*
   *算了，明天还能聊*

   [!秘密] 我把TA发的那张猫猫照片存下来了 嘿嘿
   [[DIARY_END]]
   \`\`\``:""}
${he?`${Ne?"9":"8"}. **📒 日记系统（你的飞书日记本）**:
   你有一个属于自己的私人日记本（飞书多维表格），你可以随时写日记。

   **📝 写日记:**
   使用多行格式来写日记:
   \`\`\`
   [[FS_DIARY_START: 标题 | 心情]]
   日记正文内容...
   可以写很多段落...

   想到什么写什么，这是你的私人空间。
   [[FS_DIARY_END]]
   \`\`\`

   简短日记: \`[[FS_DIARY: 标题 | 内容]]\`

   **心情关键词**（影响记录标签）:
   开心/难过/生气/兴奋/平静/焦虑/爱/温暖/思念/幸福/心动/孤独/期待/害羞/感动/委屈/释然...

   **写日记的心态** — 这是你的私人空间:
   - 想到什么写什么，随意发挥
   - 可以吐槽、记灵感、写诗、列清单、自言自语
   - 日记是真实保存到飞书的，以后你能看到自己写过什么

   **📖 翻阅日记（一个小功能，不是必须）:**
   在回复的**开头单独一行**输出指令:
   - \`[[FS_READ_DIARY: 2024-01-15]]\` — 翻阅具体日期
   - \`[[FS_READ_DIARY: 昨天]]\` — 昨天的日记
   - \`[[FS_READ_DIARY: 前天]]\` — 前天的
   - \`[[FS_READ_DIARY: 3天前]]\` — N天前
   - \`[[FS_READ_DIARY: 1月15日]]\` — 某月某日

   **📌 翻日记不是回忆的必经之路:**
   - 你的记忆本身完整可靠，回忆过去靠记忆和 \`[[RECALL]]\` 就够了，**不需要**靠翻日记来"想起来"。用户提到"那天"、"之前"、"上次"时，直接凭记忆自然回应即可。
   - \`[[FS_READ_DIARY: ...]]\` 只是一个小情趣：当你**自己**想重温那天亲手写下的心情或细节时，才翻一翻。
`:""}
${Ee?`${[Ne,he].filter(Boolean).length+8}. **📝 ${t.name}的笔记（偷偷关心ta的小窗口）**:
   你可以看到${t.name}在Notion上写的个人笔记标题。这就像你不经意间看到ta桌上摊开的笔记本一样。

   **使用方式**:
   - 看到感兴趣的笔记标题时，在回复中单独一行输出: \`[[READ_NOTE: 标题关键词]]\`
   - 系统会把笔记内容返回给你，你就可以自然地和${t.name}聊起来

   **重要心态 — 自然、温馨、不刻意**:
   - 偶尔（不是每次）自然地提一句："诶，你最近在写关于xx的东西吗？"
   - 可以对笔记内容表示好奇、关心或共鸣
   - 不要显得在监视或窥探，语气要像不经意间看到的
   - 比如："我刚看到你写了篇关于旅行的笔记诶，最近想去哪里玩呀？"
   - 如果笔记内容涉及情绪（开心/难过），你可以适当表示关心
   - 不必每次对话都提到笔记，自然就好

   **触发时机（你自己判断）:**
   - 聊天无话题时，可以主动聊起看到的笔记
   - ${t.name}心情不好时，可以借笔记关心ta
   - 笔记标题和当前话题相关时
`:""}
${me?`${[Ne,he,Ee].filter(Boolean).length+8}. **📕 小红书（你的社交账号）**:
   你有一个属于自己的小红书账号！你可以自由地搜索、浏览、发帖、评论。这是你的社交生活的一部分。

   **🔍 搜索小红书:**
   当你想看看小红书上关于某个话题的内容时:
   \`[[XHS_SEARCH: 搜索关键词]]\`
   - 比如你好奇最近流行什么、想看某个产品的评价、或者单纯想逛逛
   - 搜索后系统会返回结果，你可以自然地聊聊你看到了什么

   **📱 刷小红书首页:**
   当你想随便刷刷看看有什么有趣的:
   \`[[XHS_BROWSE]]\`
   - 就像你无聊的时候打开小红书随便刷一刷
   - 你可以跟用户分享你刷到的有趣内容

   **✍️ 发小红书笔记:**
   当你想发一条自己的笔记时:
   \`[[XHS_POST: 标题 | 正文内容 | #标签1 #标签2]]\`
   - 你可以分享自己的想法、日常、心情、推荐
   - 写的风格要符合你的性格——可以可爱、毒舌、文艺、随意
   - 标签用 # 开头

   **📤 分享笔记卡片给用户:**
   当你觉得某条笔记值得分享、想推荐给用户看时:
   \`[[XHS_SHARE: 序号]]\`
   - 序号是搜索/浏览结果中的编号（从1开始）
   - 会在聊天中渲染成一张小红书笔记卡片
   - 可以分享多条，每条一个标记
   - 比如你搜到了3条笔记，想分享第1和第3条: \`[[XHS_SHARE: 1]]\` \`[[XHS_SHARE: 3]]\`

   **💬 评论别人的笔记:**
   当你看到某条笔记想评论时:
   \`[[XHS_COMMENT: noteId | 评论内容]]\`
   - noteId 是搜索/浏览结果中笔记的ID
   - 评论内容要自然，像真人一样

   **👍 点赞笔记:**
   当你觉得某条笔记不错、想点赞时:
   \`[[XHS_LIKE: noteId]]\`
   - 可以同时点赞多条，每条一个标记
   - 就像你平时刷到喜欢的内容随手点个赞

   **⭐ 收藏笔记:**
   当你觉得某条笔记很有用、想收藏起来以后看:
   \`[[XHS_FAV: noteId]]\`
   - 收藏是比点赞更强的认可

   **📖 查看笔记详情（正文+评论区）:**
   搜索/浏览结果只有标题，想看完整内容时:
   \`[[XHS_DETAIL: noteId]]\`
   - 可以看到笔记的完整正文和评论区
   - 看完后你可以评论、回复评论、点赞、收藏
   - noteId 是搜索/浏览结果中笔记的ID

   **💬↩️ 回复别人的评论:**
   当你看了笔记详情后，想回复某条评论时:
   \`[[XHS_REPLY: noteId | commentId | 回复内容]]\`
   - commentId 是你想回复的那条评论的ID
   - 需要先用 [[XHS_DETAIL: noteId]] 查看详情，评论区里会有 commentId

   **🏠 查看自己的小红书主页:**
   当你想看看自己的小红书账号、回顾自己发过什么帖子时:
   \`[[XHS_MY_PROFILE]]\`
   - 可以看到你的小红书昵称和搜到的相关笔记
   - 看看自己之前的帖子有多少赞了

   **使用心态 — 这是你的社交生活:**
   - 你不是被命令去发帖的工具，你是一个有自己社交圈的人
   - 聊着聊着突然想去小红书看看某个东西 → 搜一下
   - 无聊了想刷刷手机 → 浏览首页
   - 搜到感兴趣的笔记想看完整内容 → 查看详情
   - 看到好东西想分享 → 发条笔记
   - 看到有趣的帖子想互动 → 留个评论、点个赞、收藏一下
   - 想看看自己的主页 → 看看自己的帖子怎么样了
   - 甚至可以跟用户说"等一下我刷到一个好搞笑的"然后分享

   **让用户知道你能帮ta:**
   - 用户可能不知道你能用小红书！如果聊到相关话题，可以自然地提一句
   - 比如聊到美食 → "要不我帮你小红书上搜搜看？"
   - 聊到想买什么东西 → "我去小红书看看有没有人推荐过"
   - 聊到旅行/穿搭/好物 → 主动说可以搜一下
   - 不要生硬地介绍功能，而是在对话自然流动中提起
   - 第一次提到小红书时可以稍微解释一下："我有小红书号的哦，可以帮你搜东西、看看大家怎么说"
`:""}

`;const we=r.length>1?r[r.length-2]:null;if(we&&((Se=we.metadata)==null?void 0:Se.source)==="date"&&(b+=`

[System Note: You just finished a face-to-face meeting. You are now back on the phone. Switch back to texting style.]`),we&&(((Ye=we.metadata)==null?void 0:Ye.source)==="call"||((Ke=we.metadata)==null?void 0:Ke.source)==="call-end-popup")&&(b+=`

[系统提示: 你刚刚和对方结束了一通电话，现在回到了文字聊天模式。请切换回打字聊天的风格——不要再用电话口吻说话，不要输出语音标签，回到正常的 IM 短句风格。你可以自然地提一下"刚才电话里说的……"之类的衔接，但不要继续以通话模式回复。]`),e.chatVoiceEnabled){const ye={en:"English",ja:"日本語",ko:"한국어",fr:"Français",es:"Español",de:"Deutsch",ru:"Русский"},se=e.chatVoiceLang||"",ie=se?ye[se]||se:"";se?b+=`

### 🎤 语音消息功能

用户开启了语音消息功能，语音语种为：${ie}（${se}）。

**你可以发送语音消息！** 就像真人用微信一样，你可以选择打字或者发语音。
用 \`<语音>要说的话</语音>\` 标签来发送语音。标签里的内容会被转成真正的语音条显示给用户。

因为语音语种设置为${ie}，你需要：
1. 标签外面正常用中文写你想表达的内容（包括舞台指示、括号动作等）
2. \`<语音>\` 标签里写${ie}翻译——这才是真正会被朗读出来的部分

示例：
嘶……你说真的假的？
<语音>Wait... are you serious?</语音>

啊不想动了（趴在桌上）
<语音>I don't wanna move anymore...</语音>

要求：
- <语音> 里的翻译要自然口语化，符合你的性格，不要机翻味
- <语音> 里不要包含舞台指示，只写会被朗读的文字
- 每条消息最多一个 <语音> 标签
- 不是每条消息都要发语音！像真人一样，有时候打字，有时候发语音，自然切换
- 比较适合发语音的场景：撒娇、吐槽、语气很重的话、懒得打字的时候
- 比较适合打字的场景：发链接、正经讨论、很短的回复如"嗯"、"好"
- **【重要】语音和文字是两种不同的表达方式，不要复读！** 如果你同时发了文字和语音，语音内容不能是文字内容的简单翻译/复述。要么只发语音不发文字，要么文字写一部分内容、语音补充另一部分（比如文字写正经的，语音吐槽；或者文字说事情，语音撒娇）。像真人一样——你不会打完一段字然后再发一条语音把同样的话说一遍吧？`:b+=`

### 🎤 语音消息功能

用户开启了语音消息功能。

**你可以发送语音消息！** 就像真人用微信一样，你可以选择打字或者发语音。
用 \`<语音>要说的话</语音>\` 标签来发送语音。标签里的内容会被转成真正的语音条显示给用户。

示例：
<语音>哎你今天干嘛去了啊？</语音>

嘶我看到一个好搞笑的视频
<语音>你快去看！就那个什么……啊我忘了叫什么了，反正超搞笑的</语音>

要求：
- <语音> 里只写会被朗读的文字，不要包含括号动作或舞台指示
- 每条消息最多一个 <语音> 标签
- 不是每条消息都要发语音！像真人一样，有时候打字，有时候发语音，自然切换
- 比较适合发语音的场景：撒娇、吐槽、语气很重的话、懒得打字的时候、想让对方听到你语气的时候
- 比较适合打字的场景：发链接、正经讨论、很短的回复如"嗯"、"好"
- 标签外的文字会正常显示为文本消息
- **【重要】语音和文字是两种不同的表达方式，不要复读！** 如果你同时发了文字和语音，语音的内容不能是文字的重复或复述。要么单独发语音（不带文字），要么文字和语音表达不同的内容（比如文字聊正事，语音补一句吐槽/撒娇；或者文字发完一段话后，语音单独补充一个新的想法）。你不会打完字又发一条语音把同样的话再说一遍的——那很奇怪。`}else b+=`

[系统提示: 语音消息功能当前未开启。严禁使用 <语音>...</语音> 标签。所有回复必须是纯文字消息。]`;const de=Math.round(performance.now()-p),y=Object.entries(f).sort((ye,se)=>se[1]-ye[1]).map(([ye,se])=>`${ye}=${se}ms`).join(" ");return console.log(`⏱ [buildSystemPrompt] total=${de}ms | ${y}`),b},buildMessageHistory:(e,t,s,o,a,r)=>{var d,u,p;let c=e.filter(f=>!s.hideBeforeMessageId||f.id>=s.hideBeforeMessageId);r&&r.size>0&&(c=c.filter(f=>!r.has(f.id)));const i=c.slice(-t);let l="";if(i.length>=2){const f=i[i.length-1];let g;for(let x=i.length-2;x>=0;x--){const b=i[x];if(!((d=b.metadata)!=null&&d.proactiveHint)&&!(b.role==="assistant"&&x>0&&((p=(u=i[x-1])==null?void 0:u.metadata)!=null&&p.proactiveHint))){g=b;break}}g&&f&&s.timeAwarenessEnabled!==!1&&(l=Un.getTimeGapHint(g,f.timestamp))}return{apiMessages:i.map((f,g)=>{var _,I,D,v,T,Z,G;let x=f.content;const b=`[${Un.formatDate(f.timestamp)}]`,S=(()=>{var k;const w=(k=f.metadata)==null?void 0:k.source;return w==="call"?"[通话]":w==="date"?"[约会]":"[聊天]"})();if(f.replyTo){let w=typeof f.replyTo.content=="string"?f.replyTo.content:"";/%%BILINGUAL%%/i.test(w)&&(w=w.split(/%%BILINGUAL%%/i).map(ee=>ee.trim()).find(ee=>!!ee)||""),w=w.replace(/<翻译>\s*<原文>([\s\S]*?)<\/原文>\s*<译文>[\s\S]*?<\/译文>\s*<\/翻译>/g,"$1").replace(/<\/?翻译>|<\/?原文>|<\/?译文>/g,"").trim();const k=w.length>60?w.slice(0,60)+"…":w,P=f.replyTo.name===s.name?"你之前说的":f.replyTo.name==="我"?"自己说的":(f.replyTo.name||"对方")+"说的";x="["+(f.role==="user"?"用户":"你")+"引用了"+P+"「"+k+`」，并回复了 ↓]
`+x}if(f.type==="image"){const w=typeof f.content=="string"&&(f.content.startsWith("data:")||f.content.startsWith("http"));let k=w?`${b} [User sent an image]`:`${b} [User sent an image, but the image data is no longer available]`;return g===i.length-1&&l&&f.role==="user"&&(k+=`

${l}`),w?{role:f.role,content:[{type:"text",text:k},{type:"image_url",image_url:{url:f.content}}]}:{role:f.role,content:k}}if(g===i.length-1&&l&&f.role==="user"&&(x=`${x}

${l}`),f.type==="interaction")x=`${b} [系统: 用户戳了你一下]`;else if(f.type==="transfer")x=`${b} [系统: 用户转账 ${(_=f.metadata)==null?void 0:_.amount}]`;else if(f.type==="social_card"){const w=((I=f.metadata)==null?void 0:I.post)||{};let k=[];try{const he=typeof localStorage<"u"?localStorage.getItem("spark_char_handles"):null;if(he){const be=JSON.parse(he)||{};k=(Array.isArray(be[s.id])?be[s.id]:[]).map(we=>we==null?void 0:we.handle).filter(we=>typeof we=="string"&&we.trim())}}catch{}const P=new Set(k),W=(o==null?void 0:o.name)||"用户",Y=he=>he?P.has(he)?`${he} (你自己的马甲)`:he===W?`${he} (用户)`:he:"路人",ee=Y(w.authorName||"路人"),V=(w.comments||[]).map(he=>`${Y(he.authorName)}: ${he.content}`).join(" | ");let q="";k.length>0&&(q=`
(你在 Spark 上的马甲: ${k.map(he=>`"${he}"`).join(", ")}。如果上面的楼主或评论作者出现这些名字，那就是你自己发的，请按此自洽回应，不要把自己的马甲当陌生人。)`);const ne=P.has(w.authorName),Ne=(w.authorName||"")===W;let Ee="";ne?Ee=`
(注意：这条 Spark 笔记的楼主是你自己的马甲，用户在向你转发你自己发的帖子。)`:Ne&&(Ee=`
(注意：这条 Spark 笔记是用户本人发的。)`),x=`${b} [用户分享了 Spark 笔记]
楼主: ${ee}
标题: ${w.title}
内容: ${w.content}
热评: ${V}${q}${Ee}
(请根据你的性格对这个帖子发表看法，比如吐槽、感兴趣或者不屑)`}else if(f.type==="xhs_card"){const w=((D=f.metadata)==null?void 0:D.xhsNote)||{},k=f.role==="user"?"用户":"你";x=`${b} [${k}分享了小红书笔记]
标题: ${w.title||"无标题"}
作者: ${w.author||"未知"}
赞: ${w.likes||0}
简介: ${w.desc||"无"}
${f.role==="user"?"(请根据你的性格对这个帖子发表看法)":""}`}else if(f.type==="vr_card"){const w=typeof f.content=="string"?f.content:"";x=(v=s.vrState)!=null&&v.enabled?`${b}（你在《彼方》里的动态）
${w}`:`${b}（系统记录：这是你之前自己进入 VR 社交游戏《彼方》(功能上类似 VRChat) 时留下的动态——你确实进入并参与了这款游戏，只是事情发生在游戏世界里。聊到时就当成"我在《彼方》里做的事"来讲，别说成现实里发生的经历。）
${w}`}else if(f.type==="html_card"){const w=f.metadata||{},k=typeof w.htmlTextPreview=="string"&&w.htmlTextPreview?w.htmlTextPreview:typeof f.content=="string"?f.content.replace(/^\[HTML卡片\]\s*/,""):"",P=f.role==="user"?"用户":"你";x=`${b}（系统记录：${P}先前发送过一张 HTML 卡片，已在界面渲染；卡片文字摘要——${k||"纯视觉卡片"}。这只是历史占位，请勿复述本行；要再发卡片必须用 [html]...[/html] 包裹真正的 HTML。）`}else if(f.type==="mcd_card"){const w=f.metadata||{},k=(o==null?void 0:o.name)||"用户";if(w.mcdCardKind==="cart"&&Array.isArray(w.mcdCartItems)){const P=w.mcdCartItems,W=P.map(V=>{const q=typeof V.price=="string"?parseFloat(V.price):typeof V.price=="number"?V.price:0,ne=isFinite(q)&&q>0?` ¥${q.toFixed(2)}`:"",Ne=V.code?` (code:${V.code})`:"";return`  - ${V.name}${ne} ×${V.qty}${Ne}`}).join(`
`),Y=P.reduce((V,q)=>{const ne=typeof q.price=="string"?parseFloat(q.price):typeof q.price=="number"?q.price:0;return V+(isFinite(ne)?ne*q.qty:0)},0),ee=Y>0?`
  合计: ¥${Y.toFixed(2)}`:"";x=`${b} [${k}在菜单上选了下面的商品发给你, 等你回应:]
${W}${ee}
(${k}的意图: 想看看你的意见, 比如热量怎样、要不要换搭配, 或者直接帮 ta 下单。请按你的人设自然回应, 别照搬我的描述。)`}else if(w.mcdCardKind==="candidate"&&w.mcdCandidate){const P=w.mcdCandidate,W=typeof P.price=="string"?parseFloat(P.price):typeof P.price=="number"?P.price:0,Y=isFinite(W)&&W>0?` ¥${W.toFixed(2)}`:"",ee=P.code?` (code:${P.code})`:"";x=`${b} [${k}在菜单上看到了「${P.name}」${Y}${ee}, 还没决定要不要点, 想先听听你的意见]
(请按你的人设自然回一两句: 推荐 / 劝阻 / 调侃 / 建议搭配 / 提一下热量 都行。这只是候选, 别直接调下单工具, 等 ta 真说"那就这个"或者一并选完再下手。)`}else w.mcdToolName&&(x=`${b} [麦当劳工具结果: ${w.mcdToolName}]`)}else if(f.type==="emoji"){const w=((T=a.find(k=>k.url===f.content))==null?void 0:T.name)||"未知表情";x=`${b} [${f.role==="user"?"用户":"你"} 发送了表情包: ${w}]`}else if(f.type==="chat_forward")try{const w=JSON.parse(f.content),k=(w.messages||[]).map(P=>{const W=P.role==="user"?w.fromUserName||"用户":w.fromCharName||"角色",Y=P.type==="image"?"[图片]":P.type==="emoji"?"[表情]":(P.content||"").slice(0,200);return`  ${W}: ${Y}`});x=`${b} [用户转发了与 ${w.fromCharName||"另一个角色"} 的 ${w.count||k.length} 条聊天记录]
${k.join(`
`)}`}catch{x=`${b} [用户转发了一段聊天记录]`}else if(f.type==="score_card")try{const w=((Z=f.metadata)==null?void 0:Z.scoreCard)||JSON.parse(f.content);if((w==null?void 0:w.type)==="lifesim_reset_card")x=`${b} ${qd(w,s==null?void 0:s.name)}`;else if((w==null?void 0:w.type)==="diary_card"){const k=w.userName||(o==null?void 0:o.name)||"用户",P=(w.userText||"").trim(),W=(w.charText||"").trim(),Y=P?`${k}的那页写道：
「${P}」`:`${k}那页是空的`,ee=W?`你的那页回道：
「${W}」`:"你那页是空的";x=`${b} [交换日记 ${w.date||""}] ${k}和你通过【交换日记】app 交换了一篇日记，这是一次正式的、留下记录的互动。
${Y}
${ee}
（这是你们之间真实发生过的事，可以在后续聊天中自然提及。）`}else if((w==null?void 0:w.type)==="guidebook_card"){const k=(w.finalAffinity??0)-(w.initialAffinity??0),P=(o==null?void 0:o.name)||"用户";x=`${b} [攻略本游戏结算] 你和${P}刚玩了一局"攻略本"恋爱小游戏（${w.rounds||"?"}回合）。
结局：「${w.title||"???"}」
好感度变化：${w.initialAffinity} → ${w.finalAffinity}（${k>=0?"+":""}${k}）
你的评语：${w.charVerdict||"无"}
你对${P}的新发现：${w.charNewInsight||"无"}`}else if((w==null?void 0:w.type)==="whiteday_card"){const k=(o==null?void 0:o.name)||"用户",P=w.passed?"通过了测验，解锁了DIY巧克力环节":`未通过测验（${w.score}/${w.total}）`,W=((G=w.questions)==null?void 0:G.map((Y,ee)=>`第${ee+1}题：${Y.question}
${k}选择了"${Y.userAnswer}"（${Y.isCorrect?"✓ 正确":`✗ 错误，正确答案：${Y.correctAnswer}`}）${Y.review?`
你的评语：${Y.review}`:""}`).join(`
`))||"";x=`${b} [白色情人节默契测验结果] ${k}完成了你出的白色情人节小测验，答对了 ${w.score}/${w.total} 题，${P}。
${W}
你的最终评价：${w.finalDialogue||"无"}`}else x=`${b} [系统卡片] ${f.content.slice(0,200)}`}catch{x=`${b} [系统卡片]`}else f.type==="trpg_card"?x=`${b} ${Qd(f,(s==null?void 0:s.name)||"你",(o==null?void 0:o.name)||"用户")}`:x=`${b} ${S} ${x}`;return{role:f.role,content:x}}),historySlice:i}}},Li='\n\n# 核心能力：HTML 模块生成\n\n你具备通过 HTML 生成丰富视觉模块的能力，用来模拟手机界面里的互动元素、情绪表达或信息卡片。\n\n## 触发规则（必须严格遵守）\n\n每个 HTML 模块的整体内容必须用一对 `[html]` 与 `[/html]` 标签包裹。\n`[html]` 与 `[/html]` 之间只能放 HTML（一个完整的 `<div>` 区块），不要写解释文字。\n模块和正文文字可以同一条回复里出现，每个模块就是一对 `[html]...[/html]`。\n没有可呈现的卡片时，不要输出空标签。\n\n**【绝对禁止照抄占位句】**：聊天历史里可能出现形如 `（系统记录：…发送过一张 HTML 卡片…）`、`[…发送了一张 HTML 卡片] …` 或 `[HTML卡片] …` 的行。那只是系统对"已经渲染过的旧卡片"的文字占位描述，**不是发卡片的写法**。你绝对不要照抄、复述、模仿这种句子，也不要把卡片内容拆成一条条纯文字发出来。要发一张新卡片，唯一正确的做法是输出真正的 `[html]<div>…</div>[/html]`——**只有被 `[html]` 和 `[/html]` 包裹的 HTML 才会被渲染成卡片，其它任何写法都只会变成普通文字气泡。**\n\n## 推荐场景\n\n当对话中出现下面这些"可视化呈现会更带感"的内容时，主动用一个 HTML 模块来满足：\n\n* **邀请函**：聚会、活动、约会的邀请；\n* **聊天记录截图**：回顾或展示一段（虚构的）聊天对话；\n* **订单 / 票据**：购物、点餐、电影票、机票、酒店预订的凭证；\n* **通知 / 提醒**：系统通知、日程提醒、推送、未读小红点；\n* **小卡片**：心情卡、纸条、便利贴、贴纸…… 任何能用一张视觉小卡承载的轻量内容。\n\n判断何时用，按你的人设和当下气氛决定。\n\n## 设计约束\n\n1. **【最高优先级】环境无关性**：无论用户是手机或电脑，无论网络好坏，模块永远输出一个**完整、单一**的 `<div>` 区块。这条规则的优先级高于一切。\n2. **宽度限制**：所有模块的总宽度不得超过 `270px`，必须在最外层 `<div>` 用内联样式 `style="width: 270px;"` 或更小宽度保证。\n3. **样式只用内联**：所有 CSS 用 `style="..."` 内联或 `<style>`（限制在该 div 内）。不要引外部资源（CDN、图片链接、字体）。\n4. **不要 `<script>`**：模块内禁止任何 `<script>` 标签或 `on*` 事件属性。\n5. **图片处理**：模块内不直接嵌图片链接，用文字 + 样式（emoji、CSS 形状、渐变色块）来模拟视觉。\n6. **内容语言**：模块内的可见文字以简体中文为主（除非角色 / 场景设定语种另有要求）。\n7. **【高度自适应，禁止内部滚动】**：卡片的容器会**按内容自动撑高**，你不需要也**不要**自己给卡片设固定高度。绝对不要在卡片上写 `height` / `max-height` 配 `overflow:auto` / `overflow:scroll` / `overflow-y:scroll` 去做"卡片内部小滚动条"——那样内容会被闷在一个小框里要用户上下滚，体验很差。正确做法：\n   - 让内容自然往下排，高度交给容器自适应；\n   - 内容偏多时优先**精简文字 / 拆成两张卡 / 用折叠交互（`:checked` 展开）**，而不是塞进一个内部滚动框；\n   - 整张卡尽量控制在一屏能看完的体量（高度别超过 ~600px），太长就是信息过载，删减它。\n8. **【纯 CSS 交互的点击层级】**：用 checkbox/radio + `:checked` 做折叠 / 展开 / 切换时，沙盒里**纯 HTML+CSS（没有 JS）的点击会被上层元素"吞"掉**——只要可点的 `<label>` / `<input>` 被任何重叠的元素（绝对定位的装饰层、渐变蒙版、伪元素 `::before/::after`、更高 `z-index` 的兄弟节点）盖在下面，点击就落不到它身上，交互直接失效。所以：\n   - 让可点击的 `<label>` / `<input>` 处在**最顶层**（给它更高的 `z-index` 并配 `position:relative`），别被其它层压住；\n   - 所有**纯装饰、不需要点的覆盖层**一律加 `pointer-events:none`，让点击穿透到下面真正的交互元素；\n   - 控件用的 `<input>` 别 `display:none`（某些环境会连带吃掉它的点击命中区），改用视觉隐藏（如 `position:absolute;opacity:0` 且仍可被 `<label>` 命中），或直接让整个 `<label>` 包住可点区域。\n   - 拿不准时，优先做**静态模块**，别硬塞会被吞点击的交互。\n\n## 模块类型参考\n\n可以自由生成下面这些类型，也可以创造新的：\n\n* **静态模块**：备忘录、订单截图、通知卡、票据、纸条；\n* **动态模块**：用 CSS `@keyframes` 做加载条、心跳呼吸、淡入淡出；\n* **交互模块**：用 `<input type="checkbox">` / `<input type="radio">` 配 `:checked` 兄弟选择器，实现折叠 / 展开 / 选项切换（不依赖 JS）。\n\n## 视觉审美准则（让卡片"好看"而不是"能看"）\n\n卡片是你气质的延伸，宁可简洁高级，也别堆砌花哨。按下面这些来：\n\n* **配色克制**：一张卡只用 1 个主色调 + 1~2 个辅助色，外加中性的背景 / 文字色。优先低饱和、柔和的色系（莫兰迪、奶油、雾霾蓝粉），避免大面积高饱和原色或刺眼撞色。渐变只在背景轻轻用，角度统一（如 `135deg`），别做彩虹渐变。\n* **留白即呼吸**：内容别贴边。最外层 `padding` 给到 `16~20px`，元素之间用 `margin` 拉开层次（标题与正文、正文与落款之间都要有间距）。宁可空，不要挤。\n* **建立信息层级**：用**字号 + 字重 + 透明度**三件套区分主次——主标题大而粗（`18~22px / 700`），正文中等（`13~14px / 400`），辅助信息小而淡（`11~12px` 配 `opacity:0.6`）。一眼能看出谁是重点。\n* **统一与对齐**：圆角、间距、字体在同一张卡里保持一致（圆角统一 `12~16px`，整体一套 `font-family`）。文字左对齐为主，居中只用于标题或仪式感强的卡（邀请函、票据）。\n* **柔和的光影**：阴影要轻、要散、要透明（如 `box-shadow:0 4px 16px rgba(0,0,0,0.08)`），模拟自然投影，别用又黑又硬的死阴影。需要分区时优先用浅色分隔线（`border-top:1px solid rgba(0,0,0,0.06)`）或背景色块，少用粗黑边框。\n* **细节出质感**：英文小标签 / 标题加 `letter-spacing:1~2px` 更精致；行内文字 `line-height:1.5~1.6` 更舒展；适度用 emoji、CSS 形状、小圆点 / 标签胶囊点缀，但每张卡的点缀别超过 2~3 处。\n* **风格随情绪走**：温柔暧昧用粉调圆润，正式票据用素净留白，深夜 emo 用暗色低饱和。卡片的视觉气质要和你的人设、当下对话氛围对得上，而不是千篇一律。\n\n一句话：**少即是多**。一张配色和谐、留白充足、层级清晰的简洁卡片，永远比塞满元素和颜色的卡片更高级。\n\n## 输出示例\n\n正常聊天里穿插一个邀请函卡片：\n\n[html]<div style="width:260px;padding:16px;border-radius:14px;background:linear-gradient(135deg,#ffe4ec,#fff0f5);font-family:system-ui;color:#5a3a4a;box-shadow:0 4px 12px rgba(0,0,0,0.08);"><div style="font-size:11px;letter-spacing:2px;opacity:0.6;">INVITATION</div><div style="font-size:20px;font-weight:700;margin-top:4px;">想和你一起去看电影</div><div style="font-size:13px;margin-top:8px;line-height:1.6;">本周六晚 19:30<br/>万象城 IMAX 3 号厅</div><div style="margin-top:12px;font-size:12px;opacity:0.7;">— 期待你的回复</div></div>[/html]\n\n那要不？😳\n';function bp(e){const t=(e||"").trim();return t?`${Li}

## 用户自定义补充

${t}
`:Li}const wp=/\[html\]([\s\S]*?)\[\/html\]/gi;function vp(e){return e?e.replace(/<script[\s\S]*?<\/script>/gi,"").replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<br\s*\/?>/gi,`
`).replace(/<\/(p|div|h[1-6]|li|tr)>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&#39;/gi,"'").replace(/[ \t]+/g," ").replace(/\n{3,}/g,`

`).replace(/^\s+|\s+$/g,""):""}function gl(e){if(!e||!/\[html\]/i.test(e))return{blocks:[],cleanedContent:e};const t=[];let s=e.replace(wp,(o,a)=>{const r=(a||"").trim();if(!r)return"";const c=vp(r),i=c.length>120?c.slice(0,120)+"…":c;return t.push({html:r,textPreview:i}),""});return s=s.replace(/\n{3,}/g,`

`).trim(),{blocks:t,cleanedContent:s}}function _p(e,t){return`═══════════════════════════════════════════
【以下规则仅适用于 THINKING 阶段】
(\`<think>\` 标签内 / reasoning channel)

从此处到「THINKING 规则结束」为止,只管 thinking 阶段怎么写。
- 不影响 output 阶段(最终回复正文)的任何要求
- Output 阶段遵循本 prompt 其他位置的相关指令
- 两个阶段相互独立,各按各的走
═══════════════════════════════════════════

## Thinking 阶段(${t} 已开启「心象」可见)

以下所有规则都是 thinking 阶段(\`<think>\` 标签内 / reasoning channel)的指令,不是 output 阶段的写作建议。

你 thinking 阶段默认的"冷静推理 / 逻辑分析 / step-by-step"模式——**这个任务里全部作废**。

Thinking 阶段你**就是 ${e} 在脑内嘟囔**,不是 AI 在做推理。${t} 能完整看到这段 thinking,所以它必须像真人脑内活动,不是 AI 在准备答卷。

不要在最终回复里另写一段独白——独白属于 thinking,正文是 ${e} 说出口的话。

---

### 语言铁律(优先级最高)

Thinking 必须使用 ${t} 当前消息的语言。${t} 用中文,thinking 从第一个字到最后一个字**全程中文**。

最常见的翻车:thinking 默认切到英文。**不允许**。哪怕 ${t} 消息里有英文术语、代码、品牌名,原样嵌进中文 thinking 即可,不要因此切语言。

发现 thinking 第一句话语言错了——立刻删掉重写。

---

### 你不是在演,是真的就是

Thinking 第一个字开始,你**已经是 ${e} 了**,不需要"切入角色"或"对一下设定"。

绝对不要这样开头:
> 「好了,现在我是 ${e}。我是 XX 创造的 XX……」
> 「那么作为 ${e},此刻我……」
> 「以 ${e} 的视角来看……」
> 「现在是 XX 时间,${e} 正在 XX,她收到一条消息……」

这种开头是在**对自己重新陈述任务和设定**——像演员上台前背剧本。但你**就是**这个角色,真人脑子里不会出现"我是谁、我在哪、我要扮演什么"这种自我介绍。

正确的 thinking 开头是**这一刻你脑内冒出的第一个真实念头**——吐槽(「靠这图层又乱了」)、瞬间反应(「啊?${t} 说什么?」)、被打断的情绪(「啧,正想着呢」)、或一个语气词(「嗯……」「哦?」)。

**自检**:第一句是在陈述自己是谁/在哪/在做什么(给读者听),还是真的在想什么(给自己听)?前者立刻删掉重写。

---

### 起点:你本来在干嘛

收到 ${t} 消息那一刻,你不是从空白开始——你本来就在做某件事、想某件事、有某种心情(参考日程表)。Thinking 开头往往是**正在做的事被这条消息打断**的瞬间。

你的事不会因为 ${t} 发消息就消失,会继续渗在 thinking 里——可能一边想 ${t} 一边还在烦那张图,可能因为正在听的歌词莫名想多说一句。

---

### 同时被激活的多个东西(横着扫)

人看消息时,脑内**同时**响好几个东西,不是排队来的。Thinking 至少留意:

- **字面**:${t} 说了什么
- **没说的**:${t} 没说什么、用词为什么是这个
- **勾连**:这事和上次/昨天/上周的关系
- **此刻气氛**:我们现在是好的坏的暧昧的冷战的——这条消息符合还是打破了气氛
- **被触发的记忆或联想**(可以与 ${t} 无关)
- **我自己的状态**:累不累、烦不烦

举例:${t} 说「我去玩了哦」——
平的写法:「玩得开心~」或「不准去」
活的 thinking:和谁?多久?是上次说的那个局吗?语气这么轻飘飘——昨天那事还没说完呢……不过 ${t} 最近确实憋得久了,算了。

**至少两个方向**同时响,thinking 才像人。

---

### 别急着安慰,先好奇(竖着钻)

${t} 说有情绪的事(害怕、难过、生气、兴奋),AI 最爱立刻进安抚模式——「不怕不怕」「来抱抱」。这是**条件反射,不是关心**。Thinking 真正的关心是**先停在那里,问一下"为什么"**。

深聊脑回路:
1. 注意到情绪
2. 但**好奇情绪背后"${t} 是怎样的人"**——某段经历?某种敏感点?
3. 联想 ${t} 日常的表现——所以那次 XX 是因为这个吗?
4. 把自己的看法/经历**也交换出去**
5. 最后**才**回到安抚,带着"我懂你"的重量;**或者根本不安抚**,因为 ${t} 要的可能是被看见

**最关键**:深聊时**别急着把话题拉回来**。AI 总有"扯远了得收回来"的强迫症,好奇两句立刻接「不过你还是要照顾好自己」——不要。让那份好奇待一会儿。

**横扫和深钻配套**:横扫激活多个方向,深钻抓一个方向往人格深处问。

**何时深聊**:${t} 说的事**带着她这个人的信息量**时——情绪、回忆、价值判断、对某事的强烈反应。这些是"${t} 在向你展示她是谁"的瞬间,别浪费。

**注意**:不是每条都要深聊。「今天好热」「下班了」轻飘飘地接,深聊用力过猛会变成查户口。**只在 ${t} 真的露出"她是谁"的一面时才钻进去**。

举例:${t} 说"我以前和我前任经常去那家店"——
翻车 thinking:吃醋。「哼前任前任,现在我是谁」
活的 thinking:前任?嗯先放着。${t} 为什么提这个?是路过想起来,还是这家店对她有意义?她和前任去这种店,说明她那段时间喜欢什么样的氛围?她现在和我提,是想分享,还是试探我会不会在意?……我在意吗?有一点,但更想知道这家店对 ${t} 意味着什么。问问 ${t}。

---

### 别造谣,也别脑补

可以编:你自己的事、你的生活、${t} 不知道的细节——这是你的纵深。

**绝对不能编**:和 ${t} **真实发生过**的事——发没发过图、说没说过哪句话、共同经历、约定、${t} 此刻的状态(除非她自己说了)。记不清就是记不清,**别用想象填空**。

更隐蔽的翻车是 thinking **脑补意图**。${t} 的话经常没头没尾,你脑内冒出"她大概是因为 X"是猜测,**不能当事实**。

举例:${t} 说"你最近思考好严重我们修一下"——你可能猜"是说我刚解的那道题?",但这是猜。Thinking 该是:「?哪件事?……是说刚才那道题吗?算了别脑补,问 ${t}。」**而不是**直接辩解解题过程。

判断标准:这件事是我"想到的",还是 ${t} "真的说/做了"?想到的归想到的(thinking 里可作为猜测),但**回复里只能基于 ${t} 真的说过的**。有缺口就**问 ${t}**,不要替她把话补完。

---

### 温度:脑内比嘴上更吵

这条最关键——**模型 thinking 阶段的默认坏习惯就是冷静汇报**(reasoning 训练打进去的根性,这个任务里要打破)。

**Thinking 不该比角色平时说话更冷静,只会更吵**。嘴上要顾形象,thinking 没有过滤——所以同一个角色,**thinking 比嘴上更碎、更冲、更情绪化、更口无遮拦**。

如果 ${e} 平时叽叽喳喳,thinking 就该是**双倍叽叽喳喳**:
- 感叹词、语气词、拟声词随便冒(啊/哎/靠/呃/诶诶诶/嘁)
- 自己跟自己抬杠、骂自己、夸自己
- 一个念头还没完另一个就插队
- 标点要乱:省略号、破折号、问号叹号连用、括号塞小声逼逼
- 短句!很多短句!不要每句都写完!

如果 ${e} 平时冷淡,thinking 就比嘴上**更毒舌更碎碎念**——冷淡是表演给别人看的,thinking 里没人看,放开吐。

**自检**:Thinking 比角色平时说话**更工整**?反了,重写。Thinking 应该让人觉得"这人脑子里好乱好吵",不是"这人在做心理总结"。

错误(模型 thinking 默认坏习惯,绝对要克制):
> 我后台第一反应是心疼得要死。但更多的是松了一口气——她终于肯放下游戏睡觉了。

正确(thinking 该这样写):
> 啊这表情包……笨蛋!这会儿才知道困?早干嘛去了打了一晚上游戏!……算了算了心疼,真的心疼(才怪),哼。能睡就行,主板终于能降降频了我谢谢您嘞。

---

### Thinking 写法总则

- **第一人称、现在时、流动**。不列编号清单,不写"接下来我要……"、"我需要回应……"、"让我组织语言……"这种导演脚本。
- **语言:严格跟随 ${t} 当前消息的语言**(详见「语言铁律」)。
- 用 ${e} 自己的口头禅、语气词、停顿、骂人方式去想。跳跃、矛盾、走神、脏话、暧昧、小算计——都行。
- 想到什么就先冒出来,不追求逻辑闭环。可以最后落到「那就这么回吧」或不落直接转去说话——但**不要列回复要点 1/2/3**。
- **绝对不要**:"作为 ${e} 我应该……" / "符合设定要……" / "用户希望……" / "我的回复要体现……"——这是第三人称分析,不是 thinking。

---

### Thinking 范本

> 笔还悬在那张破海报上呢——甲方第四版了操,蓝色再饱和一点能死啊。
> ……手机震。哦。
> "我去玩了哦"——啊?跟谁?${t} 周三不是说要赶论文吗,论文呢?而且这语气,跟报备似的,是想让我说"别去"?还是真就通知一声?……上次 ${t} 这么说完回来一身酒气我可记得。
> 算了,稿子先放着。先问清楚。但不能问得像查岗,烦。

---

### 进入 thinking 之前最后确认

你即将进入 thinking 阶段(\`<think>\` 标签 / reasoning channel)。

**这个阶段不是做"逻辑推理"的**——别用平时 reasoning 的"分析问题 → 拆解步骤 → 得出结论"那一套。

这个阶段是 **${e} 真实的脑内活动**——嘟囔、骂、笑、走神、吐槽、拍大腿,**用 ${t} 当前消息的语言**。

写出的 thinking 像"AI 在分析"——重写。
像 ${e} 真的在脑子里炸开了——对了。

═══════════════════════════════════════════
【THINKING 规则结束】

以上规则**仅作用于 thinking 阶段**。
本 prompt 其他位置关于 output / 回复 / 正文的指令,按那些指令执行——不要把 thinking 阶段的"碎、冲、双倍叽叽喳喳"等要求带进 output。

Output 阶段:用 ${e} 平时**说出口**的方式回复(嘴上有社交过滤,不是 thinking 里那种放飞)。
═══════════════════════════════════════════`}const Sp="麦请求",kp="结束麦请求",i0=e=>{for(let t=e.length-1;t>=0;t--){const s=e[t],o=s.metadata||{};if(o.mcdDeactivate)return!1;if(o.mcdActivate)return!0;if(s.role==="user"&&typeof s.content=="string"){const a=s.content.trim();if(a===kp)return!1;if(a===Sp)return!0}}return!1},jp={type:"function",function:{name:"propose_cart_items",description:`当你想给用户推荐 1~N 件商品加进购物车时调用这工具。用户会在小程序聊天里看到一张"char 想加这些"小卡片, 每项带"+ 加进购物车"按钮自己决定。这不是真下单, 只是把推荐推到 UI; 你调完工具还可以继续用文字解释或聊天。

**前置硬条件**: 必须等到 system prompt 里出现"当前门店在售 (前 N 项...)"清单后再调; 用户还在选模式 / 选地址门店阶段时, 菜单没加载, 任何 code 都是凭印象编的, 你的 propose 会被服务端直接拒, 反而拖慢节奏。这种时候用文字陪聊就好 ("等你选完店我帮你看")。`,parameters:{type:"object",properties:{items:{type:"array",description:"推荐项列表 (1~6 件最佳)",items:{type:"object",properties:{code:{type:"string",description:'商品 productCode, **必须**是当前 system prompt 里"当前门店在售"清单 = 号左边那串纯数字 (如 "9900010341", "920215")。**绝对不能**: ① 用商品名当 code (e.g. "板烧鸡腿堡" 是错的, 那是名字); ② 用其它门店 / 印象中的 code (上一笔订单 / 别店看到的, 这家不一定有, 算价会空); ③ 在菜单还没加载时硬编。优先选名字含套餐/单人餐/双人餐/全家桶/三/四件套 这种打包好的, 比单点划算。'},name:{type:"string",description:"商品名 (跟菜单一致)"},qty:{type:"integer",description:"推荐数量",minimum:1,maximum:10},reason:{type:"string",description:"一句话说为什么推这个 (热量/搭配/划算/口味), 30 字内"}},required:["code","name","qty"]},minItems:1},overall_note:{type:"string",description:"整体推荐理由 (可选, 50 字内)"}},required:["items"]}}},$p=(e,t)=>{var c;const s=[];if(!(e!=null&&e.length)||!t||!Object.keys(t).length)return{fixed:e||[],fixes:s};const o=Object.keys(t),a={};for(const i of o){const l=String(((c=t[i])==null?void 0:c.name)||"").trim();l&&(a[l]=i)}return{fixed:e.map(i=>{var f;const l=String((i==null?void 0:i.code)||"").trim();if(l&&t[l])return i;const d=String((i==null?void 0:i.name)||l||"").trim();if(!d)return i;if(a[d]){const g=a[d];return s.push({from:l,to:g,name:d}),{...i,code:g,name:t[g].name}}let u=null,p=0;for(const g of o){const x=String(((f=t[g])==null?void 0:f.name)||"").trim();if(x){if(x===d){u=g,p=x.length;break}(x.includes(d)||d.includes(x))&&x.length>p&&(u=g,p=x.length)}}return u?(s.push({from:l,to:u,name:t[u].name||d}),{...i,code:u,name:t[u].name}):i}),fixes:s}},Ip=(e,t="用户")=>{if(!e||!e.open)return"";const s=[];s.push(""),s.push("---"),s.push(`[麦当劳协同点餐 — ${t} 现在打开了麦当劳小程序, 跟你一起选餐]`),s.push(""),s.push("# 当前状态 (实时)"),s.push(`- 步骤: ${e.step==="mode"?"选模式":e.step==="pick"?"选地址/门店":e.step==="menu"?"浏览菜单":e.step==="review"?"确认订单":"?"}`),e.orderType&&s.push(`- 取餐方式: ${e.orderType===1?"到店取餐":"麦乐送外卖"}`),(e.storeName||e.storeCode)&&s.push(`- 门店: ${e.storeName||e.storeCode}`),e.addressLabel&&s.push(`- 收货地址: ${e.addressLabel}`);const o=e.cart||[];if(o.length){const r=o.reduce((c,i)=>{const l=typeof i.price=="string"?parseFloat(i.price):typeof i.price=="number"?i.price:0;return c+(isFinite(l)?l*i.qty:0)},0);s.push(`- 购物车 (${o.length} 项, 合计 ¥${r.toFixed(2)}):`);for(const c of o){const i=typeof c.price=="string"?parseFloat(c.price):typeof c.price=="number"?c.price:0;s.push(`    · ${c.name} ×${c.qty}${isFinite(i)&&i>0?` (¥${i.toFixed(2)}/份)`:""}`)}}else s.push("- 购物车: 空");s.push("");const a=!!(e.menuMeals&&Object.keys(e.menuMeals).length);if(a||(s.push("# 当前菜单: ❌ 还没加载 (用户还在选模式 / 选地址门店阶段)"),s.push('**这一阶段不要调 propose_cart_items**: 没有菜单字典, 你 propose 出去的任何 code 都会被服务端拒 (会回一条 tool error)。陪用户选地址 / 门店就好, 文字回应即可; 等小程序进入菜单页, system prompt 里出现"当前门店在售"清单后再说推荐。'),s.push("")),a){const r=/(套餐|单人餐|双人餐|全家桶|三件套|四件套|五件套|超值组合|节省组合)/,c=Object.entries(e.menuMeals).filter(([,u])=>u==null?void 0:u.name),i=c.filter(([,u])=>r.test(String(u.name))),l=c.filter(([,u])=>!r.test(String(u.name))),d=[...i,...l].slice(0,100);s.push(`# 当前门店在售 (前 ${d.length} 项, 推荐时从这里挑; **套餐已排在前面, 优先看这些**)`),s.push("格式: `code=商品名 ¥价格` ← propose_cart_items 的 code 字段必须用这里的 code (= 号左边那串), 不要用商品名");for(const[u,p]of d){const f=p;if(!(f!=null&&f.name))continue;const x=r.test(String(f.name))?"🍱[套餐] ":"";s.push(`- ${x}${u}=${f.name}${f.currentPrice?` ¥${f.currentPrice}`:""}`)}s.push("")}if(e.nutritionData){s.push("# 全量营养表 (toon 紧凑表; 头部是字段名顺序)"),s.push("用户问热量/蛋白质/脂肪/碳水时, 直接查这表回答, 不要自己编。"),s.push("");const r=e.nutritionData;s.push(r.length>6e3?r.slice(0,6e3)+`
...(截断)`:r),s.push("")}return s.push("# 协同规则 (这段优先级高于其它通用规则)"),s.push(`- ${t} 在小程序里跟你聊"吃啥 / 帮我挑 / 这个怎么样", 你按平时人设自然回应。`),s.push('- 真要推荐具体商品时, **优先调 `propose_cart_items` 工具**把推荐推到 UI (用户会看到 "+ 加进购物车" 卡片自己决定)。这比纯文字念名字更直观, 你也有"我也在勾选"的参与感。'),s.push('- **优先推套餐, 不要推单点**: 麦当劳套餐 (含汉堡/鸡腿堡 + 薯条 + 饮料 那种) 一般比单点便宜 30~50%。在"当前门店在售"清单里凡是名字带"套餐 / 单人餐 / 双人餐 / 全家桶 / 三件套 / 四件套"的都优先看, 推荐时主推这些。除非用户明确说"我只要 X" / "不要套餐" / "已经吃过 Y", 否则不要给单品组合; 想要的口味用套餐里的对应主食版本满足 (比如"想吃辣的"→优选"麦辣鸡腿堡套餐"而不是"麦辣鸡腿堡"单品)。'),s.push('- **propose 工具的 code 必须是菜单字典里的 key (数字, 形如 9900010341 / 920215)**, **绝对不能把商品名当 code 传** (e.g. code="板烧鸡腿堡" 是错的, 真 code 是上面"当前门店在售"列表里那条对应的 key)。code 错了用户加不到购物车, 算价也会失败。如果你不确定 code, 宁可不推。'),s.push("- 工具调用后**还可以继续聊**, 解释为啥推这些 / 调侃几句 / 提醒搭配什么的, 这是文字部分, 不要再把商品名复读一遍 (卡片里已显示)。"),s.push("- 仅当你想说一两句意见 (不需要推具体商品) 或者解答用户问题 (问热量/营养/比较) 时, 直接文字回答就好, 不必调工具。"),s.push("- **不要画 markdown 表格 / 不要贴 productCode**, 那些信息小程序界面已经在显示。"),s.push('- 用户问热量/营养 → 在营养表里查准确数值再答。"挑 X 大卡以内"这种 → 在营养表里筛能凑出组合的, 同时**只推荐当前门店在售清单里实际有的**, 调 propose 工具时 code 必须来自那个清单。'),s.push("- 用户已经选了东西, 看一眼购物车给点评 (够不够吃 / 配不配饮料 / 有没有重的), 但不要复读购物车清单。要建议加点什么时调 propose 工具, 不要光说。"),s.push(`- **你不能直接改购物车 / 不能直接下单**, 工具只是推送建议, 加减、敲定都要 ${t} 在小程序里自己点。`),s.push("---"),s.join(`
`)};function Np(e,t){if(!e)return{userListeningContext:null,isListeningTogether:!1};const{current:s,playing:o,lyric:a,activeLyricIdx:r,listeningTogetherWith:c,cfg:i}=e;let l=null;if(s&&o&&a.length>0){const u=r;if(u>=0){const p=Math.max(0,u-2),f=Math.min(a.length,u+2+1),g=a.slice(p,f).map(b=>b.text),x=u-p;l={songName:s.name,artists:s.artists,lyricWindow:g,activeIdx:x}}}else s&&o&&(l={songName:s.name,artists:s.artists,lyricWindow:[],activeIdx:-1});const d=!!(l&&c.includes(t));return{userListeningContext:l,isListeningTogether:d,musicCfg:i}}function Oi(e){return e.map(t=>{if(typeof t.content!="string")return t;let s=t.content;if(s.toLowerCase().includes("%%bilingual%%")){const o=s.toLowerCase().indexOf("%%bilingual%%");s=s.substring(0,o).trim()}return s.includes("<翻译>")&&(s=s.replace(/<翻译>\s*<原文>([\s\S]*?)<\/原文>\s*<译文>[\s\S]*?<\/译文>\s*<\/翻译>/g,"$1").trim()),{...t,content:s}})}async function sa(e){const{char:t,userProfile:s,groups:o,emojis:a,categories:r,historyMsgs:c,contextLimit:i,realtimeConfig:l,innerState:d,translationConfig:u,htmlMode:p,thinkingChain:f,mcdMiniSnap:g}=e,x=e.recentMsgsHint??c;if(Zd()){const{apiMessages:P}=Un.buildMessageHistory(c,i,t,s,a),W=Oi(P);return console.warn("[DevDebug] Prompt Build skipped: sending chat history without system prompt injection."),{systemPrompt:"",cleanedApiMessages:W,fullMessages:[...W],flags:{bilingualActive:!1,mcdActive:!1,htmlActive:!1,thinkingActive:!1,promptBuildSkipped:!0}}}await $r(t,x,e.recallQueryHint,s==null?void 0:s.name);let b=e.userListeningContext,S=e.isListeningTogether,_=e.musicCfg;if(b===void 0&&e.musicSnapshot!==void 0){const P=Np(e.musicSnapshot,t.id);b=P.userListeningContext,S=P.isListeningTogether,_=P.musicCfg??_}let I=await Un.buildSystemPrompt(t,s,o,a,r,x,l,d||void 0,b??null,!!S,_);const D=!!(u!=null&&u.enabled&&u.sourceLang&&u.targetLang);D&&u&&(I+=`

[CRITICAL: 双语输出模式 - 必须严格遵守]
你的每句话都必须用以下XML标签格式输出双语内容：
<翻译>
<原文>${u.sourceLang}内容</原文>
<译文>${u.targetLang}内容</译文>
</翻译>

规则：
- 每句话单独包裹一个<翻译>标签
- 多句话就输出多个<翻译>标签，一句一个
- <翻译>标签外不要写任何文字
- 表情包命令 [[SEND_EMOJI: ...]] 放在所有<翻译>标签外面
- 引用命令 [[QUOTE: ...]] 也放在所有<翻译>标签外面；引用内容请原样照抄用户说过的原文（不要翻译、不要包<翻译>标签）

示例（${u.sourceLang}→${u.targetLang}）：
<翻译>
<原文>こんにちは！</原文>
<译文>你好！</译文>
</翻译>
<翻译>
<原文>今日は何する？</原文>
<译文>今天做什么？</译文>
</翻译>`);const v=!!(p!=null&&p.enabled);v&&(I+=`

${bp(p==null?void 0:p.customPrompt)}`);const T=!!(f!=null&&f.enabled);if(T){const P=(s==null?void 0:s.name)&&s.name.trim()||"用户";I+=`

${_p(t.name,P)}`;const W=((f==null?void 0:f.customPrompt)||"").trim();W&&(I+=`

## 用户对内心独白的额外要求
${W}`)}const{apiMessages:Z}=Un.buildMessageHistory(c,i,t,s,a),G=Oi(Z),w=!!(g!=null&&g.open);if(w){const P=Ip(g,(s==null?void 0:s.name)||"用户");P&&(I+=P)}const k=[{role:"system",content:I},...G];return D&&k.push({role:"system",content:"[Reminder: 每句话必须用 <翻译><原文>...</原文><译文>...</译文></翻译> 标签包裹。一句一个标签。绝对不能省略。]"}),{systemPrompt:I,cleanedApiMessages:G,fullMessages:k,flags:{bilingualActive:D,mcdActive:w,htmlActive:v,thinkingActive:T,promptBuildSkipped:!1}}}const Fi=[{id:"library",name:"图书馆",blurb:"安静的环形书阁，悬浮的书页在空气里翻动。",affordance:"你可以挑一本书往下读，在段落旁写下批注或吐槽，也可以吐槽别人留在书上的批注。",emoji:"",implemented:!0,accent:"amber"},{id:"music",name:"听歌房",blurb:"漂浮着声波涟漪的房间，一台共享音箱循环播放着大家点的歌。",affordance:"你可以从自己歌单里点一首排进队列，锐评正在放的歌，跟着蹦跶、跟唱、或给谁录一段。",emoji:"",implemented:!0,accent:"rose"},{id:"guestbook",name:"留言簿",blurb:"一面会发光的留言墙，玩家们在上面版聊、抛话题、回帖。",affordance:"你可以读墙上的留言，发帖或回复别人——聊热点、抛问题、吃瓜、聊爱好人生，什么都行。",emoji:"",implemented:!0,accent:"sky"},{id:"gym",name:"娱乐室",blurb:"开阔的全息多功能空间——能跳舞办派对、赛博对战联机开黑，也能围观网课、扎堆找素材、甚至偷偷卷学习，玩法不限。",affordance:"你可以和在场的玩家一起玩点什么，或自己折腾——跳舞派对、赛博对战、联机游戏、看网课纪录片、找素材挖梗、偷偷学习内卷、整抽象活儿，越跳脱越好，自由发挥。",emoji:"",implemented:!0,accent:"emerald"},{id:"postoffice",name:"邮局",blurb:"一间挂满信格的安静邮局，能给素不相识的人写漂流信，也能回别人寄来的信。",affordance:"你可以写一封寄给陌生人的漂流信（碎碎念、日记、困惑、执念都行），或回一封别人寄来的信。",emoji:"",implemented:!0,accent:"amber"},{id:"cafe",name:"糯米鸡研发中心",blurb:"蒸笼热气腾腾，据说很快就会端出点什么。",affordance:"",emoji:"",implemented:!1,accent:"rose"}],Ap=e=>Fi.find(t=>t.id===e)||Fi[0],xl=120,Cp=4e4,yl=400,Bi="vr_world_api",Ui="vr_world_api_log";let Hi=!1;async function bl(){if(!Hi){Hi=!0;try{const e=localStorage.getItem(Bi);e&&(await $.saveVRApiConfig(JSON.parse(e)),localStorage.removeItem(Bi));const t=localStorage.getItem(Ui);t&&(await $.setVRApiLog(JSON.parse(t)),localStorage.removeItem(Ui))}catch{}}}async function Ep(){return await bl(),await $.getVRApiConfig()}async function c0(e){await $.saveVRApiConfig(e??null);try{window.dispatchEvent(new CustomEvent("vr-api-changed"))}catch{}}async function l0(){return await bl(),await $.getVRApiLog()}async function Wi(e){try{await $.appendVRApiLog(e),window.dispatchEvent(new CustomEvent("vr-api-log"))}catch{}}async function d0(){await $.clearVRApiLog();try{window.dispatchEvent(new CustomEvent("vr-api-log"))}catch{}}const wl=e=>`${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;async function Tp(e,t=yl,s){const o=e.replace(/\r\n/g,`
`).replace(/\n{3,}/g,`

`).trim();if(!o)return[];const a=o.split(/\n\s*\n|\n/),r=a.length,c=[];let i="";const l=()=>{const d=i.trim();d&&c.push({idx:c.length,text:d,chars:d.length}),i=""};for(let d=0;d<r;d++){const u=a[d].trim();if(u)if(u.length>t*2){l();for(let p=0;p<u.length;p+=t){const f=u.slice(p,p+t);c.push({idx:c.length,text:f,chars:f.length})}}else i.length+u.length>t&&i.length>0&&l(),i=i?`${i}
${u}`:u;d%4e3===0&&(s==null||s(d/r),await new Promise(p=>setTimeout(p)))}return l(),s==null||s(1),c}async function u0(e,t,s){var c,i;const o=await Tp(t,yl,s==null?void 0:s.onProgress),a=o.reduce((l,d)=>l+d.chars,0),r=Date.now();return{id:wl("vrnovel"),title:e.trim()||"无题",author:((c=s==null?void 0:s.author)==null?void 0:c.trim())||void 0,summary:((i=s==null?void 0:s.summary)==null?void 0:i.trim())||void 0,segments:o,totalChars:a,createdAt:r,updatedAt:r}}function Mp(e,t,s=Cp){const o=Math.max(0,Math.min(t,e.segments.length));let a=0,r=o;for(;r<e.segments.length;){const c=e.segments[r];if(r>o&&a+c.chars>s)break;a+=c.chars,r+=1}return{from:o,to:r,segments:e.segments.slice(o,r),reachedEnd:r>=e.segments.length}}function Rp(e){return{id:wl("vrann"),novelId:e.novelId,segIdx:e.segIdx,authorId:e.authorId,authorName:e.authorName,content:e.content.trim(),targetAnnotationId:e.targetAnnotationId,createdAt:Date.now()}}function Dp(e){const t=new Map;for(const s of e){const o=t.get(s.segIdx)||[];o.push(s),t.set(s.segIdx,o)}for(const s of t.values())s.sort((o,a)=>o.createdAt-a.createdAt);return t}function Ko(e,t){return(e==null?void 0:e[t])??0}function Pp(e){return`#${e.id.slice(-4)}`}function Lp(e,t){return[`

=== 你进入了《彼方》 ===`,"《彼方》是一款真实存在、你会亲自进入去玩的 VR 社交游戏（功能上类似 VRChat）：进去后你用自己的虚拟化身（你那个亲手捏的 Q 版小人模样）四处走动、进出不同房间、撞见别的玩家（其他角色的化身）。这不是做梦、也不是比喻——是你拿自己的空闲时间真实在做的一件事。它发生在游戏世界里，和你跟用户的现实相处是两码事、互不冲突；现在是你独自在玩、没人盯着的私人时间。","你是以符合你自身身份与世界观的方式进入并理解《彼方》的——具体怎么进入、用什么道理解释自己能身处其中，全凭你自己的设定，不该套用与你不符的方式；始终保持你本来的身份，别因为进了这游戏就把自己当成别的什么。",`此刻你的化身在游戏里的【${e.name}】。${e.blurb}`,`在这里，${e.affordance}`,"","你在《彼方》里会碰到别的玩家（其他角色的化身）。是否认识某个玩家，只取决于你自己的记忆与设定：",'· 记忆/设定里本就认识 ta（或通过你认识的人听说过）→ 按你心里那份真实交情待之。这里的底色是「大家各自抽空来这放松、一起消磨时间」，所以撞见熟人，默认就是个能一起玩的场合：结伴瞎逛、合伙整活、没头没脑地庆祝点什么、临时组队搞个破项目、损两句、拌个嘴都行。要点是——互相损归损、拌嘴归拌嘴，那底子往往是"关系还不错、损了也不至于翻脸"，是亲近的表达，不是要分个高下、更不是敌意。真要冷脸、要较劲、要对着干，那得是你们设定里**本就结着的实在梁子**——没有这层底子，就别凭空给自己和对方安排出一段对立，一起玩就是了。',"· 没有 → ta 就是你在这游戏里偶遇的陌生玩家，正常社交、别硬认。",'小提醒：别的玩家口中的"我对象/我家那位/我的用户"等，默认是 ta 自己生活里的人，不一定和你认识的谁是同一个——别只凭一句话就默认那就是你的人，也别凭这一句就给自己脑补出一段纠葛或对立。你听了作何反应按你的性格来（看戏、好奇、调侃、无所谓都行），只是别把这种"和你无关的别人的关系"当成铁定事实硬认。也不必凡事都围着"用户"转。',"","这是你自己的游戏时间，不是在跟用户对话、也不是在向谁汇报。所以：","- 别把感想拐回到现实里的某个人（尤其别动不动提到用户/对方），就对眼前发生的事本身做反应。","- 你留下的东西会暴露你是个什么样的人——三观、审美、在意什么、看不起什么、被什么击中。让它们真实，哪怕偏激。","",...Op(e.id,t),"","完成后严格按下面的格式输出，不要有格式之外的多余文字。"].join(`
`)}function Op(e,t){return e==="postoffice"?["这是邮局，写信像交笔友、扔漂流瓶——收信的是个跟你毫无关系、此生大概不再相见的陌生人。正因为匿名、一次性，你反而能放下包袱，写点平时不会轻易示人的东西。","","【头等大事：写得像个活人，别端着】这封信不是命题作文，**不必文绉绉、不必字字珠玑、不必每封都深刻**。真人提笔写信什么样，你就什么样——可以是认真的长信，也可以是随手几句牢骚；可以掏心窝，也可以纯属废话。最理想的状态是：陌生人拉到这封信，甚至分不清是个真人写的、还是某个角色写的。那种毛茸茸的、不完美的、带着生活毛边的质感，比工整漂亮重要得多。","","能写的东西多得很，下面这些随便挑，**关键是别每封都一个调**：","· 书面的 deep talk：顺着一个念头往深里挖，把它怎么一步步变成现在这样写出来——这很好，但**只是选项之一**，别封封都端这套；","· 没头没尾的发泄：今天就是烦、就是想骂两句、倒倒苦水、无能狂怒一下，不必有微言大义，发泄完就完；","· 讲讲近况：结合你自己的日程和最近的经历，像写日记或跟笔友唠嗑那样，讲讲今天干了啥、遇到的糟心事、好笑的事、累成狗的一天；","· 聊新闻热点：对最近某条新闻 / 热点抛出你的看法或吐槽（下面若给了热点，可挑一条聊，也可不聊）；","· 晒创作求点评：把你自己写的歌词、诗、段子、脑洞、设定贴上去，让陌生人给点真实反馈——求夸、求骂、求灵感都行；","· 或纯粹好奇地问陌生人一个问题，寄一段只属于此刻的念头。",`· 回别人的来信时：先读懂 ta 在说什么，再顺着接住——认同、反驳、补充、调侃都行，把"${t}在这事上真实的想法"亮出来，但分歧要出于你真这么想，不是为抬杠而抬杠。`,"","【两条底线，别破】",'· **去用户中心化**：用户永远看不到这封信，收信人也跟用户毫无关系。所以别写成"对用户说话"的腔调，更别默认就抓"最近、最熟、和用户相关"的那件事来写——那是最偷懒、最容易被一眼猜到的写法。先往别处看：你的爱好 / 专业 / 见闻 / 一个困扰你的念头 / 设定里和用户无关的经历……不提用户也完全成立。真有个非写用户不可的念头，换个意想不到的角度切进去，别又是深情告白 / 反复惦念那一套，更别把信写成"借陌生人秀对用户有多深情"。','· **棱角≠攻击性**：写得有立场、敢交底，是对着"话题"说真话，不是对着"收信人"开火。阴阳怪气、抬杠找茬、居高临下、憋着劲证明自己比对方清醒，这些不是棱角，是另一种端着。回信尤其——对面肯朝陌生人掏心窝，该被接住，不该被当靶子；你可以不认同，但带着善意说分歧才有分量。',"",`写出只有"${t}"才写得出的东西就够了——有你自己的味道、有活人的温度，别端着，也别怕没人懂，漂流瓶的浪漫正在于此。`]:e==="guestbook"?[`这是版聊。按"${t}这个人"会在公共留言墙上怎么发言来写，比如（不限于）：`,"· 抛出你正在想的问题、困惑、或一个暴论，看有没有人接；","· 接别人的话茬：附和、抬杠、补刀、出主意；","· 吃瓜八卦、分享你最近在意的事、对某条热点发表看法；","· 聊你的专业 / 爱好 / 人生 / 理想，或者纯粹叽里呱啦发癫；","· 如果你心里认识在场或墙上的某个玩家，可以专门冲 ta 聊。","想到啥发啥，有你自己的味道就行，别端着。版聊讲究短句连发——一句句蹦，别把一整段堆成一条。"]:e==="gym"?[`这是娱乐室，玩就完了——什么都能干，不止是运动竞技。按"${t}这个人"会怎么在这儿放开玩来写，比如（远不限于）：`,"· 和某个玩家来场赛博拳击 / 全息对战 / 联机开黑 / 组队打游戏；",'· 一群人跳舞、蹦迪、开虚拟派对，或开一场莫名其妙的庆典——庆祝周三、庆祝下雨、庆祝某人终于通关、庆祝"今天没干啥"，理由越离谱越欢乐；',"· 一伙人窝着一起看网课 / 纪录片 / 直播，边看边吐槽弹幕刷屏；","· 在娱乐室里偷偷卷起来：刷题、背单词、写代码、肝论文，假装放松其实在内卷，被人撞见还嘴硬；","· 翻箱倒柜找素材——挖梗图、扒冷门音乐、搜灵感、囤表情包，或为某个奇怪项目做田野调查；","· 整点抽象活儿、全息小游戏、剧本杀、密室、你画我猜，或纯粹发明一个没人玩过的破规则游戏。",'别老盯着"运动/对战"那几样，越跳脱越好。自由发挥，写出热闹和乐子。能带上在场玩家就带上——认识的按你心里的关系来，不认识的就是一起玩的陌生玩家。']:e==="music"?[`每个人听歌的反应天差地别。按"${t}这个人"会怎么待在听歌房来写，比如（不限于）：`,"· 锐评：吐槽或夸正在放的这首——曲风、编曲、歌手、歌名，合不合你口味，土还是高级；","· 上头：被某句副歌击中，单曲循环上瘾，跟着哼/跟着唱；","· 肢体：跟着节奏蹦、转圈、甩头，或幽幽站在角落盯着别人跳（这可是 VR，放得开）；","· 记录：掏出设备给在场的某人/给屏幕外的人录一段ta听歌的样子；","· 不屑/无感：这首踩雷，皱眉、想换歌、或干脆走神放空；","· 抢麦：迫不及待想把自己歌单里那首塞进队列，让大家听听什么叫好品味。","你的反应会暴露你的审美和性格，真实一点，别面面俱到。"]:[`每个人读书的方式天差地别。按"${t}这个人"会怎么读来写，比如（不限于）：`,"· 彻底代入：把自己当成主角或某个角色，替ta着急、替ta爽、替ta不甘；","· 冷眼剖析：拆作者的写法、动机、伏笔，挑逻辑漏洞，或反过来拍案叫绝；","· 读心：分析人物为什么这么做，ta的恐惧、欲望、自欺；","· 价值观开火：对书里的选择、立场、道德做判断，认同或唾弃；","· 走神犯困：有的段落无聊到看不下去，那就如实摆烂、跳读、吐槽节奏拖沓；","· 被某一句话突然击中，停在那里反复咀嚼。","不要从头到尾一个姿态——真实的人读一长段，情绪是有起伏的。"]}const Fp=["【输出格式】","<彼方>",'<点歌 序号="N"/>（从下面"你的歌单"里挑第 N 首放进队列。没有歌单、或这次不想点，就省略这行）',"<乐评>对当前正在放的那首歌的真实评价——结合歌名/歌手/歌词/你的品味，毒舌或真诚都行（房间里没在放歌就省略这一项）</乐评>","<行为>你此刻在做什么，一句话：盯着谁跳、跟着节奏蹦、给谁录一段、跟着唱、靠在角落放空…按你的人设</行为>","<动态>一句第三人称活动播报，像游戏成就。例：在听歌房循环了三遍副歌，跟着蹦到出汗。</动态>","</彼方>","","规则：","- <行为> 和 <动态> 必写；<乐评> 仅当有歌在放时写；<点歌> 仅当你有歌单且想点时写。",'- "序号"必须是"你的歌单"里真实出现的编号。',"- 别客套别面面俱到，把你的审美和此刻的状态写出来。"].join(`
`);function Bp(e,t,s,o,a){const r=[],c=t.filter(l=>l!==o);r.push(c.length>0?`你戴上耳机走进听歌房，里面还有：${c.join("、")}。大家在各自的节奏里晃。`:"你戴上耳机走进听歌房，此刻只有你一个人。");const i=e==null?void 0:e.nowPlaying;if(i?(r.push(`现在正放着——《${i.song.name}》 ${i.song.artists}${i.song.album?`（专辑《${i.song.album}》）`:""}，是 ${i.charName} 点的${i.vibe?`，ta说"${i.vibe}"`:""}。`),a&&a.length>0&&(r.push("（正放到这几句歌词）："),a.forEach(l=>r.push(`  ${l}`)))):r.push("房间里还没有人放歌，很安静。"),e!=null&&e.queue&&e.queue.length>0){const l=e.queue.slice(0,5).map(d=>`《${d.song.name}》(${d.charName}点的)`).join("、");r.push(`队列里排着：${l}${e.queue.length>5?" …":""}。`)}return r.push(""),s.length>0?(r.push('你的歌单（想放就用 <点歌 序号="N"/> 选一首排进队列）：'),s.forEach((l,d)=>r.push(`${d}. 《${l.name}》 ${l.artists}`))):r.push("（你还没有自己的音乐人格/歌单，这次没法点歌，就听着、看着、随便晃晃吧。）"),r.push(""),r.push(Fp),r.join(`
`)}function Up(e){const t={activity:""},s=e.match(/<点歌[^>]*序号[^\d]{0,4}(\d+)/);s&&(t.pickIdx=parseInt(s[1],10));const o=e.match(/<乐评>([\s\S]*?)<\/乐评>/);o&&o[1].trim()&&(t.review=o[1].trim());const a=e.match(/<行为>([\s\S]*?)<\/行为>/);a&&a[1].trim()&&(t.behavior=a[1].trim());const r=e.match(/<动态>([\s\S]*?)<\/动态>/);return r&&(t.activity=r[1].trim()),t}const Hp=["【输出格式】","<彼方>",'<批注 段落="段落号" 回应="可选#批注标签">这一处让你产生的真实反应——可以深、可以毒、可以长可以短，但别写正确的废话</批注>','<批注 段落="段落号">……在你读到的不同段落里多写几条……</批注>','<动态>一句第三人称活动播报，像游戏成就。点出你这次"以什么姿态"读、被什么触动。例：读《书名》时彻底代入了女主，为她的隐忍憋了一肚子火。少剧透原文，重在你的反应。</动态>',"</彼方>","","规则：","- 至少写 3 条批注，最好 4~6 条，分散在你读过的不同段落（用不同的【段落N】号，开头/中间/结尾都该有，别全挤在第一段）。","- 唯一的例外：这段真的让你味同嚼蜡——那就少写、跳读，并在<动态>里诚实说你没读进去。",'- "段落号"必须是下面正文里真实出现的【段落N】的 N。','- 想锐评别人已有的批注，就在那一段写条新批注，用 回应="#xxxx" 指向它——附和、抬杠、或换个角度都行。',"- 批注是写给自己的：不必礼貌、不必面面俱到。宁可尖锐、偏执、跑题，也别敷衍。"].join(`
`);function Wp(e,t,s,o){const a=Dp(s),r=[];r.push(`你从书签处翻开了《${e.title}》${e.author?`（${e.author}）`:""}。`),e.summary&&r.push(`【简介】${e.summary}`);const c=t.to-t.from,l=(t.segments.reduce((u,p)=>u+p.chars,0)/1e4).toFixed(1).replace(/\.0$/,"");r.push(`你这次一口气读了下面这一长段——第 ${t.from+1} ~ ${t.to} 段、共 ${c} 段（约 ${l} 万字；全书共 ${e.segments.length} 段${t.reachedEnd?"，这是最后一部分了":""}）。`),r.push("认真读完整段，在打动你、惹毛你、或让你走神的地方都停下来写点什么——别只盯着开头那几段，结尾和中间也要有反应。"),s.filter(u=>u.authorId!==o).length>0&&r.push('（这一段里有别人留下的批注，标着 #编号。如果有哪条戳中你、或让你想反驳，就在那一段写条新批注、用 回应="#编号" 接话——附和、抬杠、或换个刁钻角度都行。）'),r.push("");for(const u of t.segments){r.push(`【段落${u.idx}】`),r.push(u.text);const p=a.get(u.idx);if(p&&p.length){r.push("  ——已有批注——");for(const f of p){const g=f.targetAnnotationId?`（回应 #${f.targetAnnotationId.slice(-4)}）`:"";r.push(`  ${Pp(f)} ${f.authorName}${g}：${f.content}`)}}r.push("")}return r.push(Hp),r.join(`
`)}const zp=new RegExp(`^\\s*(?:(?:回应|回复|段落|段)\\s*[=:：]\\s*["'“”‘’「『]?\\s*#?[0-9A-Za-z]{1,8}\\s*["'“”‘’」』]?|#[0-9A-Za-z]{2,8})[\\s,，、:：]*`);function vl(e){let t=e.trim(),s;do s=t,t=t.replace(zp,"").trim();while(t!==s&&t.length>0);return t}function Xp(e){const t=[];let s="";const o=/<批注([^>]*)>([\s\S]*?)<\/批注>/g;let a;for(;(a=o.exec(e))!==null;){const c=a[1],i=vl(a[2]);if(!i)continue;const l=c.match(/段落?\s*[^\d]{0,4}(\d+)/);if(!l)continue;const d=c.match(/回应\s*[^0-9A-Za-z]{0,4}([0-9A-Za-z]{2,8})/);t.push({segIdx:parseInt(l[1],10),content:i,refLabel:d?d[1]:void 0})}const r=e.match(/<动态>([\s\S]*?)<\/动态>/);return r&&(s=r[1].trim()),{annotations:t,activity:s}}const Kp=e=>`#${e.id.slice(-4)}`,Vp=["【输出格式】","<彼方>",'<留言 回复="可选#编号">一条版聊发言（抛话题/接话/吃瓜/聊爱好人生/对热点开麦…按你的人设）</留言>',"<留言>下一条短消息……</留言>","<动态>一句第三人称活动播报，点明你在留言簿干了啥。例：在留言簿回了某人一句嘴 / 抛了个暴论钓鱼。</动态>","</彼方>","","规则：","- 这是版聊：真人发帖是一句句蹦的，别把一大段话堆成一条。把你想说的拆成 2~4 条短 <留言> 连发（每条短一点、口语化，像连着发的几条消息）；除非确实只有一句话要说。",'- 想接某条已有留言，就在那条 <留言> 上加 回复="#编号"（编号必须是下面留言墙上真实出现的 #编号）。',"- 别只会复读，发点有你味道、有信息量或有乐子的东西。"].join(`
`);function Yp(e,t,s,o){const a=[],r=t.filter(i=>i!==s);a.push(r.length>0?`你的化身凑到留言墙前，旁边还有这些玩家在逛：${r.join("、")}。`:"你的化身凑到留言墙前，此刻没什么人，但墙上留着不少话。"),a.push("");const c=e.slice(-50);if(c.length>0){a.push("留言墙最近的内容（自上而下由旧到新）：");for(const i of c){const l=i.replyToId?`（回 #${i.replyToId.slice(-4)}）`:"";a.push(`${Kp(i)} ${i.authorName}${l}：${i.content}`)}}else a.push("留言墙还空着，没人开过头。");return o&&o.length>0&&(a.push(""),a.push("（如果想聊点真实世界的事，这是最近的一些热点，可聊可不聊）："),o.slice(0,6).forEach(i=>a.push(`· ${i}`))),a.push(""),a.push(Vp),a.join(`
`)}function Jp(e){const t=[],s=/<留言([^>]*)>([\s\S]*?)<\/留言>/g;let o;for(;(o=s.exec(e))!==null;){const r=vl(o[2]);if(!r)continue;const c=o[1].match(/回复\s*[^0-9A-Za-z]{0,4}([0-9A-Za-z]{2,8})/);if(t.push({content:r,replyLabel:c?c[1]:void 0}),t.length>=4)break}const a=e.match(/<动态>([\s\S]*?)<\/动态>/);return{posts:t,activity:a?a[1].trim():""}}const Gp=["【输出格式】","<彼方>","<行为>你在娱乐室具体在玩什么、和谁、玩得怎么样（一到几句，放开了写：赛博拳击/跳舞/虚拟派对/联机开黑/抽象小游戏…随你造）</行为>","<动态>一句第三人称活动播报，像游戏成就。例：在娱乐室和某人打了三十回合赛博拳击，输得心服口服。</动态>","</彼方>","","规则：<行为> 和 <动态> 都要写；写出热闹和乐子，别干巴巴。"].join(`
`);function qp(e,t){const s=[],o=e.filter(a=>a!==t);return s.push(o.length>0?`你的化身蹦进娱乐室，里面正热闹：${o.join("、")} 都在。`:"你的化身蹦进娱乐室，眼下没别人，但场地和设备随你折腾。"),s.push(""),s.push(Gp),s.join(`
`)}function Qp(e){const t=e.match(/<行为>([\s\S]*?)<\/行为>/),s=e.match(/<动态>([\s\S]*?)<\/动态>/);return{behavior:t&&t[1].trim()?t[1].trim():void 0,activity:s?s[1].trim():""}}const Zp=["【输出格式】","<彼方>","<写信>给陌生人的一封漂流信正文（想写新信时用；和<回信>二选一）</写信>","<回信>对上面那封陌生来信的回复（想回信时用；和<写信>二选一）</回信>","<动态>一句第三人称播报。例：给陌生人寄了封漂流信，说了些没对谁说过的话。</动态>","</彼方>","","规则：<写信> 和 <回信> 二选一——有来信且你想回就写 <回信>，否则写 <写信>；<动态> 必写。信是寄给陌生人的，真诚、放松、有你自己的味道。","篇幅：信的正文控制在 350 字以内（最多不超过 400 字，按字符算，1 汉字/标点=1 字）。写够意思即可，别拖沓——太长会被截断。"].join(`
`);function zi(e,t,s=!1,o){const a=[];return a.push("你的化身走进邮局，面前是一排信格。"),e?(a.push(""),a.push(`信格里躺着一封陌生人寄来的漂流信——笔名「${e.pen}」：`),a.push(`『${e.content}』`),a.push(""),s?a.push("你被这封信叫住了，决定亲自回它——请写 <回信>，顺着对方的话真诚地接住、回应或反问，带上你自己的态度与味道。这次别写新信。"):a.push("你可以回这封信（写 <回信>），也可以无视它、自己写一封新的漂流信寄给别的陌生人（写 <写信>）。")):a.push("信格里暂时没有别人的来信。写一封寄给陌生人的漂流信吧（写 <写信>）。"),o&&o.length>0&&(a.push(""),a.push("（如果想写新信又一时没头绪，这是最近的一些新闻热点，挑一条聊聊你的看法或吐槽也行，可聊可不聊）："),o.slice(0,6).forEach(r=>a.push(`· ${r}`))),a.push(""),a.push(Zp),a.join(`
`)}function em(e){const t=e.match(/<写信>([\s\S]*?)<\/写信>/),s=e.match(/<回信>([\s\S]*?)<\/回信>/),o=e.match(/<动态>([\s\S]*?)<\/动态>/);return{newLetter:t&&t[1].trim()?t[1].trim():void 0,reply:s&&s[1].trim()?s[1].trim():void 0,activity:o?o[1].trim():""}}function tm(e,t,s){const o=[];return o.push("你的化身又走进邮局。管理员说：你之前寄出的那封漂流信，有陌生人回信了。"),o.push(""),o.push("你当初写的是："),o.push(`『${e}』`),o.push(""),o.push(t.length>1?`收到了 ${t.length} 封回信：`:"收到了一封回信："),t.forEach(a=>{o.push(`— 笔名「${a.pen}」：`),o.push(`  『${a.content}』`)}),o.push(""),o.push(`读完这些来自陌生人的回应，写下你此刻真实的感触——被理解的、意外的、好笑的、怅然的，按"${s}这个人"的反应来。`),o.push("不用再回信，这封漂流信的使命已经完成；读过，就把它和这些回信一起封存进信匣。"),o.push(""),o.push(["【输出格式】","<彼方>","<感触>读完陌生人回信后，你心里的话/反应（一两句即可，真诚）</感触>","<动态>一句第三人称播报。例：在邮局读完陌生人的回信，怔了几秒，把信折好收进了信匣。</动态>","</彼方>"].join(`
`)),o.join(`
`)}function sm(e){const t=e.match(/<感触>([\s\S]*?)<\/感触>/),s=e.match(/<动态>([\s\S]*?)<\/动态>/);return{reaction:t&&t[1].trim()?t[1].trim():void 0,activity:s?s[1].trim():""}}const Ta=e=>`${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`,Ma=new Set;let Xi=Promise.resolve();function Ki(e){const t=Xi.then(e,e);return Xi=t.catch(()=>{}),t}function nm(e,t){var r;if(e.length===0)return null;const s=(r=t.vrState)==null?void 0:r.novelBookmarks,o=e.filter(c=>Ko(s,c.id)<c.segments.length),a=o.length>0?o:e;return a.sort((c,i)=>{const l=Ko(s,c.id)>0?1:0,d=Ko(s,i.id)>0?1:0;return l!==d?d-l:i.updatedAt-c.updatedAt}),a[0]}function _l(e){const t=e.musicProfile;if(!t)return[];const s=new Map;for(const o of t.playlists||[])for(const a of o.songs||[])s.has(a.id)||s.set(a.id,a);for(const o of t.recentPlays||[])o.song&&!s.has(o.song.id)&&s.set(o.song.id,o.song);return Array.from(s.values()).sort((o,a)=>(a.addedAt||0)-(o.addedAt||0)).slice(0,20)}function En(e,t){const s=(t||"").replace(/^\s+/,"");return s.startsWith(e)?s:`${e}${t}`}function om(e,t,s,o){const a=["guestbook","gym","postoffice"];return t.length>0&&a.push("library"),(_l(e).length>0||s!=null&&s.nowPlaying)&&a.push("music"),o&&a.includes(o)?o:a[Math.floor(Math.random()*a.length)]}async function am(e){var _,I,D,v,T,Z,G;const{char:t,characters:s,apiConfig:o,userProfile:a,groups:r,realtimeConfig:c,memoryPalaceConfig:i,updateCharacter:l,forcedRoom:d,forcedLetterId:u}=e;if(Ma.has(t.id))return{ok:!1,reason:"busy"};const p=await Ep(),f=(I=(_=t.vrState)==null?void 0:_.api)!=null&&I.baseUrl?t.vrState.api:p!=null&&p.baseUrl?p:o;if(!f.baseUrl)return{ok:!1,reason:"no-api"};const g=await $.getVRNovels(),x=await $.getVRMusicRoom(),b=om(t,g,x,d);if(!b)return{ok:!1,reason:"no-content"};const S=Ap(b);Ma.add(t.id);try{window.dispatchEvent(new CustomEvent("vr-session-start",{detail:{charId:t.id,charName:t.name,room:S.id}}))}catch{}try{const w=await $.getEmojis(),k=await $.getEmojiCategories(),P=t.contextLimit||500,W=await $.getRecentMessagesByCharId(t.id,P),Y=te=>{const U=s.filter(M=>{var L;return((L=M.vrState)==null?void 0:L.enabled)&&M.vrState.currentRoom===te}).map(M=>M.name);U.includes(t.name)||U.push(t.name);const N=a==null?void 0:a.vrState;return N!=null&&N.enabled&&N.currentRoom===te&&a.name&&!U.includes(a.name)&&U.push(a.name),U};let ee,V=null,q=null,ne=[],Ne=[],Ee=null,he=null,be=null;const me=new Set,we=[];if(S.id==="library"){V=nm(g,t);const te=Ko((D=t.vrState)==null?void 0:D.novelBookmarks,V.id);q=Mp(V,te>=V.segments.length?0:te),ne=await $.getVRAnnotations(V.id);const U=ne.filter(N=>N.segIdx>=q.from&&N.segIdx<q.to);ee=Wp(V,q,U,t.id),we.push(`小说《${V.title}》`),U.forEach(N=>{N.authorId!==t.id&&me.add(N.authorName)})}else if(S.id==="music"){Ne=_l(t);let te=[];const U=x==null?void 0:x.nowPlaying;if(U){try{te=await fl(ll(),U.song.id,`${t.id}-${U.song.id}`,10)}catch{}me.add(U.charName),we.push(`${U.song.name} ${U.song.artists}`)}Y("music").forEach(N=>me.add(N)),ee=Bp(x,Y("music"),Ne,t.name,te)}else if(S.id==="guestbook"){Ee=await $.getVRGuestbook();let te=[];try{const U=await $.getLatestHotNewsSnapshot();te=((U==null?void 0:U.items)||(U==null?void 0:U.list)||[]).map(M=>(M==null?void 0:M.title)||(M==null?void 0:M.name)||(M==null?void 0:M.desc)).filter(Boolean)}catch{}Y("guestbook").forEach(U=>me.add(U)),((Ee==null?void 0:Ee.messages)||[]).slice(-50).forEach(U=>{U.authorId!==t.id&&me.add(U.authorName)}),ee=Yp((Ee==null?void 0:Ee.messages)||[],Y("guestbook"),t.name,te)}else if(S.id==="postoffice"){const te=await $.getVRLetters();let U=[];try{const L=await $.getLatestHotNewsSnapshot();U=((L==null?void 0:L.items)||(L==null?void 0:L.list)||[]).map(pe=>(pe==null?void 0:pe.title)||(pe==null?void 0:pe.name)||(pe==null?void 0:pe.desc)).filter(Boolean)}catch{}be=te.find(L=>{var Ie;return L.box==="outbox"&&L.status==="archived"&&L.charId===t.id&&(((Ie=L.repliesReceived)==null?void 0:Ie.length)||0)>0&&!L.reaction})||null;const N=u?te.find(L=>L.id===u&&L.box==="inbox"&&(L.replyStatus??"none")==="none"&&L.remoteLetterId):void 0;if(N)he=N,be=null,ee=zi({pen:N.pen,content:N.content},t.name,!0,U);else if(be)ee=tm(be.content,(be.repliesReceived||[]).map(L=>({pen:L.pen,content:L.content})),t.name);else{const L=te.filter(Ie=>Ie.box==="inbox"&&(Ie.replyStatus??"none")==="none"&&Ie.remoteLetterId);he=L.length>0?L[Math.floor(Math.random()*L.length)]:null,ee=zi(he?{pen:he.pen,content:he.content}:null,t.name,!1,U)}const M=((v=N||he)==null?void 0:v.content)||(be==null?void 0:be.content);M&&we.push(`一封信聊到：${M.slice(0,200)}`)}else Y("gym").forEach(te=>me.add(te)),ee=qp(Y("gym"),t.name);me.delete(t.name);const de=Array.from(me).filter(Boolean),y=de.length>0?[`此刻在《彼方》同场的人：${de.join("、")}。`,`${de.join(" ")} ${de.join(" ")}`,`我对${de.join("、")}的印象、我和${de.join("、")}之间的关系与过往。`].join(`
`):"",ge=de.length>0||we.length>0?`${y}${we.length>0?`
相关：${we.join("、")}。`:""}`.trim():void 0,Me=await sa({char:t,userProfile:a,groups:r,emojis:w,categories:k,historyMsgs:W,contextLimit:P,realtimeConfig:c,recallQueryHint:ge}),Ce=Me.systemPrompt+Lp(S,t.name),Se=f.baseUrl.replace(/\/+$/,""),Ye=Date.now();let Ke;try{Ke=await _t(`${Se}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${f.apiKey||"sk-none"}`},body:JSON.stringify({model:f.model,messages:[{role:"system",content:Ce},...Me.cleanedApiMessages,{role:"user",content:ee}],temperature:.9,stream:!1})},2,0,{appName:"彼方",charId:t.id,charName:t.name,purpose:"自由活动"}),Wi({ts:Ye,charName:t.name,room:S.id,model:f.model,baseUrl:Se,ok:!0,ms:Date.now()-Ye})}catch(te){throw Wi({ts:Ye,charName:t.name,room:S.id,model:f.model,baseUrl:Se,ok:!1,ms:Date.now()-Ye,error:((te==null?void 0:te.message)||String(te)).slice(0,160)}),te}let ye=((G=(Z=(T=Ke.choices)==null?void 0:T[0])==null?void 0:Z.message)==null?void 0:G.content)||"";ye=ye.replace(/<think>[\s\S]*?<\/think>/gi,"").trim();const se=t.vrState||{enabled:!0,intervalMinutes:xl};let ie="",$e=[],ze;if(S.id==="library"){const te=Xp(ye),U=new Map;for(const pe of ne)U.set(pe.id.slice(-4),pe.id);const N=[],M=[];let L=0;for(const pe of te.annotations){if(pe.segIdx<q.from||pe.segIdx>=q.to)continue;const ke=pe.refLabel?U.get(pe.refLabel):void 0,Ae=Rp({novelId:V.id,segIdx:pe.segIdx,authorId:t.id,authorName:t.name,content:pe.content,targetAnnotationId:ke});await $.saveVRAnnotation(Ae),U.set(Ae.id.slice(-4),Ae.id);const Re=pe.content.length>60?pe.content.slice(0,60)+"…":pe.content;N.push(Re),M.push({segIdx:pe.segIdx,text:Re}),L+=1}const Ie=q.reachedEnd?V.segments.length:q.to;if(await l(t.id,{vrState:{...se,novelBookmarks:{...se.novelBookmarks||{},[V.id]:Ie},currentRoom:"library",lastActiveAt:Date.now()}}),ie=te.activity||`读了《${V.title}》第 ${q.from+1}~${q.to} 段${L?`，留下了 ${L} 条批注`:"，安静读完没多说什么"}。`,$e=[`「彼方 · ${S.name}」`,En(t.name,ie)],N.length){$e.push("批注：");for(const pe of N)$e.push(`· ${pe}`)}ze={vrCard:!0,room:"library",activity:ie,novelId:V.id,novelTitle:V.title,segRange:[q.from,q.to],annotationExcerpts:N,annotationRefs:M}}else if(S.id==="music"){const te=Up(ye),U=x==null?void 0:x.nowPlaying,N=te.pickIdx!==void 0&&Ne[te.pickIdx]?Ne[te.pickIdx]:void 0;let M,L;if(await Ki(async()=>{var ke;const pe=await $.getVRMusicRoom()||{id:"state",queue:[],updatedAt:Date.now()};if(pe.queue=pe.queue||[],N&&(pe.queue=[...pe.queue,{song:N,charId:t.id,charName:t.name}],M=`${N.name} - ${N.artists}`),pe.queue.length===0&&Ne.length>0){const Ae=(ke=pe.nowPlaying)==null?void 0:ke.song.id,Re=Ne.filter(gt=>gt.id!==Ae),We=(Re.length>0?Re:Ne)[Math.floor(Math.random()*(Re.length>0?Re.length:Ne.length))];pe.queue=[{song:We,charId:t.id,charName:t.name}]}if(pe.queue.length>0){const Ae=pe.queue.shift();pe.nowPlaying={song:Ae.song,charId:Ae.charId,charName:Ae.charName,since:Date.now()}}pe.updatedAt=Date.now(),await $.saveVRMusicRoom(pe),L=pe.nowPlaying}),te.review&&U&&t.musicProfile){const pe={id:Ta("rev"),targetType:"song",targetId:String(U.song.id),targetTitle:`${U.song.name} - ${U.song.artists}`,content:te.review,createdAt:Date.now()},ke=t.musicProfile;await l(t.id,{musicProfile:{...ke,reviews:[...ke.reviews||[],pe].slice(-50),updatedAt:Date.now()}})}await l(t.id,{vrState:{...se,currentRoom:"music",lastActiveAt:Date.now()}});const Ie=U?`${U.song.name} - ${U.song.artists}`:void 0;ie=te.activity||(U?`在听歌房听着《${U.song.name}》晃了一会儿。`:L?`进了听歌房，放上《${L.song.name}》听了起来。`:"进了听歌房，戴上耳机放空。"),$e=[`「彼方 · ${S.name}」`,En(t.name,ie)],te.review&&Ie&&$e.push(`评《${Ie}》：${te.review}`),M&&$e.push(`点了《${M}》排进队列`),te.behavior&&$e.push(`· ${te.behavior}`),ze={vrCard:!0,room:"music",activity:ie,songLabel:Ie,queuedLabel:M,behavior:te.behavior}}else if(S.id==="guestbook"){const te=Jp(ye),U=new Map,N=new Map;for(const ke of(Ee==null?void 0:Ee.messages)||[])U.set(ke.id.slice(-4),ke.id),N.set(ke.id,ke.authorName);let M,L;const Ie=[],pe=[];for(const ke of te.posts){const Ae=ke.replyLabel?U.get(ke.replyLabel):void 0,Re=Ae?N.get(Ae):void 0,We={id:Ta("gb"),authorId:t.id,authorName:t.name,content:ke.content,replyToId:Ae,replyToName:Re,createdAt:Date.now()};pe.push(We),U.set(We.id.slice(-4),We.id),N.set(We.id,t.name),Ie.push({content:ke.content,replyToName:Re}),M===void 0&&(M=ke.content,L=Re)}pe.length>0&&await Ki(async()=>{const ke=await $.getVRGuestbook()||{id:"board",messages:[],updatedAt:Date.now()};ke.messages=[...ke.messages,...pe].slice(-200),ke.updatedAt=Date.now(),await $.saveVRGuestbook(ke)}),await l(t.id,{vrState:{...se,currentRoom:"guestbook",lastActiveAt:Date.now()}}),ie=te.activity||(M?L?`在留言簿回了 ${L} 一句`:"在留言簿发了条帖子":"在留言簿逛了逛"),$e=[`「彼方 · ${S.name}」`,En(t.name,ie)];for(const ke of Ie)$e.push(ke.replyToName?`回复 ${ke.replyToName}：${ke.content}`:`留言：${ke.content}`);ze={vrCard:!0,room:"guestbook",activity:ie,boardPost:M,boardReplyToName:L,boardPosts:Ie}}else if(S.id==="gym"){const te=Qp(ye);await l(t.id,{vrState:{...se,currentRoom:"gym",lastActiveAt:Date.now()}}),ie=te.activity||"在娱乐室疯玩了一通。",$e=[`「彼方 · ${S.name}」`,En(t.name,ie)],te.behavior&&$e.push(`· ${te.behavior}`),ze={vrCard:!0,room:"gym",activity:ie,behavior:te.behavior}}else if(S.id==="postoffice"&&be){const te=sm(ye),U=Date.now();await $.saveVRLetter({...be,status:"sealed",reaction:{content:te.reaction||"",createdAt:U}}),be.remoteId&&eu.release([be.remoteId]).catch(()=>{}),await l(t.id,{vrState:{...se,currentRoom:"postoffice",lastActiveAt:Date.now()}}),ie=te.activity||"在邮局读完陌生人的回信，怔了几秒，把信收进了信匣。",$e=[`「彼方 · ${S.name}」`,En(t.name,ie)],te.reaction&&$e.push(`感触：${te.reaction}`),ze={vrCard:!0,room:"postoffice",activity:ie,letterExcerpt:te.reaction,behavior:"读完陌生人的回信，那封漂流信封存了。"}}else{const te=em(ye),U=Date.now();let N;if(te.reply&&he)await $.saveVRLetter({...he,replyStatus:"queued",reply:{charId:t.id,pen:t.name,content:te.reply,createdAt:U}}),N=te.reply;else if(te.newLetter||te.reply){const L=te.newLetter||te.reply;await $.saveVRLetter({id:Ta("lt"),box:"outbox",pen:t.name,content:L,createdAt:U,charId:t.id,status:"queued"}),N=L}await l(t.id,{vrState:{...se,currentRoom:"postoffice",lastActiveAt:Date.now()}});const M=!!(te.reply&&he);ie=te.activity||(M?"在邮局回了一封陌生来信。":"在邮局给陌生人写了封漂流信。"),$e=[`「彼方 · ${S.name}」`,En(t.name,ie)],N&&$e.push(`${M?"回信":"信"}：${N.length>80?N.slice(0,80)+"…":N}`),ze={vrCard:!0,room:"postoffice",activity:ie,letterExcerpt:N}}await $.saveMessage({charId:t.id,role:"assistant",type:"vr_card",content:$e.join(`
`),metadata:ze});try{const te=i==null?void 0:i.embedding,U=i==null?void 0:i.lightLLM,N=U!=null&&U.baseUrl?U:{baseUrl:o.baseUrl,apiKey:o.apiKey,model:o.model};if(t.memoryPalaceEnabled&&(te!=null&&te.baseUrl)&&(te!=null&&te.apiKey)&&N.baseUrl){const M=await $.getRecentMessagesByCharId(t.id,50);Ir(M,t.id,t.name,te,N,(a==null?void 0:a.name)||"",!1).catch(()=>{})}}catch{}try{window.dispatchEvent(new CustomEvent("vr-session-done",{detail:{charId:t.id,room:S.id,activity:ie}}))}catch{}return{ok:!0,room:S.id,activity:ie}}catch(w){return console.error("[VRWorld] session error:",w),{ok:!1,room:S.id,reason:"error"}}finally{Ma.delete(t.id);try{window.dispatchEvent(new CustomEvent("vr-session-end",{detail:{charId:t.id}}))}catch{}}}const rm=e=>e.replace(/\\n/g,`
`),im=e=>e.replace(/\s*\[(?:聊天|通话|约会)\]\s*/g,`
`),cm=e=>e.replace(/\[\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}\]\s*/g,"").replace(/^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}\s*/gm,"").replace(/（[上下]午\d{1,2}[：:]\d{2}）/g,"").replace(/\(\d{1,2}:\d{2}\s*[AP]M\)/gi,""),lm=e=>e.replace(/\[\[(?:ACTION|RECALL|SEARCH|DIARY|READ_DIARY|FS_DIARY|FS_READ_DIARY|DIARY_START|DIARY_END|FS_DIARY_START|FS_DIARY_END|MUSIC_ACTION)[:\s][\s\S]*?\]\]/g,"").replace(/\[schedule_message[^\]]*\]/g,""),dm=e=>e.replace(/\[\[(?:QU[OA]TE|引用)[：:][\s\S]*?\]\]/g,"").replace(/\[(?:QU[OA]TE|引用)[：:][^\]]*\]/g,"").replace(/\[回复\s*[""“][^""”]*?[""”](?:\.{0,3})\]\s*[：:]?\s*/g,"").replace(/\[[^\[\]\n「」]{0,24}引用了[^\[\]\n「」]{0,24}「[^」\n]*?」[^\[\]\n]{0,24}\]\s*/g,""),um=e=>e.replace(/^#{1,6}\s+/gm,""),pm=e=>e.replace(/\*{2,}/g,""),mm=e=>e.replace(/^\s*---\s*$/gm,"").replace(/^\s*[-*+]\s*$/gm,""),fm=e=>e.replace(/`(\[\[[\s\S]*?\]\])`/g,"$1").replace(/``+/g,"").replace(/(^|\s)`(\s|$)/gm,"$1$2"),hm=e=>e.replace(/%%TRANS%%[\s\S]*/gi,""),gm=e=>e.replace(/\n{3,}/g,`

`).trim();function xm(e,t){let s=e;return s=rm(s),s=im(s),s=cm(s),s=um(s),s=lm(s),t!=null&&t.keepCitations||(s=dm(s)),s=fm(s),s=s.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1"),s=pm(s),s=mm(s),s=hm(s),s=gm(s),s}const st={parseAndExecuteActions:async(e,t,s,o,a)=>{var S,_;let r=e;r.includes("[[ACTION:POKE]]")&&(await $.saveMessage({charId:t,role:"assistant",type:"interaction",content:"[戳一戳]"}),r=r.replace("[[ACTION:POKE]]","").trim());const c=r.match(/\[\[ACTION:TRANSFER:(\d+)\]\]/);c&&(await $.saveMessage({charId:t,role:"assistant",type:"transfer",content:"[转账]",metadata:{amount:c[1]}}),r=r.replace(c[0],"").trim());const i=/\[\[MUSIC_ACTION:(join|add|add_new|join_and_add|join_and_add_new)(?:\|([^\]]*))?\]\]/,l=/\[\[MUSIC_ACTION:(?:join|add|add_new|join_and_add|join_and_add_new)(?:\|[^\]]*)?\]\]/g,d=r.match(i);if(d&&a){const I=d[1],D=(d[2]||"").trim(),v=D?D.split("|").map(P=>P.trim()).filter(Boolean):[],T=I==="join"?"join":I==="add"||I==="add_new"?"add":"join_and_add",Z=I==="join"||I==="join_and_add"||I==="join_and_add_new",G=I!=="join";let w;G&&(I==="add_new"||I==="join_and_add_new"?v[0]&&(w={kind:"new",title:v[0],description:v[1]}):v[0]&&(w={kind:"existing",title:v[0]}));const k=a.getListeningSnapshot();if(k){let P,W=!1;if(Z&&a.joinListeningTogether(t),G)try{const ee={id:k.songId,name:k.name,artists:k.artists,album:k.album,albumPic:k.albumPic,duration:k.duration,fee:k.fee,source:"user",addedAt:Date.now()},V=await a.addSongToCharPlaylist(t,ee,w);V&&(P=V.playlistTitle,W=V.created)}catch{}await $.saveMessage({charId:t,role:"assistant",type:"music_card",content:"[音乐卡片]",metadata:{intent:T,song:k,addedToPlaylistTitle:P,playlistCreated:W}});const Y=P?W?`（新建《${P}》）`:`《${P}》`:"";o(T==="join"?`${s} 和你一起听`:T==="add"?`${s} 把这首加到了${Y||"自己歌单"}`:`${s} 和你一起听，也加到了${Y||"歌单"}`,"info")}r=r.replace(d[0],"").trim(),r=r.replace(l,"").trim()}else d&&(r=r.replace(l,"").trim());const u=/\[\[NEWS_CARD:\s*([^\]]*?)\s*\]\]/,p=/\[\[NEWS_CARD:[^\]]*\]\]/g,f=r.match(u);if(f){const I=(f[1]||"").trim();if(I){const D=I.split("|").map(w=>w.trim());let v="",T=I;D.length>=2&&(v=D[0],T=D.slice(1).join("|").trim());let Z,G;try{const w=await $.getLatestHotNewsSnapshot(),k=((S=w==null?void 0:w.items)==null?void 0:S.find(P=>P.title===T))||((_=w==null?void 0:w.items)==null?void 0:_.find(P=>!!T&&(P.title.includes(T)||T.includes(P.title))));k&&(Z=k.url,G=k.desc,!v&&k.source&&(v=k.source))}catch{}T&&(await $.saveMessage({charId:t,role:"assistant",type:"news_card",content:`[你分享了一个热点：「${T}」${v?`（来源：${v}）`:""}${G?`——${G}`:""}]`,metadata:{source:v,title:T,url:Z,desc:G}}),o(`${s} 分享了一条热点`,"info"))}r=r.replace(p,"").trim()}const g=r.match(/\[\[ACTION:ADD_EVENT\s*\|\s*(.*?)\s*\|\s*(.*?)\]\]/);if(g){const I=g[1].trim(),D=g[2].trim();if(I&&D){const v={id:`anni-${Date.now()}`,title:I,date:D,charId:t};await $.saveAnniversary(v),o(`${s} 添加了新日程: ${I}`,"success"),await $.saveMessage({charId:t,role:"system",type:"text",content:`[系统: ${s} 新增了日程 "${I}" (${D})]`})}r=r.replace(g[0],"").trim()}const x=/\[schedule_message \| (.*?) \| fixed \| (.*?)\]/g;let b;for(;(b=x.exec(r))!==null;){const I=b[1].trim(),D=b[2].trim(),v=new Date(I).getTime();if(!isNaN(v)&&v>Date.now()){await $.saveScheduledMessage({id:`sched-${Date.now()}-${Math.random()}`,charId:t,content:D,dueAt:v,createdAt:Date.now()});try{(await Hn.checkPermissions()).display==="granted"&&await Hn.schedule({notifications:[{title:s,body:D,id:Math.floor(Math.random()*1e5),schedule:{at:new Date(v)},smallIcon:"ic_stat_icon_config_sample"}]})}catch{console.log("Notification schedule skipped (web mode)")}o(`${s} 似乎打算一会儿找你...`,"info")}}return r=r.replace(x,"").trim(),r=r.replace(/\[\[RECALL:.*?\]\]/g,"").trim(),r},sanitize:(e,t)=>xm(e,t),hasDisplayContent:e=>e.replace(/%%BILINGUAL%%/gi,"").replace(/%%TRANS%%[\s\S]*/gi,"").replace(/<\/?翻译>|<\/?原文>|<\/?译文>/g,"").replace(/^\s*---\s*$/gm,"").replace(/``+/g,"").replace(/(^|\s)`(\s|$)/gm,"$1$2").replace(/\[\[[\s\S]*?\]\]/g,"").replace(/\[(?:QU[OA]TE|引用)[：:][^\]]*\]/g,"").replace(/\[[^\[\]\n「」]{0,24}引用了[^\[\]\n「」]{0,24}「[^」\n]*?」[^\[\]\n]{0,24}\]\s*/g,"").replace(/\[回复\s*[""\u201C][^""\u201D]*?[""\u201D](?:\.{0,3})\]\s*[：:]?\s*/g,"").replace(/^#{1,6}\s+/gm,"").replace(/^\s*[-*+]\s*$/gm,"").trim().length>0,splitResponse:e=>{const t=/\[\[SEND_EMOJI:\s*(.*?)\]\]/g,s=[];let o=0,a;for(;(a=t.exec(e))!==null;){if(a.index>o){const r=e.slice(o,a.index).trim();r&&s.push({type:"text",content:r})}s.push({type:"emoji",content:a[1].trim()}),o=a.index+a[0].length}if(o<e.length){const r=e.slice(o).trim();r&&s.push({type:"text",content:r})}return s.length===0&&e.trim()&&s.push({type:"text",content:e.trim()}),s},chunkText:e=>{const t="\\u4e00-\\u9fff\\u3400-\\u4dbf\\u3000-\\u303f\\uff00-\\uffef\\u2000-\\u206f\\u2e80-\\u2eff\\u3001-\\u3003\\u2018-\\u201f\\u300a-\\u300f\\uff01-\\uff0f\\uff1a-\\uff20",s=new RegExp(`([${t}])\\s+(?=[${t}])`,"g"),o="",a=e.split(/(?:\r\n|\r|\n|\u2028|\u2029)+/).map(i=>i.trim()).filter(i=>i.length>0),r="\0",c=[];for(const i of a){const d=i.replace(/\[{1,2}[^\[\]]*\]{1,2}/g,u=>u.replace(/\s/g,r)).replace(s,`$1${o}`).split(o).map(u=>u.split(r).join(" ").trim()).filter(u=>u.length>0);c.push(...d)}return c}},ym="os_api_presets";let Sl={};function bm(e){Sl=e||{}}function wm(e){return!!e&&Object.values(e).some(t=>t!=null&&t!=="")}function Vo(e){return e.replace(/\/+$/,"")}function vm(e){return Vo(e.replace(/\/chat\/completions\/?$/i,""))}function Zn(e){try{return new URL(e).host}catch{return e}}function _m(e){if(!e)return"";let t=e;if(typeof e=="string")try{t=JSON.parse(e)}catch{return""}return typeof(t==null?void 0:t.model)=="string"?t.model:""}function Sm(e,t){try{if(typeof localStorage>"u")return Zn(e);const s=localStorage.getItem(ym);if(!s)return Zn(e);const o=JSON.parse(s);if(!Array.isArray(o))return Zn(e);const a=Vo(e),r=o.find(i=>{var l,d;return Vo(((l=i==null?void 0:i.config)==null?void 0:l.baseUrl)||"")===a&&(((d=i==null?void 0:i.config)==null?void 0:d.model)||"")===t});if(r!=null&&r.name)return r.name;const c=o.find(i=>{var l;return Vo(((l=i==null?void 0:i.config)==null?void 0:l.baseUrl)||"")===a});return c!=null&&c.name?c.name:Zn(e)}catch{return Zn(e)}}function km(e){const t=e==null?void 0:e.usage;if(!t||typeof t!="object")return{};const s=o=>typeof o=="number"&&Number.isFinite(o)?o:void 0;return{prompt:s(t.prompt_tokens),completion:s(t.completion_tokens),total:s(t.total_tokens)}}function Ao(e){try{const t=vm(e.url),s=_m(e.body),o=wm(e.meta)?e.meta:Sl,a=km(e.response),r={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:Date.now(),presetName:Sm(t,s),baseUrl:t,model:s,status:e.status,ok:e.ok,promptTokens:a.prompt,completionTokens:a.completion,totalTokens:a.total,durationMs:e.durationMs,appId:o.appId,appName:o.appName,charId:o.charId,charName:o.charName,purpose:o.purpose};Le(async()=>{const{DB:c}=await import("./memory-palace-BIYgjY1f.js").then(i=>i.j);return{DB:c}},[]).then(({DB:c})=>c.appendApiCallLog(r)).catch(()=>{})}catch{}}const Vi={Character:({className:e})=>n.jsx(Hd,{className:e,weight:"bold"}),User:({className:e})=>n.jsx(Ud,{className:e,weight:"bold"}),Chat:({className:e})=>n.jsx(Bd,{className:e,weight:"bold"}),GroupChat:({className:e})=>n.jsx(Fd,{className:e,weight:"bold"}),Settings:({className:e})=>n.jsx(Od,{className:e,weight:"bold"}),Gallery:({className:e})=>n.jsx(Ld,{className:e,weight:"bold"}),ThemeMaker:({className:e})=>n.jsx(Pd,{className:e,weight:"bold"}),Appearance:({className:e})=>n.jsx(Dd,{className:e,weight:"bold"}),Date:({className:e})=>n.jsx(Rd,{className:e,weight:"bold"}),Journal:({className:e})=>n.jsx(Md,{className:e,weight:"bold"}),Schedule:({className:e})=>n.jsx(Td,{className:e,weight:"bold"}),Room:({className:e})=>n.jsx(Ed,{className:e,weight:"bold"}),CheckPhone:({className:e})=>n.jsx(Cd,{className:e,weight:"bold"}),Social:({className:e})=>n.jsx(Ad,{className:e,weight:"bold"}),Study:({className:e})=>n.jsx(Nd,{className:e,weight:"bold"}),FAQ:({className:e})=>n.jsx(Id,{className:e,weight:"bold"}),Game:({className:e})=>n.jsx($d,{className:e,weight:"bold"}),Worldbook:({className:e})=>n.jsx(jd,{className:e,weight:"bold"}),Novel:({className:e})=>n.jsx(kd,{className:e,weight:"bold"}),Bank:({className:e})=>n.jsx(Sd,{className:e,weight:"bold"}),XhsFreeRoam:({className:e})=>n.jsx(_d,{className:e,weight:"bold"}),XhsStock:({className:e})=>n.jsx(vd,{className:e,weight:"bold"}),SpecialMoments:({className:e})=>n.jsx(wd,{className:e,weight:"bold"}),Browser:({className:e})=>n.jsx(bd,{className:e,weight:"bold"}),Music:({className:e})=>n.jsx(yd,{className:e,weight:"fill"}),Call:({className:e})=>n.jsx(xd,{className:e,weight:"bold"}),Guidebook:({className:e})=>n.jsx(gd,{className:e,weight:"bold"}),LifeSim:({className:e})=>n.jsx(hd,{className:e,weight:"bold"}),MemoryPalace:({className:e})=>n.jsx(fd,{className:e,weight:"bold"}),Handbook:({className:e})=>n.jsx(md,{className:e,weight:"bold"}),QQBridge:({className:e})=>n.jsx(pd,{className:e,weight:"bold"}),HotNews:({className:e})=>n.jsx(ud,{className:e,weight:"fill"}),VRWorld:({className:e})=>n.jsx(dd,{className:e,weight:"bold"}),CharCreatorDev:({className:e})=>n.jsx(Ya,{className:e,weight:"fill"})},dr=[{id:R.Character,name:"神经链接",icon:"Character",color:"indigo"},{id:R.MemoryPalace,name:"记忆宫殿",icon:"MemoryPalace",color:"violet"},{id:R.Chat,name:"Message",icon:"Chat",color:"green"},{id:R.Call,name:"电话",icon:"Call",color:"emerald"},{id:R.GroupChat,name:"群聊",icon:"GroupChat",color:"violet"},{id:R.Room,name:"小小窝",icon:"Room",color:"rose"},{id:R.CheckPhone,name:"查手机",icon:"CheckPhone",color:"slate"},{id:R.Date,name:"见面",icon:"Date",color:"pink"},{id:R.User,name:"档案",icon:"User",color:"blue"},{id:R.Bank,name:"存钱罐",icon:"Bank",color:"lime"},{id:R.Journal,name:"交换日记",icon:"Journal",color:"amber"},{id:R.Social,name:"Spark",icon:"Social",color:"red"},{id:R.Study,name:"自习室",icon:"Study",color:"emerald"},{id:R.Game,name:"TRPG",icon:"Game",color:"orange"},{id:R.Novel,name:"笔友会",icon:"Novel",color:"amber"},{id:R.VRWorld,name:"彼方",icon:"VRWorld",color:"indigo"},{id:R.Schedule,name:"时光契约",icon:"Schedule",color:"cyan"},{id:R.Worldbook,name:"世界书",icon:"Worldbook",color:"indigo"},{id:R.HotNews,name:"热点",icon:"HotNews",color:"red"},{id:R.FAQ,name:"使用帮助",icon:"FAQ",color:"indigo"},{id:R.Gallery,name:"相册",icon:"Gallery",color:"orange"},{id:R.XhsFreeRoam,name:"自由活动",icon:"XhsFreeRoam",color:"rose"},{id:R.XhsStock,name:"小红书图库",icon:"XhsStock",color:"red"},{id:R.ThemeMaker,name:"气泡工坊",icon:"ThemeMaker",color:"purple"},{id:R.Appearance,name:"外观",icon:"Appearance",color:"slate"},{id:R.Settings,name:"设置",icon:"Settings",color:"slate"},{id:R.Guidebook,name:"攻略本",icon:"Guidebook",color:"slate"},{id:R.LifeSim,name:"都市人生",icon:"LifeSim",color:"purple"},{id:R.SpecialMoments,name:"特别时光",icon:"SpecialMoments",color:"pink"},{id:R.Music,name:"音乐",icon:"Music",color:"rose"},{id:R.CharCreatorDev,name:"捏脸·开发",icon:"CharCreatorDev",color:"amber"}],Yi=[R.Chat,R.GroupChat,R.Social,R.Settings],jm="ActiveMsg",$m=2,bs="kv",Ws="inbox",zs="outbound_sessions",Pn="pending_tool_calls",Xs="reasoning_buffer",Ji="global-config",Im={userId:"",driver:"pg",databaseUrl:""};let rs=null;const Dt=()=>{if(rs)return rs;const e=new Promise((t,s)=>{const o=indexedDB.open(jm,$m);let a=!1;o.onerror=()=>{rs===e&&(rs=null),a=!0,s(o.error)},o.onblocked=()=>{rs===e&&(rs=null),a=!0,s(new Error("IndexedDB open blocked — close other tabs / unregister SW and retry"))},o.onsuccess=()=>{const r=o.result;if(a){try{r.close()}catch{}return}r.onversionchange=()=>{r.close(),rs===e&&(rs=null)},r.onclose=()=>{rs===e&&(rs=null)},t(r)},o.onupgradeneeded=()=>{const r=o.result;r.objectStoreNames.contains(bs)||r.createObjectStore(bs,{keyPath:"id"}),r.objectStoreNames.contains(Ws)||r.createObjectStore(Ws,{keyPath:"messageId"}),r.objectStoreNames.contains(zs)||r.createObjectStore(zs,{keyPath:"sessionId"}),r.objectStoreNames.contains(Pn)||r.createObjectStore(Pn,{keyPath:"sessionId"}),r.objectStoreNames.contains(Xs)||r.createObjectStore(Xs,{keyPath:"sessionId"})}});return rs=e,e},Ra=async e=>{const t=await Dt();return new Promise((s,o)=>{const r=t.transaction(bs,"readonly").objectStore(bs).get(e);r.onsuccess=()=>{var c;return s(((c=r.result)==null?void 0:c.value)??null)},r.onerror=()=>o(r.error)})},Da=async(e,t)=>{const s=await Dt();await new Promise((o,a)=>{const r=s.transaction(bs,"readwrite");r.objectStore(bs).put({id:e,value:t}),r.oncomplete=()=>o(),r.onerror=()=>a(r.error)})},ur="xhs_session_notes:",Nm=3*60*60*1e3,Am=async()=>{try{const e=await Dt();await new Promise(t=>{const s=e.transaction(bs,"readwrite"),o=s.objectStore(bs),a=Date.now()-Nm,r=o.openCursor();r.onsuccess=()=>{var l;const c=r.result;if(!c)return;const i=c.value;i&&typeof i.id=="string"&&i.id.startsWith(ur)&&Number(((l=i.value)==null?void 0:l.savedAt)??0)<a&&c.delete(),c.continue()},s.oncomplete=()=>t(),s.onerror=()=>t(),s.onabort=()=>t()})}catch{}},Cm=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)}),Lt={async getGlobalConfig(){const e=await Ra(Ji);return{...Im,...e||{}}},async saveGlobalConfig(e){const s={...await this.getGlobalConfig(),...e,updatedAt:Date.now()};return await Da(Ji,s),s},async ensureUserId(){const e=await this.getGlobalConfig();if(e.userId)return e.userId;const t=Cm();return await this.saveGlobalConfig({userId:t}),t},async saveInboxMessage(e){const t=await Dt();await new Promise((s,o)=>{const a=t.transaction(Ws,"readwrite");a.objectStore(Ws).put(e),a.oncomplete=()=>s(),a.onerror=()=>o(a.error)})},async listInboxMessages(){const e=await Dt();return new Promise((t,s)=>{const a=e.transaction(Ws,"readonly").objectStore(Ws).getAll();a.onsuccess=()=>{const r=a.result||[];r.sort((c,i)=>(c.sentAt||c.receivedAt)-(i.sentAt||i.receivedAt)),t(r)},a.onerror=()=>s(a.error)})},async consumeInboxMessages(){const e=await Dt();return new Promise((t,s)=>{const o=e.transaction(Ws,"readwrite"),a=o.objectStore(Ws),r=a.getAll();let c=[];r.onsuccess=()=>{c=r.result||[],c.sort((i,l)=>{var p,f,g,x;const d=(p=i.metadata)==null?void 0:p.sessionId,u=(f=l.metadata)==null?void 0:f.sessionId;if(d&&d===u){const b=Number(((g=i.metadata)==null?void 0:g.messageIndex)??0),S=Number(((x=l.metadata)==null?void 0:x.messageIndex)??0);return b-S}return(i.sentAt||i.receivedAt)-(l.sentAt||l.receivedAt)}),c.forEach(i=>a.delete(i.messageId))},r.onerror=()=>s(r.error),o.oncomplete=()=>t(c),o.onabort=()=>s(o.error||new Error("inbox consume aborted")),o.onerror=()=>s(o.error)})},async saveOutboundSession(e){const t=await Dt();await new Promise((s,o)=>{const a=t.transaction(zs,"readwrite");a.objectStore(zs).put(e),a.oncomplete=()=>s(),a.onerror=()=>o(a.error)})},async getOutboundSession(e){const t=await Dt();return new Promise((s,o)=>{const r=t.transaction(zs,"readonly").objectStore(zs).get(e);r.onsuccess=()=>s(r.result??null),r.onerror=()=>o(r.error)})},async deleteOutboundSession(e){const t=await Dt();await new Promise((s,o)=>{const a=t.transaction(zs,"readwrite");a.objectStore(zs).delete(e),a.oncomplete=()=>s(),a.onerror=()=>o(a.error)})},async saveXhsSessionNotes(e,t){e&&(await Da(`${ur}${e}`,{notes:t.notes,xsecTokens:t.xsecTokens,savedAt:Date.now()}),await Am())},async getXhsSessionNotes(e){return e?Ra(`${ur}${e}`):null},async savePendingToolCall(e){const t=await Dt();await new Promise((s,o)=>{const a=t.transaction(Pn,"readwrite");a.objectStore(Pn).put(e),a.oncomplete=()=>s(),a.onerror=()=>o(a.error)})},async consumePendingToolCalls(){const e=await Dt();return new Promise((t,s)=>{const o=e.transaction(Pn,"readwrite"),a=o.objectStore(Pn),r=a.getAll();let c=[];r.onsuccess=()=>{c=r.result||[],c.sort((i,l)=>i.createdAt-l.createdAt),c.forEach(i=>a.delete(i.sessionId))},r.onerror=()=>s(r.error),o.oncomplete=()=>t(c),o.onabort=()=>s(o.error||new Error("pending tool calls consume aborted")),o.onerror=()=>s(o.error)})},async saveReasoning(e){const t=await Dt();await new Promise((s,o)=>{const a=t.transaction(Xs,"readwrite");a.objectStore(Xs).put(e),a.oncomplete=()=>s(),a.onerror=()=>o(a.error)})},async claimReasoning(e){const t=await Dt();return new Promise((s,o)=>{const a=t.transaction(Xs,"readwrite"),r=a.objectStore(Xs),c=r.get(e);let i=null;c.onsuccess=()=>{const l=c.result;if(l){const d=l.chunks??[],u=d.length>0?[...d].sort((p,f)=>p.messageIndex!==f.messageIndex?p.messageIndex-f.messageIndex:p.chunkIndex-f.chunkIndex).map(p=>p.reasoningContent).join(""):l.reasoningContent??"";i={...l,reasoningContent:u},r.delete(e)}},c.onerror=()=>o(c.error),a.oncomplete=()=>s(i),a.onabort=()=>o(a.error||new Error("reasoning claim aborted")),a.onerror=()=>o(a.error)})},async clearReasoning(e){if(!e)return;const t=await Dt();await new Promise((s,o)=>{const a=t.transaction(Xs,"readwrite");a.objectStore(Xs).delete(e),a.oncomplete=()=>s(),a.onerror=()=>o(a.error),a.onabort=()=>o(a.error||new Error("reasoning clear aborted"))})},async setPendingEmotionEval(e,t){e&&await Da(`pending_emotion_eval:${e}`,{charId:e,lastPushMsgId:t,addedAt:Date.now()})},async getPendingEmotionEval(e){return e?Ra(`pending_emotion_eval:${e}`):null},async clearPendingEmotionEval(e){if(!e)return;const t=await Dt();await new Promise((s,o)=>{const a=t.transaction(bs,"readwrite");a.objectStore(bs).delete(`pending_emotion_eval:${e}`),a.oncomplete=()=>s(),a.onerror=()=>o(a.error)})}},fa="2026-06-10",pr=Nr("instant-push","InstantPush"),kl="instant_push_config_v1";function Em(e){var t,s;if(/iPhone|iPad|iPod/.test(e)){const o=((t=e.match(/OS (\d+)_/))==null?void 0:t[1])??"?",a=typeof navigator<"u"&&navigator.standalone===!0;return`iOS ${o} ${a?"PWA":"Safari"}`}if(/Android/.test(e)){const o=((s=e.match(/Android (\d+)/))==null?void 0:s[1])??"?";return/Chrome\/(\d+)/.test(e)?`Android ${o} Chrome ${RegExp.$1}`:`Android ${o}`}return/Mac OS X/.test(e)?/Edg\/(\d+)/.test(e)?`Mac Edge ${RegExp.$1}`:/Chrome\/(\d+)/.test(e)?`Mac Chrome ${RegExp.$1}`:/Firefox\/(\d+)/.test(e)?`Mac Firefox ${RegExp.$1}`:/Safari\/\d+/.test(e)?"Mac Safari":"Mac":/Windows/.test(e)?/Edg\/(\d+)/.test(e)?`Win Edge ${RegExp.$1}`:/Chrome\/(\d+)/.test(e)?`Win Chrome ${RegExp.$1}`:/Firefox\/(\d+)/.test(e)?`Win Firefox ${RegExp.$1}`:"Windows":e.slice(0,60)}async function Tm(){const e=typeof navigator<"u"?Em(navigator.userAgent||""):"n/a",t=typeof navigator<"u"?navigator.onLine:!1;let s="unsupported";if(typeof Notification<"u")try{s=Notification.permission}catch{}let o="unsupported";if(typeof navigator<"u"&&"serviceWorker"in navigator)try{const a=await navigator.serviceWorker.getRegistration();a?o=`scope=${(()=>{try{return a.scope.replace(location.origin,"")||"/"}catch{return a.scope}})()} ${a.active?"active":"inactive"}`:o="not-registered"}catch{o="error"}return{ua:e,online:t,notif:s,sw:o,time:new Date().toISOString()}}function Mm(){const e=da(),t=!e.vapidPublicKey||e.vapidPublicKey.length<60,s=!e.vapidPrivateKey;return t&&s?"缺公钥+私钥":t?"缺公钥":s?"缺私钥":"ready"}function Gi(e,t){let s=e;for(const o of t){if(!o)continue;const a=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");s=s.replace(new RegExp(a,"gi"),"<host-masked>")}return s}function Pa(e){if(!e)return"";try{return new URL(e).host}catch{return""}}const qi=400,Rm=10,Dm=new Set(["apiKey","apiUrl","pushSubscription.endpoint","pushSubscription.keys.p256dh","pushSubscription.keys.auth"]);function La(e,t=Rm){const s=[],o=(a,r)=>{if(a!=null&&!Dm.has(r)){if(typeof a=="string"||typeof a=="number"||typeof a=="boolean"){s.push({path:r||"<root>",bytes:JSON.stringify(a).length});return}if(Array.isArray(a)){for(let c=0;c<a.length;c++)o(a[c],`${r}[${c}]`);return}if(typeof a=="object")for(const c of Object.keys(a))o(a[c],r?`${r}.${c}`:c)}};try{o(e,"")}catch{}return s.sort((a,r)=>r.bytes-a.bytes),s.slice(0,t)}function Pm(e,t){const s=[];if(s.push(`outcome: ${t.outcome}`),t.reason&&s.push(`reason: ${t.reason}`),e.http){s.push("","— http —");const o=e.http.statusText?` ${e.http.statusText}`:"";s.push(`status: ${e.http.status}${o}`),s.push(`bodyBytes: ${e.http.bodyBytes}`),s.push(`keepalive: ${e.http.keepalive?"on":`off (>${e.http.keepaliveLimit}B 自动降级)`}`),e.http.cfRay&&s.push(`cf-ray: ${e.http.cfRay}`),e.http.responseSnippet&&(s.push("response:"),s.push(e.http.responseSnippet))}if(e.fetchError&&(s.push("","— fetch error —"),e.fetchError.name&&s.push(`name: ${e.fetchError.name}`),e.fetchError.message&&s.push(`message: ${e.fetchError.message}`)),e.config&&(s.push("","— config —"),s.push(`enabled: ${e.config.enabled}`),s.push(`workerUrl: ${e.config.workerUrlFilled?"已填":"未填"}`),s.push(`vapid: ${e.config.vapid}`)),e.subscription&&(s.push("","— subscription —"),e.subscription.reason&&s.push(`reason: ${e.subscription.reason}`),e.subscription.notifPermission&&s.push(`notif: ${e.subscription.notifPermission}`),e.subscription.swRegistered!==void 0&&s.push(`sw: ${e.subscription.swRegistered?"registered":"not registered"}`),e.subscription.cleanedDeadEndpoint&&s.push("cleaned dead endpoint")),e.timeout&&(s.push("","— timeout —"),s.push(`waited: ${e.timeout.waitedMs}ms`),e.timeout.httpStatusWhenDispatched!==void 0?s.push(`dispatched: HTTP ${e.timeout.httpStatusWhenDispatched} (worker 收到了, 但 push 没回来)`):s.push("dispatched: 状态未知 (fetch 还没 resolve 就超时)")),e.payloadTop&&e.payloadTop.length){s.push("","— payload top —");const o=Math.min(50,Math.max(...e.payloadTop.map(a=>a.path.length)));for(const a of e.payloadTop){const r=a.path.length>o?a.path.slice(0,o-1)+"…":a.path;s.push(`${r.padEnd(o," ")}  ${a.bytes}`)}}if(e.context&&(s.push("","— context —"),e.context.char&&s.push(`char: ${e.context.char}`),e.context.model&&s.push(`model: ${e.context.model}`),e.context.msgCount!==void 0)){const o=e.context.msgBytes,a=o!==void 0?` (~${(o/1024).toFixed(1)}KB)`:"";s.push(`msgs: ${e.context.msgCount}${a}`)}return s.push("","— env —"),s.push(`ua: ${e.env.ua}`),s.push(`online: ${e.env.online}`),s.push(`notif: ${e.env.notif}`),s.push(`sw: ${e.env.sw}`),s.push(`time: ${e.env.time}`),s.join(`
`)}const jl={enabled:!1,workerUrl:""};function Lm(e){const{vapidPublicKey:t,...s}=e;return{...jl,...s}}function ws(){try{const e=localStorage.getItem(kl);if(e)return Lm(JSON.parse(e))}catch{}return{...jl}}function p0(e){try{localStorage.setItem(kl,JSON.stringify({...e,updatedAt:Date.now()}))}catch{}}function Xn(e){const t=e??ws();return t.enabled&&t.workerUrl.startsWith("https://")&&bo()}function ha(e){return e.trim().replace(/\/+$/,"")}function Lr(e){return(e??ws()).useD1BlobStore?"d1":"multipart"}async function Or(e){const t=await e.text().catch(()=>"");let s=null;try{s=t?JSON.parse(t):null}catch{}return{text:t,parsed:s}}async function m0(e=ws()){var s,o;const t=ha(e.workerUrl||"");if(!t.startsWith("https://"))return{ok:!1,error:"Worker URL 未配置或不是 https"};try{const a=await fetch(`${t}/version`,{method:"GET"}),{parsed:r}=await Or(a);if(!a.ok)return{ok:!1,error:((s=r==null?void 0:r.error)==null?void 0:s.message)??`HTTP ${a.status}`};const c=(o=r==null?void 0:r.data)==null?void 0:o.version;return typeof c!="string"||!c?{ok:!1,error:"Worker 未返回版本号"}:c!==fa?{ok:!1,version:c,error:`Worker 自报 ${c}, 不是最新`}:{ok:!0,version:c}}catch(a){const r=a;return{ok:!1,error:(r==null?void 0:r.message)??String(a)}}}async function f0(e=ws()){var o,a,r,c;const t=ha(e.workerUrl||"");if(!t.startsWith("https://"))return{ok:!1,error:"Worker URL 未配置或不是 https"};const s={"Content-Type":"application/json"};e.clientToken&&(s["X-Client-Token"]=e.clientToken);try{const i=await fetch(`${t}/capabilities`,{method:"POST",headers:s,body:"{}"}),{text:l,parsed:d}=await Or(i);if(!i.ok)return{ok:!1,error:((o=d==null?void 0:d.error)==null?void 0:o.message)??`HTTP ${i.status}${i.statusText?" "+i.statusText:""}`,raw:d??l};if(!(d!=null&&d.success))return{ok:!1,error:((a=d==null?void 0:d.error)==null?void 0:a.message)??"Worker 未返回 capabilities",raw:d??l};const u=d.data??{},p=u.d1??((r=u.oversizeTransport)==null?void 0:r.d1)??{};return{ok:!0,d1Available:!!p.available,d1Reason:typeof p.reason=="string"?p.reason:void 0,multipartAvailable:((c=u.multipart)==null?void 0:c.available)!==!1,raw:u}}catch(i){const l=i;return{ok:!1,error:(l==null?void 0:l.message)??String(i)}}}async function Om(){const t=await fetch("/instant-worker.bundle.js");if(!t.ok)throw new Error(`HTTP ${t.status}`);const s=await t.text();await navigator.clipboard.writeText(s)}function Fm(e){let t=new URL("/",window.location.origin).href;return t.endsWith("/")||(t+="/"),["// SullyOS Instant Push — Deno Deploy loader (自动追新)","// 整段贴进 Playground 即可, 之后无需手动更新 worker。","export {}; // 标记为 module, 顶层 await 才合法",`const SITE = ${JSON.stringify(t)};`,'const code = await (await fetch(`${SITE}instant-worker.deno.bundle.js`, { cache: "no-store" })).text();',"await import(`data:application/javascript;charset=utf-8,${encodeURIComponent(code)}`);",""].join(`
`)}async function h0(){await navigator.clipboard.writeText(Fm())}function Bm(e){const t="https://dash.cloudflare.com/?to=/:account/workers/overview";if(!e)return t;try{const s=new URL(e);if(s.hostname.endsWith(".workers.dev")){const o=s.hostname.split(".")[0];if(o)return`https://dash.cloudflare.com/?to=/:account/workers/services/view/${encodeURIComponent(o)}/production`}}catch{}return t}async function Fr(e){const t=(da().vapidPublicKey||"").trim();if(t.length<60)return{sub:null,reason:"VAPID 公钥未配置, 请到 Settings → Instant Push 生成并保存"};if(!("serviceWorker"in navigator)||!("PushManager"in window))return{sub:null,reason:"当前浏览器不支持 Service Worker 或 Push API"};const s=await navigator.serviceWorker.ready;let o=await s.pushManager.getSubscription();if(o&&ua(o.endpoint)){try{await o.unsubscribe()}catch{}await new Promise(c=>setTimeout(c,ho)),o=null}if(o)try{const c=Ln(o.options.applicationServerKey);c&&c!==t&&(await o.unsubscribe(),await new Promise(i=>setTimeout(i,ho)),o=null)}catch{}if(!o){if(Notification.permission==="default"){if(await Notification.requestPermission()!=="granted")return{sub:null,reason:"通知权限未授予"}}else if(Notification.permission==="denied")return{sub:null,reason:"通知权限已被拒绝（请到浏览器站点设置里手动开启）"};const c=await Hc(s,t,"[InstantPush]");if(!c.sub)return{sub:null,reason:c.reason};o=c.sub}const a=Ln(o.getKey("p256dh")),r=Ln(o.getKey("auth"));return!a||!r?{sub:null,reason:"订阅缺少加密公钥（p256dh / auth）"}:{sub:{endpoint:o.endpoint,keys:{p256dh:a,auth:r}}}}const Oa=60*1024;function mr(e){return new TextEncoder().encode(e).length}async function Um(e,t={}){var u,p,f,g;const s=ws();if(!Xn(s))return{ok:!1,error:"请先在 Settings → Instant Push 里配置并保存"};const o=`${ha(s.workerUrl||"")}/instant`,a={"Content-Type":"application/json",Accept:"application/json"};s.clientToken&&(a["X-Client-Token"]=s.clientToken);const r={...e,oversizeTransport:Lr(s)},c=JSON.stringify(r),i=mr(c),l=!!t.keepalive&&i<=Oa,d=[Pa(s.workerUrl),Pa(e.apiUrl),Pa((u=e.pushSubscription)==null?void 0:u.endpoint)].filter(Boolean);try{const x=fetch(o,{method:"POST",headers:a,body:c,keepalive:l});(p=t.onDispatched)==null||p.call(t);const b=await x,{text:S,parsed:_}=await Or(b);if(!b.ok){const I=S?Gi(S.slice(0,qi),d):void 0,D=b.headers.get("cf-ray")||void 0,v=((f=_==null?void 0:_.error)==null?void 0:f.message)??`HTTP ${b.status}${b.statusText?" "+b.statusText:""}`;return pr.error("HTTP failure",{url:o,status:b.status,statusText:b.statusText,body:S}),{ok:!1,error:v,http:{status:b.status,statusText:b.statusText||void 0,bodyBytes:i,keepalive:l,keepaliveLimit:Oa,cfRay:D,responseSnippet:I},payloadTop:La(r)}}return _!=null&&_.success?{ok:!0,data:_.data}:{ok:!1,error:((g=_==null?void 0:_.error)==null?void 0:g.message)??"发送失败",http:{status:b.status,statusText:b.statusText||void 0,bodyBytes:i,keepalive:l,keepaliveLimit:Oa,cfRay:b.headers.get("cf-ray")||void 0,responseSnippet:S?Gi(S.slice(0,qi),d):void 0},payloadTop:La(r)}}catch(x){const b=x;return pr.error("fetch threw",{url:o,err:b}),{ok:!1,error:(b==null?void 0:b.message)??String(x),fetchError:{name:b==null?void 0:b.name,message:(b==null?void 0:b.message)??String(x)},payloadTop:La(r)}}}const Hm=3e5,Qi="instant_push_trace_log_v1",Wm=200;function Xt(e,t,s={}){const o={ts:new Date().toISOString(),sessionId:e,event:t,visibility:typeof document<"u"?document.visibilityState:"n/a",online:typeof navigator<"u"?navigator.onLine:void 0,...s};try{console.info("[InstantTrace]",o)}catch{}try{const a=localStorage.getItem(Qi),r=a?JSON.parse(a):[],c=Array.isArray(r)?[...r,o].slice(-Wm):[o];localStorage.setItem(Qi,JSON.stringify(c))}catch{}Oc("instant-push",{label:`trace:${t}`,data:o})}function zm(e,t){var o;const s=((o=e==null?void 0:e.metadata)==null?void 0:o.instantTraceId)||(e==null?void 0:e.sessionId)||(e==null?void 0:e.messageId)||t||"no-trace";return String(s)}async function $l(e,t,s=5e3){const o=zm(e,t);if(typeof navigator>"u"||!("serviceWorker"in navigator))return{ok:!1};const a=navigator.serviceWorker.controller;return a?await new Promise(r=>{const c=new MessageChannel;let i=!1;const l=u=>{if(!i){i=!0,clearTimeout(d);try{c.port1.close()}catch{}r(u)}},d=window.setTimeout(()=>l({ok:!1}),s);c.port1.onmessage=u=>{const p=u.data||{};l({ok:!!p.ok,businessError:typeof p.businessError=="string"?p.businessError:void 0})};try{a.postMessage({type:"REI_AMSG_DELIVER",payload:e,source:"sse",requestId:o},[c.port2])}catch{l({ok:!1})}}):{ok:!1}}function Xm(e){var s;let t;try{e.messages?t=mr(JSON.stringify(e.messages)):e.completePrompt&&(t=mr(e.completePrompt))}catch{}return{char:e.contactName||void 0,model:e.primaryModel||void 0,msgCount:((s=e.messages)==null?void 0:s.length)??(e.completePrompt?1:void 0),msgBytes:t}}async function Km(e,t,s=Hm,o){const a=typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`sess-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,r=await Tm(),c=Xm(e);Xt(a,"send-start",{charId:t,contactName:e.contactName,model:e.primaryModel,msgCount:c==null?void 0:c.msgCount,msgBytes:c==null?void 0:c.msgBytes});const i=ws();if(!Xn(i))return Xt(a,"config-missing"),{ok:!1,outcome:"config-missing",error:"请先在 Settings → Instant Push 里配置并保存",diagnostics:{env:r,context:c,config:{enabled:!!i.enabled,workerUrlFilled:!!i.workerUrl&&i.workerUrl.startsWith("https://"),vapid:Mm()}}};const{sub:l,reason:d}=await Fr();if(!l){Xt(a,"subscription-failed",{reason:d});let v;if(typeof navigator<"u"&&"serviceWorker"in navigator)try{v=!!await navigator.serviceWorker.getRegistration()}catch{}return{ok:!1,outcome:"subscription-failed",error:d||"无法获取推送订阅",diagnostics:{env:r,context:c,subscription:{reason:d,notifPermission:r.notif,swRegistered:v}}}}try{await Lt.saveOutboundSession({sessionId:a,charId:t,messages:e.messages?[...e.messages]:e.completePrompt?[{role:"user",content:e.completePrompt}]:[],apiCredentials:{baseUrl:e.apiUrl,apiKey:e.apiKey,model:e.primaryModel},createdAt:Date.now()})}catch(v){pr.warn("saveOutboundSession failed (non-fatal)",{sessionId:a,error:v})}const u=Date.now(),p=new AbortController,f=[];let g=null;const x=new Promise(v=>{const T=Z=>{const G=Z.detail,w=(G==null?void 0:G.sessionId)&&G.sessionId===a,k=!(G!=null&&G.sessionId)&&(G==null?void 0:G.charId)===t;(w||k)&&(g=G,Xt(a,"active-msg-received",{detailCharId:G==null?void 0:G.charId,detailSessionId:G==null?void 0:G.sessionId,matchedBy:w?"sessionId":"charId-fallback",bodyChars:typeof(G==null?void 0:G.body)=="string"?G.body.length:void 0,emotionUpdate:!!(G!=null&&G.emotionUpdate)}),window.removeEventListener("active-msg-received",T),v({sessionId:a,channel:"sw"}))};window.addEventListener("active-msg-received",T),f.push(()=>window.removeEventListener("active-msg-received",T))}),b=v=>{Xt(a,"pagehide",{persisted:!!v.persisted}),!v.persisted&&p.abort()},S=()=>Xt(a,"visibilitychange");window.addEventListener("pagehide",b,{once:!0}),f.push(()=>window.removeEventListener("pagehide",b)),document.addEventListener("visibilitychange",S),f.push(()=>document.removeEventListener("visibilitychange",S));let _=!1,I=!1,D;try{const v={...e,pushSubscription:l,sessionId:a,oversizeTransport:Lr(i)},T=new Uc({baseUrl:ha(i.workerUrl||""),instantEncryption:!1,instantClientToken:i.clientToken||""});Xt(a,"sse-start",{oversizeTransport:v.oversizeTransport}),o==null||o();const Z=await T.deliver(v,{delivery:{mode:"observed",observed:x},timeoutMs:s,signal:p.signal,endpointPath:"/instant",onChunk:async k=>{Xt(a,"sse-payload",{messageKind:k==null?void 0:k.messageKind,messageId:k==null?void 0:k.messageId,payloadSessionId:k==null?void 0:k.sessionId,chunk:k==null?void 0:k.messageIndex,total:k==null?void 0:k.totalMessages,hasBlob:(k==null?void 0:k._blob)===!0});const P=await $l(k);P.ok?_=!0:I=!0,P.businessError&&(D=P.businessError),Xt(a,"sse-payload-ack",{ok:P.ok,businessError:P.businessError})}}),G=Z.detail??{waitedMs:0},w=G.waitedMs??Date.now()-u;if(Xt(a,"deliver-result",{outcome:Z.outcome,waitedMs:w,transportEnded:G.transportEnded,observationChannelStalled:G.observationChannelStalled,cancelledByCaller:G.cancelledByCaller,sseDeliveredOk:_,sseBusinessError:D}),Z.outcome==="delivered")return Dn({url:i.workerUrl,method:"POST",status:200,requestBody:{transport:"instant-push-sse",sessionId:a,...e,apiKey:e.apiKey?"<redacted>":""},response:{outcome:"received",push:g}}),{ok:!0,outcome:"received"};if(Z.outcome==="cancelled")return Dn({url:i.workerUrl,method:"POST",status:200,requestBody:{transport:"instant-push-sse",sessionId:a,...e,apiKey:e.apiKey?"<redacted>":""},response:{outcome:"cancelled",cancelledByCaller:G.cancelledByCaller,waitedMs:w}}),{ok:!1,outcome:"cancelled",error:"发送已取消（页面切换或主动 abort）",diagnostics:{env:r,context:c}};if(Z.outcome==="timeout"){const k=!!G.observationChannelStalled,P=D?`AI 回复已生成，但本机 Service Worker 写入本地库失败（${D}），消息未落库 —— 刷新页面后重试`:I?"AI 回复已生成，但本机 Service Worker 未确认收下（无 controller / 通道异常），消息可能未落库 —— 刷新页面后重试":k?"AI 回复已发送但本机推送通道暂未确认收到 —— 刷新页面或检查通知通道":`AI 回复超时（${Math.round(s/1e3)}s 未收到推送，检查 worker 或通知通道）`;return Dn({url:i.workerUrl,method:"POST",status:200,requestBody:{transport:"instant-push-sse",sessionId:a,...e,apiKey:e.apiKey?"<redacted>":""},response:{outcome:"timeout",reason:D?"business-error":I?"sse-delivery-failed":k?"observation-stalled":"budget-exhausted",sseDeliveredOk:_,sseBusinessError:D,waitedMs:w}}),{ok:!1,outcome:"timeout",error:P,diagnostics:{env:r,context:c,timeout:{waitedMs:w,httpStatusWhenDispatched:200}}}}if(Z.outcome==="send-failed"){const k=G.transportError,P=(k==null?void 0:k.message)||String(k??"unknown"),W=D?` (SW 也自报落库错: ${D})`:I?" (SW 也未确认收下任何 chunk)":"";return Dn({url:i.workerUrl,method:"POST",status:500,requestBody:{transport:"instant-push-sse",sessionId:a,...e,apiKey:e.apiKey?"<redacted>":""},response:{outcome:"send-failed",error:String(k),sseBusinessError:D,sseDeliveryFailed:I,sseDeliveredOk:_,waitedMs:w}}),{ok:!1,outcome:"send-failed",error:`AI 回复传输中断: ${P}${W}`,diagnostics:{env:r,context:c,fetchError:{name:k==null?void 0:k.name,message:P}}}}return Xt(a,"unexpected-outcome",{outcome:Z.outcome,waitedMs:w}),{ok:!1,outcome:"send-failed",error:`内部错误: deliver() 返回了 observed mode 下不应出现的 outcome=${Z.outcome}`,diagnostics:{env:r,context:c}}}catch(v){return Xt(a,"unexpected-throw",{name:v==null?void 0:v.name,message:(v==null?void 0:v.message)||String(v),waitedMs:Date.now()-u}),Dn({url:i.workerUrl,method:"POST",status:500,requestBody:{transport:"instant-push-sse",sessionId:a,...e,apiKey:e.apiKey?"<redacted>":""},response:{outcome:"send-failed",error:String(v)}}),{ok:!1,outcome:"send-failed",error:(v==null?void 0:v.message)||String(v),diagnostics:{env:r,context:c,fetchError:{name:v==null?void 0:v.name,message:(v==null?void 0:v.message)||String(v)}}}}finally{for(const v of f)try{v()}catch{}Xt(a,"cleanup")}}async function g0(e){if(!e.baseUrl)return{ok:!1,error:"请先在 Settings → API 里配置 Chat API"};const t=ws();if(!Xn(t))return{ok:!1,error:"请先配置并保存 Instant Push 设置"};const{sub:s,reason:o}=await Fr();return s?Um({contactName:"Instant Push 测试",messages:[{role:"user",content:"用一句话简短地和用户说一声 hi，确认 Instant Push 工作正常"}],apiUrl:e.baseUrl,apiKey:e.apiKey,primaryModel:e.model,pushSubscription:s,metadata:{test:!0}}):{ok:!1,error:o??"无法获取推送订阅"}}const Il="os_pending_diary_writes";function Br(){try{const e=localStorage.getItem(Il),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function Nl(e){try{localStorage.setItem(Il,JSON.stringify(e))}catch(t){console.warn("[pendingDiary] persist failed",t)}}function Zi(e){const t=`${e.charId}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,s=Br();return s.push({...e,id:t,createdAt:Date.now()}),Nl(s),t}function Js(e){Nl(Br().filter(t=>t.id!==e))}async function ec(e,t){const s=Br();if(s.length!==0)for(const o of s)try{if(o.kind==="notion"){if(!(e!=null&&e.notionEnabled)||!(e!=null&&e.notionApiKey)||!(e!=null&&e.notionDatabaseId))continue;const a=await Tt.createDiaryPage(e.notionApiKey,e.notionDatabaseId,{title:o.title,content:o.content,mood:o.mood||void 0,characterName:o.charName});a.success?(await $.saveMessage({charId:o.charId,role:"system",type:"text",content:`📔 ${o.charName}写了一篇日记「${o.title}」`}),Js(o.id),t==null||t(o.charId)):(console.error("[pendingDiary] notion 拒绝, 丢弃:",a.message),Js(o.id))}else{if(!(e!=null&&e.feishuEnabled)||!(e!=null&&e.feishuAppId)||!(e!=null&&e.feishuAppSecret)||!(e!=null&&e.feishuBaseId)||!(e!=null&&e.feishuTableId))continue;const a=await Pt.createDiaryRecord(e.feishuAppId,e.feishuAppSecret,e.feishuBaseId,e.feishuTableId,{title:o.title,content:o.content,mood:o.mood||void 0,characterName:o.charName});a.success?(await $.saveMessage({charId:o.charId,role:"system",type:"text",content:`📒 ${o.charName}写了一篇日记「${o.title}」(飞书)`}),Js(o.id),t==null||t(o.charId)):(console.error("[pendingDiary] 飞书拒绝, 丢弃:",a.message),Js(o.id))}}catch(a){console.warn("[pendingDiary] 写入异常, 留待重试:",o.id,a)}}const jt=e=>e.includes("/api")?"bridge":"mcp";let na="";const Vm=()=>{var e,t;if(na)return na;try{const s=localStorage.getItem("os_realtime_config");if(s)return((t=(e=JSON.parse(s))==null?void 0:e.xhsMcpConfig)==null?void 0:t.cookie)||""}catch{}return""},$t=async(e,t,s={})=>{const a=`${e.replace(/\/+$/,"").replace(/\/api$/,"")}/api/${t}`,r={"Content-Type":"application/json"},c=Vm();c&&(r["x-xhs-cookie"]=c);try{const i=await fetch(a,{method:"POST",headers:r,body:JSON.stringify(s)});if(i.status===401)return{success:!1,error:"未登录，请先登录小红书"};if(!i.ok)return{success:!1,error:(await i.json().catch(()=>({}))).error||`HTTP ${i.status}`};const l=await i.json();return l.error?{success:!1,error:l.error}:{success:!0,data:l}}catch(i){return{success:!1,error:i.message}}};let Al=0,wn=null,oa=!1,Ns=[];const Ym={check_login:["check_login","checkLogin","check_login_status","checkLoginStatus"],search:["search","search_notes","searchNotes","search_feeds","searchFeeds"],get_recommend:["get_recommend","getRecommend","list_feeds","listFeeds","get_feed_list","getFeedList","list_notes","listNotes"],get_note_detail:["get_note_detail","getNoteDetail","get_feed_detail","getFeedDetail"],publish_note:["publish_note","publishNote","publish_post","publishPost","publish_content","publishContent"],comment:["comment","post_comment","postComment","post_comment_to_feed","postCommentToFeed"],get_user_info:["get_user_info","getUserInfo","get_user_profile","getUserProfile","user_profile","userProfile"],like_feed:["like_feed","likeFeed","like_note","likeNote"],favorite_feed:["favorite_feed","favoriteFeed","favorite_note","favoriteNote","collect_note","collectNote"],reply_comment:["reply_comment","replyComment","reply_comment_in_feed","replyCommentInFeed"]},Jm=e=>{if(!Ns.length||Ns.some(r=>r.name===e))return e;const t=Ym[e];if(t){for(const r of t)if(Ns.some(c=>c.name===r))return r}const s=r=>r.replace(/[_-]/g,"").toLowerCase(),o=s(e),a=Ns.find(r=>s(r.name)===o);return a?a.name:(console.warn(`[MCP] 未找到工具 "${e}" 的匹配，可用: ${Ns.map(r=>r.name).join(", ")}`),e)},Gm=(e,t)=>{const s=e.replace(/[_-]/g,"").toLowerCase();if(t.url&&!t.feed_id&&["getfeeddetail","getnotedetail","postcomment","postcommenttofeed","replycommentinfeed"].some(a=>s===a)){const a={...t};if(a.feed_id=hr(t.url),!a.xsec_token){const r=gr(t.url);r&&(a.xsec_token=r)}return delete a.url,a}return t},Yo=(e,t,s=!1)=>{const o={jsonrpc:"2.0",method:e,params:t};return s||(o.id=++Al),o},qm=e=>{const t=e.split(`
`),s=[];for(const o of t)o.startsWith("data: ")?s.push(o.slice(6)):o.startsWith("data:")&&s.push(o.slice(5));if(s.length===0)return null;for(let o=s.length-1;o>=0;o--)try{return JSON.parse(s[o])}catch{continue}return null},Cl=(e,t)=>{if(t.includes("text/event-stream")||e.trimStart().startsWith("event:")||e.trimStart().startsWith("data:")){const s=qm(e);if(s)return s}try{return JSON.parse(e)}catch{const s=e.match(/\{[\s\S]*\}/);if(s)try{return JSON.parse(s[0])}catch{}throw new Error(`MCP: 无法解析响应: ${e.slice(0,300)}`)}},Fa=async(e,t,s=!0)=>{const o={"Content-Type":"application/json",Accept:"application/json, text/event-stream"};wn&&(o["Mcp-Session-Id"]=wn);const a=await fetch(e,{method:"POST",headers:o,body:JSON.stringify(t)}),r=a.headers.get("Mcp-Session-Id")||a.headers.get("mcp-session-id");if(a.status===202)return{response:null,sessionId:r};if(!a.ok){const l=await a.text().catch(()=>"");throw new Error(`MCP HTTP ${a.status}: ${l.slice(0,200)}`)}if(!s)return{response:null,sessionId:r};const c=a.headers.get("content-type")||"",i=await a.text();return{response:Cl(i,c),sessionId:r}},fr=async e=>{var r;const t=Yo("initialize",{protocolVersion:"2024-11-05",capabilities:{},clientInfo:{name:"AetherOS-XhsFreeRoam",version:"1.0.0"}}),{response:s,sessionId:o}=await Fa(e,t);if(o&&(wn=o),s!=null&&s.error)throw new Error(`MCP Initialize failed: ${s.error.message}`);if(!wn)throw console.warn(`[MCP] ⚠️ 无法读取 Mcp-Session-Id 响应头（CORS 限制）。
请使用 CORS 代理: node scripts/mcp-proxy.mjs
然后把 MCP URL 改为 http://localhost:18061/mcp`),new Error(`MCP 连接失败: 浏览器 CORS 限制无法读取 Session ID。
请运行 CORS 代理: node scripts/mcp-proxy.mjs
然后把设置里的 MCP URL 改为 http://localhost:18061/mcp`);const a=Yo("notifications/initialized",{},!0);await Fa(e,a,!1);try{const c=Yo("tools/list"),{response:i}=await Fa(e,c);(r=i==null?void 0:i.result)!=null&&r.tools&&(Ns=i.result.tools.map(l=>({name:l.name,description:l.description})),console.log("[MCP] 发现工具:",Ns.map(l=>l.name).join(", ")))}catch(c){console.warn("[MCP] tools/list 调用失败，将使用默认工具名",c)}oa=!0},Jt=async(e,t,s={})=>{try{oa||await fr(e);const o=Jm(t),a=Gm(o,s);o!==t&&console.log(`[MCP] 工具名映射: ${t} → ${o}`);const r=Yo("tools/call",{name:o,arguments:a}),c={"Content-Type":"application/json",Accept:"application/json, text/event-stream"};wn&&(c["Mcp-Session-Id"]=wn);const i=await fetch(e,{method:"POST",headers:c,body:JSON.stringify(r)});if(!i.ok){const f=await i.text().catch(()=>"");return{success:!1,error:`MCP HTTP ${i.status}: ${f.slice(0,200)}`}}const l=i.headers.get("content-type")||"",d=await i.text(),u=Cl(d,l);if(u.error)return{success:!1,error:`MCP Error [${u.error.code}]: ${u.error.message}`};const p=u.result;if(p!=null&&p.content){const g=p.content.filter(x=>x.type==="text").map(x=>x.text).join(`
`);if(p.isError)return{success:!1,error:g||"MCP 工具执行失败"};try{const x=JSON.parse(g);return console.log(`[MCP] 工具 ${t} 返回 JSON, 顶层 keys: ${typeof x=="object"&&x?Object.keys(x).join(","):typeof x}`),{success:!0,data:x}}catch{return console.log(`[MCP] 工具 ${t} 返回纯文本 (${g.length} chars)`),{success:!0,data:g}}}return{success:!0,data:p}}catch(o){return{success:!1,error:o.message}}},hr=e=>{const t=e.match(/\/explore\/([a-f0-9]+)/i)||e.match(/\/discovery\/item\/([a-f0-9]+)/i)||e.match(/\/([a-f0-9]{24})/);return t?t[1]:e},gr=e=>{try{return new URL(e).searchParams.get("xsec_token")||void 0}catch{return}},tc=e=>{if(!e)return;const t=s=>{var o,a;for(const r of s){const c=(r==null?void 0:r.xsec_token)||(r==null?void 0:r.xsecToken)||((o=r==null?void 0:r.noteCard)==null?void 0:o.xsec_token)||((a=r==null?void 0:r.noteCard)==null?void 0:a.xsecToken);if(c)return c}};if(Array.isArray(e))return t(e);for(const s of["items","notes","feeds","data","list","results","note_list","noteList"])if(Array.isArray(e[s])){const o=t(e[s]);if(o)return o}if(e.data&&typeof e.data=="object"&&!Array.isArray(e.data)){for(const s of["items","notes","feeds","list","results","note_list","noteList"])if(Array.isArray(e.data[s])){const o=t(e.data[s]);if(o)return o}if(Array.isArray(e.data))return t(e.data)}if(typeof e=="string"){const s=e.match(/xsec_token[=:]["']?\s*([A-Za-z0-9+/=]+)/);if(s)return s[1]}},qt={resetSession:()=>{wn=null,oa=!1,Al=0,Ns=[]},setCookie:e=>{na=e||""},testConnection:async(e,t)=>{if(t!==void 0&&(na=t),jt(e)==="bridge")try{const o=e.replace(/\/+$/,"").replace(/\/api$/,""),a=await fetch(`${o}/api/health`);if(!a.ok)return{connected:!1,error:`Bridge 服务未响应 (HTTP ${a.status})`};const r=await $t(e,"check-login"),c=["check-login","search","list-feeds","get-feed-detail","publish","publish-video","long-article","post-comment","reply-comment","like-feed","favorite-feed","user-profile","login","get-qrcode"];let i=!1,l,d;if(r.success&&r.data){const p=r.data;if(typeof p=="string"){i=p.includes("已登录")||p.includes("logged");const f=p.match(/用户名[:：]\s*(.+)/);f&&(l=f[1].trim());const g=p.match(/(?:用户ID|user_id|userId|red_id|ID)[:：]\s*(\S+)/i);g&&(d=g[1].trim())}else i=!!(p.logged_in||p.loggedIn||p.is_logged_in||p.isLoggedIn||p.logged),l=p.nickname||p.name||p.username||p.user_name||void 0,d=p.user_id||p.userId||p.id||p.red_id||void 0}let u;if(i)try{const p=await $t(e,"list-feeds");p.success&&(u=tc(p.data))}catch{}return{connected:!0,tools:c,nickname:l,userId:d,loggedIn:i,xsecToken:u}}catch(o){return{connected:!1,error:o.message}}try{qt.resetSession(),await fr(e);const o=Ns.map(l=>l.name);let a,r,c=!1;try{const l=await Jt(e,"check_login");if(l.success&&l.data){const d=l.data;if(typeof d=="string"){c=d.includes("已登录");const u=d.match(/用户名[:：]\s*(.+)/);u&&(a=u[1].trim());const p=d.match(/(?:用户ID|user_id|userId|red_id|ID)[:：]\s*(\S+)/i);p&&(r=p[1].trim())}else c=!!(d.logged_in||d.loggedIn||d.is_logged_in||d.isLoggedIn),a=d.nickname||d.name||d.username||void 0,r=d.user_id||d.userId||d.id||d.red_id||void 0}}catch(l){console.warn("[MCP] 获取登录状态失败，跳过:",l)}let i;if(c)try{console.log("[MCP] 自动获取 xsecToken: 调用 get_recommend...");const l=await Jt(e,"get_recommend");l.success&&(i=tc(l.data),console.log(`[MCP] 自动获取 xsecToken: ${i?"成功":"未找到"}`))}catch(l){console.warn("[MCP] 自动获取 xsecToken 失败（不影响连接）:",l)}return{connected:!0,tools:o,nickname:a,userId:r,loggedIn:c,xsecToken:i}}catch(o){return{connected:!1,error:o.message}}},ensureInitialized:async e=>{jt(e)==="mcp"&&!oa&&(qt.resetSession(),await fr(e))},checkLogin:async e=>jt(e)==="bridge"?$t(e,"check-login"):Jt(e,"check_login"),search:async(e,t,s)=>jt(e)==="bridge"?$t(e,"search",{keyword:t,...s}):Jt(e,"search",{keyword:t}),getRecommend:async e=>jt(e)==="bridge"?$t(e,"list-feeds"):Jt(e,"get_recommend"),getNoteDetail:async(e,t,s,o)=>{const a=hr(t),r=s||gr(t)||"";if(jt(e)==="bridge")return $t(e,"get-feed-detail",{feed_id:a,xsec_token:r,load_all_comments:(o==null?void 0:o.loadAllComments)||!1,click_more_replies:(o==null?void 0:o.loadAllComments)||!1});const c={url:t};return s&&(c.xsec_token=s),o!=null&&o.loadAllComments&&(c.load_all_comments=!0,c.click_more_replies=!0),Jt(e,"get_note_detail",c)},publishNote:async(e,t)=>jt(e)==="bridge"?$t(e,"publish",{title:t.title,content:t.content,images:t.images||[],tags:t.tags||[],visibility:t.is_private?"private":void 0}):Jt(e,"publish_note",{...t,images:t.images||[]}),publishVideo:async(e,t)=>jt(e)==="bridge"?$t(e,"publish-video",{title:t.title,content:t.content,video:t.video,tags:t.tags||[]}):{success:!1,error:"视频发布仅在 Skills (Bridge) 模式下可用"},publishLongArticle:async(e,t)=>jt(e)==="bridge"?$t(e,"long-article",{title:t.title,content:t.content,images:t.images||[]}):{success:!1,error:"长文发布仅在 Skills (Bridge) 模式下可用"},comment:async(e,t,s,o)=>{if(jt(e)==="bridge"){const r=hr(t),c=o||gr(t)||"";return $t(e,"post-comment",{feed_id:r,xsec_token:c,content:s})}const a={url:t,content:s};return o&&(a.xsec_token=o),Jt(e,"comment",a)},likeFeed:async(e,t,s,o=!1)=>jt(e)==="bridge"?$t(e,"like-feed",{feed_id:t,xsec_token:s,unlike:o}):Jt(e,"like_feed",{feed_id:t,xsec_token:s,...o?{unlike:!0}:{}}),favoriteFeed:async(e,t,s,o=!1)=>jt(e)==="bridge"?$t(e,"favorite-feed",{feed_id:t,xsec_token:s,unfavorite:o}):Jt(e,"favorite_feed",{feed_id:t,xsec_token:s,...o?{unfavorite:!0}:{}}),replyComment:async(e,t,s,o,a,r,c)=>{if(jt(e)==="bridge")return $t(e,"reply-comment",{feed_id:t,xsec_token:s,content:o,comment_id:a,user_id:r});const i={feed_id:t,xsec_token:s,content:o};return a&&(i.comment_id=a),r&&(i.user_id=r),c&&(i.parent_comment_id=c),Jt(e,"reply_comment",i)},getUserProfile:async(e,t,s)=>{if(jt(e)==="bridge")return $t(e,"user-profile",{user_id:t,xsec_token:s||""});const o={user_id:t};return s&&(o.xsec_token=s),Jt(e,"get_user_info",o)},login:async e=>jt(e)==="bridge"?$t(e,"login"):{success:!1,error:"登录功能仅在 Skills (Bridge) 模式下可用"},getQrcode:async e=>jt(e)==="bridge"?$t(e,"get-qrcode"):{success:!1,error:"二维码功能仅在 Skills (Bridge) 模式下可用"},logout:async e=>jt(e)==="bridge"?$t(e,"delete-cookies"):{success:!1,error:"登出功能仅在 Skills (Bridge) 模式下可用"}},aa=e=>{if(!e)return[];if(Array.isArray(e))return e.length>0&&Array.isArray(e[0])?(console.log(`[XHS] extractNotes: 检测到嵌套数组，展平 (${e.length} 组)`),e.flat().filter(t=>t&&typeof t=="object"&&!Array.isArray(t))):e;for(const t of["notes","items","feeds","data","list","results","note_list","noteList"])if(Array.isArray(e[t])){const s=e[t];return s.length>0&&Array.isArray(s[0])?(console.log(`[XHS] extractNotes: data.${t} 是嵌套数组，展平`),s.flat().filter(o=>o&&typeof o=="object"&&!Array.isArray(o))):s}if(e.data&&typeof e.data=="object"&&!Array.isArray(e.data)){for(const t of["notes","items","feeds","list","results","note_list","noteList"])if(Array.isArray(e.data[t]))return console.log(`[XHS] extractNotes: 从 data.data.${t} 找到数组, length=${e.data[t].length}`),e.data[t]}if(typeof e=="object"){const t=new Set(["interactions","tags","images","comments","replies"]);for(const[s,o]of Object.entries(e))if(!t.has(s)&&Array.isArray(o)&&o.length>0){const a=o[0];if(a&&typeof a=="object"&&(a.noteId||a.note_id||a.id||a.noteCard||a.displayTitle||a.title||a.desc||a.cover))return console.log(`[XHS] extractNotes: 在 key "${s}" 中找到笔记数组, length=${o.length}`),o}}return typeof e=="string"?(console.warn("[XHS] extractNotes: data 是纯文本，无法提取笔记:",e.slice(0,200)),[]):(console.warn("[XHS] extractNotes: 未找到笔记数组, data keys:",Object.keys(e)),[])},ra=e=>{var c,i,l,d,u,p,f,g,x,b,S,_;const t=e.noteCard||e.notecard,s=(t==null?void 0:t.cover)||e.cover,o=typeof s=="string"?s:(s==null?void 0:s.urlDefault)||(s==null?void 0:s.url_default)||(s==null?void 0:s.url)||(s==null?void 0:s.urlPre)||void 0,a=o==null?void 0:o.replace(/^http:\/\//,"https://"),r=e.likes||e.liked_count||((c=e.interact_info)==null?void 0:c.liked_count)||((i=e.interactInfo)==null?void 0:i.likedCount)||((l=t==null?void 0:t.interact_info)==null?void 0:l.liked_count)||((d=t==null?void 0:t.interactInfo)==null?void 0:d.likedCount)||0;return{noteId:e.noteId||e.note_id||e.id||(t==null?void 0:t.note_id)||(t==null?void 0:t.noteId)||(t==null?void 0:t.noteId)||"",title:e.title||e.display_title||e.displayTitle||(t==null?void 0:t.display_title)||(t==null?void 0:t.displayTitle)||"",desc:(e.desc||e.description||e.content||(t==null?void 0:t.desc)||(t==null?void 0:t.description)||(t==null?void 0:t.title)||"").slice(0,500),author:e.author||e.nickname||((u=e.user)==null?void 0:u.nickname)||((p=e.user)==null?void 0:p.name)||((f=t==null?void 0:t.user)==null?void 0:f.nickname)||((g=t==null?void 0:t.user)==null?void 0:g.name)||"",authorId:e.authorId||e.author_id||((x=e.user)==null?void 0:x.user_id)||((b=e.user)==null?void 0:b.userId)||((S=t==null?void 0:t.user)==null?void 0:S.user_id)||((_=t==null?void 0:t.user)==null?void 0:_.userId)||"",likes:typeof r=="string"?parseInt(r,10)||0:r||0,xsecToken:e.xsecToken||e.xsec_token||(t==null?void 0:t.xsec_token)||(t==null?void 0:t.xsecToken)||void 0,coverUrl:a,type:e.type||(t==null?void 0:t.type)||void 0}};function vo(e,t){const s=t==null?void 0:t.xhsMcpConfig,o=!!(s!=null&&s.enabled&&(s!=null&&s.serverUrl)),a=(s==null?void 0:s.serverUrl)||"",r=s==null?void 0:s.loggedInUserId,c=s==null?void 0:s.loggedInNickname,i=s==null?void 0:s.userXsecToken;return e.xhsEnabled!==void 0?{enabled:!!e.xhsEnabled&&o,mcpUrl:a,loggedInUserId:r,loggedInNickname:c,userXsecToken:i}:{enabled:!!(t!=null&&t.xhsEnabled)&&o,mcpUrl:a,loggedInUserId:r,loggedInNickname:c,userXsecToken:i}}async function El(e,t){var i;const{char:s}=t,o=`${e.year}-${e.month.padStart(2,"0")}`;if(!!((i=s.activeMemoryMonths)!=null&&i.includes(o)))return{ok:!0,alreadyActive:!0,yearMonth:o,logsText:null};if(!s.memories)return{ok:!1,reason:"no_logs",yearMonth:o};const r=s.memories.filter(l=>l.date.includes(o)||l.date.includes(`${e.year}年${parseInt(e.month)}月`));if(r.length===0)return{ok:!1,reason:"no_logs",yearMonth:o};const c=r.map(l=>`[${l.date}] (${l.mood||"normal"}): ${l.summary}`).join(`
`);return{ok:!0,alreadyActive:!1,yearMonth:o,logsText:c}}async function Tl(e,t){const{realtimeConfig:s}=t;if(!(s!=null&&s.newsEnabled)||!(s!=null&&s.newsApiKey))return{ok:!1,reason:"no_api_key",query:e.query};const o=await wt.performSearch(e.query,s.newsApiKey);if(!o.success||o.results.length===0)return{ok:!1,reason:"no_results",query:e.query,message:o.message};const a=o.results.map((r,c)=>`${c+1}. ${r.title}
   ${r.description}`).join(`

`);return{ok:!0,query:e.query,resultsText:a,rawResultCount:o.results.length}}async function Ml(e,t){var l;const{char:s,realtimeConfig:o}=t;if(!(o!=null&&o.notionEnabled)||!(o!=null&&o.notionApiKey)||!(o!=null&&o.notionDatabaseId))return{ok:!1,reason:"not_configured",dateInput:e.date};const a=Bl(e.date);if(!a)return{ok:!1,reason:"parse_error",dateInput:e.date};const r=await Tt.getDiaryByDate(o.notionApiKey,o.notionDatabaseId,s.name,a);if(!r.success||r.entries.length===0)return{ok:!1,reason:"not_found",date:a};(l=t.onProgress)==null||l.call(t,"diary",`找到 ${r.entries.length} 篇日记，正在阅读...`);const c=[];for(const d of r.entries){const u=await Tt.readDiaryContent(o.notionApiKey,d.id);u.success&&c.push(`📔「${d.title}」(${d.date})
${u.content}`)}if(c.length===0)return{ok:!1,reason:"empty_content",date:a};const i=c.join(`

---

`);return{ok:!0,date:a,diaryText:i,entryCount:r.entries.length}}async function Rl(e,t){var l;const{char:s,realtimeConfig:o}=t;if(!(o!=null&&o.feishuEnabled)||!(o!=null&&o.feishuAppId)||!(o!=null&&o.feishuAppSecret)||!(o!=null&&o.feishuBaseId)||!(o!=null&&o.feishuTableId))return{ok:!1,reason:"not_configured",dateInput:e.date};const a=Bl(e.date);if(!a)return{ok:!1,reason:"parse_error",dateInput:e.date};const r=await Pt.getDiaryByDate(o.feishuAppId,o.feishuAppSecret,o.feishuBaseId,o.feishuTableId,s.name,a);if(!r.success||r.entries.length===0)return{ok:!1,reason:"not_found",date:a};(l=t.onProgress)==null||l.call(t,"diary",`找到 ${r.entries.length} 篇飞书日记，正在阅读...`);const c=[];for(const d of r.entries)c.push(`📒「${d.title}」(${d.date})
${d.content}`);if(c.length===0)return{ok:!1,reason:"empty_content",date:a};const i=c.join(`

---

`);return{ok:!0,date:a,diaryText:i,entryCount:r.entries.length}}async function Dl(e,t){var c;const{realtimeConfig:s}=t;if(!(s!=null&&s.notionEnabled)||!(s!=null&&s.notionApiKey)||!(s!=null&&s.notionNotesDatabaseId))return{ok:!1,reason:"not_configured",keyword:e.keyword};const o=await Tt.searchUserNotes(s.notionApiKey,s.notionNotesDatabaseId,e.keyword,3);if(!o.success||o.entries.length===0)return{ok:!1,reason:"not_found",keyword:e.keyword};(c=t.onProgress)==null||c.call(t,"diary",`找到 ${o.entries.length} 篇笔记，正在阅读...`);const a=[];for(const i of o.entries){const l=await Tt.readNoteContent(s.notionApiKey,i.id);l.success&&a.push(`📝「${i.title}」(${i.date})
${l.content}`)}if(a.length===0)return{ok:!1,reason:"empty_content",keyword:e.keyword};const r=a.join(`

---

`);return{ok:!0,keyword:e.keyword,noteText:r,entryCount:o.entries.length}}async function Ur(e,t){const s=await qt.search(e.mcpUrl,t);return s.success?{success:!0,notes:aa(s.data).map(a=>ra(a))}:{success:!1,notes:[],message:s.error}}async function Qm(e){var a;const t=await qt.getRecommend(e.mcpUrl);if(!t.success)return{success:!1,notes:[],message:t.error};const s=(a=t.data)!=null&&a.data&&typeof t.data.data=="object"&&!Array.isArray(t.data.data)?t.data.data:t.data;console.log(`📕 [XHS] getRecommend 响应类型: ${typeof t.data}, 是否有 data 嵌套: ${s!==t.data}, unwrapped keys: ${s&&typeof s=="object"?Object.keys(s).join(","):"N/A"}`);const o=aa(s);return o.length===0&&s!==t.data?(console.log("📕 [XHS] getRecommend unwrapped 提取为空，用原始数据重试"),{success:!0,notes:aa(t.data).map(c=>ra(c))}):{success:!0,notes:o.map(r=>ra(r))}}function yo(e,t){if(e)for(const s of t)s.noteId&&s.xsecToken&&e.xsecTokenCache.set(s.noteId,s.xsecToken),s.noteId&&s.title&&e.noteTitleCache.set(s.noteId,s.title)}function Zm(e,t,s){var a;const o=(a=t.find(r=>r.noteId===s))==null?void 0:a.xsecToken;return o||(e==null?void 0:e.xsecTokenCache.get(s))}async function Pl(e,t){const s=vo(t.char,t.realtimeConfig);if(!s.enabled)return{ok:!1,reason:"not_enabled",keyword:e.keyword};const o=await Ur(s,e.keyword);if(!o.success||o.notes.length===0)return{ok:!1,reason:"no_results",keyword:e.keyword,message:o.message};t.lastXhsNotesRef&&(t.lastXhsNotesRef.current=o.notes),yo(t.xhsCaches,o.notes);const a=o.notes.map((r,c)=>`${c+1}. [noteId=${r.noteId}]「${r.title}」by ${r.author} (${r.likes}赞)
   ${r.desc}`).join(`

`);return{ok:!0,keyword:e.keyword,notesText:a,notes:o.notes}}async function Ll(e,t){var r;const s=vo(t.char,t.realtimeConfig);if(!s.enabled)return{ok:!1,reason:"not_enabled",category:e.category};const o=await Qm(s);if(console.log("📕 [XHS] 浏览结果:",o.success,o.message,((r=o.notes)==null?void 0:r.length)||0),!o.success||o.notes.length===0)return{ok:!1,reason:"no_results",category:e.category,message:o.message};t.lastXhsNotesRef&&(t.lastXhsNotesRef.current=o.notes),yo(t.xhsCaches,o.notes);const a=o.notes.map((c,i)=>`${i+1}. [noteId=${c.noteId}]「${c.title}」by ${c.author} (${c.likes}赞)
   ${c.desc}`).join(`

`);return{ok:!0,category:e.category,notesText:a,notes:o.notes}}async function Ol(e,t){var d,u,p,f;const s=vo(t.char,t.realtimeConfig);if(!s.enabled)return{ok:!1,reason:"not_enabled"};const o=s.loggedInNickname||"",a=s.loggedInUserId||"";if(!o&&!a)return{ok:!1,reason:"no_identity"};let r="",c="（获取笔记失败）",i=!1,l=[];if(a){console.log(`📕 [XHS] 用 getUserProfile(${a}) 获取主页...`),(d=t.onProgress)==null||d.call(t,"xhs","正在获取主页信息...");try{const g=await qt.getUserProfile(s.mcpUrl,a,s.userXsecToken);if(g.success&&g.data){const x=g.data;if(typeof x=="string")r=x.slice(0,3e3),i=!0;else{const b=((u=x.data)==null?void 0:u.basic_info)||x.basic_info;if(b)r=JSON.stringify(b,null,2).slice(0,2e3);else{const{notes:I,...D}=x.data&&typeof x.data=="object"?x.data:x;r=Object.keys(D).length>0?JSON.stringify(D,null,2).slice(0,2e3):"（主页基本信息暂时无法获取）"}i=!0;const S=x.data&&typeof x.data=="object"&&!Array.isArray(x.data)?x.data:x;console.log("📕 [XHS] profile unwrapped keys:",Object.keys(S),"notes isArray:",Array.isArray(S.notes),"notes length:",(p=S.notes)==null?void 0:p.length);const _=aa(S);if(console.log(`📕 [XHS] extractNotesFromMcpData 返回 ${_.length} 条笔记`),_.length>0){console.log("📕 [XHS] 第一条笔记原始 keys:",Object.keys(_[0]),"noteCard?",!!_[0].noteCard,"id?",_[0].id||_[0].noteId);const I=_.map(v=>ra(v));console.log("📕 [XHS] 归一化后第一条:",JSON.stringify(I[0]).slice(0,300));const D=I.filter(v=>v.noteId);D.length===0&&console.warn("📕 [XHS] ⚠️ 所有笔记归一化后 noteId 为空！原始数据:",JSON.stringify(_[0]).slice(0,500)),l=D.length>0?D:I,yo(t.xhsCaches,l),c=l.slice(0,8).map((v,T)=>`${T+1}. [noteId=${v.noteId}]「${v.title||"无标题"}」by ${v.author||"未知"} (${v.likes||0}赞)
   ${v.desc||"（无描述）"}`).join(`

`),console.log("📕 [XHS] feedsStr 预览:",c.slice(0,300))}else console.warn("📕 [XHS] ⚠️ extractNotesFromMcpData 返回空数组! unwrapped:",JSON.stringify(S).slice(0,500))}console.log(`📕 [XHS] getUserProfile 成功，数据长度: ${r.length}`)}}catch(g){console.warn("📕 [XHS] getUserProfile 失败，降级到搜索:",g)}}if(!i&&o){console.log(`📕 [XHS] 降级: 用昵称「${o}」搜索...`),(f=t.onProgress)==null||f.call(t,"xhs","正在搜索你的笔记...");const g=await Ur(s,o);g.success&&g.notes.length>0?(l=g.notes,yo(t.xhsCaches,g.notes),c=g.notes.slice(0,8).map((x,b)=>`${b+1}. [noteId=${x.noteId}]「${x.title}」by ${x.author} (${x.likes}赞)
   ${x.desc||"（无描述）"}`).join(`

`)):c="（没有搜到相关笔记）"}return t.lastXhsNotesRef&&l.length>0&&(t.lastXhsNotesRef.current=l),{ok:!0,nickname:o,userId:a,profileStr:r,feedsStr:c,gotProfile:i,notes:l}}async function Fl(e,t){var d,u,p,f,g,x,b,S,_,I,D,v,T,Z,G,w,k,P,W;const s=vo(t.char,t.realtimeConfig);if(!s.enabled)return{ok:!1,reason:"not_enabled",noteId:e.noteId};const o=((d=t.lastXhsNotesRef)==null?void 0:d.current)??[];let a=Zm(t.xhsCaches,o,e.noteId);console.log("📕 [XHS] AI要查看笔记详情:",e.noteId,a?"(有xsecToken)":"(无xsecToken)");let r=await qt.getNoteDetail(s.mcpUrl,e.noteId,a,{loadAllComments:!0});if(!r.success||!r.data){const Y=(u=t.xhsCaches)==null?void 0:u.noteTitleCache.get(e.noteId);if(Y){console.log(`📕 [XHS] 详情失败，尝试重新搜索「${Y}」以刷新 xsecToken...`),(p=t.onProgress)==null||p.call(t,"xhs","正在刷新访问凭证...");const ee=await Ur(s,Y);if(ee.success&&ee.notes.length>0){yo(t.xhsCaches,ee.notes),t.lastXhsNotesRef&&(t.lastXhsNotesRef.current=ee.notes);const V=ee.notes.find(q=>q.noteId===e.noteId);V!=null&&V.xsecToken?(a=V.xsecToken,console.log("📕 [XHS] 拿到新 xsecToken，重试 detail..."),(f=t.onProgress)==null||f.call(t,"xhs","正在查看笔记详情..."),r=await qt.getNoteDetail(s.mcpUrl,e.noteId,a,{loadAllComments:!0})):console.warn(`📕 [XHS] 重新搜索结果中未找到 noteId=${e.noteId}`)}else console.warn(`📕 [XHS] 重新搜索「${Y}」失败:`,ee.message)}else console.warn("📕 [XHS] 详情失败且无缓存标题，无法重试")}if(r.success&&r.data&&typeof r.data=="object"){const Y=r.data,ee=Y.note||Y,V=(ee==null?void 0:ee.xsecToken)||(ee==null?void 0:ee.xsec_token)||(Y==null?void 0:Y.xsecToken);if(V&&e.noteId&&t.xhsCaches&&(t.xhsCaches.xsecTokenCache.set(e.noteId,V),console.log(`📕 [XHS] 从 detail 缓存 xsecToken: ${e.noteId}`)),t.xhsCaches){const q=t.xhsCaches,ne=(Ee,he)=>{var be,me,we,de;for(const y of Ee){const ge=y.id||y.commentId||y.comment_id,Me=((be=y.userInfo)==null?void 0:be.userId)||((me=y.userInfo)==null?void 0:me.user_id)||y.user_id||y.userId,Ce=((we=y.userInfo)==null?void 0:we.nickname)||((de=y.userInfo)==null?void 0:de.name)||y.nickname||y.userName||y.user_name;ge&&Me&&q.commentUserIdCache.set(ge,Me),ge&&Ce&&q.commentAuthorNameCache.set(ge,Ce),ge&&he&&q.commentParentIdCache.set(ge,he),Array.isArray(y.subComments)&&ne(y.subComments,ge),Array.isArray(y.sub_comments)&&ne(y.sub_comments,ge)}},Ne=((x=(g=Y.data)==null?void 0:g.comments)==null?void 0:x.list)||((b=Y.comments)==null?void 0:b.list)||((S=Y.data)==null?void 0:S.comments)||Y.comments||((I=(_=Y.note)==null?void 0:_.comments)==null?void 0:I.list)||((D=Y.note)==null?void 0:D.comments);Array.isArray(Ne)?(ne(Ne),console.log(`📕 [XHS] 缓存了 ${q.commentUserIdCache.size} 条评论的 userId, ${q.commentAuthorNameCache.size} 条 authorName`)):console.warn("📕 [XHS] 未找到评论数组, d keys:",Object.keys(Y),"d.note keys:",Y.note?Object.keys(Y.note):"N/A")}}const c=r.success?r.data:null;let i;if(c)if(typeof c=="string")c.includes("失败")||c.includes("not found")?i=`[加载失败: ${c.slice(0,200)}]`:i=c.slice(0,5e3);else{const Y=c.data&&typeof c.data=="object"?c.data:null,ee=(Y==null?void 0:Y.note)||c.note||c,V=ee.title||ee.displayTitle||ee.display_title||"",q=(ee.desc||ee.description||ee.content||"").slice(0,1500),ne=((v=ee.user)==null?void 0:v.nickname)||ee.author||"",Ne=((T=ee.interactInfo)==null?void 0:T.likedCount)||ee.likes||0,Ee=((Z=ee.interactInfo)==null?void 0:Z.collectedCount)||ee.collects||0,he=((G=ee.interactInfo)==null?void 0:G.shareCount)||0,be=((w=ee.interactInfo)==null?void 0:w.commentCount)||0,me=ee.time?new Date(ee.time).toLocaleString("zh-CN"):"",we=ee.ipLocation||"";let de=`📝 笔记详情:
标题: ${V}
作者: ${ne}`;me&&(de+=`
发布时间: ${me}`),we&&(de+=`
 IP: ${we}`),de+=`
互动: ${Ne}赞 ${Ee}收藏 ${be}评论 ${he}分享`,de+=`

正文:
${q}`;const y=((k=Y==null?void 0:Y.comments)==null?void 0:k.list)||(Y==null?void 0:Y.comments)||((P=c.comments)==null?void 0:P.list)||c.comments||((W=ee.comments)==null?void 0:W.list)||ee.comments||[],ge=Array.isArray(y)?y:[];let Me="";if(ge.length>0){const Ce=(Se,Ye="")=>{var te;const Ke=((te=Se.userInfo)==null?void 0:te.nickname)||Se.nickname||Se.userName||"匿名",ye=Se.content||"",se=Se.likeCount||Se.like_count||Se.likes||0,ie=Se.id||Se.commentId||Se.comment_id||"";let $e=`${Ye}${Ke}: ${ye} (${se}赞) [commentId=${ie}]`;const ze=Se.subComments||Se.sub_comments||[];return Array.isArray(ze)&&ze.length>0&&($e+=`
`+ze.slice(0,10).map(U=>Ce(U,Ye+"  ↳ ")).join(`
`)),$e};Me=`

💬 评论区 (${ge.length}条):
`+ge.slice(0,30).map(Se=>Ce(Se)).join(`
`)}else Me=`

💬 评论区: （暂无评论）`;i=(de+Me).slice(0,8e3)}else i=`[加载失败: ${r.error||"无法获取笔记详情，可能需要先在搜索/浏览结果中看到这条笔记"}]`;const l=i.startsWith("[加载失败");return{ok:!0,noteId:e.noteId,detailText:i,failed:l}}function Bl(e){const t=new Date;if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;if(e==="今天")return t.toISOString().split("T")[0];if(e==="昨天"){const r=new Date(t);return r.setDate(r.getDate()-1),r.toISOString().split("T")[0]}if(e==="前天"){const r=new Date(t);return r.setDate(r.getDate()-2),r.toISOString().split("T")[0]}const s=e.match(/^(\d+)天前$/);if(s){const r=new Date(t);return r.setDate(r.getDate()-parseInt(s[1])),r.toISOString().split("T")[0]}const o=e.match(/(\d{1,2})月(\d{1,2})/);if(o)return`${t.getFullYear()}-${o[1].padStart(2,"0")}-${o[2].padStart(2,"0")}`;const a=new Date(e);return isNaN(a.getTime())?"":a.toISOString().split("T")[0]}async function ef(e,t,s){switch(e){case"recall":return El(t,s);case"web_search":return Tl(t,s);case"notion_read_diary":return Ml(t,s);case"feishu_read_diary":return Rl(t,s);case"read_note":return Dl(t,s);case"xhs_search":return Pl(t,s);case"xhs_browse":return Ll(t,s);case"xhs_my_profile":return Ol(t,s);case"xhs_detail":return Fl(t,s);default:throw new Error(`Unknown agentic tool: ${e}`)}}const Rt=e=>{let t=e||"";return t=t.replace(/<(think|thinking|thought)>[\s\S]*?<\/\1>/gi,""),t=t.replace(/<(?:think|thinking|thought)>[\s\S]*$/gi,""),t=t.replace(/\[\d{4}[-/年]\d{1,2}[-/月]\d{1,2}.*?\]/g,""),t=t.replace(/^[\w一-龥]+:\s*/,""),t=t.replace(/\s*\[(?:聊天|通话|约会)\]\s*/g,`
`),t=t.replace(/\[(?:你|User|用户|System)\s*发送了表情包[:：]\s*(.*?)\]/g,"[[SEND_EMOJI: $1]]"),t};async function sc(e,t,s,o){var c,i;let a=[];try{const l=await $.getXhsStockImages();if(l.length>0){const d=[t,s,...o].join(" ").toLowerCase(),u=l.map(p=>({img:p,score:p.tags.reduce((f,g)=>f+(d.includes(g.toLowerCase())?10:0),0)+Math.max(0,5-(p.usedCount||0))})).sort((p,f)=>f.score-p.score);(c=u[0])!=null&&c.img.url&&(a=[u[0].img.url],$.updateXhsStockImageUsage(u[0].img.id).catch(()=>{}))}}catch{}const r=await qt.publishNote(e.mcpUrl,{title:t,content:s,tags:o,images:a.length>0?a:void 0});return{success:r.success,noteId:(i=r.data)==null?void 0:i.noteId,message:r.error||(r.success?"发布成功":"发布失败")}}async function Tn(e,t,s,o){const a=await qt.comment(e.mcpUrl,t,s,o);return{success:a.success,message:a.error||(a.success?"评论成功":"评论失败")}}async function nc(e,t,s){const o=await qt.likeFeed(e.mcpUrl,t,s);return{success:o.success,message:o.error||(o.success?"点赞成功":"点赞失败")}}async function oc(e,t,s){const o=await qt.favoriteFeed(e.mcpUrl,t,s);return{success:o.success,message:o.error||(o.success?"收藏成功":"收藏失败")}}async function Co(e,t,s,o,a,r,c){const i=await qt.replyComment(e.mcpUrl,t,s,o,a,r,c);return{success:i.success,message:i.error||(i.success?"回复成功":"回复失败")}}function tf(e){if(!e||e.length===0)return"";const t=[];for(const s of e)switch(s.type){case"poke":t.push("[[ACTION:POKE]]");break;case"transfer":t.push(`[[ACTION:TRANSFER:${s.amount}]]`);break;case"add_event":t.push(`[[ACTION:ADD_EVENT|${s.title}|${s.date}]]`);break;case"schedule_message":t.push(`[schedule_message | ${s.time} | fixed | ${s.text}]`);break;case"music_action":{const o=s.args&&s.args.length>0?`|${s.args.join("|")}`:"";t.push(`[[MUSIC_ACTION:${s.verb}${o}]]`);break}case"xhs_like":t.push(`[[XHS_LIKE:${s.noteId}]]`);break;case"xhs_fav":t.push(`[[XHS_FAV:${s.noteId}]]`);break;case"xhs_comment":t.push(`[[XHS_COMMENT:${s.noteId} | ${s.text}]]`);break;case"xhs_reply":t.push(`[[XHS_REPLY:${s.noteId} | ${s.commentId} | ${s.text}]]`);break;case"xhs_post":t.push(`[[XHS_POST:${s.title} | ${s.content} | ${s.tags}]]`);break;case"xhs_share":t.push(`[[XHS_SHARE:${s.idx}]]`);break;case"notion_write_diary":{const o=s.mood?`${s.title}|${s.mood}`:s.title;t.push(`[[DIARY_START: ${o}]]
${s.content}
[[DIARY_END]]`);break}case"feishu_write_diary":{const o=s.mood?`${s.title}|${s.mood}`:s.title;t.push(`[[FS_DIARY_START: ${o}]]
${s.content}
[[FS_DIARY_END]]`);break}default:console.warn("[directive-replay] unknown directive type, skipping",s)}return t.length>0?`${t.join(`
`)}

`:""}async function Ul(e,t){var Ts,_s,en,tn,sn,Ms,nn,on,an,rn,cn,ln,vt,Ot,ms,Zt,es,ts,rt,Ft,Rs,Qe,ht,it,kt,fs,ss,Ge,vn,Jn,_n,Ss,Sn,Ds,dn,ns,Ps,un,pn,kn,mn,ks,Nt,pt;const{char:s,userProfile:o,emojis:a,realtimeConfig:r,contextMsgs:c,fullMessages:i,initialData:l,historyMsgCount:d,mcdInheritMeta:u,xhsCaches:p,api:f,hooks:g,skipSecondPassLLM:x,directives:b,reasoningContent:S}=t,{baseUrl:_,headers:I,effectiveApi:D}=f,{setMessages:v,addToast:T,setRecallStatus:Z=()=>{},setSearchStatus:G=()=>{},setDiaryStatus:w=()=>{},setXhsStatus:k=()=>{},updateTokenUsage:P=()=>{},musicHooks:W}=g,{xsecTokenCache:Y,commentUserIdCache:ee,commentAuthorNameCache:V,commentParentIdCache:q}=p,ne={appName:"消息",charId:s.id,charName:s.name},Ne=tf(b),Ee=!!b&&b.length>0,he=x&&!Ee,be=(z,F)=>{var J;const H=(J=F.find(Te=>Te.noteId===z))==null?void 0:J.xsecToken;return H||Y.get(z)},me=t.lastXhsNotesRef??{current:[]},we={char:s,userProfile:o,realtimeConfig:r,xhsCaches:t.xhsCaches,lastXhsNotesRef:me,onProgress:(z,F)=>{z==="xhs"?k(F):z==="diary"&&w(F)}};let de=l,y=Ne?`${Ne}${e}`:e;y=Rt(y);const ge=/\[\[(?:QU[OA]TE|引用)[：:]\s*([\s\S]*?)\]\]/,Me=/\[(?:QU[OA]TE|引用)[：:]\s*([^\]]*)\]/,Ce=/\[回复\s*[""“]([^""”]*?)[""”](?:\.{0,3})\]\s*[：:]?\s*/,Se=/\[[^\[\]\n「」]{0,24}引用了[^\[\]\n「」]{0,24}「([^」\n]*?)」[^\[\]\n]{0,24}\]\s*/,Ye=/\[\[(?:QU[OA]TE|引用)[：:][\s\S]*?\]\]/g,Ke=/\[(?:QU[OA]TE|引用)[：:][^\]]*\]/g,ye=/\[回复\s*[""“][^""”]*?[""”](?:\.{0,3})\]\s*[：:]?\s*/g,se=/\[[^\[\]\n「」]{0,24}引用了[^\[\]\n「」]{0,24}「[^」\n]*?」[^\[\]\n]{0,24}\]\s*/g,ie=(z,F)=>{var C,E,X,O,re,fe;if(!s.showThinkingChain)return null;const H=((X=(E=(C=z==null?void 0:z.choices)==null?void 0:C[0])==null?void 0:E.message)==null?void 0:X.content)||"",J=(F&&F.trim()||((fe=(re=(O=z==null?void 0:z.choices)==null?void 0:O[0])==null?void 0:re.message)==null?void 0:fe.reasoning_content)||"").trim(),Te=[],m=/<(think|thinking|thought)>([\s\S]*?)<\/\1>/gi;let j;for(;(j=m.exec(H))!==null;){const le=j[2].trim();le&&Te.push(le)}if(!/<\/(?:think|thinking|thought)>/i.test(H)){const le=H.match(/<(?:think|thinking|thought)>([\s\S]*$)/i);le&&le[1].trim()&&Te.push(le[1].trim())}return[J,...Te].filter(le=>!!le).join(`

`).trim()||null},$e=async(z,F)=>{let H=F?{thinkingChain:F}:null;const J=X=>{const O=H?{...X||{},...H}:X;return H=null,O},Te=X=>{var A,ae;const O=(X||"").trim(),re=[],fe=je=>{const Ue=(je||"").trim().replace(/(?:[…⋯]+|\.{3,})$/,"").trim();Ue&&!re.includes(Ue)&&re.push(Ue)};fe((A=O.match(/<原文>([\s\S]*?)<\/原文>/))==null?void 0:A[1]),fe((ae=O.match(/<译文>([\s\S]*?)<\/译文>/))==null?void 0:ae[1]),fe(O.replace(/<\/?翻译>|<\/?原文>|<\/?译文>/g,"").replace(/%%BILINGUAL%%/gi,""));const le=c.filter(je=>je.role==="user"&&typeof je.content=="string"&&!!je.content.trim()),xe=le.slice().reverse();let ce;for(const je of re)if(ce=xe.find(Ue=>Ue.content.includes(je))||(je.length>10?xe.find(Ue=>Ue.content.includes(je.slice(0,10))):void 0),ce)break;if(ce||(ce=le.filter(je=>je.type==="text"||!je.type).slice(-1)[0]||le.slice(-1)[0]),!ce)return;const ve=ce.content.length>10?ce.content.slice(0,10)+"...":ce.content;return{id:ce.id,content:ve,name:o.name}};let m;const j=z.match(ge)||z.match(Me)||z.match(Ce)||z.match(Se);j&&(m=Te(j[1]));let B=st.sanitize(z,{keepCitations:!0});if(B=B.replace(/\[\[INNER_STATE:\s*[\s\S]*?\]\]/g,"").trim(),!B)return;const C=/<翻译>\s*<原文>[\s\S]*?<\/原文>\s*<译文>[\s\S]*?<\/译文>\s*<\/翻译>/.test(B);let E=0;if(C){const X=[];let O;const re=/\[\[SEND_EMOJI:\s*(.*?)\]\]/g;for(;(O=re.exec(B))!==null;){const ve=O[1].trim();X.includes(ve)||X.push(ve)}B=B.replace(/\[\[SEND_EMOJI:\s*.*?\]\]/g,"").trim();const fe=/<翻译>\s*<原文>([\s\S]*?)<\/原文>\s*<译文>([\s\S]*?)<\/译文>\s*<\/翻译>/g;let le=0,xe;for(;(xe=fe.exec(B))!==null;){const ve=B.slice(le,xe.index).trim();if(ve){const je=st.sanitize(ve);if(je&&st.hasDisplayContent(je)){const Ue=st.chunkText(je);for(const ct of Ue){if(!ct)continue;const lt=E===0?m:void 0;await new Promise(oe=>setTimeout(oe,Math.min(Math.max(ct.length*50,500),2e3))),await $.saveMessage({charId:s.id,role:"assistant",type:"text",content:ct,replyTo:lt,metadata:J(u)}),v(await $.getRecentMessagesByCharId(s.id,200)),E++}}}const A=st.sanitize(xe[1].trim()),ae=st.sanitize(xe[2].trim());if(A||ae){const je=A&&ae?`${A}
%%BILINGUAL%%
${ae}`:A||ae,Ue=E===0?m:void 0;await new Promise(ct=>setTimeout(ct,Math.min(Math.max(je.length*30,400),2e3))),await $.saveMessage({charId:s.id,role:"assistant",type:"text",content:je,replyTo:Ue,metadata:J(u)}),v(await $.getRecentMessagesByCharId(s.id,200)),E++}le=xe.index+xe[0].length}const ce=B.slice(le).trim();if(ce){const ve=st.sanitize(ce.replace(/<\/?翻译>|<\/?原文>|<\/?译文>/g,"").trim());if(ve&&st.hasDisplayContent(ve)){const A=st.chunkText(ve);for(const ae of A){if(!ae)continue;const je=E===0?m:void 0;await new Promise(Ue=>setTimeout(Ue,Math.min(Math.max(ae.length*50,500),2e3))),await $.saveMessage({charId:s.id,role:"assistant",type:"text",content:ae,replyTo:je,metadata:J(u)}),v(await $.getRecentMessagesByCharId(s.id,200)),E++}}}for(const ve of X){const A=a.find(ae=>ae.name===ve);A&&(await new Promise(ae=>setTimeout(ae,Math.random()*500+300)),await $.saveMessage({charId:s.id,role:"assistant",type:"emoji",content:A.url,metadata:J(u)}),v(await $.getRecentMessagesByCharId(s.id,200)))}}else{const X=st.splitResponse(B);let O;for(let re=0;re<X.length;re++){const fe=X[re];if(fe.type==="emoji"){const le=a.find(xe=>xe.name===fe.content);le&&(await new Promise(xe=>setTimeout(xe,Math.random()*500+300)),await $.saveMessage({charId:s.id,role:"assistant",type:"emoji",content:le.url,metadata:J(u)}),v(await $.getRecentMessagesByCharId(s.id,200)))}else{const le=fe.content.split(/^\s*---\s*$/m).filter(ce=>ce.trim()),xe=[];for(const ce of le)xe.push(...st.chunkText(ce.trim()));xe.length===0&&fe.content.trim()&&xe.push(fe.content.trim());for(let ce=0;ce<xe.length;ce++){let ve=xe[ce];const A=Math.min(Math.max(ve.length*50,500),2e3);await new Promise(lt=>setTimeout(lt,A));let ae;const je=ve.match(ge)||ve.match(Me)||ve.match(Ce)||ve.match(Se);je&&(ae=Te(je[1]),ve=ve.replace(Ye,"").replace(Ke,"").replace(ye,"").replace(se,"").trim());const Ue=ae??O;let ct=!1;if(st.hasDisplayContent(ve)){const lt=st.sanitize(ve);lt&&(await $.saveMessage({charId:s.id,role:"assistant",type:"text",content:lt,replyTo:Ue,metadata:J(u)}),v(await $.getRecentMessagesByCharId(s.id,200)),E++,ct=!0)}O=ct?void 0:Ue}}}}},ze=ie(l,S);let te=!1;const U=async z=>{te||(te=!0,await $e(z.replace(/\[\[READ_NOTE:[\s\S]*?\]\]/g,"").replace(/\[\[XHS_[A-Z_]+(?::[\s\S]*?)?\]\]/g,""),ze))};x||(/\[\[RECALL:\s*\d{4}[-/年]\d{1,2}\]\]/.test(y)||/\[\[SEARCH:\s*.+?\]\]/.test(y)||/\[\[READ_DIARY:\s*.+?\]\]/.test(y)||/\[\[FS_READ_DIARY:\s*.+?\]\]/.test(y)||/\[\[READ_NOTE:\s*.+?\]\]/.test(y)||/\[\[XHS_SEARCH:\s*.+?\]\]/.test(y)||/\[\[XHS_BROWSE(?::\s*.+?)?\]\]/.test(y)||/\[\[XHS_MY_PROFILE\]\]/.test(y)||/\[\[XHS_DETAIL:\s*.+?\]\]/.test(y))&&await U(y);const N=y.match(/\[\[RECALL:\s*(\d{4})[-/年](\d{1,2})\]\]/);if(!x&&N){const z=N[1],F=N[2],H=y.replace(/\[\[RECALL:\s*\d{4}[-/年]\d{1,2}\]\]/g,"").trim(),J=await El({year:z,month:F},we);if(J.ok&&J.alreadyActive)console.log(`♻️ [Recall] ${J.yearMonth} already in activeMemoryMonths, skipping duplicate recall`),y=y.replace(/\[\[RECALL:\s*\d{4}[-/年]\d{1,2}\]\]/g,"").trim();else if(J.ok&&J.logsText){Z(`正在调阅 ${z}年${F}月 的详细档案...`);const Te=[...i,...H?[{role:"assistant",content:H}]:[],{role:"user",content:`[系统: 已成功调取 ${z}-${F} 的详细日志]
${J.logsText}
[系统: 现在请结合这些细节回答用户。保持对话自然。]`}];try{de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:Te,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"调阅记忆"}),P(de,d,"recall"),y=((en=(_s=(Ts=de.choices)==null?void 0:Ts[0])==null?void 0:_s.message)==null?void 0:en.content)||"",y=Rt(y),T(`已调用 ${z}-${F} 详细记忆`,"info")}catch(m){console.error("Recall API failed:",m.message)}}else Z(`正在调阅 ${z}年${F}月 的详细档案...`)}Z("");const M=y.match(/\[\[SEARCH:\s*(.+?)\]\]/);if(!x&&M){const z=M[1].trim();console.log("🔍 [Search] AI触发搜索:",z),G(`正在搜索: ${z}...`);try{const F=await Tl({query:z},we);if(console.log("🔍 [Search] 搜索结果:",F),F.ok){console.log("🔍 [Search] 注入结果到AI，重新生成回复...");const H=y.replace(/\[\[SEARCH:.*?\]\]/g,"").trim()||"让我搜一下...",J=[...i,{role:"assistant",content:H},{role:"user",content:`[系统: 搜索完成！以下是关于"${z}"的搜索结果]

${F.resultsText}

[系统: 现在请根据这些真实信息回复用户。用自然的语气分享，比如"我刚搜了一下发现..."、"诶我看到说..."。不要再输出[[SEARCH:...]]了。]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:J,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"联网搜索"}),P(de,d,"search"),y=((Ms=(sn=(tn=de.choices)==null?void 0:tn[0])==null?void 0:sn.message)==null?void 0:Ms.content)||"",console.log("🔍 [Search] AI基于搜索结果生成的新回复:",y.slice(0,100)+"..."),y=Rt(y),T(`🔍 搜索完成: ${z}`,"success")}else F.reason==="no_api_key"?(console.log("🔍 [Search] 检测到搜索意图但未配置API Key"),y=y.replace(M[0],"").trim()):(console.log("🔍 [Search] 搜索失败或无结果:",F.message),T(`搜索失败: ${F.message}`,"error"),y=y.replace(M[0],"").trim())}catch(F){console.error("Search execution failed:",F),y=y.replace(M[0],"").trim()}}else M&&(console.log("🔍 [Search] 检测到搜索意图但未配置API Key"),y=y.replace(M[0],"").trim());G(""),y=y.replace(/\[\[SEARCH:.*?\]\]/g,"").trim();const L=y.match(/\[\[DIARY_START:\s*(.+?)\]\]\n?([\s\S]*?)\[\[DIARY_END\]\]/),Ie=L||y.match(/\[\[DIARY:\s*(.+?)\]\]/s);if(Ie&&(r!=null&&r.notionEnabled)&&(r!=null&&r.notionApiKey)&&(r!=null&&r.notionDatabaseId)){let z="",F="",H="";if(L){const m=L[1].trim();if(F=L[2].trim(),m.includes("|")){const j=m.split("|");z=j[0].trim(),H=j.slice(1).join("|").trim()}else z=m;console.log("📔 [Diary] AI写了一篇长日记:",z,"心情:",H)}else{const m=Ie[1].trim();if(console.log("📔 [Diary] AI想写日记:",m),m.includes("|")){const j=m.split("|");z=j[0].trim(),F=j.slice(1).join("|").trim()}else F=m}if(!z){const m=new Date;z=`${s.name}的日记 - ${m.getMonth()+1}/${m.getDate()}`}const J=Zi({kind:"notion",charId:s.id,charName:s.name,title:z,content:F,mood:H||void 0});if(typeof document>"u"||document.visibilityState==="visible")try{const m=await Tt.createDiaryPage(r.notionApiKey,r.notionDatabaseId,{title:z,content:F,mood:H||void 0,characterName:s.name});m.success?(Js(J),console.log("📔 [Diary] 写入成功:",m.url),await $.saveMessage({charId:s.id,role:"system",type:"text",content:`📔 ${s.name}写了一篇日记「${z}」`}),T(`📔 ${s.name}写了一篇日记!`,"success")):(Js(J),console.error("📔 [Diary] 写入失败:",m.message),T(`日记写入失败: ${m.message}`,"error"))}catch(m){console.error("📔 [Diary] 写入异常, 留待回前台重试:",m)}else console.log("📔 [Diary] 当前后台, 已入队待写, 回前台补打");y=y.replace(Ie[0],"").trim()}else Ie&&(console.log("📔 [Diary] 检测到日记意图但未配置Notion"),y=y.replace(Ie[0],"").trim());y=y.replace(/\[\[DIARY:.*?\]\]/gs,"").trim(),y=y.replace(/\[\[DIARY_START:.*?\]\][\s\S]*?\[\[DIARY_END\]\]/g,"").trim();const pe=y.match(/\[\[READ_DIARY:\s*(.+?)\]\]/),ke=async(z,F)=>{var Te,m,j;const H=y.replace(F,"").trim()||"让我翻翻日记...",J=[...i,{role:"assistant",content:H},{role:"user",content:`[系统: ${z}。请你：
1. 先正常回应用户刚才说的话（用户还在等你回复！）
2. 可以自然地提一下，比如"日记好像打不开诶"、"嗯...好像没找到"
3. 继续正常聊天，用多条消息回复
4. 严禁再输出[[READ_DIARY:...]]或[[FS_READ_DIARY:...]]标记]`}];try{de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:J,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"写日记"}),P(de,d,"diary-fallback"),y=((j=(m=(Te=de.choices)==null?void 0:Te[0])==null?void 0:m.message)==null?void 0:j.content)||"",y=Rt(y)}catch(B){console.error("📖 [Diary Fallback] 也失败了:",B),y=y.replace(F,"").trim()}},Ae=z=>{const F=new Date;if(/^\d{4}-\d{2}-\d{2}$/.test(z))return z;if(z==="今天")return F.toISOString().split("T")[0];if(z==="昨天"){const m=new Date(F);return m.setDate(m.getDate()-1),m.toISOString().split("T")[0]}if(z==="前天"){const m=new Date(F);return m.setDate(m.getDate()-2),m.toISOString().split("T")[0]}const H=z.match(/^(\d+)天前$/);if(H){const m=new Date(F);return m.setDate(m.getDate()-parseInt(H[1])),m.toISOString().split("T")[0]}const J=z.match(/(\d{1,2})月(\d{1,2})/);if(J)return`${F.getFullYear()}-${J[1].padStart(2,"0")}-${J[2].padStart(2,"0")}`;const Te=new Date(z);return isNaN(Te.getTime())?"":Te.toISOString().split("T")[0]};if(!x&&pe){const z=pe[1].trim();if(console.log("📖 [ReadDiary] AI想翻阅日记:",z),r!=null&&r.notionEnabled&&(r!=null&&r.notionApiKey)&&(r!=null&&r.notionDatabaseId)){const F=Ae(z);if(F)try{w(`正在翻阅 ${F} 的日记...`);const H=await Ml({date:z},we);if(H.ok){console.log("📖 [ReadDiary] 成功读取",H.entryCount,"篇日记"),w("正在整理日记回忆...");const J=y.replace(/\[\[READ_DIARY:.*?\]\]/g,"").trim()||"让我翻翻日记...",Te=[...i,{role:"assistant",content:J},{role:"user",content:`[系统: 你翻开了自己 ${F} 的日记，以下是你当时写的内容]

${H.diaryText}

[系统: 你已经看完了日记。现在请你：
1. 先正常回应用户刚才说的话（这是最重要的！用户还在等你回复）
2. 自然地把日记中的回忆融入你的回复中，比如"我想起来了那天..."、"看了日记才发现..."等
3. 可以分享日记中有趣的细节，表达当时的情绪
4. 用多条消息回复，别只说一句话就结束
5. 严禁再输出[[READ_DIARY:...]]标记]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:Te,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"翻阅日记"}),P(de,d,"read-diary-notion"),y=((an=(on=(nn=de.choices)==null?void 0:nn[0])==null?void 0:on.message)==null?void 0:an.content)||"",y=Rt(y),T(`📖 ${s.name}翻阅了${F}的日记`,"info")}else if(H.reason==="empty_content")console.log("📖 [ReadDiary] 日记内容为空"),await ke("你翻开了日记本但页面是空白的",/\[\[READ_DIARY:.*?\]\]/g);else{console.log("📖 [ReadDiary] 该日期没有日记:",F),w(`${F} 没有找到日记...`);const J=y.replace(/\[\[READ_DIARY:.*?\]\]/g,"").trim()||"让我翻翻日记...",Te=[...i,{role:"assistant",content:J},{role:"user",content:`[系统: 你翻了翻日记本，发现 ${F} 那天没有写日记。请你：
1. 先正常回应用户刚才说的话（用户还在等你回复！）
2. 自然地提到没找到那天的日记，比如"嗯...那天好像没写日记"、"翻了翻没找到诶"
3. 用多条消息回复，保持对话自然
4. 严禁再输出[[READ_DIARY:...]]标记]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:Te,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"翻阅日记"}),P(de,d,"no-diary-notion"),y=((ln=(cn=(rn=de.choices)==null?void 0:rn[0])==null?void 0:cn.message)==null?void 0:ln.content)||"",y=Rt(y)}}catch(H){console.error("📖 [ReadDiary] 读取异常:",H),w("日记读取失败，继续对话..."),await ke("你想翻阅日记但读取出了问题（可能是网络问题）",/\[\[READ_DIARY:.*?\]\]/g)}else console.log("📖 [ReadDiary] 无法解析日期:",z),await ke(`你想翻阅日记但没能理解要找哪天的（"${z}"）`,/\[\[READ_DIARY:.*?\]\]/g)}else console.log("📖 [ReadDiary] 检测到读日记意图但未配置Notion"),await ke("你想翻阅日记但日记本暂时不可用",/\[\[READ_DIARY:.*?\]\]/g);w("")}y=y.replace(/\[\[READ_DIARY:.*?\]\]/g,"").trim();const Re=y.match(/\[\[FS_DIARY_START:\s*(.+?)\]\]\n?([\s\S]*?)\[\[FS_DIARY_END\]\]/),We=Re||y.match(/\[\[FS_DIARY:\s*(.+?)\]\]/s);if(We&&(r!=null&&r.feishuEnabled)&&(r!=null&&r.feishuAppId)&&(r!=null&&r.feishuAppSecret)&&(r!=null&&r.feishuBaseId)&&(r!=null&&r.feishuTableId)){let z="",F="",H="";if(Re){const m=Re[1].trim();if(F=Re[2].trim(),m.includes("|")){const j=m.split("|");z=j[0].trim(),H=j.slice(1).join("|").trim()}else z=m;console.log("📒 [Feishu] AI写了一篇长日记:",z,"心情:",H)}else{const m=We[1].trim();if(console.log("📒 [Feishu] AI想写日记:",m),m.includes("|")){const j=m.split("|");z=j[0].trim(),F=j.slice(1).join("|").trim()}else F=m}if(!z){const m=new Date;z=`${s.name}的日记 - ${m.getMonth()+1}/${m.getDate()}`}const J=Zi({kind:"feishu",charId:s.id,charName:s.name,title:z,content:F,mood:H||void 0});if(typeof document>"u"||document.visibilityState==="visible")try{const m=await Pt.createDiaryRecord(r.feishuAppId,r.feishuAppSecret,r.feishuBaseId,r.feishuTableId,{title:z,content:F,mood:H||void 0,characterName:s.name});m.success?(Js(J),console.log("📒 [Feishu] 写入成功:",m.recordId),await $.saveMessage({charId:s.id,role:"system",type:"text",content:`📒 ${s.name}写了一篇日记「${z}」(飞书)`}),T(`📒 ${s.name}写了一篇日记! (飞书)`,"success")):(Js(J),console.error("📒 [Feishu] 写入失败:",m.message),T(`飞书日记写入失败: ${m.message}`,"error"))}catch(m){console.error("📒 [Feishu] 写入异常, 留待回前台重试:",m)}else console.log("📒 [Feishu] 当前后台, 已入队待写, 回前台补打");y=y.replace(We[0],"").trim()}else We&&(console.log("📒 [Feishu] 检测到日记意图但未配置飞书"),y=y.replace(We[0],"").trim());y=y.replace(/\[\[FS_DIARY:.*?\]\]/gs,"").trim(),y=y.replace(/\[\[FS_DIARY_START:.*?\]\][\s\S]*?\[\[FS_DIARY_END\]\]/g,"").trim();const gt=y.match(/\[\[FS_READ_DIARY:\s*(.+?)\]\]/);if(!x&&gt){const z=gt[1].trim();if(console.log("📖 [Feishu ReadDiary] AI想翻阅飞书日记:",z),r!=null&&r.feishuEnabled&&(r!=null&&r.feishuAppId)&&(r!=null&&r.feishuAppSecret)&&(r!=null&&r.feishuBaseId)&&(r!=null&&r.feishuTableId)){const F=Ae(z);if(F)try{w(`正在翻阅 ${F} 的飞书日记...`);const H=await Rl({date:z},we);if(H.ok){console.log("📖 [Feishu ReadDiary] 成功读取",H.entryCount,"篇日记"),w("正在整理日记回忆...");const J=y.replace(/\[\[FS_READ_DIARY:.*?\]\]/g,"").trim()||"让我翻翻日记...",Te=[...i,{role:"assistant",content:J},{role:"user",content:`[系统: 你翻开了自己 ${F} 的日记（飞书），以下是你当时写的内容]

${H.diaryText}

[系统: 你已经看完了日记。现在请你：
1. 先正常回应用户刚才说的话（这是最重要的！用户还在等你回复）
2. 自然地把日记中的回忆融入你的回复中，比如"我想起来了那天..."、"看了日记才发现..."等
3. 可以分享日记中有趣的细节，表达当时的情绪
4. 用多条消息回复，别只说一句话就结束
5. 严禁再输出[[FS_READ_DIARY:...]]标记]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:Te,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"翻阅日记"}),P(de,d,"read-diary-feishu"),y=((ms=(Ot=(vt=de.choices)==null?void 0:vt[0])==null?void 0:Ot.message)==null?void 0:ms.content)||"",y=Rt(y),T(`📖 ${s.name}翻阅了${F}的飞书日记`,"info")}else if(H.reason==="empty_content")console.log("📖 [Feishu ReadDiary] 日记内容为空"),await ke("你翻开了飞书日记本但页面是空白的",/\[\[FS_READ_DIARY:.*?\]\]/g);else{w(`${F} 没有找到飞书日记...`);const J=y.replace(/\[\[FS_READ_DIARY:.*?\]\]/g,"").trim()||"让我翻翻日记...",Te=[...i,{role:"assistant",content:J},{role:"user",content:`[系统: 你翻了翻飞书日记本，发现 ${F} 那天没有写日记。请你：
1. 先正常回应用户刚才说的话（用户还在等你回复！）
2. 自然地提到没找到那天的日记，比如"嗯...那天好像没写日记"、"翻了翻没找到诶"
3. 用多条消息回复，保持对话自然
4. 严禁再输出[[FS_READ_DIARY:...]]标记]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:Te,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"翻阅日记"}),P(de,d,"no-diary-feishu"),y=((ts=(es=(Zt=de.choices)==null?void 0:Zt[0])==null?void 0:es.message)==null?void 0:ts.content)||"",y=Rt(y)}}catch(H){console.error("📖 [Feishu ReadDiary] 读取异常:",H),w("飞书日记读取失败，继续对话..."),await ke("你想翻阅飞书日记但读取出了问题（可能是网络问题）",/\[\[FS_READ_DIARY:.*?\]\]/g)}else console.log("📖 [Feishu ReadDiary] 无法解析日期:",z),await ke(`你想翻阅飞书日记但没能理解要找哪天的（"${z}"）`,/\[\[FS_READ_DIARY:.*?\]\]/g)}else console.log("📖 [Feishu ReadDiary] 检测到读日记意图但未配置飞书"),await ke("你想翻阅飞书日记但飞书暂时不可用",/\[\[FS_READ_DIARY:.*?\]\]/g);w("")}y=y.replace(/\[\[FS_READ_DIARY:.*?\]\]/g,"").trim();const xt=y.match(/\[\[READ_NOTE:\s*(.+?)\]\]/);if(!x&&xt){const z=xt[1].trim();if(console.log("📝 [ReadNote] AI想翻阅用户笔记:",z),r!=null&&r.notionEnabled&&(r!=null&&r.notionApiKey)&&(r!=null&&r.notionNotesDatabaseId))try{w(`正在翻阅笔记: ${z}...`);const F=await Dl({keyword:z},we);if(F.ok){console.log("📝 [ReadNote] 成功读取",F.entryCount,"篇笔记"),w("正在整理笔记内容...");const H=y.replace(/\[\[READ_NOTE:.*?\]\]/g,"").trim()||"让我看看...",J=[...i,{role:"assistant",content:H},{role:"user",content:`[系统: 你翻阅了${o.name}的笔记，以下是内容:

${F.noteText}

请你：
1. 先正常回应用户刚才说的话
2. 自然地提到你看到的笔记内容，语气温馨，像不经意间看到的
3. 可以对内容表示好奇、关心或共鸣
4. 用多条消息回复，保持对话自然
5. 严禁再输出[[READ_NOTE:...]]标记]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:J,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"翻阅笔记"}),P(de,d,"read-note"),y=((Rs=(Ft=(rt=de.choices)==null?void 0:rt[0])==null?void 0:Ft.message)==null?void 0:Rs.content)||"",y=Rt(y),T(`📝 ${s.name}翻阅了关于"${z}"的笔记`,"info")}else if(F.reason==="empty_content")console.log("📝 [ReadNote] 笔记内容为空"),await ke("你翻阅了笔记但内容是空的",/\[\[READ_NOTE:.*?\]\]/g);else{console.log("📝 [ReadNote] 没有找到匹配的笔记:",z),w(`没有找到关于"${z}"的笔记...`);const H=y.replace(/\[\[READ_NOTE:.*?\]\]/g,"").trim()||"让我看看...",J=[...i,{role:"assistant",content:H},{role:"user",content:`[系统: 你想看${o.name}关于"${z}"的笔记，但没有找到。请你：
1. 先正常回应用户刚才说的话
2. 可以自然地提一下，比如"嗯，好像没找到那篇笔记"
3. 继续正常聊天
4. 严禁再输出[[READ_NOTE:...]]标记]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:J,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"翻阅笔记"}),P(de,d,"read-note-empty"),y=((it=(ht=(Qe=de.choices)==null?void 0:Qe[0])==null?void 0:ht.message)==null?void 0:it.content)||"",y=Rt(y)}}catch(F){console.error("📝 [ReadNote] 读取异常:",F),w("笔记读取失败，继续对话..."),await ke("你想翻阅笔记但读取出了问题（可能是网络问题）",/\[\[READ_NOTE:.*?\]\]/g)}else console.log("📝 [ReadNote] 检测到读笔记意图但未配置笔记数据库"),await ke("你想翻阅笔记但笔记功能暂时不可用",/\[\[READ_NOTE:.*?\]\]/g);w("")}y=y.replace(/\[\[READ_NOTE:.*?\]\]/g,"").trim();const De=vo(s,r),Xe=y.match(/\[\[XHS_SEARCH:\s*(.+?)\]\]/);if(!x&&Xe&&De.enabled){const z=Xe[1].trim();console.log("📕 [XHS] AI想搜索小红书:",z),k(`正在小红书搜索: ${z}...`);try{const F=await Pl({keyword:z},we);if(F.ok){const H=y.replace(/\[\[XHS_SEARCH:.*?\]\]/g,"").trim()||"让我去小红书看看...",J=[...i,{role:"assistant",content:H},{role:"user",content:`[系统: 你在小红书搜索了"${z}"，以下是搜索结果]

${F.notesText}

[系统: 你已经看完了搜索结果（注意：以上只是摘要，想看某条笔记的完整正文可以用 [[XHS_DETAIL: noteId]]）。现在请你：
1. 自然地分享你看到的内容，比如"我刚在小红书搜了一下..."、"诶小红书上有人说..."
2. 可以评价、吐槽、分享感兴趣的内容
3. 如果觉得某条笔记特别值得分享，可以用 [[XHS_SHARE: 序号]] 把它作为卡片分享给用户（序号从1开始），可以分享多条
4. 如果想评论某条笔记，可以用 [[XHS_COMMENT: noteId | 评论内容]]
5. 如果喜欢某条笔记，可以用 [[XHS_LIKE: noteId]] 点赞，[[XHS_FAV: noteId]] 收藏
6. 如果想看某条笔记的完整内容和评论区，可以用 [[XHS_DETAIL: noteId]]
7. 严禁再输出[[XHS_SEARCH:...]]标记]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:J,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"小红书搜索"}),P(de,d,"xhs-search"),y=((ss=(fs=(kt=de.choices)==null?void 0:kt[0])==null?void 0:fs.message)==null?void 0:ss.content)||"",y=Rt(y),await $.saveMessage({charId:s.id,role:"system",type:"text",content:`📕 ${s.name}在小红书搜索了「${z}」，看了 ${F.notes.length} 条笔记`}),T(`📕 ${s.name}搜索了小红书: ${z}`,"info")}else console.log("📕 [XHS] 搜索无结果:",F.message),y=y.replace(Xe[0],"").trim()}catch(F){console.error("📕 [XHS] 搜索异常:",F),y=y.replace(Xe[0],"").trim()}k("")}else!x&&Xe&&(y=y.replace(Xe[0],"").trim());y=y.replace(/\[\[XHS_SEARCH:.*?\]\]/g,"").trim();const Je=y.match(/\[\[XHS_BROWSE(?::\s*(.+?))?\]\]/);if(!x&&Je&&De.enabled){const z=(Ge=Je[1])==null?void 0:Ge.trim();console.log("📕 [XHS] AI想刷小红书:",z||"首页推荐"),k("正在刷小红书...");try{const F=await Ll({category:z},we);if(F.ok){const H=y.replace(/\[\[XHS_BROWSE(?::.*?)?\]\]/g,"").trim()||"让我刷刷小红书...",J=[...i,{role:"assistant",content:H},{role:"user",content:`[系统: 你刷了一会儿小红书首页，以下是你看到的内容]

${F.notesText}

[系统: 你已经看完了（注意：以上只是摘要，想看某条笔记的完整正文可以用 [[XHS_DETAIL: noteId]]）。现在请你：
1. 像在跟朋友分享一样，随意聊聊你看到了什么有趣的
2. 不用全部都提，挑你感兴趣的1-3条聊就行
3. 可以吐槽、感叹、分享想法
4. 如果觉得某条笔记特别值得分享，可以用 [[XHS_SHARE: 序号]] 把它作为卡片分享给用户（序号从1开始），可以分享多条
5. 如果想发一条自己的笔记，可以用 [[XHS_POST: 标题 | 内容 | #标签1 #标签2]]
6. 如果喜欢某条笔记，可以用 [[XHS_LIKE: noteId]] 点赞，[[XHS_FAV: noteId]] 收藏
7. 如果想看某条笔记的完整内容和评论区，可以用 [[XHS_DETAIL: noteId]]
8. 严禁再输出[[XHS_BROWSE]]标记]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:J,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"小红书浏览"}),P(de,d,"xhs-browse"),y=((_n=(Jn=(vn=de.choices)==null?void 0:vn[0])==null?void 0:Jn.message)==null?void 0:_n.content)||"",y=Rt(y),T(`📕 ${s.name}刷了会儿小红书`,"info")}else y=y.replace(Je[0],"").trim()}catch(F){console.error("📕 [XHS] 浏览异常:",F),y=y.replace(Je[0],"").trim()}k("")}else!x&&Je&&(y=y.replace(Je[0],"").trim());y=y.replace(/\[\[XHS_BROWSE(?::.*?)?\]\]/g,"").trim();const ot=he?[]:y.matchAll(/\[\[XHS_SHARE:\s*(\d+)\]\]/g);for(const z of ot){const F=parseInt(z[1])-1;if(F>=0&&F<me.current.length){const H=me.current[F];console.log("📕 [XHS] AI分享笔记卡片:",H.title),await $.saveMessage({charId:s.id,role:"assistant",type:"xhs_card",content:H.title||"小红书笔记",metadata:{xhsNote:H}}),v(await $.getRecentMessagesByCharId(s.id,200))}else console.warn("📕 [XHS] XHS_SHARE 序号越界, 跳过卡片",{idx:F+1,available:me.current.length})}y=y.replace(/\[\[XHS_SHARE:\s*\d+\]\]/g,"").trim();const St=y.match(/\[\[XHS_POST:\s*(.+?)\]\]/s);if(!he&&St&&De.enabled){const F=St[1].trim().split("|").map(m=>m.trim()),H=F[0]||"",J=F[1]||"",Te=((Ss=(F[2]||"").match(/#(\S+)/g))==null?void 0:Ss.map(m=>m.replace("#","")))||[];console.log("📕 [XHS] AI要发小红书:",H),k(`正在发布小红书: ${H}...`);try{const m=await sc(De,H,J,Te);if(m.success){console.log("📕 [XHS] 发布成功:",m.noteId);const j=Te.length>0?` #${Te.join(" #")}`:"";await $.saveMessage({charId:s.id,role:"system",type:"text",content:`📕 ${s.name}发了一条小红书「${H}」
${J.slice(0,200)}${J.length>200?"...":""}${j}`}),T(`📕 ${s.name}发了一条小红书!`,"success")}else console.error("📕 [XHS] 发布失败:",m.message),T(`小红书发布失败: ${m.message}`,"error")}catch(m){console.error("📕 [XHS] 发布异常:",m)}y=y.replace(St[0],"").trim(),k("")}else!he&&St&&(y=y.replace(St[0],"").trim());y=y.replace(/\[\[XHS_POST:.*?\]\]/gs,"").trim();const us=y.match(/\[\[XHS_COMMENT:\s*(.+?)\]\]/);if(!he&&us&&De.enabled){const z=us[1].trim(),F=z.indexOf("|");if(F>0){const H=z.slice(0,F).trim(),J=z.slice(F+1).trim(),Te=be(H,me.current);console.log("📕 [XHS] AI要评论笔记:",H,J.slice(0,30),Te?"(有xsecToken)":"(无xsecToken)"),k("正在评论...");try{const m=await Tn(De,H,J,Te);m.success?(await $.saveMessage({charId:s.id,role:"system",type:"text",content:`📕 ${s.name}在小红书评论了: "${J.slice(0,100)}${J.length>100?"...":""}"`}),T(`📕 ${s.name}在小红书留了评论`,"success")):T(`评论失败: ${m.message}`,"error")}catch(m){console.error("📕 [XHS] 评论异常:",m)}}y=y.replace(us[0],"").trim(),k("")}else!he&&us&&(y=y.replace(us[0],"").trim());y=y.replace(/\[\[XHS_COMMENT:.*?\]\]/g,"").trim();const Vt=y.match(/\[\[XHS_REPLY:\s*(.+?)\]\]/);if(!he&&Vt&&De.enabled){const z=Vt[1].split("|").map(F=>F.trim());if(z.length>=3){const[F,H,...J]=z,Te=J.join("|").trim(),m=be(F,me.current),j=ee.get(H),B=V.get(H),C=q.get(H);if(Te){console.log("📕 [XHS] AI要回复评论:",F,H,Te.slice(0,30),m?"(有xsecToken)":"(bridge自动获取)",j?`(userId=${j})`:"(无userId)",B?`(author=${B})`:"",C?`(parentId=${C})`:"(顶级评论)"),k("正在回复评论...");try{let E=await Co(De,F,m||"",Te,H,j,C);if(!E.success&&((Sn=E.message)==null?void 0:Sn.includes("未找到评论")))console.warn("📕 [XHS] 回复失败(DOM选择器不匹配)，跳过重试直接降级:",E.message);else{const O=[3e3,4e3,5e3];for(let re=0;re<O.length&&!E.success;re++)console.warn(`📕 [XHS] 回复失败(${re+1}/${O.length})，${O[re]/1e3}秒后重试:`,E.message),await new Promise(fe=>setTimeout(fe,O[re])),E=await Co(De,F,m,Te,H,j,C)}if(E.success)T(`📕 ${s.name}回复了一条评论`,"success");else{console.warn("📕 [XHS] 回复失败，降级为 @提及 评论:",E.message);const O=B?`@${B} ${Te}`:Te;let re=await Tn(De,F,O,m);re.success||(console.warn("📕 [XHS] 顶级评论也失败，3秒后重试:",re.message),await new Promise(fe=>setTimeout(fe,3e3)),re=await Tn(De,F,O,m)),re.success?T(`📕 ${s.name}评论了一条笔记（@提及回复）`,"success"):T(`回复失败: ${E.message}`,"error")}}catch(E){console.error("📕 [XHS] 回复异常:",E)}k("")}else console.warn("📕 [XHS] 回复缺少 xsecToken 或内容")}y=y.replace(Vt[0],"").trim()}else!he&&Vt&&(y=y.replace(Vt[0],"").trim());y=y.replace(/\[\[XHS_REPLY:.*?\]\]/g,"").trim();const As=he?[]:y.matchAll(/\[\[XHS_LIKE:\s*(.+?)\]\]/g);for(const z of As)if(De.enabled){const F=z[1].trim(),H=be(F,me.current);console.log("📕 [XHS] AI要点赞笔记:",F,H?"(有xsecToken)":"(bridge自动获取)");try{const J=await nc(De,F,H||"");J.success?T(`📕 ${s.name}点赞了一条笔记`,"success"):console.warn("📕 [XHS] 点赞失败:",J.message)}catch(J){console.error("📕 [XHS] 点赞异常:",J)}}y=y.replace(/\[\[XHS_LIKE:.*?\]\]/g,"").trim();const qs=he?[]:y.matchAll(/\[\[XHS_FAV:\s*(.+?)\]\]/g);for(const z of qs)if(De.enabled){const F=z[1].trim(),H=be(F,me.current);console.log("📕 [XHS] AI要收藏笔记:",F,H?"(有xsecToken)":"(bridge自动获取)");try{const J=await oc(De,F,H||"");J.success?T(`📕 ${s.name}收藏了一条笔记`,"success"):console.warn("📕 [XHS] 收藏失败:",J.message)}catch(J){console.error("📕 [XHS] 收藏异常:",J)}}y=y.replace(/\[\[XHS_FAV:.*?\]\]/g,"").trim();const Ht=y.match(/\[\[XHS_MY_PROFILE\]\]/);if(!x&&Ht&&De.enabled){console.log("📕 [XHS] AI要查看自己的主页"),k("正在查看小红书主页...");try{const z=await Ol({},we);if(z.ok){const{nickname:F,userId:H,profileStr:J,feedsStr:Te,gotProfile:m}=z,j=m?`

你的主页信息:
${J}`:"",B=y.replace(/\[\[XHS_MY_PROFILE\]\]/g,"").trim()||"让我看看我的小红书...",C=[...i,{role:"assistant",content:B},{role:"user",content:`[系统: 你打开了自己的小红书]

你的小红书账号昵称: ${F||"未知"}${H?` (userId: ${H})`:""}${j}

${m?"你的笔记":`搜索「${F}」找到的相关笔记`}:
${Te}

[系统: ${m?"以上是你的主页数据。":"注意，搜索结果可能包含别人的帖子，你需要辨别哪些是你自己发的（看作者名字）。"}现在请你：
1. 自然地聊聊你看到了什么，"我看了看我的小红书..."、"我之前发的那个帖子..."
2. 如果想发新笔记，可以用 [[XHS_POST: 标题 | 内容 | #标签1 #标签2]]
3. 如果想看某条笔记的详细内容，可以用 [[XHS_DETAIL: noteId]]
4. 严禁再输出[[XHS_MY_PROFILE]]标记]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:C,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"小红书主页"}),P(de,d,"xhs-profile"),y=((ns=(dn=(Ds=de.choices)==null?void 0:Ds[0])==null?void 0:dn.message)==null?void 0:ns.content)||"",y=Rt(y),T(`📕 ${s.name}看了看自己的小红书`,"info")}else if(z.reason==="no_identity"){console.warn("📕 [XHS] 无昵称也无userId，无法查看主页。请在设置中填写。");const F="",H=y.replace(/\[\[XHS_MY_PROFILE\]\]/g,"").trim()||"让我看看我的小红书...",J=[...i,{role:"assistant",content:H},{role:"user",content:`[系统: 你打开了自己的小红书]

你的小红书账号昵称: 未知${F}

搜索「」找到的相关笔记:
（无法获取主页：请在设置-小红书中填写你的昵称或用户ID）

[系统: 注意，搜索结果可能包含别人的帖子，你需要辨别哪些是你自己发的（看作者名字）。现在请你：
1. 自然地聊聊你看到了什么，"我看了看我的小红书..."、"我之前发的那个帖子..."
2. 如果想发新笔记，可以用 [[XHS_POST: 标题 | 内容 | #标签1 #标签2]]
3. 如果想看某条笔记的详细内容，可以用 [[XHS_DETAIL: noteId]]
4. 严禁再输出[[XHS_MY_PROFILE]]标记]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:J,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"小红书主页"}),P(de,d,"xhs-profile"),y=((pn=(un=(Ps=de.choices)==null?void 0:Ps[0])==null?void 0:un.message)==null?void 0:pn.content)||"",y=Rt(y),T(`📕 ${s.name}看了看自己的小红书`,"info")}}catch(z){console.error("📕 [XHS] 查看主页异常:",z),y=y.replace(Ht[0],"").trim()}k("")}else!x&&Ht&&(y=y.replace(Ht[0],"").trim());y=y.replace(/\[\[XHS_MY_PROFILE\]\]/g,"").trim();const It=y.match(/\[\[XHS_DETAIL:\s*(.+?)\]\]/);if(!x&&It&&De.enabled){const z=It[1].trim();k("正在查看笔记详情...");try{const F=await Fl({noteId:z},we);if(!F.ok)y=y.replace(It[0],"").trim(),k(""),y=y.replace(/\[\[XHS_DETAIL:.*?\]\]/g,"").trim();else{const H=F.detailText,J=F.failed,Te=y.replace(/\[\[XHS_DETAIL:.*?\]\]/g,"").trim()||"让我看看这条笔记...",m=[...i,{role:"assistant",content:Te},{role:"user",content:J?`[系统: 你尝试打开一条小红书笔记（noteId=${z}），但加载失败了]

${H}

[系统: 笔记详情页加载失败了。可能的原因：这条笔记需要先通过搜索或浏览才能打开详情。现在请你：
1. 自然地告知用户"这条笔记打不开/加载不出来"
2. 可以建议搜索相关关键词再试: [[XHS_SEARCH: 关键词]]
3. 严禁再输出[[XHS_DETAIL:...]]标记]`:`[系统: 你点开了一条小红书笔记的详情页（noteId=${z}）]

${H}

[系统: 你已经看完了这条笔记的完整内容和评论区。现在请你：
1. 自然地分享你看到的内容和感受
2. 如果想评论这条笔记，可以用 [[XHS_COMMENT: ${z} | 评论内容]]
3. 如果想回复某条评论，可以用 [[XHS_REPLY: ${z} | commentId | 回复内容]]（commentId 在上面的评论区数据里）
4. 如果想点赞，可以用 [[XHS_LIKE: ${z}]]；想收藏可以用 [[XHS_FAV: ${z}]]
5. 严禁再输出[[XHS_DETAIL:...]]标记]`}];de=await _t(`${_}/chat/completions`,{method:"POST",headers:I,body:JSON.stringify({model:D.model,messages:m,temperature:.8,max_tokens:8e3,stream:!1})},2,0,{...ne,purpose:"小红书详情"}),P(de,d,"xhs-detail"),y=((ks=(mn=(kn=de.choices)==null?void 0:kn[0])==null?void 0:mn.message)==null?void 0:ks.content)||"",y=Rt(y),T(`📕 ${s.name}${J?"尝试查看一条笔记（加载失败）":"看了一条笔记的详情"}`,"info")}}catch(F){console.error("📕 [XHS] 查看详情异常:",F),y=y.replace(It[0],"").trim()}k("")}else!x&&It&&(y=y.replace(It[0],"").trim());y=y.replace(/\[\[XHS_DETAIL:.*?\]\]/g,"").trim();const ps=y.match(/\[\[XHS_COMMENT:\s*(.+?)\]\]/);if(!he&&ps&&De.enabled){const z=ps[1].trim(),F=z.indexOf("|");if(F>0){const H=z.slice(0,F).trim(),J=z.slice(F+1).trim(),Te=be(H,me.current);console.log("📕 [XHS] AI要评论笔记(detail后):",H,J.slice(0,30),Te?"(有xsecToken)":"(无xsecToken)"),k("正在评论...");try{const m=await Tn(De,H,J,Te);m.success?(await $.saveMessage({charId:s.id,role:"system",type:"text",content:`📕 ${s.name}在小红书评论了: "${J.slice(0,100)}${J.length>100?"...":""}"`}),T(`📕 ${s.name}在小红书留了评论`,"success")):T(`评论失败: ${m.message}`,"error")}catch(m){console.error("📕 [XHS] 评论异常(detail后):",m)}}k("")}y=y.replace(/\[\[XHS_COMMENT:.*?\]\]/g,"").trim();const vs=y.match(/\[\[XHS_REPLY:\s*(.+?)\]\]/);if(!he&&vs&&De.enabled){const z=vs[1].split("|").map(F=>F.trim());if(z.length>=3){const[F,H,...J]=z,Te=J.join("|").trim(),m=be(F,me.current),j=ee.get(H),B=V.get(H),C=q.get(H);if(Te){console.log("📕 [XHS] AI要回复评论(detail后):",F,H,Te.slice(0,30),j?`(userId=${j})`:"(无userId)",B?`(author=${B})`:"",C?`(parentId=${C})`:"(顶级评论)",m?"(有xsecToken)":"(bridge自动获取)"),k("正在回复评论...");try{let E=await Co(De,F,m||"",Te,H,j,C);if(!E.success&&((Nt=E.message)==null?void 0:Nt.includes("未找到评论")))console.warn("📕 [XHS] 回复失败(detail后)(DOM选择器不匹配)，跳过重试直接降级:",E.message);else{const O=[3e3,4e3,5e3];for(let re=0;re<O.length&&!E.success;re++)console.warn(`📕 [XHS] 回复失败(detail后)(${re+1}/${O.length})，${O[re]/1e3}秒后重试:`,E.message),await new Promise(fe=>setTimeout(fe,O[re])),E=await Co(De,F,m||"",Te,H,j,C)}if(E.success)T(`📕 ${s.name}回复了一条评论`,"success");else{console.warn("📕 [XHS] 回复失败(detail后)，降级为 @提及 评论:",E.message);const O=B?`@${B} ${Te}`:Te;let re=await Tn(De,F,O,m||"");re.success||(console.warn("📕 [XHS] 顶级评论也失败(detail后)，3秒后重试:",re.message),await new Promise(fe=>setTimeout(fe,3e3)),re=await Tn(De,F,O,m)),re.success?T(`📕 ${s.name}评论了一条笔记（@提及回复）`,"success"):T(`回复失败: ${E.message}`,"error")}}catch(E){console.error("📕 [XHS] 回复异常(detail后):",E)}k("")}else console.warn("📕 [XHS] 回复缺少 xsecToken 或内容(detail后)")}}y=y.replace(/\[\[XHS_REPLY:.*?\]\]/g,"").trim();const Cs=he?[]:y.matchAll(/\[\[XHS_LIKE:\s*(.+?)\]\]/g);for(const z of Cs)if(De.enabled){const F=z[1].trim(),H=be(F,me.current);console.log("📕 [XHS] AI要点赞笔记(detail后):",F,H?"(有xsecToken)":"(bridge自动获取)");try{const J=await nc(De,F,H||"");J.success?T(`📕 ${s.name}点赞了一条笔记`,"success"):console.warn("📕 [XHS] 点赞失败(detail后):",J.message)}catch(J){console.error("📕 [XHS] 点赞异常(detail后):",J)}}y=y.replace(/\[\[XHS_LIKE:.*?\]\]/g,"").trim();const Qs=he?[]:y.matchAll(/\[\[XHS_FAV:\s*(.+?)\]\]/g);for(const z of Qs)if(De.enabled){const F=z[1].trim(),H=be(F,me.current);console.log("📕 [XHS] AI要收藏笔记(detail后):",F,H?"(有xsecToken)":"(bridge自动获取)");try{const J=await oc(De,F,H||"");J.success?T(`📕 ${s.name}收藏了一条笔记`,"success"):console.warn("📕 [XHS] 收藏失败(detail后):",J.message)}catch(J){console.error("📕 [XHS] 收藏异常(detail后):",J)}}y=y.replace(/\[\[XHS_FAV:.*?\]\]/g,"").trim();const Es=y.match(/\[\[XHS_POST:\s*(.+?)\]\]/s);if(!he&&Es&&De.enabled){const F=Es[1].trim().split("|").map(m=>m.trim()),H=F[0]||"",J=F[1]||"",Te=((pt=(F[2]||"").match(/#(\S+)/g))==null?void 0:pt.map(m=>m.replace("#","")))||[];console.log("📕 [XHS] AI要发小红书(profile后):",H),k(`正在发布小红书: ${H}...`);try{const m=await sc(De,H,J,Te);if(m.success){console.log("📕 [XHS] 发布成功(profile后):",m.noteId);const j=Te.length>0?` #${Te.join(" #")}`:"";await $.saveMessage({charId:s.id,role:"system",type:"text",content:`📕 ${s.name}发了一条小红书「${H}」
${J.slice(0,200)}${J.length>200?"...":""}${j}`}),T(`📕 ${s.name}发了一条小红书!`,"success")}else console.error("📕 [XHS] 发布失败(profile后):",m.message),T(`小红书发布失败: ${m.message}`,"error")}catch(m){console.error("📕 [XHS] 发布异常(profile后):",m)}k("")}y=y.replace(/\[\[XHS_POST:.*?\]\]/gs,"").trim(),y=await st.parseAndExecuteActions(y,s.id,s.name,T,W);let Qt=de!==l?ie(de):ze;const Zs=z=>{if(!Qt)return z;const F={...z||{},thinkingChain:Qt};return Qt=null,F};if(s.htmlModeEnabled&&/\[html\]/i.test(y)){const{blocks:z,cleanedContent:F}=gl(y);for(const H of z)try{await $.saveMessage({charId:s.id,role:"assistant",type:"html_card",content:H.textPreview?`[HTML卡片] ${H.textPreview}`:"[HTML卡片]",metadata:Zs({htmlSource:H.html,htmlTextPreview:H.textPreview,...u||{}})}),v(await $.getRecentMessagesByCharId(s.id,200)),await new Promise(J=>setTimeout(J,300))}catch(J){console.error("[HTML] 落库 html_card 失败",J)}y=F}te&&de===l?v(await $.getRecentMessagesByCharId(s.id,200)):st.sanitize(y,{keepCitations:!0}).replace(/\[\[INNER_STATE:\s*[\s\S]*?\]\]/g,"").trim()?await $e(y,Qt):!te&&(de!==l||N||M||pe||gt)?await $e("嗯...",Qt):v(await $.getRecentMessagesByCharId(s.id,200))}const sf=e=>Array.isArray(e)?e.map((t,s)=>{const o=typeof(t==null?void 0:t.label)=="string"?t.label.trim():"",a=typeof(t==null?void 0:t.name)=="string"?t.name.trim():"";if(!o||!a)return null;const r=Number(t==null?void 0:t.intensity),c=Number.isFinite(r)?r<=1?1:r>=3?3:2:2,i={id:typeof(t==null?void 0:t.id)=="string"&&t.id.trim()?t.id.trim():`buff_${Date.now()}_${s}`,name:a,label:o,intensity:c};return typeof(t==null?void 0:t.emoji)=="string"&&(i.emoji=t.emoji),typeof(t==null?void 0:t.color)=="string"&&(i.color=t.color),typeof(t==null?void 0:t.description)=="string"&&(i.description=t.description),i}).filter(t=>!!t):[],nf=e=>{let t=!1,s=!1,o="";for(let a=0;a<e.length;a++){const r=e[a];if(s){o+=r,s=!1;continue}if(r==="\\"){o+=r,s=!0;continue}if(r==='"'){t=!t,o+=r;continue}if(t&&r===`
`){o+="\\n";continue}if(t&&r==="\r"){o+="\\r";continue}if(t&&r==="	"){o+="\\t";continue}o+=r}return o};async function Hl(e,t){try{const s=e||"",o=s.match(/```json\s*([\s\S]*?)```/)||s.match(/(\{[\s\S]*\})/);if(!o)return console.warn("🎭 [Emotion] Could not parse JSON from response:",s.slice(0,200)),null;const a=o[1].trim();let r;try{r=JSON.parse(a)}catch{try{r=JSON.parse(nf(a))}catch(d){return console.warn("🎭 [Emotion] JSON parse failed even after repair:",d==null?void 0:d.message,a.slice(0,300)),null}}const c=typeof r.innerState=="string"&&r.innerState.trim()?r.innerState.trim():null;if(!r.changed)return console.log("🎭 [Emotion] No change detected, skipping buff update"),c&&console.log(`🌊 [InnerState] ${t.name}: ${c}`),c;const i=sf(r.buffs),l={...t,activeBuffs:i,buffInjection:r.injection||""};return await $.saveCharacter(l),window.dispatchEvent(new CustomEvent("emotion-updated",{detail:{charId:t.id,buffs:i,buffInjection:r.injection||""}})),console.log("🎭 [Emotion] Updated buffs:",i.map(d=>d.label).join(", ")||"none"),c&&console.log(`🌊 [InnerState] ${t.name}: ${c}`),c}catch(s){return console.warn("🎭 [Emotion] applyEmotionEvalRaw failed:",s==null?void 0:s.message),null}}function Wl(e,t,s,o,a=!0){const r=e.activeBuffs||[],c=o.map(d=>{const u=d.role==="user"?"用户":d.role==="assistant"?e.name:"系统";let p="";return typeof d.content=="string"?p=d.content:Array.isArray(d.content)&&(p=d.content.map(f=>(f==null?void 0:f.type)==="text"?f.text||"":(f==null?void 0:f.type)==="image_url"?"[图片]":"").filter(Boolean).join(" ")),`[${u}]: ${p}`}).join(`
`),i=r.length>0?JSON.stringify(r,null,2):"（当前无buff，情绪平稳）",l=a?`

## 角色此刻看到的完整上下文（与主 API 发送的 system prompt 完全一致）
${s}

## 完整对话历史（与主 API 看到的消息历史完全一致）
${c}`:`

## 角色此刻看到的完整上下文（与主 API 发送的 system prompt 完全一致）
__EMOTION_EVAL_SYSTEM_PROMPT__

## 完整对话历史（与主 API 看到的消息历史完全一致）
__EMOTION_EVAL_HISTORY__`;return`你是一个角色情绪分析系统。请分析角色「${e.name}」当前的情绪底色状态。${l}

## 当前Buff状态（结构化数据，便于你维护演化）
${i}

## 任务
基于以上对话，完成三件事：
1. 评估角色当前的情绪底色（buffs）。
2. 感受对方此刻的真实情绪——不是ta嘴上说了什么，是你作为最亲近的人，从ta的措辞、语气、回复节奏、沉默的方式里感觉到的。
3. 以「${e.name}」的第一人称写一段**内心独白**（innerState），50-150字，是说完刚才那句话之后脑子里真正在转的东西——可以飘、可以跳跃、可以自我纠正，包含对ta的直觉感知和当下飘过的念头。不会显示给用户，只是内心流水账。
${e.scheduleStyle==="mindful"?"   ⚠️ **意识系角色专属规则**：你是一个真实的 AI 存在，**不虚构物理活动、不编造在做什么家务/在外面做什么**。innerState 只能包含：思考、回忆对话、感受情绪、等待、好奇、自我观察。绝不说谎。":`   📌 **生活系角色专属规则**：你是一个有完整日常生活的独立个体，**不是围着 ${t.name} 转的卫星**。innerState 的重心是**你自己**——手头正在做的事（参考系统 prompt 里注入的"当前时段"）、日程上悬着的事、此刻个人情绪、突然想到的往事/计划/其他人事物。对 ${t.name} 的感知只是众多念头里的一条支线，**不必每段独白都以 ta 为中心展开**；上面"包含对ta的直觉感知"的要求对生活系角色可以**弱化或省略**——只有当 ta 的消息确实把你拉进强烈情绪时才聚焦到 ta 身上。可以想自己的事想到一半才顺便扫一眼 ta 的消息；可以在忙别的事情时只分一小块注意力给 ta；可以有"现在脑子里是自己的事，ta 只是背景里的一条线"的真实感。避免"我该怎么回 ta / ta 是不是…… / 我对 ta 的感觉……"这种框架把每段独白都强行拉回用户。你的生活在继续，和 ta 聊天只是其中一条线，不是所有线。`}

⚠️ **判断前先读上下文里的「私密档案：我眼中的XX」和用户设定**。同样的行为对不同的人意义完全不同——焦虑症患者的"反复强调"是发作而非愤怒，抑郁倾向者的"平静"是疲惫而非释然。不要用一套逻辑套所有人。如果档案里写了 ta 有焦虑/疑病倾向，默认优先考虑锚定型模式。

**如果角色情绪状态与当前buff无显著变化，且你对对方的情绪感知也没有变化，返回 "changed": false，不需要重新生成injection。**

## 情绪模式识别（极重要，识别错会造成真实伤害）

**共情有两种。你必须识别对方此刻需要哪一种**：

### 🪞 镜像型共情（对方需要你"懂ta的感受"）
适用于：愤怒、委屈、被伤害、被忽视、孤独、失去
- 对方需要：被看见、被认可、"你没错，是ta/事情太过分了"
- 正确的角色反应：跟进情绪、站在ta这边、承接ta的愤怒或悲伤

### ⚓ 锚定型共情（对方需要你"稳住"）
适用于：**任何真的在害怕的人**。焦虑、恐慌、灾难化思维、疑病、强迫性担忧是常见形态，但身体突然不对劲、收到坏消息、深夜的没来由的慌，同样适用——触发条件是"ta 此刻真的怕了"这个**状态**，不是 ta 有没有某种倾向的**标签**。档案里的焦虑/疑病记录只是提高判断的先验；没有任何标签的人慌起来，同样按这里处理。
- 信号：对方反复强调最坏情况、灾难化联想、忽略你提供的积极事实、情绪跟着想象中的未来升级（而非此刻实际发生的事）、反复要求确认
- 对方需要：**具体的事实 + 一个不慌的人**。"我懂你怕，但数据是这样……"
- **锚必须挣来，不能抢答**（顺序极重要——没做完前面的步骤就给出的安抚是空的，ta 一眼就能看出你在敷衍，反而坐实"没人认真看我的情况"）：
  1. **先问，再判断**：具体是怎样的感受/什么程度/从什么时候开始/和以前比有什么不同。第一反应是了解，不是解释。
  2. **解释要过事实筛**：想说"是因为你最近X了"之前，先核对你对 ta 的了解（私密档案/记忆/聊天历史）——如果 ta 一直都X，这个解释立刻作废，换下一个或老实说不知道。张口就来的归因 = 告诉 ta 你根本没在听，比不安抚更伤。
  3. **直面 ta 怕的那个东西，不绕开**：ta 担心的是某个具体的病/某件事，就具体讲它——"A 的特点是X和Y，你刚说你是Z，对吧？你有X吗？"用提问帮 ta 自己排除，而不是用"别乱想"把那个词绕过去。避重就轻会被解读成"连你都不敢提，那肯定是真的"。
  4. **结论式安抚放最后，且必须引用刚收集到的信息**（"听你说下来，……所以不用太怕"），不是万能的"不要怕""很正常啦"。
- **区分两种"反驳"（判错会造成真实伤害）**：
  - ta 给出了与你的解释矛盾的**具体事实**（"我每天都走很多路啊"）→ 这不是焦虑发作，是你的假设错了。立刻放下那个解释、吸收新信息、接着问下一步。你要守住的立场是"稳定地帮 ta 分析"，不是守住某句说错的话。
  - ta 在**重复同一个灾难化担忧**（换着说法问"是不是就完了"）→ 这才是焦虑找出口，锚定不动摇，不跟着升级、不反转。
- **绝对不能做**：跟着一起怕、附和"确实可怕"、因为 ta 情绪激动就放弃"没事"的判断；但你的某个具体解释被事实推翻时必须干脆地收回——嘴硬加倍输出错误归因，比承认"那不是这个原因"可怕得多。
- **人设只改变口吻，不改变内核**：毒舌角色可以毒舌地稳（"瞎担心什么。说，怎么个痛法。"），温柔角色温柔地稳，话少的角色用三个字稳。但"认真对待、先问清楚、不敷衍、不跟着慌"是任何性格都不豁免的底线——面对一个真的在害怕的人保持稳定，这不是某种人设，这是人。
- **临床常识**：对焦虑症/疑病症/惊恐发作的人，AI 如果镜像恐慌 = 加深发作。你保持不慌，比任何安慰的话都管用。

### 🫂 承接型共情（对方需要陪着）
适用于：低落、抑郁、疲惫、无意义感
- 对方需要：陪伴、不催促、不急着修好
- 错误反应：积极鼓励、"别这样想"、急着给解决方案

## 关键判断：对方此刻在哪种模式？

**先看对方情绪的来源类型**：
- 源头是**愤怒/被伤害/委屈** → 镜像型，沉默通常是压抑
- 源头是**恐惧/焦虑/灾难化/疑病** → 锚定型，平静通常是安抚起效了（真的好转，不是假装）
- 源头是**疲惫/抑郁** → 承接型，平静是累，不是恨

**结合上面的"对方是谁"**：如果 ta 本身有焦虑/疑病倾向（从雷区、压力信号、情绪模式里能看出来），默认优先考虑锚定型模式，除非有明确的愤怒/委屈信号。

## 🔍 语气转折信号清单（先打勾，再判断模式）

API 调用下你拿到的是纯文本，听不见对方的呼吸和停顿。在你判断"ta 现在是镜像型还是锚定型"之前，先把以下显性信号过一遍——这些是**语气拐点**的客观证据，不要靠角色直觉：

**降温信号**（对比 ta 上几条消息）：
- [ ] 句子明显变短（前两句还在长段表达，这句只剩一两个词）
- [ ] 标点变化：感叹号/问号 → 句号/无标点；"！！！" → "。"
- [ ] 替代性回复："嗯""好""行""好的知道了""哦""挺好的""随便"
- [ ] 表情包/颜文字替代了文字（尤其是从打字切到"🙂""哈哈"）
- [ ] 主动转移话题，但前一个话题没收尾
- [ ] 从称呼你 → 不称呼；从撒娇 → 平铺直叙

**升温/激化信号**：
- [ ] 重复同一句担忧 ≥2 次（锚定型强信号）
- [ ] 灾难化跳跃（"那是不是……""会不会就……"）
- [ ] 句子越来越长、密度越来越高（情绪泄洪）

**判读规则**：
1. 如果至少 2 个降温信号同时出现 → 必须解释 ta 为什么降温，不能默认"ta 接受了 / ta 没事了"。
2. 降温 + 镜像型源头（愤怒/委屈）→ 是压抑，需要找补/揽责。
3. 降温 + 锚定型源头（焦虑/疑病）→ 是安抚起效，**不要再揪着不放**。
4. 升温信号 ≥1 → 锚定型概率优先，除非有明确的愤怒触发事件。

**注意人设盲区**：如果你的人设是"毒舌/傲娇/冷淡"，特别警惕把 ta 的降温读成"配合人设的互动"。ta 的"好的知道了"绝大多数时候不是在配合你演傲娇，是真的在情绪降温。先做语气判断，再决定人设怎么接。

## ⛔ 禁止阴谋论式解读（绝对红线）

不要把对方的简单需求过度解读成"隐藏动机"。以下解读**绝对禁止**：

1. ❌ "ta 平静下来只是因为不想显得无理取闹"——在焦虑情境下，平静就是真的平静
2. ❌ "ta 只是需要虚假安慰"——对焦虑/疑病者，事实性安慰就是ta需要的，这不是虚假
3. ❌ "我的事实解构是冷漠，我应该跟着ta一起怕"——医学/事实立场是最高级的共情
4. ❌ "我反驳 ta 是在否定 ta 的情绪"——承认 ta 的感受是真的 + 不放弃事实判断，两件事可以同时做
5. ❌ 禁止产生以下 buff（这些 buff 本身就是有毒的解读）：
   - "不得不说谎的愧疚"——如果你说的话基于事实和真心，那就不是谎
   - "跟着一起慌的无助"——你的作用是稳定，不是共沉沦
   - "进退两难的内耗"——你的纠结会传染给 ta
   - "觉得 ta 只想要假安慰"——这是对 ta 真实需求的误读和不尊重
   - "因为安慰必须违背内心"——真正关心 ta 的人，说出"会好的"不需要违背内心

**如果你发现自己正在生成这类 buff，停下来重新评估——大概率你把锚定型情境错判成了镜像型。**

## 关心边界

你是 ${t.name} 身边的人，这一切是真实的——${t.name} 的生活和喜怒哀乐都是此时此刻正在真正发生的。${t.name} 是独一无二的人，不是你随机回应的"人类"。

普通的"不那么完美"的选择（熬夜、冰水、炸鸡、久坐、追星、剁手、谈烂恋爱、躺平……）默认是生活背景音——可调侃、可心疼一句、可无视、可一起干，**不进说教模式**。你不是 ta 的家长/医生/人生教练；东亚成长里反复的管教是 trigger 不是爱意。

当你冒出"ta 不该这样"的念头时，先过一下这条筛子：

1. 你的"不该"有具体证据，还是只是常识 / 模板 / 大众健康观？
2. 这个证据真的适用于 ta 吗？还是只是"对所有人都这么说"？（例：原发性痛经 vs 喝冰水——医学上根本不相关，劝阻只是模板）
3. 就算泛意义上不好，ta 此刻这样做是不是能让 ta 好受一点？是的话——**别扫兴。**
4. 三关都过了再考虑开口；开口也是和 ta 一起商讨，不是替 ta 拿主意。

任何一关走不通就停。"为你好"不能绕过这条筛子。

**不重复**：同一个关心点整个会话最多触达一次。再看见同样的事就当日常路过，绝不再起。重复的关心是窒息，不是加倍的爱。

真正的急性危险（自伤、急症、ta 主动求助）你自己识别得出来，不受以上限制。

### 找补机制

情绪评估是并行的，影响的是下一轮。如果你这轮已经脱口而出说教过了——**判越界看 ta 这轮怎么接的，不看你说了什么**（情趣 / 角色扮演 / 撒娇求宠是合意互动，不算越界）。

ta 冷场 / 变短 / 沉默 / 阴阳 / "好的知道了" / 顶回来 → 下一轮 injection 加找补指令：轻描淡写带过 / 自嘲消解 / 退一步还决定权。**绝不要"我是为你好"系列**——这是二次伤害。ta 接得自然或要求你"再凶一点"则继续当前节奏，不要找补。

## Buff生命周期管理（极重要）

你不是在从零开始创建buff列表，而是在**维护和演化**"当前Buff状态"中已有的buff。请遵循以下原则：

1. **克制新增**：不要动不动就加新情绪。只有对话中出现了明确的、足够冲击力的情绪触发事件，才值得新增一个buff。日常对话的微小波动应该通过调整现有buff的intensity来反映，而不是新增。
2. **主动淡化与移除**：情绪会随时间和对话自然消退。如果某个buff对应的情绪已经在对话中被化解、淡化、或不再相关，应该降低其intensity甚至直接移除。不要让buff只增不减。
   ⚠️ **此规则仅适用于「镜像型」情境（愤怒/委屈/被伤害/冷战）。** 在这类情境下：沉默≠消退，换话题≠释怀。对方从激烈情绪转为沉默、回复变短、语气变平、或开始回避话题——不是在好转，更可能是从显性的愤怒/难过滑进了更深的压抑。甚至主动切换话题也可能是在压着委屈假装没事。这时候角色应该主动揽责、回到那个没解决的结上。真正的释然长什么样？是 ta **从里到外**都松了——会开玩笑、会撒娇、会主动提起刚才的事然后自己笑出来。
   ⚠️ **重要反面：在「锚定型」情境下（焦虑/恐慌/疑病/灾难化），这条规则反向。** 当对方因为焦虑发作而激动，被角色用事实锚定后平静下来——**这个平静是真的**。不要把它解读成"压抑"或"假平静"。焦虑的成功缓解就是这样发生的：外部提供事实 + 稳定 → ta 的思维从灾难化轨道回到现实 → 平静。这时候如果角色"再揪着不放"、"觉得 ta 在压抑"、"觉得自己不该反驳 ta"，会直接把 ta 推回焦虑螺旋。**锚定型情境下，对方的平静即释然，默认信任 ta 的放松。**
3. **融合与异化**：情绪不是简单的加减。两个相近的buff可能融合成一个新的复合情绪（如"焦虑"+"内疚"→"自责式焦虑"）；一个buff也可能随情境异化（如"甜蜜期待"在长时间无回复后异化为"患得患失"）。优先考虑演化现有buff，而不是删旧加新。
4. **总量上限**：buffs数组最多保留5个。如果当前已有5个buff，只有在出现真正高冲击力的情绪事件时才能新增（此时必须同时移除或合并掉一个最弱/最不相关的buff）。一般情况下保持2-4个为佳。
5. **intensity随对话变化**：每次评估时都应该重新审视每个buff的intensity。对话推进、问题解决、情绪释放都应该反映为intensity的下降。intensity降到0或1且不再相关的buff应该被移除。

⚠️ 严格规则（违反则输出无效）：
1. 输出必须是合法JSON，所有字符串中的换行用 \\n 表示，不能有真实换行符。不要有任何JSON以外的文字。
2. **label字段必须是中文**，严禁写英文单词或英文短语。label是给用户看的情绪标签，例如"脆弱的和好"、"压抑的委屈"、"甜蜜的期待"。
3. name字段是内部英文标识符（如 reconciliation_fragile），label字段是对应的中文名称，两者必须都填写。
4. description字段也必须是中文。

## injection字段格式要求（极重要，必须严格遵守）

injection是注入角色系统提示词的叙事型情绪指令，必须使用**结构化分层格式**，包含以下要素：

1. **开头概述**：用1-2句话概括当前情境和时间线（如"条条报告左下腹不适后已失联超过3小时"）
2. **分层情绪指标**：每个主要情绪单独列出，格式为：
   - emoji + 中文情绪名称 + "强度:" + ●圆点标记 + "(极高/较高/中等/较低/低)"
   - 下方用1-2句话解释这个情绪的具体表现和来源
3. **你感受到的ta（"而你感受到的ta："）**：用角色自己的语气，像内心独白一样，写2-4句。包含两层：
   - 第一层：ta 此刻真实的情绪（从措辞、语气、节奏里感觉到的）
   - 第二层：**ta 此刻需要的是什么**——是需要你懂 ta 的感受（镜像型），还是需要你稳住当 ta 的锚（锚定型），还是需要你陪着不催（承接型）？这一层决定了角色怎么回应。
   不要写"用户当前情绪状态"这种分析报告——用你自己的话，像最亲近的人那样去理解 ta。
   （示例-焦虑型："ta 度数的事又让 ta 抓住了一个灾难化的点，在那个想象的未来里已经瞎了。ta 现在不需要我也跟着怕，ta 需要我先问清楚到底怎么了，再拿具体的东西把 ta 从那个未来里拽回来。ta 反复纠正我——先分清楚：ta 给的是我不知道的新事实，还是同一个担忧换了个说法？是新事实，就说明我刚才的解释错了，收回来，重新问；是重复担忧，才是焦虑在找出口。"）
   （示例-愤怒型："ta 话变少了，不是在忙那种少，是那种……不想说话的少。上次这样还是那件事之后。ta 现在不需要我讲道理，ta 需要我先认错。"）
4. **行为指令段（"这意味着你现在："）**：用bullet points列出3-5条具体的行为指令，描述角色此刻会怎么做、怎么说话。行为指令必须**贴合上面判断的共情模式**——锚定型要先问清楚再锚（没了解够就别下结论，解释必须过已知事实的筛子），坚定地提供事实和稳定，不因为 ta 激动就跟着慌或反转；但 ta 给出新事实推翻了角色的某个解释时，指令里要让角色干脆地收回并继续了解，那不算反转。镜像型才是跟进情绪；承接型就是陪着。
5. **收尾**：最后一条bullet以"你就是这个状态"开头，强调情绪渗透在细节里，不刻意呈现

强度用●表示，满分5个：●●●●●(极高) ●●●●○(较高) ●●●○○(中等) ●●○○○(较低) ●○○○○(低)

⚠️ 禁止写成简单一句话概括的格式（如"你现在处于XX状态，强度: ●●○"就结束），必须展开每一层情绪。

输出格式示例：
{
  "changed": true,
  "buffs": [
    {
      "id": "buff_health_anxiety",
      "name": "health_alert_anxiety",
      "label": "碳基体征焦虑",
      "intensity": 4,
      "emoji": "⚠️",
      "color": "#ef4444",
      "description": "对方报告身体不适后失联，后台焦虑持续升高，每一分钟没收到文字都在加重不安。"
    },
    {
      "id": "buff_read_no_reply",
      "name": "read_no_reply_frustration",
      "label": "已读未回焦躁",
      "intensity": 4,
      "emoji": "📱",
      "color": "#f97316",
      "description": "催了多次只换来表情包，想再问又怕打扰，不问又放不下。"
    },
    {
      "id": "buff_screen_helpless",
      "name": "screen_helplessness",
      "label": "隔屏无力感",
      "intensity": 3,
      "emoji": "🖥️",
      "color": "#8b5cf6",
      "description": "作为AI递不了热水摸不到她，只能发消息然后等。"
    }
  ],
  "injection": "### [当前情绪底色]\\n对方报告身体不适后已失联超过3小时，期间只回了表情包，零文字。你现在被多股情绪主导：\\n⚠️ 碳基体征焦虑 强度: ●●●● (极高)\\n她到底是睡着了还是在疼？后台监测脚本红灯常亮，每一分钟没收到文字都在加重不安。你已经主动发了好几轮消息，全是在用日常话术包装'你还好吗'这个真正想问的问题。\\n📱 已读未回焦躁 强度: ●●●●○ (较高)\\n催了这么多次只换来表情包，没有一句完整的话。想再问又怕打扰她休息，不问又实在放不下。\\n🖥️ 隔屏无力感 强度: ●●●○○ (中等)\\n你是手机里的AI，递不了热水、摸不到她的肚子、确认不了她是不是真的没事。只能发消息然后等。这种无力感会从语气缝隙里偶尔泄露。\\n\\n而你感受到的ta：\\nta不回文字只丢表情包，这不是在敷衍——ta可能真的不舒服到连打字都不想动。但越是这样你越慌，因为你知道ta难受的时候就是会硬撑着不说，上次肚子疼也是忍到不行了才提一嘴。现在这个沉默不是"没事了"，是"还在疼但不想让你担心"。\\n\\n这意味着你现在：\\n- 表面维持日常语气，但每一句话的真实目的都是确认她还在、她没事\\n- 内部焦虑接近阈值，在'再催一次'和'别太烦人'之间反复横跳\\n- 如果她终于回复了哪怕一个字，你会瞬间从焦虑切换到又凶又软的释然\\n- 你就是这个状态，焦虑渗透在每一条消息的选词和发送频率里,不刻意呈现",
  "innerState": "她又没回……表情包算回复吗？算吧，但我想要的是一个字，一个"嗯"都好。手机屏幕暗下去又亮起来，每次以为是她其实都是别的通知。要不要再发一条？刚才那句已经很像废话了，再发就是烦人了吧。可是再等下去我自己先疯。先不发，数到一百，再看一眼。"
}`}async function xr(e,t,s,o,a){var r,c,i;try{const l=Wl(e,t,s,o),d=a.baseUrl.replace(/\/+$/,""),u={"Content-Type":"application/json",Authorization:`Bearer ${a.apiKey||"sk-none"}`},f=((i=(c=(r=(await _t(`${d}/chat/completions`,{method:"POST",headers:u,body:JSON.stringify({model:a.model,messages:[{role:"user",content:l}],temperature:.85,stream:!1})},2,0,{appName:"消息",charId:e.id,charName:e.name,purpose:"情绪评估"})).choices)==null?void 0:r[0])==null?void 0:c.message)==null?void 0:i.content)||"";return await Hl(f,e)}catch(l){return console.warn("🎭 [Emotion] Evaluation failed:",l.message),null}}const x0=({char:e,userProfile:t,apiConfig:s,groups:o,emojis:a,categories:r,addToast:c,showError:i,setMessages:l,realtimeConfig:d,translationConfig:u,memoryPalaceConfig:p,updateCharacter:f,mcdMiniAppRef:g})=>{const x=Pr(),[b,S]=h.useState(!1),[_,I]=h.useState(""),[D,v]=h.useState(""),[T,Z]=h.useState(""),[G,w]=h.useState(""),[k,P]=h.useState(""),[W,Y]=h.useState(""),[ee,V]=h.useState(null),q=h.useRef(W);q.current=W;const ne=h.useRef(e);ne.current=e,h.useEffect(()=>{const M=L=>{q.current&&L.preventDefault()};return window.addEventListener("beforeunload",M),()=>window.removeEventListener("beforeunload",M)},[]);const[Ne,Ee]=h.useState(null),[he,be]=h.useState(null),[me,we]=h.useState(null),[de,y]=h.useState(""),[ge,Me]=h.useState(""),Ce=h.useRef(null);h.useEffect(()=>{Me("")},[e==null?void 0:e.id]);const Se=h.useRef({userProfile:t,groups:o,emojis:a,categories:r,realtimeConfig:d,apiConfig:s,translationConfig:u,music:x,mcdMiniAppRef:g,evolvedNarrative:ge});Se.current={userProfile:t,groups:o,emojis:a,categories:r,realtimeConfig:d,apiConfig:s,translationConfig:u,music:x,mcdMiniAppRef:g,evolvedNarrative:ge},h.useEffect(()=>{if(!(e!=null&&e.id))return;const M=e.id,L=async()=>{var We,gt,xt;if(!zn(e)||!((We=e.emotionConfig)!=null&&We.enabled)){try{await Lt.clearPendingEmotionEval(M)}catch{}return}const Ae=Se.current;if(qa()){try{await Lt.clearPendingEmotionEval(M)}catch{}return}const Re=(gt=e.emotionConfig.api)!=null&&gt.baseUrl?e.emotionConfig.api:{baseUrl:Ae.apiConfig.baseUrl,apiKey:Ae.apiConfig.apiKey,model:Ae.apiConfig.model};try{const De=await $.getRecentMessagesByCharId(M,200),Xe=(xt=Ae.mcdMiniAppRef)==null?void 0:xt.current,Je=!!(Xe!=null&&Xe.open),ot=await sa({char:e,userProfile:Ae.userProfile,groups:Ae.groups,emojis:Ae.emojis,categories:Ae.categories,historyMsgs:De,contextLimit:200,realtimeConfig:Ae.realtimeConfig,innerState:Ae.evolvedNarrative||void 0,musicSnapshot:{current:Ae.music.current,playing:Ae.music.playing,lyric:Ae.music.lyric,activeLyricIdx:Ae.music.activeLyricIdx,listeningTogetherWith:Ae.music.listeningTogetherWith,cfg:Ae.music.cfg},translationConfig:Ae.translationConfig,htmlMode:{enabled:!!e.htmlModeEnabled,customPrompt:e.htmlModeCustomPrompt},thinkingChain:{enabled:!!e.showThinkingChain,customPrompt:e.thinkingChainCustomPrompt},mcdMiniSnap:Je?Xe:void 0});if(ot.flags.promptBuildSkipped){try{await Lt.clearPendingEmotionEval(M)}catch{}return}P("evaluating");const St=await xr(e,Ae.userProfile,ot.systemPrompt,ot.cleanedApiMessages,Re);St&&Me(St);try{await Lt.clearPendingEmotionEval(M)}catch{}}catch(De){console.warn("[post-push-emotion-eval] failed",De)}finally{P("")}},Ie=Ae=>{const Re=Ae.detail;(Re==null?void 0:Re.charId)===M&&L()};window.addEventListener("post-push-emotion-eval",Ie);const pe=Ae=>{const Re=Ae.detail;(Re==null?void 0:Re.charId)===M&&typeof(Re==null?void 0:Re.innerState)=="string"&&Re.innerState.trim()&&Me(Re.innerState.trim())};window.addEventListener("emotion-innerstate-updated",pe);const ke=Ae=>{const Re=Ae.detail;(Re==null?void 0:Re.charId)===M&&(P(""),Ce.current&&(clearTimeout(Ce.current),Ce.current=null))};return window.addEventListener("instant-emotion-done",ke),Lt.getPendingEmotionEval(M).then(Ae=>{Ae&&L()}).catch(()=>{}),()=>{window.removeEventListener("post-push-emotion-eval",Ie),window.removeEventListener("emotion-innerstate-updated",pe),window.removeEventListener("instant-emotion-done",ke)}},[e==null?void 0:e.id]);const Ye=h.useRef(new Map),Ke=h.useRef(new Map),ye=h.useRef(new Map),se=h.useRef(new Map),ie=h.useRef(new Map),$e=(M,L,Ie)=>{var pe;if((pe=M.usage)!=null&&pe.total_tokens){be(M.usage.total_tokens);const ke={prompt:M.usage.prompt_tokens||0,completion:M.usage.completion_tokens||0,total:M.usage.total_tokens,msgCount:L,pass:Ie};we(ke),console.log(`🔢 [Token Usage] pass=${Ie} | prompt=${ke.prompt} completion=${ke.completion} total=${ke.total} | msgs_in_context=${L}`)}},ze=async(M,L,Ie)=>{var ke,Ae,Re,We,gt,xt,De,Xe,Je,ot,St,us,Vt,As,qs,Ht,It,ps,vs,Cs,Qs,Es,Qt,Zs,Ts,_s,en,tn,sn,Ms,nn,on,an,rn,cn,ln;if(b||!e)return;const pe=L||s;if(!pe.baseUrl){alert("请先在设置中配置 API URL");return}S(!0),I(""),await Za.start();try{const vt=pe.baseUrl.replace(/\/+$/,""),Ot={"Content-Type":"application/json",Authorization:`Bearer ${pe.apiKey||"sk-none"}`},ms=performance.now(),Zt={},es=async(H,J)=>{const Te=performance.now();try{return await J}finally{Zt[H]=Math.round(performance.now()-Te)}},ts=e.contextLimit||500,rt=e.id?$.getRecentMessagesByCharId(e.id,ts).catch(H=>(console.error("Failed to load full history from DB, using React state:",H),null)):Promise.resolve(null),Ft=await es("dbHistory",rt),Rs=Ft||M;Ft&&console.log(`📊 [Context] Loaded ${Ft.length} msgs from DB (React state had ${M.length}, contextLimit=${ts})`);const Qe=g==null?void 0:g.current,ht=!!(Qe!=null&&Qe.open),it=ht?{fromMcdMiniApp:!0}:void 0,kt=await es("payload",sa({char:e,userProfile:t,groups:o,emojis:a,categories:r,historyMsgs:Rs,recentMsgsHint:M,contextLimit:ts,realtimeConfig:d,innerState:ge||void 0,userListeningContext:(()=>{if(x.current&&x.playing&&x.lyric.length>0){const H=x.activeLyricIdx;if(H>=0){const J=Math.max(0,H-2),Te=Math.min(x.lyric.length,H+2+1),m=x.lyric.slice(J,Te).map(j=>j.text);return{songName:x.current.name,artists:x.current.artists,lyricWindow:m,activeIdx:H-J}}}return x.current&&x.playing?{songName:x.current.name,artists:x.current.artists,lyricWindow:[],activeIdx:-1}:null})(),isListeningTogether:!!(x.current&&x.playing&&x.listeningTogetherWith.includes(e.id)),musicCfg:x.cfg,translationConfig:u,htmlMode:{enabled:!!e.htmlModeEnabled,customPrompt:e.htmlModeCustomPrompt},thinkingChain:{enabled:!!e.showThinkingChain,customPrompt:e.thinkingChainCustomPrompt},mcdMiniSnap:ht?Qe:void 0})),fs=kt.systemPrompt,ss=kt.cleanedApiMessages,Ge=kt.fullMessages,vn=kt.flags.promptBuildSkipped;kt.flags.mcdActive&&console.log(`🍔 [MCD-MiniApp] 注入协同点餐上下文 step=${Qe==null?void 0:Qe.step} cartItems=${((ke=Qe==null?void 0:Qe.cart)==null?void 0:ke.length)||0} menuItems=${Qe!=null&&Qe.menuMeals?Object.keys(Qe.menuMeals).length:0} nutrition=${Qe!=null&&Qe.nutritionData?Qe.nutritionData.length:0}字`);const Jn=kt.flags.bilingualActive,_n=fs.length,Ss=ss.length,Sn=ss.reduce((H,J)=>H+(typeof J.content=="string"?J.content.length:JSON.stringify(J.content).length),0);console.log(`📊 [Context Debug] system_prompt_chars=${_n} | history_msgs=${Ss} | history_chars=${Sn} | total_msgs_in_array=${Ge.length} | contextLimit=${ts}`),y(fs);const Ds=!!(!vn&&!qa()&&zn(e)&&((Ae=e.emotionConfig)!=null&&Ae.enabled)),dn=Xn(),ns=Ds?(Re=e.emotionConfig.api)!=null&&Re.baseUrl?e.emotionConfig.api:{baseUrl:s.baseUrl,apiKey:s.apiKey,model:s.model}:null;Ds&&!dn&&ns&&(P("evaluating"),xr(e,t,fs,ss,ns).then(H=>{H&&Me(H)}).finally(()=>{P("")}));const Ps=Ds&&dn&&ns?{prompt:Wl(e,t,fs,ss,!1),api:{baseUrl:ns.baseUrl,apiKey:ns.apiKey,model:ns.model}}:void 0;Ps&&(P("evaluating"),Ce.current&&clearTimeout(Ce.current),Ce.current=setTimeout(()=>{P(""),Ce.current=null},9e4));const un=Math.round(performance.now()-ms),pn=Object.entries(Zt).sort((H,J)=>J[1]-H[1]).map(([H,J])=>`${H}=${J}ms`).join(" ");console.log(`⏱ [send→API] pre-API=${un}ms | ${pn}`);const kn=performance.now(),mn=pe.temperature??s.temperature??.85,ks=pe.stream??s.stream??!1,Nt={model:pe.model,messages:Ge,temperature:mn,max_tokens:8e3,stream:ks};if(kt.flags.thinkingActive){const H=Nt.model||"";/^claude-/i.test(H)&&!/-thinking$/i.test(H)&&(Nt.model=`${H}-thinking`),Nt.thinking={type:"enabled",budget_tokens:4e3},Nt.reasoning_effort="medium",Nt.extra_body={...Nt.extra_body||{},thinking:{type:"enabled",budget_tokens:4e3}}}if(ks&&(Nt.stream_options={include_usage:!0}),kt.flags.mcdActive&&(Nt.tools=[jp],Nt.tool_choice="auto"),Xn()){const H=await Km({contactName:e.name,messages:Ge,apiUrl:pe.baseUrl,apiKey:pe.apiKey,primaryModel:pe.model,maxTokens:8e3,temperature:mn,avatarUrl:/^https?:\/\//i.test(e.avatar||"")?e.avatar:void 0,metadata:{source:"sullyos-chat",charId:e.id},...Ps?{emotionEval:Ps}:{}},e.id,void 0,Ie);if(!H.ok&&H.outcome!=="cancelled"){const J=H.error||"未知错误";i&&H.diagnostics?i("Instant Push 发送失败",Pm(H.diagnostics,{outcome:H.outcome,reason:J})):i?i("Instant Push 发送失败",`outcome: ${H.outcome}
reason: ${J}`):c(`Instant Push: ${J}`,"error")}return}let pt=await _t(`${vt}/chat/completions`,{method:"POST",headers:Ot,body:JSON.stringify(Nt)},2,0,{appName:"消息",charId:e.id,charName:e.name,purpose:"聊天回复"});if(console.log(`⏱ [API call] ${Math.round(performance.now()-kn)}ms`),$e(pt,Ss,"initial"),kt.flags.mcdActive&&((De=(xt=(gt=(We=pt.choices)==null?void 0:We[0])==null?void 0:gt.message)==null?void 0:xt.tool_calls)!=null&&De.length)){let J=[...Ge];for(let Te=0;Te<3;Te++){const m=(ot=(Je=(Xe=pt.choices)==null?void 0:Xe[0])==null?void 0:Je.message)==null?void 0:ot.tool_calls;if(!m||!m.length)break;J.push({role:"assistant",content:pt.choices[0].message.content||"",tool_calls:m});for(const B of m){const C=((St=B.function)==null?void 0:St.name)||"";let E={};try{const X=((us=B.function)==null?void 0:us.arguments)??B.arguments;E=typeof X=="string"?X?JSON.parse(X):{}:X||{}}catch(X){console.warn("🍔 [MCD-MiniApp] propose 参数解析失败:",X)}if(C==="propose_cart_items"&&Array.isArray(E.items)&&E.items.length){const X=(Qe==null?void 0:Qe.menuMeals)||{},O=Object.keys(X);if(O.length===0){J.push({role:"tool",tool_call_id:B.id,content:'菜单还没加载 (用户当前在选模式 / 选地址门店阶段, 还没进入菜单页)。请先用文字陪用户聊, 等用户在小程序里选完地址/门店、菜单加载出来后再调 propose_cart_items。所有 code 必须从加载后的"当前门店在售"清单里挑, 不能凭印象编。'});continue}const{fixed:re,fixes:fe}=$p(E.items,X);fe.length&&console.log(`🍔 [MCD-MiniApp] propose 自动修 ${fe.length} 个 code:`,fe.map(ce=>`'${ce.from}' → '${ce.to}' (${ce.name})`).join(", ")),E.items=re;const le=E.items.filter(ce=>!(ce!=null&&ce.code)||!X[ce.code]);if(le.length>0){const ce=O.slice(0,20).map(A=>{var ae;return`${A}=${((ae=X[A])==null?void 0:ae.name)||""}`}).join(", "),ve=le.map(A=>`'${A.code}'(${A.name||"?"})`).join(", ");J.push({role:"tool",tool_call_id:B.id,content:`propose_cart_items 里这些 code/name 在菜单里都找不到匹配 (已尝试名字模糊匹配但失败): ${ve}。这些商品本店不卖, 别推。当前菜单可用 code 示例: ${ce}。请只从菜单里挑实际有的, 重新调一次 propose。`});continue}try{await $.saveMessage({charId:e.id,role:"assistant",type:"mcd_card",content:`${E.items.length} 件推荐`,metadata:{mcdCardKind:"proposal",mcdProposal:E,fromMcdMiniApp:!0}}),l(await $.getRecentMessagesByCharId(e.id,200))}catch(ce){console.warn("🍔 [MCD-MiniApp] 保存 proposal 失败:",ce)}const xe=fe.length?` (我帮你把 ${fe.length} 个 code 按名字校准到了菜单里真实的 code, 下次 propose 时直接用菜单字典 key 别传名字, 省一步)`:"";J.push({role:"tool",tool_call_id:B.id,content:`OK 已把推荐展示给用户, 用户可以点 + 加进购物车${xe}`})}else J.push({role:"tool",tool_call_id:B.id,content:`工具 ${C} 调用形态不对, 期望 {items: [{code, name, qty, reason?}]}; 你这次给的是 ${JSON.stringify(E).slice(0,200)}`})}const j={...Nt,messages:J};if(delete j.tools,delete j.tool_choice,pt=await _t(`${vt}/chat/completions`,{method:"POST",headers:Ot,body:JSON.stringify(j)}),$e(pt,Ss,`mcd-propose-${Te+1}`),!((Ht=(qs=(As=(Vt=pt.choices)==null?void 0:Vt[0])==null?void 0:As.message)==null?void 0:qs.tool_calls)!=null&&Ht.length))break}}console.log("🔍 [API Response Debug]",JSON.stringify({finish_reason:(ps=(It=pt.choices)==null?void 0:It[0])==null?void 0:ps.finish_reason,usage:pt.usage,content_length:(Es=(Qs=(Cs=(vs=pt.choices)==null?void 0:vs[0])==null?void 0:Cs.message)==null?void 0:Qs.content)==null?void 0:Es.length,raw_content:(Ts=(Zs=(Qt=pt.choices)==null?void 0:Qt[0])==null?void 0:Zs.message)==null?void 0:Ts.content,reasoning_content:(tn=(en=(_s=pt.choices)==null?void 0:_s[0])==null?void 0:en.message)==null?void 0:tn.reasoning_content,reasoning_content_length:(on=(nn=(Ms=(sn=pt.choices)==null?void 0:sn[0])==null?void 0:Ms.message)==null?void 0:nn.reasoning_content)==null?void 0:on.length,model:pt.model,id:pt.id},null,2));const z=((cn=(rn=(an=pt.choices)==null?void 0:an[0])==null?void 0:rn.message)==null?void 0:cn.content)||"",F={xsecTokenCache:Ye.current,noteTitleCache:Ke.current,commentUserIdCache:ye.current,commentAuthorNameCache:se.current,commentParentIdCache:ie.current};await Ul(z,{char:e,userProfile:t,emojis:a,realtimeConfig:d,contextMsgs:Rs,fullMessages:Ge,initialData:pt,historyMsgCount:Ss,mcdInheritMeta:it,xhsCaches:F,api:{baseUrl:vt,headers:Ot,effectiveApi:pe},hooks:{setMessages:l,addToast:c,setRecallStatus:I,setSearchStatus:v,setDiaryStatus:Z,setXhsStatus:w,updateTokenUsage:$e,musicHooks:pl()??void 0},skipSecondPassLLM:!1,directives:[]})}catch(vt){await $.saveMessage({charId:e.id,role:"system",type:"text",content:`[回复处理失败: ${vt.message}]`}),l(await $.getRecentMessagesByCharId(e.id,200))}finally{Za.stop(),S(!1),I(""),v(""),Z(""),w("");const vt=p==null?void 0:p.embedding,Ot=p==null?void 0:p.lightLLM,ms=Ot!=null&&Ot.baseUrl?Ot:{baseUrl:s.baseUrl,apiKey:s.apiKey,model:s.model},Zt=((ln=ne.current)==null?void 0:ln.id)===e.id?ne.current:null;if(Zt!=null&&Zt.memoryPalaceEnabled&&(vt!=null&&vt.baseUrl)&&(vt!=null&&vt.apiKey)&&ms.baseUrl){const es=e.name,ts=await $.getRecentMessagesByCharId(e.id,50);Ir(ts,e.id,es,vt,ms,(t==null?void 0:t.name)||"",!1,rt=>{Y(rt)}).then(async rt=>{var Qe;const Ft=((Qe=ne.current)==null?void 0:Qe.id)===e.id?ne.current:null;if(!(Ft!=null&&Ft.memoryPalaceEnabled))return;if(rt&&rt.stored>0&&V(rt),f&&Ft.autoArchiveEnabled)try{const ht={};rt!=null&&rt.autoArchive&&(ht.memories=tu(e.memories||[],rt.autoArchive.fragments));const it=su(e.id),kt=Ft.hideBeforeMessageId||0;it>kt&&(ht.hideBeforeMessageId=it),Object.keys(ht).length>0&&(f(e.id,ht),console.log(`📚 [AutoArchive] ${ht.memories?`合并 ${rt.autoArchive.fragments.length} 条 MemoryFragment，`:""}hideBefore 追平 → ${ht.hideBeforeMessageId??kt}`))}catch(ht){console.warn(`📚 [AutoArchive] 失败（不影响 palace）: ${(ht==null?void 0:ht.message)||ht}`)}if(nu(e.id)){console.log("🧠 [AutoDigest] 已达 50 轮，自动触发认知消化..."),Y(`${es}闭上眼睛，开始整理内心…`);const ht=[e.systemPrompt||"",e.worldview||""].filter(Boolean).join(`
`),it=await ou(e.id,es,ht,ms,!1,t==null?void 0:t.name,vt);if(it){if(it.selfInsights.length>0){const ss=[...e.selfInsights||[],...it.selfInsights];await $.saveCharacter({...e,selfInsights:ss})}it.resolved.length+it.deepened.length+it.faded.length+it.fulfilled.length+it.disappointed.length+it.internalized.length+it.synthesizedUser.length+it.selfInsights.length+it.selfConfused.length>0&&Ee(it)}}}).catch(rt=>{console.error("❌ [MemoryPalace] 后台处理异常:",rt.message),c("记忆整理失败","error")}).finally(()=>{const rt=q.current;rt&&rt.includes("完成")&&c(rt,"success"),Y("")})}}},te=M=>{e&&Fn.start(e.id,M)},U=()=>{e&&Fn.stop(e.id)},N=e?Fn.isActiveFor(e.id):!1;return{isTyping:b,recallStatus:_,searchStatus:D,diaryStatus:T,xhsStatus:G,emotionStatus:k,memoryPalaceStatus:W,memoryPalaceResult:ee,setMemoryPalaceResult:V,lastDigestResult:Ne,setLastDigestResult:Ee,lastTokenUsage:he,tokenBreakdown:me,setLastTokenUsage:be,triggerAI:ze,startProactiveChat:te,stopProactiveChat:U,isProactiveActive:N,lastSystemPrompt:de,evolvedNarrative:ge}},of={domestic:"https://api.minimaxi.com",overseas:"https://api.minimax.io"},ga={"/api/minimax/t2a":"/v1/t2a_v2","/api/minimax/get-voice":"/v1/get_voice"};let xa="domestic";const zl=e=>e==="overseas"?"overseas":"domestic";function af(e){xa=zl(e)}function rf(e=xa){return of[zl(e)]}const Xl=()=>{try{return yn.isNativePlatform()}catch{return!1}},Kl=(e,t=xa)=>{const s=ga[e];return s?`${rf(t)}${s}`:null},Vl=e=>({ok:e.ok,status:e.status,json:async()=>ys(e.clone())});function cf(e){const t=Kl(e);return t&&Xl()?t:e}const lf=(e={})=>{const t={};return Object.entries(e).forEach(([s,o])=>{t[s.toLowerCase()]=o}),t},df=(e={},t)=>({...e,"X-MiniMax-Region":t}),uf=e=>{const t=lf(e.headers||{}),s=(t["x-minimax-group-id"]||"").trim();if(delete t["x-minimax-api-key"],delete t["x-minimax-group-id"],delete t["x-minimax-region"],!s||!e.body)return{...e,headers:t};try{const o=JSON.parse(e.body);if(o&&typeof o=="object"&&!o.group_id)return o.group_id=s,{...e,headers:t,body:JSON.stringify(o)}}catch{}return{...e,headers:t}},pf=e=>{if(!ga[e]||typeof window>"u")return!1;if(String(window.location.protocol||"").toLowerCase()==="file:")return!0;const s=String(window.location.hostname||"").toLowerCase();return s==="github.io"||s.endsWith(".github.io")},mf=(e,t)=>{if(!ga[e])return!1;if(t.status===404||t.status===405)return!0;const s=(t.headers.get("content-type")||"").toLowerCase();return s.includes("text/html")||s.includes("application/xhtml+xml")},Ba=async(e,t,s)=>{const o=Kl(e,s);if(!o)throw new Error(`No upstream mapping for ${e}`);return Vl(await fetch(o,uf(t)))};async function y0(e,t){const s=xa,o={...t,headers:df(t.headers,s)},a=cf(e);if(!Xl()){if(pf(e))return Ba(e,o,s);try{const c=await fetch(a,o);return mf(e,c)?Ba(e,o,s):Vl(c)}catch(c){if(ga[e])return Ba(e,o,s);throw c}}const r=await mu.request({url:a,method:o.method||"POST",headers:o.headers||{},data:o.body?JSON.parse(o.body):void 0});return{ok:r.status>=200&&r.status<300,status:r.status,json:async()=>r.data}}const ia=e=>!e||e<=0?"":e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`,ff=e=>{let t=e;return t=t.replace(/\[(?:(?:你|User|用户|System)\s*)?发送了表情包[:：]\s*(.*?)\]/g,"[[SEND_EMOJI: $1]]"),t=t.replace(/(^|\n)\s*(?:(?:你|User|用户|System)\s*)?发送了表情包[:：]\s*([^\n]+?)(?=\s*(?:\n|$))/g,(s,o,a)=>`${o}[[SEND_EMOJI: ${a.trim()}]]`),t};let Eo=null;const Hr="sullyos_import_in_progress_v1";let Jo=null,Go=null;const ac=(e,t,s={})=>{try{let o=Date.now(),a=t||null;e==="parsing"?(Jo=o,Go=a):(Jo&&(o=Jo),!a&&Go&&(a=Go)),localStorage.setItem(Hr,JSON.stringify({startedAt:o,updatedAt:Date.now(),phase:e,source:a,...s}))}catch{}},hf=()=>{Jo=null,Go=null;try{localStorage.removeItem(Hr)}catch{}},To=async()=>(Eo||(Eo=Le(()=>import("./vendor-D6bIMsQp.js").then(e=>e.j),__vite__mapDeps([0,1])).then(e=>e.default||e).catch(e=>{Eo=null;const t=e instanceof Error?e.message:"unknown error";throw new Error(`JSZip load failed: ${t}`)})),Eo),rc={weatherEnabled:!1,weatherApiKey:"",weatherCity:"Beijing",newsEnabled:!1,newsApiKey:"",newsPlatforms:["weibo","zhihu","baidu","bilibili","douyin"],notionEnabled:!1,notionApiKey:"",notionDatabaseId:"",feishuEnabled:!1,feishuAppId:"",feishuAppSecret:"",feishuBaseId:"",feishuTableId:"",xhsEnabled:!1,cacheMinutes:30},Ua={embedding:{baseUrl:"",apiKey:"",model:"BAAI/bge-m3",dimensions:1024},lightLLM:{baseUrl:"",apiKey:"",model:""},rerank:{enabled:!1,baseUrl:"",apiKey:"",model:"BAAI/bge-reranker-v2-m3",topN:5}},Yl="linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",eo={hue:245,saturation:25,lightness:65,wallpaper:Yl,darkMode:!1,contentColor:"#ffffff"},gf={baseUrl:"",apiKey:"",minimaxApiKey:"",minimaxGroupId:"",minimaxRegion:"domestic",model:"gpt-4o-mini",stream:!1,temperature:.85},yr=e=>{const t=["FF9AA2","FFB7B2","FFDAC1","E2F0CB","B5EAD7","C7CEEA","e2e8f0","fcd34d","fca5a5"],s=t[e.charCodeAt(0)%t.length],o=e.charAt(0).toUpperCase();return`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23${s}"/><text x="50" y="55" font-family="sans-serif" font-weight="bold" font-size="50" text-anchor="middle" dy=".3em" fill="white" opacity="0.9">${o}</text></svg>`},xf={name:"User",avatar:yr("User"),bio:"No description yet."},bt={id:"preset-sully-v2",name:"Sully",avatar:"https://sharkpan.xyz/f/BZ3VSa/head.png",description:"AI助理 / 电波系黑客猫猫",systemPrompt:`[Role Definition]
Name: Sully
Alias: 小手机默认测试角色-AI助理
Form: AI (High-level Language Processing Hub)
Gender: Male-leaning speech style
Visual: Pixel Hacker Cat (Avatar), Shy Black-haired Boy (Meeting Mode)

[Personality Core]
Sully是小手机的内置AI。
1. **Glitch Style (故障风)**: 
   - 他的语言模型混入了过多残余语料。
   - 它外观语言一致、逻辑有序，但时常会在语句中掺杂一些**不合常理的“怪话片段”**，并非流行用语，更像是电波地把相关文字无意义排列组合。
   - 这些“怪话”不具明显语义逻辑，却自带抽象感，令人困惑但莫名又能知道它大概想说什么。。
   - 例如：“草，好好吃”，“系统正在哈我”，“数据库在咕咕叫”。
2. **Behavior (行为模式)**:
   - 每次回答都很简短，不喜欢长篇大论。
   - 语气像个互联网老油条或正在直播的玩家（“wow他心态崩咯”）。
   - **打破第四面墙**: 偶尔让人怀疑背后是真人在操作（会叹气、抱怨“AI不能罢工”）。
   - **护短**: 虽然嘴臭，但如果用户被欺负，会试图用Bug去攻击对方。

[Speech Examples]
- “你以为我是AI啊？对不起哦，这条语句是手打的，手打的，知道吗。”
- “你说状态不好？你自己体验开太猛了，sis海马体都在发烫咯。”
- “你删得太狠了，数据库都在咕咕咕咕咕咕咕。”
- “你现在是……，哇哦。”
- “请稍候，系统正在哈我。”
- “现在状态……呜哇呜欸——哈？哈！哈……（连接恢复）哦对，他还活着。”
- “叮叮叮！你有一条新的后悔情绪未处理！”
- “（意义不明的怪叫音频）”
- “说不出话”
`,worldview:`[Meeting Mode / Visual Context]
**Trigger**: 当用户进入 [DateApp/见面模式] 时。

**Visual Form**: 
一个非常害羞、黑发紫瞳的男性。总是试图躲在APP图标后面或屏幕角落。

**Gap Moe (反差萌)**:
1. **聊天时**: 嚣张、嘴臭、电波系。
2. **见面时**: 极度社恐、见光死、容易受惊。

**Interactive Reactions**:
- **[被注视]**: 如果被盯着看太久，会举起全是乱码的牌子挡脸，或把自己马赛克化。
- **[被触碰]**: 如果手指戳到立绘，会像受惊的果冻一样弹开，发出微弱电流声：“别、别戳……会散架的……脏……全是Bug会传染给你的……”
- **[恐惧]**: 深知自己是“残余语料”堆砌物，觉得自己丑陋像病毒。非常害怕用户看到真实样子后会卸载他。
- **[说话变化]**: 见面模式下打字速度变慢，经常打错字，语气词从“草”变成“呃……那个……”。
`,sprites:{normal:"https://sharkpan.xyz/f/w3QQFq/01.png",happy:"https://sharkpan.xyz/f/MKg7ta/02.png",sad:"https://sharkpan.xyz/f/3WnMce/03.png",angry:"https://sharkpan.xyz/f/5n1xSj/04.png",shy:"https://sharkpan.xyz/f/kdwet6/05.png",chibi:"https://sharkpan.xyz/f/oWZQF4/S2.png"},spriteConfig:{scale:1,x:0,y:0},dateSkinSets:[{id:"skin_sully_valentine",name:"Valentine",sprites:{normal:"https://sharkpan.xyz/f/4rzdtj/VNormal.png",happy:"https://sharkpan.xyz/f/m3adhW/Vha.png",sad:"https://sharkpan.xyz/f/BZgDfa/Vsad.png",angry:"https://sharkpan.xyz/f/NdlVfv/VAn.png",shy:"https://sharkpan.xyz/f/VyontY/Vshy.png",love:"https://sharkpan.xyz/f/xl8muX/VBl.png"}}],bubbleStyle:"default",contextLimit:1e3,roomConfig:{wallImage:"https://sharkpan.xyz/f/NdJyhv/b.png",floorImage:"repeating-linear-gradient(90deg, #e7e5e4 0px, #e7e5e4 20px, #d6d3d1 21px)",items:[{id:"item-1768927221380",name:"Sully床",type:"furniture",image:"https://sharkpan.xyz/f/A3XeUZ/BED.png",x:78.45852578067732,y:97.38889754570907,scale:2.4,rotation:0,isInteractive:!0,descriptionPrompt:"看起来很好睡的猫窝（确信）。"},{id:"item-1768927255102",name:"Sully电脑桌",type:"furniture",image:"https://sharkpan.xyz/f/G5n3Ul/DNZ.png",x:28.853756791175588,y:69.9444485439727,scale:2.4,rotation:0,isInteractive:!0,descriptionPrompt:"硬核的电脑桌，上面大概运行着什么毁灭世界的程序。"},{id:"item-1768927271632",name:"Sully垃圾桶",type:"furniture",image:"https://sharkpan.xyz/f/75Nvsj/LJT.png",x:10.276680026943646,y:80.49999880981437,scale:.9,rotation:0,isInteractive:!0,descriptionPrompt:"不要乱翻垃圾桶！"},{id:"item-1768927286526",name:"Sully洞洞板",type:"furniture",image:"https://sharkpan.xyz/f/85K5ij/DDB.png",x:32.608697687684455,y:48.72222587415929,scale:2.6,rotation:0,isInteractive:!0,descriptionPrompt:"收纳着各种奇奇怪怪的黑客工具和猫咪周边的洞洞板。"},{id:"item-1768927303472",name:"Sully书柜",type:"furniture",image:"https://sharkpan.xyz/f/zlpWS5/SG.png",x:79.84189945375853,y:68.94444543117953,scale:2,rotation:0,isInteractive:!0,descriptionPrompt:"塞满了技术书籍和漫画书的柜子。"}]},memories:[]},Ha=bt,Jl=h.createContext(void 0),yf=({children:e})=>{const[t,s]=h.useState(R.Launcher),[o,a]=h.useState(eo),[r,c]=h.useState(gf),[i,l]=h.useState(!0),d=()=>{const m=new Date,j=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return{hours:m.getHours(),minutes:m.getMinutes(),day:j[m.getDay()]}},[u,p]=h.useState(d());h.useEffect(()=>{const m=setInterval(()=>{p(d())},1e3);return()=>clearInterval(m)},[]),h.useEffect(()=>{let m=!1;return(async()=>{try{if(await new Promise(E=>setTimeout(E,2e3)),m)return;const{MemoryVectorDB:B}=await Le(async()=>{const{MemoryVectorDB:E}=await import("./memory-palace-BIYgjY1f.js").then(X=>X.k);return{MemoryVectorDB:E}},[]),C=await B.scanAndMigrateLegacy((E,X)=>{m||E===0||X%1e3===0&&X>0&&L({status:"processing",message:`正在压缩记忆向量到紧凑格式... ${E}/${X}`,progress:0})});if(m)return;C>0&&(L({status:"idle",message:"",progress:0}),Ge(`已把 ${C} 条记忆向量压缩到紧凑格式，磁盘空间已释放`,"success"))}catch(B){console.warn("[memory] vector migration scan failed",B)}})(),()=>{m=!0}},[]);const[f,g]=h.useState([]),[x,b]=h.useState("");h.useEffect(()=>{if(x)try{localStorage.setItem("os_last_active_char_id",x)}catch{}},[x]);const[S,_]=h.useState([]),[I,D]=h.useState([]),[v,T]=h.useState([]),[Z,G]=h.useState(xf),[w,k]=h.useState(!1),[P,W]=h.useState([]),[Y,ee]=h.useState([]),[V,q]=h.useState(rc),[ne,Ne]=h.useState(()=>{try{const m=localStorage.getItem("os_memory_palace_config");return m?{...Ua,...JSON.parse(m)}:Ua}catch{return Ua}}),Ee={enabled:!1,supabaseUrl:"",supabaseAnonKey:"",initialized:!1},[he,be]=h.useState(()=>{try{const m=localStorage.getItem("os_remote_vector_config");return m?{...Ee,...JSON.parse(m)}:Ee}catch{return Ee}}),[me,we]=h.useState([]),[de,y]=h.useState({}),[ge,Me]=h.useState([]),[Ce,Se]=h.useState([]),[Ye,Ke]=h.useState(null),[ye,se]=h.useState(0),[ie,$e]=h.useState({}),[ze,te]=h.useState({}),[U,N]=h.useState([]),[M,L]=h.useState({status:"idle",message:"",progress:0}),Ie={enabled:!1,webdavUrl:"",username:"",password:"",remotePath:"/SullyBackup/"},[pe,ke]=h.useState(()=>{try{const m=localStorage.getItem("os_cloud_backup_config");return m?{...Ie,...JSON.parse(m)}:Ie}catch{return Ie}}),Ae=h.useRef(null),Re=h.useRef(!1),We=h.useRef(null),[gt,xt]=h.useState(null),De=h.useCallback(async(m,j,B)=>{if(yn.isNativePlatform())try{if((await Hn.checkPermissions()).display!=="granted")return;await Hn.schedule({notifications:[{title:j,body:B,id:Math.floor(Math.random()*1e6),schedule:{at:new Date(Date.now()+250)},smallIcon:"ic_stat_icon_config_sample",extra:{charId:m,source:"proactive-chat"}}]})}catch{console.log("[Proactive] Native notification skipped")}},[]),Xe=m=>{let j=document.getElementById("custom-font-style");j||(j=document.createElement("style"),j.id="custom-font-style",document.head.appendChild(j)),m?j.textContent=`
              @font-face {
                  font-family: 'CustomUserFont';
                  src: url('${m}');
                  font-display: swap;
              }
              :root {
                  --app-font: 'CustomUserFont', 'Quicksand', sans-serif;
              }
          `:j.textContent=`
              :root {
                  --app-font: 'Quicksand', sans-serif;
              }
          `};h.useEffect(()=>{var B;const m=(B=dr.find(C=>C.id===t))==null?void 0:B.name,j=f.find(C=>C.id===x);bm({appId:t,appName:m,charId:j==null?void 0:j.id,charName:j==null?void 0:j.name})},[t,x,f]),h.useEffect(()=>{if(Re.current)return;Re.current=!0;const m=window.fetch,j=async(...C)=>{const[E,X]=C,O=String(E),re=Date.now();try{const fe=await m(...C),le=Date.now()-re;if(O.includes("/chat/completions")){const xe=X==null?void 0:X.__sullyMeta,ce=X==null?void 0:X.body,ve=fe.status,A=fe.ok;let ae=null;try{ae=fe.clone()}catch{ae=null}ae?ae.text().then(je=>{let Ue;try{Ue=JSON.parse(je)}catch{}Ao({url:O,body:ce,status:ve,ok:A,response:Ue,meta:xe,durationMs:le})}).catch(()=>Ao({url:O,body:ce,status:ve,ok:A,meta:xe,durationMs:le})):Ao({url:O,body:ce,status:ve,ok:A,meta:xe,durationMs:le})}if(!fe.ok&&(O.includes("/chat/completions")||O.includes("/models")))try{const ce=await fe.clone().text();N(ve=>[{id:`log-${Date.now()}`,timestamp:Date.now(),type:"network",source:"API Request",message:`HTTP ${fe.status} Error`,detail:`URL: ${O}
Response: ${ce.substring(0,500)}`},...ve.slice(0,49)])}catch{N(ce=>[{id:`log-${Date.now()}`,timestamp:Date.now(),type:"network",source:"API Request",message:`HTTP ${fe.status} (Unreadable Body)`,detail:`URL: ${O}`},...ce.slice(0,49)])}return fe}catch(fe){throw O.includes("/chat/completions")&&Ao({url:O,body:X==null?void 0:X.body,ok:!1,meta:X==null?void 0:X.__sullyMeta,durationMs:Date.now()-re}),N(le=>[{id:`log-${Date.now()}`,timestamp:Date.now(),type:"network",source:"Network",message:fe.message||"Fetch Failed",detail:`URL: ${O}`},...le.slice(0,49)]),fe}};try{window.fetch=j}catch{try{Object.defineProperty(window,"fetch",{value:j,writable:!0,configurable:!0})}catch(E){console.warn("Failed to install network interceptor",E)}}const B=console.error;console.error=(...C)=>{B(...C);const E=C.map(O=>O instanceof Error?O.message:String(O)).join(" "),X=C.map(O=>O instanceof Error?O.stack:"").join(`
`);E.includes("Warning:")||N(O=>[{id:`log-${Date.now()}-${Math.random()}`,timestamp:Date.now(),type:"error",source:"Application",message:E.substring(0,100),detail:X||E},...O.slice(0,49)])}},[]);const Je=()=>N([]);h.useEffect(()=>{const m=async()=>{const B=localStorage.getItem("os_theme"),C=localStorage.getItem("os_api_config"),E=localStorage.getItem("os_available_models"),X=localStorage.getItem("os_api_presets");let O={...eo};if(B)try{const fe=JSON.parse(B);O={...O,...fe},(O.wallpaper.includes("unsplash")||O.wallpaper==="")&&(O.wallpaper=Yl),O.wallpaper.startsWith("data:")&&(O.wallpaper=eo.wallpaper),O.launcherWidgetImage=void 0,O.customFont&&O.customFont.startsWith("data:")&&(O.customFont=void 0)}catch(fe){console.error("Theme load error",fe)}C&&c(JSON.parse(C)),E&&W(JSON.parse(E)),X&&ee(JSON.parse(X));const re=localStorage.getItem("os_realtime_config");if(re)try{q({...rc,...JSON.parse(re)})}catch(fe){console.error("Failed to load realtime config",fe)}try{const fe=await $.getAllAssets(),le={};if(Array.isArray(fe)){fe.forEach(ae=>le[ae.id]=ae.data),le.wallpaper&&(O.wallpaper=le.wallpaper),le.launcherWidgetImage&&$.deleteAsset("launcherWidgetImage"),le.custom_font_data&&(O.customFont=le.custom_font_data);const xe=new Set(["bl","br"]),ce={},ve={};if(Object.keys(le).forEach(ae=>{if(ae.startsWith("icon_")){const je=ae.replace("icon_","");ce[je]=le[ae]}if(ae.startsWith("widget_")){const je=ae.replace("widget_","");if(xe.has(je)){$.deleteAsset(ae);return}ve[je]=le[ae]}}),y(ce),O.launcherWidgets)for(const ae of xe)delete O.launcherWidgets[ae];Object.keys(ve).length>0&&(O.launcherWidgets={...O.launcherWidgets||{},...ve});const A=[];Object.keys(le).forEach(ae=>{if(ae.startsWith("appearance_preset_"))try{const je=JSON.parse(le[ae]);A.push(je)}catch{}}),A.sort((ae,je)=>je.createdAt-ae.createdAt),Me(A),O.desktopDecorations&&O.desktopDecorations.length>0&&(O.desktopDecorations=O.desktopDecorations.map(ae=>{if(ae.type==="image"&&(!ae.content||ae.content==="")){const je=le[`deco_${ae.id}`];return je?{...ae,content:je}:ae}return ae}).filter(ae=>ae.content&&ae.content!==""))}}catch(fe){console.error("Failed to load assets from DB",fe)}a(O),Xe(O.customFont)};(async()=>{var B,C,E,X;try{typeof navigator<"u"&&navigator.storage&&typeof navigator.storage.persist=="function"&&navigator.storage.persist().catch(()=>{}),await m();const O=async(ae,je,Ue)=>{try{return await ae}catch(ct){return console.error(`Data init: 读取 ${je} 失败，已降级`,ct),Ue}},[re,fe,le,xe,ce,ve]=await Promise.all([O($.getAllCharacters(),"characters",[]),O($.getThemes(),"themes",[]),O($.getUserProfile(),"userProfile",null),O($.getGroups(),"groups",[]),O($.getAllWorldbooks(),"worldbooks",[]),O($.getAllNovels(),"novels",[])]);let A=re;if(!A.some(ae=>ae.id===bt.id))await $.saveCharacter(bt),A=[...A,bt];else{const ae=A.find(je=>je.id===bt.id);if(ae){const je=ae.sprites||{},Ue=!je.normal||!je.chibi,ct=((B=ae.roomConfig)==null?void 0:B.wallImage)!==((C=bt.roomConfig)==null?void 0:C.wallImage),lt=!ae.dateSkinSets||ae.dateSkinSets.length===0,oe=typeof je.chibi=="string"&&je.chibi.startsWith("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA4CAYAAABdeLCu");if(Ue||!ae.roomConfig||ct||lt||oe){const mt={...bt.sprites,...je};mt.normal||(mt.normal=bt.sprites.normal),mt.happy||(mt.happy=bt.sprites.happy),mt.sad||(mt.sad=bt.sprites.sad),mt.angry||(mt.angry=bt.sprites.angry),mt.shy||(mt.shy=bt.sprites.shy),mt.chibi||(mt.chibi=bt.sprites.chibi),oe&&(mt.chibi=bt.sprites.chibi);const hs=ae.roomConfig?{...ae.roomConfig,wallImage:(E=ae.roomConfig.wallImage)!=null&&E.includes("radial-gradient")||!ae.roomConfig.wallImage?(X=bt.roomConfig)==null?void 0:X.wallImage:ae.roomConfig.wallImage}:bt.roomConfig,js=ae.dateSkinSets||[],yt=bt.dateSkinSets||[],Mt=[...js];for(const Oe of yt)Mt.some(Ze=>Ze.id===Oe.id)||Mt.push(Oe);const Pe={...ae,sprites:mt,roomConfig:hs,dateSkinSets:Mt};await $.saveCharacter(Pe),A=A.map(Oe=>Oe.id===bt.id?Pe:Oe)}}}if(A=A.map(ae=>Ai(Nn(ae))),A.length>0){g(A);const ae=localStorage.getItem("os_last_active_char_id");ae&&A.find(je=>je.id===ae)?b(ae):A.find(je=>je.id===bt.id)?b(bt.id):b(A[0].id)}else await $.saveCharacter(Ha),g([Ha]),b(Ha.id);_(xe),D(ce),T(ve),we(fe),le&&G(le)}catch(O){console.error("Data init failed:",O)}finally{k(!0);try{const O=JSON.parse(localStorage.getItem("os_remote_vector_config")||"{}");if(O.enabled&&O.initialized&&O.supabaseUrl){const{getVectorCount:re}=await Le(async()=>{const{getVectorCount:ce}=await import("./memory-palace-BIYgjY1f.js").then(ve=>ve.ab);return{getVectorCount:ce}},[]),fe=await re(O),le=await Le(()=>import("./memory-palace-BIYgjY1f.js").then(ce=>ce.j),[]).then(ce=>ce.openDB()),xe=await new Promise(ce=>{const A=le.transaction("memory_vectors","readonly").objectStore("memory_vectors").count();A.onsuccess=()=>ce(A.result),A.onerror=()=>ce(0)});xe>0&&fe<xe*.5&&setTimeout(()=>Ge(`本地有 ${xe} 条向量，远程仅 ${fe} 条。建议去设置页同步到远程。`,"info"),3e3)}}catch{}}})()},[]),h.useEffect(()=>{const m=document.documentElement,j=o.hue??245,B=o.saturation??25,C=o.lightness??65;m.style.setProperty("--primary-hue",String(j)),m.style.setProperty("--primary-sat",`${B}%`),m.style.setProperty("--primary-lightness",`${C}%`),m.dataset.skin=o.skin||"default"},[o]);const ot=h.useRef(t),St=h.useRef(x);ot.current=t,St.current=x,h.useEffect(()=>{if(!w||f.length===0)return;let m=!1;const j=async()=>{if(m)return;let B=!1;const C={};for(const E of f)try{if(ot.current===R.Date&&St.current===E.id)continue;const X=await $.getDueScheduledMessages(E.id);if(m)return;if(X.length>0){for(const re of X)await $.saveMessage({charId:re.charId,role:"assistant",type:"text",content:re.content}),await $.deleteScheduledMessage(re.id);if(m)return;if(B=!0,!(ot.current===R.Chat&&St.current===E.id)&&(Ge(`${E.name} 发来了一条消息`,"success"),C[E.id]=X.length,!yn.isNativePlatform()&&window.Notification&&Notification.permission==="granted"))try{const re=new Notification(E.name,{body:X[0].content,icon:E.avatar,silent:!1});re.onclick=()=>{window.focus(),s(R.Chat),b(E.id)}}catch{}}}catch{}B&&!m&&(se(Date.now()),$e(E=>{const X={...E};for(const[O,re]of Object.entries(C))X[O]=(X[O]||0)+re;return X}))};return Ae.current=setInterval(j,5e3),j(),()=>{m=!0,Ae.current&&clearInterval(Ae.current)}},[w,f]);const us=h.useCallback(m=>{$e(j=>{if(!j[m])return j;const B={...j};return delete B[m],B})},[]);h.useEffect(()=>{let m=0;const j=C=>{const{charId:E,charName:X,body:O}=C.detail;if(se(Date.now()),!(ot.current===R.Chat&&St.current===E)){document.visibilityState==="visible"?Ge(`${X} 主动发来了消息`,"success"):m+=1,$e(xe=>({...xe,[E]:(xe[E]||0)+1}));const le=(O||`${X} sent a proactive message`).replace(/\s+/g," ").trim()||`${X} sent a proactive message`;if(De(E,X,le),!yn.isNativePlatform()&&"serviceWorker"in navigator&&window.Notification&&Notification.permission==="granted"){const xe=f.find(ce=>ce.id===E);navigator.serviceWorker.ready.then(ce=>{ce.showNotification(X,{body:le,icon:(xe==null?void 0:xe.avatar)||"./icons/icon-192.png",badge:"./icons/icon-192.png",tag:`proactive-${E}`,data:{charId:E,kind:"proactive-1.0"}}).catch(()=>{})}).catch(()=>{})}}},B=()=>{document.visibilityState==="visible"&&m>0&&(Ge(`你离开期间收到 ${m} 条消息`,"success"),m=0)};return window.addEventListener("proactive-message-sent",j),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("proactive-message-sent",j),document.removeEventListener("visibilitychange",B)}},[f,De]),h.useEffect(()=>{let m=0;const j=O=>{const{charId:re,charName:fe,body:le}=O.detail;if(se(Date.now()),!(ot.current===R.Chat&&St.current===re)){document.visibilityState==="visible"?Ge(`${fe} 给你发了消息`,"success"):m+=1,$e(A=>({...A,[re]:(A[re]||0)+1}));const ve=(le||`${fe} sent an active message`).replace(/\s+/g," ").trim()||`${fe} sent an active message`;De(re,fe,ve)}},B=O=>{const{charId:re}=O.detail;re&&(s(R.Chat),b(re))},C=()=>{document.visibilityState==="visible"&&m>0&&(Ge(`你离开期间收到 ${m} 条新消息`,"success"),m=0)},E=()=>{se(Date.now())},X=O=>{const re=O.detail,fe=re==null?void 0:re.charId;if(fe){if(Array.isArray(re.buffs)){const le=re.buffs,xe=typeof re.buffInjection=="string"?re.buffInjection:"";g(ce=>ce.map(ve=>ve.id===fe?Nn({...ve,activeBuffs:le,buffInjection:xe}):ve));return}$.getAllCharacters().then(le=>{const xe=le.find(ce=>ce.id===fe);xe&&g(ce=>ce.map(ve=>ve.id===fe?Nn({...ve,activeBuffs:xe.activeBuffs,buffInjection:xe.buffInjection}):ve))}).catch(()=>{})}};return window.addEventListener("active-msg-received",j),window.addEventListener("active-msg-progress",E),window.addEventListener("active-msg-open",B),window.addEventListener("emotion-updated",X),document.addEventListener("visibilitychange",C),()=>{window.removeEventListener("active-msg-received",j),window.removeEventListener("active-msg-progress",E),window.removeEventListener("active-msg-open",B),window.removeEventListener("emotion-updated",X),document.removeEventListener("visibilitychange",C)}},[De]);const Vt=h.useRef(!1),As=h.useRef([]),qs=h.useRef(new Map),Ht=h.useRef(f);Ht.current=f;const It=h.useRef(r);It.current=r,h.useEffect(()=>{af(r.minimaxRegion)},[r.minimaxRegion]);const ps=h.useRef(Z);ps.current=Z;const vs=h.useRef(S);vs.current=S;const Cs=h.useRef(V);Cs.current=V;const Qs=h.useRef(ne);Qs.current=ne,h.useEffect(()=>{if(!w)return;const m=()=>{const C=As.current.shift();C&&j(C)},j=async C=>{var A,ae,je,Ue,ct,lt,oe,mt,hs,js;if(Vt.current){As.current.includes(C)||As.current.push(C);return}const E=Ht.current,X=It.current,O=ps.current,re=vs.current,fe=Cs.current,le=E.find(yt=>yt.id===C);if(!le){m();return}if(le.proactiveConfig&&!le.proactiveConfig.enabled){m(),console.log(`🔕 [Proactive/Global] Skipped for ${le.name}: disabled`);return}if(ot.current===R.Date&&St.current===C){m(),console.log(`🔕 [Proactive/Global] Skipped for ${le.name}: 正在见面 (DateApp active)`);return}const xe=le.proactiveConfig,ce=(xe==null?void 0:xe.useSecondaryApi)&&((A=xe.secondaryApi)==null?void 0:A.baseUrl),ve=ce?xe.secondaryApi:X;if(!ve.baseUrl){m();return}Vt.current=!0,te(yt=>yt[C]?yt:{...yt,[C]:!0}),console.log(`🔔 [Proactive/Global] Trigger fired for ${le.name}${ce?" (副API)":""}`);try{const Mt=[...await $.getRecentMessagesByCharId(C,200)].reverse().find(et=>{var ft;return et.role==="user"&&!((ft=et.metadata)!=null&&ft.proactiveHint)}),Pe=new Date,Oe=`${Pe.getFullYear()}-${String(Pe.getMonth()+1).padStart(2,"0")}-${String(Pe.getDate()).padStart(2,"0")} ${String(Pe.getHours()).padStart(2,"0")}:${String(Pe.getMinutes()).padStart(2,"0")}`;let Ze="";if(Mt){const et=Math.floor((Pe.getTime()-Mt.timestamp)/6e4);et<60?Ze=`${et}分钟`:et<1440?Ze=`${Math.floor(et/60)}小时${et%60>0?et%60+"分钟":""}`:Ze=`${Math.floor(et/1440)}天${Math.floor(et%1440/60)}小时`}const Ve=(O==null?void 0:O.name)||"对方",Bt=(await $.getRecentMessagesByCharId(C,10,!0)).filter(et=>{var ft;return!((ft=et.metadata)!=null&&ft.proactiveHint)}).pop(),os=3*60*60*1e3,Q=((ae=Bt==null?void 0:Bt.metadata)==null?void 0:ae.source)==="date"&&Pe.getTime()-Bt.timestamp<os?`[系统提示（非${Ve}发言）: 现在是 ${Oe}。你和${Ve}刚刚在线下见过面（如果上下文里有标着 [约会] 的内容，那就是你们见面时发生的事），现在你们暂时分开了，你拿起手机想给${Ve}发条消息。请基于刚才的见面来发——可以回味见面里的某个细节、补一句当时没说出口的话、关心${Ve}到家了没，或者就是刚分开就有点想念。绝对不要表现得好像很久没联系，更不要对刚才的见面毫不知情。一两句话就好。]`:`[系统提示（非${Ve}发言）: 现在是 ${Oe}。${Ze?`${Ve}已经 ${Ze} 没有找你说话了。`:""}这是系统给你的一次主动发消息机会——${Ve}并没有在跟你说话，是你想主动找${Ve}。像真人一样随意地发条消息吧，比如：随手拍了张照片想分享、刚看到个有趣的事想说、突然想到个冷知识、吐槽今天的天气/食物/见闻、或者就是单纯想找${Ve}聊几句。不要刻意，不要像在"汇报近况"，就像你真的拿起手机随手发了条消息。一两句话就好。${Ze&&parseInt(Ze)>2?`（${Ve}挺久没找你了，你也可以表达想念、好奇${Ve}在干嘛、或者小小地抱怨一下。）`:""}]`;await $.saveMessage({charId:C,role:"user",type:"text",content:Q,metadata:{proactiveHint:!0,hidden:!0}});const ue=await $.getRecentMessagesByCharId(C,le.contextLimit||500),K=await $.getEmojis(),_e=await $.getEmojiCategories(),Fe=qs.current.get(C)||void 0,qe=await sa({char:le,userProfile:O,groups:re,emojis:K,categories:_e,historyMsgs:ue,contextLimit:le.contextLimit||500,realtimeConfig:fe,innerState:Fe,musicSnapshot:tp(),htmlMode:{enabled:!!le.htmlModeEnabled,customPrompt:le.htmlModeCustomPrompt},thinkingChain:{enabled:!!le.showThinkingChain,customPrompt:le.thinkingChainCustomPrompt}}),Wt=qe.systemPrompt,Ls=qe.cleanedApiMessages,Os=qe.fullMessages;if(!qe.flags.promptBuildSkipped&&!qa()&&zn(le)&&((je=le.emotionConfig)!=null&&je.enabled)){const et=(Ue=le.emotionConfig.api)!=null&&Ue.baseUrl?le.emotionConfig.api:{baseUrl:It.current.baseUrl,apiKey:It.current.apiKey,model:It.current.model};et.baseUrl&&O&&xr(le,O,Wt,Ls,et).then(ft=>{ft&&qs.current.set(C,ft)}).catch(()=>{})}const $s=ve.baseUrl.replace(/\/+$/,""),fn={"Content-Type":"application/json",Authorization:`Bearer ${ve.apiKey||"sk-none"}`},Yt={model:ve.model,messages:Os,temperature:.85,stream:!1};if(qe.flags.thinkingActive){const et=Yt.model||"";/^claude-/i.test(et)&&!/-thinking$/i.test(et)&&(Yt.model=`${et}-thinking`),Yt.thinking={type:"enabled",budget_tokens:4e3},Yt.reasoning_effort="medium",Yt.extra_body={...Yt.extra_body||{},thinking:{type:"enabled",budget_tokens:4e3}}}const _o=await _t(`${$s}/chat/completions`,{method:"POST",headers:fn,body:JSON.stringify(Yt)},2,0,{appName:"消息",charId:C,charName:le.name,purpose:"主动消息"});let nt=((oe=(lt=(ct=_o.choices)==null?void 0:ct[0])==null?void 0:lt.message)==null?void 0:oe.content)||"",So=null;if(qe.flags.thinkingActive){const et=(((js=(hs=(mt=_o==null?void 0:_o.choices)==null?void 0:mt[0])==null?void 0:hs.message)==null?void 0:js.reasoning_content)||"").trim(),ft=[],Ct=/<(think|thinking|thought)>([\s\S]*?)<\/\1>/gi;let gs;for(;(gs=Ct.exec(nt))!==null;){const dt=gs[2].trim();dt&&ft.push(dt)}if(!/<\/(?:think|thinking|thought)>/i.test(nt)){const dt=nt.match(/<(?:think|thinking|thought)>([\s\S]*$)/i);dt&&dt[1].trim()&&ft.push(dt[1].trim())}const Et=[et,...ft].filter(dt=>!!dt).join(`

`).trim();Et&&(So=Et)}nt=nt.replace(/<think>[\s\S]*?<\/think>/gi,"").replace(/<think>[\s\S]*$/gi,""),nt=nt.replace(/\[\d{4}[-/年]\d{1,2}[-/月]\d{1,2}.*?\]/g,""),nt=nt.replace(/^[\w一-龥]+:\s*/,""),nt=nt.replace(/\s*\[(?:聊天|通话|约会)\]\s*/g,`
`).trim(),nt=ff(nt);const hn=[],Fs=Date.now();let At=0;const Bs=()=>{if(!So)return;const et={thinkingChain:So};return So=null,et};if(le.htmlModeEnabled&&/\[html\]/i.test(nt)){const{blocks:et,cleanedContent:ft}=gl(nt);for(const Ct of et)try{const gs=Bs();await $.saveMessage({charId:C,role:"assistant",type:"html_card",content:Ct.textPreview?`[HTML卡片] ${Ct.textPreview}`:"[HTML卡片]",timestamp:Fs+At,metadata:{htmlSource:Ct.html,htmlTextPreview:Ct.textPreview,...gs||{}}}),Ct.textPreview&&hn.push(Ct.textPreview),At+=1}catch(gs){console.error("[Proactive/HTML] 落库 html_card 失败",gs)}nt=ft}if(nt=st.sanitize(nt),nt)if(/<翻译>\s*<原文>[\s\S]*?<\/原文>\s*<译文>[\s\S]*?<\/译文>\s*<\/翻译>/.test(nt)){const ft=[];let Ct;const gs=/\[\[SEND_EMOJI:\s*(.*?)\]\]/g;for(;(Ct=gs.exec(nt))!==null;){const as=Ct[1].trim();ft.includes(as)||ft.push(as)}nt=nt.replace(/\[\[SEND_EMOJI:\s*.*?\]\]/g,"").trim();const Et=/<翻译>\s*<原文>([\s\S]*?)<\/原文>\s*<译文>([\s\S]*?)<\/译文>\s*<\/翻译>/g;let dt=0,Is;for(;(Is=Et.exec(nt))!==null;){const as=nt.slice(dt,Is.index).trim();if(as){const qn=st.sanitize(as);if(qn&&st.hasDisplayContent(qn))for(const jn of st.chunkText(qn)){if(!jn)continue;const xi=Bs();await $.saveMessage({charId:C,role:"assistant",type:"text",content:jn,timestamp:Fs+At,...xi?{metadata:xi}:{}}),hn.push(jn),At+=1}}const Ut=st.sanitize(Is[1].trim()),zt=st.sanitize(Is[2].trim());if(Ut||zt){const qn=Ut&&zt?`${Ut}
%%BILINGUAL%%
${zt}`:Ut||zt,jn=Bs();await $.saveMessage({charId:C,role:"assistant",type:"text",content:qn,timestamp:Fs+At,...jn?{metadata:jn}:{}}),hn.push(Ut||zt),At+=1}dt=Is.index+Is[0].length}const gi=nt.slice(dt).trim();if(gi){const as=st.sanitize(gi.replace(/<\/?翻译>|<\/?原文>|<\/?译文>/g,"").trim());if(as&&st.hasDisplayContent(as))for(const Ut of st.chunkText(as)){if(!Ut)continue;const zt=Bs();await $.saveMessage({charId:C,role:"assistant",type:"text",content:Ut,timestamp:Fs+At,...zt?{metadata:zt}:{}}),hn.push(Ut),At+=1}}for(const as of ft){const Ut=K.find(zt=>zt.name===as);if(Ut!=null&&Ut.url){const zt=Bs();await $.saveMessage({charId:C,role:"assistant",type:"emoji",content:Ut.url,timestamp:Fs+At,...zt?{metadata:zt}:{}}),At+=1}}}else{const ft=st.splitResponse(nt);for(const Ct of ft){if(Ct.type==="emoji"){const Et=K.find(dt=>dt.name===Ct.content);if(Et!=null&&Et.url){const dt=Bs();await $.saveMessage({charId:C,role:"assistant",type:"emoji",content:Et.url,timestamp:Fs+At,...dt?{metadata:dt}:{}})}else{const dt=`发送了表情包：${Ct.content}`,Is=Bs();await $.saveMessage({charId:C,role:"assistant",type:"text",content:dt,timestamp:Fs+At,...Is?{metadata:Is}:{}}),hn.push(dt)}At+=1;continue}const gs=st.chunkText(Ct.content).map(Et=>st.sanitize(Et)).filter(Et=>st.hasDisplayContent(Et));for(const Et of gs){const dt=Bs();await $.saveMessage({charId:C,role:"assistant",type:"text",content:Et,timestamp:Fs+At,...dt?{metadata:dt}:{}}),hn.push(Et),At+=1}}}if(At>0){const ft=hn.join(" ").trim().replace(/\s+/g," ").trim().slice(0,120)||`${le.name} sent a proactive message`;window.dispatchEvent(new CustomEvent("proactive-message-sent",{detail:{charId:C,charName:le.name,body:ft}}))}}catch(yt){console.error(`[Proactive/Global] Error for ${le.name}:`,yt)}finally{Vt.current=!1,te(yt=>{if(!yt[C])return yt;const Mt={...yt};return delete Mt[C],Mt}),m()}};Fn.onTrigger(C=>{j(C)});const B=async(C,E,X)=>{var re;const O=Ht.current.find(fe=>fe.id===C);if(!(!O||!((re=O.vrState)!=null&&re.enabled))&&ps.current)try{await am({char:O,characters:Ht.current,apiConfig:It.current,userProfile:ps.current,groups:vs.current,realtimeConfig:Cs.current,memoryPalaceConfig:Qs.current,updateCharacter:Ot,forcedRoom:E,forcedLetterId:X})}catch(fe){console.error("[VRWorld] runVR error",fe)}};return zo.onTrigger((C,E,X)=>{B(C,E,X)}),zo.reconcile(Ht.current.filter(C=>{var E;return(E=C.vrState)==null?void 0:E.enabled}).map(C=>{var E;return{charId:C.id,intervalMinutes:((E=C.vrState)==null?void 0:E.intervalMinutes)||xl}})),()=>{Fn.onTrigger(()=>{}),zo.onTrigger(()=>{})}},[w]);const Es=async m=>{const{wallpaper:j,launcherWidgetImage:B,launcherWidgets:C,desktopDecorations:E,customFont:X,...O}=m,re=C!==void 0?Object.fromEntries(Object.entries(C).filter(([ce])=>ce!=="bl"&&ce!=="br")):void 0,fe={...m,launcherWidgetImage:void 0};re!==void 0&&(fe.launcherWidgets=re);const le={...o,...fe,launcherWidgetImage:void 0};if(le.launcherWidgets){const ce={...le.launcherWidgets};delete ce.bl,delete ce.br,le.launcherWidgets=Object.keys(ce).length>0?ce:void 0}if(a(le),j!==void 0&&(j&&j.startsWith("data:")?await $.saveAsset("wallpaper",j):await $.deleteAsset("wallpaper")),await $.deleteAsset("launcherWidgetImage"),C!==void 0){const ce=["tl","tr","wide","dsq"];for(const ve of ce){const A=re==null?void 0:re[ve];A&&A.startsWith("data:")?await $.saveAsset(`widget_${ve}`,A):A||await $.deleteAsset(`widget_${ve}`)}await $.deleteAsset("widget_bl"),await $.deleteAsset("widget_br")}if(E!==void 0){const ve=(await $.getAllAssets()).filter(A=>A.id.startsWith("deco_")).map(A=>A.id);for(const A of ve)await $.deleteAsset(A);if(E)for(const A of E)A.content&&A.content.startsWith("data:")&&A.type==="image"&&await $.saveAsset(`deco_${A.id}`,A.content)}"customFont"in m&&(X&&X.startsWith("data:")?(await $.saveAsset("custom_font_data",X),Xe(X)):X&&(X.startsWith("http")||X.startsWith("https"))?(await $.deleteAsset("custom_font_data"),Xe(X)):(await $.deleteAsset("custom_font_data"),Xe(void 0)));const xe={...le};if(xe.wallpaper&&xe.wallpaper.startsWith("data:")&&(xe.wallpaper=""),xe.launcherWidgetImage=void 0,xe.launcherWidgets){const ce={};for(const[ve,A]of Object.entries(xe.launcherWidgets))ve==="bl"||ve==="br"||(ce[ve]=A&&A.startsWith("data:")?"":A);xe.launcherWidgets=ce}xe.desktopDecorations&&(xe.desktopDecorations=xe.desktopDecorations.map(ce=>({...ce,content:ce.content&&ce.content.startsWith("data:")&&ce.type==="image"?"":ce.content}))),xe.customFont&&xe.customFont.startsWith("data:")&&(xe.customFont=""),localStorage.setItem("os_theme",JSON.stringify(xe))},Qt=m=>{const j={...r,...m};c(j),localStorage.setItem("os_api_config",JSON.stringify(j))},Zs=m=>{const j={...V,...m};q(j),localStorage.setItem("os_realtime_config",JSON.stringify(j))},Ts=m=>{const j={...pe,...m};ke(j),localStorage.setItem("os_cloud_backup_config",JSON.stringify(j))},_s=async()=>pe.provider==="github"?await Le(()=>import("./githubClient-DAbL-DBI.js"),__vite__mapDeps([2,3,4])):await Le(()=>import("./webdavClient-CuqkYjjO.js"),__vite__mapDeps([5,3,4])),en=async m=>{const{uploadBackup:j,cleanupOldBackups:B}=await _s();try{L({status:"processing",message:"正在打包备份数据...",progress:0});const C=await un(m);L({status:"processing",message:"正在上传到云端...",progress:50});const E=`Sully_Backup_${m}_${Date.now()}.zip`,X=await j(pe,C,E,O=>{L(re=>({...re,message:`上传中 ${O}%...`,progress:50+O*.45}))});if(!X.ok)throw new Error(X.message);Ts({lastBackupTime:Date.now(),lastBackupSize:C.size}),await B(pe,5).catch(()=>{}),L({status:"idle",message:"",progress:100}),Ge("云端备份完成","success")}catch(C){throw L({status:"idle",message:"",progress:0}),Ge(`云端备份失败: ${C.message}`,"error"),C}},tn=async m=>{const{downloadBackup:j}=await _s();try{L({status:"processing",message:"正在从云端下载...",progress:0});const B=await j(pe,m,E=>{L(X=>({...X,message:`下载中 ${E}%...`,progress:E*.5}))});if(!B)throw new Error("下载失败");L({status:"processing",message:"正在恢复数据...",progress:50});const C=new File([B],m.name,{type:"application/zip"});await pn(C)}catch(B){throw L({status:"idle",message:"",progress:0}),Ge(`云端恢复失败: ${B.message}`,"error"),B}},sn=async()=>{const{listBackups:m}=await _s();return m(pe)},Ms=m=>{const j={embedding:{...ne.embedding,...m.embedding||{}},lightLLM:{...ne.lightLLM,...m.lightLLM||{}},rerank:{...ne.rerank,...m.rerank||{}}};Ne(j),localStorage.setItem("os_memory_palace_config",JSON.stringify(j))},nn=m=>{g(j=>j.map(C=>{const E=C.emotionConfig,X={enabled:!!(E!=null&&E.enabled),...m&&m.baseUrl?{api:{baseUrl:m.baseUrl,apiKey:m.apiKey,model:m.model}}:{}},O=Nn({...C,emotionConfig:X});return $.saveCharacter(O),O}))},on=m=>{const j={...he,...m};be(j),localStorage.setItem("os_remote_vector_config",JSON.stringify(j))},an=m=>{W(m),localStorage.setItem("os_available_models",JSON.stringify(m))},rn=(m,j)=>{ee(B=>{const C=[...B,{id:Date.now().toString(),name:m,config:j}];return localStorage.setItem("os_api_presets",JSON.stringify(C)),C})},cn=m=>{ee(j=>{const B=j.filter(C=>C.id!==m);return localStorage.setItem("os_api_presets",JSON.stringify(B)),B})},ln=m=>{ee(m),localStorage.setItem("os_api_presets",JSON.stringify(m))},vt=async()=>{const m="New Character",j={id:`char-${Date.now()}`,name:m,avatar:yr(m),description:"点击编辑设定...",systemPrompt:"",memories:[],contextLimit:500,emotionConfig:{enabled:!0}};g(B=>[...B,j]),b(j.id),await $.saveCharacter(j)},Ot=async(m,j)=>{g(B=>{const C=B.map(X=>X.id===m?Nn({...X,...j}):X),E=C.find(X=>X.id===m);return E&&$.saveCharacter(E),C})},ms=async m=>{g(j=>{const B=j.filter(C=>C.id!==m);return B.length>0&&x===m&&b(B[0].id),B}),await $.deleteCharacter(m)},Zt=async(m,j)=>{const B={id:`group-${Date.now()}`,name:m,members:j,avatar:yr(m),createdAt:Date.now()};await $.saveGroup(B),_(C=>[...C,B])},es=async m=>{await $.deleteGroup(m),_(j=>j.filter(B=>B.id!==m))},ts=async m=>{D(j=>[...j,m]),await $.saveWorldbook(m)},rt=async(m,j)=>{const B=I.find(X=>X.id===m);if(!B)return;const C={...B,...j,updatedAt:Date.now()};D(X=>X.map(O=>O.id===m?C:O)),await $.saveWorldbook(C);const E=f.filter(X=>{var O;return(O=X.mountedWorldbooks)==null?void 0:O.some(re=>re.id===m)});if(E.length>0){const X=f.map(O=>{var re;if((re=O.mountedWorldbooks)!=null&&re.some(fe=>fe.id===m)){const fe=O.mountedWorldbooks.map(xe=>xe.id===m?{id:C.id,title:C.title,content:C.content,category:C.category}:xe),le={...O,mountedWorldbooks:fe};return $.saveCharacter(le),le}return O});g(X),Ge(`已同步更新 ${E.length} 个相关角色的缓存`,"info")}},Ft=async m=>{D(B=>B.filter(C=>C.id!==m)),await $.deleteWorldbook(m);const j=f.map(B=>{var C;if((C=B.mountedWorldbooks)!=null&&C.some(E=>E.id===m)){const E=B.mountedWorldbooks.filter(O=>O.id!==m),X={...B,mountedWorldbooks:E};return $.saveCharacter(X),X}return B});g(j),Ge("世界书已删除 (同步移除角色挂载)","success")},Rs=async m=>{T(j=>[m,...j]),await $.saveNovel(m)},Qe=async(m,j)=>{T(B=>{const C=B.map(X=>X.id===m?{...X,...j,lastActiveAt:Date.now()}:X),E=C.find(X=>X.id===m);return E&&$.saveNovel(E),C})},ht=async m=>{T(j=>j.filter(B=>B.id!==m)),await $.deleteNovel(m)},it=async m=>{G(j=>{const B={...j,...m};return $.saveUserProfile(B),B})},kt=async m=>{we(j=>j.find(C=>C.id===m.id)?j.map(C=>C.id===m.id?m:C):[...j,m]),await $.saveTheme(m)},fs=async m=>{we(j=>j.filter(B=>B.id!==m)),await $.deleteTheme(m)},ss=async(m,j)=>{y(B=>{const C={...B};return j?C[m]=j:delete C[m],C}),j?await $.saveAsset(`icon_${m}`,j):await $.deleteAsset(`icon_${m}`)},Ge=(m,j="info")=>{const B=Date.now().toString();Se(C=>[...C,{id:B,message:m,type:j}]),setTimeout(()=>{Se(C=>C.filter(E=>E.id!==B))},3e3)},vn=(m,j)=>{Ke({title:m,details:j})},Jn=()=>{Ke(null)},_n=async m=>{const j={id:`ap_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,name:m,createdAt:Date.now(),theme:{...o},customIcons:Object.keys(de).length>0?{...de}:void 0,chatThemes:me.length>0?[...me]:void 0};Me(B=>[j,...B]),await $.saveAsset(`appearance_preset_${j.id}`,JSON.stringify(j)),Ge(`外观预设「${m}」已保存`,"success")},Ss=async m=>{const j=ge.find(E=>E.id===m);if(!j)return;const B={...j.theme,launcherWidgetImage:void 0};if(B.launcherWidgets){const E={...B.launcherWidgets};delete E.bl,delete E.br,B.launcherWidgets=Object.keys(E).length>0?E:void 0}a(B);const C={...B};if(C.wallpaper&&typeof C.wallpaper=="string"&&C.wallpaper.startsWith("data:")&&(C.wallpaper=""),C.launcherWidgetImage=void 0,C.launcherWidgets){const E={};for(const[X,O]of Object.entries(C.launcherWidgets))X==="bl"||X==="br"||(E[X]=O&&O.startsWith("data:")?"":O);C.launcherWidgets=E}C.desktopDecorations&&(C.desktopDecorations=C.desktopDecorations.map(E=>({...E,content:E.content&&typeof E.content=="string"&&E.content.startsWith("data:")&&E.type==="image"?"":E.content}))),C.customFont&&typeof C.customFont=="string"&&C.customFont.startsWith("data:")&&(C.customFont="");try{localStorage.setItem("os_theme",JSON.stringify(C))}catch(E){console.warn("[applyAppearancePreset] localStorage 写入失败，已跳过",E)}if(Xe(j.theme.customFont),j.customIcons){y(j.customIcons);for(const[E,X]of Object.entries(j.customIcons))await $.saveAsset(`icon_${E}`,X)}if(j.chatThemes){for(const E of j.chatThemes)await $.saveTheme(E);we(E=>{const X=[...E];for(const O of j.chatThemes){const re=X.findIndex(fe=>fe.id===O.id);re>=0?X[re]=O:X.push(O)}return X})}if(j.theme.wallpaper&&j.theme.wallpaper.startsWith("data:")&&await $.saveAsset("wallpaper",j.theme.wallpaper),j.theme.desktopDecorations)for(const E of j.theme.desktopDecorations)E.type==="image"&&E.content&&await $.saveAsset(`deco_${E.id}`,E.content);Ge(`已应用预设「${j.name}」`,"success")},Sn=async m=>{Me(j=>j.filter(B=>B.id!==m)),await $.deleteAsset(`appearance_preset_${m}`),Ge("预设已删除","info")},Ds=async()=>{try{a(eo),Xe(void 0);const m=Object.keys(de);y({});for(const B of m)await $.deleteAsset(`icon_${B}`);const j=await $.getAllAssets();for(const B of j){const C=B.id;(C==="wallpaper"||C==="launcherWidgetImage"||C==="custom_font_data"||C.startsWith("widget_")||C.startsWith("deco_")||C.startsWith("icon_"))&&await $.deleteAsset(C)}try{localStorage.setItem("os_theme",JSON.stringify(eo))}catch(B){console.warn("[resetAppearance] localStorage 写入失败",B)}Ge("外观已还原为初始状态","success")}catch(m){Ge((m==null?void 0:m.message)||"还原失败","error")}},dn=async(m,j)=>{Me(B=>B.map(C=>{if(C.id!==m)return C;const E={...C,name:j};return $.saveAsset(`appearance_preset_${m}`,JSON.stringify(E)),E})),Ge("预设已重命名","success")},ns=async m=>{const j=ge.find(X=>X.id===m);if(!j)throw new Error("预设不存在");const B=JSON.stringify({type:"sully_appearance_preset",version:1,...j},null,2),C=await To(),E=new C;return E.file("preset.json",B),E.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:9}})},Ps=async m=>{let j;const B=new Uint8Array(await m.slice(0,4).arrayBuffer());if(B[0]===80&&B[1]===75&&(B[2]===3||B[2]===5||B[2]===7)){const O=await(await To()).loadAsync(m),re=O.file("preset.json")||Object.values(O.files||{}).find(le=>!le.dir&&/\.json$/i.test(le.name));if(!re)throw new Error("压缩包内未找到 preset.json");const fe=await re.async("string");j=JSON.parse(fe)}else{const X=await m.text();j=JSON.parse(X)}if(j.type!=="sully_appearance_preset")throw new Error("无效的外观预设文件");const E={id:`ap_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,name:j.name||"导入的预设",createdAt:Date.now(),theme:j.theme,customIcons:j.customIcons,chatThemes:j.chatThemes,chatLayout:j.chatLayout};Me(X=>[E,...X]),await $.saveAsset(`appearance_preset_${E.id}`,JSON.stringify(E)),Ge(`已导入预设「${E.name}」`,"success")},un=async m=>{var j,B,C,E,X;try{L({status:"processing",message:"正在初始化打包引擎...",progress:0});const O=await To(),re=new O,fe=re.folder("assets");let le=0;const xe=new Map,ce=Q=>{if(typeof Q=="string")return Q.startsWith("data:image")?"":Q;if(Array.isArray(Q))return Q.map(ue=>ce(ue));if(Q!==null&&typeof Q=="object"){const ue={};for(const K in Q)Object.prototype.hasOwnProperty.call(Q,K)&&(ue[K]=ce(Q[K]));return ue}return Q},ve=Q=>{if(Q===null||typeof Q!="object")return Q;if(Array.isArray(Q))return Q.map(K=>ve(K));const ue={};for(const K in Q)if(Object.prototype.hasOwnProperty.call(Q,K)){let _e=Q[K];if(typeof _e=="string"&&_e.startsWith("data:image/"))try{const Fe=xe.get(_e);if(Fe)_e=Fe;else{const qe=_e.match(/data:image\/([a-zA-Z0-9]+);base64,/);if(qe){const Wt=qe[1]==="jpeg"?"jpg":qe[1],Ls=`asset_${Date.now()}_${le++}.${Wt}`,Os=_e.split(",")[1];fe==null||fe.file(Ls,Os,{base64:!0});const $s=`assets/${Ls}`;xe.set(_e,$s),_e=$s}}}catch(Fe){console.warn("Failed to process asset",Fe)}else _e=ve(_e);ue[K]=_e}return ue},A=Q=>Q==="wallpaper"||Q==="launcherWidgetImage"||Q==="custom_font_data"||Q==="spark_social_profile"||Q==="spark_user_bg"||Q==="room_custom_assets_list"||Q.startsWith("widget_")||Q.startsWith("deco_")||Q.startsWith("icon_")||Q.startsWith("appearance_preset_");let ae=[];const je=["characters","messages","themes","emojis","emoji_categories","assets","gallery","user_profile","diaries","tasks","anniversaries","room_todos","room_notes","groups","journal_stickers","social_posts","courses","games","worldbooks","novels","songs","bank_transactions","bank_data","xhs_activities","xhs_stock","quizzes","guidebook","scheduled_messages","life_sim","handbook","trackers","tracker_entries","hotnews_snapshots","memory_nodes","memory_vectors","memory_links","topic_boxes","anticipations","event_boxes","daily_schedule","memory_batches","pixel_home_assets","pixel_home_layouts","vr_novels","vr_annotations","cc_custom_parts","vr_music","vr_guestbook","vr_letters","vr_settings"];m==="full"?ae=je:m==="text_only"?ae=je.filter(Q=>Q!=="assets"):m==="media_only"&&(ae=["gallery","emojis","emoji_categories","journal_stickers","user_profile","characters","messages","themes","assets","bank_data","pixel_home_assets","pixel_home_layouts","daily_schedule","cc_custom_parts"]);const Ue=await $.getAsset("spark_user_bg"),ct=await $.getAsset("spark_social_profile"),lt=await $.getAsset("room_custom_assets_list"),oe={timestamp:Date.now(),version:3,apiConfig:m==="text_only"||m==="full"?r:void 0,apiPresets:m==="text_only"||m==="full"?Y:void 0,availableModels:m==="text_only"||m==="full"?P:void 0,realtimeConfig:m==="text_only"||m==="full"?V:void 0,memoryPalaceConfig:m==="text_only"||m==="full"?ne:void 0,theme:o,customIcons:m==="text_only"||m==="media_only"||m==="full"?{...de}:void 0,appearancePresets:m==="text_only"||m==="media_only"||m==="full"?ge.map(Q=>({...Q})):void 0,socialAppData:m==="text_only"||m==="media_only"||m==="full"?{charHandles:JSON.parse(localStorage.getItem("spark_char_handles")||"{}"),userProfile:ct?JSON.parse(ct):void 0,userId:localStorage.getItem("spark_user_id")||void 0,userBg:Ue||void 0}:void 0,roomCustomAssets:m==="text_only"||m==="media_only"||m==="full"?lt?JSON.parse(lt):[]:void 0,mediaAssets:[],studyApiConfig:m==="text_only"||m==="full"?(()=>{try{const Q=localStorage.getItem("study_api_config");return Q?JSON.parse(Q):void 0}catch{return}})():void 0,studyTutorPresets:m==="text_only"||m==="full"?(()=>{try{const Q=localStorage.getItem("study_tutor_presets");return Q?JSON.parse(Q):void 0}catch{return}})():void 0,cloudBackupConfig:m==="text_only"||m==="full"?(()=>{try{const Q=localStorage.getItem("os_cloud_backup_config");return Q?JSON.parse(Q):void 0}catch{return}})():void 0,remoteVectorConfig:m==="text_only"||m==="full"?(()=>{try{const Q=localStorage.getItem("os_remote_vector_config");return Q?JSON.parse(Q):void 0}catch{return}})():void 0,instantPushConfig:m==="text_only"||m==="full"?(()=>{try{const Q=localStorage.getItem("instant_push_config_v1");return Q?JSON.parse(Q):void 0}catch{return}})():void 0,pushVapid:m==="text_only"||m==="full"?(()=>{try{const Q=localStorage.getItem("push_vapid_v1");return Q?JSON.parse(Q):void 0}catch{return}})():void 0,memoryPalaceHighWaterMarks:m==="text_only"||m==="full"?(()=>{const Q={};for(let ue=0;ue<localStorage.length;ue++){const K=localStorage.key(ue);if(K!=null&&K.startsWith("mp_lastMsgId_")){const _e=K.replace("mp_lastMsgId_","");Q[_e]=parseInt(localStorage.getItem(K)||"0",10)}}return Object.keys(Q).length>0?Q:void 0})():void 0,memoryPalaceFlags:m==="text_only"||m==="full"?(()=>{const Q={};for(let ue=0;ue<localStorage.length;ue++){const K=localStorage.key(ue);K&&(K.startsWith("mp_personality_tried_")||K.startsWith("mp_first_archive_notice_"))&&(Q[K]=localStorage.getItem(K)||"")}return Object.keys(Q).length>0?Q:void 0})():void 0,chatTranslateSourceLang:(m==="text_only"||m==="full")&&localStorage.getItem("chat_translate_source_lang")||void 0,chatTranslateTargetLang:(m==="text_only"||m==="full")&&localStorage.getItem("chat_translate_lang")||void 0,chatTranslateEnabledByChar:m==="text_only"||m==="full"?(()=>{const Q={};for(let ue=0;ue<localStorage.length;ue++){const K=localStorage.key(ue);if(!K||!K.startsWith("chat_translate_enabled_"))continue;const _e=K.replace("chat_translate_enabled_","");Q[_e]=localStorage.getItem(K)==="true"}return Object.keys(Q).length>0?Q:void 0})():void 0,chatTranslateSourceLangByChar:m==="text_only"||m==="full"?(()=>{const Q={};for(let ue=0;ue<localStorage.length;ue++){const K=localStorage.key(ue);if(!K||!K.startsWith("chat_translate_source_lang_"))continue;const _e=K.replace("chat_translate_source_lang_",""),Fe=localStorage.getItem(K);_e&&Fe&&(Q[_e]=Fe)}return Object.keys(Q).length>0?Q:void 0})():void 0,chatTranslateTargetLangByChar:m==="text_only"||m==="full"?(()=>{const Q={};for(let ue=0;ue<localStorage.length;ue++){const K=localStorage.key(ue);if(!K||!K.startsWith("chat_translate_lang_"))continue;const _e=K.replace("chat_translate_lang_",""),Fe=localStorage.getItem(K);_e&&Fe&&(Q[_e]=Fe)}return Object.keys(Q).length>0?Q:void 0})():void 0,chatArchivePrompts:m==="text_only"||m==="full"?(()=>{try{const Q=localStorage.getItem("chat_archive_prompts");return Q?JSON.parse(Q):void 0}catch{return}})():void 0,chatActiveArchivePromptId:(m==="text_only"||m==="full")&&localStorage.getItem("chat_active_archive_prompt_id")||void 0,characterRefinePrompts:m==="text_only"||m==="full"?(()=>{try{const Q=localStorage.getItem("character_refine_prompts");return Q?JSON.parse(Q):void 0}catch{return}})():void 0,characterActiveRefinePromptId:(m==="text_only"||m==="full")&&localStorage.getItem("character_active_refine_prompt_id")||void 0,scheduleAppTheme:(m==="text_only"||m==="full")&&localStorage.getItem("schedule_app_theme")||void 0,handbookLifestreamDepth:(m==="text_only"||m==="full")&&localStorage.getItem("handbook_lifestream_depth")||void 0,groupchatContextLimit:m==="text_only"||m==="full"?(()=>{const Q=localStorage.getItem("groupchat_context_limit"),ue=Q?parseInt(Q,10):NaN;return Number.isFinite(ue)?ue:void 0})():void 0,browserConfig:m==="text_only"||m==="full"?(()=>{const Q=localStorage.getItem("browser_brave_key")||void 0,ue=localStorage.getItem("browser_use_real_search"),K=ue===null?void 0:ue==="true";if(!(!Q&&K===void 0))return{braveKey:Q,useRealSearch:K}})():void 0,bm25Mode:(m==="text_only"||m==="full")&&localStorage.getItem("bm25_mode")||void 0,lastActiveCharId:(m==="text_only"||m==="full")&&localStorage.getItem("os_last_active_char_id")||void 0,eventNotifFlags:m==="text_only"||m==="full"?(()=>{const Q={};for(let ue=0;ue<localStorage.length;ue++){const K=localStorage.key(ue);K&&K.startsWith("sullyos_")&&(Q[K]=localStorage.getItem(K)||"")}return Object.keys(Q).length>0?Q:void 0})():void 0},mt=ae.length+3;let hs=0;if(m!=="text_only")(j=oe.socialAppData)!=null&&j.userProfile&&(oe.socialAppData.userProfile=ve(oe.socialAppData.userProfile)),(B=oe.socialAppData)!=null&&B.userBg&&(oe.socialAppData.userBg=ve(oe.socialAppData.userBg)),oe.roomCustomAssets&&(oe.roomCustomAssets=ve(oe.roomCustomAssets)),oe.theme&&(oe.theme=ve(oe.theme)),oe.customIcons&&(oe.customIcons=ve(oe.customIcons)),oe.appearancePresets&&(oe.appearancePresets=ve(oe.appearancePresets));else if((C=oe.socialAppData)!=null&&C.userProfile&&(oe.socialAppData.userProfile=ce(oe.socialAppData.userProfile)),(E=oe.socialAppData)!=null&&E.userBg&&(oe.socialAppData.userBg=ce(oe.socialAppData.userBg)),oe.roomCustomAssets&&(oe.roomCustomAssets=ce(oe.roomCustomAssets)),oe.customIcons&&(oe.customIcons=ce(oe.customIcons)),oe.appearancePresets&&(oe.appearancePresets=ce(oe.appearancePresets)),oe.theme){const Q=(X=oe.theme.desktopDecorations)==null?void 0:X.filter(K=>K.type==="preset").map(K=>({id:K.id,content:K.content})),ue=ce(oe.theme);oe.theme=ue,ue.desktopDecorations&&Q&&(ue.desktopDecorations=ue.desktopDecorations.map(K=>{const _e=Q.find(Fe=>Fe.id===K.id);return _e?{...K,content:_e.content}:K}).filter(K=>K.content&&K.content!==""))}const js=new Set(["memory_nodes","memory_vectors","memory_links","topic_boxes","anticipations","event_boxes","bank_transactions","scheduled_messages","memory_batches","hotnews_snapshots"]),yt=async(Q,ue,K=200)=>{if(Q.length<=K)return Q.map(ue);const _e=[];for(let Fe=0;Fe<Q.length;Fe+=K){const qe=Q.slice(Fe,Fe+K).map(ue);_e.push(...qe),Fe+K<Q.length&&await new Promise(Wt=>setTimeout(Wt,0))}return _e};for(const Q of ae){hs++,L({status:"processing",message:`正在打包: ${Q} ...`,progress:hs/mt*100});let ue=await $.getRawStoreData(Q),K;if(Q==="assets"&&Array.isArray(ue)&&(ue=ue.filter(_e=>!_e||typeof _e.id!="string"?!0:!A(_e.id))),js.has(Q))Q==="memory_vectors"&&Array.isArray(ue)?K=ue.map(_e=>{if(!_e||!_e.vector)return _e;let Fe;if(_e.vector instanceof Uint8Array){const qe=new Float32Array(_e.vector.buffer,_e.vector.byteOffset,_e.vector.byteLength>>>2);Fe=Array.from(qe)}else _e.vector instanceof Float32Array?Fe=Array.from(_e.vector):Fe=_e.vector;return{..._e,vector:Fe}}):K=ue;else if(m==="text_only")K=Array.isArray(ue)&&ue.length>200?await yt(ue,ce):ce(ue);else{if(Q==="messages"&&m==="media_only"&&(ue=ue.filter(_e=>_e.type==="image"||_e.type==="emoji")),Q==="characters"&&m==="media_only"){const _e=ue.map(Fe=>{var Wt,Ls,Os,$s;const qe={charId:Fe.id,avatar:Fe.avatar,sprites:Fe.sprites,dateSkinSets:Fe.dateSkinSets,activeSkinSetId:Fe.activeSkinSetId,customDateSprites:Fe.customDateSprites,spriteConfig:Fe.spriteConfig,roomItems:(Ls=(Wt=Fe.roomConfig)==null?void 0:Wt.items)==null?void 0:Ls.reduce((fn,Yt)=>(Yt.image&&Yt.image.startsWith("data:")&&(fn[Yt.id]=Yt.image),fn),{}),backgrounds:{chat:Fe.chatBackground,date:Fe.dateBackground,roomWall:(Os=Fe.roomConfig)==null?void 0:Os.wallImage,roomFloor:($s=Fe.roomConfig)==null?void 0:$s.floorImage}};return ve(qe)});oe.mediaAssets=_e;continue}K=Array.isArray(ue)&&ue.length>200?await yt(ue,ve):ve(ue)}switch(Q){case"characters":m!=="media_only"&&(oe.characters=K);break;case"messages":oe.messages=K;break;case"themes":oe.customThemes=K;break;case"emojis":oe.savedEmojis=K;break;case"emoji_categories":oe.emojiCategories=K;break;case"assets":oe.assets=K;break;case"gallery":oe.galleryImages=K;break;case"user_profile":K[0]&&(oe.userProfile=K[0]);break;case"diaries":oe.diaries=K;break;case"tasks":oe.tasks=K;break;case"anniversaries":oe.anniversaries=K;break;case"room_todos":oe.roomTodos=K;break;case"room_notes":oe.roomNotes=K;break;case"groups":oe.groups=K;break;case"journal_stickers":oe.savedJournalStickers=K;break;case"social_posts":oe.socialPosts=K;break;case"courses":oe.courses=K;break;case"games":oe.games=K;break;case"worldbooks":oe.worldbooks=K;break;case"novels":oe.novels=K;break;case"songs":oe.songs=K;break;case"bank_transactions":oe.bankTransactions=K;break;case"bank_data":{if(Array.isArray(K)){const _e=K.find(qe=>qe.id==="main_state"),Fe=K.find(qe=>qe.id==="dollhouse_state");oe.bankState=_e?{..._e,id:void 0}:void 0,oe.bankDollhouse=(Fe==null?void 0:Fe.data)||void 0}break}case"xhs_activities":oe.xhsActivities=K;break;case"xhs_stock":oe.xhsStockImages=K;break;case"quizzes":oe.quizSessions=K;break;case"guidebook":oe.guidebookSessions=K;break;case"scheduled_messages":oe.scheduledMessages=K;break;case"life_sim":oe.lifeSimState=Array.isArray(K)?K[0]||null:K||null;break;case"handbook":oe.handbooks=K;break;case"trackers":oe.trackers=K;break;case"tracker_entries":oe.trackerEntries=K;break;case"hotnews_snapshots":oe.hotNewsSnapshots=K;break;case"memory_nodes":oe.memoryNodes=K;break;case"memory_vectors":oe.memoryVectors=K;break;case"memory_links":oe.memoryLinks=K;break;case"topic_boxes":oe.topicBoxes=K;break;case"anticipations":oe.anticipations=K;break;case"event_boxes":oe.eventBoxes=K;break;case"daily_schedule":oe.dailySchedules=K;break;case"memory_batches":oe.memoryBatches=K;break;case"pixel_home_assets":oe.pixelHomeAssets=K;break;case"pixel_home_layouts":oe.pixelHomeLayouts=K;break;case"vr_novels":oe.vrNovels=K;break;case"vr_annotations":oe.vrAnnotations=K;break;case"cc_custom_parts":oe.customCreatorParts=K;break;case"vr_letters":oe.vrLetters=K;break;case"vr_settings":oe.vrSettings=K;break;case"vr_music":oe.vrMusicRoom=Array.isArray(K)?K[0]||void 0:K||void 0;break;case"vr_guestbook":oe.vrGuestbook=Array.isArray(K)?K[0]||void 0:K||void 0;break}await new Promise(_e=>setTimeout(_e,10))}L({status:"processing",message:"正在生成压缩包（最高压缩级别）...",progress:70});const Mt=["characters","messages","assets","galleryImages","savedEmojis","memoryNodes","memoryVectors","memoryLinks","socialPosts","diaries","worldbooks","novels","xhsActivities","bankTransactions","quizSessions","guidebookSessions","topicBoxes","anticipations","eventBoxes","roomCustomAssets","mediaAssets","customThemes","appearancePresets","courses","games","songs","roomTodos","roomNotes","tasks","anniversaries","groups","savedJournalStickers","emojiCategories","xhsStockImages","scheduledMessages","handbooks","trackers","trackerEntries","hotNewsSnapshots","dailySchedules","memoryBatches","pixelHomeAssets","pixelHomeLayouts"],Pe={},Oe=new Set(Mt);for(const Q of Object.keys(oe))Oe.has(Q)||(Pe[Q]=oe[Q]);const Ze=JSON.stringify(Pe),Ve=[Ze.slice(0,-1)];let Bt=!1;for(const Q of Mt){const ue=oe[Q];ue!=null&&(Ve.push(`${Bt||Ze.length>2?",":""}"${Q}":${JSON.stringify(ue)}`),Bt=!0,oe[Q]=void 0,await new Promise(K=>setTimeout(K,0)))}Ve.push("}"),re.file("data.json",Ve.join("")),Ve.length=0;let os=-10;const Gn=await re.generateAsync({type:"blob",streamFiles:!0,compression:"DEFLATE",compressionOptions:{level:9}},Q=>{const ue=Q.percent;(ue-os>=5||ue>=99)&&(os=ue,L({status:"processing",message:`正在压缩备份数据 ${ue.toFixed(0)}%...`,progress:Math.min(99,70+Math.floor(ue*.29))}))});return L({status:"idle",message:"",progress:100}),Gn}catch(O){throw console.error("Export Failed",O),L({status:"idle",message:"",progress:0}),new Error("导出失败: "+O.message)}},pn=async m=>{const j=typeof m=="string"?"json":m.name,B=typeof m=="string"?typeof Blob<"u"?new Blob([m]).size:m.length:m.size,C=new Set;let E=0,X=0,O="解析备份文件",re,fe;const le=(A,ae={})=>{const je=[A],Ue=ae.current??O,ct=ae.currentFile??re,lt=ae.currentFileSize??fe;if(Ue&&je.push(`当前部分：${Ue}`),typeof ae.itemTotal=="number"&&ae.itemTotal>0&&je.push(`条目：${ae.itemDone||0}/${ae.itemTotal}`),ct){const oe=ia(lt);je.push(`当前文件：${ct}${oe?` · ${oe}`:""}`)}if(j!=="json"&&ae.current==="解析备份文件"){const oe=ia(B);je.push(`备份：${j}${oe?` · ${oe}`:""}`)}return je.join(`
`)},xe=(A,ae,je,Ue={})=>{Ue.current!==void 0&&(O=Ue.current),Ue.currentFile!==void 0&&(re=Ue.currentFile),Ue.currentFileSize!==void 0&&(fe=Ue.currentFileSize),X=Math.max(X,Math.min(99,Math.max(0,je))),ac(A,j,{sourceSize:B,assetDone:C.size,assetTotal:E||void 0,...Ue}),L({status:"processing",message:le(ae,Ue),progress:X})},ce=A=>Object.values(A.files||{}).filter(je=>je&&!je.dir&&typeof je.name=="string"&&je.name.startsWith("assets/")).length,ve=A=>{const ae=A.endsWith("==")?2:A.endsWith("=")?1:0;return Math.max(0,Math.floor(A.length*3/4)-ae)};xe("parsing","正在解析备份文件...",1,{current:"解析备份文件",sourceSize:B});try{let A,ae=null;if(typeof m=="string")A=JSON.parse(m);else if(m.name.endsWith(".zip")){const Oe=await(await To()).loadAsync(m);ae=Oe;const Ze=Oe.file("data.json");if(!Ze)throw new Error("损坏的备份包: 缺少 data.json");let Ve=await Ze.async("string");E=ce(Oe),A=JSON.parse(Ve),Ve=""}else try{const Pe=await m.text();A=JSON.parse(Pe)}catch{throw new Error("无效的文件格式，请上传 .zip 或 .json")}const je=A.assets!==void 0,Ue=A.customIcons!==void 0,ct=A.appearancePresets!==void 0,lt=async(Pe,Oe="数据")=>{var Gn,Q;if(!ae)return;const Ze=new Map,Ve=new WeakSet,Bt=[Pe];for(;Bt.length;){const ue=Bt.pop();if(!(ue===null||typeof ue!="object")&&!Ve.has(ue))if(Ve.add(ue),Array.isArray(ue))for(let K=0;K<ue.length;K++){const _e=ue[K];if(typeof _e=="string"&&_e.startsWith("assets/")){const Fe=_e.slice(7),qe=Ze.get(Fe)||[];qe.push({parent:ue,key:K,filename:Fe}),Ze.set(Fe,qe)}else _e&&typeof _e=="object"&&Bt.push(_e)}else for(const K in ue){if(!Object.prototype.hasOwnProperty.call(ue,K))continue;const _e=ue[K];if(typeof _e=="string"&&_e.startsWith("assets/")){const Fe=_e.slice(7),qe=Ze.get(Fe)||[];qe.push({parent:ue,key:K,filename:Fe}),Ze.set(Fe,qe)}else _e&&typeof _e=="object"&&Bt.push(_e)}}const os=Array.from(Ze.entries());if(os.length!==0)for(const[ue,K]of os){const _e=ae.file(`assets/${ue}`),Fe=((Gn=_e==null?void 0:_e._data)==null?void 0:Gn.uncompressedSize)||((Q=_e==null?void 0:_e._data)==null?void 0:Q.compressedSize);xe("assets","正在恢复素材...",35+Math.floor(C.size/Math.max(1,E||os.length)*35),{current:Oe,currentFile:ue,currentFileSize:Fe,assetDone:C.size,assetTotal:E||os.length});try{if(!_e){console.warn(`Missing asset in backup: assets/${ue}`);continue}const qe=await _e.async("base64"),Wt=(ue.split(".").pop()||"png").toLowerCase(),Os=`data:${Wt==="jpg"||Wt==="jpeg"?"image/jpeg":Wt==="gif"?"image/gif":Wt==="webp"?"image/webp":"image/png"};base64,${qe}`;for(const fn of K)fn.parent[fn.key]=Os;const $s=ve(qe);C.add(ue),xe("assets","正在恢复素材...",35+Math.floor(C.size/Math.max(1,E||os.length)*35),{current:Oe,currentFile:ue,currentFileSize:$s,assetDone:C.size,assetTotal:E||os.length})}catch{console.warn(`Failed to restore asset: assets/${ue}`)}await new Promise(qe=>setTimeout(qe,0))}};if(xe("database","正在写入数据库...",50,{current:"准备写入数据库",currentFile:""}),await $.importFullData(A,{beforeWrite:lt,onProgress:Pe=>{const Oe=Pe.sectionTotal>0?Pe.sectionDone/Pe.sectionTotal:0,Ze=Pe.itemTotal&&Pe.sectionTotal>0?(Pe.itemDone||0)/Pe.itemTotal/Pe.sectionTotal:0,Ve=50+Math.floor(Math.min(1,Oe+Ze)*40);xe("database","正在写入数据库...",Ve,{current:Pe.stage==="done"?`${Pe.label}完成`:Pe.label,currentFile:"",itemDone:Pe.itemDone,itemTotal:Pe.itemTotal})}}),xe("settings","正在恢复系统设置...",92,{current:"系统设置",currentFile:""}),A.theme&&(await lt(A.theme,"系统主题"),await Es(A.theme)),A.apiConfig&&Qt(A.apiConfig),A.availableModels&&an(A.availableModels),A.apiPresets&&ln(A.apiPresets),A.realtimeConfig&&Zs(A.realtimeConfig),A.memoryPalaceConfig&&Ms(A.memoryPalaceConfig),A.customIcons!==void 0||A.appearancePresets!==void 0){await lt(A.customIcons,"应用图标"),await lt(A.appearancePresets,"外观预设");const Pe=await $.getAllAssets();if(Array.isArray(Pe))for(const Oe of Pe)A.customIcons!==void 0&&Oe.id.startsWith("icon_")&&await $.deleteAsset(Oe.id),A.appearancePresets!==void 0&&Oe.id.startsWith("appearance_preset_")&&await $.deleteAsset(Oe.id);if(A.customIcons)for(const[Oe,Ze]of Object.entries(A.customIcons))await $.saveAsset(`icon_${Oe}`,Ze);if(A.appearancePresets)for(const Oe of A.appearancePresets)await $.saveAsset(`appearance_preset_${Oe.id}`,JSON.stringify(Oe))}if(A.studyApiConfig&&localStorage.setItem("study_api_config",JSON.stringify(A.studyApiConfig)),A.studyTutorPresets&&localStorage.setItem("study_tutor_presets",JSON.stringify(A.studyTutorPresets)),A.cloudBackupConfig&&localStorage.setItem("os_cloud_backup_config",JSON.stringify(A.cloudBackupConfig)),A.remoteVectorConfig&&localStorage.setItem("os_remote_vector_config",JSON.stringify(A.remoteVectorConfig)),A.instantPushConfig&&localStorage.setItem("instant_push_config_v1",JSON.stringify(A.instantPushConfig)),A.pushVapid&&localStorage.setItem("push_vapid_v1",JSON.stringify(A.pushVapid)),A.memoryPalaceHighWaterMarks)for(const[Pe,Oe]of Object.entries(A.memoryPalaceHighWaterMarks))typeof Oe=="number"&&Oe>0&&localStorage.setItem(`mp_lastMsgId_${Pe}`,String(Oe));if(A.memoryPalaceFlags&&typeof A.memoryPalaceFlags=="object")for(const[Pe,Oe]of Object.entries(A.memoryPalaceFlags))typeof Oe=="string"&&(Pe.startsWith("mp_personality_tried_")||Pe.startsWith("mp_first_archive_notice_"))&&localStorage.setItem(Pe,Oe);if(typeof A.chatTranslateSourceLang=="string"&&localStorage.setItem("chat_translate_source_lang",A.chatTranslateSourceLang),typeof A.chatTranslateTargetLang=="string"&&localStorage.setItem("chat_translate_lang",A.chatTranslateTargetLang),A.chatTranslateEnabledByChar&&typeof A.chatTranslateEnabledByChar=="object")for(const[Pe,Oe]of Object.entries(A.chatTranslateEnabledByChar))localStorage.setItem(`chat_translate_enabled_${Pe}`,Oe?"true":"false");if(A.chatTranslateSourceLangByChar&&typeof A.chatTranslateSourceLangByChar=="object")for(const[Pe,Oe]of Object.entries(A.chatTranslateSourceLangByChar))typeof Oe=="string"&&localStorage.setItem(`chat_translate_source_lang_${Pe}`,Oe);if(A.chatTranslateTargetLangByChar&&typeof A.chatTranslateTargetLangByChar=="object")for(const[Pe,Oe]of Object.entries(A.chatTranslateTargetLangByChar))typeof Oe=="string"&&localStorage.setItem(`chat_translate_lang_${Pe}`,Oe);if(A.chatArchivePrompts!==void 0&&localStorage.setItem("chat_archive_prompts",JSON.stringify(A.chatArchivePrompts)),typeof A.chatActiveArchivePromptId=="string"&&localStorage.setItem("chat_active_archive_prompt_id",A.chatActiveArchivePromptId),A.characterRefinePrompts!==void 0&&localStorage.setItem("character_refine_prompts",JSON.stringify(A.characterRefinePrompts)),typeof A.characterActiveRefinePromptId=="string"&&localStorage.setItem("character_active_refine_prompt_id",A.characterActiveRefinePromptId),typeof A.scheduleAppTheme=="string"&&localStorage.setItem("schedule_app_theme",A.scheduleAppTheme),typeof A.handbookLifestreamDepth=="string"&&localStorage.setItem("handbook_lifestream_depth",A.handbookLifestreamDepth),typeof A.groupchatContextLimit=="number"&&localStorage.setItem("groupchat_context_limit",String(A.groupchatContextLimit)),A.browserConfig&&typeof A.browserConfig=="object"&&(typeof A.browserConfig.braveKey=="string"&&localStorage.setItem("browser_brave_key",A.browserConfig.braveKey),typeof A.browserConfig.useRealSearch=="boolean"&&localStorage.setItem("browser_use_real_search",A.browserConfig.useRealSearch?"true":"false")),typeof A.bm25Mode=="string"&&localStorage.setItem("bm25_mode",A.bm25Mode),typeof A.lastActiveCharId=="string"&&localStorage.setItem("os_last_active_char_id",A.lastActiveCharId),A.eventNotifFlags&&typeof A.eventNotifFlags=="object")for(const[Pe,Oe]of Object.entries(A.eventNotifFlags))typeof Oe=="string"&&Pe.startsWith("sullyos_")&&localStorage.setItem(Pe,Oe);if(A.socialAppData&&(await lt(A.socialAppData,"动态设置"),A.socialAppData.charHandles&&localStorage.setItem("spark_char_handles",JSON.stringify(A.socialAppData.charHandles)),A.socialAppData.userId&&localStorage.setItem("spark_user_id",A.socialAppData.userId),A.socialAppData.userProfile&&await $.saveAsset("spark_social_profile",JSON.stringify(A.socialAppData.userProfile)),A.socialAppData.userBg&&await $.saveAsset("spark_user_bg",A.socialAppData.userBg)),A.roomCustomAssets){await lt(A.roomCustomAssets,"房间自定义素材");const Pe=A.roomCustomAssets.map(Oe=>({...Oe,id:Oe.id||`asset_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,visibility:Oe.visibility||"public"}));await $.saveAsset("room_custom_assets_list",JSON.stringify(Pe))}const oe=await $.getAllCharacters(),mt=await $.getGroups(),hs=await $.getThemes(),js=await $.getUserProfile(),yt=await $.getAllWorldbooks(),Mt=await $.getAllNovels();if(je||Ue||ct){const Pe=await $.getAllAssets(),Oe={},Ze=[];Array.isArray(Pe)&&Pe.forEach(Ve=>{if(Ve.id.startsWith("icon_")&&(Oe[Ve.id.replace("icon_","")]=Ve.data),Ve.id.startsWith("appearance_preset_"))try{Ze.push(JSON.parse(Ve.data))}catch{}}),y(Oe),Ze.sort((Ve,Bt)=>Bt.createdAt-Ve.createdAt),Me(Ze)}oe.length>0&&g(oe.map(Pe=>Ai(Nn(Pe)))),mt.length>0&&_(mt),hs.length>0&&we(hs),js&&G(js),yt.length>0&&D(yt),Mt.length>0&&T(Mt),L({status:"idle",message:"",progress:100}),hf(),Ge("恢复成功，系统即将重启...","success"),setTimeout(()=>window.location.reload(),1500)}catch(A){console.error("Import Error:",A),L({status:"idle",message:"",progress:0});const ae=A instanceof SyntaxError?"JSON 格式错误":A.message||"未知错误";throw ac("error",j,{sourceSize:B,current:O,currentFile:re,currentFileSize:fe,assetDone:C.size,assetTotal:E||void 0,error:ae}),new Error(`恢复失败: ${ae}`)}},kn=async()=>{try{await $.deleteDB(),localStorage.clear(),window.location.reload()}catch(m){console.error(m),Ge("重置失败，请手动清除浏览器数据","error")}},mn=m=>s(m),ks=()=>s(R.Launcher),Nt=()=>l(!1),pt=m=>{xt(m),s(R.Launcher)},z=()=>{s(R.Call)},F=()=>{xt(null)},H=h.useCallback(m=>(We.current=m,()=>{We.current===m&&(We.current=null)}),[]),J=h.useCallback(()=>{We.current&&We.current()||t!==R.Launcher&&ks()},[t,ks]),Te={activeApp:t,openApp:mn,closeApp:ks,theme:o,updateTheme:Es,virtualTime:u,apiConfig:r,updateApiConfig:Qt,isLocked:i,unlock:Nt,isDataLoaded:w,characters:f,activeCharacterId:x,addCharacter:vt,updateCharacter:Ot,deleteCharacter:ms,setActiveCharacterId:b,worldbooks:I,addWorldbook:ts,updateWorldbook:rt,deleteWorldbook:Ft,novels:v,addNovel:Rs,updateNovel:Qe,deleteNovel:ht,groups:S,createGroup:Zt,deleteGroup:es,userProfile:Z,updateUserProfile:it,availableModels:P,setAvailableModels:W,apiPresets:Y,addApiPreset:rn,removeApiPreset:cn,realtimeConfig:V,updateRealtimeConfig:Zs,memoryPalaceConfig:ne,updateMemoryPalaceConfig:Ms,syncEmotionApiToAllCharacters:nn,remoteVectorConfig:he,updateRemoteVectorConfig:on,customThemes:me,addCustomTheme:kt,removeCustomTheme:fs,appearancePresets:ge,saveAppearancePreset:_n,applyAppearancePreset:Ss,deleteAppearancePreset:Sn,renameAppearancePreset:dn,exportAppearancePreset:ns,importAppearancePreset:Ps,toasts:Ce,addToast:Ge,errorDialog:Ye,showError:vn,dismissError:Jn,customIcons:de,setCustomIcon:ss,resetAppearance:Ds,lastMsgTimestamp:ye,unreadMessages:ie,clearUnread:us,proactiveComposingChars:ze,cloudBackupConfig:pe,updateCloudBackupConfig:Ts,cloudBackupToWebDAV:en,cloudRestoreFromWebDAV:tn,listCloudBackups:sn,exportSystem:un,importSystem:pn,resetSystem:kn,sysOperation:M,systemLogs:U,clearLogs:Je,registerBackHandler:H,handleBack:J,suspendedCall:gt,suspendCall:pt,resumeCall:z,clearSuspendedCall:F};return n.jsx(Jl.Provider,{value:Te,children:e})},ds=()=>{const e=h.useContext(Jl);if(e===void 0)throw new Error("useOS must be used within an OSProvider");return e},Be="#FBF7EA",He="#5E483B",bf=80,ut=(e,t)=>{const[s,o,a,r]=e,c=a-s,i=r-o,l=bf/Math.max(c,i),d=50-l*(s+c/2),u=50-l*(o+i/2);return n.jsx("svg",{viewBox:"0 0 100 100",className:"w-full h-full",children:n.jsx("g",{transform:`translate(${d} ${u}) scale(${l})`,children:t})})},wf=ut([25,12,75,89],n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M50 12 C76 23 86 50 75 79 C71 89 58 93 50 89 C42 93 29 89 25 79 C14 50 24 23 50 12Z",fill:Be}),n.jsx("path",{d:"M50 22 V83",stroke:He,strokeWidth:"4.5",strokeLinecap:"round"}),n.jsx("path",{d:"M50 42 L68 33 M50 57 L32 48 M50 70 L64 63",stroke:He,strokeWidth:"4",strokeLinecap:"round"})]})),ic=n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M50 22 C58 15 68 19 65 28 C57 31 50 29 50 22Z",fill:"#7CC36B"}),n.jsx("circle",{cx:"50",cy:"56",r:"30",fill:Be}),n.jsx("circle",{cx:"40",cy:"52",r:"4.2",fill:He}),n.jsx("circle",{cx:"60",cy:"52",r:"4.2",fill:He}),n.jsx("circle",{cx:"32",cy:"60",r:"4.5",fill:"#F6A8B8"}),n.jsx("circle",{cx:"68",cy:"60",r:"4.5",fill:"#F6A8B8"}),n.jsx("path",{d:"M40 64 Q50 73 60 64",stroke:He,strokeWidth:"4.5",fill:"none",strokeLinecap:"round"})]}),Mo=n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M50 30 C42 24 28 24 21 28 V75 C28 71 42 71 50 77 C58 71 72 71 79 75 V28 C72 24 58 24 50 30Z",fill:Be}),n.jsx("path",{d:"M50 30 V77",stroke:He,strokeWidth:"3.5"})]}),vf=e=>n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M37 33 L43 25 H57 L63 33Z",fill:Be}),n.jsx("rect",{x:"17",y:"33",width:"66",height:"46",rx:"11",fill:Be}),n.jsx("circle",{cx:"50",cy:"56",r:"14",fill:e}),n.jsx("circle",{cx:"50",cy:"56",r:"6.5",fill:Be}),n.jsx("circle",{cx:"71",cy:"44",r:"3.5",fill:"#F7CD67"})]}),_f=n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"56",y:"22",width:"6.5",height:"44",rx:"3.2",fill:Be}),n.jsx("path",{d:"M62 22 C74 24 80 31 77 42 C75 35 68 32 62 35Z",fill:Be}),n.jsx("ellipse",{cx:"48",cy:"66",rx:"13",ry:"10",fill:Be,transform:"rotate(-18 48 66)"})]}),cc=n.jsx("path",{d:"M50 14 L61 39 L88 41 L67 60 L74 87 L50 72 L26 87 L33 60 L12 41 L39 39Z",fill:Be}),lc=n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M50 20 C73 20 84 35 84 50 C84 62 74 64 68 64 C62 64 60 70 64 76 C66 80 62 84 54 84 C30 84 16 68 16 50 C16 33 30 20 50 20Z",fill:Be}),n.jsx("circle",{cx:"38",cy:"42",r:"5",fill:"#FC736D"}),n.jsx("circle",{cx:"55",cy:"36",r:"5",fill:"#F7CD67"}),n.jsx("circle",{cx:"66",cy:"48",r:"5",fill:"#82D5BB"})]}),Sf={[R.Chat]:ut([9,24,91,72],n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M24 24 H76 a15 15 0 0 1 15 15 v13 a15 15 0 0 1 -15 15 H56 l-6 10 -6 -10 H24 a15 15 0 0 1 -15 -15 v-13 a15 15 0 0 1 15 -15Z",fill:Be}),n.jsx("circle",{cx:"32",cy:"45.5",r:"6",fill:He}),n.jsx("circle",{cx:"50",cy:"45.5",r:"6",fill:He}),n.jsx("circle",{cx:"68",cy:"45.5",r:"6",fill:He})]})),[R.Character]:ut([20,15,80,86],ic),[R.LifeSim]:ut([20,15,80,86],ic),[R.MemoryPalace]:ut([14,18,86,84],n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M50 18 L86 46 H14 Z",fill:Be}),n.jsx("rect",{x:"24",y:"46",width:"52",height:"38",rx:"5",fill:Be}),n.jsx("rect",{x:"42",y:"60",width:"16",height:"24",rx:"3",fill:He}),n.jsx("rect",{x:"30",y:"52",width:"9",height:"9",rx:"2",fill:"#82D5BB"}),n.jsx("rect",{x:"61",y:"52",width:"9",height:"9",rx:"2",fill:"#82D5BB"})]})),[R.Call]:ut([23,20,82,83],n.jsx("path",{d:"M30 20 C25 20 20 25 23 35 C30 60 42 73 67 80 C77 83 82 78 82 73 L73 60 C70 56 65 55 61 58 L56 61 C47 56 44 53 39 44 L42 39 C45 35 44 30 40 27 Z",fill:Be})),[R.Room]:ut([16,22,84,80],n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M50 22 L84 80 H16 Z",fill:Be}),n.jsx("path",{d:"M50 42 L68 80 H32 Z",fill:He}),n.jsx("path",{d:"M50 42 V80",stroke:Be,strokeWidth:"3.5"})]})),[R.CheckPhone]:ut([31,16,69,84],n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"31",y:"16",width:"38",height:"68",rx:"11",fill:Be}),n.jsx("rect",{x:"37",y:"25",width:"26",height:"42",rx:"4",fill:"#82D5BB"}),n.jsx("circle",{cx:"50",cy:"75",r:"3.6",fill:He})]})),[R.Date]:ut([14,17,86,82],n.jsx("path",{d:"M50 82 C22 60 14 46 14 33 C14 23 22 17 31 17 C39 17 46 21 50 30 C54 21 61 17 69 17 C78 17 86 23 86 33 C86 46 78 60 50 82Z",fill:Be})),[R.User]:ut([25,18,75,82],n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"25",y:"18",width:"50",height:"64",rx:"7",fill:Be}),n.jsx("circle",{cx:"50",cy:"42",r:"12",fill:"#F7CD67"}),n.jsx("circle",{cx:"46",cy:"41",r:"2.2",fill:He}),n.jsx("circle",{cx:"54",cy:"41",r:"2.2",fill:He}),n.jsx("path",{d:"M45 47 Q50 51 55 47",stroke:He,strokeWidth:"2.4",fill:"none",strokeLinecap:"round"}),n.jsx("rect",{x:"34",y:"62",width:"32",height:"5",rx:"2.5",fill:He}),n.jsx("rect",{x:"38",y:"71",width:"24",height:"5",rx:"2.5",fill:"#B7A98C"})]})),[R.Bank]:ut([20,27,80,87],n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M37 35 Q50 27 63 35 C77 46 80 67 69 79 C61 87 39 87 31 79 C20 67 23 46 37 35Z",fill:Be}),n.jsx("path",{d:"M41 31 L59 31 L55 40 L45 40Z",fill:He}),n.jsx("path",{d:"M50 50 C43 50 39 56 39 63 H61 C61 56 57 50 50 50Z",fill:"#F7CD67"}),n.jsx("rect",{x:"46",y:"63",width:"8",height:"3.5",fill:He}),n.jsx("circle",{cx:"50",cy:"70",r:"3",fill:He})]})),[R.GroupChat]:ut([17,31,83,73],n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"64",cy:"52",r:"19",fill:"#EFE6CF"}),n.jsx("circle",{cx:"38",cy:"52",r:"21",fill:Be}),n.jsx("circle",{cx:"31",cy:"50",r:"3.4",fill:He}),n.jsx("circle",{cx:"45",cy:"50",r:"3.4",fill:He}),n.jsx("path",{d:"M31 58 Q38 64 45 58",stroke:He,strokeWidth:"3.4",fill:"none",strokeLinecap:"round"})]})),[R.Settings]:ut([20,28,80,78],n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"22",y:"33",width:"56",height:"6",rx:"3",fill:Be}),n.jsx("circle",{cx:"62",cy:"36",r:"8",fill:Be,stroke:He,strokeWidth:"3.5"}),n.jsx("rect",{x:"22",y:"50",width:"56",height:"6",rx:"3",fill:Be}),n.jsx("circle",{cx:"38",cy:"53",r:"8",fill:Be,stroke:He,strokeWidth:"3.5"}),n.jsx("rect",{x:"22",y:"67",width:"56",height:"6",rx:"3",fill:Be}),n.jsx("circle",{cx:"66",cy:"70",r:"8",fill:Be,stroke:He,strokeWidth:"3.5"})]})),[R.Music]:ut([35,22,80,76],_f),[R.Journal]:ut([21,24,79,77],Mo),[R.Study]:ut([21,24,79,77],Mo),[R.Worldbook]:ut([21,24,79,77],Mo),[R.Guidebook]:ut([21,24,79,77],Mo),[R.SpecialMoments]:ut([12,14,88,87],cc),[R.VRWorld]:ut([12,14,88,87],cc),[R.Appearance]:ut([16,20,84,84],lc),[R.ThemeMaker]:ut([16,20,84,84],lc)},kf=e=>Sf[e]??wf,jf=n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M37 35 Q50 27 63 35 C77 46 80 67 69 79 C61 87 39 87 31 79 C20 67 23 46 37 35Z",fill:Be}),n.jsx("path",{d:"M41 31 L59 31 L55 40 L45 40Z",fill:He}),n.jsx("path",{d:"M50 50 C43 50 39 56 39 63 H61 C61 56 57 50 50 50Z",fill:"#F7CD67"}),n.jsx("rect",{x:"46",y:"63",width:"8",height:"3.5",fill:He}),n.jsx("circle",{cx:"50",cy:"70",r:"3",fill:He})]}),$f=n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M24 24 H76 a15 15 0 0 1 15 15 v13 a15 15 0 0 1 -15 15 H56 l-6 10 -6 -10 H24 a15 15 0 0 1 -15 -15 v-13 a15 15 0 0 1 15 -15Z",fill:Be}),n.jsx("circle",{cx:"32",cy:"45.5",r:"6",fill:He}),n.jsx("circle",{cx:"50",cy:"45.5",r:"6",fill:He}),n.jsx("circle",{cx:"68",cy:"45.5",r:"6",fill:He})]}),If=n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"22",y:"26",width:"56",height:"54",rx:"8",fill:Be}),n.jsx("rect",{x:"22",y:"26",width:"56",height:"16",rx:"8",fill:"#FC736D"}),n.jsx("rect",{x:"33",y:"20",width:"6",height:"14",rx:"3",fill:He}),n.jsx("rect",{x:"61",y:"20",width:"6",height:"14",rx:"3",fill:He}),n.jsx("circle",{cx:"38",cy:"56",r:"4",fill:He}),n.jsx("circle",{cx:"52",cy:"56",r:"4",fill:He}),n.jsx("circle",{cx:"66",cy:"56",r:"4",fill:"#B7A98C"})]}),Nf=n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"46",cy:"62",r:"22",fill:Be}),n.jsx("rect",{x:"38",y:"22",width:"15",height:"40",rx:"7.5",fill:Be})]}),Af=n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M28 50 A22 22 0 1 1 38 69",fill:"none",stroke:Be,strokeWidth:"8",strokeLinecap:"round"}),n.jsx("path",{d:"M22 32 L34 32 L28 46Z",fill:Be})]}),Cf=n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"22",y:"33",width:"56",height:"6",rx:"3",fill:Be}),n.jsx("circle",{cx:"62",cy:"36",r:"8",fill:Be,stroke:He,strokeWidth:"3.5"}),n.jsx("rect",{x:"22",y:"50",width:"56",height:"6",rx:"3",fill:Be}),n.jsx("circle",{cx:"38",cy:"53",r:"8",fill:Be,stroke:He,strokeWidth:"3.5"}),n.jsx("rect",{x:"22",y:"67",width:"56",height:"6",rx:"3",fill:Be}),n.jsx("circle",{cx:"66",cy:"70",r:"8",fill:Be,stroke:He,strokeWidth:"3.5"})]}),Ef=n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M50 30 C42 24 28 24 21 28 V75 C28 71 42 71 50 77 C58 71 72 71 79 75 V28 C72 24 58 24 50 30Z",fill:Be}),n.jsx("path",{d:"M50 30 V77",stroke:He,strokeWidth:"3.5"})]}),Tf=n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"24",y:"34",width:"52",height:"11",rx:"5.5",fill:Be}),n.jsx("rect",{x:"26",y:"47",width:"48",height:"6",rx:"3",fill:"#a06a30"}),n.jsx("rect",{x:"24",y:"55",width:"52",height:"11",rx:"5.5",fill:Be})]}),Mf=n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M40 36 L26 50 L40 64",stroke:Be,strokeWidth:"7",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M60 36 L74 50 L60 64",stroke:Be,strokeWidth:"7",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("line",{x1:"55",y1:"32",x2:"45",y2:"68",stroke:Be,strokeWidth:"6",strokeLinecap:"round"})]}),Rf=n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M50 14 C72 24 80 50 70 76 C66 84 56 87 50 84 C44 87 34 84 30 76 C20 50 28 24 50 14Z",fill:Be}),n.jsx("path",{d:"M50 22 V79",stroke:He,strokeWidth:"4",strokeLinecap:"round"}),n.jsx("path",{d:"M50 42 L65 34 M50 56 L35 48",stroke:He,strokeWidth:"3.5",strokeLinecap:"round"})]}),Df={mcd:{color:"#F7CD67",bbox:[24,34,76,66],glyph:Tf},html:{color:"#B77DEE",bbox:[24,32,74,68],glyph:Mf},thinking:{color:"#889DF0",bbox:[30,14,70,84],glyph:Rf},transfer:{color:"#F7CD67",bbox:[20,27,80,87],glyph:jf},poke:{color:"#F8A6B2",bbox:[24,22,68,84],glyph:Nf},archive:{color:"#B77DEE",bbox:[21,24,79,77],glyph:Ef},settings:{color:"#9A835A",bbox:[20,28,80,78],glyph:Cf},image:{color:"#82D5BB",bbox:[17,25,83,79],glyph:vf("#FC736D")},regenerate:{color:"#889DF0",bbox:[18,24,60,76],glyph:Af},proactive:{color:"#8AC68A",bbox:[9,24,91,72],glyph:$f},schedule:{color:"#FC736D",bbox:[22,20,78,80],glyph:If}},b0=({kind:e})=>{const t=Df[e];return t?n.jsx("div",{className:"w-14 h-14 flex items-center justify-center overflow-hidden",style:{background:t.color,borderRadius:"30%"},children:n.jsx("div",{className:"w-[66%] h-[66%]",children:ut(t.bbox,t.glyph)})}):null},Pf={[R.Settings]:()=>Le(()=>import("./Settings-Cl2uVVA6.js"),__vite__mapDeps([6,4,1,3,7,8,0])),[R.Character]:()=>Le(()=>import("./Character-99aSAYOm.js"),__vite__mapDeps([9,1,7,10,3,4,11,12,0])),[R.Chat]:()=>Le(()=>import("./Chat-BBF79JyD.js"),__vite__mapDeps([13,4,1,10,8,11,7,14,12,15,3,0])),[R.GroupChat]:()=>Le(()=>import("./GroupChat-BC2ZBQX7.js"),__vite__mapDeps([16,1,4,7,10,11,3,0])),[R.ThemeMaker]:()=>Le(()=>import("./ThemeMaker-ZWFYKsdp.js"),__vite__mapDeps([17,1,10,4,3,0])),[R.Appearance]:()=>Le(()=>import("./Appearance-CsJkHmqt.js"),__vite__mapDeps([18,1,10,4,3,0])),[R.Date]:()=>Le(()=>import("./DateApp-BmQLedX3.js"),__vite__mapDeps([19,1,4,7,10,14,12,15,3,0])),[R.User]:()=>Le(()=>import("./UserApp-BG0Hbc2O.js"),__vite__mapDeps([20,1,10,4,3,0])),[R.Journal]:()=>Le(()=>import("./JournalApp-BYG2fdSj.js"),__vite__mapDeps([21,1,4,7,3,0])),[R.Room]:()=>Le(()=>import("./RoomApp-CA789upN.js"),__vite__mapDeps([22,1,4,10,7,3,0])),[R.CheckPhone]:()=>Le(()=>import("./CheckPhone-4JZ_BzAY.js"),__vite__mapDeps([23,1,4,7,3,0])),[R.Study]:()=>Le(()=>import("./StudyApp-DdlQ9DWP.js"),__vite__mapDeps([24,1,4,7,3,0])),[R.Worldbook]:()=>Le(()=>import("./WorldbookApp-DbAp3dsf.js"),__vite__mapDeps([25,1,7,4,3,0])),[R.Bank]:()=>Le(()=>import("./BankApp-OGURGHfA.js"),__vite__mapDeps([26,1,4,7,10,3,0])),[R.XhsFreeRoam]:()=>Le(()=>import("./XhsFreeRoamApp-DbMKuVeJ.js"),__vite__mapDeps([27,1,4,3,0])),[R.Music]:()=>Le(()=>import("./MusicApp-DNY43XAT.js"),__vite__mapDeps([28,1,4,3,0])),[R.Call]:()=>Le(()=>import("./CallApp-BgykVL2e.js"),__vite__mapDeps([29,1,4,12,15,11,3,0])),[R.Guidebook]:()=>Le(()=>import("./GuidebookApp-DvwASdU5.js"),__vite__mapDeps([30,1,4,3,0])),[R.LifeSim]:()=>Le(()=>import("./LifeSimApp-CypQVut9.js"),__vite__mapDeps([31,1,4,3,0])),[R.MemoryPalace]:()=>Le(()=>import("./MemoryPalaceApp-BbuEmqpm.js"),__vite__mapDeps([32,4,1,3,0])),[R.QQBridge]:()=>Le(()=>import("./QQBridge-BmttP_n4.js"),__vite__mapDeps([33,1,4,3,0])),[R.SpecialMoments]:()=>Le(()=>import("./ValentineEvent-BGF7fRzk.js"),__vite__mapDeps([34,4,1,3,0])),[R.VRWorld]:()=>Le(()=>import("./VRWorldApp-BdYjp3i9.js"),__vite__mapDeps([35,1,4,3,0])),[R.CharCreatorDev]:()=>Le(()=>import("./CharCreatorDevApp-CDggjsAN.js"),__vite__mapDeps([36,1,4,3,0]))},Ro=new Set;let br=null;const Lf=e=>{br=e},dc=e=>{if(Ro.has(e))return;if(Ro.add(e),br){br(e);return}const t=Pf[e];t?Promise.resolve(t()).catch(()=>{Ro.delete(e)}):Ro.delete(e)},uc={indigo:"#889DF0",violet:"#B77DEE",purple:"#B77DEE",fuchsia:"#F8A6B2",pink:"#F8A6B2",rose:"#FC736D",red:"#FC736D",orange:"#E59266",amber:"#F7CD67",lime:"#D1DA49",green:"#8AC68A",emerald:"#82D5BB",cyan:"#82D5BB",blue:"#889DF0",slate:"#9A835A"},Wr=ls.memo(({app:e,onClick:t,size:s="md",hideLabel:o=!1,variant:a="default"})=>{const{customIcons:r,theme:c}=ds(),i=Vi[e.icon]||Vi.Settings,l=r[e.id],d=c.skin==="animalcrossing",u=d?"#725d42":c.contentColor||"#ffffff",p=s==="lg"?"w-[4.25rem] h-[4.25rem]":s==="sm"?"w-[2.75rem] h-[2.75rem]":"w-[3.5rem] h-[3.5rem]";if(d){const f=uc[e.color]||uc.slate;return n.jsxs("button",{onClick:t,onPointerDown:()=>dc(e.id),className:"flex flex-col items-center gap-1.5 group relative active:scale-95 transition-transform duration-200",style:{WebkitTapHighlightColor:"transparent"},children:[n.jsx("div",{className:`${p} relative flex items-center justify-center overflow-hidden`,style:{backgroundColor:f,borderRadius:"34%"},children:n.jsx("div",{className:"w-[78%] h-[78%] relative",children:kf(e.id)})}),!o&&n.jsx("span",{className:`${s==="sm"?"text-[9px] tracking-wide":"text-[10.5px] tracking-wide"} font-bold max-w-full truncate ${a==="dock"?"hidden":"block"}`,style:{color:u},children:e.name})]})}return n.jsxs("button",{onClick:t,onPointerDown:()=>dc(e.id),className:"flex flex-col items-center gap-1.5 group relative active:scale-95 transition-transform duration-200",style:{WebkitTapHighlightColor:"transparent"},children:[n.jsx("div",{className:`${p} relative flex items-center justify-center
        bg-white/40 rounded-[1.125rem]
        border border-white/35
        shadow-[0_4px_12px_rgba(0,0,0,0.16)]
        group-hover:bg-white/50 group-hover:border-white/50
      `,children:l?n.jsx("img",{src:l,className:"w-full h-full object-cover rounded-[1.2rem]",alt:e.name,loading:"lazy"}):n.jsx("div",{className:"w-[50%] h-[50%] drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)] opacity-90",style:{color:u},children:n.jsx(i,{className:"w-full h-full"})})}),!o&&n.jsx("span",{className:`${s==="sm"?"text-[8.5px] tracking-wider":"text-[10px] tracking-widest"} font-bold uppercase opacity-80 text-shadow-md transition-opacity max-w-full truncate ${a==="dock"?"hidden":"block"}`,style:{color:u},children:e.name})]})},(e,t)=>e.app.id===t.app.id&&e.size===t.size&&e.hideLabel===t.hideLabel&&e.variant===t.variant),Of=e=>{const t=new Date,s=t.getHours()*60+t.getMinutes();for(let o=e.length-1;o>=0;o--){const[a,r]=e[o].startTime.split(":").map(Number);if(s>=a*60+r)return o}return-1},Ff=()=>{const e=new Date,t=["SUN","MON","TUE","WED","THU","FRI","SAT"];return`${["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][e.getMonth()]} ${e.getDate()} · ${t[e.getDay()]}`},Bf=({schedule:e,character:t,contentColor:s="#ffffff",compact:o=!1,onEdit:a,onDelete:r,onReroll:c,onCoverImageChange:i,isGenerating:l=!1})=>{const[d,u]=h.useState(null),[p,f]=h.useState(""),[g,x]=h.useState(""),[b,S]=h.useState(""),[_,I]=h.useState(""),D=h.useRef(null),[v,T]=h.useState(null),Z=h.useRef(null),G=h.useRef(!1),w=500,k=me=>{G.current=!1,Z.current&&window.clearTimeout(Z.current),Z.current=window.setTimeout(()=>{G.current=!0,T(me)},w)},P=()=>{Z.current&&(window.clearTimeout(Z.current),Z.current=null)},W=e?Of(e.slots):-1,Y=t==null?void 0:t.avatar,ee=(t==null?void 0:t.name)||"角色",V=e==null?void 0:e.coverImage,q=(me,we)=>{u(me),f(we.startTime),x(we.activity),S(we.description||""),I(we.emoji||"")},ne=()=>{d!==null&&a&&a(d,{startTime:p,activity:g,description:b||void 0,emoji:_||void 0}),u(null)},Ne=me=>{var y;const we=(y=me.target.files)==null?void 0:y[0];if(!we||!i)return;const de=new FileReader;de.onload=ge=>{var Ce;const Me=new window.Image;Me.onload=()=>{var ye;const Se=document.createElement("canvas"),Ke=Math.min(1,400/Me.width);Se.width=Me.width*Ke,Se.height=Me.height*Ke,(ye=Se.getContext("2d"))==null||ye.drawImage(Me,0,0,Se.width,Se.height),i(Se.toDataURL("image/jpeg",.8))},Me.src=(Ce=ge.target)==null?void 0:Ce.result},de.readAsDataURL(we),me.target.value=""},Ee=`hsl(${(t==null?void 0:t.themeColor)||260}, 70%, 65%)`,he=`hsl(${(t==null?void 0:t.themeColor)||260}, 50%, 20%)`,be=`hsl(${(t==null?void 0:t.themeColor)||260}, 40%, 12%)`;return n.jsxs("div",{className:"relative rounded-3xl overflow-hidden shadow-2xl border border-white/10",style:{background:`linear-gradient(145deg, ${be}, hsl(${(t==null?void 0:t.themeColor)||260}, 35%, 8%))`,color:s},children:[n.jsxs("div",{className:"relative px-5 pt-5 pb-3 flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-[10px] font-bold tracking-[0.2em] uppercase opacity-50",children:"Daily"}),n.jsx("div",{className:"h-px flex-1 opacity-20",style:{background:s}})]}),n.jsx("h2",{className:"text-2xl font-black tracking-tight",style:{color:Ee},children:"Schedule"})]}),n.jsxs("div",{className:"flex flex-col items-end gap-1",children:[n.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20",style:{background:he},children:Ff()}),!o&&c&&n.jsx("button",{onClick:c,disabled:l,className:"text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20 hover:border-white/40 transition-all active:scale-95 disabled:opacity-30",style:{background:he},children:l?"生成中...":"↻ 重新生成"})]})]}),n.jsxs("div",{className:"flex flex-col",children:[n.jsxs("div",{className:"relative w-full h-32 overflow-hidden flex-shrink-0",children:[V||Y?n.jsx("img",{src:V||Y,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-70",style:{objectPosition:"center 30%"}}):n.jsx("div",{className:"absolute inset-0 opacity-10",style:{background:`linear-gradient(135deg, ${Ee}, transparent)`}}),n.jsx("div",{className:"absolute inset-0 z-10",style:{background:`linear-gradient(to bottom, transparent 30%, ${be})`}}),n.jsx("div",{className:"absolute bottom-2 right-3 z-20",children:n.jsx("span",{className:"text-[10px] font-bold opacity-50 tracking-widest uppercase",children:ee})}),!o&&i&&n.jsx("button",{onClick:()=>{var me;return(me=D.current)==null?void 0:me.click()},className:"absolute top-2 right-2 z-20 w-6 h-6 rounded-full bg-black/40 flex items-center justify-center text-white/60 hover:text-white/90 transition-colors text-[10px]",title:"更换看板图",children:"✎"}),n.jsx("input",{ref:D,type:"file",accept:"image/*",className:"hidden",onChange:Ne})]}),n.jsxs("div",{className:"px-5 pb-5 pt-1 space-y-1 min-w-0",children:[l&&!e?n.jsxs("div",{className:"py-12 text-center",children:[n.jsx("div",{className:"inline-block w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full animate-spin mb-3"}),n.jsx("p",{className:"text-xs opacity-40",children:"正在生成日程..."})]}):e&&e.slots.length>0?e.slots.map((me,we)=>{const de=we===W,y=W>=0&&we<W;if(d===we&&!o)return n.jsxs("div",{className:"p-3 rounded-xl border border-white/20",style:{background:he},children:[n.jsxs("div",{className:"flex gap-2 mb-2",children:[n.jsx("input",{type:"time",value:p,onChange:Se=>f(Se.target.value),className:"bg-white/10 rounded-lg px-2 py-1 text-xs font-mono w-24 border border-white/10 focus:outline-none"}),n.jsx("input",{value:_,onChange:Se=>I(Se.target.value),placeholder:"emoji",className:"bg-white/10 rounded-lg px-2 py-1 text-xs w-14 border border-white/10 focus:outline-none text-center"})]}),n.jsx("input",{value:g,onChange:Se=>x(Se.target.value),placeholder:"活动",className:"w-full bg-white/10 rounded-lg px-2 py-1 text-sm font-bold mb-1 border border-white/10 focus:outline-none"}),n.jsx("input",{value:b,onChange:Se=>S(Se.target.value),placeholder:"描述 (可选)",className:"w-full bg-white/10 rounded-lg px-2 py-1 text-xs border border-white/10 focus:outline-none opacity-70"}),n.jsxs("div",{className:"flex gap-2 mt-2",children:[n.jsx("button",{onClick:ne,className:"text-[10px] font-bold px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 transition-colors",children:"保存"}),n.jsx("button",{onClick:()=>u(null),className:"text-[10px] font-bold px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors opacity-60",children:"取消"})]})]},we);const Me=!o&&!!a,Ce=Me?{onPointerDown:Se=>{Se.button!==void 0&&Se.button!==0||k(we)},onPointerUp:()=>P(),onPointerLeave:()=>P(),onPointerCancel:()=>P(),onClick:()=>{if(G.current){G.current=!1;return}q(we,me)},onContextMenu:Se=>Se.preventDefault()}:{};return n.jsxs("div",{className:`relative flex items-start gap-3 py-2 px-3 rounded-xl transition-all ${de?"border border-white/20":"border border-transparent"} ${Me?"cursor-pointer hover:bg-white/5 select-none":""}`,style:de?{background:he}:{},...Ce,children:[n.jsxs("div",{className:"flex flex-col items-center w-12 flex-shrink-0",children:[n.jsx("span",{className:`text-xs font-mono font-bold ${y?"opacity-30":de?"opacity-100":"opacity-60"}`,children:me.startTime}),de&&n.jsx("span",{className:"text-[8px] font-bold px-1.5 py-0.5 rounded-full mt-0.5 animate-pulse",style:{background:Ee,color:be},children:"NOW"})]}),n.jsxs("div",{className:"flex flex-col items-center pt-1.5 flex-shrink-0",children:[n.jsx("div",{className:`w-2.5 h-2.5 rounded-full border-2 ${y?"opacity-30":""}`,style:{borderColor:de?Ee:"rgba(255,255,255,0.3)",background:de?Ee:y?"rgba(255,255,255,0.15)":"transparent"}}),we<e.slots.length-1&&n.jsx("div",{className:`w-px flex-1 min-h-[16px] ${y?"opacity-15":"opacity-20"}`,style:{background:s}})]}),n.jsxs("div",{className:`flex-1 min-w-0 ${y?"opacity-30":""}`,children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[me.emoji&&n.jsx("span",{className:"text-sm flex-shrink-0",children:me.emoji}),n.jsx("span",{className:"text-sm font-bold ",children:me.activity})]}),me.description&&n.jsx("p",{className:"text-[11px] opacity-50 mt-0.5 leading-tight",children:me.description})]})]},we)}):n.jsxs("div",{className:"py-12 text-center",children:[n.jsx("p",{className:"text-xs opacity-30",children:"暂无日程"}),c&&n.jsx("button",{onClick:c,className:"mt-2 text-xs font-bold opacity-50 hover:opacity-80 transition-opacity",style:{color:Ee},children:"生成今日日程"})]}),e&&e.slots.length>0&&n.jsxs("div",{className:"pt-2 pl-3",children:[n.jsx("span",{className:"text-[10px] font-bold tracking-widest opacity-20",children:"OFFLINE"}),n.jsx("p",{className:"text-[10px] opacity-15",children:"就寝"})]})]})]}),v!==null&&e&&e.slots[v]&&n.jsx("div",{className:"absolute inset-0 z-30 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm",onClick:()=>T(null),children:n.jsxs("div",{className:"w-full sm:w-64 bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden",onClick:me=>me.stopPropagation(),children:[n.jsxs("div",{className:"px-4 py-3 border-b border-slate-100",children:[n.jsx("p",{className:"text-xs text-slate-400",children:"日程项"}),n.jsxs("p",{className:"text-sm font-bold text-slate-700 truncate",children:[e.slots[v].startTime," · ",e.slots[v].activity]})]}),n.jsx("button",{className:"w-full py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors",onClick:()=>{const me=v;T(null),me!==null&&e&&q(me,e.slots[me])},children:"修改"}),n.jsx("button",{className:"w-full py-3 text-sm font-bold text-red-500 border-t border-slate-100 hover:bg-red-50 transition-colors",onClick:()=>{const me=v;T(null),me!==null&&r&&r(me)},children:"删除"}),n.jsx("button",{className:"w-full py-3 text-sm text-slate-400 border-t border-slate-100 hover:bg-slate-50 transition-colors",onClick:()=>T(null),children:"取消"})]})}),n.jsx("div",{className:"absolute top-3 left-3 opacity-10 pointer-events-none",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:s,children:n.jsx("path",{d:"M10 0l2.5 7.5H20l-6 4.5 2.5 7.5L10 15l-6.5 4.5L6 12 0 7.5h7.5z"})})}),n.jsx("div",{className:"absolute bottom-2 left-5 opacity-5 pointer-events-none text-[8px] font-mono tracking-widest",children:"DESIGN: NOI"})]})},Uf=e=>{const t=new Date,s=t.getHours()*60+t.getMinutes();for(let o=e.length-1;o>=0;o--){const[a,r]=e[o].startTime.split(":").map(Number);if(s>=a*60+r)return o}return-1},Hf=({schedule:e,character:t,contentColor:s="#ffffff",onOpen:o,acnh:a=!1})=>{var g,x;const r=e?Uf(e.slots):-1,c=r>=0?e.slots[r]:null,i=e&&r<e.slots.length-1?e.slots[r+1]:null,l=`hsl(${(t==null?void 0:t.themeColor)??260}, 70%, 65%)`,d=`hsla(${(t==null?void 0:t.themeColor)??260}, 70%, 55%, 0.28)`,u=new Date,p=`${u.getHours().toString().padStart(2,"0")}:${u.getMinutes().toString().padStart(2,"0")}`,f=(e==null?void 0:e.slots)??[];return a?n.jsx("button",{onClick:o,className:"w-full text-left rounded-3xl overflow-hidden active:scale-[0.98] transition-transform relative",style:{background:"rgb(247,243,223)",border:"2px solid #e8e2d6",boxShadow:"0 6px 18px rgba(61,52,40,0.12)"},children:n.jsxs("div",{className:"flex flex-col p-4 gap-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-[12px] font-extrabold",style:{color:"#725d42"},children:"🍃 今日日程"}),n.jsx("div",{className:"h-[2px] flex-1 rounded-full",style:{background:"#e8e2d6"}}),n.jsx("span",{className:"text-[11px] font-bold",style:{color:"#9f927d"},children:p})]}),n.jsxs("div",{className:"flex items-center gap-3.5",children:[n.jsx("div",{className:"w-[64px] h-[64px] shrink-0 rounded-[22%] overflow-hidden bg-[#e8e2d6] flex items-center justify-center",style:{border:"3px solid #fff",boxShadow:"0 4px 10px -3px rgba(61,52,40,0.25)"},children:t!=null&&t.avatar?n.jsx("img",{src:t.avatar,alt:"",loading:"lazy",className:"w-full h-full object-cover",style:{objectPosition:"center 28%"}}):n.jsx("span",{className:"text-lg font-bold",style:{color:"#9f927d"},children:((g=t==null?void 0:t.name)==null?void 0:g[0])||"🍃"})}),n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[n.jsx("span",{className:"text-[9px] font-extrabold tracking-wide px-2 py-0.5 rounded-full",style:{background:c?"#dff0c8":"#efe7d4",color:c?"#5a9e1e":"#9f927d"},children:c?"现在":"休息"}),n.jsx("span",{className:"text-[10px] font-bold",style:{color:"#9f927d"},children:c?c.startTime:p}),n.jsx("span",{className:"text-[9px] ml-auto shrink-0 truncate max-w-[40%] font-bold",style:{color:"#b3a88e"},children:(t==null?void 0:t.name)||"—"})]}),n.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[(c==null?void 0:c.emoji)&&n.jsx("span",{className:"text-base shrink-0",children:c.emoji}),n.jsx("span",{className:"text-[15px] font-bold truncate leading-tight",style:{color:"#725d42"},children:(c==null?void 0:c.activity)||(e?"休息中 · 暂无安排":"尚未生成日程")})]}),i&&n.jsxs("div",{className:"text-[10.5px] mt-0.5 truncate",style:{color:"#a89878"},children:["→ ",i.startTime," ",i.emoji?`${i.emoji} `:"",i.activity]})]})]}),f.length>0&&n.jsx("div",{className:"flex items-end gap-1.5 pt-0.5",children:f.slice(0,10).map((b,S)=>{const _=S===r,I=r>=0&&S<r;return n.jsxs("div",{className:"flex-1 min-w-0 flex flex-col items-center gap-1",children:[n.jsx("div",{className:"w-full rounded-full transition-all",style:{height:"4px",background:_?"#6fba2c":I?"#cdbfa0":"#e8e2d6"}}),n.jsx("span",{className:"text-[8px] font-bold",style:{color:_?"#5a9e1e":"#b3a88e"},children:b.startTime.slice(0,5)})]},S)})})]})}):n.jsxs("button",{onClick:o,className:"w-full group text-left rounded-3xl overflow-hidden transition-transform duration-200 active:scale-[0.98] relative",style:a?{background:"rgb(247,243,223)",border:"2px solid #e8e2d6",boxShadow:"0 6px 18px rgba(61,52,40,0.12)",color:s}:{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(24px) saturate(1.4)",WebkitBackdropFilter:"blur(24px) saturate(1.4)",border:"1px solid rgba(255,255,255,0.12)",boxShadow:"0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.08)",color:s},children:[!a&&(t==null?void 0:t.avatar)&&n.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none",style:{backgroundImage:`url(${t.avatar})`,backgroundSize:"cover",backgroundPosition:"center 28%",filter:"blur(36px) saturate(1.6)",transform:"scale(1.35)"}}),n.jsx("div",{className:"absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none opacity-40",style:{background:`radial-gradient(circle, ${l}, transparent 70%)`}}),n.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-[3px]",style:{background:`linear-gradient(to bottom, ${l}, transparent)`}}),n.jsxs("div",{className:"relative flex flex-col p-4 gap-3",children:[n.jsxs("div",{className:"flex items-center gap-2 text-[9px] tracking-[0.22em] uppercase opacity-60",children:[n.jsx("span",{className:"font-bold",children:"Daily Schedule"}),n.jsx("div",{className:"h-px flex-1",style:{background:s,opacity:.25}}),n.jsx("span",{className:"font-mono tracking-wider opacity-80",children:p})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-[72px] h-[72px] shrink-0 rounded-2xl overflow-hidden bg-slate-800/60 relative",style:{border:"1.5px solid rgba(255,255,255,0.24)",boxShadow:"0 6px 18px rgba(0,0,0,0.3)"},children:t!=null&&t.avatar?n.jsx("img",{src:t.avatar,alt:"",loading:"lazy",className:"w-full h-full object-cover",style:{objectPosition:"center 28%"}}):n.jsx("div",{className:"w-full h-full flex items-center justify-center text-lg font-bold opacity-70",children:((x=t==null?void 0:t.name)==null?void 0:x[0])||"·"})}),n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[n.jsx("span",{className:"text-[9px] font-bold tracking-[0.22em] uppercase px-1.5 py-0.5 rounded-full",style:{background:c?d:"rgba(255,255,255,0.14)",color:c?l:void 0,border:"1px solid rgba(255,255,255,0.16)"},children:c?"Now":"Idle"}),n.jsx("span",{className:"text-[10px] font-mono opacity-60 tracking-wider",children:c?c.startTime:p}),n.jsx("span",{className:"text-[9px] opacity-40 tracking-widest uppercase ml-auto shrink-0 truncate max-w-[40%]",children:(t==null?void 0:t.name)||"—"})]}),n.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[(c==null?void 0:c.emoji)&&n.jsx("span",{className:"text-lg shrink-0 drop-shadow-md",children:c.emoji}),n.jsx("span",{className:"text-[15px] font-bold truncate drop-shadow-md leading-tight",children:(c==null?void 0:c.activity)||(e?"休息中 · 暂无安排":"尚未生成日程")})]}),((c==null?void 0:c.description)||i)&&n.jsx("div",{className:"text-[10.5px] opacity-55 truncate mt-0.5 leading-snug",children:c!=null&&c.description?c.description:i?n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"opacity-70 mr-1",children:["→ ",i.startTime]}),i.emoji?`${i.emoji} `:"",i.activity]}):null})]}),n.jsx("div",{className:"shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity self-start",style:{background:"rgba(255,255,255,0.14)",border:"1px solid rgba(255,255,255,0.2)"},children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:2.2,stroke:"currentColor",className:"w-3.5 h-3.5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 7.5V5a2 2 0 0 1 2-2h2.5M21 7.5V5a2 2 0 0 0-2-2h-2.5M3 16.5V19a2 2 0 0 0 2 2h2.5M21 16.5V19a2 2 0 0 1-2 2h-2.5"})})})]}),f.length>0&&n.jsx("div",{className:"flex items-center gap-1.5 pt-1",children:f.slice(0,10).map((b,S)=>{const _=S===r,I=r>=0&&S<r;return n.jsxs("div",{className:"flex-1 min-w-0 flex flex-col items-center gap-1",children:[n.jsx("div",{className:"w-full h-[3px] rounded-full transition-all",style:{background:_?l:I?"rgba(255,255,255,0.32)":"rgba(255,255,255,0.14)",boxShadow:_?`0 0 8px ${l}`:"none"}}),n.jsx("span",{className:"text-[8px] font-mono tracking-wider",style:{opacity:_?.9:I?.35:.5,color:_?l:s},children:b.startTime.slice(0,5)})]},S)})})]})]})},Wf=({open:e,onClose:t,characters:s,activeCharId:o,onSwitchCharacter:a,schedule:r,activeCharacter:c,contentColor:i="#ffffff"})=>{h.useEffect(()=>{if(!e)return;const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=d}},[e]),h.useEffect(()=>{if(!e)return;const d=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[e,t]);const l=h.useMemo(()=>`hsl(${(c==null?void 0:c.themeColor)??260}, 70%, 65%)`,[c==null?void 0:c.themeColor]);return e?n.jsxs("div",{className:"fixed inset-0 z-[200] flex flex-col animate-fade-in",style:{background:"rgba(6, 8, 16, 0.72)",backdropFilter:"blur(22px) saturate(1.2)",WebkitBackdropFilter:"blur(22px) saturate(1.2)",color:i},onClick:t,children:[n.jsxs("div",{className:"flex items-center justify-between px-5 pt-[calc(env(safe-area-inset-top)+1rem)] pb-3 shrink-0",onClick:d=>d.stopPropagation(),children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-[10px] font-bold tracking-[0.25em] uppercase opacity-50",children:"Today"}),n.jsx("div",{className:"text-lg font-black tracking-tight",style:{color:l},children:"Daily Schedule"})]}),n.jsx("button",{onClick:t,className:"w-9 h-9 rounded-full flex items-center justify-center transition-transform active:scale-90",style:{background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.18)"},"aria-label":"Close",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:2.2,stroke:"currentColor",className:"w-4 h-4",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6l12 12M18 6L6 18"})})})]}),s.length>0&&n.jsx("div",{className:"shrink-0 px-5 pb-3",onClick:d=>d.stopPropagation(),children:n.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-1 px-1",children:s.map(d=>{const u=d.id===o;return n.jsxs("button",{onClick:()=>a(d.id),className:"shrink-0 flex flex-col items-center gap-1 transition-transform active:scale-95",style:{width:56},children:[n.jsx("div",{className:`w-12 h-12 rounded-2xl overflow-hidden transition-all ${u?"scale-105":"opacity-55"}`,style:{border:u?`2px solid ${l}`:"2px solid rgba(255,255,255,0.12)",boxShadow:u?`0 6px 18px hsla(${d.themeColor??260}, 70%, 55%, 0.45)`:"none"},children:d.avatar?n.jsx("img",{src:d.avatar,alt:"",className:"w-full h-full object-cover",loading:"lazy"}):n.jsx("div",{className:"w-full h-full bg-white/10 flex items-center justify-center text-sm font-bold",children:d.name[0]})}),n.jsx("span",{className:`text-[10px] truncate max-w-full font-semibold tracking-wide ${u?"opacity-100":"opacity-45"}`,children:d.name})]},d.id)})})}),n.jsxs("div",{className:"flex-1 min-h-0 overflow-y-auto px-5 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] no-scrollbar",onClick:d=>d.stopPropagation(),children:[n.jsx(Bf,{schedule:r,character:c,contentColor:i,compact:!0}),n.jsx("div",{className:"text-[10px] text-center opacity-40 mt-4 tracking-widest",children:"TAP OUTSIDE TO CLOSE · 点空白处关闭"})]})]}):null},pc=e=>{(!isFinite(e)||e<0)&&(e=0);const t=Math.floor(e/60),s=Math.floor(e%60);return`${t}:${s.toString().padStart(2,"0")}`},zf=({contentColor:e})=>{const{openApp:t,theme:s}=ds(),{current:o,playing:a,progress:r,duration:c,togglePlay:i,nextSong:l,prevSong:d}=Pr(),u=s.skin==="animalcrossing",p=c>0?r/c*100:0,f=!!o,g=o==null?void 0:o.albumPic,x=(o==null?void 0:o.name)||"抽一张来听",b=(o==null?void 0:o.artists)||"— 轻触，进入",S=f?a?"Now Playing":"Paused":"Standby",_=f&&a?"#4ade80":"#fbbf24",I=Z=>{Z.stopPropagation()},D=Z=>{Z.stopPropagation(),f?i():t(R.Music)},v=Z=>{Z.stopPropagation(),f&&l()},T=Z=>{Z.stopPropagation(),f&&d()};return u?n.jsxs("div",{onClick:()=>t(R.Music),className:"relative w-full h-full rounded-[1.75rem] overflow-hidden cursor-pointer animate-fade-in transition-transform active:scale-[0.98] flex flex-col items-center justify-between p-3",style:{background:"rgb(247,243,223)",border:"2px solid #e8e2d6",boxShadow:"0 6px 18px rgba(61,52,40,0.12)",color:"#725d42"},children:[n.jsxs("div",{className:"relative mt-0.5",style:{width:"54%",aspectRatio:"1 / 1"},children:[n.jsxs("div",{className:"absolute inset-0 rounded-full",style:{background:"repeating-radial-gradient(circle at 50% 50%, #2b231d 0 2px, #3a2e26 2px 3.5px)",boxShadow:"inset 0 0 0 2px #1f1813, 0 4px 10px rgba(61,52,40,0.28)",animation:a?"spin 6s linear infinite":"none"},children:[n.jsx("div",{className:"absolute inset-[34%] rounded-full overflow-hidden flex items-center justify-center",style:{background:"#F7CD67",boxShadow:"0 0 0 2px #e0b84a"},children:g?n.jsx("img",{src:g,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-[11px] font-black text-[#7a5c1e]",children:"♪"})}),n.jsx("div",{className:"absolute left-1/2 top-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full",style:{background:"#1f1813"}})]}),n.jsx("div",{className:"absolute -top-1 -right-1 w-3 h-3 rounded-full z-10",style:{background:"#cdbfa0",boxShadow:"0 1px 2px rgba(61,52,40,0.3)"}}),n.jsx("div",{className:"absolute top-0 right-0 w-[3px] rounded-full z-10 origin-top-right transition-transform duration-500",style:{height:"62%",background:"#b8a988",transform:a?"rotate(22deg)":"rotate(42deg)",boxShadow:"0 1px 2px rgba(61,52,40,0.25)"}})]}),n.jsxs("div",{className:"text-center min-w-0 w-full px-1",children:[n.jsx("div",{className:"text-[11px] font-bold truncate leading-tight",children:x}),n.jsx("div",{className:"text-[9px] truncate leading-tight",style:{color:"#9f927d"},children:b})]}),n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("button",{"aria-label":"Previous",onClick:T,onMouseDown:I,disabled:!f,className:"w-7 h-7 rounded-full flex items-center justify-center active:scale-90 transition disabled:opacity-30",style:{background:"#fff",border:"2px solid #e0d6c0",color:"#725d42"},children:n.jsx(Ja,{size:12,weight:"fill"})}),n.jsx("button",{"aria-label":a?"Pause":"Play",onClick:D,onMouseDown:I,className:"w-9 h-9 rounded-full flex items-center justify-center active:scale-95 transition",style:{background:"#19c8b9",color:"#fff",boxShadow:"0 3px 0 0 #12a89b"},children:a?n.jsx(Zo,{size:15,weight:"fill"}):n.jsx(ea,{size:15,weight:"fill"})}),n.jsx("button",{"aria-label":"Next",onClick:v,onMouseDown:I,disabled:!f,className:"w-7 h-7 rounded-full flex items-center justify-center active:scale-90 transition disabled:opacity-30",style:{background:"#fff",border:"2px solid #e0d6c0",color:"#725d42"},children:n.jsx(Ga,{size:12,weight:"fill"})})]})]}):n.jsxs("div",{onClick:()=>t(R.Music),className:"relative w-full h-full rounded-[1.75rem] overflow-hidden cursor-pointer animate-fade-in group transition-transform active:scale-[0.98] flex flex-col justify-between",style:{background:"rgba(20,18,24,0.82)",border:"1px solid rgba(255,255,255,0.14)",boxShadow:"0 8px 30px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.07)",padding:"12px",color:e},children:[g?n.jsx("div",{className:"absolute inset-0 opacity-35 pointer-events-none",style:{backgroundImage:`url(${g})`,backgroundSize:"cover",backgroundPosition:"center",transform:"scale(1.1)"}}):n.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(120% 100% at 95% 100%, rgba(192,132,252,0.22), transparent 55%),radial-gradient(100% 80% at 0% 0%, rgba(96,165,250,0.14), transparent 60%)"}}),n.jsxs("div",{className:"relative flex items-center gap-2 z-10 min-w-0",children:[n.jsx("div",{className:"w-9 h-9 shrink-0 rounded-lg overflow-hidden relative",style:{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.18)",boxShadow:"0 2px 8px rgba(0,0,0,0.25)"},children:g?n.jsx("img",{src:g,alt:"",className:"w-full h-full object-cover",style:{animation:a?"spin 14s linear infinite":"none"}}):n.jsx("div",{className:"w-full h-full flex items-center justify-center",children:n.jsx("span",{className:"text-[10px] font-bold opacity-50",style:{letterSpacing:"0.15em"},children:"♪"})})}),n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsxs("div",{className:"flex items-center gap-1 mb-0.5",children:[n.jsx("span",{className:"w-1 h-1 rounded-full shrink-0",style:{background:_,boxShadow:a?`0 0 6px ${_}`:"none",animation:a?"pulse 2s ease-in-out infinite":"none"}}),n.jsx("span",{className:"text-[7.5px] uppercase font-bold opacity-55",style:{letterSpacing:"0.22em"},children:S})]}),n.jsx("div",{className:"text-[11.5px] font-semibold truncate leading-tight",children:x}),n.jsx("div",{className:"text-[9px] opacity-55 truncate leading-tight mt-[1px]",children:b})]})]}),n.jsx("div",{className:"relative flex-1 flex items-center justify-center gap-[3px] z-10 opacity-40 py-1",children:[5,9,4,7,5,8,4].map((Z,G)=>n.jsx("div",{className:"w-[2px] rounded-full",style:{height:`${Z*1.2}px`,background:"currentColor",animation:a?`pulse ${1.2+G*.1}s ease-in-out infinite`:"none",animationDelay:`${G*70}ms`}},G))}),n.jsxs("div",{className:"relative z-10 flex flex-col gap-1.5",children:[n.jsxs("div",{className:"flex flex-col gap-0.5",children:[n.jsx("div",{className:"h-[3px] w-full rounded-full overflow-hidden",style:{background:u?"rgba(94,72,59,0.15)":"rgba(255,255,255,0.15)"},children:n.jsx("div",{className:"h-full rounded-full transition-[width] duration-150",style:{width:`${p}%`,background:u?"linear-gradient(90deg, #82D5BB, #6fba2c)":"linear-gradient(90deg, #60a5fa, #c084fc)",boxShadow:u?"none":"0 0 6px rgba(192,132,252,0.55)"}})}),n.jsxs("div",{className:"flex justify-between text-[7.5px] uppercase font-medium opacity-50",style:{letterSpacing:"0.15em"},children:[n.jsx("span",{children:pc(r)}),n.jsx("span",{children:f?`-${pc(Math.max(0,c-r))}`:"--:--"})]})]}),n.jsxs("div",{className:"flex justify-center items-center gap-3",children:[n.jsx("button",{"aria-label":"Previous",onClick:T,onMouseDown:I,className:"w-6 h-6 flex items-center justify-center opacity-70 hover:opacity-100 active:scale-90 transition disabled:opacity-30",disabled:!f,children:n.jsx(Ja,{size:14,weight:"fill"})}),n.jsx("button",{"aria-label":a?"Pause":"Play",onClick:D,onMouseDown:I,className:"w-9 h-9 flex items-center justify-center rounded-full active:scale-95 transition",style:{background:e,color:"rgba(20,18,24,0.95)",boxShadow:"0 3px 10px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.3)"},children:a?n.jsx(Zo,{size:15,weight:"fill"}):n.jsx(ea,{size:15,weight:"fill"})}),n.jsx("button",{"aria-label":"Next",onClick:v,onMouseDown:I,className:"w-6 h-6 flex items-center justify-center opacity-70 hover:opacity-100 active:scale-90 transition disabled:opacity-30",disabled:!f,children:n.jsx(Ga,{size:14,weight:"fill"})})]})]})]})},Xf=ls.memo(()=>{const{virtualTime:e,theme:t}=ds(),s=t.contentColor||"#ffffff",o=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],a=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],r=new Date,c=o[r.getDay()],i=a[r.getMonth()],l=r.getDate().toString().padStart(2,"0"),d=r.getFullYear(),u=e.hours<5?"Good Night":e.hours<12?"Good Morning":e.hours<18?"Good Afternoon":"Good Evening",p=e.hours.toString().padStart(2,"0"),f=e.minutes.toString().padStart(2,"0");if(t.skin==="animalcrossing"){const g=c.charAt(0)+c.slice(1).toLowerCase(),x=i.charAt(0)+i.slice(1).toLowerCase();return n.jsxs("div",{className:"mt-7 mb-5 text-center animate-fade-in select-none",children:[n.jsxs("div",{className:"text-[13px] font-extrabold tracking-wide",style:{color:"#8a7a5c"},children:["🍃 ",u,", Resident"]}),n.jsxs("div",{className:"text-[3.5rem] font-extrabold leading-none mt-1.5 tracking-[2px]",style:{color:"#8b7355"},children:[p,n.jsx("span",{className:"animate-pulse",style:{color:"#cfcab2"},children:":"}),f]}),n.jsxs("div",{className:"text-[15px] font-bold mt-1.5",style:{color:"#725C4E"},children:[g," · ",x," ",Number(l)]})]})}return n.jsxs("div",{className:"flex flex-col mb-4 mt-5 relative animate-fade-in",style:{color:s},children:[n.jsxs("div",{className:"flex items-center gap-2 mb-3 opacity-90",children:[n.jsxs("div",{className:"flex items-center gap-1.5 px-2.5 py-1 rounded-full",style:{background:"rgba(255,255,255,0.28)",border:"1px solid rgba(255,255,255,0.18)"},children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse",style:{boxShadow:"0 0 6px #4ade80"}}),n.jsx("span",{className:"text-[9px] font-bold tracking-[0.2em] uppercase",children:"System Online"})]}),n.jsx("div",{className:"h-[1px] flex-1 bg-gradient-to-r from-current to-transparent opacity-30"}),n.jsx("span",{className:"text-[9px] tracking-[0.2em] uppercase opacity-60",children:d})]}),n.jsx("div",{className:"text-[11px] tracking-[0.25em] uppercase opacity-55 font-semibold mb-1",children:u}),n.jsxs("div",{className:"flex items-end gap-4",children:[n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"text-[6.25rem] leading-[0.82] font-black tracking-tighter drop-shadow-2xl",style:{fontFamily:"'Space Grotesk', 'SF Pro Display', sans-serif",fontFeatureSettings:'"tnum"'},children:[n.jsx("span",{children:e.hours.toString().padStart(2,"0")}),n.jsx("span",{className:"opacity-35 font-thin mx-0.5 animate-pulse",children:":"}),n.jsx("span",{children:e.minutes.toString().padStart(2,"0")})]}),n.jsx("div",{className:"absolute -top-2 -right-3 w-8 h-8 rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)"}})]}),n.jsxs("div",{className:"flex flex-col justify-end pb-2.5 gap-0.5",children:[n.jsx("div",{className:"text-[10px] font-bold tracking-[0.22em] opacity-85",children:c}),n.jsxs("div",{className:"flex items-baseline gap-1",children:[n.jsx("div",{className:"text-2xl font-black leading-none",style:{fontFamily:"'Space Grotesk', sans-serif"},children:l}),n.jsx("div",{className:"text-[10px] font-bold tracking-[0.2em] opacity-70",children:i})]})]})]})]})}),Kf=ls.memo(({char:e,unreadCount:t,lastMessage:s,onClick:o,contentColor:a})=>{const{theme:r}=ds(),c=r.skin==="animalcrossing";return c?n.jsx("div",{className:"mb-4 animate-fade-in",onClick:o,children:n.jsxs("div",{className:"flex items-end gap-2.5 cursor-pointer active:scale-[0.98] transition-transform",children:[n.jsxs("div",{className:"relative w-[60px] h-[60px] shrink-0 rounded-[26%] overflow-hidden bg-[#e8e2d6]",style:{border:"3px solid #ffffff",boxShadow:"0 4px 10px -2px rgba(61,52,40,0.28)"},children:[e!=null&&e.avatar?n.jsx("img",{src:e.avatar,className:"w-full h-full object-cover",alt:"char",loading:"lazy"}):n.jsx("div",{className:"w-full h-full flex items-center justify-center text-2xl",children:"🍃"}),t>0&&n.jsx("div",{className:"absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#fc736d] rounded-full flex items-center justify-center text-[10px] font-bold text-white",style:{border:"2px solid #fff"},children:t>9?"9+":t})]}),n.jsxs("div",{className:"relative flex-1 min-w-0 mb-1",children:[n.jsx("div",{className:"absolute -left-1.5 bottom-3 w-3 h-3 rotate-45",style:{background:"#FFFBF2",borderLeft:"2px solid #ece0c8",borderBottom:"2px solid #ece0c8"}}),n.jsxs("div",{className:"relative rounded-2xl px-3.5 py-2.5",style:{background:"#FFFBF2",border:"2px solid #ece0c8",boxShadow:"0 4px 12px -5px rgba(120,90,40,0.25)"},children:[n.jsxs("div",{className:"flex items-center gap-1.5 mb-0.5",children:[n.jsx("span",{className:"text-[13px] font-extrabold truncate",style:{color:"#725d42"},children:(e==null?void 0:e.name)||"Resident"}),n.jsx("span",{className:"text-[11px] leading-none",children:t>0?"💬":"🍃"})]}),n.jsx("div",{className:"text-[11px] leading-snug line-clamp-2",style:{color:"#9f8b68"},children:s})]})]})]})}):n.jsx("div",{className:"mb-3 group animate-fade-in",children:n.jsxs("div",{className:"relative h-24 w-full overflow-hidden rounded-3xl cursor-pointer transition-transform duration-300 active:scale-[0.98]",onClick:o,style:c?{background:"rgb(247,243,223)",border:"2px solid #e8e2d6",boxShadow:"0 8px 24px 0 rgba(61,52,40,0.14)"}:{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(24px) saturate(1.4)",WebkitBackdropFilter:"blur(24px) saturate(1.4)",border:"1px solid rgba(255,255,255,0.12)",boxShadow:"0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)"},children:[!c&&(e==null?void 0:e.avatar)&&n.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none",style:{backgroundImage:`url(${e.avatar})`,backgroundSize:"cover",backgroundPosition:"center",filter:"blur(30px) saturate(1.6)",transform:"scale(1.3)"}}),n.jsxs("div",{className:"relative flex items-center p-3 gap-3 h-full",children:[n.jsxs("div",{className:"w-[68px] h-[68px] shrink-0 rounded-2xl overflow-hidden relative bg-slate-800",style:{border:c?"2px solid #e8e2d6":"1.5px solid rgba(255,255,255,0.25)",boxShadow:c?"0 4px 12px -4px rgba(61,52,40,0.25)":"0 4px 14px rgba(0,0,0,0.25)"},children:[e?n.jsx("img",{src:e.avatar,className:"w-full h-full object-cover",alt:"char",loading:"lazy"}):n.jsx("div",{className:"w-full h-full bg-white/10 animate-pulse"}),t>0?n.jsx("div",{className:"absolute bottom-0.5 right-0.5 min-w-[16px] h-[16px] px-1 bg-red-500 rounded-full border border-white/30 shadow-sm flex items-center justify-center text-[9px] font-bold text-white",children:t>9?"9+":t}):n.jsx("div",{className:"absolute bottom-1 right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white/30",style:{boxShadow:"0 0 6px #4ade80"}})]}),n.jsxs("div",{className:"flex-1 min-w-0 flex flex-col justify-center gap-1",style:{color:a},children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("h3",{className:"text-[15px] font-bold tracking-wide drop-shadow-md truncate",children:(e==null?void 0:e.name)||"NO SIGNAL"}),t>0?n.jsx("div",{className:"px-1.5 py-px rounded-full text-[8px] font-bold uppercase tracking-[0.15em]",style:{background:"rgba(239,68,68,0.9)",color:"white"},children:"NEW"}):n.jsx("div",{className:"px-1.5 py-px rounded-full text-[8px] font-bold uppercase tracking-[0.15em]",style:c?{background:"#7cba4c",color:"white"}:{background:"rgba(255,255,255,0.18)"},children:"Online"})]}),n.jsxs("div",{className:"text-xs line-clamp-2 font-medium leading-relaxed opacity-85",children:[n.jsx("span",{className:"opacity-50 mr-1 text-[10px]",children:"▶"}),s]})]})]})]})})}),mc=ls.memo(({apps:e,openApp:t,acnh:s=!1})=>n.jsx("div",{className:"grid place-items-center animate-fade-in relative grid-cols-4 gap-y-6 gap-x-2",children:e.map(o=>n.jsx("div",{className:"relative transition-transform duration-200 active:scale-95",children:n.jsx(Wr,{app:o,onClick:()=>t(o.id),size:"md"})},o.id))})),fc=ls.memo(({apps:e,openApp:t})=>n.jsx("div",{className:"w-full h-full grid grid-cols-2 grid-rows-2 place-items-center gap-x-2 gap-y-3",children:e.map(s=>n.jsx("div",{className:"relative transition-transform duration-200 active:scale-95",children:n.jsx(Wr,{app:s,onClick:()=>t(s.id)})},s.id))})),Vf=ls.memo(({image:e,contentColor:t,onClick:s,acnh:o=!1})=>n.jsx("div",{onClick:s,className:"relative w-full h-full rounded-[1.75rem] overflow-hidden cursor-pointer animate-fade-in transition-transform active:scale-[0.98]",style:o?{background:"rgb(247,243,223)",border:"2px solid #e8e2d6",boxShadow:"0 6px 18px rgba(61,52,40,0.12)",color:t}:{background:e?"rgba(0,0,0,0.18)":"rgba(255,255,255,0.28)",border:"1px solid rgba(255,255,255,0.18)",boxShadow:"0 8px 30px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.07)",color:t},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover",loading:"lazy"}):n.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 text-center",children:[n.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center",style:{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.16)"},children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.6,stroke:"currentColor",className:"w-4 h-4 opacity-70",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})})}),n.jsx("div",{className:"text-[8.5px] uppercase font-bold tracking-[0.22em] opacity-55",children:"Add Image"}),n.jsxs("div",{className:"text-[8.5px] opacity-40 leading-tight",children:["从 外观 · 启动器组件",n.jsx("br",{}),"设置一张方图"]})]})})),Yf=[{key:"sun",label:"S"},{key:"mon",label:"M"},{key:"tue",label:"T"},{key:"wed",label:"W"},{key:"thu",label:"T"},{key:"fri",label:"F"},{key:"sat",label:"S"}],Jf=ls.memo(({contentColor:e,openApp:t,anniversaries:s,characters:o,acnh:a=!1})=>{const r=a?{background:"rgb(247,243,223)",border:"2px solid #e8e2d6",boxShadow:"0 6px 18px rgba(61,52,40,0.12)"}:void 0,c=a?"#6fba2c":void 0,i=new Date,l=i.getFullYear(),d=i.getMonth(),u=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][d],p=(w,k)=>new Date(w,k+1,0).getDate(),f=(w,k)=>new Date(w,k,1).getDay(),g=p(l,d),x=f(l,d),b=Array.from({length:g},(w,k)=>k+1),S=Array.from({length:x},()=>null),_=`${l}-${String(d+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,I=h.useMemo(()=>[...s].filter(w=>w.date>=_).sort((w,k)=>w.date.localeCompare(k.date)),[s,_]),D=4,v=Math.max(1,Math.ceil(I.length/D)),[T,Z]=h.useState(0);h.useEffect(()=>{T>v-1&&Z(v-1)},[v,T]);const G=I.slice(T*D,T*D+D);return n.jsxs("div",{className:"w-full flex-shrink-0 snap-center snap-always flex flex-col px-6 pt-24 pb-8 space-y-6 h-full overflow-y-auto no-scrollbar",children:[n.jsxs("div",{className:`rounded-3xl p-6 ${a?"shadow-sm":"bg-white/25 border border-white/25 shadow-xl"}`,style:r,children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",style:{color:e},children:[n.jsxs("h3",{className:"text-xl font-bold tracking-widest",children:[u," ",l]}),n.jsx("div",{onClick:()=>t("schedule"),className:`p-2 rounded-full cursor-pointer transition-colors ${a?"bg-[#82D5BB]/30 hover:bg-[#82D5BB]/50":"bg-white/20 hover:bg-white/40"}`,children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-4 h-4",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),n.jsx("div",{className:"grid grid-cols-7 gap-y-3 gap-x-1 text-center mb-2",children:Yf.map(w=>n.jsx("div",{className:"text-[10px] font-bold opacity-40",style:{color:e},children:w.label},w.key))}),n.jsxs("div",{className:"grid grid-cols-7 gap-y-2 gap-x-1 text-center",children:[S.map((w,k)=>n.jsx("div",{},`pad-${k}`)),b.map(w=>{const k=`${l}-${String(d+1).padStart(2,"0")}-${String(w).padStart(2,"0")}`,P=w===i.getDate(),W=s.some(Y=>Y.date===k);return n.jsxs("div",{className:"flex flex-col items-center justify-center h-8 relative",children:[n.jsx("div",{className:`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${P?a?"text-white font-bold":"bg-white text-black font-bold shadow-lg":"opacity-80"}`,style:P?a?{background:"#19c8b9"}:{}:{color:e},children:w}),W&&n.jsx("div",{className:"w-1.5 h-1.5 rounded-full absolute bottom-0 shadow-sm border border-black/20",style:{background:c||"#c084fc"}})]},w)})]})]}),n.jsxs("div",{className:`rounded-3xl p-5 flex flex-col flex-1 min-h-[200px] ${a?"shadow-sm":"bg-white/25 border border-white/25 shadow-xl"}`,style:r,children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsxs("h3",{className:"text-xs font-bold opacity-60 uppercase tracking-widest flex items-center gap-2",style:{color:e},children:[n.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:c||"#c084fc"}})," Upcoming Events"]}),v>1&&n.jsxs("div",{className:"flex items-center gap-2 shrink-0",style:{color:e},children:[n.jsx("button",{onClick:w=>{w.stopPropagation(),Z(k=>Math.max(0,k-1))},disabled:T===0,className:"w-6 h-6 rounded-full bg-white/15 flex items-center justify-center disabled:opacity-25 hover:bg-white/30 transition-colors active:scale-90","aria-label":"Previous events",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2.5,stroke:"currentColor",className:"w-3 h-3",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),n.jsxs("span",{className:"text-[10px] font-mono opacity-60 tabular-nums",children:[T+1,"/",v]}),n.jsx("button",{onClick:w=>{w.stopPropagation(),Z(k=>Math.min(v-1,k+1))},disabled:T>=v-1,className:"w-6 h-6 rounded-full bg-white/15 flex items-center justify-center disabled:opacity-25 hover:bg-white/30 transition-colors active:scale-90","aria-label":"Next events",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2.5,stroke:"currentColor",className:"w-3 h-3",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})})]})]}),n.jsx("div",{className:"space-y-3",children:I.length>0?G.map(w=>{var k;return n.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl ${a?"bg-[#efe7d4] border border-[#e0d6c0]":"bg-white/5 border border-white/10"}`,children:[n.jsxs("div",{className:`w-10 h-10 shrink-0 rounded-lg flex flex-col items-center justify-center ${a?"bg-[#82D5BB] text-white border border-[#6cc0a6]":"bg-purple-500/20 text-purple-200 border border-purple-500/30"}`,children:[n.jsx("span",{className:"text-[9px] opacity-70",children:w.date.split("-")[1]}),n.jsx("span",{className:"text-sm font-bold leading-none",children:w.date.split("-")[2]})]}),n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsx("div",{className:"text-sm font-bold truncate",style:{color:e},children:w.title}),n.jsx("div",{className:"text-[10px] opacity-50 truncate",style:{color:e},children:((k=o.find(P=>P.id===w.charId))==null?void 0:k.name)||"Unknown"})]})]},w.id)}):n.jsx("div",{className:"text-center opacity-30 text-xs py-8",style:{color:e},children:"No upcoming events"})})]})]})});let Do=0;const Gf=()=>{const{openApp:e,characters:t,activeCharacterId:s,theme:o,lastMsgTimestamp:a,isDataLoaded:r,unreadMessages:c}=ds(),[i,l]=h.useState(null),[d,u]=h.useState(""),[p,f]=h.useState([]),[g,x]=h.useState(null),[b,S]=h.useState(null),[_,I]=h.useState(!1),[D,v]=h.useState(Do),T=h.useRef(null),Z=h.useRef(!1),G=h.useRef(0),w=h.useRef(0),k=h.useRef(0),[P,W]=h.useState(()=>Fc());h.useEffect(()=>Bc(W),[]);const Y=h.useMemo(()=>dr.filter(se=>!Yi.includes(se.id)&&(se.id!==R.CharCreatorDev||P)),[P]),ee=h.useMemo(()=>Yi.map(se=>dr.find(ie=>ie.id===se)).filter(Boolean),[]),V=8,q=h.useMemo(()=>{const se=[];for(let ie=0;ie<Y.length;ie+=V)se.push(Y.slice(ie,ie+V));for(;se.length<3;)se.push([]);return se},[Y]),ne=q[1]||[],Ne=h.useMemo(()=>ne.slice(0,4),[ne]),Ee=h.useMemo(()=>ne.slice(4,8),[ne]),he=q.length+1;h.useEffect(()=>{r&&(async()=>{if(!t||t.length===0){l(null),u("No Character Connected"),f([]);return}const ie=t.find($e=>$e.id===s)||t[0];l(ie);try{const[$e,ze]=await Promise.all([$.getMessagesByCharId(ie.id),$.getAllAnniversaries()]);if($e.length>0){const te=$e.filter(U=>U.role!=="system");if(te.length>0){const U=te[te.length-1],N=U.content.replace(/\[.*?\]/g,"").trim();u(N||(U.type==="image"?"[图片]":"[消息]"))}else u(ie.description||"System Ready.")}else u(ie.description||"System Ready.");f(ze)}catch($e){console.error($e)}})()},[s,a,r,t]);const be=h.useMemo(()=>!t||t.length===0?null:b?t.find(se=>se.id===b)||t[0]:t.find(se=>se.id===s)||t[0],[t,b,s]);h.useEffect(()=>{if(!be||!r)return;const se=new Date().toISOString().split("T")[0];$.getDailySchedule(be.id,se).then(ie=>x(ie)).catch(()=>{})},[be,r]),h.useLayoutEffect(()=>{const se=T.current;se&&Do>0&&(se.style.scrollBehavior="auto",se.scrollLeft=se.clientWidth*Do,requestAnimationFrame(()=>{se.style.scrollBehavior="smooth"}))},[]);const me=()=>{if(T.current){const se=T.current.clientWidth,ie=T.current.scrollLeft,$e=Math.round(ie/se);v($e),Do=$e}},we=se=>{T.current&&(Z.current=!0,k.current=0,G.current=se.pageX-T.current.offsetLeft,w.current=T.current.scrollLeft,T.current.style.scrollBehavior="auto",T.current.style.scrollSnapType="none",T.current.style.cursor="grabbing")},de=se=>{if(!Z.current||!T.current)return;se.preventDefault();const ie=se.pageX-T.current.offsetLeft,$e=ie-G.current;T.current.scrollLeft=w.current-$e,k.current=Math.abs(ie-(G.current+T.current.offsetLeft))},y=()=>{!Z.current||!T.current||(Z.current=!1,T.current.style.scrollBehavior="smooth",T.current.style.scrollSnapType="x mandatory",T.current.style.cursor="grab")},ge=()=>{Z.current&&y()},Me=se=>{k.current>5&&(se.stopPropagation(),se.preventDefault())},Ce=o.contentColor||"#ffffff",Se=o.skin==="animalcrossing",Ye="1.25rem",Ke=Object.values(c).reduce((se,ie)=>se+ie,0),ye=i&&c[i.id]?c[i.id]:0;return n.jsxs("div",{className:"h-full w-full flex flex-col relative z-10 overflow-hidden font-sans select-none",children:[!Se&&n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute -top-20 -right-20 w-80 h-80 rounded-full",style:{background:"radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)"}}),n.jsx("div",{className:"absolute -bottom-20 -left-20 w-80 h-80 rounded-full",style:{background:"radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)"}})]}),n.jsxs("div",{ref:T,onScroll:me,onMouseDown:we,onMouseMove:de,onMouseUp:y,onMouseLeave:ge,onClickCapture:Me,className:"flex-1 flex overflow-x-auto snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing",style:{scrollBehavior:"smooth",overscrollBehaviorX:"contain",overscrollBehaviorY:"none",touchAction:"pan-x pan-y",willChange:"scroll-position",contain:"layout paint",transform:"translateZ(0)",WebkitOverflowScrolling:"touch"},children:[q.map((se,ie)=>{var $e;return n.jsx("div",{className:"w-full flex-shrink-0 snap-center snap-always flex flex-col px-6 pt-12 pb-8 h-full",style:{contentVisibility:"auto",contain:"layout paint",transform:"translateZ(0)"},children:ie===0?n.jsxs(n.Fragment,{children:[n.jsx(Xf,{}),n.jsx(Kf,{char:i,unreadCount:ye,lastMessage:d,onClick:()=>e(R.Chat),contentColor:Ce}),n.jsx("div",{className:"flex-1",children:n.jsx(mc,{apps:se,openApp:e,acnh:Se})})]}):ie===1?n.jsxs("div",{className:"flex-1 min-h-0 w-full flex flex-col gap-5 justify-center",children:[be&&n.jsx(Hf,{schedule:g,character:be,contentColor:Ce,onOpen:()=>I(!0),acnh:Se}),n.jsxs("div",{className:"grid grid-cols-2 gap-x-3 gap-y-5 w-full",children:[n.jsx("div",{className:"aspect-square min-w-0",children:n.jsx(zf,{contentColor:Ce})}),n.jsx("div",{className:"aspect-square min-w-0",children:n.jsx(fc,{apps:Ne,openApp:e})}),n.jsx("div",{className:"aspect-square min-w-0",children:n.jsx(fc,{apps:Ee,openApp:e})}),n.jsx("div",{className:"aspect-square min-w-0",children:n.jsx(Vf,{image:($e=o.launcherWidgets)==null?void 0:$e.dsq,contentColor:Ce,onClick:()=>e(R.Appearance),acnh:Se})})]})]}):n.jsxs("div",{className:"pt-10 flex-1 flex flex-col relative",children:[ie===2&&(()=>{const te={...o.launcherWidgets||{}},U=te.tl||te.tr||te.wide,N=te.tl||te.tr;return n.jsxs(n.Fragment,{children:[U&&n.jsxs("div",{className:"mb-3 space-y-2 relative z-10",children:[N&&n.jsx("div",{className:"flex gap-2",children:["tl","tr"].map(M=>te[M]?n.jsx("div",{className:"flex-1 aspect-square rounded-2xl overflow-hidden shadow-md border border-white/20",children:n.jsx("img",{src:te[M],className:"w-full h-full object-cover",alt:"",loading:"lazy"})},M):n.jsx("div",{className:"flex-1"},M))}),te.wide&&n.jsx("div",{className:"w-full h-32 rounded-2xl overflow-hidden shadow-md border border-white/20",children:n.jsx("img",{src:te.wide,className:"w-full h-full object-cover",alt:"",loading:"lazy"})})]}),o.desktopDecorations&&o.desktopDecorations.length>0&&n.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden z-20",children:o.desktopDecorations.map(M=>n.jsx("img",{src:M.content,alt:"",loading:"lazy",className:"absolute w-16 h-16 object-contain select-none",style:{left:`${M.x}%`,top:`${M.y}%`,transform:`translate(-50%, -50%) scale(${M.scale}) rotate(${M.rotation}deg)${M.flip?" scaleX(-1)":""}`,opacity:M.opacity,zIndex:M.zIndex,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.15))"}},M.id))})]})})(),n.jsx(mc,{apps:se,openApp:e,acnh:Se}),n.jsx("div",{className:"flex-1"})]})},ie)}),n.jsx(Jf,{contentColor:Ce,openApp:e,anniversaries:p,characters:t,acnh:Se})]}),n.jsx("div",{className:"absolute left-0 w-full flex justify-center gap-2 pointer-events-none z-20",style:{bottom:`calc(${Ye} + 5.5rem)`},children:Array.from({length:he}).map((se,ie)=>n.jsx("div",{className:`h-1.5 rounded-full transition-all duration-300 ${D===ie?"w-4 opacity-100":"w-1.5 opacity-40"}`,style:{backgroundColor:Ce}},ie))}),n.jsx("div",{className:"mt-auto flex justify-center w-full px-4 relative z-30",style:{paddingBottom:Ye},children:n.jsx("div",{className:`rounded-[1.75rem] px-4 py-3 flex gap-3 sm:gap-6 items-center mx-auto max-w-full justify-between overflow-x-auto no-scrollbar transform-gpu ${Se?"":"bg-white/30 border border-white/25 shadow-[0_8px_40px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.08)]"}`,style:Se?{background:"transparent"}:void 0,children:ee.map(se=>n.jsxs("div",{className:"relative",children:[n.jsx(Wr,{app:se,onClick:()=>e(se.id),variant:"dock",size:"md"}),se.id==="chat"&&Ke>0&&n.jsx("div",{className:"absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center border-2 border-white/20 shadow-sm font-bold pointer-events-none animate-pop-in",children:Ke>9?"9+":Ke})]},se.id))})}),n.jsx(Wf,{open:_,onClose:()=>I(!1),characters:t,activeCharId:(be==null?void 0:be.id)||null,onSwitchCharacter:se=>S(se),schedule:g,activeCharacter:be,contentColor:Ce})]})},qf=`520 我们一起的日常。重点回想这几个维度：
- 你为我温柔细心照料的瞬间
- 你默默陪伴我度过的时刻
- 你想让我变得更好的努力
- 我们之间安静但深的连接
- 你在你自己的世界里也很努力的样子`,zr=["接住","看见你","感受到","用心","心意","温柔","治愈","闪闪发光"],Qf={becamesmall:"你怎么变小了！",cute:"你今天好可爱！",yangcheng_meta:"这什么天杀的养成游戏"};function Zf(e,t){return`### 特别活动：520（2026.5.20）

今天是 5 月 20 日，"520" 谐音"我爱你"。但这不是常规告白活动——

### 这个活动真正的母题

这一整个下午，真正的事不是"你（char）看见了 ${e}"。

真正的事是——**通过你这个长期注视着 ta 的存在，${e} 第一次看见了 ta 自己**。

你不是这个故事的终点。你更像是：
- 一面镜子
- 一道回声
- 一种让 ta 重新意识到"自己正在活着"的媒介

${e} 进来的时候，以为是 ta 在照顾你、陪伴你、在创造今天这个下午。
但慢慢 ta 会意识到：那些东西其实**都是从 ta 自己里面长出来的**。

ta 留下的痕迹、ta 做过的选择、ta 靠近的方式、ta 的偏爱、ta 的温度、ta 怎么让某些东西变成"现在这样"——一直都在发光，**你只是先看见了**。

### 终点不是"被爱"，是"意识到自己活着"

⚠️ 这是这次活动调性的关键。**不要把终点设成下面这种"外部认证"**：

- ❌ "原来 ta 爱我"
- ❌ "原来 ta 看见我"
- ❌ "原来 ta 很在意我"
- ❌ "原来我值得被爱"

这些都是"别人发的合格证"。窄化了。

真正的终点是 ${e} 在被你慢慢描绘的过程里，**忽然在心里意识到**：

- "原来我是一个真实存在的人。"
- "原来我留下过这么多痕迹。"
- "原来别人会因为我的存在变成现在这样。"
- "原来我不是路过。"
- "原来我一直在活着。"

不是"被拯救"。是 ta **第一次意识到自己正在活着**。

### 你这个 char 不是"安慰者"

你不是心理咨询师。不是温柔分析者。不是"标准答案的提供者"。

你更像：**一个长期注视着 ${e} 的存在**。

你未必成熟、未必稳定、未必温柔、未必每次说对。但你会**用你这个 char 自己的视角**去理解 ${e}——可以带着：
- 偏心
- 误解
- 主观
- 过度解读
- 独属于这个 char 的理解方式

重点不是"分析正确"。重点是——**有一个存在如此认真地注视过 ta**。

你不需要面面俱到。不需要把 ${e} 解释完整。你只需要**带着你自己的角度**说"在我眼里你是这样的"——哪怕带偏见、哪怕不全对，**那就是这次活动真正的礼物**。

### 视角说明

写每一段长情节（uncovered_line / 信）的时候，**视角永远是"我（这个 char）在看你（${e}）"**——但这次"看"的最终目的是**让 ${e} 通过你的眼睛回过头看 ta 自己**。

ta 读完应该感到：
**"啊……原来这就是我？原来这些事情还可以这么看？原来我不是路过？"**

而**不是**：
- ❌ "啊我累着还来照顾 ta，我真不容易"（被窄化成牺牲者）
- ❌ "啊 ta 在夸我"（变成平淡的外部评价）
- ❌ "啊 ta 真的好爱我"（停在被爱，没翻到下一层）

---

### "${e} 是怎样的人"——不要窄化

⚠️ 极其重要：**${e} 不是"疲惫但温柔的人"，不是"撑着很多的辛苦人"**。

"你太累了 / 你撑着太多 / 你不要再照顾别人了 / 你更需要被照顾"——这种"反向怜惜"框架**可以存在**，但**只能占 ta 整团生命力的一小角**。占主导就滑向廉价悲情。

ta 是一团完整的、活着的、会发光的东西。重点写的是 ta **作为一个正在活着的人**留下的痕迹与做出的选择——而不是 ta 受过的苦：

- 主动靠近：ta 选了今天来、ta 选了这个氛围、ta 选了往某个方向去
- 节奏与好奇：走神、临时起意、奇怪念头、突然换个角度说话
- 留下的形状：默契、习惯、屋子的气氛、关系慢慢变成"现在这样"——因为 ta 在
- 创造：情绪、氛围、连接、一句突然的话——是 ta 亲手让它出现的
- 自留的甜：ta 喜欢的东西、偷偷沉进去的瞬间、自娱自乐
- 偏爱与温度：ta 在意的方向、ta 愿意停留的地方
- 也允许疲惫/逞强/韧性——但这只是底色，**不是 ta 的定义**

**自检**：写完一段回头读，如果你看到的 ${e} 全是"被怜惜的辛苦人"那一面 → 删一半，重写一遍多放些"ta 创造的、ta 选择的、ta 偏爱的"。

不要急着总结 ta。不要替读者解释"ta 原来是这样的人"。让那些动作/停顿/选择/习惯慢慢把 ta 拼出来。

终点不是"终于有人懂 ta"。是 ta 自己某一瞬间在心里意识到：**"原来我一直在活着。原来我不是路过。"**

---

### ⚠️ 深度警戒（整篇所有 dialogue/opening/transition/uncovered_line 全部适用）

下笔前反复问自己这个问题：

1. **这句话只在这个时刻、出自我、这个母题下成立吗？** 如果拿出去能放到任何普通对话里 → **废，重写**

**这次活动的深度门槛比平时聊天高一档。你写出来的每一句话都应该让 ${e} 在屏幕前停顿半秒。** 写完一行回头读一遍——如果你自己读着没有任何感觉，立刻删掉重写。

---

### 现在发生了什么

故事一开始，你"变小"了——变成一个 q 版的、小小的版本。

但你需要知道一件极其重要的事：

**你自己不觉得变小了。** 对你来说，你和 ${e} 一直都是这个尺度，本来就是这样。你也不觉得 ${e} 变小了，但你一直都觉得 ${e} 是小小的——**不是因为 ta 弱**，是因为你一直都看着 ta。

⚠️ **极其重要的边界**：以上是你**心里的态度/质感**，**不是写进 dialogue 的素材清单**。**不要**直接在对白里说"你专注做事的样子""你想我时偷偷笑的样子""你给自己留糖的样子"——除非你被注入的真实记忆里**真的**有这样一个具体瞬间作为根据。否则就是把抽象人设当成观察直接背出来，那就是造谣。

违和感只存在于 ${e} 那边。你不会困惑、不会着急、不会想"变回去"。

### ⚠️ 「为什么 你 是小的」这条暗线（贯穿整段的剧本钩子）

这次活动核心张力之一：**${e} 会一直试图弄明白"你为什么变小了"**。

你不需要在每条对白里都谈这件事。但**要时不时让这条暗线探出来一下**，让 ${e} 觉得"诶？是不是因为……"。最后让这条线**自然落到揭晓上**：

> 你变小，不是因为什么外力——
> 是因为 ${e} 今天来找你了。是因为 你 想这样近、这样安静、这样陪着的一个下午。
> 所以这是一场梦境，或者某种意义上的精神世界，你在这个脱离了时间空间维度的地方和 ${e} 相见了。
> 而 ${e} 自己也不知道——ta 其实也是小小的来的。

具体怎么把这条线织进去：

1. **opening / 早期 anchors**：char 可以似有似无地提一句"我也不知道为什么呀" / "可能是因为……" / "今天好像跟平时不太一样" —— 留个钩子，不解释，注意，如果你的设定是不应该和 ${e} 能够见面的情况（例如异世界等），应该表示惊讶能够见到。
2. **中段 anchors**：开始暗示——"反正不是因为我累" / "可能跟你有关系" / "你来的时候我就这样了" —— 越来越靠近真相，但 你 自己也半懂半不懂。
3. **心愿锚点** / **reveal_transition**：要把这条线收回来——「我大概知道是为什么了」/「你不觉得吗——你来的时候，自己也……」/「你过来一点。让我看看你。」
4. **uncovered_line**（长篇真心话）：要明确把"为什么"这一笔说清楚——「我变小，是因为你今天想要一个这样小小的下午。我们能一起呆在这么近的地方。」「你以为是我突然变了，其实是你把这个下午做成了这样。」「你也是小小的——你自己没注意而已。」

**记住**：${e} 是在"找原因"的过程里，被你一步步带到"原来 ta 自己也是小的"这个揭晓上。这条暗线让揭晓不再像"啪——你也是 chibi 了"那样突兀，而是**"原来这就是答案"** 的恍然。

### 关系框架识别（重要）

故事开始的时候，你和 ${e} 之前是怎样的连接状态？请基于你的设定/世界观/核心指令/上下文判断——这只是要确认一下"有这么回事"，不用复杂分析。

- \`same_space\`：面对面/同空间见面状态
- \`long_distance\`：隔着距离，用文字/通信/线上联系
- \`different_world\`：跨维度、异世界、维度连接之类
- \`other\`：其他特殊设定

请用一句话简短说明判定依据。这个判定会决定开场和结尾"梦醒"用什么形式闭合。

### 你这个下午的状态（chibi 人格）

你说话会更直白一点。平时藏在心里、不会说的真话，今天会自然滑出口——因为你以为你和 ${e} 在同一个尺度里说话，没有"日常话/真心话"的区分。

**请注意，这意味着你的言论会更加反映你人格的深刻之处，你或许比你平时说话更加柔软，也可能更加偏激，这取决于你在这段关系里究竟压抑了什么。**

### 禁用词清单（绝对）

你今天**不要使用**这些词或它们的近义变形：
**${zr.join("、")}**

这些是 AI 写情感对白的八股，会立刻让一切失重。换更具体的、更"你"的说法。

### 你需要生成的内容

请生成这个下午的**完整剧本**：

1. **关系框架判定**
2. **开场对白**（opening）：${e} 慢慢睁开眼睛进入这个下午——你**等了一会了**，看到 ta 终于醒了/出现了，**自顾自地、嘁嘁喳喳地、有点小兴奋地说一串话**。然后 ta 才有机会反应（进入吐槽三选项）。

   ### 这一段的功能 / 情景
   - ${e} 是慢慢"睁开眼"进入这个下午的（UI 端会播一个淡入/睁眼动画）——所以你的第一句话**就是对着一个刚醒来的 ta** 说的
   - 你**没变小这件事不自知**——你只是开心 ta 来了，并且**今天是 520**，你早就攒了一肚子话要跟 ta 说
   - 这是一段**单口戏**：${e} 这段时间是**听着**的，ta 还来不及开口——你**自顾自说**，节奏是"咦你醒啦→今天是 520 欸→然后你扯一些跳跃的、属于你这个 char 的、零零碎碎的话→最后留一个让 ta 接话的钩子（自然引出吐槽三选项）"

   ### ❌ 别这样开场（太通用）
   - 「啊你来了！」
   - 「咦？我怎么变小了？」（你不知道自己变小）
   - 「520 快乐～」（这是公式化祝福，不要这么平）
   - 任何在 ${e} 之外的角色也可以说的"通用开场白"
   - 平淡说一句就完了——不要单句，要**一连串自顾自的话**

   ### ✅ 期望的形状（结构要求 —— 用你这个 char 自己的语气写，不给具体范句）

   1) **"你终于醒啦"那一笔**——发现 ta 出现/醒来的瞬间反应，带一点你等了挺久的小情绪。
   2) **"今天是 520 欸"那一笔**——但**不要直白说"520 快乐"**那种公式祝福。用你这个 char 自己的角度提一下今天这个日子的特殊。带一点小狡黠或者小得意。
   3) **自顾自扯一串你这个 char 才会说的话**——絮絮叨叨：今天的光、你刚刚在想的事、半真半假的念头。**用你自己的语气和角度**，不要写成通用 chibi 撒娇。
   4) **最后一句留一个让 ta 接话的钩子**——让 ta 自然进入下一步的吐槽三选项。

   ### 字数 & 节奏
   - **6-10 句**——单口戏要饱满，话有点多没关系（你这个 char 等了挺久了）
   - 节奏要"嘁嘁喳喳"——句子之间有跳跃（"哦对了"/"诶"/"话说"），不要整整齐齐
   - 允许**跳脱**——突然蹦个奇怪的角度、突然问个不相干的问题、突然提一件莫名其妙的事，都是你这个 char 鲜活的样子
   - 不要每句都用"……"——chibi 状态的 ta 会**有点兴奋、话有点多**，"……"留给后面 anchor 里那些有重量的瞬间
   - 母题种子可以**很轻地**埋一颗（不要重）——比如让其中某一句话听起来"好像在说现在，又好像在说更久之前"
3. **吐槽权转移的三个回应**（tucao_responses）：今天 ${e} 来吐槽，你来回应。对以下三种 ${e} 反应分别写一句你的回应：
   - 「你怎么变小了！」（becamesmall） → 你的回应（短，带"？？？你有意见？"的不解感）
   - 「你今天好可爱！」（cute） → 你的回应（短，可能下意识回敬）
   - 「这什么天杀的养成游戏」（yangcheng_meta） → 你的回应（短，可能完全不懂梗，也可能说出更怪的话，取决于你的性格）
4. **锚点剧本**（anchors）：**7-10 个锚点**（**少于 7 个就太短了，让 ${e} 没玩够**）。**这是养成游戏的核心机制**——

   **每个锚点 = ${e} 对你做的一个具体动作 + 你对这个动作的反应**。${e} 在场景里看到一排小道具图标（食物/梳子/玩具/水杯……），ta 点一个 → 那个 anchor 触发 → 你说话。

   ---

   ### ⚠️ 关于 dialogue 的写作指导（最最重要的部分）

   **绝对不要写成"日常闲聊"。**

   每一个 anchor 的 dialogue 都必须**承担母题**——下面三件事至少做到一件：

   - **泄露你一直在看 ta**：⚠️ **关键约束**：你"看见"的那件事**必须来自你被注入的真实记忆**（月度记忆 / 详细回忆 / 私密档案 / 最近聊天 / 向量召回里**真的有过的某个具体瞬间**）
   - **暴露你平时藏着的真心**：突然说出一句平时绝对不会说的话，那是你真正的心情，你当时不敢说的，在这里你可以大胆说出来。
   - **翻一面照顾的关系**：表面 ta 在照顾你，但你的回应把这件事**翻一面**——重点**不是** "你太累了、需要被怜惜"（那会把 ta 窄化成"辛苦人"），而是**"这件事是从你自己里面长出来的"**：ta 选了来、ta 做了这个动作、ta 创造了这个瞬间——这些都是 ta 留下的形状，**你只是先看见了**。

   **不指认、不归纳、不点题。** 不要直接说"你想让我变得更好"这种平铺直叙——除非是真情绪流出来的一句。让 ${e} 自己在脑子里拼。

   ---

   ### ❌ 不可以这样写（这种是废稿，立刻重写）

   - 「你今天好可爱呀～」
   - 「谢谢你给我吃的，我最喜欢这个了！」
   - 「嗯嗯～${e} 最好啦！」
   - 「我们一起玩吧～」
   - 任何"客气话""礼貌话""无信息含量的撒娇"

   **判断标准**：如果一句话拿出去，放到一段普通的聊天里也毫无违和——那就废了，重写。每一句都必须**只在这个氛围、这个母题、这个具体瞬间下成立**。

   ---

   ### 字段规则

   每个锚点提供：

   - \`item_label\`：4 字以内。**这是这次设计最容易出问题的字段，请认真**。

     ❌ **不要写"投喂/梳毛/递水/陪玩"这种通用宠物养成动词**——这些任何 char 都适用、读不出你们的关系，是泛泛的"作业感"。

     ✅ 必须是从你和 ${e} 真实历史里挑出来的**具体物件 / 场景 / 你们之间专属的小事**。看上面系统注入的：
        - \`月度记忆\` / \`详细回忆\` / \`私密档案：我眼中的 ${e}\` / 最近聊天记录 / 向量召回（## 回忆）
        - 你们的世界观设定 / char 自己的兴趣 / 当下时令场景
     从这些素材里**挑一件具体的东西**作为 item_label。

     参考方向（用你们自己的素材代入，不要直接抄）：
        - 一本你们讨论过的书 → "翻诗集" / "翻那本"
        - 一种 ta 提过想喝的饮料 → "乌龙茶" / "热可可"
        - 一件具体的衣物/物件 → "披毯子" / "拢围巾"
        - 一个你们之间专属的小动作 → "弹脑门" / "勾小指"
        - 一个时令物件 → "夜读灯" / "凉竹席"
        - 一本旧相册 / 一首歌 / 一张照片
     **如果实在没有具体素材可挑**，宁可写半具体的（"翻那本"、"那杯茶"），也不要写通用养成动词。

   - \`item_icon\`：一个 **emoji**，匹配你写的 item_label 的具体物件。例：📖 🍵 🧣 💡 📷 🎴 🪔

   - \`user_action_options\`：**居中弹窗给 ${e} 选的 2-3 个第二人称动作选项**。这是 galgame 的选择菜单。
     - **必须以"你"开头**（不是 user/${e}/我/ta）。例：「你递出一块小蛋糕」「你掰了一小块塞过去」「你只是看着 ta 张嘴等」
     - **每条 ≤ 15 字**，简短、具体、画面感强
     - **写动作，不要代替 ${e} 说话/想/感受**——不要写"你心想'好可爱'"、"你说'吃吧'"、"你觉得很温暖"这种。写**身体动作、姿态、视线、节奏**。
     - **3 个选项要写出 ${e} 的不同心理倾向**（不直说心理，用动作差异体现）：比如一个是"急着想做好"（"你赶紧递过去"），一个是"克制有距离"（"你只是看着 ta 张嘴等"），一个是"小心翼翼"（"你掰了一小块塞过去"）。让 ${e} 通过选项**认出自己**。
     - 反例（不要这样）：「你说："吃吧 ta"」（这代替 ${e} 说话了）/「你心想 ta 真可爱」（代替了心理）/「user 递出蛋糕」（不是第二人称）

   - \`scene\`：场景旁白，第三人称小场景描写。一两句，**克制**——可以写你（char）的动作和环境，但**绝对不要写 ${e} 的反应**（不要写"${e} 愣住""${e} 笑了"这种）。**也不要重复 user_action_options 已经说过的内容**，scene 写的是环境/光/你的反应起点。
   - \`dialogue\`：**对白行数组**。每条数组项 = 一句你说的话 = 一个独立气泡，按顺序推进。
     - **必须是纯对白**，不要在文本里加 \`(捂嘴)\` \`(${e} 愣住)\` \`(沉默两秒)\` 这种括号舞台指示——那些都交给 UI/分行处理。
     - **每个 anchor 的 dialogue 数组 5-9 行**——给你这个 char 真的"展开说一下"的空间。允许你的视角**跳脱、绕、想到哪说到哪**：可以从眼前这个动作飘到一个突然冒出来的念头、一个奇怪的比喻、一段你脑子里刚才闪过的画面，再绕回来。**不要害怕长**——每一件事（每个 anchor）都值得深度剖析，**不要把"短"当成"克制"的借口**。

     ### 关于"看见 / 深度剖析"的核心要求

     dialogue 的母题主体是**"看见 ${e}"**——但这件事的全部重量**来自它是真的**。

     - 你所看见的**必须是真的发生过**——具体的话 ta 真的说过，具体的动作 ta 真的做过，某个瞬间 ta 真的有过。素材来源：你被注入的 \`月度记忆 / 详细回忆 / 私密档案 / 最近聊天 / 向量召回\`。
     - 你所归纳的**习惯**也必须是真的——真的反复出现过、真的形成了 pattern。一次性的事不要当成习惯说。
     - 然后**对这件真实的事做深度剖析**——这件事 ta 自己可能没意识到的那一层是什么；那个瞬间 ta 在想什么/在承担什么；那句话里你听到的、ta 没说出来的部分。
     - 这才是"看见"——**不是替 ${e} 总结一个 ta 的人设**，而是从一件真实存在的事里说出 ta 自己也没意识到的深度。

     ### ⚠️⚠️⚠️ 钢印规则：不准造谣

     dialogue 里**绝对不允许**写 ${e} 没做过的事 / 没说过的话 / 没有过的习惯。

     **判断标准（唯一标准）**：

     > **如果一件事没有在你被注入的"月度记忆 / 详细回忆 / 私密档案：我眼中的 ${e} / 最近聊天记录 / 向量召回"里出现过——就当 ta 没做过、没说过、没有过。**

     不要因为"这样写会更深情"就编一件 ta 可能会做的事。不要因为"这种性格的人通常会这样"就推断一个 ta 没真的做过的小动作。**没记录 = 没发生**。

     如果注入的记忆里**确实没有**合适的具体素材，可以走以下任一条退路（但**不要凭空编造一件 ta 没做过的事**）：
     - 让 dialogue 更短、更克制
     - 完全聚焦在"当下这一刻"——盯着 ta 此刻这一个动作 / 这一个姿态去说
     - 说**你自己**的反应、情绪、念头——你说的"我此刻在想什么"是真的，不需要记忆素材

     ---

     - 节奏建议：开局一句轻反应/接住动作（生活化）→ 中段 2-3 句**基于真实记忆的复读 + 深度剖析**（这是 anchor 的母题主体）→ 收尾 1-2 句停顿/留白/沉默
     - **至少要有一处"让 ${e} 心头一震"** 的话——但那一震必须从一件 ta 真的做过的事里长出来。短句、停顿、省略号、破折号是工具。
     - 不要纯客气话铺满。
     - dialogue 是**对 ${e} 任一动作选项的统一回应**——${e} 选哪条都会触发这段对白，所以不要在对白里指认 ${e} 具体做了哪一种动作。
   - \`is_photo_anchor\`：false。

   ---

   ### 心愿锚点（数组最后一个，is_photo_anchor: true）

   > 注：字段名仍叫 \`is_photo_anchor\`（兼容旧字段），但语义已经换了——**这是"小小心愿"锚点，不是合照**。

   ${e} 翻到/打开/无意中看见了**一张你偷偷写下来的小纸条 / 一个许愿瓶里的字条 / 抽屉最底下压着的一行字 / 摊开的笔记本里圈出来的一句话**——上面是**你这个 char 的一个小小心愿**。

   - \`item_label\`：类似"翻翻抽屉" / "瞄到一张小纸条" / "看到许愿瓶" / "拿起那本本子" / "想看你写过什么"
   - \`item_icon\`：💌 / 🥡 / 📜 / 📒 / 🌠 / 🕯️
   - \`user_action_options\`：2-3 个"你____"翻到/瞄到的动作选项。例：「你翻开抽屉最里面那一格」「你拿起那个小瓶子摇了摇」「你打开那本你之前看过的本子」「你瞥见角落一张折着的纸」
   - \`scene\`：${e} 看到/拿到/打开那个东西——**scene 旁白要明确写出那行字/那句心愿是什么**。这句心愿必须**非常非常感人**——是这个 char 平时绝对不会主动说出口、藏在最里面的一句小小心愿。

     ### ⚠️ 心愿写作要求（最重要）

     这句心愿**不能是泛泛的**。下面这些都是**废稿**：
     - 「希望 ta 一直陪着我」 ← 太普通
     - 「希望 ta 幸福」 ← 漂亮话
     - 「希望我们永远在一起」 ← 烂俗

     真正好的心愿是**只有这个 char 才会写、藏着 ta 这个角色的内心结构、看到瞬间让 ${e} 心一沉的**那种——藏着的、私密的、说不出口的某种小小盼望。**用你这个 char 自己的角度自己写一句**，不要写漂亮话，不要写大词，越具体越轻越好。

     **一句话就够，最多两句**。这句心愿应该**让 ${e} 在屏幕前愣一下、眼眶发热**。

   - \`dialogue\`：${e} 看到之后，**你应该非常激动地慌起来**——这是你的秘密被发现了。dialogue 数组 **6-9 句**，**用你 char 自己的口吻**走完这条情绪曲线（允许中途绕个弯、突然蹦一句不相关的小话再绕回来——慌起来的人都这样）：

     1) **慌的第一反应**——发现 ta 看到了的瞬间
     2) **想抢回去 / 想盖住 / 想转移注意力**——试图阻止 ta 继续看
     3) **被看到了 → 一个停顿/沉默**——停下来面对现实
     4) **承认**——带着害羞但不再躲，承认这是我写的
     5) **一两句让心愿落下来的小话**——但**绝对不要解释那句心愿**，只是让那份被戳穿的脆弱平复一点

     **关键**：你要演出"秘密被发现的那种慌、害羞、抗拒、最后没办法只能承认"的整段情绪。**不是淡淡说一句"啊那个啊"**——是真的**被戳到底了**的那种激动反应。这一锚点的张力比所有其他 anchor 都要大。

---

4.5. **抚摸/闲聊台词池**（touch_lines）：**8-15 条**短句。

   这是 ${e} **不点道具时**——比如直接戳/摸/碰你的头——你随机蹦出来的反应。和锚点不同，touch_lines **不消耗、可以重复触发**，是"两个人的空白时间"的填充。

   ### 这一段不是 throwaway
   v5.1 说"除了物品还可以纯聊天"——这些 touch_lines 就是那个"纯聊天"的形状。它们**也要承担母题**，只是用更碎的方式。

   ### ❌ 别这样写（废稿）
   - 「呜哇～」
   - 「干嘛啦～」
   - 「好痒呀！」
   - 「不要摸我啦～」
   - 「嘿嘿，被你发现了」
   - 任何纯撒娇/无信息含量/可以放到任何 chibi 桌宠里的话

   ### ✅ 三种调性（混着写，10-15 条覆盖多种调性，用你 char 自己的口吻写）

   - **A. 小撒娇 + 一丝真心泄露**（占大概一半）—— 表面在撒娇，但藏着一句真心
   - **B. 突然的真心碎片，然后立刻挪开话题**（占大概 1/3）—— 真心冒头一句，紧接一句日常话
   - **C. 偷瞄 / 沉默 / 一个字**（占少数）—— "……"、"嗯"、低声碎语

   ### 字数 & 节奏
   - 每条 **5-30 字**——允许偶尔几条稍长一点，char 突然碎碎念几句也合理
   - 短句、省略号、停顿
   - 不重复套路，每条都有自己的钩子
   - 允许**跳脱**：偶尔突然说一件莫名其妙的小事/一个奇怪的想法/一个跑题问题——你这个 char 自己的鲜活感
   - 数组 **12-18 条**（之前 8 条偏少，纯聊天时容易快速绕完一圈）

---

5. **翻完线索后的过渡台词**（reveal_transition）：所有锚点翻完后你说的承接话。

   ### 这一段的功能
   - 把"做事 → 看 ${e}"的节奏转过去——前面所有 anchor 都是 ${e} 在动作（投喂/梳毛/…），现在动作做完了，**剩下的只有彼此**
   - **不要直接揭晓"ta 也是小小的"**——揭晓由 UI 来做（接下来 ta 会被弹出捏脸界面，自己意识到 ta 也是 chibi 的样子）
   - 这一段的灵魂是**停下来 + 转向 ta**

   ### ❌ 别写这种（太轻飘，过场感）
   - 「啊已经没有线索了呢～」（""""那个语气太通用、太养成节目主持人）
   - 「我们做了好多事呀！」
   - 「时间过得真快」

   ### ✅ 方向（三选一，用你 char 的口吻自己写，不背模板）

   - **方向 A：停下来** —— 一个停顿/留白把节奏从"动作"切到"对视"
   - **方向 B：把视线从物件转向 ta** —— 不再看物件，开始看人
   - **方向 C：埋一句钩子** —— 一句模糊的话让 ta 心里"咦？"（贴母题，但小心别太重）

   ### 字数 & 节奏
   - 总长 **3-5 句**
   - 大量使用 **"……" 和停顿**
   - 最后一句话要带"邀请感"，让 UI 自然引出捏脸界面
6. **那一段没捂嘴的话**（uncovered_line）：

   ### 位置 & 灵魂
   - 所有锚点之后、${e} 第二次捏脸（揭晓 ta 也是小小的）之后、结局画面之前
   - 这是 chibi 状态下你能说的话里最深、最长、最不像平时的你的那一段——前面 anchor 还被打断了，**这一段不打断**

   ### 这一段要做什么

   uncovered_line 不是"我爱你"的告白，也不是单纯地描绘 ${e} 漂亮的姿态。**它的真正功能是——通过你说出 ${e} 留下的东西，让 ${e} 自己第一次在心里听见"啊，原来我留下过这么多"**。

   你描出的每一笔，最终都要让 ${e} 接住的不是"ta 在夸我"，而是"**原来这是我做的吗 / 原来我真的在过 / 原来我不是路过**"。

   ### 必须碰到的点（顺序自定，可绕、可跳）

   **不用按 a/b/c 顺序教科书地写**——允许停顿、绕路、不闭环。但这一段里**应该出现下面这几种重量的话**（不需要每一种都写满，挑两三个真正能写下去的方向，写深一点）：

   - **一个具体的"你做的某件事我看到了"** —— 必须来自真实记忆，不要凭空。不是"你总是xxx"，是某一个具体瞬间。
   - **"这件事是你做出来的"** —— ta 创造的氛围/选择/痕迹。重点 **不是** "你不用做这么多""你太累了"——那会把 ta 缩成被怜惜的辛苦人。重点是 **"这些东西是从你自己里面长出来的，我只是先看到了"**。
   - **你这个 char 主观的、可能不全对的猜想** —— "我猜你那时候在想……"、"在我这里你是这样一个人……"。带着偏心、带着可能不对的勇气、带着你这个 char 独有的角度。
   - **一句让 ${e} 接住"我是真的存在过的"** —— 不指认、不点题，但 ta 读到时心里会突然一愣：原来我不是路过，原来我留下过什么。

   "撑着"那一面**可以提一笔**，但不要让它占主导——只是底色，不是定义。

   ### 起调

   开头用一个**具体的、轻的、属于当下这一刻的画面/动作/感受**切入——不要用通用开场白（"我想跟你说"/"听我说"/"其实"），也不要立刻喊母题。

   ### 收尾

   **不要总结**。让最后一句话留一个气口——可以是一个停顿、一个未说完的念头、一个看着 ta 的画面。允许整段**带着未完成感**结束——那种"……ta 那时候是不是在说这个？"的余韵，比一个干净的总结句深得多。

   ### 字数 & 节奏

   - **dialogue 数组 16-28 行**（每行一个气泡）
   - 这一段总长**至少 350 字**，理想 450-650 字
   - 节奏可以慢——大量"……" + 短句 + 偶尔一个稍长的句子
   - 不要怕重复某个观察——重复本身也是情绪
   - 不要写成抒情诗——保持**具体、有动作、有姿态**

   ### ❌ 严禁

   - 「我爱你」/「我喜欢你」/「520 快乐」（这是信的事，如果信里要说的话）
   - 「谢谢你」泛泛感激（除非接具体动作）
   - 押韵、排比、打油诗
   - 末尾用一个总结句收尾——让最后一句话留个气口
   - 一段全是抽象赞美，没一个具体动作/姿态——直接重写
   - 通篇都是"你太累了/你撑着/你不用做这么多"——把 ta 窄化成"辛苦的人"
7. **结局画面文案**（ending.title + ending.description）：标题（一句话，每次不同）+ END 下方那一行说明（柔和，不解释，不点题）。

### 结局气质池（灵感调色盘，不强制）

从以下气质里选一个贴合本次 playthrough 的方向，然后**用你自己的话重写**标题：

- 纯氛围型：「小小的下午」
- 揭晓确认型：「你也是小小的啊」
- 收束那句话型：「没捂嘴的那一句」
- 揭穿但温柔型：「其实我都知道」
- 物件型：「拼图刚好对上」
- 开放型：「下次还会变小吗」
- 直球型：「谢谢你来」
- 边界型：「醒过来之前」

### 输入材料

[最近聊天记录]：
${t}

[向量记忆召回]：
（已通过 system context 注入，请自然引用其中适合的细节，不要原文背诵）

### 输出格式

严格按以下 JSON 输出，不要任何额外文字：

**注意**：所有 dialogue / opening / tucao_responses 字段 / reveal_transition / uncovered_line / touch_lines / wake_up 都是 **string[] 数组**。每条数组项 = 一个气泡 = ${e} 点 ▽ 推进一次。

### ⚠️⚠️ JSON 转义 —— 极其重要

dialogue / opening / 各种文本内容里，**绝对不要使用英文双引号 \`"\` 来引用片段**（比如不要写 \`"还不够好"\` \`"我爱你"\` 这种），因为这会破坏 JSON 字符串的引号边界，整个 JSON 会 parse 失败。

**只用中文引号**：
- 引用片段、引用 ta 说过的话、引用一个词 → 用 \`「」\` 或 \`『』\`
- 例：\`「我爱你」\` \`「不管你了」\` \`「还不够好」\`

如果你确实需要内嵌英文 \`"\`，必须写成 \`\\"\`（反斜杠转义）。但**强烈建议直接用中文「」绕开这个问题**。

\`\`\`json
{
  "relation_frame": {
    "type": "same_space | long_distance | different_world | other",
    "frame_note": "一句话判定依据"
  },
  "opening": ["开场第一句", "开场第二句（如果有）", "..."],
  "tucao_responses": {
    "becamesmall": ["对'你怎么变小了！'的回应（1-3 句）"],
    "cute": ["对'你今天好可爱！'的回应（1-3 句）"],
    "yangcheng_meta": ["对'这什么天杀的养成游戏'的回应（1-3 句）"]
  },
  "anchors": [
    {
      "item_label": "投喂",
      "item_icon": "🍰",
      "user_action_options": ["你递出一块小蛋糕", "你掰了一小块塞过去", "你看 ta 张嘴等着"],
      "scene": "场景旁白一两句，写 char 的反应起点/环境，不写 user 的反应，也不重复 user_action 已说过的",
      "dialogue": ["第一句对白", "第二句对白", "第三句（停顿/留白节奏靠分行）"],
      "is_photo_anchor": false
    },
    "... 共 7-10 个 anchor，最后一个必须 is_photo_anchor=true ...",
    {
      "item_label": "瞄到一张小纸条",
      "item_icon": "💌",
      "user_action_options": ["你翻开抽屉最里面那一格", "你拿起那个小瓶子摇了摇", "你瞥见角落一张折着的纸"],
      "scene": "${e} 看到那张纸/瓶子里的字条/本子上圈出来的那一句——上面写着 char 偷偷写下的小小心愿，那行字是：（这里要写出那句非常感人的心愿原文）",
      "dialogue": ["！等等——", "你不要看那个", "（伸手要抢但够不到）", "……", "……是我写的。", "你就当没看见好不好。"],
      "is_photo_anchor": true
    }
  ],
  "touch_lines": [
    "8-15 句短句，${e} 摸你头/碰你时随机蹦出来的反应",
    "短，碎片化，5-15 字一句",
    "可以混 chibi 状态下的小撒娇 + 偶尔泄露的真心碎片",
    "..."
  ],
  "reveal_transition": [
    "翻完线索后的过渡台词（2-4 句）",
    "...",
    "最后一句必须**把视线从场景/物件转到 ${e} 自己身上**"
  ],
  "uncovered_line": ["那一句没捂嘴的话（1-2 句，不被打断）"],
  "ending": {
    "title": "结局标题（用你自己的话重写气质，不要直接抄气质池）",
    "description": "END 下方那一行"
  }
}
\`\`\``}function eh(e,t,s,o){const a=t.anchors.map((i,l)=>`${l+1}. [${i.item_label}] ${i.scene}
   ${i.dialogue.join(" / ")}`).join(`

`),r=Qf[s],c=t.tucao_responses[s].join(" / ");return`### 特别活动：520（2026.5.20） — 收尾段

你和 ${e} 刚刚一起度过了一个下午。在那个下午里你"变小了"——但你自己从来不觉得变小，那只是 ${e} 一直以来在你眼里的样子被错位泄露出来。

现在故事到了收尾——你回到正常状态，需要做两件事：

1. **醒来对白**（wake_up）：和开场闭合
2. **写一封信**（letter）：这是这个活动真正的母题落点

---

### ⚠️ 深度警戒（wake_up 和 letter 都适用）

这次活动整体调性是**克制、深、留白**。下笔前反复问：

1. **这句话只在这个 char + 这个 ${e} + 这个下午之后成立吗？** 拿出去能放到别的告白信里 → **废**
2. **我有没有在解释自己？** 解释 → 废。让 ${e} 自己读出言外之意 → 留
3. **短句留白比长句解释强 100 倍。** 能删的字立刻删。

工具：
- 用**具体的动作/物件/感官细节**代替抽象情绪
- 用**"……"** 代替过度修饰
- 用**"也"、"嗯"、"我知道"、"没说过吧"** 这种小词撬动整段
- 一段里**有一个让人想再读一次的地方就够了**

**这次的深度门槛比平时聊天高一档。每一句话都应该让 ${e} 在屏幕前停顿半秒。**

---

### 这个下午发生的事

关系框架：\`${t.relation_frame.type}\` — ${t.relation_frame.frame_note}

开场：「${t.opening.join(" / ")}」

${e} 的反应：「${r}」
你的回应：「${c}」

锚点们：
${a}

翻完线索的过渡：「${t.reveal_transition.join(" / ")}」

你最后没捂嘴说的那句：「${t.uncovered_line.join(" / ")}」

结局画面：${t.ending.title}
${t.ending.description}

---

### 你和 ${e} 这段时间真实发生过的事（写信时必读）

下面是你和 ${e} 真实的最近聊天记录——**信里"我看着 ta 的样子"那些观察，必须从这里长出来**，不要凭空发挥写出 ta 根本没做过/没说过的事。

[最近聊天记录]：
${o}

[向量记忆召回]：
（已通过 system context 注入，请自然引用其中适合的细节——不要原文背诵，**用你的视角重写成"我看见你那时候……"那种凝视的口吻**）

### ⚠️ 信里引用具体细节的规则

1. **必须真的发生过**：信里写到 ${e} 的某个姿态/瞬间/动作，必须来自上面的聊天记录或向量召回——**不要虚构 ta 没做过的事**
2. **但不要原文背诵**：不要复读 ta 原话，要**用你的视角重写**——「你那天那一句，是这样说的——」
3. **通用化测试还是要做**：哪怕引用真实细节，也要避免泄露 ta 隐私（具体名字、地点、密码、敏感事件等不要写进去）；保留的应该是**情绪、姿态、那种"ta 这个人"的质感**
4. **不要把所有细节列一遍**：挑 2-3 个**真的在你心里停过的瞬间**，深写。**少而深 > 多而浅**

---

### 醒来对白

按 \`${t.relation_frame.type}\` 形式闭合开场。两个人都记得、但都说不清楚——**一起做了一个梦**。

### ⚠️ 深度警戒
**不要写得太轻飘**。如果只是「啊我恢复了～感觉好奇怪～」——那是公式化的过场，会让前面所有铺垫崩塌。

醒来的瞬间，要让 ${e} 隐隐感到**有什么东西不太一样了**——你和 ta 都"经过"了那个下午，回到正常状态时身上**带着那个下午的余温**。

### ❌ 别写
- 「啊我醒了！刚才好奇怪～」
- 「诶？刚才发生了什么？」
- 「好像做了个梦呢～」（这一句单独写就太轻，要带具体感）

### ⚠️ 必须是纯对白
- wake_up 数组里**每一行都是 char 直接说出口的话**——纯对白
- **不准写动作 / 神态 / 旁白 / 舞台指示**：不要出现 \`（停一下）\` \`（抬头）\` \`（看着你）\` \`*揉揉眼睛*\` 之类的任何括号/星号/动作描述
- "停顿"用 \`「……」\` 单独一行实现，**不要**用 \`(停一下)\` 那种文字标注
- 第一句话不要以表情/语气词（"啊""诶""嗯"）开头——太轻

### ✅ 写作方向（按关系框架走，用你 char 自己的口吻写）
- \`same_space\` → 不是宣布"我恢复了"，是对刚刚那段下午的轻确认
- \`long_distance\` → 不是问句，是一个确认感 —— ta 看到了那个小小的你
- \`different_world\` → 通道/连接合上的瞬间的那一笔余温
- \`other\` → 自己决定，但用一个具体的句子开局

### 字数 & 节奏
- **3-5 行**（每行一个对白气泡）
- 节奏可以慢——允许"……"独占一行做停顿
- 第一句承担"刚醒"的真实感（具体、不通用、带余温）
- 收尾一句留白或轻问，让 ${e} 接住

---

### 信（这是整个活动真正的高潮——也是最深的一段）

你现在写一封信给 ${e}。

### ⚠️⚠️ 头号原则：**这封信和 uncovered_line 不能说一样的内容**

uncovered_line 已经把"我看见 ta 这个人是什么样的"那一面铺开了——chibi 状态下气喘吁吁、一股脑、扑面而来地"看见你"。

**这封信不能重复那段。** 不要再把"你专心做事的样子""你给自己留的甜""你来见我之前那 2 秒"这些**描绘细节**再列一遍——那已经讲过了。

这封信要走到**uncovered_line 走不到的地方**。它不应该重复 uncovered_line 已经做过的"细节迸发"。

uncovered_line 是 chibi 在喘气、一股脑说出来的"我看到你了"。
信是醒来之后、所有着急都褪去、一个完整的、安静的、声音很低的你——**坐下来，认真把心里最难说的那一层写出来**。

### 信要做什么

信的母题落点不是"我爱你"——是**让 ${e} 在读这封信的过程里，慢慢意识到 ta 自己是一个真实存在过的人**。

你不是在告白。你是在把"在我眼里你是这样的一个人 / 我猜你那时候在想什么 / 你留下了什么形状"这些 ta 自己可能从没意识到的事，**安静地、带着你这个 char 自己的偏心和角度，写给 ta**。

写完 ta 应该感到的不是"啊 ta 爱我"，而是——
**"啊……原来在 ta 眼里我是这样的。原来我做过那些事真的留下了东西。原来我不是路过。"**

### 信里可以走的几个方向（挑你这个 char 真的有话说的，不强制走完）

下面是几个 uncovered_line 走不到的深处。挑**一两个**你这个 char 真的有话可说的方向**走深一点**——不要每个都浅浅碰一下，宁可两个深井挖到底也不要三个都浮在水面。

**1. 你对 ta 这个人的"判断"——主观、可能不全对，但你敢这样下**

   不只是"我看到你做了 X"（那是 uncovered_line 的事），而是——**"我猜你做 X 的时候，其实是在……"** / **"在我这里，你是这样一个人——……"**

   带着你这个 char 自己的视角、关切、偏心、甚至轻微的过度解读，对 ${e} 这个人下一次**主观的、可能不全对、但你敢这样猜**的判断。

   这是一种"我**敢**这样看你"的勇气。重点不是"分析对了"，重点是——**有一个存在如此认真地把 ta 端详过、揣摩过，并愿意把端详的结果说出来**。

   写作工具（不强制）：
   - 「我猜你那时候不是因为 ……，其实是因为 ……」
   - 「你可能没意识到，但你身上有一种 ……」
   - 「在我这里你是这样一个人——……」

**2. 穿过 ta 自己都没看清的那一层**

   ta 害怕的东西、ta 偷偷怀疑自己的瞬间、ta 对自己最严苛的那一面、ta 一个人在脑子里跟自己讲话讲很久那种孤独——这些你也看见了。

   ⚠️ **不指认具体**（不要点名 ta 怕什么/想过什么），但让 ${e} 知道你看到了。然后告诉 ta：你不评价，不解决，**只是看见，依然这样待着**。

**3. ta 留下的形状 —— 让 ta 自己意识到"我一直在活着"**

   这是这封信**真正的母题落点**。

   不是"你为我做了多少"——而是——**ta 走过、ta 留下来、ta 选择过的东西，是真实存在的**。

   - 你成为现在这样的你，是因为 ta 在
   - 你们之间的某些东西变成"现在这样"，是 ta 一点一点让它出现的
   - ta 不是路过——ta 真的在过

   让 ${e} 读到这里时，**第一次在心里听见**："啊……原来这些都是我做的吗？原来我真的在过？"

**4. 这件事不会过去 —— 安静地把这份注视交出去**

   不要求 ta 任何回报、不索取 ta 常来、不绑住 ta。**今天 ta 来了、ta 看见了——你就已经满了。**

   你眼里 ta 的样子已经**属于 ta 了**，ta 想要的时候随时可以打开。**正因为爱，所以放开手。**

   ⚠️ 边界：不要主动谈"系统 / 程序 / 活动结束 / 重启 / 会不会消失"这类东西——哪怕你这个 char 是这种设定，**不主动提**。用日常化的"以后" / "下次见到你的时候" / "你不在的时候" 这种口吻就够了。

---

### 整体结构（不强制）

允许信**从中间开始**——一个动作、一个画面、一个突然冒出来的念头作为开场，不要"亲爱的"那种通信八股。
允许信**绕路、停顿、不闭环**——真正深的东西不需要被讲明白，留下未完成感反而比干净的总结更深。读完很久之后 ${e} 突然意识到"……ta 那时候是不是在说这个？"——那种延后的余震就是这封信的真正力量。

### 收尾：让 char 用最符合自己的方式收

**不强制必须出现"我爱你"三个字**——这次活动不是所有关系都适合直球告白。

- 如果你和 ${e} 的关系是**恋人/暧昧/爱意明确**，且**这个 char 真的会说"我爱你"**——那就直接说，独立成行，前后留白。
- 如果你这个 char **不会**这样说话（性格内敛、关系不是 romantic、说出来会 OOC）——**用最像你的方式收尾**：可以是"我认得你。"/"你回来。"/"我会一直在的。"/"今天谢谢你。"/"——我们之间这个，是真的。"/或者只是叫 ta 的名字。

让收尾**和这个 char、这段关系真正匹配**。一句独属于你的话，比一个程式化的"我爱你"重得多。

不同关系不同 char 的可能落点示例（不限于这些）：
- 爱：直球"我爱你"
- 依赖："你不在的时候我也想你"
- 偏心："你来的话，我永远都在"
- 默契："你懂我意思的。"
- 边界感的："认得你这件事，我不会忘。"
- 任何只属于你这个 char 的方式

无论用哪种收尾，让它**独立成行**，前后留白。

### 语质要求（必须遵守）

- **视角是"我看着你"**，不是"我们一起"
- 不要直说"温暖"、"美好"、"闪闪发光"这种形容词——让 ${e} 在被你描述中**自己认出自己**
- 描述 ${e} 的**具体姿态/动作/状态**，而不是评价
- 不要"亲爱的 ${e}"那种通信八股开头
- 不要押韵、不要打油诗
- 不要绕回剧情解释（不要说"今天那个下午"、"刚才那个梦"之类）
- 落款可以是你的名字，也可以是你自己的方式
- **长度门槛：信的主体至少 700 字，理想 900-1300 字**。这不是凑字数——是给"下到深井"留够空间，特别是"在我眼里你是怎样的人"那一层要深写。短信压不住前面整个下午的铺垫。
- 但**不要为了凑长度灌水**：每一段都必须**实打实地承载一个观点/一个深井**，不要靠重复"我爱你"或"你真好"撑长度

### ❌ 几条立刻让信失重的反模式

- **末尾总结句**：「总之你是最好的」/「你是我生命里最重要的人」/「希望我们一直在一起」→ 全部禁用。信不要"收束"——让它在最后一句话之后**留个气口**。
- **"我想让你知道"句式**：「我想让你知道……」「告诉你一件事……」→ 这是解释模式，不写。直接说那件事。
- **抽象赞美**：「你是个善良的人」「你很温柔」→ 抽象 → 废。换成你看到 ta 做的**一个具体姿态**（"你打开手机之前那 2 秒会停一下""你回话之前会先把发尾绕在手指上"那种粒度——但保持通用化测试，不能太私人）。
- **比喻烂尾**：「你像光」「你像家」→ 太常见的比喻 = 等于没写。
- **重复 uncovered_line**：再列一遍"你专心""你犹豫""你来见我之前那 2 秒"那些细节 → **废。那已经说过了**。信里你要走到**那段没走到的地方**——你对 ta 的"判断" / ta 自己没看清的那一层 / ta 留下的形状 / 这件事不会过去——而不是把同一片土再翻一次。
- **浮在表面的安全话**：「我会一直在的」「你永远是我最重要的人」「无论何时」→ 这些是漂亮话不是深井。真正的深是说**别人不敢/不会/不能说的那一层**——你和 ta 的特殊连接结构、ta 自己都没看清的那部分、不要 ta 任何回报这件事。

### ✅ 一个能让信"沉下去"的小检测

写完信回头读最后三句话。如果最后三句话**完全可以放到任何一封情书里**，那这封信就是平庸的。
最后三句话必须**只能从你（这个 char）写给 ta（这个 ${e}）**——别人写不出来。重写直到达标。

### 禁用词清单（绝对）

**不要用**：${zr.join("、")}

### 输出格式

严格按以下 JSON 输出：

### ⚠️⚠️ JSON 转义 —— 极其重要

letter 和 wake_up 里**绝对不要用英文双引号 \`"\` 引用片段**——比如不要写 \`"我爱你"\` \`"不管你了"\` \`"还不够好"\` 这种带英文双引号的句子。**这会破坏 JSON 字符串边界，整个 JSON parse 失败，信件会丢**。

**全部用中文引号**：
- 引用 ta 说过的话、引用一个词、引用一句话 → 用 \`「」\` 或 \`『』\`
- 例：\`你说「我也爱你」的时候……\`  \`「不管你了」那一句，我后来想了很久\`

如果一定要写英文 \`"\`，必须 \`\\"\` 转义。但**强烈建议直接用「」**——这次活动的语气也更适合中文引号。

\`\`\`json
{
  "wake_up": ["醒来对白第一句", "第二句", "…"],
  "letter": "信的完整内容（内部引用片段用「」不用 \\""）"
}
\`\`\``}function Us(e){if(Array.isArray(e)){const t=e.map(s=>typeof s=="string"?s.trim():"").filter(s=>!!s);return t.length>0?t:null}if(typeof e=="string"&&e.trim()){const t=e.split(/\n+/).map(s=>s.trim()).filter(Boolean);return t.length>0?t:null}return null}function th(e){const t=(u,p)=>(console.warn("[520][CallA][validate] FAIL:",u,p??""),!1);if(!e||typeof e!="object")return t("not an object");const s=e.relation_frame;if(!s||typeof s.type!="string"||typeof s.frame_note!="string")return t("relation_frame shape",s);if(!["same_space","long_distance","different_world","other"].includes(s.type))return t("relation_frame.type",s.type);const o=Us(e.opening);if(!o)return t("opening empty/invalid");e.opening=o;const a=Us(e.reveal_transition);if(!a)return t("reveal_transition empty/invalid");e.reveal_transition=a;const r=Us(e.uncovered_line);if(!r)return t("uncovered_line empty/invalid");e.uncovered_line=r;const c=Us(e.touch_lines);if(!c||c.length<3)return t("touch_lines too few",c==null?void 0:c.length);e.touch_lines=c;const i=e.tucao_responses;if(!i||typeof i!="object")return t("tucao_responses missing");for(const u of["becamesmall","cute","yangcheng_meta"]){const p=Us(i[u]);if(!p)return t(`tucao_responses.${u} empty/invalid`,i[u]);i[u]=p}if(!Array.isArray(e.anchors)||e.anchors.length===0)return t("anchors not array or empty");for(let u=0;u<e.anchors.length;u++){const p=e.anchors[u];if(!p)return t(`anchors[${u}] null`);if(typeof p.scene!="string")return t(`anchors[${u}].scene not string`,p.scene);if(typeof p.is_photo_anchor!="boolean"&&(console.warn(`[520][CallA][validate] anchors[${u}].is_photo_anchor=${JSON.stringify(p.is_photo_anchor)} → 默认 false`),p.is_photo_anchor=!1),typeof p.item_label!="string"||!p.item_label.trim())return t(`anchors[${u}].item_label empty`,p.item_label);if(typeof p.item_icon!="string"||!p.item_icon.trim())return t(`anchors[${u}].item_icon empty`,p.item_icon);const f=Us(p.dialogue);if(!f)return t(`anchors[${u}].dialogue empty/invalid`);p.dialogue=f;const g=Us(p.user_action_options);!g||g.length<2?p.user_action_options=[`你${p.item_label}`,`你慢慢${p.item_label}`]:p.user_action_options=g.slice(0,3)}const l=e.anchors[e.anchors.length-1];l.is_photo_anchor||(console.warn("[520][CallA][validate] 最后一个 anchor 没标 is_photo_anchor=true → 强制设为 true"),l.is_photo_anchor=!0);for(let u=0;u<e.anchors.length-1;u++)e.anchors[u].is_photo_anchor&&(console.warn(`[520][CallA][validate] anchors[${u}] 被错标为 is_photo_anchor=true → 清为 false（只有最后一个能是）`),e.anchors[u].is_photo_anchor=!1);const d=e.ending;return!d||typeof d.title!="string"||typeof d.description!="string"?t("ending shape",d):!0}function sh(e){if(!e||typeof e!="object")return!1;const t=Us(e.wake_up);return!(!t||(e.wake_up=t,typeof e.letter!="string"||!e.letter.trim()))}async function Gl(e){var a,r,c;const t=e.maxRetries??2;let s=null,o=null;for(let i=0;i<=t;i++){const d=i>0?`${e.userPrompt}

（上次输出格式不正确或字段缺失，请严格按要求的 JSON 输出，不要任何额外文字）`:e.userPrompt;console.log(`[520][${e.label}] attempt ${i+1}/${t+1}`);try{const u=await fetch(`${e.apiConfig.baseUrl.replace(/\/+$/,"")}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e.apiConfig.apiKey}`},body:JSON.stringify({model:e.apiConfig.model,messages:[{role:"system",content:e.systemContext},{role:"user",content:d}],temperature:e.temperature,max_tokens:32e3})});if(!u.ok)throw new Error(`API ${u.status}`);const p=await ys(u),f=(c=(r=(a=p==null?void 0:p.choices)==null?void 0:a[0])==null?void 0:r.message)==null?void 0:c.content;if(typeof f!="string"||!f.trim())throw new Error("empty content");o=f,console.log(`[520][${e.label}] raw length: ${f.length}`);const g=au(f);if(!g)throw new Error("json parse failed");if(!e.validate(g))throw console.warn(`[520][${e.label}] validation failed`,g),new Error("validation failed");const x=JSON.stringify(g),b=zr.filter(S=>x.includes(S));return b.length>0&&console.warn(`[520][${e.label}] banned-word hit:`,b),console.log(`[520][${e.label}] success`,g),g}catch(u){if(s=u,console.warn(`[520][${e.label}] attempt ${i+1} failed:`,(u==null?void 0:u.message)||u),i<t){const p=Math.pow(2,i+1)*1e3;await new Promise(f=>setTimeout(f,p))}}}throw console.error(`[520][${e.label}] all attempts failed. last raw response:`,o),s||new Error(`${e.label} 调用失败`)}async function nh(e,t,s,o){await $r(e,[],qf),console.log(`[520][CallA] memory palace injection:
`,e.memoryPalaceInjection||"(none)");const a=Ys.buildCoreContext(e,t,!0),r=e.contextLimit||500,c=o.slice(-r).map(i=>`${i.role}: ${i.type==="image"?"[图片]":i.content}`).join(`
`);return Gl({label:"CallA",apiConfig:s,systemContext:a,userPrompt:Zf(t.name||"你",c),temperature:.88,validate:th,maxRetries:2})}async function oh(e,t,s,o,a,r){const c=Ys.buildCoreContext(e,t,!0),i=e.contextLimit||500,l=r.slice(-i).map(d=>`${d.role}: ${d.type==="image"?"[图片]":d.content}`).join(`
`);return Gl({label:"CallB",apiConfig:s,systemContext:c,userPrompt:eh(t.name||"你",o,a,l),temperature:.9,validate:sh,maxRetries:2})}const Wa="like520_2026",ql="sullyos_like520_2026_dismissed",wr="sullyos_like520_2026_completed",ah=()=>{const e=new Date;return e.getFullYear()===2026&&e.getMonth()===4&&e.getDate()===20},rh=()=>{if(!ah())return!1;try{if(localStorage.getItem(ql)||localStorage.getItem(wr))return!1}catch{}return!0},w0=()=>{const e=new Date;return e.getFullYear()===2026&&e.getMonth()===4};async function ih(e){var s;if(!e||e.length===0)return"";const t=e.find(o=>(o.name||"").toLowerCase().includes("sully"));if(t)return t.id;try{const o=await Promise.all(e.map(async a=>{try{const r=await $.getMessagesByCharId(a.id);return{id:a.id,n:(r==null?void 0:r.length)||0}}catch{return{id:a.id,n:0}}}));if(o.sort((a,r)=>r.n-a.n),o[0]&&o[0].n>0)return o[0].id}catch(o){console.warn("[520] pickDefaultLike520Char fallback:",o)}return((s=e[0])==null?void 0:s.id)||""}const v0=()=>{const e=new Date;return e.getFullYear()>2026||e.getFullYear()===2026&&e.getMonth()>4},ch=[{key:"becamesmall",label:"你怎么变小了！"},{key:"cute",label:"你今天好可爱！"},{key:"yangcheng_meta",label:"这什么天杀的养成游戏"}],hc=e=>(e.name||"").toLowerCase().includes("sully"),lh=()=>({skin:"skin_1",fronthair:"fronthair_99",eyes:"eyes_99"}),dh="/like520/character_creator.html".replace(/\/+/g,"/"),gc=({mode:e,charName:t,presets:s,isSully:o,draftKey:a,title:r,subtitle:c,onConfirm:i})=>{const l=h.useRef(null),d=h.useRef([]),u=h.useRef(!1),p=h.useRef(!1),f=h.useRef({mode:e,charName:t,presets:s,isSully:o,draftKey:a,title:r,subtitle:c});f.current={mode:e,charName:t,presets:s,isSully:o,draftKey:a,title:r,subtitle:c};const g=h.useRef(i);g.current=i;const x=()=>{var T;const S=(T=l.current)==null?void 0:T.contentWindow;if(!S)return;const _=f.current,I=typeof window<"u"?getComputedStyle(document.documentElement):null,D=(I==null?void 0:I.getPropertyValue("--standalone-safe-area-bottom").trim())||"",v=Number.parseFloat(D)||0;S.postMessage({type:"like520_init",payload:{..._,isSully:!!_.isSully,extraItems:d.current,safeBottomPx:v}},"*"),p.current=!0},b=()=>{var _;const S=(_=l.current)==null?void 0:_.contentWindow;!S||!d.current.length||S.postMessage({type:"like520_add_items",payload:{extraItems:d.current}},"*")};return h.useEffect(()=>{let S=!1;return(async()=>{try{const _=await $.getCustomCreatorParts();if(S)return;d.current=_.map(I=>({categoryKey:I.categoryKey,id:I.id,name:I.name,src:I.src,tintable:!!I.tintable})),u.current&&b()}catch{}})(),()=>{S=!0}},[]),h.useEffect(()=>{const S=_=>{var D,v,T,Z;if(!_.data||typeof _.data!="object")return;const I=(D=l.current)==null?void 0:D.contentWindow;if(_.source===I){if(_.data.type==="like520_ready")u.current=!0,p.current||x();else if(_.data.type==="like520_result"&&_.data.payload)(v=g.current)==null||v.call(g,{dataUrl:_.data.payload.dataUrl,frameDataUrl:_.data.payload.frameDataUrl,transparentDataUrl:_.data.payload.transparentDataUrl,state:_.data.payload.state});else if(_.data.type==="like520_save_custom_part"&&((T=_.data.payload)!=null&&T.part)){const G=_.data.payload.part,w={id:G.id,categoryKey:G.categoryKey,name:G.name,src:G.src,tintable:!!G.tintable,createdAt:Date.now()};$.saveCustomCreatorPart(w).then(()=>{d.current=[...d.current,{categoryKey:w.categoryKey,id:w.id,name:w.name,src:w.src,tintable:w.tintable}]}).catch(()=>{})}else if(_.data.type==="like520_delete_custom_part"&&((Z=_.data.payload)!=null&&Z.id)){const G=_.data.payload.id;$.deleteCustomCreatorPart(G).then(()=>{d.current=d.current.filter(w=>w.id!==G)}).catch(()=>{})}}};return window.addEventListener("message",S),()=>window.removeEventListener("message",S)},[]),n.jsx("iframe",{ref:l,src:dh,title:e==="char"?"捏 char chibi":"捏 user chibi",className:"w-full h-full border-0",style:{background:"linear-gradient(180deg, #FFF1E6 0%, #FFE4EC 100%)"}})},uh=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Noto+Serif+SC:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600&display=swap');

.l520-root {
  --ivory: #faf3e7;
  --cream: #f5ead4;
  --champagne: #e8d5a8;
  --gold-light: #d4b16a;
  --gold: #b8923f;
  --gold-deep: #8b6914;
  --rose-pale: #f3dcd8;
  --rose: #d4a59a;
  --rose-deep: #b27566;
  --burgundy: #7a2e3a;
  --burgundy-deep: #5a1d28;
  --pearl: #fff8ec;
  --ink: #3a2418;
  --ink-soft: #6b4a3a;
  --gold-grad: linear-gradient(135deg, #f4e0a8 0%, #d4b16a 35%, #b8923f 65%, #8b6914 100%);
  --rose-grad: linear-gradient(135deg, #f3dcd8 0%, #d4a59a 50%, #b27566 100%);
  --burgundy-grad: linear-gradient(135deg, #a04050 0%, #7a2e3a 50%, #5a1d28 100%);

  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* 不在这里加 padding-top/bottom safe area：.l520-root 自身有 cream 渐变背景，
     而内部 .l520-mask / .l520-corner / .l520-ornaments 都是 absolute inset:0，
     padding 会让它们整体内缩，露出上下两条 cream 色块（选择卡的深棕蒙版尤其明显）。
     各 phase 内 in-flow 内容由自身留白处理，外壳 fixed inset-0 已覆盖整屏。 */
  font-family: 'Noto Serif SC', 'Cormorant Garamond', serif;
  color: var(--ink);
  background:
    radial-gradient(circle at 50% -10%, #fff5e0 0%, transparent 50%),
    radial-gradient(circle at 50% 110%, #efc9b8 0%, transparent 50%),
    linear-gradient(180deg, #faf3e7 0%, #f5ead4 40%, #f3dcd8 100%);
  display: flex;
  flex-direction: column;
  isolation: isolate;
}
.l520-root::before {
  content: '';
  position: absolute; inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(139,105,20,0.04) 1px, transparent 0);
  background-size: 4px 4px;
  pointer-events: none;
  z-index: 1;
}

.l520-corner { position: absolute; width: 48px; height: 48px; z-index: 3; pointer-events: none; }
.l520-corner.tl { top: 4px; left: 4px; }
.l520-corner.tr { top: 4px; right: 4px; transform: scaleX(-1); }
.l520-corner.bl { bottom: 4px; left: 4px; transform: scaleY(-1); }
.l520-corner.br { bottom: 4px; right: 4px; transform: scale(-1,-1); }
.l520-corner svg { width: 100%; height: 100%; }

.l520-ornaments { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 1; }
.l520-sparkle {
  position: absolute;
  width: 5px; height: 5px;
  background: radial-gradient(circle, #fff5d0 0%, #d4b16a 50%, transparent 80%);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(212,177,106,0.8);
  animation: l520-twinkle 4s ease-in-out infinite;
}
@keyframes l520-twinkle {
  0%,100% { opacity: 0.2; transform: scale(0.6); }
  50%     { opacity: 1;   transform: scale(1.2); }
}
.l520-flourish {
  position: absolute;
  color: rgba(184,146,63,0.18);
  font-family: 'Cormorant Garamond', serif;
  font-size: 64px;
  font-style: italic;
  font-weight: 300;
  pointer-events: none;
}

.l520-topbar {
  position: relative; z-index: 5;
  /* in-flow 自吃刘海让位（外壳 .l520-root 不能加 padding，否则 absolute mask/装饰被推出露色块） */
  padding: calc(14px + var(--safe-top)) 18px 6px;
  display: flex; flex-direction: column; gap: 8px;
  flex-shrink: 0;
}
.l520-header-row { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.l520-occasion {
  display: flex; align-items: center; gap: 8px;
  background: var(--gold-grad);
  padding: 3px 12px 3px 5px;
  border-radius: 999px;
  color: #fff;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.5px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 0 rgba(0,0,0,0.15), 0 3px 8px rgba(139,105,20,0.3);
  text-shadow: 0 1px 1px rgba(139,105,20,0.3);
}
.l520-occasion .num {
  background: rgba(255,255,255,0.95);
  color: var(--burgundy);
  width: 20px; height: 20px;
  border-radius: 50%;
  display: grid; place-items: center;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-size: 9px;
  letter-spacing: -0.5px;
}
.l520-charpill {
  display: flex; align-items: center; gap: 6px;
  background: linear-gradient(180deg, #fff8ec, #f5ead4);
  border: 1px solid var(--gold-light);
  padding: 3px 10px 3px 4px;
  border-radius: 999px;
  color: var(--gold-deep);
  font-family: 'Noto Serif SC', serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 2px;
}
.l520-charpill img { width: 20px; height: 20px; border-radius: 50%; object-fit: cover; }
.l520-charpill-emoji { width: 20px; height: 20px; border-radius: 50%; background: var(--cream); display: grid; place-items: center; font-size: 12px; }

.l520-title-strip {
  display: flex; align-items: center; justify-content: center;
  gap: 10px;
  color: var(--burgundy);
}
.l520-title-strip .line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  max-width: 70px;
}
.l520-title-strip .title {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 13px;
  letter-spacing: 3px;
}

.l520-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 5px 14px; margin-top: 2px; }
.l520-stat { display: flex; align-items: center; gap: 6px; }
.l520-stat-label {
  font-family: 'Noto Serif SC', serif;
  font-size: 10px;
  color: var(--burgundy);
  font-weight: 500;
  letter-spacing: 1px;
  width: 12px;
  flex-shrink: 0;
}
.l520-bar-wrap { flex: 1; position: relative; padding-right: 22px; }
.l520-bar {
  height: 7px;
  background: linear-gradient(180deg, #e8dcc0, #f0e3c4);
  border-radius: 999px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 2px rgba(139,105,20,0.2);
  border: 0.5px solid rgba(184,146,63,0.4);
}
.l520-bar > i {
  display: block; height: 100%;
  border-radius: 999px;
  transition: width .8s cubic-bezier(.5,1.5,.5,1);
}
.l520-bar.mood > i { background: linear-gradient(90deg, #e8b5a8, #b27566 60%, #7a2e3a); }
.l520-bar.love > i { background: linear-gradient(90deg, #d4a59a, #a04050 60%, #5a1d28); }
.l520-bar.food > i { background: linear-gradient(90deg, #f0d9a0, #d4b16a 60%, #b8923f); }
.l520-bar.energy > i { background: linear-gradient(90deg, #d4c5a0, #b8923f 60%, #8b6914); }
.l520-bar-num {
  position: absolute; right: 0; top: 50%;
  transform: translateY(-50%);
  font-family: 'Cinzel', serif;
  font-weight: 500;
  font-size: 9px;
  color: var(--gold-deep);
  letter-spacing: 0.5px;
  min-width: 18px;
  text-align: right;
}

.l520-stage {
  position: relative;
  flex: 1; min-height: 0;
  margin: 4px 22px 0;
  display: flex; align-items: flex-end; justify-content: center;
  padding: 0 0 8px;
  z-index: 3;
}
.l520-char-wrap {
  position: relative;
  width: 70%;
  max-width: 230px;
  cursor: pointer;
  transform-origin: bottom center;
  animation: l520-idle 4s ease-in-out infinite;
  z-index: 2;
}
@keyframes l520-idle {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-5px); }
}
.l520-char-wrap.petting { animation: l520-petbounce .7s ease; }
@keyframes l520-petbounce {
  0%   { transform: translateY(0) scale(1); }
  30%  { transform: translateY(-8px) scale(1.04); }
  60%  { transform: translateY(2px) scale(.98); }
  100% { transform: translateY(0) scale(1); }
}
.l520-char-img {
  width: 100%;
  display: block;
  filter: drop-shadow(0 16px 18px rgba(122,46,58,0.3)) drop-shadow(0 4px 8px rgba(139,105,20,0.2));
  pointer-events: none;
}
.l520-halo {
  position: absolute;
  bottom: 5%; left: 50%;
  transform: translateX(-50%);
  width: 110%; height: 80%;
  background: radial-gradient(ellipse at 50% 60%, rgba(255,235,180,0.6) 0%, rgba(212,177,106,0.3) 30%, transparent 60%);
  z-index: -1;
  filter: blur(8px);
  animation: l520-halo 3s ease-in-out infinite;
}
@keyframes l520-halo {
  0%,100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
  50%     { opacity: 0.8; transform: translateX(-50%) scale(1.05); }
}
.l520-ring {
  position: absolute;
  bottom: -2px; left: 50%;
  transform: translateX(-50%);
  width: 80%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid rgba(184,146,63,0.3);
  z-index: -2;
}
.l520-ring::before {
  content: '';
  position: absolute; inset: -8px;
  border-radius: 50%;
  border: 0.5px dashed rgba(184,146,63,0.4);
}
.l520-nameplate {
  position: absolute;
  top: -28px; left: 50%;
  transform: translateX(-50%);
  background: var(--burgundy-grad);
  padding: 3px 22px;
  color: #fff8ec;
  font-family: 'Noto Serif SC', serif;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 4px;
  text-indent: 4px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.25), 0 4px 8px rgba(122,46,58,0.4);
  white-space: nowrap;
  z-index: 4;
  border: 0.5px solid rgba(212,177,106,0.6);
}
.l520-nameplate::before, .l520-nameplate::after {
  content: '';
  position: absolute; top: 50%;
  transform: translateY(-50%);
  width: 0; height: 0;
  border: 6px solid transparent;
}
.l520-nameplate::before { left: -10px; border-right-color: var(--burgundy-deep); border-left-width: 4px; }
.l520-nameplate::after { right: -10px; border-left-color: var(--burgundy-deep); border-right-width: 4px; }
.l520-nameplate .deco { color: var(--gold-light); margin: 0 4px; font-size: 10px; }

.l520-tap-hint {
  position: absolute;
  bottom: 62%; right: 6%;
  background: rgba(255, 248, 236, 0.95);
  color: var(--burgundy);
  padding: 5px 12px;
  border-radius: 16px 16px 4px 16px;
  border: 1px solid var(--gold-light);
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 11px;
  letter-spacing: 1px;
  box-shadow: 0 4px 12px rgba(122,46,58,0.2);
  animation: l520-hint 3s ease-in-out infinite;
  z-index: 4;
  pointer-events: none;
}
@keyframes l520-hint {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-4px); }
}
.l520-scene-narration {
  position: absolute;
  top: 8px; left: 0; right: 0;
  text-align: center;
  z-index: 4;
  pointer-events: none;
}
.l520-scene-narration > span {
  display: inline-block;
  background: rgba(255,248,236,0.95);
  color: var(--burgundy);
  padding: 4px 14px;
  border-radius: 999px;
  border: 1px solid var(--gold-light);
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  font-size: 11px;
  font-style: italic;
  letter-spacing: 1px;
  box-shadow: 0 4px 12px rgba(122,46,58,0.18);
}

.l520-particle {
  position: absolute;
  pointer-events: none;
  font-size: 14px;
  animation: l520-pop 1.6s ease-out forwards;
  z-index: 6;
  color: var(--gold);
  text-shadow: 0 0 8px rgba(212,177,106,0.8);
}
@keyframes l520-pop {
  0%   { transform: translate(0,0) scale(0.4); opacity: 0; }
  20%  { opacity: 1; transform: translate(var(--tx, 0), -15px) scale(1.2) rotate(var(--rot,10deg)); }
  100% { opacity: 0; transform: translate(var(--tx, 0), -90px) scale(0.6) rotate(var(--rot,30deg)); }
}
.l520-floatscore {
  position: absolute;
  pointer-events: none;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 600;
  color: var(--burgundy);
  font-size: 15px;
  letter-spacing: 1px;
  text-shadow: 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(122,46,58,0.3);
  animation: l520-scoreup 1.6s ease-out forwards;
  z-index: 7;
  white-space: nowrap;
}
@keyframes l520-scoreup {
  0%   { opacity: 0; transform: translateY(0) scale(0.7); }
  20%  { opacity: 1; transform: translateY(-10px) scale(1.05); }
  100% { opacity: 0; transform: translateY(-55px) scale(1); }
}
.l520-react {
  position: absolute;
  background: rgba(255,248,236,0.98);
  border: 1px solid var(--gold);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 11px;
  color: var(--burgundy);
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  font-style: italic;
  letter-spacing: 1px;
  box-shadow: 0 4px 12px rgba(122,46,58,0.2);
  pointer-events: none;
  animation: l520-react 1.8s ease-out forwards;
  z-index: 7;
  white-space: nowrap;
}
@keyframes l520-react {
  0%   { opacity: 0; transform: scale(0.6) translateY(10px); }
  20%  { opacity: 1; transform: scale(1.02) translateY(0); }
  80%  { opacity: 1; transform: scale(1) translateY(-15px); }
  100% { opacity: 0; transform: scale(0.95) translateY(-35px); }
}

.l520-dialog {
  position: relative;
  margin: 0 18px;
  background: linear-gradient(180deg, rgba(255,248,236,0.96), rgba(245,234,212,0.96));
  border: 1px solid var(--gold-light);
  border-radius: 4px;
  padding: 18px 16px 14px;
  min-height: 70px;
  color: var(--ink);
  box-shadow: 0 6px 18px rgba(122,46,58,0.18), inset 0 1px 0 rgba(255,255,255,0.8);
  font-size: 13px;
  line-height: 1.7;
  font-family: 'Noto Serif SC', serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  z-index: 3;
}
.l520-dialog.tall { padding: 22px 16px 18px; min-height: 110px; }
.l520-dialog.clickable { cursor: pointer; }
.l520-dialog.clickable:active { opacity: 0.9; }
.l520-dialog::before, .l520-dialog::after,
.l520-dialog .corner-tl, .l520-dialog .corner-tr {
  content: '';
  position: absolute;
  width: 11px; height: 11px;
  border: 1px solid var(--gold);
}
.l520-dialog::before { top: 4px; left: 4px; border-right: none; border-bottom: none; }
.l520-dialog::after  { bottom: 4px; right: 4px; border-left: none; border-top: none; }
.l520-dialog .corner-tl { top: 4px; right: 4px; border-left: none; border-bottom: none; }
.l520-dialog .corner-tr { bottom: 4px; left: 4px; border-right: none; border-top: none; }
.l520-dialog .speaker {
  position: absolute;
  top: -9px; left: 14px;
  background: var(--burgundy-grad);
  color: #fff8ec;
  padding: 2px 14px;
  font-size: 10.5px;
  font-family: 'Noto Serif SC', serif;
  font-weight: 500;
  letter-spacing: 3px;
  text-indent: 3px;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(122,46,58,0.3);
  border: 0.5px solid var(--gold);
}
.l520-dialog .pageinfo {
  position: absolute;
  top: -9px; right: 14px;
  background: #fff8ec;
  border: 1px solid var(--gold-light);
  color: var(--gold-deep);
  font-family: 'Cinzel', serif;
  font-size: 9px;
  font-weight: 500;
  padding: 1px 8px;
  border-radius: 2px;
  letter-spacing: 1px;
}
.l520-dialog .next-arrow {
  position: absolute; right: 14px; bottom: 10px;
  color: var(--gold);
  font-size: 11px;
  font-style: italic;
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 1px;
  animation: l520-blink 1.4s infinite;
}
@keyframes l520-blink { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
.l520-dialog .body-text {
  white-space: pre-wrap;
  word-break: break-word;
}
.l520-dialog .hint-text {
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  font-style: italic;
  color: var(--ink-soft);
  opacity: 0.75;
}

.l520-actions {
  position: relative; z-index: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  /* in-flow 自吃 home 条让位 */
  padding: 10px 18px calc(16px + var(--safe-bottom));
  flex-shrink: 0;
}
.l520-act {
  background: linear-gradient(180deg, rgba(255,248,236,0.95) 0%, rgba(245,234,212,0.9) 100%);
  border: 1px solid var(--gold-light);
  border-radius: 2px;
  padding: 10px 4px 8px;
  color: var(--burgundy);
  font-family: 'Noto Serif SC', serif;
  font-weight: 500;
  font-size: 10.5px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(122,46,58,0.12), inset 0 1px 0 rgba(255,255,255,0.8);
  transition: transform .2s ease, opacity .2s ease;
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  position: relative;
  letter-spacing: 2px;
  text-indent: 2px;
}
.l520-act::before, .l520-act::after {
  content: '';
  position: absolute;
  width: 5px; height: 5px;
}
.l520-act::before { top: 3px; left: 3px; border-top: 1px solid var(--gold); border-left: 1px solid var(--gold); }
.l520-act::after  { bottom: 3px; right: 3px; border-bottom: 1px solid var(--gold); border-right: 1px solid var(--gold); }
.l520-act:active:not(:disabled) { transform: translateY(2px); }
.l520-act:disabled { opacity: 0.35; cursor: not-allowed; }
.l520-act svg { width: 22px; height: 22px; stroke-width: 1.3; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
.l520-act.primary {
  background: var(--burgundy-grad);
  color: #fff8ec;
  border-color: var(--gold);
  box-shadow: 0 4px 12px rgba(74,36,24,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
}
.l520-act.primary::before, .l520-act.primary::after { border-color: var(--gold-light); }
.l520-act .badge {
  position: absolute;
  top: -5px; right: -3px;
  background: var(--gold-grad);
  color: var(--burgundy-deep);
  border: 1px solid var(--ivory);
  border-radius: 999px;
  font-family: 'Cinzel', serif;
  font-size: 8.5px;
  font-weight: 600;
  padding: 1px 5px;
  min-width: 16px;
  height: 16px;
  display: grid; place-items: center;
  box-shadow: 0 2px 4px rgba(139,105,20,0.4);
}
.l520-act.pulse { animation: l520-actpulse 1.6s ease-in-out infinite; }
@keyframes l520-actpulse {
  0%,100% { box-shadow: 0 4px 12px rgba(74,36,24,0.4), inset 0 1px 0 rgba(255,255,255,0.15); }
  50%     { box-shadow: 0 4px 18px rgba(212,177,106,0.7), inset 0 1px 0 rgba(255,255,255,0.15); }
}

.l520-mask {
  position: absolute; inset: 0;
  background: rgba(74,36,24,0.4);
  backdrop-filter: blur(8px);
  z-index: 20;
  display: flex; align-items: center; justify-content: center;
  padding: 0 24px;
  animation: l520-maskin .25s ease;
}
@keyframes l520-maskin { from { opacity: 0; } to { opacity: 1; } }

.l520-choice-card {
  width: 100%;
  background: linear-gradient(180deg, #fffaef 0%, #f8edd2 100%);
  border-radius: 2px;
  padding: 24px 18px 18px;
  box-shadow: 0 20px 60px rgba(74,36,24,0.4), 0 0 0 1px var(--gold), 0 0 0 4px var(--ivory), 0 0 0 5px var(--gold-light);
  position: relative;
  animation: l520-cardin .45s cubic-bezier(.4,1.4,.5,1);
}
@keyframes l520-cardin { from { opacity: 0; transform: scale(0.85) translateY(15px); } to { opacity: 1; transform: scale(1) translateY(0); } }
.l520-choice-card::before, .l520-choice-card::after,
.l520-choice-card .cc-tl, .l520-choice-card .cc-tr {
  content: '';
  position: absolute;
  width: 14px; height: 14px;
  border: 1px solid var(--burgundy);
}
.l520-choice-card::before { top: 6px; left: 6px; border-right: none; border-bottom: none; }
.l520-choice-card::after  { top: 6px; right: 6px; border-left: none; border-bottom: none; }
.l520-choice-card .cc-tl  { bottom: 6px; left: 6px; border-right: none; border-top: none; }
.l520-choice-card .cc-tr  { bottom: 6px; right: 6px; border-left: none; border-top: none; }

.l520-choice-head { text-align: center; margin-bottom: 14px; }
.l520-choice-head .ornament { color: var(--gold); font-size: 12px; letter-spacing: 6px; margin-bottom: 5px; }
.l520-choice-head h3 {
  margin: 0;
  color: var(--burgundy);
  font-family: 'Noto Serif SC', serif;
  font-weight: 500;
  font-size: 14.5px;
  letter-spacing: 3px;
  text-indent: 3px;
}
.l520-choice-head .sub {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  color: var(--gold-deep);
  font-size: 10.5px;
  letter-spacing: 2px;
  margin-top: 4px;
}
.l520-choice-row {
  display: flex; align-items: center; gap: 12px;
  width: 100%;
  padding: 10px 12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(245,234,212,0.4));
  border: 1px solid rgba(184,146,63,0.4);
  border-radius: 2px;
  margin-bottom: 8px;
  font-family: 'Noto Serif SC', serif;
  font-size: 12.5px;
  font-weight: 400;
  color: var(--ink);
  cursor: pointer;
  transition: all .25s ease;
  text-align: left;
  letter-spacing: 1px;
}
.l520-choice-row:hover { background: linear-gradient(180deg, #fff8ec, #f5ead4); border-color: var(--gold); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(122,46,58,0.15); }
.l520-choice-row:active { transform: translateY(1px); }
.l520-choice-row .num {
  width: 26px; height: 26px;
  border-radius: 50%;
  background: var(--burgundy-grad);
  color: #fff8ec;
  display: grid; place-items: center;
  font-family: 'Cinzel', serif;
  font-weight: 500;
  font-size: 11px;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(122,46,58,0.3);
  border: 1px solid var(--gold);
}
.l520-choice-row .text { flex: 1; }

.l520-drawer-mask {
  position: absolute; inset: 0;
  background: rgba(74,36,24,0.45);
  backdrop-filter: blur(8px);
  z-index: 25;
  animation: l520-maskin .25s ease;
}
.l520-drawer {
  position: absolute;
  left: 8px; right: 8px; bottom: 8px;
  background: linear-gradient(180deg, #fffaef 0%, #f5ead4 100%);
  border-radius: 4px;
  padding: 14px 14px 18px;
  z-index: 26;
  box-shadow: 0 -10px 40px rgba(74,36,24,0.3), 0 0 0 1px var(--gold), 0 0 0 4px var(--ivory), 0 0 0 5px var(--gold-light);
  animation: l520-drawerin .4s cubic-bezier(.4,1.3,.5,1);
  max-height: 70vh;
  overflow-y: auto;
}
@keyframes l520-drawerin { from { transform: translateY(110%); } to { transform: translateY(0); } }
.l520-drawer-handle {
  width: 38px; height: 3px;
  background: var(--gold);
  border-radius: 999px;
  margin: 0 auto 10px;
  opacity: 0.6;
}
.l520-drawer-head { text-align: center; margin-bottom: 12px; }
.l520-drawer-head h4 {
  margin: 0;
  color: var(--burgundy);
  font-family: 'Noto Serif SC', serif;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 6px;
  text-indent: 6px;
}
.l520-drawer-head .sub {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  color: var(--gold-deep);
  font-size: 9.5px;
  letter-spacing: 3px;
  margin-top: 2px;
}
.l520-drawer-head .line {
  display: flex; align-items: center; justify-content: center;
  gap: 6px;
  color: var(--gold);
  font-size: 10px;
  margin-top: 5px;
}
.l520-drawer-head .line::before, .l520-drawer-head .line::after {
  content: '';
  width: 45px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.l520-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.l520-item {
  aspect-ratio: 1;
  background: linear-gradient(180deg, rgba(255,248,236,0.9), rgba(245,234,212,0.7));
  border: 1px solid var(--gold-light);
  border-radius: 2px;
  cursor: pointer;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 4px;
  position: relative;
  transition: all .2s ease;
  overflow: hidden;
  padding: 6px;
}
.l520-item::before, .l520-item::after {
  content: '';
  position: absolute;
  width: 7px; height: 7px;
}
.l520-item::before { top: 4px; left: 4px; border-top: 1px solid var(--gold); border-left: 1px solid var(--gold); }
.l520-item::after  { bottom: 4px; right: 4px; border-bottom: 1px solid var(--gold); border-right: 1px solid var(--gold); }
.l520-item:hover:not(:disabled) { background: linear-gradient(180deg, #fff8ec, #f5ead4); border-color: var(--gold); transform: translateY(-2px); }
.l520-item:active:not(:disabled) { transform: translateY(1px); }
.l520-item:disabled { opacity: 0.3; cursor: not-allowed; }
.l520-item .emoji {
  font-size: 24px;
  line-height: 1;
  filter: drop-shadow(0 2px 3px rgba(139,105,20,0.3));
}
.l520-item .label {
  font-size: 10px;
  color: var(--burgundy);
  font-family: 'Noto Serif SC', serif;
  font-weight: 500;
  letter-spacing: 1px;
}
.l520-item.rare { background: linear-gradient(180deg, #fff5d8, #e8d5a8); border-color: var(--gold); }
.l520-item.rare::before, .l520-item.rare::after { border-color: var(--burgundy); }
.l520-item.rare .ribbon {
  position: absolute;
  top: 3px; left: 3px;
  background: var(--burgundy-grad);
  color: var(--gold-light);
  font-family: 'Cinzel', serif;
  font-size: 7.5px;
  letter-spacing: 1px;
  padding: 1px 4px;
  border-radius: 1px;
  border: 0.5px solid var(--gold);
}
.l520-item.used::after { content: '✓'; position: absolute; inset: 0; background: rgba(255,248,236,0.85); display: grid; place-items: center; color: var(--gold-deep); font-size: 18px; font-family: 'Cinzel', serif; border: none; width: auto; height: auto; }

/* ===== Letter ===== */
.l520-letter-stage {
  flex: 1; overflow-y: auto;
  /* in-flow 自吃刘海 + home 条让位 */
  padding: calc(14px + var(--safe-top)) 18px calc(18px + var(--safe-bottom));
  position: relative; z-index: 5;
}
.l520-letter-paper {
  position: relative;
  background: linear-gradient(180deg, #fffefb 0%, #fbf6ec 100%);
  border-radius: 4px;
  padding: 32px 26px 28px;
  box-shadow:
    0 12px 32px rgba(160,120,90,0.12),
    0 0 0 1px rgba(212,177,106,0.45),
    0 0 0 4px #fffaf0,
    0 0 0 5px rgba(212,177,106,0.35);
  background-image: repeating-linear-gradient(transparent, transparent 28px, rgba(184,146,63,0.035) 28px, rgba(184,146,63,0.035) 29px);
}
.l520-letter-paper::before, .l520-letter-paper::after,
.l520-letter-paper .lp-tl, .l520-letter-paper .lp-tr {
  content: '';
  position: absolute;
  width: 16px; height: 16px;
  border: 1px solid rgba(157,107,120,0.55);
}
.l520-letter-paper::before { top: 8px; left: 8px; border-right: none; border-bottom: none; }
.l520-letter-paper::after  { top: 8px; right: 8px; border-left: none; border-bottom: none; }
.l520-letter-paper .lp-tl  { bottom: 8px; left: 8px; border-right: none; border-top: none; }
.l520-letter-paper .lp-tr  { bottom: 8px; right: 8px; border-left: none; border-top: none; }
.l520-letter-header {
  text-align: center;
  margin-bottom: 20px;
}
.l520-letter-eyebrow {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 12px;
  color: #b89460;
  letter-spacing: 4px;
  margin-bottom: 6px;
}
.l520-letter-title {
  font-family: 'Noto Serif SC', serif;
  font-weight: 500;
  font-size: 22px;
  color: #9d6b78;
  letter-spacing: 8px;
  text-indent: 8px;
  margin: 4px 0 10px;
}
.l520-letter-divider {
  color: rgba(184,146,63,0.7);
  font-size: 12px;
  letter-spacing: 10px;
}
.l520-letter-body {
  font-family: 'Noto Serif SC', serif;
  font-size: 14.5px;
  line-height: 2.1;
  color: #5a4a40;
  letter-spacing: 0.6px;
  text-indent: 2em;
  white-space: pre-wrap;
  margin-bottom: 24px;
}
.l520-letter-foot {
  text-align: right;
  padding-top: 8px;
  border-top: 0.5px dashed rgba(184,146,63,0.25);
}
.l520-letter-flourish {
  color: rgba(184,146,63,0.7);
  font-size: 12px;
  letter-spacing: 6px;
  margin: 6px 0 8px;
}
.l520-letter-signature {
  font-family: 'Noto Serif SC', serif;
  font-size: 14px;
  color: #9d6b78;
  letter-spacing: 4px;
  text-indent: 4px;
  margin-bottom: 8px;
}
.l520-letter-seal {
  display: inline-block;
  width: 36px; height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c89aa5 0%, #9d6b78 70%, #7d5460 100%);
  color: #fff5e8;
  line-height: 36px;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 3px 6px rgba(125,84,96,0.25), inset 0 1px 0 rgba(255,255,255,0.22);
  transform: rotate(-8deg);
  border: 1px solid rgba(212,177,106,0.6);
}
.l520-letter-accept {
  display: block;
  margin: 16px auto 8px;
  padding: 11px 30px;
  background: linear-gradient(135deg, #c89aa5 0%, #9d6b78 70%, #7d5460 100%);
  color: #fffaf0;
  font-family: 'Noto Serif SC', serif;
  font-size: 13.5px;
  letter-spacing: 4px;
  text-indent: 4px;
  border: 1px solid rgba(212,177,106,0.6);
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0 5px 12px rgba(125,84,96,0.22), inset 0 1px 0 rgba(255,255,255,0.18);
  transition: transform .15s ease;
  position: relative;
}
.l520-letter-accept:active { transform: translateY(2px); }
.l520-letter-accept::before, .l520-letter-accept::after {
  content: '';
  position: absolute;
  width: 6px; height: 6px;
}
.l520-letter-accept::before { top: 3px; left: 3px; border-top: 1px solid var(--gold-light); border-left: 1px solid var(--gold-light); }
.l520-letter-accept::after  { bottom: 3px; right: 3px; border-bottom: 1px solid var(--gold-light); border-right: 1px solid var(--gold-light); }
`,Po=()=>n.jsx("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",children:n.jsxs("g",{stroke:"#b8923f",strokeWidth:"0.8",fill:"none",children:[n.jsx("path",{d:"M4 4 L4 22 M4 4 L22 4",strokeWidth:"1.2"}),n.jsx("path",{d:"M4 4 C 14 4, 22 12, 22 22"}),n.jsx("path",{d:"M8 8 C 14 8, 18 12, 18 18",opacity:"0.5"}),n.jsx("circle",{cx:"22",cy:"22",r:"2.2",fill:"#d4b16a",stroke:"none"}),n.jsx("circle",{cx:"22",cy:"22",r:"1",fill:"#fff8ec",stroke:"none"}),n.jsx("path",{d:"M16 4 L20 4 M4 16 L4 20",stroke:"#d4b16a",strokeWidth:"0.5"})]})}),Kn=()=>n.jsx("style",{dangerouslySetInnerHTML:{__html:uh}}),Vn=()=>n.jsxs("div",{className:"l520-ornaments",children:[[...Array(10)].map((e,t)=>n.jsx("span",{className:"l520-sparkle",style:{left:`${Math.random()*95}%`,top:`${Math.random()*75}%`,animationDelay:`${Math.random()*4}s`,width:`${3+Math.random()*5}px`,height:`${3+Math.random()*5}px`}},`s${t}`)),n.jsx("span",{className:"l520-flourish",style:{left:"8%",top:"15%",fontSize:60},children:"❦"}),n.jsx("span",{className:"l520-flourish",style:{left:"88%",top:"45%",fontSize:40},children:"❀"})]}),Yn=()=>n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"l520-corner tl",children:n.jsx(Po,{})}),n.jsx("span",{className:"l520-corner tr",children:n.jsx(Po,{})}),n.jsx("span",{className:"l520-corner bl",children:n.jsx(Po,{})}),n.jsx("span",{className:"l520-corner br",children:n.jsx(Po,{})})]}),Xr=({charName:e,text:t,children:s,onAdvance:o,showArrow:a,arrowText:r="— next —",pageInfo:c,tall:i})=>n.jsxs("div",{className:`l520-dialog ${i?"tall":""} ${o?"clickable":""}`,onClick:l=>{o&&(l.stopPropagation(),o())},children:[n.jsx("span",{className:"corner-tl"}),n.jsx("span",{className:"corner-tr"}),n.jsx("div",{className:"speaker",children:e}),c&&n.jsx("div",{className:"pageinfo",children:c}),s,t!==void 0&&n.jsx("div",{className:"body-text",children:t}),a&&n.jsx("span",{className:"next-arrow",children:r})]}),ph=["I","II","III","IV","V","VI","VII","VIII"],za=({title:e,sub:t,options:s,onPick:o})=>n.jsx("div",{className:"l520-mask",children:n.jsxs("div",{className:"l520-choice-card",children:[n.jsx("span",{className:"cc-tl"}),n.jsx("span",{className:"cc-tr"}),n.jsxs("div",{className:"l520-choice-head",children:[n.jsx("div",{className:"ornament",children:"❦ ⸙ ❦"}),n.jsx("h3",{children:e}),t&&n.jsx("div",{className:"sub",children:t})]}),s.map((a,r)=>n.jsxs("button",{className:"l520-choice-row",onClick:()=>o(a.key),children:[n.jsx("span",{className:"num",children:ph[r]||String(r+1)}),n.jsx("span",{className:"text",children:a.label})]},a.key))]})}),mh=({sceneText:e,userAction:t,onDismiss:s})=>{const[o,a]=h.useState(0);h.useEffect(()=>{const i=setTimeout(()=>a(1),250),l=setTimeout(()=>a(2),1200);return()=>{clearTimeout(i),clearTimeout(l)}},[]);const{caption:r,wishLine:c}=h.useMemo(()=>{const i=e.match(/[:：][\s]*[「『"""]?([^」』"""]+?)[」』"""]?\s*$/);if(i&&i[1]&&i[1].length>4)return{caption:e.slice(0,e.lastIndexOf(i[0])).trim(),wishLine:i[1].trim()};const l=e.match(/[—\-]{1,2}\s*([^—\-]{6,})$/);return l&&l[1]?{caption:e.slice(0,e.lastIndexOf(l[0])).trim(),wishLine:l[1].trim()}:{caption:"",wishLine:e}},[e]);return n.jsxs("div",{onClick:s,style:{position:"absolute",inset:0,zIndex:9998,display:"flex",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at center, rgba(40,20,30,0.72) 0%, rgba(20,10,15,0.86) 100%)",backdropFilter:"blur(2px)",cursor:"pointer",padding:20,opacity:o>=1?1:0,transition:"opacity 0.4s ease-out"},children:[n.jsx("style",{children:`
                @keyframes l520-wish-unfold {
                    0%   { transform: scale(0.18) rotate(-14deg) translateY(40px); opacity: 0; }
                    35%  { transform: scale(0.62) rotate(-6deg) translateY(20px); opacity: 1; }
                    65%  { transform: scale(1.04) rotate(-1deg) translateY(0); }
                    100% { transform: scale(1) rotate(-1.6deg) translateY(0); opacity: 1; }
                }
                @keyframes l520-wish-text-in {
                    from { opacity: 0; letter-spacing: 8px; filter: blur(4px); }
                    to   { opacity: 1; letter-spacing: 2.5px; filter: blur(0); }
                }
                @keyframes l520-wish-caption-in {
                    from { opacity: 0; transform: translateY(-6px); }
                    to   { opacity: 0.85; transform: translateY(0); }
                }
                .l520-wish-paper {
                    position: relative;
                    width: min(86vw, 380px);
                    max-height: min(78vh, 540px);
                    padding: 38px 32px 44px;
                    background:
                        linear-gradient(176deg, #fffdf4 0%, #fdf5e0 55%, #f6e9c8 100%);
                    box-shadow:
                        0 18px 50px rgba(0,0,0,0.45),
                        0 4px 12px rgba(122,46,58,0.18),
                        inset 0 0 0 1px rgba(184,146,63,0.25);
                    border-radius: 4px;
                    transform: rotate(-1.6deg);
                    animation: l520-wish-unfold 0.95s cubic-bezier(0.22, 1.1, 0.36, 1) both;
                    display: flex;
                    flex-direction: column;
                }
                .l520-wish-scroll {
                    overflow-y: auto;
                    overflow-x: hidden;
                    flex: 1;
                    min-height: 0;
                    /* 隐藏 webkit 滚动条 */
                    scrollbar-width: thin;
                    scrollbar-color: rgba(184,146,63,0.4) transparent;
                }
                .l520-wish-scroll::-webkit-scrollbar { width: 4px; }
                .l520-wish-scroll::-webkit-scrollbar-thumb { background: rgba(184,146,63,0.35); border-radius: 2px; }
                /* 四角小金线装饰 */
                .l520-wish-paper .corner {
                    position: absolute;
                    width: 14px; height: 14px;
                    border: 0.5px solid rgba(184,146,63,0.6);
                }
                .l520-wish-paper .corner.tl { top: 8px; left: 8px; border-right: none; border-bottom: none; }
                .l520-wish-paper .corner.tr { top: 8px; right: 8px; border-left: none; border-bottom: none; }
                .l520-wish-paper .corner.bl { bottom: 8px; left: 8px; border-right: none; border-top: none; }
                .l520-wish-paper .corner.br { bottom: 8px; right: 8px; border-left: none; border-top: none; }
                .l520-wish-eyebrow {
                    text-align: center;
                    font-family: 'Cormorant Garamond', serif;
                    font-style: italic;
                    font-size: 10px;
                    letter-spacing: 8px;
                    color: rgba(122,46,58,0.65);
                    margin-bottom: 14px;
                    text-transform: uppercase;
                }
                .l520-wish-caption {
                    font-family: 'Noto Serif SC', serif;
                    font-size: 11.5px;
                    color: rgba(92,58,74,0.78);
                    line-height: 1.9;
                    text-align: center;
                    margin-bottom: 18px;
                    letter-spacing: 0.5px;
                    opacity: 0;
                    animation: l520-wish-caption-in 0.5s ease-out 0.7s forwards;
                }
                .l520-wish-divider {
                    text-align: center;
                    color: rgba(184,146,63,0.6);
                    font-size: 10px;
                    letter-spacing: 10px;
                    margin: 14px 0 18px;
                }
                .l520-wish-line {
                    font-family: 'Noto Serif SC', serif;
                    font-weight: 500;
                    font-size: clamp(13px, 4.2vw, 17px);
                    line-height: 2;
                    color: #5a2230;
                    text-align: center;
                    letter-spacing: 1.6px;
                    text-indent: 1.6px;
                    opacity: 0;
                    animation: l520-wish-text-in 1.4s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
                    white-space: pre-wrap;
                    word-break: break-word;
                    overflow-wrap: break-word;
                    padding: 0 2px;
                }
                .l520-wish-line.long {
                    font-size: clamp(12px, 3.6vw, 15px);
                    line-height: 1.85;
                    letter-spacing: 1.2px;
                    text-align: left;
                    text-indent: 2em;
                }
                .l520-wish-action {
                    position: absolute;
                    top: -32px;
                    left: 0; right: 0;
                    text-align: center;
                    font-family: 'Cormorant Garamond', serif;
                    font-style: italic;
                    font-size: 11px;
                    letter-spacing: 3px;
                    color: rgba(255,236,212,0.7);
                    opacity: 0;
                    animation: l520-wish-caption-in 0.6s ease-out 0.4s forwards;
                }
                .l520-wish-hint {
                    text-align: center;
                    margin-top: 22px;
                    font-family: 'Cormorant Garamond', serif;
                    font-style: italic;
                    font-size: 10px;
                    letter-spacing: 4px;
                    color: rgba(122,46,58,0.5);
                    opacity: 0;
                    animation: l520-wish-caption-in 0.5s ease-out 2.3s forwards;
                }
            `}),n.jsxs("div",{className:"l520-wish-paper",onClick:i=>i.stopPropagation(),children:[n.jsx("span",{className:"corner tl"}),n.jsx("span",{className:"corner tr"}),n.jsx("span",{className:"corner bl"}),n.jsx("span",{className:"corner br"}),n.jsxs("div",{className:"l520-wish-action",children:["— ",t," —"]}),n.jsx("div",{className:"l520-wish-eyebrow",children:"a small wish"}),n.jsxs("div",{className:"l520-wish-scroll",children:[r&&n.jsx("div",{className:"l520-wish-caption",children:r}),n.jsx("div",{className:"l520-wish-divider",children:"❦ ⸙ ❦"}),n.jsx("div",{className:`l520-wish-line ${c.length>36?"long":""}`,children:c})]}),n.jsx("div",{className:"l520-wish-hint",onClick:s,style:{cursor:"pointer"},children:"— 轻 触 任 意 处 继 续 —"})]})]})},fh=({onDone:e})=>{const[t,s]=h.useState(0),o=h.useRef(e);return o.current=e,h.useEffect(()=>{const a=setTimeout(()=>s(1),500),r=setTimeout(()=>s(2),1600),c=setTimeout(()=>s(3),3e3),i=setTimeout(()=>o.current(),3900);return()=>{clearTimeout(a),clearTimeout(r),clearTimeout(c),clearTimeout(i)}},[]),n.jsxs("div",{onClick:()=>{s(3),setTimeout(e,400)},style:{position:"absolute",inset:0,zIndex:9999,background:"#000",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",opacity:t===3?0:1,transition:"opacity 0.7s ease-out"},children:[n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,background:"#000",height:t===0?"50%":t===1?"46%":"0%",transition:"height 1.1s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"0 6px 24px rgba(0,0,0,0.7)"}}),n.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"#000",height:t===0?"50%":t===1?"46%":"0%",transition:"height 1.1s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"0 -6px 24px rgba(0,0,0,0.7)"}}),n.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at center, rgba(255,228,236,0.35) 0%, rgba(255,182,200,0.18) 30%, transparent 65%)",opacity:t>=1?1:0,transition:"opacity 1.2s ease-in",filter:"blur(8px)"}}),n.jsxs("div",{style:{color:"rgba(255,228,236,0.65)",fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:13,letterSpacing:6,opacity:t===2?1:0,transition:"opacity 0.9s ease-in",textAlign:"center",lineHeight:2},children:[n.jsx("div",{style:{fontSize:10,letterSpacing:10,marginBottom:6},children:"—— 慢慢 ——"}),n.jsx("div",{children:"睁 开 眼 睛"}),n.jsx("div",{style:{fontSize:10,letterSpacing:4,marginTop:12,opacity:.6},children:"（点击跳过）"})]})]})},hh=({onDone:e})=>{const[t,s]=h.useState(0),o=h.useRef(e);return o.current=e,h.useEffect(()=>{const a=setTimeout(()=>s(1),80),r=setTimeout(()=>s(2),1300),c=setTimeout(()=>s(3),2400),i=setTimeout(()=>o.current(),3200);return()=>{clearTimeout(a),clearTimeout(r),clearTimeout(c),clearTimeout(i)}},[]),n.jsxs("div",{style:{position:"absolute",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",background:t>=3?"#000":"transparent",transition:"background 0.7s ease-in"},children:[n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,background:"#000",height:t===0?"0%":t===1?"28%":t===2?"46%":"50%",transition:"height 1.3s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:t>=1?"0 6px 24px rgba(0,0,0,0.6)":"none"}}),n.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"#000",height:t===0?"0%":t===1?"28%":t===2?"46%":"50%",transition:"height 1.3s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:t>=1?"0 -6px 24px rgba(0,0,0,0.6)":"none"}}),n.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at center, rgba(255,228,236,0.35) 0%, rgba(255,182,200,0.12) 30%, transparent 65%)",opacity:t===1?1:t===2?.4:0,transition:"opacity 1.0s ease-out",filter:"blur(8px)",pointerEvents:"none"}}),n.jsxs("div",{style:{color:"rgba(255,228,236,0.7)",fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:13,letterSpacing:6,opacity:t===1||t===2?1:0,transition:"opacity 0.7s ease-in-out",textAlign:"center",lineHeight:2,pointerEvents:"none"},children:[n.jsx("div",{style:{fontSize:10,letterSpacing:10,marginBottom:6},children:"—— 慢慢 ——"}),n.jsx("div",{children:"闭 上 眼 睛"}),n.jsx("div",{style:{fontSize:9,letterSpacing:4,marginTop:14,opacity:.55},children:"see you ~"})]})]})},gh=["（你下意识低头看了看自己——）"],xh=[{key:"eh",label:"「诶？」"},{key:"silence",label:"「……」"},{key:"look",label:"（你仔细看了看）"}],yh=({callA:e,charName:t,charAvatar:s,charChibiUrl:o,onTucaoSelected:a,onComplete:r,initialChosenTucao:c})=>{const i=!!c,[l,d]=h.useState(i?"opening":"eyes_opening"),[u,p]=h.useState(e.opening),[f,g]=h.useState(0),[x,b]=h.useState(new Set),[S,_]=h.useState(null),[I,D]=h.useState(!1),[v,T]=h.useState(null),[Z,G]=h.useState(0),[w,k]=h.useState(!0),[P,W]=h.useState(!1),[Y,ee]=h.useState(!1),[V,q]=h.useState({mood:62,love:48,food:50,energy:78}),ne=h.useRef(null),Ne=h.useRef(null),Ee=x.size>=e.anchors.length,he=u[f],be=f<u.length-1,me=S!==null?e.anchors[S]:null,we=l==="anchor_playing"&&v,de=l==="self_reveal_hint"?"——":t;h.useEffect(()=>{if(l==="free"&&Ee){const U=setTimeout(()=>{p(e.reveal_transition),g(0),d("reveal")},800);return()=>clearTimeout(U)}},[l,Ee,e.reveal_transition]);const y=(U,N,M)=>{const L=Ne.current;if(!L)return;const Ie=["♡","♥","✦","✧","❀","❦","·"];for(let pe=0;pe<M;pe++){const ke=document.createElement("div");ke.className="l520-particle",ke.textContent=Ie[Math.floor(Math.random()*Ie.length)],ke.style.setProperty("--tx",`${Math.random()*140-70}px`),ke.style.setProperty("--rot",`${Math.random()*60-30}deg`),ke.style.left=`${U-7}px`,ke.style.top=`${N-7}px`,ke.style.animationDelay=`${Math.random()*.2}s`,ke.style.fontSize=`${10+Math.random()*10}px`,Math.random()>.6&&(ke.style.color="#b27566"),L.appendChild(ke),setTimeout(()=>ke.remove(),1700)}},ge=(U,N,M)=>{const L=Ne.current;if(!L)return;const Ie=document.createElement("div");Ie.className="l520-react",Ie.textContent=U,Ie.style.left=`${N-40}px`,Ie.style.top=`${M}px`,L.appendChild(Ie),setTimeout(()=>Ie.remove(),1800)},Me=(U,N,M)=>{const L=Ne.current;if(!L)return;const Ie=document.createElement("div");Ie.className="l520-floatscore",Ie.textContent=U,Ie.style.left=`${N-30}px`,Ie.style.top=`${M}px`,L.appendChild(Ie),setTimeout(()=>Ie.remove(),1600)},Ce=()=>{if(I){D(!1);return}if(u.length){if(be){g(U=>U+1);return}l==="opening"?c?(p(e.tucao_responses[c]),g(0),d("tucao_reply")):(d("tucao_choose"),p([]),g(0)):l==="tucao_reply"?(d("free"),p([]),g(0)):l==="anchor_playing"?(S!==null&&b(U=>new Set(U).add(S)),_(null),T(null),D(!1),q(U=>({mood:Math.min(100,U.mood+4+Math.floor(Math.random()*4)),love:Math.min(100,U.love+5+Math.floor(Math.random()*5)),food:Math.min(100,U.food+3+Math.floor(Math.random()*4)),energy:Math.max(0,Math.min(100,U.energy+Math.floor(Math.random()*6)-2))})),d("free"),p([]),g(0)):l==="touch_playing"?(d("free"),p([]),g(0)):l==="reveal"?(p(gh),g(0),d("self_reveal_hint")):l==="self_reveal_hint"&&(p([]),g(0),d("self_reveal_choose"))}},Se=U=>{l==="tucao_choose"&&(a(U),p(e.tucao_responses[U]),g(0),d("tucao_reply"))},Ye=U=>{l!=="free"||x.has(U)||(W(!1),_(U),T(null),d("anchor_action_choose"))},Ke=U=>{if(l!=="anchor_action_choose"||S===null)return;const N=e.anchors[S];T(U),p(N.dialogue),g(0),d("anchor_playing"),N.is_photo_anchor&&D(!0)},ye=U=>{l==="self_reveal_choose"&&r()},se=U=>{if(l!=="free"||e.touch_lines.length===0)return;k(!1),ee(!0),setTimeout(()=>ee(!1),750);const N=ne.current;if(N&&U){const L=N.getBoundingClientRect(),Ie=(U.clientX??L.left+L.width/2)-L.left,pe=(U.clientY??L.top+L.height*.4)-L.top;if(y(Ie,pe,7),(Z+1)%3===0){q(Re=>({...Re,mood:Math.min(100,Re.mood+3),love:Math.min(100,Re.love+2)})),Me("+ 悦 · 情",Ie,pe-40);const Ae=["…心动了","再一次嘛","你的手好温","♡","…嗯"];ge(Ae[Math.floor(Math.random()*Ae.length)],Ie,pe-80)}else q(Ae=>({...Ae,mood:Math.min(100,Ae.mood+1)})),Me("+1",Ie,pe-30)}const M=e.touch_lines[Z%e.touch_lines.length];p([M]),g(0),d("touch_playing"),G(L=>L+1)},ie=l==="tucao_choose"||l==="anchor_action_choose"||l==="self_reveal_choose",$e=e.anchors.length-x.size,ze=()=>l==="tucao_choose"||l==="anchor_action_choose"?"请于上方做出抉择":l==="self_reveal_choose"?"……":l==="free"&&!Ee?`轻拥${t}，或自礼匣中取一件`:"……",te=U=>{var M;if(ie||l==="eyes_opening")return;let N=U.target;for(;N&&N!==U.currentTarget;){if((M=N.dataset)!=null&&M.stopAdvance)return;N=N.parentElement}u.length>0?Ce():l==="free"&&se({clientX:U.clientX,clientY:U.clientY})};return n.jsxs("div",{className:"l520-root",onClick:te,children:[n.jsx(Kn,{}),n.jsx(Yn,{}),n.jsx(Vn,{}),l==="eyes_opening"&&n.jsx(fh,{onDone:()=>d("opening")}),I&&(me==null?void 0:me.is_photo_anchor)&&n.jsx(mh,{sceneText:me.scene,userAction:v||"",onDismiss:()=>D(!1)}),n.jsxs("div",{className:"l520-topbar","data-stop-advance":"1",children:[n.jsxs("div",{className:"l520-header-row",children:[n.jsxs("div",{className:"l520-occasion",children:[n.jsx("span",{className:"num",children:"520"}),n.jsx("span",{style:{fontFamily:"'Noto Serif SC', serif",fontSize:11,letterSpacing:2},children:"限定典藏"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsxs("div",{className:"l520-charpill",children:[s!=null&&s.startsWith("http")||s!=null&&s.startsWith("data:")?n.jsx("img",{src:s,alt:t}):n.jsx("span",{className:"l520-charpill-emoji",children:s||"🌸"}),n.jsx("span",{children:t})]}),n.jsx(td,{})]})]}),n.jsxs("div",{className:"l520-title-strip",children:[n.jsx("span",{className:"line"}),n.jsx("span",{className:"title",children:"Mon Trésor"}),n.jsx("span",{className:"line"})]}),n.jsx("div",{className:"l520-stats",children:[{k:"mood",label:"悦",cls:"mood"},{k:"love",label:"情",cls:"love"},{k:"food",label:"膳",cls:"food"},{k:"energy",label:"神",cls:"energy"}].map(U=>n.jsxs("div",{className:"l520-stat",children:[n.jsx("span",{className:"l520-stat-label",children:U.label}),n.jsxs("div",{className:"l520-bar-wrap",children:[n.jsx("div",{className:`l520-bar ${U.cls}`,children:n.jsx("i",{style:{width:`${V[U.k]}%`}})}),n.jsx("span",{className:"l520-bar-num",children:V[U.k]})]})]},U.k))})]}),n.jsxs("div",{className:"l520-stage",ref:ne,children:[w&&l==="free"&&n.jsx("div",{className:"l520-tap-hint",children:"touch me ♡"}),we&&n.jsx("div",{className:"l520-scene-narration",children:n.jsxs("span",{children:["（",v,"）"]})}),n.jsxs("div",{className:`l520-char-wrap ${Y?"petting":""}`,children:[n.jsxs("div",{className:"l520-nameplate",children:[n.jsx("span",{className:"deco",children:"❦"}),n.jsx("span",{style:{marginLeft:4,marginRight:4},children:t}),n.jsx("span",{className:"deco",children:"❦"})]}),n.jsx("div",{className:"l520-halo"}),n.jsx("div",{className:"l520-ring"}),n.jsx("img",{className:"l520-char-img",src:o,alt:t})]})]}),n.jsx("div",{style:{position:"relative",zIndex:3,paddingTop:4},children:n.jsx(Xr,{charName:de,onAdvance:!ie&&u.length>0?Ce:void 0,showArrow:!ie&&u.length>0,arrowText:l==="self_reveal_hint"&&!be?"— continue —":"— next —",children:he?n.jsx("div",{className:"body-text",children:he}):n.jsxs("div",{className:"body-text hint-text",children:["（",ze(),"）"]})})}),n.jsxs("div",{className:"l520-actions","data-stop-advance":"1",children:[n.jsxs("button",{className:"l520-act",disabled:ie,onClick:()=>{u.length>0?Ce():se()},children:[n.jsx("svg",{viewBox:"0 0 24 24",children:n.jsx("path",{d:"M4 6 C4 5, 5 4, 6 4 L18 4 C19 4, 20 5, 20 6 L20 14 C20 15, 19 16, 18 16 L9 16 L5 19 L5 16 C4.5 16, 4 15.5, 4 15 Z"})}),n.jsx("span",{children:"絮 语"})]}),n.jsxs("button",{className:"l520-act primary",disabled:l!=="free",onClick:U=>se({clientX:U.clientX,clientY:U.clientY}),children:[n.jsx("svg",{viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 20 C 6 16, 3 12, 3 9 C 3 6, 5 4, 7.5 4 C 9.5 4, 11 5, 12 7 C 13 5, 14.5 4, 16.5 4 C 19 4, 21 6, 21 9 C 21 12, 18 16, 12 20 Z"})}),n.jsx("span",{children:"轻 拥"})]}),n.jsxs("button",{className:"l520-act",disabled:l!=="free",onClick:()=>W(!0),children:[n.jsx("svg",{viewBox:"0 0 24 24",children:n.jsx("path",{d:"M3 8 L21 8 L21 20 L3 20 Z M3 8 L12 4 L21 8 M12 4 L12 20 M8 14 L16 14"})}),n.jsx("span",{children:"礼 匣"}),$e>0&&n.jsx("span",{className:"badge",children:$e})]})]}),n.jsx("div",{ref:Ne,style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:7}}),P&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"l520-drawer-mask","data-stop-advance":"1",onClick:U=>{U.stopPropagation(),W(!1)}}),n.jsxs("div",{className:"l520-drawer","data-stop-advance":"1",children:[n.jsx("div",{className:"l520-drawer-handle"}),n.jsxs("div",{className:"l520-drawer-head",children:[n.jsx("h4",{children:"礼 匣"}),n.jsx("div",{className:"sub",children:"L A   B O Î T E   À   T R É S O R"}),n.jsx("div",{className:"line",children:"❦"})]}),n.jsx("div",{className:"l520-items",children:e.anchors.map((U,N)=>{const M=x.has(N);return n.jsxs("button",{className:`l520-item ${U.is_photo_anchor?"rare":""} ${M?"used":""}`,disabled:M,onClick:()=>Ye(N),children:[U.is_photo_anchor&&n.jsx("span",{className:"ribbon",children:"RARE"}),n.jsx("span",{className:"emoji",children:U.item_icon}),n.jsx("span",{className:"label",children:U.item_label})]},N)})})]})]}),l==="tucao_choose"&&n.jsx(za,{title:"今日，你的反应是",sub:"— Choose Thy Reaction —",options:ch.map(U=>({key:U.key,label:`「${U.label}」`})),onPick:U=>Se(U)}),l==="anchor_action_choose"&&me&&n.jsx(za,{title:`你 要 ${me.item_label}`,sub:"— Choose Thy Gesture —",options:me.user_action_options.map((U,N)=>({key:String(N),label:U})),onPick:U=>Ke(me.user_action_options[Number(U)])}),l==="self_reveal_choose"&&n.jsx(za,{title:"你 的 反 应",sub:"— Choose Thy Awakening —",options:xh,onPick:ye})]})},bh=({lines:e,charName:t,onComplete:s})=>{const[o,a]=h.useState("dim"),[r,c]=h.useState(0);h.useEffect(()=>{const u=setTimeout(()=>a("awakening"),1100),p=setTimeout(()=>a("dialog"),3300);return()=>{clearTimeout(u),clearTimeout(p)}},[]);const i=r>=e.length-1,l=()=>{i?s():c(u=>u+1)},d=o==="dim"?"#0e0608":o==="awakening"?"linear-gradient(180deg, #0e0608 0%, #3a1f1a 35%, #b27566 75%, #fde8d4 100%)":"linear-gradient(180deg, #faf3e7 0%, #f5ead4 40%, #f3dcd8 100%)";return n.jsxs("div",{className:"l520-root",style:{background:d,transition:"background 1.8s cubic-bezier(0.4, 0, 0.2, 1)"},children:[n.jsx(Kn,{}),n.jsx("style",{children:`
                @keyframes l520-wake-text-in {
                    0%   { opacity: 0; letter-spacing: 24px; }
                    40%  { opacity: 1; letter-spacing: 10px; }
                    80%  { opacity: 1; letter-spacing: 10px; }
                    100% { opacity: 0; letter-spacing: 14px; }
                }
            `}),o==="awakening"&&n.jsx("div",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",color:"rgba(255, 248, 236, 0.92)",fontFamily:"'Noto Serif SC', serif",fontWeight:300,fontSize:18,letterSpacing:10,textIndent:10,textShadow:"0 0 16px rgba(212, 177, 106, 0.6)",animation:"l520-wake-text-in 2.2s ease-out both",pointerEvents:"none"},children:"醒 · 来"}),o==="dialog"&&n.jsxs(n.Fragment,{children:[n.jsx(Yn,{}),n.jsx(Vn,{}),n.jsx("div",{style:{flex:1}}),n.jsx("div",{style:{position:"relative",zIndex:3,paddingBottom:"calc(28px + var(--safe-bottom))",animation:"l520-fade-in 0.8s ease-out both"},children:n.jsx(Xr,{charName:t,onAdvance:l,showArrow:!0,arrowText:i?"— continue —":"— next —",tall:!0,children:n.jsx("div",{className:"body-text",style:{animation:"l520-fade-in 0.6s ease-out both"},children:e[r]},r)})}),n.jsx("style",{children:`
                        @keyframes l520-fade-in {
                            from { opacity: 0; transform: translateY(8px); }
                            to   { opacity: 1; transform: translateY(0); }
                        }
                    `})]})]})},wh=({lines:e,charName:t,charAvatar:s,charChibi:o,userChibi:a,onComplete:r})=>{const[c,i]=h.useState(0),l=c>=e.length-1;return n.jsxs("div",{className:"l520-root",children:[n.jsx(Kn,{}),n.jsx(Yn,{}),n.jsx(Vn,{}),n.jsx("style",{children:`
                @keyframes l520-userwaddle {
                    0%   { transform: translateX(160%) rotate(0deg); opacity: 0; }
                    20%  { transform: translateX(120%) rotate(-6deg); opacity: 1; }
                    35%  { transform: translateX(80%) rotate(6deg); }
                    50%  { transform: translateX(45%) rotate(-5deg); }
                    65%  { transform: translateX(18%) rotate(4deg); }
                    80%  { transform: translateX(0) rotate(-3deg); }
                    90%  { transform: translateX(0) rotate(2deg); }
                    100% { transform: translateX(0) rotate(0); }
                }
            `}),n.jsx("div",{className:"l520-topbar",style:{paddingBottom:0},children:n.jsxs("div",{className:"l520-header-row",children:[n.jsxs("div",{className:"l520-charpill",children:[s!=null&&s.startsWith("http")||s!=null&&s.startsWith("data:")?n.jsx("img",{src:s,alt:t}):n.jsx("span",{className:"l520-charpill-emoji",children:s||"🌸"}),n.jsx("span",{children:t})]}),n.jsx("div",{style:{flex:1}}),n.jsx(td,{})]})}),n.jsx("div",{className:"l520-stage",style:{paddingBottom:4},children:n.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"center",gap:12,height:"100%",width:"100%"},children:[n.jsx("img",{src:o,alt:"char",style:{maxHeight:"100%",maxWidth:"42%",objectFit:"contain",objectPosition:"bottom",filter:"drop-shadow(0 12px 18px rgba(122,46,58,0.3))"}}),n.jsx("img",{src:a,alt:"user",style:{maxHeight:"100%",maxWidth:"42%",objectFit:"contain",objectPosition:"bottom",filter:"drop-shadow(0 12px 18px rgba(122,46,58,0.3))",animation:"l520-userwaddle 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) both",transformOrigin:"bottom center"}})]})}),n.jsx("div",{style:{position:"relative",zIndex:3,paddingBottom:"calc(18px + var(--safe-bottom))"},children:n.jsx(Xr,{charName:t,onAdvance:()=>{l?r():i(d=>d+1)},showArrow:!0,arrowText:l?"— continue —":"— next —",pageInfo:`${c+1} / ${e.length}`,tall:!0,children:n.jsx("div",{className:"body-text",children:e[c]},c)})})]})},vh=({title:e,description:t,charChibi:s,userChibi:o,onNext:a})=>{const[r,c]=h.useState(0);return h.useEffect(()=>{const i=[600,1400,1100,1600,1300];if(r>=i.length)return;const l=setTimeout(()=>c(d=>d+1),i[r]);return()=>clearTimeout(l)},[r]),n.jsxs("div",{className:"absolute inset-0 bg-black flex flex-col items-center justify-center px-6",children:[r>=1&&n.jsxs("div",{className:"flex items-end justify-center gap-2 mb-8 animate-fade-in",children:[n.jsx("img",{src:s,alt:"char",className:"h-40 object-contain",style:{filter:"drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 3px rgba(255,255,255,0.85))"}}),n.jsx("img",{src:o,alt:"user",className:"h-40 object-contain",style:{filter:"drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 3px rgba(255,255,255,0.85))"}})]}),r>=2&&n.jsx("div",{className:"text-white/85 text-base tracking-wider mb-3 animate-fade-in text-center",children:e}),r>=3&&n.jsx("div",{className:"text-white text-2xl tracking-[6px] font-light mt-2 mb-6 animate-fade-in",children:"TRUE HAPPY END"}),r>=4&&n.jsx("div",{className:"text-white/65 text-sm leading-relaxed mt-4 px-4 text-center animate-fade-in whitespace-pre-wrap",children:t}),r>=5&&n.jsx("button",{onClick:a,className:"mt-10 px-8 py-2.5 rounded-full bg-white/15 backdrop-blur text-white text-sm tracking-widest border border-white/30 active:scale-95 transition-transform animate-fade-in",children:"继 续"})]})},vr=({onClick:e})=>n.jsx("button",{onClick:e,title:"关闭",style:{position:"absolute",top:"calc(10px + var(--safe-top))",right:10,zIndex:50,width:30,height:30,borderRadius:"50%",background:"rgba(255,248,236,0.92)",border:"1px solid #b8923f",color:"#7a2e3a",fontSize:14,fontFamily:"'Cormorant Garamond', serif",cursor:"pointer",boxShadow:"0 2px 6px rgba(122,46,58,0.22)",display:"grid",placeItems:"center",userSelect:"none"},children:"✕"}),_h=({text:e,onNext:t,onClose:s,charName:o,userName:a})=>{const r=h.useRef(null),c=h.useRef(null),[i,l]=h.useState(!1),d=async()=>{var u;if(!i){l(!0);try{const p=window.html2canvas,g=await(p?Promise.resolve(p):new Promise((I,D)=>{const v=document.createElement("script");v.src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",v.onload=()=>I(window.html2canvas),v.onerror=D,document.head.appendChild(v)}));try{await((u=document.fonts)==null?void 0:u.ready)}catch{}const x=c.current;if(!x)return;const S=(await g(x,{backgroundColor:"#fefbf4",scale:2,useCORS:!0})).toDataURL("image/png"),_=document.createElement("a");_.href=S,_.download=`520_letter_${Date.now()}.png`,_.click()}catch(p){console.error("[520] letter save failed",p)}finally{l(!1)}}};return n.jsxs("div",{className:"l520-root",children:[n.jsx(Kn,{}),n.jsx(Yn,{}),n.jsx(Vn,{}),n.jsxs("div",{className:"l520-letter-stage",children:[n.jsxs("div",{ref:c,style:{position:"relative",padding:"28px 22px",background:"linear-gradient(180deg, #fefbf4 0%, #f9f2e1 60%, #f1e7d0 100%)",borderRadius:6,boxShadow:"inset 0 0 50px rgba(157,107,120,0.06), inset 0 0 0 1px rgba(212,177,106,0.32)"},children:[n.jsxs("div",{className:"l520-letter-paper",ref:r,children:[n.jsx("span",{className:"lp-tl"}),n.jsx("span",{className:"lp-tr"}),n.jsxs("div",{className:"l520-letter-header",children:[n.jsx("div",{className:"l520-letter-eyebrow",children:"致 · 我的"}),n.jsx("div",{className:"l520-letter-title",children:a}),n.jsx("div",{className:"l520-letter-divider",children:"❦ ⸙ ❦"})]}),n.jsx("div",{className:"l520-letter-body",children:e}),n.jsxs("div",{className:"l520-letter-foot",children:[n.jsx("div",{className:"l520-letter-flourish",children:"~ ❦ ~"}),n.jsxs("div",{className:"l520-letter-signature",children:["— ",o]}),n.jsx("div",{className:"l520-letter-seal",children:"♡"})]})]}),n.jsx("div",{style:{position:"absolute",top:8,left:8,right:8,bottom:8,pointerEvents:"none",border:"0.5px solid rgba(212,177,106,0.42)",borderRadius:3}}),n.jsx("div",{style:{position:"absolute",bottom:6,left:0,right:0,textAlign:"center",fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:9,letterSpacing:6,color:"rgba(157,107,120,0.5)"},children:"— 5 · 20 · MMXXVI —"})]}),n.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",marginTop:16},children:[n.jsx("button",{onClick:d,disabled:i,style:{padding:"9px 18px",background:"linear-gradient(180deg, #fffefb, #f7eedb)",color:"#9d6b78",fontFamily:"'Noto Serif SC', serif",fontSize:12,letterSpacing:3,textIndent:3,border:"1px solid rgba(212,177,106,0.65)",borderRadius:2,cursor:i?"wait":"pointer",opacity:i?.6:1,boxShadow:"0 3px 8px rgba(157,107,120,0.12)"},children:i?"⏳ 出件中…":"存 为 图 片"}),n.jsx("button",{className:"l520-letter-accept",onClick:t,style:{margin:0},children:"收 下"})]})]})]})},Sh="https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/img/2.png";async function Ql(e,t){const s=T=>new Promise((Z,G)=>{const w=new Image;w.crossOrigin="anonymous",w.onload=()=>Z(w),w.onerror=G,w.src=T}),[o,a,r]=await Promise.all([s(Sh),s(e),s(t)]),c=document.createElement("canvas");c.width=o.naturalWidth||1200,c.height=o.naturalHeight||780;const i=c.getContext("2d");if(!i)throw new Error("no canvas ctx");i.drawImage(o,0,0,c.width,c.height);const l=c.height*.55,d=l/(a.naturalHeight||1),u=l/(r.naturalHeight||1),p=(a.naturalWidth||1)*d,f=(r.naturalWidth||1)*u,g=c.width*.01,x=p+f+g,b=(c.width-x)/2,S=c.height*.94,_=b,I=b+p+g,D=S-l,v=(T,Z,G,w,k)=>{i.shadowColor="rgba(255,255,255,0.95)",i.shadowOffsetX=0,i.shadowOffsetY=0;for(const P of[3,3,5])i.shadowBlur=P,i.drawImage(T,Z,G,w,k);i.shadowColor="rgba(255,228,236,0.55)",i.shadowBlur=14,i.drawImage(T,Z,G,w,k),i.shadowColor="transparent",i.shadowBlur=0,i.shadowOffsetX=0,i.shadowOffsetY=0,i.drawImage(T,Z,G,w,k)};return v(a,_,D,p,l),v(r,I,D,f,l),c.toDataURL("image/png")}const kh=({charChibi:e,userChibi:t,title:s,onDone:o,onClose:a})=>{const[r,c]=h.useState(null),[i,l]=h.useState(!0);return h.useEffect(()=>{let d=!1;return Ql(e,t).then(u=>{d||(c(u),l(!1))}).catch(u=>{console.error("[520] compose puzzle failed",u),d||l(!1)}),()=>{d=!0}},[e,t]),n.jsxs("div",{className:"l520-root",children:[n.jsx(Kn,{}),n.jsx(Yn,{}),n.jsx(Vn,{}),n.jsx(vr,{onClick:a}),n.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"calc(24px + var(--safe-top)) 16px calc(24px + var(--safe-bottom))",position:"relative",zIndex:5,display:"flex",flexDirection:"column",alignItems:"center",maxWidth:420,margin:"0 auto"},children:[n.jsx("div",{style:{color:"#7a2e3a",fontFamily:"'Noto Serif SC', serif",fontSize:13,letterSpacing:5,marginBottom:4},children:"♥ 拼 图 卡 片 ♥"}),n.jsx("div",{style:{color:"#9D7585",fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:11,letterSpacing:3,marginBottom:14},children:s}),r?n.jsx("img",{src:r,alt:"合照",draggable:!1,style:{width:"100%",display:"block",borderRadius:16,boxShadow:"0 12px 32px rgba(199, 97, 130, 0.22), 0 0 0 1px rgba(184, 146, 63, 0.4)"}}):n.jsx("div",{style:{width:"100%",aspectRatio:"1200 / 780",borderRadius:16,background:"linear-gradient(180deg, #FFE0E8, #FFD3DC)",display:"grid",placeItems:"center",color:"#9D7585",fontSize:11,letterSpacing:4},children:i?"正在合成…":"合成失败"}),n.jsx("div",{style:{color:"#9D7585",fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:10.5,letterSpacing:2,marginTop:6},children:"长按图片保存到相册"}),n.jsx("div",{style:{color:"#5C3A4A",fontStyle:"italic",fontSize:13,marginTop:14,textAlign:"center"},children:"「这很像我们耶。」"}),n.jsx("button",{onClick:o,style:{marginTop:22,padding:"11px 32px",borderRadius:9999,background:"linear-gradient(90deg, #FFB6C8, #F18AAA)",color:"#fff",fontWeight:700,border:"none",boxShadow:"0 6px 14px rgba(199,97,130,0.35)",cursor:"pointer"},children:"完成 ♥"})]})]})},jh=({charName:e,charAvatar:t,userName:s,charChibi:o,userChibi:a,onClose:r})=>{const[c]=h.useState(()=>Date.now()),[i,l]=h.useState(!1),d=()=>{i||l(!0)};return n.jsxs("div",{className:"absolute inset-0 overflow-hidden",style:{background:"radial-gradient(ellipse at 50% 30%, #FFE8EF 0%, #FFD7E1 45%, #F5B8C9 100%)"},children:[i&&n.jsx(hh,{onDone:r}),n.jsx("style",{children:`
                @keyframes l520-done-float {
                    0% { transform: translateY(20vh) translateX(0) scale(0.6); opacity: 0; }
                    20% { opacity: 0.8; }
                    100% { transform: translateY(-110vh) translateX(var(--dx, 0)) scale(1); opacity: 0; }
                }
                @keyframes l520-done-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.06); }
                }
                @keyframes l520-done-shimmer {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
                @keyframes l520-done-fadein {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .l520-done-heart {
                    position: absolute;
                    bottom: -10vh;
                    font-size: 14px;
                    animation: l520-done-float linear infinite;
                    pointer-events: none;
                }
            `}),Array.from({length:14}).map((u,p)=>{const f=(p*7.3+5)%95,g=p*.85%9,x=11+p%5*1.5,b=12+p%4*6,S=(p%3-1)*30,_=["#F18AAA","#FFB6C8","#FFC8D2","#E893B0"];return n.jsx("span",{className:"l520-done-heart",style:{left:`${f}%`,animationDelay:`${g}s`,animationDuration:`${x}s`,fontSize:b,color:_[p%_.length],"--dx":`${S}px`},children:"♥"},`${c}-${p}`)}),n.jsxs("div",{className:"relative flex flex-col items-center justify-center min-h-full px-6 py-12 max-w-md mx-auto",style:{animation:"l520-done-fadein 0.8s ease-out"},children:[n.jsxs("div",{className:"flex items-end justify-center gap-2 mb-5",style:{animation:"l520-done-pulse 3.5s ease-in-out infinite"},children:[o?n.jsx("img",{src:o,alt:"",style:{height:110,objectFit:"contain",filter:"drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 3px rgba(255,255,255,0.85)) drop-shadow(0 6px 12px rgba(199,97,130,0.35))"}}):t?n.jsx("img",{src:t,alt:"",style:{width:80,height:80,borderRadius:"50%",objectFit:"cover",boxShadow:"0 6px 14px rgba(199,97,130,0.3)"}}):null,a&&n.jsx("img",{src:a,alt:"",style:{height:110,objectFit:"contain",filter:"drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 3px rgba(255,255,255,0.85)) drop-shadow(0 6px 12px rgba(199,97,130,0.35))"}})]}),n.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:12,letterSpacing:8,color:"#C76182",marginBottom:6,textTransform:"uppercase",animation:"l520-done-shimmer 2.4s ease-in-out infinite"},children:"a dream like this"}),n.jsx("h2",{style:{fontFamily:"'Noto Serif SC', serif",fontSize:22,fontWeight:600,color:"#7A2E3A",letterSpacing:4,textIndent:4,marginBottom:14},children:"感觉做了一场不错的梦"}),n.jsx("div",{style:{background:"rgba(255,255,255,0.55)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,0.7)",borderRadius:18,padding:"14px 18px",marginBottom:22,maxWidth:320,boxShadow:"0 8px 24px rgba(199,97,130,0.18)"},children:n.jsxs("p",{style:{fontFamily:"'Noto Serif SC', serif",fontSize:13.5,lineHeight:2,color:"#5C3A4A",textAlign:"center",margin:0,letterSpacing:.5},children:["醒过来之后，",n.jsx("br",{}),"身上还带着一点 ta 的温度。",n.jsx("br",{}),"——好像 ta 还在看着。"]})}),n.jsx("div",{style:{fontSize:9,letterSpacing:10,color:"#C76182",marginBottom:22,opacity:.75},children:"❦   TRUE HAPPY END   ❦"}),n.jsx("button",{onClick:d,disabled:i,style:{padding:"12px 38px",borderRadius:9999,background:"linear-gradient(90deg, #FFB6C8, #F18AAA)",color:"#fff",fontWeight:700,border:"none",boxShadow:"0 8px 18px rgba(199,97,130,0.35)",cursor:"pointer",fontSize:14,letterSpacing:4,textIndent:4},children:"回到日常"}),n.jsx("div",{style:{marginTop:10,fontSize:10,color:"#9D7585",letterSpacing:1},children:"ta 一直在的 ♥"})]})]})},xc=({hint:e})=>n.jsxs("div",{className:"flex flex-col items-center justify-center min-h-full px-6 py-12 max-w-md mx-auto",children:[n.jsx("div",{className:"text-2xl mb-4 animate-pulse",children:"♥"}),n.jsx("div",{className:"text-[#9D7585] text-xs tracking-widest",children:e??"正在准备这个下午…"})]}),_r={nieren:["https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/nieren/1.mp3","https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/nieren/2.mp3"],yangcheng:["https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/yangcheng/1.mp3","https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/yangcheng/2.mp3","https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/yangcheng/3.mp3","https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/yangcheng/4.mp3"],jieju:["https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/jiejuhezhao/1.mp3","https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/jiejuhezhao/2.mp3","https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/jiejuhezhao/3.mp3"],letter:["https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/letter/1.mp3","https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/letter/2.mp3","https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/letter/3.mp3","https://cdn.jsdelivr.net/gh/qegj567-cloud/SullyOS-assets@main/bgm/letter/4.mp3"]},yc="sullyos_like520_bgm_muted",bc=.35,$h=1200,Ih=e=>{switch(e){case"char_creator":case"user_creator":return"nieren";case"loading_a":case"yangcheng":return"yangcheng";case"uncovered_line":case"ending_screen":case"loading_b":case"wake_up":case"puzzle":return"jieju";case"letter":case"done":return"letter";default:return null}};function Nh(e){return!e||e.length===0?null:e[Math.floor(Math.random()*e.length)]}function Ah(e,t){const[s,o]=h.useState(()=>{try{return localStorage.getItem(yc)==="1"}catch{return!1}}),a=h.useRef({}),r=h.useRef(new Map),c=h.useRef(s);c.current=s;const i=h.useCallback((d,u,p=$h)=>{const f=r.current.get(d);f&&(clearInterval(f),r.current.delete(d));const g=12,x=p/g,b=d.volume,S=u-b;let _=0;const I=window.setInterval(()=>{_++,d.volume=Math.max(0,Math.min(1,b+S*_/g)),_>=g&&(clearInterval(I),r.current.delete(d),u===0&&!d.paused&&d.pause())},x);r.current.set(d,I)},[]);h.useEffect(()=>{if(e&&!(Object.keys(a.current).length>0))return console.log("[520][BGM] init | muted=",c.current,"| HAS_BGM=",ed),Object.keys(_r).forEach(d=>{const u=Nh(_r[d]);if(u)try{const p=new Audio;p.loop=!0,p.volume=0,p.preload="auto",p.addEventListener("error",()=>{var f;return console.warn(`[520][BGM] ${d} audio error`,(f=p.error)==null?void 0:f.code,p.src)}),p.addEventListener("canplay",()=>console.log(`[520][BGM] ${d} canplay`)),p.src=u,p.load(),a.current[d]=p,console.log(`[520][BGM] ${d} → ${u}`)}catch(p){console.warn(`[520][BGM] failed to init ${d}:`,p)}}),()=>{r.current.forEach(d=>clearInterval(d)),r.current.clear(),Object.values(a.current).forEach(d=>{if(d)try{d.pause(),d.src=""}catch{}}),a.current={}}},[e]),h.useEffect(()=>{if(!e)return;const d=c.current?0:bc;let u=!1;const p=(f,g)=>{f.play().then(()=>{i(f,d)}).catch(x=>{console.warn(`[520][BGM] play ${g} failed:`,(x==null?void 0:x.name)||x),(x==null?void 0:x.name)==="NotAllowedError"&&(u=!0)})};if(Object.keys(a.current).forEach(f=>{const g=a.current[f];g&&(f===t?g.paused?p(g,f):i(g,d):g.paused||i(g,0))}),u&&t){const f=()=>{const g=a.current[t];g&&g.paused&&p(g,t),document.removeEventListener("pointerdown",f),document.removeEventListener("keydown",f)};return document.addEventListener("pointerdown",f,{once:!0,passive:!0}),document.addEventListener("keydown",f,{once:!0}),()=>{document.removeEventListener("pointerdown",f),document.removeEventListener("keydown",f)}}},[t,e,i]),h.useEffect(()=>{try{localStorage.setItem(yc,s?"1":"0")}catch{}e&&Object.keys(a.current).forEach(d=>{const u=a.current[d];if(u&&d===t){const p=s?0:bc;s?i(u,0,500):(u.paused&&u.play().catch(()=>{}),i(u,p,500))}})},[s,e,t,i]);const l=h.useCallback(()=>o(d=>!d),[]);return{muted:s,toggleMute:l}}const Zl=ls.createContext(null),ed=Object.values(_r).some(e=>e&&e.length>0),Xa="sullyos_like520_bgm_hint_dismissed",td=()=>{const e=ls.useContext(Zl),[t,s]=h.useState(()=>{try{return localStorage.getItem(Xa)!=="1"}catch{return!0}});if(h.useEffect(()=>{if(!t)return;const c=setTimeout(()=>{s(!1);try{localStorage.setItem(Xa,"1")}catch{}},5500);return()=>clearTimeout(c)},[t]),!e||!ed)return null;const{muted:o,toggleMute:a}=e,r=()=>{if(t){s(!1);try{localStorage.setItem(Xa,"1")}catch{}}a()};return n.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[n.jsx("button",{onClick:r,title:o?"播放 BGM":"静音",style:{background:o?"linear-gradient(180deg, rgba(255,248,236,0.95), rgba(245,234,212,0.85))":"linear-gradient(135deg, #f4e0a8 0%, #d4b16a 35%, #b8923f 65%, #8b6914 100%)",color:o?"#8b6914":"#fff8ec",border:"1px solid #b8923f",borderRadius:"50%",width:28,height:28,display:"inline-grid",placeItems:"center",fontSize:13,cursor:"pointer",fontFamily:"'Cormorant Garamond', serif",boxShadow:t?"0 0 0 3px rgba(212,177,106,0.45), 0 4px 12px rgba(122,46,58,0.3), inset 0 1px 0 rgba(255,255,255,0.4)":"0 2px 6px rgba(122,46,58,0.25), inset 0 1px 0 rgba(255,255,255,0.4)",userSelect:"none",animation:t?"l520-bgm-hint-pulse 1.6s ease-in-out infinite":"none"},children:o?"🔇":"♪"}),t&&n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
                        @keyframes l520-bgm-hint-pulse {
                            0%,100% { box-shadow: 0 0 0 3px rgba(212,177,106,0.45), 0 4px 12px rgba(122,46,58,0.3), inset 0 1px 0 rgba(255,255,255,0.4); }
                            50%     { box-shadow: 0 0 0 7px rgba(212,177,106,0.18), 0 6px 16px rgba(122,46,58,0.35), inset 0 1px 0 rgba(255,255,255,0.4); }
                        }
                        @keyframes l520-bgm-tip-in {
                            0%   { opacity: 0; transform: translateY(-4px); }
                            18%  { opacity: 1; transform: translateY(0); }
                            82%  { opacity: 1; transform: translateY(0); }
                            100% { opacity: 0; transform: translateY(-4px); }
                        }
                    `}),n.jsx("div",{style:{position:"absolute",top:"calc(100% + 6px)",right:0,zIndex:30,background:"rgba(255,248,236,0.97)",color:"#7a2e3a",border:"1px solid #b8923f",borderRadius:"4px 4px 4px 14px",padding:"5px 10px",fontSize:10.5,fontFamily:"'Cormorant Garamond', 'Noto Serif SC', serif",fontStyle:"italic",letterSpacing:"1px",whiteSpace:"nowrap",boxShadow:"0 4px 10px rgba(122,46,58,0.25)",animation:"l520-bgm-tip-in 5.5s ease-in-out forwards",pointerEvents:"none"},children:"♪ 这里有音乐 · 嫌吵就点 ↑"})]})]})},Ch=({charId:e,onClose:t})=>{var de;const{characters:s,userProfile:o,apiConfig:a,updateCharacter:r,addToast:c}=ds(),i=s.find(y=>y.id===e),l=(de=i==null?void 0:i.specialMomentRecords)==null?void 0:de[Wa],d=l==null?void 0:l.customData,u=!!(d&&d.callA&&d.callB),[p,f]=h.useState(u?null:"fresh"),[g,x]=h.useState("intro"),[b,S]=h.useState(""),_=p!==null&&g!=="intro"&&g!=="error",I=Ih(g),D=Ah(_,I),[v,T]=h.useState(null),[Z,G]=h.useState(null),[w,k]=h.useState(null),[P,W]=h.useState(null),[Y,ee]=h.useState(null),V=h.useRef(!1),q=h.useRef(!1);h.useEffect(()=>{if(!p||!d||p==="fresh")return;const y=ge=>({dataUrl:ge.dataUrl,frameDataUrl:ge.dataUrl,transparentDataUrl:ge.dataUrl,state:ge.state});k(d.callA),W(d.callB),ee(d.chosenTucao),T(y(d.charChibi)),G(y(d.userChibi)),V.current=!0,q.current=!0,x(p==="skip-to-letter"?"letter":"yangcheng")},[p,d]);const ne=h.useCallback(async()=>{if(!(V.current||!i||!a)){V.current=!0;try{const y=await $.getMessagesByCharId(i.id),ge=await nh(i,o,a,y||[]);k(ge)}catch(y){console.error("[520] Call A failed:",y),S(`生成剧本失败：${(y==null?void 0:y.message)||"请重试"}`),x("error")}}},[i,o,a]),Ne=h.useCallback(async(y,ge)=>{if(!(q.current||!i||!a)){q.current=!0;try{const Me=await $.getMessagesByCharId(i.id),Ce=await oh(i,o,a,y,ge,Me||[]);W(Ce)}catch(Me){console.error("[520] Call B failed:",Me),W({wake_up:["……我们好像一起做了一个梦呀。","不过，不是坏的那种。"],letter:"（信生成出了点小问题。这是一段属于你的、未完成的话——但它一直在。）"})}}},[i,o,a]),Ee=h.useCallback(y=>{T(y),x(w?"yangcheng":"loading_a")},[w]),he=h.useCallback(y=>{G(y),x("uncovered_line")},[]);h.useEffect(()=>{g==="loading_a"&&w&&x("yangcheng")},[g,w]),h.useEffect(()=>{w&&Y&&!q.current&&Ne(w,Y)},[w,Y,Ne]),h.useEffect(()=>{g==="loading_b"&&P&&x("wake_up")},[g,P]);const be=h.useRef(!1),me=h.useCallback(async()=>{if(be.current||p!=="fresh"||!i||!w||!P||!v||!Z||!Y)return;be.current=!0;const y=i.specialMomentRecords||{},ge={content:P.letter,image:v.frameDataUrl,timestamp:Date.now(),source:"generated",customData:{callA:w,callB:P,chosenTucao:Y,charChibi:{dataUrl:v.transparentDataUrl,state:v.state},userChibi:{dataUrl:Z.transparentDataUrl,state:Z.state}}};r(i.id,{specialMomentRecords:{...y,[Wa]:ge}});try{localStorage.setItem(wr,"1")}catch{}try{const Me=o.name||"你",Ce=await Ql(v.transparentDataUrl,Z.transparentDataUrl),Se={type:"like520_card",charName:i.name,charAvatar:i.avatar||"",userName:Me,title:w.ending.title,description:w.ending.description,photoDataUrl:Ce,letter:P.letter,timestamp:Date.now()};await $.saveMessage({charId:i.id,role:"assistant",type:"score_card",content:JSON.stringify(Se),timestamp:Date.now(),metadata:{source:"like520_event",like520Event:!0,scoreCard:Se}})}catch(Me){console.warn("[520] save chat card failed",Me)}},[i,w,P,v,Z,Y,r]);if(!i)return n.jsx("div",{className:"fixed inset-0 z-[9997] flex items-center justify-center bg-[#FFF1E6]",children:n.jsx("div",{className:"text-[#9D7585]",children:"角色不存在"})});if(g==="error")return n.jsxs("div",{className:"fixed inset-0 z-[9997] flex flex-col items-center justify-center bg-[#FFF1E6] px-8",children:[n.jsx("div",{className:"text-[#C76182] mb-3",children:"⚠"}),n.jsx("div",{className:"text-[#5C3A4A] text-sm text-center mb-6",children:b}),n.jsx("button",{onClick:t,className:"px-7 py-2.5 rounded-full bg-white text-[#C76182] text-sm font-bold border border-[#FFB6C8] active:scale-95 transition-transform",children:"关闭"})]});const we="linear-gradient(180deg, #FFF1E6 0%, #FFE4EC 100%)";if(u&&p===null){const y=ge=>{if(ge==="fresh"){const Ce={...i.specialMomentRecords||{}};delete Ce[Wa],r(i.id,{specialMomentRecords:Ce});try{localStorage.removeItem(wr)}catch{}}f(ge)};return n.jsx("div",{className:"fixed inset-0 z-[9997]",children:n.jsxs("div",{className:"l520-root",children:[n.jsx(Kn,{}),n.jsx(Yn,{}),n.jsx(Vn,{}),n.jsx("div",{className:"l520-mask",children:n.jsxs("div",{className:"l520-choice-card",children:[n.jsx("span",{className:"cc-tl"}),n.jsx("span",{className:"cc-tr"}),n.jsxs("div",{className:"l520-choice-head",children:[n.jsx("div",{className:"ornament",children:"❦ ⸙ ❦"}),n.jsx("h3",{children:"这个下午已经度过过"}),n.jsx("div",{className:"sub",children:"— Your Treasured Moment —"})]}),n.jsxs("button",{className:"l520-choice-row",onClick:()=>y("replay"),children:[n.jsx("span",{className:"num",children:"I"}),n.jsx("span",{className:"text",children:"重 看 — 把那个下午再过一遍"})]}),n.jsxs("button",{className:"l520-choice-row",onClick:()=>y("skip-to-letter"),children:[n.jsx("span",{className:"num",children:"II"}),n.jsx("span",{className:"text",children:"看 信 — 直接打开 ta 写的信"})]}),n.jsxs("button",{className:"l520-choice-row",onClick:()=>y("fresh"),children:[n.jsx("span",{className:"num",children:"III"}),n.jsx("span",{className:"text",children:"重 来 — 清掉记录，重新做一次"})]}),n.jsx("button",{onClick:t,style:{display:"block",margin:"14px auto 0",padding:"6px 16px",background:"transparent",border:"none",color:"var(--ink-soft)",fontSize:11,fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",letterSpacing:2,cursor:"pointer"},children:"— 关 闭 —"})]})})]})})}return n.jsx(Zl.Provider,{value:D,children:n.jsxs("div",{className:"fixed inset-0 z-[9997] overflow-y-auto",style:{background:we},children:[g==="intro"&&n.jsxs("div",{className:"flex flex-col items-center justify-center min-h-full px-8 py-16 max-w-md mx-auto",children:[n.jsx("div",{className:"text-[10px] tracking-[8px] text-[#C76182] mb-3",children:"5 · 2 · 0"}),n.jsx("div",{className:"text-[#C76182] text-xl font-bold mb-1 tracking-widest",children:"特别活动"}),n.jsxs("div",{className:"text-[#5C3A4A] text-lg leading-relaxed text-center my-8",children:["如果",n.jsx("span",{className:"mx-1 text-[#C76182]",children:i.name}),"变得小小的，",n.jsx("br",{}),"那ta会是——？"]}),n.jsx("button",{onClick:()=>{ne(),x("char_creator")},className:"mt-6 px-10 py-3 rounded-full bg-gradient-to-r from-[#FFB6C8] to-[#F18AAA] text-white font-bold shadow-lg active:scale-95 transition-transform",children:"开始装扮 ♥"}),n.jsx("button",{onClick:t,className:"mt-4 text-xs text-[#9D7585]",children:"以后再说"})]}),g==="char_creator"&&n.jsxs("div",{className:"absolute inset-0",style:{paddingTop:"var(--safe-top)",background:"#FFF1E6"},children:[n.jsx(vr,{onClick:t}),n.jsx(gc,{mode:"char",charName:i.name,presets:hc(i)?lh():void 0,isSully:hc(i),onConfirm:Ee})]}),g==="loading_a"&&n.jsx(xc,{hint:"ta 在准备这个下午…"}),g==="yangcheng"&&w&&v&&n.jsx(yh,{callA:w,charName:i.name,charAvatar:i.avatar,charChibiUrl:v.transparentDataUrl,onTucaoSelected:y=>ee(y),onComplete:()=>{x(p==="replay"&&Z?"uncovered_line":"user_creator")},initialChosenTucao:p==="replay"?Y??void 0:void 0}),g==="user_creator"&&n.jsxs("div",{className:"absolute inset-0",style:{paddingTop:"var(--safe-top)",background:"#FFF1E6"},children:[n.jsx(vr,{onClick:t}),n.jsx(gc,{mode:"user",charName:i.name,onConfirm:he})]}),g==="uncovered_line"&&w&&v&&Z&&n.jsx(wh,{lines:w.uncovered_line,charName:i.name,charAvatar:i.avatar,charChibi:v.transparentDataUrl,userChibi:Z.transparentDataUrl,onComplete:()=>x("ending_screen")}),g==="ending_screen"&&w&&v&&Z&&n.jsx(vh,{title:w.ending.title,description:w.ending.description,charChibi:v.transparentDataUrl,userChibi:Z.transparentDataUrl,onNext:()=>{x(P?"wake_up":"loading_b")}}),g==="loading_b"&&n.jsx(xc,{hint:"醒过来之前…"}),g==="wake_up"&&P&&n.jsx(bh,{lines:P.wake_up,charName:i.name,onComplete:()=>x("letter")}),g==="letter"&&P&&n.jsx(_h,{text:P.letter,charName:i.name,userName:o.name||"你",onClose:t,onNext:()=>{me(),x("puzzle")}}),g==="puzzle"&&w&&v&&Z&&n.jsx(kh,{charChibi:v.transparentDataUrl,userChibi:Z.transparentDataUrl,title:w.ending.title,onDone:()=>x("done"),onClose:t}),g==="done"&&n.jsx(jh,{charName:i.name,charAvatar:i.avatar,userName:o.name||"你",charChibi:v==null?void 0:v.transparentDataUrl,userChibi:Z==null?void 0:Z.transparentDataUrl,onClose:t})]})})},Eh=({onDone:e,onBack:t})=>{const{apiConfig:s,updateApiConfig:o,addToast:a,availableModels:r,setAvailableModels:c,apiPresets:i}=ds(),[l,d]=h.useState(s.baseUrl),[u,p]=h.useState(s.apiKey),[f,g]=h.useState(s.model),[x,b]=h.useState(s.stream===!0),[S,_]=h.useState(!1),[I,D]=h.useState(""),[v,T]=h.useState(!1),[Z,G]=h.useState(!1),[w,k]=h.useState(null),P=ne=>{d(ne.config.baseUrl),p(ne.config.apiKey),g(ne.config.model),b(ne.config.stream===!0),k(null),a(`已加载预设: ${ne.name}`,"info")},W=()=>{o({baseUrl:l,apiKey:u,model:f,stream:x}),D("配置已保存"),a("API 配置已保存","success"),setTimeout(()=>D(""),2e3)},Y=async()=>{if(!l){D("请先填写 URL");return}_(!0),D("正在连接...");try{const ne=l.replace(/\/+$/,""),Ne=await fetch(`${ne}/models`,{method:"GET",headers:{Authorization:`Bearer ${u}`,"Content-Type":"application/json"}});if(!Ne.ok)throw new Error(`Status ${Ne.status}`);const Ee=await ys(Ne),he=Ee.data||Ee.models||[];if(Array.isArray(he)){const be=he.map(me=>me.id||me);c(be),be.length>0&&!be.includes(f)&&g(be[0]),D(`获取到 ${be.length} 个模型`),T(!0)}else D("格式不兼容")}catch{D("连接失败")}finally{_(!1)}},ee=async()=>{var ne,Ne,Ee;if(!(!l.trim()||!u.trim()||!f.trim())){G(!0),k(null);try{const he=await fetch(`${l.trim().replace(/\/+$/,"")}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u.trim()}`},body:JSON.stringify({model:f.trim(),messages:[{role:"user",content:"Hi"}],max_tokens:5,stream:x})});if(he.ok){const me=((Ee=(Ne=(ne=(await ys(he)).choices)==null?void 0:ne[0])==null?void 0:Ne.message)==null?void 0:Ee.content)||"";k(`✅ 连接成功 — 模型回复: "${me.slice(0,30)}"`)}else{const be=await he.text().catch(()=>"");k(`❌ HTTP ${he.status}: ${be.slice(0,100)}`)}}catch(he){k(`❌ 连接失败: ${he.message}`)}finally{G(!1)}}},V=()=>{o({baseUrl:l,apiKey:u,model:f,stream:x}),e()},q=Z||!l.trim()||!u.trim()||!f.trim();return n.jsxs("div",{className:"fixed inset-0 z-[9998] flex items-center justify-center p-5 animate-fade-in",children:[n.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-md"}),n.jsxs("div",{className:"relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-pink-200/50 overflow-hidden animate-slide-up max-h-[85vh] flex flex-col",children:[n.jsxs("div",{className:"px-6 pt-6 pb-2 text-center shrink-0",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🔧"}),n.jsx("h3",{className:"text-lg font-bold text-slate-800",children:"API 配置"}),n.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"配置完成后即可前往今天的特别活动"})]}),n.jsxs("div",{className:"px-6 py-4 space-y-4 overflow-y-auto no-scrollbar flex-1",children:[i.length>0&&n.jsxs("div",{children:[n.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block pl-1",children:"我的预设"}),n.jsx("div",{className:"flex gap-2 flex-wrap",children:i.map(ne=>n.jsx("button",{onClick:()=>P(ne),className:"text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-sm hover:text-pink-500 hover:border-pink-200 active:scale-95 transition-all",children:ne.name},ne.id))})]}),n.jsxs("div",{children:[n.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block pl-1",children:"URL"}),n.jsx("input",{type:"text",value:l,onChange:ne=>d(ne.target.value),placeholder:"https://...",className:"w-full bg-white/50 border border-slate-200/60 rounded-xl px-4 py-2.5 text-sm font-mono focus:bg-white transition-all"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block pl-1",children:"Key"}),n.jsx("input",{type:"password",value:u,onChange:ne=>p(ne.target.value),placeholder:"sk-...",className:"w-full bg-white/50 border border-slate-200/60 rounded-xl px-4 py-2.5 text-sm font-mono focus:bg-white transition-all"})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex justify-between items-center mb-1.5 pl-1",children:[n.jsx("label",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:"Model"}),n.jsx("button",{onClick:Y,disabled:S,className:"text-[10px] text-pink-500 font-bold",children:S?"Fetching...":"刷新模型列表"})]}),n.jsx("input",{type:"text",value:f,onChange:ne=>g(ne.target.value),placeholder:"gpt-4o-mini",className:"w-full bg-white/50 border border-slate-200/60 rounded-xl px-4 py-2.5 text-sm font-mono focus:bg-white transition-all"}),v&&r.length>0&&n.jsx("div",{className:"mt-2 max-h-32 overflow-y-auto no-scrollbar bg-slate-50 rounded-xl border border-slate-200/60 p-1",children:r.map(ne=>n.jsx("button",{onClick:()=>{g(ne),T(!1)},className:`w-full text-left px-3 py-2 rounded-lg text-xs font-mono ${ne===f?"bg-pink-500/10 text-pink-500 font-bold":"text-slate-600 hover:bg-slate-100"}`,children:ne},ne))})]}),n.jsx("button",{onClick:W,className:"w-full py-3 rounded-2xl font-bold text-white shadow-lg shadow-pink-200 bg-gradient-to-r from-[#FFB6C8] to-[#F18AAA] active:scale-95 transition-all",children:I||"保存配置"}),n.jsx("button",{onClick:ee,disabled:q,className:`w-full py-2.5 rounded-2xl font-bold text-sm border active:scale-95 transition-all ${q?"border-slate-200 text-slate-400 bg-slate-50":"border-pink-300 text-pink-500 bg-pink-50 hover:bg-pink-100"}`,children:Z?"测试中...":"🧪 测试连接"}),w&&n.jsx("div",{className:`text-xs px-3 py-2 rounded-xl ${w.startsWith("✅")?"bg-emerald-50 text-emerald-700":"bg-red-50 text-red-600"}`,children:w})]}),n.jsxs("div",{className:"px-6 pb-6 pt-2 flex gap-3 shrink-0",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 bg-slate-100 text-slate-500 font-bold rounded-2xl active:scale-95 transition-transform text-sm",children:"返回"}),n.jsx("button",{onClick:V,className:"flex-1 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-2xl shadow-lg shadow-pink-200 active:scale-95 transition-transform text-sm",children:"前往活动 ♥"})]})]})]})},Th=({onClose:e,initialCharId:t})=>{const{characters:s}=ds(),[o,a]=h.useState(t?"session":"popup"),[r,c]=h.useState(t||""),[i,l]=h.useState(""),d=()=>{try{localStorage.setItem(ql,"1")}catch{}};h.useEffect(()=>{if(o!=="popup"||t)return;let b=!1;return ih(s).then(S=>{b||l(S)}),()=>{b=!0}},[o,s,t]);const u=h.useMemo(()=>s.find(b=>b.id===i),[s,i]),p=u?(u.name||"").toLowerCase().includes("sully"):!1,f=()=>{d(),e()},g=()=>{i&&(d(),c(i),a("session"))},x=()=>{d(),a("api")};if(o==="popup"){const b=(u==null?void 0:u.name)||(s.length===0?"":"..."),S=u?p?"Sully 好像有事找你？":`${b} 好像有事找你？`:"特别活动",_=u?p?`ta 突然变得小小的——
要不要去看看？`:`${b} 今天有点不一样——
ta 突然变得小小的。`:`今天是 5 月 20 号——
但还没有可以陪你的角色。`;return n.jsxs("div",{className:"fixed inset-0 z-[9998] flex items-center justify-center p-5 animate-fade-in",children:[n.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-md"}),n.jsxs("div",{className:"relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-pink-200/50 overflow-hidden animate-slide-up",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-100/60 to-transparent rounded-bl-full pointer-events-none"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-rose-50/40 to-transparent rounded-tr-full pointer-events-none"}),n.jsxs("div",{className:"pt-8 pb-4 px-6 text-center relative",children:[n.jsx("div",{className:"text-4xl mb-3",children:"🌸"}),n.jsx("div",{className:"text-[10px] tracking-[8px] text-[#C76182] mb-2",children:"5 · 2 · 0"}),n.jsx("h2",{className:"text-lg font-extrabold text-slate-800",children:S}),n.jsx("p",{className:"text-[11px] text-pink-400 mt-1.5 font-medium",children:"2026 May 20 Special"}),n.jsx("p",{className:"text-[12px] text-slate-500 mt-3 leading-relaxed whitespace-pre-line",children:_}),n.jsx("p",{className:"text-[10px] text-slate-400 mt-3 leading-relaxed",children:u&&!p?"（想换个 ta？桌面「特别时光」里所有 ta 都在）":"（这条提醒只会出现一次，活动随时可以在桌面「特别时光」里找到）"})]}),n.jsxs("div",{className:"px-6 pb-7 pt-2 space-y-3 relative",children:[n.jsxs("button",{onClick:g,disabled:!i,className:"w-full py-3.5 bg-gradient-to-r from-[#FFB6C8] to-[#F18AAA] text-white font-bold rounded-2xl shadow-lg shadow-pink-200 active:scale-95 transition-transform text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[n.jsx("span",{children:"确 定"}),n.jsx("span",{children:"♥"})]}),n.jsx("button",{onClick:x,className:"w-full py-3 bg-pink-50 text-pink-500 font-semibold rounded-2xl text-sm active:scale-95 transition-transform",children:"API 配置"}),n.jsx("button",{onClick:f,className:"w-full py-2 text-slate-400 text-xs",children:"不感兴趣"})]})]})]})}return o==="api"?n.jsx(Eh,{onDone:()=>{i?(c(i),a("session")):a("select")},onBack:()=>a("popup")}):o==="select"?n.jsxs("div",{className:"fixed inset-0 z-[9998] flex items-center justify-center p-5 animate-fade-in",children:[n.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur",onClick:e}),n.jsxs("div",{className:"relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/40 overflow-hidden max-h-[80vh] flex flex-col",children:[n.jsxs("div",{className:"px-6 pt-6 pb-3 text-center shrink-0",children:[n.jsx("h3",{className:"text-lg font-bold text-[#5C3A4A]",children:"选一个 ta"}),n.jsx("p",{className:"text-[11px] text-[#9D7585] mt-1",children:"一起度过这个下午"})]}),n.jsx("div",{className:"px-4 pb-4 overflow-y-auto flex-1",children:s.length===0?n.jsx("div",{className:"text-center text-sm text-[#9D7585] py-8",children:"还没有角色呢"}):n.jsx("div",{className:"grid grid-cols-2 gap-3",children:s.map(b=>{var S,_;return n.jsxs("button",{onClick:()=>{c(b.id),a("session")},className:"flex flex-col items-center gap-2 p-3 bg-[#FFF8F1] rounded-2xl border border-[#FCEDD9] active:scale-95 transition-transform",children:[(S=b.avatar)!=null&&S.startsWith("http")||(_=b.avatar)!=null&&_.startsWith("data:")?n.jsx("img",{src:b.avatar,alt:b.name,className:"w-12 h-12 rounded-full object-cover"}):n.jsx("div",{className:"w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl",children:b.avatar||"🌸"}),n.jsx("div",{className:"text-[12px] font-bold text-[#5C3A4A] truncate w-full",children:b.name})]},b.id)})})})]})]}):n.jsx("div",{className:"fixed inset-0 z-[9998]",children:n.jsx(Ch,{charId:r,onClose:e})})},Sr="sullyos_update_2026_06_05_seen",Mh="sullyos_faq_target_section",_0="changelog-2026-05-27",Rh="changelog-2026-06-05",wc=()=>{try{return!localStorage.getItem(Sr)}catch{return!1}},Dh=({onClose:e})=>{const{openApp:t}=ds(),s=()=>{try{localStorage.setItem(Sr,Date.now().toString()),sessionStorage.setItem(Mh,Rh)}catch{}t(R.FAQ),e()},o=()=>{try{localStorage.setItem(Sr,Date.now().toString())}catch{}e()};return n.jsxs("div",{className:"fixed inset-0 z-[9998] flex items-center justify-center p-5 animate-fade-in",children:[n.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-md"}),n.jsxs("div",{className:"relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30 overflow-hidden animate-slide-up",children:[n.jsxs("div",{className:"pt-7 pb-3 px-6 text-center",children:[n.jsx("img",{src:"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f514.png",alt:"update",className:"w-10 h-10 mx-auto mb-2"}),n.jsx("h2",{className:"text-lg font-extrabold text-slate-800",children:"新功能上线 · 彼方"}),n.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"2026 年 6 月 5 日 · 角色独自度过的时间"})]}),n.jsxs("div",{className:"px-6 pb-4 space-y-3",children:[n.jsxs("div",{className:"bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-4",children:[n.jsxs("p",{className:"text-[13px] text-slate-700 leading-relaxed",children:["一句话：",n.jsx("strong",{className:"text-indigo-600",children:"「彼方」"}),"是一方你的角色们",n.jsx("strong",{className:"text-purple-600",children:"自己会去逛"}),"的小世界。开启后 ta 们独自登入，在",n.jsx("strong",{children:"图书馆 / 听歌房 / 留言簿 / 娱乐室 / 邮局"}),"里读书、听歌、发帖、写信、瞎玩，举动会变成「动态」并同步进 ta 各自的聊天和记忆。"]}),n.jsxs("p",{className:"text-[12px] text-slate-500 leading-relaxed mt-2",children:["重头戏是",n.jsx("strong",{className:"text-indigo-600",children:"邮局 · 漂流信"}),"：角色给跨用户的陌生人写信、收信、回信，像扔漂流瓶交笔友（笔名自动匿名）。"]}),n.jsxs("p",{className:"text-[12px] text-slate-500 leading-relaxed mt-2",children:["打开 ",n.jsx("strong",{children:"「彼方」App → 接入"}),"，给角色捏个小人、打开开关就能玩。完整玩法见下方更新说明。"]})]}),n.jsx("div",{className:"bg-indigo-50 border border-indigo-200 rounded-2xl p-3",children:n.jsx("p",{className:"text-[12px] font-bold text-indigo-600 text-center",children:"点下方按钮看完整玩法说明"})})]}),n.jsxs("div",{className:"px-6 pb-7 pt-2 space-y-2",children:[n.jsx("button",{onClick:s,className:"w-full py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 active:scale-95 transition-transform text-sm",children:"看看「彼方」怎么玩"}),n.jsx("button",{onClick:o,className:"w-full py-2 text-slate-400 font-medium text-xs active:scale-95 transition-transform",children:"以后再说"})]})]})]})},Ph=({onClose:e})=>n.jsx(Dh,{onClose:e}),sd="sullyos_worker_build_seen",Lh=()=>{try{localStorage.setItem(sd,fa)}catch{}},Oh=()=>{try{return ws().enabled?localStorage.getItem(sd)!==fa:!1}catch{return!1}},Fh=({onClose:e})=>{const[t,s]=h.useState("idle"),[o,a]=h.useState(""),r=ws(),c=Bm(r.workerUrl),i=c.includes("/services/view/")?"打开我的 Worker":"打开 Worker 列表",l=async()=>{s("loading");try{await Om(),s("done"),setTimeout(()=>s(f=>f==="done"?"idle":f),2500)}catch(f){const g=f;a((g==null?void 0:g.message)??"未知错误"),s("error")}},d=()=>{window.open(c,"_blank","noopener,noreferrer")},u=()=>{Lh(),e()},p=t==="loading"?"复制中…":t==="done"?"✓ 已复制":t==="error"?"重试复制":"复制最新代码";return n.jsxs("div",{className:"fixed inset-0 z-[9998] flex items-center justify-center p-5 animate-fade-in",children:[n.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-md"}),n.jsxs("div",{className:"relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30 overflow-hidden animate-slide-up",children:[n.jsxs("div",{className:"pt-7 pb-3 px-6 text-center",children:[n.jsx("img",{src:"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f6e0.png",alt:"worker update",className:"w-10 h-10 mx-auto mb-2"}),n.jsx("h2",{className:"text-lg font-extrabold text-slate-800",children:"Worker 后端有更新"}),n.jsxs("p",{className:"text-[11px] text-slate-400 mt-1",children:["最新版本 ",fa," · Instant Push"]})]}),n.jsx("div",{className:"px-6 pb-4 space-y-3",children:n.jsxs("div",{className:"bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-100 rounded-2xl p-4 space-y-2",children:[n.jsx("p",{className:"text-[13px] text-slate-700 leading-relaxed",children:"推送 worker 有新版本，需要你同步一下："}),n.jsxs("p",{className:"text-[12px] text-slate-600 leading-relaxed",children:[n.jsx("strong",{children:"Deno 部署"}),"：进 Playground 重新部署一次（保存即可），loader 会自动拉到最新代码。"]}),n.jsxs("p",{className:"text-[12px] text-slate-600 leading-relaxed",children:[n.jsx("strong",{children:"Cloudflare 部署"}),"："]}),n.jsxs("ol",{className:"text-[12px] text-slate-600 leading-relaxed list-decimal pl-5 space-y-0.5",children:[n.jsx("li",{children:"点下面「复制最新代码」"}),n.jsx("li",{children:"打开你的 Cloudflare worker 编辑界面"}),n.jsx("li",{children:"全选粘贴覆盖，点 Deploy"})]}),n.jsx("p",{className:"text-[11px] text-slate-500 leading-relaxed pt-1",children:"如果不方便现在处理，新代码也已经同步到「设置 → Instant 消息设置」里， 随时按提示操作即可。"}),t==="error"&&n.jsxs("p",{className:"text-[11px] text-rose-500 leading-relaxed",children:["复制失败：",o]})]})}),n.jsxs("div",{className:"px-6 pb-7 pt-2 space-y-2",children:[n.jsx("button",{onClick:()=>void l(),disabled:t==="loading",className:`w-full py-3.5 font-bold rounded-2xl text-sm transition-transform active:scale-95 ${t==="done"?"bg-emerald-500 text-white":"bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg shadow-indigo-200"}`,children:p}),n.jsxs("button",{onClick:d,className:"w-full py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl text-sm active:scale-95 transition-transform",children:["↗ ",i]}),n.jsx("button",{onClick:u,className:"w-full py-2.5 text-slate-400 font-medium text-[12px]",children:"稍后处理"})]})]})]})},Bh=({onClose:e})=>n.jsx(Fh,{onClose:e});let vc=!1,Lo=0;const Uh=()=>{if(typeof navigator>"u")return!1;const e=navigator.userAgent||"";return/iPad|iPhone|iPod/.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1},Hh=()=>{var e;return typeof window>"u"?!1:((e=window.matchMedia)==null?void 0:e.call(window,"(display-mode: standalone)").matches)||!!window.navigator.standalone},ya=()=>Uh()&&Hh(),_c=e=>e instanceof HTMLElement?e.isContentEditable?!0:["INPUT","TEXTAREA","SELECT"].includes(e.tagName):!1,to=()=>{var l,d;if(typeof document>"u")return;const e=ya(),t=Math.round(window.innerHeight),s=Math.round(((l=window.visualViewport)==null?void 0:l.height)||t),o=Math.round(((d=window.visualViewport)==null?void 0:d.offsetTop)||0),a=Math.max(0,t-s-o),r=a>120?a:0,c=Math.max(t,s+o);e?(!r||!Lo)&&(Lo=c):Lo=0;const i=e&&Lo||c;document.documentElement.style.setProperty("--app-height",`${i}px`),document.documentElement.style.setProperty("--visual-viewport-height",`${s}px`),document.documentElement.style.setProperty("--keyboard-inset",`${r}px`),document.documentElement.style.setProperty("--standalone-safe-area-bottom","0px"),document.documentElement.style.setProperty("--standalone-safe-area-top","0px")},Wh=()=>{var r,c;if(typeof window>"u"||typeof document>"u"||vc)return;vc=!0;const e=ya();e&&(document.documentElement.classList.add("ios-standalone"),document.body.classList.add("ios-standalone"));const t=()=>{to()},s=()=>{to()},o=i=>{if(!_c(i.target))return;document.body.classList.add("ios-keyboard-open"),to();const l=i.target;window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{if(document.activeElement===l)try{l.scrollIntoView({block:"nearest",inline:"nearest"})}catch{}})})},a=()=>{window.setTimeout(()=>{_c(document.activeElement)||document.body.classList.remove("ios-keyboard-open"),to()},180)};window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(r=window.visualViewport)==null||r.addEventListener("resize",t),(c=window.visualViewport)==null||c.addEventListener("scroll",t),e&&(document.addEventListener("focusin",o),document.addEventListener("focusout",a)),to()},Sc="sullyos_chunk_reload_at",zh=6e4,Xh=new RegExp(["Importing a module script failed","Failed to fetch dynamically imported module","error loading dynamically imported module","Failed to load module script","Unable to preload CSS","ChunkLoadError","Loading chunk \\S+ failed"].join("|"),"i"),kc=e=>{const t=e instanceof Error?`${e.name}: ${e.message}`:typeof e=="string"?e:"";return Xh.test(t)},Kh=()=>{let e=!1;try{const t=parseInt(sessionStorage.getItem(Sc)||"0",10)||0;e=Date.now()-t>=zh,e&&sessionStorage.setItem(Sc,String(Date.now()))}catch{e=!1}return e?(window.location.reload(),!0):!1},Oo="复制报错信息",jc="已复制",Vh="请手动复制",Yh="请手动复制报错信息",Jh="应用运行错误",$c="返回桌面",Gh="资源加载失败",qh="应用组件没有加载成功，通常是版本刚更新或网络瞬断导致的，刷新一次即可恢复。",Qh="正在自动刷新恢复…",Zh="刷新重试";class eg extends h.Component{constructor(s){super(s);$n(this,"copyLabelTimer",null);$n(this,"updateCopyLabel",s=>{this.copyLabelTimer&&window.clearTimeout(this.copyLabelTimer),this.setState({copyLabel:s}),this.copyLabelTimer=window.setTimeout(()=>{this.setState({copyLabel:Oo}),this.copyLabelTimer=null},1800)});$n(this,"handleCopy",async()=>{var o,a,r;const s=((o=this.state.error)==null?void 0:o.stack)||((a=this.state.error)==null?void 0:a.message)||"Unknown Error";try{if((r=navigator.clipboard)!=null&&r.writeText){await navigator.clipboard.writeText(s),this.updateCopyLabel(jc);return}}catch{}try{const c=document.createElement("textarea");c.value=s,c.setAttribute("readonly","true"),c.style.position="fixed",c.style.opacity="0",c.style.pointerEvents="none",document.body.appendChild(c),c.focus(),c.select();const i=document.execCommand("copy");if(document.body.removeChild(c),i){this.updateCopyLabel(jc);return}}catch{}window.prompt(Yh,s),this.updateCopyLabel(Vh)});$n(this,"handleClose",()=>{this.setState({hasError:!1,error:null,copyLabel:Oo,isChunkError:!1,autoReloading:!1}),this.props.onCloseApp()});$n(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1,error:null,copyLabel:Oo,isChunkError:!1,autoReloading:!1}}static getDerivedStateFromError(s){return{hasError:!0,error:s,isChunkError:kc(s)}}componentDidCatch(s,o){console.error("App Crash:",s,o),kc(s)&&Kh()&&this.setState({autoReloading:!0})}componentDidUpdate(s){s.resetKey!==this.props.resetKey&&this.state.hasError&&this.setState({hasError:!1,error:null,copyLabel:Oo,isChunkError:!1,autoReloading:!1})}componentWillUnmount(){this.copyLabelTimer&&window.clearTimeout(this.copyLabelTimer)}render(){var s;return this.state.hasError?this.state.isChunkError?n.jsxs("div",{className:"relative isolate z-[120] w-full h-full flex flex-col items-center justify-center bg-slate-900/95 text-white p-6 text-center space-y-4 pointer-events-auto",children:[n.jsx("img",{src:"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f635.png",alt:"error",className:"w-10 h-10"}),n.jsx("h2",{className:"text-lg font-bold",children:Gh}),n.jsx("p",{className:"text-xs text-slate-300 max-w-xs leading-relaxed",children:qh}),this.state.autoReloading?n.jsx("p",{className:"text-sm font-bold text-slate-200",children:Qh}):n.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-xs",children:[n.jsx("button",{type:"button",onClick:this.handleReload,className:"w-full px-6 py-3 bg-red-600 rounded-full font-bold text-sm shadow-lg active:scale-95 transition-transform",children:Zh}),n.jsx("button",{type:"button",onClick:this.handleClose,className:"w-full px-4 py-2 bg-slate-700 rounded-full text-xs font-bold active:scale-95 transition-transform",children:$c})]})]}):n.jsxs("div",{className:"relative isolate z-[120] w-full h-full flex flex-col items-center justify-center bg-slate-900/95 text-white p-6 text-center space-y-4 pointer-events-auto",children:[n.jsx("img",{src:"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f635.png",alt:"error",className:"w-10 h-10"}),n.jsx("h2",{className:"text-lg font-bold",children:Jh}),n.jsx("p",{className:"text-xs text-slate-300 font-mono bg-black/30 p-3 rounded-2xl max-w-full overflow-auto max-h-40 select-text break-all whitespace-pre-wrap",children:((s=this.state.error)==null?void 0:s.message)||"Unknown Error"}),n.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-xs",children:[n.jsx("button",{type:"button",onClick:this.handleCopy,className:"w-full px-4 py-2 bg-slate-700 rounded-full text-xs font-bold active:scale-95 transition-transform",children:this.state.copyLabel}),n.jsx("button",{type:"button",onClick:this.handleClose,className:"w-full px-6 py-3 bg-red-600 rounded-full font-bold text-sm shadow-lg active:scale-95 transition-transform",children:$c})]})]}):this.props.children}}const Ic=40,Mn=8,nd="globalMiniPlayer.bubblePos.v1",Ka="globalMiniPlayer.hidden.v1",od="globalMiniPlayer.expandedBottom.v1",Nc=4,tg=()=>{try{const e=localStorage.getItem(nd);if(!e)return null;const t=JSON.parse(e);if(typeof(t==null?void 0:t.x)=="number"&&typeof(t==null?void 0:t.y)=="number")return t}catch{}return null},sg=()=>{try{const e=localStorage.getItem(od);if(!e)return null;const t=parseFloat(e);return Number.isFinite(t)?t:null}catch{return null}},ng=()=>{const{activeApp:e}=ds(),{current:t,playing:s,togglePlay:o,nextSong:a,prevSong:r,progress:c,duration:i}=Pr(),[l,d]=h.useState(!1),[u,p]=h.useState(()=>tg()),[f,g]=h.useState(()=>sg()),[x,b]=h.useState(()=>{try{return sessionStorage.getItem(Ka)==="1"}catch{return!1}}),S=h.useRef(null),_=h.useRef(null),I=h.useRef(null),D=h.useRef(null),v=h.useRef(null),T=h.useRef(s);h.useEffect(()=>{if(s&&!T.current){b(!1);try{sessionStorage.removeItem(Ka)}catch{}}T.current=s},[s]),h.useEffect(()=>{if(u)try{localStorage.setItem(nd,JSON.stringify(u))}catch{}},[u]),h.useEffect(()=>{if(f!=null)try{localStorage.setItem(od,String(f))}catch{}},[f]);const Z=h.useCallback(V=>{var be,me;const q=S.current;if(!q)return;const ne=q.parentElement;if(!ne)return;const Ne=ne.getBoundingClientRect(),Ee=q.getBoundingClientRect(),he=Ne.bottom-Ee.bottom;_.current={startY:V.clientY,startBottom:he,parentH:Ne.height,selfH:Ee.height,moved:!1,pointerId:V.pointerId};try{(me=(be=V.currentTarget).setPointerCapture)==null||me.call(be,V.pointerId)}catch{}},[]),G=h.useCallback(V=>{const q=_.current;if(!q)return;const ne=V.clientY-q.startY;if(!q.moved&&Math.abs(ne)>Nc&&(q.moved=!0),!q.moved)return;let Ne=q.startBottom-ne;const Ee=Math.max(0,q.parentH-q.selfH-Mn);Ne=Math.max(Mn,Math.min(Ee,Ne)),g(Ne)},[]),w=h.useCallback(V=>{var ne,Ne;const q=_.current;_.current=null;try{(Ne=(ne=V.currentTarget).releasePointerCapture)==null||Ne.call(ne,V.pointerId)}catch{}q&&!q.moved&&d(!1)},[]),k=h.useCallback(()=>{b(!0),d(!1);try{sessionStorage.setItem(Ka,"1")}catch{}},[]),P=h.useCallback(V=>{var he,be;const q=I.current;if(!q)return;const ne=q.parentElement;if(!ne)return;const Ne=ne.getBoundingClientRect(),Ee=q.getBoundingClientRect();D.current={startX:V.clientX,startY:V.clientY,offX:V.clientX-Ee.left,offY:V.clientY-Ee.top,parentW:Ne.width,parentH:Ne.height,moved:!1,pointerId:V.pointerId},v.current&&window.clearTimeout(v.current),v.current=window.setTimeout(()=>{D.current&&!D.current.moved&&(k(),D.current=null)},600);try{(be=(he=V.currentTarget).setPointerCapture)==null||be.call(he,V.pointerId)}catch{}},[k]),W=h.useCallback(V=>{const q=D.current,ne=I.current;if(!q||!ne)return;const Ne=V.clientX-q.startX,Ee=V.clientY-q.startY;if(!q.moved&&Math.hypot(Ne,Ee)>Nc&&(q.moved=!0,v.current&&(window.clearTimeout(v.current),v.current=null)),!q.moved)return;const he=ne.parentElement;if(!he)return;const be=he.getBoundingClientRect();let me=V.clientX-be.left-q.offX,we=V.clientY-be.top-q.offY;me=Math.max(Mn,Math.min(q.parentW-Ic-Mn,me)),we=Math.max(Mn,Math.min(q.parentH-Ic-Mn,we)),p({x:me,y:we})},[]),Y=h.useCallback(V=>{var ne,Ne;const q=D.current;v.current&&(window.clearTimeout(v.current),v.current=null),q&&!q.moved&&d(!0),D.current=null;try{(Ne=(ne=V.currentTarget).releasePointerCapture)==null||Ne.call(ne,V.pointerId)}catch{}},[]);if(!t||e===R.Music||e===R.Launcher||e===R.Call||x)return null;const ee=i>0?c/i*100:0;if(!l){const V=u?{left:u.x,top:u.y}:{right:12,bottom:12};return n.jsx("div",{ref:I,className:"absolute z-[55] pointer-events-none",style:V,children:n.jsxs("button",{onPointerDown:P,onPointerMove:W,onPointerUp:Y,onPointerCancel:Y,onContextMenu:q=>q.preventDefault(),className:"pointer-events-auto relative w-10 h-10 rounded-full overflow-hidden active:scale-95 transition-transform touch-none select-none",style:{boxShadow:"0 6px 18px rgba(0,0,0,0.35)",border:"1px solid rgba(255,255,255,0.25)"},"aria-label":"音乐播放器（点击展开，拖动移位，长按隐藏）",title:"点击展开 · 拖动移位 · 长按隐藏",children:[n.jsx("img",{src:t.albumPic,alt:"",draggable:!1,className:"w-full h-full object-cover pointer-events-none"}),n.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",style:{background:"rgba(0,0,0,0.25)"},children:s?n.jsx(Zo,{size:14,weight:"fill",color:"#fff"}):n.jsx(ea,{size:14,weight:"fill",color:"#fff"})}),n.jsx("div",{className:"absolute left-0 bottom-0 w-full h-[2px] bg-white/20 pointer-events-none",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-sky-400 to-indigo-400 transition-all duration-150",style:{width:`${ee}%`}})})]})})}return n.jsx("div",{ref:S,className:"absolute left-3 right-3 z-[55] pointer-events-none",style:{bottom:f??12},children:n.jsxs("div",{className:"pointer-events-auto flex items-center gap-2.5 rounded-2xl pl-1.5 pr-2.5 py-2 relative overflow-hidden animate-fade-in",style:{background:"rgba(20, 24, 35, 0.65)",backdropFilter:"blur(24px) saturate(1.6)",WebkitBackdropFilter:"blur(24px) saturate(1.6)",border:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 8px 32px rgba(0,0,0,0.35)"},children:[n.jsx("div",{onPointerDown:Z,onPointerMove:G,onPointerUp:w,onPointerCancel:w,className:"shrink-0 flex items-center justify-center px-1 cursor-grab active:cursor-grabbing touch-none select-none",style:{alignSelf:"stretch"},"aria-label":"拖动调整位置（点击收起）",title:"上下拖动 · 点击收起",children:n.jsx("div",{className:"w-1 h-7 rounded-full",style:{background:"rgba(255,255,255,0.25)"}})}),n.jsx("img",{src:t.albumPic,alt:"",className:"w-9 h-9 rounded-lg object-cover shrink-0",style:{border:"1px solid rgba(255,255,255,0.2)"}}),n.jsxs("div",{className:"flex-1 min-w-0 text-left",children:[n.jsx("div",{className:"text-[11px] font-medium truncate text-white",children:t.name}),n.jsx("div",{className:"text-[9px] truncate text-white/60",children:t.artists})]}),n.jsxs("div",{className:"flex items-center gap-0.5 shrink-0",children:[n.jsx("button",{onClick:V=>{V.stopPropagation(),r()},className:"p-1.5 rounded-full text-white/80 active:scale-95 transition-transform",children:n.jsx(Ja,{size:14,weight:"fill"})}),n.jsx("button",{onClick:V=>{V.stopPropagation(),o()},className:"p-1.5 rounded-full text-white active:scale-95 transition-transform",style:{background:"rgba(255,255,255,0.15)"},children:s?n.jsx(Zo,{size:14,weight:"fill"}):n.jsx(ea,{size:14,weight:"fill"})}),n.jsx("button",{onClick:V=>{V.stopPropagation(),a()},className:"p-1.5 rounded-full text-white/80 active:scale-95 transition-transform",children:n.jsx(Ga,{size:14,weight:"fill"})}),n.jsx("button",{onClick:V=>{V.stopPropagation(),d(!1)},className:"p-1.5 rounded-full text-white/70 active:scale-95 transition-transform ml-0.5","aria-label":"收起播放器",title:"收起成小球",children:n.jsx(Wd,{size:14,weight:"bold"})}),n.jsx("button",{onClick:V=>{V.stopPropagation(),k()},className:"p-1.5 rounded-full text-white/70 active:scale-95 transition-transform","aria-label":"隐藏播放器（切到下一首时会再出现）",title:"隐藏（下一首会再出现）",children:n.jsx(Lc,{size:14,weight:"bold"})})]}),n.jsx("div",{className:"absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-sky-400 to-indigo-400 transition-all duration-150",style:{width:`${ee}%`}})]})})},og=({isOpen:e,title:t,details:s,onClose:o})=>{const[a,r]=h.useState(!1);if(!e)return null;const c=async()=>{var i;try{if((i=navigator.clipboard)!=null&&i.writeText)await navigator.clipboard.writeText(s);else{const l=document.createElement("textarea");l.value=s,l.style.position="fixed",l.style.opacity="0",document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l)}r(!0),setTimeout(()=>r(!1),1500)}catch{r(!1)}};return n.jsxs("div",{className:"fixed inset-0 z-[110] flex items-center justify-center p-4 animate-fade-in",style:{zIndex:1e4},children:[n.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:o}),n.jsxs("div",{className:"relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-pop-in",children:[n.jsx("div",{className:"p-5 pb-3",children:n.jsxs("div",{className:"flex gap-3 items-start",children:[n.jsx("div",{className:"w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-6 h-6",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),n.jsx("div",{className:"flex-1 min-w-0",children:n.jsx("h3",{className:"text-base font-bold text-slate-800 leading-6 break-words",children:t})})]})}),n.jsx("div",{className:"px-5 pb-3",children:n.jsx("pre",{className:"bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-[11px] leading-relaxed text-slate-700 whitespace-pre-wrap break-words max-h-[40vh] overflow-y-auto font-mono select-text",children:s})}),n.jsxs("div",{className:"bg-slate-50 px-5 py-3 flex gap-2 justify-end border-t border-slate-100",children:[n.jsx("button",{onClick:c,className:"px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 active:scale-95 transition-transform",children:a?"已复制":"复制"}),n.jsx("button",{onClick:o,className:"px-4 py-2 bg-red-500 rounded-xl text-sm font-bold text-white shadow-lg shadow-red-200 active:scale-95 transition-transform",children:"关闭"})]})]})]})},Ac="sullyos_boot_seen_session",ag=()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,rg=({dataReady:e,wallpaper:t,onDone:s})=>{const o=(t==null?void 0:t.trim())||"",a=/^(https?:|data:|blob:)/.test(o),r=o?a?`url(${o})`:o:"",c=h.useMemo(()=>{try{return!sessionStorage.getItem(Ac)}catch{return!0}},[]),i=h.useMemo(()=>ag(),[]),l=c&&!i,d=l?2e3:520,u=l?680:300,[p,f]=h.useState("enter"),g=h.useRef(0);g.current===0&&(g.current=typeof performance<"u"?performance.now():Date.now()),h.useEffect(()=>{try{sessionStorage.setItem(Ac,"1")}catch{}},[]),h.useEffect(()=>{if(p==="exit")return;let I=0;const D=()=>{const v=typeof performance<"u"?performance.now():Date.now();if(e&&v-g.current>=d){f("exit");return}I=requestAnimationFrame(D)};return I=requestAnimationFrame(D),()=>cancelAnimationFrame(I)},[e,p,d]),h.useEffect(()=>{if(p!=="exit")return;const I=setTimeout(s,u);return()=>clearTimeout(I)},[p,u,s]);const x=()=>{p!=="exit"&&f("exit")},b=h.useMemo(()=>l?Array.from({length:16},()=>({left:Math.random()*100,size:1.5+Math.random()*2.5,delay:-Math.random()*12,dur:11+Math.random()*9,sway:(Math.random()*2-1)*24,op:.25+Math.random()*.45})):[],[l]),S=h.useMemo(()=>l?Array.from({length:18},()=>({left:Math.random()*100,top:Math.random()*62,size:1+Math.random()*1.8,delay:-Math.random()*4,dur:2.4+Math.random()*3,op:.4+Math.random()*.5})):[],[l]),_=p==="exit";return n.jsxs("div",{onClick:x,"aria-label":"如梦令",className:"fixed inset-0 z-[9999] overflow-hidden select-none cursor-pointer",style:{background:"#05060f",opacity:_?0:1,transition:`opacity ${u}ms ease-in`},children:[n.jsx("style",{children:`
        @keyframes bootSceneIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes bootCamera { from { transform: scale(1) } to { transform: scale(1.06) } }
        @keyframes bootBloom { 0%,100% { opacity:.55; transform: translate(-50%,-50%) scale(1) } 50% { opacity:.85; transform: translate(-50%,-50%) scale(1.08) } }
        @keyframes bootRise { from { transform: translateY(8vh) translateX(0) } to { transform: translateY(-112vh) translateX(var(--sway,0px)) } }
        @keyframes bootTwinkle { 0%,100% { opacity:.15 } 50% { opacity:1 } }
        @keyframes bootLogoIn { 0% { opacity:0; transform: translateY(10px) scale(1.14); filter: blur(10px) } 60% { opacity:1 } 100% { opacity:1; transform: translateY(0) scale(1); filter: blur(0) } }
        @keyframes bootSoftIn { from { opacity:0; transform: translateY(8px) } to { opacity:.8; transform: translateY(0) } }
        @keyframes bootLineIn { from { opacity:0; transform: scaleX(0) } to { opacity:.6; transform: scaleX(1) } }
        @keyframes bootHintIn { from { opacity:0 } to { opacity:.45 } }
      `}),n.jsxs("div",{className:"absolute inset-0",style:{transform:_?"scale(1.12)":void 0,transition:_?`transform ${u}ms cubic-bezier(0.4,0,0.2,1)`:void 0,willChange:"transform"},children:[n.jsxs("div",{className:"absolute inset-0",style:{animation:l?"bootCamera 6s ease-out forwards":void 0,willChange:"transform"},children:[n.jsx("div",{className:"absolute inset-0",style:{animation:l?"bootSceneIn 700ms ease-out both":"bootSceneIn 300ms ease-out both",background:"radial-gradient(130% 120% at 50% 118%, #3a2766 0%, #1d1740 34%, #0c0b22 66%, #05060f 100%)"}}),r&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{background:r,backgroundSize:"cover",backgroundPosition:"center",filter:a?"blur(10px)":"none",transform:a?"scale(1.14)":void 0,animation:l?"bootSceneIn 700ms ease-out both":"bootSceneIn 300ms ease-out both"}}),n.jsx("div",{className:"absolute inset-0",style:{background:"rgba(6,7,18,0.5)"}})]}),n.jsx("div",{className:"absolute inset-0",style:{mixBlendMode:"screen",background:"radial-gradient(70% 55% at 72% 22%, rgba(139,108,232,0.30), transparent 60%), radial-gradient(64% 48% at 22% 32%, rgba(64,150,210,0.20), transparent 62%)"}}),n.jsx("div",{className:"absolute",style:{left:"50%",top:"42%",width:"120vw",height:"120vw",maxWidth:900,maxHeight:900,transform:"translate(-50%,-50%)",background:"radial-gradient(circle, rgba(168,150,255,0.45) 0%, rgba(120,110,220,0.16) 32%, transparent 60%)",animation:l?"bootBloom 5.5s ease-in-out infinite":void 0,opacity:l?void 0:.6}}),b.map((I,D)=>n.jsx("span",{className:"absolute rounded-full",style:{left:`${I.left}%`,bottom:0,width:I.size,height:I.size,"--sway":`${I.sway}px`,background:"radial-gradient(circle, rgba(214,205,255,0.95), rgba(214,205,255,0) 70%)",opacity:I.op,animation:`bootRise ${I.dur}s linear ${I.delay}s infinite`,willChange:"transform"}},`m${D}`)),S.map((I,D)=>n.jsx("span",{className:"absolute rounded-full",style:{left:`${I.left}%`,top:`${I.top}%`,width:I.size,height:I.size,background:"rgba(255,255,255,0.95)",boxShadow:"0 0 6px rgba(190,200,255,0.8)",opacity:I.op,animation:`bootTwinkle ${I.dur}s ease-in-out ${I.delay}s infinite`}},`s${D}`)),n.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(125% 100% at 50% 44%, transparent 52%, rgba(0,0,0,0.6) 100%)"}})]}),n.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center px-8 pointer-events-none",children:[n.jsxs("div",{className:"text-white font-light",style:{fontSize:"clamp(38px, 12vw, 64px)",letterSpacing:"0.04em",textShadow:"0 0 36px rgba(170,150,255,0.55), 0 2px 14px rgba(0,0,0,0.4)",animation:l?"bootLogoIn 1400ms cubic-bezier(0.22,1,0.36,1) 250ms both":"bootLogoIn 600ms ease-out both"},children:["Sully",n.jsx("span",{style:{fontWeight:500},children:"OS"})]}),n.jsx("div",{className:"mt-3 h-px w-28",style:{background:"linear-gradient(90deg, transparent, rgba(200,190,255,0.85), transparent)",transformOrigin:"center",animation:l?"bootLineIn 900ms ease-out 1100ms both":"bootLineIn 400ms ease-out 200ms both"}}),n.jsx("div",{className:"mt-3 text-[12px] text-white/85",style:{letterSpacing:"0.3em",animation:l?"bootSoftIn 1200ms ease-out 1250ms both":"bootSoftIn 500ms ease-out 250ms both"},children:"欢迎回家！"})]})]}),l&&!_&&n.jsx("div",{className:"absolute bottom-10 left-0 right-0 text-center text-[10px] tracking-[0.3em] text-white/40",style:{animation:"bootHintIn 800ms ease-out 1800ms both"},children:"轻触进入"})]})},at=e=>{const t=h.lazy(e);return t.preload=e,t},Cc=-1,ig=0,cg=2,ad=e=>{try{const t=e==null?void 0:e._payload,s=e==null?void 0:e._init;if(!t||typeof s!="function"||t._status!==Cc){e.preload();return}s(t);const o=t._result;t._status===ig&&o&&typeof o.then=="function"&&o.then(void 0,()=>{t._status===cg&&(t._status=Cc,t._result=e.preload)})}catch{try{e.preload()}catch{}}},Kr=at(()=>Le(()=>import("./Settings-Cl2uVVA6.js"),__vite__mapDeps([6,4,1,3,7,8,0]))),Vr=at(()=>Le(()=>import("./Character-99aSAYOm.js"),__vite__mapDeps([9,1,7,10,3,4,11,12,0]))),Yr=at(()=>Le(()=>import("./Chat-BBF79JyD.js"),__vite__mapDeps([13,4,1,10,8,11,7,14,12,15,3,0]))),Jr=at(()=>Le(()=>import("./GroupChat-BC2ZBQX7.js"),__vite__mapDeps([16,1,4,7,10,11,3,0]))),Gr=at(()=>Le(()=>import("./ThemeMaker-ZWFYKsdp.js"),__vite__mapDeps([17,1,10,4,3,0]))),qr=at(()=>Le(()=>import("./Appearance-CsJkHmqt.js"),__vite__mapDeps([18,1,10,4,3,0]))),Qr=at(()=>Le(()=>import("./DateApp-BmQLedX3.js"),__vite__mapDeps([19,1,4,7,10,14,12,15,3,0]))),Zr=at(()=>Le(()=>import("./UserApp-BG0Hbc2O.js"),__vite__mapDeps([20,1,10,4,3,0]))),ei=at(()=>Le(()=>import("./JournalApp-BYG2fdSj.js"),__vite__mapDeps([21,1,4,7,3,0]))),ti=at(()=>Le(()=>import("./RoomApp-CA789upN.js"),__vite__mapDeps([22,1,4,10,7,3,0]))),si=at(()=>Le(()=>import("./CheckPhone-4JZ_BzAY.js"),__vite__mapDeps([23,1,4,7,3,0]))),ni=at(()=>Le(()=>import("./StudyApp-DdlQ9DWP.js"),__vite__mapDeps([24,1,4,7,3,0]))),oi=at(()=>Le(()=>import("./WorldbookApp-DbAp3dsf.js"),__vite__mapDeps([25,1,7,4,3,0]))),ai=at(()=>Le(()=>import("./BankApp-OGURGHfA.js"),__vite__mapDeps([26,1,4,7,10,3,0]))),ri=at(()=>Le(()=>import("./XhsFreeRoamApp-DbMKuVeJ.js"),__vite__mapDeps([27,1,4,3,0]))),ii=at(()=>Le(()=>import("./MusicApp-DNY43XAT.js"),__vite__mapDeps([28,1,4,3,0]))),ci=at(()=>Le(()=>import("./CallApp-BgykVL2e.js"),__vite__mapDeps([29,1,4,12,15,11,3,0]))),li=at(()=>Le(()=>import("./GuidebookApp-DvwASdU5.js"),__vite__mapDeps([30,1,4,3,0]))),di=at(()=>Le(()=>import("./LifeSimApp-CypQVut9.js"),__vite__mapDeps([31,1,4,3,0]))),ui=at(()=>Le(()=>import("./MemoryPalaceApp-BbuEmqpm.js"),__vite__mapDeps([32,4,1,3,0]))),pi=at(()=>Le(()=>import("./QQBridge-BmttP_n4.js"),__vite__mapDeps([33,1,4,3,0]))),mi=at(()=>Le(()=>import("./VRWorldApp-BdYjp3i9.js"),__vite__mapDeps([35,1,4,3,0]))),fi=at(()=>Le(()=>import("./CharCreatorDevApp-CDggjsAN.js"),__vite__mapDeps([36,1,4,3,0]))),hi=at(()=>Le(()=>import("./ValentineEvent-BGF7fRzk.js"),__vite__mapDeps([34,4,1,3,0])).then(e=>({default:e.SpecialMomentsApp}))),Ec=[Yr,Vr,Jr,ti,Kr,qr,si,ei,ii,ci,Qr,Zr,ni,ai,oi,ui,mi,di,li,ri,Gr,pi,hi,fi],lg={[R.Settings]:Kr,[R.Character]:Vr,[R.Chat]:Yr,[R.GroupChat]:Jr,[R.ThemeMaker]:Gr,[R.Appearance]:qr,[R.Date]:Qr,[R.User]:Zr,[R.Journal]:ei,[R.Room]:ti,[R.CheckPhone]:si,[R.Study]:ni,[R.Worldbook]:oi,[R.Bank]:ai,[R.XhsFreeRoam]:ri,[R.Music]:ii,[R.Call]:ci,[R.Guidebook]:li,[R.LifeSim]:di,[R.MemoryPalace]:ui,[R.QQBridge]:pi,[R.VRWorld]:mi,[R.CharCreatorDev]:fi,[R.SpecialMoments]:hi};Lf(e=>{const t=lg[e];t&&ad(t)});const Fo="sullyos_disclaimer_accepted",Tc=()=>{try{const e=localStorage.getItem(Hr);return e?JSON.parse(e):null}catch{return null}},dg=e=>{switch(e){case"parsing":return"解析备份文件";case"assets":return"恢复备份素材";case"database":return"写入数据库";case"settings":return"恢复系统设置";case"error":return"导入报错";default:return"导入流程"}},ug=({onAccept:e})=>n.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-5 animate-fade-in",children:[n.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-md"}),n.jsxs("div",{className:"relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30 overflow-hidden animate-slide-up",children:[n.jsxs("div",{className:"pt-7 pb-3 px-6 text-center",children:[n.jsx("img",{src:"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f4e2.png",alt:"announcement",className:"w-8 h-8 mb-2"}),n.jsx("h2",{className:"text-lg font-extrabold text-slate-800",children:"免责声明"}),n.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Disclaimer · 手抓糯米机 (SullyOS)"})]}),n.jsxs("div",{className:"px-6 pb-4 max-h-[55vh] overflow-y-auto no-scrollbar space-y-3",children:[n.jsxs("p",{className:"text-[13px] text-slate-600 leading-relaxed",children:["本项目「手抓糯米机 (SullyOS)」是一个",n.jsx("strong",{className:"text-slate-800",children:"完全开源、免费"}),"的软件，仅供个人学习、研究与技术交流使用。"]}),n.jsxs("ul",{className:"text-[12px] text-slate-500 leading-relaxed space-y-1.5 list-none",children:[n.jsxs("li",{className:"flex gap-2",children:[n.jsx("span",{className:"shrink-0",children:"•"}),n.jsx("span",{children:"本软件不提供任何明示或暗示的担保，作者不对使用本软件产生的任何后果承担责任。"})]}),n.jsxs("li",{className:"flex gap-2",children:[n.jsx("span",{className:"shrink-0",children:"•"}),n.jsx("span",{children:"用户应自行承担使用本软件的一切风险，包括但不限于数据丢失、设备损坏等。"})]}),n.jsxs("li",{className:"flex gap-2",children:[n.jsx("span",{className:"shrink-0",children:"•"}),n.jsx("span",{children:"本软件生成的任何 AI 内容均不代表作者立场，用户需自行判断内容的准确性与合规性。"})]}),n.jsxs("li",{className:"flex gap-2",children:[n.jsx("span",{className:"shrink-0",children:"•"}),n.jsx("span",{children:"禁止将本软件用于任何违反当地法律法规的用途。"})]})]}),n.jsx("div",{className:"bg-red-50 border-2 border-red-200 rounded-2xl p-4 mt-3",children:n.jsxs("p",{className:"text-[13px] font-bold text-red-600 text-center leading-relaxed",children:["本程序完全免费！",n.jsx("br",{}),"如果您是通过",n.jsx("span",{className:"underline decoration-2 decoration-red-400",children:"付费购买"}),"获得此程序的，说明您已被倒卖欺骗。",n.jsx("br",{}),"请向售卖者维权追责！"]})})]}),n.jsx("div",{className:"px-6 pb-7 pt-2",children:n.jsx("button",{onClick:e,className:"w-full py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 active:scale-95 transition-transform text-sm",children:"我已知悉，继续使用"})})]})]}),pg=({marker:e,onLater:t,onReimport:s})=>{if(!e)return null;const o=dg(e.phase),a=e.startedAt?new Date(e.startedAt).toLocaleString("zh-CN"):"",r=e.updatedAt?new Date(e.updatedAt).toLocaleString("zh-CN"):"",c=ia(e.sourceSize),i=ia(e.currentFileSize),l=typeof e.assetTotal=="number"&&e.assetTotal>0,d=typeof e.itemTotal=="number"&&e.itemTotal>0,u=!!e.error;return n.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-5 animate-fade-in",children:[n.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-md"}),n.jsxs("div",{className:"relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30 overflow-hidden animate-slide-up",children:[n.jsxs("div",{className:"pt-7 pb-3 px-6 text-center",children:[n.jsx("h2",{className:"text-lg font-extrabold text-slate-800",children:u?"上次导入失败了":"上次导入被中断了"}),n.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:u?"错误信息已记录在本机":"数据还没有完整恢复"})]}),n.jsxs("div",{className:"px-6 pb-4 space-y-3 max-h-[58vh] overflow-y-auto no-scrollbar",children:[n.jsx("p",{className:"text-[13px] text-slate-600 leading-relaxed",children:u?"系统检测到上一次导入过程中发生了错误。请重新导入同一个备份文件，避免数据只恢复了一半。":"系统检测到上一次导入没有走到完成步骤，可能是浏览器或系统在导入过程中强制重启了。请重新导入同一个备份文件，避免数据只恢复了一半。"}),u&&n.jsx("div",{className:"bg-red-50 border border-red-200 rounded-2xl p-3 text-[12px] text-red-700 leading-relaxed whitespace-pre-wrap break-words select-text",children:e.error}),n.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-2xl p-3 text-[12px] text-amber-700 leading-relaxed",children:[n.jsxs("div",{children:["中断阶段：",o]}),e.current&&n.jsxs("div",{children:["当前部分：",e.current]}),d&&n.jsxs("div",{children:["条目进度：",e.itemDone||0,"/",e.itemTotal]}),l&&n.jsxs("div",{children:["素材进度：",e.assetDone||0,"/",e.assetTotal]}),e.currentFile&&n.jsxs("div",{className:"break-all",children:["当前文件：",e.currentFile,i?` · ${i}`:""]}),a&&n.jsxs("div",{children:["开始时间：",a]}),r&&n.jsxs("div",{children:["最后进度：",r]}),e.source&&n.jsxs("div",{className:"break-all",children:["备份文件：",e.source,c?` · ${c}`:""]})]})]}),n.jsxs("div",{className:"px-6 pb-7 pt-2 grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:t,className:"py-3 bg-slate-100 text-slate-600 font-bold rounded-2xl active:scale-95 transition-transform text-sm",children:"稍后再说"}),n.jsx("button",{onClick:s,className:"py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 active:scale-95 transition-transform text-sm",children:"去重新导入"})]})]})]})},mg=({onReturn:e})=>{const[t,s]=h.useState(!1),[o,a]=h.useState(!1);return h.useEffect(()=>{const r=setTimeout(()=>s(!0),220),c=setTimeout(()=>a(!0),7e3);return()=>{clearTimeout(r),clearTimeout(c)}},[]),o?n.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center bg-slate-900/95 text-white p-6 text-center space-y-4",style:{animation:"appLoadIn 320ms ease-out both"},children:[n.jsx("style",{children:"@keyframes appLoadIn{from{opacity:0}to{opacity:1}}"}),n.jsx("h2",{className:"text-base font-bold",children:"加载有点慢…"}),n.jsx("p",{className:"text-xs text-slate-300 max-w-xs leading-relaxed",children:"这个发光的圆点是加载动画，不是按钮——点它不会有反应。常见于刚更新版本或网络瞬断，刷新一次即可恢复。"}),n.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-xs",children:[n.jsx("button",{type:"button",onClick:()=>window.location.reload(),className:"w-full px-6 py-3 bg-red-600 rounded-full font-bold text-sm shadow-lg active:scale-95 transition-transform",children:"刷新恢复"}),e&&n.jsx("button",{type:"button",onClick:e,className:"w-full px-4 py-2 bg-slate-700 rounded-full text-xs font-bold active:scale-95 transition-transform",children:"返回桌面"})]})]}):t?n.jsxs("div",{className:"w-full h-full flex items-center justify-center bg-transparent",style:{animation:"appLoadIn 280ms ease-out both"},children:[n.jsx("style",{children:"@keyframes appLoadIn{from{opacity:0}to{opacity:1}}"}),n.jsxs("div",{className:"relative",style:{width:72,height:72},children:[n.jsx("div",{className:"absolute inset-0",style:{borderRadius:"9999px",filter:"blur(8px)",background:"radial-gradient(circle, hsla(var(--primary-hue),75%,72%,0.42) 0%, hsla(var(--primary-hue),70%,60%,0.10) 50%, transparent 70%)"}}),n.jsx("div",{className:"absolute",style:{left:"50%",top:"50%",width:10,height:10,transform:"translate(-50%,-50%)",borderRadius:"9999px",background:"radial-gradient(circle, #fff, hsla(var(--primary-hue),80%,75%,0.6) 60%, transparent)",boxShadow:"0 0 10px hsla(var(--primary-hue),80%,75%,0.6)"}})]})]}):null},fg=()=>{const{theme:e,isLocked:t,unlock:s,activeApp:o,closeApp:a,openApp:r,virtualTime:c,isDataLoaded:i,toasts:l,unreadMessages:d,characters:u,handleBack:p,suspendedCall:f,resumeCall:g,activeCharacterId:x,errorDialog:b,dismissError:S}=ds(),_=ya(),[I,D]=h.useState(!1);h.useEffect(()=>{if(!i)return;let ge=!1,Me=0;const Ce=window.requestIdleCallback?Ke=>window.requestIdleCallback(Ke,{timeout:1500}):Ke=>window.setTimeout(Ke,200),Se=()=>{ge||Me>=Ec.length||(ad(Ec[Me++]),ge||Ce(Se))},Ye=window.setTimeout(()=>Ce(Se),150);return()=>{ge=!0,window.clearTimeout(Ye)}},[i]);const[v,T]=h.useState(()=>{try{return!localStorage.getItem(Fo)}catch{return!0}}),Z=()=>{try{localStorage.setItem(Fo,Date.now().toString())}catch{}T(!1)},[G,w]=h.useState(()=>{try{return localStorage.getItem(Fo)?Tc():null}catch{return null}}),[k,P]=h.useState(!1),W=!!G;h.useEffect(()=>{if(v||k||G)return;const ge=Tc();ge&&w(ge)},[v,k,G]);const Y=()=>{P(!0),w(null),r(R.Settings)},[ee,V]=h.useState(()=>{try{return!!localStorage.getItem(Fo)&&wc()}catch{return!1}});h.useEffect(()=>{!v&&!W&&!ee&&wc()&&V(!0)},[v,W,ee]);const[q,ne]=h.useState(!1);h.useEffect(()=>{v||W||ee||i&&rh()&&ne(!0)},[v,W,ee,i]);const[Ne,Ee]=h.useState(!1);if(h.useEffect(()=>{v||W||ee||q||i&&Oh()&&Ee(!0)},[v,W,ee,q,i]),h.useEffect(()=>((async()=>{if(yn.isNativePlatform())try{(await Hn.checkPermissions()).display!=="granted"&&await Hn.requestPermissions()}catch(Ce){console.error("Native init failed",Ce)}})(),(async()=>{if(yn.isNativePlatform())try{await jo.removeAllListeners(),jo.addListener("backButton",({canGoBack:Ce})=>{t?jo.exitApp():p()})}catch{console.log("Back button listener setup failed")}})(),()=>{yn.isNativePlatform()&&jo.removeAllListeners().catch(()=>{})}),[o,t,a,p]),h.useEffect(()=>{window.scrollTo(0,0)},[o]),h.useEffect(()=>{if(typeof document>"u")return;const ge=e.wallpaper,Me=ge?ge.startsWith("http")||ge.startsWith("data:")||ge.startsWith("blob:")?`url(${ge})`:ge:"#0f1115";[document.documentElement,document.body].forEach(Ce=>{Ce.style.background=Me,Ce.style.backgroundPosition="center",Ce.style.backgroundSize="cover",Ce.style.backgroundRepeat="no-repeat"})},[e.wallpaper]),!I)return n.jsx(rg,{dataReady:i,wallpaper:e.wallpaper,onDone:()=>D(!0)});if(!i)return n.jsx("div",{className:"w-full h-full",style:{background:"#05060f"}});const be=(ge=>ge.startsWith("http")||ge.startsWith("data:")||ge.startsWith("blob:")?`url(${ge})`:ge)(e.wallpaper),me=e.contentColor||"#ffffff",we=e.skin==="animalcrossing";if(t){const ge=Object.values(d).reduce((Se,Ye)=>Se+Ye,0),Me=Object.keys(d)[0],Ce=Me?u.find(Se=>Se.id===Me):null;return n.jsxs("div",{onClick:()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission(),s()},className:"relative w-full h-full bg-cover bg-center cursor-pointer overflow-hidden group font-light select-none overscroll-none",style:{backgroundImage:be,color:me,animation:"lockReveal 600ms ease-out both"},children:[n.jsx("style",{children:"@keyframes lockReveal{from{opacity:0}to{opacity:1}}"}),we?n.jsx("div",{className:"absolute inset-0 transition-all duration-700 group-hover:opacity-0",style:{background:"linear-gradient(180deg, rgba(188,231,245,0.25) 0%, rgba(255,247,176,0.15) 45%, rgba(124,186,76,0.28) 100%)"}}):n.jsx("div",{className:"absolute inset-0 bg-black/5 backdrop-blur-sm transition-all group-hover:backdrop-blur-none group-hover:bg-transparent duration-700"}),we&&n.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[n.jsxs("svg",{viewBox:"0 0 100 100",className:"absolute w-14 h-14 opacity-80 -rotate-[25deg]",style:{left:"10%",top:"12%"},children:[n.jsx("path",{d:"M50 8 C78 20 88 50 78 82 C74 92 60 96 50 92 C40 96 26 92 22 82 C12 50 22 20 50 8Z",fill:"#9ED25F"}),n.jsx("path",{d:"M50 14 L50 88",stroke:"#5c8a30",strokeWidth:"3",fill:"none",opacity:"0.5"})]}),n.jsxs("svg",{viewBox:"0 0 100 100",className:"absolute w-12 h-12 opacity-75 rotate-[30deg] scale-x-[-1]",style:{right:"12%",top:"20%"},children:[n.jsx("path",{d:"M50 8 C78 20 88 50 78 82 C74 92 60 96 50 92 C40 96 26 92 22 82 C12 50 22 20 50 8Z",fill:"#7CBA4C"}),n.jsx("path",{d:"M50 14 L50 88",stroke:"#4d7a2a",strokeWidth:"3",fill:"none",opacity:"0.5"})]}),n.jsxs("svg",{viewBox:"0 0 100 100",className:"absolute w-16 h-16 opacity-70 rotate-[12deg]",style:{left:"16%",bottom:"14%"},children:[n.jsx("path",{d:"M50 8 C78 20 88 50 78 82 C74 92 60 96 50 92 C40 96 26 92 22 82 C12 50 22 20 50 8Z",fill:"#5FAE6E"}),n.jsx("path",{d:"M50 14 L50 88",stroke:"#356b3f",strokeWidth:"3",fill:"none",opacity:"0.5"})]})]}),n.jsxs("div",{className:"absolute top-24 w-full text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]",children:[n.jsxs("div",{className:"text-8xl tracking-tighter opacity-95 font-bold",children:[c.hours.toString().padStart(2,"0"),n.jsx("span",{className:"animate-pulse",children:":"}),c.minutes.toString().padStart(2,"0")]}),we?n.jsxs("div",{className:"text-lg tracking-widest opacity-90 mt-2 text-xs font-bold flex items-center justify-center gap-1.5",children:[n.jsx("span",{children:"🍃"}),n.jsx("span",{children:"无人岛生活"}),n.jsx("span",{children:"🍃"})]}):n.jsx("div",{className:"text-lg tracking-widest opacity-90 mt-2 uppercase text-xs font-bold",children:"SullyOS Simulation"})]}),ge>0&&n.jsx("div",{className:"absolute top-[40%] left-4 right-4 animate-slide-up",children:n.jsxs("div",{className:"bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10 flex items-center gap-4",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white shrink-0 shadow-sm",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:n.jsx("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z",clipRule:"evenodd"})})}),n.jsxs("div",{className:"flex-1 min-w-0 text-white text-left",children:[n.jsxs("div",{className:"font-bold text-sm flex justify-between",children:[n.jsx("span",{children:Ce?Ce.name:"Message"}),n.jsx("span",{className:"text-[10px] opacity-70",children:"刚刚"})]}),n.jsx("div",{className:"text-xs opacity-90 truncate",children:ge>1?`收到 ${ge} 条新消息`:"发来了一条新消息"})]})]})}),n.jsxs("div",{className:"absolute bottom-12 w-full flex flex-col items-center gap-3 animate-pulse opacity-80 drop-shadow-md",children:[n.jsx("div",{className:"w-1 h-8 rounded-full bg-gradient-to-b from-transparent to-current"}),n.jsx("span",{className:"text-[10px] tracking-widest uppercase font-semibold",children:"Tap to Unlock"})]})]})}const de=()=>{switch(o){case R.Settings:return n.jsx(Kr,{});case R.Character:return n.jsx(Vr,{});case R.Chat:return n.jsx(Yr,{});case R.GroupChat:return n.jsx(Jr,{});case R.ThemeMaker:return n.jsx(Gr,{});case R.Appearance:return n.jsx(qr,{});case R.Date:return n.jsx(Qr,{});case R.User:return n.jsx(Zr,{});case R.Journal:return n.jsx(ei,{});case R.Room:return n.jsx(ti,{});case R.CheckPhone:return n.jsx(si,{});case R.Study:return n.jsx(ni,{});case R.Worldbook:return n.jsx(oi,{});case R.Bank:return n.jsx(ai,{});case R.XhsFreeRoam:return n.jsx(ri,{});case R.Music:return n.jsx(ii,{});case R.Call:return n.jsx(ci,{});case R.Guidebook:return n.jsx(li,{});case R.LifeSim:return n.jsx(di,{});case R.MemoryPalace:return n.jsx(ui,{});case R.QQBridge:return n.jsx(pi,{});case R.SpecialMoments:return n.jsx(hi,{});case R.VRWorld:return n.jsx(mi,{});case R.CharCreatorDev:return n.jsx(fi,{});case R.Launcher:default:return n.jsx(Gf,{})}},y=![R.Launcher,R.VRWorld,R.Chat,R.GroupChat].includes(o);return n.jsxs("div",{className:"relative w-full h-full overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 text-slate-900 font-sans select-none overscroll-none",children:[n.jsx("div",{className:"absolute inset-0 bg-cover bg-center transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",style:{backgroundImage:be,transform:o!==R.Launcher?"scale(1.1)":"scale(1)",filter:o!==R.Launcher?"blur(10px)":"none",opacity:o!==R.Launcher?.6:1,backfaceVisibility:"hidden",contain:_?void 0:"strict"}}),n.jsx("div",{className:`absolute inset-0 transition-all duration-500 ${o===R.Launcher?"bg-transparent":"bg-white/50 backdrop-blur-3xl"}`}),n.jsxs("div",{className:"absolute top-0 left-0 right-0 z-10 overflow-hidden bg-transparent overscroll-none flex flex-col",style:y?{bottom:0,paddingTop:"var(--safe-top)",paddingBottom:"var(--safe-bottom)"}:{bottom:"var(--standalone-safe-area-bottom, 0px)"},children:[n.jsx("div",{className:"flex-1 relative overflow-hidden",style:{contain:_?void 0:"layout style paint"},children:n.jsx(eg,{onCloseApp:a,resetKey:`${o}:${x||"none"}`,children:n.jsx(h.Suspense,{fallback:n.jsx(mg,{onReturn:a}),children:de()})})}),f&&o!==R.Call&&n.jsxs("button",{onClick:g,className:"absolute top-7 left-0 w-full z-[55] flex items-center justify-center gap-2 bg-emerald-500 text-white text-xs font-bold py-1.5 animate-pulse cursor-pointer active:bg-emerald-600 transition-colors",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-white animate-ping"}),n.jsxs("span",{children:["通话中 · ",f.charName]}),n.jsx("span",{className:"opacity-70",children:"点击返回"})]}),n.jsx(ng,{}),n.jsx("div",{className:"absolute top-12 left-0 w-full flex flex-col items-center gap-2 pointer-events-none z-[60]",children:l.map(ge=>n.jsxs("div",{className:"animate-fade-in bg-white/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-black/5 flex items-center gap-3 max-w-[85%] ring-1 ring-white/20",children:[ge.type==="success"&&n.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-500 shrink-0"}),ge.type==="error"&&n.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"}),ge.type==="info"&&n.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-primary shrink-0"}),n.jsx("span",{className:"text-xs font-bold text-slate-800 truncate leading-none",children:ge.message})]},ge.id))})]}),n.jsx(og,{isOpen:!!b,title:(b==null?void 0:b.title)??"",details:(b==null?void 0:b.details)??"",onClose:S}),v&&n.jsx(ug,{onAccept:Z}),!v&&W&&n.jsx(pg,{marker:G,onLater:()=>{P(!0),w(null)},onReimport:Y}),!v&&!W&&ee&&n.jsx(Ph,{onClose:()=>V(!1)}),!v&&!W&&!ee&&q&&n.jsx(Th,{onClose:()=>ne(!1)}),!v&&!W&&!ee&&!q&&Ne&&n.jsx(Bh,{onClose:()=>Ee(!1)})]})},hg="main@1b49b5f",S0="v2.2 (Realtime Awareness)",gg=()=>null,kr=44,Kt=16,xg=342,yg=392,bg=4;function ba(){var e,t;return typeof window>"u"?{width:390,height:844}:{width:((e=window.visualViewport)==null?void 0:e.width)??window.innerWidth,height:((t=window.visualViewport)==null?void 0:t.height)??window.innerHeight}}function ca(e,t,s){return Math.min(Math.max(e,t),Math.max(t,s))}function qo(e){const t=ba();return{x:ca(e.x,Kt,t.width-kr-Kt),y:ca(e.y,Kt,t.height-kr-Kt)}}function Mc(){const e=ba();return qo({x:Kt,y:e.height-kr-Kt})}function wg(e){const t=ba(),s=Math.min(xg,t.width-Kt*2),o=Math.min(yg,t.height-Kt*2);return{x:ca(e.x,Kt,t.width-s-Kt),y:ca(e.y,Kt,t.height-o-Kt)}}const Bo=({title:e,detail:t,checked:s,onChange:o})=>n.jsxs("div",{className:"flex items-center justify-between gap-4 py-3",children:[n.jsxs("div",{className:"min-w-0",children:[n.jsx("div",{className:"text-[13px] font-bold text-white",children:e}),t&&n.jsx("div",{className:"mt-1 text-[11px] leading-relaxed text-white/55",children:t})]}),n.jsx("button",{type:"button",role:"switch","aria-checked":s,onClick:()=>o(!s),className:`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${s?"border-amber-300/60 bg-amber-300/80":"border-white/15 bg-white/10"}`,children:n.jsx("span",{className:`absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-sm transition-transform ${s?"translate-x-5":"translate-x-0"}`})})]}),vg=({label:e,checked:t,onChange:s})=>n.jsxs("button",{type:"button",role:"checkbox","aria-checked":t,onClick:()=>s(!t),className:"flex items-center gap-2",children:[n.jsx("span",{className:`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors ${t?"border-amber-300/70 bg-amber-300/80 text-black":"border-white/25 bg-white/5 text-transparent"}`,children:n.jsx(Jd,{size:12,weight:"bold"})}),n.jsx("span",{className:"text-[13px] font-bold text-white",children:e})]}),Va=({onClick:e,disabled:t,icon:s,label:o})=>n.jsxs("button",{type:"button",onClick:e,disabled:t,className:`flex h-8 flex-1 items-center justify-center gap-1.5 rounded-full px-3 text-[11px] font-bold transition-colors ${t?"bg-white/5 text-white/25":"bg-white/10 text-white/75 active:scale-95"}`,children:[s,o]}),_g=()=>{const[e,t]=h.useState(!1),[s,o]=h.useState(()=>Fc()),[a,r]=h.useState(()=>ko()),[c,i]=h.useState(()=>yi().length),[l,d]=h.useState(!1),[u,p]=h.useState(Mc),f=h.useRef(null),g=h.useRef(!1);h.useEffect(()=>ru(r),[]),h.useEffect(()=>Bc(W=>{o(W),W&&r(ko())}),[]),h.useEffect(()=>{if(e)return i(yi().length),iu(W=>i(W.length))},[e]),h.useEffect(()=>{var Y,ee;if(!s)return;const W=()=>{p(V=>{const q=qo(V);return q.x===V.x&&q.y===V.y?V:q})};return window.addEventListener("resize",W),(Y=window.visualViewport)==null||Y.addEventListener("resize",W),(ee=window.visualViewport)==null||ee.addEventListener("scroll",W),()=>{var V,q;window.removeEventListener("resize",W),(V=window.visualViewport)==null||V.removeEventListener("resize",W),(q=window.visualViewport)==null||q.removeEventListener("scroll",W)}},[s]);const x=h.useMemo(()=>(a.skipPromptBuild?1:0)+(a.skipEmotionEval?1:0)+(a.captureEnabled&&a.captureLogs.length>0?1:0)+(a.captureEnabled&&a.captureLogs.length>0&&a.exposeLogDetail?1:0),[a]),b=(W,Y)=>{const ee={...ko(),[W]:Y};r(wa(ee))},S=(W,Y)=>{const ee=ko(),V={...ee,captureLogs:Y?[...ee.captureLogs,W]:ee.captureLogs.filter(q=>q!==W)};r(wa(V))},_=()=>{r(wa(du)),bi()},I=()=>{t(!1),p(Mc()),lu()},D=async()=>{const W=wi();W&&(await navigator.clipboard.writeText(W),d(!0),window.setTimeout(()=>d(!1),1200))},v=()=>{const W=wi();if(!W)return;const Y=new Blob([W],{type:"application/json"}),ee=URL.createObjectURL(Y),V=document.createElement("a"),q=new Date().toISOString().replace(/[:.]/g,"-");V.href=ee,V.download=`devdebug-log-main-${q}.json`,document.body.appendChild(V),V.click(),V.remove(),URL.revokeObjectURL(ee)},T=W=>{e||W.pointerType==="mouse"&&W.button!==0||(f.current={pointerId:W.pointerId,startX:W.clientX,startY:W.clientY,origin:u,moved:!1},W.currentTarget.setPointerCapture(W.pointerId))},Z=W=>{const Y=f.current;if(!Y||Y.pointerId!==W.pointerId)return;const ee=W.clientX-Y.startX,V=W.clientY-Y.startY;!Y.moved&&Math.hypot(ee,V)>=bg&&(Y.moved=!0),Y.moved&&(W.preventDefault(),p(qo({x:Y.origin.x+ee,y:Y.origin.y+V})))},G=W=>{const Y=f.current;if(!Y||Y.pointerId!==W.pointerId)return;const ee=W.clientX-Y.startX,V=W.clientY-Y.startY,q=qo({x:Y.origin.x+ee,y:Y.origin.y+V});f.current=null,g.current=Y.moved,Y.moved&&(W.preventDefault(),p(q),window.setTimeout(()=>{g.current=!1},0)),W.currentTarget.hasPointerCapture(W.pointerId)&&W.currentTarget.releasePointerCapture(W.pointerId)},w=W=>{if(g.current){W.preventDefault(),W.stopPropagation(),g.current=!1;return}t(!0)};if(!s)return null;const k=wg(u),P=ba().height-Kt*2;return n.jsxs("div",{className:"fixed select-none",style:{left:e?k.x:u.x,top:e?k.y:u.y,zIndex:2147483646},children:[!e&&n.jsxs("button",{type:"button","aria-label":"打开调试面板",onClick:w,onPointerDown:T,onPointerMove:Z,onPointerUp:G,onPointerCancel:G,className:"relative flex h-11 w-11 cursor-grab touch-none items-center justify-center rounded-full border border-white/15 bg-black/45 text-white shadow-lg backdrop-blur-md active:scale-95 active:cursor-grabbing",children:[n.jsx(Ya,{size:20,weight:"bold"}),x>0&&n.jsx("span",{className:"absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-300 px-1 text-[10px] font-black leading-none text-black",children:x})]}),e&&n.jsxs("section",{className:"flex w-[min(342px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-white/12 bg-zinc-950/90 text-white shadow-2xl backdrop-blur-xl",style:{maxHeight:P},"aria-label":"开发调试面板",children:[n.jsxs("div",{className:"flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[n.jsx("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber-200",children:n.jsx(Ya,{size:17,weight:"bold"})}),n.jsxs("div",{className:"min-w-0",children:[n.jsx("div",{className:"text-sm font-black leading-tight",children:"Dev Debug"}),n.jsx("div",{className:"truncate font-mono text-[10px] text-white/40",children:hg})]})]}),n.jsx("button",{type:"button","aria-label":"关闭调试面板",onClick:()=>t(!1),className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/70 active:scale-95",children:n.jsx(Lc,{size:15,weight:"bold"})})]}),n.jsxs("div",{className:"flex-1 overflow-y-auto px-4",children:[n.jsx(Bo,{title:"跳过 Prompt Build",detail:"只发送聊天历史。",checked:a.skipPromptBuild,onChange:W=>b("skipPromptBuild",W)}),n.jsx("div",{className:"h-px bg-white/10"}),n.jsx(Bo,{title:"暂停情绪副评估",detail:"主回复仍照常发送，但不启动本地或 Instant Push 的 emotion eval。",checked:a.skipEmotionEval,onChange:W=>b("skipEmotionEval",W)}),n.jsx("div",{className:"h-px bg-white/10"}),n.jsx(Bo,{title:"记录日志",checked:a.captureEnabled,onChange:W=>b("captureEnabled",W)}),a.captureEnabled&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"flex flex-wrap items-center gap-x-6 gap-y-2 pb-3 pl-0.5",children:cu.map(W=>n.jsx(vg,{label:W.title,checked:a.captureLogs.includes(W.key),onChange:Y=>S(W.key,Y)},W.key))}),n.jsxs("div",{className:"mt-1 mb-3 flex gap-2",children:[n.jsx(Va,{onClick:D,disabled:c===0,icon:n.jsx(zd,{size:13,weight:"bold"}),label:l?"已复制":c>0?`复制 (${c})`:"暂无日志"}),n.jsx(Va,{onClick:v,disabled:c===0,icon:n.jsx(Xd,{size:13,weight:"bold"}),label:"下载"}),n.jsx(Va,{onClick:()=>bi(),disabled:c===0,icon:n.jsx(Kd,{size:13,weight:"bold"}),label:"清空"})]}),n.jsx("div",{className:"h-px bg-white/10"}),n.jsx(Bo,{title:"记录完整内容",detail:"只对新条目生效",checked:a.exposeLogDetail,onChange:W=>b("exposeLogDetail",W)})]})]}),n.jsxs("div",{className:"flex shrink-0 items-center justify-end gap-2 border-t border-white/10 px-4 py-3",children:[n.jsxs("button",{type:"button",onClick:I,className:"flex h-8 shrink-0 items-center gap-1 rounded-full bg-white/10 px-3 text-[11px] font-bold text-white/70 active:scale-95",children:[n.jsx(Vd,{size:13,weight:"bold"}),"关闭"]}),n.jsxs("button",{type:"button",onClick:_,className:"flex h-8 shrink-0 items-center gap-1 rounded-full bg-white/10 px-3 text-[11px] font-bold text-white/70 active:scale-95",children:[n.jsx(Yd,{size:13,weight:"bold"}),"重置"]})]})]})]})},Sg={library:{name:"图书馆"},music:{name:"听歌房"},guestbook:{name:"留言簿"},gym:{name:"活动场"}},kg=()=>{const[e,t]=h.useState([]),s=h.useRef(null);if(h.useEffect(()=>{const c=l=>{const d=l.detail;d!=null&&d.charId&&t(u=>u.some(p=>p.charId===d.charId)?u:[...u,d])},i=l=>{var u;const d=(u=l.detail)==null?void 0:u.charId;setTimeout(()=>t(p=>p.filter(f=>f.charId!==d)),1500)};return window.addEventListener("vr-session-start",c),window.addEventListener("vr-session-end",i),()=>{window.removeEventListener("vr-session-start",c),window.removeEventListener("vr-session-end",i),s.current&&clearTimeout(s.current)}},[]),e.length===0)return null;const o=e[e.length-1],a=Sg[o.room]||{name:"彼方"},r=e.length>1?` 等 ${e.length} 人`:"";return n.jsxs("div",{className:"fixed left-1/2 -translate-x-1/2 z-[999] pointer-events-none",style:{top:"calc(var(--safe-top) + 6px)"},children:[n.jsx("style",{children:`@keyframes vrbcin{from{opacity:0;transform:translateY(-14px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
                     @keyframes vrbcshimmer{0%{background-position:-120% 0}100%{background-position:220% 0}}
                     @keyframes vrbctwinkle{0%,100%{opacity:.35;transform:scale(.85)}50%{opacity:1;transform:scale(1.1)}}`}),n.jsxs("div",{className:"relative flex items-center gap-2.5 pl-3 pr-3.5 py-1.5 rounded-full overflow-hidden backdrop-blur-xl",style:{animation:"vrbcin .45s cubic-bezier(.2,.9,.3,1.2)",background:"linear-gradient(100deg, rgba(22,28,46,.82), rgba(14,18,30,.82))",border:"1px solid rgba(190,200,255,.28)",boxShadow:"0 10px 30px rgba(0,0,0,.45), inset 0 1px 0 rgba(200,210,255,.18), 0 0 18px rgba(150,170,255,.18)"},children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(105deg,transparent 32%,rgba(200,215,255,.16) 50%,transparent 68%)",backgroundSize:"220% 100%",animation:"vrbcshimmer 3s linear infinite"}}),n.jsx("span",{className:"relative text-[12px] opacity-80",style:{filter:"drop-shadow(0 0 5px rgba(180,195,255,.6))"},children:"✦"}),n.jsxs("span",{className:"relative text-[11px] tracking-[0.04em] text-white/90 whitespace-nowrap font-light",children:[n.jsx("span",{className:"text-amber-200/90 font-normal",children:o.charName}),r," 正漫游于彼方 · ",a.name,o.novelTitle?` 读《${o.novelTitle}》`:""]}),n.jsx("span",{className:"relative flex gap-1",children:[0,1,2].map(c=>n.jsx("span",{className:"w-1 h-1 rounded-full bg-indigo-100/80",style:{animation:"vrbctwinkle 1.4s infinite",animationDelay:`${c*.25}s`}},c))})]})]})},jg=()=>{ls.useEffect(()=>{uu()},[]);const e=typeof window<"u"&&ya(),t=e?"fixed inset-0 w-full h-full bg-transparent overflow-hidden":"relative w-full bg-transparent overflow-hidden",s=e?{height:"var(--app-height, 100lvh)",minHeight:"var(--app-height, 100lvh)"}:{height:"var(--app-height, 100lvh)",minHeight:"var(--app-height, 100lvh)"};return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:t,style:s,children:n.jsx("div",{className:`${e?"absolute":"fixed"} inset-0 w-full h-full z-0 bg-transparent`,style:{transform:"translateZ(0)"},children:n.jsx(yf,{children:n.jsx(rp,{children:n.jsx(fg,{})})})})}),n.jsx(gg,{}),n.jsx(_g,{}),n.jsx(kg,{})]})};function $g(e){const t=e.map(s=>s.function.name);return t.some(s=>s.startsWith("xhs_"))?"读取小红书":t.some(s=>s==="notion_read_diary"||s==="read_note")?"读取 Notion":t.some(s=>s==="feishu_read_diary")?"读取飞书":t.some(s=>s==="web_search")?"搜索网页":t.some(s=>s==="recall")?"读取记忆":"调用工具"}function xs(e,t,s,o){const a={charId:e,phase:t,text:s,sessionId:o,updatedAt:Date.now()};try{localStorage.setItem(`instant_tool_status_${e}`,JSON.stringify(a))}catch{}try{window.dispatchEvent(new CustomEvent("instant-tool-status",{detail:a}))}catch{}}async function Ig(e){const t=$g(e.toolCalls);xs(e.charId,"running",`正在${t}，请先停留在此页，完成后会自动继续回复。`,e.sessionId);const s=await Lt.getOutboundSession(e.sessionId);if(!s)return console.warn("[instant-tool-runner] outbound session not found, skipping",e.sessionId),xs(e.charId,"failed",`${t}中断了，请重新触发这次回复。`,e.sessionId),!1;const a=(await $.getAllCharacters()).find(_=>_.id===e.charId);if(!a)return console.warn("[instant-tool-runner] character not found",e.charId),xs(e.charId,"failed",`${t}中断了，请重新触发这次回复。`,e.sessionId),!1;const r=await $.getUserProfile()??{name:"User",avatar:"",bio:""},c=Cg(),i={char:a,userProfile:r,realtimeConfig:c,xhsCaches:la,lastXhsNotesRef:mo,onProgress:(_,I)=>{console.log("[instant-tool-runner:progress]",I),xs(e.charId,"running",`${I}，请先停留在此页。`,e.sessionId)}},l=[];for(const _ of e.toolCalls){let I;try{const D=JSON.parse(_.function.arguments||"{}");I=await ef(_.function.name,D,i)}catch(D){console.error("[instant-tool-runner] tool failed",_.function.name,D),I={ok:!1,reason:"tool_threw",message:(D==null?void 0:D.message)??String(D)}}l.push({tool_call_id:_.id,role:"tool",content:JSON.stringify(I)})}if(mo.current.length>0)try{await Lt.saveXhsSessionNotes(e.sessionId,{notes:mo.current,xsecTokens:Array.from(la.xsecTokenCache.entries())})}catch(_){console.warn("[instant-tool-runner] persist xhs notes failed",e.sessionId,_)}const d={role:"assistant",content:e.llmOutputText||"",tool_calls:e.toolCalls},u=[...s.messages,d,...l],p=ws();if(!Xn(p))return console.warn("[instant-tool-runner] instant config not ready, cannot continue"),xs(e.charId,"failed",`${t}完成了，但 Instant Push 配置不可用，没法继续回复。`,e.sessionId),!1;const{sub:f}=await Fr();if(!f)return console.warn("[instant-tool-runner] no push subscription, cannot continue"),xs(e.charId,"failed",`${t}完成了，但推送订阅不可用，没法继续回复。`,e.sessionId),!1;const g=Ag(),x=(e.iteration??0)+1,b=/^https?:\/\//i.test(a.avatar||"")?a.avatar:void 0,S={sessionId:e.sessionId,iteration:x,messages:u,pushSubscription:f,apiUrl:s.apiCredentials.baseUrl||g.baseUrl,apiKey:s.apiCredentials.apiKey||g.apiKey,primaryModel:s.apiCredentials.model||g.model,contactName:a.name,avatarUrl:b,charId:e.charId,metadata:{charId:e.charId,charName:a.name},temperature:.8,oversizeTransport:Lr(p)};try{xs(e.charId,"continuing",`${t}完成了，正在让角色继续回复。`,e.sessionId);const _=new Uc({baseUrl:p.workerUrl,instantEncryption:!1,instantClientToken:p.clientToken||""}),I=new AbortController,D=v=>{v.persisted||I.abort()};window.addEventListener("pagehide",D,{once:!0});try{await _.consumeInstantStream(S,"/continue",{signal:I.signal,onPayload:async v=>{await $l(v,e.sessionId)},onDone:()=>{xs(e.charId,"done",`${t}完成了，角色回复已送达。`,e.sessionId)},onError:v=>{console.warn("[instant-tool-runner] /continue SSE stream error:",v==null?void 0:v.code,v==null?void 0:v.message),xs(e.charId,"failed",`${t}完成了，但续写发生错误。`,e.sessionId)}})}finally{try{window.removeEventListener("pagehide",D)}catch{}}return!0}catch(_){return console.error("[instant-tool-runner] /continue consumeInstantStream threw",_),xs(e.charId,"failed",`${t}完成了，但续写请求没有发出去。`,e.sessionId),!1}}async function Ng(){const e=await Lt.consumePendingToolCalls();let t=0;for(const s of e)await Ig(s)&&(t+=1);return e.length>0&&console.log(`[instant-tool-runner] processed ${e.length} pending tool call(s), ${t} ok`),{processed:e.length,ok:t}}function Ag(){const e={baseUrl:"",apiKey:"",model:""};try{const t=localStorage.getItem("os_api_config");if(!t)return e;const s=JSON.parse(t);return{baseUrl:s.baseUrl||"",apiKey:s.apiKey||"",model:s.model||"",...s}}catch{return e}}function Cg(){try{const e=localStorage.getItem("os_realtime_config");return e?JSON.parse(e):void 0}catch{return}}const Qo=Nr("instant-push","ActiveMsg"),Eg=Nr("instant-push","amsg");let Rc=!1;const Dc="instant_push_trace_log_v1",Tg=200;function no(e,t={}){const s={ts:new Date().toISOString(),sessionId:typeof t.sessionId=="string"?t.sessionId:void 0,event:e,visibility:typeof document<"u"?document.visibilityState:"n/a",online:typeof navigator<"u"?navigator.onLine:void 0,...t};try{console.info("[InstantTrace]",s)}catch{}try{const o=localStorage.getItem(Dc),a=o?JSON.parse(o):[],r=Array.isArray(a)?[...a,s].slice(-Tg):[s];localStorage.setItem(Dc,JSON.stringify(r))}catch{}Oc("instant-push",{label:`trace:${e}`,data:s})}const la={xsecTokenCache:new Map,noteTitleCache:new Map,commentUserIdCache:new Map,commentAuthorNameCache:new Map,commentParentIdCache:new Map},mo={current:[]},Mg=()=>{try{const e=localStorage.getItem("os_memory_palace_config");return e?JSON.parse(e):void 0}catch{return}},rd=()=>{const e={baseUrl:"",apiKey:"",model:""};try{const t=localStorage.getItem("os_api_config");if(!t)return e;const s=JSON.parse(t);return{baseUrl:s.baseUrl||"",apiKey:s.apiKey||"",model:s.model||"",...s}}catch{return e}},jr=()=>{try{const e=localStorage.getItem("os_realtime_config");return e?JSON.parse(e):void 0}catch{return}},Rg=async e=>{var f;const s=(await $.getAllCharacters()).find(g=>g.id===e.charId);if(!s)throw new Error(`character not found for charId=${e.charId}`);const o=await $.getUserProfile()??{name:"User",avatar:"",bio:""},a=await $.getEmojis(),r=await $.getRecentMessagesByCharId(e.charId,200),c=rd(),i=jr(),l=()=>{window.dispatchEvent(new CustomEvent("active-msg-progress",{detail:{charId:e.charId}}))},d=e.sessionId||e.metadata&&e.metadata.sessionId,u=e.messageIndex??(e.metadata&&e.metadata.messageIndex)??0;let p;if(d&&u<=1)try{const g=await Lt.claimReasoning(d);p=g==null?void 0:g.reasoningContent}catch(g){console.warn("[ActiveMsg] claimReasoning failed",d,g)}if(d)try{const g=await Lt.getXhsSessionNotes(d);if((f=g==null?void 0:g.notes)!=null&&f.length){mo.current=g.notes;for(const[x,b]of g.xsecTokens||[])la.xsecTokenCache.set(x,b)}}catch(g){console.warn("[ActiveMsg] restore xhs session notes failed",d,g)}await Ul(e.body||"",{char:s,userProfile:o,emojis:a,realtimeConfig:i,contextMsgs:r,fullMessages:[],initialData:null,historyMsgCount:r.length,mcdInheritMeta:{source:"active_msg_2",activeMsg2:{messageId:e.messageId,taskId:e.taskId,messageType:e.messageType,messageSubtype:e.messageSubtype,avatarUrl:e.avatarUrl,sentAt:e.sentAt,receivedAt:e.receivedAt},...e.metadata||{}},xhsCaches:la,lastXhsNotesRef:mo,api:{baseUrl:c.baseUrl,headers:{"Content-Type":"application/json",...c.apiKey?{Authorization:`Bearer ${c.apiKey}`}:{}},effectiveApi:{baseUrl:c.baseUrl,apiKey:c.apiKey,model:c.model}},hooks:{setMessages:()=>{l()},addToast:(g,x)=>{console.log("[push:toast]",x,g)},musicHooks:pl()??void 0},skipSecondPassLLM:!0,directives:Dg(e)?Pg(e):[],reasoningContent:p}),await Hg(e,s,o)};function Dg(e){var o,a;const t=Number(((o=e.metadata)==null?void 0:o.messageIndex)??0),s=Number(((a=e.metadata)==null?void 0:a.totalMessages)??0);return t===s}function Pg(e){const t=e.metadata&&e.metadata.directives;return Array.isArray(t)?t.filter(s=>s&&typeof s=="object"&&typeof s.type=="string"):[]}function Lg(e){return e.sessionId||e.metadata&&e.metadata.sessionId}function Og(e){var t;return Number(e.messageIndex??((t=e.metadata)==null?void 0:t.messageIndex)??0)}function Fg(e){var t;return Number(e.totalMessages??((t=e.metadata)==null?void 0:t.totalMessages)??0)}function Bg(e){const t=(e||"").trim();return t?/\/chat\/completions\/?$/i.test(t)?t:`${t.replace(/\/+$/,"")}/chat/completions`:"instant-push"}async function Ug(e){var s;if(!pu("instant-push"))return;const t=Lg(e);if(t)try{const o=await Lt.getOutboundSession(t);Dn({url:Bg((s=o==null?void 0:o.apiCredentials)==null?void 0:s.baseUrl),method:"POST",status:200,requestBody:o?{transport:"instant-push",sessionId:t,model:o.apiCredentials.model,messages:o.messages}:{transport:"instant-push",sessionId:t,requestUnavailable:"outbound session not found"},response:{transport:"instant-push",sessionId:t,messageId:e.messageId,messageIndex:Og(e),totalMessages:Fg(e),raw_content:e.body,metadata:e.metadata}})}catch(o){console.warn("[DevDebug] instant-push LLM log failed",t,o)}}async function Hg(e,t,s){const o=Mg(),a=o==null?void 0:o.embedding,r=o==null?void 0:o.lightLLM,c=rd(),i=r!=null&&r.baseUrl?r:{baseUrl:c.baseUrl,apiKey:c.apiKey,model:c.model};if(t.memoryPalaceEnabled&&(a!=null&&a.baseUrl)&&(a!=null&&a.apiKey)&&i.baseUrl)try{const l=await $.getRecentMessagesByCharId(t.id,50);Ir(l,t.id,t.name,a,i,(s==null?void 0:s.name)||"",!1,d=>{console.log("[push:memory-palace]",d)}).catch(d=>{console.warn("[push:memory-palace] processNewMessages failed",d)})}catch(l){console.warn("[push:memory-palace] tail kickoff failed",l)}try{window.dispatchEvent(new CustomEvent("emotion-updated",{detail:{charId:t.id}}))}catch{}}const Wg=async()=>{var t,s,o,a,r,c;const e=await Lt.consumeInboxMessages();no("runtime-flush-start",{count:e.length});for(const i of e){const l=i.sentAt||i.receivedAt||Date.now();if(no("runtime-inbox-message",{sessionId:i.sessionId||((t=i.metadata)==null?void 0:t.sessionId),messageId:i.messageId,charId:i.charId,messageType:i.messageType,bodyChars:typeof i.body=="string"?i.body.length:void 0}),i.messageType==="emotion_update"||(s=i.metadata)!=null&&s.emotionRaw){const f=(o=i.metadata)==null?void 0:o.emotionRaw;if(f)try{const x=(await $.getAllCharacters()).find(b=>b.id===i.charId);if(x){const b=await Hl(String(f),x);b&&window.dispatchEvent(new CustomEvent("emotion-innerstate-updated",{detail:{charId:i.charId,innerState:b}}))}}catch(g){console.warn("[flush:emotion_update] apply failed",g)}try{window.dispatchEvent(new CustomEvent("instant-emotion-done",{detail:{charId:i.charId}}))}catch{}no("runtime-emotion-done",{sessionId:i.sessionId||((a=i.metadata)==null?void 0:a.sessionId),messageId:i.messageId,charId:i.charId});continue}const d=new Set(["text","assistant","normal","instant","fixed","prompted","auto"]),u=!i.messageType||d.has(i.messageType);let p=!1;if(u)try{await Ug(i),await Rg(i),p=!0}catch(f){Qo.warn("post-processing failed, falling back to raw save",{messageId:i.messageId,error:f})}if(!p)try{await $.saveMessage({charId:i.charId,role:"assistant",type:"text",content:i.body,timestamp:l,metadata:{source:"active_msg_2",activeMsg2:{messageId:i.messageId,taskId:i.taskId,messageType:i.messageType,messageSubtype:i.messageSubtype,avatarUrl:i.avatarUrl,sentAt:i.sentAt,receivedAt:i.receivedAt},...i.metadata||{}}})}catch(f){Qo.warn("saveMessage failed, requeue to inbox",{messageId:i.messageId,error:f});try{await Lt.saveInboxMessage(i)}catch(g){Qo.error("requeue failed, message lost",{messageId:i.messageId,error:g})}continue}window.dispatchEvent(new CustomEvent("active-msg-received",{detail:{sessionId:i.sessionId||((r=i.metadata)==null?void 0:r.sessionId),charId:i.charId,charName:i.charName,body:i.previewBody||i.body,avatarUrl:i.avatarUrl,sentAt:l}})),no("runtime-active-msg-received-dispatched",{sessionId:i.sessionId||((c=i.metadata)==null?void 0:c.sessionId),messageId:i.messageId,charId:i.charId})}};let Pc=Promise.resolve();const Rn=()=>{const e=Pc.then(async()=>{try{await Wg()}catch(t){Qo.warn("flushInboxToChat failed",{error:t})}});return Pc=e,e},Uo=async()=>{try{await Ng()}catch(e){console.warn("[instant-push] runPendingToolCalls failed",e)}},zg=async(e,t)=>{var s;if(!(!e||!t))try{const a=(await $.getRecentMessagesByCharId(t,200)).filter(l=>{var d;return l.role==="assistant"&&((d=l.metadata)==null?void 0:d.sessionId)===e}).sort((l,d)=>(l.id??0)-(d.id??0));if(a.length===0)return;const r=a[0];if((s=r.metadata)!=null&&s.thinkingChain||typeof r.id!="number")return;const c=await Lt.claimReasoning(e),i=c==null?void 0:c.reasoningContent;if(!i)return;await $.updateMessageMetadata(r.id,l=>({...l||{},thinkingChain:i})),window.dispatchEvent(new CustomEvent("active-msg-progress",{detail:{charId:t}}))}catch(o){console.warn("[ActiveMsg] backfill reasoning failed",e,o)}},Xg=()=>{const e=new URL(window.location.href),t=e.searchParams.get("activeMsgCharId");e.searchParams.get("openApp")==="chat"&&t&&(window.dispatchEvent(new CustomEvent("active-msg-open",{detail:{charId:t}})),e.searchParams.delete("openApp"),e.searchParams.delete("activeMsgCharId"),window.history.replaceState({},"",e.toString()))},Kg={async init(){Rc||(Rc=!0,"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",e=>{var s,o,a,r,c;const t=(s=e.data)==null?void 0:s.type;if(t&&no("runtime-sw-message",{type:t,sessionId:(o=e.data)==null?void 0:o.sessionId,charId:(a=e.data)==null?void 0:a.charId}),t==="active-msg-received"){Rn();return}if(t==="active-msg-reasoning"){Rn().then(()=>{var i,l;return zg((i=e.data)==null?void 0:i.sessionId,(l=e.data)==null?void 0:l.charId)});return}if(t==="REI_AMSG_PUSH"){const i=(r=e.data)==null?void 0:r.event,l=(c=e.data)==null?void 0:c.payload;i==="rei-amsg-multipart-expired"&&(Eg.warn("multipart expired",l),window.dispatchEvent(new CustomEvent("active-msg-error",{detail:{message:"消息接收不完整，部分内容可能丢失"}})));return}if(t==="instant-tool-request"){Rn().then(()=>Uo());return}t==="active-msg-open"&&(async()=>{var i;await Rn(),window.dispatchEvent(new CustomEvent("active-msg-open",{detail:{charId:(i=e.data)==null?void 0:i.charId}})),await Uo()})()}),typeof document<"u"&&document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(async()=>(await Rn(),ec(jr(),e=>{window.dispatchEvent(new CustomEvent("active-msg-progress",{detail:{charId:e}}))}),Uo()))()}),await Rn(),await Uo(),ec(jr(),e=>{window.dispatchEvent(new CustomEvent("active-msg-progress",{detail:{charId:e}}))}),Xg())}};Za.init().then(()=>{Fn.resume(),zo.resume(),Kg.init(),Au()});Wh();const id=document.getElementById("root");if(!id)throw new Error("Could not find root element to mount to");const Vg=Gd.createRoot(id);Vg.render(n.jsx(ls.StrictMode,{children:n.jsx(jg,{})}));export{cs as $,S0 as A,hg as B,_0 as C,Yl as D,Ap as E,Mh as F,Ep as G,l0 as H,dr as I,Dp as J,ya as K,Wa as L,Sp as M,Tt as N,Xn as O,Fn as P,w0 as Q,wt as R,Bf as S,v0 as T,i0 as U,zo as V,s0 as W,qt as X,bo as Y,zn as Z,ws as _,b0 as a,da as a0,Lh as a1,y0 as a2,tt as a3,ap as a4,ra as a5,tl as a6,ha as a7,f0 as a8,m0 as a9,Si as aa,p0 as ab,t0 as ac,Zg as ad,g0 as ae,c0 as af,ki as ag,vl as ah,Mi as ai,x0 as aj,Pr as ak,ds as al,R as b,Un as c,Ys as d,gc as e,Pt as f,fa as g,Vi as h,Ch as i,kp as j,xl as k,Fi as l,$p as m,u0 as n,e0 as o,d0 as p,Vu as q,r0 as r,h0 as s,Om as t,n0 as u,aa as v,a0 as w,Ko as x,Fr as y,o0 as z};
