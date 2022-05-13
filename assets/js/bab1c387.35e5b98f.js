"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[959],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(u,".").concat(d)]||p[d]||b[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return b}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},u="Install Gitlab Runner",s={unversionedId:"gitlab/runner-install",id:"gitlab/runner-install",title:"Install Gitlab Runner",description:"Download the binary for your system",source:"@site/docs/gitlab/runner-install.md",sourceDirName:"gitlab",slug:"/gitlab/runner-install",permalink:"/gitlab/runner-install",editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/gitlab/runner-install.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy with Gitlab Runner",permalink:"/gitlab/gitlab-ci"},next:{title:"Notes",permalink:"/git/notes"}},c={},b=[{value:"Download the binary for your system",id:"download-the-binary-for-your-system",level:2},{value:"Give it permission to execute",id:"give-it-permission-to-execute",level:2},{value:"Create a GitLab Runner user",id:"create-a-gitlab-runner-user",level:2},{value:"Install and run as a service",id:"install-and-run-as-a-service",level:2}],p={toc:b};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-gitlab-runner"},"Install Gitlab Runner"),(0,i.kt)("h2",{id:"download-the-binary-for-your-system"},"Download the binary for your system"),(0,i.kt)("p",null,"sudo curl -L --output /usr/local/bin/gitlab-runner ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"},"https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64")),(0,i.kt)("h2",{id:"give-it-permission-to-execute"},"Give it permission to execute"),(0,i.kt)("p",null,"sudo chmod +x /usr/local/bin/gitlab-runner"),(0,i.kt)("h2",{id:"create-a-gitlab-runner-user"},"Create a GitLab Runner user"),(0,i.kt)("p",null,"sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash"),(0,i.kt)("h2",{id:"install-and-run-as-a-service"},"Install and run as a service"),(0,i.kt)("p",null,"sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner\nsudo gitlab-runner start"))}d.isMDXComponent=!0}}]);