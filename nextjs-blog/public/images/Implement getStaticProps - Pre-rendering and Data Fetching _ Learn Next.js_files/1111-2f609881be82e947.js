(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1111],{36808:function(e,t,n){var o,r;!function(a){if(void 0===(r="function"===typeof(o=a)?o.call(t,n,t,e):o)||(e.exports=r),!0,e.exports=a(),!!0){var i=window.Cookies,c=window.Cookies=a();c.noConflict=function(){return window.Cookies=i,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function a(t,n,a){if("undefined"!==typeof document){"number"===typeof(a=e({path:"/"},r.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(l){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var s in a)a[s]&&(c+="; "+s,!0!==a[s]&&(c+="="+a[s].split(";")[0]));return document.cookie=t+"="+n+c}}function i(e,n){if("undefined"!==typeof document){for(var r={},a=document.cookie?document.cookie.split("; "):[],i=0;i<a.length;i++){var c=a[i].split("="),s=c.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var l=t(c[0]);if(s=(o.read||o)(s,l)||t(s),n)try{s=JSON.parse(s)}catch(u){}if(r[l]=s,e===l)break}catch(u){}}return e?r[e]:r}}return r.set=a,r.get=function(e){return i(e,!1)},r.getJSON=function(e){return i(e,!0)},r.remove=function(t,n){a(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))},32420:function(e,t,n){"use strict";n.d(t,{v:function(){return c},M:function(){return s}});var o=n(27378),r=n(25773);const a={prefix:Math.round(1e10*Math.random()),current:0},i=o.createContext(a),c=e=>{const t=o.useContext(i),n=t===a,c=o.useMemo((()=>({prefix:n?0:++t.prefix,current:0})),[n,t]);return o.createElement(i.Provider,(0,r.Z)({value:c},e))};function s(e){const t=o.useContext(i);return Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)||t!==a||console.warn("When server rendering, you must wrap your application in an <IdProvider> to ensure consistent ids are generated between the client and server."),o.useMemo((()=>e||`radix-id-${t.prefix}-${++t.current}`),[e])}},10288:function(e,t,n){"use strict";var o,r=n(24246),a=n(26976),i=n(94184),c=n.n(i),s=n(16445),l=n.n(s);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.Z=function(e){var t=e.size,n=void 0===t?2:t,i=e.height,s=e.children,f=e.reverse;return(0,r.jsxs)("span",{className:c()(l().loading,u({},l().reverse,f)),style:(o={},u(o,"--loading-dots-height",i?(0,a.Z)(i):void 0),u(o,"--loading-dots-size",2!==n?(0,a.Z)(n):void 0),o),"data-geist-loading-dots":"",children:[s&&(0,r.jsx)("div",{className:l().spacer,children:s}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{})]})}},12962:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(24246),r=n(94184),a=n.n(r),i=n(18504),c=n(42930),s=n(36995),l=n.n(s);function u(){return(0,o.jsx)("div",{children:(0,o.jsx)("footer",{className:a()(l().footer),children:(0,o.jsxs)("div",{className:l()["footer-legal"],children:[(0,o.jsx)("div",{className:l()["footer-copyright"],children:"Copyright \xa9 2021 Vercel, Inc. All rights reserved."}),(0,o.jsx)("span",{style:{height:32},className:l()["footer-mobile"]}),(0,o.jsxs)("div",{className:l()["footer-center-group"],children:[(0,o.jsx)("p",{className:l()["footer-paragraph"],children:(0,o.jsx)("a",{onClick:function(){(0,c.j)(c.x.EXTERNAL_LINK,{category:"marketing",page_version:"next.js",link_text:"Want to speak?",url:"https://vercel.notion.site/Call-for-Proposals-Next-js-Conf-October-2021-fc6f86dfb60045a997d6a8d828281df6"})},href:"https://vercel.notion.site/Call-for-Proposals-Next-js-Conf-October-2021-fc6f86dfb60045a997d6a8d828281df6",className:l()["footer-link"],target:"_blank",rel:"noopener noreferrer",children:"Want to speak?"})}),(0,o.jsx)("div",{className:l()["footer-separator"]}),(0,o.jsx)("p",{className:l()["footer-paragraph"],children:(0,o.jsx)("a",{onClick:function(){(0,c.j)(c.x.EXTERNAL_LINK,{category:"marketing",page_version:"next.js",link_text:"Code of Conduct",url:i.GX})},href:i.GX,className:l()["footer-link"],target:"_blank",rel:"noopener noreferrer",children:"Code of Conduct"})}),(0,o.jsx)("div",{className:l()["footer-separator"]}),(0,o.jsx)("p",{className:l()["footer-paragraph"],children:(0,o.jsx)("a",{onClick:function(){(0,c.j)(c.x.EXTERNAL_LINK,{category:"marketing",page_version:"next.js",link_text:"Accessibility",url:"https://vercel.notion.site/Next-js-Conf-Accessibility-b7be6c645b4c4e1281afe96478ceaecc"})},href:"https://vercel.notion.site/Next-js-Conf-Accessibility-b7be6c645b4c4e1281afe96478ceaecc",className:l()["footer-link"],target:"_blank",rel:"noopener noreferrer",children:"Accessibility"})}),(0,o.jsx)("div",{className:l()["footer-separator"]}),(0,o.jsx)("p",{className:l()["footer-paragraph"],children:(0,o.jsx)("a",{href:"https://vercel.com/legal/privacy-policy?utm_source=next-site&utm_medium=footer&utm_campaign=next-conf",className:l()["footer-link"],target:"_blank",rel:"noopener noreferrer",onClick:function(){(0,c.j)(c.x.EXTERNAL_LINK,{category:"marketing",page_version:"next.js",link_text:"Legal",url:"https://vercel.com/legal/privacy-policy?utm_source=next-site&utm_medium=footer&utm_campaign=next-conf"})},children:"Legal"})})]})]})})})}},60961:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var o=n(86248),r=n.n(o),a=n(24246),i=n(27378),c=n(94184),s=n.n(c),l=n(86677),u=n(54439),f=n(97503);function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e,t,n){return(p=d()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&_(r,n.prototype),r}).apply(null,arguments)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return!t||"object"!==x(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function g(e){var t="function"===typeof Map?new Map:void 0;return(g=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return p(e,arguments,h(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),_(o,e)})(e)}var y,v,b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,h(t).call(this))).res=e,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),t}(g(Error)),j=n(42930),w=n(10288),k=n(4150),N=n.n(k);function C(e,t,n,o,r,a,i){try{var c=e[a](i),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(o,r)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){C(a,o,r,i,c,"next",e)}function c(e){C(a,o,r,i,c,"throw",e)}i(void 0)}))}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){var t=e.sharePage,n=e.username,o=(0,i.useState)(""),c=o[0],d=o[1],p=(0,i.useState)(""),h=p[0],m=p[1],_=(0,i.useState)(!1),x=_[0],g=_[1],k=(0,i.useState)("default"),C=k[0],L=k[1],T=(0,u.ZP)(),R=T.userData,O=T.setPageState,I=T.setUserData,H=T.activeSkin,D=T.sessionPresent,A=(0,u.h)(),P=(0,u.Jy)(),Z=(0,l.useRouter)();(0,i.useEffect)((function(){if("URLSearchParams"in window){var e=window.location,t=e.search,n=e.pathname,o=new URLSearchParams(t),r=o.get("email");if(r){d(r),o.delete("email");var a=o.toString(),i=n+(a?"?".concat(a):""),c=Z.pathname+(a?"?".concat(a):"");history.replaceState({url:c,as:i,options:{shallow:!0}},"",i)}}}),[Z,R]);var M="error"===C?(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:s()(N().form,S({},N()["share-page"],t)),children:(0,a.jsx)("div",{className:N()["form-row"],children:(0,a.jsxs)("div",{className:s()(N()["input-label"],N().error),children:[(0,a.jsx)("div",{className:s()(N().input,N()["input-text"]),children:h}),(0,a.jsx)("button",{type:"button",className:s()(N().submit,N().register,N().error),onClick:function(){L("default")},children:"Try Again"})]})})}),(0,a.jsx)("div",{})]}):(0,a.jsx)("form",{className:s()(N().form,S({},N()["share-page"],t)),onSubmit:function(e){"default"===C?(L("loading"),fetch("/api/conf-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c})}).then(E(r().mark((function e(n){var o,a,i,s,l,f;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.ok){e.next=3;break}throw new b(n);case 3:return e.next=5,n.json();case 5:if(l=e.sent,(0,j.j)(j.x.REGISTRATION_SUBMITTED,{category:"marketing",page_version:"next.js",conference:"Next.js Oct 2021"}),fetch("/api/conf-webhook",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,referrer:document.referrer,queryParams:window.location.search,anonymousId:null===(s=i=null===(o=window.analytics)||void 0===o||null===(a=o.user)||void 0===a?void 0:a.call(o).anonymousId)||void 0===s?void 0:s.call(i)})}).catch((function(e){})),(0,u.ZK)(l),!t){e.next=15;break}return f=Object.keys(l).map((function(e){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(l[e]||""))})).join("&"),e.next=13,Z.replace("/conf?".concat(f,"&pageState=").concat(P?"authedTicket":"unauthedTicket"),"/conf");case 13:e.next=16;break;case 15:I(l),O(P?"authedTicket":"unauthedTicket");case 16:case"end":return e.stop()}}),e)})))).catch(E(r().mark((function e(t){var n,o,a,i,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="Error! Please try again.",r=t,!(null!=(s=b)&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](r):r instanceof s)){e.next=13;break}if(i=t.res,!(null===(o=i.headers.get("Content-Type"))||void 0===o?void 0:o.includes("application/json"))){e.next=10;break}return e.next=7,i.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=null;case 11:"bad_email"===(null===(c=e.t0)||void 0===c||null===(a=c.error)||void 0===a?void 0:a.code)&&(n="Please enter a valid email");case 13:m(n),L("error");case 15:case"end":return e.stop()}var r,s}),e)}))))):L("default"),e.preventDefault()},children:(0,a.jsxs)("div",{className:N()["form-row"],children:[(0,a.jsx)("div",{className:N()["input-label-wrapper"],style:(y={},S(y,"--input-label-border-color",(0,f._y)(H,.7)),S(y,"--input-label-border-color-hover",f.kq[H]),y),children:(0,a.jsx)("label",{htmlFor:"email-input-field",className:s()(N()["input-label"],S({},N().focused,x)),children:(0,a.jsx)("input",{autoFocus:!0,className:N().input,autoComplete:"off",type:"email",id:"email-input-field",value:c,onChange:function(e){return d(e.target.value)},onFocus:function(){return g(!0)},onBlur:function(){return g(!1)},maxLength:255,placeholder:"Enter email to register free","aria-label":"Your email address",required:!0})})}),(0,a.jsx)("button",{type:"submit",style:(v={},S(v,"--bg-color",f.kq[H]),S(v,"--font-color","lighthouse"===H||"swr"===H?"#000000":"#ffffff"),v),className:s()(N().submit,N().register,N()[C]),disabled:"loading"===C,children:"loading"===C?(0,a.jsx)(w.Z,{size:4}):(0,a.jsx)(a.Fragment,{children:"Claim Ticket"})})]})}),V=t&&A.username===n,U=(0,a.jsx)("div",{className:N()["redirect-div"],children:(0,a.jsx)("button",{type:"button",onClick:V?E(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.keys(A).map((function(e){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(A[e]||""))})).join("&"),e.next=3,Z.replace("/conf?".concat(t,"&pageState=").concat(A.username?"authedTicket":"unauthedTicket"),"/conf");case 3:case"end":return e.stop()}}),e)}))):function(){return Z.push("/conf/tickets/oct21/".concat(A.username||""))},className:s()(N().redirect,S({},N()["redirect-can-customize"],V)),disabled:"loading"===C,children:"loading"===C?(0,a.jsx)(w.Z,{size:4}):V?"Customize":"View your ticket"})});return(0,a.jsx)("div",{children:D?U:M})}},20253:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var o=n(24246),r=n(79892),a=n(94184),i=n.n(a),c=n(32420),s=n(16760),l=n(72056),u=n(27378),f=n(88038),d=n(18504),p=n(42930),h=n(494),m=n.n(h),_=n(86341),x=n.n(_),g=n(71846),y=n.n(g);function v(e){var t=e.className;return(0,o.jsx)("div",{className:i()(y()["conf-logo"],t),children:(0,o.jsxs)("svg",{role:"img","aria-labelledby":"logoTitle",width:"100%",height:"100%",viewBox:"0 0 280 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("title",{id:"logoTitle",children:"Next.js Conf"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M58.8234 20.8651H61.4937L73.3264 37.2914L85.421 20.8651L101.872 0L74.8448 39.0177L88.7718 58.2166H85.9969L73.3264 40.744L60.6036 58.2166H57.881L71.9128 39.0177L58.8234 20.8651ZM31.4406 20.8651H56.5721V22.853H33.7443V37.8145H55.2108V39.8024H33.7443V56.2287H56.8339V58.2166H31.4406V20.8651ZM89.7666 20.8651V22.853L102.908 22.853V58.2166H105.212V22.853H118.406V20.8651H89.7666Z",fill:"white"}),(0,o.jsx)("path",{d:"M0 20.8651H2.87965L42.5884 80L26.1787 58.2166L2.40844 23.69L2.30372 58.2166H0V20.8651Z",fill:"white"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M130.131 55.7293C128.338 55.7293 127.133 54.808 127.044 53.3674H128.288C128.394 54.1324 129.145 54.6181 130.226 54.6181C131.235 54.6181 131.975 54.0989 131.975 53.3842C131.975 52.77 131.504 52.4015 130.434 52.1502L129.392 51.899C127.929 51.5584 127.262 50.8548 127.262 49.6711C127.262 48.2362 128.439 47.2814 130.204 47.2814C131.846 47.2814 133.045 48.2362 133.118 49.593H131.896C131.778 48.8504 131.129 48.3869 130.187 48.3869C129.195 48.3869 128.534 48.8615 128.534 49.5874C128.534 50.1625 128.96 50.4919 130.013 50.7376L130.904 50.9553C132.563 51.3406 133.247 52.0106 133.247 53.2223C133.247 54.7633 132.047 55.7293 130.131 55.7293ZM120.438 53.44C120.438 54.8247 121.441 55.7293 122.903 55.7293C124.461 55.7293 125.402 54.7968 125.402 53.1776V47.4768H124.147V53.172C124.147 54.071 123.693 54.5511 122.892 54.5511C122.175 54.5511 121.687 54.1045 121.67 53.44H120.438ZM118.174 55.6288C118.65 55.6288 118.998 55.2658 118.998 54.7968C118.998 54.3278 118.65 53.9649 118.174 53.9649C117.703 53.9649 117.35 54.3278 117.35 54.7968C117.35 55.2658 117.703 55.6288 118.174 55.6288Z",fill:"white"}),(0,o.jsx)("path",{d:"M176.318 33C175.023 25.8409 169.295 21.6136 162.273 21.6136C153.341 21.6136 146.864 28.5 146.864 39.5455C146.864 50.5909 153.341 57.4773 162.273 57.4773C169.295 57.4773 175.023 53.25 176.318 46.0909H172.091C171.068 50.9318 166.909 53.5227 162.273 53.5227C155.932 53.5227 150.955 48.6136 150.955 39.5455C150.955 30.4773 155.932 25.5682 162.273 25.5682C166.909 25.5682 171.068 28.1591 172.091 33H176.318ZM212.604 39.5455C212.604 28.5 206.126 21.6136 197.195 21.6136C188.263 21.6136 181.786 28.5 181.786 39.5455C181.786 50.5909 188.263 57.4773 197.195 57.4773C206.126 57.4773 212.604 50.5909 212.604 39.5455ZM208.513 39.5455C208.513 48.6136 203.536 53.5227 197.195 53.5227C190.854 53.5227 185.876 48.6136 185.876 39.5455C185.876 30.4773 190.854 25.5682 197.195 25.5682C203.536 25.5682 208.513 30.4773 208.513 39.5455ZM247.393 22.0909H243.234V49.5682H242.893L223.803 22.0909H219.712V57H223.939V29.5909H224.28L243.303 57H247.393V22.0909ZM255.852 57H260.08V41.3864H275.216V37.6364H260.08V25.8409H276.784V22.0909H255.852V57Z",fill:"white"})]})})}var b=n(43300),j=n(25745),w=n.n(j);function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(s){r=!0,a=s}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function C(e){return 1===String(e).length?"0".concat(null!==e&&void 0!==e?e:""):null!==e&&void 0!==e?e:""}function E(e){var t=e.className,n=e.animate,r=void 0===n||n,a=e.isLive,c=void 0===a||a,s=N(u.useState(""),2),l=s[0],f=s[1],d=N(u.useState(null),2),p=d[0],h=d[1],m=u.useCallback((function(){p&&f(function(e){var t=e.days,n=e.hours,o=e.minutes,r=e.seconds;return e.total<=0?"Begins Shortly":"".concat(t?"".concat(C(t),"  "):"").concat(C(n),"  ").concat(C(o),"  ").concat(C(r))}(function(e){var t=b.nh.getTime()-Date.now()+e,n=Math.max(0,Math.floor(t/1e3%60)),o=Math.max(0,Math.floor(t/1e3/60%60)),r=Math.max(0,Math.floor(t/36e5%24));return{total:t,days:Math.max(0,Math.floor(t/864e5)),hours:r,minutes:o,seconds:n}}(p)))}),[p]);return u.useEffect((function(){fetch("/api/current-time").then((function(e){if(e.ok){var t,n=new Date(null!==(t=e.headers.get("Date"))&&void 0!==t?t:"");h(Date.now()-n.getTime())}})).catch((function(){}))}),[]),u.useEffect((function(){if(!c){var e=setInterval((function(){m()}),1e3);return function(){return clearInterval(e)}}}),[m,c]),u.useEffect((function(){p&&(c||m())}),[r,m,p,c]),(0,o.jsx)("span",{"aria-hidden":"true",className:i()(w().countdown,t),"data-live":c,children:(0,o.jsxs)("span",{className:w()["countdown-text"],children:[(0,o.jsxs)("span",{className:w().flex,children:[(0,o.jsxs)("span",{className:w()["countdown-text-top"],children:[(0,o.jsx)("span",{className:w()["countdown-text-digit"],children:l[0]}),(0,o.jsx)("span",{className:w()["countdown-text-digit"],children:l[1]})]}),(0,o.jsx)("span",{className:w()["countdown-text-bottom"],children:"days"})]}),(0,o.jsx)("span",{className:w()["countdown-text-spacer"]}),(0,o.jsxs)("span",{className:w().flex,children:[(0,o.jsxs)("span",{className:w()["countdown-text-top"],children:[(0,o.jsx)("span",{className:w()["countdown-text-digit"],children:l[4]}),(0,o.jsx)("span",{className:w()["countdown-text-digit"],children:l[5]})]}),(0,o.jsx)("span",{className:w()["countdown-text-bottom"],children:"hours"})]}),(0,o.jsx)("span",{className:w()["countdown-text-spacer"]}),(0,o.jsxs)("span",{className:w().flex,children:[(0,o.jsxs)("span",{className:w()["countdown-text-top"],children:[(0,o.jsx)("span",{className:w()["countdown-text-digit"],children:l[8]}),(0,o.jsx)("span",{className:w()["countdown-text-digit"],children:l[9]})]}),(0,o.jsx)("span",{className:w()["countdown-text-bottom"],children:"mins"})]}),(0,o.jsx)("span",{className:w()["countdown-text-spacer"]}),(0,o.jsxs)("span",{className:w().flex,children:[(0,o.jsxs)("span",{className:w()["countdown-text-top"],children:[(0,o.jsx)("span",{className:w()["countdown-text-digit"],children:l[12]}),(0,o.jsx)("span",{className:w()["countdown-text-digit"],children:l[13]})]}),(0,o.jsx)("span",{className:w()["countdown-text-bottom"],children:"secs"})]})]})})}function S(e){return(0,o.jsx)(E,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){k(e,t,n[t])}))}return e}({},e))}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){L(e,t,n[t])}))}return e}function R(e){var t=e.children,n=e.className,a=e.layoutStyles,h=(0,u.useState)(!1),_=h[0],g=h[1],y=(0,l.Z)(_,{enterDelay:20,exitDelay:300}),b=y.mounted,j=y.rendered;return(0,u.useEffect)((function(){return document.documentElement.style.background="#000",document.body.style.background="#000",function(){document.documentElement.style.background="#fff",document.body.style.background="#fff"}}),[]),(0,o.jsxs)(c.v,{children:[(0,o.jsxs)(f.default,{children:[(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap",rel:"stylesheet"})]}),(0,o.jsxs)("div",{"data-menu-open":_,className:"jsx-64c541a4cfac9589 "+(x().background||""),children:[(0,o.jsxs)("header",{className:"jsx-64c541a4cfac9589 "+(i()(x().header,m().appear,m()["appear-first"])||""),children:[(0,o.jsx)(v,{className:x().logo}),(0,o.jsx)("div",{className:"jsx-64c541a4cfac9589 "+(x()["countdown-wrapper"]||""),children:(0,o.jsx)(S,{className:x().countdown,isLive:!1})}),(0,o.jsxs)("button",{"aria-label":"Toggle menu",type:"button",onClick:function(){_?(g(!1),document.body.style.overflow=""):(g(!0),document.body.style.overflow="hidden")},className:"jsx-64c541a4cfac9589 "+(x().burger||""),children:[(0,o.jsx)(O,{"data-hide":_}),(0,o.jsx)(I,{"data-hide":!_})]})]}),b&&(0,o.jsxs)("ul",{className:"jsx-64c541a4cfac9589 "+(i()(x().menu,j&&x().menuRendered)||""),children:[(0,o.jsx)("li",{style:{transitionDelay:"200ms"},className:"jsx-64c541a4cfac9589",children:(0,o.jsx)("a",{onClick:function(){(0,p.j)(p.x.EXTERNAL_LINK,{category:"marketing",page_version:"next.js",link_text:"Want to speak?",url:"https://vercel.notion.site/Call-for-Proposals-Next-js-Conf-October-2021-fc6f86dfb60045a997d6a8d828281df6"})},href:"https://vercel.notion.site/Call-for-Proposals-Next-js-Conf-October-2021-fc6f86dfb60045a997d6a8d828281df6",target:"_blank",rel:"noopener noreferrer",className:"jsx-64c541a4cfac9589",children:"Want to speak?"})}),(0,o.jsx)("li",{style:{transitionDelay:"250ms"},className:"jsx-64c541a4cfac9589",children:(0,o.jsx)("a",{onClick:function(){(0,p.j)(p.x.EXTERNAL_LINK,{category:"marketing",page_version:"next.js",link_text:"Code of Conduct",url:d.GX})},href:d.GX,target:"_blank",rel:"noopener noreferrer",className:"jsx-64c541a4cfac9589",children:"Code of Conduct"})}),(0,o.jsx)("li",{style:{transitionDelay:"300ms"},className:"jsx-64c541a4cfac9589",children:(0,o.jsx)("a",{onClick:function(){(0,p.j)(p.x.EXTERNAL_LINK,{category:"marketing",page_version:"next.js",link_text:"Accessibility",url:"https://vercel.notion.site/Next-js-Conf-Accessibility-b7be6c645b4c4e1281afe96478ceaecc"})},href:"https://vercel.notion.site/Next-js-Conf-Accessibility-b7be6c645b4c4e1281afe96478ceaecc",target:"_blank",rel:"noopener noreferrer",className:"jsx-64c541a4cfac9589",children:"Accessibility"})}),(0,o.jsx)("li",{style:{transitionDelay:"350ms"},className:"jsx-64c541a4cfac9589",children:(0,o.jsx)("a",{href:"https://vercel.com/legal/privacy-policy?utm_source=next-site&utm_medium=footer&utm_campaign=next-conf",target:"_blank",rel:"noopener noreferrer",onClick:function(){(0,p.j)(p.x.EXTERNAL_LINK,{category:"marketing",page_version:"next.js",link_text:"Legal",url:"https://vercel.com/legal/privacy-policy?utm_source=next-site&utm_medium=footer&utm_campaign=next-conf"})},className:"jsx-64c541a4cfac9589",children:"Legal"})}),(0,o.jsxs)("footer",{className:"jsx-64c541a4cfac9589 "+(x().copyright||""),children:["Copyright \xa9 2021 Vercel, Inc. ",(0,o.jsx)("br",{className:"jsx-64c541a4cfac9589"})," All rights reserved."]})]}),(0,o.jsx)("div",{className:"jsx-64c541a4cfac9589 "+(x().page||""),children:(0,o.jsxs)("main",{style:a,className:"jsx-64c541a4cfac9589 "+(x().main||""),children:[(0,o.jsx)(s.f,{}),(0,o.jsx)("div",{className:"jsx-64c541a4cfac9589 "+(i()(x().full,n)||""),children:t})]})}),(0,o.jsx)(r.default,{id:"64c541a4cfac9589",children:"::selection {background:#f81ce5!important;\ncolor:#fff!important}"})]})]})}function O(e){return(0,o.jsxs)("svg",T({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},e,{children:[(0,o.jsx)("path",{d:"M2.5 7.5H17.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M2.5 12.5H17.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}function I(e){return(0,o.jsxs)("svg",T({viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision"},e,{children:[(0,o.jsx)("path",{d:"M18 6L6 18"}),(0,o.jsx)("path",{d:"M6 6l12 12"})]}))}},39118:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var o=n(24246),r=n(69747),a=n(79892),i=n(27378),c=n(94184),s=n.n(c),l=n(56426),u=n(15012),f=n(13531),d=function(e){var t=e.sticky,n=void 0===t||t,r=e.hideHeaderBorder,c=void 0!==r&&r,d=(0,i.useState)(!1),p=d[0],h=d[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{}),(0,o.jsx)("header",{className:a.default.dynamic([["2aa6ed15ec56364c",[c||p?"":"border-bottom: 1px solid #eaeaea;"]]])+" "+(s()({sticky:n})||""),children:(0,o.jsx)(u.Z,{setMenuOpen:h,menuOpen:p})}),p&&(0,o.jsx)("div",{className:a.default.dynamic([["2aa6ed15ec56364c",[c||p?"":"border-bottom: 1px solid #eaeaea;"]]])+" mobile-menu-wrapper",children:(0,o.jsx)(f.Z,{})}),(0,o.jsx)(a.default,{id:"2aa6ed15ec56364c",dynamic:[c||p?"":"border-bottom: 1px solid #eaeaea;"],children:"header.__jsx-style-dynamic-selector {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:space-around;\njustify-content:space-around;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nwidth:100%;\nbackground:#fff;\nz-index:1000;\n".concat(c||p?"":"border-bottom: 1px solid #eaeaea;"," }\nheader.sticky.__jsx-style-dynamic-selector {position:-webkit-sticky;\nposition:sticky;\ntop:0}\n.mobile-menu-wrapper.__jsx-style-dynamic-selector {position:-webkit-sticky;\nposition:sticky;\ntop:80px;\nz-index:2000}")})]})},p=(0,i.memo)(d);function h(e){var t=e.title,n=e.description,a=void 0===n?void 0:n,i=e.sticky,c=void 0===i?void 0:i,s=e.children,l=e.hideHeader,u=e.hideHeaderBorder,f=void 0!==u&&u,d=e.fullViewport,h=void 0!==d&&d;return(0,o.jsxs)(r.Z,{fullViewport:h,title:t,description:a,children:[!l&&(0,o.jsx)(p,{sticky:c,hideHeaderBorder:f}),s]})}},36892:function(e,t,n){"use strict";var o=n(24246),r=n(88038),a=n(43300);t.Z=function(e){var t=e.title,n=e.description,i=e.image,c=e.url,s=e.keywords,l=void 0===s?void 0:s;return(0,o.jsxs)(r.default,{children:[(0,o.jsx)("meta",{name:"twitter:site",content:"@".concat(a.N5)}),(0,o.jsx)("meta",{name:"twitter:card",content:i?"summary_large_image":"summary"}),t&&(0,o.jsx)("meta",{property:"og:title",content:t}),c&&(0,o.jsx)("meta",{property:"og:url",content:c}),n&&(0,o.jsx)("meta",{name:"description",content:n}),n&&(0,o.jsx)("meta",{property:"og:description",content:n}),i&&(0,o.jsx)("meta",{property:"og:image",content:i.startsWith("https://")?i:"".concat(a._O).concat(i)}),l&&(0,o.jsx)("meta",{name:"keywords",content:l})]})}},18504:function(e,t,n){"use strict";n.d(t,{ic:function(){return a},GX:function(){return c},qZ:function(){return s},G:function(){return l},mS:function(){return u}});var o=n(43300),r=n(97503);function a(){return Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<1200}var i,c="https://vercel.notion.site/Next-js-Conf-Code-of-Conduct-2dae92927656409db28aaf2a62d99c41",s=i=o._O,l=i;function u(e,t){return"/conf/oct21/download-ticket/oct-21-".concat(r.DN[t],"/").concat(e)}},97503:function(e,t,n){"use strict";n.d(t,{wv:function(){return o},DN:function(){return r},MH:function(){return a},kq:function(){return i},_y:function(){return c}});var o=["edge","cache","isr","lighthouse","live","rust","swr"];var r={edge:1,cache:2,isr:3,lighthouse:4,live:5,rust:6,swr:7,placeholder:0},a={edge:"Now push it to the edge.",cache:"Now tell the world.",isr:"Sharing is key.",lighthouse:"Light the way for others.",live:"Now make it a team event.",rust:"Share before it rusts.",swr:"Share before it's stale.",placeholder:"Now tell the world."},i={edge:"#FF4FCD",cache:"#3291FF",isr:"#E02960",lighthouse:"#7AE08A",live:"#8A63D2",rust:"#CC5446",swr:"#FFE066",placeholder:"#888888"},c=function(e,t){return{edge:"rgba(255, 79, 205, ".concat(t,")"),cache:"rgba(50, 145, 255, ".concat(t,")"),isr:"rgba(224, 41, 96, ".concat(t,")"),lighthouse:"rgba(122, 224, 138, ".concat(t,")"),live:"rgba(138, 99, 210, ".concat(t,")"),rust:"rgba(204, 84, 70, ".concat(t,")"),swr:"rgba(255, 224, 102, ".concat(t,")"),placeholder:"#888888"}[e]}},18484:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(27378),r=function(){};function a(e,t){var n=(0,o.useRef)(r);(0,o.useEffect)((function(){n.current=e}),[e]),(0,o.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}},54439:function(e,t,n){"use strict";n.d(t,{o2:function(){return i},ZP:function(){return c},ZK:function(){return u},h:function(){return f},Eo:function(){return d},Jy:function(){return p}});var o=n(27378),r=n(36808),a=n.n(r),i=(0,o.createContext)(null);function c(){var e=(0,o.useContext)(i);if(!e)throw new Error;return e}var s="userDataOct21",l="sessionTokenOct21";function u(e){a().set(s,JSON.stringify(e),{secure:!0,expires:365})}function f(){var e=(0,o.useState)({}),t=e[0],n=e[1];return(0,o.useEffect)((function(){n(JSON.parse(a().get(s)||"{}"))}),[]),t}function d(e){a().set(l,e,{secure:!0,expires:365})}function p(){var e=(0,o.useState)(),t=e[0],n=e[1];return(0,o.useEffect)((function(){n(Boolean(a().get(l)))}),[]),t}},95743:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(27378),r=n(18484);function a(e){var t=(0,o.useState)(!1),n=t[0],a=t[1];(0,r.Z)((function(){"analytics"in window&&"page"in window.analytics&&a(!0)}),n?null:500),(0,o.useEffect)((function(){n?window.analytics.page({name:e,url:location.href,title:document.title,referrer:document.referrer,search:location.search}):"analytics"in window&&"page"in window.analytics&&a(!0)}),[n,e])}},42930:function(e,t,n){"use strict";var o;function r(e,t){var n,o;null===(n=window.analytics)||void 0===n||null===(o=n.track)||void 0===o||o.call(n,e,t)}n.d(t,{x:function(){return o},j:function(){return r}}),function(e){e.PAGE_VISIT_MAIN="Landing Page Loaded",e.PAGE_VISIT_TICKETS="Tickets Page Loaded",e.REGISTRATION_SUBMITTED="Conference Registration",e.GITHUB_AUTH="Connect Github",e.TWITTER_SHARE="Share Twitter",e.LINKEDIN_SHARE="Share Linkedin",e.COPY_URL="Copy URL",e.EXTERNAL_LINK="External Link"}(o||(o={}))},16445:function(e){e.exports={loading:"loading-dots_loading__2Oyhk",spacer:"loading-dots_spacer__DoxZS",blink:"loading-dots_blink__2CT8K",reverse:"loading-dots_reverse__tu74o"}},71846:function(e){e.exports={"conf-logo":"conf-logo_conf-logo__2TiLV"}},25745:function(e){e.exports={countdown:"countdown_countdown__3yDZN",value:"countdown_value__2urHR","countdown-text":"countdown_countdown-text__kGw50",flex:"countdown_flex__AF4aC","countdown-text-bottom":"countdown_countdown-text-bottom__3vFcH","countdown-text-digit":"countdown_countdown-text-digit__2jDA1","countdown-text-spacer":"countdown_countdown-text-spacer__109p4"}},36995:function(e){e.exports={footer:"footer_footer__1Dd5l","footer-link":"footer_footer-link__3Eozf","footer-logo":"footer_footer-logo__2pHC2","footer-legal":"footer_footer-legal__1D5PK","footer-copyright":"footer_footer-copyright__Qg4jR","footer-center-group":"footer_footer-center-group__1Pccf","footer-separator":"footer_footer-separator__1jbOe","footer-stats":"footer_footer-stats__1AU07","fade-in":"footer_fade-in__2eSF7","footer-stat":"footer_footer-stat__2Kw3z","footer-stat-online":"footer_footer-stat-online__1a1yD","footer-mobile":"footer_footer-mobile__146hT","footer-stats-desktop":"footer_footer-stats-desktop__1Hakq","footer-paragraph":"footer_footer-paragraph__3xrLb","secondary-text":"footer_secondary-text__QcAyo",separator:"footer_separator__3pLkK"}},4150:function(e){e.exports={form:"form_form__13CnQ","input-label-wrapper":"form_input-label-wrapper__20mow","share-page":"form_share-page__1HAvB",input:"form_input__2htju",error:"form_error__coNEa","input-label":"form_input-label__25BRR",focused:"form_focused__3n4xF",success:"form_success__f3zy4","input-text":"form_input-text__26Tye","form-row":"form_form-row__2i86W",submit:"form_submit__30asv","generate-with-github":"form_generate-with-github__1OSCe",register:"form_register__31h1o",loading:"form_loading__beKAR",default:"form_default__2_cQH",subtext:"form_subtext__HEqMR","redirect-div":"form_redirect-div__L5lUS",redirect:"form_redirect__3oQC4","redirect-can-customize":"form_redirect-can-customize__2Kp7u"}},86341:function(e){e.exports={background:"layout_background__1cqt4",logo:"layout_logo__24vSg","header-right":"layout_header-right__3EG2L",burger:"layout_burger__2UXjf",page:"layout_page__fQtxD",main:"layout_main__3rA1U",full:"layout_full__1aqJt",header:"layout_header__2BMVC","description-separator":"layout_description-separator__3AGWG",grow:"layout_grow__2GloU",clearBlack:"layout_clearBlack__2GyUn",menu:"layout_menu__2e7hL",menuRendered:"layout_menuRendered__ff8lY",copyright:"layout_copyright__lsWZg",speakers:"layout_speakers__3h2Wh","countdown-wrapper":"layout_countdown-wrapper__2hr1g",slide:"layout_slide__3MEZn",scaleDot:"layout_scaleDot__2nbhR"}},494:function(e){e.exports={appear:"utils_appear__2LLIW","appear-first":"utils_appear-first__37s2P","appear-second":"utils_appear-second__2IcNN","appear-third":"utils_appear-third__2uuXZ","appear-fourth":"utils_appear-fourth__3JNuL","appear-fifth":"utils_appear-fifth__u_n3U","appear-sixth":"utils_appear-sixth__qGnCj","show-on-desktop":"utils_show-on-desktop__3TGGZ","hide-on-desktop":"utils_hide-on-desktop__3Js16","show-on-mobile":"utils_show-on-mobile__31-Dg","hide-on-mobile":"utils_hide-on-mobile__R7030",separator:"utils_separator__1oznJ","hide-on-tablet":"utils_hide-on-tablet__3Bn8b","show-on-tablet":"utils_show-on-tablet__QTDb2"}},72056:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(27378);function r(e,t){void 0===e&&(e=!1),void 0===t&&(t={enterDelay:0,exitDelay:0});var n=(0,o.useState)(e),r=n[0],a=n[1],i=(0,o.useState)(!1),c=i[0],s=i[1],l=(0,o.useRef)(),u=(0,o.useRef)(null),f=(0,o.useRef)(t);return(0,o.useEffect)((function(){f.current=t}),[t]),(0,o.useEffect)((function(){l.current&&clearTimeout(l.current);var t=f.current,n=t.enterDelay,o=t.exitDelay,r=t.onUnmount;if(e)u.current=Date.now(),a(!0),-1===n?"requestIdleCallback"in window?window.requestIdleCallback((function(){s(!0)}),{timeout:100}):setTimeout((function(){s(!0)}),1):0===n?s(!0):l.current=setTimeout((function(){s(!0)}),n);else{s(!1);var i=o;if(u.current){var c=Date.now()-u.current;n&&c<n?i=0:o&&c<o&&(i=c)}0===i?(a(!1),u.current&&(null==r||r())):l.current=setTimeout((function(){a(!1),u.current&&(null==r||r())}),i)}}),[e]),{mounted:r,rendered:c}}}}]);