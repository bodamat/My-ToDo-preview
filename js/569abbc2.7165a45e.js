(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["569abbc2"],{"28a0":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},3022:function(t,e,r){(function(t){var n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return r},o=/%[sdj%]/g;e.format=function(t){if(!j(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(s(arguments[r]));return e.join(" ")}r=1;for(var n=arguments,i=n.length,a=String(t).replace(o,(function(t){if("%%"===t)return"%";if(r>=i)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return t}})),c=n[r];r<i;c=n[++r])w(c)||!S(c)?a+=" "+c:a+=" "+s(c);return a},e.deprecate=function(r,n){if("undefined"!==typeof t&&!0===t.noDeprecation)return r;if("undefined"===typeof t)return function(){return e.deprecate(r,n).apply(this,arguments)};var o=!1;function i(){if(!o){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),o=!0}return r.apply(this,arguments)}return i};var i,a={};function s(t,r){var n={seen:[],stylize:u};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),h(r)?n.showHidden=r:r&&e._extend(n,r),E(n.showHidden)&&(n.showHidden=!1),E(n.depth)&&(n.depth=2),E(n.colors)&&(n.colors=!1),E(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),p(n,t,n.depth)}function c(t,e){var r=s.styles[e];return r?"["+s.colors[r][0]+"m"+t+"["+s.colors[r][1]+"m":t}function u(t,e){return t}function l(t){var e={};return t.forEach((function(t,r){e[t]=!0})),e}function p(t,r,n){if(t.customInspect&&r&&_(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,t);return j(o)||(o=p(t,o,n)),o}var i=f(t,r);if(i)return i;var a=Object.keys(r),s=l(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(r)),z(r)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return y(r);if(0===a.length){if(_(r)){var c=r.name?": "+r.name:"";return t.stylize("[Function"+c+"]","special")}if(D(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(x(r))return t.stylize(Date.prototype.toString.call(r),"date");if(z(r))return y(r)}var u,h="",w=!1,v=["{","}"];if(m(r)&&(w=!0,v=["[","]"]),_(r)){var O=r.name?": "+r.name:"";h=" [Function"+O+"]"}return D(r)&&(h=" "+RegExp.prototype.toString.call(r)),x(r)&&(h=" "+Date.prototype.toUTCString.call(r)),z(r)&&(h=" "+y(r)),0!==a.length||w&&0!=r.length?n<0?D(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),u=w?d(t,r,n,s,a):a.map((function(e){return b(t,r,n,s,e,w)})),t.seen.pop(),g(u,h,v)):v[0]+h+v[1]}function f(t,e){if(E(e))return t.stylize("undefined","undefined");if(j(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return O(e)?t.stylize(""+e,"number"):h(e)?t.stylize(""+e,"boolean"):w(e)?t.stylize("null","null"):void 0}function y(t){return"["+Error.prototype.toString.call(t)+"]"}function d(t,e,r,n,o){for(var i=[],a=0,s=e.length;a<s;++a)U(e,String(a))?i.push(b(t,e,r,n,String(a),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(b(t,e,r,n,o,!0))})),i}function b(t,e,r,n,o,i){var a,s,c;if(c=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]},c.get?s=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(s=t.stylize("[Setter]","special")),U(n,o)||(a="["+o+"]"),s||(t.seen.indexOf(c.value)<0?(s=w(r)?p(t,c.value,null):p(t,c.value,r-1),s.indexOf("\n")>-1&&(s=i?s.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+s.split("\n").map((function(t){return"   "+t})).join("\n"))):s=t.stylize("[Circular]","special")),E(a)){if(i&&o.match(/^\d+$/))return s;a=JSON.stringify(""+o),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+s}function g(t,e,r){var n=t.reduce((function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return n>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}function m(t){return Array.isArray(t)}function h(t){return"boolean"===typeof t}function w(t){return null===t}function v(t){return null==t}function O(t){return"number"===typeof t}function j(t){return"string"===typeof t}function P(t){return"symbol"===typeof t}function E(t){return void 0===t}function D(t){return S(t)&&"[object RegExp]"===C(t)}function S(t){return"object"===typeof t&&null!==t}function x(t){return S(t)&&"[object Date]"===C(t)}function z(t){return S(t)&&("[object Error]"===C(t)||t instanceof Error)}function _(t){return"function"===typeof t}function q(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function C(t){return Object.prototype.toString.call(t)}function T(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(r){if(E(i)&&(i=Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"spa",VUE_ROUTER_MODE:"hash",VUE_ROUTER_BASE:"",APP_URL:"undefined"}).NODE_DEBUG||""),r=r.toUpperCase(),!a[r])if(new RegExp("\\b"+r+"\\b","i").test(i)){var n=t.pid;a[r]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",r,n,t)}}else a[r]=function(){};return a[r]},e.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=m,e.isBoolean=h,e.isNull=w,e.isNullOrUndefined=v,e.isNumber=O,e.isString=j,e.isSymbol=P,e.isUndefined=E,e.isRegExp=D,e.isObject=S,e.isDate=x,e.isError=z,e.isFunction=_,e.isPrimitive=q,e.isBuffer=r("d60a");var k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function R(){var t=new Date,e=[T(t.getHours()),T(t.getMinutes()),T(t.getSeconds())].join(":");return[t.getDate(),k[t.getMonth()],e].join(" ")}function U(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",R(),e.format.apply(e,arguments))},e.inherits=r("28a0"),e._extend=function(t,e){if(!e||!S(e))return t;var r=Object.keys(e),n=r.length;while(n--)t[r[n]]=e[r[n]];return t};var A="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function N(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}function Q(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var o=r.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var i=this,a=function(){return o.apply(i,arguments)};e.apply(this,r).then((function(e){t.nextTick(a,null,e)}),(function(e){t.nextTick(N,e,a)}))}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,n(e)),r}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(A&&t[A]){var e=t[A];if("function"!==typeof e)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,A,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise((function(t,n){e=t,r=n})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,n){t?r(t):e(n)}));try{t.apply(this,o)}catch(a){r(a)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),A&&Object.defineProperty(e,A,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},e.promisify.custom=A,e.callbackify=Q}).call(this,r("4362"))},"439d":function(t,e,r){"use strict";var n=r("d727"),o=r.n(n);o.a},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},d727:function(t,e,r){},e009:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[r("div",{staticClass:"row q-mb-md"},[r("q-banner",{staticClass:"bg-grey-3 col",scopedSlots:t._u([{key:"avatar",fn:function(){return[r("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[t._v("\n\t\t\t\t"+t._s(t._f("titleCase")(t.tab))+" to access your Todos anywhere!\n\t\t\t")])],1),r("div",{staticClass:"row q-mb-md"},[r("q-input",{staticClass:"col",attrs:{type:"email",label:"Email",rules:[function(e){return t.isValidEmail(e)||"Please enter a valid email"}],outlined:"","lazy-rules":""},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),r("div",{staticClass:"row q-mb-md"},[r("q-input",{staticClass:"col",attrs:{type:t.isPwd?"password":"text",outlined:"",label:"Password",rules:[function(t){return t.length>=6||"Please enter at least 6 characters"}],"lazy-rules":""},scopedSlots:t._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),"register"===t.tab?r("div",{staticClass:"row q-mb-md"},[r("q-input",{staticClass:"col",attrs:{type:"password",outlined:"",label:"Repeat password",rules:[function(e){return t.isValidRepeatPassword(e)||"Passwords doesn't match"}],"lazy-rules":""},model:{value:t.repeatPassword,callback:function(e){t.repeatPassword=e},expression:"repeatPassword"}})],1):t._e(),r("div",{staticClass:"row"},[r("q-space"),r("q-btn",{attrs:{color:"primary",label:t.tab,type:"submit"}})],1)])},o=[],i=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),a=r.n(i),s=r("2f62");r("3022");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={props:["tab"],data:function(){return{formData:{email:"",password:""},isPwd:!0,repeatPassword:""}},methods:u({},Object(s["b"])("auth",["registerUser","loginUser"]),{isValidEmail:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(String(t).toLowerCase())},isValidRepeatPassword:function(t){return t===this.formData.password},submitForm:function(){"login"==this.tab?this.loginUser(this.formData):this.registerUser(this.formData)}}),filters:{titleCase:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}},p=l,f=r("2877"),y=r("fe09"),d=Object(f["a"])(p,n,o,!1,null,null,null);e["default"]=d.exports;d.options.components=Object.assign({QForm:y["l"],QBanner:y["b"],QIcon:y["n"],QInput:y["o"],QSpace:y["B"],QBtn:y["c"]},d.options.components||{})},f724:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{attrs:{padding:""}},[r("q-card",{staticClass:"auth-tabs absolute-center"},[r("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("q-tab",{attrs:{name:"login",label:"Login"}}),r("q-tab",{attrs:{name:"register",label:"Register"}})],1),r("q-separator"),r("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("q-tab-panel",{attrs:{name:"login"}},[r("login-register",{attrs:{tab:t.tab}})],1),r("q-tab-panel",{attrs:{name:"register"}},[r("login-register",{attrs:{tab:t.tab}})],1)],1)],1)],1)},o=[],i={data:function(){return{tab:"login"}},components:{"login-register":r("e009").default}},a=i,s=(r("439d"),r("2877")),c=r("fe09"),u=Object(s["a"])(a,n,o,!1,null,null,null);e["default"]=u.exports;u.options.components=Object.assign({QPage:c["u"],QCard:c["d"],QTabs:c["G"],QTab:c["D"],QSeparator:c["A"],QTabPanels:c["F"],QTabPanel:c["E"]},u.options.components||{})}}]);