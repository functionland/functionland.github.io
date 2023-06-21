"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8489],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1660:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={title:"Providing Storage",id:"storage-provide"},l="Providing Storage",c={unversionedId:"mvp/pools/storage-provide",id:"mvp/pools/storage-provide",title:"Providing Storage",description:"Acceptance Criteria",source:"@site/docs/mvp/pools/storage-provide.md",sourceDirName:"mvp/pools",slug:"/mvp/pools/storage-provide",permalink:"/mvp/pools/storage-provide",tags:[],version:"current",frontMatter:{title:"Providing Storage",id:"storage-provide"},sidebar:"mvpSidebar",previous:{title:"Pools",permalink:"/mvp/pools"}},u=[{value:"Acceptance Criteria",id:"acceptance-criteria",children:[],level:2},{value:"Preconditions",id:"preconditions",children:[],level:2},{value:"Steps",id:"steps",children:[],level:2}],s={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"providing-storage"},"Providing Storage"),(0,a.kt)("h2",{id:"acceptance-criteria"},"Acceptance Criteria"),(0,a.kt)("p",null,"You see your balance increase on the ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.testnet.fx.land/#/explorer"},"chain explorer")," after uploading a file to your node using Fotos."),(0,a.kt)("h2",{id:"preconditions"},"Preconditions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You are a running a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula-testnet#setup"},"fula testnet")," environment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You have already ",(0,a.kt)("a",{parentName:"p",href:"../fotos/setup"},"set up Fotos")," and connected it to your Box running in the fula testnet environment."))),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("p",null,"Here is a video demonstrating the following steps."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/VK2R3yvQEsM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Fotos app, tap on a photo to enter browse mode and tap the 'upload to cloud' icon in the top right.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula-testnet#find-the-cid-for-files-uploaded-via-the-fula-file-api"},"Take note")," of the CID for the file that you just uploaded.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula-testnet#ensure-the-file-you-added-is-part-of-ipfs-mfs"},"Add")," the file you uploaded to your IPFS node's MFS (so that it can be found by the proof engine).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula-testnet#find-your-account-id"},"Take note")," of your Account ID.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Let the proof engine know that you are storing the file by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula-testnet#upload-a-manifest"},"creating")," a new manifest for the file you just uploaded.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula-testnet#restart-the-proof-engine"},"Restart")," the proof engine to ensure it picks up the latest manifest.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula-testnet#viewing-your-rewards"},"See that your balance has increased")," either by viewing the proof engine logs from docker-compose or by looking for your account in the chain explorer."))))}f.isMDXComponent=!0}}]);