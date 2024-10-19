"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,h=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3312:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Reference",id:"reference-api"},i="Fula API Reference",l={unversionedId:"reference-api",id:"reference-api",title:"Reference",description:"The Fula API includes the following:",source:"@site/docs/reference-api.md",sourceDirName:".",slug:"/reference-api",permalink:"/reference-api",tags:[],version:"current",frontMatter:{title:"Reference",id:"reference-api"},sidebar:"tutorialSidebar",previous:{title:"Using Fula Samples",permalink:"/api/getting-started/using-samples"},next:{title:"Client Instance",permalink:"/api/client-instance"}},p=[{value:"Typical API Usage",id:"typical-api-usage",children:[{value:"Photo Upload",id:"photo-upload",children:[],level:3},{value:"Retrieve Photos for Gallery",id:"retrieve-photos-for-gallery",children:[],level:3}],level:2},{value:"Under the Covers",id:"under-the-covers",children:[],level:2}],c={toc:p};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fula-api-reference"},"Fula API Reference"),(0,a.kt)("p",null,"The Fula API includes the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a ",(0,a.kt)("a",{parentName:"p",href:"/api/graph-api"},"Graph API")," for storing and querying structured data (JSON) over a graphql interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a ",(0,a.kt)("a",{parentName:"p",href:"/api/file-api"},"File API")," for uploading and retrieving files"))),(0,a.kt)("h2",{id:"typical-api-usage"},"Typical API Usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Graph")," APIs can be used together to build many different types of DApps."),(0,a.kt)("p",null,"To better understand how they work together, here is an illustration of the basic flow you would use if you wanted to build your own photos DApp."),(0,a.kt)("p",null,"At a high level you will write a client that enables the user to upload a bunch of files and retrieve a list of the files so that they can be displayed in your DApp."),(0,a.kt)("p",null,"In order to do this you need to tell the ",(0,a.kt)("inlineCode",{parentName:"p"},"Graph")," API where to store the collection of photos.  You can give this collection any name you choose."),(0,a.kt)("h3",{id:"photo-upload"},"Photo Upload"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Photo-Upload",src:"https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/upload-photo.svg"}),(0,a.kt)("p",{align:"center"},"Photo-Upload")),(0,a.kt)("h3",{id:"retrieve-photos-for-gallery"},"Retrieve Photos for Gallery"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Gallery-Retrieve",src:"https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/retrieve-photo.svg"}),(0,a.kt)("p",{align:"center"},"Gallery-Retrieve")),(0,a.kt)("h2",{id:"under-the-covers"},"Under the Covers"),(0,a.kt)("p",null,"To understand how the Fula client connects to a Box, it may help to understand what is going on under the covers."),(0,a.kt)("p",null,"The following Box  <->  Client class diagram shows relationships and responsibilities for each component."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Client Box architecture",src:r(4090).Z,width:"6656",height:"3143"})))}s.isMDXComponent=!0},4090:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/box-client-arch-7dbc18b37f68d0bed246a60c14d2caf4.png"}}]);