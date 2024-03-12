import{g as ie,w as ce,a as ue,r as w,_ as Y,b as F,c as K,d as Z,I as pe,j as W,e as E,u as q}from"./index-7fb3589a.js";import{A as H}from"./AnimatedText-358e68b8.js";import{B as le}from"./Button-de0c91ac.js";import{G as I}from"./GeneralLink-3acd8c2a.js";function fe(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function U(e,n){if(e==null)return{};var t=fe(e,n),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var ve={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const me=ie(ve);var ye=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function G(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(me[t[1]]||e.charAt(e.length-2)==="/")&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("-->");return{type:"comment",comment:r!==-1?e.slice(4,r):""}}for(var o=new RegExp(ye),a=null;(a=o.exec(e))!==null;)if(a[0].trim())if(a[1]){var u=a[1].trim(),l=[u,""];u.indexOf("=")>-1&&(l=u.split("=")),n.attrs[l[0]]=l[1],o.lastIndex--}else a[2]&&(n.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return n}var ge=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,be=/^\s*$/,Oe=Object.create(null);function Q(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(t){var r=[];for(var o in t)r.push(o+'="'+t[o]+'"');return r.length?" "+r.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(Q,"")+"</"+n.name+">";case"comment":return e+"<!--"+n.comment+"-->"}}var he={parse:function(e,n){n||(n={}),n.components||(n.components=Oe);var t,r=[],o=[],a=-1,u=!1;if(e.indexOf("<")!==0){var l=e.indexOf("<");r.push({type:"text",content:l===-1?e:e.substring(0,l)})}return e.replace(ge,function(v,h){if(u){if(v!=="</"+t.name+">")return;u=!1}var d,j=v.charAt(1)!=="/",P=v.startsWith("<!--"),g=h+v.length,O=e.charAt(g);if(P){var N=G(v);return a<0?(r.push(N),r):((d=o[a]).children.push(N),r)}if(j&&(a++,(t=G(v)).type==="tag"&&n.components[t.name]&&(t.type="component",u=!0),t.voidElement||u||!O||O==="<"||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),a===0&&r.push(t),(d=o[a-1])&&d.children.push(t),o[a]=t),(!j||t.voidElement)&&(a>-1&&(t.voidElement||t.name===v.slice(2,-1))&&(a--,t=a===-1?r:o[a]),!u&&O!=="<"&&O)){d=a===-1?r:o[a].children;var c=e.indexOf("<",g),y=e.slice(g,c===-1?void 0:c);be.test(y)&&(y=" "),(c>-1&&a+d.length>=0||y!==" ")&&d.push({type:"text",content:y})}}),r},stringify:function(e){return e.reduce(function(n,t){return n+Q("",t)},"")}},de=["format"],je=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?z(Object(t),!0).forEach(function(r){Y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function B(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function V(e){return e?e.props?e.props.children:e.children:[]}function xe(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(function(n){return w.isValidElement(n)})}function S(e){return Array.isArray(e)?e:[e]}function Ee(e,n){var t=m({},n);return t.props=Object.assign(e.props,n.props),t}function R(e,n){if(!e)return"";var t="",r=S(e),o=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return r.forEach(function(a,u){if(typeof a=="string")t+="".concat(a);else if(w.isValidElement(a)){var l=Object.keys(a.props).length,v=o.indexOf(a.type)>-1,h=a.props.children;if(!h&&v&&l===0)t+="<".concat(a.type,"/>");else if(!h&&(!v||l!==0))t+="<".concat(u,"></").concat(u,">");else if(a.props.i18nIsDynamicList)t+="<".concat(u,"></").concat(u,">");else if(v&&l===1&&typeof h=="string")t+="<".concat(a.type,">").concat(h,"</").concat(a.type,">");else{var d=R(h,n);t+="<".concat(u,">").concat(d,"</").concat(u,">")}}else if(a===null)F("Trans: the passed in value is invalid - seems you passed in a null child.");else if(K(a)==="object"){var j=a.format,P=U(a,de),g=Object.keys(P);if(g.length===1){var O=j?"".concat(g[0],", ").concat(j):g[0];t+="{{".concat(O,"}}")}else F("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",a)}else F("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",a)}),t}function we(e,n,t,r,o,a){if(n==="")return[];var u=r.transKeepBasicHtmlNodesFor||[],l=n&&new RegExp(u.join("|")).test(n);if(!e&&!l)return[n];var v={};function h(c){var y=S(c);y.forEach(function(i){typeof i!="string"&&(B(i)?h(V(i)):K(i)==="object"&&!w.isValidElement(i)&&Object.assign(v,i))})}h(e);var d=he.parse("<0>".concat(n,"</0>")),j=m(m({},v),o);function P(c,y,i){var p=V(c),x=O(p,y.children,i);return xe(p)&&x.length===0?p:x}function g(c,y,i,p,x){c.dummy&&(c.children=y),i.push(w.cloneElement(c,m(m({},c.props),{},{key:p}),x?void 0:y))}function O(c,y,i){var p=S(c),x=S(y);return x.reduce(function(b,s,k){var T=s.children&&s.children[0]&&s.children[0].content&&t.services.interpolator.interpolate(s.children[0].content,j,t.language);if(s.type==="tag"){var A=p[parseInt(s.name,10)];!A&&i.length===1&&i[0][s.name]&&(A=i[0][s.name]),A||(A={});var f=Object.keys(s.attrs).length!==0?Ee({props:s.attrs},A):A,D=w.isValidElement(f),$=D&&B(s,!0)&&!s.voidElement,_=l&&K(f)==="object"&&f.dummy&&!D,ee=K(e)==="object"&&e!==null&&Object.hasOwnProperty.call(e,s.name);if(typeof f=="string"){var te=t.services.interpolator.interpolate(f,j,t.language);b.push(te)}else if(B(f)||$){var ne=P(f,s,i);g(f,ne,b,k)}else if(_){var re=O(p,s.children,i);b.push(w.cloneElement(f,m(m({},f.props),{},{key:k}),re))}else if(Number.isNaN(parseFloat(s.name)))if(ee){var ae=P(f,s,i);g(f,ae,b,k,s.voidElement)}else if(r.transSupportBasicHtmlNodes&&u.indexOf(s.name)>-1)if(s.voidElement)b.push(w.createElement(s.name,{key:"".concat(s.name,"-").concat(k)}));else{var se=O(p,s.children,i);b.push(w.createElement(s.name,{key:"".concat(s.name,"-").concat(k)},se))}else if(s.voidElement)b.push("<".concat(s.name," />"));else{var oe=O(p,s.children,i);b.push("<".concat(s.name,">").concat(oe,"</").concat(s.name,">"))}else if(K(f)==="object"&&!D){var L=s.children[0]?T:null;L&&b.push(L)}else s.children.length===1&&T?b.push(w.cloneElement(f,m(m({},f.props),{},{key:k}),T)):b.push(w.cloneElement(f,m(m({},f.props),{},{key:k})))}else if(s.type==="text"){var M=r.transWrapTextNodes,C=a?r.unescape(t.services.interpolator.interpolate(s.content,j,t.language)):t.services.interpolator.interpolate(s.content,j,t.language);M?b.push(w.createElement(M,{key:"".concat(s.name,"-").concat(k)},C)):b.push(C)}return b},[])}var N=O([{dummy:!0,children:e||[]}],d,S(e||[]));return V(N[0])}function Pe(e){var n=e.children,t=e.count,r=e.parent,o=e.i18nKey,a=e.context,u=e.tOptions,l=u===void 0?{}:u,v=e.values,h=e.defaults,d=e.components,j=e.ns,P=e.i18n,g=e.t,O=e.shouldUnescape,N=U(e,je),c=P||Z();if(!c)return ce("You will need to pass in an i18next instance by using i18nextReactModule"),n;var y=g||c.t.bind(c)||function($){return $};a&&(l.context=a);var i=m(m({},ue()),c.options&&c.options.react),p=j||y.ns||c.options&&c.options.defaultNS;p=typeof p=="string"?[p]:p||["translation"];var x=h||R(n,i)||i.transEmptyNodeValue||o,b=i.hashTransKey,s=o||(b?b(x):x),k=v?l.interpolation:{interpolation:m(m({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},T=m(m(m(m({},l),{},{count:t},v),k),{},{defaultValue:x,ns:p}),A=s?y(s,T):x,f=we(d||n,A,c,i,T,O),D=r!==void 0?r:i.defaultTransParent;return D?w.createElement(D,N,f):f}var ke=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Ne(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?J(Object(t),!0).forEach(function(r){Y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function X(e){var n=e.children,t=e.count,r=e.parent,o=e.i18nKey,a=e.context,u=e.tOptions,l=u===void 0?{}:u,v=e.values,h=e.defaults,d=e.components,j=e.ns,P=e.i18n,g=e.t,O=e.shouldUnescape,N=U(e,ke),c=w.useContext(pe)||{},y=c.i18n,i=c.defaultNS,p=P||y||Z(),x=g||p&&p.t.bind(p);return Pe(Ne({children:n,count:t,parent:r,i18nKey:o,context:a,tOptions:l,values:v,defaults:h,components:d,ns:j||x&&x.ns||i||p&&p.options&&p.options.defaultNS,i18n:p,t:g,shouldUnescape:O},N))}function Ae(){return W("div",{className:"hologram-wrapper",children:[E("div",{className:"image"}),E("div",{className:"hologram"})]})}function Te({text:e}){const{t:n}=q();return E("div",{className:"water-mark",children:E("span",{className:"water-mark-text",children:n(`waterMark.${e}`)})})}function Fe(){const{t:e}=q();return W("div",{className:"home-page",children:[W("div",{className:"description",children:[E(Te,{text:"hello"}),E(H,{children:e("my-description.introduce")}),E(H,{children:E(X,{i18nKey:"my-description.source",components:{CodeLink:E(I,{navigateTo:"https://github.com/EmirDelicR/curriculum-v2"})}})}),E(H,{children:E(X,{i18nKey:"my-description.mail",components:{MailLink:E(I,{navigateTo:"mailto:emirdelictbf@gmail.com?subject=Web-site mail"})}})}),E(le,{isDownloadButton:!0})]}),E(Ae,{})]})}export{Fe as default};
