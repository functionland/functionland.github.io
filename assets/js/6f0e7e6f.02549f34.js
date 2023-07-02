"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5153],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),h=a,m=u["".concat(i,".").concat(h)]||u[h]||p[h]||o;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7866:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const o={},l="Test Node",c={unversionedId:"blockchain/Services/Node",id:"blockchain/Services/Node",title:"Test Node",description:"This document explains how to run sample nodes. However, for an actual node with custom keys please refer to Run Node",source:"@site/docs/blockchain/Services/Node.md",sourceDirName:"blockchain/Services",slug:"/blockchain/Services/Node",permalink:"/blockchain/Services/Node",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Explorer",permalink:"/blockchain/Services/Explorer"},next:{title:"Build Node",permalink:"/blockchain/Services/BuildNode"}},i=[{value:"Install OS dependencies and Rust",id:"install-os-dependencies-and-rust",children:[],level:2},{value:"Clone the Node",id:"clone-the-node",children:[{value:"Run a Local Testnet",id:"run-a-local-testnet",children:[],level:3},{value:"alice node:",id:"alice-node",children:[],level:3},{value:"bob node:",id:"bob-node",children:[],level:3},{value:"charlie node:",id:"charlie-node",children:[],level:3}],level:2},{value:"Install Docker",id:"install-docker",children:[],level:2},{value:"Build the image",id:"build-the-image",children:[],level:2},{value:"Run a Local Testnet",id:"run-a-local-testnet-1",children:[{value:"alice node:",id:"alice-node-1",children:[],level:3},{value:"bob node:",id:"bob-node-1",children:[],level:3},{value:"charlie node:",id:"charlie-node-1",children:[],level:3}],level:2}],s={toc:i};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-node"},"Test Node"),(0,a.kt)("p",null,"This document explains how to run sample nodes. However, for an actual node with custom keys please refer to ",(0,a.kt)("a",{parentName:"p",href:"RunNode"},"Run Node")),(0,a.kt)("h1",{id:"compile-from-source"},"Compile from Source"),(0,a.kt)("h2",{id:"install-os-dependencies-and-rust"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/functionland/sugarfunge-node/blob/main/docs/rust-setup.md"},"Install OS dependencies and Rust")),(0,a.kt)("h2",{id:"clone-the-node"},"Clone the Node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/functionland/sugarfunge-node.git\n")),(0,a.kt)("h3",{id:"run-a-local-testnet"},"Run a Local Testnet"),(0,a.kt)("h3",{id:"alice-node"},"alice node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --release -- --chain=local --enable-offchain-indexing true --alice --base-path=.tmp/a --port=30334 --ws-port 9944 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external\n")),(0,a.kt)("h3",{id:"bob-node"},"bob node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --release -- --chain=local --enable-offchain-indexing true --bob --base-path=.tmp/b --port=30335 --ws-port 9945 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/12D3KooWNxmYfzomt7EXfMSLuoaK68JzXnZkNjXyAYAwNrQTDx7Y\n")),(0,a.kt)("h3",{id:"charlie-node"},"charlie node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --release -- --chain=local --enable-offchain-indexing true --charlie --base-path=.tmp/c --port=30336 --ws-port 9946 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/12D3KooWNxmYfzomt7EXfMSLuoaK68JzXnZkNjXyAYAwNrQTDx7Y\n")),(0,a.kt)("h1",{id:"using-docker"},"Using Docker"),(0,a.kt)("h2",{id:"install-docker"},(0,a.kt)("a",{parentName:"h2",href:"https://docs.docker.com/engine/install/"},"Install Docker")),(0,a.kt)("h2",{id:"build-the-image"},"Build the image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t sugarfunge-node:local -f docker/Dockerfile .\n")),(0,a.kt)("h2",{id:"run-a-local-testnet-1"},"Run a Local Testnet"),(0,a.kt)("h3",{id:"alice-node-1"},"alice node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -d --network host sugarfunge-node:local --chain=local --enable-offchain-indexing true --alice --base-path=.tmp/a --port=30334 --ws-port 9944 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external\n")),(0,a.kt)("h3",{id:"bob-node-1"},"bob node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -d --network host sugarfunge-node:local --chain=local --enable-offchain-indexing true --bob --base-path=.tmp/b --port=30335 --ws-port 9945 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/12D3KooWNxmYfzomt7EXfMSLuoaK68JzXnZkNjXyAYAwNrQTDx7Y\n")),(0,a.kt)("h3",{id:"charlie-node-1"},"charlie node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -d --network host sugarfunge-node:local --chain=local --enable-offchain-indexing true --charlie --base-path=.tmp/c --port=30336 --ws-port 9946 --ws-external --rpc-cors=all --rpc-methods=Unsafe --rpc-external --bootnodes /ip4/127.0.0.1/tcp/30334/p2p/12D3KooWNxmYfzomt7EXfMSLuoaK68JzXnZkNjXyAYAwNrQTDx7Y\n")))}d.isMDXComponent=!0}}]);