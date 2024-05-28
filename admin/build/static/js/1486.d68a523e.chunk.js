"use strict";(self.webpackChunkadmin_plus=self.webpackChunkadmin_plus||[]).push([[1486],{87033:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(53011),o=n(12257),r=n(82053),i=n(52432),l=n(36080),s=n(42074),d=n(44414);function c(e){let{link:t,activeLast:n,disabled:o}=e;const{name:r,href:i,icon:c}=t,p={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...o&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},u=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(a.A,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),r]});return i?(0,d.jsx)(l.A,{component:s.N_,to:i,sx:p,children:u}):(0,d.jsxs)(a.A,{sx:p,children:[" ",u," "]})}function p(e){let{links:t,action:n,heading:s,moreLink:p,activeLast:m,sx:v,...h}=e;const x=t[t.length-1].name;return(0,d.jsxs)(a.A,{sx:{mb:5,...v},children:[(0,d.jsxs)(o.A,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(a.A,{sx:{flexGrow:1},children:[s&&(0,d.jsx)(r.A,{variant:"h4",gutterBottom:!0,children:s}),!!t.length&&(0,d.jsx)(i.A,{separator:(0,d.jsx)(u,{}),...h,children:t.map((e=>(0,d.jsx)(c,{link:e,activeLast:m,disabled:e.name===x},e.name||"")))})]}),n&&(0,d.jsxs)(a.A,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!p&&(0,d.jsx)(a.A,{sx:{mt:2},children:p.map((e=>(0,d.jsx)(l.A,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}function u(){return(0,d.jsx)(a.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},44537:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(9950),o=n(14857),r=n(53011),i=n(59254),l=n(97497);const s=(0,i.Ay)(r.A)((e=>{let{theme:t,ownerState:n}=e;const a="light"===t.palette.mode,o="filled"===n.variant,r="outlined"===n.variant,i="soft"===n.variant,s={..."default"===n.color&&{...r&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"1px solid ".concat((0,l.X4)(t.palette.grey[500],.32))},...i&&{color:a?t.palette.text.primary:t.palette.common.white,backgroundColor:(0,l.X4)(t.palette.grey[500],.16)}}},d={..."default"!==n.color&&{...o&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main},...r&&{backgroundColor:"transparent",color:t.palette[n.color].main,border:"1px solid ".concat(t.palette[n.color].main)},...i&&{color:t.palette[n.color][a?"dark":"light"],backgroundColor:(0,l.X4)(t.palette[n.color].main,.16)}}};return{height:24,minWidth:22,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,1),color:t.palette.grey[800],fontSize:t.typography.pxToRem(12),fontFamily:t.typography.fontFamily,backgroundColor:t.palette.grey[300],fontWeight:t.typography.fontWeightBold,...d,...s}}));var d=n(44414);const c=(0,a.forwardRef)(((e,t)=>{let{children:n,color:a="default",variant:i="soft",startIcon:l,endIcon:c,sx:p,...u}=e;const m=(0,o.A)(),v={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,d.jsxs)(s,{ref:t,component:"span",ownerState:{color:a,variant:i},sx:{...l&&{pl:.75},...c&&{pr:.75},...p},theme:m,...u,children:[l&&(0,d.jsxs)(r.A,{sx:{mr:.75,...v},children:[" ",l," "]}),n,c&&(0,d.jsxs)(r.A,{sx:{ml:.75,...v},children:[" ",c," "]})]})}))},3782:(e,t,n)=>{n.d(t,{A:()=>R});var a=n(29714),o=n(9950),r=n(28429),i=n(9449),l=n(26473),s=n(28095),d=n(60899),c=n(48089),p=n(53011),u=n(12257),m=n(82053),v=n(16497),h=n(37324),x=n(3788),g=n(57404),y=n(23266),A=n(2660),j=n(25277),b=n(63477),f=n(90260),_=n(44537),C=n(26997),q=n(54146),w=n(56669),S=n(15048),k=n(63581),I=n(86210),T=n(22899),D=n(44414);function P(e,t,n){return{fontWeight:-1===(null===t||void 0===t?void 0:t.indexOf(e))?n.typography.fontWeightRegular:n.typography.fontWeightMedium}}const M={PaperProps:{style:{maxHeight:224,width:250}}};function R(e){var t,n,R,F,Y;let{isEdit:E=!1,currentService:L}=e;const O=(0,T.u)(),N=(0,r.Zp)(),{enqueueSnackbar:B}=(0,C.dh)(),[H,G]=(0,o.useState)([]),{data:Q,isDevLoading:U}=(0,S.Fg)({currentPage:1,limit:1e3});let W=null===L||void 0===L||null===(t=L.compound)||void 0===t?void 0:t.developer_id;W=String(W);const[z,X]=(0,o.useState)(W),V=null===Q||void 0===Q||null===(n=Q.data)||void 0===n?void 0:n.data;(0,o.useEffect)((()=>{X(W)}),[W]);const{data:Z,isCoinsLoading:J}=(0,k.ef)();let K=null===L||void 0===L||null===(R=L.compound)||void 0===R?void 0:R.coin_id;K=String(K);const[$,ee]=(0,o.useState)(K),te=null===Z||void 0===Z||null===(F=Z.data)||void 0===F?void 0:F.data;(0,o.useEffect)((()=>{ee(K)}),[K]);const{data:ne,isAttachedData:ae}=(0,I.DM)(),oe=null===ne||void 0===ne||null===(Y=ne.data)||void 0===Y?void 0:Y.data,[re,ie]=(0,o.useState)([]);(0,o.useEffect)((()=>{var e;const t=(null===L||void 0===L||null===(e=L.attachedArray)||void 0===e?void 0:e.map((e=>e.id)))||[];ie(t)}),[null===L||void 0===L?void 0:L.attachedArray]);const le=a.Ik().shape({name:a.Ik({en:a.Yj().required("name en is required"),ar:a.Yj().required("name ar is required")}),address:a.Ik({en:a.Yj().required("address en is required"),ar:a.Yj().required("address ar is required")}),description:a.Ik({en:a.Yj().required("description en is required"),ar:a.Yj().required("description ar is required")}),payment_plans:a.Ik({en:a.Yj().required("payment plans en is required"),ar:a.Yj().required("payment plans ar is required")}),phone_number:a.Yj().required("phone number en is required"),whatsapp:a.Yj().required("whatsapp en is required"),trending:a.Yj().required("trending en is required"),developer_id:a.Yj(),url_location:a.Yj().required("url location en is required"),coin_id:a.Yj(),image_location:a.gl().required("image location is required"),start_price:a.Yj().required("start price en is required"),end_price:a.Yj().required("end price en is required"),is_available:a.Yj(),attached:a.YO().required("required"),files:a.YO().required("required")}),se=(0,o.useMemo)((()=>{var e,t,n,a,o,r,i,l,s,d,c,p,u,m,v,h,x,g,y,A,j,b,f,_,C;return{name:{en:(null===L||void 0===L||null===(e=L.compound)||void 0===e||null===(t=e.name)||void 0===t?void 0:t.en)||"",ar:(null===L||void 0===L||null===(n=L.compound)||void 0===n||null===(a=n.name)||void 0===a?void 0:a.ar)||""},address:{en:(null===L||void 0===L||null===(o=L.compound)||void 0===o||null===(r=o.address)||void 0===r?void 0:r.en)||"",ar:(null===L||void 0===L||null===(i=L.compound)||void 0===i||null===(l=i.address)||void 0===l?void 0:l.ar)||""},description:{en:(null===L||void 0===L||null===(s=L.compound)||void 0===s||null===(d=s.description)||void 0===d?void 0:d.en)||"",ar:(null===L||void 0===L||null===(c=L.compound)||void 0===c||null===(p=c.description)||void 0===p?void 0:p.ar)||""},payment_plans:{en:(null===L||void 0===L||null===(u=L.compound)||void 0===u||null===(m=u.payment_plans)||void 0===m?void 0:m.en)||"",ar:(null===L||void 0===L||null===(v=L.compound)||void 0===v||null===(h=v.payment_plans)||void 0===h?void 0:h.ar)||""},phone_number:(null===L||void 0===L||null===(x=L.compound)||void 0===x?void 0:x.phone_number)||"",whatsapp:(null===L||void 0===L||null===(g=L.compound)||void 0===g?void 0:g.whatsapp)||"",start_price:(null===L||void 0===L||null===(y=L.compound)||void 0===y?void 0:y.start_price)||"0",end_price:(null===L||void 0===L||null===(A=L.compound)||void 0===A?void 0:A.end_price)||"0",trending:(null===L||void 0===L||null===(j=L.compound)||void 0===j?void 0:j.trending)||"0",url_location:(null===L||void 0===L||null===(b=L.compound)||void 0===b?void 0:b.url_location)||"",image_location:null===L||void 0===L||null===(f=L.compound)||void 0===f?void 0:f.image_location,developer_id:z||"",coin_id:$||"",is_available:(null===L||void 0===L||null===(_=L.compound)||void 0===_?void 0:_.is_available)||"0",attached:re||[],files:null===L||void 0===L||null===(C=L.compound)||void 0===C?void 0:C.images}}),[L]),de=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),ce=(0,i.mN)({resolver:(0,l.t)(le),defaultValues:se}),{reset:pe,watch:ue,control:me,setValue:ve,handleSubmit:he,formState:{isSubmitting:xe}}=ce,ge=ue();(0,o.useEffect)((()=>{E&&L&&pe(se),E||pe(se)}),[E,L]);const{refetch:ye}=(0,w.ql)(),[Ae]=(0,w.S4)(),[je]=(0,w.xg)(),be=(0,o.useCallback)((e=>{const t=e[0],n=Object.assign(t,{preview:URL.createObjectURL(t)});t&&ve("image_location",n,{shouldValidate:!0})}),[ve]),fe=(0,o.useCallback)((e=>{const t=ge.files||[],n=e.map((e=>Object.assign(e,{preview:URL.createObjectURL(e)})));ve("files",[...t,...n],{shouldValidate:!0})}),[ve,ge.files]);return(0,D.jsx)(q.Ay,{methods:ce,onSubmit:he((async e=>{try{var t;const n=parseFloat(e.start_price.replace(/,/g,"")),a=parseFloat(e.end_price.replace(/,/g,"")),o=new FormData;o.append("ar_name",e.name.ar),o.append("en_name",e.name.en),o.append("ar_address",e.address.ar),o.append("en_address",e.address.en),o.append("ar_description",e.description.ar),o.append("en_description",e.description.en),o.append("ar_payment_plans",e.payment_plans.ar),o.append("en_payment_plans",e.payment_plans.en),o.append("phone_number",e.phone_number),o.append("is_available",e.is_available),o.append("whatsapp",e.whatsapp),o.append("start_price",n),o.append("end_price",a),o.append("trending",e.trending),o.append("url_location",e.url_location),o.append("developer_id",z),o.append("coin_id",$),null===re||void 0===re||re.map((e=>o.append("attached[]",e))),"object"===typeof e.image_location&&e.image_location instanceof File&&o.append("image_location",e.image_location),null===(t=e.files)||void 0===t||t.map((e=>("object"===typeof e&&e instanceof File&&o.append("files[]",e),null))),null!==H&&void 0!==H&&H.length&&(null===H||void 0===H||H.map((e=>o.append("images_to_delete[]",e)))),E?await je({formData:o,id:L.compound.id}).unwrap():await Ae(o).unwrap(),pe(),ye(),B(E?"Update success!":"Create success!"),N(f.nB.compounds.list)}catch(n){console.error(n)}})),children:(0,D.jsxs)(d.Ay,{container:!0,spacing:3,children:[(0,D.jsx)(d.Ay,{item:!0,xs:12,md:4,children:(0,D.jsxs)(c.A,{sx:{pt:10,pb:5,px:3},children:[E&&(0,D.jsx)(_.A,{color:"active"===ge.status?"success":"error",sx:{textTransform:"uppercase",position:"absolute",top:24,right:24},children:ge.status}),(0,D.jsx)(p.A,{sx:{mb:5},children:(0,D.jsxs)(u.A,{spacing:1,children:[(0,D.jsx)(m.A,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Images"}),(0,D.jsx)(q.Y4,{multiple:!0,thumbnail:!0,name:"files",maxSize:3145728,onDrop:fe,onRemove:e=>{var t;const n=ge.files&&(null===(t=ge.files)||void 0===t?void 0:t.filter((t=>"object"===typeof t&&t instanceof File?t!==e:(null===t||void 0===t?void 0:t.id)!==(null===e||void 0===e?void 0:e.id))));G((t=>[...t,e.id])),ve("files",n)},onRemoveAll:()=>{ve("files",[])},onUpload:()=>console.log("ON UPLOAD")})]})}),(0,D.jsx)(p.A,{sx:{mb:5},children:(0,D.jsx)(q.BF,{name:"image_location",maxSize:3145728,onDrop:be,label:"Image Location",helperText:(0,D.jsxs)(m.A,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["location image ",(0,D.jsx)("br",{}),"Allowed *.jpeg, *.jpg, *.png, *.gif",(0,D.jsx)("br",{})," max size of ",(0,b.tm)(3145728)]})})}),(0,D.jsx)(v.A,{labelPlacement:"start",control:(0,D.jsx)(i.xI,{name:"trending",control:me,render:e=>{let{field:t}=e;return(0,D.jsx)(h.A,{...t,checked:"0"!==t.value,onChange:e=>t.onChange(e.target.checked?"1":"0")})}}),label:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(m.A,{variant:"subtitle2",sx:{mb:.5},children:"Trending"}),(0,D.jsx)(m.A,{variant:"body2",sx:{color:"text.secondary"},children:"Apply Trending"})]}),sx:{mx:0,mb:3,width:1,justifyContent:"space-between"}}),(0,D.jsx)(v.A,{labelPlacement:"start",control:(0,D.jsx)(i.xI,{name:"is_available",control:me,render:e=>{let{field:t}=e;return(0,D.jsx)(h.A,{...t,checked:"0"!==t.value,onChange:e=>t.onChange(e.target.checked?"1":"0")})}}),label:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(m.A,{variant:"subtitle2",sx:{mb:.5},children:"Available"}),(0,D.jsx)(m.A,{variant:"body2",sx:{color:"text.secondary"},children:"Apply Available"})]}),sx:{mx:0,mb:3,width:1,justifyContent:"space-between"}})]})}),(0,D.jsx)(d.Ay,{item:!0,xs:12,md:8,children:(0,D.jsxs)(c.A,{sx:{p:3},children:[(0,D.jsxs)(p.A,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},alignItems:"center",children:[(0,D.jsx)(q.o3,{name:"name.ar",label:"Name ar"}),(0,D.jsx)(q.o3,{name:"name.en",label:"Name en"}),(0,D.jsx)(q.o3,{name:"address.ar",label:"Address ar"}),(0,D.jsx)(q.o3,{name:"address.en",label:"Address en"}),(0,D.jsx)(q.o3,{name:"phone_number",label:"Phone Number"}),(0,D.jsx)(q.o3,{name:"whatsapp",label:"Whatsapp"}),(0,D.jsx)(q.o3,{name:"start_price",label:"Start price",onChange:e=>{const{value:t}=e.target,n=de(t.replace(/,/g,""));ve("start_price",n,{shouldValidate:!0})}}),(0,D.jsx)(q.o3,{name:"end_price",label:"End price",onChange:e=>{const{value:t}=e.target,n=de(t.replace(/,/g,""));ve("end_price",n,{shouldValidate:!0})}}),(0,D.jsxs)(p.A,{children:[(0,D.jsx)(x.A,{id:"Dev",children:"Developer"}),(0,D.jsx)(g.A,{sx:{width:"100%"},labelId:"Dev",value:z,onChange:e=>{X(e.target.value)},name:"developer_id",children:null===V||void 0===V?void 0:V.map((e=>(0,D.jsx)(y.A,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.name.ar})))})]}),(0,D.jsxs)(p.A,{children:[(0,D.jsx)(x.A,{id:"coin",children:"Currency"}),(0,D.jsx)(g.A,{sx:{width:"100%"},labelId:"coin",value:$,onChange:e=>{ee(e.target.value)},name:"coin_id",children:null===te||void 0===te?void 0:te.map((e=>(0,D.jsx)(y.A,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.code})))})]}),(0,D.jsxs)(p.A,{children:[(0,D.jsx)(x.A,{id:"demo-multiple-chip-label",children:"Facilities"}),(0,D.jsx)(g.A,{sx:{width:"100%"},labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,value:re,onChange:e=>{const{target:{value:t}}=e;ie(t)},input:(0,D.jsx)(A.A,{id:"select-multiple-chip",label:"Chip"}),renderValue:e=>(0,D.jsx)(p.A,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:null===e||void 0===e?void 0:e.map((e=>{var t;return(0,D.jsx)(j.A,{label:null===oe||void 0===oe||null===(t=oe.find((t=>(null===t||void 0===t?void 0:t.id)===e)))||void 0===t?void 0:t.name.ar},e)}))}),MenuProps:M,children:null===oe||void 0===oe?void 0:oe.map((e=>(0,D.jsx)(y.A,{value:null===e||void 0===e?void 0:e.id,style:P(e,re,O),children:null===e||void 0===e?void 0:e.name.en},null===e||void 0===e?void 0:e.id)))})]})]}),(0,D.jsx)(d.Ay,{item:!0,xs:12,md:12,sx:{mt:2,minHeight:50},children:(0,D.jsxs)(u.A,{children:[(0,D.jsx)(m.A,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Arabic Description"}),(0,D.jsx)(q.CX,{simple:!0,name:"description.ar"})]})}),(0,D.jsx)(d.Ay,{item:!0,xs:12,md:12,sx:{mt:2,minHeight:50},children:(0,D.jsxs)(u.A,{children:[(0,D.jsx)(m.A,{variant:"subtitle2",sx:{color:"text.secondary"},children:"English Description"}),(0,D.jsx)(q.CX,{simple:!0,name:"description.en"})]})}),(0,D.jsx)(d.Ay,{item:!0,xs:12,md:12,sx:{mt:2,minHeight:50},children:(0,D.jsxs)(u.A,{children:[(0,D.jsx)(m.A,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Arabic Payment Plans"}),(0,D.jsx)(q.CX,{simple:!0,name:"payment_plans.ar"})]})}),(0,D.jsx)(d.Ay,{item:!0,xs:12,md:12,sx:{mt:2,minHeight:50},children:(0,D.jsxs)(u.A,{children:[(0,D.jsx)(m.A,{variant:"subtitle2",sx:{color:"text.secondary"},children:"English Payment Plans"}),(0,D.jsx)(q.CX,{simple:!0,name:"payment_plans.en"})]})}),(0,D.jsx)(d.Ay,{item:!0,xs:12,md:12,sx:{mt:2,minHeight:50},children:(0,D.jsxs)(u.A,{children:[(0,D.jsxs)(m.A,{variant:"subtitle2",sx:{color:"text.secondary"},children:["I Fram ","<Embed Location >"]}),(0,D.jsx)(q.CX,{simple:!0,name:"url_location"})]})}),(0,D.jsx)(u.A,{alignItems:"flex-end",sx:{mt:3},children:(0,D.jsx)(s.A,{type:"submit",variant:"contained",loading:xe,children:E?"Save Changes":"Create Compound"})})]})})]})})}},63581:(e,t,n)=>{n.d(t,{ef:()=>o});const a=n(29994).FH.injectEndpoints({reducerPath:"apiUser",endpoints:e=>({getCoins:e.query({query:()=>"/coins?per_page=15",providesTags:["coins"]}),editCoins:e.mutation({query:e=>{let{formData:t,id:n}=e;return{url:"/coins/".concat(n),method:"POST",body:t}},invalidatesTags:["/coins"]})})}),{useGetCoinsQuery:o,useEditCoinsMutation:r}=a},56669:(e,t,n)=>{n.d(t,{S4:()=>i,Xz:()=>r,eS:()=>s,ql:()=>o,xg:()=>l});const a=n(29994).FH.injectEndpoints({reducerPath:"apiUser",endpoints:e=>({getCompounds:e.query({query:e=>{let{currentPage:t,limit:n}=e;return"/compounds?page=".concat(t,"&per_page=").concat(n)},providesTags:["compounds"]}),getCompoundsId:e.query({query:e=>"/compounds/".concat(e,"?local=none"),providesTags:["compounds"]}),addCompounds:e.mutation({query:e=>({url:"/compounds",method:"POST",body:e}),invalidatesTags:["compounds"]}),editCompounds:e.mutation({query:e=>{let{formData:t,id:n}=e;return{url:"/compounds/".concat(n),method:"POST",body:t}},invalidatesTags:["/compounds"]}),deleteCompounds:e.mutation({query:t=>({url:"/compounds/".concat(t),method:"Delete",body:e}),invalidatesTags:["/compounds"]})})}),{useGetCompoundsQuery:o,useGetCompoundsIdQuery:r,useAddCompoundsMutation:i,useEditCompoundsMutation:l,useDeleteCompoundsMutation:s}=a},15048:(e,t,n)=>{n.d(t,{Fg:()=>o,LQ:()=>s,W:()=>l,j8:()=>i,wG:()=>r});const a=n(29994).FH.injectEndpoints({reducerPath:"apiUser",endpoints:e=>({getDevelopers:e.query({query:e=>{let{currentPage:t,limit:n}=e;return"/developers?page=".concat(t,"&per_page=").concat(n)},providesTags:["developers"]}),getDevelopersId:e.query({query:e=>"/developers/".concat(e,"?local=none"),providesTags:["developers"]}),addDevelopers:e.mutation({query:e=>({url:"/developers",method:"POST",body:e}),invalidatesTags:["developers"]}),editDevelopers:e.mutation({query:e=>{let{formData:t,id:n}=e;return{url:"/developers/".concat(n),method:"POST",body:t}},invalidatesTags:["/developers"]}),deleteDevelopers:e.mutation({query:t=>({url:"/developers/".concat(t),method:"Delete",body:e}),invalidatesTags:["/developers"]})})}),{useGetDevelopersQuery:o,useGetDevelopersIdQuery:r,useAddDevelopersMutation:i,useEditDevelopersMutation:l,useDeleteDevelopersMutation:s}=a},86210:(e,t,n)=>{n.d(t,{DM:()=>o,QN:()=>l,Zx:()=>r,sQ:()=>i,vm:()=>s});const a=n(29994).FH.injectEndpoints({reducerPath:"apiUser",endpoints:e=>({getAttacheds:e.query({query:()=>"/attacheds?per_page=100"}),invalidatesTags:["attacheds"],getAttachedsId:e.query({query:e=>"/attacheds/".concat(e),invalidatesTags:["attacheds"]}),addAttacheds:e.mutation({query:e=>({url:"/attacheds",method:"POST",body:e}),invalidatesTags:["attacheds"]}),editAttacheds:e.mutation({query:e=>{let{formData:t,id:n}=e;return{url:"/attacheds/".concat(n),method:"POST",body:t}},invalidatesTags:["attacheds"]}),deleteAttacheds:e.mutation({query:t=>({url:"/attacheds/".concat(t),method:"Delete",body:e}),invalidatesTags:["attacheds"]})})}),{useGetAttachedsQuery:o,useAddAttachedsMutation:r,useEditAttachedsMutation:i,useGetAttachedsIdQuery:l,useDeleteAttachedsMutation:s}=a},52432:(e,t,n)=>{n.d(t,{A:()=>T});var a=n(58168),o=n(98587),r=n(9950),i=(n(26429),n(72004)),l=n(43161),s=n(74061),d=n(59254),c=n(48283),p=n(82053),u=n(99269),m=n(65471),v=n(44414);const h=(0,m.A)((0,v.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var x=n(59271);const g=["slots","slotProps"],y=(0,d.Ay)(x.A)((e=>{let{theme:t}=e;return(0,a.A)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,a.A)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,a.A)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,u.tL)(t.palette.grey[200],.12)}:{backgroundColor:(0,u.tL)(t.palette.grey[600],.12)})})})),A=(0,d.Ay)(h)({width:24,height:16});const j=function(e){const{slots:t={},slotProps:n={}}=e,r=(0,o.A)(e,g),i=e;return(0,v.jsx)("li",{children:(0,v.jsx)(y,(0,a.A)({focusRipple:!0},r,{ownerState:i,children:(0,v.jsx)(A,(0,a.A)({as:t.CollapsedIcon,ownerState:i},n.collapsedIcon))}))})};var b=n(80863),f=n(68483);function _(e){return(0,f.Ay)("MuiBreadcrumbs",e)}const C=(0,b.A)("MuiBreadcrumbs",["root","ol","li","separator"]),q=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,d.Ay)(p.A,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{["& .".concat(C.li)]:t.li},t.root]})({}),S=(0,d.Ay)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,d.Ay)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function I(e,t,n,a){return e.reduce(((o,r,i)=>(i<e.length-1?o=o.concat(r,(0,v.jsx)(k,{"aria-hidden":!0,className:t,ownerState:a,children:n},"separator-".concat(i))):o.push(r),o)),[])}const T=r.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiBreadcrumbs"}),{children:d,className:p,component:u="nav",slots:m={},slotProps:h={},expandText:x="Show path",itemsAfterCollapse:g=1,itemsBeforeCollapse:y=1,maxItems:A=8,separator:b="/"}=n,f=(0,o.A)(n,q),[C,k]=r.useState(!1),T=(0,a.A)({},n,{component:u,expanded:C,expandText:x,itemsAfterCollapse:g,itemsBeforeCollapse:y,maxItems:A,separator:b}),D=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},_,t)})(T),P=(0,l.Q)({elementType:m.CollapsedIcon,externalSlotProps:h.collapsedIcon,ownerState:T}),M=r.useRef(null),R=r.Children.toArray(d).filter((e=>r.isValidElement(e))).map(((e,t)=>(0,v.jsx)("li",{className:D.li,children:e},"child-".concat(t))));return(0,v.jsx)(w,(0,a.A)({ref:t,component:u,color:"text.secondary",className:(0,i.A)(D.root,p),ownerState:T},f,{children:(0,v.jsx)(S,{className:D.ol,ref:M,ownerState:T,children:I(C||A&&R.length<=A?R:(e=>y+g>=e.length?e:[...e.slice(0,y),(0,v.jsx)(j,{"aria-label":x,slots:{CollapsedIcon:m.CollapsedIcon},slotProps:{collapsedIcon:P},onClick:()=>{k(!0);const e=M.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-g,e.length)])(R),D.separator,b,T)})}))}))},48089:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(58168),o=n(98587),r=n(9950),i=n(72004),l=n(74061),s=n(59254),d=n(48283),c=n(2235),p=n(80863),u=n(68483);function m(e){return(0,u.Ay)("MuiCard",e)}(0,p.A)("MuiCard",["root"]);var v=n(44414);const h=["className","raised"],x=(0,s.Ay)(c.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),g=r.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiCard"}),{className:r,raised:s=!1}=n,c=(0,o.A)(n,h),p=(0,a.A)({},n,{raised:s}),u=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"]},m,t)})(p);return(0,v.jsx)(x,(0,a.A)({className:(0,i.A)(u.root,r),elevation:s?8:void 0,ref:t,ownerState:p},c))}))}}]);