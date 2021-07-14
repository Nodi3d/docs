(self.webpackChunknodi_docs=self.webpackChunknodi_docs||[]).push([[561],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3130:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},u="Custom Node Usage",c={unversionedId:"custom-node-usage",id:"custom-node-usage",isDocsHomePage:!1,title:"Custom Node Usage",description:"Nodi provides Custom Node, which allows you to create your own node content in JavaScript, and define what kind of output you want for the input.",source:"@site/user/custom-node-usage.md",sourceDirName:".",slug:"/custom-node-usage",permalink:"/docs/user/custom-node-usage",editUrl:"https://github.com/Nodi3d/docs/edit/main/user/custom-node-usage.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Nodes",permalink:"/docs/user/references/nodes"},next:{title:"Privacy Policy",permalink:"/docs/user/privacy"}},p=[{value:"Defining inputs and outputs",id:"defining-inputs-and-outputs",children:[]},{value:"Writing a program",id:"writing-a-program",children:[{value:"Example",id:"example",children:[]}]}],l={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-node-usage"},"Custom Node Usage"),(0,o.kt)("p",null,"Nodi provides Custom Node, which allows you to create your own node content in JavaScript, and define what kind of output you want for the input."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CustomNode",src:n(8683).Z})),(0,o.kt)("h2",{id:"defining-inputs-and-outputs"},"Defining inputs and outputs"),(0,o.kt)("p",null,"For inputs and outputs, you can define what type of data to take and how many."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IO",src:n(8546).Z})),(0,o.kt)("p",null,"You can define whether you want to receive input and output as ",(0,o.kt)("strong",{parentName:"p"},"Item")," or ",(0,o.kt)("strong",{parentName:"p"},"List"),", where ",(0,o.kt)("strong",{parentName:"p"},"Item")," is a single piece of data and ",(0,o.kt)("strong",{parentName:"p"},"List")," is an array of data."),(0,o.kt)("h2",{id:"writing-a-program"},"Writing a program"),(0,o.kt)("p",null,"The contents of the Custom Node can be written by JavaScript code in the editor displayed in the Inspector."),(0,o.kt)("p",null,"An instance of the class ",(0,o.kt)("strong",{parentName:"p"},"DataAccess")," is passed to the program with the ",(0,o.kt)("strong",{parentName:"p"},"access")," variable, so input and output can be handled via this instance."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"The following example shows a simple implementation of a Custom Node."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Have two numeric inputs, receiving the 0th as Item and the 1st as List."),(0,o.kt)("li",{parentName:"ul"},"Have two numeric outputs, writing out the 0th as List and the 1st as Item")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IO",src:n(4223).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"\n// access: instance of DataAccess\n\n// receive the 0th input in Item format\nlet x = access.getData(0);\n\n// receive the 1th input in List format\nlet numbers = access.getDataList(1);\n\n// write out the 0th output data in List format\nlet result = numbers.map(i => i * x);\naccess.setDataList(0, result);\n\n// write out the 1th output data in Item format\nlet max = Math.max(...result);\naccess.setData(1, max);\n\n")))}d.isMDXComponent=!0},8683:function(e,t,n){"use strict";t.Z=n.p+"assets/images/CustomNode-14d24fc5825ec5e16be152564ac1a205.png"},4223:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Example-add95052d7d21ca70a195204b93230c2.png"},8546:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IO-c07558bd4f7eb19a17cbcdc729660dcd.png"}}]);