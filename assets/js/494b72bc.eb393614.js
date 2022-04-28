"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[446],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4113:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="MySQL",u={unversionedId:"rdbms/mysql-notes",id:"rdbms/mysql-notes",title:"MySQL",description:"To copy with indexes and triggers",source:"@site/docs/rdbms/mysql-notes.md",sourceDirName:"rdbms",slug:"/rdbms/mysql-notes",permalink:"/rdbms/mysql-notes",editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/rdbms/mysql-notes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSH Tunnel on Windows 10 w/PuTTY and Burp Suite",permalink:"/how-to/ssh-tunnel"},next:{title:"Deploy with Gitlab Runner",permalink:"/gitlab/gitlab-ci"}},s={},p=[{value:"To copy with indexes and triggers",id:"to-copy-with-indexes-and-triggers",level:2},{value:"Fulltext Search with &quot;WHERE MATCH ... AGAINST ...&quot;",id:"fulltext-search-with-where-match--against-",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql"},"MySQL"),(0,a.kt)("h2",{id:"to-copy-with-indexes-and-triggers"},"To copy with indexes and triggers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE newtable LIKE oldtable;\nINSERT INTO newtable SELECT * FROM oldtable;\n")),(0,a.kt)("h2",{id:"fulltext-search-with-where-match--against-"},'Fulltext Search with "WHERE MATCH ... AGAINST ..."'),(0,a.kt)("p",null,"Add fulltext search index that you want to search columns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"FULLTEXT KEY `fti_product` (`product`)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM cves c\nINNER JOIN cve_configurations cc\nON c.id = cc.cve_id\nWHERE MATCH(cc.product) AGAINST(:libraryName)\n")))}m.isMDXComponent=!0}}]);