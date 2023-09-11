"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={tags:["how-to"]},s="SSH Tunnel on Windows 10 w/PuTTY and Burp Suite",i={unversionedId:"technical/how-to/ssh-tunnel",id:"technical/how-to/ssh-tunnel",title:"SSH Tunnel on Windows 10 w/PuTTY and Burp Suite",description:'0. Open PuTTY, on "Session" section, write your Host Name or IP Address',source:"@site/docs/technical/how-to/ssh-tunnel.md",sourceDirName:"technical/how-to",slug:"/technical/how-to/ssh-tunnel",permalink:"/technical/how-to/ssh-tunnel",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/how-to/ssh-tunnel.md",tags:[{label:"how-to",permalink:"/tags/how-to"}],version:"current",frontMatter:{tags:["how-to"]},sidebar:"tutorialSidebar",previous:{title:"Cloudflare Maintenance Mode",permalink:"/technical/how-to/maintenance-mode-on-cloudflare"},next:{title:"uncategorized",permalink:"/technical/how-to/uncategorized"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ssh-tunnel-on-windows-10-wputty-and-burp-suite"},"SSH Tunnel on Windows 10 w/PuTTY and Burp Suite"),(0,o.kt)("ol",{start:0},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Open PuTTY, on "Session" section, write your Host Name or IP Address',(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"putty-entrance",src:n(9151).Z,width:"619",height:"579"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Go to Connection > SSH > Tunnels. "Add new forwarded port" write a port. Mine is 4567. Leave "Destination" blank. Choose "Dynamic" and "Auto". Click "Add".',(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"putty-connection-ssh-tunnels",src:n(2261).Z,width:"800",height:"785"})))),(0,o.kt)("p",null,"1.1. As a result you will see",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"putty-ssh-tunnel-conf-result",src:n(8203).Z,width:"799",height:"784"})),(0,o.kt)("p",null,'1.2. Click "Open"'),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Open Burp Suite > Temporary Project > Start Burp ")),(0,o.kt)("p",null,"2.1- Proxy > Intercept > Intercept is off"),(0,o.kt)("p",null,"2.2. Proxy > Options > Proxy Listeners > Choose a listener > Edit > Bind to port:8081",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"burp-suite-proxy-options",src:n(2587).Z,width:"2245",height:"752"})),(0,o.kt)("p",null,'2.3. Project Options > Click "Override User Options" > Write "Socks Proxy host":127.0.0.1, "Socks Proxy port":4567, Click "Use SOCKS Proxy", Click "Do DNS lookups over SOCKS proxy"',(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"burp-suite-project-options-socks-proxy-conf",src:n(6873).Z,width:"2244",height:"1247"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Done \\m/  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 21:03:58)",(0,o.kt)("br",{parentName:"p"}),"\n","#how-to")))}d.isMDXComponent=!0},6873:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/burp-suite-project-options-socks-proxy-conf-7566dd968c70c5c02d21b5815dbb20cf.png"},2587:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/burp-suite-proxy-options-05696c18eb88753357779f0cc64a64c4.png"},2261:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/putty-connection-ssh-tunnels-02c9dc20ca4e494fcf5e29bf83b6ba0e.png"},9151:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/putty-entrance-da5ebe04c6729fee838c59d70a997a97.png"},8203:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/putty-ssh-tunnel-conf-result-bbbcc19a90fe9bbfdbc9c208a3794638.png"}}]);