import{c as e,a as t,b as r,r as a,d as n,o as s,u as o,e as i,g as l,$ as c,f as d,h as u,i as g,j as h,k as f,l as p,m,S as y}from"./vendor-Bc0VH6q0.js";const b="_$DX_DELEGATE";function x(t,r,a,n={}){let s;return e((e=>{s=e,r===document?t():A(r,t(),r.firstChild?null:void 0,a)}),n.owner),()=>{s(),r.textContent=""}}function v(e,t,r,a){let n;const s=()=>(n||(n=(()=>{const t=document.createElement("template");return t.innerHTML=e,t.content.firstChild})())).cloneNode(!0);return s.cloneNode=s,s}function k(e,t=window.document){const r=t[b]||(t[b]=new Set);for(let a=0,n=e.length;a<n;a++){const n=e[a];r.has(n)||(r.add(n),t.addEventListener(n,M))}}function w(e,t,r){null==r?e.removeAttribute(t):e.setAttribute(t,r)}function C(e,t){null==t?e.removeAttribute("class"):e.className=t}function S(e,t,r,a){Array.isArray(r)?(e[`$$${t}`]=r[0],e[`$$${t}Data`]=r[1]):e[`$$${t}`]=r}function j(e,t,r){return o((()=>e(t,r)))}function A(e,r,a,n){if(void 0===a||n||(n=[]),"function"!=typeof r)return $(e,r,n,a);t((t=>$(e,r(),t,a)),n)}function M(e){let t=e.target;const r=`$$${e.type}`,a=e.target,n=e.currentTarget,s=t=>Object.defineProperty(e,"target",{configurable:!0,value:t}),o=()=>{const a=t[r];if(a&&!t.disabled){const n=t[`${r}Data`];if(void 0!==n?a.call(t,n,e):a.call(t,e),e.cancelBubble)return}return t.host&&"string"!=typeof t.host&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},i=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>t||document}),e.composedPath){const r=e.composedPath();s(r[0]);for(let e=0;e<r.length-2&&(t=r[e],o());e++){if(t._$host){t=t._$host,i();break}if(t.parentNode===n)break}}else i();s(a)}function $(e,r,a,n,s){for(;"function"==typeof a;)a=a();if(r===a)return a;const o=typeof r,i=void 0!==n;if(e=i&&a[0]&&a[0].parentNode||e,"string"===o||"number"===o){if("number"===o&&(r=r.toString())===a)return a;if(i){let t=a[0];t&&3===t.nodeType?t.data!==r&&(t.data=r):t=document.createTextNode(r),a=P(e,a,n,t)}else a=""!==a&&"string"==typeof a?e.firstChild.data=r:e.textContent=r}else if(null==r||"boolean"===o)a=P(e,a,n);else{if("function"===o)return t((()=>{let t=r();for(;"function"==typeof t;)t=t();a=$(e,t,a,n)})),()=>a;if(Array.isArray(r)){const o=[],l=a&&Array.isArray(a);if(O(o,r,a,s))return t((()=>a=$(e,o,a,n,!0))),()=>a;if(0===o.length){if(a=P(e,a,n),i)return a}else l?0===a.length?T(e,o,n):function(e,t,r){let a=r.length,n=t.length,s=a,o=0,i=0,l=t[n-1].nextSibling,c=null;for(;o<n||i<s;)if(t[o]!==r[i]){for(;t[n-1]===r[s-1];)n--,s--;if(n===o){const t=s<a?i?r[i-1].nextSibling:r[s-i]:l;for(;i<s;)e.insertBefore(r[i++],t)}else if(s===i)for(;o<n;)c&&c.has(t[o])||t[o].remove(),o++;else if(t[o]===r[s-1]&&r[i]===t[n-1]){const a=t[--n].nextSibling;e.insertBefore(r[i++],t[o++].nextSibling),e.insertBefore(r[--s],a),t[n]=r[s]}else{if(!c){c=new Map;let e=i;for(;e<s;)c.set(r[e],e++)}const a=c.get(t[o]);if(null!=a)if(i<a&&a<s){let l,d=o,u=1;for(;++d<n&&d<s&&null!=(l=c.get(t[d]))&&l===a+u;)u++;if(u>a-i){const n=t[o];for(;i<a;)e.insertBefore(r[i++],n)}else e.replaceChild(r[i++],t[o++])}else o++;else t[o++].remove()}}else o++,i++}(e,a,o):(a&&P(e),T(e,o));a=o}else if(r.nodeType){if(Array.isArray(a)){if(i)return a=P(e,a,n,r);P(e,a,null,r)}else null!=a&&""!==a&&e.firstChild?e.replaceChild(r,e.firstChild):e.appendChild(r);a=r}}return a}function O(e,t,r,a){let n=!1;for(let s=0,o=t.length;s<o;s++){let o,i=t[s],l=r&&r[e.length];if(null==i||!0===i||!1===i);else if("object"==(o=typeof i)&&i.nodeType)e.push(i);else if(Array.isArray(i))n=O(e,i,l)||n;else if("function"===o)if(a){for(;"function"==typeof i;)i=i();n=O(e,Array.isArray(i)?i:[i],Array.isArray(l)?l:[l])||n}else e.push(i),n=!0;else{const t=String(i);l&&3===l.nodeType&&l.data===t?e.push(l):e.push(document.createTextNode(t))}}return n}function T(e,t,r=null){for(let a=0,n=t.length;a<n;a++)e.insertBefore(t[a],r)}function P(e,t,r,a){if(void 0===r)return e.textContent="";const n=a||document.createTextNode("");if(t.length){let a=!1;for(let s=t.length-1;s>=0;s--){const o=t[s];if(n!==o){const t=o.parentNode===e;a||s?t&&o.remove():t?e.replaceChild(n,o):e.insertBefore(n,r)}else a=!0}}else e.insertBefore(n,r);return[n]}function L(t){const{useShadow:o}=t,c=document.createTextNode(""),d=l();let u;return r((()=>{u||(u=a(d,(()=>i((()=>t.children)))));const r=t.mount||document.body;if(r instanceof HTMLHeadElement){const[t,a]=n(!1),o=()=>a(!0);e((e=>A(r,(()=>t()?e():u()),null))),s(o)}else{const e=function(e,t=!1){return t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e)}(t.isSVG?"g":"div",t.isSVG),a=o&&e.attachShadow?e.attachShadow({mode:"open"}):e;Object.defineProperty(e,"_$host",{get:()=>c.parentNode,configurable:!0}),A(a,u),r.appendChild(e),t.ref&&t.ref(e),s((()=>r.removeChild(e)))}}),void 0,{render:!0}),c}const _=Symbol("store-raw"),E=Symbol("store-node"),D=Symbol("store-has"),F=Symbol("store-self");function N(e){let t=e[c];if(!t&&(Object.defineProperty(e,c,{value:t=new Proxy(e,U)}),!Array.isArray(e))){const r=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let n=0,s=r.length;n<s;n++){const s=r[n];a[s].get&&Object.defineProperty(e,s,{enumerable:a[s].enumerable,get:a[s].get.bind(t)})}}return t}function B(e){let t;return null!=e&&"object"==typeof e&&(e[c]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function H(e,t=new Set){let r,a,n,s;if(r=null!=e&&e[_])return r;if(!B(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,s=e.length;r<s;r++)n=e[r],(a=H(n,t))!==n&&(e[r]=a)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let i=0,l=r.length;i<l;i++)s=r[i],o[s].get||(n=e[s],(a=H(n,t))!==n&&(e[s]=a))}return e}function I(e,t){let r=e[t];return r||Object.defineProperty(e,t,{value:r=Object.create(null)}),r}function V(e,t,r){if(e[t])return e[t];const[a,s]=n(r,{equals:!1,internal:!0});return a.$=s,e[t]=a}function z(e){g()&&V(I(e,E),F)()}const U={get(e,t,r){if(t===_)return e;if(t===c)return r;if(t===u)return z(e),r;const a=I(e,E),n=a[t];let s=n?n():e[t];if(t===E||t===D||"__proto__"===t)return s;if(!n){const r=Object.getOwnPropertyDescriptor(e,t);!g()||"function"==typeof s&&!e.hasOwnProperty(t)||r&&r.get||(s=V(a,t,s)())}return B(s)?N(s):s},has:(e,t)=>t===_||t===c||t===u||t===E||t===D||"__proto__"===t||(g()&&V(I(e,D),t)(),t in e),set:()=>!0,deleteProperty:()=>!0,ownKeys:function(e){return z(e),Reflect.ownKeys(e)},getOwnPropertyDescriptor:function(e,t){const r=Reflect.getOwnPropertyDescriptor(e,t);return r&&!r.get&&r.configurable&&t!==c&&t!==E?(delete r.value,delete r.writable,r.get=()=>e[c][t],r):r}};function R(e,t,r,a=!1){if(!a&&e[t]===r)return;const n=e[t],s=e.length;void 0===r?(delete e[t],e[D]&&e[D][t]&&void 0!==n&&e[D][t].$()):(e[t]=r,e[D]&&e[D][t]&&void 0===n&&e[D][t].$());let o,i=I(e,E);if((o=V(i,t,n))&&o.$((()=>r)),Array.isArray(e)&&e.length!==s){for(let t=e.length;t<s;t++)(o=i[t])&&o.$();(o=V(i,"length",s))&&o.$(e.length)}(o=i[F])&&o.$()}function q(e,t){const r=Object.keys(t);for(let a=0;a<r.length;a+=1){const n=r[a];R(e,n,t[n])}}function G(e,t,r=[]){let a,n=e;if(t.length>1){a=t.shift();const s=typeof a,o=Array.isArray(e);if(Array.isArray(a)){for(let n=0;n<a.length;n++)G(e,[a[n]].concat(t),r);return}if(o&&"function"===s){for(let n=0;n<e.length;n++)a(e[n],n)&&G(e,[n].concat(t),r);return}if(o&&"object"===s){const{from:n=0,to:s=e.length-1,by:o=1}=a;for(let a=n;a<=s;a+=o)G(e,[a].concat(t),r);return}if(t.length>1)return void G(e[a],t,[a].concat(r));n=e[a],r=[a].concat(r)}let s=t[0];"function"==typeof s&&(s=s(n,r),s===n)||void 0===a&&null==s||(s=H(s),void 0===a||B(n)&&B(s)&&!Array.isArray(s)?q(n,s):R(e,a,s))}function J(...[e,t]){const r=H(e||{}),a=Array.isArray(r);return[N(r),function(...e){d((()=>{a&&1===e.length?function(e,t){if("function"==typeof t&&(t=t(e)),t=H(t),Array.isArray(t)){if(e===t)return;let r=0,a=t.length;for(;r<a;r++){const a=t[r];e[r]!==a&&R(e,r,a)}R(e,"length",a)}else q(e,t)}(r,e[0]):G(r,e)}))}]}class K{constructor(){this.baseUrl="https://formulae.brew.sh/api"}async fetchAllFormulaMetadata(){try{const e=await fetch(`${this.baseUrl}/formula.json`);if(!e.ok)return new Map;const t=await e.json();return new Map(t.map((e=>[e.name,{version:e.versions?.stable||null,license:e.license||null,desc:e.desc||null,homepage:e.homepage||null,tap:e.tap||"homebrew/core"}])))}catch(e){return new Map}}async fetchAllCaskMetadata(){try{const e=await fetch(`${this.baseUrl}/cask.json`);if(!e.ok)return new Map;const t=await e.json();return new Map(t.map((e=>[e.token,{version:e.version||null,desc:e.desc||null,homepage:e.homepage||null,tap:e.tap||"homebrew/cask"}])))}catch(e){return new Map}}async fetchAnalyticsData(e,t="install-on-request"){try{const r=await fetch(`${this.baseUrl}/analytics/${t}/${e}.json`);if(!r.ok)throw new Error(`Failed to fetch analytics data for ${t}/${e}`);return await r.json()}catch(r){throw r}}generateBrewUrl(e,t,r){const a=r?"cask":"formula";if("homebrew/core"===t||"homebrew/cask"===t)return`https://formulae.brew.sh/${a}/${e}`;const n=t.split("/");if(2!==n.length)return`https://formulae.brew.sh/${a}/${e}`;const[s,o]=n;return`https://formulae.brew.sh/${a}/${s}/${o}/${e}`}}function W(e,t,r){const a=e/30,n=(t-e)/60,s=(r-t)/275;let o=0;r>=1.2*t&&(o=1-s/a);const i=100*Math.log2(12*a+5*n+s)+Math.log2(12*a+5*n+s)*o*10;return Math.round(i)}class X{constructor(){this.repository=new K}calculateTrend(e,t,r){return r-t<t/5?NaN:parseFloat((e/30/((r-e)/335)*100-100).toFixed(1))}async fetchAllData(e=!0,t=!0){try{const r={30:"30d",90:"90d",365:"365d"},a=[];e?(a.push(this.repository.fetchAllFormulaMetadata()),Object.values(r).forEach((e=>{a.push(this.repository.fetchAnalyticsData(e,"install-on-request"))}))):(a.push(Promise.resolve(new Map)),Object.values(r).forEach((()=>{a.push(Promise.resolve({items:[]}))}))),t?(a.push(this.repository.fetchAllCaskMetadata()),Object.values(r).forEach((e=>{a.push(this.repository.fetchAnalyticsData(e,"cask-install"))}))):(a.push(Promise.resolve(new Map)),Object.values(r).forEach((()=>{a.push(Promise.resolve({items:[]}))})));const n=await Promise.all(a),s=n[0],o={30:n[1],90:n[2],365:n[3]},i=n[4],l={30:n[5],90:n[6],365:n[7]},c=e?this.processFormulaData(s,o):[],d=t?this.processCaskData(i,l):[],u=c.filter((e=>e.count[30]>=(Z.thresholds?.[30]?.formula||0)&&e.count[90]>=(Z.thresholds?.[90]?.formula||0)&&e.count[365]>=(Z.thresholds?.[365]?.formula||0))),g=d.filter((e=>e.count[30]>=(Z.thresholds?.[30]?.cask||0)&&e.count[90]>=(Z.thresholds?.[90]?.cask||0)&&e.count[365]>=(Z.thresholds?.[365]?.cask||0))),h=[...u,...g];return{summary:Object.fromEntries([30,90,365].map((e=>[e,{date:{start:o[e]?.start_date||l[e]?.start_date||"",end:o[e]?.end_date||l[e]?.end_date||""},formula:{items:o[e]?.total_items||0,count:o[e]?.total_count||0},cask:{items:l[e]?.total_items||0,count:l[e]?.total_count||0}}]))),items:h}}catch(r){throw r}}ensureCountConsistency(e,t,r){return e=Math.max(0,e),t=Math.max(0,t),r=Math.max(0,r),{count365:e,count90:t=Math.min(t,e),count30:r=Math.min(r,t)}}processFormulaData(e,t){const r=new Map(t[90].items.map((e=>[e.formula,e]))),a=new Map(t[30].items.map((e=>[e.formula,e])));return t[365].items.map((t=>{const n=e.get(t.formula)||{},s=parseInt(t.count.replace(/,/g,"")),o=r.get(t.formula),i=parseInt(o?.count.replace(/,/g,"")||"0"),l=a.get(t.formula),c=parseInt(l?.count.replace(/,/g,"")||"0"),{count365:d,count90:u,count30:g}=this.ensureCountConsistency(s,i,c),h=W(g,u,d),f=this.calculateTrend(g,u,d);return{formula:t.formula,name:t.formula,count:{365:d,90:u,30:g},percent:{365:parseFloat(t.percent),90:parseFloat(o?.percent||"0"),30:parseFloat(l?.percent||"0")},score:h,trend:f,version:n.version||null,license:n.license||null,description:n.desc||null,homepage:n.homepage||null,tap:n.tap||"homebrew/core",brewUrl:this.repository.generateBrewUrl(t.formula,n.tap||"homebrew/core",!1),isCask:!1}}))}processCaskData(e,t){const r=new Map(t[90].items.filter((e=>e.cask)).map((e=>[e.cask,e]))),a=new Map(t[30].items.filter((e=>e.cask)).map((e=>[e.cask,e])));return t[365].items.map((t=>{const n=e.get(t.cask)||{},s=parseInt(t.count.replace(/,/g,"")),o=r.get(t.cask),i=parseInt(o?.count.replace(/,/g,"")||"0"),l=a.get(t.cask),c=parseInt(l?.count.replace(/,/g,"")||"0"),{count365:d,count90:u,count30:g}=this.ensureCountConsistency(s,i,c),h=W(g,u,d),f=this.calculateTrend(g,u,d);return{formula:t.cask,name:t.cask,count:{365:d,90:u,30:g},percent:{365:parseFloat(t.percent),90:parseFloat(o?.percent||"0"),30:parseFloat(l?.percent||"0")},score:h,trend:f,version:n.version||null,license:null,description:n.desc||null,homepage:n.homepage||null,tap:n.tap||"homebrew/cask",brewUrl:this.repository.generateBrewUrl(t.cask,n.tap||"homebrew/cask",!0),isCask:!0}}))}}const Y=new class{constructor(){this.stateManager=new X,[this.store,this.setStore]=J({period:30,search:"",isLoading:!1,error:null,thresholds:{30:{formula:50,cask:20},90:{formula:125,cask:50},365:{formula:250,cask:100}},summary:{30:{date:{start:"",end:""},formula:{items:0,count:0},cask:{items:0,count:0}},90:{date:{start:"",end:""},formula:{items:0,count:0},cask:{items:0,count:0}},365:{date:{start:"",end:""},formula:{items:0,count:0},cask:{items:0,count:0}}},items:[]})}async initialize(){this.setStore("isLoading",!0);try{const e=await this.stateManager.fetchAllData(!0,!0);return this.setStore("summary",e.summary),this.setStore("items",e.items),e.items}catch(e){return this.setStore("error",e?.message||"Failed to load data"),[]}finally{this.setStore("isLoading",!1)}}},Z=Y.store;Y.setStore;const Q=()=>Y.initialize(),ee=m();function te(e){const[t,r]=J({items:[],visible:!1});f((()=>{try{const e=localStorage.getItem("brewTrendCart");if(e){const t=JSON.parse(e);r("items",t)}}catch(e){}}));const a=e=>{try{localStorage.setItem("brewTrendCart",JSON.stringify(e))}catch(t){}},n={cart:t,addToCart:e=>{if(!t.items.some((t=>t.formula===e.formula))){const n=[...t.items,e];r("items",n),a(n)}},removeFromCart:e=>{const n=t.items.filter((t=>t.formula!==e.formula));r("items",n),a(n)},clearCart:()=>{r("items",[]),a([])},toggleCartVisibility:()=>{r("visible",!t.visible)},closeCart:()=>{r("visible",!1)},isInCart:e=>t.items.some((t=>t.formula===e.formula))};return p(ee.Provider,{value:n,get children(){return e.children}})}function re(){const e=h(ee);if(!e)throw new Error("useCart must be used within a CartProvider");return e}var ae=v('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5><path d="M5,6V16C5,18 6.5,19 8,19H14C15.5,19 17,18 17,16V6"stroke=currentColor fill="rgba(245, 158, 11, 0.3)"></path><path d="M17,6H5C5,4 6.5,3 8,3H14C15.5,3 17,4 17,6Z"stroke=currentColor fill=white></path><path d="M17,6V3C19,3 20,4.5 20,6V8C20,9.5 19,11 17,11"stroke=currentColor></path><path d="M7,8.5C9,8 11,10 13,9.5C15,9 16,8 16,8"stroke=currentColor stroke-linecap=round></path><path d=M7,12.5H15 stroke=currentColor stroke-linecap=round></path><path d=M7,15.5H15 stroke=currentColor stroke-linecap=round>');function ne(e){return r=ae(),t((()=>w(r,"class",e.class))),r;var r}var se=v('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5><ellipse cx=12 cy=6 rx=6 ry=2 fill="rgba(168, 85, 247, 0.2)"></ellipse><ellipse cx=12 cy=6 rx=6 ry=2 stroke=currentColor></ellipse><ellipse cx=12 cy=18 rx=6 ry=2 fill="rgba(168, 85, 247, 0.2)"></ellipse><ellipse cx=12 cy=18 rx=6 ry=2 stroke=currentColor></ellipse><line x1=6 y1=6 x2=6 y2=18 stroke=currentColor></line><line x1=18 y1=6 x2=18 y2=18 stroke=currentColor></line><line x1=8 y1=9 x2=8 y2=15 stroke=currentColor></line><line x1=12 y1=8 x2=12 y2=16 stroke=currentColor></line><line x1=16 y1=9 x2=16 y2=15 stroke=currentColor>');function oe(e){return r=se(),t((()=>w(r,"class",e.class))),r;var r}var ie=v('<ul class="divide-y divide-gray-200 dark:divide-gray-700">'),le=v('<div class="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Installation Command</h3><pre class="bg-gray-800 text-white p-3 rounded overflow-x-auto">'),ce=v('<svg xmlns=http://www.w3.org/2000/svg class="h-5 w-5 mr-1"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-8m-10 0v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6">'),de=v('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full mx-4 relative shadow-xl"><button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"aria-label="Close modal">✕</button><div class="flex items-center border-b border-gray-200 dark:border-gray-700 p-4 pb-4 mb-4"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Installation Cart (<!> <!>)</h2></div><div class="p-4 overflow-y-auto max-h-[60vh]"></div><div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 p-4"><div class="flex justify-between"><button class="px-3 py-1 rounded-md text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium flex items-center"><svg xmlns=http://www.w3.org/2000/svg class="h-5 w-5 mr-1"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>Clear Cart</button><div class="flex space-x-2"><button class="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200">Close</button><button class="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white flex items-center">'),ue=v('<div class="text-center py-8 text-gray-500 dark:text-gray-400">Your cart is empty. Add packages to generate installation commands.'),ge=v('<li class="py-3 flex justify-between items-center"><div class="flex items-center space-x-3"><span class="font-medium text-gray-900 dark:text-white"></span><span class="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs"></span></div><button class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"aria-label="Remove from cart"><svg xmlns=http://www.w3.org/2000/svg class="h-5 w-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">'),he=v('<svg xmlns=http://www.w3.org/2000/svg class="h-5 w-5 mr-1"viewBox="0 0 20 20"fill=currentColor><path fill-rule=evenodd d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"clip-rule=evenodd>');function fe(){const{cart:e,removeFromCart:r,clearCart:a,closeCart:o}=re(),[l,c]=n(!1);let d;const u=t=>{"Escape"===t.key&&e.visible&&o()},g=t=>{d&&!d.contains(t.target)&&e.visible&&o()};f((()=>{document.addEventListener("keydown",u),document.addEventListener("mousedown",g)})),s((()=>{document.removeEventListener("keydown",u),document.removeEventListener("mousedown",g)}));const h=()=>{const t=e.items.filter((e=>!e.isCask)).map((e=>e.formula)),r=e.items.filter((e=>e.isCask)).map((e=>e.formula));let a="";return t.length>0&&(a+=`brew install ${t.join(" ")}`),r.length>0&&(a&&(a+="\n"),a+=`brew install --cask ${r.join(" ")}`),a||"No packages selected"},m=async()=>{const e=h();try{await navigator.clipboard.writeText(e),c(!0),setTimeout((()=>c(!1)),3e3)}catch(t){}};return p(y,{get when(){return e.visible},get children(){var n=de(),s=n.firstChild,c=s.firstChild,u=c.nextSibling,g=u.firstChild,f=g.firstChild.nextSibling,b=f.nextSibling.nextSibling;b.nextSibling;var x=u.nextSibling,v=x.nextSibling.firstChild.firstChild,k=v.nextSibling.firstChild,w=k.nextSibling;return"function"==typeof d?j(d,s):d=s,S(c,"click",o),A(g,(()=>e.items.length),f),A(g,(()=>1===e.items.length?"package":"packages"),b),A(x,p(y,{get when(){return e.items.length>0},get fallback(){return ue()},get children(){return[(a=ie(),A(a,(()=>e.items.map((e=>{return a=ge(),n=a.firstChild,s=n.firstChild,o=s.nextSibling,l=n.nextSibling,A(n,(t=i((()=>!!e.isCask)),()=>t()?p(oe,{class:"w-5 h-5 text-purple-500"}):p(ne,{class:"w-5 h-5 text-amber-500"})),s),A(s,(()=>e.formula)),A(o,(()=>e.description)),l.$$click=()=>r(e),a;var t,a,n,s,o,l})))),a),(t=le(),A(t.firstChild.nextSibling,h),t)];var t,a}})),S(v,"click",a),S(k,"click",o),w.$$click=m,A(w,p(y,{get when(){return!l()},get fallback(){return[he(),"Copied!"]},get children(){return[ce(),"Copy Command"]}})),t((t=>{var r=0===e.items.length,a=0===e.items.length;return r!==t.e&&(v.disabled=t.e=r),a!==t.t&&(w.disabled=t.t=a),t}),{e:void 0,t:void 0}),n}})}k(["click"]);const pe=(e,t)=>{let r;return(...a)=>{clearTimeout(r),r=setTimeout((()=>e(...a)),t)}},me=(e,t)=>{let r;return(...a)=>{r||(e(...a),r=!0,setTimeout((()=>r=!1),t))}};var ye=v('<div class="flex items-center gap-2"><canvas width=73 height=25>'),be=v("<span>%");function xe(e){let a;const n=new X,o=i((()=>{const t=e.count;if(!t)return null;const r=(t[365]-t[90])/275,a=(t[90]-t[30])/60,n=t[30]/30,s=Math.max(r,a,n,.001),o=25;return{y1:o-r/s*o,y2:o-a/s*o,y3:o-n/s*o,w:73,h:o}})),l=me((()=>{if(!a)return;const e=a.getContext("2d"),{y1:t,y2:r,y3:n,w:s,h:i}=o();e.clearRect(0,0,s,i),e.beginPath(),e.moveTo(0,t),e.lineTo(55,t),e.lineTo(55,r),e.lineTo(67,r),e.lineTo(67,n),e.lineTo(s,n),e.strokeStyle="#F9A03C",e.lineWidth=2,e.stroke()}),16);r((()=>{o(),l();const e=new ResizeObserver(me((()=>{l()}),100));e.observe(a.parentElement),s((()=>e.disconnect()))}));const c=i((()=>e.trend??(e.withTrend?n.calculateTrend(e.count?.[30]||0,e.count?.[90]||0,e.count?.[365]||0):null))),d=i((()=>c()<0?"↓":c()>0?"↑":""));return g=ye(),h=g.firstChild,"function"==typeof a?j(a,h):a=h,h.style.setProperty("maxWidth","100%"),A(g,(u=i((()=>!(null==c()||!Number.isFinite(parseFloat(c()))))),()=>{return u()&&(e=be(),r=e.firstChild,A(e,d,r),A(e,(()=>Math.abs(c())),r),t((()=>C(e,"text-sm "+(c()>0?"text-green-600 dark:text-green-400":c()<0?"text-red-600 dark:text-red-400":"")))),e);var e,r}),null),g;var u,g,h}var ve=v('<div><h3 class="font-semibold text-gray-600 dark:text-gray-300 mb-2">Dependencies</h3><div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"><div class="flex flex-wrap gap-2">'),ke=v('<div><h3 class="font-semibold text-gray-600 dark:text-gray-300 mb-2">Caveats</h3><div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"><p class="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">'),we=v('<div class="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"><div class="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full mx-4 relative shadow-xl"><button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"aria-label="Close modal">✕</button><div class="flex items-center border-b border-gray-200 dark:border-gray-700 p-4 pb-4 mb-4"><div class=mr-3></div><div><h2 class="text-2xl font-bold text-gray-900 dark:text-white"></h2><p class="text-gray-600 dark:text-gray-300"></p></div></div><div class="p-4 overflow-y-auto max-h-[60vh]"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class=space-y-6><div><h3 class="font-semibold text-gray-600 dark:text-gray-300 mb-2">Package Details</h3><div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2"><div class="flex justify-between"><span class="text-gray-600 dark:text-gray-400">Version</span><span class="font-medium text-gray-900 dark:text-white"></span></div><div class="flex justify-between"><span class="text-gray-600 dark:text-gray-400">License</span><span class="font-medium text-gray-900 dark:text-white"></span></div><div class="flex justify-between"><span class="text-gray-600 dark:text-gray-400">Category</span><span class="font-medium text-gray-900 dark:text-white"></span></div><div class="flex justify-between"><span class="text-gray-600 dark:text-gray-400">Created</span><span class="font-medium text-gray-900 dark:text-white"></span></div><div class="flex justify-between"><span class="text-gray-600 dark:text-gray-400">Last Update</span><span class="font-medium text-gray-900 dark:text-white"></span></div></div></div></div><div class=space-y-6><div><h3 class="font-semibold text-gray-600 dark:text-gray-300 mb-2">Installation Statistics</h3><div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2"><div class="flex justify-between items-center"><span class="text-gray-600 dark:text-gray-400">30 Day Installs</span><span class="font-medium text-gray-900 dark:text-white"></span></div><div class="flex justify-between items-center"><span class="text-gray-600 dark:text-gray-400">90 Day Installs</span><span class="font-medium text-gray-900 dark:text-white"></span></div><div class="flex justify-between items-center"><span class="text-gray-600 dark:text-gray-400">365 Day Installs</span><span class="font-medium text-gray-900 dark:text-white"></span></div><div class="flex justify-between items-center pt-2"><span class="text-gray-600 dark:text-gray-400">Install Trend</span></div></div></div></div></div></div><div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 p-4"><div class="flex justify-between"><div class="flex space-x-4"><a target=_blank rel="noopener noreferrer"class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"><svg class="w-4 h-4 mr-1"fill=currentColor viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>Brew.sh</a></div><div class="flex space-x-2"><button class="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200">Close</button><button><svg xmlns=http://www.w3.org/2000/svg class="h-5 w-5 mr-1"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span>'),Ce=v('<span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-sm text-gray-800 dark:text-gray-200">'),Se=v('<a target=_blank rel="noopener noreferrer"class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"><svg class="w-4 h-4 mr-1"fill=currentColor viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>Homepage');function je(e){const{addToCart:a,removeFromCart:n,isInCart:o}=re();let l;r((()=>{e.package}));const c=t=>{"Escape"===t.key&&e.isOpen&&e.onClose()},d=t=>{l&&!l.contains(t.target)&&e.isOpen&&e.onClose()};f((()=>{document.addEventListener("keydown",c),document.addEventListener("mousedown",d)})),s((()=>{document.removeEventListener("keydown",c),document.removeEventListener("mousedown",d)}));const u=e=>{if(!e)return"Unknown";return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},g=()=>{o(e.package)?n(e.package):a(e.package)};return p(y,{get when(){return e.isOpen},get children(){var r=we(),a=r.firstChild,n=a.firstChild,s=n.nextSibling,c=s.firstChild,d=c.nextSibling.firstChild,h=d.nextSibling,f=s.nextSibling,m=f.firstChild.firstChild,b=m.firstChild.firstChild.nextSibling.firstChild,x=b.firstChild.nextSibling,v=b.nextSibling,k=v.firstChild.nextSibling,M=v.nextSibling,$=M.firstChild.nextSibling,O=M.nextSibling,T=O.firstChild.nextSibling,P=O.nextSibling.firstChild.nextSibling,L=m.nextSibling,_=L.firstChild.firstChild.nextSibling.firstChild,E=_.firstChild.nextSibling,D=_.nextSibling,F=D.firstChild.nextSibling,N=D.nextSibling,B=N.firstChild.nextSibling,H=N.nextSibling;H.firstChild;var I,V,z=f.nextSibling.firstChild.firstChild,U=z.firstChild,R=z.nextSibling.firstChild,q=R.nextSibling,G=q.firstChild.nextSibling;return"function"==typeof l?j(l,a):l=a,S(n,"click",e.onClose),A(c,(I=i((()=>!!e.package?.isCask)),()=>I()?p(oe,{class:"w-8 h-8 text-purple-500"}):p(ne,{class:"w-8 h-8 text-amber-500"}))),A(d,(()=>e.package?.formula)),A(h,(()=>e.package?.desc)),A(x,(()=>e.package?.version||"N/A")),A(k,(()=>e.package?.license||"N/A")),A($,(()=>e.package?.category||"N/A")),A(T,(()=>u(e.package?.created_at))),A(P,(()=>u(e.package?.updated_at))),A(m,p(y,{get when(){return e.package?.dependencies?.length},get children(){var t=ve();return A(t.firstChild.nextSibling.firstChild,(()=>e.package?.dependencies.map((e=>{return A(t=Ce(),e),t;var t})))),t}}),null),A(E,(()=>e.package?.count[30].toLocaleString())),A(F,(()=>e.package?.count[90].toLocaleString())),A(B,(()=>e.package?.count[365].toLocaleString())),A(H,p(xe,{get count(){return e.package?.count},get trend(){return e.package?.trend}}),null),A(L,p(y,{get when(){return e.package?.caveats},get children(){var t=ke();return A(t.firstChild.nextSibling.firstChild,(()=>e.package?.caveats)),t}}),null),A(z,(V=i((()=>!!e.package?.homepage)),()=>{return V()&&(r=Se(),t((()=>w(r,"href",e.package.homepage))),r);var r}),null),S(R,"click",e.onClose),q.$$click=g,A(G,(()=>o(e.package)?"Remove from Cart":"Add to Cart")),t((t=>{var r=e.package?.brewUrl,a="px-3 py-1 rounded-md flex items-center "+(o(e.package)?"bg-red-500 hover:bg-red-600 text-white":"bg-blue-500 hover:bg-blue-600 text-white");return r!==t.e&&w(U,"href",t.e=r),a!==t.t&&C(q,t.t=a),t}),{e:void 0,t:void 0}),r}})}k(["click"]);export{oe as C,X as H,ne as M,L as P,xe as T,S as a,pe as b,C as c,k as d,j as e,J as f,Z as g,je as h,A as i,fe as j,te as k,Q as l,x as r,w as s,v as t,re as u};
