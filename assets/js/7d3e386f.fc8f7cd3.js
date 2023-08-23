"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9218],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(o),f=r,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||c;return o?n.createElement(d,a(a({ref:t},p),{},{components:o})):n.createElement(d,a({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=o.length,a=new Array(c);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<c;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3770:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const c={tags:["how-to"]},a="Install Docker Compose",l={unversionedId:"technical/how-to/install-docker-compose",id:"technical/how-to/install-docker-compose",title:"Install Docker Compose",description:"Amazon Linux 2",source:"@site/docs/technical/how-to/install-docker-compose.md",sourceDirName:"technical/how-to",slug:"/technical/how-to/install-docker-compose",permalink:"/technical/how-to/install-docker-compose",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/how-to/install-docker-compose.md",tags:[{label:"how-to",permalink:"/tags/how-to"}],version:"current",frontMatter:{tags:["how-to"]},sidebar:"tutorialSidebar",previous:{title:"FoxyProxy SOCKS Proxy Configurations",permalink:"/technical/how-to/foxy-proxy-socks-proxy-conf"},next:{title:"Install Docker",permalink:"/technical/how-to/install-docker"}},i={},s=[{value:"Amazon Linux 2",id:"amazon-linux-2",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-docker-compose"},"Install Docker Compose"),(0,r.kt)("h2",{id:"amazon-linux-2"},"Amazon Linux 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose  \nsudo chmod +x /usr/local/bin/docker-compose  \n")),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/npearce/6f3c7826c7499587f00957fee62f8ee9"},"https://gist.github.com/npearce/6f3c7826c7499587f00957fee62f8ee9")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:03:36)"),(0,r.kt)("p",null,"tags: how-to"))}m.isMDXComponent=!0}}]);