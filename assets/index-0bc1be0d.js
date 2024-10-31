import{_ as j,o,c,d as s,O as V,e as P,n as L,a as u,p as $,h as w,I as F,F as g,r as U,t as d,G as T,M as z,E as v,A as E,u as p,b as y,w as k,R as G,N as M,P as O,q,S as D,s as J,v as K}from"./FullLoading-28025c67.js";import{A as W}from"./ArrowRightIcon-72474433.js";import{f as H}from"./fetchJson-f1460760.js";import{u as Q}from"./useGotoTargetAnchor-caf43ed2.js";function Ee(){import("data:text/javascript,")}const X="/assets/project-tag-active-83d22f27.svg";const Y={props:{active:{type:Boolean,default:!1},rabbit:{type:Boolean,default:!1}},computed:{className(){const n=[];return this.active&&n.push("active"),this.rabbit&&n.push("rabbit"),n.join(" ")}}},Z={class:"project-tag-active-text"},ee={key:0,src:X,alt:"",class:"project-tag-active-image"};function te(n,i,a,h,m,e){return o(),c("span",{class:L(["project-tag",e.className])},[s("span",Z,[V(n.$slots,"default",{},void 0,!0)]),a.active&&a.rabbit?(o(),c("img",ee)):P("",!0)],2)}const I=j(Y,[["render",te],["__scopeId","data-v-5f2c03b9"]]);const se=n=>($("data-v-4271d19e"),n=n(),w(),n),ae={class:"flex items-center cursor-pointer"},ne=se(()=>s("span",{class:"text-28px font-bold lean-more-label"},"Read all",-1)),oe={__name:"ReadAll",setup(n){return(i,a)=>(o(),c("span",ae,[ne,u(W)]))}},re=j(oe,[["__scopeId","data-v-4271d19e"]]);const ce={components:{ReadAll:re},props:{item:{type:Object,required:!0},imagePosition:{type:String,default:"right"}}},ie=n=>($("data-v-fdab8872"),n=n(),w(),n),le={class:"description"},de={class:"tags text-20px opacity-1/2"},pe={key:0},ue={class:"title text-40px"},_e={class:"detail text-30px opacity-1/2"},ge={class:"flex justify-between items-center"},he={class:"author"},me=["src"],ve={class:"author-name-en text-18px font-bold"},je=ie(()=>s("br",null,null,-1)),fe={class:"author-name-zh text-14px opacity-1/2"},xe={class:"hvr-forward read-all"},be=["href"],Ue=["src"];function ye(n,i,a,h,m,e){const _=F("ReadAll");return o(),c("div",{class:L(["project-item-container","image-"+a.imagePosition])},[s("div",le,[s("div",de,[(o(!0),c(g,null,U(a.item.tags,(S,f)=>(o(),c(g,null,[s("span",null,d(S),1),f!==a.item.tags.length-1?(o(),c("span",pe," · ")):P("",!0)],64))),256))]),s("div",ue,d(a.item.title),1),s("div",_e,d(a.item.subtitle),1),s("div",ge,[s("div",he,[s("img",{src:a.item.author.avatarUrl,alt:""},null,8,me),s("span",ve,d(a.item.author.name.en),1),T(),je,s("span",fe,d(a.item.author.name.zh),1)]),s("div",xe,[s("a",{href:a.item.linkUrl},[u(_,{class:"read-all-button"})],8,be)])])]),s("img",{src:a.item.imageUrl,alt:""},null,8,Ue)],2)}const ke=j(ce,[["render",ye],["__scopeId","data-v-fdab8872"]]),Pe="/assets/more-projects-button-1ef2ab4d.png",b=[{value:"全部",label:"全部",active:!0},{value:"体验",label:"体验"},{value:"韧性",label:"韧性"},{value:"教育",label:"教育"},{value:"缓解恐惧",label:"缓解恐惧",sub:!0},{value:"生成意义",label:"生成意义",sub:!0},{value:"安抚疼痛",label:"安抚疼痛",sub:!0},{value:"平稳焦躁",label:"平稳焦躁",sub:!0},{value:"增进理解",label:"增进理解",sub:!0},{value:"消解抵触",label:"消解抵触",sub:!0},{value:"治愈疲惫",label:"治愈疲惫",sub:!0}];const Se={id:"projects",class:"projects-container max-width-1200"},Te={class:"project-tag-list"},Ie={class:"project-tag-list sub"},Le={class:"project-item-list"},$e={key:0,class:"more-projects"},we=["src"],Ae={__name:"Projects",props:{projectList:Array},setup(n){const i=n,a=i.projectList,h=new URLSearchParams(location.search).get("tag"),m=b.find(t=>t.value===h)||b[0],e=z({allProjectItemList:i.projectList,index:4,searchTag:m,searchSubTag:void 0}),_=v(()=>b.filter(t=>!t.sub).map(t=>{var l;return{...t,active:t.value===((l=e.searchTag)==null?void 0:l.value)}})),S=v(()=>b.filter(t=>t.sub).map(t=>{var l;return{...t,active:t.value===((l=e.searchSubTag)==null?void 0:l.value)}})),f=v(()=>a.filter(t=>e.searchTag?e.searchSubTag&&!t.tags.includes(e.searchSubTag.value)?!1:!!(e.searchTag.value==="全部"||t.tags.includes(e.searchTag.value)):!0)),A=v(()=>f.value.slice(0,e.index)),C=v(()=>e.index<f.value.length);E(()=>e.searchTag,t=>{history.replaceState(null,null,"/pages/works/?tag="+t.value)});function R(){e.index=e.index+4}function N(t){e.searchTag=t}function B(t){var l;((l=e.searchSubTag)==null?void 0:l.value)===t.value?e.searchSubTag=void 0:e.searchSubTag=t}return(t,l)=>(o(),c("div",Se,[s("div",Te,[(o(!0),c(g,null,U(p(_),r=>(o(),y(I,{key:r.value,rabbit:"",onClick:x=>N(r),value:r.value,active:r.active},{default:k(()=>[T(d(r.label),1)]),_:2},1032,["onClick","value","active"]))),128))]),s("div",Ie,[(o(!0),c(g,null,U(p(S),r=>(o(),y(I,{key:r.value,onClick:x=>B(r),value:r.value,active:r.active},{default:k(()=>[T(d(r.label),1)]),_:2},1032,["onClick","value","active"]))),128))]),s("div",Le,[(o(!0),c(g,null,U(p(A),(r,x)=>(o(),y(ke,{key:x,item:r,"image-position":x%2===0?"right":"left"},null,8,["item","image-position"]))),128))]),p(C)?(o(),c("div",$e,[s("img",{onClick:R,src:p(Pe),alt:""},null,8,we)])):P("",!0)]))}},Ce=j(Ae,[["__scopeId","data-v-0181975e"]]),Re=[{indexUrl:"https://cdn.cheerdesign.org/posts/post-1/index.json",linkUrl:"/pages/post/?id=1",imageUrl:"https://cdn.cheerdesign.org/projects/1.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-2/index.json",linkUrl:"/pages/post/?id=2",imageUrl:"https://cdn.cheerdesign.org/projects/2.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-3/index.json",linkUrl:"/pages/post/?id=3",imageUrl:"https://cdn.cheerdesign.org/projects/3.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-4/index.json",linkUrl:"/pages/post/?id=4",imageUrl:"https://cdn.cheerdesign.org/projects/4.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-5/index.json",linkUrl:"/pages/post/?id=5",imageUrl:"https://cdn.cheerdesign.org/projects/5.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-6/index.json",linkUrl:"/pages/post/?id=6",imageUrl:"https://cdn.cheerdesign.org/projects/6.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-7/index.json",linkUrl:"/pages/post/?id=7",imageUrl:"https://cdn.cheerdesign.org/projects/7.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-8/index.json",linkUrl:"/pages/post/?id=8",imageUrl:"https://cdn.cheerdesign.org/projects/8.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-9/index.json",linkUrl:"/pages/post/?id=9",imageUrl:"https://cdn.cheerdesign.org/projects/9.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-10/index.json",linkUrl:"/pages/post/?id=10",imageUrl:"https://cdn.cheerdesign.org/projects/10.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-11/index.json",linkUrl:"/pages/post/?id=11",imageUrl:"https://cdn.cheerdesign.org/projects/11.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-12/index.json",linkUrl:"/pages/post/?id=12",imageUrl:"https://cdn.cheerdesign.org/projects/12.png"},{indexUrl:"https://cdn.cheerdesign.org/posts/post-13/index.json",linkUrl:"/pages/post/?id=13",imageUrl:"https://cdn.cheerdesign.org/projects/13.png"}],Ne={projects:Re};const Be={class:"project-list-container"},Ve={__name:"ProjectList",async setup(n){let i,a;const h=Ne.projects,m=([i,a]=G(async()=>Promise.all(h.map(async e=>{const _=await H(e.indexUrl);return{...e,..._}}))),i=await i,a(),i);return Q(),(e,_)=>(o(),c(g,null,[s("div",Be,[u(M,{tab:p(q).WORKS},null,8,["tab"]),P("",!0),u(Ce,{"project-list":p(m)},null,8,["project-list"])]),u(O)],64))}},Fe=j(Ve,[["__scopeId","data-v-76cf9aa9"]]),ze={__name:"App",setup(n){return(i,a)=>(o(),y(D,null,{fallback:k(()=>[u(J)]),default:k(()=>[u(Fe)]),_:1}))}};K(ze).mount("#app");export{Ee as __vite_legacy_guard};
