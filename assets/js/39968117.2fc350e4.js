"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(a),h=l,k=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6464:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={},i="Bag",s={unversionedId:"blockchain/Recipes/Bag",id:"blockchain/Recipes/Bag",title:"Bag",description:"Register",source:"@site/docs/blockchain/Recipes/Bag.md",sourceDirName:"blockchain/Recipes",slug:"/blockchain/Recipes/Bag",permalink:"/blockchain/Recipes/Bag",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Asset",permalink:"/blockchain/Recipes/Asset"},next:{title:"Bundle",permalink:"/blockchain/Recipes/Bundle"}},p=[{value:"Register",id:"register",children:[{value:"Description:",id:"description",children:[],level:3},{value:"Steps:",id:"steps",children:[],level:3},{value:"Example Input:",id:"example-input",children:[],level:3},{value:"Expected Output:",id:"expected-output",children:[],level:3}],level:2},{value:"Create",id:"create",children:[{value:"Description:",id:"description-1",children:[],level:3},{value:"Previous Steps:",id:"previous-steps",children:[],level:3},{value:"Steps:",id:"steps-1",children:[],level:3},{value:"Example Input:",id:"example-input-1",children:[],level:3},{value:"Expected Output:",id:"expected-output-1",children:[],level:3}],level:2},{value:"Deposit",id:"deposit",children:[{value:"Description:",id:"description-2",children:[],level:3},{value:"Previous Steps:",id:"previous-steps-1",children:[],level:3},{value:"Steps:",id:"steps-2",children:[],level:3},{value:"Example Input:",id:"example-input-2",children:[],level:3},{value:"Expected Output:",id:"expected-output-2",children:[],level:3}],level:2},{value:"Sweep",id:"sweep",children:[{value:"Description:",id:"description-3",children:[],level:3},{value:"Previous Steps:",id:"previous-steps-2",children:[],level:3},{value:"Steps:",id:"steps-3",children:[],level:3},{value:"Example Input:",id:"example-input-3",children:[],level:3},{value:"Expected Output:",id:"expected-output-3",children:[],level:3}],level:2}],o={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bag"},"Bag"),(0,l.kt)("h2",{id:"register"},"Register"),(0,l.kt)("h3",{id:"description"},"Description:"),(0,l.kt)("p",null,"This function register a bag transaction."),(0,l.kt)("h3",{id:"steps"},"Steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Call the bag/register endpoint with the following request body:")),(0,l.kt)("h3",{id:"example-input"},"Example Input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n        "seed": "//Alice",\n        "class_id": 100000,\n        "metadata": {\n        "userdata": "somedata"\n        }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"seed: the seed of the account that will pay for the transaction."),(0,l.kt)("li",{parentName:"ul"},"class_id: the new class identifier that the bag will manage."),(0,l.kt)("li",{parentName:"ul"},"metadata: additional information about the bag.")),(0,l.kt)("h3",{id:"expected-output"},"Expected Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n    "who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",\n    "class_id": 100000\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"who: the account address that paid for the transaction."),(0,l.kt)("li",{parentName:"ul"},"class_id: the class identifier managed by the bag.")),(0,l.kt)("h2",{id:"create"},"Create"),(0,l.kt)("h3",{id:"description-1"},"Description:"),(0,l.kt)("p",null,"This function creates a bag transaction."),(0,l.kt)("h3",{id:"previous-steps"},"Previous Steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create an account."),(0,l.kt)("li",{parentName:"ol"},"Fund an account."),(0,l.kt)("li",{parentName:"ol"},"Register bag.")),(0,l.kt)("h3",{id:"steps-1"},"Steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Call the bag/create endpoint with the following request body:")),(0,l.kt)("h3",{id:"example-input-1"},"Example Input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n    "seed": "//Alice",\n    "class_id": 100000,\n    "owners": ["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"],\n    "shares": [1]\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"seed: the seed of the account that will pay for the transaction."),(0,l.kt)("li",{parentName:"ul"},"class_id: the class identifier that the bag manages."),(0,l.kt)("li",{parentName:"ul"},"owners: array of account addresses that will be associated with the bag."),(0,l.kt)("li",{parentName:"ul"},"shares: the amount of share held by the corresponding owners.")),(0,l.kt)("h3",{id:"expected-output-1"},"Expected Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n    "bag": "5EYCAe5jLQkbmk7kHzj7VNqTGExAEDCjwnnzSh1UEC9N9PgP",\n    "class_id": 100000,\n    "asset_id": 0,\n    "owners": [\n        "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"\n    ]\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"owners: array of account addresses associated with the bag."),(0,l.kt)("li",{parentName:"ul"},"bag: the bag account."),(0,l.kt)("li",{parentName:"ul"},"class_id: the class identifier that the bag manages."),(0,l.kt)("li",{parentName:"ul"},"asset_id: the asset identifier that the bag manages.")),(0,l.kt)("h2",{id:"deposit"},"Deposit"),(0,l.kt)("h3",{id:"description-2"},"Description:"),(0,l.kt)("p",null,"This function creates a new deposit to the bag account."),(0,l.kt)("h3",{id:"previous-steps-1"},"Previous Steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create an account."),(0,l.kt)("li",{parentName:"ol"},"Fund an account."),(0,l.kt)("li",{parentName:"ol"},"Create a class."),(0,l.kt)("li",{parentName:"ol"},"Create an asset."),(0,l.kt)("li",{parentName:"ol"},"Mint an asset."),(0,l.kt)("li",{parentName:"ol"},"Register bag."),(0,l.kt)("li",{parentName:"ol"},"Create a bag.")),(0,l.kt)("h3",{id:"steps-2"},"Steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Call the bag/deposit endpoint with the following request body:")),(0,l.kt)("h3",{id:"example-input-2"},"Example Input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n    "seed": "//Alice",\n    "bag": "5EYCAe5jLQkbmk7kHzj7VNqTGExAEDCjwnnzSh1UEC9N9PgP",\n    "class_ids": [1],\n    "asset_ids": [[0,1]],\n    "amounts": [[100,200]]\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"seed: the seed of the account that will pay for the transaction."),(0,l.kt)("li",{parentName:"ul"},"bag: the bag account where the deposit will be made."),(0,l.kt)("li",{parentName:"ul"},"class_ids: an array of the class identifiers that will be part of the transaction."),(0,l.kt)("li",{parentName:"ul"},"asset_ids: an array of asset_ids arrays that will be related to each class_id."),(0,l.kt)("li",{parentName:"ul"},"amounts: an array of amount arrays that will be related to each asset_id.")),(0,l.kt)("h3",{id:"expected-output-2"},"Expected Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n    "bag": "5EYCAe5jLQkbmk7kHzj7VNqTGExAEDCjwnnzSh1UEC9N9PgP",\n    "who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"who: the account address that paid for the transaction."),(0,l.kt)("li",{parentName:"ul"},"bag: the bag account.")),(0,l.kt)("h2",{id:"sweep"},"Sweep"),(0,l.kt)("h3",{id:"description-3"},"Description:"),(0,l.kt)("p",null,"This function sweep the deposits made on an bag account to a given account."),(0,l.kt)("h3",{id:"previous-steps-2"},"Previous Steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create an account."),(0,l.kt)("li",{parentName:"ol"},"Fund an account."),(0,l.kt)("li",{parentName:"ol"},"Create a class."),(0,l.kt)("li",{parentName:"ol"},"Create an asset."),(0,l.kt)("li",{parentName:"ol"},"Mint an asset."),(0,l.kt)("li",{parentName:"ol"},"Register bag."),(0,l.kt)("li",{parentName:"ol"},"Create a bag."),(0,l.kt)("li",{parentName:"ol"},"Bag deposit.")),(0,l.kt)("h3",{id:"steps-3"},"Steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Call the bag/sweep endpoint with the following request body:")),(0,l.kt)("h3",{id:"example-input-3"},"Example Input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n    "seed": "//Alice",\n    "to": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",\n    "bag": "5EYCAe5jLQkbmk7kHzj7VNqTGExAEDCjwnnzSh1UEC9N9PgP"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"seed: the seed of the account that will pay for the transaction."),(0,l.kt)("li",{parentName:"ul"},"bag: the bag account where the deposit were made."),(0,l.kt)("li",{parentName:"ul"},"to: the receiver account address.")),(0,l.kt)("h3",{id:"expected-output-3"},"Expected Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n    "bag": "5EYCAe5jLQkbmk7kHzj7VNqTGExAEDCjwnnzSh1UEC9N9PgP",\n    "who": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",\n    "to": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"who: the account address that paid for the transaction."),(0,l.kt)("li",{parentName:"ul"},"bag: the bag account."),(0,l.kt)("li",{parentName:"ul"},"to: the receiver account address.")))}c.isMDXComponent=!0}}]);