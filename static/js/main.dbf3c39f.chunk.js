(this["webpackJsonpapplicants-page"]=this["webpackJsonpapplicants-page"]||[]).push([[0],{10:function(e,t,n){e.exports={groupTitle:"ApplicantList_groupTitle__IXm_o",groupContent:"ApplicantList_groupContent__1vegd"}},11:function(e,t,n){e.exports={statList:"Stats_statList__2R4sm",statItem:"Stats_statItem__26GGq"}},12:function(e,t,n){e.exports={error:"Error_error__3jH-M",btn:"Error_btn__2wp-g"}},25:function(e,t,n){e.exports={loading:"Loading_loading__g2fnR",blink:"Loading_blink__2bkm-"}},31:function(e,t,n){},4:function(e,t,n){e.exports={card:"ApplicantCard_card__Q0TZt",initials:"ApplicantCard_initials__5HL92",highlight:"ApplicantCard_highlight__DRAqc",bid:"ApplicantCard_bid__2MFMI"}},5:function(e,t,n){e.exports={backIcon:"App_backIcon__kEZIz",buttonLink:"App_buttonLink__2pJQm",upperPanel:"App_upperPanel__27lic"}},52:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(21),i=n.n(r),l=(n(31),n(8)),o=n.n(l),p=n(22),u=n(3),j=n(23),d=n.n(j),b=n(5),h=n.n(b),m=n(24),O=n.n(m),x=n(9),f=n.n(x),_=n(4),v=n.n(_);var g=function(e){var t,n,c=e.applicant;return Object(a.jsxs)("div",{className:v.a.card,children:[Object(a.jsx)("div",{className:"".concat(v.a.initials," text-bold"),style:function(){var e=c.firstName+c.lastName;return{color:f()({luminosity:"dark",seed:e}),backgroundColor:f()({luminosity:"light",seed:e})}}(),children:Object(a.jsx)("p",{children:function(){var e=c.firstName,t=c.lastName;return"".concat(e[0]).concat(t[0])}()})}),Object(a.jsx)("p",{className:"text-bold",children:"".concat(c.firstName," ").concat(c.lastName)}),Object(a.jsx)("p",{children:c.phoneNumber}),Object(a.jsx)("p",{children:c.email}),c.appointmentDate&&Object(a.jsxs)("p",{className:"".concat(v.a.highlight," text-bold text-upper "),children:[Object(a.jsx)("span",{children:"Appointment_Set"===c.status?"Appointment":"Viewed"}),Object(a.jsx)("span",{children:" "}),Object(a.jsx)("span",{className:"no-break",children:(n=c.appointmentDate,O()(n).format("DD MMMM HH:mm"))})]}),c.bid&&Object(a.jsxs)("p",{className:"".concat(v.a.highlight," ").concat(v.a.bid," text-bold"),children:["Bid",Object(a.jsx)("span",{children:" "}),(t=c.bid,(0,new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",notation:"compact"}).format)(t))]})]})};function N(e){return e.replace("_"," ")}function k(e){return e.reduce((function(e,t){return e[t.status].push(t),e}),{Appointment_Set:[],Property_Viewed:[],Interested:[],Offer_Accepted:[]})}var A=n(10),y=n.n(A);var w=function(e){var t=e.applicants;if(!t.length)return Object(a.jsx)("h3",{children:"Nothing to display"});var n=k(t);return Object(a.jsx)("div",{children:Object.keys(n).map((function(e){return n[e].length>0&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{className:y.a.groupTitle,children:[N(e),Object(a.jsx)("span",{children:" "}),"(",n[e].length,")"]}),Object(a.jsx)("div",{className:y.a.groupContent,children:n[e].map((function(e){return Object(a.jsx)(g,{applicant:e},e.id)}))})]},e)}))})},S=n(6),C=n.n(S);var L=function(e){var t=e.applicants,n=e.setFiltered,s="/applicants-page",r=Object(c.useState)(""),i=Object(u.a)(r,2),l=i[0],o=i[1],p=Object(c.useState)(""),j=Object(u.a)(p,2),d=j[0],b=j[1];function h(e,t){return e.toLowerCase().includes(t.toLocaleLowerCase())}return Object(c.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("search");"string"===typeof e&&o(e)}),[]),Object(c.useEffect)((function(){var e=t.filter((function(e){var t,n;return(h(e.firstName,l)||h(e.lastName,l)||h(e.email,l))&&(t=e,""===(n=d)||t.status===n)}));n(e)}),[l,d,t,n]),Object(a.jsx)("div",{className:C.a.filterBlock,children:Object(a.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(a.jsx)("span",{className:C.a.searchWrapper,children:Object(a.jsx)("input",{type:"text",value:l,onChange:function(e){var t=e.target.value;o(t),window.history.replaceState(null,"",t?"".concat(s,"/?search=").concat(t):s)},placeholder:"Search for applicant"})}),Object(a.jsxs)("div",{className:C.a.selectors,children:[Object(a.jsxs)("select",{children:[Object(a.jsx)("option",{value:"",children:"Bids"}),Object(a.jsx)("option",{value:"withBids",children:"With bids"})]}),Object(a.jsxs)("select",{onChange:function(e){var t=e.target.value;b(t)},value:d,children:[Object(a.jsx)("option",{value:"",children:"Status"}),["Interested","Appointment_Set","Property_Viewed","Offer_Accepted"].map((function(e){return Object(a.jsx)("option",{value:e,children:N(e)},e)}))]})]})]})})},I=n(11),F=n.n(I);var T=function(e){var t=e.applicants,n=k(t),c=[{name:"Total",value:t.length},{name:"New",value:n.Interested.length},{name:"Viewed",value:n.Property_Viewed.length},{name:"Appointment",value:n.Appointment_Set.length},{name:"Others",value:n.Offer_Accepted.length}];return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:F.a.statList,children:c.map((function(e){return Object(a.jsxs)("div",{className:F.a.statItem,children:[Object(a.jsx)("p",{className:"text-bold",children:e.value}),Object(a.jsx)("p",{children:e.name})]},e.name)}))})})},D=n(25),E=n.n(D);var M=function(){return Object(a.jsx)("div",{className:E.a.loading,children:Object(a.jsx)("span",{children:"Loading..."})})},P=n(12),B=n.n(P);var R=function(e){var t=e.message,n=e.reload;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:B.a.error,children:t}),Object(a.jsx)("button",{className:B.a.btn,type:"button",onClick:n,children:"Try again"})]})},V=n.p+"static/media/back.043a6139.svg";var H=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(n),i=Object(u.a)(r,2),l=i[0],j=i[1],b=Object(c.useState)(!1),m=Object(u.a)(b,2),O=m[0],x=m[1],f=Object(c.useState)(""),_=Object(u.a)(f,2),v=_[0],g=_[1];function N(){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),g(""),e.prev=2,e.next=5,new Promise((function(e,t){setTimeout(e,1e3)}));case 5:return"/applicants-page","/data/MOCK_DATA.json",e.next=9,d.a.get("/applicants-page/data/MOCK_DATA.json");case 9:t=e.sent,s(t.data),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),g(e.t0.message);case 16:x(!1);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){N()}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:h.a.upperPanel,children:[Object(a.jsxs)("span",{className:"display-flex",children:[Object(a.jsx)("button",{type:"button",className:"".concat(h.a.buttonLink," ").concat(h.a.backIcon),children:Object(a.jsx)("img",{src:V,alt:"back",className:""})}),Object(a.jsx)("h2",{className:"display-inline-block",children:"Applicants"})]}),Object(a.jsx)(T,{applicants:n})]}),Object(a.jsx)(L,{applicants:n,setFiltered:j}),v&&Object(a.jsx)(R,{message:v,reload:N}),O?Object(a.jsx)(M,{}):Object(a.jsx)(w,{applicants:l})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(H,{})}),document.getElementById("root")),J()},6:function(e,t,n){e.exports={filterBlock:"Filters_filterBlock__2_JX6",selectors:"Filters_selectors__27Zvk",searchWrapper:"Filters_searchWrapper__1hEGo"}}},[[52,1,2]]]);
//# sourceMappingURL=main.dbf3c39f.chunk.js.map