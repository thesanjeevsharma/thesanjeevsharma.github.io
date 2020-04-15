webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vanta_dist_vanta_topology_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanta/dist/vanta.topology.min */ "./node_modules/vanta/dist/vanta.topology.min.js");
/* harmony import */ var vanta_dist_vanta_topology_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_topology_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.js");


var _this = undefined,
    _jsxFileName = "E:\\Projects\\thesanjeevsharma\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Home = function Home() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      vantaEffect = _React$useState2[0],
      setVantaEffect = _React$useState2[1];

  var vantaRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (!vantaEffect) {
      setVantaEffect(vanta_dist_vanta_topology_min__WEBPACK_IMPORTED_MODULE_2___default()({
        el: vantaRef.current
      }));
    }

    return function () {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }, __jsx("section", {
    className: "h-screen py-16 text-white text-left flex flex-col",
    ref: vantaRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "text-5xl font-bold mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 16
    }
  }, "Hello,"), __jsx("h3", {
    className: "text-xl font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 16
    }
  }, "I am"), __jsx("h1", {
    className: "text-3xl font-bold mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 16
    }
  }, "Sanjeev Sharma"), __jsx("p", {
    className: "text-md mb-32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 16
    }
  }, "I am working as a ", __jsx("span", {
    className: "text-green-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 37
    }
  }, "Full stack developer"), " at a startup in Bangalore, Karnataka(IN). My area of expertise is web technologies but my knowledge is not limited to just that. ", ';)')), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["WorkEx"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["OtherStuff"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.51a0f59a4f684a386548.hot-update.js.map