(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2116],{74651:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/data-fetching/getstaticprops-details",function(){return a(47747)}])},36971:function(e,n,a){"use strict";a.d(n,{Z:function(){return h}});var s=a(24246),t=a(79892),o=(a(27378),function(e){var n=e.color;return(0,s.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:(0,s.jsx)("g",{fill:n||"#111111",children:(0,s.jsx)("path",{d:"M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z",fill:n||"#111111"})})})}),r=a(17701),c=a(27764),p=a(51898);function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=[],s=!0,t=!1,o=void 0;try{for(var r,c=e[d.iterator]();!(s=(r=c.next()).done)&&(a.push(r.value),!n||a.length!==n);s=!0);}catch(p){t=!0,o=p}finally{try{s||null==c.return||c.return()}finally{if(t)throw o}}return a}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(e){return(0,s.jsxs)("div",{className:"jsx-e41de8c448394091",children:[e.children,(0,s.jsx)(t.default,{id:"e41de8c448394091",children:"div.jsx-e41de8c448394091 {background:#fafafa;\nborder:1px solid #eaeaea;\nborder-radius:8px;\npadding:0 16px 16px 16px;\nmargin-top:2rem;\nmargin-bottom:4rem;\ncounter-reset:answer-list}"})]})},l=function(e){var n=e.value,a=e.onChange,o=e.selected,r=e.readOnly,c=e.children;return(0,s.jsxs)("label",{className:t.default.dynamic([["ae9fa373db549f1c",[r?"":"cursor: pointer;"]]])+" "+"f5".concat(r?" disabled":""),children:[(0,s.jsx)("input",{type:"radio",value:n,name:"answer",onChange:a,disabled:r,defaultChecked:o,className:t.default.dynamic([["ae9fa373db549f1c",[r?"":"cursor: pointer;"]]])}),(0,s.jsx)("span",{className:t.default.dynamic([["ae9fa373db549f1c",[r?"":"cursor: pointer;"]]]),children:c}),(0,s.jsx)(t.default,{id:"ae9fa373db549f1c",dynamic:[r?"":"cursor: pointer;"],children:"input.__jsx-style-dynamic-selector {display:none}\ninput.__jsx-style-dynamic-selector:checked +span.__jsx-style-dynamic-selector {color:#111;\nborder-color:#111;\nbox-shadow:0 0 0 3px #c1c1c1;\nfont-weight:600}\nlabel.__jsx-style-dynamic-selector {display:block;\nmargin:0.5rem 0;\n".concat(r?"":"cursor: pointer;"," }\nlabel.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before {counter-increment:answer-list;\ncontent:counter(answer-list, upper-alpha) '. ';\ndisplay:inline-block;\nwidth:1.5rem}\nspan.__jsx-style-dynamic-selector {color:#666;\ndisplay:block;\npadding:0.5rem 1rem;\nborder-radius:7px;\nborder:1px solid #666;\nbackground:white;\n-webkit-transition:box-shadow 0.2s ease;\ntransition:box-shadow 0.2s ease}\n.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector +span.__jsx-style-dynamic-selector {border-color:#eaeaea}\n.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked +span.__jsx-style-dynamic-selector {color:unset;\nfont-weight:500;\nbackground:white;\nborder-color:#111}")})]})},d=function(e){var n=e.correct,a=e.selected;return n||a?(0,s.jsxs)("span",{className:"jsx-bebc3d1a0cbd6a11",children:[n?(0,s.jsx)(r.Z,{color:"#0070f3"}):(0,s.jsx)(o,{color:"#e00"}),(0,s.jsx)(t.default,{id:"bebc3d1a0cbd6a11",children:"span.jsx-bebc3d1a0cbd6a11 {display:inline-block;\nline-height:1;\nvertical-align:middle;\nmargin-left:0.25rem}"})]}):null},u=function(e){var n=e.answer,a=e.correctAnswer;return(0,s.jsxs)(s.Fragment,{children:["undefined"!==typeof n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{correct:n===a,selected:!0})," "]}),"undefined"===typeof n?(0,s.jsxs)(s.Fragment,{children:["The correct answer is: ",(0,s.jsx)("strong",{className:"jsx-70bc04033ab1c4b9",children:a})]}):n===a?(0,s.jsxs)("span",{className:"jsx-70bc04033ab1c4b9 correct-message",children:[(0,s.jsx)("strong",{className:"jsx-70bc04033ab1c4b9",children:"Correct."})," Good job!"]}):(0,s.jsxs)("span",{className:"jsx-70bc04033ab1c4b9 incorrect-message",children:[(0,s.jsx)("strong",{className:"jsx-70bc04033ab1c4b9",children:"Incorrect,"})," but nice try!"]}),(0,s.jsx)(t.default,{id:"70bc04033ab1c4b9",children:".correct-message.jsx-70bc04033ab1c4b9 {color:#0070f3}\n.incorrect-message.jsx-70bc04033ab1c4b9 {color:#e00}"})]})},h=function(e){var n=e.meta,a=e.answers,o=e.correctAnswer,r=e.children,h=i((0,p.a)(n),2),x=h[0],j=h[1];return(0,s.jsxs)(m,{children:[r,a.map((function(e){return(0,s.jsxs)(l,{value:e,selected:e===x.answer,onChange:function(e){return j({type:"answer",answer:e.target.value})},readOnly:x.submitted,children:[e," ",x.submitted&&(0,s.jsx)(d,{correct:e===o,selected:e===x.answer})]},e)})),(0,s.jsxs)("div",{className:"jsx-96319d8491e83c58",children:[x.submitted?(0,s.jsx)(u,{answer:x.answer,correctAnswer:o}):(0,s.jsx)(c.Z,{onClick:function(){j({type:"submit"}),x.answer===o&&j({type:"check"})},color:"#252525",shadowColor:"rgba(0, 0, 0, 0.2)",invert:!0,children:"Submit"}),(0,s.jsx)(t.default,{id:"96319d8491e83c58",children:"div.jsx-96319d8491e83c58 {margin-top:2rem}"})]})]})}},47747:function(e,n,a){"use strict";a.r(n),a.d(n,{meta:function(){return h},default:function(){return j}});var s=a(24246),t=a(27378),o=a(65977),r=a(8990),c=a(36971);function p(e,n){for(var a=0;a<n.length;a++){var s=n[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){if(null==e)return{};var a,s,t=function(e,n){if(null==e)return{};var a,s,t={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function l(e,n){return!n||"object"!==u(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},h={title:"Pre-rendering and Data Fetching",courseId:"basics",lessonId:"data-fetching",stepId:"getstaticprops-details",subtitle:"getStaticProps Details"},x={meta:h},j=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=l(this,i(n).call(this,e))).layout=function(e){var n=e.children;return(0,s.jsx)(r.Z,{meta:h,children:n})},a}var a,t,u;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,e),a=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components,a=m(e,["components"]);return(0,s.jsxs)(o.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},x,a),components:n,children:[(0,s.jsxs)(o.XJ,{name:"p",components:n,children:["Here is some essential information you should know about ",(0,s.jsx)(o.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/data-fetching#getstaticprops-static-generation"},children:(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"a",children:"getStaticProps"})}),"."]}),(0,s.jsx)(o.XJ,{name:"h3",components:n,children:"Fetch External API or Query Database"}),(0,s.jsxs)(o.XJ,{name:"p",components:n,children:["In ",(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"p",children:"lib/posts.js"}),", we\u2019ve implemented ",(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"p",children:"getSortedPostsData"})," which fetches data from the file system. But you can fetch the data from other sources, like an external API endpoint, and it\u2019ll work just fine:"]}),(0,s.jsx)(o.XJ,{name:"pre",components:n,props:{className:"language-js"},children:(0,s.jsxs)(o.XJ,{name:"code",components:n,parentName:"pre",props:{className:"language-js"},children:[(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"export"})," ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"async"})," ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"function"})," ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token function"},children:"getSortedPostsData"}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:")"})," ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"{"}),"\n  ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token comment"},children:"// Instead of the file system,"}),"\n  ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token comment"},children:"// fetch post data from an external API endpoint"}),"\n  ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"const"})," res ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token operator"},children:"="})," ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"await"})," ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token function"},children:"fetch"}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token string"},children:"'..'"}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:")"}),"\n  ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"return"})," res",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"."}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token method function property-access"},children:"json"}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:")"}),"\n",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"}"}),"\n"]})}),(0,s.jsx)(o.XJ,{name:"blockquote",components:n,children:(0,s.jsxs)(o.XJ,{name:"p",components:n,parentName:"blockquote",children:[(0,s.jsx)(o.XJ,{name:"strong",components:n,parentName:"p",children:"Note"}),": Next.js polyfills ",(0,s.jsx)(o.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/supported-browsers-features"},children:(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"a",children:"fetch()"})})," on both the client and server. You don't need to import it."]})}),(0,s.jsx)(o.XJ,{name:"p",components:n,children:"You can also query the database directly:"}),(0,s.jsx)(o.XJ,{name:"pre",components:n,props:{className:"language-js"},children:(0,s.jsxs)(o.XJ,{name:"code",components:n,parentName:"pre",props:{className:"language-js"},children:[(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"import"})," someDatabaseSDK ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"from"})," ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token string"},children:"'someDatabaseSDK'"}),"\n\n",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"const"})," databaseClient ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token operator"},children:"="})," someDatabaseSDK",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"."}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token method function property-access"},children:"createClient"}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token spread operator"},children:"..."}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:")"}),"\n\n",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"export"})," ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"async"})," ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"function"})," ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token function"},children:"getSortedPostsData"}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:")"})," ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"{"}),"\n  ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token comment"},children:"// Instead of the file system,"}),"\n  ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token comment"},children:"// fetch post data from a database"}),"\n  ",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"return"})," databaseClient",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"."}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token method function property-access"},children:"query"}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token string"},children:"'SELECT posts...'"}),(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:")"}),"\n",(0,s.jsx)(o.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"}"}),"\n"]})}),(0,s.jsxs)(o.XJ,{name:"p",components:n,children:["This is possible because ",(0,s.jsx)(o.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/data-fetching#getstaticprops-static-generation"},children:(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"a",children:"getStaticProps"})})," only ",(0,s.jsx)(o.XJ,{name:"strong",components:n,parentName:"p",children:"runs on the server-side"}),". It will never run on the client-side. It won\u2019t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers."]}),(0,s.jsx)(o.XJ,{name:"h3",components:n,children:"Development vs. Production"}),(0,s.jsxs)(o.XJ,{name:"ul",components:n,children:[(0,s.jsxs)(o.XJ,{name:"li",components:n,parentName:"ul",children:["In ",(0,s.jsx)(o.XJ,{name:"strong",components:n,parentName:"li",children:"development"})," (",(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"li",children:"npm run dev"})," or ",(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"li",children:"yarn dev"}),"), ",(0,s.jsx)(o.XJ,{name:"a",components:n,parentName:"li",props:{href:"/docs/basic-features/data-fetching#getstaticprops-static-generation"},children:(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"a",children:"getStaticProps"})})," runs on ",(0,s.jsx)(o.XJ,{name:"em",components:n,parentName:"li",children:"every request"}),"."]}),(0,s.jsxs)(o.XJ,{name:"li",components:n,parentName:"ul",children:["In ",(0,s.jsx)(o.XJ,{name:"strong",components:n,parentName:"li",children:"production"}),", ",(0,s.jsx)(o.XJ,{name:"a",components:n,parentName:"li",props:{href:"/docs/basic-features/data-fetching#getstaticprops-static-generation"},children:(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"a",children:"getStaticProps"})})," runs at ",(0,s.jsx)(o.XJ,{name:"em",components:n,parentName:"li",children:"build time"}),". However, this behavior can be enhanced using the ",(0,s.jsxs)(o.XJ,{name:"a",components:n,parentName:"li",props:{href:"/docs/basic-features/data-fetching#the-fallback-key-required"},children:[(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"a",children:"fallback"})," key"]})," returned by ",(0,s.jsx)(o.XJ,{name:"a",components:n,parentName:"li",props:{href:"/docs/basic-features/data-fetching#getstaticpaths-static-generation"},children:(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"a",children:"getStaticPaths"})})]})]}),(0,s.jsx)(o.XJ,{name:"p",components:n,children:"Because it\u2019s meant to be run at build time, you won\u2019t be able to use data that\u2019s only available during request time, such as query parameters or HTTP headers."}),(0,s.jsx)(o.XJ,{name:"h3",components:n,children:"Only Allowed in a Page"}),(0,s.jsxs)(o.XJ,{name:"p",components:n,children:[(0,s.jsx)(o.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/data-fetching#getstaticprops-static-generation"},children:(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"a",children:"getStaticProps"})})," can only be exported from a ",(0,s.jsx)(o.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/pages"},children:(0,s.jsx)(o.XJ,{name:"strong",components:n,parentName:"a",children:"page"})}),". You can\u2019t export it from non-page files."]}),(0,s.jsx)(o.XJ,{name:"p",components:n,children:"One of the reasons for this restriction is that React needs to have all the required data before the page is rendered."}),(0,s.jsx)(o.XJ,{name:"h3",components:n,children:"What If I Need to Fetch Data at Request Time?"}),(0,s.jsxs)(o.XJ,{name:"p",components:n,children:[(0,s.jsx)(o.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/pages#static-generation-recommended"},children:"Static Generation"})," is ",(0,s.jsx)(o.XJ,{name:"strong",components:n,parentName:"p",children:"not"})," a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request."]}),(0,s.jsxs)(o.XJ,{name:"p",components:n,children:["In cases like this, you can try ",(0,s.jsx)(o.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/pages#server-side-rendering"},children:(0,s.jsx)(o.XJ,{name:"strong",components:n,parentName:"a",children:"Server-side Rendering"})})," or skip pre-rendering. Let\u2019s talk about these strategies before we move on to the next lesson."]}),(0,s.jsx)(c.Z,{meta:h,answers:["Client-side","Server-side","Both"],correctAnswer:"Server-side",children:(0,s.jsxs)(o.XJ,{name:"p",components:n,children:[(0,s.jsx)(o.XJ,{name:"strong",components:n,parentName:"p",children:"Quick Review"}),": Where does ",(0,s.jsx)(o.XJ,{name:"inlineCode",components:n,parentName:"p",children:"getStaticProps"})," run?"]})})]})}}])&&p(a.prototype,t),u&&p(a,u),n}(t.Component);j.isMDXComponent=!0}},function(e){e.O(0,[9774,4442,7879,7835,3502,7769,2888,179],(function(){return n=74651,e(e.s=n);var n}));var n=e.O();_N_E=n}]);