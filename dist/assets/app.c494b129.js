import{r as t,j as e,a as p,b,v as A,B as C,p as j,I as k,c as L}from"./client.f716acbb.js";import{P as V}from"./piratechs.4c42452b.js";import{P as E}from"./projects.ba80edde.js";import{C as H}from"./contact.68b10252.js";import{A as B}from"./about.ab1679e2.js";const D=o=>{let[c,d]=t.exports.useState(!1),[h,l]=t.exports.useState(0),[f,m]=t.exports.useState(!1),[s,n]=t.exports.useState("production"),[i,g]=t.exports.useState(window.location.hostname.includes("0")),v=()=>window.scrollY>0?d(!0):d(!1),[x,S]=t.exports.useState(window.location.pathname.replace("/vite-app/","")),r=(a,u)=>{u.preventDefault(),window.history.pushState({},"",a),h!=0&&m(!0),l(P=>P+1),S(window.location.pathname.replace("/vite-app/",""))};return t.exports.useEffect(()=>{(h==0||f)&&(l(h++),(i||s=="development")&&(document.title="Vite App Dev"),i&&s=="production"&&(document.title="Vite App Build")),window.addEventListener("scroll",a=>(v(),()=>window.removeEventListener("scroll",u=>{v()})))},[]),e(t.exports.Suspense,{children:e("header",{className:`header ${s} ${c?"scrolledHeader":"topHeader"}`,children:e("div",{className:"inner",children:p("div",{className:"navigation",children:[p("a",{title:"Home",className:"homeLink",href:"./",children:[e(b.exports.LazyLoadImage,{effect:"blur",src:A,id:"logo",className:"logo",alt:"logo",width:"100px",height:"auto"}),e("h2",{children:"Vite App"})]}),p("ul",{children:[e("li",{className:"navigation-tab",children:e("a",{className:"current active hoverLink",href:"./",children:"Home"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./about",onClick:a=>(i||s=="development")&&r("about",a),children:"About"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./projects",onClick:a=>(i||s=="development")&&r("projects",a),children:"Projects"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./contact",onClick:a=>(i||s=="development")&&r("contact",a),children:"Contact"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./piratechs",onClick:a=>(i||s=="development")&&r("piratechs",a),children:"Piratechs"})})]})]})})})})},T=()=>{let[o,c]=t.exports.useState(0),[d,h]=t.exports.useState(!1),[l,f]=t.exports.useState("production"),[m,s]=t.exports.useState(window.location.hostname.includes("0")),[n,i]=t.exports.useState(window.location.pathname.replace("/vite-app/","")),[g,v]=t.exports.useState(["about","/vite-app/about","/Vite-App/about"]),[x,S]=t.exports.useState(["","home","/Vite-App/","/Vite-App/home","/vite-app/"]),[r,a]=t.exports.useState(["piratechs","piratechs/","/Vite-App/piratechs"]),[u,P]=t.exports.useState(["projects","portfolio","resume","experience","/Vite-App/projects"]),[w,I]=t.exports.useState(["contact","contact-us","contactus","contactme","contact-me","/Vite-App/contact"]);return t.exports.useEffect(()=>{(o==0||d)&&(c(o++),(m||l=="development")&&(document.title="Vite App Dev"),m&&l=="production"&&(document.title="Vite App Build"))},[o,c]),p(t.exports.Suspense,{children:[e(D,{}),e(C,{bannerBG:j}),p("main",{className:"App content",id:"App",children:[e(k,{}),x.includes(n)&&e("div",{className:"home",children:e("h1",{children:"Home"})}),g.includes(n)&&e(B,{}),u.includes(n)&&e(E,{}),w.includes(n)&&e(H,{}),r.includes(n)&&e(V,{}),e("div",{className:"spacer",children:e("button",{onClick:$=>c(N=>N+1),children:o!=0?`State changed ${o} times`:`State reset to ${o}`})})]})]})};L(document.getElementById("root")).render(e(t.exports.StrictMode,{children:e(T,{})}));
