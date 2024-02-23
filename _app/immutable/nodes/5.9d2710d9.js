import{p as le,c as re}from"../chunks/store.41f2ed7b.js";import{a as oe}from"../chunks/axios.4a70c6fc.js";import{e as ne}from"../chunks/index.5e2a9a64.js";import{S as Q,i as R,s as U,k as _,a as y,q as S,l as m,m as b,h as u,c as E,r as P,n as d,p as W,b as v,C as h,L as D,D as H,M as X,K as Y,N as ie,e as j,y as M,O as fe,P as ce,z as V,A as q,g as T,d as F,B,G as ue,Q as pe,H as de,I as he,J as _e,u as me}from"../chunks/index.670203d3.js";import{d as L,D as be,A as $e,a as ge}from"../chunks/Drawer.a03af140.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.325b0402.js";import{A as ve}from"../chunks/AppShell.637c48a2.js";import{p as Z}from"../chunks/stores.f390463c.js";import{g as G}from"../chunks/navigation.962e727d.js";let x;le.subscribe(o=>x=o);async function ke({params:o}){const e=await oe.get(`${x}gets.php?a=getpage&b=${o.brand}`);if(e.data.error)throw ne(404,"Not Found");if(e.data.brand&&e.data.config)return{brand:e.data.brand,config:e.data.config,products:e.data.products}}const We=Object.freeze(Object.defineProperty({__proto__:null,load:ke},Symbol.toStringTag,{value:"Module"}));function we(o){let e,a,t,s,r,i,n,l,c,p,f,$,w,g,k;return{c(){e=_("section"),a=_("i"),t=y(),s=_("h1"),r=S("Menú"),i=y(),n=_("a"),l=S("Tienda"),p=y(),f=_("a"),$=S("Carrito"),this.h()},l(N){e=m(N,"SECTION",{class:!0});var A=b(e);a=m(A,"I",{class:!0}),b(a).forEach(u),t=E(A),s=m(A,"H1",{class:!0,style:!0});var C=b(s);r=P(C,"Menú"),C.forEach(u),i=E(A),n=m(A,"A",{href:!0,class:!0});var z=b(n);l=P(z,"Tienda"),z.forEach(u),p=E(A),f=m(A,"A",{href:!0,class:!0});var O=b(f);$=P(O,"Carrito"),O.forEach(u),A.forEach(u),this.h()},h(){d(a,"class","fas fa-times text-black absolute top-5 right-5 text-2xl cursor-pointer hover:animate-pulse"),d(s,"class","h1 text-center"),W(s,"font-family","inherit"),d(n,"href",c=`/${o[0].params.brand}`),d(n,"class","svelte-6r875d"),d(f,"href",w=`/${o[0].params.brand}/cart`),d(f,"class","svelte-6r875d"),d(e,"class","p-4 flex flex-col justify-center items-center h-full w-full gap-5 relative")},m(N,A){v(N,e,A),h(e,a),h(e,t),h(e,s),h(s,r),h(e,i),h(e,n),h(n,l),h(e,p),h(e,f),h(f,$),g||(k=[D(a,"click",o[1]),D(n,"click",o[2]),D(f,"click",o[3])],g=!0)},p(N,[A]){A&1&&c!==(c=`/${N[0].params.brand}`)&&d(n,"href",c),A&1&&w!==(w=`/${N[0].params.brand}/cart`)&&d(f,"href",w)},i:H,o:H,d(N){N&&u(e),g=!1,X(k)}}}function ye(o,e,a){let t;return Y(o,Z,n=>a(0,t=n)),[t,()=>L.close(),()=>L.close(),()=>L.close()]}class Ee extends Q{constructor(e){super(),R(this,e,ye,we,U,{})}}function J(o){let e,a,t;return{c(){e=_("a"),a=_("i"),this.h()},l(s){e=m(s,"A",{class:!0,href:!0});var r=b(e);a=m(r,"I",{class:!0}),b(a).forEach(u),r.forEach(u),this.h()},h(){d(a,"class","fa-brands fa-whatsapp text-white text-3xl"),d(e,"class","fa-shake py-2 px-3 shadow-xl bg-green-500 rounded-full flex justify-center items-center fixed bottom-20 right-7 z-20 cursor-pointer"),d(e,"href",t=`https://api.whatsapp.com/send?phone=+549${o[8]}&text=${o[3]}`)},m(s,r){v(s,e,r),h(e,a)},p(s,r){r&8&&t!==(t=`https://api.whatsapp.com/send?phone=+549${s[8]}&text=${s[3]}`)&&d(e,"href",t)},d(s){s&&u(e)}}}function Ae(o){let e,a;return e=new Ee({}),{c(){M(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){q(e,t,s),a=!0},i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){F(e.$$.fragment,t),a=!1},d(t){B(e,t)}}}function Ie(o){let e,a;const t=o[15].default,s=ue(t,o,o[21],null);return{c(){e=_("div"),s&&s.c(),this.h()},l(r){e=m(r,"DIV",{class:!0});var i=b(e);s&&s.l(i),i.forEach(u),this.h()},h(){d(e,"class",pe("h-full md:w-10/12 m-auto w-full")+" svelte-1kcm1e2")},m(r,i){v(r,e,i),s&&s.m(e,null),a=!0},p(r,i){s&&s.p&&(!a||i&2097152)&&de(s,t,r,r[21],a?_e(t,r[21],i,null):he(r[21]),null)},i(r){a||(T(s,r),a=!0)},o(r){F(s,r),a=!1},d(r){r&&u(e),s&&s.d(r)}}}function Se(o){let e,a;return e=new ge({props:{src:o[6],width:"w-8",cursor:"cursor-pointer"}}),e.$on("click",o[19]),{c(){M(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){q(e,t,s),a=!0},p:H,i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){F(e.$$.fragment,t),a=!1},d(t){B(e,t)}}}function Pe(o){let e,a,t,s,r,i,n=o[6]&&Se(o);return{c(){n&&n.c(),e=y(),a=_("h4"),t=S(o[7]),this.h()},l(l){n&&n.l(l),e=E(l),a=m(l,"H4",{class:!0,style:!0});var c=b(a);t=P(c,o[7]),c.forEach(u),this.h()},h(){d(a,"class","ml-4 h4 cursor-pointer"),d(a,"style",o[5])},m(l,c){n&&n.m(l,c),v(l,e,c),v(l,a,c),h(a,t),s=!0,r||(i=D(a,"click",o[20]),r=!0)},p(l,c){l[6]&&n.p(l,c)},i(l){s||(T(n),s=!0)},o(l){F(n),s=!1},d(l){n&&n.d(l),l&&u(e),l&&u(a),r=!1,i()}}}function Ne(o){let e,a=o[0].length>0&&K(o);return{c(){a&&a.c(),e=j()},l(t){a&&a.l(t),e=j()},m(t,s){a&&a.m(t,s),v(t,e,s)},p(t,s){t[0].length>0?a?a.p(t,s):(a=K(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},d(t){a&&a.d(t),t&&u(e)}}}function K(o){let e,a=o[0].length+"",t;return{c(){e=_("span"),t=S(a),this.h()},l(s){e=m(s,"SPAN",{class:!0});var r=b(e);t=P(r,a),r.forEach(u),this.h()},h(){d(e,"class","badge-icon variant-filled-warning absolute -top-2.5 -right-2.5 z-10")},m(s,r){v(s,e,r),h(e,t)},p(s,r){r&1&&a!==(a=s[0].length+"")&&me(t,a)},d(s){s&&u(e)}}}function De(o){let e,a,t,s,r,i,n,l,c,p,f,$,w=Ne(o);return{c(){e=_("div"),w&&w.c(),a=y(),t=_("i"),r=y(),i=_("i"),l=y(),c=_("i"),this.h()},l(g){e=m(g,"DIV",{class:!0});var k=b(e);w&&w.l(k),a=E(k),t=m(k,"I",{class:!0,style:!0}),b(t).forEach(u),k.forEach(u),r=E(g),i=m(g,"I",{class:!0,style:!0}),b(i).forEach(u),l=E(g),c=m(g,"I",{class:!0,style:!0}),b(c).forEach(u),this.h()},h(){d(t,"class","fa-solid fa-cart-shopping cursor-pointer hover:animate-pulse text-xl"),d(t,"style",s=`color:${o[2]}`),d(e,"class","relative inline-block"),d(i,"class","fa-solid fa-circle-info text-2xl cursor-pointer hover:animate-pulse"),d(i,"style",n=`color:${o[2]}`),d(c,"class","fa-solid fa-bars text-xl cursor-pointer hover:animate-pulse"),d(c,"style",p=`color:${o[2]}`)},m(g,k){v(g,e,k),w&&w.m(e,null),h(e,a),h(e,t),v(g,r,k),v(g,i,k),v(g,l,k),v(g,c,k),f||($=[D(t,"click",o[16]),D(i,"click",o[17]),D(c,"click",o[18])],f=!0)},p(g,k){w.p(g,k),k&4&&s!==(s=`color:${g[2]}`)&&d(t,"style",s),k&4&&n!==(n=`color:${g[2]}`)&&d(i,"style",n),k&4&&p!==(p=`color:${g[2]}`)&&d(c,"style",p)},d(g){g&&u(e),w&&w.d(),g&&u(r),g&&u(i),g&&u(l),g&&u(c),f=!1,X($)}}}function He(o){let e,a;return e=new $e({props:{background:"a",shadow:"shadow-md",$$slots:{trail:[De],lead:[Pe]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){q(e,t,s),a=!0},p(t,s){const r={};s&2097159&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){F(e.$$.fragment,t),a=!1},d(t){B(e,t)}}}function Te(o){let e,a,t,s,r,i;return{c(){e=_("div"),a=_("p"),t=S("Para más información o cualquier consulta, nuestro whatsapp es "),s=_("i"),r=y(),i=S(o[8]),this.h()},l(n){e=m(n,"DIV",{class:!0});var l=b(e);a=m(l,"P",{class:!0});var c=b(a);t=P(c,"Para más información o cualquier consulta, nuestro whatsapp es "),s=m(c,"I",{class:!0}),b(s).forEach(u),r=E(c),i=P(c,o[8]),c.forEach(u),l.forEach(u),this.h()},h(){d(s,"class","fa-brands fa-whatsapp text-green-300"),d(a,"class","mark svelte-1kcm1e2"),d(e,"class","p-1 bg-[#000b] text-white")},m(n,l){v(n,e,l),h(e,a),h(a,t),h(a,s),h(a,r),h(a,i)},p:H,d(n){n&&u(e)}}}function Fe(o){let e,a=o[8]&&Te(o);return{c(){a&&a.c(),e=j()},l(t){a&&a.l(t),e=j()},m(t,s){a&&a.m(t,s),v(t,e,s)},p(t,s){t[8]&&a.p(t,s)},d(t){a&&a.d(t),t&&u(e)}}}function Ce(o){let e,a,t,s,r,i,n=o[9]&&je(o),l=o[10]&&ze(o),c=o[11]&&Me(o);return{c(){e=_("p"),a=S("Seguinos en nuestras redes"),t=y(),s=_("div"),n&&n.c(),r=y(),l&&l.c(),i=y(),c&&c.c(),this.h()},l(p){e=m(p,"P",{style:!0});var f=b(e);a=P(f,"Seguinos en nuestras redes"),f.forEach(u),t=E(p),s=m(p,"DIV",{class:!0});var $=b(s);n&&n.l($),r=E($),l&&l.l($),i=E($),c&&c.l($),$.forEach(u),this.h()},h(){d(e,"style",o[5]),d(s,"class","logo-cloud flex flex-col md:flex-row justify-center items-center gap-3")},m(p,f){v(p,e,f),h(e,a),v(p,t,f),v(p,s,f),n&&n.m(s,null),h(s,r),l&&l.m(s,null),h(s,i),c&&c.m(s,null)},p(p,f){p[9]&&n.p(p,f),p[10]&&l.p(p,f),p[11]&&c.p(p,f)},d(p){p&&u(e),p&&u(t),p&&u(s),n&&n.d(),l&&l.d(),c&&c.d()}}}function je(o){let e,a,t,s,r,i;return{c(){e=_("a"),a=_("span"),t=_("i"),s=y(),r=_("span"),i=S("Facebook"),this.h()},l(n){e=m(n,"A",{class:!0,href:!0,target:!0});var l=b(e);a=m(l,"SPAN",{});var c=b(a);t=m(c,"I",{class:!0}),b(t).forEach(u),c.forEach(u),s=E(l),r=m(l,"SPAN",{});var p=b(r);i=P(p,"Facebook"),p.forEach(u),l.forEach(u),this.h()},h(){d(t,"class","fa-brands fa-facebook-f text-xl"),d(e,"class","logo-item bg-indigo-500 rounded text-white font-bold svelte-1kcm1e2"),d(e,"href",o[9]),d(e,"target","_blank")},m(n,l){v(n,e,l),h(e,a),h(a,t),h(e,s),h(e,r),h(r,i)},p:H,d(n){n&&u(e)}}}function ze(o){let e,a,t,s,r,i;return{c(){e=_("a"),a=_("span"),t=_("i"),s=y(),r=_("span"),i=S("Instagram"),this.h()},l(n){e=m(n,"A",{style:!0,class:!0,href:!0,target:!0});var l=b(e);a=m(l,"SPAN",{});var c=b(a);t=m(c,"I",{class:!0}),b(t).forEach(u),c.forEach(u),s=E(l),r=m(l,"SPAN",{});var p=b(r);i=P(p,"Instagram"),p.forEach(u),l.forEach(u),this.h()},h(){d(t,"class","fa-brands fa-instagram text-xl"),W(e,"background","linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)"),d(e,"class","logo-item rounded text-white font-bold svelte-1kcm1e2"),d(e,"href",o[10]),d(e,"target","_blank")},m(n,l){v(n,e,l),h(e,a),h(a,t),h(e,s),h(e,r),h(r,i)},p:H,d(n){n&&u(e)}}}function Me(o){let e,a,t,s,r,i;return{c(){e=_("a"),a=_("span"),t=_("i"),s=y(),r=_("span"),i=S("Youtube"),this.h()},l(n){e=m(n,"A",{class:!0,href:!0,target:!0});var l=b(e);a=m(l,"SPAN",{});var c=b(a);t=m(c,"I",{class:!0}),b(t).forEach(u),c.forEach(u),s=E(l),r=m(l,"SPAN",{});var p=b(r);i=P(p,"Youtube"),p.forEach(u),l.forEach(u),this.h()},h(){d(t,"class","fa-brands fa-youtube text-xl"),d(e,"class","logo-item bg-red-500 rounded text-white font-bold svelte-1kcm1e2"),d(e,"href",o[11]),d(e,"target","_blank")},m(n,l){v(n,e,l),h(e,a),h(a,t),h(e,s),h(e,r),h(r,i)},p:H,d(n){n&&u(e)}}}function Ve(o){let e,a,t,s,r,i=(o[9]||o[10]||o[11])&&Ce(o);return{c(){e=_("div"),i&&i.c(),a=y(),t=_("p"),s=S(o[7]),r=S("® Todos los derechos reservados"),this.h()},l(n){e=m(n,"DIV",{class:!0});var l=b(e);i&&i.l(l),a=E(l),t=m(l,"P",{class:!0,style:!0});var c=b(t);s=P(c,o[7]),r=P(c,"® Todos los derechos reservados"),c.forEach(u),l.forEach(u),this.h()},h(){d(t,"class","text-md md:text-xl"),d(t,"style",o[5]),d(e,"class","p-5 flex flex-col gap-3 items-center text-center bg-[#5555] mt-4")},m(n,l){v(n,e,l),i&&i.m(e,null),h(e,a),h(e,t),h(t,s),h(t,r)},p(n,l){(n[9]||n[10]||n[11])&&i.p(n,l)},d(n){n&&u(e),i&&i.d()}}}function qe(o){let e,a=`<style>.a{${o[4]}}</style>`,t,s,r,i,n,l,c,p=o[0].length>0&&J(o);return i=new be({props:{position:"right",$$slots:{default:[Ae]},$$scope:{ctx:o}}}),l=new ve({props:{regionPage:"a",$$slots:{pageFooter:[Ve],pageHeader:[Fe],header:[He],default:[Ie]},$$scope:{ctx:o}}}),{c(){e=new ie(!1),t=j(),s=y(),p&&p.c(),r=y(),M(i.$$.fragment),n=y(),M(l.$$.fragment),this.h()},l(f){const $=fe("svelte-1f64vsx",document.head);e=ce($,!1),t=j(),$.forEach(u),s=E(f),p&&p.l(f),r=E(f),V(i.$$.fragment,f),n=E(f),V(l.$$.fragment,f),this.h()},h(){e.a=t},m(f,$){e.m(a,document.head),h(document.head,t),v(f,s,$),p&&p.m(f,$),v(f,r,$),q(i,f,$),v(f,n,$),q(l,f,$),c=!0},p(f,[$]){f[0].length>0?p?p.p(f,$):(p=J(f),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null);const w={};$&2097152&&(w.$$scope={dirty:$,ctx:f}),i.$set(w);const g={};$&2097159&&(g.$$scope={dirty:$,ctx:f}),l.$set(g)},i(f){c||(T(i.$$.fragment,f),T(l.$$.fragment,f),c=!0)},o(f){F(i.$$.fragment,f),F(l.$$.fragment,f),c=!1},d(f){u(t),f&&e.d(),f&&u(s),p&&p.d(f),f&&u(r),B(i,f),f&&u(n),B(l,f)}}}function Be(o,e,a){let t,s,r;Y(o,Z,I=>a(1,s=I)),Y(o,re,I=>a(14,r=I));let{$$slots:i={},$$scope:n}=e,{data:l}=e;const c=l.config.myBg||"",p=l.config.myFont||"";let f="white";p&&(f=p.match(/(white|black)/)?p.match(/(white|black)/)[0]:"black");const $=l.brand.logo||"",w=l.brand.name||"tu marca",g=l.brand.whatsapp||"",k=l.brand.facebook||"",N=l.brand.instagram||"",A=l.brand.youtube||"";let C=r.filter(I=>I.page==s.params.brand);const z={id:"example-3",width:"w-[280px] md:w-[480px]"},O=()=>G(`/${s.params.brand}/cart`),ee=()=>G(`/${s.params.brand}/about`),te=()=>L.open(z),ae=()=>location.href=`/${s.params.brand}`,se=()=>location.href=`/${s.params.brand}`;return o.$$set=I=>{"data"in I&&a(13,l=I.data),"$$scope"in I&&a(21,n=I.$$scope)},o.$$.update=()=>{o.$$.dirty&16386&&a(0,C=r.filter(I=>I.page==s.params.brand)),o.$$.dirty&1&&a(3,t=`Hola, me interesan estos productos : ${C.map(I=>`(codigo: ${I.id} T: ${I.sizes}) `)}`)},[C,s,f,t,c,p,$,w,g,k,N,A,z,l,r,i,O,ee,te,ae,se,n]}class Xe extends Q{constructor(e){super(),R(this,e,Be,qe,U,{data:13})}}export{Xe as component,We as universal};
