"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[1672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=l,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={tags:["linux","technical"]},i=void 0,o={unversionedId:"technical/linux",id:"technical/linux",title:"linux",description:"User's UID:",source:"@site/docs/technical/linux.md",sourceDirName:"technical",slug:"/technical/linux",permalink:"/technical/linux",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/linux.md",tags:[{label:"linux",permalink:"/tags/linux"},{label:"technical",permalink:"/tags/technical"}],version:"current",frontMatter:{tags:["linux","technical"]},sidebar:"tutorialSidebar",previous:{title:"htaccess",permalink:"/technical/htaccess"},next:{title:"mysql",permalink:"/technical/mysql"}},p={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"User's UID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"id -u username  \n")),(0,l.kt)("p",null,"User's GID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"id -g username  \n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://kb.iu.edu/d/adwf"},"https://kb.iu.edu/d/adwf")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},">_ Unknown")," (2023-08-14 16:29:07)"),(0,l.kt)("p",null,"tags: linux, technical"),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"multiple-ssh-keys"},"Multiple SSH Keys"),(0,l.kt)("p",null,"Using more than one ssh key, add below lines to this file: ~/.ssh/config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"IdentityFile ~/Desktop/.ssh/id_rsa  \nIdentityFile ~/.ssh/id_rsa  \n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:09:20)"),(0,l.kt)("p",null,"tags: linux, technical"),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"change-ssh-port"},"Change SSH port"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Find "# Listen 22" line and remove sharp in this file: /etc/ssh/sshd_config'),(0,l.kt)("li",{parentName:"ul"},"Then change port number"),(0,l.kt)("li",{parentName:"ul"},"Restart sshd service, logout, login")),(0,l.kt)("p",null,"Source: ",(0,l.kt)("a",{parentName:"p",href:"https://www.howtoforge.com/how-to-install-gitlab-server-with-docker-on-ubuntu-1804/"},"https://www.howtoforge.com/how-to-install-gitlab-server-with-docker-on-ubuntu-1804/")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:09:32)"),(0,l.kt)("p",null,"tags: linux, technical"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To not keep track command history, write commands start with whitespace"),(0,l.kt)("li",{parentName:"ul"},"Find duplicate lines in a file",(0,l.kt)("inlineCode",{parentName:"li"},"cat data.txt | sort | uniq -d ")),(0,l.kt)("li",{parentName:"ul"},'Write command(s) into "rc.local" to execute on boot'),(0,l.kt)("li",{parentName:"ul"},"Delete history: ",(0,l.kt)("inlineCode",{parentName:"li"},"history -c")),(0,l.kt)("li",{parentName:"ul"},"Find anything: ",(0,l.kt)("inlineCode",{parentName:"li"},'find / -iname "*.err\u201d')),(0,l.kt)("li",{parentName:"ul"},"Extract .rar files: ",(0,l.kt)("inlineCode",{parentName:"li"},"unrar x -y [path]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"netstat -ant")," -> Active Internet connections (including servers)"),(0,l.kt)("li",{parentName:"ul"},"Delete files inside of a directory: ",(0,l.kt)("inlineCode",{parentName:"li"},"rm -f dirName/*")),(0,l.kt)("li",{parentName:"ul"},"Search a keyword and show 2 lines before/after ",(0,l.kt)("inlineCode",{parentName:"li"},"grep -B 2 -A 2 keyword README.txt")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"watch -n 5 date")," run any command at regular intervals"),(0,l.kt)("li",{parentName:"ul"},'$ echo \'{"a":42, "b": {"x": 127}}\' | python -mjson.tool'),(0,l.kt)("li",{parentName:"ul"},"Detailed ls: ls -R"),(0,l.kt)("li",{parentName:"ul"},"List whole files with relative paths: find /home/sample -type f"),(0,l.kt)("li",{parentName:"ul"},"Website accessible? scutil -r web-site-name"),(0,l.kt)("li",{parentName:"ul"},"Zip a file with password: zip -e destination.zip source-to-zip.txt"),(0,l.kt)("li",{parentName:"ul"},"Find duplicates in a folder: fdupes -r ."),(0,l.kt)("li",{parentName:"ul"},"exiftool -all:all file.pdf")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:04:29)"),(0,l.kt)("p",null,"tags: linux, technical"))}m.isMDXComponent=!0}}]);