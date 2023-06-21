"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6208],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),h=a,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1283:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},c="Node API",s={unversionedId:"blockchain/Services/NodeAPI",id:"blockchain/Services/NodeAPI",title:"Node API",description:"Install OS dependencies and Rust",source:"@site/docs/blockchain/Services/NodeAPI.md",sourceDirName:"blockchain/Services",slug:"/blockchain/Services/NodeAPI",permalink:"/blockchain/Services/NodeAPI",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RunValidators",permalink:"/blockchain/Services/RunValidators"},next:{title:"Proof Engine",permalink:"/blockchain/Services/ProofEngine"}},u=[{value:"Install OS dependencies and Rust",id:"install-os-dependencies-and-rust",children:[],level:2},{value:"Clone the Node API",id:"clone-the-node-api",children:[],level:2},{value:"Run the Node API",id:"run-the-node-api",children:[],level:2},{value:"Install Docker",id:"install-docker",children:[],level:2},{value:"Build the image",id:"build-the-image",children:[],level:2},{value:"Run the Node API",id:"run-the-node-api-1",children:[],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-api"},"Node API"),(0,o.kt)("h1",{id:"compile-from-source"},"Compile from Source"),(0,o.kt)("h2",{id:"install-os-dependencies-and-rust"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/functionland/sugarfunge-node/blob/main/docs/rust-setup.md"},"Install OS dependencies and Rust")),(0,o.kt)("h2",{id:"clone-the-node-api"},"Clone the Node API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/functionland/sugarfunge-api.git\n")),(0,o.kt)("h2",{id:"run-the-node-api"},"Run the Node API"),(0,o.kt)("p",null,"Requires a ",(0,o.kt)("a",{parentName:"p",href:"/blockchain/Services/Node"},"Node")," running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --release\n")),(0,o.kt)("h1",{id:"using-docker"},"Using Docker"),(0,o.kt)("h2",{id:"install-docker"},(0,o.kt)("a",{parentName:"h2",href:"https://docs.docker.com/engine/install/"},"Install Docker")),(0,o.kt)("h2",{id:"build-the-image"},"Build the image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t sugarfunge-api:local -f docker/Dockerfile .\n")),(0,o.kt)("h2",{id:"run-the-node-api-1"},"Run the Node API"),(0,o.kt)("p",null,"Requires a ",(0,o.kt)("a",{parentName:"p",href:"/blockchain/Services/Node"},"Node")," running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -d --network host sugarfunge-api:local\n")),(0,o.kt)("h1",{id:"available-arguments"},"Available arguments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugarfunge-api 0.1.0\n\nUSAGE:\n    sugarfunge-api [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -d, --db-uri <db>                  \n    -l, --listen <listen>               [default: http://127.0.0.1:4000]\n    -s, --node-server <node-server>     [default: ws://127.0.0.1:9944]\n")),(0,o.kt)("h1",{id:"subscriptions"},"Subscriptions"),(0,o.kt)("p",null,"Basic support for WebSockets subscriptions is available. Any tool that offers features for WebSockets connections and subscriptions will apply. For example, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"websocat ws://127.0.0.1:4000/ws\n")),(0,o.kt)("h1",{id:"api-metadata-generation"},"API Metadata Generation"),(0,o.kt)("p",null,"If you update the ",(0,o.kt)("a",{parentName:"p",href:"/blockchain/Services/Node"},"Node")," manually, it's required to generate the metadata with the SugarFunge fork of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SugarFunge/subxt"},"subxt")," to access the new state of the chain using the API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"subxt-cli metadata -f bytes > sugarfunge_metadata.scale\n")))}p.isMDXComponent=!0}}]);