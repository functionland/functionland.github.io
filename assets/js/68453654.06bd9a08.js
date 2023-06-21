"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2746],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3392:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Document Syncing",p={unversionedId:"RFCs/document-syncing",id:"RFCs/document-syncing",title:"Document Syncing",description:"- Start Date: 2022-03-24",source:"@site/docs/RFCs/document-syncing.md",sourceDirName:"RFCs",slug:"/RFCs/document-syncing",permalink:"/RFCs/document-syncing",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Private Network",permalink:"/RFCs/private-network"},next:{title:"Personal Data Reserve",permalink:"/RFCs/personal-data-reserve"}},c=[{value:"Summary",id:"summary",children:[],level:2},{value:"Use Case",id:"use-case",children:[],level:2},{value:"Out of Scope",id:"out-of-scope",children:[],level:2},{value:"Pre-conditions",id:"pre-conditions",children:[],level:2},{value:"Design Considerations",id:"design-considerations",children:[{value:"IPFS-Cluster",id:"ipfs-cluster",children:[],level:3},{value:"Conflict Resolution",id:"conflict-resolution",children:[],level:3}],level:2},{value:"Design",id:"design",children:[{value:"Box System Architecture",id:"box-system-architecture",children:[],level:3},{value:"System Properties",id:"system-properties",children:[],level:3},{value:"Correspondant",id:"correspondant",children:[{value:"Correspondant Flow State",id:"correspondant-flow-state",children:[],level:4},{value:"Newsroom Flow State",id:"newsroom-flow-state",children:[],level:4}],level:3},{value:"Docker-Compose",id:"docker-compose",children:[],level:3}],level:2},{value:"Future",id:"future",children:[{value:"Performance Optimizations",id:"performance-optimizations",children:[],level:3},{value:"Connectivity Research",id:"connectivity-research",children:[],level:3},{value:"Possibilities",id:"possibilities",children:[{value:"Data types",id:"data-types",children:[],level:4},{value:"Person-person Collaboration",id:"person-person-collaboration",children:[],level:4}],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"document-syncing"},"Document Syncing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start Date: 2022-03-24"),(0,o.kt)("li",{parentName:"ul"},"RFC PR: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs/pull/61"},"functionland/docs/pull/61")),(0,o.kt)("li",{parentName:"ul"},"Functionland Issue: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs/issues/58"},"functionland/docs/issues/58")),(0,o.kt)("li",{parentName:"ul"},"Status: Draft"),(0,o.kt)("li",{parentName:"ul"},"Authors: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gitaaron"},"Aaron"),","),(0,o.kt)("li",{parentName:"ul"},"Reviewers: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/farhoud"},"Farhoud"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ehsan6sha"},"Ehsan"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/functionland/people/masih"},"Masih"))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This RFC proposes usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"IPFS-Cluster")," in conjunction with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Correspondant")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Newsroom")," component to sync files and folders across several devices."),(0,o.kt)("h2",{id:"use-case"},"Use Case"),(0,o.kt)("p",null,"A Box owner would like to sync the meeting notes on their desktop with other meeting participants in real time."),(0,o.kt)("p",null,"They run a command and provide instructions for other participants to download the document."),(0,o.kt)("p",null,"Each participant is able to download and edit the meeting notes and see updates from others in real time."),(0,o.kt)("h2",{id:"out-of-scope"},"Out of Scope"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"high-frequency updates to documents which might be encountered with multi-tenancy or recording streaming video")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"data persisted by orbit db or any other dbs"))),(0,o.kt)("h2",{id:"pre-conditions"},"Pre-conditions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"each participant's device in the meeting is accessible from the others"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"EITHER\n\n* they have a public static IP \n\nOR\n\n* NAT hole punching works AND there are relays available to help establish connectivity\n")))),(0,o.kt)("h2",{id:"design-considerations"},"Design Considerations"),(0,o.kt)("h3",{id:"ipfs-cluster"},"IPFS-Cluster"),(0,o.kt)("p",null,"A properly configured ipfs-cluster provides most of the properties required to implement this use case including."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a private network of trusted peers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"conflict resolution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"notifying peers of changes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"efficient transmission of data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"providing peer pinning status"))),(0,o.kt)("h3",{id:"conflict-resolution"},"Conflict Resolution"),(0,o.kt)("p",null,"IPFS Cluster provides ",(0,o.kt)("a",{parentName:"p",href:"https://cluster.ipfs.io/documentation/guides/consensus/"},"two choices")," for conflict resolution."),(0,o.kt)("p",null,"CRDT will be used because:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"it utilizes 'GossipSub' which will probably be useful for future use cases related to replication.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"it does not require > 50% of peers to be online in order to operate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"'follower' peers might be used in the future to provide 'read-only' access")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"'trusted peers' might be used in the future to provide access control")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"peers will probably come and go frequently (ie/ someone needs to drop from the meeting)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"since we have full control over the document store, we can ensure the DAG is shallow (based on limitations of number of files in a directory)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"less stable / tested conflict resolution can be tolerated for this use case"))),(0,o.kt)("h2",{id:"design"},"Design"),(0,o.kt)("h3",{id:"box-system-architecture"},"Box System Architecture"),(0,o.kt)("p",null,"The following diagram illustrates how  various components on the Box will work together to implement data syncing."),(0,o.kt)("p",null,"There are two new components introduced:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"correspondant")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"newsroom"))),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Box System Architecture",src:"https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/BOX-data-sync-architecture.png"}),(0,o.kt)("p",{align:"center"},"Box System Architecture")),(0,o.kt)("h3",{id:"system-properties"},"System Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"peers should not enter a recursive loop with each other by notifying authors of updates that originated from them")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"each program should be reentrant in the sense that they can be aborted at any point during execution then restarted"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the shared state will be updated to reflect the latest changes to the file system")))),(0,o.kt)("h3",{id:"correspondant"},"Correspondant"),(0,o.kt)("p",null,"The role of the correspondant is to ensure IPFS-Cluster is pinning the latest files created and updated on the author's file system."),(0,o.kt)("p",null,"When the root CID of the file system changes it should also unpin the old one so that the garbage collector can remove deleted files."),(0,o.kt)("p",null,"A watch (with debounce) of the filesystem is used instead of an interval timer for the event loop since it will enable changes to be corresponded immediately without consuming resources unnecessarily."),(0,o.kt)("h4",{id:"correspondant-flow-state"},"Correspondant Flow State"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Correspondant Flow Chart Implementation",src:"https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/data-sync-correspondant.png"}),(0,o.kt)("p",{align:"center"},"Correspondant Flow Chart Implementation")),(0,o.kt)("h4",{id:"newsroom-flow-state"},"Newsroom Flow State"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Newsroom FLow Chart Implementation",src:"https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/diagrams/data-sync-newsroom.png"}),(0,o.kt)("p",{align:"center"},"Newsroom FLow Chart Implementation")),(0,o.kt)("h3",{id:"docker-compose"},"Docker-Compose"),(0,o.kt)("p",null,"In order to access ipfs-cluster-ctl and ipfs from the command line, the correspondant and newsroom will be bundled in the same image as ipfs-cluster-ctl and IPFS."),(0,o.kt)("p",null,"A separate service will be defined for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"newsroom")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"correspondant")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"IPFS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ipfs-cluster-ctl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ipfs-cluster-service"))),(0,o.kt)("p",null,"The docker setup for the IPFS components can be followed from the  ",(0,o.kt)("a",{parentName:"p",href:"http://cluster.ipfs.io.ipns.localhost:8080/documentation/deployment/automations/#docker"},"IPFS-Cluster documentation"),"."),(0,o.kt)("p",null,"The IPFS components should be listed as a dependency of the correspondant and newsroom."),(0,o.kt)("h2",{id:"future"},"Future"),(0,o.kt)("h3",{id:"performance-optimizations"},"Performance Optimizations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a scheduler might be used to prioritize fula-api latency over syncing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"since the correspondant knows what file/folder changed, it might rebuild the DAG bottom up instead of top down")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"further research needs to be put into how ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfs get")," works to see if entire contents of the DAG are copied to ",(0,o.kt)("inlineCode",{parentName:"p"},"/fx")," or only the parts that change"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"if the former is true, since we know the old DAG, we could walk them both ourselves skipping the CIDs that are the same")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"this may be necessary for handling removal of files anyway"))))),(0,o.kt)("h3",{id:"connectivity-research"},"Connectivity Research"),(0,o.kt)("p",null,"The main goal is to remove the connectivity pre-condition from this use case so it will work from any device over the vast majority of network topologies."),(0,o.kt)("p",null,"The following issues are related to this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/docs/issues/28"},"research: fula-client overcoming NAT to reach fula-api"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/docs/issues/72"},"research: public/private relays availability")))),(0,o.kt)("h3",{id:"possibilities"},"Possibilities"),(0,o.kt)("h4",{id:"data-types"},"Data types"),(0,o.kt)("p",null,"Although this use case is focused on syncing plaintext (eg/ UTF-8 encoded) files it ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/docs/issues/71"},"could also")," cover other documents that ",(0,o.kt)("inlineCode",{parentName:"p"},"IPFS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"IPFS-Cluster")," handles well out of the box such as photos and video."),(0,o.kt)("h4",{id:"person-person-collaboration"},"Person-person Collaboration"),(0,o.kt)("p",null,"With the addition of an authentication and ACL layer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"two different Box owners could share a document with each other and perform real-time edits on it.  They might add a third person as reviewer with read-only access")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a group of people might create a shared album where certain members have the ability to upload photos and others are only allowed to view them (or vice versa)"))))}d.isMDXComponent=!0}}]);