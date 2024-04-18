"use strict";(self.webpackChunkadmin_plus=self.webpackChunkadmin_plus||[]).push([[985],{78084:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(63464),l=n(40033),o=n(28170),r=n(79739),s=n(45098),a=n(44414);function d(e){let{title:t,content:n,action:d,open:c,onClose:u,...h}=e;return(0,a.jsxs)(i.A,{fullWidth:!0,maxWidth:"xs",open:c,onClose:u,...h,children:[(0,a.jsx)(l.A,{sx:{pb:2},children:t}),n&&(0,a.jsxs)(o.A,{sx:{typography:"body2"},children:[" ",n," "]}),(0,a.jsxs)(r.A,{children:[d,(0,a.jsx)(s.A,{variant:"outlined",color:"inherit",onClick:u,children:"Cancel"})]})]})}},87033:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(16491),l=n(12257),o=n(82053),r=n(52432),s=n(36080),a=n(42074),d=n(44414);function c(e){let{link:t,activeLast:n,disabled:l}=e;const{name:o,href:r,icon:c}=t,u={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...l&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(i.A,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),o]});return r?(0,d.jsx)(s.A,{component:a.N_,to:r,sx:u,children:h}):(0,d.jsxs)(i.A,{sx:u,children:[" ",h," "]})}function u(e){let{links:t,action:n,heading:a,moreLink:u,activeLast:x,sx:g,...p}=e;const v=t[t.length-1].name;return(0,d.jsxs)(i.A,{sx:{mb:5,...g},children:[(0,d.jsxs)(l.A,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(i.A,{sx:{flexGrow:1},children:[a&&(0,d.jsx)(o.A,{variant:"h4",gutterBottom:!0,children:a}),!!t.length&&(0,d.jsx)(r.A,{separator:(0,d.jsx)(h,{}),...p,children:t.map((e=>(0,d.jsx)(c,{link:e,activeLast:x,disabled:e.name===v},e.name||"")))})]}),n&&(0,d.jsxs)(i.A,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!u&&(0,d.jsx)(i.A,{sx:{mt:2},children:u.map((e=>(0,d.jsx)(s.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}function h(){return(0,d.jsx)(i.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},54593:(e,t,n)=>{function i(e,t,n){return e>0?Math.max(0,(1+e)*t-n):0}function l(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function o(e,t){return"desc"===e?(e,n)=>l(e,n,t):(e,n)=>-l(e,n,t)}n.d(t,{dO:()=>v,er:()=>w,Sm:()=>p,We:()=>k,Uv:()=>S,xl:()=>i,hz:()=>o,K2:()=>s});var r=n(9950);function s(e){const[t,n]=(0,r.useState)(!(null===e||void 0===e||!e.defaultDense)),[i,l]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),[o,s]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),[a,d]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),[c,u]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||25),[h,x]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),g=(0,r.useCallback)((e=>{""!==e&&(s(i===e&&"asc"===o?"desc":"asc"),l(e))}),[o,i]),p=(0,r.useCallback)((e=>{const t=h.indexOf(e);let n=[];-1===t?n=n.concat(h,e):0===t?n=n.concat(h.slice(1)):t===h.length-1?n=n.concat(h.slice(0,-1)):t>0&&(n=n.concat(h.slice(0,t),h.slice(t+1))),x(n)}),[h]),v=(0,r.useCallback)(((e,t)=>{x(e?t:[])}),[]),m=(0,r.useCallback)(((e,t)=>{d(t)}),[]),f=(0,r.useCallback)((e=>{d(0),u(parseInt(e.target.value,10))}),[]),j=(0,r.useCallback)((e=>{n(e.target.checked)}),[]);return{dense:t,order:o,page:a,orderBy:i,rowsPerPage:c,selected:h,onSelectRow:p,onSelectAllRows:v,onSort:g,onChangePage:m,onChangeDense:j,onChangeRowsPerPage:f,setPage:d,setDense:n,setOrder:s,setOrderBy:l,setSelected:x,setRowsPerPage:u}}var a=n(9213),d=n(21671),c=n(12257),u=n(82053),h=n(7653),x=n(44414);function g(e){let{title:t,description:n,img:i,sx:l,...o}=e;return(0,x.jsxs)(c.A,{alignItems:"center",justifyContent:"center",sx:{height:1,textAlign:"center",p:e=>e.spacing(8,2),...l},...o,children:[(0,x.jsx)(h.A,{disabledEffect:!0,alt:"empty content",src:i||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,x.jsx)(u.A,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,x.jsx)(u.A,{variant:"body2",sx:{color:"text.secondary"},children:n})]})}function p(e){let{isNotFound:t}=e;return(0,x.jsx)(a.A,{children:t?(0,x.jsx)(d.A,{colSpan:12,children:(0,x.jsx)(g,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,x.jsx)(d.A,{colSpan:12,sx:{p:0}})})}function v(e){let{emptyRows:t,height:n}=e;return t?(0,x.jsx)(a.A,{sx:{...n&&{height:n*t}},children:(0,x.jsx)(d.A,{colSpan:9})}):null}var m=n(69780),f=n(7251),j=n(16491);const A={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function w(e){let{order:t,orderBy:n,rowCount:i=0,headLabel:l,numSelected:o=0,onSort:r,onSelectAllRows:s,sx:c}=e;return(0,x.jsx)(m.A,{sx:c,children:(0,x.jsx)(a.A,{children:l.map((e=>(0,x.jsx)(d.A,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:r?(0,x.jsxs)(f.A,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:()=>r(e.id),sx:{textTransform:"capitalize"},children:[e.label,n===e.id?(0,x.jsx)(j.A,{sx:{...A},children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)))})})}var b=n(93038);function S(e){let{dense:t,action:n,rowCount:i,numSelected:l,onSelectAllRows:o,sx:r,...s}=e;return l?(0,x.jsxs)(c.A,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...t&&{height:38},...r},...s,children:[(0,x.jsx)(b.A,{indeterminate:l>0&&l<i,checked:i>0&&l===i,onChange:e=>o(e.target.checked)}),(0,x.jsxs)(u.A,{variant:"subtitle1",sx:{ml:2,flexGrow:1,color:"primary.main",...t&&{ml:3}},children:[l," selected"]}),n&&n]}):null}var C=n(91434),y=n(16497),R=n(37324);function k(e){let{dense:t,onChangeDense:n,rowsPerPageOptions:i=[5,10,25],sx:l,...o}=e;return(0,x.jsxs)(j.A,{sx:{position:"relative",...l},children:[(0,x.jsx)(C.A,{rowsPerPageOptions:i,component:"div",...o}),n&&(0,x.jsx)(y.A,{label:"Dense",control:(0,x.jsx)(R.A,{checked:t,onChange:n}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},60985:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var i=n(76455),l=n(94614),o=n(9950),r=n(28429),s=n(42074),a=n(19808),d=n(45098),c=n(48089),u=n(38200),h=n(84142),x=n(74745),g=n(1320),p=n(83274),v=n(25333),m=n(15769),f=n(34075),j=n(90260),A=n(39332),w=n(64071),b=n(78084),S=n(87033),C=n(59905),y=n(54593),R=n(9213),k=n(21671),P=n(12257),F=n(62854),D=n(82053),N=n(23266),I=n(39635),L=n(44414);function B(e){let{row:t,selected:n,onEditRow:i,onSelectRow:l,onDeleteRow:r}=e;const{name:s,image:a,description:c}=t,u="https://aqarbackend.revampbrands.com/storage/".concat(a),[h,x]=(0,o.useState)(!1),[g,p]=(0,o.useState)(null),m=()=>{p(null)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(R.A,{hover:!0,selected:n,children:[(0,L.jsx)(k.A,{children:(0,L.jsxs)(P.A,{direction:"row",alignItems:"center",spacing:2,children:[(0,L.jsx)(F.A,{alt:null===s||void 0===s?void 0:s.ar,src:u}),(0,L.jsx)(D.A,{variant:"subtitle2",noWrap:!0,children:null===s||void 0===s?void 0:s.ar})]})}),(0,L.jsx)(k.A,{align:"left",sx:{textTransform:"capitalize"},children:null===s||void 0===s?void 0:s.en}),(0,L.jsx)(k.A,{align:"left",sx:{textTransform:"capitalize"},children:null===c||void 0===c?void 0:c.ar}),(0,L.jsx)(k.A,{align:"left",sx:{textTransform:"capitalize"},children:null===c||void 0===c?void 0:c.en}),(0,L.jsx)(k.A,{align:"right",children:(0,L.jsx)(v.A,{color:g?"inherit":"default",onClick:e=>{p(e.currentTarget)},children:(0,L.jsx)(A.A,{icon:"eva:more-vertical-fill"})})})]}),(0,L.jsxs)(I.A,{open:g,onClose:m,arrow:"right-top",sx:{width:140},children:[(0,L.jsxs)(N.A,{onClick:()=>{x(!0),m()},sx:{color:"error.main"},children:[(0,L.jsx)(A.A,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,L.jsxs)(N.A,{onClick:()=>{i(),m()},children:[(0,L.jsx)(A.A,{icon:"eva:edit-fill"}),"Edit"]})]}),(0,L.jsx)(b.A,{open:h,onClose:()=>{x(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,L.jsx)(d.A,{variant:"contained",color:"error",onClick:r,children:"Delete"})})]})}var O=n(16987),T=n(2046);function W(e){let{isFiltered:t,filterName:n,filterRole:i,optionsRole:l,onFilterName:o,onFilterRole:r,onResetFilter:s}=e;return(0,L.jsx)(P.A,{spacing:2,alignItems:"center",direction:{xs:"column",sm:"row"},sx:{px:2.5,py:3},children:(0,L.jsx)(O.A,{fullWidth:!0,value:n,onChange:o,placeholder:"Search...",InputProps:{startAdornment:(0,L.jsx)(T.A,{position:"start",children:(0,L.jsx)(A.A,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}var z=n(17927);const E=[],q=["all","activ","unActiv"],_=[{id:"titlear",label:"Name ar",align:"left"},{id:"titleen",label:"Name en",align:"left"},{id:"descriptionar",label:"Description ar",align:"left"},{id:"descriptionen",label:"Description en",align:"left"},{id:""}];function M(){var e;const{dense:t,page:n,order:R,orderBy:k,rowsPerPage:P,setPage:F,selected:D,setSelected:N,onSelectRow:I,onSelectAllRows:O,onSort:T,onChangeDense:M,onChangePage:G,onChangeRowsPerPage:Z}=(0,y.K2)(),{themeStretch:U}=(0,C.Mp)(),K=(0,r.Zp)(),{data:Q,isFoundersLoading:$,refetch:H}=(0,z.Gc)("NEWS"),[J,V]=(0,o.useState)([]);(0,o.useEffect)((()=>{var e;Q&&!$&&V(null===Q||void 0===Q||null===(e=Q.data)||void 0===e?void 0:e.data)}),[Q,J,$]);const[X,Y]=(0,o.useState)(!1),[ee,te]=(0,o.useState)(""),[ne,ie]=(0,o.useState)("all"),[le,oe]=(0,o.useState)("all"),re=function(e){let{inputData:t,comparator:n,filterName:i,filterStatus:l,filterRole:o}=e;const r=t.map(((e,t)=>[e,t]));r.sort(((e,t)=>{const i=n(e[0],t[0]);return 0!==i?i:e[1]-t[1]})),t=r.map((e=>e[0])),i&&(t=t.filter((e=>-1!==e.name.ar.toLowerCase().indexOf(i.toLowerCase()))));"all"!==l&&(t=t.filter((e=>e.active===l)));"all"!==o&&(t=t.filter((e=>e.role===o)));return t}({inputData:J,comparator:(0,y.hz)(R,k),filterName:ee,filterRole:ne,filterStatus:le}),se=re.slice(n*P,n*P+P),ae=t?52:72,de=""!==ee||"all"!==ne||"all"!==le,ce=!re.length&&!!ee||!re.length&&!!ne||!re.length&&!!le,ue=()=>{Y(!1)},[he]=(0,z.i4)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(i.mg,{children:(0,L.jsx)("title",{children:" News: List "})}),(0,L.jsxs)(a.A,{maxWidth:!U&&"lg",children:[(0,L.jsx)(S.A,{heading:"News List",links:[{name:"Dashboard",href:j.nB.root},{name:"News",href:j.nB.news.list},{name:"List"}],action:(0,L.jsx)(d.A,{component:s.N_,to:j.nB.news.new,variant:"contained",startIcon:(0,L.jsx)(A.A,{icon:"eva:plus-fill"}),children:"New"})}),(0,L.jsxs)(c.A,{children:[(0,L.jsx)(u.A,{value:le,onChange:(e,t)=>{F(0),oe(t)},sx:{px:2,bgcolor:"background.neutral"},children:E.map((e=>(0,L.jsx)(h.A,{label:e,value:e},e)))}),(0,L.jsx)(x.A,{}),(0,L.jsx)(W,{isFiltered:de,filterName:ee,filterRole:ne,optionsRole:q,onFilterName:e=>{F(0),te(e.target.value)},onFilterRole:e=>{F(0),ie(e.target.value)},onResetFilter:()=>{te(""),ie("all"),oe("all")}}),(0,L.jsxs)(g.A,{sx:{position:"relative",overflow:"unset"},children:[(0,L.jsx)(y.Uv,{dense:t,numSelected:D.length,rowCount:J.length,onSelectAllRows:e=>O(e,J.map((e=>e.id))),action:(0,L.jsx)(p.A,{title:"Delete",children:(0,L.jsx)(v.A,{color:"primary",onClick:()=>{Y(!0)},children:(0,L.jsx)(A.A,{icon:"eva:trash-2-outline"})})})}),(0,L.jsx)(w.A,{children:(0,L.jsxs)(m.A,{size:t?"small":"medium",sx:{minWidth:800},children:[(0,L.jsx)(y.er,{order:R,orderBy:k,headLabel:_,rowCount:J.length,numSelected:D.length,onSort:T,onSelectAllRows:e=>O(e,J.map((e=>e.id)))}),(0,L.jsxs)(f.A,{children:[re.slice(n*P,n*P+P).map((e=>(0,L.jsx)(B,{row:e,selected:D.includes(null===e||void 0===e?void 0:e.id),onSelectRow:()=>I(null===e||void 0===e?void 0:e.id),onDeleteRow:()=>(async e=>{await he(e);const t=null===J||void 0===J?void 0:J.filter((t=>(null===t||void 0===t?void 0:t.id)!==e));N([]),V(t),H(),n>0&&se.length<2&&F(n-1)})(null===e||void 0===e?void 0:e.id),onEditRow:()=>{return t=null===e||void 0===e?void 0:e.id,t=String(t),void K(j.nB.news.edit((0,l.c)(t)));var t}},null===e||void 0===e?void 0:e.id))),(0,L.jsx)(y.dO,{height:ae,emptyRows:(0,y.xl)(n,P,J.length)}),(0,L.jsx)(y.Sm,{isNotFound:ce})]})]})})]}),(0,L.jsx)(y.We,{count:null===Q||void 0===Q||null===(e=Q.data)||void 0===e?void 0:e.per_page,page:n,rowsPerPage:P,onPageChange:G,onRowsPerPageChange:Z,dense:t,onChangeDense:M})]})]}),(0,L.jsx)(b.A,{open:X,onClose:ue,title:"Delete",content:(0,L.jsxs)(L.Fragment,{children:["Are you sure want to delete"," ",(0,L.jsxs)("strong",{children:[" ",D.length," "]})," items?"]}),action:(0,L.jsx)(d.A,{variant:"contained",color:"error",onClick:()=>{(e=>{const t=J.filter((t=>!e.includes(t.id)));if(N([]),V(t),n>0)if(e.length===se.length)F(n-1);else if(e.length===re.length)F(0);else if(e.length>se.length){const t=Math.ceil((J.length-e.length)/P)-1;F(t)}})(D),ue()},children:"Delete"})})]})}},17927:(e,t,n)=>{n.d(t,{Gc:()=>l,I5:()=>o,L:()=>r,b:()=>s,i4:()=>a});const i=n(29994).FH.injectEndpoints({reducerPath:"apiUser",endpoints:e=>({getFounders:e.query({query:e=>"/founders?type=".concat(e),providesTags:["founders"]}),getFoundersId:e.query({query:e=>"/founders/".concat(e),providesTags:["founders"]}),addFounders:e.mutation({query:e=>({url:"/founders",method:"POST",body:e}),invalidatesTags:["founders"]}),editFounders:e.mutation({query:e=>{let{formData:t,id:n}=e;return{url:"/founders/".concat(n),method:"POST",body:t}},invalidatesTags:["/founders"]}),deleteFounders:e.mutation({query:t=>({url:"/founders/".concat(t),method:"Delete",body:e}),invalidatesTags:["/founders"]})})}),{useGetFoundersQuery:l,useAddFoundersMutation:o,useEditFoundersMutation:r,useGetFoundersIdQuery:s,useDeleteFoundersMutation:a}=i},68639:(e,t,n)=>{n.d(t,{a:()=>a});var i=n(37827);function l(e){return e.toLowerCase()}var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],r=/[^A-Z0-9]+/gi;function s(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function a(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,i=void 0===n?o:n,a=t.stripRegexp,d=void 0===a?r:a,c=t.transform,u=void 0===c?l:c,h=t.delimiter,x=void 0===h?" ":h,g=s(s(e,i,"$1\0$2"),d,"\0"),p=0,v=g.length;"\0"===g.charAt(p);)p++;for(;"\0"===g.charAt(v-1);)v--;return g.slice(p,v).split("\0").map(u).join(x)}(e,(0,i.Cl)({delimiter:"."},t))}},94614:(e,t,n)=>{n.d(t,{c:()=>o});var i=n(37827),l=n(68639);function o(e,t){return void 0===t&&(t={}),(0,l.a)(e,(0,i.Cl)({delimiter:"-"},t))}}}]);