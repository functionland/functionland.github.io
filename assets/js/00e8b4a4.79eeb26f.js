"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[823,369],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1786:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(5681),o=["components"],p={title:"Graph API",id:"graph-api"},u="Graph API",s={unversionedId:"api/graph-api",id:"api/graph-api",title:"Graph API",description:"Graph API provides a graphql based interface for storing and querying structured graph. Decentralized application",source:"@site/docs/api/graph.md",sourceDirName:"api",slug:"/api/graph-api",permalink:"/api/graph-api",tags:[],version:"current",frontMatter:{title:"Graph API",id:"graph-api"},sidebar:"tutorialSidebar",previous:{title:"Client Instance",permalink:"/api/client-instance"},next:{title:"File API",permalink:"/api/file-api"}},c=[{value:"Queries",id:"queries",children:[{value:"read",id:"read",children:[{value:"Example",id:"example",children:[],level:4}],level:3}],level:2},{value:"Mutations",id:"mutations",children:[{value:"create",id:"create",children:[{value:"Example",id:"example-1",children:[],level:4}],level:3},{value:"update",id:"update",children:[{value:"Example",id:"example-2",children:[],level:4}],level:3},{value:"delete",id:"delete",children:[{value:"Example",id:"example-3",children:[],level:4}],level:3}],level:2},{value:"Filter Objects",id:"filter-objects",children:[{value:"Atomic Filter Object",id:"atomic-filter-object",children:[],level:3},{value:"Value Operators",id:"value-operators",children:[],level:3},{value:"Logical Operators",id:"logical-operators",children:[{value:"Example",id:"example-4",children:[],level:4}],level:3}],level:2},{value:"Subscription",id:"subscription",children:[{value:"Example",id:"example-5",children:[],level:4}],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graph-api"},"Graph API"),(0,i.kt)("p",null,"Graph API provides a graphql based interface for storing and querying structured graph. Decentralized application\ndevelopers for Box can use this API to create, update and delete JSON documents using a standard graphql interface\ndirectly on their Box. The Graph API is a part\nof ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/tree/main/libraries/fula-client"},"Fula Client")," and you can invoke it using\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," interface."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async graphql(query: string, variableValues?: never, operationName?: string)")),(0,i.kt)("p",null,"Arguments are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"query"),": The graphql query string.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"variableValues?"),": A JSON object specifying values for variable you used in the query string. You can specify\nvariables in the query string using ",(0,i.kt)("inlineCode",{parentName:"p"},"$"),", then provide values for them in ",(0,i.kt)("inlineCode",{parentName:"p"},"variableValues")," when you want to execute\nthe query or mutation.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"operationName?"),": An optional name for your operation. ",(0,i.kt)("em",{parentName:"p"},"This argument is currently unused.")))),(0,i.kt)("p",null,"The method resolves to the result of the operation."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#example"},"below")," for an example."),(0,i.kt)("p",null,"Currently, you can use four(4) mutation types and a single query type. These instructions provide a definition and a simple example for each operation.  "),(0,i.kt)("p",null,"If you are familiar with graphql schemas, you may find the current ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/blob/main/apps/box/src/graph/gql-engine/schema.ts"},"graphql schema")," for the Graph API useful."),(0,i.kt)("h2",{id:"queries"},"Queries"),(0,i.kt)("p",null,"Every query operation takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"collection")," argument that refers to the name for the collection you want to query. If a\ncollection with this name does not exist, the operation simply returns an empty output."),(0,i.kt)("h3",{id:"read"},"read"),(0,i.kt)("p",null,"Fetches a previously stored document based on a filter object."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"read (input:ReadInput): [JSON]")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," argument should contain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection:String")," (required): name of the collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter: JSON"),": a ",(0,i.kt)("a",{parentName:"li",href:"#filter-objects"},"filter object")," that determines each document's existence in the output.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"This query operation finds all ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," documents that have an ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," field greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"20")," and then returns\ntheir ",(0,i.kt)("inlineCode",{parentName:"p"},"id, name, age"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const readQuery = `\n  query {\n    read(input:{\n      collection:"profile",\n      filter:{\n        age: {gt: 50}\n      }\n    }){\n      id\n      name\n      age\n    }\n  } \n`;\n\nconst res = await client.graphql(readQuery)\n')),(0,i.kt)("h2",{id:"mutations"},"Mutations"),(0,i.kt)("p",null,"Every mutation operation takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"collection")," argument that refers to the name for the collection you want to mutate. "),(0,i.kt)("p",null,"If the collection name doesn't exist, a new collection is created."),(0,i.kt)("h3",{id:"create"},"create"),(0,i.kt)("p",null,"Creates a new document in a collection and returns the created document."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"create (input:CreateInput!): JSON")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," argument should contain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection: String!")," (required): name of the collection"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values: JSON!"),": document to be created")),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("p",null,"This mutation creates a new document in the ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," collection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note")),": You can use variable values in the query or mutation operation. ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," argument does it for you:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export const createMutation = `\n  mutation addProfile($values:JSON){\n    create(input:{\n      collection:\"profile\",\n      values: $values\n    }){\n      id\n      name\n      isActive\n    }\n  }\n`;\n\nconst res = client.graphql(createMutation, {\n    values: [{\n        id: 1,\n        name: 'Mehdi',\n        isActive: false\n    }]\n}, 'CreateProfile')\n")),(0,i.kt)("h3",{id:"update"},"update"),(0,i.kt)("p",null,"Updates a document. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"values")," argument determines the filter and the update at the same time.\n",(0,i.kt)("inlineCode",{parentName:"p"},"update (input:UpdateInput!): [JSON]")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," argument contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection: String!")," (required): the collection name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values: JSON!"),": document to be updated. This is used for updating the document also.")),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("p",null,"This mutation finds a document with the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field and updates its ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export const updateMutation = `\n  mutation updateProfile($values:JSON){\n    update(input:{\n      collection:\"profile\",\n      values: $values\n    }){\n      id\n      name\n      age\n    }\n  }\n`;\n\nconst res = await graphql(updateMutation, {\n    values: [{\n        id: 1,\n        name: 'Mehdi',\n    }]\n}, 'UpdateProfile')\n")),(0,i.kt)("h3",{id:"delete"},"delete"),(0,i.kt)("p",null,"Deletes a document based on ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note")),": Since Box uses orbitdb as its underlying graphbase, the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field is reserved by the db, if you don't\nspecify an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," argument in the creation time of a document, it will use an auto-generated ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," argument."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"delete (input:DeleteInput!):[ID!]")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," argument contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection: String!")," (required): the collection name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ids: [ID!]"),": the ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"s for documents to be deleted")),(0,i.kt)("h4",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export const deleteMutation = `\n  mutation deleteProfile($values:JSON){\n    delete(input:{\n      collection:\"profile\",\n      ids: $values\n    })\n  }\n`;\nconst res = await client.graphql(deleteMutation, {values: ['1', '2']}, 'DeleteProfile')\n")),(0,i.kt)("h2",{id:"filter-objects"},"Filter Objects"),(0,i.kt)("p",null,"Filter objects are used to choose a subset of the documents in a collection, selected according to specific attributes. (They are\nintended to be like ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/tutorial/query-documents/."},"MongoDB Queries")),(0,i.kt)("p",null,"The graphql engine traverses the filter object recursively until it reaches an ATO (Atomic Filter Object). Additionally, Logical Operators can combine ATOs to make a more complex filter."),(0,i.kt)("h3",{id:"atomic-filter-object"},"Atomic Filter Object"),(0,i.kt)("p",null,"The simplest form of a filter object describing an expected value for an attribute. This expectation can be\nexpressed by an Operator. For example this ATO expects the ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," attribute for a document to be greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"15"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    age: {\n        gt: 15\n    }\n}\n")),(0,i.kt)("p",null,"Every key in an ATO refers to an attribute name.  The value for that key is the expectation expression. In the\nexpression you can use value operators (listed below) to define the criteria."),(0,i.kt)("h3",{id:"value-operators"},"Value Operators"),(0,i.kt)("p",null,"Value Operators can be used to define criteria for an attribute."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note")),": Value Operator names are reserved by the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-engine"),".  You cannot use them as attribute names."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eq")," (Equal to)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ne")," (Not equal to)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gt")," (Greater than)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gte")," (Greater than or equal to)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lt")," (Lower than)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lte")," (Lower than or equal to)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"in")," (Be in ","[array]",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nin")," (Not be in ","[array]",")")),(0,i.kt)("h3",{id:"logical-operators"},"Logical Operators"),(0,i.kt)("p",null,"To make more complex filter objects, you can combine ATOs with logical operators ",(0,i.kt)("inlineCode",{parentName:"p"},"or"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"and"),". Each of these operators\ntakes an array of filters."),(0,i.kt)("h4",{id:"example-4"},"Example"),(0,i.kt)("p",null,"This example demonstrates the filter use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'filter: {\n    and: [\n        {name: {nin: ["keyvan", "mahdi"]}},\n        {\n            or: [\n                {age: {gt: 45}},\n                {age: {lt: 15}}\n            ]\n        }\n    ]\n}\n')),(0,i.kt)("h2",{id:"subscription"},"Subscription"),(0,i.kt)("p",null,"Fula client's Graph API provides subscription for queries. You can subscribe to a query's result and get the new result on each change using the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphqlSubscription")," method."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async function* graphqlSubscribe(query: string, variableValues?: never, operationName?: string)")),(0,i.kt)("p",null,"The interface is almost identical to the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," method, except that ",(0,i.kt)("inlineCode",{parentName:"p"},"graphqlSubscribe")," returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"."),(0,i.kt)("p",null,"Arguments are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": The graphql query string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variableValues?"),": A JSON object specifying values for the variable you used in the query string. You can specify\nvariables in the query string using ",(0,i.kt)("inlineCode",{parentName:"li"},"$")," and then provide values for them in ",(0,i.kt)("inlineCode",{parentName:"li"},"variableValues")," when you want to execute\nthe query or mutation. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operationName?"),": An optional name for your operation. ",(0,i.kt)("em",{parentName:"li"},"This argument is currently unused."))),(0,i.kt)("p",null,"The method returns an ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of"},(0,i.kt)("inlineCode",{parentName:"a"},"AsyncIterable"))," that generates a new result based on query filters every time the collection is changed."),(0,i.kt)("h4",{id:"example-5"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const readQuery = `\n  query {\n    read(input:{\n      collection:"profile",\n      filter:{\n        age: {gt: 50}\n      }\n    }){\n      id\n      name\n      age\n    }\n  } \n`;\n\nconst resultIterator = client.graphqlSubscribe(readQuery)\n\nfor await (const res of resultIterator){\n    console.log(res)\n}\n\n')),(0,i.kt)(l.default,{mdxType:"WorkInProgress"}))}m.isMDXComponent=!0},5681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p=void 0,u={unversionedId:"components/WorkInProgress",id:"components/WorkInProgress",title:"WorkInProgress",description:"Please note: these instructions remain a work in progress as we continue to evolve, refine and perfect the Fula API.  Make sure to check back soon for more details!",source:"@site/docs/components/WorkInProgress.mdx",sourceDirName:"components",slug:"/components/WorkInProgress",permalink:"/components/WorkInProgress",tags:[],version:"current",frontMatter:{}},s=[],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP Alert")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please note: these instructions remain a work in progress as we continue to evolve, refine and perfect the Fula API.  Make sure to check back soon for more details!"))))}d.isMDXComponent=!0}}]);