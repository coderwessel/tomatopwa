(this.webpackJsonptomatopwa=this.webpackJsonptomatopwa||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);n(18);var c,s=n(0),a=n.n(s),o=n(4),r=n.n(o),i=(n(23),n(8)),l=n.n(i),d=n(13),u=n(2),b=n(5),j=(n(25),n.p+"static/media/audio-beep-sound.176f94bd.mp3"),f=n(1),h=function(e){var t=e.audioRef;return Object(f.jsx)("audio",{id:"beep",ref:t,src:j})},m=(n(27),n(28),function(e){var t=e.name,n=e.value,c=e.onUpdate;return Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{id:"".concat(t,"-label"),className:"col-10 offset-1 text-info text-center",children:t}),Object(f.jsxs)("div",{className:"col-4 offset-1",children:[Object(f.jsx)("button",{id:"".concat(t,"-increment"),className:"btn bi bi-arrow-up-square btn-secondary",onClick:function(){return c(n+60)}}),Object(f.jsx)("h5",{id:"".concat(t,"-length"),className:"text-center text-info",children:Math.floor(n/60).toString().padStart(2,"0")}),Object(f.jsx)("button",{id:"".concat(t,"-decrement"),className:"btn bi bi-arrow-down-square btn-secondary",onClick:function(){return c(n-60)}})]}),Object(f.jsxs)("div",{className:"col-4 offset-2",children:[Object(f.jsx)("button",{id:"".concat(t,"-increment-seconds"),className:"row btn bi bi-arrow-up-square btn-secondary",onClick:function(){return c(n+1)}}),Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("h5",{id:"".concat(t,"-length-seconds"),className:"col text-center text-info",children:(n-60*Math.floor(n/60)).toString().padStart(2,"0")})}),Object(f.jsx)("button",{id:"".concat(t,"-decrement-seconds"),className:"row btn bi bi-arrow-down-square btn-secondary",onClick:function(){return c(n-1)}})]})]})}),p=(n(29),function(e){var t=e.handler;return Object(f.jsxs)("button",{id:"start_stop",className:"btn col-12 btn-primary",onClick:t,children:[Object(f.jsx)("i",{className:"bi bi-play-circle-fill"}),Object(f.jsx)("i",{className:"bi bi-pause-circle-fill"})]})}),v=(n(30),function(e){var t=e.handler;return Object(f.jsx)("button",{id:"reset",onClick:t,className:"btn col-12 bi bi-arrow-repeat btn-secondary"})}),O=(n(31),function(e){var t=e.paused,n=e.name,c=e.minutes,s=e.seconds,a=e.showBreak,o=s.toString().padStart(2,"0"),r=c.toString().padStart(2,"0");return Object(f.jsxs)("div",{className:"card shadow",children:[Object(f.jsx)("div",{className:"card-header bg-dark bi ".concat(a?"bi-cup":"bi-kanban"),children:Object(f.jsx)("h3",{id:"timer-label",className:"card-title text-center",children:n})}),Object(f.jsx)("div",{className:"card-body ".concat(t?"bg-info":"bg-dark","  ").concat(t?"bi-pause-circle":"bi-play-circle"),children:Object(f.jsxs)("h4",{className:"card-text text-center ".concat(t?"text-active":"text-info font-weight-bold"),children:[Object(f.jsxs)("span",{id:"time-left",children:[r,":",o]})," ",t?" paused":""]})})]})}),x=(n(32),n.p+"static/media/mini-tomato.4d4b3422.svg"),w=function(e){var t=e.title;return Object(f.jsxs)("h1",{className:"text-center text-danger",children:[t,Object(f.jsx)("img",{src:x,height:"75em",alt:""})]})};!function(e){e[e.Session=0]="Session",e[e.Break=1]="Break"}(c||(c={}));var g=function(){var e={activeTimer:{mode:c.Session,paused:!0,minutes:25,seconds:0},breakLength:300,sessionLength:1500},t=s.useState(e.activeTimer),n=Object(b.a)(t,2),a=n[0],o=n[1],r=s.createRef(),i=s.useState(r),j=Object(b.a)(i,2),x=j[0],g=(j[1],s.useState(e.breakLength)),k=Object(b.a)(g,2),N=k[0],S=k[1],y=s.useState(e.sessionLength),T=Object(b.a)(y,2),L=T[0],B=T[1],C=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){return"succes"}),6e4);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s.useEffect((function(){var e=setTimeout((function(){!function(){if(a.paused)console.log("paused");else{console.log("not paused");var e=0===a.seconds?a.minutes-1:a.minutes,t=0===a.seconds?59:a.seconds-1;o(Object(u.a)(Object(u.a)({},a),{},{minutes:e,seconds:t}))}if(a.seconds<=0&&a.minutes<=0){o(Object(u.a)(Object(u.a)({},a),{},{paused:!0}));try{W()}finally{try{C()}finally{var n=a.mode===c.Session?c.Break:c.Session,s=n===c.Break?Math.floor(N/60):Math.floor(L/60),r=n===c.Break?N%60:L%60;o(Object(u.a)(Object(u.a)({},a),{},{minutes:s,seconds:r,mode:n,paused:!1}))}}}}()}),1e3);return function(){return clearTimeout(e)}}));var W=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=x.current)){e.next=13;break}t.loop=!1,e.prev=3,t.play(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(3),alert("audio broken");case 10:return e.prev=10,e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[3,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=x.current;e&&(e.pause(),e.currentTime=0)};return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"row-center",children:Object(f.jsx)(w,{title:"Timer"})}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-5 offset-1",children:Object(f.jsx)(m,{name:"break",value:N,onUpdate:function(e){e<1||e>3600||(S(e),a.paused&&a.mode===c.Break&&o(Object(u.a)(Object(u.a)({},a),{},{minutes:Math.floor(e/60),seconds:e%60})))}})}),Object(f.jsx)("div",{className:"col-5",children:Object(f.jsx)(m,{name:"session",value:L,onUpdate:function(e){e<1||e>3600||(B(e),a.paused&&a.mode===c.Session&&o(Object(u.a)(Object(u.a)({},a),{},{minutes:Math.floor(e/60),seconds:e%60})))}})})]}),Object(f.jsxs)("div",{className:"row-center w-40 mt-1",children:[Object(f.jsx)("div",{className:"col-10 offset-1",children:Object(f.jsx)(O,{paused:a.paused,name:a.mode===c.Session?"Session":"Break",minutes:a.minutes,seconds:a.seconds,showBreak:a.mode===c.Break})}),Object(f.jsx)(h,{audioRef:x})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-6 offset-1 mt-1",children:Object(f.jsx)(p,{handler:function(){var e=!a.paused;o(Object(u.a)(Object(u.a)({},a),{},{paused:e})),M()}})}),Object(f.jsx)("div",{className:"col-4 mt-1",children:Object(f.jsx)(v,{handler:function(){B(e.sessionLength),S(e.breakLength),o({paused:!0,mode:c.Session,minutes:Math.floor(e.sessionLength/60),seconds:e.sessionLength%60}),M()}})})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))},N=n(6),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){if("serviceWorker"in navigator){if(new URL("/tomatopwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/tomatopwa","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWAversion 0.1005")}))):T(t,e)}))}}function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=function(){var e=a.a.useState(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],o=a.a.useState(null),r=Object(b.a)(o,2),i=r[0],l=r[1],d=function(e){c(!0),l(e.waiting)},u=function(){null===i||void 0===i||i.postMessage({type:"SKIP_WAITING"}),c(!1),window.location.reload()},j=Object(N.useToasts)().addToast;return Object(s.useEffect)((function(){y({onUpdate:d}),n&&j(Object(f.jsxs)("div",{role:"alert","aria-live":"assertive","aria-atomic":"true",children:[Object(f.jsxs)("div",{className:"toast-header",children:[Object(f.jsx)("strong",{className:"mr-auto",children:"Update"}),Object(f.jsx)("button",{type:"button",className:"ml-2 mb-1 close","data-dismiss":"toast","aria-label":"Close",onClick:u,children:Object(f.jsx)("span",{"aria-hidden":"true",children:"Reload"})})]}),Object(f.jsx)("div",{className:"toast-body",children:"A new version is available!"})]}),{appearance:"success",autoDismiss:!1})}),[]),null},B=n(16),C=function(){var e=Object(N.useToasts)().addToast,t=function t(n,s){e(Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:[n,Object(f.jsx)("br",{}),"Screen Wake Lock API supported: ",Object(f.jsx)("b",{children:"".concat(c)}),Object(f.jsx)("br",{}),"Released: ",Object(f.jsx)("b",{children:"".concat(s)})]}),Object(f.jsx)("button",{type:"button",onClick:function(){return!1===s?r():o().then((function(e){return t("ScreenLock active",!1)}))},children:!1===s?"Release":"Request"})]}),{appearance:!1===s?"success":"error",autoDismiss:!1===s})},n=Object(B.a)({onError:function(){return t("An error happened \ud83d\udca5",a)},onRelease:function(){return t("Screen Wake Lock: released!",a)}}),c=n.isSupported,a=n.released,o=n.request,r=n.release;return Object(s.useEffect)((function(){o().then((function(e){return t("ScreenLock active",!1)}))}),[]),null};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsxs)(N.ToastProvider,{children:[Object(f.jsx)(L,{}),Object(f.jsx)(g,{}),Object(f.jsx)(C,{})]})}),document.getElementById("root")),k()}},[[41,1,2]]]);
//# sourceMappingURL=main.919e7c8e.chunk.js.map