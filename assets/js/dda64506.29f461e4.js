"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[8056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=i(n),m=o,h=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(h,c(c({ref:t},d),{},{components:n})):r.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={tags:["docker"]},c="Install LDAP Extension on php-apache Docker Image",p={unversionedId:"technical/docker/install-ldap-ext-to-php-apache-docker-image",id:"technical/docker/install-ldap-ext-to-php-apache-docker-image",title:"Install LDAP Extension on php-apache Docker Image",description:"_ Unknown (2022-08-13 2008)",source:"@site/docs/technical/docker/install-ldap-ext-to-php-apache-docker-image.md",sourceDirName:"technical/docker",slug:"/technical/docker/install-ldap-ext-to-php-apache-docker-image",permalink:"/technical/docker/install-ldap-ext-to-php-apache-docker-image",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/docker/install-ldap-ext-to-php-apache-docker-image.md",tags:[{label:"docker",permalink:"/tags/docker"}],version:"current",frontMatter:{tags:["docker"]},sidebar:"tutorialSidebar",previous:{title:"Connect PHPMyAdmin to Remote MySQL with Docker",permalink:"/technical/docker/connect-pma-to-remote-host"},next:{title:"Read Secrets from Dotenv",permalink:"/technical/docker/reading-secrets-from-dotenv-docker"}},l={},i=[],d={toc:i},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-ldap-extension-on-php-apache-docker-image"},"Install LDAP Extension on php-apache Docker Image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FROM php:7.3.28-apache\n\nRUN apt-get update && \\  \n    apt-get install -y libldap2-dev\n\nRUN docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu/  \nRUN docker-php-ext-install ldap  \n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 20:58:08)"),(0,o.kt)("p",null,"tags: docker"))}u.isMDXComponent=!0}}]);