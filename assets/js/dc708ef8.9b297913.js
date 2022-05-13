"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[630],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,g=s["".concat(p,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2299:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},p="Log Fatal Errors to Different Log File",c={unversionedId:"php/log-fatal-errors",id:"php/log-fatal-errors",title:"Log Fatal Errors to Different Log File",description:"Change these fields in php.ini file:",source:"@site/docs/php/log-fatal-errors.md",sourceDirName:"php",slug:"/php/log-fatal-errors",permalink:"/php/log-fatal-errors",editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/php/log-fatal-errors.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SVN to Git with Subgit for macOS",permalink:"/git/svn-to-git-with-subgit"},next:{title:"Create EC2 Instance with PHP 7.4 and apache2 Installations",permalink:"/terraform/create-ec2-instance"}},u={},f=[],s={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"log-fatal-errors-to-different-log-file"},"Log Fatal Errors to Different Log File"),(0,a.kt)("p",null,"Change these fields in php.ini file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"log_errors = on\nerror_reporting = E_ERROR\nerror_log = /path/to/file\n")),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://mediatemple.net/community/products/dv/360020711631/how-to-enable-php-error-logging-via-php.ini"},"https://mediatemple.net/community/products/dv/360020711631/how-to-enable-php-error-logging-via-php.ini")))}m.isMDXComponent=!0}}]);