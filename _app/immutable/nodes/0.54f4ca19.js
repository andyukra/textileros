import{S as C,i as D,s as S,k as y,l as I,m as q,h as c,n as o,p as B,b as T,C as G,D as E,E as L,F as M,y as P,z as V,A,g as m,d,B as F,G as H,a as J,c as K,f as O,H as j,I as Q,J as R,K as U,v as W}from"../chunks/index.670203d3.js";/* empty css                    */import"../chunks/ProgressBar.svelte_svelte_type_style_lang.325b0402.js";import{l as X}from"../chunks/store.3b6ef4f9.js";function Y(l){let e,a,t,n=`${l[4]?100:l[7]}%`,s,r;return{c(){e=y("div"),a=y("div"),this.h()},l(i){e=I(i,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-labelledby":!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0});var u=q(e);a=I(u,"DIV",{class:!0}),q(a).forEach(c),u.forEach(c),this.h()},h(){o(a,"class",t="progress-bar-meter "+l[5]+" "+l[5]+" svelte-meqa4r"),B(a,"width",n),o(e,"class",s="progress-bar "+l[6]+" svelte-meqa4r"),o(e,"data-testid","progress-bar"),o(e,"role","progressbar"),o(e,"aria-labelledby",l[3]),o(e,"aria-valuenow",l[0]),o(e,"aria-valuemin",l[1]),o(e,"aria-valuemax",r=l[2]-l[1])},m(i,u){T(i,e,u),G(e,a)},p(i,[u]){u&32&&t!==(t="progress-bar-meter "+i[5]+" "+i[5]+" svelte-meqa4r")&&o(a,"class",t),u&144&&n!==(n=`${i[4]?100:i[7]}%`)&&B(a,"width",n),u&64&&s!==(s="progress-bar "+i[6]+" svelte-meqa4r")&&o(e,"class",s),u&8&&o(e,"aria-labelledby",i[3]),u&1&&o(e,"aria-valuenow",i[0]),u&2&&o(e,"aria-valuemin",i[1]),u&6&&r!==(r=i[2]-i[1])&&o(e,"aria-valuemax",r)},i:E,o:E,d(i){i&&c(e)}}}const Z="w-full overflow-hidden",w="h-full";function x(l,e,a){let t,n,s,r,i,{value:u=void 0}=e,{min:h=0}=e,{max:_=100}=e,{height:g="h-2"}=e,{rounded:b="rounded-token"}=e,{meter:v="bg-surface-900-50-token"}=e,{track:k="bg-surface-200-700-token"}=e,{labelledby:z=""}=e;return l.$$set=f=>{a(13,e=L(L({},e),M(f))),"value"in f&&a(0,u=f.value),"min"in f&&a(1,h=f.min),"max"in f&&a(2,_=f.max),"height"in f&&a(8,g=f.height),"rounded"in f&&a(9,b=f.rounded),"meter"in f&&a(10,v=f.meter),"track"in f&&a(11,k=f.track),"labelledby"in f&&a(3,z=f.labelledby)},l.$$.update=()=>{l.$$.dirty&7&&a(7,t=u?100*(u-h)/(_-h):0),l.$$.dirty&1&&a(4,n=u===void 0||u<0),l.$$.dirty&16&&a(12,s=n?"animIndeterminate":""),a(6,r=`${Z} ${g} ${b} ${k} ${e.class??""}`),l.$$.dirty&5632&&a(5,i=`${w} ${b} ${s} ${v}`)},e=M(e),[u,h,_,z,n,i,r,t,g,b,v,k,s]}class p extends C{constructor(e){super(),D(this,e,x,Y,S,{value:0,min:1,max:2,height:8,rounded:9,meter:10,track:11,labelledby:3})}}function $(l){let e,a,t;return a=new p({props:{value:void 0,meter:"bg-sky-400",track:"bg-surface-300"}}),{c(){e=y("section"),P(a.$$.fragment),this.h()},l(n){e=I(n,"SECTION",{class:!0});var s=q(e);V(a.$$.fragment,s),s.forEach(c),this.h()},h(){o(e,"class","fixed w-[100vw] h-[100vh] top-0 left-0 backdrop-blur-sm bg-[#fff6] z-[50]")},m(n,s){T(n,e,s),A(a,e,null),t=!0},p:E,i(n){t||(m(a.$$.fragment,n),t=!0)},o(n){d(a.$$.fragment,n),t=!1},d(n){n&&c(e),F(a)}}}class ee extends C{constructor(e){super(),D(this,e,null,$,S,{})}}function N(l){let e,a;return e=new ee({}),{c(){P(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,n){A(e,t,n),a=!0},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function ae(l){let e,a,t=l[0]&&N();const n=l[2].default,s=H(n,l,l[1],null);return{c(){t&&t.c(),e=J(),s&&s.c()},l(r){t&&t.l(r),e=K(r),s&&s.l(r)},m(r,i){t&&t.m(r,i),T(r,e,i),s&&s.m(r,i),a=!0},p(r,[i]){r[0]?t?i&1&&m(t,1):(t=N(),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(W(),d(t,1,1,()=>{t=null}),O()),s&&s.p&&(!a||i&2)&&j(s,n,r,r[1],a?R(n,r[1],i,null):Q(r[1]),null)},i(r){a||(m(t),m(s,r),a=!0)},o(r){d(t),d(s,r),a=!1},d(r){t&&t.d(r),r&&c(e),s&&s.d(r)}}}function te(l,e,a){let t;U(l,X,r=>a(0,t=r));let{$$slots:n={},$$scope:s}=e;return l.$$set=r=>{"$$scope"in r&&a(1,s=r.$$scope)},[t,s,n]}class ne extends C{constructor(e){super(),D(this,e,te,ae,S,{})}}export{ne as component};
