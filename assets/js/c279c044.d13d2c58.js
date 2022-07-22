"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const o={sidebar_label:"Create a Universal Profile",sidebar_position:1},l="Create a Universal Profile",i={unversionedId:"guides/universal-profile/create-profile",id:"guides/universal-profile/create-profile",title:"Create a Universal Profile",description:'A complete "ready to use" JS file is available at the end in the Final Code section.',source:"@site/docs/guides/universal-profile/create-profile.md",sourceDirName:"guides/universal-profile",slug:"/guides/universal-profile/create-profile",permalink:"/guides/universal-profile/create-profile",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/universal-profile/create-profile.md",tags:[],version:"current",lastUpdatedAt:1657884286,formattedLastUpdatedAt:"Jul 15, 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Create a Universal Profile",sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Getting Started",permalink:"/guides/getting-started"},next:{title:"Read Profile Data",permalink:"/guides/universal-profile/read-profile-data"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Owned Contracts",id:"owned-contracts",level:3},{value:"Contracts Overview",id:"contracts-overview",level:3},{value:"Setup",id:"setup",level:2},{value:"Step 1 - Create an EOA",id:"step-1---create-an-eoa",level:2},{value:"Step 2 - Get some LYX",id:"step-2---get-some-lyx",level:2},{value:"Step 3 - Create our Universal Profile",id:"step-3---create-our-universal-profile",level:2},{value:"3.1 - Load our EOA",id:"31---load-our-eoa",level:3},{value:"3.2 - Setup the lsp-factory.js",id:"32---setup-the-lsp-factoryjs",level:3},{value:"3.3 - Deploy our Universal Profile",id:"33---deploy-our-universal-profile",level:3},{value:"Visualize our new Universal Profile",id:"visualize-our-new-universal-profile",level:2},{value:"Congratulations \ud83e\udd73",id:"congratulations-",level:2},{value:"Final Code",id:"final-code",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-universal-profile"},"Create a Universal Profile"),(0,r.kt)("admonition",{title:"Recommendation",type:"success"},(0,r.kt)("p",{parentName:"admonition"},"A complete ",(0,r.kt)("em",{parentName:"p"},'"ready to use"')," JS file is available at the end in the ",(0,r.kt)("a",{parentName:"p",href:"#final-code"},(0,r.kt)("strong",{parentName:"a"},"Final Code"))," section.")),(0,r.kt)("p",null,"In this guide, we will learn how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create a Universal Profile."),(0,r.kt)("li",{parentName:"ul"},"see our new Universal Profile on ",(0,r.kt)("a",{parentName:"li",href:"https://universalprofile.cloud"},"universalprofile.cloud"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Universal Profile example on universalprofile.cloud",src:n(4980).Z,width:"1433",height:"894"})),(0,r.kt)("p",null,"We will use the ",(0,r.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/universal-profile"},"lsp-factory.js")," library to create a Universal Profile in ",(0,r.kt)("strong",{parentName:"p"},"less than 50 lines of code!")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h3",{id:"owned-contracts"},"Owned Contracts"),(0,r.kt)("p",null,"A Universal Profile is an ",(0,r.kt)("strong",{parentName:"p"},"owned")," smart contract. Ownership means that such a contract has a separate ",(0,r.kt)("strong",{parentName:"p"},"owner"),"."),(0,r.kt)("p",null,"The Contract's owner is a blockchain ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," that can represent anything, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"one or multiple Externally Owned Accounts (EOAs),"),(0,r.kt)("li",{parentName:"ul"},"a multi-sig wallet, or"),(0,r.kt)("li",{parentName:"ul"},"an other smart contract that can represent anything (a DAO, a DEX, etc...).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Universal Profile smart contract: ownership diagram",src:n(1121).Z,width:"1434",height:"697"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more details, see ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-173"},"EIP-173: Contract Ownership Standard"))),(0,r.kt)("p",null,"With the ",(0,r.kt)("strong",{parentName:"p"},"Ownable")," design pattern, a contract can be designed with ",(0,r.kt)("em",{parentName:"p"},"functionalities that only the owner can perform"),". The design pattern gives the contract owner more control and privileges."),(0,r.kt)("p",null,"In the context of Universal Profile, ",(0,r.kt)("em",{parentName:"p"},"reading data from the contract storage can be done by anyone"),". But ",(0,r.kt)("strong",{parentName:"p"},"only the owner can"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setData(...)")," = add, edit or remove data from the ",(0,r.kt)("a",{parentName:"li",href:"../../standards/universal-profile/lsp0-erc725account#erc725y---generic-key-value-store"},"ERC725Y")," storage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"execute(...)")," = transferring LYX to addresses, calling other contracts, or create and deploy new contracts (see ",(0,r.kt)("a",{parentName:"li",href:"../../standards/universal-profile/lsp0-erc725account#erc725x---generic-executor"},"ERC725X")," executor)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transferOwnership(...)")," = make an address be the new owner of the Universal Profile.")),(0,r.kt)("p",null,"In this guide, our Universal Profile's owner will be a contract called a ",(0,r.kt)("strong",{parentName:"p"},"Key Manager"),". The ",(0,r.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp6-key-manager"},"Key Manager")," is a smart contract that enables granting specific permissions to ",(0,r.kt)("inlineCode",{parentName:"p"},"addresses"),", so that they can interact with the Universal Profile. For example, transferring LYX on behalf of the Universal Profile."),(0,r.kt)("admonition",{title:"Learn More",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can implement any complex ownership structure (and fine-grained control) on top of Universal Profiles. The structure includes having a UP owned and controlled by:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"one or multiple EOAs,"),(0,r.kt)("li",{parentName:"ul"},"one or multiple other smart contracts, or"),(0,r.kt)("li",{parentName:"ul"},"a mixture of both.")),(0,r.kt)("p",{parentName:"admonition"},"For more details, see ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6 - Key Manager Standard"),".")),(0,r.kt)("h3",{id:"contracts-overview"},"Contracts Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Universal Profile: overview of deployed contracts",src:n(845).Z,width:"850",height:"399"})),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/getting-started"},"lsp-factory.js")," library will help us quickly deploy and set up a Universal Profile with just a few lines of code."),(0,r.kt)("p",null,"Under the hood, lsp-factory.js performs the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy the Universal Profile contracts:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/standards/universal-profile/lsp0-erc725account"},"Universal Profile")," (UP) is the core smart contract representing a Universal Profile."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/standards/universal-profile/lsp6-key-manager"},"Key Manager")," (KM) is the contract that acts as the ",(0,r.kt)("strong",{parentName:"li"},"owner of a Universal Profile")," ",(0,r.kt)("br",null)," to enable other addresses to interact with the UP."))),(0,r.kt)("li",{parentName:"ol"},"Link a previously deployed ",(0,r.kt)("a",{parentName:"li",href:"/standards/universal-profile/lsp1-universal-receiver-delegate"},"Universal Receiver Delegate")," (URD) smart contract with the deployed UP. The URD reacts to events, such as tokens received or transferred."),(0,r.kt)("li",{parentName:"ol"},"Set all the permissions for provided EOA addresses so that they can act on the UP.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u27a1\ufe0f ","\xa0"," ",(0,r.kt)("a",{parentName:"p",href:"../../tools/lsp-factoryjs/getting-started"},"See our lsp-factory.js docs for more details"))),(0,r.kt)("admonition",{title:"Learn More",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The figure above is our default setup for Universal Profile. However, ",(0,r.kt)("em",{parentName:"p"},"using a Key Manager as an owner is optional"),".",(0,r.kt)("br",null),"\nYou can create a Universal Profile without a Key Manager (or a Universal Receiver Delegate linked to it).")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Before getting started, we will create a new project folder to write all the JavaScript code for this tutorial. ",(0,r.kt)("br",null),"\nOpen a terminal, then create and open a new project folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir myUP\ncd myUP\n")),(0,r.kt)("p",null,"Afterward, we have to install all the tools and libraries we need for this tutorial. ",(0,r.kt)("br",null),"\nCopy and paste the command below in your terminal to install these as npm dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install web3 @lukso/lsp-factory.js --save\n")),(0,r.kt)("h2",{id:"step-1---create-an-eoa"},"Step 1 - Create an EOA"),(0,r.kt)("admonition",{title:"Notice",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You should do this step in a ",(0,r.kt)("strong",{parentName:"p"},"temporary file"),".")),(0,r.kt)("p",null,"As described in the introduction, our first step is to create an EOA that will be used to control our Universal Profile."),(0,r.kt)("p",null,"We can easily create an EOA using the ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.5.2/web3-eth-accounts.html#create"},(0,r.kt)("inlineCode",{parentName:"a"},"web3.eth.accounts.create()"))," method from web3.js."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instructions:")," ",(0,r.kt)("strong",{parentName:"p"},"create a temporary file")," and add the code snippet below. It will generate an object that contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a private key (32 bytes / 64 characters long),"),(0,r.kt)("li",{parentName:"ul"},"an address (20 bytes / 40 characters long), and"),(0,r.kt)("li",{parentName:"ul"},"some singing methods like ",(0,r.kt)("inlineCode",{parentName:"li"},"sign"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="create-eoa.js (temporary file)"',title:'"create-eoa.js',"(temporary":!0,'file)"':!0},'const Web3 = require(\'web3\');\nconst web3 = new Web3();\n\nconst myEOA = web3.eth.accounts.create();\nconsole.log(myEOA);\n\n/**\n{\n  address: "0x...",\n  privateKey: "0x...",\n  signTransaction: function(tx){...},\n  sign: function(data){...},\n  encrypt: function(password){...}\n}\n*/\n')),(0,r.kt)("p",null,"Run the script above with Node.js to generate and display your EOA private key and address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node create-eoa.js\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.5.2/web3-eth-accounts.html#"},"Web3.js docs")," for more infos on creating an EOA")),(0,r.kt)("h2",{id:"step-2---get-some-lyx"},"Step 2 - Get some LYX"),(0,r.kt)("p",null,"After creating an EOA that will control our Universal Profile in ",(0,r.kt)("strong",{parentName:"p"},"Step 1"),", we will need to fund our address with some test LYX (the native cryptocurrency of the LUKSO blockchain). You can obtain some free test LYX via the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://faucet.l14.lukso.network/"},"L14 Faucet")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instructions:")," visit the faucet website, paste your above-generated address into the input field and ",(0,r.kt)("em",{parentName:"p"},"request 5 LYX"),"."),(0,r.kt)("p",null,"\u27a1\ufe0f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://faucet.l14.lukso.network/"},"LUKSO L14 Faucet Website"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"L14 Faucet screenshot",src:n(3779).Z,width:"500",height:"313"})),(0,r.kt)("p",null,"We will look up our address balance in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://blockscout.com/lukso/l14"},"LUKSO L14 Block Explorer"))," to ensure we have received our test LYX."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instructions:")," go to the LUKSO L14 Block Explorer, and search your pasted address at the top right corner.",(0,r.kt)("br",null)," You should see 5 LYX next to the ",(0,r.kt)("em",{parentName:"p"},"Balance")," field."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LUKSO L14 Network Block Explorer (screenshot)",src:n(1351).Z,width:"482",height:"415"})),(0,r.kt)("h2",{id:"step-3---create-our-universal-profile"},"Step 3 - Create our Universal Profile"),(0,r.kt)("admonition",{title:"Notice",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You should do the rest of this tutorial in a ",(0,r.kt)("strong",{parentName:"p"},"new file (",(0,r.kt)("inlineCode",{parentName:"strong"},"main.js"),")"),".")),(0,r.kt)("p",null,"Now that we have created our EOA, we are ready to create our first Universal Profile."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instructions:")," create a ",(0,r.kt)("strong",{parentName:"p"},"new file"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js")," (it will contain the main runtime script to create our Universal Profile)."),(0,r.kt)("h3",{id:"31---load-our-eoa"},"3.1 - Load our EOA"),(0,r.kt)("p",null,"We will start by loading our EOA in our main JS file so that we can use it to deploy our Universal Profile."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instructions:")," import the private key that you created in ",(0,r.kt)("strong",{parentName:"p"},"step 1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"const Web3 = require('web3');\nconst web3 = new Web3();\n\nconst PRIVATE_KEY = '0x...'; // your EOA private key (created in step 1)\nconst myEOA = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);\n\n/**\n{\n  address: \"0x...\",\n  privateKey: \"0x...\",\n  signTransaction: function(tx){...},\n  sign: function(data){...},\n  encrypt: function(password){...}\n}\n*/\n")),(0,r.kt)("admonition",{title:"Never expose your private key!",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Your private key is what enables you to control your EOA. Therefore, it should ",(0,r.kt)("strong",{parentName:"p"},"NEVER")," be exposed."),(0,r.kt)("p",{parentName:"admonition"},"For simplicity in this tutorial, we load the EOA using a hardcoded private key (as a literal string).",(0,r.kt)("br",null),"\nHowever, your private key should never be hardcoded in your code."),(0,r.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"ALWAYS ensure that your private key is stored securely")," and never exposed.")),(0,r.kt)("h3",{id:"32---setup-the-lsp-factoryjs"},"3.2 - Setup the lsp-factory.js"),(0,r.kt)("p",null,"The next step is to import and set up our lsp-factory.js tool. It will give us access to a ",(0,r.kt)("inlineCode",{parentName:"p"},".deploy(...)")," method that we will use to create our Universal Profile."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instructions:")," use the code snippet below to set up the lsp-factory.js."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"const { LSPFactory } = require('@lukso/lsp-factory.js');\n\n// Step 3.1 - Load our EOA\nconst PRIVATE_KEY = '0x...'; // add the private key of your EOA here (created in Step 1)\nconst myEOA = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);\n\n// initialize the LSPFactory with the L14 chain RPC endpoint, chainId and your EOA's private key which will deploy the UP smart contracts\nconst lspFactory = new LSPFactory('https://rpc.l14.lukso.network', {\n  deployKey: PRIVATE_KEY,\n  chainId: 22,\n});\n")),(0,r.kt)("h3",{id:"33---deploy-our-universal-profile"},"3.3 - Deploy our Universal Profile"),(0,r.kt)("p",null,"The final step is to deploy our UP by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"lspFactory.UniversalProfile.deploy(...)"),". This method will deploy and set up the three main contracts shown in the ",(0,r.kt)("a",{parentName:"p",href:"#contracts-overview"},"architecture diagram above"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," function takes an object as an argument that contains two elements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"controllerAddresses"),": the EOA address(es) that we will use to control our UP."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lsp3Profile"),": an object that represents your ",(0,r.kt)("a",{parentName:"li",href:"../../standards/universal-profile/lsp3-universal-profile-metadata"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP3Profile")," Metadata"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We keep our ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP3Profile")," metadata simple in this tutorial. But you can easily add more details about your UP in this object such as ",(0,r.kt)("inlineCode",{parentName:"p"},"profileImage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundImage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"avatar"),". Read how to do this with lsp-factory ",(0,r.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/universal-profile#setting-images-in-lsp3metadata"},"here"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"const { LSPFactory } = require('@lukso/lsp-factory.js');\n\n// Step 3.1 - Load our EOA\n// ...\n\n// Step 3.2 - Setup the lsp-factory\n// ...\n\n// Step 3.3 - Deploy our Universal Profile\nasync function createUniversalProfile() {\n  const deployedContracts = await lspFactory.UniversalProfile.deploy({\n    controllerAddresses: [myEOA.address], // our EOA that will be controlling the UP\n    lsp3Profile: {\n      name: 'My Universal Profile',\n      description: 'My Cool Universal Profile',\n      tags: ['Public Profile'],\n      links: [\n        {\n          title: 'My Website',\n          url: 'https://my-website.com',\n        },\n      ],\n    },\n  });\n\n  return deployedContracts;\n}\n\ncreateUniversalProfile().then((deployedContracts) => {\n  console.log(deployedContracts);\n});\n\n/**\n{\n  LSP0ERC725Account: {\n    address: '0x...',\n    receipt: {\n      to: null,\n      from: '0x...',\n      contractAddress: '0x...',\n      blockNumber: ...,\n      transactionHash: '0x...',\n      gasUsed: [BigNumber],\n      blockHash: '0x...',\n      ...\n    }\n  },\n  LSP6KeyManager: {\n    address: '0x646e989A0840CE4c3bac39d535Af736db2371107',\n    receipt: {\n      ...\n    }\n  },\n}\n */\n")),(0,r.kt)("admonition",{title:"Learn more",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Adding more details")," to our Universal Profile (",(0,r.kt)("em",{parentName:"p"},"e.g., links, profile images, background images"),") will be ",(0,r.kt)("strong",{parentName:"p"},"our next tutorial!")," \ud83c\udfa8")),(0,r.kt)("h2",{id:"visualize-our-new-universal-profile"},"Visualize our new Universal Profile"),(0,r.kt)("p",null,"If the deployment is successful, we can access the address of our newly created Universal Profile from the returned value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"async function createUniversalProfile() {\n  const deployedContracts = await lspFactory.UniversalProfile.deploy({\n    // deployment details omitted for brevity\n    // see Step 3.3 above\n  });\n\n  const myUPAddress = deployedContracts.LSP0ERC725Account.address;\n  console.log('my Universal Profile address: ', myUPAddress);\n  // my Universal Profile address: 0x...\n\n  return deployedContracts;\n}\n\ncreateUniversalProfile();\n\n// my Universal Profile address: 0xFD296cCDB97C605bfdE514e9810eA05f421DEBc2\n")),(0,r.kt)("p",null,"We can now visualize our UP on the ",(0,r.kt)("a",{parentName:"p",href:"https://universalprofile.cloud"},"universalprofile.cloud")," website by adding the address of the deployed UP in the URL, after the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," (slash), as follow:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://universalprofile.cloud/%7Byour-up-address%7D"},"https://universalprofile.cloud/{your-up-address}"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Universal Profile example on universalprofile.cloud",src:n(4980).Z,width:"1433",height:"894"})),(0,r.kt)("p",null,"You can also see the contracts created by the lsp-factory.js library on the LUKSO L14 Block explorer:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://blockscout.com/lukso/l14/address/%7Byour-eoa-address%7D/transactions"},"https://blockscout.com/lukso/l14/address/{your-eoa-address}/transactions"))),(0,r.kt)("p",null,"The figure below describes each transaction performed by the lsp-factory.js. It also shows how transactions ",(0,r.kt)("br",null)," are mapped to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#contracts-overview"},"Contracts Overview"))," diagram introduced at the beginning of this guide."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"lsp-factory.js: contract deployed on L14 and transactions flow",src:n(9736).Z,width:"1436",height:"696"})),(0,r.kt)("h2",{id:"congratulations-"},"Congratulations \ud83e\udd73"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You have successfully created your first Universal Profile!")),(0,r.kt)("p",null,"\u27a1\ufe0f Continue with the following tutorial to learn ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/guides/universal-profile/edit-profile"},"How to edit your Universal Profile")),"."),(0,r.kt)("p",null,"\u2b07\ufe0f Look a the code snippet below to help you debug."),(0,r.kt)("h2",{id:"final-code"},"Final Code"),(0,r.kt)("p",null,"Below is the complete code snippet of this guide, with all the steps compiled together."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="create-eoa.js"',title:'"create-eoa.js"'},'const Web3 = require(\'web3\');\nconst web3 = new Web3();\n\nconst myEOA = web3.eth.accounts.create();\nconsole.log(myEOA);\n\n/**\n{\n  address: "0x...",\n    privateKey: "0x...",\n    signTransaction: function(tx){...},\n    sign: function(data){...},\n    encrypt: function(password){...}\n}\n*/\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"const Web3 = require('web3');\nconst { LSPFactory } = require('@lukso/lsp-factory.js');\n\nconst web3 = new Web3();\n\n// Step 3.1 - Load our Externally Owned Account (EOA)\nconst PRIVATE_KEY = '0x...'; // add the private key of your EOA here (created in Step 1)\nconst myEOA = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);\n\n// Step 3.2\n// Initialize the LSPFactory with the L14 RPC endpoint and your EOA's private key, which will deploy the UP smart contracts\nconst lspFactory = new LSPFactory('https://rpc.l14.lukso.network', {\n  deployKey: PRIVATE_KEY,\n  chainId: 22,\n});\n\n// Step 3.3 - Deploy our Universal Profile\nasync function createUniversalProfile() {\n  const deployedContracts = await lspFactory.UniversalProfile.deploy({\n    controllerAddresses: [myEOA.address], // our EOA that will be controlling the UP\n    lsp3Profile: {\n      name: 'My Universal Profile',\n      description: 'My Cool Universal Profile',\n      tags: ['Public Profile'],\n      links: [\n        {\n          title: 'My Website',\n          url: 'https://my-website.com',\n        },\n      ],\n    },\n  });\n\n  const myUPAddress = deployedContracts.LSP0ERC725Account.address;\n  console.log('my Universal Profile address: ', myUPAddress);\n\n  return deployedContracts;\n}\n\ncreateUniversalProfile();\n\n// my Universal Profile address: 0xFD296cCDB97C605bfdE514e9810eA05f421DEBc2\n")))}d.isMDXComponent=!0},3779:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/L14-faucet-d97230cc99f1c1d4e2ff8b6d10857f93.png"},1351:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explorer-balance-cdcdf07e35e4f98915d18601c8187634.png"},9736:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lsp-factory-deployments-explained-98b7b836b45ba011ae50578f70efdd33.jpeg"},4980:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/my-up-6aea31ee2648b362693d8f58f4818fc5.png"},845:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/universal-profile-overview-68b414973567b489be008e994d39dab7.jpeg"},1121:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/universal-profile-ownership-ca7ad08545c5b3ef995ff1eb4d11982b.jpeg"}}]);