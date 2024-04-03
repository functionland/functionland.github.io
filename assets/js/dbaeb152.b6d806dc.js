"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1e3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(r),p=a,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8605:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>f,toc:()=>b});var n=r(7462),a=r(7294),l=r(3905),o=r(2389),i=r(5773),s=r(6010);const u="tabItem_LplD";function c(e){var t,r;const{lazy:l,block:o,defaultValue:c,values:d,groupId:h,className:p}=e,m=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??m.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,i.lx)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=m[0])?void 0:r.props.value);if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,i.UB)(),[w,g]=(0,a.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=h){const e=k[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&g(e)}const O=e=>{const t=e.currentTarget,r=x.indexOf(t),n=f[r].value;n!==w&&(T(t),g(n),null!=h&&y(h,n))},B=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]||x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]||x[x.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},p)},f.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:B,onFocus:O,onClick:O},l,{className:(0,s.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),r??t)}))),l?(0,a.cloneElement)(m.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}const h=function(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)},p={title:"FxBlox Hardware",id:"fxblox-hardware"},m=void 0,f={unversionedId:"functionyard/hardware/fxblox-hardware",id:"functionyard/hardware/fxblox-hardware",title:"FxBlox Hardware",description:"The Difference Between Lite and Lite Plus",source:"@site/docs/functionyard/hardware/fxblox-hardware.mdx",sourceDirName:"functionyard/hardware",slug:"/functionyard/hardware/fxblox-hardware",permalink:"/functionyard/hardware/fxblox-hardware",tags:[],version:"current",frontMatter:{title:"FxBlox Hardware",id:"fxblox-hardware"},sidebar:"tutorialSidebar",previous:{title:"Functionyard",permalink:"/functionyard/"},next:{title:"FxBlox Lite (CM4)",permalink:"/functionyard/hardware/fxblox-hardware-rpi"}},b=[{value:"The Difference Between Lite and Lite Plus",id:"the-difference-between-lite-and-lite-plus",children:[],level:2}],v={toc:b};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"the-difference-between-lite-and-lite-plus"},"The Difference Between Lite and Lite Plus"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"The two models look identical from the outside")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It is important to know which Blox you have. The manual firmware update process varies between the two and their steps need to be followed ",(0,l.kt)("strong",{parentName:"p"},"exactly as shown"),"!"))),(0,l.kt)(d,{mdxType:"Tabs"},(0,l.kt)(h,{value:"Lite",label:"FxBlox Lite (CM4)",default:!0,mdxType:"TabItem"},"The FxBlox Lite has a CPU from Raspberry Pi and it is alternatively known as the ",(0,l.kt)("b",null,"CM4"),". Only about ",(0,l.kt)("b",null,"100")," of these were distributed during the Indiegogo delivery phase. You would have had to fill in a form to specifically opt-in to receive this FxBlox. Other than that there are two key ways to tell if you have this model.",(0,l.kt)("ol",{type:"1"},(0,l.kt)("li",null," ",(0,l.kt)("b",null,"Check the barcode.")," On the side of the original box that the device came in. It should look like this."),(0,l.kt)("li",null," ",(0,l.kt)("b",null,"Open up the device.")," You can do this by removing the four black screws of the three-port USB housing, then the four silver screws on the bottom of the Blox. You will be able to slide out the board and see this device.",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("b",null,"Front")),(0,l.kt)("img",{src:"/img/fxyard-network/cm4-front.jpg"}),(0,l.kt)("li",null,(0,l.kt)("b",null,"Back")),(0,l.kt)("img",{src:"/img/fxyard-network/cm4-back.jpg"}))))),(0,l.kt)(h,{value:"Plus",label:"FxBlox Lite Plus (RK1)",mdxType:"TabItem"},"The FxBlox Lite Plus has a CPU from Rockchip, it is alternatively known as the ",(0,l.kt)("b",null,"RK1"),". About ",(0,l.kt)("b",null,"900")," of these were distributed during our Indiegogo delivery phase. So it is highly likely you have this model. Other than that there are two key ways to tell if you have this model.",(0,l.kt)("ol",{type:"1"},(0,l.kt)("li",null," ",(0,l.kt)("b",null,"Check the barcode.")," On the side of the original box that the device came in. It should start with ",(0,l.kt)("b",null,"`RK1`"),", like this.",(0,l.kt)("img",{src:"/img/fxyard-network/nostorage-rk1.jpg",style:{width:450}}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"You will know if your Blox came with 1TB internal storage, if the barcode has a ",(0,l.kt)("b",null,"`1`")," on the second digit from the left (after `RK1`)."),(0,l.kt)("img",{src:"/img/fxyard-network/wstorage-rk1.png",style:{width:450}}))),(0,l.kt)("li",null," ",(0,l.kt)("b",null,"Open up the device.")," You can do this by removing the four black screws of the three-port USB housing, then the four silver screws on the bottom of the Blox. You will be able to slide out the board and see this device.",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("b",null,"Front")),(0,l.kt)("img",{src:"/img/fxyard-network/rk1-front.jpg"}),(0,l.kt)("li",null,(0,l.kt)("b",null,"Back")),(0,l.kt)("img",{src:"/img/fxyard-network/rk1-back.jpg"}))))),(0,l.kt)(h,{value:"XL",label:"FxBlox XL",mdxType:"TabItem"},(0,l.kt)("b",null,"The FxBlox XL is still currently under development.")," Our small development team have been focusing on prioritizing the powerful FxBlox Lite Plus, the testnet, accompanying apps, and firmware. To compensate for this inconvenience, all XL backers have already been mailed an FxBlox Lite Plus with 1TB internal storage. We appreciate your understanding and support.")))}k.isMDXComponent=!0}}]);