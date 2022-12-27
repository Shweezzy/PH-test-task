import{m as u,s as m,v as w}from"./entry.0dba4bdf.js";const h=decodeURIComponent,S=encodeURIComponent,g=/; */,p=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function y(e,n){if(typeof e!="string")throw new TypeError("argument str must be a string");let o={},t=n||{},r=e.split(g),s=t.decode||h;for(let i=0;i<r.length;i++){let a=r[i],f=a.indexOf("=");if(f<0)continue;let d=a.substr(0,f).trim(),c=a.substr(++f,a.length).trim();c[0]=='"'&&(c=c.slice(1,-1)),o[d]==null&&(o[d]=x(c,s))}return o}function l(e,n,o){let t=o||{},r=t.encode||S;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!p.test(e))throw new TypeError("argument name is invalid");let s=r(n);if(s&&!p.test(s))throw new TypeError("argument val is invalid");let i=e+"="+s;if(t.maxAge!=null){let a=t.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(a)}if(t.domain){if(!p.test(t.domain))throw new TypeError("option domain is invalid");i+="; Domain="+t.domain}if(t.path){if(!p.test(t.path))throw new TypeError("option path is invalid");i+="; Path="+t.path}if(t.expires){if(typeof t.expires.toUTCString!="function")throw new TypeError("option expires is invalid");i+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(i+="; HttpOnly"),t.secure&&(i+="; Secure"),t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i}function x(e,n){try{return n(e)}catch{return e}}const k={path:"/",decode:e=>w(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function b(e,n){var s,i;const o={...k,...n},t=C(o)||{},r=u((i=t[e])!=null?i:(s=o.default)==null?void 0:s.call(o));return m(r,()=>{T(e,r.value,o)}),r}function C(e={}){return y(document.cookie,e)}function E(e,n,o={}){return n==null?l(e,n,{...o,maxAge:-1}):l(e,n,o)}function T(e,n,o={}){document.cookie=E(e,n,o)}export{b as u};
