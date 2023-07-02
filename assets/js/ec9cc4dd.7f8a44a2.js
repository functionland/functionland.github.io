"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1973],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9201:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Requests for comments (RFCs)"},s="Request for comments",i={unversionedId:"RFCs/rfc-process",id:"RFCs/rfc-process",title:"Requests for comments (RFCs)",description:"What is the RFC process?",source:"@site/docs/RFCs/rfc-process.md",sourceDirName:"RFCs",slug:"/RFCs/rfc-process",permalink:"/RFCs/rfc-process",tags:[],version:"current",frontMatter:{title:"Requests for comments (RFCs)"},sidebar:"tutorialSidebar",previous:{title:"Whitepaper",permalink:"/whitepaper/"},next:{title:"FULA Security Layer",permalink:"/RFCs/fula-sec"}},l=[{value:"What is the RFC process?",id:"what-is-the-rfc-process",children:[],level:2},{value:"When to follow this process",id:"when-to-follow-this-process",children:[],level:2},{value:"About the process",id:"about-the-process",children:[],level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"request-for-comments"},"Request for comments"),(0,o.kt)("h2",{id:"what-is-the-rfc-process"},"What is the RFC process?"),(0,o.kt)("p",null,"Many changes, including bug fixes and documentation improvements, can be implemented and reviewed via the normal GitHub pull request workflow."),(0,o.kt)("p",null,'However, some changes though are "substantial", and we ask that these be put through a bit of design process and produce a consensus among community members.'),(0,o.kt)("p",null,'The "RFC" (Request For Comments) process is intended to provide a consistent, controlled path for new features to enter the project, so that all stakeholders and contributors can be confident about the direction the project is evolving in.'),(0,o.kt)("h2",{id:"when-to-follow-this-process"},"When to follow this process"),(0,o.kt)("p",null,'You should consider using this process if you intend to make "substantial" changes in any Functionland project or the documentation. Here are some examples of things that would benefit from an RFC:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A new feature that requires rethinking of something that has already been developed and shipped."),(0,o.kt)("li",{parentName:"ul"},"A change in the documentation structure in order to enhance readers experience."),(0,o.kt)("li",{parentName:"ul"},"The introduction of a new idea, concept or convention that is currently not present in Functionland.")),(0,o.kt)("p",null,"The RFC process will help you attract more attention to your proposal, as well as make sure that everybody gets a chance to participate in shaping and polishing your new idea."),(0,o.kt)("h2",{id:"about-the-process"},"About the process"),(0,o.kt)("p",null,"In short, to get a major feature added to any of Functionland's projects, you would first get the RFC merged into the RFC repo of that project as a markdown file.  At that point the RFC is \u2018active\u2019 and may be implemented with the goal of eventual inclusion."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fork the project repository"),(0,o.kt)("li",{parentName:"ul"},"Copy ",(0,o.kt)("inlineCode",{parentName:"li"},"rfcs/template.md")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"rfcs/0000-my-feature/README.md")," (where my-feature is descriptive, don't ask for an RFC number yet)"),(0,o.kt)("li",{parentName:"ul"},"Put any accompanying resources (pictures, etc.) in rfcs/0000-my-feature/.  You can refer to these in the text."),(0,o.kt)("li",{parentName:"ul"},"Fill in the RFC. Details matter!  Remember: RFCs that lack convincing motivation, fail to demonstrate understanding of the impact of the design, or are disingenuous about the drawbacks or alternatives tend to be poorly received."),(0,o.kt)("li",{parentName:"ul"},"Submit a pull request. As a pull request, the RFC will receive design feedback from the broader community.  The author should be prepared to revise it in response to their feedback."),(0,o.kt)("li",{parentName:"ul"},"Build consensus and integrate feedback. RFCs that have broad support are much more likely to make progress than those that don't receive any comments."),(0,o.kt)("li",{parentName:"ul"},"The community will discuss the RFC pull request in the comment thread of the pull request itself as much as possible.  Offline discussion will be summarized on the pull request comment thread."),(0,o.kt)("li",{parentName:"ul"},"RFCs rarely go through this process unchanged, especially as members of the broader community identify alternatives and drawbacks. You can make edits, big and small, to the RFC to clarify or change the design, but make changes as new commits to the pull request, and leave a comment on the pull request explaining your changes. Specifically, do not squash or rebase commits after they are visible on the pull request."),(0,o.kt)("li",{parentName:"ul"},'At some point, a member will propose a "motion for final comment period" (FCP), along with a disposition for the RFC (merge, close, or postpone).',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For RFCs with lengthy discussion, the motion to FCP is usually preceded by a summary comment that attempts to map the current state of the discussion including major tradeoffs and/or points of disagreement."))),(0,o.kt)("li",{parentName:"ul"},"The FCP lasts ten (10) calendar days, guaranteeing it remains open for at least five (5) business days.  This allows stakeholders the opportunity to submit any final objections before a decision is reached."),(0,o.kt)("li",{parentName:"ul"},"In most cases the FCP period is quiet, and the RFC is either merged or closed. However, sometimes substantial new arguments or ideas are raised, the FCP is canceled, and the RFC returns to development mode.")))}u.isMDXComponent=!0}}]);