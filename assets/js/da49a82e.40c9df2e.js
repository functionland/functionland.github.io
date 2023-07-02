"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2027],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,y=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4507:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Running a Box locally",id:"box-setup"},i="Running a Box locally",l={unversionedId:"getting-started/box-setup",id:"getting-started/box-setup",title:"Running a Box locally",description:"The easiest way to get your Box server running locally is to clone our repo and use docker.",source:"@site/docs/getting-started/box-setup.md",sourceDirName:"getting-started",slug:"/getting-started/box-setup",permalink:"/getting-started/box-setup",tags:[],version:"current",frontMatter:{title:"Running a Box locally",id:"box-setup"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/getting-started"},next:{title:"Using Fula Samples",permalink:"/getting-started/using-samples"}},p=[],c={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-box-locally"},"Running a Box locally"),(0,o.kt)("p",null,"The easiest way to get your Box server running locally is to clone our repo and use docker."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  > git clone https://github.com/functionland/fula\n  > docker-compose -f docker-compose.dev.yaml up\n")),(0,o.kt)("p",null,"Next, take note of the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/peer-id/"},"PeerID")," the Box server creates on startup.  You can find this by taking a look at your docker-compose logs for the following -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"box_1             | Swarm listening on /dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/p2p/12D3KooWPeEhynWyG7dHytppDP6ZG6jhEv7LcDLWsExGq1YD784E\n")),(0,o.kt)("p",null,"Now head over to ",(0,o.kt)("a",{parentName:"p",href:"./using-samples"},"using the samples")," to verify that the Box server is running properly and you are able to connect to it."))}s.isMDXComponent=!0}}]);