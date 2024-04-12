"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,g=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return r?a.createElement(g,i(i({ref:t},m),{},{components:r})):a.createElement(g,i({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5176:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={title:"Re-imaging CM4"},i=void 0,p={unversionedId:"functionyard/hardware/fxblox-hardware-rpi-reimage",id:"functionyard/hardware/fxblox-hardware-rpi-reimage",title:"Re-imaging CM4",description:"Re-imaging CM4",source:"@site/docs/functionyard/hardware/fxblox-hardware-rpi-reimage.md",sourceDirName:"functionyard/hardware",slug:"/functionyard/hardware/fxblox-hardware-rpi-reimage",permalink:"/functionyard/hardware/fxblox-hardware-rpi-reimage",tags:[],version:"current",frontMatter:{title:"Re-imaging CM4"}},l=[{value:"Re-imaging CM4",id:"re-imaging-cm4",children:[{value:"Steps for Re-imaging",id:"steps-for-re-imaging",children:[],level:3}],level:2}],s={toc:l};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"re-imaging-cm4"},"Re-imaging CM4"),(0,n.kt)("p",null,"If for any reason the CM4 fulatower gets stuck in a blue/white light without going through the whole boot process, or it is not connected to the Wi-Fi or propagating the FxBlox hotspot, you need to perform a full re-image. This process requires you to first open the tower, which involves unscrewing parts of it. The process of opening the tower is shown in the video below:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/feBov6U_kJs?t=246"},(0,n.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/feBov6U_kJs/0.jpg",alt:"How to open the tower"}))),(0,n.kt)("h3",{id:"steps-for-re-imaging"},"Steps for Re-imaging"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Unplug the Tower from Power")),(0,n.kt)("p",{parentName:"li"},"Ensure the tower is not connected to any power source before proceeding.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Opening the Tower")),(0,n.kt)("p",{parentName:"li"},"Follow the instructions in the video linked above to open the tower safely.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Connect the USB-C Port")),(0,n.kt)("p",{parentName:"li"},"Connect the USB-C port on the side of the tower to your laptop or PC."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Placeholder for USB-C connection image",src:r(7033).Z,width:"960",height:"1280"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Short Circuit the Two Pins")),(0,n.kt)("p",{parentName:"li"},"Short circuit the two pins located on the bottom left side of the Raspberry Pi module. You can use anything to short circuit them, like putting hte head of a USC-C cable between them. but make sure hte material you are using is conductive nad not Aluminum for example (key rings for example are usually aluminum)"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Placeholder for short circuit pins image",src:r(808).Z,width:"602",height:"800"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Power On the Tower")),(0,n.kt)("p",{parentName:"li"},"Plug the tower back into power. It should display a blue/white light and remain like that, indicating it is in image mode. You can remove the short circuit from step 4 at this stage.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Installing and Running rpiboot")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"For Windows:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Download and install rpiboot from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"Type ",(0,n.kt)("inlineCode",{parentName:"li"},"rpiboot")," in your search bar and run it. After a few seconds it starts printing some stuff and automatically closes after 15 seconds or so. Wait for the terminal to close before proceeding."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"For Mac:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"git clone --recurse-submodules --shallow-submodules --depth=1 https://github.com/raspberrypi/usbboot\ncd usbboot\nbrew install libusb\nbrew install pkg-config\nmake\nsudo ./rpiboot\n")),(0,n.kt)("p",{parentName:"li"},"After a few seconds it starts printing some stuff and automatically closes after 15 seconds or so. Wait for the terminal to close before proceeding.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Download the Latest Image")),(0,n.kt)("p",{parentName:"li"},"Download the latest image for your CM4, from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/functionland/rpi-image/releases/latest"},"the official GitHub repository"),". Download all the files that start with ",(0,n.kt)("inlineCode",{parentName:"p"},"rpi_cm4_fulimage")," into one folder on your computer.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Unzip the Image Content")),(0,n.kt)("p",{parentName:"li"},"Right click on the one that ends with ",(0,n.kt)("inlineCode",{parentName:"p"},".zip.001")," and use ",(0,n.kt)("a",{parentName:"p",href:"https://www.7-zip.org/download.html"},"7zip application")," to extract. Extract the contents of the downloaded image to a known location on your computer.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Install and Run Raspberry Pi Imager")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"For Windows:")," Download from ",(0,n.kt)("a",{parentName:"li",href:"https://downloads.raspberrypi.org/imager/imager_latest.exe"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"For Mac:")," Download from ",(0,n.kt)("a",{parentName:"li",href:"https://downloads.raspberrypi.org/imager/imager_latest.dmg"},"here"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Configure Raspberry Pi Imager")),(0,n.kt)("p",{parentName:"li"},"Open Raspberry Pi Imager and select the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Raspberry Pi Device:")," RASPBERRY PI 4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operating System:"),' Scroll down and choose "custom image," then select the ',(0,n.kt)("inlineCode",{parentName:"li"},".img")," file inside the folder you unzipped in the previous step."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Storage:"),' Click on "Choose storage" and select the newly added storage, which should be around 30GB and named RPi-Msd.')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Placeholder for Raspberry Pi Imager configuration image",src:r(2556).Z,width:"1357",height:"951"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Start the Imaging Process")),(0,n.kt)("p",{parentName:"li"},'Click "Next." Choose "No" for the first popup asking if you want custom configs, and "Yes" for the second one asking for confirmation.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Wait for Completion")),(0,n.kt)("p",{parentName:"li"},"The imaging process might take about 3 hours. Please be patient.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Final Steps")),(0,n.kt)("p",{parentName:"li"},"After completion, remove the short circuit from the pins, disconnect the USB-C cable connecting the tower to the computer, and then unplug and re-plug the tower to power.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Set Up Using FxBlox App")),(0,n.kt)("p",{parentName:"li"},"Now that you have the updated fulatower, use the FxBlox app to set it up. There's no need for any other manual updates.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Closing the Tower")),(0,n.kt)("p",{parentName:"li"},"Once you've confirmed a successful setup through the FxBlox app, close up the tower again to protect it from damage."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If at the end of setup, you see a message that the app could not connect to Blox, Close the app, unplug and re-plug the blox and wait for 1 minute and open the app.")))}m.isMDXComponent=!0},2556:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/raspberrypi-imager-0098395d6b13954a7d9ae647b1ad14dd.png"},808:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rpi-shortcircuit-bc7eb70b313a56a44664ff935497ed96.jpg"},7033:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rpi-usbc-reimage-1ac52347426ee09dc487c4ec047d0ce8.jpg"}}]);