"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9044],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8871:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1.1,title:"Universal Profile"},s="Deploying Universal Profile",p={unversionedId:"tools/lsp-factoryjs/deployment/universal-profile",id:"tools/lsp-factoryjs/deployment/universal-profile",title:"Universal Profile",description:"Constructing LSP3 Metadata",source:"@site/docs/tools/lsp-factoryjs/deployment/universal-profile.md",sourceDirName:"tools/lsp-factoryjs/deployment",slug:"/tools/lsp-factoryjs/deployment/universal-profile",permalink:"/tools/lsp-factoryjs/deployment/universal-profile",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/deployment/universal-profile.md",tags:[],version:"current",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1,title:"Universal Profile"},sidebar:"toolsSidebar",previous:{title:"Reactive Deployment",permalink:"/tools/lsp-factoryjs/introduction/reactive-deployment"},next:{title:"NFT2.0 (LSP7, LSP8)",permalink:"/tools/lsp-factoryjs/deployment/nft"}},c=[{value:"Constructing LSP3 Metadata",id:"constructing-lsp3-metadata",children:[],level:2},{value:"Uploading LSP3 metadata to IPFS",id:"uploading-lsp3-metadata-to-ipfs",children:[],level:2},{value:"Deploy your UniversalProfile",id:"deploy-your-universalprofile",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-universal-profile"},"Deploying Universal Profile"),(0,a.kt)("h2",{id:"constructing-lsp3-metadata"},"Constructing LSP3 Metadata"),(0,a.kt)("p",null,"When deploying a Universal Profile you can specify your Universal Profile metadata using the ",(0,a.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," key."),(0,a.kt)("p",null,"This object contains your UP metadata."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const myUniversalProfileData = {\n  name: 'My Universal Profile',\n  description: 'My cool Universal Profile',\n  profileImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      // bytes32 hex string of the image hash\n      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',\n      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',\n    },\n  ],\n  backgroundImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      // bytes32 hex string of the image hash\n      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',\n      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',\n    },\n  ],\n  tags: ['Fashion', 'Design'],\n  links: [{ title: 'My Website', url: 'www.my-website.com' }],\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"File")," objects can also be passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"profileImage")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundImage")," fields to allow easy drag and drop of images from a user interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<input type="file" id="input">\n\n<script>\n    const myLocalFile = document.getElementById(\'input\').files[0];\n\n    const myUniversalProfileData = {\n        name: "My Universal Profile",\n        description: "My cool Universal Profile",\n        profileImage: myLocalFile,\n        backgroundImage: myLocalFile,\n        tags: [\'Fashion\', \'Design\'],\n        links: [{ title: "My Website", url: "www.my-website.com" }],\n    };\n<script/>\n')),(0,a.kt)("p",null,"If a ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," object is passed it will will automatically be uploaded to IPFS."),(0,a.kt)("h2",{id:"uploading-lsp3-metadata-to-ipfs"},"Uploading LSP3 metadata to IPFS"),(0,a.kt)("p",null,"If you wish to upload your LSP3 metadata before deploying you can do so using the static ",(0,a.kt)("inlineCode",{parentName:"p"},"uploadProfileData")," method. This uses the same ",(0,a.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," object schema defined above for ",(0,a.kt)("inlineCode",{parentName:"p"},"myUniversalProfileData"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const uploadResult = await lspFactory.LSP3UniversalProfile.uploadProfileData({\n  ...myUniversalProfileData,\n});\n\nconst myUniversalProfileIPFSUrl = uploadResult.url; // 'https://ipfs.lukso.network/ipfs/QmPzUfdKhY6vfcTNDnitwKnnpm5GqjYSmw9todNVmi4bqy'\n")),(0,a.kt)("h2",{id:"deploy-your-universalprofile"},"Deploy your UniversalProfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { LSPFactory } from '@lukso/lsp-factory.js';\n\nconst lspFactory = new LSPFactory('https://rpc.l14.lukso.network', {\n  '0x...',\n  22,\n});\n\nconst myContracts = await lspFactory.LSP3UniversalProfile.deploy({\n    controllingAccounts: ['0x...'],\n    lsp3Profile: myUniversalProfileIPFSUrl | myUniversalProfileData // LSP3 Metadata object or IPFS URL\n  });\n};\n")))}d.isMDXComponent=!0}}]);