webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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

var App = function App() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.counter;
  }, []),
      value = _useSelector.value;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }, []),
      data = _useSelector2.data,
      pending = _useSelector2.pending,
      error = _useSelector2.error; // console.log(aaa);


  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); // console.log(value);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // console.log(postActions);
    console.log(value);
    dispatch(_redux_reducers_post__WEBPACK_IMPORTED_MODULE_3__["getPost"](value));
  }, [value]);

  var aa = function aa() {
    dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__["increment"])());
  };

  var bb = function bb() {
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

/***/ })

})
//# sourceMappingURL=index.js.bc5c0bab1bb01bde902a.hot-update.js.map