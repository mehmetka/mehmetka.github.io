"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(r),u=o,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||c;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const c={tags:["docker"]},a="Connect PHPMyAdmin to Remote MySQL with Docker",i={unversionedId:"technical/docker/connect-pma-to-remote-host",id:"technical/docker/connect-pma-to-remote-host",title:"Connect PHPMyAdmin to Remote MySQL with Docker",description:"_ Unknown (2022-08-13 2046)",source:"@site/docs/technical/docker/connect-pma-to-remote-host.md",sourceDirName:"technical/docker",slug:"/technical/docker/connect-pma-to-remote-host",permalink:"/technical/docker/connect-pma-to-remote-host",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/docker/connect-pma-to-remote-host.md",tags:[{label:"docker",permalink:"/tags/docker"}],version:"current",frontMatter:{tags:["docker"]},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/category/docker"},next:{title:"Install LDAP Extension on php-apache Docker Image",permalink:"/technical/docker/install-ldap-ext-to-php-apache-docker-image"}},p={},l=[],m={toc:l},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-phpmyadmin-to-remote-mysql-with-docker"},"Connect PHPMyAdmin to Remote MySQL with Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --name phpmyadmin -d -e PMA_HOST=remote-host -p 8080:80 phpmyadmin  \n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 20:58:46)"),(0,o.kt)("p",null,"tags: docker"))}d.isMDXComponent=!0}}]);