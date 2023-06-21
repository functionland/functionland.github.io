"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4492],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7278:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Fotos Availability",id:"availability"},c="Fotos Availability",p={unversionedId:"mvp/fotos/availability",id:"mvp/fotos/availability",title:"Fotos Availability",description:"Acceptance Criteria",source:"@site/docs/mvp/fotos/availability.md",sourceDirName:"mvp/fotos",slug:"/mvp/fotos/availability",permalink:"/mvp/fotos/availability",tags:[],version:"current",frontMatter:{title:"Fotos Availability",id:"availability"}},u=[{value:"Acceptance Criteria",id:"acceptance-criteria",children:[],level:2},{value:"Preconditions",id:"preconditions",children:[],level:2},{value:"Steps",id:"steps",children:[],level:2}],s={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fotos-availability"},"Fotos Availability"),(0,a.kt)("h2",{id:"acceptance-criteria"},"Acceptance Criteria"),(0,a.kt)("p",null,"You uploaded a photo to your Fula API server."),(0,a.kt)("p",null,"Your Fula environment goes offline and you are still able to retrieve the photo from a second Fula environment in your pool."),(0,a.kt)("h2",{id:"preconditions"},"Preconditions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You have already ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/tree/main/apps/cluster"},"set up a cluster"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You have already ",(0,a.kt)("a",{parentName:"p",href:"./setup"},"set up Fotos")," with your own wallet account and connected it to your Fula API server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You already ",(0,a.kt)("a",{parentName:"p",href:"./backup"},"backed up")," a photo that you would like to share."))),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1BxYo3Enb_6f4cgcMazsAPskfcNQMCowW/view?usp=sharing"},"Here")," is a video demonstrating the following steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Delete the photo from your device by long pressing the photo and selecting the 'delete' icon.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove the first Box from your list and add the second using the multiaddress from the server logs of the second Box.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify that the second Box is in fact storing the image and that you are able to retrieve it by tapping on the placeholder thumbnail that appears in the deleted image's place."))))}f.isMDXComponent=!0}}]);