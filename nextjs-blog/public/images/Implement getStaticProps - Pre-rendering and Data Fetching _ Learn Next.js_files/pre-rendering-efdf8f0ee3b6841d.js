(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8537],{90029:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/data-fetching/pre-rendering",function(){return r(73228)}])},36971:function(e,n,r){"use strict";r.d(n,{Z:function(){return h}});var t=r(24246),a=r(79892),s=(r(27378),function(e){var n=e.color;return(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:(0,t.jsx)("g",{fill:n||"#111111",children:(0,t.jsx)("path",{d:"M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z",fill:n||"#111111"})})})}),o=r(17701),c=r(27764),i=r(51898);function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,s=void 0;try{for(var o,c=e[u.iterator]();!(t=(o=c.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(i){a=!0,s=i}finally{try{t||null==c.return||c.return()}finally{if(a)throw s}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(e){return(0,t.jsxs)("div",{className:"jsx-e41de8c448394091",children:[e.children,(0,t.jsx)(a.default,{id:"e41de8c448394091",children:"div.jsx-e41de8c448394091 {background:#fafafa;\nborder:1px solid #eaeaea;\nborder-radius:8px;\npadding:0 16px 16px 16px;\nmargin-top:2rem;\nmargin-bottom:4rem;\ncounter-reset:answer-list}"})]})},d=function(e){var n=e.value,r=e.onChange,s=e.selected,o=e.readOnly,c=e.children;return(0,t.jsxs)("label",{className:a.default.dynamic([["ae9fa373db549f1c",[o?"":"cursor: pointer;"]]])+" "+"f5".concat(o?" disabled":""),children:[(0,t.jsx)("input",{type:"radio",value:n,name:"answer",onChange:r,disabled:o,defaultChecked:s,className:a.default.dynamic([["ae9fa373db549f1c",[o?"":"cursor: pointer;"]]])}),(0,t.jsx)("span",{className:a.default.dynamic([["ae9fa373db549f1c",[o?"":"cursor: pointer;"]]]),children:c}),(0,t.jsx)(a.default,{id:"ae9fa373db549f1c",dynamic:[o?"":"cursor: pointer;"],children:"input.__jsx-style-dynamic-selector {display:none}\ninput.__jsx-style-dynamic-selector:checked +span.__jsx-style-dynamic-selector {color:#111;\nborder-color:#111;\nbox-shadow:0 0 0 3px #c1c1c1;\nfont-weight:600}\nlabel.__jsx-style-dynamic-selector {display:block;\nmargin:0.5rem 0;\n".concat(o?"":"cursor: pointer;"," }\nlabel.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before {counter-increment:answer-list;\ncontent:counter(answer-list, upper-alpha) '. ';\ndisplay:inline-block;\nwidth:1.5rem}\nspan.__jsx-style-dynamic-selector {color:#666;\ndisplay:block;\npadding:0.5rem 1rem;\nborder-radius:7px;\nborder:1px solid #666;\nbackground:white;\n-webkit-transition:box-shadow 0.2s ease;\ntransition:box-shadow 0.2s ease}\n.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector +span.__jsx-style-dynamic-selector {border-color:#eaeaea}\n.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked +span.__jsx-style-dynamic-selector {color:unset;\nfont-weight:500;\nbackground:white;\nborder-color:#111}")})]})},u=function(e){var n=e.correct,r=e.selected;return n||r?(0,t.jsxs)("span",{className:"jsx-bebc3d1a0cbd6a11",children:[n?(0,t.jsx)(o.Z,{color:"#0070f3"}):(0,t.jsx)(s,{color:"#e00"}),(0,t.jsx)(a.default,{id:"bebc3d1a0cbd6a11",children:"span.jsx-bebc3d1a0cbd6a11 {display:inline-block;\nline-height:1;\nvertical-align:middle;\nmargin-left:0.25rem}"})]}):null},m=function(e){var n=e.answer,r=e.correctAnswer;return(0,t.jsxs)(t.Fragment,{children:["undefined"!==typeof n&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u,{correct:n===r,selected:!0})," "]}),"undefined"===typeof n?(0,t.jsxs)(t.Fragment,{children:["The correct answer is: ",(0,t.jsx)("strong",{className:"jsx-70bc04033ab1c4b9",children:r})]}):n===r?(0,t.jsxs)("span",{className:"jsx-70bc04033ab1c4b9 correct-message",children:[(0,t.jsx)("strong",{className:"jsx-70bc04033ab1c4b9",children:"Correct."})," Good job!"]}):(0,t.jsxs)("span",{className:"jsx-70bc04033ab1c4b9 incorrect-message",children:[(0,t.jsx)("strong",{className:"jsx-70bc04033ab1c4b9",children:"Incorrect,"})," but nice try!"]}),(0,t.jsx)(a.default,{id:"70bc04033ab1c4b9",children:".correct-message.jsx-70bc04033ab1c4b9 {color:#0070f3}\n.incorrect-message.jsx-70bc04033ab1c4b9 {color:#e00}"})]})},h=function(e){var n=e.meta,r=e.answers,s=e.correctAnswer,o=e.children,h=l((0,i.a)(n),2),f=h[0],b=h[1];return(0,t.jsxs)(p,{children:[o,r.map((function(e){return(0,t.jsxs)(d,{value:e,selected:e===f.answer,onChange:function(e){return b({type:"answer",answer:e.target.value})},readOnly:f.submitted,children:[e," ",f.submitted&&(0,t.jsx)(u,{correct:e===s,selected:e===f.answer})]},e)})),(0,t.jsxs)("div",{className:"jsx-96319d8491e83c58",children:[f.submitted?(0,t.jsx)(m,{answer:f.answer,correctAnswer:s}):(0,t.jsx)(c.Z,{onClick:function(){b({type:"submit"}),f.answer===s&&b({type:"check"})},color:"#252525",shadowColor:"rgba(0, 0, 0, 0.2)",invert:!0,children:"Submit"}),(0,t.jsx)(a.default,{id:"96319d8491e83c58",children:"div.jsx-96319d8491e83c58 {margin-top:2rem}"})]})]})}},73228:function(e,n,r){"use strict";r.r(n),r.d(n,{meta:function(){return f},default:function(){return x}});var t=r(24246),a=r(27378),s=r(65977),o=r(8990),c=r(75691),i=r(36971);function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function u(e,n){return!n||"object"!==h(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},f={title:"Pre-rendering and Data Fetching",courseId:"basics",lessonId:"data-fetching",stepId:"pre-rendering",subtitle:"Pre-rendering"},b={meta:f},x=function(e){function n(e){var r;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(r=u(this,p(n).call(this,e))).layout=function(e){var n=e.children;return(0,t.jsx)(o.Z,{meta:f,children:n})},r}var r,a,h;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,e),r=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components,r=d(e,["components"]);return(0,t.jsxs)(s.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},b,r),components:n,children:[(0,t.jsxs)(s.XJ,{name:"p",components:n,children:["Before we talk about ",(0,t.jsx)(s.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/data-fetching"},children:"data fetching"}),", let\u2019s talk about one of the most important concepts in Next.js: ",(0,t.jsx)(s.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/pages#pre-rendering"},children:(0,t.jsx)(s.XJ,{name:"strong",components:n,parentName:"a",children:"Pre-rendering"})}),"."]}),(0,t.jsxs)(s.XJ,{name:"p",components:n,children:["By default, Next.js pre-renders every page. This means that Next.js ",(0,t.jsx)(s.XJ,{name:"em",components:n,parentName:"p",children:"generates HTML for each page in advance"}),", instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and ",(0,t.jsx)(s.XJ,{name:"a",components:n,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Search_engine_optimization"},children:"SEO"}),"."]}),(0,t.jsxs)(s.XJ,{name:"p",components:n,children:["Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called ",(0,t.jsx)(s.XJ,{name:"strong",components:n,parentName:"p",children:"hydration"}),".)"]}),(0,t.jsx)(s.XJ,{name:"h3",components:n,children:"Check That Pre-rendering Is Happening"}),(0,t.jsx)(s.XJ,{name:"p",components:n,children:"You can check that pre-rendering is happening by taking the following steps:"}),(0,t.jsxs)(s.XJ,{name:"ul",components:n,children:[(0,t.jsxs)(s.XJ,{name:"li",components:n,parentName:"ul",children:["Disable JavaScript in your browser (",(0,t.jsx)(s.XJ,{name:"a",components:n,parentName:"li",props:{href:"https://developers.google.com/web/tools/chrome-devtools/javascript/disable"},children:"here\u2019s how in Chrome"}),") and\u2026"]}),(0,t.jsxs)(s.XJ,{name:"li",components:n,parentName:"ul",children:[(0,t.jsx)(s.XJ,{name:"a",components:n,parentName:"li",props:{href:"https://next-learn-starter.vercel.app/"},children:"Try accessing this page"})," (the final result of this tutorial)."]})]}),(0,t.jsx)(s.XJ,{name:"p",components:n,children:"You should see that your app is rendered without JavaScript. That\u2019s because Next.js has pre-rendered the app into static HTML, allowing you to see the app UI without running JavaScript."}),(0,t.jsx)(s.XJ,{name:"blockquote",components:n,children:(0,t.jsxs)(s.XJ,{name:"p",components:n,parentName:"blockquote",children:[(0,t.jsx)(s.XJ,{name:"strong",components:n,parentName:"p",children:"Note"}),": You can also try the above steps on ",(0,t.jsx)(s.XJ,{name:"inlineCode",components:n,parentName:"p",children:"localhost"}),", but CSS won\u2019t be loaded if you disable JavaScript."]})}),(0,t.jsxs)(s.XJ,{name:"p",components:n,children:["If your app is a plain React.js app (without Next.js), there\u2019s no ",(0,t.jsx)(s.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/pages#pre-rendering"},children:"pre-rendering"}),", so you won\u2019t be able to see the app if you disable JavaScript. For example:"]}),(0,t.jsxs)(s.XJ,{name:"ul",components:n,children:[(0,t.jsxs)(s.XJ,{name:"li",components:n,parentName:"ul",children:["Enable JavaScript in your browser and ",(0,t.jsx)(s.XJ,{name:"a",components:n,parentName:"li",props:{href:"https://create-react-app.examples.vercel.com/"},children:"check out this page"}),". This is a plain React.js app built with ",(0,t.jsx)(s.XJ,{name:"a",components:n,parentName:"li",props:{href:"https://create-react-app.dev/"},children:"Create React App"}),"."]}),(0,t.jsxs)(s.XJ,{name:"li",components:n,parentName:"ul",children:["Now, disable JavaScript and access ",(0,t.jsx)(s.XJ,{name:"a",components:n,parentName:"li",props:{href:"https://create-react-app.examples.vercel.com/"},children:"the same page"})," again."]}),(0,t.jsx)(s.XJ,{name:"li",components:n,parentName:"ul",children:"You won\u2019t see the app anymore \u2014 instead, it\u2019ll say \u201cYou need to enable JavaScript to run this app.\u201d This is because the app is not pre-rendered into static HTML."})]}),(0,t.jsx)(s.XJ,{name:"h3",components:n,children:"Summary: Pre-rendering vs No Pre-rendering"}),(0,t.jsx)(s.XJ,{name:"p",components:n,children:"Here\u2019s a quick graphical summary:"}),(0,t.jsx)(c.Z,{shadow:!0,alt:"Pre-rendering",oversize:!1,src:"/static/images/learn/data-fetching/pre-rendering.png",width:693,height:412}),(0,t.jsx)(c.Z,{shadow:!0,alt:"No pre-rendering",oversize:!1,src:"/static/images/learn/data-fetching/no-pre-rendering.png",width:693,height:344}),(0,t.jsxs)(s.XJ,{name:"p",components:n,children:["Next, let\u2019s talk about ",(0,t.jsx)(s.XJ,{name:"strong",components:n,parentName:"p",children:"two forms"})," of pre-rendering in Next.js."]}),(0,t.jsx)(i.Z,{meta:f,answers:["Improved SEO","Allows your application to work without JavaScript","Allows your application to only run server-side"],correctAnswer:"Allows your application to only run server-side",children:(0,t.jsxs)(s.XJ,{name:"p",components:n,children:[(0,t.jsx)(s.XJ,{name:"strong",components:n,parentName:"p",children:"Quick Review"}),": Which of the following is ",(0,t.jsx)(s.XJ,{name:"strong",components:n,parentName:"p",children:"not"})," a benefit of pre-rendering?"]})})]})}}])&&l(r.prototype,a),h&&l(r,h),n}(a.Component);x.isMDXComponent=!0}},function(e){e.O(0,[9774,4442,7879,6337,7835,3502,7769,5691,2888,179],(function(){return n=90029,e(e.s=n);var n}));var n=e.O();_N_E=n}]);