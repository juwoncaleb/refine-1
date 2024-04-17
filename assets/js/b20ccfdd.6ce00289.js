"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81787],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var o=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),s=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return o.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?o.createElement(m,i(i({ref:r},p),{},{components:t})):o.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62331:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>s,toc:()=>u});t(96540);var o=t(15680);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={id:"useModal",title:"useModal",description:"useModal example of @pankod/refine-core","example-title":"Refine's useModal hook","example-tags":["headless","refine-hooks"]},c=void 0,s={unversionedId:"examples/core/useModal",id:"version-3.xx.xx/examples/core/useModal",title:"useModal",description:"useModal example of @pankod/refine-core",source:"@site/versioned_docs/version-3.xx.xx/examples/core/useModal.md",sourceDirName:"examples/core",slug:"/examples/core/useModal",permalink:"/docs/3.xx.xx/examples/core/useModal",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/core/useModal.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Bruno Par\xe9-Simard",lastUpdatedAt:1713341698,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"useModal",title:"useModal",description:"useModal example of @pankod/refine-core","example-title":"Refine's useModal hook","example-tags":["headless","refine-hooks"]},sidebar:"someSidebar",previous:{title:"useImport",permalink:"/docs/3.xx.xx/examples/core/useImport"},next:{title:"useSelect",permalink:"/docs/3.xx.xx/examples/core/useSelect"}},p={},u=[],d=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var f;const m={toc:u},y="wrapper";function x(e){var{components:r}=e,t=i(e,["components"]);return(0,o.yg)(y,a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},m,t),{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Using the ",(0,o.yg)("inlineCode",{parentName:"p"},"useModal")," hook that comes with the ",(0,o.yg)("strong",{parentName:"p"},"headless")," version of ",(0,o.yg)("strong",{parentName:"p"},"refine"),", you may manage a modal. This hook is UI-independent and only includes show and close operations. You can create your UI as you like, and control it with the ",(0,o.yg)("inlineCode",{parentName:"p"},"useModal")," hook."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/ui/useModal/"},"Refer to the ",(0,o.yg)("strong",{parentName:"a"},"refine")," useModal hook documentation for more information. \u2192")),(0,o.yg)(d,{path:"core-use-modal",mdxType:"CodeSandboxExample"}))}x.isMDXComponent=!0}}]);