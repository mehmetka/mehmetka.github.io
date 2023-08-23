"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[2070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={tags:["aws"]},c="Accessing RDS from Lambda",s={unversionedId:"technical/aws/lambda-accessing-rds",id:"technical/aws/lambda-accessing-rds",title:"Accessing RDS from Lambda",description:"1. Assume that you have an RDS",source:"@site/docs/technical/aws/lambda-accessing-rds.md",sourceDirName:"technical/aws",slug:"/technical/aws/lambda-accessing-rds",permalink:"/technical/aws/lambda-accessing-rds",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/aws/lambda-accessing-rds.md",tags:[{label:"aws",permalink:"/tags/aws"}],version:"current",frontMatter:{tags:["aws"]},sidebar:"tutorialSidebar",previous:{title:"Elasticbeanstalk PHP Environment",permalink:"/technical/aws/elasticbeanstalk-php-env"},next:{title:"Customizing Lambda with Docker Image (+Trigger)",permalink:"/technical/aws/lambda-docker-image-with-trigger"}},l={},i=[{value:"Source:",id:"source",level:3}],p={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accessing-rds-from-lambda"},"Accessing RDS from Lambda"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Assume that you have an RDS  "),(0,a.kt)("li",{parentName:"ol"},"Create a role that has 'AWSLambdaVPCAccessExecutionRole' and take Role's ARN info  "),(0,a.kt)("li",{parentName:"ol"},"Run:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install --target . pymysql  \n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Change app.py by RDS credentials")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import sys  \nimport logging  \nimport pymysql\n#rds settings  \nrds_host  = "rds-instance-endpoint"  \nname = "db_username"  \npassword = "db_password"  \ndb_name = "db_name"\n\nlogger = logging.getLogger()  \nlogger.setLevel(logging.INFO)\n\ntry:  \n    conn = pymysql.connect(host=rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)  \nexcept pymysql.MySQLError as e:  \n    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")  \n    logger.error(e)  \n    sys.exit()\n\nlogger.info("SUCCESS: Connection to RDS MySQL instance succeeded")  \ndef lambda_handler(event, context):  \n    """  \n    This function fetches content from MySQL RDS instance  \n    """\n\n    item_count = 0\n\n    with conn.cursor() as cur:  \n        cur.execute("create table Employee ( EmpID  int NOT NULL, Name varchar(255) NOT NULL, PRIMARY KEY (EmpID))")  \n        cur.execute(\'insert into Employee (EmpID, Name) values(1, "Joe")\')  \n        cur.execute(\'insert into Employee (EmpID, Name) values(2, "Bob")\')  \n        cur.execute(\'insert into Employee (EmpID, Name) values(3, "Mary")\')  \n        conn.commit()  \n        cur.execute("select * from Employee")  \n        for row in cur:  \n            item_count += 1  \n            logger.info(row)  \n            #print(row)  \n    conn.commit()\n\n    return "Added %d items from RDS MySQL table" %(item_count)  \n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Bundle the code as app.zip  "),(0,a.kt)("li",{parentName:"ol"},"Find Subnet IDs and Security Group ID (Will be using in next step)  "),(0,a.kt)("li",{parentName:"ol"},"Create Lambda:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"aws lambda create-function --function-name func-name --runtime python3.8 \\  \n   --zip-file fileb://app.zip --role arn:aws:iam::123456789012:role/lambda-vpc-role \\  \n   --vpc-config SubnetIds=${SubnetIDs},SecurityGroupIds=${SecurityGroupIDs}  \n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Give RDS/Aurora access rule to RDS Security Group (Whatever it is -> ${SecurityGroupIDs})")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Trig function:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"aws lambda invoke --function-name func-name output.txt  \n")),(0,a.kt)("h3",{id:"source"},"Source:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/services-rds-tutorial.html"},"https://docs.aws.amazon.com/lambda/latest/dg/services-rds-tutorial.html")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 20:54:36)"),(0,a.kt)("p",null,"tags: aws"))}u.isMDXComponent=!0}}]);