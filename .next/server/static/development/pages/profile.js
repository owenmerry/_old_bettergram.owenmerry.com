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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/profile-image/index.js":
/*!*******************************************!*\
  !*** ./components/profile-image/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/owenmerry/Sites/my-websites/bettergram.owenmerry.com/components/profile-image/index.js";



var ImageCircle = function ImageCircle(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1103661359", [props.image]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1103661359", [props.image]]]) + " " + "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1103661359",
    dynamic: [props.image],
    __self: this
  }, ".image.__jsx-style-dynamic-selector{width:190px;height:190px;background-image:url('".concat(props.image, "');background-size:cover;background-position:center center;border-radius:50%;margin-right:46px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vd2VubWVycnkvU2l0ZXMvbXktd2Vic2l0ZXMvYmV0dGVyZ3JhbS5vd2VubWVycnkuY29tL2NvbXBvbmVudHMvcHJvZmlsZS1pbWFnZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZ0IsQUFHd0IsWUFDQyxhQUN5QyxxREFDL0Isc0JBQ1ksa0NBQ2pCLGtCQUNBLGtCQUNyQiIsImZpbGUiOiIvVXNlcnMvb3dlbm1lcnJ5L1NpdGVzL215LXdlYnNpdGVzL2JldHRlcmdyYW0ub3dlbm1lcnJ5LmNvbS9jb21wb25lbnRzL3Byb2ZpbGUtaW1hZ2UvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJbWFnZUNpcmNsZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj48L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgIHdpZHRoOjE5MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OjE5MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3Byb3BzLmltYWdlfScpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo0NnB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNpcmNsZVxuIl19 */\n/*@ sourceURL=/Users/owenmerry/Sites/my-websites/bettergram.owenmerry.com/components/profile-image/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageCircle);

/***/ }),

/***/ "./helpers/firebase.js":
/*!*****************************!*\
  !*** ./helpers/firebase.js ***!
  \*****************************/
/*! exports provided: database, auth, googleAuthProvider, storageRoot, storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleAuthProvider", function() { return googleAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageRoot", function() { return storageRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);




var config = {
  apiKey: "AIzaSyB9Mw9rK9wQQS9S-noqnauEcMzYaGLQQPs",
  authDomain: "bettergram-51769.firebaseapp.com",
  databaseURL: "https://bettergram-51769.firebaseio.com",
  projectId: "bettergram-51769",
  storageBucket: "bettergram-51769.appspot.com",
  messagingSenderId: "434119701235"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

var database = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database();
var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
var googleAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
var storageRoot = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage().ref();
var storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_profile_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/profile-image */ "./components/profile-image/index.js");
/* harmony import */ var _helpers_firebase_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/firebase.js */ "./helpers/firebase.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/owenmerry/Sites/my-websites/bettergram.owenmerry.com/pages/profile.js";

// This is the Link API





