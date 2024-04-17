"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64624],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,g=u["".concat(s,".").concat(y)]||u[y]||m[y]||o;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},17803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});n(96540);var r=n(15680);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"quickstart",title:"Quick Start Guide"},s=void 0,l={unversionedId:"getting-started/quickstart",id:"version-3.xx.xx/getting-started/quickstart",title:"Quick Start Guide",description:"refine works on any environment you can run React (incl. CRA, Next.js, Remix, Vite etc.)",source:"@site/versioned_docs/version-3.xx.xx/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/3.xx.xx/getting-started/quickstart",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/getting-started/quickstart.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Bruno Par\xe9-Simard",lastUpdatedAt:1713341698,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"quickstart",title:"Quick Start Guide"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/3.xx.xx/"},next:{title:"API Reference",permalink:"/docs/3.xx.xx/api-reference"}},c={},u=[{value:"Quick Start Example",id:"quick-start-example",level:2},{value:"Next Steps",id:"next-steps",level:2}],m=(y="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var y;const g={toc:u},d="wrapper";function f(e){var{components:t}=e,n=p(e,["components"]);return(0,r.yg)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"refine")," works on any environment you can run ",(0,r.yg)("strong",{parentName:"p"},"React")," (incl. ",(0,r.yg)("em",{parentName:"p"},"CRA, Next.js, Remix, Vite")," etc.)"),(0,r.yg)("p",null,"Although you could take the time to manually set up your environment and install ",(0,r.yg)("strong",{parentName:"p"},"refine")," packages afterwards, the smart way to get started with ",(0,r.yg)("strong",{parentName:"p"},"refine")," is using the project starter tool. "),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"create refine-app")," provides built-in templates for ",(0,r.yg)("em",{parentName:"p"},"CRA"),", ",(0,r.yg)("em",{parentName:"p"},"Next.js")," and ",(0,r.yg)("em",{parentName:"p"},"Remix")," environments so you can bootstrap a ",(0,r.yg)("strong",{parentName:"p"},"refine")," project in a couple of minutes. It also offers a wide range of options that you can automatically configure for your ",(0,r.yg)("em",{parentName:"p"},"UI framework"),", ",(0,r.yg)("em",{parentName:"p"},"i18n"),", ",(0,r.yg)("em",{parentName:"p"},"router"),", ",(0,r.yg)("em",{parentName:"p"},"Auth.")," and ",(0,r.yg)("em",{parentName:"p"},"data provider")," settings."),(0,r.yg)("p",null,"To get started, please run the following command. The ",(0,r.yg)("strong",{parentName:"p"},"CLI wizard")," will assist you for the rest of the setup process:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"npm create refine-app@latest my-project\n")),(0,r.yg)("p",null,"It will create your ",(0,r.yg)("strong",{parentName:"p"},"refine")," project and install the required packages according to your selections. After completing the setup, navigate to the project folder and start your application with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"npm run dev\n")),(0,r.yg)("br",null),(0,r.yg)("p",null,"You can now view ",(0,r.yg)("strong",{parentName:"p"},"refine")," application at ",(0,r.yg)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),":"),(0,r.yg)("h2",{id:"quick-start-example"},"Quick Start Example"),(0,r.yg)(m,{id:"quick-start-example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We will show how you can use the CLI to bootstrap a ",(0,r.yg)("strong",{parentName:"p"},"refine")," app with ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design")," and ",(0,r.yg)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),". You can also use ",(0,r.yg)("a",{parentName:"p",href:"https://material-ui.com/"},"Material UI"),", ",(0,r.yg)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra UI")," and ",(0,r.yg)("a",{parentName:"p",href:"https://mantine.dev/"},"Mantine")," as well."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"npm create refine-app@latest  my-antd-project\n")),(0,r.yg)("br",null),(0,r.yg)("p",null,"Select the following options to complete CLI wizard:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"? Select your project type: \n\u276f refine-react\n\n? Do you want to use a UI Framework?:\n\u276f Ant Design\n\n? Do you want a customized theme?:\n\u276f Default theme\n\n? Router Provider:\n\u276f React Router v6\n\n? Data Provider:\n\u276f REST API\n\n? Auth Provider:\n\u276f None\n\n? Do you want to add example pages? \n\u276f Yes\n\n? Do you want a customized layout?\n\u276f No\n")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"}," We only show important options for this example. You can prefer to select other options like ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},"Kbar")," and ",(0,r.yg)("a",{parentName:"p",href:"https://www.i18next.com/"},"i18n"),". Different options selections may be result in a different project structure.")),(0,r.yg)("br",null),(0,r.yg)("p",null,"Once the setup is complete, navigate to the project folder and start your project with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"npm run dev\n")),(0,r.yg)("br",null),(0,r.yg)("p",null,"You can now view ",(0,r.yg)("strong",{parentName:"p"},"refine")," application at ",(0,r.yg)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," and you should see the output as a table populated with ",(0,r.yg)("inlineCode",{parentName:"p"},"post")," & ",(0,r.yg)("inlineCode",{parentName:"p"},"category")," data with filter, sort, and pagination features"),(0,r.yg)("div",null,(0,r.yg)("img",{style:{width:"100%"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/first-example-result.png",alt:"Example result"})),(0,r.yg)("br",null),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Since we selected the ",(0,r.yg)("inlineCode",{parentName:"p"},"Do you want to add example pages?")," option as ",(0,r.yg)("inlineCode",{parentName:"p"},"Yes")," during the CLI project creation phase, refine adds example CRUD pages and the ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," to the app. You can navigate to the example pages and try out the CRUD operations features."),(0,r.yg)("p",{parentName:"admonition"},"We always recommend to add example pages to your project to get a better understanding of how ",(0,r.yg)("strong",{parentName:"p"},"refine")," works."))),(0,r.yg)("h2",{id:"next-steps"},"Next Steps"),(0,r.yg)(m,{id:"next-steps",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"\ud83d\udc49 Jump to ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Tutorials")," to continue your work and turn the example into a full-blown CRUD application."),(0,r.yg)("p",null,"\ud83d\udc49 Read more on ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/advanced-tutorials/"},"Advanced Tutorials")," for different usage scenarios."),(0,r.yg)("p",null,"\ud83d\udc49 See the ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/examples/"},"real-life examples")," built using refine")))}f.isMDXComponent=!0}}]);