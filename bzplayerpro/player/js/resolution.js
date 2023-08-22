/*! @silvermine/videojs-quality-selector 2023-03-21 v1.3.0 */

!function r(u,i,o){function c(e,n){if(!i[e]){if(!u[e]){var t="function"==typeof require&&require;if(!n&&t)return t(e,!0);if(a)return a(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}t=i[e]={exports:{}},u[e][0].call(t.exports,function(n){return c(u[e][1][n]||n)},t,t.exports,r,u,i,o)}return i[e].exports}for(var a="function"==typeof require&&require,n=0;n<o.length;n++)c(o[n]);return c}({1:[function(n,u,i){!function(Fe){!function(){var n,e,t,r;n=this,e=function(){var n="1.13.1",e="object"==typeof self&&self.self===self&&self||"object"==typeof Fe&&Fe.global===Fe&&Fe||Function("return this")()||{},r=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=r.push,a=r.slice,p=o.toString,t=o.hasOwnProperty,i="undefined"!=typeof ArrayBuffer,c="undefined"!=typeof DataView,f=Array.isArray,l=Object.keys,h=Object.create,v=i&&ArrayBuffer.isView,d=isNaN,y=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),S=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],b=Math.pow(2,53)-1;function _(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),e=Array(n),t=0;t<n;t++)e[t]=arguments[t+i];switch(i){case 0:return u.call(this,e);case 1:return u.call(this,arguments[0],e);case 2:return u.call(this,arguments[0],arguments[1],e)}for(var r=Array(i+1),t=0;t<i;t++)r[t]=arguments[t];return r[i]=e,u.apply(this,r)}}function m(n){var e=typeof n;return"function"==e||"object"==e&&!!n}function w(n){return void 0===n}function E(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)}function j(n){var e="[object "+n+"]";return function(n){return p.call(n)===e}}var x=j("String"),A=j("Number"),T=j("Date"),k=j("RegExp"),O=j("Error"),C=j("Symbol"),I=j("ArrayBuffer"),q=j("Function"),M=e.document&&e.document.childNodes,D=q="function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof M?function(n){return"function"==typeof n||!1}:q,R=j("Object"),U=c&&R(new DataView(new ArrayBuffer(8))),N="undefined"!=typeof Map&&R(new Map),F=j("DataView");var P=U?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:F,Q=f||j("Array");function B(n,e){return null!=n&&t.call(n,e)}var L=j("Arguments");!function(){L(arguments)||(L=function(n){return B(n,"callee")})}();var W=L;function Y(n){return A(n)&&d(n)}function V(n){return function(){return n}}function z(e){return function(n){n=e(n);return"number"==typeof n&&0<=n&&n<=b}}function G(e){return function(n){return null==n?void 0:n[e]}}var H=G("byteLength"),$=z(H),K=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var J=i?function(n){return v?v(n)&&!P(n):$(n)&&K.test(p.call(n))}:V(!1),X=G("length");function Z(n,e){e=function(e){for(var t={},n=e.length,r=0;r<n;++r)t[e[r]]=!0;return{contains:function(n){return t[n]},push:function(n){return t[n]=!0,e.push(n)}}}(e);var t=S.length,r=n.constructor,u=D(r)&&r.prototype||o,i="constructor";for(B(n,i)&&!e.contains(i)&&e.push(i);t--;)(i=S[t])in n&&n[i]!==u[i]&&!e.contains(i)&&e.push(i)}function nn(n){if(!m(n))return[];if(l)return l(n);var e,t=[];for(e in n)B(n,e)&&t.push(e);return g&&Z(n,t),t}function en(n,e){var t=nn(e),r=t.length;if(null==n)return!r;for(var u=Object(n),i=0;i<r;i++){var o=t[i];if(e[o]!==u[o]||!(o in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function rn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,H(n))}tn.VERSION=n,tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value=function(){return this._wrapped},tn.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,e,t,r){if(n===e)return 0!==n||1/n==1/e;if(null==n||null==e)return!1;if(n!=n)return e!=e;var u=typeof n;return("function"==u||"object"==u||"object"==typeof e)&&function n(e,t,r,u){e instanceof tn&&(e=e._wrapped);t instanceof tn&&(t=t._wrapped);var i=p.call(e);if(i!==p.call(t))return!1;if(U&&"[object Object]"==i&&P(e)){if(!P(t))return!1;i=un}switch(i){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return s.valueOf.call(e)===s.valueOf.call(t);case"[object ArrayBuffer]":case un:return n(rn(e),rn(t),r,u)}var o="[object Array]"===i;if(!o&&J(e)){var c=H(e);if(c!==H(t))return!1;if(e.buffer===t.buffer&&e.byteOffset===t.byteOffset)return!0;o=!0}if(!o){if("object"!=typeof e||"object"!=typeof t)return!1;var i=e.constructor,c=t.constructor;if(i!==c&&!(D(i)&&i instanceof i&&D(c)&&c instanceof c)&&"constructor"in e&&"constructor"in t)return!1}r=r||[];u=u||[];var a=r.length;for(;a--;)if(r[a]===e)return u[a]===t;r.push(e);u.push(t);if(o){if((a=e.length)!==t.length)return!1;for(;a--;)if(!on(e[a],t[a],r,u))return!1}else{var f,l=nn(e);if(a=l.length,nn(t).length!==a)return!1;for(;a--;)if(f=l[a],!B(t,f)||!on(e[f],t[f],r,u))return!1}r.pop();u.pop();return!0}(n,e,t,r)}function cn(n){if(!m(n))return[];var e,t=[];for(e in n)t.push(e);return g&&Z(n,t),t}function an(r){var u=X(r);return function(n){if(null==n)return!1;var e=cn(n);if(X(e))return!1;for(var t=0;t<u;t++)if(!D(n[r[t]]))return!1;return r!==hn||!D(n[fn])}}var fn="forEach",ln=["clear","delete"],sn=["get","has","set"],pn=ln.concat(fn,sn),hn=ln.concat(sn),vn=["add"].concat(ln,fn,"has"),dn=N?an(pn):j("Map"),yn=N?an(hn):j("WeakMap"),gn=N?an(vn):j("Set"),Sn=j("WeakSet");function bn(n){for(var e=nn(n),t=e.length,r=Array(t),u=0;u<t;u++)r[u]=n[e[u]];return r}function _n(n){for(var e={},t=nn(n),r=0,u=t.length;r<u;r++)e[n[t[r]]]=t[r];return e}function mn(n){var e,t=[];for(e in n)D(n[e])&&t.push(e);return t.sort()}function wn(a,f){return function(n){var e=arguments.length;if(f&&(n=Object(n)),e<2||null==n)return n;for(var t=1;t<e;t++)for(var r=arguments[t],u=a(r),i=u.length,o=0;o<i;o++){var c=u[o];f&&void 0!==n[c]||(n[c]=r[c])}return n}}var En=wn(cn),jn=wn(nn),xn=wn(cn,!0);function An(n){if(!m(n))return{};if(h)return h(n);var e=function(){};e.prototype=n;n=new e;return e.prototype=null,n}function Tn(n){return m(n)?Q(n)?n.slice():En({},n):n}function kn(n){return Q(n)?n:[n]}function On(n){return tn.toPath(n)}function Cn(n,e){for(var t=e.length,r=0;r<t;r++){if(null==n)return;n=n[e[r]]}return t?n:void 0}function In(n,e,t){e=Cn(n,On(e));return w(e)?t:e}function qn(n){return n}function Mn(e){return e=jn({},e),function(n){return en(n,e)}}function Dn(e){return e=On(e),function(n){return Cn(n,e)}}function Rn(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,e,t){return u.call(i,n,e,t)};case 4:return function(n,e,t,r){return u.call(i,n,e,t,r)}}return function(){return u.apply(i,arguments)}}function Un(n,e,t){return null==n?qn:D(n)?Rn(n,e,t):(m(n)&&!Q(n)?Mn:Dn)(n)}function Nn(n,e){return Un(n,e,1/0)}function Fn(n,e,t){return tn.iteratee!==Nn?tn.iteratee(n,e):Un(n,e,t)}function Pn(){}function Qn(n,e){return null==e&&(e=n,n=0),n+Math.floor(Math.random()*(e-n+1))}tn.toPath=kn,tn.iteratee=Nn;var Bn=Date.now||function(){return(new Date).getTime()};function Ln(e){function t(n){return e[n]}var n="(?:"+nn(e).join("|")+")",r=RegExp(n),u=RegExp(n,"g");return function(n){return r.test(n=null==n?"":""+n)?n.replace(u,t):n}}var Wn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Yn=Ln(Wn),Vn=Ln(_n(Wn)),zn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Gn=/(.)^/,Hn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},$n=/\\|'|\r|\n|\u2028|\u2029/g;function Kn(n){return"\\"+Hn[n]}var Jn=/^\s*(\w|\$)+\s*$/;var Xn=0;function Zn(n,e,t,r,u){if(!(r instanceof e))return n.apply(t,u);t=An(n.prototype),u=n.apply(t,u);return m(u)?u:t}var ne=_(function(u,i){var o=ne.placeholder,c=function(){for(var n=0,e=i.length,t=Array(e),r=0;r<e;r++)t[r]=i[r]===o?arguments[n++]:i[r];for(;n<arguments.length;)t.push(arguments[n++]);return Zn(u,c,this,this,t)};return c});ne.placeholder=tn;var ee=_(function(e,t,r){if(!D(e))throw new TypeError("Bind must be called on a function");var u=_(function(n){return Zn(e,u,t,this,r.concat(n))});return u}),te=z(X);function re(n,e,t,r){if(r=r||[],e||0===e){if(e<=0)return r.concat(n)}else e=1/0;for(var u=r.length,i=0,o=X(n);i<o;i++){var c=n[i];if(te(c)&&(Q(c)||W(c)))if(1<e)re(c,e-1,t,r),u=r.length;else for(var a=0,f=c.length;a<f;)r[u++]=c[a++];else t||(r[u++]=c)}return r}var ue=_(function(n,e){var t=(e=re(e,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var r=e[t];n[r]=ee(n[r],n)}return n});var ie=_(function(n,e,t){return setTimeout(function(){return n.apply(null,t)},e)}),oe=ne(ie,tn,1);function ce(n){return function(){return!n.apply(this,arguments)}}function ae(n,e){var t;return function(){return 0<--n&&(t=e.apply(this,arguments)),n<=1&&(e=null),t}}e=ne(ae,2);function fe(n,e,t){e=Fn(e,t);for(var r,u=nn(n),i=0,o=u.length;i<o;i++)if(e(n[r=u[i]],r,n))return r}function le(i){return function(n,e,t){e=Fn(e,t);for(var r=X(n),u=0<i?0:r-1;0<=u&&u<r;u+=i)if(e(n[u],u,n))return u;return-1}}var se=le(1),M=le(-1);function pe(n,e,t,r){for(var u=(t=Fn(t,r,1))(e),i=0,o=X(n);i<o;){var c=Math.floor((i+o)/2);t(n[c])<u?i=c+1:o=c}return i}function he(i,o,c){return function(n,e,t){var r=0,u=X(n);if("number"==typeof t)0<i?r=0<=t?t:Math.max(t+u,r):u=0<=t?Math.min(t+1,u):t+u+1;else if(c&&t&&u)return n[t=c(n,e)]===e?t:-1;if(e!=e)return 0<=(t=o(a.call(n,r,u),Y))?t+r:-1;for(t=0<i?r:u-1;0<=t&&t<u;t+=i)if(n[t]===e)return t;return-1}}var ve=he(1,se,pe),q=he(-1,M);function de(n,e,t){t=(te(n)?se:fe)(n,e,t);if(void 0!==t&&-1!==t)return n[t]}function ye(n,e,t){if(e=Rn(e,t),te(n))for(u=0,i=n.length;u<i;u++)e(n[u],u,n);else for(var r=nn(n),u=0,i=r.length;u<i;u++)e(n[r[u]],r[u],n);return n}function ge(n,e,t){e=Fn(e,t);for(var r=!te(n)&&nn(n),u=(r||n).length,i=Array(u),o=0;o<u;o++){var c=r?r[o]:o;i[o]=e(n[c],c,n)}return i}function Se(a){return function(n,e,t,r){var u=3<=arguments.length;return function(n,e,t,r){var u=!te(n)&&nn(n),i=(u||n).length,o=0<a?0:i-1;for(r||(t=n[u?u[o]:o],o+=a);0<=o&&o<i;o+=a){var c=u?u[o]:o;t=e(t,n[c],c,n)}return t}(n,Rn(e,r,4),t,u)}}c=Se(1),R=Se(-1);function be(n,r,e){var u=[];return r=Fn(r,e),ye(n,function(n,e,t){r(n,e,t)&&u.push(n)}),u}function _e(n,e,t){e=Fn(e,t);for(var r=!te(n)&&nn(n),u=(r||n).length,i=0;i<u;i++){var o=r?r[i]:i;if(!e(n[o],o,n))return!1}return!0}function me(n,e,t){e=Fn(e,t);for(var r=!te(n)&&nn(n),u=(r||n).length,i=0;i<u;i++){var o=r?r[i]:i;if(e(n[o],o,n))return!0}return!1}function we(n,e,t,r){return te(n)||(n=bn(n)),0<=ve(n,e,t="number"!=typeof t||r?0:t)}F=_(function(n,t,r){var u,i;return D(t)?i=t:(t=On(t),u=t.slice(0,-1),t=t[t.length-1]),ge(n,function(n){var e=i;if(!e){if(null==(n=u&&u.length?Cn(n,u):n))return;e=n[t]}return null==e?e:e.apply(n,r)})});function Ee(n,e){return ge(n,Dn(e))}function je(n,r,e){var t,u,i=-1/0,o=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var c=0,a=(n=te(n)?n:bn(n)).length;c<a;c++)null!=(t=n[c])&&i<t&&(i=t);else r=Fn(r,e),ye(n,function(n,e,t){u=r(n,e,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i}function xe(n,e,t){if(null==e||t)return(n=!te(n)?bn(n):n)[Qn(n.length-1)];var r=(te(n)?Tn:bn)(n),n=X(r);e=Math.max(Math.min(e,n),0);for(var u=n-1,i=0;i<e;i++){var o=Qn(i,u),c=r[i];r[i]=r[o],r[o]=c}return r.slice(0,e)}function Ae(i,e){return function(t,r,n){var u=e?[[],[]]:{};return r=Fn(r,n),ye(t,function(n,e){e=r(n,e,t);i(u,n,e)}),u}}var f=Ae(function(n,e,t){B(n,t)?n[t].push(e):n[t]=[e]}),i=Ae(function(n,e,t){n[t]=e}),sn=Ae(function(n,e,t){B(n,t)?n[t]++:n[t]=1}),ln=Ae(function(n,e,t){n[t?0:1].push(e)},!0),Te=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function ke(n,e,t){return e in t}var Oe=_(function(n,e){var t={},r=e[0];if(null==n)return t;D(r)?(1<e.length&&(r=Rn(r,e[1])),e=cn(n)):(r=ke,e=re(e,!1,!1),n=Object(n));for(var u=0,i=e.length;u<i;u++){var o=e[u],c=n[o];r(c,o,n)&&(t[o]=c)}return t}),pn=_(function(n,t){var e,r=t[0];return D(r)?(r=ce(r),1<t.length&&(e=t[1])):(t=ge(re(t,!1,!1),String),r=function(n,e){return!we(t,e)}),Oe(n,r,e)});function Ce(n,e,t){return a.call(n,0,Math.max(0,n.length-(null==e||t?1:e)))}function Ie(n,e,t){return null==n||n.length<1?null==e||t?void 0:[]:null==e||t?n[0]:Ce(n,n.length-e)}function qe(n,e,t){return a.call(n,null==e||t?1:e)}var Me=_(function(n,e){return e=re(e,!0,!0),be(n,function(n){return!we(e,n)})}),N=_(function(n,e){return Me(n,e)});function De(n,e,t,r){E(e)||(r=t,t=e,e=!1),null!=t&&(t=Fn(t,r));for(var u=[],i=[],o=0,c=X(n);o<c;o++){var a=n[o],f=t?t(a,o,n):a;e&&!t?(o&&i===f||u.push(a),i=f):t?we(i,f)||(i.push(f),u.push(a)):we(u,a)||u.push(a)}return u}vn=_(function(n){return De(re(n,!0,!0))});function Re(n){for(var e=n&&je(n,X).length||0,t=Array(e),r=0;r<e;r++)t[r]=Ee(n,r);return t}Wn=_(Re);function Ue(n,e){return n._chain?tn(e).chain():e}function Ne(t){return ye(mn(t),function(n){var e=tn[n]=t[n];tn.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),Ue(this,e.apply(tn,n))}}),tn}ye(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];tn.prototype[e]=function(){var n=this._wrapped;return null!=n&&(t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0]),Ue(this,n)}}),ye(["concat","join","slice"],function(n){var e=r[n];tn.prototype[n]=function(){var n=this._wrapped;return Ue(this,n=null!=n?e.apply(n,arguments):n)}});Wn=Ne({__proto__:null,VERSION:n,restArguments:_,isObject:m,isNull:function(n){return null===n},isUndefined:w,isBoolean:E,isElement:function(n){return!(!n||1!==n.nodeType)},isString:x,isNumber:A,isDate:T,isRegExp:k,isError:O,isSymbol:C,isArrayBuffer:I,isDataView:P,isArray:Q,isFunction:D,isArguments:W,isFinite:function(n){return!C(n)&&y(n)&&!isNaN(parseFloat(n))},isNaN:Y,isTypedArray:J,isEmpty:function(n){if(null==n)return!0;var e=X(n);return"number"==typeof e&&(Q(n)||x(n)||W(n))?0===e:0===X(nn(n))},isMatch:en,isEqual:function(n,e){return on(n,e)},isMap:dn,isWeakMap:yn,isSet:gn,isWeakSet:Sn,keys:nn,allKeys:cn,values:bn,pairs:function(n){for(var e=nn(n),t=e.length,r=Array(t),u=0;u<t;u++)r[u]=[e[u],n[e[u]]];return r},invert:_n,functions:mn,methods:mn,extend:En,extendOwn:jn,assign:jn,defaults:xn,create:function(n,e){return n=An(n),e&&jn(n,e),n},clone:Tn,tap:function(n,e){return e(n),n},get:In,has:function(n,e){for(var t=(e=On(e)).length,r=0;r<t;r++){var u=e[r];if(!B(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,e,t){e=Fn(e,t);for(var r=nn(n),u=r.length,i={},o=0;o<u;o++){var c=r[o];i[c]=e(n[c],c,n)}return i},identity:qn,constant:V,noop:Pn,toPath:kn,property:Dn,propertyOf:function(e){return null==e?Pn:function(n){return In(e,n)}},matcher:Mn,matches:Mn,times:function(n,e,t){var r=Array(Math.max(0,n));e=Rn(e,t,1);for(var u=0;u<n;u++)r[u]=e(u);return r},random:Qn,now:Bn,escape:Yn,unescape:Vn,templateSettings:zn,template:function(i,n,e){n=xn({},n=!n&&e?e:n,tn.templateSettings);var t,e=RegExp([(n.escape||Gn).source,(n.interpolate||Gn).source,(n.evaluate||Gn).source].join("|")+"|$","g"),o=0,c="__p+='";if(i.replace(e,function(n,e,t,r,u){return c+=i.slice(o,u).replace($n,Kn),o=u+n.length,e?c+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":t?c+="'+\n((__t=("+t+"))==null?'':__t)+\n'":r&&(c+="';\n"+r+"\n__p+='"),n}),c+="';\n",e=n.variable){if(!Jn.test(e))throw new Error("variable is not a bare identifier: "+e)}else c="with(obj||{}){\n"+c+"}\n",e="obj";c="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+c+"return __p;\n";try{t=new Function(e,"_",c)}catch(n){throw n.source=c,n}return(n=function(n){return t.call(this,n,tn)}).source="function("+e+"){\n"+c+"}",n},result:function(n,e,t){var r=(e=On(e)).length;if(!r)return D(t)?t.call(n):t;for(var u=0;u<r;u++){var i=null==n?void 0:n[e[u]];void 0===i&&(i=t,u=r),n=D(i)?i.call(n):i}return n},uniqueId:function(n){var e=++Xn+"";return n?n+e:e},chain:function(n){return(n=tn(n))._chain=!0,n},iteratee:Nn,partial:ne,bind:ee,bindAll:ue,memoize:function(r,u){var i=function(n){var e=i.cache,t=""+(u?u.apply(this,arguments):n);return B(e,t)||(e[t]=r.apply(this,arguments)),e[t]};return i.cache={},i},delay:ie,defer:oe,throttle:function(t,r,u){var i,o,c,a,f=0;function l(){f=!1===u.leading?0:Bn(),i=null,a=t.apply(o,c),i||(o=c=null)}function n(){var n=Bn();f||!1!==u.leading||(f=n);var e=r-(n-f);return o=this,c=arguments,e<=0||r<e?(i&&(clearTimeout(i),i=null),f=n,a=t.apply(o,c),i||(o=c=null)):i||!1===u.trailing||(i=setTimeout(l,e)),a}return u=u||{},n.cancel=function(){clearTimeout(i),f=0,i=o=c=null},n},debounce:function(e,t,r){var u,i,o,c,a,f=function(){var n=Bn()-i;n<t?u=setTimeout(f,t-n):(u=null,r||(c=e.apply(a,o)),u||(o=a=null))},n=_(function(n){return a=this,o=n,i=Bn(),u||(u=setTimeout(f,t),r&&(c=e.apply(a,o))),c});return n.cancel=function(){clearTimeout(u),u=o=a=null},n},wrap:function(n,e){return ne(e,n)},negate:ce,compose:function(){var t=arguments,r=t.length-1;return function(){for(var n=r,e=t[r].apply(this,arguments);n--;)e=t[n].call(this,e);return e}},after:function(n,e){return function(){if(--n<1)return e.apply(this,arguments)}},before:ae,once:e,findKey:fe,findIndex:se,findLastIndex:M,sortedIndex:pe,indexOf:ve,lastIndexOf:q,find:de,detect:de,findWhere:function(n,e){return de(n,Mn(e))},each:ye,forEach:ye,map:ge,collect:ge,reduce:c,foldl:c,inject:c,reduceRight:R,foldr:R,filter:be,select:be,reject:function(n,e,t){return be(n,ce(Fn(e)),t)},every:_e,all:_e,some:me,any:me,contains:we,includes:we,include:we,invoke:F,pluck:Ee,where:function(n,e){return be(n,Mn(e))},max:je,min:function(n,r,e){var t,u,i=1/0,o=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var c=0,a=(n=te(n)?n:bn(n)).length;c<a;c++)null!=(t=n[c])&&t<i&&(i=t);else r=Fn(r,e),ye(n,function(n,e,t){((u=r(n,e,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},shuffle:function(n){return xe(n,1/0)},sample:xe,sortBy:function(n,r,e){var u=0;return r=Fn(r,e),Ee(ge(n,function(n,e,t){return{value:n,index:u++,criteria:r(n,e,t)}}).sort(function(n,e){var t=n.criteria,r=e.criteria;if(t!==r){if(r<t||void 0===t)return 1;if(t<r||void 0===r)return-1}return n.index-e.index}),"value")},groupBy:f,indexBy:i,countBy:sn,partition:ln,toArray:function(n){return n?Q(n)?a.call(n):x(n)?n.match(Te):te(n)?ge(n,qn):bn(n):[]},size:function(n){return null==n?0:(te(n)?n:nn(n)).length},pick:Oe,omit:pn,first:Ie,head:Ie,take:Ie,initial:Ce,last:function(n,e,t){return null==n||n.length<1?null==e||t?void 0:[]:null==e||t?n[n.length-1]:qe(n,Math.max(0,n.length-e))},rest:qe,tail:qe,drop:qe,compact:function(n){return be(n,Boolean)},flatten:function(n,e){return re(n,e,!1)},without:N,uniq:De,unique:De,union:vn,intersection:function(n){for(var e=[],t=arguments.length,r=0,u=X(n);r<u;r++){var i=n[r];if(!we(e,i)){for(var o=1;o<t&&we(arguments[o],i);o++);o===t&&e.push(i)}}return e},difference:Me,unzip:Re,transpose:Re,zip:Wn,object:function(n,e){for(var t={},r=0,u=X(n);r<u;r++)e?t[n[r]]=e[r]:t[n[r][0]]=n[r][1];return t},range:function(n,e,t){null==e&&(e=n||0,n=0),t=t||(e<n?-1:1);for(var r=Math.max(Math.ceil((e-n)/t),0),u=Array(r),i=0;i<r;i++,n+=t)u[i]=n;return u},chunk:function(n,e){if(null==e||e<1)return[];for(var t=[],r=0,u=n.length;r<u;)t.push(a.call(n,r,r+=e));return t},mixin:Ne,default:tn});return Wn._=Wn},"object"==typeof i&&void 0!==u?u.exports=e():"function"==typeof define&&define.amd?define("underscore",e):(n="undefined"!=typeof globalThis?globalThis:n||self,t=n._,(r=n._=e()).noConflict=function(){return n._=t,r})}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(n,e,t){"use strict";var u=n("underscore"),i=n("../events");e.exports=function(n){var r=n.getComponent("MenuItem");return n.extend(r,{constructor:function(n,e){var t=e.source;if(!u.isObject(t))throw new Error('was not provided a "source" object, but rather: '+typeof t);e=u.extend({selectable:!0,label:t.label},e),r.call(this,n,e),this.source=t},handleClick:function(n){r.prototype.handleClick.call(this,n),this.player().trigger(i.QUALITY_REQUESTED,this.source)}})}},{"../events":4,underscore:1}],3:[function(n,e,t){"use strict";var u=n("underscore"),i=n("../events"),o=n("./QualityOption"),c="vjs-quality-changing";e.exports=function(n){var e=n.getComponent("MenuButton"),t=o(n),r=n.extend(e,{constructor:function(t,n){e.call(this,t,n),t.on(i.QUALITY_REQUESTED,function(n,e){this.setSelectedSource(e),t.addClass(c),t.one("loadeddata",function(){t.removeClass(c)})}.bind(this)),t.on(i.PLAYER_SOURCES_CHANGED,function(){this.update()}.bind(this)),t.on(i.QUALITY_SELECTED,function(n,e){this.setSelectedSource(e)}.bind(this)),t.one("ready",function(){this.selectedSrc=t.src(),this.update()}.bind(this)),this.controlText("Open quality selector menu")},setSelectedSource:function(n){var e=n?n.src:void 0;this.selectedSrc!==e&&(this.selectedSrc=e,u.each(this.items,function(n){n.selected(n.source.src===e)}))},createItems:function(){var e=this.player(),n=e.currentSources();return!n||n.length<2?[]:u.map(n,function(n){return new t(e,{source:n,selected:n.src===this.selectedSrc})}.bind(this))},buildWrapperCSSClass:function(){return"vjs-quality-selector "+e.prototype.buildWrapperCSSClass.call(this)}});return n.registerComponent("QualitySelector",r),r}},{"../events":4,"./QualityOption":2,underscore:1}],4:[function(n,e,t){"use strict";e.exports={QUALITY_REQUESTED:"qualityRequested",QUALITY_SELECTED:"qualitySelected",PLAYER_SOURCES_CHANGED:"playerSourcesChanged"}},{}],5:[function(n,e,t){"use strict";var c=n("underscore"),r=n("./events"),u=n("./components/QualitySelector"),i=n("./middleware/SourceInterceptor"),a=n("./util/SafeSeek");e.exports=function(n){n=n||window.videojs,u(n),i(n),n.hook("setup",function(o){o.on(r.QUALITY_REQUESTED,function(n,e){var t=o.currentSources(),r=o.currentTime(),u=o.playbackRate(),i=o.paused();c.each(t,function(n){n.selected=!1}),c.findWhere(t,{src:e.src}).selected=!0,o._qualitySelectorSafeSeek&&o._qualitySelectorSafeSeek.onQualitySelectionChange(),o.src(t),o.ready(function(){o._qualitySelectorSafeSeek&&!o._qualitySelectorSafeSeek.hasFinished()||(o._qualitySelectorSafeSeek=new a(o,r),o.playbackRate(u)),i||o.play()})})})},e.exports.EVENTS=r},{"./components/QualitySelector":3,"./events":4,"./middleware/SourceInterceptor":6,"./util/SafeSeek":8,underscore:1}],6:[function(n,e,t){"use strict";var u=n("underscore"),i=n("../events");e.exports=function(n){n.use("*",function(r){return{setSource:function(n,e){var t=r.currentSources();r._qualitySelectorSafeSeek&&r._qualitySelectorSafeSeek.onPlayerSourcesChange(),u.isEqual(t,r._qualitySelectorPreviousSources)||(r.trigger(i.PLAYER_SOURCES_CHANGED,t),r._qualitySelectorPreviousSources=t),t=u.find(t,function(n){return!0===n.selected||"true"===n.selected||"selected"===n.selected}),r.trigger(i.QUALITY_SELECTED,n=t||n),e(null,n)}}})}},{"../events":4,underscore:1}],7:[function(n,e,t){"use strict";n("./index")()},{"./index":5}],8:[function(n,e,t){"use strict";e.exports=class{constructor(n,e){this._player=n,this._seekToTime=e,this._hasFinished=!1,this._keepThisInstanceWhenPlayerSourcesChange=!1,this._seekWhenSafe()}_seekWhenSafe(){this._player.readyState()<3?(this._seekFn=this._seek.bind(this),this._player.one("canplay",this._seekFn)):this._seek()}onPlayerSourcesChange(){this._keepThisInstanceWhenPlayerSourcesChange?this._keepThisInstanceWhenPlayerSourcesChange=!1:this.cancel()}onQualitySelectionChange(){this.hasFinished()||(this._keepThisInstanceWhenPlayerSourcesChange=!0)}_seek(){this._player.currentTime(this._seekToTime),this._keepThisInstanceWhenPlayerSourcesChange=!1,this._hasFinished=!0}hasFinished(){return this._hasFinished}cancel(){this._player.off("canplay",this._seekFn),this._keepThisInstanceWhenPlayerSourcesChange=!1,this._hasFinished=!0}}},{}]},{},[7]);
//# sourceMappingURL=silvermine-videojs-quality-selector.min.js.map