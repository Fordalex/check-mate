import{d as C,aI as g,aN as v,r as t,j as y,aJ as V,_ as w,c as m,a as B,l as s,as as o,aO as $,a1 as h,aq as _,o as p,aB as T,ar as x,aP as N,au as j,av as F,aQ as L,V as P}from"./index-BFqmyCUW.js";const A=C({name:"ChecklistsView",components:{PageHeader:g,ChecklistForm:v},setup(){const{getAccessTokenSilently:n,user:f}=V(),c=t(null),a=t([]),k=t(null),l=t(!0),r=async()=>{const u=await fetch("https://api.fordsdevelopment.co.uk/daily_discipline/checklists",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${c.value}`}});if(u.ok){l.value=!1;const d=await u.json();a.value=d,console.log(a.value)}else{l.value=!1;const d=await u.json();k.value=d.error}},i=async()=>{c.value=await n()};return y(async()=>{await i(),r()}),{checklists:a}}}),H={class:"page-header"};function I(n,f,c,a,k,l){const r=_("PageHeader"),i=_("ChecklistForm");return p(),m(h,null,[B("div",H,[s(r,{title:"Checklists"})]),s($,null,{default:o(()=>[(p(!0),m(h,null,T(n.checklists,e=>(p(),x(L,{key:e.id,to:`/checklists/${e.id}`},{default:o(()=>[s(N,null,{default:o(()=>[j(F(e.name),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1}),s(i,null,{trigger:o(({openDialog:e})=>[s(P,{density:"comfortable",variant:"tonal",text:"New Checklist",class:"mr-2",onClick:e},null,8,["onClick"])]),_:1})],64)}const S=w(A,[["render",I]]);export{S as default};
