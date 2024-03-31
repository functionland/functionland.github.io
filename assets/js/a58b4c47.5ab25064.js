"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[554],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(o),h=n,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return o?a.createElement(f,l(l({ref:t},p),{},{components:o})):a.createElement(f,l({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},490:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=o(7462),n=(o(7294),o(3905));const r={title:"Blockchain Attached Storage",id:"bas"},l=void 0,i={unversionedId:"welcome/bas",id:"welcome/bas",title:"Blockchain Attached Storage",description:"You've heard of a network attached storage (NAS), but you haven't heard of a blockchain attached storage (BAS).",source:"@site/docs/welcome/bas.md",sourceDirName:"welcome",slug:"/welcome/bas",permalink:"/welcome/bas",tags:[],version:"current",frontMatter:{title:"Blockchain Attached Storage",id:"bas"},sidebar:"tutorialSidebar",previous:{title:"Fula Network",permalink:"/welcome/fula"},next:{title:"Blox as a Service",permalink:"/welcome/blox"}},c=[{value:"Blox to BAS",id:"blox-to-bas",children:[],level:2},{value:"BAS for Web2",id:"bas-for-web2",children:[],level:2},{value:"Open Source Everything",id:"open-source-everything",children:[],level:2}],s={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You've heard of a network attached storage (NAS), but you haven't heard of a blockchain attached storage (BAS)."),(0,n.kt)("p",null,"There is currently no modular, open-source, datacenter-grade server hardware option available. Hardware that is fully customizable and aesthetically appealing enough to sit comfortably in your home."),(0,n.kt)("p",null,"Which is why we are creating just that!"),(0,n.kt)("h2",{id:"blox-to-bas"},"Blox to BAS"),(0,n.kt)("p",null,"The mission behind creating the Blox is to disrupt the centralized cloud storage status-quo. To do this, we need to create a truly people-owned internet. The idea is, get uniform hardware into the hands of the people to ease early development processes and enable users to upload photos and videos to the chain of devices."),(0,n.kt)("p",null,"Blox owners are incentivized to always stay online and not act maliciously thanks to the blockchain mechanisms in place. Even if an owner were to delete user's files from their Blox, that user's files would still be safe because they would have already been replicated to multiple other Bloxes in geographically different locations."),(0,n.kt)("h2",{id:"bas-for-web2"},"BAS for Web2"),(0,n.kt)("p",null,"We aim to offer a cloud service that will enable FxBlox owners and non-owners to use decentralized cloud storage just as easily as with big cloud companies. "),(0,n.kt)("p",null,"Each individual FxBlox owner will be able to help provide storage to the network by adding more as they scale. And we will be able to horizontally scale, by getting the FxBlox into the hands of more people. Together we will be able to grow into a truly people-owned internet!"),(0,n.kt)("p",null,"For non-technical people who want to join the movement by providing storage, we make it easy to set up your device with a simple app. "),(0,n.kt)("p",null,"For everyday people who want to take advantage of the low-cost decentralized storage, we created two apps that people can use to upload their photos, videos, and files!"),(0,n.kt)("h2",{id:"open-source-everything"},"Open Source Everything"),(0,n.kt)("p",null,"We want every step of this product to be as open and adoptable as possible. That is why we use all open source technology for hardware design, APIs to add content to network, inter-Blox communications, and of course blockchain."),(0,n.kt)("p",null,"To enable this infrastructure, we utilize ",(0,n.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/"},"IPFS")," for data transfer, data replication, and security in immutability."),(0,n.kt)("p",null,"We layer ",(0,n.kt)("a",{parentName:"p",href:"https://fission.codes/ecosystem/wnfs/"},"WNFS")," on top to enable encryption over IPFS, public and private file sharing, as well as decentralized authentication and identity."),(0,n.kt)("p",null,"We are a ",(0,n.kt)("a",{parentName:"p",href:"https://chain.link/education-hub/what-is-layer-2"},"layer two blockchain")," utilizing the Polygon and Ethereum networks."))}p.isMDXComponent=!0}}]);