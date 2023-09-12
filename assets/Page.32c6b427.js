import{W as A,X as z,Y as q,f as D,u as C,G as I,Z as Q,r as T,o as s,c as r,h as t,q as U,s as u,a as h,F as w,D as R,t as _,b as k,d as G,x as F,_ as N,j as x,S as W,g as O,w as j,E as B,i as P,Q as X,B as Y,L as Z,M as J,$ as K,k as ee,y as S}from"./app.9117781d.js";import{f as te}from"./resolveTime.bbe121e0.js";const ae=o=>!A(o)||/github\.com/.test(o)?"GitHub":/bitbucket\.org/.test(o)?"Bitbucket":/gitlab\.com/.test(o)?"GitLab":/gitee\.com/.test(o)?"Gitee":null,se={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ne=({docsRepo:o,editLinkPattern:l})=>{if(l)return l;const e=ae(o);return e!==null?se[e]:null},re=({docsRepo:o,docsBranch:l,docsDir:e,filePathRelative:p,editLinkPattern:v})=>{if(!p)return null;const c=ne({docsRepo:o,editLinkPattern:v});return c?c.replace(/:repo/,A(o)?o:`https://github.com/${o}`).replace(/:branch/,l).replace(/:path/,z(`${q(e)}/${p}`)):null},oe={class:"article-header-content"},ie={key:0,class:"article-tags"},le={class:"article-title"},ce={key:1,class:"article-subtitle"},ue={class:"article-icons"},de={key:0,class:"article-icon"},me={key:1,class:"article-icon"},_e={key:2,class:"article-icon"},he={key:1,class:"article-image-credit"},pe=["href"],ge={key:1},ve=D({__name:"ArticleHeader",props:{currentTag:{type:String,default:""}},setup(o){const l=C(),e=I(),p=x(),v=Q(),c=a=>v.value.map[a].path,b=()=>{const a={};return e.value.layout==="Post"&&e.value.useHeaderImage&&e.value.headerImage&&(a.backgroundImage=`url(${W(e.value.headerImage)})`),a},d=l.value.personalInfo;return(a,g)=>{const m=T("RouterLink"),f=T("VIcon");return s(),r("div",{class:F(["article-header",{"use-image":t(e).useHeaderImage}]),style:U(b())},[t(e).useHeaderImage&&t(e).headerMask?(s(),r("div",{key:0,class:"article-header-mask",style:U({background:t(e).headerMask})},null,4)):u("",!0),h("div",oe,[t(e).tags?(s(),r("div",ie,[(s(!0),r(w,null,R(t(e).tags,(n,i)=>(s(),O(m,{key:i,class:F(["article-tag",{active:o.currentTag==n}]),to:c(n)},{default:j(()=>[G(_(n),1)]),_:2},1032,["class","to"]))),128))])):u("",!0),h("h1",le,_(t(e).title),1),t(e).subtitle?(s(),r("p",ce,_(t(e).subtitle),1)):u("",!0),h("div",ue,[t(e).author||t(d).name?(s(),r("div",de,[k(f,{name:"fa-regular-user"}),h("span",null,_(t(e).author||t(d).name),1)])):u("",!0),t(e).date?(s(),r("div",me,[k(f,{name:"fa-regular-calendar"}),h("span",null,_(t(te)(t(e).date)),1)])):u("",!0),t(p).readingTime?(s(),r("div",_e,[k(f,{name:"ri-timer-line"}),h("span",null,_(t(p).readingTime.minutes)+" min",1)])):u("",!0)])]),t(e).useHeaderImage&&t(e).headerImageCredit?(s(),r("div",he,[G(_(t(l).headerImageCredit)+" ",1),t(e).headerImageCreditLink?(s(),r("a",{key:0,href:t(e).headerImageCreditLink,target:"_blank",rel:"noopener noreferrer"},_(t(e).headerImageCredit),9,pe)):(s(),r("span",ge,_(t(e).headerImageCredit),1))])):u("",!0)],6)}}});var Fe=N(ve,[["__file","ArticleHeader.vue"]]);const fe={class:"page-meta"},ke={key:0,class:"meta-item edit-link"},be={key:1,class:"meta-item last-updated"},Le={class:"meta-item-label"},ye={class:"meta-item-info"},$e={key:2,class:"meta-item contributors"},Ce={class:"meta-item-label"},Ie={class:"meta-item-info"},Pe=["title"],Te=D({__name:"PageMeta",setup(o){const l=()=>{const a=C(),g=x(),m=I();return P(()=>{var M,E,V;if(!((E=(M=m.value.editLink)!=null?M:a.value.editLink)!=null?E:!0))return null;const{repo:n,docsRepo:i=n,docsBranch:L="main",docsDir:y="",editLinkText:$}=a.value;if(!i)return null;const H=re({docsRepo:i,docsBranch:L,docsDir:y,filePathRelative:g.value.filePathRelative,editLinkPattern:(V=m.value.editLinkPattern)!=null?V:a.value.editLinkPattern});return H?{text:$!=null?$:"Edit this page",link:H}:null})},e=()=>{const a=C(),g=x(),m=I();return P(()=>{var i,L,y,$;return!((L=(i=m.value.lastUpdated)!=null?i:a.value.lastUpdated)!=null?L:!0)||!((y=g.value.git)!=null&&y.updatedTime)?null:new Date(($=g.value.git)==null?void 0:$.updatedTime).toLocaleString()})},p=()=>{const a=C(),g=x(),m=I();return P(()=>{var n,i,L,y;return((i=(n=m.value.contributors)!=null?n:a.value.contributors)!=null?i:!0)&&(y=(L=g.value.git)==null?void 0:L.contributors)!=null?y:null})},v=C(),c=l(),b=e(),d=p();return(a,g)=>{const m=T("VIcon"),f=T("ClientOnly");return s(),r("footer",fe,[t(c)?(s(),r("div",ke,[k(m,{name:"fa-pencil-alt"}),k(B,{class:"meta-item-label",item:t(c)},null,8,["item"])])):u("",!0),t(b)?(s(),r("div",be,[h("span",Le,_(t(v).lastUpdatedText)+": ",1),k(f,null,{default:j(()=>[h("span",ye,_(t(b)),1)]),_:1})])):u("",!0),t(d)&&t(d).length?(s(),r("div",$e,[h("span",Ce,_(t(v).contributorsText)+": ",1),h("span",Ie,[(s(!0),r(w,null,R(t(d),(n,i)=>(s(),r(w,{key:i},[h("span",{class:"contributor",title:`email: ${n.email}`},_(n.name),9,Pe),i!==t(d).length-1?(s(),r(w,{key:0},[G(", ")],64)):u("",!0)],64))),128))])])):u("",!0)])}}});var Se=N(Te,[["__file","PageMeta.vue"]]);const we={key:0,class:"page-nav"},xe={class:"inner"},De={key:0,class:"prev"},Ne={key:1,class:"next"},Ge=D({__name:"PageNav",setup(o){const l=a=>a===!1?null:Z(a)?J(a):K(a)?a:!1,e=(a,g,m)=>{const f=a.findIndex(n=>n.link===g);if(f!==-1){const n=a[f+m];return n!=null&&n.link?n:null}for(const n of a)if(n.children){const i=e(n.children,g,m);if(i)return i}return null},p=I(),v=X(),c=Y(),b=P(()=>{const a=l(p.value.prev);return a!==!1?a:e(v.value,c.path,-1)}),d=P(()=>{const a=l(p.value.next);return a!==!1?a:e(v.value,c.path,1)});return(a,g)=>b.value||d.value?(s(),r("nav",we,[h("p",xe,[b.value?(s(),r("span",De,[k(B,{item:b.value},null,8,["item"])])):u("",!0),d.value?(s(),r("span",Ne,[k(B,{item:d.value},null,8,["item"])])):u("",!0)])])):u("",!0)}});var Be=N(Ge,[["__file","PageNav.vue"]]);const He={class:"page"},Me={class:"theme-gungnir-content"},Ee=D({__name:"Page",setup(o){const l=C(),e=I(),{isDarkMode:p}=ee(),v=P(()=>p.value?l.value.giscusDarkTheme:l.value.giscusLightTheme);return(c,b)=>{const d=T("Content"),a=T("GungnirGiscus");return s(),r("main",He,[S(c.$slots,"top"),h("div",Me,[S(c.$slots,"content-top"),k(d),S(c.$slots,"content-bottom")]),k(Se),k(Be),S(c.$slots,"bottom"),t(e).giscus!==!1?(s(),O(a,{key:0,theme:v.value},null,8,["theme"])):u("",!0)])}}});var Ae=N(Ee,[["__file","Page.vue"]]);export{Fe as A,Ae as P};
