"use strict";(self.webpackChunkadmin_plus=self.webpackChunkadmin_plus||[]).push([[2044],{78084:(e,n,t)=>{t.d(n,{A:()=>d});var i=t(63464),l=t(40033),o=t(28170),s=t(79739),r=t(45098),a=t(44414);function d(e){let{title:n,content:t,action:d,open:c,onClose:h,...u}=e;return(0,a.jsxs)(i.A,{fullWidth:!0,maxWidth:"xs",open:c,onClose:h,...u,children:[(0,a.jsx)(l.A,{sx:{pb:2},children:n}),t&&(0,a.jsxs)(o.A,{sx:{typography:"body2"},children:[" ",t," "]}),(0,a.jsxs)(s.A,{children:[d,(0,a.jsx)(r.A,{variant:"outlined",color:"inherit",onClick:h,children:"Cancel"})]})]})}},87033:(e,n,t)=>{t.d(n,{A:()=>h});var i=t(16491),l=t(12257),o=t(82053),s=t(52432),r=t(36080),a=t(42074),d=t(44414);function c(e){let{link:n,activeLast:t,disabled:l}=e;const{name:o,href:s,icon:c}=n,h={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...l&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},u=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(i.A,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),o]});return s?(0,d.jsx)(r.A,{component:a.N_,to:s,sx:h,children:u}):(0,d.jsxs)(i.A,{sx:h,children:[" ",u," "]})}function h(e){let{links:n,action:t,heading:a,moreLink:h,activeLast:x,sx:g,...v}=e;const p=n[n.length-1].name;return(0,d.jsxs)(i.A,{sx:{mb:5,...g},children:[(0,d.jsxs)(l.A,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(i.A,{sx:{flexGrow:1},children:[a&&(0,d.jsx)(o.A,{variant:"h4",gutterBottom:!0,children:a}),!!n.length&&(0,d.jsx)(s.A,{separator:(0,d.jsx)(u,{}),...v,children:n.map((e=>(0,d.jsx)(c,{link:e,activeLast:x,disabled:e.name===p},e.name||"")))})]}),t&&(0,d.jsxs)(i.A,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!h&&(0,d.jsx)(i.A,{sx:{mt:2},children:h.map((e=>(0,d.jsx)(r.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}function u(){return(0,d.jsx)(i.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},54593:(e,n,t)=>{function i(e,n,t){return e>0?Math.max(0,(1+e)*n-t):0}function l(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function o(e,n){return"desc"===e?(e,t)=>l(e,t,n):(e,t)=>-l(e,t,n)}t.d(n,{dO:()=>p,er:()=>w,Sm:()=>v,We:()=>P,Uv:()=>b,xl:()=>i,hz:()=>o,K2:()=>r});var s=t(9950);function r(e){const[n,t]=(0,s.useState)(!(null===e||void 0===e||!e.defaultDense)),[i,l]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),[o,r]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),[a,d]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),[c,h]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||25),[u,x]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),g=(0,s.useCallback)((e=>{""!==e&&(r(i===e&&"asc"===o?"desc":"asc"),l(e))}),[o,i]),v=(0,s.useCallback)((e=>{const n=u.indexOf(e);let t=[];-1===n?t=t.concat(u,e):0===n?t=t.concat(u.slice(1)):n===u.length-1?t=t.concat(u.slice(0,-1)):n>0&&(t=t.concat(u.slice(0,n),u.slice(n+1))),x(t)}),[u]),p=(0,s.useCallback)(((e,n)=>{x(e?n:[])}),[]),m=(0,s.useCallback)(((e,n)=>{d(n)}),[]),f=(0,s.useCallback)((e=>{d(0),h(parseInt(e.target.value,10))}),[]),A=(0,s.useCallback)((e=>{t(e.target.checked)}),[]);return{dense:n,order:o,page:a,orderBy:i,rowsPerPage:c,selected:u,onSelectRow:v,onSelectAllRows:p,onSort:g,onChangePage:m,onChangeDense:A,onChangeRowsPerPage:f,setPage:d,setDense:t,setOrder:r,setOrderBy:l,setSelected:x,setRowsPerPage:h}}var a=t(9213),d=t(21671),c=t(12257),h=t(82053),u=t(7653),x=t(44414);function g(e){let{title:n,description:t,img:i,sx:l,...o}=e;return(0,x.jsxs)(c.A,{alignItems:"center",justifyContent:"center",sx:{height:1,textAlign:"center",p:e=>e.spacing(8,2),...l},...o,children:[(0,x.jsx)(u.A,{disabledEffect:!0,alt:"empty content",src:i||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,x.jsx)(h.A,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,x.jsx)(h.A,{variant:"body2",sx:{color:"text.secondary"},children:t})]})}function v(e){let{isNotFound:n}=e;return(0,x.jsx)(a.A,{children:n?(0,x.jsx)(d.A,{colSpan:12,children:(0,x.jsx)(g,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,x.jsx)(d.A,{colSpan:12,sx:{p:0}})})}function p(e){let{emptyRows:n,height:t}=e;return n?(0,x.jsx)(a.A,{sx:{...t&&{height:t*n}},children:(0,x.jsx)(d.A,{colSpan:9})}):null}var m=t(69780),f=t(7251),A=t(16491);const j={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function w(e){let{order:n,orderBy:t,rowCount:i=0,headLabel:l,numSelected:o=0,onSort:s,onSelectAllRows:r,sx:c}=e;return(0,x.jsx)(m.A,{sx:c,children:(0,x.jsx)(a.A,{children:l.map((e=>(0,x.jsx)(d.A,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:s?(0,x.jsxs)(f.A,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:()=>s(e.id),sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,x.jsx)(A.A,{sx:{...j},children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)))})})}var S=t(93038);function b(e){let{dense:n,action:t,rowCount:i,numSelected:l,onSelectAllRows:o,sx:s,...r}=e;return l?(0,x.jsxs)(c.A,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...n&&{height:38},...s},...r,children:[(0,x.jsx)(S.A,{indeterminate:l>0&&l<i,checked:i>0&&l===i,onChange:e=>o(e.target.checked)}),(0,x.jsxs)(h.A,{variant:"subtitle1",sx:{ml:2,flexGrow:1,color:"primary.main",...n&&{ml:3}},children:[l," selected"]}),t&&t]}):null}var C=t(91434),y=t(16497),R=t(37324);function P(e){let{dense:n,onChangeDense:t,rowsPerPageOptions:i=[5,10,25],sx:l,...o}=e;return(0,x.jsxs)(A.A,{sx:{position:"relative",...l},children:[(0,x.jsx)(C.A,{rowsPerPageOptions:i,component:"div",...o}),t&&(0,x.jsx)(y.A,{label:"Dense",control:(0,x.jsx)(R.A,{checked:n,onChange:t}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},72044:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Z});var i=t(76455),l=t(94614),o=t(9950),s=t(28429),r=t(42074),a=t(19808),d=t(45098),c=t(48089),h=t(38200),u=t(84142),x=t(74745),g=t(1320),v=t(83274),p=t(25333),m=t(15769),f=t(34075),A=t(90260),j=t(39332),w=t(64071),S=t(78084),b=t(87033),C=t(59905),y=t(54593),R=t(9213),P=t(21671),F=t(82053),k=t(62854),D=t(23266),B=t(39635),I=t(90077),L=t(44414);function N(e){let{row:n,selected:t,onEditRow:i,onSelectRow:l,onDeleteRow:s}=e;const{name:r,is_active:a}=n,[c,h]=(0,o.useState)(!1),[u,x]=(0,o.useState)(null),g=()=>{x(null)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(R.A,{hover:!0,selected:t,children:[(0,L.jsx)(P.A,{children:(0,L.jsx)(I.A,{direction:"row",alignItems:"center",spacing:2,children:(0,L.jsx)(F.A,{variant:"subtitle2",noWrap:!0,children:r.en})})}),(0,L.jsx)(P.A,{align:"left",sx:{textTransform:"capitalize"},children:r.ar}),(0,L.jsx)(P.A,{align:"center",sx:{textTransform:"capitalize"},children:1===a?(0,L.jsx)(k.A,{alt:r.en,src:"/assets/done.svg"}):(0,L.jsx)(k.A,{alt:r.en,src:"/assets/unDone.svg"})}),(0,L.jsx)(P.A,{align:"right",children:(0,L.jsx)(p.A,{color:u?"inherit":"default",onClick:e=>{x(e.currentTarget)},children:(0,L.jsx)(j.A,{icon:"eva:more-vertical-fill"})})})]}),(0,L.jsxs)(B.A,{open:u,onClose:g,arrow:"right-top",sx:{width:140},children:[(0,L.jsxs)(D.A,{onClick:()=>{h(!0),g()},sx:{color:"error.main"},children:[(0,L.jsx)(j.A,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,L.jsxs)(D.A,{onClick:()=>{i(),g()},children:[(0,L.jsx)(j.A,{icon:"eva:edit-fill"}),"Edit"]})]}),(0,L.jsx)(S.A,{open:c,onClose:()=>{h(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,L.jsx)(d.A,{variant:"contained",color:"error",onClick:s,children:"Delete"})})]})}var O=t(12257),E=t(16987),T=t(2046);function W(e){let{isFiltered:n,filterName:t,filterRole:i,optionsRole:l,onFilterName:o,onFilterRole:s,onResetFilter:r}=e;return(0,L.jsx)(O.A,{spacing:2,alignItems:"center",direction:{xs:"column",sm:"row"},sx:{px:2.5,py:3},children:(0,L.jsx)(E.A,{fullWidth:!0,value:t,onChange:o,placeholder:"Search...",InputProps:{startAdornment:(0,L.jsx)(T.A,{position:"start",children:(0,L.jsx)(j.A,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}var z=t(19618);const _=[],M=["all","true","false"],q=[{id:"English",label:"English",align:"left"},{id:"Arabic",label:"Arabic",align:"left"},{id:"is_active",label:"Status",align:"left"},{id:""}];function Z(){var e,n;const{dense:t,page:R,order:P,orderBy:F,rowsPerPage:k,setPage:D,selected:B,setSelected:I,onSelectRow:O,onSelectAllRows:E,onSort:T,onChangeDense:Z,onChangePage:G,onChangeRowsPerPage:U}=(0,y.K2)(),{themeStretch:K}=(0,C.Mp)(),Q=(0,s.Zp)(),{data:$,isLoading:H,refetch:J}=(0,z.jM)(),[V,X]=(0,o.useState)([]);(0,o.useEffect)((()=>{var e;$&&!H&&X(null===$||void 0===$||null===(e=$.data)||void 0===e?void 0:e.data)}),[$,V,H]);const[Y,ee]=(0,o.useState)(!1),[ne,te]=(0,o.useState)(""),[ie,le]=(0,o.useState)("all"),[oe,se]=(0,o.useState)("all"),re=function(e){let{inputData:n,comparator:t,filterName:i,filterStatus:l,filterRole:o}=e;const s=n.map(((e,n)=>[e,n]));var r;s.sort(((e,n)=>{const i=t(e[0],n[0]);return 0!==i?i:e[1]-n[1]})),n=null===s||void 0===s?void 0:s.map((e=>e[0])),i&&(n=null===(r=n)||void 0===r?void 0:r.filter((e=>-1!==e.name.ar.toLowerCase().indexOf(i.toLowerCase()))));"all"!==l&&(n=n.filter((e=>e.active===l)));"all"!==o&&(n=n.filter((e=>e.role===o)));return n}({inputData:V,comparator:(0,y.hz)(P,F),filterName:ne,filterRole:ie,filterStatus:oe}),ae=null===re||void 0===re?void 0:re.slice(R*k,R*k+k),de=t?52:72,ce=""!==ne||"all"!==ie||"all"!==oe,he=!(null!==re&&void 0!==re&&re.length)&&!!ne||!(null!==re&&void 0!==re&&re.length)&&!!ie||!(null!==re&&void 0!==re&&re.length)&&!!oe,ue=()=>{ee(!1)},[xe]=(0,z.FP)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(i.mg,{children:(0,L.jsx)("title",{children:" Finishing: List"})}),(0,L.jsxs)(a.A,{maxWidth:!K&&"lg",children:[(0,L.jsx)(b.A,{heading:"Finishing List",links:[{name:"Dashboard",href:A.nB.root},{name:"Finishing",href:A.nB.finishing.root},{name:"List"}],action:(0,L.jsx)(d.A,{component:r.N_,to:A.nB.finishing.new,variant:"contained",startIcon:(0,L.jsx)(j.A,{icon:"eva:plus-fill"}),children:"New Finishing"})}),(0,L.jsxs)(c.A,{children:[(0,L.jsx)(h.A,{value:oe,onChange:(e,n)=>{D(0),se(n)},sx:{px:2,bgcolor:"background.neutral"},children:_.map((e=>(0,L.jsx)(u.A,{label:e,value:e},e)))}),(0,L.jsx)(x.A,{}),(0,L.jsx)(W,{isFiltered:ce,filterName:ne,filterRole:ie,optionsRole:M,onFilterName:e=>{D(0),te(e.target.value)},onFilterRole:e=>{D(0),le(e.target.value)},onResetFilter:()=>{te(""),le("all"),se("all")}}),(0,L.jsxs)(g.A,{sx:{position:"relative",overflow:"unset"},children:[(0,L.jsx)(y.Uv,{dense:t,numSelected:null===B||void 0===B?void 0:B.length,rowCount:null===V||void 0===V?void 0:V.length,onSelectAllRows:e=>E(e,null===V||void 0===V?void 0:V.map((e=>e.id))),action:(0,L.jsx)(v.A,{title:"Delete",children:(0,L.jsx)(p.A,{color:"primary",onClick:()=>{ee(!0)},children:(0,L.jsx)(j.A,{icon:"eva:trash-2-outline"})})})}),(0,L.jsx)(w.A,{children:(0,L.jsxs)(m.A,{size:t?"small":"medium",sx:{minWidth:800},children:[(0,L.jsx)(y.er,{order:P,orderBy:F,headLabel:q,rowCount:null===V||void 0===V?void 0:V.length,numSelected:null===B||void 0===B?void 0:B.length,onSort:T,onSelectAllRows:e=>E(e,null===V||void 0===V?void 0:V.map((e=>e.id)))}),(0,L.jsxs)(f.A,{children:[null===re||void 0===re||null===(e=re.slice(R*k,R*k+k))||void 0===e?void 0:e.map((e=>(0,L.jsx)(N,{row:e,selected:B.includes(e.id),onSelectRow:()=>O(null===e||void 0===e?void 0:e.id),onDeleteRow:()=>(e=>{xe(e);const n=V.filter((n=>n.id!==e));I([]),X(n),J(),R>0&&ae.length<2&&D(R-1)})(null===e||void 0===e?void 0:e.id),onEditRow:()=>{return n=null===e||void 0===e?void 0:e.id,n=String(n),void Q(A.nB.finishing.edit((0,l.c)(n)));var n}},null===e||void 0===e?void 0:e.id))),(0,L.jsx)(y.dO,{height:de,emptyRows:(0,y.xl)(R,k,null===V||void 0===V?void 0:V.length)}),(0,L.jsx)(y.Sm,{isNotFound:he})]})]})})]}),(0,L.jsx)(y.We,{count:null===$||void 0===$||null===(n=$.data)||void 0===n?void 0:n.per_page,page:R,rowsPerPage:k,onPageChange:G,onRowsPerPageChange:U,dense:t,onChangeDense:Z})]})]}),(0,L.jsx)(S.A,{open:Y,onClose:ue,title:"Delete",content:(0,L.jsxs)(L.Fragment,{children:["Are you sure want to delete"," ",(0,L.jsxs)("strong",{children:[" ",null===B||void 0===B?void 0:B.length," "]})," items?"]}),action:(0,L.jsx)(d.A,{variant:"contained",color:"error",onClick:()=>{(e=>{const n=V.filter((n=>!e.includes(n.id)));if(I([]),X(n),R>0)if(e.length===ae.length)D(R-1);else if((null===e||void 0===e?void 0:e.length)===re.length)D(0);else if((null===e||void 0===e?void 0:e.length)>ae.length){const n=Math.ceil(((null===V||void 0===V?void 0:V.length)-e.length)/k)-1;D(n)}})(B),ue()},children:"Delete"})})]})}},19618:(e,n,t)=>{t.d(n,{FP:()=>a,jM:()=>l,mz:()=>r,pP:()=>s,wJ:()=>o});const i=t(29994).FH.injectEndpoints({reducerPath:"apiUser",endpoints:e=>({getFinishing:e.query({query:()=>"/finishing",providesTags:["finishing"]}),getFinishingId:e.query({query:e=>"/finishing/".concat(e,"?local=none"),providesTags:["finishing"]}),addFinishing:e.mutation({query:e=>({url:"/finishing",method:"POST",body:e}),invalidatesTags:["finishing"]}),editFinishing:e.mutation({query:e=>{let{formData:n,id:t}=e;return{url:"/finishing/".concat(t),method:"POST",body:n}},invalidatesTags:["edit"]}),deleteFinishing:e.mutation({query:n=>({url:"/finishing/".concat(n),method:"Delete",body:e}),invalidatesTags:["Delete"]})})}),{useGetFinishingQuery:l,useGetFinishingIdQuery:o,useAddFinishingMutation:s,useEditFinishingMutation:r,useDeleteFinishingMutation:a}=i},90077:(e,n,t)=>{t.d(n,{A:()=>i});const i=(0,t(17457).A)()},68639:(e,n,t)=>{t.d(n,{a:()=>a});var i=t(37827);function l(e){return e.toLowerCase()}var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],s=/[^A-Z0-9]+/gi;function r(e,n,t){return n instanceof RegExp?e.replace(n,t):n.reduce((function(e,n){return e.replace(n,t)}),e)}function a(e,n){return void 0===n&&(n={}),function(e,n){void 0===n&&(n={});for(var t=n.splitRegexp,i=void 0===t?o:t,a=n.stripRegexp,d=void 0===a?s:a,c=n.transform,h=void 0===c?l:c,u=n.delimiter,x=void 0===u?" ":u,g=r(r(e,i,"$1\0$2"),d,"\0"),v=0,p=g.length;"\0"===g.charAt(v);)v++;for(;"\0"===g.charAt(p-1);)p--;return g.slice(v,p).split("\0").map(h).join(x)}(e,(0,i.Cl)({delimiter:"."},n))}},94614:(e,n,t)=>{t.d(n,{c:()=>o});var i=t(37827),l=t(68639);function o(e,n){return void 0===n&&(n={}),(0,l.a)(e,(0,i.Cl)({delimiter:"-"},n))}}}]);