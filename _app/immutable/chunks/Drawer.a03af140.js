import{S as ae,i as ie,s as re,G as K,k as L,a as le,l as j,m as T,c as te,h as B,n as h,b as A,C as q,g as E,v as p,d as P,f as $,H as J,I as N,J as X,R as je,E as G,F as U,L as z,D as oe,M as se,Z as ne,T as v,W as ue,q as Ae,X as de,r as We,u as qe,_ as fe,$ as Re,a0 as ve,V as Ge,a1 as Ue,e as ce,K as Fe,a2 as Ke,a3 as Je,a4 as be,a5 as Ne,a6 as he,a7 as Xe,w as ge}from"./index.670203d3.js";import{f as me,a as _e}from"./index.94fca594.js";import{f as Ze}from"./focusTrap.f08ca3d9.js";import{w as Oe}from"./index.7210e797.js";function Qe(){const{subscribe:t,set:e,update:l}=Oe({});return{subscribe:t,set:e,update:l,open:o=>l(()=>({open:!0,...o})),close:()=>l(o=>(o.open=!1,o))}}const x=Qe(),Ye=t=>({}),ke=t=>({}),xe=t=>({}),ye=t=>({}),pe=t=>({}),De=t=>({});function we(t){let e,l,o;const u=t[22].lead,i=K(u,t,t[21],De);return{c(){e=L("div"),i&&i.c(),this.h()},l(a){e=j(a,"DIV",{class:!0});var r=T(e);i&&i.l(r),r.forEach(B),this.h()},h(){h(e,"class",l="app-bar-slot-lead "+t[4])},m(a,r){A(a,e,r),i&&i.m(e,null),o=!0},p(a,r){i&&i.p&&(!o||r&2097152)&&J(i,u,a,a[21],o?X(u,a[21],r,pe):N(a[21]),De),(!o||r&16&&l!==(l="app-bar-slot-lead "+a[4]))&&h(e,"class",l)},i(a){o||(E(i,a),o=!0)},o(a){P(i,a),o=!1},d(a){a&&B(e),i&&i.d(a)}}}function Be(t){let e,l,o;const u=t[22].trail,i=K(u,t,t[21],ye);return{c(){e=L("div"),i&&i.c(),this.h()},l(a){e=j(a,"DIV",{class:!0});var r=T(e);i&&i.l(r),r.forEach(B),this.h()},h(){h(e,"class",l="app-bar-slot-trail "+t[2])},m(a,r){A(a,e,r),i&&i.m(e,null),o=!0},p(a,r){i&&i.p&&(!o||r&2097152)&&J(i,u,a,a[21],o?X(u,a[21],r,xe):N(a[21]),ye),(!o||r&4&&l!==(l="app-bar-slot-trail "+a[2]))&&h(e,"class",l)},i(a){o||(E(i,a),o=!0)},o(a){P(i,a),o=!1},d(a){a&&B(e),i&&i.d(a)}}}function Ie(t){let e,l,o;const u=t[22].headline,i=K(u,t,t[21],ke);return{c(){e=L("div"),i&&i.c(),this.h()},l(a){e=j(a,"DIV",{class:!0});var r=T(e);i&&i.l(r),r.forEach(B),this.h()},h(){h(e,"class",l="app-bar-row-headline "+t[5])},m(a,r){A(a,e,r),i&&i.m(e,null),o=!0},p(a,r){i&&i.p&&(!o||r&2097152)&&J(i,u,a,a[21],o?X(u,a[21],r,Ye):N(a[21]),ke),(!o||r&32&&l!==(l="app-bar-row-headline "+a[5]))&&h(e,"class",l)},i(a){o||(E(i,a),o=!0)},o(a){P(i,a),o=!1},d(a){a&&B(e),i&&i.d(a)}}}function $e(t){let e,l,o,u,i,a,r,f,D,w,d=t[8].lead&&we(t);const k=t[22].default,n=K(k,t,t[21],null);let c=t[8].trail&&Be(t),m=t[8].headline&&Ie(t);return{c(){e=L("div"),l=L("div"),d&&d.c(),o=le(),u=L("div"),n&&n.c(),a=le(),c&&c.c(),f=le(),m&&m.c(),this.h()},l(b){e=j(b,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var y=T(e);l=j(y,"DIV",{class:!0});var I=T(l);d&&d.l(I),o=te(I),u=j(I,"DIV",{class:!0});var S=T(u);n&&n.l(S),S.forEach(B),a=te(I),c&&c.l(I),I.forEach(B),f=te(y),m&&m.l(y),y.forEach(B),this.h()},h(){h(u,"class",i="app-bar-slot-default "+t[3]),h(l,"class",r="app-bar-row-main "+t[6]),h(e,"class",D="app-bar "+t[7]),h(e,"data-testid","app-bar"),h(e,"role","toolbar"),h(e,"aria-label",t[0]),h(e,"aria-labelledby",t[1])},m(b,y){A(b,e,y),q(e,l),d&&d.m(l,null),q(l,o),q(l,u),n&&n.m(u,null),q(l,a),c&&c.m(l,null),q(e,f),m&&m.m(e,null),w=!0},p(b,[y]){b[8].lead?d?(d.p(b,y),y&256&&E(d,1)):(d=we(b),d.c(),E(d,1),d.m(l,o)):d&&(p(),P(d,1,1,()=>{d=null}),$()),n&&n.p&&(!w||y&2097152)&&J(n,k,b,b[21],w?X(k,b[21],y,null):N(b[21]),null),(!w||y&8&&i!==(i="app-bar-slot-default "+b[3]))&&h(u,"class",i),b[8].trail?c?(c.p(b,y),y&256&&E(c,1)):(c=Be(b),c.c(),E(c,1),c.m(l,null)):c&&(p(),P(c,1,1,()=>{c=null}),$()),(!w||y&64&&r!==(r="app-bar-row-main "+b[6]))&&h(l,"class",r),b[8].headline?m?(m.p(b,y),y&256&&E(m,1)):(m=Ie(b),m.c(),E(m,1),m.m(e,null)):m&&(p(),P(m,1,1,()=>{m=null}),$()),(!w||y&128&&D!==(D="app-bar "+b[7]))&&h(e,"class",D),(!w||y&1)&&h(e,"aria-label",b[0]),(!w||y&2)&&h(e,"aria-labelledby",b[1])},i(b){w||(E(d),E(n,b),E(c),E(m),w=!0)},o(b){P(d),P(n,b),P(c),P(m),w=!1},d(b){b&&B(e),d&&d.d(),n&&n.d(b),c&&c.d(),m&&m.d()}}}const el="flex flex-col",ll="grid items-center",tl="",al="flex-none flex justify-between items-center",il="flex-auto",rl="flex-none flex items-center space-x-4";function sl(t,e,l){let o,u,i,a,r,f,{$$slots:D={},$$scope:w}=e;const d=je(D);let{background:k="bg-surface-100-800-token"}=e,{border:n=""}=e,{padding:c="p-4"}=e,{shadow:m=""}=e,{spacing:b="space-y-4"}=e,{gridColumns:y="grid-cols-[auto_1fr_auto]"}=e,{gap:I="gap-4"}=e,{regionRowMain:S=""}=e,{regionRowHeadline:H=""}=e,{slotLead:M=""}=e,{slotDefault:V=""}=e,{slotTrail:C=""}=e,{label:g=""}=e,{labelledby:W=""}=e;return t.$$set=_=>{l(23,e=G(G({},e),U(_))),"background"in _&&l(9,k=_.background),"border"in _&&l(10,n=_.border),"padding"in _&&l(11,c=_.padding),"shadow"in _&&l(12,m=_.shadow),"spacing"in _&&l(13,b=_.spacing),"gridColumns"in _&&l(14,y=_.gridColumns),"gap"in _&&l(15,I=_.gap),"regionRowMain"in _&&l(16,S=_.regionRowMain),"regionRowHeadline"in _&&l(17,H=_.regionRowHeadline),"slotLead"in _&&l(18,M=_.slotLead),"slotDefault"in _&&l(19,V=_.slotDefault),"slotTrail"in _&&l(20,C=_.slotTrail),"label"in _&&l(0,g=_.label),"labelledby"in _&&l(1,W=_.labelledby),"$$scope"in _&&l(21,w=_.$$scope)},t.$$.update=()=>{l(7,o=`${el} ${k} ${n} ${b} ${c} ${m} ${e.class??""}`),t.$$.dirty&114688&&l(6,u=`${ll} ${y} ${I} ${S}`),t.$$.dirty&131072&&l(5,i=`${tl} ${H}`),t.$$.dirty&262144&&l(4,a=`${al} ${M}`),t.$$.dirty&524288&&l(3,r=`${il} ${V}`),t.$$.dirty&1048576&&l(2,f=`${rl} ${C}`)},e=U(e),[g,W,f,r,a,i,u,o,d,k,n,c,m,b,y,I,S,H,M,V,C,w,D]}class Bl extends ae{constructor(e){super(),ie(this,e,sl,$e,re,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}function ol(t){let e,l,o=String(t[1]).substring(0,2).toUpperCase()+"",u,i;return{c(){e=ue("svg"),l=ue("text"),u=Ae(o),this.h()},l(a){e=de(a,"svg",{class:!0,viewBox:!0});var r=T(e);l=de(r,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var f=T(l);u=We(f,o),f.forEach(B),r.forEach(B),this.h()},h(){h(l,"x","50%"),h(l,"y","50%"),h(l,"dominant-baseline","central"),h(l,"text-anchor","middle"),h(l,"font-weight","bold"),h(l,"font-size",150),h(l,"class",i="avatar-text "+t[2]),h(e,"class","avatar-initials w-full h-full"),h(e,"viewBox","0 0 512 512")},m(a,r){A(a,e,r),q(e,l),q(l,u)},p(a,r){r&2&&o!==(o=String(a[1]).substring(0,2).toUpperCase()+"")&&qe(u,o),r&4&&i!==(i="avatar-text "+a[2])&&h(l,"class",i)},d(a){a&&B(e)}}}function nl(t){let e,l,o,u,i,a,r,f,D=[{class:l="avatar-image "+fl},{style:o=t[8].style??""},{src:u=t[0]},{alt:i=t[8].alt||""},t[7]()],w={};for(let d=0;d<D.length;d+=1)w=G(w,D[d]);return{c(){e=L("img"),this.h()},l(d){e=j(d,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){fe(e,w)},m(d,k){A(d,e,k),r||(f=[Re(a=t[4].call(null,e,t[5])),z(e,"error",t[19])],r=!0)},p(d,k){fe(e,w=ve(D,[{class:l},k&256&&o!==(o=d[8].style??"")&&{style:o},k&1&&!Ge(e.src,u=d[0])&&{src:u},k&256&&i!==(i=d[8].alt||"")&&{alt:i},d[7]()])),a&&Ue(a.update)&&k&32&&a.update.call(null,d[5])},d(d){d&&B(e),r=!1,se(f)}}}function ul(t){let e,l,o,u;function i(f,D){return f[0]?nl:ol}let a=i(t),r=a(t);return{c(){e=L("figure"),r.c(),this.h()},l(f){e=j(f,"FIGURE",{class:!0,"data-testid":!0});var D=T(e);r.l(D),D.forEach(B),this.h()},h(){h(e,"class",l="avatar "+t[6]),h(e,"data-testid","avatar")},m(f,D){A(f,e,D),r.m(e,null),o||(u=[z(e,"click",t[15]),z(e,"keydown",t[16]),z(e,"keyup",t[17]),z(e,"keypress",t[18])],o=!0)},p(f,[D]){a===(a=i(f))&&r?r.p(f,D):(r.d(1),r=a(f),r&&(r.c(),r.m(e,null))),D&64&&l!==(l="avatar "+f[6])&&h(e,"class",l)},i:oe,o:oe,d(f){f&&B(e),r.d(),o=!1,se(u)}}}let dl="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",fl="w-full h-full object-cover";function cl(t,e,l){let o;const u=["initials","fill","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let i=ne(e,u),{initials:a="AB"}=e,{fill:r="fill-token"}=e,{src:f=""}=e,{fallback:D=""}=e,{action:w=()=>{}}=e,{actionParams:d=""}=e,{background:k="bg-surface-400-500-token"}=e,{width:n="w-16"}=e,{border:c=""}=e,{rounded:m="rounded-full"}=e,{shadow:b=""}=e,{cursor:y=""}=e;function I(){return delete i.class,i}function S(g){v.call(this,t,g)}function H(g){v.call(this,t,g)}function M(g){v.call(this,t,g)}function V(g){v.call(this,t,g)}const C=()=>l(0,f=D);return t.$$set=g=>{l(8,e=G(G({},e),U(g))),l(20,i=ne(e,u)),"initials"in g&&l(1,a=g.initials),"fill"in g&&l(2,r=g.fill),"src"in g&&l(0,f=g.src),"fallback"in g&&l(3,D=g.fallback),"action"in g&&l(4,w=g.action),"actionParams"in g&&l(5,d=g.actionParams),"background"in g&&l(9,k=g.background),"width"in g&&l(10,n=g.width),"border"in g&&l(11,c=g.border),"rounded"in g&&l(12,m=g.rounded),"shadow"in g&&l(13,b=g.shadow),"cursor"in g&&l(14,y=g.cursor)},t.$$.update=()=>{l(6,o=`${dl} ${k} ${n} ${c} ${m} ${b} ${y} ${e.class??""}`)},e=U(e),[f,a,r,D,w,d,o,I,e,k,n,c,m,b,y,S,H,M,V,C]}class Il extends ae{constructor(e){super(),ie(this,e,cl,ul,re,{initials:1,fill:2,src:0,fallback:3,action:4,actionParams:5,background:9,width:10,border:11,rounded:12,shadow:13,cursor:14})}}const{window:bl}=Je;function Ee(t){let e,l,o,u,i,a,r,f,D,w;const d=t[29].default,k=K(d,t,t[28],null);return{c(){e=L("div"),l=L("div"),k&&k.c(),this.h()},l(n){e=j(n,"DIV",{class:!0,"data-testid":!0});var c=T(e);l=j(c,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-labelledby":!0,"aria-describedby":!0});var m=T(l);k&&k.l(m),m.forEach(B),c.forEach(B),this.h()},h(){h(l,"class",o="drawer "+t[6]),h(l,"data-testid","drawer"),h(l,"role","dialog"),h(l,"aria-modal","true"),h(l,"aria-labelledby",t[1]),h(l,"aria-describedby",t[2]),h(e,"class",a="drawer-backdrop "+t[7]),h(e,"data-testid","drawer-backdrop")},m(n,c){A(n,e,c),q(e,l),k&&k.m(l,null),t[33](l),t[34](e),f=!0,D||(w=[z(e,"mousedown",t[9]),z(e,"touchstart",t[30]),z(e,"touchend",t[31]),z(e,"keypress",t[32]),Re(Ze.call(null,e,!0))],D=!0)},p(n,c){t=n,k&&k.p&&(!f||c[0]&268435456)&&J(k,d,t,t[28],f?X(d,t[28],c,null):N(t[28]),null),(!f||c[0]&64&&o!==(o="drawer "+t[6]))&&h(l,"class",o),(!f||c[0]&2)&&h(l,"aria-labelledby",t[1]),(!f||c[0]&4)&&h(l,"aria-describedby",t[2]),(!f||c[0]&128&&a!==(a="drawer-backdrop "+t[7]))&&h(e,"class",a)},i(n){f||(E(k,n),n&&be(()=>{f&&(i&&i.end(1),u=Ne(l,me,{x:t[5].x,y:t[5].y,duration:t[0]}),u.start())}),n&&be(()=>{f&&(r||(r=he(e,_e,{duration:t[0]},!0)),r.run(1))}),f=!0)},o(n){P(k,n),u&&u.invalidate(),n&&(i=Xe(l,me,{x:t[5].x,y:t[5].y,duration:t[0]})),n&&(r||(r=he(e,_e,{duration:t[0]},!1)),r.run(0)),f=!1},d(n){n&&B(e),k&&k.d(n),t[33](null),n&&i&&i.end(),t[34](null),n&&r&&r.end(),D=!1,se(w)}}}function hl(t){let e,l,o,u,i=t[8].open===!0&&Ee(t);return{c(){i&&i.c(),e=ce()},l(a){i&&i.l(a),e=ce()},m(a,r){i&&i.m(a,r),A(a,e,r),l=!0,o||(u=z(bl,"keydown",t[10]),o=!0)},p(a,r){a[8].open===!0?i?(i.p(a,r),r[0]&256&&E(i,1)):(i=Ee(a),i.c(),E(i,1),i.m(e.parentNode,e)):i&&(p(),P(i,1,1,()=>{i=null}),$())},i(a){l||(E(i),l=!0)},o(a){P(i),l=!1},d(a){i&&i.d(a),a&&B(e),o=!1,u()}}}const gl="fixed top-0 left-0 right-0 bottom-0 flex",ml="overflow-y-auto transition-transform";function _l(t,e,l){let o,u,i,a,r,f,D;Fe(t,x,s=>l(8,D=s));let{$$slots:w={},$$scope:d}=e;const k=Ke();let{position:n="left"}=e,{duration:c=150}=e,{bgBackdrop:m="bg-surface-backdrop-token"}=e,{blur:b=""}=e,{padding:y=""}=e,{bgDrawer:I="bg-surface-100-800-token"}=e,{border:S=""}=e,{rounded:H=""}=e,{shadow:M="shadow-xl"}=e,{width:V=""}=e,{height:C=""}=e,{zIndex:g="z-40"}=e,{regionBackdrop:W=""}=e,{regionDrawer:_=""}=e,{labelledby:Z=""}=e,{describedby:O=""}=e;const Q={top:{alignment:"items-start",width:"w-full",height:"h-[50%]",rounded:"rounded-bl-container-token rounded-br-container-token"},bottom:{alignment:"items-end",width:"w-full",height:" h-[50%]",rounded:"rounded-tl-container-token rounded-tr-container-token"},left:{alignment:"justify-start",width:"w-[90%]",height:"h-full",rounded:"rounded-tr-container-token rounded-br-container-token"},right:{alignment:"justify-end",width:"w-[90%]",height:"h-full",rounded:"rounded-tl-container-token rounded-bl-container-token"}};let Y,ee,F={x:0,y:0};const R={position:n,duration:c,bgBackdrop:m,blur:b,padding:y,bgDrawer:I,border:S,rounded:H,shadow:M,width:V,height:C,labelledby:Z,describedby:O,regionBackdrop:W,regionDrawer:_};function Se(s){l(11,n=s.position||R.position),l(0,c=s.duration||R.duration),l(12,m=s.bgBackdrop||R.bgBackdrop),l(13,b=s.blur||R.blur),l(14,y=s.padding||R.padding),l(15,I=s.bgDrawer||R.bgDrawer),l(16,S=s.border||R.border),l(17,H=s.rounded||R.rounded),l(18,M=s.shadow||R.shadow),l(19,V=s.width||R.width),l(20,C=s.height||R.height),l(21,W=s.regionBackdrop||R.regionBackdrop),l(22,_=s.regionDrawer||R.regionDrawer),l(1,Z=s.labelledby||R.labelledby),l(2,O=s.describedby||R.describedby)}function He(){switch(n){case"top":l(5,F={x:0,y:-window.innerWidth});break;case"bottom":l(5,F={x:0,y:window.innerWidth});break;case"left":l(5,F={x:-window.innerHeight,y:0});break;case"right":l(5,F={x:window.innerHeight,y:0});break;default:console.error("Error: unknown position property value.");break}}function Pe(s){s.target===Y?(x.close(),k("backdrop",s)):k("drawer",s)}function Ve(s){D&&s.code==="Escape"&&x.close()}x.subscribe(s=>{s.open===!0&&(Se(s),He())});function Ce(s){v.call(this,t,s)}function Me(s){v.call(this,t,s)}function Te(s){v.call(this,t,s)}function ze(s){ge[s?"unshift":"push"](()=>{ee=s,l(4,ee)})}function Le(s){ge[s?"unshift":"push"](()=>{Y=s,l(3,Y)})}return t.$$set=s=>{l(40,e=G(G({},e),U(s))),"position"in s&&l(11,n=s.position),"duration"in s&&l(0,c=s.duration),"bgBackdrop"in s&&l(12,m=s.bgBackdrop),"blur"in s&&l(13,b=s.blur),"padding"in s&&l(14,y=s.padding),"bgDrawer"in s&&l(15,I=s.bgDrawer),"border"in s&&l(16,S=s.border),"rounded"in s&&l(17,H=s.rounded),"shadow"in s&&l(18,M=s.shadow),"width"in s&&l(19,V=s.width),"height"in s&&l(20,C=s.height),"zIndex"in s&&l(23,g=s.zIndex),"regionBackdrop"in s&&l(21,W=s.regionBackdrop),"regionDrawer"in s&&l(22,_=s.regionDrawer),"labelledby"in s&&l(1,Z=s.labelledby),"describedby"in s&&l(2,O=s.describedby),"$$scope"in s&&l(28,d=s.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&2048&&l(27,o=Q[n].alignment),t.$$.dirty[0]&526336&&l(26,u=V||Q[n].width),t.$$.dirty[0]&1050624&&l(25,i=C||Q[n].height),t.$$.dirty[0]&133120&&l(24,a=H||Q[n].rounded),l(7,r=`${gl} ${m} ${y} ${b} ${o} ${W} ${g} ${e.class??""}`),t.$$.dirty[0]&122126336&&l(6,f=`${ml} ${I} ${S} ${H} ${M} ${u} ${i} ${a} ${_}`)},e=U(e),[c,Z,O,Y,ee,F,f,r,D,Pe,Ve,n,m,b,y,I,S,H,M,V,C,W,_,g,a,i,u,o,d,w,Ce,Me,Te,ze,Le]}class El extends ae{constructor(e){super(),ie(this,e,_l,hl,re,{position:11,duration:0,bgBackdrop:12,blur:13,padding:14,bgDrawer:15,border:16,rounded:17,shadow:18,width:19,height:20,zIndex:23,regionBackdrop:21,regionDrawer:22,labelledby:1,describedby:2},null,[-1,-1])}}export{Bl as A,El as D,Il as a,x as d};
