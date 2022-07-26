"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[523],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(o),d=a,f=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return o?n.createElement(f,l(l({ref:t},u),{},{components:o})):n.createElement(f,l({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6169:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),l=["components"],i={title:"Protocol Testnet Alpha Pre-release",id:"testnet-alpha"},s="Protocol Testnet Alpha Pre-release",p={unversionedId:"release/testnet-alpha",id:"release/testnet-alpha",title:"Protocol Testnet Alpha Pre-release",description:"Last updated:  July 11, 2022",source:"@site/docs/release/testnet-alpha.md",sourceDirName:"release",slug:"/release/testnet-alpha",permalink:"/release/testnet-alpha",tags:[],version:"current",frontMatter:{title:"Protocol Testnet Alpha Pre-release",id:"testnet-alpha"}},u=[{value:"What is it?",id:"what-is-it",children:[],level:2},{value:"What to expect",id:"what-to-expect",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Submitting feedback",id:"submitting-feedback",children:[{value:"To output the server logs to a file",id:"to-output-the-server-logs-to-a-file",children:[],level:3}],level:2},{value:"Beware of Risks",id:"beware-of-risks",children:[],level:2},{value:"How to get started",id:"how-to-get-started",children:[{value:"Box Setup",id:"box-setup",children:[],level:3},{value:"Fotos Installation",id:"fotos-installation",children:[],level:3},{value:"Testing Steps",id:"testing-steps",children:[],level:3}],level:2}],c={toc:u};function h(e){var t=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"protocol-testnet-alpha-pre-release"},"Protocol Testnet Alpha Pre-release"),(0,r.kt)("p",null,"Last updated:  July 11, 2022"),(0,r.kt)("h2",{id:"what-is-it"},"What is it?"),(0,r.kt)("p",null,"The protocol testnet alpha pre-release includes the Fotos mobile application and some of the Box components that will be pre-installed on Box customer's raspberry Pis when they are shipped."),(0,r.kt)("h2",{id:"what-to-expect"},"What to expect"),(0,r.kt)("p",null,"The software we are delivering to you today can give you an idea of how the Fotos mobile app will backup and store your photos to the Box."),(0,r.kt)("p",null,"Once you have everything setup you should have two Boxes talking to each other running on your host machine."),(0,r.kt)("p",null,"You should be able to upload your media using Fotos from your mobile phone to one of the Boxes encrypted with a key from your own wallet."),(0,r.kt)("p",null,"You can verify that the photos are in fact synced to both Boxes and that you are able to view them on a different device."),(0,r.kt)("p",null,"You can also get an idea of how a decentralized identity might be generated from your and your friend' wallets in order to enable sharing of photos with each other."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"one Android phone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a second Android phone for sharing photos with a friend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"your own computer that can run ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Linux is recommended ( macOS also works with a few additional steps)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"each phone must be on the same network as the computer where the Box app is running")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a mobile ethereum compatible wallet (eg/ Metamask or Trust Wallet)"))),(0,r.kt)("h2",{id:"submitting-feedback"},"Submitting feedback"),(0,r.kt)("p",null,"We woud love to know how it went for you!"),(0,r.kt)("p",null,"Especially if you cannot complete any of the steps due to a bug you encountered or because you cannot satisfy the above requirements."),(0,r.kt)("p",null,"You can send us feedback via Github or as an ",(0,r.kt)("a",{parentName:"p",href:"mailto:testnet@fx.land"},"email"),"."),(0,r.kt)("p",null,"Here is some boilerplate text you can copy/paste when you are ready to send the feedback."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Subject: Protocol testnet alpha\n\nFeedback Type: [ Bug | Feature Request ]\n\nFeedback:\n\n[ I completed all of the steps successfully.  This rocked but I have a few suggestions for the next release...]\n\nOR\n\n[ I was unable to complete X step(s).  The following happened when I tried to complete the step: ...]\n\n")),(0,r.kt)("p",null,"If you believe the issue is happening in the backend then you can create an issue on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/issues"},"Fula")," repo and include the docker-compose server logs."),(0,r.kt)("p",null,"If you believe the issue is happening in the Fotos mobile client then you can create an issue on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/functionland/fotos/issues"},"Fotos")," repo and describe what is going wrong."),(0,r.kt)("p",null,"If you don't know where the problem exists or don't have a Github account then please send us an ",(0,r.kt)("a",{parentName:"p",href:"mailto:testnet@fx.land"},"email")," and attach the server logs if you are reporting a bug."),(0,r.kt)("h3",{id:"to-output-the-server-logs-to-a-file"},"To output the server logs to a file"),(0,r.kt)("p",null,"Open a terminal and enter the following in the same directory that you ran docker-compose in the previous steps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  > docker-compose logs >  out.log\n")),(0,r.kt)("h2",{id:"beware-of-risks"},"Beware of Risks"),(0,r.kt)("p",null,"The Functionland protocol testnet alpha pre-release includes client side encryption as a first layer of security to help prevent others from gaining access to your photos and video."),(0,r.kt)("p",null,"However, because the software we are delivering is fresh off the press and still not properly audited, PLEASE USE WITH CAUTION."),(0,r.kt)("p",null,"At this point, we recommend you not upload any highly sensitive media to the Box or use it as a primary backup facility."),(0,r.kt)("h2",{id:"how-to-get-started"},"How to get started"),(0,r.kt)("h3",{id:"box-setup"},"Box Setup"),(0,r.kt)("p",null,"First, you can follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/blob/main/apps/cluster/README.md"},"over here")," for setting up a local pool on your host machine with Docker."),(0,r.kt)("p",null,"Make sure you read through all steps carefully to ensure your Box environment is up and running properly.  In particular, pay close attention to the instructions on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/blob/main/apps/cluster/README.md#getting-box-multiaddress--peer-id"},"getting the Box multiaddress / Peer ID")," as you will need that for setting up Fotos."),(0,r.kt)("h3",{id:"fotos-installation"},"Fotos Installation"),(0,r.kt)("p",null,"Download the latest release of Fotos from the ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=land.fx.fotos"},"google play store")," and install it."),(0,r.kt)("h3",{id:"testing-steps"},"Testing Steps"),(0,r.kt)("p",null,"Once you have Fotos and the Box environment properly installed you can proceed with the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/mvp/fotos/setup"},"here")," for instructions on setting up Fotos before moving on to anything else.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/mvp/fotos/backup"},"here")," for instructions on backing up an image from your device to a Box using Fotos.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/mvp/fotos/availability"},"here")," for instructions on verifying that your photos are still available even if one of the Boxes goes does.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/mvp/fotos/sharing"},"here")," for instructions on sharing the image with a friend."))))}h.isMDXComponent=!0}}]);