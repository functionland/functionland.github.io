"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1564],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4895:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Fotos Setup",id:"setup"},p="Fotos Setup",s={unversionedId:"mvp/fotos/setup",id:"mvp/fotos/setup",title:"Fotos Setup",description:"Acceptance Criteria",source:"@site/docs/mvp/fotos/setup.md",sourceDirName:"mvp/fotos",slug:"/mvp/fotos/setup",permalink:"/mvp/fotos/setup",tags:[],version:"current",frontMatter:{title:"Fotos Setup",id:"setup"},sidebar:"mvpSidebar",previous:{title:"Fotos",permalink:"/mvp/fotos"},next:{title:"Fotos Backup to Fula environment",permalink:"/mvp/fotos/backup"}},c=[{value:"Acceptance Criteria",id:"acceptance-criteria",children:[],level:2},{value:"Preconditions",id:"preconditions",children:[],level:2},{value:"Steps",id:"steps",children:[{value:"Connect Fotos to your wallet",id:"connect-fotos-to-your-wallet",children:[],level:3},{value:"Connect Fotos to your Fula API server",id:"connect-fotos-to-your-fula-api-server",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fotos-setup"},"Fotos Setup"),(0,a.kt)("h2",{id:"acceptance-criteria"},"Acceptance Criteria"),(0,a.kt)("p",null,"You set up Fotos with your wallet account and connect it to the Fula API server."),(0,a.kt)("p",null,"Once set up correctly you are able to perform all other ",(0,a.kt)("a",{parentName:"p",href:"/mvp/fotos"},"Fotos stories"),"."),(0,a.kt)("h2",{id:"preconditions"},"Preconditions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You have already downloaded and installed Fotos.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You already have a Fula environment running and have acquired the Fula API server's multiaddress from the server logs that is reachable from your phone."))),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"connect-fotos-to-your-wallet"},"Connect Fotos to your wallet"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1B1TJxssjRfQfpbDeMliPQj-g6ONmv1zY/view?usp=sharing"},"Here")," is a video demonstrating the following steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Account -> Connect your wallet")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Authorize the Dapp from your wallet.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Tap 'sign your address' when redirected back to Fotos.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Perform the signing request from the wallet."))),(0,a.kt)("h3",{id:"connect-fotos-to-your-fula-api-server"},"Connect Fotos to your Fula API server"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1BeIia_QthpVlhq9x_fYXaZdpp6QPdCVq/view?usp=sharing"},"Here")," is a video demonstrating the following steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula-testnet#getting-box-multiaddress--peer-id"},"Acquire")," the Fula API server multiaddress from it's server logs.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the Fula API server's multiaddress to your clipboard.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Account -> Boxes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a new Box."),(0,a.kt)("p",{parentName:"li"},"a ) Give the Box a name for identification purposes (can be anything)."),(0,a.kt)("p",{parentName:"li"},"b ) Paste the Box's multiaddress ."))))}m.isMDXComponent=!0}}]);