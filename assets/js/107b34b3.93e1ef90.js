"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[6154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},T="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),T=u(n),g=a,m=T["".concat(s,".").concat(g)]||T[g]||c[g]||r;return n?i.createElement(m,l(l({ref:t},p),{},{components:n})):i.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[T]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const r={tags:["security"]},l="OWASP Testing Guide v4.0",o={unversionedId:"technical/security/owasp-testing-guide-checklist",id:"technical/security/owasp-testing-guide-checklist",title:"OWASP Testing Guide v4.0",description:"Information Gathering",source:"@site/docs/technical/security/owasp-testing-guide-checklist.md",sourceDirName:"technical/security",slug:"/technical/security/owasp-testing-guide-checklist",permalink:"/technical/security/owasp-testing-guide-checklist",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/security/owasp-testing-guide-checklist.md",tags:[{label:"security",permalink:"/tags/security"}],version:"current",frontMatter:{tags:["security"]},sidebar:"tutorialSidebar",previous:{title:"security",permalink:"/category/security"},next:{title:"Secure Coding",permalink:"/technical/security/securecoding"}},s={},u=[{value:"Information Gathering",id:"information-gathering",level:2},{value:"Configuration and Deploy Management Testing",id:"configuration-and-deploy-management-testing",level:2},{value:"Identity Management Testing",id:"identity-management-testing",level:2},{value:"Authentication Testing",id:"authentication-testing",level:2},{value:"Authorization Testing",id:"authorization-testing",level:2},{value:"Session Management Testing",id:"session-management-testing",level:2},{value:"Input Validation Testing",id:"input-validation-testing",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Cryptography",id:"cryptography",level:2},{value:"Business Logic Testing",id:"business-logic-testing",level:2},{value:"Client Side Testing",id:"client-side-testing",level:2},{value:"Source",id:"source",level:2}],p={toc:u},T="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(T,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"owasp-testing-guide-v40"},"OWASP Testing Guide v4.0"),(0,a.kt)("h2",{id:"information-gathering"},"Information Gathering"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Conduct Search Engine Discovery and Reconnaissance for Information Leakage (OTG-INFO-001) "),(0,a.kt)("li",{parentName:"ul"},"Fingerprint Web Server (OTG-INFO-002)"),(0,a.kt)("li",{parentName:"ul"},"Review Webserver Metafiles for Information Leakage (OTG-INFO-003)"),(0,a.kt)("li",{parentName:"ul"},"Enumerate Applications on Webserver (OTG-INFO-004)"),(0,a.kt)("li",{parentName:"ul"},"Review Webpage Comments and Metadata for Information Leakage (OTG-INFO-005)"),(0,a.kt)("li",{parentName:"ul"},"Identify application entry points (OTG-INFO-006)"),(0,a.kt)("li",{parentName:"ul"},"Map execution paths through application (OTG-INFO-007)"),(0,a.kt)("li",{parentName:"ul"},"Fingerprint Web Application Framework (OTG-INFO-008)"),(0,a.kt)("li",{parentName:"ul"},"Fingerprint Web Application (OTG-INFO-009)"),(0,a.kt)("li",{parentName:"ul"},"Map Application Architecture (OTG-INFO-010)")),(0,a.kt)("h2",{id:"configuration-and-deploy-management-testing"},"Configuration and Deploy Management Testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test Network/Infrastructure Configuration (OTG-CONFIG-001)"),(0,a.kt)("li",{parentName:"ul"},"Test Application Platform Configuration (OTG-CONFIG-002)"),(0,a.kt)("li",{parentName:"ul"},"Test File Extensions Handling for Sensitive Information (OTG-CONFIG-003)"),(0,a.kt)("li",{parentName:"ul"},"Review Old, Backup and Unreferenced Files for Sensitive Information (OTG-CONFIG-004) "),(0,a.kt)("li",{parentName:"ul"},"Enumerate Infrastructure and Application Admin Interfaces (OTG-CONFIG-005)"),(0,a.kt)("li",{parentName:"ul"},"Test HTTP Methods (OTG-CONFIG-006)"),(0,a.kt)("li",{parentName:"ul"},"Test HTTP Strict Transport Security (OTG-CONFIG-007)"),(0,a.kt)("li",{parentName:"ul"},"Test RIA cross domain policy (OTG-CONFIG-008)")),(0,a.kt)("h2",{id:"identity-management-testing"},"Identity Management Testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test Role Definitions (OTG-IDENT-001)"),(0,a.kt)("li",{parentName:"ul"},"Test User Registration Process (OTG-IDENT-002)"),(0,a.kt)("li",{parentName:"ul"},"Test Account Provisioning Process (OTG-IDENT-003)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Account Enumeration and Guessable User Account (OTG-IDENT-004)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Weak or unenforced username policy (OTG-IDENT-005)")),(0,a.kt)("h2",{id:"authentication-testing"},"Authentication Testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing for Credentials Transported over an Encrypted Channel (OTG-AUTHN-001)"),(0,a.kt)("li",{parentName:"ul"},"Testing for default credentials (OTG-AUTHN-002)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Weak lock out mechanism (OTG-AUTHN-003)"),(0,a.kt)("li",{parentName:"ul"},"Testing for bypassing authentication schema (OTG-AUTHN-004)"),(0,a.kt)("li",{parentName:"ul"},"Test remember password functionality (OTG-AUTHN-005)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Browser cache weakness (OTG-AUTHN-006)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Weak password policy (OTG-AUTHN-007)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Weak security question/answer (OTG-AUTHN-008)"),(0,a.kt)("li",{parentName:"ul"},"Testing for weak password change or reset functionalities (OTG-AUTHN-009)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Weaker authentication in alternative channel (OTG-AUTHN-010)")),(0,a.kt)("h2",{id:"authorization-testing"},"Authorization Testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing Directory traversal/file include (OTG-AUTHZ-001)"),(0,a.kt)("li",{parentName:"ul"},"Testing for bypassing authorization schema (OTG-AUTHZ-002)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Privilege Escalation (OTG-AUTHZ-003)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Insecure Direct Object References (OTG-AUTHZ-004)")),(0,a.kt)("h2",{id:"session-management-testing"},"Session Management Testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing for Bypassing Session Management Schema (OTG-SESS-001)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Cookies attributes (OTG-SESS-002)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Session Fixation (OTG-SESS-003)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Exposed Session Variables (OTG-SESS-004)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Cross Site Request Forgery (CSRF) (OTG-SESS-005)"),(0,a.kt)("li",{parentName:"ul"},"Testing for logout functionality (OTG-SESS-006)"),(0,a.kt)("li",{parentName:"ul"},"Test Session Timeout (OTG-SESS-007)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Session puzzling (OTG-SESS-008)")),(0,a.kt)("h2",{id:"input-validation-testing"},"Input Validation Testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing for Reflected Cross Site Scripting (OTG-INPVAL-001)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Stored Cross Site Scripting (OTG-INPVAL-002)"),(0,a.kt)("li",{parentName:"ul"},"Testing for HTTP Verb Tampering (OTG-INPVAL-003)"),(0,a.kt)("li",{parentName:"ul"},"Testing for HTTP Parameter pollution (OTG-INPVAL-004)"),(0,a.kt)("li",{parentName:"ul"},"Testing for SQL Injection (OTG-INPVAL-005)  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Oracle Testing  "),(0,a.kt)("li",{parentName:"ul"},"MySQL Testing  "),(0,a.kt)("li",{parentName:"ul"},"SQL Server Testing  "),(0,a.kt)("li",{parentName:"ul"},"Testing PostgreSQL (from OWASP BSP)   "),(0,a.kt)("li",{parentName:"ul"},"MS Access Testing  "),(0,a.kt)("li",{parentName:"ul"},"Testing for NoSQL injection"))),(0,a.kt)("li",{parentName:"ul"},"Testing for LDAP Injection (OTG-INPVAL-006) "),(0,a.kt)("li",{parentName:"ul"},"Testing for ORM Injection (OTG-INPVAL-007) "),(0,a.kt)("li",{parentName:"ul"},"Testing for XML Injection (OTG-INPVAL-008) "),(0,a.kt)("li",{parentName:"ul"},"Testing for SSI Injection (OTG-INPVAL-009) "),(0,a.kt)("li",{parentName:"ul"},"Testing for XPath Injection (OTG-INPVAL-010) "),(0,a.kt)("li",{parentName:"ul"},"IMAP/SMTP Injection (OTG-INPVAL-011) "),(0,a.kt)("li",{parentName:"ul"},"Testing for Code Injection (OTG-INPVAL-012)  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Testing for Local File Inclusion  "),(0,a.kt)("li",{parentName:"ul"},"Testing for Remote File Inclusion"))),(0,a.kt)("li",{parentName:"ul"},"Testing for Command Injection (OTG-INPVAL-013) "),(0,a.kt)("li",{parentName:"ul"},"Testing for Buffer overflow (OTG-INPVAL-014)  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Testing for Heap overflow  "),(0,a.kt)("li",{parentName:"ul"},"Testing for Stack overflow  "),(0,a.kt)("li",{parentName:"ul"},"Testing for Format string"))),(0,a.kt)("li",{parentName:"ul"},"Testing for incubated vulnerabilities (OTG-INPVAL-015) "),(0,a.kt)("li",{parentName:"ul"},"Testing for HTTP Splitting/Smuggling (OTG-INPVAL-016)")),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Analysis of Error Codes (OTG-ERR-001)"),(0,a.kt)("li",{parentName:"ul"},"Analysis of Stack Traces (OTG-ERR-002)")),(0,a.kt)("h2",{id:"cryptography"},"Cryptography"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing for Weak SSL/TLS Ciphers, Insufficient Transport Layer Protection (OTG-CRYPST-001) "),(0,a.kt)("li",{parentName:"ul"},"Testing for Padding Oracle (OTG-CRYPST-002)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Sensitive information sent via unencrypted channels (OTG-CRYPST-003)")),(0,a.kt)("h2",{id:"business-logic-testing"},"Business Logic Testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test Business Logic Data Validation (OTG-BUSLOGIC-001) "),(0,a.kt)("li",{parentName:"ul"},"Test Ability to Forge Requests (OTG-BUSLOGIC-002)"),(0,a.kt)("li",{parentName:"ul"},"Test Integrity Checks (OTG-BUSLOGIC-003)"),(0,a.kt)("li",{parentName:"ul"},"Test for Process Timing (OTG-BUSLOGIC-004)"),(0,a.kt)("li",{parentName:"ul"},"Test Number of Times a Function Can be Used Limits (OTG-BUSLOGIC-005) "),(0,a.kt)("li",{parentName:"ul"},"Testing for the Circumvention of Work Flows (OTG-BUSLOGIC-006)"),(0,a.kt)("li",{parentName:"ul"},"Test Defenses Against Application Mis-use (OTG-BUSLOGIC-007)"),(0,a.kt)("li",{parentName:"ul"},"Test Upload of Unexpected File Types (OTG-BUSLOGIC-008)"),(0,a.kt)("li",{parentName:"ul"},"Test Upload of Malicious Files (OTG-BUSLOGIC-009)")),(0,a.kt)("h2",{id:"client-side-testing"},"Client Side Testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing for DOM based Cross Site Scripting (OTG-CLIENT-001) "),(0,a.kt)("li",{parentName:"ul"},"Testing for JavaScript Execution (OTG-CLIENT-002)"),(0,a.kt)("li",{parentName:"ul"},"Testing for HTML Injection (OTG-CLIENT-003)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Client Side URL Redirect (OTG-CLIENT-004) "),(0,a.kt)("li",{parentName:"ul"},"Testing for CSS Injection (OTG-CLIENT-005)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Client Side Resource Manipulation (OTG-CLIENT-006) "),(0,a.kt)("li",{parentName:"ul"},"Test Cross Origin Resource Sharing (OTG-CLIENT-007)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Cross Site Flashing (OTG-CLIENT-008)"),(0,a.kt)("li",{parentName:"ul"},"Testing for Clickjacking (OTG-CLIENT-009)"),(0,a.kt)("li",{parentName:"ul"},"Testing WebSockets (OTG-CLIENT-010) "),(0,a.kt)("li",{parentName:"ul"},"Test Web Messaging (OTG-CLIENT-011) "),(0,a.kt)("li",{parentName:"ul"},"Test Local Storage (OTG-CLIENT-012)")),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf"},"https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:05:59)"),(0,a.kt)("p",null,"tags: security"))}c.isMDXComponent=!0}}]);