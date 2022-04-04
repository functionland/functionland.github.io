"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[300],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3530:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Using Fula Samples",id:"using-samples"},p="Using the Fula Samples",u={unversionedId:"getting-started/using-samples",id:"getting-started/using-samples",title:"Using Fula Samples",description:"All the Fula samples can be found in the Fula GitHub repo under examples.",source:"@site/docs/getting-started/using-samples.md",sourceDirName:"getting-started",slug:"/getting-started/using-samples",permalink:"/getting-started/using-samples",tags:[],version:"current",frontMatter:{title:"Using Fula Samples",id:"using-samples"},sidebar:"tutorialSidebar",previous:{title:"Running a Box locally",permalink:"/getting-started/box-setup"},next:{title:"Reference",permalink:"/reference-api"}},s=[{value:"Running the TODO Sample",id:"running-the-todo-sample",children:[],level:2},{value:"Connect to the Box",id:"connect-to-the-box",children:[],level:2},{value:"Editing the Sample",id:"editing-the-sample",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-the-fula-samples"},"Using the Fula Samples"),(0,a.kt)("p",null,"All the Fula samples can be found in the Fula GitHub repo under ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/tree/main/examples"},"examples"),"."),(0,a.kt)("p",null,"To get things started and give you an idea of how to work with the ",(0,a.kt)("a",{parentName:"p",href:"/api/graph-api"},"Graph API"),", we will set up the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/tree/main/examples/react-todo-app"},"TODO Sample App"),"."),(0,a.kt)("h2",{id:"running-the-todo-sample"},"Running the TODO Sample"),(0,a.kt)("p",null,"If you followed the previous step, it should already be running.  All you have to do is navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3001")," in a browser."),(0,a.kt)("p",null,"There you should see the following dialog:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Todo Connect Prompt",src:"https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/img/Todo-Connect.png"}),(0,a.kt)("p",{align:"center"},"Todo Connect Prompt")),(0,a.kt)("h2",{id:"connect-to-the-box"},"Connect to the Box"),(0,a.kt)("p",null,"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"PeerId")," from the Box server logs available in the ",(0,a.kt)("a",{parentName:"p",href:"./box-setup"},"previous step")," and paste it into the text input."),(0,a.kt)("p",null,"After clicking 'Connect'..."),(0,a.kt)("p",null,"The app should redirect you to the TODOs app."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Todo App",src:"https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/img/Todo-Connected.png"}),(0,a.kt)("p",{align:"center"},"Todo App")),(0,a.kt)("h2",{id:"editing-the-sample"},"Editing the Sample"),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"/path/to/fula/examples/react-todo-app/src/components/TodoList.tsx")," in your favorite editor."),(0,a.kt)("p",null,"Change the headline from -"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h1>Functionland Todo App</h1>\n")),(0,a.kt)("p",null,"to -"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h1>My Todo App</h1>\n")),(0,a.kt)("p",null,"You should now see the change reflected in your browser."),(0,a.kt)("p",null,"Congrats!  Your Box server is now up and running, and you've verified you can connect to it.  You have also learned how to update one of the samples so that you can use it as a starting point for your own DApp."),(0,a.kt)("p",null,"Now that you are up and running, head on over to the ",(0,a.kt)("a",{parentName:"p",href:"/reference-api"},"Fula Reference API")," to see everything you can accomplish with Box."))}d.isMDXComponent=!0}}]);