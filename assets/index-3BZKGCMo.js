(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();function Gi(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var to={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,a,r){function s(d,h){if(!a[d]){if(!n[d]){var l=typeof Gi=="function"&&Gi;if(!h&&l)return l(d,!0);if(o)return o(d,!0);throw new Error("Cannot find module '"+d+"'")}var u=a[d]={exports:{}};n[d][0].call(u.exports,function(f){var v=n[d][1][f];return s(v||f)},u,u.exports,e,n,a,r)}return a[d].exports}for(var o=typeof Gi=="function"&&Gi,c=0;c<r.length;c++)s(r[c]);return s}({1:[function(e,n,a){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,a){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,a){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(d){d=d||{},this.lowerBound=new r,d.lowerBound&&this.lowerBound.copy(d.lowerBound),this.upperBound=new r,d.upperBound&&this.upperBound.copy(d.upperBound)}var o=new r;s.prototype.setFromPoints=function(d,h,l,u){var f=this.lowerBound,v=this.upperBound,g=l;f.copy(d[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<d.length;m++){var p=d[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return h&&(h.vadd(f,f),h.vadd(v,v)),u&&(f.x-=u,f.y-=u,f.z-=u,v.x+=u,v.y+=u,v.z+=u),this},s.prototype.copy=function(d){return this.lowerBound.copy(d.lowerBound),this.upperBound.copy(d.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(d){var h=d.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=d.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=d.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=d.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=d.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=d.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},s.prototype.overlaps=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,f=d.upperBound;return(u.x<=l.x&&l.x<=f.x||h.x<=f.x&&f.x<=l.x)&&(u.y<=l.y&&l.y<=f.y||h.y<=f.y&&f.y<=l.y)&&(u.z<=l.z&&l.z<=f.z||h.z<=f.z&&f.z<=l.z)},s.prototype.contains=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,f=d.upperBound;return h.x<=u.x&&l.x>=f.x&&h.y<=u.y&&l.y>=f.y&&h.z<=u.z&&l.z>=f.z},s.prototype.getCorners=function(d,h,l,u,f,v,g,m){var p=this.lowerBound,_=this.upperBound;d.copy(p),h.set(_.x,p.y,p.z),l.set(_.x,_.y,p.z),u.set(p.x,_.y,_.z),f.set(_.x,p.y,p.z),v.set(p.x,_.y,p.z),g.set(p.x,p.y,_.z),m.copy(_)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(d,h){var l=c,u=l[0],f=l[1],v=l[2],g=l[3],m=l[4],p=l[5],_=l[6],y=l[7];this.getCorners(u,f,v,g,m,p,_,y);for(var x=0;x!==8;x++){var C=l[x];d.pointToLocal(C,C)}return h.setFromPoints(l)},s.prototype.toWorldFrame=function(d,h){var l=c,u=l[0],f=l[1],v=l[2],g=l[3],m=l[4],p=l[5],_=l[6],y=l[7];this.getCorners(u,f,v,g,m,p,_,y);for(var x=0;x!==8;x++){var C=l[x];d.pointToWorld(C,C)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,a){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var c=o;o=s,s=c}return this.matrix[(s*(s+1)>>1)+o-1]},r.prototype.set=function(s,o,c){if(s=s.index,o=o.index,o>s){var d=o;o=s,s=d}this.matrix[(s*(s+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,a){var r=e("../objects/Body"),s=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var d=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&d||g.sleepState===r.SLEEPING)&&(m.type&d||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,p,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,_):this.doBoundingSphereBroadphase(g,m,p,_)};var h=new s;new s,new o,new s,c.prototype.doBoundingSphereBroadphase=function(g,m,p,_){var y=h;m.position.vsub(g.position,y);var x=Math.pow(g.boundingRadius+m.boundingRadius,2),C=y.norm2();C<x&&(p.push(g),_.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,p,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),_.push(m))};var l={keys:[]},u=[],f=[];c.prototype.makePairsUnique=function(g,m){for(var p=l,_=u,y=f,x=g.length,C=0;C!==x;C++)_[C]=g[C],y[C]=m[C];g.length=0,m.length=0;for(var C=0;C!==x;C++){var P=_[C].id,I=y[C].id,D=P<I?P+","+I:I+","+P;p[D]=C,p.keys.push(D)}for(var C=0;C!==p.keys.length;C++){var D=p.keys.pop(),E=p[D];g.push(_[E]),m.push(y[E]),delete p[D]}},c.prototype.setWorld=function(g){};var v=new s;c.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},c.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,a){n.exports=c;var r=e("./Broadphase"),s=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,u,f,v){r.apply(this),this.nx=u||10,this.ny=f||10,this.nz=v||10,this.aabbMin=h||new s(100,100,100),this.aabbMax=l||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var d=new s;new s,c.prototype.collisionPairs=function(h,l,u){var f=h.numObjects(),v=h.bodies,Z=this.aabbMax,G=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,_=m*p,y=p,x=1,C=Z.x,P=Z.y,I=Z.z,D=G.x,E=G.y,M=G.z,T=g/(C-D),O=m/(P-E),N=p/(I-M),K=(C-D)/g,k=(P-E)/m,j=(I-M)/p,z=Math.sqrt(K*K+k*k+j*j)*.5,L=o.types,tt=L.SPHERE,J=L.PLANE;L.BOX,L.COMPOUND,L.CONVEXPOLYHEDRON;for(var F=this.bins,$=this.binLengths,H=this.bins.length,A=0;A!==H;A++)$[A]=0;var b=Math.ceil,G=Math.min,Z=Math.max;function et(Tt,Ht,ne,Yt,zt,jt,Qt){var he=(Tt-D)*T|0,q=(Ht-E)*O|0,St=(ne-M)*N|0,ut=b((Yt-D)*T),pt=b((zt-E)*O),Et=b((jt-M)*N);he<0?he=0:he>=g&&(he=g-1),q<0?q=0:q>=m&&(q=m-1),St<0?St=0:St>=p&&(St=p-1),ut<0?ut=0:ut>=g&&(ut=g-1),pt<0?pt=0:pt>=m&&(pt=m-1),Et<0?Et=0:Et>=p&&(Et=p-1),he*=_,q*=y,St*=x,ut*=_,pt*=y,Et*=x;for(var $t=he;$t<=ut;$t+=_)for(var ie=q;ie<=pt;ie+=y)for(var me=St;me<=Et;me+=x){var Me=$t+ie+me;F[Me][$[Me]++]=Qt}}for(var A=0;A!==f;A++){var X=v[A],it=X.shape;switch(it.type){case tt:var ft=X.position.x,U=X.position.y,Rt=X.position.z,xt=it.radius;et(ft-xt,U-xt,Rt-xt,ft+xt,U+xt,Rt+xt,X);break;case J:it.worldNormalNeedsUpdate&&it.computeWorldNormal(X.quaternion);var ot=it.worldNormal,rt=D+K*.5-X.position.x,Kt=E+k*.5-X.position.y,At=M+j*.5-X.position.z,Gt=d;Gt.set(rt,Kt,At);for(var R=0,w=0;R!==g;R++,w+=_,Gt.y=Kt,Gt.x+=K)for(var Q=0,ct=0;Q!==m;Q++,ct+=y,Gt.z=At,Gt.y+=k)for(var mt=0,lt=0;mt!==p;mt++,lt+=x,Gt.z+=j)if(Gt.dot(ot)<z){var Ot=w+ct+lt;F[Ot][$[Ot]++]=X}break;default:X.aabbNeedsUpdate&&X.computeAABB(),et(X.aabb.lowerBound.x,X.aabb.lowerBound.y,X.aabb.lowerBound.z,X.aabb.upperBound.x,X.aabb.upperBound.y,X.aabb.upperBound.z,X);break}}for(var A=0;A!==H;A++){var gt=$[A];if(gt>1)for(var It=F[A],R=0;R!==gt;R++)for(var X=It[R],Q=0;Q!==R;Q++){var Zt=It[Q];this.needBroadphaseCollision(X,Zt)&&this.intersectionTest(X,Zt,l,u)}}this.makePairsUnique(l,u)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,a){n.exports=o;var r=e("./Broadphase"),s=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,d,h){var l=c.bodies,u=l.length,f,v,g,m;for(f=0;f!==u;f++)for(v=0;v!==f;v++)g=l[f],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,d,h)},new s,o.prototype.aabbQuery=function(c,d,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var u=c.bodies[l];u.aabbNeedsUpdate&&u.computeAABB(),u.aabb.overlaps(d)&&h.push(u)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,a){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var c=o;o=s,s=c}return s+"-"+o in this.matrix},r.prototype.set=function(s,o,c){if(s=s.id,o=o.id,o>s){var d=o;o=s,s=d}c?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,a){n.exports=l;var r=e("../math/Vec3"),s=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),d=e("../shapes/Shape"),h=e("../collision/AABB");function l(H,A){this.from=H?H.clone():new r,this.to=A?A.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(b){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var u=new h,f=[];l.prototype.intersectWorld=function(H,A){return this.mode=A.mode||l.ANY,this.result=A.result||new c,this.skipBackfaces=!!A.skipBackfaces,this.collisionFilterMask=typeof A.collisionFilterMask<"u"?A.collisionFilterMask:-1,this.collisionFilterGroup=typeof A.collisionFilterGroup<"u"?A.collisionFilterGroup:-1,A.from&&this.from.copy(A.from),A.to&&this.to.copy(A.to),this.callback=A.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(u),f.length=0,H.broadphase.aabbQuery(H,u,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(H,A,b,G){G.vsub(A,J),b.vsub(A,v),H.vsub(A,g);var Z=J.dot(J),et=J.dot(v),X=J.dot(g),it=v.dot(v),ft=v.dot(g),U,Rt;return(U=it*X-et*ft)>=0&&(Rt=Z*ft-et*X)>=0&&U+Rt<Z*it-et*et}var p=new r,_=new s;l.prototype.intersectBody=function(H,A){A&&(this.result=A,this._updateDirection());var b=this.checkCollisionResponse;if(!(b&&!H.collisionResponse)&&!(!(this.collisionFilterGroup&H.collisionFilterMask)||!(H.collisionFilterGroup&this.collisionFilterMask)))for(var G=p,Z=_,et=0,X=H.shapes.length;et<X;et++){var it=H.shapes[et];if(!(b&&!it.collisionResponse)&&(H.quaternion.mult(H.shapeOrientations[et],Z),H.quaternion.vmult(H.shapeOffsets[et],G),G.vadd(H.position,G),this.intersectShape(it,Z,G,H),this.result._shouldStop))break}},l.prototype.intersectBodies=function(H,A){A&&(this.result=A,this._updateDirection());for(var b=0,G=H.length;!this.result._shouldStop&&b<G;b++)this.intersectBody(H[b])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(H,A,b,G){var Z=this.from,et=$(Z,this._direction,b);if(!(et>H.boundingSphereRadius)){var X=this[H.type];X&&X.call(this,H,A,b,G)}},new r,new r;var y=new r,x=new r,C=new r,P=new r;new r,new c,l.prototype.intersectBox=function(H,A,b,G){return this.intersectConvex(H.convexPolyhedronRepresentation,A,b,G)},l.prototype[d.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(H,A,b,G){var Z=this.from,et=this.to,X=this._direction,it=new r(0,0,1);A.vmult(it,it);var ft=new r;Z.vsub(b,ft);var U=ft.dot(it);et.vsub(b,ft);var Rt=ft.dot(it);if(!(U*Rt>0)&&!(Z.distanceTo(et)<U)){var xt=it.dot(X);if(!(Math.abs(xt)<this.precision)){var ot=new r,rt=new r,Kt=new r;Z.vsub(b,ot);var At=-it.dot(ot)/xt;X.scale(At,rt),Z.vadd(rt,Kt),this.reportIntersection(it,Kt,H,G,-1)}}},l.prototype[d.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(H){var A=this.to,b=this.from;H.lowerBound.x=Math.min(A.x,b.x),H.lowerBound.y=Math.min(A.y,b.y),H.lowerBound.z=Math.min(A.z,b.z),H.upperBound.x=Math.max(A.x,b.x),H.upperBound.y=Math.max(A.y,b.y),H.upperBound.z=Math.max(A.z,b.z)};var I={faceList:[0]};l.prototype.intersectHeightfield=function(H,A,b,G){H.data,H.elementSize;var Z=new r,et=new l(this.from,this.to);o.pointToLocalFrame(b,A,et.from,et.from),o.pointToLocalFrame(b,A,et.to,et.to);var X=[],it=null,ft=null,U=null,Rt=null,xt=H.getIndexOfPosition(et.from.x,et.from.y,X,!1);if(xt&&(it=X[0],ft=X[1],U=X[0],Rt=X[1]),xt=H.getIndexOfPosition(et.to.x,et.to.y,X,!1),xt&&((it===null||X[0]<it)&&(it=X[0]),(U===null||X[0]>U)&&(U=X[0]),(ft===null||X[1]<ft)&&(ft=X[1]),(Rt===null||X[1]>Rt)&&(Rt=X[1])),it!==null){var ot=[];H.getRectMinMax(it,ft,U,Rt,ot),ot[0],ot[1];for(var rt=it;rt<=U;rt++)for(var Kt=ft;Kt<=Rt;Kt++){if(this.result._shouldStop||(H.getConvexTrianglePillar(rt,Kt,!1),o.pointToWorldFrame(b,A,H.pillarOffset,Z),this.intersectConvex(H.pillarConvex,A,Z,G,I),this.result._shouldStop))return;H.getConvexTrianglePillar(rt,Kt,!0),o.pointToWorldFrame(b,A,H.pillarOffset,Z),this.intersectConvex(H.pillarConvex,A,Z,G,I)}}},l.prototype[d.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var D=new r,E=new r;l.prototype.intersectSphere=function(H,A,b,G){var Z=this.from,et=this.to,X=H.radius,it=Math.pow(et.x-Z.x,2)+Math.pow(et.y-Z.y,2)+Math.pow(et.z-Z.z,2),ft=2*((et.x-Z.x)*(Z.x-b.x)+(et.y-Z.y)*(Z.y-b.y)+(et.z-Z.z)*(Z.z-b.z)),U=Math.pow(Z.x-b.x,2)+Math.pow(Z.y-b.y,2)+Math.pow(Z.z-b.z,2)-Math.pow(X,2),Rt=Math.pow(ft,2)-4*it*U,xt=D,ot=E;if(!(Rt<0))if(Rt===0)Z.lerp(et,Rt,xt),xt.vsub(b,ot),ot.normalize(),this.reportIntersection(ot,xt,H,G,-1);else{var rt=(-ft-Math.sqrt(Rt))/(2*it),Kt=(-ft+Math.sqrt(Rt))/(2*it);if(rt>=0&&rt<=1&&(Z.lerp(et,rt,xt),xt.vsub(b,ot),ot.normalize(),this.reportIntersection(ot,xt,H,G,-1)),this.result._shouldStop)return;Kt>=0&&Kt<=1&&(Z.lerp(et,Kt,xt),xt.vsub(b,ot),ot.normalize(),this.reportIntersection(ot,xt,H,G,-1))}},l.prototype[d.types.SPHERE]=l.prototype.intersectSphere;var M=new r;new r,new r;var T=new r;l.prototype.intersectConvex=function(A,b,G,Z,et){for(var X=M,it=T,ft=et&&et.faceList||null,U=A.faces,Rt=A.vertices,xt=A.faceNormals,ot=this._direction,rt=this.from,Kt=this.to,At=rt.distanceTo(Kt),Gt=ft?ft.length:U.length,R=this.result,w=0;!R._shouldStop&&w<Gt;w++){var Q=ft?ft[w]:w,ct=U[Q],mt=xt[Q],lt=b,Ot=G;it.copy(Rt[ct[0]]),lt.vmult(it,it),it.vadd(Ot,it),it.vsub(rt,it),lt.vmult(mt,X);var gt=ot.dot(X);if(!(Math.abs(gt)<this.precision)){var It=X.dot(it)/gt;if(!(It<0)){ot.mult(It,y),y.vadd(rt,y),x.copy(Rt[ct[0]]),lt.vmult(x,x),Ot.vadd(x,x);for(var Zt=1;!R._shouldStop&&Zt<ct.length-1;Zt++){C.copy(Rt[ct[Zt]]),P.copy(Rt[ct[Zt+1]]),lt.vmult(C,C),lt.vmult(P,P),Ot.vadd(C,C),Ot.vadd(P,P);var Tt=y.distanceTo(rt);!(m(y,x,C,P)||m(y,C,x,P))||Tt>At||this.reportIntersection(X,y,A,Z,Q)}}}}},l.prototype[d.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var O=new r,N=new r,K=new r,k=new r,j=new r,z=new r;new h;var L=[],tt=new o;l.prototype.intersectTrimesh=function(A,b,G,Z,et){var X=O,it=L,ft=tt,U=T,Rt=N,xt=K,ot=k,rt=z,Kt=j;et&&et.faceList;var At=A.indices;A.vertices,A.faceNormals;var Gt=this.from,R=this.to,w=this._direction;ft.position.copy(G),ft.quaternion.copy(b),o.vectorToLocalFrame(G,b,w,Rt),o.pointToLocalFrame(G,b,Gt,xt),o.pointToLocalFrame(G,b,R,ot);var Q=xt.distanceSquared(ot);A.tree.rayQuery(this,ft,it);for(var ct=0,mt=it.length;!this.result._shouldStop&&ct!==mt;ct++){var lt=it[ct];A.getNormal(lt,X),A.getVertex(At[lt*3],x),x.vsub(xt,U);var Ot=Rt.dot(X),gt=X.dot(U)/Ot;if(!(gt<0)){Rt.scale(gt,y),y.vadd(xt,y),A.getVertex(At[lt*3+1],C),A.getVertex(At[lt*3+2],P);var It=y.distanceSquared(xt);!(m(y,C,x,P)||m(y,x,C,P))||It>Q||(o.vectorToWorldFrame(b,X,Kt),o.pointToWorldFrame(G,b,y,rt),this.reportIntersection(Kt,rt,A,Z,lt))}}it.length=0},l.prototype[d.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(H,A,b,G,Z){var et=this.from,X=this.to,it=et.distanceTo(A),ft=this.result;if(!(this.skipBackfaces&&H.dot(this._direction)>0))switch(ft.hitFaceIndex=typeof Z<"u"?Z:-1,this.mode){case l.ALL:this.hasHit=!0,ft.set(et,X,H,A,b,G,it),ft.hasHit=!0,this.callback(ft);break;case l.CLOSEST:(it<ft.distance||!ft.hasHit)&&(this.hasHit=!0,ft.hasHit=!0,ft.set(et,X,H,A,b,G,it));break;case l.ANY:this.hasHit=!0,ft.hasHit=!0,ft.set(et,X,H,A,b,G,it),ft._shouldStop=!0;break}};var J=new r,F=new r;function $(H,A,b){b.vsub(H,J);var G=J.dot(A);A.mult(G,F),F.vadd(H,F);var Z=b.distanceTo(F);return Z}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,c,d,h,l,u,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(d),this.hitPointWorld.copy(h),this.shape=l,this.body=u,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,a){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(d){c.push(d.body)},this._removeBodyHandler=function(d){var h=c.indexOf(d.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}s.prototype=new r,s.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},s.insertionSortY=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},s.insertionSortZ=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},s.prototype.collisionPairs=function(o,c,d){var h=this.axisList,l=h.length,u=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==l;f++){var g=h[f];for(v=f+1;v<l;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,u))break;this.intersectionTest(g,m,c,d)}}}},s.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,d=o.length,h=0;h!==d;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?s.insertionSortX(o):c===1?s.insertionSortY(o):c===2&&s.insertionSortZ(o)},s.checkBounds=function(o,c,d){var h,l;d===0?(h=o.position.x,l=c.position.x):d===1?(h=o.position.y,l=c.position.y):d===2&&(h=o.position.z,l=c.position.z);var u=o.boundingRadius,f=c.boundingRadius,v=h+u,g=l-f;return g<v},s.prototype.autoDetectAxis=function(){for(var o=0,c=0,d=0,h=0,l=0,u=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],_=p.position.x;o+=_,c+=_*_;var y=p.position.y;d+=y,h+=y*y;var x=p.position.z;l+=x,u+=x*x}var C=c-o*o*g,P=h-d*d*g,I=u-l*l*g;C>P?C>I?this.axisIndex=0:this.axisIndex=2:P>I?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,c,d){d=d||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var u=this.axisList;c.lowerBound[l],c.upperBound[l];for(var f=0;f<u.length;f++){var v=u[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&d.push(v)}return d}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,a){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(h,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6,v=u.pivotA?u.pivotA.clone():new c,g=u.pivotB?u.pivotB.clone():new c;this.axisA=u.axisA?u.axisA.clone():new c,this.axisB=u.axisB?u.axisB.clone():new c,r.call(this,h,v,l,g,f),this.collideConnected=!!u.collideConnected,this.angle=typeof u.angle<"u"?u.angle:0;var m=this.coneEquation=new s(h,l,u),p=this.twistEquation=new o(h,l,u);this.twistAngle=typeof u.twistAngle<"u"?u.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}d.prototype=new r,d.constructor=d,new c,new c,d.prototype.update=function(){var h=this.bodyA,l=this.bodyB,u=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,u.axisA),l.vectorToWorldFrame(this.axisB,u.axisB),this.axisA.tangents(f.axisA,f.axisA),h.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),l.vectorToWorldFrame(f.axisB,f.axisB),u.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,a){n.exports=s;var r=e("../utils/Utils");function s(o,c,d){d=r.defaults(d,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=s.idCounter++,this.collideConnected=d.collideConnected,d.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,a){n.exports=o;var r=e("./Constraint"),s=e("../equations/ContactEquation");function o(c,d,h,l){r.call(this,c,d),typeof h>"u"&&(h=c.position.distanceTo(d.position)),typeof l>"u"&&(l=1e6),this.distance=h;var u=this.distanceEquation=new s(c,d);this.equations.push(u),u.minForce=-l,u.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,d=this.bodyB,h=this.distanceEquation,l=this.distance*.5,u=h.ni;d.position.vsub(c.position,u),u.normalize(),u.mult(l,h.ri),u.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,a){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(u,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,p=v.pivotB?v.pivotB.clone():new c;r.call(this,u,m,f,p,g);var _=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);_.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);y.normalize();var x=this.rotationalEquation1=new s(u,f,v),C=this.rotationalEquation2=new s(u,f,v),P=this.motorEquation=new o(u,f,g);P.enabled=!1,this.equations.push(x,C,P)}d.prototype=new r,d.constructor=d,d.prototype.enableMotor=function(){this.motorEquation.enabled=!0},d.prototype.disableMotor=function(){this.motorEquation.enabled=!1},d.prototype.setMotorSpeed=function(u){this.motorEquation.targetVelocity=u},d.prototype.setMotorMaxForce=function(u){this.motorEquation.maxForce=u,this.motorEquation.minForce=-u};var h=new c,l=new c;d.prototype.update=function(){var u=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=h,_=l,y=this.axisA,x=this.axisB;r.prototype.update.call(this),u.quaternion.vmult(y,p),f.quaternion.vmult(x,_),p.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(u.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,a){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(d,h,l){l=l||{};var u=typeof l.maxForce<"u"?l.maxForce:1e6,f=new o,v=new o,g=new o;d.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),d.pointToLocalFrame(g,f),r.call(this,d,f,h,v,u);var m=this.rotationalEquation1=new s(d,h,l),p=this.rotationalEquation2=new s(d,h,l),_=this.rotationalEquation3=new s(d,h,l);this.equations.push(m,p,_)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,u=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),d.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),d.vectorToWorldFrame(o.UNIT_Y,u.axisA),h.vectorToWorldFrame(o.UNIT_Z,u.axisB),d.vectorToWorldFrame(o.UNIT_Z,f.axisA),h.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,a){n.exports=c;var r=e("./Constraint"),s=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(d,h,l,u,f){r.call(this,d,l),f=typeof f<"u"?f:1e6,this.pivotA=h?h.clone():new o,this.pivotB=u?u.clone():new o;var v=this.equationX=new s(d,l),g=this.equationY=new s(d,l),m=this.equationZ=new s(d,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB,l=this.equationX,u=this.equationY,f=this.equationZ;d.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),u.ri.copy(l.ri),u.rj.copy(l.rj),f.ri.copy(l.ri),f.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(h,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6;s.call(this,h,l,-f,f),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.angle=typeof u.angle<"u"?u.angle:0}o.prototype=new s,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,f=this.axisA,v=this.axisB,g=c,m=d,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.angle)-f.dot(v),x=this.computeGW(),C=this.computeGiMf(),P=-y*l-x*u-h*C;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(m,p,_){_=typeof _<"u"?_:1e6,r.call(this,m,p,0,_),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,d=new s,h=new s;o.prototype.computeB=function(m){var p=this.a,_=this.b,y=this.bi,x=this.bj,C=this.ri,P=this.rj,I=c,D=d,E=y.velocity,M=y.angularVelocity;y.force,y.torque;var T=x.velocity,O=x.angularVelocity;x.force,x.torque;var N=h,K=this.jacobianElementA,k=this.jacobianElementB,j=this.ni;C.cross(j,I),P.cross(j,D),j.negate(K.spatial),I.negate(K.rotational),k.spatial.copy(j),k.rotational.copy(D),N.copy(x.position),N.vadd(P,N),N.vsub(y.position,N),N.vsub(C,N);var z=j.dot(N),L=this.restitution+1,tt=L*T.dot(j)-L*E.dot(j)+O.dot(D)-M.dot(I),J=this.computeGiMf(),F=-z*p-tt*_-m*J;return F};var l=new s,u=new s,f=new s,v=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,p=u,_=f,y=v,x=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(y,p),m.vsub(p,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,a){n.exports=o;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function o(g,m,p,_){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var _=m,y=g,x=p;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},o.prototype.computeB=function(g,m,p){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*g-_*m-x*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.position,x=_.position;return g.spatial.dot(y)+m.spatial.dot(x)};var c=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.velocity,x=_.velocity,C=p.angularVelocity||c,P=_.angularVelocity||c;return g.multiplyVectors(y,C)+m.multiplyVectors(x,P)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.vlambda,x=_.vlambda,C=p.wlambda||c,P=_.wlambda||c;return g.multiplyVectors(y,C)+m.multiplyVectors(x,P)};var d=new s,h=new s,l=new s,u=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.force,x=p.torque,C=_.force,P=_.torque,I=p.invMassSolve,D=_.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(x,l):l.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(P,u):u.set(0,0,0),y.mult(I,d),C.mult(D,h),g.multiplyVectors(d,l)+m.multiplyVectors(h,u)};var f=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.invMassSolve,x=_.invMassSolve,C=p.invInertiaWorldSolve,P=_.invInertiaWorldSolve,I=y+x;return C&&(C.vmult(g.rotational,f),I+=f.dot(g.rotational)),P&&(P.vmult(m.rotational,f),I+=f.dot(m.rotational)),I};var v=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,_=this.bi,y=this.bj,x=v;m.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),p.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(h,l,u){r.call(this,h,l,-u,u),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,d=new s;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var u=this.ri,f=this.rj,v=c,g=d,m=this.t;u.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,_=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),_.spatial.copy(m),_.rotational.copy(g);var y=this.computeGW(),x=this.computeGiMf(),C=-y*l-h*x;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(h,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6;s.call(this,h,l,-f,f),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,f=this.axisA,v=this.axisB,g=c,m=d,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.maxAngle)-f.dot(v),x=this.computeGW(),C=this.computeGiMf(),P=-y*l-x*u-h*C;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(c,d,h){h=typeof h<"u"?h:1e6,s.call(this,c,d,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var d=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,u=this.jacobianElementA,f=this.jacobianElementB;u.rotational.copy(h),l.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*d-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,a){var r=e("../utils/Utils");n.exports=s;function s(o,c,d){d=r.defaults(d,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,c],this.friction=d.friction,this.restitution=d.restitution,this.contactEquationStiffness=d.contactEquationStiffness,this.contactEquationRelaxation=d.contactEquationRelaxation,this.frictionEquationStiffness=d.frictionEquationStiffness,this.frictionEquationRelaxation=d.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,a){n.exports=r;function r(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},s.prototype.getTrace=function(c){var c=c||new r,d=this.elements;c.x=d[0],c.y=d[4],c.z=d[8]},s.prototype.vmult=function(o,c){c=c||new r;var d=this.elements,h=o.x,l=o.y,u=o.z;return c.x=d[0]*h+d[1]*l+d[2]*u,c.y=d[3]*h+d[4]*l+d[5]*u,c.z=d[6]*h+d[7]*l+d[8]*u,c},s.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},s.prototype.mmult=function(o,c){for(var d=c||new s,h=0;h<3;h++)for(var l=0;l<3;l++){for(var u=0,f=0;f<3;f++)u+=o.elements[h+f*3]*this.elements[f+l*3];d.elements[h+l*3]=u}return d},s.prototype.scale=function(o,c){c=c||new s;for(var d=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*d[3*l+0],h[3*l+1]=o.y*d[3*l+1],h[3*l+2]=o.z*d[3*l+2];return c},s.prototype.solve=function(o,c){c=c||new r;for(var d=3,h=4,l=[],u=0;u<d*h;u++)l.push(0);var u,f;for(u=0;u<3;u++)for(f=0;f<3;f++)l[u+h*f]=this.elements[u+3*f];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,p=4,_;do{if(u=g-v,l[u+h*u]===0){for(f=u+1;f<g;f++)if(l[u+h*f]!==0){m=p;do _=p-m,l[_+h*u]+=l[_+h*f];while(--m);break}}if(l[u+h*u]!==0)for(f=u+1;f<g;f++){var y=l[u+h*f]/l[u+h*u];m=p;do _=p-m,l[_+h*f]=_<=u?0:l[_+h*f]-l[_+h*u]*y;while(--m)}}while(--v);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},s.prototype.e=function(o,c,d){if(d===void 0)return this.elements[c+3*o];this.elements[c+3*o]=d},s.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},s.prototype.toString=function(){for(var o="",c=",",d=0;d<9;d++)o+=this.elements[d]+c;return o},s.prototype.reverse=function(o){o=o||new s;for(var c=3,d=6,h=[],l=0;l<c*d;l++)h.push(0);var l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)h[l+d*u]=this.elements[l+3*u];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var f=3,v=f,g,m=d,p;do{if(l=v-f,h[l+d*l]===0){for(u=l+1;u<v;u++)if(h[l+d*u]!==0){g=m;do p=m-g,h[p+d*l]+=h[p+d*u];while(--g);break}}if(h[l+d*l]!==0)for(u=l+1;u<v;u++){var _=h[l+d*u]/h[l+d*l];g=m;do p=m-g,h[p+d*u]=p<=l?0:h[p+d*u]-h[p+d*l]*_;while(--g)}}while(--f);l=2;do{u=l-1;do{var _=h[l+d*u]/h[l+d*l];g=d;do p=d-g,h[p+d*u]=h[p+d*u]-h[p+d*l]*_;while(--g)}while(u--)}while(--l);l=2;do{var _=1/h[l+d*l];g=d;do p=d-g,h[p+d*l]=h[p+d*l]*_;while(--g)}while(l--);l=2;do{u=2;do{if(p=h[c+u+d*l],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,u,p)}while(u--)}while(l--);return o},s.prototype.setRotationFromQuaternion=function(o){var c=o.x,d=o.y,h=o.z,l=o.w,u=c+c,f=d+d,v=h+h,g=c*u,m=c*f,p=c*v,_=d*f,y=d*v,x=h*v,C=l*u,P=l*f,I=l*v,D=this.elements;return D[3*0+0]=1-(_+x),D[3*0+1]=m-I,D[3*0+2]=p+P,D[3*1+0]=m+I,D[3*1+1]=1-(g+x),D[3*1+2]=y-C,D[3*2+0]=p-P,D[3*2+1]=y+C,D[3*2+2]=1-(g+_),this},s.prototype.transpose=function(o){o=o||new s;for(var c=o.elements,d=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=d[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(u,f,v,g){this.x=u!==void 0?u:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(u,f,v,g){this.x=u,this.y=f,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(u,f){var v=Math.sin(f*.5);this.x=u.x*v,this.y=u.y*v,this.z=u.z*v,this.w=Math.cos(f*.5)},s.prototype.toAxisAngle=function(u){u=u||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(u.x=this.x,u.y=this.y,u.z=this.z):(u.x=this.x/v,u.y=this.y/v,u.z=this.z/v),[u,f]};var o=new r,c=new r;s.prototype.setFromVectors=function(u,f){if(u.isAntiparallelTo(f)){var v=o,g=c;u.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=u.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(u.norm(),2)*Math.pow(f.norm(),2))+u.dot(f),this.normalize()}};var d=new r,h=new r,l=new r;s.prototype.mult=function(u,f){f=f||new s;var v=this.w,g=d,m=h,p=l;return g.set(this.x,this.y,this.z),m.set(u.x,u.y,u.z),f.w=v*u.w-g.dot(m),g.cross(m,p),f.x=v*m.x+u.w*g.x+p.x,f.y=v*m.y+u.w*g.y+p.y,f.z=v*m.z+u.w*g.z+p.z,f},s.prototype.inverse=function(u){var f=this.x,v=this.y,g=this.z,m=this.w;u=u||new s,this.conjugate(u);var p=1/(f*f+v*v+g*g+m*m);return u.x*=p,u.y*=p,u.z*=p,u.w*=p,u},s.prototype.conjugate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u.w=this.w,u},s.prototype.normalize=function(){var u=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(u=1/u,this.x*=u,this.y*=u,this.z*=u,this.w*=u)},s.prototype.normalizeFast=function(){var u=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=u,this.y*=u,this.z*=u,this.w*=u)},s.prototype.vmult=function(u,f){f=f||new r;var v=u.x,g=u.y,m=u.z,p=this.x,_=this.y,y=this.z,x=this.w,C=x*v+_*m-y*g,P=x*g+y*v-p*m,I=x*m+p*g-_*v,D=-p*v-_*g-y*m;return f.x=C*x+D*-p+P*-y-I*-_,f.y=P*x+D*-_+I*-p-C*-y,f.z=I*x+D*-y+C*-_-P*-p,f},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this.w=u.w,this},s.prototype.toEuler=function(u,f){f=f||"YZX";var v,g,m,p=this.x,_=this.y,y=this.z,x=this.w;switch(f){case"YZX":var C=p*_+y*x;if(C>.499&&(v=2*Math.atan2(p,x),g=Math.PI/2,m=0),C<-.499&&(v=-2*Math.atan2(p,x),g=-Math.PI/2,m=0),isNaN(v)){var P=p*p,I=_*_,D=y*y;v=Math.atan2(2*_*x-2*p*y,1-2*I-2*D),g=Math.asin(2*C),m=Math.atan2(2*p*x-2*_*y,1-2*P-2*D)}break;default:throw new Error("Euler order "+f+" not supported yet.")}u.y=v,u.z=g,u.x=m},s.prototype.setFromEuler=function(u,f,v,g){g=g||"XYZ";var m=Math.cos(u/2),p=Math.cos(f/2),_=Math.cos(v/2),y=Math.sin(u/2),x=Math.sin(f/2),C=Math.sin(v/2);return g==="XYZ"?(this.x=y*p*_+m*x*C,this.y=m*x*_-y*p*C,this.z=m*p*C+y*x*_,this.w=m*p*_-y*x*C):g==="YXZ"?(this.x=y*p*_+m*x*C,this.y=m*x*_-y*p*C,this.z=m*p*C-y*x*_,this.w=m*p*_+y*x*C):g==="ZXY"?(this.x=y*p*_-m*x*C,this.y=m*x*_+y*p*C,this.z=m*p*C+y*x*_,this.w=m*p*_-y*x*C):g==="ZYX"?(this.x=y*p*_-m*x*C,this.y=m*x*_+y*p*C,this.z=m*p*C-y*x*_,this.w=m*p*_+y*x*C):g==="YZX"?(this.x=y*p*_+m*x*C,this.y=m*x*_+y*p*C,this.z=m*p*C-y*x*_,this.w=m*p*_-y*x*C):g==="XZY"&&(this.x=y*p*_-m*x*C,this.y=m*x*_-y*p*C,this.z=m*p*C+y*x*_,this.w=m*p*_+y*x*C),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,a){var r=e("./Vec3"),s=e("./Quaternion");n.exports=o;function o(d){d=d||{},this.position=new r,d.position&&this.position.copy(d.position),this.quaternion=new s,d.quaternion&&this.quaternion.copy(d.quaternion)}var c=new s;o.pointToLocalFrame=function(d,h,l,f){var f=f||new r;return l.vsub(d,f),h.conjugate(c),c.vmult(f,f),f},o.prototype.pointToLocal=function(d,h){return o.pointToLocalFrame(this.position,this.quaternion,d,h)},o.pointToWorldFrame=function(d,h,l,f){var f=f||new r;return h.vmult(l,f),f.vadd(d,f),f},o.prototype.pointToWorld=function(d,h){return o.pointToWorldFrame(this.position,this.quaternion,d,h)},o.prototype.vectorToWorldFrame=function(d,l){var l=l||new r;return this.quaternion.vmult(d,l),l},o.vectorToWorldFrame=function(d,h,l){return d.vmult(h,l),l},o.vectorToLocalFrame=function(d,h,l,f){var f=f||new r;return h.w*=-1,h.vmult(l,f),h.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,a){n.exports=s;var r=e("./Mat3");function s(h,l,u){this.x=h||0,this.y=l||0,this.z=u||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(h,l){var u=h.x,f=h.y,v=h.z,g=this.x,m=this.y,p=this.z;return l=l||new s,l.x=m*v-p*f,l.y=p*u-g*v,l.z=g*f-m*u,l},s.prototype.set=function(h,l,u){return this.x=h,this.y=l,this.z=u,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new s(this.x+h.x,this.y+h.y,this.z+h.z)},s.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new s(this.x-h.x,this.y-h.y,this.z-h.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var h=this.x,l=this.y,u=this.z,f=Math.sqrt(h*h+l*l+u*u);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},s.prototype.unit=function(h){h=h||new s;var l=this.x,u=this.y,f=this.z,v=Math.sqrt(l*l+u*u+f*f);return v>0?(v=1/v,h.x=l*v,h.y=u*v,h.z=f*v):(h.x=1,h.y=0,h.z=0),h},s.prototype.norm=function(){var h=this.x,l=this.y,u=this.z;return Math.sqrt(h*h+l*l+u*u)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(h){var l=this.x,u=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-l)*(v-l)+(g-u)*(g-u)+(m-f)*(m-f))},s.prototype.distanceSquared=function(h){var l=this.x,u=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return(v-l)*(v-l)+(g-u)*(g-u)+(m-f)*(m-f)},s.prototype.mult=function(h,l){l=l||new s;var u=this.x,f=this.y,v=this.z;return l.x=h*u,l.y=h*f,l.z=h*v,l},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(h){return h=h||new s,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new s,c=new s;s.prototype.tangents=function(h,l){var u=this.norm();if(u>0){var f=o,v=1/u;f.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,h)):(g.set(0,1,0),f.cross(g,h)),f.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},s.prototype.lerp=function(h,l,u){var f=this.x,v=this.y,g=this.z;u.x=f+(h.x-f)*l,u.y=v+(h.y-v)*l,u.z=g+(h.z-g)*l},s.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},s.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var d=new s;s.prototype.isAntiparallelTo=function(h,l){return this.negate(d),d.almostEquals(h,l)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,a){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var d=e("../collision/AABB"),h=e("../shapes/Box");function l(T){T=T||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof T.collisionFilterGroup=="number"?T.collisionFilterGroup:1,this.collisionFilterMask=typeof T.collisionFilterMask=="number"?T.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,T.position&&this.position.copy(T.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,T.velocity&&this.velocity.copy(T.velocity),this.initVelocity=new s,this.force=new s;var O=typeof T.mass=="number"?T.mass:0;this.mass=O,this.invMass=O>0?1/O:0,this.material=T.material||null,this.linearDamping=typeof T.linearDamping=="number"?T.linearDamping:.01,this.type=O<=0?l.STATIC:l.DYNAMIC,typeof T.type==typeof l.STATIC&&(this.type=T.type),this.allowSleep=typeof T.allowSleep<"u"?T.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof T.sleepSpeedLimit<"u"?T.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof T.sleepTimeLimit<"u"?T.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new c,T.quaternion&&this.quaternion.copy(T.quaternion),this.initQuaternion=new c,this.angularVelocity=new s,T.angularVelocity&&this.angularVelocity.copy(T.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof T.fixedRotation<"u"?T.fixedRotation:!1,this.angularDamping=typeof T.angularDamping<"u"?T.angularDamping:.01,this.aabb=new d,this.aabbNeedsUpdate=!0,this.wlambda=new s,T.shape&&this.addShape(T.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var T=this.sleepState;this.sleepState=0,T===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(T){if(this.allowSleep){var O=this.sleepState,N=this.velocity.norm2()+this.angularVelocity.norm2(),K=Math.pow(this.sleepSpeedLimit,2);O===l.AWAKE&&N<K?(this.sleepState=l.SLEEPY,this.timeLastSleepy=T,this.dispatchEvent(l.sleepyEvent)):O===l.SLEEPY&&N>K?this.wakeUp():O===l.SLEEPY&&T-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(T,N){var N=N||new s;return T.vsub(this.position,N),this.quaternion.conjugate().vmult(N,N),N},l.prototype.vectorToLocalFrame=function(T,N){var N=N||new s;return this.quaternion.conjugate().vmult(T,N),N},l.prototype.pointToWorldFrame=function(T,N){var N=N||new s;return this.quaternion.vmult(T,N),N.vadd(this.position,N),N},l.prototype.vectorToWorldFrame=function(T,N){var N=N||new s;return this.quaternion.vmult(T,N),N};var u=new s,f=new c;l.prototype.addShape=function(T,O,N){var K=new s,k=new c;return O&&K.copy(O),N&&k.copy(N),this.shapes.push(T),this.shapeOffsets.push(K),this.shapeOrientations.push(k),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var T=this.shapes,O=this.shapeOffsets,N=T.length,K=0,k=0;k!==N;k++){var j=T[k];j.updateBoundingSphereRadius();var z=O[k].norm(),L=j.boundingSphereRadius;z+L>K&&(K=z+L)}this.boundingRadius=K};var v=new d;l.prototype.computeAABB=function(){for(var T=this.shapes,O=this.shapeOffsets,N=this.shapeOrientations,K=T.length,k=u,j=f,z=this.quaternion,L=this.aabb,tt=v,J=0;J!==K;J++){var F=T[J];N[J].mult(z,j),j.vmult(O[J],k),k.vadd(this.position,k),F.calculateWorldAABB(k,j,tt.lowerBound,tt.upperBound),J===0?L.copy(tt):L.extend(tt)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(T){var O=this.invInertia;if(!(O.x===O.y&&O.y===O.z&&!T)){var N=g,K=m;N.setRotationFromQuaternion(this.quaternion),N.transpose(K),N.scale(O,N),N.mmult(K,this.invInertiaWorld)}};var p=new s,_=new s;l.prototype.applyForce=function(T,O){if(this.type===l.DYNAMIC){var N=p;O.vsub(this.position,N);var K=_;N.cross(T,K),this.force.vadd(T,this.force),this.torque.vadd(K,this.torque)}};var y=new s,x=new s;l.prototype.applyLocalForce=function(T,O){if(this.type===l.DYNAMIC){var N=y,K=x;this.vectorToWorldFrame(T,N),this.pointToWorldFrame(O,K),this.applyForce(N,K)}};var C=new s,P=new s,I=new s;l.prototype.applyImpulse=function(T,O){if(this.type===l.DYNAMIC){var N=C;O.vsub(this.position,N);var K=P;K.copy(T),K.mult(this.invMass,K),this.velocity.vadd(K,this.velocity);var k=I;N.cross(T,k),this.invInertiaWorld.vmult(k,k),this.angularVelocity.vadd(k,this.angularVelocity)}};var D=new s,E=new s;l.prototype.applyLocalImpulse=function(T,O){if(this.type===l.DYNAMIC){var N=D,K=E;this.vectorToWorldFrame(T,N),this.pointToWorldFrame(O,K),this.applyImpulse(N,K)}};var M=new s;l.prototype.updateMassProperties=function(){var T=M;this.invMass=this.mass>0?1/this.mass:0;var O=this.inertia,N=this.fixedRotation;this.computeAABB(),T.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(T,this.mass,O),this.invInertia.set(O.x>0&&!N?1/O.x:0,O.y>0&&!N?1/O.y:0,O.z>0&&!N?1/O.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(T,O){var N=new s;return T.vsub(this.position,N),this.angularVelocity.cross(N,O),this.velocity.vadd(O,O),O}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,a){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=d;function d(z){this.chassisBody=z.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof z.indexRightAxis<"u"?z.indexRightAxis:1,this.indexForwardAxis=typeof z.indexForwardAxis<"u"?z.indexForwardAxis:0,this.indexUpAxis=typeof z.indexUpAxis<"u"?z.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,u=new r;new o,d.prototype.addWheel=function(z){z=z||{};var L=new c(z),tt=this.wheelInfos.length;return this.wheelInfos.push(L),tt},d.prototype.setSteeringValue=function(z,L){var tt=this.wheelInfos[L];tt.steering=z},new r,d.prototype.applyEngineForce=function(z,L){this.wheelInfos[L].engineForce=z},d.prototype.setBrake=function(z,L){this.wheelInfos[L].brake=z},d.prototype.addToWorld=function(z){this.constraints,z.add(this.chassisBody);var L=this;this.preStepCallback=function(){L.updateVehicle(z.dt)},z.addEventListener("preStep",this.preStepCallback),this.world=z},d.prototype.getVehicleAxisWorld=function(z,L){L.set(z===0?1:0,z===1?1:0,z===2?1:0),this.chassisBody.vectorToWorldFrame(L,L)},d.prototype.updateVehicle=function(z){for(var L=this.wheelInfos,tt=L.length,J=this.chassisBody,F=0;F<tt;F++)this.updateWheelTransform(F);this.currentVehicleSpeedKmHour=3.6*J.velocity.norm();var $=new r;this.getVehicleAxisWorld(this.indexForwardAxis,$),$.dot(J.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var F=0;F<tt;F++)this.castRay(L[F]);this.updateSuspension(z);for(var H=new r,A=new r,F=0;F<tt;F++){var b=L[F],G=b.suspensionForce;G>b.maxSuspensionForce&&(G=b.maxSuspensionForce),b.raycastResult.hitNormalWorld.scale(G*z,H),b.raycastResult.hitPointWorld.vsub(J.position,A),J.applyImpulse(H,b.raycastResult.hitPointWorld)}this.updateFriction(z);var Z=new r,et=new r,X=new r;for(F=0;F<tt;F++){var b=L[F];J.getVelocityAtWorldPoint(b.chassisConnectionPointWorld,X);var it=1;switch(this.indexUpAxis){case 1:it=-1;break}if(b.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,et);var ft=et.dot(b.raycastResult.hitNormalWorld);b.raycastResult.hitNormalWorld.scale(ft,Z),et.vsub(Z,et);var U=et.dot(X);b.deltaRotation=it*U*z/b.radius}(b.sliding||!b.isInContact)&&b.engineForce!==0&&b.useCustomSlidingRotationalSpeed&&(b.deltaRotation=(b.engineForce>0?1:-1)*b.customSlidingRotationalSpeed*z),Math.abs(b.brake)>Math.abs(b.engineForce)&&(b.deltaRotation=0),b.rotation+=b.deltaRotation,b.deltaRotation*=.99}},d.prototype.updateSuspension=function(z){for(var L=this.chassisBody,tt=L.mass,J=this.wheelInfos,F=J.length,$=0;$<F;$++){var H=J[$];if(H.isInContact){var A,b=H.suspensionRestLength,G=H.suspensionLength,Z=b-G;A=H.suspensionStiffness*Z*H.clippedInvContactDotSuspension;var et=H.suspensionRelativeVelocity,X;et<0?X=H.dampingCompression:X=H.dampingRelaxation,A-=X*et,H.suspensionForce=A*tt,H.suspensionForce<0&&(H.suspensionForce=0)}else H.suspensionForce=0}},d.prototype.removeFromWorld=function(z){this.constraints,z.remove(this.chassisBody),z.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;d.prototype.castRay=function(z){var L=f,tt=v;this.updateWheelTransformWorld(z);var J=this.chassisBody,F=-1,$=z.suspensionRestLength+z.radius;z.directionWorld.scale($,L);var H=z.chassisConnectionPointWorld;H.vadd(L,tt);var A=z.raycastResult;A.reset();var b=J.collisionResponse;J.collisionResponse=!1,this.world.rayTest(H,tt,A),J.collisionResponse=b;var G=A.body;if(z.raycastResult.groundObject=0,G){F=A.distance,z.raycastResult.hitNormalWorld=A.hitNormalWorld,z.isInContact=!0;var Z=A.distance;z.suspensionLength=Z-z.radius;var et=z.suspensionRestLength-z.maxSuspensionTravel,X=z.suspensionRestLength+z.maxSuspensionTravel;z.suspensionLength<et&&(z.suspensionLength=et),z.suspensionLength>X&&(z.suspensionLength=X,z.raycastResult.reset());var it=z.raycastResult.hitNormalWorld.dot(z.directionWorld),ft=new r;J.getVelocityAtWorldPoint(z.raycastResult.hitPointWorld,ft);var U=z.raycastResult.hitNormalWorld.dot(ft);if(it>=-.1)z.suspensionRelativeVelocity=0,z.clippedInvContactDotSuspension=1/.1;else{var Rt=-1/it;z.suspensionRelativeVelocity=U*Rt,z.clippedInvContactDotSuspension=Rt}}else z.suspensionLength=z.suspensionRestLength+0*z.maxSuspensionTravel,z.suspensionRelativeVelocity=0,z.directionWorld.scale(-1,z.raycastResult.hitNormalWorld),z.clippedInvContactDotSuspension=1;return F},d.prototype.updateWheelTransformWorld=function(z){z.isInContact=!1;var L=this.chassisBody;L.pointToWorldFrame(z.chassisConnectionPointLocal,z.chassisConnectionPointWorld),L.vectorToWorldFrame(z.directionLocal,z.directionWorld),L.vectorToWorldFrame(z.axleLocal,z.axleWorld)},d.prototype.updateWheelTransform=function(z){var L=h,tt=l,J=u,F=this.wheelInfos[z];this.updateWheelTransformWorld(F),F.directionLocal.scale(-1,L),tt.copy(F.axleLocal),L.cross(tt,J),J.normalize(),tt.normalize();var $=F.steering,H=new s;H.setFromAxisAngle(L,$);var A=new s;A.setFromAxisAngle(tt,F.rotation);var b=F.worldTransform.quaternion;this.chassisBody.quaternion.mult(H,b),b.mult(A,b),b.normalize();var G=F.worldTransform.position;G.copy(F.directionWorld),G.scale(F.suspensionLength,G),G.vadd(F.chassisConnectionPointWorld,G)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];d.prototype.getWheelTransformWorld=function(z){return this.wheelInfos[z].worldTransform};var m=new r,p=[],_=[],y=1;d.prototype.updateFriction=function(z){for(var L=m,tt=this.wheelInfos,J=tt.length,F=this.chassisBody,$=_,H=p,A=0;A<J;A++){var b=tt[A],G=b.raycastResult.body;b.sideImpulse=0,b.forwardImpulse=0,$[A]||($[A]=new r),H[A]||(H[A]=new r)}for(var A=0;A<J;A++){var b=tt[A],G=b.raycastResult.body;if(G){var Z=H[A],et=this.getWheelTransformWorld(A);et.vectorToWorldFrame(g[this.indexRightAxis],Z);var X=b.raycastResult.hitNormalWorld,it=Z.dot(X);X.scale(it,L),Z.vsub(L,Z),Z.normalize(),X.cross(Z,$[A]),$[A].normalize(),b.sideImpulse=j(F,b.raycastResult.hitPointWorld,G,b.raycastResult.hitPointWorld,Z),b.sideImpulse*=y}}var ft=1,U=.5;this.sliding=!1;for(var A=0;A<J;A++){var b=tt[A],G=b.raycastResult.body,Rt=0;if(b.slipInfo=1,G){var xt=0,ot=b.brake?b.brake:xt;Rt=I(F,G,b.raycastResult.hitPointWorld,$[A],ot),Rt+=b.engineForce*z;var rt=ot/Rt;b.slipInfo*=rt}if(b.forwardImpulse=0,b.skidInfo=1,G){b.skidInfo=1;var Kt=b.suspensionForce*z*b.frictionSlip,At=Kt,Gt=Kt*At;b.forwardImpulse=Rt;var R=b.forwardImpulse*U,w=b.sideImpulse*ft,Q=R*R+w*w;if(b.sliding=!1,Q>Gt){this.sliding=!0,b.sliding=!0;var rt=Kt/Math.sqrt(Q);b.skidInfo*=rt}}}if(this.sliding)for(var A=0;A<J;A++){var b=tt[A];b.sideImpulse!==0&&b.skidInfo<1&&(b.forwardImpulse*=b.skidInfo,b.sideImpulse*=b.skidInfo)}for(var A=0;A<J;A++){var b=tt[A],ct=new r;if(ct.copy(b.raycastResult.hitPointWorld),b.forwardImpulse!==0){var mt=new r;$[A].scale(b.forwardImpulse,mt),F.applyImpulse(mt,ct)}if(b.sideImpulse!==0){var G=b.raycastResult.body,lt=new r;lt.copy(b.raycastResult.hitPointWorld);var Ot=new r;H[A].scale(b.sideImpulse,Ot),F.pointToLocalFrame(ct,ct),ct["xyz"[this.indexUpAxis]]*=b.rollInfluence,F.pointToWorldFrame(ct,ct),F.applyImpulse(Ot,ct),Ot.scale(-1,Ot),G.applyImpulse(Ot,lt)}}};var x=new r,C=new r,P=new r;function I(z,L,tt,J,F){var $=0,H=tt,A=x,b=C,G=P;z.getVelocityAtWorldPoint(H,A),L.getVelocityAtWorldPoint(H,b),A.vsub(b,G);var Z=J.dot(G),et=O(z,tt,J),X=O(L,tt,J),it=1,ft=it/(et+X);return $=-Z*ft,F<$&&($=F),$<-F&&($=-F),$}var D=new r,E=new r,M=new r,T=new r;function O(z,L,tt){var J=D,F=E,$=M,H=T;return L.vsub(z.position,J),J.cross(tt,F),z.invInertiaWorld.vmult(F,H),H.cross(J,$),z.invMass+tt.dot($)}var N=new r,K=new r,k=new r;function j(z,L,tt,J,F,it){var H=F.norm2();if(H>1.1)return 0;var A=N,b=K,G=k;z.getVelocityAtWorldPoint(L,A),tt.getVelocityAtWorldPoint(J,b),A.vsub(b,G);var Z=F.dot(G),et=.2,X=1/(z.invMass+tt.invMass),it=-et*Z*X;return it}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,a){var r=e("./Body"),s=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),d=e("../constraints/HingeConstraint");n.exports=h;function h(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new c(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof f.position<"u"?f.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new c(0,1,0);this.wheelAxes.push(p);var _=new d(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:c.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),_=g.x,y=g.y;this.constraints[v].axisA.set(m*_-p*y,p*_+m*y,0)},h.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},h.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var l=new c;h.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},h.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,l),m.vectorToWorldFrame(l,l),p.vadd(l,p)},h.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},h.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var u=new c;h.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,u),m.dot(u)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,a){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,_=this.smoothingRadius*this.smoothingRadius,y=o,x=0;x!==m;x++){var C=this.particles[x];C.position.vsub(v.position,y),p!==C.id&&y.norm2()<_&&g.push(C)}};var c=new r,d=new r,h=new r,l=new r,u=new r,f=new r;s.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,p=this.eps,_=0;_!==v;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var C=x.length,P=0,I=0;I!==C;I++){y.position.vsub(x[I].position,g);var D=g.norm(),E=this.w(D);P+=x[I].mass*E}this.densities[_]=P,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var M=d,T=h,O=l,N=u,K=f,_=0;_!==v;_++){var k=this.particles[_];M.set(0,0,0),T.set(0,0,0);for(var j,z,x=this.neighbors[_],C=x.length,I=0;I!==C;I++){var L=x[I];k.position.vsub(L.position,N);var tt=N.norm();j=-L.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+p)+this.pressures[I]/(this.densities[I]*this.densities[I]+p)),this.gradw(N,O),O.mult(j,O),M.vadd(O,M),L.velocity.vsub(k.velocity,K),K.mult(1/(1e-4+this.densities[_]*this.densities[I])*this.viscosity*L.mass,K),z=this.nablaw(tt),K.mult(z,K),T.vadd(K,T)}T.mult(k.mass,T),M.mult(k.mass,M),k.force.vadd(T,k.force),k.force.vadd(M,k.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}s.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},s.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},s.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},s.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new r,c=new r,d=new r,h=new r,l=new r,u=new r,f=new r,v=new r,g=new r,m=new r,p=new r;s.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,C=this.bodyA,P=this.bodyB,I=o,D=c,E=d,M=h,T=p,O=l,N=u,K=f,k=v,j=g,z=m;this.getWorldAnchorA(O),this.getWorldAnchorB(N),O.vsub(C.position,K),N.vsub(P.position,k),N.vsub(O,I);var L=I.norm();D.copy(I),D.normalize(),P.velocity.vsub(C.velocity,E),P.angularVelocity.cross(k,T),E.vadd(T,E),C.angularVelocity.cross(K,T),E.vsub(T,E),D.mult(-_*(L-x)-y*E.dot(D),M),C.force.vsub(M,C.force),P.force.vadd(M,P.force),K.cross(M,j),k.cross(M,z),C.torque.vsub(j,C.torque),P.torque.vadd(z,P.torque)}},{"../math/Vec3":30}],36:[function(e,n,a){var r=e("../math/Vec3"),s=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=d;function d(u){u=c.defaults(u,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=u.maxSuspensionTravel,this.customSlidingRotationalSpeed=u.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=u.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=u.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=u.chassisConnectionPointWorld.clone(),this.directionLocal=u.directionLocal.clone(),this.directionWorld=u.directionWorld.clone(),this.axleLocal=u.axleLocal.clone(),this.axleWorld=u.axleWorld.clone(),this.suspensionRestLength=u.suspensionRestLength,this.suspensionMaxLength=u.suspensionMaxLength,this.radius=u.radius,this.suspensionStiffness=u.suspensionStiffness,this.dampingCompression=u.dampingCompression,this.dampingRelaxation=u.dampingRelaxation,this.frictionSlip=u.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=u.rollInfluence,this.maxSuspensionForce=u.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=u.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var l=new r,h=new r,l=new r;d.prototype.updateWheel=function(u){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(u.position,h),u.getVelocityAtWorldPoint(h,l);var g=f.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,u=this.halfExtents.y,f=this.halfExtents.z,v=s,g=[new v(-l,-u,-f),new v(l,-u,-f),new v(l,u,-f),new v(-l,u,-f),new v(-l,-u,f),new v(l,-u,f),new v(l,u,f),new v(-l,u,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},c.prototype.calculateLocalInertia=function(l,u){return u=u||new s,c.calculateInertia(this.halfExtents,l,u),u},c.calculateInertia=function(l,u,f){var v=l;f.x=1/12*u*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*u*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*u*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,u){var f=l,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),u!==void 0)for(var g=0;g!==f.length;g++)u.vmult(f[g],f[g]);return f},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var d=new s;new s,c.prototype.forEachWorldCorner=function(l,u,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)d.set(g[m][0],g[m][1],g[m][2]),u.vmult(d,d),l.vadd(d,d),f(d.x,d.y,d.z)};var h=[new s,new s,new s,new s,new s,new s,new s,new s];c.prototype.calculateWorldAABB=function(l,u,f,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];u.vmult(m,m),l.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=h[p];u.vmult(m,m),l.vadd(m,m);var _=m.x,y=m.y,x=m.z;_>v.x&&(v.x=_),y>v.y&&(v.y=y),x>v.z&&(v.z=x),_<f.x&&(f.x=_),y<f.y&&(f.y=y),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(F,$,H){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=F||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=$||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=H?H.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var d=new s;c.prototype.computeEdges=function(){var F=this.faces,$=this.vertices;$.length;var H=this.uniqueEdges;H.length=0;for(var A=d,b=0;b!==F.length;b++)for(var G=F[b],Z=G.length,et=0;et!==Z;et++){var X=(et+1)%Z;$[G[et]].vsub($[G[X]],A),A.normalize();for(var it=!1,ft=0;ft!==H.length;ft++)if(H[ft].almostEquals(A)||H[ft].almostEquals(A)){it=!0;break}it||H.push(A.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var F=0;F<this.faces.length;F++){for(var $=0;$<this.faces[F].length;$++)if(!this.vertices[this.faces[F][$]])throw new Error("Vertex "+this.faces[F][$]+" not found!");var H=this.faceNormals[F]||new s;this.getFaceNormal(F,H),H.negate(H),this.faceNormals[F]=H;var A=this.vertices[this.faces[F][0]];if(H.dot(A)<0){console.error(".faceNormals["+F+"] = Vec3("+H.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var $=0;$<this.faces[F].length;$++)console.warn(".vertices["+this.faces[F][$]+"] = Vec3("+this.vertices[this.faces[F][$]].toString()+")")}}};var h=new s,l=new s;c.computeNormal=function(F,$,H,A){$.vsub(F,l),H.vsub($,h),h.cross(l,A),A.isZero()||A.normalize()},c.prototype.getFaceNormal=function(F,$){var H=this.faces[F],A=this.vertices[H[0]],b=this.vertices[H[1]],G=this.vertices[H[2]];return c.computeNormal(A,b,G,$)};var u=new s;c.prototype.clipAgainstHull=function(F,$,H,A,b,G,Z,et,X){for(var it=u,ft=-1,U=-Number.MAX_VALUE,Rt=0;Rt<H.faces.length;Rt++){it.copy(H.faceNormals[Rt]),b.vmult(it,it);var xt=it.dot(G);xt>U&&(U=xt,ft=Rt)}for(var ot=[],rt=H.faces[ft],Kt=rt.length,At=0;At<Kt;At++){var Gt=H.vertices[rt[At]],R=new s;R.copy(Gt),b.vmult(R,R),A.vadd(R,R),ot.push(R)}ft>=0&&this.clipFaceAgainstHull(G,F,$,ot,Z,et,X)};var f=new s,v=new s,g=new s,m=new s,p=new s,_=new s;c.prototype.findSeparatingAxis=function(F,$,H,A,b,G,Z,et){var X=f,it=v,ft=g,U=m,Rt=p,xt=_,ot=Number.MAX_VALUE,rt=this;if(rt.uniqueAxes)for(var At=0;At!==rt.uniqueAxes.length;At++){H.vmult(rt.uniqueAxes[At],X);var R=rt.testSepAxis(X,F,$,H,A,b);if(R===!1)return!1;R<ot&&(ot=R,G.copy(X))}else for(var Kt=Z?Z.length:rt.faces.length,At=0;At<Kt;At++){var Gt=Z?Z[At]:At;X.copy(rt.faceNormals[Gt]),H.vmult(X,X);var R=rt.testSepAxis(X,F,$,H,A,b);if(R===!1)return!1;R<ot&&(ot=R,G.copy(X))}if(F.uniqueAxes)for(var At=0;At!==F.uniqueAxes.length;At++){b.vmult(F.uniqueAxes[At],it);var R=rt.testSepAxis(it,F,$,H,A,b);if(R===!1)return!1;R<ot&&(ot=R,G.copy(it))}else for(var w=et?et.length:F.faces.length,At=0;At<w;At++){var Gt=et?et[At]:At;it.copy(F.faceNormals[Gt]),b.vmult(it,it);var R=rt.testSepAxis(it,F,$,H,A,b);if(R===!1)return!1;R<ot&&(ot=R,G.copy(it))}for(var Q=0;Q!==rt.uniqueEdges.length;Q++){H.vmult(rt.uniqueEdges[Q],U);for(var ct=0;ct!==F.uniqueEdges.length;ct++)if(b.vmult(F.uniqueEdges[ct],Rt),U.cross(Rt,xt),!xt.almostZero()){xt.normalize();var mt=rt.testSepAxis(xt,F,$,H,A,b);if(mt===!1)return!1;mt<ot&&(ot=mt,G.copy(xt))}}return A.vsub($,ft),ft.dot(G)>0&&G.negate(G),!0};var y=[],x=[];c.prototype.testSepAxis=function(F,$,H,A,b,G){var Z=this;c.project(Z,F,H,A,y),c.project($,F,b,G,x);var et=y[0],X=y[1],it=x[0],ft=x[1],U=et-ft,Rt=it-X,xt=U<Rt?U:Rt;return xt};var C=new s,P=new s;c.prototype.calculateLocalInertia=function(F,$){this.computeLocalAABB(C,P);var H=P.x-C.x,A=P.y-C.y,b=P.z-C.z;$.x=1/12*F*(2*A*2*A+2*b*2*b),$.y=1/12*F*(2*H*2*H+2*b*2*b),$.z=1/12*F*(2*A*2*A+2*H*2*H)},c.prototype.getPlaneConstantOfFace=function(F){var $=this.faces[F],H=this.faceNormals[F],A=this.vertices[$[0]],b=-H.dot(A);return b};var I=new s,D=new s,E=new s,M=new s,T=new s,O=new s,N=new s,K=new s;c.prototype.clipFaceAgainstHull=function(F,$,H,A,b,G,Z){for(var et=I,X=D,it=E,ft=M,U=T,Rt=O,xt=N,ot=K,rt=this,Kt=[],At=A,Gt=Kt,R=-1,w=Number.MAX_VALUE,Q=0;Q<rt.faces.length;Q++){et.copy(rt.faceNormals[Q]),H.vmult(et,et);var ct=et.dot(F);ct<w&&(w=ct,R=Q)}if(!(R<0)){var mt=rt.faces[R];mt.connectedFaces=[];for(var lt=0;lt<rt.faces.length;lt++)for(var Ot=0;Ot<rt.faces[lt].length;Ot++)mt.indexOf(rt.faces[lt][Ot])!==-1&&lt!==R&&mt.connectedFaces.indexOf(lt)===-1&&mt.connectedFaces.push(lt);At.length;for(var gt=mt.length,It=0;It<gt;It++){var Zt=rt.vertices[mt[It]],Tt=rt.vertices[mt[(It+1)%gt]];Zt.vsub(Tt,X),it.copy(X),H.vmult(it,it),$.vadd(it,it),ft.copy(this.faceNormals[R]),H.vmult(ft,ft),$.vadd(ft,ft),it.cross(ft,U),U.negate(U),Rt.copy(Zt),H.vmult(Rt,Rt),$.vadd(Rt,Rt),-Rt.dot(U);var Yt;{var Ht=mt.connectedFaces[It];xt.copy(this.faceNormals[Ht]);var ne=this.getPlaneConstantOfFace(Ht);ot.copy(xt),H.vmult(ot,ot);var Yt=ne-ot.dot($)}for(this.clipFaceAgainstPlane(At,Gt,ot,Yt);At.length;)At.shift();for(;Gt.length;)At.push(Gt.shift())}xt.copy(this.faceNormals[R]);var ne=this.getPlaneConstantOfFace(R);ot.copy(xt),H.vmult(ot,ot);for(var Yt=ne-ot.dot($),lt=0;lt<At.length;lt++){var zt=ot.dot(At[lt])+Yt;if(zt<=b&&(console.log("clamped: depth="+zt+" to minDist="+(b+"")),zt=b),zt<=G){var jt=At[lt];if(zt<=0){var Qt={point:jt,normal:ot,depth:zt};Z.push(Qt)}}}}},c.prototype.clipFaceAgainstPlane=function(F,$,H,A){var b,G,Z=F.length;if(Z<2)return $;var et=F[F.length-1],X=F[0];b=H.dot(et)+A;for(var it=0;it<Z;it++){if(X=F[it],G=H.dot(X)+A,b<0)if(G<0){var ft=new s;ft.copy(X),$.push(ft)}else{var ft=new s;et.lerp(X,b/(b-G),ft),$.push(ft)}else if(G<0){var ft=new s;et.lerp(X,b/(b-G),ft),$.push(ft),$.push(X)}et=X,b=G}return $},c.prototype.computeWorldVertices=function(F,$){for(var H=this.vertices.length;this.worldVertices.length<H;)this.worldVertices.push(new s);for(var A=this.vertices,b=this.worldVertices,G=0;G!==H;G++)$.vmult(A[G],b[G]),F.vadd(b[G],b[G]);this.worldVerticesNeedsUpdate=!1},new s,c.prototype.computeLocalAABB=function(F,$){var H=this.vertices.length,A=this.vertices;F.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),$.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var b=0;b<H;b++){var G=A[b];G.x<F.x?F.x=G.x:G.x>$.x&&($.x=G.x),G.y<F.y?F.y=G.y:G.y>$.y&&($.y=G.y),G.z<F.z?F.z=G.z:G.z>$.z&&($.z=G.z)}},c.prototype.computeWorldFaceNormals=function(F){for(var $=this.faceNormals.length;this.worldFaceNormals.length<$;)this.worldFaceNormals.push(new s);for(var H=this.faceNormals,A=this.worldFaceNormals,b=0;b!==$;b++)F.vmult(H[b],A[b]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var F=0,$=this.vertices,H=0,A=$.length;H!==A;H++){var b=$[H].norm2();b>F&&(F=b)}this.boundingSphereRadius=Math.sqrt(F)};var k=new s;c.prototype.calculateWorldAABB=function(F,$,H,A){for(var b=this.vertices.length,G=this.vertices,Z,et,X,it,ft,U,Rt=0;Rt<b;Rt++){k.copy(G[Rt]),$.vmult(k,k),F.vadd(k,k);var xt=k;xt.x<Z||Z===void 0?Z=xt.x:(xt.x>it||it===void 0)&&(it=xt.x),xt.y<et||et===void 0?et=xt.y:(xt.y>ft||ft===void 0)&&(ft=xt.y),xt.z<X||X===void 0?X=xt.z:(xt.z>U||U===void 0)&&(U=xt.z)}H.set(Z,et,X),A.set(it,ft,U)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(F){F=F||new s;for(var $=this.vertices.length,H=this.vertices,A=0;A<$;A++)F.vadd(H[A],F);return F.mult(1/$,F),F},c.prototype.transformAllPoints=function(F,$){var H=this.vertices.length,A=this.vertices;if($){for(var b=0;b<H;b++){var G=A[b];$.vmult(G,G)}for(var b=0;b<this.faceNormals.length;b++){var G=this.faceNormals[b];$.vmult(G,G)}}if(F)for(var b=0;b<H;b++){var G=A[b];G.vadd(F,G)}};var j=new s,z=new s,L=new s;c.prototype.pointIsInside=function(F){var $=this.vertices.length,H=this.vertices,A=this.faces,b=this.faceNormals,G=null,Z=this.faces.length,et=j;this.getAveragePointLocal(et);for(var X=0;X<Z;X++){this.faces[X].length;var $=b[X],it=H[A[X][0]],ft=z;F.vsub(it,ft);var U=$.dot(ft),Rt=L;et.vsub(it,Rt);var xt=$.dot(Rt);if(U<0&&xt>0||U>0&&xt<0)return!1}return G?1:-1},new s;var tt=new s,J=new s;c.project=function(F,$,H,A,b){var G=F.vertices.length,Z=tt,et=0,X=0,it=J,ft=F.vertices;it.setZero(),o.vectorToLocalFrame(H,A,$,Z),o.pointToLocalFrame(H,A,it,it);var U=it.dot(Z);X=et=ft[0].dot(Z);for(var Rt=1;Rt<G;Rt++){var xt=ft[Rt].dot(Z);xt>et&&(et=xt),xt<X&&(X=xt)}if(X-=U,et-=U,X>et){var ot=X;X=et,et=ot}b[0]=et,b[1]=X}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(d,h,l,u){var f=u,v=[],g=[],m=[],p=[],_=[],y=Math.cos,x=Math.sin;v.push(new s(h*y(0),h*x(0),-l*.5)),p.push(0),v.push(new s(d*y(0),d*x(0),l*.5)),_.push(1);for(var C=0;C<f;C++){var P=2*Math.PI/f*(C+1),I=2*Math.PI/f*(C+.5);C<f-1?(v.push(new s(h*y(P),h*x(P),-l*.5)),p.push(2*C+2),v.push(new s(d*y(P),d*x(P),l*.5)),_.push(2*C+3),m.push([2*C+2,2*C+3,2*C+1,2*C])):m.push([0,1,2*C+1,2*C]),(f%2===1||C<f/2)&&g.push(new s(y(I),x(I),0))}m.push(_),g.push(new s(0,0,1));for(var D=[],C=0;C<p.length;C++)D.push(p[p.length-C-1]);m.push(D),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,a){var r=e("./Shape"),s=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=d;function d(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}d.prototype=new r,d.prototype.update=function(){this._cachedPillars={}},d.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var f=0;f!==h[u].length;f++){var v=h[u][f];v<l&&(l=v)}this.minValue=l},d.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var f=0;f!==h[u].length;f++){var v=h[u][f];v>l&&(l=v)}this.maxValue=l},d.prototype.setHeightValueAtIndex=function(h,l,u){var f=this.data;f[h][l]=u,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},d.prototype.getRectMinMax=function(h,l,u,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=h;p<=u;p++)for(var _=l;_<=f;_++){var y=g[p][_];y>m&&(m=y)}v[0]=this.minValue,v[1]=m},d.prototype.getIndexOfPosition=function(h,l,u,f){var v=this.elementSize,g=this.data,m=Math.floor(h/v),p=Math.floor(l/v);return u[0]=m,u[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},d.prototype.getHeightAt=function(h,l,u){var f=[];this.getIndexOfPosition(h,l,f,u);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},d.prototype.getCacheConvexTrianglePillarKey=function(h,l,u){return h+"_"+l+"_"+(u?1:0)},d.prototype.getCachedConvexTrianglePillar=function(h,l,u){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.setCachedConvexTrianglePillar=function(h,l,u,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]={convex:f,offset:v}},d.prototype.clearCachedConvexTrianglePillar=function(h,l,u){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.getConvexTrianglePillar=function(h,l,u){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,l,u);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new s,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new o);p.length=5;for(var _=0;_<5;_++)p[_]||(p[_]=[]);var y=f.vertices,x=(Math.min(g[h][l],g[h+1][l],g[h][l+1],g[h+1][l+1])-this.minValue)/2+this.minValue;u?(v.set((h+.75)*m,(l+.75)*m,x),y[0].set(.25*m,.25*m,g[h+1][l+1]-x),y[1].set(-.75*m,.25*m,g[h][l+1]-x),y[2].set(.25*m,-.75*m,g[h+1][l]-x),y[3].set(.25*m,.25*m,-x-1),y[4].set(-.75*m,.25*m,-x-1),y[5].set(.25*m,-.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((h+.25)*m,(l+.25)*m,x),y[0].set(-.25*m,-.25*m,g[h][l]-x),y[1].set(.75*m,-.25*m,g[h+1][l]-x),y[2].set(-.25*m,.75*m,g[h][l+1]-x),y[3].set(-.25*m,-.25*m,-x-1),y[4].set(.75*m,-.25*m,-x-1),y[5].set(-.25*m,.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,u,f,v)},d.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},d.prototype.volume=function(){return Number.MAX_VALUE},d.prototype.calculateWorldAABB=function(h,l,u,f){u.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},d.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){return d=d||new s,d.set(0,0,0),d},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,d,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(d){var h=this.worldNormal;h.set(0,0,1),d.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(d,h){return h=h||new s,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new s;o.prototype.calculateWorldAABB=function(d,h,l,u){c.set(0,0,1),h.vmult(c,c);var f=Number.MAX_VALUE;l.set(-f,-f,-f),u.set(f,f,f),c.x===1&&(u.x=d.x),c.y===1&&(u.y=d.y),c.z===1&&(u.z=d.z),c.x===-1&&(l.x=d.x),c.y===-1&&(l.y=d.y),c.z===-1&&(l.z=d.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,a){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){d=d||new s;var h=2*c*this.radius*this.radius/5;return d.x=h,d.y=h,d.z=h,d},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,d,h,l){for(var u=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];h[g]=c[g]-u,l[g]=c[g]+u}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,a){n.exports=h;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),d=e("../utils/Octree");function h(D,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(D),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new c,this.edges=null,this.scale=new s(1,1,1),this.tree=new d,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new s;h.prototype.updateTree=function(){var D=this.tree;D.reset(),D.aabb.copy(this.aabb);var E=this.scale;D.aabb.lowerBound.x*=1/E.x,D.aabb.lowerBound.y*=1/E.y,D.aabb.lowerBound.z*=1/E.z,D.aabb.upperBound.x*=1/E.x,D.aabb.upperBound.y*=1/E.y,D.aabb.upperBound.z*=1/E.z;for(var M=new c,T=new s,O=new s,N=new s,K=[T,O,N],k=0;k<this.indices.length/3;k++){var j=k*3;this._getUnscaledVertex(this.indices[j],T),this._getUnscaledVertex(this.indices[j+1],O),this._getUnscaledVertex(this.indices[j+2],N),M.setFromPoints(K),D.insert(M,k)}D.removeEmptyNodes()};var u=new c;h.prototype.getTrianglesInAABB=function(D,E){u.copy(D);var M=this.scale,T=M.x,O=M.y,N=M.z,K=u.lowerBound,k=u.upperBound;return K.x/=T,K.y/=O,K.z/=N,k.x/=T,k.y/=O,k.z/=N,this.tree.aabbQuery(u,E)},h.prototype.setScale=function(D){var E=this.scale.x===this.scale.y===this.scale.z,M=D.x===D.y===D.z;E&&M||this.updateNormals(),this.scale.copy(D),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var D=l,E=this.normals,M=0;M<this.indices.length/3;M++){var T=M*3,O=this.indices[T],N=this.indices[T+1],K=this.indices[T+2];this.getVertex(O,p),this.getVertex(N,_),this.getVertex(K,y),h.computeNormal(_,p,y,D),E[T]=D.x,E[T+1]=D.y,E[T+2]=D.z}},h.prototype.updateEdges=function(){for(var D={},E=function(j,z){var L=O<N?O+"_"+N:N+"_"+O;D[L]=!0},M=0;M<this.indices.length/3;M++){var T=M*3,O=this.indices[T],N=this.indices[T+1];this.indices[T+2],E(),E(),E()}var K=Object.keys(D);this.edges=new Int16Array(K.length*2);for(var M=0;M<K.length;M++){var k=K[M].split("_");this.edges[2*M]=parseInt(k[0],10),this.edges[2*M+1]=parseInt(k[1],10)}},h.prototype.getEdgeVertex=function(D,E,M){var T=this.edges[D*2+(E?1:0)];this.getVertex(T,M)};var f=new s,v=new s;h.prototype.getEdgeVector=function(D,E){var M=f,T=v;this.getEdgeVertex(D,0,M),this.getEdgeVertex(D,1,T),T.vsub(M,E)};var g=new s,m=new s;h.computeNormal=function(D,E,M,T){E.vsub(D,m),M.vsub(E,g),g.cross(m,T),T.isZero()||T.normalize()};var p=new s,_=new s,y=new s;h.prototype.getVertex=function(D,E){var M=this.scale;return this._getUnscaledVertex(D,E),E.x*=M.x,E.y*=M.y,E.z*=M.z,E},h.prototype._getUnscaledVertex=function(D,E){var M=D*3,T=this.vertices;return E.set(T[M],T[M+1],T[M+2])},h.prototype.getWorldVertex=function(D,E,M,T){return this.getVertex(D,T),o.pointToWorldFrame(E,M,T,T),T},h.prototype.getTriangleVertices=function(D,E,M,T){var O=D*3;this.getVertex(this.indices[O],E),this.getVertex(this.indices[O+1],M),this.getVertex(this.indices[O+2],T)},h.prototype.getNormal=function(D,E){var M=D*3;return E.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var x=new c;h.prototype.calculateLocalInertia=function(D,E){this.computeLocalAABB(x);var M=x.upperBound.x-x.lowerBound.x,T=x.upperBound.y-x.lowerBound.y,O=x.upperBound.z-x.lowerBound.z;return E.set(1/12*D*(2*T*2*T+2*O*2*O),1/12*D*(2*M*2*M+2*O*2*O),1/12*D*(2*T*2*T+2*M*2*M))};var C=new s;h.prototype.computeLocalAABB=function(D){var E=D.lowerBound,M=D.upperBound,T=this.vertices.length;this.vertices;var O=C;this.getVertex(0,O),E.copy(O),M.copy(O);for(var N=0;N!==T;N++)this.getVertex(N,O),O.x<E.x?E.x=O.x:O.x>M.x&&(M.x=O.x),O.y<E.y?E.y=O.y:O.y>M.y&&(M.y=O.y),O.z<E.z?E.z=O.z:O.z>M.z&&(M.z=O.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var D=0,E=this.vertices,M=new s,T=0,O=E.length/3;T!==O;T++){this.getVertex(T,M);var N=M.norm2();N>D&&(D=N)}this.boundingSphereRadius=Math.sqrt(D)},new s;var P=new o,I=new c;h.prototype.calculateWorldAABB=function(D,E,M,T){var O=P,N=I;O.position=D,O.quaternion=E,this.aabb.toWorldFrame(O,N),M.copy(N.lowerBound),T.copy(N.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(D,E,M,T,O){D=D||1,E=E||.5,M=M||8,T=T||6,O=O||Math.PI*2;for(var N=[],K=[],k=0;k<=M;k++)for(var j=0;j<=T;j++){var z=j/T*O,L=k/M*Math.PI*2,tt=(D+E*Math.cos(L))*Math.cos(z),J=(D+E*Math.cos(L))*Math.sin(z),F=E*Math.sin(L);N.push(tt,J,F)}for(var k=1;k<=M;k++)for(var j=1;j<=T;j++){var $=(T+1)*k+j-1,H=(T+1)*(k-1)+j-1,A=(T+1)*(k-1)+j,b=(T+1)*k+j;K.push($,H,b),K.push(H,A,b)}return new h(N,K)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,a){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var o=[],c=[],d=[];s.prototype.solve=function(h,l){var u=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=l.bodies,_=p.length,y=h,x,C,P,I,D,E;if(m!==0)for(var M=0;M!==_;M++)p[M].updateSolveMassProperties();var T=c,O=d,N=o;T.length=m,O.length=m,N.length=m;for(var M=0;M!==m;M++){var K=g[M];N[M]=0,O[M]=K.computeB(y),T[M]=1/K.computeC()}if(m!==0){for(var M=0;M!==_;M++){var k=p[M],j=k.vlambda,z=k.wlambda;j.set(0,0,0),z&&z.set(0,0,0)}for(u=0;u!==f;u++){I=0;for(var L=0;L!==m;L++){var K=g[L];x=O[L],C=T[L],E=N[L],D=K.computeGWlambda(),P=C*(x-D-K.eps*E),E+P<K.minForce?P=K.minForce-E:E+P>K.maxForce&&(P=K.maxForce-E),N[L]+=P,I+=P>0?P:-P,K.addToWlambda(P)}if(I*I<v)break}for(var M=0;M!==_;M++){var k=p[M],tt=k.velocity,J=k.angularVelocity;tt.vadd(k.vlambda,tt),J&&J.vadd(k.wlambda,J)}}return u}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,a){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,o){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var o=this.equations,c=o.indexOf(s);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,a){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function o(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],d=[],h={bodies:[]},l=s.STATIC;function u(p){for(var _=p.length,y=0;y!==_;y++){var x=p[y];if(!x.visited&&!(x.body.type&l))return x}return!1}var f=[];function v(p,_,y,x){for(f.push(p),p.visited=!0,_(p,y,x);f.length;)for(var C=f.pop(),P;P=u(C.children);)P.visited=!0,_(P,y,x),f.push(P)}function g(p,_,y){_.push(p.body);for(var x=p.eqs.length,C=0;C!==x;C++){var P=p.eqs[C];y.indexOf(P)===-1&&y.push(P)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,_){for(var y=c,x=this.nodePool,C=_.bodies,P=this.equations,I=P.length,D=C.length,E=this.subsolver;x.length<D;)x.push(this.createNode());y.length=D;for(var M=0;M<D;M++)y[M]=x[M];for(var M=0;M!==D;M++){var T=y[M];T.body=C[M],T.children.length=0,T.eqs.length=0,T.visited=!1}for(var O=0;O!==I;O++){var N=P[O],M=C.indexOf(N.bi),K=C.indexOf(N.bj),k=y[M],j=y[K];k.children.push(j),k.eqs.push(N),j.children.push(k),j.eqs.push(N)}var z,L=0,tt=d;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var J=h;z=u(y);){tt.length=0,J.bodies.length=0,v(z,g,J.bodies,tt);var F=tt.length;tt=tt.sort(m);for(var M=0;M!==F;M++)E.addEquation(tt[M]);E.solve(p,J),E.removeAllEquations(),L++}return L};function m(p,_){return _.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,a){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[s]===void 0&&(c[s]=[]),c[s].indexOf(o)===-1&&c[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[s]!==void 0&&c[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[s]===void 0)return this;var d=c[s].indexOf(o);return d!==-1&&c[s].splice(d,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,c=o[s.type];if(c!==void 0){s.target=this;for(var d=0,h=c.length;d<h;d++)c[d].call(this,s)}return this}}},{}],50:[function(e,n,a){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,u){u=u||{},u.root=null,u.aabb=l,o.call(this,u),this.maxDepth=typeof u.maxDepth<"u"?u.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,u){this.children.length=this.data.length=0},o.prototype.insert=function(l,u,f){var v=this.data;if(f=f||0,!this.aabb.contains(l))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(l,u,f+1))return!0;m&&(g.length=0)}return v.push(u),!0};var d=new s;o.prototype.subdivide=function(){var l=this.aabb,u=l.lowerBound,f=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new s(0,0,0)})}),new o({aabb:new r({lowerBound:new s(1,0,0)})}),new o({aabb:new r({lowerBound:new s(1,1,0)})}),new o({aabb:new r({lowerBound:new s(1,1,1)})}),new o({aabb:new r({lowerBound:new s(0,1,1)})}),new o({aabb:new r({lowerBound:new s(0,0,1)})}),new o({aabb:new r({lowerBound:new s(1,0,1)})}),new o({aabb:new r({lowerBound:new s(0,1,0)})})),f.vsub(u,d),d.scale(.5,d);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var _=p.aabb.lowerBound;_.x*=d.x,_.y*=d.y,_.z*=d.z,_.vadd(u,_),_.vadd(d,p.aabb.upperBound)}},o.prototype.aabbQuery=function(l,u){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(u,v.data),Array.prototype.push.apply(f,v.children)}return u};var h=new r;o.prototype.rayQuery=function(l,u,f){return l.getAABB(h),h.toLocalFrame(u,h),this.aabbQuery(h,f),f},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var u=l.pop(),f=u.children.length-1;f>=0;f--)u.children[f].data.length||u.children.splice(f,1);Array.prototype.push.apply(l,u.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,a){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,a){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,o){if(s>o){var c=o;o=s,s=c}return this.data[s+"-"+o]},r.prototype.set=function(s,o,c){if(s>o){var d=o;o=s,s=d}var h=s+"-"+o;this.get(s,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var c=o.pop();delete s[c]}}},{}],53:[function(e,n,a){function r(){}n.exports=r,r.defaults=function(s,o){s=s||{};for(var c in o)c in s||(s[c]=o[c]);return s}},{}],54:[function(e,n,a){n.exports=o;var r=e("../math/Vec3"),s=e("./Pool");function o(){s.call(this),this.type=r}o.prototype=new s,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,a){n.exports=v;var r=e("../collision/AABB"),s=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),d=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),u=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(at){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=at,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(at,dt,vt,_t,Jt,Bt){var Ct;this.contactPointPool.length?(Ct=this.contactPointPool.pop(),Ct.bi=at,Ct.bj=dt):Ct=new u(at,dt),Ct.enabled=at.collisionResponse&&dt.collisionResponse&&vt.collisionResponse&&_t.collisionResponse;var Ut=this.currentContactMaterial;Ct.restitution=Ut.restitution,Ct.setSpookParams(Ut.contactEquationStiffness,Ut.contactEquationRelaxation,this.world.dt);var nt=vt.material||at.material,Lt=_t.material||dt.material;return nt&&Lt&&nt.restitution>=0&&Lt.restitution>=0&&(Ct.restitution=nt.restitution*Lt.restitution),Ct.si=Jt||vt,Ct.sj=Bt||_t,Ct},v.prototype.createFrictionEquationsFromContact=function(at,dt){var vt=at.bi,_t=at.bj,Jt=at.si,Bt=at.sj,Ct=this.world,Ut=this.currentContactMaterial,nt=Ut.friction,Lt=Jt.material||vt.material,Nt=Bt.material||_t.material;if(Lt&&Nt&&Lt.friction>=0&&Nt.friction>=0&&(nt=Lt.friction*Nt.friction),nt>0){var Wt=nt*Ct.gravity.length(),Dt=vt.invMass+_t.invMass;Dt>0&&(Dt=1/Dt);var Pt=this.frictionEquationPool,S=Pt.length?Pt.pop():new f(vt,_t,Wt*Dt),V=Pt.length?Pt.pop():new f(vt,_t,Wt*Dt);return S.bi=V.bi=vt,S.bj=V.bj=_t,S.minForce=V.minForce=-Wt*Dt,S.maxForce=V.maxForce=Wt*Dt,S.ri.copy(at.ri),S.rj.copy(at.rj),V.ri.copy(at.ri),V.rj.copy(at.rj),at.ni.tangents(S.t,V.t),S.setSpookParams(Ut.frictionEquationStiffness,Ut.frictionEquationRelaxation,Ct.dt),V.setSpookParams(Ut.frictionEquationStiffness,Ut.frictionEquationRelaxation,Ct.dt),S.enabled=V.enabled=at.enabled,dt.push(S,V),!0}return!1};var g=new c,m=new c,p=new c;v.prototype.createFrictionFromAverage=function(at){var dt=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(dt,this.frictionResult)||at===1)){var vt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var Jt=dt.bi;dt.bj;for(var Bt=0;Bt!==at;Bt++)dt=this.result[this.result.length-1-Bt],dt.bodyA!==Jt?(g.vadd(dt.ni,g),m.vadd(dt.ri,m),p.vadd(dt.rj,p)):(g.vsub(dt.ni,g),m.vadd(dt.rj,m),p.vadd(dt.ri,p));var Ct=1/at;m.scale(Ct,vt.ri),p.scale(Ct,vt.rj),_t.ri.copy(vt.ri),_t.rj.copy(vt.rj),g.normalize(),g.tangents(vt.t,_t.t)}};var _=new c,y=new c,x=new h,C=new h;v.prototype.getContacts=function(at,dt,vt,_t,Jt,Bt,Ct){this.contactPointPool=Jt,this.frictionEquationPool=Ct,this.result=_t,this.frictionResult=Bt;for(var Ut=x,nt=C,Lt=_,Nt=y,Wt=0,Dt=at.length;Wt!==Dt;Wt++){var Pt=at[Wt],S=dt[Wt],V=null;Pt.material&&S.material&&(V=vt.getContactMaterial(Pt.material,S.material)||null);for(var Y=0;Y<Pt.shapes.length;Y++){Pt.quaternion.mult(Pt.shapeOrientations[Y],Ut),Pt.quaternion.vmult(Pt.shapeOffsets[Y],Lt),Lt.vadd(Pt.position,Lt);for(var B=Pt.shapes[Y],W=0;W<S.shapes.length;W++){S.quaternion.mult(S.shapeOrientations[W],nt),S.quaternion.vmult(S.shapeOffsets[W],Nt),Nt.vadd(S.position,Nt);var ht=S.shapes[W];if(!(Lt.distanceTo(Nt)>B.boundingSphereRadius+ht.boundingSphereRadius)){var bt=null;B.material&&ht.material&&(bt=vt.getContactMaterial(B.material,ht.material)||null),this.currentContactMaterial=bt||V||vt.defaultContactMaterial;var yt=this[B.type|ht.type];yt&&(B.type<ht.type?yt.call(this,B,ht,Lt,Nt,Ut,nt,Pt,S,B,ht):yt.call(this,ht,B,Nt,Lt,nt,Ut,S,Pt,B,ht))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){at.convexPolyhedronRepresentation.material=at.material,dt.convexPolyhedronRepresentation.material=dt.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,dt.convexPolyhedronRepresentation,vt,_t,Jt,Bt,Ct,Ut,at,dt)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,dt,vt,_t,Jt,Bt,Ct,Ut,at,dt)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexParticle(at.convexPolyhedronRepresentation,dt,vt,_t,Jt,Bt,Ct,Ut,at,dt)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=this.createContactEquation(Ct,Ut,at,dt);_t.vsub(vt,nt.ni),nt.ni.normalize(),nt.ri.copy(nt.ni),nt.rj.copy(nt.ni),nt.ri.mult(at.radius,nt.ri),nt.rj.mult(-dt.radius,nt.rj),nt.ri.vadd(vt,nt.ri),nt.ri.vsub(Ct.position,nt.ri),nt.rj.vadd(_t,nt.rj),nt.rj.vsub(Ut.position,nt.rj),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)};var P=new c,I=new c,D=new c;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=new c,Lt=P;Lt.set(0,0,1),Jt.vmult(Lt,Lt);for(var Nt=0;Nt<dt.vertices.length/3;Nt++){dt.getVertex(Nt,nt);var Wt=new c;Wt.copy(nt),d.pointToWorldFrame(_t,Bt,Wt,nt);var Dt=I;nt.vsub(vt,Dt);var Pt=Lt.dot(Dt);if(Pt<=0){var S=this.createContactEquation(Ct,Ut,at,dt);S.ni.copy(Lt);var V=D;Lt.scale(Dt.dot(Lt),V),nt.vsub(V,V),S.ri.copy(V),S.ri.vsub(Ct.position,S.ri),S.rj.copy(nt),S.rj.vsub(Ut.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult)}}};var E=new c,M=new c;new c;var T=new c,O=new c,N=new c,K=new c,k=new c,j=new c,z=new c,L=new c,tt=new c,J=new c,F=new c,$=new r,H=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=N,Lt=K,Nt=k,Wt=j,Dt=z,Pt=L,S=$,V=O,Y=M,B=H;d.pointToLocalFrame(_t,Bt,vt,Dt);var W=at.radius;S.lowerBound.set(Dt.x-W,Dt.y-W,Dt.z-W),S.upperBound.set(Dt.x+W,Dt.y+W,Dt.z+W),dt.getTrianglesInAABB(S,B);for(var ht=T,bt=at.radius*at.radius,yt=0;yt<B.length;yt++)for(var wt=0;wt<3;wt++)if(dt.getVertex(dt.indices[B[yt]*3+wt],ht),ht.vsub(Dt,Y),Y.norm2()<=bt){V.copy(ht),d.pointToWorldFrame(_t,Bt,V,ht),ht.vsub(vt,Y);var Mt=this.createContactEquation(Ct,Ut,at,dt);Mt.ni.copy(Y),Mt.ni.normalize(),Mt.ri.copy(Mt.ni),Mt.ri.scale(at.radius,Mt.ri),Mt.ri.vadd(vt,Mt.ri),Mt.ri.vsub(Ct.position,Mt.ri),Mt.rj.copy(ht),Mt.rj.vsub(Ut.position,Mt.rj),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult)}for(var yt=0;yt<B.length;yt++)for(var wt=0;wt<3;wt++){dt.getVertex(dt.indices[B[yt]*3+wt],nt),dt.getVertex(dt.indices[B[yt]*3+(wt+1)%3],Lt),Lt.vsub(nt,Nt),Dt.vsub(Lt,Pt);var qt=Pt.dot(Nt);Dt.vsub(nt,Pt);var Xt=Pt.dot(Nt);if(Xt>0&&qt<0){Dt.vsub(nt,Pt),Wt.copy(Nt),Wt.normalize(),Xt=Pt.dot(Wt),Wt.scale(Xt,Pt),Pt.vadd(nt,Pt);var te=Pt.distanceTo(Dt);if(te<at.radius){var Mt=this.createContactEquation(Ct,Ut,at,dt);Pt.vsub(Dt,Mt.ni),Mt.ni.normalize(),Mt.ni.scale(at.radius,Mt.ri),d.pointToWorldFrame(_t,Bt,Pt,Pt),Pt.vsub(Ut.position,Mt.rj),d.vectorToWorldFrame(Bt,Mt.ni,Mt.ni),d.vectorToWorldFrame(Bt,Mt.ri,Mt.ri),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult)}}}for(var de=tt,ce=J,re=F,se=E,yt=0,Ft=B.length;yt!==Ft;yt++){dt.getTriangleVertices(B[yt],de,ce,re),dt.getNormal(B[yt],se),Dt.vsub(de,Pt);var te=Pt.dot(se);if(se.scale(te,Pt),Dt.vsub(Pt,Pt),te=Pt.distanceTo(Dt),o.pointInTriangle(Pt,de,ce,re)&&te<at.radius){var Mt=this.createContactEquation(Ct,Ut,at,dt);Pt.vsub(Dt,Mt.ni),Mt.ni.normalize(),Mt.ni.scale(at.radius,Mt.ri),d.pointToWorldFrame(_t,Bt,Pt,Pt),Pt.vsub(Ut.position,Mt.rj),d.vectorToWorldFrame(Bt,Mt.ni,Mt.ni),d.vectorToWorldFrame(Bt,Mt.ri,Mt.ri),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult)}}B.length=0};var A=new c,b=new c;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=this.createContactEquation(Ct,Ut,at,dt);if(nt.ni.set(0,0,1),Bt.vmult(nt.ni,nt.ni),nt.ni.negate(nt.ni),nt.ni.normalize(),nt.ni.mult(at.radius,nt.ri),vt.vsub(_t,A),nt.ni.mult(nt.ni.dot(A),b),A.vsub(b,nt.rj),-A.dot(nt.ni)<=at.radius){var Lt=nt.ri,Nt=nt.rj;Lt.vadd(vt,Lt),Lt.vsub(Ct.position,Lt),Nt.vadd(_t,Nt),Nt.vsub(Ut.position,Nt),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}};var G=new c,Z=new c,et=new c;function X(at,dt,vt){for(var _t=null,Jt=at.length,Bt=0;Bt!==Jt;Bt++){var Ct=at[Bt],Ut=G;at[(Bt+1)%Jt].vsub(Ct,Ut);var nt=Z;Ut.cross(dt,nt);var Lt=et;vt.vsub(Ct,Lt);var Nt=nt.dot(Lt);if(_t===null||Nt>0&&_t===!0||Nt<=0&&_t===!1){_t===null&&(_t=Nt>0);continue}else return!1}return!0}var it=new c,ft=new c,U=new c,Rt=new c,xt=[new c,new c,new c,new c,new c,new c],ot=new c,rt=new c,Kt=new c,At=new c;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=this.v3pool,Lt=xt;vt.vsub(_t,it),dt.getSideNormals(Lt,Bt);for(var Nt=at.radius,Wt=!1,Dt=rt,Pt=Kt,S=At,V=null,Y=0,B=0,W=0,ht=null,bt=0,yt=Lt.length;bt!==yt&&Wt===!1;bt++){var wt=ft;wt.copy(Lt[bt]);var Mt=wt.norm();wt.normalize();var qt=it.dot(wt);if(qt<Mt+Nt&&qt>0){var Xt=U,te=Rt;Xt.copy(Lt[(bt+1)%3]),te.copy(Lt[(bt+2)%3]);var de=Xt.norm(),ce=te.norm();Xt.normalize(),te.normalize();var re=it.dot(Xt),se=it.dot(te);if(re<de&&re>-de&&se<ce&&se>-ce){var Te=Math.abs(qt-Mt-Nt);(ht===null||Te<ht)&&(ht=Te,B=re,W=se,V=Mt,Dt.copy(wt),Pt.copy(Xt),S.copy(te),Y++)}}}if(Y){Wt=!0;var kt=this.createContactEquation(Ct,Ut,at,dt);Dt.mult(-Nt,kt.ri),kt.ni.copy(Dt),kt.ni.negate(kt.ni),Dt.mult(V,Dt),Pt.mult(B,Pt),Dt.vadd(Pt,Dt),S.mult(W,S),Dt.vadd(S,kt.rj),kt.ri.vadd(vt,kt.ri),kt.ri.vsub(Ct.position,kt.ri),kt.rj.vadd(_t,kt.rj),kt.rj.vsub(Ut.position,kt.rj),this.result.push(kt),this.createFrictionEquationsFromContact(kt,this.frictionResult)}for(var Ft=nt.get(),_e=ot,ee=0;ee!==2&&!Wt;ee++)for(var ge=0;ge!==2&&!Wt;ge++)for(var Se=0;Se!==2&&!Wt;Se++)if(Ft.set(0,0,0),ee?Ft.vadd(Lt[0],Ft):Ft.vsub(Lt[0],Ft),ge?Ft.vadd(Lt[1],Ft):Ft.vsub(Lt[1],Ft),Se?Ft.vadd(Lt[2],Ft):Ft.vsub(Lt[2],Ft),_t.vadd(Ft,_e),_e.vsub(vt,_e),_e.norm2()<Nt*Nt){Wt=!0;var kt=this.createContactEquation(Ct,Ut,at,dt);kt.ri.copy(_e),kt.ri.normalize(),kt.ni.copy(kt.ri),kt.ri.mult(Nt,kt.ri),kt.rj.copy(Ft),kt.ri.vadd(vt,kt.ri),kt.ri.vsub(Ct.position,kt.ri),kt.rj.vadd(_t,kt.rj),kt.rj.vsub(Ut.position,kt.rj),this.result.push(kt),this.createFrictionEquationsFromContact(kt,this.frictionResult)}nt.release(Ft),Ft=null;for(var xe=nt.get(),He=nt.get(),kt=nt.get(),we=nt.get(),Te=nt.get(),be=Lt.length,ee=0;ee!==be&&!Wt;ee++)for(var ge=0;ge!==be&&!Wt;ge++)if(ee%3!==ge%3){Lt[ge].cross(Lt[ee],xe),xe.normalize(),Lt[ee].vadd(Lt[ge],He),kt.copy(vt),kt.vsub(He,kt),kt.vsub(_t,kt);var Ze=kt.dot(xe);xe.mult(Ze,we);for(var Se=0;Se===ee%3||Se===ge%3;)Se++;Te.copy(vt),Te.vsub(we,Te),Te.vsub(He,Te),Te.vsub(_t,Te);var Pr=Math.abs(Ze),Hi=Te.norm();if(Pr<Lt[Se].norm()&&Hi<Nt){Wt=!0;var Ee=this.createContactEquation(Ct,Ut,at,dt);He.vadd(we,Ee.rj),Ee.rj.copy(Ee.rj),Te.negate(Ee.ni),Ee.ni.normalize(),Ee.ri.copy(Ee.rj),Ee.ri.vadd(_t,Ee.ri),Ee.ri.vsub(vt,Ee.ri),Ee.ri.normalize(),Ee.ri.mult(Nt,Ee.ri),Ee.ri.vadd(vt,Ee.ri),Ee.ri.vsub(Ct.position,Ee.ri),Ee.rj.vadd(_t,Ee.rj),Ee.rj.vsub(Ut.position,Ee.rj),this.result.push(Ee),this.createFrictionEquationsFromContact(Ee,this.frictionResult)}}nt.release(xe,He,kt,we,Te)};var Gt=new c,R=new c,w=new c,Q=new c,ct=new c,mt=new c,lt=new c,Ot=new c,gt=new c,It=new c;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=this.v3pool;vt.vsub(_t,Gt);for(var Lt=dt.faceNormals,Nt=dt.faces,Wt=dt.vertices,Dt=at.radius,Pt=0;Pt!==Wt.length;Pt++){var S=Wt[Pt],V=ct;Bt.vmult(S,V),_t.vadd(V,V);var Y=Q;if(V.vsub(vt,Y),Y.norm2()<Dt*Dt){W=!0;var B=this.createContactEquation(Ct,Ut,at,dt);B.ri.copy(Y),B.ri.normalize(),B.ni.copy(B.ri),B.ri.mult(Dt,B.ri),V.vsub(_t,B.rj),B.ri.vadd(vt,B.ri),B.ri.vsub(Ct.position,B.ri),B.rj.vadd(_t,B.rj),B.rj.vsub(Ut.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);return}}for(var W=!1,Pt=0,ht=Nt.length;Pt!==ht&&W===!1;Pt++){var bt=Lt[Pt],yt=Nt[Pt],wt=mt;Bt.vmult(bt,wt);var Mt=lt;Bt.vmult(Wt[yt[0]],Mt),Mt.vadd(_t,Mt);var qt=Ot;wt.mult(-Dt,qt),vt.vadd(qt,qt);var Xt=gt;qt.vsub(Mt,Xt);var te=Xt.dot(wt),de=It;if(vt.vsub(Mt,de),te<0&&de.dot(wt)>0){for(var ce=[],re=0,se=yt.length;re!==se;re++){var Ft=nt.get();Bt.vmult(Wt[yt[re]],Ft),_t.vadd(Ft,Ft),ce.push(Ft)}if(X(ce,wt,vt)){W=!0;var B=this.createContactEquation(Ct,Ut,at,dt);wt.mult(-Dt,B.ri),wt.negate(B.ni);var _e=nt.get();wt.mult(-te,_e);var ee=nt.get();wt.mult(-Dt,ee),vt.vsub(_t,B.rj),B.rj.vadd(ee,B.rj),B.rj.vadd(_e,B.rj),B.rj.vadd(_t,B.rj),B.rj.vsub(Ut.position,B.rj),B.ri.vadd(vt,B.ri),B.ri.vsub(Ct.position,B.ri),nt.release(_e),nt.release(ee),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(var re=0,ge=ce.length;re!==ge;re++)nt.release(ce[re]);return}else for(var re=0;re!==yt.length;re++){var Se=nt.get(),xe=nt.get();Bt.vmult(Wt[yt[(re+1)%yt.length]],Se),Bt.vmult(Wt[yt[(re+2)%yt.length]],xe),_t.vadd(Se,Se),_t.vadd(xe,xe);var He=R;xe.vsub(Se,He);var kt=w;He.unit(kt);var we=nt.get(),Te=nt.get();vt.vsub(Se,Te);var be=Te.dot(kt);kt.mult(be,we),we.vadd(Se,we);var Ze=nt.get();if(we.vsub(vt,Ze),be>0&&be*be<He.norm2()&&Ze.norm2()<Dt*Dt){var B=this.createContactEquation(Ct,Ut,at,dt);we.vsub(_t,B.rj),we.vsub(vt,B.ni),B.ni.normalize(),B.ni.mult(Dt,B.ri),B.rj.vadd(_t,B.rj),B.rj.vsub(Ut.position,B.rj),B.ri.vadd(vt,B.ri),B.ri.vsub(Ct.position,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(var re=0,ge=ce.length;re!==ge;re++)nt.release(ce[re]);nt.release(Se),nt.release(xe),nt.release(we),nt.release(Ze),nt.release(Te);return}nt.release(Se),nt.release(xe),nt.release(we),nt.release(Ze),nt.release(Te)}for(var re=0,ge=ce.length;re!==ge;re++)nt.release(ce[re])}}},new c,new c,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){dt.convexPolyhedronRepresentation.material=dt.material,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.planeConvex(at,dt.convexPolyhedronRepresentation,vt,_t,Jt,Bt,Ct,Ut)};var Zt=new c,Tt=new c,Ht=new c,ne=new c;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=Zt,Lt=Tt;Lt.set(0,0,1),Jt.vmult(Lt,Lt);for(var Nt=0,Wt=Ht,Dt=0;Dt!==dt.vertices.length;Dt++){nt.copy(dt.vertices[Dt]),Bt.vmult(nt,nt),_t.vadd(nt,nt),nt.vsub(vt,Wt);var Pt=Lt.dot(Wt);if(Pt<=0){var S=this.createContactEquation(Ct,Ut,at,dt),V=ne;Lt.mult(Lt.dot(Wt),V),nt.vsub(V,V),V.vsub(vt,S.ri),S.ni.copy(Lt),nt.vsub(_t,S.rj),S.ri.vadd(vt,S.ri),S.ri.vsub(Ct.position,S.ri),S.rj.vadd(_t,S.rj),S.rj.vsub(Ut.position,S.rj),this.result.push(S),Nt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}}this.enableFrictionReduction&&Nt&&this.createFrictionFromAverage(Nt)};var Yt=new c,zt=new c;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(at,dt,vt,_t,Jt,Bt,Ct,Ut,nt,Lt,Nt,Wt){var Dt=Yt;if(!(vt.distanceTo(_t)>at.boundingSphereRadius+dt.boundingSphereRadius)&&at.findSeparatingAxis(dt,vt,Jt,_t,Bt,Dt,Nt,Wt)){var Pt=[],S=zt;at.clipAgainstHull(vt,Jt,dt,_t,Bt,Dt,-100,100,Pt);for(var V=0,Y=0;Y!==Pt.length;Y++){var B=this.createContactEquation(Ct,Ut,at,dt,nt,Lt),W=B.ri,ht=B.rj;Dt.negate(B.ni),Pt[Y].normal.negate(S),S.mult(Pt[Y].depth,S),Pt[Y].point.vadd(S,W),ht.copy(Pt[Y].point),W.vsub(vt,W),ht.vsub(_t,ht),W.vadd(vt,W),W.vsub(Ct.position,W),ht.vadd(_t,ht),ht.vsub(Ut.position,ht),this.result.push(B),V++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(B,this.frictionResult)}this.enableFrictionReduction&&V&&this.createFrictionFromAverage(V)}};var jt=new c,Qt=new c,he=new c;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=jt;nt.set(0,0,1),Ct.quaternion.vmult(nt,nt);var Lt=Qt;_t.vsub(Ct.position,Lt);var Nt=nt.dot(Lt);if(Nt<=0){var Wt=this.createContactEquation(Ut,Ct,dt,at);Wt.ni.copy(nt),Wt.ni.negate(Wt.ni),Wt.ri.set(0,0,0);var Dt=he;nt.mult(nt.dot(_t),Dt),_t.vsub(Dt,Dt),Wt.rj.copy(Dt),this.result.push(Wt),this.createFrictionEquationsFromContact(Wt,this.frictionResult)}};var q=new c;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=q;nt.set(0,0,1),_t.vsub(vt,nt);var Lt=nt.norm2();if(Lt<=at.radius*at.radius){var Nt=this.createContactEquation(Ut,Ct,dt,at);nt.normalize(),Nt.rj.copy(nt),Nt.rj.mult(at.radius,Nt.rj),Nt.ni.copy(nt),Nt.ni.negate(Nt.ni),Nt.ri.set(0,0,0),this.result.push(Nt),this.createFrictionEquationsFromContact(Nt,this.frictionResult)}};var St=new h,ut=new c;new c;var pt=new c,Et=new c,$t=new c;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=-1,Lt=pt,Nt=$t,Wt=null,Dt=ut;if(Dt.copy(_t),Dt.vsub(vt,Dt),Jt.conjugate(St),St.vmult(Dt,Dt),at.pointIsInside(Dt)){at.worldVerticesNeedsUpdate&&at.computeWorldVertices(vt,Jt),at.worldFaceNormalsNeedsUpdate&&at.computeWorldFaceNormals(Jt);for(var Pt=0,S=at.faces.length;Pt!==S;Pt++){var V=[at.worldVertices[at.faces[Pt][0]]],Y=at.worldFaceNormals[Pt];_t.vsub(V[0],Et);var B=-Y.dot(Et);(Wt===null||Math.abs(B)<Math.abs(Wt))&&(Wt=B,nt=Pt,Lt.copy(Y))}if(nt!==-1){var W=this.createContactEquation(Ut,Ct,dt,at);Lt.mult(Wt,Nt),Nt.vadd(_t,Nt),Nt.vsub(vt,Nt),W.rj.copy(Nt),Lt.negate(W.ni),W.ri.set(0,0,0);var ht=W.ri,bt=W.rj;ht.vadd(_t,ht),ht.vsub(Ut.position,ht),bt.vadd(vt,bt),bt.vsub(Ct.position,bt),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexHeightfield(at.convexPolyhedronRepresentation,dt,vt,_t,Jt,Bt,Ct,Ut)};var ie=new c,me=new c,Me=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=dt.data,Lt=dt.elementSize,Nt=at.boundingSphereRadius,Wt=me,Dt=Me,Pt=ie;d.pointToLocalFrame(_t,Bt,vt,Pt);var S=Math.floor((Pt.x-Nt)/Lt)-1,V=Math.ceil((Pt.x+Nt)/Lt)+1,Y=Math.floor((Pt.y-Nt)/Lt)-1,B=Math.ceil((Pt.y+Nt)/Lt)+1;if(!(V<0||B<0||S>nt.length||Y>nt[0].length)){S<0&&(S=0),V<0&&(V=0),Y<0&&(Y=0),B<0&&(B=0),S>=nt.length&&(S=nt.length-1),V>=nt.length&&(V=nt.length-1),B>=nt[0].length&&(B=nt[0].length-1),Y>=nt[0].length&&(Y=nt[0].length-1);var W=[];dt.getRectMinMax(S,Y,V,B,W);var ht=W[0],bt=W[1];if(!(Pt.z-Nt>bt||Pt.z+Nt<ht))for(var yt=S;yt<V;yt++)for(var wt=Y;wt<B;wt++)dt.getConvexTrianglePillar(yt,wt,!1),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,Wt),vt.distanceTo(Wt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,dt.pillarConvex,vt,Wt,Jt,Bt,Ct,Ut,null,null,Dt,null),dt.getConvexTrianglePillar(yt,wt,!0),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,Wt),vt.distanceTo(Wt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,dt.pillarConvex,vt,Wt,Jt,Bt,Ct,Ut,null,null,Dt,null)}};var le=new c,ve=new c;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(at,dt,vt,_t,Jt,Bt,Ct,Ut){var nt=dt.data,Lt=at.radius,Nt=dt.elementSize,Wt=ve,Dt=le;d.pointToLocalFrame(_t,Bt,vt,Dt);var Pt=Math.floor((Dt.x-Lt)/Nt)-1,S=Math.ceil((Dt.x+Lt)/Nt)+1,V=Math.floor((Dt.y-Lt)/Nt)-1,Y=Math.ceil((Dt.y+Lt)/Nt)+1;if(!(S<0||Y<0||Pt>nt.length||Y>nt[0].length)){Pt<0&&(Pt=0),S<0&&(S=0),V<0&&(V=0),Y<0&&(Y=0),Pt>=nt.length&&(Pt=nt.length-1),S>=nt.length&&(S=nt.length-1),Y>=nt[0].length&&(Y=nt[0].length-1),V>=nt[0].length&&(V=nt[0].length-1);var B=[];dt.getRectMinMax(Pt,V,S,Y,B);var W=B[0],ht=B[1];if(!(Dt.z-Lt>ht||Dt.z+Lt<W))for(var bt=this.result,yt=Pt;yt<S;yt++)for(var wt=V;wt<Y;wt++){var Mt=bt.length;dt.getConvexTrianglePillar(yt,wt,!1),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,Wt),vt.distanceTo(Wt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,dt.pillarConvex,vt,Wt,Jt,Bt,Ct,Ut),dt.getConvexTrianglePillar(yt,wt,!0),d.pointToWorldFrame(_t,Bt,dt.pillarOffset,Wt),vt.distanceTo(Wt)<dt.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,dt.pillarConvex,vt,Wt,Jt,Bt,Ct,Ut);var qt=bt.length-Mt;if(qt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,a){n.exports=x;var r=e("../shapes/Shape"),s=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var d=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),u=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),_=e("../collision/Ray"),y=e("../collision/NaiveBroadphase");function x(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new y,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new d(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new u("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new h,new p;var C=new _;if(x.prototype.getContactMaterial=function(L,tt){return this.contactMaterialTable.get(L.id,tt.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var L=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=L,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(L){this.bodies.indexOf(L)===-1&&(L.index=this.bodies.length,this.bodies.push(L),L.world=this,L.initPosition.copy(L.position),L.initVelocity.copy(L.velocity),L.timeLastSleepy=this.time,L instanceof v&&(L.initAngularVelocity.copy(L.angularVelocity),L.initQuaternion.copy(L.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=L,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(L){this.constraints.push(L)},x.prototype.removeConstraint=function(L){var tt=this.constraints.indexOf(L);tt!==-1&&this.constraints.splice(tt,1)},x.prototype.rayTest=function(L,tt,J){J instanceof m?this.raycastClosest(L,tt,{skipBackfaces:!0},J):this.raycastAll(L,tt,{skipBackfaces:!0},J)},x.prototype.raycastAll=function(L,tt,J,F){return J.mode=_.ALL,J.from=L,J.to=tt,J.callback=F,C.intersectWorld(this,J)},x.prototype.raycastAny=function(L,tt,J,F){return J.mode=_.ANY,J.from=L,J.to=tt,J.result=F,C.intersectWorld(this,J)},x.prototype.raycastClosest=function(L,tt,J,F){return J.mode=_.CLOSEST,J.from=L,J.to=tt,J.result=F,C.intersectWorld(this,J)},x.prototype.remove=function(L){L.world=null;var tt=this.bodies.length-1,J=this.bodies,F=J.indexOf(L);if(F!==-1){J.splice(F,1);for(var $=0;$!==J.length;$++)J[$].index=$;this.collisionMatrix.setNumObjects(tt),this.removeBodyEvent.body=L,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(L){this.materials.push(L)},x.prototype.addContactMaterial=function(L){this.contactmaterials.push(L),this.contactMaterialTable.set(L.materials[0].id,L.materials[1].id,L)},typeof performance>"u"&&(performance={}),!performance.now){var P=Date.now();performance.timing&&performance.timing.navigationStart&&(P=performance.timing.navigationStart),performance.now=function(){return Date.now()-P}}var I=new s;x.prototype.step=function(L,tt,J){if(J=J||10,tt=tt||0,tt===0)this.internalStep(L),this.time+=L;else{var F=Math.floor((this.time+tt)/L)-Math.floor(this.time/L);F=Math.min(F,J);for(var $=performance.now(),H=0;H!==F&&(this.internalStep(L),!(performance.now()-$>L*1e3));H++);this.time+=tt;for(var A=this.time%L,b=A/L,G=I,Z=this.bodies,et=0;et!==Z.length;et++){var X=Z[et];X.type!==v.STATIC&&X.sleepState!==v.SLEEPING?(X.position.vsub(X.previousPosition,G),G.scale(b,G),X.position.vadd(G,X.interpolatedPosition)):(X.interpolatedPosition.copy(X.position),X.interpolatedQuaternion.copy(X.quaternion))}}};var D={type:"postStep"},E={type:"preStep"},M={type:"collide",body:null,contact:null},T=[],O=[],N=[],K=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var k=new o,j=new o,z=new s;x.prototype.internalStep=function(L){this.dt=L;var tt=this.contacts,J=N,F=K,$=this.numObjects(),H=this.bodies,A=this.solver,b=this.gravity,G=this.doProfiling,Z=this.profile,et=v.DYNAMIC,X,it=this.constraints,ft=O;b.norm();var U=b.x,Rt=b.y,xt=b.z,ot=0;for(G&&(X=performance.now()),ot=0;ot!==$;ot++){var rt=H[ot];if(rt.type&et){var Kt=rt.force,At=rt.mass;Kt.x+=At*U,Kt.y+=At*Rt,Kt.z+=At*xt}}for(var ot=0,Gt=this.subsystems.length;ot!==Gt;ot++)this.subsystems[ot].update();G&&(X=performance.now()),J.length=0,F.length=0,this.broadphase.collisionPairs(this,J,F),G&&(Z.broadphase=performance.now()-X);var Yt=it.length;for(ot=0;ot!==Yt;ot++){var R=it[ot];if(!R.collideConnected)for(var w=J.length-1;w>=0;w-=1)(R.bodyA===J[w]&&R.bodyB===F[w]||R.bodyB===J[w]&&R.bodyA===F[w])&&(J.splice(w,1),F.splice(w,1))}this.collisionMatrixTick(),G&&(X=performance.now());var Q=T,ct=tt.length;for(ot=0;ot!==ct;ot++)Q.push(tt[ot]);tt.length=0;var mt=this.frictionEquations.length;for(ot=0;ot!==mt;ot++)ft.push(this.frictionEquations[ot]);this.frictionEquations.length=0,this.narrowphase.getContacts(J,F,this,tt,Q,this.frictionEquations,ft),G&&(Z.narrowphase=performance.now()-X),G&&(X=performance.now());for(var ot=0;ot<this.frictionEquations.length;ot++)A.addEquation(this.frictionEquations[ot]);for(var lt=tt.length,Ot=0;Ot!==lt;Ot++){var R=tt[Ot],rt=R.bi,gt=R.bj;R.si,R.sj;var It;if(rt.material&&gt.material?It=this.getContactMaterial(rt.material,gt.material)||this.defaultContactMaterial:It=this.defaultContactMaterial,It.friction,rt.material&&gt.material&&(rt.material.friction>=0&&gt.material.friction>=0&&rt.material.friction*gt.material.friction,rt.material.restitution>=0&&gt.material.restitution>=0&&(R.restitution=rt.material.restitution*gt.material.restitution)),A.addEquation(R),rt.allowSleep&&rt.type===v.DYNAMIC&&rt.sleepState===v.SLEEPING&&gt.sleepState===v.AWAKE&&gt.type!==v.STATIC){var Zt=gt.velocity.norm2()+gt.angularVelocity.norm2(),Tt=Math.pow(gt.sleepSpeedLimit,2);Zt>=Tt*2&&(rt._wakeUpAfterNarrowphase=!0)}if(gt.allowSleep&&gt.type===v.DYNAMIC&&gt.sleepState===v.SLEEPING&&rt.sleepState===v.AWAKE&&rt.type!==v.STATIC){var Ht=rt.velocity.norm2()+rt.angularVelocity.norm2(),ne=Math.pow(rt.sleepSpeedLimit,2);Ht>=ne*2&&(gt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(rt,gt,!0),this.collisionMatrixPrevious.get(rt,gt)||(M.body=gt,M.contact=R,rt.dispatchEvent(M),M.body=rt,gt.dispatchEvent(M))}for(G&&(Z.makeContactConstraints=performance.now()-X,X=performance.now()),ot=0;ot!==$;ot++){var rt=H[ot];rt._wakeUpAfterNarrowphase&&(rt.wakeUp(),rt._wakeUpAfterNarrowphase=!1)}var Yt=it.length;for(ot=0;ot!==Yt;ot++){var R=it[ot];R.update();for(var w=0,zt=R.equations.length;w!==zt;w++){var jt=R.equations[w];A.addEquation(jt)}}A.solve(L,this),G&&(Z.solve=performance.now()-X),A.removeAllEquations();var Qt=Math.pow;for(ot=0;ot!==$;ot++){var rt=H[ot];if(rt.type&et){var he=Qt(1-rt.linearDamping,L),q=rt.velocity;q.mult(he,q);var St=rt.angularVelocity;if(St){var ut=Qt(1-rt.angularDamping,L);St.mult(ut,St)}}}for(this.dispatchEvent(E),ot=0;ot!==$;ot++){var rt=H[ot];rt.preStep&&rt.preStep.call(rt)}G&&(X=performance.now());var pt=k,Et=j,$t=this.stepnumber,ie=v.DYNAMIC|v.KINEMATIC,me=$t%(this.quatNormalizeSkip+1)===0,Me=this.quatNormalizeFast,le=L*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,ot=0;ot!==$;ot++){var ve=H[ot],at=ve.force,dt=ve.torque;if(ve.type&ie&&ve.sleepState!==v.SLEEPING){var vt=ve.velocity,_t=ve.angularVelocity,Jt=ve.position,Bt=ve.quaternion,Ct=ve.invMass,Ut=ve.invInertiaWorld;vt.x+=at.x*Ct*L,vt.y+=at.y*Ct*L,vt.z+=at.z*Ct*L,ve.angularVelocity&&(Ut.vmult(dt,z),z.mult(L,z),z.vadd(_t,_t)),Jt.x+=vt.x*L,Jt.y+=vt.y*L,Jt.z+=vt.z*L,ve.angularVelocity&&(pt.set(_t.x,_t.y,_t.z,0),pt.mult(Bt,Et),Bt.x+=le*Et.x,Bt.y+=le*Et.y,Bt.z+=le*Et.z,Bt.w+=le*Et.w,me&&(Me?Bt.normalizeFast():Bt.normalize())),ve.aabb&&(ve.aabbNeedsUpdate=!0),ve.updateInertiaWorld&&ve.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&(Z.integrate=performance.now()-X),this.time+=L,this.stepnumber+=1,this.dispatchEvent(D),ot=0;ot!==$;ot++){var rt=H[ot],nt=rt.postStep;nt&&nt.call(rt)}if(this.allowSleep)for(ot=0;ot!==$;ot++)H[ot].sleepTick(this.time)},x.prototype.clearForces=function(){for(var L=this.bodies,tt=L.length,J=0;J!==tt;J++){var F=L[J];F.force,F.torque,F.force.set(0,0,0),F.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(to);var qe=to.exports;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hs="166",Xo=0,ea=1,qo=2,eo=1,Yo=2,un=3,Rn=0,Ve=1,dn=2,Tn=0,pi=1,na=2,ia=3,ra=4,Ko=5,zn=100,Zo=101,$o=102,jo=103,Jo=104,Qo=200,tl=201,el=202,nl=203,as=204,os=205,il=206,rl=207,sl=208,al=209,ol=210,ll=211,cl=212,hl=213,ul=214,dl=0,fl=1,pl=2,yr=3,ml=4,vl=5,gl=6,_l=7,no=0,xl=1,yl=2,An=0,Ml=1,Sl=2,El=3,wl=4,Tl=5,Al=6,bl=7,io=300,gi=301,_i=302,ls=303,cs=304,Tr=306,hs=1e3,Hn=1001,us=1002,Ye=1003,Rl=1004,Wi=1005,Qe=1006,Lr=1007,Gn=1008,mn=1009,ro=1010,so=1011,Ii=1012,Gs=1013,kn=1014,fn=1015,Ni=1016,Ws=1017,ks=1018,xi=1020,ao=35902,oo=1021,lo=1022,tn=1023,co=1024,ho=1025,mi=1026,yi=1027,uo=1028,Xs=1029,fo=1030,qs=1031,Ys=1033,pr=33776,mr=33777,vr=33778,gr=33779,ds=35840,fs=35841,ps=35842,ms=35843,vs=36196,gs=37492,_s=37496,xs=37808,ys=37809,Ms=37810,Ss=37811,Es=37812,ws=37813,Ts=37814,As=37815,bs=37816,Rs=37817,Cs=37818,Ps=37819,Ls=37820,Is=37821,_r=36492,Ds=36494,Us=36495,po=36283,Ns=36284,Fs=36285,Bs=36286,Cl=3200,Pl=3201,mo=0,Ll=1,En="",en="srgb",Pn="srgb-linear",Ks="display-p3",Ar="display-p3-linear",Mr="linear",ye="srgb",Sr="rec709",Er="p3",Kn=7680,sa=519,Il=512,Dl=513,Ul=514,vo=515,Nl=516,Fl=517,Bl=518,Ol=519,aa=35044,oa="300 es",pn=2e3,wr=2001;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ir=Math.PI/180,Os=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function zl(i,t){return(i%t+t)%t}function Dr(i,t,e){return(1-e)*i+e*t}function Ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ue{constructor(t=0,e=0){ue.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*a+t.x,this.y=r*a+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,n,a,r,s,o,c,d){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,d)}set(t,e,n,a,r,s,o,c,d){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=s,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[3],c=n[6],d=n[1],h=n[4],l=n[7],u=n[2],f=n[5],v=n[8],g=a[0],m=a[3],p=a[6],_=a[1],y=a[4],x=a[7],C=a[2],P=a[5],I=a[8];return r[0]=s*g+o*_+c*C,r[3]=s*m+o*y+c*P,r[6]=s*p+o*x+c*I,r[1]=d*g+h*_+l*C,r[4]=d*m+h*y+l*P,r[7]=d*p+h*x+l*I,r[2]=u*g+f*_+v*C,r[5]=u*m+f*y+v*P,r[8]=u*p+f*x+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],h=t[8];return e*s*h-e*o*d-n*r*h+n*o*c+a*r*d-a*s*c}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=h*s-o*d,u=o*c-h*r,f=d*r-s*c,v=e*l+n*u+a*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(a*d-h*n)*g,t[2]=(o*n-a*s)*g,t[3]=u*g,t[4]=(h*e-a*c)*g,t[5]=(a*r-o*e)*g,t[6]=f*g,t[7]=(n*c-d*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,s,o){const c=Math.cos(r),d=Math.sin(r);return this.set(n*c,n*d,-n*(c*s+d*o)+s+t,-a*d,a*c,-a*(-d*s+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new oe;function go(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Di(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vl(){const i=Di("canvas");return i.style.display="block",i}const la={};function _o(i){i in la||(la[i]=!0,console.warn(i))}function Hl(i,t,e){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ca=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ha=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ki={[Pn]:{transfer:Mr,primaries:Sr,toReference:i=>i,fromReference:i=>i},[en]:{transfer:ye,primaries:Sr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ar]:{transfer:Mr,primaries:Er,toReference:i=>i.applyMatrix3(ha),fromReference:i=>i.applyMatrix3(ca)},[Ks]:{transfer:ye,primaries:Er,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ha),fromReference:i=>i.applyMatrix3(ca).convertLinearToSRGB()}},Gl=new Set([Pn,Ar]),pe={enabled:!0,_workingColorSpace:Pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Gl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ki[t].toReference,a=ki[e].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ki[i].primaries},getTransfer:function(i){return i===En?Mr:ki[i].transfer}};function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zn;class Wl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=Di("canvas")),Zn.width=t.width,Zn.height=t.height;const n=Zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Di("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=vi(r[s]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kl=0;class xo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Fr(a[s].image)):r.push(Fr(a[s]))}else r=Fr(a);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xl=0;class Be extends Si{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=Hn,a=Hn,r=Qe,s=Gn,o=tn,c=mn,d=Be.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Fi(),this.name="",this.source=new xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==io)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case us:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case us:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=io;Be.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,a=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*a+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r;const c=t.elements,d=c[0],h=c[4],l=c[8],u=c[1],f=c[5],v=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(d+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(d+1)/2,x=(f+1)/2,C=(p+1)/2,P=(h+u)/4,I=(l+g)/4,D=(v+m)/4;return y>x&&y>C?y<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(y),a=P/n,r=I/n):x>C?x<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(x),n=P/a,r=D/a):C<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(C),n=I/r,a=D/r),this.set(n,a,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(l-g)/_,this.z=(u-h)/_,this.w=Math.acos((d+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ql extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const a={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Be(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends ql{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yo extends Be{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yl extends Be{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,s,o){let c=n[a+0],d=n[a+1],h=n[a+2],l=n[a+3];const u=r[s+0],f=r[s+1],v=r[s+2],g=r[s+3];if(o===0){t[e+0]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==u||d!==f||h!==v){let m=1-o;const p=c*u+d*f+h*v+l*g,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),P=Math.atan2(C,p*_);m=Math.sin(m*P)/C,o=Math.sin(o*P)/C}const x=o*_;if(c=c*m+u*x,d=d*m+f*x,h=h*m+v*x,l=l*m+g*x,m===1-o){const C=1/Math.sqrt(c*c+d*d+h*h+l*l);c*=C,d*=C,h*=C,l*=C}}t[e]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,a,r,s){const o=n[a],c=n[a+1],d=n[a+2],h=n[a+3],l=r[s],u=r[s+1],f=r[s+2],v=r[s+3];return t[e]=o*v+h*l+c*f-d*u,t[e+1]=c*v+h*u+d*l-o*f,t[e+2]=d*v+h*f+o*u-c*l,t[e+3]=h*v-o*l-c*u-d*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,c=Math.sin,d=o(n/2),h=o(a/2),l=o(r/2),u=c(n/2),f=c(a/2),v=c(r/2);switch(s){case"XYZ":this._x=u*h*l+d*f*v,this._y=d*f*l-u*h*v,this._z=d*h*v+u*f*l,this._w=d*h*l-u*f*v;break;case"YXZ":this._x=u*h*l+d*f*v,this._y=d*f*l-u*h*v,this._z=d*h*v-u*f*l,this._w=d*h*l+u*f*v;break;case"ZXY":this._x=u*h*l-d*f*v,this._y=d*f*l+u*h*v,this._z=d*h*v+u*f*l,this._w=d*h*l-u*f*v;break;case"ZYX":this._x=u*h*l-d*f*v,this._y=d*f*l+u*h*v,this._z=d*h*v-u*f*l,this._w=d*h*l+u*f*v;break;case"YZX":this._x=u*h*l+d*f*v,this._y=d*f*l+u*h*v,this._z=d*h*v-u*f*l,this._w=d*h*l-u*f*v;break;case"XZY":this._x=u*h*l-d*f*v,this._y=d*f*l-u*h*v,this._z=d*h*v+u*f*l,this._w=d*h*l+u*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],r=e[8],s=e[1],o=e[5],c=e[9],d=e[2],h=e[6],l=e[10],u=n+o+l;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-d)*f,this._z=(s-a)*f}else if(n>o&&n>l){const f=2*Math.sqrt(1+n-o-l);this._w=(h-c)/f,this._x=.25*f,this._y=(a+s)/f,this._z=(r+d)/f}else if(o>l){const f=2*Math.sqrt(1+o-n-l);this._w=(r-d)/f,this._x=(a+s)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+l-n-o);this._w=(s-a)/f,this._x=(r+d)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,r=t._z,s=t._w,o=e._x,c=e._y,d=e._z,h=e._w;return this._x=n*h+s*o+a*d-r*c,this._y=a*h+s*c+r*o-n*d,this._z=r*h+s*d+n*c-a*o,this._w=s*h-n*o-a*c-r*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+n*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*s+e*this._w,this._x=f*n+e*this._x,this._y=f*a+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const d=Math.sqrt(c),h=Math.atan2(d,o),l=Math.sin((1-e)*h)/d,u=Math.sin(e*h)/d;return this._w=s*l+this._w*u,this._x=n*l+this._x*u,this._y=a*l+this._y*u,this._z=r*l+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,e=0,n=0){st.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ua.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ua.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,r=t.x,s=t.y,o=t.z,c=t.w,d=2*(s*a-o*n),h=2*(o*e-r*a),l=2*(r*n-s*e);return this.x=e+c*d+s*l-o*h,this.y=n+c*h+o*d-r*l,this.z=a+c*l+r*h-s*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,r=t.z,s=e.x,o=e.y,c=e.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Br.copy(this).projectOnVector(t),this.sub(Br)}reflect(t){return this.sub(Br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new st,ua=new Bi;class Oi{constructor(t=new st(1/0,1/0,1/0),e=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,$e):$e.fromBufferAttribute(r,s),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),qi.subVectors(this.max,bi),$n.subVectors(t.a,bi),jn.subVectors(t.b,bi),Jn.subVectors(t.c,bi),gn.subVectors(jn,$n),_n.subVectors(Jn,jn),Ln.subVectors($n,Jn);let e=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Ln.z,Ln.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Ln.z,0,-Ln.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Ln.y,Ln.x,0];return!Or(e,$n,jn,Jn,qi)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,$n,jn,Jn,qi))?!1:(Yi.crossVectors(gn,_n),e=[Yi.x,Yi.y,Yi.z],Or(e,$n,jn,Jn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new st,new st,new st,new st,new st,new st,new st,new st],$e=new st,Xi=new Oi,$n=new st,jn=new st,Jn=new st,gn=new st,_n=new st,Ln=new st,bi=new st,qi=new st,Yi=new st,In=new st;function Or(i,t,e,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){In.fromArray(i,r);const o=a.x*Math.abs(In.x)+a.y*Math.abs(In.y)+a.z*Math.abs(In.z),c=t.dot(In),d=e.dot(In),h=n.dot(In);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>o)return!1}return!0}const Kl=new Oi,Ri=new st,zr=new st;class Zs{constructor(t=new st,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kl.setFromPoints(t).getCenter(n);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(Ri,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(zr)),this.expandByPoint(Ri.copy(t.center).sub(zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new st,Vr=new st,Ki=new st,xn=new st,Hr=new st,Zi=new st,Gr=new st;class Zl{constructor(t=new st,e=new st(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Vr.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(Vr);const r=t.distanceTo(e)*.5,s=-this.direction.dot(Ki),o=xn.dot(this.direction),c=-xn.dot(Ki),d=xn.lengthSq(),h=Math.abs(1-s*s);let l,u,f,v;if(h>0)if(l=s*c-o,u=s*o-c,v=r*h,l>=0)if(u>=-v)if(u<=v){const g=1/h;l*=g,u*=g,f=l*(l+s*u+2*o)+u*(s*l+u+2*c)+d}else u=r,l=Math.max(0,-(s*u+o)),f=-l*l+u*(u+2*c)+d;else u=-r,l=Math.max(0,-(s*u+o)),f=-l*l+u*(u+2*c)+d;else u<=-v?(l=Math.max(0,-(-s*r+o)),u=l>0?-r:Math.min(Math.max(-r,-c),r),f=-l*l+u*(u+2*c)+d):u<=v?(l=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+d):(l=Math.max(0,-(s*r+o)),u=l>0?r:Math.min(Math.max(-r,-c),r),f=-l*l+u*(u+2*c)+d);else u=s>0?-r:r,l=Math.max(0,-(s*u+o)),f=-l*l+u*(u+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,l),a&&a.copy(Vr).addScaledVector(Ki,u),f}intersectSphere(t,e){on.subVectors(t.center,this.origin);const n=on.dot(this.direction),a=on.dot(on)-n*n,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,s,o,c;const d=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,u=this.origin;return d>=0?(n=(t.min.x-u.x)*d,a=(t.max.x-u.x)*d):(n=(t.max.x-u.x)*d,a=(t.min.x-u.x)*d),h>=0?(r=(t.min.y-u.y)*h,s=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,s=(t.min.y-u.y)*h),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),l>=0?(o=(t.min.z-u.z)*l,c=(t.max.z-u.z)*l):(o=(t.max.z-u.z)*l,c=(t.min.z-u.z)*l),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,a,r){Hr.subVectors(e,t),Zi.subVectors(n,t),Gr.crossVectors(Hr,Zi);let s=this.direction.dot(Gr),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;xn.subVectors(this.origin,t);const c=o*this.direction.dot(Zi.crossVectors(xn,Zi));if(c<0)return null;const d=o*this.direction.dot(Hr.cross(xn));if(d<0||c+d>s)return null;const h=-o*xn.dot(Gr);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,a,r,s,o,c,d,h,l,u,f,v,g,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,d,h,l,u,f,v,g,m)}set(t,e,n,a,r,s,o,c,d,h,l,u,f,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=a,p[1]=r,p[5]=s,p[9]=o,p[13]=c,p[2]=d,p[6]=h,p[10]=l,p[14]=u,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),s=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,r=t.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),d=Math.sin(a),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const u=s*h,f=s*l,v=o*h,g=o*l;e[0]=c*h,e[4]=-c*l,e[8]=d,e[1]=f+v*d,e[5]=u-g*d,e[9]=-o*c,e[2]=g-u*d,e[6]=v+f*d,e[10]=s*c}else if(t.order==="YXZ"){const u=c*h,f=c*l,v=d*h,g=d*l;e[0]=u+g*o,e[4]=v*o-f,e[8]=s*d,e[1]=s*l,e[5]=s*h,e[9]=-o,e[2]=f*o-v,e[6]=g+u*o,e[10]=s*c}else if(t.order==="ZXY"){const u=c*h,f=c*l,v=d*h,g=d*l;e[0]=u-g*o,e[4]=-s*l,e[8]=v+f*o,e[1]=f+v*o,e[5]=s*h,e[9]=g-u*o,e[2]=-s*d,e[6]=o,e[10]=s*c}else if(t.order==="ZYX"){const u=s*h,f=s*l,v=o*h,g=o*l;e[0]=c*h,e[4]=v*d-f,e[8]=u*d+g,e[1]=c*l,e[5]=g*d+u,e[9]=f*d-v,e[2]=-d,e[6]=o*c,e[10]=s*c}else if(t.order==="YZX"){const u=s*c,f=s*d,v=o*c,g=o*d;e[0]=c*h,e[4]=g-u*l,e[8]=v*l+f,e[1]=l,e[5]=s*h,e[9]=-o*h,e[2]=-d*h,e[6]=f*l+v,e[10]=u-g*l}else if(t.order==="XZY"){const u=s*c,f=s*d,v=o*c,g=o*d;e[0]=c*h,e[4]=-l,e[8]=d*h,e[1]=u*l+g,e[5]=s*h,e[9]=f*l-v,e[2]=v*l-f,e[6]=o*h,e[10]=g*l+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($l,t,jl)}lookAt(t,e,n){const a=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),yn.crossVectors(n,Ge),yn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),yn.crossVectors(n,Ge)),yn.normalize(),$i.crossVectors(Ge,yn),a[0]=yn.x,a[4]=$i.x,a[8]=Ge.x,a[1]=yn.y,a[5]=$i.y,a[9]=Ge.y,a[2]=yn.z,a[6]=$i.z,a[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[4],c=n[8],d=n[12],h=n[1],l=n[5],u=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],C=n[15],P=a[0],I=a[4],D=a[8],E=a[12],M=a[1],T=a[5],O=a[9],N=a[13],K=a[2],k=a[6],j=a[10],z=a[14],L=a[3],tt=a[7],J=a[11],F=a[15];return r[0]=s*P+o*M+c*K+d*L,r[4]=s*I+o*T+c*k+d*tt,r[8]=s*D+o*O+c*j+d*J,r[12]=s*E+o*N+c*z+d*F,r[1]=h*P+l*M+u*K+f*L,r[5]=h*I+l*T+u*k+f*tt,r[9]=h*D+l*O+u*j+f*J,r[13]=h*E+l*N+u*z+f*F,r[2]=v*P+g*M+m*K+p*L,r[6]=v*I+g*T+m*k+p*tt,r[10]=v*D+g*O+m*j+p*J,r[14]=v*E+g*N+m*z+p*F,r[3]=_*P+y*M+x*K+C*L,r[7]=_*I+y*T+x*k+C*tt,r[11]=_*D+y*O+x*j+C*J,r[15]=_*E+y*N+x*z+C*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],s=t[1],o=t[5],c=t[9],d=t[13],h=t[2],l=t[6],u=t[10],f=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+r*c*l-a*d*l-r*o*u+n*d*u+a*o*f-n*c*f)+g*(+e*c*f-e*d*u+r*s*u-a*s*f+a*d*h-r*c*h)+m*(+e*d*l-e*o*f-r*s*l+n*s*f+r*o*h-n*d*h)+p*(-a*o*h-e*c*l+e*o*u+a*s*l-n*s*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=t[9],u=t[10],f=t[11],v=t[12],g=t[13],m=t[14],p=t[15],_=l*m*d-g*u*d+g*c*f-o*m*f-l*c*p+o*u*p,y=v*u*d-h*m*d-v*c*f+s*m*f+h*c*p-s*u*p,x=h*g*d-v*l*d+v*o*f-s*g*f-h*o*p+s*l*p,C=v*l*c-h*g*c-v*o*u+s*g*u+h*o*m-s*l*m,P=e*_+n*y+a*x+r*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return t[0]=_*I,t[1]=(g*u*r-l*m*r-g*a*f+n*m*f+l*a*p-n*u*p)*I,t[2]=(o*m*r-g*c*r+g*a*d-n*m*d-o*a*p+n*c*p)*I,t[3]=(l*c*r-o*u*r-l*a*d+n*u*d+o*a*f-n*c*f)*I,t[4]=y*I,t[5]=(h*m*r-v*u*r+v*a*f-e*m*f-h*a*p+e*u*p)*I,t[6]=(v*c*r-s*m*r-v*a*d+e*m*d+s*a*p-e*c*p)*I,t[7]=(s*u*r-h*c*r+h*a*d-e*u*d-s*a*f+e*c*f)*I,t[8]=x*I,t[9]=(v*l*r-h*g*r-v*n*f+e*g*f+h*n*p-e*l*p)*I,t[10]=(s*g*r-v*o*r+v*n*d-e*g*d-s*n*p+e*o*p)*I,t[11]=(h*o*r-s*l*r-h*n*d+e*l*d+s*n*f-e*o*f)*I,t[12]=C*I,t[13]=(h*g*a-v*l*a+v*n*u-e*g*u-h*n*m+e*l*m)*I,t[14]=(v*o*a-s*g*a-v*n*c+e*g*c+s*n*m-e*o*m)*I,t[15]=(s*l*a-h*o*a+h*n*c-e*l*c-s*n*u+e*o*u)*I,this}scale(t){const e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),r=1-n,s=t.x,o=t.y,c=t.z,d=r*s,h=r*o;return this.set(d*s+n,d*o-a*c,d*c+a*o,0,d*o+a*c,h*o+n,h*c-a*s,0,d*c-a*o,h*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,s){return this.set(1,n,r,0,t,1,s,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,r=e._x,s=e._y,o=e._z,c=e._w,d=r+r,h=s+s,l=o+o,u=r*d,f=r*h,v=r*l,g=s*h,m=s*l,p=o*l,_=c*d,y=c*h,x=c*l,C=n.x,P=n.y,I=n.z;return a[0]=(1-(g+p))*C,a[1]=(f+x)*C,a[2]=(v-y)*C,a[3]=0,a[4]=(f-x)*P,a[5]=(1-(u+p))*P,a[6]=(m+_)*P,a[7]=0,a[8]=(v+y)*I,a[9]=(m-_)*I,a[10]=(1-(u+g))*I,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let r=Qn.set(a[0],a[1],a[2]).length();const s=Qn.set(a[4],a[5],a[6]).length(),o=Qn.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],je.copy(this);const d=1/r,h=1/s,l=1/o;return je.elements[0]*=d,je.elements[1]*=d,je.elements[2]*=d,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=l,je.elements[9]*=l,je.elements[10]*=l,e.setFromRotationMatrix(je),n.x=r,n.y=s,n.z=o,this}makePerspective(t,e,n,a,r,s,o=pn){const c=this.elements,d=2*r/(e-t),h=2*r/(n-a),l=(e+t)/(e-t),u=(n+a)/(n-a);let f,v;if(o===pn)f=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===wr)f=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,a,r,s,o=pn){const c=this.elements,d=1/(e-t),h=1/(n-a),l=1/(s-r),u=(e+t)*d,f=(n+a)*h;let v,g;if(o===pn)v=(s+r)*l,g=-2*l;else if(o===wr)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new st,je=new Ae,$l=new st(0,0,0),jl=new st(1,1,1),yn=new st,$i=new st,Ge=new st,da=new Ae,fa=new Bi;class vn{constructor(t=0,e=0,n=0,a=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],c=a[1],d=a[5],h=a[9],l=a[2],u=a[6],f=a[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-s,d)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,d));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(da,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fa.setFromEuler(this),this.setFromQuaternion(fa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Mo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jl=0;const pa=new st,ti=new Bi,ln=new Ae,ji=new st,Ci=new st,Ql=new st,tc=new Bi,ma=new st(1,0,0),va=new st(0,1,0),ga=new st(0,0,1),_a={type:"added"},ec={type:"removed"},ei={type:"childadded",child:null},Wr={type:"childremoved",child:null};class Ne extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new st,e=new vn,n=new Bi,a=new st(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ae},normalMatrix:{value:new oe}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.multiply(ti),this}rotateOnWorldAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.premultiply(ti),this}rotateX(t){return this.rotateOnAxis(ma,t)}rotateY(t){return this.rotateOnAxis(va,t)}rotateZ(t){return this.rotateOnAxis(ga,t)}translateOnAxis(t,e){return pa.copy(t).applyQuaternion(this.quaternion),this.position.add(pa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ma,t)}translateY(t){return this.translateOnAxis(va,t)}translateZ(t){return this.translateOnAxis(ga,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Ci,ji,this.up):ln.lookAt(ji,Ci,this.up),this.quaternion.setFromRotationMatrix(ln),a&&(ln.extractRotation(a.matrixWorld),ti.setFromRotationMatrix(ln),this.quaternion.premultiply(ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_a),ei.child=t,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ec),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_a),ei.child=t,this.dispatchEvent(ei),ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,Ql),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,tc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const l=c[d];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,d=this.material.length;c<d;c++)o.push(r(t.materials,this.material[c]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(t.animations,c))}}if(e){const o=s(t.geometries),c=s(t.materials),d=s(t.textures),h=s(t.images),l=s(t.shapes),u=s(t.skeletons),f=s(t.animations),v=s(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=a,n;function s(o){const c=[];for(const d in o){const h=o[d];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}Ne.DEFAULT_UP=new st(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new st,cn=new st,kr=new st,hn=new st,ni=new st,ii=new st,xa=new st,Xr=new st,qr=new st,Yr=new st;class rn{constructor(t=new st,e=new st,n=new st){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),Je.subVectors(t,e),a.cross(Je);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){Je.subVectors(a,e),cn.subVectors(n,e),kr.subVectors(t,e);const s=Je.dot(Je),o=Je.dot(cn),c=Je.dot(kr),d=cn.dot(cn),h=cn.dot(kr),l=s*d-o*o;if(l===0)return r.set(0,0,0),null;const u=1/l,f=(d*c-o*h)*u,v=(s*h-o*c)*u;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,a,r,s,o,c){return this.getBarycoord(t,e,n,a,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hn.x),c.addScaledVector(s,hn.y),c.addScaledVector(o,hn.z),c)}static isFrontFacing(t,e,n,a){return Je.subVectors(n,e),cn.subVectors(t,e),Je.cross(cn).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Je.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,a,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,r=this.c;let s,o;ni.subVectors(a,n),ii.subVectors(r,n),Xr.subVectors(t,n);const c=ni.dot(Xr),d=ii.dot(Xr);if(c<=0&&d<=0)return e.copy(n);qr.subVectors(t,a);const h=ni.dot(qr),l=ii.dot(qr);if(h>=0&&l<=h)return e.copy(a);const u=c*l-h*d;if(u<=0&&c>=0&&h<=0)return s=c/(c-h),e.copy(n).addScaledVector(ni,s);Yr.subVectors(t,r);const f=ni.dot(Yr),v=ii.dot(Yr);if(v>=0&&f<=v)return e.copy(r);const g=f*d-c*v;if(g<=0&&d>=0&&v<=0)return o=d/(d-v),e.copy(n).addScaledVector(ii,o);const m=h*v-f*l;if(m<=0&&l-h>=0&&f-v>=0)return xa.subVectors(r,a),o=(l-h)/(l-h+(f-v)),e.copy(a).addScaledVector(xa,o);const p=1/(m+g+u);return s=g*p,o=u*p,e.copy(n).addScaledVector(ni,s).addScaledVector(ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const So={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function Kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class fe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=pe.workingColorSpace){if(t=zl(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Kr(s,r,t+1/3),this.g=Kr(s,r,t),this.b=Kr(s,r,t-1/3)}return pe.toWorkingColorSpace(this,a),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const n=So[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return pe.fromWorkingColorSpace(Ue.copy(this),t),Math.round(ze(Ue.r*255,0,255))*65536+Math.round(ze(Ue.g*255,0,255))*256+Math.round(ze(Ue.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,a=Ue.g,r=Ue.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,d;const h=(o+s)/2;if(o===s)c=0,d=0;else{const l=s-o;switch(d=h<=.5?l/(s+o):l/(2-s-o),s){case n:c=(a-r)/l+(a<r?6:0);break;case a:c=(r-n)/l+2;break;case r:c=(n-a)/l+4;break}c/=6}return t.h=c,t.s=d,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=en){pe.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,a=Ue.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(Ji);const n=Dr(Mn.h,Ji.h,e),a=Dr(Mn.s,Ji.s,e),r=Dr(Mn.l,Ji.l,e);return this.setHSL(n,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*a,this.g=r[1]*e+r[4]*n+r[7]*a,this.b=r[2]*e+r[5]*n+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new fe;fe.NAMES=So;let nc=0;class zi extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=pi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=as,this.blendDst=os,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==as&&(n.blendSrc=this.blendSrc),this.blendDst!==os&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(e){const r=a(t.textures),s=a(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class $s extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new st,Qi=new ue;class sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=aa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return _o("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),a=Oe(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),a=Oe(a,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==aa&&(t.usage=this.usage),t}}class Eo extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wo extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wn extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ic=0;const ke=new Ae,Zr=new Ne,ri=new st,We=new Oi,Pi=new Oi,Ie=new st;class qn extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(go(t)?wo:Eo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Zr.lookAt(t),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(t){const e=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Wn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(We.min,Pi.min),We.expandByPoint(Ie),Ie.addVectors(We.max,Pi.max),We.expandByPoint(Ie)):(We.expandByPoint(Pi.min),We.expandByPoint(Pi.max))}We.getCenter(n);let a=0;for(let r=0,s=t.count;r<s;r++)Ie.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(Ie));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],c=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)Ie.fromBufferAttribute(o,d),c&&(ri.fromBufferAttribute(t,d),Ie.add(ri)),a=Math.max(a,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,a=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new st,c[D]=new st;const d=new st,h=new st,l=new st,u=new ue,f=new ue,v=new ue,g=new st,m=new st;function p(D,E,M){d.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),l.fromBufferAttribute(n,M),u.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),v.fromBufferAttribute(r,M),h.sub(d),l.sub(d),f.sub(u),v.sub(u);const T=1/(f.x*v.y-v.x*f.y);isFinite(T)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(l,-f.y).multiplyScalar(T),m.copy(l).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(T),o[D].add(g),o[E].add(g),o[M].add(g),c[D].add(m),c[E].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let D=0,E=_.length;D<E;++D){const M=_[D],T=M.start,O=M.count;for(let N=T,K=T+O;N<K;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new st,x=new st,C=new st,P=new st;function I(D){C.fromBufferAttribute(a,D),P.copy(C);const E=o[D];y.copy(E),y.sub(C.multiplyScalar(C.dot(E))).normalize(),x.crossVectors(P,E);const T=x.dot(c[D])<0?-1:1;s.setXYZW(D,y.x,y.y,y.z,T)}for(let D=0,E=_.length;D<E;++D){const M=_[D],T=M.start,O=M.count;for(let N=T,K=T+O;N<K;N+=3)I(t.getX(N+0)),I(t.getX(N+1)),I(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const a=new st,r=new st,s=new st,o=new st,c=new st,d=new st,h=new st,l=new st;if(t)for(let u=0,f=t.count;u<f;u+=3){const v=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),h.subVectors(s,r),l.subVectors(a,r),h.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,m),o.add(h),c.add(h),d.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,f=e.count;u<f;u+=3)a.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),s.fromBufferAttribute(e,u+2),h.subVectors(s,r),l.subVectors(a,r),h.cross(l),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){const d=o.array,h=o.itemSize,l=o.normalized,u=new d.constructor(c.length*h);let f=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)u[v++]=d[f++]}return new sn(u,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qn,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],d=t(c,n);e.setAttribute(o,d)}const r=this.morphAttributes;for(const o in r){const c=[],d=r[o];for(let h=0,l=d.length;h<l;h++){const u=d[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const d=s[o];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(t[d]=c[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const d=n[c];t.data.attributes[c]=d.toJSON(t.data)}const a={};let r=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let l=0,u=d.length;l<u;l++){const f=d[l];h.push(f.toJSON(t.data))}h.length>0&&(a[c]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const d in a){const h=a[d];this.setAttribute(d,h.clone(e))}const r=t.morphAttributes;for(const d in r){const h=[],l=r[d];for(let u=0,f=l.length;u<f;u++)h.push(l[u].clone(e));this.morphAttributes[d]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let d=0,h=s.length;d<h;d++){const l=s[d];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ya=new Ae,Dn=new Zl,tr=new Zs,Ma=new st,si=new st,ai=new st,oi=new st,$r=new st,er=new st,nr=new ue,ir=new ue,rr=new ue,Sa=new st,Ea=new st,wa=new st,sr=new st,ar=new st;class Ke extends Ne{constructor(t=new qn,e=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){er.set(0,0,0);for(let c=0,d=r.length;c<d;c++){const h=o[c],l=r[c];h!==0&&($r.fromBufferAttribute(l,t),s?er.addScaledVector($r,h):er.addScaledVector($r.sub(e),h))}e.add(er)}return e}raycast(t,e){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),Dn.copy(t.ray).recast(t.near),!(tr.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(tr,Ma)===null||Dn.origin.distanceToSquared(Ma)>(t.far-t.near)**2))&&(ya.copy(r).invert(),Dn.copy(t.ray).applyMatrix4(ya),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=u.length;v<g;v++){const m=u[v],p=s[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,C=y;x<C;x+=3){const P=o.getX(x),I=o.getX(x+1),D=o.getX(x+2);a=or(this,p,t,n,d,h,l,P,I,D),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);a=or(this,s,t,n,d,h,l,_,y,x),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,g=u.length;v<g;v++){const m=u[v],p=s[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,C=y;x<C;x+=3){const P=x,I=x+1,D=x+2;a=or(this,p,t,n,d,h,l,P,I,D),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=m,y=m+1,x=m+2;a=or(this,s,t,n,d,h,l,_,y,x),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function rc(i,t,e,n,a,r,s,o){let c;if(t.side===Ve?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,t.side===Rn,o),c===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(ar);return d<e.near||d>e.far?null:{distance:d,point:ar.clone(),object:i}}function or(i,t,e,n,a,r,s,o,c,d){i.getVertexPosition(o,si),i.getVertexPosition(c,ai),i.getVertexPosition(d,oi);const h=rc(i,t,e,n,si,ai,oi,sr);if(h){a&&(nr.fromBufferAttribute(a,o),ir.fromBufferAttribute(a,c),rr.fromBufferAttribute(a,d),h.uv=rn.getInterpolation(sr,si,ai,oi,nr,ir,rr,new ue)),r&&(nr.fromBufferAttribute(r,o),ir.fromBufferAttribute(r,c),rr.fromBufferAttribute(r,d),h.uv1=rn.getInterpolation(sr,si,ai,oi,nr,ir,rr,new ue)),s&&(Sa.fromBufferAttribute(s,o),Ea.fromBufferAttribute(s,c),wa.fromBufferAttribute(s,d),h.normal=rn.getInterpolation(sr,si,ai,oi,Sa,Ea,wa,new st),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const l={a:o,b:c,c:d,normal:new st,materialIndex:0};rn.getNormal(si,ai,oi,l.normal),h.face=l}return h}class Yn extends qn{constructor(t=1,e=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],d=[],h=[],l=[];let u=0,f=0;v("z","y","x",-1,-1,n,e,t,s,r,0),v("z","y","x",1,-1,n,e,-t,s,r,1),v("x","z","y",1,1,t,n,e,a,s,2),v("x","z","y",1,-1,t,n,-e,a,s,3),v("x","y","z",1,-1,t,e,n,a,r,4),v("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new Wn(d,3)),this.setAttribute("normal",new Wn(h,3)),this.setAttribute("uv",new Wn(l,2));function v(g,m,p,_,y,x,C,P,I,D,E){const M=x/I,T=C/D,O=x/2,N=C/2,K=P/2,k=I+1,j=D+1;let z=0,L=0;const tt=new st;for(let J=0;J<j;J++){const F=J*T-N;for(let $=0;$<k;$++){const H=$*M-O;tt[g]=H*_,tt[m]=F*y,tt[p]=K,d.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[p]=P>0?1:-1,h.push(tt.x,tt.y,tt.z),l.push($/I),l.push(1-J/D),z+=1}}for(let J=0;J<D;J++)for(let F=0;F<I;F++){const $=u+F+k*J,H=u+F+k*(J+1),A=u+(F+1)+k*(J+1),b=u+(F+1)+k*J;c.push($,H,b),c.push(H,A,b),L+=6}o.addGroup(f,L,E),f+=L,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=Mi(i[e]);for(const a in n)t[a]=n[a]}return t}function sc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function To(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const ac={clone:Mi,merge:Fe};var oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oc,this.fragmentShader=lc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=sc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?e.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[a]={type:"m4",value:s.toArray()}:e.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ao extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new st,Ta=new ue,Aa=new ue;class Xe extends Ao{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z)}getViewSize(t,e){return this.getViewBounds(t,Ta,Aa),e.subVectors(Aa,Ta)}setViewOffset(t,e,n,a,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,d=s.fullHeight;r+=s.offsetX*a/c,e-=s.offsetY*n/d,a*=s.width/c,n*=s.height/d}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,ci=1;class cc extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xe(li,ci,t,e);a.layers=this.layers,this.add(a);const r=new Xe(li,ci,t,e);r.layers=this.layers,this.add(r);const s=new Xe(li,ci,t,e);s.layers=this.layers,this.add(s);const o=new Xe(li,ci,t,e);o.layers=this.layers,this.add(o);const c=new Xe(li,ci,t,e);c.layers=this.layers,this.add(c);const d=new Xe(li,ci,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,r,s,o,c]=e;for(const d of e)this.remove(d);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,d,h]=this.children,l=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,a),t.render(e,r),t.setRenderTarget(n,1,a),t.render(e,s),t.setRenderTarget(n,2,a),t.render(e,o),t.setRenderTarget(n,3,a),t.render(e,c),t.setRenderTarget(n,4,a),t.render(e,d),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,a),t.render(e,h),t.setRenderTarget(l,u,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class bo extends Be{constructor(t,e,n,a,r,s,o,c,d,h){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,a,r,s,o,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hc extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];this.texture=new bo(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Yn(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Tn});r.uniforms.tEquirect.value=e;const s=new Ke(a,r),o=e.minFilter;return e.minFilter===Gn&&(e.minFilter=Qe),new cc(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,a);t.setRenderTarget(r)}}const jr=new st,uc=new st,dc=new oe;class Bn{constructor(t=new st(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=jr.subVectors(n,e).cross(uc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jr),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dc.getNormalMatrix(t),a=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Zs,lr=new st;class js{constructor(t=new Bn,e=new Bn,n=new Bn,a=new Bn,r=new Bn,s=new Bn){this.planes=[t,e,n,a,r,s]}set(t,e,n,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn){const n=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],c=a[3],d=a[4],h=a[5],l=a[6],u=a[7],f=a[8],v=a[9],g=a[10],m=a[11],p=a[12],_=a[13],y=a[14],x=a[15];if(n[0].setComponents(c-r,u-d,m-f,x-p).normalize(),n[1].setComponents(c+r,u+d,m+f,x+p).normalize(),n[2].setComponents(c+s,u+h,m+v,x+_).normalize(),n[3].setComponents(c-s,u-h,m-v,x-_).normalize(),n[4].setComponents(c-o,u-l,m-g,x-y).normalize(),e===pn)n[5].setComponents(c+o,u+l,m+g,x+y).normalize();else if(e===wr)n[5].setComponents(o,l,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(lr.x=a.normal.x>0?t.max.x:t.min.x,lr.y=a.normal.y>0?t.max.y:t.min.y,lr.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ro(){let i=null,t=!1,e=null,n=null;function a(r,s){e(r,s),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function fc(i){const t=new WeakMap;function e(o,c){const d=o.array,h=o.usage,l=d.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,d,h),o.onUploadCallback();let f;if(d instanceof Float32Array)f=i.FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)f=i.SHORT;else if(d instanceof Uint32Array)f=i.UNSIGNED_INT;else if(d instanceof Int32Array)f=i.INT;else if(d instanceof Int8Array)f=i.BYTE;else if(d instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:f,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,d){const h=c.array,l=c._updateRange,u=c.updateRanges;if(i.bindBuffer(d,o),l.count===-1&&u.length===0&&i.bufferSubData(d,0,h),u.length!==0){for(let f=0,v=u.length;f<v;f++){const g=u[f];i.bufferSubData(d,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}l.count!==-1&&(i.bufferSubData(d,l.offset*h.BYTES_PER_ELEMENT,h,l.offset,l.count),l.count=-1),c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function s(o,c){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const d=t.get(o);if(d===void 0)t.set(o,e(o,c));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,c),d.version=o.version}}return{get:a,remove:r,update:s}}class Vi extends qn{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const r=t/2,s=e/2,o=Math.floor(n),c=Math.floor(a),d=o+1,h=c+1,l=t/o,u=e/c,f=[],v=[],g=[],m=[];for(let p=0;p<h;p++){const _=p*u-s;for(let y=0;y<d;y++){const x=y*l-r;v.push(x,-_,0),g.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){const y=_+d*p,x=_+d*(p+1),C=_+1+d*(p+1),P=_+1+d*p;f.push(y,x,P),f.push(x,C,P)}this.setIndex(f),this.setAttribute("position",new Wn(v,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.width,t.height,t.widthSegments,t.heightSegments)}}var pc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mc=`#ifdef USE_ALPHAHASH
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
#endif`,vc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_c=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yc=`#ifdef USE_AOMAP
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
#endif`,Mc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sc=`#ifdef USE_BATCHING
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
#endif`,Ec=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ac=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bc=`#ifdef USE_IRIDESCENCE
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
#endif`,Rc=`#ifdef USE_BUMPMAP
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
#endif`,Cc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bc=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Oc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zc=`vec3 transformedNormal = objectNormal;
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
#endif`,Vc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qc=`#ifdef USE_ENVMAP
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
#endif`,Yc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kc=`#ifdef USE_ENVMAP
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
#endif`,Zc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$c=`#ifdef USE_ENVMAP
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
#endif`,jc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eh=`#ifdef USE_GRADIENTMAP
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
}`,nh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ih=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sh=`uniform bool receiveShadow;
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
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,oh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ch=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uh=`PhysicalMaterial material;
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
#endif`,dh=`struct PhysicalMaterial {
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
}`,fh=`
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
#endif`,ph=`#if defined( RE_IndirectDiffuse )
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
#endif`,mh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_h=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eh=`#if defined( USE_POINTS_UV )
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
#endif`,wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Th=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ah=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ch=`#ifdef USE_MORPHTARGETS
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
#endif`,Ph=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ih=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fh=`#ifdef USE_NORMALMAP
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
#endif`,Bh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Oh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Wh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$h=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jh=`float getShadowMask() {
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
}`,Qh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tu=`#ifdef USE_SKINNING
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
#endif`,eu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nu=`#ifdef USE_SKINNING
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
#endif`,iu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,su=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,au=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ou=`#ifdef USE_TRANSMISSION
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
#endif`,lu=`#ifdef USE_TRANSMISSION
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
#endif`,cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,du=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pu=`uniform sampler2D t2D;
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
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_u=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`#include <common>
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
}`,yu=`#if DEPTH_PACKING == 3200
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
	#endif
}`,Mu=`#define DISTANCE
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
}`,Su=`#define DISTANCE
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
}`,Eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tu=`uniform float scale;
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
}`,Au=`uniform vec3 diffuse;
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
}`,bu=`#include <common>
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
}`,Ru=`uniform vec3 diffuse;
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
}`,Cu=`#define LAMBERT
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
}`,Pu=`#define LAMBERT
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
}`,Lu=`#define MATCAP
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
}`,Iu=`#define MATCAP
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
}`,Du=`#define NORMAL
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
}`,Uu=`#define NORMAL
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
}`,Nu=`#define PHONG
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
}`,Fu=`#define PHONG
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
}`,Bu=`#define STANDARD
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
}`,Ou=`#define STANDARD
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
}`,zu=`#define TOON
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
}`,Vu=`#define TOON
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
}`,Hu=`uniform float size;
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
}`,Gu=`uniform vec3 diffuse;
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
}`,Wu=`#include <common>
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
}`,ku=`uniform vec3 color;
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
}`,Xu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,qu=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:pc,alphahash_pars_fragment:mc,alphamap_fragment:vc,alphamap_pars_fragment:gc,alphatest_fragment:_c,alphatest_pars_fragment:xc,aomap_fragment:yc,aomap_pars_fragment:Mc,batching_pars_vertex:Sc,batching_vertex:Ec,begin_vertex:wc,beginnormal_vertex:Tc,bsdfs:Ac,iridescence_fragment:bc,bumpmap_pars_fragment:Rc,clipping_planes_fragment:Cc,clipping_planes_pars_fragment:Pc,clipping_planes_pars_vertex:Lc,clipping_planes_vertex:Ic,color_fragment:Dc,color_pars_fragment:Uc,color_pars_vertex:Nc,color_vertex:Fc,common:Bc,cube_uv_reflection_fragment:Oc,defaultnormal_vertex:zc,displacementmap_pars_vertex:Vc,displacementmap_vertex:Hc,emissivemap_fragment:Gc,emissivemap_pars_fragment:Wc,colorspace_fragment:kc,colorspace_pars_fragment:Xc,envmap_fragment:qc,envmap_common_pars_fragment:Yc,envmap_pars_fragment:Kc,envmap_pars_vertex:Zc,envmap_physical_pars_fragment:ah,envmap_vertex:$c,fog_vertex:jc,fog_pars_vertex:Jc,fog_fragment:Qc,fog_pars_fragment:th,gradientmap_pars_fragment:eh,lightmap_pars_fragment:nh,lights_lambert_fragment:ih,lights_lambert_pars_fragment:rh,lights_pars_begin:sh,lights_toon_fragment:oh,lights_toon_pars_fragment:lh,lights_phong_fragment:ch,lights_phong_pars_fragment:hh,lights_physical_fragment:uh,lights_physical_pars_fragment:dh,lights_fragment_begin:fh,lights_fragment_maps:ph,lights_fragment_end:mh,logdepthbuf_fragment:vh,logdepthbuf_pars_fragment:gh,logdepthbuf_pars_vertex:_h,logdepthbuf_vertex:xh,map_fragment:yh,map_pars_fragment:Mh,map_particle_fragment:Sh,map_particle_pars_fragment:Eh,metalnessmap_fragment:wh,metalnessmap_pars_fragment:Th,morphinstance_vertex:Ah,morphcolor_vertex:bh,morphnormal_vertex:Rh,morphtarget_pars_vertex:Ch,morphtarget_vertex:Ph,normal_fragment_begin:Lh,normal_fragment_maps:Ih,normal_pars_fragment:Dh,normal_pars_vertex:Uh,normal_vertex:Nh,normalmap_pars_fragment:Fh,clearcoat_normal_fragment_begin:Bh,clearcoat_normal_fragment_maps:Oh,clearcoat_pars_fragment:zh,iridescence_pars_fragment:Vh,opaque_fragment:Hh,packing:Gh,premultiplied_alpha_fragment:Wh,project_vertex:kh,dithering_fragment:Xh,dithering_pars_fragment:qh,roughnessmap_fragment:Yh,roughnessmap_pars_fragment:Kh,shadowmap_pars_fragment:Zh,shadowmap_pars_vertex:$h,shadowmap_vertex:jh,shadowmask_pars_fragment:Jh,skinbase_vertex:Qh,skinning_pars_vertex:tu,skinning_vertex:eu,skinnormal_vertex:nu,specularmap_fragment:iu,specularmap_pars_fragment:ru,tonemapping_fragment:su,tonemapping_pars_fragment:au,transmission_fragment:ou,transmission_pars_fragment:lu,uv_pars_fragment:cu,uv_pars_vertex:hu,uv_vertex:uu,worldpos_vertex:du,background_vert:fu,background_frag:pu,backgroundCube_vert:mu,backgroundCube_frag:vu,cube_vert:gu,cube_frag:_u,depth_vert:xu,depth_frag:yu,distanceRGBA_vert:Mu,distanceRGBA_frag:Su,equirect_vert:Eu,equirect_frag:wu,linedashed_vert:Tu,linedashed_frag:Au,meshbasic_vert:bu,meshbasic_frag:Ru,meshlambert_vert:Cu,meshlambert_frag:Pu,meshmatcap_vert:Lu,meshmatcap_frag:Iu,meshnormal_vert:Du,meshnormal_frag:Uu,meshphong_vert:Nu,meshphong_frag:Fu,meshphysical_vert:Bu,meshphysical_frag:Ou,meshtoon_vert:zu,meshtoon_frag:Vu,points_vert:Hu,points_frag:Gu,shadow_vert:Wu,shadow_frag:ku,sprite_vert:Xu,sprite_frag:qu},Vt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},nn={basic:{uniforms:Fe([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Fe([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Fe([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Fe([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Fe([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Fe([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Fe([Vt.points,Vt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Fe([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Fe([Vt.common,Vt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Fe([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Fe([Vt.sprite,Vt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:Fe([Vt.common,Vt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:Fe([Vt.lights,Vt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};nn.physical={uniforms:Fe([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const cr={r:0,b:0,g:0},Nn=new vn,Yu=new Ae;function Ku(i,t,e,n,a,r,s){const o=new fe(0);let c=r===!0?0:1,d,h,l=null,u=0,f=null;function v(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function g(_){let y=!1;const x=v(_);x===null?p(o,c):x&&x.isColor&&(p(x,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){const x=v(y);x&&(x.isCubeTexture||x.mapping===Tr)?(h===void 0&&(h=new Ke(new Yn(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Mi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Nn.copy(y.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yu.makeRotationFromEuler(Nn)),h.material.toneMapped=pe.getTransfer(x.colorSpace)!==ye,(l!==x||u!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,l=x,u=x.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(d===void 0&&(d=new Ke(new Vi(2,2),new Cn({name:"BackgroundMaterial",uniforms:Mi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=x,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.toneMapped=pe.getTransfer(x.colorSpace)!==ye,x.matrixAutoUpdate===!0&&x.updateMatrix(),d.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||u!==x.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,l=x,u=x.version,f=i.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null))}function p(_,y){_.getRGB(cr,To(i)),n.buffers.color.setClear(cr.r,cr.g,cr.b,y,s)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:g,addToRenderList:m}}function Zu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=u(null);let r=a,s=!1;function o(M,T,O,N,K){let k=!1;const j=l(N,O,T);r!==j&&(r=j,d(r.object)),k=f(M,N,O,K),k&&v(M,N,O,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(k||s)&&(s=!1,x(M,T,O,N),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function d(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function l(M,T,O){const N=O.wireframe===!0;let K=n[M.id];K===void 0&&(K={},n[M.id]=K);let k=K[T.id];k===void 0&&(k={},K[T.id]=k);let j=k[N];return j===void 0&&(j=u(c()),k[N]=j),j}function u(M){const T=[],O=[],N=[];for(let K=0;K<e;K++)T[K]=0,O[K]=0,N[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,T,O,N){const K=r.attributes,k=T.attributes;let j=0;const z=O.getAttributes();for(const L in z)if(z[L].location>=0){const J=K[L];let F=k[L];if(F===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(F=M.instanceColor)),J===void 0||J.attribute!==F||F&&J.data!==F.data)return!0;j++}return r.attributesNum!==j||r.index!==N}function v(M,T,O,N){const K={},k=T.attributes;let j=0;const z=O.getAttributes();for(const L in z)if(z[L].location>=0){let J=k[L];J===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const F={};F.attribute=J,J&&J.data&&(F.data=J.data),K[L]=F,j++}r.attributes=K,r.attributesNum=j,r.index=N}function g(){const M=r.newAttributes;for(let T=0,O=M.length;T<O;T++)M[T]=0}function m(M){p(M,0)}function p(M,T){const O=r.newAttributes,N=r.enabledAttributes,K=r.attributeDivisors;O[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),K[M]!==T&&(i.vertexAttribDivisor(M,T),K[M]=T)}function _(){const M=r.newAttributes,T=r.enabledAttributes;for(let O=0,N=T.length;O<N;O++)T[O]!==M[O]&&(i.disableVertexAttribArray(O),T[O]=0)}function y(M,T,O,N,K,k,j){j===!0?i.vertexAttribIPointer(M,T,O,K,k):i.vertexAttribPointer(M,T,O,N,K,k)}function x(M,T,O,N){g();const K=N.attributes,k=O.getAttributes(),j=T.defaultAttributeValues;for(const z in k){const L=k[z];if(L.location>=0){let tt=K[z];if(tt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const J=tt.normalized,F=tt.itemSize,$=t.get(tt);if($===void 0)continue;const H=$.buffer,A=$.type,b=$.bytesPerElement,G=A===i.INT||A===i.UNSIGNED_INT||tt.gpuType===Gs;if(tt.isInterleavedBufferAttribute){const Z=tt.data,et=Z.stride,X=tt.offset;if(Z.isInstancedInterleavedBuffer){for(let it=0;it<L.locationSize;it++)p(L.location+it,Z.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let it=0;it<L.locationSize;it++)m(L.location+it);i.bindBuffer(i.ARRAY_BUFFER,H);for(let it=0;it<L.locationSize;it++)y(L.location+it,F/L.locationSize,A,J,et*b,(X+F/L.locationSize*it)*b,G)}else{if(tt.isInstancedBufferAttribute){for(let Z=0;Z<L.locationSize;Z++)p(L.location+Z,tt.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Z=0;Z<L.locationSize;Z++)m(L.location+Z);i.bindBuffer(i.ARRAY_BUFFER,H);for(let Z=0;Z<L.locationSize;Z++)y(L.location+Z,F/L.locationSize,A,J,F*b,F/L.locationSize*Z*b,G)}}else if(j!==void 0){const J=j[z];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(L.location,J);break;case 3:i.vertexAttrib3fv(L.location,J);break;case 4:i.vertexAttrib4fv(L.location,J);break;default:i.vertexAttrib1fv(L.location,J)}}}}_()}function C(){D();for(const M in n){const T=n[M];for(const O in T){const N=T[O];for(const K in N)h(N[K].object),delete N[K];delete T[O]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const T=n[M.id];for(const O in T){const N=T[O];for(const K in N)h(N[K].object),delete N[K];delete T[O]}delete n[M.id]}function I(M){for(const T in n){const O=n[T];if(O[M.id]===void 0)continue;const N=O[M.id];for(const K in N)h(N[K].object),delete N[K];delete O[M.id]}}function D(){E(),s=!0,r!==a&&(r=a,d(r.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function $u(i,t,e){let n;function a(d){n=d}function r(d,h){i.drawArrays(n,d,h),e.update(h,n,1)}function s(d,h,l){l!==0&&(i.drawArraysInstanced(n,d,h,l),e.update(h,n,l))}function o(d,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,l);let f=0;for(let v=0;v<l;v++)f+=h[v];e.update(f,n,1)}function c(d,h,l,u){if(l===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<d.length;v++)s(d[v],h[v],u[v]);else{f.multiDrawArraysInstancedWEBGL(n,d,0,h,0,u,0,l);let v=0;for(let g=0;g<l;g++)v+=h[g];for(let g=0;g<u.length;g++)e.update(v,n,u[g])}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ju(i,t,e,n){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");a=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(P){return!(P!==tn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const I=P===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==mn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fn&&!I)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const h=c(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const l=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,maxSamples:C}}function Ju(i){const t=this;let e=null,n=0,a=!1,r=!1;const s=new Bn,o=new oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,u){const f=l.length!==0||u||n!==0||a;return a=u,n=l.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,u){e=h(l,u,0)},this.setState=function(l,u,f){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,p=i.get(l);if(!a||v===null||v.length===0||r&&!m)r?h(null):d();else{const _=r?0:n,y=_*4;let x=p.clippingState||null;c.value=x,x=h(v,u,y,f);for(let C=0;C!==y;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function d(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,u,f,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const p=f+g*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==g;++y,x+=4)s.copy(l[y]).applyMatrix4(_,o),s.normal.toArray(m,x),m[x+3]=s.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Qu(i){let t=new WeakMap;function e(s,o){return o===ls?s.mapping=gi:o===cs&&(s.mapping=_i),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===ls||o===cs)if(t.has(s)){const c=t.get(s).texture;return e(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const d=new hc(c.height);return d.fromEquirectangularTexture(i,s),t.set(s,d),s.addEventListener("dispose",a),e(d.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Co extends Ao{constructor(t=-1,e=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=a+e,c=a-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,s=r+d*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const di=4,ba=[.125,.215,.35,.446,.526,.582],Vn=20,Jr=new Co,Ra=new fe;let Qr=null,ts=0,es=0,ns=!1;const On=(1+Math.sqrt(5))/2,hi=1/On,Ca=[new st(-On,hi,0),new st(On,hi,0),new st(-hi,0,On),new st(hi,0,On),new st(0,On,-hi),new st(0,On,hi),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)];class Pa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){Qr=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,a,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Da(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qr,ts,es),this._renderer.xr.enabled=ns,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qr=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Ni,format:tn,colorSpace:Pn,depthBuffer:!1},a=La(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=La(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=td(r)),this._blurMaterial=ed(r,t,e)}return a}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,a){const o=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,u=h.toneMapping;h.getClearColor(Ra),h.toneMapping=An,h.autoClear=!1;const f=new $s({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),v=new Ke(new Yn,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Ra),g=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(d[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,d[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,d[p]));const y=this._cubeSize;hr(a,_*y,p>2?y:0,y,y),h.setRenderTarget(a),g&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=u,h.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===gi||t.mapping===_i;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Da()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ia());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new Ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;hr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(s,Jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ca[(a-r-1)%Ca.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,a,"latitudinal",r),this._halfBlur(s,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,s,o){const c=this._renderer,d=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new Ke(this._lodPlanes[a],d),u=d.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vn-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):Vn;m>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const p=[];let _=0;for(let I=0;I<Vn;++I){const D=I/g,E=Math.exp(-D*D/2);p.push(E),I===0?_+=E:I<m&&(_+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=v,u.mipInt.value=y-n;const x=this._sizeLods[a],C=3*x*(a>y-di?a-y+di:0),P=4*(this._cubeSize-x);hr(e,C,P,3*x,2*x),c.setRenderTarget(e),c.render(l,Jr)}}function td(i){const t=[],e=[],n=[];let a=i;const r=i-di+1+ba.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>i-di?c=ba[s-i+di-1]:s===0&&(c=0),n.push(c);const d=1/(o-2),h=-d,l=1+d,u=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,v=6,g=3,m=2,p=1,_=new Float32Array(g*v*f),y=new Float32Array(m*v*f),x=new Float32Array(p*v*f);for(let P=0;P<f;P++){const I=P%3*2/3-1,D=P>2?0:-1,E=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];_.set(E,g*v*P),y.set(u,m*v*P);const M=[P,P,P,P,P,P];x.set(M,p*v*P)}const C=new qn;C.setAttribute("position",new sn(_,g)),C.setAttribute("uv",new sn(y,m)),C.setAttribute("faceIndex",new sn(x,p)),t.push(C),a>di&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function La(i,t,e){const n=new Xn(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function ed(i,t,e){const n=new Float32Array(Vn),a=new st(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Js(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ia(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Js(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Da(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Js(){return`

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
	`}function nd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,d=c===ls||c===cs,h=c===gi||c===_i;if(d||h){let l=t.get(o);const u=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Pa(i)),l=d?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{const f=o.image;return d&&f&&f.height>0||h&&f&&a(f)?(e===null&&(e=new Pa(i)),l=d?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function a(o){let c=0;const d=6;for(let h=0;h<d;h++)o[h]!==void 0&&c++;return c===d}function r(o){const c=o.target;c.removeEventListener("dispose",r);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function id(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const a=e(n);return a===null&&_o("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function rd(i,t,e,n){const a={},r=new WeakMap;function s(l){const u=l.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);for(const v in u.morphAttributes){const g=u.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",s),delete a[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(l,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,e.memory.geometries++),u}function c(l){const u=l.attributes;for(const v in u)t.update(u[v],i.ARRAY_BUFFER);const f=l.morphAttributes;for(const v in f){const g=f[v];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function d(l){const u=[],f=l.index,v=l.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let y=0,x=_.length;y<x;y+=3){const C=_[y+0],P=_[y+1],I=_[y+2];u.push(C,P,P,I,I,C)}}else if(v!==void 0){const _=v.array;g=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const C=y+0,P=y+1,I=y+2;u.push(C,P,P,I,I,C)}}else return;const m=new(go(u)?wo:Eo)(u,1);m.version=g;const p=r.get(l);p&&t.remove(p),r.set(l,m)}function h(l){const u=r.get(l);if(u){const f=l.index;f!==null&&u.version<f.version&&d(l)}else d(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function sd(i,t,e){let n;function a(u){n=u}let r,s;function o(u){r=u.type,s=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*s),e.update(f,n,1)}function d(u,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,u*s,v),e.update(f,n,v))}function h(u,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];e.update(m,n,1)}function l(u,f,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)d(u[p]/s,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,g,0,v);let p=0;for(let _=0;_<v;_++)p+=f[_];for(let _=0;_<g.length;_++)e.update(p,n,g[_])}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function ad(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function od(i,t,e){const n=new WeakMap,a=new Ce;function r(s,o,c){const d=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==l){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;v===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let C=o.attributes.position.count*x,P=1;C>t.maxTextureSize&&(P=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const I=new Float32Array(C*P*4*l),D=new yo(I,C,P,l);D.type=fn,D.needsUpdate=!0;const E=x*4;for(let T=0;T<l;T++){const O=p[T],N=_[T],K=y[T],k=C*P*4*T;for(let j=0;j<O.count;j++){const z=j*E;v===!0&&(a.fromBufferAttribute(O,j),I[k+z+0]=a.x,I[k+z+1]=a.y,I[k+z+2]=a.z,I[k+z+3]=0),g===!0&&(a.fromBufferAttribute(N,j),I[k+z+4]=a.x,I[k+z+5]=a.y,I[k+z+6]=a.z,I[k+z+7]=0),m===!0&&(a.fromBufferAttribute(K,j),I[k+z+8]=a.x,I[k+z+9]=a.y,I[k+z+10]=a.z,I[k+z+11]=K.itemSize===4?a.w:1)}}u={count:l,texture:D,size:new ue(C,P)},n.set(o,u),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let v=0;for(let m=0;m<d.length;m++)v+=d[m];const g=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ld(i,t,e,n){let a=new WeakMap;function r(c){const d=n.render.frame,h=c.geometry,l=t.get(c,h);if(a.get(l)!==d&&(t.update(l),a.set(l,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const u=c.skeleton;a.get(u)!==d&&(u.update(),a.set(u,d))}return l}function s(){a=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:r,dispose:s}}class Po extends Be{constructor(t,e,n,a,r,s,o,c,d,h=mi){if(h!==mi&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mi&&(n=kn),n===void 0&&h===yi&&(n=xi),super(null,a,r,s,o,c,h,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lo=new Be,Ua=new Po(1,1),Io=new yo,Do=new Yl,Uo=new bo,Na=[],Fa=[],Ba=new Float32Array(16),Oa=new Float32Array(9),za=new Float32Array(4);function Ei(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let r=Na[a];if(r===void 0&&(r=new Float32Array(a),Na[a]=r),t!==0){n.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=e,i[s].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function br(i,t){let e=Fa[t];e===void 0&&(e=new Int32Array(t),Fa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function fd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;za.set(n),i.uniformMatrix2fv(this.addr,!1,za),Le(e,n)}}function pd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Oa.set(n),i.uniformMatrix3fv(this.addr,!1,Oa),Le(e,n)}}function md(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Ba.set(n),i.uniformMatrix4fv(this.addr,!1,Ba),Le(e,n)}}function vd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function _d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function yd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function Sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Ed(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function wd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(Ua.compareFunction=vo,r=Ua):r=Lo,e.setTexture2D(t||r,a)}function Td(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||Do,a)}function Ad(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||Uo,a)}function bd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||Io,a)}function Rd(i){switch(i){case 5126:return cd;case 35664:return hd;case 35665:return ud;case 35666:return dd;case 35674:return fd;case 35675:return pd;case 35676:return md;case 5124:case 35670:return vd;case 35667:case 35671:return gd;case 35668:case 35672:return _d;case 35669:case 35673:return xd;case 5125:return yd;case 36294:return Md;case 36295:return Sd;case 36296:return Ed;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Td;case 35680:case 36300:case 36308:case 36293:return Ad;case 36289:case 36303:case 36311:case 36292:return bd}}function Cd(i,t){i.uniform1fv(this.addr,t)}function Pd(i,t){const e=Ei(t,this.size,2);i.uniform2fv(this.addr,e)}function Ld(i,t){const e=Ei(t,this.size,3);i.uniform3fv(this.addr,e)}function Id(i,t){const e=Ei(t,this.size,4);i.uniform4fv(this.addr,e)}function Dd(i,t){const e=Ei(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ud(i,t){const e=Ei(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nd(i,t){const e=Ei(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fd(i,t){i.uniform1iv(this.addr,t)}function Bd(i,t){i.uniform2iv(this.addr,t)}function Od(i,t){i.uniform3iv(this.addr,t)}function zd(i,t){i.uniform4iv(this.addr,t)}function Vd(i,t){i.uniform1uiv(this.addr,t)}function Hd(i,t){i.uniform2uiv(this.addr,t)}function Gd(i,t){i.uniform3uiv(this.addr,t)}function Wd(i,t){i.uniform4uiv(this.addr,t)}function kd(i,t,e){const n=this.cache,a=t.length,r=br(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTexture2D(t[s]||Lo,r[s])}function Xd(i,t,e){const n=this.cache,a=t.length,r=br(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTexture3D(t[s]||Do,r[s])}function qd(i,t,e){const n=this.cache,a=t.length,r=br(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTextureCube(t[s]||Uo,r[s])}function Yd(i,t,e){const n=this.cache,a=t.length,r=br(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTexture2DArray(t[s]||Io,r[s])}function Kd(i){switch(i){case 5126:return Cd;case 35664:return Pd;case 35665:return Ld;case 35666:return Id;case 35674:return Dd;case 35675:return Ud;case 35676:return Nd;case 5124:case 35670:return Fd;case 35667:case 35671:return Bd;case 35668:case 35672:return Od;case 35669:case 35673:return zd;case 5125:return Vd;case 36294:return Hd;case 36295:return Gd;case 36296:return Wd;case 35678:case 36198:case 36298:case 36306:case 35682:return kd;case 35679:case 36299:case 36307:return Xd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return Yd}}class Zd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rd(e.type)}}class $d{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kd(e.type)}}class jd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,e[o.id],n)}}}const is=/(\w+)(\])?(\[|\.)?/g;function Va(i,t){i.seq.push(t),i.map[t.id]=t}function Jd(i,t,e){const n=i.name,a=n.length;for(is.lastIndex=0;;){const r=is.exec(n),s=is.lastIndex;let o=r[1];const c=r[2]==="]",d=r[3];if(c&&(o=o|0),d===void 0||d==="["&&s+2===a){Va(e,d===void 0?new Zd(o,i,t):new $d(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new jd(o),Va(e,l)),e=l}}}class xr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=t.getActiveUniform(e,a),s=t.getUniformLocation(e,r.name);Jd(r,s,this)}}setValue(t,e,n,a){const r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,s=e.length;r!==s;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in e&&n.push(s)}return n}}function Ha(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qd=37297;let tf=0;function ef(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return n.join(`
`)}function nf(i){const t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(i);let n;switch(t===e?n="":t===Er&&e===Sr?n="LinearDisplayP3ToLinearSRGB":t===Sr&&e===Er&&(n="LinearSRGBToLinearDisplayP3"),i){case Pn:case Ar:return[n,"LinearTransferOETF"];case en:case Ks:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ga(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+ef(i.getShaderSource(t),s)}else return a}function rf(i,t){const e=nf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function sf(i,t){let e;switch(t){case Ml:e="Linear";break;case Sl:e="Reinhard";break;case El:e="OptimizedCineon";break;case wl:e="ACESFilmic";break;case Al:e="AgX";break;case bl:e="Neutral";break;case Tl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function af(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function of(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(t,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[s]={type:r.type,location:i.getAttribLocation(t,s),locationSize:o}}return e}function Li(i){return i!==""}function Wa(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ka(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cf=/^[ \t]*#include +<([\w\d./]+)>/gm;function zs(i){return i.replace(cf,uf)}const hf=new Map;function uf(i,t){let e=ae[t];if(e===void 0){const n=hf.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zs(e)}const df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(i){return i.replace(df,ff)}function ff(i,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function qa(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function mf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case Tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function gf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case no:t="ENVMAP_BLENDING_MULTIPLY";break;case xl:t="ENVMAP_BLENDING_MIX";break;case yl:t="ENVMAP_BLENDING_ADD";break}return t}function _f(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xf(i,t,e,n){const a=i.getContext(),r=e.defines;let s=e.vertexShader,o=e.fragmentShader;const c=pf(e),d=mf(e),h=vf(e),l=gf(e),u=_f(e),f=af(e),v=of(r),g=a.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Li).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Li).join(`
`),p.length>0&&(p+=`
`)):(m=[qa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),p=[qa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?ae.tonemapping_pars_fragment:"",e.toneMapping!==An?sf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,rf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Li).join(`
`)),s=zs(s),s=Wa(s,e),s=ka(s,e),o=zs(o),o=Wa(o,e),o=ka(o,e),s=Xa(s),o=Xa(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+s,x=_+p+o,C=Ha(a,a.VERTEX_SHADER,y),P=Ha(a,a.FRAGMENT_SHADER,x);a.attachShader(g,C),a.attachShader(g,P),e.index0AttributeName!==void 0?a.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function I(T){if(i.debug.checkShaderErrors){const O=a.getProgramInfoLog(g).trim(),N=a.getShaderInfoLog(C).trim(),K=a.getShaderInfoLog(P).trim();let k=!0,j=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,g,C,P);else{const z=Ga(a,C,"vertex"),L=Ga(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+z+`
`+L)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||K==="")&&(j=!1);j&&(T.diagnostics={runnable:k,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:K,prefix:p}})}a.deleteShader(C),a.deleteShader(P),D=new xr(a,g),E=lf(a,g)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(g,Qd)),M},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=P,this}let yf=0;class Mf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sf(t),e.set(t,n)),n}}class Sf{constructor(t){this.id=yf++,this.code=t,this.usedTimes=0}}function Ef(i,t,e,n,a,r,s){const o=new Mo,c=new Mf,d=new Set,h=[],l=a.logarithmicDepthBuffer,u=a.vertexTextures;let f=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return d.add(E),E===0?"uv":`uv${E}`}function m(E,M,T,O,N){const K=O.fog,k=N.geometry,j=E.isMeshStandardMaterial?O.environment:null,z=(E.isMeshStandardMaterial?e:t).get(E.envMap||j),L=z&&z.mapping===Tr?z.image.height:null,tt=v[E.type];E.precision!==null&&(f=a.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const J=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,F=J!==void 0?J.length:0;let $=0;k.morphAttributes.position!==void 0&&($=1),k.morphAttributes.normal!==void 0&&($=2),k.morphAttributes.color!==void 0&&($=3);let H,A,b,G;if(tt){const le=nn[tt];H=le.vertexShader,A=le.fragmentShader}else H=E.vertexShader,A=E.fragmentShader,c.update(E),b=c.getVertexShaderID(E),G=c.getFragmentShaderID(E);const Z=i.getRenderTarget(),et=N.isInstancedMesh===!0,X=N.isBatchedMesh===!0,it=!!E.map,ft=!!E.matcap,U=!!z,Rt=!!E.aoMap,xt=!!E.lightMap,ot=!!E.bumpMap,rt=!!E.normalMap,Kt=!!E.displacementMap,At=!!E.emissiveMap,Gt=!!E.metalnessMap,R=!!E.roughnessMap,w=E.anisotropy>0,Q=E.clearcoat>0,ct=E.dispersion>0,mt=E.iridescence>0,lt=E.sheen>0,Ot=E.transmission>0,gt=w&&!!E.anisotropyMap,It=Q&&!!E.clearcoatMap,Zt=Q&&!!E.clearcoatNormalMap,Tt=Q&&!!E.clearcoatRoughnessMap,Ht=mt&&!!E.iridescenceMap,ne=mt&&!!E.iridescenceThicknessMap,Yt=lt&&!!E.sheenColorMap,zt=lt&&!!E.sheenRoughnessMap,jt=!!E.specularMap,Qt=!!E.specularColorMap,he=!!E.specularIntensityMap,q=Ot&&!!E.transmissionMap,St=Ot&&!!E.thicknessMap,ut=!!E.gradientMap,pt=!!E.alphaMap,Et=E.alphaTest>0,$t=!!E.alphaHash,ie=!!E.extensions;let me=An;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(me=i.toneMapping);const Me={shaderID:tt,shaderType:E.type,shaderName:E.name,vertexShader:H,fragmentShader:A,defines:E.defines,customVertexShaderID:b,customFragmentShaderID:G,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:X,batchingColor:X&&N._colorsTexture!==null,instancing:et,instancingColor:et&&N.instanceColor!==null,instancingMorph:et&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Pn,alphaToCoverage:!!E.alphaToCoverage,map:it,matcap:ft,envMap:U,envMapMode:U&&z.mapping,envMapCubeUVHeight:L,aoMap:Rt,lightMap:xt,bumpMap:ot,normalMap:rt,displacementMap:u&&Kt,emissiveMap:At,normalMapObjectSpace:rt&&E.normalMapType===Ll,normalMapTangentSpace:rt&&E.normalMapType===mo,metalnessMap:Gt,roughnessMap:R,anisotropy:w,anisotropyMap:gt,clearcoat:Q,clearcoatMap:It,clearcoatNormalMap:Zt,clearcoatRoughnessMap:Tt,dispersion:ct,iridescence:mt,iridescenceMap:Ht,iridescenceThicknessMap:ne,sheen:lt,sheenColorMap:Yt,sheenRoughnessMap:zt,specularMap:jt,specularColorMap:Qt,specularIntensityMap:he,transmission:Ot,transmissionMap:q,thicknessMap:St,gradientMap:ut,opaque:E.transparent===!1&&E.blending===pi&&E.alphaToCoverage===!1,alphaMap:pt,alphaTest:Et,alphaHash:$t,combine:E.combine,mapUv:it&&g(E.map.channel),aoMapUv:Rt&&g(E.aoMap.channel),lightMapUv:xt&&g(E.lightMap.channel),bumpMapUv:ot&&g(E.bumpMap.channel),normalMapUv:rt&&g(E.normalMap.channel),displacementMapUv:Kt&&g(E.displacementMap.channel),emissiveMapUv:At&&g(E.emissiveMap.channel),metalnessMapUv:Gt&&g(E.metalnessMap.channel),roughnessMapUv:R&&g(E.roughnessMap.channel),anisotropyMapUv:gt&&g(E.anisotropyMap.channel),clearcoatMapUv:It&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:zt&&g(E.sheenRoughnessMap.channel),specularMapUv:jt&&g(E.specularMap.channel),specularColorMapUv:Qt&&g(E.specularColorMap.channel),specularIntensityMapUv:he&&g(E.specularIntensityMap.channel),transmissionMapUv:q&&g(E.transmissionMap.channel),thicknessMapUv:St&&g(E.thicknessMap.channel),alphaMapUv:pt&&g(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(rt||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(it||pt),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:$,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:it&&E.map.isVideoTexture===!0&&pe.getTransfer(E.map.colorSpace)===ye,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dn,flipSided:E.side===Ve,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ie&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&E.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Me.vertexUv1s=d.has(1),Me.vertexUv2s=d.has(2),Me.vertexUv3s=d.has(3),d.clear(),Me}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const T in E.defines)M.push(T),M.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(_(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),E.push(o.mask)}function x(E){const M=v[E.type];let T;if(M){const O=nn[M];T=ac.clone(O.uniforms)}else T=E.uniforms;return T}function C(E,M){let T;for(let O=0,N=h.length;O<N;O++){const K=h[O];if(K.cacheKey===M){T=K,++T.usedTimes;break}}return T===void 0&&(T=new xf(i,M,E,r),h.push(T)),T}function P(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function I(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:D}}function wf(){let i=new WeakMap;function t(r){let s=i.get(r);return s===void 0&&(s={},i.set(r,s)),s}function e(r){i.delete(r)}function n(r,s,o){i.get(r)[s]=o}function a(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:a}}function Tf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ya(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ka(){const i=[];let t=0;const e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function s(l,u,f,v,g,m){let p=i[t];return p===void 0?(p={id:l.id,object:l,geometry:u,material:f,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=p):(p.id=l.id,p.object=l,p.geometry=u,p.material=f,p.groupOrder=v,p.renderOrder=l.renderOrder,p.z=g,p.group=m),t++,p}function o(l,u,f,v,g,m){const p=s(l,u,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?a.push(p):e.push(p)}function c(l,u,f,v,g,m){const p=s(l,u,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?a.unshift(p):e.unshift(p)}function d(l,u){e.length>1&&e.sort(l||Tf),n.length>1&&n.sort(u||Ya),a.length>1&&a.sort(u||Ya)}function h(){for(let l=t,u=i.length;l<u;l++){const f=i[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:o,unshift:c,finish:h,sort:d}}function Af(){let i=new WeakMap;function t(n,a){const r=i.get(n);let s;return r===void 0?(s=new Ka,i.set(n,[s])):a>=r.length?(s=new Ka,r.push(s)):s=r[a],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function bf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new st,color:new fe};break;case"SpotLight":e={position:new st,direction:new st,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new st,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new st,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new st,halfWidth:new st,halfHeight:new st};break}return i[t.id]=e,e}}}function Rf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cf=0;function Pf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lf(i){const t=new bf,e=Rf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new st);const a=new st,r=new Ae,s=new Ae;function o(d){let h=0,l=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,v=0,g=0,m=0,p=0,_=0,y=0,x=0,C=0,P=0,I=0;d.sort(Pf);for(let E=0,M=d.length;E<M;E++){const T=d[E],O=T.color,N=T.intensity,K=T.distance,k=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*N,l+=O.g*N,u+=O.b*N;else if(T.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(T.sh.coefficients[j],N);I++}else if(T.isDirectionalLight){const j=t.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const z=T.shadow,L=e.get(T);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=T.shadow.matrix,_++}n.directional[f]=j,f++}else if(T.isSpotLight){const j=t.get(T);j.position.setFromMatrixPosition(T.matrixWorld),j.color.copy(O).multiplyScalar(N),j.distance=K,j.coneCos=Math.cos(T.angle),j.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),j.decay=T.decay,n.spot[g]=j;const z=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,z.updateMatrices(T),T.castShadow&&P++),n.spotLightMatrix[g]=z.matrix,T.castShadow){const L=e.get(T);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,n.spotShadow[g]=L,n.spotShadowMap[g]=k,x++}g++}else if(T.isRectAreaLight){const j=t.get(T);j.color.copy(O).multiplyScalar(N),j.halfWidth.set(T.width*.5,0,0),j.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=j,m++}else if(T.isPointLight){const j=t.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity),j.distance=T.distance,j.decay=T.decay,T.castShadow){const z=T.shadow,L=e.get(T);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,L.shadowCameraNear=z.camera.near,L.shadowCameraFar=z.camera.far,n.pointShadow[v]=L,n.pointShadowMap[v]=k,n.pointShadowMatrix[v]=T.shadow.matrix,y++}n.point[v]=j,v++}else if(T.isHemisphereLight){const j=t.get(T);j.skyColor.copy(T.color).multiplyScalar(N),j.groundColor.copy(T.groundColor).multiplyScalar(N),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Vt.LTC_FLOAT_1,n.rectAreaLTC2=Vt.LTC_FLOAT_2):(n.rectAreaLTC1=Vt.LTC_HALF_1,n.rectAreaLTC2=Vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==f||D.pointLength!==v||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==_||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==C||D.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+C-P,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,D.directionalLength=f,D.pointLength=v,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=_,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=C,D.numLightProbes=I,n.version=Cf++)}function c(d,h){let l=0,u=0,f=0,v=0,g=0;const m=h.matrixWorldInverse;for(let p=0,_=d.length;p<_;p++){const y=d[p];if(y.isDirectionalLight){const x=n.directional[l];x.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),l++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),s.identity(),r.copy(y.matrixWorld),r.premultiply(m),s.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),v++}else if(y.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Za(i){const t=new Lf(i),e=[],n=[];function a(h){d.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function s(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:s}}function If(i){let t=new WeakMap;function e(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new Za(i),t.set(a,[o])):r>=s.length?(o=new Za(i),s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Df extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uf extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ff=`uniform sampler2D shadow_pass;
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
}`;function Bf(i,t,e){let n=new js;const a=new ue,r=new ue,s=new Ce,o=new Df({depthPacking:Pl}),c=new Uf,d={},h=e.maxTextureSize,l={[Rn]:Ve,[Ve]:Rn,[dn]:dn},u=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Nf,fragmentShader:Ff}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const v=new qn;v.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ke(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let p=this.type;this.render=function(P,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Tn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=p!==un&&this.type===un,K=p===un&&this.type!==un;for(let k=0,j=P.length;k<j;k++){const z=P[k],L=z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;a.copy(L.mapSize);const tt=L.getFrameExtents();if(a.multiply(tt),r.copy(L.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/tt.x),a.x=r.x*tt.x,L.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/tt.y),a.y=r.y*tt.y,L.mapSize.y=r.y)),L.map===null||N===!0||K===!0){const F=this.type!==un?{minFilter:Ye,magFilter:Ye}:{};L.map!==null&&L.map.dispose(),L.map=new Xn(a.x,a.y,F),L.map.texture.name=z.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const J=L.getViewportCount();for(let F=0;F<J;F++){const $=L.getViewport(F);s.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),O.viewport(s),L.updateMatrices(z,F),n=L.getFrustum(),x(I,D,L.camera,z,this.type)}L.isPointLightShadow!==!0&&this.type===un&&_(L,D),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,T)};function _(P,I){const D=t.update(g);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xn(a.x,a.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,D,u,g,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,D,f,g,null)}function y(P,I,D,E){let M=null;const T=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)M=T;else if(M=D.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const O=M.uuid,N=I.uuid;let K=d[O];K===void 0&&(K={},d[O]=K);let k=K[N];k===void 0&&(k=M.clone(),K[N]=k,I.addEventListener("dispose",C)),M=k}if(M.visible=I.visible,M.wireframe=I.wireframe,E===un?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:l[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=D}return M}function x(P,I,D,E,M){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===un)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const N=t.update(P),K=P.material;if(Array.isArray(K)){const k=N.groups;for(let j=0,z=k.length;j<z;j++){const L=k[j],tt=K[L.materialIndex];if(tt&&tt.visible){const J=y(P,tt,E,M);P.onBeforeShadow(i,P,I,D,N,J,L),i.renderBufferDirect(D,null,N,J,P,L),P.onAfterShadow(i,P,I,D,N,J,L)}}}else if(K.visible){const k=y(P,K,E,M);P.onBeforeShadow(i,P,I,D,N,k,null),i.renderBufferDirect(D,null,N,k,P,null),P.onAfterShadow(i,P,I,D,N,k,null)}}const O=P.children;for(let N=0,K=O.length;N<K;N++)x(O[N],I,D,E,M)}function C(P){P.target.removeEventListener("dispose",C);for(const D in d){const E=d[D],M=P.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Of(i){function t(){let q=!1;const St=new Ce;let ut=null;const pt=new Ce(0,0,0,0);return{setMask:function(Et){ut!==Et&&!q&&(i.colorMask(Et,Et,Et,Et),ut=Et)},setLocked:function(Et){q=Et},setClear:function(Et,$t,ie,me,Me){Me===!0&&(Et*=me,$t*=me,ie*=me),St.set(Et,$t,ie,me),pt.equals(St)===!1&&(i.clearColor(Et,$t,ie,me),pt.copy(St))},reset:function(){q=!1,ut=null,pt.set(-1,0,0,0)}}}function e(){let q=!1,St=null,ut=null,pt=null;return{setTest:function(Et){Et?G(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(Et){St!==Et&&!q&&(i.depthMask(Et),St=Et)},setFunc:function(Et){if(ut!==Et){switch(Et){case dl:i.depthFunc(i.NEVER);break;case fl:i.depthFunc(i.ALWAYS);break;case pl:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case ml:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case gl:i.depthFunc(i.GREATER);break;case _l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Et}},setLocked:function(Et){q=Et},setClear:function(Et){pt!==Et&&(i.clearDepth(Et),pt=Et)},reset:function(){q=!1,St=null,ut=null,pt=null}}}function n(){let q=!1,St=null,ut=null,pt=null,Et=null,$t=null,ie=null,me=null,Me=null;return{setTest:function(le){q||(le?G(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(le){St!==le&&!q&&(i.stencilMask(le),St=le)},setFunc:function(le,ve,at){(ut!==le||pt!==ve||Et!==at)&&(i.stencilFunc(le,ve,at),ut=le,pt=ve,Et=at)},setOp:function(le,ve,at){($t!==le||ie!==ve||me!==at)&&(i.stencilOp(le,ve,at),$t=le,ie=ve,me=at)},setLocked:function(le){q=le},setClear:function(le){Me!==le&&(i.clearStencil(le),Me=le)},reset:function(){q=!1,St=null,ut=null,pt=null,Et=null,$t=null,ie=null,me=null,Me=null}}}const a=new t,r=new e,s=new n,o=new WeakMap,c=new WeakMap;let d={},h={},l=new WeakMap,u=[],f=null,v=!1,g=null,m=null,p=null,_=null,y=null,x=null,C=null,P=new fe(0,0,0),I=0,D=!1,E=null,M=null,T=null,O=null,N=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,j=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=j>=2);let L=null,tt={};const J=i.getParameter(i.SCISSOR_BOX),F=i.getParameter(i.VIEWPORT),$=new Ce().fromArray(J),H=new Ce().fromArray(F);function A(q,St,ut,pt){const Et=new Uint8Array(4),$t=i.createTexture();i.bindTexture(q,$t),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<ut;ie++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(St+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return $t}const b={};b[i.TEXTURE_2D]=A(i.TEXTURE_2D,i.TEXTURE_2D,1),b[i.TEXTURE_CUBE_MAP]=A(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),b[i.TEXTURE_2D_ARRAY]=A(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),b[i.TEXTURE_3D]=A(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),s.setClear(0),G(i.DEPTH_TEST),r.setFunc(yr),ot(!1),rt(ea),G(i.CULL_FACE),Rt(Tn);function G(q){d[q]!==!0&&(i.enable(q),d[q]=!0)}function Z(q){d[q]!==!1&&(i.disable(q),d[q]=!1)}function et(q,St){return h[q]!==St?(i.bindFramebuffer(q,St),h[q]=St,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=St),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=St),!0):!1}function X(q,St){let ut=u,pt=!1;if(q){ut=l.get(St),ut===void 0&&(ut=[],l.set(St,ut));const Et=q.textures;if(ut.length!==Et.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,ie=Et.length;$t<ie;$t++)ut[$t]=i.COLOR_ATTACHMENT0+$t;ut.length=Et.length,pt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,pt=!0);pt&&i.drawBuffers(ut)}function it(q){return f!==q?(i.useProgram(q),f=q,!0):!1}const ft={[zn]:i.FUNC_ADD,[Zo]:i.FUNC_SUBTRACT,[$o]:i.FUNC_REVERSE_SUBTRACT};ft[jo]=i.MIN,ft[Jo]=i.MAX;const U={[Qo]:i.ZERO,[tl]:i.ONE,[el]:i.SRC_COLOR,[as]:i.SRC_ALPHA,[ol]:i.SRC_ALPHA_SATURATE,[sl]:i.DST_COLOR,[il]:i.DST_ALPHA,[nl]:i.ONE_MINUS_SRC_COLOR,[os]:i.ONE_MINUS_SRC_ALPHA,[al]:i.ONE_MINUS_DST_COLOR,[rl]:i.ONE_MINUS_DST_ALPHA,[ll]:i.CONSTANT_COLOR,[cl]:i.ONE_MINUS_CONSTANT_COLOR,[hl]:i.CONSTANT_ALPHA,[ul]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(q,St,ut,pt,Et,$t,ie,me,Me,le){if(q===Tn){v===!0&&(Z(i.BLEND),v=!1);return}if(v===!1&&(G(i.BLEND),v=!0),q!==Ko){if(q!==g||le!==D){if((m!==zn||y!==zn)&&(i.blendEquation(i.FUNC_ADD),m=zn,y=zn),le)switch(q){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFunc(i.ONE,i.ONE);break;case ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ra:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ra:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}p=null,_=null,x=null,C=null,P.set(0,0,0),I=0,g=q,D=le}return}Et=Et||St,$t=$t||ut,ie=ie||pt,(St!==m||Et!==y)&&(i.blendEquationSeparate(ft[St],ft[Et]),m=St,y=Et),(ut!==p||pt!==_||$t!==x||ie!==C)&&(i.blendFuncSeparate(U[ut],U[pt],U[$t],U[ie]),p=ut,_=pt,x=$t,C=ie),(me.equals(P)===!1||Me!==I)&&(i.blendColor(me.r,me.g,me.b,Me),P.copy(me),I=Me),g=q,D=!1}function xt(q,St){q.side===dn?Z(i.CULL_FACE):G(i.CULL_FACE);let ut=q.side===Ve;St&&(ut=!ut),ot(ut),q.blending===pi&&q.transparent===!1?Rt(Tn):Rt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),r.setFunc(q.depthFunc),r.setTest(q.depthTest),r.setMask(q.depthWrite),a.setMask(q.colorWrite);const pt=q.stencilWrite;s.setTest(pt),pt&&(s.setMask(q.stencilWriteMask),s.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),s.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),At(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(q){E!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),E=q)}function rt(q){q!==Xo?(G(i.CULL_FACE),q!==M&&(q===ea?i.cullFace(i.BACK):q===qo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),M=q}function Kt(q){q!==T&&(k&&i.lineWidth(q),T=q)}function At(q,St,ut){q?(G(i.POLYGON_OFFSET_FILL),(O!==St||N!==ut)&&(i.polygonOffset(St,ut),O=St,N=ut)):Z(i.POLYGON_OFFSET_FILL)}function Gt(q){q?G(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function R(q){q===void 0&&(q=i.TEXTURE0+K-1),L!==q&&(i.activeTexture(q),L=q)}function w(q,St,ut){ut===void 0&&(L===null?ut=i.TEXTURE0+K-1:ut=L);let pt=tt[ut];pt===void 0&&(pt={type:void 0,texture:void 0},tt[ut]=pt),(pt.type!==q||pt.texture!==St)&&(L!==ut&&(i.activeTexture(ut),L=ut),i.bindTexture(q,St||b[q]),pt.type=q,pt.texture=St)}function Q(){const q=tt[L];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function It(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Tt(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ne(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(q){$.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),$.copy(q))}function zt(q){H.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),H.copy(q))}function jt(q,St){let ut=c.get(St);ut===void 0&&(ut=new WeakMap,c.set(St,ut));let pt=ut.get(q);pt===void 0&&(pt=i.getUniformBlockIndex(St,q.name),ut.set(q,pt))}function Qt(q,St){const pt=c.get(St).get(q);o.get(St)!==pt&&(i.uniformBlockBinding(St,pt,q.__bindingPointIndex),o.set(St,pt))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},L=null,tt={},h={},l=new WeakMap,u=[],f=null,v=!1,g=null,m=null,p=null,_=null,y=null,x=null,C=null,P=new fe(0,0,0),I=0,D=!1,E=null,M=null,T=null,O=null,N=null,$.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),s.reset()}return{buffers:{color:a,depth:r,stencil:s},enable:G,disable:Z,bindFramebuffer:et,drawBuffers:X,useProgram:it,setBlending:Rt,setMaterial:xt,setFlipSided:ot,setCullFace:rt,setLineWidth:Kt,setPolygonOffset:At,setScissorTest:Gt,activeTexture:R,bindTexture:w,unbindTexture:Q,compressedTexImage2D:ct,compressedTexImage3D:mt,texImage2D:Ht,texImage3D:ne,updateUBOMapping:jt,uniformBlockBinding:Qt,texStorage2D:Zt,texStorage3D:Tt,texSubImage2D:lt,texSubImage3D:Ot,compressedTexSubImage2D:gt,compressedTexSubImage3D:It,scissor:Yt,viewport:zt,reset:he}}function $a(i,t,e,n){const a=zf(n);switch(e){case oo:return i*t;case co:return i*t;case ho:return i*t*2;case uo:return i*t/a.components*a.byteLength;case Xs:return i*t/a.components*a.byteLength;case fo:return i*t*2/a.components*a.byteLength;case qs:return i*t*2/a.components*a.byteLength;case lo:return i*t*3/a.components*a.byteLength;case tn:return i*t*4/a.components*a.byteLength;case Ys:return i*t*4/a.components*a.byteLength;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fs:case ms:return Math.max(i,16)*Math.max(t,8)/4;case ds:case ps:return Math.max(i,8)*Math.max(t,8)/2;case vs:case gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ys:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ms:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ss:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Es:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ws:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ts:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case As:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rs:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Cs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ps:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ls:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Is:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _r:case Ds:case Us:return Math.ceil(i/4)*Math.ceil(t/4)*16;case po:case Ns:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fs:case Bs:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zf(i){switch(i){case mn:case ro:return{byteLength:1,components:1};case Ii:case so:case Ni:return{byteLength:2,components:1};case Ws:case ks:return{byteLength:2,components:4};case kn:case Gs:case fn:return{byteLength:4,components:1};case ao:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vf(i,t,e,n,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ue,h=new WeakMap;let l;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,w){return f?new OffscreenCanvas(R,w):Di("canvas")}function g(R,w,Q){let ct=1;const mt=Gt(R);if((mt.width>Q||mt.height>Q)&&(ct=Q/Math.max(mt.width,mt.height)),ct<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const lt=Math.floor(ct*mt.width),Ot=Math.floor(ct*mt.height);l===void 0&&(l=v(lt,Ot));const gt=w?v(lt,Ot):l;return gt.width=lt,gt.height=Ot,gt.getContext("2d").drawImage(R,0,0,lt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+lt+"x"+Ot+")."),gt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Ye&&R.minFilter!==Qe}function p(R){i.generateMipmap(R)}function _(R,w,Q,ct,mt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let lt=w;if(w===i.RED&&(Q===i.FLOAT&&(lt=i.R32F),Q===i.HALF_FLOAT&&(lt=i.R16F),Q===i.UNSIGNED_BYTE&&(lt=i.R8)),w===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(lt=i.R8UI),Q===i.UNSIGNED_SHORT&&(lt=i.R16UI),Q===i.UNSIGNED_INT&&(lt=i.R32UI),Q===i.BYTE&&(lt=i.R8I),Q===i.SHORT&&(lt=i.R16I),Q===i.INT&&(lt=i.R32I)),w===i.RG&&(Q===i.FLOAT&&(lt=i.RG32F),Q===i.HALF_FLOAT&&(lt=i.RG16F),Q===i.UNSIGNED_BYTE&&(lt=i.RG8)),w===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(lt=i.RG8UI),Q===i.UNSIGNED_SHORT&&(lt=i.RG16UI),Q===i.UNSIGNED_INT&&(lt=i.RG32UI),Q===i.BYTE&&(lt=i.RG8I),Q===i.SHORT&&(lt=i.RG16I),Q===i.INT&&(lt=i.RG32I)),w===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),w===i.RGBA){const Ot=mt?Mr:pe.getTransfer(ct);Q===i.FLOAT&&(lt=i.RGBA32F),Q===i.HALF_FLOAT&&(lt=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(lt=Ot===ye?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function y(R,w){let Q;return R?w===null||w===kn||w===xi?Q=i.DEPTH24_STENCIL8:w===fn?Q=i.DEPTH32F_STENCIL8:w===Ii&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===kn||w===xi?Q=i.DEPTH_COMPONENT24:w===fn?Q=i.DEPTH_COMPONENT32F:w===Ii&&(Q=i.DEPTH_COMPONENT16),Q}function x(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ye&&R.minFilter!==Qe?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){const w=R.target;w.removeEventListener("dispose",C),I(w),w.isVideoTexture&&h.delete(w)}function P(R){const w=R.target;w.removeEventListener("dispose",P),E(w)}function I(R){const w=n.get(R);if(w.__webglInit===void 0)return;const Q=R.source,ct=u.get(Q);if(ct){const mt=ct[w.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&D(R),Object.keys(ct).length===0&&u.delete(Q)}n.remove(R)}function D(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const Q=R.source,ct=u.get(Q);delete ct[w.__cacheKey],s.memory.textures--}function E(R){const w=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(w.__webglFramebuffer[ct]))for(let mt=0;mt<w.__webglFramebuffer[ct].length;mt++)i.deleteFramebuffer(w.__webglFramebuffer[ct][mt]);else i.deleteFramebuffer(w.__webglFramebuffer[ct]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ct])}else{if(Array.isArray(w.__webglFramebuffer))for(let ct=0;ct<w.__webglFramebuffer.length;ct++)i.deleteFramebuffer(w.__webglFramebuffer[ct]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ct=0;ct<w.__webglColorRenderbuffer.length;ct++)w.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ct]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=R.textures;for(let ct=0,mt=Q.length;ct<mt;ct++){const lt=n.get(Q[ct]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),s.memory.textures--),n.remove(Q[ct])}n.remove(R)}let M=0;function T(){M=0}function O(){const R=M;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),M+=1,R}function N(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function K(R,w){const Q=n.get(R);if(R.isVideoTexture&&Kt(R),R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){const ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(Q,R,w);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+w)}function k(R,w){const Q=n.get(R);if(R.version>0&&Q.__version!==R.version){H(Q,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+w)}function j(R,w){const Q=n.get(R);if(R.version>0&&Q.__version!==R.version){H(Q,R,w);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+w)}function z(R,w){const Q=n.get(R);if(R.version>0&&Q.__version!==R.version){A(Q,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+w)}const L={[hs]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[us]:i.MIRRORED_REPEAT},tt={[Ye]:i.NEAREST,[Rl]:i.NEAREST_MIPMAP_NEAREST,[Wi]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Lr]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},J={[Il]:i.NEVER,[Ol]:i.ALWAYS,[Dl]:i.LESS,[vo]:i.LEQUAL,[Ul]:i.EQUAL,[Bl]:i.GEQUAL,[Nl]:i.GREATER,[Fl]:i.NOTEQUAL};function F(R,w){if(w.type===fn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Qe||w.magFilter===Lr||w.magFilter===Wi||w.magFilter===Gn||w.minFilter===Qe||w.minFilter===Lr||w.minFilter===Wi||w.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,L[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,L[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,L[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,J[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ye||w.minFilter!==Wi&&w.minFilter!==Gn||w.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function $(R,w){let Q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",C));const ct=w.source;let mt=u.get(ct);mt===void 0&&(mt={},u.set(ct,mt));const lt=N(w);if(lt!==R.__cacheKey){mt[lt]===void 0&&(mt[lt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),mt[lt].usedTimes++;const Ot=mt[R.__cacheKey];Ot!==void 0&&(mt[R.__cacheKey].usedTimes--,Ot.usedTimes===0&&D(w)),R.__cacheKey=lt,R.__webglTexture=mt[lt].texture}return Q}function H(R,w,Q){let ct=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ct=i.TEXTURE_3D);const mt=$(R,w),lt=w.source;e.bindTexture(ct,R.__webglTexture,i.TEXTURE0+Q);const Ot=n.get(lt);if(lt.version!==Ot.__version||mt===!0){e.activeTexture(i.TEXTURE0+Q);const gt=pe.getPrimaries(pe.workingColorSpace),It=w.colorSpace===En?null:pe.getPrimaries(w.colorSpace),Zt=w.colorSpace===En||gt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Tt=g(w.image,!1,a.maxTextureSize);Tt=At(w,Tt);const Ht=r.convert(w.format,w.colorSpace),ne=r.convert(w.type);let Yt=_(w.internalFormat,Ht,ne,w.colorSpace,w.isVideoTexture);F(ct,w);let zt;const jt=w.mipmaps,Qt=w.isVideoTexture!==!0,he=Ot.__version===void 0||mt===!0,q=lt.dataReady,St=x(w,Tt);if(w.isDepthTexture)Yt=y(w.format===yi,w.type),he&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Yt,Tt.width,Tt.height):e.texImage2D(i.TEXTURE_2D,0,Yt,Tt.width,Tt.height,0,Ht,ne,null));else if(w.isDataTexture)if(jt.length>0){Qt&&he&&e.texStorage2D(i.TEXTURE_2D,St,Yt,jt[0].width,jt[0].height);for(let ut=0,pt=jt.length;ut<pt;ut++)zt=jt[ut],Qt?q&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,zt.width,zt.height,Ht,ne,zt.data):e.texImage2D(i.TEXTURE_2D,ut,Yt,zt.width,zt.height,0,Ht,ne,zt.data);w.generateMipmaps=!1}else Qt?(he&&e.texStorage2D(i.TEXTURE_2D,St,Yt,Tt.width,Tt.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Ht,ne,Tt.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,Tt.width,Tt.height,0,Ht,ne,Tt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Qt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Yt,jt[0].width,jt[0].height,Tt.depth);for(let ut=0,pt=jt.length;ut<pt;ut++)if(zt=jt[ut],w.format!==tn)if(Ht!==null)if(Qt){if(q)if(w.layerUpdates.size>0){const Et=$a(zt.width,zt.height,w.format,w.type);for(const $t of w.layerUpdates){const ie=zt.data.subarray($t*Et/zt.data.BYTES_PER_ELEMENT,($t+1)*Et/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,$t,zt.width,zt.height,1,Ht,ie,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,zt.width,zt.height,Tt.depth,Ht,zt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Yt,zt.width,zt.height,Tt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,zt.width,zt.height,Tt.depth,Ht,ne,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Yt,zt.width,zt.height,Tt.depth,0,Ht,ne,zt.data)}else{Qt&&he&&e.texStorage2D(i.TEXTURE_2D,St,Yt,jt[0].width,jt[0].height);for(let ut=0,pt=jt.length;ut<pt;ut++)zt=jt[ut],w.format!==tn?Ht!==null?Qt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,zt.width,zt.height,Ht,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Yt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?q&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,zt.width,zt.height,Ht,ne,zt.data):e.texImage2D(i.TEXTURE_2D,ut,Yt,zt.width,zt.height,0,Ht,ne,zt.data)}else if(w.isDataArrayTexture)if(Qt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Yt,Tt.width,Tt.height,Tt.depth),q)if(w.layerUpdates.size>0){const ut=$a(Tt.width,Tt.height,w.format,w.type);for(const pt of w.layerUpdates){const Et=Tt.data.subarray(pt*ut/Tt.data.BYTES_PER_ELEMENT,(pt+1)*ut/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,Tt.width,Tt.height,1,Ht,ne,Et)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ht,ne,Tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,Tt.width,Tt.height,Tt.depth,0,Ht,ne,Tt.data);else if(w.isData3DTexture)Qt?(he&&e.texStorage3D(i.TEXTURE_3D,St,Yt,Tt.width,Tt.height,Tt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ht,ne,Tt.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,Tt.width,Tt.height,Tt.depth,0,Ht,ne,Tt.data);else if(w.isFramebufferTexture){if(he)if(Qt)e.texStorage2D(i.TEXTURE_2D,St,Yt,Tt.width,Tt.height);else{let ut=Tt.width,pt=Tt.height;for(let Et=0;Et<St;Et++)e.texImage2D(i.TEXTURE_2D,Et,Yt,ut,pt,0,Ht,ne,null),ut>>=1,pt>>=1}}else if(jt.length>0){if(Qt&&he){const ut=Gt(jt[0]);e.texStorage2D(i.TEXTURE_2D,St,Yt,ut.width,ut.height)}for(let ut=0,pt=jt.length;ut<pt;ut++)zt=jt[ut],Qt?q&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ht,ne,zt):e.texImage2D(i.TEXTURE_2D,ut,Yt,Ht,ne,zt);w.generateMipmaps=!1}else if(Qt){if(he){const ut=Gt(Tt);e.texStorage2D(i.TEXTURE_2D,St,Yt,ut.width,ut.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ht,ne,Tt)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Ht,ne,Tt);m(w)&&p(ct),Ot.__version=lt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function A(R,w,Q){if(w.image.length!==6)return;const ct=$(R,w),mt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Q);const lt=n.get(mt);if(mt.version!==lt.__version||ct===!0){e.activeTexture(i.TEXTURE0+Q);const Ot=pe.getPrimaries(pe.workingColorSpace),gt=w.colorSpace===En?null:pe.getPrimaries(w.colorSpace),It=w.colorSpace===En||Ot===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Zt=w.isCompressedTexture||w.image[0].isCompressedTexture,Tt=w.image[0]&&w.image[0].isDataTexture,Ht=[];for(let pt=0;pt<6;pt++)!Zt&&!Tt?Ht[pt]=g(w.image[pt],!0,a.maxCubemapSize):Ht[pt]=Tt?w.image[pt].image:w.image[pt],Ht[pt]=At(w,Ht[pt]);const ne=Ht[0],Yt=r.convert(w.format,w.colorSpace),zt=r.convert(w.type),jt=_(w.internalFormat,Yt,zt,w.colorSpace),Qt=w.isVideoTexture!==!0,he=lt.__version===void 0||ct===!0,q=mt.dataReady;let St=x(w,ne);F(i.TEXTURE_CUBE_MAP,w);let ut;if(Zt){Qt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,jt,ne.width,ne.height);for(let pt=0;pt<6;pt++){ut=Ht[pt].mipmaps;for(let Et=0;Et<ut.length;Et++){const $t=ut[Et];w.format!==tn?Yt!==null?Qt?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,0,0,$t.width,$t.height,Yt,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,jt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,0,0,$t.width,$t.height,Yt,zt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,jt,$t.width,$t.height,0,Yt,zt,$t.data)}}}else{if(ut=w.mipmaps,Qt&&he){ut.length>0&&St++;const pt=Gt(Ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,jt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Tt){Qt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ht[pt].width,Ht[pt].height,Yt,zt,Ht[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,jt,Ht[pt].width,Ht[pt].height,0,Yt,zt,Ht[pt].data);for(let Et=0;Et<ut.length;Et++){const ie=ut[Et].image[pt].image;Qt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,0,0,ie.width,ie.height,Yt,zt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,jt,ie.width,ie.height,0,Yt,zt,ie.data)}}else{Qt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Yt,zt,Ht[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,jt,Yt,zt,Ht[pt]);for(let Et=0;Et<ut.length;Et++){const $t=ut[Et];Qt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,0,0,Yt,zt,$t.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,jt,Yt,zt,$t.image[pt])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),lt.__version=mt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function b(R,w,Q,ct,mt,lt){const Ot=r.convert(Q.format,Q.colorSpace),gt=r.convert(Q.type),It=_(Q.internalFormat,Ot,gt,Q.colorSpace);if(!n.get(w).__hasExternalTextures){const Tt=Math.max(1,w.width>>lt),Ht=Math.max(1,w.height>>lt);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,lt,It,Tt,Ht,w.depth,0,Ot,gt,null):e.texImage2D(mt,lt,It,Tt,Ht,0,Ot,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),rt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,mt,n.get(Q).__webglTexture,0,ot(w)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,mt,n.get(Q).__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function G(R,w,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const ct=w.depthTexture,mt=ct&&ct.isDepthTexture?ct.type:null,lt=y(w.stencilBuffer,mt),Ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=ot(w);rt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,lt,w.width,w.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,lt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,lt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,R)}else{const ct=w.textures;for(let mt=0;mt<ct.length;mt++){const lt=ct[mt],Ot=r.convert(lt.format,lt.colorSpace),gt=r.convert(lt.type),It=_(lt.internalFormat,Ot,gt,lt.colorSpace),Zt=ot(w);Q&&rt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,It,w.width,w.height):rt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,It,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,It,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);const ct=n.get(w.depthTexture).__webglTexture,mt=ot(w);if(w.depthTexture.format===mi)rt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(w.depthTexture.format===yi)rt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function et(R){const w=n.get(R),Q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Z(w.__webglFramebuffer,R)}else if(Q){w.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ct]),w.__webglDepthbuffer[ct]=i.createRenderbuffer(),G(w.__webglDepthbuffer[ct],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),G(w.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(R,w,Q){const ct=n.get(R);w!==void 0&&b(ct.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&et(R)}function it(R){const w=R.texture,Q=n.get(R),ct=n.get(w);R.addEventListener("dispose",P);const mt=R.textures,lt=R.isWebGLCubeRenderTarget===!0,Ot=mt.length>1;if(Ot||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=w.version,s.memory.textures++),lt){Q.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[gt]=[];for(let It=0;It<w.mipmaps.length;It++)Q.__webglFramebuffer[gt][It]=i.createFramebuffer()}else Q.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)Q.__webglFramebuffer[gt]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let gt=0,It=mt.length;gt<It;gt++){const Zt=n.get(mt[gt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),s.memory.textures++)}if(R.samples>0&&rt(R)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let gt=0;gt<mt.length;gt++){const It=mt[gt];Q.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[gt]);const Zt=r.convert(It.format,It.colorSpace),Tt=r.convert(It.type),Ht=_(It.internalFormat,Zt,Tt,It.colorSpace,R.isXRRenderTarget===!0),ne=ot(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Ht,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),G(Q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),F(i.TEXTURE_CUBE_MAP,w);for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0)for(let It=0;It<w.mipmaps.length;It++)b(Q.__webglFramebuffer[gt][It],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It);else b(Q.__webglFramebuffer[gt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let gt=0,It=mt.length;gt<It;gt++){const Zt=mt[gt],Tt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,Tt.__webglTexture),F(i.TEXTURE_2D,Zt),b(Q.__webglFramebuffer,R,Zt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),m(Zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(gt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,ct.__webglTexture),F(gt,w),w.mipmaps&&w.mipmaps.length>0)for(let It=0;It<w.mipmaps.length;It++)b(Q.__webglFramebuffer[It],R,w,i.COLOR_ATTACHMENT0,gt,It);else b(Q.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,gt,0);m(w)&&p(gt),e.unbindTexture()}R.depthBuffer&&et(R)}function ft(R){const w=R.textures;for(let Q=0,ct=w.length;Q<ct;Q++){const mt=w[Q];if(m(mt)){const lt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ot=n.get(mt).__webglTexture;e.bindTexture(lt,Ot),p(lt),e.unbindTexture()}}}const U=[],Rt=[];function xt(R){if(R.samples>0){if(rt(R)===!1){const w=R.textures,Q=R.width,ct=R.height;let mt=i.COLOR_BUFFER_BIT;const lt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(R),gt=w.length>1;if(gt)for(let It=0;It<w.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let It=0;It<w.length;It++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[It]);const Zt=n.get(w[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,Q,ct,0,0,Q,ct,mt,i.NEAREST),c===!0&&(U.length=0,Rt.length=0,U.push(i.COLOR_ATTACHMENT0+It),R.depthBuffer&&R.resolveDepthBuffer===!1&&(U.push(lt),Rt.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let It=0;It<w.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[It]);const Zt=n.get(w[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ot(R){return Math.min(a.maxSamples,R.samples)}function rt(R){const w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Kt(R){const w=s.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function At(R,w){const Q=R.colorSpace,ct=R.format,mt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Q!==Pn&&Q!==En&&(pe.getTransfer(Q)===ye?(ct!==tn||mt!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function Gt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(d.width=R.naturalWidth||R.width,d.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(d.width=R.displayWidth,d.height=R.displayHeight):(d.width=R.width,d.height=R.height),d}this.allocateTextureUnit=O,this.resetTextureUnits=T,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=X,this.setupRenderTarget=it,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=b,this.useMultisampledRTT=rt}function Hf(i,t){function e(n,a=En){let r;const s=pe.getTransfer(a);if(n===mn)return i.UNSIGNED_BYTE;if(n===Ws)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ks)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ao)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ro)return i.BYTE;if(n===so)return i.SHORT;if(n===Ii)return i.UNSIGNED_SHORT;if(n===Gs)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Ni)return i.HALF_FLOAT;if(n===oo)return i.ALPHA;if(n===lo)return i.RGB;if(n===tn)return i.RGBA;if(n===co)return i.LUMINANCE;if(n===ho)return i.LUMINANCE_ALPHA;if(n===mi)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===uo)return i.RED;if(n===Xs)return i.RED_INTEGER;if(n===fo)return i.RG;if(n===qs)return i.RG_INTEGER;if(n===Ys)return i.RGBA_INTEGER;if(n===pr||n===mr||n===vr||n===gr)if(s===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ds||n===fs||n===ps||n===ms)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ds)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fs)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ps)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ms)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vs||n===gs||n===_s)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vs||n===gs)return s===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_s)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xs||n===ys||n===Ms||n===Ss||n===Es||n===ws||n===Ts||n===As||n===bs||n===Rs||n===Cs||n===Ps||n===Ls||n===Is)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xs)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ys)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ms)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ss)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Es)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ws)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ts)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===As)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bs)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rs)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cs)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ps)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ls)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Is)return s===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===Ds||n===Us)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_r)return s===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ds)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Us)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===po||n===Ns||n===Fs||n===Bs)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ns)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bs)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gf extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ur extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wf={type:"move"};class rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){s=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(d,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=d.joints["index-finger-tip"],l=d.joints["thumb-tip"],u=h.position.distanceTo(l.position),f=.02,v=.005;d.inputState.pinching&&u>f+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&u<=f-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wf)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),d!==null&&(d.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ur;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const kf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xf=`
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

}`;class qf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const a=new Be,r=t.properties.get(a);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:kf,fragmentShader:Xf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yf extends Si{constructor(t,e){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,d=null,h=null,l=null,u=null,f=null,v=null;const g=new qf,m=e.getContextAttributes();let p=null,_=null;const y=[],x=[],C=new ue;let P=null;const I=new Xe;I.layers.enable(1),I.viewport=new Ce;const D=new Xe;D.layers.enable(2),D.viewport=new Ce;const E=[I,D],M=new Gf;M.layers.enable(1),M.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let b=y[A];return b===void 0&&(b=new rs,y[A]=b),b.getTargetRaySpace()},this.getControllerGrip=function(A){let b=y[A];return b===void 0&&(b=new rs,y[A]=b),b.getGripSpace()},this.getHand=function(A){let b=y[A];return b===void 0&&(b=new rs,y[A]=b),b.getHandSpace()};function N(A){const b=x.indexOf(A.inputSource);if(b===-1)return;const G=y[b];G!==void 0&&(G.update(A.inputSource,A.frame,d||s),G.dispatchEvent({type:A.type,data:A.inputSource}))}function K(){a.removeEventListener("select",N),a.removeEventListener("selectstart",N),a.removeEventListener("selectend",N),a.removeEventListener("squeeze",N),a.removeEventListener("squeezestart",N),a.removeEventListener("squeezeend",N),a.removeEventListener("end",K),a.removeEventListener("inputsourceschange",k);for(let A=0;A<y.length;A++){const b=x[A];b!==null&&(x[A]=null,y[A].disconnect(b))}T=null,O=null,g.reset(),t.setRenderTarget(p),f=null,u=null,l=null,a=null,_=null,H.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){r=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){o=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||s},this.setReferenceSpace=function(A){d=A},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(A){if(a=A,a!==null){if(p=t.getRenderTarget(),a.addEventListener("select",N),a.addEventListener("selectstart",N),a.addEventListener("selectend",N),a.addEventListener("squeeze",N),a.addEventListener("squeezestart",N),a.addEventListener("squeezeend",N),a.addEventListener("end",K),a.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(C),a.renderState.layers===void 0){const b={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(a,e,b),a.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Xn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let b=null,G=null,Z=null;m.depth&&(Z=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,b=m.stencil?yi:mi,G=m.stencil?xi:kn);const et={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};l=new XRWebGLBinding(a,e),u=l.createProjectionLayer(et),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Xn(u.textureWidth,u.textureHeight,{format:tn,type:mn,depthTexture:new Po(u.textureWidth,u.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,b),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),d=null,s=await a.requestReferenceSpace(o),H.setContext(a),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(A){for(let b=0;b<A.removed.length;b++){const G=A.removed[b],Z=x.indexOf(G);Z>=0&&(x[Z]=null,y[Z].disconnect(G))}for(let b=0;b<A.added.length;b++){const G=A.added[b];let Z=x.indexOf(G);if(Z===-1){for(let X=0;X<y.length;X++)if(X>=x.length){x.push(G),Z=X;break}else if(x[X]===null){x[X]=G,Z=X;break}if(Z===-1)break}const et=y[Z];et&&et.connect(G)}}const j=new st,z=new st;function L(A,b,G){j.setFromMatrixPosition(b.matrixWorld),z.setFromMatrixPosition(G.matrixWorld);const Z=j.distanceTo(z),et=b.projectionMatrix.elements,X=G.projectionMatrix.elements,it=et[14]/(et[10]-1),ft=et[14]/(et[10]+1),U=(et[9]+1)/et[5],Rt=(et[9]-1)/et[5],xt=(et[8]-1)/et[0],ot=(X[8]+1)/X[0],rt=it*xt,Kt=it*ot,At=Z/(-xt+ot),Gt=At*-xt;b.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(Gt),A.translateZ(At),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const R=it+At,w=ft+At,Q=rt-Gt,ct=Kt+(Z-Gt),mt=U*ft/w*R,lt=Rt*ft/w*R;A.projectionMatrix.makePerspective(Q,ct,mt,lt,R,w),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function tt(A,b){b===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(b.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(a===null)return;g.texture!==null&&(A.near=g.depthNear,A.far=g.depthFar),M.near=D.near=I.near=A.near,M.far=D.far=I.far=A.far,(T!==M.near||O!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,O=M.far,I.near=T,I.far=O,D.near=T,D.far=O,I.updateProjectionMatrix(),D.updateProjectionMatrix(),A.updateProjectionMatrix());const b=A.parent,G=M.cameras;tt(M,b);for(let Z=0;Z<G.length;Z++)tt(G[Z],b);G.length===2?L(M,I,D):M.projectionMatrix.copy(I.projectionMatrix),J(A,M,b)};function J(A,b,G){G===null?A.matrix.copy(b.matrixWorld):(A.matrix.copy(G.matrixWorld),A.matrix.invert(),A.matrix.multiply(b.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(b.projectionMatrix),A.projectionMatrixInverse.copy(b.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=Os*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(A){c=A,u!==null&&(u.fixedFoveation=A),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=A)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let F=null;function $(A,b){if(h=b.getViewerPose(d||s),v=b,h!==null){const G=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Z=!1;G.length!==M.cameras.length&&(M.cameras.length=0,Z=!0);for(let X=0;X<G.length;X++){const it=G[X];let ft=null;if(f!==null)ft=f.getViewport(it);else{const Rt=l.getViewSubImage(u,it);ft=Rt.viewport,X===0&&(t.setRenderTargetTextures(_,Rt.colorTexture,u.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(_))}let U=E[X];U===void 0&&(U=new Xe,U.layers.enable(X),U.viewport=new Ce,E[X]=U),U.matrix.fromArray(it.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(it.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(ft.x,ft.y,ft.width,ft.height),X===0&&(M.matrix.copy(U.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Z===!0&&M.cameras.push(U)}const et=a.enabledFeatures;if(et&&et.includes("depth-sensing")){const X=l.getDepthInformation(G[0]);X&&X.isValid&&X.texture&&g.init(t,X,a.renderState)}}for(let G=0;G<y.length;G++){const Z=x[G],et=y[G];Z!==null&&et!==void 0&&et.update(Z,b,d||s)}F&&F(A,b),b.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:b}),v=null}const H=new Ro;H.setAnimationLoop($),this.setAnimationLoop=function(A){F=A},this.dispose=function(){}}}const Fn=new vn,Kf=new Ae;function Zf(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,To(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),l(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,y):p.isSpriteMaterial?d(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Fn.copy(x),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(Fn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function $f(i,t,e,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function d(_,y){let x=a[_.id];x===void 0&&(v(_),x=h(_),a[_.id]=x,_.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(_,C);const P=t.render.frame;r[_.id]!==P&&(u(_),r[_.id]=P)}function h(_){const y=l();_.__bindingPointIndex=y;const x=i.createBuffer(),C=_.__size,P=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function l(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const y=a[_.id],x=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,I=x.length;P<I;P++){const D=Array.isArray(x[P])?x[P]:[x[P]];for(let E=0,M=D.length;E<M;E++){const T=D[E];if(f(T,P,E,C)===!0){const O=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let K=0;for(let k=0;k<N.length;k++){const j=N[k],z=g(j);typeof j=="number"||typeof j=="boolean"?(T.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,O+K,T.__data)):j.isMatrix3?(T.__data[0]=j.elements[0],T.__data[1]=j.elements[1],T.__data[2]=j.elements[2],T.__data[3]=0,T.__data[4]=j.elements[3],T.__data[5]=j.elements[4],T.__data[6]=j.elements[5],T.__data[7]=0,T.__data[8]=j.elements[6],T.__data[9]=j.elements[7],T.__data[10]=j.elements[8],T.__data[11]=0):(j.toArray(T.__data,K),K+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,x,C){const P=_.value,I=y+"_"+x;if(C[I]===void 0)return typeof P=="number"||typeof P=="boolean"?C[I]=P:C[I]=P.clone(),!0;{const D=C[I];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return C[I]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function v(_){const y=_.uniforms;let x=0;const C=16;for(let I=0,D=y.length;I<D;I++){const E=Array.isArray(y[I])?y[I]:[y[I]];for(let M=0,T=E.length;M<T;M++){const O=E[M],N=Array.isArray(O.value)?O.value:[O.value];for(let K=0,k=N.length;K<k;K++){const j=N[K],z=g(j),L=x%C;L!==0&&C-L<z.boundary&&(x+=C-L),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=z.storage}}}const P=x%C;return P>0&&(x+=C-P),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),i.deleteBuffer(a[y.id]),delete a[y.id],delete r[y.id]}function p(){for(const _ in a)i.deleteBuffer(a[_]);s=[],a={},r={}}return{bind:c,update:d,dispose:p}}class jf{constructor(t={}){const{canvas:e=Vl(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=s;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=An,this.toneMappingExposure=1;const y=this;let x=!1,C=0,P=0,I=null,D=-1,E=null;const M=new Ce,T=new Ce;let O=null;const N=new fe(0);let K=0,k=e.width,j=e.height,z=1,L=null,tt=null;const J=new Ce(0,0,k,j),F=new Ce(0,0,k,j);let $=!1;const H=new js;let A=!1,b=!1;const G=new Ae,Z=new st,et=new Ce,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function ft(){return I===null?z:1}let U=n;function Rt(S,V){return e.getContext(S,V)}try{const S={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hs}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),U===null){const V="webgl2";if(U=Rt(V,S),U===null)throw Rt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xt,ot,rt,Kt,At,Gt,R,w,Q,ct,mt,lt,Ot,gt,It,Zt,Tt,Ht,ne,Yt,zt,jt,Qt,he;function q(){xt=new id(U),xt.init(),jt=new Hf(U,xt),ot=new ju(U,xt,t,jt),rt=new Of(U),Kt=new ad(U),At=new wf,Gt=new Vf(U,xt,rt,At,ot,jt,Kt),R=new Qu(y),w=new nd(y),Q=new fc(U),Qt=new Zu(U,Q),ct=new rd(U,Q,Kt,Qt),mt=new ld(U,ct,Q,Kt),ne=new od(U,ot,Gt),Zt=new Ju(At),lt=new Ef(y,R,w,xt,ot,Qt,Zt),Ot=new Zf(y,At),gt=new Af,It=new If(xt),Ht=new Ku(y,R,w,rt,mt,u,c),Tt=new Bf(y,mt,ot),he=new $f(U,Kt,ot,rt),Yt=new $u(U,xt,Kt),zt=new sd(U,xt,Kt),Kt.programs=lt.programs,y.capabilities=ot,y.extensions=xt,y.properties=At,y.renderLists=gt,y.shadowMap=Tt,y.state=rt,y.info=Kt}q();const St=new Yf(y,U);this.xr=St,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=xt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=xt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(k,j,!1))},this.getSize=function(S){return S.set(k,j)},this.setSize=function(S,V,Y=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,j=V,e.width=Math.floor(S*z),e.height=Math.floor(V*z),Y===!0&&(e.style.width=S+"px",e.style.height=V+"px"),this.setViewport(0,0,S,V)},this.getDrawingBufferSize=function(S){return S.set(k*z,j*z).floor()},this.setDrawingBufferSize=function(S,V,Y){k=S,j=V,z=Y,e.width=Math.floor(S*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,S,V)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(J)},this.setViewport=function(S,V,Y,B){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,V,Y,B),rt.viewport(M.copy(J).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(F)},this.setScissor=function(S,V,Y,B){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,V,Y,B),rt.scissor(T.copy(F).multiplyScalar(z).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(S){rt.setScissorTest($=S)},this.setOpaqueSort=function(S){L=S},this.setTransparentSort=function(S){tt=S},this.getClearColor=function(S){return S.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(S=!0,V=!0,Y=!0){let B=0;if(S){let W=!1;if(I!==null){const ht=I.texture.format;W=ht===Ys||ht===qs||ht===Xs}if(W){const ht=I.texture.type,bt=ht===mn||ht===kn||ht===Ii||ht===xi||ht===Ws||ht===ks,yt=Ht.getClearColor(),wt=Ht.getClearAlpha(),Mt=yt.r,qt=yt.g,Xt=yt.b;bt?(f[0]=Mt,f[1]=qt,f[2]=Xt,f[3]=wt,U.clearBufferuiv(U.COLOR,0,f)):(v[0]=Mt,v[1]=qt,v[2]=Xt,v[3]=wt,U.clearBufferiv(U.COLOR,0,v))}else B|=U.COLOR_BUFFER_BIT}V&&(B|=U.DEPTH_BUFFER_BIT),Y&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),gt.dispose(),It.dispose(),At.dispose(),R.dispose(),w.dispose(),mt.dispose(),Qt.dispose(),he.dispose(),lt.dispose(),St.dispose(),St.removeEventListener("sessionstart",at),St.removeEventListener("sessionend",dt),vt.stop()};function ut(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=Kt.autoReset,V=Tt.enabled,Y=Tt.autoUpdate,B=Tt.needsUpdate,W=Tt.type;q(),Kt.autoReset=S,Tt.enabled=V,Tt.autoUpdate=Y,Tt.needsUpdate=B,Tt.type=W}function Et(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function $t(S){const V=S.target;V.removeEventListener("dispose",$t),ie(V)}function ie(S){me(S),At.remove(S)}function me(S){const V=At.get(S).programs;V!==void 0&&(V.forEach(function(Y){lt.releaseProgram(Y)}),S.isShaderMaterial&&lt.releaseShaderCache(S))}this.renderBufferDirect=function(S,V,Y,B,W,ht){V===null&&(V=X);const bt=W.isMesh&&W.matrixWorld.determinant()<0,yt=Wt(S,V,Y,B,W);rt.setMaterial(B,bt);let wt=Y.index,Mt=1;if(B.wireframe===!0){if(wt=ct.getWireframeAttribute(Y),wt===void 0)return;Mt=2}const qt=Y.drawRange,Xt=Y.attributes.position;let te=qt.start*Mt,de=(qt.start+qt.count)*Mt;ht!==null&&(te=Math.max(te,ht.start*Mt),de=Math.min(de,(ht.start+ht.count)*Mt)),wt!==null?(te=Math.max(te,0),de=Math.min(de,wt.count)):Xt!=null&&(te=Math.max(te,0),de=Math.min(de,Xt.count));const ce=de-te;if(ce<0||ce===1/0)return;Qt.setup(W,B,yt,Y,wt);let re,se=Yt;if(wt!==null&&(re=Q.get(wt),se=zt,se.setIndex(re)),W.isMesh)B.wireframe===!0?(rt.setLineWidth(B.wireframeLinewidth*ft()),se.setMode(U.LINES)):se.setMode(U.TRIANGLES);else if(W.isLine){let Ft=B.linewidth;Ft===void 0&&(Ft=1),rt.setLineWidth(Ft*ft()),W.isLineSegments?se.setMode(U.LINES):W.isLineLoop?se.setMode(U.LINE_LOOP):se.setMode(U.LINE_STRIP)}else W.isPoints?se.setMode(U.POINTS):W.isSprite&&se.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)se.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ft=W._multiDrawStarts,_e=W._multiDrawCounts,ee=W._multiDrawCount,ge=wt?Q.get(wt).bytesPerElement:1,Se=At.get(B).currentProgram.getUniforms();for(let xe=0;xe<ee;xe++)Se.setValue(U,"_gl_DrawID",xe),se.render(Ft[xe]/ge,_e[xe])}else if(W.isInstancedMesh)se.renderInstances(te,ce,W.count);else if(Y.isInstancedBufferGeometry){const Ft=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,_e=Math.min(Y.instanceCount,Ft);se.renderInstances(te,ce,_e)}else se.render(te,ce)};function Me(S,V,Y){S.transparent===!0&&S.side===dn&&S.forceSinglePass===!1?(S.side=Ve,S.needsUpdate=!0,nt(S,V,Y),S.side=Rn,S.needsUpdate=!0,nt(S,V,Y),S.side=dn):nt(S,V,Y)}this.compile=function(S,V,Y=null){Y===null&&(Y=S),m=It.get(Y),m.init(V),_.push(m),Y.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),S!==Y&&S.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const B=new Set;return S.traverse(function(W){const ht=W.material;if(ht)if(Array.isArray(ht))for(let bt=0;bt<ht.length;bt++){const yt=ht[bt];Me(yt,Y,W),B.add(yt)}else Me(ht,Y,W),B.add(ht)}),_.pop(),m=null,B},this.compileAsync=function(S,V,Y=null){const B=this.compile(S,V,Y);return new Promise(W=>{function ht(){if(B.forEach(function(bt){At.get(bt).currentProgram.isReady()&&B.delete(bt)}),B.size===0){W(S);return}setTimeout(ht,10)}xt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let le=null;function ve(S){le&&le(S)}function at(){vt.stop()}function dt(){vt.start()}const vt=new Ro;vt.setAnimationLoop(ve),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(S){le=S,St.setAnimationLoop(S),S===null?vt.stop():vt.start()},St.addEventListener("sessionstart",at),St.addEventListener("sessionend",dt),this.render=function(S,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(V),V=St.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,V,I),m=It.get(S,_.length),m.init(V),_.push(m),G.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),H.setFromProjectionMatrix(G),b=this.localClippingEnabled,A=Zt.init(this.clippingPlanes,b),g=gt.get(S,p.length),g.init(),p.push(g),St.enabled===!0&&St.isPresenting===!0){const ht=y.xr.getDepthSensingMesh();ht!==null&&_t(ht,V,-1/0,y.sortObjects)}_t(S,V,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(L,tt),it=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,it&&Ht.addToRenderList(g,S),this.info.render.frame++,A===!0&&Zt.beginShadows();const Y=m.state.shadowsArray;Tt.render(Y,S,V),A===!0&&Zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=g.opaque,W=g.transmissive;if(m.setupLights(),V.isArrayCamera){const ht=V.cameras;if(W.length>0)for(let bt=0,yt=ht.length;bt<yt;bt++){const wt=ht[bt];Bt(B,W,S,wt)}it&&Ht.render(S);for(let bt=0,yt=ht.length;bt<yt;bt++){const wt=ht[bt];Jt(g,S,wt,wt.viewport)}}else W.length>0&&Bt(B,W,S,V),it&&Ht.render(S),Jt(g,S,V);I!==null&&(Gt.updateMultisampleRenderTarget(I),Gt.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(y,S,V),Qt.resetDefaultState(),D=-1,E=null,_.pop(),_.length>0?(m=_[_.length-1],A===!0&&Zt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function _t(S,V,Y,B){if(S.visible===!1)return;if(S.layers.test(V.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(V);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){B&&et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(G);const bt=mt.update(S),yt=S.material;yt.visible&&g.push(S,bt,yt,Y,et.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){const bt=mt.update(S),yt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),et.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),et.copy(bt.boundingSphere.center)),et.applyMatrix4(S.matrixWorld).applyMatrix4(G)),Array.isArray(yt)){const wt=bt.groups;for(let Mt=0,qt=wt.length;Mt<qt;Mt++){const Xt=wt[Mt],te=yt[Xt.materialIndex];te&&te.visible&&g.push(S,bt,te,Y,et.z,Xt)}}else yt.visible&&g.push(S,bt,yt,Y,et.z,null)}}const ht=S.children;for(let bt=0,yt=ht.length;bt<yt;bt++)_t(ht[bt],V,Y,B)}function Jt(S,V,Y,B){const W=S.opaque,ht=S.transmissive,bt=S.transparent;m.setupLightsView(Y),A===!0&&Zt.setGlobalState(y.clippingPlanes,Y),B&&rt.viewport(M.copy(B)),W.length>0&&Ct(W,V,Y),ht.length>0&&Ct(ht,V,Y),bt.length>0&&Ct(bt,V,Y),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Bt(S,V,Y,B){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Xn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Ni:mn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const ht=m.state.transmissionRenderTarget[B.id],bt=B.viewport||M;ht.setSize(bt.z,bt.w);const yt=y.getRenderTarget();y.setRenderTarget(ht),y.getClearColor(N),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),it?Ht.render(Y):y.clear();const wt=y.toneMapping;y.toneMapping=An;const Mt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),A===!0&&Zt.setGlobalState(y.clippingPlanes,B),Ct(S,Y,B),Gt.updateMultisampleRenderTarget(ht),Gt.updateRenderTargetMipmap(ht),xt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Xt=0,te=V.length;Xt<te;Xt++){const de=V[Xt],ce=de.object,re=de.geometry,se=de.material,Ft=de.group;if(se.side===dn&&ce.layers.test(B.layers)){const _e=se.side;se.side=Ve,se.needsUpdate=!0,Ut(ce,Y,B,re,se,Ft),se.side=_e,se.needsUpdate=!0,qt=!0}}qt===!0&&(Gt.updateMultisampleRenderTarget(ht),Gt.updateRenderTargetMipmap(ht))}y.setRenderTarget(yt),y.setClearColor(N,K),Mt!==void 0&&(B.viewport=Mt),y.toneMapping=wt}function Ct(S,V,Y){const B=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ht=S.length;W<ht;W++){const bt=S[W],yt=bt.object,wt=bt.geometry,Mt=B===null?bt.material:B,qt=bt.group;yt.layers.test(Y.layers)&&Ut(yt,V,Y,wt,Mt,qt)}}function Ut(S,V,Y,B,W,ht){S.onBeforeRender(y,V,Y,B,W,ht),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.transparent===!0&&W.side===dn&&W.forceSinglePass===!1?(W.side=Ve,W.needsUpdate=!0,y.renderBufferDirect(Y,V,B,W,S,ht),W.side=Rn,W.needsUpdate=!0,y.renderBufferDirect(Y,V,B,W,S,ht),W.side=dn):y.renderBufferDirect(Y,V,B,W,S,ht),S.onAfterRender(y,V,Y,B,W,ht)}function nt(S,V,Y){V.isScene!==!0&&(V=X);const B=At.get(S),W=m.state.lights,ht=m.state.shadowsArray,bt=W.state.version,yt=lt.getParameters(S,W.state,ht,V,Y),wt=lt.getProgramCacheKey(yt);let Mt=B.programs;B.environment=S.isMeshStandardMaterial?V.environment:null,B.fog=V.fog,B.envMap=(S.isMeshStandardMaterial?w:R).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?V.environmentRotation:S.envMapRotation,Mt===void 0&&(S.addEventListener("dispose",$t),Mt=new Map,B.programs=Mt);let qt=Mt.get(wt);if(qt!==void 0){if(B.currentProgram===qt&&B.lightsStateVersion===bt)return Nt(S,yt),qt}else yt.uniforms=lt.getUniforms(S),S.onBeforeCompile(yt,y),qt=lt.acquireProgram(yt,wt),Mt.set(wt,qt),B.uniforms=yt.uniforms;const Xt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Xt.clippingPlanes=Zt.uniform),Nt(S,yt),B.needsLights=Pt(S),B.lightsStateVersion=bt,B.needsLights&&(Xt.ambientLightColor.value=W.state.ambient,Xt.lightProbe.value=W.state.probe,Xt.directionalLights.value=W.state.directional,Xt.directionalLightShadows.value=W.state.directionalShadow,Xt.spotLights.value=W.state.spot,Xt.spotLightShadows.value=W.state.spotShadow,Xt.rectAreaLights.value=W.state.rectArea,Xt.ltc_1.value=W.state.rectAreaLTC1,Xt.ltc_2.value=W.state.rectAreaLTC2,Xt.pointLights.value=W.state.point,Xt.pointLightShadows.value=W.state.pointShadow,Xt.hemisphereLights.value=W.state.hemi,Xt.directionalShadowMap.value=W.state.directionalShadowMap,Xt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Xt.spotShadowMap.value=W.state.spotShadowMap,Xt.spotLightMatrix.value=W.state.spotLightMatrix,Xt.spotLightMap.value=W.state.spotLightMap,Xt.pointShadowMap.value=W.state.pointShadowMap,Xt.pointShadowMatrix.value=W.state.pointShadowMatrix),B.currentProgram=qt,B.uniformsList=null,qt}function Lt(S){if(S.uniformsList===null){const V=S.currentProgram.getUniforms();S.uniformsList=xr.seqWithValue(V.seq,S.uniforms)}return S.uniformsList}function Nt(S,V){const Y=At.get(S);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Wt(S,V,Y,B,W){V.isScene!==!0&&(V=X),Gt.resetTextureUnits();const ht=V.fog,bt=B.isMeshStandardMaterial?V.environment:null,yt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Pn,wt=(B.isMeshStandardMaterial?w:R).get(B.envMap||bt),Mt=B.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qt=!!Y.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Xt=!!Y.morphAttributes.position,te=!!Y.morphAttributes.normal,de=!!Y.morphAttributes.color;let ce=An;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ce=y.toneMapping);const re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=re!==void 0?re.length:0,Ft=At.get(B),_e=m.state.lights;if(A===!0&&(b===!0||S!==E)){const be=S===E&&B.id===D;Zt.setState(B,S,be)}let ee=!1;B.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==_e.state.version||Ft.outputColorSpace!==yt||W.isBatchedMesh&&Ft.batching===!1||!W.isBatchedMesh&&Ft.batching===!0||W.isBatchedMesh&&Ft.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ft.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ft.instancing===!1||!W.isInstancedMesh&&Ft.instancing===!0||W.isSkinnedMesh&&Ft.skinning===!1||!W.isSkinnedMesh&&Ft.skinning===!0||W.isInstancedMesh&&Ft.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ft.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ft.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ft.instancingMorph===!1&&W.morphTexture!==null||Ft.envMap!==wt||B.fog===!0&&Ft.fog!==ht||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Zt.numPlanes||Ft.numIntersection!==Zt.numIntersection)||Ft.vertexAlphas!==Mt||Ft.vertexTangents!==qt||Ft.morphTargets!==Xt||Ft.morphNormals!==te||Ft.morphColors!==de||Ft.toneMapping!==ce||Ft.morphTargetsCount!==se)&&(ee=!0):(ee=!0,Ft.__version=B.version);let ge=Ft.currentProgram;ee===!0&&(ge=nt(B,V,W));let Se=!1,xe=!1,He=!1;const kt=ge.getUniforms(),we=Ft.uniforms;if(rt.useProgram(ge.program)&&(Se=!0,xe=!0,He=!0),B.id!==D&&(D=B.id,xe=!0),Se||E!==S){kt.setValue(U,"projectionMatrix",S.projectionMatrix),kt.setValue(U,"viewMatrix",S.matrixWorldInverse);const be=kt.map.cameraPosition;be!==void 0&&be.setValue(U,Z.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&kt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&kt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,xe=!0,He=!0)}if(W.isSkinnedMesh){kt.setOptional(U,W,"bindMatrix"),kt.setOptional(U,W,"bindMatrixInverse");const be=W.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),kt.setValue(U,"boneTexture",be.boneTexture,Gt))}W.isBatchedMesh&&(kt.setOptional(U,W,"batchingTexture"),kt.setValue(U,"batchingTexture",W._matricesTexture,Gt),kt.setOptional(U,W,"batchingIdTexture"),kt.setValue(U,"batchingIdTexture",W._indirectTexture,Gt),kt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&kt.setValue(U,"batchingColorTexture",W._colorsTexture,Gt));const Te=Y.morphAttributes;if((Te.position!==void 0||Te.normal!==void 0||Te.color!==void 0)&&ne.update(W,Y,ge),(xe||Ft.receiveShadow!==W.receiveShadow)&&(Ft.receiveShadow=W.receiveShadow,kt.setValue(U,"receiveShadow",W.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(we.envMap.value=wt,we.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&V.environment!==null&&(we.envMapIntensity.value=V.environmentIntensity),xe&&(kt.setValue(U,"toneMappingExposure",y.toneMappingExposure),Ft.needsLights&&Dt(we,He),ht&&B.fog===!0&&Ot.refreshFogUniforms(we,ht),Ot.refreshMaterialUniforms(we,B,z,j,m.state.transmissionRenderTarget[S.id]),xr.upload(U,Lt(Ft),we,Gt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xr.upload(U,Lt(Ft),we,Gt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&kt.setValue(U,"center",W.center),kt.setValue(U,"modelViewMatrix",W.modelViewMatrix),kt.setValue(U,"normalMatrix",W.normalMatrix),kt.setValue(U,"modelMatrix",W.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const be=B.uniformsGroups;for(let Ze=0,Pr=be.length;Ze<Pr;Ze++){const Hi=be[Ze];he.update(Hi,ge),he.bind(Hi,ge)}}return ge}function Dt(S,V){S.ambientLightColor.needsUpdate=V,S.lightProbe.needsUpdate=V,S.directionalLights.needsUpdate=V,S.directionalLightShadows.needsUpdate=V,S.pointLights.needsUpdate=V,S.pointLightShadows.needsUpdate=V,S.spotLights.needsUpdate=V,S.spotLightShadows.needsUpdate=V,S.rectAreaLights.needsUpdate=V,S.hemisphereLights.needsUpdate=V}function Pt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,V,Y){At.get(S.texture).__webglTexture=V,At.get(S.depthTexture).__webglTexture=Y;const B=At.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=Y===void 0,B.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,V){const Y=At.get(S);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(S,V=0,Y=0){I=S,C=V,P=Y;let B=!0,W=null,ht=!1,bt=!1;if(S){const wt=At.get(S);wt.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):wt.__webglFramebuffer===void 0?Gt.setupRenderTarget(S):wt.__hasExternalTextures&&Gt.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture);const Mt=S.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(bt=!0);const qt=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qt[V])?W=qt[V][Y]:W=qt[V],ht=!0):S.samples>0&&Gt.useMultisampledRTT(S)===!1?W=At.get(S).__webglMultisampledFramebuffer:Array.isArray(qt)?W=qt[Y]:W=qt,M.copy(S.viewport),T.copy(S.scissor),O=S.scissorTest}else M.copy(J).multiplyScalar(z).floor(),T.copy(F).multiplyScalar(z).floor(),O=$;if(rt.bindFramebuffer(U.FRAMEBUFFER,W)&&B&&rt.drawBuffers(S,W),rt.viewport(M),rt.scissor(T),rt.setScissorTest(O),ht){const wt=At.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,wt.__webglTexture,Y)}else if(bt){const wt=At.get(S.texture),Mt=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,Y||0,Mt)}D=-1},this.readRenderTargetPixels=function(S,V,Y,B,W,ht,bt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(yt=yt[bt]),yt){rt.bindFramebuffer(U.FRAMEBUFFER,yt);try{const wt=S.texture,Mt=wt.format,qt=wt.type;if(!ot.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=S.width-B&&Y>=0&&Y<=S.height-W&&U.readPixels(V,Y,B,W,jt.convert(Mt),jt.convert(qt),ht)}finally{const wt=I!==null?At.get(I).__webglFramebuffer:null;rt.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(S,V,Y,B,W,ht,bt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(yt=yt[bt]),yt){rt.bindFramebuffer(U.FRAMEBUFFER,yt);try{const wt=S.texture,Mt=wt.format,qt=wt.type;if(!ot.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=S.width-B&&Y>=0&&Y<=S.height-W){const Xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Xt),U.bufferData(U.PIXEL_PACK_BUFFER,ht.byteLength,U.STREAM_READ),U.readPixels(V,Y,B,W,jt.convert(Mt),jt.convert(qt),0),U.flush();const te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await Hl(U,te,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ht)}finally{U.deleteBuffer(Xt),U.deleteSync(te)}return ht}}finally{const wt=I!==null?At.get(I).__webglFramebuffer:null;rt.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(S,V=null,Y=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1]);const B=Math.pow(2,-Y),W=Math.floor(S.image.width*B),ht=Math.floor(S.image.height*B),bt=V!==null?V.x:0,yt=V!==null?V.y:0;Gt.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,bt,yt,W,ht),rt.unbindTexture()},this.copyTextureToTexture=function(S,V,Y=null,B=null,W=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],V=arguments[2],W=arguments[3]||0,Y=null);let ht,bt,yt,wt,Mt,qt;Y!==null?(ht=Y.max.x-Y.min.x,bt=Y.max.y-Y.min.y,yt=Y.min.x,wt=Y.min.y):(ht=S.image.width,bt=S.image.height,yt=0,wt=0),B!==null?(Mt=B.x,qt=B.y):(Mt=0,qt=0);const Xt=jt.convert(V.format),te=jt.convert(V.type);Gt.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const de=U.getParameter(U.UNPACK_ROW_LENGTH),ce=U.getParameter(U.UNPACK_IMAGE_HEIGHT),re=U.getParameter(U.UNPACK_SKIP_PIXELS),se=U.getParameter(U.UNPACK_SKIP_ROWS),Ft=U.getParameter(U.UNPACK_SKIP_IMAGES),_e=S.isCompressedTexture?S.mipmaps[W]:S.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yt),U.pixelStorei(U.UNPACK_SKIP_ROWS,wt),S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,Mt,qt,ht,bt,Xt,te,_e.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,Mt,qt,_e.width,_e.height,Xt,_e.data):U.texSubImage2D(U.TEXTURE_2D,W,Mt,qt,ht,bt,Xt,te,_e),U.pixelStorei(U.UNPACK_ROW_LENGTH,de),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce),U.pixelStorei(U.UNPACK_SKIP_PIXELS,re),U.pixelStorei(U.UNPACK_SKIP_ROWS,se),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft),W===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(S,V,Y=null,B=null,W=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,B=arguments[1]||null,S=arguments[2],V=arguments[3],W=arguments[4]||0);let ht,bt,yt,wt,Mt,qt,Xt,te,de;const ce=S.isCompressedTexture?S.mipmaps[W]:S.image;Y!==null?(ht=Y.max.x-Y.min.x,bt=Y.max.y-Y.min.y,yt=Y.max.z-Y.min.z,wt=Y.min.x,Mt=Y.min.y,qt=Y.min.z):(ht=ce.width,bt=ce.height,yt=ce.depth,wt=0,Mt=0,qt=0),B!==null?(Xt=B.x,te=B.y,de=B.z):(Xt=0,te=0,de=0);const re=jt.convert(V.format),se=jt.convert(V.type);let Ft;if(V.isData3DTexture)Gt.setTexture3D(V,0),Ft=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Gt.setTexture2DArray(V,0),Ft=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const _e=U.getParameter(U.UNPACK_ROW_LENGTH),ee=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ge=U.getParameter(U.UNPACK_SKIP_PIXELS),Se=U.getParameter(U.UNPACK_SKIP_ROWS),xe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ce.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qt),S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Ft,W,Xt,te,de,ht,bt,yt,re,se,ce.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Ft,W,Xt,te,de,ht,bt,yt,re,ce.data):U.texSubImage3D(Ft,W,Xt,te,de,ht,bt,yt,re,se,ce),U.pixelStorei(U.UNPACK_ROW_LENGTH,_e),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ge),U.pixelStorei(U.UNPACK_SKIP_ROWS,Se),U.pixelStorei(U.UNPACK_SKIP_IMAGES,xe),W===0&&V.generateMipmaps&&U.generateMipmap(Ft),rt.unbindTexture()},this.initRenderTarget=function(S){At.get(S).__webglFramebuffer===void 0&&Gt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Gt.setTextureCube(S,0):S.isData3DTexture?Gt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Gt.setTexture2DArray(S,0):Gt.setTexture2D(S,0),rt.unbindTexture()},this.resetState=function(){C=0,P=0,I=null,rt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ks?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===Ar?"display-p3":"srgb"}}class Jf extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class No extends zi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ja={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Qf{constructor(t,e,n){const a=this;let r=!1,s=0,o=0,c;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&a.onStart!==void 0&&a.onStart(h,s,o),r=!0},this.itemEnd=function(h){s++,a.onProgress!==void 0&&a.onProgress(h,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return d.push(h,l),this},this.removeHandler=function(h){const l=d.indexOf(h);return l!==-1&&d.splice(l,2),this},this.getHandler=function(h){for(let l=0,u=d.length;l<u;l+=2){const f=d[l],v=d[l+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}}const tp=new Qf;class Qs{constructor(t){this.manager=t!==void 0?t:tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(a,r){n.load(t,a,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";class ep extends Qs{constructor(t){super(t)}load(t,e,n,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=ja.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=Di("img");function c(){h(),ja.add(t,this),e&&e(this),r.manager.itemEnd(t)}function d(l){h(),a&&a(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class np extends Qs{constructor(t){super(t)}load(t,e,n,a){const r=new Be,s=new ep(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,a),r}}class ip extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ss=new Ae,Ja=new st,Qa=new st;class rp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ja.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ja),Qa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qa),e.updateMatrixWorld(),ss.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ss),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ss)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sp extends rp{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ap extends ip{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new sp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hs);const ui=1,fi=10,wi=new Jf,wn=new Xe(75,window.innerWidth/window.innerHeight,.1,1e3),Rr=new jf;Rr.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Rr.domElement);const Cr=new np,Fo=new ap(16777215,1);Fo.position.set(fi/2,10,fi/2);wi.add(Fo);const Ti=new qe.World;Ti.gravity.set(0,-9.82,0);const Bo=new qe.Body({mass:0,shape:new qe.Plane});Bo.quaternion.setFromEuler(-Math.PI/2,0,0);Ti.addBody(Bo);const op=new Vi(10,10),lp=Cr.load("textures/oak.png"),cp=new No({map:lp}),Oo=new Ke(op,cp);Oo.rotation.x=-Math.PI/2;wi.add(Oo);const dr=1,fr=.1,hp=[{geometry:[fi,dr,fr],position:[0,.5,5]},{geometry:[fi,dr,fr],position:[0,.5,-5]},{geometry:[fr,dr,fi],position:[5,.5,0]},{geometry:[fr,dr,fi],position:[-5,.5,0]}];hp.forEach(i=>{const t=new Yn(...i.geometry),e=new No({color:8421504}),n=new Ke(t,e);n.position.copy(new st(...i.position)),wi.add(n);const a=new qe.Vec3(...i.geometry);a.y=20;const r=new qe.Box(a),s=new qe.Body({mass:0,shape:r});s.position.copy(new qe.Vec3(...i.position)),Ti.addBody(s)});wn.position.set(0,10,20);wn.lookAt(0,0,0);const bn=[],Ui=[],up=[1,2,3,4,5,6].map(i=>Cr.load(`textures/numbers/${i}.png`)),dp=[1,2,3,4,5,6].map(i=>Cr.load(`textures/dice/${i}.png`)),fp=[1,2,3,4,5,6].map(i=>Cr.load(`textures/grimwild/${i}.png`)),zo=[up,dp,fp];let Vs=0;function Vo(){const i=new qe.Box(new qe.Vec3(ui/2,ui/2,ui/2)),t=new qe.Body({mass:1,position:new qe.Vec3((Math.random()-.5)*1,10,(Math.random()-.5)*1),shape:i});t.angularVelocity.set(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2),t.quaternion.setFromEuler(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),Ti.addBody(t),bn.push(t);const e=new Yn(ui,ui,ui),a=zo[Vs].map(s=>new $s({map:s})),r=new Ke(e,a);wi.add(r),Ui.push(r)}let ta=!1,Ho=new Date().getTime();window.addEventListener("mousedown",Go);window.addEventListener("mouseup",Wo);window.addEventListener("touchstart",Go);window.addEventListener("touchend",Wo);function Go(){Ho=new Date().getTime()+400,ta=!0,Vo()}function Wo(){ta=!1}setInterval(()=>{ta&&new Date().getTime()>Ho&&Vo()},100);window.addEventListener("keydown",i=>{switch(i.key){case" ":bn.forEach(t=>{Math.abs(t.velocity.y)>.01||t.velocity.set(Math.random()*2-1,Math.random()*5+2,Math.random()*2-1)});break;case"r":bn.forEach(t=>Ti.remove(t)),bn.length=0,Ui.forEach(t=>wi.remove(t)),Ui.length=0;break;case"d":Vs=(Vs+1)%zo.length;break;case"c":pp();break}});function pp(){console.log("==== Dice faces ===="),bn.forEach(i=>{const t=new qe.Vec3;i.quaternion.toEuler(t);const e=t.scale(180/Math.PI),n=mp(Math.round(e.x),Math.round(e.z));n<0?console.warn("Could not determine die value from degrees",e):console.log(n)})}function mp(i,t){return i===0&&t===90?1:i===0&&t===-90?2:i===0&&t===0?3:Math.abs(i)===180&&t===0?4:i===-90&&t===0?5:i===90&&t===0?6:-1}function ko(){requestAnimationFrame(ko),wn.position.x=Math.sin(Date.now()/1e4)*20,wn.position.z=Math.cos(Date.now()/1e4)*20,wn.lookAt(0,0,0),Ti.step(1/60);for(let i=0;i<bn.length;i++)Ui[i].position.copy(bn[i].position),Ui[i].quaternion.copy(bn[i].quaternion);Rr.render(wi,wn)}ko();window.addEventListener("resize",()=>{wn.aspect=window.innerWidth/window.innerHeight,wn.updateProjectionMatrix(),Rr.setSize(window.innerWidth,window.innerHeight)});
