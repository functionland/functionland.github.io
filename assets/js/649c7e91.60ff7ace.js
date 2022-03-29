"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[877],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7691:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},p=void 0,s={unversionedId:"RFCs/private-network",id:"RFCs/private-network",title:"private-network",description:"- Feature Name: private-network",source:"@site/docs/RFCs/private-network.md",sourceDirName:"RFCs",slug:"/RFCs/private-network",permalink:"/RFCs/private-network",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Requests for comments (RFCs)",permalink:"/RFCs/rfc-process"},next:{title:"replication",permalink:"/RFCs/replication"}},c=[{value:"Background",id:"background",children:[{value:"Current Network",id:"current-network",children:[{value:"Server",id:"server",children:[],level:4},{value:"Client",id:"client",children:[],level:4}],level:3}],level:2},{value:"Problem Statement",id:"problem-statement",children:[],level:2},{value:"Motivation",id:"motivation",children:[],level:2},{value:"Proposal",id:"proposal",children:[],level:2},{value:"Scope of work",id:"scope-of-work",children:[{value:"Box",id:"box",children:[],level:3},{value:"FULA-Client",id:"fula-client",children:[],level:3}],level:2},{value:"Implementation",id:"implementation",children:[{value:"Box",id:"box-1",children:[],level:3},{value:"FULA-client",id:"fula-client-1",children:[],level:3}],level:2},{value:"Case Study",id:"case-study",children:[],level:2},{value:"Alternative approaches",id:"alternative-approaches",children:[{value:"VPN",id:"vpn",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Feature Name: private-network"),(0,o.kt)("li",{parentName:"ul"},"Start Date: 2022-02-01"),(0,o.kt)("li",{parentName:"ul"},"RFC PR: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs/pull/67"},"https://github.com/functionland/docs/pull/67")),(0,o.kt)("li",{parentName:"ul"},"Functionland Issue: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs/issues/63"},"https://github.com/functionland/docs/issues/63"))),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"We are using IPFS as our file system. But IPFS is built to use for public data, and it does not support ACL,\nSo we need to find a way to keep users safe until our security layer becomes mature. And also ipfs-cluster ",(0,o.kt)("a",{parentName:"p",href:"https://cluster.ipfs.io/documentation/guides/security/#ports-overview"},"docs")," recommended to have a secret."),(0,o.kt)("h3",{id:"current-network"},"Current Network"),(0,o.kt)("p",null,"Our current network topology is too simple, its only base on webrtc-start and peer discovery is disabled."),(0,o.kt)("h4",{id:"server"},"Server"),(0,o.kt)("p",null,"Node with roll of server is a js-libp2p node with our protocol's and server side implementations (use js-ipfs as fs) that listen on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/blob/main/libraries/fula-client/src/config.ts"},"webrtc-start"),"."),(0,o.kt)("h4",{id:"client"},"Client"),(0,o.kt)("p",null,"Node with the roll of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/tree/main/libraries/fula-client"},"client")," (phone,webapp) are listening on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/blob/main/libraries/fula-client/src/config.ts"},"webrtc-start")," and when user provide the string peer id (",(0,o.kt)("inlineCode",{parentName:"p"},"B58String"),") of the box with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.fx.land/api/client-instance#connect-to-box"},"connect")," API, the api create multiAddress based on webrtc signaling server add it to libp2p peer store and keep the connection alive with the box.\nalso have to mention inbound connections are blocked."),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"We need to protect users and their data from harms and risks of public networks and also cover the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/docs/issues/58"},"multi box scenario"),".\nThe public network risks are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Anyone on the internet can connect to the box."),(0,o.kt)("li",{parentName:"ul"},"Anyone on the internet that is connected to the box can use bitswap to get data from the box."),(0,o.kt)("li",{parentName:"ul"},"Peer routing and Content discovery can leak what you are doing to the public."),(0,o.kt)("li",{parentName:"ul"},"deficiency in our encryption algorithm or key management can leak all user data to the public."),(0,o.kt)("li",{parentName:"ul"},"clusters running without a secret may discover and connect to the main IPFS network, which is mostly useless for the cluster peers (and for the IPFS network).")),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Isolating users from public networks can help us reduce the scope of work while maintaining the usefulness of our product, and testing our security layer without putting users in harm's way."),(0,o.kt)("h2",{id:"proposal"},"Proposal"),(0,o.kt)("p",null,"We can use built-in libp2p components to create a private network with encrypted communication.\nThe components are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Libp2p built-in private network. It uses a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/libp2p/js-libp2p/tree/master/src/pnet#private-shared-keys"},"private shared key")," for creating an isolated network with encrypted communication.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/libp2p/specs/blob/master/pnet/Private-Networks-PSK-V1.md"},"spec")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/libp2p/js-libp2p/tree/master/src/pnet"},"js-doc")))),(0,o.kt)("li",{parentName:"ul"},"Libp2p bootstrap for bootstrapping the network of boxes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/libp2p/js-libp2p-bootstrap"},"js-doc"))))),(0,o.kt)("p",null,"In this way when a node comes online, Libp2p uses the key and the list of other node's to join the network."),(0,o.kt)("h2",{id:"scope-of-work"},"Scope of work"),(0,o.kt)("h3",{id:"box"},"Box"),(0,o.kt)("p",null,"For box setup users provide an environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"FULA_NET_SECRET")," which they should remember. and provide a list of node as ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")),(0,o.kt)("h3",{id:"fula-client"},"FULA-Client"),(0,o.kt)("p",null,"user calls ",(0,o.kt)("inlineCode",{parentName:"p"},"createClient")," they should also provide the secret they used for setting up the boxes. and when he calls ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," it should pass the list of string peerId's"),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"The box and client already support private-key but need to add test and fixes namings."),(0,o.kt)("h3",{id:"box-1"},"Box"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/blob/main/apps/box/src/config.ts"},"Config")," we should change the name ",(0,o.kt)("inlineCode",{parentName:"p"},"PKEY")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"FULA_NET_SECRET")),(0,o.kt)("p",null,"We need to add ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libp2p/js-libp2p-bootstrap"},(0,o.kt)("inlineCode",{parentName:"a"},"js-libp2p-bootstrap")),"  and\nIn the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/blob/main/apps/box/src/config.ts"},"Config")," we should add to support to load ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," in this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n "nodes": [\n   "/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",\n   "/dnsaddr/bootstrap.libp2p.io/ipfs/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN",\n   "/dnsaddr/bootstrap.libp2p.io/ipfs/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa"\n ]\n}\n')),(0,o.kt)("p",null,"Which will be used for creating ",(0,o.kt)("inlineCode",{parentName:"p"},"js-libp2p-bootstrap")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libp2p/js-libp2p-bootstrap"},"config"),"."),(0,o.kt)("h3",{id:"fula-client-1"},"FULA-client"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/blob/main/libraries/fula-client/src/index.ts"},"fula-client")," We have to change pkey to fulaSecret so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"createClient(config?: Partial<Libp2pOptions & constructorOptions>, pKey = undefined): Promise<Fula>\n")),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"createClient(config?: Partial<Libp2pOptions & constructorOptions>, fulaSecret = undefined): Promise<Fula>\n")),(0,o.kt)("p",null,"and change connect interface to get a list of peerId`s from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"connect: (peerId: string) => Connection\n")),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," connect: (peerId: [string]) => Connection\n")),(0,o.kt)("p",null,"We need to change ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/blob/main/libraries/fula-client/src/connection.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"Connection"))," in the way that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connection ",(0,o.kt)("inlineCode",{parentName:"li"},"Status"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If we connect to at least one box we are ",(0,o.kt)("inlineCode",{parentName:"li"},"Online"),"."),(0,o.kt)("li",{parentName:"ul"},"When we are not connected to any box and try to connect we are at ",(0,o.kt)("inlineCode",{parentName:"li"},"Connecting"),"."),(0,o.kt)("li",{parentName:"ul"},"When connection fails to all the serverPeerIds we Are ",(0,o.kt)("inlineCode",{parentName:"li"},"Offline"),"."))),(0,o.kt)("li",{parentName:"ul"},"Connection should have a list of ",(0,o.kt)("inlineCode",{parentName:"li"},"serverPeerId"),"."),(0,o.kt)("li",{parentName:"ul"},"Connect to all the ",(0,o.kt)("inlineCode",{parentName:"li"},"serverPeerId")," and keep the connection alive.")),(0,o.kt)("h2",{id:"case-study"},"Case Study"),(0,o.kt)("p",null,"For dogfooding of new changes we can use a copy of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/tree/main/examples/react-gallery"},"react-gallery")," and change\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/blob/main/examples/react-gallery/src/components/BoxConfig.jsx"},(0,o.kt)("inlineCode",{parentName:"a"},"BoxConfig")),"\nto get list of comma seperated peerIds and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/blob/main/examples/react-gallery/src/App.js"},(0,o.kt)("inlineCode",{parentName:"a"},"App"))," should change to pass the list of peerId's to fula-client."),(0,o.kt)("p",null,"Note: if example repo would be outside mono-repo we can just use branch for describing every functionality."),(0,o.kt)("h2",{id:"alternative-approaches"},"Alternative approaches"),(0,o.kt)("h3",{id:"vpn"},"VPN"),(0,o.kt)("p",null,"Using VPN for creating the private network."),(0,o.kt)("p",null,"Disadvantage:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It adds another point of failure to the system."),(0,o.kt)("li",{parentName:"ul"},"It is also not that decentralized.")))}d.isMDXComponent=!0}}]);