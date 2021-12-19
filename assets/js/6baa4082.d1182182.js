"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59330],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86630:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],i={title:"Smart Query Conditions"},p=void 0,d={unversionedId:"query-conditions",id:"version-4.3/query-conditions",title:"Smart Query Conditions",description:"When you want to make complex queries, you can easily end up with a lot of boilerplate code",source:"@site/versioned_docs/version-4.3/query-conditions.md",sourceDirName:".",slug:"/query-conditions",permalink:"/docs/4.3/query-conditions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/query-conditions.md",tags:[],version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1639926707,formattedLastUpdatedAt:"12/19/2021",frontMatter:{title:"Smart Query Conditions"},sidebar:"version-4.3/docs",previous:{title:"Smart Nested Populate",permalink:"/docs/4.3/nested-populate"},next:{title:"Propagation",permalink:"/docs/4.3/propagation"}},u=[{value:"List of supported operators",id:"list-of-supported-operators",children:[{value:"Comparison",id:"comparison",children:[],level:3},{value:"Logical",id:"logical",children:[],level:3}],level:2}],s={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When you want to make complex queries, you can easily end up with a lot of boilerplate code\nfull of curly brackets:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { id: { $in: [1, 2, 7] }, },\n  { id: { $nin: [3, 4] }, },\n  { id: { $gt: 5 }, },\n  { id: { $lt: 10 }, },\n  { id: { $gte: 7 }, },\n  { id: { $lte: 8 }, },\n  { id: { $ne: 9 }, },\n] });\n")),(0,l.kt)("p",null,"For AND condition with single field, you can also do this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { \n  id: { \n    $in: [1, 2, 7],\n    $nin: [3, 4],\n    $gt: 5,\n    $lt: 10,\n    $gte: 7,\n    $lte: 8,\n    $ne: 9,\n  },\n});\n")),(0,l.kt)("p",null,"Another way to do this by including the operator in your keys:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This approach is deprecated and will be removed in future versions.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { 'id:in': [1, 2, 7] },\n  { 'id:nin': [3, 4] },\n  { 'id:gt': 5 },\n  { 'id:lt': 10 },\n  { 'id:gte': 7 },\n  { 'id:lte': 8 },\n  { 'id:ne': 9 },\n] });\n")),(0,l.kt)("p",null,"For comparison operators, you can also use their mathematical symbols:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { 'id >': 5 },\n  { 'id <': 10 },\n  { 'id >=': 7 },\n  { 'id <=': 8 },\n  { 'id !=': 9 },\n] });\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Keys with operators like this will cause TypeScript errors as there is no way to support\nthem on the typings side. They are still supported, but you will need to cast the condition\nto ",(0,l.kt)("inlineCode",{parentName:"p"},"any")," to use them. ")),(0,l.kt)("p",null,"There is also shortcut for ",(0,l.kt)("inlineCode",{parentName:"p"},"$in")," - simply provide array as value and it\nwill be converted automatically:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { favouriteBook: [1, 2, 7] });\n")),(0,l.kt)("p",null,"For primary key lookup, you can provide the array directly to ",(0,l.kt)("inlineCode",{parentName:"p"},"em.find()"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, [1, 2, 7]);\n")),(0,l.kt)("h2",{id:"list-of-supported-operators"},"List of supported operators"),(0,l.kt)("h3",{id:"comparison"},"Comparison"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"operator"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$eq")),(0,l.kt)("td",{parentName:"tr",align:null},"equals"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are equal to a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$gt")),(0,l.kt)("td",{parentName:"tr",align:null},"greater"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are greater than a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$gte")),(0,l.kt)("td",{parentName:"tr",align:null},"greater or equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are greater than or equal to a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$in")),(0,l.kt)("td",{parentName:"tr",align:null},"contains"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches any of the values specified in an array.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$lt")),(0,l.kt)("td",{parentName:"tr",align:null},"lower"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are less than a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$lte")),(0,l.kt)("td",{parentName:"tr",align:null},"lower or equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are less than or equal to a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$ne")),(0,l.kt)("td",{parentName:"tr",align:null},"not equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches all values that are not equal to a specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$nin")),(0,l.kt)("td",{parentName:"tr",align:null},"not contains"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches none of the values specified in an array.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$like")),(0,l.kt)("td",{parentName:"tr",align:null},"like"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses LIKE operator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$re")),(0,l.kt)("td",{parentName:"tr",align:null},"regexp"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses REGEXP operator")))),(0,l.kt)("h3",{id:"logical"},"Logical"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"operator"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$and")),(0,l.kt)("td",{parentName:"tr",align:null},"Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$not")),(0,l.kt)("td",{parentName:"tr",align:null},"Inverts the effect of a query expression and returns documents that do not match the query expression.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$or")),(0,l.kt)("td",{parentName:"tr",align:null},"Joins query clauses with a logical OR returns all documents that match the conditions of either clause.")))))}c.isMDXComponent=!0}}]);