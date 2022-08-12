"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[303],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||c;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4531:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=t(3366),c=(t(7294),t(3905)),o=["components"],i={},s="Create EC2 Instance with PHP 7.4 and apache2 Installations",u={unversionedId:"technical/terraform/create-ec2-instance",id:"technical/terraform/create-ec2-instance",title:"Create EC2 Instance with PHP 7.4 and apache2 Installations",description:"main.tf:",source:"@site/docs/technical/terraform/create-ec2-instance.md",sourceDirName:"technical/terraform",slug:"/technical/terraform/create-ec2-instance",permalink:"/technical/terraform/create-ec2-instance",editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/terraform/create-ec2-instance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Secure Coding",permalink:"/technical/security/securecoding"},next:{title:"Create S3 Bucket",permalink:"/technical/terraform/create-s3-bucket"}},l={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"create-ec2-instance-with-php-74-and-apache2-installations"},"Create EC2 Instance with PHP 7.4 and apache2 Installations"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"terraform init\nterraform apply\nterraform destroy\n")),(0,c.kt)("p",null,"main.tf:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'terraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 3.27"\n    }\n  }\n\n  required_version = ">= 0.14.9"\n}\n\nprovider "aws" {\n  profile = "default"\n  region  = "eu-central-1"\n}\n\nresource "aws_instance" "resource-name" {\n  ami                    = "base-ami-id"\n  instance_type          = "t2.micro"\n  vpc_security_group_ids = ["sg-ids"]\n  tags                   = {\n    Name = "instance-name"\n  }\n  associate_public_ip_address = true\n  key_name                    = "key-pair-name"\n  user_data = file("installations.sh")\n}\n\n')),(0,c.kt)("p",null,"installations.sh:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\n\nsudo yum update -y\nsudo amazon-linux-extras install -y php7.4\nsudo yum install -y httpd\n\nsudo systemctl start httpd\nsudo systemctl enable httpd\nsudo systemctl is-enabled httpd\n\n## add ec2-user permissions to /var/www and apache group\nsudo usermod -a -G apache ec2-user\nsudo chown -R ec2-user:apache /var/www\nsudo chmod 2775 /var/www && find /var/www -type d -exec sudo chmod 2775 {} \\;\nfind /var/www -type f -exec sudo chmod 0664 {} \\;\n")))}m.isMDXComponent=!0}}]);