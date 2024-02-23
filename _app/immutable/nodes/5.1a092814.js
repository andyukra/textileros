import{p as le,c as re}from"../chunks/store.3b6ef4f9.js";import{a as oe}from"../chunks/axios.4a70c6fc.js";import{e as ne}from"../chunks/index.5e2a9a64.js";import{S as X,i as Z,s as x,k as _,a as y,q as I,l as m,m as b,h as c,c as E,r as P,n as d,p as ee,b as k,C as h,L as D,D as T,M as te,K as Q,N as ie,e as z,y as B,O as fe,P as ce,z as O,A as L,g as F,d as C,B as Y,G as ue,Q as pe,H as de,I as he,J as _e,u as me}from"../chunks/index.670203d3.js";import{d as q,D as be,A as $e,a as ge}from"../chunks/Drawer.a03af140.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.325b0402.js";import{A as ve}from"../chunks/AppShell.637c48a2.js";import{p as ae}from"../chunks/stores.00d4f858.js";import{g as R}from"../chunks/navigation.00c1c866.js";let se;le.subscribe(o=>se=o);async function ke({params:o}){const e=await oe.get(`${se}gets.php?a=getpage&b=${o.brand}`);if(e.data.error)throw ne(404,"Not Found");if(e.data.brand&&e.data.config)return{brand:e.data.brand,config:e.data.config,products:e.data.products}}const We=Object.freeze(Object.defineProperty({__proto__:null,load:ke},Symbol.toStringTag,{value:"Module"}));function we(o){let e,a,t,s,r,i,n,l,u,p,f,$,w,g,v,M,j,H,V;return{c(){e=_("section"),a=_("i"),t=y(),s=_("h1"),r=I("Menú"),i=y(),n=_("a"),l=I("Tienda"),p=y(),f=_("a"),$=I("Carrito"),g=y(),v=_("a"),M=I("Sobre nosotros"),this.h()},l(N){e=m(N,"SECTION",{class:!0});var A=b(e);a=m(A,"I",{class:!0}),b(a).forEach(c),t=E(A),s=m(A,"H1",{class:!0,style:!0});var G=b(s);r=P(G,"Menú"),G.forEach(c),i=E(A),n=m(A,"A",{class:!0,href:!0});var J=b(n);l=P(J,"Tienda"),J.forEach(c),p=E(A),f=m(A,"A",{class:!0,href:!0});var K=b(f);$=P(K,"Carrito"),K.forEach(c),g=E(A),v=m(A,"A",{class:!0,href:!0});var S=b(v);M=P(S,"Sobre nosotros"),S.forEach(c),A.forEach(c),this.h()},h(){d(a,"class","fas fa-times text-black absolute top-5 right-5 text-2xl cursor-pointer hover:animate-pulse"),d(s,"class","h1 text-center"),ee(s,"font-family","inherit"),d(n,"class","focus:outline-none svelte-4kgva1"),d(n,"href",u=`/${o[0].params.brand}`),d(f,"class","focus:outline-none svelte-4kgva1"),d(f,"href",w=`/${o[0].params.brand}/cart`),d(v,"class","focus:outline-none svelte-4kgva1"),d(v,"href",j=`/${o[0].params.brand}/about`),d(e,"class","p-4 flex flex-col justify-center items-center h-full w-full gap-5 relative")},m(N,A){k(N,e,A),h(e,a),h(e,t),h(e,s),h(s,r),h(e,i),h(e,n),h(n,l),h(e,p),h(e,f),h(f,$),h(e,g),h(e,v),h(v,M),H||(V=[D(a,"click",o[1]),D(n,"click",o[2]),D(f,"click",o[3]),D(v,"click",o[4])],H=!0)},p(N,[A]){A&1&&u!==(u=`/${N[0].params.brand}`)&&d(n,"href",u),A&1&&w!==(w=`/${N[0].params.brand}/cart`)&&d(f,"href",w),A&1&&j!==(j=`/${N[0].params.brand}/about`)&&d(v,"href",j)},i:T,o:T,d(N){N&&c(e),H=!1,te(V)}}}function ye(o,e,a){let t;return Q(o,ae,l=>a(0,t=l)),[t,()=>q.close(),()=>q.close(),()=>q.close(),()=>q.close()]}class Ee extends X{constructor(e){super(),Z(this,e,ye,we,x,{})}}function U(o){let e,a,t;return{c(){e=_("a"),a=_("i"),this.h()},l(s){e=m(s,"A",{class:!0,href:!0});var r=b(e);a=m(r,"I",{class:!0}),b(a).forEach(c),r.forEach(c),this.h()},h(){d(a,"class","fa-brands fa-whatsapp text-white text-3xl"),d(e,"class","fa-shake py-2 px-3 shadow-xl bg-green-500 rounded-full flex justify-center items-center fixed bottom-20 right-7 z-20 cursor-pointer"),d(e,"href",t=`https://api.whatsapp.com/send?phone=+549${o[8]}&text=${o[3]}`)},m(s,r){k(s,e,r),h(e,a)},p(s,r){r&8&&t!==(t=`https://api.whatsapp.com/send?phone=+549${s[8]}&text=${s[3]}`)&&d(e,"href",t)},d(s){s&&c(e)}}}function Ae(o){let e,a;return e=new Ee({}),{c(){B(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){L(e,t,s),a=!0},i(t){a||(F(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){Y(e,t)}}}function Se(o){let e,a;const t=o[15].default,s=ue(t,o,o[21],null);return{c(){e=_("div"),s&&s.c(),this.h()},l(r){e=m(r,"DIV",{class:!0});var i=b(e);s&&s.l(i),i.forEach(c),this.h()},h(){d(e,"class",pe("h-full md:w-10/12 m-auto w-full")+" svelte-f2iktx")},m(r,i){k(r,e,i),s&&s.m(e,null),a=!0},p(r,i){s&&s.p&&(!a||i&2097152)&&de(s,t,r,r[21],a?_e(t,r[21],i,null):he(r[21]),null)},i(r){a||(F(s,r),a=!0)},o(r){C(s,r),a=!1},d(r){r&&c(e),s&&s.d(r)}}}function Ie(o){let e,a;return e=new ge({props:{src:o[6],width:"w-8",cursor:"cursor-pointer"}}),e.$on("click",o[19]),{c(){B(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){L(e,t,s),a=!0},p:T,i(t){a||(F(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){Y(e,t)}}}function Pe(o){let e,a,t,s,r,i,n=o[6]&&Ie(o);return{c(){n&&n.c(),e=y(),a=_("h4"),t=I(o[7]),this.h()},l(l){n&&n.l(l),e=E(l),a=m(l,"H4",{class:!0,style:!0});var u=b(a);t=P(u,o[7]),u.forEach(c),this.h()},h(){d(a,"class","ml-4 h4 cursor-pointer"),d(a,"style",o[5])},m(l,u){n&&n.m(l,u),k(l,e,u),k(l,a,u),h(a,t),s=!0,r||(i=D(a,"click",o[20]),r=!0)},p(l,u){l[6]&&n.p(l,u)},i(l){s||(F(n),s=!0)},o(l){C(n),s=!1},d(l){n&&n.d(l),l&&c(e),l&&c(a),r=!1,i()}}}function Ne(o){let e,a=o[0].length>0&&W(o);return{c(){a&&a.c(),e=z()},l(t){a&&a.l(t),e=z()},m(t,s){a&&a.m(t,s),k(t,e,s)},p(t,s){t[0].length>0?a?a.p(t,s):(a=W(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},d(t){a&&a.d(t),t&&c(e)}}}function W(o){let e,a=o[0].length+"",t;return{c(){e=_("span"),t=I(a),this.h()},l(s){e=m(s,"SPAN",{class:!0});var r=b(e);t=P(r,a),r.forEach(c),this.h()},h(){d(e,"class","badge-icon variant-filled-warning absolute -top-2.5 -right-2.5 z-10")},m(s,r){k(s,e,r),h(e,t)},p(s,r){r&1&&a!==(a=s[0].length+"")&&me(t,a)},d(s){s&&c(e)}}}function De(o){let e,a,t,s,r,i,n,l,u,p,f,$,w=Ne(o);return{c(){e=_("div"),w&&w.c(),a=y(),t=_("i"),r=y(),i=_("i"),l=y(),u=_("i"),this.h()},l(g){e=m(g,"DIV",{class:!0});var v=b(e);w&&w.l(v),a=E(v),t=m(v,"I",{class:!0,style:!0}),b(t).forEach(c),v.forEach(c),r=E(g),i=m(g,"I",{class:!0,style:!0}),b(i).forEach(c),l=E(g),u=m(g,"I",{class:!0,style:!0}),b(u).forEach(c),this.h()},h(){d(t,"class","fa-solid fa-cart-shopping cursor-pointer hover:animate-pulse text-xl"),d(t,"style",s=`color:${o[2]}`),d(e,"class","relative inline-block"),d(i,"class","fa-solid fa-circle-info text-2xl cursor-pointer hover:animate-pulse"),d(i,"style",n=`color:${o[2]}`),d(u,"class","fa-solid fa-bars text-xl cursor-pointer hover:animate-pulse"),d(u,"style",p=`color:${o[2]}`)},m(g,v){k(g,e,v),w&&w.m(e,null),h(e,a),h(e,t),k(g,r,v),k(g,i,v),k(g,l,v),k(g,u,v),f||($=[D(t,"click",o[16]),D(i,"click",o[17]),D(u,"click",o[18])],f=!0)},p(g,v){w.p(g,v),v&4&&s!==(s=`color:${g[2]}`)&&d(t,"style",s),v&4&&n!==(n=`color:${g[2]}`)&&d(i,"style",n),v&4&&p!==(p=`color:${g[2]}`)&&d(u,"style",p)},d(g){g&&c(e),w&&w.d(),g&&c(r),g&&c(i),g&&c(l),g&&c(u),f=!1,te($)}}}function He(o){let e,a;return e=new $e({props:{background:"a",shadow:"shadow-md",$$slots:{trail:[De],lead:[Pe]},$$scope:{ctx:o}}}),{c(){B(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){L(e,t,s),a=!0},p(t,s){const r={};s&2097159&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(F(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){Y(e,t)}}}function Te(o){let e,a,t,s,r,i;return{c(){e=_("div"),a=_("p"),t=I("Para más información o cualquier consulta, nuestro whatsapp es "),s=_("i"),r=y(),i=I(o[8]),this.h()},l(n){e=m(n,"DIV",{class:!0});var l=b(e);a=m(l,"P",{class:!0});var u=b(a);t=P(u,"Para más información o cualquier consulta, nuestro whatsapp es "),s=m(u,"I",{class:!0}),b(s).forEach(c),r=E(u),i=P(u,o[8]),u.forEach(c),l.forEach(c),this.h()},h(){d(s,"class","fa-brands fa-whatsapp text-green-300"),d(a,"class","mark svelte-f2iktx"),d(e,"class","p-1 bg-[#000b] text-white")},m(n,l){k(n,e,l),h(e,a),h(a,t),h(a,s),h(a,r),h(a,i)},p:T,d(n){n&&c(e)}}}function Fe(o){let e,a=o[8]&&Te(o);return{c(){a&&a.c(),e=z()},l(t){a&&a.l(t),e=z()},m(t,s){a&&a.m(t,s),k(t,e,s)},p(t,s){t[8]&&a.p(t,s)},d(t){a&&a.d(t),t&&c(e)}}}function Ce(o){let e,a,t,s,r,i,n=o[9]&&je(o),l=o[10]&&ze(o),u=o[11]&&Me(o);return{c(){e=_("p"),a=I("Seguinos en nuestras redes"),t=y(),s=_("div"),n&&n.c(),r=y(),l&&l.c(),i=y(),u&&u.c(),this.h()},l(p){e=m(p,"P",{style:!0});var f=b(e);a=P(f,"Seguinos en nuestras redes"),f.forEach(c),t=E(p),s=m(p,"DIV",{class:!0});var $=b(s);n&&n.l($),r=E($),l&&l.l($),i=E($),u&&u.l($),$.forEach(c),this.h()},h(){d(e,"style",o[5]),d(s,"class","logo-cloud flex flex-row justify-center items-center gap-3")},m(p,f){k(p,e,f),h(e,a),k(p,t,f),k(p,s,f),n&&n.m(s,null),h(s,r),l&&l.m(s,null),h(s,i),u&&u.m(s,null)},p(p,f){p[9]&&n.p(p,f),p[10]&&l.p(p,f),p[11]&&u.p(p,f)},d(p){p&&c(e),p&&c(t),p&&c(s),n&&n.d(),l&&l.d(),u&&u.d()}}}function je(o){let e,a,t,s,r,i;return{c(){e=_("a"),a=_("span"),t=_("i"),s=y(),r=_("span"),i=I("Facebook"),this.h()},l(n){e=m(n,"A",{class:!0,href:!0,target:!0});var l=b(e);a=m(l,"SPAN",{});var u=b(a);t=m(u,"I",{class:!0}),b(t).forEach(c),u.forEach(c),s=E(l),r=m(l,"SPAN",{class:!0});var p=b(r);i=P(p,"Facebook"),p.forEach(c),l.forEach(c),this.h()},h(){d(t,"class","fa-brands fa-facebook-f text-xl"),d(r,"class","md:block hidden"),d(e,"class","logo-item bg-indigo-500 rounded text-white font-bold svelte-f2iktx"),d(e,"href",o[9]),d(e,"target","_blank")},m(n,l){k(n,e,l),h(e,a),h(a,t),h(e,s),h(e,r),h(r,i)},p:T,d(n){n&&c(e)}}}function ze(o){let e,a,t,s,r,i;return{c(){e=_("a"),a=_("span"),t=_("i"),s=y(),r=_("span"),i=I("Instagram"),this.h()},l(n){e=m(n,"A",{style:!0,class:!0,href:!0,target:!0});var l=b(e);a=m(l,"SPAN",{});var u=b(a);t=m(u,"I",{class:!0}),b(t).forEach(c),u.forEach(c),s=E(l),r=m(l,"SPAN",{class:!0});var p=b(r);i=P(p,"Instagram"),p.forEach(c),l.forEach(c),this.h()},h(){d(t,"class","fa-brands fa-instagram text-xl"),d(r,"class","md:block hidden"),ee(e,"background","linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)"),d(e,"class","logo-item rounded text-white font-bold svelte-f2iktx"),d(e,"href",o[10]),d(e,"target","_blank")},m(n,l){k(n,e,l),h(e,a),h(a,t),h(e,s),h(e,r),h(r,i)},p:T,d(n){n&&c(e)}}}function Me(o){let e,a,t,s,r,i;return{c(){e=_("a"),a=_("span"),t=_("i"),s=y(),r=_("span"),i=I("Youtube"),this.h()},l(n){e=m(n,"A",{class:!0,href:!0,target:!0});var l=b(e);a=m(l,"SPAN",{});var u=b(a);t=m(u,"I",{class:!0}),b(t).forEach(c),u.forEach(c),s=E(l),r=m(l,"SPAN",{class:!0});var p=b(r);i=P(p,"Youtube"),p.forEach(c),l.forEach(c),this.h()},h(){d(t,"class","fa-brands fa-youtube text-xl"),d(r,"class","md:block hidden"),d(e,"class","logo-item bg-red-500 rounded text-white font-bold svelte-f2iktx"),d(e,"href",o[11]),d(e,"target","_blank")},m(n,l){k(n,e,l),h(e,a),h(a,t),h(e,s),h(e,r),h(r,i)},p:T,d(n){n&&c(e)}}}function Ve(o){let e,a,t,s,r,i=(o[9]||o[10]||o[11])&&Ce(o);return{c(){e=_("div"),i&&i.c(),a=y(),t=_("p"),s=I(o[7]),r=I("® Todos los derechos reservados"),this.h()},l(n){e=m(n,"DIV",{class:!0});var l=b(e);i&&i.l(l),a=E(l),t=m(l,"P",{class:!0,style:!0});var u=b(t);s=P(u,o[7]),r=P(u,"® Todos los derechos reservados"),u.forEach(c),l.forEach(c),this.h()},h(){d(t,"class","text-md md:text-xl"),d(t,"style",o[5]),d(e,"class","p-5 flex flex-col gap-3 items-center text-center bg-[#5555] mt-4")},m(n,l){k(n,e,l),i&&i.m(e,null),h(e,a),h(e,t),h(t,s),h(t,r)},p(n,l){(n[9]||n[10]||n[11])&&i.p(n,l)},d(n){n&&c(e),i&&i.d()}}}function qe(o){let e,a=`<style>.a{${o[4]}}</style>`,t,s,r,i,n,l,u,p=o[0].length>0&&U(o);return i=new be({props:{position:"right",$$slots:{default:[Ae]},$$scope:{ctx:o}}}),l=new ve({props:{regionPage:"a",$$slots:{pageFooter:[Ve],pageHeader:[Fe],header:[He],default:[Se]},$$scope:{ctx:o}}}),{c(){e=new ie(!1),t=z(),s=y(),p&&p.c(),r=y(),B(i.$$.fragment),n=y(),B(l.$$.fragment),this.h()},l(f){const $=fe("svelte-1f64vsx",document.head);e=ce($,!1),t=z(),$.forEach(c),s=E(f),p&&p.l(f),r=E(f),O(i.$$.fragment,f),n=E(f),O(l.$$.fragment,f),this.h()},h(){e.a=t},m(f,$){e.m(a,document.head),h(document.head,t),k(f,s,$),p&&p.m(f,$),k(f,r,$),L(i,f,$),k(f,n,$),L(l,f,$),u=!0},p(f,[$]){f[0].length>0?p?p.p(f,$):(p=U(f),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null);const w={};$&2097152&&(w.$$scope={dirty:$,ctx:f}),i.$set(w);const g={};$&2097159&&(g.$$scope={dirty:$,ctx:f}),l.$set(g)},i(f){u||(F(i.$$.fragment,f),F(l.$$.fragment,f),u=!0)},o(f){C(i.$$.fragment,f),C(l.$$.fragment,f),u=!1},d(f){c(t),f&&e.d(),f&&c(s),p&&p.d(f),f&&c(r),Y(i,f),f&&c(n),Y(l,f)}}}function Be(o,e,a){let t,s,r;Q(o,ae,S=>a(1,s=S)),Q(o,re,S=>a(14,r=S));let{$$slots:i={},$$scope:n}=e,{data:l}=e;const u=l.config.myBg||"",p=l.config.myFont||"";let f="white";p&&(f=p.match(/(white|black)/)?p.match(/(white|black)/)[0]:"black");const $=l.brand.logo||"",w=l.brand.name||"tu marca",g=l.brand.whatsapp||"",v=l.brand.facebook||"",M=l.brand.instagram||"",j=l.brand.youtube||"";let H=r.filter(S=>S.page==s.params.brand);const V={id:"example-3",width:"w-[280px] md:w-[480px]"},N=()=>R(`/${s.params.brand}/cart`),A=()=>R(`/${s.params.brand}/about`),G=()=>q.open(V),J=()=>location.href=`/${s.params.brand}`,K=()=>location.href=`/${s.params.brand}`;return o.$$set=S=>{"data"in S&&a(13,l=S.data),"$$scope"in S&&a(21,n=S.$$scope)},o.$$.update=()=>{o.$$.dirty&16386&&a(0,H=r.filter(S=>S.page==s.params.brand)),o.$$.dirty&1&&a(3,t=`Hola, me interesan estos productos : ${H.map(S=>`(codigo: ${S.id} T: ${S.sizes}) `)}`)},[H,s,f,t,u,p,$,w,g,v,M,j,V,l,r,i,N,A,G,J,K,n]}class Xe extends X{constructor(e){super(),Z(this,e,Be,qe,x,{data:13})}}export{Xe as component,We as universal};
