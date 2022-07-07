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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/NativeExternalKeyCapture.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}module.exports=_classCallCheck;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}module.exports=_createClass;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}module.exports=_interopRequireDefault;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/react-native-keyevent/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-native-keyevent/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _reactNative=__webpack_require__(/*! react-native */ "react-native");var KeyEvent=function(){function KeyEvent(){(0,_classCallCheck2.default)(this,KeyEvent);}(0,_createClass2.default)(KeyEvent,[{key:"onKeyDownListener",value:function onKeyDownListener(cb){this.removeKeyDownListener();if(_reactNative.Platform.OS==="ios"){var keyEvent=new _reactNative.NativeEventEmitter(_reactNative.NativeModules.RNKeyEvent);this.listenerKeyDown=keyEvent.addListener('onKeyDown',cb);}else{this.listenerKeyDown=_reactNative.DeviceEventEmitter.addListener('onKeyDown',cb);}}},{key:"removeKeyDownListener",value:function removeKeyDownListener(){if(this.listenerKeyDown){this.listenerKeyDown.remove();this.listenerKeyDown=null;}}},{key:"onKeyUpListener",value:function onKeyUpListener(cb){this.removeKeyUpListener();if(_reactNative.Platform.OS==="ios"){var keyEvent=new _reactNative.NativeEventEmitter(_reactNative.NativeModules.RNKeyEvent);this.listenerKeyUp=keyEvent.addListener('onKeyUp',cb);}else{this.listenerKeyUp=_reactNative.DeviceEventEmitter.addListener('onKeyUp',cb);}}},{key:"removeKeyUpListener",value:function removeKeyUpListener(){if(this.listenerKeyUp){this.listenerKeyUp.remove();this.listenerKeyUp=null;}}},{key:"onKeyMultipleListener",value:function onKeyMultipleListener(cb){this.removeKeyMultipleListener();if(_reactNative.Platform.OS==="ios"){var keyEvent=new _reactNative.NativeEventEmitter(_reactNative.NativeModules.RNKeyEvent);this.listenerKeyMultiple=keyEvent.addListener('onKeyMultiple',cb);}else{this.listenerKeyMultiple=_reactNative.DeviceEventEmitter.addListener('onKeyMultiple',cb);}}},{key:"removeKeyMultipleListener",value:function removeKeyMultipleListener(){if(this.listenerKeyMultiple){this.listenerKeyMultiple.remove();this.listenerKeyMultiple=null;}}}]);return KeyEvent;}();var _default=new KeyEvent();exports.default=_default;

/***/ }),

/***/ "./src/NativeExternalKeyCapture.tsx":
/*!******************************************!*\
  !*** ./src/NativeExternalKeyCapture.tsx ***!
  \******************************************/
/*! exports provided: NativeExternalKeyCapture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeExternalKeyCapture", function() { return NativeExternalKeyCapture; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_keyevent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-keyevent */ "./node_modules/react-native-keyevent/index.js");
/* harmony import */ var react_native_keyevent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_keyevent__WEBPACK_IMPORTED_MODULE_2__);
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



var NativeExternalKeyCapture = /** @class */ (function (_super) {
    __extends(NativeExternalKeyCapture, _super);
    function NativeExternalKeyCapture(props) {
        var _this = _super.call(this, props) || this;
        _this.inputRef = null;
        _this.executeAction = function (code) {
            var _a;
            _this.props.attributeToSet.setValue(code);
            if (((_a = _this.props.onEnter) === null || _a === void 0 ? void 0 : _a.canExecute) && !_this.props.onEnter.isExecuting) {
                _this.props.onEnter.execute();
            }
        };
        _this.handleEnterPressed = function (event) {
            _this.executeAction(event.nativeEvent.text);
            _this.focusTextInput();
        };
        _this.focusTextInput = function () {
            if (_this.inputRef) {
                _this.inputRef.focus();
                _this.inputRef.setNativeProps({ text: "" });
            }
        };
        _this.state = {
            buffer: ""
        };
        return _this;
    }
    NativeExternalKeyCapture.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.readMode === "keyEvent") {
            react_native_keyevent__WEBPACK_IMPORTED_MODULE_2___default.a.onKeyUpListener(function (keyEvent) {
                if (keyEvent.keyCode === 66) {
                    _this.executeAction(_this.state.buffer);
                    _this.setState({ buffer: "" });
                }
                else {
                    _this.setState(function (oldState) { return ({ buffer: oldState.buffer + keyEvent.pressedKey }); });
                }
            });
        }
    };
    NativeExternalKeyCapture.prototype.componentWillUnmount = function () {
        if (this.props.readMode === "keyEvent") {
            react_native_keyevent__WEBPACK_IMPORTED_MODULE_2___default.a.removeKeyUpListener();
        }
    };
    NativeExternalKeyCapture.prototype.render = function () {
        var _this = this;
        // return <View />;
        return this.props.readMode === "hiddenInput" ? (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["TextInput"], { autoFocus: true, blurOnSubmit: false, ref: function (input) { return (_this.inputRef = input); }, onSubmitEditing: this.handleEnterPressed, style: { opacity: 0, height: 0 }, onBlur: this.focusTextInput })) : (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], null,
            "Buffer: ",
            this.state.buffer));
    };
    return NativeExternalKeyCapture;
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
//# sourceMappingURL=NativeExternalKeyCapture.js.map