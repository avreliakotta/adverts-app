"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[636],{4895:function(e,a,n){n(2791);a.Z=n.p+"static/media/symbol-defs.472c1dcf831c8827e6b3df6858582cbf.svg"},9924:function(e,a,n){n.d(a,{Z:function(){return C}});var c=n(9439),s="car-item_carImage__FvQAo",r="car-item_imgWrapper__mTGVJ",t="car-item_titleCard__bV4N0",i="car-item_model__SFlM7",l="car-item_contentWrapper__eiM+m",o="car-item_addressWrapper__BXbJ2",d="car-item_infoWrapper__6VEP0",m="car-item_learnMoreBtn__3lLKh",u="car-item_text__BQJ-b",p="car-item_iconBtn__MFp07",_="car-item_heartIcon__u+n4b",x=n(4895),f=n(2791),h=n(4420),j=n(360),N=n(8156),v=n(65),g=n(5820),b=n(6038),k=n(184),C=function(e){var a=e.carData,n=e.index,C=(0,f.useState)(null),Z=(0,c.Z)(C,2),W=Z[0],y=Z[1],L=(0,h.v9)(v.OG),I=(0,h.I0)(),F=(0,h.v9)(b.T).some((function(e){return e.id===a.id})),T=a.address.split(",");if(T.length<3)return(0,k.jsx)("div",{children:"Loading..."});var B=T[1].trim(),P=T[2].trim();return a&&a.make&&a.model?(0,k.jsxs)("li",{children:[(0,k.jsxs)("div",{className:r,children:[(0,k.jsx)("img",{className:s,src:a.img,alt:"".concat(a.make," ").concat(a.model)}),(0,k.jsx)("button",{type:"button",className:p,onClick:function(){I(F?(0,g.zm)(a):(0,g._p)(a))},children:(0,k.jsx)("svg",{className:_,children:F?(0,k.jsx)("use",{href:"".concat(x.Z,"#icon-Vector-1")}):(0,k.jsx)("use",{href:"".concat(x.Z,"#icon-heart-1")})})}),(0,k.jsxs)("div",{className:l,children:[(0,k.jsxs)("h2",{className:t,children:[a.make," ",(0,k.jsx)("span",{className:i,children:a.model}),","," ",a.year]}),(0,k.jsx)("p",{className:t,children:"".concat(a.rentalPrice)})]})]}),(0,k.jsxs)("div",{className:o,children:[(0,k.jsx)("p",{className:u,children:"".concat(B)}),(0,k.jsx)("p",{className:u,children:"".concat(P)}),(0,k.jsx)("p",{className:u,children:"".concat(a.rentalCompany)})]}),(0,k.jsxs)("div",{className:d,children:[(0,k.jsx)("p",{className:u,children:"".concat(a.type)}),(0,k.jsx)("p",{className:u,children:"".concat(a.model)}),(0,k.jsx)("p",{className:u,children:"".concat(a.mileage)})]}),(0,k.jsx)("button",{type:"button",className:m,onClick:function(){!function(e){y(e)}(n)},children:"Learn more"}),null!==W&&(0,k.jsx)(j.Z,{index:W,close:function(){y(null)},children:(0,k.jsx)(N.Z,{carDataList:L,parentIndex:W})})]}):(0,k.jsx)("div",{children:"Loading..."})}},8156:function(e,a,n){n.d(a,{Z:function(){return l}});var c=n(4420),s=n(65),r={carImage:"card-modal_carImage__EjPKb",titleCard:"card-modal_titleCard__2BXSg",model:"card-modal_model__eHtt6",text:"card-modal_text__yrvNG",contentWrapper:"card-modal_contentWrapper__ccQ5R",descriptionText:"card-modal_descriptionText__gbgKd",infoWrapper:"card-modal_infoWrapper__7hYB6",subtitle:"card-modal_subtitle__N6ZHS",functionalitiesWrapper:"card-modal_functionalitiesWrapper__0llFG",specifications:"card-modal_specifications__rOZQ2",part:"card-modal_part__ezzVP",number:"card-modal_number__FZvMU",specificationsWrapper:"card-modal_specificationsWrapper__ZyNbI",rentalBtn:"card-modal_rentalBtn__9f8P6"},t=n(184),i=function(e){var a=e.carData,n=a.address.split(",");if(n.length<3)return(0,t.jsx)("div",{children:"Loading..."});var c=n[1].trim(),s=n[2].trim();if(!a)return null;var i=a.rentalConditions.split("\n"),l=a.mileage.toLocaleString();return(0,t.jsxs)("div",{className:r.modalCardWrapper,children:[(0,t.jsx)("img",{className:r.carImage,src:a.img,alt:"".concat(a.make," ").concat(a.model)}),(0,t.jsxs)("h2",{className:r.titleCard,children:[a.make," ",(0,t.jsx)("span",{className:r.model,children:a.model}),","," ",a.year]}),(0,t.jsxs)("div",{className:r.contentWrapper,children:[(0,t.jsx)("p",{className:r.text,children:"".concat(c)}),(0,t.jsx)("p",{className:r.text,children:"".concat(s)}),(0,t.jsxs)("p",{className:r.text,children:["Id: ",a.id]}),(0,t.jsxs)("p",{className:r.text,children:["Year: ",a.year]}),(0,t.jsxs)("p",{className:r.text,children:["Type: ",a.type]})]}),(0,t.jsxs)("div",{className:r.infoWrapper,children:[(0,t.jsxs)("p",{className:r.text,children:["Fuel Consumption: ",a.fuelConsumption," "]}),(0,t.jsxs)("p",{className:r.text,children:["Engine Size: ",a.engineSize," "]})]}),(0,t.jsx)("p",{className:r.descriptionText,children:a.description}),(0,t.jsx)("h3",{className:r.subtitle,children:"Accessories and functionalities:"}),(0,t.jsxs)("div",{className:r.functionalitiesWrapper,children:[(0,t.jsx)("p",{className:r.text,children:a.accessories[0]}),(0,t.jsxs)("p",{className:r.text,children:[a.accessories[1]," "]}),(0,t.jsxs)("p",{className:r.text,children:[a.accessories[2]," "]}),(0,t.jsx)("p",{className:r.text,children:a.functionalities[0]}),(0,t.jsx)("p",{className:r.text,children:a.functionalities[1]}),(0,t.jsx)("p",{className:r.text,children:a.functionalities[2]})]}),(0,t.jsx)("h3",{className:r.subtitle,children:"Rental Conditions: "}),(0,t.jsxs)("div",{className:r.specificationsWrapper,children:[(0,t.jsxs)("p",{className:r.specifications,children:[(0,t.jsx)("span",{className:r.part,children:i[0].includes(":")&&"Minimum age:"}),(0,t.jsx)("span",{className:r.number,children:i[0].includes(":")&&i[0].split(":")[1]})]}),(0,t.jsx)("p",{className:r.specifications,children:i[1]}),(0,t.jsx)("p",{className:r.specifications,children:i[2]}),(0,t.jsxs)("p",{className:r.specifications,children:["Mileage: ",(0,t.jsx)("span",{className:r.number,children:l})]}),(0,t.jsxs)("p",{className:r.specifications,children:[" ","Price: ",(0,t.jsx)("span",{className:r.number,children:a.rentalPrice})]})]}),(0,t.jsx)("a",{href:"tel:+380730000000",className:r.rentalBtn,children:"Rental car"})]})},l=function(e){e.carData;var a=e.parentIndex,n=(0,c.v9)(s.OG)[a];return n?(0,t.jsx)("ul",{children:(0,t.jsx)(i,{carData:n},"".concat(n.id,"_").concat(a))}):(0,t.jsx)("div",{children:"Loading..."})}},360:function(e,a,n){n.d(a,{Z:function(){return u}});var c="modal_closeBtn__Dq10z",s="modal_closeIcon__fFqeR",r="modal_modal__Nszx8",t="modal_backdrop__hpFL1",i=n(4895),l=n(2791),o=n(4164),d=n(184),m=document.querySelector("#modal-root"),u=function(e){var a=e.close,n=e.children,u=function(e){var n=e.target,c=e.currentTarget,s=e.code;n!==c&&"Escape"!==s||a()};return(0,l.useEffect)((function(){return document.addEventListener("keydown",u),function(){return document.removeEventListener("keydown",u)}})),(0,o.createPortal)((0,d.jsx)("div",{className:t,onClick:u,children:(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("button",{className:c,onClick:a,children:(0,d.jsx)("svg",{className:s,children:(0,d.jsx)("use",{href:"".concat(i.Z,"#icon-x-1")})})}),n]})}),m)}},8636:function(e,a,n){n.r(a),n.d(a,{default:function(){return x}});var c=n(9439),s=n(4420),r="favorites-page_container__+pKa5",t="favorites-page_favoriteList__M7CiJ",i="favorites-page_mainTitle__agZkX",l=n(2791),o=n(6038),d=n(360),m=n(65),u=n(9924),p=n(8156),_=n(184),x=function(){var e=(0,s.v9)(o.T),a=(0,s.v9)(m.OG),n=(0,l.useState)(null),x=(0,c.Z)(n,2),f=x[0],h=x[1];return(0,_.jsxs)("div",{className:r,children:[(0,_.jsx)("h1",{className:i,children:"Favorite Cars"}),(0,_.jsx)("ul",{className:t,children:e.map((function(e,a){return(0,_.jsx)(u.Z,{carData:e,index:a,onClick:function(){return function(e){h(e)}(a)}},e.id)}))}),null!==f&&(0,_.jsx)(d.Z,{close:function(){h(null)},children:(0,_.jsx)(p.Z,{carDataList:a,parentIndex:f})})]})}},65:function(e,a,n){n.d(a,{OG:function(){return s},rE:function(){return t},xU:function(){return r}});var c=n(3553),s=function(e){return e.adverts.item},r=function(e){return e.adverts.loading},t=(0,c.P1)([s,function(e){return e.filter}],(function(e,a){var n=a.brand,c=a.price,s=a.mileageFrom,r=a.mileageTo,t=function(e){return null===e?0:parseFloat(e.split(",").join(""))},i=!n&&!c&&!s&&!r;return e.filter((function(e){return!!i||(""===n||e.make.toLowerCase().includes(n.toLowerCase()))&&(!c||Number(e.rentalPrice.slice(1))<=Number(c))&&(!s||e.mileage>=t(s))&&(!r||e.mileage<=t(r))}))}))},6038:function(e,a,n){n.d(a,{T:function(){return c},o:function(){return s}});var c=function(e){return e.favorites.items},s=function(e){return e.filter}}}]);
//# sourceMappingURL=636.7e2fa217.chunk.js.map