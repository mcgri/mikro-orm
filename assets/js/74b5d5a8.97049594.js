"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31690],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4234:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],c={id:"core.QueryResult",title:"Interface: QueryResult<T>",sidebar_label:"QueryResult",custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/core.QueryResult",id:"api/interfaces/core.QueryResult",isDocsHomePage:!1,title:"Interface: QueryResult<T>",description:"core.QueryResult",source:"@site/docs/api/interfaces/core.QueryResult.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.QueryResult",permalink:"/docs/next/api/interfaces/core.QueryResult",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.QueryResult",title:"Interface: QueryResult<T>",sidebar_label:"QueryResult",custom_edit_url:null},sidebar:"API",previous:{title:"PrimaryKeyOptions",permalink:"/docs/next/api/interfaces/core.PrimaryKeyOptions"},next:{title:"ReferenceOptions",permalink:"/docs/next/api/interfaces/core.ReferenceOptions"}},s=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"affectedRows",id:"affectedrows",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"insertId",id:"insertid",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"row",id:"row",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"rows",id:"rows",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".QueryResult"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("a",{parentName:"td",href:"../modules/core#anyentity"},(0,a.kt)("inlineCode",{parentName:"a"},"AnyEntity")),"<",(0,a.kt)("inlineCode",{parentName:"td"},"T"),">","{ ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"number"),"  }")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"affectedrows"},"affectedRows"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"affectedRows"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4dd414a/packages/core/src/connections/Connection.ts#L143"},"packages/core/src/connections/Connection.ts:143")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"insertid"},"insertId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"insertId"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#primary"},(0,a.kt)("inlineCode",{parentName:"a"},"Primary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4dd414a/packages/core/src/connections/Connection.ts#L144"},"packages/core/src/connections/Connection.ts:144")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"row"},"row"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"row"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,a.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4dd414a/packages/core/src/connections/Connection.ts#L145"},"packages/core/src/connections/Connection.ts:145")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rows"},"rows"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"rows"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,a.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4dd414a/packages/core/src/connections/Connection.ts#L146"},"packages/core/src/connections/Connection.ts:146")))}u.isMDXComponent=!0}}]);