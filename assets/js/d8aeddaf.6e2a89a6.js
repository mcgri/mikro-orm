"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11385],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=s(a),d=n,g=k["".concat(l,".").concat(d)]||k[d]||m[d]||i;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},10637:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return k}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),o=["components"],p={id:"entity_generator.entitygenerator",title:"Class: EntityGenerator",sidebar_label:"EntityGenerator",custom_edit_url:null,hide_title:!0},l="Class: EntityGenerator",s={unversionedId:"api/classes/entity_generator.entitygenerator",id:"version-4.5/api/classes/entity_generator.entitygenerator",isDocsHomePage:!1,title:"Class: EntityGenerator",description:"entity-generator.EntityGenerator",source:"@site/versioned_docs/version-4.5/api/classes/entity_generator.entitygenerator.md",sourceDirName:"api/classes",slug:"/api/classes/entity_generator.entitygenerator",permalink:"/docs/api/classes/entity_generator.entitygenerator",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637754774,formattedLastUpdatedAt:"11/24/2021",frontMatter:{id:"entity_generator.entitygenerator",title:"Class: EntityGenerator",sidebar_label:"EntityGenerator",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"WrappedEntity",permalink:"/docs/api/classes/core.wrappedentity"},next:{title:"Client",permalink:"/docs/api/classes/knex.knex-1.client"}},c=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[],level:3},{value:"connection",id:"connection",children:[],level:3},{value:"driver",id:"driver",children:[],level:3},{value:"helper",id:"helper",children:[],level:3},{value:"namingStrategy",id:"namingstrategy",children:[],level:3},{value:"platform",id:"platform",children:[],level:3},{value:"sources",id:"sources",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"createEntity",id:"createentity",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"generate",id:"generate",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3}],level:2}],m={toc:c};function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-entitygenerator"},"Class: EntityGenerator"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/entity_generator"},"entity-generator"),".EntityGenerator"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new EntityGenerator"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">",">","): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/entity_generator.entitygenerator"},(0,i.kt)("em",{parentName:"a"},"EntityGenerator"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/entity_generator.entitygenerator"},(0,i.kt)("em",{parentName:"a"},"EntityGenerator"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/entity-generator/src/EntityGenerator.ts#L14"},"packages/entity-generator/src/EntityGenerator.ts:14")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"config"},"config"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"config"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,i.kt)("em",{parentName:"a"},"Configuration")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/entity-generator/src/EntityGenerator.ts#L8"},"packages/entity-generator/src/EntityGenerator.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"connection"},"connection"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"connection"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/entity-generator/src/EntityGenerator.ts#L12"},"packages/entity-generator/src/EntityGenerator.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"driver"},"driver"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"driver"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/entity-generator/src/EntityGenerator.ts#L9"},"packages/entity-generator/src/EntityGenerator.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"helper"},"helper"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"helper"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.schemahelper"},(0,i.kt)("em",{parentName:"a"},"SchemaHelper"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/entity-generator/src/EntityGenerator.ts#L11"},"packages/entity-generator/src/EntityGenerator.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"namingstrategy"},"namingStrategy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"namingStrategy"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},(0,i.kt)("em",{parentName:"a"},"NamingStrategy"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/entity-generator/src/EntityGenerator.ts#L13"},"packages/entity-generator/src/EntityGenerator.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"platform"},"platform"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"platform"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlplatform"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlPlatform"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/entity-generator/src/EntityGenerator.ts#L10"},"packages/entity-generator/src/EntityGenerator.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sources"},"sources"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"sources"),": ",(0,i.kt)("em",{parentName:"p"},"SourceFile"),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/entity-generator/src/EntityGenerator.ts#L14"},"packages/entity-generator/src/EntityGenerator.ts:14")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"createentity"},"createEntity"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createEntity"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"table"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databasetable"},(0,i.kt)("em",{parentName:"a"},"DatabaseTable")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"table")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.databasetable"},(0,i.kt)("em",{parentName:"a"},"DatabaseTable")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/entity-generator/src/EntityGenerator.ts#L31"},"packages/entity-generator/src/EntityGenerator.ts:31")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"generate"},"generate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"generate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"baseDir?"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"save?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"  }): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string[]",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.baseDir?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.save?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/entity-generator/src/EntityGenerator.ts#L18"},"packages/entity-generator/src/EntityGenerator.ts:18")))}k.isMDXComponent=!0}}]);