import{g as ue,w as pe,a as le,r as d,_ as q,b as H,c as D,d as Q,I as fe,j as K,e as h,u as R}from"./index-11085d1a.js";import{A as B}from"./AnimatedText-3c618d39.js";import{B as ve}from"./Button-f772ca9a.js";import{G}from"./GeneralLink-a6dfc4c2.js";function me(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function U(e,n){if(e==null)return{};var t=me(e,n),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var ye={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const ge=ue(ye);var be=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function z(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(ge[t[1]]||e.charAt(e.length-2)==="/")&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("-->");return{type:"comment",comment:r!==-1?e.slice(4,r):""}}for(var o=new RegExp(be),a=null;(a=o.exec(e))!==null;)if(a[0].trim())if(a[1]){var u=a[1].trim(),l=[u,""];u.indexOf("=")>-1&&(l=u.split("=")),n.attrs[l[0]]=l[1],o.lastIndex--}else a[2]&&(n.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return n}var he=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,Oe=/^\s*$/,de=Object.create(null);function _(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(t){var r=[];for(var o in t)r.push(o+'="'+t[o]+'"');return r.length?" "+r.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(_,"")+"</"+n.name+">";case"comment":return e+"<!--"+n.comment+"-->"}}var je={parse:function(e,n){n||(n={}),n.components||(n.components=de);var t,r=[],o=[],a=-1,u=!1;if(e.indexOf("<")!==0){var l=e.indexOf("<");r.push({type:"text",content:l===-1?e:e.substring(0,l)})}return e.replace(he,function(v,j){if(u){if(v!=="</"+t.name+">")return;u=!1}var x,E=v.charAt(1)!=="/",P=v.startsWith("<!--"),g=j+v.length,O=e.charAt(g);if(P){var N=z(v);return a<0?(r.push(N),r):((x=o[a]).children.push(N),r)}if(E&&(a++,(t=z(v)).type==="tag"&&n.components[t.name]&&(t.type="component",u=!0),t.voidElement||u||!O||O==="<"||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),a===0&&r.push(t),(x=o[a-1])&&x.children.push(t),o[a]=t),(!E||t.voidElement)&&(a>-1&&(t.voidElement||t.name===v.slice(2,-1))&&(a--,t=a===-1?r:o[a]),!u&&O!=="<"&&O)){x=a===-1?r:o[a].children;var c=e.indexOf("<",g),y=e.slice(g,c===-1?void 0:c);Oe.test(y)&&(y=" "),(c>-1&&a+x.length>=0||y!==" ")&&x.push({type:"text",content:y})}}),r},stringify:function(e){return e.reduce(function(n,t){return n+_("",t)},"")}},xe=["format"],Ee=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?J(Object(t),!0).forEach(function(r){q(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function I(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function W(e){return e?e.props?e.props.children:e.children:[]}function we(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(function(n){return d.isValidElement(n)})}function S(e){return Array.isArray(e)?e:[e]}function Pe(e,n){var t=m({},n);return t.props=Object.assign(e.props,n.props),t}function ee(e,n){if(!e)return"";var t="",r=S(e),o=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return r.forEach(function(a,u){if(typeof a=="string")t+="".concat(a);else if(d.isValidElement(a)){var l=Object.keys(a.props).length,v=o.indexOf(a.type)>-1,j=a.props.children;if(!j&&v&&l===0)t+="<".concat(a.type,"/>");else if(!j&&(!v||l!==0))t+="<".concat(u,"></").concat(u,">");else if(a.props.i18nIsDynamicList)t+="<".concat(u,"></").concat(u,">");else if(v&&l===1&&typeof j=="string")t+="<".concat(a.type,">").concat(j,"</").concat(a.type,">");else{var x=ee(j,n);t+="<".concat(u,">").concat(x,"</").concat(u,">")}}else if(a===null)H("Trans: the passed in value is invalid - seems you passed in a null child.");else if(D(a)==="object"){var E=a.format,P=U(a,xe),g=Object.keys(P);if(g.length===1){var O=E?"".concat(g[0],", ").concat(E):g[0];t+="{{".concat(O,"}}")}else H("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",a)}else H("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",a)}),t}function ke(e,n,t,r,o,a){if(n==="")return[];var u=r.transKeepBasicHtmlNodesFor||[],l=n&&new RegExp(u.join("|")).test(n);if(!e&&!l)return[n];var v={};function j(c){var y=S(c);y.forEach(function(i){typeof i!="string"&&(I(i)?j(W(i)):D(i)==="object"&&!d.isValidElement(i)&&Object.assign(v,i))})}j(e);var x=je.parse("<0>".concat(n,"</0>")),E=m(m({},v),o);function P(c,y,i){var p=W(c),w=O(p,y.children,i);return we(p)&&w.length===0?p:w}function g(c,y,i,p,w){c.dummy&&(c.children=y),i.push(d.cloneElement(c,m(m({},c.props),{},{key:p}),w?void 0:y))}function O(c,y,i){var p=S(c),w=S(y);return w.reduce(function(b,s,k){var A=s.children&&s.children[0]&&s.children[0].content&&t.services.interpolator.interpolate(s.children[0].content,E,t.language);if(s.type==="tag"){var T=p[parseInt(s.name,10)];!T&&i.length===1&&i[0][s.name]&&(T=i[0][s.name]),T||(T={});var f=Object.keys(s.attrs).length!==0?Pe({props:s.attrs},T):T,$=d.isValidElement(f),F=$&&I(s,!0)&&!s.voidElement,te=l&&D(f)==="object"&&f.dummy&&!$,ne=D(e)==="object"&&e!==null&&Object.hasOwnProperty.call(e,s.name);if(typeof f=="string"){var re=t.services.interpolator.interpolate(f,E,t.language);b.push(re)}else if(I(f)||F){var ae=P(f,s,i);g(f,ae,b,k)}else if(te){var se=O(p,s.children,i);b.push(d.cloneElement(f,m(m({},f.props),{},{key:k}),se))}else if(Number.isNaN(parseFloat(s.name)))if(ne){var oe=P(f,s,i);g(f,oe,b,k,s.voidElement)}else if(r.transSupportBasicHtmlNodes&&u.indexOf(s.name)>-1)if(s.voidElement)b.push(d.createElement(s.name,{key:"".concat(s.name,"-").concat(k)}));else{var ie=O(p,s.children,i);b.push(d.createElement(s.name,{key:"".concat(s.name,"-").concat(k)},ie))}else if(s.voidElement)b.push("<".concat(s.name," />"));else{var ce=O(p,s.children,i);b.push("<".concat(s.name,">").concat(ce,"</").concat(s.name,">"))}else if(D(f)==="object"&&!$){var M=s.children[0]?A:null;M&&b.push(M)}else s.children.length===1&&A?b.push(d.cloneElement(f,m(m({},f.props),{},{key:k}),A)):b.push(d.cloneElement(f,m(m({},f.props),{},{key:k})))}else if(s.type==="text"){var L=r.transWrapTextNodes,C=a?r.unescape(t.services.interpolator.interpolate(s.content,E,t.language)):t.services.interpolator.interpolate(s.content,E,t.language);L?b.push(d.createElement(L,{key:"".concat(s.name,"-").concat(k)},C)):b.push(C)}return b},[])}var N=O([{dummy:!0,children:e||[]}],x,S(e||[]));return W(N[0])}function Ne(e){var n=e.children,t=e.count,r=e.parent,o=e.i18nKey,a=e.context,u=e.tOptions,l=u===void 0?{}:u,v=e.values,j=e.defaults,x=e.components,E=e.ns,P=e.i18n,g=e.t,O=e.shouldUnescape,N=U(e,Ee),c=P||Q();if(!c)return pe("You will need to pass in an i18next instance by using i18nextReactModule"),n;var y=g||c.t.bind(c)||function(F){return F};a&&(l.context=a);var i=m(m({},le()),c.options&&c.options.react),p=E||y.ns||c.options&&c.options.defaultNS;p=typeof p=="string"?[p]:p||["translation"];var w=j||ee(n,i)||i.transEmptyNodeValue||o,b=i.hashTransKey,s=o||(b?b(w):w),k=v?l.interpolation:{interpolation:m(m({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},A=m(m(m(m({},l),{},{count:t},v),k),{},{defaultValue:w,ns:p}),T=s?y(s,A):w,f=ke(x||n,T,c,i,A,O),$=r!==void 0?r:i.defaultTransParent;return $?d.createElement($,N,f):f}var Te=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Ae(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?X(Object(t),!0).forEach(function(r){q(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Y(e){var n=e.children,t=e.count,r=e.parent,o=e.i18nKey,a=e.context,u=e.tOptions,l=u===void 0?{}:u,v=e.values,j=e.defaults,x=e.components,E=e.ns,P=e.i18n,g=e.t,O=e.shouldUnescape,N=U(e,Te),c=d.useContext(fe)||{},y=c.i18n,i=c.defaultNS,p=P||y||Q(),w=g||p&&p.t.bind(p);return Ne(Ae({children:n,count:t,parent:r,i18nKey:o,context:a,tOptions:l,values:v,defaults:j,components:x,ns:E||w&&w.ns||i||p&&p.options&&p.options.defaultNS,i18n:p,t:g,shouldUnescape:O},N))}function $e(){return K("div",{className:"hologram-wrapper",children:[h("div",{className:"image"}),h("div",{className:"hologram"})]})}const V=["developer","engineer"],Z=2e3;function De(){const[e,n]=d.useState(0);let t;return d.useEffect(()=>(t=setInterval(()=>{n(r=>{const o=r+1;return o>V.length-1?0:o})},Z),()=>{clearInterval(t)}),[]),K("div",{className:"text-wrapper",children:[h("span",{className:"main-text",children:"I’m a "}),h("span",{className:"typing-text",style:{"--timing":`${Z}ms`,"--steps":`${V[e].length}`},children:V[e]})]})}function Se({text:e}){const{t:n}=R();return h("div",{className:"water-mark",children:h("span",{className:"water-mark-text",children:n(`waterMark.${e}`)})})}function Ie(){const{t:e}=R();return K("div",{className:"home-page",children:[K("div",{className:"description",children:[h(Se,{text:"hello"}),h(B,{children:e("my-description.introduce")}),h(De,{}),h(B,{children:h(Y,{i18nKey:"my-description.source",components:{CodeLink:h(G,{navigateTo:"https://github.com/EmirDelicR/curriculum-v2"})}})}),h(B,{children:h(Y,{i18nKey:"my-description.mail",components:{MailLink:h(G,{navigateTo:"mailto:emirdelictbf@gmail.com?subject=Web-site mail"})}})}),h(ve,{isDownloadButton:!0})]}),h($e,{})]})}export{Ie as default};