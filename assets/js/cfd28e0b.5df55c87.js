"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[5744],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),h=o,g=f["".concat(i,".").concat(h)]||f[h]||u[h]||a;return r?n.createElement(g,p(p({ref:t},s),{},{components:r})):n.createElement(g,p({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[f]="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},55:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={tags:["php"]},p="Log Fatal Errors to Different Log File",l={unversionedId:"technical/php/log-fatal-errors",id:"technical/php/log-fatal-errors",title:"Log Fatal Errors to Different Log File",description:"Change these fields in php.ini file:",source:"@site/docs/technical/php/log-fatal-errors.md",sourceDirName:"technical/php",slug:"/technical/php/log-fatal-errors",permalink:"/technical/php/log-fatal-errors",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/php/log-fatal-errors.md",tags:[{label:"php",permalink:"/tags/php"}],version:"current",frontMatter:{tags:["php"]},sidebar:"tutorialSidebar",previous:{title:"php",permalink:"/category/php"},next:{title:"uncategorized",permalink:"/technical/php/uncategorized"}},i={},c=[],s={toc:c},f="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log-fatal-errors-to-different-log-file"},"Log Fatal Errors to Different Log File"),(0,o.kt)("p",null,"Change these fields in php.ini file:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"log_errors = on  \nerror_reporting = E_ERROR  \nerror_log = /path/to/file  \n")),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://mediatemple.net/community/products/dv/360020711631/how-to-enable-php-error-logging-via-php.ini"},"https://mediatemple.net/community/products/dv/360020711631/how-to-enable-php-error-logging-via-php.ini")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:05:22)"),(0,o.kt)("p",null,"tags: php"))}u.isMDXComponent=!0}}]);