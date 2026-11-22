var nd=Object.defineProperty;var id=(s,e,t)=>e in s?nd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var N=(s,e,t)=>id(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="171",sd=0,nl=1,rd=2,Mc=1,ad=2,qn=3,ni=0,Xt=1,Wt=2,gi=0,fs=1,Pn=2,il=3,sl=4,od=5,Ni=100,cd=101,ld=102,hd=103,ud=104,dd=200,fd=201,pd=202,md=203,So=204,bo=205,gd=206,vd=207,_d=208,xd=209,yd=210,Md=211,Sd=212,bd=213,wd=214,wo=0,To=1,Eo=2,_s=3,Ao=4,Ro=5,Co=6,Po=7,Vh=0,Td=1,Ed=2,vi=0,Ad=1,Rd=2,Cd=3,Gh=4,Pd=5,Ld=6,Id=7,rl="attached",Dd="detached",Wh=300,xs=301,ys=302,Lo=303,Io=304,Sa=306,Oi=1e3,pi=1001,fa=1002,Kt=1003,Xh=1004,$s=1005,sn=1006,ta=1007,Kn=1008,ii=1009,qh=1010,Yh=1011,ar=1012,Sc=1013,ki=1014,bn=1015,pr=1016,bc=1017,wc=1018,Ms=1020,jh=35902,$h=1021,Kh=1022,dn=1023,Jh=1024,Zh=1025,ps=1026,Ss=1027,Tc=1028,Ec=1029,Qh=1030,Ac=1031,Rc=1033,na=33776,ia=33777,sa=33778,ra=33779,Do=35840,No=35841,Uo=35842,Fo=35843,Oo=36196,ko=37492,Bo=37496,zo=37808,Ho=37809,Vo=37810,Go=37811,Wo=37812,Xo=37813,qo=37814,Yo=37815,jo=37816,$o=37817,Ko=37818,Jo=37819,Zo=37820,Qo=37821,aa=36492,ec=36494,tc=36495,eu=36283,nc=36284,ic=36285,sc=36286,or=2300,cr=2301,La=2302,al=2400,ol=2401,cl=2402,Nd=2500,Ud=0,tu=1,rc=2,Fd=3200,Od=3201,nu=0,kd=1,fi="",Ut="srgb",Jt="srgb-linear",pa="linear",dt="srgb",Gi=7680,ll=519,Bd=512,zd=513,Hd=514,iu=515,Vd=516,Gd=517,Wd=518,Xd=519,ac=35044,Zs=35048,hl="300 es",Jn=2e3,ma=2001;class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const Qs=Math.PI/180,bs=180/Math.PI;function fn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function je(s,e,t){return Math.max(e,Math.min(t,s))}function Cc(s,e){return(s%e+e)%e}function qd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Yd(s,e,t){return s!==e?(t-s)/(e-s):0}function er(s,e,t){return(1-t)*s+t*e}function jd(s,e,t,n){return er(s,e,1-Math.exp(-t*n))}function $d(s,e=1){return e-Math.abs(Cc(s,e*2)-e)}function Kd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Jd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Zd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qd(s,e){return s+Math.random()*(e-s)}function ef(s){return s*(.5-Math.random())}function tf(s){s!==void 0&&(ul=s);let e=ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nf(s){return s*Qs}function sf(s){return s*bs}function rf(s){return(s&s-1)===0&&s!==0}function af(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function of(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const lf={DEG2RAD:Qs,RAD2DEG:bs,generateUUID:fn,clamp:je,euclideanModulo:Cc,mapLinear:qd,inverseLerp:Yd,lerp:er,damp:jd,pingpong:$d,smoothstep:Kd,smootherstep:Jd,randInt:Zd,randFloat:Qd,randFloatSpread:ef,seededRandom:tf,degToRad:nf,radToDeg:sf,isPowerOfTwo:rf,ceilPowerOfTwo:af,floorPowerOfTwo:of,setQuaternionFromProperEuler:cf,normalize:ht,denormalize:yn};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,r,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],M=i[1],y=i[4],_=i[7],L=i[2],R=i[5],C=i[8];return r[0]=a*v+o*M+c*L,r[3]=a*m+o*y+c*R,r[6]=a*p+o*_+c*C,r[1]=l*v+h*M+u*L,r[4]=l*m+h*y+u*R,r[7]=l*p+h*_+u*C,r[2]=d*v+f*M+g*L,r[5]=d*m+f*y+g*R,r[8]=d*p+f*_+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new Xe;function su(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hf(){const s=lr("canvas");return s.style.display="block",s}const dl={};function rs(s){s in dl||(dl[s]=!0,console.warn(s))}function uf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function df(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ff(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fl=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pf(){const s={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Jt]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),s}const Qe=pf();function Qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Wi;class mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=lr("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gf=0;class ru{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Da(i[a].image)):r.push(Da(i[a]))}else r=Da(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;class Pt extends Rs{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=pi,i=pi,r=sn,a=Kn,o=dn,c=ii,l=Pt.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=fn(),this.name="",this.source=new ru(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Wh;Pt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(f+1)/2,L=(p+1)/2,R=(h+d)/4,C=(u+v)/4,E=(g+m)/4;return y>_&&y>L?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=R/n,r=C/n):_>L?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=R/i,r=E/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=C/r,i=E/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _f extends Rs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ru(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends _f{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class au extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xf extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),R=Math.atan2(L,p*M);m=Math.sin(m*R)/L,o=Math.sin(o*R)/L}const _=o*M;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new I,ml=new pn;class si{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Mr.subVectors(this.max,Us),Xi.subVectors(e.a,Us),qi.subVectors(e.b,Us),Yi.subVectors(e.c,Us),ri.subVectors(qi,Xi),ai.subVectors(Yi,qi),Si.subVectors(Xi,Yi);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Si.z,Si.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Si.z,0,-Si.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Si.y,Si.x,0];return!Ua(t,Xi,qi,Yi,Mr)||(t=[1,0,0,0,1,0,0,0,1],!Ua(t,Xi,qi,Yi,Mr))?!1:(Sr.crossVectors(ri,ai),t=[Sr.x,Sr.y,Sr.z],Ua(t,Xi,qi,Yi,Mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new I,new I,new I,new I,new I,new I,new I,new I],vn=new I,yr=new si,Xi=new I,qi=new I,Yi=new I,ri=new I,ai=new I,Si=new I,Us=new I,Mr=new I,Sr=new I,bi=new I;function Ua(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){bi.fromArray(s,r);const o=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),c=e.dot(bi),l=t.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const yf=new si,Fs=new I,Fa=new I;class Nn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Fa)),this.expandByPoint(Fs.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new I,Oa=new I,br=new I,oi=new I,ka=new I,wr=new I,Ba=new I;class ba{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Oa.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Oa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(br),o=oi.dot(this.direction),c=-oi.dot(br),l=oi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oa).addScaledVector(br,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,r){ka.subVectors(t,e),wr.subVectors(n,e),Ba.crossVectors(ka,wr);let a=this.direction.dot(Ba),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const c=o*this.direction.dot(wr.crossVectors(oi,wr));if(c<0)return null;const l=o*this.direction.dot(ka.cross(oi));if(l<0||c+l>a)return null;const h=-o*oi.dot(Ba);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,g,v,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,v,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),a=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,Sf)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ci.crossVectors(n,en),ci.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ci.crossVectors(n,en)),ci.normalize(),Tr.crossVectors(en,ci),i[0]=ci.x,i[4]=Tr.x,i[8]=en.x,i[1]=ci.y,i[5]=Tr.y,i[9]=en.y,i[2]=ci.z,i[6]=Tr.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],y=n[7],_=n[11],L=n[15],R=i[0],C=i[4],E=i[8],b=i[12],x=i[1],T=i[5],z=i[9],F=i[13],V=i[2],W=i[6],D=i[10],H=i[14],U=i[3],j=i[7],ie=i[11],de=i[15];return r[0]=a*R+o*x+c*V+l*U,r[4]=a*C+o*T+c*W+l*j,r[8]=a*E+o*z+c*D+l*ie,r[12]=a*b+o*F+c*H+l*de,r[1]=h*R+u*x+d*V+f*U,r[5]=h*C+u*T+d*W+f*j,r[9]=h*E+u*z+d*D+f*ie,r[13]=h*b+u*F+d*H+f*de,r[2]=g*R+v*x+m*V+p*U,r[6]=g*C+v*T+m*W+p*j,r[10]=g*E+v*z+m*D+p*ie,r[14]=g*b+v*F+m*H+p*de,r[3]=M*R+y*x+_*V+L*U,r[7]=M*C+y*T+_*W+L*j,r[11]=M*E+y*z+_*D+L*ie,r[15]=M*b+y*F+_*H+L*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+v*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=u*m*l-v*d*l+v*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,_=h*v*l-g*u*l+g*o*f-a*v*f-h*o*p+a*u*p,L=g*u*c-h*v*c-g*o*d+a*v*d+h*o*m-a*u*m,R=t*M+n*y+i*_+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=M*C,e[1]=(v*d*r-u*m*r-v*i*f+n*m*f+u*i*p-n*d*p)*C,e[2]=(o*m*r-v*c*r+v*i*l-n*m*l-o*i*p+n*c*p)*C,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*C,e[4]=y*C,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*C,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*C,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*C,e[8]=_*C,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*C,e[10]=(a*v*r-g*o*r+g*n*l-t*v*l-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*C,e[12]=L*C,e[13]=(h*v*i-g*u*i+g*n*d-t*v*d-h*n*m+t*u*m)*C,e[14]=(g*o*i-a*v*i-g*n*c+t*v*c+a*n*m-t*o*m)*C,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,M=c*l,y=c*h,_=c*u,L=n.x,R=n.y,C=n.z;return i[0]=(1-(v+p))*L,i[1]=(f+_)*L,i[2]=(g-y)*L,i[3]=0,i[4]=(f-_)*R,i[5]=(1-(d+p))*R,i[6]=(m+M)*R,i[7]=0,i[8]=(g+y)*C,i[9]=(m-M)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ji.set(i[0],i[1],i[2]).length();const a=ji.set(i[4],i[5],i[6]).length(),o=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const l=1/r,h=1/a,u=1/o;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Jn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===Jn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ma)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Jn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*l,f=(n+i)*h;let g,v;if(o===Jn)g=(a+r)*u,v=-2*u;else if(o===ma)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new I,_n=new Ge,Mf=new I(0,0,0),Sf=new I(1,1,1),ci=new I,Tr=new I,en=new I,gl=new Ge,vl=new pn;class In{constructor(e=0,t=0,n=0,i=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vl.setFromEuler(this),this.setFromQuaternion(vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bf=0;const _l=new I,$i=new pn,Hn=new Ge,Er=new I,Os=new I,wf=new I,Tf=new pn,xl=new I(1,0,0),yl=new I(0,1,0),Ml=new I(0,0,1),Sl={type:"added"},Ef={type:"removed"},Ki={type:"childadded",child:null},za={type:"childremoved",child:null};class mt extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new I,t=new In,n=new pn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Xe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return _l.copy(e).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Os,Er,this.up):Hn.lookAt(Er,Os,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Hn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ef),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new I(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new I,Vn=new I,Ha=new I,Gn=new I,Ji=new I,Zi=new I,bl=new I,Va=new I,Ga=new I,Wa=new I,Xa=new st,qa=new st,Ya=new st;class Mn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xn.subVectors(e,t),i.cross(xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xn.subVectors(i,t),Vn.subVectors(n,t),Ha.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Vn),c=xn.dot(Ha),l=Vn.dot(Vn),h=Vn.dot(Ha),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Xa.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(e,t),qa.fromBufferAttribute(e,n),Ya.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Xa,r.x),a.addScaledVector(qa,r.y),a.addScaledVector(Ya,r.z),a}static isFrontFacing(e,t,n,i){return xn.subVectors(n,t),Vn.subVectors(e,t),xn.cross(Vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),xn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ji.subVectors(i,n),Zi.subVectors(r,n),Va.subVectors(e,n);const c=Ji.dot(Va),l=Zi.dot(Va);if(c<=0&&l<=0)return t.copy(n);Ga.subVectors(e,i);const h=Ji.dot(Ga),u=Zi.dot(Ga);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ji,a);Wa.subVectors(e,r);const f=Ji.dot(Wa),g=Zi.dot(Wa);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Zi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return bl.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(bl,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ji,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function ja(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Cc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ja(a,r,e+1/3),this.g=ja(a,r,e),this.b=ja(a,r,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=cu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Qe.fromWorkingColorSpace(Vt.copy(this),e),Math.round(je(Vt.r*255,0,255))*65536+Math.round(je(Vt.g*255,0,255))*256+Math.round(je(Vt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,r=Vt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ut){Qe.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Ar);const n=er(li.h,Ar.h,t),i=er(li.s,Ar.s,t),r=er(li.l,Ar.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ce;Ce.NAMES=cu;let Af=0;class Ln extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=fs,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=bo,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ft extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,Rr=new oe;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ac,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),e}}class lu extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hu extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rf=0;const cn=new Ge,$a=new mt,Qi=new I,tn=new si,ks=new si,Dt=new I;class wt extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(su(e)?hu:lu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(tn.min,ks.min),tn.expandByPoint(Dt),Dt.addVectors(tn.max,ks.max),tn.expandByPoint(Dt)):(tn.expandByPoint(ks.min),tn.expandByPoint(ks.max))}tn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Dt.fromBufferAttribute(o,l),c&&(Qi.fromBufferAttribute(e,l),Dt.add(Qi)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let E=0;E<n.count;E++)o[E]=new I,c[E]=new I;const l=new I,h=new I,u=new I,d=new oe,f=new oe,g=new oe,v=new I,m=new I;function p(E,b,x){l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),o[E].add(v),o[b].add(v),o[x].add(v),c[E].add(m),c[b].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let E=0,b=M.length;E<b;++E){const x=M[E],T=x.start,z=x.count;for(let F=T,V=T+z;F<V;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new I,_=new I,L=new I,R=new I;function C(E){L.fromBufferAttribute(i,E),R.copy(L);const b=o[E];y.copy(b),y.sub(L.multiplyScalar(L.dot(b))).normalize(),_.crossVectors(R,b);const T=_.dot(c[E])<0?-1:1;a.setXYZW(E,y.x,y.y,y.z,T)}for(let E=0,b=M.length;E<b;++E){const x=M[E],T=x.start,z=x.count;for(let F=T,V=T+z;F<V;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new Ge,wi=new ba,Cr=new Nn,Tl=new I,Pr=new I,Lr=new I,Ir=new I,Ka=new I,Dr=new I,El=new I,Nr=new I;class Ue extends mt{constructor(e=new wt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ka.fromBufferAttribute(u,e),a?Dr.addScaledVector(Ka,h):Dr.addScaledVector(Ka.sub(t),h))}t.add(Dr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Cr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Cr,Tl)===null||wi.origin.distanceToSquared(Tl)>(e.far-e.near)**2))&&(wl.copy(r).invert(),wi.copy(e.ray).applyMatrix4(wl),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,L=y;_<L;_+=3){const R=o.getX(_),C=o.getX(_+1),E=o.getX(_+2);i=Ur(this,p,e,n,l,h,u,R,C,E),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);i=Ur(this,a,e,n,l,h,u,M,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,L=y;_<L;_+=3){const R=_,C=_+1,E=_+2;i=Ur(this,p,e,n,l,h,u,R,C,E),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,y=m+1,_=m+2;i=Ur(this,a,e,n,l,h,u,M,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Cf(s,e,t,n,i,r,a,o){let c;if(e.side===Xt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===ni,o),c===null)return null;Nr.copy(o),Nr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Nr);return l<t.near||l>t.far?null:{distance:l,point:Nr.clone(),object:s}}function Ur(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Pr),s.getVertexPosition(c,Lr),s.getVertexPosition(l,Ir);const h=Cf(s,e,t,n,Pr,Lr,Ir,El);if(h){const u=new I;Mn.getBarycoord(El,Pr,Lr,Ir,u),i&&(h.uv=Mn.getInterpolatedAttribute(i,o,c,l,u,new oe)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,o,c,l,u,new oe)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};Mn.getNormal(Pr,Lr,Ir,d.normal),h.face=d,h.barycoord=u}return h}class yt extends wt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function g(v,m,p,M,y,_,L,R,C,E,b){const x=_/C,T=L/E,z=_/2,F=L/2,V=R/2,W=C+1,D=E+1;let H=0,U=0;const j=new I;for(let ie=0;ie<D;ie++){const de=ie*T-F;for(let Be=0;Be<W;Be++){const rt=Be*x-z;j[v]=rt*M,j[m]=de*y,j[p]=V,l.push(j.x,j.y,j.z),j[v]=0,j[m]=0,j[p]=R>0?1:-1,h.push(j.x,j.y,j.z),u.push(Be/C),u.push(1-ie/E),H+=1}}for(let ie=0;ie<E;ie++)for(let de=0;de<C;de++){const Be=d+de+W*ie,rt=d+de+W*(ie+1),J=d+(de+1)+W*(ie+1),ae=d+(de+1)+W*ie;c.push(Be,rt,ae),c.push(rt,J,ae),U+=6}o.addGroup(f,U,b),f+=U,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(s){const e={};for(let t=0;t<s.length;t++){const n=ws(s[t]);for(const i in n)e[i]=n[i]}return e}function Pf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function uu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Lf={clone:ws,merge:jt};var If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=Pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class du extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new I,Al=new oe,Rl=new oe;class $t extends du{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Al,Rl),t.subVectors(Rl,Al)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class Nf extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(es,ts,e,t);i.layers=this.layers,this.add(i);const r=new $t(es,ts,e,t);r.layers=this.layers,this.add(r);const a=new $t(es,ts,e,t);a.layers=this.layers,this.add(a);const o=new $t(es,ts,e,t);o.layers=this.layers,this.add(o);const c=new $t(es,ts,e,t);c.layers=this.layers,this.add(c);const l=new $t(es,ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fu extends Pt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:xs,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uf extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yt(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:gi});r.uniforms.tEquirect.value=t;const a=new Ue(i,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=sn),new Nf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Pc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new Pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ff extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Of{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ac,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new I;class Lc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Cl=new I,Pl=new st,Ll=new st,kf=new I,Il=new Ge,Fr=new I,Ja=new Nn,Dl=new Ge,Za=new ba;class Bf extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rl,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fr),this.boundingBox.expandByPoint(Fr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fr),this.boundingSphere.expandByPoint(Fr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(i),e.ray.intersectsSphere(Ja)!==!1&&(Dl.copy(i).invert(),Za.copy(e.ray).applyMatrix4(Dl),!(this.boundingBox!==null&&Za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Pl.fromBufferAttribute(i.attributes.skinIndex,e),Ll.fromBufferAttribute(i.attributes.skinWeight,e),Cl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ll.getComponent(r);if(a!==0){const o=Pl.getComponent(r);Il.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(kf.copy(Cl).applyMatrix4(Il),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pu extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mu extends Pt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Kt,h=Kt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nl=new Ge,zf=new Ge;class Ic{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:zf;Nl.multiplyMatrices(o,t[r]),Nl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ic(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mu(t,e,e,dn,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new pu),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class oc extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new Ge,Ul=new Ge,Or=[],Fl=new si,Hf=new Ge,Bs=new Ue,zs=new Nn;class oa extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Fl.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(Fl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),zs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),e.ray.intersectsSphere(zs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ns),Ul.multiplyMatrices(n,ns),Bs.matrixWorld=Ul,Bs.raycast(e,Or);for(let a=0,o=Or.length;a<o;a++){const c=Or[a];c.instanceId=r,c.object=this,t.push(c)}Or.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mu(new Float32Array(i*this.count),i,this.count,Tc,bn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Qa=new I,Vf=new I,Gf=new Xe;class Pi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qa.subVectors(n,t).cross(Vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gf.getNormalMatrix(e),i=this.coplanarPoint(Qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Nn,kr=new I;class Dc{constructor(e=new Pi,t=new Pi,n=new Pi,i=new Pi,r=new Pi,a=new Pi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],M=i[13],y=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+a,d+h,m+g,_+M).normalize(),n[3].setComponents(c-a,d-h,m-g,_-M).normalize(),n[4].setComponents(c-o,d-u,m-v,_-y).normalize(),t===Jn)n[5].setComponents(c+o,d+u,m+v,_+y).normalize();else if(t===ma)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(kr.x=i.normal.x>0?e.max.x:e.min.x,kr.y=i.normal.y>0?e.max.y:e.min.y,kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gu extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ga=new I,va=new I,Ol=new Ge,Hs=new ba,Br=new Nn,eo=new I,kl=new I;class Nc extends mt{constructor(e=new wt,t=new gu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ga.fromBufferAttribute(t,i-1),va.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ga.distanceTo(va);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),Br.radius+=r,e.ray.intersectsSphere(Br)===!1)return;Ol.copy(i).invert(),Hs.copy(e.ray).applyMatrix4(Ol);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),M=h.getX(v+1),y=zr(this,e,Hs,c,p,M);y&&t.push(y)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=zr(this,e,Hs,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=zr(this,e,Hs,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=zr(this,e,Hs,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function zr(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(ga.fromBufferAttribute(a,i),va.fromBufferAttribute(a,r),t.distanceSqToSegment(ga,va,eo,kl)>n)return;eo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(eo);if(!(c<e.near||c>e.far))return{distance:c,point:kl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Bl=new I,zl=new I;class Wf extends Nc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Bl.fromBufferAttribute(t,i),zl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bl.distanceTo(zl);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xf extends Nc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vu extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hl=new Ge,cc=new ba,Hr=new Nn,Vr=new I;class _u extends mt{constructor(e=new wt,t=new vu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Hr.radius+=r,e.ray.intersectsSphere(Hr)===!1)return;Hl.copy(i).invert(),cc.copy(e.ray).applyMatrix4(Hl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);Vr.fromBufferAttribute(u,m),Vl(Vr,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Vr.fromBufferAttribute(u,g),Vl(Vr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vl(s,e,t,n,i,r,a){const o=cc.distanceSqToPoint(s);if(o<t){const c=new I;cc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class qf extends Pt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xu extends Pt{constructor(e,t,n,i,r,a,o,c,l,h=ps){if(h!==ps&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=ki),n===void 0&&h===Ss&&(n=Ms),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new oe:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],r=[],a=[],o=new I,c=new Ge;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(je(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Uc extends Un{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new oe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Yf extends Uc{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Gr=new I,to=new Fc,no=new Fc,io=new Fc;class jf extends Un{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Gr.subVectors(i[0],i[1]).add(i[0]),l=Gr);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Gr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Gr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),to.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),no.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),io.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(to.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),no.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),io.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(to.calc(c),no.calc(c),io.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gl(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function $f(s,e){const t=1-s;return t*t*e}function Kf(s,e){return 2*(1-s)*s*e}function Jf(s,e){return s*s*e}function tr(s,e,t,n){return $f(s,e)+Kf(s,t)+Jf(s,n)}function Zf(s,e){const t=1-s;return t*t*t*e}function Qf(s,e){const t=1-s;return 3*t*t*s*e}function ep(s,e){return 3*(1-s)*s*s*e}function tp(s,e){return s*s*s*e}function nr(s,e,t,n,i){return Zf(s,e)+Qf(s,t)+ep(s,n)+tp(s,i)}class yu extends Un{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(e,i.x,r.x,a.x,o.x),nr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class np extends Un{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(e,i.x,r.x,a.x,o.x),nr(e,i.y,r.y,a.y,o.y),nr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mu extends Un{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ip extends Un{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Su extends Un{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(tr(e,i.x,r.x,a.x),tr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sp extends Un{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(tr(e,i.x,r.x,a.x),tr(e,i.y,r.y,a.y),tr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bu extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Gl(o,c.x,l.x,h.x,u.x),Gl(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new oe().fromArray(i))}return this}}var lc=Object.freeze({__proto__:null,ArcCurve:Yf,CatmullRomCurve3:jf,CubicBezierCurve:yu,CubicBezierCurve3:np,EllipseCurve:Uc,LineCurve:Mu,LineCurve3:ip,QuadraticBezierCurve:Su,QuadraticBezierCurve3:sp,SplineCurve:bu});class rp extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new lc[i.type]().fromJSON(i))}return this}}class hc extends rp{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Mu(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Su(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new yu(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new bu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new Uc(e,t,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Oc extends wt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=je(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new I,d=new oe,f=new I,g=new I,v=new I;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=t;M++){const y=n+M*h*i,_=Math.sin(y),L=Math.cos(y);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*_,u.y=e[R].y,u.z=e[R].x*L,a.push(u.x,u.y,u.z),d.x=M/t,d.y=R/(e.length-1),o.push(d.x,d.y);const C=c[3*R+0]*_,E=c[3*R+1],b=c[3*R+0]*L;l.push(C,E,b)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){const _=y+M*e.length,L=_,R=_+e.length,C=_+e.length+1,E=_+1;r.push(L,R,E),r.push(C,E,R)}this.setIndex(r),this.setAttribute("position",new it(a,3)),this.setAttribute("uv",new it(o,2)),this.setAttribute("normal",new it(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.points,e.segments,e.phiStart,e.phiLength)}}class wa extends Oc{constructor(e=1,t=1,n=4,i=8){const r=new hc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new wa(e.radius,e.length,e.capSegments,e.radialSegments)}}class os extends wt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new I,h=new oe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gt extends wt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function M(){const _=new I,L=new I;let R=0;const C=(t-e)/n;for(let E=0;E<=r;E++){const b=[],x=E/r,T=x*(t-e)+e;for(let z=0;z<=i;z++){const F=z/i,V=F*c+o,W=Math.sin(V),D=Math.cos(V);L.x=T*W,L.y=-x*n+m,L.z=T*D,u.push(L.x,L.y,L.z),_.set(W,C,D).normalize(),d.push(_.x,_.y,_.z),f.push(F,1-x),b.push(g++)}v.push(b)}for(let E=0;E<i;E++)for(let b=0;b<r;b++){const x=v[b][E],T=v[b+1][E],z=v[b+1][E+1],F=v[b][E+1];(e>0||b!==0)&&(h.push(x,T,F),R+=3),(t>0||b!==r-1)&&(h.push(T,z,F),R+=3)}l.addGroup(p,R,0),p+=R}function y(_){const L=g,R=new oe,C=new I;let E=0;const b=_===!0?e:t,x=_===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const T=g;for(let z=0;z<=i;z++){const V=z/i*c+o,W=Math.cos(V),D=Math.sin(V);C.x=b*D,C.y=m*x,C.z=b*W,u.push(C.x,C.y,C.z),d.push(0,x,0),R.x=W*.5+.5,R.y=D*.5*x+.5,f.push(R.x,R.y),g++}for(let z=0;z<i;z++){const F=L+z,V=T+z;_===!0?h.push(V,V+1,F):h.push(V+1,V,F),E+=3}l.addGroup(p,E,_===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ei extends gt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ei(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kc extends wt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new I,_=new I,L=new I;for(let R=0;R<t.length;R+=3)f(t[R+0],y),f(t[R+1],_),f(t[R+2],L),c(y,_,L,M)}function c(M,y,_,L){const R=L+1,C=[];for(let E=0;E<=R;E++){C[E]=[];const b=M.clone().lerp(_,E/R),x=y.clone().lerp(_,E/R),T=R-E;for(let z=0;z<=T;z++)z===0&&E===R?C[E][z]=b:C[E][z]=b.clone().lerp(x,z/T)}for(let E=0;E<R;E++)for(let b=0;b<2*(R-E)-1;b++){const x=Math.floor(b/2);b%2===0?(d(C[E][x+1]),d(C[E+1][x]),d(C[E][x])):(d(C[E][x+1]),d(C[E+1][x+1]),d(C[E+1][x]))}}function l(M){const y=new I;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(M),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const M=new I;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const _=m(M)/2/Math.PI+.5,L=p(M)/Math.PI+.5;a.push(_,1-L)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const y=a[M+0],_=a[M+2],L=a[M+4],R=Math.max(y,_,L),C=Math.min(y,_,L);R>.9&&C<.1&&(y<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){const _=M*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const M=new I,y=new I,_=new I,L=new I,R=new oe,C=new oe,E=new oe;for(let b=0,x=0;b<r.length;b+=9,x+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),R.set(a[x+0],a[x+1]),C.set(a[x+2],a[x+3]),E.set(a[x+4],a[x+5]),L.copy(M).add(y).add(_).divideScalar(3);const T=m(L);v(R,x+0,M,T),v(C,x+2,y,T),v(E,x+4,_,T)}}function v(M,y,_,L){L<0&&M.x===1&&(a[y]=M.x-1),_.x===0&&_.z===0&&(a[y]=L/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.vertices,e.indices,e.radius,e.details)}}class Bc extends kc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bc(e.radius,e.detail)}}class wu extends hc{constructor(e){super(e),this.uuid=fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new hc().fromJSON(i))}return this}}const ap={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Tu(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=up(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return hr(r,a,t,o,c,f,0),a}};function Tu(s,e,t,n,i){let r,a;if(i===Sp(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Wl(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Wl(r,s[r],s[r+1],a);return a&&Ta(a,a.next)&&(dr(a),a=a.next),a}function zi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ta(t,t.next)||vt(t.prev,t,t.next)===0)){if(dr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function hr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&gp(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?cp(s,n,i,r):op(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),dr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=lp(zi(s),e,t),hr(s,e,t,n,i,r,2)):a===2&&hp(s,e,t,n,i,r):hr(zi(s),e,t,n,i,r,1);break}}}function op(s){const e=s.prev,t=s,n=s.next;if(vt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&cs(i,o,r,c,a,l,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cp(s,e,t,n){const i=s.prev,r=s,a=s.next;if(vt(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=uc(f,g,e,t,n),M=uc(v,m,e,t,n);let y=s.prevZ,_=s.nextZ;for(;y&&y.z>=p&&_&&_.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&cs(o,h,c,u,l,d,y.x,y.y)&&vt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&cs(o,h,c,u,l,d,_.x,_.y)&&vt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&cs(o,h,c,u,l,d,y.x,y.y)&&vt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&cs(o,h,c,u,l,d,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function lp(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ta(i,r)&&Eu(i,n,n.next,r)&&ur(i,r)&&ur(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),dr(n),dr(n.next),n=s=r),n=n.next}while(n!==s);return zi(n)}function hp(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xp(a,o)){let c=Au(a,o);a=zi(a,a.next),c=zi(c,c.next),hr(a,e,t,n,i,r,0),hr(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function up(s,e,t,n){const i=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Tu(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(_p(l));for(i.sort(dp),r=0;r<i.length;r++)t=fp(i[r],t);return t}function dp(s,e){return s.x-e.x}function fp(s,e){const t=pp(s,e);if(!t)return e;const n=Au(t,s);return zi(n,n.next),zi(t,t.next)}function pp(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&cs(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),ur(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&mp(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function mp(s,e){return vt(s.prev,s,e.prev)<0&&vt(e.next,s,s.next)<0}function gp(s,e,t,n){let i=s;do i.z===0&&(i.z=uc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,vp(i)}function vp(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function uc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function _p(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function cs(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function xp(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!yp(s,e)&&(ur(s,e)&&ur(e,s)&&Mp(s,e)&&(vt(s.prev,s,e.prev)||vt(s,e.prev,e))||Ta(s,e)&&vt(s.prev,s,s.next)>0&&vt(e.prev,e,e.next)>0)}function vt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ta(s,e){return s.x===e.x&&s.y===e.y}function Eu(s,e,t,n){const i=Xr(vt(s,e,t)),r=Xr(vt(s,e,n)),a=Xr(vt(t,n,s)),o=Xr(vt(t,n,e));return!!(i!==r&&a!==o||i===0&&Wr(s,t,e)||r===0&&Wr(s,n,e)||a===0&&Wr(t,s,n)||o===0&&Wr(t,e,n))}function Wr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Xr(s){return s>0?1:s<0?-1:0}function yp(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Eu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ur(s,e){return vt(s.prev,s,s.next)<0?vt(s,e,s.next)>=0&&vt(s,s.prev,e)>=0:vt(s,e,s.prev)<0||vt(s,s.next,e)<0}function Mp(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Au(s,e){const t=new dc(s.i,s.x,s.y),n=new dc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wl(s,e,t,n){const i=new dc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function dr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function dc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sp(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class ir{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ir.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Xl(e),ql(n,e);let a=e.length;t.forEach(Xl);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,ql(n,t[c]);const o=ap.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Xl(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ql(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class zc extends wt{constructor(e=new wu([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new it(i,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:bp;let y,_=!1,L,R,C,E;p&&(y=p.getSpacedPoints(h),_=!0,d=!1,L=p.computeFrenetFrames(h,!1),R=new I,C=new I,E=new I),d||(m=0,f=0,g=0,v=0);const b=o.extractPoints(l);let x=b.shape;const T=b.holes;if(!ir.isClockWise(x)){x=x.reverse();for(let Q=0,re=T.length;Q<re;Q++){const P=T[Q];ir.isClockWise(P)&&(T[Q]=P.reverse())}}const F=ir.triangulateShape(x,T),V=x;for(let Q=0,re=T.length;Q<re;Q++){const P=T[Q];x=x.concat(P)}function W(Q,re,P){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(re,P)}const D=x.length,H=F.length;function U(Q,re,P){let Ee,te,xe;const ce=Q.x-re.x,De=Q.y-re.y,ge=P.x-Q.x,A=P.y-Q.y,S=ce*ce+De*De,G=ce*A-De*ge;if(Math.abs(G)>Number.EPSILON){const $=Math.sqrt(S),ee=Math.sqrt(ge*ge+A*A),K=re.x-De/$,Te=re.y+ce/$,ue=P.x-A/ee,_e=P.y+ge/ee,Ke=((ue-K)*A-(_e-Te)*ge)/(ce*A-De*ge);Ee=K+ce*Ke-Q.x,te=Te+De*Ke-Q.y;const se=Ee*Ee+te*te;if(se<=2)return new oe(Ee,te);xe=Math.sqrt(se/2)}else{let $=!1;ce>Number.EPSILON?ge>Number.EPSILON&&($=!0):ce<-Number.EPSILON?ge<-Number.EPSILON&&($=!0):Math.sign(De)===Math.sign(A)&&($=!0),$?(Ee=-De,te=ce,xe=Math.sqrt(S)):(Ee=ce,te=De,xe=Math.sqrt(S/2))}return new oe(Ee/xe,te/xe)}const j=[];for(let Q=0,re=V.length,P=re-1,Ee=Q+1;Q<re;Q++,P++,Ee++)P===re&&(P=0),Ee===re&&(Ee=0),j[Q]=U(V[Q],V[P],V[Ee]);const ie=[];let de,Be=j.concat();for(let Q=0,re=T.length;Q<re;Q++){const P=T[Q];de=[];for(let Ee=0,te=P.length,xe=te-1,ce=Ee+1;Ee<te;Ee++,xe++,ce++)xe===te&&(xe=0),ce===te&&(ce=0),de[Ee]=U(P[Ee],P[xe],P[ce]);ie.push(de),Be=Be.concat(de)}for(let Q=0;Q<m;Q++){const re=Q/m,P=f*Math.cos(re*Math.PI/2),Ee=g*Math.sin(re*Math.PI/2)+v;for(let te=0,xe=V.length;te<xe;te++){const ce=W(V[te],j[te],Ee);le(ce.x,ce.y,-P)}for(let te=0,xe=T.length;te<xe;te++){const ce=T[te];de=ie[te];for(let De=0,ge=ce.length;De<ge;De++){const A=W(ce[De],de[De],Ee);le(A.x,A.y,-P)}}}const rt=g+v;for(let Q=0;Q<D;Q++){const re=d?W(x[Q],Be[Q],rt):x[Q];_?(C.copy(L.normals[0]).multiplyScalar(re.x),R.copy(L.binormals[0]).multiplyScalar(re.y),E.copy(y[0]).add(C).add(R),le(E.x,E.y,E.z)):le(re.x,re.y,0)}for(let Q=1;Q<=h;Q++)for(let re=0;re<D;re++){const P=d?W(x[re],Be[re],rt):x[re];_?(C.copy(L.normals[Q]).multiplyScalar(P.x),R.copy(L.binormals[Q]).multiplyScalar(P.y),E.copy(y[Q]).add(C).add(R),le(E.x,E.y,E.z)):le(P.x,P.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const re=Q/m,P=f*Math.cos(re*Math.PI/2),Ee=g*Math.sin(re*Math.PI/2)+v;for(let te=0,xe=V.length;te<xe;te++){const ce=W(V[te],j[te],Ee);le(ce.x,ce.y,u+P)}for(let te=0,xe=T.length;te<xe;te++){const ce=T[te];de=ie[te];for(let De=0,ge=ce.length;De<ge;De++){const A=W(ce[De],de[De],Ee);_?le(A.x,A.y+y[h-1].y,y[h-1].x+P):le(A.x,A.y,u+P)}}}J(),ae();function J(){const Q=i.length/3;if(d){let re=0,P=D*re;for(let Ee=0;Ee<H;Ee++){const te=F[Ee];Ae(te[2]+P,te[1]+P,te[0]+P)}re=h+m*2,P=D*re;for(let Ee=0;Ee<H;Ee++){const te=F[Ee];Ae(te[0]+P,te[1]+P,te[2]+P)}}else{for(let re=0;re<H;re++){const P=F[re];Ae(P[2],P[1],P[0])}for(let re=0;re<H;re++){const P=F[re];Ae(P[0]+D*h,P[1]+D*h,P[2]+D*h)}}n.addGroup(Q,i.length/3-Q,0)}function ae(){const Q=i.length/3;let re=0;we(V,re),re+=V.length;for(let P=0,Ee=T.length;P<Ee;P++){const te=T[P];we(te,re),re+=te.length}n.addGroup(Q,i.length/3-Q,1)}function we(Q,re){let P=Q.length;for(;--P>=0;){const Ee=P;let te=P-1;te<0&&(te=Q.length-1);for(let xe=0,ce=h+m*2;xe<ce;xe++){const De=D*xe,ge=D*(xe+1),A=re+Ee+De,S=re+te+De,G=re+te+ge,$=re+Ee+ge;ze(A,S,G,$)}}}function le(Q,re,P){c.push(Q),c.push(re),c.push(P)}function Ae(Q,re,P){Ne(Q),Ne(re),Ne(P);const Ee=i.length/3,te=M.generateTopUV(n,i,Ee-3,Ee-2,Ee-1);et(te[0]),et(te[1]),et(te[2])}function ze(Q,re,P,Ee){Ne(Q),Ne(re),Ne(Ee),Ne(re),Ne(P),Ne(Ee);const te=i.length/3,xe=M.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);et(xe[0]),et(xe[1]),et(xe[3]),et(xe[1]),et(xe[2]),et(xe[3])}function Ne(Q){i.push(c[Q*3+0]),i.push(c[Q*3+1]),i.push(c[Q*3+2])}function et(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new lc[i.type]().fromJSON(i)),new zc(n,e.options)}}const bp={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new oe(r,a),new oe(o,c),new oe(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new oe(a,1-c),new oe(l,1-u),new oe(d,1-g),new oe(v,1-p)]:[new oe(o,1-c),new oe(h,1-u),new oe(f,1-g),new oe(m,1-p)]}};function wp(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Cs extends wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let y=0;y<l;y++){const _=y*u-r;g.push(_,-M,0),v.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const y=M+l*p,_=M+l*(p+1),L=M+1+l*(p+1),R=M+1+l*p;f.push(y,_,R),f.push(_,L,R)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}class fr extends wt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new I,g=new oe;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const M=p+m,y=M,_=M+n+1,L=M+n+2,R=M+1;o.push(y,_,R),o.push(_,L,R)}}this.setIndex(o),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nn extends wt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],y=p/n;let _=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){const R=L/t;u.x=-e*Math.cos(i+R*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+R*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+_,1-y),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const y=h[p][M+1],_=h[p][M],L=h[p+1][M],R=h[p+1][M+1];(p!==0||a>0)&&f.push(y,_,R),(p!==n-1||c<Math.PI)&&f.push(_,L,R)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mr extends wt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;a.push(v,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ct extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends Ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tp extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ep extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function qr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ap(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Rp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yl(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Ru(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class gr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cp extends gr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:al,endingEnd:al}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ol:r=e,o=2*t-n;break;case cl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ol:a=e,c=2*n-t;break;case cl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+M*a[l+L]+y*a[c+L]+_*a[u+L];return r}}class Pp extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class Lp extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class On{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qr(t,this.TimeBufferType),this.values=qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qr(e.times,Array),values:qr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case or:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case La:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Ap(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===La,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=cr;class Ps extends On{constructor(e,t,n){super(e,t,n)}}Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=or;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Cu extends On{}Cu.prototype.ValueTypeName="color";class Ts extends On{}Ts.prototype.ValueTypeName="number";class Ip extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)pn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Es extends On{InterpolantFactoryMethodLinear(e){return new Ip(this.times,this.values,this.getValueSize(),e)}}Es.prototype.ValueTypeName="quaternion";Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends On{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=or;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends On{}As.prototype.ValueTypeName="vector";class Dp{constructor(e="",t=-1,n=[],i=Nd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Up(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Rp(c);c=Yl(c,1,h),l=Yl(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ts(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];Ru(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const y=d[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new Ts(".morphTargetInfluence["+v+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(As,f+".position",d,"pos",i),n(Es,f+".quaternion",d,"rot",i),n(As,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Np(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ts;case"vector":case"vector2":case"vector3":case"vector4":return As;case"color":return Cu;case"quaternion":return Es;case"bool":case"boolean":return Ps;case"string":return Ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Up(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Np(s.type);if(s.times===void 0){const t=[],n=[];Ru(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const mi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Fp{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Op=new Fp;class Is{constructor(e){this.manager=e!==void 0?e:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class kp extends Error{constructor(e,t){super(e),this.response=t}}class Pu extends Is{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=mi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:i});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Wn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{v+=_.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let R=0,C=h.length;R<C;R++){const E=h[R];E.onProgress&&E.onProgress(L)}p.enqueue(_),M()}},y=>{p.error(y)})}}});return new Response(m)}else throw new kp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{mi.add(e,l);const h=Wn[e];delete Wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Wn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Bp extends Is{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=lr("img");function c(){h(),mi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class zp extends Is{constructor(e){super(e)}load(e,t,n,i){const r=new Pt,a=new Bp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ea extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hp extends Ea{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const so=new Ge,jl=new I,$l=new I;class Hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(jl),$l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($l),t.updateMatrixWorld(),so.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vp extends Hc{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Gp extends Ea{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Vp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Kl=new Ge,Vs=new I,ro=new I;class Wp extends Hc{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vs),ro.copy(n.position),ro.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ro),n.updateMatrixWorld(),i.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl)}}class Lu extends Ea{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vc extends du{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xp extends Hc{constructor(){super(new Vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Iu extends Ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Xp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qp extends Is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return mi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),mi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});mi.add(e,c),r.manager.itemStart(e)}}class Yp extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Gc="\\[\\]\\.:\\/",jp=new RegExp("["+Gc+"]","g"),Wc="[^"+Gc+"]",$p="[^"+Gc.replace("\\.","")+"]",Kp=/((?:WC+[\/:])*)/.source.replace("WC",Wc),Jp=/(WCOD+)?/.source.replace("WCOD",$p),Zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),Qp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),em=new RegExp("^"+Kp+Jp+Zp+Qp+"$"),tm=["material","materials","bones","map"];class nm{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jp,"")}static parseTrackName(e){const t=em.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);tm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=nm;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Jl(s,e,t,n){const i=im(n);switch(t){case $h:return s*e;case Jh:return s*e;case Zh:return s*e*2;case Tc:return s*e/i.components*i.byteLength;case Ec:return s*e/i.components*i.byteLength;case Qh:return s*e*2/i.components*i.byteLength;case Ac:return s*e*2/i.components*i.byteLength;case Kh:return s*e*3/i.components*i.byteLength;case dn:return s*e*4/i.components*i.byteLength;case Rc:return s*e*4/i.components*i.byteLength;case na:case ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case No:case Fo:return Math.max(s,16)*Math.max(e,8)/4;case Do:case Uo:return Math.max(s,8)*Math.max(e,8)/2;case Oo:case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Go:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $o:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case aa:case ec:case tc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case eu:case nc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ic:case sc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function im(s){switch(s){case ii:case qh:return{byteLength:1,components:1};case ar:case Yh:case pr:return{byteLength:2,components:1};case bc:case wc:return{byteLength:2,components:4};case ki:case Sc:case bn:return{byteLength:4,components:1};case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Du(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sm(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
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
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,xm=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rm=`#define PI 3.141592653589793
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
} // validated`,Cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pm=`vec3 transformedNormal = objectNormal;
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
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Om=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
#endif`,i0=`struct PhysicalMaterial {
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
}`,s0=`
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p0=`#if defined( USE_POINTS_UV )
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
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,M0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G0=`float getShadowMask() {
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
}`,W0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
}`,dg=`#define DISTANCE
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
}`,fg=`#define DISTANCE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,vg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define LAMBERT
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
}`,Sg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,wg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,Eg=`#define PHONG
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define TOON
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
}`,Lg=`#define TOON
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
}`,Ig=`uniform float size;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Fg=`uniform float rotation;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:rm,alphahash_pars_fragment:am,alphamap_fragment:om,alphamap_pars_fragment:cm,alphatest_fragment:lm,alphatest_pars_fragment:hm,aomap_fragment:um,aomap_pars_fragment:dm,batching_pars_vertex:fm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:vm,iridescence_fragment:_m,bumpmap_pars_fragment:xm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:bm,color_fragment:wm,color_pars_fragment:Tm,color_pars_vertex:Em,color_vertex:Am,common:Rm,cube_uv_reflection_fragment:Cm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Lm,displacementmap_vertex:Im,emissivemap_fragment:Dm,emissivemap_pars_fragment:Nm,colorspace_fragment:Um,colorspace_pars_fragment:Fm,envmap_fragment:Om,envmap_common_pars_fragment:km,envmap_pars_fragment:Bm,envmap_pars_vertex:zm,envmap_physical_pars_fragment:Jm,envmap_vertex:Hm,fog_vertex:Vm,fog_pars_vertex:Gm,fog_fragment:Wm,fog_pars_fragment:Xm,gradientmap_pars_fragment:qm,lightmap_pars_fragment:Ym,lights_lambert_fragment:jm,lights_lambert_pars_fragment:$m,lights_pars_begin:Km,lights_toon_fragment:Zm,lights_toon_pars_fragment:Qm,lights_phong_fragment:e0,lights_phong_pars_fragment:t0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:a0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:d0,map_particle_fragment:f0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphinstance_vertex:v0,morphcolor_vertex:_0,morphnormal_vertex:x0,morphtarget_pars_vertex:y0,morphtarget_vertex:M0,normal_fragment_begin:S0,normal_fragment_maps:b0,normal_pars_fragment:w0,normal_pars_vertex:T0,normal_vertex:E0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:L0,opaque_fragment:I0,packing:D0,premultiplied_alpha_fragment:N0,project_vertex:U0,dithering_fragment:F0,dithering_pars_fragment:O0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:H0,shadowmap_vertex:V0,shadowmask_pars_fragment:G0,skinbase_vertex:W0,skinning_pars_vertex:X0,skinning_vertex:q0,skinnormal_vertex:Y0,specularmap_fragment:j0,specularmap_pars_fragment:$0,tonemapping_fragment:K0,tonemapping_pars_fragment:J0,transmission_fragment:Z0,transmission_pars_fragment:Q0,uv_pars_fragment:eg,uv_pars_vertex:tg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:ag,backgroundCube_frag:og,cube_vert:cg,cube_frag:lg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:dg,distanceRGBA_frag:fg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:vg,meshbasic_vert:_g,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:Mg,meshmatcap_vert:Sg,meshmatcap_frag:bg,meshnormal_vert:wg,meshnormal_frag:Tg,meshphong_vert:Eg,meshphong_frag:Ag,meshphysical_vert:Rg,meshphysical_frag:Cg,meshtoon_vert:Pg,meshtoon_frag:Lg,points_vert:Ig,points_frag:Dg,shadow_vert:Ng,shadow_frag:Ug,sprite_vert:Fg,sprite_frag:Og},he={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},An={basic:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:jt([he.points,he.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:jt([he.common,he.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:jt([he.sprite,he.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:jt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:jt([he.lights,he.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};An.physical={uniforms:jt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Yr={r:0,b:0,g:0},Ei=new In,kg=new Ge;function Bg(s,e,t,n,i,r,a){const o=new Ce(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const L=g(y);L===null?p(o,c):L&&L.isColor&&(p(L,1),_=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,_){const L=g(_);L&&(L.isCubeTexture||L.mapping===Sa)?(h===void 0&&(h=new Ue(new yt(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:ws(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ei.copy(_.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Ei)),h.material.toneMapped=Qe.getTransfer(L.colorSpace)!==dt,(u!==L||d!==L.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Ue(new Cs(2,2),new Dn({name:"BackgroundMaterial",uniforms:ws(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(L.colorSpace)!==dt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=L,d=L.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(Yr,uu(s)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,_,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:v,addToRenderList:m,dispose:M}}function zg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(x,T,z,F,V){let W=!1;const D=u(F,z,T);r!==D&&(r=D,l(r.object)),W=f(x,F,z,V),W&&g(x,F,z,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(x,T,z,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,T,z){const F=z.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let W=V[T.id];W===void 0&&(W={},V[T.id]=W);let D=W[F];return D===void 0&&(D=d(c()),W[F]=D),D}function d(x){const T=[],z=[],F=[];for(let V=0;V<t;V++)T[V]=0,z[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,T,z,F){const V=r.attributes,W=T.attributes;let D=0;const H=z.getAttributes();for(const U in H)if(H[U].location>=0){const ie=V[U];let de=W[U];if(de===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(de=x.instanceColor)),ie===void 0||ie.attribute!==de||de&&ie.data!==de.data)return!0;D++}return r.attributesNum!==D||r.index!==F}function g(x,T,z,F){const V={},W=T.attributes;let D=0;const H=z.getAttributes();for(const U in H)if(H[U].location>=0){let ie=W[U];ie===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor));const de={};de.attribute=ie,ie&&ie.data&&(de.data=ie.data),V[U]=de,D++}r.attributes=V,r.attributesNum=D,r.index=F}function v(){const x=r.newAttributes;for(let T=0,z=x.length;T<z;T++)x[T]=0}function m(x){p(x,0)}function p(x,T){const z=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;z[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),V[x]!==T&&(s.vertexAttribDivisor(x,T),V[x]=T)}function M(){const x=r.newAttributes,T=r.enabledAttributes;for(let z=0,F=T.length;z<F;z++)T[z]!==x[z]&&(s.disableVertexAttribArray(z),T[z]=0)}function y(x,T,z,F,V,W,D){D===!0?s.vertexAttribIPointer(x,T,z,V,W):s.vertexAttribPointer(x,T,z,F,V,W)}function _(x,T,z,F){v();const V=F.attributes,W=z.getAttributes(),D=T.defaultAttributeValues;for(const H in W){const U=W[H];if(U.location>=0){let j=V[H];if(j===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(j=x.instanceColor)),j!==void 0){const ie=j.normalized,de=j.itemSize,Be=e.get(j);if(Be===void 0)continue;const rt=Be.buffer,J=Be.type,ae=Be.bytesPerElement,we=J===s.INT||J===s.UNSIGNED_INT||j.gpuType===Sc;if(j.isInterleavedBufferAttribute){const le=j.data,Ae=le.stride,ze=j.offset;if(le.isInstancedInterleavedBuffer){for(let Ne=0;Ne<U.locationSize;Ne++)p(U.location+Ne,le.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ne=0;Ne<U.locationSize;Ne++)m(U.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Ne=0;Ne<U.locationSize;Ne++)y(U.location+Ne,de/U.locationSize,J,ie,Ae*ae,(ze+de/U.locationSize*Ne)*ae,we)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<U.locationSize;le++)p(U.location+le,j.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<U.locationSize;le++)m(U.location+le);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let le=0;le<U.locationSize;le++)y(U.location+le,de/U.locationSize,J,ie,de*ae,de/U.locationSize*le*ae,we)}}else if(D!==void 0){const ie=D[H];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(U.location,ie);break;case 3:s.vertexAttrib3fv(U.location,ie);break;case 4:s.vertexAttrib4fv(U.location,ie);break;default:s.vertexAttrib1fv(U.location,ie)}}}}M()}function L(){E();for(const x in n){const T=n[x];for(const z in T){const F=T[z];for(const V in F)h(F[V].object),delete F[V];delete T[z]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const T=n[x.id];for(const z in T){const F=T[z];for(const V in F)h(F[V].object),delete F[V];delete T[z]}delete n[x.id]}function C(x){for(const T in n){const z=n[T];if(z[x.id]===void 0)continue;const F=z[x.id];for(const V in F)h(F[V].object),delete F[V];delete z[x.id]}}function E(){b(),a=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Hg(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Vg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==dn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const E=C===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ii&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bn&&!E)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:L,maxSamples:R}}function Gg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Pi,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,y=M*4;let _=p.clippingState||null;c.value=_,_=h(g,d,y,f);for(let L=0;L!==y;++L)_[L]=t[L];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)a.copy(u[y]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Wg(s){let e=new WeakMap;function t(a,o){return o===Lo?a.mapping=xs:o===Io&&(a.mapping=ys),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lo||o===Io)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Uf(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ls=4,Zl=[.125,.215,.35,.446,.526,.582],Ui=20,ao=new Vc,Ql=new Ce;let oo=null,co=0,lo=0,ho=!1;const Li=(1+Math.sqrt(5))/2,is=1/Li,eh=[new I(-Li,is,0),new I(Li,is,0),new I(-is,0,Li),new I(is,0,Li),new I(0,Li,-is),new I(0,Li,is),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oo,co,lo),this._renderer.xr.enabled=ho,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:pr,format:dn,colorSpace:Jt,depthBuffer:!1},i=nh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xg(r)),this._blurMaterial=qg(r,e,t)}return i}_compileMaterial(e){const t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,ao)}_sceneToCubeUV(e,t,n,i){const o=new $t(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ql),h.toneMapping=vi,h.autoClear=!1;const f=new Ft({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new Ue(new yt,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Ql),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;jr(i,M*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xs||e.mapping===ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;jr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ao)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eh[(i-r-1)%eh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ue(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const p=[];let M=0;for(let C=0;C<Ui;++C){const E=C/v,b=Math.exp(-E*E/2);p.push(b),C===0?M+=b:C<m&&(M+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[i],L=3*_*(i>y-ls?i-y+ls:0),R=4*(this._cubeSize-_);jr(t,L,R,3*_,2*_),c.setRenderTarget(t),c.render(u,ao)}}function Xg(s){const e=[],t=[],n=[];let i=s;const r=s-ls+1+Zl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-ls?c=Zl[a-s+ls-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,E=R>2?0:-1,b=[C,E,0,C+2/3,E,0,C+2/3,E+1,0,C,E,0,C+2/3,E+1,0,C,E+1,0];M.set(b,v*g*R),y.set(d,m*g*R);const x=[R,R,R,R,R,R];_.set(x,p*g*R)}const L=new wt;L.setAttribute("position",new bt(M,v)),L.setAttribute("uv",new bt(y,m)),L.setAttribute("faceIndex",new bt(_,p)),e.push(L),i>ls&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nh(s,e,t){const n=new Bi(s,e,t);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function qg(s,e,t){const n=new Float32Array(Ui),i=new I(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ih(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function sh(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function Yg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Lo||c===Io,h=c===xs||c===ys;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new th(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new th(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $g(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let y=0,_=M.length;y<_;y+=3){const L=M[y+0],R=M[y+1],C=M[y+2];d.push(L,R,R,C,C,L)}}else if(g!==void 0){const M=g.array;v=g.version;for(let y=0,_=M.length/3-1;y<_;y+=3){const L=y+0,R=y+1,C=y+2;d.push(L,R,R,C,C,L)}}else return;const m=new(su(d)?hu:lu)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Kg(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*v[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zg(s,e,t){const n=new WeakMap,i=new st;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let x=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let L=o.attributes.position.count*_,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*R*4*u),E=new au(C,L,R,u);E.type=bn,E.needsUpdate=!0;const b=_*4;for(let T=0;T<u;T++){const z=p[T],F=M[T],V=y[T],W=L*R*4*T;for(let D=0;D<z.count;D++){const H=D*b;g===!0&&(i.fromBufferAttribute(z,D),C[W+H+0]=i.x,C[W+H+1]=i.y,C[W+H+2]=i.z,C[W+H+3]=0),v===!0&&(i.fromBufferAttribute(F,D),C[W+H+4]=i.x,C[W+H+5]=i.y,C[W+H+6]=i.z,C[W+H+7]=0),m===!0&&(i.fromBufferAttribute(V,D),C[W+H+8]=i.x,C[W+H+9]=i.y,C[W+H+10]=i.z,C[W+H+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new oe(L,R)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Qg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Nu=new Pt,rh=new xu(1,1),Uu=new au,Fu=new xf,Ou=new fu,ah=[],oh=[],ch=new Float32Array(16),lh=new Float32Array(9),hh=new Float32Array(4);function Ds(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ah[i];if(r===void 0&&(r=new Float32Array(i),ah[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Lt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function It(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Aa(s,e){let t=oh[e];t===void 0&&(t=new Int32Array(e),oh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ev(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2fv(this.addr,e),It(t,e)}}function nv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;s.uniform3fv(this.addr,e),It(t,e)}}function iv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4fv(this.addr,e),It(t,e)}}function sv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;hh.set(n),s.uniformMatrix2fv(this.addr,!1,hh),It(t,n)}}function rv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;lh.set(n),s.uniformMatrix3fv(this.addr,!1,lh),It(t,n)}}function av(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;ch.set(n),s.uniformMatrix4fv(this.addr,!1,ch),It(t,n)}}function ov(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2iv(this.addr,e),It(t,e)}}function lv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3iv(this.addr,e),It(t,e)}}function hv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4iv(this.addr,e),It(t,e)}}function uv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function dv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2uiv(this.addr,e),It(t,e)}}function fv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3uiv(this.addr,e),It(t,e)}}function pv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4uiv(this.addr,e),It(t,e)}}function mv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(rh.compareFunction=iu,r=rh):r=Nu,t.setTexture2D(e||r,i)}function gv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fu,i)}function vv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ou,i)}function _v(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uu,i)}function xv(s){switch(s){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return av;case 5124:case 35670:return ov;case 35667:case 35671:return cv;case 35668:case 35672:return lv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return _v}}function yv(s,e){s.uniform1fv(this.addr,e)}function Mv(s,e){const t=Ds(e,this.size,2);s.uniform2fv(this.addr,t)}function Sv(s,e){const t=Ds(e,this.size,3);s.uniform3fv(this.addr,t)}function bv(s,e){const t=Ds(e,this.size,4);s.uniform4fv(this.addr,t)}function wv(s,e){const t=Ds(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Tv(s,e){const t=Ds(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ev(s,e){const t=Ds(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Av(s,e){s.uniform1iv(this.addr,e)}function Rv(s,e){s.uniform2iv(this.addr,e)}function Cv(s,e){s.uniform3iv(this.addr,e)}function Pv(s,e){s.uniform4iv(this.addr,e)}function Lv(s,e){s.uniform1uiv(this.addr,e)}function Iv(s,e){s.uniform2uiv(this.addr,e)}function Dv(s,e){s.uniform3uiv(this.addr,e)}function Nv(s,e){s.uniform4uiv(this.addr,e)}function Uv(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Nu,r[a])}function Fv(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Fu,r[a])}function Ov(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ou,r[a])}function kv(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Uu,r[a])}function Bv(s){switch(s){case 5126:return yv;case 35664:return Mv;case 35665:return Sv;case 35666:return bv;case 35674:return wv;case 35675:return Tv;case 35676:return Ev;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Pv;case 5125:return Lv;case 36294:return Iv;case 36295:return Dv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return kv}}class zv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xv(t.type)}}class Hv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bv(t.type)}}class Vv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function uh(s,e){s.seq.push(e),s.map[e.id]=e}function Gv(s,e,t){const n=s.name,i=n.length;for(uo.lastIndex=0;;){const r=uo.exec(n),a=uo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){uh(t,l===void 0?new zv(o,s,e):new Hv(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Vv(o),uh(t,u)),t=u}}}class ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Gv(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function dh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Wv=37297;let Xv=0;function qv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const fh=new Xe;function Yv(s){Qe._getMatrix(fh,Qe.workingColorSpace,s);const e=`mat3( ${fh.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(s)){case pa:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ph(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+qv(s.getShaderSource(e),a)}else return i}function jv(s,e){const t=Yv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $v(s,e){let t;switch(e){case Ad:t="Linear";break;case Rd:t="Reinhard";break;case Cd:t="Cineon";break;case Gh:t="ACESFilmic";break;case Ld:t="AgX";break;case Id:t="Neutral";break;case Pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new I;function Kv(){Qe.getLuminanceCoefficients($r);const s=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Zv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ks(s){return s!==""}function mh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(s){return s.replace(e_,n_)}const t_=new Map;function n_(s,e){let t=Ye[e];if(t===void 0){const n=t_.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(s){return s.replace(i_,s_)}function s_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _h(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function r_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function a_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xs:case ys:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function c_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case Td:e="ENVMAP_BLENDING_MIX";break;case Ed:e="ENVMAP_BLENDING_ADD";break}return e}function l_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function h_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=r_(t),l=a_(t),h=o_(t),u=c_(t),d=l_(t),f=Jv(t),g=Zv(r),v=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(m=[_h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[_h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==vi?$v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,jv("linearToOutputTexel",t.outputColorSpace),Kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=fc(a),a=mh(a,t),a=gh(a,t),o=fc(o),o=mh(o,t),o=gh(o,t),a=vh(a),o=vh(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+a,_=M+p+o,L=dh(i,i.VERTEX_SHADER,y),R=dh(i,i.FRAGMENT_SHADER,_);i.attachShader(v,L),i.attachShader(v,R),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(T){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(L).trim(),V=i.getShaderInfoLog(R).trim();let W=!0,D=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,R);else{const H=ph(i,L,"vertex"),U=ph(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+H+`
`+U)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||V==="")&&(D=!1);D&&(T.diagnostics={runnable:W,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(L),i.deleteShader(R),E=new ca(i,v),b=Qv(i,v)}let E;this.getUniforms=function(){return E===void 0&&C(this),E};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,Wv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}let u_=0;class d_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new f_(e),t.set(e,n)),n}}class f_{constructor(e){this.id=u_++,this.code=e,this.usedTimes=0}}function p_(s,e,t,n,i,r,a){const o=new ou,c=new d_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,T,z,F){const V=z.fog,W=F.geometry,D=b.isMeshStandardMaterial?z.environment:null,H=(b.isMeshStandardMaterial?t:e).get(b.envMap||D),U=H&&H.mapping===Sa?H.image.height:null,j=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ie=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,de=ie!==void 0?ie.length:0;let Be=0;W.morphAttributes.position!==void 0&&(Be=1),W.morphAttributes.normal!==void 0&&(Be=2),W.morphAttributes.color!==void 0&&(Be=3);let rt,J,ae,we;if(j){const lt=An[j];rt=lt.vertexShader,J=lt.fragmentShader}else rt=b.vertexShader,J=b.fragmentShader,c.update(b),ae=c.getVertexShaderID(b),we=c.getFragmentShaderID(b);const le=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),ze=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,et=!!b.map,Q=!!b.matcap,re=!!H,P=!!b.aoMap,Ee=!!b.lightMap,te=!!b.bumpMap,xe=!!b.normalMap,ce=!!b.displacementMap,De=!!b.emissiveMap,ge=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,G=b.clearcoat>0,$=b.dispersion>0,ee=b.iridescence>0,K=b.sheen>0,Te=b.transmission>0,ue=S&&!!b.anisotropyMap,_e=G&&!!b.clearcoatMap,Ke=G&&!!b.clearcoatNormalMap,se=G&&!!b.clearcoatRoughnessMap,Me=ee&&!!b.iridescenceMap,Le=ee&&!!b.iridescenceThicknessMap,Oe=K&&!!b.sheenColorMap,Se=K&&!!b.sheenRoughnessMap,Ze=!!b.specularMap,qe=!!b.specularColorMap,ft=!!b.specularIntensityMap,O=Te&&!!b.transmissionMap,fe=Te&&!!b.thicknessMap,Y=!!b.gradientMap,Z=!!b.alphaMap,ve=b.alphaTest>0,me=!!b.alphaHash,We=!!b.extensions;let _t=vi;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(_t=s.toneMapping);const zt={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:rt,fragmentShader:J,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:ze,instancingColor:ze&&F.instanceColor!==null,instancingMorph:ze&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Jt,alphaToCoverage:!!b.alphaToCoverage,map:et,matcap:Q,envMap:re,envMapMode:re&&H.mapping,envMapCubeUVHeight:U,aoMap:P,lightMap:Ee,bumpMap:te,normalMap:xe,displacementMap:d&&ce,emissiveMap:De,normalMapObjectSpace:xe&&b.normalMapType===kd,normalMapTangentSpace:xe&&b.normalMapType===nu,metalnessMap:ge,roughnessMap:A,anisotropy:S,anisotropyMap:ue,clearcoat:G,clearcoatMap:_e,clearcoatNormalMap:Ke,clearcoatRoughnessMap:se,dispersion:$,iridescence:ee,iridescenceMap:Me,iridescenceThicknessMap:Le,sheen:K,sheenColorMap:Oe,sheenRoughnessMap:Se,specularMap:Ze,specularColorMap:qe,specularIntensityMap:ft,transmission:Te,transmissionMap:O,thicknessMap:fe,gradientMap:Y,opaque:b.transparent===!1&&b.blending===fs&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:ve,alphaHash:me,combine:b.combine,mapUv:et&&v(b.map.channel),aoMapUv:P&&v(b.aoMap.channel),lightMapUv:Ee&&v(b.lightMap.channel),bumpMapUv:te&&v(b.bumpMap.channel),normalMapUv:xe&&v(b.normalMap.channel),displacementMapUv:ce&&v(b.displacementMap.channel),emissiveMapUv:De&&v(b.emissiveMap.channel),metalnessMapUv:ge&&v(b.metalnessMap.channel),roughnessMapUv:A&&v(b.roughnessMap.channel),anisotropyMapUv:ue&&v(b.anisotropyMap.channel),clearcoatMapUv:_e&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(b.sheenRoughnessMap.channel),specularMapUv:Ze&&v(b.specularMap.channel),specularColorMapUv:qe&&v(b.specularColorMap.channel),specularIntensityMapUv:ft&&v(b.specularIntensityMap.channel),transmissionMapUv:O&&v(b.transmissionMap.channel),thicknessMapUv:fe&&v(b.thicknessMap.channel),alphaMapUv:Z&&v(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(xe||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(et||Z),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ae,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Be,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:_t,decodeVideoTexture:et&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===dt,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wt,flipSided:b.side===Xt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:We&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&b.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function p(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const T in b.defines)x.push(T),x.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(M(x,b),y(x,b),x.push(s.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function M(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function y(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const x=g[b.type];let T;if(x){const z=An[x];T=Lf.clone(z.uniforms)}else T=b.uniforms;return T}function L(b,x){let T;for(let z=0,F=h.length;z<F;z++){const V=h[z];if(V.cacheKey===x){T=V,++T.usedTimes;break}}return T===void 0&&(T=new h_(s,x,b,r),h.push(T)),T}function R(b){if(--b.usedTimes===0){const x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),b.destroy()}}function C(b){c.remove(b)}function E(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:E}}function m_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function g_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,v,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||g_),n.length>1&&n.sort(d||xh),i.length>1&&i.sort(d||xh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function v_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new yh,s.set(n,[a])):i>=r.length?(a=new yh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function __(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ce};break;case"SpotLight":t={position:new I,direction:new I,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function x_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let y_=0;function M_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function S_(s){const e=new __,t=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new Ge,a=new Ge;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,y=0,_=0,L=0,R=0,C=0;l.sort(M_);for(let b=0,x=l.length;b<x;b++){const T=l[b],z=T.color,F=T.intensity,V=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=z.r*F,u+=z.g*F,d+=z.b*F;else if(T.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(T.sh.coefficients[D],F);C++}else if(T.isDirectionalLight){const D=e.get(T);if(D.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const H=T.shadow,U=t.get(T);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=T.shadow.matrix,M++}n.directional[f]=D,f++}else if(T.isSpotLight){const D=e.get(T);D.position.setFromMatrixPosition(T.matrixWorld),D.color.copy(z).multiplyScalar(F),D.distance=V,D.coneCos=Math.cos(T.angle),D.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),D.decay=T.decay,n.spot[v]=D;const H=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,H.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[v]=H.matrix,T.castShadow){const U=t.get(T);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=W,_++}v++}else if(T.isRectAreaLight){const D=e.get(T);D.color.copy(z).multiplyScalar(F),D.halfWidth.set(T.width*.5,0,0),D.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=D,m++}else if(T.isPointLight){const D=e.get(T);if(D.color.copy(T.color).multiplyScalar(T.intensity),D.distance=T.distance,D.decay=T.decay,T.castShadow){const H=T.shadow,U=t.get(T);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,U.shadowCameraNear=H.camera.near,U.shadowCameraFar=H.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=T.shadow.matrix,y++}n.point[g]=D,g++}else if(T.isHemisphereLight){const D=e.get(T);D.skyColor.copy(T.color).multiplyScalar(F),D.groundColor.copy(T.groundColor).multiplyScalar(F),n.hemi[p]=D,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==v||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==M||E.numPointShadows!==y||E.numSpotShadows!==_||E.numSpotMaps!==L||E.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,E.directionalLength=f,E.pointLength=g,E.spotLength=v,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=M,E.numPointShadows=y,E.numSpotShadows=_,E.numSpotMaps=L,E.numLightProbes=C,n.version=y_++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Mh(s){const e=new S_(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function b_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Mh(s),e.set(i,[o])):r>=a.length?(o=new Mh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const w_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`;function E_(s,e,t){let n=new Dc;const i=new oe,r=new oe,a=new st,o=new Tp({depthPacking:Od}),c=new Ep,l={},h=t.maxTextureSize,u={[ni]:Xt,[Xt]:ni,[Wt]:Wt},d=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:w_,fragmentShader:T_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let p=this.type;this.render=function(R,C,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=s.getRenderTarget(),x=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),z=s.state;z.setBlending(gi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=p!==qn&&this.type===qn,V=p===qn&&this.type!==qn;for(let W=0,D=R.length;W<D;W++){const H=R[W],U=H.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const j=U.getFrameExtents();if(i.multiply(j),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,U.mapSize.y=r.y)),U.map===null||F===!0||V===!0){const de=this.type!==qn?{minFilter:Kt,magFilter:Kt}:{};U.map!==null&&U.map.dispose(),U.map=new Bi(i.x,i.y,de),U.map.texture.name=H.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const ie=U.getViewportCount();for(let de=0;de<ie;de++){const Be=U.getViewport(de);a.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),z.viewport(a),U.updateMatrices(H,de),n=U.getFrustum(),_(C,E,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===qn&&M(U,E),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,x,T)};function M(R,C){const E=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Bi(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,E,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,E,f,v,null)}function y(R,C,E,b){let x=null;const T=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)x=T;else if(x=E.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=x.uuid,F=C.uuid;let V=l[z];V===void 0&&(V={},l[z]=V);let W=V[F];W===void 0&&(W=x.clone(),V[F]=W,C.addEventListener("dispose",L)),x=W}if(x.visible=C.visible,x.wireframe=C.wireframe,b===qn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,E.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=s.properties.get(x);z.light=E}return x}function _(R,C,E,b,x){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===qn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);const F=e.update(R),V=R.material;if(Array.isArray(V)){const W=F.groups;for(let D=0,H=W.length;D<H;D++){const U=W[D],j=V[U.materialIndex];if(j&&j.visible){const ie=y(R,j,b,x);R.onBeforeShadow(s,R,C,E,F,ie,U),s.renderBufferDirect(E,null,F,ie,R,U),R.onAfterShadow(s,R,C,E,F,ie,U)}}}else if(V.visible){const W=y(R,V,b,x);R.onBeforeShadow(s,R,C,E,F,W,null),s.renderBufferDirect(E,null,F,W,R,null),R.onAfterShadow(s,R,C,E,F,W,null)}}const z=R.children;for(let F=0,V=z.length;F<V;F++)_(z[F],C,E,b,x)}function L(R){R.target.removeEventListener("dispose",L);for(const E in l){const b=l[E],x=R.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const A_={[wo]:To,[Eo]:Co,[Ao]:Po,[_s]:Ro,[To]:wo,[Co]:Eo,[Po]:Ao,[Ro]:_s};function R_(s,e){function t(){let O=!1;const fe=new st;let Y=null;const Z=new st(0,0,0,0);return{setMask:function(ve){Y!==ve&&!O&&(s.colorMask(ve,ve,ve,ve),Y=ve)},setLocked:function(ve){O=ve},setClear:function(ve,me,We,_t,zt){zt===!0&&(ve*=_t,me*=_t,We*=_t),fe.set(ve,me,We,_t),Z.equals(fe)===!1&&(s.clearColor(ve,me,We,_t),Z.copy(fe))},reset:function(){O=!1,Y=null,Z.set(-1,0,0,0)}}}function n(){let O=!1,fe=!1,Y=null,Z=null,ve=null;return{setReversed:function(me){if(fe!==me){const We=e.get("EXT_clip_control");fe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const _t=ve;ve=null,this.setClear(_t)}fe=me},getReversed:function(){return fe},setTest:function(me){me?le(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(me){Y!==me&&!O&&(s.depthMask(me),Y=me)},setFunc:function(me){if(fe&&(me=A_[me]),Z!==me){switch(me){case wo:s.depthFunc(s.NEVER);break;case To:s.depthFunc(s.ALWAYS);break;case Eo:s.depthFunc(s.LESS);break;case _s:s.depthFunc(s.LEQUAL);break;case Ao:s.depthFunc(s.EQUAL);break;case Ro:s.depthFunc(s.GEQUAL);break;case Co:s.depthFunc(s.GREATER);break;case Po:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=me}},setLocked:function(me){O=me},setClear:function(me){ve!==me&&(fe&&(me=1-me),s.clearDepth(me),ve=me)},reset:function(){O=!1,Y=null,Z=null,ve=null,fe=!1}}}function i(){let O=!1,fe=null,Y=null,Z=null,ve=null,me=null,We=null,_t=null,zt=null;return{setTest:function(lt){O||(lt?le(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!O&&(s.stencilMask(lt),fe=lt)},setFunc:function(lt,mn,kn){(Y!==lt||Z!==mn||ve!==kn)&&(s.stencilFunc(lt,mn,kn),Y=lt,Z=mn,ve=kn)},setOp:function(lt,mn,kn){(me!==lt||We!==mn||_t!==kn)&&(s.stencilOp(lt,mn,kn),me=lt,We=mn,_t=kn)},setLocked:function(lt){O=lt},setClear:function(lt){zt!==lt&&(s.clearStencil(lt),zt=lt)},reset:function(){O=!1,fe=null,Y=null,Z=null,ve=null,me=null,We=null,_t=null,zt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,y=null,_=null,L=null,R=null,C=new Ce(0,0,0),E=0,b=!1,x=null,T=null,z=null,F=null,V=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,H=0;const U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),D=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),D=H>=2);let j=null,ie={};const de=s.getParameter(s.SCISSOR_BOX),Be=s.getParameter(s.VIEWPORT),rt=new st().fromArray(de),J=new st().fromArray(Be);function ae(O,fe,Y,Z){const ve=new Uint8Array(4),me=s.createTexture();s.bindTexture(O,me),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<Y;We++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(fe,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(fe+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return me}const we={};we[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(s.DEPTH_TEST),a.setFunc(_s),te(!1),xe(nl),le(s.CULL_FACE),P(gi);function le(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Ae(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function ze(O,fe){return u[O]!==fe?(s.bindFramebuffer(O,fe),u[O]=fe,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=fe),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ne(O,fe){let Y=f,Z=!1;if(O){Y=d.get(fe),Y===void 0&&(Y=[],d.set(fe,Y));const ve=O.textures;if(Y.length!==ve.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let me=0,We=ve.length;me<We;me++)Y[me]=s.COLOR_ATTACHMENT0+me;Y.length=ve.length,Z=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,Z=!0);Z&&s.drawBuffers(Y)}function et(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const Q={[Ni]:s.FUNC_ADD,[cd]:s.FUNC_SUBTRACT,[ld]:s.FUNC_REVERSE_SUBTRACT};Q[hd]=s.MIN,Q[ud]=s.MAX;const re={[dd]:s.ZERO,[fd]:s.ONE,[pd]:s.SRC_COLOR,[So]:s.SRC_ALPHA,[yd]:s.SRC_ALPHA_SATURATE,[_d]:s.DST_COLOR,[gd]:s.DST_ALPHA,[md]:s.ONE_MINUS_SRC_COLOR,[bo]:s.ONE_MINUS_SRC_ALPHA,[xd]:s.ONE_MINUS_DST_COLOR,[vd]:s.ONE_MINUS_DST_ALPHA,[Md]:s.CONSTANT_COLOR,[Sd]:s.ONE_MINUS_CONSTANT_COLOR,[bd]:s.CONSTANT_ALPHA,[wd]:s.ONE_MINUS_CONSTANT_ALPHA};function P(O,fe,Y,Z,ve,me,We,_t,zt,lt){if(O===gi){v===!0&&(Ae(s.BLEND),v=!1);return}if(v===!1&&(le(s.BLEND),v=!0),O!==od){if(O!==m||lt!==b){if((p!==Ni||_!==Ni)&&(s.blendEquation(s.FUNC_ADD),p=Ni,_=Ni),lt)switch(O){case fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pn:s.blendFunc(s.ONE,s.ONE);break;case il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,y=null,L=null,R=null,C.set(0,0,0),E=0,m=O,b=lt}return}ve=ve||fe,me=me||Y,We=We||Z,(fe!==p||ve!==_)&&(s.blendEquationSeparate(Q[fe],Q[ve]),p=fe,_=ve),(Y!==M||Z!==y||me!==L||We!==R)&&(s.blendFuncSeparate(re[Y],re[Z],re[me],re[We]),M=Y,y=Z,L=me,R=We),(_t.equals(C)===!1||zt!==E)&&(s.blendColor(_t.r,_t.g,_t.b,zt),C.copy(_t),E=zt),m=O,b=!1}function Ee(O,fe){O.side===Wt?Ae(s.CULL_FACE):le(s.CULL_FACE);let Y=O.side===Xt;fe&&(Y=!Y),te(Y),O.blending===fs&&O.transparent===!1?P(gi):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Z=O.stencilWrite;o.setTest(Z),Z&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),De(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(O){x!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),x=O)}function xe(O){O!==sd?(le(s.CULL_FACE),O!==T&&(O===nl?s.cullFace(s.BACK):O===rd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),T=O}function ce(O){O!==z&&(D&&s.lineWidth(O),z=O)}function De(O,fe,Y){O?(le(s.POLYGON_OFFSET_FILL),(F!==fe||V!==Y)&&(s.polygonOffset(fe,Y),F=fe,V=Y)):Ae(s.POLYGON_OFFSET_FILL)}function ge(O){O?le(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function A(O){O===void 0&&(O=s.TEXTURE0+W-1),j!==O&&(s.activeTexture(O),j=O)}function S(O,fe,Y){Y===void 0&&(j===null?Y=s.TEXTURE0+W-1:Y=j);let Z=ie[Y];Z===void 0&&(Z={type:void 0,texture:void 0},ie[Y]=Z),(Z.type!==O||Z.texture!==fe)&&(j!==Y&&(s.activeTexture(Y),j=Y),s.bindTexture(O,fe||we[O]),Z.type=O,Z.texture=fe)}function G(){const O=ie[j];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(O){rt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),rt.copy(O))}function Se(O){J.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),J.copy(O))}function Ze(O,fe){let Y=l.get(fe);Y===void 0&&(Y=new WeakMap,l.set(fe,Y));let Z=Y.get(O);Z===void 0&&(Z=s.getUniformBlockIndex(fe,O.name),Y.set(O,Z))}function qe(O,fe){const Z=l.get(fe).get(O);c.get(fe)!==Z&&(s.uniformBlockBinding(fe,Z,O.__bindingPointIndex),c.set(fe,Z))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},j=null,ie={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,y=null,_=null,L=null,R=null,C=new Ce(0,0,0),E=0,b=!1,x=null,T=null,z=null,F=null,V=null,rt.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Ae,bindFramebuffer:ze,drawBuffers:Ne,useProgram:et,setBlending:P,setMaterial:Ee,setFlipSided:te,setCullFace:xe,setLineWidth:ce,setPolygonOffset:De,setScissorTest:ge,activeTexture:A,bindTexture:S,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:Me,texImage3D:Le,updateUBOMapping:Ze,uniformBlockBinding:qe,texStorage2D:Ke,texStorage3D:se,texSubImage2D:K,texSubImage3D:Te,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:Oe,viewport:Se,reset:ft}}function C_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):lr("canvas")}function v(A,S,G){let $=1;const ee=ge(A);if((ee.width>G||ee.height>G)&&($=G/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor($*ee.width),Te=Math.floor($*ee.height);u===void 0&&(u=g(K,Te));const ue=S?g(K,Te):u;return ue.width=K,ue.height=Te,ue.getContext("2d").drawImage(A,0,0,K,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Te+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,S,G,$,ee=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=S;if(S===s.RED&&(G===s.FLOAT&&(K=s.R32F),G===s.HALF_FLOAT&&(K=s.R16F),G===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.R8UI),G===s.UNSIGNED_SHORT&&(K=s.R16UI),G===s.UNSIGNED_INT&&(K=s.R32UI),G===s.BYTE&&(K=s.R8I),G===s.SHORT&&(K=s.R16I),G===s.INT&&(K=s.R32I)),S===s.RG&&(G===s.FLOAT&&(K=s.RG32F),G===s.HALF_FLOAT&&(K=s.RG16F),G===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RG8UI),G===s.UNSIGNED_SHORT&&(K=s.RG16UI),G===s.UNSIGNED_INT&&(K=s.RG32UI),G===s.BYTE&&(K=s.RG8I),G===s.SHORT&&(K=s.RG16I),G===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGB8UI),G===s.UNSIGNED_SHORT&&(K=s.RGB16UI),G===s.UNSIGNED_INT&&(K=s.RGB32UI),G===s.BYTE&&(K=s.RGB8I),G===s.SHORT&&(K=s.RGB16I),G===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),G===s.UNSIGNED_INT&&(K=s.RGBA32UI),G===s.BYTE&&(K=s.RGBA8I),G===s.SHORT&&(K=s.RGBA16I),G===s.INT&&(K=s.RGBA32I)),S===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){const Te=ee?pa:Qe.getTransfer($);G===s.FLOAT&&(K=s.RGBA32F),G===s.HALF_FLOAT&&(K=s.RGBA16F),G===s.UNSIGNED_BYTE&&(K=Te===dt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(A,S){let G;return A?S===null||S===ki||S===Ms?G=s.DEPTH24_STENCIL8:S===bn?G=s.DEPTH32F_STENCIL8:S===ar&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===Ms?G=s.DEPTH_COMPONENT24:S===bn?G=s.DEPTH_COMPONENT32F:S===ar&&(G=s.DEPTH_COMPONENT16),G}function L(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Kt&&A.minFilter!==sn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){const S=A.target;S.removeEventListener("dispose",R),E(S),S.isVideoTexture&&h.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),x(S)}function E(A){const S=n.get(A);if(S.__webglInit===void 0)return;const G=A.source,$=d.get(G);if($){const ee=$[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(A),Object.keys($).length===0&&d.delete(G)}n.remove(A)}function b(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const G=A.source,$=d.get(G);delete $[S.__cacheKey],a.memory.textures--}function x(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ee=0;ee<S.__webglFramebuffer[$].length;ee++)s.deleteFramebuffer(S.__webglFramebuffer[$][ee]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=A.textures;for(let $=0,ee=G.length;$<ee;$++){const K=n.get(G[$]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(G[$])}n.remove(A)}let T=0;function z(){T=0}function F(){const A=T;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),T+=1,A}function V(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function W(A,S){const G=n.get(A);if(A.isVideoTexture&&ce(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,A,S);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function D(A,S){const G=n.get(A);if(A.version>0&&G.__version!==A.version){J(G,A,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function H(A,S){const G=n.get(A);if(A.version>0&&G.__version!==A.version){J(G,A,S);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function U(A,S){const G=n.get(A);if(A.version>0&&G.__version!==A.version){ae(G,A,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}const j={[Oi]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},ie={[Kt]:s.NEAREST,[Xh]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[ta]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},de={[Bd]:s.NEVER,[Xd]:s.ALWAYS,[zd]:s.LESS,[iu]:s.LEQUAL,[Hd]:s.EQUAL,[Wd]:s.GEQUAL,[Vd]:s.GREATER,[Gd]:s.NOTEQUAL};function Be(A,S){if(S.type===bn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===sn||S.magFilter===ta||S.magFilter===$s||S.magFilter===Kn||S.minFilter===sn||S.minFilter===ta||S.minFilter===$s||S.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,j[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,j[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,j[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ie[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Kt||S.minFilter!==$s&&S.minFilter!==Kn||S.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function rt(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const $=S.source;let ee=d.get($);ee===void 0&&(ee={},d.set($,ee));const K=V(S);if(K!==A.__cacheKey){ee[K]===void 0&&(ee[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[K].usedTimes++;const Te=ee[A.__cacheKey];Te!==void 0&&(ee[A.__cacheKey].usedTimes--,Te.usedTimes===0&&b(S)),A.__cacheKey=K,A.__webglTexture=ee[K].texture}return G}function J(A,S,G){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);const ee=rt(A,S),K=S.source;t.bindTexture($,A.__webglTexture,s.TEXTURE0+G);const Te=n.get(K);if(K.version!==Te.__version||ee===!0){t.activeTexture(s.TEXTURE0+G);const ue=Qe.getPrimaries(Qe.workingColorSpace),_e=S.colorSpace===fi?null:Qe.getPrimaries(S.colorSpace),Ke=S.colorSpace===fi||ue===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let se=v(S.image,!1,i.maxTextureSize);se=De(S,se);const Me=r.convert(S.format,S.colorSpace),Le=r.convert(S.type);let Oe=y(S.internalFormat,Me,Le,S.colorSpace,S.isVideoTexture);Be($,S);let Se;const Ze=S.mipmaps,qe=S.isVideoTexture!==!0,ft=Te.__version===void 0||ee===!0,O=K.dataReady,fe=L(S,se);if(S.isDepthTexture)Oe=_(S.format===Ss,S.type),ft&&(qe?t.texStorage2D(s.TEXTURE_2D,1,Oe,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Oe,se.width,se.height,0,Me,Le,null));else if(S.isDataTexture)if(Ze.length>0){qe&&ft&&t.texStorage2D(s.TEXTURE_2D,fe,Oe,Ze[0].width,Ze[0].height);for(let Y=0,Z=Ze.length;Y<Z;Y++)Se=Ze[Y],qe?O&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Se.width,Se.height,Me,Le,Se.data):t.texImage2D(s.TEXTURE_2D,Y,Oe,Se.width,Se.height,0,Me,Le,Se.data);S.generateMipmaps=!1}else qe?(ft&&t.texStorage2D(s.TEXTURE_2D,fe,Oe,se.width,se.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,Me,Le,se.data)):t.texImage2D(s.TEXTURE_2D,0,Oe,se.width,se.height,0,Me,Le,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Oe,Ze[0].width,Ze[0].height,se.depth);for(let Y=0,Z=Ze.length;Y<Z;Y++)if(Se=Ze[Y],S.format!==dn)if(Me!==null)if(qe){if(O)if(S.layerUpdates.size>0){const ve=Jl(Se.width,Se.height,S.format,S.type);for(const me of S.layerUpdates){const We=Se.data.subarray(me*ve/Se.data.BYTES_PER_ELEMENT,(me+1)*ve/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,me,Se.width,Se.height,1,Me,We)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Se.width,Se.height,se.depth,Me,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Oe,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Se.width,Se.height,se.depth,Me,Le,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Oe,Se.width,Se.height,se.depth,0,Me,Le,Se.data)}else{qe&&ft&&t.texStorage2D(s.TEXTURE_2D,fe,Oe,Ze[0].width,Ze[0].height);for(let Y=0,Z=Ze.length;Y<Z;Y++)Se=Ze[Y],S.format!==dn?Me!==null?qe?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Oe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Se.width,Se.height,Me,Le,Se.data):t.texImage2D(s.TEXTURE_2D,Y,Oe,Se.width,Se.height,0,Me,Le,Se.data)}else if(S.isDataArrayTexture)if(qe){if(ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Oe,se.width,se.height,se.depth),O)if(S.layerUpdates.size>0){const Y=Jl(se.width,se.height,S.format,S.type);for(const Z of S.layerUpdates){const ve=se.data.subarray(Z*Y/se.data.BYTES_PER_ELEMENT,(Z+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,Me,Le,ve)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,Le,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,se.width,se.height,se.depth,0,Me,Le,se.data);else if(S.isData3DTexture)qe?(ft&&t.texStorage3D(s.TEXTURE_3D,fe,Oe,se.width,se.height,se.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,Le,se.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,se.width,se.height,se.depth,0,Me,Le,se.data);else if(S.isFramebufferTexture){if(ft)if(qe)t.texStorage2D(s.TEXTURE_2D,fe,Oe,se.width,se.height);else{let Y=se.width,Z=se.height;for(let ve=0;ve<fe;ve++)t.texImage2D(s.TEXTURE_2D,ve,Oe,Y,Z,0,Me,Le,null),Y>>=1,Z>>=1}}else if(Ze.length>0){if(qe&&ft){const Y=ge(Ze[0]);t.texStorage2D(s.TEXTURE_2D,fe,Oe,Y.width,Y.height)}for(let Y=0,Z=Ze.length;Y<Z;Y++)Se=Ze[Y],qe?O&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Me,Le,Se):t.texImage2D(s.TEXTURE_2D,Y,Oe,Me,Le,Se);S.generateMipmaps=!1}else if(qe){if(ft){const Y=ge(se);t.texStorage2D(s.TEXTURE_2D,fe,Oe,Y.width,Y.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Le,se)}else t.texImage2D(s.TEXTURE_2D,0,Oe,Me,Le,se);m(S)&&p($),Te.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ae(A,S,G){if(S.image.length!==6)return;const $=rt(A,S),ee=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+G);const K=n.get(ee);if(ee.version!==K.__version||$===!0){t.activeTexture(s.TEXTURE0+G);const Te=Qe.getPrimaries(Qe.workingColorSpace),ue=S.colorSpace===fi?null:Qe.getPrimaries(S.colorSpace),_e=S.colorSpace===fi||Te===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ke=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let Z=0;Z<6;Z++)!Ke&&!se?Me[Z]=v(S.image[Z],!0,i.maxCubemapSize):Me[Z]=se?S.image[Z].image:S.image[Z],Me[Z]=De(S,Me[Z]);const Le=Me[0],Oe=r.convert(S.format,S.colorSpace),Se=r.convert(S.type),Ze=y(S.internalFormat,Oe,Se,S.colorSpace),qe=S.isVideoTexture!==!0,ft=K.__version===void 0||$===!0,O=ee.dataReady;let fe=L(S,Le);Be(s.TEXTURE_CUBE_MAP,S);let Y;if(Ke){qe&&ft&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Ze,Le.width,Le.height);for(let Z=0;Z<6;Z++){Y=Me[Z].mipmaps;for(let ve=0;ve<Y.length;ve++){const me=Y[ve];S.format!==dn?Oe!==null?qe?O&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,me.width,me.height,Oe,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Ze,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,me.width,me.height,Oe,Se,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Ze,me.width,me.height,0,Oe,Se,me.data)}}}else{if(Y=S.mipmaps,qe&&ft){Y.length>0&&fe++;const Z=ge(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){qe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me[Z].width,Me[Z].height,Oe,Se,Me[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,Me[Z].width,Me[Z].height,0,Oe,Se,Me[Z].data);for(let ve=0;ve<Y.length;ve++){const We=Y[ve].image[Z].image;qe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,We.width,We.height,Oe,Se,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Ze,We.width,We.height,0,Oe,Se,We.data)}}else{qe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Oe,Se,Me[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,Oe,Se,Me[Z]);for(let ve=0;ve<Y.length;ve++){const me=Y[ve];qe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,Oe,Se,me.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Ze,Oe,Se,me.image[Z])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),K.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function we(A,S,G,$,ee,K){const Te=r.convert(G.format,G.colorSpace),ue=r.convert(G.type),_e=y(G.internalFormat,Te,ue,G.colorSpace),Ke=n.get(S),se=n.get(G);if(se.__renderTarget=S,!Ke.__hasExternalTextures){const Me=Math.max(1,S.width>>K),Le=Math.max(1,S.height>>K);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,_e,Me,Le,S.depth,0,Te,ue,null):t.texImage2D(ee,K,_e,Me,Le,0,Te,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),xe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,ee,se.__webglTexture,0,te(S)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,ee,se.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(A,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,ee=$&&$.isDepthTexture?$.type:null,K=_(S.stencilBuffer,ee),Te=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=te(S);xe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,K,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,A)}else{const $=S.textures;for(let ee=0;ee<$.length;ee++){const K=$[ee],Te=r.convert(K.format,K.colorSpace),ue=r.convert(K.type),_e=y(K.internalFormat,Te,ue,K.colorSpace),Ke=te(S);G&&xe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,_e,S.width,S.height):xe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,_e,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_e,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const ee=$.__webglTexture,K=te(S);if(S.depthTexture.format===ps)xe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Ss)xe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ze(A){const S=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ae(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),le(S.__webglDepthbuffer[$],A,!1);else{const ee=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),le(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(A,S,G){const $=n.get(A);S!==void 0&&we($.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ze(A)}function et(A){const S=A.texture,G=n.get(A),$=n.get(S);A.addEventListener("dispose",C);const ee=A.textures,K=A.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,a.memory.textures++),K){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let _e=0;_e<S.mipmaps.length;_e++)G.__webglFramebuffer[ue][_e]=s.createFramebuffer()}else G.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)G.__webglFramebuffer[ue]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Te)for(let ue=0,_e=ee.length;ue<_e;ue++){const Ke=n.get(ee[ue]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&xe(A)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const _e=ee[ue];G.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const Ke=r.convert(_e.format,_e.colorSpace),se=r.convert(_e.type),Me=y(_e.internalFormat,Ke,se,_e.colorSpace,A.isXRRenderTarget===!0),Le=te(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Me,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),le(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Be(s.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)we(G.__webglFramebuffer[ue][_e],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,_e);else we(G.__webglFramebuffer[ue],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ue=0,_e=ee.length;ue<_e;ue++){const Ke=ee[ue],se=n.get(Ke);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),Be(s.TEXTURE_2D,Ke),we(G.__webglFramebuffer,A,Ke,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),m(Ke)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,$.__webglTexture),Be(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)we(G.__webglFramebuffer[_e],A,S,s.COLOR_ATTACHMENT0,ue,_e);else we(G.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,ue,0);m(S)&&p(ue),t.unbindTexture()}A.depthBuffer&&ze(A)}function Q(A){const S=A.textures;for(let G=0,$=S.length;G<$;G++){const ee=S[G];if(m(ee)){const K=M(A),Te=n.get(ee).__webglTexture;t.bindTexture(K,Te),p(K),t.unbindTexture()}}}const re=[],P=[];function Ee(A){if(A.samples>0){if(xe(A)===!1){const S=A.textures,G=A.width,$=A.height;let ee=s.COLOR_BUFFER_BIT;const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(A),ue=S.length>1;if(ue)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const Ke=n.get(S[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,G,$,0,0,G,$,ee,s.NEAREST),c===!0&&(re.length=0,P.length=0,re.push(s.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(re.push(K),P.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const Ke=n.get(S[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function te(A){return Math.min(i.maxSamples,A.samples)}function xe(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ce(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function De(A,S){const G=A.colorSpace,$=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Jt&&G!==fi&&(Qe.getTransfer(G)===dt?($!==dn||ee!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function ge(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=D,this.setTexture3D=H,this.setTextureCube=U,this.rebindTextures=Ne,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=we,this.useMultisampledRTT=xe}function P_(s,e){function t(n,i=fi){let r;const a=Qe.getTransfer(i);if(n===ii)return s.UNSIGNED_BYTE;if(n===bc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return s.BYTE;if(n===Yh)return s.SHORT;if(n===ar)return s.UNSIGNED_SHORT;if(n===Sc)return s.INT;if(n===ki)return s.UNSIGNED_INT;if(n===bn)return s.FLOAT;if(n===pr)return s.HALF_FLOAT;if(n===$h)return s.ALPHA;if(n===Kh)return s.RGB;if(n===dn)return s.RGBA;if(n===Jh)return s.LUMINANCE;if(n===Zh)return s.LUMINANCE_ALPHA;if(n===ps)return s.DEPTH_COMPONENT;if(n===Ss)return s.DEPTH_STENCIL;if(n===Tc)return s.RED;if(n===Ec)return s.RED_INTEGER;if(n===Qh)return s.RG;if(n===Ac)return s.RG_INTEGER;if(n===Rc)return s.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===No||n===Uo||n===Fo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===ko||n===Bo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oo||n===ko)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===jo||n===$o||n===Ko||n===Jo||n===Zo||n===Qo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Go)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===ec||n===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===aa)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eu||n===nc||n===ic||n===sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const L_={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
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

}`;class N_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Pt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dn({vertexShader:I_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U_ extends Rs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new N_,m=t.getContextAttributes();let p=null,M=null;const y=[],_=[],L=new oe;let R=null;const C=new $t;C.viewport=new st;const E=new $t;E.viewport=new st;const b=[C,E],x=new Yp;let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=y[J];return ae===void 0&&(ae=new fo,y[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=y[J];return ae===void 0&&(ae=new fo,y[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=y[J];return ae===void 0&&(ae=new fo,y[J]=ae),ae.getHandSpace()};function F(J){const ae=_.indexOf(J.inputSource);if(ae===-1)return;const we=y[ae];we!==void 0&&(we.update(J.inputSource,J.frame,l||a),we.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",W);for(let J=0;J<y.length;J++){const ae=_[J];ae!==null&&(_[J]=null,y[J].disconnect(ae))}T=null,z=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Bi(f.framebufferWidth,f.framebufferHeight,{format:dn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,we=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Ss:ps,we=m.stencil?Ms:ki);const Ae={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ae),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Bi(d.textureWidth,d.textureHeight,{format:dn,type:ii,depthTexture:new xu(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(J){for(let ae=0;ae<J.removed.length;ae++){const we=J.removed[ae],le=_.indexOf(we);le>=0&&(_[le]=null,y[le].disconnect(we))}for(let ae=0;ae<J.added.length;ae++){const we=J.added[ae];let le=_.indexOf(we);if(le===-1){for(let ze=0;ze<y.length;ze++)if(ze>=_.length){_.push(we),le=ze;break}else if(_[ze]===null){_[ze]=we,le=ze;break}if(le===-1)break}const Ae=y[le];Ae&&Ae.connect(we)}}const D=new I,H=new I;function U(J,ae,we){D.setFromMatrixPosition(ae.matrixWorld),H.setFromMatrixPosition(we.matrixWorld);const le=D.distanceTo(H),Ae=ae.projectionMatrix.elements,ze=we.projectionMatrix.elements,Ne=Ae[14]/(Ae[10]-1),et=Ae[14]/(Ae[10]+1),Q=(Ae[9]+1)/Ae[5],re=(Ae[9]-1)/Ae[5],P=(Ae[8]-1)/Ae[0],Ee=(ze[8]+1)/ze[0],te=Ne*P,xe=Ne*Ee,ce=le/(-P+Ee),De=ce*-P;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(De),J.translateZ(ce),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const ge=Ne+ce,A=et+ce,S=te-De,G=xe+(le-De),$=Q*et/A*ge,ee=re*et/A*ge;J.projectionMatrix.makePerspective(S,G,$,ee,ge,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function j(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ae=J.near,we=J.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(we=v.depthFar)),x.near=E.near=C.near=ae,x.far=E.far=C.far=we,(T!==x.near||z!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,z=x.far),C.layers.mask=J.layers.mask|2,E.layers.mask=J.layers.mask|4,x.layers.mask=C.layers.mask|E.layers.mask;const le=J.parent,Ae=x.cameras;j(x,le);for(let ze=0;ze<Ae.length;ze++)j(Ae[ze],le);Ae.length===2?U(x,C,E):x.projectionMatrix.copy(C.projectionMatrix),ie(J,x,le)};function ie(J,ae,we){we===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(we.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=bs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let de=null;function Be(J,ae){if(h=ae.getViewerPose(l||a),g=ae,h!==null){const we=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let le=!1;we.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let ze=0;ze<we.length;ze++){const Ne=we[ze];let et=null;if(f!==null)et=f.getViewport(Ne);else{const re=u.getViewSubImage(d,Ne);et=re.viewport,ze===0&&(e.setRenderTargetTextures(M,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(M))}let Q=b[ze];Q===void 0&&(Q=new $t,Q.layers.enable(ze),Q.viewport=new st,b[ze]=Q),Q.matrix.fromArray(Ne.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ne.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(et.x,et.y,et.width,et.height),ze===0&&(x.matrix.copy(Q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(Q)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const ze=u.getDepthInformation(we[0]);ze&&ze.isValid&&ze.texture&&v.init(e,ze,i.renderState)}}for(let we=0;we<y.length;we++){const le=_[we],Ae=y[we];le!==null&&Ae!==void 0&&Ae.update(le,ae,l||a)}de&&de(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const rt=new Du;rt.setAnimationLoop(Be),this.setAnimationLoop=function(J){de=J},this.dispose=function(){}}}const Ai=new In,F_=new Ge;function O_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,_=M.envMapRotation;y&&(m.envMap.value=y,Ai.copy(_),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Ai)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const _=y.program;n.uniformBlockBinding(M,_)}function l(M,y){let _=i[M.id];_===void 0&&(g(M),_=h(M),i[M.id]=_,M.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(M,L);const R=e.render.frame;r[M.id]!==R&&(d(M),r[M.id]=R)}function h(M){const y=u();M.__bindingPointIndex=y;const _=s.createBuffer(),L=M.__size,R=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=i[M.id],_=M.uniforms,L=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let R=0,C=_.length;R<C;R++){const E=Array.isArray(_[R])?_[R]:[_[R]];for(let b=0,x=E.length;b<x;b++){const T=E[b];if(f(T,R,b,L)===!0){const z=T.__offset,F=Array.isArray(T.value)?T.value:[T.value];let V=0;for(let W=0;W<F.length;W++){const D=F[W],H=v(D);typeof D=="number"||typeof D=="boolean"?(T.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,z+V,T.__data)):D.isMatrix3?(T.__data[0]=D.elements[0],T.__data[1]=D.elements[1],T.__data[2]=D.elements[2],T.__data[3]=0,T.__data[4]=D.elements[3],T.__data[5]=D.elements[4],T.__data[6]=D.elements[5],T.__data[7]=0,T.__data[8]=D.elements[6],T.__data[9]=D.elements[7],T.__data[10]=D.elements[8],T.__data[11]=0):(D.toArray(T.__data,V),V+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,y,_,L){const R=M.value,C=y+"_"+_;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const E=L[C];if(typeof R=="number"||typeof R=="boolean"){if(E!==R)return L[C]=R,!0}else if(E.equals(R)===!1)return E.copy(R),!0}return!1}function g(M){const y=M.uniforms;let _=0;const L=16;for(let C=0,E=y.length;C<E;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,T=b.length;x<T;x++){const z=b[x],F=Array.isArray(z.value)?z.value:[z.value];for(let V=0,W=F.length;V<W;V++){const D=F[V],H=v(D),U=_%L,j=U%H.boundary,ie=U+j;_+=j,ie!==0&&L-ie<H.storage&&(_+=L-ie),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=H.storage}}}const R=_%L;return R>0&&(_+=L-R),M.__size=_,M.__cache={},this}function v(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class B_{constructor(e={}){const{canvas:t=hf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=vi,this.toneMappingExposure=1;const _=this;let L=!1,R=0,C=0,E=null,b=-1,x=null;const T=new st,z=new st;let F=null;const V=new Ce(0);let W=0,D=t.width,H=t.height,U=1,j=null,ie=null;const de=new st(0,0,D,H),Be=new st(0,0,D,H);let rt=!1;const J=new Dc;let ae=!1,we=!1;const le=new Ge,Ae=new Ge,ze=new I,Ne=new st,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function re(){return E===null?U:1}let P=n;function Ee(w,k){return t.getContext(w,k)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yc}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",me,!1),P===null){const k="webgl2";if(P=Ee(k,w),P===null)throw Ee(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let te,xe,ce,De,ge,A,S,G,$,ee,K,Te,ue,_e,Ke,se,Me,Le,Oe,Se,Ze,qe,ft,O;function fe(){te=new jg(P),te.init(),qe=new P_(P,te),xe=new Vg(P,te,e,qe),ce=new R_(P,te),xe.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),De=new Jg(P),ge=new m_,A=new C_(P,te,ce,ge,xe,qe,De),S=new Wg(_),G=new Yg(_),$=new sm(P),ft=new zg(P,$),ee=new $g(P,$,De,ft),K=new Qg(P,ee,$,De),Oe=new Zg(P,xe,A),se=new Gg(ge),Te=new p_(_,S,G,te,xe,ft,se),ue=new O_(_,ge),_e=new v_,Ke=new b_(te),Le=new Bg(_,S,G,ce,K,f,c),Me=new E_(_,K,xe),O=new k_(P,De,xe,ce),Se=new Hg(P,te,De),Ze=new Kg(P,te,De),De.programs=Te.programs,_.capabilities=xe,_.extensions=te,_.properties=ge,_.renderLists=_e,_.shadowMap=Me,_.state=ce,_.info=De}fe();const Y=new U_(_,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(D,H,!1))},this.getSize=function(w){return w.set(D,H)},this.setSize=function(w,k,X=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,H=k,t.width=Math.floor(w*U),t.height=Math.floor(k*U),X===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(D*U,H*U).floor()},this.setDrawingBufferSize=function(w,k,X){D=w,H=k,U=X,t.width=Math.floor(w*X),t.height=Math.floor(k*X),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(de)},this.setViewport=function(w,k,X,q){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,k,X,q),ce.viewport(T.copy(de).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(Be)},this.setScissor=function(w,k,X,q){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,k,X,q),ce.scissor(z.copy(Be).multiplyScalar(U).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(w){ce.setScissorTest(rt=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(w=!0,k=!0,X=!0){let q=0;if(w){let B=!1;if(E!==null){const ne=E.texture.format;B=ne===Rc||ne===Ac||ne===Ec}if(B){const ne=E.texture.type,pe=ne===ii||ne===ki||ne===ar||ne===Ms||ne===bc||ne===wc,ye=Le.getClearColor(),be=Le.getClearAlpha(),ke=ye.r,He=ye.g,Re=ye.b;pe?(g[0]=ke,g[1]=He,g[2]=Re,g[3]=be,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=ke,v[1]=He,v[2]=Re,v[3]=be,P.clearBufferiv(P.COLOR,0,v))}else q|=P.COLOR_BUFFER_BIT}k&&(q|=P.DEPTH_BUFFER_BIT),X&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Le.dispose(),_e.dispose(),Ke.dispose(),ge.dispose(),S.dispose(),G.dispose(),K.dispose(),ft.dispose(),O.dispose(),Te.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",$c),Y.removeEventListener("sessionend",Kc),yi.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=De.autoReset,k=Me.enabled,X=Me.autoUpdate,q=Me.needsUpdate,B=Me.type;fe(),De.autoReset=w,Me.enabled=k,Me.autoUpdate=X,Me.needsUpdate=q,Me.type=B}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function We(w){const k=w.target;k.removeEventListener("dispose",We),_t(k)}function _t(w){zt(w),ge.remove(w)}function zt(w){const k=ge.get(w).programs;k!==void 0&&(k.forEach(function(X){Te.releaseProgram(X)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,X,q,B,ne){k===null&&(k=et);const pe=B.isMesh&&B.matrixWorld.determinant()<0,ye=Ju(w,k,X,q,B);ce.setMaterial(q,pe);let be=X.index,ke=1;if(q.wireframe===!0){if(be=ee.getWireframeAttribute(X),be===void 0)return;ke=2}const He=X.drawRange,Re=X.attributes.position;let tt=He.start*ke,at=(He.start+He.count)*ke;ne!==null&&(tt=Math.max(tt,ne.start*ke),at=Math.min(at,(ne.start+ne.count)*ke)),be!==null?(tt=Math.max(tt,0),at=Math.min(at,be.count)):Re!=null&&(tt=Math.max(tt,0),at=Math.min(at,Re.count));const Mt=at-tt;if(Mt<0||Mt===1/0)return;ft.setup(B,q,ye,X,be);let xt,nt=Se;if(be!==null&&(xt=$.get(be),nt=Ze,nt.setIndex(xt)),B.isMesh)q.wireframe===!0?(ce.setLineWidth(q.wireframeLinewidth*re()),nt.setMode(P.LINES)):nt.setMode(P.TRIANGLES);else if(B.isLine){let Pe=q.linewidth;Pe===void 0&&(Pe=1),ce.setLineWidth(Pe*re()),B.isLineSegments?nt.setMode(P.LINES):B.isLineLoop?nt.setMode(P.LINE_LOOP):nt.setMode(P.LINE_STRIP)}else B.isPoints?nt.setMode(P.POINTS):B.isSprite&&nt.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Pe=B._multiDrawStarts,Ot=B._multiDrawCounts,ot=B._multiDrawCount,gn=be?$.get(be).bytesPerElement:1,Vi=ge.get(q).currentProgram.getUniforms();for(let Qt=0;Qt<ot;Qt++)Vi.setValue(P,"_gl_DrawID",Qt),nt.render(Pe[Qt]/gn,Ot[Qt])}else if(B.isInstancedMesh)nt.renderInstances(tt,Mt,B.count);else if(X.isInstancedBufferGeometry){const Pe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ot=Math.min(X.instanceCount,Pe);nt.renderInstances(tt,Mt,Ot)}else nt.render(tt,Mt)};function lt(w,k,X){w.transparent===!0&&w.side===Wt&&w.forceSinglePass===!1?(w.side=Xt,w.needsUpdate=!0,xr(w,k,X),w.side=ni,w.needsUpdate=!0,xr(w,k,X),w.side=Wt):xr(w,k,X)}this.compile=function(w,k,X=null){X===null&&(X=w),p=Ke.get(X),p.init(k),y.push(p),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==X&&w.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const q=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ne=B.material;if(ne)if(Array.isArray(ne))for(let pe=0;pe<ne.length;pe++){const ye=ne[pe];lt(ye,X,B),q.add(ye)}else lt(ne,X,B),q.add(ne)}),y.pop(),p=null,q},this.compileAsync=function(w,k,X=null){const q=this.compile(w,k,X);return new Promise(B=>{function ne(){if(q.forEach(function(pe){ge.get(pe).currentProgram.isReady()&&q.delete(pe)}),q.size===0){B(w);return}setTimeout(ne,10)}te.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let mn=null;function kn(w){mn&&mn(w)}function $c(){yi.stop()}function Kc(){yi.start()}const yi=new Du;yi.setAnimationLoop(kn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(w){mn=w,Y.setAnimationLoop(w),w===null?yi.stop():yi.start()},Y.addEventListener("sessionstart",$c),Y.addEventListener("sessionend",Kc),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,k,E),p=Ke.get(w,y.length),p.init(k),y.push(p),Ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(Ae),we=this.localClippingEnabled,ae=se.init(this.clippingPlanes,we),m=_e.get(w,M.length),m.init(),M.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ne=_.xr.getDepthSensingMesh();ne!==null&&Ca(ne,k,-1/0,_.sortObjects)}Ca(w,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(j,ie),Q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Q&&Le.addToRenderList(m,w),this.info.render.frame++,ae===!0&&se.beginShadows();const X=p.state.shadowsArray;Me.render(X,w,k),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ne=k.cameras;if(B.length>0)for(let pe=0,ye=ne.length;pe<ye;pe++){const be=ne[pe];Zc(q,B,w,be)}Q&&Le.render(w);for(let pe=0,ye=ne.length;pe<ye;pe++){const be=ne[pe];Jc(m,w,be,be.viewport)}}else B.length>0&&Zc(q,B,w,k),Q&&Le.render(w),Jc(m,w,k);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(_,w,k),ft.resetDefaultState(),b=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],ae===!0&&se.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ca(w,k,X,q){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){q&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);const pe=K.update(w),ye=w.material;ye.visible&&m.push(w,pe,ye,X,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const pe=K.update(w),ye=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ne.copy(pe.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(ye)){const be=pe.groups;for(let ke=0,He=be.length;ke<He;ke++){const Re=be[ke],tt=ye[Re.materialIndex];tt&&tt.visible&&m.push(w,pe,tt,X,Ne.z,Re)}}else ye.visible&&m.push(w,pe,ye,X,Ne.z,null)}}const ne=w.children;for(let pe=0,ye=ne.length;pe<ye;pe++)Ca(ne[pe],k,X,q)}function Jc(w,k,X,q){const B=w.opaque,ne=w.transmissive,pe=w.transparent;p.setupLightsView(X),ae===!0&&se.setGlobalState(_.clippingPlanes,X),q&&ce.viewport(T.copy(q)),B.length>0&&_r(B,k,X),ne.length>0&&_r(ne,k,X),pe.length>0&&_r(pe,k,X),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Zc(w,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Bi(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?pr:ii,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ne=p.state.transmissionRenderTarget[q.id],pe=q.viewport||T;ne.setSize(pe.z,pe.w);const ye=_.getRenderTarget();_.setRenderTarget(ne),_.getClearColor(V),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),Q&&Le.render(X);const be=_.toneMapping;_.toneMapping=vi;const ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ae===!0&&se.setGlobalState(_.clippingPlanes,q),_r(w,X,q),A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne),te.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Re=0,tt=k.length;Re<tt;Re++){const at=k[Re],Mt=at.object,xt=at.geometry,nt=at.material,Pe=at.group;if(nt.side===Wt&&Mt.layers.test(q.layers)){const Ot=nt.side;nt.side=Xt,nt.needsUpdate=!0,Qc(Mt,X,q,xt,nt,Pe),nt.side=Ot,nt.needsUpdate=!0,He=!0}}He===!0&&(A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne))}_.setRenderTarget(ye),_.setClearColor(V,W),ke!==void 0&&(q.viewport=ke),_.toneMapping=be}function _r(w,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ne=w.length;B<ne;B++){const pe=w[B],ye=pe.object,be=pe.geometry,ke=q===null?pe.material:q,He=pe.group;ye.layers.test(X.layers)&&Qc(ye,k,X,be,ke,He)}}function Qc(w,k,X,q,B,ne){w.onBeforeRender(_,k,X,q,B,ne),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(_,k,X,q,w,ne),B.transparent===!0&&B.side===Wt&&B.forceSinglePass===!1?(B.side=Xt,B.needsUpdate=!0,_.renderBufferDirect(X,k,q,B,w,ne),B.side=ni,B.needsUpdate=!0,_.renderBufferDirect(X,k,q,B,w,ne),B.side=Wt):_.renderBufferDirect(X,k,q,B,w,ne),w.onAfterRender(_,k,X,q,B,ne)}function xr(w,k,X){k.isScene!==!0&&(k=et);const q=ge.get(w),B=p.state.lights,ne=p.state.shadowsArray,pe=B.state.version,ye=Te.getParameters(w,B.state,ne,k,X),be=Te.getProgramCacheKey(ye);let ke=q.programs;q.environment=w.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(w.isMeshStandardMaterial?G:S).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",We),ke=new Map,q.programs=ke);let He=ke.get(be);if(He!==void 0){if(q.currentProgram===He&&q.lightsStateVersion===pe)return tl(w,ye),He}else ye.uniforms=Te.getUniforms(w),w.onBeforeCompile(ye,_),He=Te.acquireProgram(ye,be),ke.set(be,He),q.uniforms=ye.uniforms;const Re=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=se.uniform),tl(w,ye),q.needsLights=Qu(w),q.lightsStateVersion=pe,q.needsLights&&(Re.ambientLightColor.value=B.state.ambient,Re.lightProbe.value=B.state.probe,Re.directionalLights.value=B.state.directional,Re.directionalLightShadows.value=B.state.directionalShadow,Re.spotLights.value=B.state.spot,Re.spotLightShadows.value=B.state.spotShadow,Re.rectAreaLights.value=B.state.rectArea,Re.ltc_1.value=B.state.rectAreaLTC1,Re.ltc_2.value=B.state.rectAreaLTC2,Re.pointLights.value=B.state.point,Re.pointLightShadows.value=B.state.pointShadow,Re.hemisphereLights.value=B.state.hemi,Re.directionalShadowMap.value=B.state.directionalShadowMap,Re.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Re.spotShadowMap.value=B.state.spotShadowMap,Re.spotLightMatrix.value=B.state.spotLightMatrix,Re.spotLightMap.value=B.state.spotLightMap,Re.pointShadowMap.value=B.state.pointShadowMap,Re.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=He,q.uniformsList=null,He}function el(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=ca.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function tl(w,k){const X=ge.get(w);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Ju(w,k,X,q,B){k.isScene!==!0&&(k=et),A.resetTextureUnits();const ne=k.fog,pe=q.isMeshStandardMaterial?k.environment:null,ye=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Jt,be=(q.isMeshStandardMaterial?G:S).get(q.envMap||pe),ke=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,He=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,at=!!X.morphAttributes.color;let Mt=vi;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const xt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,nt=xt!==void 0?xt.length:0,Pe=ge.get(q),Ot=p.state.lights;if(ae===!0&&(we===!0||w!==x)){const qt=w===x&&q.id===b;se.setState(q,w,qt)}let ot=!1;q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ot.state.version||Pe.outputColorSpace!==ye||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==be||q.fog===!0&&Pe.fog!==ne||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==se.numPlanes||Pe.numIntersection!==se.numIntersection)||Pe.vertexAlphas!==ke||Pe.vertexTangents!==He||Pe.morphTargets!==Re||Pe.morphNormals!==tt||Pe.morphColors!==at||Pe.toneMapping!==Mt||Pe.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,Pe.__version=q.version);let gn=Pe.currentProgram;ot===!0&&(gn=xr(q,k,B));let Vi=!1,Qt=!1,Ns=!1;const pt=gn.getUniforms(),an=Pe.uniforms;if(ce.useProgram(gn.program)&&(Vi=!0,Qt=!0,Ns=!0),q.id!==b&&(b=q.id,Qt=!0),Vi||x!==w){ce.buffers.depth.getReversed()?(le.copy(w.projectionMatrix),df(le),ff(le),pt.setValue(P,"projectionMatrix",le)):pt.setValue(P,"projectionMatrix",w.projectionMatrix),pt.setValue(P,"viewMatrix",w.matrixWorldInverse);const Zt=pt.map.cameraPosition;Zt!==void 0&&Zt.setValue(P,ze.setFromMatrixPosition(w.matrixWorld)),xe.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Qt=!0,Ns=!0)}if(B.isSkinnedMesh){pt.setOptional(P,B,"bindMatrix"),pt.setOptional(P,B,"bindMatrixInverse");const qt=B.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),pt.setValue(P,"boneTexture",qt.boneTexture,A))}B.isBatchedMesh&&(pt.setOptional(P,B,"batchingTexture"),pt.setValue(P,"batchingTexture",B._matricesTexture,A),pt.setOptional(P,B,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",B._indirectTexture,A),pt.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",B._colorsTexture,A));const on=X.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Oe.update(B,X,gn),(Qt||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,pt.setValue(P,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(an.envMap.value=be,an.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(an.envMapIntensity.value=k.environmentIntensity),Qt&&(pt.setValue(P,"toneMappingExposure",_.toneMappingExposure),Pe.needsLights&&Zu(an,Ns),ne&&q.fog===!0&&ue.refreshFogUniforms(an,ne),ue.refreshMaterialUniforms(an,q,U,H,p.state.transmissionRenderTarget[w.id]),ca.upload(P,el(Pe),an,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ca.upload(P,el(Pe),an,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(P,"center",B.center),pt.setValue(P,"modelViewMatrix",B.modelViewMatrix),pt.setValue(P,"normalMatrix",B.normalMatrix),pt.setValue(P,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const qt=q.uniformsGroups;for(let Zt=0,Pa=qt.length;Zt<Pa;Zt++){const Mi=qt[Zt];O.update(Mi,gn),O.bind(Mi,gn)}}return gn}function Zu(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Qu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,k,X){ge.get(w.texture).__webglTexture=k,ge.get(w.depthTexture).__webglTexture=X;const q=ge.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const X=ge.get(w);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,X=0){E=w,R=k,C=X;let q=!0,B=null,ne=!1,pe=!1;if(w){const be=ge.get(w);if(be.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(be.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(be.__hasExternalTextures)A.rebindTextures(w,ge.get(w.texture).__webglTexture,ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(be.__boundDepthTexture!==Re){if(Re!==null&&ge.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(pe=!0);const He=ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[k])?B=He[k][X]:B=He[k],ne=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?B=ge.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?B=He[X]:B=He,T.copy(w.viewport),z.copy(w.scissor),F=w.scissorTest}else T.copy(de).multiplyScalar(U).floor(),z.copy(Be).multiplyScalar(U).floor(),F=rt;if(ce.bindFramebuffer(P.FRAMEBUFFER,B)&&q&&ce.drawBuffers(w,B),ce.viewport(T),ce.scissor(z),ce.setScissorTest(F),ne){const be=ge.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,X)}else if(pe){const be=ge.get(w.texture),ke=k||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.__webglTexture,X||0,ke)}b=-1},this.readRenderTargetPixels=function(w,k,X,q,B,ne,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){ce.bindFramebuffer(P.FRAMEBUFFER,ye);try{const be=w.texture,ke=be.format,He=be.type;if(!xe.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-q&&X>=0&&X<=w.height-B&&P.readPixels(k,X,q,B,qe.convert(ke),qe.convert(He),ne)}finally{const be=E!==null?ge.get(E).__webglFramebuffer:null;ce.bindFramebuffer(P.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,k,X,q,B,ne,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){const be=w.texture,ke=be.format,He=be.type;if(!xe.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-q&&X>=0&&X<=w.height-B){ce.bindFramebuffer(P.FRAMEBUFFER,ye);const Re=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),P.readPixels(k,X,q,B,qe.convert(ke),qe.convert(He),0);const tt=E!==null?ge.get(E).__webglFramebuffer:null;ce.bindFramebuffer(P.FRAMEBUFFER,tt);const at=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await uf(P,at,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne),P.deleteBuffer(Re),P.deleteSync(at),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,X=0){w.isTexture!==!0&&(rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-X),B=Math.floor(w.image.width*q),ne=Math.floor(w.image.height*q),pe=k!==null?k.x:0,ye=k!==null?k.y:0;A.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,pe,ye,B,ne),ce.unbindTexture()};const ed=P.createFramebuffer(),td=P.createFramebuffer();this.copyTextureToTexture=function(w,k,X=null,q=null,B=0,ne=null){w.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],k=arguments[2],ne=arguments[3]||0,X=null),ne===null&&(B!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=B,B=0):ne=0);let pe,ye,be,ke,He,Re,tt,at,Mt;const xt=w.isCompressedTexture?w.mipmaps[ne]:w.image;if(X!==null)pe=X.max.x-X.min.x,ye=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,ke=X.min.x,He=X.min.y,Re=X.isBox3?X.min.z:0;else{const on=Math.pow(2,-B);pe=Math.floor(xt.width*on),ye=Math.floor(xt.height*on),w.isDataArrayTexture?be=xt.depth:w.isData3DTexture?be=Math.floor(xt.depth*on):be=1,ke=0,He=0,Re=0}q!==null?(tt=q.x,at=q.y,Mt=q.z):(tt=0,at=0,Mt=0);const nt=qe.convert(k.format),Pe=qe.convert(k.type);let Ot;k.isData3DTexture?(A.setTexture3D(k,0),Ot=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),Ot=P.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),Ot=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const ot=P.getParameter(P.UNPACK_ROW_LENGTH),gn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Vi=P.getParameter(P.UNPACK_SKIP_PIXELS),Qt=P.getParameter(P.UNPACK_SKIP_ROWS),Ns=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ke),P.pixelStorei(P.UNPACK_SKIP_ROWS,He),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re);const pt=w.isDataArrayTexture||w.isData3DTexture,an=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const on=ge.get(w),qt=ge.get(k),Zt=ge.get(on.__renderTarget),Pa=ge.get(qt.__renderTarget);ce.bindFramebuffer(P.READ_FRAMEBUFFER,Zt.__webglFramebuffer),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,Pa.__webglFramebuffer);for(let Mi=0;Mi<be;Mi++)pt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.get(w).__webglTexture,B,Re+Mi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.get(k).__webglTexture,ne,Mt+Mi)),P.blitFramebuffer(ke,He,pe,ye,tt,at,pe,ye,P.DEPTH_BUFFER_BIT,P.NEAREST);ce.bindFramebuffer(P.READ_FRAMEBUFFER,null),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||ge.has(w)){const on=ge.get(w),qt=ge.get(k);ce.bindFramebuffer(P.READ_FRAMEBUFFER,ed),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,td);for(let Zt=0;Zt<be;Zt++)pt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,on.__webglTexture,B,Re+Zt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,on.__webglTexture,B),an?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,ne,Mt+Zt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,ne),B!==0?P.blitFramebuffer(ke,He,pe,ye,tt,at,pe,ye,P.COLOR_BUFFER_BIT,P.NEAREST):an?P.copyTexSubImage3D(Ot,ne,tt,at,Mt+Zt,ke,He,pe,ye):P.copyTexSubImage2D(Ot,ne,tt,at,ke,He,pe,ye);ce.bindFramebuffer(P.READ_FRAMEBUFFER,null),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else an?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Ot,ne,tt,at,Mt,pe,ye,be,nt,Pe,xt.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Ot,ne,tt,at,Mt,pe,ye,be,nt,xt.data):P.texSubImage3D(Ot,ne,tt,at,Mt,pe,ye,be,nt,Pe,xt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ne,tt,at,pe,ye,nt,Pe,xt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ne,tt,at,xt.width,xt.height,nt,xt.data):P.texSubImage2D(P.TEXTURE_2D,ne,tt,at,pe,ye,nt,Pe,xt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Vi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ns),ne===0&&k.generateMipmaps&&P.generateMipmap(Ot),ce.unbindTexture()},this.copyTextureToTexture3D=function(w,k,X=null,q=null,B=0){return w.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,w=arguments[2],k=arguments[3],B=arguments[4]||0),rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,X,q,B)},this.initRenderTarget=function(w){ge.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),ce.unbindTexture()},this.resetState=function(){R=0,C=0,E=null,ce.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const Sh=Math.PI*2,Yn=(s=0,e=0,t=0)=>({x:s,y:e,z:t}),ct=(s,e,t)=>Math.max(e,Math.min(t,s)),Zn=(s,e,t)=>s+(e-s)*t,Hi=s=>(s=(s+Math.PI)%Sh,s<0&&(s+=Sh),s-Math.PI),qc=(s,e,t)=>s+Hi(e-s)*t,_a=s=>1-(1-s)*(1-s),ku=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,z_=s=>({x:Math.sin(s),z:Math.cos(s)}),bh=s=>({x:-Math.cos(s),z:Math.sin(s)}),gs=(s,e)=>Math.atan2(s,e),la=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),ss=(s,e)=>s.x*e.x+s.y*e.y+s.z*e.z,Kr=(s,e)=>({x:s.x-e.x,y:s.y-e.y,z:s.z-e.z});function wh(s,e,t,n){const i=Kr(e,s),r=Kr(n,t),a=Kr(s,t),o=ss(i,i),c=ss(r,r),l=ss(r,a),h=1e-8;let u,d;if(o<=h&&c<=h)u=0,d=0;else if(o<=h)u=0,d=ct(l/c,0,1);else{const m=ss(i,a);if(c<=h)d=0,u=ct(-m/o,0,1);else{const p=ss(i,r),M=o*c-p*p;u=M>h?ct((p*l-m*c)/M,0,1):0,d=(p*u+l)/c,d<0?(d=0,u=ct(-m/o,0,1)):d>1&&(d=1,u=ct((p-m)/o,0,1))}}const f={x:s.x+i.x*u,y:s.y+i.y*u,z:s.z+i.z*u},g={x:t.x+r.x*d,y:t.y+r.y*d,z:t.z+r.z*d},v=Kr(f,g);return ss(v,v)}function vr(s){let e=s>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const rn=["head","chest","arms","legs"],ln=(s,e,t,n,i,r,a,o,c,l,h)=>({id:`${s}_${e}`,name:t,slot:s,tier:e,weight:n,durability:i,coverage:r,poise:o,trait:h,look:{color:c,trim:l,style:`${s}_${e}`},resist:{slash:a[0],pierce:a[1],blunt:a[2],fire:a[3],frost:a[3],shock:a[3],energy:a[3]}}),Bu=[ln("head","light","Stalker Hood",1,40,.6,[.1,.08,.05,.05],0,3817290,9072442,"Light: no stamina penalty"),ln("head","medium","Vanguard Helm",3,80,.8,[.2,.18,.14,.08],2,4936549,13214282),ln("head","heavy","Bastion Greathelm",6,140,1,[.32,.3,.26,.12],5,5857390,14211296,"Heavy: strongest vs blunt"),ln("chest","light","Stalker Jerkin",3,70,.7,[.12,.08,.06,.08],0,3752012,9072442),ln("chest","medium","Vanguard Cuirass",8,150,.9,[.26,.22,.16,.12],4,4936549,13214282),ln("chest","heavy","Bastion Plate",14,260,1,[.4,.36,.3,.16],9,5857390,14211296,"Heavy: slows stamina regen"),ln("arms","light","Stalker Bracers",1,40,.6,[.08,.06,.04,.04],0,3817290,9072442),ln("arms","medium","Vanguard Vambraces",3,80,.8,[.16,.14,.1,.06],2,4936549,13214282),ln("arms","heavy","Bastion Gauntlets",5,130,1,[.26,.24,.2,.1],4,5857390,14211296),ln("legs","light","Stalker Greaves",2,50,.7,[.08,.06,.04,.04],0,3817290,9072442),ln("legs","medium","Vanguard Greaves",5,100,.85,[.18,.16,.12,.08],3,4936549,13214282),ln("legs","heavy","Bastion Legplates",9,180,1,[.28,.26,.22,.12],6,5857390,14211296)],Ra=s=>{const e=Bu.find(t=>t.id===s);if(!e)throw new Error("Unknown armor "+s);return e},H_=s=>Bu.filter(e=>e.slot===s),zu={head:"head_medium",chest:"chest_medium",arms:"arms_medium",legs:"legs_medium"},Hu=s=>{const e={};for(const t of rn){const n=Ra(s[t]);e[t]={def:n,dur:n.durability,broken:!1}}return e},V_=(s,e)=>s.broken?0:(s.def.resist[e]??0)*s.def.coverage*(.5+.5*(s.dur/s.def.durability)),ha=s=>rn.reduce((e,t)=>e+s[t].def.weight,0),Th=s=>rn.reduce((e,t)=>e+(s[t].broken?0:s[t].def.poise),0),Yc=(s,e)=>({kind:s,arc:1,radius:.18,poise:14,knock:1.6,lunge:0,hitStop:s==="heavy"?.09:.05,melee:!0,multi:1,armorPierce:0,armorBreak:1,unparryable:!1,cooldown:s==="special"?8:0,...e}),Ve=s=>Yc("light",s),Tt=s=>Yc("heavy",s),Et=s=>Yc("special",s),At=(s,e,t,n,i=!1)=>({blockReduction:s,blockStamina:e,parryWindow:t,blockArc:n,counterPulse:i}),Vu=[{id:"greatsword",name:"Greatsword",category:"physical",grip:"two",element:"none",damageType:"slash",length:2.1,moveMult:.88,weight:9,color:12174031,blurb:"Powerful, slow, wide attacks. Heavy swings break stance.",defense:At(.55,1,.16,1),onHit:{},light:[Ve({id:"gs_l1",name:"Wide Cut",style:"slash",windup:.3,active:.14,recovery:.4,damage:14,stamina:12,reach:2.1,arc:1.35,poise:18,knock:2.2,lunge:1.5}),Ve({id:"gs_l2",name:"Rising Diagonal",style:"diag",windup:.3,active:.14,recovery:.46,damage:15,stamina:12,reach:2.1,arc:1.3,poise:18,knock:2.2,lunge:1.5})],heavy:Tt({id:"gs_h",name:"Executioner",style:"overhead",windup:.6,active:.16,recovery:.65,damage:30,stamina:26,reach:2.1,poise:45,knock:4,lunge:3}),special:Et({id:"gs_s",name:"Cleaving Whirl",style:"spin",windup:.35,active:.5,recovery:.6,damage:12,stamina:30,reach:2.1,arc:Math.PI,poise:30,multi:2,knock:3,cooldown:9})},{id:"longsword",name:"Longsword",category:"physical",grip:"one",element:"none",damageType:"slash",length:1.5,moveMult:1,weight:4,color:14015462,blurb:"Balanced offense and defense. Reliable parries.",defense:At(.65,.8,.22,1.1),onHit:{},light:[Ve({id:"ls_l1",name:"Slash",style:"slash",windup:.2,active:.12,recovery:.3,damage:10,stamina:9,reach:1.5}),Ve({id:"ls_l2",name:"Back Slash",style:"diag",windup:.2,active:.12,recovery:.3,damage:10,stamina:9,reach:1.5}),Ve({id:"ls_l3",name:"Thrust",style:"thrust",windup:.24,active:.1,recovery:.42,damage:13,stamina:11,reach:1.6,lunge:2.5,radius:.14})],heavy:Tt({id:"ls_h",name:"Overhead Cut",style:"overhead",windup:.42,active:.14,recovery:.5,damage:22,stamina:20,reach:1.5,poise:32,lunge:2.5}),special:Et({id:"ls_s",name:"Rising Cut",style:"diag",windup:.3,active:.14,recovery:.5,damage:20,stamina:22,reach:1.6,lunge:6,poise:30,cooldown:7})},{id:"rapier",name:"Rapier",category:"physical",grip:"one",element:"none",damageType:"pierce",length:1.9,moveMult:1.05,weight:2,color:14936304,blurb:"Fast thrusts with the widest parry window and superb reach.",defense:At(.45,1,.28,.8),onHit:{},light:[Ve({id:"rp_l1",name:"Thrust",style:"thrust",windup:.16,active:.08,recovery:.26,damage:8,stamina:7,reach:1.9,radius:.12,poise:8,lunge:1.5}),Ve({id:"rp_l2",name:"Double Thrust",style:"thrust",windup:.14,active:.08,recovery:.26,damage:8,stamina:7,reach:1.9,radius:.12,poise:8,lunge:1.5})],heavy:Tt({id:"rp_h",name:"Lunge",style:"thrust",windup:.34,active:.1,recovery:.5,damage:17,stamina:16,reach:1.9,radius:.12,poise:22,lunge:5,armorPierce:.2}),special:Et({id:"rp_s",name:"Fleche",style:"thrust",windup:.22,active:.12,recovery:.6,damage:18,stamina:20,reach:1.9,radius:.12,poise:25,lunge:9,armorPierce:.35,cooldown:6})},{id:"dagger",name:"Dagger",category:"physical",grip:"one",element:"none",damageType:"pierce",length:.75,moveMult:1.18,weight:1,color:13094102,blurb:"Extremely fast combinations and evasive footwork.",defense:At(.3,1.2,.12,.8),onHit:{},light:[Ve({id:"dg_l1",name:"Stab",style:"slash",windup:.12,active:.08,recovery:.2,damage:5,stamina:5,reach:.75,arc:.9,poise:6,knock:.8,lunge:1}),Ve({id:"dg_l2",name:"Reverse Stab",style:"slash",windup:.12,active:.08,recovery:.2,damage:5,stamina:5,reach:.75,arc:.9,poise:6,knock:.8,lunge:1}),Ve({id:"dg_l3",name:"Rake",style:"thrust",windup:.12,active:.08,recovery:.3,damage:7,stamina:6,reach:.8,poise:8,lunge:1.5})],heavy:Tt({id:"dg_h",name:"Gut Stab",style:"thrust",windup:.22,active:.08,recovery:.35,damage:12,stamina:11,reach:.8,poise:16,lunge:3,armorPierce:.3}),special:Et({id:"dg_s",name:"Flurry",style:"slash",windup:.2,active:.4,recovery:.45,damage:4,stamina:22,reach:.8,arc:1,multi:4,poise:8,lunge:4,cooldown:8,hitStop:.02})},{id:"axe",name:"Axe",category:"physical",grip:"one",element:"none",damageType:"slash",length:1.3,moveMult:.96,weight:5,color:10134445,blurb:"Chopping blows that grind armor down.",defense:At(.5,1,.15,1),onHit:{},light:[Ve({id:"ax_l1",name:"Chop",style:"diag",windup:.26,active:.13,recovery:.4,damage:13,stamina:11,reach:1.3,armorPierce:.15,armorBreak:1.6,poise:16}),Ve({id:"ax_l2",name:"Backhand Chop",style:"slash",windup:.26,active:.13,recovery:.4,damage:13,stamina:11,reach:1.3,armorPierce:.15,armorBreak:1.6,poise:16})],heavy:Tt({id:"ax_h",name:"Splitting Blow",style:"overhead",windup:.5,active:.15,recovery:.6,damage:27,stamina:22,reach:1.3,poise:35,armorPierce:.35,armorBreak:2.5,lunge:2.5}),special:Et({id:"ax_s",name:"Rend Armor",style:"overhead",windup:.45,active:.15,recovery:.65,damage:28,stamina:26,reach:1.3,poise:40,armorPierce:.6,armorBreak:4,lunge:3,cooldown:8})},{id:"spear",name:"Spear",category:"physical",grip:"two",element:"none",damageType:"pierce",length:2.4,moveMult:.98,weight:4,color:9071173,blurb:"Excellent reach and directional thrusts.",defense:At(.5,1,.15,.8),onHit:{},light:[Ve({id:"sp_l1",name:"Thrust",style:"thrust",windup:.24,active:.11,recovery:.36,damage:11,stamina:10,reach:2.4,radius:.12,poise:12,lunge:1.5}),Ve({id:"sp_l2",name:"Quick Thrust",style:"thrust",windup:.2,active:.11,recovery:.36,damage:11,stamina:10,reach:2.4,radius:.12,poise:12,lunge:1.5})],heavy:Tt({id:"sp_h",name:"Piercing Lunge",style:"thrust",windup:.5,active:.12,recovery:.55,damage:22,stamina:20,reach:2.4,radius:.12,poise:30,lunge:4}),special:Et({id:"sp_s",name:"Impale",style:"thrust",windup:.5,active:.14,recovery:.8,damage:26,stamina:26,reach:2.4,radius:.14,poise:50,lunge:7,armorPierce:.4,cooldown:9})},{id:"polearm",name:"Polearm",category:"physical",grip:"two",element:"none",damageType:"slash",length:2.7,moveMult:.9,weight:7,color:9277335,blurb:"Wide sweeps that control the whole space around you.",defense:At(.5,1,.14,1),onHit:{},light:[Ve({id:"pa_l1",name:"Sweep",style:"sweep",windup:.38,active:.18,recovery:.5,damage:14,stamina:13,reach:2.7,arc:1.5,poise:18,knock:2.5}),Ve({id:"pa_l2",name:"Reverse Sweep",style:"sweep",windup:.36,active:.18,recovery:.5,damage:14,stamina:13,reach:2.7,arc:1.5,poise:18,knock:2.5})],heavy:Tt({id:"pa_h",name:"Halberd Drop",style:"overhead",windup:.6,active:.18,recovery:.7,damage:26,stamina:24,reach:2.7,poise:40,knock:3.5}),special:Et({id:"pa_s",name:"Reaping Arc",style:"sweep",windup:.45,active:.3,recovery:.65,damage:20,stamina:26,reach:2.9,arc:2.4,poise:40,knock:4,cooldown:8})},{id:"hammer",name:"Warhammer",category:"physical",grip:"two",element:"none",damageType:"blunt",length:1.5,moveMult:.85,weight:10,color:8093578,blurb:"Devastating impacts that stagger and shatter armor.",defense:At(.5,1,.13,.9),onHit:{poiseDmg:10},light:[Ve({id:"hm_l1",name:"Crush",style:"diag",windup:.38,active:.14,recovery:.55,damage:18,stamina:15,reach:1.5,poise:30,armorBreak:2,knock:3}),Ve({id:"hm_l2",name:"Backswing",style:"slash",windup:.36,active:.14,recovery:.55,damage:18,stamina:15,reach:1.5,poise:30,armorBreak:2,knock:3})],heavy:Tt({id:"hm_h",name:"Pulverize",style:"smash",windup:.8,active:.2,recovery:.9,damage:38,stamina:32,reach:1.5,poise:70,armorBreak:4,knock:5,lunge:2}),special:Et({id:"hm_s",name:"Skull Crusher",style:"smash",windup:.7,active:.18,recovery:.9,damage:34,stamina:30,reach:1.5,poise:100,armorBreak:5,knock:6,unparryable:!0,cooldown:10})},{id:"dualblades",name:"Dual Blades",category:"physical",grip:"dual",element:"none",damageType:"slash",length:1.1,moveMult:1.1,weight:3,color:13489118,blurb:"Alternating strikes in rapid combinations.",defense:At(.35,1.1,.14,.9),onHit:{},light:[Ve({id:"db_l1",name:"Right Cut",style:"slash",windup:.14,active:.08,recovery:.22,damage:7,stamina:6,reach:1.1,poise:8,lunge:1}),Ve({id:"db_l2",name:"Left Cut",style:"slash",windup:.14,active:.08,recovery:.22,damage:7,stamina:6,reach:1.1,poise:8,lunge:1}),Ve({id:"db_l3",name:"Right Rake",style:"diag",windup:.14,active:.08,recovery:.22,damage:7,stamina:6,reach:1.1,poise:8,lunge:1}),Ve({id:"db_l4",name:"Cross Finisher",style:"sweep",windup:.18,active:.1,recovery:.4,damage:11,stamina:9,reach:1.1,arc:1.4,poise:18})],heavy:Tt({id:"db_h",name:"Crossing Sweep",style:"sweep",windup:.3,active:.12,recovery:.45,damage:15,stamina:15,reach:1.1,arc:1.5,poise:24,knock:3}),special:Et({id:"db_s",name:"Whirling Blades",style:"spin",windup:.22,active:.45,recovery:.5,damage:8,stamina:24,reach:1.1,arc:Math.PI,multi:3,poise:12,cooldown:8,hitStop:.03})},{id:"bow",name:"Longbow",category:"physical",grip:"bow",element:"none",damageType:"pierce",length:0,moveMult:.95,weight:2,color:8084026,blurb:"Draw, aim and loose. Hold distance and punish approaches.",defense:At(.15,1.5,.08,.7),onHit:{},light:[Ve({id:"bw_l1",name:"Quick Shot",style:"shoot",windup:.35,active:.06,recovery:.35,damage:9,stamina:8,reach:1,melee:!1,poise:8,fx:{type:"projectile",speed:32,gravity:4,life:2.2}})],heavy:Tt({id:"bw_h",name:"Full Draw",style:"shoot",windup:.75,active:.06,recovery:.5,damage:24,stamina:18,reach:1,melee:!1,poise:30,armorPierce:.2,fx:{type:"projectile",speed:44,gravity:2,life:2.2}}),special:Et({id:"bw_s",name:"Triple Volley",style:"shoot",windup:.5,active:.06,recovery:.55,damage:10,stamina:26,reach:1,melee:!1,poise:10,cooldown:8,fx:{type:"projectile",speed:34,count:3,spread:.2,gravity:4,life:2.2}})},{id:"flamesword",name:"Flaming Sword",category:"magical",grip:"one",element:"fire",damageType:"fire",length:1.7,moveMult:1,weight:4,color:16738858,blurb:"Fire-infused blade. Every hit leaves the target burning.",defense:At(.6,.9,.2,1),onHit:{burn:3},light:[Ve({id:"fs_l1",name:"Ember Slash",style:"slash",windup:.22,active:.13,recovery:.34,damage:11,stamina:10,reach:1.7}),Ve({id:"fs_l2",name:"Cinder Rise",style:"diag",windup:.22,active:.13,recovery:.34,damage:11,stamina:10,reach:1.7}),Ve({id:"fs_l3",name:"Flare Thrust",style:"thrust",windup:.26,active:.1,recovery:.42,damage:13,stamina:11,reach:1.8,lunge:2.5,radius:.14})],heavy:Tt({id:"fs_h",name:"Inferno Cleave",style:"overhead",windup:.5,active:.15,recovery:.55,damage:24,stamina:22,reach:1.7,poise:35,lunge:2.5}),special:Et({id:"fs_s",name:"Fire Wave",style:"slash",windup:.35,active:.14,recovery:.55,damage:16,stamina:24,reach:1.7,poise:30,cooldown:8,fx:{type:"wave",speed:13,radius:.9,life:1.2}})},{id:"icelance",name:"Frost Glaive",category:"magical",grip:"two",element:"ice",damageType:"frost",length:2.2,moveMult:.96,weight:5,color:8379647,blurb:"A rime-forged glaive. Cold slows what it touches.",defense:At(.55,1,.16,.9),onHit:{chill:2.5},light:[Ve({id:"ic_l1",name:"Frost Thrust",style:"thrust",windup:.24,active:.11,recovery:.36,damage:10,stamina:10,reach:2.2,radius:.13,lunge:1.5}),Ve({id:"ic_l2",name:"Glacial Sweep",style:"sweep",windup:.32,active:.16,recovery:.44,damage:12,stamina:12,reach:2.2,arc:1.4})],heavy:Tt({id:"ic_h",name:"Avalanche",style:"overhead",windup:.55,active:.16,recovery:.6,damage:22,stamina:22,reach:2.2,poise:35}),special:Et({id:"ic_s",name:"Glacial Spikes",style:"thrust",windup:.4,active:.12,recovery:.55,damage:14,stamina:24,reach:2.2,radius:.13,poise:25,cooldown:8,fx:{type:"wave",speed:16,radius:.8,life:1.1}})},{id:"lightning",name:"Lightning Gauntlets",category:"magical",grip:"gauntlet",element:"lightning",damageType:"shock",length:.6,moveMult:1.1,weight:3,color:16773754,blurb:"Blinding close-range strikes. Shocks drain stamina.",defense:At(.4,1,.2,.9),onHit:{shock:1,staminaDmg:3},light:[Ve({id:"lg_l1",name:"Jab",style:"punch",windup:.13,active:.08,recovery:.2,damage:6,stamina:5,reach:.6,radius:.22,poise:8,lunge:1.5}),Ve({id:"lg_l2",name:"Cross",style:"punch",windup:.13,active:.08,recovery:.2,damage:6,stamina:5,reach:.6,radius:.22,poise:8,lunge:1.5}),Ve({id:"lg_l3",name:"Arc Hook",style:"slash",windup:.16,active:.09,recovery:.34,damage:9,stamina:7,reach:.65,radius:.24,arc:.8,poise:14,lunge:1.5})],heavy:Tt({id:"lg_h",name:"Storm Strike",style:"punch",windup:.3,active:.1,recovery:.45,damage:16,stamina:16,reach:.7,radius:.26,poise:34,lunge:3.5}),special:Et({id:"lg_s",name:"Thunderclap",style:"punch",windup:.3,active:.1,recovery:.55,damage:18,stamina:26,reach:.6,poise:40,unparryable:!0,cooldown:9,fx:{type:"burst",radius:3.4}})},{id:"windblades",name:"Wind Blades",category:"magical",grip:"dual",element:"wind",damageType:"slash",length:1.2,moveMult:1.22,weight:2,color:11075545,blurb:"Gale-light twin blades with mobility bursts.",defense:At(.3,1.1,.14,.9),onHit:{},light:[Ve({id:"wb_l1",name:"Gust Cut",style:"slash",windup:.13,active:.09,recovery:.2,damage:7,stamina:6,reach:1.2,lunge:1.5,poise:8}),Ve({id:"wb_l2",name:"Zephyr Cut",style:"slash",windup:.13,active:.09,recovery:.2,damage:7,stamina:6,reach:1.2,lunge:1.5,poise:8}),Ve({id:"wb_l3",name:"Cyclone Cut",style:"diag",windup:.15,active:.09,recovery:.3,damage:8,stamina:7,reach:1.2,lunge:1.5,poise:10})],heavy:Tt({id:"wb_h",name:"Tempest Sweep",style:"sweep",windup:.3,active:.12,recovery:.42,damage:14,stamina:14,reach:1.3,arc:1.8,poise:24,knock:4}),special:Et({id:"wb_s",name:"Gale Dash",style:"slash",windup:.12,active:.2,recovery:.4,damage:16,stamina:20,reach:1.3,lunge:12,arc:1.2,poise:20,cooldown:7,fx:{type:"ward",ward:0,dur:3,haste:.25}})},{id:"earthmaul",name:"Earthen Maul",category:"magical",grip:"two",element:"earth",damageType:"blunt",length:1.9,moveMult:.85,weight:10,color:11045466,blurb:"Quarried stone head; blows shake the ground.",defense:At(.55,1,.13,1),onHit:{poiseDmg:12},light:[Ve({id:"em_l1",name:"Boulder Swing",style:"diag",windup:.36,active:.14,recovery:.52,damage:17,stamina:15,reach:1.9,poise:32,knock:3,armorBreak:2}),Ve({id:"em_l2",name:"Rockslide",style:"slash",windup:.36,active:.14,recovery:.52,damage:17,stamina:15,reach:1.9,poise:32,knock:3,armorBreak:2})],heavy:Tt({id:"em_h",name:"Seismic Slam",style:"smash",windup:.75,active:.2,recovery:.85,damage:34,stamina:30,reach:1.9,poise:65,knock:5,armorBreak:3,fx:{type:"wave",speed:10,radius:1,life:.7}}),special:Et({id:"em_s",name:"Quake",style:"smash",windup:.6,active:.18,recovery:.8,damage:24,stamina:28,reach:1.9,poise:60,knock:5,cooldown:10,fx:{type:"wave",speed:11,radius:1.5,life:1.6}})},{id:"lightblade",name:"Radiant Saber",category:"magical",grip:"one",element:"light",damageType:"energy",length:1.5,moveMult:1.02,weight:3,color:16773296,blurb:"Precise radiant cuts and a protective ward.",defense:At(.7,.75,.26,1.2),onHit:{staminaDmg:4},light:[Ve({id:"lb_l1",name:"Gleam",style:"slash",windup:.2,active:.12,recovery:.3,damage:10,stamina:9,reach:1.5}),Ve({id:"lb_l2",name:"Glint",style:"diag",windup:.2,active:.12,recovery:.3,damage:10,stamina:9,reach:1.5}),Ve({id:"lb_l3",name:"Piercing Ray",style:"thrust",windup:.22,active:.1,recovery:.4,damage:12,stamina:10,reach:1.7,radius:.12,lunge:2.5})],heavy:Tt({id:"lb_h",name:"Dawnfall",style:"overhead",windup:.42,active:.14,recovery:.5,damage:20,stamina:20,reach:1.5,poise:30,lunge:2.5}),special:Et({id:"lb_s",name:"Radiant Ward",style:"slash",windup:.25,active:.1,recovery:.35,damage:0,stamina:20,reach:1.5,melee:!1,cooldown:12,fx:{type:"ward",ward:28,dur:4}})},{id:"cyberblade",name:"Plasma Piston Blade",category:"magical",grip:"one",element:"energy",damageType:"energy",length:1.4,moveMult:.98,weight:5,color:5822719,blurb:"Mechanical blade that vents energy bursts.",defense:At(.55,.9,.16,1),onHit:{staminaDmg:5},light:[Ve({id:"cb_l1",name:"Servo Slash",style:"slash",windup:.22,active:.12,recovery:.32,damage:11,stamina:10,reach:1.4}),Ve({id:"cb_l2",name:"Piston Thrust",style:"thrust",windup:.24,active:.1,recovery:.4,damage:13,stamina:11,reach:1.5,radius:.14,lunge:2.5})],heavy:Tt({id:"cb_h",name:"Overclock Strike",style:"overhead",windup:.45,active:.14,recovery:.55,damage:25,stamina:22,reach:1.4,poise:35,lunge:2.5}),special:Et({id:"cb_s",name:"Plasma Burst",style:"thrust",windup:.3,active:.08,recovery:.45,damage:22,stamina:24,reach:1.4,poise:30,cooldown:7,fx:{type:"projectile",speed:30,radius:.35,gravity:0,life:1.4}})},{id:"energyshield",name:"Energy Shield",category:"magical",grip:"shield",element:"energy",damageType:"energy",length:.9,moveMult:.98,weight:4,color:5812479,blurb:"Wide protective field. Blocks charge a counter pulse.",defense:At(.85,.6,.24,1.5,!0),onHit:{staminaDmg:3},light:[Ve({id:"es_l1",name:"Shield Bash",style:"bash",windup:.24,active:.1,recovery:.4,damage:7,stamina:8,reach:.9,radius:.35,poise:28,knock:3,lunge:1.5})],heavy:Tt({id:"es_h",name:"Pulse Slam",style:"bash",windup:.5,active:.12,recovery:.6,damage:12,stamina:14,reach:1,radius:.4,poise:55,knock:5,lunge:2.5}),special:Et({id:"es_s",name:"Counter Pulse",style:"bash",windup:.18,active:.1,recovery:.4,damage:12,stamina:10,reach:.9,poise:50,knock:7,unparryable:!0,cooldown:3,fx:{type:"pulse",radius:3}})}],G_={id:"kiteshield",name:"Kite Shield",category:"physical",grip:"shield",element:"none",damageType:"blunt",length:.9,moveMult:.96,weight:6,color:8030376,blurb:"Solid steel shield. Reliable cover for one-handed weapons.",defense:At(.75,.7,.2,1.3),onHit:{},light:[Ve({id:"ks_l1",name:"Shield Bash",style:"bash",windup:.26,active:.1,recovery:.42,damage:6,stamina:8,reach:.9,radius:.35,poise:28,knock:3,lunge:1.5})],heavy:Tt({id:"ks_h",name:"Heavy Bash",style:"bash",windup:.5,active:.12,recovery:.6,damage:10,stamina:14,reach:1,radius:.4,poise:50,knock:5,lunge:2.5}),special:Et({id:"ks_s",name:"Shield Charge",style:"bash",windup:.3,active:.22,recovery:.55,damage:12,stamina:22,reach:.9,radius:.4,poise:60,knock:6,lunge:8,cooldown:8})},ti={};for(const s of[...Vu,G_])ti[s.id]=s;const as=Vu.map(s=>s.id),_i=s=>{const e=ti[s];if(!e)throw new Error("Unknown weapon "+s);return e},xa=s=>_i(s).grip==="one",hs=()=>({main:"longsword",secondary:"greatsword",shield:null,armor:{...zu}});let W_=1;class X_{constructor(e,t,n,i){N(this,"id",W_++);N(this,"pos");N(this,"vel",Yn());N(this,"yaw");N(this,"onGround",!0);N(this,"groundedT",0);N(this,"landT",0);N(this,"maxHealth",100);N(this,"health",100);N(this,"maxStamina",100);N(this,"stamina",100);N(this,"staminaDelay",0);N(this,"maxPoise",40);N(this,"poise",40);N(this,"poiseDelay",0);N(this,"armor");N(this,"slot","main");N(this,"action","idle");N(this,"actT",0);N(this,"attack",null);N(this,"comboIdx",0);N(this,"comboT",0);N(this,"buffer",null);N(this,"blockCd",0);N(this,"parryT",0);N(this,"riposteT",0);N(this,"counterCharge",0);N(this,"dodgeT",0);N(this,"dodgeDur",0);N(this,"dodgeBack",!1);N(this,"dodgeDirX",0);N(this,"dodgeDirZ",0);N(this,"staggerT",0);N(this,"staggerKind","hit");N(this,"switchT",0);N(this,"specialCd",0);N(this,"st",{burn:0,burnT:0,chillT:0,shockT:0,hasteT:0,haste:0,wardHp:0,wardT:0});N(this,"lockTarget",-1);N(this,"sprinting",!1);N(this,"burnAcc",0);N(this,"stepAcc",0);N(this,"lastHitBy",-1);this.name=e,this.team=t,this.loadout=n,this.pos=Yn(i.x,0,i.z),this.yaw=i.yaw,this.armor=Hu(n.armor),this.maxPoise=40+Th(this.armor),this.poise=this.maxPoise}get dead(){return this.action==="dead"}get weapon(){return _i(this.slot==="main"?this.loadout.main:this.loadout.secondary)}get shield(){const e=this.weapon;return e.grip==="shield"?e:this.loadout.shield&&xa(e.id)?_i(this.loadout.shield):null}get defense(){var n;const e=this.weapon.defense,t=(n=this.shield)==null?void 0:n.defense;return t&&t.blockReduction>=e.blockReduction?t:e}get weight(){return ha(this.armor)+this.weapon.weight}get moveSpeedMult(){let e=this.weapon.moveMult*(1-Math.min(.22,ha(this.armor)*.0045));return this.st.chillT>0&&(e*=.6),this.st.hasteT>0&&(e*=1+this.st.haste),e}get attackSpeed(){return(this.st.hasteT>0?1+this.st.haste*.5:1)*(this.st.chillT>0?.85:1)}get staggerResist(){return Th(this.armor)}get staminaRegen(){return Math.max(14,28-ha(this.armor)*.35)}get forward(){return{x:Math.sin(this.yaw),z:Math.cos(this.yaw)}}get right(){return{x:-Math.cos(this.yaw),z:Math.sin(this.yaw)}}armorIntegrity(){return rn.reduce((e,t)=>e+this.armor[t].dur/this.armor[t].def.durability,0)/4}spendStamina(e,t=.9){this.stamina=Math.max(0,this.stamina-e),this.staminaDelay=Math.max(this.staminaDelay,t)}}const Eh=$n({dx:.25,dy:.55,dz:.5,extend:1});function $n(s){const e=Math.hypot(s.dx,s.dy,s.dz)||1;return{dx:s.dx/e,dy:s.dy/e,dz:s.dz/e,extend:s.extend}}const ui=(s,e,t=1)=>$n({dx:Math.sin(s),dy:e,dz:Math.cos(s),extend:t}),po=(s,e,t)=>$n({dx:Zn(s.dx,e.dx,t),dy:Zn(s.dy,e.dy,t),dz:Zn(s.dz,e.dz,t),extend:Zn(s.extend,e.extend,t)});function q_(s,e,t){switch(s){case"slash":return[ui(e*t,.12),ui(-e*t,.12)];case"diag":return[ui(e*.6*t,.8),ui(-e*.6*t,-.35)];case"sweep":return[ui(e*t,-.22),ui(-e*t,-.22)];case"overhead":case"smash":return[$n({dx:0,dy:1,dz:-.35,extend:1}),$n({dx:0,dy:-.3,dz:1,extend:1})];case"thrust":case"punch":case"bash":return[$n({dx:.12*t,dy:.05,dz:.25,extend:.3}),$n({dx:0,dy:.06,dz:1,extend:1})];case"spin":return[ui(-Math.PI*t,.1),ui(Math.PI*t,.1)];case"shoot":return[$n({dx:0,dy:.05,dz:1,extend:1}),$n({dx:0,dy:.05,dz:1,extend:1})]}}function Gu(s,e,t,n){const[i,r]=q_(s.style,s.arc,n);return e==="windup"?po(Eh,i,_a(Math.min(1,t))):e==="active"?po(i,r,ku(Math.min(1,t))):po(r,Eh,_a(Math.min(1,t)))}const Rn=()=>({move:{x:0,z:0},faceYaw:0,sprint:!1,blockHeld:!1,jumpPressed:!1,dodgePressed:!1,lightPressed:!1,heavyPressed:!1,specialPressed:!1,blockPressed:!1,switchTo:0}),Gt={walk:3.4,run:6.2,backMult:.8,accelGround:38,accelAir:9,friction:30,attackFriction:12,gravity:28,jump:9.2,coyote:.1,sprintCost:8,bodyRadius:.45,jumpCost:6};function Ah(s){switch(s.action){case"attack":{const e=s.attack.phase;return e==="windup"?.35:e==="active"?.2:.5}case"block":return .45;case"switch":return .6;case"dodge":case"stagger":case"dead":return 0;default:return 1}}function Y_(s){switch(s.action){case"attack":{const e=s.attack.phase;return e==="windup"?7:e==="active"?.5:3}case"dodge":case"stagger":case"dead":return 0;default:return 14}}function Rh(s,e,t,n,i){const o={jumped:!1,landed:!1},c=Y_(s);if(c>0){const l=Hi(e.faceYaw-s.yaw);s.yaw=Hi(qc(s.yaw,s.yaw+ct(l,-c*t,c*t),1))}if(s.action==="dodge"){const l=Math.max(0,s.dodgeT/s.dodgeDur),h=(s.dodgeBack?7:10.5)*(.25+.75*l);s.vel.x=s.dodgeDirX*h,s.vel.z=s.dodgeDirZ*h}else if(s.action!=="dead"){const l=Math.hypot(e.move.x,e.move.z),h=e.sprint&&s.stamina>5&&l>.1&&s.action==="idle"&&s.onGround;s.sprinting=h,h&&s.spendStamina(Gt.sprintCost*t,.5);let u=(h?Gt.run:Gt.walk)*s.moveSpeedMult*Ah(s);if(l>.1){const _=-(e.move.x*s.forward.x+e.move.z*s.forward.z)/l;_>.3&&(u*=1-(1-Gt.backMult)*_)}const d=l>.01?e.move.x/Math.max(1,l)*u:0,f=l>.01?e.move.z/Math.max(1,l)*u:0,g=d-s.vel.x,v=f-s.vel.z,m=Math.hypot(g,v),p=l>.01&&Ah(s)>0,y=(s.onGround?p?Gt.accelGround:s.action==="attack"?Gt.attackFriction:Gt.friction:Gt.accelAir)*t;m<=y||m===0?(s.vel.x=d,s.vel.z=f):(s.vel.x+=g/m*y,s.vel.z+=v/m*y)}else s.vel.x*=Math.max(0,1-6*t),s.vel.z*=Math.max(0,1-6*t);return s.onGround?s.groundedT=0:s.groundedT+=t,e.jumpPressed&&(s.action==="idle"||s.action==="block")&&s.groundedT<=Gt.coyote&&s.stamina>=Gt.jumpCost&&(s.vel.y=Gt.jump,s.onGround=!1,s.groundedT=1,s.spendStamina(Gt.jumpCost,.4),o.jumped=!0),s.vel.y-=Gt.gravity*t,s.pos.x+=s.vel.x*t,s.pos.z+=s.vel.z*t,s.pos.y+=s.vel.y*t,s.pos.y<=0?(!s.onGround&&s.vel.y<-5&&(o.landed=!0,s.landT=.18),s.pos.y=0,s.vel.y=0,s.onGround=!0):s.onGround=!1,s.landT=Math.max(0,s.landT-t),j_(s,n,i),o}function j_(s,e,t){for(const r of e.colliders){if(s.pos.y>r.h)continue;const a=s.pos.x-r.x,o=s.pos.z-r.z,c=Math.hypot(a,o),l=r.r+Gt.bodyRadius;if(c<l){const h=c>1e-5?a/c:1,u=c>1e-5?o/c:0;s.pos.x=r.x+h*l,s.pos.z=r.z+u*l}}for(const r of t){if(r===s||r.dead)continue;const a=s.pos.x-r.pos.x,o=s.pos.z-r.pos.z,c=Math.hypot(a,o),l=Gt.bodyRadius*2;if(c<l&&Math.abs(s.pos.y-r.pos.y)<1.6){const h=c>1e-5?a/c:1,u=c>1e-5?o/c:0,d=(l-c)*.5;s.pos.x+=h*d,s.pos.z+=u*d,r.pos.x-=h*d,r.pos.z-=u*d}}const n=Math.hypot(s.pos.x,s.pos.z),i=e.radius-Gt.bodyRadius;n>i&&(s.pos.x*=i/n,s.pos.z*=i/n)}const mo=1.75,Jr=.42,$_=18,K_=9;class Ch{constructor(e,t=1){N(this,"fighters",[]);N(this,"projectiles",[]);N(this,"events",[]);N(this,"hitStop",0);N(this,"time",0);N(this,"rng");N(this,"nextProj",1);this.arena=e,this.rng=vr(t)}add(e,t,n,i){const r=new X_(e,t,n,this.arena.spawns[i%this.arena.spawns.length]);return this.fighters.push(r),r}enemiesOf(e){return this.fighters.filter(t=>t.team!==e.team&&!t.dead)}nearestEnemy(e){let t=null,n=1/0;for(const i of this.enemiesOf(e)){const r=la(e.pos,i.pos);r<n&&(n=r,t=i)}return t}emit(e){this.events.push(e)}step(e,t){this.events.length=0;let n=Math.min(e,1/20);this.hitStop>0&&(this.hitStop-=e,n*=.03),this.time+=n;for(const i of this.fighters)this.updateFighter(i,t.get(i.id)??Rn(),n);this.updateProjectiles(n)}updateFighter(e,t,n){if(e.dead){Rh(e,t,n,this.arena,this.fighters);return}e.actT+=n,e.staminaDelay-=n,e.parryT-=n,e.riposteT-=n,e.specialCd-=n,e.blockCd-=n,e.comboT-=n,e.poiseDelay-=n;const i=e.st;if(i.chillT-=n,i.shockT-=n,i.hasteT-=n,i.wardT-=n,i.burnT-=n,i.wardT<=0&&(i.wardHp=0),i.burnT>0&&(e.health-=i.burn*n,e.health<=0)){this.kill(e,e.lastHitBy);return}if(e.buffer&&(e.buffer.t-=n,e.buffer.t<=0&&(e.buffer=null)),e.comboT<=0&&e.action==="idle"&&(e.comboIdx=0),e.poiseDelay<=0&&(e.poise=Math.min(e.maxPoise,e.poise+22*n)),e.staminaDelay<=0&&!e.sprinting){const a=e.staminaRegen*(e.action==="block"?.4:e.action==="attack"?.3:1);e.stamina=Math.min(e.maxStamina,e.stamina+a*n)}switch(e.action){case"idle":case"block":this.updateFree(e,t);break;case"attack":this.updateAttack(e,t,n);break;case"dodge":e.dodgeT-=n,e.dodgeT<=0&&(e.action="idle",e.actT=0);break;case"stagger":e.staggerT-=n,e.staggerT<=0&&(e.action="idle",e.actT=0);break;case"switch":e.switchT-=n,e.switchT<=0&&(e.action="idle",e.actT=0);break}if(e.dead)return;const r=Rh(e,t,n,this.arena,this.fighters);r.jumped&&this.emit({type:"jump",pos:{...e.pos},attacker:e.id}),r.landed&&this.emit({type:"land",pos:{...e.pos},attacker:e.id}),e.onGround&&e.action!=="dodge"&&(e.stepAcc+=Math.hypot(e.vel.x,e.vel.z)*n,e.stepAcc>(e.sprinting?2.3:1.6)&&(e.stepAcc=0,this.emit({type:"step",pos:{...e.pos},attacker:e.id})))}updateFree(e,t){t.switchTo&&this.startSwitch(e,t.switchTo)||t.dodgePressed&&this.startDodge(e,t)||t.heavyPressed&&this.startAttack(e,"heavy",t)||t.specialPressed&&this.startAttack(e,"special",t)||t.lightPressed&&this.startAttack(e,"light",t)||(t.blockHeld&&e.weapon.grip!=="bow"||t.blockHeld&&e.weapon.grip==="bow"?e.action!=="block"&&(e.action="block",e.actT=0,t.blockPressed&&e.blockCd<=0&&(e.parryT=e.defense.parryWindow,e.blockCd=.45)):e.action==="block"&&(e.action="idle",e.actT=0))}startSwitch(e,t){const n=t===3?e.slot==="main"?"secondary":"main":t===1?"main":"secondary";return n===e.slot?!1:(e.slot=n,e.action="switch",e.switchT=.35,e.actT=0,e.comboIdx=0,e.comboT=0,e.attack=null,e.buffer=null,e.parryT=0,this.emit({type:"switch",pos:{...e.pos},attacker:e.id,weaponId:e.weapon.id}),!0)}startDodge(e,t){const n=Math.hypot(t.move.x,t.move.z),i=n<.2,r=i?K_:$_;return e.stamina<r||!e.onGround?!1:(e.spendStamina(r,.7),e.dodgeBack=i,i?(e.dodgeDirX=-e.forward.x,e.dodgeDirZ=-e.forward.z):(e.dodgeDirX=t.move.x/n,e.dodgeDirZ=t.move.z/n),e.dodgeDur=i?.32:.42,e.dodgeT=e.dodgeDur,e.action="dodge",e.actT=0,e.attack=null,e.comboIdx=0,e.comboT=0,e.parryT=0,e.buffer=null,this.emit({type:"dodge",pos:{...e.pos},attacker:e.id,dir:Yn(e.dodgeDirX,0,e.dodgeDirZ)}),!0)}startAttack(e,t,n){var m;const i=e.weapon;let r,a=0;if(t==="light"?(a=(e.comboT>0?e.comboIdx:0)%i.light.length,r=i.light[a]):r=t==="heavy"?i.heavy:i.special,t==="special"&&(e.specialCd>0||((m=r.fx)==null?void 0:m.type)==="pulse"&&e.counterCharge<1)||e.stamina<r.stamina*.6)return!1;const o=Math.hypot(n.move.x,n.move.z),c=o>.3?(n.move.x*e.forward.x+n.move.z*e.forward.z)/o:0,l=o>.3?(n.move.x*e.right.x+n.move.z*e.right.z)/o:0,h=r.melee&&t==="light"&&(r.style==="slash"||r.style==="diag");h&&c>.6&&i.grip!=="dual"?r={...r,style:"thrust",lunge:Math.max(r.lunge,3.5),radius:Math.min(r.radius,.15)}:h&&c<-.6&&(r={...r,style:"sweep",arc:r.arc*1.25,knock:r.knock*1.3});const u=l>.45?-1:l<-.45||a%2===0?1:-1,d=i.grip==="shield"?-1:i.grip==="dual"||i.grip==="gauntlet"?a%2===0?1:-1:1,f=e.riposteT>0&&r.melee;f&&(e.riposteT=0);const g=r.windup*(f?.75:1)/e.attackSpeed,v=this.specFor(e,r,f);return e.spendStamina(r.stamina,.9),e.action="attack",e.actT=0,e.parryT=0,e.buffer=null,e.attack={move:r,weapon:i,phase:"windup",t:0,dur:g,sign:u,handSide:d,hit:new Set,spec:v,riposte:f,lastP:0,group:0,lunged:!1,clanged:!1},e.comboIdx=t==="light"?a+1:0,e.comboT=99,t==="special"&&(e.specialCd=r.cooldown,this.emit({type:"special",pos:{...e.pos},attacker:e.id,weaponId:i.id,element:i.element})),f&&this.emit({type:"riposte",pos:{...e.pos},attacker:e.id}),!0}specFor(e,t,n){const i=e.weapon;return{damage:t.damage*(n?1.5:1),type:i.damageType,poise:t.poise,knock:t.knock,armorPierce:t.armorPierce,armorBreak:t.armorBreak,unparryable:t.unparryable,hitStop:t.hitStop,heavy:t.kind!=="light",element:i.element,onHit:i.onHit,weaponId:i.id,ranged:!t.melee,riposte:n}}updateAttack(e,t,n){const i=e.attack;if(!i){e.action="idle";return}t.lightPressed?e.buffer={kind:"light",t:.28}:t.heavyPressed?e.buffer={kind:"heavy",t:.28}:t.specialPressed&&(e.buffer={kind:"special",t:.28});const r=i.t/i.dur;if(i.phase==="recovery"){if(t.dodgePressed&&r>.35&&this.startDodge(e,t))return;if(t.blockPressed&&r>.5){e.attack=null,e.action="idle",e.comboT=0,this.updateFree(e,t);return}if(e.buffer&&r>=.55){const a=e.buffer;if(e.attack=null,e.action="idle",this.startAttack(e,a.kind,t))return}}if(i.t+=n,i.phase==="windup"&&i.t>=i.dur)i.phase="active",i.t=0,i.dur=i.move.active/e.attackSpeed,i.lastP=0,i.group=0,this.onActiveStart(e,i.move);else if(i.phase==="active"){const a=ct(i.t/i.dur,0,1);i.move.melee&&this.sweepTest(e,i.lastP,a),i.lastP=a,(i.t>=i.dur||i.clanged)&&(i.phase="recovery",i.t=0,i.dur=(i.move.recovery+(i.clanged?.25:0))/e.attackSpeed)}else i.phase==="recovery"&&i.t>=i.dur&&(e.attack=null,e.action="idle",e.actT=0,e.comboT=.3)}onActiveStart(e,t){const n=e.attack;t.lunge>0&&!n.lunged&&(e.vel.x+=e.forward.x*t.lunge,e.vel.z+=e.forward.z*t.lunge,n.lunged=!0,t.lunge>=6&&this.emit({type:"dash",pos:{...e.pos},attacker:e.id,element:e.weapon.element})),this.emit({type:"swing",pos:{...e.pos},attacker:e.id,weaponId:e.weapon.id,element:e.weapon.element,heavy:t.kind!=="light"});const i=t.fx;if(!i)return;const r=n.spec;switch(i.type){case"projectile":{const a=i.count??1;for(let o=0;o<a;o++)this.spawnProjectile(e,r,i.speed??30,(o-(a-1)/2)*(i.spread??0),i.radius??.12,i.gravity??0,i.life??2,!1,r.ranged?"arrow":"bolt");break}case"wave":this.spawnProjectile(e,r,i.speed??12,0,i.radius??.9,0,i.life??1.2,!0,"wave"),this.emit({type:"wave",pos:{...e.pos},attacker:e.id,element:e.weapon.element});break;case"burst":this.aoe(e,{...r,ranged:!1},i.radius??3,!1);break;case"pulse":{const a=e.counterCharge;e.counterCharge=0,this.aoe(e,{...r,damage:r.damage+8*a,poise:r.poise+15*a},i.radius??3,!0);break}case"ward":i.ward&&(e.st.wardHp=i.ward,e.st.wardT=i.dur??4),i.haste&&(e.st.haste=i.haste,e.st.hasteT=i.dur??3),this.emit({type:"ward",pos:{...e.pos},attacker:e.id,element:e.weapon.element});break}}weaponSegment(e,t){const n=e.attack;if(!n)return null;const i=Gu(n.move,"active",t,n.sign),r=n.move.style==="spin",a=r?0:.32*n.handSide,o=1.25,c=r?.1:.3,l=n.move.reach*i.extend,h=e.forward,u=e.right,d=(f,g,v)=>({x:e.pos.x+u.x*f+h.x*v,y:e.pos.y+g,z:e.pos.z+u.z*f+h.z*v});return{a:d(a,o,c),b:d(a+i.dx*l,o+i.dy*l,c+i.dz*l)}}sweepTest(e,t,n){const i=e.attack,r=i.move,a=this.enemiesOf(e),o=4;for(let c=1;c<=o;c++){const l=t+(n-t)*(c/o);if(r.multi>1){const u=Math.min(r.multi-1,Math.floor(l*r.multi));u!==i.group&&(i.group=u,i.hit.clear())}const h=this.weaponSegment(e,l);if(!h)return;if(r.style!=="bash"){for(const u of this.arena.colliders)if(h.b.y<u.h&&Math.hypot(h.b.x-u.x,h.b.z-u.z)<u.r){i.clanged=!0,this.emit({type:"clang",pos:{...h.b},attacker:e.id,weaponId:i.weapon.id});return}}for(const u of a){if(i.hit.has(u.id))continue;const d={x:u.pos.x,y:u.pos.y,z:u.pos.z},f={x:u.pos.x,y:u.pos.y+mo,z:u.pos.z},g=r.radius+Jr;if(wh(h.a,h.b,d,f)<=g*g){i.hit.add(u.id);const v={x:(h.b.x+u.pos.x)/2,y:ct(h.b.y,u.pos.y+.2,u.pos.y+mo),z:(h.b.z+u.pos.z)/2};this.resolveHit(e,u,i.spec,v,e.pos)}}}}spawnProjectile(e,t,n,i,r,a,o,c,l){let h=e.yaw,u=0;const d=this.nearestEnemy(e);if(d&&!c){const v=d.pos.x-e.pos.x,m=d.pos.z-e.pos.z,p=Math.hypot(v,m);Math.abs(Hi(gs(v,m)-e.yaw))<.6&&p>.1&&(h=gs(v,m),u=(d.pos.y+1.2-(e.pos.y+1.35))/(p/n)+.5*a*(p/n))}h+=i;const f=z_(h),g=c?Yn(e.pos.x+f.x*1.2,.3,e.pos.z+f.z*1.2):Yn(e.pos.x+f.x*.6,e.pos.y+1.35,e.pos.z+f.z*.6);this.projectiles.push({id:this.nextProj++,owner:e.id,team:e.team,pos:g,prev:{...g},vel:Yn(f.x*n,c?0:u,f.z*n),radius:r,life:o,gravity:a,wave:c,spec:{...t},hit:new Set,dead:!1,kind:l}),this.emit({type:"projectile",pos:{...g},attacker:e.id,element:t.element,dir:Yn(f.x,0,f.z),weaponId:t.weaponId})}updateProjectiles(e){for(const t of this.projectiles){if(t.prev={...t.pos},t.vel.y-=t.gravity*e,t.pos.x+=t.vel.x*e,t.pos.y+=t.vel.y*e,t.pos.z+=t.vel.z*e,t.life-=e,t.life<=0||Math.hypot(t.pos.x,t.pos.z)>this.arena.radius+2||!t.wave&&t.pos.y<0){t.dead=!0;continue}for(const i of this.arena.colliders)if(t.pos.y<i.h&&Math.hypot(t.pos.x-i.x,t.pos.z-i.z)<i.r+t.radius){t.dead=!0,this.emit({type:"clang",pos:{...t.pos}});break}if(t.dead)continue;const n=this.fighters.find(i=>i.id===t.owner);for(const i of this.fighters){if(i.team===t.team||i.dead||t.hit.has(i.id))continue;let r;if(t.wave?r=i.pos.y<.8&&la(t.pos,i.pos)<t.radius+Jr:r=wh(t.prev,t.pos,i.pos,Yn(i.pos.x,i.pos.y+mo,i.pos.z))<=(t.radius+Jr)**2,!r)continue;if(t.hit.add(i.id),this.resolveHit(n??null,i,t.spec,{...t.pos},n?n.pos:t.prev,!0)!=="dodge"){t.dead=!0;break}}}this.projectiles=this.projectiles.filter(t=>!t.dead)}aoe(e,t,n,i){this.emit({type:i?"pulse":"burst",pos:{...e.pos},attacker:e.id,element:t.element,radius:n});for(const r of this.enemiesOf(e))la(e.pos,r.pos)>n+Jr||Math.abs(r.pos.y-e.pos.y)>1.6||this.resolveHit(e,r,t,{x:r.pos.x,y:r.pos.y+1.1,z:r.pos.z},e.pos)}resolveHit(e,t,n,i,r,a=!1){if(t.dead)return"none";const o=r.x-t.pos.x,c=r.z-t.pos.z,l=Math.hypot(o,c)||1,h=o/l,u=c/l,d=e==null?void 0:e.id;if(t.action==="dodge"){const L=t.dodgeDur-t.dodgeT;if(L>.05&&L<t.dodgeDur-.12)return this.emit({type:"dodge",pos:i,attacker:d,target:t.id,blocked:!0}),"dodge"}const f=t.defense,g=t.forward.x*h+t.forward.z*u>Math.cos(f.blockArc);if(t.action==="block"&&g){if(t.parryT>0&&!n.unparryable)return t.parryT=0,t.riposteT=1.4,t.stamina=Math.min(t.maxStamina,t.stamina+8),t.action="idle",e&&!a&&this.stagger(e,.9,"parried"),this.hitStop=Math.max(this.hitStop,.12),this.emit({type:"parry",pos:i,attacker:d,target:t.id,element:n.element,heavy:n.heavy}),"parry";const L=n.damage*f.blockStamina*(n.heavy?1.3:1)+n.poise*.1;if(t.stamina>=L){t.spendStamina(L,1.1);const C=n.damage*(1-f.blockReduction);return t.health-=C,t.lastHitBy=d??-1,t.vel.x-=h*n.knock*.4,t.vel.z-=u*n.knock*.4,f.counterPulse&&(t.counterCharge=Math.min(3,t.counterCharge+1)),this.hitStop=Math.max(this.hitStop,n.hitStop*.6),this.emit({type:"block",pos:i,attacker:d,target:t.id,element:n.element,heavy:n.heavy,dmg:C}),t.health<=0&&this.kill(t,d??-1),"block"}t.stamina=0,t.staminaDelay=2,this.stagger(t,.9,"guardbreak");const R=n.damage*.6;return t.health-=R,t.lastHitBy=d??-1,this.hitStop=Math.max(this.hitStop,.1),this.emit({type:"guardbreak",pos:i,attacker:d,target:t.id,dmg:R}),t.health<=0&&this.kill(t,d??-1),"guardbreak"}const v=i.y-t.pos.y,m=v>1.5?"head":v<.8?"legs":this.rng()<.18?"arms":"chest",p=t.armor[m],M=ct(V_(p,n.type)*(1-n.armorPierce),0,.85);let y=n.damage*(1-M);if(p.broken||(p.dur-=n.damage*.55*n.armorBreak*(n.type==="blunt"?1.4:1),p.dur<=0&&(p.broken=!0,p.dur=0,this.emit({type:"armorbreak",pos:i,target:t.id,zone:m}))),t.st.wardHp>0){const L=Math.min(t.st.wardHp,y);t.st.wardHp-=L,y-=L,this.emit({type:"ward",pos:i,target:t.id,blocked:!0})}t.health-=y,t.lastHitBy=d??-1,t.vel.x-=h*n.knock,t.vel.z-=u*n.knock;const _=n.onHit;return _.burn&&(t.st.burn=_.burn,t.st.burnT=4),_.chill&&(t.st.chillT=_.chill+1.5),_.shock&&(t.st.shockT=_.shock),_.staminaDmg&&t.spendStamina(_.staminaDmg+(_.shock?6:0),1.2),t.poise-=n.poise+(_.poiseDmg??0)+(_.shock?10:0),t.poiseDelay=1.5,t.poise<=0&&t.health>0&&(t.poise=t.maxPoise*.6,this.stagger(t,ct(.28+n.poise*.011-t.staggerResist*.008,.22,.95),"hit")),this.hitStop=Math.max(this.hitStop,n.hitStop),this.emit({type:"hit",pos:i,attacker:d,target:t.id,element:n.element,heavy:n.heavy,dmg:y,zone:m,weaponId:n.weaponId,dir:Yn(-h,0,-u)}),t.health<=0&&this.kill(t,d??-1),"hit"}stagger(e,t,n){e.dead||(e.action="stagger",e.staggerT=t,e.staggerKind=n,e.actT=0,e.attack=null,e.buffer=null,e.comboIdx=0,e.comboT=0,e.parryT=0)}kill(e,t){e.dead||(e.health=0,e.action="dead",e.actT=0,e.attack=null,e.lastHitBy=t,this.emit({type:"death",pos:{...e.pos},target:e.id,attacker:t}))}winner(){const e=this.fighters.filter(n=>!n.dead),t=new Set(e.map(n=>n.team));return t.size===1?[...t][0]:t.size===0?-1:null}}const J_={novice:{reaction:.55,aggression:.35,block:.35,parry:.03,dodge:.15,staminaFloor:5,tactic:5,mistake:.25,punish:.2},warrior:{reaction:.36,aggression:.55,block:.55,parry:.15,dodge:.35,staminaFloor:20,tactic:4,mistake:.12,punish:.45},veteran:{reaction:.22,aggression:.7,block:.7,parry:.4,dodge:.55,staminaFloor:28,tactic:3,mistake:.05,punish:.7},master:{reaction:.13,aggression:.82,block:.8,parry:.65,dodge:.7,staminaFloor:34,tactic:2.2,mistake:.015,punish:.9}};class Z_{constructor(e,t,n=7){N(this,"p");N(this,"rng");N(this,"tactic","circle");N(this,"tacticT",0);N(this,"strafe",1);N(this,"strafeT",0);N(this,"seen",new Map);N(this,"reactT",-1);N(this,"reaction","none");N(this,"thinkT",0);N(this,"wantAtk",null);N(this,"lastPhase","");this.me=e,this.difficulty=t,this.p=J_[t],this.rng=vr(n+e.id*131)}think(e,t){var C;const n=this.me,i=Rn(),r=e.nearestEnemy(n);if(n.dead||!r)return i;const a=r.pos.x-n.pos.x,o=r.pos.z-n.pos.z,c=Math.hypot(a,o)||.001,l=gs(a,o);i.faceYaw=l;const h=a/c,u=o/c,d=n.weapon,f=this.bestReach(n),g=d.grip==="bow";if(this.tacticT-=t,this.strafeT-=t,this.thinkT-=t,this.tacticT<=0){this.tacticT=this.p.tactic*(.7+this.rng()*.6);const E=this.rng(),b=n.stamina<this.p.staminaFloor+10||n.health<30;this.tactic=g?c<5?"retreat":"poke":b?E<.6?"retreat":"circle":E<this.p.aggression*.55?"pressure":E<.7?"circle":E<.85?"bait":"poke"}this.strafeT<=0&&(this.strafeT=1+this.rng()*2,this.strafe=this.rng()<.5?-1:1);const v=r.action==="attack"&&r.attack?r.attack:null,m=v?r.id+":"+r.comboIdx+":"+v.move.id:"";if(v&&v.phase==="windup"&&m!==this.lastPhase&&c<f+v.move.reach+1.5){this.lastPhase=m,this.reactT=this.p.reaction*(.8+this.rng()*.5);const E=this.rng(),b=E<this.p.parry&&n.defense.parryWindow>0&&!v.move.unparryable;this.reaction=b?"parry":E<this.p.parry+this.p.block*.6&&!v.move.unparryable?"block":this.rng()<this.p.dodge?"dodge":this.rng()<this.p.block?"block":"none",v.move.unparryable&&this.reaction==="block"&&(this.reaction="dodge"),v.move.melee||(this.reaction=this.rng()<this.p.dodge?"dodge":"block")}v||(this.lastPhase="",this.reaction!=="none"&&this.reactT<-.6&&(this.reaction="none")),this.reactT>-1&&(this.reactT-=t);const p=n.action==="idle"||n.action==="block";if(v&&this.reaction!=="none"&&this.reactT<=0&&this.reactT>-1){if(this.reaction==="dodge"&&p)i.dodgePressed=!0,this.sideStep(i,n,h,u),this.reaction="none";else if((this.reaction==="block"||this.reaction==="parry")&&(i.blockHeld=!0,this.reaction==="parry")){const E=v.phase==="windup"?v.dur-v.t:0;n.action!=="block"&&E<n.defense.parryWindow*.8&&E>0?(i.blockPressed=!0,this.reaction="block"):i.blockHeld=n.action==="block"||E<.25}}if(i.blockHeld||i.dodgePressed)return this.moveBy(i,0,0),this.finish(i,c);const M=r.action==="stagger"||(v==null?void 0:v.phase)==="recovery"||r.action==="switch",y=c<f;if(M&&p&&this.rng()<this.p.punish*t*8)return y?(this.attackNow(i,n,r,c),this.finish(i,c)):(this.moveBy(i,h,u,!0),this.finish(i,c));if(n.riposteT>0&&p&&c<f+.5)return i.lightPressed=!0,this.finish(i,c);const _=g?8:Math.max(1.6,f*.85);switch(this.tactic){case"pressure":this.moveBy(i,h,u),c>_+.4&&(i.sprint=c>_+3&&n.stamina>this.p.staminaFloor);break;case"circle":{const E=bh(l),b=this.strafe,x=c>_+1?.7:c<_-.6?-.5:0;this.moveBy(i,E.x*b+h*x,E.z*b+u*x);break}case"bait":{const E=c>_+1.6?.8:c<_+.8?-.6:0;this.moveBy(i,h*E,u*E);break}case"poke":{const E=c>_?.8:c<_-.5?-.8:0;this.moveBy(i,h*E,u*E);break}case"retreat":{const E=bh(l);this.moveBy(i,-h*.8+E.x*this.strafe*.4,-u*.8+E.z*this.strafe*.4);break}}const L=Math.hypot(n.pos.x,n.pos.z);if(L>12.5&&this.moveBy(i,-n.pos.x/L,-n.pos.z/L),e.projectiles.find(E=>E.wave&&E.team!==n.team&&la(E.pos,n.pos)<4)&&p&&this.rng()<.12+this.p.dodge*.3&&(i.jumpPressed=!0),p&&this.thinkT<=0){this.thinkT=(.25+this.rng()*.5)*(1.6-this.p.aggression);const E=n.stamina>this.p.staminaFloor&&n.action!=="block";this.rng()<this.p.mistake&&c<f+1?this.moveBy(i,0,0):E&&(y||g&&c>3&&c<14)&&this.rng()<this.p.aggression&&this.tactic!=="retreat"&&this.attackNow(i,n,r,c)}if(n.action==="attack"&&((C=n.attack)==null?void 0:C.phase)==="recovery"&&y&&n.stamina>this.p.staminaFloor&&this.rng()<this.p.aggression*t*3&&n.comboIdx<d.light.length&&(i.lightPressed=!0),p&&n.action==="idle"&&this.rng()<t*.15){const E=n.slot==="main"?n.loadout.secondary:n.loadout.main;E!==d.id&&(g&&c<3||!g&&c>8&&E==="bow")&&(i.switchTo=3)}return this.finish(i,c)}attackNow(e,t,n,i){var u,d,f,g,v,m;const r=t.weapon,a=this.rng(),o=r.special;if(t.specialCd<=0&&t.stamina>=o.stamina&&(((u=o.fx)==null?void 0:u.type)!=="pulse"||t.counterCharge>=1)&&(((d=o.fx)==null?void 0:d.type)==="ward"&&(t.health<70||i<4)&&a<.5||((f=o.fx)==null?void 0:f.type)==="burst"&&i<(o.fx.radius??3)&&a<.5||((g=o.fx)==null?void 0:g.type)==="pulse"&&i<(o.fx.radius??3)||(((v=o.fx)==null?void 0:v.type)==="projectile"||((m=o.fx)==null?void 0:m.type)==="wave")&&i>3.5&&a<.45||!o.fx&&i<r.light[0].reach+1&&a<.3||o.lunge>0&&i>3&&a<.4)){e.specialPressed=!0;return}const l=t.stamina>r.heavy.stamina+this.p.staminaFloor,h=n.action==="block";l&&(h&&a<.55||a<.2+(1-this.p.aggression)*.1)?e.heavyPressed=!0:e.lightPressed=!0,e.move.x+=0,e.move.z+=0}bestReach(e){const t=e.weapon;return t.light[0].reach+.7+(t.light[0].lunge>0?.6:0)}moveBy(e,t,n,i=!1){const r=Math.hypot(t,n);if(r<1e-4){e.move.x=0,e.move.z=0;return}const a=Math.min(1,r);e.move.x=t/r*a,e.move.z=n/r*a,i&&(e.sprint=!0)}sideStep(e,t,n,i){const r=this.strafe;e.move.x=-i*r+n*-.2,e.move.z=n*r+i*-.2;const a=Math.hypot(e.move.x,e.move.z)||1;e.move.x/=a,e.move.z/=a}finish(e,t){return e.move.x=ct(e.move.x,-1,1),e.move.z=ct(e.move.z,-1,1),e}}const ua=(()=>{const s=[];for(let e=0;e<4;e++){const t=Math.PI/4+e*Math.PI/2;s.push({x:Math.sin(t)*9.5,z:Math.cos(t)*9.5,r:.7,h:1.6})}return{id:"colosseum",name:"The Sunken Colosseum",radius:15,colliders:s,spawns:[{x:0,z:-5,yaw:0},{x:0,z:5,yaw:Math.PI}]}})();function go(s,e,t){const n=document.createElement("canvas");n.width=n.height=s,e(n.getContext("2d"),s);const i=new qf(n);return i.colorSpace=Ut,i.anisotropy=4,t&&(i.wrapS=i.wrapT=Oi,i.repeat.set(t[0],t[1])),i}function Q_(s){const e=ua,t=e.radius,n=vr(2024),i=new Bt;i.name="colosseum",s.add(i),s.background=new Ce(1776174),s.fog=new Pc(1907238,28,85);const r=new Ue(new nn(120,24,12),new Dn({side:Xt,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec3 vP; void main(){ float h=normalize(vP).y; vec3 hor=vec3(0.95,0.52,0.32), mid=vec3(0.32,0.2,0.4), top=vec3(0.05,0.06,0.16); vec3 c=mix(hor,mid,smoothstep(-0.05,0.25,h)); c=mix(c,top,smoothstep(0.2,0.8,h)); gl_FragColor=vec4(c,1.0); }"}));i.add(r);const a=new Ue(new os(7,24),new Ft({color:16756848,fog:!1}));a.position.set(-70,22,60),a.lookAt(0,0,0),i.add(a);const o=go(512,(D,H)=>{D.fillStyle="#b79a6b",D.fillRect(0,0,H,H);for(let U=0;U<9e3;U++){const j=150+Math.floor(n()*70);D.fillStyle=`rgba(${j},${j-22},${j-62},0.35)`,D.fillRect(n()*H,n()*H,1+n()*2,1+n()*2)}D.strokeStyle="rgba(80,55,30,0.35)",D.lineWidth=3;for(let U=0;U<26;U++){D.beginPath();const j=n()*H;D.moveTo(0,j),D.bezierCurveTo(H*.3,j+14*(n()-.5),H*.7,j+14*(n()-.5),H,j+10*(n()-.5)),D.stroke()}},[3,3]),c=new Ue(new os(t,64),new Ct({map:o,roughness:1,metalness:0}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,i.add(c);const l=go(1024,(D,H)=>{D.clearRect(0,0,H,H),D.translate(H/2,H/2),D.strokeStyle="rgba(60,30,20,0.55)",D.lineWidth=6;for(const U of[.96,.62,.3])D.beginPath(),D.arc(0,0,H/2*U,0,Math.PI*2),D.stroke();D.lineWidth=4;for(let U=0;U<12;U++)D.save(),D.rotate(U*Math.PI/6),D.beginPath(),D.moveTo(0,-H/2*.3),D.lineTo(0,-H/2*.62),D.stroke(),D.restore();D.strokeStyle="rgba(190,140,50,0.45)",D.lineWidth=5,D.beginPath();for(let U=0;U<8;U++){const j=U*Math.PI/4,ie=H/2*.3;D.lineTo(Math.cos(j)*ie,Math.sin(j)*ie)}D.closePath(),D.stroke()}),h=new Ue(new os(t,64),new Ft({map:l,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));h.rotation.x=-Math.PI/2,h.position.y=.01,i.add(h);const u=go(256,(D,H)=>{D.fillStyle="#6d6a66",D.fillRect(0,0,H,H);for(let U=0;U<H;U+=32)for(let j=U/32%2?0:-32;j<H;j+=64){const ie=90+Math.floor(n()*40);D.fillStyle=`rgb(${ie},${ie-4},${ie-10})`,D.fillRect(j+2,U+2,60,28)}for(let U=0;U<1200;U++)D.fillStyle=`rgba(0,0,0,${n()*.12})`,D.fillRect(n()*H,n()*H,2,2)},[24,2]),d=new Ct({map:u,roughness:.95,side:Xt}),f=new Ue(new gt(t+.7,t+.7,3.2,64,1,!0),d);f.position.y=1.6,f.receiveShadow=!0,i.add(f);const g=new Ue(new mr(t+.7,.22,6,64),new Ct({color:9143160,roughness:.8}));g.rotation.x=Math.PI/2,g.position.y=3.2,i.add(g);const v=new Ct({color:5789011,roughness:1,side:Wt}),m=d.clone();for(let D=0;D<6;D++){const H=t+.7+D*1.7,U=3.2+D*1.1,j=new Ue(new fr(H,H+1.7,64),v);j.rotation.x=-Math.PI/2,j.position.y=U,i.add(j);const ie=new Ue(new gt(H+1.7,H+1.7,1.1,64,1,!0),m);ie.position.y=U+.55,i.add(ie)}const p=28,M=new yt(.7,4.4,.7),y=new yt(2.4,.5,.8),_=new oa(M,new Ct({color:9406330,roughness:.9}),p),L=new oa(y,new Ct({color:8156266,roughness:.9}),p),R=new Ge,C=new pn,E=new I(1,1,1);for(let D=0;D<p;D++){const H=D/p*Math.PI*2,U=t+.7+6*1.7+.8;C.setFromAxisAngle(new I(0,1,0),H),R.compose(new I(Math.sin(H)*U,3.2+6*1.1+2.2,Math.cos(H)*U),C,E),_.setMatrixAt(D,R);const j=H+Math.PI/p;C.setFromAxisAngle(new I(0,1,0),j+Math.PI/2),R.compose(new I(Math.sin(j)*U,3.2+6*1.1+4.6,Math.cos(j)*U),C,E),L.setMatrixAt(D,R)}_.castShadow=!0,i.add(_,L);const b=360,x=new oa(new wa(.22,.5,2,5),new Ct({color:1841696,roughness:1}),b);for(let D=0;D<b;D++){const H=Math.floor(n()*6),U=n()*Math.PI*2,j=t+.7+H*1.7+.5+n()*.9;R.compose(new I(Math.sin(U)*j,3.2+H*1.1+.55,Math.cos(U)*j),C.setFromAxisAngle(new I(0,1,0),U),new I(1,.85+n()*.4,1)),x.setMatrixAt(D,R),x.setColorAt(D,new Ce().setHSL(n()*.12,.3,.1+n()*.08))}i.add(x);const T=new Ct({color:8003371,roughness:.9,side:Wt}),z=new Ct({color:13214282,roughness:.5,metalness:.6});for(let D=0;D<8;D++){const H=(D+.5)/8*Math.PI*2,U=new Bt;U.position.set(Math.sin(H)*(t+.55),2.7,Math.cos(H)*(t+.55)),U.rotation.y=H+Math.PI;const j=new Ue(new Cs(1.1,2.2),T);j.position.y=-1,U.add(j);const ie=new Ue(new yt(1.3,.08,.08),z);U.add(ie);const de=new Ue(new os(.28,6),z);de.position.set(0,-.8,.01),U.add(de),i.add(U)}const F=[];for(const D of e.colliders){const H=new Bt;H.position.set(D.x,0,D.z),H.add(new Ue(new gt(D.r*.85,D.r,1,10),new Ct({color:4867392,roughness:.9}))),H.children[0].position.y=.5,H.children[0].castShadow=!0;const U=new Ue(new gt(D.r*1.05,D.r*.6,.5,10),new Ct({color:2894378,metalness:.7,roughness:.5}));U.position.y=1.25,H.add(U);const j=new Ue(new ei(D.r*.7,1.4,8),new Ft({color:16747050,transparent:!0,opacity:.8,blending:Pn,depthWrite:!1}));j.position.y=2.1,H.add(j);const ie=new Ue(new ei(D.r*.4,.9,8),new Ft({color:16769162,transparent:!0,opacity:.9,blending:Pn,depthWrite:!1}));ie.position.y=1.9,H.add(ie);const de=new Lu(16747066,14,15,1.6);de.position.y=2.4,H.add(de),F.push({mesh:j,light:de,seed:n()*10}),i.add(H)}i.add(new Hp(9278664,3812382,.9));const V=new Iu(16762512,2.2);V.position.set(-14,20,10),V.castShadow=!0,V.shadow.mapSize.set(1024,1024);const W=V.shadow.camera;return W.left=-16,W.right=16,W.top=16,W.bottom=-16,W.near=1,W.far=60,V.shadow.bias=-5e-4,i.add(V),{spec:e,sun:V,update(D){for(const H of F){const U=.85+Math.sin(D*9+H.seed)*.1+Math.sin(D*23+H.seed*2)*.06;H.mesh.scale.set(U,.9+(U-.85)*2,U),H.light.intensity=12+(U-.85)*40}},setQuality(D){var H;V.castShadow=D!=="low",V.shadow.mapSize.set(D==="high"?2048:1024,D==="high"?2048:1024),(H=V.shadow.map)==null||H.dispose(),V.shadow.map=null,F.forEach((U,j)=>{U.light.visible=D==="high"||D==="balanced"&&j<2}),x.visible=D!=="low"},dispose(){s.remove(i),i.traverse(D=>{var U,j;(j=(U=D.geometry)==null?void 0:U.dispose)==null||j.call(U)})}}}class ex{constructor(e,t){N(this,"yaw",0);N(this,"pitch",.28);N(this,"dist",4.6);N(this,"curDist",4.6);N(this,"shake",0);N(this,"t",0);N(this,"lockOn",!0);N(this,"look",new I);N(this,"pos",new I);this.camera=e,this.arena=t}addShake(e){this.shake=Math.min(1,this.shake+e)}snapBehind(e){this.yaw=e.yaw,this.pitch=.28}update(e,t,n,i,r){this.t+=e;const a=this.lockOn&&n&&!n.dead;if(a){const R=n.pos.x-t.pos.x,C=n.pos.z-t.pos.z,E=Math.hypot(R,C),b=Math.atan2(R,C);this.yaw=qc(this.yaw,b+ct(i*2,-.4,.4)*0,1-Math.exp(-6*e)),this.yaw=Hi(this.yaw+i*.25);const x=ct(.32-Math.min(E,10)*.012+(t.pos.y-n.pos.y)*.05,.12,.5);this.pitch=Zn(this.pitch,x+r*.3,1-Math.exp(-5*e)),this.dist=ct(4.2+E*.22,4.4,7.2)}else this.yaw=Hi(this.yaw+i),this.pitch=ct(this.pitch+r,-.35,1.2),this.dist=4.6;this.curDist+=(this.dist-this.curDist)*(1-Math.exp(-6*e));const o=t.pos.x,c=t.pos.y+1.55,l=t.pos.z;let h=o,u=c,d=l;a&&(h=Zn(o,n.pos.x,.22),d=Zn(l,n.pos.z,.22),u=Zn(c,n.pos.y+1.4,.18));const f=1-Math.exp(-14*e);this.look.x+=(h-this.look.x)*f,this.look.y+=(u-this.look.y)*f,this.look.z+=(d-this.look.z)*f;const g=Math.cos(this.pitch),v=Math.sin(this.pitch),m=-Math.sin(this.yaw)*g,p=-Math.cos(this.yaw)*g,M=v;let y=this.curDist;const _=this.arena.radius+2.4;for(let R=0;R<12;R++){const C=this.look.x+m*y,E=this.look.z+p*y,b=this.look.y+M*y;let x=Math.hypot(C,E)>_||b<.35;for(const T of this.arena.colliders)b<T.h+.4&&Math.hypot(C-T.x,E-T.z)<T.r+.35&&(x=!0);if(!x)break;if(y-=.4,y<1.2){y=1.2;break}}this.pos.set(this.look.x+m*y,Math.max(.4,this.look.y+M*y),this.look.z+p*y),this.shake=Math.max(0,this.shake-e*2.8);const L=this.shake*this.shake*.12;this.camera.position.set(this.pos.x+Math.sin(this.t*61)*L,this.pos.y+Math.cos(this.t*53)*L,this.pos.z+Math.sin(this.t*47)*L),this.camera.lookAt(this.look)}}const Sn={none:14673648,fire:16742954,ice:9427199,lightning:16770142,wind:10220240,earth:11569752,light:16774064,energy:3535103},tx={none:"Steel",fire:"Fire",ice:"Frost",lightning:"Lightning",wind:"Wind",earth:"Earth",light:"Radiance",energy:"Cyber"},Gs=s=>"#"+s.toString(16).padStart(6,"0");function Ph(s,e){if(e===Ud)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===rc||e===tu){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===rc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class nx extends Is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ox(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Mx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=sr.extractUrlBase(e);a=sr.resolveURL(l,this.path)}else a=sr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Pu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Wu){try{a[$e.KHR_BINARY_GLTF]=new Sx(e)}catch(u){i&&i(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ux(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new rx;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new bx(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new wx;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new Tx;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ix(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sx{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Jt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Iu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Lu(h),l.distance=u;break;case"spot":l=new Gp(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class rx{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(i)}}class ax{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ox{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(o,o)}return Promise.all(r)}}class cx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class lx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class hx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ut)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class ux{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class dx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(o[0],o[1],o[2],Jt),Promise.all(r)}}class fx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class px{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(o[0],o[1],o[2],Jt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ut)),Promise.all(r)}}class mx{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class gx{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class vx{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class _x{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xx{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yx{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Mx{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==un.TRIANGLES&&l.mode!==un.TRIANGLE_STRIP&&l.mode!==un.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const v=new Ge,m=new I,p=new pn,M=new I(1,1,1),y=new oa(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&M.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,v.compose(m,p,M));for(const _ in c)if(_==="_COLOR_0"){const L=c[_];y.instanceColor=new oc(L.array,L.itemSize,L.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);mt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Wu="glTF",Ws=12,Lh={JSON:1313821514,BIN:5130562};class Sx{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ws,r=new DataView(e,Ws);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Lh.JSON){const l=new Uint8Array(e,Ws+a,o);this.content=n.decode(l)}else if(c===Lh.BIN){const l=Ws+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=pc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=pc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=vs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}u(f)},o,l,Jt,d)})})}}class wx{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Tx{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Xu extends gr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,v=g-l,m=-2*f+3*d,p=f-d,M=1-m,y=p-d+u;for(let _=0;_!==o;_++){const L=a[v+_+o],R=a[v+_+c]*h,C=a[g+_+o],E=a[g+_]*h;r[_]=M*L+y*R+m*C+p*E}return r}}const Ex=new pn;class Ax extends Xu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ex.fromArray(r).normalize().toArray(r),r}}const un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ih={9728:Kt,9729:sn,9984:Xh,9985:ta,9986:$s,9987:Kn},Dh={33071:pi,33648:fa,10497:Oi},vo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rx={CUBICSPLINE:void 0,LINEAR:cr,STEP:or},_o={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),s.DefaultMaterial}function Ri(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Px(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Lx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ix(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xo(t.attributes):e=s.indices+":"+xo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+xo(s.targets[n]);return e}function xo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function mc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Dx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Nx=new Ge;class Ux{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ix,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new zp(this.options.manager):this.textureLoader=new qp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ri(r,o,i),jn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(sr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=vo[i.type],o=vs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new bt(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=vo[i.type],l=vs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(M);y||(v=new l(o,p*f,i.count*f/h),y=new Of(v,f/h),t.cache.add(M,y)),m=new Lc(y,c,d%f/h,g)}else o===null?v=new l(i.count*c):v=new l(o,d,i.count*c),m=new bt(v,c,g);if(i.sparse!==void 0){const p=vo.SCALAR,M=vs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,L=new M(a[1],y,i.sparse.count*p),R=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,E=L.length;C<E;C++){const b=L[C];if(m.setX(b,R[C*c]),c>=2&&m.setY(b,R[C*c+1]),c>=3&&m.setZ(b,R[C*c+2]),c>=4&&m.setW(b,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ih[d.magFilter]||sn,h.minFilter=Ih[d.minFilter]||Kn,h.wrapS=Dh[d.wrapS]||Oi,h.wrapT=Dh[d.wrapT]||Oi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Kt&&h.minFilter!==sn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Pt(v);m.needsUpdate=!0,d(m)}),t.load(sr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),jn(u,a),u.userData.mimeType=a.mimeType||Dx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new vu,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new gu,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ct}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Jt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Ut)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Wt);const h=r.alphaMode||_o.OPAQUE;if(h===_o.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===_o.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ft&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ft&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ft){const u=r.emissiveFactor;o.emissive=new Ce().setRGB(u[0],u[1],u[2],Jt)}return r.emissiveTexture!==void 0&&a!==Ft&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),jn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ri(i,u,r),u})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Nh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=Ix(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Nh(new wt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?Cx(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=a[f];let p;const M=l[f];if(m.mode===un.TRIANGLES||m.mode===un.TRIANGLE_STRIP||m.mode===un.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Bf(v,M):new Ue(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===un.TRIANGLE_STRIP?p.geometry=Ph(p.geometry,tu):m.mode===un.TRIANGLE_FAN&&(p.geometry=Ph(p.geometry,rc));else if(m.mode===un.LINES)p=new Wf(v,M);else if(m.mode===un.LINE_STRIP)p=new Nc(v,M);else if(m.mode===un.LINE_LOOP)p=new Xf(v,M);else if(m.mode===un.POINTS)p=new _u(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Lx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),jn(p,r),m.extensions&&Ri(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ri(i,u[0],r),u[0];const d=new Bt;r.extensions&&Ri(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(lf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Vc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ic(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let M=0,y=d.length;M<y;M++){const _=d[M],L=f[M],R=g[M],C=v[M],E=m[M];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const b=n._createAnimationTracks(_,L,R,C,E);if(b)for(let x=0;x<b.length;x++)p.push(b[x])}return new Dp(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Nx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new pu:l.length>1?h=new Bt:l.length===1?h=l[0]:h=new mt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),jn(h,r),r.extensions&&Ri(n,h,r),r.matrix!==void 0){const u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Bt;n.name&&(r.name=i.createUniqueName(n.name)),jn(r,n),n.extensions&&Ri(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Ln||d instanceof Pt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];di[r.path]===di.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(di[r.path]){case di.weights:l=Ts;break;case di.rotation:l=Es;break;case di.position:case di.scale:l=As;break;default:switch(n.itemSize){case 1:l=Ts;break;case 2:case 3:default:l=As;break}break}const h=i.interpolation!==void 0?Rx[i.interpolation]:cr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+di[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=mc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Es?Ax:Xu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Fx(s,e,t){const n=e.attributes,i=new si;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){const h=mc(vs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=mc(vs[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Nn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Nh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=pc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Qe.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),jn(s,e),Fx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Px(s,e.targets,t):s})}const gc=new Map;async function Ox(){const s=new nx,e=[];for(const[t,n]of gc)e.push(s.loadAsync(n.url).then(i=>{n.scene=i.scene}).catch(()=>{console.warn("[assets] weapon GLB failed, keeping procedural model:",t),gc.delete(t)}));await Promise.all(e)}function kx(s){const e=gc.get(s);return!e||!e.scene?null:()=>{const t=new Bt;return t.add(e.scene.clone(!0)),{group:t,tip:new I(0,e.length,0),base:new I(0,e.length*.35,0),grip2:e.grip2,glow:null}}}const Uh=new Map;function Nt(s,e=.8,t=.35,n=0,i=0){const r=[s,e,t,n,i].join("_");let a=Uh.get(r);return a||(a=new Ct({color:s,metalness:e,roughness:t,emissive:n,emissiveIntensity:i}),Uh.set(r,a)),a}const Rt=(s,e,t,n,i=0,r=0,a=0)=>{const o=new Ue(new yt(s,e,t),n);return o.position.set(i,r,a),o.castShadow=!0,o},Ii=(s,e,t,n,i=0,r=0,a=0,o=8)=>{const c=new Ue(new gt(s,e,t,o),n);return c.position.set(i,r,a),c.castShadow=!0,c},Di=(s,e,t,n=0,i=0,r=0,a=8)=>{const o=new Ue(new ei(s,e,a),t);return o.position.set(n,i,r),o.castShadow=!0,o},rr=(s,e,t=0,n=0,i=0,r=10)=>{const a=new Ue(new nn(s,r,Math.max(6,r-2)),e);return a.position.set(t,n,i),a.castShadow=!0,a},Js=()=>Nt(2759956,.1,.9),xi=()=>Nt(13214282,.9,.3);function wn(s,e,t,n,i,r){s.add(Rt(t,e-t,n,i,0,r+(e-t)/2,0));const a=Di(t*.72,t*1.6,i,0,r+e-t*.5,0,4);a.scale.z=n/t,a.rotation.y=Math.PI/4,s.add(a),s.add(Rt(t*.18,e-t,n*1.4,Nt(15265526,.95,.15),0,r+(e-t)/2,0))}function Tn(s,e,t,n=0){s.add(Ii(.025,.025,t,Js(),0,n-t/2+.02)),s.add(Rt(e,.04,.07,xi(),0,n+.03,0)),s.add(rr(.04,xi(),0,n-t+.01))}function Fh(s){const e=kx(s.id);if(e)return e();const t=new Bt;t.name="weapon_"+s.id;const n=Nt(s.color,.85,.28),i=Sn[s.element],r=Nt(i,.2,.3,i,1.4);let a=s.length,o=null,c=s.element!=="none"?new Ce(i):null;switch(s.id){case"greatsword":wn(t,1.55,.17,.035,n,.08),Tn(t,.42,.42),o=-.25,a=1.65;break;case"longsword":wn(t,1,.085,.025,n,.06),Tn(t,.26,.25),a=1.08;break;case"rapier":wn(t,1.15,.035,.02,n,.06),Tn(t,.16,.2),t.add(rr(.09,xi(),0,.05,.02,8)),a=1.2;break;case"dagger":wn(t,.36,.06,.02,n,.05),Tn(t,.13,.12),a=.42;break;case"axe":t.add(Ii(.028,.028,1.15,Js(),0,.28)),t.add(Rt(.05,.3,.3,n,0,.78,.13)),t.add(Rt(.04,.12,.1,n,0,.78,-.08)),o=-.15,a=1.35;break;case"spear":t.add(Ii(.025,.025,2,Js(),0,.5)),t.add(Di(.06,.34,n,0,1.68,0,4)),t.add(Rt(.12,.03,.03,xi(),0,1.5,0)),o=-.4,a=1.9;break;case"polearm":t.add(Ii(.03,.03,2,Js(),0,.5)),t.add(Rt(.04,.34,.3,n,0,1.35,.14)),t.add(Di(.04,.3,n,0,1.68,0,4)),t.add(Rt(.04,.16,.1,n,0,1.32,-.12)),o=-.4,a=1.85;break;case"hammer":t.add(Ii(.03,.03,1.25,Js(),0,.3)),t.add(Rt(.2,.26,.42,n,0,.95,0)),t.add(Rt(.22,.05,.44,xi(),0,.95,0)),o=-.2,a=1.1;break;case"dualblades":wn(t,.62,.06,.02,n,.05),Tn(t,.12,.16),t.rotation.z=0,a=.7;break;case"windblades":wn(t,.7,.07,.015,Nt(12578525,.6,.2,i,.5),.05),Tn(t,.1,.16),t.add(Rt(.015,.4,.2,r,0,.3,-.04)),a=.78;break;case"flamesword":wn(t,1.15,.1,.03,Nt(3877414,.8,.3,i,.9),.06),Tn(t,.3,.26),t.add(Rt(.03,1,.045,r,0,.6,0)),a=1.22;break;case"icelance":t.add(Ii(.025,.025,1.9,Nt(7176083,.7,.3),0,.45)),t.add(Di(.09,.55,Nt(12577535,.3,.1,i,.8),0,1.7,0,5)),t.add(Di(.05,.3,r,.1,1.4,0,5)),t.add(Di(.05,.3,r,-.1,1.4,0,5)),o=-.4,a=2;break;case"lightning":t.add(Rt(.16,.1,.2,n,0,.05,.05));for(let u=-1;u<=1;u++)t.add(Di(.025,.1,r,u*.05,.1,.17,4));t.add(rr(.05,r,0,0,0,8)),a=.35;break;case"earthmaul":t.add(Ii(.035,.035,1.3,Nt(4864554,.1,.9),0,.3));{const u=new Ue(new Bc(.3,0),Nt(7035461,.2,.9));u.position.y=1,u.scale.set(1,.85,1.35),u.castShadow=!0,t.add(u)}t.add(Rt(.09,.45,.09,r,0,1,.2)),o=-.25,a=1.3;break;case"lightblade":wn(t,1.05,.09,.02,Nt(16775120,.3,.15,i,1.1),.06),Tn(t,.28,.24),t.add(rr(.06,r,0,.03)),a=1.12;break;case"cyberblade":wn(t,1.05,.08,.03,Nt(1382687,.9,.2),.06),Tn(t,.18,.26),t.add(Rt(.02,.95,.035,r,0,.58,0));for(let u=0;u<4;u++)t.add(Rt(.1,.02,.04,r,0,.2+u*.22,0));a=1.12;break;case"bow":{const u=Nt(7031338,.1,.7),d=new Ue(new mr(.55,.022,6,24,Math.PI),u);d.rotation.z=-Math.PI/2,d.rotation.y=0,d.position.set(0,0,0),d.scale.set(.5,1,1),t.add(d);const f=Rt(.006,1.1,.006,Nt(14540253,0,.8),-.275*.5*0,0,0);f.position.x=0,f.position.z=-0,f.position.y=0,t.add(f),o=null,a=1.1;break}case"energyshield":case"kiteshield":return vc(s);default:wn(t,s.length,.08,.025,n,.06),Tn(t,.22,.22)}const l=new I(0,a,0),h=new I(0,a*.35,0);return s.id==="lightning"&&(l.set(0,.1,.2),h.set(0,.05,0)),{group:t,tip:l,base:h,grip2:o,glow:c}}function vc(s){const e=new Bt;e.name="shield_"+s.id;const t=Sn[s.element];if(s.id==="energyshield"){const r=new Ue(new gt(.42,.42,.04,6),Nt(1056810,.8,.25));r.rotation.x=Math.PI/2,r.castShadow=!0,e.add(r);const a=new Ue(new mr(.4,.018,6,6),Nt(t,.2,.3,t,1.8));a.rotation.z=Math.PI/6,a.position.z=.025,e.add(a);const o=new Ue(new gt(.36,.36,.01,6),new Ft({color:t,transparent:!0,opacity:.22,blending:Pn,depthWrite:!1}));return o.rotation.x=Math.PI/2,o.position.z=.03,e.add(o),{group:e,tip:new I(0,0,.3),base:new I(0,0,0),grip2:null,glow:new Ce(t)}}const n=new wu;n.moveTo(-.3,.42),n.lineTo(.3,.42),n.lineTo(.3,.05),n.quadraticCurveTo(.28,-.35,0,-.62),n.quadraticCurveTo(-.28,-.35,-.3,.05),n.closePath();const i=new Ue(new zc(n,{depth:.05,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:1}),Nt(s.color,.7,.4));return i.castShadow=!0,e.add(i),e.add(Rt(.06,.95,.03,xi(),0,-.05,.085)),e.add(Rt(.5,.06,.03,xi(),0,.12,.085)),e.add(rr(.07,xi(),0,.12,.1,8)),{group:e,tip:new I(0,0,.3),base:new I(0,0,0),grip2:null,glow:null}}const da=0,us=1,Cn={thigh:.46,shin:.46,upper:.3,fore:.3,pivotY:.97},yo=(s,e=.1,t=.8)=>new Ct({color:s,metalness:e,roughness:t});function Zr(s,e,t,n=0){const i=new Ue(new wa(s,e,3,8),t);return i.position.y=n,i.castShadow=!0,i}function Je(s,e,t=0,n=0,i=0){const r=new Ue(s,e);return r.position.set(t,n,i),r.castShadow=!0,r}const kt=(s,e=0,t=0,n=0)=>{const i=new Bt;return i.position.set(e,t,n),s==null||s.add(i),i};function Bx(s,e){const t=yo(9071189,0,.9),n=yo(2501171,0,.95),i=yo(1382172,.3,.6),r=[t,n,i],a=new Bt;a.name="fighter";const o=kt(a,0,Cn.pivotY,0),c=kt(o),l=kt(c,0,.08,0),h=kt(l,0,.2,0),u=kt(h,0,.36,0),d=kt(u,0,.1,0);c.add(Je(new yt(.34,.2,.2),n,0,0,0));const f=Je(new gt(.22,.17,.52,10),n,0,.04,0);f.scale.z=.62,h.add(f),d.add(Je(new nn(.1,12,10),t,0,0,0)),u.add(Je(new gt(.05,.06,.1,8),t,0,0,0));const g=[kt(c,-.12,-.04,0),kt(c,.12,-.04,0)],v=[kt(g[0],0,-.46,0),kt(g[1],0,-.46,0)],m=[kt(h,-.27,.3,0),kt(h,.27,.3,0)],p=[kt(m[0],0,-.3,0),kt(m[1],0,-.3,0)],M=[kt(p[0],0,-.3,0),kt(p[1],0,-.3,0)];for(let E=0;E<2;E++)g[E].add(Zr(.075,Cn.thigh-.15,n,-.46/2)),v[E].add(Zr(.06,Cn.shin-.14,n,-.46/2)),v[E].add(Je(new yt(.11,.07,.26),i,0,-.46-.02,.06)),m[E].add(Zr(.058,Cn.upper-.12,n,-.3/2)),p[E].add(Zr(.05,Cn.fore-.1,n,-.3/2)),M[E].add(Je(new nn(.052,8,6),t));const y=new Ct({color:e,roughness:.95,side:Wt});r.push(y);const _=kt(h,0,.3,-.14),L=new Ue(new Cs(.5,.95,1,4),y);L.position.y=-.48,L.castShadow=!0,_.add(L);const R={head:[],chest:[],arms:[],legs:[]},C={head:[],chest:[],arms:[],legs:[]};for(const E of rn){const b=s[E].def,x=b.tier,T=new Ct({color:b.look.color,metalness:x==="light"?.15:.75,roughness:x==="light"?.85:.4}),z=new Ct({color:b.look.trim,metalness:.85,roughness:.3});C[E].push(T,z),r.push(T,z);const F=(V,W)=>{V.add(W),R[E].push(W)};if(E==="head")if(x==="light"){const V=Je(new nn(.135,12,10),T,0,.01,-.01);V.scale.set(1,1.05,1.1),F(d,V);const W=Je(new ei(.1,.28,8),T,0,-.1,-.12);W.rotation.x=-.5,F(d,W)}else if(x==="medium"){const V=Je(new nn(.135,14,10,0,Math.PI*2,0,Math.PI*.62),T,0,0,0);F(d,V),F(d,Je(new yt(.03,.14,.03),z,0,-.01,.125)),F(d,Je(new yt(.27,.04,.05),z,0,.055,.1)),F(d,Je(new yt(.02,.1,.12),T,.12,-.06,.02)),F(d,Je(new yt(.02,.1,.12),T,-.12,-.06,.02))}else F(d,Je(new gt(.15,.16,.34,12),T,0,-.02,0)),F(d,Je(new nn(.15,12,8,0,Math.PI*2,0,Math.PI/2),T,0,.15,0)),F(d,Je(new yt(.2,.03,.04),i,0,.03,.155)),F(d,Je(new yt(.03,.18,.04),i,0,-.07,.16)),F(d,Je(new yt(.04,.12,.3),z,0,.27,-.02));else if(E==="chest"){const V=x==="light"?.235:x==="medium"?.265:.295,W=x==="light"?.18:x==="medium"?.2:.23,D=Je(new gt(V,W,.5,10),T,0,.05,0);if(D.scale.z=.66,F(h,D),F(l,Je(new gt(W+.01,W+.01,.06,10),z,0,0,0)),x!=="light")for(const H of[-1,1]){const U=Je(new nn(x==="heavy"?.17:.125,10,8),T,H*.29,.31,0);U.scale.set(1,.7,1.05),F(h,U)}if(x==="heavy"){F(h,Je(new gt(.1,.13,.12,10),z,0,.35,0));for(const H of[-1,1])F(h,Je(new ei(.04,.16,5),z,H*.33,.43,0));F(c,Je(new gt(.2,.3,.26,10,1,!0),T,0,-.18,0))}x==="medium"&&F(h,Je(new yt(.12,.3,.02),z,0,.05,.17)),F(h,Je(new yt(.05,.5,.02),z,0,.05,.19*0+.17*0))}else if(E==="arms")for(let V=0;V<2;V++){const W=x==="light"?.18:x==="medium"?.26:.3,D=x==="light"?.062:x==="medium"?.075:.088;F(p[V],Je(new gt(D,D*.88,W,8),T,0,-.3+W/2+.01,0)),x!=="light"&&F(p[V],Je(new nn(.07,8,6),z,0,-.02,0)),x==="heavy"&&(F(m[V],Je(new gt(.085,.075,.24,8),T,0,-.3/2,0)),F(M[V],Je(new yt(.1,.1,.12),T,0,0,.01)))}else for(let V=0;V<2;V++){const W=x==="light"?.28:.4,D=x==="light"?.07:x==="medium"?.085:.1;F(v[V],Je(new gt(D,D*.82,W,8),T,0,-.46+W/2+.02,0)),x!=="light"&&F(v[V],Je(new nn(.085,8,6),z,0,0,.04)),x==="heavy"&&(F(g[V],Je(new gt(.115,.1,.38,8),T,0,-.23,0)),F(v[V],Je(new ei(.035,.1,5),z,0,0,.1))),x==="medium"&&F(g[V],Je(new gt(.1,.09,.2,8),T,0,-.14,0))}}return{rig:{root:a,pivot:o,hips:c,spine:l,chest:h,neck:u,head:d,thigh:g,shin:v,upper:m,fore:p,hand:M,cape:_},armorParts:R,armorMats:C,flashMats:r}}const Qr=new I(0,1,0),Oh=new I(0,-1,0),zx=new I(0,0,1),ds=new I,Xs=new I,qs=new I,ya=new pn,kh=new pn,En=new pn;function Ci(s,e,t,n){ds.copy(t).applyQuaternion(n).normalize(),ya.setFromUnitVectors(e,ds),s.parent.getWorldQuaternion(kh).invert(),s.quaternion.copy(kh.multiply(ya))}class Hx{constructor(e){N(this,"phase",0);N(this,"lx",0);N(this,"lz",0);N(this,"lean",0);N(this,"strafeLean",0);N(this,"crouch",0);N(this,"t",0);N(this,"deathT",0);N(this,"rollAxis",new I(1,0,0));N(this,"hR",new I);N(this,"hL",new I);N(this,"dR",new I(0,1,.3));N(this,"dL",new I(0,1,.3));N(this,"poleR",new I(-.7,-.8,-.35));N(this,"poleL",new I(.7,-.8,-.35));N(this,"tuck",!1);this.rig=e}update(e,t,n){var x;const i=this.rig;this.t+=t;const r=e.forward,a=e.right,o=e.vel.x*r.x+e.vel.z*r.z,c=-(e.vel.x*a.x+e.vel.z*a.z),l=Math.hypot(e.vel.x,e.vel.z),h=1-Math.exp(-12*t);this.lx+=(ct(c/6.2,-1,1)-this.lx)*h,this.lz+=(ct(o/6.2,-1,1)-this.lz)*h,this.lean+=(ct(o/6.2,-1,1)*.16-this.lean)*h,this.strafeLean+=(ct(c/6.2,-1,1)*.12-this.strafeLean)*h,e.onGround&&e.action!=="dodge"&&(this.phase+=l*t*1.7);const u=ct(l/3.4,0,1),d=Math.sin(this.phase),f=Math.sin(this.phase+Math.PI);i.pivot.position.set(0,Cn.pivotY,0),i.pivot.quaternion.identity(),i.spine.rotation.set(0,0,0),i.chest.rotation.set(Math.sin(this.t*1.8)*.012,0,0),i.neck.rotation.set(0,0,0),i.head.rotation.set(0,0,0),this.tuck=!1;let g=0;const v=(T,z,F,V,W=0)=>{i.thigh[0].rotation.set(T,0,-W),i.thigh[1].rotation.set(z,0,W),i.shin[0].rotation.set(F,0,0),i.shin[1].rotation.set(V,0,0)},m=.75*u;v(-d*m*this.lz-d*.1*u,-f*m*this.lz-f*.1*u,Math.max(0,d)*.9*u+.05,Math.max(0,f)*.9*u+.05,.05+Math.abs(this.lx)*.12*(d>0?1:-.4)),Math.abs(this.lx)>.2&&(i.thigh[0].rotation.z+=d*.3*this.lx*u,i.thigh[1].rotation.z+=f*.3*this.lx*u),i.pivot.position.y-=Math.abs(d)*.035*u,i.pivot.rotation.x=this.lean,i.pivot.rotation.z=-this.strafeLean,l<.3&&e.onGround&&(g+=.03,i.thigh[0].rotation.x-=.1,i.thigh[1].rotation.x+=.12,i.shin[0].rotation.x+=.12,i.shin[1].rotation.x+=.06),e.onGround||(v(-.55,.1,.9,.5,.1),i.pivot.rotation.x=.05),e.landT>0&&(g+=.14*(e.landT/.18)),this.crouch+=(g-this.crouch)*(1-Math.exp(-18*t)),i.pivot.position.y-=this.crouch,this.crouch>.02&&(i.thigh[0].rotation.x-=this.crouch*3,i.thigh[1].rotation.x-=this.crouch*3,i.shin[0].rotation.x+=this.crouch*5.5,i.shin[1].rotation.x+=this.crouch*5.5);const p=e.weapon,M=n.shield,y=p.grip==="two",_=p.grip==="bow";(x=e.attack)==null||x.handSide;const L=Math.sin(this.t*1.8)*.012;this.hR.set(-.28,1.12+L,.36),this.dR.set(.1,1,.55).normalize(),this.hL.set(.3,1.1+L,.3),this.dL.set(-.1,1,.55).normalize();let R=!1;switch(p.grip==="dual"&&this.hL.set(.28,1.12,.36),e.action){case"block":{const T=e.parryT>0;M&&p.grip!=="dual"&&this.hL.set(.12,1.32,.52),this.hR.set(-.14,1.32,.5),this.dR.set(T?.15:.45,T?.6:.85,T?.8:.3).normalize(),(p.grip==="dual"||p.grip==="gauntlet")&&(this.hL.set(.14,1.3,.5),this.dL.set(-.45,.85,.3).normalize()),i.spine.rotation.y=.1,i.pivot.rotation.x+=.08;break}case"attack":{const T=e.attack,z=T.move,F=ct(T.t/T.dur,0,1),V=T.sign,W=T.phase,D=Gu(z,W,F,V);i.spine.rotation.y=ct(-D.dx*.5,-.6,.6)*(W==="recovery"?1-F:1),i.pivot.rotation.x+=(W==="windup"?-.05:W==="active"?.18:.08)+(z.style==="smash"||z.style==="overhead"?W==="windup"?-.12:.18:0),z.lunge>2&&W==="active"&&(i.pivot.position.y-=.1,i.pivot.rotation.x+=.1),R=z.style==="spin";const H=z.reach*D.extend,U=R?0:.32*T.handSide,j=R?.1:.3;Xs.set(-U,1.25,j);const ie=qs.set(-D.dx,D.dy,D.dz).normalize(),de=p.grip==="gauntlet"||z.style==="bash"||z.style==="punch";if(_){this.hL.set(.2,1.42,.72),this.dL.set(0,1,0);const Be=W==="windup"?_a(F):W==="active"?1-F*.6:.4*(1-F);this.hR.set(-.1,1.42,Zn(.7,.24,Be)),this.dR.set(0,0,1),i.spine.rotation.y=-.3}else p.grip==="shield"?this.hL.copy(Xs).addScaledVector(ie,H*.8):T.handSide>=0||p.grip!=="dual"&&p.grip!=="gauntlet"?(de?this.hR.copy(Xs).addScaledVector(ie,H):this.hR.copy(Xs),this.dR.copy(ie),p.grip==="dual"?(this.hL.set(.3,1.1,.3),this.dL.set(-.2,1,.5).normalize()):p.grip==="gauntlet"&&this.hL.set(.3,1.15,.3)):(this.hL.copy(Xs),de&&this.hL.addScaledVector(ie,H),this.dL.copy(ie),p.grip==="gauntlet"&&this.hR.set(-.3,1.15,.3));break}case"dodge":{const T=ct((e.dodgeDur-e.dodgeT)/e.dodgeDur,0,1);this.tuck=!0;const z=e.dodgeDirX*-a.x+e.dodgeDirZ*-a.z,F=e.dodgeDirX*r.x+e.dodgeDirZ*r.z;e.dodgeBack?(i.pivot.rotation.x=-.35*Math.sin(T*Math.PI),i.pivot.position.y-=.18*Math.sin(T*Math.PI),v(-.5,.3,.9,.4),this.tuck=!1):(this.rollAxis.set(F,0,-z).normalize(),ya.setFromAxisAngle(this.rollAxis,ku(T)*Math.PI*2),i.pivot.quaternion.copy(ya),i.pivot.position.y=Cn.pivotY-.42*Math.sin(T*Math.PI)-.1,v(-1.5,-1.5,2.2,2.2));break}case"stagger":{const T=ct(e.actT/Math.max(.2,e.staggerT+e.actT),0,1),z=e.staggerKind==="hit"?1:1.4;i.pivot.rotation.x=-.3*z*Math.sin(Math.min(1,T*3)*Math.PI*.5)*(1-T*.5),i.spine.rotation.z=.12*Math.sin(e.actT*18)*(1-T),i.head.rotation.x=-.3*z,this.tuck=!0,v(-.3,.2,.5,.3,.12);break}case"switch":{const T=ct(1-e.switchT/.35,0,1);this.hR.set(-.3,1+Math.sin(T*Math.PI)*.4,.3+Math.sin(T*Math.PI)*.15),this.dR.set(0,1,.2+Math.sin(T*Math.PI)*.5).normalize();break}case"dead":{this.deathT=Math.min(1,this.deathT+t/.8);const T=_a(this.deathT);i.pivot.rotation.x=-T*(Math.PI/2-.1),i.pivot.position.y=Cn.pivotY-T*.7,i.pivot.rotation.z=T*.15,v(.1,-.2,.2,.4,.2),this.tuck=!0,i.head.rotation.x=.2*T;break}default:!_&&y&&(this.hR.set(-.2,1.1+L,.38),this.dR.set(.2,1,.5).normalize()),_&&(this.hL.set(.2,1.3,.6),this.dL.set(0,1,.05).normalize(),this.hR.set(-.22,1.2,.36)),p.grip==="gauntlet"&&(this.hR.set(-.25,1.2,.42),this.hL.set(.25,1.2,.42))}e.action!=="dead"&&(this.deathT=0),i.cape.rotation.x=.12+ct(l/6,0,1)*.5+Math.sin(this.t*2+1)*.04,e.action==="dodge"&&(i.cape.rotation.x=.9),i.root.updateMatrixWorld(!0),i.root.getWorldQuaternion(En);const C=new I,E=T=>this.tuck?(ds.set(Math.sign(T.x)*.2,.28,.28),i.chest.localToWorld(ds),C.copy(i.root.worldToLocal(ds))):C.copy(T);this.solve(da,E(this.hR));const b=n.main;if(y&&!_&&e.action!=="dodge"&&e.action!=="dead"&&e.action!=="stagger"&&b&&b.grip2!==null){const T=e.action==="attack"?this.dR:this.dR;this.hL.copy(this.hR).addScaledVector(T,b.grip2),this.dL.copy(T)}this.solve(us,E(this.hL)),this.orientHeld(e,n)}solve(e,t){const n=this.rig,i=n.upper[e],r=n.fore[e],a=Cn.upper,o=Cn.fore,c=i.getWorldPosition(ds.clone());n.root.worldToLocal(c);const l=t.clone().sub(c);let h=l.length();if(h<1e-4)return;const u=l.clone().divideScalar(h);h=ct(h,.08,a+o-.006);const d=(a*a-o*o+h*h)/(2*h),f=Math.sqrt(Math.max(0,a*a-d*d)),g=(e===da?this.poleR:this.poleL).clone();g.addScaledVector(u,-g.dot(u)),g.lengthSq()<1e-6&&g.set(0,-1,0),g.normalize();const v=c.clone().addScaledVector(u,d).addScaledVector(g,f),m=c.clone().addScaledVector(u,h);n.root.getWorldQuaternion(En),Ci(i,Oh,v.clone().sub(c),En),i.updateMatrixWorld(!0),Ci(r,Oh,m.clone().sub(v),En),r.updateMatrixWorld(!0)}orientHeld(e,t){this.rig.root.getWorldQuaternion(En);const i=e.weapon,r=(a,o,c)=>{a&&Ci(a.group,Qr,c,En)};if(i.grip==="bow"?t.main&&Ci(t.main.group,Qr,this.dL,En):i.grip==="gauntlet"?(t.main&&Ci(t.main.group,Qr,qs.set(0,.2,1),En),t.off&&Ci(t.off.group,Qr,qs.set(0,.2,1),En)):(r(t.main,da,this.dR),t.off&&r(t.off,us,this.dL)),t.shield){const a=e.action==="block"?qs.set(0,.05,1):qs.set(.35,.1,1);Ci(t.shield.group,zx,a,En)}}}class Vx{constructor(e,t){N(this,"object");N(this,"built");N(this,"anim");N(this,"held",{main:null,off:null,shield:null});N(this,"heldKey","");N(this,"flashT",0);N(this,"tint",new Ce);N(this,"brokenSeen",{head:!1,chest:!1,arms:!1,legs:!1});this.fighter=e,this.built=Bx(e.armor,t),this.object=this.built.rig.root,this.anim=new Hx(this.built.rig),this.sync(e)}sync(e){var a;const t=e.weapon.id+"|"+(((a=e.shield)==null?void 0:a.id)??"");if(t===this.heldKey)return;this.heldKey=t;const n=this.built.rig;for(const o of[this.held.main,this.held.off,this.held.shield])o==null||o.group.removeFromParent();this.held={main:null,off:null,shield:null};const i=e.weapon;if(i.grip==="shield"){this.held.shield=vc(i),n.fore[us].add(this.held.shield.group),this.held.shield.group.position.set(0,-.12,.1);return}this.held.main=Fh(i),i.grip==="bow"?n.hand[us].add(this.held.main.group):n.hand[da].add(this.held.main.group),(i.grip==="dual"||i.grip==="gauntlet")&&(this.held.off=Fh(i),n.hand[us].add(this.held.off.group));const r=e.shield;r&&xa(i.id)&&(this.held.shield=vc(r),n.fore[us].add(this.held.shield.group),this.held.shield.group.position.set(0,-.12,.1))}flash(e=.12){this.flashT=e}update(e,t){this.sync(e),this.object.position.set(e.pos.x,e.pos.y,e.pos.z),this.object.rotation.y=e.yaw,this.anim.update(e,t,this.held),this.refreshArmor(e),this.flashT=Math.max(0,this.flashT-t);const n=this.flashT>0?this.flashT/.12:0,i=e.st.burnT>0?.35+Math.sin(performance.now()*.02)*.1:0,r=e.st.chillT>0?.25:0,a=e.st.shockT>0&&Math.sin(performance.now()*.05)>0?.35:0;n>0||i||r||a?this.tint.setRGB(n*.7+i+a,n*.7+i*.4+r*.8+a,n*.7+r+a*.3):this.tint.setRGB(0,0,0);for(const o of this.built.flashMats)o.emissive.copy(this.tint);this.built.rig.root.visible=!0}refreshArmor(e){for(const t of rn){const n=e.armor[t];for(const r of this.built.armorParts[t])r.visible=!n.broken;this.brokenSeen[t]=n.broken;const i=1-n.dur/n.def.durability;for(const r of this.built.armorMats[t])r.color.setHex(r===this.built.armorMats[t][0]?n.def.look.color:n.def.look.trim).multiplyScalar(1-i*.45)}}weaponPoints(e,t,n){const i=e.attack;if(!i)return!1;const r=e.weapon.grip==="bow"?null:i.handSide<0&&this.held.off?this.held.off:this.held.main??this.held.shield;return r?(t.copy(r.tip),r.group.localToWorld(t),n.copy(r.base),r.group.localToWorld(n),!0):!1}heldGlow(){var e,t;return((e=this.held.main)==null?void 0:e.glow)??((t=this.held.shield)==null?void 0:t.glow)??null}worldPoint(e,t){return t.copy(e).applyMatrix4(this.object.matrixWorld)}dispose(){this.object.removeFromParent()}}const hn=900,Gx=`attribute vec4 aColor; attribute float aSize; varying vec4 vC;
void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(320.0/max(0.5,-mv.z)); gl_Position=projectionMatrix*mv; }`,Wx="varying vec4 vC; void main(){ vec2 d=gl_PointCoord-0.5; float r=dot(d,d)*4.0; if(r>1.0) discard; float a=(1.0-r); gl_FragColor=vec4(vC.rgb, vC.a*a*a); }",Fi=class Fi{constructor(){N(this,"pts",[]);N(this,"mesh");N(this,"pos");N(this,"col");N(this,"geo");const e=Fi.N;this.pos=new Float32Array(e*2*3),this.col=new Float32Array(e*2*3),this.geo=new wt,this.geo.setAttribute("position",new bt(this.pos,3).setUsage(Zs)),this.geo.setAttribute("color",new bt(this.col,3).setUsage(Zs));const t=[];for(let n=0;n<e-1;n++){const i=n*2;t.push(i,i+1,i+2,i+1,i+3,i+2)}this.geo.setIndex(t),this.mesh=new Ue(this.geo,new Ft({vertexColors:!0,transparent:!0,blending:Pn,depthWrite:!1,side:Wt})),this.mesh.frustumCulled=!1,this.mesh.visible=!1}push(e,t){this.pts.unshift({tip:e.clone(),base:t.clone(),t:0}),this.pts.length>Fi.N&&this.pts.pop()}update(e,t){for(const i of this.pts)i.t+=e;for(;this.pts.length&&this.pts[this.pts.length-1].t>.2;)this.pts.pop();const n=this.pts.length;if(this.mesh.visible=n>=2,!(n<2)){for(let i=0;i<Fi.N;i++){const r=this.pts[Math.min(i,n-1)],a=i<n?Math.max(0,1-r.t/.2)*(1-i/Fi.N*.5):0;this.pos.set([r.tip.x,r.tip.y,r.tip.z,r.base.x,r.base.y,r.base.z],i*6),this.col.set([t.r*a,t.g*a,t.b*a,t.r*a*.2,t.g*a*.2,t.b*a*.2],i*6)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}clear(){this.pts.length=0,this.mesh.visible=!1}};N(Fi,"N",18);let _c=Fi;class Xx{constructor(){N(this,"group",new Bt);N(this,"points");N(this,"posA");N(this,"colA");N(this,"sizeA");N(this,"vel",new Float32Array(hn*3));N(this,"life",new Float32Array(hn));N(this,"maxLife",new Float32Array(hn));N(this,"grav",new Float32Array(hn));N(this,"drag",new Float32Array(hn));N(this,"baseSize",new Float32Array(hn));N(this,"baseCol",new Float32Array(hn*3));N(this,"head",0);N(this,"rng",vr(99));N(this,"trails",new Map);N(this,"projMeshes",new Map);N(this,"rings",[]);N(this,"density",1);N(this,"tmpTip",new I);N(this,"tmpBase",new I);this.posA=new Float32Array(hn*3),this.colA=new Float32Array(hn*4),this.sizeA=new Float32Array(hn);const e=new wt;e.setAttribute("position",new bt(this.posA,3).setUsage(Zs)),e.setAttribute("aColor",new bt(this.colA,4).setUsage(Zs)),e.setAttribute("aSize",new bt(this.sizeA,1).setUsage(Zs));const t=new Dn({vertexShader:Gx,fragmentShader:Wx,transparent:!0,depthWrite:!1,blending:Pn});this.points=new _u(e,t),this.points.frustumCulled=!1,this.group.add(this.points);for(let n=0;n<10;n++){const i=new Ft({color:16777215,transparent:!0,opacity:0,blending:Pn,depthWrite:!1,side:Wt}),r=new Ue(new fr(.92,1,40),i);r.rotation.x=-Math.PI/2,r.visible=!1,this.group.add(r),this.rings.push({mesh:r,mat:i,t:0,dur:1,r0:0,r1:1,active:!1})}}emit(e,t,n,i,r,a,o,c,l,h=0,u=0){const d=this.head;this.head=(this.head+1)%hn,this.posA[d*3]=e,this.posA[d*3+1]=t,this.posA[d*3+2]=n,this.vel[d*3]=i,this.vel[d*3+1]=r,this.vel[d*3+2]=a;const f=new Ce(o);this.baseCol[d*3]=f.r,this.baseCol[d*3+1]=f.g,this.baseCol[d*3+2]=f.b,this.life[d]=l,this.maxLife[d]=l,this.grav[d]=h,this.drag[d]=u,this.baseSize[d]=c}burst(e,t,n,i,r,a,o=.1,c=.5,l=8,h=0,u=0,d=1){r=Math.max(1,Math.round(r*this.density));for(let f=0;f<r;f++){const g=this.rng()*Math.PI*2,v=(this.rng()-.3)*1.2,m=a*(.35+this.rng()*.8),p=Math.cos(g)*Math.cos(v)*m*d+h*m*(1-d+.3),M=Math.sin(v)*m+a*.2,y=Math.sin(g)*Math.cos(v)*m*d+u*m*(1-d+.3);this.emit(e,t,n,p,M,y,i,o*(.6+this.rng()*.8),c*(.6+this.rng()*.7),l,1.5)}}ring(e,t,n,i,r,a,o=.4,c=.8){const l=this.rings.find(h=>!h.active)??this.rings[0];l.active=!0,l.t=0,l.dur=o,l.r0=r,l.r1=a,l.mesh.visible=!0,l.mesh.position.set(e,t,n),l.mat.color.setHex(i),l.mat.opacity=c,l.mesh.scale.setScalar(r),l.mat._o=c}handle(e){var i,r,a,o;const t=e.pos,n=e.element&&e.element!=="none"?Sn[e.element]:16767392;switch(e.type){case"hit":{const c=e.heavy?22:12;this.burst(t.x,t.y,t.z,n,c,e.heavy?6.5:4.5,.09,.45,9,((i=e.dir)==null?void 0:i.x)??0,((r=e.dir)==null?void 0:r.z)??0,.8),this.burst(t.x,t.y,t.z,16777215,4,3,.07,.2,2),e.element==="fire"&&this.burst(t.x,t.y,t.z,16730640,10,3,.16,.7,-3),e.element==="ice"&&this.burst(t.x,t.y,t.z,14677759,12,3.5,.09,.8,4),e.element==="lightning"&&this.burst(t.x,t.y,t.z,16774816,14,7,.06,.25,0);break}case"block":this.burst(t.x,t.y,t.z,16771496,14,6,.08,.35,10,((a=e.dir)==null?void 0:a.x)??0,((o=e.dir)==null?void 0:o.z)??0,.9),this.ring(t.x,t.y,t.z,16771496,.1,.55,.18,.6);break;case"parry":this.burst(t.x,t.y,t.z,16777215,26,8,.1,.5,4),this.ring(t.x,t.y,t.z,16774080,.2,1.8,.35,1);break;case"guardbreak":this.burst(t.x,t.y,t.z,16734784,24,7,.1,.5,6),this.ring(t.x,t.y,t.z,16734784,.2,1.6,.35,.9);break;case"clang":this.burst(t.x,t.y,t.z,16769674,16,6,.07,.3,10);break;case"dodge":e.blocked?this.burst(t.x,t.y,t.z,10475775,5,3,.07,.3,0):this.burst(t.x,.1,t.z,12167306,8,2.5,.2,.5,1);break;case"step":this.burst(t.x,.05,t.z,12167306,2,.9,.16,.45,.5);break;case"jump":case"land":this.burst(t.x,.08,t.z,12167306,e.type==="land"?9:5,2.6,.22,.55,.5),e.type==="land"&&this.ring(t.x,.05,t.z,13219990,.2,1.1,.3,.35);break;case"armorbreak":this.burst(t.x,t.y,t.z,10134452,24,5,.12,.8,14),this.ring(t.x,t.y,t.z,13214282,.2,1.3,.3,.8);break;case"death":this.burst(t.x,1,t.z,16756832,40,5,.12,1.2,1),this.ring(t.x,.06,t.z,16756832,.3,4.5,.8,.8);break;case"burst":this.ring(t.x,.1,t.z,n,.4,(e.radius??3)+.3,.45,.95),this.burst(t.x,.3,t.z,n,36,6,.14,.7,2);break;case"pulse":this.ring(t.x,.1,t.z,n,.4,(e.radius??3)+.3,.4,1),this.ring(t.x,.9,t.z,n,.2,e.radius??3,.35,.7),this.burst(t.x,1,t.z,n,30,7,.1,.5,0);break;case"ward":this.ring(t.x,.1,t.z,n,.3,1.4,.5,.8),this.burst(t.x,1,t.z,n,12,2.5,.1,.7,-1);break;case"special":this.ring(t.x,.05,t.z,n,.2,1.2,.35,.8);break;case"switch":this.burst(t.x,1.2,t.z,16777215,6,2,.07,.3,0);break;case"riposte":this.burst(t.x,1.3,t.z,16774080,8,3,.07,.3,0);break;case"dash":this.burst(t.x,.4,t.z,n,12,3,.12,.4,0);break}}update(e,t,n){for(let a=0;a<hn;a++){if(this.life[a]<=0){this.colA[a*4+3]=0,this.sizeA[a]=0;continue}this.life[a]-=e;const o=Math.max(0,this.life[a]/this.maxLife[a]),c=Math.max(0,1-this.drag[a]*e);this.vel[a*3]*=c,this.vel[a*3+1]=this.vel[a*3+1]*c-this.grav[a]*e,this.vel[a*3+2]*=c,this.posA[a*3]+=this.vel[a*3]*e,this.posA[a*3+1]+=this.vel[a*3+1]*e,this.posA[a*3+2]+=this.vel[a*3+2]*e,this.posA[a*3+1]<.02&&this.grav[a]>0&&(this.posA[a*3+1]=.02,this.vel[a*3+1]*=-.3),this.colA[a*4]=this.baseCol[a*3],this.colA[a*4+1]=this.baseCol[a*3+1],this.colA[a*4+2]=this.baseCol[a*3+2],this.colA[a*4+3]=o,this.sizeA[a]=this.baseSize[a]*(.4+o*.8)}const i=this.points.geometry;i.attributes.position.needsUpdate=!0,i.attributes.aColor.needsUpdate=!0,i.attributes.aSize.needsUpdate=!0;for(const a of this.rings)if(a.active){a.t+=e;const o=a.t/a.dur;if(o>=1){a.active=!1,a.mesh.visible=!1;continue}a.mesh.scale.setScalar(a.r0+(a.r1-a.r0)*(1-(1-o)*(1-o))),a.mat.opacity=(a.mat._o??1)*(1-o)}for(const a of t.fighters){let o=this.trails.get(a.id);o||(o=new _c,this.trails.set(a.id,o),this.group.add(o.mesh));const c=a.attack;c&&c.move.melee&&(c.phase==="active"||c.phase==="windup"&&c.t/c.dur>.6)&&n(a,this.tmpTip,this.tmpBase)&&o.push(this.tmpTip,this.tmpBase);const l=a.weapon.element;if(o.update(e,new Ce(l==="none"?13621480:Sn[l])),a.st.burnT>0&&this.rng()<e*40&&this.emit(a.pos.x+(this.rng()-.5)*.5,a.pos.y+.3+this.rng()*1.3,a.pos.z+(this.rng()-.5)*.5,0,1.6,0,16738842,.18,.5,-1),a.st.chillT>0&&this.rng()<e*18&&this.emit(a.pos.x+(this.rng()-.5)*.6,a.pos.y+.2+this.rng()*1.5,a.pos.z+(this.rng()-.5)*.6,0,-.4,0,13627391,.1,.8,.3),a.st.shockT>0&&this.rng()<e*30&&this.emit(a.pos.x+(this.rng()-.5)*.8,a.pos.y+this.rng()*1.7,a.pos.z+(this.rng()-.5)*.8,(this.rng()-.5)*4,(this.rng()-.5)*4,(this.rng()-.5)*4,16774816,.07,.15),a.st.wardT>0&&this.rng()<e*14){const h=this.rng()*6.28;this.emit(a.pos.x+Math.cos(h)*.8,a.pos.y+.2+this.rng()*1.5,a.pos.z+Math.sin(h)*.8,0,.5,0,7334143,.1,.6)}}const r=new Set;for(const a of t.projectiles){r.add(a.id);let o=this.projMeshes.get(a.id);o||(o=this.makeProjectile(a),this.projMeshes.set(a.id,o),this.group.add(o)),o.position.set(a.pos.x,a.pos.y,a.pos.z),a.kind==="arrow"?o.lookAt(a.pos.x+a.vel.x,a.pos.y+a.vel.y,a.pos.z+a.vel.z):a.kind==="wave"&&(o.rotation.y=Math.atan2(a.vel.x,a.vel.z));const c=a.spec.element==="none"?14540253:Sn[a.spec.element];this.rng()<e*60&&this.emit(a.pos.x,a.pos.y,a.pos.z,this.rng()-.5,this.rng()-.5+(a.wave?.8:0),this.rng()-.5,c,a.wave?.25:.1,.35,-1)}for(const[a,o]of this.projMeshes)r.has(a)||(o.removeFromParent(),this.projMeshes.delete(a))}makeProjectile(e){const t=e.spec.element==="none"?15261904:Sn[e.spec.element],n=new Bt;if(e.kind==="wave"){const i=new Ue(new fr(.5,.75,20,1,-Math.PI*.42,Math.PI*.84),new Ft({color:t,transparent:!0,opacity:.85,blending:Pn,side:Wt,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.rotation.z=Math.PI/2,i.scale.setScalar(Math.max(1,e.radius*1.4)),n.add(i)}else if(e.kind==="arrow"){const i=new Ue(new gt(.012,.012,.8,5),new Ft({color:14206880}));i.rotation.x=Math.PI/2,n.add(i);const r=new Ue(new ei(.035,.12,5),new Ft({color:t}));r.rotation.x=Math.PI/2,r.position.z=.44,n.add(r)}else n.add(new Ue(new nn(Math.max(.12,e.radius),8,6),new Ft({color:t,transparent:!0,opacity:.95,blending:Pn})));return n}clearAll(){this.life.fill(0);for(const e of this.trails.values())e.clear(),e.mesh.removeFromParent();this.trails.clear();for(const e of this.projMeshes.values())e.removeFromParent();this.projMeshes.clear();for(const e of this.rings)e.active=!1,e.mesh.visible=!1}}class qx{constructor(){N(this,"ctx",null);N(this,"master");N(this,"sfx");N(this,"music");N(this,"noiseBuf",null);N(this,"ambience",[]);N(this,"volume",{master:.8,sfx:.9,music:.5})}unlock(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.sfx=this.ctx.createGain(),this.music=this.ctx.createGain(),this.sfx.connect(this.master),this.music.connect(this.master);const t=this.ctx.createDynamicsCompressor();this.master.connect(t),t.connect(this.ctx.destination);const n=this.ctx.sampleRate*1.5,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),r=i.getChannelData(0);for(let a=0;a<n;a++)r[a]=Math.random()*2-1;this.noiseBuf=i,this.applyVolume()}catch{this.ctx=null}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}applyVolume(){this.ctx&&(this.master.gain.value=this.volume.master,this.sfx.gain.value=this.volume.sfx,this.music.gain.value=this.volume.music)}noise(e,t,n,i,r,a=0,o,c){if(!this.ctx||!this.noiseBuf)return;const l=this.ctx,h=l.currentTime+a,u=l.createBufferSource();u.buffer=this.noiseBuf,u.loop=!0;const d=l.createBiquadFilter();d.type=i,d.frequency.setValueAtTime(t,h),d.Q.value=n,o&&d.frequency.exponentialRampToValueAtTime(o,h+e);const f=l.createGain();f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(r,h+Math.min(.02,e*.3)),f.gain.exponentialRampToValueAtTime(1e-4,h+e),u.connect(d),d.connect(f),f.connect(c??this.sfx),u.start(h,Math.random()),u.stop(h+e+.05)}tone(e,t,n,i,r=0,a,o){if(!this.ctx)return;const c=this.ctx,l=c.currentTime+r,h=c.createOscillator();h.type=n,h.frequency.setValueAtTime(e,l),a&&h.frequency.exponentialRampToValueAtTime(Math.max(20,a),l+t);const u=c.createGain();u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(i,l+.005),u.gain.exponentialRampToValueAtTime(1e-4,l+t),h.connect(u),u.connect(o??this.sfx),h.start(l),h.stop(l+t+.05)}metal(e,t,n=.5){for(const i of[1,2.76,5.4,8.93])this.tone(e*i,n/(1+i*.25),"sine",t/(1+i*.5));this.noise(.04,5e3,1,"highpass",t*.6)}ui(e="click"){e==="hover"?this.tone(900,.04,"sine",.05):e==="back"?this.tone(300,.1,"triangle",.12,0,200):e==="confirm"?(this.tone(440,.12,"triangle",.15),this.tone(660,.18,"triangle",.15,.07)):this.tone(520,.06,"square",.07,0,380)}swing(e,t){const n=t?.3:.18,i=t?.38:.22;this.noise(i,t?500:900,1.2,"bandpass",n,0,t?1600:3e3),e==="fire"&&this.noise(i*1.5,300,.7,"lowpass",.12),e==="ice"&&this.tone(1800,i,"sine",.05,0,2600),e==="lightning"&&(this.tone(300,.1,"sawtooth",.06,0,1200),this.noise(.08,6e3,1,"highpass",.1)),e==="energy"&&this.tone(500,i,"sawtooth",.05,0,1400),e==="light"&&this.tone(880,i,"sine",.05,0,1320),e==="earth"&&this.tone(90,i,"triangle",.2,0,60)}play(e,t=0){if(!this.ctx||this.ctx.state!=="running")return;const n=1/(1+t*.08);if(n<.15)return;const i=a=>a*n,r=e.element??"none";switch(e.type){case"swing":this.swing(r,!!e.heavy);break;case"hit":{const a=e.heavy?1.4:1;this.tone(130*(e.heavy?.7:1),.18,"sine",i(.45*a),0,50),this.noise(.12,1800,.8,"bandpass",i(.3*a)),e.zone==="head"&&this.tone(1100,.08,"triangle",i(.1)),r==="fire"&&this.noise(.3,600,.6,"lowpass",i(.2)),r==="lightning"&&(this.noise(.15,5e3,1,"highpass",i(.25)),this.tone(150,.12,"sawtooth",i(.12),0,60)),r==="ice"&&this.metal(1800,i(.06),.4);break}case"block":this.metal(420+Math.random()*60,i(.28),.35),this.tone(110,.1,"sine",i(.25),0,60);break;case"parry":this.metal(1250,i(.38),.7),this.tone(80,.15,"sine",i(.3),0,50);break;case"guardbreak":this.metal(300,i(.4),.6),this.tone(70,.4,"sawtooth",i(.2),0,35);break;case"clang":this.metal(700+Math.random()*100,i(.3),.5);break;case"dodge":e.blocked?this.tone(1500,.08,"sine",i(.07)):this.noise(.18,700,.7,"bandpass",i(.14),0,300);break;case"jump":this.noise(.08,500,.5,"lowpass",i(.08));break;case"land":this.tone(70,.12,"sine",i(.2),0,45),this.noise(.1,400,.5,"lowpass",i(.12));break;case"step":this.noise(.05,260+Math.random()*120,.6,"lowpass",i(.07));break;case"projectile":this.noise(.2,1400,1,"bandpass",i(.12),0,400),r!=="none"&&this.tone(600,.15,"sine",i(.05),0,900);break;case"special":this.tone(220,.4,"sine",i(.12),0,440);break;case"wave":this.tone(110,.5,"sawtooth",i(.12),0,70),this.noise(.4,400,.5,"lowpass",i(.15));break;case"burst":this.tone(70,.5,"sine",i(.4),0,35),this.noise(.45,800,.6,"lowpass",i(.25),0,200);break;case"pulse":this.tone(300,.4,"sawtooth",i(.15),0,80),this.metal(900,i(.15),.6);break;case"ward":this.tone(660,.5,"sine",i(.12),0,990),this.tone(990,.5,"sine",i(.08),.05,1320);break;case"armorbreak":this.metal(250,i(.4),.8),this.noise(.3,2500,.8,"bandpass",i(.25));break;case"death":this.tone(110,.9,"sawtooth",i(.25),0,40),this.noise(.5,300,.6,"lowpass",i(.2));break;case"switch":this.noise(.1,2500,1,"highpass",i(.1)),this.metal(900,i(.06),.2);break;case"dash":this.noise(.25,600,1,"bandpass",i(.18),0,2500);break;case"riposte":this.tone(600,.1,"triangle",i(.08),0,900);break}}startAmbience(){if(!this.ctx||this.ambience.length)return;const e=this.ctx,t=(n,i,r)=>{const a=e.createOscillator();a.type=i,a.frequency.value=n;const o=e.createGain();return o.gain.value=r,a.connect(o),o.connect(this.music),a.start(),this.ambience.push(a,o),a};if(t(55,"sine",.12),t(82.4,"triangle",.05),t(.07,"sine",40),this.noiseBuf){const n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=380;const r=e.createGain();r.gain.value=.05,n.connect(i),i.connect(r),r.connect(this.music),n.start(),this.ambience.push(n,i,r)}}stopAmbience(){var e;for(const t of this.ambience){try{(e=t.stop)==null||e.call(t)}catch{}try{t.disconnect()}catch{}}this.ambience=[]}}const qu={forward:"Move forward",back:"Move back",left:"Move left",right:"Move right",sprint:"Sprint",jump:"Jump",light:"Light attack",heavy:"Heavy attack",special:"Special",block:"Block / Parry",dodge:"Dodge",lockon:"Lock on",switchMain:"Main weapon",switchSecondary:"Secondary weapon",switchToggle:"Swap weapon",pause:"Pause",camLeft:"Camera left",camRight:"Camera right",camUp:"Camera up",camDown:"Camera down"},Ma=Object.keys(qu),Yu={forward:["KeyW"],back:["KeyS"],left:["KeyA"],right:["KeyD"],sprint:["ShiftLeft"],jump:["Space"],light:["Mouse0"],heavy:["KeyE"],special:["KeyV"],block:["Mouse2","KeyQ"],dodge:["KeyC","AltLeft"],lockon:["Tab","KeyZ","Mouse1"],switchMain:["Digit1"],switchSecondary:["Digit2"],switchToggle:["KeyX"],pause:["Escape"],camLeft:["ArrowLeft"],camRight:["ArrowRight"],camUp:["ArrowUp"],camDown:["ArrowDown"]},Yx=()=>({sensitivity:1,invertY:!1,bindings:JSON.parse(JSON.stringify(Yu))});function jx(s){return s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):s==="Mouse0"?"Left Click":s==="Mouse1"?"Middle Click":s==="Mouse2"?"Right Click":s.replace("Left"," L").replace("Right"," R").replace("Arrow","")}const ju="aetherfall.input.v2";function $x(){const s=Yx();try{const e=localStorage.getItem(ju);if(!e)return s;const t=JSON.parse(e);if(typeof t.sensitivity=="number"&&(s.sensitivity=Math.min(3,Math.max(.2,t.sensitivity))),typeof t.invertY=="boolean"&&(s.invertY=t.invertY),t.bindings)for(const n of Ma)Array.isArray(t.bindings[n])&&t.bindings[n].every(i=>typeof i=="string")&&(s.bindings[n]=t.bindings[n])}catch{}return s}function Mo(s){try{localStorage.setItem(ju,JSON.stringify(s))}catch{}}class Kx{constructor(e,t){N(this,"down",new Set);N(this,"pressedCodes",new Set);N(this,"dx",0);N(this,"dy",0);N(this,"capture",null);N(this,"onPointerLockChange",null);N(this,"onPauseKey",null);N(this,"reverse",new Map);N(this,"handlers",[]);this.canvas=e,this.settings=t,this.rebuild();const n=(i,r,a,o)=>{i.addEventListener(r,a,o),this.handlers.push([i,r,a])};n(window,"keydown",i=>{if(this.capture){i.preventDefault();const r=this.capture;this.capture=null,r(i.code);return}if(i.repeat){this.isGameKey(i.code)&&i.preventDefault();return}this.isGameKey(i.code)&&document.pointerLockElement&&i.preventDefault(),this.down.add(i.code),this.pressedCodes.add(i.code)}),n(window,"keyup",i=>{this.down.delete(i.code)}),n(window,"blur",()=>{this.down.clear()}),n(e,"mousedown",i=>{if(this.capture){i.preventDefault();const a=this.capture;this.capture=null,a("Mouse"+i.button);return}if(!document.pointerLockElement)return;i.preventDefault();const r="Mouse"+i.button;this.down.add(r),this.pressedCodes.add(r)}),n(window,"mouseup",i=>{this.down.delete("Mouse"+i.button)}),n(e,"contextmenu",i=>i.preventDefault()),n(document,"mousemove",i=>{document.pointerLockElement&&(this.dx+=i.movementX,this.dy+=i.movementY)}),n(document,"pointerlockchange",()=>{var r;const i=!!document.pointerLockElement;i||this.down.clear(),(r=this.onPointerLockChange)==null||r.call(this,i)})}isGameKey(e){return this.reverse.has(e)}rebuild(){this.reverse.clear();for(const e of Ma)for(const t of this.settings.bindings[e]){const n=this.reverse.get(t)??[];n.push(e),this.reverse.set(t,n)}}requestLock(){try{const e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}releaseLock(){document.pointerLockElement&&document.exitPointerLock()}get locked(){return!!document.pointerLockElement}listenForBinding(e){this.capture=e}cancelCapture(){this.capture=null}resetBindings(){this.settings.bindings=JSON.parse(JSON.stringify(Yu)),this.rebuild()}poll(e){const t=new Set,n=new Set;for(const c of this.down)for(const l of this.reverse.get(c)??[])t.add(l);for(const c of this.pressedCodes)for(const l of this.reverse.get(c)??[])n.add(l);this.pressedCodes.clear();const i=.0022*this.settings.sensitivity;let r=this.dx*i,a=this.dy*i*(this.settings.invertY?-1:1);this.dx=0,this.dy=0;const o=.045*this.settings.sensitivity;return t.has("camLeft")&&(r-=o),t.has("camRight")&&(r+=o),t.has("camUp")&&(a-=o*.6),t.has("camDown")&&(a+=o*.6),{held:t,pressed:n,lookDX:r,lookDY:a}}dispose(){for(const[e,t,n]of this.handlers)e.removeEventListener(t,n);this.handlers.length=0}}const $u="aetherfall.state.v2",Jx=()=>({difficulty:"warrior",quality:"balanced",autoQuality:!0,autoLock:!0,showFps:!1,master:.8,sfx:.9,music:.5,shake:1});function Zx(){const s={settings:Jx(),loadout:hs()};try{const e=JSON.parse(localStorage.getItem($u)||"null");if(!e)return s;Object.assign(s.settings,e.settings??{});const t=e.loadout;if(t){typeof t.main=="string"&&ti[t.main]&&(s.loadout.main=t.main),typeof t.secondary=="string"&&ti[t.secondary]&&(s.loadout.secondary=t.secondary),s.loadout.shield=typeof t.shield=="string"&&ti[t.shield]?t.shield:null;for(const n of rn)try{t.armor&&Ra(t.armor[n]).slot===n&&(s.loadout.armor[n]=t.armor[n])}catch{}}}catch{}return s}function Ku(s){try{localStorage.setItem($u,JSON.stringify(s))}catch{}}function Bh(){try{const s=localStorage.getItem("aetherfall.server");if(s)return s;if(typeof location<"u"&&location.hostname)return location.port==="5173"||location.port==="4173"?`ws://${location.hostname}:8080/ws`:`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`}catch{}return"ws://localhost:8080/ws"}function Qx(s){try{localStorage.setItem("aetherfall.server",s)}catch{}}class ey{constructor(){N(this,"ws",null);N(this,"role",null);N(this,"code","");N(this,"onMessage",()=>{});N(this,"onStatus",()=>{});N(this,"onClose",()=>{});N(this,"onPeer",()=>{});N(this,"onJoined",()=>{});N(this,"onPeerLeft",()=>{})}get open(){return!!this.ws&&this.ws.readyState===1}connect(e){return new Promise((t,n)=>{let i;try{i=new WebSocket(e)}catch{n(new Error("Bad server address"));return}this.ws=i;const r=setTimeout(()=>{try{i.close()}catch{}n(new Error("Connection timed out"))},8e3);i.onopen=()=>{clearTimeout(r),t()},i.onerror=()=>{clearTimeout(r),n(new Error("Could not reach server"))},i.onclose=()=>{this.ws=null,this.onClose("Disconnected from server")},i.onmessage=a=>{let o;try{o=JSON.parse(String(a.data))}catch{return}if(!(!o||typeof o.t!="string"))switch(o.t){case"created":this.code=String(o.code),this.role="host",this.onStatus("created");break;case"joined":this.code=String(o.code),this.role="guest",this.onJoined();break;case"peer":this.onPeer();break;case"peer_left":this.onPeerLeft();break;case"error":this.onStatus("error:"+String(o.msg));break;default:this.onMessage(o)}}})}create(){this.role=null,this.send({t:"create"})}join(e){this.send({t:"join",code:e.trim().toUpperCase()})}send(e){this.open&&this.ws.send(JSON.stringify(e))}close(){const e=this.ws;this.ws=null,this.onClose=()=>{};try{e==null||e.close()}catch{}this.role=null,this.code=""}}const ty={greatsword:"sword",longsword:"sword",rapier:"rapier",dagger:"dagger",axe:"axe",spear:"spear",polearm:"polearm",hammer:"hammer",dualblades:"dual",bow:"bow",flamesword:"sword",icelance:"spear",lightning:"fist",windblades:"dual",earthmaul:"hammer",lightblade:"sword",cyberblade:"sword",energyshield:"shield",kiteshield:"shield"},ny={sword:'<path d="M12 2l2 12h-4zM8 14h8v2H8zM11 16h2v6h-2z"/>',rapier:'<path d="M12 1l1 15h-2zM7 16h10v1.5H7zM11 17.5h2v5h-2z"/>',dagger:'<path d="M12 6l2 8h-4zM9 14h6v1.6H9zM11 15.6h2v5h-2z"/>',axe:'<path d="M11 2h2v20h-2zM13 3c6 0 8 3 8 6s-2 5-8 5z"/>',spear:'<path d="M12 1l3 6h-6zM11 7h2v16h-2z"/>',polearm:'<path d="M11 4h2v19h-2zM13 4c5 0 7 3 7 5s-2 4-7 4zM12 0l2 4h-4z"/>',hammer:'<path d="M11 8h2v15h-2zM5 3h14v6H5z"/>',dual:'<path d="M7 3l2 11H5zM17 3l2 11h-4zM4 14h6v1.6H4zM14 14h6v1.6h-6zM6.2 15.6h1.6V21H6.2zM16.2 15.6h1.6V21h-1.6z"/>',bow:'<path d="M7 2c9 3 9 17 0 20l-1-1.5c7-3 7-14 0-17zM6 12h13M17 10l3 2-3 2"/>',fist:'<path d="M6 10h10v8H6zM16 12h3v4h-3zM7 6h2v4H7zM10 5h2v5h-2zM13 6h2v4h-2z"/>',shield:'<path d="M12 2l8 3v7c0 5-4 9-8 10-4-1-8-5-8-10V5z"/>'},zh=(s,e="currentColor")=>`<svg viewBox="0 0 24 24" width="34" height="34" fill="${e}" stroke="${e}" stroke-width="0.4">${ny[ty[s]??"sword"]}</svg>`;function iy(s){const e=s.light.reduce((n,i)=>n+i.windup+i.active+i.recovery,0)/s.light.length,t=s.light.reduce((n,i)=>n+i.damage*Math.max(1,i.multi),0)/s.light.length;return{damage:Math.min(1,t/24),speed:Math.min(1,1/e/2.4),reach:Math.min(1,s.light[0].reach/2.2),defense:s.defense.blockReduction,mobility:Math.min(1,(s.moveMult-.8)/.35)}}const Xn=(s,e,t="#c9a24a")=>`<div class="stat"><span>${s}</span><i><b style="width:${Math.round(Math.max(.04,Math.min(1,e))*100)}%;background:${t}"></b></i></div>`;class sy{constructor(e,t,n,i,r){N(this,"root");N(this,"screen","none");N(this,"hud");N(this,"overlay");N(this,"slotTab","main");N(this,"prev","menu");N(this,"el",{});N(this,"toastT",0);N(this,"markerEl");N(this,"netMode",!1);N(this,"netMsg","");N(this,"joinCode","");N(this,"roomCode","");N(this,"lastResult",null);N(this,"ghostHp",1);N(this,"ghostEn",1);N(this,"weaponKey","");this.state=t,this.input=n,this.audio=i,this.hooks=r,this.root=e,this.overlay=document.createElement("div"),this.overlay.className="overlay",e.appendChild(this.overlay),this.hud=document.createElement("div"),this.hud.className="hud hidden",e.appendChild(this.hud),this.buildHud(),this.overlay.addEventListener("click",a=>this.onClick(a)),this.overlay.addEventListener("input",a=>this.onInput(a)),this.overlay.addEventListener("change",a=>this.onInput(a)),this.overlay.addEventListener("mouseover",a=>{const o=a.target.closest("button,.card");o&&!o.classList.contains("hov")&&ry(this.audio)})}get current(){return this.screen}persist(){Ku(this.state)}show(e,t){switch(t&&(this.lastResult=t),e!=="settings"&&e!=="weapons"&&e!=="armor"&&e!=="controls"&&(this.prev=e==="none"?"menu":e),this.screen=e,this.overlay.className="overlay"+(e==="none"?" hidden":e==="pause"||e==="result"?" dim":""),this.hud.classList.toggle("hidden",!(e==="none"||e==="pause"||e==="result")),e){case"none":this.overlay.innerHTML="";break;case"menu":this.overlay.innerHTML=this.menuHtml();break;case"multi":this.overlay.innerHTML=this.multiHtml();break;case"weapons":this.overlay.innerHTML=this.weaponsHtml();break;case"armor":this.overlay.innerHTML=this.armorHtml();break;case"settings":this.overlay.innerHTML=this.settingsHtml();break;case"controls":this.overlay.innerHTML=this.settingsHtml();break;case"pause":this.overlay.innerHTML=this.pauseHtml();break;case"result":this.overlay.innerHTML=this.resultHtml(t??this.lastResult);break}}menuHtml(){return`<div class="menu"><div class="title"><small>THE SUNKEN COLOSSEUM</small><h1>AETHERFALL<br><span>DUEL</span></h1></div>
      <div class="menu-col">
        <button class="big" data-act="duel">Play Duel</button>
        <button class="big" data-act="practice">Practice</button>
        <button class="big" data-act="multi">Multiplayer</button>
        <button data-act="weapons">Weapon Select</button>
        <button data-act="armor">Armor Select</button>
        <button data-act="settings">Settings</button>
        <div class="diff"><label>Opponent</label>${this.diffSelect()}</div>
        <p class="tiny">Click the arena to capture the mouse. Esc pauses. WASD move · LMB light · E heavy · RMB block (tap just before a hit to parry) · C dodge · V special · Tab lock-on · 1/2/X weapons</p>
      </div></div>`}multiHtml(){return`<div class="panel"><h2>Multiplayer</h2><p class="tiny">1v1 online duel. One player hosts and shares the 4-letter code; the other joins. Uses your current loadout.</p>
      <label class="row"><span>Server</span><input type="text" data-set="serverUrl" value="${Bh()}" style="width:260px"></label>
      <div class="menu-col"><button class="big" data-act="host">Host a Match</button>
      <div class="row"><input type="text" id="join-code" data-set="joinCode" maxlength="4" placeholder="CODE" value="${this.joinCode}" style="width:90px;text-transform:uppercase;text-align:center;letter-spacing:.3em"><button data-act="join">Join Match</button></div>
      <div id="net-status" class="tiny" style="min-height:2.4em;color:var(--gold)">${this.netMsg}</div>
      <button data-act="cancelnet">Back</button></div></div>`}setNetStatus(e,t=""){this.netMsg=e,t&&(this.roomCode=t);const n=this.overlay.querySelector("#net-status");n&&(n.textContent=e)}diffSelect(){return`<select data-set="difficulty">${["novice","warrior","veteran","master"].map(t=>`<option value="${t}" ${this.state.settings.difficulty===t?"selected":""}>${t[0].toUpperCase()+t.slice(1)}</option>`).join("")}</select>`}weaponsHtml(){const e=this.state.loadout,t=_i(this.slotTab==="main"?e.main:e.secondary),n=iy(t),i=as.map(o=>{const c=_i(o);return`<div class="card ${(this.slotTab==="main"?e.main:e.secondary)===o?"sel":""}" data-weapon="${o}" style="--el:${Gs(Sn[c.element])}">${zh(o,Gs(Sn[c.element]))}<b>${c.name}</b><em>${tx[c.element]}</em></div>`}).join(""),r=xa(e.main),a=[...t.light,t.heavy,t.special].map(o=>`<li><b>${o.name}</b> <em>${o.kind}</em></li>`).join("");return`<div class="panel wide"><header><h2>Weapon Select</h2><div class="tabs"><button class="${this.slotTab==="main"?"on":""}" data-tab="main">Main Hand</button><button class="${this.slotTab==="secondary"?"on":""}" data-tab="secondary">Secondary</button></div></header>
      <div class="split"><div class="grid">${i}</div>
      <aside class="detail"><h3 style="color:${Gs(Sn[t.element])}">${t.name}</h3><p>${t.blurb}</p>
        ${Xn("Damage",n.damage)}${Xn("Speed",n.speed)}${Xn("Reach",n.reach)}${Xn("Defense",n.defense)}${Xn("Mobility",n.mobility)}
        <ul class="moves">${a}</ul>
        <div class="shield"><label>Off-hand shield ${r?"":"<em>(one-handed main weapon only)</em>"}</label>
          <select data-set="shield" ${r?"":"disabled"}><option value="">None</option><option value="kiteshield" ${e.shield==="kiteshield"?"selected":""}>Kite Shield</option><option value="energyshield" ${e.shield==="energyshield"?"selected":""}>Energy Shield</option></select></div>
        <p class="tiny">Switch in battle with 1 / 2 / X.</p></aside></div>
      <footer><button data-act="back">Done</button></footer></div>`}armorHtml(){const e=Hu(this.state.loadout.armor),t=ha(e),n=rn.map(r=>`<div class="slot"><h4>${r}</h4><div class="tiers">${H_(r).map(a=>`<div class="card armor ${this.state.loadout.armor[r]===a.id?"sel":""}" data-armor="${r}:${a.id}"><b>${a.name}</b><em>${a.tier}</em>
        ${Xn("Slash",a.resist.slash??0,"#9fb0c8")}${Xn("Pierce",a.resist.pierce??0,"#9fb0c8")}${Xn("Blunt",a.resist.blunt??0,"#9fb0c8")}${Xn("Magic",(a.resist.fire??0)*2,"#b78cff")}
        <small>Weight ${a.weight} · Durability ${a.durability} · Poise ${a.poise}</small>${a.trait?`<small class="trait">${a.trait}</small>`:""}</div>`).join("")}</div></div>`).join(""),i=Math.round((1-Math.min(.22,t*.0045))*100);return`<div class="panel wide"><header><h2>Armor Select</h2><div class="sum">Total weight <b>${t}</b> · Movement ${i}% · Stamina regen ${Math.round(Math.max(14,28-t*.35))}/s</div></header>
      <div class="armor-grid">${n}</div><footer><button data-act="back">Done</button></footer></div>`}settingsHtml(){const e=this.state.settings,t=this.input.settings,n=(a,o,c,l,h,u=.05)=>`<label class="row"><span>${a}</span><input type="range" data-set="${o}" min="${l}" max="${h}" step="${u}" value="${c}"></label>`,i=(a,o,c)=>`<label class="row"><span>${a}</span><input type="checkbox" data-set="${o}" ${c?"checked":""}></label>`,r=Ma.map(a=>`<div class="bind"><span>${qu[a]}</span>${[0,1].map(o=>`<button data-bind="${a}:${o}">${t.bindings[a][o]?jx(t.bindings[a][o]):"—"}</button>`).join("")}</div>`).join("");return`<div class="panel wide"><header><h2>Settings</h2></header><div class="split cols">
      <div><h3>Game</h3>
        <label class="row"><span>Quality</span><select data-set="quality">${["low","balanced","high"].map(a=>`<option value="${a}" ${e.quality===a?"selected":""}>${a}</option>`).join("")}</select></label>
        ${i("Auto-lower quality if slow","autoQuality",e.autoQuality)}${i("Auto lock-on at start","autoLock",e.autoLock)}${i("Show FPS","showFps",e.showFps)}
        <label class="row"><span>Opponent</span>${this.diffSelect()}</label>
        <h3>Audio</h3>${n("Master","master",e.master,0,1)}${n("Effects","sfx",e.sfx,0,1)}${n("Ambience","music",e.music,0,1)}
        <h3>Camera</h3>${n("Mouse sensitivity","sensitivity",t.sensitivity,.2,3)}${n("Screen shake","shake",e.shake,0,1)}${i("Invert Y","invertY",t.invertY)}</div>
      <div><h3>Controls <small>(click, then press a key or mouse button)</small></h3><div class="binds">${r}</div><button data-act="resetbinds">Reset controls</button></div></div>
      <footer><button data-act="back">Done</button></footer></div>`}pauseHtml(){return`<div class="panel"><h2>Paused</h2><div class="menu-col"><button class="big" data-act="resume">Resume</button>${this.netMode?"":'<button data-act="restart">Restart Match</button>'}<button data-act="weapons">Loadout (applies on restart)</button><button data-act="armor">Armor (applies on restart)</button><button data-act="settings">Settings</button><button data-act="menu">Quit to Menu</button></div></div>`}resultHtml(e){const t=Math.floor(e.time/60),n=Math.floor(e.time%60).toString().padStart(2,"0");return`<div class="panel result ${e.won?"win":"lose"}"><h2>${e.won?"VICTORY":"DEFEATED"}</h2>
      <div class="stats"><div><b>${t}:${n}</b><span>Time</span></div><div><b>${Math.round(e.damage)}</b><span>Damage</span></div><div><b>${e.hits}</b><span>Hits</span></div><div><b>${e.parries}</b><span>Parries</span></div><div><b>${e.blocks}</b><span>Blocks</span></div><div><b>${e.dodges}</b><span>Dodges</span></div></div>
      <div class="menu-col"><button class="big" data-act="restart">${this.netMode?"Rematch (host starts)":"Rematch"}</button><button data-act="weapons">Change Loadout</button><button data-act="menu">Main Menu</button></div></div>`}onClick(e){const t=e.target,n=t.closest("[data-act]"),i=t.closest("[data-weapon]"),r=t.closest("[data-tab]"),a=t.closest("[data-armor]"),o=t.closest("[data-bind]");if(o)return this.rebind(o);if(i){const c=i.dataset.weapon;this.slotTab==="main"?this.state.loadout.main=c:this.state.loadout.secondary=c,xa(this.state.loadout.main)||(this.state.loadout.shield=null),this.persist(),this.audio.ui("confirm"),this.show("weapons");return}if(r){this.slotTab=r.dataset.tab,this.audio.ui("click"),this.show("weapons");return}if(a){const[c,l]=a.dataset.armor.split(":");this.state.loadout.armor[c]=l,Ra(l),this.persist(),this.audio.ui("confirm"),this.show("armor");return}if(n)switch(this.audio.ui("click"),n.dataset.act){case"multi":this.show("multi");break;case"host":this.hooks.hostGame(this.serverUrlValue());break;case"join":this.hooks.joinGame(this.serverUrlValue(),this.joinCode);break;case"cancelnet":this.netMsg="",this.hooks.toMenu();break;case"duel":this.hooks.startMatch("duel");break;case"practice":this.hooks.startMatch("practice");break;case"weapons":this.show("weapons");break;case"armor":this.show("armor");break;case"settings":this.show("settings");break;case"back":this.show(this.prev==="none"?"menu":this.prev);break;case"resume":this.hooks.resume();break;case"restart":this.hooks.restart();break;case"menu":this.hooks.toMenu();break;case"resetbinds":this.input.resetBindings(),Mo(this.input.settings),this.show("settings");break}}serverUrlValue(){const e=this.overlay.querySelector("input[data-set=serverUrl]");return((e==null?void 0:e.value)||Bh()).trim()}rebind(e){const[t,n]=e.dataset.bind.split(":"),i=Number(n);e.textContent="Press…",e.classList.add("listening"),this.input.listenForBinding(r=>{const a=this.input.settings.bindings;if(r!=="Escape"){for(const c of Ma)a[c]=a[c].filter(l=>l!==r);const o=a[t];o[i]=r,a[t]=o.filter(Boolean)}this.input.rebuild(),Mo(this.input.settings),this.show("settings")})}onInput(e){var o;const t=e.target,n=(o=t.dataset)==null?void 0:o.set;if(!n||n==="serverUrl")return;if(n==="joinCode"){this.joinCode=t.value.toUpperCase();return}const i=this.state.settings,r=this.input.settings,a=t instanceof HTMLInputElement&&t.type==="checkbox"?t.checked:t instanceof HTMLInputElement&&t.type==="range"?Number(t.value):t.value;n==="sensitivity"||n==="invertY"?(r[n]=a,Mo(this.input.settings)):n==="shield"?(this.state.loadout.shield=a||null,this.persist()):(i[n]=a,this.persist(),this.hooks.settingsChanged())}buildHud(){this.hud.innerHTML=`
      <div class="hud-tl"><div class="name" id="h-name">You</div><div class="bar hp"><i id="h-hp"></i><i class="ghost" id="h-hpg"></i></div><div class="bar st"><i id="h-st"></i></div><div class="pips" id="h-armor"></div></div>
      <div class="hud-top"><div class="name" id="e-name"></div><div class="bar hp enemy"><i id="e-hp"></i><i class="ghost" id="e-hpg"></i></div><div class="bar st thin"><i id="e-st"></i></div></div>
      <div class="hud-bl" id="h-weapons"></div>
      <div class="hud-br" id="h-hints"></div>
      <div class="toast" id="h-toast"></div><div class="banner" id="h-banner"></div><div class="vignette" id="h-vig"></div><div class="marker" id="h-marker"></div><div class="fps" id="h-fps"></div>
      <div class="status" id="h-status"></div>`;for(const e of["h-name","h-hp","h-hpg","h-st","h-armor","e-name","e-hp","e-hpg","e-st","h-weapons","h-hints","h-toast","h-banner","h-vig","h-marker","h-fps","h-status"])this.el[e]=this.hud.querySelector("#"+e);this.markerEl=this.el["h-marker"]}setHud(e,t,n,i,r,a,o){var m;const c=this.el,l=e.health/e.maxHealth;if(this.ghostHp=Math.max(l,this.ghostHp-i*.25),c["h-hp"].style.width=(l*100).toFixed(1)+"%",c["h-hpg"].style.width=(this.ghostHp*100).toFixed(1)+"%",c["h-st"].style.width=(e.stamina/e.maxStamina*100).toFixed(1)+"%",c["h-st"].classList.toggle("low",e.stamina<20),c["h-armor"].innerHTML=rn.map(p=>{const M=e.armor[p],y=M.broken?0:M.dur/M.def.durability;return`<span class="pip ${M.broken?"broken":y<.4?"worn":""}" title="${M.def.name}"><b style="height:${Math.round(y*100)}%"></b><em>${p[0].toUpperCase()}</em></span>`}).join(""),t){const p=t.health/t.maxHealth;this.ghostEn=Math.max(p,this.ghostEn-i*.25),c["e-name"].textContent=n,c["e-hp"].style.width=(p*100).toFixed(1)+"%",c["e-hpg"].style.width=(this.ghostEn*100).toFixed(1)+"%",c["e-st"].style.width=(t.stamina/t.maxStamina*100).toFixed(1)+"%"}const h=e.weapon,u=e.slot+e.loadout.main+e.loadout.secondary+(((m=e.shield)==null?void 0:m.id)??""),d=o;u!==this.weaponKey&&(this.weaponKey=u);const f=(p,M,y)=>{const _=_i(M);return`<div class="wslot ${y?"on":""}" style="--el:${Gs(Sn[_.element])}">${zh(M,Gs(Sn[_.element]))}<span>${p}</span><em>${_.name}</em></div>`};c["h-weapons"].innerHTML=f("1",e.loadout.main,e.slot==="main")+f("2",e.loadout.secondary,e.slot==="secondary")+`<div class="special ${d<=0?"ready":""}"><span>V</span><b>${h.special.name}</b><i style="width:${d<=0?100:Math.max(0,100-d/Math.max(.1,h.special.cooldown)*100)}%"></i></div>`;const g=[],v=e.st;v.burnT>0&&g.push('<span class="fire">Burning</span>'),v.chillT>0&&g.push('<span class="ice">Chilled</span>'),v.shockT>0&&g.push('<span class="shock">Shocked</span>'),v.wardT>0&&g.push('<span class="ward">Ward</span>'),v.hasteT>0&&g.push('<span class="haste">Haste</span>'),e.riposteT>0&&g.push('<span class="rip">Riposte!</span>'),e.counterCharge>0&&g.push(`<span class="ward">Charge ×${e.counterCharge}</span>`),c["h-status"].innerHTML=g.join(""),c["h-fps"].style.display=a?"block":"none",a&&r!==null&&(c["h-fps"].textContent=Math.round(r)+" fps")}setHints(e){this.el["h-hints"].innerHTML!==e&&(this.el["h-hints"].innerHTML=e)}toast(e,t=""){const n=this.el["h-toast"];n.textContent=e,n.className="toast show "+t,this.toastT=1.1}tick(e){this.toastT>0&&(this.toastT-=e,this.toastT<=0&&(this.el["h-toast"].className="toast"));const t=this.el["h-vig"],n=parseFloat(t.dataset.o||"0");if(n>0){const i=Math.max(0,n-e*2.2);t.dataset.o=String(i),t.style.opacity=String(i)}}vignette(e){const t=this.el["h-vig"];t.dataset.o=String(e),t.style.opacity=String(e)}banner(e){const t=this.el["h-banner"];t.textContent=e,t.className=e?"banner show":"banner"}setMarker(e,t,n){this.markerEl.style.display=n?"block":"none",n&&(this.markerEl.style.transform=`translate(${e.toFixed(0)}px, ${t.toFixed(0)}px)`)}resetGhost(){this.ghostHp=1,this.ghostEn=1}}function ry(s){s.ui("hover")}const Ie=s=>Math.round(s*100)/100,Fe=(s,e=0)=>typeof s=="number"&&Number.isFinite(s)?s:e;function Ys(s){var t;const e=hs();try{s&&typeof s.main=="string"&&ti[s.main]&&(e.main=s.main),s&&typeof s.secondary=="string"&&ti[s.secondary]&&(e.secondary=s.secondary),e.shield=s&&typeof s.shield=="string"&&ti[s.shield]?s.shield:null;for(const n of rn){const i=(t=s==null?void 0:s.armor)==null?void 0:t[n];if(typeof i=="string")try{Ra(i).slot===n&&(e.armor[n]=i)}catch{}}}catch{}return e}let ea=null;function ay(s){if(!ea){ea=new Map;for(const e of Object.values(ti))for(const t of[...e.light,e.heavy,e.special])ea.set(t.id,t)}return ea.get(s)}function oy(s){const e=(s.sprint?1:0)|(s.blockHeld?2:0)|(s.jumpPressed?4:0)|(s.dodgePressed?8:0)|(s.lightPressed?16:0)|(s.heavyPressed?32:0)|(s.specialPressed?64:0)|(s.blockPressed?128:0);return{t:"in",m:[Ie(s.move.x),Ie(s.move.z)],f:Ie(s.faceYaw),fl:e,sw:s.switchTo}}class cy{constructor(){N(this,"held",Rn());N(this,"pend",{jump:!1,dodge:!1,light:!1,heavy:!1,special:!1,bp:!1,sw:0})}ingest(e){if(!e||!Array.isArray(e.m))return;const t=ct(Fe(e.m[0]),-1,1),n=ct(Fe(e.m[1]),-1,1),i=Math.hypot(t,n),r=i>1?1/i:1;this.held.move.x=t*r,this.held.move.z=n*r,this.held.faceYaw=Fe(e.f);const a=Fe(e.fl)|0;this.held.sprint=!!(a&1),this.held.blockHeld=!!(a&2),a&4&&(this.pend.jump=!0),a&8&&(this.pend.dodge=!0),a&16&&(this.pend.light=!0),a&32&&(this.pend.heavy=!0),a&64&&(this.pend.special=!0),a&128&&(this.pend.bp=!0);const o=Fe(e.sw)|0;o>=1&&o<=3&&(this.pend.sw=o)}take(){const e=this.held,t=this.pend,n={move:{x:e.move.x,z:e.move.z},faceYaw:e.faceYaw,sprint:e.sprint,blockHeld:e.blockHeld,jumpPressed:t.jump,dodgePressed:t.dodge,lightPressed:t.light,heavyPressed:t.heavy,specialPressed:t.special,blockPressed:t.bp,switchTo:t.sw};return this.pend={jump:!1,dodge:!1,light:!1,heavy:!1,special:!1,bp:!1,sw:0},n}reset(){this.held=Rn(),this.take()}}const xc=["windup","active","recovery"];function Hh(s){const e=s.attack;return{p:[Ie(s.pos.x),Ie(s.pos.y),Ie(s.pos.z)],v:[Ie(s.vel.x),Ie(s.vel.y),Ie(s.vel.z)],yaw:Ie(s.yaw),og:s.onGround?1:0,ld:Ie(s.landT),hp:Ie(s.health),st:Ie(s.stamina),po:Ie(s.poise),act:s.action,at:Ie(s.actT),a:e?{m:e.move.id,s:e.move.style,ar:Ie(e.move.arc),ph:xc.indexOf(e.phase),t:Ie(e.t*1e3)/1e3,d:Ie(e.dur*1e3)/1e3,sg:e.sign,hs:e.handSide}:null,ci:s.comboIdx,pt:Ie(s.parryT),rt:Ie(s.riposteT),cc:s.counterCharge,sp:Ie(s.specialCd),slot:s.slot==="main"?0:1,dt:Ie(s.dodgeT),dd:Ie(s.dodgeDur),db:s.dodgeBack?1:0,dx:Ie(s.dodgeDirX),dz:Ie(s.dodgeDirZ),sgt:Ie(s.staggerT),sk:s.staggerKind,sw:Ie(s.switchT),spr:s.sprinting?1:0,s:[Ie(s.st.burn),Ie(s.st.burnT),Ie(s.st.chillT),Ie(s.st.shockT),Ie(s.st.hasteT),Ie(s.st.haste),Ie(s.st.wardHp),Ie(s.st.wardT)],ar:rn.map(t=>[Ie(s.armor[t].dur),s.armor[t].broken?1:0])}}function ly(s,e,t){const n={x:Fe(e.p[0]),y:Fe(e.p[1]),z:Fe(e.p[2]),vx:Fe(e.v[0]),vz:Fe(e.v[2]),yaw:Fe(e.yaw)};s.vel.x=Fe(e.v[0]),s.vel.y=Fe(e.v[1]),s.vel.z=Fe(e.v[2]),s.onGround=!!e.og,s.landT=Fe(e.ld),s.pos.y=n.y,t&&(s.pos.x=n.x,s.pos.z=n.z,s.yaw=n.yaw),s.health=Fe(e.hp),s.stamina=Fe(e.st),s.poise=Fe(e.po),s.action=e.act,s.actT=Fe(e.at),s.slot=e.slot?"secondary":"main",s.comboIdx=Fe(e.ci),s.parryT=Fe(e.pt),s.riposteT=Fe(e.rt),s.counterCharge=Fe(e.cc),s.specialCd=Fe(e.sp),s.dodgeT=Fe(e.dt),s.dodgeDur=Fe(e.dd,.4),s.dodgeBack=!!e.db,s.dodgeDirX=Fe(e.dx),s.dodgeDirZ=Fe(e.dz),s.staggerT=Fe(e.sgt),s.staggerKind=e.sk,s.switchT=Fe(e.sw),s.sprinting=!!e.spr;const i=s.st,r=e.s;if(i.burn=Fe(r[0]),i.burnT=Fe(r[1]),i.chillT=Fe(r[2]),i.shockT=Fe(r[3]),i.hasteT=Fe(r[4]),i.haste=Fe(r[5]),i.wardHp=Fe(r[6]),i.wardT=Fe(r[7]),rn.forEach((a,o)=>{s.armor[a].dur=Fe(e.ar[o][0]),s.armor[a].broken=!!e.ar[o][1]}),e.a){const a=ay(e.a.m);if(a){const o=s.attack,c={...a,style:e.a.s,arc:e.a.ar};(!o||o.move.id!==c.id)&&(s.attack={move:c,weapon:s.weapon,phase:xc[e.a.ph]??"windup",t:0,dur:.3,sign:e.a.sg,handSide:e.a.hs,hit:new Set,spec:{},riposte:!1,lastP:0,group:0,lunged:!0,clanged:!1});const l=s.attack;l.move=c,l.phase=xc[e.a.ph]??l.phase,l.t=Fe(e.a.t),l.dur=Math.max(.01,Fe(e.a.d,.3)),l.sign=e.a.sg,l.handSide=e.a.hs}}else s.attack=null;return n}function hy(s){return{id:s.id,k:s.kind,p:[Ie(s.pos.x),Ie(s.pos.y),Ie(s.pos.z)],v:[Ie(s.vel.x),Ie(s.vel.y),Ie(s.vel.z)],r:Ie(s.radius),w:s.wave?1:0,e:s.spec.element}}function uy(s,e){s.projectiles=e.map(t=>({id:t.id,owner:-1,team:-1,pos:{x:t.p[0],y:t.p[1],z:t.p[2]},prev:{x:t.p[0],y:t.p[1],z:t.p[2]},vel:{x:t.v[0],y:t.v[1],z:t.v[2]},radius:t.r,life:1,gravity:0,wave:!!t.w,spec:{element:t.e},hit:new Set,dead:!1,kind:t.k}))}function dy(s,e){const t=n=>{if(n===void 0)return;const i=e.fighters.findIndex(r=>r.id===n);return i<0?void 0:i};return{y:s.type,p:[Ie(s.pos.x),Ie(s.pos.y),Ie(s.pos.z)],a:t(s.attacker),t:t(s.target),e:s.element,h:s.heavy?1:0,d:s.dmg===void 0?void 0:Ie(s.dmg),w:s.weaponId,z:s.zone,r:s.radius,b:s.blocked?1:0,dir:s.dir?[Ie(s.dir.x),Ie(s.dir.z)]:void 0}}function fy(s,e){if(!s||!Array.isArray(s.p)||typeof s.y!="string")return null;const t=n=>typeof n=="number"&&e.fighters[n]?e.fighters[n].id:void 0;return{type:s.y,pos:{x:Fe(s.p[0]),y:Fe(s.p[1]),z:Fe(s.p[2])},attacker:t(s.a),target:t(s.t),element:s.e,heavy:!!s.h,dmg:s.d,weaponId:s.w,zone:s.z,radius:s.r,blocked:!!s.b,dir:Array.isArray(s.dir)?{x:Fe(s.dir[0]),y:0,z:Fe(s.dir[1])}:void 0}}const js=1/60;class py{constructor(e){N(this,"renderer");N(this,"scene",new Ff);N(this,"camera");N(this,"rig");N(this,"arena");N(this,"effects",new Xx);N(this,"audio",new qx);N(this,"input");N(this,"ui");N(this,"state",Zx());N(this,"world",null);N(this,"chars",new Map);N(this,"player");N(this,"enemy",null);N(this,"ai",null);N(this,"mode","duel");N(this,"phase","menu");N(this,"resumePhase","fight");N(this,"latched",new Set);N(this,"frame",{held:new Set,pressed:new Set,lookDX:0,lookDY:0});N(this,"acc",0);N(this,"last",0);N(this,"t",0);N(this,"countdownT",0);N(this,"endT",0);N(this,"bannerT",0);N(this,"respawnT",0);N(this,"dummyT",3);N(this,"stats",{damage:0,hits:0,parries:0,dodges:0,blocks:0,time:0,won:!1});N(this,"fpsAvg",60);N(this,"slowT",0);N(this,"canvas");N(this,"previewKey","");N(this,"vec",new I);N(this,"enemyLabel","");N(this,"rng",vr(Date.now()&65535));N(this,"net",null);N(this,"netRole",null);N(this,"remote",new cy);N(this,"netEvents",[]);N(this,"snapAcc",0);N(this,"guestLoadout",null);N(this,"targets",[null,null]);N(this,"snapAt",0);N(this,"firstSnap",!0);N(this,"menuOpen",!1);N(this,"loop",e=>{requestAnimationFrame(this.loop);const t=Math.min(.1,Math.max(1e-4,(e-this.last)/1e3));this.last=e,this.t+=t,this.fpsAvg+=(1/t-this.fpsAvg)*.05,this.frame=this.input.poll(t);for(const i of this.frame.pressed)this.latched.add(i);this.arena.update(this.t),this.ui.tick(t);const n=this.world;if(!n){this.renderer.render(this.scene,this.camera);return}if(this.phase==="menu")this.updateMenu(t);else if(this.phase!=="paused"&&this.phase!=="result")this.updatePlay(t,n);else if(this.phase==="result"){for(const i of this.chars.values())i.update(i.fighter,t*.5);this.effects.update(t,n,this.trailFn)}this.renderer.render(this.scene,this.camera),this.adaptQuality(t)});N(this,"trailFn",(e,t,n)=>{var i;return((i=this.chars.get(e.id))==null?void 0:i.weaponPoints(e,t,n))??!1});N(this,"frameMs",0);N(this,"frameN",0);this.host=e,this.canvas=document.createElement("canvas"),this.canvas.id="view",this.canvas.tabIndex=0,e.appendChild(this.canvas),this.renderer=new B_({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Mc,this.renderer.toneMapping=Gh,this.renderer.toneMappingExposure=1.05,this.camera=new $t(66,1,.1,220),this.arena=Q_(this.scene),this.scene.add(this.effects.group),this.rig=new ex(this.camera,ua),this.input=new Kx(this.canvas,$x()),this.ui=new sy(e,this.state,this.input,this.audio,{startMatch:t=>this.startMatch(t),resume:()=>this.resume(),restart:()=>this.restart(),toMenu:()=>this.toMenu(),settingsChanged:()=>this.applySettings(),hostGame:t=>void this.hostGame(t),joinGame:(t,n)=>void this.joinGame(t,n)}),this.input.onPointerLockChange=t=>{!t&&(this.phase==="countdown"||this.phase==="fight"||this.phase==="ending")&&this.pause()},document.addEventListener("pointerlockerror",()=>{(this.phase==="countdown"||this.phase==="fight"||this.phase==="ending")&&this.pause()}),window.addEventListener("keydown",t=>{t.code==="Escape"&&(this.phase==="paused"||this.menuOpen)&&this.ui.current==="pause"&&this.resume()}),window.addEventListener("pointerdown",()=>{this.audio.unlock(),this.audio.startAmbience()},{once:!1}),window.addEventListener("resize",()=>this.resize()),this.applySettings(),this.resize()}async start(){try{await Ox()}catch{}this.toMenu(),this.last=performance.now(),requestAnimationFrame(e=>this.loop(e))}applySettings(){const e=this.state.settings;this.audio.volume={master:e.master,sfx:e.sfx,music:e.music},this.audio.applyVolume(),this.applyQuality(e.quality)}applyQuality(e){const t=window.devicePixelRatio||1;this.renderer.setPixelRatio(e==="low"?Math.min(t,1)*.75:e==="balanced"?Math.min(t,1.25):Math.min(t,2)),this.renderer.shadowMap.enabled=e!=="low",this.effects.density=e==="low"?.5:e==="balanced"?.8:1,this.arena.setQuality(e),this.resize()}resize(){const e=this.host.clientWidth||window.innerWidth,t=this.host.clientHeight||window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}clearWorld(){for(const e of this.chars.values())e.dispose();this.chars.clear(),this.effects.clearAll(),this.world=null,this.ai=null,this.enemy=null}enemyLoadout(e){const t=()=>as[Math.floor(this.rng()*as.length)],n=t();let i=t();i===n&&(i=as[(as.indexOf(n)+3)%as.length]);const r={novice:["light"],warrior:["light","medium"],veteran:["medium","heavy"],master:["medium","heavy","heavy"]},a={...zu};for(const c of rn){const l=r[e];a[c]=`${c}_${l[Math.floor(this.rng()*l.length)]}`}const o=_i(n).grip==="one"&&this.rng()<.35?"kiteshield":null;return{main:n,secondary:i,shield:o,armor:a}}addChar(e,t){const n=new Vx(e,t);return this.chars.set(e.id,n),this.scene.add(n.object),n}startMatch(e,t){this.audio.unlock(),this.audio.startAmbience(),!t&&this.net&&this.dropNet(),this.mode=e,this.clearWorld(),this.menuOpen=!1,this.targets=[null,null],this.firstSnap=!0,this.snapAcc=0,this.netEvents=[],this.remote.reset();const n=new Ch(ua,Math.random()*1e6|0);this.world=n;const i=this.state.settings.difficulty;let r;if(t){const a=n.add("Host",0,t.hostLoadout,0),o=n.add("Guest",1,t.guestLoadout,1);this.player=t.role==="host"?a:o,this.enemy=t.role==="host"?o:a,this.ai=null,this.enemyLabel="Opponent",r=hs()}else this.player=n.add("You",0,JSON.parse(JSON.stringify(this.state.loadout)),0),r=e==="practice"?{...hs(),main:"longsword",secondary:"spear"}:this.enemyLoadout(i),this.enemy=n.add(e==="practice"?"Training Dummy":"Rival",1,r,1),this.ai=e==="practice"?null:new Z_(this.enemy,i,Math.random()*1e5|0),this.enemyLabel=e==="practice"?"Training Dummy":`${i[0].toUpperCase()+i.slice(1)} · ${_i(r.main).name}`;this.addChar(this.player,2377615),this.addChar(this.enemy,9052720),this.rig.lockOn=this.state.settings.autoLock,this.rig.snapBehind(this.player),this.stats={damage:0,hits:0,parries:0,dodges:0,blocks:0,time:0,won:!1},this.latched.clear(),this.acc=0,this.countdownT=1.6,this.phase="countdown",this.bannerT=0,this.respawnT=0,this.dummyT=3,this.ui.resetGhost(),this.ui.show("none"),this.ui.banner("READY"),this.ui.setHints(this.hintHtml()),this.input.requestLock()}hintHtml(){return"<b>LMB</b> light · <b>E</b> heavy · <b>RMB</b> block / parry · <b>C</b> dodge · <b>V</b> special · <b>Tab</b> lock-on · <b>1/2/X</b> weapons"}pause(){if(!(this.phase==="paused"||this.menuOpen)){if(this.input.releaseLock(),this.ui.netMode=!!this.netRole,this.netRole){this.menuOpen=!0,this.ui.show("pause");return}this.resumePhase=this.phase,this.phase="paused",this.ui.show("pause")}}resume(){if(this.menuOpen){this.menuOpen=!1,this.latched.clear(),this.ui.show("none"),this.input.requestLock();return}this.phase==="paused"&&(this.phase=this.resumePhase,this.latched.clear(),this.last=performance.now(),this.ui.show("none"),this.input.requestLock())}toMenu(){this.net&&this.dropNet(),this.clearWorld(),this.phase="menu",this.menuOpen=!1,this.input.releaseLock(),this.ui.banner(""),this.ui.show("menu"),this.buildPreview()}finish(e){var n;this.phase="result",this.menuOpen=!1,this.stats.won=e,this.input.releaseLock(),this.ui.banner("");const t={won:e,time:this.stats.time,damage:this.stats.damage,hits:this.stats.hits,parries:this.stats.parries,dodges:this.stats.dodges,blocks:this.stats.blocks,mode:this.mode};this.netRole==="host"&&((n=this.net)==null||n.send({t:"result",hostWon:e,tm:this.stats.time})),this.ui.netMode=!!this.netRole,this.ui.show("result",t)}buildPreview(){this.clearWorld();const e=new Ch(ua,5);this.world=e;const t=e.add("You",0,JSON.parse(JSON.stringify(this.state.loadout)),0),n=e.add("Rival",1,{...hs(),main:"spear",secondary:"axe"},1);t.pos.x=-1.7,t.pos.z=0,t.yaw=Math.PI/2,n.pos.x=1.7,n.pos.z=0,n.yaw=-Math.PI/2,this.player=t,this.enemy=n,this.addChar(t,2377615),this.addChar(n,9052720),this.previewKey=JSON.stringify(this.state.loadout)}playerIntent(){const e=this.player,t=Rn(),n=this.frame.held,i=this.latched,r=this.rig.yaw,a=Math.sin(r),o=Math.cos(r),c=-Math.cos(r),l=Math.sin(r),h=(n.has("forward")?1:0)-(n.has("back")?1:0),u=(n.has("right")?1:0)-(n.has("left")?1:0);let d=a*h+c*u,f=o*h+l*u;const g=Math.hypot(d,f);g>1&&(d/=g,f/=g),t.move.x=d,t.move.z=f;const v=this.enemy&&!this.enemy.dead?this.enemy:null;let m=r;if(this.rig.lockOn&&v?m=gs(v.pos.x-e.pos.x,v.pos.z-e.pos.z):g>.1&&!n.has("block")&&(m=Math.atan2(d,f)),(i.has("light")||i.has("heavy")||i.has("special"))&&v&&!this.rig.lockOn){const M=v.pos.x-e.pos.x,y=v.pos.z-e.pos.z,_=Math.hypot(M,y),L=gs(M,y);_<5.5&&Math.abs(Hi(L-r))<1?m=L:m=r}return t.faceYaw=m,t.sprint=n.has("sprint"),t.blockHeld=n.has("block"),t.jumpPressed=i.has("jump"),t.dodgePressed=i.has("dodge"),t.lightPressed=i.has("light"),t.heavyPressed=i.has("heavy"),t.specialPressed=i.has("special"),t.blockPressed=i.has("block"),t.switchTo=i.has("switchMain")?1:i.has("switchSecondary")?2:i.has("switchToggle")?3:0,t}dummyIntent(e){const t=Rn(),n=this.enemy,i=this.player;return t.faceYaw=gs(i.pos.x-n.pos.x,i.pos.z-n.pos.z),this.dummyT-=e,this.dummyT<=0&&n.action==="idle"&&(Math.hypot(i.pos.x-n.pos.x,i.pos.z-n.pos.z)<3?(t.lightPressed=!0,this.dummyT=3.2):this.dummyT=.6),n.health<n.maxHealth*.3&&!n.dead&&(n.health=n.maxHealth),t}onEvent(e){const t=this.player;if(!t)return;this.effects.handle(e);const n=e.pos.x-t.pos.x,i=e.pos.z-t.pos.z;this.audio.play(e,Math.hypot(n,i));const r=this.state.settings.shake,a=e.target===t.id,o=e.attacker===t.id;switch(e.type){case"hit":{const c=e.target!==void 0?this.chars.get(e.target):void 0;c==null||c.flash(),a&&(this.rig.addShake((e.heavy?.75:.45)*r),this.ui.vignette(e.heavy?.8:.5)),o&&(this.stats.hits++,this.stats.damage+=e.dmg??0,this.rig.addShake((e.heavy?.3:.12)*r));break}case"block":a&&(this.stats.blocks++,this.rig.addShake(.2*r));break;case"parry":a?(this.stats.parries++,this.ui.toast("PARRY","good"),this.rig.addShake(.3*r)):o&&this.ui.toast("PARRIED","bad");break;case"dodge":a&&e.blocked&&this.stats.dodges++;break;case"guardbreak":this.ui.toast(a?"GUARD BROKEN":"GUARD BREAK",a?"bad":"good"),this.rig.addShake(.4*r);break;case"armorbreak":this.ui.toast(a?"ARMOR BROKEN":"ENEMY ARMOR BROKEN",a?"bad":"good"),this.rig.addShake(.4*r);break;case"death":this.rig.addShake(.8*r);break;case"burst":case"pulse":case"wave":case"dash":Math.hypot(n,i)<9&&this.rig.addShake(.22*r);break}}updateMenu(e){if(JSON.stringify(this.state.loadout)!==this.previewKey&&(this.ui.current==="weapons"||this.ui.current==="armor")&&this.buildPreview(),this.ui.current==="none")return;for(const i of this.chars.values())i.update(i.fighter,e);const t=this.t*.18,n=this.ui.current==="menu"?9:5.2;this.camera.position.set(Math.sin(t)*n,this.ui.current==="menu"?3.4:2,Math.cos(t)*n),this.camera.lookAt(0,1.2,0),this.effects.update(e,this.world,this.trailFn)}updatePlay(e,t){if(this.netRole==="guest")return this.updateGuest(e,t);const n=this.player,i=this.enemy;this.phase==="countdown"?(this.countdownT-=e,this.countdownT<=0&&(this.phase="fight",this.ui.banner("FIGHT"),this.bannerT=.9)):this.bannerT>0&&(this.bannerT-=e,this.bannerT<=0&&this.ui.banner("")),this.phase==="fight"&&(this.stats.time+=e),this.frame.pressed.has("lockon")&&this.phase!=="countdown"&&(this.rig.lockOn=!this.rig.lockOn,this.ui.toast(this.rig.lockOn?"LOCKED ON":"FREE CAMERA")),i&&(n.lockTarget=this.rig.lockOn?i.id:-1),this.acc=Math.min(this.acc+e,.25);let r=!0;for(;this.acc>=js;){const a=new Map,o=this.phase==="fight"&&!this.menuOpen;a.set(n.id,o?this.playerIntent():(()=>{const c=Rn();return c.faceYaw=n.yaw,c})()),i&&a.set(i.id,this.netRole==="host"?this.phase==="fight"?this.remote.take():Object.assign(Rn(),{faceYaw:i.yaw}):o?this.ai?this.ai.think(t,js):this.dummyIntent(js):Object.assign(Rn(),{faceYaw:i.yaw})),t.step(js,a);for(const c of t.events)this.netRole==="host"&&this.netEvents.push(dy(c,t)),this.onEvent(c);this.acc-=js,r&&(this.latched.clear(),r=!1)}if(this.phase==="fight"){const a=t.winner();this.mode==="practice"&&i&&i.dead?(this.respawnT+=e,this.respawnT>1.6&&this.respawnDummy(t)):a!==null&&!(this.mode==="practice"&&a===0)&&(this.phase="ending",this.endT=1.9,this.ui.banner(a===0?"VICTORY":"DEFEATED"),this.stats.won=a===0)}else this.phase==="ending"&&(this.endT-=e,this.endT<=0&&this.finish(this.stats.won));this.netRole==="host"&&this.sendSnapshot(e,t),this.playVisuals(e,t)}playVisuals(e,t){const n=this.player,i=this.enemy,r=t.hitStop>0?.05:1;for(const a of this.chars.values())a.update(a.fighter,e*r);if(this.effects.update(e,t,this.trailFn),this.rig.update(e,n,i&&!i.dead?i:null,this.frame.lookDX,this.frame.lookDY),this.ui.setHud(n,i,this.enemyLabel,e,this.fpsAvg,this.state.settings.showFps,n.specialCd),i&&this.rig.lockOn&&!i.dead&&this.phase!=="paused"){this.vec.set(i.pos.x,i.pos.y+1,i.pos.z).project(this.camera);const a=this.vec.z<1&&Math.abs(this.vec.x)<1.2&&Math.abs(this.vec.y)<1.2;this.ui.setMarker((this.vec.x*.5+.5)*this.host.clientWidth,(-this.vec.y*.5+.5)*this.host.clientHeight,a)}else this.ui.setMarker(0,0,!1)}respawnDummy(e){var i;const t=this.enemy;(i=this.chars.get(t.id))==null||i.dispose(),this.chars.delete(t.id),e.fighters=e.fighters.filter(r=>r!==t);const n=e.add("Training Dummy",1,{...hs(),main:"longsword",secondary:"spear"},1);this.enemy=n,this.addChar(n,9052720),this.respawnT=0,this.ui.resetGhost()}restart(){var e;if(this.netRole==="host"){this.guestLoadout&&this.startNetHost();return}if(this.netRole==="guest"){(e=this.net)==null||e.send({t:"rematch",l:this.state.loadout}),this.ui.toast("Waiting for host…");return}this.startMatch(this.mode)}dropNet(){const e=this.net;this.net=null,this.netRole=null,this.guestLoadout=null,e==null||e.close()}async openNet(e){this.net&&this.dropNet(),Qx(e);const t=new ey;this.net=t,t.onClose=n=>{this.net===t&&(this.dropNet(),this.phase!=="menu"&&this.toMenu(),this.ui.setNetStatus(n))},t.onPeerLeft=()=>{if(this.net!==t)return;const n=this.phase!=="menu";if(t.role==="host"&&!n){this.ui.setNetStatus(`Room ${t.code} — opponent left, waiting…`);return}this.dropNet(),this.toMenu(),this.ui.show("multi"),this.ui.setNetStatus("Opponent left the match")},t.onMessage=n=>this.onNetMessage(n),this.ui.setNetStatus("Connecting…");try{await t.connect(e)}catch(n){return this.dropNet(),this.ui.setNetStatus(n.message),null}return t}async hostGame(e){const t=await this.openNet(e);t&&(t.onStatus=n=>{n==="created"?this.ui.setNetStatus(`Room code  ${t.code}  — share it; waiting for an opponent…`,t.code):n.startsWith("error:")&&this.ui.setNetStatus(n.slice(6))},t.onPeer=()=>{this.ui.setNetStatus("Opponent connected — waiting for their loadout…")},t.create())}async joinGame(e,t){if(!/^[A-Za-z2-9]{4}$/.test(t.trim())){this.ui.setNetStatus("Enter the 4-character room code");return}const n=await this.openNet(e);n&&(n.onStatus=i=>{i.startsWith("error:")&&(this.ui.setNetStatus(i.slice(6)),this.dropNet())},n.onJoined=()=>{this.ui.setNetStatus("Joined — waiting for the host to start…"),this.netRole="guest",n.send({t:"hello",l:this.state.loadout})},n.join(t))}startNetHost(){if(!this.net||!this.guestLoadout)return;this.netRole="host",this.ui.netMode=!0;const e=JSON.parse(JSON.stringify(this.state.loadout));this.net.send({t:"start",hl:e,gl:this.guestLoadout}),this.startMatch("duel",{role:"host",hostLoadout:e,guestLoadout:this.guestLoadout})}onNetMessage(e){var t,n;if(this.netRole!=="guest"&&((t=this.net)==null?void 0:t.role)==="host"){e.t==="hello"?(this.guestLoadout=Ys(e.l),this.netRole="host",this.startNetHost()):e.t==="rematch"?(this.guestLoadout=Ys(e.l),this.startNetHost()):e.t==="in"&&this.remote.ingest(e);return}if(((n=this.net)==null?void 0:n.role)==="host"){e.t==="in"?this.remote.ingest(e):e.t==="rematch"&&(this.guestLoadout=Ys(e.l),this.startNetHost());return}e.t==="start"?(this.netRole="guest",this.ui.netMode=!0,this.startMatch("duel",{role:"guest",hostLoadout:Ys(e.hl),guestLoadout:Ys(e.gl)})):e.t==="snap"&&this.world&&this.netRole==="guest"?this.applyGuestSnapshot(e):e.t==="result"&&this.netRole==="guest"&&this.phase!=="result"&&(this.stats.time=typeof e.tm=="number"?e.tm:this.stats.time,this.finish(!e.hostWon))}sendSnapshot(e,t){this.snapAcc+=e,!(this.snapAcc<1/30||!this.net||t.fighters.length<2)&&(this.snapAcc=0,this.net.send({t:"snap",f:[Hh(t.fighters[0]),Hh(t.fighters[1])],pr:t.projectiles.map(hy),ev:this.netEvents.splice(0),hs:Math.round(t.hitStop*1e3)/1e3,ph:this.phase,win:t.winner(),tm:Math.round(this.stats.time*10)/10}))}applyGuestSnapshot(e){const t=this.world;if(t.fighters.length<2||!Array.isArray(e.f)||e.f.length<2)return;for(let i=0;i<2;i++)this.targets[i]=ly(t.fighters[i],e.f[i],this.firstSnap);if(this.firstSnap=!1,this.snapAt=performance.now(),uy(t,Array.isArray(e.pr)?e.pr:[]),t.hitStop=typeof e.hs=="number"?e.hs:0,Array.isArray(e.ev))for(const i of e.ev){const r=fy(i,t);r&&this.onEvent(r)}this.stats.time=typeof e.tm=="number"?e.tm:this.stats.time;const n=e.ph;n!==this.phase&&(n==="countdown"||n==="fight"||n==="ending")&&(this.phase=n,n==="fight"?(this.ui.banner("FIGHT"),this.bannerT=.9):n==="countdown"?this.ui.banner("READY"):n==="ending"&&this.ui.banner(e.win===1?"VICTORY":"DEFEATED"))}updateGuest(e,t){var l;const n=this.player,i=this.enemy;this.bannerT>0&&(this.bannerT-=e,this.bannerT<=0&&this.ui.banner("")),this.frame.pressed.has("lockon")&&this.phase!=="countdown"&&(this.rig.lockOn=!this.rig.lockOn,this.ui.toast(this.rig.lockOn?"LOCKED ON":"FREE CAMERA"));const a=this.phase==="fight"&&!this.menuOpen?this.playerIntent():Object.assign(Rn(),{faceYaw:n.yaw});(l=this.net)==null||l.send(oy(a)),this.latched.clear();const o=Math.min(.12,(performance.now()-this.snapAt)/1e3),c=1-Math.exp(-16*e);t.fighters.forEach((h,u)=>{const d=this.targets[u];d&&(h.pos.x+=(d.x+d.vx*o-h.pos.x)*c,h.pos.z+=(d.z+d.vz*o-h.pos.z)*c,h.yaw=qc(h.yaw,d.yaw,c))}),i&&(n.lockTarget=this.rig.lockOn?i.id:-1),this.playVisuals(e,t)}adaptQuality(e){if(this.phase!=="fight"||!this.state.settings.autoQuality){this.frameMs=0,this.frameN=0;return}if(this.frameMs+=e*1e3,this.frameN++,this.slowT+=e,this.slowT<3)return;const t=this.frameMs/Math.max(1,this.frameN);this.slowT=0,this.frameMs=0,this.frameN=0;const n=this.state.settings.quality;if(t>26&&n!=="low"){const i=n==="high"?"balanced":"low";this.state.settings.quality=i,Ku(this.state),this.applyQuality(i),this.ui.toast("Quality lowered for performance")}}}const jc=document.getElementById("app");if(!jc)throw new Error("#app missing");const my=new py(jc);my.start().catch(s=>{console.error(s),jc.innerHTML=`<pre style="color:#e8e0d0;padding:24px">Aetherfall Duel failed to start:
`+String(s)+"</pre>"});
