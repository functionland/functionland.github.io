"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[930],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3763:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="FULA Security Layer",c={unversionedId:"RFCs/fula-sec",id:"RFCs/fula-sec",title:"FULA Security Layer",description:"- Start Date: 2022-02-27",source:"@site/docs/RFCs/fula-sec.md",sourceDirName:"RFCs",slug:"/RFCs/fula-sec",permalink:"/RFCs/fula-sec",tags:[],version:"current",frontMatter:{}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"What Security Protocols Implemented",id:"what-security-protocols-implemented",children:[],level:2},{value:"Unresolved questions",id:"unresolved-questions",children:[],level:2},{value:"Future possibilities",id:"future-possibilities",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fula-security-layer"},"FULA Security Layer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start Date: 2022-02-27"),(0,i.kt)("li",{parentName:"ul"},"RFC PR: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs/pull/74"},"functionland/docs/pull/74")),(0,i.kt)("li",{parentName:"ul"},"Functionland Issue: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs/issues/65"},"functionland/docs/issues/65")),(0,i.kt)("li",{parentName:"ul"},"Status: Draft"),(0,i.kt)("li",{parentName:"ul"},"Authors: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ruffiano89"},"Jamshid")),(0,i.kt)("li",{parentName:"ul"},"Reviewers: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/orgs/functionland/people/masih"},"Masih"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gitaaron"},"Aaron"))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Authentication and encrypted data storage are the main structural elements for decentralized networks and Web3 applications. By default, IPFS does not encrypt the data persisted to it.  This means that if someone has a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/content-addressing/"},"CID"),", they can access the data without the author's permission.  The fula-sec layer aims to solve this, so that data owners can have full control over how their data is accessed."),(0,i.kt)("p",null,"The fula-sec layer is broken down into the following fundamental building blocks:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/RFCs/fula-sec/did"},"Decentralized Identity (DID)")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/RFCs/fula-sec/encryption"},"Encryption")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Box Authentication")),(0,i.kt)("h2",{id:"what-security-protocols-implemented"},"What Security Protocols Implemented"),(0,i.kt)("p",null,"We aim not only to encrypt the data, but also to verify its valid data and use a key exchange mechanism. The key exchange mechanism remains the DID (Decentrilized Identity) mechanism. In the table below, you can see which algorithm was used for what purpose."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Keyword"),(0,i.kt)("th",{parentName:"tr",align:null},"Objective"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ed25519"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Used to obtain user Identity")),(0,i.kt)("td",{parentName:"tr",align:null},"Edwards-curve Digital Signature Algorithm(EdDSA)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AES"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Used by the client side to encrypt each content. The keys are shared only by authorized audience. The keys are not given to audience in a straightforward manner, of course.")),(0,i.kt)("td",{parentName:"tr",align:null},"Advanced Encryption Standard Algorithm (AES)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JWS"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JWS includes the Signing option. It has two method sign the payload and verify a signed data. ")),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON Web Signature (abbreviated JWS) is an IETF-proposed standard (RFC 7515) for signing arbitrary data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JWE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"An encrypted JWE object for one or multiple DIDs.")),(0,i.kt)("td",{parentName:"tr",align:null},"JSON Web Encryption (JWE) is an IETF standard providing a standardised syntax for the exchange of encrypted data, based on JSON and Base64.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RSA"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RSA involves a public key and a private key. The public key can be known by everyone and is used for encrypting messages. The intention is that messages encrypted with the public key can only be decrypted by using the private key.")),(0,i.kt)("td",{parentName:"tr",align:null},"Rivest\u2013Shamir\u2013Adleman.")))),(0,i.kt)("h2",{id:"unresolved-questions"},"Unresolved questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Content Access Revoke"),(0,i.kt)("li",{parentName:"ul"},"Storing DID document in L3 blockchain")),(0,i.kt)("h2",{id:"future-possibilities"},"Future possibilities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A box owner can associate multiple peer addresses with a DID.")))}p.isMDXComponent=!0}}]);