"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68412],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=d(r),m=i,u=k["".concat(p,".").concat(m)]||k[m]||c[m]||a;return r?n.createElement(u,l(l({ref:t},s),{},{components:r})):n.createElement(u,l({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},332:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return k}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),l=["components"],o={id:"core.FindOptions",title:"Interface: FindOptions<T, P>",sidebar_label:"FindOptions",custom_edit_url:null},p=void 0,d={unversionedId:"api/interfaces/core.FindOptions",id:"api/interfaces/core.FindOptions",title:"Interface: FindOptions<T, P>",description:"core.FindOptions",source:"@site/docs/api/interfaces/core.FindOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.FindOptions",permalink:"/docs/next/api/interfaces/core.FindOptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.FindOptions",title:"Interface: FindOptions<T, P>",sidebar_label:"FindOptions",custom_edit_url:null},sidebar:"API",previous:{title:"FindOneOrFailOptions",permalink:"/docs/next/api/interfaces/core.FindOneOrFailOptions"},next:{title:"FlatQueryOrderMap",permalink:"/docs/next/api/interfaces/core.FlatQueryOrderMap"}},s=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"convertCustomTypes",id:"convertcustomtypes",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"ctx",id:"ctx",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"disableIdentityMap",id:"disableidentitymap",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"fields",id:"fields",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"filters",id:"filters",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"flags",id:"flags",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"flushMode",id:"flushmode",children:[{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"groupBy",id:"groupby",children:[{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"having",id:"having",children:[{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3},{value:"limit",id:"limit",children:[{value:"Defined in",id:"defined-in-10",children:[],level:4}],level:3},{value:"lockMode",id:"lockmode",children:[{value:"Defined in",id:"defined-in-11",children:[],level:4}],level:3},{value:"lockTableAliases",id:"locktablealiases",children:[{value:"Defined in",id:"defined-in-12",children:[],level:4}],level:3},{value:"offset",id:"offset",children:[{value:"Defined in",id:"defined-in-13",children:[],level:4}],level:3},{value:"orderBy",id:"orderby",children:[{value:"Defined in",id:"defined-in-14",children:[],level:4}],level:3},{value:"populate",id:"populate",children:[{value:"Defined in",id:"defined-in-15",children:[],level:4}],level:3},{value:"populateWhere",id:"populatewhere",children:[{value:"Defined in",id:"defined-in-16",children:[],level:4}],level:3},{value:"refresh",id:"refresh",children:[{value:"Defined in",id:"defined-in-17",children:[],level:4}],level:3},{value:"schema",id:"schema",children:[{value:"Defined in",id:"defined-in-18",children:[],level:4}],level:3},{value:"strategy",id:"strategy",children:[{value:"Defined in",id:"defined-in-19",children:[],level:4}],level:3}],level:2}],c={toc:s};function k(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".FindOptions"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"P")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = ",(0,a.kt)("inlineCode",{parentName:"td"},"never"))))),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FindOptions"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"core.MatchingOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"MatchingOptions"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cache"},"cache"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cache"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L94"},"packages/core/src/drivers/IDatabaseDriver.ts:94")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"convertCustomTypes"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L98"},"packages/core/src/drivers/IDatabaseDriver.ts:98")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ctx"},"ctx"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"ctx"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L110"},"packages/core/src/drivers/IDatabaseDriver.ts:110")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"disableidentitymap"},"disableIdentityMap"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"disableIdentityMap"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L99"},"packages/core/src/drivers/IDatabaseDriver.ts:99")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fields"},"fields"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"fields"),": readonly ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#entityfield"},(0,a.kt)("inlineCode",{parentName:"a"},"EntityField")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"P"),">","[]"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L100"},"packages/core/src/drivers/IDatabaseDriver.ts:100")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"filters"},"filters"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"filters"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,a.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,a.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L107"},"packages/core/src/drivers/IDatabaseDriver.ts:107")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"flags"},"flags"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"flags"),": ",(0,a.kt)("a",{parentName:"p",href:"../enums/core.QueryFlag"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryFlag")),"[]"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L102"},"packages/core/src/drivers/IDatabaseDriver.ts:102")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"flushmode"},"flushMode"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"flushMode"),": ",(0,a.kt)("a",{parentName:"p",href:"../enums/core.FlushMode"},(0,a.kt)("inlineCode",{parentName:"a"},"FlushMode"))),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L106"},"packages/core/src/drivers/IDatabaseDriver.ts:106")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"groupby"},"groupBy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"groupBy"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L103"},"packages/core/src/drivers/IDatabaseDriver.ts:103")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"having"},"having"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"having"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#qbfilterquery"},(0,a.kt)("inlineCode",{parentName:"a"},"QBFilterQuery")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L104"},"packages/core/src/drivers/IDatabaseDriver.ts:104")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"limit"},"limit"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"limit"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L95"},"packages/core/src/drivers/IDatabaseDriver.ts:95")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lockmode"},"lockMode"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"lockMode"),": ",(0,a.kt)("a",{parentName:"p",href:"../enums/core.LockMode#none"},(0,a.kt)("inlineCode",{parentName:"a"},"NONE"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../enums/core.LockMode#pessimistic_read"},(0,a.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_READ"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../enums/core.LockMode#pessimistic_write"},(0,a.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_WRITE"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../enums/core.LockMode#pessimistic_partial_write"},(0,a.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_PARTIAL_WRITE"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../enums/core.LockMode#pessimistic_write_or_fail"},(0,a.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_WRITE_OR_FAIL"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../enums/core.LockMode#pessimistic_partial_read"},(0,a.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_PARTIAL_READ"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../enums/core.LockMode#pessimistic_read_or_fail"},(0,a.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_READ_OR_FAIL"))),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L108"},"packages/core/src/drivers/IDatabaseDriver.ts:108")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"locktablealiases"},"lockTableAliases"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"lockTableAliases"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L109"},"packages/core/src/drivers/IDatabaseDriver.ts:109")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"offset"},"offset"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"offset"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L96"},"packages/core/src/drivers/IDatabaseDriver.ts:96")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"orderby"},"orderBy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"orderBy"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#queryordermap"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryOrderMap")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">"," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#queryordermap"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryOrderMap")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">","[]"),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L93"},"packages/core/src/drivers/IDatabaseDriver.ts:93")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"populate"},"populate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"populate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," readonly ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoPath"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"P"),">","[]"),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L91"},"packages/core/src/drivers/IDatabaseDriver.ts:91")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"populatewhere"},"populateWhere"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"populateWhere"),": ",(0,a.kt)("a",{parentName:"p",href:"../enums/core.PopulateHint"},(0,a.kt)("inlineCode",{parentName:"a"},"PopulateHint"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#objectquery"},(0,a.kt)("inlineCode",{parentName:"a"},"ObjectQuery")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L92"},"packages/core/src/drivers/IDatabaseDriver.ts:92")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"refresh"},"refresh"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"refresh"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L97"},"packages/core/src/drivers/IDatabaseDriver.ts:97")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"schema"},"schema"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"schema"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L101"},"packages/core/src/drivers/IDatabaseDriver.ts:101")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"strategy"},"strategy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"strategy"),": ",(0,a.kt)("a",{parentName:"p",href:"../enums/core.LoadStrategy"},(0,a.kt)("inlineCode",{parentName:"a"},"LoadStrategy"))),(0,a.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/16c5e91/packages/core/src/drivers/IDatabaseDriver.ts#L105"},"packages/core/src/drivers/IDatabaseDriver.ts:105")))}k.isMDXComponent=!0}}]);