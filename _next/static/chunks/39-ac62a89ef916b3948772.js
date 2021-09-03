(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{2682:function(e,n,o){"use strict";o.d(n,{Z:function(){return c}});var i=o(5893),t=o(9008);function c(e){var n=e.title,o=void 0===n?"Health icons":n,c=e.description,l=void 0===c?"Free, open source health icons. Use in your next commercial or personal project. Editing is ok. Republishing is ok. No need to give credit.":c,a=e.path,s=void 0===a?"/":a,r=e.image,d=void 0===r?"og_image.png":r,u=e.imageWidth,h=void 0===u?1280:u,m=e.imageHeight,p=void 0===m?640:m;return(0,i.jsxs)(t.default,{children:[(0,i.jsx)("title",{children:o}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("meta",{property:"og:site_name",content:"Health icons"}),(0,i.jsx)("meta",{property:"og:title",content:o}),(0,i.jsx)("meta",{property:"og:description",content:l}),(0,i.jsx)("meta",{property:"og:url",content:"http://healthicons.org".concat(s)}),(0,i.jsx)("meta",{property:"og:image",content:"http://healthicons.org/".concat(d)}),(0,i.jsx)("meta",{property:"og:image:secure_url",content:"https://healthicons.org/".concat(d)}),(0,i.jsx)("meta",{property:"og:image:width",content:h.toString()}),(0,i.jsx)("meta",{property:"og:image:height",content:p.toString()}),(0,i.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{property:"twitter:image",content:"https://healthicons.org/".concat(d)}),(0,i.jsx)("meta",{property:"twitter:site",content:"@health_icons"})]})}},7908:function(e,n,o){"use strict";o.d(n,{Z:function(){return P}});var i=o(6265),t=o(5893),c=o(4121),l=o(7294),a=o(1163),s=o(9226),r=o(4184),d=o.n(r),u=o(6909);var h=o(5440),m=o(7125),p=o.n(m);function g(e){return(0,t.jsx)("h2",{className:p().categoryHeading,children:e.children})}var x=o(9999),_=o(9054),j=o(2748),f=o.n(j);function v(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function y(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?v(Object(o),!0).forEach((function(n){(0,i.Z)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function b(e){var n=e.categories,o=(0,s.I0)(),i="All categories",c=[i].concat((0,x.Z)(n.map((function(e){return e.title}))));return(0,t.jsx)(_.ZP,{onChange:function(e){o((0,u.PR)(e===i?"":e))},children:function(e){var n=e.getItemProps,o=e.openMenu,l=e.closeMenu,a=e.isOpen,s=e.selectedItem;return(0,t.jsxs)("div",{className:f().categoryDropdown,children:[(0,t.jsx)("button",{className:f().menuButton,onClick:function(){return a?l():o()},children:s||i}),a&&(0,t.jsx)("div",{children:(0,t.jsx)("ul",{className:f().menuContainer,children:c.map((function(e,o){return(0,t.jsx)("li",y(y({},n({index:o,item:e,isSelected:s===e})),{},{children:(0,t.jsx)("button",{className:d()(f().menuItem),children:e})}),e)}))})})]})}})}var T=o(2679),N=(o(5940),o(3759)),C=o.n(N);function I(e){var n=this,o=d()(C().iconGroup,(0,i.Z)({},C().hidden,!e.visible));return(0,t.jsxs)("div",{className:o,children:[["all","filled"].includes(e.iconStyle)&&(0,t.jsxs)("button",{className:C().iconItem,onClick:function(){e.onClick.call(n,"filled")},children:[(0,t.jsx)("div",{className:C().iconThumb,children:(0,t.jsx)(T.LazyLoadImage,{src:"/icons/svg/filled/".concat(e.icon.category,"/").concat(e.icon.id,".svg"),width:"48",height:"48",alt:"".concat(e.icon.title," outline icon"),effect:"opacity"})}),(0,t.jsx)("div",{className:C().iconTitle,children:e.icon.title})]}),["all","outline"].includes(e.iconStyle)&&(0,t.jsxs)("button",{className:C().iconItem,onClick:function(){e.onClick.call(n,"outline")},children:[(0,t.jsx)("div",{className:C().iconThumb,children:(0,t.jsx)(T.LazyLoadImage,{src:"/icons/svg/outline/".concat(e.icon.category,"/").concat(e.icon.id,".svg"),width:"48",height:"48",alt:"".concat(e.icon.title," outline icon"),effect:"opacity"})}),(0,t.jsx)("div",{className:C().iconTitle,children:e.icon.title})]})]})}var w=o(5432),k=o.n(w);function B(e){var n=e.icons,o=e.style,i=e.setModalIcon,c=(0,a.useRouter)();return(0,t.jsx)("div",{className:k().iconGrid,children:n.map((function(e,n){return(0,t.jsx)(I,{icon:e,iconStyle:o,visible:!0,onClick:function(n){c.push("/","/icon/".concat(n,"/").concat(e.category,"/").concat(e.id),{shallow:!0,scroll:!1}),i({icon:e,iconType:n})}},n)}))})}var L=o(768),M=o.n(L),O=o(3253),D=o.n(O);function S(e){return(0,t.jsxs)(D(),{isOpen:e.isOpen,bodyOpenClassName:"modal--open",onRequestClose:e.onClose,className:M().modalContainer,overlayClassName:M().modalBody,closeTimeoutMS:200,children:[(0,t.jsxs)("div",{className:M().modalWrapper,children:[(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:"/icons/svg/".concat(e.iconType,"/").concat(e.icon.category,"/").concat(e.icon.id,".svg"),className:M().modalImage,width:"96",height:"96",alt:""}),(0,t.jsx)("div",{className:M().modalLabel,children:"Icon"}),(0,t.jsx)("div",{className:M().modalTitle,children:e.icon.title}),(0,t.jsxs)("div",{className:M().modalButtons,children:[(0,t.jsx)("a",{href:"/icons/svg/".concat(e.iconType,"/").concat(e.icon.category,"/").concat(e.icon.id,".svg"),download:"".concat(e.icon.id,".svg"),className:M().modalButton,children:(0,t.jsx)("span",{children:"SVG"})}),(0,t.jsx)("a",{href:"/icons/png/".concat(e.iconType,"/").concat(e.icon.category,"/").concat(e.icon.id,".png"),download:"".concat(e.icon.id,".png"),className:M().modalButton,children:(0,t.jsx)("span",{children:"48px PNG"})}),(0,t.jsx)("a",{href:"/icons/png/".concat(e.iconType,"/").concat(e.icon.category,"/").concat(e.icon.id,"@2x.png"),download:"".concat(e.icon.id,"@2x.png"),className:M().modalButton,children:(0,t.jsx)("span",{children:"96px PNG"})})]}),e.icon.tags.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:M().modalLabel,children:"Tags"}),(0,t.jsx)("div",{className:M().modalTags,children:e.icon.tags.map((function(e){return(0,t.jsx)("span",{children:e},e)}))})]})]}),(0,t.jsx)("div",{className:M().modalLabel,children:"Filename"}),(0,t.jsx)("p",{className:M().filename,children:e.icon.id}),(0,t.jsx)("div",{className:M().modalLabel,children:"License"}),(0,t.jsxs)("p",{className:M().modalLicense,children:[(0,t.jsx)("a",{rel:"license",href:"http://creativecommons.org/publicdomain/zero/1.0/",children:(0,t.jsx)("img",{src:"/cc0.png",alt:"CC0 Public Domain License",className:"cczero",width:"120",height:"39"})}),"To the extent possible under law,",(0,t.jsx)("a",{rel:"dct:publisher",href:"https://healthicons.org",children:(0,t.jsx)("span",{property:"dct:title",children:" Health Icons "})}),"has waived all copyright and related or neighboring rights to available icons."]})]}),(0,t.jsx)("button",{onClick:e.onClose,className:M().modalClose,children:"\xd7"})]})}function P(e){var n=e.icon,o=e.style,r=e.categories,m=(0,s.I0)(),p=(0,s.v9)((function(e){return e.search.keywords})),x=(0,s.v9)((function(e){return e.search.style})),_=(0,s.v9)((function(e){return e.search.category})),j=p||_,f=(0,l.useState)(void 0),v=f[0],y=f[1],T=(0,a.useRouter)();(0,l.useMemo)((function(){y(n&&o?{icon:n,iconType:o}:void 0)}),[n,o]),(0,l.useEffect)((function(){var e=T.asPath.split("/");if(5===e.length){var n=(0,c.Z)(e,5),o=n[2],i=n[3],t=n[4],l=r.flatMap((function(e){return e.icons})).find((function(e){return e.category===i&&e.id===t}));l&&y({icon:l,iconType:o})}else y(void 0)}),[r,T.asPath]);var N=(0,l.useMemo)((function(){if(j){var e=[];return(_?r.filter((function(e){return e.title===_})):r).forEach((function(n){n.icons.forEach((function(o){(function(e,n){return new RegExp("(?=.*?\\b"+e.split(" ").join(")(?=.*?\\b")+").*","i").test(n)})(p,o.tags.concat([o.title,n.title]).join(", "))&&e.push(o)}))})),e}return[]}),[p,_,j,r]),C=r.reduce((function(e,n){return e+n.icons.length}),0);return(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(h.D,{}),(0,t.jsxs)("main",{id:"main",children:[(0,t.jsxs)("div",{className:k().box,children:[(0,t.jsx)("h1",{className:"mt-2",children:"Free, open source health icons"}),(0,t.jsxs)("h3",{children:["Free for use in your next commercial or personal project.",(0,t.jsx)("span",{children:" "}),"Editing is ok. Republishing is ok. No need to give credit."]})]}),(0,t.jsx)("div",{className:k().filterPlacementBox,children:(0,t.jsxs)("div",{className:k().filterBox,children:[(0,t.jsx)("label",{className:k().filterInputLabel,children:(0,t.jsx)("input",{value:p,type:"text",className:k().filterBoxInput,placeholder:"Search ".concat(2*C," icons\u2026"),onChange:function(e){return m((0,u.E4)(e.target.value))}})}),(0,t.jsx)(b,{categories:r}),(0,t.jsxs)("div",{className:k().styleToggleContainer,children:[(0,t.jsx)("button",{className:d()(k().styleToggle,(0,i.Z)({},k().styleToggleSelected,"all"===x)),onClick:function(){m((0,u.A_)("all"))},children:"All"}),(0,t.jsx)("button",{className:d()(k().styleToggle,(0,i.Z)({},k().styleToggleSelected,"filled"===x)),onClick:function(){m((0,u.A_)("filled"))},children:"Filled"}),(0,t.jsx)("button",{className:d()(k().styleToggle,(0,i.Z)({},k().styleToggleSelected,"outline"===x)),onClick:function(){m((0,u.A_)("outline"))},children:"Outline"})]})]})}),j?(0,t.jsx)(B,{icons:N,setModalIcon:y,style:x}):r.map((function(e,n){return(0,t.jsxs)("div",{children:[(0,t.jsx)(g,{children:e.title}),(0,t.jsx)(B,{icons:e.icons,setModalIcon:y,style:x},e.title)]},n)})),v&&(0,t.jsx)(S,{icon:v.icon,iconType:v.iconType,isOpen:void 0!==v,onClose:function(){T.push("/",void 0,{shallow:!0,scroll:!1}),y(void 0)}})]}),(0,t.jsxs)("footer",{children:["All icons are open source, licensed under a"," ",(0,t.jsx)("a",{href:"/about#license",className:k().link,children:"Creative Commons CC0 License"}),". This website is also open source, under an"," ",(0,t.jsx)("a",{href:"/about#license",className:k().link,children:"MIT license"}),"."]})]})}},5440:function(e,n,o){"use strict";o.d(n,{D:function(){return a}});var i=o(5893),t=o(1664),c=o(4275),l=o.n(c);function a(){return(0,i.jsxs)("nav",{className:l().topBar,children:[(0,i.jsx)("div",{className:l().topbarTitle,children:(0,i.jsx)(t.default,{href:"/",children:(0,i.jsx)("a",{className:l().title,children:"Health icons"})})}),(0,i.jsxs)("ul",{className:l().topbarLinks,children:[(0,i.jsx)("li",{children:(0,i.jsx)(t.default,{href:"/about",children:(0,i.jsxs)("a",{className:l().link,children:[(0,i.jsx)("img",{src:"/ui/information-line.svg",alt:""})," About"]})})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.default,{href:"/request-icon",children:(0,i.jsxs)("a",{className:l().link,children:[(0,i.jsx)("img",{src:"/ui/question-line.svg",alt:""})," Request an icon"]})})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"https://github.com/resolvetosavelives/healthicons",className:l().link,children:[(0,i.jsx)("img",{src:"/ui/github-fill.svg",alt:""})," GitHub"]})})]}),(0,i.jsx)("div",{className:l().topbarDownload,children:(0,i.jsx)("a",{href:"/icons.zip",className:l().buttonLink,children:"Download all"})})]})}},2748:function(e){e.exports={categoryDropdown:"CategoryDropdown_categoryDropdown__2JUwc",menuButton:"CategoryDropdown_menuButton__2BojR",menuContainer:"CategoryDropdown_menuContainer__n294d",menuItem:"CategoryDropdown_menuItem__1_WkA"}},7125:function(e){e.exports={categoryHeading:"CategoryHeading_categoryHeading__HEvhE"}},3759:function(e){e.exports={hidden:"IconTile_hidden__11j3i",iconGroup:"IconTile_iconGroup__3CqO9",iconItem:"IconTile_iconItem__1gXgE",iconThumb:"IconTile_iconThumb__1TZtS",iconTitle:"IconTile_iconTitle__1n89d"}},768:function(e){e.exports={modalContainer:"IconTileModal_modalContainer__hlNku",modalWrapper:"IconTileModal_modalWrapper__1pzN1",modalClose:"IconTileModal_modalClose__1_noM",modalLabel:"IconTileModal_modalLabel__11eS2",modalImage:"IconTileModal_modalImage__2rq-s",modalButtons:"IconTileModal_modalButtons__Xal5c",modalButton:"IconTileModal_modalButton__2f98q",modalTitle:"IconTileModal_modalTitle__x3jxn",modalLicense:"IconTileModal_modalLicense___2by2",filename:"IconTileModal_filename__3mLAa",modalTags:"IconTileModal_modalTags__10LHu"}},4275:function(e){e.exports={topBar:"TopBar_topBar__2JUYM",topbarDownload:"TopBar_topbarDownload__2A2Iy",topbarTitle:"TopBar_topbarTitle__3BbGS",topbarLinks:"TopBar_topbarLinks__1s2bB",buttonLink:"TopBar_buttonLink__1wCM1"}},5432:function(e){e.exports={box:"index_box__3NDYN",iconGrid:"index_iconGrid__jIua1",filterPlacementBox:"index_filterPlacementBox__2O7Zr",filterBox:"index_filterBox__19CMh",filterInputLabel:"index_filterInputLabel__1c9M4",filterBoxInput:"index_filterBoxInput__1ZMIE",styleToggleContainer:"index_styleToggleContainer__1OG3F",styleToggle:"index_styleToggle__18X-3",styleToggleSelected:"index_styleToggleSelected__CDBhw"}}}]);