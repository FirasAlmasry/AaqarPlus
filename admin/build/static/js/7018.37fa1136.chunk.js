"use strict";(self.webpackChunkadmin_plus=self.webpackChunkadmin_plus||[]).push([[7018],{78084:(e,n,t)=>{t.d(n,{A:()=>d});var l=t(63464),i=t(40033),o=t(28170),r=t(79739),s=t(45098),a=t(44414);function d(e){let{title:n,content:t,action:d,open:c,onClose:u,...h}=e;return(0,a.jsxs)(l.A,{fullWidth:!0,maxWidth:"xs",open:c,onClose:u,...h,children:[(0,a.jsx)(i.A,{sx:{pb:2},children:n}),t&&(0,a.jsxs)(o.A,{sx:{typography:"body2"},children:[" ",t," "]}),(0,a.jsxs)(r.A,{children:[d,(0,a.jsx)(s.A,{variant:"outlined",color:"inherit",onClick:u,children:"Cancel"})]})]})}},87033:(e,n,t)=>{t.d(n,{A:()=>u});var l=t(16491),i=t(12257),o=t(82053),r=t(52432),s=t(36080),a=t(42074),d=t(44414);function c(e){let{link:n,activeLast:t,disabled:i}=e;const{name:o,href:r,icon:c}=n,u={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...i&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(l.A,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),o]});return r?(0,d.jsx)(s.A,{component:a.N_,to:r,sx:u,children:h}):(0,d.jsxs)(l.A,{sx:u,children:[" ",h," "]})}function u(e){let{links:n,action:t,heading:a,moreLink:u,activeLast:x,sx:v,...g}=e;const p=n[n.length-1].name;return(0,d.jsxs)(l.A,{sx:{mb:5,...v},children:[(0,d.jsxs)(i.A,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(l.A,{sx:{flexGrow:1},children:[a&&(0,d.jsx)(o.A,{variant:"h4",gutterBottom:!0,children:a}),!!n.length&&(0,d.jsx)(r.A,{separator:(0,d.jsx)(h,{}),...g,children:n.map((e=>(0,d.jsx)(c,{link:e,activeLast:x,disabled:e.name===p},e.name||"")))})]}),t&&(0,d.jsxs)(l.A,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!u&&(0,d.jsx)(l.A,{sx:{mt:2},children:u.map((e=>(0,d.jsx)(s.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}function h(){return(0,d.jsx)(l.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},54593:(e,n,t)=>{function l(e,n,t){return e>0?Math.max(0,(1+e)*n-t):0}function i(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function o(e,n){return"desc"===e?(e,t)=>i(e,t,n):(e,t)=>-i(e,t,n)}t.d(n,{dO:()=>p,er:()=>w,Sm:()=>g,We:()=>k,Uv:()=>S,xl:()=>l,hz:()=>o,K2:()=>s});var r=t(9950);function s(e){const[n,t]=(0,r.useState)(!(null===e||void 0===e||!e.defaultDense)),[l,i]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),[o,s]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),[a,d]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),[c,u]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||25),[h,x]=(0,r.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),v=(0,r.useCallback)((e=>{""!==e&&(s(l===e&&"asc"===o?"desc":"asc"),i(e))}),[o,l]),g=(0,r.useCallback)((e=>{const n=h.indexOf(e);let t=[];-1===n?t=t.concat(h,e):0===n?t=t.concat(h.slice(1)):n===h.length-1?t=t.concat(h.slice(0,-1)):n>0&&(t=t.concat(h.slice(0,n),h.slice(n+1))),x(t)}),[h]),p=(0,r.useCallback)(((e,n)=>{x(e?n:[])}),[]),m=(0,r.useCallback)(((e,n)=>{d(n)}),[]),j=(0,r.useCallback)((e=>{d(0),u(parseInt(e.target.value,10))}),[]),f=(0,r.useCallback)((e=>{t(e.target.checked)}),[]);return{dense:n,order:o,page:a,orderBy:l,rowsPerPage:c,selected:h,onSelectRow:g,onSelectAllRows:p,onSort:v,onChangePage:m,onChangeDense:f,onChangeRowsPerPage:j,setPage:d,setDense:t,setOrder:s,setOrderBy:i,setSelected:x,setRowsPerPage:u}}var a=t(9213),d=t(21671),c=t(12257),u=t(82053),h=t(7653),x=t(44414);function v(e){let{title:n,description:t,img:l,sx:i,...o}=e;return(0,x.jsxs)(c.A,{alignItems:"center",justifyContent:"center",sx:{height:1,textAlign:"center",p:e=>e.spacing(8,2),...i},...o,children:[(0,x.jsx)(h.A,{disabledEffect:!0,alt:"empty content",src:l||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,x.jsx)(u.A,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,x.jsx)(u.A,{variant:"body2",sx:{color:"text.secondary"},children:t})]})}function g(e){let{isNotFound:n}=e;return(0,x.jsx)(a.A,{children:n?(0,x.jsx)(d.A,{colSpan:12,children:(0,x.jsx)(v,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,x.jsx)(d.A,{colSpan:12,sx:{p:0}})})}function p(e){let{emptyRows:n,height:t}=e;return n?(0,x.jsx)(a.A,{sx:{...t&&{height:t*n}},children:(0,x.jsx)(d.A,{colSpan:9})}):null}var m=t(69780),j=t(7251),f=t(16491);const A={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function w(e){let{order:n,orderBy:t,rowCount:l=0,headLabel:i,numSelected:o=0,onSort:r,onSelectAllRows:s,sx:c}=e;return(0,x.jsx)(m.A,{sx:c,children:(0,x.jsx)(a.A,{children:i.map((e=>(0,x.jsx)(d.A,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:r?(0,x.jsxs)(j.A,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:()=>r(e.id),sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,x.jsx)(f.A,{sx:{...A},children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)))})})}var C=t(93038);function S(e){let{dense:n,action:t,rowCount:l,numSelected:i,onSelectAllRows:o,sx:r,...s}=e;return i?(0,x.jsxs)(c.A,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...n&&{height:38},...r},...s,children:[(0,x.jsx)(C.A,{indeterminate:i>0&&i<l,checked:l>0&&i===l,onChange:e=>o(e.target.checked)}),(0,x.jsxs)(u.A,{variant:"subtitle1",sx:{ml:2,flexGrow:1,color:"primary.main",...n&&{ml:3}},children:[i," selected"]}),t&&t]}):null}var b=t(91434),R=t(16497),y=t(37324);function k(e){let{dense:n,onChangeDense:t,rowsPerPageOptions:l=[5,10,25],sx:i,...o}=e;return(0,x.jsxs)(f.A,{sx:{position:"relative",...i},children:[(0,x.jsx)(b.A,{rowsPerPageOptions:l,component:"div",...o}),t&&(0,x.jsx)(R.A,{label:"Dense",control:(0,x.jsx)(y.A,{checked:n,onChange:t}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},77018:(e,n,t)=>{t.r(n),t.d(n,{default:()=>U});var l=t(76455),i=t(94614),o=t(9950),r=t(28429),s=t(42074),a=t(19808),d=t(45098),c=t(48089),u=t(38200),h=t(84142),x=t(74745),v=t(1320),g=t(83274),p=t(25333),m=t(15769),j=t(34075),f=t(90260),A=t(39332),w=t(64071),C=t(78084),S=t(87033),b=t(59905),R=t(54593),y=t(9213),k=t(21671),P=t(23266),D=t(39635),F=t(44414);function B(e){let{row:n,selected:t,onEditRow:l,onSelectRow:i,onDeleteRow:r}=e;const{name:s,email:a}=n,[c,u]=(0,o.useState)(!1),[h,x]=(0,o.useState)(null),v=()=>{x(null)};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(y.A,{hover:!0,selected:t,children:[(0,F.jsx)(k.A,{align:"left",children:s}),(0,F.jsx)(k.A,{align:"left",children:a}),(0,F.jsx)(k.A,{align:"right",children:(0,F.jsx)(p.A,{color:h?"inherit":"default",onClick:e=>{x(e.currentTarget)},children:(0,F.jsx)(A.A,{icon:"eva:more-vertical-fill"})})})]}),(0,F.jsxs)(D.A,{open:h,onClose:v,arrow:"right-top",sx:{width:140},children:[(0,F.jsxs)(P.A,{onClick:()=>{u(!0),v()},sx:{color:"error.main"},children:[(0,F.jsx)(A.A,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,F.jsxs)(P.A,{onClick:()=>{l(),v()},children:[(0,F.jsx)(A.A,{icon:"eva:edit-fill"}),"Edit"]})]}),(0,F.jsx)(C.A,{open:c,onClose:()=>{u(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,F.jsx)(d.A,{variant:"contained",color:"error",onClick:r,children:"Delete"})})]})}var L=t(12257),N=t(16987),I=t(2046);function O(e){let{isFiltered:n,filterName:t,filterRole:l,optionsRole:i,onFilterName:o,onFilterRole:r,onResetFilter:s}=e;return(0,F.jsxs)(L.A,{spacing:2,alignItems:"center",direction:{xs:"column",sm:"row"},sx:{px:2.5,py:3},children:[(0,F.jsx)(N.A,{fullWidth:!0,value:t,onChange:o,placeholder:"Search...",InputProps:{startAdornment:(0,F.jsx)(I.A,{position:"start",children:(0,F.jsx)(A.A,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),n&&(0,F.jsx)(d.A,{color:"error",sx:{flexShrink:0},onClick:s,startIcon:(0,F.jsx)(A.A,{icon:"eva:trash-2-outline"}),children:"Clear"})]})}var W=t(29994);const E=[],_=["all","admin","user"],z=[{id:"name",label:"Name",align:"left"},{id:"email",label:"Email",align:"left"},{id:"",label:"",align:"left"}];function U(){var e,n;const{dense:t,page:y,order:k,orderBy:P,rowsPerPage:D,setPage:L,selected:N,setSelected:I,onSelectRow:U,onSelectAllRows:Z,onSort:M,onChangeDense:G,onChangePage:K,onChangeRowsPerPage:T}=(0,R.K2)(),{themeStretch:$}=(0,b.Mp)(),H=(0,r.Zp)(),{data:q,isUserLoading:J}=(0,W.vf)(),[Q,V]=(0,o.useState)([]);(0,o.useEffect)((()=>{var e;q&&!J&&V(null===q||void 0===q||null===(e=q.data)||void 0===e?void 0:e.data)}),[q,Q,J]);const[X,Y]=(0,o.useState)(!1),[ee,ne]=(0,o.useState)(""),[te,le]=(0,o.useState)("all"),[ie,oe]=(0,o.useState)("all"),re=function(e){var n;let{inputData:t,comparator:l,filterName:i,filterStatus:o,filterRole:r}=e;const s=null===(n=t)||void 0===n?void 0:n.map(((e,n)=>[e,n]));var a,d,c;null===s||void 0===s||s.sort(((e,n)=>{const t=l(e[0],n[0]);return 0!==t?t:e[1]-n[1]})),t=null===s||void 0===s?void 0:s.map((e=>e[0])),i&&(t=null===(a=t)||void 0===a?void 0:a.filter((e=>-1!==e.name.toLowerCase().indexOf(i.toLowerCase()))));"all"!==o&&(t=null===(d=t)||void 0===d?void 0:d.filter((e=>e.status===o)));"all"!==r&&(t=null===(c=t)||void 0===c?void 0:c.filter((e=>e.role===r)));return t}({inputData:Q,comparator:(0,R.hz)(k,P),filterName:ee,filterRole:te,filterStatus:ie}),se=null===re||void 0===re?void 0:re.slice(y*D,y*D+D),ae=t?52:72,de=""!==ee||"all"!==te||"all"!==ie,ce=!(null!==re&&void 0!==re&&re.length)&&!!ee||!(null!==re&&void 0!==re&&re.length)&&!!te||!(null!==re&&void 0!==re&&re.length)&&!!ie,ue=()=>{Y(!1)},[he]=(0,W.HC)();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(l.mg,{children:(0,F.jsx)("title",{children:" User: List"})}),(0,F.jsxs)(a.A,{maxWidth:!$&&"lg",children:[(0,F.jsx)(S.A,{heading:"User List",links:[{name:"Dashboard",href:f.nB.root},{name:"User",href:f.nB.user.root},{name:"List"}],action:(0,F.jsx)(d.A,{component:s.N_,to:f.nB.user.new,variant:"contained",startIcon:(0,F.jsx)(A.A,{icon:"eva:plus-fill"}),children:"New User"})}),(0,F.jsxs)(c.A,{children:[(0,F.jsx)(u.A,{value:ie,onChange:(e,n)=>{L(0),oe(n)},sx:{px:2,bgcolor:"background.neutral"},children:E.map((e=>(0,F.jsx)(h.A,{label:e,value:e},e)))}),(0,F.jsx)(x.A,{}),(0,F.jsx)(O,{isFiltered:de,filterName:ee,filterRole:te,optionsRole:_,onFilterName:e=>{L(0),ne(e.target.value)},onFilterRole:e=>{L(0),le(e.target.value)},onResetFilter:()=>{ne(""),le("all"),oe("all")}}),(0,F.jsxs)(v.A,{sx:{position:"relative",overflow:"unset"},children:[(0,F.jsx)(R.Uv,{dense:t,numSelected:null===N||void 0===N?void 0:N.length,rowCount:null===Q||void 0===Q?void 0:Q.length,onSelectAllRows:e=>Z(e,Q.map((e=>e.id))),action:(0,F.jsx)(g.A,{title:"Delete",children:(0,F.jsx)(p.A,{color:"primary",onClick:()=>{Y(!0)},children:(0,F.jsx)(A.A,{icon:"eva:trash-2-outline"})})})}),(0,F.jsx)(w.A,{children:(0,F.jsxs)(m.A,{size:t?"small":"medium",sx:{minWidth:800},children:[(0,F.jsx)(R.er,{order:k,orderBy:P,headLabel:z,rowCount:null===Q||void 0===Q?void 0:Q.length,numSelected:null===N||void 0===N?void 0:N.length,onSort:M,onSelectAllRows:e=>Z(e,null===Q||void 0===Q?void 0:Q.map((e=>e.id)))}),(0,F.jsxs)(j.A,{children:[null===re||void 0===re||null===(e=re.slice(y*D,y*D+D))||void 0===e?void 0:e.map((e=>(0,F.jsx)(B,{row:e,selected:N.includes(null===e||void 0===e?void 0:e.id),onSelectRow:()=>U(null===e||void 0===e?void 0:e.id),onDeleteRow:()=>(async e=>{await he(e);const n=null===Q||void 0===Q?void 0:Q.filter((n=>n.id!==e));I([]),V(n),y>0&&se.length<2&&L(y-1)})(null===e||void 0===e?void 0:e.id),onEditRow:()=>{return"string"!==typeof(n=null===e||void 0===e?void 0:e.id)&&(n=String(n)),void H(f.nB.user.edit((0,i.c)(n)));var n}},null===e||void 0===e?void 0:e.id))),(0,F.jsx)(R.dO,{height:ae,emptyRows:(0,R.xl)(y,D,null===Q||void 0===Q?void 0:Q.length)}),(0,F.jsx)(R.Sm,{isNotFound:ce})]})]})})]}),(0,F.jsx)(R.We,{count:null===q||void 0===q||null===(n=q.data)||void 0===n?void 0:n.per_page,page:y,rowsPerPage:D,onPageChange:K,onRowsPerPageChange:T,dense:t,onChangeDense:G})]})]}),(0,F.jsx)(C.A,{open:X,onClose:ue,title:"Delete",content:(0,F.jsxs)(F.Fragment,{children:["Are you sure want to delete ",(0,F.jsxs)("strong",{children:[" ",null===N||void 0===N?void 0:N.length," "]})," items?"]}),action:(0,F.jsx)(d.A,{variant:"contained",color:"error",onClick:()=>{(e=>{const n=null===Q||void 0===Q?void 0:Q.filter((n=>!e.includes(n.id)));if(I([]),V(n),y>0)if((null===e||void 0===e?void 0:e.length)===(null===se||void 0===se?void 0:se.length))L(y-1);else if((null===e||void 0===e?void 0:e.length)===(null===re||void 0===re?void 0:re.length))L(0);else if((null===e||void 0===e?void 0:e.length)>(null===se||void 0===se?void 0:se.length)){const n=Math.ceil(((null===Q||void 0===Q?void 0:Q.length)-(null===e||void 0===e?void 0:e.length))/D)-1;L(n)}})(N),ue()},children:"Delete"})})]})}},68639:(e,n,t)=>{t.d(n,{a:()=>a});var l=t(37827);function i(e){return e.toLowerCase()}var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],r=/[^A-Z0-9]+/gi;function s(e,n,t){return n instanceof RegExp?e.replace(n,t):n.reduce((function(e,n){return e.replace(n,t)}),e)}function a(e,n){return void 0===n&&(n={}),function(e,n){void 0===n&&(n={});for(var t=n.splitRegexp,l=void 0===t?o:t,a=n.stripRegexp,d=void 0===a?r:a,c=n.transform,u=void 0===c?i:c,h=n.delimiter,x=void 0===h?" ":h,v=s(s(e,l,"$1\0$2"),d,"\0"),g=0,p=v.length;"\0"===v.charAt(g);)g++;for(;"\0"===v.charAt(p-1);)p--;return v.slice(g,p).split("\0").map(u).join(x)}(e,(0,l.Cl)({delimiter:"."},n))}},94614:(e,n,t)=>{t.d(n,{c:()=>o});var l=t(37827),i=t(68639);function o(e,n){return void 0===n&&(n={}),(0,i.a)(e,(0,l.Cl)({delimiter:"-"},n))}}}]);