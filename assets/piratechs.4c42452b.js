import{r as a,a as s,j as e,b as d,v as h,B as m,p,I as v}from"./client.f716acbb.js";const x=()=>{let[l,i]=a.exports.useState(!1),[r,n]=a.exports.useState(0),[c,u]=a.exports.useState(!1),[t,g]=a.exports.useState("production"),o=()=>window.scrollY>0?i(!0):i(!1);return a.exports.useEffect(()=>{(r==0||c)&&n(r++),window.addEventListener("scroll",N=>(o(),()=>window.removeEventListener("scroll",f=>{o()})))},[r,n]),s(a.exports.Suspense,{children:[t!="development"&&e("header",{className:l?"scrolledHeader":"topHeader",children:e("div",{className:"inner",children:s("div",{className:"navigation",children:[e("a",{title:"Home",className:"homeLink",href:"../",children:e(d.exports.LazyLoadImage,{effect:"blur",src:h,id:"logo",className:"logo",alt:"logo",width:"100px",height:"auto"})}),s("ul",{children:[e("li",{className:"navigation-tab",children:e("a",{className:"current active hoverLink",href:"../",children:"Home"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../about",children:"About"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../projects",children:"Projects"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../contact",children:"Contact"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../piratechs",children:"Piratechs"})})]})]})})}),t=="production"&&e(m,{bannerBG:p}),s("main",{className:`App ${t=="production"?"content":""}`,id:"App",children:[t=="production"&&e(v,{}),e("h1",{children:"Piratechs"})]})]})};export{x as P};
