"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2881:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={},i="Claims",o={unversionedId:"blockchain/Recipes/Claims",id:"blockchain/Recipes/Claims",title:"Claims",description:"Claim tokens",source:"@site/docs/blockchain/Recipes/Claims.md",sourceDirName:"blockchain/Recipes",slug:"/blockchain/Recipes/Claims",permalink:"/blockchain/Recipes/Claims",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Challenges",permalink:"/blockchain/Recipes/Challenges"},next:{title:"Manifest",permalink:"/blockchain/Recipes/Manifest"}},c=[{value:"Claim tokens",id:"claim-tokens",children:[{value:"Description:",id:"description",children:[],level:3},{value:"Steps:",id:"steps",children:[],level:3},{value:"Expected Input:",id:"expected-input",children:[],level:3},{value:"Example Output:",id:"example-output",children:[],level:3}],level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"claims"},"Claims"),(0,l.kt)("h2",{id:"claim-tokens"},"Claim tokens"),(0,l.kt)("h3",{id:"description"},"Description:"),(0,l.kt)("p",null,"Its retrives all the claims done by the clients."),(0,l.kt)("h3",{id:"steps"},"Steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Call the fula/claims endpoint with the following request body:")),(0,l.kt)("h3",{id:"expected-input"},"Expected Input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"{}\n")),(0,l.kt)("h3",{id:"example-output"},"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n        "claims": [\n                {\n                    "account": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",\n                    "minted_labor_tokens": 10,\n                        "expected_labor_tokens": 0,\n                        "minted_challenge_tokens": 1000\n        }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"account: the account associated with the claims tokens."),(0,l.kt)("li",{parentName:"ul"},"minted_labor_tokens: the amount of labor tokens minted."),(0,l.kt)("li",{parentName:"ul"},"expected_labor_tokens:  the amount of labor tokens expected."),(0,l.kt)("li",{parentName:"ul"},"minted_challenge_tokens:  the amount of challenge tokens minted.")))}s.isMDXComponent=!0}}]);