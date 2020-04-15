webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons */ "./assets/icons/index.js");
var _this = undefined,
    _jsxFileName = "E:\\Projects\\thesanjeevsharma\\pages\\projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Projects = function Projects() {
  var projects = [{
    name: 'Mooon',
    description: 'Get anonymous feedback from others',
    visit: 'http://mooonme.herokuapp.com',
    code: '',
    tags: ['React', 'Redux', 'Node', 'MongoDB']
  }, {
    name: 'react-music-player',
    description: 'Music player UI',
    visit: '',
    code: 'https://github.com/thesanjeevsharma/react-music-player',
    tags: ['React', 'Redux']
  }, {
    name: 'dope-pip',
    description: "PIP GUI for people who can't remember commands",
    visit: '',
    code: 'https://github.com/thesanjeevsharma/dope-pip',
    tags: ['Tkinter', 'Python']
  }, {
    name: 'notSoSmart-Email',
    description: 'GMail like mailing service built solely using AJAX (when I was a n00b)',
    visit: '',
    code: 'https://github.com/thesanjeevsharma/notSoSmart-Email-Service',
    tags: ['PHP', 'AJAX']
  }];
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }
  }, __jsx("section", {
    className: "py-16 text-white text-center py-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-4xl font-bold text-purple-400 mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 16
    }
  }, "Projects"), __jsx("div", {
    className: "grid grid-cols-1 gap-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 16
    }
  }, projects.map(function (project) {
    return __jsx("div", {
      className: "bg-gray p-4 text-left flex flex-col rounded",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 22
      }
    }, __jsx("span", {
      className: "text-xl font-bold mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }, project.name), __jsx("span", {
      className: "text-sm font-thin mb-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }, project.description), project.visit && __jsx("a", {
      href: project.visit,
      target: "_blank",
      className: "text-purple-400 mr-4 mb-2 flex items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 28
      }
    }, __jsx("span", {
      className: "mr-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 31
      }
    }, "Visit"), " ", __jsx(_assets_icons__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      color: "#B794F4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 67
      }
    })), project.code && __jsx("a", {
      href: project.code,
      target: "_blank",
      className: "text-purple-400 mr-4 mb-2 flex items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 28
      }
    }, __jsx("span", {
      className: "mr-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 31
      }
    }, "Code"), " ", __jsx(_assets_icons__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      color: "#B794F4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 66
      }
    })), __jsx("div", {
      className: "flex",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, project.tags.map(function (tag) {
      return __jsx("span", {
        className: "p-1 bg-purple-400 mr-1 mb-1 text-sm rounded-sm font-medium",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 31
        }
      }, tag);
    })));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.432c1bcf12203d288329.hot-update.js.map