"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9775:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"FxBlox Hardware",id:"fxblox-hardware"},i=void 0,l={unversionedId:"release/functionyard/fxblox-hardware",id:"release/functionyard/fxblox-hardware",title:"FxBlox Hardware",description:"Preparing Your FxBlox",source:"@site/docs/release/functionyard/fxblox-hardware.md",sourceDirName:"release/functionyard",slug:"/release/functionyard/fxblox-hardware",permalink:"/release/functionyard/fxblox-hardware",tags:[],version:"current",frontMatter:{title:"FxBlox Hardware",id:"fxblox-hardware"},sidebar:"functiontard",previous:{title:"Functionyard",permalink:"/release/functionyard/"},next:{title:"FxBlox App",permalink:"/release/functionyard/fxblox-app"}},p=[{value:"Preparing Your FxBlox",id:"preparing-your-fxblox",children:[{value:"Step 1: Download the Firmware",id:"step-1-download-the-firmware",children:[],level:3},{value:"Step 2: Unzip and Transfer to FAT32 USB",id:"step-2-unzip-and-transfer-to-fat32-usb",children:[],level:3},{value:"Step 3: Updating FxBlox",id:"step-3-updating-fxblox",children:[],level:3},{value:"Step 4: Post-Update",id:"step-4-post-update",children:[],level:3}],level:2},{value:"Video Demo of the update steps:",id:"video-demo-of-the-update-steps",children:[{value:"After attaching the USB:",id:"after-attaching-the-usb",children:[],level:3},{value:"After about 15 minutes:",id:"after-about-15-minutes",children:[],level:3}],level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"preparing-your-fxblox"},"Preparing Your FxBlox"),(0,a.kt)("h3",{id:"step-1-download-the-firmware"},"Step 1: Download the Firmware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Download"),": Find ",(0,a.kt)("inlineCode",{parentName:"li"},"minimal_update.zip")," in the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/functionland/rk1-image/releases/latest"},"latest release")," under the Assets section on GitHub. As of 16/Feb/2024, this is the latest file: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/functionland/rk1-image/releases/download/v1.1.22/minimal_update.zip"},"https://github.com/functionland/rk1-image/releases/download/v1.1.22/minimal_update.zip"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Options"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Download files with ",(0,a.kt)("inlineCode",{parentName:"li"},"minimal_")," prefix if you do not need a desktop interface (access via Terminal, smaller file size)."),(0,a.kt)("li",{parentName:"ul"},"Download files without ",(0,a.kt)("inlineCode",{parentName:"li"},"minimal_")," prefix if you require a desktop interface."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Note"),": If the file is split into multiple parts (due to GitHub size limits), download all parts to the same folder, and then you can unzip by clicking the one with ",(0,a.kt)("inlineCode",{parentName:"li"},".zip")," extension.")))),(0,a.kt)("h3",{id:"step-2-unzip-and-transfer-to-fat32-usb"},"Step 2: Unzip and Transfer to FAT32 USB"),(0,a.kt)("p",null,"Before starting, make sure that your USB stick is ",(0,a.kt)("strong",{parentName:"p"},"32GB or smaller"),". Anything larger than 32GB may not work because the limit for FAT32 is 32GB."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unzipping"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Unzip ",(0,a.kt)("inlineCode",{parentName:"li"},"minimal_update.zip")," on your computer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Important"),": Unzip on your computer first, then transfer to avoid ",(0,a.kt)("inlineCode",{parentName:"li"},"FAT32")," file size limitations."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Important USB Preparation"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use a USB drive formatted as ",(0,a.kt)("inlineCode",{parentName:"li"},"FAT32"),"."),(0,a.kt)("li",{parentName:"ul"},"Copy unzipped files directly to the root of the USB drive. So the files ",(0,a.kt)("inlineCode",{parentName:"li"},"boot.scr"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"update.img.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"update.img.1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"update.img.2")," must be in the root of your USB disk")))),(0,a.kt)("h3",{id:"step-3-updating-fxblox"},"Step 3: Updating FxBlox"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Turn Off"),": Ensure your FxBlox is turned off."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"USB Connection"),": Connect the USB drive to the top USB port of the FxBlox. (Only the top port is designed for updates)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Power On"),": Turn on your FxBlox. The LED will display green, blue, and then yellow, indicating the update process."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Final Steps"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"After about 15 minutes, the LED blinks green and blue. Remove the USB drive."),(0,a.kt)("li",{parentName:"ul"},"Restart the FxBlox by unplugging and plugging back the power."),(0,a.kt)("li",{parentName:"ul"},"Optionally, reinsert the USB to a different port or remove the files if using the top port again.")))),(0,a.kt)("h3",{id:"step-4-post-update"},"Step 4: Post-Update"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wait after First Boot"),": On the first boot post-update, the FxBlox automatically reboots 3 times, and go through a series of lights, this ",(0,a.kt)("strong",{parentName:"p"},"full process")," should take about ",(0,a.kt)("strong",{parentName:"p"},"30 minutes")," to fully process the update and show the FxBlox WiFi."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Leave it plugged in!"),": At any time, you may think it is done or stuck or it is turned off, but be rest assured that it is processing the update. After automatic restarts are done, the FxBlox will proceed to show a variety of colors including: ",(0,a.kt)("font",{color:"Blue"},"blue"),", ",(0,a.kt)("font",{color:"green"}," green"),", ",(0,a.kt)("font",{color:"cyan"}," cyan"),", ",(0,a.kt)("font",{color:"yellow"}," yellow"),", off, ",(0,a.kt)("font",{color:"red"}," red"),"; in that order. This process make take around ",(0,a.kt)("strong",{parentName:"p"},"10 minutes")," until LEDs turn flashing ",(0,a.kt)("font",{color:"cyan"}," cyan"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Future firmware updates will be automatic, eliminating the need for manual updates.")),(0,a.kt)("h2",{id:"video-demo-of-the-update-steps"},"Video Demo of the update steps:"),(0,a.kt)("h3",{id:"after-attaching-the-usb"},"After attaching the USB:"),(0,a.kt)("video",{width:"320",height:"240",controls:!0},(0,a.kt)("source",{src:"https://github.com/functionland/rk1-image/assets/6176518/06ddf8ed-61a0-4031-b48d-77f7f7ba79eb",type:"video/mp4"}),"Your browser does not support the video tag."),(0,a.kt)("h3",{id:"after-about-15-minutes"},"After about 15 minutes:"),(0,a.kt)("video",{width:"320",height:"240",controls:!0},(0,a.kt)("source",{src:"https://github.com/functionland/rk1-image/assets/6176518/71d42e46-1cc8-4ab7-b573-a11eeaea3289",type:"video/mp4"}),"Your browser does not support the video tag."))}u.isMDXComponent=!0}}]);