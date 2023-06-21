"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3780,2369],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8421:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(5681),c=["components"],l={title:"Client Instance",id:"client-instance"},p="Client Instance",s={unversionedId:"api/client-instance",id:"api/client-instance",title:"Client Instance",description:"Fula client package provides a method createClient that returns client instance. You can use this object to call File and Data APIs.",source:"@site/docs/api/client-instance.md",sourceDirName:"api",slug:"/api/client-instance",permalink:"/api/client-instance",tags:[],version:"current",frontMatter:{title:"Client Instance",id:"client-instance"},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/reference-api"},next:{title:"Graph API",permalink:"/api/graph-api"}},u=[{value:"Create a new client instance",id:"create-a-new-client-instance",children:[],level:2},{value:"Connect to Box",id:"connect-to-box",children:[],level:2},{value:"Close a connection",id:"close-a-connection",children:[],level:2},{value:"Access to Libp2p node",id:"access-to-libp2p-node",children:[],level:2}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"client-instance"},"Client Instance"),(0,o.kt)("p",null,"Fula client package provides a method ",(0,o.kt)("inlineCode",{parentName:"p"},"createClient")," that returns client instance. You can use this object to call File and Data APIs."),(0,o.kt)("p",null,"The client instance is basically a wrapper around a libp2p node. It abstracts away the protocol layer and makes it easier to communicate over libp2p with Fula's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/tree/0766d2e4ab56b423a00f2c28a132ea1a8f871164/protocols/file"},"File")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/tree/0766d2e4ab56b423a00f2c28a132ea1a8f871164/protocols/graph"},"Graph")," protocols."),(0,o.kt)("p",null,"In addition to File and Data APIs, the client instance provides access to the underlying libp2p node. It also maintains the connection between client and the Box and provides a reconnecting mechanism."),(0,o.kt)("p",null,"You can find below basic methods for working with the client instance."),(0,o.kt)("h2",{id:"create-a-new-client-instance"},"Create a new client instance"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createClient")," method to create a new client instance."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"async createClient(config?, pKey=undefined)")),(0,o.kt)("p",null,"Arguments are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config?"),": The configuration object that gets passed directly to the underlying libp2p node. See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md"},"here")," for more information"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pkey"),": The private key used for securing the connection. Fula client is currently using ",(0,o.kt)("inlineCode",{parentName:"li"},"NOISE")," as the connection encryptor, if you want to change that in ",(0,o.kt)("inlineCode",{parentName:"li"},"config"),", make sure you provide appropriate arguments.")),(0,o.kt)("p",null,"The method resolves to a Fula instance."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {createClient} from '@functionland/fula'\nconst client = await createClient()\n")),(0,o.kt)("h2",{id:"connect-to-box"},"Connect to Box"),(0,o.kt)("p",null,"In order to use the different APIs provided by the Fula client, you must connect a client instance to a Box app using the ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," method."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"async connect(serverId)")),(0,o.kt)("p",null,"Arguments are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"serverId"),": The base58 PeerID string provided by Box app or any other libp2p node supporting File and Graph protocols.")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const serverId = '12D3KooWBFCDpMyEmyAAAAY6PiQw2vaM35ChTZ8ZmVUe8GFRMUrt' // copied from box app\nawait client.connect(serverId)\n")),(0,o.kt)("h2",{id:"close-a-connection"},"Close a connection"),(0,o.kt)("p",null,"You can disconnect an already connected client instance using the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," method. This will close the connection and stops the libp2p node."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"async close()")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await client.close()\n")),(0,o.kt)("h2",{id:"access-to-libp2p-node"},"Access to Libp2p node"),(0,o.kt)("p",null,"As mentioned earlier, the Fula client is a wrapper around a libp2p node abstracting away the protocol layer and providing APIs to communicate over File and Graph protocols. If you want to do more specific configurations, access the libp2p cache, or access other interfaces, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"getNode")," method."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getNode()")),(0,o.kt)("p",null,"This method returns a Libp2p node."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const libp2pNode = client.getNode()\nconsole.log(libp2pNode.multiaddrs)\n// [ <Multiaddr 047f00000106f9ba - /ip4/127.0.0.1/tcp/63930> ]\n")),(0,o.kt)(i.default,{mdxType:"WorkInProgress"}))}m.isMDXComponent=!0},5681:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],c={},l=void 0,p={unversionedId:"components/WorkInProgress",id:"components/WorkInProgress",title:"WorkInProgress",description:"Please note: these instructions remain a work in progress as we continue to evolve, refine and perfect the Fula API.  Make sure to check back soon for more details!",source:"@site/docs/components/WorkInProgress.mdx",sourceDirName:"components",slug:"/components/WorkInProgress",permalink:"/components/WorkInProgress",tags:[],version:"current",frontMatter:{}},s=[],u={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP Alert")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note: these instructions remain a work in progress as we continue to evolve, refine and perfect the Fula API.  Make sure to check back soon for more details!"))))}d.isMDXComponent=!0}}]);