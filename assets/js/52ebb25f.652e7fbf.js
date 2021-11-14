"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97401],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53859:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],c={id:"core.ConnectionConfig",title:"Interface: ConnectionConfig",sidebar_label:"ConnectionConfig",custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/core.ConnectionConfig",id:"api/interfaces/core.ConnectionConfig",isDocsHomePage:!1,title:"Interface: ConnectionConfig",description:"core.ConnectionConfig",source:"@site/docs/api/interfaces/core.ConnectionConfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.ConnectionConfig",permalink:"/docs/next/api/interfaces/core.ConnectionConfig",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.ConnectionConfig",title:"Interface: ConnectionConfig",sidebar_label:"ConnectionConfig",custom_edit_url:null},sidebar:"API",previous:{title:"CacheAdapter",permalink:"/docs/next/api/interfaces/core.CacheAdapter"},next:{title:"ConnectionOptions",permalink:"/docs/next/api/interfaces/core.ConnectionOptions"}},s=[{value:"Properties",id:"properties",children:[{value:"database",id:"database",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"host",id:"host",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"password",id:"password",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"port",id:"port",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"user",id:"user",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],d={toc:s};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".ConnectionConfig"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"database"},"database"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"database"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4dd414a/packages/core/src/connections/Connection.ts#L154"},"packages/core/src/connections/Connection.ts:154")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"host"},"host"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"host"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4dd414a/packages/core/src/connections/Connection.ts#L150"},"packages/core/src/connections/Connection.ts:150")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"password"},"password"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"password"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," () => ",(0,i.kt)("inlineCode",{parentName:"p"},"MaybePromise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"MaybePromise"),"<",(0,i.kt)("a",{parentName:"p",href:"core.DynamicPassword"},(0,i.kt)("inlineCode",{parentName:"a"},"DynamicPassword")),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4dd414a/packages/core/src/connections/Connection.ts#L153"},"packages/core/src/connections/Connection.ts:153")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"port"},"port"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"port"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4dd414a/packages/core/src/connections/Connection.ts#L151"},"packages/core/src/connections/Connection.ts:151")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"user"},"user"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"user"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4dd414a/packages/core/src/connections/Connection.ts#L152"},"packages/core/src/connections/Connection.ts:152")))}u.isMDXComponent=!0}}]);