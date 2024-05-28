"use strict";(self.webpackChunkadmin_plus=self.webpackChunkadmin_plus||[]).push([[7018],{78084:(e,t,n)=>{n.d(t,{A:()=>d});var l=n(63464),i=n(40033),o=n(28170),r=n(79739),s=n(45098),a=n(44414);function d(e){let{title:t,content:n,action:d,open:c,onClose:u,...h}=e;return(0,a.jsxs)(l.A,{fullWidth:!0,maxWidth:"xs",open:c,onClose:u,...h,children:[(0,a.jsx)(i.A,{sx:{pb:2},children:t}),n&&(0,a.jsxs)(o.A,{sx:{typography:"body2"},children:[" ",n," "]}),(0,a.jsxs)(r.A,{children:[d,(0,a.jsx)(s.A,{variant:"outlined",color:"inherit",onClick:u,children:"Cancel"})]})]})}},87033:(e,t,n)=>{n.d(t,{A:()=>u});var l=n(53011),i=n(12257),o=n(82053),r=n(52432),s=n(36080),a=n(42074),d=n(44414);function c(e){let{link:t,activeLast:n,disabled:i}=e;const{name:o,href:r,icon:c}=t,u={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...i&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(l.A,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),o]});return r?(0,d.jsx)(s.A,{component:a.N_,to:r,sx:u,children:h}):(0,d.jsxs)(l.A,{sx:u,children:[" ",h," "]})}function u(e){let{links:t,action:n,heading:a,moreLink:u,activeLast:x,sx:v,...g}=e;const p=t[t.length-1].name;return(0,d.jsxs)(l.A,{sx:{mb:5,...v},children:[(0,d.jsxs)(i.A,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(l.A,{sx:{flexGrow:1},children:[a&&(0,d.jsx)(o.A,{variant:"h4",gutterBottom:!0,children:a}),!!t.length&&(0,d.jsx)(r.A,{separator:(0,d.jsx)(h,{}),...g,children:t.map((e=>(0,d.jsx)(c,{link:e,activeLast:x,disabled:e.name===p},e.name||"")))})]}),n&&(0,d.jsxs)(l.A,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!u&&(0,d.jsx)(l.A,{sx:{mt:2},children:u.map((e=>(0,d.jsx)(s.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}function h(){return(0,d.jsx)(l.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},54593:(e,t,n)=>{function l(e,t,n){return e>0?Math.max(0,(1+e)*t-n):0}function i(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function o(e,t){return"desc"===e?(e,n)=>i(e,n,t):(e,n)=>-i(e,n,t)}n.d(t,{dO:()=>p,er:()=>w,Sm:()=>g,We:()=>k,Uv:()=>C,xl:()=>l,hz:()=>o,K2:()=>s});var r=n(9950);function s(e){const[t,n]=(0,r.useState)(!(null===e||void 0===e||!e.defaultDense)),[l,i]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),[o,s]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),[a,d]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),[c,u]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),[h,x]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),v=(0,r.useCallback)((e=>{""!==e&&(s(l===e&&"asc"===o?"desc":"asc"),i(e))}),[o,l]),g=(0,r.useCallback)((e=>{const t=h.indexOf(e);let n=[];-1===t?n=n.concat(h,e):0===t?n=n.concat(h.slice(1)):t===h.length-1?n=n.concat(h.slice(0,-1)):t>0&&(n=n.concat(h.slice(0,t),h.slice(t+1))),x(n)}),[h]),p=(0,r.useCallback)(((e,t)=>{x(e?t:[])}),[]),m=(0,r.useCallback)(((e,t)=>{d(t)}),[]),A=(0,r.useCallback)((e=>{d(0),u(parseInt(e.target.value,10))}),[]),j=(0,r.useCallback)((e=>{n(e.target.checked)}),[]);return{dense:t,order:o,page:a,orderBy:l,rowsPerPage:c,selected:h,onSelectRow:g,onSelectAllRows:p,onSort:v,onChangePage:m,onChangeDense:j,onChangeRowsPerPage:A,setPage:d,setDense:n,setOrder:s,setOrderBy:i,setSelected:x,setRowsPerPage:u}}var a=n(9213),d=n(21671),c=n(12257),u=n(82053),h=n(7653),x=n(44414);function v(e){let{title:t,description:n,img:l,sx:i,...o}=e;return(0,x.jsxs)(c.A,{alignItems:"center",justifyContent:"center",sx:{height:1,textAlign:"center",p:e=>e.spacing(8,2),...i},...o,children:[(0,x.jsx)(h.A,{disabledEffect:!0,alt:"empty content",src:l||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,x.jsx)(u.A,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,x.jsx)(u.A,{variant:"body2",sx:{color:"text.secondary"},children:n})]})}function g(e){let{isNotFound:t}=e;return(0,x.jsx)(a.A,{children:t?(0,x.jsx)(d.A,{colSpan:12,children:(0,x.jsx)(v,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,x.jsx)(d.A,{colSpan:12,sx:{p:0}})})}function p(e){let{emptyRows:t,height:n}=e;return t?(0,x.jsx)(a.A,{sx:{...n&&{height:n*t}},children:(0,x.jsx)(d.A,{colSpan:9})}):null}var m=n(69780),A=n(7251),j=n(53011);const f={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function w(e){let{order:t,orderBy:n,rowCount:l=0,headLabel:i,numSelected:o=0,onSort:r,onSelectAllRows:s,sx:c}=e;return(0,x.jsx)(m.A,{sx:c,children:(0,x.jsx)(a.A,{children:i.map((e=>(0,x.jsx)(d.A,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:r?(0,x.jsxs)(A.A,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:()=>r(e.id),sx:{textTransform:"capitalize"},children:[e.label,n===e.id?(0,x.jsx)(j.A,{sx:{...f},children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)))})})}var S=n(93038);function C(e){let{dense:t,action:n,rowCount:l,numSelected:i,onSelectAllRows:o,sx:r,...s}=e;return i?(0,x.jsxs)(c.A,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...t&&{height:38},...r},...s,children:[(0,x.jsx)(S.A,{indeterminate:i>0&&i<l,checked:l>0&&i===l,onChange:e=>o(e.target.checked)}),(0,x.jsxs)(u.A,{variant:"subtitle1",sx:{ml:2,flexGrow:1,color:"primary.main",...t&&{ml:3}},children:[i," selected"]}),n&&n]}):null}var b=n(91434),y=n(16497),R=n(37324);function k(e){let{dense:t,onChangeDense:n,rowsPerPageOptions:l=[5,10,25],sx:i,...o}=e;return(0,x.jsxs)(j.A,{sx:{position:"relative",...i},children:[(0,x.jsx)(b.A,{rowsPerPageOptions:l,component:"div",...o}),n&&(0,x.jsx)(y.A,{label:"Dense",control:(0,x.jsx)(R.A,{checked:t,onChange:n}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},77018:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var l=n(76455),i=n(94614),o=n(9950),r=n(28429),s=n(42074),a=n(19808),d=n(45098),c=n(48089),u=n(38200),h=n(84142),x=n(74745),v=n(1320),g=n(83274),p=n(25333),m=n(15769),A=n(34075),j=n(82053),f=n(57404),w=n(23266),S=n(4753),C=n(90260),b=n(39332),y=n(64071),R=n(78084),k=n(87033),D=n(3320),P=n(54593),B=n(9213),F=n(21671),N=n(39635),L=n(44414);function I(e){let{row:t,selected:n,onEditRow:l,onSelectRow:i,onDeleteRow:r}=e;const{name:s,email:a}=t,[c,u]=(0,o.useState)(!1),[h,x]=(0,o.useState)(null),v=()=>{x(null)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(B.A,{hover:!0,selected:n,children:[(0,L.jsx)(F.A,{align:"left",children:s}),(0,L.jsx)(F.A,{align:"left",children:a}),(0,L.jsx)(F.A,{align:"right",children:(0,L.jsx)(p.A,{color:h?"inherit":"default",onClick:e=>{x(e.currentTarget)},children:(0,L.jsx)(b.A,{icon:"eva:more-vertical-fill"})})})]}),(0,L.jsxs)(N.A,{open:h,onClose:v,arrow:"right-top",sx:{width:140},children:[(0,L.jsxs)(w.A,{onClick:()=>{u(!0),v()},sx:{color:"error.main"},children:[(0,L.jsx)(b.A,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,L.jsxs)(w.A,{onClick:()=>{l(),v()},children:[(0,L.jsx)(b.A,{icon:"eva:edit-fill"}),"Edit"]})]}),(0,L.jsx)(R.A,{open:c,onClose:()=>{u(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,L.jsx)(d.A,{variant:"contained",color:"error",onClick:r,children:"Delete"})})]})}var O=n(12257),z=n(16987),W=n(2046);function E(e){let{isFiltered:t,filterName:n,filterRole:l,optionsRole:i,onFilterName:o,onFilterRole:r,onResetFilter:s}=e;return(0,L.jsxs)(O.A,{spacing:2,alignItems:"center",direction:{xs:"column",sm:"row"},sx:{px:2.5,py:3},children:[(0,L.jsx)(z.A,{fullWidth:!0,value:n,onChange:o,placeholder:"Search...",InputProps:{startAdornment:(0,L.jsx)(W.A,{position:"start",children:(0,L.jsx)(b.A,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),t&&(0,L.jsx)(d.A,{color:"error",sx:{flexShrink:0},onClick:s,startIcon:(0,L.jsx)(b.A,{icon:"eva:trash-2-outline"}),children:"Clear"})]})}var _=n(29994),U=n(86898);const M=[],Z=["all","admin","user"],G=[{id:"name",label:"Name",align:"left"},{id:"email",label:"Email",align:"left"},{id:"",label:"",align:"left"}];function K(){var e,t,n;const{dense:B,page:F,order:N,orderBy:O,setPage:z,selected:W,setSelected:K,onSelectRow:T,onSelectAllRows:$,onSort:H}=(0,P.K2)(),{themeStretch:q}=(0,D.Mp)(),J=(0,r.Zp)(),[Q,V]=(0,o.useState)(1),[X,Y]=(0,o.useState)(5),{data:ee,isUserLoading:te}=(0,_.vf)({currentPage:Q,limit:X}),[ne,le]=(0,o.useState)([]);(0,o.useEffect)((()=>{var e;ee&&!te&&le(null===ee||void 0===ee||null===(e=ee.data)||void 0===e?void 0:e.data)}),[ee,ne,te]);const[ie,oe]=(0,o.useState)(!1),[re,se]=(0,o.useState)(""),[ae,de]=(0,o.useState)("all"),[ce,ue]=(0,o.useState)("all"),he=function(e){var t;let{inputData:n,comparator:l,filterName:i,filterStatus:o,filterRole:r}=e;const s=null===(t=n)||void 0===t?void 0:t.map(((e,t)=>[e,t]));var a,d,c;null===s||void 0===s||s.sort(((e,t)=>{const n=l(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),n=null===s||void 0===s?void 0:s.map((e=>e[0])),i&&(n=null===(a=n)||void 0===a?void 0:a.filter((e=>-1!==e.name.toLowerCase().indexOf(i.toLowerCase()))));"all"!==o&&(n=null===(d=n)||void 0===d?void 0:d.filter((e=>e.status===o)));"all"!==r&&(n=null===(c=n)||void 0===c?void 0:c.filter((e=>e.role===r)));return n}({inputData:ne,comparator:(0,P.hz)(N,O),filterName:re,filterRole:ae,filterStatus:ce}),xe=null===he||void 0===he?void 0:he.slice(F*X,F*X+X),ve=B?52:72,ge=""!==re||"all"!==ae||"all"!==ce,pe=!(null!==he&&void 0!==he&&he.length)&&!!re||!(null!==he&&void 0!==he&&he.length)&&!!ae||!(null!==he&&void 0!==he&&he.length)&&!!ce,me=()=>{oe(!1)},[Ae]=(0,_.HC)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l.mg,{children:(0,L.jsx)("title",{children:" User: List"})}),(0,L.jsxs)(a.A,{maxWidth:!q&&"lg",children:[(0,L.jsx)(k.A,{heading:"User List",links:[{name:"Dashboard",href:C.nB.root},{name:"User",href:C.nB.user.root},{name:"List"}],action:(0,L.jsx)(d.A,{component:s.N_,to:C.nB.user.new,variant:"contained",startIcon:(0,L.jsx)(b.A,{icon:"eva:plus-fill"}),children:"New User"})}),(0,L.jsxs)(c.A,{children:[(0,L.jsx)(u.A,{value:ce,onChange:(e,t)=>{z(0),ue(t)},sx:{px:2,bgcolor:"background.neutral"},children:M.map((e=>(0,L.jsx)(h.A,{label:e,value:e},e)))}),(0,L.jsx)(x.A,{}),(0,L.jsx)(E,{isFiltered:ge,filterName:re,filterRole:ae,optionsRole:Z,onFilterName:e=>{z(0),se(e.target.value)},onFilterRole:e=>{z(0),de(e.target.value)},onResetFilter:()=>{se(""),de("all"),ue("all")}}),(0,L.jsxs)(v.A,{sx:{position:"relative",overflow:"unset"},children:[(0,L.jsx)(P.Uv,{dense:B,numSelected:null===W||void 0===W?void 0:W.length,rowCount:null===ne||void 0===ne?void 0:ne.length,onSelectAllRows:e=>$(e,ne.map((e=>e.id))),action:(0,L.jsx)(g.A,{title:"Delete",children:(0,L.jsx)(p.A,{color:"primary",onClick:()=>{oe(!0)},children:(0,L.jsx)(b.A,{icon:"eva:trash-2-outline"})})})}),(0,L.jsx)(y.A,{children:(0,L.jsxs)(m.A,{size:B?"small":"medium",sx:{minWidth:800},children:[(0,L.jsx)(P.er,{order:N,orderBy:O,headLabel:G,rowCount:null===ne||void 0===ne?void 0:ne.length,numSelected:null===W||void 0===W?void 0:W.length,onSort:H,onSelectAllRows:e=>$(e,null===ne||void 0===ne?void 0:ne.map((e=>e.id)))}),(0,L.jsxs)(A.A,{children:[null===he||void 0===he||null===(e=he.slice(F*X,F*X+X))||void 0===e?void 0:e.map((e=>(0,L.jsx)(I,{row:e,selected:W.includes(null===e||void 0===e?void 0:e.id),onSelectRow:()=>T(null===e||void 0===e?void 0:e.id),onDeleteRow:()=>(async e=>{await Ae(e);const t=null===ne||void 0===ne?void 0:ne.filter((t=>t.id!==e));K([]),le(t),F>0&&xe.length<2&&z(F-1)})(null===e||void 0===e?void 0:e.id),onEditRow:()=>{return"string"!==typeof(t=null===e||void 0===e?void 0:e.id)&&(t=String(t)),void J(C.nB.user.edit((0,i.c)(t)));var t}},null===e||void 0===e?void 0:e.id))),(0,L.jsx)(P.dO,{height:ve,emptyRows:(0,P.xl)(F,X,null===ne||void 0===ne?void 0:ne.length)}),(0,L.jsx)(P.Sm,{isNotFound:pe})]})]})})]}),(0,L.jsxs)(U.A,{sx:{display:"flex",justifyContent:"space-around",py:2,alignItems:"center"},children:[(0,L.jsxs)(j.A,{fontSize:"small",children:[X," item in each page"]}),(0,L.jsxs)(f.A,{value:X,onChange:e=>{Y(e.target.value),V(1)},style:{width:"75px",height:"35px"},children:[(0,L.jsx)(w.A,{value:5,children:"5"}),(0,L.jsx)(w.A,{value:10,children:"10"}),(0,L.jsx)(w.A,{value:20,children:"20"}),(0,L.jsx)(w.A,{value:50,children:"50"})]}),(0,L.jsx)(S.A,{count:null===ee||void 0===ee||null===(t=ee.data)||void 0===t?void 0:t.last_page,shape:"rounded",page:Q,showFirstButton:!0,showLastButton:!0,onChange:(e,t)=>{V(t)}}),(0,L.jsxs)(j.A,{fontSize:"small",children:["item available ",null===ee||void 0===ee||null===(n=ee.data)||void 0===n?void 0:n.total]})]})]})]}),(0,L.jsx)(R.A,{open:ie,onClose:me,title:"Delete",content:(0,L.jsxs)(L.Fragment,{children:["Are you sure want to delete ",(0,L.jsxs)("strong",{children:[" ",null===W||void 0===W?void 0:W.length," "]})," items?"]}),action:(0,L.jsx)(d.A,{variant:"contained",color:"error",onClick:()=>{(e=>{const t=null===ne||void 0===ne?void 0:ne.filter((t=>!e.includes(t.id)));if(K([]),le(t),F>0)if((null===e||void 0===e?void 0:e.length)===(null===xe||void 0===xe?void 0:xe.length))z(F-1);else if((null===e||void 0===e?void 0:e.length)===(null===he||void 0===he?void 0:he.length))z(0);else if((null===e||void 0===e?void 0:e.length)>(null===xe||void 0===xe?void 0:xe.length)){const t=Math.ceil(((null===ne||void 0===ne?void 0:ne.length)-(null===e||void 0===e?void 0:e.length))/X)-1;z(t)}})(W),me()},children:"Delete"})})]})}},86898:(e,t,n)=>{n.d(t,{A:()=>r});var l=n(41681),i=n(12639);const o=(0,n(80863).A)("MuiBox",["root"]),r=(0,i.A)({defaultClassName:o.root,generateClassName:l.A.generate})},68639:(e,t,n)=>{n.d(t,{a:()=>a});var l=n(37827);function i(e){return e.toLowerCase()}var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],r=/[^A-Z0-9]+/gi;function s(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function a(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,l=void 0===n?o:n,a=t.stripRegexp,d=void 0===a?r:a,c=t.transform,u=void 0===c?i:c,h=t.delimiter,x=void 0===h?" ":h,v=s(s(e,l,"$1\0$2"),d,"\0"),g=0,p=v.length;"\0"===v.charAt(g);)g++;for(;"\0"===v.charAt(p-1);)p--;return v.slice(g,p).split("\0").map(u).join(x)}(e,(0,l.Cl)({delimiter:"."},t))}},94614:(e,t,n)=>{n.d(t,{c:()=>o});var l=n(37827),i=n(68639);function o(e,t){return void 0===t&&(t={}),(0,i.a)(e,(0,l.Cl)({delimiter:"-"},t))}}}]);