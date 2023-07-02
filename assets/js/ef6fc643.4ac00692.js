"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,f=h["".concat(p,".").concat(d)]||h[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1259:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Replication",l={unversionedId:"RFCs/replication",id:"RFCs/replication",title:"Replication",description:"- Start Date: 2022-02-01",source:"@site/docs/RFCs/replication.md",sourceDirName:"RFCs",slug:"/RFCs/replication",permalink:"/RFCs/replication",tags:[],version:"current",frontMatter:{}},p=[],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"replication"},"Replication"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start Date: 2022-02-01"),(0,a.kt)("li",{parentName:"ul"},"RFC PR: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs/pull/67"},"https://github.com/functionland/docs/pull/67")),(0,a.kt)("li",{parentName:"ul"},"Functionland Issue: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs/issues/63"},"https://github.com/functionland/docs/issues/63")),(0,a.kt)("li",{parentName:"ul"},"Authors: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/farhoud"},"Farhoud")),(0,a.kt)("li",{parentName:"ul"},"Reviewers: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gitaaron"},"Aaron"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ehsan6sha"},"Ehsan"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/orgs/functionland/people/masih"},"Masih"))),(0,a.kt)("h1",{id:"summary"},"Summary"),(0,a.kt)("p",null,"When user set up his box he should join/create a public/private pool.\nin every pool user will pin their data for High availability and replication. and get fula token for keeping the pinset alive. "),(0,a.kt)("h1",{id:"motivation"},"Motivation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"user can mine fula and use app's and other futuers."),(0,a.kt)("li",{parentName:"ul"},"user can have HA on his/her data.")),(0,a.kt)("h1",{id:"guide-level-explanation"},"Guide-level explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"there is node call validator that run's on the box and try to keep the pinset alive."),(0,a.kt)("li",{parentName:"ul"},"the validator use fula-file-protocol to stream pinned data to functionland/box container which keeping the pools data."),(0,a.kt)("li",{parentName:"ul"},"the validator can get the proof that the data stored and get to consensus of cluster pinset state."),(0,a.kt)("li",{parentName:"ul"},"joining to the pool most be base on geolocation.")),(0,a.kt)("h1",{id:"reference-level-explanation"},"Reference-level explanation"),(0,a.kt)("h1",{id:"drawbacks"},"Drawbacks"),(0,a.kt)("h1",{id:"rationale-and-alternatives"},"Rationale and alternatives"),(0,a.kt)("h1",{id:"prior-art"},"Prior art"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cluster.ipfs.io/documentation/deployment/architecture/"},"ipfs-cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://spec.filecoin.io/"},"file-coin"))),(0,a.kt)("h1",{id:"unresolved-questions"},"Unresolved questions"),(0,a.kt)("h1",{id:"future-possibilities"},"Future possibilities"))}s.isMDXComponent=!0}}]);