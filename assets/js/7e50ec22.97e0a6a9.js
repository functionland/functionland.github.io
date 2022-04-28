"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[358],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||r;return a?o.createElement(d,l(l({ref:t},s),{},{components:a})):o.createElement(d,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3066:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),l=["components"],i={title:"questions",id:"questions"},p="Questions about the MVP",u={unversionedId:"mvp/questions",id:"mvp/questions",title:"questions",description:"Local Pools",source:"@site/docs/mvp/questions.md",sourceDirName:"mvp",slug:"/mvp/questions",permalink:"/mvp/questions",tags:[],version:"current",frontMatter:{title:"questions",id:"questions"}},s=[{value:"Local Pools",id:"local-pools",children:[{value:"Storage",id:"storage",children:[],level:3},{value:"Computation",id:"computation",children:[],level:3}],level:2},{value:"Administration",id:"administration",children:[],level:2},{value:"$FULA Account",id:"fula-account",children:[],level:2}],m={toc:s};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"questions-about-the-mvp"},"Questions about the MVP"),(0,r.kt)("h2",{id:"local-pools"},"Local Pools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"local pools"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"public pools = anyone can join?"),(0,r.kt)("li",{parentName:"ul"},"private pools = you must have invite or approval from a pool admin?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"can I choose to join as either a consumer or a producer or do I have to join as both a consumer and a producer?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"what happens when I run out of $FULA tokens to:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the data stored by peers in my local pool?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"what is purpose of the swarm key in a public pool?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"does any member of a pool have administrator privileges?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"for our PoR algo to work on the rPi we are going to have to consume a lot less resources"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"so what are the tradeoffs we are making that Fielcoin is not making?")))),(0,r.kt)("h3",{id:"storage"},"Storage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is there a name for a pool of Boxes that I own?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"is the availability story for pools of Boxes that I own or for local pools (private + public)?")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"when I join a pool should I be able to tell it how much storage I want to allocate to the pool?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"what happens if I offer 1 Tb and there is no demand?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"should we offer the ability to share a photo and join a private pool?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"where will I whitelist photos and other files/data to be included in a pool?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"is there a separate whitelist for each pool I am a member of?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if I am the only member of my local pool, will I have to pay myself?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"should I select what photos to back up in each pool I join or should ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"how does proof of resource work and what is difference between this and proof of space-time?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"how will I know that my data is safely stored and that I won't have to worry about data loss?"))),(0,r.kt)("h3",{id:"computation"},"Computation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"how will I know that my data is being shared with peers to be computed on in a way that preserves my privacy?")),(0,r.kt)("h2",{id:"administration"},"Administration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if I lose or forget my account password then how will I recover it?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"email recovery means no zero knowledge?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"other options"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"two factor auth?")))))),(0,r.kt)("h2",{id:"fula-account"},"$FULA Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"should I know what my $FULA is being spent on?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"eg/ in the last month I spent 50 $FULA on Fotos and 200 on 'Pool A' and 150 on 'Pool B'?"))),(0,r.kt)("li",{parentName:"ul"},"should there also be a way to tell my balance and earnings over time?"),(0,r.kt)("li",{parentName:"ul"},"should I give approval before $FULA is spent?")))}c.isMDXComponent=!0}}]);