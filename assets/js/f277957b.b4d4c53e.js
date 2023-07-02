"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6950:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={},o="Status",c={unversionedId:"blockchain/Services/Status",id:"blockchain/Services/Status",title:"Status",description:"Install NodeJS",source:"@site/docs/blockchain/Services/Status.md",sourceDirName:"blockchain/Services",slug:"/blockchain/Services/Status",permalink:"/blockchain/Services/Status",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proof Engine",permalink:"/blockchain/Services/ProofEngine"},next:{title:"Blockchain APIs",permalink:"/blockchain/recipes"}},i=[{value:"Install NodeJS",id:"install-nodejs",children:[],level:2},{value:"Install Yarn",id:"install-yarn",children:[],level:2},{value:"Clone the Status",id:"clone-the-status",children:[],level:2},{value:"Run the Status",id:"run-the-status",children:[],level:2},{value:"Install Docker",id:"install-docker",children:[],level:2},{value:"Build the image",id:"build-the-image",children:[],level:2},{value:"Run the Status",id:"run-the-status-1",children:[],level:2}],s={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"status"},"Status"),(0,a.kt)("h1",{id:"compile-from-source"},"Compile from Source"),(0,a.kt)("h2",{id:"install-nodejs"},(0,a.kt)("a",{parentName:"h2",href:"https://nodejs.org/en/"},"Install NodeJS")),(0,a.kt)("h2",{id:"install-yarn"},(0,a.kt)("a",{parentName:"h2",href:"https://classic.yarnpkg.com/lang/en/docs/install"},"Install Yarn")),(0,a.kt)("h2",{id:"clone-the-status"},"Clone the Status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/functionland/functionland-status.git\n")),(0,a.kt)("h2",{id:"run-the-status"},"Run the Status"),(0,a.kt)("p",null,"Requires a ",(0,a.kt)("a",{parentName:"p",href:"/blockchain/Services/Node"},"Node")," running."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\nPORT=8000 REACT_APP_PROVIDER_SOCKET=ws://127.0.0.1:9944 yarn start\n")),(0,a.kt)("h1",{id:"using-docker"},"Using Docker"),(0,a.kt)("h2",{id:"install-docker"},(0,a.kt)("a",{parentName:"h2",href:"https://docs.docker.com/engine/install/"},"Install Docker")),(0,a.kt)("h2",{id:"build-the-image"},"Build the image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t sugarfunge-status:local -f docker/Dockerfile .\n")),(0,a.kt)("h2",{id:"run-the-status-1"},"Run the Status"),(0,a.kt)("p",null,"Requires a ",(0,a.kt)("a",{parentName:"p",href:"/blockchain/Services/Node"},"Node")," running."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -d --network host --env PORT=8000 --env REACT_APP_PROVIDER_SOCKET=ws://127.0.0.1:9944 sugarfunge-status:local\n")))}u.isMDXComponent=!0}}]);