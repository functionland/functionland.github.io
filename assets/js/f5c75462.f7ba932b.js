"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,k=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4013:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={title:"Token in Metamask",id:"metamask"},r=void 0,l={unversionedId:"release/functionyard/metamask",id:"release/functionyard/metamask",title:"Token in Metamask",description:"Adding BORG Token to MetaMask on Mumbai Chain",source:"@site/docs/release/functionyard/metamask.md",sourceDirName:"release/functionyard",slug:"/release/functionyard/metamask",permalink:"/release/functionyard/metamask",tags:[],version:"current",frontMatter:{title:"Token in Metamask",id:"metamask"},sidebar:"functiontard",previous:{title:"Joining Testnet",permalink:"/release/functionyard/join"},next:{title:"Decentralized Apps",permalink:"/release/functionyard/dapps"}},s=[{value:"Adding BORG Token to MetaMask on Mumbai Chain",id:"adding-borg-token-to-metamask-on-mumbai-chain",children:[],level:2},{value:"EASY WAY",id:"easy-way",children:[{value:"Mumbai",id:"mumbai",children:[],level:3},{value:"Goerli",id:"goerli",children:[],level:3}],level:2},{value:"HARD WAY",id:"hard-way",children:[{value:"Step 1: Select the Mumbai Network in MetaMask",id:"step-1-select-the-mumbai-network-in-metamask",children:[],level:3},{value:"Step 2: Add BORG Token",id:"step-2-add-borg-token",children:[],level:3}],level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"adding-borg-token-to-metamask-on-mumbai-chain"},"Adding BORG Token to MetaMask on Mumbai Chain"),(0,o.kt)("p",null,"This guide explains how to add the BORG token, which is not automatically listed in MetaMask, to your wallet on the Mumbai test network. There is an easy way and a hard way!"),(0,o.kt)("h2",{id:"easy-way"},"EASY WAY"),(0,o.kt)("h3",{id:"mumbai"},"Mumbai"),(0,o.kt)("p",null,"1- Adding ",(0,o.kt)("inlineCode",{parentName:"p"},"Mumbai")," Network to Metmask: First Open this link and on the right bottom click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Add to Metamask")," button. it opens your Metamask extension on chrome and adds Mumbai Network to it (if not already added)\n",(0,o.kt)("a",{parentName:"p",href:"https://chainlist.org/chain/80001"},"Mumbai Add Request")),(0,o.kt)("p",null,"2- Adding ",(0,o.kt)("inlineCode",{parentName:"p"},"BORG")," token on ",(0,o.kt)("inlineCode",{parentName:"p"},"Mumbai"),": First Open this link and on the right bottom click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Send Request")," button. it opens your Metamask extension on chrome and adds BORG token to Mumbai network (if not already added)\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.metamask.io/wallet/reference/wallet_watchasset/?type=ERC20&options%5Baddress%5D=0x99a8b2B50c4bFBf916Add5DFdf680fc873FA81f4&options%5Bsymbol%5D=BORG&options%5Bdecimals%5D=18&options%5Bimage%5D=https://raw.githubusercontent.com/functionland/sugarfunge-explorer/master/assets/BORG.svg&options%5BtokenId%5D=BORG"},"BORG Add Request")),(0,o.kt)("h3",{id:"goerli"},"Goerli"),(0,o.kt)("p",null,"1- Adding ",(0,o.kt)("inlineCode",{parentName:"p"},"Goerli")," Network to Metmask: First Open this link and on the right bottom click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Add to Metamask")," button. it opens your Metamask extension on chrome and adds Goerli Network to it (if not already added)\n",(0,o.kt)("a",{parentName:"p",href:"https://chainlist.org/chain/5"},"Goerli Add Request")),(0,o.kt)("p",null,"2- Adding ",(0,o.kt)("inlineCode",{parentName:"p"},"BORG")," token on ",(0,o.kt)("inlineCode",{parentName:"p"},"Goerli"),": First Open this link and on the right bottom click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Send Request")," button. it opens your Metamask extension on chrome and adds BORG token to Goerli network (if not already added)\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.metamask.io/wallet/reference/wallet_watchasset/?type=ERC20&options%5Baddress%5D=0x4fE33FB41B2A50ac82732C0399C9e2A82C1cBb5E&options%5Bsymbol%5D=BORG&options%5Bdecimals%5D=18&options%5Bimage%5D=https://raw.githubusercontent.com/functionland/sugarfunge-explorer/master/assets/BORG.svg&options%5BtokenId%5D=BORG"},"BORG Add Request")),(0,o.kt)("h2",{id:"hard-way"},"HARD WAY"),(0,o.kt)("h3",{id:"step-1-select-the-mumbai-network-in-metamask"},"Step 1: Select the Mumbai Network in MetaMask"),(0,o.kt)("p",null,"Ensure you have MetaMask installed and select the Mumbai Testnet. If Mumbai is not listed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Select "Add Network" manually.'),(0,o.kt)("li",{parentName:"ol"},"Enter the following details:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Network Name: Mumbai Testnet"),(0,o.kt)("li",{parentName:"ul"},"New RPC URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://rpc-mumbai.maticvigil.com/")),(0,o.kt)("li",{parentName:"ul"},"Chain ID: ",(0,o.kt)("inlineCode",{parentName:"li"},"80001")),(0,o.kt)("li",{parentName:"ul"},"Currency Symbol: ",(0,o.kt)("inlineCode",{parentName:"li"},"MATIC")),(0,o.kt)("li",{parentName:"ul"},"Block Explorer URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://polygonscan.com/"))))),(0,o.kt)("h3",{id:"step-2-add-borg-token"},"Step 2: Add BORG Token"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the MetaMask extension."),(0,o.kt)("li",{parentName:"ol"},'Go to the "Assets" tab.'),(0,o.kt)("li",{parentName:"ol"},'Scroll down and click "Import Tokens."'),(0,o.kt)("li",{parentName:"ol"},'Switch to the "Custom Token" tab.'),(0,o.kt)("li",{parentName:"ol"},"Enter the BORG Token Contract Address: ",(0,o.kt)("inlineCode",{parentName:"li"},"0x99a8b2B50c4bFBf916Add5DFdf680fc873FA81f4"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The token symbol and decimals should auto-fill. If not, you may need to enter them manually."))),(0,o.kt)("li",{parentName:"ol"},'Click "Add Custom Token."'),(0,o.kt)("li",{parentName:"ol"},'Review the token details and click "Import Tokens."')),(0,o.kt)("p",null,"Congratulations, the BORG token is now added to your MetaMask wallet on the Mumbai chain!"))}m.isMDXComponent=!0}}]);