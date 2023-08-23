"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={tags:["terraform"]},c="Create EC2 Instance with PHP 7.4 and apache2 Installations",s={unversionedId:"technical/terraform/create-ec2-instance",id:"technical/terraform/create-ec2-instance",title:"Create EC2 Instance with PHP 7.4 and apache2 Installations",description:"main.tf:",source:"@site/docs/technical/terraform/create-ec2-instance.md",sourceDirName:"technical/terraform",slug:"/technical/terraform/create-ec2-instance",permalink:"/technical/terraform/create-ec2-instance",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/terraform/create-ec2-instance.md",tags:[{label:"terraform",permalink:"/tags/terraform"}],version:"current",frontMatter:{tags:["terraform"]},sidebar:"tutorialSidebar",previous:{title:"terraform",permalink:"/category/terraform"},next:{title:"Create S3 Bucket",permalink:"/technical/terraform/create-s3-bucket"}},i={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-ec2-instance-with-php-74-and-apache2-installations"},"Create EC2 Instance with PHP 7.4 and apache2 Installations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"terraform init  \nterraform apply  \nterraform destroy  \n")),(0,a.kt)("p",null,"main.tf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'terraform {  \n  required_providers {  \n    aws = {  \n      source  = "hashicorp/aws"  \n      version = "~> 3.27"  \n    }  \n  }\n\n  required_version = ">= 0.14.9"  \n}\n\nprovider "aws" {  \n  profile = "default"  \n  region  = "eu-central-1"  \n}\n\nresource "aws_instance" "resource-name" {  \n  ami                    = "base-ami-id"  \n  instance_type          = "t2.micro"  \n  vpc_security_group_ids = ["sg-ids"]  \n  tags                   = {  \n    Name = "instance-name"  \n  }  \n  associate_public_ip_address = true  \n  key_name                    = "key-pair-name"  \n  user_data = file("installations.sh")  \n}\n\n')),(0,a.kt)("p",null,"installations.sh:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\n\nsudo yum update -y  \nsudo amazon-linux-extras install -y php7.4  \nsudo yum install -y httpd\n\nsudo systemctl start httpd  \nsudo systemctl enable httpd  \nsudo systemctl is-enabled httpd\n\n## add ec2-user permissions to /var/www and apache group  \nsudo usermod -a -G apache ec2-user  \nsudo chown -R ec2-user:apache /var/www  \nsudo chmod 2775 /var/www && find /var/www -type d -exec sudo chmod 2775 {} \\;  \nfind /var/www -type f -exec sudo chmod 0664 {} \\;  \n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:07:01)"),(0,a.kt)("p",null,"tags: terraform"))}m.isMDXComponent=!0}}]);