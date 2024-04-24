"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=i,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||a;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5321:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const a={title:"Contribution Tutorial",id:"contribution-tutorial"},r=void 0,l={unversionedId:"introduction/contribute/contribution-tutorial",id:"introduction/contribute/contribution-tutorial",title:"Contribution Tutorial",description:'This style guide is adapted from IPFS\'s "Contribution Tutorial" article.',source:"@site/docs/introduction/contribute/contribution-tutorial.md",sourceDirName:"introduction/contribute",slug:"/introduction/contribute/contribution-tutorial",permalink:"/introduction/contribute/contribution-tutorial",tags:[],version:"current",frontMatter:{title:"Contribution Tutorial",id:"contribution-tutorial"},sidebar:"tutorialSidebar",previous:{title:"Writing Guide",permalink:"/introduction/contribute/writing"},next:{title:"Getting Started with FxBlox",permalink:"/getting-started-testnet"}},s=[{value:"Finding an issue",id:"finding-an-issue",children:[],level:2},{value:"Discussing the issue",id:"discussing-the-issue",children:[],level:2},{value:"Creating a fix",id:"creating-a-fix",children:[],level:2},{value:"Create a pull request",id:"create-a-pull-request",children:[],level:2},{value:"Waiting for a review",id:"waiting-for-a-review",children:[],level:2},{value:"Merge your fix",id:"merge-your-fix",children:[],level:2},{value:"Finishing up",id:"finishing-up",children:[],level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This style guide is adapted from IPFS's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/community/contribute/contribution-tutorial/"},'"',(0,i.kt)("strong",{parentName:"a"},"Contribution Tutorial"),'"')," article."),(0,i.kt)("p",null,"While the ",(0,i.kt)("a",{parentName:"p",href:"/introduction/contribute/styling"},"grammar, formatting, and style")," and the ",(0,i.kt)("a",{parentName:"p",href:"/introduction/contribute/writing"},"writing guide")," can both help you write good content for the Fula docs, they don't delve into ",(0,i.kt)("em",{parentName:"p"},"how")," you can submit your content changes. This guide will walk you through finding an issue, fixing it, and then submitting your fix to ",(0,i.kt)("inlineCode",{parentName:"p"},"functionland/docs"),"."),(0,i.kt)("p",null,"There are plenty of small-sized issues around IPFS documentation that make for easy, helpful contributions to the Fula net project. Here, we'll walk through:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Finding an issue."),(0,i.kt)("li",{parentName:"ol"},"Discussing the issue."),(0,i.kt)("li",{parentName:"ol"},"Creating a fix."),(0,i.kt)("li",{parentName:"ol"},"Submitting a ",(0,i.kt)("em",{parentName:"li"},"pull request"),"."),(0,i.kt)("li",{parentName:"ol"},"Waiting for a review."),(0,i.kt)("li",{parentName:"ol"},"Merging your fix.")),(0,i.kt)("p",null,"This may look like a lot of steps for a small issue fix, but they're all necessary to make sure we keep the docs in this project up to standard. Plus, you're not on your own \u2014 half these steps can be completed by Fula staff!"),(0,i.kt)("h2",{id:"finding-an-issue"},"Finding an issue"),(0,i.kt)("p",null,"The Fula net project is hosted in GitHub. There's a bunch of reasons for this, one of them being that GitHub comes with an issue tracker, which enables the core Fula team to field problems from the community. All community issues can read the docs, find issues, and raise issues in the docs repository (called a ",(0,i.kt)("em",{parentName:"p"},"repo")," for short)."),(0,i.kt)("p",null,"All issues involving the Fula docs themselves can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/functionland/docs"},(0,i.kt)("inlineCode",{parentName:"a"},"functionland/docs")," repo")," under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/functionland/docs/issues/"},(0,i.kt)("strong",{parentName:"a"},"Issues")," tab"),". Here you can see all the issues that are currently open. We try to tag each issue with relevant descriptive tags. Tags like ",(0,i.kt)("em",{parentName:"p"},"difficulty")," and ",(0,i.kt)("em",{parentName:"p"},"size")," can give a sense of the amount of effort a task will take to complete."),(0,i.kt)("p",null,"Let's jump into finding an issue."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the Functionland repository at ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs"},"github.com/functionland/docs"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Issues")," tab."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Label")," dropdown and select the ",(0,i.kt)("strong",{parentName:"li"},"help wanted")," tag."),(0,i.kt)("li",{parentName:"ol"},"Select an issue that interests you.")),(0,i.kt)("p",null,"Make a note of the issue number and keep it handy for later."),(0,i.kt)("h2",{id:"discussing-the-issue"},"Discussing the issue"),(0,i.kt)("p",null,"As you can probably tell from the available tags, there are lots of different types of issues. Some are tiny one-sentence changes, and others are sizable projects that require a rewrite of several pages. For small issues, there may be very little or no discussion. There's no need to waste everybody's time talking about changing a broken link. But more significant issues will likely need input from different members of the project."),(0,i.kt)("p",null,"When adding to a discussion, remember that it may take days or weeks to conclude an issue. With this in mind, try to include all the relevant information anyone might need within each message."),(0,i.kt)("p",null,"Let's add to the discussion of the issue you've chosen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Read through all the previous posts to get up to speed on the issue."),(0,i.kt)("li",{parentName:"ol"},"Add any comments you feel are necessary."),(0,i.kt)("li",{parentName:"ol"},"If you still want to tackle this issue, post a message saying that you'd like to take ownership of it.")),(0,i.kt)("p",null,"Once you've claimed ownership of an issue, a member of the core Fula team will assign you to it. If this is a large issue, someone from the Fula team will check in with you from time to time and make sure you've got everything you need to progress with the issue."),(0,i.kt)("h2",{id:"creating-a-fix"},"Creating a fix"),(0,i.kt)("p",null,"If you've got this far, then you should have an issue in hand and a basic idea of how to fix it. Next up is implementing your fix! The process goes something like this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("em",{parentName:"li"},"fork"),"."),(0,i.kt)("li",{parentName:"ol"},"Make changes locally on your machine."),(0,i.kt)("li",{parentName:"ol"},"Push your changes.")),(0,i.kt)("p",null,"If you're not familiar with Git and GitHub, then the phrase ",(0,i.kt)("em",{parentName:"p"},"fork")," might not mean much to you. Essentially, a ",(0,i.kt)("em",{parentName:"p"},"fork")," of a project is your own personal copy of that project. You can make as many changes to this copy whenever you want because you own it. The idea is that you can modify this personal copy and send your changes to the project team, who can then review all the work you've done."),(0,i.kt)("p",null,"The process for creating a fork of an existing piece of Fula documentation is incredibly simple:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"functionland/docs")," repository in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/functionland/docs"},"GitHub"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Fork")," to create a copy of the project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone your copy of the project down to your local machine:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/YOUR_USERNAME/docs.git\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make your changes locally.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once all your changes are complete, make sure to push everything back to GitHub:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "Fixed a broken URL, issue #123."\ngit push\n')))),(0,i.kt)("p",null,"When adding a commit comment that actively fixes an issue within the project, try to summarize the fix in a few words and quote the issue number. Following this convention makes it easier for other people to quickly see what you've done."),(0,i.kt)("h2",{id:"create-a-pull-request"},"Create a pull request"),(0,i.kt)("p",null,"Once you're done making commits and are ready to get a core team member's review of your work, it's time to create a pull request."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"functionland/docs")," repository on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs"},"GitHub"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Pull requests")," tab."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"New pull request"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"compare across forks")," and select your repository from the ",(0,i.kt)("strong",{parentName:"li"},"head repository")," dropdown."),(0,i.kt)("li",{parentName:"ol"},"Leave a comment to expand upon your changes."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create pull request"),".")),(0,i.kt)("p",null,"GitHub will check if your changes create any merge conflicts with the branch you are trying to merge into."),(0,i.kt)("h2",{id:"waiting-for-a-review"},"Waiting for a review"),(0,i.kt)("p",null,"Before your changes can be merged into the project, they have to pass a review. ",(0,i.kt)("inlineCode",{parentName:"p"},"functionland/docs")," has automatic tests that run against a pull request. These tests must pass ",(0,i.kt)("em",{parentName:"p"},"before")," the changes can be merged into the project. If they fail, you will see a red x on the last commit. If you have email preferences turned on, you would also receive an email of the result."),(0,i.kt)("p",null,"Depending on the size of the pull request, this could take anywhere from a few minutes to a few days to review everything. Depending on the complexity of the pull request, there may be further discussion regarding your changes. Keep returning to GitHub and checking your ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/notifications"},"notifications page")," to make sure you don't miss anything."),(0,i.kt)("h2",{id:"merge-your-fix"},"Merge your fix"),(0,i.kt)("p",null,"Once your pull request has been approved, it's ready to be merged into the project! Only project members with the correct rights can merge changes into the project, but you'll be notified as soon as the merge is complete."),(0,i.kt)("h2",{id:"finishing-up"},"Finishing up"),(0,i.kt)("p",null,"So there you have it! You've successfully completed your first contribution to the Fula documentation. We're always on the lookout for great writers and educators to help us improve the Fula docs and make the internet better for everyone, so keep up the good work!"))}c.isMDXComponent=!0}}]);