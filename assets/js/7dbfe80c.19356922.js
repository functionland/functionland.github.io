"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1283:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Node API",l={unversionedId:"blockchain/Services/NodeAPI",id:"blockchain/Services/NodeAPI",title:"Node API",description:"Install OS dependencies and Rust",source:"@site/docs/blockchain/Services/NodeAPI.md",sourceDirName:"blockchain/Services",slug:"/blockchain/Services/NodeAPI",permalink:"/blockchain/Services/NodeAPI",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Run Node",permalink:"/blockchain/Services/RunNode"},next:{title:"Proof Engine",permalink:"/blockchain/Services/ProofEngine"}},c=[{value:"Install OS dependencies and Rust",id:"install-os-dependencies-and-rust",children:[],level:2},{value:"Clone the Node API",id:"clone-the-node-api",children:[],level:2},{value:"Run the Node API",id:"run-the-node-api",children:[],level:2},{value:"Install Docker",id:"install-docker",children:[],level:2},{value:"Build the image",id:"build-the-image",children:[],level:2},{value:"Run the Node API",id:"run-the-node-api-1",children:[],level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-api"},"Node API"),(0,a.kt)("h1",{id:"compile-from-source"},"Compile from Source"),(0,a.kt)("h2",{id:"install-os-dependencies-and-rust"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/functionland/sugarfunge-node/blob/main/docs/rust-setup.md"},"Install OS dependencies and Rust")),(0,a.kt)("h2",{id:"clone-the-node-api"},"Clone the Node API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/functionland/sugarfunge-api.git\n")),(0,a.kt)("h2",{id:"run-the-node-api"},"Run the Node API"),(0,a.kt)("p",null,"Requires a ",(0,a.kt)("a",{parentName:"p",href:"/blockchain/Services/Node"},"Node")," running."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --release\n")),(0,a.kt)("h1",{id:"using-docker"},"Using Docker"),(0,a.kt)("h2",{id:"install-docker"},(0,a.kt)("a",{parentName:"h2",href:"https://docs.docker.com/engine/install/"},"Install Docker")),(0,a.kt)("h2",{id:"build-the-image"},"Build the image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t sugarfunge-api:local -f docker/Dockerfile .\n")),(0,a.kt)("h2",{id:"run-the-node-api-1"},"Run the Node API"),(0,a.kt)("p",null,"Requires a ",(0,a.kt)("a",{parentName:"p",href:"/blockchain/Services/Node"},"Node")," running."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -d --network host sugarfunge-api:local\n")),(0,a.kt)("h1",{id:"available-arguments"},"Available arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sugarfunge-api 0.1.0\n\nUSAGE:\n    sugarfunge-api [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -d, --db-uri <db>                  \n    -l, --listen <listen>               [default: http://127.0.0.1:4000]\n    -s, --node-server <node-server>     [default: ws://127.0.0.1:9944]\n")),(0,a.kt)("h1",{id:"subscriptions"},"Subscriptions"),(0,a.kt)("p",null,"Basic support for WebSockets subscriptions is available. Any tool that offers features for WebSockets connections and subscriptions will apply. For example, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"websocat ws://127.0.0.1:4000/ws\n")),(0,a.kt)("h1",{id:"api-metadata-generation"},"API Metadata Generation"),(0,a.kt)("p",null,"If you update the ",(0,a.kt)("a",{parentName:"p",href:"/blockchain/Services/Node"},"Node")," manually, it's required to generate the metadata with the SugarFunge fork of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SugarFunge/subxt"},"subxt")," to access the new state of the chain using the API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"subxt-cli metadata -f bytes > sugarfunge_metadata.scale\n")))}u.isMDXComponent=!0}}]);