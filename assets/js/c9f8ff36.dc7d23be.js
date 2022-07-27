"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5584],{3905:(e,s,r)=>{r.d(s,{Zo:()=>c,kt:()=>u});var t=r(7294);function n(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function a(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?a(Object(r),!0).forEach((function(s){n(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function i(e,s){if(null==e)return{};var r,t,n=function(e,s){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],s.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],s.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),d=function(e){var s=t.useContext(l),r=s;return e&&(r="function"==typeof e?e(s):o(o({},s),e)),r},c=function(e){var s=d(e.components);return t.createElement(l.Provider,{value:s},e.children)},p={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},m=t.forwardRef((function(e,s){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(r),u=n,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return r?t.createElement(h,o(o({ref:s},c),{},{components:r})):t.createElement(h,o({ref:s},c))}));function u(e,s){var r=arguments,n=s&&s.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var l in s)hasOwnProperty.call(s,l)&&(i[l]=s[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<a;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3099:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=r(3117),n=(r(7294),r(3905));const a={sidebar_label:"Get controller addresses",sidebar_position:2},o="Get controller addresses",i={unversionedId:"guides/key-manager/get-controllers",id:"guides/key-manager/get-controllers",title:"Get controller addresses",description:"In this guide, you will learn how to:",source:"@site/docs/guides/key-manager/get-controllers.md",sourceDirName:"guides/key-manager",slug:"/guides/key-manager/get-controllers",permalink:"/guides/key-manager/get-controllers",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/key-manager/get-controllers.md",tags:[],version:"current",lastUpdatedAt:1658908200,formattedLastUpdatedAt:"Jul 27, 2022",sidebarPosition:2,frontMatter:{sidebar_label:"Get controller addresses",sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Grant Permissions to 3rd parties",permalink:"/guides/key-manager/give-permissions"},next:{title:"Execute Relay Transactions",permalink:"/guides/key-manager/execute-relay-call"}},l={},d=[{value:"Setup",id:"setup",level:2},{value:"Step 1 - setup web3.js and erc725.js",id:"step-1---setup-web3js-and-erc725js",level:2},{value:"Step 2 - Get the list of controller addresses",id:"step-2---get-the-list-of-controller-addresses",level:2},{value:"Step 3 - Get permissions of each controllers",id:"step-3---get-permissions-of-each-controllers",level:2},{value:"3.1 - Retrieve controller&#39;s permissions",id:"31---retrieve-controllers-permissions",level:3},{value:"3.2 - Decode controller&#39;s permissions",id:"32---decode-controllers-permissions",level:3},{value:"Final Code",id:"final-code",level:2}],c={toc:d};function p(e){let{components:s,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,a,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-controller-addresses"},"Get controller addresses"),(0,n.kt)("p",null,"In this guide, you will learn how to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"retrieve all the addresses that have some permissions set on a Universal Profile,"),(0,n.kt)("li",{parentName:"ul"},"retrieve the permission of each of these ",(0,n.kt)("strong",{parentName:"li"},"controller addresses"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Get controller addresses",src:r(608).Z,width:"1365",height:"732"})),(0,n.kt)("p",null,"We will use the ",(0,n.kt)("a",{parentName:"p",href:"/tools/erc725js/getting-started"},(0,n.kt)("em",{parentName:"a"},"erc725.js"))," library to do this with just over 30 lines of code."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install erc725.js\n")),(0,n.kt)("h2",{id:"step-1---setup-web3js-and-erc725js"},"Step 1 - setup web3.js and erc725.js"),(0,n.kt)("p",null,"The first step is to set up both and ",(0,n.kt)("em",{parentName:"p"},"web3.js")," and ",(0,n.kt)("em",{parentName:"p"},"erc725.js"),", and connect to the LUKSO L16 network. We will also need the address of the Universal Profile that we want to get the controller addresses from."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { ERC725 } from '@erc725/erc725.js';\nimport LSP6Schema from '@erc725/erc725.js/schemas/LSP6KeyManager.json';\nimport Web3 from 'web3';\n\n// setup\nconst myUniversalProfileAddress = '0xC26508178c4D7d3Ad43Dcb9F9bb1fab9ceeD58B5';\nconst RPC_ENDPOINT = 'https://rpc.l16.lukso.network';\n\n// step 1 - setup erc725.js\nconst web3 = new Web3(RPC_ENDPOINT);\nconst erc725 = new ERC725(\n  LSP6Schema,\n  myUniversalProfileAddress,\n  web3.currentProvider,\n);\n")),(0,n.kt)("h2",{id:"step-2---get-the-list-of-controller-addresses"},"Step 2 - Get the list of controller addresses"),(0,n.kt)("p",null,"The next step is to retrieve the list of controller addresses. In other words, addresses with some permissions can interact with the Universal Profile."),(0,n.kt)("p",null,"All the controller addresses are listed under the data key ",(0,n.kt)("inlineCode",{parentName:"p"},"AddressPermissions[]"),". We can retrieve them by:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"querying the ",(0,n.kt)("inlineCode",{parentName:"li"},"AddressPermissions[]")," to get the array length and know ",(0,n.kt)("strong",{parentName:"li"},"how many controller addresses")," have some permissions on the UP."),(0,n.kt)("li",{parentName:"ol"},"querying each index of the ",(0,n.kt)("inlineCode",{parentName:"li"},"AddressPermissions[index]")," array to retrieve each address individually.")),(0,n.kt)("p",null,"Thanks to ",(0,n.kt)("em",{parentName:"p"},"erc725.js"),", we can do that very easily. The library will do both steps for us and will returns the full list of controller addresses."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// step 2 - get the list of addresses that have permissions on the Universal Profile\nconst result = await erc725.getData('AddressPermissions[]');\nconsole.log(result);\n\n// {\n//   key: '0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3',\n//   name: 'AddressPermissions[]',\n//   value: [\n//     '0x5F606b5b237623463a90F63230F9b929321dbCBa',\n//     '0xa1061408e55c971fD129eF5561dFB953d598dAD7'\n//   ]\n// }\n")),(0,n.kt)("h2",{id:"step-3---get-permissions-of-each-controllers"},"Step 3 - Get permissions of each controllers"),(0,n.kt)("p",null,"Getting the addresses of each controller is not enough. We need to retrieve the permissions of each of these controller address, so to know what they are allowed to do in our Universal Profile."),(0,n.kt)("p",null,"We can do this easily again with the ",(0,n.kt)("a",{parentName:"p",href:"../../tools/erc725js/classes/ERC725#getdata"},(0,n.kt)("inlineCode",{parentName:"a"},"getData(...)"))," and ",(0,n.kt)("a",{parentName:"p",href:"../../tools/erc725js/classes/ERC725#decodepermissions"},(0,n.kt)("inlineCode",{parentName:"a"},"decodePermissions(...)"))," functions from ",(0,n.kt)("em",{parentName:"p"},"erc725.js"),"."),(0,n.kt)("h3",{id:"31---retrieve-controllers-permissions"},"3.1 - Retrieve controller's permissions"),(0,n.kt)("p",null,"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"getData(...)")," with the data key ",(0,n.kt)("inlineCode",{parentName:"p"},"AddressPermissions:Permissions:<address>"),", we can pass the controller address as the dynamic part ",(0,n.kt)("inlineCode",{parentName:"p"},"<address>")," in the data key."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// step 3.1 - get the permissions of each address\nconst addressPermission = await erc725.getData({\n  keyName: 'AddressPermissions:Permissions:<address>',\n  dynamicKeyParts: address,\n});\nconsole.log(addressPermission);\n\n// {\n//   key: '0x4b80742de2bf82acb3630000a1061408e55c971fd129ef5561dfb953d598dad7',\n//   name: 'AddressPermissions:Permissions:a1061408e55c971fD129eF5561dFB953d598dAD7',\n//   value: '0x0000000000000000000000000000000000000000000000000000000000000008'\n// }\n")),(0,n.kt)("h3",{id:"32---decode-controllers-permissions"},"3.2 - Decode controller's permissions"),(0,n.kt)("p",null,"As you can see in step 3.1, the permission that we obtain for a controller address is still encoded in ",(0,n.kt)("inlineCode",{parentName:"p"},"bytes32")," as a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#BitArray"},(0,n.kt)("inlineCode",{parentName:"a"},"BitArray")),"."),(0,n.kt)("p",null,"In order to read the controller permissions in a human readable format, we can use the convenience function ",(0,n.kt)("a",{parentName:"p",href:"../../tools/erc725js/classes/ERC725#decodepermissions"},(0,n.kt)("inlineCode",{parentName:"a"},"decodePermissions(...)"))," from ",(0,n.kt)("em",{parentName:"p"},"erc725.js"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'// step 3.2 - decode the permission of each address\nconst decodedPermission = erc725.decodePermissions(addressPermission.value);\n\n// we use JSON.stringify to display the permission in a readable format\nconsole.log(\n  `decoded permission for ${address} = ` +\n    JSON.stringify(decodedPermission, null, 2),\n);\n\n// decoded permission for 0x5F606b5b237623463a90F63230F9b929321dbCBa = {\n//   "CHANGEOWNER": true,\n//   "CHANGEPERMISSIONS": true,\n//   "ADDPERMISSIONS": true,\n//   "SETDATA": true,\n//   "CALL": true,\n//   "STATICCALL": true,\n//   "DELEGATECALL": false,\n//   "DEPLOY": true,\n//   "TRANSFERVALUE": true,\n//   "SIGN": true,\n//   "SUPER_SETDATA": false,\n//   "SUPER_TRANSFERVALUE": true,\n//   "SUPER_CALL": true,\n//   "SUPER_STATICCALL": true,\n//   "SUPER_DELEGATECALL": false\n// }\n')),(0,n.kt)("h2",{id:"final-code"},"Final Code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { ERC725 } from '@erc725/erc725.js';\nimport LSP6Schema from '@erc725/erc725.js/schemas/LSP6KeyManager.json';\nimport Web3 from 'web3';\n\n// setup\nconst myUniversalProfileAddress = '0xC26508178c4D7d3Ad43Dcb9F9bb1fab9ceeD58B5';\nconst RPC_ENDPOINT = 'https://rpc.l16.lukso.network';\n\nconst web3 = new Web3(RPC_ENDPOINT);\n\n// step 1 - setup erc725.js\nconst erc725 = new ERC725(\n  LSP6Schema,\n  myUniversalProfileAddress,\n  web3.currentProvider,\n);\n\nasync function getPermissionedAddresses() {\n  // step 2 - get the list of addresses that have permissions on the Universal Profile\n  const result = await erc725.getData('AddressPermissions[]');\n\n  for (let ii = 0; ii < result.value.length; ii++) {\n    const address = result.value[ii];\n\n    // step 3.1 - get the permissions of each address\n    const addressPermission = await erc725.getData({\n      keyName: 'AddressPermissions:Permissions:<address>',\n      dynamicKeyParts: address,\n    });\n\n    // step 3.2 - decode the permission of each address\n    const decodedPermission = erc725.decodePermissions(addressPermission.value);\n\n    // we use JSON.stringify to display the permission in a readable format\n    console.log(\n      `decoded permission for ${address} = ` +\n        JSON.stringify(decodedPermission, null, 2),\n    );\n  }\n}\n\ngetPermissionedAddresses();\n")))}p.isMDXComponent=!0},608:(e,s,r)=>{r.d(s,{Z:()=>t});const t=r.p+"assets/images/lsp6-address-permissions-array-333057f247e72aaf03eda5d8b826f375.jpeg"}}]);