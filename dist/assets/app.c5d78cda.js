import{r as t,j as p,a as e,b as S,v as A,B as j,I as k,c as C}from"./client.8c10fd4f.js";import{P as L}from"./piratechs.560744a2.js";import{P as V}from"./projects.189ad0e9.js";import{C as H}from"./contact.bca8afe3.js";import{A as E}from"./about.de7a32aa.js";const B=()=>{let[m,d]=t.exports.useState(!1),[s,r]=t.exports.useState(0),[u,v]=t.exports.useState(!1),[o,I]=t.exports.useState("production"),[i,y]=t.exports.useState(window.location.hostname.includes("0")),h=()=>window.scrollY>0?d(!0):d(!1),[n,f]=t.exports.useState(window.location.pathname.replace("/vite-app/","")),[g,D]=t.exports.useState(["about","/vite-app/about","/Vite-App/about"]),[P,T]=t.exports.useState(["","home","/Vite-App/","/Vite-App/home","/vite-app/"]),[x,M]=t.exports.useState(["piratechs","piratechs/","/Vite-App/piratechs"]),[N,$]=t.exports.useState(["projects","portfolio","resume","experience","/Vite-App/projects"]),[b,z]=t.exports.useState(["contact","contact-us","contactus","contactme","contact-me","/Vite-App/contact"]),c=(a,l)=>{l.preventDefault(),window.history.pushState({},"",a),s!=0&&v(!0),r(w=>w+1),f(window.location.pathname.replace("/vite-app/",""))};return t.exports.useEffect(()=>{(s==0||u)&&(r(s++),(i||o=="development")&&(document.title="Vite App Dev"),i&&o=="production"&&(document.title="Vite App Build")),window.addEventListener("scroll",a=>(h(),()=>window.removeEventListener("scroll",l=>{h()})))},[s,r]),p(t.exports.Suspense,{children:[e("header",{className:m?"scrolledHeader":"topHeader",children:e("div",{className:"inner",children:p("div",{className:"navigation",children:[e("a",{title:"Home",className:"homeLink",href:"./",children:e(S.exports.LazyLoadImage,{effect:"blur",src:A,id:"logo",className:"logo",alt:"logo",width:"100px",height:"auto"})}),p("ul",{children:[e("li",{className:"navigation-tab",children:e("a",{className:"current active hoverLink",href:"./",children:"Home"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./about",onClick:a=>(i||o=="development")&&c("about",a),children:"About"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./projects",onClick:a=>(i||o=="development")&&c("projects",a),children:"Projects"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./contact",onClick:a=>(i||o=="development")&&c("contact",a),children:"Contact"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./piratechs",onClick:a=>(i||o=="development")&&c("piratechs",a),children:"Piratechs"})})]})]})})}),e(j,{}),p("main",{className:"App content",id:"App",children:[e(k,{}),P.includes(n)&&e("div",{className:"home",children:e("h1",{children:"Home"})}),g.includes(n)&&e(E,{}),N.includes(n)&&e(V,{}),b.includes(n)&&e(H,{}),x.includes(n)&&e(L,{}),e("div",{className:"spacer",children:e("button",{onClick:a=>r(l=>l+1),children:s!=0?`State changed ${s} times`:`State reset to ${s}`})})]})]})};C(document.getElementById("root")).render(e(t.exports.StrictMode,{children:e(B,{})}));
