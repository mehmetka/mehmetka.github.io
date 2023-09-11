"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[8798],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=o,f=p["".concat(i,".").concat(u)]||p[u]||m[u]||c;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<c;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const c={tags:["docker"]},a="Read Secrets from Dotenv",l={unversionedId:"technical/docker/reading-secrets-from-dotenv-docker",id:"technical/docker/reading-secrets-from-dotenv-docker",title:"Read Secrets from Dotenv",description:"docker-compose.yml content:",source:"@site/docs/technical/docker/reading-secrets-from-dotenv-docker.md",sourceDirName:"technical/docker",slug:"/technical/docker/reading-secrets-from-dotenv-docker",permalink:"/technical/docker/reading-secrets-from-dotenv-docker",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/docker/reading-secrets-from-dotenv-docker.md",tags:[{label:"docker",permalink:"/tags/docker"}],version:"current",frontMatter:{tags:["docker"]},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/category/docker"},next:{title:"Renaming Docker Volume",permalink:"/technical/docker/renaming-docker-volume"}},i={},s=[],d={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"read-secrets-from-dotenv"},"Read Secrets from Dotenv"),(0,o.kt)("p",null,"docker-compose.yml content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"version: '3'\n\nservices:  \n  db:  \n    container_name: mysql  \n    image: mysql:5.6.28  \n    restart: always  \n    environment:  \n      MYSQL_DATABASE: ${DB_NAME}  \n      MYSQL_USER: ${DB_USER}  \n      MYSQL_PASSWORD: ${DB_PASSWORD}  \n      MYSQL_ROOT_PASSWORD: ${DB_ROOT_PASSWORD}  \n...  \n")),(0,o.kt)("p",null,".env file content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DB_USER=username  \nDB_PASSWORD=password  \nDB_NAME=databasename  \nDB_ROOT_PASSWORD=root  \n")),(0,o.kt)("p",null,'"docker compose config" command output'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Output:  \nservices:  \ndb:  \n    container_name: mysql  \n    environment:  \n    MYSQL_DATABASE: databasename  \n    MYSQL_PASSWORD: password  \n    MYSQL_ROOT_PASSWORD: root  \n    MYSQL_USER: username  \n    image: mysql:5.6.28  \n    networks:  \n    default: null  \n    restart: always  \nnetworks:  \ndefault:  \n    name: docker-compose-dotenv_default  \n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 20:56:59)",(0,o.kt)("br",{parentName:"p"}),"\n","#docker")))}m.isMDXComponent=!0}}]);