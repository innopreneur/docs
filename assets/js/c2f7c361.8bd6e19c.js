"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5021],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=p(a),u=r,c=k["".concat(s,".").concat(u)]||k[u]||m[u]||o;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},i="Become a validator",l={unversionedId:"networks/l16-testnet/validator",id:"networks/l16-testnet/validator",title:"Become a validator",description:"Before running validators on your node, make sure your node is running and working correctly. For more information, check the Run a node page.",source:"@site/docs/networks/l16-testnet/validator.md",sourceDirName:"networks/l16-testnet",slug:"/networks/l16-testnet/validator",permalink:"/networks/l16-testnet/validator",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l16-testnet/validator.md",tags:[],version:"current",lastUpdatedAt:1656589893,formattedLastUpdatedAt:"6/30/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"networksSidebar",previous:{title:"Run a node",permalink:"/networks/l16-testnet/run-node"},next:{title:"Backup and recovery",permalink:"/networks/l16-testnet/node-backup"}},s={},p=[{value:"Setup Validator",id:"setup-validator",level:2},{value:"Submit the transaction",id:"submit-the-transaction",level:2},{value:"Make a dry run first",id:"make-a-dry-run-first",level:3},{value:"Deposit your validators",id:"deposit-your-validators",level:3},{value:"Start your validator node",id:"start-your-validator-node",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Validator Node",id:"validator-node",level:3},{value:"Validator Keystore",id:"validator-keystore",level:3},{value:"Validator Key",id:"validator-key",level:3},{value:"Validator Key State",id:"validator-key-state",level:3},{value:"How Validator Keys are created",id:"how-validator-keys-are-created",level:2},{value:"An Example",id:"an-example",level:3},{value:"Node Setup Example",id:"node-setup-example",level:3},{value:"Need help?",id:"need-help",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"become-a-validator"},"Become a validator"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Before running validators on your node, make sure your node is running and working correctly. For more information, check the ",(0,r.kt)("a",{parentName:"p",href:"./run-node"},"Run a node")," page."))),(0,r.kt)("h2",{id:"setup-validator"},"Setup Validator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"lukso network validator setup\n")),(0,r.kt)("p",null,"This will create a key store and a transaction wallet. The purpose of the transaction wallet is to call and pay for the deposit transaction."),(0,r.kt)("p",null,"Check if the wallet has enough funds:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"lukso network validator describe\n")),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.l16.lukso.network"},"Faucet")," and paste the transaction wallet public address into the field and choose the amount of LYXt you wany yo receive."),(0,r.kt)("p",null,"Transfer ",(0,r.kt)("strong",{parentName:"p"},"enough")," (#validators x staking_amount ",(0,r.kt)("strong",{parentName:"p"},"+ extra LYXt to pay deposit fees"),") funds to the transaction wallet public's address."),(0,r.kt)("h2",{id:"submit-the-transaction"},"Submit the transaction"),(0,r.kt)("h3",{id:"make-a-dry-run-first"},"Make a dry run first"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lukso network validator deposit --dry\n")),(0,r.kt)("p",null,"This will give you the possibility to peek in what is going to happen without executing a transaction."),(0,r.kt)("h3",{id:"deposit-your-validators"},"Deposit your validators"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are 100% sure that everything is correct you can deposit your LYXt, you will lose all your LYXt if you made a mistake"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lukso network validator deposit\n")),(0,r.kt)("p",null,"It can take up to eight hours before your validator becomes active, but you can already start your validator in the meantime."),(0,r.kt)("p",null,"Once you deposited LYXt make sure to create a backup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lukso network validator backup\n")),(0,r.kt)("p",null,"Store the file ",(0,r.kt)("strong",{parentName:"p"},"node_recovery.json")," somewhere safe and offline."),(0,r.kt)("h2",{id:"start-your-validator-node"},"Start your validator node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lukso network start\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lukso network validator start\n")),(0,r.kt)("p",null,"Check the status of your validator, it can take up to 8 hours before your validators become active"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lukso network validator describe\n")),(0,r.kt)("p",null,"Make sure everything is working correctly by checking the stats pages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stats.execution.l16.lukso.network"},"Execution stats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stats.execution.l16.lukso.network"},"Consensus stats"))),(0,r.kt)("p",null,"You can also check your ",(0,r.kt)("a",{parentName:"p",href:"/networks/l16-testnet/l16-logs"},"logs"),"."),(0,r.kt)("h2",{id:"terminology"},"Terminology"),(0,r.kt)("h3",{id:"validator-node"},"Validator Node"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Validator Node")," is a combination of services and an underlying keystore that if run together are\nsyncing, validating and proposing blocks. In most cases it can be described as a directory that contains",(0,r.kt)("br",{parentName:"p"}),"\n","all necessary information to ",(0,r.kt)("em",{parentName:"p"},"run")," this node. At LUKSO the directory has the following structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"configs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"configs.yaml")," // configuration of consensus service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"genesis.json")," // configuration of execution service"))),(0,r.kt)("li",{parentName:"ul"},"data",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"execution_data")," // db of execution service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"consensus_data")," // db of consensus service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"validator_data")," // db of validator service"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"keystore"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"prysm/direct/account/all-accounts.keystore.json")," // keystore of valdiator keys"),(0,r.kt)("li",{parentName:"ul"},"..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password.txt")," // password of keystore"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"docker-compose.yaml")," // describes how to run the docker images"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"node_config.yaml")," // adjustable values on how to run the nodes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},".env")," // auto genrated file derived from ",(0,r.kt)("strong",{parentName:"li"},"node_config.yaml"))),(0,r.kt)("h3",{id:"validator-keystore"},"Validator Keystore"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Validator Keystore")," is a directory with private key in formats for the respective validator service\nversion (Teku, Lighthouse, Prysm,...). The keystore has a fixed number of keys. If you need to change\nthe number of keys you ",(0,r.kt)("strong",{parentName:"p"},"must")," create a new keystore. There is always ",(0,r.kt)("strong",{parentName:"p"},"one")," ",(0,r.kt)("strong",{parentName:"p"},"Validator Keystore")," for\none ",(0,r.kt)("strong",{parentName:"p"},"Validator Node")),(0,r.kt)("h3",{id:"validator-key"},"Validator Key"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Validator Key")," is a private key that can have an active balance and is used to sign attestations\nand proposed blocks. The key can have an arbitrary amount of staked LYX but it ",(0,r.kt)("strong",{parentName:"p"},"won't")," change the reward.\nIt is possible to deposit LYX multiple time to this validator key and that is important for the case the ",(0,r.kt)("strong",{parentName:"p"},"Validator Key")," missed duties and lost balance."),(0,r.kt)("h3",{id:"validator-key-state"},"Validator Key State"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Validator Key State")," is the state of one particular key. A ",(0,r.kt)("strong",{parentName:"p"},"Validator Keystore")," can have many\nkeys being in many states. When firstly created all the ",(0,r.kt)("strong",{parentName:"p"},"Validator Keys")," are in the state\nNOT_DEPOSITED. (NOTE: If the keystore was recreated the state my differ for some keys)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"State"),(0,r.kt)("th",{parentName:"tr",align:null},"Acitvated By"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NOT_DEPOSITED"),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"The keystore was created for the first time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PENDING"),(0,r.kt)("td",{parentName:"tr",align:null},"A deposit with ",(0,r.kt)("em",{parentName:"td"},"min staking amount")," was made"),(0,r.kt)("td",{parentName:"tr",align:null},"There is a proven stake deposited in the Deposit Contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACTIVE"),(0,r.kt)("td",{parentName:"tr",align:null},"The deposit was observed by the consensus network"),(0,r.kt)("td",{parentName:"tr",align:null},"The validator is eligible to be selected to propose and attest in the upcoming epochs")))),(0,r.kt)("h2",{id:"how-validator-keys-are-created"},"How Validator Keys are created"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Validator Key")," is always part of a ",(0,r.kt)("strong",{parentName:"p"},"Validator Keystore")," - as a single key or a combination of many. The keys\nare being derived by a ",(0,r.kt)("a",{parentName:"p",href:"https://wolovim.medium.com/ethereum-201-mnemonics-bb01a9108c38"},"Mnemonic"),".\nA Mnemonic can potentially create an infinite amount of keys. It is important to understand that\nthese keys are indexed. There is a possibility to (theoretically) create a certain range."),(0,r.kt)("p",null,"Once a mnemonic is known the creation of ",(0,r.kt)("strong",{parentName:"p"},"Validator Keystores")," is ",(0,r.kt)("strong",{parentName:"p"},"not")," random but ",(0,r.kt)("strong",{parentName:"p"},"deterministic"),"."),(0,r.kt)("h3",{id:"an-example"},"An Example"),(0,r.kt)("p",null,"Given a mnemonic ",(0,r.kt)("em",{parentName:"p"},"m"),". We create a keystore from position 0 to 2. This could result into:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keystore A"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Key0: 0x8154..12"),(0,r.kt)("li",{parentName:"ul"},"Key1: 0x7361..45"),(0,r.kt)("li",{parentName:"ul"},"Key2: 0x7481..fe")))),(0,r.kt)("p",null,"Now let's assume we deleted this keystore, and we create a new one from position 1 to 3. This results into:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keystore B"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Key1: 0x7361..45"),(0,r.kt)("li",{parentName:"ul"},"Key2: 0x7481..fe"),(0,r.kt)("li",{parentName:"ul"},"Key3: 0x78ca..89")))),(0,r.kt)("p",null,"As you can see the Key1 and Key2 are the same in ",(0,r.kt)("strong",{parentName:"p"},"Keystore A")," and ",(0,r.kt)("strong",{parentName:"p"},"Keystore B"),". This mechanism\nallows for great power to rearrange your node setup."),(0,r.kt)("h3",{id:"node-setup-example"},"Node Setup Example"),(0,r.kt)("p",null,"Let's assume - given a mnemonic ",(0,r.kt)("em",{parentName:"p"},"m")," - we want to create 2 nodes with 30 keys in\n",(0,r.kt)("strong",{parentName:"p"},"Node A")," and 16 keys in the other ",(0,r.kt)("strong",{parentName:"p"},"Node B"),". Given our mnemonic ",(0,r.kt)("em",{parentName:"p"},"m")," we would\ne.g. have the following setup:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Node A")," has a keystore with keys from position ",(0,r.kt)("em",{parentName:"p"},"0")," to position ",(0,r.kt)("em",{parentName:"p"},"29"),"\n",(0,r.kt)("strong",{parentName:"p"},"Node B")," has a keystore with keys from position ",(0,r.kt)("em",{parentName:"p"},"30")," to position ",(0,r.kt)("em",{parentName:"p"},"45")),(0,r.kt)("p",null,"Now let's assume we want to rearrange the ",(0,r.kt)("strong",{parentName:"p"},"Validator Keys"),"'s by having an equal amount of keys on both nodes."),(0,r.kt)("p",null,"We should:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop the validator nodes"),(0,r.kt)("li",{parentName:"ol"},"Delete the keystores"),(0,r.kt)("li",{parentName:"ol"},"Recreate the keystores with the same mnemonic ",(0,r.kt)("strong",{parentName:"li"},"m")),(0,r.kt)("li",{parentName:"ol"},"Start the nodes again")),(0,r.kt)("p",null,"The setup could be"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Node A")," has a keystore with keys from position ",(0,r.kt)("em",{parentName:"p"},"0")," to position ",(0,r.kt)("em",{parentName:"p"},"22"),"\n",(0,r.kt)("strong",{parentName:"p"},"Node B")," has a keystore with keys from position ",(0,r.kt)("em",{parentName:"p"},"23")," to position ",(0,r.kt)("em",{parentName:"p"},"45")),(0,r.kt)("h2",{id:"need-help"},"Need help?"),(0,r.kt)("p",null,"Ask your question in the validators channel on the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/u7cmyUyw8F"},"official LUKSO Discord server"),"."))}m.isMDXComponent=!0}}]);