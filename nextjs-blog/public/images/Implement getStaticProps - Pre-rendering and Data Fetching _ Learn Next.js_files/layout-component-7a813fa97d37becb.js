(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7994],{31497:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/assets-metadata-css/layout-component",function(){return a(33073)}])},36971:function(e,n,a){"use strict";a.d(n,{Z:function(){return N}});var s=a(24246),o=a(79892),t=(a(27378),function(e){var n=e.color;return(0,s.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:(0,s.jsx)("g",{fill:n||"#111111",children:(0,s.jsx)("path",{d:"M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z",fill:n||"#111111"})})})}),p=a(17701),c=a(27764),r=a(51898);function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=[],s=!0,o=!1,t=void 0;try{for(var p,c=e[d.iterator]();!(s=(p=c.next()).done)&&(a.push(p.value),!n||a.length!==n);s=!0);}catch(r){o=!0,t=r}finally{try{s||null==c.return||c.return()}finally{if(o)throw t}}return a}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e){return(0,s.jsxs)("div",{className:"jsx-e41de8c448394091",children:[e.children,(0,s.jsx)(o.default,{id:"e41de8c448394091",children:"div.jsx-e41de8c448394091 {background:#fafafa;\nborder:1px solid #eaeaea;\nborder-radius:8px;\npadding:0 16px 16px 16px;\nmargin-top:2rem;\nmargin-bottom:4rem;\ncounter-reset:answer-list}"})]})},i=function(e){var n=e.value,a=e.onChange,t=e.selected,p=e.readOnly,c=e.children;return(0,s.jsxs)("label",{className:o.default.dynamic([["ae9fa373db549f1c",[p?"":"cursor: pointer;"]]])+" "+"f5".concat(p?" disabled":""),children:[(0,s.jsx)("input",{type:"radio",value:n,name:"answer",onChange:a,disabled:p,defaultChecked:t,className:o.default.dynamic([["ae9fa373db549f1c",[p?"":"cursor: pointer;"]]])}),(0,s.jsx)("span",{className:o.default.dynamic([["ae9fa373db549f1c",[p?"":"cursor: pointer;"]]]),children:c}),(0,s.jsx)(o.default,{id:"ae9fa373db549f1c",dynamic:[p?"":"cursor: pointer;"],children:"input.__jsx-style-dynamic-selector {display:none}\ninput.__jsx-style-dynamic-selector:checked +span.__jsx-style-dynamic-selector {color:#111;\nborder-color:#111;\nbox-shadow:0 0 0 3px #c1c1c1;\nfont-weight:600}\nlabel.__jsx-style-dynamic-selector {display:block;\nmargin:0.5rem 0;\n".concat(p?"":"cursor: pointer;"," }\nlabel.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before {counter-increment:answer-list;\ncontent:counter(answer-list, upper-alpha) '. ';\ndisplay:inline-block;\nwidth:1.5rem}\nspan.__jsx-style-dynamic-selector {color:#666;\ndisplay:block;\npadding:0.5rem 1rem;\nborder-radius:7px;\nborder:1px solid #666;\nbackground:white;\n-webkit-transition:box-shadow 0.2s ease;\ntransition:box-shadow 0.2s ease}\n.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector +span.__jsx-style-dynamic-selector {border-color:#eaeaea}\n.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked +span.__jsx-style-dynamic-selector {color:unset;\nfont-weight:500;\nbackground:white;\nborder-color:#111}")})]})},d=function(e){var n=e.correct,a=e.selected;return n||a?(0,s.jsxs)("span",{className:"jsx-bebc3d1a0cbd6a11",children:[n?(0,s.jsx)(p.Z,{color:"#0070f3"}):(0,s.jsx)(t,{color:"#e00"}),(0,s.jsx)(o.default,{id:"bebc3d1a0cbd6a11",children:"span.jsx-bebc3d1a0cbd6a11 {display:inline-block;\nline-height:1;\nvertical-align:middle;\nmargin-left:0.25rem}"})]}):null},u=function(e){var n=e.answer,a=e.correctAnswer;return(0,s.jsxs)(s.Fragment,{children:["undefined"!==typeof n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{correct:n===a,selected:!0})," "]}),"undefined"===typeof n?(0,s.jsxs)(s.Fragment,{children:["The correct answer is: ",(0,s.jsx)("strong",{className:"jsx-70bc04033ab1c4b9",children:a})]}):n===a?(0,s.jsxs)("span",{className:"jsx-70bc04033ab1c4b9 correct-message",children:[(0,s.jsx)("strong",{className:"jsx-70bc04033ab1c4b9",children:"Correct."})," Good job!"]}):(0,s.jsxs)("span",{className:"jsx-70bc04033ab1c4b9 incorrect-message",children:[(0,s.jsx)("strong",{className:"jsx-70bc04033ab1c4b9",children:"Incorrect,"})," but nice try!"]}),(0,s.jsx)(o.default,{id:"70bc04033ab1c4b9",children:".correct-message.jsx-70bc04033ab1c4b9 {color:#0070f3}\n.incorrect-message.jsx-70bc04033ab1c4b9 {color:#e00}"})]})},N=function(e){var n=e.meta,a=e.answers,t=e.correctAnswer,p=e.children,N=m((0,r.a)(n),2),h=N[0],x=N[1];return(0,s.jsxs)(l,{children:[p,a.map((function(e){return(0,s.jsxs)(i,{value:e,selected:e===h.answer,onChange:function(e){return x({type:"answer",answer:e.target.value})},readOnly:h.submitted,children:[e," ",h.submitted&&(0,s.jsx)(d,{correct:e===t,selected:e===h.answer})]},e)})),(0,s.jsxs)("div",{className:"jsx-96319d8491e83c58",children:[h.submitted?(0,s.jsx)(u,{answer:h.answer,correctAnswer:t}):(0,s.jsx)(c.Z,{onClick:function(){x({type:"submit"}),h.answer===t&&x({type:"check"})},color:"#252525",shadowColor:"rgba(0, 0, 0, 0.2)",invert:!0,children:"Submit"}),(0,s.jsx)(o.default,{id:"96319d8491e83c58",children:"div.jsx-96319d8491e83c58 {margin-top:2rem}"})]})]})}},33073:function(e,n,a){"use strict";a.r(n),a.d(n,{meta:function(){return h},default:function(){return j}});var s=a(24246),o=a(27378),t=a(65977),p=a(8990),c=a(75691),r=a(36971);function m(e,n){for(var a=0;a<n.length;a++){var s=n[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){if(null==e)return{};var a,s,o=function(e,n){if(null==e)return{};var a,s,o={},t=Object.keys(e);for(s=0;s<t.length;s++)a=t[s],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)a=t[s],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function d(e,n){return!n||"object"!==N(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var N=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},h={title:"Assets, Metadata, and CSS",courseId:"basics",lessonId:"assets-metadata-css",stepId:"layout-component",subtitle:"Layout Component"},x={meta:h},j=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=d(this,l(n).call(this,e))).layout=function(e){var n=e.children;return(0,s.jsx)(p.Z,{meta:h,children:n})},a}var a,o,N;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,e),a=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,a=i(e,["components"]);return(0,s.jsxs)(t.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},x,a),components:n,children:[(0,s.jsxs)(t.XJ,{name:"p",components:n,children:["First, Let\u2019s create a ",(0,s.jsx)(t.XJ,{name:"strong",components:n,parentName:"p",children:"Layout"})," component which will be shared across all pages."]}),(0,s.jsxs)(t.XJ,{name:"ul",components:n,children:[(0,s.jsxs)(t.XJ,{name:"li",components:n,parentName:"ul",children:["Create a top-level directory called ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"li",children:"components"}),"."]}),(0,s.jsxs)(t.XJ,{name:"li",components:n,parentName:"ul",children:["Inside ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"li",children:"components"}),", create a file called ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"li",children:"layout.js"})," with the following content:"]})]}),(0,s.jsx)(t.XJ,{name:"pre",components:n,props:{className:"language-jsx"},children:(0,s.jsxs)(t.XJ,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"export"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"default"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"function"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token function"},children:(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token maybe-class-name"},children:"Layout"})}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token parameter"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"{"})," children ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"}"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:")"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"{"}),"\n  ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"return"})," ",(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"<"}),"div"]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"{"}),"children",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"}"}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"</"}),"div"]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),"\n",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"}"}),"\n"]})}),(0,s.jsxs)(t.XJ,{name:"p",components:n,children:["Then, open ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:"pages/posts/first-post.js"}),", add an import for the ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:"Layout"})," component, and make it the outermost component:"]}),(0,s.jsx)(t.XJ,{name:"pre",components:n,props:{className:"language-jsx"},children:(0,s.jsxs)(t.XJ,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"import"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token maybe-class-name"},children:"Head"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"from"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token string"},children:"'next/head'"}),"\n",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"import"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token maybe-class-name"},children:"Link"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"from"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token string"},children:"'next/link'"}),"\n",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"import"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token maybe-class-name"},children:"Layout"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"from"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token string"},children:"'../../components/layout'"}),"\n\n",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"export"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"default"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"function"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token function"},children:(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token maybe-class-name"},children:"FirstPost"})}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:")"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"{"}),"\n  ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"return"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"("}),"\n    ",(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"<"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token class-name"},children:"Layout"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"\n      "}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"<"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token class-name"},children:"Head"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"\n        "}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"<"}),"title"]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"First Post"}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"</"}),"title"]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"\n      "}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"</"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token class-name"},children:"Head"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"\n      "}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"<"}),"h1"]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"First Post"}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"</"}),"h1"]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"\n      "}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"<"}),"h2"]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"\n        "}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"<"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token class-name"},children:"Link"})]})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token attr-name"},children:"href"}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token attr-value"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"="}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:'"'}),"/",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:'"'})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"\n          "}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"<"}),"a"]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"Back to home"}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"</"}),"a"]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"\n        "}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"</"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token class-name"},children:"Link"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"\n      "}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"</"}),"h2"]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token plain-text"},children:"\n    "}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"</"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token class-name"},children:"Layout"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),"\n  ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:")"}),"\n",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"}"}),"\n"]})}),(0,s.jsx)(t.XJ,{name:"h3",components:n,children:"Adding CSS"}),(0,s.jsxs)(t.XJ,{name:"p",components:n,children:["Now, let\u2019s add some styles to the ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:"Layout"})," component. To do so, we\u2019ll use ",(0,s.jsx)(t.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/built-in-css-support#adding-component-level-css"},children:"CSS Modules"}),", which lets you import CSS files in a React component."]}),(0,s.jsxs)(t.XJ,{name:"p",components:n,children:["Create a file called ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:"components/layout.module.css"})," with the following content:"]}),(0,s.jsx)(t.XJ,{name:"pre",components:n,props:{className:"language-css"},children:(0,s.jsxs)(t.XJ,{name:"code",components:n,parentName:"pre",props:{className:"language-css"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token selector"},children:(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token class"},children:".container"})})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"{"}),"\n  ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token property"},children:"max-width"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:":"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token number"},children:"36"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token unit"},children:"rem"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:";"}),"\n  ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token property"},children:"padding"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:":"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token number"},children:"0"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token number"},children:"1"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token unit"},children:"rem"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:";"}),"\n  ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token property"},children:"margin"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:":"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token number"},children:"3"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token unit"},children:"rem"})," auto ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token number"},children:"6"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token unit"},children:"rem"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:";"}),"\n",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"}"}),"\n"]})}),(0,s.jsx)(t.XJ,{name:"blockquote",components:n,children:(0,s.jsxs)(t.XJ,{name:"p",components:n,parentName:"blockquote",children:[(0,s.jsx)(t.XJ,{name:"strong",components:n,parentName:"p",children:"Important:"})," To use ",(0,s.jsx)(t.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/built-in-css-support#adding-component-level-css"},children:"CSS Modules"}),", the CSS file name must end with ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:".module.css"}),"."]})}),(0,s.jsxs)(t.XJ,{name:"p",components:n,children:["To use this ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:"container"})," class inside ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:"components/layout.js"}),", you need to:"]}),(0,s.jsxs)(t.XJ,{name:"ul",components:n,children:[(0,s.jsxs)(t.XJ,{name:"li",components:n,parentName:"ul",children:["Import the CSS file and assign a name to it, like ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"li",children:"styles"})]}),(0,s.jsxs)(t.XJ,{name:"li",components:n,parentName:"ul",children:["Use ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"li",children:"styles.container"})," as the ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"li",children:"className"})]})]}),(0,s.jsxs)(t.XJ,{name:"p",components:n,children:["Open ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:"components/layout.js"})," and replace its content with the following:"]}),(0,s.jsx)(t.XJ,{name:"pre",components:n,props:{className:"language-jsx"},children:(0,s.jsxs)(t.XJ,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"import"})," styles ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"from"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token string"},children:"'./layout.module.css'"}),"\n\n",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"export"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword module"},children:"default"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"function"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token function"},children:(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token maybe-class-name"},children:"Layout"})}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token parameter"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"{"})," children ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"}"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:")"})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"{"}),"\n  ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token keyword"},children:"return"})," ",(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"<"}),"div"]})," ",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token attr-name"},children:"className"}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token script language-javascript"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token script-punctuation punctuation"},children:"="}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"{"}),"styles",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"."}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token property-access"},children:"container"}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"}"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"{"}),"children",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"}"}),(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token tag"},children:[(0,s.jsxs)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token tag"},children:[(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:"</"}),"div"]}),(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"},children:">"})]}),"\n",(0,s.jsx)(t.XJ,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"},children:"}"}),"\n"]})}),(0,s.jsxs)(t.XJ,{name:"p",components:n,children:["If you go to ",(0,s.jsx)(t.XJ,{name:"a",components:n,parentName:"p",props:{href:"http://localhost:3000/posts/first-post"},children:"http://localhost:3000/posts/first-post"})," now, you should see that the text is now inside a centered container:"]}),(0,s.jsx)(c.Z,{shadow:!0,alt:"Layout",oversize:!1,src:"/static/images/learn/assets-metadata-css/layout.png",width:702,height:197}),(0,s.jsx)(t.XJ,{name:"h3",components:n,children:"Automatically Generates Unique Class Names"}),(0,s.jsxs)(t.XJ,{name:"p",components:n,children:["Now, if you take a look at the HTML in your browser\u2019s devtools, you\u2019ll notice that the ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:"div"})," rendered by the ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:"Layout"})," component has a class name that looks like ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:"layout_container__..."}),":"]}),(0,s.jsx)(c.Z,{shadow:!0,alt:"Devtools",oversize:!1,src:"/static/images/learn/assets-metadata-css/devtools.png",width:661,height:67}),(0,s.jsxs)(t.XJ,{name:"p",components:n,children:["This is what ",(0,s.jsx)(t.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/built-in-css-support#adding-component-level-css"},children:"CSS Modules"})," does: ",(0,s.jsx)(t.XJ,{name:"em",components:n,parentName:"p",children:"It automatically generates unique class names"}),". As long as you use CSS Modules, you don\u2019t have to worry about class name collisions."]}),(0,s.jsxs)(t.XJ,{name:"p",components:n,children:["Furthermore, Next.js\u2019s code splitting feature works on ",(0,s.jsx)(t.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/built-in-css-support#adding-component-level-css"},children:"CSS Modules"})," as well. It ensures the minimal amount of CSS is loaded for each page. This results in smaller bundle sizes."]}),(0,s.jsxs)(t.XJ,{name:"p",components:n,children:[(0,s.jsx)(t.XJ,{name:"a",components:n,parentName:"p",props:{href:"/docs/basic-features/built-in-css-support#adding-component-level-css"},children:"CSS Modules"})," are extracted from the JavaScript bundles at build time and generate ",(0,s.jsx)(t.XJ,{name:"inlineCode",components:n,parentName:"p",children:".css"})," files that are loaded automatically by Next.js."]}),(0,s.jsx)(r.Z,{meta:h,answers:["CSS Modules","Sass","styled-jsx","styled-components"],correctAnswer:"styled-components",children:(0,s.jsxs)(t.XJ,{name:"p",components:n,children:[(0,s.jsx)(t.XJ,{name:"strong",components:n,parentName:"p",children:"Quick Review"}),": Which of the following styling methods does Next.js ",(0,s.jsx)(t.XJ,{name:"strong",components:n,parentName:"p",children:"not"})," have built-in support for?"]})})]})}}])&&m(a.prototype,o),N&&m(a,N),n}(o.Component);j.isMDXComponent=!0}},function(e){e.O(0,[9774,4442,7879,6337,7835,3502,7769,5691,2888,179],(function(){return n=31497,e(e.s=n);var n}));var n=e.O();_N_E=n}]);