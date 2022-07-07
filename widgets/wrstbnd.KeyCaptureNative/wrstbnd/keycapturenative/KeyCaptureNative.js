module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/KeyCaptureNative.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/barcodescanneruart/index.js":
/*!**************************************************!*\
  !*** ./node_modules/barcodescanneruart/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _reactNative=__webpack_require__(/*! react-native */ "react-native");var Scanner=_reactNative.NativeModules.Reader;Scanner.on=function(eventName,handler){if(!allowedEvents.includes(eventName)){throw new Error("Event name "+eventName+" is not a supported event.");}_reactNative.DeviceEventEmitter.addListener(eventName,handler);};Scanner.off=function(eventName,handler){if(!allowedEvents.includes(eventName)){throw new Error("Event name "+eventName+" is not a supported event.");}_reactNative.DeviceEventEmitter.removeListener(eventName,handler);};module.exports=Scanner;

/***/ }),

/***/ "./src/KeyCaptureNative.tsx":
/*!**********************************!*\
  !*** ./src/KeyCaptureNative.tsx ***!
  \**********************************/
/*! exports provided: KeyCaptureNative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCaptureNative", function() { return KeyCaptureNative; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var barcodescanneruart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! barcodescanneruart */ "./node_modules/barcodescanneruart/index.js");
/* harmony import */ var barcodescanneruart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(barcodescanneruart__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var KeyCaptureNative = /** @class */ (function (_super) {
    __extends(KeyCaptureNative, _super);
    function KeyCaptureNative() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscription = null;
        _this.onScan = function (event) {
            _this.props.inputString.setValue(event);
            if (_this.props.onScan && _this.props.onScan.canExecute && !_this.props.onScan.isExecuting) {
                _this.props.onScan.execute();
            }
        };
        return _this;
    }
    KeyCaptureNative.prototype.componentDidMount = function () {
        if (barcodescanneruart__WEBPACK_IMPORTED_MODULE_2___default.a) {
            barcodescanneruart__WEBPACK_IMPORTED_MODULE_2___default.a.startService(function (err) { return console.error(err); }, function () {
                // empty
            });
            this.subscription = new react_native__WEBPACK_IMPORTED_MODULE_1__["NativeEventEmitter"]().addListener("barcodeData", this.onScan);
        }
    };
    KeyCaptureNative.prototype.componentWillUnmount = function () {
        if (this.subscription) {
            this.subscription.remove();
        }
    };
    KeyCaptureNative.prototype.render = function () {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], null);
    };
    return KeyCaptureNative;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ })

/******/ });
//# sourceMappingURL=KeyCaptureNative.js.map