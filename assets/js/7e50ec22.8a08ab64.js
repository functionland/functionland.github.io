"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6358],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||l;return a?o.createElement(d,r(r({ref:t},u),{},{components:a})):o.createElement(d,r({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3066:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const l={title:"questions",id:"questions"},r="Questions about the MVP",i={unversionedId:"mvp/questions",id:"mvp/questions",title:"questions",description:"New Questions",source:"@site/docs/mvp/questions.md",sourceDirName:"mvp",slug:"/mvp/questions",permalink:"/mvp/questions",tags:[],version:"current",frontMatter:{title:"questions",id:"questions"}},p=[{value:"New Questions",id:"new-questions",children:[],level:2},{value:"Local Pools",id:"local-pools",children:[{value:"Storage",id:"storage",children:[],level:3},{value:"Computation",id:"computation",children:[],level:3}],level:2},{value:"Administration",id:"administration",children:[],level:2},{value:"$FULA Account",id:"fula-account",children:[],level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"questions-about-the-mvp"},"Questions about the MVP"),(0,n.kt)("h2",{id:"new-questions"},"New Questions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"who has control over my pinset?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"only I can delete them?"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"what should happen if someone gets access to my phone?"))),(0,n.kt)("h2",{id:"local-pools"},"Local Pools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"local pools"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"public pools = anyone can join?"),(0,n.kt)("li",{parentName:"ul"},"private pools = you must have invite or approval from a pool admin?"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"global pools = ?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"is there a name for a pool of Boxes that I own?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"is the availability story for pools of Boxes that I own only or for local pools (private + public)?"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"what happens if everyone in my pool pulls the plug all of a sudden?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"can I choose to join as either a consumer or a producer or do I have to join as both a consumer and a producer?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"what happens when I run out of $FULA tokens to:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the data stored by peers in my local pool?"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"does any member of a pool have administrator privileges?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"what are the tradeoffs we are making that Filecoin is not making?"))),(0,n.kt)("h3",{id:"storage"},"Storage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"when I join a pool should I be able to tell it how much storage I want to allocate to the pool?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"what happens if I offer 1 Tb and there is no demand?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"whitelisting"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"where will I whitelist photos and other files/data to be included in a pool?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"is there a separate whitelist for each pool I am a member of?")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"member of multiple pools?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"should I select what photos to back up in each pool I join?"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"if I am the only member of my local pool, will I have to pay myself?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"how does proof of resource work and what is difference between this and proof of space-time / proof of replication?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"how will I know that my data is safely stored and that I won't have to worry about data loss?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"confirmation = if database is replicated then only protection is encryption (no gatekeeping process)?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"sharing"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"in order to share a photo with someone I need to give them access - does that mean they need to be a member of my pool or are the concepts decoupled?")))),(0,n.kt)("h3",{id:"computation"},"Computation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"how will I know that my data is being shared with peers to be computed on in a way that preserves my privacy?")),(0,n.kt)("h2",{id:"administration"},"Administration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"if I lose or forget my account password then how will I recover it?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"email recovery means no zero knowledge?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"other options"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"two factor auth?")))))),(0,n.kt)("h2",{id:"fula-account"},"$FULA Account"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"should I know what my $FULA is being spent on?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"eg/ in the last month I spent 50 $FULA on Fotos and 200 on 'Pool A' and 150 on 'Pool B'?"))),(0,n.kt)("li",{parentName:"ul"},"should there also be a way to tell my balance and earnings over time?"),(0,n.kt)("li",{parentName:"ul"},"should I give approval before $FULA is spent?")))}u.isMDXComponent=!0}}]);