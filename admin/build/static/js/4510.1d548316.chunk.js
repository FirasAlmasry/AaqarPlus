"use strict";(self.webpackChunkadmin_plus=self.webpackChunkadmin_plus||[]).push([[4510],{78084:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(63464),o=n(40033),l=n(28170),s=n(79739),r=n(45098),a=n(44414);function c(e){let{title:t,content:n,action:c,open:d,onClose:u,...h}=e;return(0,a.jsxs)(i.A,{fullWidth:!0,maxWidth:"xs",open:d,onClose:u,...h,children:[(0,a.jsx)(o.A,{sx:{pb:2},children:t}),n&&(0,a.jsxs)(l.A,{sx:{typography:"body2"},children:[" ",n," "]}),(0,a.jsxs)(s.A,{children:[c,(0,a.jsx)(r.A,{variant:"outlined",color:"inherit",onClick:u,children:"Cancel"})]})]})}},87033:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(53011),o=n(12257),l=n(82053),s=n(52432),r=n(36080),a=n(42074),c=n(44414);function d(e){let{link:t,activeLast:n,disabled:o}=e;const{name:l,href:s,icon:d}=t,u={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...o&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,c.jsxs)(c.Fragment,{children:[d&&(0,c.jsx)(i.A,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),l]});return s?(0,c.jsx)(r.A,{component:a.N_,to:s,sx:u,children:h}):(0,c.jsxs)(i.A,{sx:u,children:[" ",h," "]})}function u(e){let{links:t,action:n,heading:a,moreLink:u,activeLast:g,sx:m,...x}=e;const p=t[t.length-1].name;return(0,c.jsxs)(i.A,{sx:{mb:5,...m},children:[(0,c.jsxs)(o.A,{direction:"row",alignItems:"center",children:[(0,c.jsxs)(i.A,{sx:{flexGrow:1},children:[a&&(0,c.jsx)(l.A,{variant:"h4",gutterBottom:!0,children:a}),!!t.length&&(0,c.jsx)(s.A,{separator:(0,c.jsx)(h,{}),...x,children:t.map((e=>(0,c.jsx)(d,{link:e,activeLast:g,disabled:e.name===p},e.name||"")))})]}),n&&(0,c.jsxs)(i.A,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!u&&(0,c.jsx)(i.A,{sx:{mt:2},children:u.map((e=>(0,c.jsx)(r.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}function h(){return(0,c.jsx)(i.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},54593:(e,t,n)=>{function i(e,t,n){return e>0?Math.max(0,(1+e)*t-n):0}function o(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function l(e,t){return"desc"===e?(e,n)=>o(e,n,t):(e,n)=>-o(e,n,t)}n.d(t,{dO:()=>p,er:()=>S,Sm:()=>x,We:()=>P,Uv:()=>w,xl:()=>i,hz:()=>l,K2:()=>r});var s=n(9950);function r(e){const[t,n]=(0,s.useState)(!(null===e||void 0===e||!e.defaultDense)),[i,o]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),[l,r]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),[a,c]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),[d,u]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),[h,g]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),m=(0,s.useCallback)((e=>{""!==e&&(r(i===e&&"asc"===l?"desc":"asc"),o(e))}),[l,i]),x=(0,s.useCallback)((e=>{const t=h.indexOf(e);let n=[];-1===t?n=n.concat(h,e):0===t?n=n.concat(h.slice(1)):t===h.length-1?n=n.concat(h.slice(0,-1)):t>0&&(n=n.concat(h.slice(0,t),h.slice(t+1))),g(n)}),[h]),p=(0,s.useCallback)(((e,t)=>{g(e?t:[])}),[]),v=(0,s.useCallback)(((e,t)=>{c(t)}),[]),f=(0,s.useCallback)((e=>{c(0),u(parseInt(e.target.value,10))}),[]),j=(0,s.useCallback)((e=>{n(e.target.checked)}),[]);return{dense:t,order:l,page:a,orderBy:i,rowsPerPage:d,selected:h,onSelectRow:x,onSelectAllRows:p,onSort:m,onChangePage:v,onChangeDense:j,onChangeRowsPerPage:f,setPage:c,setDense:n,setOrder:r,setOrderBy:o,setSelected:g,setRowsPerPage:u}}var a=n(9213),c=n(21671),d=n(12257),u=n(82053),h=n(7653),g=n(44414);function m(e){let{title:t,description:n,img:i,sx:o,...l}=e;return(0,g.jsxs)(d.A,{alignItems:"center",justifyContent:"center",sx:{height:1,textAlign:"center",p:e=>e.spacing(8,2),...o},...l,children:[(0,g.jsx)(h.A,{disabledEffect:!0,alt:"empty content",src:i||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,g.jsx)(u.A,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,g.jsx)(u.A,{variant:"body2",sx:{color:"text.secondary"},children:n})]})}function x(e){let{isNotFound:t}=e;return(0,g.jsx)(a.A,{children:t?(0,g.jsx)(c.A,{colSpan:12,children:(0,g.jsx)(m,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,g.jsx)(c.A,{colSpan:12,sx:{p:0}})})}function p(e){let{emptyRows:t,height:n}=e;return t?(0,g.jsx)(a.A,{sx:{...n&&{height:n*t}},children:(0,g.jsx)(c.A,{colSpan:9})}):null}var v=n(69780),f=n(7251),j=n(53011);const A={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function S(e){let{order:t,orderBy:n,rowCount:i=0,headLabel:o,numSelected:l=0,onSort:s,onSelectAllRows:r,sx:d}=e;return(0,g.jsx)(v.A,{sx:d,children:(0,g.jsx)(a.A,{children:o.map((e=>(0,g.jsx)(c.A,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:s?(0,g.jsxs)(f.A,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:()=>s(e.id),sx:{textTransform:"capitalize"},children:[e.label,n===e.id?(0,g.jsx)(j.A,{sx:{...A},children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)))})})}var C=n(93038);function w(e){let{dense:t,action:n,rowCount:i,numSelected:o,onSelectAllRows:l,sx:s,...r}=e;return o?(0,g.jsxs)(d.A,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...t&&{height:38},...s},...r,children:[(0,g.jsx)(C.A,{indeterminate:o>0&&o<i,checked:i>0&&o===i,onChange:e=>l(e.target.checked)}),(0,g.jsxs)(u.A,{variant:"subtitle1",sx:{ml:2,flexGrow:1,color:"primary.main",...t&&{ml:3}},children:[o," selected"]}),n&&n]}):null}var b=n(91434),y=n(16497),R=n(37324);function P(e){let{dense:t,onChangeDense:n,rowsPerPageOptions:i=[5,10,25],sx:o,...l}=e;return(0,g.jsxs)(j.A,{sx:{position:"relative",...o},children:[(0,g.jsx)(b.A,{rowsPerPageOptions:i,component:"div",...l}),n&&(0,g.jsx)(y.A,{label:"Dense",control:(0,g.jsx)(R.A,{checked:t,onChange:n}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},34510:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var i=n(76455),o=n(94614),l=n(9950),s=n(28429),r=n(42074),a=n(19808),c=n(45098),d=n(48089),u=n(38200),h=n(84142),g=n(74745),m=n(1320),x=n(83274),p=n(25333),v=n(15769),f=n(34075),j=n(90260),A=n(39332),S=n(64071),C=n(78084),w=n(87033),b=n(3320),y=n(54593),R=n(9213),P=n(21671),k=n(12257),I=n(62854),D=n(82053),_=n(23266),F=n(39635),T=n(44414);function B(e){let{row:t,selected:n,onEditRow:i,onSelectRow:o,onDeleteRow:s}=e;const{name:r,price_start_from:a,coin_id:d,trending:u,image:h}=t,g="https://aqarbackend.revampbrands.com/storage/".concat(h),[m,x]=(0,l.useState)(!1),[v,f]=(0,l.useState)(null),j=()=>{f(null)};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(R.A,{hover:!0,selected:n,children:[(0,T.jsx)(P.A,{children:(0,T.jsxs)(k.A,{direction:"row",alignItems:"center",spacing:2,children:[(0,T.jsx)(I.A,{alt:null===r||void 0===r?void 0:r.ar,src:g}),(0,T.jsx)(D.A,{variant:"subtitle2",noWrap:!0,children:null===r||void 0===r?void 0:r.ar})]})}),(0,T.jsx)(P.A,{align:"left",sx:{textTransform:"capitalize"},children:null===r||void 0===r?void 0:r.en}),(0,T.jsx)(P.A,{align:"left",sx:{textTransform:"capitalize"},children:a}),(0,T.jsx)(P.A,{align:"left",sx:{textTransform:"capitalize"},children:d}),(0,T.jsx)(P.A,{align:"left",sx:{textTransform:"capitalize"},children:u}),(0,T.jsx)(P.A,{align:"right",children:(0,T.jsx)(p.A,{color:v?"inherit":"default",onClick:e=>{f(e.currentTarget)},children:(0,T.jsx)(A.A,{icon:"eva:more-vertical-fill"})})})]}),(0,T.jsxs)(F.A,{open:v,onClose:j,arrow:"right-top",sx:{width:140},children:[(0,T.jsxs)(_.A,{onClick:()=>{x(!0),j()},sx:{color:"error.main"},children:[(0,T.jsx)(A.A,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,T.jsxs)(_.A,{onClick:()=>{i(),j()},children:[(0,T.jsx)(A.A,{icon:"eva:edit-fill"}),"Edit"]})]}),(0,T.jsx)(C.A,{open:m,onClose:()=>{x(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,T.jsx)(c.A,{variant:"contained",color:"error",onClick:s,children:"Delete"})})]})}var L=n(16987),O=n(2046);function W(e){let{isFiltered:t,filterName:n,filterRole:i,optionsRole:o,onFilterName:l,onFilterRole:s,onResetFilter:r}=e;return(0,T.jsx)(k.A,{spacing:2,alignItems:"center",direction:{xs:"column",sm:"row"},sx:{px:2.5,py:3},children:(0,T.jsx)(L.A,{fullWidth:!0,value:n,onChange:l,placeholder:"Search...",InputProps:{startAdornment:(0,T.jsx)(O.A,{position:"start",children:(0,T.jsx)(A.A,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}var E=n(70883);n(63581);const N=[],q=["all","activ","unActiv"],z=[{id:"nameAr",label:"name ar",align:"left"},{id:"nameEn",label:"name en",align:"left"},{id:"price_start_from",label:"price_start_from",align:"left"},{id:"coin_id",label:"coin_id",align:"left"},{id:"trending",label:"trending",align:"left"},{id:""}];function M(){var e;const{dense:t,page:n,order:R,orderBy:P,rowsPerPage:k,setPage:I,selected:D,setSelected:_,onSelectRow:F,onSelectAllRows:L,onSort:O,onChangeDense:M,onChangePage:Z,onChangeRowsPerPage:G}=(0,y.K2)(),{themeStretch:U}=(0,b.Mp)(),Q=(0,s.Zp)(),{data:H,isServiseLoading:K,refetch:Y}=(0,E.Yb)(),[$,J]=(0,l.useState)([]);(0,l.useEffect)((()=>{var e;H&&!K&&J(null===H||void 0===H||null===(e=H.data)||void 0===e?void 0:e.data)}),[H,$,K]);const[V,X]=(0,l.useState)(!1),[ee,te]=(0,l.useState)(""),[ne,ie]=(0,l.useState)("all"),[oe,le]=(0,l.useState)("all"),se=function(e){let{inputData:t,comparator:n,filterName:i,filterStatus:o,filterRole:l}=e;const s=t.map(((e,t)=>[e,t]));s.sort(((e,t)=>{const i=n(e[0],t[0]);return 0!==i?i:e[1]-t[1]})),t=s.map((e=>e[0])),i&&(t=t.filter((e=>-1!==e.name.ar.toLowerCase().indexOf(i.toLowerCase()))));"all"!==o&&(t=t.filter((e=>e.active===o)));"all"!==l&&(t=t.filter((e=>e.role===l)));return t}({inputData:$,comparator:(0,y.hz)(R,P),filterName:ee,filterRole:ne,filterStatus:oe}),re=se.slice(n*k,n*k+k),ae=t?52:72,ce=""!==ee||"all"!==ne||"all"!==oe,de=!se.length&&!!ee||!se.length&&!!ne||!se.length&&!!oe,ue=()=>{X(!1)},[he]=(0,E.WZ)();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(i.mg,{children:(0,T.jsx)("title",{children:" ComingSoonItems: List "})}),(0,T.jsxs)(a.A,{maxWidth:!U&&"lg",children:[(0,T.jsx)(w.A,{heading:"ComingSoonItems List",links:[{name:"Dashboard",href:j.nB.root},{name:"ComingSoonItems",href:j.nB.comingSoonItems.list},{name:"List"}],action:(0,T.jsx)(c.A,{component:r.N_,to:j.nB.comingSoonItems.new,variant:"contained",startIcon:(0,T.jsx)(A.A,{icon:"eva:plus-fill"}),children:"New ComingSoonItems"})}),(0,T.jsxs)(d.A,{children:[(0,T.jsx)(u.A,{value:oe,onChange:(e,t)=>{I(0),le(t)},sx:{px:2,bgcolor:"background.neutral"},children:N.map((e=>(0,T.jsx)(h.A,{label:e,value:e},e)))}),(0,T.jsx)(g.A,{}),(0,T.jsx)(W,{isFiltered:ce,filterName:ee,filterRole:ne,optionsRole:q,onFilterName:e=>{I(0),te(e.target.value)},onFilterRole:e=>{I(0),ie(e.target.value)},onResetFilter:()=>{te(""),ie("all"),le("all")}}),(0,T.jsxs)(m.A,{sx:{position:"relative",overflow:"unset"},children:[(0,T.jsx)(y.Uv,{dense:t,numSelected:D.length,rowCount:$.length,onSelectAllRows:e=>L(e,$.map((e=>e.id))),action:(0,T.jsx)(x.A,{title:"Delete",children:(0,T.jsx)(p.A,{color:"primary",onClick:()=>{X(!0)},children:(0,T.jsx)(A.A,{icon:"eva:trash-2-outline"})})})}),(0,T.jsx)(S.A,{children:(0,T.jsxs)(v.A,{size:t?"small":"medium",sx:{minWidth:800},children:[(0,T.jsx)(y.er,{order:R,orderBy:P,headLabel:z,rowCount:$.length,numSelected:D.length,onSort:O,onSelectAllRows:e=>L(e,$.map((e=>e.id)))}),(0,T.jsxs)(f.A,{children:[se.slice(n*k,n*k+k).map((e=>(0,T.jsx)(B,{row:e,selected:D.includes(null===e||void 0===e?void 0:e.id),onSelectRow:()=>F(null===e||void 0===e?void 0:e.id),onDeleteRow:()=>(async e=>{await he(e);const t=$.filter((t=>t._id!==e));_([]),J(t),Y(),n>0&&re.length<2&&I(n-1)})(null===e||void 0===e?void 0:e.id),onEditRow:()=>{return t=null===e||void 0===e?void 0:e.id,t=String(t),void Q(j.nB.comingSoonItems.edit((0,o.c)(t)));var t}},null===e||void 0===e?void 0:e.id))),(0,T.jsx)(y.dO,{height:ae,emptyRows:(0,y.xl)(n,k,$.length)}),(0,T.jsx)(y.Sm,{isNotFound:de})]})]})})]}),(0,T.jsx)(y.We,{count:null===H||void 0===H||null===(e=H.data)||void 0===e?void 0:e.per_page,page:n,rowsPerPage:k,onPageChange:Z,onRowsPerPageChange:G,dense:t,onChangeDense:M})]})]}),(0,T.jsx)(C.A,{open:V,onClose:ue,title:"Delete",content:(0,T.jsxs)(T.Fragment,{children:["Are you sure want to delete"," ",(0,T.jsxs)("strong",{children:[" ",D.length," "]})," items?"]}),action:(0,T.jsx)(c.A,{variant:"contained",color:"error",onClick:()=>{(e=>{const t=$.filter((t=>!e.includes(t.id)));if(_([]),J(t),n>0)if(e.length===re.length)I(n-1);else if(e.length===se.length)I(0);else if(e.length>re.length){const t=Math.ceil(($.length-e.length)/k)-1;I(t)}})(D),ue()},children:"Delete"})})]})}},63581:(e,t,n)=>{n.d(t,{ef:()=>o});const i=n(29994).FH.injectEndpoints({reducerPath:"apiUser",endpoints:e=>({getCoins:e.query({query:()=>"/coins?per_page=15",providesTags:["coins"]}),editCoins:e.mutation({query:e=>{let{formData:t,id:n}=e;return{url:"/coins/".concat(n),method:"POST",body:t}},invalidatesTags:["/coins"]})})}),{useGetCoinsQuery:o,useEditCoinsMutation:l}=i},70883:(e,t,n)=>{n.d(t,{F5:()=>l,WZ:()=>a,Yb:()=>o,hd:()=>r,uf:()=>s});const i=n(29994).FH.injectEndpoints({reducerPath:"apiUser",endpoints:e=>({getComingSoonItems:e.query({query:()=>"/coming-soon-items",providesTags:["coming-soon-items"]}),getComingSoonItemsId:e.query({query:e=>"/coming-soon-items/".concat(e),providesTags:["coming-soon-items"]}),addComingSoonItems:e.mutation({query:e=>({url:"/coming-soon-items",method:"POST",body:e}),invalidatesTags:["coming-soon-items"]}),editComingSoonItems:e.mutation({query:e=>{let{formData:t,id:n}=e;return{url:"/coming-soon-items/".concat(n),method:"POST",body:t}},invalidatesTags:["/coming-soon-items"]}),deleteComingSoonItems:e.mutation({query:t=>({url:"/coming-soon-items/".concat(t),method:"Delete",body:e}),invalidatesTags:["/coming-soon-items"]})})}),{useGetComingSoonItemsQuery:o,useGetComingSoonItemsIdQuery:l,useAddComingSoonItemsMutation:s,useEditComingSoonItemsMutation:r,useDeleteComingSoonItemsMutation:a}=i},68639:(e,t,n)=>{n.d(t,{a:()=>a});var i=n(37827);function o(e){return e.toLowerCase()}var l=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],s=/[^A-Z0-9]+/gi;function r(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function a(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,i=void 0===n?l:n,a=t.stripRegexp,c=void 0===a?s:a,d=t.transform,u=void 0===d?o:d,h=t.delimiter,g=void 0===h?" ":h,m=r(r(e,i,"$1\0$2"),c,"\0"),x=0,p=m.length;"\0"===m.charAt(x);)x++;for(;"\0"===m.charAt(p-1);)p--;return m.slice(x,p).split("\0").map(u).join(g)}(e,(0,i.Cl)({delimiter:"."},t))}},94614:(e,t,n)=>{n.d(t,{c:()=>l});var i=n(37827),o=n(68639);function l(e,t){return void 0===t&&(t={}),(0,o.a)(e,(0,i.Cl)({delimiter:"-"},t))}}}]);