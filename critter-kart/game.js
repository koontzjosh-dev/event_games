(()=>{var Uu=0,wc=1,Fu=2;var Vr=1,Ou=2,Qs=3,Wi=0,mn=1,Dn=2,oi=0,tr=1,Ec=2,Tc=3,Ac=4,Bu=5;var ls=100,zu=101,Vu=102,Hu=103,Gu=104,ku=200,Wu=201,Xu=202,qu=203,Rc=204,Cc=205,Yu=206,Zu=207,Ju=208,$u=209,Ku=210,ju=211,Qu=212,tf=213,ef=214,Wa=0,Xa=1,qa=2,zs=3,Ya=4,Za=5,Ja=6,$a=7,So=0,nf=1,sf=2,Zn=0,Pc=1,Ic=2,Lc=3,Dc=4,Nc=5,Uc=6,Fc=7;var Oc=300,Xi=301,cs=302,bo=303,wo=304,Hr=306,Ka=1e3,ni=1001,ja=1002,Be=1003,rf=1004;var Gr=1005;var tn=1006,Eo=1007;var qi=1008;var yn=1009,Bc=1010,zc=1011,er=1012,To=1013,Jn=1014,On=1015,$n=1016,Ao=1017,Ro=1018,nr=1020,Vc=35902,Hc=35899,Gc=1021,kc=1022,Bn=1023,ii=1026,Yi=1027,Co=1028,Po=1029,Zi=1030,Io=1031;var Lo=1033,kr=33776,Wr=33777,Xr=33778,qr=33779,Do=35840,No=35841,Uo=35842,Fo=35843,Oo=36196,Bo=37492,zo=37496,Vo=37488,Ho=37489,Yr=37490,Go=37491,ko=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,Zo=37813,Jo=37814,$o=37815,Ko=37816,jo=37817,Qo=37818,tl=37819,el=37820,nl=37821,il=36492,sl=36494,rl=36495,al=36283,ol=36284,Zr=36285,ll=36286;var Sr=2300,Qa=2301,Ga=2302,mc=2303,gc=2400,xc=2401,_c=2402;var af=3200;var cl=0,of=1,bi="",dn="srgb",br="srgb-linear",wr="linear",xe="srgb";var ka=7680;var lf=519,cf=512,hf=513,uf=514,hl=515,ff=516,df=517,ul=518,pf=519,mf=35044;var Wc="300 es",Yn=2e3,Vs=2001;function Gd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function kd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gf(){let n=Er("canvas");return n.style.display="block",n}var lu={},Hs=null;function Xc(...n){let t="THREE."+n.shift();Hs?Hs("log",t,...n):console.log(t,...n)}function xf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ot(...n){n=xf(n);let t="THREE."+n.shift();if(Hs)Hs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function zt(...n){n=xf(n);let t="THREE."+n.shift();if(Hs)Hs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function rs(...n){let t=n.join(" ");t in lu||(lu[t]=!0,Ot(...n))}function _f(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var yf={[Wa]:Xa,[qa]:Ja,[Ya]:$a,[zs]:Za,[Xa]:Wa,[Ja]:qa,[$a]:Ya,[Za]:zs},si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kl=Math.PI/180,Tr=180/Math.PI;function Jr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function Wd(n,t){return(n%t+t)%t}function Wl(n,t,e){return(1-e)*n+e*t}function mr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _n(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kc=class Kc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kc.prototype.isVector2=!0;var re=Kc,Rn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(f!==_||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*_;m<0&&(u=-u,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),E=Math.sin(w);p=Math.sin(p*w)/E,o=Math.sin(o*w)/E,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+_*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+_*o;let w=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=w,c*=w,h*=w,f*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jc=class jc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xl.copy(this).projectOnVector(t),this.sub(Xl)}reflect(t){return this.sub(Xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jc.prototype.isVector3=!0;var H=jc,Xl=new H,cu=new Rn,Qc=class Qc{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],w=s[1],E=s[4],v=s[7],S=s[2],b=s[5],C=s[8];return r[0]=a*_+o*w+l*S,r[3]=a*m+o*E+l*b,r[6]=a*p+o*v+l*C,r[1]=c*_+h*w+f*S,r[4]=c*m+h*E+f*b,r[7]=c*p+h*v+f*C,r[2]=u*_+d*w+g*S,r[5]=u*m+d*E+g*b,r[8]=u*p+d*v+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(s*c-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ql.makeScale(t,e)),this}rotate(t){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ql.makeRotation(-t)),this}translate(t,e){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Qc.prototype.isMatrix3=!0;var Ht=Qc,ql=new Ht,hu=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xd(){let n={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[br]:{primaries:t,whitePoint:i,transfer:wr,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:i,transfer:xe,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),n}var se=Xd();function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ws,to=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ws===void 0&&(ws=Er("canvas")),ws.width=t.width,ws.height=t.height;let s=ws.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ws}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yi(e[i]/255)*255):e[i]=yi(e[i]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qd=0,Gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Jr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yl(s[a].image)):r.push(Yl(s[a]))}else r=Yl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Yl(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?to.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Yd=0,Zl=new H,pn=class n extends si{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ni,s=ni,r=tn,a=qi,o=Bn,l=yn,c=n.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Jr(),this.name="",this.source=new Gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Oc;pn.DEFAULT_ANISOTROPY=1;var th=class th{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,v=(d+1)/2,S=(p+1)/2,b=(h+u)/4,C=(f+_)/4,y=(g+m)/4;return E>v&&E>S?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=C/i):v>S?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=b/s,r=y/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=C/r,s=y/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-_)/w,this.z=(u-h)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};th.prototype.isVector4=!0;var Ne=th,eo=class extends si{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new pn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends eo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ar=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var no=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Mo=class Mo{constructor(t,e,i,s,r,a,o,l,c,h,f,u,d,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,f,u,d,g,_,m)}set(t,e,i,s,r,a,o,l,c,h,f,u,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),a=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u-_*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,Jd)}lookAt(t,e,i){let s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Ni.crossVectors(i,En),Ni.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ni.crossVectors(i,En)),Ni.normalize(),va.crossVectors(En,Ni),s[0]=Ni.x,s[4]=va.x,s[8]=En.x,s[1]=Ni.y,s[5]=va.y,s[9]=En.y,s[2]=Ni.z,s[6]=va.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],E=i[7],v=i[11],S=i[15],b=s[0],C=s[4],y=s[8],T=s[12],I=s[1],R=s[5],L=s[9],D=s[13],P=s[2],N=s[6],B=s[10],z=s[14],K=s[3],Z=s[7],Q=s[11],et=s[15];return r[0]=a*b+o*I+l*P+c*K,r[4]=a*C+o*R+l*N+c*Z,r[8]=a*y+o*L+l*B+c*Q,r[12]=a*T+o*D+l*z+c*et,r[1]=h*b+f*I+u*P+d*K,r[5]=h*C+f*R+u*N+d*Z,r[9]=h*y+f*L+u*B+d*Q,r[13]=h*T+f*D+u*z+d*et,r[2]=g*b+_*I+m*P+p*K,r[6]=g*C+_*R+m*N+p*Z,r[10]=g*y+_*L+m*B+p*Q,r[14]=g*T+_*D+m*z+p*et,r[3]=w*b+E*I+v*P+S*K,r[7]=w*C+E*R+v*N+S*Z,r[11]=w*y+E*L+v*B+S*Q,r[15]=w*T+E*D+v*z+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15],w=l*d-c*u,E=o*d-c*f,v=o*u-l*f,S=a*d-c*h,b=a*u-l*h,C=a*f-o*h;return e*(_*w-m*E+p*v)-i*(g*w-m*S+p*b)+s*(g*E-_*S+p*C)-r*(g*v-_*b+m*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=e*o-i*a,E=e*l-s*a,v=e*c-r*a,S=i*l-s*o,b=i*c-r*o,C=s*c-r*l,y=h*_-f*g,T=h*m-u*g,I=h*p-d*g,R=f*m-u*_,L=f*p-d*_,D=u*p-d*m,P=w*D-E*L+v*R+S*I-b*T+C*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/P;return t[0]=(o*D-l*L+c*R)*N,t[1]=(s*L-i*D-r*R)*N,t[2]=(_*C-m*b+p*S)*N,t[3]=(u*b-f*C-d*S)*N,t[4]=(l*I-a*D-c*T)*N,t[5]=(e*D-s*I+r*T)*N,t[6]=(m*v-g*C-p*E)*N,t[7]=(h*C-u*v+d*E)*N,t[8]=(a*L-o*I+c*y)*N,t[9]=(i*I-e*L-r*y)*N,t[10]=(g*b-_*v+p*w)*N,t[11]=(f*v-h*b-d*w)*N,t[12]=(o*T-a*R-l*y)*N,t[13]=(e*R-i*T+s*y)*N,t[14]=(_*E-g*S-m*w)*N,t[15]=(h*S-f*E+u*w)*N,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,_=a*h,m=a*f,p=o*f,w=l*c,E=l*h,v=l*f,S=i.x,b=i.y,C=i.z;return s[0]=(1-(_+p))*S,s[1]=(d+v)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(u+p))*b,s[6]=(m+w)*b,s[7]=0,s[8]=(g+E)*C,s[9]=(m-w)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),l=Es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),kn.copy(this);let c=1/a,h=1/o,f=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,e.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Yn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Yn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Vs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Yn,l=!1){let c=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Yn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Vs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Mo.prototype.isMatrix4=!0;var _e=Mo,Es=new H,kn=new _e,Zd=new H(0,0,0),Jd=new H(1,1,1),Ni=new H,va=new H,En=new H,fu=new _e,du=new Rn,vi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return du.setFromEuler(this),this.setFromQuaternion(du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$d=0,pu=new H,Ts=new Rn,pi=new _e,Ma=new H,gr=new H,Kd=new H,jd=new Rn,mu=new H(1,0,0),gu=new H(0,1,0),xu=new H(0,0,1),_u={type:"added"},Qd={type:"removed"},As={type:"childadded",child:null},Jl={type:"childremoved",child:null},we=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new H,e=new vi,i=new Rn,s=new H(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Ht}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(mu,t)}rotateY(t){return this.rotateOnAxis(gu,t)}rotateZ(t){return this.rotateOnAxis(xu,t)}translateOnAxis(t,e){return pu.copy(t).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mu,t)}translateY(t){return this.translateOnAxis(gu,t)}translateZ(t){return this.translateOnAxis(xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ma.copy(t):Ma.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(gr,Ma,this.up):pi.lookAt(Ma,gr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(pi),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_u),As.child=t,this.dispatchEvent(As),As.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qd),Jl.child=t,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_u),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,Kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};we.DEFAULT_UP=new H(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Le=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},tp={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Le;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function $l(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ut=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=Wd(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=$l(a,r,t+1/3),this.g=$l(a,r,t),this.b=$l(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=dn){function i(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){let i=vf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return se.workingToColorSpace(an.copy(this),t),Math.round(ee(an.r*255,0,255))*65536+Math.round(ee(an.g*255,0,255))*256+Math.round(ee(an.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(an.copy(this),e);let i=an.r,s=an.g,r=an.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=dn){se.workingToColorSpace(an.copy(this),t);let e=an.r,i=an.g,s=an.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Sa);let i=Wl(Ui.h,Sa.h,e),s=Wl(Ui.s,Sa.s,e),r=Wl(Ui.l,Sa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Ut;Ut.NAMES=vf;var Ws=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xs=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wn=new H,mi=new H,Kl=new H,gi=new H,Rs=new H,Cs=new H,yu=new H,jl=new H,Ql=new H,tc=new H,ec=new Ne,nc=new Ne,ic=new Ne,zi=class n{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Wn.subVectors(s,e),mi.subVectors(i,e),Kl.subVectors(t,e);let a=Wn.dot(Wn),o=Wn.dot(mi),l=Wn.dot(Kl),c=mi.dot(mi),h=mi.dot(Kl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ec.setScalar(0),nc.setScalar(0),ic.setScalar(0),ec.fromBufferAttribute(t,e),nc.fromBufferAttribute(t,i),ic.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ec,r.x),a.addScaledVector(nc,r.y),a.addScaledVector(ic,r.z),a}static isFrontFacing(t,e,i,s){return Wn.subVectors(i,e),mi.subVectors(t,e),Wn.cross(mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Wn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Rs.subVectors(s,i),Cs.subVectors(r,i),jl.subVectors(t,i);let l=Rs.dot(jl),c=Cs.dot(jl);if(l<=0&&c<=0)return e.copy(i);Ql.subVectors(t,s);let h=Rs.dot(Ql),f=Cs.dot(Ql);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Rs,a);tc.subVectors(t,r);let d=Rs.dot(tc),g=Cs.dot(tc);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Cs,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return yu.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(yu,o);let p=1/(m+_+u);return a=_*p,o=u*p,e.copy(i).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ri=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),wa.subVectors(this.max,xr),Ps.subVectors(t.a,xr),Is.subVectors(t.b,xr),Ls.subVectors(t.c,xr),Fi.subVectors(Is,Ps),Oi.subVectors(Ls,Is),es.subVectors(Ps,Ls);let e=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-es.z,es.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,es.z,0,-es.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-es.y,es.x,0];return!sc(e,Ps,Is,Ls,wa)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,Ps,Is,Ls,wa))?!1:(Ea.crossVectors(Fi,Oi),e=[Ea.x,Ea.y,Ea.z],sc(e,Ps,Is,Ls,wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xi=[new H,new H,new H,new H,new H,new H,new H,new H],Xn=new H,ba=new ri,Ps=new H,Is=new H,Ls=new H,Fi=new H,Oi=new H,es=new H,xr=new H,wa=new H,Ea=new H,ns=new H;function sc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ns.fromArray(n,r);let o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ge=new H,Ta=new re,ep=0,An=class extends si{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ep++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mf,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ta.fromBufferAttribute(this,e),Ta.applyMatrix3(t),this.setXY(e,Ta.x,Ta.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_n(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),i=_n(i,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Cr=class extends An{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Pr=class extends An{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ke=class extends An{constructor(t,e,i){super(new Float32Array(t),e,i)}},np=new ri,_r=new H,rc=new H,Mi=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):np.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);let e=_r.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(rc)),this.expandByPoint(_r.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ip=0,Fn=new _e,ac=new we,Ds=new H,Tn=new ri,yr=new ri,Je=new H,ln=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gd(t)?Pr:Cr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,i){return Fn.makeTranslation(t,e,i),this.applyMatrix4(Fn),this}scale(t,e,i){return Fn.makeScale(t,e,i),this.applyMatrix4(Fn),this}lookAt(t){return ac.lookAt(t),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(Tn.min,yr.min),Tn.expandByPoint(Je),Je.addVectors(Tn.max,yr.max),Tn.expandByPoint(Je)):(Tn.expandByPoint(yr.min),Tn.expandByPoint(yr.max))}Tn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Je.fromBufferAttribute(o,c),l&&(Ds.fromBufferAttribute(t,c),Je.add(Ds)),s=Math.max(s,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new An(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new H,l[y]=new H;let c=new H,h=new H,f=new H,u=new re,d=new re,g=new re,_=new H,m=new H;function p(y,T,I){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,I),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),o[y].add(_),o[T].add(_),o[I].add(_),l[y].add(m),l[T].add(m),l[I].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let y=0,T=w.length;y<T;++y){let I=w[y],R=I.start,L=I.count;for(let D=R,P=R+L;D<P;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let E=new H,v=new H,S=new H,b=new H;function C(y){S.fromBufferAttribute(s,y),b.copy(S);let T=o[y];E.copy(T),E.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(b,T);let R=v.dot(l[y])<0?-1:1;a.setXYZW(y,E.x,E.y,E.z,R)}for(let y=0,T=w.length;y<T;++y){let I=w[y],R=I.start,L=I.count;for(let D=R,P=R+L;D<P;D+=3)C(t.getX(D+0)),C(t.getX(D+1)),C(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,h=new H,f=new H;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new An(u,h,f)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var oc=new H,sp=new H,rp=new Ht,qn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=oc.subVectors(i,e).cross(sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||rp.getNormalMatrix(t),s=this.coplanarPoint(oc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ap=0,Si=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=tr,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new qn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var _i=new H,lc=new H,Aa=new H,Ra=new H,Ir=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){lc.copy(t).add(e).multiplyScalar(.5),Aa.copy(e).sub(t).normalize(),Ra.copy(this.origin).sub(lc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Aa),o=Ra.dot(this.direction),l=-Ra.dot(Aa),c=Ra.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(lc).addScaledVector(Aa,u),d}intersectSphere(t,e){if(t.radius<0)return null;_i.subVectors(t.center,this.origin);let i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,p=i.x-a.x,w=i.y-a.y,E=i.z-a.z,v=Math.abs(l),S=Math.abs(c),b=Math.abs(h),C,y,T,I,R,L,D,P,N,B,z,K;if(v>=S&&v>=b?(T=l,L=f,N=g,K=p,l>=0?(C=c,y=h,I=u,R=d,D=_,P=m,B=w,z=E):(C=h,y=c,I=d,R=u,D=m,P=_,B=E,z=w)):S>=b?(T=c,L=u,N=_,K=w,c>=0?(C=h,y=l,I=d,R=f,D=m,P=g,B=E,z=p):(C=l,y=h,I=f,R=d,D=g,P=m,B=p,z=E)):(T=h,L=d,N=m,K=E,h>=0?(C=l,y=c,I=f,R=u,D=g,P=_,B=p,z=w):(C=c,y=l,I=u,R=f,D=_,P=g,B=w,z=p)),T===0)return null;let Z=C/T,Q=y/T,et=1/T,It=I-Z*L,Rt=R-Q*L,ce=D-Z*N,st=P-Q*N,lt=B-Z*K,G=z-Q*K,Y=lt*st-G*ce,rt=It*G-Rt*lt,wt=ce*Rt-st*It;if(s){if(Y<0||rt<0||wt<0)return null}else if((Y<0||rt<0||wt<0)&&(Y>0||rt>0||wt>0))return null;let ct=Y+rt+wt;if(ct===0)return null;let St=et*(Y*L+rt*N+wt*K);return(ct>0?St<0:St>0)?null:this.at(St/ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vu=new _e,is=new Ir,Ca=new Mi,Mu=new H,Pa=new H,Ia=new H,La=new H,cc=new H,Da=new H,Su=new H,Na=new H,Ee=class extends we{constructor(t=new ln,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(cc.fromBufferAttribute(f,t),a?Da.addScaledVector(cc,h):Da.addScaledVector(cc.sub(e),h))}e.add(Da)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),is.copy(t.ray).recast(t.near),!(Ca.containsPoint(is.origin)===!1&&(is.intersectSphere(Ca,Mu)===null||is.origin.distanceToSquared(Mu)>(t.far-t.near)**2))&&(vu.copy(r).invert(),is.copy(t.ray).applyMatrix4(vu),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,S=E;v<S;v+=3){let b=o.getX(v),C=o.getX(v+1),y=o.getX(v+2);s=Ua(this,p,t,i,c,h,f,b,C,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let w=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);s=Ua(this,a,t,i,c,h,f,w,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,S=E;v<S;v+=3){let b=v,C=v+1,y=v+2;s=Ua(this,p,t,i,c,h,f,b,C,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let w=m,E=m+1,v=m+2;s=Ua(this,a,t,i,c,h,f,w,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function op(n,t,e,i,s,r,a,o){let l;if(t.side===mn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Wi,o),l===null)return null;Na.copy(o),Na.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Na);return c<e.near||c>e.far?null:{distance:c,point:Na.clone(),object:n}}function Ua(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Pa),n.getVertexPosition(l,Ia),n.getVertexPosition(c,La);let h=op(n,t,e,i,Pa,Ia,La,Su);if(h){let f=new H;zi.getBarycoord(Su,Pa,Ia,La,f),s&&(h.uv=zi.getInterpolatedAttribute(s,o,l,c,f,new re)),r&&(h.uv1=zi.getInterpolatedAttribute(r,o,l,c,f,new re)),a&&(h.normal=zi.getInterpolatedAttribute(a,o,l,c,f,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new H,materialIndex:0};zi.getNormal(Pa,Ia,La,u.normal),h.face=u,h.barycoord=f}return h}var Lr=class extends pn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Be,h=Be,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dr=class extends An{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ns=new _e,bu=new _e,Fa=[],wu=new ri,lp=new _e,vr=new Ee,Mr=new Mi,Te=class extends Ee{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,lp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ns),wu.copy(t.boundingBox).applyMatrix4(Ns),this.boundingBox.union(wu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ns),Mr.copy(t.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),t.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),bu.multiplyMatrices(i,Ns),vr.matrixWorld=bu,vr.raycast(t,Fa);for(let a=0,o=Fa.length;a<o;a++){let l=Fa[a];l.instanceId=r,l.object=this,e.push(l)}Fa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Lr(new Float32Array(s*this.count),s,this.count,Co,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ss=new Mi,cp=new re(.5,.5),Oa=new H,qs=class{constructor(t=new qn,e=new qn,i=new qn,s=new qn,r=new qn,a=new qn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],w=r[12],E=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-a,d-h,p-g,S-w).normalize(),s[1].setComponents(c+a,d+h,p+g,S+w).normalize(),s[2].setComponents(c+o,d+f,p+_,S+E).normalize(),s[3].setComponents(c-o,d-f,p-_,S-E).normalize(),i)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,d-u,p-m,S-v).normalize();else if(s[4].setComponents(c-l,d-u,p-m,S-v).normalize(),e===Yn)s[5].setComponents(c+l,d+u,p+m,S+v).normalize();else if(e===Vs)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){ss.center.set(0,0,0);let e=cp.distanceTo(t.center);return ss.radius=.7071067811865476+e,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Oa.x=s.normal.x>0?t.max.x:t.min.x,Oa.y=s.normal.y>0?t.max.y:t.min.y,Oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var as=class extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eu=new _e,yc=new Ir,Ba=new Mi,za=new H,Ys=class extends we{constructor(t=new ln,e=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,t.ray.intersectsSphere(Ba)===!1)return;Eu.copy(s).invert(),yc.copy(t.ray).applyMatrix4(Eu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=u,_=d;g<_;g++){let m=c.getX(g);za.fromBufferAttribute(f,m),Tu(za,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,_=d;g<_;g++)za.fromBufferAttribute(f,g),Tu(za,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Tu(n,t,e,i,s,r,a){let o=yc.distanceSqToPoint(n);if(o<e){let l=new H;yc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Nr=class extends pn{constructor(t=[],e=Xi,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zs=class extends pn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends pn{constructor(t,e,i=Jn,s,r,a,o=Be,l=Be,c,h=ii,f=1){if(h!==ii&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},io=class extends Vi{constructor(t,e=Jn,i=Xi,s,r,a=Be,o=Be,l,c=ii){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ur=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Pn=class n extends ln{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(f,2));function g(_,m,p,w,E,v,S,b,C,y,T){let I=v/C,R=S/y,L=v/2,D=S/2,P=b/2,N=C+1,B=y+1,z=0,K=0,Z=new H;for(let Q=0;Q<B;Q++){let et=Q*R-D;for(let It=0;It<N;It++){let Rt=It*I-L;Z[_]=Rt*w,Z[m]=et*E,Z[p]=P,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(It/C),f.push(1-Q/y),z+=1}}for(let Q=0;Q<y;Q++)for(let et=0;et<C;et++){let It=u+et+N*Q,Rt=u+et+N*(Q+1),ce=u+(et+1)+N*(Q+1),st=u+(et+1)+N*Q;l.push(It,Rt,st),l.push(Rt,ce,st),K+=6}o.addGroup(d,K,T),d+=K,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var so=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new re:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new H,s=[],r=[],a=[],o=new H,l=new _e;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ee(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ee(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function qc(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Au=new H,Ru=new H,hc=new qc,uc=new qc,fc=new qc,os=class extends so{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new H){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ru.subVectors(s[0],s[1]).add(s[0]),c=Ru);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Au.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Au),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),hc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,m),uc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,m),fc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),uc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),fc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(hc.calc(l),uc.calc(l),fc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var ai=class n extends ln{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let w=p*u-a;for(let E=0;E<c;E++){let v=E*f-r;g.push(v,-w,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let E=w+c*p,v=w+c*(p+1),S=w+1+c*(p+1),b=w+1+c*p;d.push(E,v,b),d.push(v,S,b)}this.setIndex(d),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function hs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Cu(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Cu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function hn(n){let t={};for(let e=0;e<n.length;e++){let i=hs(n[e]);for(let s in i)t[s]=i[s]}return t}function Cu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function hp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Yc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Mf={clone:hs,merge:hn},up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _e().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ro=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var cn=class extends Si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=So,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ao=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oo=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Us(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function dc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Hi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lo=class extends Hi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gc,endingEnd:gc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xc:r=t,o=2*e-i;break;case _c:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xc:a=t,l=2*i-e;break;case _c:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,w=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,E=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+w*a[c+S]+E*a[l+S]+v*a[f+S];return r}},co=class extends Hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},ho=class extends Hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},uo=class extends Hi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-e)/(s-e),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=d*u+g*2,w=f[p],E=f[p+1],v=t*u+g*2,S=h[v],b=h[v+1],C=pp(i,e,w,S,s);r[g]=Sf(C,_,E,b,m)}return r}};function Sf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function dp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function pp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Sf(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=dp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ln=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Us(e,this.TimeBufferType),this.values=Us(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Us(t.times,Array),values:Us(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),dc(t.settings)&&(i.settings={inTangents:Us(t.settings.inTangents,Array),outTangents:Us(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new uo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Sr:e=this.InterpolantFactoryMethodDiscrete;break;case Qa:e=this.InterpolantFactoryMethodLinear;break;case Ga:e=this.InterpolantFactoryMethodSmooth;break;case mc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ot("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return Ga;case this.InterpolantFactoryMethodBezier:return mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;dc(this.settings)&&(Pu(this.settings.inTangents,t),Pu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&kd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ga,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let _=e[f+g];if(_!==e[u+g]||_!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,dc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Qa;var Gi=class extends Ln{constructor(t,e,i){super(t,e,i)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Sr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends Ln{constructor(t,e,i,s){super(t,e,i,s)}};fo.prototype.ValueTypeName="color";var po=class extends Ln{constructor(t,e,i,s){super(t,e,i,s)}};po.prototype.ValueTypeName="number";var mo=class extends Hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Fr=class extends Ln{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new mo(this.times,this.values,this.getValueSize(),t)}};Fr.prototype.ValueTypeName="quaternion";Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Ln{constructor(t,e,i){super(t,e,i)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Sr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends Ln{constructor(t,e,i,s){super(t,e,i,s)}};go.prototype.ValueTypeName="vector";var xo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bf=new xo,_o=class{constructor(t){this.manager=t!==void 0?t:bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_o.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$s=class extends Js{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},pc=new _e,Iu=new H,Lu=new H,Or=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Iu),Lu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(pc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(pc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Va=new H,Ha=new Rn,ei=new H,Br=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Va,Ha,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,ei.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Va,Ha,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new H,Du=new re,Nu=new re,$e=class extends Br{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,Du,Nu),e.subVectors(Nu,Du)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vc=class extends Or{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Tr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},zr=class extends Js{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var Ks=class extends Br{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mc=class extends Or{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},js=class extends Js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Mc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Fs=-90,Os=1,yo=class extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(Fs,Os,t,e);s.layers=this.layers,this.add(s);let r=new $e(Fs,Os,t,e);r.layers=this.layers,this.add(r);let a=new $e(Fs,Os,t,e);a.layers=this.layers,this.add(a);let o=new $e(Fs,Os,t,e);o.layers=this.layers,this.add(o);let l=new $e(Fs,Os,t,e);l.layers=this.layers,this.add(l);let c=new $e(Fs,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},vo=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Zc="\\[\\]\\.:\\/",mp=new RegExp("["+Zc+"]","g"),Jc="[^"+Zc+"]",gp="[^"+Zc.replace("\\.","")+"]",xp=/((?:WC+[\/:])*)/.source.replace("WC",Jc),_p=/(WCOD+)?/.source.replace("WCOD",gp),yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jc),vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jc),Mp=new RegExp("^"+xp+_p+yp+vp+"$"),Sp=["material","materials","bones","map"],Sc=class{constructor(t,e,i){let s=i||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ie=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mp,"")}static parseTrackName(t){let e=Mp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Sp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Sc;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Py=new Float32Array(1);var eh=class eh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};eh.prototype.isMatrix2=!0;var bc=eh;function $c(n,t,e,i){let s=bp(i);switch(e){case Gc:return n*t;case Co:return n*t/s.components*s.byteLength;case Po:return n*t/s.components*s.byteLength;case Zi:return n*t*2/s.components*s.byteLength;case Io:return n*t*2/s.components*s.byteLength;case kc:return n*t*3/s.components*s.byteLength;case Bn:return n*t*4/s.components*s.byteLength;case Lo:return n*t*4/s.components*s.byteLength;case kr:case Wr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case No:case Fo:return Math.max(n,16)*Math.max(t,8)/4;case Do:case Uo:return Math.max(n,8)*Math.max(t,8)/2;case Oo:case Bo:case Vo:case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zo:case Yr:case Go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case jo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case il:case sl:case rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case al:case ol:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Zr:case ll:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bp(n){switch(n){case yn:case Bc:return{byteLength:1,components:1};case er:case zc:case $n:return{byteLength:2,components:1};case Ao:case Ro:return{byteLength:2,components:4};case Jn:case To:case On:return{byteLength:4,components:1};case Vc:case Hc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ep(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_m=`#ifdef USE_ENVMAP
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
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,wm=`uniform sampler2D dfgLUT;
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
}`,Em=`
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u0=`float getShadowMask() {
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
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
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
}`,D0=`#if DEPTH_PACKING == 3200
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
}`,N0=`#define DISTANCE
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
}`,U0=`#define DISTANCE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`uniform float scale;
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
}`,z0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,k0=`#define LAMBERT
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
}`,W0=`#define MATCAP
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
}`,X0=`#define MATCAP
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
}`,q0=`#define NORMAL
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
}`,Y0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,J0=`#define PHONG
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
}`,$0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,Q0=`#define TOON
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
}`,tg=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Ip,aomap_fragment:Lp,aomap_pars_fragment:Dp,batching_pars_vertex:Np,batching_vertex:Up,begin_vertex:Fp,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Kp,displacementmap_pars_vertex:jp,displacementmap_vertex:Qp,emissivemap_fragment:tm,emissivemap_pars_fragment:em,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:am,envmap_pars_vertex:om,envmap_physical_pars_fragment:_m,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:fm,gradientmap_pars_fragment:dm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:xm,lights_toon_fragment:ym,lights_toon_pars_fragment:vm,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:bm,lights_physical_pars_fragment:wm,lights_fragment_begin:Em,lights_fragment_maps:Tm,lights_fragment_end:Am,lightprobes_pars_fragment:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:Nm,map_particle_fragment:Um,map_particle_pars_fragment:Fm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Bm,morphinstance_vertex:zm,morphcolor_vertex:Vm,morphnormal_vertex:Hm,morphtarget_pars_vertex:Gm,morphtarget_vertex:km,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Qm,opaque_fragment:t0,packing:e0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:s0,dithering_pars_fragment:r0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:h0,shadowmask_pars_fragment:u0,skinbase_vertex:f0,skinning_pars_vertex:d0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:x0,tonemapping_fragment:_0,tonemapping_pars_fragment:y0,transmission_fragment:v0,transmission_pars_fragment:M0,uv_pars_fragment:S0,uv_pars_vertex:b0,uv_vertex:w0,worldpos_vertex:E0,background_vert:T0,background_frag:A0,backgroundCube_vert:R0,backgroundCube_frag:C0,cube_vert:P0,cube_frag:I0,depth_vert:L0,depth_frag:D0,distance_vert:N0,distance_frag:U0,equirect_vert:F0,equirect_frag:O0,linedashed_vert:B0,linedashed_frag:z0,meshbasic_vert:V0,meshbasic_frag:H0,meshlambert_vert:G0,meshlambert_frag:k0,meshmatcap_vert:W0,meshmatcap_frag:X0,meshnormal_vert:q0,meshnormal_frag:Y0,meshphong_vert:Z0,meshphong_frag:J0,meshphysical_vert:$0,meshphysical_frag:K0,meshtoon_vert:j0,meshtoon_frag:Q0,points_vert:tg,points_frag:eg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},gt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},ci={basic:{uniforms:hn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:hn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:hn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:hn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:hn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:hn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:hn([gt.points,gt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:hn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:hn([gt.common,gt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:hn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:hn([gt.sprite,gt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:hn([gt.common,gt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:hn([gt.lights,gt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};ci.physical={uniforms:hn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var fl={r:0,b:0,g:0},ag=new _e,qf=new Ht;qf.set(-1,0,0,0,1,0,0,0,1);function og(n,t,e,i,s,r){let a=new Ut(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(w){let E=w.isScene===!0?w.background:null;if(E&&E.isTexture){let v=w.backgroundBlurriness>0;E=t.get(E,v)}return E}function g(w){let E=!1,v=d(w);v===null?m(a,o):v&&v.isColor&&(m(v,1),E=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(w,E){let v=d(E);v&&(v.isCubeTexture||v.mapping===Hr)?(c===void 0&&(c=new Ee(new Pn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:hs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qf),c.material.toneMapped=se.getTransfer(v.colorSpace)!==xe,(h!==v||f!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ee(new ai(2,2),new In({name:"BackgroundMaterial",uniforms:hs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=se.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,E){w.getRGB(fl,Yc(n)),e.buffers.color.setClear(fl.r,fl.g,fl.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:g,addToRenderList:_,dispose:p}}function lg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(R,L,D,P,N){let B=!1,z=f(R,P,D,L);r!==z&&(r=z,c(r.object)),B=d(R,P,D,N),B&&g(R,P,D,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(R,L,D,P),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function h(R){return n.deleteVertexArray(R)}function f(R,L,D,P){let N=P.wireframe===!0,B=i[L.id];B===void 0&&(B={},i[L.id]=B);let z=R.isInstancedMesh===!0?R.id:0,K=B[z];K===void 0&&(K={},B[z]=K);let Z=K[D.id];Z===void 0&&(Z={},K[D.id]=Z);let Q=Z[N];return Q===void 0&&(Q=u(l()),Z[N]=Q),Q}function u(R){let L=[],D=[],P=[];for(let N=0;N<e;N++)L[N]=0,D[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:P,object:R,attributes:{},index:null}}function d(R,L,D,P){let N=r.attributes,B=L.attributes,z=0,K=D.getAttributes();for(let Z in K)if(K[Z].location>=0){let et=N[Z],It=B[Z];if(It===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(It=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(It=R.instanceColor)),et===void 0||et.attribute!==It||It&&et.data!==It.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function g(R,L,D,P){let N={},B=L.attributes,z=0,K=D.getAttributes();for(let Z in K)if(K[Z].location>=0){let et=B[Z];et===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(et=R.instanceColor));let It={};It.attribute=et,et&&et.data&&(It.data=et.data),N[Z]=It,z++}r.attributes=N,r.attributesNum=z,r.index=P}function _(){let R=r.newAttributes;for(let L=0,D=R.length;L<D;L++)R[L]=0}function m(R){p(R,0)}function p(R,L){let D=r.newAttributes,P=r.enabledAttributes,N=r.attributeDivisors;D[R]=1,P[R]===0&&(n.enableVertexAttribArray(R),P[R]=1),N[R]!==L&&(n.vertexAttribDivisor(R,L),N[R]=L)}function w(){let R=r.newAttributes,L=r.enabledAttributes;for(let D=0,P=L.length;D<P;D++)L[D]!==R[D]&&(n.disableVertexAttribArray(D),L[D]=0)}function E(R,L,D,P,N,B,z){z===!0?n.vertexAttribIPointer(R,L,D,N,B):n.vertexAttribPointer(R,L,D,P,N,B)}function v(R,L,D,P){_();let N=P.attributes,B=D.getAttributes(),z=L.defaultAttributeValues;for(let K in B){let Z=B[K];if(Z.location>=0){let Q=N[K];if(Q===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){let et=Q.normalized,It=Q.itemSize,Rt=t.get(Q);if(Rt===void 0)continue;let ce=Rt.buffer,st=Rt.type,lt=Rt.bytesPerElement,G=st===n.INT||st===n.UNSIGNED_INT||Q.gpuType===To;if(Q.isInterleavedBufferAttribute){let Y=Q.data,rt=Y.stride,wt=Q.offset;if(Y.isInstancedInterleavedBuffer){for(let ct=0;ct<Z.locationSize;ct++)p(Z.location+ct,Y.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ct=0;ct<Z.locationSize;ct++)m(Z.location+ct);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let ct=0;ct<Z.locationSize;ct++)E(Z.location+ct,It/Z.locationSize,st,et,rt*lt,(wt+It/Z.locationSize*ct)*lt,G)}else{if(Q.isInstancedBufferAttribute){for(let Y=0;Y<Z.locationSize;Y++)p(Z.location+Y,Q.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Y=0;Y<Z.locationSize;Y++)m(Z.location+Y);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Y=0;Y<Z.locationSize;Y++)E(Z.location+Y,It/Z.locationSize,st,et,It*lt,It/Z.locationSize*Y*lt,G)}}else if(z!==void 0){let et=z[K];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(Z.location,et);break;case 3:n.vertexAttrib3fv(Z.location,et);break;case 4:n.vertexAttrib4fv(Z.location,et);break;default:n.vertexAttrib1fv(Z.location,et)}}}}w()}function S(){T();for(let R in i){let L=i[R];for(let D in L){let P=L[D];for(let N in P){let B=P[N];for(let z in B)h(B[z].object),delete B[z];delete P[N]}}delete i[R]}}function b(R){if(i[R.id]===void 0)return;let L=i[R.id];for(let D in L){let P=L[D];for(let N in P){let B=P[N];for(let z in B)h(B[z].object),delete B[z];delete P[N]}}delete i[R.id]}function C(R){for(let L in i){let D=i[L];for(let P in D){let N=D[P];if(N[R.id]===void 0)continue;let B=N[R.id];for(let z in B)h(B[z].object),delete B[z];delete N[R.id]}}}function y(R){for(let L in i){let D=i[L],P=R.isInstancedMesh===!0?R.id:0,N=D[P];if(N!==void 0){for(let B in N){let z=N[B];for(let K in z)h(z[K].object),delete z[K];delete N[B]}delete D[P],Object.keys(D).length===0&&delete i[L]}}}function T(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function cg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Bn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let y=C===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==yn&&C!==On&&!y&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:v,maxSamples:S,samples:b}}function ug(n){let t=this,e=null,i=0,s=!1,r=!1,a=new qn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:i,E=w*4,v=p.clippingState||null;l.value=v,v=h(g,u,E,d);for(let S=0;S!==E;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==_;++E,v+=4)a.copy(f[E]).applyMatrix4(w,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var sr=4,fg=6,dg=20,pg=256,$r=new Ks,wf=new Ut,nh=null,ih=0,sh=0,rh=!1,mg=new H,us=new H,pl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=mg}=r;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nh,ih,sh),this._renderer.xr.enabled=rh,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:$n,format:Bn,colorSpace:br,depthBuffer:!1},s=Ef(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gg(r)),this._blurMaterial=_g(r,t,e),this._ggxMaterial=xg(r,t,e)}return s}_compileMaterial(t){let e=new Ee(new ln,t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,i,s,r){let l=new $e(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(wf),f.toneMapping=Zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ee(new Pn,new Cn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,p=!0):(m.color.copy(wf),p=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let S=this._cubeSize;ir(s,v*S,E>2?S:0,S,S),f.setRenderTarget(s),p&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=w}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Xi||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ir(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,$r)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-sr?i-g+sr:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,ir(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,$r),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ir(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(o,$r)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-sr?s-this._lodMax+sr:0),u=4*(this._cubeSize-h);ir(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,$r)}};function gg(n){let t=[],e=[],i=n,s=n-sr+1+fg;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let p=0;p<f;p++){let w=p%3*2/3-1,E=p>2?0:-1,v=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];g.set(v,d*u*p);for(let S=0;S<u;S++){let b=h[S*2]*2-1,C=h[S*2+1]*2-1;p===0?us.set(1,C,b):p===1?us.set(-b,1,-C):p===2?us.set(-b,C,1):p===3?us.set(-1,C,-b):p===4?us.set(-b,-1,C):us.set(b,C,-1),us.toArray(_,(p*u+S)*d)}}let m=new ln;m.setAttribute("position",new An(g,d)),m.setAttribute("outputDirection",new An(_,d)),e.push(new Ee(m,null)),i>sr&&i--}return{lodMeshes:e,sizeLods:t}}function Ef(n,t,e){let i=new on(n,t,e);return i.texture.mapping=Hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function xg(n,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function _g(n,t,e){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:dg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Tf(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Af(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ml=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Nr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pn(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:oi});r.uniforms.tEquirect.value=e;let a=new Ee(s,r),o=e.minFilter;return e.minFilter===qi&&(e.minFilter=tn),new yo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function yg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===bo||d===wo)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new ml(g.height);return _.fromEquirectangularTexture(n,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===bo||d===wo,_=d===Xi||d===cs;if(g||_){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new pl(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let w=u.image;return g&&w&&w.height>0||_&&w&&l(w)?(i===null&&(i=new pl(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===bo?u.mapping=Xi:d===wo&&(u.mapping=cs),u}function l(u){let d=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function vg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&rs("WebGLRenderer: "+i+" extension not supported."),s}}}function Mg(n,t,e,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],n.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(d!==null){let w=d.array;_=d.version;for(let E=0,v=w.length;E<v;E+=3){let S=w[E+0],b=w[E+1],C=w[E+2];u.push(S,b,b,C,C,S)}}else{let w=g.array;_=g.version;for(let E=0,v=w.length/3-1;E<v;E+=3){let S=E+0,b=E+1,C=E+2;u.push(S,b,b,C,C,S)}}let m=new(g.count>=65535?Pr:Cr)(u,1);m.version=_;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Sg(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let _=0;for(let m=0;m<d;m++)_+=u[m];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function bg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function wg(n,t,e){let i=new WeakMap,s=new Ne;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let T=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=o.attributes.position.count*E,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*S*4*f),C=new Ar(b,v,S,f);C.type=On,C.needsUpdate=!0;let y=E*4;for(let I=0;I<f;I++){let R=m[I],L=p[I],D=w[I],P=v*S*4*I;for(let N=0;N<R.count;N++){let B=N*y;d===!0&&(s.fromBufferAttribute(R,N),b[P+B+0]=s.x,b[P+B+1]=s.y,b[P+B+2]=s.z,b[P+B+3]=0),g===!0&&(s.fromBufferAttribute(L,N),b[P+B+4]=s.x,b[P+B+5]=s.y,b[P+B+6]=s.z,b[P+B+7]=0),_===!0&&(s.fromBufferAttribute(D,N),b[P+B+8]=s.x,b[P+B+9]=s.y,b[P+B+10]=s.z,b[P+B+11]=D.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new re(v,S)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Eg(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Tg={[Pc]:"LINEAR_TONE_MAPPING",[Ic]:"REINHARD_TONE_MAPPING",[Lc]:"CINEON_TONE_MAPPING",[Dc]:"ACES_FILMIC_TONE_MAPPING",[Uc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Nc]:"CUSTOM_TONE_MAPPING"};function Ag(n,t,e,i,s,r){let a=new on(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ln;c.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ke([0,2,0,0,2,0],2));let h=new ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ee(c,h),u=new Ks(-1,1,1,-1,0,1),d=null,g=null,_=!1,m,p=null,w=[],E=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),l!==null&&l.setSize(v,S);for(let b=0;b<w.length;b++){let C=w[b];C.setSize&&C.setSize(v,S)}},this.setEffects=function(v){w=v,E=w.length>0&&w[0].isRenderPass===!0;let S=a.width,b=a.height;w.length>0&&o===null&&(o=new on(S,b,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new on(S,b,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<w.length;C++){let y=w[C];y.setSize&&y.setSize(S,b)}},this.begin=function(v,S){if(_||v.toneMapping===Zn&&w.length===0)return!1;if(p=S,S!==null){let b=S.width,C=S.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return E===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Zn,!0},this.hasRenderPass=function(){return E},this.end=function(v,S){v.toneMapping=m,_=!0;let b=a,C=o;for(let y=0;y<w.length;y++){let T=w[y];T.enabled!==!1&&(T.render(v,C,b,S),T.needsSwap!==!1&&(b=C,C=C===o?l:o))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,h.defines={},se.getTransfer(d)===xe&&(h.defines.SRGB_TRANSFER="");let y=Tg[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(f,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Yf=new pn,lh=new Vi(1,1),Zf=new Ar,Jf=new no,$f=new Nr,Rf=[],Cf=[],Pf=new Float32Array(16),If=new Float32Array(9),Lf=new Float32Array(4);function ar(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Rf[s];if(r===void 0&&(r=new Float32Array(s),Rf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _l(n,t){let e=Cf[t];e===void 0&&(e=new Int32Array(t),Cf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Rg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function Pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function Ig(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function Lg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;Lf.set(i),n.uniformMatrix2fv(this.addr,!1,Lf),Ze(e,i)}}function Dg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;If.set(i),n.uniformMatrix3fv(this.addr,!1,If),Ze(e,i)}}function Ng(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;Pf.set(i),n.uniformMatrix4fv(this.addr,!1,Pf),Ze(e,i)}}function Ug(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function Og(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function Bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function zg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function Hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function Gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function kg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(lh.compareFunction=e.isReversedDepthBuffer()?ul:hl,r=lh):r=Yf,e.setTexture2D(t||r,s)}function Wg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Jf,s)}function Xg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||$f,s)}function qg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Zf,s)}function Yg(n){switch(n){case 5126:return Rg;case 35664:return Cg;case 35665:return Pg;case 35666:return Ig;case 35674:return Lg;case 35675:return Dg;case 35676:return Ng;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return Vg;case 36295:return Hg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}function Zg(n,t){n.uniform1fv(this.addr,t)}function Jg(n,t){let e=ar(t,this.size,2);n.uniform2fv(this.addr,e)}function $g(n,t){let e=ar(t,this.size,3);n.uniform3fv(this.addr,e)}function Kg(n,t){let e=ar(t,this.size,4);n.uniform4fv(this.addr,e)}function jg(n,t){let e=ar(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qg(n,t){let e=ar(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tx(n,t){let e=ar(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ex(n,t){n.uniform1iv(this.addr,t)}function nx(n,t){n.uniform2iv(this.addr,t)}function ix(n,t){n.uniform3iv(this.addr,t)}function sx(n,t){n.uniform4iv(this.addr,t)}function rx(n,t){n.uniform1uiv(this.addr,t)}function ax(n,t){n.uniform2uiv(this.addr,t)}function ox(n,t){n.uniform3uiv(this.addr,t)}function lx(n,t){n.uniform4uiv(this.addr,t)}function cx(n,t,e){let i=this.cache,s=t.length,r=_l(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=lh:a=Yf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function hx(n,t,e){let i=this.cache,s=t.length,r=_l(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jf,r[a])}function ux(n,t,e){let i=this.cache,s=t.length,r=_l(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$f,r[a])}function fx(n,t,e){let i=this.cache,s=t.length,r=_l(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zf,r[a])}function dx(n){switch(n){case 5126:return Zg;case 35664:return Jg;case 35665:return $g;case 35666:return Kg;case 35674:return jg;case 35675:return Qg;case 35676:return tx;case 5124:case 35670:return ex;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ax;case 36295:return ox;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return fx}}var ch=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Yg(e.type)}},hh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dx(e.type)}},uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},ah=/(\w+)(\])?(\[|\.)?/g;function Df(n,t){n.seq.push(t),n.map[t.id]=t}function px(n,t,e){let i=n.name,s=i.length;for(ah.lastIndex=0;;){let r=ah.exec(i),a=ah.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Df(e,c===void 0?new ch(o,n,t):new hh(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new uh(o),Df(e,f)),e=f}}}var rr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);px(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Nf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var mx=37297,gx=0;function xx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Uf=new Ht;function _x(n){se._getMatrix(Uf,se.workingColorSpace,n);let t=`mat3( ${Uf.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case wr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ff(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+xx(n.getShaderSource(t),o)}else return r}function yx(n,t){let e=_x(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var vx={[Pc]:"Linear",[Ic]:"Reinhard",[Lc]:"Cineon",[Dc]:"ACESFilmic",[Uc]:"AgX",[Fc]:"Neutral",[Nc]:"Custom"};function Mx(n,t){let e=vx[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dl=new H;function Sx(){se.getLuminanceCoefficients(dl);let n=dl.x.toFixed(4),t=dl.y.toFixed(4),e=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function wx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ex(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function jr(n){return n!==""}function Of(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(n){return n.replace(Tx,Rx)}var Ax=new Map;function Rx(n,t){let e=Jt[t];if(e===void 0){let i=Ax.get(t);if(i!==void 0)e=Jt[i],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fh(e)}var Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(n){return n.replace(Cx,Px)}function Px(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ix={[Vr]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function Lx(n){return Ix[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dx={[Xi]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE_UV"};function Nx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Dx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ux={[cs]:"ENVMAP_MODE_REFRACTION"};function Fx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ux[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ox={[So]:"ENVMAP_BLENDING_MULTIPLY",[nf]:"ENVMAP_BLENDING_MIX",[sf]:"ENVMAP_BLENDING_ADD"};function Bx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ox[n.combine]||"ENVMAP_BLENDING_NONE"}function zx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Vx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Lx(e),c=Nx(e),h=Fx(e),f=Bx(e),u=zx(e),d=bx(e),g=wx(r),_=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(jr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),p=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Mx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,yx("linearToOutputTexel",e.outputColorSpace),Sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jr).join(`
`)),a=fh(a),a=Of(a,e),a=Bf(a,e),o=fh(o),o=Of(o,e),o=Bf(o,e),a=zf(a),o=zf(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=w+m+a,v=w+p+o,S=Nf(s,s.VERTEX_SHADER,E),b=Nf(s,s.FRAGMENT_SHADER,v);s.attachShader(_,S),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(R){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",D=s.getShaderInfoLog(S)||"",P=s.getShaderInfoLog(b)||"",N=L.trim(),B=D.trim(),z=P.trim(),K=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,S,b);else{let Q=Ff(s,S,"vertex"),et=Ff(s,b,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+Q+`
`+et)}else N!==""?Ot("WebGLProgram: Program Info Log:",N):(B===""||z==="")&&(Z=!1);Z&&(R.diagnostics={runnable:K,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(S),s.deleteShader(b),y=new rr(s,_),T=Ex(s,_)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,mx)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}var Hx=0,dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ph(t),e.set(t,i)),i}},ph=class{constructor(t){this.id=Hx++,this.code=t,this.usedTimes=0}};function Gx(n){return n===Zi||n===Yr||n===Zr}function kx(n,t,e,i,s,r){let a=new Rr,o=new dh,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,T,I,R,L,D){let P=R.fog,N=L.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=t.get(y.envMap||B,z),Z=K&&K.mapping===Hr?K.image.height:null,Q=d[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Ot("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,It=et!==void 0?et.length:0,Rt=0;N.morphAttributes.position!==void 0&&(Rt=1),N.morphAttributes.normal!==void 0&&(Rt=2),N.morphAttributes.color!==void 0&&(Rt=3);let ce,st,lt,G;if(Q){let Ae=ci[Q];ce=Ae.vertexShader,st=Ae.fragmentShader}else{ce=y.vertexShader,st=y.fragmentShader;let Ae=o.getVertexShaderStage(y),me=o.getFragmentShaderStage(y);o.update(y,Ae,me),lt=Ae.id,G=me.id}let Y=n.getRenderTarget(),rt=n.state.buffers.depth.getReversed(),wt=L.isInstancedMesh===!0,ct=L.isBatchedMesh===!0,St=!!y.map,he=!!y.matcap,Yt=!!K,ie=!!y.aoMap,Kt=!!y.lightMap,Wt=!!y.bumpMap&&y.wireframe===!1,Gt=!!y.normalMap,ue=!!y.displacementMap,Fe=!!y.emissiveMap,Se=!!y.metalnessMap,pe=!!y.roughnessMap,F=y.anisotropy>0,nn=y.clearcoat>0,ye=y.dispersion>0,A=y.retroreflectivity>0,x=y.iridescence>0,V=y.sheen>0,X=y.transmission>0,J=F&&!!y.anisotropyMap,at=nn&&!!y.clearcoatMap,ht=nn&&!!y.clearcoatNormalMap,$=nn&&!!y.clearcoatRoughnessMap,tt=x&&!!y.iridescenceMap,ut=x&&!!y.iridescenceThicknessMap,Lt=V&&!!y.sheenColorMap,mt=V&&!!y.sheenRoughnessMap,ft=!!y.specularMap,Dt=!!y.specularColorMap,Ft=!!y.specularIntensityMap,qt=X&&!!y.transmissionMap,O=X&&!!y.thicknessMap,dt=!!y.gradientMap,j=!!y.alphaMap,pt=y.alphaTest>0,yt=!!y.alphaHash,nt=!!y.extensions,Nt=Zn;y.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Nt=n.toneMapping);let Ct={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:ce,fragmentShader:st,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:G,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:ct,batchingColor:ct&&L._colorsTexture!==null,instancing:wt,instancingColor:wt&&L.instanceColor!==null,instancingMorph:wt&&L.morphTexture!==null,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:St,matcap:he,envMap:Yt,envMapMode:Yt&&K.mapping,envMapCubeUVHeight:Z,aoMap:ie,lightMap:Kt,bumpMap:Wt,normalMap:Gt,displacementMap:ue,emissiveMap:Fe,normalMapObjectSpace:Gt&&y.normalMapType===of,normalMapTangentSpace:Gt&&y.normalMapType===cl,packedNormalMap:Gt&&y.normalMapType===cl&&Gx(y.normalMap.format),metalnessMap:Se,roughnessMap:pe,anisotropy:F,anisotropyMap:J,clearcoat:nn,clearcoatMap:at,clearcoatNormalMap:ht,clearcoatRoughnessMap:$,dispersion:ye,retroreflection:A,iridescence:x,iridescenceMap:tt,iridescenceThicknessMap:ut,sheen:V,sheenColorMap:Lt,sheenRoughnessMap:mt,specularMap:ft,specularColorMap:Dt,specularIntensityMap:Ft,transmission:X,transmissionMap:qt,thicknessMap:O,gradientMap:dt,opaque:y.transparent===!1&&y.blending===tr&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:pt,alphaHash:yt,combine:y.combine,mapUv:St&&g(y.map.channel),aoMapUv:ie&&g(y.aoMap.channel),lightMapUv:Kt&&g(y.lightMap.channel),bumpMapUv:Wt&&g(y.bumpMap.channel),normalMapUv:Gt&&g(y.normalMap.channel),displacementMapUv:ue&&g(y.displacementMap.channel),emissiveMapUv:Fe&&g(y.emissiveMap.channel),metalnessMapUv:Se&&g(y.metalnessMap.channel),roughnessMapUv:pe&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:at&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(y.sheenRoughnessMap.channel),specularMapUv:ft&&g(y.specularMap.channel),specularColorMapUv:Dt&&g(y.specularColorMap.channel),specularIntensityMapUv:Ft&&g(y.specularIntensityMap.channel),transmissionMapUv:qt&&g(y.transmissionMap.channel),thicknessMapUv:O&&g(y.thicknessMap.channel),alphaMapUv:j&&g(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Gt||F),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(St||j),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&Gt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:rt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Rt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:St&&y.map.isVideoTexture===!0&&se.getTransfer(y.map.colorSpace)===xe,decodeVideoTextureEmissive:Fe&&y.emissiveMap.isVideoTexture===!0&&se.getTransfer(y.emissiveMap.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dn,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:nt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&y.extensions.multiDraw===!0||ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)T.push(I),T.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(p(T,y),w(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function w(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function E(y){let T=d[y.type],I;if(T){let R=ci[T];I=Mf.clone(R.uniforms)}else I=y.uniforms;return I}function v(y,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new Vx(n,T,y,s),c.push(I),h.set(T,I)),I}function S(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:C}}function Wx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Xx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Hf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Gf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,_,m,p){let w=n[t];return w===void 0?(w={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},n[t]=w):(w.id=u.id,w.object=u,w.geometry=d,w.material=g,w.materialVariant=a(u),w.groupOrder=_,w.renderOrder=u.renderOrder,w.z=m,w.group=p),t++,w}function l(u,d,g,_,m,p,w){w.reversedDepth===!0&&(m=-m);let E=o(u,d,g,_,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,d,g,_,m,p){let w=o(u,d,g,_,m,p);g.transmission>0?i.unshift(w):g.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,d){e.length>1&&e.sort(u||Xx),i.length>1&&i.sort(d||Hf),s.length>1&&s.sort(d||Hf)}function f(){for(let u=t,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function qx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Gf,n.set(i,[a])):s>=r.length?(a=new Gf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Yx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new Ut};break;case"SpotLight":e={position:new H,direction:new H,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function Zx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Jx=0;function $x(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Kx(n){let t=new Yx,e=Zx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,r=new _e,a=new _e;function o(c){let h=0,f=0,u=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,w=0,E=0,v=0,S=0,b=0,C=0,y=0,T=0,I=0;c.sort($x);for(let L=0,D=c.length;L<D;L++){let P=c[L],N=P.color,B=P.intensity,z=P.distance,K=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Zi?K=P.shadow.map.texture:K=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*B,f+=N.g*B,u+=N.b*B;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],B);I++}else if(P.isSunLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,et=e.get(P);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=et,i.sunShadowMap[g]=K;let It=Q.getViewportCount();for(let Rt=0;Rt<It;Rt++)i.sunShadowMatrix[_+Rt]=Q.getMatrix(Rt),i.sunShadowCascade[_+Rt]=Q._cascadeData[Rt];_+=It,g++}i.sun[d]=Z,d++}else if(P.isDirectionalLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,et=e.get(P);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=P.shadow.matrix,S++}i.directional[m]=Z,m++}else if(P.isSpotLight){let Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(N).multiplyScalar(B),Z.distance=z,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[w]=Z;let Q=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,Q.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[w]=Q.matrix,P.castShadow){let et=e.get(P);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.spotShadow[w]=et,i.spotShadowMap[w]=K,C++}w++}else if(P.isRectAreaLight){let Z=t.get(P);Z.color.copy(N).multiplyScalar(B),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[E]=Z,E++}else if(P.isPointLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let Q=P.shadow,et=e.get(P);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=P.shadow.matrix,b++}i.point[p]=Z,p++}else if(P.isHemisphereLight){let Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(B),Z.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[v]=Z,v++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let R=i.hash;(R.sunLength!==d||R.directionalLength!==m||R.pointLength!==p||R.spotLength!==w||R.rectAreaLength!==E||R.hemiLength!==v||R.numSunShadows!==g||R.numDirectionalShadows!==S||R.numPointShadows!==b||R.numSpotShadows!==C||R.numSpotMaps!==y||R.numLightProbes!==I)&&(i.sun.length=d,i.directional.length=m,i.spot.length=w,i.rectArea.length=E,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,R.sunLength=d,R.directionalLength=m,R.pointLength=p,R.spotLength=w,R.rectAreaLength=E,R.hemiLength=v,R.numSunShadows=g,R.numDirectionalShadows=S,R.numPointShadows=b,R.numSpotShadows=C,R.numSpotMaps=y,R.numLightProbes=I,i.version=Jx++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let w=0,E=c.length;w<E;w++){let v=c[w];if(v.isSunLight){let S=i.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(v.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function kf(n){let t=new Kx(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function jx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new kf(n),t.set(s,[o])):r>=a.length?(o=new kf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
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
}`,e_=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],n_=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Wf=new _e,Kr=new H,oh=new H;function i_(n,t,e){let i=new qs,s=new re,r=new re,a=new Ne,o=new ao,l=new oo,c={},h=e.maxTextureSize,f={[Wi]:mn,[mn]:Wi,[Dn]:Dn},u=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Qx,fragmentShader:t_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new ln;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ee(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr;let p=this.type;this.render=function(b,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ou&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vr);let T=n.getRenderTarget(),I=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),L=n.state;L.setBlending(oi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=p!==this.type;D&&C.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=b.length;P<N;P++){let B=b[P],z=B.shadow;if(z===void 0){Ot("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let K=z.getFrameExtents();s.multiply(K),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,z.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Z,z.map===null||D===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Qs){if(B.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new on(s.x,s.y,{format:Zi,type:$n,minFilter:tn,magFilter:tn,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new Vi(s.x,s.y,On),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=ii,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Be,z.map.depthTexture.magFilter=Be}else B.isPointLight?(z.map=new ml(s.x),z.map.depthTexture=new io(s.x,Jn)):(z.map=new on(s.x,s.y),z.map.depthTexture=new Vi(s.x,s.y,Jn)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=ii,this.type===Vr?(z.map.depthTexture.compareFunction=Z?ul:hl,z.map.depthTexture.minFilter=tn,z.map.depthTexture.magFilter=tn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Be,z.map.depthTexture.magFilter=Be);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();B.isPointLight!==!0&&z.updateMatrices(B,y);for(let et=0;et<Q;et++){let It=z.getCamera(et);if(B.isPointLight){let Rt=z.camera,ce=z.matrix,st=B.distance||Rt.far;st!==Rt.far&&(Rt.far=st,Rt.updateProjectionMatrix()),Kr.setFromMatrixPosition(B.matrixWorld),Rt.position.copy(Kr),oh.copy(Rt.position),oh.add(e_[et]),Rt.up.copy(n_[et]),Rt.lookAt(oh),Rt.updateMatrixWorld(),ce.makeTranslation(-Kr.x,-Kr.y,-Kr.z),Wf.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Wf,Rt.coordinateSystem,Rt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,et),n.clear();else{et===0&&(n.setRenderTarget(z.map),n.clear());let Rt=z.getViewport(et);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),L.viewport(a)}i=z.getFrustum(et),v(C,y,It,B,this.type)}z.isPointLightShadow!==!0&&this.type===Qs&&w(z,y),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,I,R)};function w(b,C){let y=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new on(s.x,s.y,{format:Zi,type:$n}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,y,u,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,y,d,_,null)}function E(b,C,y,T){let I=null,R=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)I=R;else if(I=y.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=I.uuid,D=C.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let N=P[D];N===void 0&&(N=I.clone(),P[D]=N,C.addEventListener("dispose",S)),I=N}if(I.visible=C.visible,I.wireframe=C.wireframe,T===Qs?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:f[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let L=n.properties.get(I);L.light=y}return I}function v(b,C,y,T,I){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Qs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let D=t.update(b),P=b.material;if(Array.isArray(P)){let N=D.groups;for(let B=0,z=N.length;B<z;B++){let K=N[B],Z=P[K.materialIndex];if(Z&&Z.visible){let Q=E(b,Z,T,I);b.onBeforeShadow(n,b,C,y,D,Q,K),n.renderBufferDirect(y,null,D,Q,b,K),b.onAfterShadow(n,b,C,y,D,Q,K)}}}else if(P.visible){let N=E(b,P,T,I);b.onBeforeShadow(n,b,C,y,D,N,null),n.renderBufferDirect(y,null,D,N,b,null),b.onAfterShadow(n,b,C,y,D,N,null)}}let L=b.children;for(let D=0,P=L.length;D<P;D++)v(L[D],C,y,T,I)}function S(b){b.target.removeEventListener("dispose",S);for(let y in c){let T=c[y],I=b.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function s_(n,t){function e(){let O=!1,dt=new Ne,j=null,pt=new Ne(0,0,0,0);return{setMask:function(yt){j!==yt&&!O&&(n.colorMask(yt,yt,yt,yt),j=yt)},setLocked:function(yt){O=yt},setClear:function(yt,nt,Nt,Ct,Ae){Ae===!0&&(yt*=Ct,nt*=Ct,Nt*=Ct),dt.set(yt,nt,Nt,Ct),pt.equals(dt)===!1&&(n.clearColor(yt,nt,Nt,Ct),pt.copy(dt))},reset:function(){O=!1,j=null,pt.set(-1,0,0,0)}}}function i(){let O=!1,dt=!1,j=null,pt=null,yt=null;return{setReversed:function(nt){if(dt!==nt){let Nt=t.get("EXT_clip_control");nt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),dt=nt;let Ct=yt;yt=null,this.setClear(Ct)}},getReversed:function(){return dt},setTest:function(nt){nt?Y(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(nt){j!==nt&&!O&&(n.depthMask(nt),j=nt)},setFunc:function(nt){if(dt&&(nt=yf[nt]),pt!==nt){switch(nt){case Wa:n.depthFunc(n.NEVER);break;case Xa:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case Ya:n.depthFunc(n.EQUAL);break;case Za:n.depthFunc(n.GEQUAL);break;case Ja:n.depthFunc(n.GREATER);break;case $a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=nt}},setLocked:function(nt){O=nt},setClear:function(nt){yt!==nt&&(yt=nt,dt&&(nt=1-nt),n.clearDepth(nt))},reset:function(){O=!1,j=null,pt=null,yt=null,dt=!1}}}function s(){let O=!1,dt=null,j=null,pt=null,yt=null,nt=null,Nt=null,Ct=null,Ae=null;return{setTest:function(me){O||(me?Y(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(me){dt!==me&&!O&&(n.stencilMask(me),dt=me)},setFunc:function(me,Gn,Qn){(j!==me||pt!==Gn||yt!==Qn)&&(n.stencilFunc(me,Gn,Qn),j=me,pt=Gn,yt=Qn)},setOp:function(me,Gn,Qn){(nt!==me||Nt!==Gn||Ct!==Qn)&&(n.stencilOp(me,Gn,Qn),nt=me,Nt=Gn,Ct=Qn)},setLocked:function(me){O=me},setClear:function(me){Ae!==me&&(n.clearStencil(me),Ae=me)},reset:function(){O=!1,dt=null,j=null,pt=null,yt=null,nt=null,Nt=null,Ct=null,Ae=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],_=null,m=!1,p=null,w=null,E=null,v=null,S=null,b=null,C=null,y=new Ut(0,0,0),T=0,I=!1,R=null,L=null,D=null,P=null,N=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=K>=2);let Q=null,et={},It=n.getParameter(n.SCISSOR_BOX),Rt=n.getParameter(n.VIEWPORT),ce=new Ne().fromArray(It),st=new Ne().fromArray(Rt);function lt(O,dt,j,pt){let yt=new Uint8Array(4),nt=n.createTexture();n.bindTexture(O,nt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<j;Nt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(dt+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return nt}let G={};G[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(n.DEPTH_TEST),a.setFunc(zs),Wt(!1),Gt(wc),Y(n.CULL_FACE),ie(oi);function Y(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function rt(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function wt(O,dt){return u[O]!==dt?(n.bindFramebuffer(O,dt),u[O]=dt,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=dt),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function ct(O,dt){let j=g,pt=!1;if(O){j=d.get(dt),j===void 0&&(j=[],d.set(dt,j));let yt=O.textures;if(j.length!==yt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,Nt=yt.length;nt<Nt;nt++)j[nt]=n.COLOR_ATTACHMENT0+nt;j.length=yt.length,pt=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,pt=!0);pt&&n.drawBuffers(j)}function St(O){return _!==O?(n.useProgram(O),_=O,!0):!1}let he={[ls]:n.FUNC_ADD,[zu]:n.FUNC_SUBTRACT,[Vu]:n.FUNC_REVERSE_SUBTRACT};he[Hu]=n.MIN,he[Gu]=n.MAX;let Yt={[ku]:n.ZERO,[Wu]:n.ONE,[Xu]:n.SRC_COLOR,[Rc]:n.SRC_ALPHA,[Ku]:n.SRC_ALPHA_SATURATE,[Ju]:n.DST_COLOR,[Yu]:n.DST_ALPHA,[qu]:n.ONE_MINUS_SRC_COLOR,[Cc]:n.ONE_MINUS_SRC_ALPHA,[$u]:n.ONE_MINUS_DST_COLOR,[Zu]:n.ONE_MINUS_DST_ALPHA,[ju]:n.CONSTANT_COLOR,[Qu]:n.ONE_MINUS_CONSTANT_COLOR,[tf]:n.CONSTANT_ALPHA,[ef]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(O,dt,j,pt,yt,nt,Nt,Ct,Ae,me){if(O===oi){m===!0&&(rt(n.BLEND),m=!1);return}if(m===!1&&(Y(n.BLEND),m=!0),O!==Bu){if(O!==p||me!==I){if((w!==ls||S!==ls)&&(n.blendEquation(n.FUNC_ADD),w=ls,S=ls),me)switch(O){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ec:n.blendFunc(n.ONE,n.ONE);break;case Tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ac:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:zt("WebGLState: Invalid blending: ",O);break}else switch(O){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ec:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tc:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",O);break}E=null,v=null,b=null,C=null,y.set(0,0,0),T=0,p=O,I=me}return}yt=yt||dt,nt=nt||j,Nt=Nt||pt,(dt!==w||yt!==S)&&(n.blendEquationSeparate(he[dt],he[yt]),w=dt,S=yt),(j!==E||pt!==v||nt!==b||Nt!==C)&&(n.blendFuncSeparate(Yt[j],Yt[pt],Yt[nt],Yt[Nt]),E=j,v=pt,b=nt,C=Nt),(Ct.equals(y)===!1||Ae!==T)&&(n.blendColor(Ct.r,Ct.g,Ct.b,Ae),y.copy(Ct),T=Ae),p=O,I=!1}function Kt(O,dt){O.side===Dn?rt(n.CULL_FACE):Y(n.CULL_FACE);let j=O.side===mn;dt&&(j=!j),Wt(j),O.blending===tr&&O.transparent===!1?ie(oi):ie(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let pt=O.stencilWrite;o.setTest(pt),pt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(O){R!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),R=O)}function Gt(O){O!==Uu?(Y(n.CULL_FACE),O!==L&&(O===wc?n.cullFace(n.BACK):O===Fu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),L=O}function ue(O){O!==D&&(z&&n.lineWidth(O),D=O)}function Fe(O,dt,j){O?(Y(n.POLYGON_OFFSET_FILL),(P!==dt||N!==j)&&(P=dt,N=j,a.getReversed()&&(dt=-dt),n.polygonOffset(dt,j))):rt(n.POLYGON_OFFSET_FILL)}function Se(O){O?Y(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function pe(O){O===void 0&&(O=n.TEXTURE0+B-1),Q!==O&&(n.activeTexture(O),Q=O)}function F(O,dt,j){j===void 0&&(Q===null?j=n.TEXTURE0+B-1:j=Q);let pt=et[j];pt===void 0&&(pt={type:void 0,texture:void 0},et[j]=pt),(pt.type!==O||pt.texture!==dt)&&(Q!==j&&(n.activeTexture(j),Q=j),n.bindTexture(O,dt||G[O]),pt.type=O,pt.texture=dt)}function nn(){let O=et[Q];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ye(){try{n.compressedTexImage2D(...arguments)}catch(O){zt("WebGLState:",O)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(O){zt("WebGLState:",O)}}function x(){try{n.texSubImage2D(...arguments)}catch(O){zt("WebGLState:",O)}}function V(){try{n.texSubImage3D(...arguments)}catch(O){zt("WebGLState:",O)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(O){zt("WebGLState:",O)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(O){zt("WebGLState:",O)}}function at(){try{n.texStorage2D(...arguments)}catch(O){zt("WebGLState:",O)}}function ht(){try{n.texStorage3D(...arguments)}catch(O){zt("WebGLState:",O)}}function $(){try{n.texImage2D(...arguments)}catch(O){zt("WebGLState:",O)}}function tt(){try{n.texImage3D(...arguments)}catch(O){zt("WebGLState:",O)}}function ut(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function Lt(O,dt){f[O]!==dt&&(n.pixelStorei(O,dt),f[O]=dt)}function mt(O){ce.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ce.copy(O))}function ft(O){st.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),st.copy(O))}function Dt(O,dt){let j=c.get(dt);j===void 0&&(j=new WeakMap,c.set(dt,j));let pt=j.get(O);pt===void 0&&(pt=n.getUniformBlockIndex(dt,O.name),j.set(O,pt))}function Ft(O,dt){let pt=c.get(dt).get(O);l.get(dt)!==pt&&(n.uniformBlockBinding(dt,pt,O.__bindingPointIndex),l.set(dt,pt))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,et={},u={},d=new WeakMap,g=[],_=null,m=!1,p=null,w=null,E=null,v=null,S=null,b=null,C=null,y=new Ut(0,0,0),T=0,I=!1,R=null,L=null,D=null,P=null,N=null,ce.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:rt,bindFramebuffer:wt,drawBuffers:ct,useProgram:St,setBlending:ie,setMaterial:Kt,setFlipSided:Wt,setCullFace:Gt,setLineWidth:ue,setPolygonOffset:Fe,setScissorTest:Se,activeTexture:pe,bindTexture:F,unbindTexture:nn,compressedTexImage2D:ye,compressedTexImage3D:A,texImage2D:$,texImage3D:tt,pixelStorei:Lt,getParameter:ut,updateUBOMapping:Dt,uniformBlockBinding:Ft,texStorage2D:at,texStorage3D:ht,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:mt,viewport:ft,reset:qt}}function r_(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return g?new OffscreenCanvas(A,x):Er("canvas")}function m(A,x,V){let X=1,J=ye(A);if((J.width>V||J.height>V)&&(X=V/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let at=Math.floor(X*J.width),ht=Math.floor(X*J.height);u===void 0&&(u=_(at,ht));let $=x?_(at,ht):u;return $.width=at,$.height=ht,$.getContext("2d").drawImage(A,0,0,at,ht),Ot("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+at+"x"+ht+")."),$}else return"data"in A&&Ot("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function p(A){return A.generateMipmaps}function w(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(A,x,V,X,J,at=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht;X&&(ht=t.get("EXT_texture_norm16"),ht||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===n.RED&&(V===n.FLOAT&&($=n.R32F),V===n.HALF_FLOAT&&($=n.R16F),V===n.UNSIGNED_BYTE&&($=n.R8),V===n.UNSIGNED_SHORT&&ht&&($=ht.R16_EXT),V===n.SHORT&&ht&&($=ht.R16_SNORM_EXT)),x===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&($=n.R8UI),V===n.UNSIGNED_SHORT&&($=n.R16UI),V===n.UNSIGNED_INT&&($=n.R32UI),V===n.BYTE&&($=n.R8I),V===n.SHORT&&($=n.R16I),V===n.INT&&($=n.R32I)),x===n.RG&&(V===n.FLOAT&&($=n.RG32F),V===n.HALF_FLOAT&&($=n.RG16F),V===n.UNSIGNED_BYTE&&($=n.RG8),V===n.UNSIGNED_SHORT&&ht&&($=ht.RG16_EXT),V===n.SHORT&&ht&&($=ht.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&($=n.RG8UI),V===n.UNSIGNED_SHORT&&($=n.RG16UI),V===n.UNSIGNED_INT&&($=n.RG32UI),V===n.BYTE&&($=n.RG8I),V===n.SHORT&&($=n.RG16I),V===n.INT&&($=n.RG32I)),x===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&($=n.RGB8UI),V===n.UNSIGNED_SHORT&&($=n.RGB16UI),V===n.UNSIGNED_INT&&($=n.RGB32UI),V===n.BYTE&&($=n.RGB8I),V===n.SHORT&&($=n.RGB16I),V===n.INT&&($=n.RGB32I)),x===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&($=n.RGBA8UI),V===n.UNSIGNED_SHORT&&($=n.RGBA16UI),V===n.UNSIGNED_INT&&($=n.RGBA32UI),V===n.BYTE&&($=n.RGBA8I),V===n.SHORT&&($=n.RGBA16I),V===n.INT&&($=n.RGBA32I)),x===n.RGB&&(V===n.UNSIGNED_SHORT&&ht&&($=ht.RGB16_EXT),V===n.SHORT&&ht&&($=ht.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),x===n.RGBA){let tt=at?wr:se.getTransfer(J);V===n.FLOAT&&($=n.RGBA32F),V===n.HALF_FLOAT&&($=n.RGBA16F),V===n.UNSIGNED_BYTE&&($=tt===xe?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&ht&&($=ht.RGBA16_EXT),V===n.SHORT&&ht&&($=ht.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(A,x){let V;return A?x===null||x===Jn||x===nr?V=n.DEPTH24_STENCIL8:x===On?V=n.DEPTH32F_STENCIL8:x===er&&(V=n.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===nr?V=n.DEPTH_COMPONENT24:x===On?V=n.DEPTH_COMPONENT32F:x===er&&(V=n.DEPTH_COMPONENT16),V}function b(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function y(A){let x=A.target;x.removeEventListener("dispose",y),R(x)}function T(A){let x=i.get(A);if(x.__webglInit===void 0)return;let V=A.source,X=d.get(V);if(X){let J=X[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(A),Object.keys(X).length===0&&d.delete(V)}i.remove(A)}function I(A){let x=i.get(A);n.deleteTexture(x.__webglTexture);let V=A.source,X=d.get(V);delete X[x.__cacheKey],a.memory.textures--}function R(A){let x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let J=0;J<x.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[X][J]);else n.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)n.deleteFramebuffer(x.__webglFramebuffer[X]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=A.textures;for(let X=0,J=V.length;X<J;X++){let at=i.get(V[X]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),a.memory.textures--),i.remove(V[X])}i.remove(A)}let L=0;function D(){L=0}function P(){return L}function N(A){L=A}function B(){let A=L;return A>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function z(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function K(A,x){let V=i.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let X=A.image;if(X===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(V,A,x);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+x)}function Z(A,x){let V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){rt(V,A,x);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+x)}function Q(A,x){let V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){rt(V,A,x);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+x)}function et(A,x){let V=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){wt(V,A,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+x)}let It={[Ka]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},Rt={[Be]:n.NEAREST,[rf]:n.NEAREST_MIPMAP_NEAREST,[Gr]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},ce={[cf]:n.NEVER,[pf]:n.ALWAYS,[hf]:n.LESS,[hl]:n.LEQUAL,[uf]:n.EQUAL,[ul]:n.GEQUAL,[ff]:n.GREATER,[df]:n.NOTEQUAL};function st(A,x){if(x.type===On&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===Eo||x.magFilter===Gr||x.magFilter===qi||x.minFilter===tn||x.minFilter===Eo||x.minFilter===Gr||x.minFilter===qi)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,It[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,It[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,It[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Rt[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Rt[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Be||x.minFilter!==Gr&&x.minFilter!==qi||x.type===On&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function lt(A,x){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let X=x.source,J=d.get(X);J===void 0&&(J={},d.set(X,J));let at=z(x);if(at!==A.__cacheKey){J[at]===void 0&&(J[at]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),J[at].usedTimes++;let ht=J[A.__cacheKey];ht!==void 0&&(J[A.__cacheKey].usedTimes--,ht.usedTimes===0&&I(x)),A.__cacheKey=at,A.__webglTexture=J[at].texture}return V}function G(A,x,V){return Math.floor(Math.floor(A/V)/x)}function Y(A,x,V,X){let at=A.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,V,X,x.data);else{at.sort((Lt,mt)=>Lt.start-mt.start);let ht=0;for(let Lt=1;Lt<at.length;Lt++){let mt=at[ht],ft=at[Lt],Dt=mt.start+mt.count,Ft=G(ft.start,x.width,4),qt=G(mt.start,x.width,4);ft.start<=Dt+1&&Ft===qt&&G(ft.start+ft.count-1,x.width,4)===Ft?mt.count=Math.max(mt.count,ft.start+ft.count-mt.start):(++ht,at[ht]=ft)}at.length=ht+1;let $=e.getParameter(n.UNPACK_ROW_LENGTH),tt=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Lt=0,mt=at.length;Lt<mt;Lt++){let ft=at[Lt],Dt=Math.floor(ft.start/4),Ft=Math.ceil(ft.count/4),qt=Dt%x.width,O=Math.floor(Dt/x.width),dt=Ft,j=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,qt,O,dt,j,V,X,x.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,$),e.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function rt(A,x,V){let X=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=n.TEXTURE_3D);let J=lt(A,x),at=x.source;e.bindTexture(X,A.__webglTexture,n.TEXTURE0+V);let ht=i.get(at);if(at.version!==ht.__version||J===!0){if(e.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let j=se.getPrimaries(se.workingColorSpace),pt=x.colorSpace===bi?null:se.getPrimaries(x.colorSpace),yt=x.colorSpace===bi||j===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=m(x.image,!1,s.maxTextureSize);tt=nn(x,tt);let ut=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type),mt=v(x.internalFormat,ut,Lt,x.normalized,x.colorSpace,x.isVideoTexture);st(X,x);let ft,Dt=x.mipmaps,Ft=x.isVideoTexture!==!0,qt=ht.__version===void 0||J===!0,O=at.dataReady,dt=b(x,tt);if(x.isDepthTexture)mt=S(x.format===Yi,x.type),qt&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,mt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,mt,tt.width,tt.height,0,ut,Lt,null));else if(x.isDataTexture)if(Dt.length>0){Ft&&qt&&e.texStorage2D(n.TEXTURE_2D,dt,mt,Dt[0].width,Dt[0].height);for(let j=0,pt=Dt.length;j<pt;j++)ft=Dt[j],Ft?O&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ft.width,ft.height,ut,Lt,ft.data):e.texImage2D(n.TEXTURE_2D,j,mt,ft.width,ft.height,0,ut,Lt,ft.data);x.generateMipmaps=!1}else Ft?(qt&&e.texStorage2D(n.TEXTURE_2D,dt,mt,tt.width,tt.height),O&&Y(x,tt,ut,Lt)):e.texImage2D(n.TEXTURE_2D,0,mt,tt.width,tt.height,0,ut,Lt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,mt,Dt[0].width,Dt[0].height,tt.depth);for(let j=0,pt=Dt.length;j<pt;j++)if(ft=Dt[j],x.format!==Bn)if(ut!==null)if(Ft){if(O)if(x.layerUpdates.size>0){let yt=$c(ft.width,ft.height,x.format,x.type);for(let nt of x.layerUpdates){let Nt=ft.data.subarray(nt*yt/ft.data.BYTES_PER_ELEMENT,(nt+1)*yt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,nt,ft.width,ft.height,1,ut,Nt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,tt.depth,ut,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,mt,ft.width,ft.height,tt.depth,0,ft.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,tt.depth,ut,Lt,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,mt,ft.width,ft.height,tt.depth,0,ut,Lt,ft.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ft&&qt&&e.texStorage2D(n.TEXTURE_2D,dt,mt,Dt[0].width,Dt[0].height);for(let j=0,pt=Dt.length;j<pt;j++)ft=Dt[j],x.format!==Bn?ut!==null?Ft?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ft.width,ft.height,ut,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,j,mt,ft.width,ft.height,0,ft.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?O&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ft.width,ft.height,ut,Lt,ft.data):e.texImage2D(n.TEXTURE_2D,j,mt,ft.width,ft.height,0,ut,Lt,ft.data)}else if(x.isDataArrayTexture)if(Ft){if(qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,mt,tt.width,tt.height,tt.depth),O)if(x.layerUpdates.size>0){let j=$c(tt.width,tt.height,x.format,x.type);for(let pt of x.layerUpdates){let yt=tt.data.subarray(pt*j/tt.data.BYTES_PER_ELEMENT,(pt+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pt,tt.width,tt.height,1,ut,Lt,yt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,Lt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,mt,tt.width,tt.height,tt.depth,0,ut,Lt,tt.data);else if(x.isData3DTexture)Ft?(qt&&e.texStorage3D(n.TEXTURE_3D,dt,mt,tt.width,tt.height,tt.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,Lt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,mt,tt.width,tt.height,tt.depth,0,ut,Lt,tt.data);else if(x.isFramebufferTexture){if(qt)if(Ft)e.texStorage2D(n.TEXTURE_2D,dt,mt,tt.width,tt.height);else{let j=tt.width,pt=tt.height;for(let yt=0;yt<dt;yt++)e.texImage2D(n.TEXTURE_2D,yt,mt,j,pt,0,ut,Lt,null),j>>=1,pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),f.add(x),j.onpaint=pt=>{let yt=pt.changedElements;for(let nt of f)yt.includes(nt.image)&&(nt.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,tt);else{let yt=n.RGBA,nt=n.RGBA,Nt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,yt,nt,Nt,tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ft&&qt){let j=ye(Dt[0]);e.texStorage2D(n.TEXTURE_2D,dt,mt,j.width,j.height)}for(let j=0,pt=Dt.length;j<pt;j++)ft=Dt[j],Ft?O&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ut,Lt,ft):e.texImage2D(n.TEXTURE_2D,j,mt,ut,Lt,ft);x.generateMipmaps=!1}else if(Ft){if(qt){let j=ye(tt);e.texStorage2D(n.TEXTURE_2D,dt,mt,j.width,j.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Lt,tt)}else e.texImage2D(n.TEXTURE_2D,0,mt,ut,Lt,tt);p(x)&&w(X),ht.__version=at.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function wt(A,x,V){if(x.image.length!==6)return;let X=lt(A,x),J=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+V);let at=i.get(J);if(J.version!==at.__version||X===!0){e.activeTexture(n.TEXTURE0+V);let ht=se.getPrimaries(se.workingColorSpace),$=x.colorSpace===bi?null:se.getPrimaries(x.colorSpace),tt=x.colorSpace===bi||ht===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ut=x.isCompressedTexture||x.image[0].isCompressedTexture,Lt=x.image[0]&&x.image[0].isDataTexture,mt=[];for(let nt=0;nt<6;nt++)!ut&&!Lt?mt[nt]=m(x.image[nt],!0,s.maxCubemapSize):mt[nt]=Lt?x.image[nt].image:x.image[nt],mt[nt]=nn(x,mt[nt]);let ft=mt[0],Dt=r.convert(x.format,x.colorSpace),Ft=r.convert(x.type),qt=v(x.internalFormat,Dt,Ft,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,dt=at.__version===void 0||X===!0,j=J.dataReady,pt=b(x,ft);st(n.TEXTURE_CUBE_MAP,x);let yt;if(ut){O&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,qt,ft.width,ft.height);for(let nt=0;nt<6;nt++){yt=mt[nt].mipmaps;for(let Nt=0;Nt<yt.length;Nt++){let Ct=yt[Nt];x.format!==Bn?Dt!==null?O?j&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,0,0,Ct.width,Ct.height,Dt,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,qt,Ct.width,Ct.height,0,Ct.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,0,0,Ct.width,Ct.height,Dt,Ft,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,qt,Ct.width,Ct.height,0,Dt,Ft,Ct.data)}}}else{if(yt=x.mipmaps,O&&dt){yt.length>0&&pt++;let nt=ye(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,qt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Lt){O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,mt[nt].width,mt[nt].height,Dt,Ft,mt[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,qt,mt[nt].width,mt[nt].height,0,Dt,Ft,mt[nt].data);for(let Nt=0;Nt<yt.length;Nt++){let Ae=yt[Nt].image[nt].image;O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,0,0,Ae.width,Ae.height,Dt,Ft,Ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,qt,Ae.width,Ae.height,0,Dt,Ft,Ae.data)}}else{O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Dt,Ft,mt[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,qt,Dt,Ft,mt[nt]);for(let Nt=0;Nt<yt.length;Nt++){let Ct=yt[Nt];O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,0,0,Dt,Ft,Ct.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,qt,Dt,Ft,Ct.image[nt])}}}p(x)&&w(n.TEXTURE_CUBE_MAP),at.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ct(A,x,V,X,J,at){let ht=r.convert(V.format,V.colorSpace),$=r.convert(V.type),tt=v(V.internalFormat,ht,$,V.normalized,V.colorSpace),ut=i.get(x),Lt=i.get(V);if(Lt.__renderTarget=x,!ut.__hasExternalTextures){let mt=Math.max(1,x.width>>at),ft=Math.max(1,x.height>>at);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,at,tt,mt,ft,x.depth,0,ht,$,null):e.texImage2D(J,at,tt,mt,ft,0,ht,$,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,Lt.__webglTexture,0,Se(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,Lt.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(A,x,V){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){let X=x.depthTexture,J=X&&X.isDepthTexture?X.type:null,at=S(x.stencilBuffer,J),ht=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se(x),at,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se(x),at,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,at,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,A)}else{let X=x.textures;for(let J=0;J<X.length;J++){let at=X[J],ht=r.convert(at.format,at.colorSpace),$=r.convert(at.type),tt=v(at.internalFormat,ht,$,at.normalized,at.colorSpace);pe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se(x),tt,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se(x),tt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,tt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(A,x,V){let X=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),st(n.TEXTURE_CUBE_MAP,x.depthTexture);let ut=r.convert(x.depthTexture.format),Lt=r.convert(x.depthTexture.type),mt;x.depthTexture.format===ii?mt=n.DEPTH_COMPONENT24:x.depthTexture.format===Yi&&(mt=n.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,mt,x.width,x.height,0,ut,Lt,null)}}else K(x.depthTexture,0);let at=J.__webglTexture,ht=Se(x),$=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,tt=x.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===ii)pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,$,at,0,ht):n.framebufferTexture2D(n.FRAMEBUFFER,tt,$,at,0);else if(x.depthTexture.format===Yi)pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,$,at,0,ht):n.framebufferTexture2D(n.FRAMEBUFFER,tt,$,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(A){let x=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let X=0;X<6;X++)he(x.__webglFramebuffer[X],A,X);else{let X=A.texture.mipmaps;X&&X.length>0?he(x.__webglFramebuffer[0],A,0):he(x.__webglFramebuffer,A,0)}else if(V){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=n.createRenderbuffer(),St(x.__webglDepthbuffer[X],A,!1);else{let J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,at)}}else{let X=A.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),St(x.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,at)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(A,x,V){let X=i.get(A);x!==void 0&&ct(X.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Yt(A)}function Kt(A){let x=A.texture,V=i.get(A),X=i.get(x);A.addEventListener("dispose",y);let J=A.textures,at=A.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,a.memory.textures++),at){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let tt=0;tt<x.mipmaps.length;tt++)V.__webglFramebuffer[$][tt]=n.createFramebuffer()}else V.__webglFramebuffer[$]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)V.__webglFramebuffer[$]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ht)for(let $=0,tt=J.length;$<tt;$++){let ut=i.get(J[$]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&pe(A)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let tt=J[$];V.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[$]);let ut=r.convert(tt.format,tt.colorSpace),Lt=r.convert(tt.type),mt=v(tt.internalFormat,ut,Lt,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),ft=Se(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,mt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,V.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),St(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),st(n.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)ct(V.__webglFramebuffer[$][tt],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,tt);else ct(V.__webglFramebuffer[$],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(x)&&w(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let $=0,tt=J.length;$<tt;$++){let ut=J[$],Lt=i.get(ut),mt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(mt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,Lt.__webglTexture),st(mt,ut),ct(V.__webglFramebuffer,A,ut,n.COLOR_ATTACHMENT0+$,mt,0),p(ut)&&w(mt)}e.unbindTexture()}else{let $=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture($,X.__webglTexture),st($,x),x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)ct(V.__webglFramebuffer[tt],A,x,n.COLOR_ATTACHMENT0,$,tt);else ct(V.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,$,0);p(x)&&w($),e.unbindTexture()}A.depthBuffer&&Yt(A)}function Wt(A){let x=A.textures;for(let V=0,X=x.length;V<X;V++){let J=x[V];if(p(J)){let at=E(A),ht=i.get(J).__webglTexture;e.bindTexture(at,ht),w(at),e.unbindTexture()}}}let Gt=[],ue=[];function Fe(A){if(A.samples>0){if(pe(A)===!1){let x=A.textures,V=A.width,X=A.height,J=n.COLOR_BUFFER_BIT,at=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(A),$=x.length>1;if($)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ut]);let Lt=i.get(x[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,V,X,0,0,V,X,J,n.NEAREST),l===!0&&(Gt.length=0,ue.length=0,Gt.push(n.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Gt.push(at),ue.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ut]);let Lt=i.get(x[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Se(A){return Math.min(s.maxSamples,A.samples)}function pe(A){let x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function nn(A,x){let V=A.colorSpace,X=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==br&&V!==bi&&(se.getTransfer(V)===xe?(X!==Bn||J!==yn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",V)),x}function ye(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.getTextureUnits=P,this.setTextureUnits=N,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=ie,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function a_(n,t){function e(i,s=bi){let r,a=se.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Ao)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ro)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bc)return n.BYTE;if(i===zc)return n.SHORT;if(i===er)return n.UNSIGNED_SHORT;if(i===To)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===$n)return n.HALF_FLOAT;if(i===Gc)return n.ALPHA;if(i===kc)return n.RGB;if(i===Bn)return n.RGBA;if(i===ii)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===Co)return n.RED;if(i===Po)return n.RED_INTEGER;if(i===Zi)return n.RG;if(i===Io)return n.RG_INTEGER;if(i===Lo)return n.RGBA_INTEGER;if(i===kr||i===Wr||i===Xr||i===qr)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Do||i===No||i===Uo||i===Fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oo||i===Bo||i===zo||i===Vo||i===Ho||i===Yr||i===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oo||i===Bo)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vo)return r.COMPRESSED_R11_EAC;if(i===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return r.COMPRESSED_RG11_EAC;if(i===Go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ko||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===Jo||i===$o||i===Ko||i===jo||i===Qo||i===tl||i===el||i===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ko)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$o)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ko)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===il||i===sl||i===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===il)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===al||i===ol||i===Zr||i===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===al)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new In({vertexShader:o_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends si{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new mh,p={},w=e.getContextAttributes(),E=null,v=null,S=[],b=[],C=new re,y=null,T=null,I=new $e;I.viewport=new Ne;let R=new $e;R.viewport=new Ne;let L=[I,R],D=new vo,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=S[G];return Y===void 0&&(Y=new ks,S[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=S[G];return Y===void 0&&(Y=new ks,S[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=S[G];return Y===void 0&&(Y=new ks,S[G]=Y),Y.getHandSpace()};function B(G){let Y=b.indexOf(G.inputSource);if(Y===-1)return;let rt=S[Y];rt!==void 0&&(rt.update(G.inputSource,G.frame,c||a),rt.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let G=0;G<S.length;G++){let Y=b[G];Y!==null&&(b[G]=null,S[G].disconnect(Y))}P=null,N=null,m.reset();for(let G in p)delete p[G];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,v=null,lt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),T!==null){let G=T.camera;G.fov=T.fov,G.zoom=T.zoom,G.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),w.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,wt=null,ct=null;w.depth&&(ct=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=w.stencil?Yi:ii,wt=w.stencil?nr:Jn);let St={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(St),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new on(u.textureWidth,u.textureHeight,{format:Bn,type:yn,depthTexture:new Vi(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let rt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new on(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(G){for(let Y=0;Y<G.removed.length;Y++){let rt=G.removed[Y],wt=b.indexOf(rt);wt>=0&&(b[wt]=null,S[wt].disconnect(rt))}for(let Y=0;Y<G.added.length;Y++){let rt=G.added[Y],wt=b.indexOf(rt);if(wt===-1){for(let St=0;St<S.length;St++)if(St>=b.length){b.push(rt),wt=St;break}else if(b[St]===null){b[St]=rt,wt=St;break}if(wt===-1)break}let ct=S[wt];ct&&ct.connect(rt)}}let Z=new H,Q=new H;function et(G,Y,rt){Z.setFromMatrixPosition(Y.matrixWorld),Q.setFromMatrixPosition(rt.matrixWorld);let wt=Z.distanceTo(Q),ct=Y.projectionMatrix.elements,St=rt.projectionMatrix.elements,he=ct[14]/(ct[10]-1),Yt=ct[14]/(ct[10]+1),ie=(ct[9]+1)/ct[5],Kt=(ct[9]-1)/ct[5],Wt=(ct[8]-1)/ct[0],Gt=(St[8]+1)/St[0],ue=he*Wt,Fe=he*Gt,Se=wt/(-Wt+Gt),pe=Se*-Wt;if(Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(pe),G.translateZ(Se),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ct[10]===-1)G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let F=he+Se,nn=Yt+Se,ye=ue-pe,A=Fe+(wt-pe),x=ie*Yt/nn*F,V=Kt*Yt/nn*F;G.projectionMatrix.makePerspective(ye,A,x,V,F,nn),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function It(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Y=G.near,rt=G.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),D.near=R.near=I.near=Y,D.far=R.far=I.far=rt,(P!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),P=D.near,N=D.far),D.layers.mask=G.layers.mask|6,I.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let wt=G.parent,ct=D.cameras;It(D,wt);for(let St=0;St<ct.length;St++)It(ct[St],wt);ct.length===2?et(D,I,R):D.projectionMatrix.copy(I.projectionMatrix),T===null&&G.isPerspectiveCamera&&(T={camera:G,fov:G.fov,zoom:G.zoom}),Rt(G,D,wt)};function Rt(G,Y,rt){rt===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(rt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Tr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(G){return p[G]};let ce=null;function st(G,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){let rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let wt=!1;rt.length!==D.cameras.length&&(D.cameras.length=0,wt=!0);for(let Yt=0;Yt<rt.length;Yt++){let ie=rt[Yt],Kt=null;if(d!==null)Kt=d.getViewport(ie);else{let Gt=f.getViewSubImage(u,ie);Kt=Gt.viewport,Yt===0&&(t.setRenderTargetTextures(v,Gt.colorTexture,Gt.depthStencilTexture),t.setRenderTarget(v))}let Wt=L[Yt];Wt===void 0&&(Wt=new $e,Wt.layers.enable(Yt),Wt.viewport=new Ne,L[Yt]=Wt),Wt.matrix.fromArray(ie.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(ie.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Yt===0&&(D.matrix.copy(Wt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),wt===!0&&D.cameras.push(Wt)}let ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();let Yt=f.getDepthInformation(rt[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,s.renderState)}if(ct&&ct.includes("camera-access")&&_){t.state.unbindTexture(),f=i.getBinding();for(let Yt=0;Yt<rt.length;Yt++){let ie=rt[Yt].camera;if(ie){let Kt=p[ie];Kt||(Kt=new Ur,p[ie]=Kt);let Wt=f.getCameraImage(ie);Kt.sourceTexture=Wt}}}}for(let rt=0;rt<S.length;rt++){let wt=b[rt],ct=S[rt];wt!==null&&ct!==void 0&&ct.update(wt,Y,c||a)}ce&&ce(G,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}let lt=new Xf;lt.setAnimationLoop(st),this.setAnimationLoop=function(G){ce=G},this.dispose=function(){}}},c_=new _e,Kf=new Ht;Kf.set(-1,0,0,0,1,0,0,0,1);function h_(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Yc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),E=w.envMap,v=w.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function u_(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let b=S.program;i.uniformBlockBinding(v,b)}function c(v,S){let b=s[v.id];b===void 0&&(m(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",w));let C=S.program;i.updateUBOMapping(v,C);let y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){let S=f();v.__bindingPointIndex=S;let b=n.createBuffer(),C=v.__size,y=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=s[v.id],b=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let y=0,T=b.length;y<T;y++){let I=b[y];if(Array.isArray(I))for(let R=0,L=I.length;R<L;R++)d(I[R],y,R,C);else d(I,y,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,S,b,C){if(_(v,S,b,C)===!0){let y=v.__offset,T=v.value;if(Array.isArray(T)){let I=0;for(let R=0;R<T.length;R++){let L=T[R],D=p(L);g(L,v.__data,I),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(I+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,v.__data)}}function g(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function _(v,S,b,C){let y=v.value,T=S+"_"+b;if(C[T]===void 0)return typeof y=="number"||typeof y=="boolean"?C[T]=y:ArrayBuffer.isView(y)?C[T]=y.slice():C[T]=y.clone(),!0;{let I=C[T];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return C[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function m(v){let S=v.uniforms,b=0,C=16;for(let T=0,I=S.length;T<I;T++){let R=Array.isArray(S[T])?S[T]:[S[T]];for(let L=0,D=R.length;L<D;L++){let P=R[L],N=Array.isArray(P.value)?P.value:[P.value];for(let B=0,z=N.length;B<z;B++){let K=N[B],Z=p(K),Q=b%C,et=Q%Z.boundary,It=Q+et;b+=et,It!==0&&C-It<Z.storage&&(b+=C-It),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=Z.storage}}}let y=b%C;return y>0&&(b+=C-y),v.__size=b,v.__cache={},this}function p(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",v),S}function w(v){let S=v.target;S.removeEventListener("dispose",w);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(let v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var f_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function d_(){return li===null&&(li=new Lr(f_,16,16,Zi,$n),li.name="DFG_LUT",li.minFilter=tn,li.magFilter=tn,li.wrapS=ni,li.wrapT=ni,li.generateMipmaps=!1,li.needsUpdate=!0),li}var gl=class{constructor(t={}){let{canvas:e=gf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=yn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=d,m=new Set([Lo,Io,Po]),p=new Set([yn,Jn,er,nr,Ao,Ro]),w=new Uint32Array(4),E=new Int32Array(4),v=new H,S=null,b=null,C=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,R=!1,L=null,D=null,P=null,N=null;this._outputColorSpace=dn;let B=0,z=0,K=null,Z=-1,Q=null,et=new Ne,It=new Ne,Rt=null,ce=new Ut(0),st=0,lt=e.width,G=e.height,Y=1,rt=null,wt=null,ct=new Ne(0,0,lt,G),St=new Ne(0,0,lt,G),he=!1,Yt=new qs,ie=!1,Kt=!1,Wt=new _e,Gt=new H,ue=new Ne,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function pe(){return K===null?Y:1}let F=i;function nn(M,U){return e.getContext(M,U)}let ye,A,x,V,X,J,at,ht,$,tt,ut,Lt,mt,ft,Dt,Ft,qt,O,dt,j,pt,yt,nt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Gn,!1),F===null){let U="webgl2";if(F=nn(U,M),F===null)throw nn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(M){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),zt("WebGLRenderer: "+M.message),M}function Nt(){ye=new vg(F),ye.init(),pt=new a_(F,ye),A=new hg(F,ye,t,pt),x=new s_(F,ye),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),D=F.createFramebuffer(),P=F.createFramebuffer(),N=F.createFramebuffer(),V=new bg(F),X=new Wx,J=new r_(F,ye,x,X,A,pt,V),at=new yg(I),ht=new Ep(F),yt=new lg(F,ht),$=new Mg(F,ht,V,yt),tt=new Eg(F,$,ht,yt,V),O=new wg(F,A,J),Dt=new ug(X),ut=new kx(I,at,ye,A,yt,Dt),Lt=new h_(I,X),mt=new qx,ft=new jx(ye),qt=new og(I,at,x,tt,g,l),Ft=new i_(I,tt,A),nt=new u_(F,V,A,x),dt=new cg(F,ye,V),j=new Sg(F,ye,V),V.programs=ut.programs,I.capabilities=A,I.extensions=ye,I.properties=X,I.renderLists=mt,I.shadowMap=Ft,I.state=x,I.info=V}_!==yn&&(T=new Ag(_,e.width,e.height,o,s,r));let Ct=new gh(I,F);this.xr=Ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(lt,G,!1))},this.getSize=function(M){return M.set(lt,G)},this.setSize=function(M,U,q=!0){if(Ct.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=M,G=U,e.width=Math.floor(M*Y),e.height=Math.floor(U*Y),q===!0&&(e.style.width=M+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(lt*Y,G*Y).floor()},this.setDrawingBufferSize=function(M,U,q){lt=M,G=U,Y=q,e.width=Math.floor(M*q),e.height=Math.floor(U*q),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===yn){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(et)},this.getViewport=function(M){return M.copy(ct)},this.setViewport=function(M,U,q,k){M.isVector4?ct.set(M.x,M.y,M.z,M.w):ct.set(M,U,q,k),x.viewport(et.copy(ct).multiplyScalar(Y).round())},this.getScissor=function(M){return M.copy(St)},this.setScissor=function(M,U,q,k){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,U,q,k),x.scissor(It.copy(St).multiplyScalar(Y).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(M){x.setScissorTest(he=M)},this.setOpaqueSort=function(M){rt=M},this.setTransparentSort=function(M){wt=M},this.getClearColor=function(M){return M.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,q=!0){let k=0;if(M){let W=!1;if(K!==null){let _t=K.texture.format;W=m.has(_t)}if(W){let _t=K.texture.type,Et=p.has(_t),xt=qt.getClearColor(),Tt=qt.getClearAlpha(),Pt=xt.r,Zt=xt.g,te=xt.b;Et?(w[0]=Pt,w[1]=Zt,w[2]=te,w[3]=Tt,F.clearBufferuiv(F.COLOR,0,w)):(E[0]=Pt,E[1]=Zt,E[2]=te,E[3]=Tt,F.clearBufferiv(F.COLOR,0,E))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),L=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),qt.dispose(),mt.dispose(),ft.dispose(),X.dispose(),at.dispose(),tt.dispose(),yt.dispose(),nt.dispose(),ut.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Qh),Ct.removeEventListener("sessionend",tu),ts.stop()};function Ae(M){M.preventDefault(),Xc("WebGLRenderer: Context Lost."),R=!0}function me(){Xc("WebGLRenderer: Context Restored."),R=!1;let M=V.autoReset,U=Ft.enabled,q=Ft.autoUpdate,k=Ft.needsUpdate,W=Ft.type;Nt(),V.autoReset=M,Ft.enabled=U,Ft.autoUpdate=q,Ft.needsUpdate=k,Ft.type=W}function Gn(M){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Qn(M){let U=M.target;U.removeEventListener("dispose",Qn),Ud(U)}function Ud(M){Fd(M),X.remove(M)}function Fd(M){let U=X.get(M).programs;U!==void 0&&(U.forEach(function(q){ut.releaseProgram(q)}),M.isShaderMaterial&&ut.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,q,k,W,_t){U===null&&(U=Fe);let Et=W.isMesh&&W.matrixWorld.determinantAffine()<0,xt=zd(M,U,q,k,W);x.setMaterial(k,Et);let Tt=q.index,Pt=1;if(k.wireframe===!0){if(Tt=$.getWireframeAttribute(q),Tt===void 0)return;Pt=2}let Zt=q.drawRange,te=q.attributes.position,At=Zt.start*Pt,ge=(Zt.start+Zt.count)*Pt;_t!==null&&(At=Math.max(At,_t.start*Pt),ge=Math.min(ge,(_t.start+_t.count)*Pt)),Tt!==null?(At=Math.max(At,0),ge=Math.min(ge,Tt.count)):te!=null&&(At=Math.max(At,0),ge=Math.min(ge,te.count));let He=ge-At;if(He<0||He===1/0)return;yt.setup(W,k,xt,q,Tt);let Pe,be=dt;if(Tt!==null&&(Pe=ht.get(Tt),be=j,be.setIndex(Pe)),W.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*pe()),be.setMode(F.LINES)):be.setMode(F.TRIANGLES);else if(W.isLine){let sn=k.linewidth;sn===void 0&&(sn=1),x.setLineWidth(sn*pe()),W.isLineSegments?be.setMode(F.LINES):W.isLineLoop?be.setMode(F.LINE_LOOP):be.setMode(F.LINE_STRIP)}else W.isPoints?be.setMode(F.POINTS):W.isSprite&&be.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))be.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let sn=W._multiDrawStarts,bt=W._multiDrawCounts,fn=W._multiDrawCount,le=Tt?ht.get(Tt).bytesPerElement:1,Un=X.get(k).currentProgram.getUniforms();for(let ti=0;ti<fn;ti++)Un.setValue(F,"_gl_DrawID",ti),be.render(sn[ti]/le,bt[ti])}else if(W.isInstancedMesh)be.renderInstances(At,He,W.count);else if(q.isInstancedBufferGeometry){let sn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,bt=Math.min(q.instanceCount,sn);be.renderInstances(At,He,bt)}else be.render(At,He)};function jh(M,U,q,k){L!==null&&M.isNodeMaterial&&L.setObject(k,M),ie===!0&&Dt.setState(M,q,!1),M.transparent===!0&&M.side===Dn&&M.forceSinglePass===!1?(M.side=mn,M.needsUpdate=!0,ya(M,U,k),M.side=Wi,M.needsUpdate=!0,ya(M,U,k),M.side=Dn):ya(M,U,k)}this.compile=function(M,U,q=null){q===null&&(q=M),L!==null&&L.renderStart(M,U,q),b=ft.get(q),b.init(U),y.push(b),q.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),M!==q&&M.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),Kt=this.localClippingEnabled,ie=Dt.init(this.clippingPlanes,Kt),ie===!0&&Dt.setGlobalState(this.clippingPlanes,U),L!==null&&Ft.render(b.state.shadowsArray,q,U);let k=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let _t=W.material;if(_t)if(Array.isArray(_t))for(let Et=0;Et<_t.length;Et++){let xt=_t[Et];jh(xt,q,U,W),k.add(xt)}else jh(_t,q,U,W),k.add(_t)}),b=y.pop(),L!==null&&L.renderEnd(),k},this.compileAsync=function(M,U,q=null){let k=this.compile(M,U,q);return new Promise(W=>{function _t(){if(k.forEach(function(Et){let Tt=X.get(Et).currentProgram;(Tt===void 0||Tt.isReady())&&k.delete(Et)}),k.size===0){W(M);return}setTimeout(_t,10)}ye.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Hl=null;function Od(M){Hl&&Hl(M)}function Qh(){ts.stop()}function tu(){ts.start()}let ts=new Xf;ts.setAnimationLoop(Od),typeof self!="undefined"&&ts.setContext(self),this.setAnimationLoop=function(M){Hl=M,Ct.setAnimationLoop(M),M===null?ts.stop():ts.start()},Ct.addEventListener("sessionstart",Qh),Ct.addEventListener("sessionend",tu),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(M,U);let q=Ct.enabled===!0&&Ct.isPresenting===!0,k=T!==null&&(K===null||q)&&T.begin(I,K);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(U),U=Ct.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,U,K),b=ft.get(M,y.length),b.init(U),b.state.textureUnits=J.getTextureUnits(),y.push(b),Wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Yt.setFromProjectionMatrix(Wt,Yn,U.reversedDepth),Kt=this.localClippingEnabled,ie=Dt.init(this.clippingPlanes,Kt),S=mt.get(M,C.length),S.init(),C.push(S),Ct.enabled===!0&&Ct.isPresenting===!0){let Et=I.xr.getDepthSensingMesh();Et!==null&&Gl(Et,U,-1/0,I.sortObjects)}Gl(M,U,0,I.sortObjects),S.finish(),L!==null&&L.updateLights(b.state.lightsArray),I.sortObjects===!0&&S.sort(rt,wt),Se=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Se&&qt.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&Dt.beginShadows();let W=b.state.shadowsArray;if(Ft.render(W,M,U),ie===!0&&Dt.endShadows(),(k&&T.hasRenderPass())===!1){let Et=S.opaque,xt=S.transmissive;if(b.setupLights(),U.isArrayCamera){let Tt=U.cameras;if(xt.length>0)for(let Pt=0,Zt=Tt.length;Pt<Zt;Pt++){let te=Tt[Pt];nu(Et,xt,M,te)}Se&&qt.render(M);for(let Pt=0,Zt=Tt.length;Pt<Zt;Pt++){let te=Tt[Pt];eu(S,M,te,te.viewport)}}else xt.length>0&&nu(Et,xt,M,U),Se&&qt.render(M),eu(S,M,U)}K!==null&&z===0&&(J.updateMultisampleRenderTarget(K),J.updateRenderTargetMipmap(K)),k&&T.end(I),M.isScene===!0&&M.onAfterRender(I,M,U),yt.resetDefaultState(),Z=-1,Q=null,y.pop(),y.length>0?(b=y[y.length-1],J.setTextureUnits(b.state.textureUnits),ie===!0&&Dt.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,L!==null&&L.renderEnd()};function Gl(M,U,q,k){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Yt)){k&&ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Wt);let Et=tt.update(M),xt=M.material;xt.visible&&S.push(M,Et,xt,q,ue.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Yt))){let Et=tt.update(M),xt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ue.copy(M.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ue.copy(Et.boundingSphere.center)),ue.applyMatrix4(M.matrixWorld).applyMatrix4(Wt)),Array.isArray(xt)){let Tt=Et.groups;for(let Pt=0,Zt=Tt.length;Pt<Zt;Pt++){let te=Tt[Pt],At=xt[te.materialIndex];At&&At.visible&&S.push(M,Et,At,q,ue.z,te,U)}}else xt.visible&&S.push(M,Et,xt,q,ue.z,null,U)}}let _t=M.children;for(let Et=0,xt=_t.length;Et<xt;Et++)Gl(_t[Et],U,q,k)}function eu(M,U,q,k){let{opaque:W,transmissive:_t,transparent:Et}=M;b.setupLightsView(q),ie===!0&&Dt.setGlobalState(I.clippingPlanes,q),k&&x.viewport(et.copy(k)),W.length>0&&_a(W,U,q),_t.length>0&&_a(_t,U,q),Et.length>0&&_a(Et,U,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function nu(M,U,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){let At=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new on(1,1,{generateMipmaps:!0,type:At?$n:yn,minFilter:qi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let _t=b.state.transmissionRenderTarget[k.id],Et=k.viewport||et;_t.setSize(Et.z*I.transmissionResolutionScale,Et.w*I.transmissionResolutionScale);let xt=I.getRenderTarget(),Tt=I.getActiveCubeFace(),Pt=I.getActiveMipmapLevel();I.setRenderTarget(_t),I.getClearColor(ce),st=I.getClearAlpha(),st<1&&I.setClearColor(16777215,.5),I.clear(),Se&&qt.render(q);let Zt=I.toneMapping;I.toneMapping=Zn;let te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),ie===!0&&Dt.setGlobalState(I.clippingPlanes,k),_a(M,q,k),J.updateMultisampleRenderTarget(_t),J.updateRenderTargetMipmap(_t),ye.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let ge=0,He=U.length;ge<He;ge++){let Pe=U[ge],{object:be,geometry:sn,material:bt,group:fn}=Pe;if(bt.side===Dn&&be.layers.test(k.layers)){let le=bt.side;bt.side=mn,bt.needsUpdate=!0,iu(be,q,k,sn,bt,fn),bt.side=le,bt.needsUpdate=!0,At=!0}}At===!0&&(J.updateMultisampleRenderTarget(_t),J.updateRenderTargetMipmap(_t))}I.setRenderTarget(xt,Tt,Pt),I.setClearColor(ce,st),te!==void 0&&(k.viewport=te),I.toneMapping=Zt}function _a(M,U,q){let k=U.isScene===!0?U.overrideMaterial:null;for(let W=0,_t=M.length;W<_t;W++){let Et=M[W],{object:xt,geometry:Tt,group:Pt}=Et,Zt=Et.material;Zt.allowOverride===!0&&k!==null&&(Zt=k),xt.layers.test(q.layers)&&iu(xt,U,q,Tt,Zt,Pt)}}function iu(M,U,q,k,W,_t){L!==null&&W.isNodeMaterial&&L.setObject(M,W),M.onBeforeRender(I,U,q,k,W,_t),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(I,U,q,k,M,_t),W.transparent===!0&&W.side===Dn&&W.forceSinglePass===!1?(W.side=mn,W.needsUpdate=!0,I.renderBufferDirect(q,U,k,W,M,_t),W.side=Wi,W.needsUpdate=!0,I.renderBufferDirect(q,U,k,W,M,_t),W.side=Dn):I.renderBufferDirect(q,U,k,W,M,_t),M.onAfterRender(I,U,q,k,W,_t)}function ya(M,U,q){U.isScene!==!0&&(U=Fe);let k=X.get(M),W=b.state.lights,_t=b.state.shadowsArray,Et=W.state.version,xt=ut.getParameters(M,W.state,_t,U,q,b.state.lightProbeGridArray),Tt=ut.getProgramCacheKey(xt),Pt=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=at.get(M.envMap||k.environment,Zt),k.envMapRotation=k.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Pt===void 0&&(M.addEventListener("dispose",Qn),Pt=new Map,k.programs=Pt);let te=Pt.get(Tt);if(te!==void 0){if(k.currentProgram===te&&k.lightsStateVersion===Et)return ru(M,xt),te}else xt.uniforms=ut.getUniforms(M),L!==null&&M.isNodeMaterial&&L.build(M,q,xt),M.onBeforeCompile(xt,I),te=ut.acquireProgram(xt,Tt),Pt.set(Tt,te),k.uniforms=xt.uniforms;let At=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=Dt.uniform),ru(M,xt),k.needsLights=Hd(M),k.lightsStateVersion=Et,k.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.sunLights.value=W.state.sun,At.sunLightShadows.value=W.state.sunShadow,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.sunShadowMatrix.value=W.state.sunShadowMatrix,At.sunShadowCascade.value=W.state.sunShadowCascade,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=te,k.uniformsList=null,te}function su(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=rr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function ru(M,U){let q=X.get(M);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Bd(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let q=0,k=M.length;q<k;q++){let W=M[q];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function zd(M,U,q,k,W){U.isScene!==!0&&(U=Fe),J.resetTextureUnits();let _t=U.fog,Et=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,xt=K===null?I.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:se.workingColorSpace,Tt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Pt=at.get(k.envMap||Et,Tt),Zt=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,te=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!q.morphAttributes.position,ge=!!q.morphAttributes.normal,He=!!q.morphAttributes.color,Pe=Zn;k.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Pe=I.toneMapping);let be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,sn=be!==void 0?be.length:0,bt=X.get(k),fn=b.state.lights;if(ie===!0&&(Kt===!0||M!==Q)){let Re=M===Q&&k.id===Z;Dt.setState(k,M,Re)}let le=!1;k.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==fn.state.version||bt.outputColorSpace!==xt||W.isBatchedMesh&&bt.batching===!1||!W.isBatchedMesh&&bt.batching===!0||W.isBatchedMesh&&bt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&bt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&bt.instancing===!1||!W.isInstancedMesh&&bt.instancing===!0||W.isSkinnedMesh&&bt.skinning===!1||!W.isSkinnedMesh&&bt.skinning===!0||W.isInstancedMesh&&bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&bt.instancingMorph===!1&&W.morphTexture!==null||bt.envMap!==Pt||k.fog===!0&&bt.fog!==_t||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Dt.numPlanes||bt.numIntersection!==Dt.numIntersection)||bt.vertexAlphas!==Zt||bt.vertexTangents!==te||bt.morphTargets!==At||bt.morphNormals!==ge||bt.morphColors!==He||bt.toneMapping!==Pe||bt.morphTargetsCount!==sn||!!bt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,bt.__version=k.version);let Un=bt.currentProgram;le===!0&&(Un=ya(k,U,W),L&&k.isNodeMaterial&&L.onUpdateProgram(k,Un,bt));let ti=!1,Ii=!1,Ss=!1,Me=Un.getUniforms(),Oe=bt.uniforms;if(x.useProgram(Un.program)&&(ti=!0,Ii=!0,Ss=!0),k.id!==Z&&(Z=k.id,Ii=!0),bt.needsLights){let Re=Bd(b.state.lightProbeGridArray,W);bt.lightProbeGrid!==Re&&(bt.lightProbeGrid=Re,Ii=!0)}if(ti||Q!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Me.setValue(F,"projectionMatrix",M.projectionMatrix),Me.setValue(F,"viewMatrix",M.matrixWorldInverse);let Di=Me.map.cameraPosition;Di!==void 0&&Di.setValue(F,Gt.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&Me.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Me.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Ii=!0,Ss=!0)}if(bt.needsLights&&(fn.state.sunShadowMap.length>0&&Me.setValue(F,"sunShadowMap",fn.state.sunShadowMap,J),fn.state.directionalShadowMap.length>0&&Me.setValue(F,"directionalShadowMap",fn.state.directionalShadowMap,J),fn.state.spotShadowMap.length>0&&Me.setValue(F,"spotShadowMap",fn.state.spotShadowMap,J),fn.state.pointShadowMap.length>0&&Me.setValue(F,"pointShadowMap",fn.state.pointShadowMap,J)),W.isSkinnedMesh){Me.setOptional(F,W,"bindMatrix"),Me.setOptional(F,W,"bindMatrixInverse");let Re=W.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Me.setValue(F,"boneTexture",Re.boneTexture,J))}W.isBatchedMesh&&(Me.setOptional(F,W,"batchingTexture"),Me.setValue(F,"batchingTexture",W._matricesTexture,J),Me.setOptional(F,W,"batchingIdTexture"),Me.setValue(F,"batchingIdTexture",W._indirectTexture,J),Me.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Me.setValue(F,"batchingColorTexture",W._colorsTexture,J));let Li=q.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&O.update(W,q,Un),(Ii||bt.receiveShadow!==W.receiveShadow)&&(bt.receiveShadow=W.receiveShadow,Me.setValue(F,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Oe.envMapIntensity.value=U.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=d_()),Ii){if(Me.setValue(F,"toneMappingExposure",I.toneMappingExposure),bt.needsLights&&Vd(Oe,Ss),_t&&k.fog===!0&&Lt.refreshFogUniforms(Oe,_t),Lt.refreshMaterialUniforms(Oe,k,Y,G,b.state.transmissionRenderTarget[M.id]),bt.needsLights&&bt.lightProbeGrid){let Re=bt.lightProbeGrid;Oe.probesSH.value=Re.texture,Oe.probesMin.value.copy(Re.boundingBox.min),Oe.probesMax.value.copy(Re.boundingBox.max),Oe.probesResolution.value.copy(Re.resolution)}rr.upload(F,su(bt),Oe,J)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(rr.upload(F,su(bt),Oe,J),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Me.setValue(F,"center",W.center),Me.setValue(F,"modelViewMatrix",W.modelViewMatrix),Me.setValue(F,"normalMatrix",W.normalMatrix),Me.setValue(F,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){let Re=k.uniformsGroups;for(let Di=0,bs=Re.length;Di<bs;Di++){let ou=Re[Di];nt.update(ou,Un),nt.bind(ou,Un)}}return Un}function Vd(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Hd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(M,U,q){let k=X.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=U,X.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let q=X.get(M);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,q=0){K=M,B=U,z=q;let k=null,W=!1,_t=!1;if(M){let xt=X.get(M);if(xt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,xt.__webglFramebuffer),et.copy(M.viewport),It.copy(M.scissor),Rt=M.scissorTest,x.viewport(et),x.scissor(It),x.setScissorTest(Rt),Z=-1;return}else if(xt.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(xt.__hasExternalTextures)J.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Zt=M.depthTexture;if(xt.__boundDepthTexture!==Zt){if(Zt!==null&&X.has(Zt)&&(M.width!==Zt.image.width||M.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let Tt=M.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(_t=!0);let Pt=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?k=Pt[U][q]:k=Pt[U],W=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?k=X.get(M).__webglMultisampledFramebuffer:Array.isArray(Pt)?k=Pt[q]:k=Pt,et.copy(M.viewport),It.copy(M.scissor),Rt=M.scissorTest}else et.copy(ct).multiplyScalar(Y).floor(),It.copy(St).multiplyScalar(Y).floor(),Rt=he;if(q!==0&&(k=D),x.bindFramebuffer(F.FRAMEBUFFER,k)&&x.drawBuffers(M,k),x.viewport(et),x.scissor(It),x.setScissorTest(Rt),W){let xt=X.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,q)}else if(_t){let xt=U;for(let Tt=0;Tt<M.textures.length;Tt++){let Pt=X.get(M.textures[Tt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Tt,Pt.__webglTexture,q,xt)}}else if(M!==null&&q!==0){let xt=X.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xt.__webglTexture,q)}Z=-1};function au(M){let U=X.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=A.textureFormatReadable(M.format),U.__typeReadable=A.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,q,k,W,_t,Et,xt=0){if(!(M&&M.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt){x.bindFramebuffer(F.FRAMEBUFFER,Tt);try{let Pt=M.textures[xt],Zt=Pt.format,te=Pt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xt);let At=au(Pt);if(At.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-k&&q>=0&&q<=M.height-W&&F.readPixels(U,q,k,W,pt.convert(Zt),pt.convert(te),_t)}finally{let Pt=K!==null?X.get(K).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(M,U,q,k,W,_t,Et,xt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt)if(U>=0&&U<=M.width-k&&q>=0&&q<=M.height-W){x.bindFramebuffer(F.FRAMEBUFFER,Tt);let Pt=M.textures[xt],Zt=Pt.format,te=Pt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xt);let At=au(Pt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.bufferData(F.PIXEL_PACK_BUFFER,_t.byteLength,F.STREAM_READ),F.readPixels(U,q,k,W,pt.convert(Zt),pt.convert(te),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let He=K!==null?X.get(K).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,He);let Pe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await _f(F,Pe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_t),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ge),F.deleteSync(Pe),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,q=0){let k=Math.pow(2,-q),W=Math.floor(M.image.width*k),_t=Math.floor(M.image.height*k),Et=U!==null?U.x:0,xt=U!==null?U.y:0;J.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Et,xt,W,_t),x.unbindTexture()},this.copyTextureToTexture=function(M,U,q=null,k=null,W=0,_t=0){let Et,xt,Tt,Pt,Zt,te,At,ge,He,Pe=M.isCompressedTexture?M.mipmaps[_t]:M.image;if(q!==null)Et=q.max.x-q.min.x,xt=q.max.y-q.min.y,Tt=q.isBox3?q.max.z-q.min.z:1,Pt=q.min.x,Zt=q.min.y,te=q.isBox3?q.min.z:0;else{let Oe=Math.pow(2,-W);Et=Math.floor(Pe.width*Oe),xt=Math.floor(Pe.height*Oe),M.isDataArrayTexture?Tt=Pe.depth:M.isData3DTexture?Tt=Math.floor(Pe.depth*Oe):Tt=1,Pt=0,Zt=0,te=0}k!==null?(At=k.x,ge=k.y,He=k.z):(At=0,ge=0,He=0);let be=pt.convert(U.format),sn=pt.convert(U.type),bt;U.isData3DTexture?(J.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),bt=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let fn=x.getParameter(F.UNPACK_ROW_LENGTH),le=x.getParameter(F.UNPACK_IMAGE_HEIGHT),Un=x.getParameter(F.UNPACK_SKIP_PIXELS),ti=x.getParameter(F.UNPACK_SKIP_ROWS),Ii=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,Pe.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Pt),x.pixelStorei(F.UNPACK_SKIP_ROWS,Zt),x.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let Ss=M.isDataArrayTexture||M.isData3DTexture,Me=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let Oe=X.get(M),Li=X.get(U),Re=X.get(Oe.__renderTarget),Di=X.get(Li.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,Re.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let bs=0;bs<Tt;bs++)Ss&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(M).__webglTexture,W,te+bs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(U).__webglTexture,_t,He+bs)),F.blitFramebuffer(Pt,Zt,Et,xt,At,ge,Et,xt,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||X.has(M)){let Oe=X.get(M),Li=X.get(U);x.bindFramebuffer(F.READ_FRAMEBUFFER,P),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,N);for(let Re=0;Re<Tt;Re++)Ss?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.__webglTexture,W,te+Re):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,W),Me?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Li.__webglTexture,_t,He+Re):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Li.__webglTexture,_t),W!==0?F.blitFramebuffer(Pt,Zt,Et,xt,At,ge,Et,xt,F.COLOR_BUFFER_BIT,F.NEAREST):Me?F.copyTexSubImage3D(bt,_t,At,ge,He+Re,Pt,Zt,Et,xt):F.copyTexSubImage2D(bt,_t,At,ge,Pt,Zt,Et,xt);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Me?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(bt,_t,At,ge,He,Et,xt,Tt,be,sn,Pe.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,_t,At,ge,He,Et,xt,Tt,be,Pe.data):F.texSubImage3D(bt,_t,At,ge,He,Et,xt,Tt,be,sn,Pe):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_t,At,ge,Et,xt,be,sn,Pe.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_t,At,ge,Pe.width,Pe.height,be,Pe.data):F.texSubImage2D(F.TEXTURE_2D,_t,At,ge,Et,xt,be,sn,Pe);x.pixelStorei(F.UNPACK_ROW_LENGTH,fn),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Un),x.pixelStorei(F.UNPACK_SKIP_ROWS,ti),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Ii),_t===0&&U.generateMipmaps&&F.generateMipmap(bt),x.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){B=0,z=0,K=null,x.reset(),yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var m_=(function(){"use strict";var n=function(p){return p.replace(/[a-z]/g,function(w){return String.fromCharCode((w.charCodeAt(0)-84)%26+97)})},t=n("nydnrqn nefrubyr nffpybja nffung nffubyr nffjvcr onqnff onyyont onyyfnpx onfgneq oqfz ornare orurnq ovngpu ovgpu oybjwbo obyybpx obaqntr obare obbo ogpu ohxxnxr ohyyfuvg ohggsnpr ohggubyr ohggcyht pnzrygbr pnztvey pyvg pbpnvar pbpxurnq pbpxfhpx pbaqbz penpxurnq phzfubg phzfyhg phag qnzavg qrrcguebng qvpxsnpr qvpxurnq qvpxjnq qvyqb qvys qvcfuvg qbhpur qehtqrny qhzonff rpfgnfl rerpgvba sntt snttbg snc snccvat sngnff spx sragnaly srgvfu sbbgwbo shpx shx shd sipx tnatonat trabpvqr tvys tbqnza tbqqnza tbbx tebcr tebcvat thazna unaqwbo urvy uragnv urebva uvtuns uvgyre ubybpnhfg ubbxre ubeal ubefrfuvg vaprfg wnpxnff wnpxbss wrexbss wvtnobb wvunq wvmm whatyrohaa xvpxnff xvxr xvyy xvyyzlfrys xvyylbhe xxx xyna ynovn yneqnff yfq znfffubbg znfgheo zrguurnq zvys zbyrfg zbatbybvq zbgures zheqre anxrq anmv arteb avtt avttn avte avccyr afsj ahqr ahqrf ahgfnpx baylsnaf betnfz betl cnrqb crqb crqbcuvy crav5 cravf cuhpx cvzc cbepuzbax cbea cebfgvghg chffl chfl dhrrs enturnq encr encvfg erpghz ergneq ergneqrq evzwbo fnaqavtt fpubbyfubbg fpebghz frysunez frzra frk frkg frkl furznyr fuvvg fuvg fuebbzf fvrturvy fxnax fyhg fznegnff fzrtzn fcnfgvp fcrez fgbarq fgbare fgevccre fhvpvqr greebevfg grfgvpy guerrfbzr gvggvr gvggvrf gvggl gbjryurnq genaal gjng hcfxveg intvan ivnten ivoengbe ihyin jnax jrgonpx juvgrcbjre juvgrcevqr juber knank kkk mvccreurnq").split(" "),e=n("nany nahf nefr nff nffrf onyyf orre ow oybbql obat obbmr ohttre ohgg ohggf puvax pag pbpx pbpxf pbbyvr pbba penc pebgpu phz qnza qvpx qvpxf qbat qehax qhzo qlxr snt sntf sneg snggl szy tgsb tlc uryy ubr ubrf ubzb vqvbg vfvf wnc xabo xlf yrfob yrmmvr yzsnb zrgu zbeba ahgf bzst cvff cvffrq cbb cbbc cevpx chovp fngna fpuybat fug fcnm fcnmm fgsh fghcvq gubg gvg gvgf gheq incr ibqxn jnfgrq jrrq jgs").split(" "),i="analog analogue analysis analyst assassin assassins auspicious babcock banal basement bass bitcoin booboo brass butter buttercup butterfly button buttons buttress canal casement cassandra cassidy cassie cheil chinkapin circumference class classic cockatiel cockatoo cocktail compass conspicuous constitution cucumber cumberland cumulative denigrat dickens dickerson dickinson document drape drapery drapes drappe embassy encyclopedia essex expedition festoon festooned festoonery fire frappe fucoidan georgy glass gobbledegook gobbledygook grape grapefruit grapes grass hancock harass hassle heroine heroines hispanic hitchcock homer homes homestead homework homogeneous homogenized homosapien ignazio killdeer killian killie killington kilt kilter knigge lassie manuscript mass massive micheil middlesex mishit montenegro mushroom mushrooms orthopedic parapet passion peacock pedal pedals pedantic pedestal pedestrian pediatric pedometer penistone petite pimple pimples porgy pussycat pussyfoot pussytoes pussywillow rapeseed rapped rappel rappen rapper rappers raptor rebutt retardant riprap scrape scraper scum scunthorpe scuttle sextant sextet sexton sextuple sheil shiitake shitake shuttle skate skill skilled skiller skillet skillful skills snazz snigger specks speedo spice spicer spick spicy stoneware suspicious sussex swank swanky tassel therapist therapists therapy thorn thorny thoth titan titanic titanium tithe title tittle titus torpedo trapeze trappe unisex washroom washrooms weedwhack whittl woodcock wrappe".split(" "),s="69 420 666 1488 8008 80085 58008 5318008 6969".split(" "),r=n("fcvp fcvpf").split(" "),a={\u0430:"a",\u0435:"e",\u043E:"o",\u0440:"p",\u0441:"c",\u0443:"y",\u0445:"x",\u0456:"i",\u0458:"j",\u0455:"s",\u043A:"k",\u043C:"m",\u043D:"h",\u0442:"t",\u0432:"b","\u0501":"d",\u0261:"g",\u0578:"n",\u0131:"i",\u00DF:"ss",\u00E6:"ae",\u00F8:"o",\u0111:"d",\u0142:"l",\u03B1:"a",\u03BF:"o",\u03B5:"e",\u03B9:"i",\u03BA:"k",\u03C1:"p",\u03C4:"t",\u03C5:"u",\u03C7:"x",\u03B7:"h",\u03F2:"c",\u03C2:"c",\u03BD:"v",\u03B2:"b",\u03BC:"u","\u051D":"w",\u057D:"u",\u04BB:"h",\u0269:"i",\u0251:"a"},o={0:"o","!":"i",3:"e",4:"a","@":"a",5:"s",$:"s",7:"t","+":"t",8:"b",9:"g",6:"g","(":"c","<":"c","\u20AC":"e","\xA2":"c","\xA3":"l","\xA5":"y","#":"h","%":"x"},l=function(p){return p.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},c=function(p){return p.replace(/(.)\1*/g,function(w){return l(w[0])+(w.length>1?"{"+w.length+",}":"+")})},h=function(p){return p.replace(/[^a-z]/g,"")},f=function(p,w){return p.replace(/[01!3-9@$+(<€¢£¥#%|]/g,function(E){return E==="1"||E==="|"?w:o[E]||E})},u;function d(p){p=p||{};var w=t.concat((p.block||[]).map(function(b){return h(f(String(b).toLowerCase(),"i"))})).filter(Boolean),E=i.concat((p.allow||[]).map(function(b){return String(b).toLowerCase()})).filter(Boolean).sort(function(b,C){return C.length-b.length}),v=function(b){return h(f(b,"i"))};w=w.map(v);var S=e.map(v);u={strong:new RegExp(w.sort(function(b,C){return C.length-b.length}).map(c).join("|"),"y"),long:new RegExp(w.filter(function(b){return b.length>=5}).map(c).join("|"),"y"),word:new RegExp("^(?:"+S.map(c).join("|")+")(?:s|es|z|y|ies|er|ers|ed|ing)?$"),allow:E}}function g(p,w){var E=[];u.allow.forEach(function(C){for(var y=w.indexOf(C);y>=0;)E.push([y,y+C.length]),y=w.indexOf(C,y+1)});for(var v=0;v<w.length;v++){p.lastIndex=v;var S=p.exec(w);if(S){var b=v+S[0].length;if(!E.some(function(C){return C[0]<=v&&b<=C[1]}))return!0}}return!1}function _(p){return p=String(p||"").normalize("NFKD").replace(/[̀-ͯ​-‏⁠﻿]/g,"").toLowerCase(),p.replace(/[^\u0000-\u007f]/g,function(w){return a[w]||w})}function m(p){u||d();var w=_(p);if(!h(w)&&!/\d/.test(w))return{ok:!0};if(/https?:|www\.|\.(com|net|org|io|gg|tv|me|co|us|ly)\b|@[a-z0-9_]+\.[a-z]/.test(w)||w.replace(/\D/g,"").length>=7)return{ok:!1,reason:"contact"};var E=w.replace(/\D/g,"");if(s.indexOf(E)>=0)return{ok:!1,reason:"language"};for(var v=w.split(/[\s_\-.,~=:;/\\]+/).filter(Boolean),S=["i","l"],b=0;b<2;b++){var C=v.map(function(D){return h(f(D,S[b]))}).filter(Boolean),y=[],T="";C.forEach(function(D){D.length===1?T+=D:(T.length>1&&y.push(T),T="")}),T.length>1&&y.push(T);for(var I=C.concat(y),R=0;R<I.length;R++){var L=I[R];if(u.word.test(L)||r.indexOf(L)>=0)return{ok:!1,reason:"language"};if(g(u.strong,L))return{ok:!1,reason:"language"}}if(g(u.long,C.join("")))return{ok:!1,reason:"language"}}return{ok:!0}}return{check:m,configure:d,isClean:function(p){return m(p).ok}}})(),xh=m_;var ae=H,Kn=Math.PI*2,ne=(n,t,e)=>n<t?t:n>e?e:n,We=n=>{for(;n>Math.PI;)n-=Kn;for(;n<-Math.PI;)n+=Kn;return n},Ci=/[?&]test\b/.test(location.search),Eh=7;var cr=3,Th=30,oa=[{id:"easy",name:"Easy",mult:1,turn:1,grip:99,cam:0},{id:"fast",name:"Fast",mult:1.22,turn:1.1,grip:5.5,cam:.8},{id:"turbo",name:"Turbo",mult:1.45,turn:1.2,grip:3.6,cam:1.6}],Ue=oa[0],pa=n=>n.r.top*Ue.mult,hr=[{id:"bruno",name:"Bruno",kind:"Black bear",blurb:"Heavy. Shrugs off bumps.",top:31,accel:12.5,turn:1.85,weight:1.5,boost:1.1,kart:"crate",color:"#6b4630"},{id:"pip",name:"Pip",kind:"Red fox",blurb:"Light and quick off the line.",top:29.5,accel:17,turn:2.05,weight:.8,boost:1.1,kart:"wagon",color:"#e0742f"},{id:"rascal",name:"Rascal",kind:"Raccoon",blurb:"Lucky with acorns. Longer boosts.",top:30,accel:14.5,turn:2,weight:1,boost:1.5,kart:"log",color:"#9a9a9a"},{id:"opal",name:"Opal",kind:"Possum",blurb:"Tightest turns. Lower top speed.",top:28.5,accel:15,turn:2.45,weight:.9,boost:1.1,kart:"cart",color:"#f1ede6"}],hi=.92,ui=1.08,Rl=[{id:"ridge",name:"Blocky Ridge",blurb:"Mountain switchbacks, a hollow log and a creek bridge",theme:"ridge",ctrl:[[0,0,150],[110,1,150],[185,3,115],[200,6,45],[182,10,-15],[205,14,-80],[172,18,-140],[110,21,-152],[78,23,-100],[30,25,-62],[-12,27,-100],[-42,28,-150],[-110,28,-162],[-172,26,-122],[-192,20,-52],[-186,11,20],[-172,5,88],[-152,1,138],[-110,0,152]],water:{line:[[-330,-14],[-252,-4],[-186,20],[-135,52],[-96,62]],w:8,y:2,pond:8},arches:[{at:[-110,-162],kind:"log"}],jumps:[],pads:[.17,.63,.88],crates:[.3,.76]},{id:"canyon",name:"Canyon Crossover",blurb:"Figure-8 where you jump over your own road",theme:"canyon",ctrl:[[-170,0,152],[-110,0,140],[-55,0,60],[0,0,0],[55,0,-55],[115,2,-115],[195,4,-132],[257,5,-70],[252,7,20],[200,10,85],[120,12,92],[55,13,55],[0,12,0],[-55,9,-55],[-120,8,-112],[-195,8,-128],[-257,8,-78],[-270,7,-12],[-268,6,32],[-264,3,92],[-235,1,140]].map(([n,t,e])=>[n*hi,t,e*hi]),water:{line:[[-330*hi,40*hi],[-266*hi,44*hi],[-205*hi,40*hi]],w:9,y:-8,pond:9},arches:[{at:[254*hi,-40*hi],kind:"rock"}],jumps:[{at:[0,0],gap:30,high:!0}],pads:["jump",.08,.6],crates:[.27,.66]},{id:"hollow",name:"Firefly Hollow",blurb:"Moonlit forest, a long lake bridge and a giant stump",theme:"night",ctrl:[[0,0,150],[95,0,150],[178,2,112],[212,4,45],[172,6,-18],[200,8,-88],[160,8,-142],[75,6,-168],[-10,4,-142],[-92,2,-172],[-172,1,-136],[-205,0,-60],[-148,0,-4],[-88,0,30],[-72,0,98],[-38,0,142]].map(([n,t,e])=>[n*ui,t,e*ui]),water:{line:[[-205*ui,45*ui],[-150*ui,-8*ui],[-95*ui,-62*ui]],w:16,y:-2.5,pond:14},arches:[{at:[-92*ui,-172*ui],kind:"stump"}],jumps:[],pads:[.14,.52,.86],crates:[.3,.7]},{id:"frost",name:"Frosty Peaks",blurb:"Snowy pass, a hidden ice cave and a candy-cane loop-the-loop",theme:"snow",laps:2,rw:10.5,big:!0,ctrl:[[0,18,300],[90,17,300],[180,14,288],[262,10,245],[300,7,175],[350,5,110],[342,3,40],[372,2,-40],[410,3,-120],[422,5,-200],[398,7,-262],[342,9,-275],[305,11,-228],[300,13,-160],[255,16,-112],[190,19,-140],[140,22,-200],[80,25,-200],[30,29,-188],[-20,31,-188],[-60,32,-188],[-115,32,-224],[-175,32,-260],[-235,32,-228],[-285,32,-193],[-345,31,-188],[-400,29,-150],[-410,25,-70],[-360,21,0],[-400,17,80],[-372,13,160],[-310,11,222],[-240,11,272],[-160,13,302],[-80,16,305]],water:{line:[[-480,330],[-320,215],[-200,150],[-50,110],[100,70],[270,50]],w:8,y:0,pond:40,ice:!0},narrow:[{at:[-318,215],half:22}],arches:[{at:[-318,215],kind:"covered"}],cave:{from:[420,-190],to:[304,-200],side:1,rw:6,ai:.15,mid:[[397,5.5,-206],[382,6,-230],[358,7,-240],[334,8,-228],[322,10,-214]]},cork:{from:[-40,-188],side:1,lat:6.5,out:22,bend:76,run:40,R:10,D:26,shift:14,post:40,back:80,rw:6,apron:26,ai:.5,vmin:1.3,surge:1.2,surgeT:2.5},jumps:[],pads:[.07,.3,.71,.92],crates:[.15,.4,.62,.84]}],sd={ridge:{sky:9423849,fog:[10474220,160,520],hemi:[15267583,7044933,2.1],sun:[16774368,2.3,[.6,1,.35]],terrain:[[7648080,9071173],[10131600,8157811],[16054258,8157811],[11901546,9071173]],road:[12752224,12159829],edge:[7319115,6792005],plank:[10119997,8608047],skirt:9071173,water:4163256,fence:[8016432,9396792],ring:[6986886,8231564,16054258],clouds:16777215,sign:["#8a5d31","#6b4a2b","#f1ead8"]},canyon:{sky:16039823,fog:[15907210,150,560],hemi:[16773340,10115637,2],sun:[16765859,2.6,[-.6,.55,.4]],terrain:[[14393450,12085562],[13072965,10242594],[15387034,11033132],[10123861,8018490]],road:[11043432,10451552],edge:[14857342,14198898],plank:[9067061,7621163],skirt:10242594,water:4169912,fence:[7031339,9396792],ring:[11887919,13204037,14722154],mesas:!0,clouds:16770770,sign:["#9c4a22","#7a3a1a","#ffe6c8"]},night:{sky:660272,fog:[792632,70,340],hemi:[9085152,1845796,1.15],sun:[11058431,.9,[-.4,1,-.5]],terrain:[[3103290,3812386],[4016722,2961976],[9412792,2961976],[2767418,2763298]],road:[10126438,9402973],edge:[3497792,3168314],plank:[8018490,6966320],skirt:3812386,water:2050688,fence:[4863526,5915184],ring:[1451066,1846342,2373210],night:!0,sign:["#3a2a1e","#2a1e15","#ffd98a"]},snow:{sky:12179438,fog:[14084083,190,620],hemi:[15923455,9412530,2],sun:[16774886,2.1,[.5,1,.3]],terrain:[[15988731,12964318],[15134196,9278366],[16777215,10133933],[12904180,10274010]],road:[10194824,9602687],edge:[15660024,14936818],plank:[9067834,7753775],skirt:11845836,water:13233400,fence:[7031339,9396792],ring:[8226708,10134446,16777215],clouds:16777215,sign:["#2a5a8a","#1d3f63","#ffffff"],snow:!0}},Ah=document.getElementById("game"),Vn=new gl({canvas:Ah,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:Ci});Vn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));var Ve=new Xs;Ve.background=new Ut(9423849);Ve.fog=new Ws(10474220,160,520);var $t=new $e(68,16/9,.5,1200),vl=new $s(15267583,7044933,2.1),Ml=new js(16774368,2.3);Ve.add(vl,Ml);function kh(){let n=window.innerWidth,t=window.innerHeight;Vn.setSize(n,t,!1),Ah.style.width=n+"px",Ah.style.height=t+"px",$t.aspect=n/t,$t.fov=n/t<1.2?80:68,$t.updateProjectionMatrix(),Cy()}var Xe=new Pn(1,1,1),Rh={},oe=n=>Rh[n]||(Rh[n]=new cn({color:n})),Ch={},ys=n=>Ch[n]||(Ch[n]=new Cn({color:n}));function ot(n,t,e,i,s,r,a,o,l){let c=new Ee(Xe,l||oe(s));return c.scale.set(t,e,i),c.position.set(r,a,o),n.add(c),c}function la(n,t,e=n){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Zs(i);return s.magFilter=Be,s.minFilter=Be,s.colorSpace=dn,s}function ds(n,t,e,i,s,r=!0){let a=new Pn(n,t,e);r&&a.translate(0,t/2,0);let o=new Ut(i),l=new Ut(s),c=[];for(let h=0;h<6;h++)for(let f=0;f<4;f++){let u=h===2?o:l;c.push(u.r,u.g,u.b)}return a.setAttribute("color",new ke(c,3)),a}var lr=()=>new cn({vertexColors:!0}),fe,Bt,Mt,it,ze,jt,Sl,Ji,Ph,gn,ji,Ol,ca,Wh,Qe,bn,je,en=[],Vt=null,wi=null,Ih=null,Qt=null,ha=()=>null,ur=[],Xh=[],Lh=[],Ei={mesh:null,base:[]},di={pts:null,base:null},fr=(n,t)=>{let e=0,i=1/0;for(let s=0;s<Mt;s++){let r=(it[s].x-n)**2+(it[s].z-t)**2;r<i&&(i=r,e=s)}return e},de=n=>(n%Mt+Mt)%Mt,jn=(n,t)=>{let e=n-t;return e>Mt/2&&(e-=Mt),e<-Mt/2&&(e+=Mt),e},Ai=n=>n>0?1:2,ua=(n,t)=>n.closed?(t%n.n+n.n)%n.n:ne(t,0,n.n-1),g_=(n,t,e)=>{if(!n.closed)return t-e;let i=t-e;return i>n.n/2&&(i-=n.n),i<-n.n/2&&(i+=n.n),i};function Hn(n,t,e,i,s=25,r=45){let a=i,o=1/0;for(let l=-s;l<=r;l++){let c=i+l;if(n.closed)c=(c%n.n+n.n)%n.n;else if(c<0||c>=n.n)continue;let h=(t-n.P[c].x)**2+(e-n.P[c].z)**2;h<o&&(o=h,a=c)}return a}var Pi=(n,t,e,i)=>(t-n.P[i].x)*n.L[i].x+(e-n.P[i].z)*n.L[i].z,fa=(n,t,e,i)=>(t-n.P[i].x)*n.T[i].x+(e-n.P[i].z)*n.T[i].z;function Qi(n,t,e,i){let s=fa(n,t,e,i);if(!n.closed&&(i===0&&s<0||i===n.n-1&&s>=0))return n.P[i].y+n.HS[i]*s;let r=s>=0?i:ua(n,i-1),a=s>=0?s:s+n.seg;return n.P[r].y+n.HS[r]*a}var pr=n=>Math.atan2(n.x,n.z),na=(n,t,e,i=25,s=45)=>Hn(Qe,n,t,e,i,s),ia=(n,t,e)=>Pi(Qe,n,t,e),x_=(n,t,e)=>Qi(Qe,n,t,e);function rd(n,t){let e=fe.water;if(!e)return 1/0;let i=1/0;for(let a=0;a<e.line.length-1;a++){let[o,l]=e.line[a],[c,h]=e.line[a+1],f=c-o,u=h-l,d=ne(((n-o)*f+(t-l)*u)/(f*f+u*u),0,1);i=Math.min(i,Math.hypot(n-o-f*d,t-l-u*d))}let[s,r]=e.line[e.line.length-1];return Math.min(i,Math.hypot(n-s,t-r)-(e.pond||0))}var Dh=n=>Ol.some(t=>Math.abs(jn(n,t))<=14);function Nh(n,t){let e=new os(n,!1,"centripetal"),i=Math.max(4,Math.round(e.getLength()/1.5)+1),s=e.getSpacedPoints(i-1),r=[],a=[],o=[];for(let h=0;h<i;h++){let f=new ae().subVectors(s[Math.min(i-1,h+1)],s[Math.max(0,h-1)]).normalize();r.push(f),a.push(new ae(f.z,0,-f.x).normalize())}for(let h=0;h<i-1;h++)o.push((s[h+1].y-s[h].y)/Math.max(.01,Math.hypot(s[h+1].x-s[h].x,s[h+1].z-s[h].z)));o.push(o[i-2]);let l=[0];for(let h=1;h<i;h++)l.push(l[h-1]+s[h].distanceTo(s[h-1]));let c=new Float32Array(i).fill(t);return{P:s,T:r,L:a,HS:o,n:i,closed:!1,seg:l[i-1]/(i-1),cum:l,len:l[i-1],rw:c,ww:c.map(h=>h+2.4),fence:new Uint8Array(i).fill(3),arch:new Uint8Array(i),ovl:new Uint8Array(i),map:new Float32Array(i),mi:new Int32Array(i),main:!1}}var ps=(n,t,e=0)=>new ae(it[n].x+jt[n].x*t,it[n].y+e,it[n].z+jt[n].z*t);function __(n){let t=fr(n.from[0],n.from[1]),e=fr(n.to[0],n.to[1]),i=n.side,s=[ps(t,i*(bn[t]+1)),ps(de(t+5),i*(bn[t]+5)),...n.mid.map(o=>new ae(o[0],o[1],o[2])),ps(de(e-5),i*(bn[e]+5)),ps(e,i*(bn[e]+1))],r=Nh(s,n.rw);Object.assign(r,{kind:"cave",s0:t,e0:e,side:i,ai:n.ai,mouthStart:!0,mouthEnd:!0});let a=jn(e,t);for(let o=0;o<r.n;o++)r.map[o]=t+a*(r.cum[o]/r.len);for(let o=0;o<r.n;o++)r.arch[o]=r.cum[o]>22&&r.cum[o]<r.len-22?1:0;return r}var ad=n=>n*n*(3-2*n);function y_(n){let t=fr(n.from[0],n.from[1]),e=n.side,i=new ae(ze[t].x,0,ze[t].z).normalize(),s=new ae(jt[t].x,0,jt[t].z).multiplyScalar(e),r=it[t].y,a=(b,C)=>new ae(it[t].x+i.x*b+s.x*C,r,it[t].z+i.z*b+s.z*C),o=n.bend+n.run,l=a(o,n.out),c=n.out+n.shift,h=[a(0,n.lat),a(9,n.lat+1.2),a(n.bend*.55,n.out*.62),a(n.bend,n.out),a(n.bend+n.run*.5,n.out),l],f=o+n.D,u=f+n.post+n.back,d=fr(it[t].x+i.x*u,it[t].z+i.z*u),g=[a(o-14,c),a(f,c),a(f+n.post,c),a(f+n.post+n.back*.45,c*.62),a(u-9,n.lat+1.2),ps(d,e*n.lat)],_=Nh(h,n.rw),m=Nh(g,n.rw);Vt=v_(l,i,s,n.R,n.D,n.shift,n.rw);let p=Vt.pos[Vt.M],w=Hn(m,p.x,p.z,0,0,m.n),E=m.cum[w];for(let b=0;b<m.n;b++){let C=m.cum[b]-(E+14),y=C<=0?1:C>=30?0:1-ad(C/30);m.rw[b]=n.rw+(n.apron-n.rw)*y,m.ww[b]=m.rw[b]+2.4}Object.assign(Vt,{vmin:n.vmin,surge:n.surge,surgeT:n.surgeT,lin:_,lout:m,jE:w,y:r}),Object.assign(_,{kind:"lane",s0:t,side:e,ai:n.ai,mouthStart:!0,next:Vt,dy:.09}),Object.assign(m,{kind:"lane",e0:d,side:e,mouthEnd:!0,prevRide:Vt,dy:.05});let v=jn(d,t),S=_.len+Vt.total+(m.len-E);for(let b=0;b<_.n;b++)_.map[b]=t+v*(_.cum[b]/S);Vt.m0=t+v*(_.len/S),Vt.m1=t+v*((_.len+Vt.total)/S);for(let b=0;b<m.n;b++)m.map[b]=Vt.m1+v*(Math.max(0,m.cum[b]-E)/S);return _.pads=[.18,.5,.82].map(b=>{let C=a(n.bend+n.run*b,n.out);return Hn(_,C.x,C.z,0,0,_.n)}),[_,m]}function v_(n,t,e,i,s,r,a){let o=new ae(0,1,0),l=new ae(t.z,0,-t.x),c=240,h=[];for(let _=0;_<=c;_++){let m=_/c,p=Kn*m-.6*Math.sin(Kn*m),w=ad(m);h.push(new ae().copy(n).addScaledVector(t,i*Math.sin(p)+s*w).addScaledVector(o,i*(1-Math.cos(p))).addScaledVector(e,r*w))}let f=[],u=[],d=[],g=[0];for(let _=0;_<=c;_++){let m=_===0||_===c?t.clone():new ae().subVectors(h[_+1],h[_-1]).normalize(),p=l.clone().addScaledVector(m,-l.dot(m)).normalize();f.push(m),u.push(p),d.push(new ae().crossVectors(m,p).normalize()),_&&g.push(g[_-1]+h[_].distanceTo(h[_-1]))}return{H0:n,a:t,S:e,R:i,D:s,shift:r,M:c,pos:h,nrm:d,tan:f,lat:u,cum:g,total:g[c],rw:a}}var M_={pos:new ae,nrm:new ae,tan:new ae,lat:new ae};function gs(n,t=M_){let e=Vt;if(n<=0||n>=e.total){let a=n<=0?0:e.M,o=n<=0?n:n-e.total;return t.pos.copy(e.pos[a]).addScaledVector(e.tan[a],o),t.nrm.copy(e.nrm[a]),t.tan.copy(e.tan[a]),t.lat.copy(e.lat[a]),t}let i=0,s=e.M;for(;s-i>1;){let a=i+s>>1;e.cum[a]<=n?i=a:s=a}let r=(n-e.cum[i])/(e.cum[s]-e.cum[i]);return t.pos.lerpVectors(e.pos[i],e.pos[s],r),t.nrm.lerpVectors(e.nrm[i],e.nrm[s],r).normalize(),t.tan.lerpVectors(e.tan[i],e.tan[s],r).normalize(),t.lat.lerpVectors(e.lat[i],e.lat[s],r).normalize(),t}function S_(n){for(let e=0;e<n.n;e++){let i=na(n.P[e].x,n.P[e].z,de(Math.round(n.map[e])),40,40);if(n.mi[e]=i,!(n.mouthStart&&n.cum[e]<n.len*.4||n.mouthEnd&&n.cum[e]>n.len*.6))continue;let r=ia(n.P[e].x,n.P[e].z,i);Math.abs(r)-n.rw[e]<bn[i]+.5&&(n.ovl[e]=1);for(let a of[-1,1]){let o=n.P[e].x+n.L[e].x*a*n.ww[e],l=n.P[e].z+n.L[e].z*a*n.ww[e],c=na(o,l,i,20,20);Math.abs(ia(o,l,c))<je[c]+.6&&(n.fence[e]&=~Ai(a))}}let t=[];n.mouthStart&&t.push(de(Math.round(n.map[0]))),n.mouthEnd&&t.push(de(Math.round(n.map[n.n-1])));for(let e of t)for(let i=-45;i<=45;i++){let s=de(e+i);for(let r of[-1,1]){let a=it[s].x+jt[s].x*r*je[s],o=it[s].z+jt[s].z*r*je[s],l=Hn(n,a,o,0,0,n.n),c=fa(n,a,o,l);l===0&&c<-1||l===n.n-1&&c>1||Math.abs(Pi(n,a,o,l))<n.rw[l]+1&&(Qe.open[s]|=Ai(r),Qe.fence[s]&=~Ai(r))}}}function b_(n){fe=n,Bt=sd[n.theme],cr=n.laps||3;let t=new os(n.ctrl.map(r=>new ae(r[0],r[1],r[2])),!0,"centripetal");Mt=Math.round(t.getLength()/1.5),it=t.getSpacedPoints(Mt).slice(0,Mt),Ji=Math.hypot(it[1].x-it[0].x,it[1].z-it[0].z),ze=[],jt=[],Sl=[];for(let r=0;r<Mt;r++){let a=new ae().subVectors(it[(r+1)%Mt],it[(r-1+Mt)%Mt]).normalize();ze.push(a),jt.push(new ae(a.z,0,-a.x).normalize())}gn=new Array(Mt).fill(!1),ji=n.jumps.map(r=>{let a=0,o=1/0;for(let f=0;f<Mt;f++){if(r.high&&it[f].y<5)continue;let u=(it[f].x-r.at[0])**2+(it[f].z-r.at[1])**2;u<o&&(o=u,a=f)}let l=Math.ceil((r.gap||n.water.w*2+3)/2/Ji),c=de(a-l),h=de(a+l);for(let f=1;f<l*2;f++)gn[de(c+f)]=!0;for(let f=0;f<10;f++)it[de(c-f)].y+=2.2*(1-f/10);return{lip:c,land:h}});for(let r=0;r<Mt;r++){let a=it[r],o=it[(r+1)%Mt];Sl.push((o.y-a.y)/Math.max(.01,Math.hypot(o.x-a.x,o.z-a.z)))}let e=n.rw||Eh;bn=new Float32Array(Mt).fill(e);for(let r of n.narrow||[]){let a=fr(r.at[0],r.at[1]),o=26;for(let l=-r.half-o;l<=r.half+o;l++){let c=Math.abs(l)<=r.half?1:1-(Math.abs(l)-r.half)/o,h=c*c*(3-2*c),f=de(a+l);bn[f]=Math.min(bn[f],e+(Eh-e)*h)}}je=bn.map(r=>r+2.4),Ph=new Array(Mt);for(let r=0;r<Mt;r++)Ph[r]=rd(it[r].x,it[r].z)<(n.water?n.water.w+3:0);Ol=n.arches.map(r=>fr(r.at[0],r.at[1]));let i=new Uint8Array(Mt);for(let r=0;r<Mt;r++)i[r]=Dh(r)?1:0;Qe={P:it,T:ze,L:jt,HS:Sl,n:Mt,closed:!0,seg:Ji,rw:bn,ww:je,fence:new Uint8Array(Mt).fill(3),open:new Uint8Array(Mt),arch:i,main:!0},en=[],Vt=null,n.cave&&en.push(__(n.cave)),n.cork&&en.push(...y_(n.cork));for(let r of en)S_(r);ca=n.pads.map(r=>({rd:Qe,i:r==="jump"?de(ji[0].lip-Math.round(34/Ji)):Math.round(Mt*r)}));for(let r of en)for(let a of r.pads||[])ca.push({rd:r,i:a,lane:!0});Wh=n.crates.map(r=>Math.round(Mt*r)),wi={x:[],y:[],z:[],f:[]},Ih=null;let s=(r,a,o,l)=>{wi.x.push(r),wi.y.push(a),wi.z.push(o),wi.f.push(l)};for(let r=0;r<Mt;r++)s(it[r].x,it[r].y,it[r].z,je[r]+4.6);for(let r of en){if(r.kind==="cave"){let a=r.cum.map(o=>ne(Math.min(o-22,r.len-22-o)/14,0,1));Ih={b:r,x:r.P.map(o=>o.x),z:r.P.map(o=>o.z),y:r.P.map(o=>o.y),f:a};continue}for(let a=0;a<r.n;a++)s(r.P[a].x,r.P[a].y,r.P[a].z,r.ww[a]+4.6)}if(Vt)for(let r=0;r<=Vt.M;r+=6)s(Vt.pos[r].x,Vt.y,Vt.pos[r].z,Vt.rw+12)}function jf(n,t,e={}){let i=[],s=[],r=new Ut(Bt.skirt),a=e.dy||.02,o=(u,d,g=0)=>{let _=n.P[u],m=n.L[u];return[_.x+m.x*d,_.y+a+g,_.z+m.z*d]},l=(u,d,g,_,m)=>{i.push(...u,...d,...g,...u,...g,..._);for(let p=0;p<6;p++)s.push(m.r,m.g,m.b)},c=n.closed?n.n:n.n-1;for(let u=0;u<c;u++){let d=n.closed?(u+1)%n.n:u+1;if(e.skip&&e.skip(u,d))continue;let g=[-n.ww[u]-.8,-n.rw[u],n.rw[u],n.ww[u]+.8],_=[-n.ww[d]-.8,-n.rw[d],n.rw[d],n.ww[d]+.8],[m,p]=t(u);for(let w=0;w<3;w++)l(o(u,g[w]),o(d,_[w]),o(d,_[w+1]),o(u,g[w+1]),w===1?m:p);e.noSkirt||(l(o(u,g[0],-5),o(d,_[0],-5),o(d,_[0]),o(u,g[0]),r),l(o(u,g[3]),o(d,_[3]),o(d,_[3],-5),o(u,g[3],-5),r)),e.cap&&e.cap(u,d,l,o,g,_,r)}let h=new ln;h.setAttribute("position",new ke(i,3)),h.setAttribute("color",new ke(s,3)),h.computeVertexNormals();let f=new Ee(h,new cn({vertexColors:!0,side:Dn}));return Qt.add(f),f}function w_(){let n=v=>new Ut(v),t=n(Bt.road[0]),e=n(Bt.road[1]),i=n(Bt.edge[0]),s=n(Bt.edge[1]),r=n(Bt.plank[0]),a=n(Bt.plank[1]),o=n(15249482),l=n(3811870);jf(Qe,v=>{let S=Math.floor(v/3)%2,b=Ph[v];return[ji.some(y=>{let T=jn(y.lip,v);return T>=0&&T<10})?v%2?o:l:b?v%2?r:a:S?t:e,b?a:S?i:s]},{skip:(v,S)=>gn[v]||gn[S],cap:(v,S,b,C,y,T,I)=>{if(gn[(S+1)%Mt]||gn[(v-1+Mt)%Mt]){let R=gn[(S+1)%Mt]?S:v,L=R===S?T:y;b(C(R,L[0],-5),C(R,L[0]),C(R,L[3]),C(R,L[3],-5),I)}}});for(let v of en){let S=v.kind==="cave",b=n(11131116),C=n(10211302),y=n(14279144),T=n(13621473);jf(v,I=>{let R=Math.floor(I/3)%2;return S?v.arch[I]?[R?b:C,R?C:b]:[R?y:T,R?i:s]:[R?t:e,R?i:s]},{dy:v.dy||.07})}let c=la(16,v=>{for(let S=0;S<2;S++)for(let b=0;b<16;b++)v.fillStyle=(b+S)%2?"#1d2a1f":"#ffffff",v.fillRect(b,S*8,1,8)}),h=new Ee(new ai(bn[0]*2,2.4),new cn({map:c}));h.rotation.x=-Math.PI/2;let f=new Le;f.add(h),f.position.set(it[0].x,it[0].y+.05,it[0].z),f.rotation.y=Math.atan2(ze[0].x,ze[0].z),Qt.add(f);let u=new Le,d=je[0];for(let v of[-1,1])ot(u,1.2,10,1.2,Bt.fence[0],v*(d+1.6),5,0);let[g,_,m]=Bt.sign,p=la(512,(v,S,b)=>{v.fillStyle=g,v.fillRect(0,0,S,b),v.fillStyle=_,v.fillRect(0,0,S,6),v.fillRect(0,b-6,S,6),v.fillStyle=m,v.textAlign="center",v.textBaseline="middle";let C=54;for(v.font=`bold ${C}px monospace`;v.measureText(fe.name.toUpperCase()).width>S-30;)C-=2,v.font=`bold ${C}px monospace`;v.fillText(fe.name.toUpperCase(),S/2,b/2+2)},72),w=new cn({map:p,emissive:Bt.night?3351057:0}),E=new Ee(new Pn((d+2.2)*2,3.2,.8),[oe(Bt.fence[0]),oe(Bt.fence[0]),oe(Bt.fence[1]),oe(Bt.fence[1]),w,w]);if(E.position.y=10.4,u.add(E),Bt.night)for(let v of[-1,1])ot(u,.8,.8,.8,0,v*(d+1.6),10.6,.9,ys(16762977));Bt.snow&&ot(u,(d+2.2)*2+.4,.7,1.4,16777215,0,12.3,0),u.position.set(it[0].x,it[0].y,it[0].z),u.rotation.y=Math.atan2(ze[0].x,ze[0].z),Qt.add(u)}function E_(){let n=[],t=[],i=(l,c,h,f)=>{for(let u of[-1,1]){let d=Ai(u);if(!(l.fence[c]&d))continue;let g=u*(l.ww[c]+.35),_=u*(l.ww[h]+.35),m=new ae(l.P[c].x+l.L[c].x*g,l.P[c].y,l.P[c].z+l.L[c].z*g),p=new ae(l.P[h].x+l.L[h].x*_,l.P[h].y,l.P[h].z+l.L[h].z*_);n.push(m),!f&&l.fence[h]&d&&t.push([m,p])}};for(let l=0;l<Mt;l+=5){if(Dh(l))continue;let c=(l+5)%Mt,h=!1;for(let u=0;u<=5;u++)gn[(l+u)%Mt]&&(h=!0);if(gn[l])continue;let f=!0;for(let u=0;u<=5;u++)Qe.fence[(l+u)%Mt]!==Qe.fence[l]&&(f=!1);i(Qe,l,c,h||!f)}for(let l of en)if(l.kind!=="cave")for(let c=0;c<l.n-1;c+=5)i(l,c,Math.min(l.n-1,c+5),!1);let s=new Te(Xe,oe(Bt.fence[0]),Math.max(1,n.length)),r=new Te(Xe,oe(Bt.fence[1]),Math.max(1,t.length*2));s.count=n.length,r.count=t.length*2;let a=new we;n.forEach((l,c)=>{a.position.set(l.x,l.y+.8,l.z),a.rotation.set(0,0,0),a.scale.set(.5,1.9,.5),a.updateMatrix(),s.setMatrixAt(c,a.matrix)});let o=0;for(let[l,c]of t)for(let h of[.65,1.35])a.position.set((l.x+c.x)/2,(l.y+c.y)/2+h,(l.z+c.z)/2),a.lookAt(c.x,c.y+h,c.z),a.scale.set(.25,.3,l.distanceTo(c)),a.updateMatrix(),r.setMatrixAt(o++,a.matrix);if(Qt.add(s,r),Bt.snow&&n.length){let l=new Te(Xe,oe(16777215),n.length);n.forEach((c,h)=>{a.position.set(c.x,c.y+1.85,c.z),a.rotation.set(0,0,0),a.scale.set(.62,.22,.62),a.updateMatrix(),l.setMatrixAt(h,a.matrix)}),Qt.add(l)}if(Bt.night){let l=[];for(let f=0;f<Mt;f+=16)if(!(gn[f]||Dh(f)))for(let u of[-1,1])l.push([f,u]);let c=new Te(Xe,oe(2760213),l.length),h=new Te(Xe,ys(16762977),l.length);l.forEach(([f,u],d)=>{let g=u*(je[f]+1.2),_=it[f].x+jt[f].x*g,m=it[f].z+jt[f].z*g;a.rotation.set(0,Math.atan2(ze[f].x,ze[f].z),0),a.position.set(_,it[f].y+2.2,m),a.scale.set(.4,4.4,.4),a.updateMatrix(),c.setMatrixAt(d,a.matrix),a.position.set(_,it[f].y+4.7,m),a.scale.set(1,1,1),a.updateMatrix(),h.setMatrixAt(d,a.matrix)}),Qt.add(c,h)}}function T_(){let t=1/0,e=-1/0,i=1/0,s=-1/0;for(let st of it)t=Math.min(t,st.x),e=Math.max(e,st.x),i=Math.min(i,st.z),s=Math.max(s,st.z);let r=Math.floor((t-80)/4)*4,a=Math.floor((i-80)/4)*4,o=Math.ceil((e+80-r)/4),l=Math.ceil((s+80-a)/4),c=new Float32Array(o*l),h=new Uint8Array(o*l),f=new Float32Array(o*l),u=(st,lt)=>Math.sin(st*.071+lt*.043)*Math.cos(lt*.057-st*.031)+.5*Math.sin(st*.19-lt*.13),d=fe.water,g=fe.theme==="night"?.22:fe.theme==="canyon"?.42:.34,_=wi.x,m=wi.z,p=wi.y,w=wi.f,E=_.length,v=fe.big?4:2,S=Ih,b=S?S.b.rw[0]+3.5:0;for(let st=0;st<o;st++)for(let lt=0;lt<l;lt++){let G=r+st*4+2,Y=a+lt*4+4/2,rt=0,wt=1/0,ct=1/0;for(let Gt=0;Gt<E;Gt+=v){let ue=(_[Gt]-G)**2+(m[Gt]-Y)**2;ue<wt&&(wt=ue,rt=Gt),ue<324&&p[Gt]<ct&&(ct=p[Gt])}if(fe.big){let Gt=rt;for(let ue=Math.max(0,Gt-v);ue<=Math.min(E-1,Gt+v);ue++){let Fe=(_[ue]-G)**2+(m[ue]-Y)**2;Fe<wt&&(wt=Fe,rt=ue)}}let St=Math.sqrt(wt),he=St<18?Math.min(ct,p[rt]):p[rt],Yt=w[rt],ie=d?rd(G,Y):1/0,Kt,Wt=0;if(ie<(d==null?void 0:d.w))Kt=d.y-2,Wt=3;else if(St<Yt)Kt=Math.floor(he-.6);else{let Gt=Math.min((St-Yt)*g,36)+u(G,Y)*2.5;fe.theme==="canyon"&&(Gt=Math.floor(Gt/4)*4),Kt=Math.floor(he-.6+Math.max(0,Gt)),ie<d.w+10&&(Kt=Math.min(Kt,Math.floor(d.y+(ie-d.w)*(fe.theme==="canyon"?2.5:.6)))),Kt-he>24?Wt=2:Kt-he>13&&(Wt=1)}if(S){let Gt=0,ue=1/0;for(let pe=0;pe<S.x.length;pe++){let F=(S.x[pe]-G)**2+(S.z[pe]-Y)**2;F<ue&&(ue=F,Gt=pe)}let Fe=Math.sqrt(ue),Se=S.y[Gt];if(Fe<b)Kt=Math.floor(Se-.6),Wt=0;else if(S.f[Gt]>0&&St>Yt+2){let pe=Math.floor(Se+(12+u(G,Y)*2)*S.f[Gt]-Math.max(0,Fe-b-9)*.9);pe>Kt&&(Kt=pe,Wt=pe-Se>9?1:0)}St=Math.min(St,Fe)}c[st*l+lt]=Kt,h[st*l+lt]=Wt,f[st*l+lt]=St}let C=-18,y=[],T=(st,lt)=>st*l+lt,I=(st,lt,G)=>{let Y=0,rt=-1,wt=!0;for(let ct=0;ct<G&&wt;ct++)for(let St=0;St<G;St++){if(st+ct>=o||lt+St>=l){wt=!1;break}let he=T(st+ct,lt+St);if(rt<0&&(rt=h[he]),h[he]!==rt||rt===3||f[he]<(G===4?95:42)){wt=!1;break}Y+=c[he]}return wt?(y.push([r+st*4+4*G/2,a+lt*4+4*G/2,Math.round(Y/(G*G)),rt,G,st,lt]),!0):!1},R=(st,lt)=>{if(st<o&&lt<l){let G=T(st,lt);y.push([r+st*4+4/2,a+lt*4+4/2,c[G],h[G],1,st,lt])}};if(fe.big){for(let st=0;st<o;st+=4)for(let lt=0;lt<l;lt+=4)if(!I(st,lt,4)){for(let[G,Y]of[[0,0],[2,0],[0,2],[2,2]])if(!I(st+G,lt+Y,2))for(let[rt,wt]of[[0,0],[1,0],[0,1],[1,1]])R(st+G+rt,lt+Y+wt)}}else for(let st=0;st<o;st++)for(let lt=0;lt<l;lt++)R(st,lt);let L=Bt.terrain.map(([st,lt])=>ds(4,1,4,st,lt)),D=[0,0,0,0];for(let st of y)D[st[3]]++;let P=L.map((st,lt)=>new Te(st,lr(),Math.max(1,D[lt])));P.forEach((st,lt)=>st.count=D[lt]);let N=[0,0,0,0],B=new we,z=new Ut,K=[];for(let[st,lt,G,Y,rt,wt,ct]of y){B.position.set(st,C,lt),B.scale.set(rt,G-C,rt),B.updateMatrix(),P[Y].setMatrixAt(N[Y],B.matrix);let St=.93+(wt*7+ct*13)%5*.03;P[Y].setColorAt(N[Y]++,z.setRGB(St,St,St)),Y===3&&K.push([st,lt])}if(P.forEach(st=>Qt.add(st)),K.length){let st=d.ice?new cn({color:Bt.water,emissive:1714739}):new cn({color:Bt.water,transparent:!0,opacity:.88,emissive:Bt.night?662074:0}),lt=new Te(Xe,st,K.length);K.forEach(([G,Y],rt)=>{B.position.set(G,d.y-.3,Y),B.scale.set(4,.6,4),B.updateMatrix(),lt.setMatrixAt(rt,B.matrix)}),Qt.add(lt)}ha=(st,lt)=>{let G=Math.floor((st-r)/4),Y=Math.floor((lt-a)/4);return G<0||Y<0||G>=o||Y>=l?null:{h:c[G*l+Y],kind:h[G*l+Y],d:f[G*l+Y]}};let Z=new Ee(new ai(3e3,3e3),oe(Bt.terrain[0][1]));Z.rotation.x=-Math.PI/2,Z.position.y=C,Qt.add(Z);let Q=7,et=()=>(Q=Q*16807%2147483647)/2147483647,It=(t+e)/2,Rt=(i+s)/2,ce=Math.max(e-t,s-i)/2+(fe.big?130:200);for(let st=0;st<46;st++){let lt=st/46*Kn+et()*.1,G=ce+et()*120,Y=60+et()*70,rt=50+et()*80,wt=new Le;if(Bt.mesas)for(let St=0;St<4;St++)ot(wt,Y*(St===3?.8:1),rt/4,Y*.7,Bt.ring[St%3],0,(St+.5)*rt/4,0);else for(let St=0;St<4;St++){let he=1-St/4;ot(wt,Y*he,rt/4,Y*he,St===3?Bt.ring[2]:St>=2?Bt.ring[1]:Bt.ring[0],0,(St+.5)*rt/4,0)}wt.position.set(It+Math.cos(lt)*G,C,Rt+Math.sin(lt)*G),wt.rotation.y=et()*Kn,wt.scale.y=1.3,Qt.add(wt)}}function A_(){let n=new Le;for(let t=0;t<Mt;t+=5)if(!gn[t])for(let e of[-1,1]){let i=e*(je[t]-.6),s=it[t].x+jt[t].x*i,r=it[t].z+jt[t].z*i,a=ha(s,r);if(!a)continue;let o=it[t].y-.3,l=Math.min(a.h,fe.water&&a.kind===3?fe.water.y-2:a.h);if(o-l<3.5)continue;let c=!1;for(let h=0;h<Mt;h+=2)if(!(Math.abs(jn(h,t))<40)&&(it[h].x-s)**2+(it[h].z-r)**2<(je[h]+2)**2){c=!0;break}c||ot(n,1.4,o-l,1.4,Bt.fence[0],s,(o+l)/2,r)}Qt.add(n)}function R_(){let n={log:{bark:7031339,ring:14267004,top:6262586},rock:{bark:12085562,ring:13204037,top:14393450},stump:{bark:4863012,ring:9071173,top:3107386}},t=12,e=new we;for(let[i,s]of Ol.entries()){if(fe.arches[i].kind==="covered"){C_(s);continue}let r=n[fe.arches[i].kind],a=[];for(let u=-14;u<=14;u+=2){let d=de(s+u),g=Math.abs(u)>=13;for(let _=0;_<=16;_++){let m=_/16*Math.PI,p=Math.cos(m)*t,w=Math.sin(m)*t*.85;a.push([it[d].x+jt[d].x*p,it[d].y+w-.5,it[d].z+jt[d].z*p,Math.atan2(ze[d].x,ze[d].z),g])}}let o=new Te(Xe,oe(r.bark),a.filter(u=>!u[4]).length),l=new Te(Xe,oe(r.ring),a.filter(u=>u[4]).length),c=0,h=0;for(let[u,d,g,_,m]of a)e.position.set(u,d,g),e.rotation.set(0,_,0),e.scale.set(2.6,2.6,3.4),e.updateMatrix(),m?l.setMatrixAt(h++,e.matrix):o.setMatrixAt(c++,e.matrix);Qt.add(o,l);let f=new Te(Xe,oe(r.top),15);for(let u=-14,d=0;u<=14;u+=2,d++){let g=de(s+u);e.position.set(it[g].x,it[g].y+t*.85+1,it[g].z),e.rotation.set(0,Math.atan2(ze[g].x,ze[g].z),0),e.scale.set(6,.6,3.4),e.updateMatrix(),f.setMatrixAt(d,e.matrix)}if(Qt.add(f),fe.arches[i].kind==="stump")for(let u=0;u<6;u++){let d=de(s-12+u*5),g=u%2?1:-1,_=g*(t+.5),m=it[d].x+jt[d].x*_,p=it[d].z+jt[d].z*_;ot(Qt,.7,2,.7,14209216,m,it[d].y+3+u,p),ot(Qt,2.6,.9,2.6,0,m,it[d].y+4.2+u,p,ys(u%2?6288096:16743104))}}}function wn(n,t){if(!n.length)return null;let e=new Te(Xe,t,n.length),i=new we;return n.forEach(([s,r,a,o,l,c,h],f)=>{i.position.set(s,r,a),i.rotation.set(0,o,0),i.scale.set(l,c,h),i.updateMatrix(),e.setMatrixAt(f,i.matrix)}),Qt.add(e),e}function C_(n){let t=[],e=[],i=[],s=[],r=(a,o,l,c,h,f,u)=>{a.push([it[o].x+jt[o].x*l,it[o].y+c,it[o].z+jt[o].z*l,pr(ze[o]),h,f,u])};for(let a=-14;a<=14;a++){let o=de(n+a),l=je[o]+.5;for(let c of[-1,1])r(e,o,c*l,1.2,.5,2.4,1.6),r(e,o,c*l,6.1,.5,2.2,1.6),a%3===0&&r(t,o,c*l,3.6,.8,7.2,.8);r(i,o,0,7.7,(l+1.6)*2,.9,1.6),r(i,o,0,8.6,(l+.4)*1.45,.9,1.6),r(i,o,0,9.5,l*.95,.9,1.6),r(s,o,0,10.2,l*1,.6,1.62);for(let c of[-1,1])r(s,o,c*(l+1.1),8.25,1.3,.25,1.62),r(s,o,c*(l*.62),9.15,1.2,.25,1.62)}wn(t,oe(5913382)),wn(e,oe(10107434)),wn(i,oe(7024420)),wn(s,oe(16777215))}function P_(n){let t=n.ww[0]+1.6,e=[],i=[],s=[],r=[],a=[];for(let h=0;h<n.n;h++)n.arch[h]&&a.push(h);let o=a[0],l=a[a.length-1],c=da(321);for(let h=o;h<=l;h+=2){let f=pr(n.T[h]),u=h-o<3||l-h<3;for(let d=0;d<=16;d++){let g=d/16*Math.PI,_=Math.cos(g)*t,m=Math.sin(g)*t*.85;(u?i:e).push([n.P[h].x+n.L[h].x*_,n.P[h].y+m-.5,n.P[h].z+n.L[h].z*_,f,2.6,2.6,3.4])}if(s.push([n.P[h].x,n.P[h].y+t*.85+1,n.P[h].z,f,7,.7,3.4]),!u)for(let d=0;d<2;d++){let g=(c()-.5)*t*1.1,_=Math.sqrt(Math.max(0,t*t-g*g))*.85-1.4,m=.8+c()*1.6;r.push([n.P[h].x+n.L[h].x*g,n.P[h].y+_-m/2,n.P[h].z+n.L[h].z*g,f,.35,m,.35])}}wn(e,oe(9423332)),wn(i,oe(14874111)),wn(s,oe(16777215)),wn(r,new cn({color:14219007,emissive:3828352}))}function da(n){return()=>(n=n*16807%2147483647)/2147483647}function fs(n,t,e,i,s=64){let r=da(i),a=[],o=0;for(;a.length<n&&o++<n*40;){let l=Math.floor(r()*Mt),c=r()<.5?-1:1,h=t+r()*(e-t),f=it[l].x+jt[l].x*c*h+(r()-.5)*8,u=it[l].z+jt[l].z*c*h+(r()-.5)*8,d=ha(f,u);!d||d.kind===3||d.d<t||a.some(g=>(g[0]-f)**2+(g[1]-u)**2<s)||a.push([f,u,d.h,.8+r()*.6,d.kind,r(),d.d])}return a}function I_(){let n=new we,t=(e,i,s,r,a,o,l,c,h=0)=>{n.rotation.set(0,h,0),n.position.set(s,r,a),n.scale.set(o,l,c),n.updateMatrix(),e.setMatrixAt(i,n.matrix)};if(fe.theme==="canyon"){let e=fs(110,15,70,11),i=new Te(Xe,oe(5212730),e.length*3),s=0;for(let[o,l,c,h,,f]of e)t(i,s++,o,c+3.5*h,l,1.3*h,7*h,1.3*h),t(i,s++,o+1.4*h,c+4*h,l,1*h,3*h,1*h),t(i,s++,o-1.4*h,c+5*h+f*2,l,1*h,2.4*h,1*h);Qt.add(i);let r=fs(70,13,60,23,30),a=new Te(ds(1,1,1,13072965,10242594),lr(),r.length);r.forEach(([o,l,c,h,,f],u)=>t(a,u,o,c,l,3*h+f*3,2*h+f*2,3*h,f*Kn)),Qt.add(a)}else if(Bt.snow)L_(t);else{let e=!!Bt.night,i=fs(e?230:190,17,90,42),s=new Te(Xe,oe(e?3811870:7031339),i.length),r=new Te(ds(1,1,1,5742667,4160826),lr(),i.length),a=new Te(e?ds(1,1,1,2775616,1720108):ds(1,1,1,4160074,3104570),lr(),i.length*3),o=0,l=0;if(i.forEach(([c,h,f,u,d,g],_)=>{if(t(s,_,c,f+3*u,h,1.4*u,6*u,1.4*u),e||d===1||g<.35)for(let m=0;m<3;m++){let p=(6-m*1.8)*u;t(a,l++,c,f+(4+m*2.6)*u,h,p,2.6*u,p)}else t(r,o++,c,f+6*u,h,6.5*u,5*u,6.5*u)}),r.count=o,a.count=l,Qt.add(s,r,a),e){let c=fs(90,12.5,40,77,20).filter(([,,,,,w],E,v)=>w<=.8||v[E][6]>19),h=new Te(Xe,oe(14209216),c.length),f=new Te(Xe,new Cn({color:16777215}),c.length),u=[6288096,16743104,11832575].map(w=>new Ut(w));c.forEach(([w,E,v,S,,b],C)=>{let y=b>.8?2.2:1;t(h,C,w,v+1.2*S*y,E,.6*S*y,2.4*S*y,.6*S*y),t(f,C,w,v+2.6*S*y,E,2.4*S*y,.9*S*y,2.4*S*y,b*3),f.setColorAt(C,u[Math.floor(b*3)%3])}),Qt.add(h,f);let d=fs(140,6,34,91,4);Ei.base=d.map(([w,E,v,S,,b])=>[w,v+2+b*5,E,b*Kn]),Ei.mesh=new Te(Xe,ys(16773754),d.length),Qt.add(Ei.mesh);let g=new Ee(new Pn(60,60,60),new Cn({color:16052696,fog:!1}));g.position.set(-500,320,-650),g.rotation.set(.4,.6,.2),Qt.add(g);let _=[],m=da(5);for(let w=0;w<700;w++){let E=m()*Kn,v=.08+m()*1.2,S=900;_.push(Math.cos(E)*Math.cos(v)*S,Math.sin(v)*S,Math.sin(E)*Math.cos(v)*S)}let p=new ln;p.setAttribute("position",new ke(_,3)),Qt.add(new Ys(p,new as({color:16777215,size:2,sizeAttenuation:!1,fog:!1})))}}if(Bt.clouds){let e=da(99);for(let i=0;i<(fe.big?24:14);i++){let s=new Le;ot(s,30+e()*30,4,14+e()*10,Bt.clouds,0,0,0),ot(s,14+e()*10,4,8,Bt.clouds,e()*10-5,3,0);let r=fe.big?1300:800;s.position.set(-r/2+e()*r,95+e()*40,-r/2+e()*r),Qt.add(s),Xh.push(s)}}}function L_(n){let t=fs(420,17,95,42,52),e=new Te(Xe,oe(5913382),t.length+8),i=new Te(ds(1,1,1,16185852,3107402),lr(),(t.length+8)*3),s=new Te(Xe,oe(16777215),t.length+8),r=0,a=0,o=(I,R,L,D)=>{n(e,r,I,R+2.5*D,L,1.3*D,5*D,1.3*D);for(let P=0;P<3;P++){let N=(6.4-P*1.9)*D;n(i,a++,I,R+(3.6+P*2.7)*D,L,N,2.7*D,N)}n(s,r++,I,R+11.4*D,L,1.6*D,1.2*D,1.6*D)};for(let[I,R,L,D]of t)o(I,L,R,D);let l=en.find(I=>I.kind==="cave");if(l)for(let I of[l.s0,l.e0]){let R=Ai(l.side),L=[];for(let D=-45;D<=45;D++)Qe.open[de(I+D)]&R&&L.push(D);if(L.length)for(let D of[L[0]-4,L[L.length-1]+4]){let P=de(I+D),N=l.side*(je[P]+3.2),B=it[P].x+jt[P].x*N,z=it[P].z+jt[P].z*N,K=Hn(l,B,z,0,0,l.n);if(Math.abs(Pi(l,B,z,K))<l.ww[K]+3&&Math.abs(fa(l,B,z,K))<3)continue;let Z=ha(B,z);o(B,Z?Math.max(Z.h,it[P].y-1):it[P].y-1,z,1.35)}}e.count=r,i.count=a,s.count=r,Qt.add(e,i,s);let c=fs(80,15,70,23,30),h=new Te(ds(1,1,1,16777215,9278366),lr(),c.length);c.forEach(([I,R,L,D,,P],N)=>n(h,N,I,L,R,3*D+P*3,2*D+P*2,3*D,P*Kn)),Qt.add(h);let f=new we,u=(I,R)=>Math.atan2(-R*jt[I].x,-R*jt[I].z),d=(I,R,L)=>{let D=ha(I,R);return D?D.h:it[L].y-1},g=new Map,_=new Map,m=(I,R,L,D)=>(P,N,B,z,K,Z,Q,et)=>{let It=Math.cos(D),Rt=Math.sin(D),ce=et?_:g;ce.has(z)||ce.set(z,[]),ce.get(z).push([I+K*It+Q*Rt,R+Z,L-K*Rt+Q*It,D,P,N,B])},p=(I,R,L)=>{let D=R*L,P=it[I].x+jt[I].x*D,N=it[I].z+jt[I].z*D,B=m(P,d(P,N,I),N,u(I,R));B(9,5,7,8014378,0,2.5,0);for(let z of[.9,2.3,3.7])B(9.3,.45,7.3,6175264,0,z,0);[[10.4,6],[8,7.1],[5.4,8.2],[2.8,9.2]].forEach(([z,K])=>B(z,1.2,8.4,16777215,0,K,0)),B(1.4,4,1.4,9278366,2.6,8,-1.6),B(1.7,.5,1.7,16777215,2.6,10.1,-1.6),B(1.8,3,.3,3810324,0,1.5,3.55);for(let z of[-2.9,2.9])B(1.6,1.4,.3,16765562,z,2.9,3.55,!0)};[[Mt-70,1],[Mt-42,-1],[Mt-24,1],[18,-1],[38,1],[62,-1],[88,1]].forEach(([I,R],L)=>p(de(I),R,je[de(I)]+9+L%3*3));let w=(I,R,L,D)=>{let P=R*L,N=it[I].x+jt[I].x*P,B=it[I].z+jt[I].z*P,z=m(N,d(N,B,I),B,u(I,R)+D);z(2.4,2.2,2.4,16777215,0,1.1,0),z(1.8,1.7,1.8,16777215,0,3,0),z(1.3,1.3,1.3,16777215,0,4.5,0),z(.3,.3,.9,16747050,0,4.5,.95);for(let K of[-.3,.3])z(.2,.2,.1,1907997,K,4.8,.66);for(let K of[2.6,3.2])z(.25,.25,.1,1907997,0,K,.92);z(1.9,.4,1.9,14169146,0,3.85,0),z(.4,1,.3,14169146,.5,3.3,.9),z(3.2,.2,.2,5913382,0,3.2,0),z(1,.8,1,1907997,0,5.5,0),z(1.5,.15,1.5,1907997,0,5.15,0)};w(de(Mt-32),-1,je[0]+4.5,.3),w(28,1,je[0]+4,-.4),w(de(Math.round(Mt*.27)),-1,je[0]+5,.2);for(let[I,R]of g)wn(R,oe(I));for(let[I,R]of _)wn(R,ys(I));let E=[],v=[[],[],[],[]];for(let I=-60;I<=60;I+=10){let R=de(I),L=de(I+10);for(let D of[-1,1]){let P=ps(R,D*(je[R]+1.4)),N=ps(L,D*(je[L]+1.4));if(E.push([P.x,P.y+2.4,P.z,0,.4,4.8,.4]),I<60)for(let B=1;B<8;B++){let z=B/8,K=Math.sin(z*Math.PI)*.9;v[(B+(D>0?1:0))%4].push([P.x+(N.x-P.x)*z,P.y+(N.y-P.y)*z+4.4-K,P.z+(N.z-P.z)*z,0,.42,.55,.42])}}}wn(E,oe(3811870)),[16730698,4915066,16765770,5943551].forEach((I,R)=>wn(v[R],ys(I)));let S=fe.water;if(S&&S.pond){let[I,R]=S.line[S.line.length-1],L=new Le;L.position.set(I+6,S.y,R-4),L.rotation.y=.5,ot(L,4,3.4,3.4,12597547,0,1.7,0),ot(L,4.6,.5,4,16777215,0,3.6,0),ot(L,1.1,2,.2,3810324,0,1,1.75),ot(L,.8,.12,.8,2779786,3.2,.05,1.5),Qt.add(L)}let b=1400,C=new Float32Array(b*3),y=da(77);for(let I=0;I<b;I++)C[I*3]=y()*160,C[I*3+1]=y()*60,C[I*3+2]=y()*160;let T=new ln;T.setAttribute("position",new ke(new Float32Array(b*3),3)),di.pts=new Ys(T,new as({color:16777215,size:.5,sizeAttenuation:!0})),di.pts.frustumCulled=!1,di.base=C,Qt.add(di.pts)}function od(n){if(!di.pts)return;let t=di.pts.geometry.attributes.position.array,e=di.base,i=$t.position.x,s=$t.position.y,r=$t.position.z,a=(o,l)=>(o%l+l)%l-l/2;for(let o=0;o<e.length;o+=3){let l=e[o]*.37;t[o]=i+a(e[o]+n*1.6+Math.sin(n*.8+l)*1.2-i,160),t[o+1]=s+a(e[o+1]-n*3.2-s,60),t[o+2]=r+a(e[o+2]+n*.7-r,160)}di.pts.geometry.attributes.position.needsUpdate=!0}function D_(n){for(let t=0;t<8;t++){let e=Lh.find(s=>s.life<=0);e||(e={m:new Ee(Xe,oe(t%2?15249482:11565610)),life:0},Ve.add(e.m),Lh.push(e));let i=Math.random()*Kn;e.m.position.set(n.x,n.y,n.z),e.m.scale.setScalar(.25+Math.random()*.2),e.m.visible=!0,e.vx=Math.cos(i)*(4+Math.random()*5),e.vz=Math.sin(i)*(4+Math.random()*5),e.vy=5+Math.random()*6,e.life=.7}}var N_=la(16,n=>{n.fillStyle="#d9692b",n.fillRect(0,0,16,16),n.fillStyle="#ffd36b";for(let t of[1,9])for(let e=0;e<6;e++)n.fillRect(8-(6-e),t+e,(6-e)*2,1)}),U_=la(16,n=>{n.fillStyle="#e8b04a",n.fillRect(0,0,16,16),n.fillStyle="#b07a2a",n.fillRect(0,0,16,1),n.fillRect(0,15,16,1),n.fillRect(0,0,1,16),n.fillRect(15,0,1,16),n.fillStyle="#5a3b26",[[6,3,4,1],[5,4,1,2],[10,4,1,3],[8,7,2,1],[7,8,1,2],[7,12,1,1]].forEach(([t,e,i,s])=>n.fillRect(t,e,i,s))}),ld=new cn({map:N_,emissive:5583616}),cd=new cn({map:U_,emissive:3351040}),hd=new Pn(1.8,1.8,1.8);function F_(){for(let n of ca){let t=n.rd,e=n.i,i=new Ee(new ai(5,6),ld);i.rotation.x=-Math.PI/2;let s=new Le;s.add(i),s.position.set(t.P[e].x,t.P[e].y+.12,t.P[e].z),s.rotation.y=Math.atan2(t.T[e].x,t.T[e].z)+Math.PI,Qt.add(s)}ur.length=0;for(let n of Wh){let t=bn[n]>8?[-6.4,-3.2,0,3.2,6.4]:[-4.5,-1.5,1.5,4.5];for(let e of t){let i=new Ee(hd,cd),s=it[n].x+jt[n].x*e,r=it[n].z+jt[n].z*e;i.position.set(s,it[n].y+1.6,r),Qt.add(i),ur.push({m:i,x:s,z:r,y:it[n].y+1.6,off:0})}}}function O_(){if(!Vt)return;let n=Vt,t=n.rw,e=[],i=[],s=L=>new Ut(L),r=s(14279402),a=s(13227230),o=s(14169146),l=s(16777215),c=s(11056320),h=(L,D,P)=>{let N=n.pos[L],B=n.lat[L],z=n.nrm[L];return[N.x+B.x*D+z.x*P,N.y+B.y*D+z.y*P,N.z+B.z*D+z.z*P]},f=(L,D,P,N,B)=>{e.push(...L,...D,...P,...L,...P,...N);for(let z=0;z<6;z++)i.push(B.r,B.g,B.b)};for(let L=0;L<n.M;L++){let D=L+1,P=Math.floor(L/3)%2?o:l,N=t-1.1;f(h(L,-N,.05),h(D,-N,.05),h(D,N,.05),h(L,N,.05),Math.floor(L/3)%2?r:a);for(let B of[-1,1])f(h(L,B*N,.05),h(D,B*N,.05),h(D,B*t,.05),h(L,B*t,.05),P),f(h(L,B*t,.05),h(D,B*t,.05),h(D,B*t,-.7),h(L,B*t,-.7),P);f(h(L,-t,-.7),h(D,-t,-.7),h(D,t,-.7),h(L,t,-.7),c)}let u=new ln;u.setAttribute("position",new ke(e,3)),u.setAttribute("color",new ke(i,3)),u.computeVertexNormals(),Qt.add(new Ee(u,new cn({vertexColors:!0,side:Dn})));let d=[],g=[],_=Math.atan2(n.a.x,n.a.z),m=n.y,p=n.R*2+4.5,w=(L,D,P,N,B=1.2)=>{for(let z=P,K=0;z<N;z+=1.5,K++)(K%2?d:g).push([L,z+Math.min(1.5,N-z)/2,D,_,B,Math.min(1.5,N-z),B])},E=n.pos[Math.round(n.M/2)],v=-t-6,S=n.shift+t+6,b=L=>[E.x+n.S.x*(L-n.shift/2),E.z+n.S.z*(L-n.shift/2)];for(let L of[v,S]){let[D,P]=b(L);w(D,P,m-1,m+p)}{let[L,D]=b((v+S)/2);d.push([L,m+p+.6,D,_,S-v+1.2,1.2,1.2])}for(let L of[n.shift/2-t+1,n.shift/2+t-1]){let[D,P]=b(L);w(D,P,E.y+.7,m+p,.4)}for(let L of[.25,.75]){let D=Math.round(n.M*L),P=n.pos[D],N=new ae(-n.nrm[D].x,0,-n.nrm[D].z).normalize();w(P.x+N.x*1.4,P.z+N.z*1.4,m-1,P.y-.8)}wn(d,oe(14169146)),wn(g,oe(16777215));let C=la(256,(L,D,P)=>{L.fillStyle="#d8343a",L.fillRect(0,0,D,P),L.fillStyle="#ffffff",L.fillRect(0,0,D,4),L.fillRect(0,P-4,D,4),L.font="bold 34px monospace",L.textAlign="center",L.textBaseline="middle",L.fillText("LOOP THE LOOP",D/2,P/2+2)},64),y=new cn({map:C}),T=new Ee(new Pn(18,4.5,.6),[oe(14169146),oe(14169146),oe(14169146),oe(14169146),y,y]),[I,R]=b((v+S)/2);T.position.set(I-n.a.x*.9,m+p+3.6,R-n.a.z*.9),T.rotation.y=_,Qt.add(T)}var B_=new Set([Xe,hd]);function z_(){Qt&&(Ve.remove(Qt),Qt.traverse(n=>{n.geometry&&!B_.has(n.geometry)&&n.geometry.dispose();let t=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(let e of t)Object.values(Rh).includes(e)||Object.values(Ch).includes(e)||e===ld||e===cd||(e.map&&e.map.dispose(),e.dispose())}),Qt=null,Xh.length=0,Ei.mesh=null,Ei.base=[],di.pts=null,di.base=null)}function qh(n){let t=Rl.find(e=>e.id===n)||Rl[0];z_(),b_(t),Qt=new Le,Ve.add(Qt),Ve.background=new Ut(Bt.sky),Ve.fog=new Ws(Bt.fog[0],Bt.fog[1],Bt.fog[2]),vl.color.set(Bt.hemi[0]),vl.groundColor.set(Bt.hemi[1]),vl.intensity=Bt.hemi[2],Ml.color.set(Bt.sun[0]),Ml.intensity=Bt.sun[1],Ml.position.set(...Bt.sun[2]),w_(),E_(),T_(),A_(),R_(),I_(),F_(),O_();for(let e of en)e.kind==="cave"&&P_(e);fy(),document.body.classList.toggle("night",!!Bt.night)}function ud(n){let t=new Le,e=new Le,i=[];t.add(e);let s=n.kart==="log"?13208122:2827810;for(let[_,m]of[[-1.2,1.05],[1.2,1.05],[-1.2,-1.05],[1.2,-1.05]]){let p=new Le;p.position.set(_,.48,m),ot(p,.6,.95,.95,s,0,0,0),ot(p,.62,.4,.4,n.kart==="log"?5913382:9077112,0,0,0),t.add(p),i.push(p)}if(n.kart==="crate")ot(e,2.1,.85,2.9,11039807,0,.9,0),ot(e,2.12,.08,2.92,9067825,0,.8,0),ot(e,2.12,.08,2.92,9067825,0,1.05,0),ot(e,1,.4,.4,13191994,0,1.45,1.25);else if(n.kart==="wagon")ot(e,2.1,.85,2.9,13191994,0,.9,0),ot(e,2.12,.22,2.92,15854296,0,.95,0),ot(e,.18,.18,1.2,2827810,0,1,1.95),ot(e,.7,.18,.18,2827810,0,1,2.55);else if(n.kart==="log"){ot(e,2,1,3,8016432,0,.95,0);for(let _ of[-1,0,1])ot(e,2.04,1.02,.12,6176290,0,.95,_);ot(e,1.6,.8,.1,14267004,0,.95,1.52),ot(e,1.3,.25,1.2,6262586,0,1.5,-.2)}else ot(e,2.1,.85,2.9,6263748,0,.9,0),ot(e,2.12,.1,2.92,15854296,0,1.3,0),ot(e,.5,.5,.2,16769146,-.6,1,1.46),ot(e,.5,.5,.2,16769146,.6,1,1.46);let r=new Le;ot(r,.5,.5,.9,16757575,-.5,.9,-1.9),ot(r,.5,.5,.9,16757575,.5,.9,-1.9),ot(r,.3,.3,.6,16773544,-.5,.9,-2.4),ot(r,.3,.3,.6,16773544,.5,.9,-2.4),r.visible=!1,t.add(r);let a=new Le;for(let _ of[-1,1])ot(a,.5,.5,.5,0,_*1.55,.3,-1.7,bl),ot(a,.32,.32,.32,0,_*1.9,.75,-2.2,bl),ot(a,.25,.25,.25,0,_*1.3,.9,-2.5,bl);a.visible=!1,t.add(a);let o=new Le;for(let _ of[-1,1])ot(o,.45,.35,.15,0,_*.7,1,1.5,ys(16773560));o.visible=!1,t.add(o);let l=new Le;l.position.set(0,1.25,-.35),e.add(l);let c=1.55,h=1.45,f=.1,u=f+c/2,d=(_=1905680,m=h+.12,p=.36)=>{for(let w of[-1,1])ot(l,.24,.26,.06,_,w*p,m,u+.03),ot(l,.09,.09,.05,16777215,w*p-.05,m+.07,u+.07)};if(n.id==="bruno"){ot(l,1.1,.8,.9,5913382,0,.35,0),ot(l,1.12,.22,.92,13191994,0,.72,0),ot(l,1.75,c,c,7030320,0,h,f);for(let _ of[-1,1])ot(l,.45,.42,.3,5913382,_*.62,h+.92,f);ot(l,.8,.55,.4,12884588,0,h-.32,u+.18),ot(l,.36,.2,.08,1905680,0,h-.16,u+.4),d()}else if(n.id==="pip"){ot(l,1,.8,.9,14248235,0,.35,0),ot(l,.5,.6,.06,16183267,0,.35,.46),ot(l,.6,.5,1.2,14248235,.3,.2,-.9),ot(l,.62,.52,.35,16183267,.3,.2,-1.4),ot(l,1.7,c,c,14709807,0,h,f),ot(l,1.72,.6,c+.02,16183267,0,h-.48,f);for(let _ of[-1,1])ot(l,.42,.7,.3,14709807,_*.6,h+1.05,f),ot(l,.44,.24,.32,2826263,_*.6,h+1.32,f);ot(l,.7,.45,.55,16183267,0,h-.32,u+.25),ot(l,.26,.2,.08,2826263,0,h-.18,u+.54),d()}else if(n.id==="rascal"){ot(l,1,.8,.9,9079434,0,.35,0);for(let _=0;_<4;_++)ot(l,.5,.5,.36,_%2?3815994:9079434,-.3,.25,-.65-_*.34);ot(l,1.75,c,c,10132122,0,h,f),ot(l,1.77,.48,c+.02,3026478,0,h+.12,f);for(let _ of[-1,1])ot(l,.42,.42,.3,7631988,_*.62,h+.92,f);ot(l,.72,.42,.4,15262940,0,h-.4,u+.18),ot(l,.26,.18,.08,1118481,0,h-.26,u+.4),d(16777215);for(let _ of[-1,1])ot(l,.12,.12,.05,1118481,_*.36,h+.1,u+.07)}else{ot(l,1,.8,.9,12170413,0,.35,0),ot(l,.2,.2,1.4,15311792,.35,.15,-1),ot(l,1.7,c,c,15855078,0,h,f);for(let _ of[-1,1])ot(l,.48,.48,.25,3025450,_*.62,h+.9,f),ot(l,.28,.28,.06,15311792,_*.62,h+.86,f+.14);ot(l,.62,.4,.5,16777215,0,h-.36,u+.22),ot(l,.28,.22,.08,14711439,0,h-.24,u+.48),d(1709076,h+.14,.38)}let g=new Ee(new ai(3.2,4),G_);return g.rotation.x=-Math.PI/2,g.position.y=.06,t.add(g),{g:t,body:e,wheels:i,flame:r,drv:l,lamps:o,sparks:a}}var bl=new Cn({color:16774872}),V_=new Cn({color:6277375}),H_=new Cn({color:16751150}),fd=.45,Uh=1.15,G_=new Cn({map:(()=>{let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,31);return e.addColorStop(0,"rgba(0,0,0,0.45)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Zs(n)})(),transparent:!0,depthWrite:!1}),Fh=class{constructor(t,e){this.r=t,this.isPlayer=e,this.v=ud(t),Ve.add(this.v.g),this.pos=new ae,this.h=0,this.speed=0,this.steer=0,this.idx=0,this.prog=0,this.lat=0,this.rd=null,this.ri=0,this.ride=null,this.fly=null,this.surge=0,this.surgeMul=1,this.padMask=0,this.boost=0,this.item=null,this.itemN=0,this.spin=0,this.spinAng=0,this.hopCd=0,this.finished=!1,this.finishTime=0,this.vh=0,this.drift=0,this.driftT=0,this.driftOff=0,this.driftAng=0,this.hopSteer=0,this.wrongWay=0,this.scrape=0,this.wheelSpin=0,this.kx=0,this.kz=0,this.wobble=0,this.air=!1,this.vy=0,this.pitch=0,this.ai={lane:(Math.random()-.5)*6,laneT:0,skill:1,itemT:2+Math.random()*3,pick:new Map,blane:0}}place(t,e){this.idx=t,this.prog=t>Mt/2?t-Mt:t,this.rd=Qe,this.ri=t,this.ride=null,this.fly=null,this.surge=0,this.padMask=0,this.ai.pick=new Map,this.pos.set(it[t].x+jt[t].x*e,0,it[t].z+jt[t].z*e),this.pos.y=x_(this.pos.x,this.pos.z,t),this.h=Math.atan2(ze[t].x,ze[t].z),this.vh=this.h,this.speed=0,this.steer=0,this.drift=0,this.driftT=0,this.driftOff=0,this.driftAng=0,this.boost=0,this.item=null,this.itemN=0,this.spin=0,this.spinAng=0,this.hopCd=0,this.finished=!1,this.finishTime=0,this.wrongWay=0,this.kx=0,this.kz=0,this.wobble=0,this.air=!1,this.vy=0,this.v.lamps.visible=!!Bt.night,this.sync(0)}sync(t){let e=this.v.g;if(e.position.copy(this.pos),this.ride){let s=gs(this.ride.s),r=Yh(s,this.ride.rh);Cl.makeBasis(r.lat,s.nrm,r.fwd),e.quaternion.setFromRotationMatrix(Cl),this.pitch=0,this.driftAng=0}else if(this.fly)e.quaternion.copy(this.fly.q),this.pitch=0,this.driftAng=0;else{let s=this.rd,r=this.ri,a=this.air?-Math.atan2(this.vy,Math.max(8,this.speed))*.7:-Math.atan(s.HS[r]*Math.cos(We(this.h-Math.atan2(s.T[r].x,s.T[r].z))));this.pitch=t>0?this.pitch+(a-this.pitch)*Math.min(1,t*10):a;let o=this.drift?this.drift*.42:0;this.driftAng+=(o-this.driftAng)*Math.min(1,t*8),e.rotation.set(this.pitch,this.h+this.spinAng+this.driftAng,0,"YXZ")}let i=this.drift?this.driftT>Uh?2:this.driftT>fd?1:0:-1;this.v.sparks.visible=i>=0&&Math.floor(performance.now()/50)%2===0,i>=0&&this.v.sparks.children.forEach(s=>s.material=i===2?H_:i===1?V_:bl),this.wheelSpin+=this.speed*t/.48,this.v.wheels.forEach((s,r)=>{s.rotation.x=this.wheelSpin,r<2&&(s.rotation.y=this.steer*.35)}),this.v.body.rotation.z=-this.steer*ne(this.speed/30,0,1)*.08+Math.sin(this.wobble*40)*this.wobble*.5,this.v.body.rotation.x=Math.sin(this.wobble*31)*this.wobble*.25,this.v.drv.position.y=1.25+Math.abs(Math.sin(this.wheelSpin*.25))*.05*ne(this.speed/10,0,1),this.v.flame.visible=(this.boost>0||this.surge>0)&&Math.floor(performance.now()/60)%2===0}},Cl=new _e;function $i(n,t,e,i){n.rd=t,n.ri=e,n.lat=i,t.pads&&(n.padMask=0)}function dr(n,t){let e=n.ride?Vt.m0+n.ride.s/Vt.total*(Vt.m1-Vt.m0):n.rd.main?n.ri:n.rd.map[n.ri],i=de(Math.round(e)),s=i-t;s>Mt/2&&(s-=Mt),s<-Mt/2&&(s+=Mt),n.prog+=s,n.idx=i}function k_(n){let t=n.rd,e=n.pos.x,i=n.pos.z;if(t.main){if(!en.length)return!1;let r=Math.sign(n.lat);if(!(t.open[n.ri]&Ai(r))||Math.abs(n.lat)<t.rw[n.ri]+.2)return!1;for(let a of en){let o=Hn(a,e,i,0,0,a.n),l=fa(a,e,i,o);if(o===0&&l<0||o===a.n-1&&l>0)continue;let c=Pi(a,e,i,o);if(Math.abs(c)<a.rw[o]&&(a.ovl[o]||Math.abs(c)<a.rw[o]-.5))return $i(n,a,o,c),!0}return!1}if(t.ovl[n.ri]){let r=na(e,i,t.mi[n.ri],20,20),a=ia(e,i,r);if(Math.abs(a)<bn[r]-.2)return $i(n,Qe,r,a),!0}let s=fa(t,e,i,n.ri);if(n.ri>=t.n-1&&s>0){if(t.next)return q_(n,s),!0;let r=na(e,i,t.mi[t.n-1],20,20);return $i(n,Qe,r,ia(e,i,r)),!0}if(n.ri===0&&s<0){if(t.prevRide)return n.pos.x-=t.T[0].x*s,n.pos.z-=t.T[0].z*s,n.speed<0&&(n.speed=0),!1;let r=na(e,i,t.mi[0],20,20);return $i(n,Qe,r,ia(e,i,r)),!0}return!1}var W_=n=>{let t=0;for(;n;)t+=n&1,n>>=1;return t},X_=.6;function q_(n,t){Zh(n,!1),n.air=!1,n.vy=0,n.kx=0,n.kz=0,n.spin=0,n.spinAng=0,n.wasHop=!1;let e=n.rd,i=ne(We(n.h-pr(e.T[e.n-1])),-.6,.6);n.ride={s:Math.max(0,t),lat:ne(n.lat,-Vt.rw,Vt.rw),rh:i},n.speed=Math.max(n.speed,pa(n)*Vt.vmin),n.isPlayer&&Ce.jump()}var _h={fwd:new ae,lat:new ae};function Yh(n,t){let e=Math.cos(t),i=Math.sin(t);return _h.fwd.copy(n.tan).multiplyScalar(e).addScaledVector(n.lat,i),_h.lat.copy(n.lat).multiplyScalar(e).addScaledVector(n.tan,-i),_h}function dd(n,t,e){n.boost>0&&(n.boost-=e),n.surge>0&&(n.surge-=e),n.steer+=(t.steer-n.steer)*Math.min(1,e*9);let i=n.ride,s=n.idx,r=n.speed,a=n.steer*n.r.turn*Ue.turn*X_*(1-.33*ne(r/pa(n),0,1));if(i.rh=ne(i.rh+a*e,-1.2,1.2)*Math.exp(-1.2*e),i.s+=r*Math.cos(i.rh)*e,i.lat+=r*Math.sin(i.rh)*e,i.s>=Vt.total){Y_(n),dr(n,s);return}let o=gs(i.s);if(n.pos.copy(o.pos).addScaledVector(o.lat,i.lat),Math.abs(i.lat)>Vt.rw+.4){Z_(n,o);return}let l=Yh(o,i.rh).fwd;Math.abs(l.x)+Math.abs(l.z)>.05&&(n.h=Math.atan2(l.x,l.z),n.vh=n.h),n.wrongWay=0,dr(n,s)}function Y_(n){let t=Vt.lout,e=n.ride,i=e.s-Vt.total,s=gs(Vt.total);n.ride=null,n.pos.copy(s.pos).addScaledVector(s.lat,e.lat).addScaledVector(s.tan,i);let r=Hn(t,n.pos.x,n.pos.z,Vt.jE,15,15);$i(n,t,r,Pi(t,n.pos.x,n.pos.z,r)),n.pos.y=Qi(t,n.pos.x,n.pos.z,r),n.h=We(pr(s.tan)+e.rh),n.vh=n.h,n.pitch=0,W_(n.padMask)>=3&&(n.surge=Vt.surgeT,n.surgeMul=Vt.surge,n.speed=Math.max(n.speed,pa(n)*Vt.surge),n.isPlayer&&(Nn("LOOP BOOST!",900),Ce.boost()),Ci&&(xn.loopBoosts=(xn.loopBoosts||0)+1)),n.padMask=0}function Z_(n,t){let e=n.ride,i=Yh(t,e.rh);Cl.makeBasis(i.lat,t.nrm,i.fwd);let s=i.fwd.clone().multiplyScalar(n.speed*.7);s.y>0&&(s.y*=.5),n.fly={v:s,q:new Rn().setFromRotationMatrix(Cl),t:0},n.ride=null,n.air=!0,n.padMask=0,n.isPlayer&&Ce.hop(),Ci&&(xn.flyOffs=(xn.flyOffs||0)+1)}var pd=new ae(0,1,0),Ki=new ae,Pl=new Rn,wl=new ae;function J_(n,t){let e=n.fly;n.boost>0&&(n.boost-=t),n.surge>0&&(n.surge-=t),e.t+=t,e.v.y-=Th*t,n.pos.addScaledVector(e.v,t),wl.set(0,1,0).applyQuaternion(e.q);let i=Math.acos(ne(wl.y,-1,1));i>.001&&(Ki.crossVectors(wl,pd),Ki.lengthSq()<1e-8&&Ki.set(1,0,0),Pl.setFromAxisAngle(Ki.normalize(),Math.min(i,2*t)),e.q.premultiply(Pl));let s=Math.hypot(e.v.x,e.v.z);s>1&&(n.h=Math.atan2(e.v.x,e.v.z),n.vh=n.h),n.speed=s;let r=Vt.lout,a=Hn(r,n.pos.x,n.pos.z,Vt.jE,45,45),o=Qi(r,n.pos.x,n.pos.z,a);(n.pos.y<=o&&e.v.y<0||e.t>4)&&$_(n,r,a,o)}function $_(n,t,e,i){let s=n.fly,r=wl.set(0,1,0).applyQuaternion(s.q).y,a=-s.v.y,o=n.idx;if(n.fly=null,n.air=!1,n.vy=0,n.pitch=0,r<.35||a>26||s.t>4){K_(n),dr(n,o);return}let l=Pi(t,n.pos.x,n.pos.z,e),c=t.ww[e]-1.1;if(Math.abs(l)>c){let h=l-Math.sign(l)*c;n.pos.x-=t.L[e].x*h,n.pos.z-=t.L[e].z*h,l=Math.sign(l)*c}$i(n,t,e,l),n.pos.y=i,n.speed*=.85,n.wobble=.4,n.isPlayer&&(Ce.land(),_s=.25,Nn("Jump!",700)),Ci&&(xn.loopJumps=(xn.loopJumps||0)+1),dr(n,o)}function K_(n){let t=Vt.lout,e=ua(t,Vt.jE+3);n.pos.copy(t.P[e]),$i(n,t,e,0),n.h=pr(t.T[e]),n.vh=n.h,n.speed=4,n.spin=1,n.spinAng=0,n.boost=0,n.surge=0,n.drift=0,n.padMask=0,n.wobble=.35,n.isPlayer?(Ce.spin(),Nn("CRASH!",1300,!0),_s=.45):Il(n,40)&&Ce.bonk(),Ci&&(xn.loopCrashes=(xn.loopCrashes||0)+1)}var Ti=1/120;function md(n,t,e){let i=n.r;if(n.hopCd>0&&(n.hopCd-=e),n.ride){dd(n,t,e);return}if(n.fly){J_(n,e);return}n.spin>0&&(n.spin-=e,n.spinAng+=e*13*ne(n.spin,.2,1),t={steer:0,throttle:0,item:!1,hop:!1},n.speed*=Math.exp(-4.5*e),n.spin<=0&&(n.spinAng=0)),n.steer+=(t.steer-n.steer)*Math.min(1,e*9);let s=pa(n),r=i.accel*Ue.mult,a=s*(n.isPlayer?1:n.ai.skill),o=n.rd,l=o.main&&o.open[n.ri]&Ai(Math.sign(n.lat));Math.abs(n.lat)>o.rw[n.ri]+.4&&!l&&(a*=.62),n.surge>0&&(a=Math.max(a,s*n.surgeMul),n.surge-=e),n.boost>0&&(a=s*1.38,n.boost-=e),n.air||(t.throttle>0?n.speed<a&&(n.speed=Math.min(a,n.speed+r*(n.boost>0?2.2:1)*(1-.55*Math.max(0,n.speed)/a)*e)):t.throttle<0?(n.speed-=(n.speed>0?34:9)*e,n.speed<-9&&(n.speed=-9)):n.speed-=Math.sign(n.speed)*Math.min(Math.abs(n.speed),7*e)),n.speed>a&&(n.speed-=(n.speed-a)*2.2*e);let h=Math.abs(n.speed),f=i.turn*Ue.turn,u=(n.air?.35:1)*n.steer*f*ne(h/7,0,1)*(1-.33*ne(h/s,0,1))*Math.sign(n.speed||1);if(n.air&&Math.abs(t.steer)>.5&&(n.hopSteer=Math.sign(t.steer)),n.drift){let R=t.steer*n.drift,L=ua(o,n.ri+Math.round((6+h*.35)/o.seg)),D=Math.atan2(o.T[L].x,o.T[L].z),P=n.drift*(R>.5?5:R<-.5?-1:2),N=ne((P-n.lat)*.12,-.45,.45);u=ne(We(D-n.h)*3.2+N,-1.8,1.8);let B=ne((P-n.lat)*.8,-2.5,2.5)*ne((o.ww[n.ri]-2.4-Math.abs(n.lat))/2,0,1);n.pos.x+=o.L[n.ri].x*B*e,n.pos.z+=o.L[n.ri].z*B*e,n.driftOff=R>.5?0:n.driftOff+e,R>.5&&(n.driftT+=e),(n.driftOff>.45||h<12||n.spin>0||n.air)&&Zh(n,n.driftOff>.45&&!n.air&&n.spin<=0)}n.h=We(n.h+u*e);let d=n.drift?7:n.air?0:Ue.grip>=99?99:Ue.grip+(1-ne(h/s,0,1))*10,g=We(n.h-n.vh);n.vh=d>=99?n.h:We(n.vh+g*Math.min(1,d*e)),!n.air&&d<99&&(n.speed-=n.speed*Math.abs(Math.sin(g))*(n.drift?.12:.55)*e),n.pos.x+=(Math.sin(n.vh)*n.speed+n.kx)*e,n.pos.z+=(Math.cos(n.vh)*n.speed+n.kz)*e;let _=Math.exp(-5*e);n.kx*=_,n.kz*=_,n.wobble>0&&(n.wobble=Math.max(0,n.wobble-e));let m=n.idx,p=o.main;if(n.ri=Hn(o,n.pos.x,n.pos.z,n.ri),n.lat=Pi(o,n.pos.x,n.pos.z,n.ri),en.length&&k_(n)){if(n.ride){dr(n,m);return}o=n.rd}dr(n,m);let w=o.L[n.ri],E=o.T[n.ri],v=o.ww[n.ri]-1.1,S=Math.sign(n.lat);if(Math.abs(n.lat)>v&&(o.fence[n.ri]&Ai(S)||Math.abs(n.lat)>v+14)){let R=S,L=Math.abs(n.lat)-v;n.pos.x-=w.x*L*R,n.pos.z-=w.z*L*R,n.lat=R*v;let D=Math.atan2(E.x,E.z),P=Math.cos(We(n.h-D))>=0?D:We(D+Math.PI);n.h=We(n.h+We(P-n.h)*Math.min(1,e*6)),n.vh=We(n.vh+We(P-n.vh)*Math.min(1,e*8)),n.speed-=n.speed*.9*e,n.scrape=.15;let N=n.kx*w.x+n.kz*w.z;N*R>0&&(n.kx-=w.x*N,n.kz-=w.z*N)}n.scrape>0&&(n.scrape-=e);let b=Qi(o,n.pos.x,n.pos.z,n.ri),y=o.main&&p&&ji.find(R=>jn(m,R.lip)<0&&jn(n.idx,R.lip)>=0),T=o.main&&gn[n.ri];if(y&&n.speed>0){n.speed<26&&(n.speed=26);let R=it[de(y.land+4)],L=Math.hypot(R.x-n.pos.x,R.z-n.pos.z),D=L/n.speed,P=(R.y-b+.5*Th*D*D)/D,N=Sl[de(y.lip-1)]*n.speed;n.air=!0,n.wasHop=!1,n.pos.y=Math.max(n.pos.y,b),n.vy=ne(Math.max(P,N),9,18),n.isPlayer&&Ce.jump()}else t.hop&&!n.air&&n.hopCd<=0&&(n.air=!0,n.vy=9,n.hopCd=.45,xn.hops++,n.wasHop=!0,n.hopSteer=Math.abs(t.steer)>.5?Math.sign(t.steer):0,n.isPlayer&&Ce.hop());if(n.air)if(n.vy-=Th*e,n.pos.y+=n.vy*e,!T&&n.pos.y<=b){n.pos.y=b,n.air=!1,n.wobble=Math.max(n.wobble,ne(-n.vy/40,.15,.4));let R=Math.abs(t.steer)>.5?Math.sign(t.steer):0;n.wasHop&&R&&R===n.hopSteer&&n.speed>15&&(n.drift=R,n.driftT=0,n.driftOff=0,n.isPlayer&&Ce.drift()),n.wasHop=!1,n.hopSteer=0,n.isPlayer&&n.vy<-12&&(Ce.land(),_s=.25),n.vy=0}else n.pos.y<b-14&&nd(n);else T?nd(n):n.pos.y=b;for(let R=0;R<ca.length;R++){let L=ca[R];if(L.rd!==o)continue;let D=g_(o,n.ri,L.i);D>=-2&&D<=2&&Math.abs(n.lat)<3.2&&(L.lane&&(n.padMask|=1<<R),n.boost<.6&&(n.boost=.9,n.isPlayer&&Ce.boost()))}for(let R of ur)R.off>0||(R.x-n.pos.x)**2+(R.z-n.pos.z)**2<7&&Math.abs(R.y-1.6-n.pos.y)<3&&(R.off=4,D_(R),n.item?n.isPlayer&&Ce.crate():([n.item,n.itemN]=Q_(n),n.isPlayer&&uy(n.item,n.itemN)));t.item&&n.item&&gd(n);let I=Math.cos(We(n.h-Math.atan2(E.x,E.z)));n.wrongWay=I<-.3&&n.speed>4?n.wrongWay+e:0}var Qf=[["acorn",1],["acorn",3],["pinecone",1],["branch",1]],j_=[[25,5,30,40],[30,12,35,23],[33,22,32,13],[35,35,25,5]];function Q_(n){let t=j_[ne(Fl(n),0,3)].slice();n.r.id==="rascal"&&(t[1]+=15);let e=Math.random()*t.reduce((i,s)=>i+s,0);for(let i=0;i<t.length;i++)if(e-=t[i],e<=0)return Qf[i].slice();return Qf[0].slice()}var xs=[],Sn=[],xn={spins:0,cones:0,branches:0,hops:0,coneHits:0,branchHits:0};function gd(n){let t=Math.sin(n.h),e=Math.cos(n.h);if(n.item==="acorn")n.boost=n.r.boost,n.isPlayer&&Ce.boost();else if(n.item==="pinecone"){let i=Math.max(0,n.speed)+42,s=ty();Ve.add(s),xs.push({m:s,owner:n,age:0,x:n.pos.x+t*2.6,z:n.pos.z+e*2.6,y:n.pos.y+1,vx:t*i,vz:e*i,idx:n.ri,rd:n.rd}),xn.cones++,(n.isPlayer||Il(n,40))&&Ce.toss()}else if(n.item==="branch"){let i=n.rd,s=n.pos.x-t*3.6,r=n.pos.z-e*3.6,a=Hn(i,s,r,n.ri,10,5);if(!(i.main&&gn[a])){let o=Math.atan2(i.T[a].x,i.T[a].z)+Math.PI/2+(Math.random()-.5)*.5,l=ey();if(l.position.set(s,Qi(i,s,r,a),r),l.rotation.y=o,Ve.add(l),Sn.push({m:l,owner:n,age:0,x:s,z:r,y:l.position.y,ax:Math.sin(o)*3.6,az:Math.cos(o)*3.6}),Sn.length>8){let c=Sn.shift();Ve.remove(c.m)}xn.branches++,(n.isPlayer||Il(n,40))&&Ce.drop()}}--n.itemN<=0&&(n.item=null,n.itemN=0)}var Il=(n,t)=>vt&&(n.pos.x-vt.pos.x)**2+(n.pos.z-vt.pos.z)**2<t*t;function ty(){let n=new Le;ot(n,.9,1.2,.9,8016432,0,0,0);for(let t of[-.35,.05,.45])ot(n,1.15,.22,.5,5913382,0,t,0),ot(n,.5,.22,1.15,5913382,0,t,0);return ot(n,.25,.3,.25,3811870,0,.75,0),n}function ey(){let n=new Le;ot(n,1.05,1,7.4,9067825,0,.5,0);for(let t of[-3.75,3.75])ot(n,.9,.85,.12,14267004,0,.5,t);ot(n,.45,.45,2,7031339,.7,.8,1.4).rotation.y=.7,ot(n,.45,.45,1.8,7031339,-.6,.8,-1.3).rotation.y=-.6;for(let[t,e,i]of[[1.3,1.1,2.1],[-1.1,1,-2],[.4,1.25,-.5],[-.3,1.1,3],[.6,1,-3]])ot(n,1.3,1,1.3,6269002,t,e,i);return n}function td(n,t){n.spin>0||(n.spin=1.15,n.boost=0,n.wobble=.35,xn.spins++,n.drift=0,n.driftT=0,n.isPlayer?(Ce.spin(),Nn("Spun out!",1e3),_s=.2):t&&t.isPlayer?(Ce.bonk(),Nn("Bonk!",700)):Il(n,40)&&Ce.bonk())}function ed(n,t,e){let i=n-(e.x-e.ax),s=t-(e.z-e.az),r=e.ax*2,a=e.az*2,o=ne((i*r+s*a)/(r*r+a*a),0,1);return(i-r*o)**2+(s-a*o)**2}function xd(n){for(let t=xs.length-1;t>=0;t--){let e=xs[t];e.age+=n,e.x+=e.vx*n,e.z+=e.vz*n;let i=e.rd;e.idx=Hn(i,e.x,e.z,e.idx,10,30);let s=Pi(i,e.x,e.z,e.idx),r=i.ww[e.idx]-.8;if(Math.abs(s)>r){let h=i.L[e.idx],f=e.vx*h.x+e.vz*h.z,u=Math.sign(s);f*u>0&&(e.vx-=2*f*h.x,e.vz-=2*f*h.z),e.x-=h.x*(Math.abs(s)-r)*u,e.z-=h.z*(Math.abs(s)-r)*u}let a=i.main&&gn[e.idx],o=!i.closed&&(e.idx>=i.n-2||e.idx<=0);e.y=a?e.y-20*n:Qi(i,e.x,e.z,e.idx)+.9;let l=null;for(let h of qe)if(!(h===e.owner&&e.age<.5)&&!(h.ride||h.fly)&&(h.pos.x-e.x)**2+(h.pos.z-e.z)**2<4.4&&Math.abs(h.pos.y+1-e.y)<2.5){l=h;break}let c=Sn.findIndex(h=>ed(e.x,e.z,h)<1.4&&Math.abs(h.y-e.y)<2);if(l&&(td(l,e.owner),xn.coneHits++),c>=0&&(Ve.remove(Sn[c].m),Sn.splice(c,1),vt&&(e.x-vt.pos.x)**2+(e.z-vt.pos.z)**2<2500&&Ce.crate()),l||c>=0||e.age>2.6||o||a&&e.age>1){Ve.remove(e.m),xs.splice(t,1);continue}e.m.position.set(e.x,e.y,e.z),e.m.rotation.x+=n*18,e.m.rotation.y=Math.atan2(e.vx,e.vz)}for(let t=Sn.length-1;t>=0;t--){let e=Sn[t];e.age+=n;for(let i of qe)if(!(i===e.owner&&e.age<.8)&&!(i.ride||i.fly)&&!(i.pos.y-e.y>.8)&&!(Math.abs(i.pos.y-e.y)>3)&&ed(i.pos.x,i.pos.z,e)<1.9*1.9){td(i,e.owner),xn.branchHits++,Ve.remove(e.m),Sn.splice(t,1);break}}}function _d(){for(let n of xs)Ve.remove(n.m);for(let n of Sn)Ve.remove(n.m);xs.length=0,Sn.length=0}function Zh(n,t){t&&n.driftT>fd&&(n.boost=Math.max(n.boost,n.driftT>Uh?1:.55),n.isPlayer&&(Ce.boost(),Nn(n.driftT>Uh?"SUPER TURBO!":"MINI TURBO!",800))),n.drift=0,n.driftT=0,n.driftOff=0}function nd(n){let t=ji.find(s=>Math.abs(jn(n.idx,s.lip))<40)||ji[0],e=de(t.land+3),i=ne(n.lat,-4,4);n.pos.set(it[e].x+jt[e].x*i,it[e].y,it[e].z+jt[e].z*i),n.prog+=jn(e,n.idx),n.idx=e,n.rd=Qe,n.ri=e,n.h=Math.atan2(ze[e].x,ze[e].z),n.speed=Math.max(10,n.speed*.5),n.air=!1,n.vy=0,n.kx=n.kz=0,n.vh=n.h,n.drift=0}var _s=0,ny=1.3,yl=.85;function yd(n){for(let t=0;t<n.length;t++)for(let e=t+1;e<n.length;e++){let i=n[t],s=n[e];if(i.ride||s.ride||i.fly||s.fly||Math.abs(i.pos.y-s.pos.y)>3||(i.pos.x-s.pos.x)**2+(i.pos.z-s.pos.z)**2>36)continue;let r=[Math.sin(i.h),Math.cos(i.h)],a=[Math.sin(s.h),Math.cos(s.h)],o=null;for(let y of[yl,-yl])for(let T of[yl,-yl]){let I=i.pos.x+r[0]*y,R=i.pos.z+r[1]*y,L=s.pos.x+a[0]*T,D=s.pos.z+a[1]*T,P=L-I,N=D-R,B=Math.hypot(P,N),z=ny*2-B;z>0&&(!o||z>o.pen)&&(o={pen:z,nx:B>1e-4?P/B:r[1],nz:B>1e-4?N/B:-r[0]})}if(!o)continue;let{pen:l,nx:c,nz:h}=o,f=i.r.weight,u=s.r.weight,d=1/f,g=1/u,_=d+g;i.pos.x-=c*l*d/_,i.pos.z-=h*l*d/_,s.pos.x+=c*l*g/_,s.pos.z+=h*l*g/_;let m=Math.sin(i.vh)*i.speed+i.kx,p=Math.cos(i.vh)*i.speed+i.kz,w=Math.sin(s.vh)*s.speed+s.kx,E=Math.cos(s.vh)*s.speed+s.kz,v=(w-m)*c+(E-p)*h,S=v<0?-(1+.35)*v/_:0;if((Math.abs(r[0]*c+r[1]*h)<.6||Math.abs(a[0]*c+a[1]*h)<.6)&&(S=Math.max(S,5.5/_)),S<=0)continue;let C=(y,T,I)=>{let R=I*c*S/T,L=I*h*S/T,D=[Math.sin(y.h),Math.cos(y.h)],P=R*D[0]+L*D[1];y.speed+=P,y.kx+=R-D[0]*P,y.kz+=L-D[1]*P;let N=Math.hypot(y.kx,y.kz);N>14&&(y.kx*=14/N,y.kz*=14/N),y.wobble=Math.max(y.wobble,ne(S/T/20,.12,.35))};C(i,f,-1),C(s,u,1),(i.isPlayer||s.isPlayer)&&Ce.bump(ne(S/10,.4,1.5))}}var Oh={};function iy(n,t){let e=Oh[t.kind];return e&&(e.who==="all"||e.who==="player"===n.isPlayer)?e.take:Math.random()<t.ai}function sy(n){if(n.fly)return{steer:0,throttle:1,item:!1,hop:!1};if(n.ride)return{steer:ne(-n.ride.lat*.3-n.ride.rh*2.5,-1,1),throttle:1,item:!1,hop:!1};let t=n.rd,e=n.ri,i=9+Math.max(0,n.speed)*.42,s=Math.round(i/t.seg);n.ai.laneT-=Ti;let r=4*t.rw[e]/Eh;n.ai.laneT<=0&&(n.ai.lane=ne(n.ai.lane+(Math.random()-.5)*4,-r,r),n.ai.laneT=1.5+Math.random()*2);for(let E of qe){if(E===n||E.rd!==t)continue;let v=E.prog-n.prog;v>0&&v*Ji<14&&Math.abs(E.lat-n.ai.lane)<2.8&&E.speed<n.speed+2&&(n.ai.lane=ne(E.lat+(E.lat>0?-3.4:3.4),-t.rw[e]+1.5,t.rw[e]-1.5),n.ai.laneT=1.2)}let a=n.ai.lane,o=null;if(t.main)for(let E of en){if(!E.mouthStart)continue;let v=jn(E.s0,n.idx);if(v>70||v<-30){n.ai.pick.delete(E);continue}n.ai.pick.has(E)||(n.ai.pick.set(E,iy(n,E)),n.ai.blane=E.kind==="cave"?(Math.random()-.5)*2:n.ai.padMiss?4.4:(Math.random()-.5)*1.2),!(!n.ai.pick.get(E)||v<-14)&&(v>8+Math.max(0,n.speed)*.3?a=E.side*(t.rw[e]-2):o=E)}t.main||(a=n.ai.blane);let l,c;if(o){let E=ne(Math.round((i-jn(o.s0,n.idx)*Ji)/o.seg),3,o.n-1);l=o.P[E].x+o.L[E].x*n.ai.blane,c=o.P[E].z+o.L[E].z*n.ai.blane}else if(t.main||e+s<=t.n-1){let E=ua(t,e+s);l=t.P[E].x+t.L[E].x*a,c=t.P[E].z+t.L[E].z*a}else if(t.next){let E=t.n-1,v=(e+s-E)*t.seg;l=t.P[E].x+t.T[E].x*v+t.L[E].x*a,c=t.P[E].z+t.T[E].z*v+t.L[E].z*a}else{let E=de(t.mi[t.n-1]+(e+s-(t.n-1))),v=t.side*(bn[E]-3);l=it[E].x+jt[E].x*v,c=it[E].z+jt[E].z*v}let h=Math.atan2(l-n.pos.x,c-n.pos.z),f=We(n.vh+We(n.h-n.vh)*.5),u=We(h-f),d=ua(t,e+22),g=Math.abs(We(Math.atan2(t.T[d].x,t.T[d].z)-Math.atan2(t.T[e].x,t.T[e].z))),_=1,m=pa(n);g>.75&&n.speed>m*(.74-(Ue.mult-1)*.12)&&(_=0),g>1.1&&n.speed>m*(.62-(Ue.mult-1)*.1)&&(_=-1),o&&o.kind==="cave"&&n.speed>m*.8&&(_=0);let p=!1,w=!1;if(n.item&&(n.ai.itemT-=Ti,n.item==="acorn"?n.ai.itemT<=0&&g<.4&&(p=!0,n.ai.itemT=1+Math.random()*4):n.item==="pinecone"?(qe.find(v=>v!==n&&v.prog-n.prog>4&&(v.prog-n.prog)*Ji<45&&Math.abs(v.lat-n.lat)<3.2)&&g<.3||n.ai.itemT<-8)&&(p=!0,n.ai.itemT=1.5+Math.random()*3):n.item==="branch"&&(qe.find(v=>v!==n&&n.prog-v.prog>2&&(n.prog-v.prog)*Ji<30)||n.ai.itemT<-6)&&(p=!0,n.ai.itemT=1.5+Math.random()*3)),!n.air&&Sn.length){let E=Math.sin(n.h),v=Math.cos(n.h);for(let S of Sn){let b=S.x-n.pos.x,C=S.z-n.pos.z,y=b*E+C*v,T=Math.abs(b*v-C*E);y>2&&y<3+Math.max(0,n.speed)*.22&&T<4&&(S.dodge===void 0&&(S.dodge=new Map),S.dodge.has(n)||S.dodge.set(n,Math.random()<.72),S.dodge.get(n)&&(w=!0))}}return{steer:ne(u*2.6,-1,1),throttle:_,item:p,hop:w}}var fi={},Ll=!1,Dl=!1,Ri={left:!1,right:!1,brake:!1},ma=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,vd=n=>n.target&&(n.target.tagName==="INPUT"||n.target.tagName==="TEXTAREA");addEventListener("keydown",n=>{vd(n)||(fi[n.code]=!0,["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&n.preventDefault(),(n.code==="Space"||n.code==="KeyX"||n.code==="KeyE")&&(Ll=!0),(n.code==="ShiftLeft"||n.code==="ShiftRight"||n.code==="KeyC"||n.code==="KeyJ")&&(Dl=!0),(n.code==="KeyP"||n.code==="Escape")&&(Xt==="race"||Xt==="paused")&&Kh(),ve.unlock())});addEventListener("keyup",n=>{fi[n.code]=!1});function ry(){let n=fi.ArrowLeft||fi.KeyA||Ri.left,t=fi.ArrowRight||fi.KeyD||Ri.right,e=fi.ArrowUp||fi.KeyW,i=fi.ArrowDown||fi.KeyS||Ri.brake,s={steer:(n?1:0)-(t?1:0),throttle:i?-1:e||ma?1:0,item:Ll,hop:Dl};return Ll=!1,Dl=!1,s}function ga(n,t,e){let i=document.getElementById(n);if(!i)return;let s=a=>{a.preventDefault(),i.classList.add("on"),t(),ve.unlock()},r=a=>{a.preventDefault(),i.classList.remove("on"),e&&e()};i.addEventListener("pointerdown",s),i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),i.addEventListener("pointerleave",r)}ga("t-left",()=>Ri.left=!0,()=>Ri.left=!1);ga("t-right",()=>Ri.right=!0,()=>Ri.right=!1);ga("t-brake",()=>Ri.brake=!0,()=>Ri.brake=!1);ga("t-item",()=>Ll=!0);ga("t-jump",()=>Dl=!0);ma&&document.body.classList.add("touch");var ay={bruno:{oscs:[["sawtooth",1,0],["square",.5,0]],base:34,perSpeed:2.2,filter:["lowpass",380,3],vol:1.1,chug:[9,.5]},pip:{oscs:[["square",1,0],["square",2,6]],base:92,perSpeed:5.4,filter:["bandpass",1300,1.2],vol:.6,chug:[0,0]},rascal:{oscs:[["sawtooth",1,0],["sawtooth",1,18]],base:52,perSpeed:3.2,filter:["lowpass",900,6],vol:.85,chug:[5,.35],wobble:[7,.06]},opal:{oscs:[["triangle",1,0],["sine",3,0]],base:120,perSpeed:9,filter:["lowpass",2600,1],vol:.75,chug:[0,0]}},ve={ctx:null,master:null,voices:{},muted:!1,unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=1,this.master.connect(this.ctx.destination)}catch{this.ctx=null}},voice(n){if(this.voices[n]||!this.ctx)return this.voices[n];let t=ay[n],e=this.ctx,i=e.createGain();i.gain.value=0;let s=e.createStereoPanner?e.createStereoPanner():null,r=e.createGain();r.gain.value=1;let a=e.createBiquadFilter();a.type=t.filter[0],a.frequency.value=t.filter[1],a.Q.value=t.filter[2];let o=t.oscs.map(([f,u,d])=>{let g=e.createOscillator();g.type=f,g.detune.value=d*10;let _=e.createGain();return _.gain.value=u===1?.6:.35,g.connect(_),_.connect(a),g.start(),{o:g,mult:u}});a.connect(r),r.connect(i),s?(i.connect(s),s.connect(this.master)):i.connect(this.master);let l=null,c=null;t.chug[0]&&(l=e.createOscillator(),l.type="square",l.frequency.value=t.chug[0],c=e.createGain(),c.gain.value=t.chug[1]*.5,l.connect(c),c.connect(r.gain),l.start());let h=null;if(t.wobble){h=e.createOscillator(),h.frequency.value=t.wobble[0];let f=e.createGain();f.gain.value=t.wobble[1]*1200,h.connect(f),o.forEach(({o:u})=>f.connect(u.detune)),h.start()}return this.voices[n]={E:t,out:i,pan:s,f:a,oscs:o,lfo:l}},tone(n,t,e="square",i=.06,s=0){if(!this.ctx||this.muted)return;let r=this.ctx.currentTime,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=e,a.frequency.setValueAtTime(n,r),s&&a.frequency.linearRampToValueAtTime(n+s,r+t),o.gain.setValueAtTime(i,r),o.gain.exponentialRampToValueAtTime(1e-4,r+t),a.connect(o),o.connect(this.master||this.ctx.destination),a.start(r),a.stop(r+t+.02)},engines(n,t){if(!this.ctx)return;let e=this.ctx.currentTime,i=$t.position,s=new ae().setFromMatrixColumn($t.matrixWorld,0),r=new Set;for(let a of n){let o=this.voice(a.r.id);if(!o)continue;r.add(a.r.id);let l=o.E,c=Math.abs(a.speed),h=.04*l.vol,f=0,u=1;if(!a.isPlayer){let _=a.pos.x-i.x,m=a.pos.y-i.y,p=a.pos.z-i.z,w=Math.hypot(_,m,p),E=ne(1-(w-6)/70,0,1);h*=.55*E*E,f=ne((_*s.x+p*s.z)/Math.max(w,1),-1,1)*.8;let v=vt?(Math.sin(a.h)*a.speed-Math.sin(vt.h)*vt.speed)*_+(Math.cos(a.h)*a.speed-Math.cos(vt.h)*vt.speed)*p:0;u=1-ne(v/Math.max(w,1)/120,-.12,.12)}let d=a.air?1.15:1,g=(l.base+c*l.perSpeed)*d*u;o.oscs.forEach(({o:_,mult:m})=>_.frequency.setTargetAtTime(g*m,e,.06)),o.lfo&&o.lfo.frequency.setTargetAtTime(l.chug[0]*(.7+c/25),e,.1),o.f.frequency.setTargetAtTime(l.filter[1]*(.8+c/60),e,.1),o.out.gain.setTargetAtTime(t&&!this.muted?h:0,e,.08),o.pan&&o.pan.pan.setTargetAtTime(f,e,.08)}for(let a in this.voices)r.has(a)||this.voices[a].out.gain.setTargetAtTime(0,e,.08)}},Ce={beep:n=>ve.tone(n?880:440,n?.5:.22,"square",.07),boost:()=>ve.tone(220,.45,"sawtooth",.05,500),pickup:()=>[660,880,1320].forEach((n,t)=>setTimeout(()=>ve.tone(n,.12,"square",.09),t*70)),crate:()=>ve.tone(300,.1,"triangle",.08,-120),jump:()=>ve.tone(330,.35,"square",.06,440),hop:()=>ve.tone(420,.14,"square",.05,260),drift:()=>ve.tone(180,.25,"sawtooth",.04,60),toss:()=>ve.tone(700,.18,"triangle",.06,-300),drop:()=>ve.tone(140,.15,"triangle",.08,-40),spin:()=>{for(let n=0;n<5;n++)setTimeout(()=>ve.tone(520-n*70,.1,"square",.05),n*90)},bonk:()=>ve.tone(240,.16,"square",.06,-140),land:()=>{ve.tone(90,.18,"triangle",.1,-30),ve.tone(60,.12,"square",.04)},bump:(()=>{let n=0;return(t=1)=>{let e=performance.now();e-n>200&&(n=e,ve.tone(120,.14,"triangle",.07*t,-50),ve.tone(70,.1,"square",.03*t))}})(),lap:()=>[523,659,784].forEach((n,t)=>setTimeout(()=>ve.tone(n,.15,"square",.05),t*110)),finish:()=>[523,659,784,1047].forEach((n,t)=>setTimeout(()=>ve.tone(n,.22,"square",.06),t*150))},kt=n=>document.getElementById(n),De={menu:kt("menu"),hud:kt("hud"),results:kt("results"),pause:kt("pause"),msg:kt("msg"),lap:kt("lap"),time:kt("time"),pos:kt("pos"),item:kt("item"),itemN:kt("item-n"),mini:kt("mini"),wrong:kt("wrong")},ms=n=>{let t=Math.floor(n/60),e=n-t*60;return`${t}:${e<10?"0":""}${e.toFixed(1)}`},Bh=["1st","2nd","3rd","4th"],Nl="",oy=kt("t-item"),ly={acorn:'<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true"><rect x="4" y="2" width="8" height="2" fill="#6b4a2b"/><rect x="2" y="4" width="12" height="3" fill="#6b4a2b"/><rect x="7" y="0" width="2" height="2" fill="#5a3b26"/><rect x="3" y="7" width="10" height="4" fill="#c98a3a"/><rect x="4" y="11" width="8" height="2" fill="#c98a3a"/><rect x="6" y="13" width="4" height="2" fill="#c98a3a"/><rect x="4" y="8" width="2" height="2" fill="#e3ae62"/></svg>',pinecone:'<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true"><rect x="7" y="0" width="2" height="2" fill="#3a2a1e"/><rect x="5" y="2" width="6" height="2" fill="#7a5230"/><rect x="4" y="4" width="8" height="2" fill="#5a3b26"/><rect x="3" y="6" width="10" height="2" fill="#7a5230"/><rect x="3" y="8" width="10" height="2" fill="#5a3b26"/><rect x="4" y="10" width="8" height="2" fill="#7a5230"/><rect x="5" y="12" width="6" height="2" fill="#5a3b26"/><rect x="6" y="14" width="4" height="2" fill="#7a5230"/><rect x="5" y="6" width="2" height="1" fill="#a87a4a"/><rect x="9" y="10" width="2" height="1" fill="#a87a4a"/></svg>',branch:'<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true"><rect x="1" y="9" width="14" height="3" fill="#6b4a2b"/><rect x="1" y="11" width="14" height="1" fill="#4a3424"/><rect x="4" y="6" width="2" height="3" fill="#5a3b26"/><rect x="10" y="5" width="2" height="4" fill="#5a3b26"/><rect x="2" y="4" width="4" height="3" fill="#4f8a3a"/><rect x="9" y="2" width="5" height="4" fill="#4f8a3a"/><rect x="12" y="12" width="2" height="2" fill="#5a3b26"/></svg>'},Md={acorn:"ACORN",pinecone:"PINECONE",branch:"BRANCH"},cy=kt("t-item-icon"),hy=kt("t-item-label"),yh=kt("item-icon");function uy(n,t){Ce.pickup(),Nn(t>1?"3 ACORNS!":Md[n]+"!",1100),De.item.classList.remove("pop"),De.item.offsetWidth,De.item.classList.add("pop"),Nl=""}function Jh(){let n=vt,t=ne(Math.floor(n.prog/Mt)+1,1,cr),e=`${t}|${ms(zn)}|${Fl(n)}|${n.item}|${n.itemN}|${n.wrongWay>1.2}`;if(e===Nl)return;Nl=e,De.lap.textContent=`Lap ${t}/${cr}`,De.time.textContent=ms(zn),De.pos.textContent=Bh[Fl(n)];let i=ly[n.item||"acorn"];yh.dataset.k!==(n.item||"")&&(yh.innerHTML=i,cy.innerHTML=i,yh.dataset.k=n.item||""),De.item.classList.toggle("has",!!n.item),oy.classList.toggle("ready",!!n.item),hy.textContent=n.item?Md[n.item]+(n.itemN>1?" \xD7"+n.itemN:""):"ITEM",De.itemN.textContent=n.itemN>1?`\xD7${n.itemN}`:"",De.wrong.classList.toggle("on",n.wrongWay>1.2)}function Nn(n,t=1200,e=!1){De.msg.textContent=n,De.msg.className="on"+(e?" big":""),clearTimeout(Nn.t),Nn.t=setTimeout(()=>De.msg.className="",t)}var Ke={cv:De.mini,bg:null,sx:0,sz:0,sc:1};function Sd(n,t,e,i,s,r=["#141e15","#c29560"],a=!0){n.lineJoin="round",n.lineCap="round";let o=(h,f,u,d)=>{n.strokeStyle=d,n.lineWidth=u,n.beginPath();for(let g=h;g<=f;g++){let _=t[g%t.length],[m,p]=e(_.x,_.z);g===h?n.moveTo(m,p):n.lineTo(m,p)}n.stroke()},l=t.length,c=h=>t[h%l].y>8;if(o(0,l,i,r[0]),o(0,l,s,r[1]),a){for(let h=0;h<l;h++)if(c(h)&&!c(h-1+l)){let f=h;for(;c(f+1)&&f<h+l;)f++;o(h,f,i+2,r[0]),o(h,f,s,r[1])}}}function fy(){let e=1/0,i=-1/0,s=1/0,r=-1/0;for(let h of it)e=Math.min(e,h.x),i=Math.max(i,h.x),s=Math.min(s,h.z),r=Math.max(r,h.z);Ke.sc=130/Math.max(i-e,r-s),Ke.sx=10-e*Ke.sc+(130-(i-e)*Ke.sc)/2,Ke.sz=10-s*Ke.sc+(130-(r-s)*Ke.sc)/2,Ke.cv.width=Ke.cv.height=150;let a=document.createElement("canvas");a.width=a.height=150;let o=a.getContext("2d");if(Sd(o,it.map((h,f)=>gn[f]?{x:h.x,z:h.z,y:h.y}:h),ta,9,5,void 0,!fe.big),Vt){let h=[...Vt.lin.P,...Vt.pos.filter((f,u)=>u%10===0),...Vt.lout.P];o.lineJoin="round",o.lineCap="round";for(let[f,u]of[[6,"#141e15"],[3,"#d8343a"]])o.strokeStyle=u,o.lineWidth=f,o.beginPath(),h.forEach((d,g)=>{let[_,m]=ta(d.x,d.z);g?o.lineTo(_,m):o.moveTo(_,m)}),o.stroke()}for(let h of ji){let[f,u]=ta(it[h.lip].x,it[h.lip].z);o.fillStyle="#3fa0b8",o.fillRect(f-3,u-3,6,6)}let[l,c]=ta(it[0].x,it[0].z);o.fillStyle="#fff",o.fillRect(l-2,c-5,4,10),Ke.bg=a}function dy(n,t=120){let i=new os(n.ctrl.map(p=>new ae(p[0],p[1],p[2])),!0,"centripetal").getSpacedPoints(400).slice(0,400),s=1/0,r=-1/0,a=1/0,o=-1/0;for(let p of i)s=Math.min(s,p.x),r=Math.max(r,p.x),a=Math.min(a,p.z),o=Math.max(o,p.z);let l=12,c=(t-l*2)/Math.max(r-s,o-a),h=l+(t-l*2-(r-s)*c)/2-s*c,f=l+(t-l*2-(o-a)*c)/2-a*c,u=document.createElement("canvas");u.width=u.height=t;let d=u.getContext("2d"),g=sd[n.theme];d.fillStyle="#"+new Ut(g.terrain[0][0]).getHexString(),d.fillRect(0,0,t,t),Sd(d,i,(p,w)=>[p*c+h,w*c+f],10,6,["#141e15","#"+new Ut(g.road[0]).getHexString()],!n.big);let[_,m]=[i[0].x*c+h,i[0].z*c+f];return d.fillStyle="#fff",d.fillRect(_-2,m-6,4,12),u.toDataURL()}var ta=(n,t)=>[n*Ke.sc+Ke.sx,t*Ke.sc+Ke.sz];function bd(){let n=Ke.cv.getContext("2d");n.clearRect(0,0,Ke.cv.width,Ke.cv.height),n.drawImage(Ke.bg,0,0);for(let t of[...qe].sort((e,i)=>e.isPlayer-i.isPlayer)){let[e,i]=ta(t.pos.x,t.pos.z);n.fillStyle=t.r.color,n.strokeStyle=t.isPlayer?"#ffd36b":"#1d2a1f",n.lineWidth=t.isPlayer?3:2;let s=t.isPlayer?9:7;n.strokeRect(e-s/2,i-s/2,s,s),n.fillRect(e-s/2,i-s/2,s,s)}}function py(){let t=new on(160,160),e=new Xs;e.background=new Ut(2504231),e.add(new $s(15267583,7044933,2.2));let i=new js(16774368,2.2);i.position.set(1,1.4,1.2),e.add(i);let s=new $e(32,1,.1,100);s.position.set(4.6,4.2,6.6),s.lookAt(0,1.7,0);let r=new Uint8Array(25600*4),a={};for(let o of hr){let l=ud(o);l.g.rotation.y=.15,e.add(l.g),Vn.setRenderTarget(t),Vn.render(e,s),Vn.readRenderTargetPixels(t,0,0,160,160,r),e.remove(l.g);let c=document.createElement("canvas");c.width=c.height=160;let h=c.getContext("2d"),f=h.createImageData(160,160);for(let u=0;u<160;u++)f.data.set(r.subarray((159-u)*160*4,(160-u)*160*4),u*160*4);h.putImageData(f,0,0),a[o.id]=c.toDataURL()}return Vn.setRenderTarget(null),t.dispose(),a}function my(){let n=py(),t=kt("racers"),e=r=>`<span class="bar"><i style="width:${Math.round(r*100)}%"></i></span>`,i=(r,a,o)=>ne((r-a)/(o-a),.12,1);t.innerHTML=hr.map(r=>`
    <button class="racer" data-id="${r.id}">
      <img src="${n[r.id]}" alt="">
      <span class="rn">${r.name}</span><span class="rk">${r.kind}</span>
      <span class="stats">
        <span>Speed</span>${e(i(r.top,27.5,31.5))}
        <span>Accel</span>${e(i(r.accel,11,17.5))}
        <span>Turning</span>${e(i(r.turn,1.7,2.5))}
        <span>Weight</span>${e(i(r.weight,.6,1.6))}
      </span>
      <span class="rb">${r.blurb}</span>
    </button>`).join(""),t.querySelectorAll(".racer").forEach(r=>r.addEventListener("click",()=>{ve.unlock(),$h(r.dataset.id)}));let s=kt("tracks");s.innerHTML=Rl.map(r=>`
    <button class="track" data-id="${r.id}" aria-pressed="false">
      <img src="${dy(r)}" alt="">
      <span class="tn">${r.name}</span><span class="tb">${r.blurb}${(r.laps||3)!==3?` \xB7 ${r.laps} laps`:""}</span><span class="tt" data-best="${r.id}"></span>
    </button>`).join(""),s.querySelectorAll(".track").forEach(r=>r.addEventListener("click",()=>{ve.unlock(),Ey(r.dataset.id)})),kt("speeds").innerHTML='<span class="spd-l">Speed</span>'+oa.map(r=>`<button class="spd" data-id="${r.id}" aria-pressed="false">${r.name}</button>`).join(""),document.querySelectorAll(".spd").forEach(r=>r.addEventListener("click",()=>{ve.unlock(),Hh(r.dataset.id)})),Hh(vs.get("critterkart-speed")||"easy"),zl(),kt("controls").innerHTML=ma?"Gas is automatic. <b>\u25C0 \u25B6</b> steer \xB7 <b>Jump</b> hops branches \xB7 <b>Item</b> uses your prize \xB7 <b>Brake</b> slows.<br>Drift: tap <b>Jump</b>, turn in the air, and keep holding as you land. The drift follows the bend for you. Let go after the sparks turn blue or orange for a boost.":"<b>\u2191</b> / W gas \xB7 <b>\u2193</b> / S brake \xB7 <b>\u2190 \u2192</b> steer \xB7 <b>Space</b> use item \xB7 <b>Shift</b> / C jump \xB7 <b>P</b> pause \xB7 <b>F</b> full screen<br>Drift: jump, turn in the air, keep holding as you land. The drift follows the bend for you. Let go after the sparks turn blue or orange for a boost."}var vs={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,t){try{localStorage.setItem(n,t)}catch{}}},or={endpoint:"https://script.google.com/macros/s/AKfycbz3hC8h7GBVOdxbrVbQqtGk5qSY6XHyEmRoqYtrmfn3VXKYvr4rxbqqStQZpNvQEC8/exec",game:"critter-kart"},gy="ck-14",wd=4e5,Bl=(n=fe.id,t=Ue.id)=>(Rl.findIndex(e=>e.id===n)+1)*10+oa.findIndex(e=>e.id===t)+1,xy=n=>Math.max(1,Math.round(wd-n*1e3)),_y=n=>(wd-n)/1e3,sa={get(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}},set(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}},yy=n=>String(n||"").replace(/[\u0000-\u001f<>"`\\]/g,"").replace(/\s+/g," ").trim().slice(0,18),zh=n=>xh.check(n).ok;function Ed(){let n=["Turbo","Mighty","Lucky","Speedy","Frosty","Zippy","Rowdy","Blazing","Sneaky","Cosmic"],t=["Bear","Fox","Raccoon","Possum","Badger","Otter","Moose","Owl","Chipmunk","Beaver"],e=i=>i[Math.random()*i.length|0];for(let i=0;i<20;i++){let s=e(n)+" "+e(t)+" "+(10+(Math.random()*90|0));if(zh(s))return s}return"Speedy Otter 12"}var vy=n=>{let t=2166136261,e=n.toLowerCase();for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return"n"+(t>>>0).toString(36)+e.length.toString(36)},un={d:null,init(){this.d=sa.get("critterkart_racer")||{},this.d.dev||(this.d.dev="d"+Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4)),(!this.d.auto||!zh(this.d.auto))&&(this.d.auto=Ed()),(typeof this.d.name!="string"||this.d.name&&!zh(this.d.name))&&(this.d.name=""),this.save()},save(){sa.set("critterkart_racer",this.d)},display(){return this.d.name||this.d.auto},pid(){return this.d.name?vy(this.d.name):this.d.dev}},Ms={q:[],sid:Math.random().toString(36).slice(2,10),busy:!1,wait:0,on:!1,init(){this.on=!!or.endpoint&&(!Ci||/[?&]stats\b/.test(location.search)),this.q=(sa.get("critterkart_tq")||[]).slice(-200),addEventListener("online",()=>{this.wait=0,this.flush()}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.flush(!0):this.flush()}),this.q.length&&setTimeout(()=>this.flush(),1500)},uid:()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8),track(n,t){if(!this.on)return;let e=Object.assign({id:this.uid(),ts:Date.now(),type:n,game:or.game,v:gy,pid:un.pid(),sid:this.sid,name:un.display(),named:un.d.name?1:0,touch:ma?1:0},t);this.q.push(e),this.q.length>200&&this.q.splice(0,this.q.length-200),sa.set("critterkart_tq",this.q),clearTimeout(this.tm),this.tm=setTimeout(()=>this.flush(),n==="end"||n==="open"?0:1500)},url(n){let t=or.endpoint;return t+(t.includes("?")?"&":"?")+"action=log&d="+encodeURIComponent(JSON.stringify({events:n}))},async flush(n){if(!this.on||!this.q.length||this.busy||navigator.onLine===!1)return;let t=Math.min(10,this.q.length);for(;t>1&&this.url(this.q.slice(0,t)).length>6e3;)t--;let e=this.q.slice(0,t),i=this.url(e);if(n){try{fetch(i,{credentials:"omit",keepalive:!0,cache:"no-store"})}catch{}return}this.busy=!0;try{let s=window.AbortController?new AbortController:null,r=setTimeout(()=>s&&s.abort(),15e3),a=await fetch(i,{credentials:"omit",cache:"no-store",redirect:"follow",signal:s&&s.signal});clearTimeout(r);let o=await a.json();if(!o||!o.ok)throw new Error("bad reply");let l=new Set(e.map(c=>c.id));this.q=this.q.filter(c=>!l.has(c.id)),sa.set("critterkart_tq",this.q),this.wait=0}catch{this.wait=Math.min(6e4,(this.wait||2500)*2),setTimeout(()=>this.flush(),this.wait)}this.busy=!1,this.q.length&&!this.wait&&setTimeout(()=>this.flush(),300)},async top(n,t=5){if(!or.endpoint)return null;let e=or.endpoint+"?"+new URLSearchParams({action:"leaderboard",game:or.game,level:n,limit:t}),i=window.AbortController?new AbortController:null,s=setTimeout(()=>i&&i.abort(),12e3),r=await fetch(e,{credentials:"omit",cache:"no-store",signal:i&&i.signal});return clearTimeout(s),((await r.json()).top||[]).map(o=>({name:o.name,pid:o.pid,time:_y(o.score)})).filter(o=>o.time>0)}};function Ul(){let n=kt("pname");n&&(document.activeElement!==n&&(n.value=un.d.name),n.placeholder=un.d.auto)}function Vh(n){let t=kt("pname-note");t&&(t.textContent=n||"")}function vh(){let n=kt("pname");if(!n)return;let t=yy(n.value);if(t){let e=xh.check(t);if(!e.ok){n.value="",un.d.name="",un.save(),Vh(e.reason==="contact"?"No phone numbers or links in names, please.":"Let\u2019s pick a different name."),Ul();return}}t&&Vh(""),t!==un.d.name&&(un.d.name=t,un.save(),Ms.track("name",{})),Ul()}function My(){let n=kt("pname");n&&(n.addEventListener("change",vh),n.addEventListener("blur",vh),n.addEventListener("keydown",t=>{t.key==="Enter"&&(vh(),n.blur())}),kt("reroll").addEventListener("click",()=>{un.d.auto=Ed(),un.d.name="",un.save(),Vh(""),Ul()}),Ul())}var id=0;async function Sy(n){let t=++id,e=kt("res-top-list"),i=kt("res-top-t");if(!e)return;i.textContent=`${fe.name} \xB7 ${Ue.name}`,e.innerHTML='<li class="dim">Loading\u2026</li>';let s;try{s=await Ms.top(Bl(),5)}catch{s=null}if(t!==id)return;if(!s){e.innerHTML='<li class="dim">Leaderboard offline. Your time is saved and will upload later.</li>';return}let r=un.pid().slice(0,4),a=s.find(l=>l.pid===r);n&&(!a||n<a.time)&&(s=s.filter(l=>l.pid!==r),s.push({name:un.display(),pid:r,time:n}),s.sort((l,c)=>l.time-c.time),s=s.slice(0,5));let o=l=>String(l).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]);e.innerHTML=s.length?s.map((l,c)=>`<li class="${l.pid===r?"me":""}"><span>${c+1}</span><span>${o(l.name)}</span><span>${by(l.time)}</span></li>`).join(""):'<li class="dim">No times yet. Be the first!</li>'}var by=n=>{let t=Math.floor(n/60),e=n-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`},Mh={},Td=n=>"critterkart-best-"+n+(Ue.id==="easy"?"":"-"+Ue.id),Ad=(n=fe.id)=>parseFloat(vs.get(Td(n))||(n==="ridge"&&Ue.id==="easy"?vs.get("critterkart-best"):""))||0,wy=(n,t=fe.id)=>vs.set(Td(t),String(n));function Hh(n){Ue=oa.find(t=>t.id===n)||oa[0],vs.set("critterkart-speed",Ue.id),document.querySelectorAll(".spd").forEach(t=>{let e=t.dataset.id===Ue.id;t.classList.toggle("on",e),t.setAttribute("aria-pressed",String(e))}),zl()}function zl(){document.querySelectorAll(".track").forEach(n=>{let t=n.dataset.id===fe.id;n.classList.toggle("on",t),n.setAttribute("aria-pressed",String(t))}),document.querySelectorAll("[data-best]").forEach(n=>{let t=Ad(n.dataset.best);n.textContent=t?`Best ${ms(t)}`:""})}function Ey(n){fe&&fe.id===n||(kt("loading").classList.add("on"),setTimeout(()=>{qh(n),Vl(xa),vs.set("critterkart-track",n),zl(),kt("loading").classList.remove("on")},30))}var Xt="menu",qe=[],vt=null,zn=0,El=0,Gh=0,xa="bruno",vn=0,Ty=new ae,Mn=0,Qr=0,Sh=[0,1,2].map(()=>({pos:new ae,nrm:new ae,tan:new ae,lat:new ae}));function Fl(n){return[...qe].sort((e,i)=>e.finished!==i.finished?e.finished?-1:1:e.finished?e.finishTime-i.finishTime:i.prog+i.lat*0-e.prog).indexOf(n)}var ra=new zr(16773576,0,90,.55,.6,1);ra.position.set(0,2.2,1.2);ra.target.position.set(0,0,22);function Vl(n){qe.forEach(s=>Ve.remove(s.v.g)),qe=[];let e=[...hr.filter(s=>s.id!==n),hr.find(s=>s.id===n)],i=[[Mt-6,-3.2],[Mt-6,3.2],[Mt-14,-3.2],[Mt-14,3.2]];e.forEach((s,r)=>{let a=new Fh(s,r===3);a.place(i[r][0],i[r][1]),a.ai.skill=[.97,.95,.93][r]||1,qe.push(a)}),vt=qe[3],vt.v.g.add(ra,ra.target),ra.intensity=Bt.night?260:0}function $h(n){xa=n,_d(),Vl(n),Xt="countdown",El=3.999,zn=0,Nl="",De.menu.classList.remove("on"),De.results.classList.remove("on"),De.hud.classList.add("on"),document.body.classList.add("racing"),vn=vt.h,Ty.set(0,0,0),Mn=vt.pos.y+4,ur.forEach(e=>e.off=0),Jh();let t=Bl();Mh[t]=(Mh[t]||0)+1,Ms.track("start",{level:t,attempt:Mh[t],special:hr.findIndex(e=>e.id===n)+1})}function Kh(){Xt==="race"?(Xt="paused",De.pause.classList.add("on")):Xt==="paused"&&(Xt="race",De.pause.classList.remove("on"),Al=performance.now())}kt("resume").addEventListener("click",Kh);kt("quit").addEventListener("click",()=>{De.pause.classList.remove("on"),Ld()});kt("again").addEventListener("click",()=>$h(xa));kt("change").addEventListener("click",Ld);kt("mute").addEventListener("click",()=>{ve.unlock(),ve.muted=!ve.muted,kt("mute").classList.toggle("off",ve.muted)});var aa=document.documentElement,Rd=!!(aa.requestFullscreen||aa.webkitRequestFullscreen)&&(document.fullscreenEnabled||document.webkitFullscreenEnabled),Cd=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);function Pd(){if(!Rd)return;if(Cd()){(document.exitFullscreen||document.webkitExitFullscreen).call(document);return}let n=(aa.requestFullscreen||aa.webkitRequestFullscreen).call(aa,{navigationUI:"hide"});n&&n.then&&n.then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}Rd&&document.body.classList.add("can-fs");kt("fs").addEventListener("click",()=>{ve.unlock(),Pd(),kt("fs").blur()});var Id=()=>{kt("fs").classList.toggle("on",Cd()),setTimeout(kh,50)};document.addEventListener("fullscreenchange",Id);document.addEventListener("webkitfullscreenchange",Id);addEventListener("keydown",n=>{n.code==="KeyF"&&!vd(n)&&Pd()});document.addEventListener("visibilitychange",()=>{document.hidden&&Xt==="race"&&Kh()});function Ld(){(Xt==="race"||Xt==="paused"||Xt==="countdown")&&Ms.track("quit",{level:Bl(),secs:+zn.toFixed(2)}),_d(),Xt="menu",De.hud.classList.remove("on"),De.results.classList.remove("on"),De.menu.classList.add("on"),document.body.classList.remove("racing"),zl()}function Dd(){Xt="results",De.hud.classList.remove("on"),document.body.classList.remove("racing");let n=[...qe].sort((i,s)=>i.finished!==s.finished?i.finished?-1:1:i.finished?i.finishTime-s.finishTime:s.prog-i.prog),t=n.indexOf(vt);kt("res-title").textContent=(t===0?"You won!":`You finished ${Bh[t]}`)+(Ue.id==="easy"?"":` \xB7 ${Ue.name}`),kt("res-list").innerHTML=n.map((i,s)=>{let r=i.finished?ms(i.finishTime):"~"+ms(zn*(cr*Mt)/Math.max(1,i.prog));return`<li class="${i.isPlayer?"me":""}"><span>${Bh[s]}</span><span><i style="background:${i.r.color}"></i>${i.r.name}</span><span>${r}</span></li>`}).join("");let e=Ad();!e||vt.finishTime<e?(wy(vt.finishTime),kt("res-best").textContent=`New best race time: ${ms(vt.finishTime)}`):kt("res-best").textContent=`Best race: ${ms(e)}`,De.results.classList.add("on"),Sy(vt.finishTime)}function Tl(n){let t=Xt==="race"||Xt==="finish";for(let e of qe){let i;if(t?e.isPlayer&&Xt==="race"&&!e.autopilot?i=ry():i=sy(e):i={steer:0,throttle:0,item:!1},!e.isPlayer&&t){let r=e.prog-vt.prog;e.ai.skill=ne(e.ai.skill+(r>70?-.02:r<-110?.02:0)*n,.86,1.04)}let s=Math.floor(e.prog/Mt);md(e,i,n),t&&!e.finished&&(e.prog>=cr*Mt?(e.finished=!0,e.finishTime=zn,e.isPlayer&&Ay()):e.isPlayer&&Math.floor(e.prog/Mt)>s&&s>=0&&(Ce.lap(),Nn(Math.floor(e.prog/Mt)===cr-1?"Final lap!":`Lap ${Math.floor(e.prog/Mt)+1}`,1300,!0)))}yd(qe),xd(n),t&&(zn+=n);for(let e of ur)e.off>0&&(e.off-=n)}function Ay(){Xt="finish",Gh=3,Ce.finish();let n=qe.filter(t=>t.finished&&t!==vt&&t.finishTime<=vt.finishTime).length+1;Ms.track("end",{level:Bl(),win:1,score:xy(vt.finishTime),secs:+vt.finishTime.toFixed(2),stars:n,special:hr.findIndex(t=>t.id===vt.r.id)+1}),Nn("FINISH!",2600,!0),vt.autopilot=!0}function ea(n){let t=vt;if(Ci&&window.__ckLook)return;if(Qr&&Xt==="menu"&&($t.up.set(0,1,0),Qr=0),Xt==="menu"){let p=performance.now()/1e3*.12,w=it[0].x,E=it[0].z;$t.position.set(w+Math.sin(p)*26,it[0].y+9,E+Math.cos(p)*26),$t.lookAt(w,it[0].y+2,E);return}if(t.ride){let p=t.ride,w=gs(p.s-8.5,Sh[0]),E=gs(p.s+7,Sh[1]),v=gs(p.s,Sh[2]),S=p.lat*.85-Math.sin(p.rh)*6;$t.position.copy(w.pos).addScaledVector(w.nrm,4).addScaledVector(w.lat,S),$t.up.copy(v.nrm),$t.lookAt(E.pos.x+E.nrm.x*1.6+E.lat.x*p.lat,E.pos.y+E.nrm.y*1.6+E.lat.y*p.lat,E.pos.z+E.nrm.z*1.6+E.lat.z*p.lat),vn=t.vh,Mn=$t.position.y,Qr=1;let b=($t.aspect<1.2?80:68)+5+Ue.cam*2;Math.abs($t.fov-b)>.1&&($t.fov+=(b-$t.fov)*Math.min(1,n*6),$t.updateProjectionMatrix());return}if(Qr){let p=Math.acos(ne($t.up.y,-1,1));p<.02?($t.up.set(0,1,0),Qr=0):(Ki.crossVectors($t.up,pd),Ki.lengthSq()<1e-8&&Ki.set(Math.cos(vn),0,-Math.sin(vn)),Pl.setFromAxisAngle(Ki.normalize(),Math.min(p,4.5*n)),$t.up.applyQuaternion(Pl).normalize())}if(t.fly){vn+=We(t.vh-vn)*(1-Math.exp(-3*n)),Mn+=(t.pos.y+4.5-Mn)*(1-Math.exp(-6*n)),$t.position.set(t.pos.x-Math.sin(vn)*10,Mn,t.pos.z-Math.cos(vn)*10),$t.lookAt(t.pos.x,t.pos.y+1.2,t.pos.z);return}vn+=We(t.vh-vn)*(1-Math.exp(-4.5*n));let e=8.8+Ue.cam,i=4.3+Ue.cam*.25,s=t.pos.x-Math.sin(vn)*e,r=t.pos.z-Math.cos(vn)*e,a=t.rd,o=Hn(a,s,r,t.ri,30,8),l=Pi(a,s,r,o),c=a.ww[o]-.9,h=!a.closed&&(o===0||o===a.n-1);if(Math.abs(l)>c&&!h&&a.fence[o]&Ai(Math.sign(l))){let p=Math.sign(l)*(Math.abs(l)-c);s-=a.L[o].x*p,r-=a.L[o].z*p}let f=Qi(a,s,r,o)+2.4,u=Math.max(t.pos.y+i,f);Mn+=(u-Mn)*(1-Math.exp(-7*n)),Mn=Math.max(Mn,f),a.arch[o]&&(Mn=Math.min(Mn,a.P[o].y+(a.main?7:6)));let d=0;_s>0&&(_s-=n,d=(Math.random()-.5)*_s*1.6),$t.position.set(s,Mn+d,r);let g=t.pos.x+Math.sin(t.vh)*7,_=t.pos.z+Math.cos(t.vh)*7;$t.lookAt(g,t.pos.y+1.6,_);let m=($t.aspect<1.2?80:68)+(t.boost>0?7:0)+Ue.cam*2;Math.abs($t.fov-m)>.1&&($t.fov+=(m-$t.fov)*Math.min(1,n*6),$t.updateProjectionMatrix())}var Al=performance.now(),bh=0,wh=-1,Ry=new we;function Nd(n){if(requestAnimationFrame(Nd),Ci&&window.__ckHold){Al=n;return}let t=Math.min(.1,(n-Al)/1e3);if(Al=n,Xt==="paused"){Vn.render(Ve,$t);return}if(Xt==="countdown"){El-=t;let s=Math.ceil(El);s!==wh&&(wh=s,s>=1&&s<=3&&(Nn(String(s),900,!0),Ce.beep(!1))),El<=0&&(Xt="race",wh=-1,Nn("GO!",800,!0),Ce.beep(!0))}if(Xt!=="menu"&&Xt!=="results"){for(bh+=t;bh>=Ti;)Tl(Ti),bh-=Ti;Xt==="finish"&&(Gh-=t,Gh<=0&&Dd())}if(vt)for(let s of qe)s.sync(t);let e=n/1e3;for(let s of ur)s.m.visible=s.off<=0,s.m.rotation.y=e*1.6,s.m.position.y=s.y+Math.sin(e*2.4+s.x)*.25;for(let s of Lh)s.life>0&&(s.life-=t,s.vy-=25*t,s.m.position.x+=s.vx*t,s.m.position.y+=s.vy*t,s.m.position.z+=s.vz*t,s.m.rotation.x+=t*8,s.m.rotation.z+=t*6,s.life<=0&&(s.m.visible=!1));if(Ei.mesh){let s=Ry;Ei.base.forEach(([r,a,o,l],c)=>{s.position.set(r+Math.sin(e*.7+l)*2.5,a+Math.sin(e*1.3+l*2)*1.2,o+Math.cos(e*.6+l)*2.5);let h=.18+.14*Math.max(0,Math.sin(e*3+l*5));s.scale.setScalar(h),s.updateMatrix(),Ei.mesh.setMatrixAt(c,s.matrix)}),Ei.mesh.instanceMatrix.needsUpdate=!0}let i=fe.big?650:420;for(let s of Xh)s.position.x+=t*2,s.position.x>i&&(s.position.x=-i);ea(t),od(e),(Xt==="race"||Xt==="finish"||Xt==="countdown")&&(Jh(),bd()),ve.engines(qe,Xt==="race"||Xt==="countdown"||Xt==="finish"),Vn.render(Ve,$t)}function Cy(){let n=ma&&window.innerHeight>window.innerWidth;kt("rotate").classList.toggle("on",n)}qh(vs.get("critterkart-track")||"ridge");kh();addEventListener("resize",kh);Vl(xa);un.init();Ms.init();my();My();Ms.track("open",{});kt("loading").classList.remove("on");De.menu.classList.add("on");requestAnimationFrame(Nd);Ci&&(window.__ck={get N(){return Mt},get ARCH_I(){return Ol},get CRATE_ROWS(){return Wh},get JUMPS(){return ji},get P(){return it},get L(){return jt},get T(){return ze},get TR(){return fe.id},showResults:Dd,drive:md,collideKarts:yd,audio:ve,setSpeed:Hh,endDrift:Zh,stats:xn,useItem:gd,updateHazards:xd,branches:()=>Sn,cones:()=>xs,karts:()=>qe,player:()=>vt,state:()=>Xt,setTrack(n){qh(n),Vl(xa)},start:n=>$h(n||"bruno"),simulate(n,t=!0){t&&(vt.autopilot=!0),Xt==="countdown"&&(Xt="race");let e=0,i=[],s=0,r=0,a=0,o=!1;for(;e<n&&Xt!=="results";){let l=Math.floor(vt.prog/Mt);if(Tl(Ti),e+=Ti,vt.air&&!o&&r++,o=vt.air,vt.air&&!vt.ride&&(a=Math.max(a,vt.pos.y-Qi(vt.rd,vt.pos.x,vt.pos.z,vt.ri))),Math.floor(vt.prog/Mt)>l&&l>=0&&(i.push(+(zn-s).toFixed(2)),s=zn),Xt==="finish")break}return{raceTime:+zn.toFixed(2),laps:i,jumps:r,airMax:+a.toFixed(1),state:Xt,ranks:qe.map(l=>[l.r.name,Fl(l),l.finished?+l.finishTime.toFixed(1):null,l.prog])}},snap(n,t,e){if(vt.place(n,t||0),Xt="race",vn=vt.h,Mn=vt.pos.y+3.7,e)for(let i=0;i<120;i++)ea(1/60)},look(n,t,e,i,s,r){$t.up.set(0,1,0),$t.position.set(n,t,e),$t.lookAt(i,s,r),window.__ckLook=!0},render(){for(let n of qe)n.sync(1/60);return od(performance.now()/1e3),Jh(),bd(),Vn.render(Ve,$t),window.__ckInfo={calls:Vn.info.render.calls,tris:Vn.info.render.triangles},Vn.domElement.toDataURL("image/jpeg",.85)},get BRANCHES(){return en},get RIDE(){return Vt},get MAIN(){return Qe},rideFrame:gs,stepRace:Tl,updateCamera:ea,route(n,t,e="player"){t===null?delete Oh[n]:Oh[n]={take:t,who:e}},padMiss(n){vt.ai.padMiss=n},snapBranch(n,t,e,i){let s=en.find(r=>r.kind===n&&(n!=="lane"||r.next))||en[0];if(vt.place(s.mi[t],0),$i(vt,s,t,e||0),vt.pos.set(s.P[t].x+s.L[t].x*(e||0),s.P[t].y,s.P[t].z+s.L[t].z*(e||0)),vt.h=vt.vh=pr(s.T[t]),Xt="race",vn=vt.h,Mn=vt.pos.y+3.7,vt.sync(0),i)for(let r=0;r<120;r++)ea(1/60)},snapRide(n,t){vt.place(de(Math.round(Vt.m0)),0),vt.ride={s:n,lat:0,rh:0},vt.speed=35,dd(vt,{steer:0},0),vt.sync(0),Xt="race",ea(1/60)},sections(n,t,e){vt.autopilot=!0,Xt==="countdown"&&(Xt="race");let i=[],s=new Set,r=null,a=0,o=new Set,l=0;for(;a<e&&Xt==="race";){let c=vt.prog;this.noItems&&(vt.item=null),Tl(Ti),a+=Ti;let h=Math.floor(vt.prog/Mt),f=d=>de(d),u=d=>{let g=h*Mt+d;return c<g&&vt.prog>=g};u(n)&&!s.has("a"+h)&&(s.add("a"+h),r=zn,o=new Set,l=0),r!==null&&(o.add(vt.ride?"ride":vt.rd.main?"main":vt.rd.kind),l=Math.max(l,vt.speed)),r!==null&&u(t)&&(i.push({t:+(zn-r).toFixed(2),via:[...o].join("+"),maxSp:+l.toFixed(1),surge:vt.surge>0}),r=null)}return i}});})();
/*! Slingshot name filter — blocks profanity, slurs, sexual/drug/violent terms, hate codes and contact info in player names.
 * Shared by the game (instant feedback) and backend/Code.gs (enforcement; build.py keeps that copy in sync).
 * Word lists are ROT13-encoded so this file doesn't read as a wall of slurs; add your own plain-text words via
 * theme.nameFilter = { block: ['word', ...], allow: ['innocentword', ...] }.
 * check(name) -> { ok: true } | { ok: false, reason: 'language' | 'contact' } */
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
