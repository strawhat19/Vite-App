import{r as a,j as s,a as e,b as d,v as h,I as m}from"./client.7b822b04.js";const N=()=>{let[n,r]=a.exports.useState(!1),[t,i]=a.exports.useState(0),[c,v]=a.exports.useState(!1),[o,u]=a.exports.useState("production"),l=()=>window.scrollY>0?r(!0):r(!1);return a.exports.useEffect(()=>{(t==0||c)&&i(t++),window.addEventListener("scroll",p=>(l(),()=>window.removeEventListener("scroll",g=>{l()})))},[t,i]),s(a.exports.Suspense,{children:[o!="development"&&e("header",{className:n?"scrolledHeader":"topHeader",children:e("div",{className:"inner",children:s("div",{className:"navigation",children:[e("a",{title:"Home",className:"homeLink",href:"../",children:e(d.exports.LazyLoadImage,{effect:"blur",src:h,id:"logo",className:"logo",alt:"logo",width:"100px",height:"auto"})}),s("ul",{children:[e("li",{className:"navigation-tab",children:e("a",{className:"current active hoverLink",href:"../",children:"Home"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../about",children:"About"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../projects",children:"Projects"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../contact",children:"Contact"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../piratechs",children:"Piratechs"})})]})]})})}),o=="production"&&e(m,{}),e("h1",{children:"About"})]})};export{N as A};
