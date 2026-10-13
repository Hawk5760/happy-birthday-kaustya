(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function fx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var n0={exports:{}},Tc={},i0={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),px=Symbol.for("react.portal"),mx=Symbol.for("react.fragment"),gx=Symbol.for("react.strict_mode"),_x=Symbol.for("react.profiler"),vx=Symbol.for("react.provider"),xx=Symbol.for("react.context"),yx=Symbol.for("react.forward_ref"),Sx=Symbol.for("react.suspense"),Mx=Symbol.for("react.memo"),Ex=Symbol.for("react.lazy"),Tp=Symbol.iterator;function Tx(n){return n===null||typeof n!="object"?null:(n=Tp&&n[Tp]||n["@@iterator"],typeof n=="function"?n:null)}var r0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,a0={};function ia(n,e,t){this.props=n,this.context=e,this.refs=a0,this.updater=t||r0}ia.prototype.isReactComponent={};ia.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ia.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function o0(){}o0.prototype=ia.prototype;function jh(n,e,t){this.props=n,this.context=e,this.refs=a0,this.updater=t||r0}var Kh=jh.prototype=new o0;Kh.constructor=jh;s0(Kh,ia.prototype);Kh.isPureReactComponent=!0;var wp=Array.isArray,l0=Object.prototype.hasOwnProperty,Yh={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function u0(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)l0.call(e,i)&&!c0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:wo,type:n,key:s,ref:a,props:r,_owner:Yh.current}}function wx(n,e){return{$$typeof:wo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function qh(n){return typeof n=="object"&&n!==null&&n.$$typeof===wo}function bx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var bp=/\/+/g;function qc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?bx(""+n.key):e.toString(36)}function Tl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case wo:case px:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+qc(a,0):i,wp(r)?(t="",n!=null&&(t=n.replace(bp,"$&/")+"/"),Tl(r,e,t,"",function(c){return c})):r!=null&&(qh(r)&&(r=wx(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(bp,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",wp(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+qc(s,o);a+=Tl(s,e,t,l,r)}else if(l=Tx(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+qc(s,o++),a+=Tl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Io(n,e,t){if(n==null)return n;var i=[],r=0;return Tl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Ax(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var hn={current:null},wl={transition:null},Rx={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:wl,ReactCurrentOwner:Yh};function d0(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:Io,forEach:function(n,e,t){Io(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Io(n,function(){e++}),e},toArray:function(n){return Io(n,function(e){return e})||[]},only:function(n){if(!qh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ze.Component=ia;Ze.Fragment=mx;Ze.Profiler=_x;Ze.PureComponent=jh;Ze.StrictMode=gx;Ze.Suspense=Sx;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rx;Ze.act=d0;Ze.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=s0({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Yh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)l0.call(e,l)&&!c0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:wo,type:n.type,key:r,ref:s,props:i,_owner:a}};Ze.createContext=function(n){return n={$$typeof:xx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:vx,_context:n},n.Consumer=n};Ze.createElement=u0;Ze.createFactory=function(n){var e=u0.bind(null,n);return e.type=n,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(n){return{$$typeof:yx,render:n}};Ze.isValidElement=qh;Ze.lazy=function(n){return{$$typeof:Ex,_payload:{_status:-1,_result:n},_init:Ax}};Ze.memo=function(n,e){return{$$typeof:Mx,type:n,compare:e===void 0?null:e}};Ze.startTransition=function(n){var e=wl.transition;wl.transition={};try{n()}finally{wl.transition=e}};Ze.unstable_act=d0;Ze.useCallback=function(n,e){return hn.current.useCallback(n,e)};Ze.useContext=function(n){return hn.current.useContext(n)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(n){return hn.current.useDeferredValue(n)};Ze.useEffect=function(n,e){return hn.current.useEffect(n,e)};Ze.useId=function(){return hn.current.useId()};Ze.useImperativeHandle=function(n,e,t){return hn.current.useImperativeHandle(n,e,t)};Ze.useInsertionEffect=function(n,e){return hn.current.useInsertionEffect(n,e)};Ze.useLayoutEffect=function(n,e){return hn.current.useLayoutEffect(n,e)};Ze.useMemo=function(n,e){return hn.current.useMemo(n,e)};Ze.useReducer=function(n,e,t){return hn.current.useReducer(n,e,t)};Ze.useRef=function(n){return hn.current.useRef(n)};Ze.useState=function(n){return hn.current.useState(n)};Ze.useSyncExternalStore=function(n,e,t){return hn.current.useSyncExternalStore(n,e,t)};Ze.useTransition=function(){return hn.current.useTransition()};Ze.version="18.3.1";i0.exports=Ze;var Ae=i0.exports;const Cx=fx(Ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px=Ae,Nx=Symbol.for("react.element"),Lx=Symbol.for("react.fragment"),Ix=Object.prototype.hasOwnProperty,Dx=Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ux={key:!0,ref:!0,__self:!0,__source:!0};function h0(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Ix.call(e,i)&&!Ux.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Nx,type:n,key:s,ref:a,props:r,_owner:Dx.current}}Tc.Fragment=Lx;Tc.jsx=h0;Tc.jsxs=h0;n0.exports=Tc;var A=n0.exports,od={},f0={exports:{}},Nn={},p0={exports:{}},m0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(z,F){var U=z.length;z.push(F);e:for(;0<U;){var Y=U-1>>>1,ae=z[Y];if(0<r(ae,F))z[Y]=F,z[U]=ae,U=Y;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var F=z[0],U=z.pop();if(U!==F){z[0]=U;e:for(var Y=0,ae=z.length,ge=ae>>>1;Y<ge;){var Be=2*(Y+1)-1,Ue=z[Be],De=Be+1,$=z[De];if(0>r(Ue,U))De<ae&&0>r($,Ue)?(z[Y]=$,z[De]=U,Y=De):(z[Y]=Ue,z[Be]=U,Y=Be);else if(De<ae&&0>r($,U))z[Y]=$,z[De]=U,Y=De;else break e}}return F}function r(z,F){var U=z.sortIndex-F.sortIndex;return U!==0?U:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,d=3,p=!1,m=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var F=t(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=z)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(c)}}function x(z){if(M=!1,S(z),!m)if(t(l)!==null)m=!0,Q(T);else{var F=t(c);F!==null&&K(x,F.startTime-z)}}function T(z,F){m=!1,M&&(M=!1,f(v),v=-1),p=!0;var U=d;try{for(S(F),h=t(l);h!==null&&(!(h.expirationTime>F)||z&&!I());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,d=h.priorityLevel;var ae=Y(h.expirationTime<=F);F=n.unstable_now(),typeof ae=="function"?h.callback=ae:h===t(l)&&i(l),S(F)}else i(l);h=t(l)}if(h!==null)var ge=!0;else{var Be=t(c);Be!==null&&K(x,Be.startTime-F),ge=!1}return ge}finally{h=null,d=U,p=!1}}var w=!1,b=null,v=-1,R=5,P=-1;function I(){return!(n.unstable_now()-P<R)}function H(){if(b!==null){var z=n.unstable_now();P=z;var F=!0;try{F=b(!0,z)}finally{F?j():(w=!1,b=null)}}else w=!1}var j;if(typeof _=="function")j=function(){_(H)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,W=k.port2;k.port1.onmessage=H,j=function(){W.postMessage(null)}}else j=function(){g(H,0)};function Q(z){b=z,w||(w=!0,j())}function K(z,F){v=g(function(){z(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){m||p||(m=!0,Q(T))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(z){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var U=d;d=F;try{return z()}finally{d=U}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var U=d;d=z;try{return F()}finally{d=U}},n.unstable_scheduleCallback=function(z,F,U){var Y=n.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Y+U:Y):U=Y,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=U+ae,z={id:u++,callback:F,priorityLevel:z,startTime:U,expirationTime:ae,sortIndex:-1},U>Y?(z.sortIndex=U,e(c,z),t(l)===null&&z===t(c)&&(M?(f(v),v=-1):M=!0,K(x,U-Y))):(z.sortIndex=ae,e(l,z),m||p||(m=!0,Q(T))),z},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(z){var F=d;return function(){var U=d;d=F;try{return z.apply(this,arguments)}finally{d=U}}}})(m0);p0.exports=m0;var kx=p0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx=Ae,Rn=kx;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g0=new Set,Za={};function ns(n,e){js(n,e),js(n+"Capture",e)}function js(n,e){for(Za[n]=e,n=0;n<e.length;n++)g0.add(e[n])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,Ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ap={},Rp={};function Bx(n){return ld.call(Rp,n)?!0:ld.call(Ap,n)?!1:Ox.test(n)?Rp[n]=!0:(Ap[n]=!0,!1)}function zx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Hx(n,e,t,i){if(e===null||typeof e>"u"||zx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$t[n]=new fn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];$t[e]=new fn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){$t[n]=new fn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$t[n]=new fn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$t[n]=new fn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){$t[n]=new fn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){$t[n]=new fn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){$t[n]=new fn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){$t[n]=new fn(n,5,!1,n.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function Zh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace($h,Zh);$t[e]=new fn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace($h,Zh);$t[e]=new fn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace($h,Zh);$t[e]=new fn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){$t[n]=new fn(n,1,!1,n.toLowerCase(),null,!1,!1)});$t.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){$t[n]=new fn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Jh(n,e,t,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hx(e,t,r,i)&&(t=null),i||r===null?Bx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var $i=Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),Qh=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),x0=Symbol.for("react.offscreen"),Cp=Symbol.iterator;function ha(n){return n===null||typeof n!="object"?null:(n=Cp&&n[Cp]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,$c;function Na(n){if($c===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);$c=e&&e[1]||""}return`
`+$c+n}var Zc=!1;function Jc(n,e){if(!n||Zc)return"";Zc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Zc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Na(n):""}function Vx(n){switch(n.tag){case 5:return Na(n.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return n=Jc(n.type,!1),n;case 11:return n=Jc(n.type.render,!1),n;case 1:return n=Jc(n.type,!0),n;default:return""}}function hd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ws:return"Fragment";case Ts:return"Portal";case cd:return"Profiler";case Qh:return"StrictMode";case ud:return"Suspense";case dd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case v0:return(n.displayName||"Context")+".Consumer";case _0:return(n._context.displayName||"Context")+".Provider";case ef:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case tf:return e=n.displayName||null,e!==null?e:hd(n.type)||"Memo";case lr:e=n._payload,n=n._init;try{return hd(n(e))}catch{}}return null}function Gx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hd(e);case 8:return e===Qh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function y0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wx(n){var e=y0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Uo(n){n._valueTracker||(n._valueTracker=Wx(n))}function S0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=y0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Wl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function fd(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Pp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=wr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function M0(n,e){e=e.checked,e!=null&&Jh(n,"checked",e,!1)}function pd(n,e){M0(n,e);var t=wr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?md(n,e.type,t):e.hasOwnProperty("defaultValue")&&md(n,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Np(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function md(n,e,t){(e!=="number"||Wl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var La=Array.isArray;function Fs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+wr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function gd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Lp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(La(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:wr(t)}}function E0(n,e){var t=wr(e.value),i=wr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Ip(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function T0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _d(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?T0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ko,w0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ko.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ja(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xx=["Webkit","ms","Moz","O"];Object.keys(Oa).forEach(function(n){Xx.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Oa[e]=Oa[n]})});function b0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Oa.hasOwnProperty(n)&&Oa[n]?(""+e).trim():e+"px"}function A0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=b0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var jx=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(n,e){if(e){if(jx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function xd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yd=null;function nf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Sd=null,Os=null,Bs=null;function Dp(n){if(n=Ro(n)){if(typeof Sd!="function")throw Error(re(280));var e=n.stateNode;e&&(e=Cc(e),Sd(n.stateNode,n.type,e))}}function R0(n){Os?Bs?Bs.push(n):Bs=[n]:Os=n}function C0(){if(Os){var n=Os,e=Bs;if(Bs=Os=null,Dp(n),e)for(n=0;n<e.length;n++)Dp(e[n])}}function P0(n,e){return n(e)}function N0(){}var Qc=!1;function L0(n,e,t){if(Qc)return n(e,t);Qc=!0;try{return P0(n,e,t)}finally{Qc=!1,(Os!==null||Bs!==null)&&(N0(),C0())}}function Qa(n,e){var t=n.stateNode;if(t===null)return null;var i=Cc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var Md=!1;if(Xi)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){Md=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{Md=!1}function Kx(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Ba=!1,Xl=null,jl=!1,Ed=null,Yx={onError:function(n){Ba=!0,Xl=n}};function qx(n,e,t,i,r,s,a,o,l){Ba=!1,Xl=null,Kx.apply(Yx,arguments)}function $x(n,e,t,i,r,s,a,o,l){if(qx.apply(this,arguments),Ba){if(Ba){var c=Xl;Ba=!1,Xl=null}else throw Error(re(198));jl||(jl=!0,Ed=c)}}function is(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function I0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Up(n){if(is(n)!==n)throw Error(re(188))}function Zx(n){var e=n.alternate;if(!e){if(e=is(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Up(r),n;if(s===i)return Up(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function D0(n){return n=Zx(n),n!==null?U0(n):null}function U0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=U0(n);if(e!==null)return e;n=n.sibling}return null}var k0=Rn.unstable_scheduleCallback,kp=Rn.unstable_cancelCallback,Jx=Rn.unstable_shouldYield,Qx=Rn.unstable_requestPaint,Rt=Rn.unstable_now,ey=Rn.unstable_getCurrentPriorityLevel,rf=Rn.unstable_ImmediatePriority,F0=Rn.unstable_UserBlockingPriority,Kl=Rn.unstable_NormalPriority,ty=Rn.unstable_LowPriority,O0=Rn.unstable_IdlePriority,wc=null,yi=null;function ny(n){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(wc,n,void 0,(n.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:sy,iy=Math.log,ry=Math.LN2;function sy(n){return n>>>=0,n===0?32:31-(iy(n)/ry|0)|0}var Fo=64,Oo=4194304;function Ia(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Ia(o):(s&=a,s!==0&&(i=Ia(s)))}else a=t&~r,a!==0?i=Ia(a):s!==0&&(i=Ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ti(e),r=1<<t,i|=n[t],e&=~r;return i}function ay(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-ti(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=ay(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Td(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function B0(){var n=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),n}function eu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function bo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ti(e),n[e]=t}function ly(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ti(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function sf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ti(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var lt=0;function z0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var H0,af,V0,G0,W0,wd=!1,Bo=[],_r=null,vr=null,xr=null,eo=new Map,to=new Map,hr=[],cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fp(n,e){switch(n){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function pa(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ro(e),e!==null&&af(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function uy(n,e,t,i,r){switch(e){case"focusin":return _r=pa(_r,n,e,t,i,r),!0;case"dragenter":return vr=pa(vr,n,e,t,i,r),!0;case"mouseover":return xr=pa(xr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return eo.set(s,pa(eo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,to.set(s,pa(to.get(s)||null,n,e,t,i,r)),!0}return!1}function X0(n){var e=Hr(n.target);if(e!==null){var t=is(e);if(t!==null){if(e=t.tag,e===13){if(e=I0(t),e!==null){n.blockedOn=e,W0(n.priority,function(){V0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=bd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);yd=i,t.target.dispatchEvent(i),yd=null}else return e=Ro(t),e!==null&&af(e),n.blockedOn=t,!1;e.shift()}return!0}function Op(n,e,t){bl(n)&&t.delete(e)}function dy(){wd=!1,_r!==null&&bl(_r)&&(_r=null),vr!==null&&bl(vr)&&(vr=null),xr!==null&&bl(xr)&&(xr=null),eo.forEach(Op),to.forEach(Op)}function ma(n,e){n.blockedOn===e&&(n.blockedOn=null,wd||(wd=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,dy)))}function no(n){function e(r){return ma(r,n)}if(0<Bo.length){ma(Bo[0],n);for(var t=1;t<Bo.length;t++){var i=Bo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(_r!==null&&ma(_r,n),vr!==null&&ma(vr,n),xr!==null&&ma(xr,n),eo.forEach(e),to.forEach(e),t=0;t<hr.length;t++)i=hr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<hr.length&&(t=hr[0],t.blockedOn===null);)X0(t),t.blockedOn===null&&hr.shift()}var zs=$i.ReactCurrentBatchConfig,ql=!0;function hy(n,e,t,i){var r=lt,s=zs.transition;zs.transition=null;try{lt=1,of(n,e,t,i)}finally{lt=r,zs.transition=s}}function fy(n,e,t,i){var r=lt,s=zs.transition;zs.transition=null;try{lt=4,of(n,e,t,i)}finally{lt=r,zs.transition=s}}function of(n,e,t,i){if(ql){var r=bd(n,e,t,i);if(r===null)uu(n,e,i,$l,t),Fp(n,i);else if(uy(r,n,e,t,i))i.stopPropagation();else if(Fp(n,i),e&4&&-1<cy.indexOf(n)){for(;r!==null;){var s=Ro(r);if(s!==null&&H0(s),s=bd(n,e,t,i),s===null&&uu(n,e,i,$l,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else uu(n,e,i,null,t)}}var $l=null;function bd(n,e,t,i){if($l=null,n=nf(i),n=Hr(n),n!==null)if(e=is(n),e===null)n=null;else if(t=e.tag,t===13){if(n=I0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return $l=n,null}function j0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ey()){case rf:return 1;case F0:return 4;case Kl:case ty:return 16;case O0:return 536870912;default:return 16}default:return 16}}var mr=null,lf=null,Al=null;function K0(){if(Al)return Al;var n,e=lf,t=e.length,i,r="value"in mr?mr.value:mr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Al=r.slice(n,1<i?1-i:void 0)}function Rl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function zo(){return!0}function Bp(){return!1}function Ln(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zo:Bp,this.isPropagationStopped=Bp,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cf=Ln(ra),Ao=wt({},ra,{view:0,detail:0}),py=Ln(Ao),tu,nu,ga,bc=wt({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ga&&(ga&&n.type==="mousemove"?(tu=n.screenX-ga.screenX,nu=n.screenY-ga.screenY):nu=tu=0,ga=n),tu)},movementY:function(n){return"movementY"in n?n.movementY:nu}}),zp=Ln(bc),my=wt({},bc,{dataTransfer:0}),gy=Ln(my),_y=wt({},Ao,{relatedTarget:0}),iu=Ln(_y),vy=wt({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),xy=Ln(vy),yy=wt({},ra,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Sy=Ln(yy),My=wt({},ra,{data:0}),Hp=Ln(My),Ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=wy[n])?!!e[n]:!1}function uf(){return by}var Ay=wt({},Ao,{key:function(n){if(n.key){var e=Ey[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Rl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ty[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(n){return n.type==="keypress"?Rl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Rl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ry=Ln(Ay),Cy=wt({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Ln(Cy),Py=wt({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),Ny=Ln(Py),Ly=wt({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=Ln(Ly),Dy=wt({},bc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=Ln(Dy),ky=[9,13,27,32],df=Xi&&"CompositionEvent"in window,za=null;Xi&&"documentMode"in document&&(za=document.documentMode);var Fy=Xi&&"TextEvent"in window&&!za,Y0=Xi&&(!df||za&&8<za&&11>=za),Gp=" ",Wp=!1;function q0(n,e){switch(n){case"keyup":return ky.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function Oy(n,e){switch(n){case"compositionend":return $0(e);case"keypress":return e.which!==32?null:(Wp=!0,Gp);case"textInput":return n=e.data,n===Gp&&Wp?null:n;default:return null}}function By(n,e){if(bs)return n==="compositionend"||!df&&q0(n,e)?(n=K0(),Al=lf=mr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y0&&e.locale!=="ko"?null:e.data;default:return null}}var zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!zy[n.type]:e==="textarea"}function Z0(n,e,t,i){R0(i),e=Zl(e,"onChange"),0<e.length&&(t=new cf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ha=null,io=null;function Hy(n){l_(n,0)}function Ac(n){var e=Cs(n);if(S0(e))return n}function Vy(n,e){if(n==="change")return e}var J0=!1;if(Xi){var ru;if(Xi){var su="oninput"in document;if(!su){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),su=typeof jp.oninput=="function"}ru=su}else ru=!1;J0=ru&&(!document.documentMode||9<document.documentMode)}function Kp(){Ha&&(Ha.detachEvent("onpropertychange",Q0),io=Ha=null)}function Q0(n){if(n.propertyName==="value"&&Ac(io)){var e=[];Z0(e,io,n,nf(n)),L0(Hy,e)}}function Gy(n,e,t){n==="focusin"?(Kp(),Ha=e,io=t,Ha.attachEvent("onpropertychange",Q0)):n==="focusout"&&Kp()}function Wy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ac(io)}function Xy(n,e){if(n==="click")return Ac(e)}function jy(n,e){if(n==="input"||n==="change")return Ac(e)}function Ky(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ai=typeof Object.is=="function"?Object.is:Ky;function ro(n,e){if(ai(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ld.call(e,r)||!ai(n[r],e[r]))return!1}return!0}function Yp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qp(n,e){var t=Yp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Yp(t)}}function e_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?e_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function t_(){for(var n=window,e=Wl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Wl(n.document)}return e}function hf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Yy(n){var e=t_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&e_(t.ownerDocument.documentElement,t)){if(i!==null&&hf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=qp(t,s);var a=qp(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qy=Xi&&"documentMode"in document&&11>=document.documentMode,As=null,Ad=null,Va=null,Rd=!1;function $p(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Rd||As==null||As!==Wl(i)||(i=As,"selectionStart"in i&&hf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Va&&ro(Va,i)||(Va=i,i=Zl(Ad,"onSelect"),0<i.length&&(e=new cf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=As)))}function Ho(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Rs={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},au={},n_={};Xi&&(n_=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Rc(n){if(au[n])return au[n];if(!Rs[n])return n;var e=Rs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in n_)return au[n]=e[t];return n}var i_=Rc("animationend"),r_=Rc("animationiteration"),s_=Rc("animationstart"),a_=Rc("transitionend"),o_=new Map,Zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(n,e){o_.set(n,e),ns(e,[n])}for(var ou=0;ou<Zp.length;ou++){var lu=Zp[ou],$y=lu.toLowerCase(),Zy=lu[0].toUpperCase()+lu.slice(1);Cr($y,"on"+Zy)}Cr(i_,"onAnimationEnd");Cr(r_,"onAnimationIteration");Cr(s_,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(a_,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Jp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,$x(i,e,void 0,n),n.currentTarget=null}function l_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,o,c),s=l}}}if(jl)throw n=Ed,jl=!1,Ed=null,n}function _t(n,e){var t=e[Id];t===void 0&&(t=e[Id]=new Set);var i=n+"__bubble";t.has(i)||(c_(e,n,2,!1),t.add(i))}function cu(n,e,t){var i=0;e&&(i|=4),c_(t,n,i,e)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function so(n){if(!n[Vo]){n[Vo]=!0,g0.forEach(function(t){t!=="selectionchange"&&(Jy.has(t)||cu(t,!1,n),cu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Vo]||(e[Vo]=!0,cu("selectionchange",!1,e))}}function c_(n,e,t,i){switch(j0(e)){case 1:var r=hy;break;case 4:r=fy;break;default:r=of}t=r.bind(null,e,t,n),r=void 0,!Md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function uu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Hr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}L0(function(){var c=s,u=nf(t),h=[];e:{var d=o_.get(n);if(d!==void 0){var p=cf,m=n;switch(n){case"keypress":if(Rl(t)===0)break e;case"keydown":case"keyup":p=Ry;break;case"focusin":m="focus",p=iu;break;case"focusout":m="blur",p=iu;break;case"beforeblur":case"afterblur":p=iu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ny;break;case i_:case r_:case s_:p=xy;break;case a_:p=Iy;break;case"scroll":p=py;break;case"wheel":p=Uy;break;case"copy":case"cut":case"paste":p=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Vp}var M=(e&4)!==0,g=!M&&n==="scroll",f=M?d!==null?d+"Capture":null:d;M=[];for(var _=c,S;_!==null;){S=_;var x=S.stateNode;if(S.tag===5&&x!==null&&(S=x,f!==null&&(x=Qa(_,f),x!=null&&M.push(ao(_,x,S)))),g)break;_=_.return}0<M.length&&(d=new p(d,m,null,t,u),h.push({event:d,listeners:M}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==yd&&(m=t.relatedTarget||t.fromElement)&&(Hr(m)||m[ji]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=c,m=m?Hr(m):null,m!==null&&(g=is(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(M=zp,x="onMouseLeave",f="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(M=Vp,x="onPointerLeave",f="onPointerEnter",_="pointer"),g=p==null?d:Cs(p),S=m==null?d:Cs(m),d=new M(x,_+"leave",p,t,u),d.target=g,d.relatedTarget=S,x=null,Hr(u)===c&&(M=new M(f,_+"enter",m,t,u),M.target=S,M.relatedTarget=g,x=M),g=x,p&&m)t:{for(M=p,f=m,_=0,S=M;S;S=os(S))_++;for(S=0,x=f;x;x=os(x))S++;for(;0<_-S;)M=os(M),_--;for(;0<S-_;)f=os(f),S--;for(;_--;){if(M===f||f!==null&&M===f.alternate)break t;M=os(M),f=os(f)}M=null}else M=null;p!==null&&Qp(h,d,p,M,!1),m!==null&&g!==null&&Qp(h,g,m,M,!0)}}e:{if(d=c?Cs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=Vy;else if(Xp(d))if(J0)T=jy;else{T=Wy;var w=Gy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=Xy);if(T&&(T=T(n,c))){Z0(h,T,t,u);break e}w&&w(n,d,c),n==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&md(d,"number",d.value)}switch(w=c?Cs(c):window,n){case"focusin":(Xp(w)||w.contentEditable==="true")&&(As=w,Ad=c,Va=null);break;case"focusout":Va=Ad=As=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,$p(h,t,u);break;case"selectionchange":if(qy)break;case"keydown":case"keyup":$p(h,t,u)}var b;if(df)e:{switch(n){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else bs?q0(n,t)&&(v="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(v="onCompositionStart");v&&(Y0&&t.locale!=="ko"&&(bs||v!=="onCompositionStart"?v==="onCompositionEnd"&&bs&&(b=K0()):(mr=u,lf="value"in mr?mr.value:mr.textContent,bs=!0)),w=Zl(c,v),0<w.length&&(v=new Hp(v,n,null,t,u),h.push({event:v,listeners:w}),b?v.data=b:(b=$0(t),b!==null&&(v.data=b)))),(b=Fy?Oy(n,t):By(n,t))&&(c=Zl(c,"onBeforeInput"),0<c.length&&(u=new Hp("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=b))}l_(h,e)})}function ao(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Zl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qa(n,t),s!=null&&i.unshift(ao(n,s,r)),s=Qa(n,e),s!=null&&i.push(ao(n,s,r))),n=n.return}return i}function os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qp(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Qa(t,s),l!=null&&a.unshift(ao(t,l,o))):r||(l=Qa(t,s),l!=null&&a.push(ao(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var Qy=/\r\n?/g,eS=/\u0000|\uFFFD/g;function em(n){return(typeof n=="string"?n:""+n).replace(Qy,`
`).replace(eS,"")}function Go(n,e,t){if(e=em(e),em(n)!==e&&t)throw Error(re(425))}function Jl(){}var Cd=null,Pd=null;function Nd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ld=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,tm=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof tm<"u"?function(n){return tm.resolve(null).then(n).catch(iS)}:Ld;function iS(n){setTimeout(function(){throw n})}function du(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),no(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);no(e)}function yr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function nm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var sa=Math.random().toString(36).slice(2),gi="__reactFiber$"+sa,oo="__reactProps$"+sa,ji="__reactContainer$"+sa,Id="__reactEvents$"+sa,rS="__reactListeners$"+sa,sS="__reactHandles$"+sa;function Hr(n){var e=n[gi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ji]||t[gi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=nm(n);n!==null;){if(t=n[gi])return t;n=nm(n)}return e}n=t,t=n.parentNode}return null}function Ro(n){return n=n[gi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function Cc(n){return n[oo]||null}var Dd=[],Ps=-1;function Pr(n){return{current:n}}function vt(n){0>Ps||(n.current=Dd[Ps],Dd[Ps]=null,Ps--)}function mt(n,e){Ps++,Dd[Ps]=n.current,n.current=e}var br={},sn=Pr(br),_n=Pr(!1),qr=br;function Ks(n,e){var t=n.type.contextTypes;if(!t)return br;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function vn(n){return n=n.childContextTypes,n!=null}function Ql(){vt(_n),vt(sn)}function im(n,e,t){if(sn.current!==br)throw Error(re(168));mt(sn,e),mt(_n,t)}function u_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Gx(n)||"Unknown",r));return wt({},t,i)}function ec(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||br,qr=sn.current,mt(sn,n),mt(_n,_n.current),!0}function rm(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=u_(n,e,qr),i.__reactInternalMemoizedMergedChildContext=n,vt(_n),vt(sn),mt(sn,n)):vt(_n),mt(_n,t)}var Fi=null,Pc=!1,hu=!1;function d_(n){Fi===null?Fi=[n]:Fi.push(n)}function aS(n){Pc=!0,d_(n)}function Nr(){if(!hu&&Fi!==null){hu=!0;var n=0,e=lt;try{var t=Fi;for(lt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Fi=null,Pc=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(n+1)),k0(rf,Nr),r}finally{lt=e,hu=!1}}return null}var Ns=[],Ls=0,tc=null,nc=0,Fn=[],On=0,$r=null,Oi=1,Bi="";function Br(n,e){Ns[Ls++]=nc,Ns[Ls++]=tc,tc=n,nc=e}function h_(n,e,t){Fn[On++]=Oi,Fn[On++]=Bi,Fn[On++]=$r,$r=n;var i=Oi;n=Bi;var r=32-ti(i)-1;i&=~(1<<r),t+=1;var s=32-ti(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Oi=1<<32-ti(e)+r|t<<r|i,Bi=s+n}else Oi=1<<s|t<<r|i,Bi=n}function ff(n){n.return!==null&&(Br(n,1),h_(n,1,0))}function pf(n){for(;n===tc;)tc=Ns[--Ls],Ns[Ls]=null,nc=Ns[--Ls],Ns[Ls]=null;for(;n===$r;)$r=Fn[--On],Fn[On]=null,Bi=Fn[--On],Fn[On]=null,Oi=Fn[--On],Fn[On]=null}var An=null,bn=null,yt=!1,Jn=null;function f_(n,e){var t=Bn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function sm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,An=n,bn=yr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,An=n,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=$r!==null?{id:Oi,overflow:Bi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Bn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,An=n,bn=null,!0):!1;default:return!1}}function Ud(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kd(n){if(yt){var e=bn;if(e){var t=e;if(!sm(n,e)){if(Ud(n))throw Error(re(418));e=yr(t.nextSibling);var i=An;e&&sm(n,e)?f_(i,t):(n.flags=n.flags&-4097|2,yt=!1,An=n)}}else{if(Ud(n))throw Error(re(418));n.flags=n.flags&-4097|2,yt=!1,An=n}}}function am(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;An=n}function Wo(n){if(n!==An)return!1;if(!yt)return am(n),yt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Nd(n.type,n.memoizedProps)),e&&(e=bn)){if(Ud(n))throw p_(),Error(re(418));for(;e;)f_(n,e),e=yr(e.nextSibling)}if(am(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){bn=yr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}bn=null}}else bn=An?yr(n.stateNode.nextSibling):null;return!0}function p_(){for(var n=bn;n;)n=yr(n.nextSibling)}function Ys(){bn=An=null,yt=!1}function mf(n){Jn===null?Jn=[n]:Jn.push(n)}var oS=$i.ReactCurrentBatchConfig;function _a(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function Xo(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function om(n){var e=n._init;return e(n._payload)}function m_(n){function e(f,_){if(n){var S=f.deletions;S===null?(f.deletions=[_],f.flags|=16):S.push(_)}}function t(f,_){if(!n)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Tr(f,_),f.index=0,f.sibling=null,f}function s(f,_,S){return f.index=S,n?(S=f.alternate,S!==null?(S=S.index,S<_?(f.flags|=2,_):S):(f.flags|=2,_)):(f.flags|=1048576,_)}function a(f){return n&&f.alternate===null&&(f.flags|=2),f}function o(f,_,S,x){return _===null||_.tag!==6?(_=xu(S,f.mode,x),_.return=f,_):(_=r(_,S),_.return=f,_)}function l(f,_,S,x){var T=S.type;return T===ws?u(f,_,S.props.children,x,S.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===lr&&om(T)===_.type)?(x=r(_,S.props),x.ref=_a(f,_,S),x.return=f,x):(x=Ul(S.type,S.key,S.props,null,f.mode,x),x.ref=_a(f,_,S),x.return=f,x)}function c(f,_,S,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=yu(S,f.mode,x),_.return=f,_):(_=r(_,S.children||[]),_.return=f,_)}function u(f,_,S,x,T){return _===null||_.tag!==7?(_=Yr(S,f.mode,x,T),_.return=f,_):(_=r(_,S),_.return=f,_)}function h(f,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=xu(""+_,f.mode,S),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Do:return S=Ul(_.type,_.key,_.props,null,f.mode,S),S.ref=_a(f,null,_),S.return=f,S;case Ts:return _=yu(_,f.mode,S),_.return=f,_;case lr:var x=_._init;return h(f,x(_._payload),S)}if(La(_)||ha(_))return _=Yr(_,f.mode,S,null),_.return=f,_;Xo(f,_)}return null}function d(f,_,S,x){var T=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return T!==null?null:o(f,_,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Do:return S.key===T?l(f,_,S,x):null;case Ts:return S.key===T?c(f,_,S,x):null;case lr:return T=S._init,d(f,_,T(S._payload),x)}if(La(S)||ha(S))return T!==null?null:u(f,_,S,x,null);Xo(f,S)}return null}function p(f,_,S,x,T){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(S)||null,o(_,f,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Do:return f=f.get(x.key===null?S:x.key)||null,l(_,f,x,T);case Ts:return f=f.get(x.key===null?S:x.key)||null,c(_,f,x,T);case lr:var w=x._init;return p(f,_,S,w(x._payload),T)}if(La(x)||ha(x))return f=f.get(S)||null,u(_,f,x,T,null);Xo(_,x)}return null}function m(f,_,S,x){for(var T=null,w=null,b=_,v=_=0,R=null;b!==null&&v<S.length;v++){b.index>v?(R=b,b=null):R=b.sibling;var P=d(f,b,S[v],x);if(P===null){b===null&&(b=R);break}n&&b&&P.alternate===null&&e(f,b),_=s(P,_,v),w===null?T=P:w.sibling=P,w=P,b=R}if(v===S.length)return t(f,b),yt&&Br(f,v),T;if(b===null){for(;v<S.length;v++)b=h(f,S[v],x),b!==null&&(_=s(b,_,v),w===null?T=b:w.sibling=b,w=b);return yt&&Br(f,v),T}for(b=i(f,b);v<S.length;v++)R=p(b,f,v,S[v],x),R!==null&&(n&&R.alternate!==null&&b.delete(R.key===null?v:R.key),_=s(R,_,v),w===null?T=R:w.sibling=R,w=R);return n&&b.forEach(function(I){return e(f,I)}),yt&&Br(f,v),T}function M(f,_,S,x){var T=ha(S);if(typeof T!="function")throw Error(re(150));if(S=T.call(S),S==null)throw Error(re(151));for(var w=T=null,b=_,v=_=0,R=null,P=S.next();b!==null&&!P.done;v++,P=S.next()){b.index>v?(R=b,b=null):R=b.sibling;var I=d(f,b,P.value,x);if(I===null){b===null&&(b=R);break}n&&b&&I.alternate===null&&e(f,b),_=s(I,_,v),w===null?T=I:w.sibling=I,w=I,b=R}if(P.done)return t(f,b),yt&&Br(f,v),T;if(b===null){for(;!P.done;v++,P=S.next())P=h(f,P.value,x),P!==null&&(_=s(P,_,v),w===null?T=P:w.sibling=P,w=P);return yt&&Br(f,v),T}for(b=i(f,b);!P.done;v++,P=S.next())P=p(b,f,v,P.value,x),P!==null&&(n&&P.alternate!==null&&b.delete(P.key===null?v:P.key),_=s(P,_,v),w===null?T=P:w.sibling=P,w=P);return n&&b.forEach(function(H){return e(f,H)}),yt&&Br(f,v),T}function g(f,_,S,x){if(typeof S=="object"&&S!==null&&S.type===ws&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Do:e:{for(var T=S.key,w=_;w!==null;){if(w.key===T){if(T=S.type,T===ws){if(w.tag===7){t(f,w.sibling),_=r(w,S.props.children),_.return=f,f=_;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===lr&&om(T)===w.type){t(f,w.sibling),_=r(w,S.props),_.ref=_a(f,w,S),_.return=f,f=_;break e}t(f,w);break}else e(f,w);w=w.sibling}S.type===ws?(_=Yr(S.props.children,f.mode,x,S.key),_.return=f,f=_):(x=Ul(S.type,S.key,S.props,null,f.mode,x),x.ref=_a(f,_,S),x.return=f,f=x)}return a(f);case Ts:e:{for(w=S.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){t(f,_.sibling),_=r(_,S.children||[]),_.return=f,f=_;break e}else{t(f,_);break}else e(f,_);_=_.sibling}_=yu(S,f.mode,x),_.return=f,f=_}return a(f);case lr:return w=S._init,g(f,_,w(S._payload),x)}if(La(S))return m(f,_,S,x);if(ha(S))return M(f,_,S,x);Xo(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(t(f,_.sibling),_=r(_,S),_.return=f,f=_):(t(f,_),_=xu(S,f.mode,x),_.return=f,f=_),a(f)):t(f,_)}return g}var qs=m_(!0),g_=m_(!1),ic=Pr(null),rc=null,Is=null,gf=null;function _f(){gf=Is=rc=null}function vf(n){var e=ic.current;vt(ic),n._currentValue=e}function Fd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Hs(n,e){rc=n,gf=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(gn=!0),n.firstContext=null)}function Gn(n){var e=n._currentValue;if(gf!==n)if(n={context:n,memoizedValue:e,next:null},Is===null){if(rc===null)throw Error(re(308));Is=n,rc.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return e}var Vr=null;function xf(n){Vr===null?Vr=[n]:Vr.push(n)}function __(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,xf(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ki(n,i)}function Ki(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var cr=!1;function yf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(n,t)}return r=i.interleaved,r===null?(e.next=e,xf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(n,t)}function Cl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,sf(n,t)}}function lm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function sc(n,e,t,i){var r=n.updateQueue;cr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=n,M=o;switch(d=e,p=t,M.tag){case 1:if(m=M.payload,typeof m=="function"){h=m.call(p,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=M.payload,d=typeof m=="function"?m.call(p,h,d):m,d==null)break e;h=wt({},h,d);break e;case 2:cr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Jr|=a,n.lanes=a,n.memoizedState=h}}function cm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Co={},Si=Pr(Co),lo=Pr(Co),co=Pr(Co);function Gr(n){if(n===Co)throw Error(re(174));return n}function Sf(n,e){switch(mt(co,e),mt(lo,n),mt(Si,Co),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_d(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=_d(e,n)}vt(Si),mt(Si,e)}function $s(){vt(Si),vt(lo),vt(co)}function x_(n){Gr(co.current);var e=Gr(Si.current),t=_d(e,n.type);e!==t&&(mt(lo,n),mt(Si,t))}function Mf(n){lo.current===n&&(vt(Si),vt(lo))}var Mt=Pr(0);function ac(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function Ef(){for(var n=0;n<fu.length;n++)fu[n]._workInProgressVersionPrimary=null;fu.length=0}var Pl=$i.ReactCurrentDispatcher,pu=$i.ReactCurrentBatchConfig,Zr=0,Et=null,Ut=null,Gt=null,oc=!1,Ga=!1,uo=0,lS=0;function Qt(){throw Error(re(321))}function Tf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ai(n[t],e[t]))return!1;return!0}function wf(n,e,t,i,r,s){if(Zr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=n===null||n.memoizedState===null?hS:fS,n=t(i,r),Ga){s=0;do{if(Ga=!1,uo=0,25<=s)throw Error(re(301));s+=1,Gt=Ut=null,e.updateQueue=null,Pl.current=pS,n=t(i,r)}while(Ga)}if(Pl.current=lc,e=Ut!==null&&Ut.next!==null,Zr=0,Gt=Ut=Et=null,oc=!1,e)throw Error(re(300));return n}function bf(){var n=uo!==0;return uo=0,n}function fi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Et.memoizedState=Gt=n:Gt=Gt.next=n,Gt}function Wn(){if(Ut===null){var n=Et.alternate;n=n!==null?n.memoizedState:null}else n=Ut.next;var e=Gt===null?Et.memoizedState:Gt.next;if(e!==null)Gt=e,Ut=n;else{if(n===null)throw Error(re(310));Ut=n,n={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Gt===null?Et.memoizedState=Gt=n:Gt=Gt.next=n}return Gt}function ho(n,e){return typeof e=="function"?e(n):e}function mu(n){var e=Wn(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=Ut,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Zr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Et.lanes|=u,Jr|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ai(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Et.lanes|=s,Jr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function gu(n){var e=Wn(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);ai(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function y_(){}function S_(n,e){var t=Et,i=Wn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,Af(T_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(t.flags|=2048,fo(9,E_.bind(null,t,i,r,e),void 0,null),Xt===null)throw Error(re(349));Zr&30||M_(t,e,r)}return r}function M_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function E_(n,e,t,i){e.value=t,e.getSnapshot=i,w_(e)&&b_(n)}function T_(n,e,t){return t(function(){w_(e)&&b_(n)})}function w_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ai(n,t)}catch{return!0}}function b_(n){var e=Ki(n,1);e!==null&&ni(e,n,1,-1)}function um(n){var e=fi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:n},e.queue=n,n=n.dispatch=dS.bind(null,Et,n),[e.memoizedState,n]}function fo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function A_(){return Wn().memoizedState}function Nl(n,e,t,i){var r=fi();Et.flags|=n,r.memoizedState=fo(1|e,t,void 0,i===void 0?null:i)}function Nc(n,e,t,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&Tf(i,a.deps)){r.memoizedState=fo(e,t,s,i);return}}Et.flags|=n,r.memoizedState=fo(1|e,t,s,i)}function dm(n,e){return Nl(8390656,8,n,e)}function Af(n,e){return Nc(2048,8,n,e)}function R_(n,e){return Nc(4,2,n,e)}function C_(n,e){return Nc(4,4,n,e)}function P_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function N_(n,e,t){return t=t!=null?t.concat([n]):null,Nc(4,4,P_.bind(null,e,n),t)}function Rf(){}function L_(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Tf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function I_(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Tf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function D_(n,e,t){return Zr&21?(ai(t,e)||(t=B0(),Et.lanes|=t,Jr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,gn=!0),n.memoizedState=t)}function cS(n,e){var t=lt;lt=t!==0&&4>t?t:4,n(!0);var i=pu.transition;pu.transition={};try{n(!1),e()}finally{lt=t,pu.transition=i}}function U_(){return Wn().memoizedState}function uS(n,e,t){var i=Er(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},k_(n))F_(e,t);else if(t=__(n,e,t,i),t!==null){var r=dn();ni(t,n,i,r),O_(t,e,i)}}function dS(n,e,t){var i=Er(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(k_(n))F_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,ai(o,a)){var l=e.interleaved;l===null?(r.next=r,xf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=__(n,e,r,i),t!==null&&(r=dn(),ni(t,n,i,r),O_(t,e,i))}}function k_(n){var e=n.alternate;return n===Et||e!==null&&e===Et}function F_(n,e){Ga=oc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function O_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,sf(n,t)}}var lc={readContext:Gn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},hS={readContext:Gn,useCallback:function(n,e){return fi().memoizedState=[n,e===void 0?null:e],n},useContext:Gn,useEffect:dm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Nl(4194308,4,P_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Nl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Nl(4,2,n,e)},useMemo:function(n,e){var t=fi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=fi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=uS.bind(null,Et,n),[i.memoizedState,n]},useRef:function(n){var e=fi();return n={current:n},e.memoizedState=n},useState:um,useDebugValue:Rf,useDeferredValue:function(n){return fi().memoizedState=n},useTransition:function(){var n=um(!1),e=n[0];return n=cS.bind(null,n[1]),fi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Et,r=fi();if(yt){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),Xt===null)throw Error(re(349));Zr&30||M_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,dm(T_.bind(null,i,s,n),[n]),i.flags|=2048,fo(9,E_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=fi(),e=Xt.identifierPrefix;if(yt){var t=Bi,i=Oi;t=(i&~(1<<32-ti(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=uo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=lS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},fS={readContext:Gn,useCallback:L_,useContext:Gn,useEffect:Af,useImperativeHandle:N_,useInsertionEffect:R_,useLayoutEffect:C_,useMemo:I_,useReducer:mu,useRef:A_,useState:function(){return mu(ho)},useDebugValue:Rf,useDeferredValue:function(n){var e=Wn();return D_(e,Ut.memoizedState,n)},useTransition:function(){var n=mu(ho)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:y_,useSyncExternalStore:S_,useId:U_,unstable_isNewReconciler:!1},pS={readContext:Gn,useCallback:L_,useContext:Gn,useEffect:Af,useImperativeHandle:N_,useInsertionEffect:R_,useLayoutEffect:C_,useMemo:I_,useReducer:gu,useRef:A_,useState:function(){return gu(ho)},useDebugValue:Rf,useDeferredValue:function(n){var e=Wn();return Ut===null?e.memoizedState=n:D_(e,Ut.memoizedState,n)},useTransition:function(){var n=gu(ho)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:y_,useSyncExternalStore:S_,useId:U_,unstable_isNewReconciler:!1};function $n(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Od(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Lc={isMounted:function(n){return(n=n._reactInternals)?is(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=dn(),r=Er(n),s=Vi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Sr(n,s,r),e!==null&&(ni(e,n,r,i),Cl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=dn(),r=Er(n),s=Vi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Sr(n,s,r),e!==null&&(ni(e,n,r,i),Cl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=dn(),i=Er(n),r=Vi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(n,r,i),e!==null&&(ni(e,n,i,t),Cl(e,n,i))}};function hm(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ro(t,i)||!ro(r,s):!0}function B_(n,e,t){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=vn(e)?qr:sn.current,i=e.contextTypes,s=(i=i!=null)?Ks(n,r):br),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function fm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Lc.enqueueReplaceState(e,e.state,null)}function Bd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},yf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=vn(e)?qr:sn.current,r.context=Ks(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Od(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),sc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Zs(n,e){try{var t="",i=e;do t+=Vx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function _u(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function zd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var mS=typeof WeakMap=="function"?WeakMap:Map;function z_(n,e,t){t=Vi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){uc||(uc=!0,$d=i),zd(n,e)},t}function H_(n,e,t){t=Vi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){zd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){zd(n,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function pm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new mS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=CS.bind(null,n,e,t),e.then(n,n))}function mm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function gm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Vi(-1,1),e.tag=2,Sr(t,e,1))),t.lanes|=1),n)}var gS=$i.ReactCurrentOwner,gn=!1;function cn(n,e,t,i){e.child=n===null?g_(e,null,t,i):qs(e,n.child,t,i)}function _m(n,e,t,i,r){t=t.render;var s=e.ref;return Hs(e,r),i=wf(n,e,t,i,s,r),t=bf(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yi(n,e,r)):(yt&&t&&ff(e),e.flags|=1,cn(n,e,i,r),e.child)}function vm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!kf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,V_(n,e,s,i,r)):(n=Ul(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:ro,t(a,i)&&n.ref===e.ref)return Yi(n,e,r)}return e.flags|=1,n=Tr(s,i),n.ref=e.ref,n.return=e,e.child=n}function V_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ro(s,i)&&n.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(gn=!0);else return e.lanes=n.lanes,Yi(n,e,r)}return Hd(n,e,t,i,r)}function G_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Us,Tn),Tn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,mt(Us,Tn),Tn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,mt(Us,Tn),Tn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,mt(Us,Tn),Tn|=i;return cn(n,e,r,t),e.child}function W_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Hd(n,e,t,i,r){var s=vn(t)?qr:sn.current;return s=Ks(e,s),Hs(e,r),t=wf(n,e,t,i,s,r),i=bf(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yi(n,e,r)):(yt&&i&&ff(e),e.flags|=1,cn(n,e,t,r),e.child)}function xm(n,e,t,i,r){if(vn(t)){var s=!0;ec(e)}else s=!1;if(Hs(e,r),e.stateNode===null)Ll(n,e),B_(e,t,i),Bd(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=vn(t)?qr:sn.current,c=Ks(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&fm(e,a,i,c),cr=!1;var d=e.memoizedState;a.state=d,sc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||_n.current||cr?(typeof u=="function"&&(Od(e,t,u,i),l=e.memoizedState),(o=cr||hm(e,t,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,v_(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:$n(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=vn(t)?qr:sn.current,l=Ks(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&fm(e,a,i,l),cr=!1,d=e.memoizedState,a.state=d,sc(e,i,a,r);var m=e.memoizedState;o!==h||d!==m||_n.current||cr?(typeof p=="function"&&(Od(e,t,p,i),m=e.memoizedState),(c=cr||hm(e,t,c,i,d,m,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Vd(n,e,t,i,s,r)}function Vd(n,e,t,i,r,s){W_(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&rm(e,t,!1),Yi(n,e,s);i=e.stateNode,gS.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=qs(e,n.child,null,s),e.child=qs(e,null,o,s)):cn(n,e,o,s),e.memoizedState=i.state,r&&rm(e,t,!0),e.child}function X_(n){var e=n.stateNode;e.pendingContext?im(n,e.pendingContext,e.pendingContext!==e.context):e.context&&im(n,e.context,!1),Sf(n,e.containerInfo)}function ym(n,e,t,i,r){return Ys(),mf(r),e.flags|=256,cn(n,e,t,i),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Wd(n){return{baseLanes:n,cachePool:null,transitions:null}}function j_(n,e,t){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),mt(Mt,r&1),n===null)return kd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Uc(a,i,0,null),n=Yr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Wd(t),e.memoizedState=Gd,n):Cf(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return _S(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Tr(o,s):(s=Yr(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Wd(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Gd,i}return s=n.child,n=s.sibling,i=Tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Cf(n,e){return e=Uc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function jo(n,e,t,i){return i!==null&&mf(i),qs(e,n.child,null,t),n=Cf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function _S(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=_u(Error(re(422))),jo(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),s=Yr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,n.child,null,a),e.child.memoizedState=Wd(a),e.memoizedState=Gd,s);if(!(e.mode&1))return jo(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=_u(s,i,void 0),jo(n,e,a,i)}if(o=(a&n.childLanes)!==0,gn||o){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(n,r),ni(i,n,r,-1))}return Uf(),i=_u(Error(re(421))),jo(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=PS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,bn=yr(r.nextSibling),An=e,yt=!0,Jn=null,n!==null&&(Fn[On++]=Oi,Fn[On++]=Bi,Fn[On++]=$r,Oi=n.id,Bi=n.overflow,$r=e),e=Cf(e,i.children),e.flags|=4096,e)}function Sm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Fd(n.return,e,t)}function vu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function K_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(n,e,i.children,t),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sm(n,t,e);else if(n.tag===19)Sm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(mt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ac(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),vu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ac(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}vu(e,!0,t,null,s);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Jr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=Tr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Tr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function vS(n,e,t){switch(e.tag){case 3:X_(e),Ys();break;case 5:x_(e);break;case 1:vn(e.type)&&ec(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(ic,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(Mt,Mt.current&1),e.flags|=128,null):t&e.child.childLanes?j_(n,e,t):(mt(Mt,Mt.current&1),n=Yi(n,e,t),n!==null?n.sibling:null);mt(Mt,Mt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return K_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,G_(n,e,t)}return Yi(n,e,t)}var Y_,Xd,q_,$_;Y_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Xd=function(){};q_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Gr(Si.current);var s=null;switch(t){case"input":r=fd(n,r),i=fd(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=gd(n,r),i=gd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Jl)}vd(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Za.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Za.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$_=function(n,e,t,i){t!==i&&(e.flags|=4)};function va(n,e){if(!yt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function en(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function xS(n,e,t){var i=e.pendingProps;switch(pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return vn(e.type)&&Ql(),en(e),null;case 3:return i=e.stateNode,$s(),vt(_n),vt(sn),Ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Wo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(Qd(Jn),Jn=null))),Xd(n,e),en(e),null;case 5:Mf(e);var r=Gr(co.current);if(t=e.type,n!==null&&e.stateNode!=null)q_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return en(e),null}if(n=Gr(Si.current),Wo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[oo]=s,n=(e.mode&1)!==0,t){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Da.length;r++)_t(Da[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":Pp(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Lp(i,s),_t("invalid",i)}vd(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,o,n),r=["children",""+o]):Za.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(t){case"input":Uo(i),Np(i,s,!0);break;case"textarea":Uo(i),Ip(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=T0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[gi]=e,n[oo]=i,Y_(n,e,!1,!1),e.stateNode=n;e:{switch(a=xd(t,i),t){case"dialog":_t("cancel",n),_t("close",n),r=i;break;case"iframe":case"object":case"embed":_t("load",n),r=i;break;case"video":case"audio":for(r=0;r<Da.length;r++)_t(Da[r],n);r=i;break;case"source":_t("error",n),r=i;break;case"img":case"image":case"link":_t("error",n),_t("load",n),r=i;break;case"details":_t("toggle",n),r=i;break;case"input":Pp(n,i),r=fd(n,i),_t("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),_t("invalid",n);break;case"textarea":Lp(n,i),r=gd(n,i),_t("invalid",n);break;default:r=i}vd(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?A0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&w0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ja(n,l):typeof l=="number"&&Ja(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Za.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",n):l!=null&&Jh(n,s,l,a))}switch(t){case"input":Uo(n),Np(n,i,!1);break;case"textarea":Uo(n),Ip(n);break;case"option":i.value!=null&&n.setAttribute("value",""+wr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Fs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Jl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(n&&e.stateNode!=null)$_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=Gr(co.current),Gr(Si.current),Wo(e)){if(i=e.stateNode,t=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==t)&&(n=An,n!==null))switch(n.tag){case 3:Go(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Go(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return en(e),null;case 13:if(vt(Mt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(yt&&bn!==null&&e.mode&1&&!(e.flags&128))p_(),Ys(),e.flags|=98560,s=!1;else if(s=Wo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[gi]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else Jn!==null&&(Qd(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Mt.current&1?kt===0&&(kt=3):Uf())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return $s(),Xd(n,e),n===null&&so(e.stateNode.containerInfo),en(e),null;case 10:return vf(e.type._context),en(e),null;case 17:return vn(e.type)&&Ql(),en(e),null;case 19:if(vt(Mt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)va(s,!1);else{if(kt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=ac(n),a!==null){for(e.flags|=128,va(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return mt(Mt,Mt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Rt()>Js&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304)}else{if(!i)if(n=ac(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!yt)return en(e),null}else 2*Rt()-s.renderingStartTime>Js&&t!==1073741824&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,t=Mt.current,mt(Mt,i?t&1|2:t&1),e):(en(e),null);case 22:case 23:return Df(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function yS(n,e){switch(pf(e),e.tag){case 1:return vn(e.type)&&Ql(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return $s(),vt(_n),vt(sn),Ef(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Mf(e),null;case 13:if(vt(Mt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ys()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return vt(Mt),null;case 4:return $s(),null;case 10:return vf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var Ko=!1,rn=!1,SS=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ds(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){bt(n,e,i)}else t.current=null}function jd(n,e,t){try{t()}catch(i){bt(n,e,i)}}var Mm=!1;function MS(n,e){if(Cd=ql,n=t_(),hf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Pd={focusedElem:n,selectionRange:t},ql=!1,Se=e;Se!==null;)if(e=Se,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Se=n;else for(;Se!==null;){e=Se;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var M=m.memoizedProps,g=m.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?M:$n(e.type,M),g);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(x){bt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}return m=Mm,Mm=!1,m}function Wa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&jd(e,t,s)}r=r.next}while(r!==i)}}function Ic(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Kd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Z_(n){var e=n.alternate;e!==null&&(n.alternate=null,Z_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[gi],delete e[oo],delete e[Id],delete e[rS],delete e[sS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function J_(n){return n.tag===5||n.tag===3||n.tag===4}function Em(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||J_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Jl));else if(i!==4&&(n=n.child,n!==null))for(Yd(n,e,t),n=n.sibling;n!==null;)Yd(n,e,t),n=n.sibling}function qd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(qd(n,e,t),n=n.sibling;n!==null;)qd(n,e,t),n=n.sibling}var Yt=null,Zn=!1;function tr(n,e,t){for(t=t.child;t!==null;)Q_(n,e,t),t=t.sibling}function Q_(n,e,t){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(wc,t)}catch{}switch(t.tag){case 5:rn||Ds(t,e);case 6:var i=Yt,r=Zn;Yt=null,tr(n,e,t),Yt=i,Zn=r,Yt!==null&&(Zn?(n=Yt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Yt.removeChild(t.stateNode));break;case 18:Yt!==null&&(Zn?(n=Yt,t=t.stateNode,n.nodeType===8?du(n.parentNode,t):n.nodeType===1&&du(n,t),no(n)):du(Yt,t.stateNode));break;case 4:i=Yt,r=Zn,Yt=t.stateNode.containerInfo,Zn=!0,tr(n,e,t),Yt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&jd(t,e,a),r=r.next}while(r!==i)}tr(n,e,t);break;case 1:if(!rn&&(Ds(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){bt(t,e,o)}tr(n,e,t);break;case 21:tr(n,e,t);break;case 22:t.mode&1?(rn=(i=rn)||t.memoizedState!==null,tr(n,e,t),rn=i):tr(n,e,t);break;default:tr(n,e,t)}}function Tm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new SS),e.forEach(function(i){var r=NS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function jn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,Zn=!1;break e;case 3:Yt=o.stateNode.containerInfo,Zn=!0;break e;case 4:Yt=o.stateNode.containerInfo,Zn=!0;break e}o=o.return}if(Yt===null)throw Error(re(160));Q_(s,a,r),Yt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ev(e,n),e=e.sibling}function ev(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(e,n),ui(n),i&4){try{Wa(3,n,n.return),Ic(3,n)}catch(M){bt(n,n.return,M)}try{Wa(5,n,n.return)}catch(M){bt(n,n.return,M)}}break;case 1:jn(e,n),ui(n),i&512&&t!==null&&Ds(t,t.return);break;case 5:if(jn(e,n),ui(n),i&512&&t!==null&&Ds(t,t.return),n.flags&32){var r=n.stateNode;try{Ja(r,"")}catch(M){bt(n,n.return,M)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&M0(r,s),xd(o,a);var c=xd(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?A0(r,h):u==="dangerouslySetInnerHTML"?w0(r,h):u==="children"?Ja(r,h):Jh(r,u,h,c)}switch(o){case"input":pd(r,s);break;case"textarea":E0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Fs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[oo]=s}catch(M){bt(n,n.return,M)}}break;case 6:if(jn(e,n),ui(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(M){bt(n,n.return,M)}}break;case 3:if(jn(e,n),ui(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(M){bt(n,n.return,M)}break;case 4:jn(e,n),ui(n);break;case 13:jn(e,n),ui(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Lf=Rt())),i&4&&Tm(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(rn=(c=rn)||u,jn(e,n),rn=c):jn(e,n),ui(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Se=n,u=n.child;u!==null;){for(h=Se=u;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:Wa(4,d,d.return);break;case 1:Ds(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(M){bt(i,t,M)}}break;case 5:Ds(d,d.return);break;case 22:if(d.memoizedState!==null){bm(h);continue}}p!==null?(p.return=d,Se=p):bm(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=b0("display",a))}catch(M){bt(n,n.return,M)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){bt(n,n.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:jn(e,n),ui(n),i&4&&Tm(n);break;case 21:break;default:jn(e,n),ui(n)}}function ui(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(J_(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ja(r,""),i.flags&=-33);var s=Em(n);qd(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Em(n);Yd(n,o,a);break;default:throw Error(re(161))}}catch(l){bt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ES(n,e,t){Se=n,tv(n)}function tv(n,e,t){for(var i=(n.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ko;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||rn;o=Ko;var c=rn;if(Ko=a,(rn=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?Am(r):l!==null?(l.return=a,Se=l):Am(r);for(;s!==null;)Se=s,tv(s),s=s.sibling;Se=r,Ko=o,rn=c}wm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):wm(n)}}function wm(n){for(;Se!==null;){var e=Se;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||Ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:$n(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}cm(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&no(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}rn||e.flags&512&&Kd(e)}catch(d){bt(e,e.return,d)}}if(e===n){Se=null;break}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}}function bm(n){for(;Se!==null;){var e=Se;if(e===n){Se=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Se=t;break}Se=e.return}}function Am(n){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ic(4,e)}catch(l){bt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Kd(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{Kd(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===n){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var TS=Math.ceil,cc=$i.ReactCurrentDispatcher,Pf=$i.ReactCurrentOwner,Vn=$i.ReactCurrentBatchConfig,et=0,Xt=null,It=null,qt=0,Tn=0,Us=Pr(0),kt=0,po=null,Jr=0,Dc=0,Nf=0,Xa=null,mn=null,Lf=0,Js=1/0,ki=null,uc=!1,$d=null,Mr=null,Yo=!1,gr=null,dc=0,ja=0,Zd=null,Il=-1,Dl=0;function dn(){return et&6?Rt():Il!==-1?Il:Il=Rt()}function Er(n){return n.mode&1?et&2&&qt!==0?qt&-qt:oS.transition!==null?(Dl===0&&(Dl=B0()),Dl):(n=lt,n!==0||(n=window.event,n=n===void 0?16:j0(n.type)),n):1}function ni(n,e,t,i){if(50<ja)throw ja=0,Zd=null,Error(re(185));bo(n,t,i),(!(et&2)||n!==Xt)&&(n===Xt&&(!(et&2)&&(Dc|=t),kt===4&&fr(n,qt)),xn(n,i),t===1&&et===0&&!(e.mode&1)&&(Js=Rt()+500,Pc&&Nr()))}function xn(n,e){var t=n.callbackNode;oy(n,e);var i=Yl(n,n===Xt?qt:0);if(i===0)t!==null&&kp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&kp(t),e===1)n.tag===0?aS(Rm.bind(null,n)):d_(Rm.bind(null,n)),nS(function(){!(et&6)&&Nr()}),t=null;else{switch(z0(i)){case 1:t=rf;break;case 4:t=F0;break;case 16:t=Kl;break;case 536870912:t=O0;break;default:t=Kl}t=cv(t,nv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function nv(n,e){if(Il=-1,Dl=0,et&6)throw Error(re(327));var t=n.callbackNode;if(Vs()&&n.callbackNode!==t)return null;var i=Yl(n,n===Xt?qt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=hc(n,i);else{e=i;var r=et;et|=2;var s=rv();(Xt!==n||qt!==e)&&(ki=null,Js=Rt()+500,Kr(n,e));do try{AS();break}catch(o){iv(n,o)}while(!0);_f(),cc.current=s,et=r,It!==null?e=0:(Xt=null,qt=0,e=kt)}if(e!==0){if(e===2&&(r=Td(n),r!==0&&(i=r,e=Jd(n,r))),e===1)throw t=po,Kr(n,0),fr(n,i),xn(n,Rt()),t;if(e===6)fr(n,i);else{if(r=n.current.alternate,!(i&30)&&!wS(r)&&(e=hc(n,i),e===2&&(s=Td(n),s!==0&&(i=s,e=Jd(n,s))),e===1))throw t=po,Kr(n,0),fr(n,i),xn(n,Rt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:zr(n,mn,ki);break;case 3:if(fr(n,i),(i&130023424)===i&&(e=Lf+500-Rt(),10<e)){if(Yl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){dn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ld(zr.bind(null,n,mn,ki),e);break}zr(n,mn,ki);break;case 4:if(fr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-ti(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*TS(i/1960))-i,10<i){n.timeoutHandle=Ld(zr.bind(null,n,mn,ki),i);break}zr(n,mn,ki);break;case 5:zr(n,mn,ki);break;default:throw Error(re(329))}}}return xn(n,Rt()),n.callbackNode===t?nv.bind(null,n):null}function Jd(n,e){var t=Xa;return n.current.memoizedState.isDehydrated&&(Kr(n,e).flags|=256),n=hc(n,e),n!==2&&(e=mn,mn=t,e!==null&&Qd(e)),n}function Qd(n){mn===null?mn=n:mn.push.apply(mn,n)}function wS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(n,e){for(e&=~Nf,e&=~Dc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ti(e),i=1<<t;n[t]=-1,e&=~i}}function Rm(n){if(et&6)throw Error(re(327));Vs();var e=Yl(n,0);if(!(e&1))return xn(n,Rt()),null;var t=hc(n,e);if(n.tag!==0&&t===2){var i=Td(n);i!==0&&(e=i,t=Jd(n,i))}if(t===1)throw t=po,Kr(n,0),fr(n,e),xn(n,Rt()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,zr(n,mn,ki),xn(n,Rt()),null}function If(n,e){var t=et;et|=1;try{return n(e)}finally{et=t,et===0&&(Js=Rt()+500,Pc&&Nr())}}function Qr(n){gr!==null&&gr.tag===0&&!(et&6)&&Vs();var e=et;et|=1;var t=Vn.transition,i=lt;try{if(Vn.transition=null,lt=1,n)return n()}finally{lt=i,Vn.transition=t,et=e,!(et&6)&&Nr()}}function Df(){Tn=Us.current,vt(Us)}function Kr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,tS(t)),It!==null)for(t=It.return;t!==null;){var i=t;switch(pf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ql();break;case 3:$s(),vt(_n),vt(sn),Ef();break;case 5:Mf(i);break;case 4:$s();break;case 13:vt(Mt);break;case 19:vt(Mt);break;case 10:vf(i.type._context);break;case 22:case 23:Df()}t=t.return}if(Xt=n,It=n=Tr(n.current,null),qt=Tn=e,kt=0,po=null,Nf=Dc=Jr=0,mn=Xa=null,Vr!==null){for(e=0;e<Vr.length;e++)if(t=Vr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Vr=null}return n}function iv(n,e){do{var t=It;try{if(_f(),Pl.current=lc,oc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}oc=!1}if(Zr=0,Gt=Ut=Et=null,Ga=!1,uo=0,Pf.current=null,t===null||t.return===null){kt=1,po=e,It=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=mm(a);if(p!==null){p.flags&=-257,gm(p,a,o,s,e),p.mode&1&&pm(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var M=new Set;M.add(l),e.updateQueue=M}else m.add(l);break e}else{if(!(e&1)){pm(s,c,e),Uf();break e}l=Error(re(426))}}else if(yt&&o.mode&1){var g=mm(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),gm(g,a,o,s,e),mf(Zs(l,o));break e}}s=l=Zs(l,o),kt!==4&&(kt=2),Xa===null?Xa=[s]:Xa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=z_(s,l,e);lm(s,f);break e;case 1:o=l;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Mr===null||!Mr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=H_(s,o,e);lm(s,x);break e}}s=s.return}while(s!==null)}av(t)}catch(T){e=T,It===t&&t!==null&&(It=t=t.return);continue}break}while(!0)}function rv(){var n=cc.current;return cc.current=lc,n===null?lc:n}function Uf(){(kt===0||kt===3||kt===2)&&(kt=4),Xt===null||!(Jr&268435455)&&!(Dc&268435455)||fr(Xt,qt)}function hc(n,e){var t=et;et|=2;var i=rv();(Xt!==n||qt!==e)&&(ki=null,Kr(n,e));do try{bS();break}catch(r){iv(n,r)}while(!0);if(_f(),et=t,cc.current=i,It!==null)throw Error(re(261));return Xt=null,qt=0,kt}function bS(){for(;It!==null;)sv(It)}function AS(){for(;It!==null&&!Jx();)sv(It)}function sv(n){var e=lv(n.alternate,n,Tn);n.memoizedProps=n.pendingProps,e===null?av(n):It=e,Pf.current=null}function av(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=yS(t,e),t!==null){t.flags&=32767,It=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{kt=6,It=null;return}}else if(t=xS(t,e,Tn),t!==null){It=t;return}if(e=e.sibling,e!==null){It=e;return}It=e=n}while(e!==null);kt===0&&(kt=5)}function zr(n,e,t){var i=lt,r=Vn.transition;try{Vn.transition=null,lt=1,RS(n,e,t,i)}finally{Vn.transition=r,lt=i}return null}function RS(n,e,t,i){do Vs();while(gr!==null);if(et&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(ly(n,s),n===Xt&&(It=Xt=null,qt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Yo||(Yo=!0,cv(Kl,function(){return Vs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var a=lt;lt=1;var o=et;et|=4,Pf.current=null,MS(n,t),ev(t,n),Yy(Pd),ql=!!Cd,Pd=Cd=null,n.current=t,ES(t),Qx(),et=o,lt=a,Vn.transition=s}else n.current=t;if(Yo&&(Yo=!1,gr=n,dc=r),s=n.pendingLanes,s===0&&(Mr=null),ny(t.stateNode),xn(n,Rt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(uc)throw uc=!1,n=$d,$d=null,n;return dc&1&&n.tag!==0&&Vs(),s=n.pendingLanes,s&1?n===Zd?ja++:(ja=0,Zd=n):ja=0,Nr(),null}function Vs(){if(gr!==null){var n=z0(dc),e=Vn.transition,t=lt;try{if(Vn.transition=null,lt=16>n?16:n,gr===null)var i=!1;else{if(n=gr,gr=null,dc=0,et&6)throw Error(re(331));var r=et;for(et|=4,Se=n.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:Wa(8,u,s)}var h=u.child;if(h!==null)h.return=u,Se=h;else for(;Se!==null;){u=Se;var d=u.sibling,p=u.return;if(Z_(u),u===c){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var m=s.alternate;if(m!==null){var M=m.child;if(M!==null){m.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var _=n.current;for(Se=_;Se!==null;){a=Se;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Se=S;else e:for(a=_;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ic(9,o)}}catch(T){bt(o,o.return,T)}if(o===a){Se=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,Se=x;break e}Se=o.return}}if(et=r,Nr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(wc,n)}catch{}i=!0}return i}finally{lt=t,Vn.transition=e}}return!1}function Cm(n,e,t){e=Zs(t,e),e=z_(n,e,1),n=Sr(n,e,1),e=dn(),n!==null&&(bo(n,1,e),xn(n,e))}function bt(n,e,t){if(n.tag===3)Cm(n,n,t);else for(;e!==null;){if(e.tag===3){Cm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){n=Zs(t,n),n=H_(e,n,1),e=Sr(e,n,1),n=dn(),e!==null&&(bo(e,1,n),xn(e,n));break}}e=e.return}}function CS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=dn(),n.pingedLanes|=n.suspendedLanes&t,Xt===n&&(qt&t)===t&&(kt===4||kt===3&&(qt&130023424)===qt&&500>Rt()-Lf?Kr(n,0):Nf|=t),xn(n,e)}function ov(n,e){e===0&&(n.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var t=dn();n=Ki(n,e),n!==null&&(bo(n,e,t),xn(n,t))}function PS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ov(n,t)}function NS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),ov(n,t)}var lv;lv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||_n.current)gn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return gn=!1,vS(n,e,t);gn=!!(n.flags&131072)}else gn=!1,yt&&e.flags&1048576&&h_(e,nc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ll(n,e),n=e.pendingProps;var r=Ks(e,sn.current);Hs(e,t),r=wf(null,e,i,n,r,t);var s=bf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yf(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,Bd(e,i,n,t),e=Vd(null,e,i,!0,s,t)):(e.tag=0,yt&&s&&ff(e),cn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ll(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=IS(i),n=$n(i,n),r){case 0:e=Hd(null,e,i,n,t);break e;case 1:e=xm(null,e,i,n,t);break e;case 11:e=_m(null,e,i,n,t);break e;case 14:e=vm(null,e,i,$n(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Hd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),xm(n,e,i,r,t);case 3:e:{if(X_(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,v_(n,e),sc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(re(423)),e),e=ym(n,e,i,t,r);break e}else if(i!==r){r=Zs(Error(re(424)),e),e=ym(n,e,i,t,r);break e}else for(bn=yr(e.stateNode.containerInfo.firstChild),An=e,yt=!0,Jn=null,t=g_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ys(),i===r){e=Yi(n,e,t);break e}cn(n,e,i,t)}e=e.child}return e;case 5:return x_(e),n===null&&kd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Nd(i,r)?a=null:s!==null&&Nd(i,s)&&(e.flags|=32),W_(n,e),cn(n,e,a,t),e.child;case 6:return n===null&&kd(e),null;case 13:return j_(n,e,t);case 4:return Sf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=qs(e,null,i,t):cn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),_m(n,e,i,r,t);case 7:return cn(n,e,e.pendingProps,t),e.child;case 8:return cn(n,e,e.pendingProps.children,t),e.child;case 12:return cn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,mt(ic,i._currentValue),i._currentValue=a,s!==null)if(ai(s.value,a)){if(s.children===r.children&&!_n.current){e=Yi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Fd(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Fd(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}cn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,t),r=Gn(r),i=i(r),e.flags|=1,cn(n,e,i,t),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),vm(n,e,i,r,t);case 15:return V_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Ll(n,e),e.tag=1,vn(i)?(n=!0,ec(e)):n=!1,Hs(e,t),B_(e,i,r),Bd(e,i,r,t),Vd(null,e,i,!0,n,t);case 19:return K_(n,e,t);case 22:return G_(n,e,t)}throw Error(re(156,e.tag))};function cv(n,e){return k0(n,e)}function LS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(n,e,t,i){return new LS(n,e,t,i)}function kf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function IS(n){if(typeof n=="function")return kf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ef)return 11;if(n===tf)return 14}return 2}function Tr(n,e){var t=n.alternate;return t===null?(t=Bn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ul(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")kf(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case ws:return Yr(t.children,r,s,e);case Qh:a=8,r|=8;break;case cd:return n=Bn(12,t,e,r|2),n.elementType=cd,n.lanes=s,n;case ud:return n=Bn(13,t,e,r),n.elementType=ud,n.lanes=s,n;case dd:return n=Bn(19,t,e,r),n.elementType=dd,n.lanes=s,n;case x0:return Uc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case _0:a=10;break e;case v0:a=9;break e;case ef:a=11;break e;case tf:a=14;break e;case lr:a=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=Bn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Yr(n,e,t,i){return n=Bn(7,n,i,e),n.lanes=t,n}function Uc(n,e,t,i){return n=Bn(22,n,i,e),n.elementType=x0,n.lanes=t,n.stateNode={isHidden:!1},n}function xu(n,e,t){return n=Bn(6,n,null,e),n.lanes=t,n}function yu(n,e,t){return e=Bn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function DS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ff(n,e,t,i,r,s,a,o,l){return n=new DS(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(s),n}function US(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function uv(n){if(!n)return br;n=n._reactInternals;e:{if(is(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(vn(t))return u_(n,t,e)}return e}function dv(n,e,t,i,r,s,a,o,l){return n=Ff(t,i,!0,n,r,s,a,o,l),n.context=uv(null),t=n.current,i=dn(),r=Er(t),s=Vi(i,r),s.callback=e??null,Sr(t,s,r),n.current.lanes=r,bo(n,r,i),xn(n,i),n}function kc(n,e,t,i){var r=e.current,s=dn(),a=Er(r);return t=uv(t),e.context===null?e.context=t:e.pendingContext=t,e=Vi(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Sr(r,e,a),n!==null&&(ni(n,r,a,s),Cl(n,r,a)),a}function fc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Of(n,e){Pm(n,e),(n=n.alternate)&&Pm(n,e)}function kS(){return null}var hv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bf(n){this._internalRoot=n}Fc.prototype.render=Bf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));kc(n,e,null,null)};Fc.prototype.unmount=Bf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Qr(function(){kc(null,n,null,null)}),e[ji]=null}};function Fc(n){this._internalRoot=n}Fc.prototype.unstable_scheduleHydration=function(n){if(n){var e=G0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<hr.length&&e!==0&&e<hr[t].priority;t++);hr.splice(t,0,n),t===0&&X0(n)}};function zf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Oc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function FS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=fc(a);s.call(c)}}var a=dv(e,i,n,0,null,!1,!1,"",Nm);return n._reactRootContainer=a,n[ji]=a.current,so(n.nodeType===8?n.parentNode:n),Qr(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=fc(l);o.call(c)}}var l=Ff(n,0,!1,null,null,!1,!1,"",Nm);return n._reactRootContainer=l,n[ji]=l.current,so(n.nodeType===8?n.parentNode:n),Qr(function(){kc(e,l,t,i)}),l}function Bc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=fc(a);o.call(l)}}kc(e,a,n,r)}else a=FS(t,e,n,r,i);return fc(a)}H0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ia(e.pendingLanes);t!==0&&(sf(e,t|1),xn(e,Rt()),!(et&6)&&(Js=Rt()+500,Nr()))}break;case 13:Qr(function(){var i=Ki(n,1);if(i!==null){var r=dn();ni(i,n,1,r)}}),Of(n,1)}};af=function(n){if(n.tag===13){var e=Ki(n,134217728);if(e!==null){var t=dn();ni(e,n,134217728,t)}Of(n,134217728)}};V0=function(n){if(n.tag===13){var e=Er(n),t=Ki(n,e);if(t!==null){var i=dn();ni(t,n,e,i)}Of(n,e)}};G0=function(){return lt};W0=function(n,e){var t=lt;try{return lt=n,e()}finally{lt=t}};Sd=function(n,e,t){switch(e){case"input":if(pd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Cc(i);if(!r)throw Error(re(90));S0(i),pd(i,r)}}}break;case"textarea":E0(n,t);break;case"select":e=t.value,e!=null&&Fs(n,!!t.multiple,e,!1)}};P0=If;N0=Qr;var OS={usingClientEntryPoint:!1,Events:[Ro,Cs,Cc,R0,C0,If]},xa={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BS={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=D0(n),n===null?null:n.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||kS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{wc=qo.inject(BS),yi=qo}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;Nn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(e))throw Error(re(200));return US(n,e,null,t)};Nn.createRoot=function(n,e){if(!zf(n))throw Error(re(299));var t=!1,i="",r=hv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ff(n,1,!1,null,null,t,!1,i,r),n[ji]=e.current,so(n.nodeType===8?n.parentNode:n),new Bf(e)};Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=D0(e),n=n===null?null:n.stateNode,n};Nn.flushSync=function(n){return Qr(n)};Nn.hydrate=function(n,e,t){if(!Oc(e))throw Error(re(200));return Bc(null,n,e,!0,t)};Nn.hydrateRoot=function(n,e,t){if(!zf(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=hv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=dv(e,null,n,1,t??null,r,!1,s,a),n[ji]=e.current,so(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Fc(e)};Nn.render=function(n,e,t){if(!Oc(e))throw Error(re(200));return Bc(null,n,e,!1,t)};Nn.unmountComponentAtNode=function(n){if(!Oc(n))throw Error(re(40));return n._reactRootContainer?(Qr(function(){Bc(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1};Nn.unstable_batchedUpdates=If;Nn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Oc(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return Bc(n,e,t,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fv)}catch(n){console.error(n)}}fv(),f0.exports=Nn;var zS=f0.exports,Lm=zS;od.createRoot=Lm.createRoot,od.hydrateRoot=Lm.hydrateRoot;const Kt={name:"Kaustya",nickname:"Dhakkan / Bakchod King",alias:"IPC Dhara 420 Ka Badshah",school:"KV / St. Xavier's / Backbencher Squad",friendsSince:"Class 7th (Jab se isne pencil churaana shuru kiya)",birthday:"2026-10-14T00:00:00",whatsappNumber:"",secretPassword:"partykabdega",secretHint:"Hint: Wo sawaal jo har dost isse roz puchta hai (p _ _ _ _ k _ _ d _ _ _)",secretMessage:["Sun be Kaustya, chahe hum poora saal teri kitni bhi fielding lagayein aur gaaliyan de...","Sach yeh hai ki school ke us pehle din se le kar aaj tak, tere jaisa jigri aur loyal yaar poori duniya mein doosra nahi hai.","Hamari group chat ka laughter dose aur har faltu plan ka partner sirf tu hi ho sakta hai.","Har mushkil mein chupchap peeche khada rehna aur bina bataye sath dena, ye sirf tera style hai kamine.","Bhai tu jaisa bhi hai, harami hai par jaan se zyada pyara hai. Umar badh rahi hai teri, thoda aqal bhi badha le!","Wish you the happiest, wildest and most successful birthday mere bhai! Hamesha chamakta reh. Aur haan... party ka bill tu hi dega!"],photos:[{src:"./photos/photo1.jpg",caption:"Exhibit A: School Ground Encounter - Chehre pe aisi masoomiyat jaise homework kabhi miss hi na kiya ho.",alt:"Kaustya school selfie"},{src:"./photos/photo2.jpg",caption:"Exhibit B: The Candid Dhakkan - Aasman ki taraf dekhte hue deep soch mein ki 'aaj kiska dabba churana hai'.",alt:"Kaustya looking up candid"},{src:"./photos/photo3.jpg",caption:"Exhibit C: Traditional Sher - Kurta pehen ke sanskari ladka banne ka desperate prayas.",alt:"Kaustya in traditional kurta"},{src:"./photos/photo4.jpg",caption:"Exhibit D: Bada Babu Syndrome - Blazer pehen ke aukaat se 10x bada corporate CEO pose.",alt:"Kaustya in blazer formal"},{src:"./photos/photo5.jpg",caption:"Exhibit E: Selfie King of Mediocrity - 45 angle try karne ke baad aakhri mein yahi sabse kam kharab laga.",alt:"Kaustya front camera selfie"},{src:"./photos/photo6.jpg",caption:"Exhibit F: Serious Backchodi - Dimag mein 0 thoughts, aankhon mein 100% lukkha energy.",alt:"Kaustya side profile"},{src:"./photos/photo7.jpg",caption:"Exhibit G: Black & White Filosofar - 'Zindagi ek rangmanch hai aur main bina script ka joker hoon'.",alt:"Kaustya artistic shot"},{src:"./photos/photo8.jpg",caption:"Exhibit H: Saste Shah Rukh Khan - Pahad pe danda leke khada hai jaise DDLJ ka Simran dhoondh raha ho.",alt:"Kaustya arms open on hill"},{src:"./photos/photo9.jpg",caption:"Exhibit I: College Corridor Menace - Attendance 65% hai lekin swag 100% leke ghoom raha hai.",alt:"Kaustya casual outdoors"},{src:"./photos/photo10.jpg",caption:"Exhibit J: Shaadi Crash Master - Sherwani check, attitude check, shagun ka lifafa empty check.",alt:"Kaustya festive wear"},{src:"./photos/photo11.jpg",caption:"Exhibit K: Chashma Lagake Einstein - Aankhon pe shades aur dimaag mein tab bhi zero calculation.",alt:"Kaustya with sunglasses"},{src:"./photos/photo12.jpg",caption:"Exhibit L: 90s Bootcut Disaster - Pink kamra, neela washbasin, aur oversized maroon sweatshirt ka lethal combination.",alt:"Kaustya standing near washbasin"},{src:"./photos/photo13.jpg",caption:"Exhibit M: The Chai Pe Charcha - 10 rupaye ki chai pe 10 cr ki startup strategy fekne wala expression.",alt:"Kaustya chilling"},{src:"./photos/photo14.jpg",caption:"Exhibit N: Gym Jaane Ka Fake Sapna - Ek din pushup maarke agle 2 hafte muscle pain ka rona.",alt:"Kaustya flexing"},{src:"./photos/photo15.jpg",caption:"Exhibit O: Kabir Singh Lite - Purani building ke aage jacket kamar pe baandh ke raw cinematic walk.",alt:"Kaustya walking candidly"},{src:"./photos/photo16.jpg",caption:"Exhibit P: The Donation Box Scandal - Namdroling Monastery mein chanda box ke theek bagal mein suspicious khada hona.",alt:"Kaustya standing next to Donation Box"},{src:"./photos/photo17.jpg",caption:"Exhibit Q: Crime Syndicate - Nadi ke upar narrow concrete bridge par taangein latkaaye teen harami yaar.",alt:"Kaustya and friends on bridge"},{src:"./photos/photo18.jpg",caption:"Exhibit R: Raat Ke 2 Baje Red Handed - Andhere mein aisi fati hui aankhein jaise fridge se kaju katli churata pakda gaya ho.",alt:"Kaustya in dark with light on face"}],witnesses:[{id:"w-1",name:"Rohan (School Backbencher)",relation:"Last Bench Co-Conspirator",badge:"Sworn Under Oath",text:"Milord, main geeta pe haath rakh ke kehta hoon, Class 9th ke physics practical mein Kaustya ne salt solution pi liya tha ye soch ke ki lemonade hai. Iski aisi harkaton ki wajah se hamara poora bench badnaam tha!"},{id:"w-2",name:"Ayush (The Zomato Sponsor)",relation:"Permanent Financial Sufferer",badge:"Bank Balance Ruined",text:"Jab bhi cafe mein bill aata hai, Kaustya ka hath seedha pocket ke andar jata hai aur 15 minute tak bahar nahi nikalta. Kehta hai 'Yaar mera wallet car mein reh gaya'. Iske paas car bhi nahi hai saale ke paas!"},{id:"w-3",name:"Shashank (Group Admin)",relation:"WhatsApp Chat Survivor",badge:"Mental Peace Destroyed",text:"Har shaam ko group pe call karega: 'Bhai gedi maarne chalein?'. Jab hum sab tayyar hoke niche khade ho jate hain, toh message daalta hai 'Mummy ne chai banane bola hai, cancel'. Aise dost ko dushman ki zaroorat nahi."},{id:"w-4",name:"Pooja (The Class Monitor)",relation:"Victim of Fake Excuses",badge:"Eye-Witness to Crime",text:"Har Monday ko iska ek naya dada ya nani bimaar hoti thi. Sir ko bolta tha 'Ghar pe light chali gayi thi isliye homework nahi kiya'. Online class mein mic mute karke chips chaba raha tha nalayak Kaustya."},{id:"w-5",name:"Vikram (The Roadtrip Sufferer)",relation:"Bike Pillion Rider",badge:"Spine Damaged",text:"Pichle saal bola 'Bhai 20 km ki short ride hai mast maggi point chalenge'. 140 km ghumaya bina petrol ke dhakka marwate hue. Tab se maine Kaustya ke sath kahin bhi jana chhod diya hai."},{id:"w-6",name:"Tripti (Mutual Friend)",relation:"Roast Department Head",badge:"Certified Sarcasm Queen",text:"Kaustya photo khinchwate waqt aise 32 daant dikhata hai jaise Colgate ka brand ambassador banne wala ho. But honest review: chahe kitna bhi dhakkan ho, party ka bill chhod ke dil ka accha hai."}],roasts:["Kaustya bhai, tu time pe tabhi aata hai jab agle din aana ho saale!","Tere dimaag mein utna hi data hai jitna 2G network mein speed aati hai kamine.","Tera confidence dekh ke lagta hai ki tere paas ambani ka paisa hai, par jeb mein bas do metro token hain bakchod Kaustya.","Tu photo mein aisi shakal banata hai jaise aadhar card ka camera tere bedroom mein laga ho gadhe.","Bhai tu jab bolta hai 'Main 5 minute mein aaya', toh Google Maps bhi 45 minute ka traffic dikhane lagta hai saale.","Tere jaise dost hone ke baad dushman ko toh retirement le leni chahiye harami Kaustya!","Bhai teri memory itni sharp hai ki bill aate hi tu apna naam tak bhool jata hai lukkha.","Duniya mein do tarah ke log hote hain: ek jo akal se sochte hain, aur doosra Kaustya jo bas so jaata hai nalayak.","Kaustya ka gym routine: 1 din reel dekhna, 2 din gym wear khareedna, aur 362 din bed pe aalsi ban ke padhe rehna dhakkan.","Tera WhatsApp status dekh ke lagta hai tu philosopher hai, par milne par wahi chapri harkatein shuru!","Bhai tu Goa ke plan mein itni baar cancel hua hai ki Goa government ne tere naam par FIR darj kar di hai saale Kaustya.","Tere jokes sun ke comedy show wale bhi maatam manane baith jaate hain bakchod.","Kaustya se udhar maangna matlab Titanic se ice-cream maangne barabar hai kamine.","Tu single isliye nahi hai ki kismat kharab hai, ladkiyan darr jaati hain teri ajeeb selfies dekh kar gadhe!","Bhai tu shaadi mein khana khane nahi, catering wale ki inventory check karne jata hai harami.","Tere sar pe baal itne nahi hain jitne tere paas late aane ke jhoothe bahane hain saale Kaustya.","Kaustya ka fashion sense dekh ke lagta hai kapde lottery mein jeet ke pehne hain lukkha.","Bhai tu dost nahi, life ka wo tax hai jo har mahine bina fayde ke bharna padta hai bakchod.","Tu ladkiyon se aise baat karta hai jaise customer care ko broadband connection ki complaint kar raha ho dhakkan.","Tere haath mein phone tabhi ring karta hai jab kisi ko hotspot chahiye hota hai nalayak.","Bhai teri body mein khoon kam aur bakar zyada daudti hai saale kamine Kaustya.","Kaustya ko agar aalsi banne ka competition diya jaye, toh ye participate karne ke liye bhi kal subah aayega!","Tu group photo mein hamesha aise khada hota hai jaise police lineup mein sabse pehla suspect tu hi hai gadhe.","Bhai tera dimaag agar olx pe becha jaye toh new condition mein bikega kyunki kabhi use hi nahi kiya harami!","Kaustya ke paas har sawaal ka ek hi jawab hota hai: 'Chhodo na bhai, chill maro' saale kaamchor.","Tere jaise dhakkan ko NASA wale dhoondh rahe hain black hole ka practical sample samajh ke!","Bhai tu birthday pe party mangne par aise rota hai jaise tera kidney collateral pe rakha ho bakchod Kaustya.","Kaustya ka diet plan: subah junk food, dopehar mein maggi, aur raat ko 'Yaar weight badh raha hai' ka rona kamine.","Tu jab serious face banata hai na, lagta hai pet mein gas bani hui hai saale chapri.","Bhai tu bike aise chalata hai jaise yamraj tere peeche pillion pe baitha ho lukkha.","Tere dimaag ki batti jalne mein utna hi time lagta hai jitna purani Bajaj Chetak ko kick marne mein lagta hai gadhe Kaustya.","Kaustya se secret share karna matlab DD National pe live telecast chalana barabar hai harami.","Bhai tu itna kanjoos hai ki agar paani bhi peena ho toh dost ke ghar ki ghanti bajata hai saale!","Tere insta bio mein likha hai 'Dreamer', sach toh yeh hai ki din bhar soye rehne ko sapna nahi bolte bakchod.","Tu class mein hamesha aisi shakal banata tha jaise teacher ne seedha Russian language mein lecture diya ho dhakkan.","Bhai tere jaisa dost milna kismat ki baat hai... aur aisi kismat bhagwan kisi dushman ko bhi na de kamine Kaustya!","Kaustya ka fav dialogue: 'Bhai tu dekh lega na?'. Haan bhai, sab hum hi dekhenge, tu aaram se aish kar nalayak.","Tere baare mein bolne baitho toh dictionary ke saare bakchod shabdh kam pad jaate hain saale.","Bhai tu aadhi raat ko call karke puchta hai 'Jag raha hai kya?'. Nahi behen ke dost, neend mein sapne se baat kar raha hoon!","Kaustya ki birthday wish bhi aisi honi chahiye: Bhagwan isse agli saal thodi si aqal aur bohot saari sharm de harami!","Tu itna bada bakchod hai ki agar bakchodi pe GST lagta toh tu desh ka sabse bada defaulter hota saale Kaustya.","Bhai tere chehre pe jo glow hai na, wo honesty ka nahi, bina bill bhare restaurant se nikalne ki khushi ka hai kamine!","Kaustya ka sapna hai crorepati banna, par mehnat 10 rupaye ki kurkure lene jitni bhi nahi karni lukkha.","Duniya aage nikal gayi, AI aa gaya, par Kaustya abhi bhi 'bhai 2 minute mein call back karta hoon' pe atka hua hai gadhe.","Aakhri baat: chahe tu kitna bhi harami ho, hum sabka favourite gadha tu hi hai saale Kaustya! Happy Birthday!"],awards:[{id:"award-1",title:"Lifetime Achievement in Late Arrival",citation:"5 minute bolke 2 ghante sote rehne ka Vishwa Record.",photoIndex:0,badge:"🥇 Gold Medal"},{id:"award-2",title:"Sasta Corporate CEO of the Decade",citation:"Blazer pehen ke bina salary ke aukaat se 10x formal banne ka jurm.",photoIndex:3,badge:"👔 Formal Bakchod"},{id:"award-3",title:"Best Dramatic Overacting on Mountains",citation:"Pahad pe danda leke saste Shah Rukh Khan ki aatma jagane ka award.",photoIndex:7,badge:"🏔️ Sasta Hero"},{id:"award-4",title:"National Award for Bootcut Fashion Chaos",citation:"Pink room aur neele washbasin ke aage 90s flared jeans ka unmatched display.",photoIndex:11,badge:"👖 Fashion Victim"},{id:"award-5",title:"Monastery Donation Box Guard of Honour",citation:"Mandir mein shanti dhoondhne ke bahaane chanda box ke theek bagal mein spot hona.",photoIndex:15,badge:"💰 Suspicious Fund"},{id:"award-6",title:"Midnight Fridge Robbery Champion",citation:"Aadhi raat ko andhere mein rasgulle churaate waqt fati aankhon ka expression.",photoIndex:17,badge:"🔦 Red Handed"}],reportCard:[{subject:"Punctuality & Time Management",marks:"04 / 100",grade:"FAIL",remark:"Ghadi khareed ke do isko, calendar ke hisaab se chalta hai."},{subject:"Bill Payment & Financial Generosity",marks:"02 / 100",grade:"SUPER FAIL",remark:"UPI QR code dekhte hi phone mein 'No SIM' ka error dikha deta hai."},{subject:"Bakar & Non-stop Bakchodi",marks:"100 / 100",grade:"A+++ (TOPPER)",remark:"Dimaag kharab karne mein PhD holder, kisi ko bhi pagal bana sakta hai."},{subject:"Trip Planning & Commitment",marks:"12 / 100",grade:"CANCELLED",remark:"Iske Goa ke plans bas WhatsApp notes mein sadte rehte hain."},{subject:"Tiffin Stealing & Bhukkad Level",marks:"99 / 100",grade:"DISTINCTION",remark:"Doosron ka khana aise saaf karta hai jaise vacuum cleaner ho."},{subject:"Camera Posing & Hero Giri",marks:"35 / 100",grade:"SUPPLEMENTARY",remark:"Overacting ke 50 rupaye kaato har photo mein."},{subject:"Late Night Philosophical Gyaan",marks:"92 / 100",grade:"GURU JI",remark:"Raat ke 2 baje aisi deep baatein karega jaise Geeta ka naya adhyay likh raha ho."},{subject:"Dosti & Bhaichara (Loyalty)",marks:"100 / 100",grade:"PURA DIL SE",remark:"Harami hai par apna hai. Jaan de dega doston ke liye!"}],voiceNotes:[{id:"audio-1",label:"Audio Evidence #1: 'Bhai 2 minute mein niche aa raha hoon'",src:"./audio/note1.mp3",duration:"0:03",tag:"Epic Lie"},{id:"audio-2",label:"Audio Evidence #2: 'Bhai tu bill de de, ghar jaake GPay pakka'",src:"./audio/note2.mp3",duration:"0:04",tag:"UPI Scam"},{id:"audio-3",label:"Audio Evidence #3: 'Is baar Goa pakka chal rahe hain londe'",src:"./audio/note3.mp3",duration:"0:04",tag:"Fake Promise"}],giftMessages:["Arey pakad ke dikha pehle saale! 😂","Itni aasaani se birthday gift nahi milega gadhe Kaustya! 🏃‍♂️","Thoda aur zor laga! Sasta iPhone dhoondh raha hai kya? 📱","Ek aur try kar kamine, thoda left bhaag! 💨","Bas thoda sa door hai... himmat mat haar bakchod! 🔥","Chal aakhri chance... ab pakad ke dikha! 🎯"],giftUnlockedMessage:`🎉 MUBARAK HO KAUSTYA! GIFT UNLOCKED:
Ek tight hug aur poori birthday party tere upar! Ab chupchap wallet nikaal aur treat de!`,verdictTitle:"Supreme Court of Dosti: Aakhri Faisla Sunaya Jaata Hai",verdictText:`Tamaam sabooton, gawaahon ke bayaan, aur 18 ajeeb photos ko maddenazar rakhte hue... Court is nateeje par pahunchi hai ki Accused KAUSTYA IPC Dhara 420 aur IPC Bakchodi ke tehat poori tarah GUILTY paya gaya hai!

Lekin kyunki aaj iska janamdin hai, iski sazaa ye muqarrar ki jaati hai ki ye hum sabko ek shaandar, dhuandhaar party dega aur poori zindagi hamara best friend ban kar rahega!`,finalWishHeadline:"HAPPY BIRTHDAY KAUSTYA! 🎂👑",finalWishText:"Jiyo hazaaron saal mere bhai! Zindagi mein jitni bhi bakchodi ki hai tune, usse 100 guna zyada khushiyan aur success tujhe mile. Umar badh rahi hai, ab thoda time pe aana seekh le, baaki tu jaisa harami hai waisa hi mast reh!",whatsappShareText:"Oye Kaustya saale! Tere khilaaf court case file ho chuka hai! Ye link dekh aur turant party de: "};function aa(){const n=Ae.useRef(null),e=Ae.useRef([]),t=Ae.useRef(null),i=Ae.useCallback(()=>{let a=n.current;return a||(a=document.getElementById("court-confetti-canvas"),n.current=a),a&&(a.width=window.innerWidth,a.height=window.innerHeight),a},[]),r=Ae.useCallback((a={})=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=i();if(!o||!o.getContext("2d"))return;const{count:c=80,originX:u=.5,originY:h=.5,spread:d=70,startVelocity:p=35,colors:m=["#FFD400","#FF2E88","#00A896","#1B1030","#FFF6D6","#FF8500","#7209B7"]}=a,M=u*o.width,g=h*o.height,f=[];for(let _=0;_<c;_++){const S=Math.PI/180*(270+(Math.random()-.5)*d),x=p*(.6+Math.random()*.8);f.push({x:M,y:g,vx:Math.cos(S)*x,vy:Math.sin(S)*x,color:m[Math.floor(Math.random()*m.length)],size:Math.random()*8+6,rotation:Math.random()*360,rotationSpeed:(Math.random()-.5)*12,wobble:Math.random()*10,wobbleSpeed:Math.random()*.1+.05,opacity:1,shape:Math.random()>.4?"rect":"circle",decay:Math.random()*.015+.01})}if(e.current.push(...f),!t.current){const _=()=>{const S=n.current;if(!S){t.current=null;return}const x=S.getContext("2d");x.clearRect(0,0,S.width,S.height);const T=[],w=e.current;for(let b=0;b<w.length;b++){const v=w[b];if(v.x+=v.vx,v.y+=v.vy,v.vy+=.8,v.vx*=.98,v.rotation+=v.rotationSpeed,v.wobble+=v.wobbleSpeed,v.opacity-=v.decay,v.opacity>0&&v.y<S.height+50){if(x.save(),x.globalAlpha=Math.max(0,v.opacity),x.translate(v.x,v.y),x.rotate(v.rotation*Math.PI/180),x.fillStyle=v.color,v.shape==="rect"){const R=v.size*Math.cos(v.wobble);x.fillRect(-v.size/2,-v.size/2,R,v.size)}else x.beginPath(),x.arc(0,0,v.size/2,0,Math.PI*2),x.fill();x.restore(),T.push(v)}}e.current=T,T.length>0?t.current=requestAnimationFrame(_):(x.clearRect(0,0,S.width,S.height),t.current=null)};t.current=requestAnimationFrame(_)}},[i]);Ae.useEffect(()=>{const a=()=>{i()};return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a),t.current&&cancelAnimationFrame(t.current)}},[i]);const s=Ae.useCallback(()=>{r({originX:.5,originY:.6,count:100,spread:100,startVelocity:40}),setTimeout(()=>{r({originX:.2,originY:.7,count:70,spread:60,startVelocity:45}),r({originX:.8,originY:.7,count:70,spread:60,startVelocity:45})},250)},[r]);return{fire:r,fireCelebration:s,setupCanvas:i}}function HS(){const{setupCanvas:n}=aa();return Ae.useEffect(()=>{n()},[n]),A.jsx("canvas",{id:"court-confetti-canvas","aria-hidden":"true"})}function VS(){const[n,e]=Ae.useState(!1),t=()=>{e(!0);const i=document.getElementById("hero");i&&i.scrollIntoView({behavior:"smooth"})};return A.jsx("aside",{className:"warning-splash","aria-label":"Content Disclaimer Warning",children:A.jsxs("div",{className:"warning-splash-inner",children:[A.jsx("div",{className:"warning-badge",children:A.jsx("span",{children:"🔞 18+ DESI SARKARI NOTICE"})}),A.jsxs("p",{className:"warning-text",children:["⚠️ ",A.jsx("strong",{children:"WARNING:"})," Yahan dost-yaar wali raw Hinglish bakchodi aur mild gaaliyan milengi. Dil pe mat lena, sirf Kaustya ko roast karne ke liye banaya gaya hai!"]}),A.jsx("button",{type:"button",onClick:t,className:"btn btn-yellow",style:{minHeight:"44px",padding:"0.4rem 1.25rem",fontSize:"0.9rem"},"aria-label":"Acknowledge warning and enter court",children:n?"✅ Agreed! Enter Court":"Enter At Your Own Risk ⚖️"})]})})}function GS({voiceNotesCount:n=0}){const[e,t]=Ae.useState("auto");Ae.useEffect(()=>{e==="light"?document.documentElement.setAttribute("data-theme","light"):e==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme")},[e]);const i=()=>{t(e==="auto"||e==="light"?"dark":"light")},r=[{href:"#hero",label:"Court"},{href:"#model3d",label:"3D Avataar 🕺"},{href:"#gallery",label:"Saboot"},{href:"#witnesses",label:"Gawah"},{href:"#roast",label:"Roast 3000"},{href:"#awards",label:"Awards"},{href:"#report",label:"Report Card"},{href:"#meme",label:"Meme Maker"},...n>0?[{href:"#voice",label:"Voice Notes"}]:[],{href:"#gift",label:"Gift Claim"},{href:"#secret",label:"Secret Vault"},{href:"#verdict",label:"Faisla"}];return A.jsx("nav",{className:"sticky-nav","aria-label":"Quick Section Navigation",children:A.jsxs("div",{className:"nav-inner",children:[A.jsxs("a",{href:"#hero",className:"nav-brand",title:"Case 420: Kaustya vs Duniya",children:["⚖️ ",A.jsx("span",{style:{fontWeight:900},children:"CASE 420"})]}),A.jsx("div",{className:"nav-links-scroll",role:"menubar",children:r.map(s=>A.jsx("a",{href:s.href,className:"nav-link",role:"menuitem",children:s.label},s.href))}),A.jsx("button",{type:"button",onClick:i,className:"nav-theme-btn","aria-label":`Current theme: ${e}. Click to switch theme.`,title:"Toggle Light / Dark Mode",children:e==="dark"?"☀️":"🌙"})]})})}function WS(n){const[e,t]=Ae.useState(()=>Su(n));return Ae.useEffect(()=>{t(Su(n));const i=setInterval(()=>{t(Su(n))},1e3);return()=>clearInterval(i)},[n]),e}function Su(n){const e=new Date,t=new Date(n),i=new Date(t);i.setHours(23,59,59,999);const r=t.getTime()-e.getTime();if(r<=0&&e.getTime()<=i.getTime())return{days:0,hours:0,minutes:0,seconds:0,isBirthday:!0,isPast:!1,message:"AAJ HAI BHAI! HAPPY BIRTHDAY! 🎂🎉"};if(e.getTime()>i.getTime())return{days:0,hours:0,minutes:0,seconds:0,isBirthday:!1,isPast:!0,message:"Late wish bhi chalega. Ab party kab dega?"};const s=Math.max(0,Math.floor(r/1e3)),a=Math.floor(s/(3600*24)),o=Math.floor(s%(3600*24)/3600),l=Math.floor(s%3600/60),c=s%60;return{days:a,hours:o,minutes:l,seconds:c,isBirthday:!1,isPast:!1,message:null}}function XS({birthdayIso:n}){const e=WS(n),{fireCelebration:t}=aa(),i=Ae.useRef(!1);return Ae.useEffect(()=>{e.isBirthday&&!i.current&&(i.current=!0,t())},[e.isBirthday,t]),e.isBirthday?A.jsxs("div",{className:"birthday-today-box",role:"region","aria-live":"polite",children:[A.jsx("h2",{className:"birthday-today-title",children:"🎉 AAJ HAI BHAI! HAPPY BIRTHDAY! 🎂"}),A.jsx("p",{style:{fontSize:"1.2rem",fontWeight:800},children:"Court ki karwayi sthagit! Aaj Kaustya ka din hai, ab turant party nikal!"})]}):e.isPast?A.jsxs("div",{className:"birthday-today-box",style:{background:"#FF2E88",color:"#FFF"},role:"region","aria-live":"polite",children:[A.jsx("h2",{className:"birthday-today-title",style:{color:"#FFD400"},children:"⏰ LATE WISH BHI CHALEGA!"}),A.jsx("p",{style:{fontSize:"1.15rem",fontWeight:700},children:"Birthday nikal gaya par party ka bill abhi bhi pending hai saale!"})]}):A.jsxs("div",{className:"countdown-box",role:"region","aria-label":"Birthday Countdown Timer",children:[A.jsx("div",{className:"countdown-heading",children:A.jsx("span",{children:"⏳ TIME LEFT UNTIL 14 OCT 2026 00:00:"})}),A.jsxs("div",{className:"countdown-grid","aria-live":"off",children:[A.jsxs("div",{className:"countdown-item",children:[A.jsx("span",{className:"countdown-num",children:String(e.days).padStart(2,"0")}),A.jsx("span",{className:"countdown-label",children:"Days"})]}),A.jsxs("div",{className:"countdown-item",children:[A.jsx("span",{className:"countdown-num",children:String(e.hours).padStart(2,"0")}),A.jsx("span",{className:"countdown-label",children:"Hours"})]}),A.jsxs("div",{className:"countdown-item",children:[A.jsx("span",{className:"countdown-num",children:String(e.minutes).padStart(2,"0")}),A.jsx("span",{className:"countdown-label",children:"Mins"})]}),A.jsxs("div",{className:"countdown-item",children:[A.jsx("span",{className:"countdown-num",children:String(e.seconds).padStart(2,"0")}),A.jsx("span",{className:"countdown-label",children:"Secs"})]})]})]})}function jS({config:n}){const[e,t]=Ae.useState(0),[i,r]=Ae.useState(!1),s=()=>{const a=e+1;t(a),a===5&&(r(!0),setTimeout(()=>r(!1),5e3),t(0))};return A.jsx("header",{id:"hero",className:"hero-section",children:A.jsxs("div",{className:"content-container",children:[A.jsx("div",{className:"hero-case-stamp",children:"⚖️ CASE NO. 420/2026: SPECIAL BENCH OF DOST-YAAR"}),A.jsx("h1",{className:"hero-giant-name",onClick:s,title:"Click 5 times for a secret surprise!",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&s()},"aria-label":`${n.name}. Click repeatedly for a hidden easter egg.`,children:n.name}),A.jsxs("p",{className:"hero-tagline",children:["Ka Court Case: ",A.jsxs("em",{children:[n.name," vs. Un Sab Logon Jo Isse Jhel Rahe Hain"]})]}),A.jsxs("div",{className:"hero-stamps-row",children:[A.jsx("span",{className:"stamp stamp-danger",children:"🚨 UMAR BADHI, AQAL NAHI"}),A.jsxs("span",{className:"stamp stamp-warning",children:["⭐ NICKNAME: ",n.nickname]}),A.jsxs("span",{className:"stamp stamp-success",children:["🏛️ SINCE: ",n.friendsSince]})]}),A.jsx(XS,{birthdayIso:n.birthday}),i&&A.jsxs("div",{className:"easter-egg-toast",role:"alert",children:[A.jsxs("p",{children:["🤫 ",A.jsx("strong",{children:"Oye Bakchod!"})]}),A.jsx("p",{children:"Itni baar click karke kya property apne naam karega? Chal chupchap pehle party ka bill nikaal!"})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="186",KS=0,Im=1,YS=2,kl=1,qS=2,Ua=3,Ar=0,yn=1,_i=2,Gi=0,Ka=1,Dm=2,Um=3,km=4,$S=5,Es=100,ZS=101,JS=102,QS=103,eM=104,tM=200,nM=201,iM=202,rM=203,pv=204,mv=205,sM=206,aM=207,oM=208,lM=209,cM=210,uM=211,dM=212,hM=213,fM=214,eh=0,th=1,nh=2,mo=3,ih=4,rh=5,sh=6,ah=7,gv=0,pM=1,mM=2,Mi=0,_v=1,vv=2,xv=3,Vf=4,yv=5,Sv=6,Mv=7,Fm="attached",gM="detached",Ev=300,es=301,Qs=302,Mu=303,Eu=304,zc=306,ea=1e3,vi=1001,pc=1002,Ft=1003,Tv=1004,ka=1005,Ot=1006,Fl=1007,zi=1008,wn=1009,wv=1010,bv=1011,go=1012,Gf=1013,Ti=1014,zn=1015,wi=1016,Wf=1017,Xf=1018,_o=1020,Av=35902,Rv=35899,Cv=1021,Pv=1022,Hn=1023,qi=1026,Wr=1027,jf=1028,Kf=1029,ts=1030,Yf=1031,qf=1033,Ol=33776,Bl=33777,zl=33778,Hl=33779,oh=35840,lh=35841,ch=35842,uh=35843,dh=36196,hh=37492,fh=37496,ph=37488,mh=37489,mc=37490,gh=37491,_h=37808,vh=37809,xh=37810,yh=37811,Sh=37812,Mh=37813,Eh=37814,Th=37815,wh=37816,bh=37817,Ah=37818,Rh=37819,Ch=37820,Ph=37821,Nh=36492,Lh=36494,Ih=36495,Dh=36283,Uh=36284,gc=36285,kh=36286,vo=2300,xo=2301,Tu=2302,Om=2303,Bm=2400,zm=2401,Hm=2402,_M=2500,vM=0,Nv=1,Fh=2,xM=3200,Oh=0,yM=1,pr="",Wt="srgb",Cn="srgb-linear",_c="linear",st="srgb",wu=7680,SM=519,MM=512,EM=513,TM=514,$f=515,wM=516,bM=517,Zf=518,AM=519,Lv=35044,Vm="300 es",xi=2e3,yo=2001;function RM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function CM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function So(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function PM(){const n=So("canvas");return n.style.display="block",n}const Gm={};function vc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Iv(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Re(...n){n=Iv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ie(...n){n=Iv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Gs(...n){const e=n.join(" ");e in Gm||(Gm[e]=!0,Re(...n))}function NM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const LM={[eh]:th,[nh]:sh,[ih]:ah,[mo]:rh,[th]:eh,[sh]:nh,[ah]:ih,[rh]:mo};class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wm=1234567;const Ya=Math.PI/180,ta=180/Math.PI;function ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function Jf(n,e){return(n%e+e)%e}function IM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function DM(n,e,t){return n!==e?(t-n)/(e-n):0}function qa(n,e,t){return(1-t)*n+t*e}function UM(n,e,t,i){return qa(n,e,1-Math.exp(-t*i))}function kM(n,e=1){return e-Math.abs(Jf(n,e*2)-e)}function FM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function OM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function BM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zM(n,e){return n+Math.random()*(e-n)}function HM(n){return n*(.5-Math.random())}function VM(n){n!==void 0&&(Wm=n);let e=Wm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function GM(n){return n*Ya}function WM(n){return n*ta}function XM(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function jM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function KM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function YM(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*m,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*m,o*c);break;case"ZYZ":n.set(l*m,l*p,o*u,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function at(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qM={DEG2RAD:Ya,RAD2DEG:ta,generateUUID:ii,clamp:qe,euclideanModulo:Jf,mapLinear:IM,inverseLerp:DM,lerp:qa,damp:UM,pingpong:kM,smoothstep:FM,smootherstep:OM,randInt:BM,randFloat:zM,randFloatSpread:HM,seededRandom:VM,degToRad:GM,radToDeg:WM,isPowerOfTwo:XM,ceilPowerOfTwo:jM,floorPowerOfTwo:KM,setQuaternionFromProperEuler:YM,normalize:at,denormalize:Qn},cp=class cp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cp.prototype.isVector2=!0;let $e=cp;class Zi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],m=s[a+2],M=s[a+3];if(h!==M||l!==d||c!==p||u!==m){let g=l*d+c*p+u*m+h*M;g<0&&(d=-d,p=-p,m=-m,M=-M,g=-g);let f=1-o;if(g<.9995){const _=Math.acos(g),S=Math.sin(_);f=Math.sin(f*_)/S,o=Math.sin(o*_)/S,l=l*f+d*o,c=c*f+p*o,u=u*f+m*o,h=h*f+M*o}else{l=l*f+d*o,c=c*f+p*o,u=u*f+m*o,h=h*f+M*o;const _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*p-c*d,e[t+1]=l*m+u*d+c*h-o*p,e[t+2]=c*m+u*p+o*d-l*h,e[t+3]=u*m-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"YZX":this._x=d*u*h+c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h-d*p*m;break;case"XZY":this._x=d*u*h-c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h+d*p*m;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const up=class up{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};up.prototype.isVector3=!0;let B=up;const bu=new B,Xm=new Zi,dp=class dp{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],M=r[0],g=r[3],f=r[6],_=r[1],S=r[4],x=r[7],T=r[2],w=r[5],b=r[8];return s[0]=a*M+o*_+l*T,s[3]=a*g+o*S+l*w,s[6]=a*f+o*x+l*b,s[1]=c*M+u*_+h*T,s[4]=c*g+u*S+h*w,s[7]=c*f+u*x+h*b,s[2]=d*M+p*_+m*T,s[5]=d*g+p*S+m*w,s[8]=d*f+p*x+m*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,m=t*h+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=h*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Au.makeScale(e,t)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Au.makeRotation(-e)),this}translate(e,t){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Au.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;let Oe=dp;const Au=new Oe,jm=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Km=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $M(){const n={enabled:!0,workingColorSpace:Cn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=Ws(r.r),r.g=Ws(r.g),r.b=Ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?_c:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cn]:{primaries:e,whitePoint:i,transfer:_c,toXYZ:jm,fromXYZ:Km,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:jm,fromXYZ:Km,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const Ye=$M();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ls;class ZM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=So("canvas")),ls.width=e.width,ls.height=e.height;const r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JM=0;class Qf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ru(r[a].image)):s.push(Ru(r[a]))}else s=Ru(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ru(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ZM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let QM=0;const Cu=new B;class jt extends rs{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=vi,r=vi,s=Ot,a=zi,o=Hn,l=wn,c=jt.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=ii(),this.name="",this.source=new Qf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cu).x}get height(){return this.source.getSize(Cu).y}get depth(){return this.source.getSize(Cu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ev)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Ev;jt.DEFAULT_ANISOTROPY=1;const hp=class hp{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],m=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(p+1)/2,T=(f+1)/2,w=(u+d)/4,b=(h+M)/4,v=(m+g)/4;return S>x&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=b/i):x>T?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=v/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=b/s,r=v/s),this.set(i,r,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-M)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hp.prototype.isVector4=!0;let ut=hp;class eE extends rs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new jt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qf(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends eE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Dv extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tE extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ec=class Ec{constructor(e,t,i,r,s,a,o,l,c,u,h,d,p,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,p,m,M,g)}set(e,t,i,r,s,a,o,l,c,u,h,d,p,m,M,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=m,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ec().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,m=o*u,M=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+m*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,m=c*u,M=c*h;t[0]=d+M*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-m,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,m=c*u,M=c*h;t[0]=d-M*o,t[4]=-a*h,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*u,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,m=o*u,M=o*h;t[0]=l*u,t[4]=m*c-p,t[8]=d*c+M,t[1]=l*h,t[5]=M*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,m=o*l,M=o*c;t[0]=l*u,t[4]=M-d*h,t[8]=m*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+m,t[10]=d-M*h}else if(e.order==="XZY"){const d=a*l,p=a*c,m=o*l,M=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+M,t[5]=a*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=o*u,t[10]=M*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nE,e,iE)}lookAt(e,t,i){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),nr.crossVectors(i,Mn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),nr.crossVectors(i,Mn)),nr.normalize(),$o.crossVectors(Mn,nr),r[0]=nr.x,r[4]=$o.x,r[8]=Mn.x,r[1]=nr.y,r[5]=$o.y,r[9]=Mn.y,r[2]=nr.z,r[6]=$o.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],M=i[6],g=i[10],f=i[14],_=i[3],S=i[7],x=i[11],T=i[15],w=r[0],b=r[4],v=r[8],R=r[12],P=r[1],I=r[5],H=r[9],j=r[13],k=r[2],W=r[6],Q=r[10],K=r[14],z=r[3],F=r[7],U=r[11],Y=r[15];return s[0]=a*w+o*P+l*k+c*z,s[4]=a*b+o*I+l*W+c*F,s[8]=a*v+o*H+l*Q+c*U,s[12]=a*R+o*j+l*K+c*Y,s[1]=u*w+h*P+d*k+p*z,s[5]=u*b+h*I+d*W+p*F,s[9]=u*v+h*H+d*Q+p*U,s[13]=u*R+h*j+d*K+p*Y,s[2]=m*w+M*P+g*k+f*z,s[6]=m*b+M*I+g*W+f*F,s[10]=m*v+M*H+g*Q+f*U,s[14]=m*R+M*j+g*K+f*Y,s[3]=_*w+S*P+x*k+T*z,s[7]=_*b+S*I+x*W+T*F,s[11]=_*v+S*H+x*Q+T*U,s[15]=_*R+S*j+x*K+T*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],M=e[7],g=e[11],f=e[15],_=l*p-c*d,S=o*p-c*h,x=o*d-l*h,T=a*p-c*u,w=a*d-l*u,b=a*h-o*u;return t*(M*_-g*S+f*x)-i*(m*_-g*T+f*w)+r*(m*S-M*T+f*b)-s*(m*x-M*w+g*b)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],M=e[13],g=e[14],f=e[15],_=t*o-i*a,S=t*l-r*a,x=t*c-s*a,T=i*l-r*o,w=i*c-s*o,b=r*c-s*l,v=u*M-h*m,R=u*g-d*m,P=u*f-p*m,I=h*g-d*M,H=h*f-p*M,j=d*f-p*g,k=_*j-S*H+x*I+T*P-w*R+b*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/k;return e[0]=(o*j-l*H+c*I)*W,e[1]=(r*H-i*j-s*I)*W,e[2]=(M*b-g*w+f*T)*W,e[3]=(d*w-h*b-p*T)*W,e[4]=(l*P-a*j-c*R)*W,e[5]=(t*j-r*P+s*R)*W,e[6]=(g*x-m*b-f*S)*W,e[7]=(u*b-d*x+p*S)*W,e[8]=(a*H-o*P+c*v)*W,e[9]=(i*P-t*H-s*v)*W,e[10]=(m*w-M*x+f*_)*W,e[11]=(h*x-u*w-p*_)*W,e[12]=(o*R-a*I-l*v)*W,e[13]=(t*I-i*R+r*v)*W,e[14]=(M*S-m*T-g*_)*W,e[15]=(u*T-h*S+d*_)*W,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,m=s*h,M=a*u,g=a*h,f=o*h,_=l*c,S=l*u,x=l*h,T=i.x,w=i.y,b=i.z;return r[0]=(1-(M+f))*T,r[1]=(p+x)*T,r[2]=(m-S)*T,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(d+f))*w,r[6]=(g+_)*w,r[7]=0,r[8]=(m+S)*b,r[9]=(g-_)*b,r[10]=(1-(d+M))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=cs.set(r[0],r[1],r[2]).length();const o=cs.set(r[4],r[5],r[6]).length(),l=cs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kn.copy(this);const c=1/a,u=1/o,h=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=xi,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let m,M;if(l)m=s/(a-s),M=a*s/(a-s);else if(o===xi)m=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===yo)m=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=xi,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let m,M;if(l)m=1/(a-s),M=a/(a-s);else if(o===xi)m=-2/(a-s),M=-(a+s)/(a-s);else if(o===yo)m=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ec.prototype.isMatrix4=!0;let Ge=Ec;const cs=new B,Kn=new Ge,nE=new B(0,0,0),iE=new B(1,1,1),nr=new B,$o=new B,Mn=new B,Ym=new Ge,qm=new Zi;class Rr{constructor(e=0,t=0,i=0,r=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ym,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class Uv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rE=0;const $m=new B,us=new Zi,Pi=new Ge,Zo=new B,ya=new B,sE=new B,aE=new Zi,Zm=new B(1,0,0),Jm=new B(0,1,0),Qm=new B(0,0,1),eg={type:"added"},oE={type:"removed"},ds={type:"childadded",child:null},Pu={type:"childremoved",child:null};class Tt extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new B,t=new Rr,i=new Zi,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Oe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Zm,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return $m.copy(e).applyQuaternion(this.quaternion),this.position.add($m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zm,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zo.copy(e):Zo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ya,Zo,this.up):Pi.lookAt(Zo,ya,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Pi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eg),ds.child=e,this.dispatchEvent(ds),ds.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oE),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eg),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,sE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,aE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tt.DEFAULT_UP=new B(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xr extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lE={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,i),f=this._getHandJoint(c,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Lu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Jf(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Lu(a,s,e+1/3),this.g=Lu(a,s,e),this.b=Lu(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=kv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Ye.workingToColorSpace(nn.copy(this),e),Math.round(qe(nn.r*255,0,255))*65536+Math.round(qe(nn.g*255,0,255))*256+Math.round(qe(nn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(nn.copy(this),t);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Wt){Ye.workingToColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,r=nn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(Jo);const i=qa(ir.h,Jo.h,t),r=qa(ir.s,Jo.s,t),s=qa(ir.l,Jo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ke;ke.NAMES=kv;class cE extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rr,this.environmentIntensity=1,this.environmentRotation=new Rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yn=new B,Ni=new B,Iu=new B,Li=new B,hs=new B,fs=new B,tg=new B,Du=new B,Uu=new B,ku=new B,Fu=new ut,Ou=new ut,Bu=new ut;class ei{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),Ni.subVectors(i,t),Iu.subVectors(e,t);const a=Yn.dot(Yn),o=Yn.dot(Ni),l=Yn.dot(Iu),c=Ni.dot(Ni),u=Ni.dot(Iu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,m=(a*u-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Fu.setScalar(0),Ou.setScalar(0),Bu.setScalar(0),Fu.fromBufferAttribute(e,t),Ou.fromBufferAttribute(e,i),Bu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fu,s.x),a.addScaledVector(Ou,s.y),a.addScaledVector(Bu,s.z),a}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),Ni.subVectors(e,t),Yn.cross(Ni).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Yn.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;hs.subVectors(r,i),fs.subVectors(s,i),Du.subVectors(e,i);const l=hs.dot(Du),c=fs.dot(Du);if(l<=0&&c<=0)return t.copy(i);Uu.subVectors(e,r);const u=hs.dot(Uu),h=fs.dot(Uu);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(hs,a);ku.subVectors(e,s);const p=hs.dot(ku),m=fs.dot(ku);if(m>=0&&p<=m)return t.copy(s);const M=p*c-l*m;if(M<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(fs,o);const g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return tg.subVectors(s,r),o=(h-u)/(h-u+(p-m)),t.copy(r).addScaledVector(tg,o);const f=1/(g+M+d);return a=M*f,o=d*f,t.copy(i).addScaledVector(hs,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ai{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),el.subVectors(this.max,Sa),ps.subVectors(e.a,Sa),ms.subVectors(e.b,Sa),gs.subVectors(e.c,Sa),rr.subVectors(ms,ps),sr.subVectors(gs,ms),Ir.subVectors(ps,gs);let t=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Ir.z,Ir.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Ir.z,0,-Ir.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Ir.y,Ir.x,0];return!zu(t,ps,ms,gs,el)||(t=[1,0,0,0,1,0,0,0,1],!zu(t,ps,ms,gs,el))?!1:(tl.crossVectors(rr,sr),t=[tl.x,tl.y,tl.z],zu(t,ps,ms,gs,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new B,new B,new B,new B,new B,new B,new B,new B],qn=new B,Qo=new Ai,ps=new B,ms=new B,gs=new B,rr=new B,sr=new B,Ir=new B,Sa=new B,el=new B,tl=new B,Dr=new B;function zu(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Dr.fromArray(n,s);const o=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),c=t.dot(Dr),u=i.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Lt=new B,nl=new $e;let uE=0;class Sn extends rs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lv,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Fv extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ov extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class si extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const dE=new Ai,Ma=new B,Hu=new B;class Ri{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const t=Ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(Hu)),this.expandByPoint(Ma.copy(e.center).sub(Hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hE=0;const Un=new Ge,Vu=new Tt,_s=new B,En=new Ai,Ea=new Ai,Vt=new B;class In extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RM(e)?Ov:Fv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new si(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(En.min,Ea.min),En.expandByPoint(Vt),Vt.addVectors(En.max,Ea.max),En.expandByPoint(Vt)):(En.expandByPoint(Ea.min),En.expandByPoint(Ea.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Vt.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),Vt.add(_s)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new B,l[v]=new B;const c=new B,u=new B,h=new B,d=new $e,p=new $e,m=new $e,M=new B,g=new B;function f(v,R,P){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,v),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,P),u.sub(c),h.sub(c),p.sub(d),m.sub(d);const I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(M.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(I),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(I),o[v].add(M),o[R].add(M),o[P].add(M),l[v].add(g),l[R].add(g),l[P].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,R=_.length;v<R;++v){const P=_[v],I=P.start,H=P.count;for(let j=I,k=I+H;j<k;j+=3)f(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const S=new B,x=new B,T=new B,w=new B;function b(v){T.fromBufferAttribute(r,v),w.copy(T);const R=o[v];S.copy(R),S.sub(T.multiplyScalar(T.dot(R))).normalize(),x.crossVectors(w,R);const I=x.dot(l[v])<0?-1:1;a.setXYZW(v,S.x,S.y,S.z,I)}for(let v=0,R=_.length;v<R;++v){const P=_[v],I=P.start,H=P.count;for(let j=I,k=I+H;j<k;j+=3)b(e.getX(j+0)),b(e.getX(j+1)),b(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),M=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,m=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let f=0;f<u;f++)d[m++]=c[p++]}return new Sn(d,u,h)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lv,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const on=new B;class ep{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){vc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ep(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Gu=new B,pE=new B,mE=new Oe;class ur{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Gu.subVectors(i,t).cross(pE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Gu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mE.getNormalMatrix(e),r=this.coplanarPoint(Gu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let gE=0;class Ei extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Ka,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pv,this.blendDst=mv,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=SM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wu,this.stencilZFail=wu,this.stencilZPass=wu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ur().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Di=new B,Wu=new B,il=new B,rl=new B;class Hc{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wu.copy(e).add(t).multiplyScalar(.5),il.copy(t).sub(e).normalize(),rl.copy(this.origin).sub(Wu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(il),o=rl.dot(this.direction),l=-rl.dot(il),c=rl.lengthSq(),u=Math.abs(1-a*a);let h,d,p,m;if(u>0)if(h=a*l-o,d=a*o-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const M=1/u;h*=M,d*=M,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wu).addScaledVector(il,d),p}intersectSphere(e,t){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,p=e.z-a.z,m=t.x-a.x,M=t.y-a.y,g=t.z-a.z,f=i.x-a.x,_=i.y-a.y,S=i.z-a.z,x=Math.abs(l),T=Math.abs(c),w=Math.abs(u);let b,v,R,P,I,H,j,k,W,Q,K,z;if(x>=T&&x>=w?(R=l,H=h,W=m,z=f,l>=0?(b=c,v=u,P=d,I=p,j=M,k=g,Q=_,K=S):(b=u,v=c,P=p,I=d,j=g,k=M,Q=S,K=_)):T>=w?(R=c,H=d,W=M,z=_,c>=0?(b=u,v=l,P=p,I=h,j=g,k=m,Q=S,K=f):(b=l,v=u,P=h,I=p,j=m,k=g,Q=f,K=S)):(R=u,H=p,W=g,z=S,u>=0?(b=l,v=c,P=h,I=d,j=m,k=M,Q=f,K=_):(b=c,v=l,P=d,I=h,j=M,k=m,Q=_,K=f)),R===0)return null;const F=b/R,U=v/R,Y=1/R,ae=P-F*H,ge=I-U*H,Be=j-F*W,Ue=k-U*W,De=Q-F*z,$=K-U*z,ne=De*Ue-$*Be,Me=ae*$-ge*De,Fe=Be*ge-Ue*ae;if(r){if(ne<0||Me<0||Fe<0)return null}else if((ne<0||Me<0||Fe<0)&&(ne>0||Me>0||Fe>0))return null;const xe=ne+Me+Fe;if(xe===0)return null;const We=Y*(ne*H+Me*W+Fe*z);return(xe>0?We<0:We>0)?null:this.at(We/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jr extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.combine=gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ng=new Ge,Ur=new Hc,sl=new Ri,ig=new B,al=new B,ol=new B,ll=new B,Xu=new B,cl=new B,rg=new B,ul=new B;class Pn extends Tt{constructor(e=new In,t=new jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Xu.fromBufferAttribute(h,e),a?cl.addScaledVector(Xu,u):cl.addScaledVector(Xu.sub(t),u))}t.add(cl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(sl.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(sl,ig)===null||Ur.origin.distanceToSquared(ig)>(e.far-e.near)**2))&&(ng.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(ng),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=d.length;m<M;m++){const g=d[m],f=a[g.materialIndex],_=Math.max(g.start,p.start),S=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=_,T=S;x<T;x+=3){const w=o.getX(x),b=o.getX(x+1),v=o.getX(x+2);r=dl(this,f,e,i,c,u,h,w,b,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=m,f=M;g<f;g+=3){const _=o.getX(g),S=o.getX(g+1),x=o.getX(g+2);r=dl(this,a,e,i,c,u,h,_,S,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=d.length;m<M;m++){const g=d[m],f=a[g.materialIndex],_=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=_,T=S;x<T;x+=3){const w=x,b=x+1,v=x+2;r=dl(this,f,e,i,c,u,h,w,b,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=m,f=M;g<f;g+=3){const _=g,S=g+1,x=g+2;r=dl(this,a,e,i,c,u,h,_,S,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function _E(n,e,t,i,r,s,a,o){let l;if(e.side===yn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ar,o),l===null)return null;ul.copy(o),ul.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ul);return c<t.near||c>t.far?null:{distance:c,point:ul.clone(),object:n}}function dl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,al),n.getVertexPosition(l,ol),n.getVertexPosition(c,ll);const u=_E(n,e,t,i,al,ol,ll,rg);if(u){const h=new B;ei.getBarycoord(rg,al,ol,ll,h),r&&(u.uv=ei.getInterpolatedAttribute(r,o,l,c,h,new $e)),s&&(u.uv1=ei.getInterpolatedAttribute(s,o,l,c,h,new $e)),a&&(u.normal=ei.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};ei.getNormal(al,ol,ll,d.normal),u.face=d,u.barycoord=h}return u}const Ta=new ut,sg=new ut,ag=new ut,vE=new ut,og=new Ge,hl=new B,ju=new Ri,lg=new Ge,Ku=new Hc;class xE extends Pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fm,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hl),this.boundingBox.expandByPoint(hl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hl),this.boundingSphere.expandByPoint(hl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ju.copy(this.boundingSphere),ju.applyMatrix4(r),e.ray.intersectsSphere(ju)!==!1&&(lg.copy(r).invert(),Ku.copy(e.ray).applyMatrix4(lg),!(this.boundingBox!==null&&Ku.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ku)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gM?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;sg.fromBufferAttribute(r.attributes.skinIndex,e),ag.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ta.copy(t),t.set(0,0,0,0)):(Ta.set(...t,1),t.set(0,0,0)),Ta.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=ag.getComponent(s);if(a!==0){const o=sg.getComponent(s);og.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(vE.copy(Ta).applyMatrix4(og),a)}}return t.isVector4&&(t.w=Ta.w),t.applyMatrix4(this.bindMatrixInverse)}}class Bv extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tp extends jt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ft,u=Ft,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cg=new Ge,yE=new Ge;class np{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:yE;cg.multiplyMatrices(o,t[s]),cg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new np(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new tp(t,e,e,Hn,zn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(Re("Skeleton: No bone found with UUID:",s),a=new Bv),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class xc extends Sn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vs=new Ge,ug=new Ge,fl=[],dg=new Ai,SE=new Ge,wa=new Pn,ba=new Ri;class ME extends Pn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,SE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),dg.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(dg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),ba.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(i),e.ray.intersectsSphere(ba)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vs),ug.multiplyMatrices(i,vs),wa.matrixWorld=ug,wa.raycast(e,fl);for(let a=0,o=fl.length;a<o;a++){const l=fl[a];l.instanceId=s,l.object=this,t.push(l)}fl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new tp(new Float32Array(r*this.count),r,this.count,jf,zn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const kr=new Ri,EE=new $e(.5,.5),pl=new B;class ip{constructor(e=new ur,t=new ur,i=new ur,r=new ur,s=new ur,a=new ur){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],m=s[8],M=s[9],g=s[10],f=s[11],_=s[12],S=s[13],x=s[14],T=s[15];if(r[0].setComponents(c-a,p-u,f-m,T-_).normalize(),r[1].setComponents(c+a,p+u,f+m,T+_).normalize(),r[2].setComponents(c+o,p+h,f+M,T+S).normalize(),r[3].setComponents(c-o,p-h,f-M,T-S).normalize(),i)r[4].setComponents(l,d,g,x).normalize(),r[5].setComponents(c-l,p-d,f-g,T-x).normalize();else if(r[4].setComponents(c-l,p-d,f-g,T-x).normalize(),t===xi)r[5].setComponents(c+l,p+d,f+g,T+x).normalize();else if(t===yo)r[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const t=EE.distanceTo(e.center);return kr.radius=.7071067811865476+t,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(pl.x=r.normal.x>0?e.max.x:e.min.x,pl.y=r.normal.y>0?e.max.y:e.min.y,pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zv extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yc=new B,Sc=new B,hg=new Ge,Aa=new Hc,ml=new Ri,Yu=new B,fg=new B;class rp extends Tt{constructor(e=new In,t=new zv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)yc.fromBufferAttribute(t,r-1),Sc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=yc.distanceTo(Sc);e.setAttribute("lineDistance",new si(i,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;hg.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(hg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let M=p,g=m-1;M<g;M+=c){const f=u.getX(M),_=u.getX(M+1),S=gl(this,e,Aa,l,f,_,M);S&&t.push(S)}if(this.isLineLoop){const M=u.getX(m-1),g=u.getX(p),f=gl(this,e,Aa,l,M,g,m-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let M=p,g=m-1;M<g;M+=c){const f=gl(this,e,Aa,l,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){const M=gl(this,e,Aa,l,m-1,p,m-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function gl(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(yc.fromBufferAttribute(o,r),Sc.fromBufferAttribute(o,s),t.distanceSqToSegment(yc,Sc,Yu,fg)>i)return;Yu.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Yu);if(!(c<e.near||c>e.far))return{distance:c,point:fg.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const pg=new B,mg=new B;class TE extends rp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)pg.fromBufferAttribute(t,r),mg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+pg.distanceTo(mg);e.setAttribute("lineDistance",new si(i,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wE extends rp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Hv extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gg=new Ge,Bh=new Hc,_l=new Ri,vl=new B;class bE extends Tt{constructor(e=new In,t=new Hv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(r),_l.radius+=s,e.ray.intersectsSphere(_l)===!1)return;gg.copy(r).invert(),Bh.copy(e.ray).applyMatrix4(gg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=d,M=p;m<M;m++){const g=c.getX(m);vl.fromBufferAttribute(h,g),_g(vl,g,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=d,M=p;m<M;m++)vl.fromBufferAttribute(h,m),_g(vl,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function _g(n,e,t,i,r,s,a){const o=Bh.distanceSqToPoint(n);if(o<t){const l=new B;Bh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Vv extends jt{constructor(e=[],t=es,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mo extends jt{constructor(e,t,i=Ti,r,s,a,o=Ft,l=Ft,c,u=qi,h=1){if(u!==qi&&u!==Wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class AE extends Mo{constructor(e,t=Ti,i=es,r,s,a=Ft,o=Ft,l,c=qi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gv extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Po extends In{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(h,2));function m(M,g,f,_,S,x,T,w,b,v,R){const P=x/b,I=T/v,H=x/2,j=T/2,k=w/2,W=b+1,Q=v+1;let K=0,z=0;const F=new B;for(let U=0;U<Q;U++){const Y=U*I-j;for(let ae=0;ae<W;ae++){const ge=ae*P-H;F[M]=ge*_,F[g]=Y*S,F[f]=k,c.push(F.x,F.y,F.z),F[M]=0,F[g]=0,F[f]=w>0?1:-1,u.push(F.x,F.y,F.z),h.push(ae/b),h.push(1-U/v),K+=1}}for(let U=0;U<v;U++)for(let Y=0;Y<b;Y++){const ae=d+Y+W*U,ge=d+Y+W*(U+1),Be=d+(Y+1)+W*(U+1),Ue=d+(Y+1)+W*U;l.push(ae,ge,Ue),l.push(ge,Be,Ue),z+=6}o.addGroup(p,z,R),p+=z,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vc extends In{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,p=[],m=[],M=[],g=[];for(let f=0;f<u;f++){const _=f*d-a;for(let S=0;S<c;S++){const x=S*h-s;m.push(x,-_,0),M.push(0,0,1),g.push(S/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const S=_+c*f,x=_+c*(f+1),T=_+1+c*(f+1),w=_+1+c*f;p.push(S,x,w),p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new si(m,3)),this.setAttribute("normal",new si(M,3)),this.setAttribute("uv",new si(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.width,e.height,e.widthSegments,e.heightSegments)}}function na(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(vg(r))r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(vg(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=na(n[t]);for(const r in i)e[r]=i[r]}return e}function vg(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function RE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const CE={clone:na,merge:ln};var PE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PE,this.fragmentShader=NE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=RE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new ke().setHex(r.value);break;case"v2":this.uniforms[i].value=new $e().fromArray(r.value);break;case"v3":this.uniforms[i].value=new B().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ut().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ge().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class LE extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sp extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oh,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ci extends sp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class IE extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DE extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function dr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Vl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function UE(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function xg(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function kE(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class oa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class FE extends oa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bm,endingEnd:Bm}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case zm:s=e,o=2*t-i;break;case Hm:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zm:a=e,l=2*i-t;break;case Hm:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(r-t),M=m*m,g=M*m,f=-d*g+2*d*M-d*m,_=(1+d)*g+(-1.5-2*d)*M+(-.5+d)*m+1,S=(-1-p)*g+(1.5+p)*M+.5*m,x=p*g-p*M;for(let T=0;T!==o;++T)s[T]=f*a[u+T]+_*a[c+T]+S*a[l+T]+x*a[h+T];return s}}class OE extends oa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class BE extends oa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class zE extends oa{interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){const m=(i-t)/(r-t),M=1-m;for(let g=0;g!==o;++g)s[g]=a[c+g]*M+a[l+g]*m;return s}const d=o*2,p=e-1;for(let m=0;m!==o;++m){const M=a[c+m],g=a[l+m],f=p*d+m*2,_=h[f],S=h[f+1],x=e*d+m*2,T=u[x],w=u[x+1],b=VE(i,t,_,T,r);s[m]=Xv(b,M,S,w,g)}return s}}function Xv(n,e,t,i,r){const s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function HE(n,e,t,i,r){const s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function VE(n,e,t,i,r){let s=(n-e)/(r-e);for(let a=0;a<8;a++){const o=Xv(s,e,t,i,r)-n;if(Math.abs(o)<1e-10)break;const l=HE(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class oi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dr(t,this.TimeBufferType),this.values=dr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:dr(e.times,Array),values:dr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Vl(e.settings)&&(i.settings={inTangents:dr(e.settings.inTangents,Array),outTangents:dr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new BE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new OE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new FE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new zE(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vo:t=this.InterpolantFactoryMethodDiscrete;break;case xo:t=this.InterpolantFactoryMethodLinear;break;case Tu:t=this.InterpolantFactoryMethodSmooth;break;case Om:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Re("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return Tu;case this.InterpolantFactoryMethodBezier:return Om}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Vl(this.settings)&&(yg(this.settings.inTangents,e),yg(this.settings.outTangents,e))}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Ie("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ie("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&CM(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){Ie("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Tu,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*i,d=h-i,p=h+i;for(let m=0;m!==i;++m){const M=t[h+m];if(M!==t[d+m]||M!==t[p+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Vl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}}function yg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=xo;class la extends oi{constructor(e,t,i){super(e,t,i)}}la.prototype.ValueTypeName="bool";la.prototype.ValueBufferType=Array;la.prototype.DefaultInterpolation=vo;la.prototype.InterpolantFactoryMethodLinear=void 0;la.prototype.InterpolantFactoryMethodSmooth=void 0;class jv extends oi{constructor(e,t,i,r){super(e,t,i,r)}}jv.prototype.ValueTypeName="color";class Eo extends oi{constructor(e,t,i,r){super(e,t,i,r)}}Eo.prototype.ValueTypeName="number";class GE extends oa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Zi.slerpFlat(s,0,a,c-o,a,c,l);return s}}class To extends oi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new GE(this.times,this.values,this.getValueSize(),e)}}To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;class ca extends oi{constructor(e,t,i){super(e,t,i)}}ca.prototype.ValueTypeName="string";ca.prototype.ValueBufferType=Array;ca.prototype.DefaultInterpolation=vo;ca.prototype.InterpolantFactoryMethodLinear=void 0;ca.prototype.InterpolantFactoryMethodSmooth=void 0;class Mc extends oi{constructor(e,t,i,r){super(e,t,i,r)}}Mc.prototype.ValueTypeName="vector";class WE{constructor(e="",t=-1,i=[],r=_M){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(jE(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)t.push(oi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=UE(l);l=xg(l,1,u),c=xg(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Eo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function XE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Eo;case"vector":case"vector2":case"vector3":case"vector4":return Mc;case"color":return jv;case"quaternion":return To;case"bool":case"boolean":return la;case"string":return ca}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function jE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=XE(n.type);if(n.times===void 0){const i=[],r=[];kE(n.keys,i,r,"value"),n.times=i,n.values=r}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),Vl(n.settings)&&(t.settings={inTangents:dr(n.settings.inTangents,Float32Array),outTangents:dr(n.settings.outTangents,Float32Array)}),t}const Hi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Sg(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Sg(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Sg(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class KE{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const YE=new KE;class ua{constructor(e){this.manager=e!==void 0?e:YE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ua.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class qE extends Error{constructor(e,t){super(e),this.response=t}}class Kv extends ua{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Hi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:i,onError:r});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ui[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,m=p!==0;let M=0;const g=new ReadableStream({start(f){_();function _(){h.read().then(({done:S,value:x})=>{if(S)f.close();else{M+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:M,total:p});for(let w=0,b=u.length;w<b;w++){const v=u[w];v.onProgress&&v.onProgress(T)}f.enqueue(x),_()}},S=>{f.error(S)})}}});return new Response(g)}else throw new qE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{Hi.add(`file:${e}`,c);const u=Ui[e];delete Ui[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ui[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const xs=new WeakMap;class $E extends ua{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Hi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=xs.get(a);h===void 0&&(h=[],xs.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=So("img");function l(){u(),t&&t(this);const h=xs.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}xs.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Hi.remove(`image:${e}`);const d=xs.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onError&&m.onError(h)}xs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Hi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class ZE extends ua{constructor(e){super(e)}load(e,t,i,r){const s=new jt,a=new $E(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Gc extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const qu=new Ge,Mg=new B,Eg=new B;class ap{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ip,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Mg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mg),Eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){qu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(qu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===yo||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xl=new B,yl=new Zi,di=new B;class Yv extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xl,yl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xl,yl,di.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(xl,yl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xl,yl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new B,Tg=new $e,wg=new $e;class un extends Yv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,Tg,wg),t.subVectors(wg,Tg)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class JE extends ap{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ta*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class QE extends Gc{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new JE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class eT extends ap{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class zh extends Gc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new eT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wc extends Yv{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tT extends ap{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hh extends Gc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new tT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class nT extends Gc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $a{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const $u=new WeakMap;class iT extends ua{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Hi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{$u.has(a)===!0?(r&&r($u.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),$u.set(l,c),Hi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ys=-90,Ss=1;class rT extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(ys,Ss,e,t);r.layers=this.layers,this.add(r);const s=new un(ys,Ss,e,t);s.layers=this.layers,this.add(s);const a=new un(ys,Ss,e,t);a.layers=this.layers,this.add(a);const o=new un(ys,Ss,e,t);o.layers=this.layers,this.add(o);const l=new un(ys,Ss,e,t);l.layers=this.layers,this.add(l);const c=new un(ys,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class sT extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const op="\\[\\]\\.:\\/",aT=new RegExp("["+op+"]","g"),lp="[^"+op+"]",oT="[^"+op.replace("\\.","")+"]",lT=/((?:WC+[\/:])*)/.source.replace("WC",lp),cT=/(WCOD+)?/.source.replace("WCOD",oT),uT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lp),dT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lp),hT=new RegExp("^"+lT+cT+uT+dT+"$"),fT=["material","materials","bones","map"];class pT{constructor(e,t,i){const r=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ot{constructor(e,t,i){this.path=t,this.parsedPath=i||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,i):new ot(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(aT,"")}static parseTrackName(e){const t=hT.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);fT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=pT;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class mT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const fp=class fp{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};fp.prototype.isMatrix2=!0;let bg=fp;function Ag(n,e,t,i){const r=gT(i);switch(t){case Cv:return n*e;case jf:return n*e/r.components*r.byteLength;case Kf:return n*e/r.components*r.byteLength;case ts:return n*e*2/r.components*r.byteLength;case Yf:return n*e*2/r.components*r.byteLength;case Pv:return n*e*3/r.components*r.byteLength;case Hn:return n*e*4/r.components*r.byteLength;case qf:return n*e*4/r.components*r.byteLength;case Ol:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zl:case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lh:case uh:return Math.max(n,16)*Math.max(e,8)/4;case oh:case ch:return Math.max(n,8)*Math.max(e,8)/2;case dh:case hh:case ph:case mh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fh:case mc:case gh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Th:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Nh:case Lh:case Ih:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dh:case Uh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gc:case kh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gT(n){switch(n){case wn:case wv:return{byteLength:1,components:1};case go:case bv:case wi:return{byteLength:2,components:1};case Wf:case Xf:return{byteLength:2,components:4};case Ti:case Gf:case zn:return{byteLength:4,components:1};case Av:case Rv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qv(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function _T(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],M=h[p];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++d,h[d]=M)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const M=h[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var vT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ST=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ET=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,AT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,HT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YT="gl_FragColor = linearToOutputTexel( gl_FragColor );",qT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$T=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ZT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ew=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ow=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,uw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,dw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_w=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Sw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ew=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ww=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ww=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$w=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ib=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ob=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,db=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ab=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$b=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:vT,alphahash_pars_fragment:xT,alphamap_fragment:yT,alphamap_pars_fragment:ST,alphatest_fragment:MT,alphatest_pars_fragment:ET,aomap_fragment:TT,aomap_pars_fragment:wT,batching_pars_vertex:bT,batching_vertex:AT,begin_vertex:RT,beginnormal_vertex:CT,bsdfs:PT,iridescence_fragment:NT,bumpmap_pars_fragment:LT,clipping_planes_fragment:IT,clipping_planes_pars_fragment:DT,clipping_planes_pars_vertex:UT,clipping_planes_vertex:kT,color_fragment:FT,color_pars_fragment:OT,color_pars_vertex:BT,color_vertex:zT,common:HT,cube_uv_reflection_fragment:VT,defaultnormal_vertex:GT,displacementmap_pars_vertex:WT,displacementmap_vertex:XT,emissivemap_fragment:jT,emissivemap_pars_fragment:KT,colorspace_fragment:YT,colorspace_pars_fragment:qT,envmap_fragment:$T,envmap_common_pars_fragment:ZT,envmap_pars_fragment:JT,envmap_pars_vertex:QT,envmap_physical_pars_fragment:uw,envmap_vertex:ew,fog_vertex:tw,fog_pars_vertex:nw,fog_fragment:iw,fog_pars_fragment:rw,gradientmap_pars_fragment:sw,lightmap_pars_fragment:aw,lights_lambert_fragment:ow,lights_lambert_pars_fragment:lw,lights_pars_begin:cw,lights_toon_fragment:dw,lights_toon_pars_fragment:hw,lights_phong_fragment:fw,lights_phong_pars_fragment:pw,lights_physical_fragment:mw,lights_physical_pars_fragment:gw,lights_fragment_begin:_w,lights_fragment_maps:vw,lights_fragment_end:xw,lightprobes_pars_fragment:yw,logdepthbuf_fragment:Sw,logdepthbuf_pars_fragment:Mw,logdepthbuf_pars_vertex:Ew,logdepthbuf_vertex:Tw,map_fragment:ww,map_pars_fragment:bw,map_particle_fragment:Aw,map_particle_pars_fragment:Rw,metalnessmap_fragment:Cw,metalnessmap_pars_fragment:Pw,morphinstance_vertex:Nw,morphcolor_vertex:Lw,morphnormal_vertex:Iw,morphtarget_pars_vertex:Dw,morphtarget_vertex:Uw,normal_fragment_begin:kw,normal_fragment_maps:Fw,normal_pars_fragment:Ow,normal_pars_vertex:Bw,normal_vertex:zw,normalmap_pars_fragment:Hw,clearcoat_normal_fragment_begin:Vw,clearcoat_normal_fragment_maps:Gw,clearcoat_pars_fragment:Ww,iridescence_pars_fragment:Xw,opaque_fragment:jw,packing:Kw,premultiplied_alpha_fragment:Yw,project_vertex:qw,dithering_fragment:$w,dithering_pars_fragment:Zw,roughnessmap_fragment:Jw,roughnessmap_pars_fragment:Qw,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:tb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:rb,skinning_pars_vertex:sb,skinning_vertex:ab,skinnormal_vertex:ob,specularmap_fragment:lb,specularmap_pars_fragment:cb,tonemapping_fragment:ub,tonemapping_pars_fragment:db,transmission_fragment:hb,transmission_pars_fragment:fb,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,worldpos_vertex:_b,background_vert:vb,background_frag:xb,backgroundCube_vert:yb,backgroundCube_frag:Sb,cube_vert:Mb,cube_frag:Eb,depth_vert:Tb,depth_frag:wb,distance_vert:bb,distance_frag:Ab,equirect_vert:Rb,equirect_frag:Cb,linedashed_vert:Pb,linedashed_frag:Nb,meshbasic_vert:Lb,meshbasic_frag:Ib,meshlambert_vert:Db,meshlambert_frag:Ub,meshmatcap_vert:kb,meshmatcap_frag:Fb,meshnormal_vert:Ob,meshnormal_frag:Bb,meshphong_vert:zb,meshphong_frag:Hb,meshphysical_vert:Vb,meshphysical_frag:Gb,meshtoon_vert:Wb,meshtoon_frag:Xb,points_vert:jb,points_frag:Kb,shadow_vert:Yb,shadow_frag:qb,sprite_vert:$b,sprite_frag:Zb},fe={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},mi={basic:{uniforms:ln([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:ln([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:ln([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:ln([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:ln([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:ln([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:ln([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:ln([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:ln([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:ln([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:ln([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:ln([fe.common,fe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:ln([fe.lights,fe.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};mi.physical={uniforms:ln([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Sl={r:0,b:0,g:0},Jb=new Ge,$v=new Oe;$v.set(-1,0,0,0,1,0,0,0,1);function Qb(n,e,t,i,r,s){const a=new ke(0);let o=r===!0?0:1,l,c,u=null,h=0,d=null;function p(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){const x=_.backgroundBlurriness>0;S=e.get(S,x)}return S}function m(_){let S=!1;const x=p(_);x===null?g(a,o):x&&x.isColor&&(g(x,1),S=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(_,S){const x=p(S);x&&(x.isCubeTexture||x.mapping===zc)?(c===void 0&&(c=new Pn(new Po(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:na(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($v),c.material.toneMapped=Ye.getTransfer(x.colorSpace)!==st,(u!==x||h!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Pn(new Vc(2,2),new bi({name:"BackgroundMaterial",uniforms:na(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,S){_.getRGB(Sl,Wv(n)),t.buffers.color.setClear(Sl.r,Sl.g,Sl.b,S,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:m,addToRenderList:M,dispose:f}}function eA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(I,H,j,k,W){let Q=!1;const K=h(I,k,j,H);s!==K&&(s=K,c(s.object)),Q=p(I,k,j,W),Q&&m(I,k,j,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,x(I,H,j,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function h(I,H,j,k){const W=k.wireframe===!0;let Q=i[H.id];Q===void 0&&(Q={},i[H.id]=Q);const K=I.isInstancedMesh===!0?I.id:0;let z=Q[K];z===void 0&&(z={},Q[K]=z);let F=z[j.id];F===void 0&&(F={},z[j.id]=F);let U=F[W];return U===void 0&&(U=d(l()),F[W]=U),U}function d(I){const H=[],j=[],k=[];for(let W=0;W<t;W++)H[W]=0,j[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:k,object:I,attributes:{},index:null}}function p(I,H,j,k){const W=s.attributes,Q=H.attributes;let K=0;const z=j.getAttributes();for(const F in z)if(z[F].location>=0){const Y=W[F];let ae=Q[F];if(ae===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),Y===void 0||Y.attribute!==ae||ae&&Y.data!==ae.data)return!0;K++}return s.attributesNum!==K||s.index!==k}function m(I,H,j,k){const W={},Q=H.attributes;let K=0;const z=j.getAttributes();for(const F in z)if(z[F].location>=0){let Y=Q[F];Y===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));const ae={};ae.attribute=Y,Y&&Y.data&&(ae.data=Y.data),W[F]=ae,K++}s.attributes=W,s.attributesNum=K,s.index=k}function M(){const I=s.newAttributes;for(let H=0,j=I.length;H<j;H++)I[H]=0}function g(I){f(I,0)}function f(I,H){const j=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;j[I]=1,k[I]===0&&(n.enableVertexAttribArray(I),k[I]=1),W[I]!==H&&(n.vertexAttribDivisor(I,H),W[I]=H)}function _(){const I=s.newAttributes,H=s.enabledAttributes;for(let j=0,k=H.length;j<k;j++)H[j]!==I[j]&&(n.disableVertexAttribArray(j),H[j]=0)}function S(I,H,j,k,W,Q,K){K===!0?n.vertexAttribIPointer(I,H,j,W,Q):n.vertexAttribPointer(I,H,j,k,W,Q)}function x(I,H,j,k){M();const W=k.attributes,Q=j.getAttributes(),K=H.defaultAttributeValues;for(const z in Q){const F=Q[z];if(F.location>=0){let U=W[z];if(U===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(U=I.instanceColor)),U!==void 0){const Y=U.normalized,ae=U.itemSize,ge=e.get(U);if(ge===void 0)continue;const Be=ge.buffer,Ue=ge.type,De=ge.bytesPerElement,$=Ue===n.INT||Ue===n.UNSIGNED_INT||U.gpuType===Gf;if(U.isInterleavedBufferAttribute){const ne=U.data,Me=ne.stride,Fe=U.offset;if(ne.isInstancedInterleavedBuffer){for(let xe=0;xe<F.locationSize;xe++)f(F.location+xe,ne.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<F.locationSize;xe++)g(F.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let xe=0;xe<F.locationSize;xe++)S(F.location+xe,ae/F.locationSize,Ue,Y,Me*De,(Fe+ae/F.locationSize*xe)*De,$)}else{if(U.isInstancedBufferAttribute){for(let ne=0;ne<F.locationSize;ne++)f(F.location+ne,U.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ne=0;ne<F.locationSize;ne++)g(F.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let ne=0;ne<F.locationSize;ne++)S(F.location+ne,ae/F.locationSize,Ue,Y,ae*De,ae/F.locationSize*ne*De,$)}}else if(K!==void 0){const Y=K[z];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(F.location,Y);break;case 3:n.vertexAttrib3fv(F.location,Y);break;case 4:n.vertexAttrib4fv(F.location,Y);break;default:n.vertexAttrib1fv(F.location,Y)}}}}_()}function T(){R();for(const I in i){const H=i[I];for(const j in H){const k=H[j];for(const W in k){const Q=k[W];for(const K in Q)u(Q[K].object),delete Q[K];delete k[W]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;const H=i[I.id];for(const j in H){const k=H[j];for(const W in k){const Q=k[W];for(const K in Q)u(Q[K].object),delete Q[K];delete k[W]}}delete i[I.id]}function b(I){for(const H in i){const j=i[H];for(const k in j){const W=j[k];if(W[I.id]===void 0)continue;const Q=W[I.id];for(const K in Q)u(Q[K].object),delete Q[K];delete W[I.id]}}}function v(I){for(const H in i){const j=i[H],k=I.isInstancedMesh===!0?I.id:0,W=j[k];if(W!==void 0){for(const Q in W){const K=W[Q];for(const z in K)u(K[z].object),delete K[z];delete W[Q]}delete j[k],Object.keys(j).length===0&&delete i[H]}}}function R(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:g,disableUnusedAttributes:_}}function tA(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function nA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Hn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const v=b===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==wn&&b!==zn&&!v&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:x,maxSamples:T,samples:w}}function iA(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ur,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,f=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const _=s?0:i,S=_*4;let x=f.clippingState||null;l.value=x,x=u(m,d,S,p);for(let T=0;T!==S;++T)x[T]=t[T];f.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,m!==!0||g===null){const f=p+M*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let S=0,x=p;S!==M;++S,x+=4)a.copy(h[S]).applyMatrix4(_,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const ks=4,rA=6,sA=20,aA=256,Ra=new Wc,Rg=new ke;let Zu=null,Ju=0,Qu=0,ed=!1;const oA=new B,Fr=new B;class Cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=oA}=s;Zu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,Ju,Qu),this._renderer.xr.enabled=ed,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:wi,format:Hn,colorSpace:Cn,depthBuffer:!1},r=Pg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lA(s)),this._blurMaterial=uA(s,e,t),this._ggxMaterial=cA(s,e,t)}return r}_compileMaterial(e){const t=new Pn(new In,e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,i,r,s){const l=new un(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Rg),h.toneMapping=Mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new Po,new jr({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let f=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,f=!0):(g.color.copy(Rg),f=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const T=this._cubeSize;Ms(r,x*T,S>2?T:0,T,T),h.setRenderTarget(r),f&&h.render(M,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===es||e.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ng());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ms(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ra)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,p=h*d,{_lodMax:m}=this,M=this._sizeLods[i],g=3*M*(i>m-ks?i-m+ks:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,Ms(s,g,f,3*M,2*M),r.setRenderTarget(s),r.render(o,Ra),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Ms(e,g,f,3*M,2*M),r.setRenderTarget(e),r.render(o,Ra)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],h=3*u*(r>this._lodMax-ks?r-this._lodMax+ks:0),d=4*(this._cubeSize-u);Ms(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,Ra)}}function lA(n){const e=[],t=[];let i=n;const r=n-ks+1+rA;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,m=new Float32Array(p*d*h),M=new Float32Array(p*d*h);for(let f=0;f<h;f++){const _=f%3*2/3-1,S=f>2?0:-1,x=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];m.set(x,p*d*f);for(let T=0;T<d;T++){const w=u[T*2]*2-1,b=u[T*2+1]*2-1;f===0?Fr.set(1,b,w):f===1?Fr.set(-w,1,-b):f===2?Fr.set(-w,b,1):f===3?Fr.set(-1,b,-w):f===4?Fr.set(-w,-1,b):Fr.set(w,b,-1),Fr.toArray(M,(f*d+T)*p)}}const g=new In;g.setAttribute("position",new Sn(m,p)),g.setAttribute("outputDirection",new Sn(M,p)),t.push(new Pn(g,null)),i>ks&&i--}return{lodMeshes:t,sizeLods:e}}function Pg(n,e,t){const i=new ri(n,e,t);return i.texture.mapping=zc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cA(n,e,t){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function uA(n,e,t){return new bi({name:"SphericalGaussianBlur",defines:{SAMPLES:sA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ng(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Lg(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zv extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Po(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Gi});s.uniforms.tEquirect.value=t;const a=new Pn(r,s),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=Ot),new rT(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function dA(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Mu||p===Eu)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const M=new Zv(m.height);return M.fromEquirectangularTexture(n,d),e.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,m=p===Mu||p===Eu,M=p===es||p===Qs;if(m||M){let g=t.get(d);const f=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new Cg(n)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const _=d.image;return m&&_&&_.height>0||M&&_&&l(_)?(i===null&&(i=new Cg(n)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,p){return p===Mu?d.mapping=es:p===Eu&&(d.mapping=Qs),d}function l(d){let p=0;const m=6;for(let M=0;M<m;M++)d[M]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function hA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Gs("WebGLRenderer: "+i+" extension not supported."),r}}}function fA(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,m=h.attributes.position;let M=0;if(m===void 0)return;if(p!==null){const _=p.array;M=p.version;for(let S=0,x=_.length;S<x;S+=3){const T=_[S+0],w=_[S+1],b=_[S+2];d.push(T,w,w,b,b,T)}}else{const _=m.array;M=m.version;for(let S=0,x=_.length/3-1;S<x;S+=3){const T=S+0,w=S+1,b=S+2;d.push(T,w,w,b,b,T)}}const g=new(m.count>=65535?Ov:Fv)(d,1);g.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,g)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function pA(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,h*a,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let M=0;for(let g=0;g<p;g++)M+=d[g];t.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function mA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gA(n,e,t){const i=new WeakMap,r=new ut;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let P=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),M===!0&&(x=2),g===!0&&(x=3);let T=o.attributes.position.count*x,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const b=new Float32Array(T*w*4*h),v=new Dv(b,T,w,h);v.type=zn,v.needsUpdate=!0;const R=x*4;for(let I=0;I<h;I++){const H=f[I],j=_[I],k=S[I],W=T*w*4*I;for(let Q=0;Q<H.count;Q++){const K=Q*R;m===!0&&(r.fromBufferAttribute(H,Q),b[W+K+0]=r.x,b[W+K+1]=r.y,b[W+K+2]=r.z,b[W+K+3]=0),M===!0&&(r.fromBufferAttribute(j,Q),b[W+K+4]=r.x,b[W+K+5]=r.y,b[W+K+6]=r.z,b[W+K+7]=0),g===!0&&(r.fromBufferAttribute(k,Q),b[W+K+8]=r.x,b[W+K+9]=r.y,b[W+K+10]=r.z,b[W+K+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:v,size:new $e(T,w)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const M=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function _A(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const vA={[_v]:"LINEAR_TONE_MAPPING",[vv]:"REINHARD_TONE_MAPPING",[xv]:"CINEON_TONE_MAPPING",[Vf]:"ACES_FILMIC_TONE_MAPPING",[Sv]:"AGX_TONE_MAPPING",[Mv]:"NEUTRAL_TONE_MAPPING",[yv]:"CUSTOM_TONE_MAPPING"};function xA(n,e,t,i,r,s){const a=new ri(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new In;c.setAttribute("position",new si([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new si([0,2,0,0,2,0],2));const u=new LE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Pn(c,u),d=new Wc(-1,1,1,-1,0,1);let p=null,m=null,M=!1,g,f=null,_=[],S=!1;this.setSize=function(x,T){a.setSize(x,T),o!==null&&o.setSize(x,T),l!==null&&l.setSize(x,T);for(let w=0;w<_.length;w++){const b=_[w];b.setSize&&b.setSize(x,T)}},this.setEffects=function(x){_=x,S=_.length>0&&_[0].isRenderPass===!0;const T=a.width,w=a.height;_.length>0&&o===null&&(o=new ri(T,w,{type:wi,depthBuffer:!1,stencilBuffer:!1}),l=new ri(T,w,{type:wi,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<_.length;b++){const v=_[b];v.setSize&&v.setSize(T,w)}},this.begin=function(x,T){if(M||x.toneMapping===Mi&&_.length===0)return!1;if(f=T,T!==null){const w=T.width,b=T.height;(a.width!==w||a.height!==b)&&this.setSize(w,b)}return S===!1&&x.setRenderTarget(a),g=x.toneMapping,x.toneMapping=Mi,!0},this.hasRenderPass=function(){return S},this.end=function(x,T){x.toneMapping=g,M=!0;let w=a,b=o;for(let v=0;v<_.length;v++){const R=_[v];R.enabled!==!1&&(R.render(x,b,w,T),R.needsSwap!==!1&&(w=b,b=b===o?l:o))}if(p!==x.outputColorSpace||m!==x.toneMapping){p=x.outputColorSpace,m=x.toneMapping,u.defines={},Ye.getTransfer(p)===st&&(u.defines.SRGB_TRANSFER="");const v=vA[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(f),x.render(h,d),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Jv=new jt,Vh=new Mo(1,1),Qv=new Dv,ex=new tE,tx=new Vv,Ig=[],Dg=[],Ug=new Float32Array(16),kg=new Float32Array(9),Fg=new Float32Array(4);function da(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ig[r];if(s===void 0&&(s=new Float32Array(r),Ig[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function jc(n,e){let t=Dg[e];t===void 0&&(t=new Int32Array(e),Dg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function SA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function MA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function EA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function TA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Fg.set(i),n.uniformMatrix2fv(this.addr,!1,Fg),zt(t,i)}}function wA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;kg.set(i),n.uniformMatrix3fv(this.addr,!1,kg),zt(t,i)}}function bA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Ug.set(i),n.uniformMatrix4fv(this.addr,!1,Ug),zt(t,i)}}function AA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function RA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function CA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function PA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function NA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function LA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function IA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function DA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function UA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Vh.compareFunction=t.isReversedDepthBuffer()?Zf:$f,s=Vh):s=Jv,t.setTexture2D(e||s,r)}function kA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ex,r)}function FA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tx,r)}function OA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qv,r)}function BA(n){switch(n){case 5126:return yA;case 35664:return SA;case 35665:return MA;case 35666:return EA;case 35674:return TA;case 35675:return wA;case 35676:return bA;case 5124:case 35670:return AA;case 35667:case 35671:return RA;case 35668:case 35672:return CA;case 35669:case 35673:return PA;case 5125:return NA;case 36294:return LA;case 36295:return IA;case 36296:return DA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return OA}}function zA(n,e){n.uniform1fv(this.addr,e)}function HA(n,e){const t=da(e,this.size,2);n.uniform2fv(this.addr,t)}function VA(n,e){const t=da(e,this.size,3);n.uniform3fv(this.addr,t)}function GA(n,e){const t=da(e,this.size,4);n.uniform4fv(this.addr,t)}function WA(n,e){const t=da(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function XA(n,e){const t=da(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jA(n,e){const t=da(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KA(n,e){n.uniform1iv(this.addr,e)}function YA(n,e){n.uniform2iv(this.addr,e)}function qA(n,e){n.uniform3iv(this.addr,e)}function $A(n,e){n.uniform4iv(this.addr,e)}function ZA(n,e){n.uniform1uiv(this.addr,e)}function JA(n,e){n.uniform2uiv(this.addr,e)}function QA(n,e){n.uniform3uiv(this.addr,e)}function e1(n,e){n.uniform4uiv(this.addr,e)}function t1(n,e,t){const i=this.cache,r=e.length,s=jc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Vh:a=Jv;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function n1(n,e,t){const i=this.cache,r=e.length,s=jc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ex,s[a])}function i1(n,e,t){const i=this.cache,r=e.length,s=jc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tx,s[a])}function r1(n,e,t){const i=this.cache,r=e.length,s=jc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Qv,s[a])}function s1(n){switch(n){case 5126:return zA;case 35664:return HA;case 35665:return VA;case 35666:return GA;case 35674:return WA;case 35675:return XA;case 35676:return jA;case 5124:case 35670:return KA;case 35667:case 35671:return YA;case 35668:case 35672:return qA;case 35669:case 35673:return $A;case 5125:return ZA;case 36294:return JA;case 36295:return QA;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return r1}}class a1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BA(t.type)}}class o1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s1(t.type)}}class l1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const td=/(\w+)(\])?(\[|\.)?/g;function Og(n,e){n.seq.push(e),n.map[e.id]=e}function c1(n,e,t){const i=n.name,r=i.length;for(td.lastIndex=0;;){const s=td.exec(i),a=td.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Og(t,c===void 0?new a1(o,n,e):new o1(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new l1(o),Og(t,h)),t=h}}}class Gl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);c1(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Bg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const u1=37297;let d1=0;function h1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const zg=new Oe;function f1(n){Ye._getMatrix(zg,Ye.workingColorSpace,n);const e=`mat3( ${zg.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case _c:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+h1(n.getShaderSource(e),o)}else return s}function p1(n,e){const t=f1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const m1={[_v]:"Linear",[vv]:"Reinhard",[xv]:"Cineon",[Vf]:"ACESFilmic",[Sv]:"AgX",[Mv]:"Neutral",[yv]:"Custom"};function g1(n,e){const t=m1[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ml=new B;function _1(){Ye.getLuminanceCoefficients(Ml);const n=Ml.x.toFixed(4),e=Ml.y.toFixed(4),t=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function x1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function y1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Fa(n){return n!==""}function Vg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(n){return n.replace(S1,E1)}const M1=new Map;function E1(n,e){let t=Ve[e];if(t===void 0){const i=M1.get(e);if(i!==void 0)t=Ve[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gh(t)}const T1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(n){return n.replace(T1,w1)}function w1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const b1={[kl]:"SHADOWMAP_TYPE_PCF",[Ua]:"SHADOWMAP_TYPE_VSM"};function A1(n){return b1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R1={[es]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[zc]:"ENVMAP_TYPE_CUBE_UV"};function C1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":R1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const P1={[Qs]:"ENVMAP_MODE_REFRACTION"};function N1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":P1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L1={[gv]:"ENVMAP_BLENDING_MULTIPLY",[pM]:"ENVMAP_BLENDING_MIX",[mM]:"ENVMAP_BLENDING_ADD"};function I1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":L1[n.combine]||"ENVMAP_BLENDING_NONE"}function D1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function U1(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=A1(t),c=C1(t),u=N1(t),h=I1(t),d=D1(t),p=v1(t),m=x1(s),M=r.createProgram();let g,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Fa).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Fa).join(`
`),f.length>0&&(f+=`
`)):(g=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),f=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Mi?g1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,p1("linearToOutputTexel",t.outputColorSpace),_1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),a=Gh(a),a=Vg(a,t),a=Gg(a,t),o=Gh(o),o=Vg(o,t),o=Gg(o,t),a=Wg(a),o=Wg(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=_+g+a,x=_+f+o,T=Bg(r,r.VERTEX_SHADER,S),w=Bg(r,r.FRAGMENT_SHADER,x);r.attachShader(M,T),r.attachShader(M,w),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function b(I){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(M)||"",j=r.getShaderInfoLog(T)||"",k=r.getShaderInfoLog(w)||"",W=H.trim(),Q=j.trim(),K=k.trim();let z=!0,F=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,T,w);else{const U=Hg(r,T,"vertex"),Y=Hg(r,w,"fragment");Ie("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+U+`
`+Y)}else W!==""?Re("WebGLProgram: Program Info Log:",W):(Q===""||K==="")&&(F=!1);F&&(I.diagnostics={runnable:z,programLog:W,vertexShader:{log:Q,prefix:g},fragmentShader:{log:K,prefix:f}})}r.deleteShader(T),r.deleteShader(w),v=new Gl(r,M),R=y1(r,M)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let R;this.getAttributes=function(){return R===void 0&&b(this),R};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(M,u1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=w,this}let k1=0;class F1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new O1(e),t.set(e,i)),i}}class O1{constructor(e){this.id=k1++,this.code=e,this.usedTimes=0}}function B1(n){return n===ts||n===mc||n===gc}function z1(n,e,t,i,r,s){const a=new Uv,o=new F1,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,R,P,I,H,j){const k=I.fog,W=H.geometry,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,z=e.get(v.envMap||Q,K),F=z&&z.mapping===zc?z.image.height:null,U=p[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Re("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const Y=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=Y!==void 0?Y.length:0;let ge=0;W.morphAttributes.position!==void 0&&(ge=1),W.morphAttributes.normal!==void 0&&(ge=2),W.morphAttributes.color!==void 0&&(ge=3);let Be,Ue,De,$;if(U){const ft=mi[U];Be=ft.vertexShader,Ue=ft.fragmentShader}else{Be=v.vertexShader,Ue=v.fragmentShader;const ft=o.getVertexShaderStage(v),nt=o.getFragmentShaderStage(v);o.update(v,ft,nt),De=ft.id,$=nt.id}const ne=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),Fe=H.isInstancedMesh===!0,xe=H.isBatchedMesh===!0,We=!!v.map,Dt=!!v.matcap,je=!!z,tt=!!v.aoMap,ht=!!v.lightMap,Je=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,Ht=!!v.displacementMap,pn=!!v.emissiveMap,St=!!v.metalnessMap,Pt=!!v.roughnessMap,D=v.anisotropy>0,Zt=v.clearcoat>0,rt=v.dispersion>0,C=v.retroreflectivity>0,y=v.iridescence>0,O=v.sheen>0,X=v.transmission>0,Z=D&&!!v.anisotropyMap,se=Zt&&!!v.clearcoatMap,oe=Zt&&!!v.clearcoatNormalMap,J=Zt&&!!v.clearcoatRoughnessMap,te=y&&!!v.iridescenceMap,le=y&&!!v.iridescenceThicknessMap,Ce=O&&!!v.sheenColorMap,he=O&&!!v.sheenRoughnessMap,ce=!!v.specularMap,Pe=!!v.specularColorMap,Le=!!v.specularIntensityMap,ze=X&&!!v.transmissionMap,L=X&&!!v.thicknessMap,ue=!!v.gradientMap,ee=!!v.alphaMap,de=v.alphaTest>0,_e=!!v.alphaHash,ie=!!v.extensions;let Ne=Mi;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const we={shaderID:U,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:Ue,defines:v.defines,customVertexShaderID:De,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:xe,batchingColor:xe&&H._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&H.instanceColor!==null,instancingMorph:Fe&&H.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:Dt,envMap:je,envMapMode:je&&z.mapping,envMapCubeUVHeight:F,aoMap:tt,lightMap:ht,bumpMap:Je,normalMap:xt,displacementMap:Ht,emissiveMap:pn,normalMapObjectSpace:xt&&v.normalMapType===yM,normalMapTangentSpace:xt&&v.normalMapType===Oh,packedNormalMap:xt&&v.normalMapType===Oh&&B1(v.normalMap.format),metalnessMap:St,roughnessMap:Pt,anisotropy:D,anisotropyMap:Z,clearcoat:Zt,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:J,dispersion:rt,retroreflection:C,iridescence:y,iridescenceMap:te,iridescenceThicknessMap:le,sheen:O,sheenColorMap:Ce,sheenRoughnessMap:he,specularMap:ce,specularColorMap:Pe,specularIntensityMap:Le,transmission:X,transmissionMap:ze,thicknessMap:L,gradientMap:ue,opaque:v.transparent===!1&&v.blending===Ka&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:de,alphaHash:_e,combine:v.combine,mapUv:We&&m(v.map.channel),aoMapUv:tt&&m(v.aoMap.channel),lightMapUv:ht&&m(v.lightMap.channel),bumpMapUv:Je&&m(v.bumpMap.channel),normalMapUv:xt&&m(v.normalMap.channel),displacementMapUv:Ht&&m(v.displacementMap.channel),emissiveMapUv:pn&&m(v.emissiveMap.channel),metalnessMapUv:St&&m(v.metalnessMap.channel),roughnessMapUv:Pt&&m(v.roughnessMap.channel),anisotropyMapUv:Z&&m(v.anisotropyMap.channel),clearcoatMapUv:se&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:le&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:he&&m(v.sheenRoughnessMap.channel),specularMapUv:ce&&m(v.specularMap.channel),specularColorMapUv:Pe&&m(v.specularColorMap.channel),specularIntensityMapUv:Le&&m(v.specularIntensityMap.channel),transmissionMapUv:ze&&m(v.transmissionMap.channel),thicknessMapUv:L&&m(v.thicknessMap.channel),alphaMapUv:ee&&m(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(xt||D),vertexNormals:!!W.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(We||ee),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Me,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ge,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:pn&&v.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_i,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)R.push(P),R.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(f(R,v),_(R,v),R.push(n.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function f(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numSunLights),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numSunLightShadows),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function _(v,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){const R=p[v.type];let P;if(R){const I=mi[R];P=CE.clone(I.uniforms)}else P=v.uniforms;return P}function x(v,R){let P=u.get(R);return P!==void 0?++P.usedTimes:(P=new U1(n,R,v,r),c.push(P),u.set(R,P)),P}function T(v){if(--v.usedTimes===0){const R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function b(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:S,acquireProgram:x,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:b}}function H1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function V1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function jg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,M,g,f){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:p,material:m,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:g,group:f},n[e]=_):(_.id=d.id,_.object=d,_.geometry=p,_.material=m,_.materialVariant=a(d),_.groupOrder=M,_.renderOrder=d.renderOrder,_.z=g,_.group=f),e++,_}function l(d,p,m,M,g,f,_){_.reversedDepth===!0&&(g=-g);const S=o(d,p,m,M,g,f);m.transmission>0?i.push(S):m.transparent===!0?r.push(S):t.push(S)}function c(d,p,m,M,g,f){const _=o(d,p,m,M,g,f);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function u(d,p){t.length>1&&t.sort(d||V1),i.length>1&&i.sort(p||jg),r.length>1&&r.sort(p||jg)}function h(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function G1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Kg,n.set(i,[a])):r>=s.length?(a=new Kg,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function W1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new ke};break;case"SpotLight":t={position:new B,direction:new B,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function X1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let j1=0;function K1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Y1(n){const e=new W1,t=X1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new Ge,a=new Ge;function o(c){let u=0,h=0,d=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,m=0,M=0,g=0,f=0,_=0,S=0,x=0,T=0,w=0,b=0,v=0,R=0,P=0;c.sort(K1);for(let H=0,j=c.length;H<j;H++){const k=c[H],W=k.color,Q=k.intensity,K=k.distance;let z=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ts?z=k.shadow.map.texture:z=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=W.r*Q,h+=W.g*Q,d+=W.b*Q;else if(k.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(k.sh.coefficients[F],Q);P++}else if(k.isSunLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const U=k.shadow,Y=t.get(k);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),i.sunShadow[m]=Y,i.sunShadowMap[m]=z;const ae=U.getViewportCount();for(let ge=0;ge<ae;ge++)i.sunShadowMatrix[M+ge]=U.getMatrix(ge),i.sunShadowCascade[M+ge]=U._cascadeData[ge];M+=ae,m++}i.sun[p]=F,p++}else if(k.isDirectionalLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const U=k.shadow,Y=t.get(k);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,i.directionalShadow[g]=Y,i.directionalShadowMap[g]=z,i.directionalShadowMatrix[g]=k.shadow.matrix,T++}i.directional[g]=F,g++}else if(k.isSpotLight){const F=e.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(W).multiplyScalar(Q),F.distance=K,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,i.spot[_]=F;const U=k.shadow;if(k.map&&(i.spotLightMap[v]=k.map,v++,U.updateMatrices(k),k.castShadow&&R++),i.spotLightMatrix[_]=U.matrix,k.castShadow){const Y=t.get(k);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=z,b++}_++}else if(k.isRectAreaLight){const F=e.get(k);F.color.copy(W).multiplyScalar(Q),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),i.rectArea[S]=F,S++}else if(k.isPointLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const U=k.shadow,Y=t.get(k);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,Y.shadowCameraNear=U.camera.near,Y.shadowCameraFar=U.camera.far,i.pointShadow[f]=Y,i.pointShadowMap[f]=z,i.pointShadowMatrix[f]=k.shadow.matrix,w++}i.point[f]=F,f++}else if(k.isHemisphereLight){const F=e.get(k);F.skyColor.copy(k.color).multiplyScalar(Q),F.groundColor.copy(k.groundColor).multiplyScalar(Q),i.hemi[x]=F,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.sunLength!==p||I.directionalLength!==g||I.pointLength!==f||I.spotLength!==_||I.rectAreaLength!==S||I.hemiLength!==x||I.numSunShadows!==m||I.numDirectionalShadows!==T||I.numPointShadows!==w||I.numSpotShadows!==b||I.numSpotMaps!==v||I.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=g,i.spot.length=_,i.rectArea.length=S,i.point.length=f,i.hemi.length=x,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.spotLightMatrix.length=b+v-R,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,I.sunLength=p,I.directionalLength=g,I.pointLength=f,I.spotLength=_,I.rectAreaLength=S,I.hemiLength=x,I.numSunShadows=m,I.numDirectionalShadows=T,I.numPointShadows=w,I.numSpotShadows=b,I.numSpotMaps=v,I.numLightProbes=P,i.version=j1++)}function l(c,u){let h=0,d=0,p=0,m=0,M=0,g=0;const f=u.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){const x=c[_];if(x.isSunLight){const T=i.sun[h];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(f),h++}else if(x.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),d++}else if(x.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),m++}else if(x.isRectAreaLight){const T=i.rectArea[M];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:i}}function Yg(n){const e=new Y1(n),t=[],i=[],r=[];function s(d){h.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function q1(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Yg(n),e.set(r,[o])):s>=a.length?(o=new Yg(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,J1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Q1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],qg=new Ge,Ca=new B,nd=new B;function eR(n,e,t){let i=new ip;const r=new $e,s=new $e,a=new ut,o=new IE,l=new DE,c={},u=t.maxTextureSize,h={[Ar]:yn,[yn]:Ar,[_i]:_i},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:$1,fragmentShader:Z1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new In;m.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Pn(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let f=this.type;this.render=function(w,b,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===qS&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kl);const R=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Gi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=f!==this.type;j&&b.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(W=>W.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,W=w.length;k<W;k++){const Q=w[k],K=Q.shadow;if(K===void 0){Re("WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const z=K.getFrameExtents();r.multiply(z),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,K.mapSize.y=s.y));const F=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=F,K.map===null||j===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ua){if(Q.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new ri(r.x,r.y,{format:ts,type:wi,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),K.map.texture.name=Q.name+".shadowMap",K.map.depthTexture=new Mo(r.x,r.y,zn),K.map.depthTexture.name=Q.name+".shadowMapDepth",K.map.depthTexture.format=qi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ft,K.map.depthTexture.magFilter=Ft}else Q.isPointLight?(K.map=new Zv(r.x),K.map.depthTexture=new AE(r.x,Ti)):(K.map=new ri(r.x,r.y),K.map.depthTexture=new Mo(r.x,r.y,Ti)),K.map.depthTexture.name=Q.name+".shadowMap",K.map.depthTexture.format=qi,this.type===kl?(K.map.depthTexture.compareFunction=F?Zf:$f,K.map.depthTexture.minFilter=Ot,K.map.depthTexture.magFilter=Ot):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ft,K.map.depthTexture.magFilter=Ft);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);const U=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Q.isPointLight!==!0&&K.updateMatrices(Q,v);for(let Y=0;Y<U;Y++){const ae=K.getCamera(Y);if(Q.isPointLight){const ge=K.camera,Be=K.matrix,Ue=Q.distance||ge.far;Ue!==ge.far&&(ge.far=Ue,ge.updateProjectionMatrix()),Ca.setFromMatrixPosition(Q.matrixWorld),ge.position.copy(Ca),nd.copy(ge.position),nd.add(J1[Y]),ge.up.copy(Q1[Y]),ge.lookAt(nd),ge.updateMatrixWorld(),Be.makeTranslation(-Ca.x,-Ca.y,-Ca.z),qg.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),K._frustum.setFromProjectionMatrix(qg,ge.coordinateSystem,ge.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,Y),n.clear();else{Y===0&&(n.setRenderTarget(K.map),n.clear());const ge=K.getViewport(Y);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),H.viewport(a)}i=K.getFrustum(Y),x(b,v,ae,Q,this.type)}K.isPointLightShadow!==!0&&this.type===Ua&&_(K,v),K.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(R,P,I)};function _(w,b){const v=e.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new ri(r.x,r.y,{format:ts,type:wi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(b,null,v,d,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(b,null,v,p,M,null)}function S(w,b,v,R){let P=null;const I=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=v.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const H=P.uuid,j=b.uuid;let k=c[H];k===void 0&&(k={},c[H]=k);let W=k[j];W===void 0&&(W=P.clone(),k[j]=W,b.addEventListener("dispose",T)),P=W}if(P.visible=b.visible,P.wireframe=b.wireframe,R===Ua?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:h[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const H=n.properties.get(P);H.light=v}return P}function x(w,b,v,R,P){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ua)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const j=e.update(w),k=w.material;if(Array.isArray(k)){const W=j.groups;for(let Q=0,K=W.length;Q<K;Q++){const z=W[Q],F=k[z.materialIndex];if(F&&F.visible){const U=S(w,F,R,P);w.onBeforeShadow(n,w,b,v,j,U,z),n.renderBufferDirect(v,null,j,U,w,z),w.onAfterShadow(n,w,b,v,j,U,z)}}}else if(k.visible){const W=S(w,k,R,P);w.onBeforeShadow(n,w,b,v,j,W,null),n.renderBufferDirect(v,null,j,W,w,null),w.onAfterShadow(n,w,b,v,j,W,null)}}const H=w.children;for(let j=0,k=H.length;j<k;j++)x(H[j],b,v,R,P)}function T(w){w.target.removeEventListener("dispose",T);for(const v in c){const R=c[v],P=w.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function tR(n,e){function t(){let L=!1;const ue=new ut;let ee=null;const de=new ut(0,0,0,0);return{setMask:function(_e){ee!==_e&&!L&&(n.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){L=_e},setClear:function(_e,ie,Ne,we,ft){ft===!0&&(_e*=we,ie*=we,Ne*=we),ue.set(_e,ie,Ne,we),de.equals(ue)===!1&&(n.clearColor(_e,ie,Ne,we),de.copy(ue))},reset:function(){L=!1,ee=null,de.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,ee=null,de=null,_e=null;return{setReversed:function(ie){if(ue!==ie){const Ne=e.get("EXT_clip_control");ie?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const we=_e;_e=null,this.setClear(we)}},getReversed:function(){return ue},setTest:function(ie){ie?ne(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!L&&(n.depthMask(ie),ee=ie)},setFunc:function(ie){if(ue&&(ie=LM[ie]),de!==ie){switch(ie){case eh:n.depthFunc(n.NEVER);break;case th:n.depthFunc(n.ALWAYS);break;case nh:n.depthFunc(n.LESS);break;case mo:n.depthFunc(n.LEQUAL);break;case ih:n.depthFunc(n.EQUAL);break;case rh:n.depthFunc(n.GEQUAL);break;case sh:n.depthFunc(n.GREATER);break;case ah:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=ie}},setLocked:function(ie){L=ie},setClear:function(ie){_e!==ie&&(_e=ie,ue&&(ie=1-ie),n.clearDepth(ie))},reset:function(){L=!1,ee=null,de=null,_e=null,ue=!1}}}function r(){let L=!1,ue=null,ee=null,de=null,_e=null,ie=null,Ne=null,we=null,ft=null;return{setTest:function(nt){L||(nt?ne(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!L&&(n.stencilMask(nt),ue=nt)},setFunc:function(nt,Xn,li){(ee!==nt||de!==Xn||_e!==li)&&(n.stencilFunc(nt,Xn,li),ee=nt,de=Xn,_e=li)},setOp:function(nt,Xn,li){(ie!==nt||Ne!==Xn||we!==li)&&(n.stencilOp(nt,Xn,li),ie=nt,Ne=Xn,we=li)},setLocked:function(nt){L=nt},setClear:function(nt){ft!==nt&&(n.clearStencil(nt),ft=nt)},reset:function(){L=!1,ue=null,ee=null,de=null,_e=null,ie=null,Ne=null,we=null,ft=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,m=[],M=null,g=!1,f=null,_=null,S=null,x=null,T=null,w=null,b=null,v=new ke(0,0,0),R=0,P=!1,I=null,H=null,j=null,k=null,W=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,z=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),K=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),K=z>=2);let U=null,Y={};const ae=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Be=new ut().fromArray(ae),Ue=new ut().fromArray(ge);function De(L,ue,ee,de){const _e=new Uint8Array(4),ie=n.createTexture();n.bindTexture(L,ie),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<ee;Ne++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(ue+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ie}const $={};$[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(mo),Je(!1),xt(Im),ne(n.CULL_FACE),tt(Gi);function ne(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Me(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Fe(L,ue){return d[L]!==ue?(n.bindFramebuffer(L,ue),d[L]=ue,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function xe(L,ue){let ee=m,de=!1;if(L){ee=p.get(ue),ee===void 0&&(ee=[],p.set(ue,ee));const _e=L.textures;if(ee.length!==_e.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ne=_e.length;ie<Ne;ie++)ee[ie]=n.COLOR_ATTACHMENT0+ie;ee.length=_e.length,de=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,de=!0);de&&n.drawBuffers(ee)}function We(L){return M!==L?(n.useProgram(L),M=L,!0):!1}const Dt={[Es]:n.FUNC_ADD,[ZS]:n.FUNC_SUBTRACT,[JS]:n.FUNC_REVERSE_SUBTRACT};Dt[QS]=n.MIN,Dt[eM]=n.MAX;const je={[tM]:n.ZERO,[nM]:n.ONE,[iM]:n.SRC_COLOR,[pv]:n.SRC_ALPHA,[cM]:n.SRC_ALPHA_SATURATE,[oM]:n.DST_COLOR,[sM]:n.DST_ALPHA,[rM]:n.ONE_MINUS_SRC_COLOR,[mv]:n.ONE_MINUS_SRC_ALPHA,[lM]:n.ONE_MINUS_DST_COLOR,[aM]:n.ONE_MINUS_DST_ALPHA,[uM]:n.CONSTANT_COLOR,[dM]:n.ONE_MINUS_CONSTANT_COLOR,[hM]:n.CONSTANT_ALPHA,[fM]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(L,ue,ee,de,_e,ie,Ne,we,ft,nt){if(L===Gi){g===!0&&(Me(n.BLEND),g=!1);return}if(g===!1&&(ne(n.BLEND),g=!0),L!==$S){if(L!==f||nt!==P){if((_!==Es||T!==Es)&&(n.blendEquation(n.FUNC_ADD),_=Es,T=Es),nt)switch(L){case Ka:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dm:n.blendFunc(n.ONE,n.ONE);break;case Um:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case km:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ie("WebGLState: Invalid blending: ",L);break}else switch(L){case Ka:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Um:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case km:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",L);break}S=null,x=null,w=null,b=null,v.set(0,0,0),R=0,f=L,P=nt}return}_e=_e||ue,ie=ie||ee,Ne=Ne||de,(ue!==_||_e!==T)&&(n.blendEquationSeparate(Dt[ue],Dt[_e]),_=ue,T=_e),(ee!==S||de!==x||ie!==w||Ne!==b)&&(n.blendFuncSeparate(je[ee],je[de],je[ie],je[Ne]),S=ee,x=de,w=ie,b=Ne),(we.equals(v)===!1||ft!==R)&&(n.blendColor(we.r,we.g,we.b,ft),v.copy(we),R=ft),f=L,P=!1}function ht(L,ue){L.side===_i?Me(n.CULL_FACE):ne(n.CULL_FACE);let ee=L.side===yn;ue&&(ee=!ee),Je(ee),L.blending===Ka&&L.transparent===!1?tt(Gi):tt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),pn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(L){I!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),I=L)}function xt(L){L!==KS?(ne(n.CULL_FACE),L!==H&&(L===Im?n.cullFace(n.BACK):L===YS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),H=L}function Ht(L){L!==j&&(K&&n.lineWidth(L),j=L)}function pn(L,ue,ee){L?(ne(n.POLYGON_OFFSET_FILL),(k!==ue||W!==ee)&&(k=ue,W=ee,a.getReversed()&&(ue=-ue),n.polygonOffset(ue,ee))):Me(n.POLYGON_OFFSET_FILL)}function St(L){L?ne(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function Pt(L){L===void 0&&(L=n.TEXTURE0+Q-1),U!==L&&(n.activeTexture(L),U=L)}function D(L,ue,ee){ee===void 0&&(U===null?ee=n.TEXTURE0+Q-1:ee=U);let de=Y[ee];de===void 0&&(de={type:void 0,texture:void 0},Y[ee]=de),(de.type!==L||de.texture!==ue)&&(U!==ee&&(n.activeTexture(ee),U=ee),n.bindTexture(L,ue||$[L]),de.type=L,de.texture=ue)}function Zt(){const L=Y[U];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function rt(){try{n.compressedTexImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function y(){try{n.texSubImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function O(){try{n.texSubImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function se(){try{n.texStorage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function oe(){try{n.texStorage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function J(){try{n.texImage2D(...arguments)}catch(L){Ie("WebGLState:",L)}}function te(){try{n.texImage3D(...arguments)}catch(L){Ie("WebGLState:",L)}}function le(L){return h[L]!==void 0?h[L]:n.getParameter(L)}function Ce(L,ue){h[L]!==ue&&(n.pixelStorei(L,ue),h[L]=ue)}function he(L){Be.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Be.copy(L))}function ce(L){Ue.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ue.copy(L))}function Pe(L,ue){let ee=c.get(ue);ee===void 0&&(ee=new WeakMap,c.set(ue,ee));let de=ee.get(L);de===void 0&&(de=n.getUniformBlockIndex(ue,L.name),ee.set(L,de))}function Le(L,ue){const de=c.get(ue).get(L);l.get(ue)!==de&&(n.uniformBlockBinding(ue,de,L.__bindingPointIndex),l.set(ue,de))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},U=null,Y={},d={},p=new WeakMap,m=[],M=null,g=!1,f=null,_=null,S=null,x=null,T=null,w=null,b=null,v=new ke(0,0,0),R=0,P=!1,I=null,H=null,j=null,k=null,W=null,Be.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Me,bindFramebuffer:Fe,drawBuffers:xe,useProgram:We,setBlending:tt,setMaterial:ht,setFlipSided:Je,setCullFace:xt,setLineWidth:Ht,setPolygonOffset:pn,setScissorTest:St,activeTexture:Pt,bindTexture:D,unbindTexture:Zt,compressedTexImage2D:rt,compressedTexImage3D:C,texImage2D:J,texImage3D:te,pixelStorei:Ce,getParameter:le,updateUBOMapping:Pe,uniformBlockBinding:Le,texStorage2D:se,texStorage3D:oe,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:he,viewport:ce,reset:ze}}function nR(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,y){return m?new OffscreenCanvas(C,y):So("canvas")}function g(C,y,O){let X=1;const Z=rt(C);if((Z.width>O||Z.height>O)&&(X=O/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(X*Z.width),oe=Math.floor(X*Z.height);d===void 0&&(d=M(se,oe));const J=y?M(se,oe):d;return J.width=se,J.height=oe,J.getContext("2d").drawImage(C,0,0,se,oe),Re("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+se+"x"+oe+")."),J}else return"data"in C&&Re("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function f(C){return C.generateMipmaps}function _(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,y,O,X,Z,se=!1){if(C!==null){if(n[C]!==void 0)return n[C];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;X&&(oe=e.get("EXT_texture_norm16"),oe||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===n.RED&&(O===n.FLOAT&&(J=n.R32F),O===n.HALF_FLOAT&&(J=n.R16F),O===n.UNSIGNED_BYTE&&(J=n.R8),O===n.UNSIGNED_SHORT&&oe&&(J=oe.R16_EXT),O===n.SHORT&&oe&&(J=oe.R16_SNORM_EXT)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.R8UI),O===n.UNSIGNED_SHORT&&(J=n.R16UI),O===n.UNSIGNED_INT&&(J=n.R32UI),O===n.BYTE&&(J=n.R8I),O===n.SHORT&&(J=n.R16I),O===n.INT&&(J=n.R32I)),y===n.RG&&(O===n.FLOAT&&(J=n.RG32F),O===n.HALF_FLOAT&&(J=n.RG16F),O===n.UNSIGNED_BYTE&&(J=n.RG8),O===n.UNSIGNED_SHORT&&oe&&(J=oe.RG16_EXT),O===n.SHORT&&oe&&(J=oe.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RG8UI),O===n.UNSIGNED_SHORT&&(J=n.RG16UI),O===n.UNSIGNED_INT&&(J=n.RG32UI),O===n.BYTE&&(J=n.RG8I),O===n.SHORT&&(J=n.RG16I),O===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RGB8UI),O===n.UNSIGNED_SHORT&&(J=n.RGB16UI),O===n.UNSIGNED_INT&&(J=n.RGB32UI),O===n.BYTE&&(J=n.RGB8I),O===n.SHORT&&(J=n.RGB16I),O===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),O===n.UNSIGNED_INT&&(J=n.RGBA32UI),O===n.BYTE&&(J=n.RGBA8I),O===n.SHORT&&(J=n.RGBA16I),O===n.INT&&(J=n.RGBA32I)),y===n.RGB&&(O===n.UNSIGNED_SHORT&&oe&&(J=oe.RGB16_EXT),O===n.SHORT&&oe&&(J=oe.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),y===n.RGBA){const te=se?_c:Ye.getTransfer(Z);O===n.FLOAT&&(J=n.RGBA32F),O===n.HALF_FLOAT&&(J=n.RGBA16F),O===n.UNSIGNED_BYTE&&(J=te===st?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&oe&&(J=oe.RGBA16_EXT),O===n.SHORT&&oe&&(J=oe.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(C,y){let O;return C?y===null||y===Ti||y===_o?O=n.DEPTH24_STENCIL8:y===zn?O=n.DEPTH32F_STENCIL8:y===go&&(O=n.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ti||y===_o?O=n.DEPTH_COMPONENT24:y===zn?O=n.DEPTH_COMPONENT32F:y===go&&(O=n.DEPTH_COMPONENT16),O}function w(C,y){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function b(C){const y=C.target;y.removeEventListener("dispose",b),R(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&h.delete(y)}function v(C){const y=C.target;y.removeEventListener("dispose",v),I(y)}function R(C){const y=i.get(C);if(y.__webglInit===void 0)return;const O=C.source,X=p.get(O);if(X){const Z=X[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(C),Object.keys(X).length===0&&p.delete(O)}i.remove(C)}function P(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const O=C.source,X=p.get(O);delete X[y.__cacheKey],a.memory.textures--}function I(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let Z=0;Z<y.__webglFramebuffer[X].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[X][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)n.deleteFramebuffer(y.__webglFramebuffer[X]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=C.textures;for(let X=0,Z=O.length;X<Z;X++){const se=i.get(O[X]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(O[X])}i.remove(C)}let H=0;function j(){H=0}function k(){return H}function W(C){H=C}function Q(){const C=H;return C>=r.maxTextures&&Re("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),H+=1,C}function K(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function z(C,y){const O=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const X=C.image;if(X===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(O,C,y);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function F(C,y){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Me(O,C,y);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function U(C,y){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Me(O,C,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function Y(C,y){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Fe(O,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const ae={[ea]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[pc]:n.MIRRORED_REPEAT},ge={[Ft]:n.NEAREST,[Tv]:n.NEAREST_MIPMAP_NEAREST,[ka]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[Fl]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},Be={[MM]:n.NEVER,[AM]:n.ALWAYS,[EM]:n.LESS,[$f]:n.LEQUAL,[TM]:n.EQUAL,[Zf]:n.GEQUAL,[wM]:n.GREATER,[bM]:n.NOTEQUAL};function Ue(C,y){if(y.type===zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ot||y.magFilter===Fl||y.magFilter===ka||y.magFilter===zi||y.minFilter===Ot||y.minFilter===Fl||y.minFilter===ka||y.minFilter===zi)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ae[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ge[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ft||y.minFilter!==ka&&y.minFilter!==zi||y.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function De(C,y){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",b));const X=y.source;let Z=p.get(X);Z===void 0&&(Z={},p.set(X,Z));const se=K(y);if(se!==C.__cacheKey){Z[se]===void 0&&(Z[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[se].usedTimes++;const oe=Z[C.__cacheKey];oe!==void 0&&(Z[C.__cacheKey].usedTimes--,oe.usedTimes===0&&P(y)),C.__cacheKey=se,C.__webglTexture=Z[se].texture}return O}function $(C,y,O){return Math.floor(Math.floor(C/O)/y)}function ne(C,y,O,X){const se=C.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,O,X,y.data);else{se.sort((Ce,he)=>Ce.start-he.start);let oe=0;for(let Ce=1;Ce<se.length;Ce++){const he=se[oe],ce=se[Ce],Pe=he.start+he.count,Le=$(ce.start,y.width,4),ze=$(he.start,y.width,4);ce.start<=Pe+1&&Le===ze&&$(ce.start+ce.count-1,y.width,4)===Le?he.count=Math.max(he.count,ce.start+ce.count-he.start):(++oe,se[oe]=ce)}se.length=oe+1;const J=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ce=0,he=se.length;Ce<he;Ce++){const ce=se[Ce],Pe=Math.floor(ce.start/4),Le=Math.ceil(ce.count/4),ze=Pe%y.width,L=Math.floor(Pe/y.width),ue=Le,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,ze,L,ue,ee,O,X,y.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Me(C,y,O){let X=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=n.TEXTURE_3D);const Z=De(C,y),se=y.source;t.bindTexture(X,C.__webglTexture,n.TEXTURE0+O);const oe=i.get(se);if(se.version!==oe.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ee=Ye.getPrimaries(Ye.workingColorSpace),de=y.colorSpace===pr?null:Ye.getPrimaries(y.colorSpace),_e=y.colorSpace===pr||ee===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let te=g(y.image,!1,r.maxTextureSize);te=Zt(y,te);const le=s.convert(y.format,y.colorSpace),Ce=s.convert(y.type);let he=x(y.internalFormat,le,Ce,y.normalized,y.colorSpace,y.isVideoTexture);Ue(X,y);let ce;const Pe=y.mipmaps,Le=y.isVideoTexture!==!0,ze=oe.__version===void 0||Z===!0,L=se.dataReady,ue=w(y,te);if(y.isDepthTexture)he=T(y.format===Wr,y.type),ze&&(Le?t.texStorage2D(n.TEXTURE_2D,1,he,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,he,te.width,te.height,0,le,Ce,null));else if(y.isDataTexture)if(Pe.length>0){Le&&ze&&t.texStorage2D(n.TEXTURE_2D,ue,he,Pe[0].width,Pe[0].height);for(let ee=0,de=Pe.length;ee<de;ee++)ce=Pe[ee],Le?L&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,Ce,ce.data):t.texImage2D(n.TEXTURE_2D,ee,he,ce.width,ce.height,0,le,Ce,ce.data);y.generateMipmaps=!1}else Le?(ze&&t.texStorage2D(n.TEXTURE_2D,ue,he,te.width,te.height),L&&ne(y,te,le,Ce)):t.texImage2D(n.TEXTURE_2D,0,he,te.width,te.height,0,le,Ce,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Le&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,he,Pe[0].width,Pe[0].height,te.depth);for(let ee=0,de=Pe.length;ee<de;ee++)if(ce=Pe[ee],y.format!==Hn)if(le!==null)if(Le){if(L)if(y.layerUpdates.size>0){const _e=Ag(ce.width,ce.height,y.format,y.type);for(const ie of y.layerUpdates){const Ne=ce.data.subarray(ie*_e/ce.data.BYTES_PER_ELEMENT,(ie+1)*_e/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,ie,ce.width,ce.height,1,le,Ne)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,le,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,he,ce.width,ce.height,te.depth,0,ce.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,le,Ce,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,he,ce.width,ce.height,te.depth,0,le,Ce,ce.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Le&&ze&&t.texStorage2D(n.TEXTURE_2D,ue,he,Pe[0].width,Pe[0].height);for(let ee=0,de=Pe.length;ee<de;ee++)ce=Pe[ee],y.format!==Hn?le!==null?Le?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,he,ce.width,ce.height,0,ce.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?L&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,Ce,ce.data):t.texImage2D(n.TEXTURE_2D,ee,he,ce.width,ce.height,0,le,Ce,ce.data)}else if(y.isDataArrayTexture)if(Le){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,he,te.width,te.height,te.depth),L)if(y.layerUpdates.size>0){const ee=Ag(te.width,te.height,y.format,y.type);for(const de of y.layerUpdates){const _e=te.data.subarray(de*ee/te.data.BYTES_PER_ELEMENT,(de+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,te.width,te.height,1,le,Ce,_e)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Ce,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,te.width,te.height,te.depth,0,le,Ce,te.data);else if(y.isData3DTexture)Le?(ze&&t.texStorage3D(n.TEXTURE_3D,ue,he,te.width,te.height,te.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Ce,te.data)):t.texImage3D(n.TEXTURE_3D,0,he,te.width,te.height,te.depth,0,le,Ce,te.data);else if(y.isFramebufferTexture){if(ze)if(Le)t.texStorage2D(n.TEXTURE_2D,ue,he,te.width,te.height);else{let ee=te.width,de=te.height;for(let _e=0;_e<ue;_e++)t.texImage2D(n.TEXTURE_2D,_e,he,ee,de,0,le,Ce,null),ee>>=1,de>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),h.add(y),ee.onpaint=de=>{const _e=de.changedElements;for(const ie of h)_e.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const _e=n.RGBA,ie=n.RGBA,Ne=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,_e,ie,Ne,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Le&&ze){const ee=rt(Pe[0]);t.texStorage2D(n.TEXTURE_2D,ue,he,ee.width,ee.height)}for(let ee=0,de=Pe.length;ee<de;ee++)ce=Pe[ee],Le?L&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,le,Ce,ce):t.texImage2D(n.TEXTURE_2D,ee,he,le,Ce,ce);y.generateMipmaps=!1}else if(Le){if(ze){const ee=rt(te);t.texStorage2D(n.TEXTURE_2D,ue,he,ee.width,ee.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Ce,te)}else t.texImage2D(n.TEXTURE_2D,0,he,le,Ce,te);f(y)&&_(X),oe.__version=se.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Fe(C,y,O){if(y.image.length!==6)return;const X=De(C,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+O);const se=i.get(Z);if(Z.version!==se.__version||X===!0){t.activeTexture(n.TEXTURE0+O);const oe=Ye.getPrimaries(Ye.workingColorSpace),J=y.colorSpace===pr?null:Ye.getPrimaries(y.colorSpace),te=y.colorSpace===pr||oe===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const le=y.isCompressedTexture||y.image[0].isCompressedTexture,Ce=y.image[0]&&y.image[0].isDataTexture,he=[];for(let ie=0;ie<6;ie++)!le&&!Ce?he[ie]=g(y.image[ie],!0,r.maxCubemapSize):he[ie]=Ce?y.image[ie].image:y.image[ie],he[ie]=Zt(y,he[ie]);const ce=he[0],Pe=s.convert(y.format,y.colorSpace),Le=s.convert(y.type),ze=x(y.internalFormat,Pe,Le,y.normalized,y.colorSpace),L=y.isVideoTexture!==!0,ue=se.__version===void 0||X===!0,ee=Z.dataReady;let de=w(y,ce);Ue(n.TEXTURE_CUBE_MAP,y);let _e;if(le){L&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ze,ce.width,ce.height);for(let ie=0;ie<6;ie++){_e=he[ie].mipmaps;for(let Ne=0;Ne<_e.length;Ne++){const we=_e[Ne];y.format!==Hn?Pe!==null?L?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,0,0,we.width,we.height,Pe,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,ze,we.width,we.height,0,we.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,0,0,we.width,we.height,Pe,Le,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,ze,we.width,we.height,0,Pe,Le,we.data)}}}else{if(_e=y.mipmaps,L&&ue){_e.length>0&&de++;const ie=rt(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ce){L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,he[ie].width,he[ie].height,Pe,Le,he[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,he[ie].width,he[ie].height,0,Pe,Le,he[ie].data);for(let Ne=0;Ne<_e.length;Ne++){const ft=_e[Ne].image[ie].image;L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,0,0,ft.width,ft.height,Pe,Le,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,ze,ft.width,ft.height,0,Pe,Le,ft.data)}}else{L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,Le,he[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,Pe,Le,he[ie]);for(let Ne=0;Ne<_e.length;Ne++){const we=_e[Ne];L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,0,0,Pe,Le,we.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,ze,Pe,Le,we.image[ie])}}}f(y)&&_(n.TEXTURE_CUBE_MAP),se.__version=Z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function xe(C,y,O,X,Z,se){const oe=s.convert(O.format,O.colorSpace),J=s.convert(O.type),te=x(O.internalFormat,oe,J,O.normalized,O.colorSpace),le=i.get(y),Ce=i.get(O);if(Ce.__renderTarget=y,!le.__hasExternalTextures){const he=Math.max(1,y.width>>se),ce=Math.max(1,y.height>>se);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,se,te,he,ce,y.depth,0,oe,J,null):t.texImage2D(Z,se,te,he,ce,0,oe,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Pt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Z,Ce.__webglTexture,0,St(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Z,Ce.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(C,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const X=y.depthTexture,Z=X&&X.isDepthTexture?X.type:null,se=T(y.stencilBuffer,Z),oe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(y),se,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(y),se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,se,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,C)}else{const X=y.textures;for(let Z=0;Z<X.length;Z++){const se=X[Z],oe=s.convert(se.format,se.colorSpace),J=s.convert(se.type),te=x(se.internalFormat,oe,J,se.normalized,se.colorSpace);Pt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(y),te,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(y),te,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,te,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(C,y,O){const X=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(y.depthTexture);if(Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,y.depthTexture.addEventListener("dispose",b)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,y.depthTexture);const le=s.convert(y.depthTexture.format),Ce=s.convert(y.depthTexture.type);let he;y.depthTexture.format===qi?he=n.DEPTH_COMPONENT24:y.depthTexture.format===Wr&&(he=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,he,y.width,y.height,0,le,Ce,null)}}else z(y.depthTexture,0);const se=Z.__webglTexture,oe=St(y),J=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,te=y.depthTexture.format===Wr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===qi)Pt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,te,J,se,0);else if(y.depthTexture.format===Wr)Pt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,te,J,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(C){const y=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=X}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let X=0;X<6;X++)Dt(y.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?Dt(y.__webglFramebuffer[0],C,0):Dt(y.__webglFramebuffer,C,0)}else if(O){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=n.createRenderbuffer(),We(y.__webglDepthbuffer[X],C,!1);else{const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,se)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),We(y.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(C,y,O){const X=i.get(C);y!==void 0&&xe(X.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&je(C)}function ht(C){const y=C.texture,O=i.get(C),X=i.get(y);C.addEventListener("dispose",v);const Z=C.textures,se=C.isWebGLCubeRenderTarget===!0,oe=Z.length>1;if(oe||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=y.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let te=0;te<y.mipmaps.length;te++)O.__webglFramebuffer[J][te]=n.createFramebuffer()}else O.__webglFramebuffer[J]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)O.__webglFramebuffer[J]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(oe)for(let J=0,te=Z.length;J<te;J++){const le=i.get(Z[J]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Pt(C)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const te=Z[J];O.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[J]);const le=s.convert(te.format,te.colorSpace),Ce=s.convert(te.type),he=x(te.internalFormat,le,Ce,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),ce=St(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,he,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,O.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),We(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)xe(O.__webglFramebuffer[J][te],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else xe(O.__webglFramebuffer[J],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(y)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let J=0,te=Z.length;J<te;J++){const le=Z[J],Ce=i.get(le);let he=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Ce.__webglTexture),Ue(he,le),xe(O.__webglFramebuffer,C,le,n.COLOR_ATTACHMENT0+J,he,0),f(le)&&_(he)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),Ue(J,y),y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)xe(O.__webglFramebuffer[te],C,y,n.COLOR_ATTACHMENT0,J,te);else xe(O.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,J,0);f(y)&&_(J),t.unbindTexture()}C.depthBuffer&&je(C)}function Je(C){const y=C.textures;for(let O=0,X=y.length;O<X;O++){const Z=y[O];if(f(Z)){const se=S(C),oe=i.get(Z).__webglTexture;t.bindTexture(se,oe),_(se),t.unbindTexture()}}}const xt=[],Ht=[];function pn(C){if(C.samples>0){if(Pt(C)===!1){const y=C.textures,O=C.width,X=C.height;let Z=n.COLOR_BUFFER_BIT;const se=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(C),J=y.length>1;if(J)for(let le=0;le<y.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<y.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Ce=i.get(y[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ce,0)}n.blitFramebuffer(0,0,O,X,0,0,O,X,Z,n.NEAREST),l===!0&&(xt.length=0,Ht.length=0,xt.push(n.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(xt.push(se),Ht.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let le=0;le<y.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Ce=i.get(y[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function St(C){return Math.min(r.maxSamples,C.samples)}function Pt(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(C){const y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function Zt(C,y){const O=C.colorSpace,X=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Cn&&O!==pr&&(Ye.getTransfer(O)===st?(X!==Hn||Z!==wn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",O)),y}function rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=j,this.getTextureUnits=k,this.setTextureUnits=W,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=Y,this.rebindTextures=tt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iR(n,e){function t(i,r=pr){let s;const a=Ye.getTransfer(r);if(i===wn)return n.UNSIGNED_BYTE;if(i===Wf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Av)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wv)return n.BYTE;if(i===bv)return n.SHORT;if(i===go)return n.UNSIGNED_SHORT;if(i===Gf)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===Cv)return n.ALPHA;if(i===Pv)return n.RGB;if(i===Hn)return n.RGBA;if(i===qi)return n.DEPTH_COMPONENT;if(i===Wr)return n.DEPTH_STENCIL;if(i===jf)return n.RED;if(i===Kf)return n.RED_INTEGER;if(i===ts)return n.RG;if(i===Yf)return n.RG_INTEGER;if(i===qf)return n.RGBA_INTEGER;if(i===Ol||i===Bl||i===zl||i===Hl)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oh||i===lh||i===ch||i===uh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===oh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ch)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dh||i===hh||i===fh||i===ph||i===mh||i===mc||i===gh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===dh||i===hh)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ph)return s.COMPRESSED_R11_EAC;if(i===mh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===mc)return s.COMPRESSED_RG11_EAC;if(i===gh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_h||i===vh||i===xh||i===yh||i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===bh||i===Ah||i===Rh||i===Ch||i===Ph)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_h)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Th)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ah)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ch)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ph)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nh||i===Lh||i===Ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nh)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dh||i===Uh||i===gc||i===kh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Dh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const rR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Gv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bi({vertexShader:rR,fragmentShader:sR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Vc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oR extends rs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,m=null;const M=typeof XRWebGLBinding<"u",g=new aR,f={},_=t.getContextAttributes();let S=null,x=null;const T=[],w=[],b=new $e;let v=null,R=null;const P=new un;P.viewport=new ut;const I=new un;I.viewport=new ut;const H=[P,I],j=new sT;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=T[$];return ne===void 0&&(ne=new Nu,T[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=T[$];return ne===void 0&&(ne=new Nu,T[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=T[$];return ne===void 0&&(ne=new Nu,T[$]=ne),ne.getHandSpace()};function Q($){const ne=w.indexOf($.inputSource);if(ne===-1)return;const Me=T[ne];Me!==void 0&&(Me.update($.inputSource,$.frame,c||a),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",z);for(let $=0;$<T.length;$++){const ne=w[$];ne!==null&&(w[$]=null,T[$].disconnect(ne))}k=null,W=null,g.reset();for(const $ in f)delete f[$];if(e.setRenderTarget(S),p=null,d=null,h=null,r=null,x=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(b.width,b.height,!1),R!==null){const $=R.camera;$.fov=R.fov,$.zoom=R.zoom,$.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",K),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(b),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Fe=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=_.stencil?Wr:qi,Fe=_.stencil?_o:Ti);const We={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(We),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ri(d.textureWidth,d.textureHeight,{format:Hn,type:wn,depthTexture:new Mo(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ri(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z($){for(let ne=0;ne<$.removed.length;ne++){const Me=$.removed[ne],Fe=w.indexOf(Me);Fe>=0&&(w[Fe]=null,T[Fe].disconnect(Me))}for(let ne=0;ne<$.added.length;ne++){const Me=$.added[ne];let Fe=w.indexOf(Me);if(Fe===-1){for(let We=0;We<T.length;We++)if(We>=w.length){w.push(Me),Fe=We;break}else if(w[We]===null){w[We]=Me,Fe=We;break}if(Fe===-1)break}const xe=T[Fe];xe&&xe.connect(Me)}}const F=new B,U=new B;function Y($,ne,Me){F.setFromMatrixPosition(ne.matrixWorld),U.setFromMatrixPosition(Me.matrixWorld);const Fe=F.distanceTo(U),xe=ne.projectionMatrix.elements,We=Me.projectionMatrix.elements,Dt=xe[14]/(xe[10]-1),je=xe[14]/(xe[10]+1),tt=(xe[9]+1)/xe[5],ht=(xe[9]-1)/xe[5],Je=(xe[8]-1)/xe[0],xt=(We[8]+1)/We[0],Ht=Dt*Je,pn=Dt*xt,St=Fe/(-Je+xt),Pt=St*-Je;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Pt),$.translateZ(St),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xe[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const D=Dt+St,Zt=je+St,rt=Ht-Pt,C=pn+(Fe-Pt),y=tt*je/Zt*D,O=ht*je/Zt*D;$.projectionMatrix.makePerspective(rt,C,y,O,D,Zt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ne=$.near,Me=$.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),j.near=I.near=P.near=ne,j.far=I.far=P.far=Me,(k!==j.near||W!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),k=j.near,W=j.far),j.layers.mask=$.layers.mask|6,P.layers.mask=j.layers.mask&-5,I.layers.mask=j.layers.mask&-3;const Fe=$.parent,xe=j.cameras;ae(j,Fe);for(let We=0;We<xe.length;We++)ae(xe[We],Fe);xe.length===2?Y(j,P,I):j.projectionMatrix.copy(P.projectionMatrix),R===null&&$.isPerspectiveCamera&&(R={camera:$,fov:$.fov,zoom:$.zoom}),ge($,j,Fe)};function ge($,ne,Me){Me===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ta*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function($){return f[$]};let Be=null;function Ue($,ne){if(u=ne.getViewerPose(c||a),m=ne,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Fe=!1;Me.length!==j.cameras.length&&(j.cameras.length=0,Fe=!0);for(let je=0;je<Me.length;je++){const tt=Me[je];let ht=null;if(p!==null)ht=p.getViewport(tt);else{const xt=h.getViewSubImage(d,tt);ht=xt.viewport,je===0&&(e.setRenderTargetTextures(x,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(x))}let Je=H[je];Je===void 0&&(Je=new un,Je.layers.enable(je),Je.viewport=new ut,H[je]=Je),Je.matrix.fromArray(tt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(tt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ht.x,ht.y,ht.width,ht.height),je===0&&(j.matrix.copy(Je.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Fe===!0&&j.cameras.push(Je)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const je=h.getDepthInformation(Me[0]);je&&je.isValid&&je.texture&&g.init(je,r.renderState)}if(xe&&xe.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let je=0;je<Me.length;je++){const tt=Me[je].camera;if(tt){let ht=f[tt];ht||(ht=new Gv,f[tt]=ht);const Je=h.getCameraImage(tt);ht.sourceTexture=Je}}}}for(let Me=0;Me<T.length;Me++){const Fe=w[Me],xe=T[Me];Fe!==null&&xe!==void 0&&xe.update(Fe,ne,c||a)}Be&&Be($,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),m=null}const De=new qv;De.setAnimationLoop(Ue),this.setAnimationLoop=function($){Be=$},this.dispose=function(){}}}const lR=new Ge,nx=new Oe;nx.set(-1,0,0,0,1,0,0,0,1);function cR(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Wv(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,_,S,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,_,S):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===yn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===yn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const _=e.get(f),S=_.envMap,x=_.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(lR.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(nx),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,S){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=S*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uR(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){const w=T.program;i.uniformBlockBinding(x,w)}function c(x,T){let w=r[x.id];w===void 0&&(g(x),w=u(x),r[x.id]=w,x.addEventListener("dispose",_));const b=T.program;i.updateUBOMapping(x,b);const v=e.render.frame;s[x.id]!==v&&(d(x),s[x.id]=v)}function u(x){const T=h();x.__bindingPointIndex=T;const w=n.createBuffer(),b=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,b,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,w),w}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const T=r[x.id],w=x.uniforms,b=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let v=0,R=w.length;v<R;v++){const P=w[v];if(Array.isArray(P))for(let I=0,H=P.length;I<H;I++)p(P[I],v,I,b);else p(P,v,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,T,w,b){if(M(x,T,w,b)===!0){const v=x.__offset,R=x.value;if(Array.isArray(R)){let P=0;for(let I=0;I<R.length;I++){const H=R[I],j=f(H);m(H,x.__data,P),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function m(x,T,w){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,w)}function M(x,T,w,b){const v=x.value,R=T+"_"+w;if(b[R]===void 0)return typeof v=="number"||typeof v=="boolean"?b[R]=v:ArrayBuffer.isView(v)?b[R]=v.slice():b[R]=v.clone(),!0;{const P=b[R];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return b[R]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function g(x){const T=x.uniforms;let w=0;const b=16;for(let R=0,P=T.length;R<P;R++){const I=Array.isArray(T[R])?T[R]:[T[R]];for(let H=0,j=I.length;H<j;H++){const k=I[H],W=Array.isArray(k.value)?k.value:[k.value];for(let Q=0,K=W.length;Q<K;Q++){const z=W[Q],F=f(z),U=w%b,Y=U%F.boundary,ae=U+Y;w+=Y,ae!==0&&b-ae<F.storage&&(w+=b-ae),k.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=F.storage}}}const v=w%b;return v>0&&(w+=b-v),x.__size=w,x.__cache={},this}function f(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",x),T}function _(x){const T=x.target;T.removeEventListener("dispose",_);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function S(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:S}}const dR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function hR(){return hi===null&&(hi=new tp(dR,16,16,ts,wi),hi.name="DFG_LUT",hi.minFilter=Ot,hi.magFilter=Ot,hi.wrapS=vi,hi.wrapT=vi,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class fR{constructor(e={}){const{canvas:t=PM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=wn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const M=p,g=new Set([qf,Yf,Kf]),f=new Set([wn,Ti,go,_o,Wf,Xf]),_=new Uint32Array(4),S=new Int32Array(4),x=new B;let T=null,w=null;const b=[],v=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,H=null,j=null,k=null,W=null;this._outputColorSpace=Wt;let Q=0,K=0,z=null,F=-1,U=null;const Y=new ut,ae=new ut;let ge=null;const Be=new ke(0);let Ue=0,De=t.width,$=t.height,ne=1,Me=null,Fe=null;const xe=new ut(0,0,De,$),We=new ut(0,0,De,$);let Dt=!1;const je=new ip;let tt=!1,ht=!1;const Je=new Ge,xt=new B,Ht=new ut,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Pt(){return z===null?ne:1}let D=i;function Zt(E,N){return t.getContext(E,N)}let rt,C,y,O,X,Z,se,oe,J,te,le,Ce,he,ce,Pe,Le,ze,L,ue,ee,de,_e,ie;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hf}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Xn,!1),D===null){const N="webgl2";if(D=Zt(N,E),D===null)throw Zt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(E){throw t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),Ie("WebGLRenderer: "+E.message),E}function Ne(){rt=new hA(D),rt.init(),de=new iR(D,rt),C=new nA(D,rt,e,de),y=new tR(D,rt),C.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),j=D.createFramebuffer(),k=D.createFramebuffer(),W=D.createFramebuffer(),O=new mA(D),X=new H1,Z=new nR(D,rt,y,X,C,de,O),se=new dA(P),oe=new _T(D),_e=new eA(D,oe),J=new fA(D,oe,O,_e),te=new _A(D,J,oe,_e,O),L=new gA(D,C,Z),Pe=new iA(X),le=new z1(P,se,rt,C,_e,Pe),Ce=new cR(P,X),he=new G1,ce=new q1(rt),ze=new Qb(P,se,y,te,m,l),Le=new eR(P,te,C),ie=new uR(D,O,C,y),ue=new tA(D,rt,O),ee=new pA(D,rt,O),O.programs=le.programs,P.capabilities=C,P.extensions=rt,P.properties=X,P.renderLists=he,P.shadowMap=Le,P.state=y,P.info=O}M!==wn&&(R=new xA(M,t.width,t.height,o,r,s));const we=new oR(P,D);this.xr=we,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(De,$,!1))},this.getSize=function(E){return E.set(De,$)},this.setSize=function(E,N,q=!0){if(we.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}De=E,$=N,t.width=Math.floor(E*ne),t.height=Math.floor(N*ne),q===!0&&(t.style.width=E+"px",t.style.height=N+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(De*ne,$*ne).floor()},this.setDrawingBufferSize=function(E,N,q){De=E,$=N,ne=q,t.width=Math.floor(E*q),t.height=Math.floor(N*q),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(M===wn){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Y)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,N,q,V){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,N,q,V),y.viewport(Y.copy(xe).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(We)},this.setScissor=function(E,N,q,V){E.isVector4?We.set(E.x,E.y,E.z,E.w):We.set(E,N,q,V),y.scissor(ae.copy(We).multiplyScalar(ne).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(E){y.setScissorTest(Dt=E)},this.setOpaqueSort=function(E){Me=E},this.setTransparentSort=function(E){Fe=E},this.getClearColor=function(E){return E.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,q=!0){let V=0;if(E){let G=!1;if(z!==null){const me=z.texture.format;G=g.has(me)}if(G){const me=z.texture.type,ye=f.has(me),pe=ze.getClearColor(),Ee=ze.getClearAlpha(),be=pe.r,He=pe.g,Ke=pe.b;ye?(_[0]=be,_[1]=He,_[2]=Ke,_[3]=Ee,D.clearBufferuiv(D.COLOR,0,_)):(S[0]=be,S[1]=He,S[2]=Ke,S[3]=Ee,D.clearBufferiv(D.COLOR,0,S))}else V|=D.COLOR_BUFFER_BIT}N&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),H=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),ze.dispose(),he.dispose(),ce.dispose(),X.dispose(),se.dispose(),te.dispose(),_e.dispose(),ie.dispose(),le.dispose(),we.dispose(),we.removeEventListener("sessionstart",mp),we.removeEventListener("sessionend",gp),Lr.stop()};function ft(E){E.preventDefault(),vc("WebGLRenderer: Context Lost."),I=!0}function nt(){vc("WebGLRenderer: Context Restored."),I=!1;const E=O.autoReset,N=Le.enabled,q=Le.autoUpdate,V=Le.needsUpdate,G=Le.type;Ne(),O.autoReset=E,Le.enabled=N,Le.autoUpdate=q,Le.needsUpdate=V,Le.type=G}function Xn(E){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function li(E){const N=E.target;N.removeEventListener("dispose",li),ax(N)}function ax(E){ox(E),X.remove(E)}function ox(E){const N=X.get(E).programs;N!==void 0&&(N.forEach(function(q){le.releaseProgram(q)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,q,V,G,me){N===null&&(N=pn);const ye=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=ux(E,N,q,V,G);y.setMaterial(V,ye);let Ee=q.index,be=1;if(V.wireframe===!0){if(Ee=J.getWireframeAttribute(q),Ee===void 0)return;be=2}const He=q.drawRange,Ke=q.attributes.position;let Te=He.start*be,it=(He.start+He.count)*be;me!==null&&(Te=Math.max(Te,me.start*be),it=Math.min(it,(me.start+me.count)*be)),Ee!==null?(Te=Math.max(Te,0),it=Math.min(it,Ee.count)):Ke!=null&&(Te=Math.max(Te,0),it=Math.min(it,Ke.count));const Nt=it-Te;if(Nt<0||Nt===1/0)return;_e.setup(G,V,pe,q,Ee);let gt,dt=ue;if(Ee!==null&&(gt=oe.get(Ee),dt=ee,dt.setIndex(gt)),G.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*Pt()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(G.isLine){let Jt=V.linewidth;Jt===void 0&&(Jt=1),y.setLineWidth(Jt*Pt()),G.isLineSegments?dt.setMode(D.LINES):G.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else G.isPoints?dt.setMode(D.POINTS):G.isSprite&&dt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Jt=G._multiDrawStarts,ve=G._multiDrawCounts,an=G._multiDrawCount,Qe=Ee?oe.get(Ee).bytesPerElement:1,Dn=X.get(V).currentProgram.getUniforms();for(let ci=0;ci<an;ci++)Dn.setValue(D,"_gl_DrawID",ci),dt.render(Jt[ci]/Qe,ve[ci])}else if(G.isInstancedMesh)dt.renderInstances(Te,Nt,G.count);else if(q.isInstancedBufferGeometry){const Jt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ve=Math.min(q.instanceCount,Jt);dt.renderInstances(Te,Nt,ve)}else dt.render(Te,Nt)};function pp(E,N,q,V){H!==null&&E.isNodeMaterial&&H.setObject(V,E),tt===!0&&Pe.setState(E,q,!1),E.transparent===!0&&E.side===_i&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,Lo(E,N,V),E.side=Ar,E.needsUpdate=!0,Lo(E,N,V),E.side=_i):Lo(E,N,V)}this.compile=function(E,N,q=null){q===null&&(q=E),H!==null&&H.renderStart(E,N,q),w=ce.get(q),w.init(N),v.push(w),q.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),E!==q&&E.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),ht=this.localClippingEnabled,tt=Pe.init(this.clippingPlanes,ht),tt===!0&&Pe.setGlobalState(this.clippingPlanes,N),H!==null&&Le.render(w.state.shadowsArray,q,N);const V=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const me=G.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){const pe=me[ye];pp(pe,q,N,G),V.add(pe)}else pp(me,q,N,G),V.add(me)}),w=v.pop(),H!==null&&H.renderEnd(),V},this.compileAsync=function(E,N,q=null){const V=this.compile(E,N,q);return new Promise(G=>{function me(){if(V.forEach(function(ye){const Ee=X.get(ye).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(ye)}),V.size===0){G(E);return}setTimeout(me,10)}rt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Kc=null;function lx(E){Kc&&Kc(E)}function mp(){Lr.stop()}function gp(){Lr.start()}const Lr=new qv;Lr.setAnimationLoop(lx),typeof self<"u"&&Lr.setContext(self),this.setAnimationLoop=function(E){Kc=E,we.setAnimationLoop(E),E===null?Lr.stop():Lr.start()},we.addEventListener("sessionstart",mp),we.addEventListener("sessionend",gp),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;H!==null&&H.renderStart(E,N);const q=we.enabled===!0&&we.isPresenting===!0,V=R!==null&&(z===null||q)&&R.begin(P,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(N),N=we.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,N,z),w=ce.get(E,v.length),w.init(N),w.state.textureUnits=Z.getTextureUnits(),v.push(w),Je.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),je.setFromProjectionMatrix(Je,xi,N.reversedDepth),ht=this.localClippingEnabled,tt=Pe.init(this.clippingPlanes,ht),T=he.get(E,b.length),T.init(),b.push(T),we.enabled===!0&&we.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Yc(ye,N,-1/0,P.sortObjects)}Yc(E,N,0,P.sortObjects),T.finish(),H!==null&&H.updateLights(w.state.lightsArray),P.sortObjects===!0&&T.sort(Me,Fe),St=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,St&&ze.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Pe.beginShadows();const G=w.state.shadowsArray;if(Le.render(G,E,N),tt===!0&&Pe.endShadows(),(V&&R.hasRenderPass())===!1){const ye=T.opaque,pe=T.transmissive;if(w.setupLights(),N.isArrayCamera){const Ee=N.cameras;if(pe.length>0)for(let be=0,He=Ee.length;be<He;be++){const Ke=Ee[be];vp(ye,pe,E,Ke)}St&&ze.render(E);for(let be=0,He=Ee.length;be<He;be++){const Ke=Ee[be];_p(T,E,Ke,Ke.viewport)}}else pe.length>0&&vp(ye,pe,E,N),St&&ze.render(E),_p(T,E,N)}z!==null&&K===0&&(Z.updateMultisampleRenderTarget(z),Z.updateRenderTargetMipmap(z)),V&&R.end(P),E.isScene===!0&&E.onAfterRender(P,E,N),_e.resetDefaultState(),F=-1,U=null,v.pop(),v.length>0?(w=v[v.length-1],Z.setTextureUnits(w.state.textureUnits),tt===!0&&Pe.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?T=b[b.length-1]:T=null,H!==null&&H.renderEnd()};function Yc(E,N,q,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(je)){V&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Je);const ye=te.update(E),pe=E.material;pe.visible&&T.push(E,ye,pe,q,Ht.z,null,N)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(je))){const ye=te.update(E),pe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ht.copy(ye.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(Je)),Array.isArray(pe)){const Ee=ye.groups;for(let be=0,He=Ee.length;be<He;be++){const Ke=Ee[be],Te=pe[Ke.materialIndex];Te&&Te.visible&&T.push(E,ye,Te,q,Ht.z,Ke,N)}}else pe.visible&&T.push(E,ye,pe,q,Ht.z,null,N)}}const me=E.children;for(let ye=0,pe=me.length;ye<pe;ye++)Yc(me[ye],N,q,V)}function _p(E,N,q,V){const{opaque:G,transmissive:me,transparent:ye}=E;w.setupLightsView(q),tt===!0&&Pe.setGlobalState(P.clippingPlanes,q),V&&y.viewport(Y.copy(V)),G.length>0&&No(G,N,q),me.length>0&&No(me,N,q),ye.length>0&&No(ye,N,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function vp(E,N,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const Te=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new ri(1,1,{generateMipmaps:!0,type:Te?wi:wn,minFilter:zi,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const me=w.state.transmissionRenderTarget[V.id],ye=V.viewport||Y;me.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const pe=P.getRenderTarget(),Ee=P.getActiveCubeFace(),be=P.getActiveMipmapLevel();P.setRenderTarget(me),P.getClearColor(Be),Ue=P.getClearAlpha(),Ue<1&&P.setClearColor(16777215,.5),P.clear(),St&&ze.render(q);const He=P.toneMapping;P.toneMapping=Mi;const Ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),tt===!0&&Pe.setGlobalState(P.clippingPlanes,V),No(E,q,V),Z.updateMultisampleRenderTarget(me),Z.updateRenderTargetMipmap(me),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let it=0,Nt=N.length;it<Nt;it++){const gt=N[it],{object:dt,geometry:Jt,material:ve,group:an}=gt;if(ve.side===_i&&dt.layers.test(V.layers)){const Qe=ve.side;ve.side=yn,ve.needsUpdate=!0,xp(dt,q,V,Jt,ve,an),ve.side=Qe,ve.needsUpdate=!0,Te=!0}}Te===!0&&(Z.updateMultisampleRenderTarget(me),Z.updateRenderTargetMipmap(me))}P.setRenderTarget(pe,Ee,be),P.setClearColor(Be,Ue),Ke!==void 0&&(V.viewport=Ke),P.toneMapping=He}function No(E,N,q){const V=N.isScene===!0?N.overrideMaterial:null;for(let G=0,me=E.length;G<me;G++){const ye=E[G],{object:pe,geometry:Ee,group:be}=ye;let He=ye.material;He.allowOverride===!0&&V!==null&&(He=V),pe.layers.test(q.layers)&&xp(pe,N,q,Ee,He,be)}}function xp(E,N,q,V,G,me){H!==null&&G.isNodeMaterial&&H.setObject(E,G),E.onBeforeRender(P,N,q,V,G,me),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(P,N,q,V,E,me),G.transparent===!0&&G.side===_i&&G.forceSinglePass===!1?(G.side=yn,G.needsUpdate=!0,P.renderBufferDirect(q,N,V,G,E,me),G.side=Ar,G.needsUpdate=!0,P.renderBufferDirect(q,N,V,G,E,me),G.side=_i):P.renderBufferDirect(q,N,V,G,E,me),E.onAfterRender(P,N,q,V,G,me)}function Lo(E,N,q){N.isScene!==!0&&(N=pn);const V=X.get(E),G=w.state.lights,me=w.state.shadowsArray,ye=G.state.version,pe=le.getParameters(E,G.state,me,N,q,w.state.lightProbeGridArray),Ee=le.getProgramCacheKey(pe);let be=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const He=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=se.get(E.envMap||V.environment,He),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,be===void 0&&(E.addEventListener("dispose",li),be=new Map,V.programs=be);let Ke=be.get(Ee);if(Ke!==void 0){if(V.currentProgram===Ke&&V.lightsStateVersion===ye)return Sp(E,pe),Ke}else pe.uniforms=le.getUniforms(E),H!==null&&E.isNodeMaterial&&H.build(E,q,pe),E.onBeforeCompile(pe,P),Ke=le.acquireProgram(pe,Ee),be.set(Ee,Ke),V.uniforms=pe.uniforms;const Te=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=Pe.uniform),Sp(E,pe),V.needsLights=hx(E),V.lightsStateVersion=ye,V.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.sunLights.value=G.state.sun,Te.sunLightShadows.value=G.state.sunShadow,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.sunShadowMatrix.value=G.state.sunShadowMatrix,Te.sunShadowCascade.value=G.state.sunShadowCascade,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=Ke,V.uniformsList=null,Ke}function yp(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Gl.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Sp(E,N){const q=X.get(E);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function cx(E,N){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(N.matrixWorld);for(let q=0,V=E.length;q<V;q++){const G=E[q];if(G.texture!==null&&G.boundingBox.containsPoint(x))return G}return null}function ux(E,N,q,V,G){N.isScene!==!0&&(N=pn),Z.resetTextureUnits();const me=N.fog,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,pe=z===null?P.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ye.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,be=se.get(V.envMap||ye,Ee),He=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ke=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!q.morphAttributes.position,it=!!q.morphAttributes.normal,Nt=!!q.morphAttributes.color;let gt=Mi;V.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(gt=P.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Jt=dt!==void 0?dt.length:0,ve=X.get(V),an=w.state.lights;if(tt===!0&&(ht===!0||E!==U)){const pt=E===U&&V.id===F;Pe.setState(V,E,pt)}let Qe=!1;V.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==an.state.version||ve.outputColorSpace!==pe||G.isBatchedMesh&&ve.batching===!1||!G.isBatchedMesh&&ve.batching===!0||G.isBatchedMesh&&ve.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ve.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ve.instancing===!1||!G.isInstancedMesh&&ve.instancing===!0||G.isSkinnedMesh&&ve.skinning===!1||!G.isSkinnedMesh&&ve.skinning===!0||G.isInstancedMesh&&ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ve.instancingMorph===!1&&G.morphTexture!==null||ve.envMap!==be||V.fog===!0&&ve.fog!==me||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Pe.numPlanes||ve.numIntersection!==Pe.numIntersection)||ve.vertexAlphas!==He||ve.vertexTangents!==Ke||ve.morphTargets!==Te||ve.morphNormals!==it||ve.morphColors!==Nt||ve.toneMapping!==gt||ve.morphTargetsCount!==Jt||!!ve.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ve.__version=V.version);let Dn=ve.currentProgram;Qe===!0&&(Dn=Lo(V,N,G),H&&V.isNodeMaterial&&H.onUpdateProgram(V,Dn,ve));let ci=!1,Ji=!1,ss=!1;const ct=Dn.getUniforms(),At=ve.uniforms;if(y.useProgram(Dn.program)&&(ci=!0,Ji=!0,ss=!0),V.id!==F&&(F=V.id,Ji=!0),ve.needsLights){const pt=cx(w.state.lightProbeGridArray,G);ve.lightProbeGrid!==pt&&(ve.lightProbeGrid=pt,Ji=!0)}if(ci||U!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ct.setValue(D,"projectionMatrix",E.projectionMatrix),ct.setValue(D,"viewMatrix",E.matrixWorldInverse);const er=ct.map.cameraPosition;er!==void 0&&er.setValue(D,xt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,Ji=!0,ss=!0)}if(ve.needsLights&&(an.state.sunShadowMap.length>0&&ct.setValue(D,"sunShadowMap",an.state.sunShadowMap,Z),an.state.directionalShadowMap.length>0&&ct.setValue(D,"directionalShadowMap",an.state.directionalShadowMap,Z),an.state.spotShadowMap.length>0&&ct.setValue(D,"spotShadowMap",an.state.spotShadowMap,Z),an.state.pointShadowMap.length>0&&ct.setValue(D,"pointShadowMap",an.state.pointShadowMap,Z)),G.isSkinnedMesh){ct.setOptional(D,G,"bindMatrix"),ct.setOptional(D,G,"bindMatrixInverse");const pt=G.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ct.setValue(D,"boneTexture",pt.boneTexture,Z))}G.isBatchedMesh&&(ct.setOptional(D,G,"batchingTexture"),ct.setValue(D,"batchingTexture",G._matricesTexture,Z),ct.setOptional(D,G,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",G._indirectTexture,Z),ct.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",G._colorsTexture,Z));const Qi=q.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&L.update(G,q,Dn),(Ji||ve.receiveShadow!==G.receiveShadow)&&(ve.receiveShadow=G.receiveShadow,ct.setValue(D,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(At.envMapIntensity.value=N.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=hR()),Ji){if(ct.setValue(D,"toneMappingExposure",P.toneMappingExposure),ve.needsLights&&dx(At,ss),me&&V.fog===!0&&Ce.refreshFogUniforms(At,me),Ce.refreshMaterialUniforms(At,V,ne,$,w.state.transmissionRenderTarget[E.id]),ve.needsLights&&ve.lightProbeGrid){const pt=ve.lightProbeGrid;At.probesSH.value=pt.texture,At.probesMin.value.copy(pt.boundingBox.min),At.probesMax.value.copy(pt.boundingBox.max),At.probesResolution.value.copy(pt.resolution)}Gl.upload(D,yp(ve),At,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gl.upload(D,yp(ve),At,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(D,"center",G.center),ct.setValue(D,"modelViewMatrix",G.modelViewMatrix),ct.setValue(D,"normalMatrix",G.normalMatrix),ct.setValue(D,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){const pt=V.uniformsGroups;for(let er=0,as=pt.length;er<as;er++){const Ep=pt[er];ie.update(Ep,Dn),ie.bind(Ep,Dn)}}return Dn}function dx(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function hx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,N,q){const V=X.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=N,X.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const q=X.get(E);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,q=0){z=E,Q=N,K=q;let V=null,G=!1,me=!1;if(E){const pe=X.get(E);if(pe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,pe.__webglFramebuffer),Y.copy(E.viewport),ae.copy(E.scissor),ge=E.scissorTest,y.viewport(Y),y.scissor(ae),y.setScissorTest(ge),F=-1;return}else if(pe.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(pe.__hasExternalTextures)Z.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(pe.__boundDepthTexture!==He){if(He!==null&&X.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(me=!0);const be=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[N])?V=be[N][q]:V=be[N],G=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?V=X.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?V=be[q]:V=be,Y.copy(E.viewport),ae.copy(E.scissor),ge=E.scissorTest}else Y.copy(xe).multiplyScalar(ne).floor(),ae.copy(We).multiplyScalar(ne).floor(),ge=Dt;if(q!==0&&(V=j),y.bindFramebuffer(D.FRAMEBUFFER,V)&&y.drawBuffers(E,V),y.viewport(Y),y.scissor(ae),y.setScissorTest(ge),G){const pe=X.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe.__webglTexture,q)}else if(me){const pe=N;for(let Ee=0;Ee<E.textures.length;Ee++){const be=X.get(E.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,be.__webglTexture,q,pe)}}else if(E!==null&&q!==0){const pe=X.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,q)}F=-1};function Mp(E){const N=X.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=C.textureFormatReadable(E.format),N.__typeReadable=C.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,q,V,G,me,ye,pe=0){if(!(E&&E.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){y.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const be=E.textures[pe],He=be.format,Ke=be.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe);const Te=Mp(be);if(Te.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&q>=0&&q<=E.height-G&&D.readPixels(N,q,V,G,de.convert(He),de.convert(Ke),me)}finally{const be=z!==null?X.get(z).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,N,q,V,G,me,ye,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(N>=0&&N<=E.width-V&&q>=0&&q<=E.height-G){y.bindFramebuffer(D.FRAMEBUFFER,Ee);const be=E.textures[pe],He=be.format,Ke=be.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe);const Te=Mp(be);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,it),D.bufferData(D.PIXEL_PACK_BUFFER,me.byteLength,D.STREAM_READ),D.readPixels(N,q,V,G,de.convert(He),de.convert(Ke),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Nt=z!==null?X.get(z).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Nt);const gt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await NM(D,gt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,it),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,me),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(it),D.deleteSync(gt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,q=0){const V=Math.pow(2,-q),G=Math.floor(E.image.width*V),me=Math.floor(E.image.height*V),ye=N!==null?N.x:0,pe=N!==null?N.y:0;Z.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,ye,pe,G,me),y.unbindTexture()},this.copyTextureToTexture=function(E,N,q=null,V=null,G=0,me=0){let ye,pe,Ee,be,He,Ke,Te,it,Nt;const gt=E.isCompressedTexture?E.mipmaps[me]:E.image;if(q!==null)ye=q.max.x-q.min.x,pe=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,be=q.min.x,He=q.min.y,Ke=q.isBox3?q.min.z:0;else{const At=Math.pow(2,-G);ye=Math.floor(gt.width*At),pe=Math.floor(gt.height*At),E.isDataArrayTexture?Ee=gt.depth:E.isData3DTexture?Ee=Math.floor(gt.depth*At):Ee=1,be=0,He=0,Ke=0}V!==null?(Te=V.x,it=V.y,Nt=V.z):(Te=0,it=0,Nt=0);const dt=de.convert(N.format),Jt=de.convert(N.type);let ve;N.isData3DTexture?(Z.setTexture3D(N,0),ve=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),ve=D.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),ve=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const an=y.getParameter(D.UNPACK_ROW_LENGTH),Qe=y.getParameter(D.UNPACK_IMAGE_HEIGHT),Dn=y.getParameter(D.UNPACK_SKIP_PIXELS),ci=y.getParameter(D.UNPACK_SKIP_ROWS),Ji=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,be),y.pixelStorei(D.UNPACK_SKIP_ROWS,He),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke);const ss=E.isDataArrayTexture||E.isData3DTexture,ct=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const At=X.get(E),Qi=X.get(N),pt=X.get(At.__renderTarget),er=X.get(Qi.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,pt.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let as=0;as<Ee;as++)ss&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(E).__webglTexture,G,Ke+as),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(N).__webglTexture,me,Nt+as)),D.blitFramebuffer(be,He,ye,pe,Te,it,ye,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||X.has(E)){const At=X.get(E),Qi=X.get(N);y.bindFramebuffer(D.READ_FRAMEBUFFER,k),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,W);for(let pt=0;pt<Ee;pt++)ss?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.__webglTexture,G,Ke+pt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,At.__webglTexture,G),ct?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Qi.__webglTexture,me,Nt+pt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Qi.__webglTexture,me),G!==0?D.blitFramebuffer(be,He,ye,pe,Te,it,ye,pe,D.COLOR_BUFFER_BIT,D.NEAREST):ct?D.copyTexSubImage3D(ve,me,Te,it,Nt+pt,be,He,ye,pe):D.copyTexSubImage2D(ve,me,Te,it,be,He,ye,pe);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ct?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(ve,me,Te,it,Nt,ye,pe,Ee,dt,Jt,gt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(ve,me,Te,it,Nt,ye,pe,Ee,dt,gt.data):D.texSubImage3D(ve,me,Te,it,Nt,ye,pe,Ee,dt,Jt,gt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,me,Te,it,ye,pe,dt,Jt,gt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,me,Te,it,gt.width,gt.height,dt,gt.data):D.texSubImage2D(D.TEXTURE_2D,me,Te,it,ye,pe,dt,Jt,gt);y.pixelStorei(D.UNPACK_ROW_LENGTH,an),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Dn),y.pixelStorei(D.UNPACK_SKIP_ROWS,ci),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Ji),me===0&&N.generateMipmaps&&D.generateMipmap(ve),y.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){Q=0,K=0,z=null,y.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}function $g(n,e){if(e===vM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Fh||e===Nv){let t=n.getIndex();if(t===null){const s=[],a=n.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Fh)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(r),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function pR(n){const e=new Map,t=new Map,i=n.clone();return ix(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function ix(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)ix(n.children[i],e.children[i],t)}class mR extends ua{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yR(t)}),this.register(function(t){return new SR(t)}),this.register(function(t){return new PR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new LR(t)}),this.register(function(t){return new ER(t)}),this.register(function(t){return new TR(t)}),this.register(function(t){return new wR(t)}),this.register(function(t){return new bR(t)}),this.register(function(t){return new xR(t)}),this.register(function(t){return new AR(t)}),this.register(function(t){return new MR(t)}),this.register(function(t){return new CR(t)}),this.register(function(t){return new RR(t)}),this.register(function(t){return new _R(t)}),this.register(function(t){return new Zg(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zg(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new IR(t)})}load(e,t,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=$a.extractUrlBase(e);a=$a.resolveURL(c,this.path)}else a=$a.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Kv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===rx){try{a[Xe.KHR_BINARY_GLTF]=new DR(e)}catch(h){r&&r(h);return}s=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new KR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Xe.KHR_MATERIALS_UNLIT:a[h]=new vR;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[h]=new UR(s,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[h]=new kR;break;case Xe.KHR_MESH_QUANTIZATION:a[h]=new FR;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function gR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Ct(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _R{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Cn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zh(u),c.distance=h;break;case"spot":c=new QE(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class vR{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return jr}extendParams(e,t,i){const r=[];e.color=new ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Cn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Wt))}return Promise.all(r)}}class xR{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class yR{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(s,s)}return Promise.all(r)}}class SR{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class MR{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class ER{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Cn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Wt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class TR{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class wR{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(s[0],s[1],s[2],Cn),Promise.all(r)}}class bR{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class AR{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(s[0],s[1],s[2],Cn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Wt)),Promise.all(r)}}class RR{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}}class CR{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class PR{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class NR{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class LR{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class Zg{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,r.mode,r.filter),p})})}else return null}}class IR{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==kn.TRIANGLES&&c.mode!==kn.TRIANGLE_STRIP&&c.mode!==kn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const m of h){const M=new Ge,g=new B,f=new Zi,_=new B(1,1,1),S=new ME(m.geometry,m.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,T),l.SCALE&&_.fromBufferAttribute(l.SCALE,T),S.setMatrixAt(T,M.compose(g,f,_));let x=null;for(const T in l)if(T==="_COLOR_0"){const w=l[T];S.instanceColor=new xc(w.array,w.itemSize,w.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(x===null){const b=S.geometry;x=new In,x.name=b.name;for(const v in b.attributes)x.setAttribute(v,b.attributes[v]);for(const v in b.morphAttributes)x.morphAttributes[v]=b.morphAttributes[v];b.index!==null&&x.setIndex(b.index),x.morphTargetsRelative=b.morphTargetsRelative;for(const v of b.groups)x.addGroup(v.start,v.count,v.materialIndex);b.boundingBox!==null&&(x.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(x.boundingSphere=b.boundingSphere.clone()),x.drawRange.start=b.drawRange.start,x.drawRange.count=b.drawRange.count,x.userData=Object.assign({},b.userData),S.geometry=x}const w=l[T];x.setAttribute(T,new xc(w.array,w.itemSize,w.normalized))}Tt.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const rx="glTF",Pa=12,Jg={JSON:1313821514,BIN:5130562};class DR{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Pa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Pa,s=new DataView(e,Pa);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Jg.JSON){const c=new Uint8Array(e,Pa+a,o);this.content=i.decode(c)}else if(l===Jg.BIN){const c=Pa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class UR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Wh[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Wh[u]||u.toLowerCase();if(a[u]!==void 0){const d=i.accessors[e.attributes[u]],p=Xs[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(p){for(const m in p.attributes){const M=p.attributes[m],g=l[m];g!==void 0&&(M.normalized=g)}h(p)},o,c,Cn,d)})})}}class kR{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class FR{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class sx extends oa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,h=(i-t)/u,d=h*h,p=d*h,m=e*c,M=m-c,g=-2*p+3*d,f=p-d,_=1-g,S=f-d+h;for(let x=0;x!==o;x++){const T=a[M+x+o],w=a[M+x+l]*u,b=a[m+x+o],v=a[m+x]*u;s[x]=_*T+S*w+g*b+f*v}return s}}const OR=new Zi;class BR extends sx{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return OR.fromArray(s).normalize().toArray(s),s}}const kn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qg={9728:Ft,9729:Ot,9984:Tv,9985:Fl,9986:ka,9987:zi},e0={33071:vi,33648:pc,10497:ea},id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},or={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zR={CUBICSPLINE:void 0,LINEAR:xo,STEP:vo},rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function HR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new sp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ar})),n.DefaultMaterial}function Or(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function pi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VR(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function GR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WR(n){let e;const t=n.extensions&&n.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sd(t.attributes):e=n.indices+":"+sd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+sd(n.targets[i]);return e}function sd(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Xh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const jR=new Ge;class KR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&a<98?this.textureLoader=new ZE(this.options.manager):this.textureLoader=new iT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Or(s,o,r),pi(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load($a.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=id[r.type],o=Xs[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new Sn(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=id[r.type],c=Xs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let M,g;if(p&&p!==h){const f=Math.floor(d/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let S=t.cache.get(_);S||(M=new c(o,f*p,r.count*p/u),S=new fE(M,p/u),t.cache.add(_,S)),g=new ep(S,l,d%p/u,m)}else o===null?M=new c(r.count*l):M=new c(o,d,r.count*l),g=new Sn(M,l,m);if(r.sparse!==void 0){const f=id.SCALAR,_=Xs[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,T=new _(a[1],S,r.sparse.count*f),w=new c(a[2],x,r.sparse.count*l);o!==null&&(g=new Sn(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let b=0,v=T.length;b<v;b++){const R=T[b];if(g.setX(R,w[b*l]),l>=2&&g.setY(R,w[b*l+1]),l>=3&&g.setZ(R,w[b*l+2]),l>=4&&g.setW(R,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Qg[d.magFilter]||Ot,u.minFilter=Qg[d.minFilter]||zi,u.wrapS=e0[d.wrapS]||ea,u.wrapT=e0[d.wrapT]||ea,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ft&&u.minFilter!==Ot,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let m=d;t.isImageBitmapLoader===!0&&(m=function(M){const g=new jt(M);g.needsUpdate=!0,d(g)}),t.load($a.resolveURL(h,s.path),m,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),pi(h,a),h.userData.mimeType=a.mimeType||XR(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Hv,Ei.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new zv,Ei.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return sp}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const h=r[Xe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Cn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Wt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=_i);const u=s.alphaMode||rd.OPAQUE;if(u===rd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===rd.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==jr&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new $e(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==jr&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==jr){const h=s.emissiveFactor;o.emissive=new ke().setRGB(h[0],h[1],h[2],Cn)}return s.emissiveTexture!==void 0&&a!==jr&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Wt)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),pi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Or(r,h,s),h})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return t0(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=WR(c),h=r[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=t0(new In,c,t),c.mode===kn.TRIANGLE_STRIP?d=d.then(p=>$g(p,Nv)):c.mode===kn.TRIANGLE_FAN&&(d=d.then(p=>$g(p,Fh))),r[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?HR(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,m=u.length;p<m;p++){const M=u[p],g=a[p];let f;const _=c[p];if(g.mode===kn.TRIANGLES||g.mode===kn.TRIANGLE_STRIP||g.mode===kn.TRIANGLE_FAN||g.mode===void 0){const S=s.isSkinnedMesh===!0,x=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");S&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=S&&x?new xE(M,_):new Pn(M,_),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(g.mode===kn.LINES)f=new TE(M,_);else if(g.mode===kn.LINE_STRIP)f=new rp(M,_);else if(g.mode===kn.LINE_LOOP)f=new wE(M,_);else if(g.mode===kn.POINTS)f=new bE(M,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&GR(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),pi(f,s),g.extensions&&Or(r,f,g),t.assignFinalMaterial(f),h.push(f)}for(let p=0,m=h.length;p<m;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Or(r,h[0],s),h[0];const d=new Xr;s.extensions&&Or(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,m=h.length;p<m;p++)d.add(h[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(qM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Wc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),pi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Ge;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new np(o,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const p=r.channels[h],m=r.samplers[p.sampler],M=p.target,g=M.node,f=r.parameters!==void 0?r.parameters[m.input]:m.input,_=r.parameters!==void 0?r.parameters[m.output]:m.output;M.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",_)),c.push(m),u.push(M))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],m=h[2],M=h[3],g=h[4],f=[];for(let S=0,x=d.length;S<x;S++){const T=d[S],w=p[S],b=m[S],v=M[S],R=g[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const P=i._createAnimationTracks(T,w,b,v,R);if(P)for(let I=0;I<P.length;I++)f.push(P[I])}const _=new WE(s,void 0,f);return pi(_,r),_})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,jR)});for(let p=0,m=h.length;p<m;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){const p=u.userData.pivot,m=h[0];u.pivot=new B().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Bv:c.length>1?u=new Xr:c.length===1?u=c[0]:u=new Tt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),pi(u,s),s.extensions&&Or(i,u,s),s.matrix!==void 0){const h=new Ge;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Xr;i.name&&(s.name=r.createUniqueName(i.name)),pi(s,i),i.extensions&&Or(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?s.add(pR(d)):s.add(d)}const c=u=>{const h=new Map;for(const[d,p]of r.associations)(d instanceof Ei||d instanceof jt)&&h.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&h.set(d,p)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}or[s.path]===or.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(or[s.path]){case or.weights:u=Eo;break;case or.rotation:u=To;break;case or.translation:case or.scale:u=Mc;break;default:switch(i.itemSize){case 1:u=Eo;break;case 2:case 3:default:u=Mc;break}break}const h=r.interpolation!==void 0?zR[r.interpolation]:xo,d=this._getArrayFromAccessor(i);for(let p=0,m=l.length;p<m;p++){const M=new u(l[p]+"."+or[s.path],t.array,d,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Xh(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof To?BR:sx;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YR(n,e,t){const i=e.attributes,r=new Ai;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){const u=Xh(Xs[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new B,l=new B;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){const M=Xh(Xs[d.componentType]);l.multiplyScalar(M)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new Ri;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function t0(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=Wh[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return Ye.workingColorSpace!==Cn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),pi(n,e),YR(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?VR(n,e.targets,t):n})}function qR(){const n=Ae.useRef(null),[e,t]=Ae.useState(0),[i,r]=Ae.useState(!1),[s,a]=Ae.useState(null),[o,l]=Ae.useState("dance"),c=Ae.useRef("dance");c.current=o;const u=Ae.useRef(null),h=Ae.useRef(!1),d=Ae.useRef({x:0,y:0});Ae.useEffect(()=>{const m=n.current;if(!m)return;const M=m.clientWidth||400,g=m.clientHeight||480,f=new cE,_=new un(45,M/g,.1,100);_.position.set(0,0,3.2);const S=new fR({antialias:!0,alpha:!0});S.setSize(M,g),S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.outputColorSpace=Wt,S.toneMapping=Vf,S.toneMappingExposure=1.25,m.appendChild(S.domElement);const x=new nT(16777215,1.4);f.add(x);const T=new Hh(16774870,2.2);T.position.set(3,4,3),f.add(T);const w=new Hh(3835647,1.2);w.position.set(-3,2,-2),f.add(w);const b=new zh(16723592,2.8,10);b.position.set(0,-2,2),f.add(b);const v=new zh(16765952,2,10);v.position.set(2,2,-2),f.add(v);const R=new mR;let P=null,I=0;R.load("./kaustya_3d.glb",U=>{P=U.scene,u.current=P;const Y=new Ai().setFromObject(P),ae=Y.getCenter(new B),ge=Y.getSize(new B),Ue=1.9/(Math.max(ge.x,ge.y,ge.z)||1);P.scale.set(Ue,Ue,Ue),P.position.x=-ae.x*Ue,P.position.y=-ae.y*Ue-.1,P.position.z=-ae.z*Ue,I=P.position.y,P.traverse(De=>{De.isMesh&&(De.castShadow=!0,De.receiveShadow=!0,De.material&&(De.material.roughness=.55,De.material.metalness=.1))}),f.add(P),r(!0)},U=>{if(U.total>0){const Y=Math.round(U.loaded/U.total*100);t(Y)}else t(Y=>Math.min(Y+10,95))},U=>{console.error("Error loading 3D model:",U),a("3D Model load error. Reload to retry.")});const H=U=>{h.current=!0,d.current={x:U.clientX||U.touches&&U.touches[0].clientX||0,y:U.clientY||U.touches&&U.touches[0].clientY||0}},j=U=>{if(!h.current||!u.current)return;const Y=U.clientX||U.touches&&U.touches[0].clientX||0,ae=U.clientY||U.touches&&U.touches[0].clientY||0,ge=Y-d.current.x,Be=ae-d.current.y;u.current.rotation.y+=ge*.01,u.current.rotation.x=Math.max(-.4,Math.min(.4,u.current.rotation.x+Be*.005)),d.current={x:Y,y:ae}},k=()=>{h.current=!1},W=S.domElement;W.addEventListener("mousedown",H),window.addEventListener("mousemove",j),window.addEventListener("mouseup",k),W.addEventListener("touchstart",H,{passive:!0}),window.addEventListener("touchmove",j,{passive:!0}),window.addEventListener("touchend",k);let Q=null;const K=new mT,z=()=>{Q=requestAnimationFrame(z);const U=K.getElapsedTime();if(P){const Y=c.current;let ae=.01,ge=2,Be=.06;Y==="chill"?(ae=.004,ge=1.2,Be=.03):Y==="dance"?(ae=.022,ge=3,Be=.09):Y==="turbo"&&(ae=.07,ge=4.5,Be=.12),h.current||(P.rotation.y+=ae),P.position.y=I+Math.sin(U*ge)*Be,Y==="dance"||Y==="turbo"?P.rotation.z=Math.sin(U*2.5)*.05:P.rotation.z=0,b.intensity=2.5+Math.sin(U*3)*1.5,v.intensity=2+Math.cos(U*2.5)*1}S.render(f,_)};z();const F=()=>{if(!m)return;const U=m.clientWidth,Y=m.clientHeight;_.aspect=U/Y,_.updateProjectionMatrix(),S.setSize(U,Y)};return window.addEventListener("resize",F),()=>{Q&&cancelAnimationFrame(Q),window.removeEventListener("resize",F),W.removeEventListener("mousedown",H),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",k),W.removeEventListener("touchstart",H),window.removeEventListener("touchmove",j),window.removeEventListener("touchend",k),m.contains(S.domElement)&&m.removeChild(S.domElement),S.dispose(),f.clear()}},[]);const p=()=>{u.current&&(u.current.rotation.x=0,u.current.rotation.y=0,u.current.rotation.z=0),l("dance")};return A.jsx("section",{id:"model3d",className:"section","aria-labelledby":"model3d-title",children:A.jsxs("div",{className:"content-container",children:[A.jsxs("div",{className:"section-title-wrap",children:[A.jsx("span",{className:"section-tag",children:"3D METAVERSE AVATAAR"}),A.jsx("h2",{id:"model3d-title",className:"section-title",children:"🕺 Kaustya Live In 3D"}),A.jsx("p",{className:"section-desc",children:"Directly from AI 3D scan: Kaustya ka interactive 3D avataar! Mouse ya ungli se ghuma kar 360° view dekhein!"})]}),A.jsxs("div",{className:"model3d-wrapper",children:[A.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"0.75rem",flexWrap:"wrap",marginBottom:"1rem"},children:[A.jsx("span",{className:"stamp stamp-danger",children:"🎮 TOUCH & DRAG TO ROTATE"}),A.jsx("span",{className:"stamp stamp-warning",children:"✨ 100% ASLI KAUSTYA SCAN"}),A.jsx("span",{className:"stamp stamp-success",children:"🎵 ANIMATED PARTY DANCE"})]}),A.jsxs("div",{className:"model3d-canvas-box",children:[!i&&!s&&A.jsxs("div",{className:"model3d-loader",role:"status","aria-live":"polite",children:[A.jsx("span",{className:"stamp stamp-warning",style:{fontSize:"1.1rem"},children:"⏳ 3D KAUSTYA LOAD HO RAHA HAI..."}),A.jsx("div",{className:"model3d-progress-bar",children:A.jsx("div",{className:"model3d-progress-fill",style:{width:`${e}%`}})}),A.jsxs("p",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--color-ink)"},children:[e,"% Loaded (20 MB High Quality Mesh)"]})]}),s&&A.jsx("div",{className:"model3d-error",children:A.jsxs("p",{children:["⚠️ ",s]})}),A.jsx("div",{ref:n,className:"model3d-canvas-stage",style:{cursor:"grab"},title:"Click and drag to rotate Kaustya in 3D"})]}),A.jsxs("div",{className:"model3d-controls-row",children:[A.jsx("button",{type:"button",className:`btn ${o==="dance"?"btn-pink":"btn-white"}`,onClick:()=>l("dance"),"aria-label":"Set animation to Party Dance",children:"🕺 PARTY DANCE"}),A.jsx("button",{type:"button",className:`btn ${o==="chill"?"btn-teal":"btn-white"}`,onClick:()=>l("chill"),"aria-label":"Set animation to Chill Mode",children:"🧘 CHILL SLOW"}),A.jsx("button",{type:"button",className:`btn ${o==="turbo"?"btn-yellow":"btn-white"}`,onClick:()=>l("turbo"),"aria-label":"Set animation to Turbo Spin",children:"🚀 TURBO SPIN"}),A.jsx("button",{type:"button",className:"btn btn-white",onClick:p,"aria-label":"Reset 3D camera and rotation",children:"🔄 RESET VIEW"})]})]})]})})}function $R({photos:n,currentIndex:e,onClose:t,onPrev:i,onNext:r}){const s=Ae.useRef(null),a=Ae.useRef(null),o=n[e]||n[0];Ae.useEffect(()=>{const h=p=>{p.key==="Escape"&&t(),p.key==="ArrowLeft"&&i(),p.key==="ArrowRight"&&r()};window.addEventListener("keydown",h);const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",h),document.body.style.overflow=d}},[t,i,r]);const l=h=>{s.current=h.targetTouches[0].clientX},c=h=>{a.current=h.targetTouches[0].clientX},u=()=>{if(!s.current||!a.current)return;const h=s.current-a.current,d=h>50,p=h<-50;d&&r(),p&&i(),s.current=null,a.current=null};return A.jsx("div",{className:"lightbox-overlay",role:"dialog","aria-modal":"true","aria-label":"Photo Evidence Lightbox",onClick:t,children:A.jsxs("div",{className:"lightbox-content",onClick:h=>h.stopPropagation(),children:[A.jsxs("div",{className:"lightbox-header",children:[A.jsxs("span",{className:"lightbox-counter",children:["📷 EVIDENCE ",e+1," OF ",n.length]}),A.jsx("button",{type:"button",className:"lightbox-close-btn",onClick:t,"aria-label":"Close Lightbox (Esc)",title:"Close (Esc)",children:"✕"})]}),A.jsx("div",{className:"lightbox-image-stage",onTouchStart:l,onTouchMove:c,onTouchEnd:u,children:A.jsx("img",{src:o.src,alt:o.alt||o.caption,className:"lightbox-image"})}),A.jsx("div",{className:"lightbox-caption-box",children:A.jsx("p",{children:o.caption})}),A.jsxs("div",{className:"lightbox-controls",children:[A.jsx("button",{type:"button",className:"btn btn-yellow",onClick:i,"aria-label":"Previous Exhibit",children:"◀ PEECHE (PREV)"}),A.jsx("button",{type:"button",className:"btn btn-pink",onClick:r,"aria-label":"Next Exhibit",children:"AAGE (NEXT) ▶"})]})]})})}function ZR({photos:n}){const[e,t]=Ae.useState(null),i=o=>{t(o)},r=()=>{t(null)},s=()=>{t(o=>o>0?o-1:n.length-1)},a=()=>{t(o=>o<n.length-1?o+1:0)};return A.jsxs("section",{id:"gallery",className:"section","aria-labelledby":"gallery-title",children:[A.jsxs("div",{className:"content-container",children:[A.jsxs("div",{className:"section-title-wrap",children:[A.jsx("span",{className:"section-tag",children:"CCTV & FORENSIC PROOF"}),A.jsx("h2",{id:"gallery-title",className:"section-title",children:"📸 Saboot Gallery"}),A.jsx("p",{className:"section-desc",children:"Court ke samaksh pesh kiye gaye 18 ajeebogareeb photographic saboot. Click karke full screen mein dekh kar sar pe hath rakhein!"})]}),A.jsx("div",{className:"gallery-grid",role:"list",children:n.map((o,l)=>A.jsxs("article",{className:"gallery-card",role:"listitem",tabIndex:0,onClick:()=>i(l),onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),i(l))},"aria-label":`Open Exhibit ${l+1}`,children:[A.jsx("div",{className:"gallery-img-wrap",children:A.jsx("img",{src:o.src,alt:o.alt||o.caption,loading:"lazy",className:"gallery-img",onError:c=>{c.currentTarget.style.display="none",c.currentTarget.parentElement.innerHTML=`
                      <div style="display:flex;align-items:center;justify-content:center;height:100%;font-weight:700;color:#1B1030;text-align:center;padding:1rem;background:#FFE3E3;">
                        🚨 Exhibit Under CBI Seizure
                      </div>
                    `}})}),A.jsx("p",{className:"gallery-caption",children:o.caption})]},l))})]}),e!==null&&A.jsx($R,{photos:n,currentIndex:e,onClose:r,onPrev:s,onNext:a})]})}function JR({witnesses:n}){return A.jsx("section",{id:"witnesses",className:"section","aria-labelledby":"witnesses-title",children:A.jsxs("div",{className:"content-container",children:[A.jsxs("div",{className:"section-title-wrap",children:[A.jsx("span",{className:"section-tag",children:"TESTIMONIES UNDER OATH"}),A.jsx("h2",{id:"witnesses-title",className:"section-title",children:"🗣️ Gawaahon Ke Bayaan"}),A.jsx("p",{className:"section-desc",children:"Geeta par haath rakh kar doston dwara diye gaye dil hilane wale bayaan. Aise dost ho toh dushman ki kya zaroorat!"})]}),A.jsx("div",{className:"witness-grid",children:n.map(e=>A.jsxs("article",{className:"witness-card",children:[e.badge&&A.jsx("span",{className:"witness-badge-tag",children:e.badge}),A.jsxs("div",{children:[A.jsx("h3",{className:"witness-name",children:e.name}),A.jsx("p",{className:"witness-relation",children:e.relation})]}),A.jsxs("blockquote",{className:"witness-text",children:['"',e.text,'"']})]},e.id))})]})})}const ad=["Brain cells dhundh raha hoon...","Aukaat calculate ho rahi hai...","Kundli se shani aur mangal scan ho rahe hain...","Zomato ke unpaid bills ki raseed nikaal raha hoon...","Fake Goa trip ki ticket verify ho rahi hai...","Aalsi quota check kiya ja raha hai..."];function QR({roasts:n,targetName:e="Kaustya"}){const[t,i]=Ae.useState(n[0]||"Kaustya bhai, tu time pe tabhi aata hai jab agle din aana ho saale!"),[r,s]=Ae.useState(!1),[a,o]=Ae.useState(ad[0]),[l,c]=Ae.useState(!1),u=Ae.useRef(0),h=Ae.useRef(null),d=()=>{if(r)return;s(!0),c(!1);const g=ad[Math.floor(Math.random()*ad.length)];o(g),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{let f=Math.floor(Math.random()*n.length);f===u.current&&n.length>1&&(f=(f+1)%n.length),u.current=f,i(n[f]),s(!1)},1e3)},p=async()=>{try{await navigator.clipboard.writeText(t),c(!0),setTimeout(()=>c(!1),2500)}catch{c(!0),setTimeout(()=>c(!1),2500)}},M=`https://api.whatsapp.com/send?text=${encodeURIComponent(`🔥 Oye ${e}! Roast Machine 3000 ka verdict:

"${t}"

Happy Birthday bakchod! 🎂`)}`;return A.jsx("section",{id:"roast",className:"section","aria-labelledby":"roast-title",children:A.jsxs("div",{className:"content-container",children:[A.jsxs("div",{className:"section-title-wrap",children:[A.jsx("span",{className:"section-tag",children:"AI-POWERED BAKAR"}),A.jsx("h2",{id:"roast-title",className:"section-title",children:"🔥 Roast Machine 3000"}),A.jsx("p",{className:"section-desc",children:"Single button click par Kaustya ke liye customized, taaza aur kanned gaali-mishrit roast generate karein!"})]}),A.jsxs("div",{className:"roast-machine-box",children:[A.jsx("div",{className:"stamp stamp-danger",style:{marginBottom:"1rem"},children:"⚡ 100% UNFILTERED HINGLISH ROASTS"}),A.jsx("div",{className:"roast-screen",role:"region","aria-live":"polite","aria-atomic":"true",children:r?A.jsxs("p",{className:"roast-loading",children:["⏳ ",a]}):A.jsxs("p",{className:"roast-text",children:['"',t,'"']})}),A.jsxs("div",{className:"roast-actions-row",children:[A.jsx("button",{type:"button",className:"btn btn-pink",onClick:d,disabled:r,"aria-label":"Generate new roast for Kaustya",children:r?"Dhundh Raha Hoon...":"💥 ROAST KAUSTYA AGAIN!"}),A.jsx("button",{type:"button",className:"btn btn-yellow",onClick:p,disabled:r,"aria-label":"Copy roast to clipboard",children:l?"✅ COPIED TO CLIPBOARD!":"📋 COPY ROAST"}),A.jsx("a",{href:M,target:"_blank",rel:"noopener noreferrer",className:"btn btn-teal","aria-label":"Share roast on WhatsApp",children:"💬 SHARE ON WHATSAPP"})]})]})]})})}function eC({awards:n,photos:e}){return A.jsx("section",{id:"awards",className:"section","aria-labelledby":"awards-title",children:A.jsxs("div",{className:"content-container",children:[A.jsxs("div",{className:"section-title-wrap",children:[A.jsx("span",{className:"section-tag",children:"NATIONAL HONOURS"}),A.jsx("h2",{id:"awards-title",className:"section-title",children:"🎖️ Fake Awards & Trophies"}),A.jsx("p",{className:"section-desc",children:"Kaustya ki azeem kaabiliyat aur aalsi record ke liye pesh kiye gaye Rashtrapati samman ke barabar trophies!"})]}),A.jsx("div",{className:"awards-grid",children:n.map(t=>{var r;const i=((r=e[t.photoIndex])==null?void 0:r.src)||"./photos/photo1.jpg";return A.jsxs("article",{className:"award-card",children:[A.jsx("span",{className:"award-badge-top",children:t.badge}),A.jsx("div",{className:"award-img-wrap",children:A.jsx("img",{src:i,alt:t.title,className:"award-img",loading:"lazy"})}),A.jsx("h3",{className:"award-title",children:t.title}),A.jsxs("p",{className:"award-citation",children:['"',t.citation,'"']})]},t.id)})})]})})}function tC({reportCard:n}){return A.jsx("section",{id:"report",className:"section","aria-labelledby":"report-title",children:A.jsxs("div",{className:"content-container",children:[A.jsxs("div",{className:"section-title-wrap",children:[A.jsx("span",{className:"section-tag",children:"ANNUAL MARKSHEET"}),A.jsx("h2",{id:"report-title",className:"section-title",children:"📋 Life Ka Report Card"}),A.jsx("p",{className:"section-desc",children:"Pradhanadhyapak aur Class Teacher dwara jaari kiya gaya aakhri marksheet. Mobile screens par scroll karke dekhein!"})]}),A.jsxs("div",{className:"report-card-container",children:[A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem"},children:[A.jsx("span",{className:"stamp stamp-warning",children:"STUDENT: KAUSTYA (ROLL NO: 420)"}),A.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--text-muted)"},children:"👉 Swipe horizontally on small screens"})]}),A.jsx("div",{className:"report-table-scroll",tabIndex:0,"aria-label":"Life report card table with horizontal scroll",children:A.jsxs("table",{className:"report-table",children:[A.jsx("thead",{children:A.jsxs("tr",{children:[A.jsx("th",{scope:"col",children:"Subject / Skill"}),A.jsx("th",{scope:"col",children:"Marks"}),A.jsx("th",{scope:"col",children:"Grade"}),A.jsx("th",{scope:"col",children:"Teacher's Strict Remark"})]})}),A.jsx("tbody",{children:n.map((e,t)=>A.jsxs("tr",{children:[A.jsx("td",{style:{fontWeight:700},children:e.subject}),A.jsx("td",{style:{fontFamily:"var(--font-display)"},children:e.marks}),A.jsx("td",{children:A.jsx("span",{className:`grade-badge ${e.grade.includes("FAIL")?"grade-fail":"grade-pass"}`,children:e.grade})}),A.jsx("td",{children:e.remark})]},t))})]})}),A.jsxs("div",{style:{marginTop:"1.5rem",padding:"1rem",background:"var(--bg-card-alt)",border:"2px dashed var(--border-color)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[A.jsxs("div",{children:[A.jsx("p",{style:{fontFamily:"var(--font-display)",color:"var(--color-pink)",fontSize:"1.1rem"},children:"OVERALL RESULT: FAIL BUT PASSED BY SPECIAL KRIPA OF DOSTS"}),A.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"Remarks: Aalsi aur kanjoos hai, par iske bina group mein maza nahi aata."})]}),A.jsx("span",{className:"stamp stamp-danger",children:"PROMOTED TO NEXT YEAR 🎓"})]})]})]})})}function nC({photos:n}){const[e,t]=Ae.useState(0),[i,r]=Ae.useState("BHAI 5 MINUTE MEIN"),[s,a]=Ae.useState("PAHUNCH RAHA HOON"),o=Ae.useRef(null);Ae.useEffect(()=>{var d;const c=o.current;if(!c)return;const u=c.getContext("2d");if(!u)return;const h=new Image;h.crossOrigin="anonymous",h.src=((d=n[e])==null?void 0:d.src)||"./photos/photo1.jpg",h.onload=()=>{const m=600/h.width;c.width=600,c.height=h.height*m,u.drawImage(h,0,0,c.width,c.height);const M=(g,f,_)=>{if(!g.trim())return;const S=g.toUpperCase();let x=Math.floor(c.width/12);for(u.font=`900 ${x}px 'Bowlby One', Impact, sans-serif`;u.measureText(S).width>c.width-40&&x>16;)x-=2,u.font=`900 ${x}px 'Bowlby One', Impact, sans-serif`;u.textAlign="center",u.textBaseline=_?"top":"bottom",u.strokeStyle="#000000",u.lineWidth=Math.max(4,Math.floor(x/8)),u.lineJoin="miter",u.miterLimit=2,u.strokeText(S,c.width/2,f),u.fillStyle="#FFFFFF",u.fillText(S,c.width/2,f)};M(i,20,!0),M(s,c.height-20,!1)}},[e,i,s,n]);const l=()=>{const c=o.current;if(!c)return;const u=document.createElement("a");u.download="kaustya-birthday-meme.png",u.href=c.toDataURL("image/png"),u.click()};return A.jsx("section",{id:"meme",className:"section","aria-labelledby":"meme-title",children:A.jsxs("div",{className:"content-container",children:[A.jsxs("div",{className:"section-title-wrap",children:[A.jsx("span",{className:"section-tag",children:"CUSTOM DESI POSTER"}),A.jsx("h2",{id:"meme-title",className:"section-title",children:"🎨 Kaustya Meme Maker"}),A.jsx("p",{className:"section-desc",children:"Apni marzi ki photo chunein, desi punchlines dalein, aur high-quality meme download karke WhatsApp pe viral karein!"})]}),A.jsxs("div",{className:"meme-maker-box",children:[A.jsxs("div",{children:[A.jsx("label",{style:{display:"block",fontFamily:"var(--font-display)",fontSize:"0.85rem",marginBottom:"0.5rem"},children:"CHOOSE EXHIBIT PHOTO:"}),A.jsx("div",{className:"meme-photo-picker",role:"radiogroup","aria-label":"Select photo for meme",children:n.map((c,u)=>A.jsx("button",{type:"button",className:`meme-thumb-btn ${e===u?"active":""}`,onClick:()=>t(u),"aria-label":`Select Exhibit ${u+1}`,children:A.jsx("img",{src:c.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})},u))})]}),A.jsxs("div",{className:"meme-inputs-grid",children:[A.jsxs("div",{className:"meme-input-group",children:[A.jsx("label",{htmlFor:"meme-top",children:"TOP TEXT (UPAR KA PUNCHLINE):"}),A.jsx("input",{id:"meme-top",type:"text",className:"meme-input-text",value:i,onChange:c=>r(c.target.value),maxLength:40,placeholder:"TOP TEXT"})]}),A.jsxs("div",{className:"meme-input-group",children:[A.jsx("label",{htmlFor:"meme-bottom",children:"BOTTOM TEXT (NEECHE KA PUNCHLINE):"}),A.jsx("input",{id:"meme-bottom",type:"text",className:"meme-input-text",value:s,onChange:c=>a(c.target.value),maxLength:40,placeholder:"BOTTOM TEXT"})]})]}),A.jsx("div",{className:"meme-canvas-wrapper",children:A.jsx("canvas",{ref:o,className:"meme-canvas"})}),A.jsx("div",{style:{textAlign:"center"},children:A.jsx("button",{type:"button",className:"btn btn-yellow",onClick:l,style:{fontSize:"1.1rem",padding:"0.85rem 2rem"},children:"📥 DOWNLOAD MEME PNG"})})]})]})})}function iC({voiceNotes:n=[]}){const[e,t]=Ae.useState(null),i=Ae.useRef(null);if(Ae.useEffect(()=>()=>{i.current&&(i.current.pause(),i.current=null)},[]),!n||n.length===0)return null;const r=s=>{if(e===s.id)i.current&&i.current.pause(),t(null);else{i.current&&i.current.pause();const a=new Audio(s.src);i.current=a,t(s.id),a.play().catch(()=>{t(null)}),a.onended=()=>{t(null)}}};return A.jsx("section",{id:"voice",className:"section","aria-labelledby":"voice-title",children:A.jsxs("div",{className:"content-container",children:[A.jsxs("div",{className:"section-title-wrap",children:[A.jsx("span",{className:"section-tag",children:"WIRETAP TAPES"}),A.jsx("h2",{id:"voice-title",className:"section-title",children:"🎙️ Secret Voice Notes"}),A.jsx("p",{className:"section-desc",children:"Forensic lab dwara baramad kiye gaye confidential voice recordings. Play button dabayein aur sachai sunein!"})]}),A.jsx("div",{className:"voice-notes-list",children:n.map(s=>{const a=e===s.id;return A.jsxs("div",{className:"voice-note-card",children:[A.jsxs("div",{className:"voice-note-info",children:[A.jsx("span",{className:"stamp stamp-warning",style:{alignSelf:"flex-start",fontSize:"0.75rem",padding:"0.15rem 0.5rem",marginBottom:"0.25rem"},children:s.tag||"Audio Evidence"}),A.jsx("h3",{className:"voice-note-title",children:s.label}),A.jsxs("span",{className:"voice-note-meta",children:["⏱️ Duration: ",s.duration||"0:05"]})]}),A.jsx("button",{type:"button",className:"voice-play-btn",onClick:()=>r(s),"aria-label":a?`Pause ${s.label}`:`Play ${s.label}`,title:a?"Pause Audio":"Play Audio",children:a?"⏸️":"▶️"})]},s.id)})})]})})}function rC({giftMessages:n=[],giftUnlockedMessage:e}){const[t,i]=Ae.useState(0),[r,s]=Ae.useState("🎁 CLAIM BIRTHDAY GIFT"),[a,o]=Ae.useState(!1),[l,c]=Ae.useState({top:"40%",left:"40%"}),u=Ae.useRef(null),{fireCelebration:h}=aa(),d=M=>{if(t>=6)return;const g=u.current;if(g){const S=g.getBoundingClientRect(),x=S.width-160,T=S.height-60,w=Math.max(10,Math.floor(Math.random()*x)),b=Math.max(10,Math.floor(Math.random()*T));c({top:`${b}px`,left:`${w}px`})}const f=t+1;i(f);const _=n[f-1]||"Pakad ke dikha saale!";s(_)},p=()=>{t>=6?(o(!0),h()):d()},m=()=>{i(0),o(!1),s("🎁 CLAIM BIRTHDAY GIFT"),c({top:"40%",left:"40%"})};return A.jsx("section",{id:"gift",className:"section","aria-labelledby":"gift-title",children:A.jsxs("div",{className:"content-container",children:[A.jsxs("div",{className:"section-title-wrap",children:[A.jsx("span",{className:"section-tag",children:"BIRTHDAY SURPRISE"}),A.jsx("h2",{id:"gift-title",className:"section-title",children:"🎁 Claim Your Birthday Gift"}),A.jsx("p",{className:"section-desc",children:"Free iPhone, Russian trip ya Zomato lifetime free? Button ko pakad kar apna gift claim karein!"})]}),A.jsx("div",{className:"gift-claim-container",children:a?A.jsxs("div",{className:"gift-unlocked-card",role:"region","aria-live":"polite",children:[A.jsx("span",{className:"stamp stamp-danger",style:{marginBottom:"1rem"},children:"OFFICIAL BIRTHDAY REWARD"}),A.jsx("p",{style:{margin:"1rem 0",fontWeight:800},children:e}),A.jsx("button",{type:"button",className:"btn btn-white",onClick:m,style:{marginTop:"1rem"},children:"🔄 PLAY AGAIN"})]}):A.jsxs("div",{style:{width:"100%"},children:[A.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"0.75rem",marginBottom:"1rem"},children:[A.jsxs("span",{className:"stamp stamp-danger",children:["DODGES: ",t," / 6"]}),t>=6&&A.jsx("span",{className:"stamp stamp-success",children:"🎯 AB PAKAD MEIN AA GAYA! CLICK KARO!"})]}),A.jsx("div",{ref:u,className:"gift-arena",children:A.jsx("button",{type:"button",className:`btn ${t>=6?"btn-teal":"btn-pink"} gift-dodge-btn`,style:{top:l.top,left:l.left},onMouseEnter:d,onTouchStart:d,onClick:p,"aria-label":"Claim Birthday Gift",children:t>=6?"🎉 FINALLY CLICK ME! 🎉":r})}),A.jsx("p",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-muted)"},children:t<6?"💡 Hint: Ye button Kaustya ke Goa plan jaisa hai, haath nahi aayega!":"🔥 Shabash! Mehnat rang laayi. Ab dabao button!"})]})})]})})}const El=new Map;function sC(n,e){const[t,i]=Ae.useState(()=>{try{if(typeof window<"u"&&window.sessionStorage){const s=window.sessionStorage.getItem(n);return s!==null?JSON.parse(s):e}}catch{if(El.has(n))return El.get(n)}return e});return[t,s=>{try{const a=s instanceof Function?s(t):s;i(a),typeof window<"u"&&window.sessionStorage?window.sessionStorage.setItem(n,JSON.stringify(a)):El.set(n,a)}catch{const a=s instanceof Function?s(t):s;i(a),El.set(n,a)}}]}function aC({secretPassword:n,secretMessage:e,secretHint:t}){const[i,r]=sC("kaustya_secret_vault_unlocked",!1),[s,a]=Ae.useState(""),[o,l]=Ae.useState(""),{fireCelebration:c}=aa(),u=d=>{d.preventDefault();const p=s.trim().toLowerCase(),m=(n||"partykabdega").trim().toLowerCase();if(p===m)r(!0),l(""),c();else{const M=["Abe gadhe! Password bhi bhool gaya kya?","Wrong password saale! Itna aasan sawaal nahi pata?","Galat hai! CBI ko report bhej di gayi hai.","Abe dimaag laga, hint padh le thoda!"];l(M[Math.floor(Math.random()*M.length)])}},h=()=>{r(!1),a(""),l("")};return A.jsx("section",{id:"secret",className:"section","aria-labelledby":"secret-title",children:A.jsxs("div",{className:"content-container",children:[A.jsxs("div",{className:"section-title-wrap",children:[A.jsx("span",{className:"section-tag",children:"TOP SECRET CLASSIFIED"}),A.jsx("h2",{id:"secret-title",className:"section-title",children:"🔐 Secret Vault: Dil Ki Baat"}),A.jsx("p",{className:"section-desc",children:"Sirf asli doston aur Kaustya ke liye password-protected locker. Yahan bakchodi ke peeche ka asli pyaar chupa hai!"})]}),A.jsx("div",{className:"secret-vault-box",children:i?A.jsxs("div",{children:[A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[A.jsx("span",{className:"stamp stamp-success",children:"🔓 ACCESS GRANTED: THE REAL TRUTH"}),A.jsx("button",{type:"button",onClick:h,className:"btn btn-white",style:{minHeight:"38px",padding:"0.3rem 0.8rem",fontSize:"0.8rem"},children:"🔒 LOCK AGAIN"})]}),A.jsxs("div",{className:"secret-letter",children:[A.jsx("h3",{style:{fontFamily:"var(--font-display)",color:"var(--color-pink)",fontSize:"1.35rem",borderBottom:"2px dashed var(--color-ink)",paddingBottom:"0.5rem"},children:"💌 Dearest Kaustya (Mere Bhai),"}),e.map((d,p)=>A.jsx("p",{className:"secret-letter-line",children:d},p)),A.jsx("div",{style:{textAlign:"right",marginTop:"1rem",fontStyle:"italic",fontWeight:700},children:"— Tere Sabse Jigri Yaar ❤️"})]})]}):A.jsxs("div",{children:[A.jsx("span",{className:"stamp stamp-danger",style:{marginBottom:"1.25rem"},children:"🔒 VAULT IS CURRENTLY LOCKED"}),A.jsxs("form",{onSubmit:u,style:{maxWidth:"420px",margin:"1rem auto"},children:[A.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[A.jsx("input",{type:"password",className:"secret-input",value:s,onChange:d=>a(d.target.value),placeholder:"Enter Secret Password...","aria-label":"Secret vault password",required:!0}),A.jsx("button",{type:"submit",className:"btn btn-yellow",style:{minWidth:"110px"},children:"UNLOCK 🔓"})]}),o&&A.jsxs("p",{style:{color:"#FF2E88",fontWeight:800,marginTop:"0.75rem",fontSize:"0.95rem"},role:"alert",children:["❌ ",o]}),t&&A.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginTop:"0.75rem",fontWeight:600},children:["💡 ",t]})]})]})})]})})}function oC({config:n}){const[e,t]=Ae.useState(!1),{fireCelebration:i}=aa(),r=()=>{t(!0),i()},s=encodeURIComponent(`🎂 HAPPY BIRTHDAY KAUSTYA! 👑

Bhai court ne faisla suna diya hai: Tu 100% harami aur hum sabka favourite dost hai!

Ye link dekh aur turant grand party ka intezaam kar: ${window.location.href}`),a=n.whatsappNumber?`https://api.whatsapp.com/send?phone=${n.whatsappNumber.replace(/[^0-9]/g,"")}&text=${s}`:`https://api.whatsapp.com/send?text=${s}`;return A.jsx("section",{id:"verdict",className:"section","aria-labelledby":"verdict-title",children:A.jsxs("div",{className:"content-container",children:[A.jsxs("div",{className:"section-title-wrap",children:[A.jsx("span",{className:"section-tag",children:"FINAL JUDGEMENT"}),A.jsx("h2",{id:"verdict-title",className:"section-title",children:"⚖️ Final Faisla (Court Verdict)"}),A.jsx("p",{className:"section-desc",children:"Tamaam gawaahon, forensic photo sabooton aur bakchodi ke baad Court ka aakhri aadesh!"})]}),A.jsxs("div",{className:"verdict-box",children:[A.jsx("span",{className:"stamp stamp-danger",style:{marginBottom:"1rem"},children:"ORDER! ORDER! ORDER! 🔨"}),A.jsx("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.4rem",color:"var(--text-main)",marginTop:"0.5rem"},children:n.verdictTitle}),A.jsx("div",{className:"verdict-text-block",children:n.verdictText}),e?A.jsxs("div",{className:"verdict-celebration-card",role:"region","aria-live":"polite",children:[A.jsx("span",{className:"stamp stamp-success",style:{marginBottom:"1rem"},children:"🌟 OFFICIAL BIRTHDAY DECREE 🌟"}),A.jsx("h4",{className:"verdict-wish-title",children:n.finalWishHeadline}),A.jsx("p",{className:"verdict-wish-desc",children:n.finalWishText}),A.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"1rem"},children:[A.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"btn btn-teal",style:{fontSize:"1.05rem",padding:"0.85rem 1.8rem"},children:"📱 SEND WISHES ON WHATSAPP"}),A.jsx("button",{type:"button",className:"btn btn-white",onClick:i,children:"🎊 AUR CONFETTI UDAO!"})]})]}):A.jsx("button",{type:"button",className:"btn btn-pink",onClick:r,style:{fontSize:"1.2rem",padding:"1rem 2.5rem"},"aria-label":"Announce final verdict with celebration",children:"🔨 FAISLA SUNAO (DELIVER VERDICT) 🎉"})]})]})})}function lC(){var i;const{fireCelebration:n}=aa(),e=Ae.useRef("");Ae.useEffect(()=>{const r=s=>{var o,l;const a=(l=(o=document.activeElement)==null?void 0:o.tagName)==null?void 0:l.toLowerCase();a==="input"||a==="textarea"||(e.current=(e.current+s.key.toLowerCase()).slice(-5),e.current==="party"&&(n(),e.current=""))};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[n]);const t="HORN OK PLEASE 🚚 BURI NAZAR WALE TERA MOOH KALA 🧿 DEKHO MAGAR PYAAR SE ❤️ UMAR BADHI AQAL NAHI 🎂 KAUSTYA KA BIRTHDAY HAI BHAI 🎉 DIL MEIN AATA HOON SAMAJH MEIN NAHI 🚀 HORN OK PLEASE 🚚 BURI NAZAR WALE TERA MOOH KALA 🧿";return A.jsxs("div",{className:"page-wrapper",children:[A.jsx(HS,{}),A.jsx(VS,{}),A.jsx("div",{className:"hazard-bar","aria-hidden":"true"}),A.jsx("div",{className:"truck-marquee","aria-hidden":"true",children:A.jsxs("div",{className:"truck-marquee-track",children:[A.jsx("span",{children:t}),A.jsx("span",{children:t})]})}),A.jsx(GS,{voiceNotesCount:((i=Kt.voiceNotes)==null?void 0:i.length)||0}),A.jsxs("main",{children:[A.jsx(jS,{config:Kt}),A.jsx("div",{className:"hazard-bar","aria-hidden":"true"}),A.jsx(qR,{}),A.jsx("div",{className:"hazard-bar","aria-hidden":"true"}),A.jsx(ZR,{photos:Kt.photos}),A.jsx(JR,{witnesses:Kt.witnesses}),A.jsx(QR,{roasts:Kt.roasts,targetName:Kt.name}),A.jsx(eC,{awards:Kt.awards,photos:Kt.photos}),A.jsx(tC,{reportCard:Kt.reportCard}),A.jsx(nC,{photos:Kt.photos}),A.jsx(iC,{voiceNotes:Kt.voiceNotes}),A.jsx(rC,{giftMessages:Kt.giftMessages,giftUnlockedMessage:Kt.giftUnlockedMessage}),A.jsx(aC,{secretPassword:Kt.secretPassword,secretMessage:Kt.secretMessage,secretHint:Kt.secretHint}),A.jsx(oC,{config:Kt})]}),A.jsx("div",{className:"truck-marquee","aria-hidden":"true",children:A.jsxs("div",{className:"truck-marquee-track",children:[A.jsx("span",{children:t}),A.jsx("span",{children:t})]})}),A.jsx("div",{className:"hazard-bar","aria-hidden":"true"}),A.jsx("footer",{className:"site-footer",children:A.jsxs("div",{className:"content-container",children:[A.jsx("div",{className:"footer-stamp",children:"⚖️ CASE CLOSED: KAUSTYA GUILTY OF LIFELONG FRIENDSHIP"}),A.jsxs("p",{style:{fontWeight:600,margin:"0.5rem 0"},children:["Built with 100% Pyaar & Bakchodi by School Backbencher Gang for ",A.jsx("strong",{children:"Kaustya"}),"."]}),A.jsx("p",{style:{fontSize:"0.85rem",color:"#D5C8EE"},children:"No Kaustya was physically harmed during making of this site. Party bill strictly non-negotiable!"})]})})]})}od.createRoot(document.getElementById("root")).render(A.jsx(Cx.StrictMode,{children:A.jsx(lC,{})}));
