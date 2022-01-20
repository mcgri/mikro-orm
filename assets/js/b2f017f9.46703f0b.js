"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21070],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70363:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={id:"core.changesettype",title:"Enumeration: ChangeSetType",sidebar_label:"ChangeSetType",custom_edit_url:null,hide_title:!0},p="Enumeration: ChangeSetType",u={unversionedId:"api/enums/core.changesettype",id:"version-4.5/api/enums/core.changesettype",title:"Enumeration: ChangeSetType",description:"core.ChangeSetType",source:"@site/versioned_docs/version-4.5/api/enums/core.changesettype.md",sourceDirName:"api/enums",slug:"/api/enums/core.changesettype",permalink:"/docs/api/enums/core.changesettype",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Marcel Link",lastUpdatedAt:1642706792,formattedLastUpdatedAt:"1/20/2022",frontMatter:{id:"core.changesettype",title:"Enumeration: ChangeSetType",sidebar_label:"ChangeSetType",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Cascade",permalink:"/docs/api/enums/core.cascade"},next:{title:"EventType",permalink:"/docs/api/enums/core.eventtype"}},l=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"CREATE",id:"create",children:[],level:3},{value:"DELETE",id:"delete",children:[],level:3},{value:"UPDATE",id:"update",children:[],level:3}],level:2}],s={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enumeration-changesettype"},"Enumeration: ChangeSetType"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ChangeSetType"),(0,o.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,o.kt)("h3",{id:"create"},"CREATE"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"CREATE"),': = "create"'),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L28"},"packages/core/src/unit-of-work/ChangeSet.ts:28")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"delete"},"DELETE"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"DELETE"),': = "delete"'),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L30"},"packages/core/src/unit-of-work/ChangeSet.ts:30")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"update"},"UPDATE"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"UPDATE"),': = "update"'),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L29"},"packages/core/src/unit-of-work/ChangeSet.ts:29")))}m.isMDXComponent=!0}}]);