(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Hx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zf={exports:{}},xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function Gx(){if(Yg)return xo;Yg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return xo.Fragment=t,xo.jsx=i,xo.jsxs=i,xo}var jg;function Vx(){return jg||(jg=1,zf.exports=Gx()),zf.exports}var J=Vx(),Bf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function kx(){if(Zg)return re;Zg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(L,tt,xt){this.props=L,this.context=tt,this.refs=w,this.updater=xt||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=y.prototype;function N(L,tt,xt){this.props=L,this.context=tt,this.refs=w,this.updater=xt||M}var U=N.prototype=new g;U.constructor=N,T(U,y.prototype),U.isPureReactComponent=!0;var C=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function B(L,tt,xt,yt,Q,mt){return xt=mt.ref,{$$typeof:s,type:L,key:tt,ref:xt!==void 0?xt:null,props:mt}}function X(L,tt){return B(L.type,tt,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function R(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xt){return tt[xt]})}var G=/\/+/g;function lt(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?R(""+L.key):tt.toString(36)}function ot(){}function vt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ot,ot):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function dt(L,tt,xt,yt,Q){var mt=typeof L;(mt==="undefined"||mt==="boolean")&&(L=null);var Mt=!1;if(L===null)Mt=!0;else switch(mt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(L.$$typeof){case s:case t:Mt=!0;break;case _:return Mt=L._init,dt(Mt(L._payload),tt,xt,yt,Q)}}if(Mt)return Q=Q(L),Mt=yt===""?"."+lt(L,0):yt,C(Q)?(xt="",Mt!=null&&(xt=Mt.replace(G,"$&/")+"/"),dt(Q,tt,xt,"",function(oe){return oe})):Q!=null&&(D(Q)&&(Q=X(Q,xt+(Q.key==null||L&&L.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+Mt)),tt.push(Q)),1;Mt=0;var Rt=yt===""?".":yt+":";if(C(L))for(var wt=0;wt<L.length;wt++)yt=L[wt],mt=Rt+lt(yt,wt),Mt+=dt(yt,tt,xt,mt,Q);else if(wt=x(L),typeof wt=="function")for(L=wt.call(L),wt=0;!(yt=L.next()).done;)yt=yt.value,mt=Rt+lt(yt,wt++),Mt+=dt(yt,tt,xt,mt,Q);else if(mt==="object"){if(typeof L.then=="function")return dt(vt(L),tt,xt,yt,Q);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function z(L,tt,xt){if(L==null)return L;var yt=[],Q=0;return dt(L,yt,"","",function(mt){return tt.call(xt,mt,Q++)}),yt}function Z(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(xt){(L._status===0||L._status===-1)&&(L._status=1,L._result=xt)},function(xt){(L._status===0||L._status===-1)&&(L._status=2,L._result=xt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Et(){}return re.Children={map:z,forEach:function(L,tt,xt){z(L,function(){tt.apply(this,arguments)},xt)},count:function(L){var tt=0;return z(L,function(){tt++}),tt},toArray:function(L){return z(L,function(tt){return tt})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=N,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cloneElement=function(L,tt,xt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var yt=T({},L.props),Q=L.key,mt=void 0;if(tt!=null)for(Mt in tt.ref!==void 0&&(mt=void 0),tt.key!==void 0&&(Q=""+tt.key),tt)!F.call(tt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&tt.ref===void 0||(yt[Mt]=tt[Mt]);var Mt=arguments.length-2;if(Mt===1)yt.children=xt;else if(1<Mt){for(var Rt=Array(Mt),wt=0;wt<Mt;wt++)Rt[wt]=arguments[wt+2];yt.children=Rt}return B(L.type,Q,void 0,void 0,mt,yt)},re.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},re.createElement=function(L,tt,xt){var yt,Q={},mt=null;if(tt!=null)for(yt in tt.key!==void 0&&(mt=""+tt.key),tt)F.call(tt,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=tt[yt]);var Mt=arguments.length-2;if(Mt===1)Q.children=xt;else if(1<Mt){for(var Rt=Array(Mt),wt=0;wt<Mt;wt++)Rt[wt]=arguments[wt+2];Q.children=Rt}if(L&&L.defaultProps)for(yt in Mt=L.defaultProps,Mt)Q[yt]===void 0&&(Q[yt]=Mt[yt]);return B(L,mt,void 0,void 0,null,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:d,render:L}},re.isValidElement=D,re.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:Z}},re.memo=function(L,tt){return{$$typeof:p,type:L,compare:tt===void 0?null:tt}},re.startTransition=function(L){var tt=I.T,xt={};I.T=xt;try{var yt=L(),Q=I.S;Q!==null&&Q(xt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Et,Y)}catch(mt){Y(mt)}finally{I.T=tt}},re.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},re.use=function(L){return I.H.use(L)},re.useActionState=function(L,tt,xt){return I.H.useActionState(L,tt,xt)},re.useCallback=function(L,tt){return I.H.useCallback(L,tt)},re.useContext=function(L){return I.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,tt){return I.H.useDeferredValue(L,tt)},re.useEffect=function(L,tt,xt){var yt=I.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(L,tt)},re.useId=function(){return I.H.useId()},re.useImperativeHandle=function(L,tt,xt){return I.H.useImperativeHandle(L,tt,xt)},re.useInsertionEffect=function(L,tt){return I.H.useInsertionEffect(L,tt)},re.useLayoutEffect=function(L,tt){return I.H.useLayoutEffect(L,tt)},re.useMemo=function(L,tt){return I.H.useMemo(L,tt)},re.useOptimistic=function(L,tt){return I.H.useOptimistic(L,tt)},re.useReducer=function(L,tt,xt){return I.H.useReducer(L,tt,xt)},re.useRef=function(L){return I.H.useRef(L)},re.useState=function(L){return I.H.useState(L)},re.useSyncExternalStore=function(L,tt,xt){return I.H.useSyncExternalStore(L,tt,xt)},re.useTransition=function(){return I.H.useTransition()},re.version="19.1.0",re}var Kg;function od(){return Kg||(Kg=1,Bf.exports=kx()),Bf.exports}var En=od();const xr=Hx(En);var If={exports:{}},So={},Ff={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function Xx(){return Qg||(Qg=1,function(s){function t(z,Z){var Y=z.length;z.push(Z);t:for(;0<Y;){var Et=Y-1>>>1,L=z[Et];if(0<l(L,Z))z[Et]=Z,z[Y]=L,Y=Et;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Z=z[0],Y=z.pop();if(Y!==Z){z[0]=Y;t:for(var Et=0,L=z.length,tt=L>>>1;Et<tt;){var xt=2*(Et+1)-1,yt=z[xt],Q=xt+1,mt=z[Q];if(0>l(yt,Y))Q<L&&0>l(mt,yt)?(z[Et]=mt,z[Q]=Y,Et=Q):(z[Et]=yt,z[xt]=Y,Et=xt);else if(Q<L&&0>l(mt,Y))z[Et]=mt,z[Q]=Y,Et=Q;else break t}}return Z}function l(z,Z){var Y=z.sortIndex-Z.sortIndex;return Y!==0?Y:z.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,x=3,M=!1,T=!1,w=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=z)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function I(z){if(w=!1,C(z),!T)if(i(m)!==null)T=!0,F||(F=!0,lt());else{var Z=i(p);Z!==null&&dt(I,Z.startTime-z)}}var F=!1,B=-1,X=5,D=-1;function R(){return y?!0:!(s.unstable_now()-D<X)}function G(){if(y=!1,F){var z=s.unstable_now();D=z;var Z=!0;try{t:{T=!1,w&&(w=!1,N(B),B=-1),M=!0;var Y=x;try{e:{for(C(z),v=i(m);v!==null&&!(v.expirationTime>z&&R());){var Et=v.callback;if(typeof Et=="function"){v.callback=null,x=v.priorityLevel;var L=Et(v.expirationTime<=z);if(z=s.unstable_now(),typeof L=="function"){v.callback=L,C(z),Z=!0;break e}v===i(m)&&r(m),C(z)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var tt=i(p);tt!==null&&dt(I,tt.startTime-z),Z=!1}}break t}finally{v=null,x=Y,M=!1}Z=void 0}}finally{Z?lt():F=!1}}}var lt;if(typeof U=="function")lt=function(){U(G)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,vt=ot.port2;ot.port1.onmessage=G,lt=function(){vt.postMessage(null)}}else lt=function(){g(G,0)};function dt(z,Z){B=g(function(){z(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var Y=x;x=Z;try{return z()}finally{x=Y}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=x;x=z;try{return Z()}finally{x=Y}},s.unstable_scheduleCallback=function(z,Z,Y){var Et=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Et+Y:Et):Y=Et,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,z={id:_++,callback:Z,priorityLevel:z,startTime:Y,expirationTime:L,sortIndex:-1},Y>Et?(z.sortIndex=Y,t(p,z),i(m)===null&&z===i(p)&&(w?(N(B),B=-1):w=!0,dt(I,Y-Et))):(z.sortIndex=L,t(m,z),T||M||(T=!0,F||(F=!0,lt()))),z},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(z){var Z=x;return function(){var Y=x;x=Z;try{return z.apply(this,arguments)}finally{x=Y}}}}(Hf)),Hf}var Jg;function Wx(){return Jg||(Jg=1,Ff.exports=Xx()),Ff.exports}var Gf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function qx(){if($g)return Rn;$g=1;var s=od();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Rn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var t_;function Yx(){if(t_)return Gf.exports;t_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Gf.exports=qx(),Gf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function jx(){if(e_)return So;e_=1;var s=Wx(),t=od(),i=Yx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===o)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,b=c.child;b;){if(b===a){S=!0,a=c,o=f;break}if(b===o){S=!0,o=c,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,o=c;break}if(b===o){S=!0,o=f,a=c;break}b=b.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case w:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var dt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Et=[],L=-1;function tt(e){return{current:e}}function xt(e){0>L||(e.current=Et[L],Et[L]=null,L--)}function yt(e,n){L++,Et[L]=e.current,e.current=n}var Q=tt(null),mt=tt(null),Mt=tt(null),Rt=tt(null);function wt(e,n){switch(yt(Mt,n),yt(mt,e),yt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?yg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=yg(n),e=Mg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Q),yt(Q,e)}function oe(){xt(Q),xt(mt),xt(Mt)}function Qt(e){e.memoizedState!==null&&yt(Rt,e);var n=Q.current,a=Mg(n,e.type);n!==a&&(yt(mt,e),yt(Q,a))}function Le(e){mt.current===e&&(xt(Q),xt(mt)),Rt.current===e&&(xt(Rt),po._currentValue=Y)}var Ie=Object.prototype.hasOwnProperty,me=s.unstable_scheduleCallback,H=s.unstable_cancelCallback,_n=s.unstable_shouldYield,ye=s.unstable_requestPaint,he=s.unstable_now,Vt=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,jt=s.unstable_UserBlockingPriority,ae=s.unstable_NormalPriority,Ze=s.unstable_LowPriority,O=s.unstable_IdlePriority,E=s.log,et=s.unstable_setDisableYieldValue,ft=null,pt=null;function ct(e){if(typeof E=="function"&&et(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ft,e)}catch{}}var Pt=Math.clz32?Math.clz32:kt,Ut=Math.log,Gt=Math.LN2;function kt(e){return e>>>=0,e===0?32:31-(Ut(e)/Gt|0)|0}var St=256,zt=4194304;function qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=qt(o):(S&=b,S!==0?c=qt(S):a||(a=b&~e,a!==0&&(c=qt(a))))):(b=o&~f,b!==0?c=qt(b):S!==0?c=qt(S):a||(a=o&~e,a!==0&&(c=qt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Nt(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,a,o,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,P=e.expirationTimes,$=e.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Pt(a),gt=1<<ut;b[ut]=0,P[ut]=-1;var nt=$[ut];if(nt!==null)for($[ut]=null,ut=0;ut<nt.length;ut++){var at=nt[ut];at!==null&&(at.lane&=-536870913)}a&=~gt}o!==0&&_t(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Ft(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function ne(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Gg(e.type))}function Gn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var fn=Math.random().toString(36).slice(2),rn="__reactFiber$"+fn,vn="__reactProps$"+fn,Nn="__reactContainer$"+fn,Va="__reactEvents$"+fn,Bo="__reactListeners$"+fn,Io="__reactHandles$"+fn,ka="__reactResources$"+fn,ra="__reactMarker$"+fn;function sa(e){delete e[rn],delete e[vn],delete e[Va],delete e[Bo],delete e[Io]}function Ci(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Nn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ag(e);e!==null;){if(a=e[rn])return a;e=Ag(e)}return n}e=a,a=e.parentNode}return null}function wi(e){if(e=e[rn]||e[Nn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Xa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function oa(e){var n=e[ka];return n||(n=e[ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(e){e[ra]=!0}var Fo=new Set,Ho={};function Di(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(Ho[e]=n,e=0;e<n.length;e++)Fo.add(n[e])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},st={};function j(e){return Ie.call(st,e)?!0:Ie.call(rt,e)?!1:q.test(e)?st[e]=!0:(rt[e]=!0,!1)}function Tt(e,n,a){if(j(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Dt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var It,$t;function Zt(e){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+$t}var Xt=!1;function ce(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(at){var nt=at}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(at){nt=at}e.call(gt.prototype)}}else{try{throw Error()}catch(at){nt=at}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(at){if(at&&nt&&typeof at.stack=="string")return[at.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var P=S.split(`
`),$=b.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===$.length)for(o=P.length-1,c=$.length-1;1<=o&&0<=c&&P[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==$[c]){var ut=`
`+P[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=c);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Zt(a):""}function Ae(e){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Zt("Activity");default:return""}}function Ge(e){try{var n="";do n+=Ae(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(e){var n=ve(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){e._valueTracker||(e._valueTracker=Kt(e))}function Me(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ve(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var la=/[\n"\\]/g;function Ve(e){return e.replace(la,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ui(e,n,a,o,c,f,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Tn(e,S,_e(n)):a!=null?Tn(e,S,_e(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+_e(b):e.removeAttribute("name")}function Fe(e,n,a,o,c,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Tn(e,n,a){n==="number"&&bn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sn(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function hn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function xn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(dt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function xi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Md(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&yd(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&yd(e,f,n[f])}function Oc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(e){return F0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Pc=null;function zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mr=null,Er=null;function Ed(e){var n=wi(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ui(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[vn]||null;if(!c)throw Error(r(90));Ui(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Me(o)}break t;case"textarea":hn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(e,!!a.multiple,n,!1)}}}var Bc=!1;function bd(e,n,a){if(Bc)return e(n,a);Bc=!0;try{var o=e(n);return o}finally{if(Bc=!1,(Mr!==null||Er!==null)&&(Al(),Mr&&(n=Mr,e=Er,Er=Mr=null,Ed(n),e)))for(n=0;n<e.length;n++)Ed(e[n])}}function As(e,n){var a=e.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=!1;if(Li)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Ic=!1}var ca=null,Fc=null,Vo=null;function Td(){if(Vo)return Vo;var e,n=Fc,a=n.length,o,c="value"in ca?ca.value:ca.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return Vo=c.slice(e,1<o?1-o:void 0)}function ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function Ad(){return!1}function Ln(e){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:Ad,this.isPropagationStopped=Ad,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=Ln(Wa),Cs=_({},Wa,{view:0,detail:0}),H0=Ln(Cs),Hc,Gc,ws,qo=_({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ws&&(ws&&e.type==="mousemove"?(Hc=e.screenX-ws.screenX,Gc=e.screenY-ws.screenY):Gc=Hc=0,ws=e),Hc)},movementY:function(e){return"movementY"in e?e.movementY:Gc}}),Rd=Ln(qo),G0=_({},qo,{dataTransfer:0}),V0=Ln(G0),k0=_({},Cs,{relatedTarget:0}),Vc=Ln(k0),X0=_({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=Ln(X0),q0=_({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y0=Ln(q0),j0=_({},Wa,{data:0}),Cd=Ln(j0),Z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Q0[e])?!!n[e]:!1}function kc(){return J0}var $0=_({},Cs,{key:function(e){if(e.key){var n=Z0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?K0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tv=Ln($0),ev=_({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Ln(ev),nv=_({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),iv=Ln(nv),av=_({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=Ln(av),sv=_({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ov=Ln(sv),lv=_({},Wa,{newState:0,oldState:0}),cv=Ln(lv),uv=[9,13,27,32],Xc=Li&&"CompositionEvent"in window,Ds=null;Li&&"documentMode"in document&&(Ds=document.documentMode);var fv=Li&&"TextEvent"in window&&!Ds,Dd=Li&&(!Xc||Ds&&8<Ds&&11>=Ds),Ud=" ",Nd=!1;function Ld(e,n){switch(e){case"keyup":return uv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function hv(e,n){switch(e){case"compositionend":return Od(n);case"keypress":return n.which!==32?null:(Nd=!0,Ud);case"textInput":return e=n.data,e===Ud&&Nd?null:e;default:return null}}function dv(e,n){if(br)return e==="compositionend"||!Xc&&Ld(e,n)?(e=Td(),Vo=Fc=ca=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dd&&n.locale!=="ko"?null:n.data;default:return null}}var pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!pv[e.type]:n==="textarea"}function zd(e,n,a,o){Mr?Er?Er.push(o):Er=[o]:Mr=o,n=Nl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Us=null,Ns=null;function mv(e){gg(e,0)}function Yo(e){var n=Xa(e);if(Me(n))return e}function Bd(e,n){if(e==="change")return n}var Id=!1;if(Li){var Wc;if(Li){var qc="oninput"in document;if(!qc){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),qc=typeof Fd.oninput=="function"}Wc=qc}else Wc=!1;Id=Wc&&(!document.documentMode||9<document.documentMode)}function Hd(){Us&&(Us.detachEvent("onpropertychange",Gd),Ns=Us=null)}function Gd(e){if(e.propertyName==="value"&&Yo(Ns)){var n=[];zd(n,Ns,e,zc(e)),bd(mv,n)}}function gv(e,n,a){e==="focusin"?(Hd(),Us=n,Ns=a,Us.attachEvent("onpropertychange",Gd)):e==="focusout"&&Hd()}function _v(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Ns)}function vv(e,n){if(e==="click")return Yo(n)}function xv(e,n){if(e==="input"||e==="change")return Yo(n)}function Sv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vn=typeof Object.is=="function"?Object.is:Sv;function Ls(e,n){if(Vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ie.call(n,c)||!Vn(e[c],n[c]))return!1}return!0}function Vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kd(e,n){var a=Vd(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vd(a)}}function Xd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=bn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=bn(e.document)}return n}function Yc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var yv=Li&&"documentMode"in document&&11>=document.documentMode,Tr=null,jc=null,Os=null,Zc=!1;function qd(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zc||Tr==null||Tr!==bn(o)||(o=Tr,"selectionStart"in o&&Yc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Os&&Ls(Os,o)||(Os=o,o=Nl(jc,"onSelect"),0<o.length&&(n=new Wo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Tr)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ar={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Kc={},Yd={};Li&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Ya(e){if(Kc[e])return Kc[e];if(!Ar[e])return e;var n=Ar[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Yd)return Kc[e]=n[a];return e}var jd=Ya("animationend"),Zd=Ya("animationiteration"),Kd=Ya("animationstart"),Mv=Ya("transitionrun"),Ev=Ya("transitionstart"),bv=Ya("transitioncancel"),Qd=Ya("transitionend"),Jd=new Map,Qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qc.push("scrollEnd");function li(e,n){Jd.set(e,n),Di(n,[e])}var $d=new WeakMap;function Jn(e,n){if(typeof e=="object"&&e!==null){var a=$d.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ge(n)},$d.set(e,n),n)}return{value:e,source:n,stack:Ge(n)}}var $n=[],Rr=0,Jc=0;function jo(){for(var e=Rr,n=Jc=Rr=0;n<e;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&tp(a,c,f)}}function Zo(e,n,a,o){$n[Rr++]=e,$n[Rr++]=n,$n[Rr++]=a,$n[Rr++]=o,Jc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function $c(e,n,a,o){return Zo(e,n,a,o),Ko(e)}function Cr(e,n){return Zo(e,null,null,n),Ko(e)}function tp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pt(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function Ko(e){if(50<ro)throw ro=0,sf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var wr={};function Tv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,a,o){return new Tv(e,n,a,o)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,n){var a=e.alternate;return a===null?(a=kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ep(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Qo(e,n,a,o,c,f){var S=0;if(o=e,typeof e=="function")tu(e)&&(S=1);else if(typeof e=="string")S=Rx(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=kn(31,a,n,c),e.elementType=D,e.lanes=f,e;case T:return ja(a.children,c,f,n);case w:S=8,c|=24;break;case y:return e=kn(12,a,n,c|2),e.elementType=y,e.lanes=f,e;case I:return e=kn(13,a,n,c),e.elementType=I,e.lanes=f,e;case F:return e=kn(19,a,n,c),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case U:S=10;break t;case N:S=9;break t;case C:S=11;break t;case B:S=14;break t;case X:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=kn(S,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function ja(e,n,a,o){return e=kn(7,e,o,n),e.lanes=a,e}function eu(e,n,a){return e=kn(6,e,null,n),e.lanes=a,e}function nu(e,n,a){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Dr=[],Ur=0,Jo=null,$o=0,ti=[],ei=0,Za=null,Pi=1,zi="";function Ka(e,n){Dr[Ur++]=$o,Dr[Ur++]=Jo,Jo=e,$o=n}function np(e,n,a){ti[ei++]=Pi,ti[ei++]=zi,ti[ei++]=Za,Za=e;var o=Pi;e=zi;var c=32-Pt(o)-1;o&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Pi=1<<32-Pt(n)+c|a<<c|o,zi=f+e}else Pi=1<<f|a<<c|o,zi=e}function iu(e){e.return!==null&&(Ka(e,1),np(e,1,0))}function au(e){for(;e===Jo;)Jo=Dr[--Ur],Dr[Ur]=null,$o=Dr[--Ur],Dr[Ur]=null;for(;e===Za;)Za=ti[--ei],ti[ei]=null,zi=ti[--ei],ti[ei]=null,Pi=ti[--ei],ti[ei]=null}var Dn=null,Ye=null,Re=!1,Qa=null,Si=!1,ru=Error(r(519));function Ja(e){var n=Error(r(418,""));throw Bs(Jn(n,e)),ru}function ip(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[vn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<oo.length;a++)pe(oo[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Fe(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),qe(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),xn(n,o.value,o.defaultValue,o.children),qe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Sg(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Ll),n=!0):n=!1,n||Ja(e)}function ap(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Dn=Dn.return}}function Ps(e){if(e!==Dn)return!1;if(!Re)return ap(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Mf(e.type,e.memoizedProps)),a=!a),a&&Ye&&Ja(e),ap(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ye=ui(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ye=null}}else n===27?(n=Ye,Ta(e.type)?(e=Af,Af=null,Ye=e):Ye=n):Ye=Dn?ui(e.stateNode.nextSibling):null;return!0}function zs(){Ye=Dn=null,Re=!1}function rp(){var e=Qa;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),Qa=null),e}function Bs(e){Qa===null?Qa=[e]:Qa.push(e)}var su=tt(null),$a=null,Bi=null;function ua(e,n,a){yt(su,n._currentValue),n._currentValue=a}function Ii(e){e._currentValue=su.current,xt(su)}function ou(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function lu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var P=0;P<n.length;P++)if(b.context===n[P]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),ou(f.return,a,e),o||(S=null);break t}f=b.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),ou(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Is(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var b=c.type;Vn(c.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(c===Rt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(po):e=[po])}c=c.return}e!==null&&lu(n,e,a,o),n.flags|=262144}function tl(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tr(e){$a=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return sp($a,e)}function el(e,n){return $a===null&&tr(e),sp(e,n)}function sp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(e===null)throw Error(r(308));Bi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Bi=Bi.next=n;return a}var Av=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Rv=s.unstable_scheduleCallback,Cv=s.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new Av,data:new Map,refCount:0}}function Fs(e){e.refCount--,e.refCount===0&&Rv(Cv,function(){e.controller.abort()})}var Hs=null,uu=0,Nr=0,Lr=null;function wv(e,n){if(Hs===null){var a=Hs=[];uu=0,Nr=df(),Lr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return uu++,n.then(op,op),n}function op(){if(--uu===0&&Hs!==null){Lr!==null&&(Lr.status="fulfilled");var e=Hs;Hs=null,Nr=0,Lr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Dv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var lp=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&wv(e,n),lp!==null&&lp(e,n)};var er=tt(null);function fu(){var e=er.current;return e!==null?e:ke.pooledCache}function nl(e,n){n===null?yt(er,er.current):yt(er,n.pool)}function cp(){var e=fu();return e===null?null:{parent:on._currentValue,pool:e}}var Gs=Error(r(460)),up=Error(r(474)),il=Error(r(542)),hu={then:function(){}};function fp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function al(){}function hp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(al,al),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pp(e),e;default:if(typeof n.status=="string")n.then(al,al);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pp(e),e}throw Vs=n,Gs}}var Vs=null;function dp(){if(Vs===null)throw Error(r(459));var e=Vs;return Vs=null,e}function pp(e){if(e===Gs||e===il)throw Error(r(483))}var fa=!1;function du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Ko(e),tp(e,null,a),n}return Zo(e,o,n,a),Ko(e)}function ks(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}function mu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var gu=!1;function Xs(){if(gu){var e=Lr;if(e!==null)throw e}}function Ws(e,n,a,o){gu=!1;var c=e.updateQueue;fa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var P=b,$=P.next;P.next=null,S===null?f=$:S.next=$,S=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,b=ut.lastBaseUpdate,b!==S&&(b===null?ut.firstBaseUpdate=$:b.next=$,ut.lastBaseUpdate=P))}if(f!==null){var gt=c.baseState;S=0,ut=$=P=null,b=f;do{var nt=b.lane&-536870913,at=nt!==b.lane;if(at?(Se&nt)===nt:(o&nt)===nt){nt!==0&&nt===Nr&&(gu=!0),ut!==null&&(ut=ut.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=e,Jt=b;nt=n;var ze=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){gt=ee.call(ze,gt,nt);break t}gt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,nt=typeof ee=="function"?ee.call(ze,gt,nt):ee,nt==null)break t;gt=_({},gt,nt);break t;case 2:fa=!0}}nt=b.callback,nt!==null&&(e.flags|=64,at&&(e.flags|=8192),at=c.callbacks,at===null?c.callbacks=[nt]:at.push(nt))}else at={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ut===null?($=ut=at,P=gt):ut=ut.next=at,S|=nt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;at=b,b=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);ut===null&&(P=gt),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),ya|=S,e.lanes=S,e.memoizedState=gt}}function mp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function gp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mp(a[e],n)}var Or=tt(null),rl=tt(0);function _p(e,n){e=Wi,yt(rl,e),yt(Or,n),Wi=e|n.baseLanes}function _u(){yt(rl,Wi),yt(Or,Or.current)}function vu(){Wi=rl.current,xt(Or),xt(rl)}var pa=0,ue=null,Oe=null,en=null,sl=!1,Pr=!1,nr=!1,ol=0,qs=0,zr=null,Uv=0;function Ke(){throw Error(r(321))}function xu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Vn(e[a],n[a]))return!1;return!0}function Su(e,n,a,o,c,f){return pa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?tm:em,nr=!1,f=a(o,c),nr=!1,Pr&&(f=xp(n,a,o,c)),vp(e),f}function vp(e){z.H=dl;var n=Oe!==null&&Oe.next!==null;if(pa=0,en=Oe=ue=null,sl=!1,qs=0,zr=null,n)throw Error(r(300));e===null||dn||(e=e.dependencies,e!==null&&tl(e)&&(dn=!0))}function xp(e,n,a,o){ue=e;var c=0;do{if(Pr&&(zr=null),qs=0,Pr=!1,25<=c)throw Error(r(301));if(c+=1,en=Oe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Iv,f=n(a,o)}while(Pr);return f}function Nv(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?Ys(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ue.flags|=1024),n}function yu(){var e=ol!==0;return ol=0,e}function Mu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Eu(e){if(sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}sl=!1}pa=0,en=Oe=ue=null,Pr=!1,qs=ol=0,zr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=e:en=en.next=e,en}function nn(){if(Oe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,Oe=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},en===null?ue.memoizedState=en=e:en=en.next=e}return en}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ys(e){var n=qs;return qs+=1,zr===null&&(zr=[]),e=hp(zr,e,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?tm:em),e}function ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ys(e);if(e.$$typeof===U)return An(e)}throw Error(r(438,String(e)))}function Tu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function Fi(e,n){return typeof n=="function"?n(e):n}function cl(e){var n=nn();return Au(n,Oe,e)}function Au(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=S=null,P=null,$=n,ut=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(Se&gt)===gt:(pa&gt)===gt){var nt=$.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Nr&&(ut=!0);else if((pa&nt)===nt){$=$.next,nt===Nr&&(ut=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(b=P=gt,S=f):P=P.next=gt,ue.lanes|=nt,ya|=nt;gt=$.action,nr&&a(f,gt),f=$.hasEagerState?$.eagerState:a(f,gt)}else nt={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(b=P=nt,S=f):P=P.next=nt,ue.lanes|=gt,ya|=gt;$=$.next}while($!==null&&$!==n);if(P===null?S=f:P.next=b,!Vn(f,e.memoizedState)&&(dn=!0,ut&&(a=Lr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ru(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Vn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Sp(e,n,a){var o=ue,c=nn(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Vn((Oe||c).memoizedState,a);S&&(c.memoizedState=a,dn=!0),c=c.queue;var b=Ep.bind(null,o,c,e);if(js(2048,8,b,[e]),c.getSnapshot!==n||S||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Br(9,ul(),Mp.bind(null,o,c,a,n),null),ke===null)throw Error(r(349));f||(pa&124)!==0||yp(o,n,a)}return a}function yp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=bu(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Mp(e,n,a,o){n.value=a,n.getSnapshot=o,bp(n)&&Tp(e)}function Ep(e,n,a){return a(function(){bp(n)&&Tp(e)})}function bp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Vn(e,a)}catch{return!0}}function Tp(e){var n=Cr(e,2);n!==null&&jn(n,e,2)}function Cu(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),nr){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},n}function Ap(e,n,a,o){return e.baseState=a,Au(e,Oe,typeof o=="function"?o:Fi)}function Lv(e,n,a,o,c){if(hl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Rp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Rp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=z.T,S={};z.T=S;try{var b=a(c,o),P=z.S;P!==null&&P(S,b),Cp(e,n,b)}catch($){wu(e,n,$)}finally{z.T=f}}else try{f=a(c,o),Cp(e,n,f)}catch($){wu(e,n,$)}}function Cp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){wp(e,n,o)},function(o){return wu(e,n,o)}):wp(e,n,a)}function wp(e,n,a){n.status="fulfilled",n.value=a,Dp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Rp(e,a)))}function wu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Dp(n),n=n.next;while(n!==o)}e.action=null}function Dp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Up(e,n){return n}function Np(e,n){if(Re){var a=ke.formState;if(a!==null){t:{var o=ue;if(Re){if(Ye){e:{for(var c=Ye,f=Si;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=ui(c.nextSibling),o=c.data==="F!";break t}}Ja(o)}o=!1}o&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Up,lastRenderedState:n},a.queue=o,a=Qp.bind(null,ue,o),o.dispatch=a,o=Cu(!1),f=Ou.bind(null,ue,!1,o.queue),o=On(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Lv.bind(null,ue,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Lp(e){var n=nn();return Op(n,Oe,e)}function Op(e,n,a){if(n=Au(e,n,Up)[0],e=cl(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ys(n)}catch(S){throw S===Gs?il:S}else o=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Br(9,ul(),Ov.bind(null,c,a),null)),[o,f,e]}function Ov(e,n){e.action=n}function Pp(e){var n=nn(),a=Oe;if(a!==null)return Op(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Br(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=bu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function ul(){return{destroy:void 0,resource:void 0}}function zp(){return nn().memoizedState}function fl(e,n,a,o){var c=On();o=o===void 0?null:o,ue.flags|=e,c.memoizedState=Br(1|n,ul(),a,o)}function js(e,n,a,o){var c=nn();o=o===void 0?null:o;var f=c.memoizedState.inst;Oe!==null&&o!==null&&xu(o,Oe.memoizedState.deps)?c.memoizedState=Br(n,f,a,o):(ue.flags|=e,c.memoizedState=Br(1|n,f,a,o))}function Bp(e,n){fl(8390656,8,e,n)}function Ip(e,n){js(2048,8,e,n)}function Fp(e,n){return js(4,2,e,n)}function Hp(e,n){return js(4,4,e,n)}function Gp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vp(e,n,a){a=a!=null?a.concat([e]):null,js(4,4,Gp.bind(null,n,e),a)}function Du(){}function kp(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&xu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Xp(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&xu(n,o[1]))return o[0];if(o=e(),nr){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o}function Uu(e,n,a){return a===void 0||(pa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Ym(),ue.lanes|=e,ya|=e,a)}function Wp(e,n,a,o){return Vn(a,n)?a:Or.current!==null?(e=Uu(e,a,o),Vn(e,n)||(dn=!0),e):(pa&42)===0?(dn=!0,e.memoizedState=a):(e=Ym(),ue.lanes|=e,ya|=e,n)}function qp(e,n,a,o,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=z.T,b={};z.T=b,Ou(e,!1,n,a);try{var P=c(),$=z.S;if($!==null&&$(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=Dv(P,o);Zs(e,n,ut,Yn(e))}else Zs(e,n,o,Yn(e))}catch(gt){Zs(e,n,{then:function(){},status:"rejected",reason:gt},Yn())}finally{Z.p=f,z.T=S}}function Pv(){}function Nu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=Yp(e).queue;qp(e,c,n,Y,a===null?Pv:function(){return jp(e),a(o)})}function Yp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function jp(e){var n=Yp(e).next.queue;Zs(e,n,{},Yn())}function Lu(){return An(po)}function Zp(){return nn().memoizedState}function Kp(){return nn().memoizedState}function zv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();e=ha(a);var o=da(n,e,a);o!==null&&(jn(o,n,a),ks(o,n,a)),n={cache:cu()},e.payload=n;return}n=n.return}}function Bv(e,n,a){var o=Yn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(e)?Jp(n,a):(a=$c(e,n,a,o),a!==null&&(jn(a,e,o),$p(a,n,o)))}function Qp(e,n,a){var o=Yn();Zs(e,n,a,o)}function Zs(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(e))Jp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(c.hasEagerState=!0,c.eagerState=b,Vn(b,S))return Zo(e,n,c,0),ke===null&&jo(),!1}catch{}finally{}if(a=$c(e,n,c,o),a!==null)return jn(a,e,o),$p(a,n,o),!0}return!1}function Ou(e,n,a,o){if(o={lane:2,revertLane:df(),action:o,hasEagerState:!1,eagerState:null,next:null},hl(e)){if(n)throw Error(r(479))}else n=$c(e,a,o,2),n!==null&&jn(n,e,2)}function hl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Jp(e,n){Pr=sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function $p(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}var dl={readContext:An,use:ll,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},tm={readContext:An,use:ll,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Bp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,fl(4194308,4,Gp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return fl(4194308,4,e,n)},useInsertionEffect:function(e,n){fl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var o=e();if(nr){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=On();if(a!==void 0){var c=a(n);if(nr){ct(!0);try{a(n)}finally{ct(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Bv.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=Cu(e);var n=e.queue,a=Qp.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Du,useDeferredValue:function(e,n){var a=On();return Uu(a,e,n)},useTransition:function(){var e=Cu(!1);return e=qp.bind(null,ue,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,c=On();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Se&124)!==0||yp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Bp(Ep.bind(null,o,f,e),[e]),o.flags|=2048,Br(9,ul(),Mp.bind(null,o,f,a,n),null),a},useId:function(){var e=On(),n=ke.identifierPrefix;if(Re){var a=zi,o=Pi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Uv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Lu,useFormState:Np,useActionState:Np,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ou.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Tu,useCacheRefresh:function(){return On().memoizedState=zv.bind(null,ue)}},em={readContext:An,use:ll,useCallback:kp,useContext:An,useEffect:Ip,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Hp,useMemo:Xp,useReducer:cl,useRef:zp,useState:function(){return cl(Fi)},useDebugValue:Du,useDeferredValue:function(e,n){var a=nn();return Wp(a,Oe.memoizedState,e,n)},useTransition:function(){var e=cl(Fi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Ys(e),n]},useSyncExternalStore:Sp,useId:Zp,useHostTransitionStatus:Lu,useFormState:Lp,useActionState:Lp,useOptimistic:function(e,n){var a=nn();return Ap(a,Oe,e,n)},useMemoCache:Tu,useCacheRefresh:Kp},Iv={readContext:An,use:ll,useCallback:kp,useContext:An,useEffect:Ip,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Hp,useMemo:Xp,useReducer:Ru,useRef:zp,useState:function(){return Ru(Fi)},useDebugValue:Du,useDeferredValue:function(e,n){var a=nn();return Oe===null?Uu(a,e,n):Wp(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Ru(Fi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Ys(e),n]},useSyncExternalStore:Sp,useId:Zp,useHostTransitionStatus:Lu,useFormState:Pp,useActionState:Pp,useOptimistic:function(e,n){var a=nn();return Oe!==null?Ap(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:Kp},Ir=null,Ks=0;function pl(e){var n=Ks;return Ks+=1,Ir===null&&(Ir=[]),hp(Ir,e,n)}function Qs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function nm(e){var n=e._init;return n(e._payload)}function im(e){function n(W,V){if(e){var K=W.deletions;K===null?(W.deletions=[V],W.flags|=16):K.push(V)}}function a(W,V){if(!e)return null;for(;V!==null;)n(W,V),V=V.sibling;return null}function o(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function c(W,V){return W=Oi(W,V),W.index=0,W.sibling=null,W}function f(W,V,K){return W.index=K,e?(K=W.alternate,K!==null?(K=K.index,K<V?(W.flags|=67108866,V):K):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function S(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function b(W,V,K,ht){return V===null||V.tag!==6?(V=eu(K,W.mode,ht),V.return=W,V):(V=c(V,K),V.return=W,V)}function P(W,V,K,ht){var Ht=K.type;return Ht===T?ut(W,V,K.props.children,ht,K.key):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&nm(Ht)===V.type)?(V=c(V,K.props),Qs(V,K),V.return=W,V):(V=Qo(K.type,K.key,K.props,null,W.mode,ht),Qs(V,K),V.return=W,V)}function $(W,V,K,ht){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=nu(K,W.mode,ht),V.return=W,V):(V=c(V,K.children||[]),V.return=W,V)}function ut(W,V,K,ht,Ht){return V===null||V.tag!==7?(V=ja(K,W.mode,ht,Ht),V.return=W,V):(V=c(V,K),V.return=W,V)}function gt(W,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=eu(""+V,W.mode,K),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return K=Qo(V.type,V.key,V.props,null,W.mode,K),Qs(K,V),K.return=W,K;case M:return V=nu(V,W.mode,K),V.return=W,V;case X:var ht=V._init;return V=ht(V._payload),gt(W,V,K)}if(dt(V)||lt(V))return V=ja(V,W.mode,K,null),V.return=W,V;if(typeof V.then=="function")return gt(W,pl(V),K);if(V.$$typeof===U)return gt(W,el(W,V),K);ml(W,V)}return null}function nt(W,V,K,ht){var Ht=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ht!==null?null:b(W,V,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ht?P(W,V,K,ht):null;case M:return K.key===Ht?$(W,V,K,ht):null;case X:return Ht=K._init,K=Ht(K._payload),nt(W,V,K,ht)}if(dt(K)||lt(K))return Ht!==null?null:ut(W,V,K,ht,null);if(typeof K.then=="function")return nt(W,V,pl(K),ht);if(K.$$typeof===U)return nt(W,V,el(W,K),ht);ml(W,K)}return null}function at(W,V,K,ht,Ht){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(K)||null,b(V,W,""+ht,Ht);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case x:return W=W.get(ht.key===null?K:ht.key)||null,P(V,W,ht,Ht);case M:return W=W.get(ht.key===null?K:ht.key)||null,$(V,W,ht,Ht);case X:var fe=ht._init;return ht=fe(ht._payload),at(W,V,K,ht,Ht)}if(dt(ht)||lt(ht))return W=W.get(K)||null,ut(V,W,ht,Ht,null);if(typeof ht.then=="function")return at(W,V,K,pl(ht),Ht);if(ht.$$typeof===U)return at(W,V,K,el(V,ht),Ht);ml(V,ht)}return null}function ee(W,V,K,ht){for(var Ht=null,fe=null,Wt=V,te=V=0,mn=null;Wt!==null&&te<K.length;te++){Wt.index>te?(mn=Wt,Wt=null):mn=Wt.sibling;var be=nt(W,Wt,K[te],ht);if(be===null){Wt===null&&(Wt=mn);break}e&&Wt&&be.alternate===null&&n(W,Wt),V=f(be,V,te),fe===null?Ht=be:fe.sibling=be,fe=be,Wt=mn}if(te===K.length)return a(W,Wt),Re&&Ka(W,te),Ht;if(Wt===null){for(;te<K.length;te++)Wt=gt(W,K[te],ht),Wt!==null&&(V=f(Wt,V,te),fe===null?Ht=Wt:fe.sibling=Wt,fe=Wt);return Re&&Ka(W,te),Ht}for(Wt=o(Wt);te<K.length;te++)mn=at(Wt,W,te,K[te],ht),mn!==null&&(e&&mn.alternate!==null&&Wt.delete(mn.key===null?te:mn.key),V=f(mn,V,te),fe===null?Ht=mn:fe.sibling=mn,fe=mn);return e&&Wt.forEach(function(Da){return n(W,Da)}),Re&&Ka(W,te),Ht}function Jt(W,V,K,ht){if(K==null)throw Error(r(151));for(var Ht=null,fe=null,Wt=V,te=V=0,mn=null,be=K.next();Wt!==null&&!be.done;te++,be=K.next()){Wt.index>te?(mn=Wt,Wt=null):mn=Wt.sibling;var Da=nt(W,Wt,be.value,ht);if(Da===null){Wt===null&&(Wt=mn);break}e&&Wt&&Da.alternate===null&&n(W,Wt),V=f(Da,V,te),fe===null?Ht=Da:fe.sibling=Da,fe=Da,Wt=mn}if(be.done)return a(W,Wt),Re&&Ka(W,te),Ht;if(Wt===null){for(;!be.done;te++,be=K.next())be=gt(W,be.value,ht),be!==null&&(V=f(be,V,te),fe===null?Ht=be:fe.sibling=be,fe=be);return Re&&Ka(W,te),Ht}for(Wt=o(Wt);!be.done;te++,be=K.next())be=at(Wt,W,te,be.value,ht),be!==null&&(e&&be.alternate!==null&&Wt.delete(be.key===null?te:be.key),V=f(be,V,te),fe===null?Ht=be:fe.sibling=be,fe=be);return e&&Wt.forEach(function(Fx){return n(W,Fx)}),Re&&Ka(W,te),Ht}function ze(W,V,K,ht){if(typeof K=="object"&&K!==null&&K.type===T&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ht=K.key;V!==null;){if(V.key===Ht){if(Ht=K.type,Ht===T){if(V.tag===7){a(W,V.sibling),ht=c(V,K.props.children),ht.return=W,W=ht;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&nm(Ht)===V.type){a(W,V.sibling),ht=c(V,K.props),Qs(ht,K),ht.return=W,W=ht;break t}a(W,V);break}else n(W,V);V=V.sibling}K.type===T?(ht=ja(K.props.children,W.mode,ht,K.key),ht.return=W,W=ht):(ht=Qo(K.type,K.key,K.props,null,W.mode,ht),Qs(ht,K),ht.return=W,W=ht)}return S(W);case M:t:{for(Ht=K.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(W,V.sibling),ht=c(V,K.children||[]),ht.return=W,W=ht;break t}else{a(W,V);break}else n(W,V);V=V.sibling}ht=nu(K,W.mode,ht),ht.return=W,W=ht}return S(W);case X:return Ht=K._init,K=Ht(K._payload),ze(W,V,K,ht)}if(dt(K))return ee(W,V,K,ht);if(lt(K)){if(Ht=lt(K),typeof Ht!="function")throw Error(r(150));return K=Ht.call(K),Jt(W,V,K,ht)}if(typeof K.then=="function")return ze(W,V,pl(K),ht);if(K.$$typeof===U)return ze(W,V,el(W,K),ht);ml(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(W,V.sibling),ht=c(V,K),ht.return=W,W=ht):(a(W,V),ht=eu(K,W.mode,ht),ht.return=W,W=ht),S(W)):a(W,V)}return function(W,V,K,ht){try{Ks=0;var Ht=ze(W,V,K,ht);return Ir=null,Ht}catch(Wt){if(Wt===Gs||Wt===il)throw Wt;var fe=kn(29,Wt,null,W.mode);return fe.lanes=ht,fe.return=W,fe}finally{}}}var Fr=im(!0),am=im(!1),ni=tt(null),yi=null;function ma(e){var n=e.alternate;yt(ln,ln.current&1),yt(ni,e),yi===null&&(n===null||Or.current!==null||n.memoizedState!==null)&&(yi=e)}function rm(e){if(e.tag===22){if(yt(ln,ln.current),yt(ni,e),yi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(yi=e)}}else ga()}function ga(){yt(ln,ln.current),yt(ni,ni.current)}function Hi(e){xt(ni),yi===e&&(yi=null),xt(ln)}var ln=tt(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Tf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Pu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Yn(),c=ha(o);c.payload=n,a!=null&&(c.callback=a),n=da(e,c,o),n!==null&&(jn(n,e,o),ks(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Yn(),c=ha(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(e,c,o),n!==null&&(jn(n,e,o),ks(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Yn(),o=ha(a);o.tag=2,n!=null&&(o.callback=n),n=da(e,o,a),n!==null&&(jn(n,e,a),ks(n,e,a))}};function sm(e,n,a,o,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ls(a,o)||!Ls(c,f):!0}function om(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&zu.enqueueReplaceState(n,n.state,null)}function ir(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var _l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function lm(e){_l(e)}function cm(e){console.error(e)}function um(e){_l(e)}function vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function fm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Bu(e,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(e,n)},a}function hm(e){return e=ha(e),e.tag=3,e}function dm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){fm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){fm(n,a,o),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Fv(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return yi===null?lf():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===hu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),uf(e,o,c)),!1;case 22:return a.flags|=65536,o===hu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),uf(e,o,c)),!1}throw Error(r(435,a.tag))}return uf(e,o,c),lf(),!1}if(Re)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==ru&&(e=Error(r(422),{cause:o}),Bs(Jn(e,a)))):(o!==ru&&(n=Error(r(423),{cause:o}),Bs(Jn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Jn(o,a),c=Bu(e.stateNode,o,c),mu(e,c),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:o});if(f=Jn(f,a),ao===null?ao=[f]:ao.push(f),je!==4&&(je=2),n===null)return!0;o=Jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Bu(a.stateNode,o,e),mu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=hm(c),dm(c,e,a,o),mu(a,c),!1}a=a.return}while(a!==null);return!1}var pm=Error(r(461)),dn=!1;function Sn(e,n,a,o){n.child=e===null?am(n,null,a,o):Fr(n,e.child,a,o)}function mm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return tr(n),o=Su(e,n,a,S,f,c),b=yu(),e!==null&&!dn?(Mu(e,n,c),Gi(e,n,c)):(Re&&b&&iu(n),n.flags|=1,Sn(e,n,o,c),n.child)}function gm(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_m(e,n,f,o,c)):(e=Qo(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Wu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ls,a(S,o)&&e.ref===n.ref)return Gi(e,n,c)}return n.flags|=1,e=Oi(f,o),e.ref=n.ref,e.return=n,n.child=e}function _m(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Ls(f,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=f,Wu(e,c))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,Gi(e,n,c)}return Iu(e,n,a,o,c)}function vm(e,n,a){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return xm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&nl(n,f!==null?f.cachePool:null),f!==null?_p(n,f):_u(),rm(n);else return n.lanes=n.childLanes=536870912,xm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(nl(n,f.cachePool),_p(n,f),ga(),n.memoizedState=null):(e!==null&&nl(n,null),_u(),ga());return Sn(e,n,c,a),n.child}function xm(e,n,a,o){var c=fu();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&nl(n,null),_u(),rm(n),e!==null&&Is(e,n,o,!0),null}function xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Iu(e,n,a,o,c){return tr(n),a=Su(e,n,a,o,void 0,c),o=yu(),e!==null&&!dn?(Mu(e,n,c),Gi(e,n,c)):(Re&&o&&iu(n),n.flags|=1,Sn(e,n,a,c),n.child)}function Sm(e,n,a,o,c,f){return tr(n),n.updateQueue=null,a=xp(n,o,a,c),vp(e),o=yu(),e!==null&&!dn?(Mu(e,n,f),Gi(e,n,f)):(Re&&o&&iu(n),n.flags|=1,Sn(e,n,a,f),n.child)}function ym(e,n,a,o,c){if(tr(n),n.stateNode===null){var f=wr,S=a.contextType;typeof S=="object"&&S!==null&&(f=An(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},du(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?An(S):wr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Pu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&zu.enqueueReplaceState(f,f.state,null),Ws(n,o,f,c),Xs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,P=ir(a,b);f.props=P;var $=f.context,ut=a.contextType;S=wr,typeof ut=="object"&&ut!==null&&(S=An(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==S)&&om(n,f,o,S),fa=!1;var nt=n.memoizedState;f.state=nt,Ws(n,o,f,c),Xs(),$=n.memoizedState,b||nt!==$||fa?(typeof gt=="function"&&(Pu(n,a,gt,o),$=n.memoizedState),(P=fa||sm(n,a,P,o,nt,$,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=S,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,pu(e,n),S=n.memoizedProps,ut=ir(a,S),f.props=ut,gt=n.pendingProps,nt=f.context,$=a.contextType,P=wr,typeof $=="object"&&$!==null&&(P=An($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==gt||nt!==P)&&om(n,f,o,P),fa=!1,nt=n.memoizedState,f.state=nt,Ws(n,o,f,c),Xs();var at=n.memoizedState;S!==gt||nt!==at||fa||e!==null&&e.dependencies!==null&&tl(e.dependencies)?(typeof b=="function"&&(Pu(n,a,b,o),at=n.memoizedState),(ut=fa||sm(n,a,ut,o,nt,at,P)||e!==null&&e.dependencies!==null&&tl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,at,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,at,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=P,o=ut):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,xl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Fr(n,e.child,null,c),n.child=Fr(n,null,a,c)):Sn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Gi(e,n,c),e}function Mm(e,n,a,o){return zs(),n.flags|=256,Sn(e,n,a,o),n.child}var Fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hu(e){return{baseLanes:e,cachePool:cp()}}function Gu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function Em(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?ma(n):ga(),Re){var b=Ye,P;if(P=b){t:{for(P=b,b=Si;P.nodeType!==8;){if(!b){b=null;break t}if(P=ui(P.nextSibling),P===null){b=null;break t}}b=P}b!==null?(n.memoizedState={dehydrated:b,treeContext:Za!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},P=kn(18,null,null,0),P.stateNode=b,P.return=n,n.child=P,Dn=n,Ye=null,P=!0):P=!1}P||Ja(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Tf(b)?n.lanes=32:n.lanes=536870912,null;Hi(n)}return b=o.children,o=o.fallback,c?(ga(),c=n.mode,b=Sl({mode:"hidden",children:b},c),o=ja(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=Hu(a),c.childLanes=Gu(e,S,a),n.memoizedState=Fu,o):(ma(n),Vu(n,b))}if(P=e.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=ku(e,n,a)):n.memoizedState!==null?(ga(),n.child=e.child,n.flags|=128,n=null):(ga(),c=o.fallback,b=n.mode,o=Sl({mode:"visible",children:o.children},b),c=ja(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Fr(n,e.child,null,a),o=n.child,o.memoizedState=Hu(a),o.childLanes=Gu(e,S,a),n.memoizedState=Fu,n=c);else if(ma(n),Tf(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(r(419)),o.stack="",o.digest=S,Bs({value:o,source:null,stack:null}),n=ku(e,n,a)}else if(dn||Is(e,n,a,!1),S=(a&e.childLanes)!==0,dn||S){if(S=ke,S!==null&&(o=a&-a,o=(o&42)!==0?1:ne(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Cr(e,o),jn(S,e,o),pm;b.data==="$?"||lf(),n=ku(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Ye=ui(b.nextSibling),Dn=n,Re=!0,Qa=null,Si=!1,e!==null&&(ti[ei++]=Pi,ti[ei++]=zi,ti[ei++]=Za,Pi=e.id,zi=e.overflow,Za=n),n=Vu(n,o.children),n.flags|=4096);return n}return c?(ga(),c=o.fallback,b=n.mode,P=e.child,$=P.sibling,o=Oi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?c=Oi($,c):(c=ja(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=e.child.memoizedState,b===null?b=Hu(a):(P=b.cachePool,P!==null?($=on._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=cp(),b={baseLanes:b.baseLanes|a,cachePool:P}),c.memoizedState=b,c.childLanes=Gu(e,S,a),n.memoizedState=Fu,o):(ma(n),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Vu(e,n){return n=Sl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Sl(e,n){return e=kn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ku(e,n,a){return Fr(n,e.child,null,a),e=Vu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ou(e.return,n,a)}function Xu(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Tm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Sn(e,n,o.children,a),o=ln.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bm(e,a,n);else if(e.tag===19)bm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(ln,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Xu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&gl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Xu(n,!0,a,null,f);break;case"together":Xu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Is(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Oi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Wu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&tl(e)))}function Hv(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),ua(n,on,e.memoizedState.cache),zs();break;case 27:case 5:Qt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Em(e,n,a):(ma(n),e=Gi(e,n,a),e!==null?e.sibling:null);ma(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Is(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Tm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(ln,ln.current),o)break;return null;case 22:case 23:return n.lanes=0,vm(e,n,a);case 24:ua(n,on,e.memoizedState.cache)}return Gi(e,n,a)}function Am(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Wu(e,a)&&(n.flags&128)===0)return dn=!1,Hv(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Re&&(n.flags&1048576)!==0&&np(n,$o,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")tu(o)?(e=ir(o,e),n.tag=1,n=ym(null,n,o,e,a)):(n.tag=0,n=Iu(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===C){n.tag=11,n=mm(null,n,o,e,a);break t}else if(c===B){n.tag=14,n=gm(null,n,o,e,a);break t}}throw n=vt(o)||o,Error(r(306,n,""))}}return n;case 0:return Iu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=ir(o,n.pendingProps),ym(e,n,o,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,pu(e,n),Ws(n,o,null,a);var S=n.memoizedState;if(o=S.cache,ua(n,on,o),o!==f.cache&&lu(n,[on],a,!0),Xs(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Mm(e,n,o,a);break t}else if(o!==c){c=Jn(Error(r(424)),n),Bs(c),n=Mm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=ui(e.firstChild),Dn=n,Re=!0,Qa=null,Si=!0,a=am(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zs(),o===c){n=Gi(e,n,a);break t}Sn(e,n,o,a)}n=n.child}return n;case 26:return xl(e,n),e===null?(a=Dg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=Ol(Mt.current).createElement(a),o[rn]=n,o[vn]=e,Mn(o,a,e),tn(o),n.stateNode=o):n.memoizedState=Dg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Re&&(o=n.stateNode=Rg(n.type,n.pendingProps,Mt.current),Dn=n,Si=!0,c=Ye,Ta(n.type)?(Af=c,Ye=ui(o.firstChild)):Ye=c),Sn(e,n,n.pendingProps.children,a),xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=o=Ye)&&(o=px(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Dn=n,Ye=ui(o.firstChild),Si=!1,c=!0):c=!1),c||Ja(n)),Qt(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Mf(c,f)?o=null:S!==null&&Mf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Su(e,n,Nv,null,null,a),po._currentValue=c),xl(e,n),Sn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=Ye)&&(a=mx(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Dn=n,Ye=null,e=!0):e=!1),e||Ja(n)),null;case 13:return Em(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Fr(n,null,o,a):Sn(e,n,o,a),n.child;case 11:return mm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ua(n,n.type,o.value),Sn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,tr(n),c=An(c),o=o(c),n.flags|=1,Sn(e,n,o,a),n.child;case 14:return gm(e,n,n.type,n.pendingProps,a);case 15:return _m(e,n,n.type,n.pendingProps,a);case 19:return Tm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Sl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Oi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return vm(e,n,a);case 24:return tr(n),o=An(on),e===null?(c=fu(),c===null&&(c=ke,f=cu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},du(n),ua(n,on,c)):((e.lanes&a)!==0&&(pu(e,n),Ws(n,null,null,a),Xs()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,on,o)):(o=f.cache,ua(n,on,o),o!==c.cache&&lu(n,[on],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Vi(e){e.flags|=4}function Rm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pg(n)){if(n=ni.current,n!==null&&((Se&4194048)===Se?yi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==yi))throw Vs=hu,up;e.flags|=8192}}function yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,kr|=n)}function Js(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Gv(e,n,a){var o=n.pendingProps;switch(au(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ii(on),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ps(n)?Vi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rp())),We(n),null;case 26:return a=n.memoizedState,e===null?(Vi(n),a!==null?(We(n),Rm(n,a)):(We(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Vi(n),We(n),Rm(n,a)):(We(n),n.flags&=-16777217):(e.memoizedProps!==o&&Vi(n),We(n),n.flags&=-16777217),null;case 27:Le(n),a=Mt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}e=Q.current,Ps(n)?ip(n):(e=Rg(c,o,a),n.stateNode=e,Vi(n))}return We(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(e=Q.current,Ps(n))ip(n);else{switch(c=Ol(Mt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[rn]=n,e[vn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Mn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Vi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Mt.current,Ps(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Sg(e.nodeValue,a)),e||Ja(n)}else e=Ol(e).createTextNode(o),e[rn]=n,n.stateNode=e}return We(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ps(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=rp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),We(n),null;case 4:return oe(),e===null&&_f(n.stateNode.containerInfo),We(n),null;case 10:return Ii(n.type),We(n),null;case 19:if(xt(ln),c=n.memoizedState,c===null)return We(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)Js(c,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=gl(e),f!==null){for(n.flags|=128,Js(c,!1),e=f.updateQueue,n.updateQueue=e,yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ep(a,e),a=a.sibling;return yt(ln,ln.current&1|2),n.child}e=e.sibling}c.tail!==null&&he()>bl&&(n.flags|=128,o=!0,Js(c,!1),n.lanes=4194304)}else{if(!o)if(e=gl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,yl(n,e),Js(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return We(n),null}else 2*he()-c.renderingStartTime>bl&&a!==536870912&&(n.flags|=128,o=!0,Js(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=he(),n.sibling=null,e=ln.current,yt(ln,o?e&1|2:e&1),n):(We(n),null);case 22:case 23:return Hi(n),vu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&xt(er),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(on),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Vv(e,n){switch(au(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ii(on),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));zs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xt(ln),null;case 4:return oe(),null;case 10:return Ii(n.type),null;case 22:case 23:return Hi(n),vu(),e!==null&&xt(er),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ii(on),null;case 25:return null;default:return null}}function Cm(e,n){switch(au(n),n.tag){case 3:Ii(on),oe();break;case 26:case 27:case 5:Le(n);break;case 4:oe();break;case 13:Hi(n);break;case 19:xt(ln);break;case 10:Ii(n.type);break;case 22:case 23:Hi(n),vu(),e!==null&&xt(er);break;case 24:Ii(on)}}function $s(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(b){He(n,n.return,b)}}function _a(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,c=n;var P=a,$=b;try{$()}catch(ut){He(c,P,ut)}}}o=o.next}while(o!==f)}}catch(ut){He(n,n.return,ut)}}function wm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gp(n,a)}catch(o){He(e,e.return,o)}}}function Dm(e,n,a){a.props=ir(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){He(e,n,o)}}function to(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){He(e,n,c)}}function Mi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){He(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){He(e,n,c)}else a.current=null}function Um(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){He(e,e.return,c)}}function qu(e,n,a){try{var o=e.stateNode;cx(o,e.type,a,n),o[vn]=n}catch(c){He(e,e.return,c)}}function Nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Yu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ju(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ll));else if(o!==4&&(o===27&&Ta(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ju(e,n,a),e=e.sibling;e!==null;)ju(e,n,a),e=e.sibling}function Ml(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ml(e,n,a),e=e.sibling;e!==null;)Ml(e,n,a),e=e.sibling}function Lm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,o,a),n[rn]=e,n[vn]=a}catch(f){He(e,e.return,f)}}var ki=!1,Qe=!1,Zu=!1,Om=typeof WeakSet=="function"?WeakSet:Set,pn=null;function kv(e,n){if(e=e.containerInfo,Sf=Hl,e=Wd(e),Yc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,P=-1,$=0,ut=0,gt=e,nt=null;e:for(;;){for(var at;gt!==a||c!==0&&gt.nodeType!==3||(b=S+c),gt!==f||o!==0&&gt.nodeType!==3||(P=S+o),gt.nodeType===3&&(S+=gt.nodeValue.length),(at=gt.firstChild)!==null;)nt=gt,gt=at;for(;;){if(gt===e)break e;if(nt===a&&++$===c&&(b=S),nt===f&&++ut===o&&(P=S),(at=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=at}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(yf={focusedElem:e,selectionRange:a},Hl=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ee=ir(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){He(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)bf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}}function Pm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),o&4&&$s(5,a);break;case 1:if(va(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){He(a,a.return,S)}else{var c=ir(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(a,a.return,S)}}o&64&&wm(a),o&512&&to(a,a.return);break;case 3:if(va(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gp(e,n)}catch(S){He(a,a.return,S)}}break;case 27:n===null&&o&4&&Lm(a);case 26:case 5:va(e,a),n===null&&o&4&&Um(a),o&512&&to(a,a.return);break;case 12:va(e,a);break;case 13:va(e,a),o&4&&Im(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Jv.bind(null,a),gx(e,a))));break;case 22:if(o=a.memoizedState!==null||ki,!o){n=n!==null&&n.memoizedState!==null||Qe,c=ki;var f=Qe;ki=o,(Qe=n)&&!f?xa(e,a,(a.subtreeFlags&8772)!==0):va(e,a),ki=c,Qe=f}break;case 30:break;default:va(e,a)}}function zm(e){var n=e.alternate;n!==null&&(e.alternate=null,zm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&sa(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Pn=!1;function Xi(e,n,a){for(a=a.child;a!==null;)Bm(e,n,a),a=a.sibling}function Bm(e,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:Qe||Mi(a,n),Xi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Mi(a,n);var o=Xe,c=Pn;Ta(a.type)&&(Xe=a.stateNode,Pn=!1),Xi(e,n,a),co(a.stateNode),Xe=o,Pn=c;break;case 5:Qe||Mi(a,n);case 6:if(o=Xe,c=Pn,Xe=null,Xi(e,n,a),Xe=o,Pn=c,Xe!==null)if(Pn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:Xe!==null&&(Pn?(e=Xe,Tg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vo(e)):Tg(Xe,a.stateNode));break;case 4:o=Xe,c=Pn,Xe=a.stateNode.containerInfo,Pn=!0,Xi(e,n,a),Xe=o,Pn=c;break;case 0:case 11:case 14:case 15:Qe||_a(2,a,n),Qe||_a(4,a,n),Xi(e,n,a);break;case 1:Qe||(Mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Dm(a,n,o)),Xi(e,n,a);break;case 21:Xi(e,n,a);break;case 22:Qe=(o=Qe)||a.memoizedState!==null,Xi(e,n,a),Qe=o;break;default:Xi(e,n,a)}}function Im(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vo(e)}catch(a){He(n,n.return,a)}}function Xv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Om),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Om),n;default:throw Error(r(435,e.tag))}}function Ku(e,n){var a=Xv(e);n.forEach(function(o){var c=$v.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(Ta(b.type)){Xe=b.stateNode,Pn=!1;break t}break;case 5:Xe=b.stateNode,Pn=!1;break t;case 3:case 4:Xe=b.stateNode.containerInfo,Pn=!0;break t}b=b.return}if(Xe===null)throw Error(r(160));Bm(f,S,c),Xe=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Fm(n,e),n=n.sibling}var ci=null;function Fm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),o&4&&(_a(3,e,e.return),$s(3,e),_a(5,e,e.return));break;case 1:Xn(n,e),Wn(e),o&512&&(Qe||a===null||Mi(a,a.return)),o&64&&ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ci;if(Xn(n,e),Wn(e),o&512&&(Qe||a===null||Mi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ra]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,o,a),f[rn]=e,tn(f),o=f;break t;case"link":var S=Lg("link","href",c).get(o+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=c.createElement(o),Mn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=Lg("meta","content",c).get(o+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=c.createElement(o),Mn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[rn]=e,tn(f),o=f}e.stateNode=o}else Og(c,e.type,e.stateNode);else e.stateNode=Ng(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Og(c,e.type,e.stateNode):Ng(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&qu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),o&512&&(Qe||a===null||Mi(a,a.return)),a!==null&&o&4&&qu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),o&512&&(Qe||a===null||Mi(a,a.return)),e.flags&32){c=e.stateNode;try{xi(c,"")}catch(at){He(e,e.return,at)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,qu(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Zu=!0);break;case 6:if(Xn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){He(e,e.return,at)}}break;case 3:if(Bl=null,c=ci,ci=Pl(n.containerInfo),Xn(n,e),ci=c,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vo(n.containerInfo)}catch(at){He(e,e.return,at)}Zu&&(Zu=!1,Hm(e));break;case 4:o=ci,ci=Pl(e.stateNode.containerInfo),Xn(n,e),Wn(e),ci=o;break;case 12:Xn(n,e),Wn(e);break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nf=he()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ku(e,o)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=ki,ut=Qe;if(ki=$||c,Qe=ut||P,Xn(n,e),Qe=ut,ki=$,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||ki||Qe||ar(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=P.stateNode;var gt=P.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(at){He(P,P.return,at)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(at){He(P,P.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ku(e,a))));break;case 19:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ku(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Nm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Yu(e);Ml(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(xi(S,""),a.flags&=-33);var b=Yu(e);Ml(e,b,S);break;case 3:case 4:var P=a.stateNode.containerInfo,$=Yu(e);ju(e,$,P);break;default:throw Error(r(161))}}catch(ut){He(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function va(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pm(e,n.alternate,n),n=n.sibling}function ar(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),ar(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Dm(n,n.return,a),ar(n);break;case 27:co(n.stateNode);case 26:case 5:Mi(n,n.return),ar(n);break;case 22:n.memoizedState===null&&ar(n);break;case 30:ar(n);break;default:ar(n)}e=e.sibling}}function xa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),$s(4,f);break;case 1:if(xa(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){He(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)mp(P[c],b)}catch($){He(o,o.return,$)}}a&&S&64&&wm(f),to(f,f.return);break;case 27:Lm(f);case 26:case 5:xa(c,f,a),a&&o===null&&S&4&&Um(f),to(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&S&4&&Im(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),to(f,f.return);break;case 30:break;default:xa(c,f,a)}n=n.sibling}}function Qu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Fs(a))}function Ju(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fs(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gm(e,n,a,o),n=n.sibling}function Gm(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),c&2048&&$s(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fs(e)));break;case 12:if(c&2048){Ei(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){He(n,n.return,P)}}else Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,o):eo(e,n):f._visibility&2?Ei(e,n,a,o):(f._visibility|=2,Hr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&Qu(S,n);break;case 24:Ei(e,n,a,o),c&2048&&Ju(n.alternate,n);break;default:Ei(e,n,a,o)}}function Hr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,b=a,P=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:Hr(f,S,b,P,c),$s(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?Hr(f,S,b,P,c):eo(f,S):(ut._visibility|=2,Hr(f,S,b,P,c)),c&&$&2048&&Qu(S.alternate,S);break;case 24:Hr(f,S,b,P,c),c&&$&2048&&Ju(S.alternate,S);break;default:Hr(f,S,b,P,c)}n=n.sibling}}function eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:eo(a,o),c&2048&&Qu(o.alternate,o);break;case 24:eo(a,o),c&2048&&Ju(o.alternate,o);break;default:eo(a,o)}n=n.sibling}}var no=8192;function Gr(e){if(e.subtreeFlags&no)for(e=e.child;e!==null;)Vm(e),e=e.sibling}function Vm(e){switch(e.tag){case 26:Gr(e),e.flags&no&&e.memoizedState!==null&&wx(ci,e.memoizedState,e.memoizedProps);break;case 5:Gr(e);break;case 3:case 4:var n=ci;ci=Pl(e.stateNode.containerInfo),Gr(e),ci=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=no,no=16777216,Gr(e),no=n):Gr(e));break;default:Gr(e)}}function km(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function io(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];pn=o,Wm(o,e)}km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xm(e),e=e.sibling}function Xm(e){switch(e.tag){case 0:case 11:case 15:io(e),e.flags&2048&&_a(9,e,e.return);break;case 3:io(e);break;case 12:io(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,El(e)):io(e);break;default:io(e)}}function El(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];pn=o,Wm(o,e)}km(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_a(8,n,n.return),El(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,El(n));break;default:El(n)}e=e.sibling}}function Wm(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Fs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,pn=o;else t:for(a=e;pn!==null;){o=pn;var c=o.sibling,f=o.return;if(zm(o),o===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}var Wv={getCacheForType:function(e){var n=An(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},qv=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,de=null,Se=0,Ue=0,qn=null,Sa=!1,Vr=!1,$u=!1,Wi=0,je=0,ya=0,rr=0,tf=0,ii=0,kr=0,ao=null,zn=null,ef=!1,nf=0,bl=1/0,Tl=null,Ma=null,yn=0,Ea=null,Xr=null,Wr=0,af=0,rf=null,qm=null,ro=0,sf=null;function Yn(){if((De&2)!==0&&Se!==0)return Se&-Se;if(z.T!==null){var e=Nr;return e!==0?e:df()}return Ee()}function Ym(){ii===0&&(ii=(Se&536870912)===0||Re?k():536870912);var e=ni.current;return e!==null&&(e.flags|=32),ii}function jn(e,n,a){(e===ke&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(qr(e,0),ba(e,Se,ii,!1)),Bt(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(rr|=a),je===4&&ba(e,Se,ii,!1)),bi(e))}function jm(e,n,a){if((De&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=o?Zv(e,n):cf(e,n,!0),f=o;do{if(c===0){Vr&&!o&&ba(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Yv(a)){c=cf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=e;c=ao;var P=b.current.memoizedState.isDehydrated;if(P&&(qr(b,S).flags|=256),S=cf(b,S,!1),S!==2){if($u&&!P){b.errorRecoveryDisabledLanes|=f,rr|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){qr(e,0),ba(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ba(o,n,ii,!Sa);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=nf+300-he(),10<c)){if(ba(o,n,ii,!Sa),Yt(o,0,!0)!==0)break t;o.timeoutHandle=Eg(Zm.bind(null,o,a,zn,Tl,ef,n,ii,rr,kr,Sa,f,2,-0,0),c);break t}Zm(o,a,zn,Tl,ef,n,ii,rr,kr,Sa,f,0,-0,0)}}break}while(!0);bi(e)}function Zm(e,n,a,o,c,f,S,b,P,$,ut,gt,nt,at){if(e.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(ho={stylesheets:null,count:0,unsuspend:Cx},Vm(n),gt=Dx(),gt!==null)){e.cancelPendingCommit=gt(ng.bind(null,e,n,f,a,o,c,S,b,P,ut,1,nt,at)),ba(e,f,S,!$);return}ng(e,n,f,a,o,c,S,b,P)}function Yv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(e,n,a,o){n&=~tf,n&=~rr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&_t(e,a,n)}function Al(){return(De&6)===0?(so(0),!1):!0}function of(){if(de!==null){if(Ue===0)var e=de.return;else e=de,Bi=$a=null,Eu(e),Ir=null,Ks=0,e=de;for(;e!==null;)Cm(e.alternate,e),e=e.return;de=null}}function qr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,fx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),of(),ke=e,de=a=Oi(e.current,null),Se=n,Ue=0,qn=null,Sa=!1,Vr=Ct(e,n),$u=!1,kr=ii=tf=rr=ya=je=0,zn=ao=null,ef=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Pt(o),f=1<<c;n|=e[c],o&=~f}return Wi=n,jo(),a}function Km(e,n){ue=null,z.H=dl,n===Gs||n===il?(n=dp(),Ue=3):n===up?(n=dp(),Ue=4):Ue=n===pm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,de===null&&(je=1,vl(e,Jn(n,e.current)))}function Qm(){var e=z.H;return z.H=dl,e===null?dl:e}function Jm(){var e=z.A;return z.A=Wv,e}function lf(){je=4,Sa||(Se&4194048)!==Se&&ni.current!==null||(Vr=!0),(ya&134217727)===0&&(rr&134217727)===0||ke===null||ba(ke,Se,ii,!1)}function cf(e,n,a){var o=De;De|=2;var c=Qm(),f=Jm();(ke!==e||Se!==n)&&(Tl=null,qr(e,n)),n=!1;var S=je;t:do try{if(Ue!==0&&de!==null){var b=de,P=qn;switch(Ue){case 8:of(),S=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var $=Ue;if(Ue=0,qn=null,Yr(e,b,P,$),a&&Vr){S=0;break t}break;default:$=Ue,Ue=0,qn=null,Yr(e,b,P,$)}}jv(),S=je;break}catch(ut){Km(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Bi=$a=null,De=o,z.H=c,z.A=f,de===null&&(ke=null,Se=0,jo()),S}function jv(){for(;de!==null;)$m(de)}function Zv(e,n){var a=De;De|=2;var o=Qm(),c=Jm();ke!==e||Se!==n?(Tl=null,bl=he()+500,qr(e,n)):Vr=Ct(e,n);t:do try{if(Ue!==0&&de!==null){n=de;var f=qn;e:switch(Ue){case 1:Ue=0,qn=null,Yr(e,n,f,1);break;case 2:case 9:if(fp(f)){Ue=0,qn=null,tg(n);break}n=function(){Ue!==2&&Ue!==9||ke!==e||(Ue=7),bi(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:fp(f)?(Ue=0,qn=null,tg(n)):(Ue=0,qn=null,Yr(e,n,f,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var b=de;if(!S||Pg(S)){Ue=0,qn=null;var P=b.sibling;if(P!==null)de=P;else{var $=b.return;$!==null?(de=$,Rl($)):de=null}break e}}Ue=0,qn=null,Yr(e,n,f,5);break;case 6:Ue=0,qn=null,Yr(e,n,f,6);break;case 8:of(),je=6;break t;default:throw Error(r(462))}}Kv();break}catch(ut){Km(e,ut)}while(!0);return Bi=$a=null,z.H=o,z.A=c,De=a,de!==null?0:(ke=null,Se=0,jo(),je)}function Kv(){for(;de!==null&&!_n();)$m(de)}function $m(e){var n=Am(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Rl(e):de=n}function tg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Sm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Sm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Eu(n);default:Cm(a,n),n=de=ep(n,Wi),n=Am(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Rl(e):de=n}function Yr(e,n,a,o){Bi=$a=null,Eu(n),Ir=null,Ks=0;var c=n.return;try{if(Fv(e,c,n,a,Se)){je=1,vl(e,Jn(a,e.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;je=1,vl(e,Jn(a,e.current)),de=null;return}n.flags&32768?(Re||o===1?e=!0:Vr||(Se&536870912)!==0?e=!1:(Sa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),eg(n,e)):Rl(n)}function Rl(e){var n=e;do{if((n.flags&32768)!==0){eg(n,Sa);return}e=n.return;var a=Gv(n.alternate,n,Wi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);je===0&&(je=5)}function eg(e,n){do{var a=Vv(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);je=6,de=null}function ng(e,n,a,o,c,f,S,b,P){e.cancelPendingCommit=null;do Cl();while(yn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Jc,At(e,a,f,S,b,P),e===ke&&(de=ke=null,Se=0),Xr=n,Ea=e,Wr=a,af=f,rf=c,qm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tx(ae,function(){return og(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=Z.p,Z.p=2,S=De,De|=4;try{kv(e,n,a)}finally{De=S,Z.p=c,z.T=o}}yn=1,ig(),ag(),rg()}}function ig(){if(yn===1){yn=0;var e=Ea,n=Xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=Z.p;Z.p=2;var c=De;De|=4;try{Fm(n,e);var f=yf,S=Wd(e.containerInfo),b=f.focusedElem,P=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&Xd(b.ownerDocument.documentElement,b)){if(P!==null&&Yc(b)){var $=P.start,ut=P.end;if(ut===void 0&&(ut=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ut,b.value.length);else{var gt=b.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var at=nt.getSelection(),ee=b.textContent.length,Jt=Math.min(P.start,ee),ze=P.end===void 0?Jt:Math.min(P.end,ee);!at.extend&&Jt>ze&&(S=ze,ze=Jt,Jt=S);var W=kd(b,Jt),V=kd(b,ze);if(W&&V&&(at.rangeCount!==1||at.anchorNode!==W.node||at.anchorOffset!==W.offset||at.focusNode!==V.node||at.focusOffset!==V.offset)){var K=gt.createRange();K.setStart(W.node,W.offset),at.removeAllRanges(),Jt>ze?(at.addRange(K),at.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),at.addRange(K))}}}}for(gt=[],at=b;at=at.parentNode;)at.nodeType===1&&gt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var ht=gt[b];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Hl=!!Sf,yf=Sf=null}finally{De=c,Z.p=o,z.T=a}}e.current=n,yn=2}}function ag(){if(yn===2){yn=0;var e=Ea,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=Z.p;Z.p=2;var c=De;De|=4;try{Pm(e,n.alternate,n)}finally{De=c,Z.p=o,z.T=a}}yn=3}}function rg(){if(yn===4||yn===3){yn=0,ye();var e=Ea,n=Xr,a=Wr,o=qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,Xr=Ea=null,sg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ma=null),we(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=Z.p,Z.p=2,z.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var b=o[S];f(b.value,{componentStack:b.stack})}}finally{z.T=n,Z.p=c}}(Wr&3)!==0&&Cl(),bi(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===sf?ro++:(ro=0,sf=e):ro=0,so(0)}}function sg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Fs(n)))}function Cl(e){return ig(),ag(),rg(),og()}function og(){if(yn!==5)return!1;var e=Ea,n=af;af=0;var a=we(Wr),o=z.T,c=Z.p;try{Z.p=32>a?32:a,z.T=null,a=rf,rf=null;var f=Ea,S=Wr;if(yn=0,Xr=Ea=null,Wr=0,(De&6)!==0)throw Error(r(331));var b=De;if(De|=4,Xm(f.current),Gm(f,f.current,S,a),De=b,so(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{Z.p=c,z.T=o,sg(e,n)}}function lg(e,n,a){n=Jn(a,n),n=Bu(e.stateNode,n,2),e=da(e,n,2),e!==null&&(Bt(e,2),bi(e))}function He(e,n,a){if(e.tag===3)lg(e,e,a);else for(;n!==null;){if(n.tag===3){lg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ma===null||!Ma.has(o))){e=Jn(a,e),a=hm(2),o=da(n,a,2),o!==null&&(dm(a,o,n,e),Bt(o,2),bi(o));break}}n=n.return}}function uf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new qv;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||($u=!0,c.add(a),e=Qv.bind(null,e,n,a),n.then(e,e))}function Qv(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Se&a)===a&&(je===4||je===3&&(Se&62914560)===Se&&300>he()-nf?(De&2)===0&&qr(e,0):tf|=a,kr===Se&&(kr=0)),bi(e)}function cg(e,n){n===0&&(n=Nt()),e=Cr(e,n),e!==null&&(Bt(e,n),bi(e))}function Jv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),cg(e,a)}function $v(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),cg(e,a)}function tx(e,n){return me(e,n)}var wl=null,jr=null,ff=!1,Dl=!1,hf=!1,sr=0;function bi(e){e!==jr&&e.next===null&&(jr===null?wl=jr=e:jr=jr.next=e),Dl=!0,ff||(ff=!0,nx())}function so(e,n){if(!hf&&Dl){hf=!0;do for(var a=!1,o=wl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=c&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,dg(o,f))}else f=Se,f=Yt(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,dg(o,f));o=o.next}while(a);hf=!1}}function ex(){ug()}function ug(){Dl=ff=!1;var e=0;sr!==0&&(ux()&&(e=sr),sr=0);for(var n=he(),a=null,o=wl;o!==null;){var c=o.next,f=fg(o,n);f===0?(o.next=null,a===null?wl=c:a.next=c,c===null&&(jr=a)):(a=o,(e!==0||(f&3)!==0)&&(Dl=!0)),o=c}so(e)}function fg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Pt(f),b=1<<S,P=c[S];P===-1?((b&a)===0||(b&o)!==0)&&(c[S]=ie(b,n)):P<=n&&(e.expiredLanes|=b),f&=~b}if(n=ke,a=Se,a=Yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&H(o),we(a)){case 2:case 8:a=jt;break;case 32:a=ae;break;case 268435456:a=O;break;default:a=ae}return o=hg.bind(null,e),a=me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&H(o),e.callbackPriority=2,e.callbackNode=null,2}function hg(e,n){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Cl()&&e.callbackNode!==a)return null;var o=Se;return o=Yt(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(jm(e,o,n),fg(e,he()),e.callbackNode!=null&&e.callbackNode===a?hg.bind(null,e):null)}function dg(e,n){if(Cl())return null;jm(e,n,!0)}function nx(){hx(function(){(De&6)!==0?me(ge,ex):ug()})}function df(){return sr===0&&(sr=k()),sr}function pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Go(""+e)}function mg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ix(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=pg((c[vn]||null).action),S=o.submitter;S&&(n=(n=S[vn]||null)?pg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new Wo("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(sr!==0){var P=S?mg(c,S):new FormData(c);Nu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(b.preventDefault(),P=S?mg(c,S):new FormData(c),Nu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var pf=0;pf<Qc.length;pf++){var mf=Qc[pf],ax=mf.toLowerCase(),rx=mf[0].toUpperCase()+mf.slice(1);li(ax,"on"+rx)}li(jd,"onAnimationEnd"),li(Zd,"onAnimationIteration"),li(Kd,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(Mv,"onTransitionRun"),li(Ev,"onTransitionStart"),li(bv,"onTransitionCancel"),li(Qd,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Di("onBeforeInput",["compositionend","keypress","textInput","paste"]),Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oo));function gg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var b=o[S],P=b.instance,$=b.currentTarget;if(b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ut){_l(ut)}c.currentTarget=null,f=P}else for(S=0;S<o.length;S++){if(b=o[S],P=b.instance,$=b.currentTarget,b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ut){_l(ut)}c.currentTarget=null,f=P}}}}function pe(e,n){var a=n[Va];a===void 0&&(a=n[Va]=new Set);var o=e+"__bubble";a.has(o)||(_g(n,e,2,!1),a.add(o))}function gf(e,n,a){var o=0;n&&(o|=4),_g(a,e,o,n)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function _f(e){if(!e[Ul]){e[Ul]=!0,Fo.forEach(function(a){a!=="selectionchange"&&(sx.has(a)||gf(a,!1,e),gf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ul]||(n[Ul]=!0,gf("selectionchange",!1,n))}}function _g(e,n,a,o){switch(Gg(n)){case 2:var c=Lx;break;case 8:c=Ox;break;default:c=Uf}a=c.bind(null,n,a,e),c=void 0,!Ic||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function vf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===c)break;if(S===4)for(S=o.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;b!==null;){if(S=Ci(b),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){o=f=S;continue t}b=b.parentNode}}o=o.return}bd(function(){var $=f,ut=zc(a),gt=[];t:{var nt=Jd.get(e);if(nt!==void 0){var at=Wo,ee=e;switch(e){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":at=tv;break;case"focusin":ee="focus",at=Vc;break;case"focusout":ee="blur",at=Vc;break;case"beforeblur":case"afterblur":at=Vc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=iv;break;case jd:case Zd:case Kd:at=W0;break;case Qd:at=rv;break;case"scroll":case"scrollend":at=H0;break;case"wheel":at=ov;break;case"copy":case"cut":case"paste":at=Y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=wd;break;case"toggle":case"beforetoggle":at=cv}var Jt=(n&4)!==0,ze=!Jt&&(e==="scroll"||e==="scrollend"),W=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var V=$,K;V!==null;){var ht=V;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||W===null||(ht=As(V,W),ht!=null&&Jt.push(lo(V,ht,K))),ze)break;V=V.return}0<Jt.length&&(nt=new at(nt,ee,null,a,ut),gt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",nt&&a!==Pc&&(ee=a.relatedTarget||a.fromElement)&&(Ci(ee)||ee[Nn]))break t;if((at||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,at?(ee=a.relatedTarget||a.toElement,at=$,ee=ee?Ci(ee):null,ee!==null&&(ze=u(ee),Jt=ee.tag,ee!==ze||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(at=null,ee=$),at!==ee)){if(Jt=Rd,ht="onMouseLeave",W="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=wd,ht="onPointerLeave",W="onPointerEnter",V="pointer"),ze=at==null?nt:Xa(at),K=ee==null?nt:Xa(ee),nt=new Jt(ht,V+"leave",at,a,ut),nt.target=ze,nt.relatedTarget=K,ht=null,Ci(ut)===$&&(Jt=new Jt(W,V+"enter",ee,a,ut),Jt.target=K,Jt.relatedTarget=ze,ht=Jt),ze=ht,at&&ee)e:{for(Jt=at,W=ee,V=0,K=Jt;K;K=Zr(K))V++;for(K=0,ht=W;ht;ht=Zr(ht))K++;for(;0<V-K;)Jt=Zr(Jt),V--;for(;0<K-V;)W=Zr(W),K--;for(;V--;){if(Jt===W||W!==null&&Jt===W.alternate)break e;Jt=Zr(Jt),W=Zr(W)}Jt=null}else Jt=null;at!==null&&vg(gt,nt,at,Jt,!1),ee!==null&&ze!==null&&vg(gt,ze,ee,Jt,!0)}}t:{if(nt=$?Xa($):window,at=nt.nodeName&&nt.nodeName.toLowerCase(),at==="select"||at==="input"&&nt.type==="file")var Ht=Bd;else if(Pd(nt))if(Id)Ht=xv;else{Ht=_v;var fe=gv}else at=nt.nodeName,!at||at.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Oc($.elementType)&&(Ht=Bd):Ht=vv;if(Ht&&(Ht=Ht(e,$))){zd(gt,Ht,a,ut);break t}fe&&fe(e,nt,$),e==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&Tn(nt,"number",nt.value)}switch(fe=$?Xa($):window,e){case"focusin":(Pd(fe)||fe.contentEditable==="true")&&(Tr=fe,jc=$,Os=null);break;case"focusout":Os=jc=Tr=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,qd(gt,a,ut);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":qd(gt,a,ut)}var Wt;if(Xc)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else br?Ld(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Dd&&a.locale!=="ko"&&(br||te!=="onCompositionStart"?te==="onCompositionEnd"&&br&&(Wt=Td()):(ca=ut,Fc="value"in ca?ca.value:ca.textContent,br=!0)),fe=Nl($,te),0<fe.length&&(te=new Cd(te,e,null,a,ut),gt.push({event:te,listeners:fe}),Wt?te.data=Wt:(Wt=Od(a),Wt!==null&&(te.data=Wt)))),(Wt=fv?hv(e,a):dv(e,a))&&(te=Nl($,"onBeforeInput"),0<te.length&&(fe=new Cd("onBeforeInput","beforeinput",null,a,ut),gt.push({event:fe,listeners:te}),fe.data=Wt)),ix(gt,e,$,a,ut)}gg(gt,n)})}function lo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Nl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=As(e,a),c!=null&&o.unshift(lo(e,c,f)),c=As(e,n),c!=null&&o.push(lo(e,c,f))),e.tag===3)return o;e=e.return}return[]}function Zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vg(e,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var b=a,P=b.alternate,$=b.stateNode;if(b=b.tag,P!==null&&P===o)break;b!==5&&b!==26&&b!==27||$===null||(P=$,c?($=As(a,f),$!=null&&S.unshift(lo(a,$,P))):c||($=As(a,f),$!=null&&S.push(lo(a,$,P)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var ox=/\r\n?/g,lx=/\u0000|\uFFFD/g;function xg(e){return(typeof e=="string"?e:""+e).replace(ox,`
`).replace(lx,"")}function Sg(e,n){return n=xg(n),xg(e)===n}function Ll(){}function Pe(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xi(e,""+o);break;case"className":Dt(e,"class",o);break;case"tabIndex":Dt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(e,a,o);break;case"style":Md(e,o,f);break;case"data":if(n!=="object"){Dt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Go(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",c.name,c,null),Pe(e,n,"formEncType",c.formEncType,c,null),Pe(e,n,"formMethod",c.formMethod,c,null),Pe(e,n,"formTarget",c.formTarget,c,null)):(Pe(e,n,"encType",c.encType,c,null),Pe(e,n,"method",c.method,c,null),Pe(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Go(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ll);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Go(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=I0.get(a)||a,Tt(e,a,o))}}function xf(e,n,a,o,c,f){switch(a){case"style":Md(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?xi(e,o):(typeof o=="number"||typeof o=="bigint")&&xi(e,""+o);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ho.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,f,S,a,null)}}c&&Pe(e,n,"srcSet",a.srcSet,a,null),o&&Pe(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var b=f=S=c=null,P=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":c=ut;break;case"type":S=ut;break;case"checked":P=ut;break;case"defaultChecked":$=ut;break;case"value":f=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Pe(e,n,o,ut,a,null)}}Fe(e,f,b,P,$,S,c,!1),qe(e);return;case"select":pe("invalid",e),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:Pe(e,n,c,b,a,null)}n=f,a=S,e.multiple=!!o,n!=null?sn(e,!!o,n,!1):a!=null&&sn(e,!!o,a,!0);return;case"textarea":pe("invalid",e),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Pe(e,n,S,b,a,null)}xn(e,o,c,f),qe(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,n,P,o,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(o=0;o<oo.length;o++)pe(oo[o],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,$,o,a,null)}return;default:if(Oc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&xf(e,n,ut,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Pe(e,n,b,o,a,null))}function cx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,b=null,P=null,$=null,ut=null;for(at in a){var gt=a[at];if(a.hasOwnProperty(at)&&gt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":P=gt;default:o.hasOwnProperty(at)||Pe(e,n,at,null,o,gt)}}for(var nt in o){var at=o[nt];if(gt=a[nt],o.hasOwnProperty(nt)&&(at!=null||gt!=null))switch(nt){case"type":f=at;break;case"name":c=at;break;case"checked":$=at;break;case"defaultChecked":ut=at;break;case"value":S=at;break;case"defaultValue":b=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==gt&&Pe(e,n,nt,at,o,gt)}}Ui(e,S,b,P,$,ut,f,c);return;case"select":at=S=b=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":at=P;default:o.hasOwnProperty(f)||Pe(e,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==P&&Pe(e,n,c,f,o,P)}n=b,a=S,o=at,nt!=null?sn(e,!!a,nt,!1):!!o!=!!a&&(n!=null?sn(e,!!a,n,!0):sn(e,!!a,a?[]:"",!1));return;case"textarea":at=nt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(e,n,b,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":nt=c;break;case"defaultValue":at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Pe(e,n,S,c,o,f)}hn(e,nt,at);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Pe(e,n,ee,null,o,nt)}for(P in o)if(nt=o[P],at=a[P],o.hasOwnProperty(P)&&nt!==at&&(nt!=null||at!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Pe(e,n,P,nt,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!o.hasOwnProperty(Jt)&&Pe(e,n,Jt,null,o,nt);for($ in o)if(nt=o[$],at=a[$],o.hasOwnProperty($)&&nt!==at&&(nt!=null||at!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Pe(e,n,$,nt,o,at)}return;default:if(Oc(n)){for(var ze in a)nt=a[ze],a.hasOwnProperty(ze)&&nt!==void 0&&!o.hasOwnProperty(ze)&&xf(e,n,ze,void 0,o,nt);for(ut in o)nt=o[ut],at=a[ut],!o.hasOwnProperty(ut)||nt===at||nt===void 0&&at===void 0||xf(e,n,ut,nt,o,at);return}}for(var W in a)nt=a[W],a.hasOwnProperty(W)&&nt!=null&&!o.hasOwnProperty(W)&&Pe(e,n,W,null,o,nt);for(gt in o)nt=o[gt],at=a[gt],!o.hasOwnProperty(gt)||nt===at||nt==null&&at==null||Pe(e,n,gt,nt,o,at)}var Sf=null,yf=null;function Ol(e){return e.nodeType===9?e:e.ownerDocument}function yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Mf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function ux(){var e=window.event;return e&&e.type==="popstate"?e===Ef?!1:(Ef=e,!0):(Ef=null,!1)}var Eg=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(e){return bg.resolve(null).then(e).catch(dx)}:Eg;function dx(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Tg(e,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&co(S.documentElement),a&2&&co(S.body),a&4)for(a=S.head,co(a),S=a.firstChild;S;){var b=S.nextSibling,P=S.nodeName;S[ra]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=b}}if(c===0){e.removeChild(f),vo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);vo(n)}function bf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bf(a),sa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function px(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ra])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function mx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Tf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function gx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Af=null;function Ag(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Rg(e,n,a){switch(n=Ol(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);sa(e)}var ai=new Map,Cg=new Set;function Pl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=Z.d;Z.d={f:_x,r:vx,D:xx,C:Sx,L:yx,m:Mx,X:bx,S:Ex,M:Tx};function _x(){var e=qi.f(),n=Al();return e||n}function vx(e){var n=wi(e);n!==null&&n.tag===5&&n.type==="form"?jp(n):qi.r(e)}var Kr=typeof document>"u"?null:document;function wg(e,n,a){var o=Kr;if(o&&typeof n=="string"&&n){var c=Ve(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Cg.has(c)||(Cg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Mn(n,"link",e),tn(n),o.head.appendChild(n)))}}function xx(e){qi.D(e),wg("dns-prefetch",e,null)}function Sx(e,n){qi.C(e,n),wg("preconnect",e,n)}function yx(e,n,a){qi.L(e,n,a);var o=Kr;if(o&&e&&n){var c='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ve(a.imageSizes)+'"]')):c+='[href="'+Ve(e)+'"]';var f=c;switch(n){case"style":f=Qr(e);break;case"script":f=Jr(e)}ai.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ai.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(uo(f))||n==="script"&&o.querySelector(fo(f))||(n=o.createElement("link"),Mn(n,"link",e),tn(n),o.head.appendChild(n)))}}function Mx(e,n){qi.m(e,n);var a=Kr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ve(o)+'"][href="'+Ve(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Jr(e)}if(!ai.has(f)&&(e=_({rel:"modulepreload",href:e},n),ai.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fo(f)))return}o=a.createElement("link"),Mn(o,"link",e),tn(o),a.head.appendChild(o)}}}function Ex(e,n,a){qi.S(e,n,a);var o=Kr;if(o&&e){var c=oa(o).hoistableStyles,f=Qr(e);n=n||"default";var S=c.get(f);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(uo(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ai.get(f))&&Rf(e,a);var P=S=o.createElement("link");tn(P),Mn(P,"link",e),P._p=new Promise(function($,ut){P.onload=$,P.onerror=ut}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,zl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:b},c.set(f,S)}}}function bx(e,n){qi.X(e,n);var a=Kr;if(a&&e){var o=oa(a).hoistableScripts,c=Jr(e),f=o.get(c);f||(f=a.querySelector(fo(c)),f||(e=_({src:e,async:!0},n),(n=ai.get(c))&&Cf(e,n),f=a.createElement("script"),tn(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Tx(e,n){qi.M(e,n);var a=Kr;if(a&&e){var o=oa(a).hoistableScripts,c=Jr(e),f=o.get(c);f||(f=a.querySelector(fo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=ai.get(c))&&Cf(e,n),f=a.createElement("script"),tn(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Dg(e,n,a,o){var c=(c=Mt.current)?Pl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=oa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Qr(a.href);var f=oa(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(uo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),f||Ax(c,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Jr(a),a=oa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Qr(e){return'href="'+Ve(e)+'"'}function uo(e){return'link[rel="stylesheet"]['+e+"]"}function Ug(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Ax(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),tn(n),e.head.appendChild(n))}function Jr(e){return'[src="'+Ve(e)+'"]'}function fo(e){return"script[async]"+e}function Ng(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),tn(o),Mn(o,"style",c),zl(o,a.precedence,e),n.instance=o;case"stylesheet":c=Qr(a.href);var f=e.querySelector(uo(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=Ug(a),(c=ai.get(c))&&Rf(o,c),f=(e.ownerDocument||e).createElement("link"),tn(f);var S=f;return S._p=new Promise(function(b,P){S.onload=b,S.onerror=P}),Mn(f,"link",o),n.state.loading|=4,zl(f,a.precedence,e),n.instance=f;case"script":return f=Jr(a.src),(c=e.querySelector(fo(f)))?(n.instance=c,tn(c),c):(o=a,(c=ai.get(f))&&(o=_({},a),Cf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),tn(c),Mn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,zl(o,a.precedence,e));return n.instance}function zl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Rf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Bl=null;function Lg(e,n,a){if(Bl===null){var o=new Map,c=Bl=new Map;c.set(a,o)}else c=Bl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ra]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var b=o.get(S);b?b.push(f):o.set(S,[f])}}return o}function Og(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Rx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ho=null;function Cx(){}function wx(e,n,a){if(ho===null)throw Error(r(475));var o=ho;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Qr(a.href),f=e.querySelector(uo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Il.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=e.ownerDocument||e,a=Ug(a),(c=ai.get(c))&&Rf(a,c),f=f.createElement("link"),tn(f);var S=f;S._p=new Promise(function(b,P){S.onload=b,S.onerror=P}),Mn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Il.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Dx(){if(ho===null)throw Error(r(475));var e=ho;return e.stylesheets&&e.count===0&&wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&wf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Il(){if(this.count--,this.count===0){if(this.stylesheets)wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fl=null;function wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fl=new Map,n.forEach(Ux,e),Fl=null,Il.call(e))}function Ux(e,n){if(!(n.state.loading&4)){var a=Fl.get(e);if(a)var o=a.get(null);else{a=new Map,Fl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=Il.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var po={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Nx(e,n,a,o,c,f,S,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function zg(e,n,a,o,c,f,S,b,P,$,ut,gt){return e=new Nx(e,n,a,S,b,P,$,gt),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),e.current=f,f.stateNode=e,n=cu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},du(f),e}function Bg(e){return e?(e=wr,e):wr}function Ig(e,n,a,o,c,f){c=Bg(c),o.context===null?o.context=c:o.pendingContext=c,o=ha(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=da(e,o,n),a!==null&&(jn(a,e,n),ks(a,e,n))}function Fg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Df(e,n){Fg(e,n),(e=e.alternate)&&Fg(e,n)}function Hg(e){if(e.tag===13){var n=Cr(e,67108864);n!==null&&jn(n,e,67108864),Df(e,67108864)}}var Hl=!0;function Lx(e,n,a,o){var c=z.T;z.T=null;var f=Z.p;try{Z.p=2,Uf(e,n,a,o)}finally{Z.p=f,z.T=c}}function Ox(e,n,a,o){var c=z.T;z.T=null;var f=Z.p;try{Z.p=8,Uf(e,n,a,o)}finally{Z.p=f,z.T=c}}function Uf(e,n,a,o){if(Hl){var c=Nf(o);if(c===null)vf(e,n,o,Gl,a),Vg(e,o);else if(zx(c,e,n,a,o))o.stopPropagation();else if(Vg(e,o),n&4&&-1<Px.indexOf(e)){for(;c!==null;){var f=wi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=qt(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var P=1<<31-Pt(S);b.entanglements[1]|=P,S&=~P}bi(f),(De&6)===0&&(bl=he()+500,so(0))}}break;case 13:b=Cr(f,2),b!==null&&jn(b,f,2),Al(),Df(f,2)}if(f=Nf(o),f===null&&vf(e,n,o,Gl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else vf(e,n,o,null,a)}}function Nf(e){return e=zc(e),Lf(e)}var Gl=null;function Lf(e){if(Gl=null,e=Ci(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Gl=e,null}function Gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case ge:return 2;case jt:return 8;case ae:case Ze:return 32;case O:return 268435456;default:return 32}default:return 32}}var Of=!1,Aa=null,Ra=null,Ca=null,mo=new Map,go=new Map,wa=[],Px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vg(e,n){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(n.pointerId)}}function _o(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=wi(n),n!==null&&Hg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function zx(e,n,a,o,c){switch(n){case"focusin":return Aa=_o(Aa,e,n,a,o,c),!0;case"dragenter":return Ra=_o(Ra,e,n,a,o,c),!0;case"mouseover":return Ca=_o(Ca,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return mo.set(f,_o(mo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,go.set(f,_o(go.get(f)||null,e,n,a,o,c)),!0}return!1}function kg(e){var n=Ci(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Gn(e.priority,function(){if(a.tag===13){var o=Yn();o=ne(o);var c=Cr(a,o);c!==null&&jn(c,a,o),Df(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Nf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Pc=o,a.target.dispatchEvent(o),Pc=null}else return n=wi(a),n!==null&&Hg(n),e.blockedOn=a,!1;n.shift()}return!0}function Xg(e,n,a){Vl(e)&&a.delete(n)}function Bx(){Of=!1,Aa!==null&&Vl(Aa)&&(Aa=null),Ra!==null&&Vl(Ra)&&(Ra=null),Ca!==null&&Vl(Ca)&&(Ca=null),mo.forEach(Xg),go.forEach(Xg)}function kl(e,n){e.blockedOn===n&&(e.blockedOn=null,Of||(Of=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Bx)))}var Xl=null;function Wg(e){Xl!==e&&(Xl=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Xl===e&&(Xl=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Lf(o||a)===null)continue;break}var f=wi(a);f!==null&&(e.splice(n,3),n-=3,Nu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function vo(e){function n(P){return kl(P,e)}Aa!==null&&kl(Aa,e),Ra!==null&&kl(Ra,e),Ca!==null&&kl(Ca,e),mo.forEach(n),go.forEach(n);for(var a=0;a<wa.length;a++){var o=wa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)kg(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[vn]||null;if(typeof f=="function")S||Wg(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[vn]||null)b=S.formAction;else if(Lf(c)!==null)continue}else b=S.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),Wg(a)}}}function Pf(e){this._internalRoot=e}Wl.prototype.render=Pf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Yn();Ig(a,o,e,n,null,null)},Wl.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ig(e.current,2,null,e,null,null),Al(),n[Nn]=null}};function Wl(e){this._internalRoot=e}Wl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,e),a===0&&kg(e)}};var qg=t.version;if(qg!=="19.1.0")throw Error(r(527,qg,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Ix={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{ft=ql.inject(Ix),pt=ql}catch{}}return So.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=lm,f=cm,S=um,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=zg(e,1,!1,null,null,a,o,c,f,S,b,null),e[Nn]=n.current,_f(e),new Pf(n)},So.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=lm,S=cm,b=um,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=zg(e,1,!0,n,a??null,o,c,f,S,b,P,$),n.context=Bg(null),a=n.current,o=Yn(),o=ne(o),c=ha(o),c.callback=null,da(a,c,o),a=o,n.current.lanes=a,Bt(n,a),bi(n),e[Nn]=n.current,_f(e),new Wl(n)},So.version="19.1.0",So}var n_;function Zx(){if(n_)return If.exports;n_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),If.exports=jx(),If.exports}var Kx=Zx();const Qx=({onComplete:s})=>{const[t,i]=En.useState(""),r="Lenlo Dev";return En.useEffect(()=>{let l=0;const u=setInterval(()=>{i(r.substring(0,l)),l++,l>r.length&&(clearInterval(u),setTimeout(()=>{s()},1e3))},100);return()=>clearInterval(u)},[s]),J.jsxs("div",{className:"fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center",children:[J.jsxs("div",{className:"mb-4 text-4xl font-mono font-bold",children:[t," ",J.jsx("span",{className:"animate-blink ml-1",children:"|"})]}),J.jsx("div",{className:"w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden",children:J.jsx("div",{className:"w-[40%] h-full bg-blue-500 shadow-[0_0_15_px_#3b82f6] animate-loading-bar"})})]})},Jx=({menuOpen:s,setMenuOpen:t})=>(En.useEffect(()=>{document.body.style.overflow=s?"hidden":""},[s]),J.jsx("nav",{className:"fixed top-0 w-full z-40 bg-transparent backdrop-blur-lg border-b border-white/10 shadow-lg",children:J.jsx("div",{className:"max-w-5xl mx-auto px-4",children:J.jsxs("div",{className:"flex justify-between items-center h-16",children:[J.jsxs("a",{href:"#home",className:"font-mono text-2xl font-bold text-zinc-100",children:["Lenlo",J.jsx("span",{className:"text-sky-500",children:"Dev"})]}),J.jsx("div",{className:"w-7 h-5 relative cursor-pointer z-40 md:hidden",onClick:()=>t(i=>!i),children:"☰"}),J.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[J.jsx("a",{href:"#home",className:"text-zinc-100 hover:text-sky-400 transition-colors",children:"Home"}),J.jsx("a",{href:"#about",className:"text-zinc-100 hover:text-sky-400 transition-colors",children:"About"}),J.jsx("a",{href:"#skills",className:"text-zinc-100 hover:text-sky-400 transition-colors",children:"Skills"}),J.jsx("a",{href:"#projects",className:"text-zinc-100 hover:text-sky-400 transition-colors",children:"Projects"}),J.jsx("a",{href:"#contact",className:"text-zinc-100 hover:text-sky-400 transition-colors",children:"Contact"})]})]})})})),$x=({menuOpen:s,setMenuOpen:t})=>J.jsxs("div",{className:`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${s?"h-screen pointer-events-auto opacity-100":"h-0 pointer-events-none opacity-0"} `,children:[J.jsx("button",{onClick:()=>t(!1),className:"absolute top-6 right-6 text-zinc-100 hover:text-sky-500 text-3xl focus:outline-none cursor-pointer","aria-label":"Close menu",children:"×"}),J.jsx("a",{href:"#home",onClick:()=>t(!1),className:`text-2xl font-semibold text-zinc-100 hover:text-sky-500 my-4 transform transition-transform duration-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Home"}),J.jsx("a",{href:"#about",onClick:()=>t(!1),className:`text-2xl font-semibold text-zinc-100 hover:text-sky-500 my-4 transform transition-transform duration-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"About"}),J.jsx("a",{href:"#skills",onClick:()=>t(!1),className:`text-2xl font-semibold text-zinc-100 hover:text-sky-500 my-4 transform transition-transform duration-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Skills"}),J.jsx("a",{href:"#projects",onClick:()=>t(!1),className:`text-2xl font-semibold text-zinc-100 hover:text-sky-500 my-4 transform transition-transform duration-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Projects"}),J.jsx("a",{href:"#contact",onClick:()=>t(!1),className:`text-2xl font-semibold text-zinc-100 hover:text-sky-500 my-4 transform transition-transform duration-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Contact"})]}),Ms=({children:s})=>{const t=En.useRef(null);return En.useEffect(()=>{const i=new IntersectionObserver(([r])=>{r.isIntersecting&&t.current.classList.add("visible")},{threshold:.2,rootMargin:"0px 0px -50px 0px"});return t.current&&i.observe(t.current),()=>i.disconnect()}),J.jsx("div",{ref:t,className:"reveal",children:s})};var a0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i_=xr.createContext&&xr.createContext(a0),tS=["attr","size","title"];function eS(s,t){if(s==null)return{};var i=nS(s,t),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(l=0;l<u.length;l++)r=u[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function nS(s,t){if(s==null)return{};var i={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(t.indexOf(r)>=0)continue;i[r]=s[r]}return i}function Ec(){return Ec=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Ec.apply(this,arguments)}function a_(s,t){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function bc(s){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?a_(Object(i),!0).forEach(function(r){iS(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):a_(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function iS(s,t,i){return t=aS(t),t in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}function aS(s){var t=rS(s,"string");return typeof t=="symbol"?t:t+""}function rS(s,t){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function r0(s){return s&&s.map((t,i)=>xr.createElement(t.tag,bc({key:i},t.attr),r0(t.child)))}function Cc(s){return t=>xr.createElement(sS,Ec({attr:bc({},s.attr)},t),r0(s.child))}function sS(s){var t=i=>{var{attr:r,size:l,title:u}=s,h=eS(s,tS),d=l||i.size||"1em",m;return i.className&&(m=i.className),s.className&&(m=(m?m+" ":"")+s.className),xr.createElement("svg",Ec({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:bc(bc({color:s.color||i.color},i.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&xr.createElement("title",null,u),s.children)};return i_!==void 0?xr.createElement(i_.Consumer,null,i=>t(i)):t(a0)}function oS(s){return Cc({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(s)}function lS(s){return Cc({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function cS(s){return Cc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(s)}function uS(s){return Cc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}const fS=()=>{const[s,t]=En.useState(""),[i,r]=En.useState(0),[l,u]=En.useState(!1),h="Hi, I'm LenloDev",d=150,m=50,p=2e3;return En.useEffect(()=>{const _=setTimeout(()=>{!l&&i<h.length?(t(v=>v+h[i]),r(v=>v+1)):!l&&i===h.length?setTimeout(()=>u(!0),p):l&&i>0?(t(v=>v.slice(0,-1)),r(v=>v-1)):l&&i===0&&u(!1)},l?m:d);return()=>clearTimeout(_)},[i,l,h]),J.jsx("section",{id:"home",className:"min-h-screen flex items-center justify-center relative",children:J.jsx(Ms,{children:J.jsxs("div",{className:"text-center z-10 px-4",children:[J.jsxs("h1",{className:"text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent leading-tight",children:[s,J.jsx("span",{className:"animate-pulse",children:"|"})]}),J.jsx("p",{className:"text-zinc-100 text-lg mb-8 max-w-lg mx-auto",children:"I'm a passionate Web Developer specializing in building scalable, high-performance web applications. I craft clean, maintainable code with a strong focus on performance, usability, and user-centric design."}),J.jsxs("div",{className:"flex justify-center space-x-4",children:[J.jsx("a",{href:"https://drive.google.com/file/d/17rsooKgPO96dmhuoEX-NLYf7fp8w7glC/view?usp=drive_link",target:"_blank",rel:"noopener noreferrer",className:"bg-blue-500 text-zinc-100 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]",children:"Resume"}),J.jsx("a",{href:"#contact",className:"border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10",children:"Contact Me!"})]}),J.jsxs("div",{className:"flex justify-center space-x-4 mt-6",children:[J.jsx("a",{href:"https://www.facebook.com/raul.cartativo.castillo/",target:"_blank",rel:"noopener noreferrer",className:"text-zinc-100 hover:text-white hover:bg-blue-600 p-2 rounded-md hover:scale-110 transition-all duration-300",children:J.jsx(oS,{className:"w-9 h-9"})}),J.jsx("a",{href:"https://www.instagram.com/cchivalryyyy/",target:"_blank",rel:"noopener noreferrer",className:"text-zinc-100 hover:text-white hover:bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-md hover:scale-110 transition-all duration-300",children:J.jsx(cS,{className:"w-9 h-9"})}),J.jsx("a",{href:"https://github.com/lenlo121500",target:"_blank",rel:"noopener noreferrer",className:"text-zinc-100 hover:text-black hover:bg-white p-2 rounded-md hover:scale-110 transition-all duration-300",children:J.jsx(lS,{className:"w-9 h-9"})}),J.jsx("a",{href:"https://www.linkedin.com/in/raulc8808/",target:"_blank",rel:"noopener noreferrer",className:"text-zinc-100 hover:text-white hover:bg-blue-700 p-2 rounded-md hover:scale-110 transition-all duration-300",children:J.jsx(uS,{className:"w-9 h-9"})})]})]})})})},hS=()=>{const s=["React","Next.JS","TailwindCSS","TypeScript","HTML"],t=["NodeJS","ExpressJS","MongoDB","PostgreSQL","JWT","JavaScript"];return J.jsx("section",{id:"about",className:"min-h-screen flex items-center justify-center py-20",children:J.jsx(Ms,{children:J.jsxs("div",{className:"max-w-3xl mx-auto px-4",children:[J.jsx("h2",{className:"text-3xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent text-center",children:"About Me"}),J.jsxs("div",{className:"rounded-xl p-8 border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all",children:[J.jsx("p",{className:"text-zinc-100 mb-6",children:"I’m a passionate and driven developer with a strong foundation in building scalable web applications and developing thoughtful, innovative solutions."}),J.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[J.jsxs("div",{className:"rounded-xl p-6 hover:-translate-y-1 transition-all",children:[J.jsx("h3",{className:"text-xl font-bold mb-4",children:"Frontend"}),J.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(i=>J.jsx("span",{className:"bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-colors",children:i},i))})]}),J.jsxs("div",{className:"rounded-xl p-6 hover:-translate-y-1 transition-all",children:[J.jsx("h3",{className:"text-xl font-bold mb-4",children:"Backend"}),J.jsx("div",{className:"flex flex-wrap gap-2",children:t.map(i=>J.jsx("span",{className:"bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-colors",children:i},i))})]})]}),J.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-8",children:[J.jsxs("div",{className:"p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all",children:[J.jsx("h3",{className:"text-xl font-bold mb-4",children:" 👨‍🎓 Education"}),J.jsxs("ul",{className:"list-disc list-inside text-zinc-100 space-y-2",children:[J.jsxs("li",{children:[J.jsx("strong",{children:"B.S in Computer Science"})," - ICCT Colleges [2021 - 2024]"]}),J.jsxs("li",{children:[J.jsx("strong",{children:"Achievements: "})," Cum Laude, President's Lister, ICCT & LGU Scholarship Awardee"]})]})]}),J.jsxs("div",{className:"p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all",children:[J.jsx("h3",{className:"text-xl font-bold mb-4",children:" 💼 Work Experience"}),J.jsx("div",{className:"space-y-4 text-zinc-100",children:J.jsxs("div",{children:[J.jsx("h4",{className:"font-semibold",children:"Record Officer Assistant"}),J.jsx("p",{className:"text-sm",children:"- On The Job Training assigned at ICCT Colleges Registrar"}),J.jsx("p",{className:"text-sm",children:"- Data Encoding"}),J.jsx("p",{className:"text-sm",children:"- Portal Assistance"}),J.jsx("p",{className:"text-sm",children:"- Digital Campaign"}),J.jsx("p",{className:"text-sm",children:"- Telemarketing Activities"})]})})]})]})]})]})})})},dS=()=>J.jsx("section",{id:"projects",className:"min-h-screen flex items-center justify-center py-20",children:J.jsx(Ms,{children:J.jsxs("div",{className:"max-w-5xl mx-auto px-4",children:[J.jsx("h2",{className:"text-3xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent justify-center text-center",children:"Featured Projects"}),J.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[J.jsxs("div",{className:"p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all",children:[J.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quably | Project Management Tool"}),J.jsx("p",{className:"text-zinc-100 mb-4",children:"Quably is a project management tool that allows users to create, manage, and collaborate on projects and tasks with ease inside a workspace. The owner of the workspace can invite other users to join and manage the project."}),J.jsx("div",{className:"flex flex-wrap gap-1 mt-4",children:["MongoDB","ExpressJS","NodeJS","React","Tailwindcss","Typescript","JWT"].map((s,t)=>J.jsx("span",{className:"bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition",children:s},t))}),J.jsx("div",{className:"flex justify-between items-center mt-4",children:J.jsxs("p",{children:["Click the link to view the project. →"," ",J.jsx("a",{href:"https://github.com/lenlo121500/Quably",target:"_blank",className:"text-sky-400 hover:text-zinc-100 transition-colors",children:"Link"})]})})]}),J.jsxs("div",{className:"p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all",children:[J.jsx("h3",{className:"text-xl font-bold mb-2",children:"MERN Authentication System"}),J.jsx("p",{className:"text-zinc-100 mb-4",children:"Full-stack authentication system built with MERN stack. It includes User Authentication, JWT-Based Authorization, State Managements, Email notifications, and more."}),J.jsx("div",{className:"flex flex-wrap gap-1 mt-4",children:["MongoDB","ExpressJS","NodeJS","React","Zustand","Tailwindcss","Mailtrap","JWT"].map((s,t)=>J.jsx("span",{className:"bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition",children:s},t))}),J.jsx("div",{className:"flex justify-between items-center mt-4",children:J.jsxs("p",{children:["Click the link to view the project. →"," ",J.jsx("a",{href:"https://auth-system-s7q8.onrender.com/",target:"_blank",className:"text-sky-400 hover:text-zinc-100 transition-colors",children:"Link"})]})})]}),J.jsxs("div",{className:"p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all",children:[J.jsx("h3",{className:"text-xl font-bold mb-2",children:"Wisp Chat Application"}),J.jsx("p",{className:"text-zinc-100 mb-4",children:"A modern, real-time chat application built with the MERN stack. Featuring user authentication, real-time messaging with Socket.io, image uploads with Cloudinary, and a sleek frontend UI powered by React, TailwindCSS, and Zustand state management."}),J.jsx("div",{className:"flex flex-wrap gap-1 mt-4",children:["MongoDB","ExpressJS","NodeJS","React","Tailwindcss","Socket.io","Cloudinary","JWT"].map((s,t)=>J.jsx("span",{className:"bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition",children:s},t))}),J.jsx("div",{className:"flex justify-between items-center mt-4",children:J.jsxs("p",{children:["Click the link to view the project. →"," ",J.jsx("a",{href:"https://github.com/lenlo121500/wisp-chat-app/blob/main/README.md",target:"_blank",className:"text-sky-400 hover:text-zinc-100 transition-colors",children:"Link"})]})})]}),J.jsxs("div",{className:"p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all",children:[J.jsx("h3",{className:"text-xl font-bold mb-2",children:"Subscription Tracker API"}),J.jsx("p",{className:"text-zinc-100 mb-4",children:"A backend service built with Node.js and Express.js for managing user subscriptions, sending email reminders, and handling renewals. Built with scalability, security, and real-world patterns in mind."}),J.jsx("div",{className:"flex flex-wrap gap-1 mt-4",children:["MongoDB","ExpressJS","NodeJS","NodeMailer/Upstash","Arcjet","JWT"].map((s,t)=>J.jsx("span",{className:"bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition",children:s},t))}),J.jsx("div",{className:"flex justify-between items-center mt-4",children:J.jsxs("p",{children:["Click the link to view the project. →"," ",J.jsx("a",{href:"https://github.com/lenlo121500/subscription-tracker/blob/main/README.md",target:"_blank",className:"text-sky-400 hover:text-zinc-100 transition-colors",children:"Link"})]})})]})]})]})})}),Ro={_origin:"https://api.emailjs.com"},pS=(s,t="https://api.emailjs.com")=>{Ro._userID=s,Ro._origin=t},s0=(s,t,i)=>{if(!s)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class r_{constructor(t){this.status=t.status,this.text=t.responseText}}const o0=(s,t,i={})=>new Promise((r,l)=>{const u=new XMLHttpRequest;u.addEventListener("load",({target:h})=>{const d=new r_(h);d.status===200||d.text==="OK"?r(d):l(d)}),u.addEventListener("error",({target:h})=>{l(new r_(h))}),u.open("POST",Ro._origin+s,!0),Object.keys(i).forEach(h=>{u.setRequestHeader(h,i[h])}),u.send(t)}),mS=(s,t,i,r)=>{const l=r||Ro._userID;return s0(l,s,t),o0("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:l,service_id:s,template_id:t,template_params:i}),{"Content-type":"application/json"})},gS=s=>{let t;if(typeof s=="string"?t=document.querySelector(s):t=s,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},_S=(s,t,i,r)=>{const l=r||Ro._userID,u=gS(i);s0(l,s,t);const h=new FormData(u);return h.append("lib_version","3.2.0"),h.append("service_id",s),h.append("template_id",t),h.append("user_id",l),o0("/api/v1.0/email/send-form",h)},vS={init:pS,send:mS,sendForm:_S},xS=()=>{const[s,t]=En.useState({name:"",email:"",message:""}),i="service_lnbiopj",r="template_wiqbk7t",l="disgObuWn_Ocivu80",u=h=>{h.preventDefault(),vS.sendForm(i,r,h.target,l).then(()=>{alert("Message Sent Successfully!"),t({name:"",email:"",message:""})}).catch(()=>alert("Message Failed to Send"))};return J.jsx("section",{id:"contact",className:"min-h-screen flex items-center justify-center py-20",children:J.jsx(Ms,{children:J.jsxs("div",{className:"px-4 w-full md:w-150",children:[J.jsx("h2",{className:"text-3xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent text-center",children:"Let's Connect"}),J.jsxs("form",{className:"space-y-6",onSubmit:u,children:[J.jsx("div",{className:"relative",children:J.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Name",required:!0,value:s.name,onChange:h=>t({...s,name:h.target.value}),className:"w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-zinc-100 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"})}),J.jsx("div",{className:"relative",children:J.jsx("input",{type:"email",id:"email",name:"email",placeholder:"youremail@example.com",required:!0,value:s.email,onChange:h=>t({...s,email:h.target.value}),className:"w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-zinc-100 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"})}),J.jsx("div",{className:"relative",children:J.jsx("textarea",{id:"message",name:"message",rows:5,placeholder:"Your Message...",required:!0,value:s.message,onChange:h=>t({...s,message:h.target.value}),className:"w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-zinc-100 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"})}),J.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-zinc-100 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]",children:"Send Message"})]})]})})})},SS=()=>J.jsx("footer",{className:"bg-transparent",children:J.jsx(Ms,{children:J.jsx("div",{className:"max-w-5xl mx-auto px-4",children:J.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center py-6 md:py-12",children:[J.jsx("p",{className:"text-zinc-100 text-sm md:text-base",children:"© 2025 LenloDev. All rights reserved."}),J.jsx("p",{className:"text-zinc-100 text-sm md:text-base",children:"Designed and Developed by LenloDev"})]})})})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="177",yS=0,s_=1,MS=2,l0=1,ES=2,Ji=3,Ha=0,In=1,$i=2,Ia=0,ps=1,o_=2,l_=3,c_=4,bS=5,mr=100,TS=101,AS=102,RS=103,CS=104,wS=200,DS=201,US=202,NS=203,xh=204,Sh=205,LS=206,OS=207,PS=208,zS=209,BS=210,IS=211,FS=212,HS=213,GS=214,yh=0,Mh=1,Eh=2,_s=3,bh=4,Th=5,Ah=6,Rh=7,c0=0,VS=1,kS=2,Fa=0,XS=1,WS=2,qS=3,YS=4,jS=5,ZS=6,KS=7,u0=300,vs=301,xs=302,Ch=303,wh=304,wc=306,Dh=1e3,_r=1001,Uh=1002,gi=1003,QS=1004,Yl=1005,Ai=1006,Vf=1007,vr=1008,ia=1009,f0=1010,h0=1011,Co=1012,cd=1013,Sr=1014,ta=1015,No=1016,ud=1017,fd=1018,wo=1020,d0=35902,p0=1021,m0=1022,mi=1023,Do=1026,Uo=1027,g0=1028,hd=1029,_0=1030,dd=1031,pd=1033,_c=33776,vc=33777,xc=33778,Sc=33779,Nh=35840,Lh=35841,Oh=35842,Ph=35843,zh=36196,Bh=37492,Ih=37496,Fh=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,qh=37815,Yh=37816,jh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,yc=36492,$h=36494,td=36495,v0=36283,ed=36284,nd=36285,id=36286,JS=3200,$S=3201,ty=0,ey=1,Ba="",si="srgb",Ss="srgb-linear",Tc="linear",Be="srgb",$r=7680,u_=519,ny=512,iy=513,ay=514,x0=515,ry=516,sy=517,oy=518,ly=519,f_=35044,h_="300 es",ea=2e3,Ac=2001;class Es{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kf=Math.PI/180,ad=180/Math.PI;function Lo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function xe(s,t,i){return Math.max(t,Math.min(i,s))}function cy(s,t){return(s%t+t)%t}function Xf(s,t,i){return(1-i)*s+i*t}function yo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(t=0,i=0){Ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3];const x=u[h+0],M=u[h+1],T=u[h+2],w=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=T,t[i+3]=w;return}if(v!==w||m!==x||p!==M||_!==T){let y=1-d;const g=m*x+p*M+_*T+v*w,N=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){const I=Math.sqrt(U),F=Math.atan2(I,g*N);y=Math.sin(y*F)/I,d=Math.sin(d*F)/I}const C=d*N;if(m=m*y+x*C,p=p*y+M*C,_=_*y+T*C,v=v*y+w*C,y===1-d){const I=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=I,p*=I,_*=I,v*=I}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=u[h],x=u[h+1],M=u[h+2],T=u[h+3];return t[i]=d*T+_*v+m*M-p*x,t[i+1]=m*T+_*x+p*v-d*M,t[i+2]=p*T+_*M+d*x-m*v,t[i+3]=_*T-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),v=d(u/2),x=m(r/2),M=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=x*_*v+p*M*T,this._y=p*M*v-x*_*T,this._z=p*_*T+x*M*v,this._w=p*_*v-x*M*T;break;case"YXZ":this._x=x*_*v+p*M*T,this._y=p*M*v-x*_*T,this._z=p*_*T-x*M*v,this._w=p*_*v+x*M*T;break;case"ZXY":this._x=x*_*v-p*M*T,this._y=p*M*v+x*_*T,this._z=p*_*T+x*M*v,this._w=p*_*v-x*M*T;break;case"ZYX":this._x=x*_*v-p*M*T,this._y=p*M*v+x*_*T,this._z=p*_*T-x*M*v,this._w=p*_*v+x*M*T;break;case"YZX":this._x=x*_*v+p*M*T,this._y=p*M*v+x*_*T,this._z=p*_*T-x*M*v,this._w=p*_*v-x*M*T;break;case"XZY":this._x=x*_*v-p*M*T,this._y=p*M*v-x*_*T,this._z=p*_*T+x*M*v,this._w=p*_*v+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-r*p,this._z=u*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,i=0,r=0){it.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(d_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(d_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),_=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*_,this.y=r+m*_+d*p-u*v,this.z=l+m*v+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Wf.copy(this).projectOnVector(t),this.sub(Wf)}reflect(t){return this.sub(Wf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wf=new it,d_=new Oo;class se{constructor(t,i,r,l,u,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],v=r[7],x=r[2],M=r[5],T=r[8],w=l[0],y=l[3],g=l[6],N=l[1],U=l[4],C=l[7],I=l[2],F=l[5],B=l[8];return u[0]=h*w+d*N+m*I,u[3]=h*y+d*U+m*F,u[6]=h*g+d*C+m*B,u[1]=p*w+_*N+v*I,u[4]=p*y+_*U+v*F,u[7]=p*g+_*C+v*B,u[2]=x*w+M*N+T*I,u[5]=x*y+M*U+T*F,u[8]=x*g+M*C+T*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-r*u*_+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*h-d*p,x=d*m-_*u,M=p*u-h*m,T=i*v+r*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=v*w,t[1]=(l*p-_*r)*w,t[2]=(d*r-l*h)*w,t[3]=x*w,t[4]=(_*i-l*m)*w,t[5]=(l*u-d*i)*w,t[6]=M*w,t[7]=(r*m-p*i)*w,t[8]=(h*i-r*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(qf.makeScale(t,i)),this}rotate(t){return this.premultiply(qf.makeRotation(-t)),this}translate(t,i){return this.premultiply(qf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new se;function S0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Rc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uy(){const s=Rc("canvas");return s.style.display="block",s}const p_={};function ms(s){s in p_||(p_[s]=!0,console.warn(s))}function fy(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function hy(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dy(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const m_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function py(){const s={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=gs(l.r),l.g=gs(l.g),l.b=gs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ba?Tc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ss]:{primaries:t,whitePoint:r,transfer:Tc,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Te=py();function na(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ts;class my{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ts===void 0&&(ts=Rc("canvas")),ts.width=t.width,ts.height=t.height;const l=ts.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ts}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Rc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=na(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gy=0;class md{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Lo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Yf(l[h].image)):u.push(Yf(l[h]))}else u=Yf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Yf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?my.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _y=0;const jf=new it;class Fn extends Es{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=_r,l=_r,u=Ai,h=vr,d=mi,m=ia,p=Fn.DEFAULT_ANISOTROPY,_=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Lo(),this.name="",this.source=new md(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jf).x}get height(){return this.source.getSize(jf).y}get depth(){return this.source.getSize(jf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==u0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dh:t.x=t.x-Math.floor(t.x);break;case _r:t.x=t.x<0?0:1;break;case Uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dh:t.y=t.y-Math.floor(t.y);break;case _r:t.y=t.y<0?0:1;break;case Uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=u0;Fn.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],v=m[8],x=m[1],M=m[5],T=m[9],w=m[2],y=m[6],g=m[10];if(Math.abs(_-x)<.01&&Math.abs(v-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+w)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,C=(M+1)/2,I=(g+1)/2,F=(_+x)/4,B=(v+w)/4,X=(T+y)/4;return U>C&&U>I?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=F/r,u=B/r):C>I?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=F/l,u=X/l):I<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),r=B/u,l=X/u),this.set(r,l,u,i),this}let N=Math.sqrt((y-T)*(y-T)+(v-w)*(v-w)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(v-w)/N,this.z=(x-_)/N,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vy extends Es{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Je(0,0,t,i),this.scissorTest=!1,this.viewport=new Je(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Fn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new md(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends vy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class y0 extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xy extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(t=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,fi):fi.fromBufferAttribute(u,h),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jl.copy(r.boundingBox)),jl.applyMatrix4(t.matrixWorld),this.union(jl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mo),Zl.subVectors(this.max,Mo),es.subVectors(t.a,Mo),ns.subVectors(t.b,Mo),is.subVectors(t.c,Mo),Ua.subVectors(ns,es),Na.subVectors(is,ns),or.subVectors(es,is);let i=[0,-Ua.z,Ua.y,0,-Na.z,Na.y,0,-or.z,or.y,Ua.z,0,-Ua.x,Na.z,0,-Na.x,or.z,0,-or.x,-Ua.y,Ua.x,0,-Na.y,Na.x,0,-or.y,or.x,0];return!Zf(i,es,ns,is,Zl)||(i=[1,0,0,0,1,0,0,0,1],!Zf(i,es,ns,is,Zl))?!1:(Kl.crossVectors(Ua,Na),i=[Kl.x,Kl.y,Kl.z],Zf(i,es,ns,is,Zl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Yi=[new it,new it,new it,new it,new it,new it,new it,new it],fi=new it,jl=new Po,es=new it,ns=new it,is=new it,Ua=new it,Na=new it,or=new it,Mo=new it,Zl=new it,Kl=new it,lr=new it;function Zf(s,t,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){lr.fromArray(s,u);const d=l.x*Math.abs(lr.x)+l.y*Math.abs(lr.y)+l.z*Math.abs(lr.z),m=t.dot(lr),p=i.dot(lr),_=r.dot(lr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Sy=new Po,Eo=new it,Kf=new it;class Dc{constructor(t=new it,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Sy.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Eo.subVectors(t,this.center);const i=Eo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Eo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Eo.copy(t.center).add(Kf)),this.expandByPoint(Eo.copy(t.center).sub(Kf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ji=new it,Qf=new it,Ql=new it,La=new it,Jf=new it,Jl=new it,$f=new it;class M0{constructor(t=new it,i=new it(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,i),ji.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Qf.copy(t).add(i).multiplyScalar(.5),Ql.copy(i).sub(t).normalize(),La.copy(this.origin).sub(Qf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Ql),d=La.dot(this.direction),m=-La.dot(Ql),p=La.lengthSq(),_=Math.abs(1-h*h);let v,x,M,T;if(_>0)if(v=h*m-d,x=h*d-m,T=u*_,v>=0)if(x>=-T)if(x<=T){const w=1/_;v*=w,x*=w,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-T?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=T?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Qf).addScaledVector(Ql,x),M}intersectSphere(t,i){ji.subVectors(t.center,this.origin);const r=ji.dot(this.direction),l=ji.dot(ji)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(u=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(u=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,i,r,l,u){Jf.subVectors(i,t),Jl.subVectors(r,t),$f.crossVectors(Jf,Jl);let h=this.direction.dot($f),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;La.subVectors(this.origin,t);const m=d*this.direction.dot(Jl.crossVectors(La,Jl));if(m<0)return null;const p=d*this.direction.dot(Jf.cross(La));if(p<0||m+p>h)return null;const _=-d*La.dot($f);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,i,r,l,u,h,d,m,p,_,v,x,M,T,w,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,_,v,x,M,T,w,y)}set(t,i,r,l,u,h,d,m,p,_,v,x,M,T,w,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=T,g[11]=w,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/as.setFromMatrixColumn(t,0).length(),u=1/as.setFromMatrixColumn(t,1).length(),h=1/as.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*_,M=h*v,T=d*_,w=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=x-w*p,i[9]=-d*m,i[2]=w-x*p,i[6]=T+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*_,M=m*v,T=p*_,w=p*v;i[0]=x+w*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-T,i[6]=w+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*_,M=m*v,T=p*_,w=p*v;i[0]=x-w*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*_,i[9]=w-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*_,M=h*v,T=d*_,w=d*v;i[0]=m*_,i[4]=T*p-M,i[8]=x*p+w,i[1]=m*v,i[5]=w*p+x,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,T=d*m,w=d*p;i[0]=m*_,i[4]=w-x*v,i[8]=T*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+T,i[10]=x-w*v}else if(t.order==="XZY"){const x=h*m,M=h*p,T=d*m,w=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=x*v+w,i[5]=h*_,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*_,i[10]=w*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yy,t,My)}lookAt(t,i,r){const l=this.elements;return Zn.subVectors(t,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Oa.crossVectors(r,Zn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Oa.crossVectors(r,Zn)),Oa.normalize(),$l.crossVectors(Zn,Oa),l[0]=Oa.x,l[4]=$l.x,l[8]=Zn.x,l[1]=Oa.y,l[5]=$l.y,l[9]=Zn.y,l[2]=Oa.z,l[6]=$l.z,l[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],v=r[5],x=r[9],M=r[13],T=r[2],w=r[6],y=r[10],g=r[14],N=r[3],U=r[7],C=r[11],I=r[15],F=l[0],B=l[4],X=l[8],D=l[12],R=l[1],G=l[5],lt=l[9],ot=l[13],vt=l[2],dt=l[6],z=l[10],Z=l[14],Y=l[3],Et=l[7],L=l[11],tt=l[15];return u[0]=h*F+d*R+m*vt+p*Y,u[4]=h*B+d*G+m*dt+p*Et,u[8]=h*X+d*lt+m*z+p*L,u[12]=h*D+d*ot+m*Z+p*tt,u[1]=_*F+v*R+x*vt+M*Y,u[5]=_*B+v*G+x*dt+M*Et,u[9]=_*X+v*lt+x*z+M*L,u[13]=_*D+v*ot+x*Z+M*tt,u[2]=T*F+w*R+y*vt+g*Y,u[6]=T*B+w*G+y*dt+g*Et,u[10]=T*X+w*lt+y*z+g*L,u[14]=T*D+w*ot+y*Z+g*tt,u[3]=N*F+U*R+C*vt+I*Y,u[7]=N*B+U*G+C*dt+I*Et,u[11]=N*X+U*lt+C*z+I*L,u[15]=N*D+U*ot+C*Z+I*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],x=t[10],M=t[14],T=t[3],w=t[7],y=t[11],g=t[15];return T*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*M-r*m*M)+w*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*_-u*m*_)+y*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*_-r*p*_)+g*(-l*d*_-i*m*v+i*d*x+l*h*v-r*h*x+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],x=t[10],M=t[11],T=t[12],w=t[13],y=t[14],g=t[15],N=v*y*p-w*x*p+w*m*M-d*y*M-v*m*g+d*x*g,U=T*x*p-_*y*p-T*m*M+h*y*M+_*m*g-h*x*g,C=_*w*p-T*v*p+T*d*M-h*w*M-_*d*g+h*v*g,I=T*v*m-_*w*m-T*d*x+h*w*x+_*d*y-h*v*y,F=i*N+r*U+l*C+u*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/F;return t[0]=N*B,t[1]=(w*x*u-v*y*u-w*l*M+r*y*M+v*l*g-r*x*g)*B,t[2]=(d*y*u-w*m*u+w*l*p-r*y*p-d*l*g+r*m*g)*B,t[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*M-r*m*M)*B,t[4]=U*B,t[5]=(_*y*u-T*x*u+T*l*M-i*y*M-_*l*g+i*x*g)*B,t[6]=(T*m*u-h*y*u-T*l*p+i*y*p+h*l*g-i*m*g)*B,t[7]=(h*x*u-_*m*u+_*l*p-i*x*p-h*l*M+i*m*M)*B,t[8]=C*B,t[9]=(T*v*u-_*w*u-T*r*M+i*w*M+_*r*g-i*v*g)*B,t[10]=(h*w*u-T*d*u+T*r*p-i*w*p-h*r*g+i*d*g)*B,t[11]=(_*d*u-h*v*u-_*r*p+i*v*p+h*r*M-i*d*M)*B,t[12]=I*B,t[13]=(_*w*l-T*v*l+T*r*x-i*w*x-_*r*y+i*v*y)*B,t[14]=(T*d*l-h*w*l-T*r*m+i*w*m+h*r*y-i*d*y)*B,t[15]=(h*v*l-_*d*l+_*r*m-i*v*m-h*r*x+i*d*x)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,v=d+d,x=u*p,M=u*_,T=u*v,w=h*_,y=h*v,g=d*v,N=m*p,U=m*_,C=m*v,I=r.x,F=r.y,B=r.z;return l[0]=(1-(w+g))*I,l[1]=(M+C)*I,l[2]=(T-U)*I,l[3]=0,l[4]=(M-C)*F,l[5]=(1-(x+g))*F,l[6]=(y+N)*F,l[7]=0,l[8]=(T+U)*B,l[9]=(y-N)*B,l[10]=(1-(x+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=as.set(l[0],l[1],l[2]).length();const h=as.set(l[4],l[5],l[6]).length(),d=as.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],hi.copy(this);const p=1/u,_=1/h,v=1/d;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=_,hi.elements[5]*=_,hi.elements[6]*=_,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,i.setFromRotationMatrix(hi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=ea){const m=this.elements,p=2*u/(i-t),_=2*u/(r-l),v=(i+t)/(i-t),x=(r+l)/(r-l);let M,T;if(d===ea)M=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(d===Ac)M=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=ea){const m=this.elements,p=1/(i-t),_=1/(r-l),v=1/(h-u),x=(i+t)*p,M=(r+l)*_;let T,w;if(d===ea)T=(h+u)*v,w=-2*v;else if(d===Ac)T=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const as=new it,hi=new $e,yy=new it(0,0,0),My=new it(1,1,1),Oa=new it,$l=new it,Zn=new it,__=new $e,v_=new Oo;class aa{constructor(t=0,i=0,r=0,l=aa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return __.makeRotationFromQuaternion(t),this.setFromRotationMatrix(__,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return v_.setFromEuler(this),this.setFromQuaternion(v_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aa.DEFAULT_ORDER="XYZ";class E0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ey=0;const x_=new it,rs=new Oo,Zi=new $e,tc=new it,bo=new it,by=new it,Ty=new Oo,S_=new it(1,0,0),y_=new it(0,1,0),M_=new it(0,0,1),E_={type:"added"},Ay={type:"removed"},ss={type:"childadded",child:null},th={type:"childremoved",child:null};class Hn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new it,i=new aa,r=new Oo,l=new it(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new se}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return rs.setFromAxisAngle(t,i),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,i){return rs.setFromAxisAngle(t,i),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(S_,t)}rotateY(t){return this.rotateOnAxis(y_,t)}rotateZ(t){return this.rotateOnAxis(M_,t)}translateOnAxis(t,i){return x_.copy(t).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(S_,t)}translateY(t){return this.translateOnAxis(y_,t)}translateZ(t){return this.translateOnAxis(M_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?tc.copy(t):tc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(bo,tc,this.up):Zi.lookAt(tc,bo,this.up),this.quaternion.setFromRotationMatrix(Zi),l&&(Zi.extractRotation(l.matrixWorld),rs.setFromRotationMatrix(Zi),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(E_),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ay),th.child=t,this.dispatchEvent(th),th.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(E_),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,t,by),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,Ty,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new it(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new it,Ki=new it,eh=new it,Qi=new it,os=new it,ls=new it,b_=new it,nh=new it,ih=new it,ah=new it,rh=new Je,sh=new Je,oh=new Je;class pi{constructor(t=new it,i=new it,r=new it){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),di.subVectors(t,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){di.subVectors(l,i),Ki.subVectors(r,i),eh.subVectors(t,i);const h=di.dot(di),d=di.dot(Ki),m=di.dot(eh),p=Ki.dot(Ki),_=Ki.dot(eh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*_)*x,T=(h*_-d*m)*x;return u.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,Qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Qi.x),m.addScaledVector(h,Qi.y),m.addScaledVector(d,Qi.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return rh.setScalar(0),sh.setScalar(0),oh.setScalar(0),rh.fromBufferAttribute(t,i),sh.fromBufferAttribute(t,r),oh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(rh,u.x),h.addScaledVector(sh,u.y),h.addScaledVector(oh,u.z),h}static isFrontFacing(t,i,r,l){return di.subVectors(r,i),Ki.subVectors(t,i),di.cross(Ki).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),di.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return pi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;os.subVectors(l,r),ls.subVectors(u,r),nh.subVectors(t,r);const m=os.dot(nh),p=ls.dot(nh);if(m<=0&&p<=0)return i.copy(r);ih.subVectors(t,l);const _=os.dot(ih),v=ls.dot(ih);if(_>=0&&v<=_)return i.copy(l);const x=m*v-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(os,h);ah.subVectors(t,u);const M=os.dot(ah),T=ls.dot(ah);if(T>=0&&M<=T)return i.copy(u);const w=M*p-m*T;if(w<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(ls,d);const y=_*T-M*v;if(y<=0&&v-_>=0&&M-T>=0)return b_.subVectors(u,l),d=(v-_)/(v-_+(M-T)),i.copy(l).addScaledVector(b_,d);const g=1/(y+w+x);return h=w*g,d=x*g,i.copy(r).addScaledVector(os,h).addScaledVector(ls,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},ec={h:0,s:0,l:0};function lh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ne{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Te.workingColorSpace){if(t=cy(t,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=lh(h,u,t+1/3),this.g=lh(h,u,t),this.b=lh(h,u,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const r=b0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=na(t.r),this.g=na(t.g),this.b=na(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Te.workingToColorSpace(wn.copy(this),t),Math.round(xe(wn.r*255,0,255))*65536+Math.round(xe(wn.g*255,0,255))*256+Math.round(xe(wn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=si){Te.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+t,Pa.s+i,Pa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Pa),t.getHSL(ec);const r=Xf(Pa.h,ec.h,i),l=Xf(Pa.s,ec.s,i),u=Xf(Pa.l,ec.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ne;Ne.NAMES=b0;let Ry=0;class zo extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=ps,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Sh,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(r.blending=this.blending),this.side!==Ha&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Sh&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gd extends zo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.combine=c0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new it,nc=new Ce;let Cy=0;class _i{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=f_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)nc.fromBufferAttribute(this,i),nc.applyMatrix3(t),this.setXY(i,nc.x,nc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=yo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=yo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=yo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=yo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=yo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==f_&&(t.usage=this.usage),t}}class T0 extends _i{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class A0 extends _i{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Qn extends _i{constructor(t,i,r){super(new Float32Array(t),i,r)}}let wy=0;const ri=new $e,ch=new Hn,cs=new it,Kn=new Po,To=new Po,gn=new it;class vi extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(S0(t)?A0:T0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,i,r){return ri.makeTranslation(t,i,r),this.applyMatrix4(ri),this}scale(t,i,r){return ri.makeScale(t,i,r),this.applyMatrix4(ri),this}lookAt(t){return ch.lookAt(t),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Qn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];To.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Kn.min,To.min),Kn.expandByPoint(gn),gn.addVectors(Kn.max,To.max),Kn.expandByPoint(gn)):(Kn.expandByPoint(To.min),Kn.expandByPoint(To.max))}Kn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)gn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)gn.fromBufferAttribute(d,p),m&&(cs.fromBufferAttribute(t,p),gn.add(cs)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new it,m[X]=new it;const p=new it,_=new it,v=new it,x=new Ce,M=new Ce,T=new Ce,w=new it,y=new it;function g(X,D,R){p.fromBufferAttribute(r,X),_.fromBufferAttribute(r,D),v.fromBufferAttribute(r,R),x.fromBufferAttribute(u,X),M.fromBufferAttribute(u,D),T.fromBufferAttribute(u,R),_.sub(p),v.sub(p),M.sub(x),T.sub(x);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(G),d[X].add(w),d[D].add(w),d[R].add(w),m[X].add(y),m[D].add(y),m[R].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let X=0,D=N.length;X<D;++X){const R=N[X],G=R.start,lt=R.count;for(let ot=G,vt=G+lt;ot<vt;ot+=3)g(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const U=new it,C=new it,I=new it,F=new it;function B(X){I.fromBufferAttribute(l,X),F.copy(I);const D=d[X];U.copy(D),U.sub(I.multiplyScalar(I.dot(D))).normalize(),C.crossVectors(F,D);const G=C.dot(m[X])<0?-1:1;h.setXYZW(X,U.x,U.y,U.z,G)}for(let X=0,D=N.length;X<D;++X){const R=N[X],G=R.start,lt=R.count;for(let ot=G,vt=G+lt;ot<vt;ot+=3)B(t.getX(ot+0)),B(t.getX(ot+1)),B(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new it,u=new it,h=new it,d=new it,m=new it,p=new it,_=new it,v=new it;if(t)for(let x=0,M=t.count;x<M;x+=3){const T=t.getX(x+0),w=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),d.add(_),m.add(_),p.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,x=new p.constructor(m.length*_);let M=0,T=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*_;for(let g=0;g<_;g++)x[T++]=p[M++]}return new _i(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new vi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const x=p[_],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],v=u[p];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new $e,cr=new M0,ic=new Dc,A_=new it,ac=new it,rc=new it,sc=new it,uh=new it,oc=new it,R_=new it,lc=new it;class Ri extends Hn{constructor(t=new vi,i=new gd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){oc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(uh.fromBufferAttribute(v,t),h?oc.addScaledVector(uh,_):oc.addScaledVector(uh.sub(i),_))}i.add(oc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ic.copy(r.boundingSphere),ic.applyMatrix4(u),cr.copy(t.ray).recast(t.near),!(ic.containsPoint(cr.origin)===!1&&(cr.intersectSphere(ic,A_)===null||cr.origin.distanceToSquared(A_)>(t.far-t.near)**2))&&(T_.copy(u).invert(),cr.copy(t.ray).applyMatrix4(T_),!(r.boundingBox!==null&&cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,cr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,w=x.length;T<w;T++){const y=x[T],g=h[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=N,I=U;C<I;C+=3){const F=d.getX(C),B=d.getX(C+1),X=d.getX(C+2);l=cc(this,g,t,r,p,_,v,F,B,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=T,g=w;y<g;y+=3){const N=d.getX(y),U=d.getX(y+1),C=d.getX(y+2);l=cc(this,h,t,r,p,_,v,N,U,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=x.length;T<w;T++){const y=x[T],g=h[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=N,I=U;C<I;C+=3){const F=C,B=C+1,X=C+2;l=cc(this,g,t,r,p,_,v,F,B,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=T,g=w;y<g;y+=3){const N=y,U=y+1,C=y+2;l=cc(this,h,t,r,p,_,v,N,U,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Dy(s,t,i,r,l,u,h,d){let m;if(t.side===In?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Ha,d),m===null)return null;lc.copy(d),lc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(lc);return p<i.near||p>i.far?null:{distance:p,point:lc.clone(),object:s}}function cc(s,t,i,r,l,u,h,d,m,p){s.getVertexPosition(d,ac),s.getVertexPosition(m,rc),s.getVertexPosition(p,sc);const _=Dy(s,t,i,r,ac,rc,sc,R_);if(_){const v=new it;pi.getBarycoord(R_,ac,rc,sc,v),l&&(_.uv=pi.getInterpolatedAttribute(l,d,m,p,v,new Ce)),u&&(_.uv1=pi.getInterpolatedAttribute(u,d,m,p,v,new Ce)),h&&(_.normal=pi.getInterpolatedAttribute(h,d,m,p,v,new it),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new it,materialIndex:0};pi.getNormal(ac,rc,sc,x.normal),_.face=x,_.barycoord=v}return _}class bs extends vi{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],v=[];let x=0,M=0;T("z","y","x",-1,-1,r,i,t,h,u,0),T("z","y","x",1,-1,r,i,-t,h,u,1),T("x","z","y",1,1,t,r,i,l,h,2),T("x","z","y",1,-1,t,r,-i,l,h,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Qn(p,3)),this.setAttribute("normal",new Qn(_,3)),this.setAttribute("uv",new Qn(v,2));function T(w,y,g,N,U,C,I,F,B,X,D){const R=C/B,G=I/X,lt=C/2,ot=I/2,vt=F/2,dt=B+1,z=X+1;let Z=0,Y=0;const Et=new it;for(let L=0;L<z;L++){const tt=L*G-ot;for(let xt=0;xt<dt;xt++){const yt=xt*R-lt;Et[w]=yt*N,Et[y]=tt*U,Et[g]=vt,p.push(Et.x,Et.y,Et.z),Et[w]=0,Et[y]=0,Et[g]=F>0?1:-1,_.push(Et.x,Et.y,Et.z),v.push(xt/B),v.push(1-L/X),Z+=1}}for(let L=0;L<X;L++)for(let tt=0;tt<B;tt++){const xt=x+tt+dt*L,yt=x+tt+dt*(L+1),Q=x+(tt+1)+dt*(L+1),mt=x+(tt+1)+dt*L;m.push(xt,yt,mt),m.push(yt,Q,mt),Y+=6}d.addGroup(M,Y,D),M+=Y,x+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(s){const t={};for(let i=0;i<s.length;i++){const r=ys(s[i]);for(const l in r)t[l]=r[l]}return t}function Uy(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function R0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const Ny={clone:ys,merge:Un};var Ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ga extends zo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ly,this.fragmentShader=Oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Uy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class C0 extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ea}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new it,C_=new Ce,w_=new Ce;class oi extends C0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,C_,w_),i.subVectors(w_,C_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(kf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const us=-90,fs=1;class Py extends Hn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(us,fs,t,i);l.layers=this.layers,this.add(l);const u=new oi(us,fs,t,i);u.layers=this.layers,this.add(u);const h=new oi(us,fs,t,i);h.layers=this.layers,this.add(h);const d=new oi(us,fs,t,i);d.layers=this.layers,this.add(d);const m=new oi(us,fs,t,i);m.layers=this.layers,this.add(m);const p=new oi(us,fs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ea)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ac)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(v,x,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class w0 extends Fn{constructor(t=[],i=vs,r,l,u,h,d,m,p,_){super(t,i,r,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zy extends yr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new w0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new bs(5,5,5),u=new Ga({name:"CubemapFromEquirect",uniforms:ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Ia});u.uniforms.tEquirect.value=i;const h=new Ri(l,u),d=i.minFilter;return i.minFilter===vr&&(i.minFilter=Ai),new Py(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class uc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const By={type:"move"};class fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,r),g=this._getHandJoint(p,w);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(By)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new uc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Iy extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new aa,this.environmentIntensity=1,this.environmentRotation=new aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const hh=new it,Fy=new it,Hy=new se;class dr{constructor(t=new it(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=hh.subVectors(r,i).cross(Fy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(hh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Hy.getNormalMatrix(t),l=this.coplanarPoint(hh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Dc,fc=new it;class D0{constructor(t=new dr,i=new dr,r=new dr,l=new dr,u=new dr,h=new dr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ea){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],v=l[6],x=l[7],M=l[8],T=l[9],w=l[10],y=l[11],g=l[12],N=l[13],U=l[14],C=l[15];if(r[0].setComponents(m-u,x-p,y-M,C-g).normalize(),r[1].setComponents(m+u,x+p,y+M,C+g).normalize(),r[2].setComponents(m+h,x+_,y+T,C+N).normalize(),r[3].setComponents(m-h,x-_,y-T,C-N).normalize(),r[4].setComponents(m-d,x-v,y-w,C-U).normalize(),i===ea)r[5].setComponents(m+d,x+v,y+w,C+U).normalize();else if(i===Ac)r[5].setComponents(d,v,w,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(t){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(fc.x=l.normal.x>0?t.max.x:t.min.x,fc.y=l.normal.y>0?t.max.y:t.min.y,fc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(fc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class U0 extends zo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const D_=new $e,rd=new M0,hc=new Dc,dc=new it;class Gy extends Hn{constructor(t=new vi,i=new U0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(l),hc.radius+=u,t.ray.intersectsSphere(hc)===!1)return;D_.copy(l).invert(),rd.copy(t.ray).applyMatrix4(D_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let T=x,w=M;T<w;T++){const y=p.getX(T);dc.fromBufferAttribute(v,y),U_(dc,y,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let T=x,w=M;T<w;T++)dc.fromBufferAttribute(v,T),U_(dc,T,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function U_(s,t,i,r,l,u,h){const d=rd.distanceSqToPoint(s);if(d<i){const m=new it;rd.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class N0 extends Fn{constructor(t,i,r=Sr,l,u,h,d=gi,m=gi,p,_=Do,v=1){if(_!==Do&&_!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new md(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Uc extends vi{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const u=[],h=[];d(l),p(r),_(),this.setAttribute("position",new Qn(u,3)),this.setAttribute("normal",new Qn(u.slice(),3)),this.setAttribute("uv",new Qn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const U=new it,C=new it,I=new it;for(let F=0;F<i.length;F+=3)M(i[F+0],U),M(i[F+1],C),M(i[F+2],I),m(U,C,I,N)}function m(N,U,C,I){const F=I+1,B=[];for(let X=0;X<=F;X++){B[X]=[];const D=N.clone().lerp(C,X/F),R=U.clone().lerp(C,X/F),G=F-X;for(let lt=0;lt<=G;lt++)lt===0&&X===F?B[X][lt]=D:B[X][lt]=D.clone().lerp(R,lt/G)}for(let X=0;X<F;X++)for(let D=0;D<2*(F-X)-1;D++){const R=Math.floor(D/2);D%2===0?(x(B[X][R+1]),x(B[X+1][R]),x(B[X][R])):(x(B[X][R+1]),x(B[X+1][R+1]),x(B[X+1][R]))}}function p(N){const U=new it;for(let C=0;C<u.length;C+=3)U.x=u[C+0],U.y=u[C+1],U.z=u[C+2],U.normalize().multiplyScalar(N),u[C+0]=U.x,u[C+1]=U.y,u[C+2]=U.z}function _(){const N=new it;for(let U=0;U<u.length;U+=3){N.x=u[U+0],N.y=u[U+1],N.z=u[U+2];const C=y(N)/2/Math.PI+.5,I=g(N)/Math.PI+.5;h.push(C,1-I)}T(),v()}function v(){for(let N=0;N<h.length;N+=6){const U=h[N+0],C=h[N+2],I=h[N+4],F=Math.max(U,C,I),B=Math.min(U,C,I);F>.9&&B<.1&&(U<.2&&(h[N+0]+=1),C<.2&&(h[N+2]+=1),I<.2&&(h[N+4]+=1))}}function x(N){u.push(N.x,N.y,N.z)}function M(N,U){const C=N*3;U.x=t[C+0],U.y=t[C+1],U.z=t[C+2]}function T(){const N=new it,U=new it,C=new it,I=new it,F=new Ce,B=new Ce,X=new Ce;for(let D=0,R=0;D<u.length;D+=9,R+=6){N.set(u[D+0],u[D+1],u[D+2]),U.set(u[D+3],u[D+4],u[D+5]),C.set(u[D+6],u[D+7],u[D+8]),F.set(h[R+0],h[R+1]),B.set(h[R+2],h[R+3]),X.set(h[R+4],h[R+5]),I.copy(N).add(U).add(C).divideScalar(3);const G=y(I);w(F,R+0,N,G),w(B,R+2,U,G),w(X,R+4,C,G)}}function w(N,U,C,I){I<0&&N.x===1&&(h[U]=N.x-1),C.x===0&&C.z===0&&(h[U]=I/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function g(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.vertices,t.indices,t.radius,t.details)}}class _d extends Uc{constructor(t=1,i=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new _d(t.radius,t.detail)}}class Nc extends vi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,v=t/d,x=i/m,M=[],T=[],w=[],y=[];for(let g=0;g<_;g++){const N=g*x-h;for(let U=0;U<p;U++){const C=U*v-u;T.push(C,-N,0),w.push(0,0,1),y.push(U/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let N=0;N<d;N++){const U=N+p*g,C=N+p*(g+1),I=N+1+p*(g+1),F=N+1+p*g;M.push(U,C,F),M.push(C,I,F)}this.setIndex(M),this.setAttribute("position",new Qn(T,3)),this.setAttribute("normal",new Qn(w,3)),this.setAttribute("uv",new Qn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.width,t.height,t.widthSegments,t.heightSegments)}}class vd extends vi{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const _=[],v=new it,x=new it,M=[],T=[],w=[],y=[];for(let g=0;g<=r;g++){const N=[],U=g/r;let C=0;g===0&&h===0?C=.5/i:g===r&&m===Math.PI&&(C=-.5/i);for(let I=0;I<=i;I++){const F=I/i;v.x=-t*Math.cos(l+F*u)*Math.sin(h+U*d),v.y=t*Math.cos(h+U*d),v.z=t*Math.sin(l+F*u)*Math.sin(h+U*d),T.push(v.x,v.y,v.z),x.copy(v).normalize(),w.push(x.x,x.y,x.z),y.push(F+C,1-U),N.push(p++)}_.push(N)}for(let g=0;g<r;g++)for(let N=0;N<i;N++){const U=_[g][N+1],C=_[g][N],I=_[g+1][N],F=_[g+1][N+1];(g!==0||h>0)&&M.push(U,C,F),(g!==r-1||m<Math.PI)&&M.push(C,I,F)}this.setIndex(M),this.setAttribute("position",new Qn(T,3)),this.setAttribute("normal",new Qn(w,3)),this.setAttribute("uv",new Qn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xd extends Uc{constructor(t=1,i=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,l,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new xd(t.radius,t.detail)}}class Vy extends zo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ky extends zo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xy extends C0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Wy extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class qy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=N_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=N_();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function N_(){return performance.now()}function L_(s,t,i,r){const l=Yy(r);switch(i){case p0:return s*t;case g0:return s*t/l.components*l.byteLength;case hd:return s*t/l.components*l.byteLength;case _0:return s*t*2/l.components*l.byteLength;case dd:return s*t*2/l.components*l.byteLength;case m0:return s*t*3/l.components*l.byteLength;case mi:return s*t*4/l.components*l.byteLength;case pd:return s*t*4/l.components*l.byteLength;case _c:case vc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xc:case Sc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lh:case Ph:return Math.max(s,16)*Math.max(t,8)/4;case Nh:case Oh:return Math.max(s,8)*Math.max(t,8)/2;case zh:case Bh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ih:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case kh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case qh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case jh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Jh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case yc:case $h:case td:return Math.ceil(s/4)*Math.ceil(t/4)*16;case v0:case ed:return Math.ceil(s/4)*Math.ceil(t/4)*8;case nd:case id:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Yy(s){switch(s){case ia:case f0:return{byteLength:1,components:1};case Co:case h0:case No:return{byteLength:2,components:1};case ud:case fd:return{byteLength:2,components:4};case Sr:case cd:case ta:return{byteLength:4,components:1};case d0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L0(){let s=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function jy(s){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const _=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,_);else{v.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<v.length;M++){const T=v[x],w=v[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,v[x]=w)}v.length=x+1;for(let M=0,T=v.length;M<T;M++){const w=v[M];s.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ky=`#ifdef USE_ALPHAHASH
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
#endif`,Qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
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
#endif`,nM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iM=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lM=`#ifdef USE_IRIDESCENCE
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
#endif`,cM=`#ifdef USE_BUMPMAP
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vM=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SM=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",AM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
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
}`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,GM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,YM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jM=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aE=`#if defined( USE_POINTS_UV )
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
#endif`,rE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
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
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_E=`#ifdef USE_NORMALMAP
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
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,LE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PE=`#ifdef USE_SKINNING
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
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VE=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
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
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`#include <common>
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
}`,eb=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nb=`#define DISTANCE
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
}`,ib=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`uniform float scale;
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
}`,ob=`uniform vec3 diffuse;
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
}`,lb=`#include <common>
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
}`,cb=`uniform vec3 diffuse;
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
}`,ub=`#define LAMBERT
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
}`,fb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,hb=`#define MATCAP
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
}`,db=`#define MATCAP
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
}`,pb=`#define NORMAL
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
}`,mb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gb=`#define PHONG
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
}`,_b=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vb=`#define STANDARD
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
}`,xb=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Sb=`#define TOON
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
}`,yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Mb=`uniform float size;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,Tb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ab=`uniform float rotation;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Zy,alphahash_pars_fragment:Ky,alphamap_fragment:Qy,alphamap_pars_fragment:Jy,alphatest_fragment:$y,alphatest_pars_fragment:tM,aomap_fragment:eM,aomap_pars_fragment:nM,batching_pars_vertex:iM,batching_vertex:aM,begin_vertex:rM,beginnormal_vertex:sM,bsdfs:oM,iridescence_fragment:lM,bumpmap_pars_fragment:cM,clipping_planes_fragment:uM,clipping_planes_pars_fragment:fM,clipping_planes_pars_vertex:hM,clipping_planes_vertex:dM,color_fragment:pM,color_pars_fragment:mM,color_pars_vertex:gM,color_vertex:_M,common:vM,cube_uv_reflection_fragment:xM,defaultnormal_vertex:SM,displacementmap_pars_vertex:yM,displacementmap_vertex:MM,emissivemap_fragment:EM,emissivemap_pars_fragment:bM,colorspace_fragment:TM,colorspace_pars_fragment:AM,envmap_fragment:RM,envmap_common_pars_fragment:CM,envmap_pars_fragment:wM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:GM,envmap_vertex:UM,fog_vertex:NM,fog_pars_vertex:LM,fog_fragment:OM,fog_pars_fragment:PM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:BM,lights_lambert_fragment:IM,lights_lambert_pars_fragment:FM,lights_pars_begin:HM,lights_toon_fragment:VM,lights_toon_pars_fragment:kM,lights_phong_fragment:XM,lights_phong_pars_fragment:WM,lights_physical_fragment:qM,lights_physical_pars_fragment:YM,lights_fragment_begin:jM,lights_fragment_maps:ZM,lights_fragment_end:KM,logdepthbuf_fragment:QM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:tE,map_fragment:eE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:aE,metalnessmap_fragment:rE,metalnessmap_pars_fragment:sE,morphinstance_vertex:oE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:fE,normal_fragment_begin:hE,normal_fragment_maps:dE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:_E,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:SE,iridescence_pars_fragment:yE,opaque_fragment:ME,packing:EE,premultiplied_alpha_fragment:bE,project_vertex:TE,dithering_fragment:AE,dithering_pars_fragment:RE,roughnessmap_fragment:CE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:DE,shadowmap_pars_vertex:UE,shadowmap_vertex:NE,shadowmask_pars_fragment:LE,skinbase_vertex:OE,skinning_pars_vertex:PE,skinning_vertex:zE,skinnormal_vertex:BE,specularmap_fragment:IE,specularmap_pars_fragment:FE,tonemapping_fragment:HE,tonemapping_pars_fragment:GE,transmission_fragment:VE,transmission_pars_fragment:kE,uv_pars_fragment:XE,uv_pars_vertex:WE,uv_vertex:qE,worldpos_vertex:YE,background_vert:jE,background_frag:ZE,backgroundCube_vert:KE,backgroundCube_frag:QE,cube_vert:JE,cube_frag:$E,depth_vert:tb,depth_frag:eb,distanceRGBA_vert:nb,distanceRGBA_frag:ib,equirect_vert:ab,equirect_frag:rb,linedashed_vert:sb,linedashed_frag:ob,meshbasic_vert:lb,meshbasic_frag:cb,meshlambert_vert:ub,meshlambert_frag:fb,meshmatcap_vert:hb,meshmatcap_frag:db,meshnormal_vert:pb,meshnormal_frag:mb,meshphong_vert:gb,meshphong_frag:_b,meshphysical_vert:vb,meshphysical_frag:xb,meshtoon_vert:Sb,meshtoon_frag:yb,points_vert:Mb,points_frag:Eb,shadow_vert:bb,shadow_frag:Tb,sprite_vert:Ab,sprite_frag:Rb},Lt={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ti={basic:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Un([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Un([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Un([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Un([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Un([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Un([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Un([Lt.common,Lt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Un([Lt.lights,Lt.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ti.physical={uniforms:Un([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const pc={r:0,b:0,g:0},fr=new aa,Cb=new $e;function wb(s,t,i,r,l,u,h){const d=new Ne(0);let m=u===!0?0:1,p,_,v=null,x=0,M=null;function T(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:t).get(C)),C}function w(U){let C=!1;const I=T(U);I===null?g(d,m):I&&I.isColor&&(g(I,1),C=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,C){const I=T(C);I&&(I.isCubeTexture||I.mapping===wc)?(_===void 0&&(_=new Ri(new bs(1,1,1),new Ga({name:"BackgroundCubeMaterial",uniforms:ys(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),fr.copy(C.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(fr)),_.material.toneMapped=Te.getTransfer(I.colorSpace)!==Be,(v!==I||x!==I.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=I,x=I.version,M=s.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ri(new Nc(2,2),new Ga({name:"BackgroundMaterial",uniforms:ys(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Te.getTransfer(I.colorSpace)!==Be,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||x!==I.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,v=I,x=I.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function g(U,C){U.getRGB(pc,R0(s)),r.buffers.color.setClear(pc.r,pc.g,pc.b,C,h)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,C=1){d.set(U),m=C,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,g(d,m)},render:w,addToRenderList:y,dispose:N}}function Db(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(R,G,lt,ot,vt){let dt=!1;const z=v(ot,lt,G);u!==z&&(u=z,p(u.object)),dt=M(R,ot,lt,vt),dt&&T(R,ot,lt,vt),vt!==null&&t.update(vt,s.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,C(R,G,lt,ot),vt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function v(R,G,lt){const ot=lt.wireframe===!0;let vt=r[R.id];vt===void 0&&(vt={},r[R.id]=vt);let dt=vt[G.id];dt===void 0&&(dt={},vt[G.id]=dt);let z=dt[ot];return z===void 0&&(z=x(m()),dt[ot]=z),z}function x(R){const G=[],lt=[],ot=[];for(let vt=0;vt<i;vt++)G[vt]=0,lt[vt]=0,ot[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:ot,object:R,attributes:{},index:null}}function M(R,G,lt,ot){const vt=u.attributes,dt=G.attributes;let z=0;const Z=lt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const L=vt[Y];let tt=dt[Y];if(tt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),L===void 0||L.attribute!==tt||tt&&L.data!==tt.data)return!0;z++}return u.attributesNum!==z||u.index!==ot}function T(R,G,lt,ot){const vt={},dt=G.attributes;let z=0;const Z=lt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let L=dt[Y];L===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(L=R.instanceColor));const tt={};tt.attribute=L,L&&L.data&&(tt.data=L.data),vt[Y]=tt,z++}u.attributes=vt,u.attributesNum=z,u.index=ot}function w(){const R=u.newAttributes;for(let G=0,lt=R.length;G<lt;G++)R[G]=0}function y(R){g(R,0)}function g(R,G){const lt=u.newAttributes,ot=u.enabledAttributes,vt=u.attributeDivisors;lt[R]=1,ot[R]===0&&(s.enableVertexAttribArray(R),ot[R]=1),vt[R]!==G&&(s.vertexAttribDivisor(R,G),vt[R]=G)}function N(){const R=u.newAttributes,G=u.enabledAttributes;for(let lt=0,ot=G.length;lt<ot;lt++)G[lt]!==R[lt]&&(s.disableVertexAttribArray(lt),G[lt]=0)}function U(R,G,lt,ot,vt,dt,z){z===!0?s.vertexAttribIPointer(R,G,lt,vt,dt):s.vertexAttribPointer(R,G,lt,ot,vt,dt)}function C(R,G,lt,ot){w();const vt=ot.attributes,dt=lt.getAttributes(),z=G.defaultAttributeValues;for(const Z in dt){const Y=dt[Z];if(Y.location>=0){let Et=vt[Z];if(Et===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),Et!==void 0){const L=Et.normalized,tt=Et.itemSize,xt=t.get(Et);if(xt===void 0)continue;const yt=xt.buffer,Q=xt.type,mt=xt.bytesPerElement,Mt=Q===s.INT||Q===s.UNSIGNED_INT||Et.gpuType===cd;if(Et.isInterleavedBufferAttribute){const Rt=Et.data,wt=Rt.stride,oe=Et.offset;if(Rt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<Y.locationSize;Qt++)g(Y.location+Qt,Rt.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Qt=0;Qt<Y.locationSize;Qt++)y(Y.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Qt=0;Qt<Y.locationSize;Qt++)U(Y.location+Qt,tt/Y.locationSize,Q,L,wt*mt,(oe+tt/Y.locationSize*Qt)*mt,Mt)}else{if(Et.isInstancedBufferAttribute){for(let Rt=0;Rt<Y.locationSize;Rt++)g(Y.location+Rt,Et.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Rt=0;Rt<Y.locationSize;Rt++)y(Y.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Rt=0;Rt<Y.locationSize;Rt++)U(Y.location+Rt,tt/Y.locationSize,Q,L,tt*mt,tt/Y.locationSize*Rt*mt,Mt)}}else if(z!==void 0){const L=z[Z];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(Y.location,L);break;case 3:s.vertexAttrib3fv(Y.location,L);break;case 4:s.vertexAttrib4fv(Y.location,L);break;default:s.vertexAttrib1fv(Y.location,L)}}}}N()}function I(){X();for(const R in r){const G=r[R];for(const lt in G){const ot=G[lt];for(const vt in ot)_(ot[vt].object),delete ot[vt];delete G[lt]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const G=r[R.id];for(const lt in G){const ot=G[lt];for(const vt in ot)_(ot[vt].object),delete ot[vt];delete G[lt]}delete r[R.id]}function B(R){for(const G in r){const lt=r[G];if(lt[R.id]===void 0)continue;const ot=lt[R.id];for(const vt in ot)_(ot[vt].object),delete ot[vt];delete lt[R.id]}}function X(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:D,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function Ub(s,t,i){let r;function l(p){r=p}function u(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,v){v!==0&&(s.drawArraysInstanced(r,p,_,v),i.update(_,r,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=_[T];i.update(M,r,1)}function m(p,_,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],_[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,v);let T=0;for(let w=0;w<v;w++)T+=_[w]*x[w];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Nb(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==mi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const X=B===No&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ia&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ta&&!X)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=T>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:I,maxSamples:F}}function Lb(s){const t=this;let i=null,r=0,l=!1,u=!1;const h=new dr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,M){const T=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!l||T===null||T.length===0||u&&!y)u?_(null):p();else{const N=u?0:r,U=N*4;let C=g.clippingState||null;m.value=C,C=_(T,x,U,M);for(let I=0;I!==U;++I)C[I]=i[I];g.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(v,x,M,T){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,T!==!0||y===null){const g=M+w*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<g)&&(y=new Float32Array(g));for(let U=0,C=M;U!==w;++U,C+=4)h.copy(v[U]).applyMatrix4(N,d),h.normal.toArray(y,C),y[C+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function Ob(s){let t=new WeakMap;function i(h,d){return d===Ch?h.mapping=vs:d===wh&&(h.mapping=xs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===wh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new zy(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const ds=4,O_=[.125,.215,.35,.446,.526,.582],gr=20,dh=new Xy,P_=new Ne;let ph=null,mh=0,gh=0,_h=!1;const pr=(1+Math.sqrt(5))/2,hs=1/pr,z_=[new it(-pr,hs,0),new it(pr,hs,0),new it(-hs,0,pr),new it(hs,0,pr),new it(0,pr,-hs),new it(0,pr,hs),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],Pb=new it;class B_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=Pb}=u;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=_h,t.scissorTest=!1,mc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===vs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:No,format:mi,colorSpace:Ss,depthBuffer:!1},l=I_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zb(u)),this._blurMaterial=Bb(u,t,i)}return l}_compileMaterial(t){const i=new Ri(this._lodPlanes[0],t);this._renderer.compile(i,dh)}_sceneToCubeUV(t,i,r,l,u){const m=new oi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(P_),v.toneMapping=Fa,v.autoClear=!1;const T=new gd({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),w=new Ri(new bs,T);let y=!1;const g=t.background;g?g.isColor&&(T.color.copy(g),t.background=null,y=!0):(T.color.copy(P_),y=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[N],u.y,u.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[N]));const C=this._cubeSize;mc(l,U*C,N>2?C:0,C,C),v.setRenderTarget(l),y&&v.render(w,m),v.render(t,m)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=g}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===vs||t.mapping===xs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=H_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ri(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;mc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,dh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=z_[(l-u-1)%z_.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Ri(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),w=u/T,y=isFinite(u)?1+Math.floor(_*w):gr;y>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gr}`);const g=[];let N=0;for(let B=0;B<gr;++B){const X=B/w,D=Math.exp(-X*X/2);g.push(D),B===0?N+=D:B<y&&(N+=2*D)}for(let B=0;B<g.length;B++)g[B]=g[B]/N;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=T,x.mipInt.value=U-r;const C=this._sizeLods[l],I=3*C*(l>U-ds?l-U+ds:0),F=4*(this._cubeSize-C);mc(i,I,F,3*C,2*C),m.setRenderTarget(i),m.render(v,dh)}}function zb(s){const t=[],i=[],r=[];let l=s;const u=s-ds+1+O_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-ds?m=O_[h-s+ds-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,v=1+p,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,T=6,w=3,y=2,g=1,N=new Float32Array(w*T*M),U=new Float32Array(y*T*M),C=new Float32Array(g*T*M);for(let F=0;F<M;F++){const B=F%3*2/3-1,X=F>2?0:-1,D=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];N.set(D,w*T*F),U.set(x,y*T*F);const R=[F,F,F,F,F,F];C.set(R,g*T*F)}const I=new vi;I.setAttribute("position",new _i(N,w)),I.setAttribute("uv",new _i(U,y)),I.setAttribute("faceIndex",new _i(C,g)),t.push(I),l>ds&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function I_(s,t,i){const r=new yr(s,t,i);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function mc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function Bb(s,t,i){const r=new Float32Array(gr),l=new it(0,1,0);return new Ga({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function F_(){return new Ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function H_(){return new Ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Sd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ib(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ch||m===wh,_=m===vs||m===xs;if(p||_){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new B_(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new B_(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Fb(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ms("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Hb(s,t,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,T=v.attributes.position;let w=0;if(M!==null){const N=M.array;w=M.version;for(let U=0,C=N.length;U<C;U+=3){const I=N[U+0],F=N[U+1],B=N[U+2];x.push(I,F,F,B,B,I)}}else if(T!==void 0){const N=T.array;w=T.version;for(let U=0,C=N.length/3-1;U<C;U+=3){const I=U+0,F=U+1,B=U+2;x.push(I,F,F,B,B,I)}}else return;const y=new(S0(x)?A0:T0)(x,1);y.version=w;const g=u.get(v);g&&t.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function Gb(s,t,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){s.drawElements(r,M,u,x*h),i.update(M,r,1)}function p(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,u,x*h,T),i.update(M,r,T))}function _(x,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,T);let y=0;for(let g=0;g<T;g++)y+=M[g];i.update(y,r,1)}function v(x,M,T,w){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/h,M[g],w[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,w,0,T);let g=0;for(let N=0;N<T;N++)g+=M[N]*w[N];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function Vb(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function kb(s,t,i){const r=new WeakMap,l=new Je;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let R=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let I=d.attributes.position.count*C,F=1;I>t.maxTextureSize&&(F=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const B=new Float32Array(I*F*4*v),X=new y0(B,I,F,v);X.type=ta,X.needsUpdate=!0;const D=C*4;for(let G=0;G<v;G++){const lt=g[G],ot=N[G],vt=U[G],dt=I*F*4*G;for(let z=0;z<lt.count;z++){const Z=z*D;T===!0&&(l.fromBufferAttribute(lt,z),B[dt+Z+0]=l.x,B[dt+Z+1]=l.y,B[dt+Z+2]=l.z,B[dt+Z+3]=0),w===!0&&(l.fromBufferAttribute(ot,z),B[dt+Z+4]=l.x,B[dt+Z+5]=l.y,B[dt+Z+6]=l.z,B[dt+Z+7]=0),y===!0&&(l.fromBufferAttribute(vt,z),B[dt+Z+8]=l.x,B[dt+Z+9]=l.y,B[dt+Z+10]=l.z,B[dt+Z+11]=vt.itemSize===4?l.w:1)}}x={count:v,texture:X,size:new Ce(I,F)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const w=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function Xb(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const O0=new Fn,G_=new N0(1,1),P0=new y0,z0=new xy,B0=new w0,V_=[],k_=[],X_=new Float32Array(16),W_=new Float32Array(9),q_=new Float32Array(4);function Ts(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=V_[l];if(u===void 0&&(u=new Float32Array(l),V_[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(u,d)}return u}function cn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function un(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Lc(s,t){let i=k_[t];i===void 0&&(i=new Int32Array(t),k_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function Wb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function qb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2fv(this.addr,t),un(i,t)}}function Yb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;s.uniform3fv(this.addr,t),un(i,t)}}function jb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4fv(this.addr,t),un(i,t)}}function Zb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;q_.set(r),s.uniformMatrix2fv(this.addr,!1,q_),un(i,r)}}function Kb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;W_.set(r),s.uniformMatrix3fv(this.addr,!1,W_),un(i,r)}}function Qb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;X_.set(r),s.uniformMatrix4fv(this.addr,!1,X_),un(i,r)}}function Jb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function $b(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2iv(this.addr,t),un(i,t)}}function tT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;s.uniform3iv(this.addr,t),un(i,t)}}function eT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4iv(this.addr,t),un(i,t)}}function nT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function iT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2uiv(this.addr,t),un(i,t)}}function aT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;s.uniform3uiv(this.addr,t),un(i,t)}}function rT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4uiv(this.addr,t),un(i,t)}}function sT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(G_.compareFunction=x0,u=G_):u=O0,i.setTexture2D(t||u,l)}function oT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||z0,l)}function lT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||B0,l)}function cT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||P0,l)}function uT(s){switch(s){case 5126:return Wb;case 35664:return qb;case 35665:return Yb;case 35666:return jb;case 35674:return Zb;case 35675:return Kb;case 35676:return Qb;case 5124:case 35670:return Jb;case 35667:case 35671:return $b;case 35668:case 35672:return tT;case 35669:case 35673:return eT;case 5125:return nT;case 36294:return iT;case 36295:return aT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}function fT(s,t){s.uniform1fv(this.addr,t)}function hT(s,t){const i=Ts(t,this.size,2);s.uniform2fv(this.addr,i)}function dT(s,t){const i=Ts(t,this.size,3);s.uniform3fv(this.addr,i)}function pT(s,t){const i=Ts(t,this.size,4);s.uniform4fv(this.addr,i)}function mT(s,t){const i=Ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function gT(s,t){const i=Ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function _T(s,t){const i=Ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function vT(s,t){s.uniform1iv(this.addr,t)}function xT(s,t){s.uniform2iv(this.addr,t)}function ST(s,t){s.uniform3iv(this.addr,t)}function yT(s,t){s.uniform4iv(this.addr,t)}function MT(s,t){s.uniform1uiv(this.addr,t)}function ET(s,t){s.uniform2uiv(this.addr,t)}function bT(s,t){s.uniform3uiv(this.addr,t)}function TT(s,t){s.uniform4uiv(this.addr,t)}function AT(s,t,i){const r=this.cache,l=t.length,u=Lc(i,l);cn(r,u)||(s.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||O0,u[h])}function RT(s,t,i){const r=this.cache,l=t.length,u=Lc(i,l);cn(r,u)||(s.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||z0,u[h])}function CT(s,t,i){const r=this.cache,l=t.length,u=Lc(i,l);cn(r,u)||(s.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||B0,u[h])}function wT(s,t,i){const r=this.cache,l=t.length,u=Lc(i,l);cn(r,u)||(s.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||P0,u[h])}function DT(s){switch(s){case 5126:return fT;case 35664:return hT;case 35665:return dT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return _T;case 5124:case 35670:return vT;case 35667:case 35671:return xT;case 35668:case 35672:return ST;case 35669:case 35673:return yT;case 5125:return MT;case 36294:return ET;case 36295:return bT;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return wT}}class UT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=uT(i.type)}}class NT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=DT(i.type)}}class LT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function Y_(s,t){s.seq.push(t),s.map[t.id]=t}function OT(s,t,i){const r=s.name,l=r.length;for(vh.lastIndex=0;;){const u=vh.exec(r),h=vh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Y_(i,p===void 0?new UT(d,s,t):new NT(d,s,t));break}else{let v=i.map[d];v===void 0&&(v=new LT(d),Y_(i,v)),i=v}}}class Mc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);OT(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function j_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const PT=37297;let zT=0;function BT(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Z_=new se;function IT(s){Te._getMatrix(Z_,Te.workingColorSpace,s);const t=`mat3( ${Z_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(s)){case Tc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function K_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+BT(s.getShaderSource(t),h)}else return l}function FT(s,t){const i=IT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function HT(s,t){let i;switch(t){case XS:i="Linear";break;case WS:i="Reinhard";break;case qS:i="Cineon";break;case YS:i="ACESFilmic";break;case ZS:i="AgX";break;case KS:i="Neutral";break;case jS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gc=new it;function GT(){Te.getLuminanceCoefficients(gc);const s=gc.x.toFixed(4),t=gc.y.toFixed(4),i=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function kT(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function XT(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Ao(s){return s!==""}function Q_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function J_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const WT=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(s){return s.replace(WT,YT)}const qT=new Map;function YT(s,t){let i=le[t];if(i===void 0){const r=qT.get(t);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return sd(i)}const jT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $_(s){return s.replace(jT,ZT)}function ZT(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function t0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function KT(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===l0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ES?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function QT(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vs:case xs:t="ENVMAP_TYPE_CUBE";break;case wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function JT(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function $T(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case c0:t="ENVMAP_BLENDING_MULTIPLY";break;case VS:t="ENVMAP_BLENDING_MIX";break;case kS:t="ENVMAP_BLENDING_ADD";break}return t}function t1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function e1(s,t,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=KT(i),p=QT(i),_=JT(i),v=$T(i),x=t1(i),M=VT(i),T=kT(u),w=l.createProgram();let y,g,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ao).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ao).join(`
`),g.length>0&&(g+=`
`)):(y=[t0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),g=[t0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?le.tonemapping_pars_fragment:"",i.toneMapping!==Fa?HT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,FT("linearToOutputTexel",i.outputColorSpace),GT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ao).join(`
`)),h=sd(h),h=Q_(h,i),h=J_(h,i),d=sd(d),d=Q_(d,i),d=J_(d,i),h=$_(h),d=$_(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===h_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===h_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=N+y+h,C=N+g+d,I=j_(l,l.VERTEX_SHADER,U),F=j_(l,l.FRAGMENT_SHADER,C);l.attachShader(w,I),l.attachShader(w,F),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(G){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(w).trim(),ot=l.getShaderInfoLog(I).trim(),vt=l.getShaderInfoLog(F).trim();let dt=!0,z=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(dt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,I,F);else{const Z=K_(l,I,"vertex"),Y=K_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+Z+`
`+Y)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(ot===""||vt==="")&&(z=!1);z&&(G.diagnostics={runnable:dt,programLog:lt,vertexShader:{log:ot,prefix:y},fragmentShader:{log:vt,prefix:g}})}l.deleteShader(I),l.deleteShader(F),X=new Mc(l,w),D=XT(l,w)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,PT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=F,this}let n1=0;class i1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new a1(t),i.set(t,r)),r}}class a1{constructor(t){this.id=n1++,this.code=t,this.usedTimes=0}}function r1(s,t,i,r,l,u,h){const d=new E0,m=new i1,p=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,R,G,lt,ot){const vt=lt.fog,dt=ot.geometry,z=D.isMeshStandardMaterial?lt.environment:null,Z=(D.isMeshStandardMaterial?i:t).get(D.envMap||z),Y=Z&&Z.mapping===wc?Z.image.height:null,Et=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const L=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,tt=L!==void 0?L.length:0;let xt=0;dt.morphAttributes.position!==void 0&&(xt=1),dt.morphAttributes.normal!==void 0&&(xt=2),dt.morphAttributes.color!==void 0&&(xt=3);let yt,Q,mt,Mt;if(Et){const Ee=Ti[Et];yt=Ee.vertexShader,Q=Ee.fragmentShader}else yt=D.vertexShader,Q=D.fragmentShader,m.update(D),mt=m.getVertexShaderID(D),Mt=m.getFragmentShaderID(D);const Rt=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),oe=ot.isInstancedMesh===!0,Qt=ot.isBatchedMesh===!0,Le=!!D.map,Ie=!!D.matcap,me=!!Z,H=!!D.aoMap,_n=!!D.lightMap,ye=!!D.bumpMap,he=!!D.normalMap,Vt=!!D.displacementMap,ge=!!D.emissiveMap,jt=!!D.metalnessMap,ae=!!D.roughnessMap,Ze=D.anisotropy>0,O=D.clearcoat>0,E=D.dispersion>0,et=D.iridescence>0,ft=D.sheen>0,pt=D.transmission>0,ct=Ze&&!!D.anisotropyMap,Pt=O&&!!D.clearcoatMap,Ut=O&&!!D.clearcoatNormalMap,Gt=O&&!!D.clearcoatRoughnessMap,kt=et&&!!D.iridescenceMap,St=et&&!!D.iridescenceThicknessMap,zt=ft&&!!D.sheenColorMap,qt=ft&&!!D.sheenRoughnessMap,Yt=!!D.specularMap,Ct=!!D.specularColorMap,ie=!!D.specularIntensityMap,k=pt&&!!D.transmissionMap,Nt=pt&&!!D.thicknessMap,bt=!!D.gradientMap,Bt=!!D.alphaMap,At=D.alphaTest>0,_t=!!D.alphaHash,Ft=!!D.extensions;let ne=Fa;D.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ne=s.toneMapping);const we={shaderID:Et,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:Q,defines:D.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Qt,batchingColor:Qt&&ot._colorsTexture!==null,instancing:oe,instancingColor:oe&&ot.instanceColor!==null,instancingMorph:oe&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Ss,alphaToCoverage:!!D.alphaToCoverage,map:Le,matcap:Ie,envMap:me,envMapMode:me&&Z.mapping,envMapCubeUVHeight:Y,aoMap:H,lightMap:_n,bumpMap:ye,normalMap:he,displacementMap:x&&Vt,emissiveMap:ge,normalMapObjectSpace:he&&D.normalMapType===ey,normalMapTangentSpace:he&&D.normalMapType===ty,metalnessMap:jt,roughnessMap:ae,anisotropy:Ze,anisotropyMap:ct,clearcoat:O,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:E,iridescence:et,iridescenceMap:kt,iridescenceThicknessMap:St,sheen:ft,sheenColorMap:zt,sheenRoughnessMap:qt,specularMap:Yt,specularColorMap:Ct,specularIntensityMap:ie,transmission:pt,transmissionMap:k,thicknessMap:Nt,gradientMap:bt,opaque:D.transparent===!1&&D.blending===ps&&D.alphaToCoverage===!1,alphaMap:Bt,alphaTest:At,alphaHash:_t,combine:D.combine,mapUv:Le&&w(D.map.channel),aoMapUv:H&&w(D.aoMap.channel),lightMapUv:_n&&w(D.lightMap.channel),bumpMapUv:ye&&w(D.bumpMap.channel),normalMapUv:he&&w(D.normalMap.channel),displacementMapUv:Vt&&w(D.displacementMap.channel),emissiveMapUv:ge&&w(D.emissiveMap.channel),metalnessMapUv:jt&&w(D.metalnessMap.channel),roughnessMapUv:ae&&w(D.roughnessMap.channel),anisotropyMapUv:ct&&w(D.anisotropyMap.channel),clearcoatMapUv:Pt&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:St&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:qt&&w(D.sheenRoughnessMap.channel),specularMapUv:Yt&&w(D.specularMap.channel),specularColorMapUv:Ct&&w(D.specularColorMap.channel),specularIntensityMapUv:ie&&w(D.specularIntensityMap.channel),transmissionMapUv:k&&w(D.transmissionMap.channel),thicknessMapUv:Nt&&w(D.thicknessMap.channel),alphaMapUv:Bt&&w(D.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(he||Ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!dt.attributes.uv&&(Le||Bt),fog:!!vt,useFog:D.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:wt,skinning:ot.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,decodeVideoTexture:Le&&D.map.isVideoTexture===!0&&Te.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:ge&&D.emissiveMap.isVideoTexture===!0&&Te.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===$i,flipSided:D.side===In,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function g(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)R.push(G),R.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(N(R,D),U(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function N(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function U(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const R=T[D.type];let G;if(R){const lt=Ti[R];G=Ny.clone(lt.uniforms)}else G=D.uniforms;return G}function I(D,R){let G;for(let lt=0,ot=_.length;lt<ot;lt++){const vt=_[lt];if(vt.cacheKey===R){G=vt,++G.usedTimes;break}}return G===void 0&&(G=new e1(s,R,D,u),_.push(G)),G}function F(D){if(--D.usedTimes===0){const R=_.indexOf(D);_[R]=_[_.length-1],_.pop(),D.destroy()}}function B(D){m.remove(D)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:I,releaseProgram:F,releaseShaderCache:B,programs:_,dispose:X}}function s1(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function o1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function e0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function n0(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,T,w,y){let g=s[t];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:T,renderOrder:v.renderOrder,z:w,group:y},s[t]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=w,g.group=y),t++,g}function d(v,x,M,T,w,y){const g=h(v,x,M,T,w,y);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,x,M,T,w,y){const g=h(v,x,M,T,w,y);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||o1),r.length>1&&r.sort(x||e0),l.length>1&&l.sort(x||e0)}function _(){for(let v=t,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function l1(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new n0,s.set(r,[h])):l>=u.length?(h=new n0,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function c1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new it,color:new Ne};break;case"SpotLight":i={position:new it,direction:new it,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new it,halfWidth:new it,halfHeight:new it};break}return s[t.id]=i,i}}}function u1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let f1=0;function h1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function d1(s){const t=new c1,i=u1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new it);const l=new it,u=new $e,h=new $e;function d(p){let _=0,v=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,w=0,y=0,g=0,N=0,U=0,C=0,I=0,F=0,B=0;p.sort(h1);for(let D=0,R=p.length;D<R;D++){const G=p[D],lt=G.color,ot=G.intensity,vt=G.distance,dt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=lt.r*ot,v+=lt.g*ot,x+=lt.b*ot;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],ot);B++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=dt,r.directionalShadowMatrix[M]=G.shadow.matrix,N++}r.directional[M]=z,M++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(lt).multiplyScalar(ot),z.distance=vt,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[w]=z;const Z=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,Z.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[w]=Z.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[w]=Y,r.spotShadowMap[w]=dt,C++}w++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(lt).multiplyScalar(ot),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=z,y++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=dt,r.pointShadowMatrix[T]=G.shadow.matrix,U++}r.point[T]=z,T++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(ot),z.groundColor.copy(G.groundColor).multiplyScalar(ot),r.hemi[g]=z,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==M||X.pointLength!==T||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==g||X.numDirectionalShadows!==N||X.numPointShadows!==U||X.numSpotShadows!==C||X.numSpotMaps!==I||X.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=C+I-F,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=B,X.directionalLength=M,X.pointLength=T,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=g,X.numDirectionalShadows=N,X.numPointShadows=U,X.numSpotShadows=C,X.numSpotMaps=I,X.numLightProbes=B,r.version=f1++)}function m(p,_){let v=0,x=0,M=0,T=0,w=0;const y=_.matrixWorldInverse;for(let g=0,N=p.length;g<N;g++){const U=p[g];if(U.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),v++}else if(U.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),h.identity(),u.copy(U.matrixWorld),u.premultiply(y),h.extractRotation(u),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),T++}else if(U.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:r}}function i0(s){const t=new d1(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function p1(s){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new i0(s),t.set(l,[d])):u>=h.length?(d=new i0(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _1(s,t,i){let r=new D0;const l=new Ce,u=new Ce,h=new Je,d=new Vy({depthPacking:$S}),m=new ky,p={},_=i.maxTextureSize,v={[Ha]:In,[In]:Ha,[$i]:$i},x=new Ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new vi;T.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ri(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l0;let g=this.type;this.render=function(F,B,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(Ia),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const ot=g!==Ji&&this.type===Ji,vt=g===Ji&&this.type!==Ji;for(let dt=0,z=F.length;dt<z;dt++){const Z=F[dt],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Et=Y.getFrameExtents();if(l.multiply(Et),u.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/Et.x),l.x=u.x*Et.x,Y.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/Et.y),l.y=u.y*Et.y,Y.mapSize.y=u.y)),Y.map===null||ot===!0||vt===!0){const tt=this.type!==Ji?{minFilter:gi,magFilter:gi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new yr(l.x,l.y,tt),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const L=Y.getViewportCount();for(let tt=0;tt<L;tt++){const xt=Y.getViewport(tt);h.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),lt.viewport(h),Y.updateMatrices(Z,tt),r=Y.getFrustum(),C(B,X,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Ji&&N(Y,X),Y.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(D,R,G)};function N(F,B){const X=t.update(w);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new yr(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(B,null,X,x,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(B,null,X,M,w,null)}function U(F,B,X,D){let R=null;const G=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)R=G;else if(R=X.isPointLight===!0?m:d,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const lt=R.uuid,ot=B.uuid;let vt=p[lt];vt===void 0&&(vt={},p[lt]=vt);let dt=vt[ot];dt===void 0&&(dt=R.clone(),vt[ot]=dt,B.addEventListener("dispose",I)),R=dt}if(R.visible=B.visible,R.wireframe=B.wireframe,D===Ji?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:v[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const lt=s.properties.get(R);lt.light=X}return R}function C(F,B,X,D,R){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Ji)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const ot=t.update(F),vt=F.material;if(Array.isArray(vt)){const dt=ot.groups;for(let z=0,Z=dt.length;z<Z;z++){const Y=dt[z],Et=vt[Y.materialIndex];if(Et&&Et.visible){const L=U(F,Et,D,R);F.onBeforeShadow(s,F,B,X,ot,L,Y),s.renderBufferDirect(X,null,ot,L,F,Y),F.onAfterShadow(s,F,B,X,ot,L,Y)}}}else if(vt.visible){const dt=U(F,vt,D,R);F.onBeforeShadow(s,F,B,X,ot,dt,null),s.renderBufferDirect(X,null,ot,dt,F,null),F.onAfterShadow(s,F,B,X,ot,dt,null)}}const lt=F.children;for(let ot=0,vt=lt.length;ot<vt;ot++)C(lt[ot],B,X,D,R)}function I(F){F.target.removeEventListener("dispose",I);for(const X in p){const D=p[X],R=F.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const v1={[yh]:Mh,[Eh]:Ah,[bh]:Rh,[_s]:Th,[Mh]:yh,[Ah]:Eh,[Rh]:bh,[Th]:_s};function x1(s,t){function i(){let k=!1;const Nt=new Je;let bt=null;const Bt=new Je(0,0,0,0);return{setMask:function(At){bt!==At&&!k&&(s.colorMask(At,At,At,At),bt=At)},setLocked:function(At){k=At},setClear:function(At,_t,Ft,ne,we){we===!0&&(At*=ne,_t*=ne,Ft*=ne),Nt.set(At,_t,Ft,ne),Bt.equals(Nt)===!1&&(s.clearColor(At,_t,Ft,ne),Bt.copy(Nt))},reset:function(){k=!1,bt=null,Bt.set(-1,0,0,0)}}}function r(){let k=!1,Nt=!1,bt=null,Bt=null,At=null;return{setReversed:function(_t){if(Nt!==_t){const Ft=t.get("EXT_clip_control");_t?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Nt=_t;const ne=At;At=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(_t){_t?Rt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!k&&(s.depthMask(_t),bt=_t)},setFunc:function(_t){if(Nt&&(_t=v1[_t]),Bt!==_t){switch(_t){case yh:s.depthFunc(s.NEVER);break;case Mh:s.depthFunc(s.ALWAYS);break;case Eh:s.depthFunc(s.LESS);break;case _s:s.depthFunc(s.LEQUAL);break;case bh:s.depthFunc(s.EQUAL);break;case Th:s.depthFunc(s.GEQUAL);break;case Ah:s.depthFunc(s.GREATER);break;case Rh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Bt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){At!==_t&&(Nt&&(_t=1-_t),s.clearDepth(_t),At=_t)},reset:function(){k=!1,bt=null,Bt=null,At=null,Nt=!1}}}function l(){let k=!1,Nt=null,bt=null,Bt=null,At=null,_t=null,Ft=null,ne=null,we=null;return{setTest:function(Ee){k||(Ee?Rt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Ee){Nt!==Ee&&!k&&(s.stencilMask(Ee),Nt=Ee)},setFunc:function(Ee,Gn,fn){(bt!==Ee||Bt!==Gn||At!==fn)&&(s.stencilFunc(Ee,Gn,fn),bt=Ee,Bt=Gn,At=fn)},setOp:function(Ee,Gn,fn){(_t!==Ee||Ft!==Gn||ne!==fn)&&(s.stencilOp(Ee,Gn,fn),_t=Ee,Ft=Gn,ne=fn)},setLocked:function(Ee){k=Ee},setClear:function(Ee){we!==Ee&&(s.clearStencil(Ee),we=Ee)},reset:function(){k=!1,Nt=null,bt=null,Bt=null,At=null,_t=null,Ft=null,ne=null,we=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},x=new WeakMap,M=[],T=null,w=!1,y=null,g=null,N=null,U=null,C=null,I=null,F=null,B=new Ne(0,0,0),X=0,D=!1,R=null,G=null,lt=null,ot=null,vt=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=Z>=2);let Et=null,L={};const tt=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),yt=new Je().fromArray(tt),Q=new Je().fromArray(xt);function mt(k,Nt,bt,Bt){const At=new Uint8Array(4),_t=s.createTexture();s.bindTexture(k,_t),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<bt;Ft++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Nt,0,s.RGBA,1,1,Bt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Nt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return _t}const Mt={};Mt[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Rt(s.DEPTH_TEST),h.setFunc(_s),ye(!1),he(s_),Rt(s.CULL_FACE),H(Ia);function Rt(k){_[k]!==!0&&(s.enable(k),_[k]=!0)}function wt(k){_[k]!==!1&&(s.disable(k),_[k]=!1)}function oe(k,Nt){return v[k]!==Nt?(s.bindFramebuffer(k,Nt),v[k]=Nt,k===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Nt),k===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Qt(k,Nt){let bt=M,Bt=!1;if(k){bt=x.get(Nt),bt===void 0&&(bt=[],x.set(Nt,bt));const At=k.textures;if(bt.length!==At.length||bt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Ft=At.length;_t<Ft;_t++)bt[_t]=s.COLOR_ATTACHMENT0+_t;bt.length=At.length,Bt=!0}}else bt[0]!==s.BACK&&(bt[0]=s.BACK,Bt=!0);Bt&&s.drawBuffers(bt)}function Le(k){return T!==k?(s.useProgram(k),T=k,!0):!1}const Ie={[mr]:s.FUNC_ADD,[TS]:s.FUNC_SUBTRACT,[AS]:s.FUNC_REVERSE_SUBTRACT};Ie[RS]=s.MIN,Ie[CS]=s.MAX;const me={[wS]:s.ZERO,[DS]:s.ONE,[US]:s.SRC_COLOR,[xh]:s.SRC_ALPHA,[BS]:s.SRC_ALPHA_SATURATE,[PS]:s.DST_COLOR,[LS]:s.DST_ALPHA,[NS]:s.ONE_MINUS_SRC_COLOR,[Sh]:s.ONE_MINUS_SRC_ALPHA,[zS]:s.ONE_MINUS_DST_COLOR,[OS]:s.ONE_MINUS_DST_ALPHA,[IS]:s.CONSTANT_COLOR,[FS]:s.ONE_MINUS_CONSTANT_COLOR,[HS]:s.CONSTANT_ALPHA,[GS]:s.ONE_MINUS_CONSTANT_ALPHA};function H(k,Nt,bt,Bt,At,_t,Ft,ne,we,Ee){if(k===Ia){w===!0&&(wt(s.BLEND),w=!1);return}if(w===!1&&(Rt(s.BLEND),w=!0),k!==bS){if(k!==y||Ee!==D){if((g!==mr||C!==mr)&&(s.blendEquation(s.FUNC_ADD),g=mr,C=mr),Ee)switch(k){case ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case o_:s.blendFunc(s.ONE,s.ONE);break;case l_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case c_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case o_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case l_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case c_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,U=null,I=null,F=null,B.set(0,0,0),X=0,y=k,D=Ee}return}At=At||Nt,_t=_t||bt,Ft=Ft||Bt,(Nt!==g||At!==C)&&(s.blendEquationSeparate(Ie[Nt],Ie[At]),g=Nt,C=At),(bt!==N||Bt!==U||_t!==I||Ft!==F)&&(s.blendFuncSeparate(me[bt],me[Bt],me[_t],me[Ft]),N=bt,U=Bt,I=_t,F=Ft),(ne.equals(B)===!1||we!==X)&&(s.blendColor(ne.r,ne.g,ne.b,we),B.copy(ne),X=we),y=k,D=!1}function _n(k,Nt){k.side===$i?wt(s.CULL_FACE):Rt(s.CULL_FACE);let bt=k.side===In;Nt&&(bt=!bt),ye(bt),k.blending===ps&&k.transparent===!1?H(Ia):H(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Bt=k.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ge(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ye(k){R!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),R=k)}function he(k){k!==yS?(Rt(s.CULL_FACE),k!==G&&(k===s_?s.cullFace(s.BACK):k===MS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),G=k}function Vt(k){k!==lt&&(z&&s.lineWidth(k),lt=k)}function ge(k,Nt,bt){k?(Rt(s.POLYGON_OFFSET_FILL),(ot!==Nt||vt!==bt)&&(s.polygonOffset(Nt,bt),ot=Nt,vt=bt)):wt(s.POLYGON_OFFSET_FILL)}function jt(k){k?Rt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function ae(k){k===void 0&&(k=s.TEXTURE0+dt-1),Et!==k&&(s.activeTexture(k),Et=k)}function Ze(k,Nt,bt){bt===void 0&&(Et===null?bt=s.TEXTURE0+dt-1:bt=Et);let Bt=L[bt];Bt===void 0&&(Bt={type:void 0,texture:void 0},L[bt]=Bt),(Bt.type!==k||Bt.texture!==Nt)&&(Et!==bt&&(s.activeTexture(bt),Et=bt),s.bindTexture(k,Nt||Mt[k]),Bt.type=k,Bt.texture=Nt)}function O(){const k=L[Et];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(k){yt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function qt(k){Q.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function Yt(k,Nt){let bt=p.get(Nt);bt===void 0&&(bt=new WeakMap,p.set(Nt,bt));let Bt=bt.get(k);Bt===void 0&&(Bt=s.getUniformBlockIndex(Nt,k.name),bt.set(k,Bt))}function Ct(k,Nt){const Bt=p.get(Nt).get(k);m.get(Nt)!==Bt&&(s.uniformBlockBinding(Nt,Bt,k.__bindingPointIndex),m.set(Nt,Bt))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},Et=null,L={},v={},x=new WeakMap,M=[],T=null,w=!1,y=null,g=null,N=null,U=null,C=null,I=null,F=null,B=new Ne(0,0,0),X=0,D=!1,R=null,G=null,lt=null,ot=null,vt=null,yt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Rt,disable:wt,bindFramebuffer:oe,drawBuffers:Qt,useProgram:Le,setBlending:H,setMaterial:_n,setFlipSided:ye,setCullFace:he,setLineWidth:Vt,setPolygonOffset:ge,setScissorTest:jt,activeTexture:ae,bindTexture:Ze,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:kt,texImage3D:St,updateUBOMapping:Yt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:ft,texSubImage3D:pt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Pt,scissor:zt,viewport:qt,reset:ie}}function S1(s,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ce,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,E){return M?new OffscreenCanvas(O,E):Rc("canvas")}function w(O,E,et){let ft=1;const pt=Ze(O);if((pt.width>et||pt.height>et)&&(ft=et/Math.max(pt.width,pt.height)),ft<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ct=Math.floor(ft*pt.width),Pt=Math.floor(ft*pt.height);v===void 0&&(v=T(ct,Pt));const Ut=E?T(ct,Pt):v;return Ut.width=ct,Ut.height=Pt,Ut.getContext("2d").drawImage(O,0,0,ct,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ct+"x"+Pt+")."),Ut}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function y(O){return O.generateMipmaps}function g(O){s.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(O,E,et,ft,pt=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ct=E;if(E===s.RED&&(et===s.FLOAT&&(ct=s.R32F),et===s.HALF_FLOAT&&(ct=s.R16F),et===s.UNSIGNED_BYTE&&(ct=s.R8)),E===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(ct=s.R8UI),et===s.UNSIGNED_SHORT&&(ct=s.R16UI),et===s.UNSIGNED_INT&&(ct=s.R32UI),et===s.BYTE&&(ct=s.R8I),et===s.SHORT&&(ct=s.R16I),et===s.INT&&(ct=s.R32I)),E===s.RG&&(et===s.FLOAT&&(ct=s.RG32F),et===s.HALF_FLOAT&&(ct=s.RG16F),et===s.UNSIGNED_BYTE&&(ct=s.RG8)),E===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(ct=s.RG8UI),et===s.UNSIGNED_SHORT&&(ct=s.RG16UI),et===s.UNSIGNED_INT&&(ct=s.RG32UI),et===s.BYTE&&(ct=s.RG8I),et===s.SHORT&&(ct=s.RG16I),et===s.INT&&(ct=s.RG32I)),E===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),et===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),et===s.UNSIGNED_INT&&(ct=s.RGB32UI),et===s.BYTE&&(ct=s.RGB8I),et===s.SHORT&&(ct=s.RGB16I),et===s.INT&&(ct=s.RGB32I)),E===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),et===s.UNSIGNED_INT&&(ct=s.RGBA32UI),et===s.BYTE&&(ct=s.RGBA8I),et===s.SHORT&&(ct=s.RGBA16I),et===s.INT&&(ct=s.RGBA32I)),E===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),E===s.RGBA){const Pt=pt?Tc:Te.getTransfer(ft);et===s.FLOAT&&(ct=s.RGBA32F),et===s.HALF_FLOAT&&(ct=s.RGBA16F),et===s.UNSIGNED_BYTE&&(ct=Pt===Be?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function C(O,E){let et;return O?E===null||E===Sr||E===wo?et=s.DEPTH24_STENCIL8:E===ta?et=s.DEPTH32F_STENCIL8:E===Co&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Sr||E===wo?et=s.DEPTH_COMPONENT24:E===ta?et=s.DEPTH_COMPONENT32F:E===Co&&(et=s.DEPTH_COMPONENT16),et}function I(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==gi&&O.minFilter!==Ai?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function F(O){const E=O.target;E.removeEventListener("dispose",F),X(E),E.isVideoTexture&&_.delete(E)}function B(O){const E=O.target;E.removeEventListener("dispose",B),R(E)}function X(O){const E=r.get(O);if(E.__webglInit===void 0)return;const et=O.source,ft=x.get(et);if(ft){const pt=ft[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&D(O),Object.keys(ft).length===0&&x.delete(et)}r.remove(O)}function D(O){const E=r.get(O);s.deleteTexture(E.__webglTexture);const et=O.source,ft=x.get(et);delete ft[E.__cacheKey],h.memory.textures--}function R(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let pt=0;pt<E.__webglFramebuffer[ft].length;pt++)s.deleteFramebuffer(E.__webglFramebuffer[ft][pt]);else s.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)s.deleteFramebuffer(E.__webglFramebuffer[ft]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=O.textures;for(let ft=0,pt=et.length;ft<pt;ft++){const ct=r.get(et[ft]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),h.memory.textures--),r.remove(et[ft])}r.remove(O)}let G=0;function lt(){G=0}function ot(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function vt(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function dt(O,E){const et=r.get(O);if(O.isVideoTexture&&jt(O),O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){const ft=O.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(et,O,E);return}}i.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+E)}function z(O,E){const et=r.get(O);if(O.version>0&&et.__version!==O.version){Mt(et,O,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+E)}function Z(O,E){const et=r.get(O);if(O.version>0&&et.__version!==O.version){Mt(et,O,E);return}i.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+E)}function Y(O,E){const et=r.get(O);if(O.version>0&&et.__version!==O.version){Rt(et,O,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+E)}const Et={[Dh]:s.REPEAT,[_r]:s.CLAMP_TO_EDGE,[Uh]:s.MIRRORED_REPEAT},L={[gi]:s.NEAREST,[QS]:s.NEAREST_MIPMAP_NEAREST,[Yl]:s.NEAREST_MIPMAP_LINEAR,[Ai]:s.LINEAR,[Vf]:s.LINEAR_MIPMAP_NEAREST,[vr]:s.LINEAR_MIPMAP_LINEAR},tt={[ny]:s.NEVER,[ly]:s.ALWAYS,[iy]:s.LESS,[x0]:s.LEQUAL,[ay]:s.EQUAL,[oy]:s.GEQUAL,[ry]:s.GREATER,[sy]:s.NOTEQUAL};function xt(O,E){if(E.type===ta&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ai||E.magFilter===Vf||E.magFilter===Yl||E.magFilter===vr||E.minFilter===Ai||E.minFilter===Vf||E.minFilter===Yl||E.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,Et[E.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,Et[E.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,Et[E.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,L[E.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gi||E.minFilter!==Yl&&E.minFilter!==vr||E.type===ta&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function yt(O,E){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",F));const ft=E.source;let pt=x.get(ft);pt===void 0&&(pt={},x.set(ft,pt));const ct=vt(E);if(ct!==O.__cacheKey){pt[ct]===void 0&&(pt[ct]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,et=!0),pt[ct].usedTimes++;const Pt=pt[O.__cacheKey];Pt!==void 0&&(pt[O.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(E)),O.__cacheKey=ct,O.__webglTexture=pt[ct].texture}return et}function Q(O,E,et){return Math.floor(Math.floor(O/et)/E)}function mt(O,E,et,ft){const ct=O.updateRanges;if(ct.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,et,ft,E.data);else{ct.sort((St,zt)=>St.start-zt.start);let Pt=0;for(let St=1;St<ct.length;St++){const zt=ct[Pt],qt=ct[St],Yt=zt.start+zt.count,Ct=Q(qt.start,E.width,4),ie=Q(zt.start,E.width,4);qt.start<=Yt+1&&Ct===ie&&Q(qt.start+qt.count-1,E.width,4)===Ct?zt.count=Math.max(zt.count,qt.start+qt.count-zt.start):(++Pt,ct[Pt]=qt)}ct.length=Pt+1;const Ut=s.getParameter(s.UNPACK_ROW_LENGTH),Gt=s.getParameter(s.UNPACK_SKIP_PIXELS),kt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let St=0,zt=ct.length;St<zt;St++){const qt=ct[St],Yt=Math.floor(qt.start/4),Ct=Math.ceil(qt.count/4),ie=Yt%E.width,k=Math.floor(Yt/E.width),Nt=Ct,bt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,ie,k,Nt,bt,et,ft,E.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ut),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,kt)}}function Mt(O,E,et){let ft=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=s.TEXTURE_3D);const pt=yt(O,E),ct=E.source;i.bindTexture(ft,O.__webglTexture,s.TEXTURE0+et);const Pt=r.get(ct);if(ct.version!==Pt.__version||pt===!0){i.activeTexture(s.TEXTURE0+et);const Ut=Te.getPrimaries(Te.workingColorSpace),Gt=E.colorSpace===Ba?null:Te.getPrimaries(E.colorSpace),kt=E.colorSpace===Ba||Ut===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let St=w(E.image,!1,l.maxTextureSize);St=ae(E,St);const zt=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let Yt=U(E.internalFormat,zt,qt,E.colorSpace,E.isVideoTexture);xt(ft,E);let Ct;const ie=E.mipmaps,k=E.isVideoTexture!==!0,Nt=Pt.__version===void 0||pt===!0,bt=ct.dataReady,Bt=I(E,St);if(E.isDepthTexture)Yt=C(E.format===Uo,E.type),Nt&&(k?i.texStorage2D(s.TEXTURE_2D,1,Yt,St.width,St.height):i.texImage2D(s.TEXTURE_2D,0,Yt,St.width,St.height,0,zt,qt,null));else if(E.isDataTexture)if(ie.length>0){k&&Nt&&i.texStorage2D(s.TEXTURE_2D,Bt,Yt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],k?bt&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,qt,Ct.data):i.texImage2D(s.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,zt,qt,Ct.data);E.generateMipmaps=!1}else k?(Nt&&i.texStorage2D(s.TEXTURE_2D,Bt,Yt,St.width,St.height),bt&&mt(E,St,zt,qt)):i.texImage2D(s.TEXTURE_2D,0,Yt,St.width,St.height,0,zt,qt,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Yt,ie[0].width,ie[0].height,St.depth);for(let At=0,_t=ie.length;At<_t;At++)if(Ct=ie[At],E.format!==mi)if(zt!==null)if(k){if(bt)if(E.layerUpdates.size>0){const Ft=L_(Ct.width,Ct.height,E.format,E.type);for(const ne of E.layerUpdates){const we=Ct.data.subarray(ne*Ft/Ct.data.BYTES_PER_ELEMENT,(ne+1)*Ft/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,ne,Ct.width,Ct.height,1,zt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,St.depth,zt,Ct.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,At,Yt,Ct.width,Ct.height,St.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?bt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,St.depth,zt,qt,Ct.data):i.texImage3D(s.TEXTURE_2D_ARRAY,At,Yt,Ct.width,Ct.height,St.depth,0,zt,qt,Ct.data)}else{k&&Nt&&i.texStorage2D(s.TEXTURE_2D,Bt,Yt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],E.format!==mi?zt!==null?k?bt&&i.compressedTexSubImage2D(s.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,Ct.data):i.compressedTexImage2D(s.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?bt&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,qt,Ct.data):i.texImage2D(s.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,zt,qt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Yt,St.width,St.height,St.depth),bt)if(E.layerUpdates.size>0){const At=L_(St.width,St.height,E.format,E.type);for(const _t of E.layerUpdates){const Ft=St.data.subarray(_t*At/St.data.BYTES_PER_ELEMENT,(_t+1)*At/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,zt,qt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,zt,qt,St.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Yt,St.width,St.height,St.depth,0,zt,qt,St.data);else if(E.isData3DTexture)k?(Nt&&i.texStorage3D(s.TEXTURE_3D,Bt,Yt,St.width,St.height,St.depth),bt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,zt,qt,St.data)):i.texImage3D(s.TEXTURE_3D,0,Yt,St.width,St.height,St.depth,0,zt,qt,St.data);else if(E.isFramebufferTexture){if(Nt)if(k)i.texStorage2D(s.TEXTURE_2D,Bt,Yt,St.width,St.height);else{let At=St.width,_t=St.height;for(let Ft=0;Ft<Bt;Ft++)i.texImage2D(s.TEXTURE_2D,Ft,Yt,At,_t,0,zt,qt,null),At>>=1,_t>>=1}}else if(ie.length>0){if(k&&Nt){const At=Ze(ie[0]);i.texStorage2D(s.TEXTURE_2D,Bt,Yt,At.width,At.height)}for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],k?bt&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,zt,qt,Ct):i.texImage2D(s.TEXTURE_2D,At,Yt,zt,qt,Ct);E.generateMipmaps=!1}else if(k){if(Nt){const At=Ze(St);i.texStorage2D(s.TEXTURE_2D,Bt,Yt,At.width,At.height)}bt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,zt,qt,St)}else i.texImage2D(s.TEXTURE_2D,0,Yt,zt,qt,St);y(E)&&g(ft),Pt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Rt(O,E,et){if(E.image.length!==6)return;const ft=yt(O,E),pt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+et);const ct=r.get(pt);if(pt.version!==ct.__version||ft===!0){i.activeTexture(s.TEXTURE0+et);const Pt=Te.getPrimaries(Te.workingColorSpace),Ut=E.colorSpace===Ba?null:Te.getPrimaries(E.colorSpace),Gt=E.colorSpace===Ba||Pt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const kt=E.isCompressedTexture||E.image[0].isCompressedTexture,St=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let _t=0;_t<6;_t++)!kt&&!St?zt[_t]=w(E.image[_t],!0,l.maxCubemapSize):zt[_t]=St?E.image[_t].image:E.image[_t],zt[_t]=ae(E,zt[_t]);const qt=zt[0],Yt=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),ie=U(E.internalFormat,Yt,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Nt=ct.__version===void 0||ft===!0,bt=pt.dataReady;let Bt=I(E,qt);xt(s.TEXTURE_CUBE_MAP,E);let At;if(kt){k&&Nt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,ie,qt.width,qt.height);for(let _t=0;_t<6;_t++){At=zt[_t].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];E.format!==mi?Yt!==null?k?bt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,Yt,ne.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,Yt,Ct,ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,Yt,Ct,ne.data)}}}else{if(At=E.mipmaps,k&&Nt){At.length>0&&Bt++;const _t=Ze(zt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,zt[_t].width,zt[_t].height,Yt,Ct,zt[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,zt[_t].width,zt[_t].height,0,Yt,Ct,zt[_t].data);for(let Ft=0;Ft<At.length;Ft++){const we=At[Ft].image[_t].image;k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,we.width,we.height,Yt,Ct,we.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,we.width,we.height,0,Yt,Ct,we.data)}}else{k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Yt,Ct,zt[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Yt,Ct,zt[_t]);for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,Yt,Ct,ne.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,Yt,Ct,ne.image[_t])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),ct.__version=pt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function wt(O,E,et,ft,pt,ct){const Pt=u.convert(et.format,et.colorSpace),Ut=u.convert(et.type),Gt=U(et.internalFormat,Pt,Ut,et.colorSpace),kt=r.get(E),St=r.get(et);if(St.__renderTarget=E,!kt.__hasExternalTextures){const zt=Math.max(1,E.width>>ct),qt=Math.max(1,E.height>>ct);pt===s.TEXTURE_3D||pt===s.TEXTURE_2D_ARRAY?i.texImage3D(pt,ct,Gt,zt,qt,E.depth,0,Pt,Ut,null):i.texImage2D(pt,ct,Gt,zt,qt,0,Pt,Ut,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),ge(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,pt,St.__webglTexture,0,Vt(E)):(pt===s.TEXTURE_2D||pt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,pt,St.__webglTexture,ct),i.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(O,E,et){if(s.bindRenderbuffer(s.RENDERBUFFER,O),E.depthBuffer){const ft=E.depthTexture,pt=ft&&ft.isDepthTexture?ft.type:null,ct=C(E.stencilBuffer,pt),Pt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=Vt(E);ge(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,ct,E.width,E.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,ct,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ct,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,O)}else{const ft=E.textures;for(let pt=0;pt<ft.length;pt++){const ct=ft[pt],Pt=u.convert(ct.format,ct.colorSpace),Ut=u.convert(ct.type),Gt=U(ct.internalFormat,Pt,Ut,ct.colorSpace),kt=Vt(E);et&&ge(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,Gt,E.width,E.height):ge(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,Gt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Gt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qt(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt(E.depthTexture,0);const pt=ft.__webglTexture,ct=Vt(E);if(E.depthTexture.format===Do)ge(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0);else if(E.depthTexture.format===Uo)ge(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Le(O){const E=r.get(O),et=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ft=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",pt)};ft.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ft}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=O.texture.mipmaps;ft&&ft.length>0?Qt(E.__webglFramebuffer[0],O):Qt(E.__webglFramebuffer,O)}else if(et){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=s.createRenderbuffer(),oe(E.__webglDepthbuffer[ft],O,!1);else{const pt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,ct)}}else{const ft=O.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),oe(E.__webglDepthbuffer,O,!1);else{const pt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,ct)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(O,E,et){const ft=r.get(O);E!==void 0&&wt(ft.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&Le(O)}function me(O){const E=O.texture,et=r.get(O),ft=r.get(E);O.addEventListener("dispose",B);const pt=O.textures,ct=O.isWebGLCubeRenderTarget===!0,Pt=pt.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=E.version,h.memory.textures++),ct){et.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<E.mipmaps.length;Gt++)et.__webglFramebuffer[Ut][Gt]=s.createFramebuffer()}else et.__webglFramebuffer[Ut]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)et.__webglFramebuffer[Ut]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let Ut=0,Gt=pt.length;Ut<Gt;Ut++){const kt=r.get(pt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),h.memory.textures++)}if(O.samples>0&&ge(O)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ut=0;Ut<pt.length;Ut++){const Gt=pt[Ut];et.__webglColorRenderbuffer[Ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Ut]);const kt=u.convert(Gt.format,Gt.colorSpace),St=u.convert(Gt.type),zt=U(Gt.internalFormat,kt,St,Gt.colorSpace,O.isXRRenderTarget===!0),qt=Vt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,zt,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,et.__webglColorRenderbuffer[Ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),xt(s.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)wt(et.__webglFramebuffer[Ut][Gt],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else wt(et.__webglFramebuffer[Ut],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(E)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Ut=0,Gt=pt.length;Ut<Gt;Ut++){const kt=pt[Ut],St=r.get(kt);i.bindTexture(s.TEXTURE_2D,St.__webglTexture),xt(s.TEXTURE_2D,kt),wt(et.__webglFramebuffer,O,kt,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,0),y(kt)&&g(s.TEXTURE_2D)}i.unbindTexture()}else{let Ut=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ft.__webglTexture),xt(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)wt(et.__webglFramebuffer[Gt],O,E,s.COLOR_ATTACHMENT0,Ut,Gt);else wt(et.__webglFramebuffer,O,E,s.COLOR_ATTACHMENT0,Ut,0);y(E)&&g(Ut),i.unbindTexture()}O.depthBuffer&&Le(O)}function H(O){const E=O.textures;for(let et=0,ft=E.length;et<ft;et++){const pt=E[et];if(y(pt)){const ct=N(O),Pt=r.get(pt).__webglTexture;i.bindTexture(ct,Pt),g(ct),i.unbindTexture()}}}const _n=[],ye=[];function he(O){if(O.samples>0){if(ge(O)===!1){const E=O.textures,et=O.width,ft=O.height;let pt=s.COLOR_BUFFER_BIT;const ct=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=r.get(O),Ut=E.length>1;if(Ut)for(let kt=0;kt<E.length;kt++)i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=O.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let kt=0;kt<E.length;kt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=s.STENCIL_BUFFER_BIT)),Ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const St=r.get(E[kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,St,0)}s.blitFramebuffer(0,0,et,ft,0,0,et,ft,pt,s.NEAREST),m===!0&&(_n.length=0,ye.length=0,_n.push(s.COLOR_ATTACHMENT0+kt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(_n.push(ct),ye.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_n))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<E.length;kt++){i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const St=r.get(E[kt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,St,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Vt(O){return Math.min(l.maxSamples,O.samples)}function ge(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(O){const E=h.render.frame;_.get(O)!==E&&(_.set(O,E),O.update())}function ae(O,E){const et=O.colorSpace,ft=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==Ss&&et!==Ba&&(Te.getTransfer(et)===Be?(ft!==mi||pt!==ia)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Ze(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=lt,this.setTexture2D=dt,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Ie,this.setupRenderTarget=me,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=ge}function y1(s,t){function i(r,l=Ba){let u;const h=Te.getTransfer(l);if(r===ia)return s.UNSIGNED_BYTE;if(r===ud)return s.UNSIGNED_SHORT_4_4_4_4;if(r===fd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===d0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===f0)return s.BYTE;if(r===h0)return s.SHORT;if(r===Co)return s.UNSIGNED_SHORT;if(r===cd)return s.INT;if(r===Sr)return s.UNSIGNED_INT;if(r===ta)return s.FLOAT;if(r===No)return s.HALF_FLOAT;if(r===p0)return s.ALPHA;if(r===m0)return s.RGB;if(r===mi)return s.RGBA;if(r===Do)return s.DEPTH_COMPONENT;if(r===Uo)return s.DEPTH_STENCIL;if(r===g0)return s.RED;if(r===hd)return s.RED_INTEGER;if(r===_0)return s.RG;if(r===dd)return s.RG_INTEGER;if(r===pd)return s.RGBA_INTEGER;if(r===_c||r===vc||r===xc||r===Sc)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===_c)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===_c)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nh||r===Lh||r===Oh||r===Ph)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Nh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ph)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zh||r===Bh||r===Ih)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===zh||r===Bh)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Ih)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Fh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yc||r===$h||r===td)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===yc)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===v0||r===ed||r===nd||r===id)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===yc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const M1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
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

}`;class b1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Fn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ga({vertexShader:M1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Nc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends Es{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,x=null,M=null,T=null;const w=new b1,y=i.getContextAttributes();let g=null,N=null;const U=[],C=[],I=new Ce;let F=null;const B=new oi;B.viewport=new Je;const X=new oi;X.viewport=new Je;const D=[B,X],R=new Wy;let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let mt=U[Q];return mt===void 0&&(mt=new fh,U[Q]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Q){let mt=U[Q];return mt===void 0&&(mt=new fh,U[Q]=mt),mt.getGripSpace()},this.getHand=function(Q){let mt=U[Q];return mt===void 0&&(mt=new fh,U[Q]=mt),mt.getHandSpace()};function ot(Q){const mt=C.indexOf(Q.inputSource);if(mt===-1)return;const Mt=U[mt];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,p||h),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function vt(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",vt),l.removeEventListener("inputsourceschange",dt);for(let Q=0;Q<U.length;Q++){const mt=C[Q];mt!==null&&(C[Q]=null,U[Q].disconnect(mt))}G=null,lt=null,w.reset(),t.setRenderTarget(g),M=null,x=null,v=null,l=null,N=null,yt.stop(),r.isPresenting=!1,t.setPixelRatio(F),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",vt),l.addEventListener("inputsourceschange",dt),y.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,wt=null;y.depth&&(wt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?Uo:Do,Rt=y.stencil?wo:Sr);const oe={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new yr(x.textureWidth,x.textureHeight,{format:mi,type:ia,depthTexture:new N0(x.textureWidth,x.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new yr(M.framebufferWidth,M.framebufferHeight,{format:mi,type:ia,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function dt(Q){for(let mt=0;mt<Q.removed.length;mt++){const Mt=Q.removed[mt],Rt=C.indexOf(Mt);Rt>=0&&(C[Rt]=null,U[Rt].disconnect(Mt))}for(let mt=0;mt<Q.added.length;mt++){const Mt=Q.added[mt];let Rt=C.indexOf(Mt);if(Rt===-1){for(let oe=0;oe<U.length;oe++)if(oe>=C.length){C.push(Mt),Rt=oe;break}else if(C[oe]===null){C[oe]=Mt,Rt=oe;break}if(Rt===-1)break}const wt=U[Rt];wt&&wt.connect(Mt)}}const z=new it,Z=new it;function Y(Q,mt,Mt){z.setFromMatrixPosition(mt.matrixWorld),Z.setFromMatrixPosition(Mt.matrixWorld);const Rt=z.distanceTo(Z),wt=mt.projectionMatrix.elements,oe=Mt.projectionMatrix.elements,Qt=wt[14]/(wt[10]-1),Le=wt[14]/(wt[10]+1),Ie=(wt[9]+1)/wt[5],me=(wt[9]-1)/wt[5],H=(wt[8]-1)/wt[0],_n=(oe[8]+1)/oe[0],ye=Qt*H,he=Qt*_n,Vt=Rt/(-H+_n),ge=Vt*-H;if(mt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ge),Q.translateZ(Vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),wt[10]===-1)Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const jt=Qt+Vt,ae=Le+Vt,Ze=ye-ge,O=he+(Rt-ge),E=Ie*Le/ae*jt,et=me*Le/ae*jt;Q.projectionMatrix.makePerspective(Ze,O,E,et,jt,ae),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Et(Q,mt){mt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(mt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let mt=Q.near,Mt=Q.far;w.texture!==null&&(w.depthNear>0&&(mt=w.depthNear),w.depthFar>0&&(Mt=w.depthFar)),R.near=X.near=B.near=mt,R.far=X.far=B.far=Mt,(G!==R.near||lt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,lt=R.far),B.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,R.layers.mask=B.layers.mask|X.layers.mask;const Rt=Q.parent,wt=R.cameras;Et(R,Rt);for(let oe=0;oe<wt.length;oe++)Et(wt[oe],Rt);wt.length===2?Y(R,B,X):R.projectionMatrix.copy(B.projectionMatrix),L(Q,R,Rt)};function L(Q,mt,Mt){Mt===null?Q.matrix.copy(mt.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(mt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ad*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let tt=null;function xt(Q,mt){if(_=mt.getViewerPose(p||h),T=mt,_!==null){const Mt=_.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let Rt=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,Rt=!0);for(let Qt=0;Qt<Mt.length;Qt++){const Le=Mt[Qt];let Ie=null;if(M!==null)Ie=M.getViewport(Le);else{const H=v.getViewSubImage(x,Le);Ie=H.viewport,Qt===0&&(t.setRenderTargetTextures(N,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(N))}let me=D[Qt];me===void 0&&(me=new oi,me.layers.enable(Qt),me.viewport=new Je,D[Qt]=me),me.matrix.fromArray(Le.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Le.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Qt===0&&(R.matrix.copy(me.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Rt===!0&&R.cameras.push(me)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Qt=v.getDepthInformation(Mt[0]);Qt&&Qt.isValid&&Qt.texture&&w.init(t,Qt,l.renderState)}}for(let Mt=0;Mt<U.length;Mt++){const Rt=C[Mt],wt=U[Mt];Rt!==null&&wt!==void 0&&wt.update(Rt,mt,p||h)}tt&&tt(Q,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),T=null}const yt=new L0;yt.setAnimationLoop(xt),this.setAnimationLoop=function(Q){tt=Q},this.dispose=function(){}}}const hr=new aa,A1=new $e;function R1(s,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,R0(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,N,U,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,C)):g.isMeshMatcapMaterial?(u(y,g),T(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),w(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,N,U):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===In&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===In&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const N=t.get(g),U=N.envMap,C=N.envMapRotation;U&&(y.envMap.value=U,hr.copy(C),hr.x*=-1,hr.y*=-1,hr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),y.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(hr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,N,U){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*N,y.scale.value=U*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,N){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function w(y,g){const N=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function C1(s,t,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const C=U.program;r.uniformBlockBinding(N,C)}function p(N,U){let C=l[N.id];C===void 0&&(T(N),C=_(N),l[N.id]=C,N.addEventListener("dispose",y));const I=U.program;r.updateUBOMapping(N,I);const F=t.render.frame;u[N.id]!==F&&(x(N),u[N.id]=F)}function _(N){const U=v();N.__bindingPointIndex=U;const C=s.createBuffer(),I=N.__size,F=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,I,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,C),C}function v(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const U=l[N.id],C=N.uniforms,I=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let F=0,B=C.length;F<B;F++){const X=Array.isArray(C[F])?C[F]:[C[F]];for(let D=0,R=X.length;D<R;D++){const G=X[D];if(M(G,F,D,I)===!0){const lt=G.__offset,ot=Array.isArray(G.value)?G.value:[G.value];let vt=0;for(let dt=0;dt<ot.length;dt++){const z=ot[dt],Z=w(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,lt+vt,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,vt),vt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,U,C,I){const F=N.value,B=U+"_"+C;if(I[B]===void 0)return typeof F=="number"||typeof F=="boolean"?I[B]=F:I[B]=F.clone(),!0;{const X=I[B];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return I[B]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function T(N){const U=N.uniforms;let C=0;const I=16;for(let B=0,X=U.length;B<X;B++){const D=Array.isArray(U[B])?U[B]:[U[B]];for(let R=0,G=D.length;R<G;R++){const lt=D[R],ot=Array.isArray(lt.value)?lt.value:[lt.value];for(let vt=0,dt=ot.length;vt<dt;vt++){const z=ot[vt],Z=w(z),Y=C%I,Et=Y%Z.boundary,L=Y+Et;C+=Et,L!==0&&I-L<Z.storage&&(C+=I-L),lt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=C,C+=Z.storage}}}const F=C%I;return F>0&&(C+=I-F),N.__size=C,N.__cache={},this}function w(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function y(N){const U=N.target;U.removeEventListener("dispose",y);const C=h.indexOf(U.__bindingPointIndex);h.splice(C,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function g(){for(const N in l)s.deleteBuffer(l[N]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class w1{constructor(t={}){const{canvas:i=uy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const N=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1;this._outputColorSpace=si;let F=0,B=0,X=null,D=-1,R=null;const G=new Je,lt=new Je;let ot=null;const vt=new Ne(0);let dt=0,z=i.width,Z=i.height,Y=1,Et=null,L=null;const tt=new Je(0,0,z,Z),xt=new Je(0,0,z,Z);let yt=!1;const Q=new D0;let mt=!1,Mt=!1;const Rt=new $e,wt=new $e,oe=new it,Qt=new Je,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function me(){return X===null?Y:1}let H=r;function _n(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ld}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",_t,!1),H===null){const q="webgl2";if(H=_n(q,A),H===null)throw _n(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,he,Vt,ge,jt,ae,Ze,O,E,et,ft,pt,ct,Pt,Ut,Gt,kt,St,zt,qt,Yt,Ct,ie,k;function Nt(){ye=new Fb(H),ye.init(),Ct=new y1(H,ye),he=new Nb(H,ye,t,Ct),Vt=new x1(H,ye),he.reverseDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),ge=new Vb(H),jt=new s1,ae=new S1(H,ye,Vt,jt,he,Ct,ge),Ze=new Ob(C),O=new Ib(C),E=new jy(H),ie=new Db(H,E),et=new Hb(H,E,ge,ie),ft=new Xb(H,et,E,ge),zt=new kb(H,he,ae),Gt=new Lb(jt),pt=new r1(C,Ze,O,ye,he,ie,Gt),ct=new R1(C,jt),Pt=new l1,Ut=new p1(ye),St=new wb(C,Ze,O,Vt,ft,M,m),kt=new _1(C,ft,he),k=new C1(H,ge,he,Vt),qt=new Ub(H,ye,ge),Yt=new Gb(H,ye,ge),ge.programs=pt.programs,C.capabilities=he,C.extensions=ye,C.properties=jt,C.renderLists=Pt,C.shadowMap=kt,C.state=Vt,C.info=ge}Nt();const bt=new T1(C,H);this.xr=bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(z,Z,!1))},this.getSize=function(A){return A.set(z,Z)},this.setSize=function(A,q,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,Z=q,i.width=Math.floor(A*Y),i.height=Math.floor(q*Y),rt===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(z*Y,Z*Y).floor()},this.setDrawingBufferSize=function(A,q,rt){z=A,Z=q,Y=rt,i.width=Math.floor(A*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,q,rt,st){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,q,rt,st),Vt.viewport(G.copy(tt).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(xt)},this.setScissor=function(A,q,rt,st){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,q,rt,st),Vt.scissor(lt.copy(xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){Vt.setScissorTest(yt=A)},this.setOpaqueSort=function(A){Et=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,rt=!0){let st=0;if(A){let j=!1;if(X!==null){const Tt=X.texture.format;j=Tt===pd||Tt===dd||Tt===hd}if(j){const Tt=X.texture.type,Dt=Tt===ia||Tt===Sr||Tt===Co||Tt===wo||Tt===ud||Tt===fd,Ot=St.getClearColor(),It=St.getClearAlpha(),$t=Ot.r,Zt=Ot.g,Xt=Ot.b;Dt?(T[0]=$t,T[1]=Zt,T[2]=Xt,T[3]=It,H.clearBufferuiv(H.COLOR,0,T)):(w[0]=$t,w[1]=Zt,w[2]=Xt,w[3]=It,H.clearBufferiv(H.COLOR,0,w))}else st|=H.COLOR_BUFFER_BIT}q&&(st|=H.DEPTH_BUFFER_BIT),rt&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),St.dispose(),Pt.dispose(),Ut.dispose(),jt.dispose(),Ze.dispose(),O.dispose(),ft.dispose(),ie.dispose(),k.dispose(),pt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",rn),bt.removeEventListener("sessionend",vn),Nn.stop()};function Bt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=ge.autoReset,q=kt.enabled,rt=kt.autoUpdate,st=kt.needsUpdate,j=kt.type;Nt(),ge.autoReset=A,kt.enabled=q,kt.autoUpdate=rt,kt.needsUpdate=st,kt.type=j}function _t(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){const q=A.target;q.removeEventListener("dispose",Ft),ne(q)}function ne(A){we(A),jt.remove(A)}function we(A){const q=jt.get(A).programs;q!==void 0&&(q.forEach(function(rt){pt.releaseProgram(rt)}),A.isShaderMaterial&&pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,rt,st,j,Tt){q===null&&(q=Le);const Dt=j.isMesh&&j.matrixWorld.determinant()<0,Ot=Xa(A,q,rt,st,j);Vt.setMaterial(st,Dt);let It=rt.index,$t=1;if(st.wireframe===!0){if(It=et.getWireframeAttribute(rt),It===void 0)return;$t=2}const Zt=rt.drawRange,Xt=rt.attributes.position;let ce=Zt.start*$t,Ae=(Zt.start+Zt.count)*$t;Tt!==null&&(ce=Math.max(ce,Tt.start*$t),Ae=Math.min(Ae,(Tt.start+Tt.count)*$t)),It!==null?(ce=Math.max(ce,0),Ae=Math.min(Ae,It.count)):Xt!=null&&(ce=Math.max(ce,0),Ae=Math.min(Ae,Xt.count));const Ge=Ae-ce;if(Ge<0||Ge===1/0)return;ie.setup(j,st,Ot,rt,It);let _e,ve=qt;if(It!==null&&(_e=E.get(It),ve=Yt,ve.setIndex(_e)),j.isMesh)st.wireframe===!0?(Vt.setLineWidth(st.wireframeLinewidth*me()),ve.setMode(H.LINES)):ve.setMode(H.TRIANGLES);else if(j.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),Vt.setLineWidth(Kt*me()),j.isLineSegments?ve.setMode(H.LINES):j.isLineLoop?ve.setMode(H.LINE_LOOP):ve.setMode(H.LINE_STRIP)}else j.isPoints?ve.setMode(H.POINTS):j.isSprite&&ve.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))ve.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,qe=j._multiDrawCounts,Me=j._multiDrawCount,bn=It?E.get(It).bytesPerElement:1,la=jt.get(st).currentProgram.getUniforms();for(let Ve=0;Ve<Me;Ve++)la.setValue(H,"_gl_DrawID",Ve),ve.render(Kt[Ve]/bn,qe[Ve])}else if(j.isInstancedMesh)ve.renderInstances(ce,Ge,j.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,qe=Math.min(rt.instanceCount,Kt);ve.renderInstances(ce,Ge,qe)}else ve.render(ce,Ge)};function Ee(A,q,rt){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,sa(A,q,rt),A.side=Ha,A.needsUpdate=!0,sa(A,q,rt),A.side=$i):sa(A,q,rt)}this.compile=function(A,q,rt=null){rt===null&&(rt=A),g=Ut.get(rt),g.init(q),U.push(g),rt.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),A!==rt&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const st=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Ot=Tt[Dt];Ee(Ot,rt,j),st.add(Ot)}else Ee(Tt,rt,j),st.add(Tt)}),g=U.pop(),st},this.compileAsync=function(A,q,rt=null){const st=this.compile(A,q,rt);return new Promise(j=>{function Tt(){if(st.forEach(function(Dt){jt.get(Dt).currentProgram.isReady()&&st.delete(Dt)}),st.size===0){j(A);return}setTimeout(Tt,10)}ye.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Gn=null;function fn(A){Gn&&Gn(A)}function rn(){Nn.stop()}function vn(){Nn.start()}const Nn=new L0;Nn.setAnimationLoop(fn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){Gn=A,bt.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},bt.addEventListener("sessionstart",rn),bt.addEventListener("sessionend",vn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,q,X),g=Ut.get(A,U.length),g.init(q),U.push(g),wt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(wt),Mt=this.localClippingEnabled,mt=Gt.init(this.clippingPlanes,Mt),y=Pt.get(A,N.length),y.init(),N.push(y),bt.enabled===!0&&bt.isPresenting===!0){const Tt=C.xr.getDepthSensingMesh();Tt!==null&&Va(Tt,q,-1/0,C.sortObjects)}Va(A,q,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(Et,L),Ie=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Ie&&St.addToRenderList(y,A),this.info.render.frame++,mt===!0&&Gt.beginShadows();const rt=g.state.shadowsArray;kt.render(rt,A,q),mt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,j=y.transmissive;if(g.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(j.length>0)for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const It=Tt[Dt];Io(st,j,A,It)}Ie&&St.render(A);for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const It=Tt[Dt];Bo(y,A,It,It.viewport)}}else j.length>0&&Io(st,j,A,q),Ie&&St.render(A),Bo(y,A,q);X!==null&&B===0&&(ae.updateMultisampleRenderTarget(X),ae.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,q),ie.resetDefaultState(),D=-1,R=null,U.pop(),U.length>0?(g=U[U.length-1],mt===!0&&Gt.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Va(A,q,rt,st){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){st&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(wt);const Dt=ft.update(A),Ot=A.material;Ot.visible&&y.push(A,Dt,Ot,rt,Qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Dt=ft.update(A),Ot=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(wt)),Array.isArray(Ot)){const It=Dt.groups;for(let $t=0,Zt=It.length;$t<Zt;$t++){const Xt=It[$t],ce=Ot[Xt.materialIndex];ce&&ce.visible&&y.push(A,Dt,ce,rt,Qt.z,Xt)}}else Ot.visible&&y.push(A,Dt,Ot,rt,Qt.z,null)}}const Tt=A.children;for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++)Va(Tt[Dt],q,rt,st)}function Bo(A,q,rt,st){const j=A.opaque,Tt=A.transmissive,Dt=A.transparent;g.setupLightsView(rt),mt===!0&&Gt.setGlobalState(C.clippingPlanes,rt),st&&Vt.viewport(G.copy(st)),j.length>0&&ka(j,q,rt),Tt.length>0&&ka(Tt,q,rt),Dt.length>0&&ka(Dt,q,rt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Io(A,q,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new yr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?No:ia,minFilter:vr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=g.state.transmissionRenderTarget[st.id],Dt=st.viewport||G;Tt.setSize(Dt.z*C.transmissionResolutionScale,Dt.w*C.transmissionResolutionScale);const Ot=C.getRenderTarget();C.setRenderTarget(Tt),C.getClearColor(vt),dt=C.getClearAlpha(),dt<1&&C.setClearColor(16777215,.5),C.clear(),Ie&&St.render(rt);const It=C.toneMapping;C.toneMapping=Fa;const $t=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),mt===!0&&Gt.setGlobalState(C.clippingPlanes,st),ka(A,rt,st),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Xt=0,ce=q.length;Xt<ce;Xt++){const Ae=q[Xt],Ge=Ae.object,_e=Ae.geometry,ve=Ae.material,Kt=Ae.group;if(ve.side===$i&&Ge.layers.test(st.layers)){const qe=ve.side;ve.side=In,ve.needsUpdate=!0,ra(Ge,rt,st,_e,ve,Kt),ve.side=qe,ve.needsUpdate=!0,Zt=!0}}Zt===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}C.setRenderTarget(Ot),C.setClearColor(vt,dt),$t!==void 0&&(st.viewport=$t),C.toneMapping=It}function ka(A,q,rt){const st=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const Dt=A[j],Ot=Dt.object,It=Dt.geometry,$t=Dt.group;let Zt=Dt.material;Zt.allowOverride===!0&&st!==null&&(Zt=st),Ot.layers.test(rt.layers)&&ra(Ot,q,rt,It,Zt,$t)}}function ra(A,q,rt,st,j,Tt){A.onBeforeRender(C,q,rt,st,j,Tt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(C,q,rt,st,A,Tt),j.transparent===!0&&j.side===$i&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,C.renderBufferDirect(rt,q,st,j,A,Tt),j.side=Ha,j.needsUpdate=!0,C.renderBufferDirect(rt,q,st,j,A,Tt),j.side=$i):C.renderBufferDirect(rt,q,st,j,A,Tt),A.onAfterRender(C,q,rt,st,j,Tt)}function sa(A,q,rt){q.isScene!==!0&&(q=Le);const st=jt.get(A),j=g.state.lights,Tt=g.state.shadowsArray,Dt=j.state.version,Ot=pt.getParameters(A,j.state,Tt,q,rt),It=pt.getProgramCacheKey(Ot);let $t=st.programs;st.environment=A.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(A.isMeshStandardMaterial?O:Ze).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Ft),$t=new Map,st.programs=$t);let Zt=$t.get(It);if(Zt!==void 0){if(st.currentProgram===Zt&&st.lightsStateVersion===Dt)return wi(A,Ot),Zt}else Ot.uniforms=pt.getUniforms(A),A.onBeforeCompile(Ot,C),Zt=pt.acquireProgram(Ot,It),$t.set(It,Zt),st.uniforms=Ot.uniforms;const Xt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),wi(A,Ot),st.needsLights=tn(A),st.lightsStateVersion=Dt,st.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=Zt,st.uniformsList=null,Zt}function Ci(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Mc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function wi(A,q){const rt=jt.get(A);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function Xa(A,q,rt,st,j){q.isScene!==!0&&(q=Le),ae.resetTextureUnits();const Tt=q.fog,Dt=st.isMeshStandardMaterial?q.environment:null,Ot=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ss,It=(st.isMeshStandardMaterial?O:Ze).get(st.envMap||Dt),$t=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Zt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Xt=!!rt.morphAttributes.position,ce=!!rt.morphAttributes.normal,Ae=!!rt.morphAttributes.color;let Ge=Fa;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ge=C.toneMapping);const _e=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ve=_e!==void 0?_e.length:0,Kt=jt.get(st),qe=g.state.lights;if(mt===!0&&(Mt===!0||A!==R)){const hn=A===R&&st.id===D;Gt.setState(st,A,hn)}let Me=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==qe.state.version||Kt.outputColorSpace!==Ot||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==It||st.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Gt.numPlanes||Kt.numIntersection!==Gt.numIntersection)||Kt.vertexAlphas!==$t||Kt.vertexTangents!==Zt||Kt.morphTargets!==Xt||Kt.morphNormals!==ce||Kt.morphColors!==Ae||Kt.toneMapping!==Ge||Kt.morphTargetsCount!==ve)&&(Me=!0):(Me=!0,Kt.__version=st.version);let bn=Kt.currentProgram;Me===!0&&(bn=sa(st,q,j));let la=!1,Ve=!1,Ui=!1;const Fe=bn.getUniforms(),Tn=Kt.uniforms;if(Vt.useProgram(bn.program)&&(la=!0,Ve=!0,Ui=!0),st.id!==D&&(D=st.id,Ve=!0),la||R!==A){Vt.buffers.depth.getReversed()?(Rt.copy(A.projectionMatrix),hy(Rt),dy(Rt),Fe.setValue(H,"projectionMatrix",Rt)):Fe.setValue(H,"projectionMatrix",A.projectionMatrix),Fe.setValue(H,"viewMatrix",A.matrixWorldInverse);const xn=Fe.map.cameraPosition;xn!==void 0&&xn.setValue(H,oe.setFromMatrixPosition(A.matrixWorld)),he.logarithmicDepthBuffer&&Fe.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Ve=!0,Ui=!0)}if(j.isSkinnedMesh){Fe.setOptional(H,j,"bindMatrix"),Fe.setOptional(H,j,"bindMatrixInverse");const hn=j.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Fe.setValue(H,"boneTexture",hn.boneTexture,ae))}j.isBatchedMesh&&(Fe.setOptional(H,j,"batchingTexture"),Fe.setValue(H,"batchingTexture",j._matricesTexture,ae),Fe.setOptional(H,j,"batchingIdTexture"),Fe.setValue(H,"batchingIdTexture",j._indirectTexture,ae),Fe.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Fe.setValue(H,"batchingColorTexture",j._colorsTexture,ae));const sn=rt.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&zt.update(j,rt,bn),(Ve||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Fe.setValue(H,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Tn.envMap.value=It,Tn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(Tn.envMapIntensity.value=q.environmentIntensity),Ve&&(Fe.setValue(H,"toneMappingExposure",C.toneMappingExposure),Kt.needsLights&&oa(Tn,Ui),Tt&&st.fog===!0&&ct.refreshFogUniforms(Tn,Tt),ct.refreshMaterialUniforms(Tn,st,Y,Z,g.state.transmissionRenderTarget[A.id]),Mc.upload(H,Ci(Kt),Tn,ae)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Mc.upload(H,Ci(Kt),Tn,ae),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(H,"center",j.center),Fe.setValue(H,"modelViewMatrix",j.modelViewMatrix),Fe.setValue(H,"normalMatrix",j.normalMatrix),Fe.setValue(H,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const hn=st.uniformsGroups;for(let xn=0,xi=hn.length;xn<xi;xn++){const Ni=hn[xn];k.update(Ni,bn),k.bind(Ni,bn)}}return bn}function oa(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function tn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,q,rt){const st=jt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),jt.get(A.texture).__webglTexture=q,jt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const rt=jt.get(A);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const Fo=H.createFramebuffer();this.setRenderTarget=function(A,q=0,rt=0){X=A,F=q,B=rt;let st=!0,j=null,Tt=!1,Dt=!1;if(A){const It=jt.get(A);if(It.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(It.__hasExternalTextures)ae.rebindTextures(A,jt.get(A.texture).__webglTexture,jt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(It.__boundDepthTexture!==Xt){if(Xt!==null&&jt.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const Zt=jt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[q])?j=Zt[q][rt]:j=Zt[q],Tt=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?j=jt.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?j=Zt[rt]:j=Zt,G.copy(A.viewport),lt.copy(A.scissor),ot=A.scissorTest}else G.copy(tt).multiplyScalar(Y).floor(),lt.copy(xt).multiplyScalar(Y).floor(),ot=yt;if(rt!==0&&(j=Fo),Vt.bindFramebuffer(H.FRAMEBUFFER,j)&&st&&Vt.drawBuffers(A,j),Vt.viewport(G),Vt.scissor(lt),Vt.setScissorTest(ot),Tt){const It=jt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,It.__webglTexture,rt)}else if(Dt){const It=jt.get(A.texture),$t=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.__webglTexture,rt,$t)}else if(A!==null&&rt!==0){const It=jt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,It.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(A,q,rt,st,j,Tt,Dt,Ot=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It){Vt.bindFramebuffer(H.FRAMEBUFFER,It);try{const $t=A.textures[Ot],Zt=$t.format,Xt=$t.type;if(!he.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-st&&rt>=0&&rt<=A.height-j&&(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot),H.readPixels(q,rt,st,j,Ct.convert(Zt),Ct.convert(Xt),Tt))}finally{const $t=X!==null?jt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,q,rt,st,j,Tt,Dt,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It)if(q>=0&&q<=A.width-st&&rt>=0&&rt<=A.height-j){Vt.bindFramebuffer(H.FRAMEBUFFER,It);const $t=A.textures[Ot],Zt=$t.format,Xt=$t.type;if(!he.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot),H.readPixels(q,rt,st,j,Ct.convert(Zt),Ct.convert(Xt),0);const Ae=X!==null?jt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,Ae);const Ge=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await fy(H,Ge,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(ce),H.deleteSync(Ge),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,rt=0){const st=Math.pow(2,-rt),j=Math.floor(A.image.width*st),Tt=Math.floor(A.image.height*st),Dt=q!==null?q.x:0,Ot=q!==null?q.y:0;ae.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Dt,Ot,j,Tt),Vt.unbindTexture()};const Ho=H.createFramebuffer(),Di=H.createFramebuffer();this.copyTextureToTexture=function(A,q,rt=null,st=null,j=0,Tt=null){Tt===null&&(j!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Dt,Ot,It,$t,Zt,Xt,ce,Ae,Ge;const _e=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(rt!==null)Dt=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,Zt=rt.min.y,Xt=rt.isBox3?rt.min.z:0;else{const sn=Math.pow(2,-j);Dt=Math.floor(_e.width*sn),Ot=Math.floor(_e.height*sn),A.isDataArrayTexture?It=_e.depth:A.isData3DTexture?It=Math.floor(_e.depth*sn):It=1,$t=0,Zt=0,Xt=0}st!==null?(ce=st.x,Ae=st.y,Ge=st.z):(ce=0,Ae=0,Ge=0);const ve=Ct.convert(q.format),Kt=Ct.convert(q.type);let qe;q.isData3DTexture?(ae.setTexture3D(q,0),qe=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ae.setTexture2DArray(q,0),qe=H.TEXTURE_2D_ARRAY):(ae.setTexture2D(q,0),qe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Me=H.getParameter(H.UNPACK_ROW_LENGTH),bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),la=H.getParameter(H.UNPACK_SKIP_PIXELS),Ve=H.getParameter(H.UNPACK_SKIP_ROWS),Ui=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,_e.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_e.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,Zt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xt);const Fe=A.isDataArrayTexture||A.isData3DTexture,Tn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const sn=jt.get(A),hn=jt.get(q),xn=jt.get(sn.__renderTarget),xi=jt.get(hn.__renderTarget);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,xn.__webglFramebuffer),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Ni=0;Ni<It;Ni++)Fe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(A).__webglTexture,j,Xt+Ni),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(q).__webglTexture,Tt,Ge+Ni)),H.blitFramebuffer($t,Zt,Dt,Ot,ce,Ae,Dt,Ot,H.DEPTH_BUFFER_BIT,H.NEAREST);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||jt.has(A)){const sn=jt.get(A),hn=jt.get(q);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,Ho),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Di);for(let xn=0;xn<It;xn++)Fe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,sn.__webglTexture,j,Xt+xn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,sn.__webglTexture,j),Tn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,Tt,Ge+xn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,Tt),j!==0?H.blitFramebuffer($t,Zt,Dt,Ot,ce,Ae,Dt,Ot,H.COLOR_BUFFER_BIT,H.NEAREST):Tn?H.copyTexSubImage3D(qe,Tt,ce,Ae,Ge+xn,$t,Zt,Dt,Ot):H.copyTexSubImage2D(qe,Tt,ce,Ae,$t,Zt,Dt,Ot);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(qe,Tt,ce,Ae,Ge,Dt,Ot,It,ve,Kt,_e.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(qe,Tt,ce,Ae,Ge,Dt,Ot,It,ve,_e.data):H.texSubImage3D(qe,Tt,ce,Ae,Ge,Dt,Ot,It,ve,Kt,_e):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,ce,Ae,Dt,Ot,ve,Kt,_e.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,ce,Ae,_e.width,_e.height,ve,_e.data):H.texSubImage2D(H.TEXTURE_2D,Tt,ce,Ae,Dt,Ot,ve,Kt,_e);H.pixelStorei(H.UNPACK_ROW_LENGTH,Me),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,la),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ve),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ui),Tt===0&&q.generateMipmaps&&H.generateMipmap(qe),Vt.unbindTexture()},this.copyTextureToTexture3D=function(A,q,rt=null,st=null,j=0){return ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,rt,st,j)},this.initRenderTarget=function(A){jt.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),Vt.unbindTexture()},this.resetState=function(){F=0,B=0,X=null,Vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const D1=()=>{const s=En.useRef(null),t=En.useRef(null);return En.useEffect(()=>{const i=s.current;if(!i)return;const r=new Iy,l=new oi(75,window.innerWidth/window.innerHeight,.1,1e3),u=new w1({antialias:!0,alpha:!0});u.setSize(window.innerWidth,window.innerHeight),u.setClearColor(1120295,.1),i.appendChild(u.domElement),l.position.set(0,2,15);const h=[],d=[new bs(.8,.8,.8),new vd(.5,16,16),new _d(.6),new xd(.7)],m=new gd({color:6514417,wireframe:!0,transparent:!0,opacity:.3});for(let g=0;g<8;g++){const N=d[Math.floor(Math.random()*d.length)],U=new Ri(N,m.clone());U.position.set((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*20),U.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),U.userData={rotationSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01},originalY:U.position.y},h.push(U),r.add(U)}const p=100,_=new vi,v=new Float32Array(p*3);for(let g=0;g<v.length;g++)v[g]=(Math.random()-.5)*50;_.setAttribute("position",new _i(v,3));const x=new U0({color:9133302,size:.1,transparent:!0,opacity:.6}),M=new Gy(_,x);r.add(M);const T=new qy,w=()=>{t.current=requestAnimationFrame(w);const g=T.getElapsedTime();h.forEach((N,U)=>{const{rotationSpeed:C,originalY:I}=N.userData;N.rotation.x+=C.x,N.rotation.y+=C.y,N.rotation.z+=C.z,N.position.y=I+Math.sin(g+U)*.5}),M.rotation.y=g*.1,l.position.x=Math.sin(g*.2)*.5,l.position.y=2+Math.cos(g*.15)*.3,l.lookAt(0,0,0),u.render(r,l)};w();const y=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y),t.current&&cancelAnimationFrame(t.current),i.contains(u.domElement)&&i.removeChild(u.domElement),h.forEach(g=>{g.geometry.dispose(),g.material.dispose()}),_.dispose(),x.dispose(),u.dispose()}},[]),J.jsx("div",{ref:s,className:"fixed inset-0",style:{zIndex:-1,background:"linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"}})},U1=()=>J.jsx("section",{id:"skills",className:"min-h-screen flex items-center justify-center py-20",children:J.jsx(Ms,{children:J.jsxs("div",{className:"max-w-3xl mx-auto px-4",children:[J.jsx("h2",{className:"text-3xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent justify-center text-center",children:"Soft Skills"}),J.jsxs("div",{className:"rounded-xl p-8 border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all",children:[J.jsx("p",{className:"text-zinc-100 mb-6",children:"Great backend development goes beyond writing clean code—it's about collaborating effectively, thinking critically, and adapting quickly in fast-paced environments. Here are the soft skills I bring to every project:"}),J.jsxs("ul",{className:"list-disc pl-6 text-zinc-100 mb-6 space-y-1",children:[J.jsx("li",{children:"Clear and concise technical communication"}),J.jsx("li",{children:"Collaborative team player across cross-functional teams"}),J.jsx("li",{children:"Analytical thinking and problem resolution under pressure"}),J.jsx("li",{children:"Adaptability to new tools, systems, and challenges"}),J.jsx("li",{children:"Strong attention to detail in code and system design"}),J.jsx("li",{children:"Ownership mindset with accountability for deliverables"}),J.jsx("li",{children:"Effective time and task management in agile workflows"})]}),J.jsx("p",{className:"text-zinc-100",children:"These qualities help me build reliable, maintainable, and scalable backend systems while contributing positively to team culture and project success."})]})]})})}),N1=()=>{const[s,t]=En.useState(!1),[i,r]=En.useState(!1);return J.jsxs(J.Fragment,{children:[!s&&J.jsx(Qx,{onComplete:()=>t(!0)}),J.jsxs("div",{className:`min-h-screen transition-opacity duration-700 ${s?"opacity-100":"opacity-0"} bg-transparent text-gray-100`,children:[J.jsx(D1,{}),J.jsx(Jx,{menuOpen:i,setMenuOpen:r}),J.jsx($x,{menuOpen:i,setMenuOpen:r}),J.jsx(fS,{}),J.jsx(hS,{}),J.jsx(U1,{}),J.jsx(dS,{}),J.jsx(xS,{}),J.jsx(SS,{})]})]})};Kx.createRoot(document.getElementById("root")).render(J.jsx(En.StrictMode,{children:J.jsx(N1,{})}));
