"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6281],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(a),f=i,g=m["".concat(s,".").concat(f)]||m[f]||c[f]||r;return a?n.createElement(g,l(l({ref:e},d),{},{components:a})):n.createElement(g,l({ref:e},d))}));function f(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7733:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={sidebar_position:4,title:"LSP8IdentifiableDigitalAsset"},s="LSP8IdentifiableDigitalAsset",p={unversionedId:"tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset",id:"tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset",title:"LSP8IdentifiableDigitalAsset",description:"deploy",source:"@site/docs/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset.md",sourceDirName:"tools/lsp-factoryjs/classes",slug:"/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset",permalink:"/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"LSP8IdentifiableDigitalAsset"},sidebar:"toolsSidebar",previous:{title:"LSP7DigitalAsset",permalink:"/tools/lsp-factoryjs/classes/lsp7-digital-asset"},next:{title:"Execute Transaction",permalink:"/tools/relayer-api/execute-transaction"}},d={},c=[{value:"deploy",id:"deploy",level:2},{value:"Parameters",id:"parameters",level:3},{value:"1. <code>digitalAssetProperties</code> - Object",id:"1-digitalassetproperties---object",level:4},{value:"2. <code>options</code> - Object (optional)",id:"2-options---object-optional",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Reactive LSP8 Digital Asset deployment Example",id:"reactive-lsp8-digital-asset-deployment-example",level:4}],m={toc:c};function f(t){var e=t.components,a=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp8identifiabledigitalasset"},"LSP8IdentifiableDigitalAsset"),(0,r.kt)("h2",{id:"deploy"},"deploy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"lspFactory.LSP8IdentifiableDigitalAsset.deploy(digitalAssetProperties [, options]);\n")),(0,r.kt)("p",null,"Deploys a mintable ",(0,r.kt)("a",{parentName:"p",href:"../../../standards/nft-2.0/LSP8-Identifiable-Digital-Asset"},"LSP8 Identifiable Digital Asset"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default LSPFactory deploys the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8Mintable.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"Mintable"))," implementation of LSP8 digital assets. To call the ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," function import the ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP8Mintable")," abi from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts"},"lsp-smart-contracts library"),"."))),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("h4",{id:"1-digitalassetproperties---object"},"1. ",(0,r.kt)("inlineCode",{parentName:"h4"},"digitalAssetProperties")," - Object"),(0,r.kt)("p",null,"Specify properties to be set on the LSP8 Digital Asset during deployment."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#digital-asset-properties"},(0,r.kt)("inlineCode",{parentName:"a"},"name"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the token. Passed to the LSP8 smart contract as a constructor parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#digital-asset-properties"},(0,r.kt)("inlineCode",{parentName:"a"},"symbol"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The symbol of the token. Passed to the LSP8 smart contract as a constructor parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#controller-address"},(0,r.kt)("inlineCode",{parentName:"a"},"controllerAddress"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The owner of the contract. Passed to the LSP8 smart contract constructor parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#digital-asset-metadata"},(0,r.kt)("inlineCode",{parentName:"a"},"digitalAssetMetadata"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object ","|"," String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4")," metadata to be attached to the smart contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#adding-lsp4-metadata"},(0,r.kt)("inlineCode",{parentName:"a"},"creators"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4")," metadata to be attached to the smart contract.")))),(0,r.kt)("h4",{id:"2-options---object-optional"},"2. ",(0,r.kt)("inlineCode",{parentName:"h4"},"options")," - Object (optional)"),(0,r.kt)("p",null,"Object which specifies how the LSP8 Digital Asset will be deployed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP8IdentifiableDigitalAsset"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Generic contract configuration object. Takes ",(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#version"},(0,r.kt)("inlineCode",{parentName:"a"},"version"))," and ",(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#version"},(0,r.kt)("inlineCode",{parentName:"a"},"deployProxy"))," parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#reactive-deployment"},(0,r.kt)("inlineCode",{parentName:"a"},"onDeployEvents"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pass ",(0,r.kt)("inlineCode",{parentName:"td"},"next"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"complete")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"error")," callback handlers to be executed as deployment events are fired. See ",(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/digital-asset#reactive-deployment"},(0,r.kt)("inlineCode",{parentName:"a"},"Reactive Deployment")),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/digital-asset#ipfs-upload-options"},(0,r.kt)("inlineCode",{parentName:"a"},"ipfsGateway"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String ","|"," Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An IPFS gateway URL or an object containing IPFS configuration options.")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can read more about the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," object specification on ",(0,r.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/digital-asset#deployment-configuration"},"its official page")))),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resolves to an object containing deployed contract details. Default return value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Observable")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An ",(0,r.kt)("a",{parentName:"td",href:"https://rxjs.dev/guide/observable"},"RxJS Observable"),". Returned if ",(0,r.kt)("inlineCode",{parentName:"td"},"deployReactive")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," inside ",(0,r.kt)("inlineCode",{parentName:"td"},"options")," object.")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"deployReactive")," flag can be set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," object to return an ",(0,r.kt)("a",{parentName:"p",href:"https://rxjs.dev/guide/observable"},"RxJS Observable")," of deployment events."))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying an LSP8 Identifiable Digital Asset"',title:'"Deploying',an:!0,LSP8:!0,Identifiable:!0,Digital:!0,'Asset"':!0},"await lspFactory.LSP8IdentifiableDigitalAsset.deploy({\n  name: 'My token',\n  symbol: 'TKN',\n  controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',\n  digitalAssetMetadata: {\n      description: \"Digital Asset\",\n      assets: [asset],\n      images: [image],\n      icon: icon,\n      links: [{ title: \"MyDigitalAsset\", url: \"my-asset.com\" }],\n  };\n});\n/**\n{\n  LSP8IdentifiableDigitalAsset: {\n    address: '0x336a4751a078Fe3f7af4ff2f194f7481f957b04a',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0x336a4751a078Fe3f7af4ff2f194f7481f957b04a',\n      transactionIndex: 0,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x7c7a8a2723bbdfd257f3bc0bd27edcf98d9d119f70971f80a6066449ea5922ae',\n      transactionHash: '0x05c791245a29b8cd2167bab41f56fbaf79d7a64814c1e161a2de352cead9c3fd',\n      logs: [],\n      blockNumber: 12028969,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  }\n}\n*/\n")),(0,r.kt)("h4",{id:"reactive-lsp8-digital-asset-deployment-example"},"Reactive LSP8 Digital Asset deployment Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Reactive LSP8 Identifiable Digital Asset"',title:'"Deploying',a:!0,Reactive:!0,LSP8:!0,Identifiable:!0,Digital:!0,'Asset"':!0},"await lspFactory.LSP8IdentifiableDigitalAsset.deploy(\n  {\n    name: 'My token',\n    symbol: 'TKN',\n    controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',\n  },\n  {\n    onDeployEvents: {\n      next: (deploymentEvent) => {\n        console.log(deploymentEvent);\n      },\n      error: (error) => {\n        console.error(error);\n      },\n      complete: (contracts) => {\n        console.log('Deployment Complete');\n        console.log(contracts.LSP8IdentifiableDigitalAsset);\n      },\n    },\n  },\n);\n\n/**\n{\n  type: 'PROXY_DEPLOYMENT',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY_DEPLOYMENT',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  status: 'COMPLETE',\n  contractAddress: '0x2cA038832c15E61b83d47414Eb53818a45e0E142',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'initialize(string,string,address)',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'initialize(string,string,address)',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'setData(bytes32[],bytes[])',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'setData(bytes32[],bytes[])',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  status: 'PENDING',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'transferOwnership(address)',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP8IdentifiableDigitalAsset',\n  functionName: 'transferOwnership(address)',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\nDeployment Complete\n{\n  address: '0x2cA038832c15E61b83d47414Eb53818a45e0E142',\n  receipt: {\n    ...\n  },\n}\n*/\n")))}f.isMDXComponent=!0}}]);