var Profile =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Profile, _React$Component);

  function Profile() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Profile);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Profile).call(this));
    _this.state = {
      folders: [],
      posts: [],
      user: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Profile, [{
    key: "getData",
    value: function getData() {
      var _this2 = this;

      _helpers_firebase_js__WEBPACK_IMPORTED_MODULE_9__["database"].ref('users/-LcH3_cySnZobSDrvnhc').once('value').then(function (snapshot) {
        _this2.setState({
          user: snapshot.val()
        });
      });
      _helpers_firebase_js__WEBPACK_IMPORTED_MODULE_9__["database"].ref('folders').once('value').then(function (snapshot) {
        _this2.setState({
          folders: snapshot.val()
        });
      });
      _helpers_firebase_js__WEBPACK_IMPORTED_MODULE_9__["database"].ref('posts').once('value').then(function (snapshot) {
        _this2.setState({
          posts: snapshot.val()
        });
      });
    } //   static async getInitialProps() {
    //     this.getData();
    //   }

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "page-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_profile_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        image: this.state.user.userImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "page-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-2617564006" + " " + "page-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.state.user.userName), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "stat-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "stat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-2617564006" + " " + "stat-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "24"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Posts")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "stat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-2617564006" + " " + "stat-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "143"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Views")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "stat stat-long",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-2617564006" + " " + "stat-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "2 days ago"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Last Added to"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-2617564006",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Collections")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.state.folders).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          key: key,
          href: "/folder?id=".concat(key),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          className: "jsx-2617564006" + " " + "grid-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            backgroundImage: 'url(' + _this3.state.folders[key].folderImage + ')'
          },
          className: "jsx-2617564006" + " " + "image image-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-2617564006" + " " + "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, _this3.state.folders[key].folderTitle)));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-2617564006",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Most Recent")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2617564006" + " " + "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.state.posts).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          key: key,
          href: "/folder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          style: {
            backgroundImage: 'url(' + _this3.state.posts[key].postImage + ')'
          },
          className: "jsx-2617564006" + " " + "grid-item image image-scale",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3335784710",
        __self: this
      }, ".heading.jsx-2617564006{border-top:solid 1px #e5e5e5;}.heading.jsx-2617564006 h2.jsx-2617564006{text-align:center;font-size:21px;color:#5a5a5a;font-weight:normal;margin-top:57px;margin-bottom:35px;}.grid.jsx-2617564006{margin-bottom:50px;}.grid-container.jsx-2617564006{margin:0px auto;}.grid-item.jsx-2617564006{float:left;width:33.3333vw;height:33.3333vw;text-align:center;}.image.jsx-2617564006{background-image:url('static/images/photos/instagram-photo.jpg');background-size:cover;background-position:center center;min-height:190px;max-width:190px;margin:0px auto;}.image-circle.jsx-2617564006{border-radius:50%;}.image-circle.jsx-2617564006{border-radius:50%;}.image-scale.jsx-2617564006{min-height:inherit;max-width:inherit;}.text.jsx-2617564006{font-size:23px;font-weight:bold;margin-top:12px;color:black;}a.jsx-2617564006{-webkit-text-decoration:none;text-decoration:none;}@media only screen and (min-width:840px){.grid-item.jsx-2617564006{width:25vw;height:25vw;}}@media only screen and (min-width:1172px){.grid-item.jsx-2617564006{width:293px;height:293px;}}@media only screen and (min-width:1172px){.grid-item.jsx-2617564006{width:20vw;height:20vw;}}.clear.jsx-2617564006{clear:both;}.page-info.jsx-2617564006{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;vertical-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:40px 25px 25px 25px;}.page-name.jsx-2617564006{font-size:33px;font-weight:bold;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;margin:0px 0px 20px;}.page-image.jsx-2617564006{width:190px;height:190px;background-image:url('static/images/folders/folder-cookbook.jpg');background-size:cover;background-position:center center;border-radius:50%;margin-right:46px;}.stat-grid.jsx-2617564006{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:600px;}.stat.jsx-2617564006{-webkit-flex:1;-ms-flex:1;flex:1;margin-right:35px;}.stat-long.jsx-2617564006{min-width:200px;}.stat-title.jsx-2617564006{font-size:29px;margin:0px 0px 10px;-webkit-letter-spacing:-0.9px;-moz-letter-spacing:-0.9px;-ms-letter-spacing:-0.9px;letter-spacing:-0.9px;}.stat-text.jsx-2617564006{font-size:19px;color:#999999;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;}.back.jsx-2617564006{margin:17px 25px 40px;color:#7e7e7e;font-size:16px;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vd2VubWVycnkvU2l0ZXMvbXktd2Vic2l0ZXMvYmV0dGVyZ3JhbS5vd2VubWVycnkuY29tL3BhZ2VzL3Byb2ZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0hvQixBQUs2QyxBQUdYLEFBUUMsQUFJUCxBQUdELEFBT3VELEFBU2hELEFBSUEsQUFHQyxBQUtKLEFBT00sQUFLTixBQU9DLEFBT0QsQUFNSixBQUtFLEFBT0csQUFPSixBQVdDLEFBSU4sQUFJUyxBQUdELEFBS0EsQUFRUSxXQWpIUCxBQXdDQSxBQWNBLEFBTW5CLENBYm9CLEFBZ0NKLEdBbkRJLEFBNENDLEFBNkJFLEFBS04sQ0E3R2pCLEFBcUdBLEVBakhrQixBQStCbEIsQUFJQSxDQTNCQSxBQThCcUIsR0EyRkosQ0F6RWIsQUFjQSxFQVBBLEFBZ0NrRSxFQS9FbEQsRUFuQnBCLEFBNkgwQixHQTlFUCxBQTRDSyxDQXZGUCxBQTRHSSxFQVFLLENBYVIsQ0EzRmxCLE9BdEJxQixHQWZDLENBMkNQLEVBS2YsQ0E0REEsQUFxQjBCLFNBckYxQixFQTVCQSxHQUkwQixDQW5CUCxRQTZFTSxBQXlCTixRQXJHRyxLQW1CZ0IsR0FtRnRDLENBVjBCLEtBZkosS0E1RXRCLFlBNEZzQyxRQXpFbEIsUUFpRUcsS0FrQ3ZCLElBbEdtQixFQTZGbkIsT0FwQnFCLEVBUnJCLEtBaEVtQixFQTBHbkIsU0FqQ3FCLEtBeEVyQixhQXlFQSxNQWxCK0IsMkJBRS9CIiwiZmlsZSI6Ii9Vc2Vycy9vd2VubWVycnkvU2l0ZXMvbXktd2Vic2l0ZXMvYmV0dGVyZ3JhbS5vd2VubWVycnkuY29tL3BhZ2VzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHRoZSBMaW5rIEFQSVxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFByb2ZpbGVJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2ZpbGUtaW1hZ2UnXG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4uL2hlbHBlcnMvZmlyZWJhc2UuanMnXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICAgICAgICBmb2xkZXJzOiBbXSxcbiAgICAgICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgICAgIHVzZXI6IHt9LFxuICAgICAgICAgIH07XG5cblxuICAgIH1cblxuXG5cblxuICAgIGdldERhdGEoKSB7XG5cbiAgICAgICAgZGF0YWJhc2UucmVmKCd1c2Vycy8tTGNIM19jeVNuWm9iU0Rydm5oYycpXG4gICAgICAgIC5vbmNlKCd2YWx1ZScpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB1c2VyOiBzbmFwc2hvdC52YWwoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBkYXRhYmFzZS5yZWYoJ2ZvbGRlcnMnKVxuICAgICAgICAub25jZSgndmFsdWUnKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZm9sZGVyczogc25hcHNob3QudmFsKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgZGF0YWJhc2UucmVmKCdwb3N0cycpXG4gICAgICAgIC5vbmNlKCd2YWx1ZScpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwb3N0czogc25hcHNob3QudmFsKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgIH1cblxuXG4gICAgLy8gICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIC8vICAgICB0aGlzLmdldERhdGEoKTtcbiAgICAvLyAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgfVxuXG4gXG4gcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1pbmZvXCI+XG4gICAgICAgICAgICA8UHJvZmlsZUltYWdlIGltYWdlPXt0aGlzLnN0YXRlLnVzZXIudXNlckltYWdlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRleHRcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS1uYW1lXCI+e3RoaXMuc3RhdGUudXNlci51c2VyTmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN0YXQtdGl0bGVcIj4yNDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiPlBvc3RzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdGF0LXRpdGxlXCI+MTQzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC10ZXh0XCI+Vmlld3M8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdCBzdGF0LWxvbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdGF0LXRpdGxlXCI+MiBkYXlzIGFnbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiPkxhc3QgQWRkZWQgdG88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxuICAgICAgICAgICAgPGgyPkNvbGxlY3Rpb25zPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmZvbGRlcnMpLm1hcCgoa2V5KSA9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17a2V5fSBocmVmPXtgL2ZvbGRlcj9pZD0ke2tleX1gfSA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZSBpbWFnZS1jaXJjbGVcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdGhpcy5zdGF0ZS5mb2xkZXJzW2tleV0uZm9sZGVySW1hZ2UgKyAnKScsfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57dGhpcy5zdGF0ZS5mb2xkZXJzW2tleV0uZm9sZGVyVGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDI+TW9zdCBSZWNlbnQ8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUucG9zdHMpLm1hcCgoa2V5KSA9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17a2V5fSBocmVmPVwiL2ZvbGRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtIGltYWdlIGltYWdlLXNjYWxlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHRoaXMuc3RhdGUucG9zdHNba2V5XS5wb3N0SW1hZ2UgKyAnKScsfX0+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucGFnZS1pbmZve1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRpbmd7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDpzb2xpZCAxcHggI2U1ZTVlNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkaW5nIGgye1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiM1YTVhNWE7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTdweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjM1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZ3JpZHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbjowcHggYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6MzMuMzMzM3Z3O1xuICAgICAgICAgICAgICAgIGhlaWdodDozMy4zMzMzdnc7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3N0YXRpYy9pbWFnZXMvcGhvdG9zL2luc3RhZ3JhbS1waG90by5qcGcnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDoxOTBweDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MTkwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjBweCBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW1hZ2UtY2lyY2xle1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW1hZ2UtY2lyY2xle1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltYWdlLXNjYWxle1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6aW5oZXJpdDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6aW5oZXJpdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjV2dztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI1dnc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzJweCkge1xuICAgICAgICAgICAgICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyOTNweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI5M3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcycHgpIHtcbiAgICAgICAgICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjB2dztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjIwdnc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2xlYXJ7XG4gICAgICAgICAgICAgICAgY2xlYXI6Ym90aDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAucGFnZS1pbmZve1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNDBweCAyNXB4IDI1cHggMjVweDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2UtbmFtZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjBweCAwcHggMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBhZ2UtaW1hZ2V7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTkwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjE5MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3RhdGljL2ltYWdlcy9mb2xkZXJzL2ZvbGRlci1jb29rYm9vay5qcGcnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjQ2cHg7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLnN0YXQtZ3JpZHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjYwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0YXR7XG4gICAgICAgICAgICAgICAgZmxleDoxO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDozNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0YXQtbG9uZ3tcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6MjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RhdC10aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MjlweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MHB4IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC45cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RhdC10ZXh0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiM5OTk5OTk7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIC5iYWNre1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTdweCAyNXB4IDQwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IzdlN2U3ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgICAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MHB4OyAgIFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OkhlbHZldGljYTsgXG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyJdfQ== */\n/*@ sourceURL=/Users/owenmerry/Sites/my-websites/bettergram.owenmerry.com/pages/profile.js */"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1144304041",
        __self: this
      }, "body{padding:0px;margin:0px;font-family:Helvetica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vd2VubWVycnkvU2l0ZXMvbXktd2Vic2l0ZXMvYmV0dGVyZ3JhbS5vd2VubWVycnkuY29tL3BhZ2VzL3Byb2ZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1EyQixBQUc0QixZQUNELFdBQ1csc0JBQzdCIiwiZmlsZSI6Ii9Vc2Vycy9vd2VubWVycnkvU2l0ZXMvbXktd2Vic2l0ZXMvYmV0dGVyZ3JhbS5vd2VubWVycnkuY29tL3BhZ2VzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHRoZSBMaW5rIEFQSVxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFByb2ZpbGVJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2ZpbGUtaW1hZ2UnXG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4uL2hlbHBlcnMvZmlyZWJhc2UuanMnXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICAgICAgICBmb2xkZXJzOiBbXSxcbiAgICAgICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgICAgIHVzZXI6IHt9LFxuICAgICAgICAgIH07XG5cblxuICAgIH1cblxuXG5cblxuICAgIGdldERhdGEoKSB7XG5cbiAgICAgICAgZGF0YWJhc2UucmVmKCd1c2Vycy8tTGNIM19jeVNuWm9iU0Rydm5oYycpXG4gICAgICAgIC5vbmNlKCd2YWx1ZScpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB1c2VyOiBzbmFwc2hvdC52YWwoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBkYXRhYmFzZS5yZWYoJ2ZvbGRlcnMnKVxuICAgICAgICAub25jZSgndmFsdWUnKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZm9sZGVyczogc25hcHNob3QudmFsKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgZGF0YWJhc2UucmVmKCdwb3N0cycpXG4gICAgICAgIC5vbmNlKCd2YWx1ZScpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwb3N0czogc25hcHNob3QudmFsKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgIH1cblxuXG4gICAgLy8gICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIC8vICAgICB0aGlzLmdldERhdGEoKTtcbiAgICAvLyAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgfVxuXG4gXG4gcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1pbmZvXCI+XG4gICAgICAgICAgICA8UHJvZmlsZUltYWdlIGltYWdlPXt0aGlzLnN0YXRlLnVzZXIudXNlckltYWdlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRleHRcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS1uYW1lXCI+e3RoaXMuc3RhdGUudXNlci51c2VyTmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN0YXQtdGl0bGVcIj4yNDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiPlBvc3RzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdGF0LXRpdGxlXCI+MTQzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC10ZXh0XCI+Vmlld3M8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdCBzdGF0LWxvbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdGF0LXRpdGxlXCI+MiBkYXlzIGFnbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiPkxhc3QgQWRkZWQgdG88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxuICAgICAgICAgICAgPGgyPkNvbGxlY3Rpb25zPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmZvbGRlcnMpLm1hcCgoa2V5KSA9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17a2V5fSBocmVmPXtgL2ZvbGRlcj9pZD0ke2tleX1gfSA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZSBpbWFnZS1jaXJjbGVcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdGhpcy5zdGF0ZS5mb2xkZXJzW2tleV0uZm9sZGVySW1hZ2UgKyAnKScsfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57dGhpcy5zdGF0ZS5mb2xkZXJzW2tleV0uZm9sZGVyVGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDI+TW9zdCBSZWNlbnQ8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUucG9zdHMpLm1hcCgoa2V5KSA9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17a2V5fSBocmVmPVwiL2ZvbGRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtIGltYWdlIGltYWdlLXNjYWxlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHRoaXMuc3RhdGUucG9zdHNba2V5XS5wb3N0SW1hZ2UgKyAnKScsfX0+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucGFnZS1pbmZve1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRpbmd7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDpzb2xpZCAxcHggI2U1ZTVlNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkaW5nIGgye1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiM1YTVhNWE7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTdweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjM1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZ3JpZHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbjowcHggYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6MzMuMzMzM3Z3O1xuICAgICAgICAgICAgICAgIGhlaWdodDozMy4zMzMzdnc7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3N0YXRpYy9pbWFnZXMvcGhvdG9zL2luc3RhZ3JhbS1waG90by5qcGcnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDoxOTBweDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MTkwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjBweCBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW1hZ2UtY2lyY2xle1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW1hZ2UtY2lyY2xle1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltYWdlLXNjYWxle1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6aW5oZXJpdDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6aW5oZXJpdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjV2dztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI1dnc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzJweCkge1xuICAgICAgICAgICAgICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyOTNweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI5M3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcycHgpIHtcbiAgICAgICAgICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjB2dztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjIwdnc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2xlYXJ7XG4gICAgICAgICAgICAgICAgY2xlYXI6Ym90aDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAucGFnZS1pbmZve1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNDBweCAyNXB4IDI1cHggMjVweDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2UtbmFtZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjBweCAwcHggMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBhZ2UtaW1hZ2V7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTkwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjE5MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3RhdGljL2ltYWdlcy9mb2xkZXJzL2ZvbGRlci1jb29rYm9vay5qcGcnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjQ2cHg7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLnN0YXQtZ3JpZHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjYwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0YXR7XG4gICAgICAgICAgICAgICAgZmxleDoxO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDozNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0YXQtbG9uZ3tcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6MjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RhdC10aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MjlweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MHB4IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC45cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RhdC10ZXh0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiM5OTk5OTk7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIC5iYWNre1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTdweCAyNXB4IDQwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IzdlN2U3ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgICAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MHB4OyAgIFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OkhlbHZldGljYTsgXG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyJdfQ== */\n/*@ sourceURL=/Users/owenmerry/Sites/my-websites/bettergram.owenmerry.com/pages/profile.js */"));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/owenmerry/Sites/my-websites/bettergram.owenmerry.com/pages/profile.js */"./pages/profile.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=profile.js.map