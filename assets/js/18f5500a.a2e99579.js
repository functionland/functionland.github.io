"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[936],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,h=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3312:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Reference",id:"reference-api"},c="FULA API Reference",p={unversionedId:"reference-api",id:"reference-api",title:"Reference",description:"The FULA API comprises of the following.",source:"@site/docs/reference-api.md",sourceDirName:".",slug:"/reference-api",permalink:"/reference-api",tags:[],version:"current",frontMatter:{title:"Reference",id:"reference-api"},sidebar:"tutorialSidebar",previous:{title:"Using FULA Samples",permalink:"/getting-started/using-samples"},next:{title:"Client Instance",permalink:"/api/client-instance"}},u=[{value:"Typical API Usage",id:"typical-api-usage",children:[{value:"Photo Upload",id:"photo-upload",children:[],level:3},{value:"Retrieve Photos for Gallery",id:"retrieve-photos-for-gallery",children:[],level:3}],level:2},{value:"Under the Covers",id:"under-the-covers",children:[],level:2}],s={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fula-api-reference"},"FULA API Reference"),(0,a.kt)("p",null,"The FULA API comprises of the following."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a ",(0,a.kt)("a",{parentName:"p",href:"/api/graph-api"},"Graph API")," for storing and querying structured data (JSON) over a graphql interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a ",(0,a.kt)("a",{parentName:"p",href:"/api/file-api"},"File API")," for uploading and retrieving files"))),(0,a.kt)("h2",{id:"typical-api-usage"},"Typical API Usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Graph")," APIs can be used together to build many different types of DApps."),(0,a.kt)("p",null,"To better understand how they work together, here is an illustration of the basic flow you would use if you wanted to build your own photos DApp."),(0,a.kt)("p",null,"At a high level you will write a client that enables the user to upload a bunch of files and retrieve a list of the files so that they can be displayed in your DApp."),(0,a.kt)("p",null,"In order to do this you need to tell the ",(0,a.kt)("inlineCode",{parentName:"p"},"Graph")," API where to store the collection of photos.  The name of the collection can be anything you choose."),(0,a.kt)("h3",{id:"photo-upload"},"Photo Upload"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Photo-Upload",src:"https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/upload-photo.svg"}),(0,a.kt)("p",{align:"center"},"Photo-Upload")),(0,a.kt)("h3",{id:"retrieve-photos-for-gallery"},"Retrieve Photos for Gallery"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Gallery-Retrieve",src:"https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/retrieve-photo.svg"}),(0,a.kt)("p",{align:"center"},"Gallery-Retrieve")),(0,a.kt)("h2",{id:"under-the-covers"},"Under the Covers"),(0,a.kt)("p",null,"To understand how the FULA client connects to a Box, it may help to understand what is going on under the covers."),(0,a.kt)("p",null,"The following Box  <->  Client class diagram shows the relationship and responsibility of each component."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Client Box architecture",src:r(4090).Z,width:"6656",height:"3143"})))}d.isMDXComponent=!0},4090:function(e,t,r){t.Z=r.p+"assets/images/box-client-arch-7dbc18b37f68d0bed246a60c14d2caf4.png"}}]);