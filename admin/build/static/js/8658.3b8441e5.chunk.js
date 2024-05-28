"use strict";(self.webpackChunkadmin_plus=self.webpackChunkadmin_plus||[]).push([[8658],{78084:(e,t,n)=>{n.d(t,{A:()=>d});var l=n(63464),o=n(40033),r=n(28170),i=n(79739),s=n(45098),a=n(44414);function d(e){let{title:t,content:n,action:d,open:c,onClose:u,...h}=e;return(0,a.jsxs)(l.A,{fullWidth:!0,maxWidth:"xs",open:c,onClose:u,...h,children:[(0,a.jsx)(o.A,{sx:{pb:2},children:t}),n&&(0,a.jsxs)(r.A,{sx:{typography:"body2"},children:[" ",n," "]}),(0,a.jsxs)(i.A,{children:[d,(0,a.jsx)(s.A,{variant:"outlined",color:"inherit",onClick:u,children:"Cancel"})]})]})}},87033:(e,t,n)=>{n.d(t,{A:()=>u});var l=n(53011),o=n(12257),r=n(82053),i=n(52432),s=n(36080),a=n(42074),d=n(44414);function c(e){let{link:t,activeLast:n,disabled:o}=e;const{name:r,href:i,icon:c}=t,u={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...o&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(l.A,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),r]});return i?(0,d.jsx)(s.A,{component:a.N_,to:i,sx:u,children:h}):(0,d.jsxs)(l.A,{sx:u,children:[" ",h," "]})}function u(e){let{links:t,action:n,heading:a,moreLink:u,activeLast:v,sx:x,...p}=e;const g=t[t.length-1].name;return(0,d.jsxs)(l.A,{sx:{mb:5,...x},children:[(0,d.jsxs)(o.A,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(l.A,{sx:{flexGrow:1},children:[a&&(0,d.jsx)(r.A,{variant:"h4",gutterBottom:!0,children:a}),!!t.length&&(0,d.jsx)(i.A,{separator:(0,d.jsx)(h,{}),...p,children:t.map((e=>(0,d.jsx)(c,{link:e,activeLast:v,disabled:e.name===g},e.name||"")))})]}),n&&(0,d.jsxs)(l.A,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!u&&(0,d.jsx)(l.A,{sx:{mt:2},children:u.map((e=>(0,d.jsx)(s.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}function h(){return(0,d.jsx)(l.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},54593:(e,t,n)=>{function l(e,t,n){return e>0?Math.max(0,(1+e)*t-n):0}function o(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function r(e,t){return"desc"===e?(e,n)=>o(e,n,t):(e,n)=>-o(e,n,t)}n.d(t,{dO:()=>g,er:()=>w,Sm:()=>p,We:()=>R,Uv:()=>b,xl:()=>l,hz:()=>r,K2:()=>s});var i=n(9950);function s(e){const[t,n]=(0,i.useState)(!(null===e||void 0===e||!e.defaultDense)),[l,o]=(0,i.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),[r,s]=(0,i.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),[a,d]=(0,i.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),[c,u]=(0,i.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),[h,v]=(0,i.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),x=(0,i.useCallback)((e=>{""!==e&&(s(l===e&&"asc"===r?"desc":"asc"),o(e))}),[r,l]),p=(0,i.useCallback)((e=>{const t=h.indexOf(e);let n=[];-1===t?n=n.concat(h,e):0===t?n=n.concat(h.slice(1)):t===h.length-1?n=n.concat(h.slice(0,-1)):t>0&&(n=n.concat(h.slice(0,t),h.slice(t+1))),v(n)}),[h]),g=(0,i.useCallback)(((e,t)=>{v(e?t:[])}),[]),m=(0,i.useCallback)(((e,t)=>{d(t)}),[]),A=(0,i.useCallback)((e=>{d(0),u(parseInt(e.target.value,10))}),[]),j=(0,i.useCallback)((e=>{n(e.target.checked)}),[]);return{dense:t,order:r,page:a,orderBy:l,rowsPerPage:c,selected:h,onSelectRow:p,onSelectAllRows:g,onSort:x,onChangePage:m,onChangeDense:j,onChangeRowsPerPage:A,setPage:d,setDense:n,setOrder:s,setOrderBy:o,setSelected:v,setRowsPerPage:u}}var a=n(9213),d=n(21671),c=n(12257),u=n(82053),h=n(7653),v=n(44414);function x(e){let{title:t,description:n,img:l,sx:o,...r}=e;return(0,v.jsxs)(c.A,{alignItems:"center",justifyContent:"center",sx:{height:1,textAlign:"center",p:e=>e.spacing(8,2),...o},...r,children:[(0,v.jsx)(h.A,{disabledEffect:!0,alt:"empty content",src:l||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,v.jsx)(u.A,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,v.jsx)(u.A,{variant:"body2",sx:{color:"text.secondary"},children:n})]})}function p(e){let{isNotFound:t}=e;return(0,v.jsx)(a.A,{children:t?(0,v.jsx)(d.A,{colSpan:12,children:(0,v.jsx)(x,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,v.jsx)(d.A,{colSpan:12,sx:{p:0}})})}function g(e){let{emptyRows:t,height:n}=e;return t?(0,v.jsx)(a.A,{sx:{...n&&{height:n*t}},children:(0,v.jsx)(d.A,{colSpan:9})}):null}var m=n(69780),A=n(7251),j=n(53011);const f={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function w(e){let{order:t,orderBy:n,rowCount:l=0,headLabel:o,numSelected:r=0,onSort:i,onSelectAllRows:s,sx:c}=e;return(0,v.jsx)(m.A,{sx:c,children:(0,v.jsx)(a.A,{children:o.map((e=>(0,v.jsx)(d.A,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:i?(0,v.jsxs)(A.A,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:()=>i(e.id),sx:{textTransform:"capitalize"},children:[e.label,n===e.id?(0,v.jsx)(j.A,{sx:{...f},children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)))})})}var y=n(93038);function b(e){let{dense:t,action:n,rowCount:l,numSelected:o,onSelectAllRows:r,sx:i,...s}=e;return o?(0,v.jsxs)(c.A,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...t&&{height:38},...i},...s,children:[(0,v.jsx)(y.A,{indeterminate:o>0&&o<l,checked:l>0&&o===l,onChange:e=>r(e.target.checked)}),(0,v.jsxs)(u.A,{variant:"subtitle1",sx:{ml:2,flexGrow:1,color:"primary.main",...t&&{ml:3}},children:[o," selected"]}),n&&n]}):null}var S=n(91434),C=n(16497),D=n(37324);function R(e){let{dense:t,onChangeDense:n,rowsPerPageOptions:l=[5,10,25],sx:o,...r}=e;return(0,v.jsxs)(j.A,{sx:{position:"relative",...o},children:[(0,v.jsx)(S.A,{rowsPerPageOptions:l,component:"div",...r}),n&&(0,v.jsx)(C.A,{label:"Dense",control:(0,v.jsx)(D.A,{checked:t,onChange:n}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},18658:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var l=n(76455),o=n(94614),r=n(9950),i=n(28429),s=n(42074),a=n(19808),d=n(45098),c=n(48089),u=n(38200),h=n(84142),v=n(74745),x=n(1320),p=n(83274),g=n(25333),m=n(15769),A=n(34075),j=n(82053),f=n(57404),w=n(23266),y=n(4753),b=n(90260),S=n(39332),C=n(64071),D=n(78084),R=n(87033),k=n(3320),P=n(54593),F=n(9213),_=n(21671),L=n(62854),T=n(39635),q=n(90077),B=n(68689),I=n(44414);function N(e){var t,n,l;let{row:o,selected:i,onEditRow:s,onSelectRow:a,onDeleteRow:c}=e;const{images:u,name:h,bio_title:v,bio_description:x,top_project_title:p,top_project_description:m,area_id:A}=o,f="https://aqarbackend.revampbrands.com/storage/".concat(null===u||void 0===u||null===(t=u[0])||void 0===t?void 0:t.file),[y,b]=(0,r.useState)(!1),[C,R]=(0,r.useState)(null),{data:k,isCoinsLoading:P}=(0,B.bJ)(A),N=null===k||void 0===k||null===(n=k.data)||void 0===n||null===(l=n.name)||void 0===l?void 0:l.en,O=()=>{R(null)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(F.A,{hover:!0,selected:i,children:[(0,I.jsx)(_.A,{children:(0,I.jsxs)(q.A,{direction:"row",alignItems:"center",spacing:2,children:[(0,I.jsx)(L.A,{alt:h.en,src:f}),(0,I.jsx)(j.A,{variant:"subtitle2",noWrap:!0,children:"".concat(h.ar.slice(0,20),"...")})]})}),(0,I.jsx)(_.A,{align:"center",sx:{textTransform:"capitalize"},children:N}),(0,I.jsx)(_.A,{align:"right",children:(0,I.jsx)(g.A,{color:C?"inherit":"default",onClick:e=>{R(e.currentTarget)},children:(0,I.jsx)(S.A,{icon:"eva:more-vertical-fill"})})})]}),(0,I.jsxs)(T.A,{open:C,onClose:O,arrow:"right-top",sx:{width:140},children:[(0,I.jsxs)(w.A,{onClick:()=>{b(!0),O()},sx:{color:"error.main"},children:[(0,I.jsx)(S.A,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,I.jsxs)(w.A,{onClick:()=>{s(),O()},children:[(0,I.jsx)(S.A,{icon:"eva:edit-fill"}),"Edit"]})]}),(0,I.jsx)(D.A,{open:y,onClose:()=>{b(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,I.jsx)(d.A,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})}var O=n(12257),z=n(16987),E=n(2046);function M(e){let{isFiltered:t,filterName:n,filterRole:l,optionsRole:o,onFilterName:r,onFilterRole:i,onResetFilter:s}=e;return(0,I.jsx)(O.A,{spacing:2,alignItems:"center",direction:{xs:"column",sm:"row"},sx:{px:2.5,py:3},children:(0,I.jsx)(z.A,{fullWidth:!0,value:n,onChange:r,placeholder:"Search...",InputProps:{startAdornment:(0,I.jsx)(E.A,{position:"start",children:(0,I.jsx)(S.A,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}var W=n(15048),G=n(22329),Q=n(86898);const Z=[],U=["all","true","false"],K=[{id:"ar_name",label:"Developer name",align:"left"},{id:"area",label:"area",align:"center"},{id:""}];function H(){var e,t,n;const{dense:F,page:_,order:L,orderBy:T,setPage:q,selected:B,setSelected:O,onSelectRow:z,onSelectAllRows:E,onSort:H,onChangeDense:J,onChangePage:$,onChangeRowsPerPage:V}=(0,P.K2)(),{themeStretch:X}=(0,k.Mp)(),Y=(0,i.Zp)(),[ee,te]=(0,r.useState)(1),[ne,le]=(0,r.useState)(5),{data:oe,isLoading:re,refetch:ie}=(0,W.Fg)({currentPage:ee,limit:ne}),[se,ae]=(0,r.useState)([]);(0,r.useEffect)((()=>{var e;oe&&!re&&ae(null===oe||void 0===oe||null===(e=oe.data)||void 0===e?void 0:e.data)}),[oe,se,re]);const[de,ce]=(0,r.useState)(!1),[ue,he]=(0,r.useState)(""),[ve,xe]=(0,r.useState)("all"),[pe,ge]=(0,r.useState)("all"),me=function(e){let{inputData:t,comparator:n,filterName:l,filterStatus:o,filterRole:r}=e;const i=t.map(((e,t)=>[e,t]));var s;i.sort(((e,t)=>{const l=n(e[0],t[0]);return 0!==l?l:e[1]-t[1]})),t=null===i||void 0===i?void 0:i.map((e=>e[0])),l&&(t=null===(s=t)||void 0===s?void 0:s.filter((e=>-1!==e.name.ar.toLowerCase().indexOf(l.toLowerCase()))));"all"!==o&&(t=t.filter((e=>e.active===o)));"all"!==r&&(t=t.filter((e=>e.role===r)));return t}({inputData:se,comparator:(0,P.hz)(L,T),filterName:ue,filterRole:ve,filterStatus:pe}),Ae=null===me||void 0===me?void 0:me.slice(_*ne,_*ne+ne),je=F?52:72,fe=""!==ue||"all"!==ve||"all"!==pe,we=!(null!==me&&void 0!==me&&me.length)&&!!ue||!(null!==me&&void 0!==me&&me.length)&&!!ve||!(null!==me&&void 0!==me&&me.length)&&!!pe,ye=()=>{ce(!1)},{enqueueSnackbar:be}=(0,G.dh)(),[Se]=(0,W.LQ)();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(l.mg,{children:(0,I.jsx)("title",{children:" Developers: List"})}),(0,I.jsxs)(a.A,{maxWidth:!X&&"lg",children:[(0,I.jsx)(R.A,{heading:"Developers List",links:[{name:"Dashboard",href:b.nB.root},{name:"Developers",href:b.nB.developers.root},{name:"List"}],action:(0,I.jsx)(d.A,{component:s.N_,to:b.nB.developers.new,variant:"contained",startIcon:(0,I.jsx)(S.A,{icon:"eva:plus-fill"}),children:"New Developer"})}),(0,I.jsxs)(c.A,{children:[(0,I.jsx)(u.A,{value:pe,onChange:(e,t)=>{q(0),ge(t)},sx:{px:2,bgcolor:"background.neutral"},children:Z.map((e=>(0,I.jsx)(h.A,{label:e,value:e},e)))}),(0,I.jsx)(v.A,{}),(0,I.jsx)(M,{isFiltered:fe,filterName:ue,filterRole:ve,optionsRole:U,onFilterName:e=>{q(0),he(e.target.value)},onFilterRole:e=>{q(0),xe(e.target.value)},onResetFilter:()=>{he(""),xe("all"),ge("all")}}),(0,I.jsxs)(x.A,{sx:{position:"relative",overflow:"unset"},children:[(0,I.jsx)(P.Uv,{dense:F,numSelected:null===B||void 0===B?void 0:B.length,rowCount:null===se||void 0===se?void 0:se.length,onSelectAllRows:e=>E(e,null===se||void 0===se?void 0:se.map((e=>e.id))),action:(0,I.jsx)(p.A,{title:"Delete",children:(0,I.jsx)(g.A,{color:"primary",onClick:()=>{ce(!0)},children:(0,I.jsx)(S.A,{icon:"eva:trash-2-outline"})})})}),(0,I.jsx)(C.A,{children:(0,I.jsxs)(m.A,{size:F?"small":"medium",sx:{minWidth:800},children:[(0,I.jsx)(P.er,{order:L,orderBy:T,headLabel:K,rowCount:null===se||void 0===se?void 0:se.length,numSelected:null===B||void 0===B?void 0:B.length,onSort:H,onSelectAllRows:e=>E(e,null===se||void 0===se?void 0:se.map((e=>e.id)))}),(0,I.jsxs)(A.A,{children:[null===me||void 0===me||null===(e=me.slice(_*ne,_*ne+ne))||void 0===e?void 0:e.map((e=>(0,I.jsx)(N,{row:e,selected:B.includes(e.id),onSelectRow:()=>z(null===e||void 0===e?void 0:e.id),onDeleteRow:()=>(async e=>{const t=await Se(e);if(t&&t.error){console.error("An error occurred while deleting area:",t.error);const e=t.error.data.message||"An error occurred";be(e,{variant:"error"}),ye(),ce(!1)}else{console.log("Area deleted successfully");const t=null===se||void 0===se?void 0:se.filter((t=>(null===t||void 0===t?void 0:t.id)!==e));O([]),ae(t),ie(),ye(),ce(!1),_>0&&Ae.length<2&&q(_-1)}})(null===e||void 0===e?void 0:e.id),onEditRow:()=>{return t=null===e||void 0===e?void 0:e.id,t=String(t),ie(),void Y(b.nB.developers.edit((0,o.c)(t)));var t}},null===e||void 0===e?void 0:e.id))),(0,I.jsx)(P.dO,{height:je,emptyRows:(0,P.xl)(_,ne,null===se||void 0===se?void 0:se.length)}),(0,I.jsx)(P.Sm,{isNotFound:we})]})]})})]}),(0,I.jsxs)(Q.A,{sx:{display:"flex",justifyContent:"space-around",py:2,alignItems:"center"},children:[(0,I.jsxs)(j.A,{fontSize:"small",children:[ne," item in each page"]}),(0,I.jsxs)(f.A,{value:ne,onChange:e=>{le(e.target.value),te(1)},style:{width:"75px",height:"35px"},children:[(0,I.jsx)(w.A,{value:5,children:"5"}),(0,I.jsx)(w.A,{value:10,children:"10"}),(0,I.jsx)(w.A,{value:20,children:"20"}),(0,I.jsx)(w.A,{value:50,children:"50"})]}),(0,I.jsx)(y.A,{count:null===oe||void 0===oe||null===(t=oe.data)||void 0===t?void 0:t.last_page,shape:"rounded",page:ee,showFirstButton:!0,showLastButton:!0,onChange:(e,t)=>{te(t)}}),(0,I.jsxs)(j.A,{fontSize:"small",children:["item available ",null===oe||void 0===oe||null===(n=oe.data)||void 0===n?void 0:n.total]})]})]})]}),(0,I.jsx)(D.A,{open:de,onClose:ye,title:"Delete",content:(0,I.jsxs)(I.Fragment,{children:["Are you sure want to delete"," ",(0,I.jsxs)("strong",{children:[" ",null===B||void 0===B?void 0:B.length," "]})," items?"]}),action:(0,I.jsx)(d.A,{variant:"contained",color:"error",onClick:()=>{(e=>{const t=se.filter((t=>!e.includes(t.id)));if(O([]),ae(t),_>0)if(e.length===Ae.length)q(_-1);else if((null===e||void 0===e?void 0:e.length)===me.length)q(0);else if((null===e||void 0===e?void 0:e.length)>Ae.length){const t=Math.ceil(((null===se||void 0===se?void 0:se.length)-e.length)/ne)-1;q(t)}})(B),ye()},children:"Delete"})})]})}},68689:(e,t,n)=>{n.d(t,{Gz:()=>o,KA:()=>i,bJ:()=>r,d_:()=>s,mg:()=>a});const l=n(29994).FH.injectEndpoints({reducerPath:"apiUser",endpoints:e=>({getAreas:e.query({query:e=>{let{currentPage:t,limit:n}=e;return"/areas?page=".concat(t,"&per_page=").concat(n)},providesTags:["areas"]}),getAreasId:e.query({query:e=>"/areas/".concat(e,"?local=none"),providesTags:["areas"]}),addAreas:e.mutation({query:e=>({url:"/areas",method:"POST",body:e}),invalidatesTags:["areas"]}),editAreas:e.mutation({query:e=>{let{formData:t,id:n}=e;return{url:"/areas/".concat(n),method:"POST",body:t}},invalidatesTags:["areas"]}),deleteAreas:e.mutation({query:t=>({url:"/areas/".concat(t),method:"Delete",body:e}),invalidatesTags:["areas"]})})}),{useGetAreasQuery:o,useGetAreasIdQuery:r,useAddAreasMutation:i,useEditAreasMutation:s,useDeleteAreasMutation:a}=l},15048:(e,t,n)=>{n.d(t,{Fg:()=>o,LQ:()=>a,W:()=>s,j8:()=>i,wG:()=>r});const l=n(29994).FH.injectEndpoints({reducerPath:"apiUser",endpoints:e=>({getDevelopers:e.query({query:e=>{let{currentPage:t,limit:n}=e;return"/developers?page=".concat(t,"&per_page=").concat(n)},providesTags:["developers"]}),getDevelopersId:e.query({query:e=>"/developers/".concat(e,"?local=none"),providesTags:["developers"]}),addDevelopers:e.mutation({query:e=>({url:"/developers",method:"POST",body:e}),invalidatesTags:["developers"]}),editDevelopers:e.mutation({query:e=>{let{formData:t,id:n}=e;return{url:"/developers/".concat(n),method:"POST",body:t}},invalidatesTags:["/developers"]}),deleteDevelopers:e.mutation({query:t=>({url:"/developers/".concat(t),method:"Delete",body:e}),invalidatesTags:["/developers"]})})}),{useGetDevelopersQuery:o,useGetDevelopersIdQuery:r,useAddDevelopersMutation:i,useEditDevelopersMutation:s,useDeleteDevelopersMutation:a}=l},86898:(e,t,n)=>{n.d(t,{A:()=>i});var l=n(41681),o=n(12639);const r=(0,n(80863).A)("MuiBox",["root"]),i=(0,o.A)({defaultClassName:r.root,generateClassName:l.A.generate})},90077:(e,t,n)=>{n.d(t,{A:()=>l});const l=(0,n(17457).A)()},68639:(e,t,n)=>{n.d(t,{a:()=>a});var l=n(37827);function o(e){return e.toLowerCase()}var r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],i=/[^A-Z0-9]+/gi;function s(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function a(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,l=void 0===n?r:n,a=t.stripRegexp,d=void 0===a?i:a,c=t.transform,u=void 0===c?o:c,h=t.delimiter,v=void 0===h?" ":h,x=s(s(e,l,"$1\0$2"),d,"\0"),p=0,g=x.length;"\0"===x.charAt(p);)p++;for(;"\0"===x.charAt(g-1);)g--;return x.slice(p,g).split("\0").map(u).join(v)}(e,(0,l.Cl)({delimiter:"."},t))}},94614:(e,t,n)=>{n.d(t,{c:()=>r});var l=n(37827),o=n(68639);function r(e,t){return void 0===t&&(t={}),(0,o.a)(e,(0,l.Cl)({delimiter:"-"},t))}}}]);