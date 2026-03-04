(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Vh={exports:{}},Qo={};var U_;function fM(){if(U_)return Qo;U_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Qo.Fragment=t,Qo.jsx=i,Qo.jsxs=i,Qo}var N_;function hM(){return N_||(N_=1,Vh.exports=fM()),Vh.exports}var pe=hM(),kh={exports:{}},oe={};var O_;function dM(){if(O_)return oe;O_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function x(P,Y,_t){this.props=P,this.context=Y,this.refs=y,this.updater=_t||b}x.prototype.isReactComponent={},x.prototype.setState=function(P,Y){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Y,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function A(){}A.prototype=x.prototype;function D(P,Y,_t){this.props=P,this.context=Y,this.refs=y,this.updater=_t||b}var L=D.prototype=new A;L.constructor=D,R(L,x.prototype),L.isPureReactComponent=!0;var B=Array.isArray;function I(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(P,Y,_t){var At=_t.ref;return{$$typeof:s,type:P,key:Y,ref:At!==void 0?At:null,props:_t}}function st(P,Y){return U(P.type,Y,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function J(P){var Y={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_t){return Y[_t]})}var Q=/\/+/g;function rt(P,Y){return typeof P=="object"&&P!==null&&P.key!=null?J(""+P.key):Y.toString(36)}function Z(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(I,I):(P.status="pending",P.then(function(Y){P.status==="pending"&&(P.status="fulfilled",P.value=Y)},function(Y){P.status==="pending"&&(P.status="rejected",P.reason=Y)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function N(P,Y,_t,At,Ot){var $=typeof P;($==="undefined"||$==="boolean")&&(P=null);var vt=!1;if(P===null)vt=!0;else switch($){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(P.$$typeof){case s:case t:vt=!0;break;case _:return vt=P._init,N(vt(P._payload),Y,_t,At,Ot)}}if(vt)return Ot=Ot(P),vt=At===""?"."+rt(P,0):At,B(Ot)?(_t="",vt!=null&&(_t=vt.replace(Q,"$&/")+"/"),N(Ot,Y,_t,"",function(jt){return jt})):Ot!=null&&(G(Ot)&&(Ot=st(Ot,_t+(Ot.key==null||P&&P.key===Ot.key?"":(""+Ot.key).replace(Q,"$&/")+"/")+vt)),Y.push(Ot)),1;vt=0;var Mt=At===""?".":At+":";if(B(P))for(var Gt=0;Gt<P.length;Gt++)At=P[Gt],$=Mt+rt(At,Gt),vt+=N(At,Y,_t,$,Ot);else if(Gt=M(P),typeof Gt=="function")for(P=Gt.call(P),Gt=0;!(At=P.next()).done;)At=At.value,$=Mt+rt(At,Gt++),vt+=N(At,Y,_t,$,Ot);else if($==="object"){if(typeof P.then=="function")return N(Z(P),Y,_t,At,Ot);throw Y=String(P),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return vt}function z(P,Y,_t){if(P==null)return P;var At=[],Ot=0;return N(P,At,"","",function($){return Y.call(_t,$,Ot++)}),At}function ot(P){if(P._status===-1){var Y=P._result;Y=Y(),Y.then(function(_t){(P._status===0||P._status===-1)&&(P._status=1,P._result=_t)},function(_t){(P._status===0||P._status===-1)&&(P._status=2,P._result=_t)}),P._status===-1&&(P._status=0,P._result=Y)}if(P._status===1)return P._result.default;throw P._result}var ht=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},St={map:z,forEach:function(P,Y,_t){z(P,function(){Y.apply(this,arguments)},_t)},count:function(P){var Y=0;return z(P,function(){Y++}),Y},toArray:function(P){return z(P,function(Y){return Y})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return oe.Activity=v,oe.Children=St,oe.Component=x,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=D,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,oe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},oe.cache=function(P){return function(){return P.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(P,Y,_t){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var At=R({},P.props),Ot=P.key;if(Y!=null)for($ in Y.key!==void 0&&(Ot=""+Y.key),Y)!T.call(Y,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&Y.ref===void 0||(At[$]=Y[$]);var $=arguments.length-2;if($===1)At.children=_t;else if(1<$){for(var vt=Array($),Mt=0;Mt<$;Mt++)vt[Mt]=arguments[Mt+2];At.children=vt}return U(P.type,Ot,At)},oe.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},oe.createElement=function(P,Y,_t){var At,Ot={},$=null;if(Y!=null)for(At in Y.key!==void 0&&($=""+Y.key),Y)T.call(Y,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ot[At]=Y[At]);var vt=arguments.length-2;if(vt===1)Ot.children=_t;else if(1<vt){for(var Mt=Array(vt),Gt=0;Gt<vt;Gt++)Mt[Gt]=arguments[Gt+2];Ot.children=Mt}if(P&&P.defaultProps)for(At in vt=P.defaultProps,vt)Ot[At]===void 0&&(Ot[At]=vt[At]);return U(P,$,Ot)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(P){return{$$typeof:p,render:P}},oe.isValidElement=G,oe.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:ot}},oe.memo=function(P,Y){return{$$typeof:d,type:P,compare:Y===void 0?null:Y}},oe.startTransition=function(P){var Y=F.T,_t={};F.T=_t;try{var At=P(),Ot=F.S;Ot!==null&&Ot(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(I,ht)}catch($){ht($)}finally{Y!==null&&_t.types!==null&&(Y.types=_t.types),F.T=Y}},oe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},oe.use=function(P){return F.H.use(P)},oe.useActionState=function(P,Y,_t){return F.H.useActionState(P,Y,_t)},oe.useCallback=function(P,Y){return F.H.useCallback(P,Y)},oe.useContext=function(P){return F.H.useContext(P)},oe.useDebugValue=function(){},oe.useDeferredValue=function(P,Y){return F.H.useDeferredValue(P,Y)},oe.useEffect=function(P,Y){return F.H.useEffect(P,Y)},oe.useEffectEvent=function(P){return F.H.useEffectEvent(P)},oe.useId=function(){return F.H.useId()},oe.useImperativeHandle=function(P,Y,_t){return F.H.useImperativeHandle(P,Y,_t)},oe.useInsertionEffect=function(P,Y){return F.H.useInsertionEffect(P,Y)},oe.useLayoutEffect=function(P,Y){return F.H.useLayoutEffect(P,Y)},oe.useMemo=function(P,Y){return F.H.useMemo(P,Y)},oe.useOptimistic=function(P,Y){return F.H.useOptimistic(P,Y)},oe.useReducer=function(P,Y,_t){return F.H.useReducer(P,Y,_t)},oe.useRef=function(P){return F.H.useRef(P)},oe.useState=function(P){return F.H.useState(P)},oe.useSyncExternalStore=function(P,Y,_t){return F.H.useSyncExternalStore(P,Y,_t)},oe.useTransition=function(){return F.H.useTransition()},oe.version="19.2.4",oe}var P_;function Dp(){return P_||(P_=1,kh.exports=dM()),kh.exports}var mt=Dp(),Wh={exports:{}},Jo={},Xh={exports:{}},Yh={};var I_;function pM(){return I_||(I_=1,(function(s){function t(N,z){var ot=N.length;N.push(z);t:for(;0<ot;){var ht=ot-1>>>1,St=N[ht];if(0<l(St,z))N[ht]=z,N[ot]=St,ot=ht;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],ot=N.pop();if(ot!==z){N[0]=ot;t:for(var ht=0,St=N.length,P=St>>>1;ht<P;){var Y=2*(ht+1)-1,_t=N[Y],At=Y+1,Ot=N[At];if(0>l(_t,ot))At<St&&0>l(Ot,_t)?(N[ht]=Ot,N[At]=ot,ht=At):(N[ht]=_t,N[Y]=ot,ht=Y);else if(At<St&&0>l(Ot,ot))N[ht]=Ot,N[At]=ot,ht=At;else break t}}return z}function l(N,z){var ot=N.sortIndex-z.sortIndex;return ot!==0?ot:N.id-z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],d=[],_=1,v=null,g=3,M=!1,b=!1,R=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(N){for(var z=i(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=N)r(d),z.sortIndex=z.expirationTime,t(m,z);else break;z=i(d)}}function B(N){if(R=!1,L(N),!b)if(i(m)!==null)b=!0,I||(I=!0,J());else{var z=i(d);z!==null&&Z(B,z.startTime-N)}}var I=!1,F=-1,T=5,U=-1;function st(){return y?!0:!(s.unstable_now()-U<T)}function G(){if(y=!1,I){var N=s.unstable_now();U=N;var z=!0;try{t:{b=!1,R&&(R=!1,A(F),F=-1),M=!0;var ot=g;try{e:{for(L(N),v=i(m);v!==null&&!(v.expirationTime>N&&st());){var ht=v.callback;if(typeof ht=="function"){v.callback=null,g=v.priorityLevel;var St=ht(v.expirationTime<=N);if(N=s.unstable_now(),typeof St=="function"){v.callback=St,L(N),z=!0;break e}v===i(m)&&r(m),L(N)}else r(m);v=i(m)}if(v!==null)z=!0;else{var P=i(d);P!==null&&Z(B,P.startTime-N),z=!1}}break t}finally{v=null,g=ot,M=!1}z=void 0}}finally{z?J():I=!1}}}var J;if(typeof D=="function")J=function(){D(G)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,rt=Q.port2;Q.port1.onmessage=G,J=function(){rt.postMessage(null)}}else J=function(){x(G,0)};function Z(N,z){F=x(function(){N(s.unstable_now())},z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(N){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var ot=g;g=z;try{return N()}finally{g=ot}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ot=g;g=N;try{return z()}finally{g=ot}},s.unstable_scheduleCallback=function(N,z,ot){var ht=s.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?ht+ot:ht):ot=ht,N){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=ot+St,N={id:_++,callback:z,priorityLevel:N,startTime:ot,expirationTime:St,sortIndex:-1},ot>ht?(N.sortIndex=ot,t(d,N),i(m)===null&&N===i(d)&&(R?(A(F),F=-1):R=!0,Z(B,ot-ht))):(N.sortIndex=St,t(m,N),b||M||(b=!0,I||(I=!0,J()))),N},s.unstable_shouldYield=st,s.unstable_wrapCallback=function(N){var z=g;return function(){var ot=g;g=z;try{return N.apply(this,arguments)}finally{g=ot}}}})(Yh)),Yh}var F_;function mM(){return F_||(F_=1,Xh.exports=pM()),Xh.exports}var qh={exports:{}},wn={};var B_;function gM(){if(B_)return wn;B_=1;var s=Dp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:d,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(m,d,null,_)},wn.flushSync=function(m){var d=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=d,r.p=_,r.d.f()}},wn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,v=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},wn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},wn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=p(_,d.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},wn.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,d){return m(d)},wn.useFormState=function(m,d,_){return f.H.useFormState(m,d,_)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.2.4",wn}var z_;function _M(){if(z_)return qh.exports;z_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),qh.exports=gM(),qh.exports}var H_;function vM(){if(H_)return Jo;H_=1;var s=mM(),t=Dp(),i=_M();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function d(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return m(c),e;if(h===o)return m(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=h;else{for(var S=!1,C=c.child;C;){if(C===a){S=!0,a=c,o=h;break}if(C===o){S=!0,o=c,a=h;break}C=C.sibling}if(!S){for(C=h.child;C;){if(C===a){S=!0,a=h,o=c;break}if(C===o){S=!0,o=h,a=c;break}C=C.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case I:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:rt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return rt(e(n))}catch{}}return null}var Z=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},ht=[],St=-1;function P(e){return{current:e}}function Y(e){0>St||(e.current=ht[St],ht[St]=null,St--)}function _t(e,n){St++,ht[St]=e.current,e.current=n}var At=P(null),Ot=P(null),$=P(null),vt=P(null);function Mt(e,n){switch(_t($,n),_t(Ot,e),_t(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?e_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=e_(n),e=n_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(At),_t(At,e)}function Gt(){Y(At),Y(Ot),Y($)}function jt(e){e.memoizedState!==null&&_t(vt,e);var n=At.current,a=n_(n,e.type);n!==a&&(_t(Ot,e),_t(At,a))}function Jt(e){Ot.current===e&&(Y(At),Y(Ot)),vt.current===e&&(Y(vt),qo._currentValue=ot)}var Ye,ge;function _e(e){if(Ye===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ye=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+e+ge}var Te=!1;function le(e,n){if(!e||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ut){var at=ut}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ut){at=ut}e.call(yt.prototype)}}else{try{throw Error()}catch(ut){at=ut}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ut){if(ut&&at&&typeof ut.stack=="string")return[ut.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],C=h[1];if(S&&C){var H=S.split(`
`),nt=C.split(`
`);for(c=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(o===H.length||c===nt.length)for(o=H.length-1,c=nt.length-1;1<=o&&0<=c&&H[o]!==nt[c];)c--;for(;1<=o&&0<=c;o--,c--)if(H[o]!==nt[c]){if(o!==1||c!==1)do if(o--,c--,0>c||H[o]!==nt[c]){var dt=`
`+H[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=c);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function tn(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return _e("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=tn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ze=Object.prototype.hasOwnProperty,Ae=s.unstable_scheduleCallback,Oe=s.unstable_cancelCallback,Yt=s.unstable_shouldYield,O=s.unstable_requestPaint,E=s.unstable_now,q=s.unstable_getCurrentPriorityLevel,pt=s.unstable_ImmediatePriority,xt=s.unstable_UserBlockingPriority,ft=s.unstable_NormalPriority,Wt=s.unstable_LowPriority,wt=s.unstable_IdlePriority,Kt=s.log,ee=s.unstable_setDisableYieldValue,Tt=null,bt=null;function Pt(e){if(typeof Kt=="function"&&ee(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Tt,e)}catch{}}var Nt=Math.clz32?Math.clz32:X,It=Math.log,ce=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(It(e)/ce|0)|0}var Ct=256,Rt=262144,Ft=4194304;function Et(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~h,o!==0?c=Et(o):(S&=C,S!==0?c=Et(S):a||(a=C&~e,a!==0&&(c=Et(a))))):(C=o&~h,C!==0?c=Et(C):S!==0?c=Et(S):a||(a=o&~e,a!==0&&(c=Et(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function In(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ei(e,n,a,o,c,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-Nt(a),yt=1<<dt;C[dt]=0,H[dt]=-1;var at=nt[dt];if(at!==null)for(nt[dt]=null,dt=0;dt<at.length;dt++){var ut=at[dt];ut!==null&&(ut.lane&=-536870913)}a&=~yt}o!==0&&oo(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function oo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Nt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function jr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Nt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Al(e,n){var a=n&-n;return a=(a&42)!==0?1:Zr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Kr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fi(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:T_(e.type))}function Qr(e,n){var a=z.p;try{return z.p=e,n()}finally{z.p=a}}var Ti=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ti,gn="__reactProps$"+Ti,ta="__reactContainer$"+Ti,Na="__reactEvents$"+Ti,Rl="__reactListeners$"+Ti,Cl="__reactHandles$"+Ti,wl="__reactResources$"+Ti,_r="__reactMarker$"+Ti;function lo(e){delete e[ln],delete e[gn],delete e[Na],delete e[Rl],delete e[Cl]}function Oa(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ta]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=u_(e);e!==null;){if(a=e[ln])return a;e=u_(e)}return n}e=a,a=e.parentNode}return null}function Pa(e){if(e=e[ln]||e[ta]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function vr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function w(e){var n=e[wl];return n||(n=e[wl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(e){e[_r]=!0}var lt=new Set,it={};function tt(e,n){Dt(e,n),Dt(e+"Capture",n)}function Dt(e,n){for(it[e]=n,e=0;e<n.length;e++)lt.add(n[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lt={},Xt={};function Zt(e){return Ze.call(Xt,e)?!0:Ze.call(Lt,e)?!1:Bt.test(e)?Xt[e]=!0:(Lt[e]=!0,!1)}function ie(e,n,a){if(Zt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function se(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ht(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function De(e){if(!e._valueTracker){var n=Ke(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function _n(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fn=/[\n"\\]/g;function re(e){return e.replace(Fn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bn(e,n,a,o,c,h,S,C){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Ai(e,S,fe(n)):a!=null?Ai(e,S,fe(a)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+fe(C):e.removeAttribute("name")}function $n(e,n,a,o,c,h,S,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){De(e);return}a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),De(e)}function Ai(e,n,a){n==="number"&&kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ti(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Pe(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function un(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Z(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),De(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ri(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ea(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Ri(e,c,o)}else for(var h in n)n.hasOwnProperty(h)&&Ri(e,h,n[h])}function Jr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ox=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(e){return lx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var Bc=null;function zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $r=null,ts=null;function tm(e){var n=Pa(e);if(n&&(e=n.stateNode)){var a=e[gn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+re(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[gn]||null;if(!c)throw Error(r(90));Bn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&_n(o)}break t;case"textarea":Pe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ti(e,!!a.multiple,n,!1)}}}var Hc=!1;function em(e,n,a){if(Hc)return e(n,a);Hc=!0;try{var o=e(n);return o}finally{if(Hc=!1,($r!==null||ts!==null)&&(_u(),$r&&(n=$r,e=ts,ts=$r=null,tm(n),e)))for(n=0;n<e.length;n++)tm(e[n])}}function uo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[gn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=!1;if(ia)try{var co={};Object.defineProperty(co,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Gc=!1}var Ia=null,Vc=null,Ll=null;function nm(){if(Ll)return Ll;var e,n=Vc,a=n.length,o,c="value"in Ia?Ia.value:Ia.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[h-o];o++);return Ll=c.slice(e,1<o?1-o:void 0)}function Ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Nl(){return!0}function im(){return!1}function Wn(e){function n(a,o,c,h,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Nl:im,this.isPropagationStopped=im,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),n}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Wn(yr),fo=v({},yr,{view:0,detail:0}),ux=Wn(fo),kc,Wc,ho,Pl=v({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(kc=e.screenX-ho.screenX,Wc=e.screenY-ho.screenY):Wc=kc=0,ho=e),kc)},movementY:function(e){return"movementY"in e?e.movementY:Wc}}),am=Wn(Pl),cx=v({},Pl,{dataTransfer:0}),fx=Wn(cx),hx=v({},fo,{relatedTarget:0}),Xc=Wn(hx),dx=v({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),px=Wn(dx),mx=v({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gx=Wn(mx),_x=v({},yr,{data:0}),rm=Wn(_x),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xx[e])?!!n[e]:!1}function Yc(){return Sx}var Mx=v({},fo,{key:function(e){if(e.key){var n=vx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(e){return e.type==="keypress"?Ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bx=Wn(Mx),Ex=v({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Wn(Ex),Tx=v({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),Ax=Wn(Tx),Rx=v({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=Wn(Rx),wx=v({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=Wn(wx),Lx=v({},yr,{newState:0,oldState:0}),Ux=Wn(Lx),Nx=[9,13,27,32],qc=ia&&"CompositionEvent"in window,po=null;ia&&"documentMode"in document&&(po=document.documentMode);var Ox=ia&&"TextEvent"in window&&!po,om=ia&&(!qc||po&&8<po&&11>=po),lm=" ",um=!1;function cm(e,n){switch(e){case"keyup":return Nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var es=!1;function Px(e,n){switch(e){case"compositionend":return fm(n);case"keypress":return n.which!==32?null:(um=!0,lm);case"textInput":return e=n.data,e===lm&&um?null:e;default:return null}}function Ix(e,n){if(es)return e==="compositionend"||!qc&&cm(e,n)?(e=nm(),Ll=Vc=Ia=null,es=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return om&&n.locale!=="ko"?null:n.data;default:return null}}var Fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Fx[e.type]:n==="textarea"}function dm(e,n,a,o){$r?ts?ts.push(o):ts=[o]:$r=o,n=Eu(n,"onChange"),0<n.length&&(a=new Ol("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var mo=null,go=null;function Bx(e){Z0(e,0)}function Il(e){var n=vr(e);if(_n(n))return e}function pm(e,n){if(e==="change")return n}var mm=!1;if(ia){var jc;if(ia){var Zc="oninput"in document;if(!Zc){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),Zc=typeof gm.oninput=="function"}jc=Zc}else jc=!1;mm=jc&&(!document.documentMode||9<document.documentMode)}function _m(){mo&&(mo.detachEvent("onpropertychange",vm),go=mo=null)}function vm(e){if(e.propertyName==="value"&&Il(go)){var n=[];dm(n,go,e,zc(e)),em(Bx,n)}}function zx(e,n,a){e==="focusin"?(_m(),mo=n,go=a,mo.attachEvent("onpropertychange",vm)):e==="focusout"&&_m()}function Hx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(go)}function Gx(e,n){if(e==="click")return Il(n)}function Vx(e,n){if(e==="input"||e==="change")return Il(n)}function kx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:kx;function _o(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ze.call(n,c)||!ei(e[c],n[c]))return!1}return!0}function ym(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xm(e,n){var a=ym(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ym(a)}}function Sm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=kt(e.document)}return n}function Kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Wx=ia&&"documentMode"in document&&11>=document.documentMode,ns=null,Qc=null,vo=null,Jc=!1;function bm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||ns==null||ns!==kt(o)||(o=ns,"selectionStart"in o&&Kc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vo&&_o(vo,o)||(vo=o,o=Eu(Qc,"onSelect"),0<o.length&&(n=new Ol("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ns)))}function xr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var is={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},$c={},Em={};ia&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Sr(e){if($c[e])return $c[e];if(!is[e])return e;var n=is[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Em)return $c[e]=n[a];return e}var Tm=Sr("animationend"),Am=Sr("animationiteration"),Rm=Sr("animationstart"),Xx=Sr("transitionrun"),Yx=Sr("transitionstart"),qx=Sr("transitioncancel"),Cm=Sr("transitionend"),wm=new Map,tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tf.push("scrollEnd");function Ci(e,n){wm.set(e,n),tt(n,[e])}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],as=0,ef=0;function Bl(){for(var e=as,n=ef=as=0;n<e;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var c=hi[n];hi[n++]=null;var h=hi[n];if(hi[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}h!==0&&Dm(a,c,h)}}function zl(e,n,a,o){hi[as++]=e,hi[as++]=n,hi[as++]=a,hi[as++]=o,ef|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function nf(e,n,a,o){return zl(e,n,a,o),Hl(e)}function Mr(e,n){return zl(e,null,null,n),Hl(e)}function Dm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-Nt(a),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function Hl(e){if(50<Ho)throw Ho=0,hh=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var rs={};function jx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,o){return new jx(e,n,a,o)}function af(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Gl(e,n,a,o,c,h){var S=0;if(o=e,typeof e=="function")af(e)&&(S=1);else if(typeof e=="string")S=$S(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=ni(31,a,n,c),e.elementType=U,e.lanes=h,e;case R:return br(a.children,c,h,n);case y:S=8,c|=24;break;case x:return e=ni(12,a,n,c|2),e.elementType=x,e.lanes=h,e;case B:return e=ni(13,a,n,c),e.elementType=B,e.lanes=h,e;case I:return e=ni(19,a,n,c),e.elementType=I,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case A:S=9;break t;case L:S=11;break t;case F:S=14;break t;case T:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ni(S,a,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function br(e,n,a,o){return e=ni(7,e,o,n),e.lanes=a,e}function rf(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function Um(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function sf(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Nm=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=Nm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Nm.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var ss=[],os=0,Vl=null,yo=0,pi=[],mi=0,Fa=null,Bi=1,zi="";function ra(e,n){ss[os++]=yo,ss[os++]=Vl,Vl=e,yo=n}function Om(e,n,a){pi[mi++]=Bi,pi[mi++]=zi,pi[mi++]=Fa,Fa=e;var o=Bi;e=zi;var c=32-Nt(o)-1;o&=~(1<<c),a+=1;var h=32-Nt(n)+c;if(30<h){var S=c-c%5;h=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Bi=1<<32-Nt(n)+c|a<<c|o,zi=h+e}else Bi=1<<h|a<<c|o,zi=e}function of(e){e.return!==null&&(ra(e,1),Om(e,1,0))}function lf(e){for(;e===Vl;)Vl=ss[--os],ss[os]=null,yo=ss[--os],ss[os]=null;for(;e===Fa;)Fa=pi[--mi],pi[mi]=null,zi=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null}function Pm(e,n){pi[mi++]=Bi,pi[mi++]=zi,pi[mi++]=Fa,Bi=n.id,zi=n.overflow,Fa=e}var En=null,qe=null,Ee=!1,Ba=null,gi=!1,uf=Error(r(519));function za(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(di(n,e)),uf}function Im(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[gn]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Vo.length;a++)xe(Vo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),$n(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),un(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||$0(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=na),n=!0):n=!1,n||za(e,!0)}function Fm(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:En=En.return}}function ls(e){if(e!==En)return!1;if(!Ee)return Fm(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rh(e.type,e.memoizedProps)),a=!a),a&&qe&&za(e),Fm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=l_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=l_(e)}else n===27?(n=qe,$a(e.type)?(e=Uh,Uh=null,qe=e):qe=n):qe=En?vi(e.stateNode.nextSibling):null;return!0}function Er(){qe=En=null,Ee=!1}function cf(){var e=Ba;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Ba=null),e}function xo(e){Ba===null?Ba=[e]:Ba.push(e)}var ff=P(null),Tr=null,sa=null;function Ha(e,n,a){_t(ff,n._currentValue),n._currentValue=a}function oa(e){e._currentValue=ff.current,Y(ff)}function hf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function df(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var S=c.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=c;for(var H=0;H<n.length;H++)if(C.context===n[H]){h.lanes|=a,C=h.alternate,C!==null&&(C.lanes|=a),hf(h.return,a,e),o||(S=null);break t}h=C.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),hf(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function us(e,n,a,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var C=c.type;ei(c.pendingProps.value,S.value)||(e!==null?e.push(C):e=[C])}}else if(c===vt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(qo):e=[qo])}c=c.return}e!==null&&df(n,e,a,o),n.flags|=262144}function kl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ar(e){Tr=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Bm(Tr,e)}function Wl(e,n){return Tr===null&&Ar(e),Bm(e,n)}function Bm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(r(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var Zx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Kx=s.unstable_scheduleCallback,Qx=s.unstable_NormalPriority,fn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new Zx,data:new Map,refCount:0}}function So(e){e.refCount--,e.refCount===0&&Kx(Qx,function(){e.controller.abort()})}var Mo=null,mf=0,cs=0,fs=null;function Jx(e,n){if(Mo===null){var a=Mo=[];mf=0,cs=vh(),fs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return mf++,n.then(zm,zm),n}function zm(){if(--mf===0&&Mo!==null){fs!==null&&(fs.status="fulfilled");var e=Mo;Mo=null,cs=0,fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function $x(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Hm=N.S;N.S=function(e,n){b0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jx(e,n),Hm!==null&&Hm(e,n)};var Rr=P(null);function gf(){var e=Rr.current;return e!==null?e:Xe.pooledCache}function Xl(e,n){n===null?_t(Rr,Rr.current):_t(Rr,n.pool)}function Gm(){var e=gf();return e===null?null:{parent:fn._currentValue,pool:e}}var hs=Error(r(460)),_f=Error(r(474)),Yl=Error(r(542)),ql={then:function(){}};function Vm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function km(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(na,na),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xm(e),e;default:if(typeof n.status=="string")n.then(na,na);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xm(e),e}throw wr=n,hs}}function Cr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(wr=a,hs):a}}var wr=null;function Wm(){if(wr===null)throw Error(r(459));var e=wr;return wr=null,e}function Xm(e){if(e===hs||e===Yl)throw Error(r(483))}var ds=null,bo=0;function jl(e){var n=bo;return bo+=1,ds===null&&(ds=[]),km(ds,e,n)}function Eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Zl(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ym(e){function n(K,k){if(e){var et=K.deletions;et===null?(K.deletions=[k],K.flags|=16):et.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function c(K,k){return K=aa(K,k),K.index=0,K.sibling=null,K}function h(K,k,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<k?(K.flags|=67108866,k):et):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function C(K,k,et,gt){return k===null||k.tag!==6?(k=rf(et,K.mode,gt),k.return=K,k):(k=c(k,et),k.return=K,k)}function H(K,k,et,gt){var Qt=et.type;return Qt===R?dt(K,k,et.props.children,gt,et.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&Cr(Qt)===k.type)?(k=c(k,et.props),Eo(k,et),k.return=K,k):(k=Gl(et.type,et.key,et.props,null,K.mode,gt),Eo(k,et),k.return=K,k)}function nt(K,k,et,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=sf(et,K.mode,gt),k.return=K,k):(k=c(k,et.children||[]),k.return=K,k)}function dt(K,k,et,gt,Qt){return k===null||k.tag!==7?(k=br(et,K.mode,gt,Qt),k.return=K,k):(k=c(k,et),k.return=K,k)}function yt(K,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=rf(""+k,K.mode,et),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return et=Gl(k.type,k.key,k.props,null,K.mode,et),Eo(et,k),et.return=K,et;case b:return k=sf(k,K.mode,et),k.return=K,k;case T:return k=Cr(k),yt(K,k,et)}if(Z(k)||J(k))return k=br(k,K.mode,et,null),k.return=K,k;if(typeof k.then=="function")return yt(K,jl(k),et);if(k.$$typeof===D)return yt(K,Wl(K,k),et);Zl(K,k)}return null}function at(K,k,et,gt){var Qt=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Qt!==null?null:C(K,k,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===Qt?H(K,k,et,gt):null;case b:return et.key===Qt?nt(K,k,et,gt):null;case T:return et=Cr(et),at(K,k,et,gt)}if(Z(et)||J(et))return Qt!==null?null:dt(K,k,et,gt,null);if(typeof et.then=="function")return at(K,k,jl(et),gt);if(et.$$typeof===D)return at(K,k,Wl(K,et),gt);Zl(K,et)}return null}function ut(K,k,et,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get(et)||null,C(k,K,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return K=K.get(gt.key===null?et:gt.key)||null,H(k,K,gt,Qt);case b:return K=K.get(gt.key===null?et:gt.key)||null,nt(k,K,gt,Qt);case T:return gt=Cr(gt),ut(K,k,et,gt,Qt)}if(Z(gt)||J(gt))return K=K.get(et)||null,dt(k,K,gt,Qt,null);if(typeof gt.then=="function")return ut(K,k,et,jl(gt),Qt);if(gt.$$typeof===D)return ut(K,k,et,Wl(k,gt),Qt);Zl(k,gt)}return null}function Vt(K,k,et,gt){for(var Qt=null,Le=null,qt=k,he=k=0,be=null;qt!==null&&he<et.length;he++){qt.index>he?(be=qt,qt=null):be=qt.sibling;var Ue=at(K,qt,et[he],gt);if(Ue===null){qt===null&&(qt=be);break}e&&qt&&Ue.alternate===null&&n(K,qt),k=h(Ue,k,he),Le===null?Qt=Ue:Le.sibling=Ue,Le=Ue,qt=be}if(he===et.length)return a(K,qt),Ee&&ra(K,he),Qt;if(qt===null){for(;he<et.length;he++)qt=yt(K,et[he],gt),qt!==null&&(k=h(qt,k,he),Le===null?Qt=qt:Le.sibling=qt,Le=qt);return Ee&&ra(K,he),Qt}for(qt=o(qt);he<et.length;he++)be=ut(qt,K,he,et[he],gt),be!==null&&(e&&be.alternate!==null&&qt.delete(be.key===null?he:be.key),k=h(be,k,he),Le===null?Qt=be:Le.sibling=be,Le=be);return e&&qt.forEach(function(ar){return n(K,ar)}),Ee&&ra(K,he),Qt}function te(K,k,et,gt){if(et==null)throw Error(r(151));for(var Qt=null,Le=null,qt=k,he=k=0,be=null,Ue=et.next();qt!==null&&!Ue.done;he++,Ue=et.next()){qt.index>he?(be=qt,qt=null):be=qt.sibling;var ar=at(K,qt,Ue.value,gt);if(ar===null){qt===null&&(qt=be);break}e&&qt&&ar.alternate===null&&n(K,qt),k=h(ar,k,he),Le===null?Qt=ar:Le.sibling=ar,Le=ar,qt=be}if(Ue.done)return a(K,qt),Ee&&ra(K,he),Qt;if(qt===null){for(;!Ue.done;he++,Ue=et.next())Ue=yt(K,Ue.value,gt),Ue!==null&&(k=h(Ue,k,he),Le===null?Qt=Ue:Le.sibling=Ue,Le=Ue);return Ee&&ra(K,he),Qt}for(qt=o(qt);!Ue.done;he++,Ue=et.next())Ue=ut(qt,K,he,Ue.value,gt),Ue!==null&&(e&&Ue.alternate!==null&&qt.delete(Ue.key===null?he:Ue.key),k=h(Ue,k,he),Le===null?Qt=Ue:Le.sibling=Ue,Le=Ue);return e&&qt.forEach(function(cM){return n(K,cM)}),Ee&&ra(K,he),Qt}function ke(K,k,et,gt){if(typeof et=="object"&&et!==null&&et.type===R&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var Qt=et.key;k!==null;){if(k.key===Qt){if(Qt=et.type,Qt===R){if(k.tag===7){a(K,k.sibling),gt=c(k,et.props.children),gt.return=K,K=gt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&Cr(Qt)===k.type){a(K,k.sibling),gt=c(k,et.props),Eo(gt,et),gt.return=K,K=gt;break t}a(K,k);break}else n(K,k);k=k.sibling}et.type===R?(gt=br(et.props.children,K.mode,gt,et.key),gt.return=K,K=gt):(gt=Gl(et.type,et.key,et.props,null,K.mode,gt),Eo(gt,et),gt.return=K,K=gt)}return S(K);case b:t:{for(Qt=et.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(K,k.sibling),gt=c(k,et.children||[]),gt.return=K,K=gt;break t}else{a(K,k);break}else n(K,k);k=k.sibling}gt=sf(et,K.mode,gt),gt.return=K,K=gt}return S(K);case T:return et=Cr(et),ke(K,k,et,gt)}if(Z(et))return Vt(K,k,et,gt);if(J(et)){if(Qt=J(et),typeof Qt!="function")throw Error(r(150));return et=Qt.call(et),te(K,k,et,gt)}if(typeof et.then=="function")return ke(K,k,jl(et),gt);if(et.$$typeof===D)return ke(K,k,Wl(K,et),gt);Zl(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(K,k.sibling),gt=c(k,et),gt.return=K,K=gt):(a(K,k),gt=rf(et,K.mode,gt),gt.return=K,K=gt),S(K)):a(K,k)}return function(K,k,et,gt){try{bo=0;var Qt=ke(K,k,et,gt);return ds=null,Qt}catch(qt){if(qt===hs||qt===Yl)throw qt;var Le=ni(29,qt,null,K.mode);return Le.lanes=gt,Le.return=K,Le}}}var Dr=Ym(!0),qm=Ym(!1),Ga=!1;function vf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ka(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Hl(e),Dm(e,null,a),n}return zl(e,o,n,a),Hl(e)}function To(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,jr(e,a)}}function xf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Sf=!1;function Ao(){if(Sf){var e=fs;if(e!==null)throw e}}function Ro(e,n,a,o){Sf=!1;var c=e.updateQueue;Ga=!1;var h=c.firstBaseUpdate,S=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var H=C,nt=H.next;H.next=null,S===null?h=nt:S.next=nt,S=H;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,C=dt.lastBaseUpdate,C!==S&&(C===null?dt.firstBaseUpdate=nt:C.next=nt,dt.lastBaseUpdate=H))}if(h!==null){var yt=c.baseState;S=0,dt=nt=H=null,C=h;do{var at=C.lane&-536870913,ut=at!==C.lane;if(ut?(Me&at)===at:(o&at)===at){at!==0&&at===cs&&(Sf=!0),dt!==null&&(dt=dt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Vt=e,te=C;at=n;var ke=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){yt=Vt.call(ke,yt,at);break t}yt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,at=typeof Vt=="function"?Vt.call(ke,yt,at):Vt,at==null)break t;yt=v({},yt,at);break t;case 2:Ga=!0}}at=C.callback,at!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[at]:ut.push(at))}else ut={lane:at,tag:C.tag,payload:C.payload,callback:C.callback,next:null},dt===null?(nt=dt=ut,H=yt):dt=dt.next=ut,S|=at;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;ut=C,C=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);dt===null&&(H=yt),c.baseState=H,c.firstBaseUpdate=nt,c.lastBaseUpdate=dt,h===null&&(c.shared.lanes=0),ja|=S,e.lanes=S,e.memoizedState=yt}}function jm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Zm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jm(a[e],n)}var ps=P(null),Kl=P(0);function Km(e,n){e=ga,_t(Kl,e),_t(ps,n),ga=e|n.baseLanes}function Mf(){_t(Kl,ga),_t(ps,ps.current)}function bf(){ga=Kl.current,Y(ps),Y(Kl)}var ii=P(null),_i=null;function Wa(e){var n=e.alternate;_t(sn,sn.current&1),_t(ii,e),_i===null&&(n===null||ps.current!==null||n.memoizedState!==null)&&(_i=e)}function Ef(e){_t(sn,sn.current),_t(ii,e),_i===null&&(_i=e)}function Qm(e){e.tag===22?(_t(sn,sn.current),_t(ii,e),_i===null&&(_i=e)):Xa()}function Xa(){_t(sn,sn.current),_t(ii,ii.current)}function ai(e){Y(ii),_i===e&&(_i=null),Y(sn)}var sn=P(0);function Ql(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Dh(a)||Lh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var la=0,ue=null,Ge=null,hn=null,Jl=!1,ms=!1,Lr=!1,$l=0,Co=0,gs=null,tS=0;function nn(){throw Error(r(321))}function Tf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Af(e,n,a,o,c,h){return la=h,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Og:Gf,Lr=!1,h=a(o,c),Lr=!1,ms&&(h=$m(n,a,o,c)),Jm(e),h}function Jm(e){N.H=Lo;var n=Ge!==null&&Ge.next!==null;if(la=0,hn=Ge=ue=null,Jl=!1,Co=0,gs=null,n)throw Error(r(300));e===null||dn||(e=e.dependencies,e!==null&&kl(e)&&(dn=!0))}function $m(e,n,a,o){ue=e;var c=0;do{if(ms&&(gs=null),Co=0,ms=!1,25<=c)throw Error(r(301));if(c+=1,hn=Ge=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}N.H=Pg,h=n(a,o)}while(ms);return h}function eS(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?wo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ue.flags|=1024),n}function Rf(){var e=$l!==0;return $l=0,e}function Cf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function wf(e){if(Jl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Jl=!1}la=0,hn=Ge=ue=null,ms=!1,Co=$l=0,gs=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ue.memoizedState=hn=e:hn=hn.next=e,hn}function on(){if(Ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=hn===null?ue.memoizedState:hn.next;if(n!==null)hn=n,Ge=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},hn===null?ue.memoizedState=hn=e:hn=hn.next=e}return hn}function tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(e){var n=Co;return Co+=1,gs===null&&(gs=[]),e=km(gs,e,n),n=ue,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Og:Gf),e}function eu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wo(e);if(e.$$typeof===D)return Tn(e)}throw Error(r(438,String(e)))}function Df(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=tu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=st;return n.index++,a}function ua(e,n){return typeof n=="function"?n(e):n}function nu(e){var n=on();return Lf(n,Ge,e)}function Lf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var S=c.next;c.next=h.next,h.next=S}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var C=S=null,H=null,nt=n,dt=!1;do{var yt=nt.lane&-536870913;if(yt!==nt.lane?(Me&yt)===yt:(la&yt)===yt){var at=nt.revertLane;if(at===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),yt===cs&&(dt=!0);else if((la&at)===at){nt=nt.next,at===cs&&(dt=!0);continue}else yt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(C=H=yt,S=h):H=H.next=yt,ue.lanes|=at,ja|=at;yt=nt.action,Lr&&a(h,yt),h=nt.hasEagerState?nt.eagerState:a(h,yt)}else at={lane:yt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(C=H=at,S=h):H=H.next=at,ue.lanes|=yt,ja|=yt;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?S=h:H.next=C,!ei(h,e.memoizedState)&&(dn=!0,dt&&(a=fs,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=H,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Uf(e){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do h=e(h,S.action),S=S.next;while(S!==c);ei(h,n.memoizedState)||(dn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function tg(e,n,a){var o=ue,c=on(),h=Ee;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!ei((Ge||c).memoizedState,a);if(S&&(c.memoizedState=a,dn=!0),c=c.queue,Pf(ig.bind(null,o,c,e),[e]),c.getSnapshot!==n||S||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,_s(9,{destroy:void 0},ng.bind(null,o,c,a,n),null),Xe===null)throw Error(r(349));h||(la&127)!==0||eg(o,n,a)}return a}function eg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=tu(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function ng(e,n,a,o){n.value=a,n.getSnapshot=o,ag(n)&&rg(e)}function ig(e,n,a){return a(function(){ag(n)&&rg(e)})}function ag(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function rg(e){var n=Mr(e,2);n!==null&&Zn(n,e,2)}function Nf(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Lr){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},n}function sg(e,n,a,o){return e.baseState=a,Lf(e,Ge,typeof o=="function"?o:ua)}function nS(e,n,a,o,c){if(ru(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};N.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,og(n,h)):(h.next=a.next,n.pending=a.next=h)}}function og(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=N.T,S={};N.T=S;try{var C=a(c,o),H=N.S;H!==null&&H(S,C),lg(e,n,C)}catch(nt){Of(e,n,nt)}finally{h!==null&&S.types!==null&&(h.types=S.types),N.T=h}}else try{h=a(c,o),lg(e,n,h)}catch(nt){Of(e,n,nt)}}function lg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){ug(e,n,o)},function(o){return Of(e,n,o)}):ug(e,n,a)}function ug(e,n,a){n.status="fulfilled",n.value=a,cg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,og(e,a)))}function Of(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,cg(n),n=n.next;while(n!==o)}e.action=null}function cg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function fg(e,n){return n}function hg(e,n){if(Ee){var a=Xe.formState;if(a!==null){t:{var o=ue;if(Ee){if(qe){e:{for(var c=qe,h=gi;c.nodeType!==8;){if(!h){c=null;break e}if(c=vi(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){qe=vi(c.nextSibling),o=c.data==="F!";break t}}za(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fg,lastRenderedState:n},a.queue=o,a=Lg.bind(null,ue,o),o.dispatch=a,o=Nf(!1),h=Hf.bind(null,ue,!1,o.queue),o=Hn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=nS.bind(null,ue,c,h,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function dg(e){var n=on();return pg(n,Ge,e)}function pg(e,n,a){if(n=Lf(e,n,fg)[0],e=nu(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=wo(n)}catch(S){throw S===hs?Yl:S}else o=n;n=on();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,_s(9,{destroy:void 0},iS.bind(null,c,a),null)),[o,h,e]}function iS(e,n){e.action=n}function mg(e){var n=on(),a=Ge;if(a!==null)return pg(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function _s(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=tu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function gg(){return on().memoizedState}function iu(e,n,a,o){var c=Hn();ue.flags|=e,c.memoizedState=_s(1|n,{destroy:void 0},a,o===void 0?null:o)}function au(e,n,a,o){var c=on();o=o===void 0?null:o;var h=c.memoizedState.inst;Ge!==null&&o!==null&&Tf(o,Ge.memoizedState.deps)?c.memoizedState=_s(n,h,a,o):(ue.flags|=e,c.memoizedState=_s(1|n,h,a,o))}function _g(e,n){iu(8390656,8,e,n)}function Pf(e,n){au(2048,8,e,n)}function aS(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=tu(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function vg(e){var n=on().memoizedState;return aS({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function yg(e,n){return au(4,2,e,n)}function xg(e,n){return au(4,4,e,n)}function Sg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mg(e,n,a){a=a!=null?a.concat([e]):null,au(4,4,Sg.bind(null,n,e),a)}function If(){}function bg(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Tf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Eg(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Tf(n,o[1]))return o[0];if(o=e(),Lr){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o}function Ff(e,n,a){return a===void 0||(la&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=T0(),ue.lanes|=e,ja|=e,a)}function Tg(e,n,a,o){return ei(a,n)?a:ps.current!==null?(e=Ff(e,a,o),ei(e,n)||(dn=!0),e):(la&42)===0||(la&1073741824)!==0&&(Me&261930)===0?(dn=!0,e.memoizedState=a):(e=T0(),ue.lanes|=e,ja|=e,n)}function Ag(e,n,a,o,c){var h=z.p;z.p=h!==0&&8>h?h:8;var S=N.T,C={};N.T=C,Hf(e,!1,n,a);try{var H=c(),nt=N.S;if(nt!==null&&nt(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=$x(H,o);Do(e,n,dt,oi(e))}else Do(e,n,o,oi(e))}catch(yt){Do(e,n,{then:function(){},status:"rejected",reason:yt},oi())}finally{z.p=h,S!==null&&C.types!==null&&(S.types=C.types),N.T=S}}function rS(){}function Bf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=Rg(e).queue;Ag(e,c,n,ot,a===null?rS:function(){return Cg(e),a(o)})}function Rg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cg(e){var n=Rg(e);n.next===null&&(n=e.alternate.memoizedState),Do(e,n.next.queue,{},oi())}function zf(){return Tn(qo)}function wg(){return on().memoizedState}function Dg(){return on().memoizedState}function sS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=Va(a);var o=ka(n,e,a);o!==null&&(Zn(o,n,a),To(o,n,a)),n={cache:pf()},e.payload=n;return}n=n.return}}function oS(e,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ru(e)?Ug(n,a):(a=nf(e,n,a,o),a!==null&&(Zn(a,e,o),Ng(a,n,o)))}function Lg(e,n,a){var o=oi();Do(e,n,a,o)}function Do(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ru(e))Ug(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,C=h(S,a);if(c.hasEagerState=!0,c.eagerState=C,ei(C,S))return zl(e,n,c,0),Xe===null&&Bl(),!1}catch{}if(a=nf(e,n,c,o),a!==null)return Zn(a,e,o),Ng(a,n,o),!0}return!1}function Hf(e,n,a,o){if(o={lane:2,revertLane:vh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ru(e)){if(n)throw Error(r(479))}else n=nf(e,a,o,2),n!==null&&Zn(n,e,2)}function ru(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Ug(e,n){ms=Jl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ng(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,jr(e,a)}}var Lo={readContext:Tn,use:eu,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Lo.useEffectEvent=nn;var Og={readContext:Tn,use:eu,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:_g,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,iu(4194308,4,Sg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return iu(4194308,4,e,n)},useInsertionEffect:function(e,n){iu(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(Lr){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var c=a(n);if(Lr){Pt(!0);try{a(n)}finally{Pt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=oS.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Nf(e);var n=e.queue,a=Lg.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:If,useDeferredValue:function(e,n){var a=Hn();return Ff(a,e,n)},useTransition:function(){var e=Nf(!1);return e=Ag.bind(null,ue,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,c=Hn();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(Me&127)!==0||eg(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,_g(ig.bind(null,o,h,e),[e]),o.flags|=2048,_s(9,{destroy:void 0},ng.bind(null,o,h,a,n),null),a},useId:function(){var e=Hn(),n=Xe.identifierPrefix;if(Ee){var a=zi,o=Bi;a=(o&~(1<<32-Nt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=$l++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=tS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:zf,useFormState:hg,useActionState:hg,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hf.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Df,useCacheRefresh:function(){return Hn().memoizedState=sS.bind(null,ue)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Gf={readContext:Tn,use:eu,useCallback:bg,useContext:Tn,useEffect:Pf,useImperativeHandle:Mg,useInsertionEffect:yg,useLayoutEffect:xg,useMemo:Eg,useReducer:nu,useRef:gg,useState:function(){return nu(ua)},useDebugValue:If,useDeferredValue:function(e,n){var a=on();return Tg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=nu(ua)[0],n=on().memoizedState;return[typeof e=="boolean"?e:wo(e),n]},useSyncExternalStore:tg,useId:wg,useHostTransitionStatus:zf,useFormState:dg,useActionState:dg,useOptimistic:function(e,n){var a=on();return sg(a,Ge,e,n)},useMemoCache:Df,useCacheRefresh:Dg};Gf.useEffectEvent=vg;var Pg={readContext:Tn,use:eu,useCallback:bg,useContext:Tn,useEffect:Pf,useImperativeHandle:Mg,useInsertionEffect:yg,useLayoutEffect:xg,useMemo:Eg,useReducer:Uf,useRef:gg,useState:function(){return Uf(ua)},useDebugValue:If,useDeferredValue:function(e,n){var a=on();return Ge===null?Ff(a,e,n):Tg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Uf(ua)[0],n=on().memoizedState;return[typeof e=="boolean"?e:wo(e),n]},useSyncExternalStore:tg,useId:wg,useHostTransitionStatus:zf,useFormState:mg,useActionState:mg,useOptimistic:function(e,n){var a=on();return Ge!==null?sg(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Df,useCacheRefresh:Dg};Pg.useEffectEvent=vg;function Vf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var kf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=oi(),c=Va(o);c.payload=n,a!=null&&(c.callback=a),n=ka(e,c,o),n!==null&&(Zn(n,e,o),To(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=oi(),c=Va(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ka(e,c,o),n!==null&&(Zn(n,e,o),To(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(e,o,a),n!==null&&(Zn(n,e,a),To(n,e,a))}};function Ig(e,n,a,o,c,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!_o(a,o)||!_o(c,h):!0}function Fg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&kf.enqueueReplaceState(n,n.state,null)}function Ur(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Bg(e){Fl(e)}function zg(e){console.error(e)}function Hg(e){Fl(e)}function su(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Wf(e,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){su(e,n)},a}function Vg(e){return e=Va(e),e.tag=3,e}function kg(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){Gg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Gg(n,a,o),typeof c!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function lS(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&us(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?vu():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),mh(e,o,c)),!1;case 22:return a.flags|=65536,o===ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),mh(e,o,c)),!1}throw Error(r(435,a.tag))}return mh(e,o,c),vu(),!1}if(Ee)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==uf&&(e=Error(r(422),{cause:o}),xo(di(e,a)))):(o!==uf&&(n=Error(r(423),{cause:o}),xo(di(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=di(o,a),c=Wf(e.stateNode,o,c),xf(e,c),an!==4&&(an=2)),!1;var h=Error(r(520),{cause:o});if(h=di(h,a),zo===null?zo=[h]:zo.push(h),an!==4&&(an=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Wf(a.stateNode,o,e),xf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Za===null||!Za.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Vg(c),kg(c,e,a,o),xf(a,c),!1}a=a.return}while(a!==null);return!1}var Xf=Error(r(461)),dn=!1;function An(e,n,a,o){n.child=e===null?qm(n,null,a,o):Dr(n,e.child,a,o)}function Wg(e,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var C in o)C!=="ref"&&(S[C]=o[C])}else S=o;return Ar(n),o=Af(e,n,a,S,h,c),C=Rf(),e!==null&&!dn?(Cf(e,n,c),ca(e,n,c)):(Ee&&C&&of(n),n.flags|=1,An(e,n,o,c),n.child)}function Xg(e,n,a,o,c){if(e===null){var h=a.type;return typeof h=="function"&&!af(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Yg(e,n,h,o,c)):(e=Gl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!$f(e,c)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:_o,a(S,o)&&e.ref===n.ref)return ca(e,n,c)}return n.flags|=1,e=aa(h,o),e.ref=n.ref,e.return=n,n.child=e}function Yg(e,n,a,o,c){if(e!==null){var h=e.memoizedProps;if(_o(h,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=h,$f(e,c))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,ca(e,n,c)}return Yf(e,n,a,o,c)}function qg(e,n,a,o){var c=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,n.child=null;return jg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xl(n,h!==null?h.cachePool:null),h!==null?Km(n,h):Mf(),Qm(n);else return o=n.lanes=536870912,jg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Xl(n,h.cachePool),Km(n,h),Xa(),n.memoizedState=null):(e!==null&&Xl(n,null),Mf(),Xa());return An(e,n,c,a),n.child}function Uo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function jg(e,n,a,o,c){var h=gf();return h=h===null?null:{parent:fn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Xl(n,null),Mf(),Qm(n),e!==null&&us(e,n,o,!0),n.childLanes=c,null}function ou(e,n){return n=uu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Zg(e,n,a){return Dr(n,e.child,null,a),e=ou(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function uS(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=ou(n,o),n.lanes=536870912,Uo(null,e);if(Ef(n),(e=qe)?(e=o_(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Bi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Um(e),a.return=n,n.child=a,En=n,qe=null)):e=null,e===null)throw za(n);return n.lanes=536870912,null}return ou(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(Ef(n),c)if(n.flags&256)n.flags&=-257,n=Zg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||us(e,n,a,!1),c=(a&e.childLanes)!==0,dn||c){if(o=Xe,o!==null&&(S=Al(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,Mr(e,S),Zn(o,e,S),Xf;vu(),n=Zg(e,n,a)}else e=h.treeContext,qe=vi(S.nextSibling),En=n,Ee=!0,Ba=null,gi=!1,e!==null&&Pm(n,e),n=ou(n,o),n.flags|=4096;return n}return e=aa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function lu(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Yf(e,n,a,o,c){return Ar(n),a=Af(e,n,a,o,void 0,c),o=Rf(),e!==null&&!dn?(Cf(e,n,c),ca(e,n,c)):(Ee&&o&&of(n),n.flags|=1,An(e,n,a,c),n.child)}function Kg(e,n,a,o,c,h){return Ar(n),n.updateQueue=null,a=$m(n,o,a,c),Jm(e),o=Rf(),e!==null&&!dn?(Cf(e,n,h),ca(e,n,h)):(Ee&&o&&of(n),n.flags|=1,An(e,n,a,h),n.child)}function Qg(e,n,a,o,c){if(Ar(n),n.stateNode===null){var h=rs,S=a.contextType;typeof S=="object"&&S!==null&&(h=Tn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=kf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},vf(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Tn(S):rs,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Vf(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&kf.enqueueReplaceState(h,h.state,null),Ro(n,o,h,c),Ao(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var C=n.memoizedProps,H=Ur(a,C);h.props=H;var nt=h.context,dt=a.contextType;S=rs,typeof dt=="object"&&dt!==null&&(S=Tn(dt));var yt=a.getDerivedStateFromProps;dt=typeof yt=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||nt!==S)&&Fg(n,h,o,S),Ga=!1;var at=n.memoizedState;h.state=at,Ro(n,o,h,c),Ao(),nt=n.memoizedState,C||at!==nt||Ga?(typeof yt=="function"&&(Vf(n,a,yt,o),nt=n.memoizedState),(H=Ga||Ig(n,a,H,o,at,nt,S))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=S,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,yf(e,n),S=n.memoizedProps,dt=Ur(a,S),h.props=dt,yt=n.pendingProps,at=h.context,nt=a.contextType,H=rs,typeof nt=="object"&&nt!==null&&(H=Tn(nt)),C=a.getDerivedStateFromProps,(nt=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==yt||at!==H)&&Fg(n,h,o,H),Ga=!1,at=n.memoizedState,h.state=at,Ro(n,o,h,c),Ao();var ut=n.memoizedState;S!==yt||at!==ut||Ga||e!==null&&e.dependencies!==null&&kl(e.dependencies)?(typeof C=="function"&&(Vf(n,a,C,o),ut=n.memoizedState),(dt=Ga||Ig(n,a,dt,o,at,ut,H)||e!==null&&e.dependencies!==null&&kl(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=H,o=dt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,lu(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Dr(n,e.child,null,c),n.child=Dr(n,null,a,c)):An(e,n,a,c),n.memoizedState=h.state,e=n.child):e=ca(e,n,c),e}function Jg(e,n,a,o){return Er(),n.flags|=256,An(e,n,a,o),n.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(e){return{baseLanes:e,cachePool:Gm()}}function Zf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function $g(e,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(c?Wa(n):Xa(),(e=qe)?(e=o_(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Bi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Um(e),a.return=n,n.child=a,En=n,qe=null)):e=null,e===null)throw za(n);return Lh(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,c?(Xa(),c=n.mode,C=uu({mode:"hidden",children:C},c),o=br(o,c,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=jf(a),o.childLanes=Zf(e,S,a),n.memoizedState=qf,Uo(null,o)):(Wa(n),Kf(n,C))}var H=e.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(h)n.flags&256?(Wa(n),n.flags&=-257,n=Qf(e,n,a)):n.memoizedState!==null?(Xa(),n.child=e.child,n.flags|=128,n=null):(Xa(),C=o.fallback,c=n.mode,o=uu({mode:"visible",children:o.children},c),C=br(C,c,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Dr(n,e.child,null,a),o=n.child,o.memoizedState=jf(a),o.childLanes=Zf(e,S,a),n.memoizedState=qf,n=Uo(null,o));else if(Wa(n),Lh(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var nt=S.dgst;S=nt,o=Error(r(419)),o.stack="",o.digest=S,xo({value:o,source:null,stack:null}),n=Qf(e,n,a)}else if(dn||us(e,n,a,!1),S=(a&e.childLanes)!==0,dn||S){if(S=Xe,S!==null&&(o=Al(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Mr(e,o),Zn(S,e,o),Xf;Dh(C)||vu(),n=Qf(e,n,a)}else Dh(C)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,qe=vi(C.nextSibling),En=n,Ee=!0,Ba=null,gi=!1,e!==null&&Pm(n,e),n=Kf(n,o.children),n.flags|=4096);return n}return c?(Xa(),C=o.fallback,c=n.mode,H=e.child,nt=H.sibling,o=aa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,nt!==null?C=aa(nt,C):(C=br(C,c,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Uo(null,o),o=n.child,C=e.child.memoizedState,C===null?C=jf(a):(c=C.cachePool,c!==null?(H=fn._currentValue,c=c.parent!==H?{parent:H,pool:H}:c):c=Gm(),C={baseLanes:C.baseLanes|a,cachePool:c}),o.memoizedState=C,o.childLanes=Zf(e,S,a),n.memoizedState=qf,Uo(e.child,o)):(Wa(n),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Kf(e,n){return n=uu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function uu(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function Qf(e,n,a){return Dr(n,e.child,null,a),e=Kf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function t0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),hf(e.return,n,a)}function Jf(e,n,a,o,c,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=c,S.treeForkCount=h)}function e0(e,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var S=sn.current,C=(S&2)!==0;if(C?(S=S&1|2,n.flags|=128):S&=1,_t(sn,S),An(e,n,o,a),o=Ee?yo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&t0(e,a,n);else if(e.tag===19)t0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ql(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Jf(n,!1,c,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ql(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Jf(n,!0,a,null,h,o);break;case"together":Jf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(us(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=aa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function $f(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&kl(e)))}function cS(e,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),Ha(n,fn,e.memoizedState.cache),Er();break;case 27:case 5:jt(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$g(e,n,a):(Wa(n),e=ca(e,n,a),e!==null?e.sibling:null);Wa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(us(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return e0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t(sn,sn.current),o)break;return null;case 22:return n.lanes=0,qg(e,n,a,n.pendingProps);case 24:Ha(n,fn,e.memoizedState.cache)}return ca(e,n,a)}function n0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!$f(e,a)&&(n.flags&128)===0)return dn=!1,cS(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Ee&&(n.flags&1048576)!==0&&Om(n,yo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Cr(n.elementType),n.type=e,typeof e=="function")af(e)?(o=Ur(e,o),n.tag=1,n=Qg(null,n,e,o,a)):(n.tag=0,n=Yf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===L){n.tag=11,n=Wg(null,n,e,o,a);break t}else if(c===F){n.tag=14,n=Xg(null,n,e,o,a);break t}}throw n=rt(e)||e,Error(r(306,n,""))}}return n;case 0:return Yf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Ur(o,n.pendingProps),Qg(e,n,o,c,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,yf(e,n),Ro(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ha(n,fn,o),o!==h.cache&&df(n,[fn],a,!0),Ao(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Jg(e,n,o,a);break t}else if(o!==c){c=di(Error(r(424)),n),xo(c),n=Jg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=vi(e.firstChild),En=n,Ee=!0,Ba=null,gi=!0,a=qm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Er(),o===c){n=ca(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return lu(e,n),e===null?(a=d_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=Tu($.current).createElement(a),o[ln]=n,o[gn]=e,Rn(o,a,e),W(o),n.stateNode=o):n.memoizedState=d_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&Ee&&(o=n.stateNode=c_(n.type,n.pendingProps,$.current),En=n,gi=!0,c=qe,$a(n.type)?(Uh=c,qe=vi(o.firstChild)):qe=c),An(e,n,n.pendingProps.children,a),lu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((c=o=qe)&&(o=HS(o,n.type,n.pendingProps,gi),o!==null?(n.stateNode=o,En=n,qe=vi(o.firstChild),gi=!1,c=!0):c=!1),c||za(n)),jt(n),c=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,Rh(c,h)?o=null:S!==null&&Rh(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Af(e,n,eS,null,null,a),qo._currentValue=c),lu(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=qe)&&(a=GS(a,n.pendingProps,gi),a!==null?(n.stateNode=a,En=n,qe=null,e=!0):e=!1),e||za(n)),null;case 13:return $g(e,n,a);case 4:return Mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Dr(n,null,o,a):An(e,n,o,a),n.child;case 11:return Wg(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Ar(n),c=Tn(c),o=o(c),n.flags|=1,An(e,n,o,a),n.child;case 14:return Xg(e,n,n.type,n.pendingProps,a);case 15:return Yg(e,n,n.type,n.pendingProps,a);case 19:return e0(e,n,a);case 31:return uS(e,n,a);case 22:return qg(e,n,a,n.pendingProps);case 24:return Ar(n),o=Tn(fn),e===null?(c=gf(),c===null&&(c=Xe,h=pf(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},vf(n),Ha(n,fn,c)):((e.lanes&a)!==0&&(yf(e,n),Ro(n,null,null,a),Ao()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ha(n,fn,o)):(o=h.cache,Ha(n,fn,o),o!==c.cache&&df(n,[fn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function fa(e){e.flags|=4}function th(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(w0())e.flags|=8192;else throw wr=ql,_f}else e.flags&=-16777217}function i0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!v_(n))if(w0())e.flags|=8192;else throw wr=ql,_f}function cu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,Ss|=n)}function No(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function fS(e,n,a){var o=n.pendingProps;switch(lf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),oa(fn),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ls(n)?fa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cf())),je(n),null;case 26:var c=n.type,h=n.memoizedState;return e===null?(fa(n),h!==null?(je(n),i0(n,h)):(je(n),th(n,c,null,o,a))):h?h!==e.memoizedState?(fa(n),je(n),i0(n,h)):(je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&fa(n),je(n),th(n,c,e,o,a)),null;case 27:if(Jt(n),a=$.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return je(n),null}e=At.current,ls(n)?Im(n):(e=c_(c,o,a),n.stateNode=e,fa(n))}return je(n),null;case 5:if(Jt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return je(n),null}if(h=At.current,ls(n))Im(n);else{var S=Tu($.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}h[ln]=n,h[gn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(Rn(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&fa(n)}}return je(n),th(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=$.current,ls(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=En,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||$0(e.nodeValue,a)),e||za(n,!0)}else e=Tu(e).createTextNode(o),e[ln]=n,n.stateNode=e}return je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ls(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ln]=n}else Er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),e=!1}else a=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ls(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=n}else Er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),cu(n,n.updateQueue),je(n),null);case 4:return Gt(),e===null&&Mh(n.stateNode.containerInfo),je(n),null;case 10:return oa(n.type),je(n),null;case 19:if(Y(sn),o=n.memoizedState,o===null)return je(n),null;if(c=(n.flags&128)!==0,h=o.rendering,h===null)if(c)No(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ql(e),h!==null){for(n.flags|=128,No(o,!1),e=h.updateQueue,n.updateQueue=e,cu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Lm(a,e),a=a.sibling;return _t(sn,sn.current&1|2),Ee&&ra(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>mu&&(n.flags|=128,c=!0,No(o,!1),n.lanes=4194304)}else{if(!c)if(e=Ql(h),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,cu(n,e),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ee)return je(n),null}else 2*E()-o.renderingStartTime>mu&&a!==536870912&&(n.flags|=128,c=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=sn.current,_t(sn,c?a&1|2:a&1),Ee&&ra(n,o.treeForkCount),e):(je(n),null);case 22:case 23:return ai(n),bf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&cu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Y(Rr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),oa(fn),je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function hS(e,n){switch(lf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return oa(fn),Gt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Jt(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(r(340));Er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(sn),null;case 4:return Gt(),null;case 10:return oa(n.type),null;case 22:case 23:return ai(n),bf(),e!==null&&Y(Rr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return oa(fn),null;case 25:return null;default:return null}}function a0(e,n){switch(lf(n),n.tag){case 3:oa(fn),Gt();break;case 26:case 27:case 5:Jt(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Y(sn);break;case 10:oa(n.type);break;case 22:case 23:ai(n),bf(),e!==null&&Y(Rr);break;case 24:oa(fn)}}function Oo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==c)}}catch(C){Be(n,n.return,C)}}function Ya(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var S=o.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,c=n;var H=a,nt=C;try{nt()}catch(dt){Be(c,H,dt)}}}o=o.next}while(o!==h)}}catch(dt){Be(n,n.return,dt)}}function r0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Zm(n,a)}catch(o){Be(e,e.return,o)}}}function s0(e,n,a){a.props=Ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function Po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Be(e,n,c)}}function Hi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Be(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(e,n,c)}else a.current=null}function o0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Be(e,e.return,c)}}function eh(e,n,a){try{var o=e.stateNode;OS(o,e.type,a,n),o[gn]=n}catch(c){Be(e,e.return,c)}}function l0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$a(e.type)||e.tag===4}function nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||l0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$a(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ih(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=na));else if(o!==4&&(o===27&&$a(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ih(e,n,a),e=e.sibling;e!==null;)ih(e,n,a),e=e.sibling}function fu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&$a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fu(e,n,a),e=e.sibling;e!==null;)fu(e,n,a),e=e.sibling}function u0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,o,a),n[ln]=e,n[gn]=a}catch(h){Be(e,e.return,h)}}var ha=!1,pn=!1,ah=!1,c0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function dS(e,n){if(e=e.containerInfo,Th=Uu,e=Mm(e),Kc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,C=-1,H=-1,nt=0,dt=0,yt=e,at=null;e:for(;;){for(var ut;yt!==a||c!==0&&yt.nodeType!==3||(C=S+c),yt!==h||o!==0&&yt.nodeType!==3||(H=S+o),yt.nodeType===3&&(S+=yt.nodeValue.length),(ut=yt.firstChild)!==null;)at=yt,yt=ut;for(;;){if(yt===e)break e;if(at===a&&++nt===c&&(C=S),at===h&&++dt===o&&(H=S),(ut=yt.nextSibling)!==null)break;yt=at,at=yt.parentNode}yt=ut}a=C===-1||H===-1?null:{start:C,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ah={focusedElem:e,selectionRange:a},Uu=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Vt=Ur(a.type,c);e=o.getSnapshotBeforeUpdate(Vt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)wh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function f0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:pa(e,a),o&4&&Oo(5,a);break;case 1:if(pa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Be(a,a.return,S)}else{var c=Ur(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Be(a,a.return,S)}}o&64&&r0(a),o&512&&Po(a,a.return);break;case 3:if(pa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Zm(e,n)}catch(S){Be(a,a.return,S)}}break;case 27:n===null&&o&4&&u0(a);case 26:case 5:pa(e,a),n===null&&o&4&&o0(a),o&512&&Po(a,a.return);break;case 12:pa(e,a);break;case 31:pa(e,a),o&4&&p0(e,a);break;case 13:pa(e,a),o&4&&m0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=MS.bind(null,a),VS(e,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){n=n!==null&&n.memoizedState!==null||pn,c=ha;var h=pn;ha=o,(pn=n)&&!h?ma(e,a,(a.subtreeFlags&8772)!==0):pa(e,a),ha=c,pn=h}break;case 30:break;default:pa(e,a)}}function h0(e){var n=e.alternate;n!==null&&(e.alternate=null,h0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&lo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Xn=!1;function da(e,n,a){for(a=a.child;a!==null;)d0(e,n,a),a=a.sibling}function d0(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:pn||Hi(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Hi(a,n);var o=Je,c=Xn;$a(a.type)&&(Je=a.stateNode,Xn=!1),da(e,n,a),Wo(a.stateNode),Je=o,Xn=c;break;case 5:pn||Hi(a,n);case 6:if(o=Je,c=Xn,Je=null,da(e,n,a),Je=o,Xn=c,Je!==null)if(Xn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(h){Be(a,n,h)}else try{Je.removeChild(a.stateNode)}catch(h){Be(a,n,h)}break;case 18:Je!==null&&(Xn?(e=Je,r_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ws(e)):r_(Je,a.stateNode));break;case 4:o=Je,c=Xn,Je=a.stateNode.containerInfo,Xn=!0,da(e,n,a),Je=o,Xn=c;break;case 0:case 11:case 14:case 15:Ya(2,a,n),pn||Ya(4,a,n),da(e,n,a);break;case 1:pn||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&s0(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,da(e,n,a),pn=o;break;default:da(e,n,a)}}function p0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ws(e)}catch(a){Be(n,n.return,a)}}}function m0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ws(e)}catch(a){Be(n,n.return,a)}}function pS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new c0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new c0),n;default:throw Error(r(435,e.tag))}}function hu(e,n){var a=pS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=bS.bind(null,e,o);o.then(c,c)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=e,S=n,C=S;t:for(;C!==null;){switch(C.tag){case 27:if($a(C.type)){Je=C.stateNode,Xn=!1;break t}break;case 5:Je=C.stateNode,Xn=!1;break t;case 3:case 4:Je=C.stateNode.containerInfo,Xn=!0;break t}C=C.return}if(Je===null)throw Error(r(160));d0(h,S,c),Je=null,Xn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)g0(n,e),n=n.sibling}var wi=null;function g0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),qn(e),o&4&&(Ya(3,e,e.return),Oo(3,e),Ya(5,e,e.return));break;case 1:Yn(n,e),qn(e),o&512&&(pn||a===null||Hi(a,a.return)),o&64&&ha&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=wi;if(Yn(n,e),qn(e),o&512&&(pn||a===null||Hi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[_r]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),Rn(h,o,a),h[ln]=e,W(h),o=h;break t;case"link":var S=g_("link","href",c).get(o+(a.href||""));if(S){for(var C=0;C<S.length;C++)if(h=S[C],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(C,1);break e}}h=c.createElement(o),Rn(h,o,a),c.head.appendChild(h);break;case"meta":if(S=g_("meta","content",c).get(o+(a.content||""))){for(C=0;C<S.length;C++)if(h=S[C],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(C,1);break e}}h=c.createElement(o),Rn(h,o,a),c.head.appendChild(h);break;default:throw Error(r(468,o))}h[ln]=e,W(h),o=h}e.stateNode=o}else __(c,e.type,e.stateNode);else e.stateNode=m_(c,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?__(c,e.type,e.stateNode):m_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&eh(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),qn(e),o&512&&(pn||a===null||Hi(a,a.return)),a!==null&&o&4&&eh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),qn(e),o&512&&(pn||a===null||Hi(a,a.return)),e.flags&32){c=e.stateNode;try{zn(c,"")}catch(Vt){Be(e,e.return,Vt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,eh(e,c,a!==null?a.memoizedProps:c)),o&1024&&(ah=!0);break;case 6:if(Yn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Vt){Be(e,e.return,Vt)}}break;case 3:if(Cu=null,c=wi,wi=Au(n.containerInfo),Yn(n,e),wi=c,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ws(n.containerInfo)}catch(Vt){Be(e,e.return,Vt)}ah&&(ah=!1,_0(e));break;case 4:o=wi,wi=Au(e.stateNode.containerInfo),Yn(n,e),qn(e),wi=o;break;case 12:Yn(n,e),qn(e);break;case 31:Yn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hu(e,o)));break;case 13:Yn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pu=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hu(e,o)));break;case 22:c=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=ha,dt=pn;if(ha=nt||c,pn=dt||H,Yn(n,e),pn=dt,ha=nt,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||H||ha||pn||Nr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,c)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=H.stateNode;var yt=H.memoizedProps.style,at=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;C.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Vt){Be(H,H.return,Vt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=c?"":H.memoizedProps}catch(Vt){Be(H,H.return,Vt)}}}else if(n.tag===18){if(a===null){H=n;try{var ut=H.stateNode;c?s_(ut,!0):s_(H.stateNode,!1)}catch(Vt){Be(H,H.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,hu(e,a))));break;case 19:Yn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hu(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(l0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=nh(e);fu(e,h,c);break;case 5:var S=a.stateNode;a.flags&32&&(zn(S,""),a.flags&=-33);var C=nh(e);fu(e,C,S);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=nh(e);ih(e,nt,H);break;default:throw Error(r(161))}}catch(dt){Be(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;_0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function pa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f0(e,n.alternate,n),n=n.sibling}function Nr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ya(4,n,n.return),Nr(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&s0(n,n.return,a),Nr(n);break;case 27:Wo(n.stateNode);case 26:case 5:Hi(n,n.return),Nr(n);break;case 22:n.memoizedState===null&&Nr(n);break;case 30:Nr(n);break;default:Nr(n)}e=e.sibling}}function ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:ma(c,h,a),Oo(4,h);break;case 1:if(ma(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Be(o,o.return,nt)}if(o=h,c=o.updateQueue,c!==null){var C=o.stateNode;try{var H=c.shared.hiddenCallbacks;if(H!==null)for(c.shared.hiddenCallbacks=null,c=0;c<H.length;c++)jm(H[c],C)}catch(nt){Be(o,o.return,nt)}}a&&S&64&&r0(h),Po(h,h.return);break;case 27:u0(h);case 26:case 5:ma(c,h,a),a&&o===null&&S&4&&o0(h),Po(h,h.return);break;case 12:ma(c,h,a);break;case 31:ma(c,h,a),a&&S&4&&p0(c,h);break;case 13:ma(c,h,a),a&&S&4&&m0(c,h);break;case 22:h.memoizedState===null&&ma(c,h,a),Po(h,h.return);break;case 30:break;default:ma(c,h,a)}n=n.sibling}}function rh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&So(a))}function sh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&So(e))}function Di(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)v0(e,n,a,o),n=n.sibling}function v0(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,o),c&2048&&Oo(9,n);break;case 1:Di(e,n,a,o);break;case 3:Di(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&So(e)));break;case 12:if(c&2048){Di(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,C=h.onPostCommit;typeof C=="function"&&C(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Be(n,n.return,H)}}else Di(e,n,a,o);break;case 31:Di(e,n,a,o);break;case 13:Di(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Di(e,n,a,o):Io(e,n):h._visibility&2?Di(e,n,a,o):(h._visibility|=2,vs(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&rh(S,n);break;case 24:Di(e,n,a,o),c&2048&&sh(n.alternate,n);break;default:Di(e,n,a,o)}}function vs(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,C=a,H=o,nt=S.flags;switch(S.tag){case 0:case 11:case 15:vs(h,S,C,H,c),Oo(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?vs(h,S,C,H,c):Io(h,S):(dt._visibility|=2,vs(h,S,C,H,c)),c&&nt&2048&&rh(S.alternate,S);break;case 24:vs(h,S,C,H,c),c&&nt&2048&&sh(S.alternate,S);break;default:vs(h,S,C,H,c)}n=n.sibling}}function Io(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:Io(a,o),c&2048&&rh(o.alternate,o);break;case 24:Io(a,o),c&2048&&sh(o.alternate,o);break;default:Io(a,o)}n=n.sibling}}var Fo=8192;function ys(e,n,a){if(e.subtreeFlags&Fo)for(e=e.child;e!==null;)y0(e,n,a),e=e.sibling}function y0(e,n,a){switch(e.tag){case 26:ys(e,n,a),e.flags&Fo&&e.memoizedState!==null&&tM(a,wi,e.memoizedState,e.memoizedProps);break;case 5:ys(e,n,a);break;case 3:case 4:var o=wi;wi=Au(e.stateNode.containerInfo),ys(e,n,a),wi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Fo,Fo=16777216,ys(e,n,a),Fo=o):ys(e,n,a));break;default:ys(e,n,a)}}function x0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Bo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,M0(o,e)}x0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S0(e),e=e.sibling}function S0(e){switch(e.tag){case 0:case 11:case 15:Bo(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:Bo(e);break;case 12:Bo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,du(e)):Bo(e);break;default:Bo(e)}}function du(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,M0(o,e)}x0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ya(8,n,n.return),du(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,du(n));break;default:du(n)}e=e.sibling}}function M0(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:So(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var c=o.sibling,h=o.return;if(h0(o),o===a){Mn=null;break t}if(c!==null){c.return=h,Mn=c;break t}Mn=h}}}var mS={getCacheForType:function(e){var n=Tn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(fn).controller.signal}},gS=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Xe=null,ye=null,Me=0,Fe=0,ri=null,qa=!1,xs=!1,oh=!1,ga=0,an=0,ja=0,Or=0,lh=0,si=0,Ss=0,zo=null,jn=null,uh=!1,pu=0,b0=0,mu=1/0,gu=null,Za=null,vn=0,Ka=null,Ms=null,_a=0,ch=0,fh=null,E0=null,Ho=0,hh=null;function oi(){return(Ne&2)!==0&&Me!==0?Me&-Me:N.T!==null?vh():Fi()}function T0(){if(si===0)if((Me&536870912)===0||Ee){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),si=e}else si=536870912;return e=ii.current,e!==null&&(e.flags|=32),si}function Zn(e,n,a){(e===Xe&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(bs(e,0),Qa(e,Me,si,!1)),In(e,a),((Ne&2)===0||e!==Xe)&&(e===Xe&&((Ne&2)===0&&(Or|=a),an===4&&Qa(e,Me,si,!1)),Gi(e))}function A0(e,n,a){if((Ne&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||zt(e,n),c=o?yS(e,n):ph(e,n,!0),h=o;do{if(c===0){xs&&!o&&Qa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!_S(a)){c=ph(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var C=e;c=zo;var H=C.current.memoizedState.isDehydrated;if(H&&(bs(C,S).flags|=256),S=ph(C,S,!1),S!==2){if(oh&&!H){C.errorRecoveryDisabledLanes|=h,Or|=h,c=4;break t}h=jn,jn=c,h!==null&&(jn===null?jn=h:jn.push.apply(jn,h))}c=S}if(h=!1,c!==2)continue}}if(c===1){bs(e,0),Qa(e,n,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,si,!qa);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=pu+300-E(),10<c)){if(Qa(o,n,si,!qa),ct(o,0,!0)!==0)break t;_a=n,o.timeoutHandle=i_(R0.bind(null,o,a,jn,gu,uh,n,si,Or,Ss,qa,h,"Throttled",-0,0),c);break t}R0(o,a,jn,gu,uh,n,si,Or,Ss,qa,h,null,-0,0)}}break}while(!0);Gi(e)}function R0(e,n,a,o,c,h,S,C,H,nt,dt,yt,at,ut){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},y0(n,h,yt);var Vt=(h&62914560)===h?pu-E():(h&4194048)===h?b0-E():0;if(Vt=eM(yt,Vt),Vt!==null){_a=h,e.cancelPendingCommit=Vt(P0.bind(null,e,n,h,a,o,c,S,C,H,dt,yt,null,at,ut)),Qa(e,h,S,!nt);return}}P0(e,n,h,a,o,c,S,C,H)}function _S(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!ei(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(e,n,a,o){n&=~lh,n&=~Or,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-Nt(c),S=1<<h;o[h]=-1,c&=~S}a!==0&&oo(e,a,n)}function _u(){return(Ne&6)===0?(Go(0),!1):!0}function dh(){if(ye!==null){if(Fe===0)var e=ye.return;else e=ye,sa=Tr=null,wf(e),ds=null,bo=0,e=ye;for(;e!==null;)a0(e.alternate,e),e=e.return;ye=null}}function bs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,FS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),_a=0,dh(),Xe=e,ye=a=aa(e.current,null),Me=n,Fe=0,ri=null,qa=!1,xs=zt(e,n),oh=!1,Ss=si=lh=Or=ja=an=0,jn=zo=null,uh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Nt(o),h=1<<c;n|=e[c],o&=~h}return ga=n,Bl(),a}function C0(e,n){ue=null,N.H=Lo,n===hs||n===Yl?(n=Wm(),Fe=3):n===_f?(n=Wm(),Fe=4):Fe=n===Xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,ye===null&&(an=1,su(e,di(n,e.current)))}function w0(){var e=ii.current;return e===null?!0:(Me&4194048)===Me?_i===null:(Me&62914560)===Me||(Me&536870912)!==0?e===_i:!1}function D0(){var e=N.H;return N.H=Lo,e===null?Lo:e}function L0(){var e=N.A;return N.A=mS,e}function vu(){an=4,qa||(Me&4194048)!==Me&&ii.current!==null||(xs=!0),(ja&134217727)===0&&(Or&134217727)===0||Xe===null||Qa(Xe,Me,si,!1)}function ph(e,n,a){var o=Ne;Ne|=2;var c=D0(),h=L0();(Xe!==e||Me!==n)&&(gu=null,bs(e,n)),n=!1;var S=an;t:do try{if(Fe!==0&&ye!==null){var C=ye,H=ri;switch(Fe){case 8:dh(),S=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var nt=Fe;if(Fe=0,ri=null,Es(e,C,H,nt),a&&xs){S=0;break t}break;default:nt=Fe,Fe=0,ri=null,Es(e,C,H,nt)}}vS(),S=an;break}catch(dt){C0(e,dt)}while(!0);return n&&e.shellSuspendCounter++,sa=Tr=null,Ne=o,N.H=c,N.A=h,ye===null&&(Xe=null,Me=0,Bl()),S}function vS(){for(;ye!==null;)U0(ye)}function yS(e,n){var a=Ne;Ne|=2;var o=D0(),c=L0();Xe!==e||Me!==n?(gu=null,mu=E()+500,bs(e,n)):xs=zt(e,n);t:do try{if(Fe!==0&&ye!==null){n=ye;var h=ri;e:switch(Fe){case 1:Fe=0,ri=null,Es(e,n,h,1);break;case 2:case 9:if(Vm(h)){Fe=0,ri=null,N0(n);break}n=function(){Fe!==2&&Fe!==9||Xe!==e||(Fe=7),Gi(e)},h.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Vm(h)?(Fe=0,ri=null,N0(n)):(Fe=0,ri=null,Es(e,n,h,7));break;case 5:var S=null;switch(ye.tag){case 26:S=ye.memoizedState;case 5:case 27:var C=ye;if(S?v_(S):C.stateNode.complete){Fe=0,ri=null;var H=C.sibling;if(H!==null)ye=H;else{var nt=C.return;nt!==null?(ye=nt,yu(nt)):ye=null}break e}}Fe=0,ri=null,Es(e,n,h,5);break;case 6:Fe=0,ri=null,Es(e,n,h,6);break;case 8:dh(),an=6;break t;default:throw Error(r(462))}}xS();break}catch(dt){C0(e,dt)}while(!0);return sa=Tr=null,N.H=o,N.A=c,Ne=a,ye!==null?0:(Xe=null,Me=0,Bl(),an)}function xS(){for(;ye!==null&&!Yt();)U0(ye)}function U0(e){var n=n0(e.alternate,e,ga);e.memoizedProps=e.pendingProps,n===null?yu(e):ye=n}function N0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Kg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Kg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:wf(n);default:a0(a,n),n=ye=Lm(n,ga),n=n0(a,n,ga)}e.memoizedProps=e.pendingProps,n===null?yu(e):ye=n}function Es(e,n,a,o){sa=Tr=null,wf(n),ds=null,bo=0;var c=n.return;try{if(lS(e,c,n,a,Me)){an=1,su(e,di(a,e.current)),ye=null;return}}catch(h){if(c!==null)throw ye=c,h;an=1,su(e,di(a,e.current)),ye=null;return}n.flags&32768?(Ee||o===1?e=!0:xs||(Me&536870912)!==0?e=!1:(qa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),O0(n,e)):yu(n)}function yu(e){var n=e;do{if((n.flags&32768)!==0){O0(n,qa);return}e=n.return;var a=fS(n.alternate,n,ga);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);an===0&&(an=5)}function O0(e,n){do{var a=hS(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);an=6,ye=null}function P0(e,n,a,o,c,h,S,C,H){e.cancelPendingCommit=null;do xu();while(vn!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=ef,Ei(e,a,h,S,C,H),e===Xe&&(ye=Xe=null,Me=0),Ms=n,Ka=e,_a=a,ch=h,fh=c,E0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ES(ft,function(){return H0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,c=z.p,z.p=2,S=Ne,Ne|=4;try{dS(e,n,a)}finally{Ne=S,z.p=c,N.T=o}}vn=1,I0(),F0(),B0()}}function I0(){if(vn===1){vn=0;var e=Ka,n=Ms,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=z.p;z.p=2;var c=Ne;Ne|=4;try{g0(n,e);var h=Ah,S=Mm(e.containerInfo),C=h.focusedElem,H=h.selectionRange;if(S!==C&&C&&C.ownerDocument&&Sm(C.ownerDocument.documentElement,C)){if(H!==null&&Kc(C)){var nt=H.start,dt=H.end;if(dt===void 0&&(dt=nt),"selectionStart"in C)C.selectionStart=nt,C.selectionEnd=Math.min(dt,C.value.length);else{var yt=C.ownerDocument||document,at=yt&&yt.defaultView||window;if(at.getSelection){var ut=at.getSelection(),Vt=C.textContent.length,te=Math.min(H.start,Vt),ke=H.end===void 0?te:Math.min(H.end,Vt);!ut.extend&&te>ke&&(S=ke,ke=te,te=S);var K=xm(C,te),k=xm(C,ke);if(K&&k&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var et=yt.createRange();et.setStart(K.node,K.offset),ut.removeAllRanges(),te>ke?(ut.addRange(et),ut.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),ut.addRange(et))}}}}for(yt=[],ut=C;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<yt.length;C++){var gt=yt[C];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Uu=!!Th,Ah=Th=null}finally{Ne=c,z.p=o,N.T=a}}e.current=n,vn=2}}function F0(){if(vn===2){vn=0;var e=Ka,n=Ms,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=z.p;z.p=2;var c=Ne;Ne|=4;try{f0(e,n.alternate,n)}finally{Ne=c,z.p=o,N.T=a}}vn=3}}function B0(){if(vn===4||vn===3){vn=0,O();var e=Ka,n=Ms,a=_a,o=E0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,Ms=Ka=null,z0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Za=null),Kr(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,c=z.p,z.p=2,N.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var C=o[S];h(C.value,{componentStack:C.stack})}}finally{N.T=n,z.p=c}}(_a&3)!==0&&xu(),Gi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===hh?Ho++:(Ho=0,hh=e):Ho=0,Go(0)}}function z0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,So(n)))}function xu(){return I0(),F0(),B0(),H0()}function H0(){if(vn!==5)return!1;var e=Ka,n=ch;ch=0;var a=Kr(_a),o=N.T,c=z.p;try{z.p=32>a?32:a,N.T=null,a=fh,fh=null;var h=Ka,S=_a;if(vn=0,Ms=Ka=null,_a=0,(Ne&6)!==0)throw Error(r(331));var C=Ne;if(Ne|=4,S0(h.current),v0(h,h.current,S,a),Ne=C,Go(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Tt,h)}catch{}return!0}finally{z.p=c,N.T=o,z0(e,n)}}function G0(e,n,a){n=di(a,n),n=Wf(e.stateNode,n,2),e=ka(e,n,2),e!==null&&(In(e,2),Gi(e))}function Be(e,n,a){if(e.tag===3)G0(e,e,a);else for(;n!==null;){if(n.tag===3){G0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){e=di(a,e),a=Vg(2),o=ka(n,a,2),o!==null&&(kg(a,o,n,e),In(o,2),Gi(o));break}}n=n.return}}function mh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new gS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(oh=!0,c.add(a),e=SS.bind(null,e,n,a),n.then(e,e))}function SS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Me&a)===a&&(an===4||an===3&&(Me&62914560)===Me&&300>E()-pu?(Ne&2)===0&&bs(e,0):lh|=a,Ss===Me&&(Ss=0)),Gi(e)}function V0(e,n){n===0&&(n=Ie()),e=Mr(e,n),e!==null&&(In(e,n),Gi(e))}function MS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),V0(e,a)}function bS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),V0(e,a)}function ES(e,n){return Ae(e,n)}var Su=null,Ts=null,gh=!1,Mu=!1,_h=!1,Ja=0;function Gi(e){e!==Ts&&e.next===null&&(Ts===null?Su=Ts=e:Ts=Ts.next=e),Mu=!0,gh||(gh=!0,AS())}function Go(e,n){if(!_h&&Mu){_h=!0;do for(var a=!1,o=Su;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var S=o.suspendedLanes,C=o.pingedLanes;h=(1<<31-Nt(42|e)+1)-1,h&=c&~(S&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Y0(o,h))}else h=Me,h=ct(o,o===Xe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||zt(o,h)||(a=!0,Y0(o,h));o=o.next}while(a);_h=!1}}function TS(){k0()}function k0(){Mu=gh=!1;var e=0;Ja!==0&&IS()&&(e=Ja);for(var n=E(),a=null,o=Su;o!==null;){var c=o.next,h=W0(o,n);h===0?(o.next=null,a===null?Su=c:a.next=c,c===null&&(Ts=a)):(a=o,(e!==0||(h&3)!==0)&&(Mu=!0)),o=c}vn!==0&&vn!==5||Go(e),Ja!==0&&(Ja=0)}function W0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Nt(h),C=1<<S,H=c[S];H===-1?((C&a)===0||(C&o)!==0)&&(c[S]=ae(C,n)):H<=n&&(e.expiredLanes|=C),h&=~C}if(n=Xe,a=Me,a=ct(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Oe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Oe(o),Kr(a)){case 2:case 8:a=xt;break;case 32:a=ft;break;case 268435456:a=wt;break;default:a=ft}return o=X0.bind(null,e),a=Ae(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Oe(o),e.callbackPriority=2,e.callbackNode=null,2}function X0(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(xu()&&e.callbackNode!==a)return null;var o=Me;return o=ct(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(A0(e,o,n),W0(e,E()),e.callbackNode!=null&&e.callbackNode===a?X0.bind(null,e):null)}function Y0(e,n){if(xu())return null;A0(e,n,!0)}function AS(){BS(function(){(Ne&6)!==0?Ae(pt,TS):k0()})}function vh(){if(Ja===0){var e=cs;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Ja=e}return Ja}function q0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dl(""+e)}function j0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function RS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=q0((c[gn]||null).action),S=o.submitter;S&&(n=(n=S[gn]||null)?q0(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var C=new Ol("action","action",null,o,c);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var H=S?j0(c,S):new FormData(c);Bf(a,{pending:!0,data:H,method:c.method,action:h},null,H)}}else typeof h=="function"&&(C.preventDefault(),H=S?j0(c,S):new FormData(c),Bf(a,{pending:!0,data:H,method:c.method,action:h},h,H))},currentTarget:c}]})}}for(var yh=0;yh<tf.length;yh++){var xh=tf[yh],CS=xh.toLowerCase(),wS=xh[0].toUpperCase()+xh.slice(1);Ci(CS,"on"+wS)}Ci(Tm,"onAnimationEnd"),Ci(Am,"onAnimationIteration"),Ci(Rm,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(Xx,"onTransitionRun"),Ci(Yx,"onTransitionStart"),Ci(qx,"onTransitionCancel"),Ci(Cm,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function Z0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var C=o[S],H=C.instance,nt=C.currentTarget;if(C=C.listener,H!==h&&c.isPropagationStopped())break t;h=C,c.currentTarget=nt;try{h(c)}catch(dt){Fl(dt)}c.currentTarget=null,h=H}else for(S=0;S<o.length;S++){if(C=o[S],H=C.instance,nt=C.currentTarget,C=C.listener,H!==h&&c.isPropagationStopped())break t;h=C,c.currentTarget=nt;try{h(c)}catch(dt){Fl(dt)}c.currentTarget=null,h=H}}}}function xe(e,n){var a=n[Na];a===void 0&&(a=n[Na]=new Set);var o=e+"__bubble";a.has(o)||(K0(n,e,2,!1),a.add(o))}function Sh(e,n,a){var o=0;n&&(o|=4),K0(a,e,o,n)}var bu="_reactListening"+Math.random().toString(36).slice(2);function Mh(e){if(!e[bu]){e[bu]=!0,lt.forEach(function(a){a!=="selectionchange"&&(DS.has(a)||Sh(a,!1,e),Sh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[bu]||(n[bu]=!0,Sh("selectionchange",!1,n))}}function K0(e,n,a,o){switch(T_(n)){case 2:var c=aM;break;case 8:c=rM;break;default:c=Fh}a=c.bind(null,n,a,e),c=void 0,!Gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function bh(e,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var C=o.stateNode.containerInfo;if(C===c)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;C!==null;){if(S=Oa(C),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=h=S;continue t}C=C.parentNode}}o=o.return}em(function(){var nt=h,dt=zc(a),yt=[];t:{var at=wm.get(e);if(at!==void 0){var ut=Ol,Vt=e;switch(e){case"keypress":if(Ul(a)===0)break t;case"keydown":case"keyup":ut=bx;break;case"focusin":Vt="focus",ut=Xc;break;case"focusout":Vt="blur",ut=Xc;break;case"beforeblur":case"afterblur":ut=Xc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Ax;break;case Tm:case Am:case Rm:ut=px;break;case Cm:ut=Cx;break;case"scroll":case"scrollend":ut=ux;break;case"wheel":ut=Dx;break;case"copy":case"cut":case"paste":ut=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=sm;break;case"toggle":case"beforetoggle":ut=Ux}var te=(n&4)!==0,ke=!te&&(e==="scroll"||e==="scrollend"),K=te?at!==null?at+"Capture":null:at;te=[];for(var k=nt,et;k!==null;){var gt=k;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||K===null||(gt=uo(k,K),gt!=null&&te.push(ko(k,gt,et))),ke)break;k=k.return}0<te.length&&(at=new ut(at,Vt,null,a,dt),yt.push({event:at,listeners:te}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",at&&a!==Bc&&(Vt=a.relatedTarget||a.fromElement)&&(Oa(Vt)||Vt[ta]))break t;if((ut||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,ut?(Vt=a.relatedTarget||a.toElement,ut=nt,Vt=Vt?Oa(Vt):null,Vt!==null&&(ke=u(Vt),te=Vt.tag,Vt!==ke||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ut=null,Vt=nt),ut!==Vt)){if(te=am,gt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=sm,gt="onPointerLeave",K="onPointerEnter",k="pointer"),ke=ut==null?at:vr(ut),et=Vt==null?at:vr(Vt),at=new te(gt,k+"leave",ut,a,dt),at.target=ke,at.relatedTarget=et,gt=null,Oa(dt)===nt&&(te=new te(K,k+"enter",Vt,a,dt),te.target=et,te.relatedTarget=ke,gt=te),ke=gt,ut&&Vt)e:{for(te=LS,K=ut,k=Vt,et=0,gt=K;gt;gt=te(gt))et++;gt=0;for(var Qt=k;Qt;Qt=te(Qt))gt++;for(;0<et-gt;)K=te(K),et--;for(;0<gt-et;)k=te(k),gt--;for(;et--;){if(K===k||k!==null&&K===k.alternate){te=K;break e}K=te(K),k=te(k)}te=null}else te=null;ut!==null&&Q0(yt,at,ut,te,!1),Vt!==null&&ke!==null&&Q0(yt,ke,Vt,te,!0)}}t:{if(at=nt?vr(nt):window,ut=at.nodeName&&at.nodeName.toLowerCase(),ut==="select"||ut==="input"&&at.type==="file")var Le=pm;else if(hm(at))if(mm)Le=Vx;else{Le=Hx;var qt=zx}else ut=at.nodeName,!ut||ut.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?nt&&Jr(nt.elementType)&&(Le=pm):Le=Gx;if(Le&&(Le=Le(e,nt))){dm(yt,Le,a,dt);break t}qt&&qt(e,at,nt),e==="focusout"&&nt&&at.type==="number"&&nt.memoizedProps.value!=null&&Ai(at,"number",at.value)}switch(qt=nt?vr(nt):window,e){case"focusin":(hm(qt)||qt.contentEditable==="true")&&(ns=qt,Qc=nt,vo=null);break;case"focusout":vo=Qc=ns=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,bm(yt,a,dt);break;case"selectionchange":if(Wx)break;case"keydown":case"keyup":bm(yt,a,dt)}var he;if(qc)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else es?cm(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(om&&a.locale!=="ko"&&(es||be!=="onCompositionStart"?be==="onCompositionEnd"&&es&&(he=nm()):(Ia=dt,Vc="value"in Ia?Ia.value:Ia.textContent,es=!0)),qt=Eu(nt,be),0<qt.length&&(be=new rm(be,e,null,a,dt),yt.push({event:be,listeners:qt}),he?be.data=he:(he=fm(a),he!==null&&(be.data=he)))),(he=Ox?Px(e,a):Ix(e,a))&&(be=Eu(nt,"onBeforeInput"),0<be.length&&(qt=new rm("onBeforeInput","beforeinput",null,a,dt),yt.push({event:qt,listeners:be}),qt.data=he)),RS(yt,e,nt,a,dt)}Z0(yt,n)})}function ko(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Eu(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=uo(e,a),c!=null&&o.unshift(ko(e,c,h)),c=uo(e,n),c!=null&&o.push(ko(e,c,h))),e.tag===3)return o;e=e.return}return[]}function LS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Q0(e,n,a,o,c){for(var h=n._reactName,S=[];a!==null&&a!==o;){var C=a,H=C.alternate,nt=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||nt===null||(H=nt,c?(nt=uo(a,h),nt!=null&&S.unshift(ko(a,nt,H))):c||(nt=uo(a,h),nt!=null&&S.push(ko(a,nt,H)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var US=/\r\n?/g,NS=/\u0000|\uFFFD/g;function J0(e){return(typeof e=="string"?e:""+e).replace(US,`
`).replace(NS,"")}function $0(e,n){return n=J0(n),J0(e)===n}function Ve(e,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":se(e,"class",o);break;case"tabIndex":se(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":se(e,a,o);break;case"style":ea(e,o,h);break;case"data":if(n!=="object"){se(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Dl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",c.name,c,null),Ve(e,n,"formEncType",c.formEncType,c,null),Ve(e,n,"formMethod",c.formMethod,c,null),Ve(e,n,"formTarget",c.formTarget,c,null)):(Ve(e,n,"encType",c.encType,c,null),Ve(e,n,"method",c.method,c,null),Ve(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Dl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=na);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ie(e,"popover",o);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ie(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ox.get(a)||a,ie(e,a,o))}}function Eh(e,n,a,o,c,h){switch(a){case"style":ea(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=e[gn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ie(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,h,S,a,null)}}c&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var C=h=S=c=null,H=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":c=dt;break;case"type":S=dt;break;case"checked":H=dt;break;case"defaultChecked":nt=dt;break;case"value":h=dt;break;case"defaultValue":C=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ve(e,n,o,dt,a,null)}}$n(e,h,C,H,nt,S,c,!1);return;case"select":xe("invalid",e),o=S=h=null;for(c in a)if(a.hasOwnProperty(c)&&(C=a[c],C!=null))switch(c){case"value":h=C;break;case"defaultValue":S=C;break;case"multiple":o=C;default:Ve(e,n,c,C,a,null)}n=h,a=S,e.multiple=!!o,n!=null?ti(e,!!o,n,!1):a!=null&&ti(e,!!o,a,!0);return;case"textarea":xe("invalid",e),h=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(C=a[S],C!=null))switch(S){case"value":o=C;break;case"defaultValue":c=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Ve(e,n,S,C,a,null)}un(e,o,c,h);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,H,o,a,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Vo.length;o++)xe(Vo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,nt,o,a,null)}return;default:if(Jr(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&Eh(e,n,dt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Ve(e,n,C,o,a,null))}function OS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,S=null,C=null,H=null,nt=null,dt=null;for(ut in a){var yt=a[ut];if(a.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=yt;default:o.hasOwnProperty(ut)||Ve(e,n,ut,null,o,yt)}}for(var at in o){var ut=o[at];if(yt=a[at],o.hasOwnProperty(at)&&(ut!=null||yt!=null))switch(at){case"type":h=ut;break;case"name":c=ut;break;case"checked":nt=ut;break;case"defaultChecked":dt=ut;break;case"value":S=ut;break;case"defaultValue":C=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==yt&&Ve(e,n,at,ut,o,yt)}}Bn(e,S,C,H,nt,dt,h,c);return;case"select":ut=S=C=at=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ut=H;default:o.hasOwnProperty(h)||Ve(e,n,h,null,o,H)}for(c in o)if(h=o[c],H=a[c],o.hasOwnProperty(c)&&(h!=null||H!=null))switch(c){case"value":at=h;break;case"defaultValue":C=h;break;case"multiple":S=h;default:h!==H&&Ve(e,n,c,h,o,H)}n=C,a=S,o=ut,at!=null?ti(e,!!a,at,!1):!!o!=!!a&&(n!=null?ti(e,!!a,n,!0):ti(e,!!a,a?[]:"",!1));return;case"textarea":ut=at=null;for(C in a)if(c=a[C],a.hasOwnProperty(C)&&c!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ve(e,n,C,null,o,c)}for(S in o)if(c=o[S],h=a[S],o.hasOwnProperty(S)&&(c!=null||h!=null))switch(S){case"value":at=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&Ve(e,n,S,c,o,h)}Pe(e,at,ut);return;case"option":for(var Vt in a)at=a[Vt],a.hasOwnProperty(Vt)&&at!=null&&!o.hasOwnProperty(Vt)&&(Vt==="selected"?e.selected=!1:Ve(e,n,Vt,null,o,at));for(H in o)at=o[H],ut=a[H],o.hasOwnProperty(H)&&at!==ut&&(at!=null||ut!=null)&&(H==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":Ve(e,n,H,at,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)at=a[te],a.hasOwnProperty(te)&&at!=null&&!o.hasOwnProperty(te)&&Ve(e,n,te,null,o,at);for(nt in o)if(at=o[nt],ut=a[nt],o.hasOwnProperty(nt)&&at!==ut&&(at!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Ve(e,n,nt,at,o,ut)}return;default:if(Jr(n)){for(var ke in a)at=a[ke],a.hasOwnProperty(ke)&&at!==void 0&&!o.hasOwnProperty(ke)&&Eh(e,n,ke,void 0,o,at);for(dt in o)at=o[dt],ut=a[dt],!o.hasOwnProperty(dt)||at===ut||at===void 0&&ut===void 0||Eh(e,n,dt,at,o,ut);return}}for(var K in a)at=a[K],a.hasOwnProperty(K)&&at!=null&&!o.hasOwnProperty(K)&&Ve(e,n,K,null,o,at);for(yt in o)at=o[yt],ut=a[yt],!o.hasOwnProperty(yt)||at===ut||at==null&&ut==null||Ve(e,n,yt,at,o,ut)}function t_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function PS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],h=c.transferSize,S=c.initiatorType,C=c.duration;if(h&&C&&t_(S)){for(S=0,C=c.responseEnd,o+=1;o<a.length;o++){var H=a[o],nt=H.startTime;if(nt>C)break;var dt=H.transferSize,yt=H.initiatorType;dt&&t_(yt)&&(H=H.responseEnd,S+=dt*(H<C?1:(C-nt)/(H-nt)))}if(--o,n+=8*(h+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Th=null,Ah=null;function Tu(e){return e.nodeType===9?e:e.ownerDocument}function e_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ch=null;function IS(){var e=window.event;return e&&e.type==="popstate"?e===Ch?!1:(Ch=e,!0):(Ch=null,!1)}var i_=typeof setTimeout=="function"?setTimeout:void 0,FS=typeof clearTimeout=="function"?clearTimeout:void 0,a_=typeof Promise=="function"?Promise:void 0,BS=typeof queueMicrotask=="function"?queueMicrotask:typeof a_<"u"?function(e){return a_.resolve(null).then(e).catch(zS)}:i_;function zS(e){setTimeout(function(){throw e})}function $a(e){return e==="head"}function r_(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),ws(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Wo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Wo(a);for(var h=a.firstChild;h;){var S=h.nextSibling,C=h.nodeName;h[_r]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&Wo(e.ownerDocument.body);a=c}while(a);ws(n)}function s_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function wh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wh(a),lo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function HS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[_r])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function GS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function o_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vi(e.nextSibling),e===null))return null;return e}function Dh(e){return e.data==="$?"||e.data==="$~"}function Lh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function VS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Uh=null;function l_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return vi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function u_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function c_(e,n,a){switch(n=Tu(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Wo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);lo(e)}var yi=new Map,f_=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=z.d;z.d={f:kS,r:WS,D:XS,C:YS,L:qS,m:jS,X:KS,S:ZS,M:QS};function kS(){var e=va.f(),n=_u();return e||n}function WS(e){var n=Pa(e);n!==null&&n.tag===5&&n.type==="form"?Cg(n):va.r(e)}var As=typeof document>"u"?null:document;function h_(e,n,a){var o=As;if(o&&typeof n=="string"&&n){var c=re(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),f_.has(c)||(f_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Rn(n,"link",e),W(n),o.head.appendChild(n)))}}function XS(e){va.D(e),h_("dns-prefetch",e,null)}function YS(e,n){va.C(e,n),h_("preconnect",e,n)}function qS(e,n,a){va.L(e,n,a);var o=As;if(o&&e&&n){var c='link[rel="preload"][as="'+re(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+re(a.imageSizes)+'"]')):c+='[href="'+re(e)+'"]';var h=c;switch(n){case"style":h=Rs(e);break;case"script":h=Cs(e)}yi.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),yi.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Xo(h))||n==="script"&&o.querySelector(Yo(h))||(n=o.createElement("link"),Rn(n,"link",e),W(n),o.head.appendChild(n)))}}function jS(e,n){va.m(e,n);var a=As;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+re(o)+'"][href="'+re(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Cs(e)}if(!yi.has(h)&&(e=v({rel:"modulepreload",href:e},n),yi.set(h,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yo(h)))return}o=a.createElement("link"),Rn(o,"link",e),W(o),a.head.appendChild(o)}}}function ZS(e,n,a){va.S(e,n,a);var o=As;if(o&&e){var c=w(o).hoistableStyles,h=Rs(e);n=n||"default";var S=c.get(h);if(!S){var C={loading:0,preload:null};if(S=o.querySelector(Xo(h)))C.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=yi.get(h))&&Nh(e,a);var H=S=o.createElement("link");W(H),Rn(H,"link",e),H._p=new Promise(function(nt,dt){H.onload=nt,H.onerror=dt}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Ru(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:C},c.set(h,S)}}}function KS(e,n){va.X(e,n);var a=As;if(a&&e){var o=w(a).hoistableScripts,c=Cs(e),h=o.get(c);h||(h=a.querySelector(Yo(c)),h||(e=v({src:e,async:!0},n),(n=yi.get(c))&&Oh(e,n),h=a.createElement("script"),W(h),Rn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function QS(e,n){va.M(e,n);var a=As;if(a&&e){var o=w(a).hoistableScripts,c=Cs(e),h=o.get(c);h||(h=a.querySelector(Yo(c)),h||(e=v({src:e,async:!0,type:"module"},n),(n=yi.get(c))&&Oh(e,n),h=a.createElement("script"),W(h),Rn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function d_(e,n,a,o){var c=(c=$.current)?Au(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Rs(a.href),a=w(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Rs(a.href);var h=w(c).hoistableStyles,S=h.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=c.querySelector(Xo(e)))&&!h._p&&(S.instance=h,S.state.loading=5),yi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(e,a),h||JS(c,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Cs(a),a=w(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Rs(e){return'href="'+re(e)+'"'}function Xo(e){return'link[rel="stylesheet"]['+e+"]"}function p_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function JS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),W(n),e.head.appendChild(n))}function Cs(e){return'[src="'+re(e)+'"]'}function Yo(e){return"script[async]"+e}function m_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+re(a.href)+'"]');if(o)return n.instance=o,W(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),W(o),Rn(o,"style",c),Ru(o,a.precedence,e),n.instance=o;case"stylesheet":c=Rs(a.href);var h=e.querySelector(Xo(c));if(h)return n.state.loading|=4,n.instance=h,W(h),h;o=p_(a),(c=yi.get(c))&&Nh(o,c),h=(e.ownerDocument||e).createElement("link"),W(h);var S=h;return S._p=new Promise(function(C,H){S.onload=C,S.onerror=H}),Rn(h,"link",o),n.state.loading|=4,Ru(h,a.precedence,e),n.instance=h;case"script":return h=Cs(a.src),(c=e.querySelector(Yo(h)))?(n.instance=c,W(c),c):(o=a,(c=yi.get(h))&&(o=v({},a),Oh(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),W(c),Rn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ru(o,a.precedence,e));return n.instance}function Ru(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,S=0;S<o.length;S++){var C=o[S];if(C.dataset.precedence===n)h=C;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Nh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Cu=null;function g_(e,n,a){if(Cu===null){var o=new Map,c=Cu=new Map;c.set(a,o)}else c=Cu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[_r]||h[ln]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var C=o.get(S);C?C.push(h):o.set(S,[h])}}return o}function __(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function $S(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function v_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Rs(o.href),h=n.querySelector(Xo(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=wu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,W(h);return}h=n.ownerDocument||n,o=p_(o),(c=yi.get(c))&&Nh(o,c),h=h.createElement("link"),W(h);var S=h;S._p=new Promise(function(C,H){S.onload=C,S.onerror=H}),Rn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ph=0;function eM(e,n){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Ph===0&&(Ph=62500*PS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Ph?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function wu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Du=null;function Lu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Du=new Map,n.forEach(nM,e),Du=null,wu.call(e))}function nM(e,n){if(!(n.state.loading&4)){var a=Du.get(e);if(a)var o=a.get(null);else{a=new Map,Du.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var S=c[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,c),a.set(S,c),this.count++,o=wu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var qo={$$typeof:D,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function iM(e,n,a,o,c,h,S,C,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function y_(e,n,a,o,c,h,S,C,H,nt,dt,yt){return e=new iM(e,n,a,S,H,nt,dt,yt,C),n=1,h===!0&&(n|=24),h=ni(3,null,null,n),e.current=h,h.stateNode=e,n=pf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},vf(h),e}function x_(e){return e?(e=rs,e):rs}function S_(e,n,a,o,c,h){c=x_(c),o.context===null?o.context=c:o.pendingContext=c,o=Va(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ka(e,o,n),a!==null&&(Zn(a,e,n),To(a,e,n))}function M_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ih(e,n){M_(e,n),(e=e.alternate)&&M_(e,n)}function b_(e){if(e.tag===13||e.tag===31){var n=Mr(e,67108864);n!==null&&Zn(n,e,67108864),Ih(e,67108864)}}function E_(e){if(e.tag===13||e.tag===31){var n=oi();n=Zr(n);var a=Mr(e,n);a!==null&&Zn(a,e,n),Ih(e,n)}}var Uu=!0;function aM(e,n,a,o){var c=N.T;N.T=null;var h=z.p;try{z.p=2,Fh(e,n,a,o)}finally{z.p=h,N.T=c}}function rM(e,n,a,o){var c=N.T;N.T=null;var h=z.p;try{z.p=8,Fh(e,n,a,o)}finally{z.p=h,N.T=c}}function Fh(e,n,a,o){if(Uu){var c=Bh(o);if(c===null)bh(e,n,o,Nu,a),A_(e,o);else if(oM(c,e,n,a,o))o.stopPropagation();else if(A_(e,o),n&4&&-1<sM.indexOf(e)){for(;c!==null;){var h=Pa(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Et(h.pendingLanes);if(S!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var H=1<<31-Nt(S);C.entanglements[1]|=H,S&=~H}Gi(h),(Ne&6)===0&&(mu=E()+500,Go(0))}}break;case 31:case 13:C=Mr(h,2),C!==null&&Zn(C,h,2),_u(),Ih(h,2)}if(h=Bh(o),h===null&&bh(e,n,o,Nu,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else bh(e,n,o,null,a)}}function Bh(e){return e=zc(e),zh(e)}var Nu=null;function zh(e){if(Nu=null,e=Oa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Nu=e,null}function T_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case xt:return 8;case ft:case Wt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Hh=!1,tr=null,er=null,nr=null,jo=new Map,Zo=new Map,ir=[],sM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A_(e,n){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(n.pointerId)}}function Ko(e,n,a,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Pa(n),n!==null&&b_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function oM(e,n,a,o,c){switch(n){case"focusin":return tr=Ko(tr,e,n,a,o,c),!0;case"dragenter":return er=Ko(er,e,n,a,o,c),!0;case"mouseover":return nr=Ko(nr,e,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return jo.set(h,Ko(jo.get(h)||null,e,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Zo.set(h,Ko(Zo.get(h)||null,e,n,a,o,c)),!0}return!1}function R_(e){var n=Oa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Qr(e.priority,function(){E_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Qr(e.priority,function(){E_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ou(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Bh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Bc=o,a.target.dispatchEvent(o),Bc=null}else return n=Pa(a),n!==null&&b_(n),e.blockedOn=a,!1;n.shift()}return!0}function C_(e,n,a){Ou(e)&&a.delete(n)}function lM(){Hh=!1,tr!==null&&Ou(tr)&&(tr=null),er!==null&&Ou(er)&&(er=null),nr!==null&&Ou(nr)&&(nr=null),jo.forEach(C_),Zo.forEach(C_)}function Pu(e,n){e.blockedOn===n&&(e.blockedOn=null,Hh||(Hh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,lM)))}var Iu=null;function w_(e){Iu!==e&&(Iu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Iu===e&&(Iu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(zh(o||a)===null)continue;break}var h=Pa(a);h!==null&&(e.splice(n,3),n-=3,Bf(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function ws(e){function n(H){return Pu(H,e)}tr!==null&&Pu(tr,e),er!==null&&Pu(er,e),nr!==null&&Pu(nr,e),jo.forEach(n),Zo.forEach(n);for(var a=0;a<ir.length;a++){var o=ir[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)R_(a),a.blockedOn===null&&ir.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],S=c[gn]||null;if(typeof h=="function")S||w_(a);else if(S){var C=null;if(h&&h.hasAttribute("formAction")){if(c=h,S=h[gn]||null)C=S.formAction;else if(zh(c)!==null)continue}else C=S.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),w_(a)}}}function D_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Gh(e){this._internalRoot=e}Fu.prototype.render=Gh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=oi();S_(a,o,e,n,null,null)},Fu.prototype.unmount=Gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;S_(e.current,2,null,e,null,null),_u(),n[ta]=null}};function Fu(e){this._internalRoot=e}Fu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ir.length&&n!==0&&n<ir[a].priority;a++);ir.splice(a,0,e),a===0&&R_(e)}};var L_=t.version;if(L_!=="19.2.4")throw Error(r(527,L_,"19.2.4"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=d(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var uM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{Tt=Bu.inject(uM),bt=Bu}catch{}}return Jo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Bg,h=zg,S=Hg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=y_(e,1,!1,null,null,a,o,null,c,h,S,D_),e[ta]=n.current,Mh(e),new Gh(n)},Jo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",h=Bg,S=zg,C=Hg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=y_(e,1,!0,n,a??null,o,c,H,h,S,C,D_),n.context=x_(null),a=n.current,o=oi(),o=Zr(o),c=Va(o),c.callback=null,ka(a,c,o),a=o,n.current.lanes=a,In(n,a),Gi(n),e[ta]=n.current,Mh(e),new Fu(n)},Jo.version="19.2.4",Jo}var G_;function yM(){if(G_)return Wh.exports;G_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Wh.exports=vM(),Wh.exports}var xM=yM();var V_="popstate";function k_(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function SM(s={}){function t(r,l){let u=l.state?.masked,{pathname:f,search:p,hash:m}=u||r.location;return Nd("",{pathname:f,search:p,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:ml(l)}return bM(t,i,null,s)}function en(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ki(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function MM(){return Math.random().toString(36).substring(2,10)}function W_(s,t){return{usr:s.state,key:s.key,idx:t,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Nd(s,t,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?ao(t):t,state:i,key:t&&t.key||r||MM(),unstable_mask:l}}function ml({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function ao(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function bM(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,p="POP",m=null,d=_();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function _(){return(f.state||{idx:null}).idx}function v(){p="POP";let y=_(),x=y==null?null:y-d;d=y,m&&m({action:p,location:R.location,delta:x})}function g(y,x){p="PUSH";let A=k_(y)?y:Nd(R.location,y,x);d=_()+1;let D=W_(A,d),L=R.createHref(A.unstable_mask||A);try{f.pushState(D,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(L)}u&&m&&m({action:p,location:R.location,delta:1})}function M(y,x){p="REPLACE";let A=k_(y)?y:Nd(R.location,y,x);d=_();let D=W_(A,d),L=R.createHref(A.unstable_mask||A);f.replaceState(D,"",L),u&&m&&m({action:p,location:R.location,delta:0})}function b(y){return EM(y)}let R={get action(){return p},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(V_,v),m=y,()=>{l.removeEventListener(V_,v),m=null}},createHref(y){return t(l,y)},createURL:b,encodeLocation(y){let x=b(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:M,go(y){return f.go(y)}};return R}function EM(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),en(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:ml(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function ey(s,t,i="/"){return TM(s,t,i,!1)}function TM(s,t,i,r){let l=typeof t=="string"?ao(t):t,u=wa(l.pathname||"/",i);if(u==null)return null;let f=ny(s);AM(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let d=FM(u);p=PM(f[m],d,r)}return p}function ny(s,t=[],i=[],r="",l=!1){let u=(f,p,m=l,d)=>{let _={relativePath:d===void 0?f.path||"":d,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(r)&&m)return;en(_.relativePath.startsWith(r),`Absolute route path "${_.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(r.length)}let v=qi([r,_.relativePath]),g=i.concat(_);f.children&&f.children.length>0&&(en(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),ny(f.children,t,g,v,m)),!(f.path==null&&!f.index)&&t.push({path:v,score:NM(v,f.index),routesMeta:g})};return s.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))u(f,p);else for(let m of iy(f.path))u(f,p,!0,m)}),t}function iy(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=iy(r.join("/")),p=[];return p.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&p.push(...f),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function AM(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:OM(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var RM=/^:[\w-]+$/,CM=3,wM=2,DM=1,LM=10,UM=-2,X_=s=>s==="*";function NM(s,t){let i=s.split("/"),r=i.length;return i.some(X_)&&(r+=UM),t&&(r+=wM),i.filter(l=>!X_(l)).reduce((l,u)=>l+(RM.test(u)?CM:u===""?DM:LM),r)}function OM(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function PM(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],d=p===r.length-1,_=u==="/"?t:t.slice(u.length)||"/",v=Mc({path:m.relativePath,caseSensitive:m.caseSensitive,end:d},_),g=m.route;if(!v&&d&&i&&!r[r.length-1].route.index&&(v=Mc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:qi([u,v.pathname]),pathnameBase:GM(qi([u,v.pathnameBase])),route:g}),v.pathnameBase!=="/"&&(u=qi([u,v.pathnameBase]))}return f}function Mc(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=IM(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((d,{paramName:_,isOptional:v},g)=>{if(_==="*"){let b=p[g]||"";f=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const M=p[g];return v&&!M?d[_]=void 0:d[_]=(M||"").replace(/%2F/g,"/"),d},{}),pathname:u,pathnameBase:f,pattern:s}}function IM(s,t=!1,i=!0){Ki(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m,d,_)=>{if(r.push({paramName:p,isOptional:m!=null}),m){let v=_.charAt(d+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function FM(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ki(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function wa(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var BM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function zM(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?ao(s):s,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=Y_(i.substring(1),"/"):u=Y_(i,t)):u=t,{pathname:u,search:VM(r),hash:kM(l)}}function Y_(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function jh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function HM(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function ay(s){let t=HM(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Lp(s,t,i,r=!1){let l;typeof s=="string"?l=ao(s):(l={...s},en(!l.pathname||!l.pathname.includes("?"),jh("?","pathname","search",l)),en(!l.pathname||!l.pathname.includes("#"),jh("#","pathname","hash",l)),en(!l.search||!l.search.includes("#"),jh("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,p;if(f==null)p=i;else{let v=t.length-1;if(!r&&f.startsWith("..")){let g=f.split("/");for(;g[0]==="..";)g.shift(),v-=1;l.pathname=g.join("/")}p=v>=0?t[v]:"/"}let m=zM(l,p),d=f&&f!=="/"&&f.endsWith("/"),_=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(d||_)&&(m.pathname+="/"),m}var qi=s=>s.join("/").replace(/\/\/+/g,"/"),GM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),VM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,kM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,WM=class{constructor(s,t,i,r=!1){this.status=s,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function XM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function YM(s){return s.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ry=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function sy(s,t){let i=s;if(typeof i!="string"||!BM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(ry)try{let u=new URL(window.location.href),f=i.startsWith("//")?new URL(u.protocol+i):new URL(i),p=wa(f.pathname,t);f.origin===u.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Ki(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var oy=["POST","PUT","PATCH","DELETE"];new Set(oy);var qM=["GET",...oy];new Set(qM);var ro=mt.createContext(null);ro.displayName="DataRouter";var Lc=mt.createContext(null);Lc.displayName="DataRouterState";var jM=mt.createContext(!1),ly=mt.createContext({isTransitioning:!1});ly.displayName="ViewTransition";var ZM=mt.createContext(new Map);ZM.displayName="Fetchers";var KM=mt.createContext(null);KM.displayName="Await";var bi=mt.createContext(null);bi.displayName="Navigation";var Sl=mt.createContext(null);Sl.displayName="Location";var Ua=mt.createContext({outlet:null,matches:[],isDataRoute:!1});Ua.displayName="Route";var Up=mt.createContext(null);Up.displayName="RouteError";var uy="REACT_ROUTER_ERROR",QM="REDIRECT",JM="ROUTE_ERROR_RESPONSE";function $M(s){if(s.startsWith(`${uy}:${QM}:{`))try{let t=JSON.parse(s.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function tb(s){if(s.startsWith(`${uy}:${JM}:{`))try{let t=JSON.parse(s.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new WM(t.status,t.statusText,t.data)}catch{}}function eb(s,{relative:t}={}){en(Ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=mt.useContext(bi),{hash:l,pathname:u,search:f}=bl(s,{relative:t}),p=u;return i!=="/"&&(p=u==="/"?i:qi([i,u])),r.createHref({pathname:p,search:f,hash:l})}function Ml(){return mt.useContext(Sl)!=null}function gr(){return en(Ml(),"useLocation() may be used only in the context of a <Router> component."),mt.useContext(Sl).location}var cy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fy(s){mt.useContext(bi).static||mt.useLayoutEffect(s)}function nb(){let{isDataRoute:s}=mt.useContext(Ua);return s?mb():ib()}function ib(){en(Ml(),"useNavigate() may be used only in the context of a <Router> component.");let s=mt.useContext(ro),{basename:t,navigator:i}=mt.useContext(bi),{matches:r}=mt.useContext(Ua),{pathname:l}=gr(),u=JSON.stringify(ay(r)),f=mt.useRef(!1);return fy(()=>{f.current=!0}),mt.useCallback((m,d={})=>{if(Ki(f.current,cy),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=Lp(m,JSON.parse(u),l,d.relative==="path");s==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:qi([t,_.pathname])),(d.replace?i.replace:i.push)(_,d.state,d)},[t,i,u,l,s])}mt.createContext(null);function bl(s,{relative:t}={}){let{matches:i}=mt.useContext(Ua),{pathname:r}=gr(),l=JSON.stringify(ay(i));return mt.useMemo(()=>Lp(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function ab(s,t){return hy(s,t)}function hy(s,t,i){en(Ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=mt.useContext(bi),{matches:l}=mt.useContext(Ua),u=l[l.length-1],f=u?u.params:{},p=u?u.pathname:"/",m=u?u.pathnameBase:"/",d=u&&u.route;{let y=d&&d.path||"";py(p,!d||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let _=gr(),v;if(t){let y=typeof t=="string"?ao(t):t;en(m==="/"||y.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${y.pathname}" was given in the \`location\` prop.`),v=y}else v=_;let g=v.pathname||"/",M=g;if(m!=="/"){let y=m.replace(/^\//,"").split("/");M="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=ey(s,{pathname:M});Ki(d||b!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ki(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=ub(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:qi([m,r.encodeLocation?r.encodeLocation(y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?m:qi([m,r.encodeLocation?r.encodeLocation(y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),l,i);return t&&R?mt.createElement(Sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},R):R}function rb(){let s=pb(),t=XM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=mt.createElement(mt.Fragment,null,mt.createElement("p",null,"💿 Hey developer 👋"),mt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",mt.createElement("code",{style:u},"ErrorBoundary")," or"," ",mt.createElement("code",{style:u},"errorElement")," prop on your route.")),mt.createElement(mt.Fragment,null,mt.createElement("h2",null,"Unexpected Application Error!"),mt.createElement("h3",{style:{fontStyle:"italic"}},t),i?mt.createElement("pre",{style:l},i):null,f)}var sb=mt.createElement(rb,null),dy=class extends mt.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=tb(s.digest);i&&(s=i)}let t=s!==void 0?mt.createElement(Ua.Provider,{value:this.props.routeContext},mt.createElement(Up.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?mt.createElement(ob,{error:s},t):t}};dy.contextType=jM;var Zh=new WeakMap;function ob({children:s,error:t}){let{basename:i}=mt.useContext(bi);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=$M(t.digest);if(r){let l=Zh.get(t);if(l)throw l;let u=sy(r.location,i);if(ry&&!Zh.get(t))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw Zh.set(t,f),f}return mt.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return s}function lb({routeContext:s,match:t,children:i}){let r=mt.useContext(ro);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),mt.createElement(Ua.Provider,{value:s},i)}function ub(s,t=[],i){let r=i?.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,u=r?.errors;if(u!=null){let _=l.findIndex(v=>v.route.id&&u?.[v.route.id]!==void 0);en(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,_+1))}let f=!1,p=-1;if(i&&r){f=r.renderFallback;for(let _=0;_<l.length;_++){let v=l[_];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=_),v.route.id){let{loaderData:g,errors:M}=r,b=v.route.loader&&!g.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||b){i.isStatic&&(f=!0),p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}}let m=i?.onError,d=r&&m?(_,v)=>{m(_,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:YM(r.matches),errorInfo:v})}:void 0;return l.reduceRight((_,v,g)=>{let M,b=!1,R=null,y=null;r&&(M=u&&v.route.id?u[v.route.id]:void 0,R=v.route.errorElement||sb,f&&(p<0&&g===0?(py("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):p===g&&(b=!0,y=v.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,g+1)),A=()=>{let D;return M?D=R:b?D=y:v.route.Component?D=mt.createElement(v.route.Component,null):v.route.element?D=v.route.element:D=_,mt.createElement(lb,{match:v,routeContext:{outlet:_,matches:x,isDataRoute:r!=null},children:D})};return r&&(v.route.ErrorBoundary||v.route.errorElement||g===0)?mt.createElement(dy,{location:r.location,revalidation:r.revalidation,component:R,error:M,children:A(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:d}):A()},null)}function Np(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cb(s){let t=mt.useContext(ro);return en(t,Np(s)),t}function fb(s){let t=mt.useContext(Lc);return en(t,Np(s)),t}function hb(s){let t=mt.useContext(Ua);return en(t,Np(s)),t}function Op(s){let t=hb(s),i=t.matches[t.matches.length-1];return en(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function db(){return Op("useRouteId")}function pb(){let s=mt.useContext(Up),t=fb("useRouteError"),i=Op("useRouteError");return s!==void 0?s:t.errors?.[i]}function mb(){let{router:s}=cb("useNavigate"),t=Op("useNavigate"),i=mt.useRef(!1);return fy(()=>{i.current=!0}),mt.useCallback(async(l,u={})=>{Ki(i.current,cy),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var q_={};function py(s,t,i){!t&&!q_[s]&&(q_[s]=!0,Ki(!1,i))}mt.memo(gb);function gb({routes:s,future:t,state:i,isStatic:r,onError:l}){return hy(s,void 0,{state:i,isStatic:r,onError:l})}function Od(s){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _b({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,unstable_useTransitions:f}){en(!Ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=mt.useMemo(()=>({basename:p,navigator:l,static:u,unstable_useTransitions:f,future:{}}),[p,l,u,f]);typeof i=="string"&&(i=ao(i));let{pathname:d="/",search:_="",hash:v="",state:g=null,key:M="default",unstable_mask:b}=i,R=mt.useMemo(()=>{let y=wa(d,p);return y==null?null:{location:{pathname:y,search:_,hash:v,state:g,key:M,unstable_mask:b},navigationType:r}},[p,d,_,v,g,M,r,b]);return Ki(R!=null,`<Router basename="${p}"> is not able to match the URL "${d}${_}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:mt.createElement(bi.Provider,{value:m},mt.createElement(Sl.Provider,{children:t,value:R}))}function vb({children:s,location:t}){return ab(Pd(s),t)}function Pd(s,t=[]){let i=[];return mt.Children.forEach(s,(r,l)=>{if(!mt.isValidElement(r))return;let u=[...t,l];if(r.type===mt.Fragment){i.push.apply(i,Pd(r.props.children,u));return}en(r.type===Od,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Pd(r.props.children,u)),i.push(f)}),i}var pc="get",mc="application/x-www-form-urlencoded";function Uc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function yb(s){return Uc(s)&&s.tagName.toLowerCase()==="button"}function xb(s){return Uc(s)&&s.tagName.toLowerCase()==="form"}function Sb(s){return Uc(s)&&s.tagName.toLowerCase()==="input"}function Mb(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function bb(s,t){return s.button===0&&(!t||t==="_self")&&!Mb(s)}var zu=null;function Eb(){if(zu===null)try{new FormData(document.createElement("form"),0),zu=!1}catch{zu=!0}return zu}var Tb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kh(s){return s!=null&&!Tb.has(s)?(Ki(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mc}"`),null):s}function Ab(s,t){let i,r,l,u,f;if(xb(s)){let p=s.getAttribute("action");r=p?wa(p,t):null,i=s.getAttribute("method")||pc,l=Kh(s.getAttribute("enctype"))||mc,u=new FormData(s)}else if(yb(s)||Sb(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(r=m?wa(m,t):null,i=s.getAttribute("formmethod")||p.getAttribute("method")||pc,l=Kh(s.getAttribute("formenctype"))||Kh(p.getAttribute("enctype"))||mc,u=new FormData(p,s),!Eb()){let{name:d,type:_,value:v}=s;if(_==="image"){let g=d?`${d}.`:"";u.append(`${g}x`,"0"),u.append(`${g}y`,"0")}else d&&u.append(d,v)}}else{if(Uc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=pc,r=null,l=mc,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pp(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Rb(s,t,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:t&&wa(l.pathname,t)==="/"?l.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function Cb(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Db(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await Cb(u,i);return f.links?f.links():[]}return[]}));return Ob(r.flat(1).filter(wb).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function j_(s,t,i,r,l,u){let f=(m,d)=>i[d]?m.route.id!==i[d].route.id:!0,p=(m,d)=>i[d].pathname!==m.pathname||i[d].route.path?.endsWith("*")&&i[d].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,d)=>f(m,d)||p(m,d)):u==="data"?t.filter((m,d)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,d)||p(m,d))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Lb(s,t,{includeHydrateFallback:i}={}){return Ub(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Ub(s){return[...new Set(s)]}function Nb(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function Ob(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(Nb(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function my(){let s=mt.useContext(ro);return Pp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Pb(){let s=mt.useContext(Lc);return Pp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ip=mt.createContext(void 0);Ip.displayName="FrameworkContext";function gy(){let s=mt.useContext(Ip);return Pp(s,"You must render this element inside a <HydratedRouter> element"),s}function Ib(s,t){let i=mt.useContext(Ip),[r,l]=mt.useState(!1),[u,f]=mt.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:d,onMouseLeave:_,onTouchStart:v}=t,g=mt.useRef(null);mt.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let R=x=>{x.forEach(A=>{f(A.isIntersecting)})},y=new IntersectionObserver(R,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[s]),mt.useEffect(()=>{if(r){let R=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(R)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,g,{}]:[u,g,{onFocus:$o(p,M),onBlur:$o(m,b),onMouseEnter:$o(d,M),onMouseLeave:$o(_,b),onTouchStart:$o(v,M)}]:[!1,g,{}]}function $o(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function Fb({page:s,...t}){let{router:i}=my(),r=mt.useMemo(()=>ey(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?mt.createElement(zb,{page:s,matches:r,...t}):null}function Bb(s){let{manifest:t,routeModules:i}=gy(),[r,l]=mt.useState([]);return mt.useEffect(()=>{let u=!1;return Db(s,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,t,i]),r}function zb({page:s,matches:t,...i}){let r=gr(),{future:l,manifest:u,routeModules:f}=gy(),{basename:p}=my(),{loaderData:m,matches:d}=Pb(),_=mt.useMemo(()=>j_(s,t,d,u,r,"data"),[s,t,d,u,r]),v=mt.useMemo(()=>j_(s,t,d,u,r,"assets"),[s,t,d,u,r]),g=mt.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let R=new Set,y=!1;if(t.forEach(A=>{let D=u.routes[A.route.id];!D||!D.hasLoader||(!_.some(L=>L.route.id===A.route.id)&&A.route.id in m&&f[A.route.id]?.shouldRevalidate||D.hasClientLoader?y=!0:R.add(A.route.id))}),R.size===0)return[];let x=Rb(s,p,l.unstable_trailingSlashAwareDataRequests,"data");return y&&R.size>0&&x.searchParams.set("_routes",t.filter(A=>R.has(A.route.id)).map(A=>A.route.id).join(",")),[x.pathname+x.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,r,u,_,t,s,f]),M=mt.useMemo(()=>Lb(v,u),[v,u]),b=Bb(v);return mt.createElement(mt.Fragment,null,g.map(R=>mt.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...i})),M.map(R=>mt.createElement("link",{key:R,rel:"modulepreload",href:R,...i})),b.map(({key:R,link:y})=>mt.createElement("link",{key:R,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function Hb(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Gb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gb&&(window.__reactRouterVersion="7.13.1")}catch{}function Vb({basename:s,children:t,unstable_useTransitions:i,window:r}){let l=mt.useRef();l.current==null&&(l.current=SM({window:r,v5Compat:!0}));let u=l.current,[f,p]=mt.useState({action:u.action,location:u.location}),m=mt.useCallback(d=>{i===!1?p(d):mt.startTransition(()=>p(d))},[i]);return mt.useLayoutEffect(()=>u.listen(m),[u,m]),mt.createElement(_b,{basename:s,children:t,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:i})}var _y=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vy=mt.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,unstable_mask:p,state:m,target:d,to:_,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:M,...b},R){let{basename:y,navigator:x,unstable_useTransitions:A}=mt.useContext(bi),D=typeof _=="string"&&_y.test(_),L=sy(_,y);_=L.to;let B=eb(_,{relative:l}),I=gr(),F=null;if(p){let Z=Lp(p,[],I.unstable_mask?I.unstable_mask.pathname:"/",!0);y!=="/"&&(Z.pathname=Z.pathname==="/"?y:qi([y,Z.pathname])),F=x.createHref(Z)}let[T,U,st]=Ib(r,b),G=Yb(_,{replace:f,unstable_mask:p,state:m,target:d,preventScrollReset:v,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:M,unstable_useTransitions:A});function J(Z){t&&t(Z),Z.defaultPrevented||G(Z)}let Q=!(L.isExternal||u),rt=mt.createElement("a",{...b,...st,href:(Q?F:void 0)||L.absoluteURL||B,onClick:Q?J:t,ref:Hb(R,U),target:d,"data-discover":!D&&i==="render"?"true":void 0});return T&&!D?mt.createElement(mt.Fragment,null,rt,mt.createElement(Fb,{page:B})):rt});vy.displayName="Link";var kb=mt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:p,children:m,...d},_){let v=bl(f,{relative:d.relative}),g=gr(),M=mt.useContext(Lc),{navigator:b,basename:R}=mt.useContext(bi),y=M!=null&&Qb(v)&&p===!0,x=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,A=g.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(A=A.toLowerCase(),D=D?D.toLowerCase():null,x=x.toLowerCase()),D&&R&&(D=wa(D,R)||D);const L=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let B=A===x||!l&&A.startsWith(x)&&A.charAt(L)==="/",I=D!=null&&(D===x||!l&&D.startsWith(x)&&D.charAt(x.length)==="/"),F={isActive:B,isPending:I,isTransitioning:y},T=B?t:void 0,U;typeof r=="function"?U=r(F):U=[r,B?"active":null,I?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let st=typeof u=="function"?u(F):u;return mt.createElement(vy,{...d,"aria-current":T,className:U,ref:_,style:st,to:f,viewTransition:p},typeof m=="function"?m(F):m)});kb.displayName="NavLink";var Wb=mt.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:f=pc,action:p,onSubmit:m,relative:d,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:g,...M},b)=>{let{unstable_useTransitions:R}=mt.useContext(bi),y=Zb(),x=Kb(p,{relative:d}),A=f.toLowerCase()==="get"?"get":"post",D=typeof p=="string"&&_y.test(p),L=B=>{if(m&&m(B),B.defaultPrevented)return;B.preventDefault();let I=B.nativeEvent.submitter,F=I?.getAttribute("formmethod")||f,T=()=>y(I||B.currentTarget,{fetcherKey:t,method:F,navigate:i,replace:l,state:u,relative:d,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:g});R&&i!==!1?mt.startTransition(()=>T()):T()};return mt.createElement("form",{ref:b,method:A,action:x,onSubmit:r?m:L,...M,"data-discover":!D&&s==="render"?"true":void 0})});Wb.displayName="Form";function Xb(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yy(s){let t=mt.useContext(ro);return en(t,Xb(s)),t}function Yb(s,{target:t,replace:i,unstable_mask:r,state:l,preventScrollReset:u,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:d}={}){let _=nb(),v=gr(),g=bl(s,{relative:f});return mt.useCallback(M=>{if(bb(M,t)){M.preventDefault();let b=i!==void 0?i:ml(v)===ml(g),R=()=>_(s,{replace:b,unstable_mask:r,state:l,preventScrollReset:u,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:m});d?mt.startTransition(()=>R()):R()}},[v,_,g,i,r,l,t,s,u,f,p,m,d])}var qb=0,jb=()=>`__${String(++qb)}__`;function Zb(){let{router:s}=yy("useSubmit"),{basename:t}=mt.useContext(bi),i=db(),r=s.fetch,l=s.navigate;return mt.useCallback(async(u,f={})=>{let{action:p,method:m,encType:d,formData:_,body:v}=Ab(u,t);if(f.navigate===!1){let g=f.fetcherKey||jb();await r(g,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:v,formMethod:f.method||m,formEncType:f.encType||d,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:v,formMethod:f.method||m,formEncType:f.encType||d,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,t,i])}function Kb(s,{relative:t}={}){let{basename:i}=mt.useContext(bi),r=mt.useContext(Ua);en(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...bl(s||".",{relative:t})},f=gr();if(s==null){u.search=f.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let _=p.toString();u.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:qi([i,u.pathname])),ml(u)}function Qb(s,{relative:t}={}){let i=mt.useContext(ly);en(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=yy("useViewTransitionState"),l=bl(s,{relative:t});if(!i.isTransitioning)return!1;let u=wa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=wa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Mc(l.pathname,f)!=null||Mc(l.pathname,u)!=null}const Jb="#FFC692",$b="#FFE092",tE="#D3FF92",eE="#B9FF92",nE="#ECFF92",iE="#FFF992",aE="#92FF9F",rE="#ac92ff",sE="#f992ff",oE="#92e0ff",xy="#f8fafc",Sy={"Alkali metals":Jb,"Alkaline earth metals":$b,Lanthanides:tE,Actinides:eE,"Transition metals":nE,"Other metals":iE,Metalloids:aE,"Other nonmetals":rE,Halogens:sE,"Noble gases":oE},lE=({element:s,onClick:t,isHighlighted:i=!1})=>{const r=s.type?Sy[s.type]:xy;return pe.jsxs("button",{type:"button",onClick:t,className:"relative w-full h-full border rounded-lg p-[2px] pt-[10px] text-center hover:bg-gray-100 transition flex flex-col items-center justify-center gap-[1px] overflow-hidden",style:{backgroundColor:r,boxShadow:i?"0 0 12px rgba(250, 204, 21, 0.95), 0 0 24px rgba(250, 204, 21, 0.55)":void 0,transform:i?"scale(1.03)":void 0,zIndex:i?2:1},children:[pe.jsx("div",{className:"absolute top-[2px] right-[3px] text-[8px] leading-none",children:s.number}),pe.jsx("div",{className:"text-lg font-bold leading-none",children:s.symbol}),pe.jsx("div",{className:"text-[8px] leading-tight w-full break-all",children:s.name})]})};const Fp="183",Ks={ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uE=0,Z_=1,cE=2,gc=1,fE=2,cl=3,pr=0,Jn=1,Ea=2,Aa=0,Qs=1,hl=2,K_=3,Q_=4,hE=5,Gr=100,dE=101,pE=102,mE=103,gE=104,_E=200,vE=201,yE=202,xE=203,Id=204,Fd=205,SE=206,ME=207,bE=208,EE=209,TE=210,AE=211,RE=212,CE=213,wE=214,Bd=0,zd=1,Hd=2,$s=3,Gd=4,Vd=5,kd=6,Wd=7,My=0,DE=1,LE=2,ji=0,by=1,Ey=2,Ty=3,Ay=4,Ry=5,Cy=6,wy=7,Dy=300,Xr=301,to=302,Qh=303,Jh=304,Nc=306,Xd=1e3,Ta=1001,Yd=1002,Cn=1003,UE=1004,Hu=1005,Un=1006,$h=1007,kr=1008,fi=1009,Ly=1010,Uy=1011,gl=1012,Bp=1013,Qi=1014,Xi=1015,Da=1016,zp=1017,Hp=1018,_l=1020,Ny=35902,Oy=35899,Py=1021,Iy=1022,Pi=1023,La=1026,Wr=1027,Fy=1028,Gp=1029,eo=1030,Vp=1031,kp=1033,_c=33776,vc=33777,yc=33778,xc=33779,qd=35840,jd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,tp=37488,ep=37489,np=37490,ip=37491,ap=37808,rp=37809,sp=37810,op=37811,lp=37812,up=37813,cp=37814,fp=37815,hp=37816,dp=37817,pp=37818,mp=37819,gp=37820,_p=37821,vp=36492,yp=36494,xp=36495,Sp=36283,Mp=36284,bp=36285,Ep=36286,NE=3200,By=0,OE=1,hr="",Qn="srgb",no="srgb-linear",bc="linear",ze="srgb",Ds=7680,J_=519,PE=512,IE=513,FE=514,Wp=515,BE=516,zE=517,Xp=518,HE=519,Tp=35044,$_="300 es",Yi=2e3,vl=2001;function GE(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ec(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function VE(){const s=Ec("canvas");return s.style.display="block",s}const tv={};function Tc(...s){const t="THREE."+s.shift();console.log(t,...s)}function zy(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ne(...s){s=zy(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function Ce(...s){s=zy(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function Ac(...s){const t=s.join(" ");t in tv||(tv[t]=!0,ne(...s))}function kE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const WE={[Bd]:zd,[Hd]:kd,[Gd]:Wd,[$s]:Vd,[zd]:Bd,[kd]:Hd,[Wd]:Gd,[Vd]:$s};class Yr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ev=1234567;const dl=Math.PI/180,yl=180/Math.PI;function Ra(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function ve(s,t,i){return Math.max(t,Math.min(i,s))}function Yp(s,t){return(s%t+t)%t}function XE(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function YE(s,t,i){return s!==t?(i-s)/(t-s):0}function pl(s,t,i){return(1-i)*s+i*t}function qE(s,t,i,r){return pl(s,t,1-Math.exp(-i*r))}function jE(s,t=1){return t-Math.abs(Yp(s,t*2)-t)}function ZE(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function KE(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function QE(s,t){return s+Math.floor(Math.random()*(t-s+1))}function JE(s,t){return s+Math.random()*(t-s)}function $E(s){return s*(.5-Math.random())}function tT(s){s!==void 0&&(ev=s);let t=ev+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eT(s){return s*dl}function nT(s){return s*yl}function iT(s){return(s&s-1)===0&&s!==0}function aT(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function rT(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sT(s,t,i,r,l){const u=Math.cos,f=Math.sin,p=u(i/2),m=f(i/2),d=u((t+r)/2),_=f((t+r)/2),v=u((t-r)/2),g=f((t-r)/2),M=u((r-t)/2),b=f((r-t)/2);switch(l){case"XYX":s.set(p*_,m*v,m*g,p*d);break;case"YZY":s.set(m*g,p*_,m*v,p*d);break;case"ZXZ":s.set(m*v,m*g,p*_,p*d);break;case"XZX":s.set(p*_,m*b,m*M,p*d);break;case"YXY":s.set(m*M,p*_,m*b,p*d);break;case"ZYZ":s.set(m*b,m*M,p*_,p*d);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Oi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function He(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ap={DEG2RAD:dl,RAD2DEG:yl,generateUUID:Ra,clamp:ve,euclideanModulo:Yp,mapLinear:XE,inverseLerp:YE,lerp:pl,damp:qE,pingpong:jE,smoothstep:ZE,smootherstep:KE,randInt:QE,randFloat:JE,randFloatSpread:$E,seededRandom:tT,degToRad:eT,radToDeg:nT,isPowerOfTwo:iT,ceilPowerOfTwo:aT,floorPowerOfTwo:rT,setQuaternionFromProperEuler:sT,normalize:He,denormalize:Oi};class $t{constructor(t=0,i=0){$t.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,p){let m=r[l+0],d=r[l+1],_=r[l+2],v=r[l+3],g=u[f+0],M=u[f+1],b=u[f+2],R=u[f+3];if(v!==R||m!==g||d!==M||_!==b){let y=m*g+d*M+_*b+v*R;y<0&&(g=-g,M=-M,b=-b,R=-R,y=-y);let x=1-p;if(y<.9995){const A=Math.acos(y),D=Math.sin(A);x=Math.sin(x*A)/D,p=Math.sin(p*A)/D,m=m*x+g*p,d=d*x+M*p,_=_*x+b*p,v=v*x+R*p}else{m=m*x+g*p,d=d*x+M*p,_=_*x+b*p,v=v*x+R*p;const A=1/Math.sqrt(m*m+d*d+_*_+v*v);m*=A,d*=A,_*=A,v*=A}}t[i]=m,t[i+1]=d,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,f){const p=r[l],m=r[l+1],d=r[l+2],_=r[l+3],v=u[f],g=u[f+1],M=u[f+2],b=u[f+3];return t[i]=p*b+_*v+m*M-d*g,t[i+1]=m*b+_*g+d*v-p*M,t[i+2]=d*b+_*M+p*g-m*v,t[i+3]=_*b-p*v-m*g-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(r/2),_=p(l/2),v=p(u/2),g=m(r/2),M=m(l/2),b=m(u/2);switch(f){case"XYZ":this._x=g*_*v+d*M*b,this._y=d*M*v-g*_*b,this._z=d*_*b+g*M*v,this._w=d*_*v-g*M*b;break;case"YXZ":this._x=g*_*v+d*M*b,this._y=d*M*v-g*_*b,this._z=d*_*b-g*M*v,this._w=d*_*v+g*M*b;break;case"ZXY":this._x=g*_*v-d*M*b,this._y=d*M*v+g*_*b,this._z=d*_*b+g*M*v,this._w=d*_*v-g*M*b;break;case"ZYX":this._x=g*_*v-d*M*b,this._y=d*M*v+g*_*b,this._z=d*_*b-g*M*v,this._w=d*_*v+g*M*b;break;case"YZX":this._x=g*_*v+d*M*b,this._y=d*M*v+g*_*b,this._z=d*_*b-g*M*v,this._w=d*_*v-g*M*b;break;case"XZY":this._x=g*_*v-d*M*b,this._y=d*M*v-g*_*b,this._z=d*_*b+g*M*v,this._w=d*_*v+g*M*b;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],p=i[5],m=i[9],d=i[2],_=i[6],v=i[10],g=r+p+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-d)*M,this._z=(f-l)*M}else if(r>p&&r>v){const M=2*Math.sqrt(1+r-p-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+d)/M}else if(p>v){const M=2*Math.sqrt(1+p-r-v);this._w=(u-d)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-r-p);this._w=(f-l)/M,this._x=(u+d)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,p=i._x,m=i._y,d=i._z,_=i._w;return this._x=r*_+f*p+l*d-u*m,this._y=l*_+f*m+u*p-r*d,this._z=u*_+f*d+r*m-l*p,this._w=f*_-r*p-l*m-u*d,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,u=t._z,f=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,u=-u,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,i=Math.sin(i*d)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,r=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(nv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(nv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*r),_=2*(p*i-u*l),v=2*(u*r-f*i);return this.x=i+m*d+f*v-p*_,this.y=r+m*_+p*d-u*v,this.z=l+m*v+u*_-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*f-r*m,this.z=r*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return td.copy(this).projectOnVector(t),this.sub(td)}reflect(t){return this.sub(td.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new j,nv=new mr;class de{constructor(t,i,r,l,u,f,p,m,d){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,p,m,d)}set(t,i,r,l,u,f,p,m,d){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=f,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],p=r[3],m=r[6],d=r[1],_=r[4],v=r[7],g=r[2],M=r[5],b=r[8],R=l[0],y=l[3],x=l[6],A=l[1],D=l[4],L=l[7],B=l[2],I=l[5],F=l[8];return u[0]=f*R+p*A+m*B,u[3]=f*y+p*D+m*I,u[6]=f*x+p*L+m*F,u[1]=d*R+_*A+v*B,u[4]=d*y+_*D+v*I,u[7]=d*x+_*L+v*F,u[2]=g*R+M*A+b*B,u[5]=g*y+M*D+b*I,u[8]=g*x+M*L+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],p=t[5],m=t[6],d=t[7],_=t[8];return i*f*_-i*p*d-r*u*_+r*p*m+l*u*d-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],p=t[5],m=t[6],d=t[7],_=t[8],v=_*f-p*d,g=p*m-_*u,M=d*u-f*m,b=i*v+r*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=v*R,t[1]=(l*d-_*r)*R,t[2]=(p*r-l*f)*R,t[3]=g*R,t[4]=(_*i-l*m)*R,t[5]=(l*u-p*i)*R,t[6]=M*R,t[7]=(r*m-d*i)*R,t[8]=(f*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,p){const m=Math.cos(u),d=Math.sin(u);return this.set(r*m,r*d,-r*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(ed.makeScale(t,i)),this}rotate(t){return this.premultiply(ed.makeRotation(-t)),this}translate(t,i){return this.premultiply(ed.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ed=new de,iv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),av=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oT(){const s={enabled:!0,workingColorSpace:no,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===ze&&(l.r=Ca(l.r),l.g=Ca(l.g),l.b=Ca(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(l.r=Js(l.r),l.g=Js(l.g),l.b=Js(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===hr?bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ac("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ac("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[no]:{primaries:t,whitePoint:r,transfer:bc,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const we=oT();function Ca(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class lT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ls===void 0&&(Ls=Ec("canvas")),Ls.width=t.width,Ls.height=t.height;const l=Ls.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Ls}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ec("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=Ca(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ca(i[r]/255)*255):i[r]=Ca(i[r]);return{data:i,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uT=0;class qp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=Ra(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?u.push(nd(l[f].image)):u.push(nd(l[f]))}else u=nd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function nd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let cT=0;const id=new j;class Nn extends Yr{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=Ta,l=Ta,u=Un,f=kr,p=Pi,m=fi,d=Nn.DEFAULT_ANISOTROPY,_=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=Ra(),this.name="",this.source=new qp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(id).x}get height(){return this.source.getSize(id).y}get depth(){return this.source.getSize(id).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xd:t.x=t.x-Math.floor(t.x);break;case Ta:t.x=t.x<0?0:1;break;case Yd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xd:t.y=t.y-Math.floor(t.y);break;case Ta:t.y=t.y<0?0:1;break;case Yd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Dy;Nn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,d=m[0],_=m[4],v=m[8],g=m[1],M=m[5],b=m[9],R=m[2],y=m[6],x=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+R)<.1&&Math.abs(b+y)<.1&&Math.abs(d+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(d+1)/2,L=(M+1)/2,B=(x+1)/2,I=(_+g)/4,F=(v+R)/4,T=(b+y)/4;return D>L&&D>B?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=I/r,u=F/r):L>B?L<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),r=I/l,u=T/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=F/u,l=T/u),this.set(r,l,u,i),this}let A=Math.sqrt((y-b)*(y-b)+(v-R)*(v-R)+(g-_)*(g-_));return Math.abs(A)<.001&&(A=1),this.x=(y-b)/A,this.y=(v-R)/A,this.z=(g-_)/A,this.w=Math.acos((d+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fT extends Yr{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},u=new Nn(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new qp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends fT{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Hy extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hT extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $e{constructor(t,i,r,l,u,f,p,m,d,_,v,g,M,b,R,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,p,m,d,_,v,g,M,b,R,y)}set(t,i,r,l,u,f,p,m,d,_,v,g,M,b,R,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=f,x[9]=p,x[13]=m,x[2]=d,x[6]=_,x[10]=v,x[14]=g,x[3]=M,x[7]=b,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Us.setFromMatrixColumn(t,0).length(),u=1/Us.setFromMatrixColumn(t,1).length(),f=1/Us.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const g=f*_,M=f*v,b=p*_,R=p*v;i[0]=m*_,i[4]=-m*v,i[8]=d,i[1]=M+b*d,i[5]=g-R*d,i[9]=-p*m,i[2]=R-g*d,i[6]=b+M*d,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,M=m*v,b=d*_,R=d*v;i[0]=g+R*p,i[4]=b*p-M,i[8]=f*d,i[1]=f*v,i[5]=f*_,i[9]=-p,i[2]=M*p-b,i[6]=R+g*p,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,M=m*v,b=d*_,R=d*v;i[0]=g-R*p,i[4]=-f*v,i[8]=b+M*p,i[1]=M+b*p,i[5]=f*_,i[9]=R-g*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,M=f*v,b=p*_,R=p*v;i[0]=m*_,i[4]=b*d-M,i[8]=g*d+R,i[1]=m*v,i[5]=R*d+g,i[9]=M*d-b,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,M=f*d,b=p*m,R=p*d;i[0]=m*_,i[4]=R-g*v,i[8]=b*v+M,i[1]=v,i[5]=f*_,i[9]=-p*_,i[2]=-d*_,i[6]=M*v+b,i[10]=g-R*v}else if(t.order==="XZY"){const g=f*m,M=f*d,b=p*m,R=p*d;i[0]=m*_,i[4]=-v,i[8]=d*_,i[1]=g*v+R,i[5]=f*_,i[9]=M*v-b,i[2]=b*v-M,i[6]=p*_,i[10]=R*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dT,t,pT)}lookAt(t,i,r){const l=this.elements;return li.subVectors(t,i),li.lengthSq()===0&&(li.z=1),li.normalize(),rr.crossVectors(r,li),rr.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),rr.crossVectors(r,li)),rr.normalize(),Gu.crossVectors(li,rr),l[0]=rr.x,l[4]=Gu.x,l[8]=li.x,l[1]=rr.y,l[5]=Gu.y,l[9]=li.y,l[2]=rr.z,l[6]=Gu.z,l[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],p=r[4],m=r[8],d=r[12],_=r[1],v=r[5],g=r[9],M=r[13],b=r[2],R=r[6],y=r[10],x=r[14],A=r[3],D=r[7],L=r[11],B=r[15],I=l[0],F=l[4],T=l[8],U=l[12],st=l[1],G=l[5],J=l[9],Q=l[13],rt=l[2],Z=l[6],N=l[10],z=l[14],ot=l[3],ht=l[7],St=l[11],P=l[15];return u[0]=f*I+p*st+m*rt+d*ot,u[4]=f*F+p*G+m*Z+d*ht,u[8]=f*T+p*J+m*N+d*St,u[12]=f*U+p*Q+m*z+d*P,u[1]=_*I+v*st+g*rt+M*ot,u[5]=_*F+v*G+g*Z+M*ht,u[9]=_*T+v*J+g*N+M*St,u[13]=_*U+v*Q+g*z+M*P,u[2]=b*I+R*st+y*rt+x*ot,u[6]=b*F+R*G+y*Z+x*ht,u[10]=b*T+R*J+y*N+x*St,u[14]=b*U+R*Q+y*z+x*P,u[3]=A*I+D*st+L*rt+B*ot,u[7]=A*F+D*G+L*Z+B*ht,u[11]=A*T+D*J+L*N+B*St,u[15]=A*U+D*Q+L*z+B*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],p=t[5],m=t[9],d=t[13],_=t[2],v=t[6],g=t[10],M=t[14],b=t[3],R=t[7],y=t[11],x=t[15],A=m*M-d*g,D=p*M-d*v,L=p*g-m*v,B=f*M-d*_,I=f*g-m*_,F=f*v-p*_;return i*(R*A-y*D+x*L)-r*(b*A-y*B+x*I)+l*(b*D-R*B+x*F)-u*(b*L-R*I+y*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],p=t[5],m=t[6],d=t[7],_=t[8],v=t[9],g=t[10],M=t[11],b=t[12],R=t[13],y=t[14],x=t[15],A=i*p-r*f,D=i*m-l*f,L=i*d-u*f,B=r*m-l*p,I=r*d-u*p,F=l*d-u*m,T=_*R-v*b,U=_*y-g*b,st=_*x-M*b,G=v*y-g*R,J=v*x-M*R,Q=g*x-M*y,rt=A*Q-D*J+L*G+B*st-I*U+F*T;if(rt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/rt;return t[0]=(p*Q-m*J+d*G)*Z,t[1]=(l*J-r*Q-u*G)*Z,t[2]=(R*F-y*I+x*B)*Z,t[3]=(g*I-v*F-M*B)*Z,t[4]=(m*st-f*Q-d*U)*Z,t[5]=(i*Q-l*st+u*U)*Z,t[6]=(y*L-b*F-x*D)*Z,t[7]=(_*F-g*L+M*D)*Z,t[8]=(f*J-p*st+d*T)*Z,t[9]=(r*st-i*J-u*T)*Z,t[10]=(b*I-R*L+x*A)*Z,t[11]=(v*L-_*I-M*A)*Z,t[12]=(p*U-f*G-m*T)*Z,t[13]=(i*G-r*U+l*T)*Z,t[14]=(R*D-b*B-y*A)*Z,t[15]=(_*B-v*D+g*A)*Z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,p=t.y,m=t.z,d=u*f,_=u*p;return this.set(d*f+r,d*p-l*m,d*m+l*p,0,d*p+l*m,_*p+r,_*m-l*f,0,d*m-l*p,_*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,p=i._z,m=i._w,d=u+u,_=f+f,v=p+p,g=u*d,M=u*_,b=u*v,R=f*_,y=f*v,x=p*v,A=m*d,D=m*_,L=m*v,B=r.x,I=r.y,F=r.z;return l[0]=(1-(R+x))*B,l[1]=(M+L)*B,l[2]=(b-D)*B,l[3]=0,l[4]=(M-L)*I,l[5]=(1-(g+x))*I,l[6]=(y+A)*I,l[7]=0,l[8]=(b+D)*F,l[9]=(y-A)*F,l[10]=(1-(g+R))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinant();if(u===0)return r.set(1,1,1),i.identity(),this;let f=Us.set(l[0],l[1],l[2]).length();const p=Us.set(l[4],l[5],l[6]).length(),m=Us.set(l[8],l[9],l[10]).length();u<0&&(f=-f),Li.copy(this);const d=1/f,_=1/p,v=1/m;return Li.elements[0]*=d,Li.elements[1]*=d,Li.elements[2]*=d,Li.elements[4]*=_,Li.elements[5]*=_,Li.elements[6]*=_,Li.elements[8]*=v,Li.elements[9]*=v,Li.elements[10]*=v,i.setFromRotationMatrix(Li),r.x=f,r.y=p,r.z=m,this}makePerspective(t,i,r,l,u,f,p=Yi,m=!1){const d=this.elements,_=2*u/(i-t),v=2*u/(r-l),g=(i+t)/(i-t),M=(r+l)/(r-l);let b,R;if(m)b=u/(f-u),R=f*u/(f-u);else if(p===Yi)b=-(f+u)/(f-u),R=-2*f*u/(f-u);else if(p===vl)b=-f/(f-u),R=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,r,l,u,f,p=Yi,m=!1){const d=this.elements,_=2/(i-t),v=2/(r-l),g=-(i+t)/(i-t),M=-(r+l)/(r-l);let b,R;if(m)b=1/(f-u),R=f/(f-u);else if(p===Yi)b=-2/(f-u),R=-(f+u)/(f-u);else if(p===vl)b=-1/(f-u),R=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=b,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Us=new j,Li=new $e,dT=new j(0,0,0),pT=new j(1,1,1),rr=new j,Gu=new j,li=new j,rv=new $e,sv=new mr;class Ji{constructor(t=0,i=0,r=0,l=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],p=l[8],m=l[1],d=l[5],_=l[9],v=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return rv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return sv.setFromEuler(this),this.setFromQuaternion(sv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class Gy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mT=0;const ov=new j,Ns=new mr,ya=new $e,Vu=new j,tl=new j,gT=new j,_T=new mr,lv=new j(1,0,0),uv=new j(0,1,0),cv=new j(0,0,1),fv={type:"added"},vT={type:"removed"},Os={type:"childadded",child:null},ad={type:"childremoved",child:null};class On extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new j,i=new Ji,r=new mr,l=new j(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new de}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ns.setFromAxisAngle(t,i),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,i){return Ns.setFromAxisAngle(t,i),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(lv,t)}rotateY(t){return this.rotateOnAxis(uv,t)}rotateZ(t){return this.rotateOnAxis(cv,t)}translateOnAxis(t,i){return ov.copy(t).applyQuaternion(this.quaternion),this.position.add(ov.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(lv,t)}translateY(t){return this.translateOnAxis(uv,t)}translateZ(t){return this.translateOnAxis(cv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Vu.copy(t):Vu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(tl,Vu,this.up):ya.lookAt(Vu,tl,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Ns.setFromRotationMatrix(ya),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fv),Os.child=t,this.dispatchEvent(Os),Os.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vT),ad.child=t,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ya.multiply(t.parent.matrixWorld)),t.applyMatrix4(ya),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fv),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,t,gT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,_T,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const v=m[d];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(u(t.materials,this.material[m]));l.material=p}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),M=f(t.animations),b=f(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}On.DEFAULT_UP=new j(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zs extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yT={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,r),x=this._getHandJoint(d,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),M=.02,b=.005;d.inputState.pinching&&g>M+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=M-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(yT)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Zs;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const Vy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},ku={h:0,s:0,l:0};function sd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Se{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=r,we.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=we.workingColorSpace){if(t=Yp(t,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=sd(f,u,t+1/3),this.g=sd(f,u,t),this.b=sd(f,u,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=Qn){function r(u){u!==void 0&&parseFloat(u)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ne("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Qn){const r=Vy[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return we.workingToColorSpace(Ln.copy(this),t),Math.round(ve(Ln.r*255,0,255))*65536+Math.round(ve(Ln.g*255,0,255))*256+Math.round(ve(Ln.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,f=Math.max(r,l,u),p=Math.min(r,l,u);let m,d;const _=(p+f)/2;if(p===f)m=0,d=0;else{const v=f-p;switch(d=_<=.5?v/(f+p):v/(2-f-p),f){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=d,t.l=_,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=Qn){we.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,l=Ln.b;return t!==Qn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(sr),this.setHSL(sr.h+t,sr.s+i,sr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(sr),t.getHSL(ku);const r=pl(sr.h,ku.h,i),l=pl(sr.s,ku.s,i),u=pl(sr.l,ku.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Se;Se.NAMES=Vy;class xT extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new j,xa=new j,od=new j,Sa=new j,Ps=new j,Is=new j,hv=new j,ld=new j,ud=new j,cd=new j,fd=new rn,hd=new rn,dd=new rn;class Si{constructor(t=new j,i=new j,r=new j){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ui.subVectors(t,i),l.cross(Ui);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ui.subVectors(l,i),xa.subVectors(r,i),od.subVectors(t,i);const f=Ui.dot(Ui),p=Ui.dot(xa),m=Ui.dot(od),d=xa.dot(xa),_=xa.dot(od),v=f*d-p*p;if(v===0)return u.set(0,0,0),null;const g=1/v,M=(d*m-p*_)*g,b=(f*_-p*m)*g;return u.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(t,i,r,l,u,f,p,m){return this.getBarycoord(t,i,r,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Sa.x),m.addScaledVector(f,Sa.y),m.addScaledVector(p,Sa.z),m)}static getInterpolatedAttribute(t,i,r,l,u,f){return fd.setScalar(0),hd.setScalar(0),dd.setScalar(0),fd.fromBufferAttribute(t,i),hd.fromBufferAttribute(t,r),dd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(fd,u.x),f.addScaledVector(hd,u.y),f.addScaledVector(dd,u.z),f}static isFrontFacing(t,i,r,l){return Ui.subVectors(r,i),xa.subVectors(t,i),Ui.cross(xa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Ui.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,p;Ps.subVectors(l,r),Is.subVectors(u,r),ld.subVectors(t,r);const m=Ps.dot(ld),d=Is.dot(ld);if(m<=0&&d<=0)return i.copy(r);ud.subVectors(t,l);const _=Ps.dot(ud),v=Is.dot(ud);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*d;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(Ps,f);cd.subVectors(t,u);const M=Ps.dot(cd),b=Is.dot(cd);if(b>=0&&M<=b)return i.copy(u);const R=M*d-m*b;if(R<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(r).addScaledVector(Is,p);const y=_*b-M*v;if(y<=0&&v-_>=0&&M-b>=0)return hv.subVectors(u,l),p=(v-_)/(v-_+(M-b)),i.copy(l).addScaledVector(hv,p);const x=1/(y+R+g);return f=R*x,p=g*x,i.copy(r).addScaledVector(Ps,f).addScaledVector(Is,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class El{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ni.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ni.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ni.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=u.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Ni):Ni.fromBufferAttribute(u,f),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Wu.copy(r.boundingBox)),Wu.applyMatrix4(t.matrixWorld),this.union(Wu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(el),Xu.subVectors(this.max,el),Fs.subVectors(t.a,el),Bs.subVectors(t.b,el),zs.subVectors(t.c,el),or.subVectors(Bs,Fs),lr.subVectors(zs,Bs),Pr.subVectors(Fs,zs);let i=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Pr.z,Pr.y,or.z,0,-or.x,lr.z,0,-lr.x,Pr.z,0,-Pr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Pr.y,Pr.x,0];return!pd(i,Fs,Bs,zs,Xu)||(i=[1,0,0,0,1,0,0,0,1],!pd(i,Fs,Bs,zs,Xu))?!1:(Yu.crossVectors(or,lr),i=[Yu.x,Yu.y,Yu.z],pd(i,Fs,Bs,zs,Xu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ma=[new j,new j,new j,new j,new j,new j,new j,new j],Ni=new j,Wu=new El,Fs=new j,Bs=new j,zs=new j,or=new j,lr=new j,Pr=new j,el=new j,Xu=new j,Yu=new j,Ir=new j;function pd(s,t,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){Ir.fromArray(s,u);const p=l.x*Math.abs(Ir.x)+l.y*Math.abs(Ir.y)+l.z*Math.abs(Ir.z),m=t.dot(Ir),d=i.dot(Ir),_=r.dot(Ir);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const mn=new j,qu=new $t;let ST=0;class Ii{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ST++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Tp,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)qu.fromBufferAttribute(this,i),qu.applyMatrix3(t),this.setXY(i,qu.x,qu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=He(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oi(i,this.array)),i}setX(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oi(i,this.array)),i}setY(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oi(i,this.array)),i}setW(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array),u=He(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tp&&(t.usage=this.usage),t}}class ky extends Ii{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Wy extends Ii{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Pn extends Ii{constructor(t,i,r){super(new Float32Array(t),i,r)}}const MT=new El,nl=new j,md=new j;class Oc{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):MT.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nl.subVectors(t,this.center);const i=nl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(nl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(md.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nl.copy(t.center).add(md)),this.expandByPoint(nl.copy(t.center).sub(md))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let bT=0;const xi=new $e,gd=new On,Hs=new j,ui=new El,il=new El,bn=new j;class kn extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(GE(t)?Wy:ky)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new de().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,r){return xi.makeTranslation(t,i,r),this.applyMatrix4(xi),this}scale(t,i,r){return xi.makeScale(t,i,r),this.applyMatrix4(xi),this}lookAt(t){return gd.lookAt(t),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Pn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ui.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const p=i[u];il.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(ui.min,il.min),ui.expandByPoint(bn),bn.addVectors(ui.max,il.max),ui.expandByPoint(bn)):(ui.expandByPoint(il.min),ui.expandByPoint(il.max))}ui.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)bn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let u=0,f=i.length;u<f;u++){const p=i[u],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)bn.fromBufferAttribute(p,d),m&&(Hs.fromBufferAttribute(t,d),bn.add(Hs)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new j,m[T]=new j;const d=new j,_=new j,v=new j,g=new $t,M=new $t,b=new $t,R=new j,y=new j;function x(T,U,st){d.fromBufferAttribute(r,T),_.fromBufferAttribute(r,U),v.fromBufferAttribute(r,st),g.fromBufferAttribute(u,T),M.fromBufferAttribute(u,U),b.fromBufferAttribute(u,st),_.sub(d),v.sub(d),M.sub(g),b.sub(g);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(R.copy(_).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(G),p[T].add(R),p[U].add(R),p[st].add(R),m[T].add(y),m[U].add(y),m[st].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,U=A.length;T<U;++T){const st=A[T],G=st.start,J=st.count;for(let Q=G,rt=G+J;Q<rt;Q+=3)x(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const D=new j,L=new j,B=new j,I=new j;function F(T){B.fromBufferAttribute(l,T),I.copy(B);const U=p[T];D.copy(U),D.sub(B.multiplyScalar(B.dot(U))).normalize(),L.crossVectors(I,U);const G=L.dot(m[T])<0?-1:1;f.setXYZW(T,D.x,D.y,D.z,G)}for(let T=0,U=A.length;T<U;++T){const st=A[T],G=st.start,J=st.count;for(let Q=G,rt=G+J;Q<rt;Q+=3)F(t.getX(Q+0)),F(t.getX(Q+1)),F(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new j,u=new j,f=new j,p=new j,m=new j,d=new j,_=new j,v=new j;if(t)for(let g=0,M=t.count;g<M;g+=3){const b=t.getX(g+0),R=t.getX(g+1),y=t.getX(g+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,y),_.subVectors(f,u),v.subVectors(l,u),_.cross(v),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),d.fromBufferAttribute(r,y),p.add(_),m.add(_),d.add(_),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,u),v.subVectors(l,u),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(p,m){const d=p.array,_=p.itemSize,v=p.normalized,g=new d.constructor(m.length*_);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){p.isInterleavedBufferAttribute?M=m[R]*p.data.stride+p.offset:M=m[R]*_;for(let x=0;x<_;x++)g[b++]=d[M++]}return new Ii(g,_,v)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new kn,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,r);i.setAttribute(p,d)}const u=this.morphAttributes;for(const p in u){const m=[],d=u[p];for(let _=0,v=d.length;_<v;_++){const g=d[_],M=t(g,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let v=0,g=d.length;v<g;v++){const M=d[v];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(i))}const u=t.morphAttributes;for(const d in u){const _=[],v=u[d];for(let g=0,M=v.length;g<M;g++)_.push(v[g].clone(i));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,_=f.length;d<_;d++){const v=f[d];this.addGroup(v.start,v.count,v.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ET{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Tp,this.updateRanges=[],this.version=0,this.uuid=Ra()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ra()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ra()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new j;class Rc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=He(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Oi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Oi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Oi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Oi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),r=He(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array),u=He(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){Tc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new Ii(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Rc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Tc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let TT=0;class qr extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=Ra(),this.name="",this.type="Material",this.blending=Qs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Fd,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ne(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(r.blending=this.blending),this.side!==pr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Id&&(r.blendSrc=this.blendSrc),this.blendDst!==Fd&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const p in u){const m=u[p];delete m.metadata,f.push(m)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xy extends qr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gs;const al=new j,Vs=new j,ks=new j,Ws=new $t,rl=new $t,Yy=new $e,ju=new j,sl=new j,Zu=new j,dv=new $t,_d=new $t,pv=new $t;class AT extends On{constructor(t=new Xy){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new kn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new ET(i,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new Rc(r,3,0,!1)),Gs.setAttribute("uv",new Rc(r,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new $t(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),Yy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-ks.z);const r=this.material.rotation;let l,u;r!==0&&(u=Math.cos(r),l=Math.sin(r));const f=this.center;Ku(ju.set(-.5,-.5,0),ks,f,Vs,l,u),Ku(sl.set(.5,-.5,0),ks,f,Vs,l,u),Ku(Zu.set(.5,.5,0),ks,f,Vs,l,u),dv.set(0,0),_d.set(1,0),pv.set(1,1);let p=t.ray.intersectTriangle(ju,sl,Zu,!1,al);if(p===null&&(Ku(sl.set(-.5,.5,0),ks,f,Vs,l,u),_d.set(0,1),p=t.ray.intersectTriangle(ju,Zu,sl,!1,al),p===null))return;const m=t.ray.origin.distanceTo(al);m<t.near||m>t.far||i.push({distance:m,point:al.clone(),uv:Si.getInterpolation(al,ju,sl,Zu,dv,_d,pv,new $t),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ku(s,t,i,r,l,u){Ws.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(rl.x=u*Ws.x-l*Ws.y,rl.y=l*Ws.x+u*Ws.y):rl.copy(Ws),s.copy(t),s.x+=rl.x,s.y+=rl.y,s.applyMatrix4(Yy)}const ba=new j,vd=new j,Qu=new j,ur=new j,yd=new j,Ju=new j,xd=new j;class jp{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){vd.copy(t).add(i).multiplyScalar(.5),Qu.copy(i).sub(t).normalize(),ur.copy(this.origin).sub(vd);const u=t.distanceTo(i)*.5,f=-this.direction.dot(Qu),p=ur.dot(this.direction),m=-ur.dot(Qu),d=ur.lengthSq(),_=Math.abs(1-f*f);let v,g,M,b;if(_>0)if(v=f*m-p,g=f*p-m,b=u*_,v>=0)if(g>=-b)if(g<=b){const R=1/_;v*=R,g*=R,M=v*(v+f*g+2*p)+g*(f*v+g+2*m)+d}else g=u,v=Math.max(0,-(f*g+p)),M=-v*v+g*(g+2*m)+d;else g=-u,v=Math.max(0,-(f*g+p)),M=-v*v+g*(g+2*m)+d;else g<=-b?(v=Math.max(0,-(-f*u+p)),g=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+g*(g+2*m)+d):g<=b?(v=0,g=Math.min(Math.max(-u,-m),u),M=g*(g+2*m)+d):(v=Math.max(0,-(f*u+p)),g=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+g*(g+2*m)+d);else g=f>0?-u:u,v=Math.max(0,-(f*g+p)),M=-v*v+g*(g+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(vd).addScaledVector(Qu,g),M}intersectSphere(t,i){ba.subVectors(t.center,this.origin);const r=ba.dot(this.direction),l=ba.dot(ba)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,p,m;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(r=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(r=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),_>=0?(u=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(u=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),v>=0?(p=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(p=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ba)!==null}intersectTriangle(t,i,r,l,u){yd.subVectors(i,t),Ju.subVectors(r,t),xd.crossVectors(yd,Ju);let f=this.direction.dot(xd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ur.subVectors(this.origin,t);const m=p*this.direction.dot(Ju.crossVectors(ur,Ju));if(m<0)return null;const d=p*this.direction.dot(yd.cross(ur));if(d<0||m+d>f)return null;const _=-p*ur.dot(xd);return _<0?null:this.at(_/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zp extends qr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=My,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mv=new $e,Fr=new jp,$u=new Oc,gv=new j,tc=new j,ec=new j,nc=new j,Sd=new j,ic=new j,_v=new j,ac=new j;class Mi extends On{constructor(t=new kn,i=new Zp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(u&&p){ic.set(0,0,0);for(let m=0,d=u.length;m<d;m++){const _=p[m],v=u[m];_!==0&&(Sd.fromBufferAttribute(v,t),f?ic.addScaledVector(Sd,_):ic.addScaledVector(Sd.sub(i),_))}i.add(ic)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),$u.copy(r.boundingSphere),$u.applyMatrix4(u),Fr.copy(t.ray).recast(t.near),!($u.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere($u,gv)===null||Fr.origin.distanceToSquared(gv)>(t.far-t.near)**2))&&(mv.copy(u).invert(),Fr.copy(t.ray).applyMatrix4(mv),!(r.boundingBox!==null&&Fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Fr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,p=u.index,m=u.attributes.position,d=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,g=u.groups,M=u.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,R=g.length;b<R;b++){const y=g[b],x=f[y.materialIndex],A=Math.max(y.start,M.start),D=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let L=A,B=D;L<B;L+=3){const I=p.getX(L),F=p.getX(L+1),T=p.getX(L+2);l=rc(this,x,t,r,d,_,v,I,F,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const A=p.getX(y),D=p.getX(y+1),L=p.getX(y+2);l=rc(this,f,t,r,d,_,v,A,D,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,R=g.length;b<R;b++){const y=g[b],x=f[y.materialIndex],A=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let L=A,B=D;L<B;L+=3){const I=L,F=L+1,T=L+2;l=rc(this,x,t,r,d,_,v,I,F,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const A=y,D=y+1,L=y+2;l=rc(this,f,t,r,d,_,v,A,D,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function RT(s,t,i,r,l,u,f,p){let m;if(t.side===Jn?m=r.intersectTriangle(f,u,l,!0,p):m=r.intersectTriangle(l,u,f,t.side===pr,p),m===null)return null;ac.copy(p),ac.applyMatrix4(s.matrixWorld);const d=i.ray.origin.distanceTo(ac);return d<i.near||d>i.far?null:{distance:d,point:ac.clone(),object:s}}function rc(s,t,i,r,l,u,f,p,m,d){s.getVertexPosition(p,tc),s.getVertexPosition(m,ec),s.getVertexPosition(d,nc);const _=RT(s,t,i,r,tc,ec,nc,_v);if(_){const v=new j;Si.getBarycoord(_v,tc,ec,nc,v),l&&(_.uv=Si.getInterpolatedAttribute(l,p,m,d,v,new $t)),u&&(_.uv1=Si.getInterpolatedAttribute(u,p,m,d,v,new $t)),f&&(_.normal=Si.getInterpolatedAttribute(f,p,m,d,v,new j),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new j,materialIndex:0};Si.getNormal(tc,ec,nc,g.normal),_.face=g,_.barycoord=v}return _}class CT extends Nn{constructor(t=null,i=1,r=1,l,u,f,p,m,d=Cn,_=Cn,v,g){super(null,f,p,m,d,_,l,u,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Md=new j,wT=new j,DT=new de;class fr{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Md.subVectors(r,i).cross(wT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Md),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||DT.getNormalMatrix(t),l=this.coplanarPoint(Md).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Oc,LT=new $t(.5,.5),sc=new j;class Kp{constructor(t=new fr,i=new fr,r=new fr,l=new fr,u=new fr,f=new fr){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(u),p[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Yi,r=!1){const l=this.planes,u=t.elements,f=u[0],p=u[1],m=u[2],d=u[3],_=u[4],v=u[5],g=u[6],M=u[7],b=u[8],R=u[9],y=u[10],x=u[11],A=u[12],D=u[13],L=u[14],B=u[15];if(l[0].setComponents(d-f,M-_,x-b,B-A).normalize(),l[1].setComponents(d+f,M+_,x+b,B+A).normalize(),l[2].setComponents(d+p,M+v,x+R,B+D).normalize(),l[3].setComponents(d-p,M-v,x-R,B-D).normalize(),r)l[4].setComponents(m,g,y,L).normalize(),l[5].setComponents(d-m,M-g,x-y,B-L).normalize();else if(l[4].setComponents(d-m,M-g,x-y,B-L).normalize(),i===Yi)l[5].setComponents(d+m,M+g,x+y,B+L).normalize();else if(i===vl)l[5].setComponents(m,g,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(t){Br.center.set(0,0,0);const i=LT.distanceTo(t.center);return Br.radius=.7071067811865476+i,Br.applyMatrix4(t.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(sc.x=l.normal.x>0?t.max.x:t.min.x,sc.y=l.normal.y>0?t.max.y:t.min.y,sc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(sc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rp extends qr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cc=new j,wc=new j,vv=new $e,ol=new jp,oc=new Oc,bd=new j,yv=new j;class xv extends On{constructor(t=new kn,i=new Rp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Cc.fromBufferAttribute(i,l-1),wc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Cc.distanceTo(wc);t.setAttribute("lineDistance",new Pn(r,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),oc.copy(r.boundingSphere),oc.applyMatrix4(l),oc.radius+=u,t.ray.intersectsSphere(oc)===!1)return;vv.copy(l).invert(),ol.copy(t.ray).applyMatrix4(vv);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const M=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let R=M,y=b-1;R<y;R+=d){const x=_.getX(R),A=_.getX(R+1),D=lc(this,t,ol,m,x,A,R);D&&i.push(D)}if(this.isLineLoop){const R=_.getX(b-1),y=_.getX(M),x=lc(this,t,ol,m,R,y,b-1);x&&i.push(x)}}else{const M=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let R=M,y=b-1;R<y;R+=d){const x=lc(this,t,ol,m,R,R+1,R);x&&i.push(x)}if(this.isLineLoop){const R=lc(this,t,ol,m,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function lc(s,t,i,r,l,u,f){const p=s.geometry.attributes.position;if(Cc.fromBufferAttribute(p,l),wc.fromBufferAttribute(p,u),i.distanceSqToSegment(Cc,wc,bd,yv)>r)return;bd.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(bd);if(!(d<t.near||d>t.far))return{distance:d,point:yv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class qy extends Nn{constructor(t=[],i=Xr,r,l,u,f,p,m,d,_){super(t,i,r,l,u,f,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class UT extends Nn{constructor(t,i,r,l,u,f,p,m,d){super(t,i,r,l,u,f,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xl extends Nn{constructor(t,i,r=Qi,l,u,f,p=Cn,m=Cn,d,_=La,v=1){if(_!==La&&_!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,u,f,p,m,_,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class NT extends xl{constructor(t,i=Qi,r=Xr,l,u,f=Cn,p=Cn,m,d=La){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,r,l,u,f,p,m,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class jy extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Tl extends kn{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const p=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],d=[],_=[],v=[];let g=0,M=0;b("z","y","x",-1,-1,r,i,t,f,u,0),b("z","y","x",1,-1,r,i,-t,f,u,1),b("x","z","y",1,1,t,r,i,l,f,2),b("x","z","y",1,-1,t,r,-i,l,f,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Pn(d,3)),this.setAttribute("normal",new Pn(_,3)),this.setAttribute("uv",new Pn(v,2));function b(R,y,x,A,D,L,B,I,F,T,U){const st=L/F,G=B/T,J=L/2,Q=B/2,rt=I/2,Z=F+1,N=T+1;let z=0,ot=0;const ht=new j;for(let St=0;St<N;St++){const P=St*G-Q;for(let Y=0;Y<Z;Y++){const _t=Y*st-J;ht[R]=_t*A,ht[y]=P*D,ht[x]=rt,d.push(ht.x,ht.y,ht.z),ht[R]=0,ht[y]=0,ht[x]=I>0?1:-1,_.push(ht.x,ht.y,ht.z),v.push(Y/F),v.push(1-St/T),z+=1}}for(let St=0;St<T;St++)for(let P=0;P<F;P++){const Y=g+P+Z*St,_t=g+P+Z*(St+1),At=g+(P+1)+Z*(St+1),Ot=g+(P+1)+Z*St;m.push(Y,_t,Ot),m.push(_t,At,Ot),ot+=6}p.addGroup(M,ot,U),M+=ot,g+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Qp extends kn{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const u=[],f=[];p(l),d(r),_(),this.setAttribute("position",new Pn(u,3)),this.setAttribute("normal",new Pn(u.slice(),3)),this.setAttribute("uv",new Pn(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(A){const D=new j,L=new j,B=new j;for(let I=0;I<i.length;I+=3)M(i[I+0],D),M(i[I+1],L),M(i[I+2],B),m(D,L,B,A)}function m(A,D,L,B){const I=B+1,F=[];for(let T=0;T<=I;T++){F[T]=[];const U=A.clone().lerp(L,T/I),st=D.clone().lerp(L,T/I),G=I-T;for(let J=0;J<=G;J++)J===0&&T===I?F[T][J]=U:F[T][J]=U.clone().lerp(st,J/G)}for(let T=0;T<I;T++)for(let U=0;U<2*(I-T)-1;U++){const st=Math.floor(U/2);U%2===0?(g(F[T][st+1]),g(F[T+1][st]),g(F[T][st])):(g(F[T][st+1]),g(F[T+1][st+1]),g(F[T+1][st]))}}function d(A){const D=new j;for(let L=0;L<u.length;L+=3)D.x=u[L+0],D.y=u[L+1],D.z=u[L+2],D.normalize().multiplyScalar(A),u[L+0]=D.x,u[L+1]=D.y,u[L+2]=D.z}function _(){const A=new j;for(let D=0;D<u.length;D+=3){A.x=u[D+0],A.y=u[D+1],A.z=u[D+2];const L=y(A)/2/Math.PI+.5,B=x(A)/Math.PI+.5;f.push(L,1-B)}b(),v()}function v(){for(let A=0;A<f.length;A+=6){const D=f[A+0],L=f[A+2],B=f[A+4],I=Math.max(D,L,B),F=Math.min(D,L,B);I>.9&&F<.1&&(D<.2&&(f[A+0]+=1),L<.2&&(f[A+2]+=1),B<.2&&(f[A+4]+=1))}}function g(A){u.push(A.x,A.y,A.z)}function M(A,D){const L=A*3;D.x=t[L+0],D.y=t[L+1],D.z=t[L+2]}function b(){const A=new j,D=new j,L=new j,B=new j,I=new $t,F=new $t,T=new $t;for(let U=0,st=0;U<u.length;U+=9,st+=6){A.set(u[U+0],u[U+1],u[U+2]),D.set(u[U+3],u[U+4],u[U+5]),L.set(u[U+6],u[U+7],u[U+8]),I.set(f[st+0],f[st+1]),F.set(f[st+2],f[st+3]),T.set(f[st+4],f[st+5]),B.copy(A).add(D).add(L).divideScalar(3);const G=y(B);R(I,st+0,A,G),R(F,st+2,D,G),R(T,st+4,L,G)}}function R(A,D,L,B){B<0&&A.x===1&&(f[D]=A.x-1),L.x===0&&L.z===0&&(f[D]=B/2/Math.PI+.5)}function y(A){return Math.atan2(A.z,-A.x)}function x(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qp(t.vertices,t.indices,t.radius,t.detail)}}class Jp extends Qp{constructor(t=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Jp(t.radius,t.detail)}}class Pc extends kn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,_=m+1,v=t/p,g=i/m,M=[],b=[],R=[],y=[];for(let x=0;x<_;x++){const A=x*g-f;for(let D=0;D<d;D++){const L=D*v-u;b.push(L,-A,0),R.push(0,0,1),y.push(D/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let A=0;A<p;A++){const D=A+d*x,L=A+d*(x+1),B=A+1+d*(x+1),I=A+1+d*x;M.push(D,L,I),M.push(L,B,I)}this.setIndex(M),this.setAttribute("position",new Pn(b,3)),this.setAttribute("normal",new Pn(R,3)),this.setAttribute("uv",new Pn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Dc extends kn{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:f,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+p,Math.PI);let d=0;const _=[],v=new j,g=new j,M=[],b=[],R=[],y=[];for(let x=0;x<=r;x++){const A=[],D=x/r;let L=0;x===0&&f===0?L=.5/i:x===r&&m===Math.PI&&(L=-.5/i);for(let B=0;B<=i;B++){const I=B/i;v.x=-t*Math.cos(l+I*u)*Math.sin(f+D*p),v.y=t*Math.cos(f+D*p),v.z=t*Math.sin(l+I*u)*Math.sin(f+D*p),b.push(v.x,v.y,v.z),g.copy(v).normalize(),R.push(g.x,g.y,g.z),y.push(I+L,1-D),A.push(d++)}_.push(A)}for(let x=0;x<r;x++)for(let A=0;A<i;A++){const D=_[x][A+1],L=_[x][A],B=_[x+1][A],I=_[x+1][A+1];(x!==0||f>0)&&M.push(D,L,I),(x!==r-1||m<Math.PI)&&M.push(L,B,I)}this.setIndex(M),this.setAttribute("position",new Pn(b,3)),this.setAttribute("normal",new Pn(R,3)),this.setAttribute("uv",new Pn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function io(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Vn(s){const t={};for(let i=0;i<s.length;i++){const r=io(s[i]);for(const l in r)t[l]=r[l]}return t}function OT(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Zy(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const PT={clone:io,merge:Vn};var IT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends qr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IT,this.fragmentShader=FT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=OT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class BT extends $i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ky extends qr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=By,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zT extends Ky{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class HT extends qr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class GT extends qr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Qy extends On{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Ed=new $e,Sv=new j,Mv=new j;class VT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kp,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Sv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Sv),Mv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Mv),i.updateMatrixWorld(),Ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===vl||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ed)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const uc=new j,cc=new mr,Vi=new j;class Jy extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(uc,cc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,cc,Vi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(uc,cc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,cc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new j,bv=new $t,Ev=new $t;class ci extends Jy{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=yl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-t/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(cr.x,cr.y).multiplyScalar(-t/cr.z)}getViewSize(t,i){return this.getViewBounds(t,bv,Ev),i.subVectors(Ev,bv)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/d,l*=f.width/m,r*=f.height/d}const p=this.filmOffset;p!==0&&(u+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class kT extends VT{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0}}class Td extends Qy{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new kT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class $y extends Jy{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,f=u+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class WT extends Qy{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xs=-90,Ys=1;class XT extends On{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(Xs,Ys,t,i);l.layers=this.layers,this.add(l);const u=new ci(Xs,Ys,t,i);u.layers=this.layers,this.add(u);const f=new ci(Xs,Ys,t,i);f.layers=this.layers,this.add(f);const p=new ci(Xs,Ys,t,i);p.layers=this.layers,this.add(p);const m=new ci(Xs,Ys,t,i);m.layers=this.layers,this.add(m);const d=new ci(Xs,Ys,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,p,m]=i;for(const d of i)this.remove(d);if(t===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,p,m,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(r,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(r,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class YT extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class qT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ne("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class Tv{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jT extends Yr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Av(s,t,i,r){const l=ZT(r);switch(i){case Py:return s*t;case Fy:return s*t/l.components*l.byteLength;case Gp:return s*t/l.components*l.byteLength;case eo:return s*t*2/l.components*l.byteLength;case Vp:return s*t*2/l.components*l.byteLength;case Iy:return s*t*3/l.components*l.byteLength;case Pi:return s*t*4/l.components*l.byteLength;case kp:return s*t*4/l.components*l.byteLength;case _c:case vc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yc:case xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jd:case Kd:return Math.max(s,16)*Math.max(t,8)/4;case qd:case Zd:return Math.max(s,8)*Math.max(t,8)/2;case Qd:case Jd:case tp:case ep:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $d:case np:case ip:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ap:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case sp:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case op:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case lp:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case up:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case cp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case fp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case hp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case dp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case pp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case mp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case gp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _p:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case vp:case yp:case xp:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sp:case Mp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case bp:case Ep:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZT(s){switch(s){case fi:case Ly:return{byteLength:1,components:1};case gl:case Uy:case Da:return{byteLength:2,components:1};case zp:case Hp:return{byteLength:2,components:4};case Qi:case Bp:case Xi:return{byteLength:4,components:1};case Ny:case Oy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);function tx(){let s=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function KT(s){const t=new WeakMap;function i(p,m){const d=p.array,_=p.usage,v=d.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,d,_),p.onUploadCallback();let M;if(d instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=s.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=s.SHORT;else if(d instanceof Uint32Array)M=s.UNSIGNED_INT;else if(d instanceof Int32Array)M=s.INT;else if(d instanceof Int8Array)M=s.BYTE;else if(d instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,m,d){const _=m.array,v=m.updateRanges;if(s.bindBuffer(d,p),v.length===0)s.bufferSubData(d,0,_);else{v.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<v.length;M++){const b=v[g],R=v[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++g,v[g]=R)}v.length=g+1;for(let M=0,b=v.length;M<b;M++){const R=v[M];s.bufferSubData(d,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(s.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:u,update:f}}var QT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JT=`#ifdef USE_ALPHAHASH
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
#endif`,$T=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
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
#endif`,a1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r1=`#ifdef USE_BATCHING
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
#endif`,s1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c1=`#ifdef USE_IRIDESCENCE
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
#endif`,f1=`#ifdef USE_BUMPMAP
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x1=`#define PI 3.141592653589793
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
} // validated`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M1=`vec3 transformedNormal = objectNormal;
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
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R1="gl_FragColor = linearToOutputTexel( gl_FragColor );",C1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w1=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,O1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B1=`#ifdef USE_GRADIENTMAP
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
}`,z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V1=`uniform bool receiveShadow;
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
#endif`,k1=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,W1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
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
#endif`,Z1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,K1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sA=`#if defined( USE_POINTS_UV )
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
#endif`,oA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hA=`#ifdef USE_MORPHTARGETS
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
#endif`,dA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yA=`#ifdef USE_NORMALMAP
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
#endif`,xA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,NA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PA=`float getShadowMask() {
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
}`,IA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FA=`#ifdef USE_SKINNING
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
#endif`,BA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zA=`#ifdef USE_SKINNING
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
#endif`,HA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WA=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XA=`#ifdef USE_TRANSMISSION
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
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QA=`uniform sampler2D t2D;
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
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`#include <common>
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
}`,iR=`#if DEPTH_PACKING == 3200
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
}`,aR=`#define DISTANCE
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
}`,rR=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lR=`uniform float scale;
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
}`,uR=`uniform vec3 diffuse;
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
}`,cR=`#include <common>
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
}`,fR=`uniform vec3 diffuse;
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
}`,hR=`#define LAMBERT
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
}`,dR=`#define LAMBERT
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
}`,pR=`#define MATCAP
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
}`,mR=`#define MATCAP
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
}`,gR=`#define NORMAL
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
}`,_R=`#define NORMAL
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
}`,vR=`#define PHONG
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
}`,yR=`#define PHONG
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
}`,xR=`#define STANDARD
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
}`,SR=`#define STANDARD
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
}`,MR=`#define TOON
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
}`,bR=`#define TOON
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
}`,ER=`uniform float size;
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
}`,TR=`uniform vec3 diffuse;
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
}`,AR=`#include <common>
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
}`,RR=`uniform vec3 color;
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
}`,CR=`uniform float rotation;
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
}`,wR=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:QT,alphahash_pars_fragment:JT,alphamap_fragment:$T,alphamap_pars_fragment:t1,alphatest_fragment:e1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:a1,batching_pars_vertex:r1,batching_vertex:s1,begin_vertex:o1,beginnormal_vertex:l1,bsdfs:u1,iridescence_fragment:c1,bumpmap_pars_fragment:f1,clipping_planes_fragment:h1,clipping_planes_pars_fragment:d1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:_1,color_pars_vertex:v1,color_vertex:y1,common:x1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:M1,displacementmap_pars_vertex:b1,displacementmap_vertex:E1,emissivemap_fragment:T1,emissivemap_pars_fragment:A1,colorspace_fragment:R1,colorspace_pars_fragment:C1,envmap_fragment:w1,envmap_common_pars_fragment:D1,envmap_pars_fragment:L1,envmap_pars_vertex:U1,envmap_physical_pars_fragment:k1,envmap_vertex:N1,fog_vertex:O1,fog_pars_vertex:P1,fog_fragment:I1,fog_pars_fragment:F1,gradientmap_pars_fragment:B1,lightmap_pars_fragment:z1,lights_lambert_fragment:H1,lights_lambert_pars_fragment:G1,lights_pars_begin:V1,lights_toon_fragment:W1,lights_toon_pars_fragment:X1,lights_phong_fragment:Y1,lights_phong_pars_fragment:q1,lights_physical_fragment:j1,lights_physical_pars_fragment:Z1,lights_fragment_begin:K1,lights_fragment_maps:Q1,lights_fragment_end:J1,logdepthbuf_fragment:$1,logdepthbuf_pars_fragment:tA,logdepthbuf_pars_vertex:eA,logdepthbuf_vertex:nA,map_fragment:iA,map_pars_fragment:aA,map_particle_fragment:rA,map_particle_pars_fragment:sA,metalnessmap_fragment:oA,metalnessmap_pars_fragment:lA,morphinstance_vertex:uA,morphcolor_vertex:cA,morphnormal_vertex:fA,morphtarget_pars_vertex:hA,morphtarget_vertex:dA,normal_fragment_begin:pA,normal_fragment_maps:mA,normal_pars_fragment:gA,normal_pars_vertex:_A,normal_vertex:vA,normalmap_pars_fragment:yA,clearcoat_normal_fragment_begin:xA,clearcoat_normal_fragment_maps:SA,clearcoat_pars_fragment:MA,iridescence_pars_fragment:bA,opaque_fragment:EA,packing:TA,premultiplied_alpha_fragment:AA,project_vertex:RA,dithering_fragment:CA,dithering_pars_fragment:wA,roughnessmap_fragment:DA,roughnessmap_pars_fragment:LA,shadowmap_pars_fragment:UA,shadowmap_pars_vertex:NA,shadowmap_vertex:OA,shadowmask_pars_fragment:PA,skinbase_vertex:IA,skinning_pars_vertex:FA,skinning_vertex:BA,skinnormal_vertex:zA,specularmap_fragment:HA,specularmap_pars_fragment:GA,tonemapping_fragment:VA,tonemapping_pars_fragment:kA,transmission_fragment:WA,transmission_pars_fragment:XA,uv_pars_fragment:YA,uv_pars_vertex:qA,uv_vertex:jA,worldpos_vertex:ZA,background_vert:KA,background_frag:QA,backgroundCube_vert:JA,backgroundCube_frag:$A,cube_vert:tR,cube_frag:eR,depth_vert:nR,depth_frag:iR,distance_vert:aR,distance_frag:rR,equirect_vert:sR,equirect_frag:oR,linedashed_vert:lR,linedashed_frag:uR,meshbasic_vert:cR,meshbasic_frag:fR,meshlambert_vert:hR,meshlambert_frag:dR,meshmatcap_vert:pR,meshmatcap_frag:mR,meshnormal_vert:gR,meshnormal_frag:_R,meshphong_vert:vR,meshphong_frag:yR,meshphysical_vert:xR,meshphysical_frag:SR,meshtoon_vert:MR,meshtoon_frag:bR,points_vert:ER,points_frag:TR,shadow_vert:AR,shadow_frag:RR,sprite_vert:CR,sprite_frag:wR},Ut={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Wi={basic:{uniforms:Vn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Vn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Vn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Vn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Vn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Se(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Vn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Vn([Ut.points,Ut.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Vn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Vn([Ut.common,Ut.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Vn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Vn([Ut.sprite,Ut.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Vn([Ut.common,Ut.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Vn([Ut.lights,Ut.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Wi.physical={uniforms:Vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const fc={r:0,b:0,g:0},zr=new Ji,DR=new $e;function LR(s,t,i,r,l,u){const f=new Se(0);let p=l===!0?0:1,m,d,_=null,v=0,g=null;function M(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const L=A.backgroundBlurriness>0;D=t.get(D,L)}return D}function b(A){let D=!1;const L=M(A);L===null?y(f,p):L&&L.isColor&&(y(L,1),D=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(A,D){const L=M(D);L&&(L.isCubeTexture||L.mapping===Nc)?(d===void 0&&(d=new Mi(new Tl(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:io(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),zr.copy(D.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(DR.makeRotationFromEuler(zr)),d.material.toneMapped=we.getTransfer(L.colorSpace)!==ze,(_!==L||v!==L.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,_=L,v=L.version,g=s.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Mi(new Pc(2,2),new $i({name:"BackgroundMaterial",uniforms:io(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=we.getTransfer(L.colorSpace)!==ze,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=L,v=L.version,g=s.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function y(A,D){A.getRGB(fc,Zy(s)),i.buffers.color.setClear(fc.r,fc.g,fc.b,D,u)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(A,D=1){f.set(A),p=D,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,y(f,p)},render:b,addToRenderList:R,dispose:x}}function UR(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let u=l,f=!1;function p(G,J,Q,rt,Z){let N=!1;const z=v(G,rt,Q,J);u!==z&&(u=z,d(u.object)),N=M(G,rt,Q,Z),N&&b(G,rt,Q,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(N||f)&&(f=!1,L(G,J,Q,rt),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return s.createVertexArray()}function d(G){return s.bindVertexArray(G)}function _(G){return s.deleteVertexArray(G)}function v(G,J,Q,rt){const Z=rt.wireframe===!0;let N=r[J.id];N===void 0&&(N={},r[J.id]=N);const z=G.isInstancedMesh===!0?G.id:0;let ot=N[z];ot===void 0&&(ot={},N[z]=ot);let ht=ot[Q.id];ht===void 0&&(ht={},ot[Q.id]=ht);let St=ht[Z];return St===void 0&&(St=g(m()),ht[Z]=St),St}function g(G){const J=[],Q=[],rt=[];for(let Z=0;Z<i;Z++)J[Z]=0,Q[Z]=0,rt[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:Q,attributeDivisors:rt,object:G,attributes:{},index:null}}function M(G,J,Q,rt){const Z=u.attributes,N=J.attributes;let z=0;const ot=Q.getAttributes();for(const ht in ot)if(ot[ht].location>=0){const P=Z[ht];let Y=N[ht];if(Y===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),P===void 0||P.attribute!==Y||Y&&P.data!==Y.data)return!0;z++}return u.attributesNum!==z||u.index!==rt}function b(G,J,Q,rt){const Z={},N=J.attributes;let z=0;const ot=Q.getAttributes();for(const ht in ot)if(ot[ht].location>=0){let P=N[ht];P===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const Y={};Y.attribute=P,P&&P.data&&(Y.data=P.data),Z[ht]=Y,z++}u.attributes=Z,u.attributesNum=z,u.index=rt}function R(){const G=u.newAttributes;for(let J=0,Q=G.length;J<Q;J++)G[J]=0}function y(G){x(G,0)}function x(G,J){const Q=u.newAttributes,rt=u.enabledAttributes,Z=u.attributeDivisors;Q[G]=1,rt[G]===0&&(s.enableVertexAttribArray(G),rt[G]=1),Z[G]!==J&&(s.vertexAttribDivisor(G,J),Z[G]=J)}function A(){const G=u.newAttributes,J=u.enabledAttributes;for(let Q=0,rt=J.length;Q<rt;Q++)J[Q]!==G[Q]&&(s.disableVertexAttribArray(Q),J[Q]=0)}function D(G,J,Q,rt,Z,N,z){z===!0?s.vertexAttribIPointer(G,J,Q,Z,N):s.vertexAttribPointer(G,J,Q,rt,Z,N)}function L(G,J,Q,rt){R();const Z=rt.attributes,N=Q.getAttributes(),z=J.defaultAttributeValues;for(const ot in N){const ht=N[ot];if(ht.location>=0){let St=Z[ot];if(St===void 0&&(ot==="instanceMatrix"&&G.instanceMatrix&&(St=G.instanceMatrix),ot==="instanceColor"&&G.instanceColor&&(St=G.instanceColor)),St!==void 0){const P=St.normalized,Y=St.itemSize,_t=t.get(St);if(_t===void 0)continue;const At=_t.buffer,Ot=_t.type,$=_t.bytesPerElement,vt=Ot===s.INT||Ot===s.UNSIGNED_INT||St.gpuType===Bp;if(St.isInterleavedBufferAttribute){const Mt=St.data,Gt=Mt.stride,jt=St.offset;if(Mt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<ht.locationSize;Jt++)x(ht.location+Jt,Mt.meshPerAttribute);G.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Jt=0;Jt<ht.locationSize;Jt++)y(ht.location+Jt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let Jt=0;Jt<ht.locationSize;Jt++)D(ht.location+Jt,Y/ht.locationSize,Ot,P,Gt*$,(jt+Y/ht.locationSize*Jt)*$,vt)}else{if(St.isInstancedBufferAttribute){for(let Mt=0;Mt<ht.locationSize;Mt++)x(ht.location+Mt,St.meshPerAttribute);G.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Mt=0;Mt<ht.locationSize;Mt++)y(ht.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let Mt=0;Mt<ht.locationSize;Mt++)D(ht.location+Mt,Y/ht.locationSize,Ot,P,Y*$,Y/ht.locationSize*Mt*$,vt)}}else if(z!==void 0){const P=z[ot];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(ht.location,P);break;case 3:s.vertexAttrib3fv(ht.location,P);break;case 4:s.vertexAttrib4fv(ht.location,P);break;default:s.vertexAttrib1fv(ht.location,P)}}}}A()}function B(){U();for(const G in r){const J=r[G];for(const Q in J){const rt=J[Q];for(const Z in rt){const N=rt[Z];for(const z in N)_(N[z].object),delete N[z];delete rt[Z]}}delete r[G]}}function I(G){if(r[G.id]===void 0)return;const J=r[G.id];for(const Q in J){const rt=J[Q];for(const Z in rt){const N=rt[Z];for(const z in N)_(N[z].object),delete N[z];delete rt[Z]}}delete r[G.id]}function F(G){for(const J in r){const Q=r[J];for(const rt in Q){const Z=Q[rt];if(Z[G.id]===void 0)continue;const N=Z[G.id];for(const z in N)_(N[z].object),delete N[z];delete Z[G.id]}}}function T(G){for(const J in r){const Q=r[J],rt=G.isInstancedMesh===!0?G.id:0,Z=Q[rt];if(Z!==void 0){for(const N in Z){const z=Z[N];for(const ot in z)_(z[ot].object),delete z[ot];delete Z[N]}delete Q[rt],Object.keys(Q).length===0&&delete r[J]}}}function U(){st(),f=!0,u!==l&&(u=l,d(u.object))}function st(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:st,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:y,disableUnusedAttributes:A}}function NR(s,t,i){let r;function l(d){r=d}function u(d,_){s.drawArrays(r,d,_),i.update(_,r,1)}function f(d,_,v){v!==0&&(s.drawArraysInstanced(r,d,_,v),i.update(_,r,v))}function p(d,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,_,0,v);let M=0;for(let b=0;b<v;b++)M+=_[b];i.update(M,r,1)}function m(d,_,v,g){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<d.length;b++)f(d[b],_[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(r,d,0,_,0,g,0,v);let b=0;for(let R=0;R<v;R++)b+=_[R]*g[R];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function OR(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Pi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const T=F===Da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==fi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Xi&&!T)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const _=m(d);_!==d&&(ne("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:L,maxSamples:B,samples:I}}function PR(s){const t=this;let i=null,r=0,l=!1,u=!1;const f=new fr,p=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||r!==0||l;return l=g,r=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,M){const b=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,x=s.get(v);if(!l||b===null||b.length===0||u&&!y)u?_(null):d();else{const A=u?0:r,D=A*4;let L=x.clippingState||null;m.value=L,L=_(b,g,D,M);for(let B=0;B!==D;++B)L[B]=i[B];x.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(v,g,M,b){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const x=M+R*4,A=g.matrixWorldInverse;p.getNormalMatrix(A),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,L=M;D!==R;++D,L+=4)f.copy(v[D]).applyMatrix4(A,p),f.normal.toArray(y,L),y[L+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}const dr=4,Rv=[.125,.215,.35,.446,.526,.582],Vr=20,IR=256,ll=new $y,Cv=new Se;let Ad=null,Rd=0,Cd=0,wd=!1;const FR=new j;class wv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:p=FR}=u;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ad,Rd,Cd),this._renderer.xr.enabled=wd,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Xr||t.mapping===to?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Da,format:Pi,colorSpace:no,depthBuffer:!1},l=Dv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=BR(u)),this._blurMaterial=HR(u,t,i),this._ggxMaterial=zR(u,t,i)}return l}_compileMaterial(t){const i=new Mi(new kn,t);this._renderer.compile(i,ll)}_sceneToCubeUV(t,i,r,l,u){const m=new ci(90,1,i,r),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(Cv),v.toneMapping=ji,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mi(new Tl,new Zp({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let x=!1;const A=t.background;A?A.isColor&&(y.color.copy(A),t.background=null,x=!0):(y.color.copy(Cv),x=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(m.up.set(0,d[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[D],u.y,u.z)):L===1?(m.up.set(0,0,d[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[D],u.z)):(m.up.set(0,d[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[D]));const B=this._cubeSize;qs(l,L*B,D>2?B:0,B,B),v.setRenderTarget(l),x&&v.render(R,m),v.render(t,m)}v.toneMapping=M,v.autoClear=g,t.background=A}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Xr||t.mapping===to;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const p=u.uniforms;p.envMap.value=t;const m=this._cubeSize;qs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,ll)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,d=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,M=v*g,{_lodMax:b}=this,R=this._sizeLods[r],y=3*R*(r>b-dr?r-b+dr:0),x=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,qs(u,y,x,3*R,2*R),l.setRenderTarget(u),l.render(p,ll),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,qs(t,y,x,3*R,2*R),l.setRenderTarget(t),l.render(p,ll)}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=d;const g=d.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Vr-1),R=u/b,y=isFinite(u)?1+Math.floor(_*R):Vr;y>Vr&&ne(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vr}`);const x=[];let A=0;for(let F=0;F<Vr;++F){const T=F/R,U=Math.exp(-T*T/2);x.push(U),F===0?A+=U:F<y&&(A+=2*U)}for(let F=0;F<x.length;F++)x[F]=x[F]/A;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:D}=this;g.dTheta.value=b,g.mipInt.value=D-r;const L=this._sizeLods[l],B=3*L*(l>D-dr?l-D+dr:0),I=4*(this._cubeSize-L);qs(i,B,I,3*L,2*L),m.setRenderTarget(i),m.render(v,ll)}}function BR(s){const t=[],i=[],r=[];let l=s;const u=s-dr+1+Rv.length;for(let f=0;f<u;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>s-dr?m=Rv[f-s+dr-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,b=6,R=3,y=2,x=1,A=new Float32Array(R*b*M),D=new Float32Array(y*b*M),L=new Float32Array(x*b*M);for(let I=0;I<M;I++){const F=I%3*2/3-1,T=I>2?0:-1,U=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];A.set(U,R*b*I),D.set(g,y*b*I);const st=[I,I,I,I,I,I];L.set(st,x*b*I)}const B=new kn;B.setAttribute("position",new Ii(A,R)),B.setAttribute("uv",new Ii(D,y)),B.setAttribute("faceIndex",new Ii(L,x)),r.push(new Mi(B,null)),l>dr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Dv(s,t,i){const r=new Zi(s,t,i);return r.texture.mapping=Nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function qs(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function zR(s,t,i){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function HR(s,t,i){const r=new Float32Array(Vr),l=new j(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Lv(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Uv(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}class ex extends Zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new qy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Tl(5,5,5),u=new $i({name:"CubemapFromEquirect",uniforms:io(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:Aa});u.uniforms.tEquirect.value=i;const f=new Mi(l,u),p=i.minFilter;return i.minFilter===kr&&(i.minFilter=Un),new XT(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}function GR(s){let t=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?f(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===Qh||M===Jh)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const R=new ex(b.height);return R.fromEquirectangularTexture(s,g),t.set(g,R),g.addEventListener("dispose",d),p(R.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,b=M===Qh||M===Jh,R=M===Xr||M===to;if(b||R){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new wv(s)),y=b?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const A=g.image;return b&&A&&A.height>0||R&&A&&m(A)?(r===null&&(r=new wv(s)),y=b?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function p(g,M){return M===Qh?g.mapping=Xr:M===Jh&&(g.mapping=to),g}function m(g){let M=0;const b=6;for(let R=0;R<b;R++)g[R]!==void 0&&M++;return M===b}function d(g){const M=g.target;M.removeEventListener("dispose",d);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function v(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function VR(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ac("WebGLRenderer: "+r+" extension not supported."),l}}}function kR(s,t,i,r){const l={},u=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete l[g.id];const M=u.get(g);M&&(t.remove(M),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const M in g)t.update(g[M],s.ARRAY_BUFFER)}function d(v){const g=[],M=v.index,b=v.attributes.position;let R=0;if(b===void 0)return;if(M!==null){const A=M.array;R=M.version;for(let D=0,L=A.length;D<L;D+=3){const B=A[D+0],I=A[D+1],F=A[D+2];g.push(B,I,I,F,F,B)}}else{const A=b.array;R=b.version;for(let D=0,L=A.length/3-1;D<L;D+=3){const B=D+0,I=D+1,F=D+2;g.push(B,I,I,F,F,B)}}const y=new(b.count>=65535?Wy:ky)(g,1);y.version=R;const x=u.get(v);x&&t.remove(x),u.set(v,y)}function _(v){const g=u.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&d(v)}else d(v);return u.get(v)}return{get:p,update:m,getWireframeAttribute:_}}function WR(s,t,i){let r;function l(g){r=g}let u,f;function p(g){u=g.type,f=g.bytesPerElement}function m(g,M){s.drawElements(r,M,u,g*f),i.update(M,r,1)}function d(g,M,b){b!==0&&(s.drawElementsInstanced(r,M,u,g*f,b),i.update(M,r,b))}function _(g,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,g,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];i.update(y,r,1)}function v(g,M,b,R){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)d(g[x]/f,M[x],R[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,g,0,R,0,b);let x=0;for(let A=0;A<b;A++)x+=M[A]*R[A];i.update(x,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function XR(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(u/3);break;case s.LINES:i.lines+=p*(u/2);break;case s.LINE_STRIP:i.lines+=p*(u-1);break;case s.LINE_LOOP:i.lines+=p*u;break;case s.POINTS:i.points+=p*u;break;default:Ce("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function YR(s,t,i){const r=new WeakMap,l=new rn;function u(f,p,m){const d=f.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(p);if(g===void 0||g.count!==v){let st=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",st)};var M=st;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],D=p.morphAttributes.color||[];let L=0;b===!0&&(L=1),R===!0&&(L=2),y===!0&&(L=3);let B=p.attributes.position.count*L,I=1;B>t.maxTextureSize&&(I=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*I*4*v),T=new Hy(F,B,I,v);T.type=Xi,T.needsUpdate=!0;const U=L*4;for(let G=0;G<v;G++){const J=x[G],Q=A[G],rt=D[G],Z=B*I*4*G;for(let N=0;N<J.count;N++){const z=N*U;b===!0&&(l.fromBufferAttribute(J,N),F[Z+z+0]=l.x,F[Z+z+1]=l.y,F[Z+z+2]=l.z,F[Z+z+3]=0),R===!0&&(l.fromBufferAttribute(Q,N),F[Z+z+4]=l.x,F[Z+z+5]=l.y,F[Z+z+6]=l.z,F[Z+z+7]=0),y===!0&&(l.fromBufferAttribute(rt,N),F[Z+z+8]=l.x,F[Z+z+9]=l.y,F[Z+z+10]=l.z,F[Z+z+11]=rt.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new $t(B,I)},r.set(p,g),p.addEventListener("dispose",st)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<d.length;y++)b+=d[y];const R=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",d)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function qR(s,t,i,r,l){let u=new WeakMap;function f(d){const _=l.render.frame,v=d.geometry,g=t.get(d,v);if(u.get(g)!==_&&(t.update(g),u.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),u.get(d)!==_&&(i.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,s.ARRAY_BUFFER),u.set(d,_))),d.isSkinnedMesh){const M=d.skeleton;u.get(M)!==_&&(M.update(),u.set(M,_))}return g}function p(){u=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:p}}const jR={[by]:"LINEAR_TONE_MAPPING",[Ey]:"REINHARD_TONE_MAPPING",[Ty]:"CINEON_TONE_MAPPING",[Ay]:"ACES_FILMIC_TONE_MAPPING",[Cy]:"AGX_TONE_MAPPING",[wy]:"NEUTRAL_TONE_MAPPING",[Ry]:"CUSTOM_TONE_MAPPING"};function ZR(s,t,i,r,l){const u=new Zi(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Zi(t,i,{type:Da,depthBuffer:!1,stencilBuffer:!1}),p=new kn;p.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Pn([0,2,0,0,2,0],2));const m=new BT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Mi(p,m),_=new $y(-1,1,1,-1,0,1);let v=null,g=null,M=!1,b,R=null,y=[],x=!1;this.setSize=function(A,D){u.setSize(A,D),f.setSize(A,D);for(let L=0;L<y.length;L++){const B=y[L];B.setSize&&B.setSize(A,D)}},this.setEffects=function(A){y=A,x=y.length>0&&y[0].isRenderPass===!0;const D=u.width,L=u.height;for(let B=0;B<y.length;B++){const I=y[B];I.setSize&&I.setSize(D,L)}},this.begin=function(A,D){if(M||A.toneMapping===ji&&y.length===0)return!1;if(R=D,D!==null){const L=D.width,B=D.height;(u.width!==L||u.height!==B)&&this.setSize(L,B)}return x===!1&&A.setRenderTarget(u),b=A.toneMapping,A.toneMapping=ji,!0},this.hasRenderPass=function(){return x},this.end=function(A,D){A.toneMapping=b,M=!0;let L=u,B=f;for(let I=0;I<y.length;I++){const F=y[I];if(F.enabled!==!1&&(F.render(A,B,L,D),F.needsSwap!==!1)){const T=L;L=B,B=T}}if(v!==A.outputColorSpace||g!==A.toneMapping){v=A.outputColorSpace,g=A.toneMapping,m.defines={},we.getTransfer(v)===ze&&(m.defines.SRGB_TRANSFER="");const I=jR[g];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,A.setRenderTarget(R),A.render(d,_),R=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),f.dispose(),p.dispose(),m.dispose()}}const nx=new Nn,Cp=new xl(1,1),ix=new Hy,ax=new hT,rx=new qy,Nv=[],Ov=[],Pv=new Float32Array(16),Iv=new Float32Array(9),Fv=new Float32Array(4);function so(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=Nv[l];if(u===void 0&&(u=new Float32Array(l),Nv[l]=u),t!==0){r.toArray(u,0);for(let f=1,p=0;f!==t;++f)p+=i,s[f].toArray(u,p)}return u}function xn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Sn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Fc(s,t){let i=Ov[t];i===void 0&&(i=new Int32Array(t),Ov[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function KR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function QR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2fv(this.addr,t),Sn(i,t)}}function JR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;s.uniform3fv(this.addr,t),Sn(i,t)}}function $R(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4fv(this.addr,t),Sn(i,t)}}function tC(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;Fv.set(r),s.uniformMatrix2fv(this.addr,!1,Fv),Sn(i,r)}}function eC(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;Iv.set(r),s.uniformMatrix3fv(this.addr,!1,Iv),Sn(i,r)}}function nC(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;Pv.set(r),s.uniformMatrix4fv(this.addr,!1,Pv),Sn(i,r)}}function iC(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function aC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2iv(this.addr,t),Sn(i,t)}}function rC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3iv(this.addr,t),Sn(i,t)}}function sC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4iv(this.addr,t),Sn(i,t)}}function oC(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function lC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2uiv(this.addr,t),Sn(i,t)}}function uC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3uiv(this.addr,t),Sn(i,t)}}function cC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4uiv(this.addr,t),Sn(i,t)}}function fC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Cp.compareFunction=i.isReversedDepthBuffer()?Xp:Wp,u=Cp):u=nx,i.setTexture2D(t||u,l)}function hC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||ax,l)}function dC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||rx,l)}function pC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||ix,l)}function mC(s){switch(s){case 5126:return KR;case 35664:return QR;case 35665:return JR;case 35666:return $R;case 35674:return tC;case 35675:return eC;case 35676:return nC;case 5124:case 35670:return iC;case 35667:case 35671:return aC;case 35668:case 35672:return rC;case 35669:case 35673:return sC;case 5125:return oC;case 36294:return lC;case 36295:return uC;case 36296:return cC;case 35678:case 36198:case 36298:case 36306:case 35682:return fC;case 35679:case 36299:case 36307:return hC;case 35680:case 36300:case 36308:case 36293:return dC;case 36289:case 36303:case 36311:case 36292:return pC}}function gC(s,t){s.uniform1fv(this.addr,t)}function _C(s,t){const i=so(t,this.size,2);s.uniform2fv(this.addr,i)}function vC(s,t){const i=so(t,this.size,3);s.uniform3fv(this.addr,i)}function yC(s,t){const i=so(t,this.size,4);s.uniform4fv(this.addr,i)}function xC(s,t){const i=so(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function SC(s,t){const i=so(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function MC(s,t){const i=so(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function bC(s,t){s.uniform1iv(this.addr,t)}function EC(s,t){s.uniform2iv(this.addr,t)}function TC(s,t){s.uniform3iv(this.addr,t)}function AC(s,t){s.uniform4iv(this.addr,t)}function RC(s,t){s.uniform1uiv(this.addr,t)}function CC(s,t){s.uniform2uiv(this.addr,t)}function wC(s,t){s.uniform3uiv(this.addr,t)}function DC(s,t){s.uniform4uiv(this.addr,t)}function LC(s,t,i){const r=this.cache,l=t.length,u=Fc(i,l);xn(r,u)||(s.uniform1iv(this.addr,u),Sn(r,u));let f;this.type===s.SAMPLER_2D_SHADOW?f=Cp:f=nx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,u[p])}function UC(s,t,i){const r=this.cache,l=t.length,u=Fc(i,l);xn(r,u)||(s.uniform1iv(this.addr,u),Sn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||ax,u[f])}function NC(s,t,i){const r=this.cache,l=t.length,u=Fc(i,l);xn(r,u)||(s.uniform1iv(this.addr,u),Sn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||rx,u[f])}function OC(s,t,i){const r=this.cache,l=t.length,u=Fc(i,l);xn(r,u)||(s.uniform1iv(this.addr,u),Sn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||ix,u[f])}function PC(s){switch(s){case 5126:return gC;case 35664:return _C;case 35665:return vC;case 35666:return yC;case 35674:return xC;case 35675:return SC;case 35676:return MC;case 5124:case 35670:return bC;case 35667:case 35671:return EC;case 35668:case 35672:return TC;case 35669:case 35673:return AC;case 5125:return RC;case 36294:return CC;case 36295:return wC;case 36296:return DC;case 35678:case 36198:case 36298:case 36306:case 35682:return LC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return NC;case 36289:case 36303:case 36311:case 36292:return OC}}class IC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=mC(i.type)}}class FC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PC(i.type)}}class BC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const p=l[u];p.setValue(t,i[p.id],r)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function Bv(s,t){s.seq.push(t),s.map[t.id]=t}function zC(s,t,i){const r=s.name,l=r.length;for(Dd.lastIndex=0;;){const u=Dd.exec(r),f=Dd.lastIndex;let p=u[1];const m=u[2]==="]",d=u[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){Bv(i,d===void 0?new IC(p,s,t):new FC(p,s,t));break}else{let v=i.map[p];v===void 0&&(v=new BC(p),Bv(i,v)),i=v}}}class Sc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);zC(p,m,this)}const l=[],u=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const p=i[u],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function zv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const HC=37297;let GC=0;function VC(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const p=f+1;r.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const Hv=new de;function kC(s){we._getMatrix(Hv,we.workingColorSpace,s);const t=`mat3( ${Hv.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(s)){case bc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Gv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+VC(s.getShaderSource(t),p)}else return u}function WC(s,t){const i=kC(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const XC={[by]:"Linear",[Ey]:"Reinhard",[Ty]:"Cineon",[Ay]:"ACESFilmic",[Cy]:"AgX",[wy]:"Neutral",[Ry]:"Custom"};function YC(s,t){const i=XC[t];return i===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const hc=new j;function qC(){we.getLuminanceCoefficients(hc);const s=hc.x.toFixed(4),t=hc.y.toFixed(4),i=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function ZC(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function KC(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),f=u.name;let p=1;u.type===s.FLOAT_MAT2&&(p=2),u.type===s.FLOAT_MAT3&&(p=3),u.type===s.FLOAT_MAT4&&(p=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:p}}return i}function fl(s){return s!==""}function Vv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QC=/^[ \t]*#include +<([\w\d./]+)>/gm;function wp(s){return s.replace(QC,$C)}const JC=new Map;function $C(s,t){let i=me[t];if(i===void 0){const r=JC.get(t);if(r!==void 0)i=me[r],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return wp(i)}const t2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wv(s){return s.replace(t2,e2)}function e2(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Xv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const n2={[gc]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};function i2(s){return n2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const a2={[Xr]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[Nc]:"ENVMAP_TYPE_CUBE_UV"};function r2(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":a2[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const s2={[to]:"ENVMAP_MODE_REFRACTION"};function o2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":s2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l2={[My]:"ENVMAP_BLENDING_MULTIPLY",[DE]:"ENVMAP_BLENDING_MIX",[LE]:"ENVMAP_BLENDING_ADD"};function u2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":l2[s.combine]||"ENVMAP_BLENDING_NONE"}function c2(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function f2(s,t,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=i2(i),d=r2(i),_=o2(i),v=u2(i),g=c2(i),M=jC(i),b=ZC(u),R=l.createProgram();let y,x,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(fl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(fl).join(`
`),x.length>0&&(x+=`
`)):(y=[Xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),x=[Xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?me.tonemapping_pars_fragment:"",i.toneMapping!==ji?YC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,WC("linearToOutputTexel",i.outputColorSpace),qC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(fl).join(`
`)),f=wp(f),f=Vv(f,i),f=kv(f,i),p=wp(p),p=Vv(p,i),p=kv(p,i),f=Wv(f),p=Wv(p),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===$_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=A+y+f,L=A+x+p,B=zv(l,l.VERTEX_SHADER,D),I=zv(l,l.FRAGMENT_SHADER,L);l.attachShader(R,B),l.attachShader(R,I),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(G){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(R)||"",Q=l.getShaderInfoLog(B)||"",rt=l.getShaderInfoLog(I)||"",Z=J.trim(),N=Q.trim(),z=rt.trim();let ot=!0,ht=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ot=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,B,I);else{const St=Gv(l,B,"vertex"),P=Gv(l,I,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Z+`
`+St+`
`+P)}else Z!==""?ne("WebGLProgram: Program Info Log:",Z):(N===""||z==="")&&(ht=!1);ht&&(G.diagnostics={runnable:ot,programLog:Z,vertexShader:{log:N,prefix:y},fragmentShader:{log:z,prefix:x}})}l.deleteShader(B),l.deleteShader(I),T=new Sc(l,R),U=KC(l,R)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let st=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return st===!1&&(st=l.getProgramParameter(R,HC)),st},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GC++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=I,this}let h2=0;class d2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new p2(t),i.set(t,r)),r}}class p2{constructor(t){this.id=h2++,this.code=t,this.usedTimes=0}}function m2(s,t,i,r,l,u){const f=new Gy,p=new d2,m=new Set,d=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,U,st,G,J){const Q=G.fog,rt=J.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,N=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,z=t.get(T.envMap||Z,N),ot=z&&z.mapping===Nc?z.image.height:null,ht=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ne("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const St=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,P=St!==void 0?St.length:0;let Y=0;rt.morphAttributes.position!==void 0&&(Y=1),rt.morphAttributes.normal!==void 0&&(Y=2),rt.morphAttributes.color!==void 0&&(Y=3);let _t,At,Ot,$;if(ht){const Re=Wi[ht];_t=Re.vertexShader,At=Re.fragmentShader}else _t=T.vertexShader,At=T.fragmentShader,p.update(T),Ot=p.getVertexShaderID(T),$=p.getFragmentShaderID(T);const vt=s.getRenderTarget(),Mt=s.state.buffers.depth.getReversed(),Gt=J.isInstancedMesh===!0,jt=J.isBatchedMesh===!0,Jt=!!T.map,Ye=!!T.matcap,ge=!!z,_e=!!T.aoMap,Te=!!T.lightMap,le=!!T.bumpMap,tn=!!T.normalMap,V=!!T.displacementMap,Ze=!!T.emissiveMap,Ae=!!T.metalnessMap,Oe=!!T.roughnessMap,Yt=T.anisotropy>0,O=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,pt=T.sheen>0,xt=T.transmission>0,ft=Yt&&!!T.anisotropyMap,Wt=O&&!!T.clearcoatMap,wt=O&&!!T.clearcoatNormalMap,Kt=O&&!!T.clearcoatRoughnessMap,ee=q&&!!T.iridescenceMap,Tt=q&&!!T.iridescenceThicknessMap,bt=pt&&!!T.sheenColorMap,Pt=pt&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,It=!!T.specularColorMap,ce=!!T.specularIntensityMap,X=xt&&!!T.transmissionMap,Ct=xt&&!!T.thicknessMap,Rt=!!T.gradientMap,Ft=!!T.alphaMap,Et=T.alphaTest>0,ct=!!T.alphaHash,zt=!!T.extensions;let ae=ji;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Ie={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:At,defines:T.defines,customVertexShaderID:Ot,customFragmentShaderID:$,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:jt,batchingColor:jt&&J._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&J.instanceColor!==null,instancingMorph:Gt&&J.morphTexture!==null,outputColorSpace:vt===null?s.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:no,alphaToCoverage:!!T.alphaToCoverage,map:Jt,matcap:Ye,envMap:ge,envMapMode:ge&&z.mapping,envMapCubeUVHeight:ot,aoMap:_e,lightMap:Te,bumpMap:le,normalMap:tn,displacementMap:V,emissiveMap:Ze,normalMapObjectSpace:tn&&T.normalMapType===OE,normalMapTangentSpace:tn&&T.normalMapType===By,metalnessMap:Ae,roughnessMap:Oe,anisotropy:Yt,anisotropyMap:ft,clearcoat:O,clearcoatMap:Wt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Kt,dispersion:E,iridescence:q,iridescenceMap:ee,iridescenceThicknessMap:Tt,sheen:pt,sheenColorMap:bt,sheenRoughnessMap:Pt,specularMap:Nt,specularColorMap:It,specularIntensityMap:ce,transmission:xt,transmissionMap:X,thicknessMap:Ct,gradientMap:Rt,opaque:T.transparent===!1&&T.blending===Qs&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Et,alphaHash:ct,combine:T.combine,mapUv:Jt&&b(T.map.channel),aoMapUv:_e&&b(T.aoMap.channel),lightMapUv:Te&&b(T.lightMap.channel),bumpMapUv:le&&b(T.bumpMap.channel),normalMapUv:tn&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:Ze&&b(T.emissiveMap.channel),metalnessMapUv:Ae&&b(T.metalnessMap.channel),roughnessMapUv:Oe&&b(T.roughnessMap.channel),anisotropyMapUv:ft&&b(T.anisotropyMap.channel),clearcoatMapUv:Wt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(T.sheenRoughnessMap.channel),specularMapUv:Nt&&b(T.specularMap.channel),specularColorMapUv:It&&b(T.specularColorMap.channel),specularIntensityMapUv:ce&&b(T.specularIntensityMap.channel),transmissionMapUv:X&&b(T.transmissionMap.channel),thicknessMapUv:Ct&&b(T.thicknessMap.channel),alphaMapUv:Ft&&b(T.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(tn||Yt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!rt.attributes.uv&&(Jt||Ft),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||rt.attributes.normal===void 0&&tn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Mt,skinning:J.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Y,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&st.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Jt&&T.map.isVideoTexture===!0&&we.getTransfer(T.map.colorSpace)===ze,decodeVideoTextureEmissive:Ze&&T.emissiveMap.isVideoTexture===!0&&we.getTransfer(T.emissiveMap.colorSpace)===ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ea,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ie.vertexUv1s=m.has(1),Ie.vertexUv2s=m.has(2),Ie.vertexUv3s=m.has(3),m.clear(),Ie}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const st in T.defines)U.push(st),U.push(T.defines[st]);return T.isRawShaderMaterial===!1&&(x(U,T),A(U,T),U.push(s.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function x(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function A(T,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),T.push(f.mask)}function D(T){const U=M[T.type];let st;if(U){const G=Wi[U];st=PT.clone(G.uniforms)}else st=T.uniforms;return st}function L(T,U){let st=_.get(U);return st!==void 0?++st.usedTimes:(st=new f2(s,U,T,l),d.push(st),_.set(U,st)),st}function B(T){if(--T.usedTimes===0){const U=d.indexOf(T);d[U]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function I(T){p.remove(T)}function F(){p.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:D,acquireProgram:L,releaseProgram:B,releaseShaderCache:I,programs:d,dispose:F}}function g2(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function _2(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Yv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function qv(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,R,y,x){let A=s[t];return A===void 0?(A={id:g.id,object:g,geometry:M,material:b,materialVariant:f(g),groupOrder:R,renderOrder:g.renderOrder,z:y,group:x},s[t]=A):(A.id=g.id,A.object=g,A.geometry=M,A.material=b,A.materialVariant=f(g),A.groupOrder=R,A.renderOrder=g.renderOrder,A.z=y,A.group=x),t++,A}function m(g,M,b,R,y,x){const A=p(g,M,b,R,y,x);b.transmission>0?r.push(A):b.transparent===!0?l.push(A):i.push(A)}function d(g,M,b,R,y,x){const A=p(g,M,b,R,y,x);b.transmission>0?r.unshift(A):b.transparent===!0?l.unshift(A):i.unshift(A)}function _(g,M){i.length>1&&i.sort(g||_2),r.length>1&&r.sort(M||Yv),l.length>1&&l.sort(M||Yv)}function v(){for(let g=t,M=s.length;g<M;g++){const b=s[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:d,finish:v,sort:_}}function v2(){let s=new WeakMap;function t(r,l){const u=s.get(r);let f;return u===void 0?(f=new qv,s.set(r,[f])):l>=u.length?(f=new qv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function y2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new Se};break;case"SpotLight":i={position:new j,direction:new j,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new j,halfWidth:new j,halfHeight:new j};break}return s[t.id]=i,i}}}function x2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let S2=0;function M2(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function b2(s){const t=new y2,i=x2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new j);const l=new j,u=new $e,f=new $e;function p(d){let _=0,v=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,b=0,R=0,y=0,x=0,A=0,D=0,L=0,B=0,I=0,F=0;d.sort(M2);for(let U=0,st=d.length;U<st;U++){const G=d[U],J=G.color,Q=G.intensity,rt=G.distance;let Z=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===eo?Z=G.shadow.map.texture:Z=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=J.r*Q,v+=J.g*Q,g+=J.b*Q;else if(G.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(G.sh.coefficients[N],Q);F++}else if(G.isDirectionalLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,ot=i.get(G);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,r.directionalShadow[M]=ot,r.directionalShadowMap[M]=Z,r.directionalShadowMatrix[M]=G.shadow.matrix,A++}r.directional[M]=N,M++}else if(G.isSpotLight){const N=t.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(J).multiplyScalar(Q),N.distance=rt,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,r.spot[R]=N;const z=G.shadow;if(G.map&&(r.spotLightMap[B]=G.map,B++,z.updateMatrices(G),G.castShadow&&I++),r.spotLightMatrix[R]=z.matrix,G.castShadow){const ot=i.get(G);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,r.spotShadow[R]=ot,r.spotShadowMap[R]=Z,L++}R++}else if(G.isRectAreaLight){const N=t.get(G);N.color.copy(J).multiplyScalar(Q),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=N,y++}else if(G.isPointLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const z=G.shadow,ot=i.get(G);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,ot.shadowCameraNear=z.camera.near,ot.shadowCameraFar=z.camera.far,r.pointShadow[b]=ot,r.pointShadowMap[b]=Z,r.pointShadowMatrix[b]=G.shadow.matrix,D++}r.point[b]=N,b++}else if(G.isHemisphereLight){const N=t.get(G);N.skyColor.copy(G.color).multiplyScalar(Q),N.groundColor.copy(G.groundColor).multiplyScalar(Q),r.hemi[x]=N,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==R||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==A||T.numPointShadows!==D||T.numSpotShadows!==L||T.numSpotMaps!==B||T.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=L+B-I,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,T.directionalLength=M,T.pointLength=b,T.spotLength=R,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=A,T.numPointShadows=D,T.numSpotShadows=L,T.numSpotMaps=B,T.numLightProbes=F,r.version=S2++)}function m(d,_){let v=0,g=0,M=0,b=0,R=0;const y=_.matrixWorldInverse;for(let x=0,A=d.length;x<A;x++){const D=d[x];if(D.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),v++}else if(D.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const L=r.rectArea[b];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),f.identity(),u.copy(D.matrixWorld),u.premultiply(y),f.extractRotation(u),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),g++}else if(D.isHemisphereLight){const L=r.hemi[R];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(y),R++}}}return{setup:p,setupView:m,state:r}}function jv(s){const t=new b2(s),i=[],r=[];function l(_){d.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function f(_){r.push(_)}function p(){t.setup(i)}function m(_){t.setupView(i,_)}const d={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:f}}function E2(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let p;return f===void 0?(p=new jv(s),t.set(l,[p])):u>=f.length?(p=new jv(s),f.push(p)):p=f[u],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const T2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A2=`uniform sampler2D shadow_pass;
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
}`,R2=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],C2=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Zv=new $e,ul=new j,Ld=new j;function w2(s,t,i){let r=new Kp;const l=new $t,u=new $t,f=new rn,p=new HT,m=new GT,d={},_=i.maxTextureSize,v={[pr]:Jn,[Jn]:pr,[Ea]:Ea},g=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:T2,fragmentShader:A2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new kn;b.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Mi(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gc;let x=this.type;this.render=function(I,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===fE&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gc);const U=s.getRenderTarget(),st=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Aa),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Q=x!==this.type;Q&&F.traverse(function(rt){rt.material&&(Array.isArray(rt.material)?rt.material.forEach(Z=>Z.needsUpdate=!0):rt.material.needsUpdate=!0)});for(let rt=0,Z=I.length;rt<Z;rt++){const N=I[rt],z=N.shadow;if(z===void 0){ne("WebGLShadowMap:",N,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const ot=z.getFrameExtents();l.multiply(ot),u.copy(z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/ot.x),l.x=u.x*ot.x,z.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/ot.y),l.y=u.y*ot.y,z.mapSize.y=u.y));const ht=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ht,z.map===null||Q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===cl){if(N.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Zi(l.x,l.y,{format:eo,type:Da,minFilter:Un,magFilter:Un,generateMipmaps:!1}),z.map.texture.name=N.name+".shadowMap",z.map.depthTexture=new xl(l.x,l.y,Xi),z.map.depthTexture.name=N.name+".shadowMapDepth",z.map.depthTexture.format=La,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Cn,z.map.depthTexture.magFilter=Cn}else N.isPointLight?(z.map=new ex(l.x),z.map.depthTexture=new NT(l.x,Qi)):(z.map=new Zi(l.x,l.y),z.map.depthTexture=new xl(l.x,l.y,Qi)),z.map.depthTexture.name=N.name+".shadowMap",z.map.depthTexture.format=La,this.type===gc?(z.map.depthTexture.compareFunction=ht?Xp:Wp,z.map.depthTexture.minFilter=Un,z.map.depthTexture.magFilter=Un):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Cn,z.map.depthTexture.magFilter=Cn);z.camera.updateProjectionMatrix()}const St=z.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<St;P++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,P),s.clear();else{P===0&&(s.setRenderTarget(z.map),s.clear());const Y=z.getViewport(P);f.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),J.viewport(f)}if(N.isPointLight){const Y=z.camera,_t=z.matrix,At=N.distance||Y.far;At!==Y.far&&(Y.far=At,Y.updateProjectionMatrix()),ul.setFromMatrixPosition(N.matrixWorld),Y.position.copy(ul),Ld.copy(Y.position),Ld.add(R2[P]),Y.up.copy(C2[P]),Y.lookAt(Ld),Y.updateMatrixWorld(),_t.makeTranslation(-ul.x,-ul.y,-ul.z),Zv.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Zv,Y.coordinateSystem,Y.reversedDepth)}else z.updateMatrices(N);r=z.getFrustum(),L(F,T,z.camera,N,this.type)}z.isPointLightShadow!==!0&&this.type===cl&&A(z,T),z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(U,st,G)};function A(I,F){const T=t.update(R);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Zi(l.x,l.y,{format:eo,type:Da})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(F,null,T,g,R,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(F,null,T,M,R,null)}function D(I,F,T,U){let st=null;const G=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)st=G;else if(st=T.isPointLight===!0?m:p,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=st.uuid,Q=F.uuid;let rt=d[J];rt===void 0&&(rt={},d[J]=rt);let Z=rt[Q];Z===void 0&&(Z=st.clone(),rt[Q]=Z,F.addEventListener("dispose",B)),st=Z}if(st.visible=F.visible,st.wireframe=F.wireframe,U===cl?st.side=F.shadowSide!==null?F.shadowSide:F.side:st.side=F.shadowSide!==null?F.shadowSide:v[F.side],st.alphaMap=F.alphaMap,st.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,st.map=F.map,st.clipShadows=F.clipShadows,st.clippingPlanes=F.clippingPlanes,st.clipIntersection=F.clipIntersection,st.displacementMap=F.displacementMap,st.displacementScale=F.displacementScale,st.displacementBias=F.displacementBias,st.wireframeLinewidth=F.wireframeLinewidth,st.linewidth=F.linewidth,T.isPointLight===!0&&st.isMeshDistanceMaterial===!0){const J=s.properties.get(st);J.light=T}return st}function L(I,F,T,U,st){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&st===cl)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const Q=t.update(I),rt=I.material;if(Array.isArray(rt)){const Z=Q.groups;for(let N=0,z=Z.length;N<z;N++){const ot=Z[N],ht=rt[ot.materialIndex];if(ht&&ht.visible){const St=D(I,ht,U,st);I.onBeforeShadow(s,I,F,T,Q,St,ot),s.renderBufferDirect(T,null,Q,St,I,ot),I.onAfterShadow(s,I,F,T,Q,St,ot)}}}else if(rt.visible){const Z=D(I,rt,U,st);I.onBeforeShadow(s,I,F,T,Q,Z,null),s.renderBufferDirect(T,null,Q,Z,I,null),I.onAfterShadow(s,I,F,T,Q,Z,null)}}const J=I.children;for(let Q=0,rt=J.length;Q<rt;Q++)L(J[Q],F,T,U,st)}function B(I){I.target.removeEventListener("dispose",B);for(const T in d){const U=d[T],st=I.target.uuid;st in U&&(U[st].dispose(),delete U[st])}}}function D2(s,t){function i(){let X=!1;const Ct=new rn;let Rt=null;const Ft=new rn(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!X&&(s.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){X=Et},setClear:function(Et,ct,zt,ae,Ie){Ie===!0&&(Et*=ae,ct*=ae,zt*=ae),Ct.set(Et,ct,zt,ae),Ft.equals(Ct)===!1&&(s.clearColor(Et,ct,zt,ae),Ft.copy(Ct))},reset:function(){X=!1,Rt=null,Ft.set(-1,0,0,0)}}}function r(){let X=!1,Ct=!1,Rt=null,Ft=null,Et=null;return{setReversed:function(ct){if(Ct!==ct){const zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Ct=ct;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return Ct},setTest:function(ct){ct?vt(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(ct){Rt!==ct&&!X&&(s.depthMask(ct),Rt=ct)},setFunc:function(ct){if(Ct&&(ct=WE[ct]),Ft!==ct){switch(ct){case Bd:s.depthFunc(s.NEVER);break;case zd:s.depthFunc(s.ALWAYS);break;case Hd:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Gd:s.depthFunc(s.EQUAL);break;case Vd:s.depthFunc(s.GEQUAL);break;case kd:s.depthFunc(s.GREATER);break;case Wd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ft=ct}},setLocked:function(ct){X=ct},setClear:function(ct){Et!==ct&&(Et=ct,Ct&&(ct=1-ct),s.clearDepth(ct))},reset:function(){X=!1,Rt=null,Ft=null,Et=null,Ct=!1}}}function l(){let X=!1,Ct=null,Rt=null,Ft=null,Et=null,ct=null,zt=null,ae=null,Ie=null;return{setTest:function(Re){X||(Re?vt(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(Re){Ct!==Re&&!X&&(s.stencilMask(Re),Ct=Re)},setFunc:function(Re,In,Ei){(Rt!==Re||Ft!==In||Et!==Ei)&&(s.stencilFunc(Re,In,Ei),Rt=Re,Ft=In,Et=Ei)},setOp:function(Re,In,Ei){(ct!==Re||zt!==In||ae!==Ei)&&(s.stencilOp(Re,In,Ei),ct=Re,zt=In,ae=Ei)},setLocked:function(Re){X=Re},setClear:function(Re){Ie!==Re&&(s.clearStencil(Re),Ie=Re)},reset:function(){X=!1,Ct=null,Rt=null,Ft=null,Et=null,ct=null,zt=null,ae=null,Ie=null}}}const u=new i,f=new r,p=new l,m=new WeakMap,d=new WeakMap;let _={},v={},g=new WeakMap,M=[],b=null,R=!1,y=null,x=null,A=null,D=null,L=null,B=null,I=null,F=new Se(0,0,0),T=0,U=!1,st=null,G=null,J=null,Q=null,rt=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const ot=s.getParameter(s.VERSION);ot.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ot)[1]),N=z>=1):ot.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),N=z>=2);let ht=null,St={};const P=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),_t=new rn().fromArray(P),At=new rn().fromArray(Y);function Ot(X,Ct,Rt,Ft){const Et=new Uint8Array(4),ct=s.createTexture();s.bindTexture(X,ct),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<Rt;zt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,Ft,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(Ct+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return ct}const $={};$[s.TEXTURE_2D]=Ot(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=Ot(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=Ot(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=Ot(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),p.setClear(0),vt(s.DEPTH_TEST),f.setFunc($s),le(!1),tn(Z_),vt(s.CULL_FACE),_e(Aa);function vt(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function Mt(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function Gt(X,Ct){return v[X]!==Ct?(s.bindFramebuffer(X,Ct),v[X]=Ct,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ct),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function jt(X,Ct){let Rt=M,Ft=!1;if(X){Rt=g.get(Ct),Rt===void 0&&(Rt=[],g.set(Ct,Rt));const Et=X.textures;if(Rt.length!==Et.length||Rt[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,zt=Et.length;ct<zt;ct++)Rt[ct]=s.COLOR_ATTACHMENT0+ct;Rt.length=Et.length,Ft=!0}}else Rt[0]!==s.BACK&&(Rt[0]=s.BACK,Ft=!0);Ft&&s.drawBuffers(Rt)}function Jt(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const Ye={[Gr]:s.FUNC_ADD,[dE]:s.FUNC_SUBTRACT,[pE]:s.FUNC_REVERSE_SUBTRACT};Ye[mE]=s.MIN,Ye[gE]=s.MAX;const ge={[_E]:s.ZERO,[vE]:s.ONE,[yE]:s.SRC_COLOR,[Id]:s.SRC_ALPHA,[TE]:s.SRC_ALPHA_SATURATE,[bE]:s.DST_COLOR,[SE]:s.DST_ALPHA,[xE]:s.ONE_MINUS_SRC_COLOR,[Fd]:s.ONE_MINUS_SRC_ALPHA,[EE]:s.ONE_MINUS_DST_COLOR,[ME]:s.ONE_MINUS_DST_ALPHA,[AE]:s.CONSTANT_COLOR,[RE]:s.ONE_MINUS_CONSTANT_COLOR,[CE]:s.CONSTANT_ALPHA,[wE]:s.ONE_MINUS_CONSTANT_ALPHA};function _e(X,Ct,Rt,Ft,Et,ct,zt,ae,Ie,Re){if(X===Aa){R===!0&&(Mt(s.BLEND),R=!1);return}if(R===!1&&(vt(s.BLEND),R=!0),X!==hE){if(X!==y||Re!==U){if((x!==Gr||L!==Gr)&&(s.blendEquation(s.FUNC_ADD),x=Gr,L=Gr),Re)switch(X){case Qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hl:s.blendFunc(s.ONE,s.ONE);break;case K_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Q_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ce("WebGLState: Invalid blending: ",X);break}else switch(X){case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case K_:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Q_:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",X);break}A=null,D=null,B=null,I=null,F.set(0,0,0),T=0,y=X,U=Re}return}Et=Et||Ct,ct=ct||Rt,zt=zt||Ft,(Ct!==x||Et!==L)&&(s.blendEquationSeparate(Ye[Ct],Ye[Et]),x=Ct,L=Et),(Rt!==A||Ft!==D||ct!==B||zt!==I)&&(s.blendFuncSeparate(ge[Rt],ge[Ft],ge[ct],ge[zt]),A=Rt,D=Ft,B=ct,I=zt),(ae.equals(F)===!1||Ie!==T)&&(s.blendColor(ae.r,ae.g,ae.b,Ie),F.copy(ae),T=Ie),y=X,U=!1}function Te(X,Ct){X.side===Ea?Mt(s.CULL_FACE):vt(s.CULL_FACE);let Rt=X.side===Jn;Ct&&(Rt=!Rt),le(Rt),X.blending===Qs&&X.transparent===!1?_e(Aa):_e(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const Ft=X.stencilWrite;p.setTest(Ft),Ft&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ze(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(X){st!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),st=X)}function tn(X){X!==uE?(vt(s.CULL_FACE),X!==G&&(X===Z_?s.cullFace(s.BACK):X===cE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),G=X}function V(X){X!==J&&(N&&s.lineWidth(X),J=X)}function Ze(X,Ct,Rt){X?(vt(s.POLYGON_OFFSET_FILL),(Q!==Ct||rt!==Rt)&&(Q=Ct,rt=Rt,f.getReversed()&&(Ct=-Ct),s.polygonOffset(Ct,Rt))):Mt(s.POLYGON_OFFSET_FILL)}function Ae(X){X?vt(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function Oe(X){X===void 0&&(X=s.TEXTURE0+Z-1),ht!==X&&(s.activeTexture(X),ht=X)}function Yt(X,Ct,Rt){Rt===void 0&&(ht===null?Rt=s.TEXTURE0+Z-1:Rt=ht);let Ft=St[Rt];Ft===void 0&&(Ft={type:void 0,texture:void 0},St[Rt]=Ft),(Ft.type!==X||Ft.texture!==Ct)&&(ht!==Rt&&(s.activeTexture(Rt),ht=Rt),s.bindTexture(X,Ct||$[X]),Ft.type=X,Ft.texture=Ct)}function O(){const X=St[ht];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function pt(){try{s.texSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function xt(){try{s.texSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Wt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function wt(){try{s.texStorage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Kt(){try{s.texStorage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function ee(){try{s.texImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Tt(){try{s.texImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function bt(X){_t.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),_t.copy(X))}function Pt(X){At.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),At.copy(X))}function Nt(X,Ct){let Rt=d.get(Ct);Rt===void 0&&(Rt=new WeakMap,d.set(Ct,Rt));let Ft=Rt.get(X);Ft===void 0&&(Ft=s.getUniformBlockIndex(Ct,X.name),Rt.set(X,Ft))}function It(X,Ct){const Ft=d.get(Ct).get(X);m.get(Ct)!==Ft&&(s.uniformBlockBinding(Ct,Ft,X.__bindingPointIndex),m.set(Ct,Ft))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ht=null,St={},v={},g=new WeakMap,M=[],b=null,R=!1,y=null,x=null,A=null,D=null,L=null,B=null,I=null,F=new Se(0,0,0),T=0,U=!1,st=null,G=null,J=null,Q=null,rt=null,_t.set(0,0,s.canvas.width,s.canvas.height),At.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),p.reset()}return{buffers:{color:u,depth:f,stencil:p},enable:vt,disable:Mt,bindFramebuffer:Gt,drawBuffers:jt,useProgram:Jt,setBlending:_e,setMaterial:Te,setFlipSided:le,setCullFace:tn,setLineWidth:V,setPolygonOffset:Ze,setScissorTest:Ae,activeTexture:Oe,bindTexture:Yt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ee,texImage3D:Tt,updateUBOMapping:Nt,uniformBlockBinding:It,texStorage2D:wt,texStorage3D:Kt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Wt,scissor:bt,viewport:Pt,reset:ce}}function L2(s,t,i,r,l,u,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new $t,_=new WeakMap;let v;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return M?new OffscreenCanvas(O,E):Ec("canvas")}function R(O,E,q){let pt=1;const xt=Yt(O);if((xt.width>q||xt.height>q)&&(pt=q/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ft=Math.floor(pt*xt.width),Wt=Math.floor(pt*xt.height);v===void 0&&(v=b(ft,Wt));const wt=E?b(ft,Wt):v;return wt.width=ft,wt.height=Wt,wt.getContext("2d").drawImage(O,0,0,ft,Wt),ne("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ft+"x"+Wt+")."),wt}else return"data"in O&&ne("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),O;return O}function y(O){return O.generateMipmaps}function x(O){s.generateMipmap(O)}function A(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(O,E,q,pt,xt=!1){if(O!==null){if(s[O]!==void 0)return s[O];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ft=E;if(E===s.RED&&(q===s.FLOAT&&(ft=s.R32F),q===s.HALF_FLOAT&&(ft=s.R16F),q===s.UNSIGNED_BYTE&&(ft=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ft=s.R8UI),q===s.UNSIGNED_SHORT&&(ft=s.R16UI),q===s.UNSIGNED_INT&&(ft=s.R32UI),q===s.BYTE&&(ft=s.R8I),q===s.SHORT&&(ft=s.R16I),q===s.INT&&(ft=s.R32I)),E===s.RG&&(q===s.FLOAT&&(ft=s.RG32F),q===s.HALF_FLOAT&&(ft=s.RG16F),q===s.UNSIGNED_BYTE&&(ft=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ft=s.RG8UI),q===s.UNSIGNED_SHORT&&(ft=s.RG16UI),q===s.UNSIGNED_INT&&(ft=s.RG32UI),q===s.BYTE&&(ft=s.RG8I),q===s.SHORT&&(ft=s.RG16I),q===s.INT&&(ft=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),q===s.UNSIGNED_INT&&(ft=s.RGB32UI),q===s.BYTE&&(ft=s.RGB8I),q===s.SHORT&&(ft=s.RGB16I),q===s.INT&&(ft=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),q===s.UNSIGNED_INT&&(ft=s.RGBA32UI),q===s.BYTE&&(ft=s.RGBA8I),q===s.SHORT&&(ft=s.RGBA16I),q===s.INT&&(ft=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ft=s.R11F_G11F_B10F)),E===s.RGBA){const Wt=xt?bc:we.getTransfer(pt);q===s.FLOAT&&(ft=s.RGBA32F),q===s.HALF_FLOAT&&(ft=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ft=Wt===ze?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function L(O,E){let q;return O?E===null||E===Qi||E===_l?q=s.DEPTH24_STENCIL8:E===Xi?q=s.DEPTH32F_STENCIL8:E===gl&&(q=s.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qi||E===_l?q=s.DEPTH_COMPONENT24:E===Xi?q=s.DEPTH_COMPONENT32F:E===gl&&(q=s.DEPTH_COMPONENT16),q}function B(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Cn&&O.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function I(O){const E=O.target;E.removeEventListener("dispose",I),T(E),E.isVideoTexture&&_.delete(E)}function F(O){const E=O.target;E.removeEventListener("dispose",F),st(E)}function T(O){const E=r.get(O);if(E.__webglInit===void 0)return;const q=O.source,pt=g.get(q);if(pt){const xt=pt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&U(O),Object.keys(pt).length===0&&g.delete(q)}r.remove(O)}function U(O){const E=r.get(O);s.deleteTexture(E.__webglTexture);const q=O.source,pt=g.get(q);delete pt[E.__cacheKey],f.memory.textures--}function st(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let xt=0;xt<E.__webglFramebuffer[pt].length;xt++)s.deleteFramebuffer(E.__webglFramebuffer[pt][xt]);else s.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)s.deleteFramebuffer(E.__webglFramebuffer[pt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=O.textures;for(let pt=0,xt=q.length;pt<xt;pt++){const ft=r.get(q[pt]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),f.memory.textures--),r.remove(q[pt])}r.remove(O)}let G=0;function J(){G=0}function Q(){const O=G;return O>=l.maxTextures&&ne("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function rt(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function Z(O,E){const q=r.get(O);if(O.isVideoTexture&&Ae(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const pt=O.image;if(pt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{$(q,O,E);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function N(O,E){const q=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){$(q,O,E);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function z(O,E){const q=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){$(q,O,E);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function ot(O,E){const q=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){vt(q,O,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const ht={[Xd]:s.REPEAT,[Ta]:s.CLAMP_TO_EDGE,[Yd]:s.MIRRORED_REPEAT},St={[Cn]:s.NEAREST,[UE]:s.NEAREST_MIPMAP_NEAREST,[Hu]:s.NEAREST_MIPMAP_LINEAR,[Un]:s.LINEAR,[$h]:s.LINEAR_MIPMAP_NEAREST,[kr]:s.LINEAR_MIPMAP_LINEAR},P={[PE]:s.NEVER,[HE]:s.ALWAYS,[IE]:s.LESS,[Wp]:s.LEQUAL,[FE]:s.EQUAL,[Xp]:s.GEQUAL,[BE]:s.GREATER,[zE]:s.NOTEQUAL};function Y(O,E){if(E.type===Xi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===$h||E.magFilter===Hu||E.magFilter===kr||E.minFilter===Un||E.minFilter===$h||E.minFilter===Hu||E.minFilter===kr)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,ht[E.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,ht[E.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,ht[E.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,St[E.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==Hu&&E.minFilter!==kr||E.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function _t(O,E){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",I));const pt=E.source;let xt=g.get(pt);xt===void 0&&(xt={},g.set(pt,xt));const ft=rt(E);if(ft!==O.__cacheKey){xt[ft]===void 0&&(xt[ft]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,q=!0),xt[ft].usedTimes++;const Wt=xt[O.__cacheKey];Wt!==void 0&&(xt[O.__cacheKey].usedTimes--,Wt.usedTimes===0&&U(E)),O.__cacheKey=ft,O.__webglTexture=xt[ft].texture}return q}function At(O,E,q){return Math.floor(Math.floor(O/q)/E)}function Ot(O,E,q,pt){const ft=O.updateRanges;if(ft.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,pt,E.data);else{ft.sort((Tt,bt)=>Tt.start-bt.start);let Wt=0;for(let Tt=1;Tt<ft.length;Tt++){const bt=ft[Wt],Pt=ft[Tt],Nt=bt.start+bt.count,It=At(Pt.start,E.width,4),ce=At(bt.start,E.width,4);Pt.start<=Nt+1&&It===ce&&At(Pt.start+Pt.count-1,E.width,4)===It?bt.count=Math.max(bt.count,Pt.start+Pt.count-bt.start):(++Wt,ft[Wt]=Pt)}ft.length=Wt+1;const wt=s.getParameter(s.UNPACK_ROW_LENGTH),Kt=s.getParameter(s.UNPACK_SKIP_PIXELS),ee=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,bt=ft.length;Tt<bt;Tt++){const Pt=ft[Tt],Nt=Math.floor(Pt.start/4),It=Math.ceil(Pt.count/4),ce=Nt%E.width,X=Math.floor(Nt/E.width),Ct=It,Rt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,ce,X,Ct,Rt,q,pt,E.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,wt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,ee)}}function $(O,E,q){let pt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=s.TEXTURE_3D);const xt=_t(O,E),ft=E.source;i.bindTexture(pt,O.__webglTexture,s.TEXTURE0+q);const Wt=r.get(ft);if(ft.version!==Wt.__version||xt===!0){i.activeTexture(s.TEXTURE0+q);const wt=we.getPrimaries(we.workingColorSpace),Kt=E.colorSpace===hr?null:we.getPrimaries(E.colorSpace),ee=E.colorSpace===hr||wt===Kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Tt=R(E.image,!1,l.maxTextureSize);Tt=Oe(E,Tt);const bt=u.convert(E.format,E.colorSpace),Pt=u.convert(E.type);let Nt=D(E.internalFormat,bt,Pt,E.colorSpace,E.isVideoTexture);Y(pt,E);let It;const ce=E.mipmaps,X=E.isVideoTexture!==!0,Ct=Wt.__version===void 0||xt===!0,Rt=ft.dataReady,Ft=B(E,Tt);if(E.isDepthTexture)Nt=L(E.format===Wr,E.type),Ct&&(X?i.texStorage2D(s.TEXTURE_2D,1,Nt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,Nt,Tt.width,Tt.height,0,bt,Pt,null));else if(E.isDataTexture)if(ce.length>0){X&&Ct&&i.texStorage2D(s.TEXTURE_2D,Ft,Nt,ce[0].width,ce[0].height);for(let Et=0,ct=ce.length;Et<ct;Et++)It=ce[Et],X?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,It.width,It.height,bt,Pt,It.data):i.texImage2D(s.TEXTURE_2D,Et,Nt,It.width,It.height,0,bt,Pt,It.data);E.generateMipmaps=!1}else X?(Ct&&i.texStorage2D(s.TEXTURE_2D,Ft,Nt,Tt.width,Tt.height),Rt&&Ot(E,Tt,bt,Pt)):i.texImage2D(s.TEXTURE_2D,0,Nt,Tt.width,Tt.height,0,bt,Pt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,Nt,ce[0].width,ce[0].height,Tt.depth);for(let Et=0,ct=ce.length;Et<ct;Et++)if(It=ce[Et],E.format!==Pi)if(bt!==null)if(X){if(Rt)if(E.layerUpdates.size>0){const zt=Av(It.width,It.height,E.format,E.type);for(const ae of E.layerUpdates){const Ie=It.data.subarray(ae*zt/It.data.BYTES_PER_ELEMENT,(ae+1)*zt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,ae,It.width,It.height,1,bt,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,It.width,It.height,Tt.depth,bt,It.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Et,Nt,It.width,It.height,Tt.depth,0,It.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Rt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,It.width,It.height,Tt.depth,bt,Pt,It.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Et,Nt,It.width,It.height,Tt.depth,0,bt,Pt,It.data)}else{X&&Ct&&i.texStorage2D(s.TEXTURE_2D,Ft,Nt,ce[0].width,ce[0].height);for(let Et=0,ct=ce.length;Et<ct;Et++)It=ce[Et],E.format!==Pi?bt!==null?X?Rt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Et,0,0,It.width,It.height,bt,It.data):i.compressedTexImage2D(s.TEXTURE_2D,Et,Nt,It.width,It.height,0,It.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,It.width,It.height,bt,Pt,It.data):i.texImage2D(s.TEXTURE_2D,Et,Nt,It.width,It.height,0,bt,Pt,It.data)}else if(E.isDataArrayTexture)if(X){if(Ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,Nt,Tt.width,Tt.height,Tt.depth),Rt)if(E.layerUpdates.size>0){const Et=Av(Tt.width,Tt.height,E.format,E.type);for(const ct of E.layerUpdates){const zt=Tt.data.subarray(ct*Et/Tt.data.BYTES_PER_ELEMENT,(ct+1)*Et/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ct,Tt.width,Tt.height,1,bt,Pt,zt)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,bt,Pt,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,Tt.width,Tt.height,Tt.depth,0,bt,Pt,Tt.data);else if(E.isData3DTexture)X?(Ct&&i.texStorage3D(s.TEXTURE_3D,Ft,Nt,Tt.width,Tt.height,Tt.depth),Rt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,bt,Pt,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,Nt,Tt.width,Tt.height,Tt.depth,0,bt,Pt,Tt.data);else if(E.isFramebufferTexture){if(Ct)if(X)i.texStorage2D(s.TEXTURE_2D,Ft,Nt,Tt.width,Tt.height);else{let Et=Tt.width,ct=Tt.height;for(let zt=0;zt<Ft;zt++)i.texImage2D(s.TEXTURE_2D,zt,Nt,Et,ct,0,bt,Pt,null),Et>>=1,ct>>=1}}else if(ce.length>0){if(X&&Ct){const Et=Yt(ce[0]);i.texStorage2D(s.TEXTURE_2D,Ft,Nt,Et.width,Et.height)}for(let Et=0,ct=ce.length;Et<ct;Et++)It=ce[Et],X?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,bt,Pt,It):i.texImage2D(s.TEXTURE_2D,Et,Nt,bt,Pt,It);E.generateMipmaps=!1}else if(X){if(Ct){const Et=Yt(Tt);i.texStorage2D(s.TEXTURE_2D,Ft,Nt,Et.width,Et.height)}Rt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,Pt,Tt)}else i.texImage2D(s.TEXTURE_2D,0,Nt,bt,Pt,Tt);y(E)&&x(pt),Wt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function vt(O,E,q){if(E.image.length!==6)return;const pt=_t(O,E),xt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+q);const ft=r.get(xt);if(xt.version!==ft.__version||pt===!0){i.activeTexture(s.TEXTURE0+q);const Wt=we.getPrimaries(we.workingColorSpace),wt=E.colorSpace===hr?null:we.getPrimaries(E.colorSpace),Kt=E.colorSpace===hr||Wt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let ct=0;ct<6;ct++)!ee&&!Tt?bt[ct]=R(E.image[ct],!0,l.maxCubemapSize):bt[ct]=Tt?E.image[ct].image:E.image[ct],bt[ct]=Oe(E,bt[ct]);const Pt=bt[0],Nt=u.convert(E.format,E.colorSpace),It=u.convert(E.type),ce=D(E.internalFormat,Nt,It,E.colorSpace),X=E.isVideoTexture!==!0,Ct=ft.__version===void 0||pt===!0,Rt=xt.dataReady;let Ft=B(E,Pt);Y(s.TEXTURE_CUBE_MAP,E);let Et;if(ee){X&&Ct&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,ce,Pt.width,Pt.height);for(let ct=0;ct<6;ct++){Et=bt[ct].mipmaps;for(let zt=0;zt<Et.length;zt++){const ae=Et[zt];E.format!==Pi?Nt!==null?X?Rt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,ae.width,ae.height,Nt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,ce,ae.width,ae.height,0,ae.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,ae.width,ae.height,Nt,It,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,ce,ae.width,ae.height,0,Nt,It,ae.data)}}}else{if(Et=E.mipmaps,X&&Ct){Et.length>0&&Ft++;const ct=Yt(bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,ce,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Tt){X?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,bt[ct].width,bt[ct].height,Nt,It,bt[ct].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,bt[ct].width,bt[ct].height,0,Nt,It,bt[ct].data);for(let zt=0;zt<Et.length;zt++){const Ie=Et[zt].image[ct].image;X?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,Ie.width,Ie.height,Nt,It,Ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,ce,Ie.width,Ie.height,0,Nt,It,Ie.data)}}else{X?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Nt,It,bt[ct]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,Nt,It,bt[ct]);for(let zt=0;zt<Et.length;zt++){const ae=Et[zt];X?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,Nt,It,ae.image[ct]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,ce,Nt,It,ae.image[ct])}}}y(E)&&x(s.TEXTURE_CUBE_MAP),ft.__version=xt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Mt(O,E,q,pt,xt,ft){const Wt=u.convert(q.format,q.colorSpace),wt=u.convert(q.type),Kt=D(q.internalFormat,Wt,wt,q.colorSpace),ee=r.get(E),Tt=r.get(q);if(Tt.__renderTarget=E,!ee.__hasExternalTextures){const bt=Math.max(1,E.width>>ft),Pt=Math.max(1,E.height>>ft);xt===s.TEXTURE_3D||xt===s.TEXTURE_2D_ARRAY?i.texImage3D(xt,ft,Kt,bt,Pt,E.depth,0,Wt,wt,null):i.texImage2D(xt,ft,Kt,bt,Pt,0,Wt,wt,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),Ze(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,xt,Tt.__webglTexture,0,V(E)):(xt===s.TEXTURE_2D||xt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,xt,Tt.__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(O,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,O),E.depthBuffer){const pt=E.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ft=L(E.stencilBuffer,xt),Wt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ze(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),ft,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),ft,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ft,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Wt,s.RENDERBUFFER,O)}else{const pt=E.textures;for(let xt=0;xt<pt.length;xt++){const ft=pt[xt],Wt=u.convert(ft.format,ft.colorSpace),wt=u.convert(ft.type),Kt=D(ft.internalFormat,Wt,wt,ft.colorSpace);Ze(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),Kt,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),Kt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Kt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(O,E,q){const pt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=r.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),xt.__webglTexture===void 0){xt.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,xt.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E.depthTexture);const ee=u.convert(E.depthTexture.format),Tt=u.convert(E.depthTexture.type);let bt;E.depthTexture.format===La?bt=s.DEPTH_COMPONENT24:E.depthTexture.format===Wr&&(bt=s.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,bt,E.width,E.height,0,ee,Tt,null)}}else Z(E.depthTexture,0);const ft=xt.__webglTexture,Wt=V(E),wt=pt?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Kt=E.depthTexture.format===Wr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===La)Ze(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Kt,wt,ft,0,Wt):s.framebufferTexture2D(s.FRAMEBUFFER,Kt,wt,ft,0);else if(E.depthTexture.format===Wr)Ze(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Kt,wt,ft,0,Wt):s.framebufferTexture2D(s.FRAMEBUFFER,Kt,wt,ft,0);else throw new Error("Unknown depthTexture format")}function Jt(O){const E=r.get(O),q=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const pt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=pt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)jt(E.__webglFramebuffer[pt],O,pt);else{const pt=O.texture.mipmaps;pt&&pt.length>0?jt(E.__webglFramebuffer[0],O,0):jt(E.__webglFramebuffer,O,0)}else if(q){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=s.createRenderbuffer(),Gt(E.__webglDepthbuffer[pt],O,!1);else{const xt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,ft)}}else{const pt=O.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Gt(E.__webglDepthbuffer,O,!1);else{const xt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,ft)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(O,E,q){const pt=r.get(O);E!==void 0&&Mt(pt.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Jt(O)}function ge(O){const E=O.texture,q=r.get(O),pt=r.get(E);O.addEventListener("dispose",F);const xt=O.textures,ft=O.isWebGLCubeRenderTarget===!0,Wt=xt.length>1;if(Wt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=E.version,f.memory.textures++),ft){q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[wt]=[];for(let Kt=0;Kt<E.mipmaps.length;Kt++)q.__webglFramebuffer[wt][Kt]=s.createFramebuffer()}else q.__webglFramebuffer[wt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)q.__webglFramebuffer[wt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Wt)for(let wt=0,Kt=xt.length;wt<Kt;wt++){const ee=r.get(xt[wt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&Ze(O)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let wt=0;wt<xt.length;wt++){const Kt=xt[wt];q.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[wt]);const ee=u.convert(Kt.format,Kt.colorSpace),Tt=u.convert(Kt.type),bt=D(Kt.internalFormat,ee,Tt,Kt.colorSpace,O.isXRRenderTarget===!0),Pt=V(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,bt,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,q.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Gt(q.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){i.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Kt=0;Kt<E.mipmaps.length;Kt++)Mt(q.__webglFramebuffer[wt][Kt],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Kt);else Mt(q.__webglFramebuffer[wt],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(E)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let wt=0,Kt=xt.length;wt<Kt;wt++){const ee=xt[wt],Tt=r.get(ee);let bt=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(bt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(bt,Tt.__webglTexture),Y(bt,ee),Mt(q.__webglFramebuffer,O,ee,s.COLOR_ATTACHMENT0+wt,bt,0),y(ee)&&x(bt)}i.unbindTexture()}else{let wt=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,pt.__webglTexture),Y(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Kt=0;Kt<E.mipmaps.length;Kt++)Mt(q.__webglFramebuffer[Kt],O,E,s.COLOR_ATTACHMENT0,wt,Kt);else Mt(q.__webglFramebuffer,O,E,s.COLOR_ATTACHMENT0,wt,0);y(E)&&x(wt),i.unbindTexture()}O.depthBuffer&&Jt(O)}function _e(O){const E=O.textures;for(let q=0,pt=E.length;q<pt;q++){const xt=E[q];if(y(xt)){const ft=A(O),Wt=r.get(xt).__webglTexture;i.bindTexture(ft,Wt),x(ft),i.unbindTexture()}}}const Te=[],le=[];function tn(O){if(O.samples>0){if(Ze(O)===!1){const E=O.textures,q=O.width,pt=O.height;let xt=s.COLOR_BUFFER_BIT;const ft=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Wt=r.get(O),wt=E.length>1;if(wt)for(let ee=0;ee<E.length;ee++)i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Kt=O.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xt|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xt|=s.STENCIL_BUFFER_BIT)),wt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Wt.__webglColorRenderbuffer[ee]);const Tt=r.get(E[ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,q,pt,0,0,q,pt,xt,s.NEAREST),m===!0&&(Te.length=0,le.length=0,Te.push(s.COLOR_ATTACHMENT0+ee),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Te.push(ft),le.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Te))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let ee=0;ee<E.length;ee++){i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,Wt.__webglColorRenderbuffer[ee]);const Tt=r.get(E[ee]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,Tt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function V(O){return Math.min(l.maxSamples,O.samples)}function Ze(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(O){const E=f.render.frame;_.get(O)!==E&&(_.set(O,E),O.update())}function Oe(O,E){const q=O.colorSpace,pt=O.format,xt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==no&&q!==hr&&(we.getTransfer(q)===ze?(pt!==Pi||xt!==fi)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),E}function Yt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=Q,this.resetTextureUnits=J,this.setTexture2D=Z,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=ot,this.rebindTextures=Ye,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function U2(s,t){function i(r,l=hr){let u;const f=we.getTransfer(l);if(r===fi)return s.UNSIGNED_BYTE;if(r===zp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Hp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ny)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Oy)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ly)return s.BYTE;if(r===Uy)return s.SHORT;if(r===gl)return s.UNSIGNED_SHORT;if(r===Bp)return s.INT;if(r===Qi)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===Da)return s.HALF_FLOAT;if(r===Py)return s.ALPHA;if(r===Iy)return s.RGB;if(r===Pi)return s.RGBA;if(r===La)return s.DEPTH_COMPONENT;if(r===Wr)return s.DEPTH_STENCIL;if(r===Fy)return s.RED;if(r===Gp)return s.RED_INTEGER;if(r===eo)return s.RG;if(r===Vp)return s.RG_INTEGER;if(r===kp)return s.RGBA_INTEGER;if(r===_c||r===vc||r===yc||r===xc)if(f===ze)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===_c)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===_c)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qd||r===jd||r===Zd||r===Kd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===qd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qd||r===Jd||r===$d||r===tp||r===ep||r===np||r===ip)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Qd||r===Jd)return f===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===$d)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===tp)return u.COMPRESSED_R11_EAC;if(r===ep)return u.COMPRESSED_SIGNED_R11_EAC;if(r===np)return u.COMPRESSED_RG11_EAC;if(r===ip)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ap||r===rp||r===sp||r===op||r===lp||r===up||r===cp||r===fp||r===hp||r===dp||r===pp||r===mp||r===gp||r===_p)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ap)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rp)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sp)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===op)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lp)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===up)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cp)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fp)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hp)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dp)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pp)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mp)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gp)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_p)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vp||r===yp||r===xp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===vp)return f===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sp||r===Mp||r===bp||r===Ep)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Mp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ep)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_l?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const N2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O2=`
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

}`;class P2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new jy(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new $i({vertexShader:N2,fragmentShader:O2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mi(new Pc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I2 extends Yr{constructor(t,i){super();const r=this;let l=null,u=1,f=null,p="local-floor",m=1,d=null,_=null,v=null,g=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new P2,x={},A=i.getContextAttributes();let D=null,L=null;const B=[],I=[],F=new $t;let T=null;const U=new ci;U.viewport=new rn;const st=new ci;st.viewport=new rn;const G=[U,st],J=new YT;let Q=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let vt=B[$];return vt===void 0&&(vt=new rd,B[$]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function($){let vt=B[$];return vt===void 0&&(vt=new rd,B[$]=vt),vt.getGripSpace()},this.getHand=function($){let vt=B[$];return vt===void 0&&(vt=new rd,B[$]=vt),vt.getHandSpace()};function Z($){const vt=I.indexOf($.inputSource);if(vt===-1)return;const Mt=B[vt];Mt!==void 0&&(Mt.update($.inputSource,$.frame,d||f),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",z);for(let $=0;$<B.length;$++){const vt=I[$];vt!==null&&(I[$]=null,B[$].disconnect(vt))}Q=null,rt=null,y.reset();for(const $ in x)delete x[$];t.setRenderTarget(D),M=null,g=null,v=null,l=null,L=null,Ot.stop(),r.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,r.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){p=$,r.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",N),l.addEventListener("inputsourceschange",z),A.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Gt=null,jt=null;A.depth&&(jt=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=A.stencil?Wr:La,Gt=A.stencil?_l:Qi);const Jt={colorFormat:i.RGBA8,depthFormat:jt,scaleFactor:u};v=this.getBinding(),g=v.createProjectionLayer(Jt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new Zi(g.textureWidth,g.textureHeight,{format:Pi,type:fi,depthTexture:new xl(g.textureWidth,g.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Mt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Zi(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),Ot.setContext(l),Ot.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z($){for(let vt=0;vt<$.removed.length;vt++){const Mt=$.removed[vt],Gt=I.indexOf(Mt);Gt>=0&&(I[Gt]=null,B[Gt].disconnect(Mt))}for(let vt=0;vt<$.added.length;vt++){const Mt=$.added[vt];let Gt=I.indexOf(Mt);if(Gt===-1){for(let Jt=0;Jt<B.length;Jt++)if(Jt>=I.length){I.push(Mt),Gt=Jt;break}else if(I[Jt]===null){I[Jt]=Mt,Gt=Jt;break}if(Gt===-1)break}const jt=B[Gt];jt&&jt.connect(Mt)}}const ot=new j,ht=new j;function St($,vt,Mt){ot.setFromMatrixPosition(vt.matrixWorld),ht.setFromMatrixPosition(Mt.matrixWorld);const Gt=ot.distanceTo(ht),jt=vt.projectionMatrix.elements,Jt=Mt.projectionMatrix.elements,Ye=jt[14]/(jt[10]-1),ge=jt[14]/(jt[10]+1),_e=(jt[9]+1)/jt[5],Te=(jt[9]-1)/jt[5],le=(jt[8]-1)/jt[0],tn=(Jt[8]+1)/Jt[0],V=Ye*le,Ze=Ye*tn,Ae=Gt/(-le+tn),Oe=Ae*-le;if(vt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Oe),$.translateZ(Ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),jt[10]===-1)$.projectionMatrix.copy(vt.projectionMatrix),$.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Yt=Ye+Ae,O=ge+Ae,E=V-Oe,q=Ze+(Gt-Oe),pt=_e*ge/O*Yt,xt=Te*ge/O*Yt;$.projectionMatrix.makePerspective(E,q,pt,xt,Yt,O),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function P($,vt){vt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(vt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let vt=$.near,Mt=$.far;y.texture!==null&&(y.depthNear>0&&(vt=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),J.near=st.near=U.near=vt,J.far=st.far=U.far=Mt,(Q!==J.near||rt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),Q=J.near,rt=J.far),J.layers.mask=$.layers.mask|6,U.layers.mask=J.layers.mask&-5,st.layers.mask=J.layers.mask&-3;const Gt=$.parent,jt=J.cameras;P(J,Gt);for(let Jt=0;Jt<jt.length;Jt++)P(jt[Jt],Gt);jt.length===2?St(J,U,st):J.projectionMatrix.copy(U.projectionMatrix),Y($,J,Gt)};function Y($,vt,Mt){Mt===null?$.matrix.copy(vt.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(vt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(vt.projectionMatrix),$.projectionMatrixInverse.copy(vt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=yl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function($){m=$,g!==null&&(g.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function($){return x[$]};let _t=null;function At($,vt){if(_=vt.getViewerPose(d||f),b=vt,_!==null){const Mt=_.views;M!==null&&(t.setRenderTargetFramebuffer(L,M.framebuffer),t.setRenderTarget(L));let Gt=!1;Mt.length!==J.cameras.length&&(J.cameras.length=0,Gt=!0);for(let ge=0;ge<Mt.length;ge++){const _e=Mt[ge];let Te=null;if(M!==null)Te=M.getViewport(_e);else{const tn=v.getViewSubImage(g,_e);Te=tn.viewport,ge===0&&(t.setRenderTargetTextures(L,tn.colorTexture,tn.depthStencilTexture),t.setRenderTarget(L))}let le=G[ge];le===void 0&&(le=new ci,le.layers.enable(ge),le.viewport=new rn,G[ge]=le),le.matrix.fromArray(_e.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(_e.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Te.x,Te.y,Te.width,Te.height),ge===0&&(J.matrix.copy(le.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Gt===!0&&J.cameras.push(le)}const jt=l.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const ge=v.getDepthInformation(Mt[0]);ge&&ge.isValid&&ge.texture&&y.init(ge,l.renderState)}if(jt&&jt.includes("camera-access")&&R){t.state.unbindTexture(),v=r.getBinding();for(let ge=0;ge<Mt.length;ge++){const _e=Mt[ge].camera;if(_e){let Te=x[_e];Te||(Te=new jy,x[_e]=Te);const le=v.getCameraImage(_e);Te.sourceTexture=le}}}}for(let Mt=0;Mt<B.length;Mt++){const Gt=I[Mt],jt=B[Mt];Gt!==null&&jt!==void 0&&jt.update(Gt,vt,d||f)}_t&&_t($,vt),vt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:vt}),b=null}const Ot=new tx;Ot.setAnimationLoop(At),this.setAnimationLoop=function($){_t=$},this.dispose=function(){}}}const Hr=new Ji,F2=new $e;function B2(s,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Zy(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,A,D,L){x.isMeshBasicMaterial?u(y,x):x.isMeshLambertMaterial?(u(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(y,x),v(y,x)):x.isMeshPhongMaterial?(u(y,x),_(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(y,x),g(y,x),x.isMeshPhysicalMaterial&&M(y,x,L)):x.isMeshMatcapMaterial?(u(y,x),b(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),R(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,A,D):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const A=t.get(x),D=A.envMap,L=A.envMapRotation;D&&(y.envMap.value=D,Hr.copy(L),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),y.envMapRotation.value.setFromMatrix4(F2.makeRotationFromEuler(Hr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,A,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*A,y.scale.value=D*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,A){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const A=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function z2(s,t,i,r){let l={},u={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,D){const L=D.program;r.uniformBlockBinding(A,L)}function d(A,D){let L=l[A.id];L===void 0&&(b(A),L=_(A),l[A.id]=L,A.addEventListener("dispose",y));const B=D.program;r.updateUBOMapping(A,B);const I=t.render.frame;u[A.id]!==I&&(g(A),u[A.id]=I)}function _(A){const D=v();A.__bindingPointIndex=D;const L=s.createBuffer(),B=A.__size,I=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,B,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,L),L}function v(){for(let A=0;A<p;A++)if(f.indexOf(A)===-1)return f.push(A),A;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const D=l[A.id],L=A.uniforms,B=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let I=0,F=L.length;I<F;I++){const T=Array.isArray(L[I])?L[I]:[L[I]];for(let U=0,st=T.length;U<st;U++){const G=T[U];if(M(G,I,U,B)===!0){const J=G.__offset,Q=Array.isArray(G.value)?G.value:[G.value];let rt=0;for(let Z=0;Z<Q.length;Z++){const N=Q[Z],z=R(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,J+rt,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,rt),rt+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(A,D,L,B){const I=A.value,F=D+"_"+L;if(B[F]===void 0)return typeof I=="number"||typeof I=="boolean"?B[F]=I:B[F]=I.clone(),!0;{const T=B[F];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return B[F]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function b(A){const D=A.uniforms;let L=0;const B=16;for(let F=0,T=D.length;F<T;F++){const U=Array.isArray(D[F])?D[F]:[D[F]];for(let st=0,G=U.length;st<G;st++){const J=U[st],Q=Array.isArray(J.value)?J.value:[J.value];for(let rt=0,Z=Q.length;rt<Z;rt++){const N=Q[rt],z=R(N),ot=L%B,ht=ot%z.boundary,St=ot+ht;L+=ht,St!==0&&B-St<z.storage&&(L+=B-St),J.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=L,L+=z.storage}}}const I=L%B;return I>0&&(L+=B-I),A.__size=L,A.__cache={},this}function R(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",A),D}function y(A){const D=A.target;D.removeEventListener("dispose",y);const L=f.indexOf(D.__bindingPointIndex);f.splice(L,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function x(){for(const A in l)s.deleteBuffer(l[A]);f=[],l={},u={}}return{bind:m,update:d,dispose:x}}const H2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function G2(){return ki===null&&(ki=new CT(H2,16,16,eo,Da),ki.name="DFG_LUT",ki.minFilter=Un,ki.magFilter=Un,ki.wrapS=Ta,ki.wrapT=Ta,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class V2{constructor(t={}){const{canvas:i=VE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:M=fi}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const R=M,y=new Set([kp,Vp,Gp]),x=new Set([fi,Qi,gl,_l,zp,Hp]),A=new Uint32Array(4),D=new Int32Array(4);let L=null,B=null;const I=[],F=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let st=!1;this._outputColorSpace=Qn;let G=0,J=0,Q=null,rt=-1,Z=null;const N=new rn,z=new rn;let ot=null;const ht=new Se(0);let St=0,P=i.width,Y=i.height,_t=1,At=null,Ot=null;const $=new rn(0,0,P,Y),vt=new rn(0,0,P,Y);let Mt=!1;const Gt=new Kp;let jt=!1,Jt=!1;const Ye=new $e,ge=new j,_e=new rn,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function tn(){return Q===null?_t:1}let V=r;function Ze(w,W){return i.getContext(w,W)}try{const w={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fp}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",ae,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),V===null){const W="webgl2";if(V=Ze(W,w),V===null)throw Ze(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ce("WebGLRenderer: "+w.message),w}let Ae,Oe,Yt,O,E,q,pt,xt,ft,Wt,wt,Kt,ee,Tt,bt,Pt,Nt,It,ce,X,Ct,Rt,Ft;function Et(){Ae=new VR(V),Ae.init(),Ct=new U2(V,Ae),Oe=new OR(V,Ae,t,Ct),Yt=new D2(V,Ae),Oe.reversedDepthBuffer&&g&&Yt.buffers.depth.setReversed(!0),O=new XR(V),E=new g2,q=new L2(V,Ae,Yt,E,Oe,Ct,O),pt=new GR(U),xt=new KT(V),Rt=new UR(V,xt),ft=new kR(V,xt,O,Rt),Wt=new qR(V,ft,xt,Rt,O),It=new YR(V,Oe,q),bt=new PR(E),wt=new m2(U,pt,Ae,Oe,Rt,bt),Kt=new B2(U,E),ee=new v2,Tt=new E2(Ae),Nt=new LR(U,pt,Yt,Wt,b,m),Pt=new w2(U,Wt,Oe),Ft=new z2(V,O,Oe,Yt),ce=new NR(V,Ae,O),X=new WR(V,Ae,O),O.programs=wt.programs,U.capabilities=Oe,U.extensions=Ae,U.properties=E,U.renderLists=ee,U.shadowMap=Pt,U.state=Yt,U.info=O}Et(),R!==fi&&(T=new ZR(R,i.width,i.height,l,u));const ct=new I2(U,V);this.xr=ct,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=Ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(P,Y,!1))},this.getSize=function(w){return w.set(P,Y)},this.setSize=function(w,W,lt=!0){if(ct.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,Y=W,i.width=Math.floor(w*_t),i.height=Math.floor(W*_t),lt===!0&&(i.style.width=w+"px",i.style.height=W+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(P*_t,Y*_t).floor()},this.setDrawingBufferSize=function(w,W,lt){P=w,Y=W,_t=lt,i.width=Math.floor(w*lt),i.height=Math.floor(W*lt),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(R===fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,W,lt,it){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,W,lt,it),Yt.viewport(N.copy($).multiplyScalar(_t).round())},this.getScissor=function(w){return w.copy(vt)},this.setScissor=function(w,W,lt,it){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,W,lt,it),Yt.scissor(z.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(w){Yt.setScissorTest(Mt=w)},this.setOpaqueSort=function(w){At=w},this.setTransparentSort=function(w){Ot=w},this.getClearColor=function(w){return w.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,lt=!0){let it=0;if(w){let tt=!1;if(Q!==null){const Dt=Q.texture.format;tt=y.has(Dt)}if(tt){const Dt=Q.texture.type,Bt=x.has(Dt),Lt=Nt.getClearColor(),Xt=Nt.getClearAlpha(),Zt=Lt.r,ie=Lt.g,se=Lt.b;Bt?(A[0]=Zt,A[1]=ie,A[2]=se,A[3]=Xt,V.clearBufferuiv(V.COLOR,0,A)):(D[0]=Zt,D[1]=ie,D[2]=se,D[3]=Xt,V.clearBufferiv(V.COLOR,0,D))}else it|=V.COLOR_BUFFER_BIT}W&&(it|=V.DEPTH_BUFFER_BIT),lt&&(it|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&V.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",ae,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),Nt.dispose(),ee.dispose(),Tt.dispose(),E.dispose(),pt.dispose(),Wt.dispose(),Rt.dispose(),Ft.dispose(),wt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Zr),ct.removeEventListener("sessionend",Kr),Fi.stop()};function zt(w){w.preventDefault(),Tc("WebGLRenderer: Context Lost."),st=!0}function ae(){Tc("WebGLRenderer: Context Restored."),st=!1;const w=O.autoReset,W=Pt.enabled,lt=Pt.autoUpdate,it=Pt.needsUpdate,tt=Pt.type;Et(),O.autoReset=w,Pt.enabled=W,Pt.autoUpdate=lt,Pt.needsUpdate=it,Pt.type=tt}function Ie(w){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Re(w){const W=w.target;W.removeEventListener("dispose",Re),In(W)}function In(w){Ei(w),E.remove(w)}function Ei(w){const W=E.get(w).programs;W!==void 0&&(W.forEach(function(lt){wt.releaseProgram(lt)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,lt,it,tt,Dt){W===null&&(W=Te);const Bt=tt.isMesh&&tt.matrixWorld.determinant()<0,Lt=wl(w,W,lt,it,tt);Yt.setMaterial(it,Bt);let Xt=lt.index,Zt=1;if(it.wireframe===!0){if(Xt=ft.getWireframeAttribute(lt),Xt===void 0)return;Zt=2}const ie=lt.drawRange,se=lt.attributes.position;let Ht=ie.start*Zt,fe=(ie.start+ie.count)*Zt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*Zt),fe=Math.min(fe,(Dt.start+Dt.count)*Zt)),Xt!==null?(Ht=Math.max(Ht,0),fe=Math.min(fe,Xt.count)):se!=null&&(Ht=Math.max(Ht,0),fe=Math.min(fe,se.count));const Ke=fe-Ht;if(Ke<0||Ke===1/0)return;Rt.setup(tt,it,Lt,lt,Xt);let Qe,De=ce;if(Xt!==null&&(Qe=xt.get(Xt),De=X,De.setIndex(Qe)),tt.isMesh)it.wireframe===!0?(Yt.setLineWidth(it.wireframeLinewidth*tn()),De.setMode(V.LINES)):De.setMode(V.TRIANGLES);else if(tt.isLine){let _n=it.linewidth;_n===void 0&&(_n=1),Yt.setLineWidth(_n*tn()),tt.isLineSegments?De.setMode(V.LINES):tt.isLineLoop?De.setMode(V.LINE_LOOP):De.setMode(V.LINE_STRIP)}else tt.isPoints?De.setMode(V.POINTS):tt.isSprite&&De.setMode(V.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Ac("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))De.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const _n=tt._multiDrawStarts,kt=tt._multiDrawCounts,Fn=tt._multiDrawCount,re=Xt?xt.get(Xt).bytesPerElement:1,Bn=E.get(it).currentProgram.getUniforms();for(let $n=0;$n<Fn;$n++)Bn.setValue(V,"_gl_DrawID",$n),De.render(_n[$n]/re,kt[$n])}else if(tt.isInstancedMesh)De.renderInstances(Ht,Ke,tt.count);else if(lt.isInstancedBufferGeometry){const _n=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,kt=Math.min(lt.instanceCount,_n);De.renderInstances(Ht,Ke,kt)}else De.render(Ht,Ke)};function oo(w,W,lt){w.transparent===!0&&w.side===Ea&&w.forceSinglePass===!1?(w.side=Jn,w.needsUpdate=!0,Na(w,W,lt),w.side=pr,w.needsUpdate=!0,Na(w,W,lt),w.side=Ea):Na(w,W,lt)}this.compile=function(w,W,lt=null){lt===null&&(lt=w),B=Tt.get(lt),B.init(W),F.push(B),lt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(B.pushLight(tt),tt.castShadow&&B.pushShadow(tt))}),w!==lt&&w.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(B.pushLight(tt),tt.castShadow&&B.pushShadow(tt))}),B.setupLights();const it=new Set;return w.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Dt=tt.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){const Lt=Dt[Bt];oo(Lt,lt,tt),it.add(Lt)}else oo(Dt,lt,tt),it.add(Dt)}),B=F.pop(),it},this.compileAsync=function(w,W,lt=null){const it=this.compile(w,W,lt);return new Promise(tt=>{function Dt(){if(it.forEach(function(Bt){E.get(Bt).currentProgram.isReady()&&it.delete(Bt)}),it.size===0){tt(w);return}setTimeout(Dt,10)}Ae.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let jr=null;function Al(w){jr&&jr(w)}function Zr(){Fi.stop()}function Kr(){Fi.start()}const Fi=new tx;Fi.setAnimationLoop(Al),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(w){jr=w,ct.setAnimationLoop(w),w===null?Fi.stop():Fi.start()},ct.addEventListener("sessionstart",Zr),ct.addEventListener("sessionend",Kr),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(st===!0)return;const lt=ct.enabled===!0&&ct.isPresenting===!0,it=T!==null&&(Q===null||lt)&&T.begin(U,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(W),W=ct.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,W,Q),B=Tt.get(w,F.length),B.init(W),F.push(B),Ye.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Gt.setFromProjectionMatrix(Ye,Yi,W.reversedDepth),Jt=this.localClippingEnabled,jt=bt.init(this.clippingPlanes,Jt),L=ee.get(w,I.length),L.init(),I.push(L),ct.enabled===!0&&ct.isPresenting===!0){const Bt=U.xr.getDepthSensingMesh();Bt!==null&&Qr(Bt,W,-1/0,U.sortObjects)}Qr(w,W,0,U.sortObjects),L.finish(),U.sortObjects===!0&&L.sort(At,Ot),le=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,le&&Nt.addToRenderList(L,w),this.info.render.frame++,jt===!0&&bt.beginShadows();const tt=B.state.shadowsArray;if(Pt.render(tt,w,W),jt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&T.hasRenderPass())===!1){const Bt=L.opaque,Lt=L.transmissive;if(B.setupLights(),W.isArrayCamera){const Xt=W.cameras;if(Lt.length>0)for(let Zt=0,ie=Xt.length;Zt<ie;Zt++){const se=Xt[Zt];ln(Bt,Lt,w,se)}le&&Nt.render(w);for(let Zt=0,ie=Xt.length;Zt<ie;Zt++){const se=Xt[Zt];Ti(L,w,se,se.viewport)}}else Lt.length>0&&ln(Bt,Lt,w,W),le&&Nt.render(w),Ti(L,w,W)}Q!==null&&J===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),it&&T.end(U),w.isScene===!0&&w.onAfterRender(U,w,W),Rt.resetDefaultState(),rt=-1,Z=null,F.pop(),F.length>0?(B=F[F.length-1],jt===!0&&bt.setGlobalState(U.clippingPlanes,B.state.camera)):B=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function Qr(w,W,lt,it){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)lt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)B.pushLight(w),w.castShadow&&B.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Gt.intersectsSprite(w)){it&&_e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ye);const Bt=Wt.update(w),Lt=w.material;Lt.visible&&L.push(w,Bt,Lt,lt,_e.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Gt.intersectsObject(w))){const Bt=Wt.update(w),Lt=w.material;if(it&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_e.copy(w.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),_e.copy(Bt.boundingSphere.center)),_e.applyMatrix4(w.matrixWorld).applyMatrix4(Ye)),Array.isArray(Lt)){const Xt=Bt.groups;for(let Zt=0,ie=Xt.length;Zt<ie;Zt++){const se=Xt[Zt],Ht=Lt[se.materialIndex];Ht&&Ht.visible&&L.push(w,Bt,Ht,lt,_e.z,se)}}else Lt.visible&&L.push(w,Bt,Lt,lt,_e.z,null)}}const Dt=w.children;for(let Bt=0,Lt=Dt.length;Bt<Lt;Bt++)Qr(Dt[Bt],W,lt,it)}function Ti(w,W,lt,it){const{opaque:tt,transmissive:Dt,transparent:Bt}=w;B.setupLightsView(lt),jt===!0&&bt.setGlobalState(U.clippingPlanes,lt),it&&Yt.viewport(N.copy(it)),tt.length>0&&gn(tt,W,lt),Dt.length>0&&gn(Dt,W,lt),Bt.length>0&&gn(Bt,W,lt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function ln(w,W,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[it.id]===void 0){const Ht=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[it.id]=new Zi(1,1,{generateMipmaps:!0,type:Ht?Da:fi,minFilter:kr,samples:Math.max(4,Oe.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Dt=B.state.transmissionRenderTarget[it.id],Bt=it.viewport||N;Dt.setSize(Bt.z*U.transmissionResolutionScale,Bt.w*U.transmissionResolutionScale);const Lt=U.getRenderTarget(),Xt=U.getActiveCubeFace(),Zt=U.getActiveMipmapLevel();U.setRenderTarget(Dt),U.getClearColor(ht),St=U.getClearAlpha(),St<1&&U.setClearColor(16777215,.5),U.clear(),le&&Nt.render(lt);const ie=U.toneMapping;U.toneMapping=ji;const se=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),B.setupLightsView(it),jt===!0&&bt.setGlobalState(U.clippingPlanes,it),gn(w,lt,it),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let fe=0,Ke=W.length;fe<Ke;fe++){const Qe=W[fe],{object:De,geometry:_n,material:kt,group:Fn}=Qe;if(kt.side===Ea&&De.layers.test(it.layers)){const re=kt.side;kt.side=Jn,kt.needsUpdate=!0,ta(De,lt,it,_n,kt,Fn),kt.side=re,kt.needsUpdate=!0,Ht=!0}}Ht===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}U.setRenderTarget(Lt,Xt,Zt),U.setClearColor(ht,St),se!==void 0&&(it.viewport=se),U.toneMapping=ie}function gn(w,W,lt){const it=W.isScene===!0?W.overrideMaterial:null;for(let tt=0,Dt=w.length;tt<Dt;tt++){const Bt=w[tt],{object:Lt,geometry:Xt,group:Zt}=Bt;let ie=Bt.material;ie.allowOverride===!0&&it!==null&&(ie=it),Lt.layers.test(lt.layers)&&ta(Lt,W,lt,Xt,ie,Zt)}}function ta(w,W,lt,it,tt,Dt){w.onBeforeRender(U,W,lt,it,tt,Dt),w.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),tt.onBeforeRender(U,W,lt,it,w,Dt),tt.transparent===!0&&tt.side===Ea&&tt.forceSinglePass===!1?(tt.side=Jn,tt.needsUpdate=!0,U.renderBufferDirect(lt,W,it,tt,w,Dt),tt.side=pr,tt.needsUpdate=!0,U.renderBufferDirect(lt,W,it,tt,w,Dt),tt.side=Ea):U.renderBufferDirect(lt,W,it,tt,w,Dt),w.onAfterRender(U,W,lt,it,tt,Dt)}function Na(w,W,lt){W.isScene!==!0&&(W=Te);const it=E.get(w),tt=B.state.lights,Dt=B.state.shadowsArray,Bt=tt.state.version,Lt=wt.getParameters(w,tt.state,Dt,W,lt),Xt=wt.getProgramCacheKey(Lt);let Zt=it.programs;it.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,it.fog=W.fog;const ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;it.envMap=pt.get(w.envMap||it.environment,ie),it.envMapRotation=it.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Zt===void 0&&(w.addEventListener("dispose",Re),Zt=new Map,it.programs=Zt);let se=Zt.get(Xt);if(se!==void 0){if(it.currentProgram===se&&it.lightsStateVersion===Bt)return Cl(w,Lt),se}else Lt.uniforms=wt.getUniforms(w),w.onBeforeCompile(Lt,U),se=wt.acquireProgram(Lt,Xt),Zt.set(Xt,se),it.uniforms=Lt.uniforms;const Ht=it.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ht.clippingPlanes=bt.uniform),Cl(w,Lt),it.needsLights=lo(w),it.lightsStateVersion=Bt,it.needsLights&&(Ht.ambientLightColor.value=tt.state.ambient,Ht.lightProbe.value=tt.state.probe,Ht.directionalLights.value=tt.state.directional,Ht.directionalLightShadows.value=tt.state.directionalShadow,Ht.spotLights.value=tt.state.spot,Ht.spotLightShadows.value=tt.state.spotShadow,Ht.rectAreaLights.value=tt.state.rectArea,Ht.ltc_1.value=tt.state.rectAreaLTC1,Ht.ltc_2.value=tt.state.rectAreaLTC2,Ht.pointLights.value=tt.state.point,Ht.pointLightShadows.value=tt.state.pointShadow,Ht.hemisphereLights.value=tt.state.hemi,Ht.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Ht.spotLightMatrix.value=tt.state.spotLightMatrix,Ht.spotLightMap.value=tt.state.spotLightMap,Ht.pointShadowMatrix.value=tt.state.pointShadowMatrix),it.currentProgram=se,it.uniformsList=null,se}function Rl(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Sc.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Cl(w,W){const lt=E.get(w);lt.outputColorSpace=W.outputColorSpace,lt.batching=W.batching,lt.batchingColor=W.batchingColor,lt.instancing=W.instancing,lt.instancingColor=W.instancingColor,lt.instancingMorph=W.instancingMorph,lt.skinning=W.skinning,lt.morphTargets=W.morphTargets,lt.morphNormals=W.morphNormals,lt.morphColors=W.morphColors,lt.morphTargetsCount=W.morphTargetsCount,lt.numClippingPlanes=W.numClippingPlanes,lt.numIntersection=W.numClipIntersection,lt.vertexAlphas=W.vertexAlphas,lt.vertexTangents=W.vertexTangents,lt.toneMapping=W.toneMapping}function wl(w,W,lt,it,tt){W.isScene!==!0&&(W=Te),q.resetTextureUnits();const Dt=W.fog,Bt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?W.environment:null,Lt=Q===null?U.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:no,Xt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Zt=pt.get(it.envMap||Bt,Xt),ie=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,se=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ht=!!lt.morphAttributes.position,fe=!!lt.morphAttributes.normal,Ke=!!lt.morphAttributes.color;let Qe=ji;it.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Qe=U.toneMapping);const De=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,_n=De!==void 0?De.length:0,kt=E.get(it),Fn=B.state.lights;if(jt===!0&&(Jt===!0||w!==Z)){const cn=w===Z&&it.id===rt;bt.setState(it,w,cn)}let re=!1;it.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Fn.state.version||kt.outputColorSpace!==Lt||tt.isBatchedMesh&&kt.batching===!1||!tt.isBatchedMesh&&kt.batching===!0||tt.isBatchedMesh&&kt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&kt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&kt.instancing===!1||!tt.isInstancedMesh&&kt.instancing===!0||tt.isSkinnedMesh&&kt.skinning===!1||!tt.isSkinnedMesh&&kt.skinning===!0||tt.isInstancedMesh&&kt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&kt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&kt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&kt.instancingMorph===!1&&tt.morphTexture!==null||kt.envMap!==Zt||it.fog===!0&&kt.fog!==Dt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==bt.numPlanes||kt.numIntersection!==bt.numIntersection)||kt.vertexAlphas!==ie||kt.vertexTangents!==se||kt.morphTargets!==Ht||kt.morphNormals!==fe||kt.morphColors!==Ke||kt.toneMapping!==Qe||kt.morphTargetsCount!==_n)&&(re=!0):(re=!0,kt.__version=it.version);let Bn=kt.currentProgram;re===!0&&(Bn=Na(it,W,tt));let $n=!1,Ai=!1,ti=!1;const Pe=Bn.getUniforms(),un=kt.uniforms;if(Yt.useProgram(Bn.program)&&($n=!0,Ai=!0,ti=!0),it.id!==rt&&(rt=it.id,Ai=!0),$n||Z!==w){Yt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pe.setValue(V,"projectionMatrix",w.projectionMatrix),Pe.setValue(V,"viewMatrix",w.matrixWorldInverse);const Ri=Pe.map.cameraPosition;Ri!==void 0&&Ri.setValue(V,ge.setFromMatrixPosition(w.matrixWorld)),Oe.logarithmicDepthBuffer&&Pe.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Pe.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,Ai=!0,ti=!0)}if(kt.needsLights&&(Fn.state.directionalShadowMap.length>0&&Pe.setValue(V,"directionalShadowMap",Fn.state.directionalShadowMap,q),Fn.state.spotShadowMap.length>0&&Pe.setValue(V,"spotShadowMap",Fn.state.spotShadowMap,q),Fn.state.pointShadowMap.length>0&&Pe.setValue(V,"pointShadowMap",Fn.state.pointShadowMap,q)),tt.isSkinnedMesh){Pe.setOptional(V,tt,"bindMatrix"),Pe.setOptional(V,tt,"bindMatrixInverse");const cn=tt.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Pe.setValue(V,"boneTexture",cn.boneTexture,q))}tt.isBatchedMesh&&(Pe.setOptional(V,tt,"batchingTexture"),Pe.setValue(V,"batchingTexture",tt._matricesTexture,q),Pe.setOptional(V,tt,"batchingIdTexture"),Pe.setValue(V,"batchingIdTexture",tt._indirectTexture,q),Pe.setOptional(V,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Pe.setValue(V,"batchingColorTexture",tt._colorsTexture,q));const zn=lt.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&It.update(tt,lt,Bn),(Ai||kt.receiveShadow!==tt.receiveShadow)&&(kt.receiveShadow=tt.receiveShadow,Pe.setValue(V,"receiveShadow",tt.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&W.environment!==null&&(un.envMapIntensity.value=W.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=G2()),Ai&&(Pe.setValue(V,"toneMappingExposure",U.toneMappingExposure),kt.needsLights&&_r(un,ti),Dt&&it.fog===!0&&Kt.refreshFogUniforms(un,Dt),Kt.refreshMaterialUniforms(un,it,_t,Y,B.state.transmissionRenderTarget[w.id]),Sc.upload(V,Rl(kt),un,q)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Sc.upload(V,Rl(kt),un,q),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Pe.setValue(V,"center",tt.center),Pe.setValue(V,"modelViewMatrix",tt.modelViewMatrix),Pe.setValue(V,"normalMatrix",tt.normalMatrix),Pe.setValue(V,"modelMatrix",tt.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const cn=it.uniformsGroups;for(let Ri=0,ea=cn.length;Ri<ea;Ri++){const Jr=cn[Ri];Ft.update(Jr,Bn),Ft.bind(Jr,Bn)}}return Bn}function _r(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function lo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,W,lt){const it=E.get(w);it.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=W,E.get(w.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const lt=E.get(w);lt.__webglFramebuffer=W,lt.__useDefaultFramebuffer=W===void 0};const Oa=V.createFramebuffer();this.setRenderTarget=function(w,W=0,lt=0){Q=w,G=W,J=lt;let it=null,tt=!1,Dt=!1;if(w){const Lt=E.get(w);if(Lt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),N.copy(w.viewport),z.copy(w.scissor),ot=w.scissorTest,Yt.viewport(N),Yt.scissor(z),Yt.setScissorTest(ot),rt=-1;return}else if(Lt.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(Lt.__hasExternalTextures)q.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ie=w.depthTexture;if(Lt.__boundDepthTexture!==ie){if(ie!==null&&E.has(ie)&&(w.width!==ie.image.width||w.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Dt=!0);const Zt=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[W])?it=Zt[W][lt]:it=Zt[W],tt=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?it=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?it=Zt[lt]:it=Zt,N.copy(w.viewport),z.copy(w.scissor),ot=w.scissorTest}else N.copy($).multiplyScalar(_t).floor(),z.copy(vt).multiplyScalar(_t).floor(),ot=Mt;if(lt!==0&&(it=Oa),Yt.bindFramebuffer(V.FRAMEBUFFER,it)&&Yt.drawBuffers(w,it),Yt.viewport(N),Yt.scissor(z),Yt.setScissorTest(ot),tt){const Lt=E.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Lt.__webglTexture,lt)}else if(Dt){const Lt=W;for(let Xt=0;Xt<w.textures.length;Xt++){const Zt=E.get(w.textures[Xt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xt,Zt.__webglTexture,lt,Lt)}}else if(w!==null&&lt!==0){const Lt=E.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,lt)}rt=-1},this.readRenderTargetPixels=function(w,W,lt,it,tt,Dt,Bt,Lt=0){if(!(w&&w.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(Xt=Xt[Bt]),Xt){Yt.bindFramebuffer(V.FRAMEBUFFER,Xt);try{const Zt=w.textures[Lt],ie=Zt.format,se=Zt.type;if(w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),!Oe.textureFormatReadable(ie)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(se)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-it&&lt>=0&&lt<=w.height-tt&&V.readPixels(W,lt,it,tt,Ct.convert(ie),Ct.convert(se),Dt)}finally{const Zt=Q!==null?E.get(Q).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(w,W,lt,it,tt,Dt,Bt,Lt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(Xt=Xt[Bt]),Xt)if(W>=0&&W<=w.width-it&&lt>=0&&lt<=w.height-tt){Yt.bindFramebuffer(V.FRAMEBUFFER,Xt);const Zt=w.textures[Lt],ie=Zt.format,se=Zt.type;if(w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),!Oe.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ht),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),V.readPixels(W,lt,it,tt,Ct.convert(ie),Ct.convert(se),0);const fe=Q!==null?E.get(Q).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,fe);const Ke=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await kE(V,Ke,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ht),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(Ht),V.deleteSync(Ke),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,lt=0){const it=Math.pow(2,-lt),tt=Math.floor(w.image.width*it),Dt=Math.floor(w.image.height*it),Bt=W!==null?W.x:0,Lt=W!==null?W.y:0;q.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,Bt,Lt,tt,Dt),Yt.unbindTexture()};const Pa=V.createFramebuffer(),vr=V.createFramebuffer();this.copyTextureToTexture=function(w,W,lt=null,it=null,tt=0,Dt=0){let Bt,Lt,Xt,Zt,ie,se,Ht,fe,Ke;const Qe=w.isCompressedTexture?w.mipmaps[Dt]:w.image;if(lt!==null)Bt=lt.max.x-lt.min.x,Lt=lt.max.y-lt.min.y,Xt=lt.isBox3?lt.max.z-lt.min.z:1,Zt=lt.min.x,ie=lt.min.y,se=lt.isBox3?lt.min.z:0;else{const un=Math.pow(2,-tt);Bt=Math.floor(Qe.width*un),Lt=Math.floor(Qe.height*un),w.isDataArrayTexture?Xt=Qe.depth:w.isData3DTexture?Xt=Math.floor(Qe.depth*un):Xt=1,Zt=0,ie=0,se=0}it!==null?(Ht=it.x,fe=it.y,Ke=it.z):(Ht=0,fe=0,Ke=0);const De=Ct.convert(W.format),_n=Ct.convert(W.type);let kt;W.isData3DTexture?(q.setTexture3D(W,0),kt=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(q.setTexture2DArray(W,0),kt=V.TEXTURE_2D_ARRAY):(q.setTexture2D(W,0),kt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const Fn=V.getParameter(V.UNPACK_ROW_LENGTH),re=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Bn=V.getParameter(V.UNPACK_SKIP_PIXELS),$n=V.getParameter(V.UNPACK_SKIP_ROWS),Ai=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Zt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ie),V.pixelStorei(V.UNPACK_SKIP_IMAGES,se);const ti=w.isDataArrayTexture||w.isData3DTexture,Pe=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const un=E.get(w),zn=E.get(W),cn=E.get(un.__renderTarget),Ri=E.get(zn.__renderTarget);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,cn.__webglFramebuffer),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let ea=0;ea<Xt;ea++)ti&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(w).__webglTexture,tt,se+ea),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(W).__webglTexture,Dt,Ke+ea)),V.blitFramebuffer(Zt,ie,Bt,Lt,Ht,fe,Bt,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(tt!==0||w.isRenderTargetTexture||E.has(w)){const un=E.get(w),zn=E.get(W);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,Pa),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,vr);for(let cn=0;cn<Xt;cn++)ti?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,un.__webglTexture,tt,se+cn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,un.__webglTexture,tt),Pe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zn.__webglTexture,Dt,Ke+cn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zn.__webglTexture,Dt),tt!==0?V.blitFramebuffer(Zt,ie,Bt,Lt,Ht,fe,Bt,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):Pe?V.copyTexSubImage3D(kt,Dt,Ht,fe,Ke+cn,Zt,ie,Bt,Lt):V.copyTexSubImage2D(kt,Dt,Ht,fe,Zt,ie,Bt,Lt);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Pe?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(kt,Dt,Ht,fe,Ke,Bt,Lt,Xt,De,_n,Qe.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(kt,Dt,Ht,fe,Ke,Bt,Lt,Xt,De,Qe.data):V.texSubImage3D(kt,Dt,Ht,fe,Ke,Bt,Lt,Xt,De,_n,Qe):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,Ht,fe,Bt,Lt,De,_n,Qe.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,Ht,fe,Qe.width,Qe.height,De,Qe.data):V.texSubImage2D(V.TEXTURE_2D,Dt,Ht,fe,Bt,Lt,De,_n,Qe);V.pixelStorei(V.UNPACK_ROW_LENGTH,Fn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,re),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Bn),V.pixelStorei(V.UNPACK_SKIP_ROWS,$n),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ai),Dt===0&&W.generateMipmaps&&V.generateMipmap(kt),Yt.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),Yt.unbindTexture()},this.resetState=function(){G=0,J=0,Q=null,Yt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const Kv={type:"change"},$p={type:"start"},sx={type:"end"},dc=new jp,Qv=new fr,k2=Math.cos(70*Ap.DEG2RAD),yn=new j,Kn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ud=1e-6;class W2 extends jT{constructor(t,i=null){super(t,i),this.state=We.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new mr,this._lastTargetPosition=new j,this._quat=new mr().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tv,this._sphericalDelta=new Tv,this._scale=1,this._panOffset=new j,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new j,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Y2.bind(this),this._onPointerDown=X2.bind(this),this._onPointerUp=q2.bind(this),this._onContextMenu=t3.bind(this),this._onMouseWheel=K2.bind(this),this._onKeyDown=Q2.bind(this),this._onTouchStart=J2.bind(this),this._onTouchMove=$2.bind(this),this._onMouseDown=j2.bind(this),this._onMouseMove=Z2.bind(this),this._interceptControlDown=e3.bind(this),this._interceptControlUp=n3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kv),this.update(),this.state=We.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;yn.copy(i).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Kn:r>Math.PI&&(r-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=f!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),i.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=yn.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),f=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(dc.origin.copy(this.object.position),dc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dc.direction))<k2?this.object.lookAt(this.target):(Qv.setFromNormalAndCoplanarPoint(this.object.up,this.target),dc.intersectPlane(Qv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Ud||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ud||this._lastTargetPosition.distanceToSquared(this.target)>Ud?(this.dispatchEvent(Kv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){yn.setFromMatrixColumn(i,0),yn.multiplyScalar(-t),this._panOffset.add(yn)}_panUp(t,i){this.screenSpacePanning===!0?yn.setFromMatrixColumn(i,1):(yn.setFromMatrixColumn(i,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(t),this._panOffset.add(yn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;yn.copy(l).sub(this.target);let u=yn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/r.clientHeight,this.object.matrix),this._panUp(2*i*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,u=i-r.top,f=r.width,p=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(u/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),u=.5*(t.pageY+r.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new $t,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function X2(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Y2(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function q2(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sx),this.state=We.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function j2(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=We.DOLLY;break;case Ks.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=We.ROTATE}break;case Ks.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent($p)}function Z2(s){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function K2(s){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(s.preventDefault(),this.dispatchEvent($p),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(sx))}function Q2(s){this.enabled!==!1&&this._handleKeyDown(s)}function J2(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=We.TOUCH_ROTATE;break;case js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=We.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent($p)}function $2(s){switch(this._trackPointer(s),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=We.NONE}}function t3(s){this.enabled!==!1&&s.preventDefault()}function e3(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n3(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const i3="#ff0000",a3="#c62131",r3="#700b1c",s3="#2c7797",o3="#f55283",Jv="#3b3b3b",l3="rgba(56,189,248,0.95)",u3="rgba(14,165,233,0.55)",c3="rgba(8,10,14,0.92)",f3=[2,8,18,32,32,18,8];function h3(s){let t=Math.max(0,Math.floor(s));const i=[];for(const r of f3){if(t<=0)break;const l=Math.min(r,t);i.push(l),t-=l}return t>0&&i.push(t),i}function $v(s){return{dots:Math.min(s,18),total:s,clamped:s>18}}function d3(s=128){const t=document.createElement("canvas");t.width=s,t.height=s;const i=t.getContext("2d"),r=s/2,l=i.createRadialGradient(r,r,0,r,r,r);l.addColorStop(0,l3),l.addColorStop(.25,u3),l.addColorStop(1,c3),i.fillStyle=l,i.beginPath(),i.arc(r,r,r,0,Math.PI*2),i.fill();const u=new UT(t);return u.colorSpace=Qn,u.needsUpdate=!0,u}const p3=({atomicNumber:s,size:t=180})=>{const i=mt.useMemo(()=>h3(s),[s]),r=mt.useRef(null);mt.useEffect(()=>{const u=r.current;if(!u)return;const f=new xT,p=new ci(42,1,.1,1e3);p.position.set(0,0,26);const m=new V2({alpha:!0,antialias:!0});m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setSize(t,t),m.outputColorSpace=Qn,u.appendChild(m.domElement);const d=new W2(p,m.domElement);d.enableDamping=!0,d.dampingFactor=.07,d.enablePan=!1,d.minDistance=18,d.maxDistance=42,d.rotateSpeed=.85,d.target.set(0,0,0),d.update();const _=new WT(16777215,.4),v=new Td(16766164,1.35,120);v.position.set(10,8,18);const g=new Td(8330525,1.3,120);g.position.set(-12,-8,-16);const M=new Td(16622767,.75,90);M.position.set(0,-6,10),f.add(_,v,g,M);const b=new Zs,R=new Mi(new Jp(1.35,3),new zT({color:i3,emissive:r3,emissiveIntensity:.85,metalness:.18,roughness:.58,clearcoat:.28,clearcoatRoughness:.44}));b.add(R);const y=new Mi(new Dc(1.5,28,28),new Ky({color:a3,transparent:!0,opacity:.5,roughness:.9,metalness:.05}));y.scale.setScalar(1.06),b.add(y);const x=new Mi(new Dc(1.85,24,24),new Zp({color:s3,transparent:!0,opacity:.1,blending:hl,depthWrite:!1}));b.add(x),f.add(b);const A=d3(128),D=new Xy({map:A,transparent:!0,blending:hl,depthWrite:!1,opacity:.95,color:new Se(o3)}),L=new Rp({color:Jv,transparent:!0,opacity:.65}),B=new Rp({color:Jv,transparent:!0,opacity:.4,blending:hl}),I=[];function F(Q,rt=160){const Z=[];for(let z=0;z<=rt;z++){const ot=z/rt*Math.PI*2;Z.push(new j(Math.cos(ot)*Q,0,Math.sin(ot)*Q))}const N=new kn().setFromPoints(Z);return new xv(N,L)}function T(Q){const rt=Math.sin(Q*999)*1e4;return rt-Math.floor(rt)}i.forEach((Q,rt)=>{const{dots:Z}=$v(Q),N=new Zs;f.add(N);const z=3.4+rt*1.95,ot=F(z);N.add(ot);const ht=T(s*10+rt*3+1),St=T(s*10+rt*3+2),P=Ap.lerp(.25,1.05,ht),Y=Ap.lerp(-.9,.9,St);N.rotation.x=P,N.rotation.z=Y;const At=1.15*(1/(1+rt*.35)),Ot=.18*(.45+rt*.1),$=[],vt=[],Mt=[],Gt=24;for(let jt=0;jt<Z;jt++){const Jt=new AT(D),Ye=.9;Jt.scale.set(Ye,Ye,1),N.add(Jt),$.push(Jt),vt.push(Math.PI*2*jt/Z);const ge=Array.from({length:Gt},()=>new j(0,0,0)),_e=new kn().setFromPoints(ge),Te=new xv(_e,B);N.add(Te),Mt.push({line:Te,points:ge})}I.push({group:N,radius:z,speed:At,precession:Ot,phases:vt,electrons:$,trails:Mt,tiltA:P,tiltB:Y})});const U=new qT;let st=0;const G=new j,J=()=>{const Q=U.getElapsedTime();b.rotation.y=Q*.55,b.rotation.x=Q*.22;const rt=1+Math.sin(Q*2.1)*.03;b.scale.setScalar(rt),I.forEach((Z,N)=>{Z.group.rotation.y=Q*Z.precession;const z=1+Math.sin(Q*.9+N)*.015;Z.electrons.forEach((ht,St)=>{const P=Q*Z.speed+Z.phases[St],Y=Z.radius*z,_t=Math.cos(P)*Y,At=Math.sin(P)*Y,Ot=Math.sin(P*2+N)*.06;ht.position.set(_t,Ot,At);const $=Z.trails[St];$.points.pop(),$.points.unshift(G.set(_t,Ot,At).clone()),$.line.geometry.setFromPoints($.points),$.line.material.opacity=.22+N*.03});const ot=Z.group.children.find(ht=>ht.type==="Line");ot&&ot.scale.setScalar(1+Math.sin(Q*.8+N)*.01)}),d.update(),m.render(f,p),st=requestAnimationFrame(J)};return J(),()=>{cancelAnimationFrame(st),f.traverse(Q=>{Q.geometry&&Q.geometry.dispose?.(),Q.material&&(Array.isArray(Q.material)?Q.material.forEach(rt=>rt.dispose()):Q.material.dispose?.())}),A.dispose(),d.dispose(),m.dispose(),u.contains(m.domElement)&&u.removeChild(m.domElement)}},[i,t,s]);const l=i.some(u=>$v(u).clamped);return pe.jsxs("div",{className:"relative",style:{width:t,height:t},children:[pe.jsx("div",{ref:r,className:"h-full w-full"}),l?pe.jsx("div",{className:"absolute bottom-0 right-0 rounded bg-white/75 px-1.5 py-0.5 text-[10px] text-slate-600",children:"* visible electrons limited"}):null]})},m3="#b92b2b",g3=({isOpen:s,element:t,onClose:i})=>(mt.useEffect(()=>{if(!s)return;const r=l=>{l.key==="Escape"&&i()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[s,i]),!s||!t?null:pe.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 sm:p-6",onClick:i,role:"dialog","aria-modal":"true",children:pe.jsxs("div",{className:"relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-xl bg-white p-5 pr-16 md:p-8 md:pr-20",onClick:r=>r.stopPropagation(),children:[pe.jsx("button",{type:"button",onClick:i,className:"absolute right-4 top-4 md:right-6 md:top-6 flex h-9 w-9 items-center justify-center rounded-md text-xl leading-none text-white transition hover:brightness-110 active:brightness-95",style:{backgroundColor:m3},"aria-label":"Cerrar",children:"×"}),pe.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-6",children:[pe.jsxs("div",{className:"flex-1",children:[pe.jsxs("h2",{className:"text-3xl font-bold",children:[t.name," (",t.symbol,")"]}),pe.jsxs("p",{className:"mt-2 text-base text-slate-700",children:["Atomic Number: ",t.number]}),pe.jsxs("p",{className:"text-base text-slate-700",children:["Atomic Weight: ",t.atomicWeight??"No disponible"]}),pe.jsxs("p",{className:"text-base text-slate-700",children:["Category: ",t.type??"No disponible"]}),pe.jsx("div",{className:"mt-5 text-sm leading-relaxed text-slate-800",children:pe.jsx("p",{children:t.information??"Information not available yet for this element."})})]}),pe.jsx("div",{className:"order-3 lg:order-2 shrink-0 w-full lg:w-[420px] h-[340px] lg:h-[420px] flex items-center justify-center overflow-visible",children:pe.jsx(p3,{atomicNumber:t.number,size:360})})]})]})})),_3=[{number:1,symbol:"H",name:"Hydrogen",group:1,period:1,atomicWeight:1.008,type:"Other nonmetals",information:"The lightest element and most abundant in the universe. It forms diatomic H₂ gas and is a key component of water and organic compounds."},{number:2,symbol:"He",name:"Helium",group:18,period:1,atomicWeight:4.0026,type:"Noble gases",information:"A noble gas with very low chemical reactivity. It is commonly used in cryogenics, balloons, and inert atmospheres."},{number:3,symbol:"Li",name:"Lithium",group:1,period:2,atomicWeight:6.94,type:"Alkali metals",information:"A soft, highly reactive alkali metal used extensively in rechargeable lithium-ion batteries."},{number:4,symbol:"Be",name:"Beryllium",group:2,period:2,atomicWeight:9.0122,type:"Alkaline earth metals",information:"A hard, lightweight metal with high stiffness. Used in aerospace materials and X-ray windows."},{number:5,symbol:"B",name:"Boron",group:13,period:2,atomicWeight:10.81,type:"Metalloids",information:"A metalloid important in borosilicate glass, detergents, and semiconductors."},{number:6,symbol:"C",name:"Carbon",group:14,period:2,atomicWeight:12.011,type:"Other nonmetals",information:"A fundamental element of organic chemistry. It forms many allotropes including diamond, graphite, and graphene."},{number:7,symbol:"N",name:"Nitrogen",group:15,period:2,atomicWeight:14.007,type:"Other nonmetals",information:"A diatomic gas that makes up about 78% of Earth's atmosphere and is essential for life."},{number:8,symbol:"O",name:"Oxygen",group:16,period:2,atomicWeight:15.999,type:"Other nonmetals",information:"A highly reactive nonmetal essential for respiration and combustion processes."},{number:9,symbol:"F",name:"Fluorine",group:17,period:2,atomicWeight:18.998,type:"Halogens",information:"The most electronegative element. It is extremely reactive and forms compounds with most elements."},{number:10,symbol:"Ne",name:"Neon",group:18,period:2,atomicWeight:20.18,type:"Noble gases",information:"An inert noble gas commonly used in neon lighting and high-voltage indicators."},{number:11,symbol:"Na",name:"Sodium",group:1,period:3,atomicWeight:22.99,type:"Alkali metals",information:"A soft, highly reactive metal that reacts vigorously with water. Common in table salt (NaCl)."},{number:12,symbol:"Mg",name:"Magnesium",group:2,period:3,atomicWeight:24.305,type:"Alkaline earth metals",information:"A lightweight metal used in alloys and essential for many biological processes."},{number:13,symbol:"Al",name:"Aluminum",group:13,period:3,atomicWeight:26.982,type:"Other metals",information:"A lightweight, corrosion-resistant metal widely used in construction, packaging, and transportation."},{number:14,symbol:"Si",name:"Silicon",group:14,period:3,atomicWeight:28.085,type:"Metalloids",information:"A metalloid widely used in semiconductors and electronics. It is abundant in Earth's crust."},{number:15,symbol:"P",name:"Phosphorus",group:15,period:3,atomicWeight:30.974,type:"Other nonmetals",information:"A reactive nonmetal essential for life, present in DNA, ATP, and fertilizers."},{number:16,symbol:"S",name:"Sulfur",group:16,period:3,atomicWeight:32.06,type:"Other nonmetals",information:"A yellow nonmetal used in sulfuric acid production and many industrial chemicals."},{number:17,symbol:"Cl",name:"Chlorine",group:17,period:3,atomicWeight:35.45,type:"Halogens",information:"A reactive halogen gas used in water purification, disinfectants, and chemical manufacturing."},{number:18,symbol:"Ar",name:"Argon",group:18,period:3,atomicWeight:39.948,type:"Noble gases",information:"An inert noble gas commonly used as a shielding gas in welding and lighting."},{number:19,symbol:"K",name:"Potassium",group:1,period:4,atomicWeight:39.098,type:"Alkali metals",information:"A highly reactive alkali metal essential for biological nerve and muscle function."},{number:20,symbol:"Ca",name:"Calcium",group:2,period:4,atomicWeight:40.078,type:"Alkaline earth metals",information:"An important metal for living organisms, forming bones and teeth and used in many industrial materials."},{number:21,symbol:"Sc",name:"Scandium",group:3,period:4,atomicWeight:44.956,type:"Transition metals",information:"A transition metal often used in lightweight aluminum alloys, particularly in aerospace applications."},{number:22,symbol:"Ti",name:"Titanium",group:4,period:4,atomicWeight:47.867,type:"Transition metals",information:"A strong, corrosion-resistant metal widely used in aerospace, implants, and high-performance alloys."},{number:23,symbol:"V",name:"Vanadium",group:5,period:4,atomicWeight:50.942,type:"Transition metals",information:"A transition metal used to strengthen steel and produce corrosion-resistant alloys."},{number:24,symbol:"Cr",name:"Chromium",group:6,period:4,atomicWeight:51.996,type:"Transition metals",information:"A hard metal known for its corrosion resistance and use in stainless steel and chrome plating."},{number:25,symbol:"Mn",name:"Manganese",group:7,period:4,atomicWeight:54.938,type:"Transition metals",information:"A transition metal important in steel production and biological enzyme systems."},{number:26,symbol:"Fe",name:"Iron",group:8,period:4,atomicWeight:55.845,type:"Transition metals",information:"A fundamental metal for construction and biology, forming the basis of steel and hemoglobin."},{number:27,symbol:"Co",name:"Cobalt",group:9,period:4,atomicWeight:58.933,type:"Transition metals",information:"A magnetic transition metal used in batteries, alloys, and pigments."},{number:28,symbol:"Ni",name:"Nickel",group:10,period:4,atomicWeight:58.693,type:"Transition metals",information:"A corrosion-resistant metal widely used in stainless steel and rechargeable batteries."},{number:29,symbol:"Cu",name:"Copper",group:11,period:4,atomicWeight:63.546,type:"Transition metals",information:"A highly conductive metal used extensively in electrical wiring and electronics."},{number:30,symbol:"Zn",name:"Zinc",group:12,period:4,atomicWeight:65.38,type:"Transition metals",information:"A metal used for galvanizing steel to prevent corrosion and in many biological enzymes."},{number:31,symbol:"Ga",name:"Gallium",group:13,period:4,atomicWeight:69.723,type:"Other metals",information:"A soft metal with a low melting point used in semiconductors such as gallium arsenide."},{number:32,symbol:"Ge",name:"Germanium",group:14,period:4,atomicWeight:72.63,type:"Metalloids",information:"A metalloid used in fiber optics, infrared optics, and semiconductor technology."},{number:33,symbol:"As",name:"Arsenic",group:15,period:4,atomicWeight:74.922,type:"Metalloids",information:"A toxic metalloid historically used in pesticides and now mainly in semiconductor materials."},{number:34,symbol:"Se",name:"Selenium",group:16,period:4,atomicWeight:78.971,type:"Other nonmetals",information:"A nonmetal essential in trace amounts for biology and used in electronics and glassmaking."},{number:35,symbol:"Br",name:"Bromine",group:17,period:4,atomicWeight:79.904,type:"Halogens",information:"A reddish-brown liquid halogen used in flame retardants, pharmaceuticals, and photography chemicals."},{number:36,symbol:"Kr",name:"Krypton",group:18,period:4,atomicWeight:83.798,type:"Noble gases",information:"A noble gas used in specialized lighting, photography flashes, and insulating window gases."},{number:37,symbol:"Rb",name:"Rubidium",group:1,period:5,atomicWeight:85.468,type:"Alkali metals",information:"A highly reactive alkali metal used in research, vacuum tubes, and atomic clocks."},{number:38,symbol:"Sr",name:"Strontium",group:2,period:5,atomicWeight:87.62,type:"Alkaline earth metals",information:"A reactive metal used in fireworks, ceramics, and specialized glass."},{number:39,symbol:"Y",name:"Yttrium",group:3,period:5,atomicWeight:88.906,type:"Transition metals",information:"A transition metal used in LEDs, phosphors, and high-temperature superconductors."},{number:40,symbol:"Zr",name:"Zirconium",group:4,period:5,atomicWeight:91.224,type:"Transition metals",information:"A corrosion-resistant metal used in nuclear reactors and strong ceramic materials."},{number:41,symbol:"Nb",name:"Niobium",group:5,period:5,atomicWeight:92.906,type:"Transition metals",information:"A transition metal used in superconducting materials and strengthening steel alloys."},{number:42,symbol:"Mo",name:"Molybdenum",group:6,period:5,atomicWeight:95.95,type:"Transition metals",information:"A refractory transition metal used in high-strength steel and industrial catalysts."},{number:43,symbol:"Tc",name:"Technetium",group:7,period:5,atomicWeight:98,type:"Transition metals",information:"A radioactive transition metal primarily used in medical diagnostic imaging."},{number:44,symbol:"Ru",name:"Ruthenium",group:8,period:5,atomicWeight:101.07,type:"Transition metals",information:"A rare transition metal used in electronics, catalysts, and wear-resistant electrical contacts."},{number:45,symbol:"Rh",name:"Rhodium",group:9,period:5,atomicWeight:102.91,type:"Transition metals",information:"A rare, highly reflective metal widely used in catalytic converters and jewelry plating."},{number:46,symbol:"Pd",name:"Palladium",group:10,period:5,atomicWeight:106.42,type:"Transition metals",information:"A precious metal used in catalytic converters, electronics, and hydrogen storage."},{number:47,symbol:"Ag",name:"Silver",group:11,period:5,atomicWeight:107.87,type:"Transition metals",information:"A highly conductive precious metal used in jewelry, electronics, and photography."},{number:48,symbol:"Cd",name:"Cadmium",group:12,period:5,atomicWeight:112.41,type:"Transition metals",information:"A toxic metal used in rechargeable batteries, pigments, and corrosion-resistant coatings."},{number:49,symbol:"In",name:"Indium",group:13,period:5,atomicWeight:114.82,type:"Other metals",information:"A soft metal used in touchscreens, LCD displays, and semiconductor materials."},{number:50,symbol:"Sn",name:"Tin",group:14,period:5,atomicWeight:118.71,type:"Other metals",information:"A malleable metal used for solder, coatings, and corrosion-resistant alloys."},{number:51,symbol:"Sb",name:"Antimony",group:15,period:5,atomicWeight:121.76,type:"Metalloids",information:"A metalloid used in flame retardants, batteries, and semiconductor technology."},{number:52,symbol:"Te",name:"Tellurium",group:16,period:5,atomicWeight:127.6,type:"Metalloids",information:"A rare metalloid used in thermoelectric devices and alloy production."},{number:53,symbol:"I",name:"Iodine",group:17,period:5,atomicWeight:126.9,type:"Halogens",information:"A halogen essential for thyroid hormones and widely used in antiseptics and medicine."},{number:54,symbol:"Xe",name:"Xenon",group:18,period:5,atomicWeight:131.29,type:"Noble gases",information:"A heavy noble gas used in flash lamps, ion propulsion systems, and anesthesia research."},{number:55,symbol:"Cs",name:"Cesium",group:1,period:6,atomicWeight:132.905,type:"Alkali metals",information:"A highly reactive alkali metal with a very low melting point, widely used in atomic clocks."},{number:56,symbol:"Ba",name:"Barium",group:2,period:6,atomicWeight:137.327,type:"Alkaline earth metals",information:"A reactive alkaline earth metal used in drilling fluids, medical imaging, and fireworks."},{number:57,symbol:"La",name:"Lanthanum",group:3,period:6,vGroup:4,vPeriod:8,atomicWeight:138.905,type:"Lanthanides",information:"A soft rare-earth metal used in camera lenses, catalysts, and rechargeable batteries."},{number:58,symbol:"Ce",name:"Cerium",group:3,period:6,vGroup:5,vPeriod:8,atomicWeight:140.116,type:"Lanthanides",information:"The most abundant rare-earth element, used in catalytic converters and glass polishing."},{number:59,symbol:"Pr",name:"Praseodymium",group:3,period:6,vGroup:6,vPeriod:8,atomicWeight:140.908,type:"Lanthanides",information:"A rare-earth metal used in strong permanent magnets and aircraft engine alloys."},{number:60,symbol:"Nd",name:"Neodymium",group:3,period:6,vGroup:7,vPeriod:8,atomicWeight:144.242,type:"Lanthanides",information:"Widely used to produce powerful neodymium magnets used in electronics and electric motors."},{number:61,symbol:"Pm",name:"Promethium",group:3,period:6,vGroup:8,vPeriod:8,atomicWeight:145,type:"Lanthanides",information:"A radioactive rare-earth element used mainly in scientific research and nuclear batteries."},{number:62,symbol:"Sm",name:"Samarium",group:3,period:6,vGroup:9,vPeriod:8,atomicWeight:150.36,type:"Lanthanides",information:"A rare-earth metal used in samarium–cobalt magnets and nuclear reactor control rods."},{number:63,symbol:"Eu",name:"Europium",group:3,period:6,vGroup:10,vPeriod:8,atomicWeight:151.964,type:"Lanthanides",information:"A rare-earth element used in phosphorescent materials for displays and lighting."},{number:64,symbol:"Gd",name:"Gadolinium",group:3,period:6,vGroup:11,vPeriod:8,atomicWeight:157.25,type:"Lanthanides",information:"A rare-earth metal used in MRI contrast agents and neutron-absorbing materials."},{number:65,symbol:"Tb",name:"Terbium",group:3,period:6,vGroup:12,vPeriod:8,atomicWeight:158.925,type:"Lanthanides",information:"A rare-earth element used in green phosphors for displays and energy-efficient lighting."},{number:66,symbol:"Dy",name:"Dysprosium",group:3,period:6,vGroup:13,vPeriod:8,atomicWeight:162.5,type:"Lanthanides",information:"Used in high-performance magnets and nuclear reactor control materials."},{number:67,symbol:"Ho",name:"Holmium",group:3,period:6,vGroup:14,vPeriod:8,atomicWeight:164.93,type:"Lanthanides",information:"A rare-earth metal with very strong magnetic properties used in specialized magnets and lasers."},{number:68,symbol:"Er",name:"Erbium",group:3,period:6,vGroup:15,vPeriod:8,atomicWeight:167.259,type:"Lanthanides",information:"A rare-earth element used in fiber optic communication amplifiers."},{number:69,symbol:"Tm",name:"Thulium",group:3,period:6,vGroup:16,vPeriod:8,atomicWeight:168.934,type:"Lanthanides",information:"One of the least abundant rare-earth elements, used in portable X-ray devices."},{number:70,symbol:"Yb",name:"Ytterbium",group:3,period:6,vGroup:17,vPeriod:8,atomicWeight:173.045,type:"Lanthanides",information:"A rare-earth metal used in lasers, stainless steel alloys, and atomic clocks."},{number:71,symbol:"Lu",name:"Lutetium",group:3,period:6,vGroup:18,vPeriod:8,atomicWeight:174.967,type:"Lanthanides",information:"The heaviest lanthanide, used in catalysts, PET scan detectors, and specialized alloys."},{number:89,symbol:"Ac",name:"Actinium",group:3,period:7,vGroup:4,vPeriod:9,atomicWeight:227,type:"Actinides",information:"A radioactive actinide element used mainly in scientific research and as a neutron source."},{number:90,symbol:"Th",name:"Thorium",group:3,period:7,vGroup:5,vPeriod:9,atomicWeight:232.038,type:"Actinides",information:"A weakly radioactive metal studied as a potential nuclear fuel in thorium reactors."},{number:91,symbol:"Pa",name:"Protactinium",group:3,period:7,vGroup:6,vPeriod:9,atomicWeight:231.036,type:"Actinides",information:"A rare and highly radioactive actinide element found in uranium ores."},{number:92,symbol:"U",name:"Uranium",group:3,period:7,vGroup:7,vPeriod:9,atomicWeight:238.029,type:"Actinides",information:"A heavy radioactive metal widely used as fuel in nuclear power plants."},{number:93,symbol:"Np",name:"Neptunium",group:3,period:7,vGroup:8,vPeriod:9,atomicWeight:237,type:"Actinides",information:"A synthetic radioactive element produced in nuclear reactors."},{number:94,symbol:"Pu",name:"Plutonium",group:3,period:7,vGroup:9,vPeriod:9,atomicWeight:244,type:"Actinides",information:"A radioactive actinide used as fuel in nuclear reactors and nuclear weapons."},{number:95,symbol:"Am",name:"Americium",group:3,period:7,vGroup:10,vPeriod:9,atomicWeight:243,type:"Actinides",information:"A synthetic radioactive element commonly used in household smoke detectors."},{number:96,symbol:"Cm",name:"Curium",group:3,period:7,vGroup:11,vPeriod:9,atomicWeight:247,type:"Actinides",information:"A radioactive actinide used mainly for scientific research."},{number:97,symbol:"Bk",name:"Berkelium",group:3,period:7,vGroup:12,vPeriod:9,atomicWeight:247,type:"Actinides",information:"A synthetic radioactive element produced in nuclear reactors for research."},{number:98,symbol:"Cf",name:"Californium",group:3,period:7,vGroup:13,vPeriod:9,atomicWeight:251,type:"Actinides",information:"A radioactive actinide used as a powerful neutron source in industry and research."},{number:99,symbol:"Es",name:"Einsteinium",group:3,period:7,vGroup:14,vPeriod:9,atomicWeight:252,type:"Actinides",information:"A highly radioactive synthetic element first identified in nuclear explosion debris."},{number:100,symbol:"Fm",name:"Fermium",group:3,period:7,vGroup:15,vPeriod:9,atomicWeight:257,type:"Actinides",information:"A synthetic radioactive actinide produced in high-energy nuclear reactions."},{number:101,symbol:"Md",name:"Mendelevium",group:3,period:7,vGroup:16,vPeriod:9,atomicWeight:258,type:"Actinides",information:"A synthetic actinide named after Dmitri Mendeleev and studied in nuclear chemistry research."},{number:102,symbol:"No",name:"Nobelium",group:3,period:7,vGroup:17,vPeriod:9,atomicWeight:259,type:"Actinides",information:"A synthetic radioactive element named after Alfred Nobel."},{number:103,symbol:"Lr",name:"Lawrencium",group:3,period:7,vGroup:18,vPeriod:9,atomicWeight:266,type:"Actinides",information:"The final actinide element, produced synthetically and studied mainly in nuclear physics."},{number:72,symbol:"Hf",name:"Hafnium",group:4,period:6,atomicWeight:178.49,type:"Transition metals",information:"A corrosion-resistant metal used in nuclear control rods and high-temperature alloys."},{number:73,symbol:"Ta",name:"Tantalum",group:5,period:6,atomicWeight:180.948,type:"Transition metals",information:"A highly corrosion-resistant metal widely used in electronics and surgical implants."},{number:74,symbol:"W",name:"Tungsten",group:6,period:6,atomicWeight:183.84,type:"Transition metals",information:"A metal with the highest melting point of all elements, used in filaments and cutting tools."},{number:75,symbol:"Re",name:"Rhenium",group:7,period:6,atomicWeight:186.207,type:"Transition metals",information:"A dense transition metal used in high-temperature superalloys and jet engines."},{number:76,symbol:"Os",name:"Osmium",group:8,period:6,atomicWeight:190.23,type:"Transition metals",information:"The densest naturally occurring element, used in specialized alloys and electrical contacts."},{number:77,symbol:"Ir",name:"Iridium",group:9,period:6,atomicWeight:192.217,type:"Transition metals",information:"An extremely corrosion-resistant metal used in spark plugs, electronics, and catalysts."},{number:78,symbol:"Pt",name:"Platinum",group:10,period:6,atomicWeight:195.084,type:"Transition metals",information:"A precious metal widely used in catalytic converters, jewelry, and chemical catalysts."},{number:79,symbol:"Au",name:"Gold",group:11,period:6,atomicWeight:196.967,type:"Transition metals",information:"A highly valued precious metal known for its conductivity, corrosion resistance, and use in electronics and jewelry."},{number:80,symbol:"Hg",name:"Mercury",group:12,period:6,atomicWeight:200.592,type:"Transition metals",information:"A dense liquid metal at room temperature historically used in thermometers and industrial processes."},{number:81,symbol:"Tl",name:"Thallium",group:13,period:6,atomicWeight:204.38,type:"Other metals",information:"A soft, toxic metal used in electronics, optics, and specialized medical imaging."},{number:82,symbol:"Pb",name:"Lead",group:14,period:6,atomicWeight:207.2,type:"Other metals",information:"A dense metal historically used in pipes, batteries, and radiation shielding."},{number:83,symbol:"Bi",name:"Bismuth",group:15,period:6,atomicWeight:208.98,type:"Other metals",information:"A relatively low-toxicity heavy metal used in pharmaceuticals and low-melting alloys."},{number:84,symbol:"Po",name:"Polonium",group:16,period:6,atomicWeight:209,type:"Other metals",information:"A highly radioactive metal discovered by Marie Curie and used mainly in scientific research."},{number:85,symbol:"At",name:"Astatine",group:17,period:6,atomicWeight:210,type:"Halogens",information:"A rare radioactive halogen studied mainly for potential medical applications."},{number:86,symbol:"Rn",name:"Radon",group:18,period:6,atomicWeight:222,type:"Noble gases",information:"A radioactive noble gas produced by uranium decay and known for health risks in enclosed spaces."},{number:87,symbol:"Fr",name:"Francium",group:1,period:7,atomicWeight:223,type:"Alkali metals",information:"An extremely rare and highly radioactive alkali metal that occurs naturally in trace amounts in uranium ores."},{number:88,symbol:"Ra",name:"Radium",group:2,period:7,atomicWeight:226,type:"Alkaline earth metals",information:"A radioactive alkaline earth metal once used in luminous paints and medical treatments."},{number:89,symbol:"Ac",name:"Actinium",group:3,period:7,vGroup:4,vPeriod:9,atomicWeight:227,type:"Actinides",information:"A radioactive actinide element used mainly in scientific research and as a neutron source."},{number:90,symbol:"Th",name:"Thorium",group:3,period:7,vGroup:5,vPeriod:9,atomicWeight:232.038,type:"Actinides",information:"A weakly radioactive metal studied as a potential nuclear fuel in thorium reactors."},{number:91,symbol:"Pa",name:"Protactinium",group:3,period:7,vGroup:6,vPeriod:9,atomicWeight:231.036,type:"Actinides",information:"A rare and highly radioactive actinide element found in uranium ores."},{number:92,symbol:"U",name:"Uranium",group:3,period:7,vGroup:7,vPeriod:9,atomicWeight:238.029,type:"Actinides",information:"A heavy radioactive metal widely used as fuel in nuclear power plants."},{number:93,symbol:"Np",name:"Neptunium",group:3,period:7,vGroup:8,vPeriod:9,atomicWeight:237,type:"Actinides",information:"A synthetic radioactive element produced in nuclear reactors."},{number:94,symbol:"Pu",name:"Plutonium",group:3,period:7,vGroup:9,vPeriod:9,atomicWeight:244,type:"Actinides",information:"A radioactive actinide used as fuel in nuclear reactors and nuclear weapons."},{number:95,symbol:"Am",name:"Americium",group:3,period:7,vGroup:10,vPeriod:9,atomicWeight:243,type:"Actinides",information:"A synthetic radioactive element commonly used in household smoke detectors."},{number:96,symbol:"Cm",name:"Curium",group:3,period:7,vGroup:11,vPeriod:9,atomicWeight:247,type:"Actinides",information:"A radioactive actinide used mainly for scientific research."},{number:97,symbol:"Bk",name:"Berkelium",group:3,period:7,vGroup:12,vPeriod:9,atomicWeight:247,type:"Actinides",information:"A synthetic radioactive element produced in nuclear reactors for research."},{number:98,symbol:"Cf",name:"Californium",group:3,period:7,vGroup:13,vPeriod:9,atomicWeight:251,type:"Actinides",information:"A radioactive actinide used as a powerful neutron source in industry and research."},{number:99,symbol:"Es",name:"Einsteinium",group:3,period:7,vGroup:14,vPeriod:9,atomicWeight:252,type:"Actinides",information:"A highly radioactive synthetic element first identified in nuclear explosion debris."},{number:100,symbol:"Fm",name:"Fermium",group:3,period:7,vGroup:15,vPeriod:9,atomicWeight:257,type:"Actinides",information:"A synthetic radioactive actinide produced in high-energy nuclear reactions."},{number:101,symbol:"Md",name:"Mendelevium",group:3,period:7,vGroup:16,vPeriod:9,atomicWeight:258,type:"Actinides",information:"A synthetic actinide named after Dmitri Mendeleev and studied in nuclear chemistry research."},{number:102,symbol:"No",name:"Nobelium",group:3,period:7,vGroup:17,vPeriod:9,atomicWeight:259,type:"Actinides",information:"A synthetic radioactive element named after Alfred Nobel."},{number:103,symbol:"Lr",name:"Lawrencium",group:3,period:7,vGroup:18,vPeriod:9,atomicWeight:266,type:"Actinides",information:"The final actinide element, produced synthetically and studied mainly in nuclear physics."},{number:104,symbol:"Rf",name:"Rutherfordium",group:4,period:7,atomicWeight:267,type:"Transition metals",information:"A synthetic element named after Ernest Rutherford with properties predicted to resemble hafnium."},{number:105,symbol:"Db",name:"Dubnium",group:5,period:7,atomicWeight:268,type:"Transition metals",information:"A synthetic transition metal named after the Russian research center Dubna."},{number:106,symbol:"Sg",name:"Seaborgium",group:6,period:7,atomicWeight:269,type:"Transition metals",information:"A synthetic element named after Glenn T. Seaborg, produced in particle accelerators."},{number:107,symbol:"Bh",name:"Bohrium",group:7,period:7,atomicWeight:270,type:"Transition metals",information:"A synthetic transition metal named after physicist Niels Bohr."},{number:108,symbol:"Hs",name:"Hassium",group:8,period:7,atomicWeight:269,type:"Transition metals",information:"A synthetic heavy element produced in particle accelerators and named after the German state of Hesse."},{number:109,symbol:"Mt",name:"Meitnerium",group:9,period:7,atomicWeight:278,type:"Transition metals",information:"A synthetic element named after physicist Lise Meitner."},{number:110,symbol:"Ds",name:"Darmstadtium",group:10,period:7,atomicWeight:281,type:"Transition metals",information:"A synthetic heavy element discovered in Darmstadt, Germany."},{number:111,symbol:"Rg",name:"Roentgenium",group:11,period:7,atomicWeight:282,type:"Transition metals",information:"A synthetic element named after Wilhelm Röntgen, the discoverer of X-rays."},{number:112,symbol:"Cn",name:"Copernicium",group:12,period:7,atomicWeight:285,type:"Transition metals",information:"A synthetic element named after Nicolaus Copernicus and produced in particle accelerators."},{number:113,symbol:"Nh",name:"Nihonium",group:13,period:7,atomicWeight:286,type:"Other metals",information:"A synthetic element discovered in Japan, named after 'Nihon', meaning Japan."},{number:114,symbol:"Fl",name:"Flerovium",group:14,period:7,atomicWeight:289,type:"Other metals",information:"A synthetic superheavy element named after the Flerov Laboratory of Nuclear Reactions."},{number:115,symbol:"Mc",name:"Moscovium",group:15,period:7,atomicWeight:290,type:"Other metals",information:"A synthetic element named after the Moscow region where it was discovered."},{number:116,symbol:"Lv",name:"Livermorium",group:16,period:7,atomicWeight:293,type:"Other metals",information:"A synthetic superheavy element named after Lawrence Livermore National Laboratory."},{number:117,symbol:"Ts",name:"Tennessine",group:17,period:7,atomicWeight:294,type:"Halogens",information:"A synthetic halogen element discovered through international collaboration."},{number:118,symbol:"Og",name:"Oganesson",group:18,period:7,atomicWeight:294,type:"Noble gases",information:"A synthetic noble gas named after physicist Yuri Oganessian."}],v3=["Alkali metals","Alkaline earth metals","Lanthanides","Actinides","Transition metals","Other metals","Metalloids","Other nonmetals","Halogens","Noble gases"];function ty(){const[s,t]=mt.useState(null),[i,r]=mt.useState(null),l=()=>{t(null)};return pe.jsxs("div",{className:"w-full min-h-screen flex flex-col items-center justify-center gap-3 px-2 py-4 sm:py-6",children:[pe.jsx("div",{className:"w-full max-w-full overflow-auto touch-pan-x touch-pan-y md:flex md:justify-center",children:pe.jsxs("div",{className:"relative w-max min-w-full md:min-w-0 md:mx-auto",children:[pe.jsx("div",{className:"z-20 mb-2 flex w-full items-center gap-1 overflow-x-auto whitespace-nowrap rounded md:absolute md:mb-0 md:flex-wrap md:justify-center md:overflow-visible md:whitespace-normal md:left-[58px] md:top-2 md:w-[926px]",children:v3.map(u=>{const f=i===u;return pe.jsx("button",{type:"button",onClick:()=>r(p=>p===u?null:u),className:"shrink-0 rounded border px-2 py-[2px] text-[10px] font-medium transition",style:{backgroundColor:Sy[u]??xy,color:"#0f172a",borderColor:f?"#0f172a":"#475569",boxShadow:f?"0 0 12px rgba(250, 204, 21, 0.9)":"none"},children:u},u)})}),pe.jsx("h1",{className:"mb-2 text-center text-4xl font-bold leading-none text-slate-800/90 whitespace-nowrap md:absolute md:mb-0 md:left-[180px] md:top-[78px] md:z-10 md:pointer-events-none md:text-6xl",children:"Periodic Table"}),pe.jsx("div",{className:"grid gap-[2px]",style:{gridTemplateColumns:"repeat(18, 56px)",gridAutoRows:"64px",minWidth:1008},children:_3.map(u=>{const f=u.vPeriod??u.period,p=f>=8?f+1:f;return pe.jsx("div",{style:{gridColumn:u.vGroup??u.group,gridRow:p},children:pe.jsx(lE,{element:u,onClick:()=>t(u),isHighlighted:i!==null&&u.type===i})},u.number)})})]})}),pe.jsx(g3,{isOpen:s!==null,element:s,onClose:l})]})}function y3(){return pe.jsxs(pe.Fragment,{children:[pe.jsxs(vb,{children:[pe.jsx(Od,{path:"/",element:pe.jsx(ty,{})}),pe.jsx(Od,{path:"/periodic-table",element:pe.jsx(ty,{})})]}),pe.jsx("a",{href:"http://www.freepik.com",target:"_blank",rel:"noreferrer",className:"fixed bottom-2 right-2 z-50 rounded bg-white/80 px-2 py-1 text-xs text-slate-700",children:"Designed by starline / Freepik"})]})}xM.createRoot(document.getElementById("root")).render(pe.jsx(mt.StrictMode,{children:pe.jsx(Vb,{children:pe.jsx(y3,{})})}));
