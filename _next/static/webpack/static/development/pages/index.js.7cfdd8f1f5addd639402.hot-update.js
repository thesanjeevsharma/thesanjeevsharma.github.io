webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/vanta/dist/vanta.birds.min.js":
false,

/***/ "./node_modules/vanta/dist/vanta.topology.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanta/dist/vanta.topology.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=15)}({0:function(t,e,i){"use strict";function o(t,e){for(let i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function s(){return"undefined"!=typeof navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}i.d(e,"c",(function(){return o})),i.d(e,"e",(function(){return s})),i.d(e,"i",(function(){return n})),i.d(e,"h",(function(){return r})),i.d(e,"g",(function(){return h})),i.d(e,"f",(function(){return a})),i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return u})),i.d(e,"d",(function(){return l})),Number.prototype.clamp=function(t,e){return Math.min(Math.max(this,t),e)};const n=t=>t[Math.floor(Math.random()*t.length)];function r(t,e){return null==t&&(t=0),null==e&&(e=1),t+Math.random()*(e-t)}function h(t,e){return null==t&&(t=0),null==e&&(e=1),Math.floor(t+Math.random()*(e-t+1))}const a=t=>document.querySelector(t),c=t=>"number"==typeof t?"#"+("00000"+t.toString(16)).slice(-6):t,u=(t,e=1)=>{const i=c(t),o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),s=o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null;return"rgba("+s.r+","+s.g+","+s.b+","+e+")"},l=t=>.299*t.r+.587*t.g+.114*t.b},1:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var o=i(0);const s="object"==typeof window;let n=s&&window.THREE||{};s&&!window.VANTA&&(window.VANTA={});const r=s&&window.VANTA||{};r.register=(t,e)=>r[t]=t=>new e(t),r.version="0.5.14";const h=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};r.VantaBase=class{constructor(t={}){if(!s)return!1;r.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const e="function"==typeof this.getDefaultOptions?this.getDefaultOptions():this.defaultOptions;if(this.options=Object(o.c)({mouseControls:!0,touchControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1},e),(t instanceof HTMLElement||"string"==typeof t)&&(t={el:t}),Object(o.c)(this.options,t),this.options.THREE&&(n=this.options.THREE),this.el=this.options.el,null==this.el)h('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const t=this.el;if(this.el=Object(o.f)(t),!this.el)return void h("Cannot find element",t)}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(t){return h("Init error",t),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=Object(o.a)(this.options.backgroundColor)))}this.initMouse(),this.resize(),this.animationLoop();const i=window.addEventListener;i("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(i("scroll",this.windowMouseMoveWrapper),i("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(i("touchstart",this.windowTouchWrapper),i("touchmove",this.windowTouchWrapper))}setOptions(t={}){Object(o.c)(this.options,t)}prepareEl(){let t,e;if("undefined"!=typeof Node&&Node.TEXT_NODE)for(t=0;t<this.el.childNodes.length;t++){const e=this.el.childNodes[t];if(e.nodeType===Node.TEXT_NODE){const t=document.createElement("span");t.textContent=e.textContent,e.parentElement.insertBefore(t,e),e.remove()}}for(t=0;t<this.el.children.length;t++)e=this.el.children[t],"static"===getComputedStyle(e).position&&(e.style.position="relative"),"auto"===getComputedStyle(e).zIndex&&(e.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative")}applyCanvasStyles(t,e={}){Object(o.c)(t.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object(o.c)(t.style,e),t.classList.add("vanta-canvas")}initThree(){n.WebGLRenderer?(this.renderer=new n.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new n.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}windowMouseMoveWrapper(t){const e=this.getCanvasElement();if(!e)return!1;const i=e.getBoundingClientRect(),o=t.clientX-i.left,s=t.clientY-i.top;o>=0&&s>=0&&o<=i.width&&s<=i.height&&(this.mouseX=o,this.mouseY=s,this.options.mouseEase||this.triggerMouseMove(o,s))}windowTouchWrapper(t){if(1===t.touches.length){const e=this.getCanvasElement();if(!e)return!1;const i=e.getBoundingClientRect(),o=t.touches[0].clientX-i.left,s=t.touches[0].clientY-i.top;o>=0&&s>=0&&o<=i.width&&s<=i.height&&(this.mouseX=o,this.mouseY=s,this.options.mouseEase||this.triggerMouseMove(o,s))}}triggerMouseMove(t,e){this.uniforms&&(this.uniforms.iMouse.value.x=t/this.scale,this.uniforms.iMouse.value.y=e/this.scale);const i=t/this.width,o=e/this.height;"function"==typeof this.onMouseMove&&this.onMouseMove(i,o)}setSize(){this.scale||(this.scale=1),Object(o.e)()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}isOnScreen(){const t=this.el.offsetHeight,e=this.el.getBoundingClientRect(),i=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,o=e.top+i;return o-window.innerHeight<=i&&i<=o+t}animationLoop(){return this.t||(this.t=0),this.t+=1,this.t2||(this.t2=0),this.t2+=this.options.speed||1,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2),this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),"function"==typeof this.afterRender&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}init(){"function"==typeof this.onInit&&this.onInit()}destroy(){"function"==typeof this.onDestroy&&this.onDestroy();const t=window.removeEventListener;t("touchstart",this.windowTouchWrapper),t("touchmove",this.windowTouchWrapper),t("scroll",this.windowMouseMoveWrapper),t("mousemove",this.windowMouseMoveWrapper),t("resize",this.resize),window.cancelAnimationFrame(this.req),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null)}},e.b=r.VantaBase},15:function(t,e,i){"use strict";i.r(e);var o=i(3),s=i(0);let n="object"==typeof window&&window.p5;class r extends o.b{static initClass(){this.prototype.p5=!0,this.prototype.defaultOptions={color:9016910,backgroundColor:8738}}constructor(t){n=t.p5||n,super(t)}onInit(){const t=this;new n((function(e){let i=t.width,o=t.height,r=100,h=10,a=.003,c=.1,u=(i+2*r)/h,l=(o+2*r)/h,d=[],p=4500,f=[],m=0;function w(t,i,o){let s=0,n=1,r=e.createVector(0,0),h=e.createVector(0,0);for(let a=0;a<100;a++){let c=a/100*e.TAU,u=e.createVector(t+e.cos(c)*o,i+e.sin(c)*o),l=e.noise(u.x,u.y);l>s&&(s=l,r.x=u.x,r.y=u.y),l<n&&(n=l,h.x=u.x,h.y=u.y)}let a=e.createVector(h.x-r.x,h.y-r.y);return a.normalize().mult(s-n),a}function y(t,i){return t=e.constrain(t,0,e.width+2*r),i=e.constrain(i,0,e.height+2*r),d[e.floor(i/h)][e.floor(t/h)]}function g(t,e){return(t%e+e)%e}e.setup=function(){t.initP5(e),e.smooth(),e.noStroke(),function(){for(let t=0;t<p;t++){let i=e.random(e.width+2*r),o=e.random(e.height+2*r);f.push({prev:e.createVector(i,o),pos:e.createVector(i,o),vel:e.createVector(0,0),acc:e.createVector(0,0),col:e.random(255),seed:t})}}(),function(){for(let t=0;t<l;t++){let e=[];for(let i=0;i<u;i++)e.push(w(i*a,t*a,c));d.push(e)}}()},e.draw=function(){e.translate(-r,-r),function(){for(let t=0;t<p;t++){let i=f[t],o=y(i.pos.x,i.pos.y);i.prev.x=i.pos.x,i.prev.y=i.pos.y,i.pos.x=g(i.pos.x+i.vel.x,e.width+2*r),i.pos.y=g(i.pos.y+i.vel.y,e.height+2*r),i.vel.add(i.acc).normalize().mult(2.2),i.acc=e.createVector(0,0),i.acc.add(o).mult(3)}}(),function(){e.strokeWeight(1),e.stroke(Object(s.b)(t.options.color,.05));for(let t=0;t<f.length;t++)n.Vector.dist(f[t].prev,f[t].pos)<10&&e.line(f[t].prev.x,f[t].prev.y,f[t].pos.x,f[t].pos.y)}(),m+=.002}}))}}r.initClass(),e.default=o.a.register("TOPOLOGY",r)},3:function(t,e,i){"use strict";i.d(e,"b",(function(){return r}));var o=i(1),s=i(0);i.d(e,"a",(function(){return o.a}));let n="object"==typeof window&&window.p5;class r extends o.b{constructor(t){n=t.p5||n,super(t),this.mode="p5"}initP5(t){const e=this,i=t.createCanvas(e.width,e.height);i.parent(e.el),e.applyCanvasStyles(t.canvas,{background:Object(s.a)(e.options.backgroundColor)}),e.p5renderer=i,e.p5canvas=t.canvas,e.p5=t}restart(){this.p5&&"object"==typeof this.p5&&this.p5.remove(),super.restart()}destroy(){this.p5&&"object"==typeof this.p5&&this.p5.remove(),super.destroy()}resize(){super.resize(),this.p5&&this.p5.resizeCanvas&&this.p5.resizeCanvas(this.width,this.height)}}}})}));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vanta_dist_vanta_topology_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanta/dist/vanta.topology.min */ "./node_modules/vanta/dist/vanta.topology.min.js");
/* harmony import */ var vanta_dist_vanta_topology_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_topology_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _this = undefined,
    _jsxFileName = "E:\\Projects\\thesanjeevsharma\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Home = function Home() {
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }, __jsx("section", {
    className: "h-screen py-16 text-white text-left flex flex-col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "text-5xl font-bold mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 16
    }
  }, "Hello,"), __jsx("h3", {
    className: "text-xl font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }
  }, "I am"), __jsx("h1", {
    className: "text-3xl font-bold mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 16
    }
  }, "Sanjeev Sharma"), __jsx("p", {
    className: "text-md mb-32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 16
    }
  }, "I am working as a ", __jsx("span", {
    className: "text-green-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 37
    }
  }, "Full stack developer"), " at a startup in Bangalore, Karnataka(IN). My area of expertise is web technologies but my knowledge is not limited to just that. ", ';)')), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["WorkEx"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["OtherStuff"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7cfdd8f1f5addd639402.hot-update.js.map