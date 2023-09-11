"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[2178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={tags:["aws","elasticbeanstalk","graviton","httpd","performance"]},l=void 0,i={unversionedId:"technical/aws/uncategorized",id:"technical/aws/uncategorized",title:"uncategorized",description:"- Using T4g instances you can enjoy a performance benefit of up to 40% at a 20% lower cost in comparison to T3 instances, providing the best price/performance for a broader spectrum of workloads.",source:"@site/docs/technical/aws/uncategorized.md",sourceDirName:"technical/aws",slug:"/technical/aws/uncategorized",permalink:"/technical/aws/uncategorized",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/aws/uncategorized.md",tags:[{label:"aws",permalink:"/tags/aws"},{label:"elasticbeanstalk",permalink:"/tags/elasticbeanstalk"},{label:"graviton",permalink:"/tags/graviton"},{label:"httpd",permalink:"/tags/httpd"},{label:"performance",permalink:"/tags/performance"}],version:"current",frontMatter:{tags:["aws","elasticbeanstalk","graviton","httpd","performance"]},sidebar:"tutorialSidebar",previous:{title:"Customizing Lambda with Docker Image",permalink:"/technical/aws/lambda-docker-image"},next:{title:"docker",permalink:"/category/docker"}},s={},p=[{value:"Difference of AWS Public-Private Subnet",id:"difference-of-aws-public-private-subnet",level:2},{value:"If you cannot delete Elasticbeanstalk environment",id:"if-you-cannot-delete-elasticbeanstalk-environment",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using T4g instances you can enjoy a ",(0,r.kt)("strong",{parentName:"li"},"performance benefit of up to 40% at a 20% lower cost in comparison to T3 instances"),", providing the best price/performance for a broader spectrum of workloads."),(0,r.kt)("li",{parentName:"ul"},"T4g instances are designed for applications that don\u2019t use CPU at full power most of the time  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unknown (2023-08-31 16:04:56)",(0,r.kt)("br",{parentName:"p"}),"\n","#aws #graviton #performance")),(0,r.kt)("p",null,"--"),(0,r.kt)("p",null,"Add new SSH public key to AWS EC2 Instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new Key-Pair on AWS Console (private key will be downloaded automatically.)"),(0,r.kt)("li",{parentName:"ul"},"Change permissions of private key: ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod 600 private-key.pem")),(0,r.kt)("li",{parentName:"ul"},"Generate public key from private key: ",(0,r.kt)("inlineCode",{parentName:"li"},"ssh-keygen -y -f private-key.pem")),(0,r.kt)("li",{parentName:"ul"},"SSH into destination server"),(0,r.kt)("li",{parentName:"ul"},'Add public key to "~/.ssh/authorized_keys" file',(0,r.kt)("br",{parentName:"li"}),"Done \\m/")),(0,r.kt)("p",null,"You can use more than one public key to ssh if you want or delete old ones"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replacing-key-pair.html"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replacing-key-pair.html"),"  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unknown (2023-08-17 17:31:35)",(0,r.kt)("br",{parentName:"p"}),"\n","#aws")),(0,r.kt)("p",null,"--"),(0,r.kt)("p",null,"Get EC2 Instance Type inside of instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl http://169.254.169.254/latest/meta-data/instance-type  \n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html"),"  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unknown (2023-08-17 17:03:50)",(0,r.kt)("br",{parentName:"p"}),"\n","#aws")),(0,r.kt)("p",null,"--"),(0,r.kt)("p",null,"AWS ElasticBeanstalk PHP 7.4 Environment httpd.conf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"...  \n<IfModule worker.c>  \nStartServers        10  \nMinSpareThreads     240  \nMaxSpareThreads     240  \nServerLimit         10  \nMaxRequestWorkers          250  \nMaxConnectionsPerChild 1000000  \n</IfModule>  \n...  \n")),(0,r.kt)("p",null,"Same for t4g.micro and t4g.xlarge.  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unknown (2023-08-04 23:22:46)",(0,r.kt)("br",{parentName:"p"}),"\n","#aws #elasticbeanstalk #httpd")),(0,r.kt)("p",null,"--"),(0,r.kt)("h1",{id:"extending-ec2-volume-size"},"Extending EC2 Volume Size"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lsblk # find root volume name\n\nNAME          MAJ:MIN RM SIZE RO TYPE MOUNTPOINT  \nnvme0n1       259:0    0  64G  0 disk  \n|-nvme0n1p1   259:1    0  64G  0 part /  \n`-nvme0n1p128 259:2    0   1M  0 part  \n")),(0,r.kt)("p",null,"Volume Name: nvme0n1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'df -hT # find volume type, should be "xfs" \n\nFilesystem     Type      Size  Used Avail Use% Mounted on  \ndevtmpfs       devtmpfs  3.9G     0  3.9G   0% /dev  \ntmpfs          tmpfs     3.9G     0  3.9G   0% /dev/shm  \ntmpfs          tmpfs     3.9G  460K  3.9G   1% /run  \ntmpfs          tmpfs     3.9G     0  3.9G   0% /sys/fs/cgroup  \n/dev/nvme0n1p1 xfs        64G   15G   50G  24% /  \ntmpfs          tmpfs     784M     0  784M   0% /run/user/1000  \n')),(0,r.kt)("p",null,"Volume type: xfs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo growpart /dev/nvme0n1 1  \nsudo xfs_growfs -d /  \n")),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html"),"  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unknown (2023-07-31 21:52:51)",(0,r.kt)("br",{parentName:"p"}),"\n","#aws")),(0,r.kt)("p",null,"--"),(0,r.kt)("h2",{id:"difference-of-aws-public-private-subnet"},"Difference of AWS Public-Private Subnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/556363/what-is-the-difference-between-a-public-and-private-subnet-in-a-amazon-vpc"},"https://serverfault.com/questions/556363/what-is-the-difference-between-a-public-and-private-subnet-in-a-amazon-vpc")),(0,r.kt)("li",{parentName:"ul"},"PUBLIC SUBNET: If a subnet's traffic is routed to an internet gateway, the subnet is known as a public subnet."),(0,r.kt)("li",{parentName:"ul"},"PRIVATE SUBNET: If a subnet doesn't have a route to the internet gateway, the subnet is known as a private subnet.  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 21:10:25)",(0,r.kt)("br",{parentName:"p"}),"\n","#aws")),(0,r.kt)("p",null,"--"),(0,r.kt)("h2",{id:"if-you-cannot-delete-elasticbeanstalk-environment"},"If you cannot delete Elasticbeanstalk environment"),(0,r.kt)("p",null,"You need to go to your CloudFormation console and retry deletion of the CloudFormation stack which the Beanstalk",(0,r.kt)("br",{parentName:"p"}),"\n","environment used. The deletion may fail, but after retrying it will prompt you if you want to skip the",(0,r.kt)("br",{parentName:"p"}),"\n",'"AWSEBRDSDatabase" resource that failed to delete. You can just confirm that you want to skip deletion (since you have',(0,r.kt)("br",{parentName:"p"}),"\n","actually already deleted it). This should remove the CloudFormation stack. Then you can retry deletion of the Beanstalk",(0,r.kt)("br",{parentName:"p"}),"\n","environment from the Beanstalk console.  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 20:56:36)",(0,r.kt)("br",{parentName:"p"}),"\n","#aws")),(0,r.kt)("p",null,"--"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aws api gateway uses token bucket algorithm for rate limiting"),(0,r.kt)("li",{parentName:"ul"},"s3 bucket name best practices: images.domain.com  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 20:56:20)",(0,r.kt)("br",{parentName:"p"}),"\n","#aws")))}m.isMDXComponent=!0}}]);