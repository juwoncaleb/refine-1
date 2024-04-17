"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61905],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>f});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84960:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>m});t(96540);var n=t(15680);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={id:"serverSideFormValidation",title:"Server-Side Form Validation","example-tags":["form","material-ui"]},c=void 0,p={unversionedId:"examples/form/mui/serverSideFormValidation",id:"examples/form/mui/serverSideFormValidation",title:"Server-Side Form Validation",description:"You can handle server-side form validation errors out-of-the-box with React Hook Form useForm.",source:"@site/docs/examples/form/mui/serverSideFormValidation.md",sourceDirName:"examples/form/mui",slug:"/examples/form/mui/serverSideFormValidation",permalink:"/docs/examples/form/mui/serverSideFormValidation",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/form/mui/serverSideFormValidation.md",tags:[],version:"current",lastUpdatedBy:"Bruno Par\xe9-Simard",lastUpdatedAt:1713341698,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"serverSideFormValidation",title:"Server-Side Form Validation","example-tags":["form","material-ui"]},sidebar:"mainSidebar",previous:{title:"useStepsForm",permalink:"/docs/examples/form/mui/useStepsForm"},next:{title:"Base64 Upload",permalink:"/docs/examples/upload/mui/base64"}},s={},m=[],u=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var d;const f={toc:m},y="wrapper";function b(e){var{components:r}=e,t=i(e,["components"]);return(0,n.yg)(y,a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"You can handle server-side form validation errors out-of-the-box with ",(0,n.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"React Hook Form useForm"),"."),(0,n.yg)("p",null,"When ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," returns rejected promise with ",(0,n.yg)("inlineCode",{parentName:"p"},"errors")," field, ",(0,n.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,n.yg)("inlineCode",{parentName:"a"},"useForm"))," will automatically update the error state with the rejected ",(0,n.yg)("inlineCode",{parentName:"p"},"errors")," field."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/advanced-tutorials/forms/server-side-form-validation/"},"Refer to the server-side Form Validation documentation for more information. \u2192")),(0,n.yg)(u,{path:"server-side-form-validation-material-ui",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);