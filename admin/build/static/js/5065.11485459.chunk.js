"use strict";(self.webpackChunkadmin_plus=self.webpackChunkadmin_plus||[]).push([[5065],{65065:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var a=s(76455),r=s(28429),i=s(19808),n=s(90260),c=s(59905),d=s(87033),o=s(85082),u=s(95976),l=s(44414);function v(){const{themeStretch:e}=(0,c.Mp)(),{name:t}=(0,r.g)(),{data:s,isServiseLoading:v}=(0,u.P0)(t);return console.log("\ud83d\ude80 ~ file: ServiceEditPage.js:24 ~ ServiceEditPage ~ data:",s),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.mg,{children:(0,l.jsx)("title",{children:" ContactUs: Edit ContactUs "})}),(0,l.jsxs)(i.A,{maxWidth:!e&&"lg",children:[(0,l.jsx)(d.A,{heading:"Edit ContactUs",links:[{name:"Dashboard",href:n.nB.root},{name:"ContactUs",href:n.nB.contactUs.list},{name:null===s||void 0===s?void 0:s.name}]}),v?"loading":(0,l.jsx)(o.A,{isEdit:!0,currentService:null===s||void 0===s?void 0:s.servise})]})]})}},95976:(e,t,s)=>{s.d(t,{Gs:()=>r,P0:()=>c,Yn:()=>i,f:()=>n,oB:()=>d});const a=s(29994).FH.injectEndpoints({reducerPath:"apiUser",endpoints:e=>({getServices:e.query({query:e=>{let{page:t,limit:s}=e;return"services?page=".concat(t,"&limit=").concat(s)},serializeQueryArgs:e=>{let{endpointName:t}=e;return t},merge:(e,t,s,a)=>1!==t.data.page||e.data.page?t.data.page>e.data.page?(e.data.users.push(...t.data.users),e.data.page=t.data.page,e):e:t,forceRefetch(e){let{currentArg:t,previousArg:s}=e;return t!==s},providesTags:["services"]}),getServicesId:e.query({query:e=>"/services/".concat(e),providesTags:["services"]}),addServices:e.mutation({query:e=>({url:"/services",method:"POST",body:e,formData:!0,headers:{"Access-Control-Allow-Origin":"*"}}),invalidatesTags:["services"]}),editServices:e.mutation({query:e=>{let{formData:t,id:s}=e;return{url:"/services/".concat(s),method:"PATCH",body:t,formData:!0,headers:{"Access-Control-Allow-Origin":"*"}}},invalidatesTags:["services"]}),deleteServices:e.mutation({query:t=>({url:"/services/".concat(t),method:"Delete",body:e,headers:{"Content-type":"application/json; charset=UTF-8"}}),invalidatesTags:["services"]})})}),{useGetServicesQuery:r,useAddServicesMutation:i,useEditServicesMutation:n,useGetServicesIdQuery:c,useDeleteServicesMutation:d}=a}}]);