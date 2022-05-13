"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[16],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),g=s(r),m=i,f=g["".concat(l,".").concat(m)]||g[m]||c[m]||o;return r?n.createElement(f,a(a({ref:e},p),{},{components:r})):n.createElement(f,a({ref:e},p))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=g;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:i,a[1]=u;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7903:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],u={},l="SVN to Git with Subgit for macOS",s={unversionedId:"git/svn-to-git-with-subgit",id:"git/svn-to-git-with-subgit",title:"SVN to Git with Subgit for macOS",description:"Subgit installation",source:"@site/docs/git/svn-to-git-with-subgit.md",sourceDirName:"git",slug:"/git/svn-to-git-with-subgit",permalink:"/git/svn-to-git-with-subgit",editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/git/svn-to-git-with-subgit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Notes",permalink:"/git/notes"},next:{title:"Log Fatal Errors to Different Log File",permalink:"/php/log-fatal-errors"}},p={},c=[{value:"Subgit installation",id:"subgit-installation",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare Git repository",id:"prepare-git-repository",level:2},{value:"Subgit configurations",id:"subgit-configurations",level:2},{value:"Start to convert",id:"start-to-convert",level:2},{value:"After converting done",id:"after-converting-done",level:2},{value:"Send to remote",id:"send-to-remote",level:2},{value:"References",id:"references",level:2}],g={toc:c};function m(t){var e=t.components,r=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"svn-to-git-with-subgit-for-macos"},"SVN to Git with Subgit for macOS"),(0,o.kt)("h2",{id:"subgit-installation"},"Subgit installation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ brew install subgit")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ mkdir repository-name && cd repository-name")),(0,o.kt)("h2",{id:"prepare-git-repository"},"Prepare Git repository"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ subgit configure --layout auto --trunk ${trunkName} ${your-svn-host} .git")),(0,o.kt)("h2",{id:"subgit-configurations"},"Subgit configurations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Add SVN "username password" to .git/subgit/passwd file'),(0,o.kt)("li",{parentName:"ul"},'Add "launchTimeout = 60" to end of .git/subgit/config file'),(0,o.kt)("li",{parentName:"ul"},"Arrange .git/subgit/authors.txt file by your users")),(0,o.kt)("h2",{id:"start-to-convert"},"Start to convert"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ subgit install .git")),(0,o.kt)("h2",{id:"after-converting-done"},"After converting done"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'If you get this error: "fatal: this operation must be run in a work tree" then run'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"$ git config --unset core.bare")))),(0,o.kt)("h2",{id:"send-to-remote"},"Send to remote"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ git remote add origin ${remote-address}")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ git push origin master")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.tmatesoft.com/t/cannot-commit-timeout-waiting-for-pid-file/2410"},"https://support.tmatesoft.com/t/cannot-commit-timeout-waiting-for-pid-file/2410")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://subgit.com/documentation/howto.html"},"https://subgit.com/documentation/howto.html"))))}m.isMDXComponent=!0}}]);