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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/counterActions */ "./redux/actions/counterActions.jsx");
/* harmony import */ var _redux_reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/post */ "./redux/reducers/post.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable no-nested-ternary */

/* eslint-disable no-useless-constructor */

/* eslint-disable react/destructuring-assignment */
 // import { connect, useDispatch, useSelector } from 'react-redux';



 // class App extends React.Component {
//   static getInitialProps({ store }) {}
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.incrementCounter} type="button">Increment</button>
//         <button onClick={this.props.decrementCounter} type="button">Decrement</button>
//         <h1>{this.props.counter}</h1>
//       </div>
//     );
//   }
// }

const App = () => {
  const {
    value
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.counter, []);
  const {
    data,
    pending,
    error
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post, []); // console.log(aaa);

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); // console.log(value);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // console.log(postActions);
    console.log(value);
    dispatch(_redux_reducers_post__WEBPACK_IMPORTED_MODULE_3__["getPost"](value));
  }, [value]);

  const aa = () => {
    dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__["increment"])());
  };

  const bb = () => {
    dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__["decrement"])());
  };

  return __jsx("div", null, value, __jsx("button", {
    type: "button",
    onClick: aa
  }, "\uC99D\uAC00"), __jsx("button", {
    type: "button",
    onClick: bb
  }, "\uAC10\uC18C"), pending ? __jsx("h2", null, "\uB85C\uB529\uC911...") : error ? __jsx("h1", null, "\uC5D0\uB7EC\uBC1C\uC0DD!") : __jsx("div", null, __jsx("h1", null, data.title), __jsx("p", null, data.body)));
}; // const mapStateToProps = (state) => ({
//   counter: state.counter.value,
// });
// const mapDispatchToProps = {
//   incrementCounter,
//   decrementCounter,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./redux/actions/counterActions.jsx":
/*!******************************************!*\
  !*** ./redux/actions/counterActions.jsx ***!
  \******************************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER, increment, decrement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // Action Types

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'; // Action Creator

const increment = () => ({
  type: INCREMENT_COUNTER
});
const decrement = () => ({
  type: DECREMENT_COUNTER
}); // export const incrementAsync = () => (dispatch) => { // dispatch 를 파라미터로 가지는 함수를 리턴합니다.
//   setTimeout(() => {
//     // 1 초뒤 dispatch 합니다
//     dispatch(increment());
//   }, 1000);
// };
// export const decrementAsync = () => (dispatch) => { // dispatch 를 파라미터로 가지는 함수를 리턴합니다.
//   setTimeout(() => {
//     // 1 초뒤 dispatch 합니다
//     dispatch(decrement());
//   }, 1000);
// };
// export const incrementIfOdd = () => (dispatch, getState) => {
//   const { counter } = getState();
//   // console.log(counter);
//   if (counter.value >= 5) {
//     return;
//   }
//   dispatch(increment());
// };

/***/ }),

/***/ "./redux/reducers/post.js":
/*!********************************!*\
  !*** ./redux/reducers/post.js ***!
  \********************************/
/*! exports provided: getPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPost", function() { return getPost; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getPostAPI(postId) {
  console.log(postId);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://jsonplaceholder.typicode.com/posts/${postId}`); // return axios.get('../');
}

const initialState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: ''
  }
};
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';
const getPost = postId => dispatch => {
  // 먼저, 요청이 시작했다는것을 알립니다
  console.log('test');
  dispatch({
    type: GET_POST_PENDING
  }); // 요청을 시작합니다
  // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다

  return getPostAPI(postId).then(response => {
    // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.
    console.log(response);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response
    });
  }).catch(error => {
    // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
    console.log(error);
    dispatch({
      type: GET_POST_FAILURE,
      payload: error
    });
  });
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_PENDING:
      {
        return _objectSpread({}, state, {
          pending: true,
          error: false
        });
      }

    case GET_POST_SUCCESS:
      {
        const {
          title,
          body
        } = action.payload.data;
        return _objectSpread({}, state, {
          pending: false,
          data: {
            title,
            body
          }
        });
      }

    case GET_POST_FAILURE:
      {
        return _objectSpread({}, state, {
          pending: false,
          error: true
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (handleAction);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Desktop\blog_project\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map