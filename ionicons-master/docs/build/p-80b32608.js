const e=window,t=document,s={t:0,s:"",raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n)},n=(()=>{let e=!1;try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),o=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),l={},i=new WeakMap,r=e=>i.get(e),c=(e,t)=>i.set(t.o=e,t),a=(e,t)=>t in e,f=e=>console.error(e),u=new Map,d=e.__stencil_cssshim;let $=0,p=!1;const m=[],w=[],h=[],y=e=>t=>{e.push(t),p||(p=!0,s.raf(v))},b=(e,t)=>{let s=0,n=0;for(;s<e.length&&(n=performance.now())<t;)try{e[s++](n)}catch(e){f(e)}s===e.length?e.length=0:0!==s&&e.splice(0,s)},v=()=>{$++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){f(e)}e.length=0})(m);const e=2==(6&s.t)?performance.now()+7*Math.ceil($*(1/22)):1/0;b(w,e),b(h,e),w.length>0&&(h.push(...w),w.length=0),(p=m.length+w.length+h.length>0)?s.raf(v):$=0},g=y(m),_=y(w),k={},j=e=>null!=e,S=e=>e.toLowerCase(),U=e=>["object","function"].includes(typeof e),R=()=>e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_docssite("./p-f7ddb189.js"),L=async()=>{{const s=Array.from(t.querySelectorAll("script")).find(e=>e.src.includes("/docssite.esm.js")||"docssite"===e.getAttribute("data-namespace")),n=new URL(".",new URL(s.getAttribute("data-resources-url")||s.src,e.location.href));return O(n.href),window.customElements||await __sc_import_docssite("./p-a0c82e31.js"),n.href}},O=s=>{const n=`__sc_import_${"docssite".replace(/\s|-/g,"_")}`;try{e[n]=new Function("w","return import(w);")}catch(o){const l=new Map;e[n]=o=>{const i=new URL(o,s).href;let r=l.get(i);if(!r){const s=t.createElement("script");s.type="module",s.src=URL.createObjectURL(new Blob([`import * as m from '${i}'; window.${n}.m = m;`],{type:"application/javascript"})),r=new Promise(t=>{s.onload=()=>{t(e[n].m),s.remove()}}),l.set(i,r),t.head.appendChild(s)}return r}}},M="http://www.w3.org/1999/xlink",x=new WeakMap,C=e=>"sc-"+e,P=(e,t,...s)=>{let n,o,l=null,i=!1,r=!1,c=[];const a=t=>{for(let s=0;s<t.length;s++)l=t[s],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!U(l))&&(l=String(l)),i&&r?c[c.length-1].l+=l:c.push(i?{t:0,l}:l),r=i)};if(a(s),t){n=t.key||void 0,o=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,T);const f={t:0,i:e,u:c.length>0?c:null,$:void 0,p:t};return f.h=n,f.v=o,f},E={},T={forEach:(e,t)=>e.map(A).forEach(t),map:(e,t)=>e.map(A).map(t).map(D)},A=e=>({vattrs:e.p,vchildren:e.u,vkey:e.h,vname:e.v,vtag:e.i,vtext:e.l}),D=e=>({t:0,p:e.vattrs,u:e.vchildren,h:e.vkey,v:e.vname,i:e.vtag,l:e.vtext}),F=(e,t,n,o,l,i)=>{if(n!==o)if("class"!==t||l)if("style"===t){for(const t in n)o&&null!=o[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)n&&o[t]===n[t]||(t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if("key"===t);else if("ref"===t)o&&o(e);else if(t.startsWith("on")&&!a(e,t))t=a(e,S(t))?S(t.substring(2)):S(t[2])+t.substring(3),n&&s.rel(e,t,n,!1),o&&s.ael(e,t,o,!1);else{const s=a(e,t),n=U(o);if((s||n&&null!==o)&&!l)try{e[t]=null==o&&-1===e.tagName.indexOf("-")?"":o}catch(e){}const r=!(!l||t===(t=t.replace(/^xlink\:?/,"")));null==o||!1===o?r?e.removeAttributeNS(M,S(t)):e.removeAttribute(t):(!s||4&i||l)&&!n&&(o=!0===o?"":o.toString(),r?e.setAttributeNS(M,S(t),o):e.setAttribute(t,o))}else{const t=W(n),s=W(e.className).filter(e=>!t.includes(e));e.className=s.concat(W(o).filter(e=>!s.includes(e))).join(" ")}},W=e=>e?e.split(" "):[],q=(e,t,s,n)=>{const o=11===t.$.nodeType&&t.$.host?t.$.host:t.$,l=e&&e.p||k,i=t.p||k;for(n in l)null==i[n]&&null!=l[n]&&F(o,n,l[n],void 0,s,t.t);for(n in i)F(o,n,l[n],i[n],s,t.t)};let N,B,H=!1,V=!1,z=!1,G=!1;const I=(e,s,n)=>{let o,l,i,r=s.u[n],c=0;if(H||(z=!0,"slot"===r.i&&(r.t|=r.u?2:1)),j(r.l))r.$=t.createTextNode(r.l);else if(1&r.t)r.$=t.createTextNode("");else{if(o=r.$=G||"svg"===r.i?t.createElementNS("http://www.w3.org/2000/svg",r.i):t.createElement(2&r.t?"slot-fb":r.i),q(null,r,G="svg"===r.i||"foreignObject"!==r.i&&G),r.u)for(c=0;c<r.u.length;++c)(l=I(e,r,c,o))&&o.appendChild(l);"svg"===r.i&&(G=!1)}return r.$["s-hn"]=B,3&r.t&&(r.$["s-sr"]=!0,r.$["s-cr"]=N,r.$["s-sn"]=r.v||"",(i=e&&e.u&&e.u[n])&&i.i===r.i&&e.$&&J(e.$,!1)),r.$},J=(e,t)=>{s.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const s=n[e];s["s-hn"]!==B&&s["s-ol"]&&(Z(s).insertBefore(s,Y(s)),s["s-ol"].remove(),s["s-ol"]=void 0,z=!0),t&&J(s,t)}s.t&=-2},K=(e,t,s,n,o,l)=>{let i,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(;o<=l;++o)n[o]&&(i=I(null,s,o,e))&&(n[o].$=i,r.insertBefore(i,Y(t)))},Q=(e,t,s,n)=>{for(;t<=s;++t)j(e[t])&&(n=e[t].$,oe(e[t],!0),V=!0,n["s-ol"]?n["s-ol"].remove():J(n,!0),n.remove())},X=(e,t)=>e.i===t.i&&("slot"===e.i?e.v===t.v:e.h===t.h),Y=e=>e&&e["s-ol"]||e,Z=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,ee=(e,t)=>{const s=t.$=e.$,n=e.u,o=t.u;let l;G=s&&j(s.parentNode)&&void 0!==s.ownerSVGElement,G="svg"===t.i||"foreignObject"!==t.i&&G,j(t.l)?(l=s["s-cr"])?l.parentNode.textContent=t.l:e.l!==t.l&&(s.textContent=t.l):("slot"===t.i||q(e,t,G),j(n)&&j(o)?((e,t,s,n)=>{let o,l,i=0,r=0,c=0,a=0,f=t.length-1,u=t[0],d=t[f],$=n.length-1,p=n[0],m=n[$];for(;i<=f&&r<=$;)if(null==u)u=t[++i];else if(null==d)d=t[--f];else if(null==p)p=n[++r];else if(null==m)m=n[--$];else if(X(u,p))ee(u,p),u=t[++i],p=n[++r];else if(X(d,m))ee(d,m),d=t[--f],m=n[--$];else if(X(u,m))"slot"!==u.i&&"slot"!==m.i||J(u.$.parentNode,!1),ee(u,m),e.insertBefore(u.$,d.$.nextSibling),u=t[++i],m=n[--$];else if(X(d,p))"slot"!==u.i&&"slot"!==m.i||J(d.$.parentNode,!1),ee(d,p),e.insertBefore(d.$,u.$),d=t[--f],p=n[++r];else{for(c=-1,a=i;a<=f;++a)if(t[a]&&j(t[a].h)&&t[a].h===p.h){c=a;break}c>=0?((l=t[c]).i!==p.i?o=I(t&&t[r],s,c,e):(ee(l,p),t[c]=void 0,o=l.$),p=n[++r]):(o=I(t&&t[r],s,r,e),p=n[++r]),o&&Z(u.$).insertBefore(o,Y(u.$))}i>f?K(e,null==n[$+1]?null:n[$+1].$,s,n,r,$):r>$&&Q(t,i,f)})(s,n,t,o):j(o)?(j(e.l)&&(s.textContent=""),K(s,null,t,o,0,o.length-1)):j(n)&&Q(n,0,n.length-1)),G&&"svg"===t.i&&(G=!1)},te=(e,t,s,n,o,l,i,r)=>{for(n=0,o=(s=e.childNodes).length;n<o;n++)if(1===(t=s[n]).nodeType){if(t["s-sr"])for(i=t["s-sn"],t.hidden=!1,l=0;l<o;l++)if(s[l]["s-hn"]!==t["s-hn"])if(r=s[l].nodeType,""!==i){if(1===r&&i===s[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==s[l].textContent.trim()){t.hidden=!0;break}te(t)}},se=[],ne=e=>{let t,s,n,o,l=e.childNodes,i=l.length,r=0,c=0,a=0;for(i=l.length;r<i;r++){if((t=l[r])["s-sr"]&&(s=t["s-cr"]))for(o=t["s-sn"],c=(n=s.parentNode.childNodes).length-1;c>=0;c--)(s=n[c])["s-cn"]||s["s-nr"]||s["s-hn"]===t["s-hn"]||((3===(a=s.nodeType)||8===a)&&""===o||1===a&&null===s.getAttribute("slot")&&""===o||1===a&&s.getAttribute("slot")===o)&&(se.some(e=>e.nodeToRelocate===s)||(V=!0,s["s-sn"]=o,se.push({slotRefNode:t,nodeToRelocate:s})));1===t.nodeType&&ne(t)}},oe=(e,t)=>{e&&(e.p&&e.p.ref&&e.p.ref(t?null:e.$),e.u&&e.u.forEach(e=>{oe(e,t)}))},le=async(e,t)=>{if(e&&e[t])try{await e[t]()}catch(e){f(e)}},ie=async(e,t,s,n)=>{t.t|=16;const o=t.o;n&&await le(o,"componentWillLoad"),_(()=>re(e,t,s,o,n))},re=(e,n,o,l,i)=>{n.t&=-17,e["s-lr"]=!1,i&&((e,s)=>{((e,n,o,l)=>{let i=C(s.g),r=u.get(i);if(e=11===e.nodeType?e:t,r)if("string"==typeof r){let s,n=x.get(e=e.head||e);if(n||x.set(e,n=new Set),!n.has(i)){if(d){const e=(s=d.createHostStyle(l,i,r))["s-sc"];e&&(i=e,n=null)}else(s=t.createElement("style")).innerHTML=r;e.insertBefore(s,e.querySelector("link")),n&&n.add(i)}}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r])})(e.getRootNode(),0,0,e)})(e,o),n.t|=4;try{((e,n,o,l)=>{const i=n._||{t:0};if(B=S(e.tagName),(e=>e&&e.i===E)(l)?l.i=null:l=P(null,null,l),o.k&&(l.p=l.p||{},o.k.forEach(([t,s])=>l.p[s]=e[t])),l.t|=4,n._=l,l.$=i.$=e,N=e["s-cr"],H=!1,z=V=!1,ee(i,l),z){ne(l.$);for(let e=0;e<se.length;e++){const s=se[e];if(!s.nodeToRelocate["s-ol"]){const e=t.createTextNode("");e["s-nr"]=s.nodeToRelocate,s.nodeToRelocate.parentNode.insertBefore(s.nodeToRelocate["s-ol"]=e,s.nodeToRelocate)}}s.t|=1;for(let e=0;e<se.length;e++){const t=se[e],s=t.slotRefNode.parentNode;let n=t.slotRefNode.nextSibling,o=t.nodeToRelocate["s-ol"];for(;o=o.previousSibling;){let e=o["s-nr"];if(e&&e&&e["s-sn"]===t.nodeToRelocate["s-sn"]&&s===e.parentNode&&(e=e.nextSibling)&&e&&!e["s-nr"]){n=e;break}}(!n&&s!==t.nodeToRelocate.parentNode||t.nodeToRelocate.nextSibling!==n)&&t.nodeToRelocate!==n&&s.insertBefore(t.nodeToRelocate,n)}s.t&=-2}V&&te(l.$),se.length=0})(e,n,o,l.render&&l.render())}catch(e){f(e)}n.t&=-5,d&&d.updateHost(e),e["s-lr"]=!0,n.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),ce(e,n)},ce=(e,n,o)=>{if(!e["s-al"]){const l=n.o,i=n.j;512&n.t?le(l,"componentDidUpdate"):(n.t|=512,e.classList.add("hydrated"),le(l,"componentDidLoad"),n.S(e),i||(t.documentElement.classList.add("hydrated"),setTimeout(()=>s.t|=2,999))),i&&((o=i["s-al"])&&(o.delete(e),0===o.size&&(i["s-al"]=void 0,i["s-init"]())),n.j=void 0)}},ae=(e,t,s)=>{if(t.U){e.watchers&&(t.R=e.watchers);const n=Object.entries(t.U),o=e.prototype;if(n.forEach(([e,[n]])=>{(31&n||2&s&&32&n)&&Object.defineProperty(o,e,{get(){return((e,t)=>r(e).L.get(t))(this,e)},set(s){((e,t,s,n)=>{const o=r(this),l=o.O,i=o.L.get(t),c=o.t;if(!((s=((e,t)=>null==e||U(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(s,n.U[t][0]))===i||8&c&&void 0!==i)&&(o.L.set(t,s),o.o)){if(n.R&&1==(9&c)){const e=n.R[t];e&&e.forEach(e=>{try{o.o[e].call(o.o,s,i,t)}catch(e){f(e)}})}2==(22&c)&&ie(l,o,n,!1)}})(0,e,s,t)},configurable:!0,enumerable:!0})}),1&s){const s=new Map;o.attributeChangedCallback=function(e,t,n){const o=s.get(e);this[o]=(null!==n||"boolean"!=typeof this[o])&&n},e.observedAttributes=n.filter(([e,t])=>15&t[0]).map(([e,n])=>{const o=n[1]||e;return s.set(o,e),512&n[0]&&t.k.push([e,o]),o})}}return e},fe=async(e,t,s,n,l)=>{if(0==(256&t.t)){t.t|=256,(l=await(e=>__sc_import_docssite(`./${e.M}.entry.js`).then(t=>t[e.g.replace(/-/g,"_")],f))(s)).isProxied||(s.R=l.watchers,ae(l,s,2),l.isProxied=!0),t.t|=8;try{new l(t)}catch(e){f(e)}if(t.t&=-9,ue(t.o),!l.isStyleRegistered&&l.style){let e=l.style;((e,t,s)=>{let n=u.get(e);o&&s?(n=n||new CSSStyleSheet).replace(t):n=t,u.set(e,n)})(C(s.g),e,!!(1&s.t)),l.isStyleRegistered=!0}}const i=t.j;i&&!i["s-lr"]&&i["s-rc"]?i["s-rc"].push(()=>fe(e,t,s)):ie(e,t,s,!0)},ue=()=>{},de=(o,l={})=>{const c=[],a=l.exclude||[],u=t.head,$=e.customElements,p=u.querySelector("meta[charset]"),m=t.createElement("style");Object.assign(s,l),s.s=new URL(l.resourcesUrl||"/",e.location.href).href,l.syncQueue&&(s.t|=4),o.forEach(o=>o[1].forEach(l=>{const u={t:l[0],g:l[1],U:l[2],C:l[3],k:[],R:{}},p=u.g;u.M=o[0],a.includes(p)||$.get(p)||(c.push(p),$.define(p,ae(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,O:e,L:new Map};t.P=new Promise(e=>t.S=e),i.set(e,t)}})(e)}connectedCallback(){((o,l)=>{if(0==(1&s.t)){const i=r(o);if(l.C&&(i.T=((o,i)=>{const r=l.C.map(([l,r,c])=>{const a=((s,n)=>8&n?e:32&n?t.body:s)(o,l),u=((e,t)=>s=>e.o?e.o[t](s):e.P.then(()=>e.o[t](s)).catch(f))(i,c),d=(e=>n?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e))(l);return s.ael(a,r,u,d),()=>s.rel(a,r,u,d)});return()=>r.forEach(e=>e())})(o,i)),!(1&i.t)){let e;i.t|=1,e||4&l.t&&((e,s)=>{let n;n="",(s=e["s-cr"]=t.createComment(""))["s-cn"]=!0,e.insertBefore(s,e.firstChild)})(o);{let e=o;for(;e=e.parentNode||e.host;)if(e["s-init"]&&!e["s-lr"]){i.j=e,(e["s-al"]=e["s-al"]||new Set).add(o);break}}l.U&&Object.entries(l.U).forEach(([e,[t]])=>{if(31&t&&o.hasOwnProperty(e)){const t=o[e];delete o[e],o[e]=t}}),fe(o,i,l)}ue(i.o)}})(this,u)}disconnectedCallback(){(e=>{if(0==(1&s.t)){const t=r(e);t.T&&(t.T(),t.T=void 0),d&&d.removeHost(e),le(t.o,"componentDidUnload")}})(this)}"s-init"(){const e=r(this);e.o&&ce(this,e)}"s-hmr"(e){}forceUpdate(){ie(this,r(this),u,!1)}componentOnReady(){return r(this).P}},u,1)))})),m.innerHTML=c+"{visibility:hidden}.hydrated{visibility:inherit}",m.setAttribute("data-styles",""),u.insertBefore(m,p?p.nextSibling:u.firstChild)},$e=(e,t,s)=>{const n=me(e);return{emit:e=>n.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&s),composed:!!(2&s),cancelable:!!(1&s),detail:e}))}},pe=(n,o)=>o in l?l[o]:"window"===o?e:"document"===o?t:"isServer"!==o&&"isPrerender"!==o&&("isClient"===o||("resourcesUrl"===o||"publicPath"===o?(()=>{const t=new URL(".",s.s);return t.origin!==e.location.origin?t.href:t.pathname})():"queue"===o?{write:_,read:g,tick:{then:e=>(e=>Promise.resolve().then(e))(e)}}:void 0)),me=e=>r(e).O;export{R as a,de as b,$e as c,pe as d,me as g,P as h,L as p,c as r};