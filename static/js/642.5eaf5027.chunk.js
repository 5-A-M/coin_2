"use strict";(self.webpackChunkcoin_2=self.webpackChunkcoin_2||[]).push([[642],{7642:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var i=n(4165),s=n(5861),a=n(885),r=n(2791),l=n(9493),o=n(184),u=function(e){return(0,o.jsxs)("div",{className:"filter-coin-4",style:{width:"100%",height:60,display:"flex",alignItems:"center",gap:20},children:[(0,o.jsx)(c,{title:"Exchange",initValue:e.exchange,a:["Binance","binance_futures","huobi","bittrex"],setInitValue:e.setExchange}),(0,o.jsx)(c,{title:"Coin",initValue:e.coin,a:["BTC","ETH"],setInitValue:e.setCoin})]})},c=function(e){var t=(0,r.useState)((function(){return!1})),n=(0,a.Z)(t,2),i=n[0],s=n[1];return(0,o.jsxs)("div",{className:"tem-f-coin-4",children:[(0,o.jsx)("div",{style:{marginBottom:4},children:e.title}),(0,o.jsxs)("div",{style:{height:40,padding:"0 24px",borderRadius:10,border:"1px solid #e7e7e7",cursor:"pointer",position:"relative"},children:[(0,o.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){return s((function(e){return!e}))},children:e.initValue}),!0===i&&(0,o.jsx)(d,{a:e.a,setInitValue:e.setInitValue,setOpen:s})]})]})},d=function(e){var t;return(0,o.jsx)("div",{className:"ab-tem-f-coin-4",style:{position:"absolute",right:"100%",left:0,width:"100%"},children:null===e||void 0===e||null===(t=e.a)||void 0===t?void 0:t.map((function(t,n){return(0,o.jsx)("div",{style:{height:40,background:"#242526"},onClick:function(){e.setInitValue(t),e.setOpen((function(){return!1}))},className:"item-ab-tem-f-coin-4",children:t},n)}))})},h=n(763),x=function(e){return(0,o.jsx)("div",{className:"main-table-coin-4",style:{width:"100%",overflow:"auto"},children:(0,o.jsxs)("table",{className:"main-table-table-coin-4",style:{width:"100%"},children:[(0,o.jsx)(f,{}),(0,o.jsx)(v,{data:e.data})]})})},f=function(e){return(0,o.jsx)("thead",{className:"main-table-thead-coin-4",children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Exchange"}),(0,o.jsx)("th",{children:"Symbol"}),(0,o.jsx)("th",{children:"Buy"}),(0,o.jsx)("th",{children:"Sell"}),(0,o.jsx)("th",{children:"Total"})]})})},v=function(e){var t;return(0,o.jsx)("tbody",{className:"main-table-tbody-coin-4",children:(null===e||void 0===e?void 0:e.data)&&(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.map((function(e,t){var n,i,s,a;return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:e.exchange}),(0,o.jsx)("td",{children:e.market}),(0,o.jsx)("td",{children:(0,h.round)((null===e||void 0===e||null===(n=e.m5_stats)||void 0===n?void 0:n.buy)||0,2)}),(0,o.jsx)("td",{children:(0,h.round)((null===e||void 0===e||null===(i=e.m5_stats)||void 0===i?void 0:i.sell)||0,2)}),(0,o.jsx)("td",{children:(0,h.round)((parseFloat(null===e||void 0===e||null===(s=e.m5_stats)||void 0===s?void 0:s.buy)||0)-(parseFloat(null===e||void 0===e||null===(a=e.m5_stats)||void 0===a?void 0:a.sell)||0))})]},t)})))})},j=n(4569),m=n.n(j),p=n(4086),b=function(e){var t=(0,r.useState)((function(){return[]})),n=(0,a.Z)(t,2),u=n[0],c=n[1],d=(0,r.useContext)(l.J).socketState;return(0,r.useEffect)((function(){(0,s.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()({url:"".concat(p.LB,"/api/get/c/hopeless"),method:"get",responseType:"json"});case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",c((function(){return n.data})));case 7:case"end":return e.stop()}}),e)})))()}),[]),(0,r.useEffect)((function(){null===d||void 0===d||d.on("bring_volume_from_server",(function(e){c((function(){return e.data}))}))}),[]),(0,o.jsx)("div",{className:"dajkwsjaiojwqaaasa",style:{width:"100%",height:"calc(100vh - 60px)",overflow:"auto"},children:(0,o.jsx)(y,{data:u})})},g=(0,r.memo)(b),y=function(e){var t=(0,r.useState)((function(){return"Binance"})),n=(0,a.Z)(t,2),i=n[0],s=n[1],l=(0,r.useState)((function(){return"USDT"})),c=(0,a.Z)(l,2),d=c[0],h=c[1],f=(0,r.useState)((function(){return"BTC"})),v=(0,a.Z)(f,2),j=v[0],m=v[1],p=(0,r.useState)((function(){return 1})),b=(0,a.Z)(p,2),g=b[0],y=b[1];return(0,o.jsxs)("div",{className:"dsjiajisjqoiwiosfjoiksda",style:{width:"100%"},children:[(0,o.jsx)(u,{exchange:i,setExchange:s,pair:d,setPair:h,coin:j,setCoin:m,page:g,setPage:y}),(0,o.jsx)("br",{}),(0,o.jsx)(x,{data:e.data})]})}}}]);
//# sourceMappingURL=642.5eaf5027.chunk.js.map