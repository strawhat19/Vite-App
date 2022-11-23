import{r as l,a as r,j as e,b as v,v as Q,B as V,p as W,I as X}from"./client.f716acbb.js";const se=()=>{let[b,u]=l.exports.useState(!1),[f,w]=l.exports.useState(0),[j,Z]=l.exports.useState(!1),[i,ee]=l.exports.useState("production"),S=s=>L(s),p=()=>window.scrollY>0?u(!0):u(!1),[c,L]=l.exports.useState(JSON.parse(localStorage.getItem("projects"))||[]);function g(s){let t=s.getHours(),a=s.getMinutes(),d=t>=12?"PM":"AM";t=t%12,t=t||12,a=a<10?"0"+a:a;let h=t+":"+a+" "+d;return s.getMonth()+1+"/"+s.getDate()+"/"+s.getFullYear()+" "+h}const x=async()=>{let s="strawhat19";const t=`https://api.github.com/users/${s}/repos`,a=`https://api.github.com/users/${s}`,d=JSON.parse(localStorage.getItem("repositories"))||[],h=await fetch(t),N=await fetch(a);if(!N.ok||!h.ok)console.log("Fetch Error"),console.clear();else{const _=await N.json(),k=await h.json(),{name:P,html_url:D,bio:T,blog:y,avatar_url:H,login:I,public_repos:C,repos_url:M,starred_url:B,followers:R,following:U}=_;k.sort((n,o)=>new Date(o.created_at).getTime()-new Date(n.created_at).getTime()).map(n=>{const{name:o,html_url:A,created_at:E,owner:J,topics:O,license:$,updated_at:F,deployments_url:q,language:z,homepage:G,description:Y}=n,K={name:o,owner:J,url:A,topics:O,date:E,license:$,updated:F,homepage:G,language:z,deployment:q,description:Y};d.push(K)});const m={name:P,url:D,bio:T,projects:d.sort((n,o)=>new Date(o.date).getTime()-new Date(n.date).getTime()),website:y,avatar:H,login:I,repoLink:M,repoNum:C,starred:B,followers:R,following:U,lastUpdated:g(new Date)};S(m.projects),console.log("Updated Projects",m.projects),localStorage.setItem("user",JSON.stringify(m)),localStorage.setItem("projects",JSON.stringify(m.projects))}};return l.exports.useEffect(()=>{(f==0||j)&&(w(f++),c.length==0?x():console.log("Projects",c)),window.addEventListener("scroll",s=>(p(),()=>window.removeEventListener("scroll",t=>{p()})))},[]),r(l.exports.Suspense,{children:[i!="development"&&e("header",{className:b?"scrolledHeader":"topHeader",children:e("div",{className:"inner",children:r("div",{className:"navigation",children:[e("a",{title:"Home",className:"homeLink",href:"../",children:e(v.exports.LazyLoadImage,{effect:"blur",src:Q,id:"logo",className:"logo",alt:"logo",width:"100px",height:"auto"})}),r("ul",{children:[e("li",{className:"navigation-tab",children:e("a",{className:"current active hoverLink",href:"../",children:"Home"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../about",children:"About"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../projects",children:"Projects"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../contact",children:"Contact"})}),e("li",{className:"navigation-tab",children:e("a",{className:"hoverLink",href:"../piratechs",children:"Piratechs"})})]})]})})}),i=="production"&&e(V,{bannerBG:W}),r("main",{className:`App ${i=="production"?"content":""}`,id:"App",children:[i=="production"&&e(X,{}),e("h1",{children:"Projects"}),e("div",{className:"projects",children:c.length>0&&c.map((s,t)=>{if(s.topics.length>0)return r("div",{className:"project",children:[r("div",{className:"projectHeader",children:[r("div",{className:"headerTop",children:[r("a",{href:s.url,target:"_blank",className:"projectName hoverLink",children:[e("i",{className:"fab fa-github"})," ",s.name]}),r("span",{className:"index",children:["#",t+1]})]}),r("div",{className:"projectBy",children:[r("a",{href:`https://github.com/${s.owner.login}`,className:"hoverLink",children:[e(v.exports.LazyLoadImage,{effect:"blur",src:s.owner.avatar_url,className:"avatar",alt:"avatar",width:"25px",height:"auto"})," ",s.owner.login]}),e("span",{className:"projectDate",children:g(new Date(s.date))})]})]}),e("div",{className:"projectContent",children:s.description}),e("div",{className:"projectFooter",children:e("div",{className:"topics",children:s.topics.length>0&&s.topics.map(a=>{if(a=="css"||a=="CSS")return e("i",{className:"fab fa-css3-alt"},a);if(a=="html"||a=="HTML")return e("i",{className:"fab fa-html5"},a);if(a=="sass"||a=="SCSS")return e("i",{className:"fab fa-sass"},a);if(a=="javascript")return e("i",{className:"fab fa-js-square"},a);if(a=="angular")return e("i",{className:"fab fa-angular"},a);if(a=="discord")return e("i",{className:"fab fa-discord"},a);if(a=="node")return e("i",{className:"fab fa-node-js"},a);if(a=="sql")return e("i",{className:"fab fa-database"},a);if(a=="react")return e("i",{className:"fab fa-react"},a);if(a=="php")return e("i",{className:"fab fa-php"},a)})})})]},s.name)})})]})]})};export{se as P};
