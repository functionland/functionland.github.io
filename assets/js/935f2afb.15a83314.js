"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome","href":"/","docId":"welcome"},{"type":"category","label":"Fula API","items":[{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Running a Box locally","href":"/getting-started/box-setup","docId":"getting-started/box-setup"},{"type":"link","label":"Using Fula Samples","href":"/getting-started/using-samples","docId":"getting-started/using-samples"}],"collapsible":true,"collapsed":true,"href":"/getting-started"},{"type":"category","label":"Reference","items":[{"type":"link","label":"Client Instance","href":"/api/client-instance","docId":"api/client-instance"},{"type":"link","label":"Graph API","href":"/api/graph-api","docId":"api/graph-api"},{"type":"link","label":"File API","href":"/api/file-api","docId":"api/file-api"}],"collapsible":true,"collapsed":true,"href":"/reference-api"}],"collapsible":true,"collapsed":true,"href":"/api-intro"},{"type":"link","label":"Whitepaper","href":"/whitepaper/","docId":"whitepaper/whitepaper"},{"type":"category","label":"RFCs","items":[{"type":"category","label":"Security","items":[{"type":"link","label":"Decentralized Identity (DID)","href":"/RFCs/fula-sec/did","docId":"RFCs/fula-sec/did"},{"type":"link","label":"Two-way Encryption Mechanism","href":"/RFCs/fula-sec/encryption","docId":"RFCs/fula-sec/encryption"}],"collapsible":true,"collapsed":true,"href":"/RFCs/fula-sec"},{"type":"link","label":"Private Network","href":"/RFCs/private-network","docId":"RFCs/private-network"},{"type":"link","label":"Document Syncing","href":"/RFCs/document-syncing","docId":"RFCs/document-syncing"},{"type":"link","label":"Personal Data Reserve","href":"/RFCs/personal-data-reserve","docId":"RFCs/personal-data-reserve"}],"collapsible":true,"collapsed":true,"href":"/RFCs/rfc-process"},{"type":"category","label":"Blockchain","items":[{"type":"category","label":"Services","items":[{"type":"link","label":"Explorer","href":"/blockchain/Services/Explorer","docId":"blockchain/Services/Explorer"},{"type":"link","label":"Node","href":"/blockchain/Services/Node","docId":"blockchain/Services/Node"},{"type":"link","label":"BuildNode","href":"/blockchain/Services/BuildNode","docId":"blockchain/Services/BuildNode"},{"type":"link","label":"RunValidators","href":"/blockchain/Services/RunValidators","docId":"blockchain/Services/RunValidators"},{"type":"link","label":"Node API","href":"/blockchain/Services/NodeAPI","docId":"blockchain/Services/NodeAPI"},{"type":"link","label":"Proof Engine","href":"/blockchain/Services/ProofEngine","docId":"blockchain/Services/ProofEngine"},{"type":"link","label":"Status","href":"/blockchain/Services/Status","docId":"blockchain/Services/Status"}],"collapsible":true,"collapsed":true,"href":"/blockchain/services"},{"type":"category","label":"Recipes","items":[{"type":"link","label":"Account","href":"/blockchain/Recipes/Account","docId":"blockchain/Recipes/Account"},{"type":"link","label":"Asset","href":"/blockchain/Recipes/Asset","docId":"blockchain/Recipes/Asset"},{"type":"link","label":"Bag","href":"/blockchain/Recipes/Bag","docId":"blockchain/Recipes/Bag"},{"type":"link","label":"Bundle","href":"/blockchain/Recipes/Bundle","docId":"blockchain/Recipes/Bundle"},{"type":"link","label":"Challenges","href":"/blockchain/Recipes/Challenges","docId":"blockchain/Recipes/Challenges"},{"type":"link","label":"Claims","href":"/blockchain/Recipes/Claims","docId":"blockchain/Recipes/Claims"},{"type":"link","label":"Manifest","href":"/blockchain/Recipes/Manifest","docId":"blockchain/Recipes/Manifest"},{"type":"link","label":"Market","href":"/blockchain/Recipes/Market","docId":"blockchain/Recipes/Market"},{"type":"link","label":"Pool","href":"/blockchain/Recipes/Pool","docId":"blockchain/Recipes/Pool"}],"collapsible":true,"collapsed":true,"href":"/blockchain/recipes"}],"collapsible":true,"collapsed":true,"href":"/blockchain/blockchain-intro"}],"mvpSidebar":[{"type":"category","label":"MVP","items":[{"type":"category","label":"Fotos","items":[{"type":"link","label":"setup","href":"/mvp/fotos/setup","docId":"mvp/fotos/setup"},{"type":"link","label":"backup","href":"/mvp/fotos/backup","docId":"mvp/fotos/backup"},{"type":"link","label":"sharing","href":"/mvp/fotos/sharing","docId":"mvp/fotos/sharing"}],"collapsible":true,"collapsed":true,"href":"/mvp/fotos"},{"type":"category","label":"Pools","items":[{"type":"link","label":"provide storage","href":"/mvp/pools/storage-provide","docId":"mvp/pools/storage-provide"}],"collapsible":true,"collapsed":true,"href":"/mvp/pools"}],"collapsible":true,"collapsed":true,"href":"/mvp"}]},"docs":{"api-intro":{"id":"api-intro","title":"Fula API","description":"We designed Fula API to help you (a third-party, open-source developer) build other rich and compelling user experiences.","sidebar":"tutorialSidebar"},"api/client-instance":{"id":"api/client-instance","title":"Client Instance","description":"Fula client package provides a method createClient that returns client instance. You can use this object to call File and Data APIs.","sidebar":"tutorialSidebar"},"api/file-api":{"id":"api/file-api","title":"File API","description":"File API provides an interface-like object store for you to upload files and streams (eg. photos, videos or any type of document) and efficiently retrieve them for use in your web/mobile DApp.","sidebar":"tutorialSidebar"},"api/graph-api":{"id":"api/graph-api","title":"Graph API","description":"Graph API provides a graphql based interface for storing and querying structured graph. Decentralized application","sidebar":"tutorialSidebar"},"blockchain/blockchain-intro":{"id":"blockchain/blockchain-intro","title":"Blockchain Documentation","description":"Here you can find the documenation on blockchain API and Services","sidebar":"tutorialSidebar"},"blockchain/recipes":{"id":"blockchain/recipes","title":"Blockchain APIs","description":"Once you have the API up and running, these are the calls you can perform to interact with the Fula nodes.","sidebar":"tutorialSidebar"},"blockchain/Recipes/Account":{"id":"blockchain/Recipes/Account","title":"Account","description":"Create","sidebar":"tutorialSidebar"},"blockchain/Recipes/Asset":{"id":"blockchain/Recipes/Asset","title":"Asset","description":"Create Class","sidebar":"tutorialSidebar"},"blockchain/Recipes/Bag":{"id":"blockchain/Recipes/Bag","title":"Bag","description":"Register","sidebar":"tutorialSidebar"},"blockchain/Recipes/Bundle":{"id":"blockchain/Recipes/Bundle","title":"Bundle","description":"Register","sidebar":"tutorialSidebar"},"blockchain/Recipes/Challenges":{"id":"blockchain/Recipes/Challenges","title":"Challenges","description":"The Challenges were implemented to improve the security of the proof-engine and the claim of the Fula Tokens. The challenges consist of a series of random proof of storage of a manifest and they are made each cycle in the proof-engine, here:","sidebar":"tutorialSidebar"},"blockchain/Recipes/Claims":{"id":"blockchain/Recipes/Claims","title":"Claims","description":"Claim tokens","sidebar":"tutorialSidebar"},"blockchain/Recipes/Manifest":{"id":"blockchain/Recipes/Manifest","title":"Manifest","description":"Upload Manifest","sidebar":"tutorialSidebar"},"blockchain/Recipes/Market":{"id":"blockchain/Recipes/Market","title":"Market","description":"Create","sidebar":"tutorialSidebar"},"blockchain/Recipes/Pool":{"id":"blockchain/Recipes/Pool","title":"Pool","description":"Create","sidebar":"tutorialSidebar"},"blockchain/services":{"id":"blockchain/services","title":"Blockchain Services","description":"Node","sidebar":"tutorialSidebar"},"blockchain/Services/BuildNode":{"id":"blockchain/Services/BuildNode","title":"BuildNode","description":"1- Install Rust","sidebar":"tutorialSidebar"},"blockchain/Services/Explorer":{"id":"blockchain/Services/Explorer","title":"Explorer","description":"Install NodeJS","sidebar":"tutorialSidebar"},"blockchain/Services/Node":{"id":"blockchain/Services/Node","title":"Node","description":"Install OS dependencies and Rust","sidebar":"tutorialSidebar"},"blockchain/Services/NodeAPI":{"id":"blockchain/Services/NodeAPI","title":"Node API","description":"Install OS dependencies and Rust","sidebar":"tutorialSidebar"},"blockchain/Services/ProofEngine":{"id":"blockchain/Services/ProofEngine","title":"Proof Engine","description":"Install OS dependencies and Rust","sidebar":"tutorialSidebar"},"blockchain/Services/RunValidators":{"id":"blockchain/Services/RunValidators","title":"RunValidators","description":"A minimum of two validator nodes is required for the network to run.","sidebar":"tutorialSidebar"},"blockchain/Services/Status":{"id":"blockchain/Services/Status","title":"Status","description":"Install NodeJS","sidebar":"tutorialSidebar"},"components/WorkInProgress":{"id":"components/WorkInProgress","title":"WorkInProgress","description":"Please note: these instructions remain a work in progress as we continue to evolve, refine and perfect the Fula API.  Make sure to check back soon for more details!"},"design/encryption":{"id":"design/encryption","title":"encryption","description":"Current Process:"},"design/test":{"id":"design/test","title":"test","description":"this is a test"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"In order to start developing your own DApps on Fula, complete these two steps:","sidebar":"tutorialSidebar"},"getting-started/box-setup":{"id":"getting-started/box-setup","title":"Running a Box locally","description":"The easiest way to get your Box server running locally is to clone our repo and use docker.","sidebar":"tutorialSidebar"},"getting-started/fula-client":{"id":"getting-started/fula-client","title":"The Fula Client Library","description":"Fula client lets you connect your web application to the Box using libp2p. It helps DApp developers to use a Box as the back-end for their applications. You can use the File and Graph APIs to store and retrieve your data."},"getting-started/rpi-setup":{"id":"getting-started/rpi-setup","title":"Installing Box on Raspberry Pi OS","description":"Pre-requisites"},"getting-started/using-samples":{"id":"getting-started/using-samples","title":"Using Fula Samples","description":"All the Fula samples can be found in the Fula GitHub repo under examples.","sidebar":"tutorialSidebar"},"mvp":{"id":"mvp","title":"Minimum Valuable Product","description":"The following describes how the Fula network software will work from the network participant\'s perspective.","sidebar":"mvpSidebar"},"mvp/admin-reporting":{"id":"mvp/admin-reporting","title":"Admin Reporting & Alerts","description":""},"mvp/box-admin":{"id":"mvp/box-admin","title":"Box Admin","description":"After loading the Box Admin DApp."},"mvp/forgot-password":{"id":"mvp/forgot-password","title":"Forgot Password","description":"If I ever lose or forget my password."},"mvp/fotos":{"id":"mvp/fotos","title":"Fotos","description":"* setup","sidebar":"mvpSidebar"},"mvp/fotos/availability":{"id":"mvp/fotos/availability","title":"Fotos Availability","description":"Acceptance Criteria"},"mvp/fotos/backup":{"id":"mvp/fotos/backup","title":"Fotos Backup to Fula environment","description":"Acceptance Criteria","sidebar":"mvpSidebar"},"mvp/fotos/setup":{"id":"mvp/fotos/setup","title":"Fotos Setup","description":"Acceptance Criteria","sidebar":"mvpSidebar"},"mvp/fotos/sharing":{"id":"mvp/fotos/sharing","title":"Fotos Sharing","description":"Story","sidebar":"mvpSidebar"},"mvp/my-account":{"id":"mvp/my-account","title":"My Account","description":"On my account page."},"mvp/pools":{"id":"mvp/pools","title":"Pools","description":"* storage provide","sidebar":"mvpSidebar"},"mvp/pools/storage-provide":{"id":"mvp/pools/storage-provide","title":"Providing Storage","description":"Acceptance Criteria","sidebar":"mvpSidebar"},"mvp/privacy-dashboard":{"id":"mvp/privacy-dashboard","title":"privacy-dashboard","description":"* I can see all of my data and what DApps are creating/encrypting content."},"mvp/questions":{"id":"mvp/questions","title":"questions","description":"New Questions"},"mvp/technical-questions":{"id":"mvp/technical-questions","title":"technical questions","description":"Local Pools"},"mvp/unboxing":{"id":"mvp/unboxing","title":"Unboxing","description":"As a Box owner."},"reference-api":{"id":"reference-api","title":"Reference","description":"The Fula API includes the following:","sidebar":"tutorialSidebar"},"release/testnet-alpha":{"id":"release/testnet-alpha","title":"Protocol Testnet Alpha Pre-release","description":"Last updated:  July 29, 2022"},"RFCs/document-syncing":{"id":"RFCs/document-syncing","title":"Document Syncing","description":"- Start Date: 2022-03-24","sidebar":"tutorialSidebar"},"RFCs/fula-sec":{"id":"RFCs/fula-sec","title":"FULA Security Layer","description":"- Start Date: 2022-02-27","sidebar":"tutorialSidebar"},"RFCs/fula-sec/did":{"id":"RFCs/fula-sec/did","title":"Decentralized Identity (DID)","description":"- Start Date: 2022-02-27","sidebar":"tutorialSidebar"},"RFCs/fula-sec/encryption":{"id":"RFCs/fula-sec/encryption","title":"Two-way Encryption Mechanism","description":"- Start Date: 2022-02-27","sidebar":"tutorialSidebar"},"RFCs/personal-data-reserve":{"id":"RFCs/personal-data-reserve","title":"Personal Data Reserve","description":"- Start Date: 2022-03-18","sidebar":"tutorialSidebar"},"RFCs/private-network":{"id":"RFCs/private-network","title":"Private Network","description":"- Start Date: 2022-02-01","sidebar":"tutorialSidebar"},"RFCs/replication":{"id":"RFCs/replication","title":"Replication","description":"- Start Date: 2022-02-01"},"RFCs/rfc-process":{"id":"RFCs/rfc-process","title":"Requests for comments (RFCs)","description":"What is the RFC process?","sidebar":"tutorialSidebar"},"welcome":{"id":"welcome","title":"Welcome","description":"Functionland was founded on a core set of Web3 principles.  At the heart of these principles is a simple premise: We each have an inalienable right to own our own data.","sidebar":"tutorialSidebar"},"whitepaper/whitepaper":{"id":"whitepaper/whitepaper","title":"Whitepaper","description":"Functionland Whitepaper","sidebar":"tutorialSidebar"},"work_in_progress":{"id":"work_in_progress","title":"work_in_progress","description":"<span"}}}')}}]);