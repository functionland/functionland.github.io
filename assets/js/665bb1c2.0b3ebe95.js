"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82],{3905:function(I,c,M){M.d(c,{Zo:function(){return d},kt:function(){return a}});var i=M(7294);function N(I,c,M){return c in I?Object.defineProperty(I,c,{value:M,enumerable:!0,configurable:!0,writable:!0}):I[c]=M,I}function t(I,c){var M=Object.keys(I);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(I);c&&(i=i.filter((function(c){return Object.getOwnPropertyDescriptor(I,c).enumerable}))),M.push.apply(M,i)}return M}function l(I){for(var c=1;c<arguments.length;c++){var M=null!=arguments[c]?arguments[c]:{};c%2?t(Object(M),!0).forEach((function(c){N(I,c,M[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(M)):t(Object(M)).forEach((function(c){Object.defineProperty(I,c,Object.getOwnPropertyDescriptor(M,c))}))}return I}function z(I,c){if(null==I)return{};var M,i,N=function(I,c){if(null==I)return{};var M,i,N={},t=Object.keys(I);for(i=0;i<t.length;i++)M=t[i],c.indexOf(M)>=0||(N[M]=I[M]);return N}(I,c);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(I);for(i=0;i<t.length;i++)M=t[i],c.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(I,M)&&(N[M]=I[M])}return N}var Z=i.createContext({}),j=function(I){var c=i.useContext(Z),M=c;return I&&(M="function"==typeof I?I(c):l(l({},c),I)),M},d=function(I){var c=j(I.components);return i.createElement(Z.Provider,{value:c},I.children)},m={inlineCode:"code",wrapper:function(I){var c=I.children;return i.createElement(i.Fragment,{},c)}},e=i.forwardRef((function(I,c){var M=I.components,N=I.mdxType,t=I.originalType,Z=I.parentName,d=z(I,["components","mdxType","originalType","parentName"]),e=j(M),a=N,b=e["".concat(Z,".").concat(a)]||e[a]||m[a]||t;return M?i.createElement(b,l(l({ref:c},d),{},{components:M})):i.createElement(b,l({ref:c},d))}));function a(I,c){var M=arguments,N=c&&c.mdxType;if("string"==typeof I||N){var t=M.length,l=new Array(t);l[0]=e;var z={};for(var Z in c)hasOwnProperty.call(c,Z)&&(z[Z]=c[Z]);z.originalType=I,z.mdxType="string"==typeof I?I:N,l[1]=z;for(var j=2;j<t;j++)l[j]=M[j];return i.createElement.apply(null,l)}return i.createElement.apply(null,M)}e.displayName="MDXCreateElement"},3713:function(I,c,M){M.r(c),M.d(c,{frontMatter:function(){return z},contentTitle:function(){return Z},metadata:function(){return j},toc:function(){return d},default:function(){return e}});var i=M(7462),N=M(3366),t=(M(7294),M(3905)),l=["components"],z={},Z="Decentralized Identity (DID)",j={unversionedId:"RFCs/fula-sec/did",id:"RFCs/fula-sec/did",title:"Decentralized Identity (DID)",description:"- Start Date: 2022-02-27",source:"@site/docs/RFCs/fula-sec/did.md",sourceDirName:"RFCs/fula-sec",slug:"/RFCs/fula-sec/did",permalink:"/RFCs/fula-sec/did",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FULA Security Layer",permalink:"/RFCs/fula-sec"},next:{title:"Two-way Encryption Mechanism",permalink:"/RFCs/fula-sec/encryption"}},d=[{value:"Why DID in FULA?",id:"why-did-in-fula",children:[],level:2},{value:"What is Required?",id:"what-is-required",children:[],level:2},{value:"Can we achieve creating DID without any providers?",id:"can-we-achieve-creating-did-without-any-providers",children:[],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2}],m={toc:d};function e(I){var c=I.components,z=(0,N.Z)(I,l);return(0,t.kt)("wrapper",(0,i.Z)({},m,z,{components:c,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"decentralized-identity-did"},"Decentralized Identity (DID)"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Start Date: 2022-02-27"),(0,t.kt)("li",{parentName:"ul"},"RFC PR: ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs/pull/74"},"functionland/docs/pull/74")),(0,t.kt)("li",{parentName:"ul"},"Functionland Issue: ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/functionland/docs/issues/65"},"functionland/docs/issues/65")),(0,t.kt)("li",{parentName:"ul"},"Status: Draft"),(0,t.kt)("li",{parentName:"ul"},"Authors: ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/ruffiano89"},"Jamshid")),(0,t.kt)("li",{parentName:"ul"},"Reviewers: ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/orgs/functionland/people/masih"},"Masih"),", ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/gitaaron"},"Aaron"))),(0,t.kt)("h2",{id:"why-did-in-fula"},"Why DID in FULA?"),(0,t.kt)("p",null,"DID enables agents to assert their identity so that they can establish trust, privacy and security with other agents in the network without a centralized authority."),(0,t.kt)("h2",{id:"what-is-required"},"What is Required?"),(0,t.kt)("p",null,"Setting up decentralized identity with providers(blockchain/distributed ledger) usually consists of the following elements:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Identity owner: The user who creates their decentralized identity using the identity wallet."),(0,t.kt)("li",{parentName:"ol"},"Issuer/Verifier: An entity that issues and verifies identification information. They sign the transaction with their private key."),(0,t.kt)("li",{parentName:"ol"},"Blockchain/Distributed Ledger: A decentralized and distributed ledger that provides the mechanism and functions for DID and operation."),(0,t.kt)("li",{parentName:"ol"},"DID (Decentralized Identifier): A unique identifier that contains details such as public key, verification information, documents.")),(0,t.kt)("h2",{id:"can-we-achieve-creating-did-without-any-providers"},"Can we achieve creating DID without any providers?"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Yes, but with some flaws.")," As long as we do not store all operations with DID on a ledger verified by an acceptable number of other nodes, security of the data will be lost. Moreover, data storage in blockchain/distributed ledger mechanism is immutable and permanent, and hence, modification and deletion are not possible. The decentralized identity systems use this mechanism so that no external entity can tamper or modify the data."),(0,t.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Create DID identity -\nWith Create DID, we will have a DID identity and two secret keys options for backup.")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"create DID flowchart diagram",src:M(3053).Z,width:"415",height:"219"})),(0,t.kt)("ol",{start:2},(0,t.kt)("li",{parentName:"ol"},"Recover DID identity - We need a mnemonic or private key to restore identity.")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"recover DID flowchart diagram",src:M(3578).Z,width:"414",height:"144"})),(0,t.kt)("p",null,"See ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/functionland/fula/tree/fula-sec/libraries/fula-sec#decentralized-identity-did"},"here")," for DID reference implementation."))}e.isMDXComponent=!0},3053:function(I,c){c.Z="data:image/svg+xml;base64,PHN2ZyBpZD0ibWVybWFpZC0xNjQ4NTI3NzM2OTM0IiB3aWR0aD0iMTAwJSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaGVpZ2h0PSIyMTguNTQ5MjI0ODUzNTE1NjIiIHN0eWxlPSJtYXgtd2lkdGg6IDQxNC42MDkzNzVweDsiIHZpZXdCb3g9IjAgMCA0MTQuNjA5Mzc1IDIxOC41NDkyMjQ4NTM1MTU2MiI+PHN0eWxlPiNtZXJtYWlkLTE2NDg1Mjc3MzY5MzR7Zm9udC1mYW1pbHk6InRyZWJ1Y2hldCBtcyIsdmVyZGFuYSxhcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O2ZpbGw6IzMzMzt9I21lcm1haWQtMTY0ODUyNzczNjkzNCAuZXJyb3ItaWNvbntmaWxsOiM1NTIyMjI7fSNtZXJtYWlkLTE2NDg1Mjc3MzY5MzQgLmVycm9yLXRleHR7ZmlsbDojNTUyMjIyO3N0cm9rZTojNTUyMjIyO30jbWVybWFpZC0xNjQ4NTI3NzM2OTM0IC5lZGdlLXRoaWNrbmVzcy1ub3JtYWx7c3Ryb2tlLXdpZHRoOjJweDt9I21lcm1haWQtMTY0ODUyNzczNjkzNCAuZWRnZS10aGlja25lc3MtdGhpY2t7c3Ryb2tlLXdpZHRoOjMuNXB4O30jbWVybWFpZC0xNjQ4NTI3NzM2OTM0IC5lZGdlLXBhdHRlcm4tc29saWR7c3Ryb2tlLWRhc2hhcnJheTowO30jbWVybWFpZC0xNjQ4NTI3NzM2OTM0IC5lZGdlLXBhdHRlcm4tZGFzaGVke3N0cm9rZS1kYXNoYXJyYXk6Mzt9I21lcm1haWQtMTY0ODUyNzczNjkzNCAuZWRnZS1wYXR0ZXJuLWRvdHRlZHtzdHJva2UtZGFzaGFycmF5OjI7fSNtZXJtYWlkLTE2NDg1Mjc3MzY5MzQgLm1hcmtlcntmaWxsOiMzMzMzMzM7c3Ryb2tlOiMzMzMzMzM7fSNtZXJtYWlkLTE2NDg1Mjc3MzY5MzQgLm1hcmtlci5jcm9zc3tzdHJva2U6IzMzMzMzMzt9I21lcm1haWQtMTY0ODUyNzczNjkzNCBzdmd7Zm9udC1mYW1pbHk6InRyZWJ1Y2hldCBtcyIsdmVyZGFuYSxhcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O30jbWVybWFpZC0xNjQ4NTI3NzM2OTM0IC5sYWJlbHtmb250LWZhbWlseToidHJlYnVjaGV0IG1zIix2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7Y29sb3I6IzMzMzt9I21lcm1haWQtMTY0ODUyNzczNjkzNCAuY2x1c3Rlci1sYWJlbCB0ZXh0e2ZpbGw6IzMzMzt9I21lcm1haWQtMTY0ODUyNzczNjkzNCAuY2x1c3Rlci1sYWJlbCBzcGFue2NvbG9yOiMzMzM7fSNtZXJtYWlkLTE2NDg1Mjc3MzY5MzQgLmxhYmVsIHRleHQsI21lcm1haWQtMTY0ODUyNzczNjkzNCBzcGFue2ZpbGw6IzMzMztjb2xvcjojMzMzO30jbWVybWFpZC0xNjQ4NTI3NzM2OTM0IC5ub2RlIHJlY3QsI21lcm1haWQtMTY0ODUyNzczNjkzNCAubm9kZSBjaXJjbGUsI21lcm1haWQtMTY0ODUyNzczNjkzNCAubm9kZSBlbGxpcHNlLCNtZXJtYWlkLTE2NDg1Mjc3MzY5MzQgLm5vZGUgcG9seWdvbiwjbWVybWFpZC0xNjQ4NTI3NzM2OTM0IC5ub2RlIHBhdGh7ZmlsbDojRUNFQ0ZGO3N0cm9rZTojOTM3MERCO3N0cm9rZS13aWR0aDoxcHg7fSNtZXJtYWlkLTE2NDg1Mjc3MzY5MzQgLm5vZGUgLmxhYmVse3RleHQtYWxpZ246Y2VudGVyO30jbWVybWFpZC0xNjQ4NTI3NzM2OTM0IC5ub2RlLmNsaWNrYWJsZXtjdXJzb3I6cG9pbnRlcjt9I21lcm1haWQtMTY0ODUyNzczNjkzNCAuYXJyb3doZWFkUGF0aHtmaWxsOiMzMzMzMzM7fSNtZXJtYWlkLTE2NDg1Mjc3MzY5MzQgLmVkZ2VQYXRoIC5wYXRoe3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDoxLjVweDt9I21lcm1haWQtMTY0ODUyNzczNjkzNCAuZmxvd2NoYXJ0LWxpbmt7c3Ryb2tlOiMzMzMzMzM7ZmlsbDpub25lO30jbWVybWFpZC0xNjQ4NTI3NzM2OTM0IC5lZGdlTGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4O3RleHQtYWxpZ246Y2VudGVyO30jbWVybWFpZC0xNjQ4NTI3NzM2OTM0IC5lZGdlTGFiZWwgcmVjdHtvcGFjaXR5OjAuNTtiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7ZmlsbDojZThlOGU4O30jbWVybWFpZC0xNjQ4NTI3NzM2OTM0IC5jbHVzdGVyIHJlY3R7ZmlsbDojZmZmZmRlO3N0cm9rZTojYWFhYTMzO3N0cm9rZS13aWR0aDoxcHg7fSNtZXJtYWlkLTE2NDg1Mjc3MzY5MzQgLmNsdXN0ZXIgdGV4dHtmaWxsOiMzMzM7fSNtZXJtYWlkLTE2NDg1Mjc3MzY5MzQgLmNsdXN0ZXIgc3Bhbntjb2xvcjojMzMzO30jbWVybWFpZC0xNjQ4NTI3NzM2OTM0IGRpdi5tZXJtYWlkVG9vbHRpcHtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjttYXgtd2lkdGg6MjAwcHg7cGFkZGluZzoycHg7Zm9udC1mYW1pbHk6InRyZWJ1Y2hldCBtcyIsdmVyZGFuYSxhcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2JhY2tncm91bmQ6aHNsKDgwLDEwMCUsOTYuMjc0NTA5ODAzOSUpO2JvcmRlcjoxcHggc29saWQgI2FhYWEzMztib3JkZXItcmFkaXVzOjJweDtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MTAwO30jbWVybWFpZC0xNjQ4NTI3NzM2OTM0OnJvb3R7LS1tZXJtYWlkLWZvbnQtZmFtaWx5OiJ0cmVidWNoZXQgbXMiLHZlcmRhbmEsYXJpYWwsc2Fucy1zZXJpZjt9PC9zdHlsZT48Zz48ZyBjbGFzcz0ib3V0cHV0Ij48ZyBjbGFzcz0iY2x1c3RlcnMiPjwvZz48ZyBjbGFzcz0iZWRnZVBhdGhzIj48ZyBjbGFzcz0iZWRnZVBhdGggTFMtQSBMRS1CIiBpZD0iTC1BLUIiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PHBhdGggY2xhc3M9InBhdGgiIGQ9Ik05NC4wODE5MTU1MDE1NjQyNSwxMDEuMDIxNTg1NTIwNDgzMTlMMTAwLjA1MDAzMzc1MTMwMzU0LDk2LjE4NDY1NDYwMDQwMjY1QzEwNi4wMTgxNTIwMDEwNDI4NCw5MS4zNDc3MjM2ODAzMjIxMywxMTcuOTU0Mzg4NTAwNTIxNDIsODEuNjczODYxODQwMTYxMDcsMTI4LjY1Mzg4NzQ2NzIyMDMzLDc2LjkyMDI2NDI1MzQxMzg2QzEzOS4zNTMzODY0MzM5MTkyNyw3Mi4xNjY2NjY2NjY2NjY2NywxNDguODE2MTQ3ODY3ODM4NSw3Mi4zMzMzMzMzMzMzMzMzMywxNTMuNTQ3NTI4NTg0Nzk4MTMsNzIuNDE2NjY2NjY2NjY2NjdMMTU4LjI3ODkwOTMwMTc1Nzc4LDcyLjUiIG1hcmtlci1lbmQ9InVybCgjYXJyb3doZWFkMTQpIiBzdHlsZT0iZmlsbDpub25lIj48L3BhdGg+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3doZWFkMTQiIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iOSIgcmVmWT0iNSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBtYXJrZXJXaWR0aD0iOCIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8iPjxwYXRoIGQ9Ik0gMCAwIEwgMTAgNSBMIDAgMTAgeiIgY2xhc3M9ImFycm93aGVhZFBhdGgiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IDEsIDA7Ij48L3BhdGg+PC9tYXJrZXI+PC9kZWZzPjwvZz48ZyBjbGFzcz0iZWRnZVBhdGggTFMtQSBMRS1FIiBpZD0iTC1BLUUiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PHBhdGggY2xhc3M9InBhdGgiIGQ9Ik05NC4wODE5MTU1MDE1NjQyNSwxNjIuMDI3NjMxNzAzNjM3OUwxMDAuMDUwMDMzNzUxMzAzNTQsMTY2Ljg2NDU2MjYyMzcxODQzQzEwNi4wMTgxNTIwMDEwNDI4NCwxNzEuNzAxNDkzNTQzNzk4OTYsMTE3Ljk1NDM4ODUwMDUyMTQyLDE4MS4zNzUzNTUzODM5NjAwMywxMjguMDg5MTczNDE2OTI3MzcsMTg2LjIxMjI4NjMwNDA0MDUzQzEzOC4yMjM5NTgzMzMzMzMzNCwxOTEuMDQ5MjE3MjI0MTIxMSwxNDYuNTU3MjkxNjY2NjY2NjYsMTkxLjA0OTIxNzIyNDEyMTEsMTUwLjcyMzk1ODMzMzMzMzM0LDE5MS4wNDkyMTcyMjQxMjExTDE1NC44OTA2MjUsMTkxLjA0OTIxNzIyNDEyMTEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3doZWFkMTUpIiBzdHlsZT0iZmlsbDpub25lIj48L3BhdGg+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3doZWFkMTUiIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iOSIgcmVmWT0iNSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBtYXJrZXJXaWR0aD0iOCIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8iPjxwYXRoIGQ9Ik0gMCAwIEwgMTAgNSBMIDAgMTAgeiIgY2xhc3M9ImFycm93aGVhZFBhdGgiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IDEsIDA7Ij48L3BhdGg+PC9tYXJrZXI+PC9kZWZzPjwvZz48ZyBjbGFzcz0iZWRnZVBhdGggTFMtQiBMRS1DIiBpZD0iTC1CLUMiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PHBhdGggY2xhc3M9InBhdGgiIGQ9Ik0yMzkuMjk0Nzk5NTQxOTAxNiw1NC40MTc0NTU3OTE5MDE1NzRMMjQ2Ljg3MzI3MDQ1MTU4NDY2LDQ5LjkzMTIxMzE1OTkxNzk4QzI1NC40NTE3NDEzNjEyNjc3NSw0NS40NDQ5NzA1Mjc5MzQzOCwyNjkuNjA4NjgzMTgwNjMzOSwzNi40NzI0ODUyNjM5NjcxOTQsMjgxLjc2Mzk3NzAwNjk4MzU3LDMxLjk4NjI0MjYzMTk4MzU5N0MyOTMuOTE5MjcwODMzMzMzMywyNy41LDMwMy4wNzI5MTY2NjY2NjY3LDI3LjUsMzA3LjY0OTczOTU4MzMzMzMsMjcuNUwzMTIuMjI2NTYyNSwyNy41IiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93aGVhZDE2KSIgc3R5bGU9ImZpbGw6bm9uZSI+PC9wYXRoPjxkZWZzPjxtYXJrZXIgaWQ9ImFycm93aGVhZDE2IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjkiIHJlZlk9IjUiIG1hcmtlclVuaXRzPSJzdHJva2VXaWR0aCIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iNiIgb3JpZW50PSJhdXRvIj48cGF0aCBkPSJNIDAgMCBMIDEwIDUgTCAwIDEwIHoiIGNsYXNzPSJhcnJvd2hlYWRQYXRoIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAxOyBzdHJva2UtZGFzaGFycmF5OiAxLCAwOyI+PC9wYXRoPjwvbWFya2VyPjwvZGVmcz48L2c+PGcgY2xhc3M9ImVkZ2VQYXRoIExTLUIgTEUtRCIgaWQ9IkwtQi1EIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxwYXRoIGNsYXNzPSJwYXRoIiBkPSJNMjM5LjI5NDgwMTQ3OTk0NzcsOTAuNTgyNTQ1MzIxODEwMTRMMjQ2Ljg3MzI3MjA2NjYyMzA2LDk0LjkwMjEyMTEwMTUwODQ0QzI1NC40NTE3NDI2NTMyOTg0NSw5OS4yMjE2OTY4ODEyMDY3NSwyNjkuNjA4NjgzODI2NjQ5MiwxMDcuODYwODQ4NDQwNjAzMzgsMjgxLjM1MzgyMTA3OTk5MTMsMTEyLjE4MDQyNDIyMDMwMTY5QzI5My4wOTg5NTgzMzMzMzMzLDExNi41LDMwMS40MzIyOTE2NjY2NjY3LDExNi41LDMwNS41OTg5NTgzMzMzMzMzLDExNi41TDMwOS43NjU2MjUsMTE2LjUiIG1hcmtlci1lbmQ9InVybCgjYXJyb3doZWFkMTcpIiBzdHlsZT0iZmlsbDpub25lIj48L3BhdGg+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3doZWFkMTciIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iOSIgcmVmWT0iNSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBtYXJrZXJXaWR0aD0iOCIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8iPjxwYXRoIGQ9Ik0gMCAwIEwgMTAgNSBMIDAgMTAgeiIgY2xhc3M9ImFycm93aGVhZFBhdGgiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IDEsIDA7Ij48L3BhdGg+PC9tYXJrZXI+PC9kZWZzPjwvZz48L2c+PGcgY2xhc3M9ImVkZ2VMYWJlbHMiPjxnIGNsYXNzPSJlZGdlTGFiZWwiIHRyYW5zZm9ybT0iIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkiIGNsYXNzPSJsYWJlbCI+PHJlY3Qgcng9IjAiIHJ5PSIwIiB3aWR0aD0iMCIgaGVpZ2h0PSIwIj48L3JlY3Q+PGZvcmVpZ25PYmplY3Qgd2lkdGg9IjAiIGhlaWdodD0iMCI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPjxzcGFuIGlkPSJMLUwtQS1CIiBjbGFzcz0iZWRnZUxhYmVsIEwtTFMtQScgTC1MRS1CIj48L3NwYW4+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PGcgY2xhc3M9ImVkZ2VMYWJlbCIgdHJhbnNmb3JtPSIiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIgY2xhc3M9ImxhYmVsIj48cmVjdCByeD0iMCIgcnk9IjAiIHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjwvcmVjdD48Zm9yZWlnbk9iamVjdCB3aWR0aD0iMCIgaGVpZ2h0PSIwIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+PHNwYW4gaWQ9IkwtTC1BLUUiIGNsYXNzPSJlZGdlTGFiZWwgTC1MUy1BJyBMLUxFLUUiPjwvc3Bhbj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjwvZz48ZyBjbGFzcz0iZWRnZUxhYmVsIiB0cmFuc2Zvcm09IiIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIiBjbGFzcz0ibGFiZWwiPjxyZWN0IHJ4PSIwIiByeT0iMCIgd2lkdGg9IjAiIGhlaWdodD0iMCI+PC9yZWN0Pjxmb3JlaWduT2JqZWN0IHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij48c3BhbiBpZD0iTC1MLUItQyIgY2xhc3M9ImVkZ2VMYWJlbCBMLUxTLUInIEwtTEUtQyI+PC9zcGFuPjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjxnIGNsYXNzPSJlZGdlTGFiZWwiIHRyYW5zZm9ybT0iIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkiIGNsYXNzPSJsYWJlbCI+PHJlY3Qgcng9IjAiIHJ5PSIwIiB3aWR0aD0iMCIgaGVpZ2h0PSIwIj48L3JlY3Q+PGZvcmVpZ25PYmplY3Qgd2lkdGg9IjAiIGhlaWdodD0iMCI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPjxzcGFuIGlkPSJMLUwtQi1EIiBjbGFzcz0iZWRnZUxhYmVsIEwtTFMtQicgTC1MRS1EIj48L3NwYW4+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9nPjxnIGNsYXNzPSJub2RlcyI+PGcgY2xhc3M9Im5vZGUgZGVmYXVsdCIgaWQ9ImZsb3djaGFydC1BLTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2LjQ0NTMxMjUsMTMxLjUyNDYwODYxMjA2MDU1KSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48Y2lyY2xlIHg9Ii00OC40NDUzMTI1IiB5PSItMTkuNSIgcj0iNDguNDQ1MzEyNSIgY2xhc3M9ImxhYmVsLWNvbnRhaW5lciI+PC9jaXJjbGU+PGcgY2xhc3M9ImxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzguNDQ1MzEyNSwtOS41KSI+PGZvcmVpZ25PYmplY3Qgd2lkdGg9Ijc2Ljg5MDYyNSIgaGVpZ2h0PSIxOSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPkNyZWF0ZSBESUQ8L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjwvZz48L2c+PGcgY2xhc3M9Im5vZGUgZGVmYXVsdCIgaWQ9ImZsb3djaGFydC1CLTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwNy4zMjgxMjUsNzIpIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxwb2x5Z29uIHBvaW50cz0iNDkuNTQ5MjE4NzUsMCA5OS4wOTg0Mzc1LC00OS41NDkyMTg3NSA0OS41NDkyMTg3NSwtOTkuMDk4NDM3NSAwLC00OS41NDkyMTg3NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5LjU0OTIxODc1LDQ5LjU0OTIxODc1KSIgY2xhc3M9ImxhYmVsLWNvbnRhaW5lciI+PC9wb2x5Z29uPjxnIGNsYXNzPSJsYWJlbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjU1NDY4NzUsLTkuNSkiPjxmb3JlaWduT2JqZWN0IHdpZHRoPSI1MS4xMDkzNzUiIGhlaWdodD0iMTkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij5CYWNrdXA8L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjwvZz48L2c+PGcgY2xhc3M9Im5vZGUgZGVmYXVsdCIgaWQ9ImZsb3djaGFydC1FLTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDcuMzI4MTI1LDE5MS4wNDkyMTcyMjQxMjExKSIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48cmVjdCByeD0iNSIgcnk9IjUiIHg9Ii01Mi40Mzc1IiB5PSItMTkuNSIgd2lkdGg9IjEwNC44NzUiIGhlaWdodD0iMzkiIGNsYXNzPSJsYWJlbC1jb250YWluZXIiPjwvcmVjdD48ZyBjbGFzcz0ibGFiZWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00Mi40Mzc1LC05LjUpIj48Zm9yZWlnbk9iamVjdCB3aWR0aD0iODQuODc1IiBoZWlnaHQ9IjE5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+RElEIElkZW50aXR5PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9nPjxnIGNsYXNzPSJub2RlIGRlZmF1bHQiIGlkPSJmbG93Y2hhcnQtQy0xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU4LjE4NzUsMjcuNSkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PHJlY3Qgcng9IjUiIHJ5PSI1IiB4PSItNDUuOTYwOTM3NSIgeT0iLTE5LjUiIHdpZHRoPSI5MS45MjE4NzUiIGhlaWdodD0iMzkiIGNsYXNzPSJsYWJlbC1jb250YWluZXIiPjwvcmVjdD48ZyBjbGFzcz0ibGFiZWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNS45NjA5Mzc1LC05LjUpIj48Zm9yZWlnbk9iamVjdCB3aWR0aD0iNzEuOTIxODc1IiBoZWlnaHQ9IjE5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+TW5lbW9uaWM8L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjwvZz48L2c+PGcgY2xhc3M9Im5vZGUgZGVmYXVsdCIgaWQ9ImZsb3djaGFydC1ELTE1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTguMTg3NSwxMTYuNSkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PHJlY3Qgcng9IjUiIHJ5PSI1IiB4PSItNDguNDIxODc1IiB5PSItMTkuNSIgd2lkdGg9Ijk2Ljg0Mzc1IiBoZWlnaHQ9IjM5IiBjbGFzcz0ibGFiZWwtY29udGFpbmVyIj48L3JlY3Q+PGcgY2xhc3M9ImxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzguNDIxODc1LC05LjUpIj48Zm9yZWlnbk9iamVjdCB3aWR0aD0iNzYuODQzNzUiIGhlaWdodD0iMTkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij5wcml2YXRlS2V5PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="},3578:function(I,c){c.Z="data:image/svg+xml;base64,PHN2ZyBpZD0ibWVybWFpZC0xNjQ4NTI3OTc5ODI3IiB3aWR0aD0iMTAwJSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaGVpZ2h0PSIxNDQiIHN0eWxlPSJtYXgtd2lkdGg6IDQxNC40MjE4NzVweDsiIHZpZXdCb3g9IjAgMCA0MTQuNDIxODc1IDE0NCI+PHN0eWxlPiNtZXJtYWlkLTE2NDg1Mjc5Nzk4Mjd7Zm9udC1mYW1pbHk6InRyZWJ1Y2hldCBtcyIsdmVyZGFuYSxhcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O2ZpbGw6IzMzMzt9I21lcm1haWQtMTY0ODUyNzk3OTgyNyAuZXJyb3ItaWNvbntmaWxsOiM1NTIyMjI7fSNtZXJtYWlkLTE2NDg1Mjc5Nzk4MjcgLmVycm9yLXRleHR7ZmlsbDojNTUyMjIyO3N0cm9rZTojNTUyMjIyO30jbWVybWFpZC0xNjQ4NTI3OTc5ODI3IC5lZGdlLXRoaWNrbmVzcy1ub3JtYWx7c3Ryb2tlLXdpZHRoOjJweDt9I21lcm1haWQtMTY0ODUyNzk3OTgyNyAuZWRnZS10aGlja25lc3MtdGhpY2t7c3Ryb2tlLXdpZHRoOjMuNXB4O30jbWVybWFpZC0xNjQ4NTI3OTc5ODI3IC5lZGdlLXBhdHRlcm4tc29saWR7c3Ryb2tlLWRhc2hhcnJheTowO30jbWVybWFpZC0xNjQ4NTI3OTc5ODI3IC5lZGdlLXBhdHRlcm4tZGFzaGVke3N0cm9rZS1kYXNoYXJyYXk6Mzt9I21lcm1haWQtMTY0ODUyNzk3OTgyNyAuZWRnZS1wYXR0ZXJuLWRvdHRlZHtzdHJva2UtZGFzaGFycmF5OjI7fSNtZXJtYWlkLTE2NDg1Mjc5Nzk4MjcgLm1hcmtlcntmaWxsOiMzMzMzMzM7c3Ryb2tlOiMzMzMzMzM7fSNtZXJtYWlkLTE2NDg1Mjc5Nzk4MjcgLm1hcmtlci5jcm9zc3tzdHJva2U6IzMzMzMzMzt9I21lcm1haWQtMTY0ODUyNzk3OTgyNyBzdmd7Zm9udC1mYW1pbHk6InRyZWJ1Y2hldCBtcyIsdmVyZGFuYSxhcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O30jbWVybWFpZC0xNjQ4NTI3OTc5ODI3IC5sYWJlbHtmb250LWZhbWlseToidHJlYnVjaGV0IG1zIix2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7Y29sb3I6IzMzMzt9I21lcm1haWQtMTY0ODUyNzk3OTgyNyAuY2x1c3Rlci1sYWJlbCB0ZXh0e2ZpbGw6IzMzMzt9I21lcm1haWQtMTY0ODUyNzk3OTgyNyAuY2x1c3Rlci1sYWJlbCBzcGFue2NvbG9yOiMzMzM7fSNtZXJtYWlkLTE2NDg1Mjc5Nzk4MjcgLmxhYmVsIHRleHQsI21lcm1haWQtMTY0ODUyNzk3OTgyNyBzcGFue2ZpbGw6IzMzMztjb2xvcjojMzMzO30jbWVybWFpZC0xNjQ4NTI3OTc5ODI3IC5ub2RlIHJlY3QsI21lcm1haWQtMTY0ODUyNzk3OTgyNyAubm9kZSBjaXJjbGUsI21lcm1haWQtMTY0ODUyNzk3OTgyNyAubm9kZSBlbGxpcHNlLCNtZXJtYWlkLTE2NDg1Mjc5Nzk4MjcgLm5vZGUgcG9seWdvbiwjbWVybWFpZC0xNjQ4NTI3OTc5ODI3IC5ub2RlIHBhdGh7ZmlsbDojRUNFQ0ZGO3N0cm9rZTojOTM3MERCO3N0cm9rZS13aWR0aDoxcHg7fSNtZXJtYWlkLTE2NDg1Mjc5Nzk4MjcgLm5vZGUgLmxhYmVse3RleHQtYWxpZ246Y2VudGVyO30jbWVybWFpZC0xNjQ4NTI3OTc5ODI3IC5ub2RlLmNsaWNrYWJsZXtjdXJzb3I6cG9pbnRlcjt9I21lcm1haWQtMTY0ODUyNzk3OTgyNyAuYXJyb3doZWFkUGF0aHtmaWxsOiMzMzMzMzM7fSNtZXJtYWlkLTE2NDg1Mjc5Nzk4MjcgLmVkZ2VQYXRoIC5wYXRoe3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDoxLjVweDt9I21lcm1haWQtMTY0ODUyNzk3OTgyNyAuZmxvd2NoYXJ0LWxpbmt7c3Ryb2tlOiMzMzMzMzM7ZmlsbDpub25lO30jbWVybWFpZC0xNjQ4NTI3OTc5ODI3IC5lZGdlTGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4O3RleHQtYWxpZ246Y2VudGVyO30jbWVybWFpZC0xNjQ4NTI3OTc5ODI3IC5lZGdlTGFiZWwgcmVjdHtvcGFjaXR5OjAuNTtiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7ZmlsbDojZThlOGU4O30jbWVybWFpZC0xNjQ4NTI3OTc5ODI3IC5jbHVzdGVyIHJlY3R7ZmlsbDojZmZmZmRlO3N0cm9rZTojYWFhYTMzO3N0cm9rZS13aWR0aDoxcHg7fSNtZXJtYWlkLTE2NDg1Mjc5Nzk4MjcgLmNsdXN0ZXIgdGV4dHtmaWxsOiMzMzM7fSNtZXJtYWlkLTE2NDg1Mjc5Nzk4MjcgLmNsdXN0ZXIgc3Bhbntjb2xvcjojMzMzO30jbWVybWFpZC0xNjQ4NTI3OTc5ODI3IGRpdi5tZXJtYWlkVG9vbHRpcHtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjttYXgtd2lkdGg6MjAwcHg7cGFkZGluZzoycHg7Zm9udC1mYW1pbHk6InRyZWJ1Y2hldCBtcyIsdmVyZGFuYSxhcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2JhY2tncm91bmQ6aHNsKDgwLDEwMCUsOTYuMjc0NTA5ODAzOSUpO2JvcmRlcjoxcHggc29saWQgI2FhYWEzMztib3JkZXItcmFkaXVzOjJweDtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MTAwO30jbWVybWFpZC0xNjQ4NTI3OTc5ODI3OnJvb3R7LS1tZXJtYWlkLWZvbnQtZmFtaWx5OiJ0cmVidWNoZXQgbXMiLHZlcmRhbmEsYXJpYWwsc2Fucy1zZXJpZjt9PC9zdHlsZT48Zz48ZyBjbGFzcz0ib3V0cHV0Ij48ZyBjbGFzcz0iY2x1c3RlcnMiPjwvZz48ZyBjbGFzcz0iZWRnZVBhdGhzIj48ZyBjbGFzcz0iZWRnZVBhdGggTFMtQSBMRS1DIiBpZD0iTC1BLUMiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PHBhdGggY2xhc3M9InBhdGgiIGQ9Ik0xMDQuODQzNzUsMjcuNUwxMDkuMDEwNDE2NjY2NjY2NjcsMjcuNUMxMTMuMTc3MDgzMzMzMzMzMzMsMjcuNSwxMjEuNTEwNDE2NjY2NjY2NjcsMjcuNSwxMzEuMDEyNTA1NTU5NDc4NDMsMzAuNzM2ODI2NjA1NjE1MzQ1QzE0MC41MTQ1OTQ0NTIyOTAyLDMzLjk3MzY1MzIxMTIzMDY5LDE1MS4xODU0Mzg5MDQ1ODA0LDQwLjQ0NzMwNjQyMjQ2MTM3NCwxNTYuNTIwODYxMTMwNzI1NDgsNDMuNjg0MTMzMDI4MDc2NzJMMTYxLjg1NjI4MzM1Njg3MDYsNDYuOTIwOTU5NjMzNjkyMDY0IiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93aGVhZDEzKSIgc3R5bGU9ImZpbGw6bm9uZSI+PC9wYXRoPjxkZWZzPjxtYXJrZXIgaWQ9ImFycm93aGVhZDEzIiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjkiIHJlZlk9IjUiIG1hcmtlclVuaXRzPSJzdHJva2VXaWR0aCIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iNiIgb3JpZW50PSJhdXRvIj48cGF0aCBkPSJNIDAgMCBMIDEwIDUgTCAwIDEwIHoiIGNsYXNzPSJhcnJvd2hlYWRQYXRoIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAxOyBzdHJva2UtZGFzaGFycmF5OiAxLCAwOyI+PC9wYXRoPjwvbWFya2VyPjwvZGVmcz48L2c+PGcgY2xhc3M9ImVkZ2VQYXRoIExTLUIgTEUtQyIgaWQ9IkwtQi1DIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxwYXRoIGNsYXNzPSJwYXRoIiBkPSJNMTAyLjM4MjgxMjUsMTE2LjVMMTA2Ljk1OTYzNTQxNjY2NjY3LDExNi41QzExMS41MzY0NTgzMzMzMzMzMywxMTYuNSwxMjAuNjkwMTA0MTY2NjY2NjcsMTE2LjUsMTMwLjYwMjM0OTMwOTQ3ODQzLDExMy4yNjMxNzMzOTQzODQ2NUMxNDAuNTE0NTk0NDUyMjkwMiwxMTAuMDI2MzQ2Nzg4NzY5MzIsMTUxLjE4NTQzODkwNDU4MDQsMTAzLjU1MjY5MzU3NzUzODYyLDE1Ni41MjA4NjExMzA3MjU0OCwxMDAuMzE1ODY2OTcxOTIzMjhMMTYxLjg1NjI4MzM1Njg3MDYsOTcuMDc5MDQwMzY2MzA3OTQiIG1hcmtlci1lbmQ9InVybCgjYXJyb3doZWFkMTQpIiBzdHlsZT0iZmlsbDpub25lIj48L3BhdGg+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3doZWFkMTQiIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iOSIgcmVmWT0iNSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBtYXJrZXJXaWR0aD0iOCIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8iPjxwYXRoIGQ9Ik0gMCAwIEwgMTAgNSBMIDAgMTAgeiIgY2xhc3M9ImFycm93aGVhZFBhdGgiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IDEsIDA7Ij48L3BhdGg+PC9tYXJrZXI+PC9kZWZzPjwvZz48ZyBjbGFzcz0iZWRnZVBhdGggTFMtQyBMRS1FIiBpZD0iTC1DLUUiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PHBhdGggY2xhc3M9InBhdGgiIGQ9Ik0yNTEuNTQ2ODc1LDcyTDI1NS43MTM1NDE2NjY2NjY2Niw3MkMyNTkuODgwMjA4MzMzMzMzMyw3MiwyNjguMjEzNTQxNjY2NjY2Nyw3MiwyNzYuNTQ2ODc1LDcyQzI4NC44ODAyMDgzMzMzMzMzLDcyLDI5My4yMTM1NDE2NjY2NjY3LDcyLDI5Ny4zODAyMDgzMzMzMzMzLDcyTDMwMS41NDY4NzUsNzIiIG1hcmtlci1lbmQ9InVybCgjYXJyb3doZWFkMTUpIiBzdHlsZT0iZmlsbDpub25lIj48L3BhdGg+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3doZWFkMTUiIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iOSIgcmVmWT0iNSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBtYXJrZXJXaWR0aD0iOCIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8iPjxwYXRoIGQ9Ik0gMCAwIEwgMTAgNSBMIDAgMTAgeiIgY2xhc3M9ImFycm93aGVhZFBhdGgiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IDEsIDA7Ij48L3BhdGg+PC9tYXJrZXI+PC9kZWZzPjwvZz48L2c+PGcgY2xhc3M9ImVkZ2VMYWJlbHMiPjxnIGNsYXNzPSJlZGdlTGFiZWwiIHRyYW5zZm9ybT0iIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkiIGNsYXNzPSJsYWJlbCI+PHJlY3Qgcng9IjAiIHJ5PSIwIiB3aWR0aD0iMCIgaGVpZ2h0PSIwIj48L3JlY3Q+PGZvcmVpZ25PYmplY3Qgd2lkdGg9IjAiIGhlaWdodD0iMCI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPjxzcGFuIGlkPSJMLUwtQS1DIiBjbGFzcz0iZWRnZUxhYmVsIEwtTFMtQScgTC1MRS1DIj48L3NwYW4+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PGcgY2xhc3M9ImVkZ2VMYWJlbCIgdHJhbnNmb3JtPSIiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIgY2xhc3M9ImxhYmVsIj48cmVjdCByeD0iMCIgcnk9IjAiIHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjwvcmVjdD48Zm9yZWlnbk9iamVjdCB3aWR0aD0iMCIgaGVpZ2h0PSIwIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+PHNwYW4gaWQ9IkwtTC1CLUMiIGNsYXNzPSJlZGdlTGFiZWwgTC1MUy1CJyBMLUxFLUMiPjwvc3Bhbj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjwvZz48ZyBjbGFzcz0iZWRnZUxhYmVsIiB0cmFuc2Zvcm09IiIgc3R5bGU9Im9wYWNpdHk6IDE7Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIiBjbGFzcz0ibGFiZWwiPjxyZWN0IHJ4PSIwIiByeT0iMCIgd2lkdGg9IjAiIGhlaWdodD0iMCI+PC9yZWN0Pjxmb3JlaWduT2JqZWN0IHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij48c3BhbiBpZD0iTC1MLUMtRSIgY2xhc3M9ImVkZ2VMYWJlbCBMLUxTLUMnIEwtTEUtRSI+PC9zcGFuPjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjwvZz48ZyBjbGFzcz0ibm9kZXMiPjxnIGNsYXNzPSJub2RlIGRlZmF1bHQiIGlkPSJmbG93Y2hhcnQtQS02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ni40MjE4NzUsMjcuNSkiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PHJlY3Qgcng9IjUiIHJ5PSI1IiB4PSItNDguNDIxODc1IiB5PSItMTkuNSIgd2lkdGg9Ijk2Ljg0Mzc1IiBoZWlnaHQ9IjM5IiBjbGFzcz0ibGFiZWwtY29udGFpbmVyIj48L3JlY3Q+PGcgY2xhc3M9ImxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzguNDIxODc1LC05LjUpIj48Zm9yZWlnbk9iamVjdCB3aWR0aD0iNzYuODQzNzUiIGhlaWdodD0iMTkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij5wcml2YXRlS2V5PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9nPjxnIGNsYXNzPSJub2RlIGRlZmF1bHQiIGlkPSJmbG93Y2hhcnQtQy03IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDMuMTk1MzEyNSw3MikiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PGNpcmNsZSB4PSItNDguMzUxNTYyNSIgeT0iLTE5LjUiIHI9IjQ4LjM1MTU2MjUiIGNsYXNzPSJsYWJlbC1jb250YWluZXIiPjwvY2lyY2xlPjxnIGNsYXNzPSJsYWJlbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM4LjM1MTU2MjUsLTkuNSkiPjxmb3JlaWduT2JqZWN0IHdpZHRoPSI3Ni43MDMxMjUiIGhlaWdodD0iMTkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij5JbXBvcnQgRElEPC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9nPjxnIGNsYXNzPSJub2RlIGRlZmF1bHQiIGlkPSJmbG93Y2hhcnQtQi04IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ni40MjE4NzUsMTE2LjUpIiBzdHlsZT0ib3BhY2l0eTogMTsiPjxyZWN0IHJ4PSI1IiByeT0iNSIgeD0iLTQ1Ljk2MDkzNzUiIHk9Ii0xOS41IiB3aWR0aD0iOTEuOTIxODc1IiBoZWlnaHQ9IjM5IiBjbGFzcz0ibGFiZWwtY29udGFpbmVyIj48L3JlY3Q+PGcgY2xhc3M9ImxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzUuOTYwOTM3NSwtOS41KSI+PGZvcmVpZ25PYmplY3Qgd2lkdGg9IjcxLjkyMTg3NSIgaGVpZ2h0PSIxOSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPk1uZW1vbmljPC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9nPjxnIGNsYXNzPSJub2RlIGRlZmF1bHQiIGlkPSJmbG93Y2hhcnQtRS0xMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzUzLjk4NDM3NSw3MikiIHN0eWxlPSJvcGFjaXR5OiAxOyI+PHJlY3Qgcng9IjUiIHJ5PSI1IiB4PSItNTIuNDM3NSIgeT0iLTE5LjUiIHdpZHRoPSIxMDQuODc1IiBoZWlnaHQ9IjM5IiBjbGFzcz0ibGFiZWwtY29udGFpbmVyIj48L3JlY3Q+PGcgY2xhc3M9ImxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIuNDM3NSwtOS41KSI+PGZvcmVpZ25PYmplY3Qgd2lkdGg9Ijg0Ljg3NSIgaGVpZ2h0PSIxOSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPkRJRCBJZGVudGl0eTwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="}}]);