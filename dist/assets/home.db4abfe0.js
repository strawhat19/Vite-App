import{j as e,r as t,a as r,b as n,v as p,P as S,c as j}from"./client.6481b5a1.js";const k=()=>e("div",{className:"projects",children:e("h1",{children:"Projects"})}),A=()=>e("div",{className:"contact",children:e("h1",{children:"Contact"})}),C=()=>e("div",{className:"about",children:e("h1",{children:"About"})}),H=""+new URL("react.35ef61ed.svg",import.meta.url).href,V=()=>{let[m,h]=t.exports.useState(!1);t.exports.useState({});let[s,c]=t.exports.useState(0),[u,v]=t.exports.useState(!1),[g,y]=t.exports.useState("production"),d=()=>window.scrollY>0?h(!0):h(!1),[o,f]=t.exports.useState(window.location.pathname.replace("/vite-app/","")),[b,E]=t.exports.useState(["about","/vite-app/about","/Vite-App/about"]),[N,I]=t.exports.useState(["","home","/Vite-App/","/Vite-App/home","/vite-app/"]),[x,z]=t.exports.useState(["piratechs","piratechs/","/Vite-App/piratechs"]),[P,R]=t.exports.useState(["projects","portfolio","resume","experience","/Vite-App/projects"]),[w,T]=t.exports.useState(["contact","contact-us","contactus","contactme","contact-me","/Vite-App/contact"]),i=(a,l)=>{l.preventDefault(),window.history.pushState({},"",a),s!=0&&v(!0),c(L=>L+1),f(window.location.pathname.replace("/vite-app/",""))};return t.exports.useEffect(()=>{(s==0||u)&&c(s++),window.addEventListener("scroll",a=>(d(),()=>window.removeEventListener("scroll",l=>{d()})))},[s,c]),r(t.exports.Suspense,{children:[e("header",{className:m?"scrolledHeader":"topHeader",children:e("div",{className:"inner",children:r("div",{className:"navigation",children:[e("a",{title:"Home",className:"homeLink",href:"./",children:e(n.exports.LazyLoadImage,{effect:"blur",src:p,id:"logo",className:"logo",alt:"logo",width:"100px",height:"auto"})}),r("ul",{children:[e("li",{className:"navigation-tab",children:e("a",{className:"current active hoverLink",href:"./",children:"Home"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./about",onClick:a=>i("about",a),children:"About"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./projects",onClick:a=>i("projects",a),children:"Projects"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./contact",onClick:a=>i("contact",a),children:"Contact"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"./piratechs",onClick:a=>g=="development"&&i("piratechs",a),children:"Piratechs"})})]})]})})}),r("div",{className:"App",id:"App",children:[o!="piratechs"&&r("div",{children:[e("a",{href:"https://vitejs.dev",target:"_blank",children:e(n.exports.LazyLoadImage,{effect:"blur",src:p,id:"logo",className:"logo",alt:"Vite logo",width:"auto",height:"9em"})}),e("a",{href:"https://reactjs.org",target:"_blank",children:e(n.exports.LazyLoadImage,{effect:"blur",src:H,id:"logo",className:"logo react",alt:"React logo",width:"auto",height:"9em"})})]}),N.includes(o)&&e("div",{className:"home",children:e("h1",{children:"Home"})}),b.includes(o)&&e(C,{}),P.includes(o)&&e(k,{}),w.includes(o)&&e(A,{}),x.includes(o)&&e(S,{}),o!="piratechs"&&e("div",{className:"spacer",children:e("button",{onClick:a=>c(l=>l+1),children:s!=0?`State changed ${s} times`:`State reset to ${s}`})})]})]})};j(document.getElementById("root")).render(e(t.exports.StrictMode,{children:e(V,{})}));