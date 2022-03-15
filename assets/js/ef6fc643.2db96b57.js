"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[507],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1259:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},u=void 0,c={unversionedId:"RFCs/replication",id:"RFCs/replication",title:"replication",description:"- Feature Name: replication",source:"@site/docs/RFCs/replication.md",sourceDirName:"RFCs",slug:"/RFCs/replication",permalink:"/RFCs/replication",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pnet",permalink:"/RFCs/pnet"}},p=[],s={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Feature Name: replication"),(0,i.kt)("li",{parentName:"ul"},"Start Date: 2022-02-01"),(0,i.kt)("li",{parentName:"ul"},"RFC PR:"),(0,i.kt)("li",{parentName:"ul"},"Functionland Issue:")),(0,i.kt)("h1",{id:"summary"},"Summary"),(0,i.kt)("p",null,"When user set up his box he should join/create a public/private pool.\nin every pool user will pin their data for High availability and replication. and get fula token for keeping the pinset alive. "),(0,i.kt)("h1",{id:"motivation"},"Motivation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"user can mine fula and use app's and other futuers."),(0,i.kt)("li",{parentName:"ul"},"user can have HA on his/her data.")),(0,i.kt)("h1",{id:"guide-level-explanation"},"Guide-level explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"there is node call validator that run's on the box and try to keep the pinset alive."),(0,i.kt)("li",{parentName:"ul"},"the validator use fula-file-protocol to stream pinned data to functionland/box container which keeping the pools data."),(0,i.kt)("li",{parentName:"ul"},"the validator can get the proof that the data stored and get to consensus of cluster pinset state."),(0,i.kt)("li",{parentName:"ul"},"joining to the pool most be base on geolocation.")),(0,i.kt)("h1",{id:"reference-level-explanation"},"Reference-level explanation"),(0,i.kt)("h1",{id:"drawbacks"},"Drawbacks"),(0,i.kt)("h1",{id:"rationale-and-alternatives"},"Rationale and alternatives"),(0,i.kt)("h1",{id:"prior-art"},"Prior art"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cluster.ipfs.io/documentation/deployment/architecture/"},"ipfs-cluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://spec.filecoin.io/"},"file-coin"))),(0,i.kt)("h1",{id:"unresolved-questions"},"Unresolved questions"),(0,i.kt)("h1",{id:"future-possibilities"},"Future possibilities"))}f.isMDXComponent=!0}}]);