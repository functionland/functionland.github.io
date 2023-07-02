"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4492],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7278:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Fotos Availability",id:"availability"},i="Fotos Availability",l={unversionedId:"mvp/fotos/availability",id:"mvp/fotos/availability",title:"Fotos Availability",description:"Acceptance Criteria",source:"@site/docs/mvp/fotos/availability.md",sourceDirName:"mvp/fotos",slug:"/mvp/fotos/availability",permalink:"/mvp/fotos/availability",tags:[],version:"current",frontMatter:{title:"Fotos Availability",id:"availability"}},p=[{value:"Acceptance Criteria",id:"acceptance-criteria",children:[],level:2},{value:"Preconditions",id:"preconditions",children:[],level:2},{value:"Steps",id:"steps",children:[],level:2}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fotos-availability"},"Fotos Availability"),(0,n.kt)("h2",{id:"acceptance-criteria"},"Acceptance Criteria"),(0,n.kt)("p",null,"You uploaded a photo to your Fula API server."),(0,n.kt)("p",null,"Your Fula environment goes offline and you are still able to retrieve the photo from a second Fula environment in your pool."),(0,n.kt)("h2",{id:"preconditions"},"Preconditions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You have already ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/tree/main/apps/cluster"},"set up a cluster"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You have already ",(0,n.kt)("a",{parentName:"p",href:"./setup"},"set up Fotos")," with your own wallet account and connected it to your Fula API server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You already ",(0,n.kt)("a",{parentName:"p",href:"./backup"},"backed up")," a photo that you would like to share."))),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1BxYo3Enb_6f4cgcMazsAPskfcNQMCowW/view?usp=sharing"},"Here")," is a video demonstrating the following steps."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the photo from your device by long pressing the photo and selecting the 'delete' icon.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove the first Box from your list and add the second using the multiaddress from the server logs of the second Box.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify that the second Box is in fact storing the image and that you are able to retrieve it by tapping on the placeholder thumbnail that appears in the deleted image's place."))))}s.isMDXComponent=!0}}]);