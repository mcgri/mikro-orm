"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77400],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(y,o(o({ref:t},s),{},{components:n})):a.createElement(y,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Metadata Providers"},p=void 0,d={unversionedId:"metadata-providers",id:"version-3.6/metadata-providers",title:"Metadata Providers",description:"As part of entity discovery process, MikroORM uses so called MetadataProvider to get necessary",source:"@site/versioned_docs/version-3.6/metadata-providers.md",sourceDirName:".",slug:"/metadata-providers",permalink:"/docs/3.6/metadata-providers",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/metadata-providers.md",tags:[],version:"3.6",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1642843496,formattedLastUpdatedAt:"1/22/2022",frontMatter:{title:"Metadata Providers"},sidebar:"version-3.6/docs",previous:{title:"Defining Entities via EntitySchema",permalink:"/docs/3.6/entity-schema"},next:{title:"Metadata Cache",permalink:"/docs/3.6/metadata-cache"}},s=[{value:"TsMorphMetadataProvider",id:"tsmorphmetadataprovider",children:[],level:2},{value:"ReflectMetadataProvider",id:"reflectmetadataprovider",children:[{value:"Limitations and requirements",id:"limitations-and-requirements",children:[{value:"Explicit types",id:"explicit-types",children:[],level:4},{value:"Collection properties and Identified references",id:"collection-properties-and-identified-references",children:[],level:4},{value:"Optional properties",id:"optional-properties",children:[],level:4},{value:"Enums",id:"enums",children:[],level:4},{value:"Circular dependencies",id:"circular-dependencies",children:[],level:4},{value:"Additional typings might be required",id:"additional-typings-might-be-required",children:[],level:4}],level:3}],level:2},{value:"JavaScriptMetadataProvider",id:"javascriptmetadataprovider",children:[],level:2}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As part of entity discovery process, MikroORM uses so called ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataProvider")," to get necessary\ntype information about your entities' properties. There are 3 built in metadata providers you can\nuse:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can also implement custom metadata provider by extending abstract ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataProvider")," class.")),(0,i.kt)("h2",{id:"tsmorphmetadataprovider"},"TsMorphMetadataProvider"),(0,i.kt)("p",null,"By default, MikroORM uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dsherret/ts-morph"},(0,i.kt)("inlineCode",{parentName:"a"},"ts-morph"))," to read\nTypeScript source files of all entities to be able to detect all types. Thanks to this,\ndefining the type is enough for runtime validation."),(0,i.kt)("p",null,"This process can be a bit slow as well as memory consuming, mainly because ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-morph")," will\nscan all your source files based on your ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". You can speed up this process by\nwhitelisting only the folders where your entities are via ",(0,i.kt)("inlineCode",{parentName:"p"},"entitiesDirsTs")," option. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can specify the path to ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," manually via ",(0,i.kt)("inlineCode",{parentName:"p"},"discovery: { tsConfigPath: '...' }"),".")),(0,i.kt)("p",null,"After the discovery process ends, all ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.6/metadata-cache"},"metadata will be cached"),". By default,\n",(0,i.kt)("inlineCode",{parentName:"p"},"FileCacheAdapter")," will be used to store the cache inside ",(0,i.kt)("inlineCode",{parentName:"p"},"./temp")," folder in JSON files. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can generate production cache via CLI command ",(0,i.kt)("inlineCode",{parentName:"p"},"mikro-orm cache:generate"),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can implement custom cache adapter by implementing ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheAdapter")," interface.")),(0,i.kt)("h2",{id:"reflectmetadataprovider"},"ReflectMetadataProvider"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ReflectMetadataProvider")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"reflect-metadata")," module to read the type from decorator\nmetadata exported by TypeScript compiler. "),(0,i.kt)("p",null,"You will need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"reflect-metadata")," module and import at the top of your app's\nbootstrap script (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"main.ts")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"app.ts"),"). "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import 'reflect-metadata';\n")),(0,i.kt)("p",null,"Next step is to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," flag in your ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"As this approach does not have performance impact, metadata caching is not really necessary. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  metadataProvider: ReflectMetadataProvider,\n  cache: { enabled: false },\n  // ...\n});\n")),(0,i.kt)("h3",{id:"limitations-and-requirements"},"Limitations and requirements"),(0,i.kt)("h4",{id:"explicit-types"},"Explicit types"),(0,i.kt)("p",null,"Type inference is not supported, you need to always explicitly specify the type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Property()\ncreatedAt: Date = new Date();\n")),(0,i.kt)("h4",{id:"collection-properties-and-identified-references"},"Collection properties and Identified references"),(0,i.kt)("p",null,"You need to provide target entity type in ",(0,i.kt)("inlineCode",{parentName:"p"},"@OneToMany")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToMany")," decorators:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@OneToMany(() => Book, b => b.author)\nbooks = new Collection<Book>(this);\n\n@ManyToOne(() => Publisher, { wrappedReference: true })\npublisher!: IdentifiedReference<Publisher>;\n")),(0,i.kt)("h4",{id:"optional-properties"},"Optional properties"),(0,i.kt)("p",null,"Reading property nullability is not supported, you need to explicitly set ",(0,i.kt)("inlineCode",{parentName:"p"},"nullable")," attribute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Property({ nullable: true })\nprop?: string;\n")),(0,i.kt)("h4",{id:"enums"},"Enums"),(0,i.kt)("p",null,"By default, enum is considered as numeric type. For string enums, you need to explicitly\nprovide one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reference to the enum (which will force you to define the enum before defining the entity)",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Enum(() => UserRole)\nrole: UserRole;\n"))),(0,i.kt)("li",{parentName:"ul"},"name of the enum (if it is present in the same file)",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Enum({ type: 'UserRole' })\nrole: UserRole;\n"))),(0,i.kt)("li",{parentName:"ul"},"list of the enum items",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Enum({ items: ['a', 'b', 'c'] })\nrole: UserRole;\n")))),(0,i.kt)("h4",{id:"circular-dependencies"},"Circular dependencies"),(0,i.kt)("p",null,"Reading type of referenced entity in ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToOne")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@OneToOne")," properties fails if there is\ncircular dependency. You will need to explicitly define the type in the decorator (preferably\nvia ",(0,i.kt)("inlineCode",{parentName:"p"},"entity: () => ...")," callback)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@ManyToOne({ entity: () => Author })\nauthor: Author;\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"There can be recursion issues when you define multiple entities (with circular dependencies\nbetween each other) in single file. In that case, you might want to provide the type via decorator's\n",(0,i.kt)("inlineCode",{parentName:"p"},"type")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"entity")," attributes and set the TS property type to something else (like ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),").")),(0,i.kt)("h4",{id:"additional-typings-might-be-required"},"Additional typings might be required"),(0,i.kt)("p",null,"You might have to install additional typings, one example is use of ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectId")," in MongoDB,\nwhich requires ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/mongodb")," to be installed. "),(0,i.kt)("h2",{id:"javascriptmetadataprovider"},"JavaScriptMetadataProvider"),(0,i.kt)("p",null,"This provider should be used only if you are not using TypeScript at all and therefore you do\nnot use decorators to annotate your properties. It will require you to specify the whole schema\nmanually. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  metadataProvider: JavaScriptMetadataProvider,\n  cache: { enabled: false },\n  // ...\n});\n")),(0,i.kt)("p",null,"You can read more about it in ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.6/usage-with-js"},"Usage with JavaScript section"),"."))}u.isMDXComponent=!0}}]);