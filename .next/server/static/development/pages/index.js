module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: increment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  value: 0
};
const INCREMENT = 'INCREMENT';
const increment = () => ({
  type: INCREMENT
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return _objectSpread({}, state, {
        value: state.value + 1
      });

    default:
      return _objectSpread({}, state);
  }
};

const store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer);

const Index = () => {
  const state = store.getState();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    id: "cotent",
    className: "jsx-2962595011"
  }, __jsx("div", {
    className: "jsx-2962595011" + " " + "container"
  }, state.value, __jsx("button", {
    onClick: () => store.dispatch(increment()),
    type: "button",
    className: "jsx-2962595011"
  }, "\uC99D\uAC00"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2962595011"
  }, ".container.jsx-2962595011{height:100px;margin:0 auto;width:1200px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxibG9nX3Byb2plY3RcXHBhZ2VzXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNTLEFBR3VCLGFBQ0UsY0FDRCxhQUNFLGdCQUNqQiIsImZpbGUiOiJEOlxcRGVza3RvcFxcYmxvZ19wcm9qZWN0XFxwYWdlc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB2YWx1ZTogMCxcclxufTtcclxuXHJcbmNvbnN0IElOQ1JFTUVOVCA9ICdJTkNSRU1FTlQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlbWVudCA9ICgpID0+IChcclxuICB7XHJcbiAgICB0eXBlOiBJTkNSRU1FTlQsXHJcbiAgfVxyXG4pO1xyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIElOQ1JFTUVOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUgKyAxLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgfTtcclxuICB9XHJcbn07XHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgaWQ9XCJjb3RlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge3N0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzdG9yZS5kaXNwYXRjaChpbmNyZW1lbnQoKSl9IHR5cGU9XCJidXR0b25cIj7spp3qsIA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIGhlaWdodDoxMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICB9ICBcclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Desktop\\\\blog_project\\\\pages\\\\index.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Desktop\blog_project\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map